import LayoutHomeLeft from "../LayoutHomeLeft";
import LayoutHomeRight from "../LayoutHomeRight";
import BlockContent2 from "../BlockContent2/index";
import BlockContent3 from "../BlockContent3/index";

const Dacsan = ({ val, sub2 }) => {
  return (
    <div>
      <LayoutHomeLeft>
        <BlockContent3 val={val} sub2={sub2}></BlockContent3>
      </LayoutHomeLeft>
      <LayoutHomeRight>
        <BlockContent2></BlockContent2>
      </LayoutHomeRight>
    </div>
  );
};

export default Dacsan;
