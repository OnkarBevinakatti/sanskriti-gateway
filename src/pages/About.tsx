import { Card } from "@/components/ui/card";
import { Heart, Target, Lightbulb, BookOpenCheck } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-12 parchment-texture">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 serif">About Us</h1>
          <p className="text-xl text-muted-foreground sanskrit">गुरुर्ब्रह्मा गुरुर्विष्णुः</p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="p-8 md:p-12 bg-card border-2 border-accent/20 shadow-temple">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary serif">Our Story</h2>
              <p className="text-lg text-foreground serif leading-relaxed">
                Sanskriti Gurukulam was founded with a sacred mission: to revive the ancient Gurukul system of education where knowledge flows directly from teacher to student in the divine language of Sanskrit. Our institution stands as a beacon of traditional Indian learning in the modern world.
              </p>
              <p className="text-lg text-foreground serif leading-relaxed">
                In our Gurukul, students don't just learn subjects—they immerse themselves in a complete way of life. Living on campus with their Acharyas, they experience the authentic Guru-Shishya parampara (teacher-student tradition) that has preserved India's spiritual and intellectual heritage for millennia.
              </p>
              <p className="text-lg text-foreground serif leading-relaxed">
                Every lesson is taught in Sanskrit, ensuring that students develop deep proficiency in the language of the Vedas, Upanishads, and our classical texts. This linguistic immersion allows them to access the profound wisdom of our ancestors in its purest form.
              </p>
            </div>
          </Card>
        </div>

        {/* Vision, Mission, Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          <Card className="p-8 bg-background border-2 border-accent/20 hover:shadow-temple transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-sacred rounded-full flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-primary serif">Vision</h3>
                <p className="text-foreground serif leading-relaxed">
                  To become the leading center for authentic Sanskrit education and Vedic studies, producing scholars who can preserve, interpret, and share India's ancient wisdom with the world.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-background border-2 border-accent/20 hover:shadow-temple transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-sacred rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-primary serif">Mission</h3>
                <p className="text-foreground serif leading-relaxed">
                  To provide immersive Sanskrit education in a traditional Gurukul environment, nurturing students' intellectual, spiritual, and ethical development through direct transmission of knowledge.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-background border-2 border-accent/20 hover:shadow-temple transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-sacred rounded-full flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-primary serif">Philosophy</h3>
                <p className="text-foreground serif leading-relaxed">
                  We believe that true education transforms the whole person. Through the Gurukul system, students develop not just knowledge but wisdom, character, and a deep connection to their cultural roots.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-background border-2 border-accent/20 hover:shadow-temple transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-sacred rounded-full flex items-center justify-center flex-shrink-0">
                <BookOpenCheck className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-primary serif">Approach</h3>
                <p className="text-foreground serif leading-relaxed">
                  All instruction is conducted in Sanskrit, using traditional methods of oral recitation, discussion, and practice. Students live on campus, fostering a deep bond with their teachers and peers.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Key Principles */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-card border-2 border-accent/20 shadow-temple">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center serif">Core Principles of Our Gurukul</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-accent text-2xl">•</span>
                  <p className="text-foreground serif font-semibold">Sanskrit Immersion</p>
                </div>
                <p className="text-muted-foreground serif text-sm ml-7">All classes conducted in Sanskrit</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-accent text-2xl">•</span>
                  <p className="text-foreground serif font-semibold">Guru-Shishya Tradition</p>
                </div>
                <p className="text-muted-foreground serif text-sm ml-7">Direct knowledge transmission</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-accent text-2xl">•</span>
                  <p className="text-foreground serif font-semibold">Holistic Development</p>
                </div>
                <p className="text-muted-foreground serif text-sm ml-7">Mind, body, and spirit growth</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-accent text-2xl">•</span>
                  <p className="text-foreground serif font-semibold">Residential Learning</p>
                </div>
                <p className="text-muted-foreground serif text-sm ml-7">Living on campus with Acharyas</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-accent text-2xl">•</span>
                  <p className="text-foreground serif font-semibold">Character Building</p>
                </div>
                <p className="text-muted-foreground serif text-sm ml-7">Ethics and values foundation</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-accent text-2xl">•</span>
                  <p className="text-foreground serif font-semibold">Traditional Methods</p>
                </div>
                <p className="text-muted-foreground serif text-sm ml-7">Oral recitation and discussion</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
