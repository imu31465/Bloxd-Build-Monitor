export const id = 294;
export const ids = [294];
export const modules = {
  41139: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      installImageBitmapTextureLoader: () => xT
    });
    var lT = cT(39496),
      MT = cT(41146),
      KT = cT(3146);

    function OT(TT, kT) {
      if ("string" === typeof TT) {
        const cT = (0, KT.f)(TT);
        return cT ? new Blob([(0, KT.d)(cT.base64)], {
          type: cT.mimeType || kT
        }) : null
      }
      return TT instanceof Blob ? TT : new Blob([TT], {
        type: kT
      })
    }
    const yT = function(TT, kT, cT, lT) {
      let KT, yT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        fT = arguments.length > 5 ? arguments[5] : void 0,
        xT = arguments.length > 6 ? arguments[6] : void 0;
      try {
        KT = OT(TT, yT)
      } catch {
        KT = null
      }
      return KT ? (createImageBitmap(KT, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...fT
      }).then((TT => {
        kT(TT)
      }), (() => {
        (0, MT.g)(TT, kT, cT, lT, yT, fT, xT)
      })), null) : (0, MT.g)(TT, kT, cT, lT, yT, fT, xT)
    };
    let fT = "idle";

    function xT() {
      "idle" === fT && "function" === typeof createImageBitmap && (fT = "pending", async function() {
        const TT = document.createElement("canvas");
        TT.width = 1, TT.height = 2;
        const kT = TT.getContext("2d");
        if (!kT) throw new Error("2d context unavailable");
        kT.fillStyle = "#f00", kT.fillRect(0, 0, 1, 1), kT.fillStyle = "#0f0", kT.fillRect(0, 1, 1, 1);
        const cT = OT(TT.toDataURL(), "");
        if (!cT) throw new Error("toDataURL did not produce a base64 data URL");
        const lT = await createImageBitmap(cT, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        kT.drawImage(lT, 0, 0);
        const MT = kT.getImageData(0, 0, 1, 1).data;
        return MT[1] > MT[0]
      }().catch((() => (fT = "idle", !1))).then((TT => {
        "pending" === fT && (fT = "concluded"), TT && (lT.e.loadImage = yT)
      })))
    }
  },
  41146: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT.f,
      g: () => lT.o
    });
    var lT = cT(39666);
    (0, lT.q)()
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);