export const id = 9;
export const ids = [9];
export const modules = {
  38203: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => yB
    });
    var VB = dB(36923);
    const yB = function(BB, TB, dB) {
      let yB;
      return {
        plugins: {
          placeAgainstBeds: (0, VB.c)()
        },
        onCreate: BB => {
          yB = BB
        },
        onPlayerAltAction: (BB, TB, dB, VB, pB, lB) => {
          ((BB, TB) => {
            if (!TB || "Mesh" !== yB.getEntityType(TB)) return;
            const dB = yB.getEntityName(TB);
            "Upgrades" === dB ? yB.openShop(BB, !1, "Upgrades") : "Items" === dB && yB.openShop(BB, !1, "Recommended")
          })(BB, lB)
        }
      }
    }
  },
  36923: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => JB
    });
    var VB = dB(279),
      yB = dB(35894),
      pB = dB(3896);
    const lB = ["Leaf Bed", "_Leaf Bed Head", ...VB.Gc.flatMap((BB => [`${BB} Bed`, `_${BB} Bed Head`, `${BB} Strongbed`, `_${BB} Strongbed Head`]))];

    function JB() {
      let BB;
      return {
        onCreate(TB) {
          BB = TB
        },
        altVetoBlocks: lB,
        onPlayerAttemptAltAction(TB, dB, VB, lB, JB, YB) {
          var gB;
          if ((0, yB.e)(BB.getMetaInfo(JB).rootName) && !BB.isEntityInteractable(YB) && (0, pB.f)(null === (gB = BB.gdB(TB)) || void 0 === gB ? void 0 : gB.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  35894: (BB, TB, dB) => {
    function VB(BB) {
      return BB.includes("Leaf Bed")
    }

    function yB(BB) {
      return / Bed(?: Head)?(?:\||$)/.test(BB) && !VB(BB)
    }

    function pB(BB) {
      return BB.includes(" Strongbed")
    }

    function lB(BB) {
      return VB(BB) || yB(BB) || pB(BB)
    }
    dB.d(TB, {
      e: () => lB,
      h: () => VB,
      l: () => pB,
      p: () => yB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);