import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const jobPositions = [
  "Charted Accountant",
  "Customer Support and Security Staff",
  "Kitchen Staff",
  "Garden Staff",
  "Secretary",
  "Programmer",
  "Designer",
] as const;

const formSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(10, "Phone must be at least 10 digits").max(20),
  position: z.enum(jobPositions, { required_error: "Please select a position" }),
  experience: z.string().min(10, "Please provide details about your experience").max(2000),
  education: z.string().min(10, "Please provide details about your education").max(1000),
  address: z.string().min(10, "Please provide your complete address").max(500),
  cover_letter: z.string().min(50, "Cover letter must be at least 50 characters").max(2000),
  photo: z.instanceof(FileList).optional(),
});

type FormData = z.infer<typeof formSchema>;

export const ApplicationForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      let photoUrl = null;

      // Upload photo if provided
      if (data.photo && data.photo.length > 0) {
        const file = data.photo[0];
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;

        const { error: uploadError } = await supabase.storage
          .from('application-photos')
          .upload(fileName, file);

        if (uploadError) throw uploadError;
        photoUrl = fileName;
      }

      // Insert application
      const { error } = await supabase
        .from('applications')
        .insert({
          full_name: data.full_name,
          email: data.email,
          phone: data.phone,
          position: data.position,
          experience: data.experience,
          education: data.education,
          address: data.address,
          cover_letter: data.cover_letter,
          photo_url: photoUrl,
        });

      if (error) throw error;

      toast({
        title: "Application Submitted!",
        description: "Your form has been submitted successfully. We respect your wish to join the State of the Art Digital Empire. Stay tuned, you will be notified via Email.",
      });
      
      onSuccess();
    } catch (error: any) {
      toast({
        title: "Submission Failed",
        description: error.message || "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto p-6">
      <div>
        <Label htmlFor="full_name">Full Name *</Label>
        <Input id="full_name" {...register("full_name")} />
        {errors.full_name && <p className="text-sm text-destructive mt-1">{errors.full_name.message}</p>}
      </div>

      <div>
        <Label htmlFor="email">Email *</Label>
        <Input id="email" type="email" {...register("email")} />
        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <Label htmlFor="phone">Phone Number *</Label>
        <Input id="phone" {...register("phone")} />
        {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>}
      </div>

      <div>
        <Label htmlFor="position">Position *</Label>
        <Select onValueChange={(value) => setValue("position", value as any)}>
          <SelectTrigger>
            <SelectValue placeholder="Select a position" />
          </SelectTrigger>
          <SelectContent>
            {jobPositions.map((position) => (
              <SelectItem key={position} value={position}>
                {position}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.position && <p className="text-sm text-destructive mt-1">{errors.position.message}</p>}
      </div>

      <div>
        <Label htmlFor="education">Education *</Label>
        <Textarea id="education" {...register("education")} rows={3} />
        {errors.education && <p className="text-sm text-destructive mt-1">{errors.education.message}</p>}
      </div>

      <div>
        <Label htmlFor="experience">Work Experience *</Label>
        <Textarea id="experience" {...register("experience")} rows={4} />
        {errors.experience && <p className="text-sm text-destructive mt-1">{errors.experience.message}</p>}
      </div>

      <div>
        <Label htmlFor="address">Address *</Label>
        <Textarea id="address" {...register("address")} rows={2} />
        {errors.address && <p className="text-sm text-destructive mt-1">{errors.address.message}</p>}
      </div>

      <div>
        <Label htmlFor="cover_letter">Cover Letter *</Label>
        <Textarea id="cover_letter" {...register("cover_letter")} rows={5} placeholder="Tell us why you're a great fit for this position..." />
        {errors.cover_letter && <p className="text-sm text-destructive mt-1">{errors.cover_letter.message}</p>}
      </div>

      <div>
        <Label htmlFor="photo">Photo (Optional)</Label>
        <Input id="photo" type="file" accept="image/*" {...register("photo")} />
        {errors.photo && <p className="text-sm text-destructive mt-1">{errors.photo.message as string}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Application"
        )}
      </Button>
    </form>
  );
};
