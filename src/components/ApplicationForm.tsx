import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, Upload } from "lucide-react";
import goldcoinLogo from "@/assets/goldcoin-logo.png";

interface ApplicationFormProps {
  onBack: () => void;
}

const ApplicationForm = ({ onBack }: ApplicationFormProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string>("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    education: "",
    address: "",
    coverLetter: "",
  });

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select an image under 5MB",
          variant: "destructive",
        });
        return;
      }
      setPhotoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let photoUrl = "";

      if (photoFile) {
        const fileExt = photoFile.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("application-photos")
          .upload(filePath, photoFile);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from("application-photos")
          .getPublicUrl(filePath);

        photoUrl = publicUrl;
      }

      const { error } = await supabase.from("applications").insert({
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        position: formData.position,
        experience: formData.experience,
        education: formData.education,
        address: formData.address,
        cover_letter: formData.coverLetter,
        photo_url: photoUrl,
      });

      if (error) throw error;

      toast({
        title: "Application Submitted!",
        description: "Thank You for showing interest to join the leading annotative group GOLDCOIN® Pvt Ltd. You will be informed through Email, please.",
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        education: "",
        address: "",
        coverLetter: "",
      });
      setPhotoFile(null);
      setPhotoPreview("");
      onBack();
    } catch (error: any) {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

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
          <Button
            variant="outline"
            onClick={onBack}
            className="mb-6 border-gold/30"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <Card className="bg-card/50 border-gold/30">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Job Application Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="photo">Upload Photo *</Label>
                  <div className="flex items-center gap-4">
                    <Input
                      id="photo"
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      required
                      className="bg-background/50"
                    />
                    {photoPreview && (
                      <img
                        src={photoPreview}
                        alt="Preview"
                        className="w-20 h-20 object-cover rounded-lg border-2 border-primary/30"
                      />
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position">Position Applied For *</Label>
                  <Select
                    value={formData.position}
                    onValueChange={(value) => setFormData({ ...formData, position: value })}
                    required
                  >
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Select a position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="developer">Developer</SelectItem>
                      <SelectItem value="designer">Designer</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="support">Support</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Work Experience *</Label>
                  <Textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    required
                    className="bg-background/50 min-h-24"
                    placeholder="Describe your relevant work experience..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="education">Education *</Label>
                  <Textarea
                    id="education"
                    value={formData.education}
                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                    required
                    className="bg-background/50 min-h-24"
                    placeholder="Your educational background..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address *</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    required
                    className="bg-background/50"
                    placeholder="Your complete address..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Cover Letter *</Label>
                  <Textarea
                    id="coverLetter"
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    required
                    className="bg-background/50 min-h-32"
                    placeholder="Tell us why you want to join GOLDCOIN..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg shadow-[0_0_20px_rgba(234,179,8,0.6)] hover:shadow-[0_0_30px_rgba(234,179,8,0.8)] transition-all duration-300"
                >
                  {loading ? "Submitting..." : "Apply"}
                </Button>
              </form>
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

export default ApplicationForm;
