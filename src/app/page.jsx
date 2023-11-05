import Image from "next/image";

function Home() {
  return (
    <section className="flex-center relative w-full flex-col pt-4">
      <h1 className="head_text blue_gradient relative z-10 text-center transition-colors duration-300">
        Unveil Your Emotions
      </h1>

      <div className="group relative my-8 h-[640px] overflow-hidden rounded-md shadow-2xl shadow-black/50">
        <Image
          src="/emotions.jpg"
          alt=""
          fill
          className="z-0 object-cover blur-sm brightness-75 duration-1000 group-hover:scale-110"
        />

        <div className="absolute inset-0 px-10 py-6 text-4xl font-light leading-snug tracking-wide text-white">
          <span className="font-semibold">
            Objective of masked-emotions :-{" "}
          </span>
          <br />
          Increasing Awareness: By highlighting the frequency of psychological
          abuse, the website aims to educate women about the warning signals and
          consequences of this type of abuse. <br />
          Educating Women and Children: It provides education materials, signs,
          and risk factors for psychological abuse, as well as information on
          how to recognize it. <br />
          Supporting: The website strives to help victims by offering resources
          for both practical and emotional help, as well as contact details.{" "}
          <br />
          Promoting the initiative and utilizing the website as a platform are
          intended to raise public awareness of the significance of preventing
          psychological abuse and cultivating a sense of solidarity in the face
          of it.
        </div>
      </div>
    </section>
  );
}

export default Home;
