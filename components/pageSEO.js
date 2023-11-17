import { NextSeo } from "next-seo";

const PageSEO = ({ title, description, ogImage }) => {
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        title,
        description,
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: "kruss Automotive Serives",
          },
        ],
      }}
    />
  );
};

export default PageSEO;
