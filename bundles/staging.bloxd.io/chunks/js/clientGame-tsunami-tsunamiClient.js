export const id = 26;
export const ids = [26];
export const modules = {
  39839: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => lu
    });
    var su = ju(34571);
    const Uu = 1e3 / 3;

    function Zu(uu, Eu, ju) {
      if ("parenthetical-seconds" === Eu) return ` (${uu}s)`;
      const su = `${Math.floor(uu/60)}:${(uu%60).toString().padStart(2,"0")}`;
      return ju ? `${ju}${su}` : su
    }

    function Xu(uu, Eu, ju, Uu, Zu) {
      var Xu;
      const lu = {
        ...Uu.baseNametag
      };
      lu.content = [...null !== (Xu = Uu.baseNametag.content) && void 0 !== Xu ? Xu : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,su.b)(Zu)}`
      }], uu.setOtherEntitySetting(Eu, ju, "nameTagInfo", lu)
    }
    const lu = function(uu, Eu, ju, su) {
      let lu, {
        localPlayerId: qu
      } = su;
      const fu = new Map,
        Cu = new Map;
      let bu = 0,
        cu = 0;
      return {
        onCreate: uu => {
          lu = uu
        },
        Tb: uu => {
          const Eu = Date.now();
          for (const [su, Uu] of fu) {
            const uu = Math.floor((Eu - Uu.startTime) / 1e3),
              Xu = Math.max(0, Uu.remainingSeconds - uu);
            if (Xu === Uu.lastRenderedSecond) continue;
            Uu.lastRenderedSecond = Xu;
            const Cu = {
                str: Zu(Xu, Uu.format, Uu.prefix),
                style: Uu.style
              },
              bu = {
                ...Uu.baseNametag
              };
            var ju;
            if ("content" === Uu.location) bu.content = [...null !== (ju = Uu.baseNametag.content) && void 0 !== ju ? ju : [], Cu];
            else bu.subtitle = [Cu];
            lu.setOtherEntitySetting(qu, su, "nameTagInfo", bu), Xu <= 0 && fu.delete(su)
          }
          if (Cu.size > 0 && Eu - bu >= Uu) {
            bu = Eu, cu = (cu + 1) % 3;
            let uu = 0;
            for (const [ju, su] of Cu) {
              if (uu++ % 3 !== cu) continue;
              const Uu = Math.floor((Eu - su.startTime) / 1e3);
              if (Uu === su.lastRenderedSecond) continue;
              su.lastRenderedSecond = Uu;
              const Zu = su.accumulatedIncome + su.incomePerSecond * BigInt(Uu);
              Xu(lu, qu, ju, su, Zu)
            }
          }
        },
        onReceivedMessageFromServer: (uu, Eu) => {
          if ("startCountdown" === uu) fu.set(Eu.eId, {
            baseNametag: Eu.baseNametag,
            remainingSeconds: Eu.remainingSeconds,
            startTime: Date.now(),
            format: Eu.format,
            location: Eu.location,
            prefix: Eu.prefix,
            style: Eu.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === uu) fu.delete(Eu.eId);
          else if ("startIncomeTicking" === uu) {
            const uu = {
              baseNametag: Eu.baseNametag,
              accumulatedIncome: BigInt(Eu.accumulatedIncome),
              incomePerSecond: BigInt(Eu.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            Cu.set(Eu.eId, uu), Xu(lu, qu, Eu.eId, uu, uu.accumulatedIncome)
          } else "stopIncomeTicking" === uu && Cu.delete(Eu.eId) && lu.setOtherEntitySetting(qu, Eu.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (uu, Eu, ju, su, Uu, Zu) => {
          if (Zu && "Mesh" === lu.getEntityType(Zu)) {
            const Eu = lu.getEntityName(Zu);
            "Upgrades" === Eu ? lu.openShop(uu, !1, "Upgrades") : "Items" === Eu ? lu.openShop(uu, !1, "Items") : "Prestige" === Eu ? lu.openShop(uu, !1, "Prestige") : "Collections" === Eu ? lu.openShop(uu, !1, "Collections") : "Base Skins" === Eu ? lu.openShop(uu, !1, "Base Skins") : "Gauntlet" === Eu ? lu.openShop(uu, !1, "Gauntlet") : "Diamond Shop" === Eu && lu.openShop(uu, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  34571: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Uu,
      c: () => Xu
    });
    const su = [{
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

    function Uu(uu) {
      let Eu, ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof uu) {
        if (!Number.isFinite(uu)) return "0";
        if (Math.abs(uu) < 100) {
          const Eu = uu < 0 ? "-" : "",
            ju = Math.abs(uu);
          return ju >= 10 ? `${Eu}${ju.toFixed(1).replace(/\.0$/,"")}` : `${Eu}${ju.toFixed(2).replace(/\.?0+$/,"")}`
        }
        Eu = BigInt(Math.floor(uu))
      } else Eu = uu;
      const Uu = Eu < 0n ? -Eu : Eu,
        Zu = Eu < 0n ? "-" : "",
        Xu = Uu.toString();
      if (Xu.length <= ju) return `${Zu}${Xu}`;
      const lu = 3 * Math.floor((Xu.length - 1) / 3);
      if (lu < 3) return `${Zu}${Xu}`;
      if (lu > 3 * su.length) {
        const uu = Xu[0],
          Eu = Xu.slice(1, 3).replace(/0+$/, "");
        return `${Zu}${Eu?`${uu}.${Eu}`:uu}e${Xu.length-1}`
      }
      const {
        threshold: qu,
        suffix: fu
      } = su[su.length - lu / 3], Cu = Uu / qu, bu = Number(1000n * (Uu % qu) / qu), cu = Number(Cu) + bu / 1e3;
      let Nu;
      return Nu = cu >= 100 ? Math.floor(cu).toString() : cu >= 10 ? cu.toFixed(1).replace(/\.0$/, "") : cu.toFixed(2).replace(/\.?0+$/, ""), `${Zu}${Nu}${fu}`
    }
    const Zu = su.map((uu => {
      let {
        threshold: Eu,
        suffix: ju
      } = uu;
      return {
        threshold: Number(Eu),
        suffix: ju
      }
    })).filter((uu => {
      let {
        threshold: Eu
      } = uu;
      return Number.isFinite(Eu)
    }));

    function Xu(uu) {
      const Eu = Math.abs(uu),
        ju = uu < 0 ? "-" : "";
      for (const {
          threshold: su,
          suffix: Uu
        }
        of Zu)
        if (Eu >= su) {
          const uu = Eu / su;
          if (uu >= 1e3) return `${ju}${Eu.toExponential(2).replace("e+","e")}`;
          let Zu;
          return Zu = uu >= 100 ? Math.floor(uu).toString() : uu >= 10 ? uu.toFixed(1).replace(/\.0$/, "") : uu.toFixed(2).replace(/\.?0+$/, ""), `${ju}${Zu}${Uu}`
        } return `${ju}${Eu}`
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);