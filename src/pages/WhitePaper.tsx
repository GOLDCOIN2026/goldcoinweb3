import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const WhitePaper = () => {
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
            White Paper
          </h1>
        </div>
      </header>

      <main className="px-4 md:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <Card className="mb-8 bg-card border-gold/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-foreground">
                <FileText className="w-6 h-6 text-primary" />
                <span>Goldcoin Technical White Paper</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Goldcoin represents a revolutionary approach to digital currency mining, 
                combining cutting-edge blockchain technology with user-friendly mobile 
                accessibility. This document outlines the technical architecture, 
                security protocols, and economic model behind the Goldcoin ecosystem.
              </p>
            </CardContent>
          </Card>

          {/* Technical Overview */}
          <Card className="mb-8 bg-card border-gold/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-foreground">
                <Zap className="w-6 h-6 text-primary" />
                <span>Technical Overview</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-xl font-semibold text-foreground">Consensus Algorithm</h3>
                <p>
                  Goldcoin utilizes a hybrid Proof-of-Work (PoW) and Proof-of-Stake (PoS) 
                  consensus mechanism, optimized for mobile devices while maintaining 
                  network security and decentralization.
                </p>

                <h3 className="text-xl font-semibold text-foreground">Mobile Mining Protocol</h3>
                <p>
                  Our proprietary Mobile Mining Protocol (MMP) enables efficient mining 
                  operations on smartphones without compromising device performance or 
                  battery life through advanced power management algorithms.
                </p>

                <h3 className="text-xl font-semibold text-foreground">Blockchain Architecture</h3>
                <p>
                  The Goldcoin blockchain employs a sharded architecture with dynamic 
                  load balancing, ensuring scalability and fast transaction processing 
                  while maintaining cryptographic security.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Security Features */}
          <Card className="mb-8 bg-card border-gold/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-foreground">
                <Shield className="w-6 h-6 text-primary" />
                <span>Security & Privacy</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-xl font-semibold text-foreground">Cryptographic Security</h3>
                <p>
                  Goldcoin implements military-grade AES-256 encryption with elliptic 
                  curve cryptography (ECC) for secure transactions and wallet protection.
                </p>

                <h3 className="text-xl font-semibold text-foreground">Privacy Protection</h3>
                <p>
                  Advanced privacy features including zero-knowledge proofs and ring 
                  signatures ensure user anonymity while maintaining transaction transparency.
                </p>

                <h3 className="text-xl font-semibold text-foreground">Multi-Layer Security</h3>
                <p>
                  Our multi-layer security protocol includes biometric authentication, 
                  two-factor authentication, and hardware security module integration 
                  for maximum protection.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Economic Model */}
          <Card className="mb-8 bg-card border-gold/20">
            <CardHeader>
              <CardTitle className="text-foreground">Economic Model</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-xl font-semibold text-foreground">Mining Rewards</h3>
                <p>
                  Mining rewards follow a halving schedule every 210,000 blocks, 
                  starting at 50 GC per block. This deflationary model ensures 
                  long-term value appreciation and network sustainability.
                </p>

                <h3 className="text-xl font-semibold text-foreground">Transaction Fees</h3>
                <p>
                  Dynamic fee adjustment algorithm automatically optimizes transaction 
                  costs based on network congestion while ensuring miner incentives 
                  remain aligned with network health.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Download PDF */}
          <Card className="bg-card border-gold/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Complete White Paper
              </h3>
              <p className="text-muted-foreground mb-6">
                Download the complete technical white paper for detailed specifications, 
                code examples, and implementation guidelines.
              </p>
              <Button 
                className="bg-gradient-gold hover:bg-gradient-gold-glow text-primary-foreground font-semibold px-8 py-3 btn-gold-glow"
                disabled
              >
                <FileText className="w-5 h-5 mr-2" />
                Download PDF (Coming Soon)
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default WhitePaper;