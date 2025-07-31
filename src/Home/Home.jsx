export default function Home() {
  return (
    <>
      <section className="px-5 md:py-10">
        <div className="flex justify-center px-5 py-20">
          <div className="grid grid-flow-col text-center md:text-1xl">
            <div>
              <h1 className="flex justify-center font-semibold text-3xl md:text-6xl leading-tight">
                Welcome to{" "}
                <span className="font-bold text-transparent bg-gradient-to-l from-blue-400 to-green-400 bg-clip-text">
                  Neat Starter
                </span>
              </h1>
              <p className="px-4 md:px-6 py-6 text-sm md:text-3xl">
                NEAT Starter Template. Get Started by editing{" "}
                <span className="text-green-500">./index.njk</span>
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[38rem] mx-auto w-full mb-1 py-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="border rounded-md p-5 hover:border hover:border-green-600"
                >
                  <h1 className="font-bold mt-2 mb-3">Netlify CMS →</h1>
                  <p>Open source content management for your Git workflow</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
