export const id = 307;
export const ids = [307];
export const modules = {
  41638: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      installImageBitmapTextureLoader: () => UB
    });
    var QB = zB(39958),
      nB = zB(41640),
      dB = zB(3310);

    function IB(BB, jB) {
      if ("string" === typeof BB) {
        const zB = (0, dB.j)(BB);
        return zB ? new Blob([(0, dB.c)(zB.base64)], {
          type: zB.mimeType || jB
        }) : null
      }
      return BB instanceof Blob ? BB : new Blob([BB], {
        type: jB
      })
    }
    const NB = function(BB, jB, zB, QB) {
      let dB, NB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        uB = arguments.length > 5 ? arguments[5] : void 0,
        UB = arguments.length > 6 ? arguments[6] : void 0;
      try {
        dB = IB(BB, NB)
      } catch {
        dB = null
      }
      return dB ? (createImageBitmap(dB, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...uB
      }).then((BB => {
        jB(BB)
      }), (() => {
        (0, nB.c)(BB, jB, zB, QB, NB, uB, UB)
      })), null) : (0, nB.c)(BB, jB, zB, QB, NB, uB, UB)
    };
    let uB = "idle";

    function UB() {
      "idle" === uB && "function" === typeof createImageBitmap && (uB = "pending", async function() {
        const BB = document.createElement("canvas");
        BB.width = 1, BB.height = 2;
        const jB = BB.getContext("2d");
        if (!jB) throw new Error("2d context unavailable");
        jB.fillStyle = "#f00", jB.fillRect(0, 0, 1, 1), jB.fillStyle = "#0f0", jB.fillRect(0, 1, 1, 1);
        const zB = IB(BB.toDataURL(), "");
        if (!zB) throw new Error("toDataURL did not produce a base64 data URL");
        const QB = await createImageBitmap(zB, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        jB.drawImage(QB, 0, 0);
        const nB = jB.getImageData(0, 0, 1, 1).data;
        return nB[1] > nB[0]
      }().catch((() => (uB = "idle", !1))).then((BB => {
        "pending" === uB && (uB = "concluded"), BB && (QB.e.loadImage = NB)
      })))
    }
  },
  41640: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => QB.j,
      c: () => QB.r
    });
    var QB = zB(40108);
    (0, QB.y)()
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);