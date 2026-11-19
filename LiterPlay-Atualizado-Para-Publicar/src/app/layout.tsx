import "./globals.css";
import Link from "next/link";
import { getUser } from "@/lib/auth";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://literplay-profissional-157.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LiterPlay | Aprender, jogar e evoluir",
    template: "%s | LiterPlay",
  },
  description: "Uma plataforma de aprendizagem com aulas, desafios, pontos e ranking para acompanhar sua evolução.",
  applicationName: "LiterPlay",
  openGraph: {
    title: "LiterPlay | Aprender, jogar e evoluir",
    description: "Descubra matérias, pratique com desafios e acompanhe sua evolução.",
    url: siteUrl,
    siteName: "LiterPlay",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await getUser();
  return (
    <html lang="pt-BR">
      <body>
        <div className="shell">
          <header className="topbar">
            <Link className="brand" href="/" aria-label="LiterPlay - página inicial">Liter<span>Play</span> ✦</Link>
            <nav className="nav" aria-label="Navegação principal">
              <Link href="/">Início</Link>
              <Link href="/demonstracao">Demonstração</Link>
              <Link href="/materias">Matérias</Link>
              <Link href="/ranking">Ranking</Link>
              {user ? <>
                <Link href="/painel">Meu painel</Link>
                <form action="/api/logout" method="post"><button className="btn secondary" style={{padding:"9px 13px"}}>Sair</button></form>
              </> : <Link className="btn" href="/login">Entrar</Link>}
            </nav>
          </header>
          {children}
          <footer className="footer">
            <strong>LiterPlay</strong> · Aprender também pode ser uma aventura.
            <div style={{marginTop:10}}><Link href="/privacidade">Privacidade</Link> · <Link href="/termos">Termos de uso</Link></div>
          </footer>
        </div>
      </body>
    </html>
  );
}
