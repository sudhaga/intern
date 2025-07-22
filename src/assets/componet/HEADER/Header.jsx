
export default function HEADER() {
  return (
    <header>
        <nav className="max-w-[85rem] w-full mx-auto px-4 py-5 flex justify-between">
            <div>
                <h1 className="font-bold text-fuchsia-600 text-2xl">Logo</h1>
            </div>
            <div className="text-start flex gap-8 hidden md:flex">
                <a href='#' className='text-slate-600 hover:text-red-600'>Menu Two</a>
                <a href='#' className='text-slate-600 hover:text-red-600'>Menu Two</a>
                <a href='#' className='text-slate-600 hover:text-red-600'>Menu three</a>
                <a href='#' className='text-slate-600 hover:text-red-600'>Blog</a>
            </div>
        </nav>
    </header>

  )
}