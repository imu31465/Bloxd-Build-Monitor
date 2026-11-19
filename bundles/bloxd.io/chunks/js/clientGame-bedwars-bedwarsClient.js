export const id = 9;
export const ids = [9];
export const modules = {
  38591: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => AY
    });
    var FY = DY(37376);
    const AY = function(YY, rY, DY) {
      let AY;
      return {
        plugins: {
          placeAgainstBeds: (0, FY.d)()
        },
        onCreate: YY => {
          AY = YY
        },
        onPlayerAltAction: (YY, rY, DY, FY, IY, RY) => {
          ((YY, rY) => {
            if (!rY || "Mesh" !== AY.getEntityType(rY)) return;
            const DY = AY.getEntityName(rY);
            "Upgrades" === DY ? AY.openShop(YY, !1, "Upgrades") : "Items" === DY && AY.openShop(YY, !1, "Recommended")
          })(YY, RY)
        }
      }
    }
  },
  37376: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => OY
    });
    var FY = DY(341),
      AY = DY(36318),
      IY = DY(4020);
    const RY = ["Leaf Bed", "_Leaf Bed Head", ...FY.Fc.flatMap((YY => [`${YY} Bed`, `_${YY} Bed Head`, `${YY} Strongbed`, `_${YY} Strongbed Head`]))];

    function OY() {
      let YY;
      return {
        onCreate(rY) {
          YY = rY
        },
        altVetoBlocks: RY,
        onPlayerAttemptAltAction(rY, DY, FY, RY, OY, gY) {
          var aY;
          if ((0, AY.e)(YY.getMetaInfo(OY).rootName) && !YY.isEntityInteractable(gY) && (0, IY.f)(null === (aY = YY.rrY(rY)) || void 0 === aY ? void 0 : aY.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36318: (YY, rY, DY) => {
    function FY(YY) {
      return YY.includes("Leaf Bed")
    }

    function AY(YY) {
      return / Bed(?: Head)?(?:\||$)/.test(YY) && !FY(YY)
    }

    function IY(YY) {
      return YY.includes(" Strongbed")
    }

    function RY(YY) {
      return FY(YY) || AY(YY) || IY(YY)
    }
    DY.d(rY, {
      e: () => RY,
      h: () => FY,
      i: () => IY,
      l: () => AY
    })
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);