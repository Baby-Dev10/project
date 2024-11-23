"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LockKeyhole, Mail, User } from "lucide-react";

const authSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  name: z.string().optional(),
});

export function AuthForm() {
  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = (values: z.infer<typeof authSchema>) => {
    console.log(values);
  };

  return (
    <Tabs defaultValue="signin" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger value="signin">Sign In</TabsTrigger>
        <TabsTrigger value="signup">Sign Up</TabsTrigger>
      </TabsList>

      <TabsContent value="signin">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                {...form.register("email")}
                id="email"
                placeholder="Enter your email"
                className="pl-10"
              />
            </div>
            {form.formState.errors.email && (
              <p className="text-sm text-red-500">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <LockKeyhole className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                {...form.register("password")}
                id="password"
                type="password"
                placeholder="Enter your password"
                className="pl-10"
              />
            </div>
            {form.formState.errors.password && (
              <p className="text-sm text-red-500">
                {form.formState.errors.password.message}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
      </TabsContent>

      <TabsContent value="signup">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                {...form.register("name")}
                id="name"
                placeholder="Enter your full name"
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                {...form.register("email")}
                id="email"
                placeholder="Enter your email"
                className="pl-10"
              />
            </div>
            {form.formState.errors.email && (
              <p className="text-sm text-red-500">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <LockKeyhole className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                {...form.register("password")}
                id="password"
                type="password"
                placeholder="Enter your password"
                className="pl-10"
              />
            </div>
            {form.formState.errors.password && (
              <p className="text-sm text-red-500">
                {form.formState.errors.password.message}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
      </TabsContent>
    </Tabs>
  );
}