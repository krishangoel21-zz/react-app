import Styled from "styled-components";
import { clearFix } from "../../index.style"

const StyledSearch = Styled.div`
.searchBar{
  ${clearFix}
    background:#febb02;
    margin: 0 auto;
    padding: 24px;
    margin: 24px auto;
}
@media(max-width:576px){
  .rideCard{
      width:100% !important;
      margin: 0 0 12px 0 !important;
  }  
.heading{
    width: 220px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
}

.loadedData{
    ${clearFix} 
    margin: 24px 0 80px 0;
}
.rideCard{
    float:left
}

.rideCard:nth-of-type(odd) {
 width:calc(50% - 48px);
 margin: 0 12px 24px 0;
}

.rideCard:nth-of-type(even) {
    width:calc(50% - 48px);
    margin: 0 0 24px 12px ;
}
.textField{
    width:86%;
}
.search{
    margin-top: 12px;
}

.confirmRide{
    margin:0 auto;
}
`;


export default StyledSearch;