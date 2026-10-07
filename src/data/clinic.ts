// Todos os textos, links e imagens do site ficam aqui.
// Para editar o site, mexa só neste arquivo.

const whatsapp = "5551992390595";
const whatsappMessage =
  "Olá, Gisela! Vim pelo seu site e gostaria de agendar uma consulta.";

const address = {
  street: "Av. Independência, 1183",
  complement: "Sala 810",
  neighborhood: "Independência",
  city: "Porto Alegre",
  state: "RS",
  zip: "90035-077",
};

const mapQuery = `${address.street}, ${address.neighborhood}, ${address.city} - ${address.state}, ${address.zip}`;

export const clinic = {
  name: "Gisela Mottin",
  tagline: "Psicoterapia e Neuropsicologia",
  crp: "CRP 07/22083",
  whatsapp,
  whatsappDisplay: "(51) 99239-0595",
  whatsappLink: `https://wa.me/${whatsapp}?text=${encodeURIComponent(whatsappMessage)}`,
  instagram: "https://instagram.com/psicogimottin",
  instagramHandle: "@psicogimottin",
  facebook: "https://facebook.com/psicogimottin",
  doctoralia:
    "https://www.doctoralia.com.br/gisela-mottin/psicologo-psicanalista/porto-alegre",
  address,
  mapEmbed: `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`,
  mapLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`,
};

export const nav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Neuropsicologia", href: "#neuropsicologia" },
  { label: "Consultório", href: "#consultorio" },
  { label: "Contato", href: "#contato" },
];

export const hero = {
  eyebrow: "Psicologia · Psicanálise · Neuropsicologia",
  title: "Uma escuta sem julgamento para",
  titleAccent: "cuidar de você",
  text: "Psicoterapia individual e avaliação neuropsicológica em Porto Alegre, com acolhimento, ética e profundidade, presencialmente ou online.",
  image: "/img/gisela-mesa.jpg",
  chips: ["Adolescentes, adultos e idosos", "Presencial e online", clinic.crp],
};

export const about = {
  eyebrow: "Sobre",
  title: "Psicóloga e psicanalista, com olhar da neuropsicologia",
  paragraphs: [
    "Gisela Mottin é psicóloga em Porto Alegre, com ênfase em psicanálise. Acredita na escuta sem julgamento como ponto de partida para que cada pessoa possa compreender o que sente e reencontrar o próprio caminho.",
    "Atende adolescentes, adultos e idosos em psicoterapia individual, acompanhando temas como ansiedade, depressão, luto, crises existenciais e dificuldades nos relacionamentos.",
    "Com formação em neuropsicologia e neurociências, também realiza avaliações e reabilitação cognitiva, unindo a sensibilidade da clínica psicanalítica ao rigor da avaliação.",
  ],
  image: "/img/gisela-poltrona.jpg",
  stats: [
    { value: "+10", label: "anos de clínica psicanalítica" },
    { value: "12+", label: "atendimento a partir dos 12 anos" },
    { value: "2", label: "modalidades: presencial e online" },
  ],
};

export const education = {
  title: "Formação e trajetória",
  items: [
    { title: "Psicologia", place: "Centro Universitário Metodista de Porto Alegre" },
    { title: "Formação em Psicanálise", place: "Instituto Wilfred Bion" },
    { title: "Especialização em Neuropsicologia", place: "IPOG" },
    { title: "Pós-graduação em Neurociências do Pensamento", place: "PUCRS" },
    { title: "Especialização em Psicologia Hospitalar", place: "Instituto de Cardiologia de Porto Alegre" },
    { title: "Fundamentos de Coordenação de Grupos", place: "Instituto Pichon-Rivière" },
    { title: "Especialização em Terapia de Casais", place: "" },
  ],
  experience: [
    "Mais de 10 anos de atendimento clínico no Instituto Wilfred Bion de Psicanálise",
    "Consultório particular em Porto Alegre",
    "Fundação de Atendimento a Deficiência Múltipla (FADEM)",
    "Avaliação neuropsicológica de crianças, adolescentes, adultos e idosos",
  ],
};

export const services = {
  eyebrow: "Atuação",
  title: "Como posso te acompanhar",
  intro:
    "Cada processo é único. Na primeira conversa entendemos juntos a sua demanda e qual caminho faz mais sentido.",
  items: [
    {
      icon: "chat",
      title: "Psicoterapia psicanalítica",
      text: "Espaço individual e sigiloso para falar do que pesa, entender padrões e construir novas formas de viver. Para adolescentes, adultos e idosos.",
    },
    {
      icon: "heart",
      title: "Terapia de casal",
      text: "Um lugar de escuta para o casal rever combinados, melhorar a comunicação e atravessar conflitos com mais clareza.",
    },
    {
      icon: "leaf",
      title: "Luto e perdas",
      text: "Acolhimento para quem vive uma perda, seja de uma pessoa, de uma fase ou de um projeto de vida, respeitando o tempo de cada um.",
    },
    {
      icon: "brain",
      title: "Avaliação neuropsicológica",
      text: "Investigação de memória, atenção e outras funções cognitivas, com hipótese diagnóstica e plano de tratamento para todas as idades.",
    },
    {
      icon: "clipboard",
      title: "Avaliação psicológica",
      text: "Processo estruturado, com instrumentos e entrevistas, para compreender aspectos emocionais e de personalidade.",
    },
    {
      icon: "spark",
      title: "Reabilitação e estimulação cognitiva",
      text: "Exercícios individuais ou em grupo para manter e recuperar funções cognitivas, inclusive após traumas ou em quadros demenciais.",
    },
  ],
  topicsTitle: "Queixas e temas que acolho",
  topics: [
    "Ansiedade",
    "Depressão",
    "Estresse",
    "Crise existencial",
    "Luto",
    "Ataque de pânico",
    "Conflitos de relacionamento",
    "Alterações de humor",
    "Angústia e medo",
    "Sintomas psicossomáticos",
    "Problemas de memória",
    "Bullying",
    "Dependência tecnológica",
  ],
};

export const neuro = {
  eyebrow: "Neuropsicologia",
  title: "Entender como a mente funciona para cuidar melhor",
  text: "A avaliação neuropsicológica investiga memória, atenção, linguagem e funções executivas. É indicada em dúvidas sobre TDAH, TEA, queixas de memória, acompanhamento de idosos e após eventos como traumas.",
  bullets: [
    "Hipótese diagnóstica e plano de tratamento",
    "Crianças, adolescentes, adultos e idosos",
    "Reabilitação neuropsicológica e estimulação cognitiva",
    "Devolutiva clara, em linguagem acessível",
  ],
  image: "/img/gisela-avaliacao.jpg",
};

export const howItWorks = {
  eyebrow: "Como funciona",
  title: "Do primeiro contato ao acompanhamento",
  steps: [
    {
      title: "Primeiro contato",
      text: "Você escreve pelo WhatsApp, conta brevemente o que procura e combinamos o melhor horário.",
    },
    {
      title: "Primeira consulta",
      text: "Uma conversa de acolhimento para entender sua história, suas dúvidas e definir o caminho do cuidado.",
    },
    {
      title: "Acompanhamento",
      text: "Sessões regulares, presenciais no consultório ou online por vídeo, com sigilo e respeito ao seu ritmo.",
    },
  ],
};

export const video = {
  eyebrow: "Conheça a Gisela",
  title: "Um convite para conversarmos",
  text: "Assista a uma breve apresentação sobre o trabalho e a forma de atendimento.",
  src: "/video/apresentacao.mp4",
  poster: "/video/poster.jpg",
};

export const gallery = {
  eyebrow: "Consultório",
  title: "Um ambiente pensado para você se sentir à vontade",
  text: "Acolhedor, silencioso e com a identidade de cuidado que a logo representa.",
  items: [
    { src: "/img/placa-logo.jpg", alt: "Logo Gisela Mottin Psicoterapia iluminada em painel de madeira", span: "row-span-2" },
    { src: "/img/sala-1.jpg", alt: "Sala de atendimento com poltrona, sofá e quadros de árvores", span: "" },
    { src: "/img/placa-planta.jpg", alt: "Recepção do consultório com a logo e uma planta", span: "row-span-2" },
    { src: "/img/sala-2.jpg", alt: "Sala de atendimento com sofá e mesa lateral", span: "" },
    { src: "/img/gisela-placa.jpg", alt: "Gisela ao lado da logo do consultório", span: "col-span-2" },
    { src: "/img/gisela-leitura.jpg", alt: "Gisela lendo na poltrona do consultório", span: "col-span-2 lg:col-span-1" },
  ],
};

export const contact = {
  eyebrow: "Contato",
  title: "Vamos conversar?",
  text: "Agende sua consulta pelo WhatsApp. Atendo presencialmente em Porto Alegre e online para todo o Brasil.",
};
