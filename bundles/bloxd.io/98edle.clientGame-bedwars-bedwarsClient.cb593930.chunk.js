export const id = 8;
export const ids = [8];
export const modules = {
  37238: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      default: () => CW
    });
    var wW = MW(36092);
    const CW = function(WW, RW, MW) {
      let CW;
      return {
        plugins: {
          placeAgainstBeds: (0, wW.d)()
        },
        onCreate: WW => {
          CW = WW
        },
        onPlayerAltAction: (WW, RW, MW, wW, zR, AW) => {
          ((WW, RW) => {
            if (!RW || "Mesh" !== CW.getEntityType(RW)) return;
            const MW = CW.getEntityName(RW);
            "Upgrades" === MW ? CW.openShop(WW, !1, "Upgrades") : "Items" === MW && CW.openShop(WW, !1, "Recommended")
          })(WW, AW)
        }
      }
    }
  },
  36092: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => bR
    });
    var wW = MW(284),
      CW = MW(35105),
      zR = MW(3520);
    const AW = ["Leaf Bed", "_Leaf Bed Head", ...wW.Fc.flatMap((WW => [`${WW} Bed`, `_${WW} Bed Head`, `${WW} Strongbed`, `_${WW} Strongbed Head`]))];

    function bR() {
      let WW;
      return {
        onCreate(RW) {
          WW = RW
        },
        altVetoBlocks: AW,
        onPlayerAttemptAltAction(RW, MW, wW, AW, bR, yR) {
          var NW;
          if ((0, CW.c)(WW.getMetaInfo(bR).rootName) && !WW.isEntityInteractable(yR) && (0, zR.e)(null === (NW = WW.HbW(RW)) || void 0 === NW ? void 0 : NW.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  35105: (WW, RW, MW) => {
    function wW(WW) {
      return WW.includes("Leaf Bed")
    }

    function CW(WW) {
      return / Bed(?: Head)?(?:\||$)/.test(WW) && !wW(WW)
    }

    function zR(WW) {
      return WW.includes(" Strongbed")
    }

    function AW(WW) {
      return wW(WW) || CW(WW) || zR(WW)
    }
    MW.d(RW, {
      c: () => AW,
      e: () => wW,
      h: () => zR,
      i: () => CW
    })
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);