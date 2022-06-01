export default function Loading() {
  return (
    <div className="flex items-center justify-center fixed top-0 bottom-0 left-0 right-0 bg-[#03005043] z-50">
      <div className="w-[10px] h-[10px] animate-ping bg-primary rounded-full mx-2"></div>
      <div className="w-[10px] h-[10px] animate-ping bg-darken rounded-full mx-2"></div>
      <div className="w-[10px] h-[10px] animate-ping bg-primary rounded-full mx-2"></div>
      <div className="w-[10px] h-[10px] animate-ping bg-darken rounded-full mx-2"></div>
    </div>
  );
}
