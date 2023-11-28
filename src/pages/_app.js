import GlobalStyle from "@/theme/GlobalStyle";
import App from "next/app";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        {" "}
        <GlobalStyle /> <Component {...pageProps} />{" "}
      </>
    );
  }
}
