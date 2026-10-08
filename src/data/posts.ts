// PUBLICAÇÕES (textos do site)
//
// Para publicar um texto novo, copie o modelo abaixo, cole dentro da lista `posts`
// (separado por vírgula) e preencha. O texto aparece sozinho na página /publicacoes.
//
// Formato do campo `body` (separe os blocos com uma linha em branco):
//   Parágrafo normal
//   ## Subtítulo
//   > Citação em destaque
//   - item de lista (uma linha por item)
//
// `date` no formato AAAA-MM-DD. `cover` (opcional): caminho da imagem em public/img,
// ex.: "/img/meu-texto.jpg". `slug` vira o endereço: /publicacoes/<slug> (sem acento nem espaço).

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  cover?: string;
  coverAlt?: string;
  body: string;
};

export const posts: Post[] = [
  // {
  //   slug: "como-lidar-com-a-ansiedade",
  //   title: "Como lidar com a ansiedade no dia a dia",
  //   excerpt: "Uma breve reflexão sobre o que a ansiedade tenta nos dizer.",
  //   date: "2026-11-01",
  //   category: "Ansiedade",
  //   cover: "/img/gisela-leitura.jpg",
  //   coverAlt: "Gisela lendo na poltrona do consultório",
  //   body: `Primeiro parágrafo do texto.
  //
  // ## Um subtítulo
  //
  // Segundo parágrafo do texto.
  //
  // > Uma frase em destaque.
  //
  // - Primeiro item
  // - Segundo item`,
  // },
];
