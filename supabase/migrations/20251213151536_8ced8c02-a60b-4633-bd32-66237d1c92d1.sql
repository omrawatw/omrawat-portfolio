-- Create contact_submissions table for the contact form
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public contact form)
CREATE POLICY "Anyone can submit contact form" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

-- Only allow authenticated users to view submissions (optional admin access)
CREATE POLICY "Authenticated users can view submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (auth.role() = 'authenticated');