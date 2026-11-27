export const id = 9;
export const ids = [9];
export const modules = {
  40540: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => tR
    });
    var yR = GR(39198);
    const tR = function(RR, JR, GR) {
      let tR;
      return {
        plugins: {
          placeAgainstBeds: (0, yR.e)()
        },
        onCreate: RR => {
          tR = RR
        },
        onPlayerAltAction: (RR, JR, GR, yR, uR, ZR) => {
          ((RR, JR) => {
            if (!JR || "Mesh" !== tR.getEntityType(JR)) return;
            const GR = tR.getEntityName(JR);
            "Upgrades" === GR ? tR.openShop(RR, !1, "Upgrades") : "Items" === GR && tR.openShop(RR, !1, "Recommended")
          })(RR, ZR)
        }
      }
    }
  },
  39198: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR
    });
    var yR = GR(377),
      tR = GR(38040),
      uR = GR(5290);
    const ZR = ["Leaf Bed", "_Leaf Bed Head", ...yR.Cc.flatMap((RR => [`${RR} Bed`, `_${RR} Bed Head`, `${RR} Strongbed`, `_${RR} Strongbed Head`]))];

    function qR() {
      let RR;
      return {
        onCreate(JR) {
          RR = JR
        },
        altVetoBlocks: ZR,
        onPlayerAttemptAltAction(JR, GR, yR, ZR, qR, iR) {
          var fR;
          if ((0, tR.d)(RR.getMetaInfo(qR).rootName) && !RR.isEntityInteractable(iR) && (0, uR.c)(null === (fR = RR.uyR(JR)) || void 0 === fR ? void 0 : fR.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  38040: (RR, JR, GR) => {
    function yR(RR) {
      return RR.includes("Leaf Bed")
    }

    function tR(RR) {
      return / Bed(?: Head)?(?:\||$)/.test(RR) && !yR(RR)
    }

    function uR(RR) {
      return RR.includes(" Strongbed")
    }

    function ZR(RR) {
      return yR(RR) || tR(RR) || uR(RR)
    }
    GR.d(JR, {
      d: () => ZR,
      f: () => yR,
      h: () => uR,
      k: () => tR
    })
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);