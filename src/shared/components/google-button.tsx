import { Button } from "@/components/ui/button";

const GoogleButton = () => {
  return (
    <Button variant="outline" className="font-normal text-gray-500">
      <img src="https://img.clerk.com/static/google.svg?width=80" />
      Continue with Google
    </Button>
  );
};

export default GoogleButton;
