export const id = 612;
export const ids = [612];
export const modules = {
  44520: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      installImageBitmapTextureLoader: () => nV
    });
    var JV = xV(41134),
      YV = xV(44529),
      UV = xV(3630);

    function yV(VV, eV) {
      if ("string" === typeof VV) {
        const xV = (0, UV.h)(VV);
        return xV ? new Blob([(0, UV.b)(xV.base64)], {
          type: xV.mimeType || eV
        }) : null
      }
      return VV instanceof Blob ? VV : new Blob([VV], {
        type: eV
      })
    }
    const pV = function(VV, eV, xV, JV) {
      let UV, pV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        QV = arguments.length > 5 ? arguments[5] : void 0,
        nV = arguments.length > 6 ? arguments[6] : void 0;
      try {
        UV = yV(VV, pV)
      } catch {
        UV = null
      }
      return UV ? (createImageBitmap(UV, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...QV
      }).then((VV => {
        eV(VV)
      }), (() => {
        (0, YV.h)(VV, eV, xV, JV, pV, QV, nV)
      })), null) : (0, YV.h)(VV, eV, xV, JV, pV, QV, nV)
    };
    let QV = "idle";

    function nV() {
      "idle" === QV && "function" === typeof createImageBitmap && (QV = "pending", async function() {
        const VV = document.createElement("canvas");
        VV.width = 1, VV.height = 2;
        const eV = VV.getContext("2d");
        if (!eV) throw new Error("2d context unavailable");
        eV.fillStyle = "#f00", eV.fillRect(0, 0, 1, 1), eV.fillStyle = "#0f0", eV.fillRect(0, 1, 1, 1);
        const xV = yV(VV.toDataURL(), "");
        if (!xV) throw new Error("toDataURL did not produce a base64 data URL");
        const JV = await createImageBitmap(xV, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        eV.drawImage(JV, 0, 0);
        const YV = eV.getImageData(0, 0, 1, 1).data;
        return YV[1] > YV[0]
      }().catch((() => (QV = "idle", !1))).then((VV => {
        "pending" === QV && (QV = "concluded"), VV && (JV.b.loadImage = pV)
      })))
    }
  },
  44529: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => JV.h,
      h: () => JV.r
    });
    var JV = xV(41300);
    (0, JV.x)()
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);