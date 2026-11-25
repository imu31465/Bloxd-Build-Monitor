export const id = 31;
export const ids = [31];
export const modules = {
  40668: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => PM
    });
    var OM = iM(35040);
    const SM = 1e3 / 3;

    function jM(MM, rM, iM) {
      if ("parenthetical-seconds" === rM) return ` (${MM}s)`;
      const OM = `${Math.floor(MM/60)}:${(MM%60).toString().padStart(2,"0")}`;
      return iM ? `${iM}${OM}` : OM
    }

    function aM(MM, rM, iM, SM, jM) {
      var aM;
      const PM = {
        ...SM.baseNametag
      };
      PM.content = [...null !== (aM = SM.baseNametag.content) && void 0 !== aM ? aM : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,OM.e)(jM)}`
      }], MM.setOtherEntitySetting(rM, iM, "nameTagInfo", PM)
    }
    const PM = function(MM, rM, iM, OM) {
      let PM, {
        localPlayerId: nM
      } = OM;
      const QM = new Map,
        zM = new Map;
      let LM = 0,
        mM = 0;
      return {
        onCreate: MM => {
          PM = MM
        },
        bL: MM => {
          const rM = Date.now();
          for (const [OM, SM] of QM) {
            const MM = Math.floor((rM - SM.startTime) / 1e3),
              aM = Math.max(0, SM.remainingSeconds - MM);
            if (aM === SM.lastRenderedSecond) continue;
            SM.lastRenderedSecond = aM;
            const zM = {
                str: jM(aM, SM.format, SM.prefix),
                style: SM.style
              },
              LM = {
                ...SM.baseNametag
              };
            var iM;
            if ("content" === SM.location) LM.content = [...null !== (iM = SM.baseNametag.content) && void 0 !== iM ? iM : [], zM];
            else LM.subtitle = [zM];
            PM.setOtherEntitySetting(nM, OM, "nameTagInfo", LM), aM <= 0 && QM.delete(OM)
          }
          if (zM.size > 0 && rM - LM >= SM) {
            LM = rM, mM = (mM + 1) % 3;
            let MM = 0;
            for (const [iM, OM] of zM) {
              if (MM++ % 3 !== mM) continue;
              const SM = Math.floor((rM - OM.startTime) / 1e3);
              if (SM === OM.lastRenderedSecond) continue;
              OM.lastRenderedSecond = SM;
              const jM = OM.accumulatedIncome + OM.incomePerSecond * BigInt(SM);
              aM(PM, nM, iM, OM, jM)
            }
          }
        },
        onReceivedMessageFromServer: (MM, rM) => {
          if ("startCountdown" === MM) QM.set(rM.eId, {
            baseNametag: rM.baseNametag,
            remainingSeconds: rM.remainingSeconds,
            startTime: Date.now(),
            format: rM.format,
            location: rM.location,
            prefix: rM.prefix,
            style: rM.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === MM) QM.delete(rM.eId);
          else if ("startIncomeTicking" === MM) {
            const MM = {
              baseNametag: rM.baseNametag,
              accumulatedIncome: BigInt(rM.accumulatedIncome),
              incomePerSecond: BigInt(rM.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            zM.set(rM.eId, MM), aM(PM, nM, rM.eId, MM, MM.accumulatedIncome)
          } else "stopIncomeTicking" === MM && zM.delete(rM.eId) && PM.setOtherEntitySetting(nM, rM.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (MM, rM, iM, OM, SM, jM) => {
          if (jM && "Mesh" === PM.getEntityType(jM)) {
            const rM = PM.getEntityName(jM);
            "Upgrades" === rM ? PM.openShop(MM, !1, "Upgrades") : "Items" === rM ? PM.openShop(MM, !1, "Items") : "Prestige" === rM ? PM.openShop(MM, !1, "Prestige") : "Collections" === rM ? PM.openShop(MM, !1, "Collections") : "Base Skins" === rM ? PM.openShop(MM, !1, "Base Skins") : "Gauntlet" === rM ? PM.openShop(MM, !1, "Gauntlet") : "Diamond Shop" === rM && PM.openShop(MM, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  35040: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => SM,
      g: () => aM
    });
    const OM = [{
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

    function SM(MM) {
      let rM, iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof MM) {
        if (!Number.isFinite(MM)) return "0";
        if (Math.abs(MM) < 100) {
          const rM = MM < 0 ? "-" : "",
            iM = Math.abs(MM);
          return iM >= 10 ? `${rM}${iM.toFixed(1).replace(/\.0$/,"")}` : `${rM}${iM.toFixed(2).replace(/\.?0+$/,"")}`
        }
        rM = BigInt(Math.floor(MM))
      } else rM = MM;
      const SM = rM < 0n ? -rM : rM,
        jM = rM < 0n ? "-" : "",
        aM = SM.toString();
      if (aM.length <= iM) return `${jM}${aM}`;
      const PM = 3 * Math.floor((aM.length - 1) / 3);
      if (PM < 3) return `${jM}${aM}`;
      if (PM > 3 * OM.length) {
        const MM = aM[0],
          rM = aM.slice(1, 3).replace(/0+$/, "");
        return `${jM}${rM?`${MM}.${rM}`:MM}e${aM.length-1}`
      }
      const {
        threshold: nM,
        suffix: QM
      } = OM[OM.length - PM / 3], zM = SM / nM, LM = Number(1000n * (SM % nM) / nM), mM = Number(zM) + LM / 1e3;
      let HM;
      return HM = mM >= 100 ? Math.floor(mM).toString() : mM >= 10 ? mM.toFixed(1).replace(/\.0$/, "") : mM.toFixed(2).replace(/\.?0+$/, ""), `${jM}${HM}${QM}`
    }
    const jM = OM.map((MM => {
      let {
        threshold: rM,
        suffix: iM
      } = MM;
      return {
        threshold: Number(rM),
        suffix: iM
      }
    })).filter((MM => {
      let {
        threshold: rM
      } = MM;
      return Number.isFinite(rM)
    }));

    function aM(MM) {
      const rM = Math.abs(MM),
        iM = MM < 0 ? "-" : "";
      for (const {
          threshold: OM,
          suffix: SM
        }
        of jM)
        if (rM >= OM) {
          const MM = rM / OM;
          if (MM >= 1e3) return `${iM}${rM.toExponential(2).replace("e+","e")}`;
          let jM;
          return jM = MM >= 100 ? Math.floor(MM).toString() : MM >= 10 ? MM.toFixed(1).replace(/\.0$/, "") : MM.toFixed(2).replace(/\.?0+$/, ""), `${iM}${jM}${SM}`
        } return `${iM}${rM}`
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);