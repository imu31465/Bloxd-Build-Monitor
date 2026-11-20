export const id = 294;
export const ids = [294];
export const modules = {
  41295: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      installImageBitmapTextureLoader: () => cq
    });
    var Yq = gq(39630),
      lq = gq(41299),
      Oq = gq(3108);

    function mq(qq, Eq) {
      if ("string" === typeof qq) {
        const gq = (0, Oq.h)(qq);
        return gq ? new Blob([(0, Oq.d)(gq.base64)], {
          type: gq.mimeType || Eq
        }) : null
      }
      return qq instanceof Blob ? qq : new Blob([qq], {
        type: Eq
      })
    }
    const xq = function(qq, Eq, gq, Yq) {
      let Oq, xq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        Aq = arguments.length > 5 ? arguments[5] : void 0,
        cq = arguments.length > 6 ? arguments[6] : void 0;
      try {
        Oq = mq(qq, xq)
      } catch {
        Oq = null
      }
      return Oq ? (createImageBitmap(Oq, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...Aq
      }).then((qq => {
        Eq(qq)
      }), (() => {
        (0, lq.f)(qq, Eq, gq, Yq, xq, Aq, cq)
      })), null) : (0, lq.f)(qq, Eq, gq, Yq, xq, Aq, cq)
    };
    let Aq = "idle";

    function cq() {
      "idle" === Aq && "function" === typeof createImageBitmap && (Aq = "pending", async function() {
        const qq = document.createElement("canvas");
        qq.width = 1, qq.height = 2;
        const Eq = qq.getContext("2d");
        if (!Eq) throw new Error("2d context unavailable");
        Eq.fillStyle = "#f00", Eq.fillRect(0, 0, 1, 1), Eq.fillStyle = "#0f0", Eq.fillRect(0, 1, 1, 1);
        const gq = mq(qq.toDataURL(), "");
        if (!gq) throw new Error("toDataURL did not produce a base64 data URL");
        const Yq = await createImageBitmap(gq, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        Eq.drawImage(Yq, 0, 0);
        const lq = Eq.getImageData(0, 0, 1, 1).data;
        return lq[1] > lq[0]
      }().catch((() => (Aq = "idle", !1))).then((qq => {
        "pending" === Aq && (Aq = "concluded"), qq && (Yq.e.loadImage = xq)
      })))
    }
  },
  41299: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq.m,
      f: () => Yq.x
    });
    var Yq = gq(39799);
    (0, Yq.D)()
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);