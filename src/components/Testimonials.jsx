import React from 'react'
import { avatar_ali, avatar_anisha, avatar_richard } from '../assets'

const Testimonials = () => {
  return (
<section id="testimonials">
    {/* Container to heading and testimonials blocks  */}
    <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* Heading  */}
        <h2 className="text-4xl font-bold text-center">
            Whats different about Manage?
        </h2>
        {/* Testimonials  */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
            {/* Testimonial 1  */}
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                <img src={avatar_anisha} alt="" className='w-16 -mt-14' />
                <h5 className='text-lg font-bold'>Anisha Li</h5>
                <p className="text-sm text-darkGrayishBlue">
                    "Manage has supercharded our team's wrokflow. The ability to maintain visibiltiy on larger milsetones at all times keeps everyone motivated."
                </p>
            </div>


             {/* Testimonial 2  */}
             <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
                <img src={avatar_ali} alt="" className='w-16 -mt-14' />
                <h5 className='text-lg font-bold'>Ali Bravo</h5>
                <p className="text-sm text-darkGrayishBlue">
                    "Manage has supercharded our team's wrokflow. The ability to maintain visibiltiy on larger milsetones at all times keeps everyone motivated."
                </p>
            </div>



             {/* Testimonial 3  */}
             <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex  md:w-1/3">
                <img src={avatar_richard} alt="" className='w-16 -mt-14' />
                <h5 className='text-lg font-bold'>Richard Li</h5>
                <p className="text-sm text-darkGrayishBlue">
                    "Manage has supercharded our team's wrokflow. The ability to maintain visibiltiy on larger milsetones at all times keeps everyone motivated."
                </p>
            </div>
        </div>
        {/* Button  */}
        <div className="my-16">
        <a href="#" className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get Started</a>
        </div>
    </div>
</section>
  )
}

export default Testimonials
