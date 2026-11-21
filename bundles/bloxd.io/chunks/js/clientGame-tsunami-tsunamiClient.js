export const id = 26;
export const ids = [26];
export const modules = {
  39069: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => kQ
    });
    var LQ = wQ(9127);
    const qQ = 1e3 / 3;

    function oQ(QQ, FQ, wQ) {
      if ("parenthetical-seconds" === FQ) return ` (${QQ}s)`;
      const LQ = `${Math.floor(QQ/60)}:${(QQ%60).toString().padStart(2,"0")}`;
      return wQ ? `${wQ}${LQ}` : LQ
    }

    function DQ(QQ, FQ, wQ, qQ, oQ) {
      var DQ;
      const kQ = {
        ...qQ.baseNametag
      };
      kQ.content = [...null !== (DQ = qQ.baseNametag.content) && void 0 !== DQ ? DQ : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,LQ.b)(oQ)}`
      }], QQ.setOtherEntitySetting(FQ, wQ, "nameTagInfo", kQ)
    }
    const kQ = function(QQ, FQ, wQ, LQ) {
      let kQ, {
        localPlayerId: vQ
      } = LQ;
      const mQ = new Map,
        uQ = new Map;
      let HQ = 0,
        bQ = 0;
      return {
        onCreate: QQ => {
          kQ = QQ
        },
        fH: QQ => {
          const FQ = Date.now();
          for (const [LQ, qQ] of mQ) {
            const QQ = Math.floor((FQ - qQ.startTime) / 1e3),
              DQ = Math.max(0, qQ.remainingSeconds - QQ);
            if (DQ === qQ.lastRenderedSecond) continue;
            qQ.lastRenderedSecond = DQ;
            const uQ = {
                str: oQ(DQ, qQ.format, qQ.prefix),
                style: qQ.style
              },
              HQ = {
                ...qQ.baseNametag
              };
            var wQ;
            if ("content" === qQ.location) HQ.content = [...null !== (wQ = qQ.baseNametag.content) && void 0 !== wQ ? wQ : [], uQ];
            else HQ.subtitle = [uQ];
            kQ.setOtherEntitySetting(vQ, LQ, "nameTagInfo", HQ), DQ <= 0 && mQ.delete(LQ)
          }
          if (uQ.size > 0 && FQ - HQ >= qQ) {
            HQ = FQ, bQ = (bQ + 1) % 3;
            let QQ = 0;
            for (const [wQ, LQ] of uQ) {
              if (QQ++ % 3 !== bQ) continue;
              const qQ = Math.floor((FQ - LQ.startTime) / 1e3);
              if (qQ === LQ.lastRenderedSecond) continue;
              LQ.lastRenderedSecond = qQ;
              const oQ = LQ.accumulatedIncome + LQ.incomePerSecond * BigInt(qQ);
              DQ(kQ, vQ, wQ, LQ, oQ)
            }
          }
        },
        onReceivedMessageFromServer: (QQ, FQ) => {
          if ("startCountdown" === QQ) mQ.set(FQ.eId, {
            baseNametag: FQ.baseNametag,
            remainingSeconds: FQ.remainingSeconds,
            startTime: Date.now(),
            format: FQ.format,
            location: FQ.location,
            prefix: FQ.prefix,
            style: FQ.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === QQ) mQ.delete(FQ.eId);
          else if ("startIncomeTicking" === QQ) {
            const QQ = {
              baseNametag: FQ.baseNametag,
              accumulatedIncome: BigInt(FQ.accumulatedIncome),
              incomePerSecond: BigInt(FQ.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            uQ.set(FQ.eId, QQ), DQ(kQ, vQ, FQ.eId, QQ, QQ.accumulatedIncome)
          } else "stopIncomeTicking" === QQ && uQ.delete(FQ.eId) && kQ.setOtherEntitySetting(vQ, FQ.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (QQ, FQ, wQ, LQ, qQ, oQ) => {
          if (oQ && "Mesh" === kQ.getEntityType(oQ)) {
            const FQ = kQ.getEntityName(oQ);
            "Upgrades" === FQ ? kQ.openShop(QQ, !1, "Upgrades") : "Items" === FQ ? kQ.openShop(QQ, !1, "Items") : "Prestige" === FQ ? kQ.openShop(QQ, !1, "Prestige") : "Collections" === FQ ? kQ.openShop(QQ, !1, "Collections") : "Base Skins" === FQ ? kQ.openShop(QQ, !1, "Base Skins") : "Gauntlet" === FQ ? kQ.openShop(QQ, !1, "Gauntlet") : "Diamond Shop" === FQ && kQ.openShop(QQ, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  9127: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => qQ,
      d: () => DQ
    });
    const LQ = [{
      threshold: 10n ** 180n,
      suffix: "NoQig"
    }, {
      threshold: 10n ** 177n,
      suffix: "OcQig"
    }, {
      threshold: 10n ** 174n,
      suffix: "SpQig"
    }, {
      threshold: 10n ** 171n,
      suffix: "SQig"
    }, {
      threshold: 10n ** 168n,
      suffix: "QiQig"
    }, {
      threshold: 10n ** 165n,
      suffix: "QaQig"
    }, {
      threshold: 10n ** 162n,
      suffix: "TQig"
    }, {
      threshold: 10n ** 159n,
      suffix: "DQig"
    }, {
      threshold: 10n ** 156n,
      suffix: "UQig"
    }, {
      threshold: 10n ** 153n,
      suffix: "Qig"
    }, {
      threshold: 10n ** 150n,
      suffix: "NoQag"
    }, {
      threshold: 10n ** 147n,
      suffix: "OcQag"
    }, {
      threshold: 10n ** 144n,
      suffix: "SpQag"
    }, {
      threshold: 10n ** 141n,
      suffix: "SQag"
    }, {
      threshold: 10n ** 138n,
      suffix: "QiQag"
    }, {
      threshold: 10n ** 135n,
      suffix: "QaQag"
    }, {
      threshold: 10n ** 132n,
      suffix: "TQag"
    }, {
      threshold: 10n ** 129n,
      suffix: "DQag"
    }, {
      threshold: 10n ** 126n,
      suffix: "UQag"
    }, {
      threshold: 10n ** 123n,
      suffix: "Qag"
    }, {
      threshold: 10n ** 120n,
      suffix: "NoTg"
    }, {
      threshold: 10n ** 117n,
      suffix: "OcTg"
    }, {
      threshold: 10n ** 114n,
      suffix: "SpTg"
    }, {
      threshold: 10n ** 111n,
      suffix: "STg"
    }, {
      threshold: 10n ** 108n,
      suffix: "QiTg"
    }, {
      threshold: 10n ** 105n,
      suffix: "QaTg"
    }, {
      threshold: 10n ** 102n,
      suffix: "TTg"
    }, {
      threshold: 10n ** 99n,
      suffix: "DTg"
    }, {
      threshold: 10n ** 96n,
      suffix: "UTg"
    }, {
      threshold: 10n ** 93n,
      suffix: "Tg"
    }, {
      threshold: 10n ** 90n,
      suffix: "NoVg"
    }, {
      threshold: 10n ** 87n,
      suffix: "OcVg"
    }, {
      threshold: 10n ** 84n,
      suffix: "SpVg"
    }, {
      threshold: 10n ** 81n,
      suffix: "SVg"
    }, {
      threshold: 10n ** 78n,
      suffix: "QiVg"
    }, {
      threshold: 10n ** 75n,
      suffix: "QaVg"
    }, {
      threshold: 10n ** 72n,
      suffix: "TVg"
    }, {
      threshold: 10n ** 69n,
      suffix: "DVg"
    }, {
      threshold: 10n ** 66n,
      suffix: "UVg"
    }, {
      threshold: 10n ** 63n,
      suffix: "Vg"
    }, {
      threshold: 10n ** 60n,
      suffix: "NoD"
    }, {
      threshold: 10n ** 57n,
      suffix: "OcD"
    }, {
      threshold: 10n ** 54n,
      suffix: "SpD"
    }, {
      threshold: 10n ** 51n,
      suffix: "SD"
    }, {
      threshold: 10n ** 48n,
      suffix: "QiD"
    }, {
      threshold: 10n ** 45n,
      suffix: "QaD"
    }, {
      threshold: 10n ** 42n,
      suffix: "TD"
    }, {
      threshold: 10n ** 39n,
      suffix: "DD"
    }, {
      threshold: 10n ** 36n,
      suffix: "UD"
    }, {
      threshold: 10n ** 33n,
      suffix: "D"
    }, {
      threshold: 10n ** 30n,
      suffix: "No"
    }, {
      threshold: 10n ** 27n,
      suffix: "Oc"
    }, {
      threshold: 10n ** 24n,
      suffix: "Sep"
    }, {
      threshold: 10n ** 21n,
      suffix: "S"
    }, {
      threshold: 10n ** 18n,
      suffix: "Qi"
    }, {
      threshold: 10n ** 15n,
      suffix: "Qa"
    }, {
      threshold: 10n ** 12n,
      suffix: "T"
    }, {
      threshold: 10n ** 9n,
      suffix: "B"
    }, {
      threshold: 10n ** 6n,
      suffix: "M"
    }, {
      threshold: 1000n,
      suffix: "K"
    }];

    function qQ(QQ) {
      let FQ, wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof QQ) {
        if (!Number.isFinite(QQ)) return "0";
        if (Math.abs(QQ) < 100) {
          const FQ = QQ < 0 ? "-" : "",
            wQ = Math.abs(QQ);
          return wQ >= 10 ? `${FQ}${wQ.toFixed(1).replace(/\.0$/,"")}` : `${FQ}${wQ.toFixed(2).replace(/\.?0+$/,"")}`
        }
        FQ = BigInt(Math.floor(QQ))
      } else FQ = QQ;
      const qQ = FQ < 0n ? -FQ : FQ,
        oQ = FQ < 0n ? "-" : "",
        DQ = qQ.toString();
      if (DQ.length <= wQ) return `${oQ}${DQ}`;
      const kQ = 3 * Math.floor((DQ.length - 1) / 3);
      if (kQ < 3) return `${oQ}${DQ}`;
      if (kQ > 3 * LQ.length) {
        const QQ = DQ[0],
          FQ = DQ.slice(1, 3).replace(/0+$/, "");
        return `${oQ}${FQ?`${QQ}.${FQ}`:QQ}e${DQ.length-1}`
      }
      const {
        threshold: vQ,
        suffix: mQ
      } = LQ[LQ.length - kQ / 3], uQ = qQ / vQ, HQ = Number(1000n * (qQ % vQ) / vQ), bQ = Number(uQ) + HQ / 1e3;
      let YQ;
      return YQ = bQ >= 100 ? Math.floor(bQ).toString() : bQ >= 10 ? bQ.toFixed(1).replace(/\.0$/, "") : bQ.toFixed(2).replace(/\.?0+$/, ""), `${oQ}${YQ}${mQ}`
    }
    const oQ = LQ.map((QQ => {
      let {
        threshold: FQ,
        suffix: wQ
      } = QQ;
      return {
        threshold: Number(FQ),
        suffix: wQ
      }
    })).filter((QQ => {
      let {
        threshold: FQ
      } = QQ;
      return Number.isFinite(FQ)
    }));

    function DQ(QQ) {
      const FQ = Math.abs(QQ),
        wQ = QQ < 0 ? "-" : "";
      for (const {
          threshold: LQ,
          suffix: qQ
        }
        of oQ)
        if (FQ >= LQ) {
          const QQ = FQ / LQ;
          if (QQ >= 1e3) return `${wQ}${FQ.toExponential(2).replace("e+","e")}`;
          let oQ;
          return oQ = QQ >= 100 ? Math.floor(QQ).toString() : QQ >= 10 ? QQ.toFixed(1).replace(/\.0$/, "") : QQ.toFixed(2).replace(/\.?0+$/, ""), `${wQ}${oQ}${qQ}`
        } return `${wQ}${FQ}`
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);