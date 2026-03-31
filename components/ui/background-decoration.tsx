export function BackgroundDecoration() {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full text-[10rem] text-white/5 -z-10 text-center overflow-hidden whitespace-pre-wrap break-all leading-tight bg-red-500"
      aria-hidden="true"
    >
      <div className="animate-marquee">
        {Array(20)
          .fill('日本語')
          .map((_, i) => (
            <span key={i} className="mx-4">
              日本語
            </span >
          ))}
      </div>
      <div className="animate-marquee2">
        {Array(20)
          .fill('日本語')
          .map((_, i) => (
            <span key={i} className="mx-4">
              日本語
            </span>
          ))}
      </div>
    </div>
  )
}
