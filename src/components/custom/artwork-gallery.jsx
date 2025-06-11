import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const individualExhibitions = [
  { name: "ABE-HAYAT", year: 2016, venue: "Niavaran Cultural Center, Tehran, Iran", description: "Individual Exhibition of Calligraphy Paintings" },
  { name: "CHERA RAFTI", year: 2017, venue: "Naghsh-o-Khat Gallery, Tehran, Iran", description: "Individual Exhibition of Calligraphy Paintings" },
  { name: "ZIAFATE-NASTALIGH", year: 2019, venue: "Gooya House of Art and Culture, Tehran, Iran", description: "Individual Exhibition of Calligraphy" },
  { name: "NO-NEGAREHA", year: 2023, venue: "Aseman Cultural and Artistic Complex, Tehran, Iran", description: "Individual Exhibition of Calligraphy" },
];

const collectiveExhibitions = [
  { name: "NOBEL GALLERY", year: 2022, venue: "Orange County, California, USA", description: "Collective Exhibition of Paintings and Calligraphy Paintings" },
  { name: "Galleries Across Iran", year: "2009-current", venue: "Iran", description: "Member and participant of multiple Collective Exhibitions" },
];

const ArtworkCard = ({ src, alt, dataAiHint }) => (
  <Card className="overflow-hidden group artwork-fade-in shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="aspect-square relative">
      <Image 
        src={src} 
        alt={alt} 
        layout="fill" 
        objectFit="cover" 
        className="group-hover:scale-105 transition-transform duration-300"
        data-ai-hint={dataAiHint}
      />
    </div>
  </Card>
);

const ExhibitionCard = ({ name, year, venue, description }) => (
  <Card className="artwork-fade-in shadow-md hover:shadow-lg transition-shadow duration-300">
    <CardHeader>
      <CardTitle className="font-headline text-xl text-primary">{name}</CardTitle>
      <CardDescription className="text-sm text-muted-foreground">{year} - {description}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-foreground/90">{venue}</p>
    </CardContent>
  </Card>
);

const ArtworkGallery = () => {
  const artworks = [
    { src: "/pictures/2.jpg", alt: "Artwork 1", dataAiHint: "calligraphy art" },
    { src: "/pictures/aaasheghh44.jpg", alt: "Artwork 2", dataAiHint: "persian calligraphy" },
    { src: "/pictures/bann2.jpg", alt: "Artwork 3", dataAiHint: "abstract calligraphy" },
    { src: "/pictures/IMG_E9420 copy.jpg", alt: "Artwork 4", dataAiHint: "modern calligraphy" },
    { src: "/pictures/sharab.jpg", alt: "Artwork 5", dataAiHint: "islamic art" },
    { src: "/pictures/sollhh.jpg", alt: "Artwork 6", dataAiHint: "calligraphy painting" },
  ];

  return (
    <section id="gallery" className="space-y-12">
      <div>
        <h2 className="text-3xl font-headline font-semibold mb-6 md:mb-8 text-center text-primary">Featured Artworks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {artworks.map((artwork, index) => (
            <ArtworkCard key={index} src={artwork.src} alt={artwork.alt} dataAiHint={artwork.dataAiHint} />
          ))}
        </div>
      </div>

      <Separator className="my-8 md:my-12" />

      <div>
        <h2 className="text-3xl font-headline font-semibold mb-6 md:mb-8 text-center text-primary">Individual Exhibitions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {individualExhibitions.map((exhibition, index) => (
            <ExhibitionCard key={index} {...exhibition} />
          ))}
        </div>
      </div>

      <Separator className="my-8 md:my-12" />

      <div>
        <h2 className="text-3xl font-headline font-semibold mb-6 md:mb-8 text-center text-primary">Collective Exhibitions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {collectiveExhibitions.map((exhibition, index) => (
            <ExhibitionCard key={index} {...exhibition} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtworkGallery;
