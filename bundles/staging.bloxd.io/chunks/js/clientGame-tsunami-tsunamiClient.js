export const id = 26;
export const ids = [26];
export const modules = {
  39367: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => fC
    });
    var QC = ZC(34173);
    const wC = 1e3 / 3;

    function bC(CC, zC, ZC) {
      if ("parenthetical-seconds" === zC) return ` (${CC}s)`;
      const QC = `${Math.floor(CC/60)}:${(CC%60).toString().padStart(2,"0")}`;
      return ZC ? `${ZC}${QC}` : QC
    }

    function nC(CC, zC, ZC, wC, bC) {
      var nC;
      const fC = {
        ...wC.baseNametag
      };
      fC.content = [...null !== (nC = wC.baseNametag.content) && void 0 !== nC ? nC : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,QC.d)(bC)}`
      }], CC.setOtherEntitySetting(zC, ZC, "nameTagInfo", fC)
    }
    const fC = function(CC, zC, ZC, QC) {
      let fC, {
        localPlayerId: oC
      } = QC;
      const qC = new Map,
        FC = new Map;
      let WC = 0,
        NC = 0;
      return {
        onCreate: CC => {
          fC = CC
        },
        ZN: CC => {
          const zC = Date.now();
          for (const [QC, wC] of qC) {
            const CC = Math.floor((zC - wC.startTime) / 1e3),
              nC = Math.max(0, wC.remainingSeconds - CC);
            if (nC === wC.lastRenderedSecond) continue;
            wC.lastRenderedSecond = nC;
            const FC = {
                str: bC(nC, wC.format, wC.prefix),
                style: wC.style
              },
              WC = {
                ...wC.baseNametag
              };
            var ZC;
            if ("content" === wC.location) WC.content = [...null !== (ZC = wC.baseNametag.content) && void 0 !== ZC ? ZC : [], FC];
            else WC.subtitle = [FC];
            fC.setOtherEntitySetting(oC, QC, "nameTagInfo", WC), nC <= 0 && qC.delete(QC)
          }
          if (FC.size > 0 && zC - WC >= wC) {
            WC = zC, NC = (NC + 1) % 3;
            let CC = 0;
            for (const [ZC, QC] of FC) {
              if (CC++ % 3 !== NC) continue;
              const wC = Math.floor((zC - QC.startTime) / 1e3);
              if (wC === QC.lastRenderedSecond) continue;
              QC.lastRenderedSecond = wC;
              const bC = QC.accumulatedIncome + QC.incomePerSecond * BigInt(wC);
              nC(fC, oC, ZC, QC, bC)
            }
          }
        },
        onReceivedMessageFromServer: (CC, zC) => {
          if ("startCountdown" === CC) qC.set(zC.eId, {
            baseNametag: zC.baseNametag,
            remainingSeconds: zC.remainingSeconds,
            startTime: Date.now(),
            format: zC.format,
            location: zC.location,
            prefix: zC.prefix,
            style: zC.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === CC) qC.delete(zC.eId);
          else if ("startIncomeTicking" === CC) {
            const CC = {
              baseNametag: zC.baseNametag,
              accumulatedIncome: BigInt(zC.accumulatedIncome),
              incomePerSecond: BigInt(zC.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            FC.set(zC.eId, CC), nC(fC, oC, zC.eId, CC, CC.accumulatedIncome)
          } else "stopIncomeTicking" === CC && FC.delete(zC.eId) && fC.setOtherEntitySetting(oC, zC.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (CC, zC, ZC, QC, wC, bC) => {
          if (bC && "Mesh" === fC.getEntityType(bC)) {
            const zC = fC.getEntityName(bC);
            "Upgrades" === zC ? fC.openShop(CC, !1, "Upgrades") : "Items" === zC ? fC.openShop(CC, !1, "Items") : "Prestige" === zC ? fC.openShop(CC, !1, "Prestige") : "Collections" === zC ? fC.openShop(CC, !1, "Collections") : "Base Skins" === zC ? fC.openShop(CC, !1, "Base Skins") : "Gauntlet" === zC ? fC.openShop(CC, !1, "Gauntlet") : "Diamond Shop" === zC && fC.openShop(CC, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  34173: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => wC,
      e: () => nC
    });
    const QC = [{
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

    function wC(CC) {
      let zC, ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof CC) {
        if (!Number.isFinite(CC)) return "0";
        if (Math.abs(CC) < 100) {
          const zC = CC < 0 ? "-" : "",
            ZC = Math.abs(CC);
          return ZC >= 10 ? `${zC}${ZC.toFixed(1).replace(/\.0$/,"")}` : `${zC}${ZC.toFixed(2).replace(/\.?0+$/,"")}`
        }
        zC = BigInt(Math.floor(CC))
      } else zC = CC;
      const wC = zC < 0n ? -zC : zC,
        bC = zC < 0n ? "-" : "",
        nC = wC.toString();
      if (nC.length <= ZC) return `${bC}${nC}`;
      const fC = 3 * Math.floor((nC.length - 1) / 3);
      if (fC < 3) return `${bC}${nC}`;
      if (fC > 3 * QC.length) {
        const CC = nC[0],
          zC = nC.slice(1, 3).replace(/0+$/, "");
        return `${bC}${zC?`${CC}.${zC}`:CC}e${nC.length-1}`
      }
      const {
        threshold: oC,
        suffix: qC
      } = QC[QC.length - fC / 3], FC = wC / oC, WC = Number(1000n * (wC % oC) / oC), NC = Number(FC) + WC / 1e3;
      let MC;
      return MC = NC >= 100 ? Math.floor(NC).toString() : NC >= 10 ? NC.toFixed(1).replace(/\.0$/, "") : NC.toFixed(2).replace(/\.?0+$/, ""), `${bC}${MC}${qC}`
    }
    const bC = QC.map((CC => {
      let {
        threshold: zC,
        suffix: ZC
      } = CC;
      return {
        threshold: Number(zC),
        suffix: ZC
      }
    })).filter((CC => {
      let {
        threshold: zC
      } = CC;
      return Number.isFinite(zC)
    }));

    function nC(CC) {
      const zC = Math.abs(CC),
        ZC = CC < 0 ? "-" : "";
      for (const {
          threshold: QC,
          suffix: wC
        }
        of bC)
        if (zC >= QC) {
          const CC = zC / QC;
          if (CC >= 1e3) return `${ZC}${zC.toExponential(2).replace("e+","e")}`;
          let bC;
          return bC = CC >= 100 ? Math.floor(CC).toString() : CC >= 10 ? CC.toFixed(1).replace(/\.0$/, "") : CC.toFixed(2).replace(/\.?0+$/, ""), `${ZC}${bC}${wC}`
        } return `${ZC}${zC}`
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);