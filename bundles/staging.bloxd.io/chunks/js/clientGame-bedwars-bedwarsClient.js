export const id = 9;
export const ids = [9];
export const modules = {
  39692: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => SG
    });
    var wG = ZG(38445);
    const SG = function(GG, bG, ZG) {
      let SG;
      return {
        plugins: {
          placeAgainstBeds: (0, wG.c)()
        },
        onCreate: GG => {
          SG = GG
        },
        onPlayerAltAction: (GG, bG, ZG, wG, LG, yG) => {
          ((GG, bG) => {
            if (!bG || "Mesh" !== SG.getEntityType(bG)) return;
            const ZG = SG.getEntityName(bG);
            "Upgrades" === ZG ? SG.openShop(GG, !1, "Upgrades") : "Items" === ZG && SG.openShop(GG, !1, "Recommended")
          })(GG, yG)
        }
      }
    }
  },
  38445: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => kG
    });
    var wG = ZG(352),
      SG = ZG(37287),
      LG = ZG(4492);
    const yG = ["Leaf Bed", "_Leaf Bed Head", ...wG.Sc.flatMap((GG => [`${GG} Bed`, `_${GG} Bed Head`, `${GG} Strongbed`, `_${GG} Strongbed Head`]))];

    function kG() {
      let GG;
      return {
        onCreate(bG) {
          GG = bG
        },
        altVetoBlocks: yG,
        onPlayerAttemptAltAction(bG, ZG, wG, yG, kG, UG) {
          var YG;
          if ((0, SG.d)(GG.getMetaInfo(kG).rootName) && !GG.isEntityInteractable(UG) && (0, LG.d)(null === (YG = GG.YZG(bG)) || void 0 === YG ? void 0 : YG.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  37287: (GG, bG, ZG) => {
    function wG(GG) {
      return GG.includes("Leaf Bed")
    }

    function SG(GG) {
      return / Bed(?: Head)?(?:\||$)/.test(GG) && !wG(GG)
    }

    function LG(GG) {
      return GG.includes(" Strongbed")
    }

    function yG(GG) {
      return wG(GG) || SG(GG) || LG(GG)
    }
    ZG.d(bG, {
      d: () => yG,
      f: () => wG,
      j: () => LG,
      n: () => SG
    })
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);