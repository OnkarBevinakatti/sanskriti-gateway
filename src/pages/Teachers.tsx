import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";

const Teachers = () => {
  const teachers = [
    {
      name: "Acharya Ramakrishna Shastri",
      title: "आचार्यः",
      specialization: "Vedic Studies & Sanskrit Grammar",
      quote: "विद्यां ददाति विनयं",
      translation: "Knowledge gives humility",
      description: "With 30 years of teaching experience, Acharya Ramakrishna specializes in Vedic recitation and Paninian grammar. He has trained hundreds of students in the traditional Gurukul system.",
    },
    {
      name: "Guru Lakshmi Devi",
      title: "गुरुः",
      specialization: "Upanishads & Vedanta Philosophy",
      quote: "सत्यं ज्ञानमनन्तं",
      translation: "Truth is knowledge infinite",
      description: "A profound scholar of Vedanta philosophy, Guru Lakshmi brings deep insight into the Upanishads and helps students understand the nature of ultimate reality.",
    },
    {
      name: "Pandit Vishwanath Sharma",
      title: "पण्डितः",
      specialization: "Yoga & Ayurveda",
      quote: "योगः कर्मसु कौशलम्",
      translation: "Yoga is skill in action",
      description: "Expert in both classical yoga and Ayurvedic medicine, Pandit Vishwanath guides students in holistic health practices rooted in ancient wisdom.",
    },
    {
      name: "Shastri Ananda Kumar",
      title: "शास्त्री",
      specialization: "Jyotisha & Astronomy",
      quote: "ज्योतिषां ज्योतिरेकम्",
      translation: "The one light of all lights",
      description: "A master of Vedic astronomy and astrology, Shastri Ananda teaches the intricate calculations and profound meanings behind celestial movements.",
    },
    {
      name: "Acharya Saraswati Prabha",
      title: "आचार्या",
      specialization: "Sanskrit Literature & Poetry",
      quote: "काव्यं यशसे अर्थकृते",
      translation: "Poetry for glory and purpose",
      description: "Specializing in classical Sanskrit poetry and drama, Acharya Saraswati inspires students with the beauty and depth of Sanskrit literary tradition.",
    },
    {
      name: "Guru Shankara Bhatta",
      title: "गुरुः",
      specialization: "Nyaya & Logic",
      quote: "प्रमाणैः अर्थपरीक्षणम्",
      translation: "Examination of truth through valid means",
      description: "An authority on Indian logic and epistemology, Guru Shankara trains students in rigorous philosophical reasoning and debate.",
    },
  ];

  return (
    <div className="min-h-screen py-12 parchment-texture">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 serif">Our Teachers</h1>
          <p className="text-xl text-muted-foreground sanskrit mb-2">गुरवः</p>
          <p className="text-lg text-foreground serif max-w-3xl mx-auto">
            Learn from accomplished scholars dedicated to preserving and transmitting ancient wisdom
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {teachers.map((teacher, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-2 border-accent/20 hover:shadow-temple hover:border-accent/40 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Avatar */}
                <div className="w-24 h-24 bg-gradient-sacred rounded-full flex items-center justify-center shadow-temple">
                  <span className="text-4xl text-primary-foreground sanskrit">ॐ</span>
                </div>

                {/* Name and Title */}
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-primary serif">{teacher.name}</h3>
                  <p className="text-lg text-accent sanskrit">{teacher.title}</p>
                  <p className="text-sm text-muted-foreground serif font-semibold">{teacher.specialization}</p>
                </div>

                {/* Sanskrit Quote */}
                <div className="border-t border-b border-accent/30 py-3 w-full">
                  <p className="text-accent sanskrit text-lg mb-1">{teacher.quote}</p>
                  <p className="text-xs text-muted-foreground serif italic">{teacher.translation}</p>
                </div>

                {/* Description */}
                <p className="text-foreground serif text-sm leading-relaxed">{teacher.description}</p>

                {/* Contact */}
                <div className="pt-2">
                  <a
                    href="#"
                    className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm serif">Contact Teacher</span>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="p-8 md:p-12 bg-card border-2 border-accent/20 shadow-temple text-center">
            <h2 className="text-3xl font-bold text-primary mb-4 serif">The Guru-Shishya Parampara</h2>
            <p className="text-lg text-foreground serif leading-relaxed mb-4">
              In our Gurukul, the relationship between teacher and student goes beyond mere instruction. It is a sacred bond where knowledge flows through personal example, daily interaction, and spiritual guidance.
            </p>
            <p className="text-foreground serif leading-relaxed">
              Our Acharyas don't just teach subjects—they embody the wisdom they impart, living alongside students and guiding them on the path of self-realization through the timeless language of Sanskrit.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
