import { draftMode } from "next/headers";
import { getAllPosts } from "@/lib/apis/Post.api";

import HeroPost from "../components/Contents/LandingPage/HeroPost";
import MoreStories from "../components/Partials/more-stories";


export default async function Posts() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <div className="container mx-auto px-5 grid gap-4">
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      <MoreStories morePosts={morePosts} />
    </div>
  );
}
