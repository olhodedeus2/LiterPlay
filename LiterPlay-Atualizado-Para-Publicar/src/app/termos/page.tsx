import type { Metadata } from "next";
export const metadata: Metadata = { title: "Termos de uso" };
export default function Termos() {
  return <main className="container"><article className="panel" style={{maxWidth:850,margin:"auto"}}>
    <h1 style={{fontFamily:"Manrope"}}>Termos de uso</h1>
    <p>O LiterPlay é uma plataforma de apoio à aprendizagem. Ao utilizar o serviço, o participante deve fornecer informações corretas, manter sua senha em sigilo e respeitar os demais usuários.</p>
    <h2>Uso educacional</h2><p>As aulas e atividades têm finalidade educativa. O conteúdo deve ser revisado por educadores antes de ser adotado como material oficial de uma instituição.</p>
    <h2>Contas e ranking</h2><p>Cada participante deve utilizar sua própria conta. Pontos e posições são calculados com base nas atividades registradas no sistema. O ranking é uma ferramenta de incentivo e não substitui avaliações escolares.</p>
    <h2>Disponibilidade</h2><p>O serviço pode passar por manutenção e atualizações. Não publique informações pessoais ou conteúdo ofensivo.</p>
    <h2>Antes do lançamento</h2><p>Este é um modelo inicial. O responsável pelo projeto deve revisar os termos, acrescentar identificação e contato, e obter as autorizações necessárias para o público e a instituição atendidos.</p>
  </article></main>;
}
