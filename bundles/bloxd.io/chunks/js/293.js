export const id = 293;
export const ids = [293];
export const modules = {
  40973: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      installImageBitmapTextureLoader: () => dk
    });
    var Rk = Bk(39293),
      tk = Bk(40981),
      ak = Bk(3007);

    function Xk(kk, Fk) {
      if ("string" === typeof kk) {
        const Bk = (0, ak.g)(kk);
        return Bk ? new Blob([(0, ak.e)(Bk.base64)], {
          type: Bk.mimeType || Fk
        }) : null
      }
      return kk instanceof Blob ? kk : new Blob([kk], {
        type: Fk
      })
    }
    const bk = function(kk, Fk, Bk, Rk) {
      let ak, bk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        wk = arguments.length > 5 ? arguments[5] : void 0,
        dk = arguments.length > 6 ? arguments[6] : void 0;
      try {
        ak = Xk(kk, bk)
      } catch {
        ak = null
      }
      return ak ? (createImageBitmap(ak, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...wk
      }).then((kk => {
        Fk(kk)
      }), (() => {
        (0, tk.f)(kk, Fk, Bk, Rk, bk, wk, dk)
      })), null) : (0, tk.f)(kk, Fk, Bk, Rk, bk, wk, dk)
    };
    let wk = "idle";

    function dk() {
      "idle" === wk && "function" === typeof createImageBitmap && (wk = "pending", async function() {
        const kk = document.createElement("canvas");
        kk.width = 1, kk.height = 2;
        const Fk = kk.getContext("2d");
        if (!Fk) throw new Error("2d context unavailable");
        Fk.fillStyle = "#f00", Fk.fillRect(0, 0, 1, 1), Fk.fillStyle = "#0f0", Fk.fillRect(0, 1, 1, 1);
        const Bk = Xk(kk.toDataURL(), "");
        if (!Bk) throw new Error("toDataURL did not produce a base64 data URL");
        const Rk = await createImageBitmap(Bk, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        Fk.drawImage(Rk, 0, 0);
        const tk = Fk.getImageData(0, 0, 1, 1).data;
        return tk[1] > tk[0]
      }().catch((() => (wk = "idle", !1))).then((kk => {
        "pending" === wk && (wk = "concluded"), kk && (Rk.e.loadImage = bk)
      })))
    }
  },
  40981: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk.f,
      f: () => Rk.j
    });
    var Rk = Bk(39436);
    (0, Rk.p)()
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);