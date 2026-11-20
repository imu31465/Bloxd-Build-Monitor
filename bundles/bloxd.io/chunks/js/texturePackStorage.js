export const id = 53;
export const ids = [53];
export const modules = {
  9140: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      announceStoredTexturePack: () => Ob.b,
      takeOneShotTexturePack: () => Bb.k
    });
    var Bb = hb(9145),
      Ob = hb(9154)
  },
  9154: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob,
      c: () => Gb
    });
    var Bb = hb(3048);

    function Ob() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const bb = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const ub = new BroadcastChannel(Bb.n);
        ub.postMessage({
          stored: bb
        }), ub.close()
      } catch {
        return null
      }
      return bb
    }

    function Gb(bb) {
      const ub = "object" === typeof bb && null !== bb ? bb.stored : null;
      return "string" === typeof ub ? ub : null
    }
  },
  9145: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ub,
      h: () => Ob,
      k: () => Gb
    });
    var Bb = hb(3048);
    async function Ob(bb, ub, hb) {
      let Ob = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const Gb = Ub(await bb.getItem(Bb.f, ub));
      if (null === Gb || Ob()) return null;
      const Lb = await bb.getItem(Bb.j, ub);
      return Ob() ? null : (await async function(bb) {
        await Promise.all([bb.removeItem(Bb.f), bb.removeItem(Bb.j)])
      }(bb).catch(hb), {
        pack: Gb,
        source: "string" === typeof Lb ? Lb : null
      })
    }

    function Gb(bb) {
      return (0, Bb.t)() ? Promise.resolve(null) : Ob(bb, !1, (bb => {
        console.error("Error removing temporary texture pack: ", bb)
      }), Bb.t)
    }

    function Ub(bb) {
      if ("object" !== typeof bb || null === bb) return null;
      const ub = bb.metaData;
      return "object" !== typeof ub || null === ub || "string" !== typeof ub.id ? null : bb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);