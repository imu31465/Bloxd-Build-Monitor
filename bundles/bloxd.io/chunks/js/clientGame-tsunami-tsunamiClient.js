export const id = 26;
export const ids = [26];
export const modules = {
  39070: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => TU
    });
    var tU = gU(9012);
    const pU = 1e3 / 3;

    function EU(UU, RU, gU) {
      if ("parenthetical-seconds" === RU) return ` (${UU}s)`;
      const tU = `${Math.floor(UU/60)}:${(UU%60).toString().padStart(2,"0")}`;
      return gU ? `${gU}${tU}` : tU
    }

    function PU(UU, RU, gU, pU, EU) {
      var PU;
      const TU = {
        ...pU.baseNametag
      };
      TU.content = [...null !== (PU = pU.baseNametag.content) && void 0 !== PU ? PU : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,tU.c)(EU)}`
      }], UU.setOtherEntitySetting(RU, gU, "nameTagInfo", TU)
    }
    const TU = function(UU, RU, gU, tU) {
      let TU, {
        localPlayerId: qU
      } = tU;
      const KU = new Map,
        cU = new Map;
      let GU = 0,
        jU = 0;
      return {
        onCreate: UU => {
          TU = UU
        },
        HG: UU => {
          const RU = Date.now();
          for (const [tU, pU] of KU) {
            const UU = Math.floor((RU - pU.startTime) / 1e3),
              PU = Math.max(0, pU.remainingSeconds - UU);
            if (PU === pU.lastRenderedSecond) continue;
            pU.lastRenderedSecond = PU;
            const cU = {
                str: EU(PU, pU.format, pU.prefix),
                style: pU.style
              },
              GU = {
                ...pU.baseNametag
              };
            var gU;
            if ("content" === pU.location) GU.content = [...null !== (gU = pU.baseNametag.content) && void 0 !== gU ? gU : [], cU];
            else GU.subtitle = [cU];
            TU.setOtherEntitySetting(qU, tU, "nameTagInfo", GU), PU <= 0 && KU.delete(tU)
          }
          if (cU.size > 0 && RU - GU >= pU) {
            GU = RU, jU = (jU + 1) % 3;
            let UU = 0;
            for (const [gU, tU] of cU) {
              if (UU++ % 3 !== jU) continue;
              const pU = Math.floor((RU - tU.startTime) / 1e3);
              if (pU === tU.lastRenderedSecond) continue;
              tU.lastRenderedSecond = pU;
              const EU = tU.accumulatedIncome + tU.incomePerSecond * BigInt(pU);
              PU(TU, qU, gU, tU, EU)
            }
          }
        },
        onReceivedMessageFromServer: (UU, RU) => {
          if ("startCountdown" === UU) KU.set(RU.eId, {
            baseNametag: RU.baseNametag,
            remainingSeconds: RU.remainingSeconds,
            startTime: Date.now(),
            format: RU.format,
            location: RU.location,
            prefix: RU.prefix,
            style: RU.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === UU) KU.delete(RU.eId);
          else if ("startIncomeTicking" === UU) {
            const UU = {
              baseNametag: RU.baseNametag,
              accumulatedIncome: BigInt(RU.accumulatedIncome),
              incomePerSecond: BigInt(RU.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            cU.set(RU.eId, UU), PU(TU, qU, RU.eId, UU, UU.accumulatedIncome)
          } else "stopIncomeTicking" === UU && cU.delete(RU.eId) && TU.setOtherEntitySetting(qU, RU.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (UU, RU, gU, tU, pU, EU) => {
          if (EU && "Mesh" === TU.getEntityType(EU)) {
            const RU = TU.getEntityName(EU);
            "Upgrades" === RU ? TU.openShop(UU, !1, "Upgrades") : "Items" === RU ? TU.openShop(UU, !1, "Items") : "Prestige" === RU ? TU.openShop(UU, !1, "Prestige") : "Collections" === RU ? TU.openShop(UU, !1, "Collections") : "Base Skins" === RU ? TU.openShop(UU, !1, "Base Skins") : "Gauntlet" === RU ? TU.openShop(UU, !1, "Gauntlet") : "Diamond Shop" === RU && TU.openShop(UU, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  9012: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => pU,
      d: () => PU
    });
    const tU = [{
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

    function pU(UU) {
      let RU, gU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof UU) {
        if (!Number.isFinite(UU)) return "0";
        if (Math.abs(UU) < 100) {
          const RU = UU < 0 ? "-" : "",
            gU = Math.abs(UU);
          return gU >= 10 ? `${RU}${gU.toFixed(1).replace(/\.0$/,"")}` : `${RU}${gU.toFixed(2).replace(/\.?0+$/,"")}`
        }
        RU = BigInt(Math.floor(UU))
      } else RU = UU;
      const pU = RU < 0n ? -RU : RU,
        EU = RU < 0n ? "-" : "",
        PU = pU.toString();
      if (PU.length <= gU) return `${EU}${PU}`;
      const TU = 3 * Math.floor((PU.length - 1) / 3);
      if (TU < 3) return `${EU}${PU}`;
      if (TU > 3 * tU.length) {
        const UU = PU[0],
          RU = PU.slice(1, 3).replace(/0+$/, "");
        return `${EU}${RU?`${UU}.${RU}`:UU}e${PU.length-1}`
      }
      const {
        threshold: qU,
        suffix: KU
      } = tU[tU.length - TU / 3], cU = pU / qU, GU = Number(1000n * (pU % qU) / qU), jU = Number(cU) + GU / 1e3;
      let uU;
      return uU = jU >= 100 ? Math.floor(jU).toString() : jU >= 10 ? jU.toFixed(1).replace(/\.0$/, "") : jU.toFixed(2).replace(/\.?0+$/, ""), `${EU}${uU}${KU}`
    }
    const EU = tU.map((UU => {
      let {
        threshold: RU,
        suffix: gU
      } = UU;
      return {
        threshold: Number(RU),
        suffix: gU
      }
    })).filter((UU => {
      let {
        threshold: RU
      } = UU;
      return Number.isFinite(RU)
    }));

    function PU(UU) {
      const RU = Math.abs(UU),
        gU = UU < 0 ? "-" : "";
      for (const {
          threshold: tU,
          suffix: pU
        }
        of EU)
        if (RU >= tU) {
          const UU = RU / tU;
          if (UU >= 1e3) return `${gU}${RU.toExponential(2).replace("e+","e")}`;
          let EU;
          return EU = UU >= 100 ? Math.floor(UU).toString() : UU >= 10 ? UU.toFixed(1).replace(/\.0$/, "") : UU.toFixed(2).replace(/\.?0+$/, ""), `${gU}${EU}${pU}`
        } return `${gU}${RU}`
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);