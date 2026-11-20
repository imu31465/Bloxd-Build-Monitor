export const id = 9;
export const ids = [9];
export const modules = {
  38642: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => Wz
    });
    var Fz = sz(37461);
    const Wz = function(zz, tz, sz) {
      let Wz;
      return {
        plugins: {
          placeAgainstBeds: (0, Fz.e)()
        },
        onCreate: zz => {
          Wz = zz
        },
        onPlayerAltAction: (zz, tz, sz, Fz, Xz, Oz) => {
          ((zz, tz) => {
            if (!tz || "Mesh" !== Wz.getEntityType(tz)) return;
            const sz = Wz.getEntityName(tz);
            "Upgrades" === sz ? Wz.openShop(zz, !1, "Upgrades") : "Items" === sz && Wz.openShop(zz, !1, "Recommended")
          })(zz, Oz)
        }
      }
    }
  },
  37461: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => oz
    });
    var Fz = sz(321),
      Wz = sz(36339),
      Xz = sz(4115);
    const Oz = ["Leaf Bed", "_Leaf Bed Head", ...Fz.Cc.flatMap((zz => [`${zz} Bed`, `_${zz} Bed Head`, `${zz} Strongbed`, `_${zz} Strongbed Head`]))];

    function oz() {
      let zz;
      return {
        onCreate(tz) {
          zz = tz
        },
        altVetoBlocks: Oz,
        onPlayerAttemptAltAction(tz, sz, Fz, Oz, oz, vz) {
          var Uz;
          if ((0, Wz.e)(zz.getMetaInfo(oz).rootName) && !zz.isEntityInteractable(vz) && (0, Xz.e)(null === (Uz = zz.rtz(tz)) || void 0 === Uz ? void 0 : Uz.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36339: (zz, tz, sz) => {
    function Fz(zz) {
      return zz.includes("Leaf Bed")
    }

    function Wz(zz) {
      return / Bed(?: Head)?(?:\||$)/.test(zz) && !Fz(zz)
    }

    function Xz(zz) {
      return zz.includes(" Strongbed")
    }

    function Oz(zz) {
      return Fz(zz) || Wz(zz) || Xz(zz)
    }
    sz.d(tz, {
      e: () => Oz,
      i: () => Fz,
      l: () => Xz,
      m: () => Wz
    })
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);