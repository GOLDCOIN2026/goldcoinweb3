import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import goldcoinLogo from "@/assets/goldcoin-logo.png";

interface Application {
  id: string;
  photo_url: string | null;
  full_name: string;
  position: string;
  email: string;
  phone: string;
  experience: string;
  education: string;
  address: string;
  cover_letter: string;
  created_at: string;
}

const Applications = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdminAndFetch = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          toast({
            title: "Access Denied",
            description: "Please log in as admin",
            variant: "destructive",
          });
          navigate("/");
          return;
        }

        const { data: roleData } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", user.id)
          .eq("role", "admin")
          .single();

        if (!roleData) {
          toast({
            title: "Access Denied",
            description: "Admin access required",
            variant: "destructive",
          });
          navigate("/");
          return;
        }

        setIsAdmin(true);

        const { data, error } = await supabase
          .from("applications")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setApplications(data || []);
      } catch (error: any) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    checkAdminAndFetch();
  }, [navigate, toast]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-dark flex items-center justify-center">
        <p className="text-xl text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
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
        <div className="max-w-7xl mx-auto">
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="mb-6 border-gold/30"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          <h2 className="text-3xl font-bold text-foreground mb-8">
            Job Applications ({applications.length})
          </h2>

          {applications.length === 0 ? (
            <Card className="bg-card/50 border-gold/30">
              <CardContent className="p-12 text-center">
                <p className="text-xl text-muted-foreground">
                  No applications received yet
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {applications.map((app) => (
                <Card key={app.id} className="bg-card/50 border-gold/30 hover:border-gold/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        {app.photo_url ? (
                          <img
                            src={app.photo_url}
                            alt={app.full_name}
                            className="w-24 h-24 object-cover rounded-lg border-2 border-primary/30"
                          />
                        ) : (
                          <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center border-2 border-primary/30">
                            <span className="text-2xl text-muted-foreground">
                              {app.full_name.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex-grow space-y-2">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <h3 className="text-xl font-bold text-foreground">
                            {app.full_name}
                          </h3>
                          <span className="text-sm text-muted-foreground">
                            {formatDate(app.created_at)}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                          <div>
                            <span className="text-muted-foreground">Position:</span>
                            <span className="ml-2 text-foreground font-medium capitalize">
                              {app.position}
                            </span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Email:</span>
                            <span className="ml-2 text-foreground">{app.email}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Phone:</span>
                            <span className="ml-2 text-foreground">{app.phone}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Address:</span>
                            <span className="ml-2 text-foreground">{app.address}</span>
                          </div>
                        </div>

                        <div className="pt-2 space-y-2">
                          <div>
                            <span className="text-muted-foreground text-sm">Experience:</span>
                            <p className="text-foreground text-sm mt-1">{app.experience}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground text-sm">Education:</span>
                            <p className="text-foreground text-sm mt-1">{app.education}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground text-sm">Cover Letter:</span>
                            <p className="text-foreground text-sm mt-1">{app.cover_letter}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
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

export default Applications;
