import { nanoid } from "nanoid";
import LazyLoad from "react-lazyload";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Loading = () => (
  <div className="post loading">
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
      <div style={{ textAlign: "center" }}>
        Ảnh đang về với buôn làng, đợi xíu nhé...
      </div>
    </div>
  </div>
);
const Layzyy = ({ src }) => {
  return (
    <LazyLoad
      key={nanoid(10)}
      height={1000}
      offset={[-100, 100]}
      placeholder={<Loading />}
    >
      <LazyLoadImage
        alt={"this is the alt"}
        placeholder={<Loading />}
        width="100%"
        effect="blur"
        src={src}
      />
    </LazyLoad>
  );
};

export default Layzyy;
