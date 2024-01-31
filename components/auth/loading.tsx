import Image from "next/image";

export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Image
        src="/logo.svg"
        alt="loading"
        width={150}
        height={150}
        className="animate-pulse duration-700"
      />
      <p className="mt-2 text-sm text-gray-500">Loading...</p>
    </div>
  );
};
