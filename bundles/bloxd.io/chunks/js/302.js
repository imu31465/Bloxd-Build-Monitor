export const id = 302;
export const ids = [302];
export const modules = {
  41584: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      installImageBitmapTextureLoader: () => im
    });
    var hm = fm(39986),
      Am = fm(41589),
      am = fm(3197);

    function xm(mm, Tm) {
      if ("string" === typeof mm) {
        const fm = (0, am.h)(mm);
        return fm ? new Blob([(0, am.d)(fm.base64)], {
          type: fm.mimeType || Tm
        }) : null
      }
      return mm instanceof Blob ? mm : new Blob([mm], {
        type: Tm
      })
    }
    const wm = function(mm, Tm, fm, hm) {
      let am, wm = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        Dm = arguments.length > 5 ? arguments[5] : void 0,
        im = arguments.length > 6 ? arguments[6] : void 0;
      try {
        am = xm(mm, wm)
      } catch {
        am = null
      }
      return am ? (createImageBitmap(am, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...Dm
      }).then((mm => {
        Tm(mm)
      }), (() => {
        (0, Am.i)(mm, Tm, fm, hm, wm, Dm, im)
      })), null) : (0, Am.i)(mm, Tm, fm, hm, wm, Dm, im)
    };
    let Dm = "idle";

    function im() {
      "idle" === Dm && "function" === typeof createImageBitmap && (Dm = "pending", async function() {
        const mm = document.createElement("canvas");
        mm.width = 1, mm.height = 2;
        const Tm = mm.getContext("2d");
        if (!Tm) throw new Error("2d context unavailable");
        Tm.fillStyle = "#f00", Tm.fillRect(0, 0, 1, 1), Tm.fillStyle = "#0f0", Tm.fillRect(0, 1, 1, 1);
        const fm = xm(mm.toDataURL(), "");
        if (!fm) throw new Error("toDataURL did not produce a base64 data URL");
        const hm = await createImageBitmap(fm, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        Tm.drawImage(hm, 0, 0);
        const Am = Tm.getImageData(0, 0, 1, 1).data;
        return Am[1] > Am[0]
      }().catch((() => (Dm = "idle", !1))).then((mm => {
        "pending" === Dm && (Dm = "concluded"), mm && (hm.c.loadImage = wm)
      })))
    }
  },
  41589: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm.k,
      i: () => hm.u
    });
    var hm = fm(40154);
    (0, hm.A)()
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);