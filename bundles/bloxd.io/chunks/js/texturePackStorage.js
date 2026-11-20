export const id = 52;
export const ids = [52];
export const modules = {
  8974: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      announceStoredTexturePack: () => Wb.d,
      takeOneShotTexturePack: () => kb.e
    });
    var kb = sb(8981),
      Wb = sb(8988)
  },
  8988: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Wb,
      g: () => ab
    });
    var kb = sb(3029);

    function Wb() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const bb = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const cb = new BroadcastChannel(kb.j);
        cb.postMessage({
          stored: bb
        }), cb.close()
      } catch {
        return null
      }
      return bb
    }

    function ab(bb) {
      const cb = "object" === typeof bb && null !== bb ? bb.stored : null;
      return "string" === typeof cb ? cb : null
    }
  },
  8981: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Tb,
      c: () => Wb,
      e: () => ab
    });
    var kb = sb(3029);
    async function Wb(bb, cb, sb) {
      let Wb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const ab = Tb(await bb.getItem(kb.f, cb));
      if (null === ab || Wb()) return null;
      const Ub = await bb.getItem(kb.h, cb);
      return Wb() ? null : (await async function(bb) {
        await Promise.all([bb.removeItem(kb.f), bb.removeItem(kb.h)])
      }(bb).catch(sb), {
        pack: ab,
        source: "string" === typeof Ub ? Ub : null
      })
    }

    function ab(bb) {
      return (0, kb.n)() ? Promise.resolve(null) : Wb(bb, !1, (bb => {
        console.error("Error removing temporary texture pack: ", bb)
      }), kb.n)
    }

    function Tb(bb) {
      if ("object" !== typeof bb || null === bb) return null;
      const cb = bb.metaData;
      return "object" !== typeof cb || null === cb || "string" !== typeof cb.id ? null : bb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);