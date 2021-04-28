import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/footer";
import GridProduct from "../components/GridProduct";
import SetHead from "../components/head";
import Head from "next/head";

const PRODUCT_LISTS = [
  {
    product_id: 1,
    product_name: "Heavy Shoes VC8776",
    product_img:
      "https://f.btwcdn.com/store-46391/product/9249c4ca-f2f0-94f3-5366-5e8fe0758048.jpg",
    product_price: 46,
  },
  {
    product_id: 2,
    product_name: "Brown Stone Penny Leather Loafer",
    product_img: "https://cdn1.productnation.co/stg/sites/6/6018c10a2644a.jpeg",
    product_price: 48,
  },
  {
    product_id: 3,
    product_name: "Dapper Plain Moccasin Loafers",
    product_img:
      "https://cf.shopee.co.th/file/68dfd500373589bb0fa70febd838db16",
    product_price: 88,
  },
  {
    product_id: 4,

    product_name: "ECCO Vitrus II Black Santiago Men Shoes",
    product_img:
      "https://cf.shopee.co.th/file/b0a52c3283ea322cb0d7d06d0bccd437",
    product_price: 95,
  },
  {
    product_id: 5,

    product_name: "Baoji BK3015",
    product_img: "https://cdn1.productnation.co/stg/sites/6/6018d0737fc14.jpeg",
    product_price: 57,
  },
  {
    product_id: 6,

    product_name: "Givenchy Black Croc GV3 Bifold Wallet",
    product_img:
      "https://image.goxip.com/IYHmUM1x5SIiEvwQTDx4-CCKxHs=/fit-in/400x400/filters:fill(white):format(jpeg):quality(80)/https:%2F%2Fres.cloudinary.com%2Fssenseweb%2Fimage%2Fupload%2Fb_white%252Cc_lpad%252Cg_center%252Ch_960%252Cw_960%2Fc_scale%252Ch_680%2Ff_auto%252Cdpr_1.0%2Fv572%2F201278F040150_1.jpg",
    product_price: 265,
  },
  {
    product_id: 7,

    product_name: "Saint Laurent Black Small Compact Monogramme Wallet",
    product_img:
      "https://image.goxip.com/DSjSTZJplfOuU6Q4iR-9HqBVspQ=/fit-in/400x400/filters:fill(white):format(jpeg):quality(80)/https:%2F%2Fres.cloudinary.com%2Fssenseweb%2Fimage%2Fupload%2Fb_white%252Cc_lpad%252Cg_center%252Ch_960%252Cw_960%2Fc_scale%252Ch_680%2Ff_auto%252Cdpr_1.0%2Fv572%2F201418F040239_1.jpg",
    product_price: 214,
  },
  {
    product_id: 8,

    product_name: "Gucci Pink Small GG Marmont Trifold Wallet",
    product_img:
      "https://image.goxip.com/QCk6Mat6FbyVgEw2MpppUHe5RSk=/fit-in/400x400/filters:fill(white):format(jpeg):quality(80)/https:%2F%2Fres.cloudinary.com%2Fssenseweb%2Fimage%2Fupload%2Fb_white%252Cc_lpad%252Cg_center%252Ch_960%252Cw_960%2Fc_scale%252Ch_680%2Ff_auto%252Cdpr_1.0%2Fv572%2F181451F040002_1.jpg",
    product_price: 181,
  },
  {
    product_id: 9,

    product_name: "Alexander McQueen Black Croc Skull Bifold Wallet",
    product_img:
      "https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/v572/202259F037169_1.jpg",
    product_price: 162,
  },
  {
    product_id: 10,
    product_name: "Valentino Blue Valentino Garavani Small Rockstud Wallet",
    product_img:
      "https://clothbase.s3.amazonaws.com/uploads/8a24756a-2e2b-4f48-8ab1-ddf487084050/201476F040285_1.jpg",
    product_price: 140,
  },
];

export default function Home(props) {
  const { data } = props;
  return (
    <>
      <SetHead />
      <Breadcrumbs to="Product" />
      <GridProduct data={data} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: PRODUCT_LISTS,
    },
  };
}
