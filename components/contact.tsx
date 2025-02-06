"use client";

import { motion } from "framer-motion";
import { poppins } from "@/app/fonts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
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
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string(),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const { name, email, subject, message } = values;
    console.log(values);

    const mailToLink = `mailto:leomirandadev@gmail.com?subject=${subject}&body=Hello I am ${name}, my Email is ${email}. %0D%0A${message}`;

    window.location.href = mailToLink;
  };

  return (
    <section
      id='contact'
      className='bg-white text-black py-24 px-4 container mx-auto'
    >
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <motion.h2
            className={`${poppins.className} text-4xl md:text-5xl font-bold text-[#f6bd41] mb-8 tracking-tight`}
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

          <div className='flex flex-col gap-4'>
            <div>
              <div className='flex gap-2 mb-1'>
                <Phone />
                <div className='font-bold'>Call us</div>
              </div>

              <div>08027777752</div>
            </div>

            <div>
              <div className='flex gap-2 mb-1'>
                <Mail />
                <div className='font-bold'>Mail us</div>
              </div>

              <div>contact@raverasmines.com</div>
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
                <div>
                  <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder='Oluwafemi Adebayo' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className='flex flex-col gap-1.5'>
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type='email'
                            placeholder='oluwafemiadebayo@gmail.com'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className='flex flex-col gap-1.5'>
                  <FormField
                    control={form.control}
                    name='subject'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder='Subject...' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className='flex flex-col gap-1.5'>
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
                </div>

                <Button className='mt-4 bg-[#f6bd41] text-black hover:bg-[#f6de41] transition-colors animate-fade-up animation-delay-200'>
                  Send message
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
