import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex flex-col items-center justify-center p-24">
      {/* Star effects */}
<div className="fixed inset-0 overflow-hidden pointer-events-none">
  {[...Array(50)].map((_, i) => (
    <div 
      key={i}
      className="absolute rounded-full bg-white/80 animate-pulse"
      style={{
        width: `${Math.random() * 3}px`,
        height: `${Math.random() * 3}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDuration: `${2 + Math.random() * 3}s`
      }}
    />
  ))}
</div>
      {/* Circular Next.js Logo */}
      <div className="mb-8 rounded-full bg-white/10 p-6 backdrop-blur-sm border border-blue-300/20 shadow-lg shadow-blue-500/20">
        <div className="rounded-full overflow-hidden w-32 h-32 flex items-center justify-center bg-white">
          <Image
            src="/next.svg" // or your preferred logo path
            alt="Next.js Logo"
            width={80}
            height={80}
            className="p-2"
            priority
          />
        </div>
      </div>

      {/* Welcome Text */}
      <h1 className="text-4xl font-bold mb-4 text-white">Selamat Datang di Website Saya</h1>
      
      {/* Credit */}
      <p className="text-lg text-blue-200">Created by Fadhli Pranaja Dwi Pamungkas</p>
    </main>
  )
}