import React from 'react';
import Link from 'next/link';

const DataFetchingOptions = () => {
	return (
		<header
			style={{
				width: '100%',
				display: 'flex',
				justifyContent: 'flex-end',
			}}
		>
			<div
				style={{
					width: 250,
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<Link href='/data-fetching-options/tests-list-csr'>
					<a>Tests List CSR</a>
				</Link>
				<Link href='/data-fetching-options/tests-list-ssr'>
					<a>Tests List SSR</a>
				</Link>
				<Link href='/data-fetching-options/tests-list-ssg'>
					<a>Tests List SSG</a>
				</Link>
				<Link href='/data-fetching-options/tests-list-isr'>
					<a>Tests List ISR</a>
				</Link>
			</div>
		</header>
	);
};

export default DataFetchingOptions;
