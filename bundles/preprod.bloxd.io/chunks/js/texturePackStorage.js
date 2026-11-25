export const id = 67;
export const ids = [67];
export const modules = {
  35092: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      announceStoredTexturePack: () => SM.d,
      takeOneShotTexturePack: () => OM.g
    });
    var OM = iM(35100),
      SM = iM(35103)
  },
  35103: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM,
      e: () => jM
    });
    var OM = iM(3657);

    function SM() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const MM = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const rM = new BroadcastChannel(OM.i);
        rM.postMessage({
          stored: MM
        }), rM.close()
      } catch {
        return null
      }
      return MM
    }

    function jM(MM) {
      const rM = "object" === typeof MM && null !== MM ? MM.stored : null;
      return "string" === typeof rM ? rM : null
    }
  },
  35100: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM,
      f: () => SM,
      g: () => jM
    });
    var OM = iM(3657);
    async function SM(MM, rM, iM) {
      let SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const jM = aM(await MM.getItem(OM.e, rM));
      if (null === jM || SM()) return null;
      const PM = await MM.getItem(OM.f, rM);
      return SM() ? null : (await async function(MM) {
        await Promise.all([MM.removeItem(OM.e), MM.removeItem(OM.f)])
      }(MM).catch(iM), {
        pack: jM,
        source: "string" === typeof PM ? PM : null
      })
    }

    function jM(MM) {
      return (0, OM.n)() ? Promise.resolve(null) : SM(MM, !1, (MM => {
        console.error("Error removing temporary texture pack: ", MM)
      }), OM.n)
    }

    function aM(MM) {
      if ("object" !== typeof MM || null === MM) return null;
      const rM = MM.metaData;
      return "object" !== typeof rM || null === rM || "string" !== typeof rM.id ? null : MM
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);