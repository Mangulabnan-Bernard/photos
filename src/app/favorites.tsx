import Link from "next/link";

const favoritesUrls = [
  "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRLPWOSwqwbSAr6xkn7meK4pVOZtj5CMDFRvTJ",
  "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRVkRfr5BejORmDGzrTyBl8AYcued27LqEJwK3",
  "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRVwmsmKejORmDGzrTyBl8AYcued27LqEJwK3o",
  "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutR8vujUimQXGv5McofOU7rPZS61BsENC3LxRDt",
  "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutR8uixkpmQXGv5McofOU7rPZS61BsENC3LxRDt",
];

const favoritesImages = favoritesUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function FavoritesPage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        <h1 className="text-center text-2xl font-bold my-4">All Photos</h1>
        <div className="flex flex-wrap gap-4">
          {favoritesImages.map((image) => (
            <div key={image.id} className="w-48">
              <img
                src={image.url}
                alt={`Favorite Image ${image.id}`}
                width={580}
                height={420}
                className="object-cover border-2 border-black"
              />
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link href="/">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Back to All Photos
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
