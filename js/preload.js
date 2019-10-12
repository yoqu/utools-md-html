const { clipboard } = require("electron");
writeHtml = function(html) {
  clipboard.writeHTML(html);
};

writeText = function(text) {
  clipboard.writeText(text);
};
readText = function(text) {
  return clipboard.readText();
};
