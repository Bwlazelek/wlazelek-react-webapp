const about = () => {
    return (
        <>
          <div className='container mx-auto'>
        <div className='py-6 pb-16 justify-start'>
            <div className='grid grid-cols-3 gap-4'>
                <div className="col-span-3 py-8">
                    <h1 className="flex justify-center content-center font-gothem text-4xl font-extrabold">About Me</h1>
                </div>
                <div className='row-span-4 py-20'>
                    <div className='py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
                        <img className='h-20 w-20 flex-no-shrink fill-current rounded-full' src="/wlazelek.png" alt="Brandon Wlazelek"></img>
                        <div className='text-center space-y-2 sm:text-left'>
                            <div className='space-y-0.5'>
                                <p className='text-lg text-black font-semibold'>
                                    Brandon Wlazelek
                                </p>
                                <p className='text-gray-500 font-medium'>
                                    Software Engineer
                                </p>
                            </div>
                            <button className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>Download Resume</button>
                        </div>
                    </div>
                </div>
                <div className='col-span-2'>
                    <h1 className='flex justify-center font-semibold text-2xl font-gothem'>Education</h1>
                </div>
                <div className='col-span-2 font-gothem'>
                    Hi, my name is Brandon Wlazelek. I am a student at Pennsylvania State University studying Computer Engineering. I made this website so that I can show you how much I accomplished throughout high school and now into college. I work really hard at what I do and I am very passionate of the things I create.
                </div>
                <div className='col-span-2'>
                    <h1 className='flex justify-center font-gothem text-2xl font-semibold'>Experience</h1>
                </div>
                <div className='col-span-2 font-gothem'>
                    The programing languages that I’m proficient at are Java, C++, C#, PHP and many more. Other languages I’m still learning are Python and JavaScript. Programming has been a hobby for me since high school, mainly to learn different programming languages and try to create something new. Another hobby of mine that I have experience with is an Arduino Uno and Raspberry Pi (3 and Zero).           </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default about