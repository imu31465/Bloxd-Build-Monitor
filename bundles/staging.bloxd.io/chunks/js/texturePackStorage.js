export const id = 52;
export const ids = [52];
export const modules = {
  8905: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      announceStoredTexturePack: () => Wz.c,
      takeOneShotTexturePack: () => Fz.i
    });
    var Fz = sz(8907),
      Wz = sz(8913)
  },
  8913: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Wz,
      f: () => Xz
    });
    var Fz = sz(2955);

    function Wz() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const zz = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const tz = new BroadcastChannel(Fz.l);
        tz.postMessage({
          stored: zz
        }), tz.close()
      } catch {
        return null
      }
      return zz
    }

    function Xz(zz) {
      const tz = "object" === typeof zz && null !== zz ? zz.stored : null;
      return "string" === typeof tz ? tz : null
    }
  },
  8907: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz,
      g: () => Wz,
      i: () => Xz
    });
    var Fz = sz(2955);
    async function Wz(zz, tz, sz) {
      let Wz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const Xz = Oz(await zz.getItem(Fz.i, tz));
      if (null === Xz || Wz()) return null;
      const oz = await zz.getItem(Fz.k, tz);
      return Wz() ? null : (await async function(zz) {
        await Promise.all([zz.removeItem(Fz.i), zz.removeItem(Fz.k)])
      }(zz).catch(sz), {
        pack: Xz,
        source: "string" === typeof oz ? oz : null
      })
    }

    function Xz(zz) {
      return (0, Fz.r)() ? Promise.resolve(null) : Wz(zz, !1, (zz => {
        console.error("Error removing temporary texture pack: ", zz)
      }), Fz.r)
    }

    function Oz(zz) {
      if ("object" !== typeof zz || null === zz) return null;
      const tz = zz.metaData;
      return "object" !== typeof tz || null === tz || "string" !== typeof tz.id ? null : zz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);