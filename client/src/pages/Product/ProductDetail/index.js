// 函式元件
import React, { Fragment } from 'react'
import { Link ,withRouter, useParams } from 'react-router-dom'

// components
import ProductCrumb from '../ProductCrumb'
import ProductDetailLeft from '../ProductDetail/ProductDetailLeft'
import ProductDetailRight from '../ProductDetail/ProductDetailRight'
import ProductDetailBottom from '../ProductDetail/ProductDetailBottom'

function ProductDetail(props) {
    // console.log(props)
    // const { match } = props;
    let { id } = useParams()
    // let {id} = match.params;
    console.log(id);
  return (
    <Fragment>
      <main>
        <ProductCrumb />
      </main>
      <div className="Yybodyin">
        <ProductDetailLeft />
        <ProductDetailRight />
        <ProductDetailBottom />
      </div>
    </Fragment>
  )
}
export default withRouter(ProductDetail)
