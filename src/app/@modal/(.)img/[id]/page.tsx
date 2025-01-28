import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;
  const idAsNumber = Number(photoId);

  if(Number.isNaN(idAsNumber)) throw new Error("Invalid ID"); 

  const image = await getImage(idAsNumber);
  return <div>
    <img 
      className="w-96"
      src={image.url}
      alt={image.name}
    />
  </div>;
}
