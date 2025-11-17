import { Card } from "@/components/ui/card";

const Gallery = () => {
  // Placeholder gallery items - in a real app, these would be actual images
  const galleryItems = [
    { title: "Morning Vedic Chanting", category: "Daily Life" },
    { title: "Yoga Practice Under Trees", category: "Wellness" },
    { title: "Sanskrit Grammar Class", category: "Education" },
    { title: "Traditional Festival Celebration", category: "Festivals" },
    { title: "Students with Acharya", category: "Community" },
    { title: "Ancient Manuscript Study", category: "Learning" },
    { title: "Meditation Session", category: "Spiritual Practice" },
    { title: "Temple Architecture", category: "Campus" },
    { title: "Traditional Arts Class", category: "Arts" },
    { title: "Gurukul Courtyard", category: "Campus" },
    { title: "Evening Aarti Ceremony", category: "Rituals" },
    { title: "Sanskrit Debate Competition", category: "Events" },
  ];

  return (
    <div className="min-h-screen py-12 parchment-texture">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 serif">Gallery</h1>
          <p className="text-xl text-muted-foreground sanskrit mb-2">चित्रशाला</p>
          <p className="text-lg text-foreground serif max-w-3xl mx-auto">
            Glimpses of life at Sanskriti Gurukulam - where ancient traditions come alive
          </p>
        </div>

        {/* Gallery Grid - Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-7xl mx-auto space-y-6">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className="break-inside-avoid bg-card border-2 border-accent/20 hover:shadow-temple hover:border-accent/40 transition-all duration-300 overflow-hidden group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Image Placeholder */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-secondary to-accent/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-2 p-6">
                    <div className="w-16 h-16 bg-gradient-sacred rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl text-primary-foreground sanskrit">ॐ</span>
                    </div>
                    <p className="text-primary serif font-semibold text-lg">{item.title}</p>
                    <p className="text-xs text-accent serif uppercase tracking-wider">{item.category}</p>
                  </div>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-primary-foreground serif text-sm">View Image</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Note */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="p-8 bg-card border-2 border-accent/20 shadow-temple text-center">
            <p className="text-foreground serif leading-relaxed">
              Visit our Gurukul to experience the vibrant atmosphere of traditional learning firsthand. 
              These moments capture the essence of our daily life, where ancient wisdom meets joyful community living.
            </p>
            <p className="text-accent sanskrit text-lg mt-4">आगच्छन्तु सर्वे</p>
            <p className="text-sm text-muted-foreground serif italic">Welcome all</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
