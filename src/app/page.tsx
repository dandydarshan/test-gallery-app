import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  'https://ttv4kg02pm.ufs.sh/f/NWXHoSfB2snIJksW369ce5ijX02aFVM8APWySwk6OUNnsuKm',
  'https://ttv4kg02pm.ufs.sh/f/NWXHoSfB2snIKf5FKzxwvSFnKIgRGQhWXtyrEo9Bljb0fcAC',
  'https://ttv4kg02pm.ufs.sh/f/NWXHoSfB2snIvYu2HDjDWGkfgP50J37tciqjrAXU6eZxRbBw',
  'https://ttv4kg02pm.ufs.sh/f/NWXHoSfB2snINQutOwB2snIbh49JePHV7MBcliofmxSKuv8q',
  'https://ttv4kg02pm.ufs.sh/f/NWXHoSfB2snIgtcO7aYq9EjGz2CPF6IOKXmYhBMwvJiSsrRN',
  'https://ttv4kg02pm.ufs.sh/f/NWXHoSfB2snIjJMRp8zF6VqEd3xSiUQC9sBOX2Z7yaLkNcez',
  'https://ttv4kg02pm.ufs.sh/f/NWXHoSfB2snIYgEMZC1fc0nBmUzQxXudTga7LICwsSkGthlF',
  'https://ttv4kg02pm.ufs.sh/f/NWXHoSfB2snIHXDNpCmTfYZSBIw0NjCtb4Rzh6OgP9xe1a5K',
  'https://ttv4kg02pm.ufs.sh/f/NWXHoSfB2snI04hxJSNwEom9fUnjxGikpgzXOcVK2rq3TPtJ',
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default async function HomePage() {

const posts = await db.query.posts.findMany();

console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((img) => (
          <div key={img.id} className="w-48 h-32">
            <img src={img.url} alt="image" className="h-full w-full object-cover"/>
          </div>
        ))}
      </div>
    </main>
  );
}
