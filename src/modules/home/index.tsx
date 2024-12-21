import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { studentFeatures, teacherFeatures } from "@/utils/features";
import { useState } from "react";

const Home = () => {
  const [featureType, setFeatureType] = useState<"teacher" | "student">(
    "teacher"
  );
  return (
    <>
      <section className="relative flex items-center flex-col justify-center text-center space-y-7 h-[80vh] px-3">
        <h1 className="text-5xl font-bold z-10">
          Q-Me: Simplifying Exams, Empowering Learning
        </h1>
        <h4 className="text-base font-semibold opacity-50">
          Create, Share, and Ace Exams Seamlessly—Where Questions Meet
          Achievement.
        </h4>
        <div className="flex space-x-2  z-10">
          <Button className="!rounded-sm" variant="default">
            Get Started
          </Button>
          <Button variant="outline">Request a demo</Button>
        </div>
      </section>
      <section className="flex items-center flex-col justify-center text-center space-y-5">
        <h2 className="text-3xl font-medium">Features</h2>
        <Tabs defaultValue="teacher" className="w-[400px] md:w-[700px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              value="teacher"
              onClick={() => setFeatureType("teacher")}
            >
              Teacher
            </TabsTrigger>
            <TabsTrigger
              value="student"
              onClick={() => setFeatureType("student")}
            >
              Student
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10">
          {featureType === "student" ? (
            <>
              {studentFeatures.map((item, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-col items-start gap-y-1">
                    <CardTitle className="flex flex-col gap-y-2 opacity-80">
                      <span>{item.icon && <item.icon size={24} />}</span>
                      <span className="text-lg">{item.title}</span>
                    </CardTitle>
                    <CardDescription className="text-left">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </>
          ) : (
            <>
              {teacherFeatures.map((item, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-col items-start gap-y-1">
                    <CardTitle className="flex flex-col gap-y-2 opacity-80">
                      <span>{item.icon && <item.icon size={24} />}</span>
                      <span className="text-lg">{item.title}</span>
                    </CardTitle>
                    <CardDescription className="text-left">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
