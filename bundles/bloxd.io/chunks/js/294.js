export const id = 294;
export const ids = [294];
export const modules = {
  41509: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      installImageBitmapTextureLoader: () => Cd
    });
    var pd = kd(39851),
      Nd = kd(41515),
      Wd = kd(3062);

    function Pd(dd, Jd) {
      if ("string" === typeof dd) {
        const kd = (0, Wd.g)(dd);
        return kd ? new Blob([(0, Wd.e)(kd.base64)], {
          type: kd.mimeType || Jd
        }) : null
      }
      return dd instanceof Blob ? dd : new Blob([dd], {
        type: Jd
      })
    }
    const Zd = function(dd, Jd, kd, pd) {
      let Wd, Zd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        gd = arguments.length > 5 ? arguments[5] : void 0,
        Cd = arguments.length > 6 ? arguments[6] : void 0;
      try {
        Wd = Pd(dd, Zd)
      } catch {
        Wd = null
      }
      return Wd ? (createImageBitmap(Wd, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...gd
      }).then((dd => {
        Jd(dd)
      }), (() => {
        (0, Nd.i)(dd, Jd, kd, pd, Zd, gd, Cd)
      })), null) : (0, Nd.i)(dd, Jd, kd, pd, Zd, gd, Cd)
    };
    let gd = "idle";

    function Cd() {
      "idle" === gd && "function" === typeof createImageBitmap && (gd = "pending", async function() {
        const dd = document.createElement("canvas");
        dd.width = 1, dd.height = 2;
        const Jd = dd.getContext("2d");
        if (!Jd) throw new Error("2d context unavailable");
        Jd.fillStyle = "#f00", Jd.fillRect(0, 0, 1, 1), Jd.fillStyle = "#0f0", Jd.fillRect(0, 1, 1, 1);
        const kd = Pd(dd.toDataURL(), "");
        if (!kd) throw new Error("toDataURL did not produce a base64 data URL");
        const pd = await createImageBitmap(kd, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        Jd.drawImage(pd, 0, 0);
        const Nd = Jd.getImageData(0, 0, 1, 1).data;
        return Nd[1] > Nd[0]
      }().catch((() => (gd = "idle", !1))).then((dd => {
        "pending" === gd && (gd = "concluded"), dd && (pd.d.loadImage = Zd)
      })))
    }
  },
  41515: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => pd.i,
      i: () => pd.r
    });
    var pd = kd(40007);
    (0, pd.w)()
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);