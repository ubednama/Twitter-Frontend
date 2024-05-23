import Image from 'next/image'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { BiMessageRounded, BiUpload } from 'react-icons/bi';
import { FaRetweet } from 'react-icons/fa';

const FeedCard: React.FC = () => {
  return (
    <div className="border-b border-gray-600 p-5 gap-3 grid grid-cols-12 hover:bg-zinc-900 transition-all cursor-pointer">
      <div className="col-span-1">
        <Image
          src="https://api.multiavatar.com/kathrin.svg"
          height={50}
          width={50}
          alt="avatar"
        />
      </div>
      <div className="col-span-11">
        <h5>Ubed Khan</h5>
        <p className='text-sm'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel cumque
          expedita provident illo quis modi numquam esse voluptatibus debitis
          magnam sed quod ipsam culpa dolore corporis, nesciunt alias pariatur
          quae est enim quibusdam! Error cupiditate, suscipit illo temporibus,
          pariatur corporis illum voluptatum accusamus fugiat ea nam a, odit
          distinctio repellat veniam molestias animi. Quas sed voluptatibus
          accusamus tenetur consectetur! Eligendi ipsa mollitia maxime earum
          repellat cupiditate perspiciatis error temporibus porro provident
          inventore alias facere, modi quam sequi. Asperiores enim, repellat
          eaque aut ut qui impedit iusto, porro ea at saepe fugit architecto
          dolorum earum animi corrupti. Autem illum libero necessitatibus.
        </p>
        <div className='flex justify-between mt-5 text-lg items-center p-2'>
          <div>
            <BiMessageRounded />
          </div>
          <div>
            <FaRetweet />
          </div>
          <div><AiOutlineHeart /></div>
          <div><BiUpload /></div>
        </div>
      </div>
    </div>
  );
}

export default FeedCard