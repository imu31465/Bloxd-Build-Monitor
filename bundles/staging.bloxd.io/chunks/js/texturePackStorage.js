export const id = 48;
export const ids = [48];
export const modules = {
  8606: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      announceStoredTexturePack: () => yB.c,
      takeOneShotTexturePack: () => VB.g
    });
    var VB = dB(8609),
      yB = dB(8615)
  },
  8615: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => yB,
      g: () => pB
    });
    var VB = dB(2743);

    function yB() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const BB = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const TB = new BroadcastChannel(VB.k);
        TB.postMessage({
          stored: BB
        }), TB.close()
      } catch {
        return null
      }
      return BB
    }

    function pB(BB) {
      const TB = "object" === typeof BB && null !== BB ? BB.stored : null;
      return "string" === typeof TB ? TB : null
    }
  },
  8609: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => lB,
      f: () => yB,
      g: () => pB
    });
    var VB = dB(2743);
    async function yB(BB, TB, dB) {
      let yB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const pB = lB(await BB.getItem(VB.g, TB));
      if (null === pB || yB()) return null;
      const JB = await BB.getItem(VB.h, TB);
      return yB() ? null : (await async function(BB) {
        await Promise.all([BB.removeItem(VB.g), BB.removeItem(VB.h)])
      }(BB).catch(dB), {
        pack: pB,
        source: "string" === typeof JB ? JB : null
      })
    }

    function pB(BB) {
      return (0, VB.r)() ? Promise.resolve(null) : yB(BB, !1, (BB => {
        console.error("Error removing temporary texture pack: ", BB)
      }), VB.r)
    }

    function lB(BB) {
      if ("object" !== typeof BB || null === BB) return null;
      const TB = BB.metaData;
      return "object" !== typeof TB || null === TB || "string" !== typeof TB.id ? null : BB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);