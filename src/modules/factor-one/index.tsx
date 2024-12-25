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
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight, PenLine } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";

const FormSchema = z.object({
  otp: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

const FactorOne = () => {
  const navigate = useNavigate();
  const [anotherMethod, setAnotherMethod] = useState<
    "option1" | "option2" | "option3"
  >("option1");
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      otp: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    navigate("/");
  }

  return (
    <section className="h-[100vh] flex items-center justify-center">
      {anotherMethod === "option1" && (
        <>
          <Card className="flex flex-col items-center justify-center px-6 py-10">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Check your email</CardTitle>
              <CardDescription className="flex flex-col text-center">
                <span>to continue to Q-Me</span>
                <span className="flex items-center justify-center gap-x-1">
                  example@mail.com
                  <a href="/sign-in">
                    <PenLine size={13} className="text-primary" />
                  </a>
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="w-full space-y-10 flex flex-col items-center justify-center"
                >
                  <div className="flex flex-col items-center justify-center">
                    <FormField
                      control={form.control}
                      name="otp"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <InputOTP
                              maxLength={6}
                              {...field}
                              className="text-xs"
                            >
                              <InputOTPGroup>
                                <InputOTPSlot index={0} />
                              </InputOTPGroup>
                              <InputOTPGroup>
                                <InputOTPSlot index={1} />
                              </InputOTPGroup>
                              <InputOTPGroup>
                                <InputOTPSlot index={2} />
                              </InputOTPGroup>
                              <InputOTPGroup>
                                <InputOTPSlot index={3} />
                              </InputOTPGroup>
                              <InputOTPGroup>
                                <InputOTPSlot index={4} />
                              </InputOTPGroup>
                              <InputOTPGroup>
                                <InputOTPSlot index={5} />
                              </InputOTPGroup>
                            </InputOTP>
                          </FormControl>
                          <FormMessage className="text-xs font-normal" />
                        </FormItem>
                      )}
                    />
                    <Button
                      variant="link"
                      className="text-xs font-normal text-center"
                    >
                      Didn't receive a code? Resend
                    </Button>
                  </div>
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
            <CardFooter className="border-t">
              <Button
                variant="link"
                className="text-xs font-normal"
                onClick={() => {
                  setAnotherMethod("option2");
                }}
              >
                Use another method
              </Button>
            </CardFooter>
          </Card>
        </>
      )}
      {anotherMethod === "option2" && (
        <>
          <Card className="flex flex-col items-center justify-center px-6 py-10">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Use another method</CardTitle>
              <CardDescription className="flex flex-col text-center">
                Facing issues? You can use any of these methods to <br /> sign
                in.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center space-y-2">
              <Button variant="outline" className="font-normal text-gray-500">
                <img src="https://img.clerk.com/static/google.svg?width=80" />
                Continue with Google
              </Button>
              <a
                href="/sign-in/factor-one"
                className="text-xs font-normal text-primary hover:underline"
              >
                Back
              </a>
            </CardContent>
            <CardFooter className="border-t text-xs space-x-1">
              <span>Don’t have any of these?</span>
              <Button
                onClick={() => setAnotherMethod("option3")}
                variant="link"
                className="font-normal text-xs !px-0"
              >
                Get help
              </Button>
            </CardFooter>
          </Card>
        </>
      )}
      {anotherMethod === "option3" && (
        <>
          <Card className="flex flex-col items-center justify-center px-6 py-10">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Get help</CardTitle>
              <CardDescription className="flex flex-col text-center font-normal">
                If you have trouble signing into your account, email us <br />{" "}
                and we will work with you to restore access as soon as <br />{" "}
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center space-y-2">
              <a href="mailto:shanuka.se@gmail.com">
                <Button variant="default" className="font-normal">
                  Email support <ChevronRight />
                </Button>
              </a>
              <a
                href="/sign-in/factor-one"
                className="text-xs font-normal text-primary hover:underline"
              >
                Back
              </a>
            </CardContent>
          </Card>
        </>
      )}
    </section>
  );
};

export default FactorOne;
