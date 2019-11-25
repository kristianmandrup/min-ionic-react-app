import * as dotenv from "dotenv";
dotenv.config();

export const accessToken =
  localStorage.getItem("token") || process.env.CONTENTFUL_TOKEN;

export const contentfulConfig = {
  space: process.env.CONTENTFUL_SPACE || "vev0hom3div2",
  environment: "dev",
  accessToken
};
