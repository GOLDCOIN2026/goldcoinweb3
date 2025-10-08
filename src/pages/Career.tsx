import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Briefcase } from "lucide-react";
import goldcoinLogo from "@/assets/goldcoin-logo.png";
import ApplicationForm from "@/components/ApplicationForm";

const Career = () => {
  const [showForm, setShowForm] = useState(false);
  const downloadUrl = "https://ia801002.us.archive.org/19/items/goldcoinweb-3-v-1.1/GOLDCOINWEB3%20v1.1.apk";

  if (showForm) {
    return <ApplicationForm onBack={() => setShowForm(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-dark">
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

      <main className="px-4 md:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/50 border-gold/30">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-12">
                <Briefcase className="w-16 h-16 mx-auto mb-6 text-primary drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Career Opportunity
                </h2>
                <p className="text-xl text-muted-foreground">
                  Join the leading annotative group GOLDCOIN® Pvt Ltd
                </p>
              </div>

              <div className="space-y-8">
                <div className="text-center">
                  <a 
                    href={downloadUrl}
                    download
                  >
                    <Button 
                      size="lg"
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold px-12 py-6 text-lg rounded-lg border-2 border-green-400 shadow-[0_0_20px_rgba(34,197,94,0.6)] hover:shadow-[0_0_30px_rgba(34,197,94,0.8)] transition-all duration-300"
                    >
                      Check the App
                    </Button>
                  </a>
                </div>

                <div className="border-t border-border/30 pt-8">
                  <div className="bg-card/30 border border-primary/20 rounded-lg p-6 mb-6">
                    <p className="text-muted-foreground text-center leading-relaxed">
                      Please check the App and use it for several days to gauge the actual requirements of the work before applying.
                    </p>
                  </div>

                  <div className="text-center">
                    <Button 
                      size="lg"
                      onClick={() => setShowForm(true)}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-6 text-lg rounded-lg shadow-[0_0_20px_rgba(234,179,8,0.6)] hover:shadow-[0_0_30px_rgba(234,179,8,0.8)] transition-all duration-300"
                    >
                      Apply for a Post
                    </Button>
                  </div>
                </div>

                <div className="text-center pt-6">
                  <Link to="/">
                    <Button variant="outline" className="border-gold/30">
                      Back to Home
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="py-8 px-4 md:px-8 border-t border-border/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <p>© GOLDCOIN</p>
            <img src={goldcoinLogo} alt="Goldcoin" className="w-6 h-6" />
            <p>2026 Inc Ltd® - All Right Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Career;
