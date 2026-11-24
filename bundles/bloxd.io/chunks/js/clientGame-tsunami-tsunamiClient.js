export const id = 26;
export const ids = [26];
export const modules = {
  39766: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => dt
    });
    var Ot = Vt(34406);
    const qt = 1e3 / 3;

    function Dt(tt, et, Vt) {
      if ("parenthetical-seconds" === et) return ` (${tt}s)`;
      const Ot = `${Math.floor(tt/60)}:${(tt%60).toString().padStart(2,"0")}`;
      return Vt ? `${Vt}${Ot}` : Ot
    }

    function mt(tt, et, Vt, qt, Dt) {
      var mt;
      const dt = {
        ...qt.baseNametag
      };
      dt.content = [...null !== (mt = qt.baseNametag.content) && void 0 !== mt ? mt : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,Ot.d)(Dt)}`
      }], tt.setOtherEntitySetting(et, Vt, "nameTagInfo", dt)
    }
    const dt = function(tt, et, Vt, Ot) {
      let dt, {
        localPlayerId: jt
      } = Ot;
      const Ht = new Map,
        Xt = new Map;
      let Qt = 0,
        lt = 0;
      return {
        onCreate: tt => {
          dt = tt
        },
        BQ: tt => {
          const et = Date.now();
          for (const [Ot, qt] of Ht) {
            const tt = Math.floor((et - qt.startTime) / 1e3),
              mt = Math.max(0, qt.remainingSeconds - tt);
            if (mt === qt.lastRenderedSecond) continue;
            qt.lastRenderedSecond = mt;
            const Xt = {
                str: Dt(mt, qt.format, qt.prefix),
                style: qt.style
              },
              Qt = {
                ...qt.baseNametag
              };
            var Vt;
            if ("content" === qt.location) Qt.content = [...null !== (Vt = qt.baseNametag.content) && void 0 !== Vt ? Vt : [], Xt];
            else Qt.subtitle = [Xt];
            dt.setOtherEntitySetting(jt, Ot, "nameTagInfo", Qt), mt <= 0 && Ht.delete(Ot)
          }
          if (Xt.size > 0 && et - Qt >= qt) {
            Qt = et, lt = (lt + 1) % 3;
            let tt = 0;
            for (const [Vt, Ot] of Xt) {
              if (tt++ % 3 !== lt) continue;
              const qt = Math.floor((et - Ot.startTime) / 1e3);
              if (qt === Ot.lastRenderedSecond) continue;
              Ot.lastRenderedSecond = qt;
              const Dt = Ot.accumulatedIncome + Ot.incomePerSecond * BigInt(qt);
              mt(dt, jt, Vt, Ot, Dt)
            }
          }
        },
        onReceivedMessageFromServer: (tt, et) => {
          if ("startCountdown" === tt) Ht.set(et.eId, {
            baseNametag: et.baseNametag,
            remainingSeconds: et.remainingSeconds,
            startTime: Date.now(),
            format: et.format,
            location: et.location,
            prefix: et.prefix,
            style: et.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === tt) Ht.delete(et.eId);
          else if ("startIncomeTicking" === tt) {
            const tt = {
              baseNametag: et.baseNametag,
              accumulatedIncome: BigInt(et.accumulatedIncome),
              incomePerSecond: BigInt(et.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            Xt.set(et.eId, tt), mt(dt, jt, et.eId, tt, tt.accumulatedIncome)
          } else "stopIncomeTicking" === tt && Xt.delete(et.eId) && dt.setOtherEntitySetting(jt, et.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (tt, et, Vt, Ot, qt, Dt) => {
          if (Dt && "Mesh" === dt.getEntityType(Dt)) {
            const et = dt.getEntityName(Dt);
            "Upgrades" === et ? dt.openShop(tt, !1, "Upgrades") : "Items" === et ? dt.openShop(tt, !1, "Items") : "Prestige" === et ? dt.openShop(tt, !1, "Prestige") : "Collections" === et ? dt.openShop(tt, !1, "Collections") : "Base Skins" === et ? dt.openShop(tt, !1, "Base Skins") : "Gauntlet" === et ? dt.openShop(tt, !1, "Gauntlet") : "Diamond Shop" === et && dt.openShop(tt, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  34406: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => qt,
      g: () => mt
    });
    const Ot = [{
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

    function qt(tt) {
      let et, Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof tt) {
        if (!Number.isFinite(tt)) return "0";
        if (Math.abs(tt) < 100) {
          const et = tt < 0 ? "-" : "",
            Vt = Math.abs(tt);
          return Vt >= 10 ? `${et}${Vt.toFixed(1).replace(/\.0$/,"")}` : `${et}${Vt.toFixed(2).replace(/\.?0+$/,"")}`
        }
        et = BigInt(Math.floor(tt))
      } else et = tt;
      const qt = et < 0n ? -et : et,
        Dt = et < 0n ? "-" : "",
        mt = qt.toString();
      if (mt.length <= Vt) return `${Dt}${mt}`;
      const dt = 3 * Math.floor((mt.length - 1) / 3);
      if (dt < 3) return `${Dt}${mt}`;
      if (dt > 3 * Ot.length) {
        const tt = mt[0],
          et = mt.slice(1, 3).replace(/0+$/, "");
        return `${Dt}${et?`${tt}.${et}`:tt}e${mt.length-1}`
      }
      const {
        threshold: jt,
        suffix: Ht
      } = Ot[Ot.length - dt / 3], Xt = qt / jt, Qt = Number(1000n * (qt % jt) / jt), lt = Number(Xt) + Qt / 1e3;
      let Et;
      return Et = lt >= 100 ? Math.floor(lt).toString() : lt >= 10 ? lt.toFixed(1).replace(/\.0$/, "") : lt.toFixed(2).replace(/\.?0+$/, ""), `${Dt}${Et}${Ht}`
    }
    const Dt = Ot.map((tt => {
      let {
        threshold: et,
        suffix: Vt
      } = tt;
      return {
        threshold: Number(et),
        suffix: Vt
      }
    })).filter((tt => {
      let {
        threshold: et
      } = tt;
      return Number.isFinite(et)
    }));

    function mt(tt) {
      const et = Math.abs(tt),
        Vt = tt < 0 ? "-" : "";
      for (const {
          threshold: Ot,
          suffix: qt
        }
        of Dt)
        if (et >= Ot) {
          const tt = et / Ot;
          if (tt >= 1e3) return `${Vt}${et.toExponential(2).replace("e+","e")}`;
          let Dt;
          return Dt = tt >= 100 ? Math.floor(tt).toString() : tt >= 10 ? tt.toFixed(1).replace(/\.0$/, "") : tt.toFixed(2).replace(/\.?0+$/, ""), `${Vt}${Dt}${qt}`
        } return `${Vt}${et}`
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);