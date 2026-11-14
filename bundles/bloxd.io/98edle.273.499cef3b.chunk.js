export const id = 273;
export const ids = [273];
export const modules = {
  39021: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      installImageBitmapTextureLoader: () => NW
    });
    var wW = MW(37465),
      CW = MW(39023),
      zR = MW(2337);

    function AW(WW, RW) {
      if ("string" === typeof WW) {
        const MW = (0, zR.d)(WW);
        return MW ? new Blob([(0, zR.b)(MW.base64)], {
          type: MW.mimeType || RW
        }) : null
      }
      return WW instanceof Blob ? WW : new Blob([WW], {
        type: RW
      })
    }
    const bR = function(WW, RW, MW, wW) {
      let zR, bR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        yR = arguments.length > 5 ? arguments[5] : void 0,
        NW = arguments.length > 6 ? arguments[6] : void 0;
      try {
        zR = AW(WW, bR)
      } catch {
        zR = null
      }
      return zR ? (createImageBitmap(zR, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...yR
      }).then((WW => {
        RW(WW)
      }), (() => {
        (0, CW.g)(WW, RW, MW, wW, bR, yR, NW)
      })), null) : (0, CW.g)(WW, RW, MW, wW, bR, yR, NW)
    };
    let yR = "idle";

    function NW() {
      "idle" === yR && "function" === typeof createImageBitmap && (yR = "pending", async function() {
        const WW = document.createElement("canvas");
        WW.width = 1, WW.height = 2;
        const RW = WW.getContext("2d");
        if (!RW) throw new Error("2d context unavailable");
        RW.fillStyle = "#f00", RW.fillRect(0, 0, 1, 1), RW.fillStyle = "#0f0", RW.fillRect(0, 1, 1, 1);
        const MW = AW(WW.toDataURL(), "");
        if (!MW) throw new Error("toDataURL did not produce a base64 data URL");
        const wW = await createImageBitmap(MW, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        RW.drawImage(wW, 0, 0);
        const CW = RW.getImageData(0, 0, 1, 1).data;
        return CW[1] > CW[0]
      }().catch((() => (yR = "idle", !1))).then((WW => {
        "pending" === yR && (yR = "concluded"), WW && (wW.b.loadImage = bR)
      })))
    }
  },
  39023: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => wW.g,
      g: () => wW.m
    });
    var wW = MW(37635);
    (0, wW.s)()
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);