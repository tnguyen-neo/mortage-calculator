import client from "@/lib/contentful";

async function fetchImageIntro() {
  const res = await client.getEntries({ content_type: "imageIntro" });
  return {
    props: {
      imageIntro: res.items,
    },
  };
}

export async function getImageIntro() {
  const res = await fetchImageIntro();
  const data = res.props.imageIntro?.[0]?.fields as any;
  const { title, appStoreLink, googlePlayLink } = data;
  const image = data.image.fields.file;
  const imageIntro = { title, appStoreLink, googlePlayLink, image };
  return imageIntro;
}
