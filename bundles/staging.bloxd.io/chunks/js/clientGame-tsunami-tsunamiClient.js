export const id = 26;
export const ids = [26];
export const modules = {
  38500: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => AJ
    });
    var FJ = ZJ(8580);
    const UJ = 1e3 / 3;

    function eJ(JJ, cJ, ZJ) {
      if ("parenthetical-seconds" === cJ) return ` (${JJ}s)`;
      const FJ = `${Math.floor(JJ/60)}:${(JJ%60).toString().padStart(2,"0")}`;
      return ZJ ? `${ZJ}${FJ}` : FJ
    }

    function XJ(JJ, cJ, ZJ, UJ, eJ) {
      var XJ;
      const AJ = {
        ...UJ.baseNametag
      };
      AJ.content = [...null !== (XJ = UJ.baseNametag.content) && void 0 !== XJ ? XJ : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,FJ.b)(eJ)}`
      }], JJ.setOtherEntitySetting(cJ, ZJ, "nameTagInfo", AJ)
    }
    const AJ = function(JJ, cJ, ZJ, FJ) {
      let AJ, {
        localPlayerId: qJ
      } = FJ;
      const jJ = new Map,
        YJ = new Map;
      let hJ = 0,
        DJ = 0;
      return {
        onCreate: JJ => {
          AJ = JJ
        },
        Hh: JJ => {
          const cJ = Date.now();
          for (const [FJ, UJ] of jJ) {
            const JJ = Math.floor((cJ - UJ.startTime) / 1e3),
              XJ = Math.max(0, UJ.remainingSeconds - JJ);
            if (XJ === UJ.lastRenderedSecond) continue;
            UJ.lastRenderedSecond = XJ;
            const YJ = {
                str: eJ(XJ, UJ.format, UJ.prefix),
                style: UJ.style
              },
              hJ = {
                ...UJ.baseNametag
              };
            var ZJ;
            if ("content" === UJ.location) hJ.content = [...null !== (ZJ = UJ.baseNametag.content) && void 0 !== ZJ ? ZJ : [], YJ];
            else hJ.subtitle = [YJ];
            AJ.setOtherEntitySetting(qJ, FJ, "nameTagInfo", hJ), XJ <= 0 && jJ.delete(FJ)
          }
          if (YJ.size > 0 && cJ - hJ >= UJ) {
            hJ = cJ, DJ = (DJ + 1) % 3;
            let JJ = 0;
            for (const [ZJ, FJ] of YJ) {
              if (JJ++ % 3 !== DJ) continue;
              const UJ = Math.floor((cJ - FJ.startTime) / 1e3);
              if (UJ === FJ.lastRenderedSecond) continue;
              FJ.lastRenderedSecond = UJ;
              const eJ = FJ.accumulatedIncome + FJ.incomePerSecond * BigInt(UJ);
              XJ(AJ, qJ, ZJ, FJ, eJ)
            }
          }
        },
        onReceivedMessageFromServer: (JJ, cJ) => {
          if ("startCountdown" === JJ) jJ.set(cJ.eId, {
            baseNametag: cJ.baseNametag,
            remainingSeconds: cJ.remainingSeconds,
            startTime: Date.now(),
            format: cJ.format,
            location: cJ.location,
            prefix: cJ.prefix,
            style: cJ.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === JJ) jJ.delete(cJ.eId);
          else if ("startIncomeTicking" === JJ) {
            const JJ = {
              baseNametag: cJ.baseNametag,
              accumulatedIncome: BigInt(cJ.accumulatedIncome),
              incomePerSecond: BigInt(cJ.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            YJ.set(cJ.eId, JJ), XJ(AJ, qJ, cJ.eId, JJ, JJ.accumulatedIncome)
          } else "stopIncomeTicking" === JJ && YJ.delete(cJ.eId) && AJ.setOtherEntitySetting(qJ, cJ.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (JJ, cJ, ZJ, FJ, UJ, eJ) => {
          if (eJ && "Mesh" === AJ.getEntityType(eJ)) {
            const cJ = AJ.getEntityName(eJ);
            "Upgrades" === cJ ? AJ.openShop(JJ, !1, "Upgrades") : "Items" === cJ ? AJ.openShop(JJ, !1, "Items") : "Prestige" === cJ ? AJ.openShop(JJ, !1, "Prestige") : "Collections" === cJ ? AJ.openShop(JJ, !1, "Collections") : "Base Skins" === cJ ? AJ.openShop(JJ, !1, "Base Skins") : "Gauntlet" === cJ ? AJ.openShop(JJ, !1, "Gauntlet") : "Diamond Shop" === cJ && AJ.openShop(JJ, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  8580: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ,
      e: () => XJ
    });
    const FJ = [{
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

    function UJ(JJ) {
      let cJ, ZJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof JJ) {
        if (!Number.isFinite(JJ)) return "0";
        if (Math.abs(JJ) < 100) {
          const cJ = JJ < 0 ? "-" : "",
            ZJ = Math.abs(JJ);
          return ZJ >= 10 ? `${cJ}${ZJ.toFixed(1).replace(/\.0$/,"")}` : `${cJ}${ZJ.toFixed(2).replace(/\.?0+$/,"")}`
        }
        cJ = BigInt(Math.floor(JJ))
      } else cJ = JJ;
      const UJ = cJ < 0n ? -cJ : cJ,
        eJ = cJ < 0n ? "-" : "",
        XJ = UJ.toString();
      if (XJ.length <= ZJ) return `${eJ}${XJ}`;
      const AJ = 3 * Math.floor((XJ.length - 1) / 3);
      if (AJ < 3) return `${eJ}${XJ}`;
      if (AJ > 3 * FJ.length) {
        const JJ = XJ[0],
          cJ = XJ.slice(1, 3).replace(/0+$/, "");
        return `${eJ}${cJ?`${JJ}.${cJ}`:JJ}e${XJ.length-1}`
      }
      const {
        threshold: qJ,
        suffix: jJ
      } = FJ[FJ.length - AJ / 3], YJ = UJ / qJ, hJ = Number(1000n * (UJ % qJ) / qJ), DJ = Number(YJ) + hJ / 1e3;
      let sJ;
      return sJ = DJ >= 100 ? Math.floor(DJ).toString() : DJ >= 10 ? DJ.toFixed(1).replace(/\.0$/, "") : DJ.toFixed(2).replace(/\.?0+$/, ""), `${eJ}${sJ}${jJ}`
    }
    const eJ = FJ.map((JJ => {
      let {
        threshold: cJ,
        suffix: ZJ
      } = JJ;
      return {
        threshold: Number(cJ),
        suffix: ZJ
      }
    })).filter((JJ => {
      let {
        threshold: cJ
      } = JJ;
      return Number.isFinite(cJ)
    }));

    function XJ(JJ) {
      const cJ = Math.abs(JJ),
        ZJ = JJ < 0 ? "-" : "";
      for (const {
          threshold: FJ,
          suffix: UJ
        }
        of eJ)
        if (cJ >= FJ) {
          const JJ = cJ / FJ;
          if (JJ >= 1e3) return `${ZJ}${cJ.toExponential(2).replace("e+","e")}`;
          let eJ;
          return eJ = JJ >= 100 ? Math.floor(JJ).toString() : JJ >= 10 ? JJ.toFixed(1).replace(/\.0$/, "") : JJ.toFixed(2).replace(/\.?0+$/, ""), `${ZJ}${eJ}${UJ}`
        } return `${ZJ}${cJ}`
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);