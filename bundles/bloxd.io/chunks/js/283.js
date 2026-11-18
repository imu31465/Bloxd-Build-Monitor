export const id = 283;
export const ids = [283];
export const modules = {
  40270: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      installImageBitmapTextureLoader: () => gB
    });
    var VB = dB(38620),
      yB = dB(40275),
      pB = dB(2675);

    function lB(BB, TB) {
      if ("string" === typeof BB) {
        const dB = (0, pB.h)(BB);
        return dB ? new Blob([(0, pB.e)(dB.base64)], {
          type: dB.mimeType || TB
        }) : null
      }
      return BB instanceof Blob ? BB : new Blob([BB], {
        type: TB
      })
    }
    const JB = function(BB, TB, dB, VB) {
      let pB, JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        YB = arguments.length > 5 ? arguments[5] : void 0,
        gB = arguments.length > 6 ? arguments[6] : void 0;
      try {
        pB = lB(BB, JB)
      } catch {
        pB = null
      }
      return pB ? (createImageBitmap(pB, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...YB
      }).then((BB => {
        TB(BB)
      }), (() => {
        (0, yB.e)(BB, TB, dB, VB, JB, YB, gB)
      })), null) : (0, yB.e)(BB, TB, dB, VB, JB, YB, gB)
    };
    let YB = "idle";

    function gB() {
      "idle" === YB && "function" === typeof createImageBitmap && (YB = "pending", async function() {
        const BB = document.createElement("canvas");
        BB.width = 1, BB.height = 2;
        const TB = BB.getContext("2d");
        if (!TB) throw new Error("2d context unavailable");
        TB.fillStyle = "#f00", TB.fillRect(0, 0, 1, 1), TB.fillStyle = "#0f0", TB.fillRect(0, 1, 1, 1);
        const dB = lB(BB.toDataURL(), "");
        if (!dB) throw new Error("toDataURL did not produce a base64 data URL");
        const VB = await createImageBitmap(dB, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        TB.drawImage(VB, 0, 0);
        const yB = TB.getImageData(0, 0, 1, 1).data;
        return yB[1] > yB[0]
      }().catch((() => (YB = "idle", !1))).then((BB => {
        "pending" === YB && (YB = "concluded"), BB && (VB.d.loadImage = JB)
      })))
    }
  },
  40275: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB.j,
      e: () => VB.s
    });
    var VB = dB(38790);
    (0, VB.x)()
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);