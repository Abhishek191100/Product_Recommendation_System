import React,{useState, useEffect} from 'react'
import "./newarrival.css"
import SearchIcon from "@material-ui/icons/Search";
import iphone from '../components/img/iphone.png'
import defaultimg from '../components/img/icons/defaultimg.png'
import StarIcon from '@material-ui/icons/Star';
import { getDeviceDetailsById, getProductPrice } from "../util";
import axios from "axios";
import SearchNewArrival from '../components/SearchNewArrival';

const GETPRODUCTDETAILS = "https://bachat-rest.azurewebsites.net/get-product/";

export default function NewArrival() {
    const [data,setData] = useState([]);

    const [noData,setNoData] = useState(false);
    
    const category = window.sessionStorage.getItem("bachat_category");
    const prd_name = window.sessionStorage.getItem("prd_name");

    const truncate=(str, n)=> {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    const getProduct = async () => {
        var data = new FormData();
        data.append("category", category);
        data.append("prd_name", prd_name);
      
        var config = {
          method: "post",
          url: GETPRODUCTDETAILS,
          headers: {},
          data: data,
        };
      
        const x = await axios(config)
          .then(function (response) {
            /*change*/
            /*console.log(response.data.products[0]);*/
            const x=[];
            response.data.products.map(m=>{
                console.log(m)
                x.push(m)
            })
            setData(x)
        })
          .catch(function (error) {
            console.log(error.message);
            if(error) {
                setNoData(true)
            }
        });

    };
    
    useEffect(() => {
        // Run! Like go get some data from an API;
        getProduct();
        console.log("dddddddd "+data)
    }, []);

  

    const redirectToPrdDetails = (Url,Name,productImage) => {
        window.sessionStorage.setItem("Url",Url);
        window.sessionStorage.setItem("byurl",1);
        window.sessionStorage.setItem("bachat_phone_1",Name);
        window.sessionStorage.setItem("productImage",productImage);
        window.sessionStorage.removeItem("bachat_phone_1_id");
        window.sessionStorage.setItem("secondProductScreen", 0);


        window.location = `/search/${category}/product`;
    }

    const returnImageUrl = (coverimage) => {
       // console.log("returnImageUrl"+coverimage)
        
       /// const url =  await coverimage.substring(2, coverimage.length - 2);
        
       //const url =  await coverimage.substring(0,1);
       let url = coverimage;
        if('string' ===(typeof url)) {
           // console.log(typeof url) 
            url =  url.substring(2, url.length - 2);
        }
        //console.log(url)
        //url = 'https://rukminim1.flixcart.com/image/400/400/klgx0280/mobile/z/b/z/narzo-30a-rmx3171-realme-original-imagyhbgzcyfwzfz.jpeg?q=70'
        return url;

    }

    const searchSection = (
        <div className="search-container">
            {/* <input type="text" placeholder="Search New Product" className="input-na" />
            <SearchIcon className="search-na" /> */}
            <SearchNewArrival/>
        </div>
    )
    const productSection = (
    <>
    {noData &&(
        <h1 className="notavailable">This Product is not available, you have enterd wrong product !!</h1>
    )}
    
    {data && data.map((p,i) =>(
    <>    
    <div className="product_container" onClick={() => {redirectToPrdDetails(p.Url,p.Name,p.Image_Url)}}>
        <div className="productimage_na">
        {!p.Image_Url&&!p.Images&&(
            <img src={defaultimg} style={{width:'80%'}} className="dfi"/>
        )}
        {p.Image_Url&&(
            <img src={p.Image_Url}  alt="" className="img" />
        )}
        {p.Images&&(
            <img src={returnImageUrl(p.Images)}  alt="" className="imgFromOurDB" />
        )}
        </div>
        <div className="productdetails_na">
            <p className="pname onlyweb">
                {p.Name}
            </p>
            <p className="pname onlymobile">
                {truncate(p.Name,40)}
            </p>
            <div className="pratings">
                <div className="rating_star">
                    {p.Rating}
                    <StarIcon className="icon_na"/>
                </div>
                {p.rating_num&&(
                    <div className="ratings_na">
                        {p.rating_num} Ratings
                    </div>
                )}
                {p.Rating_Num&&(
                    <div className="ratings_na">
                        {p.Rating_Num} Ratings
                    </div> 
                )}
                

                

            </div> 
        </div>
        <div className="price_na">
            <p>Rs. {p.Price}</p>
            {/* <div className="bar1_na"></div>
            <div className="bar2_na"></div> */}
        </div>
    </div>
    <div className="hrna">
        <div className="hr"></div>
    </div>
    </>
    ))}
    </>
    )

    return (
    <>
        {searchSection}
        <div className="newArrival">
            {productSection}
        </div>
    </>
    )
}
