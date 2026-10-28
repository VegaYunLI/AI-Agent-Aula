export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-sitech-neutral-50 text-sitech-neutral-900">
      <div className="max-w-2xl text-center space-y-4">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-sitech-primary bg-sky-100 rounded-full">
          Portal Institucional
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-sitech-primary sm:text-5xl">
          Sitech Escola Técnica
        </h1>
        <p className="text-lg text-sitech-neutral-700">
          Formando profissionais qualificados para os desafios da tecnologia e da indústria.
        </p>
      </div>
    </main>
  );
}
