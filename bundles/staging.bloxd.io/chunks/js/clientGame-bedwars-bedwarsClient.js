export const id = 9;
export const ids = [9];
export const modules = {
  39010: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => Ku
    });
    var Eu = yu(37784);
    const Ku = function(uu, Ru, yu) {
      let Ku;
      return {
        plugins: {
          placeAgainstBeds: (0, Eu.c)()
        },
        onCreate: uu => {
          Ku = uu
        },
        onPlayerAltAction: (uu, Ru, yu, Eu, Qu, mu) => {
          ((uu, Ru) => {
            if (!Ru || "Mesh" !== Ku.getEntityType(Ru)) return;
            const yu = Ku.getEntityName(Ru);
            "Upgrades" === yu ? Ku.openShop(uu, !1, "Upgrades") : "Items" === yu && Ku.openShop(uu, !1, "Recommended")
          })(uu, mu)
        }
      }
    }
  },
  37784: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ju
    });
    var Eu = yu(343),
      Ku = yu(36707),
      Qu = yu(4239);
    const mu = ["Leaf Bed", "_Leaf Bed Head", ...Eu.Tc.flatMap((uu => [`${uu} Bed`, `_${uu} Bed Head`, `${uu} Strongbed`, `_${uu} Strongbed Head`]))];

    function Ju() {
      let uu;
      return {
        onCreate(Ru) {
          uu = Ru
        },
        altVetoBlocks: mu,
        onPlayerAttemptAltAction(Ru, yu, Eu, mu, Ju, Nu) {
          var Xu;
          if ((0, Ku.b)(uu.getMetaInfo(Ju).rootName) && !uu.isEntityInteractable(Nu) && (0, Qu.e)(null === (Xu = uu.Xyu(Ru)) || void 0 === Xu ? void 0 : Xu.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36707: (uu, Ru, yu) => {
    function Eu(uu) {
      return uu.includes("Leaf Bed")
    }

    function Ku(uu) {
      return / Bed(?: Head)?(?:\||$)/.test(uu) && !Eu(uu)
    }

    function Qu(uu) {
      return uu.includes(" Strongbed")
    }

    function mu(uu) {
      return Eu(uu) || Ku(uu) || Qu(uu)
    }
    yu.d(Ru, {
      b: () => mu,
      d: () => Eu,
      e: () => Qu,
      f: () => Ku
    })
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);