import Feed from "@components/Feed";
import React from "react";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered prompts</span>
      </h1>
      <p className="desc text-center">
        Share prompts is an open-source AI prompting tool for modern world to
        discover, create and share interactive prompts.
      </p>
      <Feed />
    </section>
  );
}
