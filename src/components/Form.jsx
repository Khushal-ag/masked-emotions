import { Link } from "lucide-react";

function Form({ story, setStory, submitting, handleSubmit }) {
  return (
    <section className="flex w-full flex-col items-center justify-between pt-4">
      <h1 className="head_text orange_gradient text-left"> Post your story</h1>
      <p className="desc max-w-md text-left">
        Where emotions overpower masks. So fade your masks.
      </p>
      <form
        onSubmit={handleSubmit}
        className="glassmorphism mt-10 flex w-full max-w-2xl flex-col gap-7 lg:max-w-3xl"
      >
        <label>
          <span className="font-satoshi text-base font-semibold text-gray-700">
            Title of your Story
          </span>
          <input
            value={story.title}
            onChange={(e) => setStory({ ...story, title: e.target.value })}
            placeholder="#Title"
            required
            className="form_input"
          ></input>
        </label>
        <label>
          <span className="font-satoshi mb-6 text-base font-semibold text-gray-700">
            Pen Your Story
          </span>
          <textarea
            value={story.content}
            onChange={(e) => setStory({ ...story, content: e.target.value })}
            placeholder="Write your emotions here..."
            required
            className="form_textarea"
          ></textarea>
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <button
            type="submit"
            disabled={submitting}
            className=" rounded-full bg-gradient-to-r from-orange-400 to-orange-500 px-5 py-1.5 text-lg font-semibold tracking-wide text-white"
          >
            Post
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
