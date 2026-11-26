export const id = 609;
export const ids = [609];
export const modules = {
  44309: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      installImageBitmapTextureLoader: () => DU
    });
    var cU = zU(40983),
      yU = zU(44311),
      QU = zU(3572);

    function AU(UU, XU) {
      if ("string" === typeof UU) {
        const zU = (0, QU.h)(UU);
        return zU ? new Blob([(0, QU.e)(zU.base64)], {
          type: zU.mimeType || XU
        }) : null
      }
      return UU instanceof Blob ? UU : new Blob([UU], {
        type: XU
      })
    }
    const FU = function(UU, XU, zU, cU) {
      let QU, FU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        oU = arguments.length > 5 ? arguments[5] : void 0,
        DU = arguments.length > 6 ? arguments[6] : void 0;
      try {
        QU = AU(UU, FU)
      } catch {
        QU = null
      }
      return QU ? (createImageBitmap(QU, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...oU
      }).then((UU => {
        XU(UU)
      }), (() => {
        (0, yU.e)(UU, XU, zU, cU, FU, oU, DU)
      })), null) : (0, yU.e)(UU, XU, zU, cU, FU, oU, DU)
    };
    let oU = "idle";

    function DU() {
      "idle" === oU && "function" === typeof createImageBitmap && (oU = "pending", async function() {
        const UU = document.createElement("canvas");
        UU.width = 1, UU.height = 2;
        const XU = UU.getContext("2d");
        if (!XU) throw new Error("2d context unavailable");
        XU.fillStyle = "#f00", XU.fillRect(0, 0, 1, 1), XU.fillStyle = "#0f0", XU.fillRect(0, 1, 1, 1);
        const zU = AU(UU.toDataURL(), "");
        if (!zU) throw new Error("toDataURL did not produce a base64 data URL");
        const cU = await createImageBitmap(zU, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        XU.drawImage(cU, 0, 0);
        const yU = XU.getImageData(0, 0, 1, 1).data;
        return yU[1] > yU[0]
      }().catch((() => (oU = "idle", !1))).then((UU => {
        "pending" === oU && (oU = "concluded"), UU && (cU.c.loadImage = FU)
      })))
    }
  },
  44311: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU.k,
      e: () => cU.s
    });
    var cU = zU(41152);
    (0, cU.A)()
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);