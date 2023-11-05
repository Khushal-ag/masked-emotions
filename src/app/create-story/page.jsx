"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Form from "@/components/Form";

function CreateStory() {
  const router = useRouter();

  const [IsSubmitting, setIsSubmitting] = useState(false);
  const [story, setStory] = useState({
    title: "",
    content: "",
    type: "",
    location: "",
  });
  const createStory = async (e) => {
    try {
      const response = await fetch("/api/story/new", {
        method: "POST",
        body: JSON.stringify({
          title: story.title,
          location: story.location,
          type: story.type,
          content: story.content,
        }),
      });
      if (response.ok) {
        console.log("Story created successfully");
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Form
      story={story}
      setStory={setStory}
      IsSubmitting={IsSubmitting}
      handleSubmit={createStory}
    />
  );
}

export default CreateStory;
