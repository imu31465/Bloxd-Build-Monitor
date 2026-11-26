export const id = 9;
export const ids = [9];
export const modules = {
  40137: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => yU
    });
    var cU = zU(38782);
    const yU = function(UU, XU, zU) {
      let yU;
      return {
        plugins: {
          placeAgainstBeds: (0, cU.d)()
        },
        onCreate: UU => {
          yU = UU
        },
        onPlayerAltAction: (UU, XU, zU, cU, QU, AU) => {
          ((UU, XU) => {
            if (!XU || "Mesh" !== yU.getEntityType(XU)) return;
            const zU = yU.getEntityName(XU);
            "Upgrades" === zU ? yU.openShop(UU, !1, "Upgrades") : "Items" === zU && yU.openShop(UU, !1, "Recommended")
          })(UU, AU)
        }
      }
    }
  },
  38782: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => FU
    });
    var cU = zU(344),
      yU = zU(37662),
      QU = zU(4909);
    const AU = ["Leaf Bed", "_Leaf Bed Head", ...cU.Oc.flatMap((UU => [`${UU} Bed`, `_${UU} Bed Head`, `${UU} Strongbed`, `_${UU} Strongbed Head`]))];

    function FU() {
      let UU;
      return {
        onCreate(XU) {
          UU = XU
        },
        altVetoBlocks: AU,
        onPlayerAttemptAltAction(XU, zU, cU, AU, FU, oU) {
          var DU;
          if ((0, yU.b)(UU.getMetaInfo(FU).rootName) && !UU.isEntityInteractable(oU) && (0, QU.d)(null === (DU = UU.HzU(XU)) || void 0 === DU ? void 0 : DU.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  37662: (UU, XU, zU) => {
    function cU(UU) {
      return UU.includes("Leaf Bed")
    }

    function yU(UU) {
      return / Bed(?: Head)?(?:\||$)/.test(UU) && !cU(UU)
    }

    function QU(UU) {
      return UU.includes(" Strongbed")
    }

    function AU(UU) {
      return cU(UU) || yU(UU) || QU(UU)
    }
    zU.d(XU, {
      b: () => AU,
      c: () => cU,
      g: () => QU,
      j: () => yU
    })
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);