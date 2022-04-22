import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../services/Cards';
import './ProductDetail.css';

function ProductDetail() {
  const [product, setProduct] = useState([]);
  const params = useParams();
  const fetchProduct = async () => {
    const data = await getProduct(params.id);
    setProduct(data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="productdetail">
      <div className="card">
        <div>
          <h2>{product.title}</h2>
        </div>
        <img className="imagecard" src={product.image} alt="" />
        <div>
          <div>
            <h4>
              Precio (USD):
              {product.price}
              {' '}
            </h4>

          </div>
          <ul className="list">
            <li>
              Categoría:
              {product.category}
            </li>
            <li>
              Descripción:
              {product.description}
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default ProductDetail;
