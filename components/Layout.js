import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import styles from '../styles/Layout.module.css'
import NavbarMenu from '../components/NavbarMenu'

import Footer from './Footer/index'

const Layout = ({ children,valuee }) => {
	return(
		<div >
			<Container maxWidth="lg" className={styles.layoutContainer}>

<Head>
	<meta name='viewport' content='width=device-width, initial-scale=1.0' />
	<title>My Next App</title>
</Head>

<header>
	<NavbarMenu valuee={valuee}/>
</header>


<main style={{padding:'0px 24px',minHeight:'100vh'}}>{children}</main>

</Container>
<footer>
<Footer></Footer>
</footer>
		</div>
	)

}

export default Layout