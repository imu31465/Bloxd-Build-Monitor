export const id = 293;
export const ids = [293];
export const modules = {
  41115: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      installImageBitmapTextureLoader: () => Xu
    });
    var Eu = yu(39425),
      Ku = yu(41124),
      Qu = yu(3005);

    function mu(uu, Ru) {
      if ("string" === typeof uu) {
        const yu = (0, Qu.g)(uu);
        return yu ? new Blob([(0, Qu.d)(yu.base64)], {
          type: yu.mimeType || Ru
        }) : null
      }
      return uu instanceof Blob ? uu : new Blob([uu], {
        type: Ru
      })
    }
    const Ju = function(uu, Ru, yu, Eu) {
      let Qu, Ju = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        Nu = arguments.length > 5 ? arguments[5] : void 0,
        Xu = arguments.length > 6 ? arguments[6] : void 0;
      try {
        Qu = mu(uu, Ju)
      } catch {
        Qu = null
      }
      return Qu ? (createImageBitmap(Qu, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...Nu
      }).then((uu => {
        Ru(uu)
      }), (() => {
        (0, Ku.d)(uu, Ru, yu, Eu, Ju, Nu, Xu)
      })), null) : (0, Ku.d)(uu, Ru, yu, Eu, Ju, Nu, Xu)
    };
    let Nu = "idle";

    function Xu() {
      "idle" === Nu && "function" === typeof createImageBitmap && (Nu = "pending", async function() {
        const uu = document.createElement("canvas");
        uu.width = 1, uu.height = 2;
        const Ru = uu.getContext("2d");
        if (!Ru) throw new Error("2d context unavailable");
        Ru.fillStyle = "#f00", Ru.fillRect(0, 0, 1, 1), Ru.fillStyle = "#0f0", Ru.fillRect(0, 1, 1, 1);
        const yu = mu(uu.toDataURL(), "");
        if (!yu) throw new Error("toDataURL did not produce a base64 data URL");
        const Eu = await createImageBitmap(yu, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        Ru.drawImage(Eu, 0, 0);
        const Ku = Ru.getImageData(0, 0, 1, 1).data;
        return Ku[1] > Ku[0]
      }().catch((() => (Nu = "idle", !1))).then((uu => {
        "pending" === Nu && (Nu = "concluded"), uu && (Eu.c.loadImage = Ju)
      })))
    }
  },
  41124: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu.j,
      d: () => Eu.r
    });
    var Eu = yu(39606);
    (0, Eu.v)()
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);