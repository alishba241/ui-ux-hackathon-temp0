import {defineField , defineType} from "sanity"

export default defineType({
  name: "ourBlog",
  title: "Blogs",
  type: "document",
  fields: [
    defineField({
      name: "blogTitle",
      title: "Blog Title",
      type: "string",
    }),
    defineField({
      name: "btnText",
      title: "Blog Button",
      type: "string",
    }),
    defineField({
      name: "Blogimage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "calenderImage",
      title: "Calender Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "timeImage",
      title: "Time Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "time",
      title: "Upload Time",
      type: "string",
    }),
    defineField({
      name: "date",
      title: "Date Created",
      type: "number",
    }),
    defineField({
      name: "ranking",
      title: "Ranking",
      type: "string",
    }),
    defineField({
      name: "year",
      title: "Year Created",
      type: "string",
      
    }),

    defineField({
      name: "order",
      title: "Order",
      type: "number",
    }),
  ],
});

  