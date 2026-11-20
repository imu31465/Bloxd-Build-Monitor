export const id = 53;
export const ids = [53];
export const modules = {
  9059: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      announceStoredTexturePack: () => Sv.d,
      takeOneShotTexturePack: () => hv.f
    });
    var hv = Pv(9063),
      Sv = Pv(9066)
  },
  9066: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Sv,
      f: () => ev
    });
    var hv = Pv(3026);

    function Sv() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const vv = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const zv = new BroadcastChannel(hv.j);
        zv.postMessage({
          stored: vv
        }), zv.close()
      } catch {
        return null
      }
      return vv
    }

    function ev(vv) {
      const zv = "object" === typeof vv && null !== vv ? vv.stored : null;
      return "string" === typeof zv ? zv : null
    }
  },
  9063: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => gv,
      d: () => Sv,
      f: () => ev
    });
    var hv = Pv(3026);
    async function Sv(vv, zv, Pv) {
      let Sv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const ev = gv(await vv.getItem(hv.d, zv));
      if (null === ev || Sv()) return null;
      const pv = await vv.getItem(hv.h, zv);
      return Sv() ? null : (await async function(vv) {
        await Promise.all([vv.removeItem(hv.d), vv.removeItem(hv.h)])
      }(vv).catch(Pv), {
        pack: ev,
        source: "string" === typeof pv ? pv : null
      })
    }

    function ev(vv) {
      return (0, hv.o)() ? Promise.resolve(null) : Sv(vv, !1, (vv => {
        console.error("Error removing temporary texture pack: ", vv)
      }), hv.o)
    }

    function gv(vv) {
      if ("object" !== typeof vv || null === vv) return null;
      const zv = vv.metaData;
      return "object" !== typeof zv || null === zv || "string" !== typeof zv.id ? null : vv
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);