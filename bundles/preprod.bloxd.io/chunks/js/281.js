export const id = 281;
export const ids = [281];
export const modules = {
  39994: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      installImageBitmapTextureLoader: () => oy
    });
    var Uy = Wy(38338),
      hy = Wy(39996),
      fy = Wy(2515);

    function Zy(yb, bb) {
      if ("string" === typeof yb) {
        const Wy = (0, fy.f)(yb);
        return Wy ? new Blob([(0, fy.b)(Wy.base64)], {
          type: Wy.mimeType || bb
        }) : null
      }
      return yb instanceof Blob ? yb : new Blob([yb], {
        type: bb
      })
    }
    const cb = function(yb, bb, Wy, Uy) {
      let fy, cb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        Py = arguments.length > 5 ? arguments[5] : void 0,
        oy = arguments.length > 6 ? arguments[6] : void 0;
      try {
        fy = Zy(yb, cb)
      } catch {
        fy = null
      }
      return fy ? (createImageBitmap(fy, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...Py
      }).then((yb => {
        bb(yb)
      }), (() => {
        (0, hy.f)(yb, bb, Wy, Uy, cb, Py, oy)
      })), null) : (0, hy.f)(yb, bb, Wy, Uy, cb, Py, oy)
    };
    let Py = "idle";

    function oy() {
      "idle" === Py && "function" === typeof createImageBitmap && (Py = "pending", async function() {
        const yb = document.createElement("canvas");
        yb.width = 1, yb.height = 2;
        const bb = yb.getContext("2d");
        if (!bb) throw new Error("2d context unavailable");
        bb.fillStyle = "#f00", bb.fillRect(0, 0, 1, 1), bb.fillStyle = "#0f0", bb.fillRect(0, 1, 1, 1);
        const Wy = Zy(yb.toDataURL(), "");
        if (!Wy) throw new Error("toDataURL did not produce a base64 data URL");
        const Uy = await createImageBitmap(Wy, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        bb.drawImage(Uy, 0, 0);
        const hy = bb.getImageData(0, 0, 1, 1).data;
        return hy[1] > hy[0]
      }().catch((() => (Py = "idle", !1))).then((yb => {
        "pending" === Py && (Py = "concluded"), yb && (Uy.c.loadImage = cb)
      })))
    }
  },
  39996: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy.m,
      f: () => Uy.x
    });
    var Uy = Wy(38511);
    (0, Uy.D)()
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);