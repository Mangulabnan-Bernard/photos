import Image from "next/image";

const mocksUrls = [
  "https://www.cnet.com/a/img/resize/bd44a86a4ba4720c7f8f85ffaa139e051ac2e2cb/hub/2019/05/29/9e668aa2-f32e-4202-bb35-4ef8988b3557/2020-ferrari-sf90-stradale-01.jpg?auto=webp&width=1200"
];

const mocksImages = mocksUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mocksImages.map((image) => (
          <div key={image.id} className="w-48">
            <Image 
              src={image.url} 
              alt={`Image ${image.id}`} 
              width={480} 
              height={320} 
              className="object-cover" 
            />
          </div>
        ))}
      </div>
    </main>
  );
}
