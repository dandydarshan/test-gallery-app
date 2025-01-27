import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {

const images = await db.query.images.findMany({
  orderBy: (model, {desc}) => desc(model.id),
});

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((img) => (
          <div key={img.id} className="w-48 h-32 flex flex-col">
            <img src={img.url} alt="image" className="h-full w-full object-cover"/>
            <div>{img.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
