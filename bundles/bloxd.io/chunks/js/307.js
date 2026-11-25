export const id = 307;
export const ids = [307];
export const modules = {
  41972: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      installImageBitmapTextureLoader: () => YG
    });
    var wG = ZG(40252),
      SG = ZG(41979),
      LG = ZG(3180);

    function yG(GG, bG) {
      if ("string" === typeof GG) {
        const ZG = (0, LG.i)(GG);
        return ZG ? new Blob([(0, LG.d)(ZG.base64)], {
          type: ZG.mimeType || bG
        }) : null
      }
      return GG instanceof Blob ? GG : new Blob([GG], {
        type: bG
      })
    }
    const kG = function(GG, bG, ZG, wG) {
      let LG, kG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        UG = arguments.length > 5 ? arguments[5] : void 0,
        YG = arguments.length > 6 ? arguments[6] : void 0;
      try {
        LG = yG(GG, kG)
      } catch {
        LG = null
      }
      return LG ? (createImageBitmap(LG, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...UG
      }).then((GG => {
        bG(GG)
      }), (() => {
        (0, SG.g)(GG, bG, ZG, wG, kG, UG, YG)
      })), null) : (0, SG.g)(GG, bG, ZG, wG, kG, UG, YG)
    };
    let UG = "idle";

    function YG() {
      "idle" === UG && "function" === typeof createImageBitmap && (UG = "pending", async function() {
        const GG = document.createElement("canvas");
        GG.width = 1, GG.height = 2;
        const bG = GG.getContext("2d");
        if (!bG) throw new Error("2d context unavailable");
        bG.fillStyle = "#f00", bG.fillRect(0, 0, 1, 1), bG.fillStyle = "#0f0", bG.fillRect(0, 1, 1, 1);
        const ZG = yG(GG.toDataURL(), "");
        if (!ZG) throw new Error("toDataURL did not produce a base64 data URL");
        const wG = await createImageBitmap(ZG, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        bG.drawImage(wG, 0, 0);
        const SG = bG.getImageData(0, 0, 1, 1).data;
        return SG[1] > SG[0]
      }().catch((() => (UG = "idle", !1))).then((GG => {
        "pending" === UG && (UG = "concluded"), GG && (wG.d.loadImage = kG)
      })))
    }
  },
  41979: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG.g,
      g: () => wG.q
    });
    var wG = ZG(40430);
    (0, wG.v)()
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);