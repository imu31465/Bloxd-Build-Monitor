export const id = 67;
export const ids = [67];
export const modules = {
  35045: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      announceStoredTexturePack: () => rH.c,
      takeOneShotTexturePack: () => AH.g
    });
    var AH = LH(35048),
      rH = LH(35054)
  },
  35054: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH,
      f: () => SH
    });
    var AH = LH(3610);

    function rH() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const HH = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const BH = new BroadcastChannel(AH.f);
        BH.postMessage({
          stored: HH
        }), BH.close()
      } catch {
        return null
      }
      return HH
    }

    function SH(HH) {
      const BH = "object" === typeof HH && null !== HH ? HH.stored : null;
      return "string" === typeof BH ? BH : null
    }
  },
  35048: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH,
      f: () => rH,
      g: () => SH
    });
    var AH = LH(3610);
    async function rH(HH, BH, LH) {
      let rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const SH = hH(await HH.getItem(AH.c, BH));
      if (null === SH || rH()) return null;
      const tH = await HH.getItem(AH.e, BH);
      return rH() ? null : (await async function(HH) {
        await Promise.all([HH.removeItem(AH.c), HH.removeItem(AH.e)])
      }(HH).catch(LH), {
        pack: SH,
        source: "string" === typeof tH ? tH : null
      })
    }

    function SH(HH) {
      return (0, AH.o)() ? Promise.resolve(null) : rH(HH, !1, (HH => {
        console.error("Error removing temporary texture pack: ", HH)
      }), AH.o)
    }

    function hH(HH) {
      if ("object" !== typeof HH || null === HH) return null;
      const BH = HH.metaData;
      return "object" !== typeof BH || null === BH || "string" !== typeof BH.id ? null : HH
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);