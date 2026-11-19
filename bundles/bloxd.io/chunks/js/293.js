export const id = 293;
export const ids = [293];
export const modules = {
  40364: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      installImageBitmapTextureLoader: () => FT
    });
    var iT = IT(38635),
      zT = IT(40366),
      kT = IT(2765);

    function WT(TT, oT) {
      if ("string" === typeof TT) {
        const IT = (0, kT.f)(TT);
        return IT ? new Blob([(0, kT.e)(IT.base64)], {
          type: IT.mimeType || oT
        }) : null
      }
      return TT instanceof Blob ? TT : new Blob([TT], {
        type: oT
      })
    }
    const XT = function(TT, oT, IT, iT) {
      let kT, XT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        BT = arguments.length > 5 ? arguments[5] : void 0,
        FT = arguments.length > 6 ? arguments[6] : void 0;
      try {
        kT = WT(TT, XT)
      } catch {
        kT = null
      }
      return kT ? (createImageBitmap(kT, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...BT
      }).then((TT => {
        oT(TT)
      }), (() => {
        (0, zT.h)(TT, oT, IT, iT, XT, BT, FT)
      })), null) : (0, zT.h)(TT, oT, IT, iT, XT, BT, FT)
    };
    let BT = "idle";

    function FT() {
      "idle" === BT && "function" === typeof createImageBitmap && (BT = "pending", async function() {
        const TT = document.createElement("canvas");
        TT.width = 1, TT.height = 2;
        const oT = TT.getContext("2d");
        if (!oT) throw new Error("2d context unavailable");
        oT.fillStyle = "#f00", oT.fillRect(0, 0, 1, 1), oT.fillStyle = "#0f0", oT.fillRect(0, 1, 1, 1);
        const IT = WT(TT.toDataURL(), "");
        if (!IT) throw new Error("toDataURL did not produce a base64 data URL");
        const iT = await createImageBitmap(IT, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        oT.drawImage(iT, 0, 0);
        const zT = oT.getImageData(0, 0, 1, 1).data;
        return zT[1] > zT[0]
      }().catch((() => (BT = "idle", !1))).then((TT => {
        "pending" === BT && (BT = "concluded"), TT && (iT.d.loadImage = XT)
      })))
    }
  },
  40366: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT.i,
      h: () => iT.r
    });
    var iT = IT(38827);
    (0, iT.v)()
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);