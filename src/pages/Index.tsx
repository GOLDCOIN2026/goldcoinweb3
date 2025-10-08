import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, FileText, Shield, Scale, Lock, Info, Briefcase, FileSpreadsheet } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import goldcoinLogo from "@/assets/goldcoin-logo.png";
import appScreenshot1 from "@/assets/app-screenshot-1.png";
import appScreenshot2 from "@/assets/app-screenshot-2.png";
import appScreenshot3 from "@/assets/app-screenshot-3.png";
import appScreenshot4 from "@/assets/app-screenshot-4.png";
import appScreenshot5 from "@/assets/app-screenshot-5.png";
import utilityToken from "@/assets/utility-token.png";
import appScreenshotSpin from "@/assets/app-screenshot-spin.png";
import googlePlayBadge from "@/assets/google-play-badge.png";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);
  
  const screenshots = [
    appScreenshot1,
    appScreenshot2,
    appScreenshot3,
    appScreenshot4,
    appScreenshot5,
    utilityToken,
    appScreenshotSpin,
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

  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", user.id)
          .eq("role", "admin")
          .single();
        setIsAdmin(!!data);
      }
    };
    checkAdmin();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      checkAdmin();
    });

    return () => subscription.unsubscribe();
  }, []);

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
        <div className="max-w-7xl mx-auto flex items-center justify-between">
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
          <div className="flex items-center gap-3">
            <Link to="/auth">
              <Button 
                variant="outline" 
                className="border-primary/50 text-primary hover:bg-primary/10"
              >
                Login
              </Button>
            </Link>
            <Link to="/auth">
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Sign Up
              </Button>
            </Link>
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
                  <Card 
                    key={index} 
                    className="bg-card/50 border-2 border-primary/40 hover:border-primary transition-all duration-300 group shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.6)] hover:scale-105"
                  >
                    <CardContent className="p-8 text-center">
                      <Link to={item.path} className="block">
                        <Icon className="w-10 h-10 mx-auto mb-4 text-primary group-hover:text-accent transition-colors drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
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
                
                <div className="flex flex-col items-center gap-6">
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
                  
                  <div className="flex flex-col items-center gap-3">
                    <p className="text-foreground font-medium text-lg">
                      Direct Download GOLDCOIN Version v1.1.apk
                    </p>
                    <a 
                      href="https://ia801002.us.archive.org/19/items/goldcoinweb-3-v-1.1/GOLDCOINWEB3%20v1.1.apk"
                      download
                    >
                      <Button 
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-6 text-lg rounded-lg border-2 border-green-400 shadow-[0_0_20px_rgba(34,197,94,0.6)] hover:shadow-[0_0_30px_rgba(34,197,94,0.8)] transition-all duration-300"
                      >
                        Download
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
              <Link to="/career" className="w-full sm:w-auto">
                <Button 
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-lg shadow-[0_0_20px_rgba(234,179,8,0.6)] hover:shadow-[0_0_30px_rgba(234,179,8,0.8)] transition-all duration-300"
                >
                  <Briefcase className="w-5 h-5 mr-2" />
                  Career Opportunity
                </Button>
              </Link>

              {isAdmin && (
                <Link to="/applications" className="w-full sm:w-auto">
                  <Button 
                    className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 text-lg rounded-lg shadow-[0_0_20px_rgba(234,179,8,0.6)] hover:shadow-[0_0_30px_rgba(234,179,8,0.8)] transition-all duration-300"
                  >
                    <FileSpreadsheet className="w-5 h-5 mr-2" />
                    Applications
                  </Button>
                </Link>
              )}
            </div>

            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <p>© GOLDCOIN</p>
              <img src={goldcoinLogo} alt="Goldcoin" className="w-6 h-6" />
              <p>2026 Inc Ltd® - All Right Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;