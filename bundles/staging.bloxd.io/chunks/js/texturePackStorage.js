export const id = 55;
export const ids = [55];
export const modules = {
  34250: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      announceStoredTexturePack: () => sD.e,
      takeOneShotTexturePack: () => pD.f
    });
    var pD = wD(34257),
      sD = wD(34265)
  },
  34265: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => sD,
      g: () => KD
    });
    var pD = wD(3243);

    function sD() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const DD = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const zD = new BroadcastChannel(pD.m);
        zD.postMessage({
          stored: DD
        }), zD.close()
      } catch {
        return null
      }
      return DD
    }

    function KD(DD) {
      const zD = "object" === typeof DD && null !== DD ? DD.stored : null;
      return "string" === typeof zD ? zD : null
    }
  },
  34257: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => rD,
      e: () => sD,
      f: () => KD
    });
    var pD = wD(3243);
    async function sD(DD, zD, wD) {
      let sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const KD = rD(await DD.getItem(pD.h, zD));
      if (null === KD || sD()) return null;
      const LD = await DD.getItem(pD.k, zD);
      return sD() ? null : (await async function(DD) {
        await Promise.all([DD.removeItem(pD.h), DD.removeItem(pD.k)])
      }(DD).catch(wD), {
        pack: KD,
        source: "string" === typeof LD ? LD : null
      })
    }

    function KD(DD) {
      return (0, pD.t)() ? Promise.resolve(null) : sD(DD, !1, (DD => {
        console.error("Error removing temporary texture pack: ", DD)
      }), pD.t)
    }

    function rD(DD) {
      if ("object" !== typeof DD || null === DD) return null;
      const zD = DD.metaData;
      return "object" !== typeof zD || null === zD || "string" !== typeof zD.id ? null : DD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);