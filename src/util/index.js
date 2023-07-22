import axios from "axios";
//const BASE_URL = "https://bachat-rest.azurewebsites.net";
const GETNAMES = "https://bachat-rest.azurewebsites.net/get-names/";
const GETPRODUCTDETAILS = "https://bachat-rest.azurewebsites.net/get-product/";
const GETPRODUCTDETAILSBYID =
  "https://bachat-rest.azurewebsites.net/prd-detail-db/";
const GETPRODUCTPRICE = "https://bachat-rest.azurewebsites.net/compare-prices/";

export const getProduct = async (category, name) => {
  var data = new FormData();
  data.append("category", category);
  data.append("prd_name", name);

  var config = {
    method: "post",
    url: GETPRODUCTDETAILS,
    headers: {},
    data: data,
  };

  axios(config)
    .then(function (response) {
      /*change*/
      /*console.log(response.data.products[0]);*/
      console.log(response.data.products);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

//getProduct("mobile","OPPO A53s 5G (Ink Black, 128 GB)")

export const getNames = async (val, category, token) => {
  const res = await axios.get(`${GETNAMES}/${category}/${val}`, {
    cancelToken: token,
  });
  //console.log(res.data.prds)
  return res.data.prds;
};
//getNames("moto")

export const getDeviceDetailsById = async (id) => {
  const res = await axios.get(`${GETPRODUCTDETAILSBYID}${id}/`);
  const data = res.data.prd;
  console.log(data);
  return data;
};
//getDeviceDetailsById(120)

export const getProductPrice = async (dataObj) => {
  console.log("started..." + new Date());
  var data = new FormData();
  data.append("prd", JSON.stringify(dataObj));
  //data.append('prd', `{"Model_Name": "9 Power","Model_Number": "M2010J19SI / MZB0850IN","Color": "Electric Green","Clock_Speed": "2 GHz","Processor": "Qualcomm Snapdragon 662","Processor_Core": "Octa Core","Screen_Size": "16.59 cm (6.53 inch)","Front_Camera": "48MP Rear Camera","Rear_Camera": "8MP Front Camera","Weight": "198 g","Warranty": "1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase","Name": "REDMI 9 Power (Electric Green, 64 GB)Â Â (4 GB RAM)","Price": "â‚¹10,499","Url": "https://www.flipkart.com/redmi-9-power-electric-green-64-gb/p/itmca7d78e222ed7?pid=MOBFYZ7AVAXXB2TH&lid=LSTMOBFYZ7AVAXXB2THVSNL0U&marketplace=FLIPKART&q=smartphone&store=tyy%2F4io&srno=s_2_37&otracker=search&otracker1=search&fm=organic&iid=bd8b6986-df3f-4c0f-8a3e-bd63af271773.MOBFYZ7AVAXXB2TH.SEARCH&ppt=None&ppn=None&ssid=6pjjxrfl4w0000001623235838231&qH=1036ba3c4ed2c021","Battery_Size": "6000 mAh","Internal_Memory": "64 GB","Expandable_Memory": "","RAM": "4 GB","Dimension": "162.3 mm x 77.3 mm x 9.6 mm","Brand_Name": "REDMI","OS": "Android Android Q 10","Platform": "flipkart","Product_Type": "mobile","Rating": "4.3","Rating_Num": "57,060","Highlights": "[\'4 GB RAM | 64 GB ROM\', \'16.59 cm (6.53 inch) Full HD+ Display\', \'48MP Rear Camera | 8MP Front Camera\', \'6000 mAh Battery\', \'Qualcomm Snapdragon 662 Processor\']","Images": "[\'https://rukminim1.flixcart.com/image/400/400/kj0bp8w0-0/mobile/p/n/c/9-power-mobhqab5-redmi-original-imafyz7aqsrggzgh.jpeg?q=70\']"   }`)

  var config = {
    method: "post",
    url: GETPRODUCTPRICE,
    headers: {},
    data: data,
  };
  console.log("initiating..." + new Date());
  axios(config)
    .then(function (response) {
      console.log("got something..." + new Date());
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

//getProductPrice( `{"Model_Name": "9 Power","Model_Number": "M2010J19SI / MZB0850IN","Color": "Electric Green","Clock_Speed": "2 GHz","Processor": "Qualcomm Snapdragon 662","Processor_Core": "Octa Core","Screen_Size": "16.59 cm (6.53 inch)","Front_Camera": "48MP Rear Camera","Rear_Camera": "8MP Front Camera","Weight": "198 g","Warranty": "1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase","Name": "REDMI 9 Power (Electric Green, 64 GB)Â Â (4 GB RAM)","Price": "â‚¹10,499","Url": "https://www.flipkart.com/redmi-9-power-electric-green-64-gb/p/itmca7d78e222ed7?pid=MOBFYZ7AVAXXB2TH&lid=LSTMOBFYZ7AVAXXB2THVSNL0U&marketplace=FLIPKART&q=smartphone&store=tyy%2F4io&srno=s_2_37&otracker=search&otracker1=search&fm=organic&iid=bd8b6986-df3f-4c0f-8a3e-bd63af271773.MOBFYZ7AVAXXB2TH.SEARCH&ppt=None&ppn=None&ssid=6pjjxrfl4w0000001623235838231&qH=1036ba3c4ed2c021","Battery_Size": "6000 mAh","Internal_Memory": "64 GB","Expandable_Memory": "","RAM": "4 GB","Dimension": "162.3 mm x 77.3 mm x 9.6 mm","Brand_Name": "REDMI","OS": "Android Android Q 10","Platform": "flipkart","Product_Type": "mobile","Rating": "4.3","Rating_Num": "57,060","Highlights": "[\'4 GB RAM | 64 GB ROM\', \'16.59 cm (6.53 inch) Full HD+ Display\', \'48MP Rear Camera | 8MP Front Camera\', \'6000 mAh Battery\', \'Qualcomm Snapdragon 662 Processor\']","Images": "[\'https://rukminim1.flixcart.com/image/400/400/kj0bp8w0-0/mobile/p/n/c/9-power-mobhqab5-redmi-original-imafyz7aqsrggzgh.jpeg?q=70\']"   }`)

export { GETPRODUCTPRICE };
