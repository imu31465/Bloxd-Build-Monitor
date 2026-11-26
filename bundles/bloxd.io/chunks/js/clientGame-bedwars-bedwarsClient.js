export const id = 9;
export const ids = [9];
export const modules = {
  39987: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => DB
    });
    var YB = GB(38703);
    const DB = function(BB, OB, GB) {
      let DB;
      return {
        plugins: {
          placeAgainstBeds: (0, YB.e)()
        },
        onCreate: BB => {
          DB = BB
        },
        onPlayerAltAction: (BB, OB, GB, YB, QB, oB) => {
          ((BB, OB) => {
            if (!OB || "Mesh" !== DB.getEntityType(OB)) return;
            const GB = DB.getEntityName(OB);
            "Upgrades" === GB ? DB.openShop(BB, !1, "Upgrades") : "Items" === GB && DB.openShop(BB, !1, "Recommended")
          })(BB, oB)
        }
      }
    }
  },
  38703: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => jB
    });
    var YB = GB(353),
      DB = GB(37633),
      QB = GB(4896);
    const oB = ["Leaf Bed", "_Leaf Bed Head", ...YB.Vc.flatMap((BB => [`${BB} Bed`, `_${BB} Bed Head`, `${BB} Strongbed`, `_${BB} Strongbed Head`]))];

    function jB() {
      let BB;
      return {
        onCreate(OB) {
          BB = OB
        },
        altVetoBlocks: oB,
        onPlayerAttemptAltAction(OB, GB, YB, oB, jB, yB) {
          var JB;
          if ((0, DB.b)(BB.getMetaInfo(jB).rootName) && !BB.isEntityInteractable(yB) && (0, QB.h)(null === (JB = BB.MYB(OB)) || void 0 === JB ? void 0 : JB.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  37633: (BB, OB, GB) => {
    function YB(BB) {
      return BB.includes("Leaf Bed")
    }

    function DB(BB) {
      return / Bed(?: Head)?(?:\||$)/.test(BB) && !YB(BB)
    }

    function QB(BB) {
      return BB.includes(" Strongbed")
    }

    function oB(BB) {
      return YB(BB) || DB(BB) || QB(BB)
    }
    GB.d(OB, {
      b: () => oB,
      d: () => YB,
      f: () => QB,
      i: () => DB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);