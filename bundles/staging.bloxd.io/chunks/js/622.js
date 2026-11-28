export const id = 622;
export const ids = [622];
export const modules = {
  53836: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      installImageBitmapTextureLoader: () => Lb
    });
    var eb = Mb(41548),
      Hb = Mb(53845),
      pb = Mb(4574);

    function Vb(bb, wb) {
      if ("string" === typeof bb) {
        const Mb = (0, pb.i)(bb);
        return Mb ? new Blob([(0, pb.c)(Mb.base64)], {
          type: Mb.mimeType || wb
        }) : null
      }
      return bb instanceof Blob ? bb : new Blob([bb], {
        type: wb
      })
    }
    const gb = function(bb, wb, Mb, eb) {
      let pb, gb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        lb = arguments.length > 5 ? arguments[5] : void 0,
        Lb = arguments.length > 6 ? arguments[6] : void 0;
      try {
        pb = Vb(bb, gb)
      } catch {
        pb = null
      }
      return pb ? (createImageBitmap(pb, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...lb
      }).then((bb => {
        wb(bb)
      }), (() => {
        (0, Hb.i)(bb, wb, Mb, eb, gb, lb, Lb)
      })), null) : (0, Hb.i)(bb, wb, Mb, eb, gb, lb, Lb)
    };
    let lb = "idle";

    function Lb() {
      "idle" === lb && "function" === typeof createImageBitmap && (lb = "pending", async function() {
        const bb = document.createElement("canvas");
        bb.width = 1, bb.height = 2;
        const wb = bb.getContext("2d");
        if (!wb) throw new Error("2d context unavailable");
        wb.fillStyle = "#f00", wb.fillRect(0, 0, 1, 1), wb.fillStyle = "#0f0", wb.fillRect(0, 1, 1, 1);
        const Mb = Vb(bb.toDataURL(), "");
        if (!Mb) throw new Error("toDataURL did not produce a base64 data URL");
        const eb = await createImageBitmap(Mb, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        wb.drawImage(eb, 0, 0);
        const Hb = wb.getImageData(0, 0, 1, 1).data;
        return Hb[1] > Hb[0]
      }().catch((() => (lb = "idle", !1))).then((bb => {
        "pending" === lb && (lb = "concluded"), bb && (eb.d.loadImage = gb)
      })))
    }
  },
  53845: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb.d,
      i: () => eb.o
    });
    var eb = Mb(41722);
    (0, eb.t)()
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);