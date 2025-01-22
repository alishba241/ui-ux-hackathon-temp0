import { defineField, defineType } from "sanity";

export default defineType({
  name: "topPicks",
  title: "Top Picks",
  type: "document",
  fields: [
    defineField({
      name: "productName",
      title: "Product Name",
      type: "string",
    }),
    defineField({
      name: "productPrice",
      title: "Product Price",
      type: "number",
    }),
    defineField({
      name: "productImage",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
    }),
  ],
});
