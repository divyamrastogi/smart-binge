import React from "react";

export default class GoogleAds extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.adsbygoogle = (window.adsbygoogle || []).push({
      google_ad_client: "ca-pub-4546010269809354",
      enable_page_level_ads: true
    });
  }

  render() {
    return (
      <React.Fragment>
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
      </React.Fragment>
    );
  }
}
