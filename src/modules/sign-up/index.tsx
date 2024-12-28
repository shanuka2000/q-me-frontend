import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import GoogleButton from "@/shared/components/google-button";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";

type SignUpValues = {
  email: string;
  password: string;
};

const FormSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must have at least one uppercase letter")
    .regex(/[a-z]/, "Password must have at least one lowercase letter")
    .regex(/[0-9]/, "Password must have at least one digit")
    .regex(/[@$!%*?&]/, "Password must have at least one special character"),
});

const SignUp = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<SignUpValues> = async (data) => {
    navigate("/sign-up/factor-one");
  };

  return (
    <>
      <section className="h-[100vh] flex items-center justify-center">
        <Card className="flex flex-col items-center justify-center px-6 py-10">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Create your account</CardTitle>
            <CardDescription>
              Welcome! Please fill in the details to get started.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 w-full flex items-center justify-center flex-col">
            <GoogleButton />
            <div className="flex items-center text-sm opacity-40 gap-x-7 w-full justify-between">
              <Separator className="flex-1 bg-black/50" />
              <span>or</span>
              <Separator className="flex-1 bg-black/50" />
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-10"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} className="text-xs" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} className="text-xs" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  size="sm"
                  className="w-full"
                  disabled={false}
                >
                  Continue
                  <ChevronRight />
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <p className="flex items-center space-x-1 text-xs">
              <span className="text-gray-500">Already have an account?</span>
              <a href="/sign-in" className="text-primary hover:underline">
                Sign in
              </a>
            </p>
          </CardFooter>
        </Card>
      </section>
    </>
  );
};

export default SignUp;
