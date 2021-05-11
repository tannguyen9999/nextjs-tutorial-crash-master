import dynamic from "next/dynamic";
import SlideHome from "../components/SlideHome/index";
import LayoutHomeLeft from "../components/LayoutHomeLeft";
import LayoutHomeRight from "../components/LayoutHomeRight";
import BlockContent from "../components/BlockContent/index";
import BlockContent2 from "../components/BlockContent2/index";

const Layout = dynamic(import("../components/Layout"), {
  ssr: false,
  loading: () => (
    <div>
      <div className="loader">
        <style>{`
	.loader {
		border: 2px solid #f3f3f3;
		border-radius: 50%;
		border-top: 2px solid blue;
		border-right: 2px solid green;
		border-bottom: 2px solid red;
		margin: 20px auto;
		width: 20px;
		height: 20px;
		-webkit-animation: spin 2s linear infinite;
		animation: spin 2s linear infinite;
	  }
	  
	  @-webkit-keyframes spin {
		0% { -webkit-transform: rotate(0deg); }
		100% { -webkit-transform: rotate(360deg); }
	  }
	  
	  @keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	  }
	`}</style>
      </div>
      <div style={{ textAlign: "center" }}>Đang load trang đợi tí nhé...</div>
    </div>
  ),
});
export default function Home() {
  return (
    <div>
      <SlideHome></SlideHome>

      <LayoutHomeLeft>
        <BlockContent></BlockContent>
      </LayoutHomeLeft>
      <LayoutHomeRight>
        <BlockContent2></BlockContent2>
      </LayoutHomeRight>
    </div>
  );
}
