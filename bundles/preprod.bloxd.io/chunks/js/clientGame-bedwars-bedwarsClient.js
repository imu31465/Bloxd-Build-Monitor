export const id = 9;
export const ids = [9];
export const modules = {
  40245: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => rH
    });
    var AH = LH(38905);
    const rH = function(HH, BH, LH) {
      let rH;
      return {
        plugins: {
          placeAgainstBeds: (0, AH.e)()
        },
        onCreate: HH => {
          rH = HH
        },
        onPlayerAltAction: (HH, BH, LH, AH, SH, hH) => {
          ((HH, BH) => {
            if (!BH || "Mesh" !== rH.getEntityType(BH)) return;
            const LH = rH.getEntityName(BH);
            "Upgrades" === LH ? rH.openShop(HH, !1, "Upgrades") : "Items" === LH && rH.openShop(HH, !1, "Recommended")
          })(HH, hH)
        }
      }
    }
  },
  38905: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => tH
    });
    var AH = LH(317),
      rH = LH(37798),
      SH = LH(4879);
    const hH = ["Leaf Bed", "_Leaf Bed Head", ...AH.Mc.flatMap((HH => [`${HH} Bed`, `_${HH} Bed Head`, `${HH} Strongbed`, `_${HH} Strongbed Head`]))];

    function tH() {
      let HH;
      return {
        onCreate(BH) {
          HH = BH
        },
        altVetoBlocks: hH,
        onPlayerAttemptAltAction(BH, LH, AH, hH, tH, zH) {
          var CH;
          if ((0, rH.d)(HH.getMetaInfo(tH).rootName) && !HH.isEntityInteractable(zH) && (0, SH.e)(null === (CH = HH.yLH(BH)) || void 0 === CH ? void 0 : CH.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  37798: (HH, BH, LH) => {
    function AH(HH) {
      return HH.includes("Leaf Bed")
    }

    function rH(HH) {
      return / Bed(?: Head)?(?:\||$)/.test(HH) && !AH(HH)
    }

    function SH(HH) {
      return HH.includes(" Strongbed")
    }

    function hH(HH) {
      return AH(HH) || rH(HH) || SH(HH)
    }
    LH.d(BH, {
      d: () => hH,
      h: () => AH,
      l: () => SH,
      m: () => rH
    })
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);