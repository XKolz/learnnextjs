// export const metadata = {
//     title: 'About- Learn Nextjs',
// }
// export default function About(){
//     return <h1>About me</h1>
// }
import { cookies } from "next/headers";

export default function AboutPage() {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);
  return (
    <>
      <h1>About page {new Date().toLocaleTimeString()}</h1>
    </>
  );
}
