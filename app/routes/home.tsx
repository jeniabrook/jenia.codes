import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jenia Brook - Frontend Engineer" },
    { name: "description", content: "I have a keyboard. I move pixels." },
  ];
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="flex items-center justify-center text-center"
        style={{ height: "calc(100vh - 3.5rem)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl w-fit mx-auto">Hi, my name is Jenia.</h3>
            <h1 className="font-title font-bold text-6xl md:text-8xl lg:text-9xl leading-none">
              I HAVE A <span className="text-main">KEYBOARD</span>.
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold max-w-4xl mx-auto leading-relaxed">
              I'm a{" "}
              <span className="bg-accent px-3 py-2 rounded-lg shadow whitespace-nowrap">
                frontend engineer
              </span>{" "}
              , and I{" "}
              <span className="bg-interactive px-3 py-2 rounded-lg shadow whitespace-nowrap">
                move pixels
              </span>{" "}
              .
            </h2>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-title font-bold text-4xl md:text-6xl lg:text-7xl text-left mb-8 md:mb-16">
            ABOUT
          </h2>
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-pretty">
            <p>
              I'm currently building innovative products at{" "}
              <strong>Flare</strong>, teaming up with some seriously talented
              people to create experiences that bring technology and people
              together in meaningful ways.
            </p>
            <p>
              I like to live in the sweet spot between engineering and design —
              solving tricky problems under the hood while keeping things
              intuitive, engaging, and enjoyable on the surface. For me, it's
              all about making things that work beautifully and feel great to
              use.
            </p>
            <p>
              When I'm not glued to a screen, you'll probably find me spending
              time with my wife and three kids, riding my mountain bike, playing
              guitar, listening to music, or watching movies and TV shows.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
