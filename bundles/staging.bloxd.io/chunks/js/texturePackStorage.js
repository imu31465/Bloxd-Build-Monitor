export const id = 56;
export const ids = [56];
export const modules = {
  34329: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      announceStoredTexturePack: () => zT.b,
      takeOneShotTexturePack: () => WT.j
    });
    var WT = mT(34337),
      zT = mT(34339)
  },
  34339: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => zT,
      e: () => MT
    });
    var WT = mT(3368);

    function zT() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const TT = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const UT = new BroadcastChannel(WT.m);
        UT.postMessage({
          stored: TT
        }), UT.close()
      } catch {
        return null
      }
      return TT
    }

    function MT(TT) {
      const UT = "object" === typeof TT && null !== TT ? TT.stored : null;
      return "string" === typeof UT ? UT : null
    }
  },
  34337: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT,
      h: () => zT,
      j: () => MT
    });
    var WT = mT(3368);
    async function zT(TT, UT, mT) {
      let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const MT = gT(await TT.getItem(WT.f, UT));
      if (null === MT || zT()) return null;
      const nT = await TT.getItem(WT.i, UT);
      return zT() ? null : (await async function(TT) {
        await Promise.all([TT.removeItem(WT.f), TT.removeItem(WT.i)])
      }(TT).catch(mT), {
        pack: MT,
        source: "string" === typeof nT ? nT : null
      })
    }

    function MT(TT) {
      return (0, WT.t)() ? Promise.resolve(null) : zT(TT, !1, (TT => {
        console.error("Error removing temporary texture pack: ", TT)
      }), WT.t)
    }

    function gT(TT) {
      if ("object" !== typeof TT || null === TT) return null;
      const UT = TT.metaData;
      return "object" !== typeof UT || null === UT || "string" !== typeof UT.id ? null : TT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);