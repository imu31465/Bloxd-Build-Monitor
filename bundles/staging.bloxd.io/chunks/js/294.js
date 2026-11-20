export const id = 294;
export const ids = [294];
export const modules = {
  40839: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      installImageBitmapTextureLoader: () => Nv
    });
    var hv = Pv(39184),
      Sv = Pv(40846),
      ev = Pv(2982);

    function gv(vv, zv) {
      if ("string" === typeof vv) {
        const Pv = (0, ev.i)(vv);
        return Pv ? new Blob([(0, ev.e)(Pv.base64)], {
          type: Pv.mimeType || zv
        }) : null
      }
      return vv instanceof Blob ? vv : new Blob([vv], {
        type: zv
      })
    }
    const pv = function(vv, zv, Pv, hv) {
      let ev, pv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        dv = arguments.length > 5 ? arguments[5] : void 0,
        Nv = arguments.length > 6 ? arguments[6] : void 0;
      try {
        ev = gv(vv, pv)
      } catch {
        ev = null
      }
      return ev ? (createImageBitmap(ev, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...dv
      }).then((vv => {
        zv(vv)
      }), (() => {
        (0, Sv.e)(vv, zv, Pv, hv, pv, dv, Nv)
      })), null) : (0, Sv.e)(vv, zv, Pv, hv, pv, dv, Nv)
    };
    let dv = "idle";

    function Nv() {
      "idle" === dv && "function" === typeof createImageBitmap && (dv = "pending", async function() {
        const vv = document.createElement("canvas");
        vv.width = 1, vv.height = 2;
        const zv = vv.getContext("2d");
        if (!zv) throw new Error("2d context unavailable");
        zv.fillStyle = "#f00", zv.fillRect(0, 0, 1, 1), zv.fillStyle = "#0f0", zv.fillRect(0, 1, 1, 1);
        const Pv = gv(vv.toDataURL(), "");
        if (!Pv) throw new Error("toDataURL did not produce a base64 data URL");
        const hv = await createImageBitmap(Pv, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        zv.drawImage(hv, 0, 0);
        const Sv = zv.getImageData(0, 0, 1, 1).data;
        return Sv[1] > Sv[0]
      }().catch((() => (dv = "idle", !1))).then((vv => {
        "pending" === dv && (dv = "concluded"), vv && (hv.b.loadImage = pv)
      })))
    }
  },
  40846: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => hv.i,
      e: () => hv.n
    });
    var hv = Pv(39338);
    (0, hv.v)()
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);