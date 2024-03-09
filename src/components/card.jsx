import React from 'react';
const Card = ({title,img, content, customClass}) => {
  return (
    <div className={`${customClass} mt-5 lg:mt-0  shadow-md rounded-lg mx-2  p-9`}>
      <img className=' w-1/4 mx-auto' src={img} alt="" />
      <h2 className={"mx-auto  text-center mt-2 text-lg font-bold mb-2"}>{title}</h2>
      <p className="text-base text-center">{content}</p>
    </div>
  );
};

export default Card;