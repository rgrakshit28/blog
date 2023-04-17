import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More...</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
