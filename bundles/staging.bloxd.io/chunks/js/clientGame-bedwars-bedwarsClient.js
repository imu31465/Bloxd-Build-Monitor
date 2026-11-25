export const id = 9;
export const ids = [9];
export const modules = {
  39571: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => Uu
    });
    var su = ju(38413);
    const Uu = function(uu, Eu, ju) {
      let Uu;
      return {
        plugins: {
          placeAgainstBeds: (0, su.b)()
        },
        onCreate: uu => {
          Uu = uu
        },
        onPlayerAltAction: (uu, Eu, ju, su, Zu, Xu) => {
          ((uu, Eu) => {
            if (!Eu || "Mesh" !== Uu.getEntityType(Eu)) return;
            const ju = Uu.getEntityName(Eu);
            "Upgrades" === ju ? Uu.openShop(uu, !1, "Upgrades") : "Items" === ju && Uu.openShop(uu, !1, "Recommended")
          })(uu, Xu)
        }
      }
    }
  },
  38413: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => lu
    });
    var su = ju(349),
      Uu = ju(37332),
      Zu = ju(4660);
    const Xu = ["Leaf Bed", "_Leaf Bed Head", ...su.Lc.flatMap((uu => [`${uu} Bed`, `_${uu} Bed Head`, `${uu} Strongbed`, `_${uu} Strongbed Head`]))];

    function lu() {
      let uu;
      return {
        onCreate(Eu) {
          uu = Eu
        },
        altVetoBlocks: Xu,
        onPlayerAttemptAltAction(Eu, ju, su, Xu, lu, qu) {
          var fu;
          if ((0, Uu.d)(uu.getMetaInfo(lu).rootName) && !uu.isEntityInteractable(qu) && (0, Zu.d)(null === (fu = uu.yEu(Eu)) || void 0 === fu ? void 0 : fu.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  37332: (uu, Eu, ju) => {
    function su(uu) {
      return uu.includes("Leaf Bed")
    }

    function Uu(uu) {
      return / Bed(?: Head)?(?:\||$)/.test(uu) && !su(uu)
    }

    function Zu(uu) {
      return uu.includes(" Strongbed")
    }

    function Xu(uu) {
      return su(uu) || Uu(uu) || Zu(uu)
    }
    ju.d(Eu, {
      d: () => Xu,
      f: () => su,
      j: () => Zu,
      n: () => Uu
    })
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);