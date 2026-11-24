export const id = 9;
export const ids = [9];
export const modules = {
  39390: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => zT
    });
    var WT = mT(38164);
    const zT = function(TT, UT, mT) {
      let zT;
      return {
        plugins: {
          placeAgainstBeds: (0, WT.b)()
        },
        onCreate: TT => {
          zT = TT
        },
        onPlayerAltAction: (TT, UT, mT, WT, MT, gT) => {
          ((TT, UT) => {
            if (!UT || "Mesh" !== zT.getEntityType(UT)) return;
            const mT = zT.getEntityName(UT);
            "Upgrades" === mT ? zT.openShop(TT, !1, "Upgrades") : "Items" === mT && zT.openShop(TT, !1, "Recommended")
          })(TT, gT)
        }
      }
    }
  },
  38164: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => nT
    });
    var WT = mT(366),
      zT = mT(37032),
      MT = mT(4594);
    const gT = ["Leaf Bed", "_Leaf Bed Head", ...WT._c.flatMap((TT => [`${TT} Bed`, `_${TT} Bed Head`, `${TT} Strongbed`, `_${TT} Strongbed Head`]))];

    function nT() {
      let TT;
      return {
        onCreate(UT) {
          TT = UT
        },
        altVetoBlocks: gT,
        onPlayerAttemptAltAction(UT, mT, WT, gT, nT, HT) {
          var kT;
          if ((0, zT.c)(TT.getMetaInfo(nT).rootName) && !TT.isEntityInteractable(HT) && (0, MT.f)(null === (kT = TT.RUT(UT)) || void 0 === kT ? void 0 : kT.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  37032: (TT, UT, mT) => {
    function WT(TT) {
      return TT.includes("Leaf Bed")
    }

    function zT(TT) {
      return / Bed(?: Head)?(?:\||$)/.test(TT) && !WT(TT)
    }

    function MT(TT) {
      return TT.includes(" Strongbed")
    }

    function gT(TT) {
      return WT(TT) || zT(TT) || MT(TT)
    }
    mT.d(UT, {
      c: () => gT,
      g: () => WT,
      j: () => MT,
      l: () => zT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);