import { defineType, defineField } from 'sanity';

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "product_name",
      title: "Product Name",
      type: "string",
    }),
    defineField({
      name: "product_description",
      title: "Product Description",
      type: "text",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),

    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
    }),
    defineField({
      name: "sizes_available",
      type: "array",
      title: "Sizes Available",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
    }),
    defineField({
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "price_range",
      title: "Price Range",
      type: "string",
    }),
    defineField({
      name: "id",
      title: "Product ID",
      type: "number",
    }),
  ],
});
