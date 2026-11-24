export const id = 302;
export const ids = [302];
export const modules = {
  41434: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      installImageBitmapTextureLoader: () => gD
    });
    var pD = wD(39800),
      sD = wD(41439),
      KD = wD(3186);

    function rD(DD, zD) {
      if ("string" === typeof DD) {
        const wD = (0, KD.l)(DD);
        return wD ? new Blob([(0, KD.d)(wD.base64)], {
          type: wD.mimeType || zD
        }) : null
      }
      return DD instanceof Blob ? DD : new Blob([DD], {
        type: zD
      })
    }
    const LD = function(DD, zD, wD, pD) {
      let KD, LD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        cD = arguments.length > 5 ? arguments[5] : void 0,
        gD = arguments.length > 6 ? arguments[6] : void 0;
      try {
        KD = rD(DD, LD)
      } catch {
        KD = null
      }
      return KD ? (createImageBitmap(KD, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...cD
      }).then((DD => {
        zD(DD)
      }), (() => {
        (0, sD.c)(DD, zD, wD, pD, LD, cD, gD)
      })), null) : (0, sD.c)(DD, zD, wD, pD, LD, cD, gD)
    };
    let cD = "idle";

    function gD() {
      "idle" === cD && "function" === typeof createImageBitmap && (cD = "pending", async function() {
        const DD = document.createElement("canvas");
        DD.width = 1, DD.height = 2;
        const zD = DD.getContext("2d");
        if (!zD) throw new Error("2d context unavailable");
        zD.fillStyle = "#f00", zD.fillRect(0, 0, 1, 1), zD.fillStyle = "#0f0", zD.fillRect(0, 1, 1, 1);
        const wD = rD(DD.toDataURL(), "");
        if (!wD) throw new Error("toDataURL did not produce a base64 data URL");
        const pD = await createImageBitmap(wD, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        zD.drawImage(pD, 0, 0);
        const sD = zD.getImageData(0, 0, 1, 1).data;
        return sD[1] > sD[0]
      }().catch((() => (cD = "idle", !1))).then((DD => {
        "pending" === cD && (cD = "concluded"), DD && (pD.e.loadImage = LD)
      })))
    }
  },
  41439: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => pD.h,
      c: () => pD.r
    });
    var pD = wD(39960);
    (0, pD.y)()
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);