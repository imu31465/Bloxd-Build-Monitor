export const id = 9;
export const ids = [9];
export const modules = {
  38832: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      default: () => fk
    });
    var Dk = ik(37617);
    const fk = function(kk, ek, ik) {
      let fk;
      return {
        plugins: {
          placeAgainstBeds: (0, Dk.e)()
        },
        onCreate: kk => {
          fk = kk
        },
        onPlayerAltAction: (kk, ek, ik, Dk, Sk, bk) => {
          ((kk, ek) => {
            if (!ek || "Mesh" !== fk.getEntityType(ek)) return;
            const ik = fk.getEntityName(ek);
            "Upgrades" === ik ? fk.openShop(kk, !1, "Upgrades") : "Items" === ik && fk.openShop(kk, !1, "Recommended")
          })(kk, bk)
        }
      }
    }
  },
  37617: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => rk
    });
    var Dk = ik(314),
      fk = ik(36530),
      Sk = ik(4417);
    const bk = ["Leaf Bed", "_Leaf Bed Head", ...Dk.xc.flatMap((kk => [`${kk} Bed`, `_${kk} Bed Head`, `${kk} Strongbed`, `_${kk} Strongbed Head`]))];

    function rk() {
      let kk;
      return {
        onCreate(ek) {
          kk = ek
        },
        altVetoBlocks: bk,
        onPlayerAttemptAltAction(ek, ik, Dk, bk, rk, Pk) {
          var mk;
          if ((0, fk.d)(kk.getMetaInfo(rk).rootName) && !kk.isEntityInteractable(Pk) && (0, Sk.f)(null === (mk = kk.jek(ek)) || void 0 === mk ? void 0 : mk.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36530: (kk, ek, ik) => {
    function Dk(kk) {
      return kk.includes("Leaf Bed")
    }

    function fk(kk) {
      return / Bed(?: Head)?(?:\||$)/.test(kk) && !Dk(kk)
    }

    function Sk(kk) {
      return kk.includes(" Strongbed")
    }

    function bk(kk) {
      return Dk(kk) || fk(kk) || Sk(kk)
    }
    ik.d(ek, {
      d: () => bk,
      h: () => Dk,
      i: () => Sk,
      l: () => fk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);