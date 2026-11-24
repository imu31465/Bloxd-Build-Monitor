export const id = 307;
export const ids = [307];
export const modules = {
  41792: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      installImageBitmapTextureLoader: () => Yp
    });
    var Op = cp(40088),
      op = cp(41798),
      Ip = cp(3309);

    function Sp(pp, ip) {
      if ("string" === typeof pp) {
        const cp = (0, Ip.h)(pp);
        return cp ? new Blob([(0, Ip.d)(cp.base64)], {
          type: cp.mimeType || ip
        }) : null
      }
      return pp instanceof Blob ? pp : new Blob([pp], {
        type: ip
      })
    }
    const xp = function(pp, ip, cp, Op) {
      let Ip, xp = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        Lp = arguments.length > 5 ? arguments[5] : void 0,
        Yp = arguments.length > 6 ? arguments[6] : void 0;
      try {
        Ip = Sp(pp, xp)
      } catch {
        Ip = null
      }
      return Ip ? (createImageBitmap(Ip, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none",
        ...Lp
      }).then((pp => {
        ip(pp)
      }), (() => {
        (0, op.d)(pp, ip, cp, Op, xp, Lp, Yp)
      })), null) : (0, op.d)(pp, ip, cp, Op, xp, Lp, Yp)
    };
    let Lp = "idle";

    function Yp() {
      "idle" === Lp && "function" === typeof createImageBitmap && (Lp = "pending", async function() {
        const pp = document.createElement("canvas");
        pp.width = 1, pp.height = 2;
        const ip = pp.getContext("2d");
        if (!ip) throw new Error("2d context unavailable");
        ip.fillStyle = "#f00", ip.fillRect(0, 0, 1, 1), ip.fillStyle = "#0f0", ip.fillRect(0, 1, 1, 1);
        const cp = Sp(pp.toDataURL(), "");
        if (!cp) throw new Error("toDataURL did not produce a base64 data URL");
        const Op = await createImageBitmap(cp, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: "flipY"
        });
        ip.drawImage(Op, 0, 0);
        const op = ip.getImageData(0, 0, 1, 1).data;
        return op[1] > op[0]
      }().catch((() => (Lp = "idle", !1))).then((pp => {
        "pending" === Lp && (Lp = "concluded"), pp && (Op.c.loadImage = xp)
      })))
    }
  },
  41798: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op.g,
      d: () => Op.p
    });
    var Op = cp(40257);
    (0, Op.u)()
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);