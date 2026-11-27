export const id = 67;
export const ids = [67];
export const modules = {
  34964: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      announceStoredTexturePack: () => be.c,
      takeOneShotTexturePack: () => ye.j
    });
    var ye = He(34968),
      be = He(34972)
  },
  34972: (ee, ie, He) => {
    He.d(ie, {
      c: () => be,
      f: () => Me
    });
    var ye = He(3580);

    function be() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const ee = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const ie = new BroadcastChannel(ye.k);
        ie.postMessage({
          stored: ee
        }), ie.close()
      } catch {
        return null
      }
      return ee
    }

    function Me(ee) {
      const ie = "object" === typeof ee && null !== ee ? ee.stored : null;
      return "string" === typeof ie ? ie : null
    }
  },
  34968: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      g: () => be,
      j: () => Me
    });
    var ye = He(3580);
    async function be(ee, ie, He) {
      let be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const Me = Ke(await ee.getItem(ye.g, ie));
      if (null === Me || be()) return null;
      const Ue = await ee.getItem(ye.i, ie);
      return be() ? null : (await async function(ee) {
        await Promise.all([ee.removeItem(ye.g), ee.removeItem(ye.i)])
      }(ee).catch(He), {
        pack: Me,
        source: "string" === typeof Ue ? Ue : null
      })
    }

    function Me(ee) {
      return (0, ye.s)() ? Promise.resolve(null) : be(ee, !1, (ee => {
        console.error("Error removing temporary texture pack: ", ee)
      }), ye.s)
    }

    function Ke(ee) {
      if ("object" !== typeof ee || null === ee) return null;
      const ie = ee.metaData;
      return "object" !== typeof ie || null === ie || "string" !== typeof ie.id ? null : ee
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);