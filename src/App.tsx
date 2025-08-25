import BoardReportsTemplate from "@/components/BoardReports";

export default function App() {
  return (
    <main className="min-h-screen">
      <BoardReportsTemplate branding={{ orgName: "HOA Space" }} />
    </main>
  );
}
