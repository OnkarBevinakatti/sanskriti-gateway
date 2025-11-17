import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen, Users, Flower2, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-gurukul.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-block mb-4">
              <div className="w-16 h-16 bg-gradient-sacred rounded-full flex items-center justify-center shadow-temple mx-auto">
                <span className="text-3xl text-primary-foreground sanskrit">ॐ</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white sanskrit mb-4 drop-shadow-lg">
              संस्कृति गुरुकुलम्
            </h1>
            
            <p className="text-3xl md:text-4xl text-gold-light sanskrit drop-shadow-lg mb-6">
              सत्यं वद धर्मं चर
            </p>
            
            <p className="text-xl md:text-2xl text-white/90 serif drop-shadow-lg mb-2">
              Speak the truth, follow righteousness
            </p>
            
            <p className="text-lg md:text-xl text-white/80 serif max-w-2xl mx-auto drop-shadow-lg">
              Reviving the purity of knowledge through the language of the Vedas
            </p>
            
            <div className="pt-8">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground serif text-lg px-8 py-6 shadow-temple">
                  Join Our Path
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 parchment-texture">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-sacred rounded-full mb-4">
              <Sparkles className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary serif">Our Vision</h2>
            <p className="text-xl text-foreground serif leading-relaxed">
              At Sanskriti Gurukulam, we preserve the ancient wisdom of India by conducting all education exclusively in Sanskrit, the divine language of our sacred texts. Our Gurukul revives traditional teaching methods where students live, learn, and grow in a spiritual environment under the guidance of learned Acharyas.
            </p>
            <p className="text-lg text-muted-foreground sanskrit">
              विद्यां ददाति विनयं विनयाद् याति पात्रताम्
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12 serif">Why Choose Our Gurukul</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-background hover:shadow-temple transition-all duration-300 border-2 border-accent/20 animate-fade-in">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-sacred rounded-full flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-primary serif">Ancient Texts</h3>
                <p className="text-foreground serif">
                  Study Vedas, Upanishads, and classical Sanskrit literature in their original language
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-background hover:shadow-temple transition-all duration-300 border-2 border-accent/20 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-sacred rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-primary serif">Learned Acharyas</h3>
                <p className="text-foreground serif">
                  Learn from traditional scholars devoted to preserving ancient knowledge
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-background hover:shadow-temple transition-all duration-300 border-2 border-accent/20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-sacred rounded-full flex items-center justify-center">
                  <Flower2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-primary serif">Holistic Growth</h3>
                <p className="text-foreground serif">
                  Develop mind, body, and spirit through yoga, meditation, and spiritual practices
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-sacred text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground serif">
              Begin Your Sacred Journey
            </h2>
            <p className="text-xl text-primary-foreground/90 serif">
              Join us in preserving and propagating the timeless wisdom of Sanskrit and Vedic traditions
            </p>
            <div className="pt-4">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="serif text-lg px-8 py-6 shadow-temple">
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
