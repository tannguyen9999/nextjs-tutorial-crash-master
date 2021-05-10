import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from 'next/link'
import navVal from '../../util/navContants'
import urlConstant from '../../util/urlConstant'
function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}



export default function ActiveLastBreadcrumb({val,handleChangeBreaCum}) {
  function handleOnClick2(){
    handleChangeBreaCum(0)
  } 
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/">
      <span style={{cursor:'pointer'}} onClick={handleOnClick2}>Trang chủ</span>
      </Link>
      <Link
        color="textPrimary"
        href={`/${urlConstant[val]}`}
        onClick={handleClick}
        aria-current="page"
      >
        {navVal[val]}
      </Link>
    </Breadcrumbs>
  );
}