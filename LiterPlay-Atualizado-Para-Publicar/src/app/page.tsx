import Link from "next/link";

const subjects = [
  { icon: "📚", name: "Literatura", detail: "Autores, escolas literárias e interpretação de textos.", tag: "Leitura" },
  { icon: "✍️", name: "Português", detail: "Gramática, escrita, vocabulário e comunicação.", tag: "Linguagens" },
  { icon: "🏛️", name: "História", detail: "Personagens, períodos históricos e acontecimentos.", tag: "Humanas" },
  { icon: "🌎", name: "Geografia", detail: "Mapas, sociedade, natureza e espaço geográfico.", tag: "Humanas" },
  { icon: "➗", name: "Matemática", detail: "Raciocínio lógico, problemas e desafios numéricos.", tag: "Exatas" },
  { icon: "🔬", name: "Ciências", detail: "Descobertas, experiências e conhecimento do mundo.", tag: "Natureza" },
];

export default function Home() {
  return <main>
    <section className="container">
      <div className="hero public-hero">
        <div className="hero-copy">
          <span className="eyebrow">✦ Educação que envolve e transforma</span>
          <h1>Aprender pode ser a sua maior aventura.</h1>
          <p>O LiterPlay conecta conhecimento, desafios e diversão em uma experiência de aprendizagem feita para estudantes e escolas.</p>
          <div className="hero-actions">
            <Link className="btn light" href="/demonstracao">Conhecer a plataforma <span aria-hidden="true">→</span></Link>
            <a className="hero-link" href="#como-funciona">Descobrir como funciona</a>
          </div>
          <div className="hero-proof"><span>✓ Aulas e desafios</span><span>✓ Progresso acompanhado</span><span>✓ Espaço para escolas</span></div>
        </div>
        <div className="hero-visual" aria-label="Livros, aprendizado e jogos" role="img">
          <div className="visual-orbit orbit-one"></div><div className="visual-orbit orbit-two"></div>
          <div className="visual-book">📖</div><div className="visual-chip chip-top">⭐ +20 XP</div><div className="visual-chip chip-bottom">🏆 Novo nível!</div>
        </div>
      </div>

      <div className="public-stats">
        <div><strong>6 áreas</strong><span>de conhecimento para explorar</span></div>
        <div><strong>Aprenda + jogue</strong><span>conteúdo com participação ativa</span></div>
        <div><strong>Uma escola de cada vez</strong><span>espaços organizados por instituição</span></div>
      </div>

      <section className="public-section" id="materias">
        <div className="section-kicker">UM UNIVERSO DE DESCOBERTAS</div>
        <div className="section-head"><div><h2>Conhecimento para ir mais longe</h2><p className="section-subtitle">Explore diferentes áreas e descubra novas formas de aprender.</p></div><Link href="/demonstracao">Ver demonstração →</Link></div>
        <div className="grid subject-grid">{subjects.map((s) => <article className="card subject-card" key={s.name}><div className="subject-card-top"><div className="subject-icon">{s.icon}</div><span className="subject-tag">{s.tag}</span></div><h3>{s.name}</h3><p>{s.detail}</p></article>)}</div>
      </section>

      <section className="public-section" id="como-funciona">
        <div className="section-kicker">SIMPLES DE COMEÇAR</div><div className="section-head"><div><h2>Aprenda. Pratique. Evolua.</h2><p className="section-subtitle">Uma jornada que transforma cada atividade em uma oportunidade.</p></div></div>
        <div className="grid steps-grid">
          <article className="step-card"><span className="step-number">01</span><div className="step-icon">📘</div><h3>Explore conteúdos</h3><p>Acesse aulas organizadas por matéria e avance no seu ritmo.</p></article>
          <article className="step-card"><span className="step-number">02</span><div className="step-icon">🎮</div><h3>Encare desafios</h3><p>Pratique o que aprendeu com atividades e questionários.</p></article>
          <article className="step-card"><span className="step-number">03</span><div className="step-icon">🚀</div><h3>Acompanhe sua evolução</h3><p>Conquiste pontos, acompanhe seu progresso e celebre cada avanço.</p></article>
        </div>
      </section>

      <section className="school-banner"><div><span className="section-kicker">PARA TODAS AS ESCOLAS</span><h2>Uma experiência de aprendizagem que aproxima toda a comunidade escolar.</h2><p>O LiterPlay está sendo preparado para oferecer espaços próprios para cada instituição, com estudantes, professores, turmas e atividades organizados.</p></div><Link className="btn light" href="/demonstracao">Ver o projeto <span aria-hidden="true">→</span></Link></section>
      <p className="preview-note">Esta é uma prévia pública de apresentação do LiterPlay. As áreas de cadastro, banco de dados e gestão escolar ainda estão em preparação.</p>
    </section>
  </main>;
}
