export const id = 48;
export const ids = [48];
export const modules = {
  8593: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      announceStoredTexturePack: () => UJ.d,
      takeOneShotTexturePack: () => FJ.h
    });
    var FJ = ZJ(8601),
      UJ = ZJ(8606)
  },
  8606: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => UJ,
      h: () => eJ
    });
    var FJ = ZJ(2753);

    function UJ() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const JJ = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const cJ = new BroadcastChannel(FJ.i);
        cJ.postMessage({
          stored: JJ
        }), cJ.close()
      } catch {
        return null
      }
      return JJ
    }

    function eJ(JJ) {
      const cJ = "object" === typeof JJ && null !== JJ ? JJ.stored : null;
      return "string" === typeof cJ ? cJ : null
    }
  },
  8601: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => XJ,
      g: () => UJ,
      h: () => eJ
    });
    var FJ = ZJ(2753);
    async function UJ(JJ, cJ, ZJ) {
      let UJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const eJ = XJ(await JJ.getItem(FJ.f, cJ));
      if (null === eJ || UJ()) return null;
      const AJ = await JJ.getItem(FJ.g, cJ);
      return UJ() ? null : (await async function(JJ) {
        await Promise.all([JJ.removeItem(FJ.f), JJ.removeItem(FJ.g)])
      }(JJ).catch(ZJ), {
        pack: eJ,
        source: "string" === typeof AJ ? AJ : null
      })
    }

    function eJ(JJ) {
      return (0, FJ.q)() ? Promise.resolve(null) : UJ(JJ, !1, (JJ => {
        console.error("Error removing temporary texture pack: ", JJ)
      }), FJ.q)
    }

    function XJ(JJ) {
      if ("object" !== typeof JJ || null === JJ) return null;
      const cJ = JJ.metaData;
      return "object" !== typeof cJ || null === cJ || "string" !== typeof cJ.id ? null : JJ
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);