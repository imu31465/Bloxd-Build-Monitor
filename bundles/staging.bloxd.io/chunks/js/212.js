export const id = 212;
export const ids = [212];
export const modules = {
  38441: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz,
      d: () => lz
    });
    var Ez = bz(22);
    let nz = !1;

    function iz() {
      return nz
    }

    function lz(zz) {
      nz !== zz && (nz = zz, Ez.k.sK("replayViewer|videoExportChanged"))
    }
  },
  35952: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => dz,
      c: () => Oz,
      g: () => Fz,
      j: () => pz
    });
    var Ez = bz(328),
      nz = bz(621),
      iz = bz(633),
      lz = bz(33);
    const Mz = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      tz = "playSessionGameNameWithVariation",
      Hz = "wasMatchmakePlayer";

    function Oz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lz.h;
      (0, iz.j)(zz, Mz)
    }

    function pz() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lz.h).setItem(Hz, !0)
    }

    function dz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lz.h;
      return (0, iz.d)(zz, Mz)
    }

    function Fz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lz.h;
      const bz = (0, iz.d)(uz, Mz),
        Oz = function(zz) {
          const uz = zz.getItem(tz);
          return "string" !== typeof uz ? null : uz
        }(uz),
        pz = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lz.h).getItem(Hz)
        }(uz);
      let dz;
      return dz = null !== bz && null !== Oz && (0, iz.g)(uz, Mz) && function(zz, uz, bz) {
          const nz = (0, Ez.Sb)(zz),
            iz = (0, Ez.Sb)(uz),
            lz = (0, Ez.Nb)(zz),
            Mz = (0, Ez.Nb)(uz);
          return !(nz !== iz || !bz) || nz === iz && lz === Mz
        }(Oz, zz, pz) ? bz : (0, nz.d)(), (0, iz.n)(uz, Mz, dz), uz.setItem(tz, zz),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lz.h).removeItem(Hz)
        }(uz), dz
    }
  },
  39898: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => lz,
      e: () => iz,
      f: () => Mz
    });
    let Ez = null,
      nz = null;

    function iz(zz, uz) {
      return Ez = zz, nz = null, Mz(uz), () => {
        Ez === zz && (Ez = null, nz = null)
      }
    }

    function lz() {
      return null === nz ? null : {
        ...nz
      }
    }

    function Mz(zz) {
      var uz;
      null !== (uz = Ez) && void 0 !== uz && uz(zz) && (nz = {
        ...zz
      })
    }
  },
  39887: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => nz,
      d: () => iz
    });
    let Ez = null;

    function nz(zz, uz) {
      Ez = {
        conn: zz,
        reason: uz
      }
    }

    function iz(zz) {
      var uz;
      const bz = (null === (uz = Ez) || void 0 === uz ? void 0 : uz.conn) === zz ? Ez.reason : null;
      return Ez = null, bz
    }
  },
  39851: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => iz,
      g: () => nz
    });
    let Ez = {
      fire: () => {},
      close: () => {}
    };

    function nz(zz) {
      Ez = zz
    }

    function iz() {
      return Ez
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);