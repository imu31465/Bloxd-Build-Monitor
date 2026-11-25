export const id = 56;
export const ids = [56];
export const modules = {
  34534: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      announceStoredTexturePack: () => SG.d,
      takeOneShotTexturePack: () => wG.i
    });
    var wG = ZG(34539),
      SG = ZG(34543)
  },
  34543: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => SG,
      g: () => LG
    });
    var wG = ZG(3230);

    function SG() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const GG = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const bG = new BroadcastChannel(wG.l);
        bG.postMessage({
          stored: GG
        }), bG.close()
      } catch {
        return null
      }
      return GG
    }

    function LG(GG) {
      const bG = "object" === typeof GG && null !== GG ? GG.stored : null;
      return "string" === typeof bG ? bG : null
    }
  },
  34539: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG,
      f: () => SG,
      i: () => LG
    });
    var wG = ZG(3230);
    async function SG(GG, bG, ZG) {
      let SG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const LG = yG(await GG.getItem(wG.h, bG));
      if (null === LG || SG()) return null;
      const kG = await GG.getItem(wG.i, bG);
      return SG() ? null : (await async function(GG) {
        await Promise.all([GG.removeItem(wG.h), GG.removeItem(wG.i)])
      }(GG).catch(ZG), {
        pack: LG,
        source: "string" === typeof kG ? kG : null
      })
    }

    function LG(GG) {
      return (0, wG.t)() ? Promise.resolve(null) : SG(GG, !1, (GG => {
        console.error("Error removing temporary texture pack: ", GG)
      }), wG.t)
    }

    function yG(GG) {
      if ("object" !== typeof GG || null === GG) return null;
      const bG = GG.metaData;
      return "object" !== typeof bG || null === bG || "string" !== typeof bG.id ? null : GG
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);