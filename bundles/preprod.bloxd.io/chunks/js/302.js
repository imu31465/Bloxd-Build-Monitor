export const id = 302;
export const ids = [302];
export const modules = {
  41347: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      installImageBitmapTextureLoader: () => qC
    });
    var QC = ZC(39692),
      wC = ZC(41349),
      bC = ZC(3188);

    function nC(CC, zC) {
      if ("string" === typeof CC) {
        const ZC = (0, bC.e)(CC);
        return ZC ? new Blob([(0, bC.c)(ZC.base64)], {
          type: ZC.mimeType || zC
        }) : null
      }
      return CC instanceof Blob ? CC : new Blob([CC], {
        type: zC
      })
    }
    const fC = function(CC, zC, ZC, QC) {
      let bC, fC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        oC = arguments.length > 5 ? arguments[5] : void 0,
        qC = arguments.length > 6 ? arguments[6] : void 0;
      try {
        bC = nC(CC, fC)
      } catch {
        bC = null
      }
      return bC ? (createImageBitmap(bC, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...oC
      }).then((CC => {
        zC(CC)
      }), (() => {
        (0, wC.d)(CC, zC, ZC, QC, fC, oC, qC)
      })), null) : (0, wC.d)(CC, zC, ZC, QC, fC, oC, qC)
    };
    let oC = "idle";

    function qC() {
      "idle" === oC && "function" === typeof createImageBitmap && (oC = "pending", async function() {
        const CC = document.createElement("canvas");
        CC.width = 1, CC.height = 2;
        const zC = CC.getContext("2d");
        if (!zC) throw new Error("2d context unavailable");
        zC.fillStyle = "#f00", zC.fillRect(0, 0, 1, 1), zC.fillStyle = "#0f0", zC.fillRect(0, 1, 1, 1);
        const ZC = nC(CC.toDataURL(), "");
        if (!ZC) throw new Error("toDataURL did not produce a base64 data URL");
        const QC = await createImageBitmap(ZC, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        zC.drawImage(QC, 0, 0);
        const wC = zC.getImageData(0, 0, 1, 1).data;
        return wC[1] > wC[0]
      }().catch((() => (oC = "idle", !1))).then((CC => {
        "pending" === oC && (oC = "concluded"), CC && (QC.e.loadImage = fC)
      })))
    }
  },
  41349: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC.g,
      d: () => QC.m
    });
    var QC = ZC(39865);
    (0, QC.p)()
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);