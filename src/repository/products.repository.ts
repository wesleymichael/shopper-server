import client from '@/config/database.ts';

async function getAllProducts() {
  try {
    const result = await client.query('SELECT * FROM products');
    return result[0];
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

async function getProductsByCode(code: number) {
  return await client.query(`SELECT * FROM products p WHERE p.code = $1`, [code]);
}

const productsRepository = {
  getAllProducts,
  getProductsByCode,
};

export default productsRepository;
