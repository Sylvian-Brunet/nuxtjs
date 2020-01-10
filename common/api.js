import axios from 'axios';

export async function asyncGetProducts() {
    try {
        const storedProducts = localStorage.getItem('storedProducts');
        if (storedProducts) {
          console.log('Stored version found');
          return JSON.parse(storedProducts);
        }
        const response = await axios.get('http://localhost:3001');
        const { data } = response;

        localStorage.setItem('storedProducts', JSON.stringify(data));
        return data;
    } catch (err) {
        console.error('o no');
        return [];
    }
}
