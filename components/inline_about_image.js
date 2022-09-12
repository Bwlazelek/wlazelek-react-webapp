const InlineAboutImage = () => {
    return (
        <>
            <div className='max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
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
        </>

    )

}

export default InlineAboutImage