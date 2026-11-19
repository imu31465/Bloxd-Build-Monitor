export const id = 9;
export const ids = [9];
export const modules = {
  38205: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => zT
    });
    var iT = IT(36984);
    const zT = function(TT, oT, IT) {
      let zT;
      return {
        plugins: {
          placeAgainstBeds: (0, iT.c)()
        },
        onCreate: TT => {
          zT = TT
        },
        onPlayerAltAction: (TT, oT, IT, iT, kT, WT) => {
          ((TT, oT) => {
            if (!oT || "Mesh" !== zT.getEntityType(oT)) return;
            const IT = zT.getEntityName(oT);
            "Upgrades" === IT ? zT.openShop(TT, !1, "Upgrades") : "Items" === IT && zT.openShop(TT, !1, "Recommended")
          })(TT, WT)
        }
      }
    }
  },
  36984: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => XT
    });
    var iT = IT(314),
      zT = IT(35882),
      kT = IT(3996);
    const WT = ["Leaf Bed", "_Leaf Bed Head", ...iT.vc.flatMap((TT => [`${TT} Bed`, `_${TT} Bed Head`, `${TT} Strongbed`, `_${TT} Strongbed Head`]))];

    function XT() {
      let TT;
      return {
        onCreate(oT) {
          TT = oT
        },
        altVetoBlocks: WT,
        onPlayerAttemptAltAction(oT, IT, iT, WT, XT, BT) {
          var FT;
          if ((0, zT.d)(TT.getMetaInfo(XT).rootName) && !TT.isEntityInteractable(BT) && (0, kT.g)(null === (FT = TT.eoT(oT)) || void 0 === FT ? void 0 : FT.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  35882: (TT, oT, IT) => {
    function iT(TT) {
      return TT.includes("Leaf Bed")
    }

    function zT(TT) {
      return / Bed(?: Head)?(?:\||$)/.test(TT) && !iT(TT)
    }

    function kT(TT) {
      return TT.includes(" Strongbed")
    }

    function WT(TT) {
      return iT(TT) || zT(TT) || kT(TT)
    }
    IT.d(oT, {
      d: () => WT,
      f: () => iT,
      g: () => kT,
      i: () => zT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);