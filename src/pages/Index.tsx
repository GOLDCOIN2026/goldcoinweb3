import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, FileText, Shield, Scale, Lock, Info } from "lucide-react";
import { Link } from "react-router-dom";
import goldcoinLogo from "@/assets/goldcoin-logo.png";
import appScreenshot1 from "@/assets/app-screenshot-1.png";
import appScreenshot2 from "@/assets/app-screenshot-2.png";
import appScreenshot3 from "@/assets/app-screenshot-3.png";
import appScreenshot4 from "@/assets/app-screenshot-4.png";
import appScreenshot5 from "@/assets/app-screenshot-5.png";
import certificate from "@/assets/certificate.png";
import googlePlayBadge from "@/assets/google-play-badge.png";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const screenshots = [
    appScreenshot1,
    appScreenshot2,
    appScreenshot3,
    appScreenshot4,
    appScreenshot5,
    certificate,
  ];

  const navigationItems = [
    { title: "White Paper", path: "/whitepaper", icon: FileText },
    { title: "Privacy Policy", path: "/privacy", icon: Shield },
    { title: "Terms of Use", path: "/terms", icon: Scale },
    { title: "Security Guide", path: "/security", icon: Lock },
    { title: "About Goldcoin", path: "/about", icon: Info },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [screenshots.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Header */}
      <header className="py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <img 
              src={goldcoinLogo} 
              alt="Goldcoin Logo" 
              className="w-12 h-12 md:w-16 md:h-16"
            />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-gold bg-clip-text text-transparent text-gold-glow">
              GOLD COIN
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section with App Screenshots Carousel */}
          <section className="mb-16 animate-fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Experience the Future of 
                <span className="bg-gradient-gold bg-clip-text text-transparent"> Digital Mining</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join Millions of Users already Mining GOLD COIN. Start Your Mining Journey on Mobile and Become a Visual Star among your friends.
              </p>
            </div>

            {/* Screenshots Carousel */}
            <div className="relative max-w-4xl mx-auto carousel-container">
              <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
                
                {/* Navigation Buttons */}
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="absolute left-4 z-20 bg-card/80 border-gold/30 hover:bg-card hover:border-gold btn-gold-glow"
                >
                  <ChevronLeft className="h-6 w-6 text-primary" />
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="absolute right-4 z-20 bg-card/80 border-gold/30 hover:bg-card hover:border-gold btn-gold-glow"
                >
                  <ChevronRight className="h-6 w-6 text-primary" />
                </Button>

                {/* Screenshots */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {screenshots.map((screenshot, index) => {
                    const isActive = index === currentSlide;
                    const isNext = index === (currentSlide + 1) % screenshots.length;
                    const isPrev = index === (currentSlide - 1 + screenshots.length) % screenshots.length;
                    
                    return (
                      <div
                        key={index}
                        className={`absolute transition-all duration-700 ease-in-out ${
                          isActive 
                            ? "scale-100 z-10 opacity-100 translate-x-0" 
                            : isNext
                            ? "scale-75 z-5 opacity-60 translate-x-32 md:translate-x-48"
                            : isPrev
                            ? "scale-75 z-5 opacity-60 -translate-x-32 md:-translate-x-48"
                            : "scale-50 z-0 opacity-20"
                        }`}
                      >
                        <img
                          src={screenshot}
                          alt={`Goldcoin App Screenshot ${index + 1}`}
                          className="w-64 md:w-80 h-auto rounded-3xl shadow-gold"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-3">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? "bg-primary shadow-gold-glow" 
                        : "bg-muted hover:bg-secondary"
                    }`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Navigation Tabs */}
          <section className="mb-16 animate-fade-up">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Learn More About 
                <span className="bg-gradient-gold bg-clip-text text-transparent"> Goldcoin</span>
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {navigationItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="bg-card/50 border-gold/30 hover:border-gold hover:shadow-gold-glow transition-all duration-300 group">
                    <CardContent className="p-8 text-center">
                      <Link to={item.path} className="block">
                        <Icon className="w-10 h-10 mx-auto mb-4 text-primary group-hover:text-gold transition-colors" />
                        <h4 className="text-xl font-bold text-foreground group-hover:bg-gradient-gold group-hover:bg-clip-text group-hover:text-transparent transition-all">
                          {item.title}
                        </h4>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Download Section */}
          <section className="text-center animate-fade-up">
            <Card className="bg-card/50 border-gold/30 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Download from Google Play
                </h3>
                <p className="text-muted-foreground mb-8">
                  Get the Goldcoin app on your mobile device and start mining today!
                </p>
                
                <a 
                  href="https://play.google.com/store/apps/details?id=com.goldcoin.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img 
                    src={googlePlayBadge} 
                    alt="Get it on Google Play"
                    className="h-16 md:h-20 hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 border-t border-border/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Goldcoin. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;