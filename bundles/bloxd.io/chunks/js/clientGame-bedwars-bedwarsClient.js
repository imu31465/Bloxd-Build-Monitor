export const id = 9;
export const ids = [9];
export const modules = {
  39360: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => nB
    });
    var QB = zB(38120);
    const nB = function(BB, jB, zB) {
      let nB;
      return {
        plugins: {
          placeAgainstBeds: (0, QB.b)()
        },
        onCreate: BB => {
          nB = BB
        },
        onPlayerAltAction: (BB, jB, zB, QB, dB, IB) => {
          ((BB, jB) => {
            if (!jB || "Mesh" !== nB.getEntityType(jB)) return;
            const zB = nB.getEntityName(jB);
            "Upgrades" === zB ? nB.openShop(BB, !1, "Upgrades") : "Items" === zB && nB.openShop(BB, !1, "Recommended")
          })(BB, IB)
        }
      }
    }
  },
  38120: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => NB
    });
    var QB = zB(376),
      nB = zB(37002),
      dB = zB(4597);
    const IB = ["Leaf Bed", "_Leaf Bed Head", ...QB.Kc.flatMap((BB => [`${BB} Bed`, `_${BB} Bed Head`, `${BB} Strongbed`, `_${BB} Strongbed Head`]))];

    function NB() {
      let BB;
      return {
        onCreate(jB) {
          BB = jB
        },
        altVetoBlocks: IB,
        onPlayerAttemptAltAction(jB, zB, QB, IB, NB, uB) {
          var UB;
          if ((0, nB.b)(BB.getMetaInfo(NB).rootName) && !BB.isEntityInteractable(uB) && (0, dB.c)(null === (UB = BB.ZjB(jB)) || void 0 === UB ? void 0 : UB.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  37002: (BB, jB, zB) => {
    function QB(BB) {
      return BB.includes("Leaf Bed")
    }

    function nB(BB) {
      return / Bed(?: Head)?(?:\||$)/.test(BB) && !QB(BB)
    }

    function dB(BB) {
      return BB.includes(" Strongbed")
    }

    function IB(BB) {
      return QB(BB) || nB(BB) || dB(BB)
    }
    zB.d(jB, {
      b: () => IB,
      f: () => QB,
      h: () => dB,
      i: () => nB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);