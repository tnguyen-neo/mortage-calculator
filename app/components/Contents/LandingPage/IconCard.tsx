import { getIconCards } from "@/lib/apis/IconCard.api";
import ContentfulImage from "@/lib/contentful-image";

function splitIntoChunks(arr: any[], chunkSize: number) {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    result.push(chunk);
  }
  return result;
}

export default async function IconCardContainer() {
  const iconCardsList = splitIntoChunks(await getIconCards(), 4);
  return (
    <div className="grid gap-4 content-start">
      {iconCardsList.map(
        (iconCards: any, index) =>
          iconCards && <IconCardRow key={index} iconCards={iconCards} />
      )}
    </div>
  );
}

function IconCardRow({ iconCards }: any) {
  return (
    <div className="flex gap-4 justify-center">
      {Array.from(iconCards).map(
        (iconCard: any, index) =>
          iconCard && <IconCard key={index} props={iconCard} />
      )}
    </div>
  );
}

function IconCard({ props }: any) {
  return (
    <span className="w-60 min-h-56 hover:shadow-md hover:shadow-primary-200 cursor-default">
      <span
        className="w-full h-full px-4 py-8 flex flex-col gap-4 items-center rounded
        bg-[#f9fbfe] shadow-[inset_0_0_0.75rem] shadow-primary-200"
      >
        <ContentfulImage
          width={0}
          height={0}
          src={`https:${props.url}`}
          alt={props.title}
          className="h-8 w-auto"
        />
        <div className="grid gap-2">
          <span className="text-2xl font-semibold text-center">{props.title}</span>
          <span className="text-xl text-center">{props.description}</span>
        </div>
      </span>
    </span>
  );
}
