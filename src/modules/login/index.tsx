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
import { ChevronRight } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";

type LoginStep1Values = {
  email: string;
};

const FormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

const Login = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<LoginStep1Values> = async (data) => {
    navigate("/sign-in/factor-one");
  };
  return (
    <>
      <section className="h-[100vh] flex items-center justify-center">
        <Card className="flex flex-col items-center justify-center px-6 py-10">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Sign in to Q-Me</CardTitle>
            <CardDescription>
              Welcome back! Please sign in to continue
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 w-full flex items-center justify-center flex-col">
            <Button variant="outline" className="font-normal text-gray-500">
              <img src="https://img.clerk.com/static/google.svg?width=80" />
              Continue with Google
            </Button>
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
                        <Input
                          type="email"
                          {...field}
                          className="text-xs"
                          placeholder="Enter your email address"
                        />
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
              <span>Don't have an account?</span>
              <a href="/sign-up" className="text-primary hover:underline">
                Sign up
              </a>
            </p>
          </CardFooter>
        </Card>
      </section>
    </>
  );
};

export default Login;
