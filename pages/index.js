import Layout from "../Component/Layout";
import fetch from "isomorphic-unfetch";
import Price from "../Component/Price";

class Index extends React.Component {
  static async getInitialProps() {
    // eslint-disable-next-line no-undef
    const res = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    const json = await res.json();
    return {
      price: json.bpi
    };
  }
  render() {
    console.log(this.props.price);
    return (
      <Layout>
        <h1>Welcome to BitPrize</h1>
        <Price bpi={this.props.price} />
      </Layout>
    );
  }
}

export default Index;
