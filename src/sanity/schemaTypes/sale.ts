import {defineField , defineType} from "sanity"

export default defineType({
  name: "sale",
  title: "Sale",
  type: "document",
  fields: [
    defineField({
      name: "smallHeading",
      title: "Small Heading",
      type: "string",
    }),
    defineField({
      name: "mainHeading",
      title: "Main Heading",
      type: "string",
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
    }),
    defineField({
      name: "Saleimage",
      title: "Image",
        type: "image",
        options: {
            hotspot: true,
      }
    }),
  ],
});