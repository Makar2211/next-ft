import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
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
          href={`blog/${post.id}`}
          className="flex items-center gap-12 mb-12"
          key={post.id}
        >
          <div className=" relative">
            <Image
              src="https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?w=1380&t=st=1686056951~exp=1686057551~hmac=5da557bfff0192720a1dfa7608b353322afcbfc038886c891ba296fd8fa7e97b"
              alt={post.title}
              width={400}
              height={250}
              className="object-cover"
            />
          </div>
          <div className="mt-12 text-[20px] font-[300] text-dark text-justify">
            <h1 className="text-3xl">{post.title}</h1>
            <p className="text-2x">{post.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
