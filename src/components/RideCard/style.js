import Styled from "styled-components";
import Card from '@material-ui/core/Card';

const StyledRideCard = Styled(Card)`
padding: 10px;
.activeCard{
    background: skyblue;
    color: white;
}
.userThumnail{
  width: 1.5em;
  height: 1.5em;
  position:absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% , -50%);
  color: #846d6d
}

.userImage{
   width:40px;
   height:40px;
   margin-right:10px;
   background: #ddd;
   border-radius: 50%;
   position: relative;
   float:left;
}
svg.faPhone {
    width: 2.5em;
    height: 2.5em;
    margin-top: 14px;
    color: #35C759;
    transform: rotate(90deg);
}

 .check {
    color: #35C759;
}

.rideRating{
   width:60px;
}
.time{
    margin-left:15px;
}
.heading{
    font-size: 14px;
    line-height: 20px;
    color: #2A2E36;
}
.location{
    font-size: 14px;
    color: #989CA6;
    line-height: 20px;
}
.seats{
    margin-left:15px;
}
.star{
    margin-left:6px;
    color:#4db5bc;
    width: .5em;
    height: .5em;
    margin-top: 10px;
    font-size: 26px;
}
.rating{
    font-size: 14px;
    line-height: 20px;
    color: #989CA6; 
}
.userName{
    font-size: 20px;
    line-height: 28px;
    color: #2A2E36;
    font-weight: 600;  
}
.rideDetails{
    float:left;
}
.details{
    float: right;
}
.phone{
  font-size: 3.5rem;
  color: #35C759;
}
`;


export default StyledRideCard;