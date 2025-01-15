import Image from "next/image";

const mocksUrls = [
  "https://www.cnet.com/a/img/resize/bd44a86a4ba4720c7f8f85ffaa139e051ac2e2cb/hub/2019/05/29/9e668aa2-f32e-4202-bb35-4ef8988b3557/2020-ferrari-sf90-stradale-01.jpg?auto=webp&width=1200"
  ,"https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRXPsSHRoP7IfZc2LMnY4Gmhdp8zObCS1XJVat",
  "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutR0lx6hG7NXoD3LRYx4gu25hbs9QVBPCEI7yfT",
  "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRWI8gtM06ABbsZl8uCJIVg4SOGR7xr5Dd3kFL",
  "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRwqa2Vk9mWFuHvrdgnPkb1NMsLBlhUXSoE89T",
  "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRLPWOSwqwbSAr6xkn7meK4pVOZtj5CMDFRvTJ",
  "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRVkRfr5BejORmDGzrTyBl8AYcued27LqEJwK3",
  "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRVwmsmKejORmDGzrTyBl8AYcued27LqEJwK3o",
  "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutR1tAslxis9ZgHdKoTiFnz5S0uUA1R8plyk4Ew",
  "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutR8vujUimQXGv5McofOU7rPZS61BsENC3LxRDt",
  "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutR8uixkpmQXGv5McofOU7rPZS61BsENC3LxRDt",
  "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRJvDZYau2cqsG9Igepjb1vQzrOAU0ti3uyXl7",
  "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutR77xR5Pg54HL3SyQOxgcdluKkomVjriqTv9P2",
  "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRKDYVm6X8kLTRVqaJOEfSBZHY4QvGhy92Uw5z",
  "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRWBLZG506ABbsZl8uCJIVg4SOGR7xr5Dd3kFL",
  "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRY4tR3olVnTiEXQMj1qLgy9vsl5pbUW3D7fBP",
  "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRocqfLdzMcIlGB9ACk03Yyh2qjtfT4vDJEg68",
  "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRFB4MZucK0QeEqUDxv1kNtAyVBi5b384WZmXs",

];

const mocksImages = mocksUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4"/>
      <h1 className="text-center text-2xl font-bold my-4">All Photos</h1>
      <div className="flex flex-wrap gap-4">
      {mocksImages.map((image) => (
          <div
            key={image.id}
            className="w-48 h-48 overflow-hidden border-2 border-black"
          >
            <img
              src={image.url}
              alt={`Image ${image.id}`}
              width={562}
              height={352}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
