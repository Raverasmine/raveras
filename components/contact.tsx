"use client";

import { motion } from "framer-motion";
import { poppins } from "@/app/fonts";
import { useState } from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Mail } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// form validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(255),
  email: z.string().email("Invalid email format"),
  subject: z.string().min(2, "Subject must be at least 2 characters").max(255),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.status === 200) {
        toast({
          title: "Message Sent",
          description:
            "We have received your message and will get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error("Something went wrong. Try again!");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to Send Message",
        description:
          error instanceof Error ? error.message : "Something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id='contact'
      className='bg-white text-black py-24 px-4 container mx-auto'
    >
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='mb-16'>
          <motion.h2
            className={`${poppins.className} text-4xl md:text-5xl font-bold text-[#f6bd41] mb-8 tracking-tight text-center md:text-left`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.6 },
              },
            }}
          >
            Contact us
          </motion.h2>

          <div className='flex flex-col md:flex-row gap-8 mt-24 place-items-center'>
            <div className='flex flex-col gap-4 place-items-center md:place-items-start'>
              <div className='flex gap-2 mb-1'>
                <Mail />
                <div className='font-bold'>Mail us</div>
              </div>
              <a
                href='mailto:contact@raverasmines.com'
                className='text-yellow-400 font-bold hover:underline'
              >
                contact@raverasmines.com
              </a>
            </div>
          </div>
        </div>

        <Card className='bg-muted/60 dark:bg-card'>
          <CardHeader className='text-primary text-2xl'> </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='grid w-full gap-4'
              >
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder='Enter your name...' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type='email'
                          placeholder='Enter your email...'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Subject Field */}
                <FormField
                  control={form.control}
                  name='subject'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder='Subject...' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message Field */}
                <FormField
                  control={form.control}
                  name='message'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder='Your message...'
                          className='resize-none'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  disabled={loading}
                  className='mt-4 bg-[#f6bd41] text-black font-bold hover:bg-[#f6de41] transition-colors animate-fade-up animation-delay-200'
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </CardContent>

          <CardFooter></CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
