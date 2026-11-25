export const id = 9;
export const ids = [9];
export const modules = {
  39337: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => JB
    });
    var TB = ZB(38094);
    const JB = function(BB, IB, ZB) {
      let JB;
      return {
        plugins: {
          placeAgainstBeds: (0, TB.d)()
        },
        onCreate: BB => {
          JB = BB
        },
        onPlayerAltAction: (BB, IB, ZB, TB, oB, GB) => {
          ((BB, IB) => {
            if (!IB || "Mesh" !== JB.getEntityType(IB)) return;
            const ZB = JB.getEntityName(IB);
            "Upgrades" === ZB ? JB.openShop(BB, !1, "Upgrades") : "Items" === ZB && JB.openShop(BB, !1, "Recommended")
          })(BB, GB)
        }
      }
    }
  },
  38094: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => vB
    });
    var TB = ZB(360),
      JB = ZB(36964),
      oB = ZB(4665);
    const GB = ["Leaf Bed", "_Leaf Bed Head", ...TB.Kc.flatMap((BB => [`${BB} Bed`, `_${BB} Bed Head`, `${BB} Strongbed`, `_${BB} Strongbed Head`]))];

    function vB() {
      let BB;
      return {
        onCreate(IB) {
          BB = IB
        },
        altVetoBlocks: GB,
        onPlayerAttemptAltAction(IB, ZB, TB, GB, vB, kB) {
          var cB;
          if ((0, JB.d)(BB.getMetaInfo(vB).rootName) && !BB.isEntityInteractable(kB) && (0, oB.f)(null === (cB = BB.FZB(IB)) || void 0 === cB ? void 0 : cB.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36964: (BB, IB, ZB) => {
    function TB(BB) {
      return BB.includes("Leaf Bed")
    }

    function JB(BB) {
      return / Bed(?: Head)?(?:\||$)/.test(BB) && !TB(BB)
    }

    function oB(BB) {
      return BB.includes(" Strongbed")
    }

    function GB(BB) {
      return TB(BB) || JB(BB) || oB(BB)
    }
    ZB.d(IB, {
      d: () => GB,
      h: () => TB,
      i: () => oB,
      k: () => JB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);