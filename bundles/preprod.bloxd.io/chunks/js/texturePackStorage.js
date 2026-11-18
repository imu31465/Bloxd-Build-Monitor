export const id = 48;
export const ids = [48];
export const modules = {
  8442: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      announceStoredTexturePack: () => hy.c,
      takeOneShotTexturePack: () => Uy.h
    });
    var Uy = Wy(8444),
      hy = Wy(8449)
  },
  8449: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => hy,
      f: () => fy
    });
    var Uy = Wy(2586);

    function hy() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const yb = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const bb = new BroadcastChannel(Uy.k);
        bb.postMessage({
          stored: yb
        }), bb.close()
      } catch {
        return null
      }
      return yb
    }

    function fy(yb) {
      const bb = "object" === typeof yb && null !== yb ? yb.stored : null;
      return "string" === typeof bb ? bb : null
    }
  },
  8444: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Zy,
      e: () => hy,
      h: () => fy
    });
    var Uy = Wy(2586);
    async function hy(yb, bb, Wy) {
      let hy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const fy = Zy(await yb.getItem(Uy.d, bb));
      if (null === fy || hy()) return null;
      const cb = await yb.getItem(Uy.h, bb);
      return hy() ? null : (await async function(yb) {
        await Promise.all([yb.removeItem(Uy.d), yb.removeItem(Uy.h)])
      }(yb).catch(Wy), {
        pack: fy,
        source: "string" === typeof cb ? cb : null
      })
    }

    function fy(yb) {
      return (0, Uy.v)() ? Promise.resolve(null) : hy(yb, !1, (yb => {
        console.error("Error removing temporary texture pack: ", yb)
      }), Uy.v)
    }

    function Zy(yb) {
      if ("object" !== typeof yb || null === yb) return null;
      const bb = yb.metaData;
      return "object" !== typeof bb || null === bb || "string" !== typeof bb.id ? null : yb
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);