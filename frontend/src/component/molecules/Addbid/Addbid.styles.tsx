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
  padding: 15px;
  width: 100px;
  text-decoration: none;
  font-size: 20px;
  color: white;
  border-radius: 0 5px 5px 0;
}

 a:hover {
  left: 0;
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
#h1
{
    font-size: 30px;
    border: 0;
    font-family:arial;
    color: black;

    text-shadow: -1px 2px 0 white,
                          1px 2px 0 white,
                         1px -2px 0 white,
                        -1px -2px 0 white;
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
  padding: 15px;
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

`;
export const InnerMenuBarLeftDiv= styled.div`
display: flex;
justify-content: space-between;
padding: 5px 10px 10px 10px;
color: black;
`;
