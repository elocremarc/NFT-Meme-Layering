const sharp = require("sharp");

let EndingImage = 8887;
let StartingImage = 0;

for (let nftID = StartingImage; nftID <= EndingImage; nftID++) {
  sharp(`./Input/${nftID}.png`)
    .composite([{ input: "MemeLayer.png", gravity: "southeast" }])
    .toFile(`./Output/${nftID}.png`);
}
