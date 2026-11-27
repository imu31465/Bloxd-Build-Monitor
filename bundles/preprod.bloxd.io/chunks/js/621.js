export const id = 621;
export const ids = [621];
export const modules = {
  53803: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      installImageBitmapTextureLoader: () => wW
    });
    var mW = OW(41412),
      EW = OW(53812),
      NW = OW(4390);

    function PW(WW, iW) {
      if ("string" === typeof WW) {
        const OW = (0, NW.h)(WW);
        return OW ? new Blob([(0, NW.c)(OW.base64)], {
          type: OW.mimeType || iW
        }) : null
      }
      return WW instanceof Blob ? WW : new Blob([WW], {
        type: iW
      })
    }
    const LW = function(WW, iW, OW, mW) {
      let NW, LW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        cW = arguments.length > 5 ? arguments[5] : void 0,
        wW = arguments.length > 6 ? arguments[6] : void 0;
      try {
        NW = PW(WW, LW)
      } catch {
        NW = null
      }
      return NW ? (createImageBitmap(NW, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...cW
      }).then((WW => {
        iW(WW)
      }), (() => {
        (0, EW.f)(WW, iW, OW, mW, LW, cW, wW)
      })), null) : (0, EW.f)(WW, iW, OW, mW, LW, cW, wW)
    };
    let cW = "idle";

    function wW() {
      "idle" === cW && "function" === typeof createImageBitmap && (cW = "pending", async function() {
        const WW = document.createElement("canvas");
        WW.width = 1, WW.height = 2;
        const iW = WW.getContext("2d");
        if (!iW) throw new Error("2d context unavailable");
        iW.fillStyle = "#f00", iW.fillRect(0, 0, 1, 1), iW.fillStyle = "#0f0", iW.fillRect(0, 1, 1, 1);
        const OW = PW(WW.toDataURL(), "");
        if (!OW) throw new Error("toDataURL did not produce a base64 data URL");
        const mW = await createImageBitmap(OW, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        iW.drawImage(mW, 0, 0);
        const EW = iW.getImageData(0, 0, 1, 1).data;
        return EW[1] > EW[0]
      }().catch((() => (cW = "idle", !1))).then((WW => {
        "pending" === cW && (cW = "concluded"), WW && (mW.e.loadImage = LW)
      })))
    }
  },
  53812: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW.i,
      f: () => mW.s
    });
    var mW = OW(41558);
    (0, mW.z)()
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);