class Price extends React.Component {
  state = {
    currency: "USD"
  };

  render() {
    let list = "";
    if (this.state.currency === "USD") {
      list = (
        <li className="list-group-item d-flex  align-items-center">
          Bitcoin rate for {this.props.bpi.USD.description} :
          <span className="badge badge-primary">{this.props.bpi.USD.code}</span>
          <span className="rate">{this.props.bpi.USD.rate}</span>
        </li>
      );
    } else if (this.state.currency === "GBP") {
      list = (
        <li className="list-group-item d-flex  align-items-center">
          Bitcoin rate for {this.props.bpi.GBP.description} :
          <span className="badge badge-primary">{this.props.bpi.GBP.code}</span>
          <span className="rate">{this.props.bpi.GBP.rate}</span>
        </li>
      );
    } else if (this.state.currency === "EUR") {
      list = (
        <li className="list-group-item d-flex  align-items-center">
          Bitcoin rate for {this.props.bpi.EUR.description} :
          <span className="badge badge-primary">{this.props.bpi.EUR.code}</span>
          <span className="rate">{this.props.bpi.EUR.rate}</span>
        </li>
      );
    }
    return (
      <div>
        <ul className="list-group myList">{list}</ul>
        <select
          className="form-control mySelect"
          onChange={e => this.setState({ currency: e.target.value })}
        >
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
        <style jsx>
          {`
            .myList,
            .mySelect {
              float: left;
            }
            .mySelect {
              width: 40%;
              margin-left: 20px;
              height: 50px;
            }
            .rate {
              margin-left: 20px;
              display: inline-block;
            }
          `}
        </style>
      </div>
    );
  }
}
export default Price;
