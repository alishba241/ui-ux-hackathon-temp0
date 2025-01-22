import { defineType, defineField } from "sanity";

export default defineType({
  name: "heroProducts",
  title: "Hero Products",
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
      name: "productTitle",
      title: "Product Title",
      type: "string",
    }),
    defineField({
      name: "productbtn",
      title: "Product btn",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
    }),
  ],
});