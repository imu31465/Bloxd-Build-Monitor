export const id = 311;
export const ids = [311];
export const modules = {
  41786: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      installImageBitmapTextureLoader: () => PQ
    });
    var wQ = XQ(40150),
      qQ = XQ(41791),
      TQ = XQ(3480);

    function zQ(QQ, WQ) {
      if ("string" === typeof QQ) {
        const XQ = (0, TQ.i)(QQ);
        return XQ ? new Blob([(0, TQ.e)(XQ.base64)], {
          type: XQ.mimeType || WQ
        }) : null
      }
      return QQ instanceof Blob ? QQ : new Blob([QQ], {
        type: WQ
      })
    }
    const sQ = function(QQ, WQ, XQ, wQ) {
      let TQ, sQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        FQ = arguments.length > 5 ? arguments[5] : void 0,
        PQ = arguments.length > 6 ? arguments[6] : void 0;
      try {
        TQ = zQ(QQ, sQ)
      } catch {
        TQ = null
      }
      return TQ ? (createImageBitmap(TQ, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...FQ
      }).then((QQ => {
        WQ(QQ)
      }), (() => {
        (0, qQ.f)(QQ, WQ, XQ, wQ, sQ, FQ, PQ)
      })), null) : (0, qQ.f)(QQ, WQ, XQ, wQ, sQ, FQ, PQ)
    };
    let FQ = "idle";

    function PQ() {
      "idle" === FQ && "function" === typeof createImageBitmap && (FQ = "pending", async function() {
        const QQ = document.createElement("canvas");
        QQ.width = 1, QQ.height = 2;
        const WQ = QQ.getContext("2d");
        if (!WQ) throw new Error("2d context unavailable");
        WQ.fillStyle = "#f00", WQ.fillRect(0, 0, 1, 1), WQ.fillStyle = "#0f0", WQ.fillRect(0, 1, 1, 1);
        const XQ = zQ(QQ.toDataURL(), "");
        if (!XQ) throw new Error("toDataURL did not produce a base64 data URL");
        const wQ = await createImageBitmap(XQ, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        WQ.drawImage(wQ, 0, 0);
        const qQ = WQ.getImageData(0, 0, 1, 1).data;
        return qQ[1] > qQ[0]
      }().catch((() => (FQ = "idle", !1))).then((QQ => {
        "pending" === FQ && (FQ = "concluded"), QQ && (wQ.c.loadImage = sQ)
      })))
    }
  },
  41791: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ.i,
      f: () => wQ.r
    });
    var wQ = XQ(40307);
    (0, wQ.w)()
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);