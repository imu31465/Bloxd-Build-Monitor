export const id = 45;
export const ids = [45];
export const modules = {
  8210: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      announceStoredTexturePack: () => Ic.c,
      takeOneShotTexturePack: () => Vc.i
    });
    var Vc = nc(8219),
      Ic = nc(8224)
  },
  8224: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Ic,
      f: () => rB
    });
    var Vc = nc(2432);

    function Ic() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const cB = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const Bc = new BroadcastChannel(Vc.h);
        Bc.postMessage({
          stored: cB
        }), Bc.close()
      } catch {
        return null
      }
      return cB
    }

    function rB(cB) {
      const Bc = "object" === typeof cB && null !== cB ? cB.stored : null;
      return "string" === typeof Bc ? Bc : null
    }
  },
  8219: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => uc,
      e: () => Ic,
      i: () => rB
    });
    var Vc = nc(2432);
    async function Ic(cB, Bc, nc) {
      let Ic = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const rB = uc(await cB.getItem(Vc.c, Bc));
      if (null === rB || Ic()) return null;
      const sc = await cB.getItem(Vc.e, Bc);
      return Ic() ? null : (await Promise.all([cB.removeItem(Vc.c), cB.removeItem(Vc.e)]).catch(nc), {
        pack: rB,
        source: "string" === typeof sc ? sc : null
      })
    }

    function rB(cB) {
      return (0, Vc.l)() ? Promise.resolve(null) : Ic(cB, !1, (cB => {
        console.error("Error removing temporary texture pack: ", cB)
      }), Vc.l)
    }

    function uc(cB) {
      if ("object" !== typeof cB || null === cB) return null;
      const Bc = cB.metaData;
      return "object" !== typeof Bc || null === Bc || "string" !== typeof Bc.id ? null : cB
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);