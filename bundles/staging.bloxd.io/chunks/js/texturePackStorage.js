export const id = 67;
export const ids = [67];
export const modules = {
  35380: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      announceStoredTexturePack: () => YV.d,
      takeOneShotTexturePack: () => JV.f
    });
    var JV = xV(35385),
      YV = xV(35393)
  },
  35393: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV,
      h: () => UV
    });
    var JV = xV(3681);

    function YV() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const VV = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const eV = new BroadcastChannel(JV.h);
        eV.postMessage({
          stored: VV
        }), eV.close()
      } catch {
        return null
      }
      return VV
    }

    function UV(VV) {
      const eV = "object" === typeof VV && null !== VV ? VV.stored : null;
      return "string" === typeof eV ? eV : null
    }
  },
  35385: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => yV,
      e: () => YV,
      f: () => UV
    });
    var JV = xV(3681);
    async function YV(VV, eV, xV) {
      let YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const UV = yV(await VV.getItem(JV.e, eV));
      if (null === UV || YV()) return null;
      const pV = await VV.getItem(JV.g, eV);
      return YV() ? null : (await async function(VV) {
        await Promise.all([VV.removeItem(JV.e), VV.removeItem(JV.g)])
      }(VV).catch(xV), {
        pack: UV,
        source: "string" === typeof pV ? pV : null
      })
    }

    function UV(VV) {
      return (0, JV.m)() ? Promise.resolve(null) : YV(VV, !1, (VV => {
        console.error("Error removing temporary texture pack: ", VV)
      }), JV.m)
    }

    function yV(VV) {
      if ("object" !== typeof VV || null === VV) return null;
      const eV = VV.metaData;
      return "object" !== typeof eV || null === eV || "string" !== typeof eV.id ? null : VV
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);