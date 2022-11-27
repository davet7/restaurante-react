import bcrypt from 'bcryptjs';

const data = {
  users: [
    //admin
    {
      name: 'David',
      email: 'david@gmail.com',
      password: bcrypt.hashSync('mintic04'),
      isAdmin: true,
    },
    //cliente
    {
      name: 'Sergio',
      email: 'sergio@gmail.com',
      password: bcrypt.hashSync('mintic04'),
      isAdmin: false,
    },
    {
      name: 'Lena',
      email: 'Lena@gmail.com',
      password: bcrypt.hashSync('mintic04'),
      isAdmin: false,
    },
    {
      name: 'Julieth',
      email: 'julieth@gmail.com',
      password: bcrypt.hashSync('mintic04'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1', _id are called automaticaly by MongoDB, no need of them now
      nombre: 'Sopa de Mazorca',
      slug: 'sopa-de-mazorca',
      categoria: 'Sopas',
      imagen: '/images/p1.jpg',
      precio: 10000.0,
      marca: 'Sopas de la Abuela',
      rating: 2,
      numReviews: 15,
      descripcion: 'Sopa de mazorca lica muy lica',
      countInStock: 20,
    },
    {
      //_id: '2',
      nombre: 'Churrasco al Ajillo',
      slug: 'churrasco-al-ajillo',
      categoria: 'Carnes',
      imagen: '/images/p2.jpg',
      precio: 25000.0,
      marca: 'Carnes & Carnes',
      rating: 4.9,
      numReviews: 12,
      descripcion: 'Churrasco al ajillo impsum impsum',
      countInStock: 0,
    },
    {
      //_id: '3',
      nombre: 'Jugo de Corozo',
      slug: 'jugo-de-corozo',
      categoria: 'Jugos',
      imagen: '/images/p3.jpg',
      precio: 3100.0,
      marca: 'Francia Mrqz',
      rating: 4.5,
      numReviews: 5,
      descripcion: 'Juguito sabroso',
      countInStock: 20,
    },
    {
      //_id: '4',
      nombre: 'Postre Tres Leches',
      slug: 'postre-de-las-tres-leches',
      categoria: 'Postres',
      imagen: '/images/p4.jpg',
      precio: 8000.0,
      marca: 'Cremas',
      rating: 4.8,
      numReviews: 9,
      descripcion: 'Delicioso postre Colombiano',
      countInStock: 20,
    },
  ],
};

export default data;
