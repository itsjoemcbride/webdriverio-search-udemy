class Test {
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

  get dropDown() {
    return $("select[name='sort']");
  }

  // This selector is questionable, but most search sites use h3 tags for their search results. Particularly Google and Udemy, so this is sufficient for the tests we are running here. If this system didn't work for a future use-case, consider using a more relevant selector for that specific situation, or creating separate page files for different websites.
  get topResult() {
    return $("h3");
  }
}

export default new Test();