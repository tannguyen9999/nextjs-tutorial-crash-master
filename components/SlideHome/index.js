import styless from "../../styles/SlideHome.module.css";
import React from 'react'
import Link from 'next/link'
import eles from '../../util/constant'

const SlideHome = () => {
  
  const itemOther = () => {
    const res = eles.map((item,index)=>{
        if(index > 0){
            return (
                <Link href="/ao">
                    <div
              className={styless.itemo}
              style={{
                background: `url('${item.url}') top center / cover no-repeat`,
              }}
            >
              <div className={styless.textOver}>
                <div className={styless.tagSection2}>{item.tag}</div>
                <p className={styless.titleSection2}>
                  {item.title}
                </p>
                <div className={styless.date}>{item.date}</div>
              </div>
            </div>
                </Link>
                
            )
        }else{
            return null
        }
    })
    return res
  };

  return (
    
      <div className={styless.sildePicture}>
          <Link href="/ao">
          <div
          className={styless.item1}
          style={{
            background: `url('${eles[0].url}') top center / cover no-repeat`,
          }}
        >
          <div className={styless.textOver}>
            <div className={styless.tagSection1}>{eles[0].tag}</div>
            <p className={styless.titleSection1}>{eles[0].title}</p>
            <div className={styless.date}>{eles[0].date}</div>
          </div>
        </div>
          </Link>
        
        {itemOther()}
      </div>
    
    
  );
};

export default SlideHome;
