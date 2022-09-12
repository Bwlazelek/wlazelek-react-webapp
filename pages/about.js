import InlineAboutImage from "../components/inline_about_image"

const about = () => {
    return (
        <>
          <h1 className='flex justify-center content-center font-gothem text-4xl font-extrabold pb-8'>About Me</h1>
            <div className='container mx-auto px-24'>
                <p className='font-gothem pb-10'>
                    Hi, my name is Brandon Wlazelek. I made this website so that I can show you what I have been passionate about. I work really hard at what I do and I am very passionate of the things I create. The programing languages that I’m proficient at are Java, C++, C#, PHP and many more. Other languages I’m still learning are Python and JavaScript. Programming has been a hobby for me since high school, mainly to learn different programming languages and try to create something new. Another hobby of mine that I have experience with is an Arduino Uno and Raspberry Pi (3 and Zero).          
                </p>
            </div>
            <InlineAboutImage/>
        </>
    )
}

export default about