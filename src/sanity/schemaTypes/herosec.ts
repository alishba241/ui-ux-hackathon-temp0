import { defineType, defineField } from "sanity";

export default defineType({
  name: "herosec",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "mainHeading1",
      title: "Main Heading1",
      type: "string",
    }),
    defineField({
      name: "mainHeading2",
      title: "Main Heading2",
      type: "string",
    }),
    defineField({
      name: "btn",
      title: "Button",
      type: "string",
    }),
   
  ],
});