import Image from "next/image";
import Link from "next/link";

const topics = [
  { slug: "componentes", title: "Componentes e props", description: "Partes reutilizáveis da interface que recebem dados." },
  { slug: "listas", title: "Listas e keys", description: "Renderização de arrays com map e identificadores estáveis." },
  { slug: "imagens", title: "Imagens otimizadas", description: "Uso de next/image com tamanho e texto alternativo." },
  { slug: "rotas", title: "Rotas dinâmicas", description: "Parâmetros de URL criados pelo App Router." },
];

type HighlightProps = {
  title: string;
  description: string;
  href: string;
};

function Highlight({ title, description, href }: HighlightProps) {
  return (
    <li className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md">
      <Link href={href} className="block">
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
        <span className="mt-4 inline-block text-sm font-semibold text-blue-700">Ver exemplo →</span>
      </Link>
    </li>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900">
      <section className="mx-auto max-w-4xl">
        <div className="rounded-2xl bg-slate-950 p-8 text-white shadow-lg sm:p-12">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Módulo 04</p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Fundamentos de Front-End com React</h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                Projeto prático com Next.js, TypeScript, Tailwind CSS e App Router.
              </p>
            </div>
            <Image src="/next.svg" alt="Logo do Next.js" width={150} height={30} priority className="rounded bg-white p-3" />
          </div>
        </div>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Práticas da Aula 03</h2>
          <p className="mt-2 text-slate-600">Cada card utiliza props e cria um link para uma rota dinâmica.</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {topics.map((topic) => (
              <Highlight key={topic.slug} title={topic.title} description={topic.description} href={`/estudos/${topic.slug}`} />
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}
