export const id = 55;
export const ids = [55];
export const modules = {
  34205: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      announceStoredTexturePack: () => wC.c,
      takeOneShotTexturePack: () => QC.k
    });
    var QC = ZC(34210),
      wC = ZC(34214)
  },
  34214: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => wC,
      g: () => bC
    });
    var QC = ZC(3242);

    function wC() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const CC = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const zC = new BroadcastChannel(QC.m);
        zC.postMessage({
          stored: CC
        }), zC.close()
      } catch {
        return null
      }
      return CC
    }

    function bC(CC) {
      const zC = "object" === typeof CC && null !== CC ? CC.stored : null;
      return "string" === typeof zC ? zC : null
    }
  },
  34210: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => nC,
      i: () => wC,
      k: () => bC
    });
    var QC = ZC(3242);
    async function wC(CC, zC, ZC) {
      let wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const bC = nC(await CC.getItem(QC.f, zC));
      if (null === bC || wC()) return null;
      const fC = await CC.getItem(QC.i, zC);
      return wC() ? null : (await async function(CC) {
        await Promise.all([CC.removeItem(QC.f), CC.removeItem(QC.i)])
      }(CC).catch(ZC), {
        pack: bC,
        source: "string" === typeof fC ? fC : null
      })
    }

    function bC(CC) {
      return (0, QC.r)() ? Promise.resolve(null) : wC(CC, !1, (CC => {
        console.error("Error removing temporary texture pack: ", CC)
      }), QC.r)
    }

    function nC(CC) {
      if ("object" !== typeof CC || null === CC) return null;
      const zC = CC.metaData;
      return "object" !== typeof zC || null === zC || "string" !== typeof zC.id ? null : CC
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);