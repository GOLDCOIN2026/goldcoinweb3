import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfUse = () => {
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
            Terms of Use
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
                <FileText className="w-6 h-6 text-primary" />
                <span>Agreement to Terms</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg leading-relaxed">
                By downloading, installing, or using the Goldcoin mobile application, 
                you agree to be bound by these Terms of Use. If you do not agree to 
                these terms, please do not use our application or services.
              </p>
            </CardContent>
          </Card>

          {/* Acceptable Use */}
          <Card className="mb-8 bg-card border-gold/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-foreground">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span>Acceptable Use</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-xl font-semibold text-foreground">Permitted Activities</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use the app for legitimate mining activities</li>
                  <li>Create and manage your digital wallet</li>
                  <li>Participate in the Goldcoin network</li>
                  <li>Access educational resources and support</li>
                  <li>Withdraw earned coins according to our policies</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground">Account Requirements</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You must be at least 18 years old</li>
                  <li>Provide accurate and truthful information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use only one account per person</li>
                  <li>Comply with applicable laws and regulations</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Prohibited Activities */}
          <Card className="mb-8 bg-card border-gold/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-foreground">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                <span>Prohibited Activities</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <p className="font-semibold text-foreground">
                  The following activities are strictly prohibited:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Using automated scripts, bots, or mining farms</li>
                  <li>Creating multiple accounts or sharing accounts</li>
                  <li>Attempting to hack, reverse engineer, or exploit the app</li>
                  <li>Engaging in fraudulent or deceptive practices</li>
                  <li>Violating any applicable laws or regulations</li>
                  <li>Interfering with other users' mining activities</li>
                  <li>Distributing malware or harmful code</li>
                  <li>Circumventing security measures or access controls</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Mining Terms */}
          <Card className="mb-8 bg-card border-gold/20">
            <CardHeader>
              <CardTitle className="text-foreground">Mining Terms & Conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-xl font-semibold text-foreground">Mining Rewards</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Mining rewards are calculated based on network contribution</li>
                  <li>Rewards may fluctuate based on network difficulty and participation</li>
                  <li>Minimum withdrawal thresholds may apply</li>
                  <li>Processing fees may be deducted from withdrawals</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground">Network Participation</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Mining requires active participation and valid device authentication</li>
                  <li>Inactive accounts may be subject to reduced rewards</li>
                  <li>Network upgrades may temporarily affect mining operations</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Liability & Disclaimers */}
          <Card className="mb-8 bg-card border-gold/20">
            <CardHeader>
              <CardTitle className="text-foreground">Liability & Disclaimers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-xl font-semibold text-foreground">Service Availability</h3>
                <p>
                  We strive to maintain 99.9% uptime, but cannot guarantee uninterrupted 
                  service. Maintenance windows and unexpected outages may occur.
                </p>

                <h3 className="text-xl font-semibold text-foreground">Investment Risk</h3>
                <p>
                  Cryptocurrency mining involves inherent risks. Past performance does not 
                  guarantee future results. You are responsible for understanding these risks.
                </p>

                <h3 className="text-xl font-semibold text-foreground">Limitation of Liability</h3>
                <p>
                  Our liability is limited to the maximum extent permitted by law. We are 
                  not liable for indirect, incidental, or consequential damages.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="mb-8 bg-card border-gold/20">
            <CardHeader>
              <CardTitle className="text-foreground">Account Termination</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We reserve the right to terminate or suspend accounts that violate these 
                  terms. You may also terminate your account at any time by contacting support.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground">Effect of Termination</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access to the app will be immediately revoked</li>
                  <li>Pending withdrawals will be processed according to our policies</li>
                  <li>Account data may be retained as required by law</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-card border-gold/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Questions About These Terms?
              </h3>
              <p className="text-muted-foreground mb-6">
                If you have any questions about these Terms of Use, please contact 
                our legal team for clarification.
              </p>
              <Button 
                className="bg-gradient-gold hover:bg-gradient-gold-glow text-primary-foreground font-semibold px-8 py-3 btn-gold-glow"
                asChild
              >
                <a href="mailto:legal@goldcoin.app">
                  Contact Legal Team
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default TermsOfUse;