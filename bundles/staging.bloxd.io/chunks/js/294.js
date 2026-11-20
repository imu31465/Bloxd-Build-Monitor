export const id = 294;
export const ids = [294];
export const modules = {
  40990: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      installImageBitmapTextureLoader: () => Sb
    });
    var Bb = hb(39331),
      Ob = hb(40993),
      Gb = hb(3005);

    function Ub(bb, ub) {
      if ("string" === typeof bb) {
        const hb = (0, Gb.f)(bb);
        return hb ? new Blob([(0, Gb.b)(hb.base64)], {
          type: hb.mimeType || ub
        }) : null
      }
      return bb instanceof Blob ? bb : new Blob([bb], {
        type: ub
      })
    }
    const Lb = function(bb, ub, hb, Bb) {
      let Gb, Lb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        Yb = arguments.length > 5 ? arguments[5] : void 0,
        Sb = arguments.length > 6 ? arguments[6] : void 0;
      try {
        Gb = Ub(bb, Lb)
      } catch {
        Gb = null
      }
      return Gb ? (createImageBitmap(Gb, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...Yb
      }).then((bb => {
        ub(bb)
      }), (() => {
        (0, Ob.e)(bb, ub, hb, Bb, Lb, Yb, Sb)
      })), null) : (0, Ob.e)(bb, ub, hb, Bb, Lb, Yb, Sb)
    };
    let Yb = "idle";

    function Sb() {
      "idle" === Yb && "function" === typeof createImageBitmap && (Yb = "pending", async function() {
        const bb = document.createElement("canvas");
        bb.width = 1, bb.height = 2;
        const ub = bb.getContext("2d");
        if (!ub) throw new Error("2d context unavailable");
        ub.fillStyle = "#f00", ub.fillRect(0, 0, 1, 1), ub.fillStyle = "#0f0", ub.fillRect(0, 1, 1, 1);
        const hb = Ub(bb.toDataURL(), "");
        if (!hb) throw new Error("toDataURL did not produce a base64 data URL");
        const Bb = await createImageBitmap(hb, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        ub.drawImage(Bb, 0, 0);
        const Ob = ub.getImageData(0, 0, 1, 1).data;
        return Ob[1] > Ob[0]
      }().catch((() => (Yb = "idle", !1))).then((bb => {
        "pending" === Yb && (Yb = "concluded"), bb && (Bb.c.loadImage = Lb)
      })))
    }
  },
  40993: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Bb.h,
      e: () => Bb.o
    });
    var Bb = hb(39511);
    (0, Bb.s)()
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);