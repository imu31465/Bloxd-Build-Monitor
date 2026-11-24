export const id = 307;
export const ids = [307];
export const modules = {
  41568: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      installImageBitmapTextureLoader: () => cB
    });
    var TB = ZB(39926),
      JB = ZB(41575),
      oB = ZB(3372);

    function GB(BB, IB) {
      if ("string" === typeof BB) {
        const ZB = (0, oB.h)(BB);
        return ZB ? new Blob([(0, oB.d)(ZB.base64)], {
          type: ZB.mimeType || IB
        }) : null
      }
      return BB instanceof Blob ? BB : new Blob([BB], {
        type: IB
      })
    }
    const vB = function(BB, IB, ZB, TB) {
      let oB, vB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        kB = arguments.length > 5 ? arguments[5] : void 0,
        cB = arguments.length > 6 ? arguments[6] : void 0;
      try {
        oB = GB(BB, vB)
      } catch {
        oB = null
      }
      return oB ? (createImageBitmap(oB, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...kB
      }).then((BB => {
        IB(BB)
      }), (() => {
        (0, JB.c)(BB, IB, ZB, TB, vB, kB, cB)
      })), null) : (0, JB.c)(BB, IB, ZB, TB, vB, kB, cB)
    };
    let kB = "idle";

    function cB() {
      "idle" === kB && "function" === typeof createImageBitmap && (kB = "pending", async function() {
        const BB = document.createElement("canvas");
        BB.width = 1, BB.height = 2;
        const IB = BB.getContext("2d");
        if (!IB) throw new Error("2d context unavailable");
        IB.fillStyle = "#f00", IB.fillRect(0, 0, 1, 1), IB.fillStyle = "#0f0", IB.fillRect(0, 1, 1, 1);
        const ZB = GB(BB.toDataURL(), "");
        if (!ZB) throw new Error("toDataURL did not produce a base64 data URL");
        const TB = await createImageBitmap(ZB, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        IB.drawImage(TB, 0, 0);
        const JB = IB.getImageData(0, 0, 1, 1).data;
        return JB[1] > JB[0]
      }().catch((() => (kB = "idle", !1))).then((BB => {
        "pending" === kB && (kB = "concluded"), BB && (TB.c.loadImage = vB)
      })))
    }
  },
  41575: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB.f,
      c: () => TB.l
    });
    var TB = ZB(40110);
    (0, TB.q)()
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);