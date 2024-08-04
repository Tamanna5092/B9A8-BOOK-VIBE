import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import img2 from '../assets/Frame.jpg'
import img3 from '../assets/Frame1.jpg'

const ReadBook = () => {
    // const {image, bookName, author, category, rating, tags, yearOfPublishing, publisher, totalPages} = book;
    return (
      <div><h1>Read book</h1></div>
//         <div>
//             <div className="border rounded-2xl my-8">
//   <div className="hero-content justify-start flex-col lg:flex-row gap-6 p-6">
//     <div className='px-12 py-8 rounded-2xl bg-[#1313130D]'>
//     <img
//       src={image}
//       className="w-32 shadow-2xl " />
//     </div>
//     <div>
//       <h1 className="playfair-display text-[#131313] text-2xl font-bold">{bookName}</h1>
//       <p className="text-[#131313CC] font-medium py-6">By: {author}</p>
//       <div className='flex gap-4'>
//         <div>
//         <p className='space-x-3'><span className='text-[#131313] font-bold'>Tags</span>
//         {
//                     tags.map(tag => <span className='text-[#23BE0A] bg-[#23BE0A0D] rounded-[30px] px-4 py-2' key={tag}>#{tag}</span>)
//         }
//         </p>
//         </div>
//         <div className='flex'>
//         <p className='text-[#424242] text-2xl'><CiLocationOn></CiLocationOn></p>
//         <p className='text-[#131313CC]'><span>Year of Publishing: </span>{yearOfPublishing}</p>
//         </div>
//       </div>
//       <div className='flex text-[#13131399] gap-4 my-4'>
//         <div className='flex gap-2'>
//           <img src={img2} alt="" />
//         <p><span>Publisher: </span>{publisher}</p>
//         </div>
//         <div className='flex gap-2'>
//           <img src={img3} alt="" />
//         <p><span>Page</span>{totalPages}</p>
//         </div>
//       </div>
//         <div className='flex gap-3'>
//         <p className='bg-[#328EFF26] text-[#328EFF] px-5 py-3 rounded-[30px]'>Category: {category}</p>
//         <p  className='bg-[#FFAC3326] text-[#FFAC33] px-5 py-3 rounded-[30px]'>Rating: {rating}</p>
//         <p  className='bg-[#23BE0A] text-[#FFFFFF] font-medium px-5 py-3 rounded-[30px]'>View Details</p>
//         </div>
//     </div>
//   </div>
// </div>
//         </div>
    );
};

export default ReadBook;