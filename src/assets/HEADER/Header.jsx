import { Link } from "react-router-dom"
export default function HEADER() {
  return (
    <header>
        <nav className="max-w-[85rem] w-full mx-auto px-4 py-5 flex justify-between">
            <div>
                <h1 className="font-bold text-fuchsia-600 text-2xl">Logo</h1>
            </div>
            <div className="text-start flex gap-8 hidden md:flex">
                <Link to={'/'} className='text-slate-600 hover:text-red-600'>Home</Link>
                <Link to={'/About us'} className='text-slate-600 hover:text-red-600'>About us</Link>
                <Link to={'/Blog'} className='text-slate-600 hover:text-red-600'>Blog</Link>
      
            </div>
        </nav>
    </header>

  )
}