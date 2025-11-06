import type { JSX } from "react"

export default async function HomePage():Promise<JSX.Element>{
    // const cookieStore =await cookies()
    // const token = cookieStore.get('token')?.value
    // if (!token)
    // {
    //     redirect('/login')
    // }
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-white'>
     <h1 className='text-3xl font-bol text-blue-800'>WELCOME HOME</h1> 
    </div>
  )
}


