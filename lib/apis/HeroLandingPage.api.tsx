import client from "@/lib/contentful";

async function fetchHeroLandingPage() {
  const res = await client.getEntries({ content_type: "heroLandingPage" });
  return {
    props: {
      heroLandingPage: res.items,
    },
  };
}

export async function getLandingPage() {
  const res = await fetchHeroLandingPage();
  const data = res.props.heroLandingPage?.[0]?.fields as any;
  const { title, description, buttonLink } = data;
  const coverImage = data.coverImage.fields.file;
  const contentImage = data.contentImage.fields.file;
  const iconCards = { title, description, buttonLink, coverImage, contentImage };
  return iconCards;
}
