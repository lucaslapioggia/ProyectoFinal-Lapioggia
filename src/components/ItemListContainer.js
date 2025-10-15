import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { fetchProducts } from '../services/productsService';
import { useParams } from 'react-router-dom';

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchProducts().then(all => {
      if (id) setProducts(all.filter(p => p.category === id));
      else setProducts(all);
    });
  }, [id]);

  return <ItemList products={products} />;
}
