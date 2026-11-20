export const id = 293;
export const ids = [293];
export const modules = {
  40956: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      installImageBitmapTextureLoader: () => Hb
    });
    var kb = sb(39287),
      Wb = sb(40961),
      ab = sb(2959);

    function Tb(bb, cb) {
      if ("string" === typeof bb) {
        const sb = (0, ab.e)(bb);
        return sb ? new Blob([(0, ab.b)(sb.base64)], {
          type: sb.mimeType || cb
        }) : null
      }
      return bb instanceof Blob ? bb : new Blob([bb], {
        type: cb
      })
    }
    const Ub = function(bb, cb, sb, kb) {
      let ab, Ub = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        Ib = arguments.length > 5 ? arguments[5] : void 0,
        Hb = arguments.length > 6 ? arguments[6] : void 0;
      try {
        ab = Tb(bb, Ub)
      } catch {
        ab = null
      }
      return ab ? (createImageBitmap(ab, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...Ib
      }).then((bb => {
        cb(bb)
      }), (() => {
        (0, Wb.g)(bb, cb, sb, kb, Ub, Ib, Hb)
      })), null) : (0, Wb.g)(bb, cb, sb, kb, Ub, Ib, Hb)
    };
    let Ib = "idle";

    function Hb() {
      "idle" === Ib && "function" === typeof createImageBitmap && (Ib = "pending", async function() {
        const bb = document.createElement("canvas");
        bb.width = 1, bb.height = 2;
        const cb = bb.getContext("2d");
        if (!cb) throw new Error("2d context unavailable");
        cb.fillStyle = "#f00", cb.fillRect(0, 0, 1, 1), cb.fillStyle = "#0f0", cb.fillRect(0, 1, 1, 1);
        const sb = Tb(bb.toDataURL(), "");
        if (!sb) throw new Error("toDataURL did not produce a base64 data URL");
        const kb = await createImageBitmap(sb, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        cb.drawImage(kb, 0, 0);
        const Wb = cb.getImageData(0, 0, 1, 1).data;
        return Wb[1] > Wb[0]
      }().catch((() => (Ib = "idle", !1))).then((bb => {
        "pending" === Ib && (Ib = "concluded"), bb && (kb.c.loadImage = Ub)
      })))
    }
  },
  40961: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb.g,
      g: () => kb.m
    });
    var kb = sb(39466);
    (0, kb.o)()
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);