import Title from "../Title/index";
import Head from "next/head";
import styless from "../../styles/BlockContent2.module.css";
import esle4 from "../../util/constant4";
import { nanoid } from "nanoid";
import Link from "next/link";

const BlockContent2 = () => {
  return (
    <div>
      {/* <Head>
        <script
          async
          defer
          crossorigin="anonymous"
          src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v10.0"
          nonce="L5tyOzeG"
        ></script>
      </Head> */}
      <Title title={"Ket noi"}></Title>
      {/* <div id="fb-root"></div>

      <div
        className="fb-page"
        data-href="https://www.facebook.com/muaduaxiemgiasi/"
        data-tabs="timeline"
        data-width=""
        data-height="70"
        data-small-header="true"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/muaduaxiemgiasi/"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/muaduaxiemgiasi/">ALo Dừa</a>
        </blockquote>
      </div> */}

      <Title title={"MỚI CẬP NHẬT"}></Title>
      <Link href="/da">
        <div style={{ overflow: "hidden" }}>
          <div
            className={styless.update}
            style={{
              background: `url('${esle4[0].url}') top center / cover no-repeat`,
            }}
          >
            <div className={styless.inUpdate}>
              <div className={styless.titleSection2}>{esle4[0].title}</div>
              <div style={{ color: "white" }} className={styless.date}>
                {esle4[0].date}
              </div>
            </div>
          </div>
        </div>
      </Link>

      {esle4.map((item) => {
        return (
          <Link key={nanoid(10)} href="/as">
            <div className={styless.subUpdate}>
              <div className={styless.wrapimage}>
                <img className={styless.image} src={item.url} alt="anh"></img>
              </div>
              <div className={styless.listUpdate}>
                <div className={styless.titleSection2}>{item.title}</div>
                <div className={styless.date}>{item.date}</div>
              </div>
            </div>
          </Link>
        );
      })}

      <Title title={"QUỶ NÚI MIỄN PHÍ THAM QUAN"}></Title>
      <img
        className={styless.monsterMount}
        src="https://dalatwego.com/wp-content/uploads/2021/04/quynuidalat-scaled-1-1310x2048.jpeg"
        alt="asdsad"
      ></img>
    </div>
  );
};

export default BlockContent2;
