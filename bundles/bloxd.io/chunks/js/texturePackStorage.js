export const id = 52;
export const ids = [52];
export const modules = {
  9091: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      announceStoredTexturePack: () => pD.d,
      takeOneShotTexturePack: () => ID.f
    });
    var ID = cD(9097),
      pD = cD(9105)
  },
  9105: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => pD,
      g: () => iD
    });
    var ID = cD(3064);

    function pD() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const DD = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const CD = new BroadcastChannel(ID.k);
        CD.postMessage({
          stored: DD
        }), CD.close()
      } catch {
        return null
      }
      return DD
    }

    function iD(DD) {
      const CD = "object" === typeof DD && null !== DD ? DD.stored : null;
      return "string" === typeof CD ? CD : null
    }
  },
  9097: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD,
      d: () => pD,
      f: () => iD
    });
    var ID = cD(3064);
    async function pD(DD, CD, cD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const iD = fD(await DD.getItem(ID.f, CD));
      if (null === iD || pD()) return null;
      const bD = await DD.getItem(ID.j, CD);
      return pD() ? null : (await async function(DD) {
        await Promise.all([DD.removeItem(ID.f), DD.removeItem(ID.j)])
      }(DD).catch(cD), {
        pack: iD,
        source: "string" === typeof bD ? bD : null
      })
    }

    function iD(DD) {
      return (0, ID.r)() ? Promise.resolve(null) : pD(DD, !1, (DD => {
        console.error("Error removing temporary texture pack: ", DD)
      }), ID.r)
    }

    function fD(DD) {
      if ("object" !== typeof DD || null === DD) return null;
      const CD = DD.metaData;
      return "object" !== typeof CD || null === CD || "string" !== typeof CD.id ? null : DD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);