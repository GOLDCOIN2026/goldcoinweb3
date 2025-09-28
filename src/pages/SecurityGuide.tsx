import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Lock, AlertTriangle, CheckCircle, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const SecurityGuide = () => {
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
            Security Guide
          </h1>
        </div>
      </header>

      <main className="px-4 md:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <Card className="mb-8 bg-card border-gold/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-foreground">
                <Shield className="w-6 h-6 text-primary" />
                <span>Your Security is Our Priority</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Goldcoin employs bank-level security measures to protect your digital 
                assets and personal information. This guide will help you understand 
                our security features and best practices to keep your account safe.
              </p>
            </CardContent>
          </Card>

          {/* App Security Features */}
          <Card className="mb-8 bg-card border-gold/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-foreground">
                <Lock className="w-6 h-6 text-primary" />
                <span>Built-in Security Features</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">End-to-End Encryption</h3>
                    <p className="text-muted-foreground">
                      All data transmitted between your device and our servers is protected 
                      with AES-256 encryption, the same standard used by banks and government agencies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Biometric Authentication</h3>
                    <p className="text-muted-foreground">
                      Secure your account with fingerprint or facial recognition technology 
                      for quick and secure access to your wallet.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Multi-Layer Protection</h3>
                    <p className="text-muted-foreground">
                      Multiple security layers including device verification, IP monitoring, 
                      and anomaly detection protect against unauthorized access.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Secure Key Management</h3>
                    <p className="text-muted-foreground">
                      Private keys are stored in hardware security modules and never transmitted 
                      over the network, ensuring only you have access to your funds.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Best Practices */}
          <Card className="mb-8 bg-card border-gold/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-foreground">
                <Eye className="w-6 h-6 text-primary" />
                <span>Security Best Practices</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Account Security</h3>
                <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                  <li>Use a strong, unique password for your Goldcoin account</li>
                  <li>Enable biometric authentication when available</li>
                  <li>Never share your account credentials with anyone</li>
                  <li>Regularly update the Goldcoin app to get the latest security features</li>
                  <li>Log out of shared or public devices</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground">Device Security</h3>
                <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                  <li>Keep your mobile device's operating system updated</li>
                  <li>Use a device lock screen with PIN, pattern, or biometric security</li>
                  <li>Avoid using public Wi-Fi for sensitive transactions</li>
                  <li>Install apps only from official app stores</li>
                  <li>Enable automatic device locking</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground">Network Safety</h3>
                <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                  <li>Use secure, trusted networks when possible</li>
                  <li>Consider using a VPN on public networks</li>
                  <li>Be cautious of phishing websites and emails</li>
                  <li>Verify the official Goldcoin website URL before logging in</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Warning Signs */}
          <Card className="mb-8 bg-card border-gold/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-foreground">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                <span>Security Warning Signs</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-foreground font-semibold">
                  Contact support immediately if you notice:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                  <li>Unexpected login notifications or account activity</li>
                  <li>Changes to your account settings you didn't make</li>
                  <li>Missing coins or unauthorized transactions</li>
                  <li>Suspicious emails claiming to be from Goldcoin</li>
                  <li>Requests for your password or private keys</li>
                  <li>Apps or websites that look similar to Goldcoin but aren't official</li>
                </ul>
                
                <div className="mt-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <p className="text-destructive font-semibold">
                    ⚠️ Remember: Goldcoin support will NEVER ask for your password, 
                    private keys, or seed phrases via email, phone, or chat.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recovery & Backup */}
          <Card className="mb-8 bg-card border-gold/20">
            <CardHeader>
              <CardTitle className="text-foreground">Backup & Recovery</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-xl font-semibold text-foreground">Wallet Backup</h3>
                <p>
                  Always maintain a secure backup of your wallet recovery phrase. 
                  Store it in multiple secure locations and never share it with anyone.
                </p>

                <h3 className="text-xl font-semibold text-foreground">Account Recovery</h3>
                <p>
                  If you lose access to your device, you can recover your account using 
                  your registered email address and following our secure verification process.
                </p>

                <h3 className="text-xl font-semibold text-foreground">Emergency Contacts</h3>
                <p>
                  Consider setting up trusted emergency contacts who can help you regain 
                  access to your account if needed.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Security Team */}
          <Card className="bg-card border-gold/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Security Concerns?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our security team is available 24/7 to help with any security-related 
                questions or concerns. Don't hesitate to reach out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-gold hover:bg-gradient-gold-glow text-primary-foreground font-semibold px-8 py-3 btn-gold-glow"
                  asChild
                >
                  <a href="mailto:security@goldcoin.app">
                    Contact Security Team
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  className="border-gold/30 hover:border-gold"
                  asChild
                >
                  <a href="mailto:support@goldcoin.app">
                    General Support
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SecurityGuide;