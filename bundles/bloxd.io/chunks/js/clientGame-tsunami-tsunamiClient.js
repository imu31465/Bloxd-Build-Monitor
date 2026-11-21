export const id = 26;
export const ids = [26];
export const modules = {
  39661: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => Zd
    });
    var pd = kd(9257);
    const Nd = 1e3 / 3;

    function Wd(dd, Jd, kd) {
      if ("parenthetical-seconds" === Jd) return ` (${dd}s)`;
      const pd = `${Math.floor(dd/60)}:${(dd%60).toString().padStart(2,"0")}`;
      return kd ? `${kd}${pd}` : pd
    }

    function Pd(dd, Jd, kd, Nd, Wd) {
      var Pd;
      const Zd = {
        ...Nd.baseNametag
      };
      Zd.content = [...null !== (Pd = Nd.baseNametag.content) && void 0 !== Pd ? Pd : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,pd.e)(Wd)}`
      }], dd.setOtherEntitySetting(Jd, kd, "nameTagInfo", Zd)
    }
    const Zd = function(dd, Jd, kd, pd) {
      let Zd, {
        localPlayerId: gd
      } = pd;
      const Cd = new Map,
        Kd = new Map;
      let od = 0,
        ld = 0;
      return {
        onCreate: dd => {
          Zd = dd
        },
        Do: dd => {
          const Jd = Date.now();
          for (const [pd, Nd] of Cd) {
            const dd = Math.floor((Jd - Nd.startTime) / 1e3),
              Pd = Math.max(0, Nd.remainingSeconds - dd);
            if (Pd === Nd.lastRenderedSecond) continue;
            Nd.lastRenderedSecond = Pd;
            const Kd = {
                str: Wd(Pd, Nd.format, Nd.prefix),
                style: Nd.style
              },
              od = {
                ...Nd.baseNametag
              };
            var kd;
            if ("content" === Nd.location) od.content = [...null !== (kd = Nd.baseNametag.content) && void 0 !== kd ? kd : [], Kd];
            else od.subtitle = [Kd];
            Zd.setOtherEntitySetting(gd, pd, "nameTagInfo", od), Pd <= 0 && Cd.delete(pd)
          }
          if (Kd.size > 0 && Jd - od >= Nd) {
            od = Jd, ld = (ld + 1) % 3;
            let dd = 0;
            for (const [kd, pd] of Kd) {
              if (dd++ % 3 !== ld) continue;
              const Nd = Math.floor((Jd - pd.startTime) / 1e3);
              if (Nd === pd.lastRenderedSecond) continue;
              pd.lastRenderedSecond = Nd;
              const Wd = pd.accumulatedIncome + pd.incomePerSecond * BigInt(Nd);
              Pd(Zd, gd, kd, pd, Wd)
            }
          }
        },
        onReceivedMessageFromServer: (dd, Jd) => {
          if ("startCountdown" === dd) Cd.set(Jd.eId, {
            baseNametag: Jd.baseNametag,
            remainingSeconds: Jd.remainingSeconds,
            startTime: Date.now(),
            format: Jd.format,
            location: Jd.location,
            prefix: Jd.prefix,
            style: Jd.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === dd) Cd.delete(Jd.eId);
          else if ("startIncomeTicking" === dd) {
            const dd = {
              baseNametag: Jd.baseNametag,
              accumulatedIncome: BigInt(Jd.accumulatedIncome),
              incomePerSecond: BigInt(Jd.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            Kd.set(Jd.eId, dd), Pd(Zd, gd, Jd.eId, dd, dd.accumulatedIncome)
          } else "stopIncomeTicking" === dd && Kd.delete(Jd.eId) && Zd.setOtherEntitySetting(gd, Jd.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (dd, Jd, kd, pd, Nd, Wd) => {
          if (Wd && "Mesh" === Zd.getEntityType(Wd)) {
            const Jd = Zd.getEntityName(Wd);
            "Upgrades" === Jd ? Zd.openShop(dd, !1, "Upgrades") : "Items" === Jd ? Zd.openShop(dd, !1, "Items") : "Prestige" === Jd ? Zd.openShop(dd, !1, "Prestige") : "Collections" === Jd ? Zd.openShop(dd, !1, "Collections") : "Base Skins" === Jd ? Zd.openShop(dd, !1, "Base Skins") : "Gauntlet" === Jd ? Zd.openShop(dd, !1, "Gauntlet") : "Diamond Shop" === Jd && Zd.openShop(dd, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  9257: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Nd,
      h: () => Pd
    });
    const pd = [{
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

    function Nd(dd) {
      let Jd, kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof dd) {
        if (!Number.isFinite(dd)) return "0";
        if (Math.abs(dd) < 100) {
          const Jd = dd < 0 ? "-" : "",
            kd = Math.abs(dd);
          return kd >= 10 ? `${Jd}${kd.toFixed(1).replace(/\.0$/,"")}` : `${Jd}${kd.toFixed(2).replace(/\.?0+$/,"")}`
        }
        Jd = BigInt(Math.floor(dd))
      } else Jd = dd;
      const Nd = Jd < 0n ? -Jd : Jd,
        Wd = Jd < 0n ? "-" : "",
        Pd = Nd.toString();
      if (Pd.length <= kd) return `${Wd}${Pd}`;
      const Zd = 3 * Math.floor((Pd.length - 1) / 3);
      if (Zd < 3) return `${Wd}${Pd}`;
      if (Zd > 3 * pd.length) {
        const dd = Pd[0],
          Jd = Pd.slice(1, 3).replace(/0+$/, "");
        return `${Wd}${Jd?`${dd}.${Jd}`:dd}e${Pd.length-1}`
      }
      const {
        threshold: gd,
        suffix: Cd
      } = pd[pd.length - Zd / 3], Kd = Nd / gd, od = Number(1000n * (Nd % gd) / gd), ld = Number(Kd) + od / 1e3;
      let Qd;
      return Qd = ld >= 100 ? Math.floor(ld).toString() : ld >= 10 ? ld.toFixed(1).replace(/\.0$/, "") : ld.toFixed(2).replace(/\.?0+$/, ""), `${Wd}${Qd}${Cd}`
    }
    const Wd = pd.map((dd => {
      let {
        threshold: Jd,
        suffix: kd
      } = dd;
      return {
        threshold: Number(Jd),
        suffix: kd
      }
    })).filter((dd => {
      let {
        threshold: Jd
      } = dd;
      return Number.isFinite(Jd)
    }));

    function Pd(dd) {
      const Jd = Math.abs(dd),
        kd = dd < 0 ? "-" : "";
      for (const {
          threshold: pd,
          suffix: Nd
        }
        of Wd)
        if (Jd >= pd) {
          const dd = Jd / pd;
          if (dd >= 1e3) return `${kd}${Jd.toExponential(2).replace("e+","e")}`;
          let Wd;
          return Wd = dd >= 100 ? Math.floor(dd).toString() : dd >= 10 ? dd.toFixed(1).replace(/\.0$/, "") : dd.toFixed(2).replace(/\.?0+$/, ""), `${kd}${Wd}${Nd}`
        } return `${kd}${Jd}`
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);