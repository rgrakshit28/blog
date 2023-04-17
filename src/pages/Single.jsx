import React from 'react';
import { Link } from 'react-router-dom';
import Edit from '../assets/edit.png';
import Delete from '../assets/delete.png';
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
          alt=""
        />
        <div className="user">
          <img
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, eius.
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, eius
          voluptates? Cumque id hic illo a voluptatibus eligendi amet deserunt
          delectus aspernatur, quidem inventore consequuntur dicta. Totam
          consequuntur rem laborum dicta aspernatur animi eos iste alias quod
          beatae quidem laudantium, corporis aliquam nemo ut cumque corrupti
          repellat ducimus voluptatum cum? Veniam ducimus vero, suscipit cumque
          exercitationem officiis, laudantium mollitia rerum perspiciatis atque
          aperiam tempora ullam inventore explicabo non labore eveniet deleniti
          libero nihil quo assumenda accusantium laboriosam molestiae. Totam
          aliquam ad quam, nemo fugiat minus, placeat deleniti voluptatem dicta
          velit exercitationem assumenda autem distinctio odio molestias qui
          <br />
          <br />
          blanditiis dolorum ea! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Asperiores distinctio, hic sapiente non eligendi
          velit nihil nostrum deserunt veniam facere eum. Inventore at officiis
          nostrum rem illo perspiciatis, deserunt asperiores quis omnis,
          suscipit ducimus dolorem ratione, quaerat mollitia ullam provident
          animi vero dicta! Corrupti magni veniam autem quod placeat porro vero
          deleniti numquam mollitia magnam amet veritatis voluptatum quidem,
          expedita sunt aliquam, beatae ipsam? Fugiat autem impedit
          exercitationem labore necessitatibus neque perspiciatis nihil minima
          dolorum a dolore veniam, eligendi dolores ea nisi repudiandae
          excepturi illum blanditiis numquam delectus repellendus consectetur
          sed porro harum! Id sunt obcaecati, eum, eaque aspernatur error
          blanditiis pariatur tenetur ea saepe iste, mollitia odio aliquam
          asperiores? Omnis molestiae asperiores dicta ea in cupiditate,
          accusantium doloremque fugit quo harum repellat officiis mollitia
          pariatur, vitae laboriosam cum incidunt ipsa excepturi libero
          explicabo ipsam ullam velit nemo. Dolorum, itaque nostrum a laborum
          nam non, obcaecati laudantium aspernatur consequatur corporis amet
          harum aliquam, voluptatum magni eum voluptate quibusdam magnam et
          dolore exercitationem autem aperiam? Repellat repudiandae quidem nobis
          harum reprehenderit consectetur quas, vel debitis dolores! Libero,
          ipsa incidunt necessitatibus nam id, repellat quidem quaerat mollitia
          aperiam quisquam, consequatur hic deserunt ipsum excepturi ullam iusto
          blanditiis corporis iure atque impedit cum quis non dolorem. Officia
          consectetur optio corporis consequuntur maxime eos, aspernatur
          veritatis officiis quidem vero eligendi eveniet quis minus! Debitis
          iste, corporis illum quidem, dolore sunt in tempore facilis obcaecati
          tempora, voluptatibus reprehenderit placeat! Quisquam natus ipsa illum
          aliquam distinctio iste rem, corrupti tempore assumenda odio
          reiciendis officiis, similique alias optio provident facilis vel quam
          ratione? Fugit cum aliquid consequatur atque vero perspiciatis tempora
          autem incidunt enim fugiat, nam consectetur aliquam in deleniti
          necessitatibus, impedit quidem aperiam tempore quaerat veritatis
          beatae debitis itaque delectus! Sapiente iusto rem aliquid.
          Dignissimos, repudiandae deserunt. Facilis architecto nulla cumque
          tempore dolor maiores qui voluptatum repudiandae, distinctio inventore
          accusamus, consectetur vero repellendus numquam molestias modi.
        </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
};

export default Single;
