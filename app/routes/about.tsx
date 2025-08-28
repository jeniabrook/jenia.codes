import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - Jenia Brook" },
    {
      name: "description",
      content:
        "Frontend engineer passionate about creating meaningful user experiences.",
    },
  ];
}

export default function About() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] py-16 px-4 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-title font-bold text-4xl md:text-6xl lg:text-7xl text-left mb-12 md:mb-16">
          ABOUT
        </h1>
        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-pretty">
          <p>
            I'm currently building innovative products at <strong>Flare</strong>
            , teaming up with some seriously talented people to create
            experiences that bring technology and people together in meaningful
            ways.
          </p>
          <p>
            I like to live in the sweet spot between engineering and design —
            solving tricky problems under the hood while keeping things
            intuitive, engaging, and enjoyable on the surface. For me, it's all
            about making things that work beautifully and feel great to use.
          </p>
          <p>
            When I'm not glued to a screen, you'll probably find me spending
            time with my wife and three kids, riding my mountain bike, playing
            guitar, listening to music, or watching movies and TV shows.
          </p>
        </div>
      </div>
    </div>
  );
}
