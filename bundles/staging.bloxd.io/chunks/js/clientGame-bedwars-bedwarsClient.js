export const id = 9;
export const ids = [9];
export const modules = {
  40357: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => SM
    });
    var OM = iM(39012);
    const SM = function(MM, rM, iM) {
      let SM;
      return {
        plugins: {
          placeAgainstBeds: (0, OM.d)()
        },
        onCreate: MM => {
          SM = MM
        },
        onPlayerAltAction: (MM, rM, iM, OM, jM, aM) => {
          ((MM, rM) => {
            if (!rM || "Mesh" !== SM.getEntityType(rM)) return;
            const iM = SM.getEntityName(rM);
            "Upgrades" === iM ? SM.openShop(MM, !1, "Upgrades") : "Items" === iM && SM.openShop(MM, !1, "Recommended")
          })(MM, aM)
        }
      }
    }
  },
  39012: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => PM
    });
    var OM = iM(332),
      SM = iM(37858),
      jM = iM(4854);
    const aM = ["Leaf Bed", "_Leaf Bed Head", ...OM.Ec.flatMap((MM => [`${MM} Bed`, `_${MM} Bed Head`, `${MM} Strongbed`, `_${MM} Strongbed Head`]))];

    function PM() {
      let MM;
      return {
        onCreate(rM) {
          MM = rM
        },
        altVetoBlocks: aM,
        onPlayerAttemptAltAction(rM, iM, OM, aM, PM, nM) {
          var QM;
          if ((0, SM.e)(MM.getMetaInfo(PM).rootName) && !MM.isEntityInteractable(nM) && (0, jM.g)(null === (QM = MM.TrM(rM)) || void 0 === QM ? void 0 : QM.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  37858: (MM, rM, iM) => {
    function OM(MM) {
      return MM.includes("Leaf Bed")
    }

    function SM(MM) {
      return / Bed(?: Head)?(?:\||$)/.test(MM) && !OM(MM)
    }

    function jM(MM) {
      return MM.includes(" Strongbed")
    }

    function aM(MM) {
      return OM(MM) || SM(MM) || jM(MM)
    }
    iM.d(rM, {
      e: () => aM,
      g: () => OM,
      h: () => jM,
      l: () => SM
    })
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);