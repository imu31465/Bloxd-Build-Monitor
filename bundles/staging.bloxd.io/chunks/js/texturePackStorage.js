export const id = 56;
export const ids = [56];
export const modules = {
  34300: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      announceStoredTexturePack: () => nB.e,
      takeOneShotTexturePack: () => QB.f
    });
    var QB = zB(34302),
      nB = zB(34308)
  },
  34308: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => nB,
      g: () => dB
    });
    var QB = zB(3353);

    function nB() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const BB = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const jB = new BroadcastChannel(QB.l);
        jB.postMessage({
          stored: BB
        }), jB.close()
      } catch {
        return null
      }
      return BB
    }

    function dB(BB) {
      const jB = "object" === typeof BB && null !== BB ? BB.stored : null;
      return "string" === typeof jB ? jB : null
    }
  },
  34302: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB,
      e: () => nB,
      f: () => dB
    });
    var QB = zB(3353);
    async function nB(BB, jB, zB) {
      let nB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const dB = IB(await BB.getItem(QB.e, jB));
      if (null === dB || nB()) return null;
      const NB = await BB.getItem(QB.h, jB);
      return nB() ? null : (await async function(BB) {
        await Promise.all([BB.removeItem(QB.e), BB.removeItem(QB.h)])
      }(BB).catch(zB), {
        pack: dB,
        source: "string" === typeof NB ? NB : null
      })
    }

    function dB(BB) {
      return (0, QB.t)() ? Promise.resolve(null) : nB(BB, !1, (BB => {
        console.error("Error removing temporary texture pack: ", BB)
      }), QB.t)
    }

    function IB(BB) {
      if ("object" !== typeof BB || null === BB) return null;
      const jB = BB.metaData;
      return "object" !== typeof jB || null === jB || "string" !== typeof jB.id ? null : BB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);