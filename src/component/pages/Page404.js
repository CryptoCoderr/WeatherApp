import React from "react";
import image404 from "../Image/image404.jpg";


function Page404() {
  return (
    <>
    <p>
    <img src={image404} alt=" " className=" w-100  image404" style={{height:"90vh"}} />
    <p className="m-b-3" style={{textAlign:"center" , fontSize:"2rem",fontWeight:"600",cursor:"pointer",marginBottom:"3rem"}}> <a href="/">Go Back to Home Page</a></p>
    </p>
    </>
  );
}

export default Page404;
