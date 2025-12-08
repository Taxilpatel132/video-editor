export default function VideoPreview() {
  return (
    <div className="flex-1 flex items-center justify-center bg-gray-100">
      <div className="w-[70%] aspect-video bg-black rounded-lg overflow-hidden shadow-md">
        {/* Placeholder for video */}
        <div className="w-full h-full flex items-center justify-center text-white">
          Video Preview
        </div>
      </div>
    </div>
  );
}
