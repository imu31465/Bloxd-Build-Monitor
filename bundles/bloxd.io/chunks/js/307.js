export const id = 307;
export const ids = [307];
export const modules = {
  41678: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      installImageBitmapTextureLoader: () => kT
    });
    var WT = mT(39957),
      zT = mT(41686),
      MT = mT(3327);

    function gT(TT, UT) {
      if ("string" === typeof TT) {
        const mT = (0, MT.h)(TT);
        return mT ? new Blob([(0, MT.c)(mT.base64)], {
          type: mT.mimeType || UT
        }) : null
      }
      return TT instanceof Blob ? TT : new Blob([TT], {
        type: UT
      })
    }
    const nT = function(TT, UT, mT, WT) {
      let MT, nT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        HT = arguments.length > 5 ? arguments[5] : void 0,
        kT = arguments.length > 6 ? arguments[6] : void 0;
      try {
        MT = gT(TT, nT)
      } catch {
        MT = null
      }
      return MT ? (createImageBitmap(MT, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...HT
      }).then((TT => {
        UT(TT)
      }), (() => {
        (0, zT.g)(TT, UT, mT, WT, nT, HT, kT)
      })), null) : (0, zT.g)(TT, UT, mT, WT, nT, HT, kT)
    };
    let HT = "idle";

    function kT() {
      "idle" === HT && "function" === typeof createImageBitmap && (HT = "pending", async function() {
        const TT = document.createElement("canvas");
        TT.width = 1, TT.height = 2;
        const UT = TT.getContext("2d");
        if (!UT) throw new Error("2d context unavailable");
        UT.fillStyle = "#f00", UT.fillRect(0, 0, 1, 1), UT.fillStyle = "#0f0", UT.fillRect(0, 1, 1, 1);
        const mT = gT(TT.toDataURL(), "");
        if (!mT) throw new Error("toDataURL did not produce a base64 data URL");
        const WT = await createImageBitmap(mT, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        UT.drawImage(WT, 0, 0);
        const zT = UT.getImageData(0, 0, 1, 1).data;
        return zT[1] > zT[0]
      }().catch((() => (HT = "idle", !1))).then((TT => {
        "pending" === HT && (HT = "concluded"), TT && (WT.d.loadImage = nT)
      })))
    }
  },
  41686: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => WT.k,
      g: () => WT.q
    });
    var WT = mT(40151);
    (0, WT.y)()
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);