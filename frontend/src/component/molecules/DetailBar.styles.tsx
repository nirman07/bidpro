import styled from "styled-components";

export const PrimaryMainBar = styled.div``;

export const InnerMainBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 500px;

`;
export const InnerMainBarRight = styled.div`
  img {
    height: 330px;
    width: 650px;
    padding: 10px 20px 10px 60px;
    margin-top:100px;
    margin-right:10px;
 text-shadow:1px 1px 10px white;
 -webkit-filter: drop-shadow(5px 5px 20px white);
  filter: drop-shadow(5px 5px 20px black);
  }

`;
export const InnerMainBarBottom = styled.div`
  position: center;
text-align: center;
 font-family:'Times New Roman', Times, serif;
  font-size:20px;
  color:white;
  padding: 70px;
  background-color:white;
  justify-content: space-between;
  .main
   {
  text-align: left;
  font-size: 30px;
  margin-left: 100px;
  background-color: rgb(0,0,0,0.3); /* Fallback color */
  background-color: rgba(0,0,0, 0.6); /* Black w/opacity/see-through */
box-shadow:1px 1px 10px black ;
}
ul {
  list-style-type: none;
} 

li::before {
  content: "• ";
  color:#07a14d;
}
`;
export const InnerMainBarLeft = styled.div`
  display: flex;
  height :550px;

 padding:100px 100px 0px 0px;
  margin-top:20px;
  margin-left:100px;
  
  
`;

