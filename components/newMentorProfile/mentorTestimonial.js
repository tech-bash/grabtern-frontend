import React from 'react'
import {ImQuotesLeft} from 'react-icons/im'
import styles1 from '../../styles/mentorTestimonial.module.css'
function MentorTestimonial() {
  return (
    <>
    <div className="testimonials tw-min-w-full tw-justify-center tw-flex tw-flex-col tw-mt-6">
    <div className="tw-flex tw-justify-center">
    <h1 className="tw-text-4xl tw-flex tw-items-center tw-px-8 tw-relative tw-top-8  ">Testimonials</h1>
    </div>
    <div className={`${styles1.testimonialdiv2} tw-flex tw-relative tw-justify-center `}>
    <div className={`${styles1.testimonialdiv1} tw-flex tw-flex-row tw-justify-between tw-mt-2   tw-p-7   tw-w-[90%] `}>
    
      <div className={`${styles1.testimonialdiv3}  tw-h-[338px] tw-w-[371px] tw-bg-white tw-flex tw-items-center  tw-rounded-3xl tw-shadow-md tw-shadow-gray-500`}>
      <div className={` tw-flex     tw-h-[290px] tw-w-[350px] tw-justify-center tw-flex-col tw-relative  tw-left-[13px]`}>
        <div className={`${styles1.testimonialdiv4}tw-absolute  tw-text-[20px]`}>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae officia recusandae, quo eveniet ipsum molestiae expedita obcaecati iste aperiam odit.
</div>

<div className={`${styles1.quotes} tw-absolute tw-bottom-9 `} >
<ImQuotesLeft size="30" color="#845EC2"/>
</div>
<div className={`${styles1.username} tw-text-3xl tw-absolute tw-bottom-0 tw-text-[#845EC2]`}>Harry styles</div>
      </div>
     
      </div>
      <div className={`${styles1.testimonialdiv3}  tw-h-[338px] tw-w-[371px] tw-bg-white tw-flex tw-items-center  tw-rounded-3xl tw-shadow-md tw-shadow-gray-500`}>
      <div className={`${styles1.testimonialdiv4} tw-flex     tw-h-[290px] tw-w-[350px] tw-justify-center tw-flex-col tw-relative  tw-left-[13px]`}>
        <div className={`${styles1.testimonialdiv4}tw-absolute tw-top-[16px] tw-text-[20px]`}>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae officia recusandae, quo eveniet ipsum molestiae expedita obcaecati iste aperiam odit.
</div>

<div className={`${styles1.quotes} tw-absolute tw-bottom-9 `} >
<ImQuotesLeft size="30" color="#845EC2"/>
</div>
<div className={`${styles1.username} tw-text-3xl tw-absolute tw-bottom-0 tw-text-[#845EC2]`}>Harry styles</div>
      </div>
     
      </div>
      <div className={`${styles1.testimonialdiv3}  tw-h-[338px] tw-w-[371px] tw-bg-white tw-flex tw-items-center  tw-rounded-3xl tw-shadow-md tw-shadow-gray-500`}>
      <div className={`${styles1.testimonialdiv4} tw-flex     tw-h-[290px] tw-w-[350px] tw-justify-center tw-flex-col tw-relative  tw-left-[13px]`}>
        <div className={`${styles1.testimonialdiv4}tw-absolute tw-top-[16px] tw-text-[20px]`}>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae officia recusandae, quo eveniet ipsum molestiae expedita obcaecati iste aperiam odit.
</div>

<div className={`${styles1.quotes} tw-absolute tw-bottom-9 `} >
<ImQuotesLeft size="30" color="#845EC2"/>
</div>
<div className={`${styles1.username} tw-text-3xl tw-absolute tw-bottom-0 tw-text-[#845EC2]`}>Harry styles</div>
      </div>
     
      </div>
    

      
      
   
    
    
    </div>
    </div>
    </div>
    </>
  )
}

export default MentorTestimonial