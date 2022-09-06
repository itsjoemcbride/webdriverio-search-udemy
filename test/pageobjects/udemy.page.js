class UdemyPage {
  get searchBar() {
    return $("input[name=q]");
  }

  get dropDown() {
    return $("select[name='sort']");
  }

  get topResult() {
    return $("h3");
  }
}

export default new UdemyPage();
