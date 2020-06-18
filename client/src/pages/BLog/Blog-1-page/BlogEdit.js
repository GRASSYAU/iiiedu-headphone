// 函式元件
import React, { Fragment, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
  NavLink,
  withRouter,
} from 'react-router-dom'
import '../../../assets/css/YongBlog/Yong-blog-edit.css'

import BlogMainEdit from '../Blog-2-main/Blog-Main-5-Edit'

// components
import MyNavBar from '../../../components/Navbar'
import MyMenu from '../../../components/NavbarMenu'
import MyFooter from '../../../components/Footer'

// 引入Main

// 引入Aside
import BlogAsidePhoto from '../Blog-2-Aside/Blog-Aside-1-Photo'
import BlogAsideCommunity from '../Blog-2-Aside/Blog-Aside-2-Community'

// imgs

// scss
// import './_menu.scss'

function BlogEdit(props) {
  return (
    <>
      <header>
        <MyNavBar />
        <MyMenu />
      </header>
      <div className="blog-edit-spacing"></div>
      <div class="wrap-top">
        <div class="breadcrumbs">
          <h5>首頁 / 部落格 / 編輯文章</h5>
        </div>
      </div>
      <div class="wrap-mid">
        <div class="blog-edit d-flex">
          <div class="blog-edit-main">
            <BlogMainEdit />
          </div>
          <div class="blog-edit-aside">
            <BlogAsidePhoto />
            <BlogAsideCommunity />
          </div>
        </div>
      </div>
      <div className="blog-edit-spacing"></div>
      <MyFooter />
    </>
  )
}
export default withRouter(BlogEdit)