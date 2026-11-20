export const id = 9;
export const ids = [9];
export const modules = {
  39053: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => MT
    });
    var lT = cT(37879);
    const MT = function(TT, kT, cT) {
      let MT;
      return {
        plugins: {
          placeAgainstBeds: (0, lT.d)()
        },
        onCreate: TT => {
          MT = TT
        },
        onPlayerAltAction: (TT, kT, cT, lT, KT, OT) => {
          ((TT, kT) => {
            if (!kT || "Mesh" !== MT.getEntityType(kT)) return;
            const cT = MT.getEntityName(kT);
            "Upgrades" === cT ? MT.openShop(TT, !1, "Upgrades") : "Items" === cT && MT.openShop(TT, !1, "Recommended")
          })(TT, OT)
        }
      }
    }
  },
  37879: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => yT
    });
    var lT = cT(339),
      MT = cT(36761),
      KT = cT(4454);
    const OT = ["Leaf Bed", "_Leaf Bed Head", ...lT.Bc.flatMap((TT => [`${TT} Bed`, `_${TT} Bed Head`, `${TT} Strongbed`, `_${TT} Strongbed Head`]))];

    function yT() {
      let TT;
      return {
        onCreate(kT) {
          TT = kT
        },
        altVetoBlocks: OT,
        onPlayerAttemptAltAction(kT, cT, lT, OT, yT, fT) {
          var xT;
          if ((0, MT.c)(TT.getMetaInfo(yT).rootName) && !TT.isEntityInteractable(fT) && (0, KT.i)(null === (xT = TT.ckT(kT)) || void 0 === xT ? void 0 : xT.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36761: (TT, kT, cT) => {
    function lT(TT) {
      return TT.includes("Leaf Bed")
    }

    function MT(TT) {
      return / Bed(?: Head)?(?:\||$)/.test(TT) && !lT(TT)
    }

    function KT(TT) {
      return TT.includes(" Strongbed")
    }

    function OT(TT) {
      return lT(TT) || MT(TT) || KT(TT)
    }
    cT.d(kT, {
      c: () => OT,
      d: () => lT,
      e: () => KT,
      g: () => MT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);