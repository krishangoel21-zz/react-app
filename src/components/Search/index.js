import React, { useState } from "react";
import Prototypes from "prop-types";
import StyledSearch from "./style";
import RideCard from "../RideCard";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import Modal from '@material-ui/core/Modal';
import { requestApiData } from "../../actions";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: `50%`,
        left: `50%`,
        transform: `translate(-50% , -50%)`
    },
}));

const SimpleModal = ({ onClickStateBlank, text }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        onClickStateBlank();
    };

    return (
        <React.Fragment>
            <Button variant="contained" color="primary" className="confirmRide" onClick={handleOpen}>
                Confirm Ride
                 </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.paper}>
                    <h2 id="simple-modal-title">{text}</h2>
                </div>
            </Modal>
        </React.Fragment>
    );
}
SimpleModal.prototypes = {
    onClickStateBlank: Prototypes.func,
    text: Prototypes.string
}


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            loaded: false,
            source: '',
            destination: '',
            filtered: [],
            activeLink: null
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit() {
        const { source: searchString1, destination: searchString2 } = this.state;
        const { data } = this.props
        if (searchString1.length == 0 && searchString2 == 0) {
            alert("Source or destination can't be blank.");
        } else {
            const newItem = data.filter(item => { return item.source.toLowerCase().indexOf(searchString1.toLowerCase()) > -1 && item.destination.toLowerCase().indexOf(searchString2.toLowerCase()) > -1 })
            if (newItem.length > 0) {
                this.setState({
                    filtered: newItem,
                    loaded: true
                });
            }
            else {
                alert("No ride found!");
            }
        }
    }
    componentDidMount() {
        this.props.requestApiData();
    }

    handleClick = id => {
        this.setState({ activeLink: id });
    };

    render() {
        const { loaded, filtered, activeLink, source, destination } = this.state
        return (
            <StyledSearch>
                <div className="searchBar">
                    <Grid container>
                        <Grid item xs={12} sm={12} md={5} lg={5} xl={5} >
                            <TextField value={source} className="textField" name="source" required id="standard-required" label="Source" onChange={e => this.handleChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                            <TextField value={destination} className="textField" name="destination" required id="standard-required" label="Destination" onChange={e => this.handleChange(e)} />

                        </Grid>
                        <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                            <Button className="search" variant="contained" color="primary" onClick={(e) => this.onSubmit(e)}>
                                Search
                 </Button>
                        </Grid>
                    </Grid>
                </div>
                {loaded && <Grid container className="loadedData">
                    {filtered.map((item, index) => {
                        return <RideCard key={index}
                            rating={item.rating}
                            className={"rideCard"}
                            userName={item.userName}
                            source={item.source}
                            destination={item.destination}
                            seats={item.seats}
                            rating={item.rating}
                            carModel={item.carModel}
                            currentTime={item.currentTime}
                            active={item.id === activeLink}
                            onClick={() => this.handleClick(item.id)}
                        />
                    })}
                    {activeLink && <SimpleModal text={"Your ride has been confirmed."}
                        onClickStateBlank={() => this.setState({ filtered: [], activeLink: null, source: "", destination: "" })} />}

                </Grid>}

            </StyledSearch>
        );
    }
}


const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
    bindActionCreators({ requestApiData }, dispatch);

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);


export default compose(withConnect)(Search);
