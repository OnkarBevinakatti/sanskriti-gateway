import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We will get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen py-12 parchment-texture">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 serif">Contact Us</h1>
          <p className="text-xl text-muted-foreground sanskrit mb-2">सम्पर्कः</p>
          <p className="text-lg text-foreground serif max-w-3xl mx-auto">
            Begin your journey with us. We welcome inquiries from aspiring students and their families
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-card border-2 border-accent/20 shadow-temple">
            <h2 className="text-3xl font-bold text-primary mb-6 serif">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="serif">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  className="bg-background border-border focus:border-accent"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="serif">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  className="bg-background border-border focus:border-accent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="serif">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  className="bg-background border-border focus:border-accent"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="serif">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  required
                  className="bg-background border-border focus:border-accent"
                  placeholder="What is this regarding?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="serif">Message</Label>
                <Textarea
                  id="message"
                  required
                  rows={6}
                  className="bg-background border-border focus:border-accent resize-none"
                  placeholder="Tell us about your interest in our Gurukul..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground serif shadow-carved"
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 bg-card border-2 border-accent/20 shadow-temple">
              <h2 className="text-3xl font-bold text-primary mb-6 serif">Visit Us</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-sacred rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary serif mb-1">Address</h3>
                    <p className="text-foreground serif">
                      Sanskriti Gurukulam<br />
                      Ancient Gurukul Campus<br />
                      Sacred Valley, Uttarakhand<br />
                      India - 248001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-sacred rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary serif mb-1">Phone</h3>
                    <p className="text-foreground serif">+91 XXXXX XXXXX</p>
                    <p className="text-foreground serif">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-sacred rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary serif mb-1">Email</h3>
                    <p className="text-foreground serif">contact@sanskritigurukulam.in</p>
                    <p className="text-foreground serif">admissions@sanskritigurukulam.in</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-sacred rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary serif mb-1">Office Hours</h3>
                    <p className="text-foreground serif">Monday - Saturday: 9:00 AM - 5:00 PM</p>
                    <p className="text-foreground serif">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Map Placeholder */}
            <Card className="p-8 bg-card border-2 border-accent/20 shadow-temple">
              <h2 className="text-2xl font-bold text-primary mb-4 serif">Location</h2>
              <div className="aspect-video bg-gradient-to-br from-secondary to-accent/20 rounded-md flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin className="w-12 h-12 text-accent mx-auto" />
                  <p className="text-foreground serif font-semibold">Map View</p>
                  <p className="text-sm text-muted-foreground serif">Nestled in the sacred Himalayas</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <Card className="p-8 bg-card border-2 border-accent/20 shadow-temple">
            <p className="text-2xl text-accent sanskrit mb-2">आगच्छन्तु ज्ञानार्थिनः</p>
            <p className="text-foreground serif text-lg">Welcome, seekers of knowledge</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
