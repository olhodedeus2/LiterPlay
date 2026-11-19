import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
async function main() {
  const subjects = [
    {name:"Literatura",icon:"📖"},
    {name:"Português",icon:"✍️"},
    {name:"História",icon:"🏛️"},
    {name:"Geografia",icon:"🌎"},
    {name:"Matemática",icon:"➗"},
    {name:"Ciências",icon:"🔬"}
  ];
  for (const s of subjects) {
    const subject = await db.subject.upsert({where:{name:s.name},update:{icon:s.icon},create:s});
    if (s.name === "Literatura") {
      const lesson = await db.lesson.findFirst({where:{subjectId:subject.id,title:"O que é literatura?"}});
      if (!lesson) await db.lesson.create({data:{
        title:"O que é literatura?",
        description:"Descubra como textos e histórias expressam ideias, sentimentos e culturas.",
        content:"Literatura é uma forma de arte que utiliza a linguagem para criar e compartilhar experiências. Ela aparece em poemas, contos, romances, crônicas e muitas outras formas.\\n\\nA leitura literária amplia o vocabulário, estimula a imaginação e ajuda a compreender diferentes épocas e pontos de vista.\\n\\nAo ler uma obra, observe quem conta a história, onde e quando ela acontece, quais personagens aparecem e que ideias o texto apresenta.",
        subjectId:subject.id
      }});
      let quiz = await db.quiz.findFirst({where:{subjectId:subject.id,title:"Desafio da literatura"}});
      if (!quiz) quiz = await db.quiz.create({data:{title:"Desafio da literatura",subjectId:subject.id,questions:{create:[
        {prompt:"Qual é uma característica da literatura?",options:["Usar a linguagem de forma artística","Apresentar somente cálculos","Ser sempre uma notícia"],correctAnswer:0,explanation:"A literatura explora a linguagem artisticamente para expressar experiências e ideias."},
        {prompt:"Qual destas opções é um gênero literário?",options:["Planilha","Poema","Manual de instalação"],correctAnswer:1,explanation:"O poema é uma forma literária que trabalha ritmo, imagens e linguagem."},
        {prompt:"O que a leitura pode desenvolver?",options:["Somente velocidade","Imaginação e interpretação","Apenas memorização"],correctAnswer:1,explanation:"A leitura pode ampliar a imaginação, o vocabulário e a interpretação."}
      ]}}});
    }
  }
}
main().finally(()=>db.$disconnect());
