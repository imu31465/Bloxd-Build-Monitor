export const id = 621;
export const ids = [621];
export const modules = {
  53623: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      installImageBitmapTextureLoader: () => fR
    });
    var yR = GR(41399),
      tR = GR(53632),
      uR = GR(4479);

    function ZR(RR, JR) {
      if ("string" === typeof RR) {
        const GR = (0, uR.g)(RR);
        return GR ? new Blob([(0, uR.c)(GR.base64)], {
          type: GR.mimeType || JR
        }) : null
      }
      return RR instanceof Blob ? RR : new Blob([RR], {
        type: JR
      })
    }
    const qR = function(RR, JR, GR, yR) {
      let uR, qR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        iR = arguments.length > 5 ? arguments[5] : void 0,
        fR = arguments.length > 6 ? arguments[6] : void 0;
      try {
        uR = ZR(RR, qR)
      } catch {
        uR = null
      }
      return uR ? (createImageBitmap(uR, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...iR
      }).then((RR => {
        JR(RR)
      }), (() => {
        (0, tR.h)(RR, JR, GR, yR, qR, iR, fR)
      })), null) : (0, tR.h)(RR, JR, GR, yR, qR, iR, fR)
    };
    let iR = "idle";

    function fR() {
      "idle" === iR && "function" === typeof createImageBitmap && (iR = "pending", async function() {
        const RR = document.createElement("canvas");
        RR.width = 1, RR.height = 2;
        const JR = RR.getContext("2d");
        if (!JR) throw new Error("2d context unavailable");
        JR.fillStyle = "#f00", JR.fillRect(0, 0, 1, 1), JR.fillStyle = "#0f0", JR.fillRect(0, 1, 1, 1);
        const GR = ZR(RR.toDataURL(), "");
        if (!GR) throw new Error("toDataURL did not produce a base64 data URL");
        const yR = await createImageBitmap(GR, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        JR.drawImage(yR, 0, 0);
        const tR = JR.getImageData(0, 0, 1, 1).data;
        return tR[1] > tR[0]
      }().catch((() => (iR = "idle", !1))).then((RR => {
        "pending" === iR && (iR = "concluded"), RR && (yR.d.loadImage = qR)
      })))
    }
  },
  53632: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR.h,
      h: () => yR.q
    });
    var yR = GR(41564);
    (0, yR.u)()
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);