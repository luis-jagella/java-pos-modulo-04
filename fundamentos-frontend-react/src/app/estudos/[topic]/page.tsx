import Link from "next/link";
import { notFound } from "next/navigation";

const lessons: Record<string, { title: string; explanation: string }> = {
  componentes: {
    title: "Componentes e props",
    explanation: "Um componente é uma função que retorna JSX. Props são os parâmetros que tornam esse componente reutilizável.",
  },
  listas: {
    title: "Listas e keys",
    explanation: "Use map para transformar um array em JSX. Cada item precisa de uma key estável para o React identificar alterações no Virtual DOM.",
  },
  imagens: {
    title: "Imagens otimizadas",
    explanation: "O componente next/image ajuda a otimizar imagens. Informe src, alt, width e height para uma interface acessível e estável.",
  },
  rotas: {
    title: "Rotas dinâmicas",
    explanation: "A pasta [topic] cria uma rota dinâmica. O valor recebido na URL determina qual conteúdo esta página renderiza.",
  },
};

type PageProps = {
  params: Promise<{ topic: string }>;
};

export default async function StudyTopicPage({ params }: PageProps) {
  const { topic } = await params;
  const lesson = lessons[topic];

  if (!lesson) {
    notFound();
  }

  return (
    <main className="grid min-h-screen place-items-center bg-slate-50 px-6 py-12">
      <article className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Rota dinâmica: {topic}</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">{lesson.title}</h1>
        <p className="mt-5 leading-7 text-slate-600">{lesson.explanation}</p>
        <Link href="/" className="mt-8 inline-block rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">
          Voltar para os estudos
        </Link>
      </article>
    </main>
  );
}
