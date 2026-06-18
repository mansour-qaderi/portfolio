"use client";
import { useCallback } from "react";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { LinkedInIcon, WhatsappIcon, XIcon } from "@/icons";
import { AnimatedSection } from "@/shared/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string(),
});

const contactLinks = [
  {
    label: "Email Address",
    value: "mansourqaderi21@gmail.com",
    href: "mailto:mansourqaderi21@gmail.com",
    icon: <Mail className="size-5 text-primary" />,
  },
  {
    label: "Call",
    value: "+93 790 049 201",
    href: "tel:+93790049201",
    icon: <Phone className="size-5 text-primary" />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mansour-qaderi",
    href: "https://www.linkedin.com/in/mansour-qaderi",
    icon: <LinkedInIcon width={20} height={20} />,
  },
  {
    label: "Whatsapp",
    value: "wa.me/93790049201",
    href: "https://wa.me/93790049201",
    icon: <WhatsappIcon />,
  },
  {
    label: "X",
    value: "x.com/mansour_qaderi",
    href: "https://x.com/mansour_qaderi",
    icon: <XIcon width={20} height={20} />,
  },
];

export const Contacts = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "Web Development",
    },
  });

  const onSubmit = useCallback((values: z.infer<typeof formSchema>) => {
    const { firstName, lastName, email, subject, message } = values;
    const mailToLink = `mailto:mansourqaderi21@gmail.com?subject=${subject}&body=Hello I am ${firstName} ${lastName}, my Email is ${email}. %0D%0A${message}`;

    window.location.href = mailToLink;
  }, []);

  return (
    <AnimatedSection id="contacts">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <SectionHeading number="06" label="Contact" title="Connect With Me" />

          <div className="space-y-6">
            {contactLinks.map(({ label, value, href, icon }) => (
              <div key={label}>
                <div className="flex items-center gap-2 mb-1">
                  {icon}
                  <span className="font-mono text-sm text-muted-foreground ml-2">
                    {label}
                  </span>
                </div>
                <Link
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="text-foreground hover:text-primary transition-colors ml-7"
                >
                  {value}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 dark:border-white/10 p-6 md:p-8">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid w-full gap-5"
            >
              <div className="flex flex-col md:flex-row gap-5">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Leopoldo"
                          className="bg-transparent border-white/10 focus-visible:ring-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Miranda"
                          className="bg-transparent border-white/10 focus-visible:ring-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="leomirandadev@gmail.com"
                        className="bg-transparent border-white/10 focus-visible:ring-primary"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-transparent border-white/10 focus:ring-primary">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Web Development">
                          Web Development
                        </SelectItem>
                        <SelectItem value="Mobile Development">
                          Mobile Development
                        </SelectItem>
                        <SelectItem value="Figma Design">
                          Figma Design
                        </SelectItem>
                        <SelectItem value="REST API">REST API</SelectItem>
                        <SelectItem value="FullStack Project">
                          FullStack Project
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={5}
                        placeholder="Your message..."
                        className="resize-none bg-transparent border-white/10 focus-visible:ring-primary"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full sm:w-auto">
                Send message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </AnimatedSection>
  );
};
