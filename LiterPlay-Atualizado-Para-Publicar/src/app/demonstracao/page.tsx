import Link from "next/link";

const leaderboard = [
  { place: "01", name: "Ana Clara", school: "Escola demonstração", xp: "1.240 XP", medal: "🥇" },
  { place: "02", name: "Lucas Mendes", school: "Escola demonstração", xp: "980 XP", medal: "🥈" },
  { place: "03", name: "Mariana Alves", school: "Escola demonstração", xp: "860 XP", medal: "🥉" },
];
const lessons = [
  { icon: "📜", area: "Literatura", title: "O que é literatura?", level: "Iniciante", time: "8 min" },
  { icon: "🖋️", area: "Português", title: "Figuras de linguagem", level: "Intermediário", time: "12 min" },
  { icon: "🏺", area: "História", title: "Civilizações antigas", level: "Iniciante", time: "10 min" },
];

export default function DemonstracaoPage() {
  return <main className="container demo-page">
    <div className="demo-heading"><div><span className="section-kicker">PRÉVIA INTERATIVA</span><h1>Conheça o ambiente LiterPlay</h1><p>Uma visão de exemplo de como estudantes poderão acompanhar suas atividades e conquistas.</p></div><span className="demo-label">DADOS FICTÍCIOS</span></div>
    <div className="demo-welcome"><div><span>PAINEL DO ESTUDANTE</span><h2>Olá, estudante! 👋</h2><p>Sua próxima descoberta começa agora.</p></div><div className="demo-avatar">L</div></div>
    <div className="demo-metrics"><article><span>⭐</span><small>Pontuação</small><strong>1.240 XP</strong><em>Exemplo de progresso</em></article><article><span>📚</span><small>Aulas concluídas</small><strong>18</strong><em>Exemplo de progresso</em></article><article><span>🏅</span><small>Conquistas</small><strong>6</strong><em>Exemplo de progresso</em></article></div>
    <div className="demo-columns">
      <section className="panel demo-panel"><div className="demo-panel-head"><div><span className="section-kicker">CONTINUE APRENDENDO</span><h2>Aulas em destaque</h2></div><span className="demo-mini-tag">Exemplo</span></div>{lessons.map((lesson) => <article className="demo-lesson" key={lesson.title}><div className="demo-lesson-icon">{lesson.icon}</div><div className="demo-lesson-info"><small>{lesson.area} · {lesson.level}</small><strong>{lesson.title}</strong><span>{lesson.time} de leitura</span></div><span className="demo-arrow">→</span></article>)}</section>
      <section className="panel demo-panel"><div className="demo-panel-head"><div><span className="section-kicker">DESTAQUES</span><h2>Ranking de exemplo</h2></div><span className="demo-mini-tag">Fictício</span></div>{leaderboard.map((student) => <article className="demo-rank" key={student.place}><span className="demo-medal">{student.medal}</span><div><strong>{student.name}</strong><small>{student.school}</small></div><b>{student.xp}</b></article>)}<p className="demo-disclaimer">Os nomes, pontos e resultados acima são ilustrativos e não representam alunos reais.</p></section>
    </div>
    <section className="demo-bottom"><div><h2>Uma plataforma, várias escolas.</h2><p>O projeto está sendo estruturado para que cada escola tenha seu próprio ambiente e seus dados protegidos.</p></div><Link className="btn" href="/">Voltar ao início</Link></section>
  </main>;
}
