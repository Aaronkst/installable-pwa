import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <main className="mx-auto">
      <section className="bg-black p-5 py-16">
        <p className="text-2xl font-black text-white text-center">My PWA</p>
      </section>
      <section className="lg:w-2/3 mx-auto bg-neutral-100 lg:bg-white p-5 min-h-screen">
        {[
          "More Exciting",
          "and Lavish",
          "Features to",
          "take YOUR",
          "BREATH Away.",
        ].map((s) => (
          <div
            key={s}
            className="p-2 my-4 drop-shadow-lg bg-white border-b-4 border-indigo-900 rounded-md"
          >
            <p className="text-4xl font-black">{s}</p>
          </div>
        ))}
        <button className="p-2 my-4 bg-indigo-900 rounded-md text-white font-black text-center w-full hover:bg-indigo-600 hover:drop-shadow-lg">
          Keep me Posted &rarr;
        </button>
        <p>Deep Link: {id || "null"}</p>
      </section>
    </main>
  );
};

export default Home;
