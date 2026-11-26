export const id = 67;
export const ids = [67];
export const modules = {
  34852: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      announceStoredTexturePack: () => DB.c,
      takeOneShotTexturePack: () => YB.l
    });
    var YB = GB(34854),
      DB = GB(34856)
  },
  34856: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB,
      e: () => QB
    });
    var YB = GB(3670);

    function DB() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const BB = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const OB = new BroadcastChannel(YB.o);
        OB.postMessage({
          stored: BB
        }), OB.close()
      } catch {
        return null
      }
      return BB
    }

    function QB(BB) {
      const OB = "object" === typeof BB && null !== BB ? BB.stored : null;
      return "string" === typeof OB ? OB : null
    }
  },
  34854: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => oB,
      h: () => DB,
      l: () => QB
    });
    var YB = GB(3670);
    async function DB(BB, OB, GB) {
      let DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const QB = oB(await BB.getItem(YB.i, OB));
      if (null === QB || DB()) return null;
      const jB = await BB.getItem(YB.m, OB);
      return DB() ? null : (await async function(BB) {
        await Promise.all([BB.removeItem(YB.i), BB.removeItem(YB.m)])
      }(BB).catch(GB), {
        pack: QB,
        source: "string" === typeof jB ? jB : null
      })
    }

    function QB(BB) {
      return (0, YB.u)() ? Promise.resolve(null) : DB(BB, !1, (BB => {
        console.error("Error removing temporary texture pack: ", BB)
      }), YB.u)
    }

    function oB(BB) {
      if ("object" !== typeof BB || null === BB) return null;
      const OB = BB.metaData;
      return "object" !== typeof OB || null === OB || "string" !== typeof OB.id ? null : BB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);