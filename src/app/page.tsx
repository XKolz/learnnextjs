import Link from "next/link";

export default function Home(){
  return(
    <>
  <h1>HomePage</h1>
  <Link href='/blog'>Blog</Link>
  <Link href='/products'>Product</Link>
  <Link href='/dashboard'>Dashboard</Link>
  </>
  )
}