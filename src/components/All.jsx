import React from 'react'
import Bottom from './ContentNavbar';
import Card from './Card';
const All = ({data}) => {

    return (

    <div className="container-fluid">
        
      <div className="row">
        <img
            style={{width:'100%',boxShadow: "0px -1px 5px rgba(0, 0, 0, 0.5)"}}
             className="responsive-image d-sm-none d-md-block"
             
              src="https://www.guvi.in/blog/wp-content/uploads/2022/10/blog-header-2048x315.png"
              alt=""
            />
        
      <Bottom/>
      
      </div>
      <div className="container ">
      <div className="row">
      {
                    data.map((item,index)=>{
                       
                            return <Card key={index} data={item} />
 
                    })
                }
      </div>
    </div>
    </div>


    )
}

export default All