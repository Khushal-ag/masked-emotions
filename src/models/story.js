import { model, models, Schema } from "mongoose";

const StorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const Story = models.Story || model("Story", StorySchema);
export default Story;
