import { ArrowUpRight, Play } from 'lucide-react';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black font-sans selection:bg-white/30">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex min-h-screen flex-col px-4 sm:px-8 py-6">
        {/* Navigation Bar */}
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-[16px] bg-white px-6 py-4 shadow-sm">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold tracking-tight text-dark uppercase">Pixel</span>
          </div>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex space-x-8">
            {['About', 'Works', 'Services', 'Testimonial'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[14px] font-medium text-gray-800 transition-colors hover:text-black"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right CTA */}
          <div className="flex items-center">
            <button className="group relative flex h-12 items-center justify-center gap-3 rounded-full bg-dark pl-6 pr-2 text-sm font-medium text-white transition-all hover:bg-black">
              <span>Book A Free Meeting</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-dark transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
              </div>
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="flex flex-1 flex-col items-center justify-center text-center mt-12 md:mt-0 pb-10 sm:pb-16">
          <div className="max-w-4xl px-4 sm:px-6">
            {/* Primary Headline */}
            <h1 className="flex flex-col items-center text-black">
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-2px] md:tracking-[-4px]">
                Agency that makes your
              </span>
              <span className="mt-2 text-[60px] leading-[1.1] sm:text-[72px] md:text-[84px] font-serif italic text-black">
                videos & reels viral
              </span>
            </h1>

            {/* Subtext */}
            <p className="mt-6 md:mt-8 text-[16px] md:text-[18px] font-medium text-black">
              Short-form video editing for Influencers, Creators and Brands
            </p>

            {/* Secondary CTA */}
            <div className="mt-10 flex justify-center">
              <button className="group flex items-center justify-center gap-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 shadow-xl px-8 py-4 text-base font-semibold text-black transition-all hover:scale-105 hover:bg-white/30 hover:shadow-2xl">
                <Play className="h-5 w-5 fill-black transition-transform group-hover:scale-110" />
                See Our Workreel
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
