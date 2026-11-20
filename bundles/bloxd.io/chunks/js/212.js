export const id = 212;
export const ids = [212];
export const modules = {
  38492: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Xz,
      f: () => Oz
    });
    var Fz = sz(34);
    let Wz = !1;

    function Xz() {
      return Wz
    }

    function Oz(zz) {
      Wz !== zz && (Wz = zz, Fz.o.Yg("replayViewer|videoExportChanged"))
    }
  },
  35970: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Nz,
      c: () => Kz,
      g: () => bz,
      j: () => uz
    });
    var Fz = sz(321),
      Wz = sz(616),
      Xz = sz(627),
      Oz = sz(44);
    const oz = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      vz = "playSessionGameNameWithVariation",
      Uz = "wasMatchmakePlayer";

    function Kz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oz.j;
      (0, Xz.h)(zz, oz)
    }

    function uz() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oz.j).setItem(Uz, !0)
    }

    function Nz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oz.j;
      return (0, Xz.d)(zz, oz)
    }

    function bz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Oz.j;
      const sz = (0, Xz.d)(tz, oz),
        Kz = function(zz) {
          const tz = zz.getItem(vz);
          return "string" !== typeof tz ? null : tz
        }(tz),
        uz = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oz.j).getItem(Uz)
        }(tz);
      let Nz;
      return Nz = null !== sz && null !== Kz && (0, Xz.g)(tz, oz) && function(zz, tz, sz) {
          const Wz = (0, Fz.Tb)(zz),
            Xz = (0, Fz.Tb)(tz),
            Oz = (0, Fz.Mb)(zz),
            oz = (0, Fz.Mb)(tz);
          return !(Wz !== Xz || !sz) || Wz === Xz && Oz === oz
        }(Kz, zz, uz) ? sz : (0, Wz.c)(), (0, Xz.i)(tz, oz, Nz), tz.setItem(vz, zz),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oz.j).removeItem(Uz)
        }(tz), Nz
    }
  },
  39847: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz,
      e: () => Xz,
      i: () => oz
    });
    let Fz = null,
      Wz = null;

    function Xz(zz, tz) {
      return Fz = zz, Wz = null, oz(tz), () => {
        Fz === zz && (Fz = null, Wz = null)
      }
    }

    function Oz() {
      return null === Wz ? null : {
        ...Wz
      }
    }

    function oz(zz) {
      var tz;
      null !== (tz = Fz) && void 0 !== tz && tz(zz) && (Wz = {
        ...zz
      })
    }
  },
  39831: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Wz,
      g: () => Xz
    });
    let Fz = null;

    function Wz(zz, tz) {
      Fz = {
        conn: zz,
        reason: tz
      }
    }

    function Xz(zz) {
      var tz;
      const sz = (null === (tz = Fz) || void 0 === tz ? void 0 : tz.conn) === zz ? Fz.reason : null;
      return Fz = null, sz
    }
  },
  39811: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Xz,
      d: () => Wz
    });
    let Fz = {
      fire: () => {},
      close: () => {}
    };

    function Wz(zz) {
      Fz = zz
    }

    function Xz() {
      return Fz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);