export const id = 9;
export const ids = [9];
export const modules = {
  38214: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => UJ
    });
    var FJ = ZJ(37001);
    const UJ = function(JJ, cJ, ZJ) {
      let UJ;
      return {
        plugins: {
          placeAgainstBeds: (0, FJ.c)()
        },
        onCreate: JJ => {
          UJ = JJ
        },
        onPlayerAltAction: (JJ, cJ, ZJ, FJ, eJ, XJ) => {
          ((JJ, cJ) => {
            if (!cJ || "Mesh" !== UJ.getEntityType(cJ)) return;
            const ZJ = UJ.getEntityName(cJ);
            "Upgrades" === ZJ ? UJ.openShop(JJ, !1, "Upgrades") : "Items" === ZJ && UJ.openShop(JJ, !1, "Recommended")
          })(JJ, XJ)
        }
      }
    }
  },
  37001: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => AJ
    });
    var FJ = ZJ(235),
      UJ = ZJ(35948),
      eJ = ZJ(3898);
    const XJ = ["Leaf Bed", "_Leaf Bed Head", ...FJ.pc.flatMap((JJ => [`${JJ} Bed`, `_${JJ} Bed Head`, `${JJ} Strongbed`, `_${JJ} Strongbed Head`]))];

    function AJ() {
      let JJ;
      return {
        onCreate(cJ) {
          JJ = cJ
        },
        altVetoBlocks: XJ,
        onPlayerAttemptAltAction(cJ, ZJ, FJ, XJ, AJ, qJ) {
          var jJ;
          if ((0, UJ.e)(JJ.getMetaInfo(AJ).rootName) && !JJ.isEntityInteractable(qJ) && (0, eJ.d)(null === (jJ = JJ.WcJ(cJ)) || void 0 === jJ ? void 0 : jJ.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  35948: (JJ, cJ, ZJ) => {
    function FJ(JJ) {
      return JJ.includes("Leaf Bed")
    }

    function UJ(JJ) {
      return / Bed(?: Head)?(?:\||$)/.test(JJ) && !FJ(JJ)
    }

    function eJ(JJ) {
      return JJ.includes(" Strongbed")
    }

    function XJ(JJ) {
      return FJ(JJ) || UJ(JJ) || eJ(JJ)
    }
    ZJ.d(cJ, {
      e: () => XJ,
      h: () => FJ,
      l: () => eJ,
      m: () => UJ
    })
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);