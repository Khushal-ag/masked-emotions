import Story from "@/models/story";
import { connectToDB } from "@/utils/database";

export const GET = async () => {
  try {
    await connectToDB();
    const stories = await Story.find({});
    console.log(stories);
    return new Response(JSON.stringify(stories), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to get stories", { status: 500 });
  }
};
