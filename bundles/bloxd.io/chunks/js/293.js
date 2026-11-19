export const id = 293;
export const ids = [293];
export const modules = {
  40606: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      installImageBitmapTextureLoader: () => aY
    });
    var FY = DY(39021),
      AY = DY(40608),
      IY = DY(2795);

    function RY(YY, rY) {
      if ("string" === typeof YY) {
        const DY = (0, IY.f)(YY);
        return DY ? new Blob([(0, IY.e)(DY.base64)], {
          type: DY.mimeType || rY
        }) : null
      }
      return YY instanceof Blob ? YY : new Blob([YY], {
        type: rY
      })
    }
    const OY = function(YY, rY, DY, FY) {
      let IY, OY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        gY = arguments.length > 5 ? arguments[5] : void 0,
        aY = arguments.length > 6 ? arguments[6] : void 0;
      try {
        IY = RY(YY, OY)
      } catch {
        IY = null
      }
      return IY ? (createImageBitmap(IY, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...gY
      }).then((YY => {
        rY(YY)
      }), (() => {
        (0, AY.g)(YY, rY, DY, FY, OY, gY, aY)
      })), null) : (0, AY.g)(YY, rY, DY, FY, OY, gY, aY)
    };
    let gY = "idle";

    function aY() {
      "idle" === gY && "function" === typeof createImageBitmap && (gY = "pending", async function() {
        const YY = document.createElement("canvas");
        YY.width = 1, YY.height = 2;
        const rY = YY.getContext("2d");
        if (!rY) throw new Error("2d context unavailable");
        rY.fillStyle = "#f00", rY.fillRect(0, 0, 1, 1), rY.fillStyle = "#0f0", rY.fillRect(0, 1, 1, 1);
        const DY = RY(YY.toDataURL(), "");
        if (!DY) throw new Error("toDataURL did not produce a base64 data URL");
        const FY = await createImageBitmap(DY, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        rY.drawImage(FY, 0, 0);
        const AY = rY.getImageData(0, 0, 1, 1).data;
        return AY[1] > AY[0]
      }().catch((() => (gY = "idle", !1))).then((YY => {
        "pending" === gY && (gY = "concluded"), YY && (FY.b.loadImage = OY)
      })))
    }
  },
  40608: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY.e,
      g: () => FY.m
    });
    var FY = DY(39160);
    (0, FY.t)()
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);