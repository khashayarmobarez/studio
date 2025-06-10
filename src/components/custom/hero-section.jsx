import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Instagram, FileText } from 'lucide-react';

const HeroSection = () => {
  const profileDetails = [
    "Certified Master of Calligraphy by Master Javad Bakhtiari.",
    "PhD in Persian Language and Literature.",
    "Academic Education in the field of Visual Arts.",
    "More than 30 years of experience in the field of Calligraphy."
  ];

  return (
    <section id="hero" className="mb-12 md:mb-16">
      <Card className="overflow-hidden shadow-xl">
        <div className="md:flex">
          <div className="md:w-1/3 relative min-h-[300px] md:min-h-0">
            <Image
              src="https://placehold.co/600x800.png"
              alt="Banafsheh Mesripour"
              layout="fill"
              objectFit="cover"
              className="animate-fade-in"
              data-ai-hint="artist portrait"
            />
          </div>
          <div className="md:w-2/3">
            <CardHeader className="p-6 md:p-8">
              <CardTitle className="text-3xl md:text-4xl font-headline text-primary mb-2">
                Banafsheh Mesripour
              </CardTitle>
              <p className="text-xl font-headline text-accent-foreground">Calligraphy Artist</p>
            </CardHeader>
            <CardContent className="p-6 md:p-8 pt-0 md:pt-0">
              <div className="mb-6">
                <h3 className="text-lg font-semibold font-headline mb-2 text-primary">Profile</h3>
                <ul className="list-disc list-inside space-y-1 text-foreground/90">
                  {profileDetails.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold font-headline mb-3 text-primary">Contact Me</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" asChild>
                    <a href="mailto:bmesrypour@yahoo.com" className="hover:bg-accent hover:text-accent-foreground">
                      <Mail className="mr-2 h-4 w-4" /> Email
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://instagram.com/mesripourbanafsheh" target="_blank" rel="noopener noreferrer" className="hover:bg-accent hover:text-accent-foreground">
                      <Instagram className="mr-2 h-4 w-4" /> @mesripourbanafsheh
                    </a>
                  </Button>
                   <Button variant="outline" asChild>
                    <a href="https://instagram.com/mesripour-banafsheh" target="_blank" rel="noopener noreferrer" className="hover:bg-accent hover:text-accent-foreground">
                      <Instagram className="mr-2 h-4 w-4" /> @mesripour-banafsheh (Personal)
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default HeroSection;
