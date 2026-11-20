export const id = 9;
export const ids = [9];
export const modules = {
  39206: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => lq
    });
    var Yq = gq(38011);
    const lq = function(qq, Eq, gq) {
      let lq;
      return {
        plugins: {
          placeAgainstBeds: (0, Yq.b)()
        },
        onCreate: qq => {
          lq = qq
        },
        onPlayerAltAction: (qq, Eq, gq, Yq, Oq, mq) => {
          ((qq, Eq) => {
            if (!Eq || "Mesh" !== lq.getEntityType(Eq)) return;
            const gq = lq.getEntityName(Eq);
            "Upgrades" === gq ? lq.openShop(qq, !1, "Upgrades") : "Items" === gq && lq.openShop(qq, !1, "Recommended")
          })(qq, mq)
        }
      }
    }
  },
  38011: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => xq
    });
    var Yq = gq(307),
      lq = gq(36985),
      Oq = gq(4299);
    const mq = ["Leaf Bed", "_Leaf Bed Head", ...Yq.Tc.flatMap((qq => [`${qq} Bed`, `_${qq} Bed Head`, `${qq} Strongbed`, `_${qq} Strongbed Head`]))];

    function xq() {
      let qq;
      return {
        onCreate(Eq) {
          qq = Eq
        },
        altVetoBlocks: mq,
        onPlayerAttemptAltAction(Eq, gq, Yq, mq, xq, Aq) {
          var cq;
          if ((0, lq.b)(qq.getMetaInfo(xq).rootName) && !qq.isEntityInteractable(Aq) && (0, Oq.g)(null === (cq = qq.Ngq(Eq)) || void 0 === cq ? void 0 : cq.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36985: (qq, Eq, gq) => {
    function Yq(qq) {
      return qq.includes("Leaf Bed")
    }

    function lq(qq) {
      return / Bed(?: Head)?(?:\||$)/.test(qq) && !Yq(qq)
    }

    function Oq(qq) {
      return qq.includes(" Strongbed")
    }

    function mq(qq) {
      return Yq(qq) || lq(qq) || Oq(qq)
    }
    gq.d(Eq, {
      b: () => mq,
      c: () => Yq,
      d: () => Oq,
      f: () => lq
    })
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);