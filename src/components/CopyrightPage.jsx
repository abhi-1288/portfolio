import React from 'react';

const CopyrightPage = ({ className, setCopyright }) => {
  return (
    <div className={`${className}text-xl text-center text-white bg-slate-300 p-2 m-2 rounded-xl`}>
      <h1>Copyright and License</h1>
      <button className='absolute right-0' onClick={() => {setCopyright(false)}}>X</button>
      <p>
        All content and code on this website, including but not limited to text, images, graphics,
        design, and software, are protected by copyright laws and are the property of Abhijeet.
      </p>
      <p>
        You are permitted to use, modify, and share the content and code for personal and
        non-commercial purposes, provided you give appropriate credit to the author and provide a
        link to the original source.
      </p>
      <p>
        You may not use the content and code for commercial purposes without explicit written
        permission from the author. Unauthorized use, reproduction, or distribution of the content
        and code is strictly prohibited.
      </p>
      <p>
        This website may contain third-party content and code, which are subject to their respective
        copyright and license terms. Any such content and code will be clearly indicated.
      </p>
      <p>
        For inquiries regarding the use of content and code from this website, please contact:
        contact@abhijeetportfolio.com
      </p>
      <p>Last Updated: August 7, 2023</p>
    </div>
  );
};

export default CopyrightPage;
