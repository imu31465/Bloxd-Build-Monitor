export const id = 9;
export const ids = [9];
export const modules = {
  38799: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => pU
    });
    var tU = gU(37578);
    const pU = function(UU, RU, gU) {
      let pU;
      return {
        plugins: {
          placeAgainstBeds: (0, tU.d)()
        },
        onCreate: UU => {
          pU = UU
        },
        onPlayerAltAction: (UU, RU, gU, tU, EU, PU) => {
          ((UU, RU) => {
            if (!RU || "Mesh" !== pU.getEntityType(RU)) return;
            const gU = pU.getEntityName(RU);
            "Upgrades" === gU ? pU.openShop(UU, !1, "Upgrades") : "Items" === gU && pU.openShop(UU, !1, "Recommended")
          })(UU, PU)
        }
      }
    }
  },
  37578: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => TU
    });
    var tU = gU(311),
      pU = gU(36470),
      EU = gU(4147);
    const PU = ["Leaf Bed", "_Leaf Bed Head", ...tU.Gc.flatMap((UU => [`${UU} Bed`, `_${UU} Bed Head`, `${UU} Strongbed`, `_${UU} Strongbed Head`]))];

    function TU() {
      let UU;
      return {
        onCreate(RU) {
          UU = RU
        },
        altVetoBlocks: PU,
        onPlayerAttemptAltAction(RU, gU, tU, PU, TU, qU) {
          var KU;
          if ((0, pU.d)(UU.getMetaInfo(TU).rootName) && !UU.isEntityInteractable(qU) && (0, EU.d)(null === (KU = UU.QRU(RU)) || void 0 === KU ? void 0 : KU.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36470: (UU, RU, gU) => {
    function tU(UU) {
      return UU.includes("Leaf Bed")
    }

    function pU(UU) {
      return / Bed(?: Head)?(?:\||$)/.test(UU) && !tU(UU)
    }

    function EU(UU) {
      return UU.includes(" Strongbed")
    }

    function PU(UU) {
      return tU(UU) || pU(UU) || EU(UU)
    }
    gU.d(RU, {
      d: () => PU,
      e: () => tU,
      i: () => EU,
      m: () => pU
    })
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);