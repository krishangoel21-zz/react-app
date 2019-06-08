import Navbar from "../Component/Navbar";
import Head from "next/head";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Next js | Krishan Goel </title>
          <link
            rel="stylesheet"
            href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
          />
        </Head>
        <Navbar />
        <div className="container">{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
