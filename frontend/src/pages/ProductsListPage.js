import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'
import axios from 'axios';


const ProductsListPage = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        // Kategóriák lekérése az API-ból
        axios.get('/api/categories/')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
    if (selectedCategory) {
      // Termékek szűrése a kiválasztott kategória alapján
      axios.get(`/api/products/?category=${selectedCategory}`)
        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      // Minden termék lekérése, ha nincs kiválasztva kategória
      axios.get('/api/products/')
        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [selectedCategory]);

    const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

    const getProducts = async () => {
        const response = await fetch('/api/products/');
        const data = await response.json();
        setProducts(data);
    };

    return (
        <div>
            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">Összes kategória</option>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
            <div className="products">
                <div className="products-header">
                    <h2 className="products-title">Webáruházunk termékei</h2>

                    <p className="products-count">Összes termék: {products.length} darab</p>
                </div>

                <div className="row">
                    {products.map((product) => (
                        <ListItem key={product.id} product={product}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsListPage;
