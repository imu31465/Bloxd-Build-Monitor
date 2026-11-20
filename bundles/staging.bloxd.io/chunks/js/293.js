export const id = 293;
export const ids = [293];
export const modules = {
  40921: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      installImageBitmapTextureLoader: () => KU
    });
    var tU = gU(39248),
      pU = gU(40929),
      EU = gU(2902);

    function PU(UU, RU) {
      if ("string" === typeof UU) {
        const gU = (0, EU.f)(UU);
        return gU ? new Blob([(0, EU.e)(gU.base64)], {
          type: gU.mimeType || RU
        }) : null
      }
      return UU instanceof Blob ? UU : new Blob([UU], {
        type: RU
      })
    }
    const TU = function(UU, RU, gU, tU) {
      let EU, TU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        qU = arguments.length > 5 ? arguments[5] : void 0,
        KU = arguments.length > 6 ? arguments[6] : void 0;
      try {
        EU = PU(UU, TU)
      } catch {
        EU = null
      }
      return EU ? (createImageBitmap(EU, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...qU
      }).then((UU => {
        RU(UU)
      }), (() => {
        (0, pU.g)(UU, RU, gU, tU, TU, qU, KU)
      })), null) : (0, pU.g)(UU, RU, gU, tU, TU, qU, KU)
    };
    let qU = "idle";

    function KU() {
      "idle" === qU && "function" === typeof createImageBitmap && (qU = "pending", async function() {
        const UU = document.createElement("canvas");
        UU.width = 1, UU.height = 2;
        const RU = UU.getContext("2d");
        if (!RU) throw new Error("2d context unavailable");
        RU.fillStyle = "#f00", RU.fillRect(0, 0, 1, 1), RU.fillStyle = "#0f0", RU.fillRect(0, 1, 1, 1);
        const gU = PU(UU.toDataURL(), "");
        if (!gU) throw new Error("toDataURL did not produce a base64 data URL");
        const tU = await createImageBitmap(gU, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        RU.drawImage(tU, 0, 0);
        const pU = RU.getImageData(0, 0, 1, 1).data;
        return pU[1] > pU[0]
      }().catch((() => (qU = "idle", !1))).then((UU => {
        "pending" === qU && (qU = "concluded"), UU && (tU.e.loadImage = TU)
      })))
    }
  },
  40929: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU.h,
      g: () => tU.p
    });
    var tU = gU(39424);
    (0, tU.t)()
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);