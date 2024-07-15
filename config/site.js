import { Icons } from "@/components/icons";

export const siteConfig = {
  name: "Next blog boilerplate",
  url: "",
  description: "A minimal boilerplate to move fast with blogging in NextJs",
  author: "Swastik Yadav",
  authorProfileImg:
    "https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F624038%2F06e37841-8bee-420a-a76e-4f05684aaf1c.jpg",
  about:
    "Software Engineer (3+ Years Exp) || JavaScript, React, NextJs || Writing about JavaScript ecosystem and building side projects.",
  links: [
    { name: "github", url: "https://github.com/swastikyadav" },
    { name: "linkedin", url: "https://linkedin.com/in/swastikyadav" },
  ],
  projects: [
    {
      name: "BlogFast",
      description: "A minimal boilerplate to move fast with blogging in Nextjs",
      url: "",
      isActive: true,
      logo: "/images/blogfast.png",
    },
    {
      name: "TwEmbed",
      description:
        "Embed your twitter profile on any website just with copy & paste.",
      url: "https://twembed.netlify.app/",
      isActive: false,
      logo: "/images/twembed.png",
    },
  ],
};
