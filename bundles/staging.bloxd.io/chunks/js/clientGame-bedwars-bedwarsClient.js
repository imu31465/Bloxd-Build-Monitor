export const id = 9;
export const ids = [9];
export const modules = {
  38611: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => nz
    });
    var Ez = bz(37452);
    const nz = function(zz, uz, bz) {
      let nz;
      return {
        plugins: {
          placeAgainstBeds: (0, Ez.c)()
        },
        onCreate: zz => {
          nz = zz
        },
        onPlayerAltAction: (zz, uz, bz, Ez, iz, lz) => {
          ((zz, uz) => {
            if (!uz || "Mesh" !== nz.getEntityType(uz)) return;
            const bz = nz.getEntityName(uz);
            "Upgrades" === bz ? nz.openShop(zz, !1, "Upgrades") : "Items" === bz && nz.openShop(zz, !1, "Recommended")
          })(zz, lz)
        }
      }
    }
  },
  37452: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Mz
    });
    var Ez = bz(328),
      nz = bz(36365),
      iz = bz(4251);
    const lz = ["Leaf Bed", "_Leaf Bed Head", ...Ez.Jc.flatMap((zz => [`${zz} Bed`, `_${zz} Bed Head`, `${zz} Strongbed`, `_${zz} Strongbed Head`]))];

    function Mz() {
      let zz;
      return {
        onCreate(uz) {
          zz = uz
        },
        altVetoBlocks: lz,
        onPlayerAttemptAltAction(uz, bz, Ez, lz, Mz, tz) {
          var Hz;
          if ((0, nz.e)(zz.getMetaInfo(Mz).rootName) && !zz.isEntityInteractable(tz) && (0, iz.c)(null === (Hz = zz.luz(uz)) || void 0 === Hz ? void 0 : Hz.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36365: (zz, uz, bz) => {
    function Ez(zz) {
      return zz.includes("Leaf Bed")
    }

    function nz(zz) {
      return / Bed(?: Head)?(?:\||$)/.test(zz) && !Ez(zz)
    }

    function iz(zz) {
      return zz.includes(" Strongbed")
    }

    function lz(zz) {
      return Ez(zz) || nz(zz) || iz(zz)
    }
    bz.d(uz, {
      e: () => lz,
      g: () => Ez,
      j: () => iz,
      k: () => nz
    })
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);