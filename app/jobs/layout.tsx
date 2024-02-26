import SkeletonLoader from "@/components/UI/SkeletonLoader";
import { Suspense } from "react";

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return <Suspense fallback={<SkeletonLoader />}>{children}</Suspense>;
}
