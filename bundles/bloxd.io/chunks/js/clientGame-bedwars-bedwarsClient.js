export const id = 9;
export const ids = [9];
export const modules = {
  40850: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => Wr
    });
    var Zr = Qr(39525);
    const Wr = function(rr, Sr, Qr) {
      let Wr;
      return {
        plugins: {
          placeAgainstBeds: (0, Zr.b)()
        },
        onCreate: rr => {
          Wr = rr
        },
        onPlayerAltAction: (rr, Sr, Qr, Zr, ar, jr) => {
          ((rr, Sr) => {
            if (!Sr || "Mesh" !== Wr.getEntityType(Sr)) return;
            const Qr = Wr.getEntityName(Sr);
            "Upgrades" === Qr ? Wr.openShop(rr, !1, "Upgrades") : "Items" === Qr && Wr.openShop(rr, !1, "Recommended")
          })(rr, jr)
        }
      }
    }
  },
  39525: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ir
    });
    var Zr = Qr(379),
      Wr = Qr(38397),
      ar = Qr(5229);
    const jr = ["Leaf Bed", "_Leaf Bed Head", ...Zr.Cc.flatMap((rr => [`${rr} Bed`, `_${rr} Bed Head`, `${rr} Strongbed`, `_${rr} Strongbed Head`]))];

    function Ir() {
      let rr;
      return {
        onCreate(Sr) {
          rr = Sr
        },
        altVetoBlocks: jr,
        onPlayerAttemptAltAction(Sr, Qr, Zr, jr, Ir, fr) {
          var Er;
          if ((0, Wr.c)(rr.getMetaInfo(Ir).rootName) && !rr.isEntityInteractable(fr) && (0, ar.h)(null === (Er = rr.XQr(Sr)) || void 0 === Er ? void 0 : Er.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  38397: (rr, Sr, Qr) => {
    function Zr(rr) {
      return rr.includes("Leaf Bed")
    }

    function Wr(rr) {
      return / Bed(?: Head)?(?:\||$)/.test(rr) && !Zr(rr)
    }

    function ar(rr) {
      return rr.includes(" Strongbed")
    }

    function jr(rr) {
      return Zr(rr) || Wr(rr) || ar(rr)
    }
    Qr.d(Sr, {
      c: () => jr,
      f: () => Zr,
      h: () => ar,
      i: () => Wr
    })
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);