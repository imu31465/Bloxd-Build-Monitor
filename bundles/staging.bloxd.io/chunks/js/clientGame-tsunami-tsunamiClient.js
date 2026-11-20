export const id = 26;
export const ids = [26];
export const modules = {
  39261: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => Ju
    });
    var Eu = yu(9087);
    const Ku = 1e3 / 3;

    function Qu(uu, Ru, yu) {
      if ("parenthetical-seconds" === Ru) return ` (${uu}s)`;
      const Eu = `${Math.floor(uu/60)}:${(uu%60).toString().padStart(2,"0")}`;
      return yu ? `${yu}${Eu}` : Eu
    }

    function mu(uu, Ru, yu, Ku, Qu) {
      var mu;
      const Ju = {
        ...Ku.baseNametag
      };
      Ju.content = [...null !== (mu = Ku.baseNametag.content) && void 0 !== mu ? mu : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,Eu.d)(Qu)}`
      }], uu.setOtherEntitySetting(Ru, yu, "nameTagInfo", Ju)
    }
    const Ju = function(uu, Ru, yu, Eu) {
      let Ju, {
        localPlayerId: Nu
      } = Eu;
      const Xu = new Map,
        Vu = new Map;
      let ru = 0,
        Bu = 0;
      return {
        onCreate: uu => {
          Ju = uu
        },
        sr: uu => {
          const Ru = Date.now();
          for (const [Eu, Ku] of Xu) {
            const uu = Math.floor((Ru - Ku.startTime) / 1e3),
              mu = Math.max(0, Ku.remainingSeconds - uu);
            if (mu === Ku.lastRenderedSecond) continue;
            Ku.lastRenderedSecond = mu;
            const Vu = {
                str: Qu(mu, Ku.format, Ku.prefix),
                style: Ku.style
              },
              ru = {
                ...Ku.baseNametag
              };
            var yu;
            if ("content" === Ku.location) ru.content = [...null !== (yu = Ku.baseNametag.content) && void 0 !== yu ? yu : [], Vu];
            else ru.subtitle = [Vu];
            Ju.setOtherEntitySetting(Nu, Eu, "nameTagInfo", ru), mu <= 0 && Xu.delete(Eu)
          }
          if (Vu.size > 0 && Ru - ru >= Ku) {
            ru = Ru, Bu = (Bu + 1) % 3;
            let uu = 0;
            for (const [yu, Eu] of Vu) {
              if (uu++ % 3 !== Bu) continue;
              const Ku = Math.floor((Ru - Eu.startTime) / 1e3);
              if (Ku === Eu.lastRenderedSecond) continue;
              Eu.lastRenderedSecond = Ku;
              const Qu = Eu.accumulatedIncome + Eu.incomePerSecond * BigInt(Ku);
              mu(Ju, Nu, yu, Eu, Qu)
            }
          }
        },
        onReceivedMessageFromServer: (uu, Ru) => {
          if ("startCountdown" === uu) Xu.set(Ru.eId, {
            baseNametag: Ru.baseNametag,
            remainingSeconds: Ru.remainingSeconds,
            startTime: Date.now(),
            format: Ru.format,
            location: Ru.location,
            prefix: Ru.prefix,
            style: Ru.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === uu) Xu.delete(Ru.eId);
          else if ("startIncomeTicking" === uu) {
            const uu = {
              baseNametag: Ru.baseNametag,
              accumulatedIncome: BigInt(Ru.accumulatedIncome),
              incomePerSecond: BigInt(Ru.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            Vu.set(Ru.eId, uu), mu(Ju, Nu, Ru.eId, uu, uu.accumulatedIncome)
          } else "stopIncomeTicking" === uu && Vu.delete(Ru.eId) && Ju.setOtherEntitySetting(Nu, Ru.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (uu, Ru, yu, Eu, Ku, Qu) => {
          if (Qu && "Mesh" === Ju.getEntityType(Qu)) {
            const Ru = Ju.getEntityName(Qu);
            "Upgrades" === Ru ? Ju.openShop(uu, !1, "Upgrades") : "Items" === Ru ? Ju.openShop(uu, !1, "Items") : "Prestige" === Ru ? Ju.openShop(uu, !1, "Prestige") : "Collections" === Ru ? Ju.openShop(uu, !1, "Collections") : "Base Skins" === Ru ? Ju.openShop(uu, !1, "Base Skins") : "Gauntlet" === Ru ? Ju.openShop(uu, !1, "Gauntlet") : "Diamond Shop" === Ru && Ju.openShop(uu, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  9087: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku,
      g: () => mu
    });
    const Eu = [{
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

    function Ku(uu) {
      let Ru, yu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof uu) {
        if (!Number.isFinite(uu)) return "0";
        if (Math.abs(uu) < 100) {
          const Ru = uu < 0 ? "-" : "",
            yu = Math.abs(uu);
          return yu >= 10 ? `${Ru}${yu.toFixed(1).replace(/\.0$/,"")}` : `${Ru}${yu.toFixed(2).replace(/\.?0+$/,"")}`
        }
        Ru = BigInt(Math.floor(uu))
      } else Ru = uu;
      const Ku = Ru < 0n ? -Ru : Ru,
        Qu = Ru < 0n ? "-" : "",
        mu = Ku.toString();
      if (mu.length <= yu) return `${Qu}${mu}`;
      const Ju = 3 * Math.floor((mu.length - 1) / 3);
      if (Ju < 3) return `${Qu}${mu}`;
      if (Ju > 3 * Eu.length) {
        const uu = mu[0],
          Ru = mu.slice(1, 3).replace(/0+$/, "");
        return `${Qu}${Ru?`${uu}.${Ru}`:uu}e${mu.length-1}`
      }
      const {
        threshold: Nu,
        suffix: Xu
      } = Eu[Eu.length - Ju / 3], Vu = Ku / Nu, ru = Number(1000n * (Ku % Nu) / Nu), Bu = Number(Vu) + ru / 1e3;
      let xu;
      return xu = Bu >= 100 ? Math.floor(Bu).toString() : Bu >= 10 ? Bu.toFixed(1).replace(/\.0$/, "") : Bu.toFixed(2).replace(/\.?0+$/, ""), `${Qu}${xu}${Xu}`
    }
    const Qu = Eu.map((uu => {
      let {
        threshold: Ru,
        suffix: yu
      } = uu;
      return {
        threshold: Number(Ru),
        suffix: yu
      }
    })).filter((uu => {
      let {
        threshold: Ru
      } = uu;
      return Number.isFinite(Ru)
    }));

    function mu(uu) {
      const Ru = Math.abs(uu),
        yu = uu < 0 ? "-" : "";
      for (const {
          threshold: Eu,
          suffix: Ku
        }
        of Qu)
        if (Ru >= Eu) {
          const uu = Ru / Eu;
          if (uu >= 1e3) return `${yu}${Ru.toExponential(2).replace("e+","e")}`;
          let Qu;
          return Qu = uu >= 100 ? Math.floor(uu).toString() : uu >= 10 ? uu.toFixed(1).replace(/\.0$/, "") : uu.toFixed(2).replace(/\.?0+$/, ""), `${yu}${Qu}${Ku}`
        } return `${yu}${Ru}`
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);