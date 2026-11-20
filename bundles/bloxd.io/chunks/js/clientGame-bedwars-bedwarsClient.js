export const id = 9;
export const ids = [9];
export const modules = {
  38868: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => tk
    });
    var Rk = Bk(37712);
    const tk = function(kk, Fk, Bk) {
      let tk;
      return {
        plugins: {
          placeAgainstBeds: (0, Rk.b)()
        },
        onCreate: kk => {
          tk = kk
        },
        onPlayerAltAction: (kk, Fk, Bk, Rk, ak, Xk) => {
          ((kk, Fk) => {
            if (!Fk || "Mesh" !== tk.getEntityType(Fk)) return;
            const Bk = tk.getEntityName(Fk);
            "Upgrades" === Bk ? tk.openShop(kk, !1, "Upgrades") : "Items" === Bk && tk.openShop(kk, !1, "Recommended")
          })(kk, Xk)
        }
      }
    }
  },
  37712: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => bk
    });
    var Rk = Bk(291),
      tk = Bk(36614),
      ak = Bk(4215);
    const Xk = ["Leaf Bed", "_Leaf Bed Head", ...Rk.Kc.flatMap((kk => [`${kk} Bed`, `_${kk} Bed Head`, `${kk} Strongbed`, `_${kk} Strongbed Head`]))];

    function bk() {
      let kk;
      return {
        onCreate(Fk) {
          kk = Fk
        },
        altVetoBlocks: Xk,
        onPlayerAttemptAltAction(Fk, Bk, Rk, Xk, bk, wk) {
          var dk;
          if ((0, tk.b)(kk.getMetaInfo(bk).rootName) && !kk.isEntityInteractable(wk) && (0, ak.d)(null === (dk = kk.LFk(Fk)) || void 0 === dk ? void 0 : dk.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36614: (kk, Fk, Bk) => {
    function Rk(kk) {
      return kk.includes("Leaf Bed")
    }

    function tk(kk) {
      return / Bed(?: Head)?(?:\||$)/.test(kk) && !Rk(kk)
    }

    function ak(kk) {
      return kk.includes(" Strongbed")
    }

    function Xk(kk) {
      return Rk(kk) || tk(kk) || ak(kk)
    }
    Bk.d(Fk, {
      b: () => Xk,
      f: () => Rk,
      i: () => ak,
      l: () => tk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);