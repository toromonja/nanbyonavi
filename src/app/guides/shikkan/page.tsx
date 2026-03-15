import { redirect } from "next/navigation";

// /guides/shikkan は /disease にリダイレクト
export default function ShikkanPage() {
  redirect("/disease");
}
