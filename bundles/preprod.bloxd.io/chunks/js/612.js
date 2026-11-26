export const id = 612;
export const ids = [612];
export const modules = {
  45111: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      installImageBitmapTextureLoader: () => CH
    });
    var AH = LH(41164),
      rH = LH(45118),
      SH = LH(3562);

    function hH(HH, BH) {
      if ("string" === typeof HH) {
        const LH = (0, SH.i)(HH);
        return LH ? new Blob([(0, SH.e)(LH.base64)], {
          type: LH.mimeType || BH
        }) : null
      }
      return HH instanceof Blob ? HH : new Blob([HH], {
        type: BH
      })
    }
    const tH = function(HH, BH, LH, AH) {
      let SH, tH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        zH = arguments.length > 5 ? arguments[5] : void 0,
        CH = arguments.length > 6 ? arguments[6] : void 0;
      try {
        SH = hH(HH, tH)
      } catch {
        SH = null
      }
      return SH ? (createImageBitmap(SH, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...zH
      }).then((HH => {
        BH(HH)
      }), (() => {
        (0, rH.f)(HH, BH, LH, AH, tH, zH, CH)
      })), null) : (0, rH.f)(HH, BH, LH, AH, tH, zH, CH)
    };
    let zH = "idle";

    function CH() {
      "idle" === zH && "function" === typeof createImageBitmap && (zH = "pending", async function() {
        const HH = document.createElement("canvas");
        HH.width = 1, HH.height = 2;
        const BH = HH.getContext("2d");
        if (!BH) throw new Error("2d context unavailable");
        BH.fillStyle = "#f00", BH.fillRect(0, 0, 1, 1), BH.fillStyle = "#0f0", BH.fillRect(0, 1, 1, 1);
        const LH = hH(HH.toDataURL(), "");
        if (!LH) throw new Error("toDataURL did not produce a base64 data URL");
        const AH = await createImageBitmap(LH, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        BH.drawImage(AH, 0, 0);
        const rH = BH.getImageData(0, 0, 1, 1).data;
        return rH[1] > rH[0]
      }().catch((() => (zH = "idle", !1))).then((HH => {
        "pending" === zH && (zH = "concluded"), HH && (AH.b.loadImage = tH)
      })))
    }
  },
  45118: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH.i,
      f: () => AH.m
    });
    var AH = LH(41336);
    (0, AH.q)()
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);