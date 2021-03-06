// 函式元件
import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './compare.css';

import { message } from 'antd';

function Compare(props) {
    const key = 'updatable';
    const { setcompareschange, setcartchange } = props;

    let [compareList,setCompareList] = useState([])
    
    //打開會員的localstorage
    const Memberman = JSON.parse(localStorage.getItem('memberData'))|| []
    // console.log(Memberman)
    let id = Memberman.id;
    // var CompareProductDataInner=[];
    const[selectValue,setSelectValue] = useState([])

    // console.log('selectValue',selectValue)

    //抓取compare的localstorage
    let comparearray = []
    const objcompare = JSON.parse(localStorage.getItem('compare'))|| []
    compareList = [...objcompare]
    // itemPrice
    console.log(compareList)
    let ascList = [...compareList]
    let descList = [...compareList]
    ascList.sort(function(a, b) {
        return a.itemPrice - b.itemPrice;
    });
    descList.sort(function(a, b) {
        return b.itemPrice - a.itemPrice;
    });
    // localStorage.setItem("compare", JSON.stringify(ascList))
    // localStorage.setItem("compare", JSON.stringify(descList))

    const handleSelect =(e)=>{
        if(e === '1'){
        //     ascList = ascList.sort(function(a, b) {
        //         return a.itemPrice - b.itemPrice;
        //     });
        // console.log('asclist', ascList)  
            compareList = ascList
            setCompareList(compareList)
        // localStorage.removeItem("compare")
        localStorage.setItem("compare", JSON.stringify(compareList))
        } else if(e === '2'){
            // descList = descList.sort(function(a, b) {
            //     return b.itemPrice - a.itemPrice;
            // });
            // console.log('desclist', descList)
            compareList = descList
            setCompareList(compareList)
            // localStorage.removeItem("compare")

            localStorage.setItem("compare", JSON.stringify(compareList))

        }

        console.log(e)
        setSelectValue(e)
    }

    //更新購物車localstorage
    const updateCartToLocalStorage = (value) => {
      const currentCart = JSON.parse(localStorage.getItem('cart')) || []
      const newCart = [...currentCart, value]
      localStorage.setItem('cart', JSON.stringify(newCart))
      setcartchange(newCart)
    }  

  return (
    <main>
      <div className="MyCom_container">
        <div className="MyCom_select">
          <div className="MyCom_Crumb">
            <a href="../">首頁</a> / <a href="#">商品比較</a>
          </div>
          <div>
            <select 
            defaultValue = {selectValue}
            onChange={(event)=>{
                handleSelect(event.target.value)
            }}
            >
              <option value="1" >按價格排序-由低到高</option>
              <option value="2" >按價格排序-由高到低</option>
            </select>
          </div>
        </div>
        <div className="MyCom_list">
            <ul className="MyCom_pwa_r_inner">
            {compareList.length>0 ? (
                <>
                <li className="sty-1 comparecard_content_decoration" >
                        <div className="MyCom_card">
                            <div className="MyCom_item">
                            <span style={{height: 47 + 'px'}}></span>
                            <div style={{height: 99 + 'px',lineheight:99+'px'}}></div>
                            <h1 >商品品牌</h1>
                            <h1 >商品名稱</h1>
                            </div>
                        </div>
                        {/* <div className="context-adjust"> */}
                        <h1 >商品價格</h1>
                        <h1 >電池續航力</h1>
                        <h1 >靈敏度</h1>
                        <h1 >連結端子</h1>
                        <h1 >單體驅動</h1>
                        <h1 >重點特色</h1>
                        <h1 >頻率響應</h1>
                        <h1 >商品評等</h1>
                        {/* </div> */}
                    </li>
                {/* )})} */}
                {compareList.map((data,index)=>{
                return(
                    <li className="sty-1  comparecard-decoration" key={index}>
                      <span
                        style={{height: 40 + 'px'}} 
                        className="iconfont icon-error compare-iconfont" 
                        id={data.itemId} 
                        data-id={index}
                        onClick={()=>{        
                          const newList = [...compareList]
                          newList.splice(index, 1);
                          setCompareList(newList)
                          localStorage.setItem("compare", JSON.stringify(newList)); 
                          setcompareschange(newList)
                        }}
                      ></span>
                        <div className="MyCom_card">
                            <div className="MyCom_item  sty-1">
                                <div className="compareImg">
                                  <img src={`/items_img/${data.itemImg}`}/>
                                </div>
                                <div ></div>
                                <h3 >{data.itemBrand}</h3>
                                <h3 >{data.itemName}</h3>
                            </div>
                        </div>
                        <div>
                          <h4 >{data.itemPrice}</h4>
                          <h4 >{data.itemsEndurance}</h4>
                          <h4 >{data.itemsSensitivity}</h4>
                          <h4 >{data.itemsconnect}</h4>
                          <h4 >{data.itemsdrive}</h4>
                          <h4 >{data.itemsfeature}</h4>
                          <h4 >{data.itemsfrequency}</h4>
                          <h4 >{data.itemsstar}</h4>
                        </div>
                        <div className="MyCom_card_button sty-1">
                            <Link 
                              className="MyCom_update MyCom_btn_style"
                              to={`/ProductDetail/${data.itemid}`}
                            >前往細節頁</Link>
                            <button 
                              className="MyCom_del MyCom_btn_style"                          
                              id={data.itemId}
                              onClick={() => {
                                message.success(`商品"${data.itemName}"已加入購物車`)
                                updateCartToLocalStorage({
                                  id:data.itemid,
                                  itemName:data.itemName,
                                  itemBrand:data.itemsbrand,
                                  itemImg:data.itemImg,
                                  itemPrice:data.itemPrice,
                                  amount:1,
                                })
                              }}
                            >加入購物車</button>
                        </div>
                    </li>
                )})}
                </>
            ):(
              <div className="loveError">
                  <p>目前商品比較是空的</p>
                  <button className="MyFav_btn_style2" >
                  <Link  className="button-a" to="/YyProduct">去商店</Link>
                  </button>
                  </div>
            )}
          </ul>
        </div>
      </div>
    </main>
  )
}
export default withRouter(Compare)
