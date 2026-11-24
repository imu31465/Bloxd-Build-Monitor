export const id = 9;
export const ids = [9];
export const modules = {
  39277: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => Tk
    });
    var Xk = Ik(38038);
    const Tk = function(kk, Fk, Ik) {
      let Tk;
      return {
        plugins: {
          placeAgainstBeds: (0, Xk.c)()
        },
        onCreate: kk => {
          Tk = kk
        },
        onPlayerAltAction: (kk, Fk, Ik, Xk, ik, yk) => {
          ((kk, Fk) => {
            if (!Fk || "Mesh" !== Tk.getEntityType(Fk)) return;
            const Ik = Tk.getEntityName(Fk);
            "Upgrades" === Ik ? Tk.openShop(kk, !1, "Upgrades") : "Items" === Ik && Tk.openShop(kk, !1, "Recommended")
          })(kk, yk)
        }
      }
    }
  },
  38038: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => lk
    });
    var Xk = Ik(337),
      Tk = Ik(36976),
      ik = Ik(4475);
    const yk = ["Leaf Bed", "_Leaf Bed Head", ...Xk.Mc.flatMap((kk => [`${kk} Bed`, `_${kk} Bed Head`, `${kk} Strongbed`, `_${kk} Strongbed Head`]))];

    function lk() {
      let kk;
      return {
        onCreate(Fk) {
          kk = Fk
        },
        altVetoBlocks: yk,
        onPlayerAttemptAltAction(Fk, Ik, Xk, yk, lk, ak) {
          var qk;
          if ((0, Tk.e)(kk.getMetaInfo(lk).rootName) && !kk.isEntityInteractable(ak) && (0, ik.e)(null === (qk = kk.BFk(Fk)) || void 0 === qk ? void 0 : qk.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36976: (kk, Fk, Ik) => {
    function Xk(kk) {
      return kk.includes("Leaf Bed")
    }

    function Tk(kk) {
      return / Bed(?: Head)?(?:\||$)/.test(kk) && !Xk(kk)
    }

    function ik(kk) {
      return kk.includes(" Strongbed")
    }

    function yk(kk) {
      return Xk(kk) || Tk(kk) || ik(kk)
    }
    Ik.d(Fk, {
      e: () => yk,
      h: () => Xk,
      i: () => ik,
      l: () => Tk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);