import { localhost } from "@/constants";
import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getData() {
  const res = await fetch(`${localhost}/api/posts`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const posts = await getData();

  return (
    <div>
      {posts.map((post: Post) => (
        <Link
          href={`blog/${post._id}`}
          className="flex items-center gap-12 mb-12"
          key={post._id}
        >
          <div className=" relative">
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={250}
              className="object-cover"
            />
          </div>
          <div className="mt-12 text-[20px] font-[300] text-dark text-justify">
            <h1 className="text-3xl">{post.title}</h1>
            <p className="text-2x">{post.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
