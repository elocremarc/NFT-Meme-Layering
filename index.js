const sharp = require("sharp");

for (let nftID = 0; nftID <= 0; nftID++) {
  sharp(`./Input/${nftID}.png`)
    .composite([{ input: "MemeLayer.png", gravity: "southeast" }])
    .toFile(`./Output/${nftID}.png`);
}
