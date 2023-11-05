import Story from "@/models/story";
import { connectToDB } from "@/utils/database";

export const POST = async (req) => {
  const data = await req.json();
  const { title, location, type, content } = data;
  try {
    await connectToDB();
    const newStory = new Story({ title, location, type, content });
    await newStory.save();
    return new Response(JSON.stringify(newStory), {
      status: 201,
    });
  } catch (err) {
    console.log(err);
    return new Response("Error connecting to database", {
      status: 500,
    });
  }
};
