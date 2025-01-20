"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { z } from "zod";

const ContactForm = () => {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const schema = z.object({
    name: z.string().min(1, { message: "Le nom est requis" }),
    email: z.string().email({ message: "Email invalide" }),
    subject: z.string().min(1, { message: "Le sujet est requis" }),
    message: z.string().min(1, { message: "Le message est requis" }),
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: { [key: string]: string } = {};
      result.error.errors.forEach((error) => {
        if (error.path.length > 0) {
          fieldErrors[error.path[0]] = error.message;
        }
      });
      setErrors(fieldErrors);
    } else {
      setErrors({});
      console.log("Form submitted:", formData);
      // Handle form submission logic here
    }
  };

  return (
    <div
      className="w-full max-w-lg mx-auto backdrop-blur-lg bg-black/25 p-8 rounded-lg shadow-lg"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-muted-foreground"
          >
            {t("contact_section.name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-primary_color focus:border-primary_color sm:text-sm"
            required
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-muted-foreground"
          >
            {t("contact_section.email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary_color focus:border-primary_color sm:text-sm"
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-muted-foreground"
          >
            {t("contact_section.subject")}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary_color focus:border-primary_color sm:text-sm"
            required
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-muted-foreground"
          >
            {t("contact_section.message")}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary_color focus:border-primary_color sm:text-sm"
            required
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        <div>
          <Button variant={"default"} type="submit" className="w-full">
            {t("contact_section.send")}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
