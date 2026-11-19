import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacidade" };
export default function Privacidade() {
  return <main className="container"><article className="panel" style={{maxWidth:850,margin:"auto"}}>
    <h1 style={{fontFamily:"Manrope"}}>Aviso de privacidade</h1>
    <p className="muted">Informações sobre os dados usados pelo LiterPlay.</p>
    <h2>Quais dados são solicitados?</h2>
    <p>O cadastro solicita nome, e-mail, senha e, opcionalmente, turma. O sistema também registra pontos, aulas concluídas e resultados de desafios para manter o progresso e o ranking.</p>
    <h2>Para que são usados?</h2>
    <p>Esses dados são usados para criar e proteger a conta, salvar o progresso de aprendizagem e exibir o ranking entre participantes.</p>
    <h2>Segurança e cuidado</h2>
    <p>As senhas são armazenadas em formato protegido por hash. O acesso ao banco de dados deve ser restrito e as credenciais devem permanecer privadas. Não informe dados pessoais desnecessários nos campos ou conteúdos públicos.</p>
    <h2>Estudantes menores de idade</h2>
    <p>Antes de abrir o cadastro ao público ou usar o LiterPlay em uma escola, a instituição e os responsáveis devem revisar este aviso, definir a base legal e os procedimentos adequados para dados de crianças e adolescentes, conforme a legislação aplicável.</p>
    <h2>Contato e revisão</h2>
    <p>Este texto é um modelo inicial e não substitui uma política jurídica revisada. Antes do lançamento, inclua o nome do responsável pelo serviço e um canal de contato válido para solicitações relacionadas a dados pessoais.</p>
  </article></main>;
}
