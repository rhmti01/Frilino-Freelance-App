import { Button } from '@heroui/button';
import React from 'react'

function HeaderItem({ title, icon , className= "" }) {
  return (
    <li className={` ${className} `} > 
      <Button
        className=" items-center justify-center hover:bg-blue-100
               hover:text-primary-900 dark:text-secondary-300 dark:hover:bg-dark-700
                rounded-xl xl:px-5 xg:px-3 py-2 cursor-pointer xl:gap-x-2 xg:gap-x-1.5 text-secondary-500"
      >
        <span className=" headerMenu_item ">{title}</span>
        {icon}
      </Button>
    </li>
  );
}


export default HeaderItem