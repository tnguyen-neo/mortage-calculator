import { draftMode } from "next/headers";

import MoreStories from "./more-stories";
import HeroPost from "./components/Partials/HeroPost";

import { getAllPosts } from "@/lib/api";
// import { CMS_NAME, CMS_URL } from "@/lib/constants";

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <div className="container mx-auto px-5">
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


// function Intro() {
//   return (
//     <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
//       <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
//         Blog.
//       </h1>
//       <h2 className="text-center md:text-left text-lg mt-5 md:pl-8">
//         A statically generated blog example using{" "}
//         <a
//           href="https://nextjs.org/"
//           className="underline hover:text-success duration-200 transition-colors"
//         >
//           Next.js
//         </a>{" "}
//         and{" "}
//         <a
//           href={CMS_URL}
//           className="underline hover:text-success duration-200 transition-colors"
//         >
//           {CMS_NAME}
//         </a>
//         .
//       </h2>
//     </section>
//   );
// }