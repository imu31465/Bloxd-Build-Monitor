export const id = 52;
export const ids = [52];
export const modules = {
  9039: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      announceStoredTexturePack: () => nz.b,
      takeOneShotTexturePack: () => Ez.j
    });
    var Ez = bz(9043),
      nz = bz(9047)
  },
  9047: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => nz,
      e: () => iz
    });
    var Ez = bz(3027);

    function nz() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const zz = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const uz = new BroadcastChannel(Ez.l);
        uz.postMessage({
          stored: zz
        }), uz.close()
      } catch {
        return null
      }
      return zz
    }

    function iz(zz) {
      const uz = "object" === typeof zz && null !== zz ? zz.stored : null;
      return "string" === typeof uz ? uz : null
    }
  },
  9043: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => lz,
      f: () => nz,
      j: () => iz
    });
    var Ez = bz(3027);
    async function nz(zz, uz, bz) {
      let nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const iz = lz(await zz.getItem(Ez.g, uz));
      if (null === iz || nz()) return null;
      const Mz = await zz.getItem(Ez.k, uz);
      return nz() ? null : (await async function(zz) {
        await Promise.all([zz.removeItem(Ez.g), zz.removeItem(Ez.k)])
      }(zz).catch(bz), {
        pack: iz,
        source: "string" === typeof Mz ? Mz : null
      })
    }

    function iz(zz) {
      return (0, Ez.u)() ? Promise.resolve(null) : nz(zz, !1, (zz => {
        console.error("Error removing temporary texture pack: ", zz)
      }), Ez.u)
    }

    function lz(zz) {
      if ("object" !== typeof zz || null === zz) return null;
      const uz = zz.metaData;
      return "object" !== typeof uz || null === uz || "string" !== typeof uz.id ? null : zz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);