import PageContainer from "@/components/layout/page-container";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  //   const { userId } = await auth();
  return (
    <PageContainer>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="mt-4 text-lg">Welcome to your dashboard!</p>
      </div>
    </PageContainer>
  );

  //   if (!userId) {
  //     return redirect('/auth/sign-in');
  //   } else {
  // return redirect('/dashboard/overview');
  //   }
}
