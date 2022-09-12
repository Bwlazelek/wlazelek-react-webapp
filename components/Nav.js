const Nav = () => {
    return (
        <nav className='bg-jet'>
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-7'>
                <div className='relative flex items-center justify-between h-16'>
                    <div className='absolute inset-y-0 left-0 flex items-center sm:hidden;'>
                    </div>
                    <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                        <div className='flex-shrink-0 flex items-center'>
                            <div className='grid grid-cols-1'>
                                <div className='font-gothem text-turquoise font-extrabold text-4xl'>Brandon Wlazelek</div>
                                <div className='flex justify-center text-turquoise font-gothem content-center text-xs'>Coder, Cook, Blogger</div>
                            </div>
                        </div>
                        <div className='hidden sm:block sm:ml-6'>
                            <div className='flex space-x-4 pl-32 pt-5'>
                                <a href="/" className='text-turquoise px-3 hover:text-purple-500 py-2 font-gothem rounded-md text-sm font-medium' aria-current="page">Home</a>
                                <a href="#" className='text-turquoise font-gothem hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium'>Projects</a>
                                <a href="#" className='text-turquoise font-gothem hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium'>Recipes</a>
                                <a href="/about" className='text-turquoise font-gothem hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium'>About</a>
                                <a href="#" className='text-turquoise font-gothem hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium'>Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sm:hidden' id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <a href="/" className='text-turquoise font-gothem hover:text-purple-500 block px-3 py-2'>Home</a>
                    <a href="#" className='text-turquoise font-gothem hover:text-purple-500 block px-3 py-2'>Projects</a>
                    <a href="#" className='text-turquoise font-gothem hover:text-purple-500 block px-3 py-2'>Recipes</a>
                    <a href="/about" className='text-turquoise font-gothem hover:text-purple-500 block px-3 py-2'>About</a>
                    <a href="#" className='text-turquoise font-gothem hover:text-purple-500 block px-3 py-2'>Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav