import styled from "styled-components";

export const PrimaryMenuBar = styled.div``;
export const InnerMenuBar = styled.div`
  display: flex;
  justify-content:space-between;
  background-color: white;
  padding-top: 70px;
`;
export const InnerMenuBarRight = styled.div`
a {
  position: absolute;
  left: -120px;
  transition: 0.3s;
  padding: 0px;
  width: 100px;
  text-decoration: none;
  font-size: 20px;
  color: white;
  border-radius: 0 5px 5px 0;
}

 a:hover {
  left: 0;
}
.main{
  padding:5px;
  right: -120px;
}

#about {
  top: 20px;
  background-color: #04AA6D;
}

#Additem {
  top: 80px;
  background-color: #2196F3;
}

#categorie {
  top: 140px;
  background-color: #f44336;
}

#contact {
  top: 200px;
  background-color: #555
}
img{
    height: 128px;
    width: 320px;
    padding:2px 1px 1px 55px ;
}
`;
export const InnerMenuBarLeft= styled.div`
h1
{
    font-size: 30px;
    font-family:arial;
 color:red;
margin-right: 50px;
padding:5px;
    text-shadow:  1px 2px 0 black;
}
      
#box
{
    font-size: 30px;
    border: 0;
   text-align: left;
}
#box1
{
    font-size: 10px;
    border: 0;
}



a {
  position: absolute;
  right: -120px;
  transition: 0.3s;
  padding: 0px;
  width: 100px;
  text-decoration: none;
  font-size: 20px;
  color: white;
  border-radius: 5px 5px 5px 5px;
}

 a:hover {
  right: 0;
}

#about {
  top: 20px;
  background-color: #04AA6D;
}

#editid {
  top: 80px;
  background-color: #2196F3;
}

#logout {
  top: 140px;
  background-color: #f44336;
}

#contact {
  top: 200px;
  background-color: #555
}
ul {
  list-style-type: none;
  font-size: 20px;
  font-family:arial;
  text-transform: uppercase;
  position: relative;
  animation: effect 2s linear infinite;
            
        }
 
        @keyframes effect {
            0% {
                background: linear-gradient(
                        #dce708, #d9dbe4);
                -webkit-background-clip: text;
            }
            
 
            100% {
                background: linear-gradient(
                        #62d211, #beeb0b);
                -webkit-background-clip: text;
            }
        }
`;
export const InnerMenuBarLeftDiv= styled.div`
display: flex;
justify-content: space-between;
padding: 5px ;
color: black;
`;
