import styless from '../../styles/BlockContent.module.css'
import elses from '../../util/constant'
import Button from '@material-ui/core/Button';
import Title from '../Title/index'
import ReviewCard from '../ReviewCard/index'
import Card from '../SimpleCard/index'
import { nanoid } from 'nanoid';
const BlockContent = ({sub2})=>{
    return(<div className={styless.main}>

        {/* <div className={styless.title}>{elses[0].tag}</div> */}

        <Title title={elses[0].tag} ></Title>
			<div style={{marginBottom:'24px',color:'#333333',fontSize:'15px'}}>Sẽ thật tuyệt nếu có một hôm nào đó bạn thức dậy cái se se lạnh của Đà Lạt và khởi đầu ngày mới bằng việc thưởng thức 1 ly cà phê với khung cảnh đẹp mơ màng.</div>
        
        <div style={{display:'flex',flexWrap:'wrap',    justifyContent: 'space-between'
}}>
        {
            sub2.map((item)=>{
                return(
                    <Card key ={nanoid(10)} sub2={item} sub={true}></Card>
                )
            })
        }

        </div>

       



    </div>)
}

export default BlockContent