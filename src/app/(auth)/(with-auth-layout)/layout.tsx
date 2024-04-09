export default function AuthLayout({
    children,
}:{
    children: React.ReactNode;
}){
    return (
        <>
          <h2>Company Logo</h2>
        {children}
      
        </>
    )
}