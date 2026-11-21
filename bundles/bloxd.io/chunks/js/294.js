export const id = 294;
export const ids = [294];
export const modules = {
  40950: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      installImageBitmapTextureLoader: () => mQ
    });
    var LQ = wQ(39274),
      qQ = wQ(40956),
      oQ = wQ(3091);

    function DQ(QQ, FQ) {
      if ("string" === typeof QQ) {
        const wQ = (0, oQ.e)(QQ);
        return wQ ? new Blob([(0, oQ.c)(wQ.base64)], {
          type: wQ.mimeType || FQ
        }) : null
      }
      return QQ instanceof Blob ? QQ : new Blob([QQ], {
        type: FQ
      })
    }
    const kQ = function(QQ, FQ, wQ, LQ) {
      let oQ, kQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        vQ = arguments.length > 5 ? arguments[5] : void 0,
        mQ = arguments.length > 6 ? arguments[6] : void 0;
      try {
        oQ = DQ(QQ, kQ)
      } catch {
        oQ = null
      }
      return oQ ? (createImageBitmap(oQ, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...vQ
      }).then((QQ => {
        FQ(QQ)
      }), (() => {
        (0, qQ.e)(QQ, FQ, wQ, LQ, kQ, vQ, mQ)
      })), null) : (0, qQ.e)(QQ, FQ, wQ, LQ, kQ, vQ, mQ)
    };
    let vQ = "idle";

    function mQ() {
      "idle" === vQ && "function" === typeof createImageBitmap && (vQ = "pending", async function() {
        const QQ = document.createElement("canvas");
        QQ.width = 1, QQ.height = 2;
        const FQ = QQ.getContext("2d");
        if (!FQ) throw new Error("2d context unavailable");
        FQ.fillStyle = "#f00", FQ.fillRect(0, 0, 1, 1), FQ.fillStyle = "#0f0", FQ.fillRect(0, 1, 1, 1);
        const wQ = DQ(QQ.toDataURL(), "");
        if (!wQ) throw new Error("toDataURL did not produce a base64 data URL");
        const LQ = await createImageBitmap(wQ, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        FQ.drawImage(LQ, 0, 0);
        const qQ = FQ.getImageData(0, 0, 1, 1).data;
        return qQ[1] > qQ[0]
      }().catch((() => (vQ = "idle", !1))).then((QQ => {
        "pending" === vQ && (vQ = "concluded"), QQ && (LQ.e.loadImage = kQ)
      })))
    }
  },
  40956: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => LQ.h,
      e: () => LQ.p
    });
    var LQ = wQ(39448);
    (0, LQ.t)()
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);