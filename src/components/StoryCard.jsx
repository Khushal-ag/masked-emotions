function StoryCard({ story }) {
  return (
    <div className="w-full rounded-lg bg-white p-6 shadow-lg">
      <h2 className="blue_gradient mb-4 text-xl font-bold">{story.title}</h2>
      <p className="desc">{story.content}</p>
    </div>
  );
}

export default StoryCard;
