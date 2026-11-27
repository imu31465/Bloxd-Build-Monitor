export const id = 9;
export const ids = [9];
export const modules = {
  40119: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => be
    });
    var ye = He(38876);
    const be = function(ee, ie, He) {
      let be;
      return {
        plugins: {
          placeAgainstBeds: (0, ye.e)()
        },
        onCreate: ee => {
          be = ee
        },
        onPlayerAltAction: (ee, ie, He, ye, Me, Ke) => {
          ((ee, ie) => {
            if (!ie || "Mesh" !== be.getEntityType(ie)) return;
            const He = be.getEntityName(ie);
            "Upgrades" === He ? be.openShop(ee, !1, "Upgrades") : "Items" === He && be.openShop(ee, !1, "Recommended")
          })(ee, Ke)
        }
      }
    }
  },
  38876: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ue
    });
    var ye = He(347),
      be = He(37770),
      Me = He(4870);
    const Ke = ["Leaf Bed", "_Leaf Bed Head", ...ye.Lc.flatMap((ee => [`${ee} Bed`, `_${ee} Bed Head`, `${ee} Strongbed`, `_${ee} Strongbed Head`]))];

    function Ue() {
      let ee;
      return {
        onCreate(ie) {
          ee = ie
        },
        altVetoBlocks: Ke,
        onPlayerAttemptAltAction(ie, He, ye, Ke, Ue, Fe) {
          var Je;
          if ((0, be.e)(ee.getMetaInfo(Ue).rootName) && !ee.isEntityInteractable(Fe) && (0, Me.e)(null === (Je = ee.Vye(ie)) || void 0 === Je ? void 0 : Je.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  37770: (ee, ie, He) => {
    function ye(ee) {
      return ee.includes("Leaf Bed")
    }

    function be(ee) {
      return / Bed(?: Head)?(?:\||$)/.test(ee) && !ye(ee)
    }

    function Me(ee) {
      return ee.includes(" Strongbed")
    }

    function Ke(ee) {
      return ye(ee) || be(ee) || Me(ee)
    }
    He.d(ie, {
      e: () => Ke,
      i: () => ye,
      k: () => Me,
      m: () => be
    })
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);