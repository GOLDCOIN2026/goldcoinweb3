import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Coins, Users, Zap, Award, Globe, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const AboutGoldcoin = () => {
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
            About Goldcoin
          </h1>
        </div>
      </header>

      <main className="px-4 md:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Mission Statement */}
          <Card className="mb-8 bg-card border-gold/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-foreground">
                <Coins className="w-6 h-6 text-primary" />
                <span>Our Mission</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Goldcoin is revolutionizing the way people participate in cryptocurrency 
                mining by making it accessible, sustainable, and rewarding for everyone. 
                Our mission is to democratize digital currency mining through innovative 
                mobile technology.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We believe that everyone should have the opportunity to participate in 
                the digital economy, regardless of their technical background or 
                financial resources. Goldcoin makes this possible through our 
                user-friendly mobile application.
              </p>
            </CardContent>
          </Card>

          {/* Key Features */}
          <Card className="mb-8 bg-card border-gold/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-foreground">
                <Zap className="w-6 h-6 text-primary" />
                <span>What Makes Goldcoin Special</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Easy to Use</h3>
                      <p className="text-muted-foreground">
                        No technical knowledge required. Start mining with just a few taps.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Globe className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Global Network</h3>
                      <p className="text-muted-foreground">
                        Join millions of users worldwide in the Goldcoin ecosystem.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Sustainable Growth</h3>
                      <p className="text-muted-foreground">
                        Built for long-term sustainability with eco-friendly mining algorithms.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Community Driven</h3>
                      <p className="text-muted-foreground">
                        Governed by our community with transparent decision-making processes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Secure & Reliable</h3>
                      <p className="text-muted-foreground">
                        Bank-level security with 99.9% uptime guarantee.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Coins className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Fair Rewards</h3>
                      <p className="text-muted-foreground">
                        Transparent reward system based on network contribution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technology */}
          <Card className="mb-8 bg-card border-gold/20">
            <CardHeader>
              <CardTitle className="text-foreground">Revolutionary Technology</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-xl font-semibold text-foreground">Mobile-First Mining</h3>
                <p>
                  Our proprietary Mobile Mining Protocol (MMP) enables efficient cryptocurrency 
                  mining on smartphones without draining battery or compromising device performance. 
                  This breakthrough technology makes mining accessible to everyone.
                </p>

                <h3 className="text-xl font-semibold text-foreground">Hybrid Consensus</h3>
                <p>
                  Goldcoin uses a revolutionary hybrid Proof-of-Work and Proof-of-Stake consensus 
                  mechanism that ensures security while maintaining energy efficiency. This approach 
                  provides the best of both worlds.
                </p>

                <h3 className="text-xl font-semibold text-foreground">Scalable Architecture</h3>
                <p>
                  Built on a sharded blockchain architecture that can handle millions of transactions 
                  per second while maintaining decentralization and security. Our network grows 
                  stronger with every new user.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Team & Vision */}
          <Card className="mb-8 bg-card border-gold/20">
            <CardHeader>
              <CardTitle className="text-foreground">Our Vision for the Future</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Goldcoin was founded by a team of blockchain experts, mobile developers, 
                  and cryptocurrency enthusiasts who saw the need for a more accessible 
                  and user-friendly mining platform.
                </p>

                <p>
                  Our vision is to create a world where anyone with a smartphone can 
                  participate in the digital economy and benefit from the growth of 
                  cryptocurrency. We're building the infrastructure for a more 
                  inclusive financial future.
                </p>

                <div className="mt-6 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Join Our Journey</h3>
                  <p className="text-muted-foreground">
                    We're just getting started. As we continue to innovate and expand, 
                    we invite you to be part of this revolutionary movement in 
                    cryptocurrency mining. Together, we're building the future of 
                    digital finance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Statistics */}
          <Card className="mb-8 bg-card border-gold/20">
            <CardHeader>
              <CardTitle className="text-foreground">Goldcoin by the Numbers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">500K+</div>
                  <div className="text-muted-foreground">Active Miners</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50M+</div>
                  <div className="text-muted-foreground">Coins Mined</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">150+</div>
                  <div className="text-muted-foreground">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-muted-foreground">Uptime</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-card border-gold/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-6">
                Have questions about Goldcoin? Want to learn more about our technology 
                or partnership opportunities? We'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-gold hover:bg-gradient-gold-glow text-primary-foreground font-semibold px-8 py-3 btn-gold-glow"
                  asChild
                >
                  <a href="mailto:hello@goldcoin.app">
                    Contact Us
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  className="border-gold/30 hover:border-gold"
                  asChild
                >
                  <a href="mailto:partnerships@goldcoin.app">
                    Partnerships
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

export default AboutGoldcoin;