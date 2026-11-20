export const id = 52;
export const ids = [52];
export const modules = {
  8963: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      announceStoredTexturePack: () => Mb.b,
      takeOneShotTexturePack: () => Ab.g
    });
    var Ab = Ub(8966),
      Mb = Ub(8974)
  },
  8974: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Mb,
      d: () => Tb
    });
    var Ab = Ub(2972);

    function Mb() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const bb = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const ab = new BroadcastChannel(Ab.g);
        ab.postMessage({
          stored: bb
        }), ab.close()
      } catch {
        return null
      }
      return bb
    }

    function Tb(bb) {
      const ab = "object" === typeof bb && null !== bb ? bb.stored : null;
      return "string" === typeof ab ? ab : null
    }
  },
  8966: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Eb,
      f: () => Mb,
      g: () => Tb
    });
    var Ab = Ub(2972);
    async function Mb(bb, ab, Ub) {
      let Mb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const Tb = Eb(await bb.getItem(Ab.e, ab));
      if (null === Tb || Mb()) return null;
      const Yb = await bb.getItem(Ab.f, ab);
      return Mb() ? null : (await async function(bb) {
        await Promise.all([bb.removeItem(Ab.e), bb.removeItem(Ab.f)])
      }(bb).catch(Ub), {
        pack: Tb,
        source: "string" === typeof Yb ? Yb : null
      })
    }

    function Tb(bb) {
      return (0, Ab.p)() ? Promise.resolve(null) : Mb(bb, !1, (bb => {
        console.error("Error removing temporary texture pack: ", bb)
      }), Ab.p)
    }

    function Eb(bb) {
      if ("object" !== typeof bb || null === bb) return null;
      const ab = bb.metaData;
      return "object" !== typeof ab || null === ab || "string" !== typeof ab.id ? null : bb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);