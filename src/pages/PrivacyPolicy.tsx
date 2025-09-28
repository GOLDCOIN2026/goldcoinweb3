import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Eye, Database } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Header */}
      <header className="py-6 px-4 md:px-8 border-b border-border/30">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Button variant="outline" asChild className="border-gold/30 hover:border-gold">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </Button>
          
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent">
            Privacy Policy
          </h1>
        </div>
      </header>

      <main className="px-4 md:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Last Updated */}
          <div className="text-center mb-8">
            <p className="text-muted-foreground">
              Last updated: December 2024
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-8 bg-card border-gold/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-foreground">
                <Shield className="w-6 h-6 text-primary" />
                <span>Your Privacy Matters</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At Goldcoin, we are committed to protecting your privacy and ensuring 
                the security of your personal information. This Privacy Policy explains 
                how we collect, use, and safeguard your data when you use our mobile 
                application and services.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="mb-8 bg-card border-gold/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-foreground">
                <Database className="w-6 h-6 text-primary" />
                <span>Information We Collect</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-xl font-semibold text-foreground">Account Information</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Email address for account creation and communication</li>
                  <li>Device information for app optimization and security</li>
                  <li>Mining activity and transaction history</li>
                  <li>App usage analytics to improve user experience</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground">Device Information</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Device model, operating system version</li>
                  <li>Unique device identifiers</li>
                  <li>App performance metrics</li>
                  <li>Network connection information</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground">Mining Data</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Mining statistics and earnings</li>
                  <li>Blockchain transaction records</li>
                  <li>Wallet addresses and balances</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Your Information */}
          <Card className="mb-8 bg-card border-gold/20">
            <CardHeader>
              <CardTitle className="text-foreground">How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <ul className="list-disc list-inside space-y-2">
                  <li>Provide and maintain the Goldcoin mining service</li>
                  <li>Process transactions and maintain blockchain records</li>
                  <li>Send important notifications about your account and mining activity</li>
                  <li>Improve app performance and user experience</li>
                  <li>Detect and prevent fraud or unauthorized access</li>
                  <li>Comply with legal obligations and regulatory requirements</li>
                  <li>Provide customer support and technical assistance</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="mb-8 bg-card border-gold/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-foreground">
                <Eye className="w-6 h-6 text-primary" />
                <span>Data Protection & Security</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-xl font-semibold text-foreground">Encryption</h3>
                <p>
                  All sensitive data is encrypted using industry-standard AES-256 encryption 
                  both in transit and at rest.
                </p>

                <h3 className="text-xl font-semibold text-foreground">Access Controls</h3>
                <p>
                  Access to personal data is restricted to authorized personnel only and 
                  is protected by multi-factor authentication systems.
                </p>

                <h3 className="text-xl font-semibold text-foreground">Regular Audits</h3>
                <p>
                  We conduct regular security audits and penetration testing to ensure 
                  the highest level of data protection.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="mb-8 bg-card border-gold/20">
            <CardHeader>
              <CardTitle className="text-foreground">Your Privacy Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                  <li><strong>Portability:</strong> Export your data in a machine-readable format</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Restriction:</strong> Limit how we process your data</li>
                </ul>
                
                <p className="mt-4">
                  To exercise any of these rights, please contact us at privacy@goldcoin.app
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-card border-gold/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Questions About Privacy?
              </h3>
              <p className="text-muted-foreground mb-6">
                If you have any questions about this Privacy Policy or how we handle 
                your personal information, please don't hesitate to contact us.
              </p>
              <Button 
                className="bg-gradient-gold hover:bg-gradient-gold-glow text-primary-foreground font-semibold px-8 py-3 btn-gold-glow"
                asChild
              >
                <a href="mailto:privacy@goldcoin.app">
                  Contact Privacy Team
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;