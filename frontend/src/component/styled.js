import Styled from "styled-components";

const MainContent = Styled.div`
 .main{
  
  background: rgba(77, 116, 255, 0.1);
    box-shadow: 0px 5px 20px rgba(146, 153, 184, 0.01);
    border-radius: 10px; 
    border:1px solid rgba(77, 116, 255, 0.4);
        display: flex;
    
    align-items: center;
    padding:3% 10%;
    
    .formCol{
      
    }
    .ant-form{
    width: 100%;
    }
    .ant-col-offset-8{
    margin-left: 0 !important;
    }
    
    .operator{
    margin-bottom:5%;
     button {
        width: 45px;
        height: 40px;
        font-size:18px;
        margin-right:20px;
    }
    }
   }
 `;

export {MainContent }