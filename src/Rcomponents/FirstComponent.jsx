import { Box } from "@chakra-ui/react";

export default function FirstComponent({a}){
    // console.log(a)
    const data=["","https://i.ibb.co/Y3JQZnM/first.png","https://i.ibb.co/DtWkgF4/second.png","https://i.ibb.co/xF62KSy/third.png","https://i.ibb.co/nzg6wwD/fourth.png","https://www.masaischool.com/images/new-homepage/outcome/holistic-outcome.png"]
    return (
       
        <Box style={{maxWidth:"100%",overflow:"hidden",position:"realtive",padding:"10px"}}>
           <img src={data[a]} style={{height:"100%", width:"100%", objectFit:"contain"}}/>
        </Box>
    )
}