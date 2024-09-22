import { Schema, model, models } from "mongoose";

const postSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    description: {
      type: String,
    },
    github: {
      type: String,
    },
    linkedIn: {
      type: String,
    },
    email: {
      type: String,
    },
    about: {
      para1: {
        type: String,
        required: true,
      },
      para2: {
        type: String,
        required: true,
      },
      profilePhoto: {
        type: String,
        required: true,
      },
    },
    skills: [
      {
        skill: {
          type: String,
          required: true,
        },
        icon: {
          type: String,
          required: true,
        },
      },
    ],
    projects: [
      {
        title: {
          type: String,
          required: true,
        },
        slug: {
          type: String,
          required: true,
          unique: true, // Optionally enforce unique slugs if that applies
        },
        description: {
          type: String,
          required: true,
        },
        imgUrl: {
          type: String,
          required: true,
        },
        showCodeDemo: {
          type: Boolean,
          required: true,
          default: false, // Add default if applicable
        },
        code: {
          type: String,
          required: false,
        },
        demo: {
          type: String,
          required: false,
        },
        general: {
          type: String,
          required: true,
        },
        technologies: {
          type: [String], // Explicitly define this as an array of strings
          required: true,
        },
      },
    ],
  },
  { timestamps: true, collection: "portfolioDetails" }
);

const PostModel =
  models.portfolioDetail || model("portfolioDetail", postSchema);

export default PostModel;
