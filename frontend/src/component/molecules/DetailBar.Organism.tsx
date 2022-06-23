import React from "react";
import RegistrationForm from "./Registration/Registration.organism";
import DetailBid from "./DetailBid/DetailBid.organism";
import {
  InnerMainBar,
  InnerMainBarLeft,
  InnerMainBarRight,
  InnerMainBarBottom,
  PrimaryMainBar,
} from "./DetailBar.styles";
import Logo from "./download8.png";
import Logo3 from "./download15.png";
import Logo2 from "./download10.png";
function DetailBar() {
  return (
    <PrimaryMainBar>
      <InnerMainBar style={{backgroundImage: `url(${Logo2})`}} >
        <InnerMainBarRight>
        <img src={Logo} alt={Logo}></img>
        </InnerMainBarRight>
        <InnerMainBarLeft>
      <DetailBid></DetailBid>
        </InnerMainBarLeft>
       
      </InnerMainBar>
      <InnerMainBarBottom style={{backgroundImage: `url(${Logo2})`}}>
        <table  style={{"borderWidth":"1px", 'borderColor':"#07a14d", 'borderStyle':'solid','borderRadius':"5px"}} className="main">
          <td >
            <tr aria-rowspan={2}>Bid On</tr>
            </td><td>
            <tr aria-rowspan={2}><ul><li>Warehouse Products</li><li>Warehouse Closeouts</li></ul></tr>
          </td>
          <td>
            <tr aria-rowspan={2}><ul><li>Overstock Surplus</li><li>Wholesale Stock</li></ul></tr>
          </td>
          <td>
            <tr aria-rowspan={2}><ul><li>Manufacture stock</li><li>Add More</li></ul></tr>
          </td>
        </table>
 </InnerMainBarBottom>
    </PrimaryMainBar>
  );
}

export default DetailBar;
