export const id = 278;
export const ids = [278];
export const modules = {
  39495: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      installImageBitmapTextureLoader: () => Pc
    });
    var Vc = nc(37945),
      Ic = nc(39500),
      rB = nc(2374);

    function uc(cB, Bc) {
      if ("string" === typeof cB) {
        const nc = (0, rB.h)(cB);
        return nc ? new Blob([(0, rB.d)(nc.base64)], {
          type: nc.mimeType || Bc
        }) : null
      }
      return cB instanceof Blob ? cB : new Blob([cB], {
        type: Bc
      })
    }
    const sc = function(cB, Bc, nc, Vc) {
      let rB, sc = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        Mc = arguments.length > 5 ? arguments[5] : void 0,
        Pc = arguments.length > 6 ? arguments[6] : void 0;
      try {
        rB = uc(cB, sc)
      } catch {
        rB = null
      }
      return rB ? (createImageBitmap(rB, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...Mc
      }).then((cB => {
        Bc(cB)
      }), (() => {
        (0, Ic.h)(cB, Bc, nc, Vc, sc, Mc, Pc)
      })), null) : (0, Ic.h)(cB, Bc, nc, Vc, sc, Mc, Pc)
    };
    let Mc = "idle";

    function Pc() {
      "idle" === Mc && "function" === typeof createImageBitmap && (Mc = "pending", async function() {
        const cB = document.createElement("canvas");
        cB.width = 1, cB.height = 2;
        const Bc = cB.getContext("2d");
        if (!Bc) throw new Error("2d context unavailable");
        Bc.fillStyle = "#f00", Bc.fillRect(0, 0, 1, 1), Bc.fillStyle = "#0f0", Bc.fillRect(0, 1, 1, 1);
        const nc = uc(cB.toDataURL(), "");
        if (!nc) throw new Error("toDataURL did not produce a base64 data URL");
        const Vc = await createImageBitmap(nc, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        Bc.drawImage(Vc, 0, 0);
        const Ic = Bc.getImageData(0, 0, 1, 1).data;
        return Ic[1] > Ic[0]
      }().catch((() => (Mc = "idle", !1))).then((cB => {
        "pending" === Mc && (Mc = "concluded"), cB && (Vc.c.loadImage = sc)
      })))
    }
  },
  39500: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc.h,
      h: () => Vc.p
    });
    var Vc = nc(38090);
    (0, Vc.t)()
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);