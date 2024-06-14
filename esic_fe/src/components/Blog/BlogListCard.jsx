import React from 'react'

const BlogListCard = ({
    image_url='',
    date='',
    blog_title='ESIC',
    blog_content='E-summit NITK blogs',
    tags=['']})   =>   {

        let tagElements = [];
        for(let i=0;i<tags.length;i++){
            tagElements[i]=<div className='border-[1px] border-sponsor-50 rounded-xl p-[5px] ml-2'>
                           <p className='text-[10px] md:text-[13px]'>{tags[i]}</p>
                           </div>;
        }

        return (
    <div className='relative w-full p-0 sm:m-0 h-[350px] md:h-[520px] rounded-3xl border-2 border-white bg-gradient-to-br from-blog-50 to-hero-50 flex flex-col'>
        <div className='relative w-full h-1/2 flex items-center justify-center rounded-t-3xl'>
            <img className='absolute w-full h-full object-cover rounded-t-3xl' alt="blog-img" src={image_url}></img>
        </div>
        <div className='border-b-2 border-t-2 border-white'>
            <h2 className='ml-3 text-[17px] md:text-[20px]'>{date}</h2>
        </div>
        <div className='flex flex-col mt-2 mb-3'>
            <div className='text-center text-[17px] md:text-[22px]'><h2>{blog_title}</h2></div>
            <div className='mx-3'>
                <p className='text-[14px] md:text-[17px] text-justify'>{blog_content}</p>
            </div>
        </div>
        <div className='flex mx-2 mb-2'>
            {tagElements}
        </div>
    </div>  
  )
}

export default BlogListCard
