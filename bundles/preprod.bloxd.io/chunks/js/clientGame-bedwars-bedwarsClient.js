export const id = 9;
export const ids = [9];
export const modules = {
  39110: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => wC
    });
    var QC = ZC(37868);
    const wC = function(CC, zC, ZC) {
      let wC;
      return {
        plugins: {
          placeAgainstBeds: (0, QC.c)()
        },
        onCreate: CC => {
          wC = CC
        },
        onPlayerAltAction: (CC, zC, ZC, QC, bC, nC) => {
          ((CC, zC) => {
            if (!zC || "Mesh" !== wC.getEntityType(zC)) return;
            const ZC = wC.getEntityName(zC);
            "Upgrades" === ZC ? wC.openShop(CC, !1, "Upgrades") : "Items" === ZC && wC.openShop(CC, !1, "Recommended")
          })(CC, nC)
        }
      }
    }
  },
  37868: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => fC
    });
    var QC = ZC(326),
      wC = ZC(36796),
      bC = ZC(4402);
    const nC = ["Leaf Bed", "_Leaf Bed Head", ...QC.sc.flatMap((CC => [`${CC} Bed`, `_${CC} Bed Head`, `${CC} Strongbed`, `_${CC} Strongbed Head`]))];

    function fC() {
      let CC;
      return {
        onCreate(zC) {
          CC = zC
        },
        altVetoBlocks: nC,
        onPlayerAttemptAltAction(zC, ZC, QC, nC, fC, oC) {
          var qC;
          if ((0, wC.d)(CC.getMetaInfo(fC).rootName) && !CC.isEntityInteractable(oC) && (0, bC.c)(null === (qC = CC.XzC(zC)) || void 0 === qC ? void 0 : qC.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36796: (CC, zC, ZC) => {
    function QC(CC) {
      return CC.includes("Leaf Bed")
    }

    function wC(CC) {
      return / Bed(?: Head)?(?:\||$)/.test(CC) && !QC(CC)
    }

    function bC(CC) {
      return CC.includes(" Strongbed")
    }

    function nC(CC) {
      return QC(CC) || wC(CC) || bC(CC)
    }
    ZC.d(zC, {
      d: () => nC,
      g: () => QC,
      i: () => bC,
      l: () => wC
    })
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);