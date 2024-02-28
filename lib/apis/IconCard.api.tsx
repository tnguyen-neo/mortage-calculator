import client from "@/lib/contentful";

async function fetchImageIconCards() {
  const res = await client.getEntries({ content_type: "imageIconCard" });
  return {
    props: {
      imageIconCards: res.items,
    },
  };
}

export async function getIconCards() {
  const res = await fetchImageIconCards();
  const iconCards = Array.from(res.props.imageIconCards).map(
    (iconCard: any) => {
      const { title, description } = iconCard.fields;
      const url = iconCard.fields.icon.fields.file.url;
      return { title, description, url };
    }
  );
  return iconCards.reverse();
}
