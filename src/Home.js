import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
      <div className="home">
        <div className="home-container">
          <div
            className="home-img">
            <h3>Amazing Product on Amazon.</h3>
            <h5>Shopping Now and Use (Nabin04) Cupon code. </h5>
            <p>Amazon The No:1 ever.</p>
            <img 
              src='https://image.shutterstock.com/image-illustration/3d-new-product-launch-word-260nw-396987022.jpg'
              alt=''
              />
          </div>
          <div className="home-row">
            <Product
              id="1001"
              title="pepci"
              price={300}
              image="https://th.bing.com/th/id/Ra3767540daa023ac8ae8163ea8f990e7?rik=tgLe1z1Z5H9OVg&riu=http%3a%2f%2fwww.picturecorrect.com%2fwp-content%2fuploads%2f2012%2f07%2fproduct-photography.jpg&ehk=kPmmInvAKjjlFMyLSvDiwrnCIJUb10vyYvUghxsRTWo%3d&risl=&pid=ImgRaw"
              rating={4}
            />
            <Product
              id="1002"
              title="colin"
              price={400}
              image="https://th.bing.com/th/id/OIP.XBkjl-gwR9n4-rUC8a935AHaHa?pid=Api&rs=1"
              rating={4}
            />
          </div>
          <div className="home-row">
            <Product
              id="1003"
              title="amagin shooes"
              price={1200}
              image="https://www.slrlounge.com/wp-content/uploads/2016/08/product-photography-raw-image-800x534.jpg"
              rating={5}
            />
            <Product
              id="1004"
              title="cokacola "
              price={200}
              image="https://th.bing.com/th/id/Rf2448e77a2baa8237e92242df24f67ee?rik=O9yoTH8ZNBYfbw&riu=http%3a%2f%2fcentra.ie%2fimage%2fvar%2ffiles%2fproducts%2f2017%2fCoca-Cola-1.75L.png&ehk=3RucLGfoM5yOieJclgUu7PmTQRyRUQLMZimDudtDZZ8%3d&risl=&pid=ImgRaw"
              rating={4}
            />
            <Product
              id="1005"
              title="corona medisinne (vacsine)"
              price={8080}
              image="https://media.istockphoto.com/photos/hemp-oil-medical-marijuana-products-including-cannabis-leaf-cbd-and-picture-id1134024584?k=6&m=1134024584&s=170667a&w=0&h=zgQ_pM1QEZr5NvGFjgHRb6MYI7OEvckNYnYA5aXDagA="
              rating={5}
            />
          </div>
          <div className="home-row">
            <Product
              id="1006"
              title="camera awsome "
              price={9000}
              image="https://th.bing.com/th/id/R0a606f9039dd0dc3587ae9ce7cfea2de?rik=ncnvyq7jRdPiMA&riu=http%3a%2f%2fstatic.techspot.com%2fimages%2fproducts%2f2014%2fcamcorders%2forg%2f2019-05-13-product.jpg&ehk=mlxFuI29ekpjgs2xTDUiy9qNnC3Ou9IsBc1RQNHC8Bk%3d&risl=&pid=ImgRaw"
              rating={5}
            />
          </div>
        </div>
      </div>
    );
};

export default Home;
