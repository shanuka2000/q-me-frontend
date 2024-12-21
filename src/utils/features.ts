import {
  BookMarked,
  Calendar,
  ChartBar,
  CheckCircle,
  Edit,
  File,
  Lock,
  Mail,
  Shuffle,
  Target,
} from "lucide-react";

export const studentFeatures = [
  {
    id: 0,
    icon: Edit,
    title: "User-Friendly Exam Interface",
    description:
      "An intuitive interface to navigate and complete exams, with features like answer review, bookmarking, and a timer.",
  },
  {
    id: 1,
    icon: ChartBar,
    title: "Progress Tracking",
    description:
      "A dashboard showing upcoming exams, submitted exams, and detailed score history.",
  },
  {
    id: 2,
    icon: Target,
    title: "Practice Mode",
    description:
      "Access to practice quizzes or past exams to prepare for upcoming assessments.",
  },
  {
    id: 3,
    icon: Mail,
    title: "Instant Feedback",
    description:
      "Receive immediate feedback on auto-graded questions, with explanations for the correct answers.",
  },
  {
    id: 5,
    icon: Lock,
    title: "Secure Login and Privacy",
    description:
      "Maintain secure access to exam data with token-based authentication and data encryption.",
  },
];

export const teacherFeatures = [
  {
    id: 0,
    icon: File,
    title: "Exam Creation",
    description:
      "Teachers can create exams by adding questions in various formats (multiple-choice, short answer, true/false, or essays).",
  },
  {
    id: 1,
    icon: BookMarked,
    title: "Question Bank",
    description:
      "Teachers can maintain a reusable library of questions categorized by subject, topic, and difficulty.",
  },
  {
    id: 2,
    icon: Shuffle,
    title: "Randomized Question Papers",
    description:
      "Generate randomized versions of exams to minimize cheating during online assessments.",
  },
  {
    id: 3,
    icon: ChartBar,
    title: "Student Performance Analytics",
    description:
      "View detailed reports and analytics on student performance, including individual and class averages, weakest topics, and trends.",
  },
  {
    id: 4,
    icon: CheckCircle,
    title: "Grading Automation",
    description:
      "Automatically grade objective questions and provide customizable rubrics for manual grading of subjective answers.",
  },
  {
    id: 5,
    icon: Calendar,
    title: "Scheduling and Notifications",
    description:
      "Schedule exams and notify students through email or in-app alerts.",
  },
] as const;
