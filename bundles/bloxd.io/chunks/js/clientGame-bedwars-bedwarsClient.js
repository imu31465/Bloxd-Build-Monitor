export const id = 9;
export const ids = [9];
export const modules = {
  40628: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => Hb
    });
    var eb = Mb(39270);
    const Hb = function(bb, wb, Mb) {
      let Hb;
      return {
        plugins: {
          placeAgainstBeds: (0, eb.c)()
        },
        onCreate: bb => {
          Hb = bb
        },
        onPlayerAltAction: (bb, wb, Mb, eb, pb, Vb) => {
          ((bb, wb) => {
            if (!wb || "Mesh" !== Hb.getEntityType(wb)) return;
            const Mb = Hb.getEntityName(wb);
            "Upgrades" === Mb ? Hb.openShop(bb, !1, "Upgrades") : "Items" === Mb && Hb.openShop(bb, !1, "Recommended")
          })(bb, Vb)
        }
      }
    }
  },
  39270: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => gb
    });
    var eb = Mb(382),
      Hb = Mb(38145),
      pb = Mb(5324);
    const Vb = ["Leaf Bed", "_Leaf Bed Head", ...eb.Uc.flatMap((bb => [`${bb} Bed`, `_${bb} Bed Head`, `${bb} Strongbed`, `_${bb} Strongbed Head`]))];

    function gb() {
      let bb;
      return {
        onCreate(wb) {
          bb = wb
        },
        altVetoBlocks: Vb,
        onPlayerAttemptAltAction(wb, Mb, eb, Vb, gb, lb) {
          var Lb;
          if ((0, Hb.e)(bb.getMetaInfo(gb).rootName) && !bb.isEntityInteractable(lb) && (0, pb.f)(null === (Lb = bb.Leb(wb)) || void 0 === Lb ? void 0 : Lb.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  38145: (bb, wb, Mb) => {
    function eb(bb) {
      return bb.includes("Leaf Bed")
    }

    function Hb(bb) {
      return / Bed(?: Head)?(?:\||$)/.test(bb) && !eb(bb)
    }

    function pb(bb) {
      return bb.includes(" Strongbed")
    }

    function Vb(bb) {
      return eb(bb) || Hb(bb) || pb(bb)
    }
    Mb.d(wb, {
      e: () => Vb,
      f: () => eb,
      g: () => pb,
      i: () => Hb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);