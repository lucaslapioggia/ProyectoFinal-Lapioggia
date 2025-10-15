import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import mockProducts from '../mock/products';

export async function fetchProducts() {
  try {
    const snap = await getDocs(collection(db, 'products'));
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch (e) {
    // if firebase not configured, return mock
    return mockProducts;
  }
}

export async function fetchProductById(id) {
  try {
    const d = await getDoc(doc(db, 'products', id));
    if (!d.exists()) throw new Error('Producto no encontrado');
    return { id: d.id, ...d.data() };
  } catch (e) {
    return mockProducts.find(p => p.id === id) || null;
  }
}
