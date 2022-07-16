class TwitterScreensaver {
  constructor(queryList) {
    this.queryList = queryList;
    this.storageArea = chrome.storage.local;
    this.screensaver = false;
    this.storageArea.get("time", (value) => {
      this.time = value.time == null ? 300 : value.time;
      this.onclick();
    });
    document.addEventListener("click", () => this.onclick());
    document.addEventListener("wheel", () => this.onclick());
  }
  onclick() {
    if (this.time == undefined) return;
    if (this.timeoutId != undefined) clearTimeout(this.timeoutId);
    if (this.screensaver) this.visible();
    this.timeoutId = setTimeout(() => this.hide(), this.time * 1000);
  }
  hide() {
    this.queryList.forEach((query) =>
      document
        .querySelectorAll(query)
        .forEach((e) => e.classList.add("twitter-screensaver-hide"))
    );
    console.log(this);
    this.screensaver = true;
  }
  visible() {
    this.queryList.forEach((query) =>
      document
        .querySelectorAll(query)
        .forEach((e) => e.classList.remove("twitter-screensaver-hide"))
    );
    this.screensaver = false;
  }
}

new TwitterScreensaver([
  "section",
  'div[data-testid="primaryColumn"]',
  'div[data-testid="SideNav_AccountSwitcher_Button"]',
  'div[data-testid="UserCell"]',
]);
