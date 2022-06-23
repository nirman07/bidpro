import styled from "styled-components";

export const PrimaryMainBar = styled.div``;

export const InnerMainBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #67a4dd;
`;
export const InnerMainBarBottom = styled.div`
  position: center;
text-align: center;
 font-family:'Times New Roman', Times, serif;
 text-shadow:1px 1px 10px black;
  font-size:20px;
  color:white;
  padding: 30px;
  background-color:white;
  justify-content: space-between;
  
  
`;

export const InnerMainBarRight = styled.div`

`;
export const InnerMainBarRightTop = styled.div`

  img {
    height: 200px;
    width: 280px;
    padding: 0px 20px 0px 115px;
    margin-left:190px;
    position: relative;
    -webkit-filter: drop-shadow(1px 1px 1px black);
  filter: drop-shadow(1px 1px 5px black);
  }
  `;
 
  export const InnerMainBarRightBottom = styled.div`
    
  img {
    height: 480px;
    width: 300px;
    padding: 0px 20px 0px 115px;
    -webkit-filter: drop-shadow(5px 5px 15px #222);
  filter: drop-shadow(5px 5px 15px #222);
    
  }
  
`;

export const InnerMainBarLeft = styled.div`
  display: flex;
  height :550px;
 padding:10px;
  margin-top:20px;
  margin-left:30px;
  margin-bottom:50px;
  
`;
