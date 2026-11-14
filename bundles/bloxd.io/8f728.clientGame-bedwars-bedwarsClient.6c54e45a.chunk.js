export const id = 9;
export const ids = [9];
export const modules = {
  37706: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      default: () => Ic
    });
    var Vc = nc(36588);
    const Ic = function(cB, Bc, nc) {
      let Ic;
      return {
        plugins: {
          placeAgainstBeds: (0, Vc.d)()
        },
        onCreate: cB => {
          Ic = cB
        },
        onPlayerAltAction: (cB, Bc, nc, Vc, rB, uc) => {
          ((cB, Bc) => {
            if (!Bc || "Mesh" !== Ic.getEntityType(Bc)) return;
            const nc = Ic.getEntityName(Bc);
            "Upgrades" === nc ? Ic.openShop(cB, !1, "Upgrades") : "Items" === nc && Ic.openShop(cB, !1, "Recommended")
          })(cB, uc)
        }
      }
    }
  },
  36588: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => sc
    });
    var Vc = nc(302),
      Ic = nc(35538),
      rB = nc(3598);
    const uc = ["Leaf Bed", "_Leaf Bed Head", ...Vc.hc.flatMap((cB => [`${cB} Bed`, `_${cB} Bed Head`, `${cB} Strongbed`, `_${cB} Strongbed Head`]))];

    function sc() {
      let cB;
      return {
        onCreate(Bc) {
          cB = Bc
        },
        altVetoBlocks: uc,
        onPlayerAttemptAltAction(Bc, nc, Vc, uc, sc, Mc) {
          var Pc;
          if ((0, Ic.c)(cB.getMetaInfo(sc).rootName) && !cB.isEntityInteractable(Mc) && (0, rB.g)(null === (Pc = cB.lMc(Bc)) || void 0 === Pc ? void 0 : Pc.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  35538: (cB, Bc, nc) => {
    function Vc(cB) {
      return cB.includes("Leaf Bed")
    }

    function Ic(cB) {
      return / Bed(?: Head)?(?:\||$)/.test(cB) && !Vc(cB)
    }

    function rB(cB) {
      return cB.includes(" Strongbed")
    }

    function uc(cB) {
      return Vc(cB) || Ic(cB) || rB(cB)
    }
    nc.d(Bc, {
      c: () => uc,
      g: () => Vc,
      k: () => rB,
      o: () => Ic
    })
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);