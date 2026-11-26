export const id = 67;
export const ids = [67];
export const modules = {
  34936: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      announceStoredTexturePack: () => yU.b,
      takeOneShotTexturePack: () => cU.i
    });
    var cU = zU(34945),
      yU = zU(34948)
  },
  34948: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => yU,
      d: () => QU
    });
    var cU = zU(3626);

    function yU() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const UU = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const XU = new BroadcastChannel(cU.n);
        XU.postMessage({
          stored: UU
        }), XU.close()
      } catch {
        return null
      }
      return UU
    }

    function QU(UU) {
      const XU = "object" === typeof UU && null !== UU ? UU.stored : null;
      return "string" === typeof XU ? XU : null
    }
  },
  34945: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => AU,
      g: () => yU,
      i: () => QU
    });
    var cU = zU(3626);
    async function yU(UU, XU, zU) {
      let yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const QU = AU(await UU.getItem(cU.i, XU));
      if (null === QU || yU()) return null;
      const FU = await UU.getItem(cU.j, XU);
      return yU() ? null : (await async function(UU) {
        await Promise.all([UU.removeItem(cU.i), UU.removeItem(cU.j)])
      }(UU).catch(zU), {
        pack: QU,
        source: "string" === typeof FU ? FU : null
      })
    }

    function QU(UU) {
      return (0, cU.w)() ? Promise.resolve(null) : yU(UU, !1, (UU => {
        console.error("Error removing temporary texture pack: ", UU)
      }), cU.w)
    }

    function AU(UU) {
      if ("object" !== typeof UU || null === UU) return null;
      const XU = UU.metaData;
      return "object" !== typeof XU || null === XU || "string" !== typeof XU.id ? null : UU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);