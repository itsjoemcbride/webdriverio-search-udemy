class GooglePage {
  open() {
    return browser.url("http://www.google.com");
  }

  get rejectCookiesBtn() {
    return $("div=Reject all");
  }

  get searchBar() {
    return $("input[name=q]");
  }

  get udemyLink() {
    return $("a*=Udemy");
  }
}

export default new GooglePage();
