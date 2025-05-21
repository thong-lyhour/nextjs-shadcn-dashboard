export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div >
      <div className="container mx-auto flex flex-col items-center justify-center h-screen relative">

        <div className="flex flex-col items-center text-2xl absolute top-[5%] ">
          <p className="text-center text-gray-400 dark:text-white/60">
            Next Js Report
          </p>
        </div>
        {children}
      </div>


    </div>
  );
}
