import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import goldcoinLogo from "@/assets/goldcoin-logo.png";

const Download = () => {
  const downloadUrl = "https://my.microsoftpersonalcontent.com/personal/5b1fe5a3d92014a5/_layouts/15/download.aspx?UniqueId=3b24f3f1-f0a6-426c-9b15-ebe59376cf79&Translate=false&tempauth=v1e.eyJzaXRlaWQiOiIxYzMyOWUxNS03NDFlLTQ4ZTQtOTIwYi02Nzk4NTg1MjY5OTUiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzU5NDI3ODA0In0.g-b5ev6aJX1M3DwoBTaZLtXJNvMfyJAiY2qHw-ly6RqTumIczXunYjOCkymiPDuWSKD_WDkP2LaeHQKgivxVbtQkXrotrvXNWbcVXp2m65ENNgxLOwUOxpfbxZY9cCXLTLexoLG5MnnfMw1EuaCq24_HuYbwFyFzYz4gsgfetJ7OuF-vsFto-yLaYauvNSxvFhQ-SPIVUcrSxz1Guy2jJBulBycjaT5J5Axns2bZ0_2D7cVSXaLWLOWCtbvE1ls9v8HzQvThhNij8J6HOa6YXmBSmjkSRBooSP5cI6zqN6dT070_JZZ1bqg8TUQmjWwW8PDGJm3q6vzveVT5cChEA2YYXRuGB6WuKXZarSdypEodNFu9fMIb_vO4GAOj7Nq8Lm2iUNbAxJ8powU6IKMoCLLC7URl6pbRTB2GWKinD9H9qf1MbPWnxroj7GfDdB9LtLv4JH2Pgo6nfLAz33h86JdZlkFEEAVkpajg4EKdWtUxrrsO39zAH4Qp--p8QCU26XHQFNv_WNqfiq3om2g8zg.IM0fA3vxORG50kN0FE4XKFnycAMaNZBXyIkmcyCRdAw&ApiVersion=2.0";

  useEffect(() => {
    // Automatically redirect to download after 1 second
    const timer = setTimeout(() => {
      window.location.href = downloadUrl;
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
            Downloading GOLDCOIN v1.1.apk
          </h2>
          
          <p className="text-muted-foreground mb-8">
            Your download will start automatically. If it doesn't start, click the button below.
          </p>

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
