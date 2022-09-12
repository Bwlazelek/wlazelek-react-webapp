import React, {useEffect, useState} from 'react';

function BackgroundImage() {
  const [images, setImages] = useState('')
  const [isLoading, setIsLoading] = useState([true])
  const [term, setTerm] = useState('7191822')

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_PIXABAY_API_KEY}&id=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits[0].largeImageURL)
      setIsLoading(false)
    })
    .catch(err => console.log(err))
  });

  return (
    <>
      <img className='bg-contain bg-center' src={images} alt="Brandon Wlazelek"></img>  
    </>
  )
}

export default BackgroundImage