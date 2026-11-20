export const id = 26;
export const ids = [26];
export const modules = {
  39005: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => pv
    });
    var hv = Pv(9027);
    const Sv = 1e3 / 3;

    function ev(vv, zv, Pv) {
      if ("parenthetical-seconds" === zv) return ` (${vv}s)`;
      const hv = `${Math.floor(vv/60)}:${(vv%60).toString().padStart(2,"0")}`;
      return Pv ? `${Pv}${hv}` : hv
    }

    function gv(vv, zv, Pv, Sv, ev) {
      var gv;
      const pv = {
        ...Sv.baseNametag
      };
      pv.content = [...null !== (gv = Sv.baseNametag.content) && void 0 !== gv ? gv : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,hv.d)(ev)}`
      }], vv.setOtherEntitySetting(zv, Pv, "nameTagInfo", pv)
    }
    const pv = function(vv, zv, Pv, hv) {
      let pv, {
        localPlayerId: dv
      } = hv;
      const Nv = new Map,
        lv = new Map;
      let Tv = 0,
        Wv = 0;
      return {
        onCreate: vv => {
          pv = vv
        },
        MT: vv => {
          const zv = Date.now();
          for (const [hv, Sv] of Nv) {
            const vv = Math.floor((zv - Sv.startTime) / 1e3),
              gv = Math.max(0, Sv.remainingSeconds - vv);
            if (gv === Sv.lastRenderedSecond) continue;
            Sv.lastRenderedSecond = gv;
            const lv = {
                str: ev(gv, Sv.format, Sv.prefix),
                style: Sv.style
              },
              Tv = {
                ...Sv.baseNametag
              };
            var Pv;
            if ("content" === Sv.location) Tv.content = [...null !== (Pv = Sv.baseNametag.content) && void 0 !== Pv ? Pv : [], lv];
            else Tv.subtitle = [lv];
            pv.setOtherEntitySetting(dv, hv, "nameTagInfo", Tv), gv <= 0 && Nv.delete(hv)
          }
          if (lv.size > 0 && zv - Tv >= Sv) {
            Tv = zv, Wv = (Wv + 1) % 3;
            let vv = 0;
            for (const [Pv, hv] of lv) {
              if (vv++ % 3 !== Wv) continue;
              const Sv = Math.floor((zv - hv.startTime) / 1e3);
              if (Sv === hv.lastRenderedSecond) continue;
              hv.lastRenderedSecond = Sv;
              const ev = hv.accumulatedIncome + hv.incomePerSecond * BigInt(Sv);
              gv(pv, dv, Pv, hv, ev)
            }
          }
        },
        onReceivedMessageFromServer: (vv, zv) => {
          if ("startCountdown" === vv) Nv.set(zv.eId, {
            baseNametag: zv.baseNametag,
            remainingSeconds: zv.remainingSeconds,
            startTime: Date.now(),
            format: zv.format,
            location: zv.location,
            prefix: zv.prefix,
            style: zv.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === vv) Nv.delete(zv.eId);
          else if ("startIncomeTicking" === vv) {
            const vv = {
              baseNametag: zv.baseNametag,
              accumulatedIncome: BigInt(zv.accumulatedIncome),
              incomePerSecond: BigInt(zv.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            lv.set(zv.eId, vv), gv(pv, dv, zv.eId, vv, vv.accumulatedIncome)
          } else "stopIncomeTicking" === vv && lv.delete(zv.eId) && pv.setOtherEntitySetting(dv, zv.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (vv, zv, Pv, hv, Sv, ev) => {
          if (ev && "Mesh" === pv.getEntityType(ev)) {
            const zv = pv.getEntityName(ev);
            "Upgrades" === zv ? pv.openShop(vv, !1, "Upgrades") : "Items" === zv ? pv.openShop(vv, !1, "Items") : "Prestige" === zv ? pv.openShop(vv, !1, "Prestige") : "Collections" === zv ? pv.openShop(vv, !1, "Collections") : "Base Skins" === zv ? pv.openShop(vv, !1, "Base Skins") : "Gauntlet" === zv ? pv.openShop(vv, !1, "Gauntlet") : "Diamond Shop" === zv && pv.openShop(vv, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  9027: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Sv,
      f: () => gv
    });
    const hv = [{
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

    function Sv(vv) {
      let zv, Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof vv) {
        if (!Number.isFinite(vv)) return "0";
        if (Math.abs(vv) < 100) {
          const zv = vv < 0 ? "-" : "",
            Pv = Math.abs(vv);
          return Pv >= 10 ? `${zv}${Pv.toFixed(1).replace(/\.0$/,"")}` : `${zv}${Pv.toFixed(2).replace(/\.?0+$/,"")}`
        }
        zv = BigInt(Math.floor(vv))
      } else zv = vv;
      const Sv = zv < 0n ? -zv : zv,
        ev = zv < 0n ? "-" : "",
        gv = Sv.toString();
      if (gv.length <= Pv) return `${ev}${gv}`;
      const pv = 3 * Math.floor((gv.length - 1) / 3);
      if (pv < 3) return `${ev}${gv}`;
      if (pv > 3 * hv.length) {
        const vv = gv[0],
          zv = gv.slice(1, 3).replace(/0+$/, "");
        return `${ev}${zv?`${vv}.${zv}`:vv}e${gv.length-1}`
      }
      const {
        threshold: dv,
        suffix: Nv
      } = hv[hv.length - pv / 3], lv = Sv / dv, Tv = Number(1000n * (Sv % dv) / dv), Wv = Number(lv) + Tv / 1e3;
      let wv;
      return wv = Wv >= 100 ? Math.floor(Wv).toString() : Wv >= 10 ? Wv.toFixed(1).replace(/\.0$/, "") : Wv.toFixed(2).replace(/\.?0+$/, ""), `${ev}${wv}${Nv}`
    }
    const ev = hv.map((vv => {
      let {
        threshold: zv,
        suffix: Pv
      } = vv;
      return {
        threshold: Number(zv),
        suffix: Pv
      }
    })).filter((vv => {
      let {
        threshold: zv
      } = vv;
      return Number.isFinite(zv)
    }));

    function gv(vv) {
      const zv = Math.abs(vv),
        Pv = vv < 0 ? "-" : "";
      for (const {
          threshold: hv,
          suffix: Sv
        }
        of ev)
        if (zv >= hv) {
          const vv = zv / hv;
          if (vv >= 1e3) return `${Pv}${zv.toExponential(2).replace("e+","e")}`;
          let ev;
          return ev = vv >= 100 ? Math.floor(vv).toString() : vv >= 10 ? vv.toFixed(1).replace(/\.0$/, "") : vv.toFixed(2).replace(/\.?0+$/, ""), `${Pv}${ev}${Sv}`
        } return `${Pv}${zv}`
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);