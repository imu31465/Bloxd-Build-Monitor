export const id = 9;
export const ids = [9];
export const modules = {
  40505: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => EW
    });
    var mW = OW(39220);
    const EW = function(WW, iW, OW) {
      let EW;
      return {
        plugins: {
          placeAgainstBeds: (0, mW.d)()
        },
        onCreate: WW => {
          EW = WW
        },
        onPlayerAltAction: (WW, iW, OW, mW, NW, PW) => {
          ((WW, iW) => {
            if (!iW || "Mesh" !== EW.getEntityType(iW)) return;
            const OW = EW.getEntityName(iW);
            "Upgrades" === OW ? EW.openShop(WW, !1, "Upgrades") : "Items" === OW && EW.openShop(WW, !1, "Recommended")
          })(WW, PW)
        }
      }
    }
  },
  39220: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => LW
    });
    var mW = OW(344),
      EW = OW(38097),
      NW = OW(5187);
    const PW = ["Leaf Bed", "_Leaf Bed Head", ...mW.yc.flatMap((WW => [`${WW} Bed`, `_${WW} Bed Head`, `${WW} Strongbed`, `_${WW} Strongbed Head`]))];

    function LW() {
      let WW;
      return {
        onCreate(iW) {
          WW = iW
        },
        altVetoBlocks: PW,
        onPlayerAttemptAltAction(iW, OW, mW, PW, LW, cW) {
          var wW;
          if ((0, EW.d)(WW.getMetaInfo(LW).rootName) && !WW.isEntityInteractable(cW) && (0, NW.f)(null === (wW = WW.kOW(iW)) || void 0 === wW ? void 0 : wW.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  38097: (WW, iW, OW) => {
    function mW(WW) {
      return WW.includes("Leaf Bed")
    }

    function EW(WW) {
      return / Bed(?: Head)?(?:\||$)/.test(WW) && !mW(WW)
    }

    function NW(WW) {
      return WW.includes(" Strongbed")
    }

    function PW(WW) {
      return mW(WW) || EW(WW) || NW(WW)
    }
    OW.d(iW, {
      d: () => PW,
      f: () => mW,
      j: () => NW,
      l: () => EW
    })
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);