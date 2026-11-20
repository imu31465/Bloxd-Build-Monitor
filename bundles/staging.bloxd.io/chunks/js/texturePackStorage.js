export const id = 52;
export const ids = [52];
export const modules = {
  9042: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      announceStoredTexturePack: () => pU.d,
      takeOneShotTexturePack: () => tU.m
    });
    var tU = gU(9045),
      pU = gU(9051)
  },
  9051: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => pU,
      h: () => EU
    });
    var tU = gU(2959);

    function pU() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const UU = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const RU = new BroadcastChannel(tU.j);
        RU.postMessage({
          stored: UU
        }), RU.close()
      } catch {
        return null
      }
      return UU
    }

    function EU(UU) {
      const RU = "object" === typeof UU && null !== UU ? UU.stored : null;
      return "string" === typeof RU ? RU : null
    }
  },
  9045: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => PU,
      i: () => pU,
      m: () => EU
    });
    var tU = gU(2959);
    async function pU(UU, RU, gU) {
      let pU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const EU = PU(await UU.getItem(tU.e, RU));
      if (null === EU || pU()) return null;
      const TU = await UU.getItem(tU.i, RU);
      return pU() ? null : (await async function(UU) {
        await Promise.all([UU.removeItem(tU.e), UU.removeItem(tU.i)])
      }(UU).catch(gU), {
        pack: EU,
        source: "string" === typeof TU ? TU : null
      })
    }

    function EU(UU) {
      return (0, tU.s)() ? Promise.resolve(null) : pU(UU, !1, (UU => {
        console.error("Error removing temporary texture pack: ", UU)
      }), tU.s)
    }

    function PU(UU) {
      if ("object" !== typeof UU || null === UU) return null;
      const RU = UU.metaData;
      return "object" !== typeof RU || null === RU || "string" !== typeof RU.id ? null : UU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);