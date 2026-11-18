export const id = 283;
export const ids = [283];
export const modules = {
  40276: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      installImageBitmapTextureLoader: () => jJ
    });
    var FJ = ZJ(38671),
      UJ = ZJ(40284),
      eJ = ZJ(2685);

    function XJ(JJ, cJ) {
      if ("string" === typeof JJ) {
        const ZJ = (0, eJ.h)(JJ);
        return ZJ ? new Blob([(0, eJ.d)(ZJ.base64)], {
          type: ZJ.mimeType || cJ
        }) : null
      }
      return JJ instanceof Blob ? JJ : new Blob([JJ], {
        type: cJ
      })
    }
    const AJ = function(JJ, cJ, ZJ, FJ) {
      let eJ, AJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        qJ = arguments.length > 5 ? arguments[5] : void 0,
        jJ = arguments.length > 6 ? arguments[6] : void 0;
      try {
        eJ = XJ(JJ, AJ)
      } catch {
        eJ = null
      }
      return eJ ? (createImageBitmap(eJ, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...qJ
      }).then((JJ => {
        cJ(JJ)
      }), (() => {
        (0, UJ.d)(JJ, cJ, ZJ, FJ, AJ, qJ, jJ)
      })), null) : (0, UJ.d)(JJ, cJ, ZJ, FJ, AJ, qJ, jJ)
    };
    let qJ = "idle";

    function jJ() {
      "idle" === qJ && "function" === typeof createImageBitmap && (qJ = "pending", async function() {
        const JJ = document.createElement("canvas");
        JJ.width = 1, JJ.height = 2;
        const cJ = JJ.getContext("2d");
        if (!cJ) throw new Error("2d context unavailable");
        cJ.fillStyle = "#f00", cJ.fillRect(0, 0, 1, 1), cJ.fillStyle = "#0f0", cJ.fillRect(0, 1, 1, 1);
        const ZJ = XJ(JJ.toDataURL(), "");
        if (!ZJ) throw new Error("toDataURL did not produce a base64 data URL");
        const FJ = await createImageBitmap(ZJ, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        cJ.drawImage(FJ, 0, 0);
        const UJ = cJ.getImageData(0, 0, 1, 1).data;
        return UJ[1] > UJ[0]
      }().catch((() => (qJ = "idle", !1))).then((JJ => {
        "pending" === qJ && (qJ = "concluded"), JJ && (FJ.e.loadImage = AJ)
      })))
    }
  },
  40284: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ.i,
      d: () => FJ.n
    });
    var FJ = ZJ(38844);
    (0, FJ.t)()
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);