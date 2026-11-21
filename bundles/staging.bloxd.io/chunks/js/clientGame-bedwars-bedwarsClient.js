export const id = 9;
export const ids = [9];
export const modules = {
  38795: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => qQ
    });
    var LQ = wQ(37571);
    const qQ = function(QQ, FQ, wQ) {
      let qQ;
      return {
        plugins: {
          placeAgainstBeds: (0, LQ.d)()
        },
        onCreate: QQ => {
          qQ = QQ
        },
        onPlayerAltAction: (QQ, FQ, wQ, LQ, oQ, DQ) => {
          ((QQ, FQ) => {
            if (!FQ || "Mesh" !== qQ.getEntityType(FQ)) return;
            const wQ = qQ.getEntityName(FQ);
            "Upgrades" === wQ ? qQ.openShop(QQ, !1, "Upgrades") : "Items" === wQ && qQ.openShop(QQ, !1, "Recommended")
          })(QQ, DQ)
        }
      }
    }
  },
  37571: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => kQ
    });
    var LQ = wQ(317),
      qQ = wQ(36561),
      oQ = wQ(4323);
    const DQ = ["Leaf Bed", "_Leaf Bed Head", ...LQ.Kc.flatMap((QQ => [`${QQ} Bed`, `_${QQ} Bed Head`, `${QQ} Strongbed`, `_${QQ} Strongbed Head`]))];

    function kQ() {
      let QQ;
      return {
        onCreate(FQ) {
          QQ = FQ
        },
        altVetoBlocks: DQ,
        onPlayerAttemptAltAction(FQ, wQ, LQ, DQ, kQ, vQ) {
          var mQ;
          if ((0, qQ.e)(QQ.getMetaInfo(kQ).rootName) && !QQ.isEntityInteractable(vQ) && (0, oQ.f)(null === (mQ = QQ.owQ(FQ)) || void 0 === mQ ? void 0 : mQ.typeObj.type)) return "preventAction"
        }
      }
    }
  },
  36561: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      return QQ.includes("Leaf Bed")
    }

    function qQ(QQ) {
      return / Bed(?: Head)?(?:\||$)/.test(QQ) && !LQ(QQ)
    }

    function oQ(QQ) {
      return QQ.includes(" Strongbed")
    }

    function DQ(QQ) {
      return LQ(QQ) || qQ(QQ) || oQ(QQ)
    }
    wQ.d(FQ, {
      e: () => DQ,
      i: () => LQ,
      m: () => oQ,
      q: () => qQ
    })
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);