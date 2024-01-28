import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    await connect();
    const posts = await Post.find();

    return new NextResponse(JSON.stringify(posts), {
      status: 200,
    });
  } catch (error) {
    console.error("Error in GET request:", error);

    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
