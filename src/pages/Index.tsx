import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { Download as DownloadIcon, Briefcase } from "lucide-react";
import goldcoinLogo from "@/assets/goldcoin-logo.png";
import { ApplicationForm } from "@/components/ApplicationForm";

const Index = () => {
  const [showApplyButton, setShowApplyButton] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showDownloadMessage, setShowDownloadMessage] = useState(false);

  useEffect(() => {
    // Check if 1 hour has passed since download
    const downloadTimestamp = localStorage.getItem("downloadTimestamp");
    if (downloadTimestamp) {
      const timePassed = Date.now() - parseInt(downloadTimestamp);
      const oneHour = 60 * 60 * 1000;
      setShowApplyButton(timePassed >= oneHour);
    }
  }, []);

  const handleDownloadClick = () => {
    const downloadTimestamp = localStorage.getItem("downloadTimestamp");
    if (!downloadTimestamp) {
      localStorage.setItem("downloadTimestamp", Date.now().toString());
    }
  };

  const handleApplyClick = () => {
    const downloadTimestamp = localStorage.getItem("downloadTimestamp");
    if (!downloadTimestamp) {
      setShowDownloadMessage(true);
    } else {
      setShowApplicationForm(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-10 bg-background/80">
        <div className="container mx-auto px-4 py-6 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <img src={goldcoinLogo} alt="GOLDCOIN Logo" className="h-12 w-12" />
            <h1 className="text-2xl font-bold text-foreground">GOLDCOIN - Induction</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 md:py-24">
        <section className="text-center max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Welcome to GOLDCOIN
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            Join our team or explore our revolutionary digital currency platform
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://ia801002.us.archive.org/19/items/goldcoinweb-3-v-1.1/GOLDCOINWEB3%20v1.1.apk"
              download
              onClick={handleDownloadClick}
            >
              <Button size="lg" className="text-lg px-8 py-6 w-full sm:w-auto">
                <DownloadIcon className="mr-2 h-5 w-5" />
                Check the App
              </Button>
            </a>

            {showApplyButton && (
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 w-full sm:w-auto"
                onClick={handleApplyClick}
              >
                <Briefcase className="mr-2 h-5 w-5" />
                Apply for Vacant Post
              </Button>
            )}
          </div>

          {!showApplyButton && (
            <p className="text-sm text-muted-foreground mt-8">
              Download the app and check it out. The Apply button will be available after 1 hour.
            </p>
          )}
        </section>
      </main>

      <Dialog open={showDownloadMessage} onOpenChange={setShowDownloadMessage}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Download App First</DialogTitle>
            <DialogDescription>
              Please download our app and explore the project first. After checking out the app, come back to apply for the vacant post.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <Button onClick={() => setShowDownloadMessage(false)}>Got it</Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showApplicationForm} onOpenChange={setShowApplicationForm}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Job Application Form</DialogTitle>
            <DialogDescription>
              Fill out the form below to apply for a position at GOLDCOIN
            </DialogDescription>
          </DialogHeader>
          <ApplicationForm onSuccess={() => setShowApplicationForm(false)} />
        </DialogContent>
      </Dialog>

      <footer className="border-t border-border/40 mt-16 py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <img src={goldcoinLogo} alt="GOLDCOIN" className="h-8 w-8" />
            <span className="font-semibold text-foreground">GOLDCOIN</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 GOLDCOIN. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
