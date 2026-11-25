export const id = 307;
export const ids = [307];
export const modules = {
  41800: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      installImageBitmapTextureLoader: () => fu
    });
    var su = ju(40149),
      Uu = ju(41805),
      Zu = ju(3375);

    function Xu(uu, Eu) {
      if ("string" === typeof uu) {
        const ju = (0, Zu.k)(uu);
        return ju ? new Blob([(0, Zu.d)(ju.base64)], {
          type: ju.mimeType || Eu
        }) : null
      }
      return uu instanceof Blob ? uu : new Blob([uu], {
        type: Eu
      })
    }
    const lu = function(uu, Eu, ju, su) {
      let Zu, lu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        qu = arguments.length > 5 ? arguments[5] : void 0,
        fu = arguments.length > 6 ? arguments[6] : void 0;
      try {
        Zu = Xu(uu, lu)
      } catch {
        Zu = null
      }
      return Zu ? (createImageBitmap(Zu, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...qu
      }).then((uu => {
        Eu(uu)
      }), (() => {
        (0, Uu.f)(uu, Eu, ju, su, lu, qu, fu)
      })), null) : (0, Uu.f)(uu, Eu, ju, su, lu, qu, fu)
    };
    let qu = "idle";

    function fu() {
      "idle" === qu && "function" === typeof createImageBitmap && (qu = "pending", async function() {
        const uu = document.createElement("canvas");
        uu.width = 1, uu.height = 2;
        const Eu = uu.getContext("2d");
        if (!Eu) throw new Error("2d context unavailable");
        Eu.fillStyle = "#f00", Eu.fillRect(0, 0, 1, 1), Eu.fillStyle = "#0f0", Eu.fillRect(0, 1, 1, 1);
        const ju = Xu(uu.toDataURL(), "");
        if (!ju) throw new Error("toDataURL did not produce a base64 data URL");
        const su = await createImageBitmap(ju, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        Eu.drawImage(su, 0, 0);
        const Uu = Eu.getImageData(0, 0, 1, 1).data;
        return Uu[1] > Uu[0]
      }().catch((() => (qu = "idle", !1))).then((uu => {
        "pending" === qu && (qu = "concluded"), uu && (su.e.loadImage = lu)
      })))
    }
  },
  41805: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su.h,
      f: () => su.q
    });
    var su = ju(40294);
    (0, su.v)()
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);