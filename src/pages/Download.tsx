import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import goldcoinLogo from "@/assets/goldcoin-logo.png";

const Download = () => {
  const downloadUrl = "https://ia600503.us.archive.org/5/items/goldcoinweb-3-v-4.0/GOLDCOINWEB3%20V4.0.apk";

  return (
    <div className="min-h-screen bg-gradient-dark flex items-center justify-center px-4">
      <Card className="bg-card/50 border-gold/30 max-w-2xl w-full">
        <CardContent className="p-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <img 
              src={goldcoinLogo} 
              alt="Goldcoin Logo" 
              className="w-16 h-16"
            />
            <h1 className="text-4xl font-bold bg-gradient-gold bg-clip-text text-transparent">
              GOLD COIN
            </h1>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Download GOLDCOIN APK
          </h2>

          <div className="mb-8">
            <p className="text-muted-foreground mb-2">
              Check your version. The present latest version is:
            </p>
            <p className="text-xl font-bold text-foreground mb-4">
              Goldcoin version v4.0
            </p>
            <p className="text-muted-foreground">
              Press the download button to download the APK
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <a 
              href={downloadUrl}
              download
            >
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-6 text-lg rounded-lg border-2 border-green-400 shadow-[0_0_20px_rgba(34,197,94,0.6)] hover:shadow-[0_0_30px_rgba(34,197,94,0.8)] transition-all duration-300"
              >
                Download Now
              </Button>
            </a>

            <Link to="/">
              <Button variant="outline" className="border-gold/30">
                Back to Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Download;
