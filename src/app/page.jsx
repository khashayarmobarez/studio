import HeroSection from '@/components/custom/hero-section';
import ArtworkGallery from '@/components/custom/artwork-gallery';
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="py-6 shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-headline font-bold text-primary text-center md:text-left">Banafsheh Mesripour</h1>
          <p className="text-center md:text-left text-muted-foreground font-headline">Calligraphy Artist</p>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <HeroSection />
        <ArtworkGallery />
      </main>
      <footer className="text-center py-6 text-sm text-muted-foreground border-t">
        © {new Date().getFullYear()} Banafsheh Mesripour. All rights reserved.
      </footer>
      <Toaster />
    </div>
  );
}
