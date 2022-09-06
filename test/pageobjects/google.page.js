class GooglePage {
  open() {
    return browser.url("http://www.google.com");
  }

  // While not particularly declarative, W0wltc is the ID on google's "reject all" cookies button, IDs don't often change and are unique, so it was selected as it should be somewhat robust
  get rejectCookiesBtn() {
    return $("button#W0wltc");
  }

  get searchBar() {
    return $("input[name=q]");
  }

  get udemyLink() {
    return $("a*=Udemy");
  }
}

export default new GooglePage();
