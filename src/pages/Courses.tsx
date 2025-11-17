import { Card } from "@/components/ui/card";
import { BookOpen, Flower, Heart, Palmtree, Scroll, Sparkles, Star, Sun } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      icon: BookOpen,
      sanskrit: "वेदाध्ययनम्",
      title: "Vedas",
      description: "Study the four Vedas - Rigveda, Yajurveda, Samaveda, and Atharvaveda - with proper pronunciation and understanding of their profound meanings.",
    },
    {
      icon: Scroll,
      sanskrit: "उपनिषद्",
      title: "Upanishads",
      description: "Explore the philosophical texts that form the foundation of Hindu philosophy, discussing the nature of reality, consciousness, and the self.",
    },
    {
      icon: Sparkles,
      sanskrit: "व्याकरणम्",
      title: "Sanskrit Grammar",
      description: "Master Panini's Ashtadhyayi and other classical grammar texts to develop deep linguistic understanding and precision in Sanskrit.",
    },
    {
      icon: Flower,
      sanskrit: "योगः",
      title: "Yoga",
      description: "Practice classical yoga including asanas, pranayama, and meditation based on Patanjali's Yoga Sutras for physical and mental well-being.",
    },
    {
      icon: Heart,
      sanskrit: "आयुर्वेदः",
      title: "Ayurveda",
      description: "Learn the ancient science of life and healing, including herbal medicine, diet, and lifestyle practices for optimal health.",
    },
    {
      icon: Star,
      sanskrit: "न्यायदर्शनम्",
      title: "Philosophy",
      description: "Study the six orthodox schools of Indian philosophy - Nyaya, Vaisheshika, Samkhya, Yoga, Mimamsa, and Vedanta.",
    },
    {
      icon: Palmtree,
      sanskrit: "कलाः",
      title: "Arts",
      description: "Engage in traditional Indian arts including music, dance, painting, and sculpture as expressions of devotion and culture.",
    },
    {
      icon: Sun,
      sanskrit: "ज्योतिषम्",
      title: "Jyotisha",
      description: "Explore Vedic astronomy and astrology, understanding celestial movements and their influence on human life and nature.",
    },
  ];

  return (
    <div className="min-h-screen py-12 parchment-texture">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 serif">Curriculum</h1>
          <p className="text-xl text-muted-foreground sanskrit mb-2">पाठ्यक्रमः</p>
          <p className="text-lg text-foreground serif max-w-3xl mx-auto">
            Our curriculum encompasses the complete spectrum of traditional Indian knowledge systems, all taught exclusively in Sanskrit
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-card border-2 border-accent/20 hover:shadow-temple hover:border-accent/40 transition-all duration-300 animate-fade-in group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-sacred rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-accent sanskrit">{course.sanskrit}</h3>
                    <h4 className="text-xl font-semibold text-primary serif">{course.title}</h4>
                  </div>
                  <p className="text-foreground serif leading-relaxed">{course.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-card border-2 border-accent/20 shadow-temple">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center serif">Learning Approach</h2>
            <div className="space-y-6 text-foreground serif">
              <p className="text-lg leading-relaxed">
                All subjects are taught using traditional methods that have proven effective for thousands of years:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-accent text-2xl flex-shrink-0">•</span>
                  <div>
                    <span className="font-semibold">Oral Recitation (Pāṭha):</span> Students memorize and recite texts, developing exceptional memory and pronunciation skills.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-accent text-2xl flex-shrink-0">•</span>
                  <div>
                    <span className="font-semibold">Discussion (Vāda):</span> Engage in philosophical debates and discussions to deepen understanding.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-accent text-2xl flex-shrink-0">•</span>
                  <div>
                    <span className="font-semibold">Practice (Abhyāsa):</span> Regular practice and application of knowledge in daily life.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-accent text-2xl flex-shrink-0">•</span>
                  <div>
                    <span className="font-semibold">Seva (Service):</span> Learn through serving teachers and contributing to the Gurukul community.
                  </div>
                </li>
              </ul>
              <p className="text-lg leading-relaxed pt-4">
                Classes are conducted entirely in Sanskrit, creating an immersive environment where students naturally develop fluency while absorbing the wisdom of our ancient texts.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Courses;
