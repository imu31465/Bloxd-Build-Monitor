export const id = 68;
export const ids = [68];
export const modules = {
  35399: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      announceStoredTexturePack: () => Hb.b,
      takeOneShotTexturePack: () => eb.g
    });
    var eb = Mb(35407),
      Hb = Mb(35410)
  },
  35410: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb,
      c: () => pb
    });
    var eb = Mb(4615);

    function Hb() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const bb = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const wb = new BroadcastChannel(eb.k);
        wb.postMessage({
          stored: bb
        }), wb.close()
      } catch {
        return null
      }
      return bb
    }

    function pb(bb) {
      const wb = "object" === typeof bb && null !== bb ? bb.stored : null;
      return "string" === typeof wb ? wb : null
    }
  },
  35407: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Vb,
      f: () => Hb,
      g: () => pb
    });
    var eb = Mb(4615);
    async function Hb(bb, wb, Mb) {
      let Hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const pb = Vb(await bb.getItem(eb.c, wb));
      if (null === pb || Hb()) return null;
      const gb = await bb.getItem(eb.g, wb);
      return Hb() ? null : (await async function(bb) {
        await Promise.all([bb.removeItem(eb.c), bb.removeItem(eb.g)])
      }(bb).catch(Mb), {
        pack: pb,
        source: "string" === typeof gb ? gb : null
      })
    }

    function pb(bb) {
      return (0, eb.q)() ? Promise.resolve(null) : Hb(bb, !1, (bb => {
        console.error("Error removing temporary texture pack: ", bb)
      }), eb.q)
    }

    function Vb(bb) {
      if ("object" !== typeof bb || null === bb) return null;
      const wb = bb.metaData;
      return "object" !== typeof wb || null === wb || "string" !== typeof wb.id ? null : bb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);