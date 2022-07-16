storageArea = chrome.storage.local;
timeElement = document.getElementById("time");
storageArea.get(
  "time",
  (value) => (timeElement.value = value.time == null ? 300 : value.time)
);
timeElement.addEventListener("change", () =>
  storageArea.set({ time: time.value })
);
