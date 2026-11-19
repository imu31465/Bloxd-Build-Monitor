export const id = 293;
export const ids = [293];
export const modules = {
  40600: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      installImageBitmapTextureLoader: () => wD
    });
    var ID = cD(39023),
      pD = cD(40606),
      iD = cD(3007);

    function fD(DD, CD) {
      if ("string" === typeof DD) {
        const cD = (0, iD.e)(DD);
        return cD ? new Blob([(0, iD.b)(cD.base64)], {
          type: cD.mimeType || CD
        }) : null
      }
      return DD instanceof Blob ? DD : new Blob([DD], {
        type: CD
      })
    }
    const bD = function(DD, CD, cD, ID) {
      let iD, bD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        QD = arguments.length > 5 ? arguments[5] : void 0,
        wD = arguments.length > 6 ? arguments[6] : void 0;
      try {
        iD = fD(DD, bD)
      } catch {
        iD = null
      }
      return iD ? (createImageBitmap(iD, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...QD
      }).then((DD => {
        CD(DD)
      }), (() => {
        (0, pD.d)(DD, CD, cD, ID, bD, QD, wD)
      })), null) : (0, pD.d)(DD, CD, cD, ID, bD, QD, wD)
    };
    let QD = "idle";

    function wD() {
      "idle" === QD && "function" === typeof createImageBitmap && (QD = "pending", async function() {
        const DD = document.createElement("canvas");
        DD.width = 1, DD.height = 2;
        const CD = DD.getContext("2d");
        if (!CD) throw new Error("2d context unavailable");
        CD.fillStyle = "#f00", CD.fillRect(0, 0, 1, 1), CD.fillStyle = "#0f0", CD.fillRect(0, 1, 1, 1);
        const cD = fD(DD.toDataURL(), "");
        if (!cD) throw new Error("toDataURL did not produce a base64 data URL");
        const ID = await createImageBitmap(cD, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        CD.drawImage(ID, 0, 0);
        const pD = CD.getImageData(0, 0, 1, 1).data;
        return pD[1] > pD[0]
      }().catch((() => (QD = "idle", !1))).then((DD => {
        "pending" === QD && (QD = "concluded"), DD && (ID.d.loadImage = bD)
      })))
    }
  },
  40606: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID.i,
      d: () => ID.q
    });
    var ID = cD(39193);
    (0, ID.t)()
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);