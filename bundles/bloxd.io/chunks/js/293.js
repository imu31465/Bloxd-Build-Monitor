export const id = 293;
export const ids = [293];
export const modules = {
  40678: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      installImageBitmapTextureLoader: () => eb
    });
    var Ab = Ub(38973),
      Mb = Ub(40684),
      Tb = Ub(2939);

    function Eb(bb, ab) {
      if ("string" === typeof bb) {
        const Ub = (0, Tb.d)(bb);
        return Ub ? new Blob([(0, Tb.b)(Ub.base64)], {
          type: Ub.mimeType || ab
        }) : null
      }
      return bb instanceof Blob ? bb : new Blob([bb], {
        type: ab
      })
    }
    const Yb = function(bb, ab, Ub, Ab) {
      let Tb, Yb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        Bb = arguments.length > 5 ? arguments[5] : void 0,
        eb = arguments.length > 6 ? arguments[6] : void 0;
      try {
        Tb = Eb(bb, Yb)
      } catch {
        Tb = null
      }
      return Tb ? (createImageBitmap(Tb, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...Bb
      }).then((bb => {
        ab(bb)
      }), (() => {
        (0, Mb.e)(bb, ab, Ub, Ab, Yb, Bb, eb)
      })), null) : (0, Mb.e)(bb, ab, Ub, Ab, Yb, Bb, eb)
    };
    let Bb = "idle";

    function eb() {
      "idle" === Bb && "function" === typeof createImageBitmap && (Bb = "pending", async function() {
        const bb = document.createElement("canvas");
        bb.width = 1, bb.height = 2;
        const ab = bb.getContext("2d");
        if (!ab) throw new Error("2d context unavailable");
        ab.fillStyle = "#f00", ab.fillRect(0, 0, 1, 1), ab.fillStyle = "#0f0", ab.fillRect(0, 1, 1, 1);
        const Ub = Eb(bb.toDataURL(), "");
        if (!Ub) throw new Error("toDataURL did not produce a base64 data URL");
        const Ab = await createImageBitmap(Ub, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        ab.drawImage(Ab, 0, 0);
        const Mb = ab.getImageData(0, 0, 1, 1).data;
        return Mb[1] > Mb[0]
      }().catch((() => (Bb = "idle", !1))).then((bb => {
        "pending" === Bb && (Bb = "concluded"), bb && (Ab.c.loadImage = Yb)
      })))
    }
  },
  40684: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Ab.h,
      e: () => Ab.m
    });
    var Ab = Ub(39146);
    (0, Ab.q)()
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);