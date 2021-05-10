import styless from '../../styles/BlockContent.module.css'
import elses from '../../util/constant2'
import Button from '@material-ui/core/Button';
import Title from '../Title/index'
import ReviewCard from '../ReviewCard/index'
import Card from '../SimpleCard/index'
import elses3 from '../../util/constant3'
import Link from 'next/link'

import { nanoid } from 'nanoid'
const BlockContent = ()=>{
    return(<div className={styless.main}>

        {/* <div className={styless.title}>{elses[0].tag}</div> */}

        <Title title={elses[0].tag} ></Title>
        <div className={styless.viLife}> 
        <Link href="/ao">
            
            <div className={styless.item}><img className={styless.image} src={elses[0].url} alt = "anh 1"></img></div>
            </Link>
            <div className={styless.item}>  
            <Link href="/ao">
            <div className={styless.subTitle}>{elses[0].title}</div>

                </Link>
                <div className ={styless.date}>{elses[0].date}</div>
                <div className={styless.content}>{elses[0].content}</div>
                <Link href="/ao">
                <Button variant="contained" color="primary">
                Chi tiết...
      </Button>
                </Link>
                
            </div>

        </div>
        <Link href="/asd">
        <div className={styless.viLife}>
            <div  className={styless.item1}>
                <div className={styless.wrapimage}>
                <img className={styless.image2} src={elses[1].url} alt="anh 2"></img>
                </div>
                <div className={styless.content}>
                <div className={styless.subTitle}>{elses[1].title}</div>
                <div className ={styless.date}>{elses[1].date}</div>
                </div>
            </div>

            <div className={styless.item1}>
            <div className={styless.wrapimage}>
                <img className={styless.image2} src={elses[2].url} alt="anh 2"></img>
                </div>
                <div className={styless.content}>
                <div className={styless.subTitle}>{elses[2].title}</div>
                <div className ={styless.date}>{elses[2].date}</div>
                </div>
            </div>
        </div>
        </Link>
        <Title title={'ĐẶC SẲN ĐÀ LẠT'} ></Title>
        <ReviewCard></ReviewCard>
        <Title title={'ĐIỂM ĂN UỐNG'} ></Title>

        <div style={{display:'flex',flexWrap:'wrap',    justifyContent: 'space-between'
}}>
   
            {
                elses3.map((item,index)=>{
                    return(
                        <Card key={nanoid(10)} sub2={item}></Card>
                    )
                })
            }

            

            
       
        
        </div>
        <Title title={elses[0].tag} ></Title>

        <div style={{display:'flex',flexWrap:'wrap',    justifyContent: 'space-between'
}}>
    {
                elses.map((item,index)=>{
                    return(
                        <Card key={nanoid(10)} sub2={item}></Card>
                    )
                })
            }     
        </div>



    </div>)
}

export default BlockContent