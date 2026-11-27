export const id = 622;
export const ids = [622];
export const modules = {
  54157: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      installImageBitmapTextureLoader: () => Er
    });
    var Zr = Qr(41764),
      Wr = Qr(54160),
      ar = Qr(4413);

    function jr(rr, Sr) {
      if ("string" === typeof rr) {
        const Qr = (0, ar.g)(rr);
        return Qr ? new Blob([(0, ar.e)(Qr.base64)], {
          type: Qr.mimeType || Sr
        }) : null
      }
      return rr instanceof Blob ? rr : new Blob([rr], {
        type: Sr
      })
    }
    const Ir = function(rr, Sr, Qr, Zr) {
      let ar, Ir = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        fr = arguments.length > 5 ? arguments[5] : void 0,
        Er = arguments.length > 6 ? arguments[6] : void 0;
      try {
        ar = jr(rr, Ir)
      } catch {
        ar = null
      }
      return ar ? (createImageBitmap(ar, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...fr
      }).then((rr => {
        Sr(rr)
      }), (() => {
        (0, Wr.h)(rr, Sr, Qr, Zr, Ir, fr, Er)
      })), null) : (0, Wr.h)(rr, Sr, Qr, Zr, Ir, fr, Er)
    };
    let fr = "idle";

    function Er() {
      "idle" === fr && "function" === typeof createImageBitmap && (fr = "pending", async function() {
        const rr = document.createElement("canvas");
        rr.width = 1, rr.height = 2;
        const Sr = rr.getContext("2d");
        if (!Sr) throw new Error("2d context unavailable");
        Sr.fillStyle = "#f00", Sr.fillRect(0, 0, 1, 1), Sr.fillStyle = "#0f0", Sr.fillRect(0, 1, 1, 1);
        const Qr = jr(rr.toDataURL(), "");
        if (!Qr) throw new Error("toDataURL did not produce a base64 data URL");
        const Zr = await createImageBitmap(Qr, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        Sr.drawImage(Zr, 0, 0);
        const Wr = Sr.getImageData(0, 0, 1, 1).data;
        return Wr[1] > Wr[0]
      }().catch((() => (fr = "idle", !1))).then((rr => {
        "pending" === fr && (fr = "concluded"), rr && (Zr.b.loadImage = Ir)
      })))
    }
  },
  54160: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Zr.g,
      h: () => Zr.q
    });
    var Zr = Qr(41898);
    (0, Zr.x)()
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);