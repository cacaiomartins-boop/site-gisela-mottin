import { useEffect, useState, type MouseEvent, type ReactNode } from "react";

// Roteador mínimo (sem dependências extras): /, /publicacoes e /publicacoes/<slug>

export function navigate(to: string) {
  const url = new URL(to, window.location.origin);
  const same =
    url.pathname === window.location.pathname && url.hash === window.location.hash;
  if (same) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  window.history.pushState({}, "", url.pathname + url.search + url.hash);
  window.dispatchEvent(new Event("app:navigate"));
}

export function useLocation() {
  const read = () => ({
    path: window.location.pathname.replace(/\/+$/, "") || "/",
    hash: window.location.hash,
  });
  const [loc, setLoc] = useState(read);

  useEffect(() => {
    const on = () => setLoc(read());
    window.addEventListener("popstate", on);
    window.addEventListener("hashchange", on);
    window.addEventListener("app:navigate", on);
    return () => {
      window.removeEventListener("popstate", on);
      window.removeEventListener("hashchange", on);
      window.removeEventListener("app:navigate", on);
    };
  }, []);

  return loc;
}

type LinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
};

export function Link({ to, children, className, onClick, ariaLabel }: LinkProps) {
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    navigate(to);
    onClick?.();
  };
  return (
    <a href={to} className={className} onClick={handle} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
