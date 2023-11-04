"use client";

import { useEffect, useState } from "react";

import StoryCard from "./StoryCard";

const StoryCardList = ({ data }) => {
  return (
    <div className="mt-16 space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3">
      {data.map((story) => (
        <StoryCard key={story.title} story={story} />
      ))}
    </div>
  );
};
function Feed() {
  const [allStories, setAllStories] = useState([]);
  const fetchStories = async () => {
    const res = await fetch("/api/story");
    const data = await res.json();
    setAllStories(data);
  };

  useEffect(() => {
    fetchStories();
  }, []);

  if (allStories.length > 0)
    return (
      <section className="mx-auto mt-16 flex w-full max-w-xl items-center justify-center gap-2">
        {<StoryCardList data={allStories} />}
      </section>
    );
  else
    return <div className=" text-center text-lg font-semibold">Loading...</div>;
}

export default Feed;
