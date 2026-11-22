export const id = 301;
export const ids = [301];
export const modules = {
  41105: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      installImageBitmapTextureLoader: () => mk
    });
    var Dk = ik(39445),
      fk = ik(41109),
      Sk = ik(3177);

    function bk(kk, ek) {
      if ("string" === typeof kk) {
        const ik = (0, Sk.c)(kk);
        return ik ? new Blob([(0, Sk.b)(ik.base64)], {
          type: ik.mimeType || ek
        }) : null
      }
      return kk instanceof Blob ? kk : new Blob([kk], {
        type: ek
      })
    }
    const rk = function(kk, ek, ik, Dk) {
      let Sk, rk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        Pk = arguments.length > 5 ? arguments[5] : void 0,
        mk = arguments.length > 6 ? arguments[6] : void 0;
      try {
        Sk = bk(kk, rk)
      } catch {
        Sk = null
      }
      return Sk ? (createImageBitmap(Sk, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...Pk
      }).then((kk => {
        ek(kk)
      }), (() => {
        (0, fk.e)(kk, ek, ik, Dk, rk, Pk, mk)
      })), null) : (0, fk.e)(kk, ek, ik, Dk, rk, Pk, mk)
    };
    let Pk = "idle";

    function mk() {
      "idle" === Pk && "function" === typeof createImageBitmap && (Pk = "pending", async function() {
        const kk = document.createElement("canvas");
        kk.width = 1, kk.height = 2;
        const ek = kk.getContext("2d");
        if (!ek) throw new Error("2d context unavailable");
        ek.fillStyle = "#f00", ek.fillRect(0, 0, 1, 1), ek.fillStyle = "#0f0", ek.fillRect(0, 1, 1, 1);
        const ik = bk(kk.toDataURL(), "");
        if (!ik) throw new Error("toDataURL did not produce a base64 data URL");
        const Dk = await createImageBitmap(ik, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        ek.drawImage(Dk, 0, 0);
        const fk = ek.getImageData(0, 0, 1, 1).data;
        return fk[1] > fk[0]
      }().catch((() => (Pk = "idle", !1))).then((kk => {
        "pending" === Pk && (Pk = "concluded"), kk && (Dk.b.loadImage = rk)
      })))
    }
  },
  41109: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk.f,
      e: () => Dk.o
    });
    var Dk = ik(39607);
    (0, Dk.s)()
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);