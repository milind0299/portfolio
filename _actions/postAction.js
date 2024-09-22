"use server";

import PostModel from "@/models/postModel";
import connectDB from "@/lib/database";

export async function getPortfolioDetails() {
  try {
    await connectDB();
    const name = JSON.parse(JSON.stringify(await PostModel.find()));
    return { name };
  } catch (error) {
    return { errMsg: error.message };
  }
}

export async function getProject(slug) {
  try {
    await connectDB();
    const post = await PostModel.findOne(
      { "projects.slug": slug },
      { "projects.$": 1 } // Only return the matching project in the array
    );

    if (post && post.projects.length > 0) {
      return { project: post.projects[0] }; // Return the matched project
    } else {
      return { errMsg: "Project not found" };
    }
  } catch (error) {
    return { errMsg: error.message };
  }
}

export async function sendMail(formData) {
  try {
    const res = await fetch("http://localhost:3001/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Send the form data
    });
    const result = await res.json();
    if (res.ok) {
      console.log("Email sent Successfully");
      return { success: true };
    } else {
      console.log("Something went wrong");
      return { success: false, error: result.error };
    }
  } catch (err) {
    console.log(err);
    return { success: false, error: err.message };
  }
}
