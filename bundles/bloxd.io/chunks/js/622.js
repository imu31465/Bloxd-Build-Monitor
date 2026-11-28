export const id = 622;
export const ids = [622];
export const modules = {
  54045: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      installImageBitmapTextureLoader: () => vd
    });
    var Wd = md(41810),
      Fd = md(54047),
      Rd = md(4421);

    function Xd(dd, Od) {
      if ("string" === typeof dd) {
        const md = (0, Rd.f)(dd);
        return md ? new Blob([(0, Rd.b)(md.base64)], {
          type: md.mimeType || Od
        }) : null
      }
      return dd instanceof Blob ? dd : new Blob([dd], {
        type: Od
      })
    }
    const Kd = function(dd, Od, md, Wd) {
      let Rd, Kd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        hd = arguments.length > 5 ? arguments[5] : void 0,
        vd = arguments.length > 6 ? arguments[6] : void 0;
      try {
        Rd = Xd(dd, Kd)
      } catch {
        Rd = null
      }
      return Rd ? (createImageBitmap(Rd, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...hd
      }).then((dd => {
        Od(dd)
      }), (() => {
        (0, Fd.g)(dd, Od, md, Wd, Kd, hd, vd)
      })), null) : (0, Fd.g)(dd, Od, md, Wd, Kd, hd, vd)
    };
    let hd = "idle";

    function vd() {
      "idle" === hd && "function" === typeof createImageBitmap && (hd = "pending", async function() {
        const dd = document.createElement("canvas");
        dd.width = 1, dd.height = 2;
        const Od = dd.getContext("2d");
        if (!Od) throw new Error("2d context unavailable");
        Od.fillStyle = "#f00", Od.fillRect(0, 0, 1, 1), Od.fillStyle = "#0f0", Od.fillRect(0, 1, 1, 1);
        const md = Xd(dd.toDataURL(), "");
        if (!md) throw new Error("toDataURL did not produce a base64 data URL");
        const Wd = await createImageBitmap(md, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        Od.drawImage(Wd, 0, 0);
        const Fd = Od.getImageData(0, 0, 1, 1).data;
        return Fd[1] > Fd[0]
      }().catch((() => (hd = "idle", !1))).then((dd => {
        "pending" === hd && (hd = "concluded"), dd && (Wd.c.loadImage = Kd)
      })))
    }
  },
  54047: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd.e,
      g: () => Wd.h
    });
    var Wd = md(41961);
    (0, Wd.k)()
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);