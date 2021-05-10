import styless from '../../styles/BlockContent4.module.css'
import FullImage from '../FullImage/index'
import React,{useState,useRef} from 'react'
import constantImg from '../../util/constantimage'
const BlockContent = ()=>{
    const [url,setUrl] = useState({
        url:'',
        open1:false
    })

    const inputEl = useRef(null);
    const handleZoom = (e)=>{
        const urlTemp = e.target.src;
        setUrl({
            url:urlTemp,
            open1:true
        });
    }
    const handleOffZoom = (e)=>{
        setUrl({
            url:'',
            open1:false
        });
    }
    const onChangeNext = ()=>{

	let res = constantImg.findIndex(e => e == url.url);
    let nex = res + 1;
    if( nex == constantImg.length){
        nex = 0;
    }
    setUrl({
        url:constantImg[nex],
        open1:true
    });
}

    const onChangePrev = ()=>{

        let res = constantImg.findIndex(e => e == url.url);
        let prev = res - 1;
        if( prev == -1){
            prev = constantImg.length-1 ;
        }

    setUrl({
        url:constantImg[prev],
        open1:true
    });
    }
    
    return(<div className={styless.main}>
    <div className={styless.tagSection}>Dia diem song ao</div>
    <div className={styless.titleSection}>Tulu Tula Coffee – Không gian sống ảo hòa mình với thiên nhiên Đà Lạt</div>
    <div className={styless.date}>18/04/2021 23:49 </div>
    <div className={styless.structure}>
        <div className={styless.structureAll}>NỘI DUNG BÀI VIẾT</div>
        <a href="#gioi-thieu-tutu-dalat" style={{color:'white',textDecoration:'none'}}>
        <div className={styless.structureItem}> Giới thiệu về Tulu Tula Đà Lạt</div>

        </a>
        <a href="#gia-ve-tutu" style={{color:'white',textDecoration:'none'}}>
        <div className={styless.structureItem}>Giá vé Tulu Tula là bao nhiêu?</div>
        </a>
        <a href="#chi-duong-tutu" style={{color:'white',textDecoration:'none'}}>

        <div className={styless.structureItem}>Chỉ đường đi Tulu Tula Coffee</div>
        </a>
        <a href="#hinh-anh-dep" style={{color:'white',textDecoration:'none'}}>

        <div className={styless.structureItem}>Hình ảnh đẹp từ du khách</div>
        </a>
    </div>

    <div className={styless.item}>
    Tulu Tula là khu tổ hợp coffee, check-in & ăn uống với nhiều concept được đầu tư chỉnh chu. Tulu Tula giúp chúng ta hòa mình với thiên nhiên đầy quyến rũ. Là địa điểm mới ra thu hút được nhiều quan tâm của giới trẻ yêu sống ảo. Hãy cùng DALATWEGO.COM khám phá ngay độ hot của địa điểm này bạn nhé!
    </div>
    <img onClick={(e)=>handleZoom(e)} style={{display:'block',width:'70%',height:'auto',margin:'auto',marginTop:'10px',cursor:'pointer'}} src="https://dalatwego.com/wp-content/uploads/2021/04/140727169_166193891964144_9036509937287539611_n-768x1024.jpeg"></img>

    <div id="gioi-thieu-tutu-dalat" className={styless.titleSection2}>Giới thiệu về Tulu Tula Đà Lạt</div>
    <div className={styless.item}>Chìm đắm trong những không gian quán cà phê xinh đẹp xịn sò như không gian cổ tích thì Đà Lạt không kể hết. Nhưng không gian cổ tích xịn sò với tạo hình từ gỗ, và ngập tràn trong bối cảnh của rừng cây lẫn núi đồi thì không thể bỏ qua Tulu Tula Coffee.</div>
    <img onClick={(e)=>handleZoom(e)} style={{display:'block',width:'70%',height:'auto',margin:'auto',marginTop:'10px',cursor:'pointer'}} src="https://dalatwego.com/wp-content/uploads/2021/04/caphe_tulu_tula_da_lat_21_1608039527-768x1024.jpeg" ></img>
    <div className={styless.item}>Tulu Tula không gian cà phê xanh của miền cổ tích mới toanh mà chúng ta không thể nào bỏ qua. Quán có không gian check-in giữa quả đồi rộng 6000m2 cùng khu vườn cổ tích độc đáo với nhiều góc chụp thật thần thánh.</div>
    <img onClick={(e)=>handleZoom(e)} style={{display:'block',width:'70%',height:'auto',margin:'auto',marginTop:'10px',cursor:'pointer'}} src="https://dalatwego.com/wp-content/uploads/2021/04/caphe_tulu_tula_da_lat_17_1608039526.jpeg" ></img>
   <div className={styless.item}> Tulu Tula không gian cà phê xanh của miền cổ tích mới toanh mà chúng ta không thể nào bỏ qua. Quán có không gian check-in giữa quả đồi rộng 6000m2 cùng khu vườn cổ tích độc đáo với nhiều góc chụp thật thần thánh.</div>
        <div id="gia-ve-tutu" className={styless.titleSection2}>Giá vé Tulu Tula là bao nhiêu?</div>
        <img onClick={(e)=>handleZoom(e)} srcl="https://dalatwego.com/wp-content/uploads/2021/04/A%CC%89nh-chu%CC%A3p-Ma%CC%80n-hi%CC%80nh-2021-04-18-lu%CC%81c-23.43.32-1024x196.png" ></img>
    <i className={styless.note}>Các bạn lưu ý: Giá vé đã bao gồm 1 nước uống. Dịch vụ thuê trang phục chụp ảnh ngoại cảnh không giới hạn thời gian thuê nhé!</i>
    <div id="chi-duong-tutu" className={styless.titleSection2}>Chỉ đường đi Tulu Tula Coffee</div>
    <div className={styless.item}>
    – Vị trí: Quốc lộ 20, xã Xuân Trường Đà Lạt (trên tuyến đường đi đồi chè cầu đất bạn sẽ thấy cây xăng 27. Tulu Tula cách cây xăng 100m)
<br/>– Chỉ đường trên Google Maps: https://g.page/khudulichtulutula?share
<br/>– Hotline hỗ trợ: 0935.260.792
<br/>– Fanpage chính thức: https://www.facebook.com/tulutula.vn/
<br/>– Giờ mở cửa : 6h-18h mỗi ngày.
    </div>
    <div id="hinh-anh-dep" className={styless.titleSection2}>Hình ảnh đẹp từ du khách</div>
    <img onClick={(e)=>handleZoom(e)} style={{display:'block',width:'70%',height:'auto',margin:'auto',marginTop:'10px',cursor:'pointer'}} src="https://dalatwego.com/wp-content/uploads/2021/04/137403310_159664439283756_801613666914531840_n-683x1024.jpeg"></img>
    <img onClick={(e)=>handleZoom(e)} style={{display:'block',width:'70%',height:'auto',margin:'auto',marginTop:'10px',cursor:'pointer'}} src="https://dalatwego.com/wp-content/uploads/2021/04/caphe_tulu_tula_da_lat_42_1608039637-980x1024.jpeg"></img>
    <img onClick={(e)=>handleZoom(e)} style={{display:'block',width:'70%',height:'auto',margin:'auto',marginTop:'10px',cursor:'pointer'}} src="https://dalatwego.com/wp-content/uploads/2021/04/caphe_tulu_tula_da_lat_47_1608039658-768x1024.jpeg"></img>
    <img onClick={(e)=>handleZoom(e)} style={{display:'block',width:'70%',height:'auto',margin:'auto',marginTop:'10px',cursor:'pointer'}} src="https://dalatwego.com/wp-content/uploads/2021/04/171002341_224649616118571_9191061439304924802_n.jpeg"></img>
    <img onClick={(e)=>handleZoom(e)} style={{display:'block',width:'70%',height:'auto',margin:'auto',marginTop:'10px',cursor:'pointer'}} src="https://dalatwego.com/wp-content/uploads/2021/04/161767901_208852911031575_6317242917288202927_n-768x1024.jpeg"></img>
    <img onClick={(e)=>handleZoom(e)} style={{display:'block',width:'70%',height:'auto',margin:'auto',marginTop:'10px',cursor:'pointer'}} src="https://dalatwego.com/wp-content/uploads/2021/04/161992559_208853024364897_7719324806335022110_n-768x1024.jpeg"></img>
    <img onClick={(e)=>handleZoom(e)} style={{display:'block',width:'70%',height:'auto',margin:'auto',marginTop:'10px',cursor:'pointer'}} src="https://dalatwego.com/wp-content/uploads/2021/04/162130210_208853041031562_5249120928639629696_n-768x1024.jpeg"></img>
    <img onClick={(e)=>handleZoom(e)} style={{display:'block',width:'70%',height:'auto',margin:'auto',marginTop:'10px',cursor:'pointer'}} src="https://dalatwego.com/wp-content/uploads/2021/04/137270203_159661765950690_1795272809988790938_n-1024x683.jpeg"></img>
        

    <div ref={inputEl}>
        <FullImage onChangePrev={onChangePrev} onChangeNext={onChangeNext} handleOffZoom={handleOffZoom} open1={url.open1} url={url.url}></FullImage>
    </div>

    </div>)
    
}

export default BlockContent