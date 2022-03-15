import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Products = () => {
	const [products, setProducts] = useState([]);

	const getProducts = async () => {
		const res = await axios.get('https://dummyjson.com/products');
		setProducts(res.data.products);
		console.log(res.data.products);
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<Box
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				'& > :not(style)': {
					m: 1,
					width: 250,
					height: 300,
				},
			}}
		>
			{products.map((product) => (
				<Paper
					key={product.id}
					style={{ display: 'flex', flexDirection: 'column' }}
				>
					<div>{product.title}</div>
					<Box
						sx={{
                            display: 'flex',
                            height: '100%',
                            // flex: 1,
                            flexDirection: 'column',
							justifyContent: 'center',
                            alignItems: 'center'
						}}
					>
						<img src={product.thumbnail} style={{maxWidth: '50%'}}/>
					</Box>
				</Paper>
			))}
		</Box>
	);
};

export default Products;
