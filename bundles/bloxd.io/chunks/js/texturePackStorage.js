export const id = 55;
export const ids = [55];
export const modules = {
  34283: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      announceStoredTexturePack: () => bS.d,
      takeOneShotTexturePack: () => tS.h
    });
    var tS = gS(34289),
      bS = gS(34297)
  },
  34297: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bS,
      f: () => XS
    });
    var tS = gS(3403);

    function bS() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const SS = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const HS = new BroadcastChannel(tS.h);
        HS.postMessage({
          stored: SS
        }), HS.close()
      } catch {
        return null
      }
      return SS
    }

    function XS(SS) {
      const HS = "object" === typeof SS && null !== SS ? SS.stored : null;
      return "string" === typeof HS ? HS : null
    }
  },
  34289: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => xS,
      e: () => bS,
      h: () => XS
    });
    var tS = gS(3403);
    async function bS(SS, HS, gS) {
      let bS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const XS = xS(await SS.getItem(tS.d, HS));
      if (null === XS || bS()) return null;
      const NS = await SS.getItem(tS.g, HS);
      return bS() ? null : (await async function(SS) {
        await Promise.all([SS.removeItem(tS.d), SS.removeItem(tS.g)])
      }(SS).catch(gS), {
        pack: XS,
        source: "string" === typeof NS ? NS : null
      })
    }

    function XS(SS) {
      return (0, tS.n)() ? Promise.resolve(null) : bS(SS, !1, (SS => {
        console.error("Error removing temporary texture pack: ", SS)
      }), tS.n)
    }

    function xS(SS) {
      if ("object" !== typeof SS || null === SS) return null;
      const HS = SS.metaData;
      return "object" !== typeof HS || null === HS || "string" !== typeof HS.id ? null : SS
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);