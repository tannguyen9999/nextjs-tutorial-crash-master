
import LayoutHomeLeft from '../LayoutHomeLeft'
import LayoutHomeRight from '../LayoutHomeRight';
import BlockContent2 from '../BlockContent2/index'
import BlockContent4 from '../BlockContent4/index'

const Detail =()=>{
    return(
        <div>
			
			<LayoutHomeLeft>
				<BlockContent4></BlockContent4>
			</LayoutHomeLeft>
			<LayoutHomeRight>
				<BlockContent2></BlockContent2>
			</LayoutHomeRight>
		</div>
    )
}

export default Detail