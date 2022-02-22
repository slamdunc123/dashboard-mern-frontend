import React from 'react'
import Link from 'next/link'

const index = () => {
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
					<Link href='/dataFetchingOptions/testsListCSR'>
						<a>Tests List CSR</a>
					</Link>
					<Link href='/dataFetchingOptions/testsListSSR'>
						<a>Tests List SSR</a>
					</Link>
					<Link href='/dataFetchingOptions/testsListSSG'>
						<a>Tests List SSG</a>
					</Link>
					<Link href='/dataFetchingOptions/testsListISR'>
						<a>Tests List ISR</a>
					</Link>
				</div>
			</header>
  )
}

export default index