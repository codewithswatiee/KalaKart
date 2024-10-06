"use client"
import { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  school: string;
  yearOfStudy: string;
  skills: string;
  availability: string;
  references: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  school?: string;
  yearOfStudy?: string;
  skills?: string;
  availability?: string;
}

export default function StudentCoordinatorForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    school: '',
    yearOfStudy: '',
    skills: '',
    availability: '',
    references: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    let newErrors: FormErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.school) newErrors.school = 'School/College is required';
    if (!formData.yearOfStudy) newErrors.yearOfStudy = 'Year of study is required';
    if (!formData.skills) newErrors.skills = 'Skills/Experience is required';
    if (!formData.availability) newErrors.availability = 'Availability is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      alert('Application submitted successfully!');
      // Reset form data if needed
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        school: '',
        yearOfStudy: '',
        skills: '',
        availability: '',
        references: ''
      });
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF0D1] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-[#795757] p-6">
          <h2 className="text-2xl font-bold text-white">Student Coordinator Application</h2>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-[#664343]">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="border-[#795757] focus:ring-[#664343]"
              required
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#664343]">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="border-[#795757] focus:ring-[#664343]"
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-[#664343]">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="border-[#795757] focus:ring-[#664343]"
              required
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="school" className="text-[#664343]">Local School/College</Label>
            <Input
              id="school"
              name="school"
              value={formData.school}
              onChange={handleChange}
              className="border-[#795757] focus:ring-[#664343]"
              required
            />
            {errors.school && <p className="text-red-500 text-sm">{errors.school}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="yearOfStudy" className="text-[#664343]">Year of Study</Label>
            <Input
              id="yearOfStudy"
              name="yearOfStudy"
              value={formData.yearOfStudy}
              onChange={handleChange}
              className="border-[#795757] focus:ring-[#664343]"
              required
            />
            {errors.yearOfStudy && <p className="text-red-500 text-sm">{errors.yearOfStudy}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="skills" className="text-[#664343]">Relevant Skills/Experience</Label>
            <Textarea
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="border-[#795757] focus:ring-[#664343]"
              placeholder="Please list any previous experience in organizing events or working with communities"
              required
            />
            {errors.skills && <p className="text-red-500 text-sm">{errors.skills}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="availability" className="text-[#664343]">Availability</Label>
            <Textarea
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="border-[#795757] focus:ring-[#664343]"
              placeholder="Please indicate your availability to work: days of the week and hours"
              required
            />
            {errors.availability && <p className="text-red-500 text-sm">{errors.availability}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="references" className="text-[#664343]">References (optional)</Label>
            <Textarea
              id="references"
              name="references"
              value={formData.references}
              onChange={handleChange}
              className="border-[#795757] focus:ring-[#664343]"
              placeholder="Please provide contact information for one or two references"
            />
          </div>

          <Button type="submit" className="w-full bg-[#664343] hover:bg-[#795757] text-white">
            Submit Application
          </Button>
        </form>
      </div>
    </div>
  );
}
