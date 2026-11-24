export const id = 56;
export const ids = [56];
export const modules = {
  34247: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      announceStoredTexturePack: () => JB.e,
      takeOneShotTexturePack: () => TB.f
    });
    var TB = ZB(34251),
      JB = ZB(34253)
  },
  34253: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB,
      g: () => oB
    });
    var TB = ZB(3418);

    function JB() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const BB = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const IB = new BroadcastChannel(TB.n);
        IB.postMessage({
          stored: BB
        }), IB.close()
      } catch {
        return null
      }
      return BB
    }

    function oB(BB) {
      const IB = "object" === typeof BB && null !== BB ? BB.stored : null;
      return "string" === typeof IB ? IB : null
    }
  },
  34251: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => GB,
      e: () => JB,
      f: () => oB
    });
    var TB = ZB(3418);
    async function JB(BB, IB, ZB) {
      let JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const oB = GB(await BB.getItem(TB.i, IB));
      if (null === oB || JB()) return null;
      const vB = await BB.getItem(TB.k, IB);
      return JB() ? null : (await async function(BB) {
        await Promise.all([BB.removeItem(TB.i), BB.removeItem(TB.k)])
      }(BB).catch(ZB), {
        pack: oB,
        source: "string" === typeof vB ? vB : null
      })
    }

    function oB(BB) {
      return (0, TB.t)() ? Promise.resolve(null) : JB(BB, !1, (BB => {
        console.error("Error removing temporary texture pack: ", BB)
      }), TB.t)
    }

    function GB(BB) {
      if ("object" !== typeof BB || null === BB) return null;
      const IB = BB.metaData;
      return "object" !== typeof IB || null === IB || "string" !== typeof IB.id ? null : BB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);