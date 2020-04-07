import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import StyledRideCard from "./style";
import { AccountCircle, Check, Phone, Star } from '@material-ui/icons';


class RideCard extends React.Component {
    static propTypes = {
        userName: PropTypes.string,
        source: PropTypes.string,
        destination: PropTypes.string,
        seats: PropTypes.number,
        rating: PropTypes.number,
        carModel: PropTypes.string,
        currentTime: PropTypes.string,
        className: PropTypes.string,
        active: PropTypes.bool,
        onClick: PropTypes.func
    }

    static defaultProps = {
        userName: "Krishan",
        source: "Koramangala",
        destination: "Whitefield",
        seats: 3,
        rating: 4.5,
        carModel: "Polo",
        currentTime: "6 min",
        active: false
    }

    render() {
        const { userName, source, destination, seats, rating, carModel, currentTime, className, active, onClick } = this.props
        return (
            <StyledRideCard className={classnames(className, active ? "activeCard" : null)} container onClick={onClick}>
                <div className="userImage">
                    {active ? <Check className="userThumnail check " /> :
                        <AccountCircle className="userThumnail" />}
                </div>
                <div className="rideDetails">
                    <div className="heading">
                        <span className="userName">{userName}</span>
                        <span className="time">{currentTime} away</span>
                    </div>
                    <div className="heading">Route: <span className="location">{source} to {destination} </span></div>
                    <div className="heading">
                        <span>Car Model: {carModel}</span>
                        <span className="seats">Seats available: {seats}</span>
                    </div>
                </div>
                <div className="details">
                    {active ? <Phone className="phone" /> :
                        <span className="rating">{rating}  |
                       <Star className="star" />
                        </span>
                    }
                </div>
            </StyledRideCard>);
    }

}

export default RideCard;