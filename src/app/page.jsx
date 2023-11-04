import Image from "next/image";

function Home() {
  return (
    <section className="flex-center relative w-full flex-col pt-4">
      <h1 className="head_text blue_gradient relative z-10 text-center">
        Unveil Your Emotions
      </h1>
      <div className="flex-center absolute inset-x-0 my-10 h-screen w-full rounded-lg backdrop-blur-md">
        <div className="h-full w-full backdrop-blur-md">
          <Image src="/emotions.jpg" alt="" layout="fill" className="z-0" />
        </div>
      </div>
    </section>
  );
}

export default Home;
