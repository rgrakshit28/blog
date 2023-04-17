import React from 'react';

const Menu = () => {
  const posts = [
    {
      id: 1,
      title:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, quia!',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, vitae laborum. Aliquid quisquam vero provident quod quo repellat mollitia veritatis!',
      img: 'https://images.pexels.com/photos/2913125/pexels-photo-2913125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      title:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, quia!',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, vitae laborum. Aliquid quisquam vero provident quod quo repellat mollitia veritatis!',
      img: 'https://images.pexels.com/photos/2913125/pexels-photo-2913125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet.',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, eos!',
      img: 'https://images.pexels.com/photos/2913125/pexels-photo-2913125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post">
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read More...</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
