export const id = 302;
export const ids = [302];
export const modules = {
  41542: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      installImageBitmapTextureLoader: () => qk
    });
    var Xk = Ik(39860),
      Tk = Ik(41550),
      ik = Ik(3147);

    function yk(kk, Fk) {
      if ("string" === typeof kk) {
        const Ik = (0, ik.h)(kk);
        return Ik ? new Blob([(0, ik.b)(Ik.base64)], {
          type: Ik.mimeType || Fk
        }) : null
      }
      return kk instanceof Blob ? kk : new Blob([kk], {
        type: Fk
      })
    }
    const lk = function(kk, Fk, Ik, Xk) {
      let ik, lk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        ak = arguments.length > 5 ? arguments[5] : void 0,
        qk = arguments.length > 6 ? arguments[6] : void 0;
      try {
        ik = yk(kk, lk)
      } catch {
        ik = null
      }
      return ik ? (createImageBitmap(ik, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...ak
      }).then((kk => {
        Fk(kk)
      }), (() => {
        (0, Tk.i)(kk, Fk, Ik, Xk, lk, ak, qk)
      })), null) : (0, Tk.i)(kk, Fk, Ik, Xk, lk, ak, qk)
    };
    let ak = "idle";

    function qk() {
      "idle" === ak && "function" === typeof createImageBitmap && (ak = "pending", async function() {
        const kk = document.createElement("canvas");
        kk.width = 1, kk.height = 2;
        const Fk = kk.getContext("2d");
        if (!Fk) throw new Error("2d context unavailable");
        Fk.fillStyle = "#f00", Fk.fillRect(0, 0, 1, 1), Fk.fillStyle = "#0f0", Fk.fillRect(0, 1, 1, 1);
        const Ik = yk(kk.toDataURL(), "");
        if (!Ik) throw new Error("toDataURL did not produce a base64 data URL");
        const Xk = await createImageBitmap(Ik, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        Fk.drawImage(Xk, 0, 0);
        const Tk = Fk.getImageData(0, 0, 1, 1).data;
        return Tk[1] > Tk[0]
      }().catch((() => (ak = "idle", !1))).then((kk => {
        "pending" === ak && (ak = "concluded"), kk && (Xk.e.loadImage = lk)
      })))
    }
  },
  41550: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Xk.l,
      i: () => Xk.t
    });
    var Xk = Ik(40038);
    (0, Xk.x)()
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);