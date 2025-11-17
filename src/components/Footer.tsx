import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-card to-primary/10 border-t-2 border-accent/30 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-sacred rounded-full flex items-center justify-center">
                <span className="text-xl text-primary-foreground sanskrit">ॐ</span>
              </div>
              <h3 className="text-lg font-bold text-primary sanskrit">संस्कृति गुरुकुलम्</h3>
            </div>
            <p className="text-sm text-muted-foreground serif leading-relaxed">
              Reviving the purity of knowledge through the language of the Vedas. Join us on this sacred journey of learning.
            </p>
            <p className="text-xs sanskrit text-accent">सत्यं वद धर्मं चर</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary serif">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/about" className="text-sm serif text-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/courses" className="text-sm serif text-foreground hover:text-primary transition-colors">
                Courses
              </Link>
              <Link to="/teachers" className="text-sm serif text-foreground hover:text-primary transition-colors">
                Teachers
              </Link>
              <Link to="/gallery" className="text-sm serif text-foreground hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link to="/contact" className="text-sm serif text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary serif">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span className="serif text-foreground">Ancient Gurukul Campus, Sacred Valley, India</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="serif text-foreground">+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="serif text-foreground">contact@sanskritigurukulam.in</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground serif">
            © {new Date().getFullYear()} Sanskriti Gurukulam. All rights reserved.
          </p>
          <p className="text-xs sanskrit text-accent mt-2">विद्यां ददाति विनयं</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
