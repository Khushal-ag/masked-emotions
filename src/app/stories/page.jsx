import { headers } from "next/headers";

const fetchStories = async () => {
  const host = headers().get("host");
  const protocal = process.env.NODE_ENV === "development" ? "http" : "https";

  const res = await fetch(`${protocal}://${host}/api/story`);
  const data = await res.json();
  return data;
};

async function Stories() {
  const stories = await fetchStories();

  return (
    <section className="max-w-8xl mx-auto flex w-full flex-col items-center justify-center gap-3">
      <h1 className="head_text blue_gradient mb-8">Stories</h1>
      <div className=" space-y-4 py-8 sm:columns-2 sm:gap-6 xl:columns-3">
        {stories.map((story) => (
          <div
            className="w-4/5 rounded-lg bg-white p-6 shadow-lg"
            key={story.title}
          >
            <h2 className="blue_gradient mb-2 text-xl font-bold">
              {story.title}
            </h2>
            <p className="text-base font-normal">{story.location}</p>
            <p className="desc">{story.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stories;
