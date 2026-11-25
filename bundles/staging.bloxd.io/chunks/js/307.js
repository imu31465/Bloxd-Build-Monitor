export const id = 307;
export const ids = [307];
export const modules = {
  41793: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      installImageBitmapTextureLoader: () => Ht
    });
    var Ot = Vt(40076),
      qt = Vt(41795),
      Dt = Vt(3266);

    function mt(tt, et) {
      if ("string" === typeof tt) {
        const Vt = (0, Dt.g)(tt);
        return Vt ? new Blob([(0, Dt.c)(Vt.base64)], {
          type: Vt.mimeType || et
        }) : null
      }
      return tt instanceof Blob ? tt : new Blob([tt], {
        type: et
      })
    }
    const dt = function(tt, et, Vt, Ot) {
      let Dt, dt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        jt = arguments.length > 5 ? arguments[5] : void 0,
        Ht = arguments.length > 6 ? arguments[6] : void 0;
      try {
        Dt = mt(tt, dt)
      } catch {
        Dt = null
      }
      return Dt ? (createImageBitmap(Dt, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...jt
      }).then((tt => {
        et(tt)
      }), (() => {
        (0, qt.g)(tt, et, Vt, Ot, dt, jt, Ht)
      })), null) : (0, qt.g)(tt, et, Vt, Ot, dt, jt, Ht)
    };
    let jt = "idle";

    function Ht() {
      "idle" === jt && "function" === typeof createImageBitmap && (jt = "pending", async function() {
        const tt = document.createElement("canvas");
        tt.width = 1, tt.height = 2;
        const et = tt.getContext("2d");
        if (!et) throw new Error("2d context unavailable");
        et.fillStyle = "#f00", et.fillRect(0, 0, 1, 1), et.fillStyle = "#0f0", et.fillRect(0, 1, 1, 1);
        const Vt = mt(tt.toDataURL(), "");
        if (!Vt) throw new Error("toDataURL did not produce a base64 data URL");
        const Ot = await createImageBitmap(Vt, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        et.drawImage(Ot, 0, 0);
        const qt = et.getImageData(0, 0, 1, 1).data;
        return qt[1] > qt[0]
      }().catch((() => (jt = "idle", !1))).then((tt => {
        "pending" === jt && (jt = "concluded"), tt && (Ot.c.loadImage = dt)
      })))
    }
  },
  41795: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot.j,
      g: () => Ot.p
    });
    var Ot = Vt(40249);
    (0, Ot.u)()
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);