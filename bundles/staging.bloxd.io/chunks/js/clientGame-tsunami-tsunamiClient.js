export const id = 26;
export const ids = [26];
export const modules = {
  39675: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => wm
    });
    var hm = fm(34315);
    const Am = 1e3 / 3;

    function am(mm, Tm, fm) {
      if ("parenthetical-seconds" === Tm) return ` (${mm}s)`;
      const hm = `${Math.floor(mm/60)}:${(mm%60).toString().padStart(2,"0")}`;
      return fm ? `${fm}${hm}` : hm
    }

    function xm(mm, Tm, fm, Am, am) {
      var xm;
      const wm = {
        ...Am.baseNametag
      };
      wm.content = [...null !== (xm = Am.baseNametag.content) && void 0 !== xm ? xm : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,hm.c)(am)}`
      }], mm.setOtherEntitySetting(Tm, fm, "nameTagInfo", wm)
    }
    const wm = function(mm, Tm, fm, hm) {
      let wm, {
        localPlayerId: Dm
      } = hm;
      const im = new Map,
        Rm = new Map;
      let pm = 0,
        Em = 0;
      return {
        onCreate: mm => {
          wm = mm
        },
        DE: mm => {
          const Tm = Date.now();
          for (const [hm, Am] of im) {
            const mm = Math.floor((Tm - Am.startTime) / 1e3),
              xm = Math.max(0, Am.remainingSeconds - mm);
            if (xm === Am.lastRenderedSecond) continue;
            Am.lastRenderedSecond = xm;
            const Rm = {
                str: am(xm, Am.format, Am.prefix),
                style: Am.style
              },
              pm = {
                ...Am.baseNametag
              };
            var fm;
            if ("content" === Am.location) pm.content = [...null !== (fm = Am.baseNametag.content) && void 0 !== fm ? fm : [], Rm];
            else pm.subtitle = [Rm];
            wm.setOtherEntitySetting(Dm, hm, "nameTagInfo", pm), xm <= 0 && im.delete(hm)
          }
          if (Rm.size > 0 && Tm - pm >= Am) {
            pm = Tm, Em = (Em + 1) % 3;
            let mm = 0;
            for (const [fm, hm] of Rm) {
              if (mm++ % 3 !== Em) continue;
              const Am = Math.floor((Tm - hm.startTime) / 1e3);
              if (Am === hm.lastRenderedSecond) continue;
              hm.lastRenderedSecond = Am;
              const am = hm.accumulatedIncome + hm.incomePerSecond * BigInt(Am);
              xm(wm, Dm, fm, hm, am)
            }
          }
        },
        onReceivedMessageFromServer: (mm, Tm) => {
          if ("startCountdown" === mm) im.set(Tm.eId, {
            baseNametag: Tm.baseNametag,
            remainingSeconds: Tm.remainingSeconds,
            startTime: Date.now(),
            format: Tm.format,
            location: Tm.location,
            prefix: Tm.prefix,
            style: Tm.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === mm) im.delete(Tm.eId);
          else if ("startIncomeTicking" === mm) {
            const mm = {
              baseNametag: Tm.baseNametag,
              accumulatedIncome: BigInt(Tm.accumulatedIncome),
              incomePerSecond: BigInt(Tm.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            Rm.set(Tm.eId, mm), xm(wm, Dm, Tm.eId, mm, mm.accumulatedIncome)
          } else "stopIncomeTicking" === mm && Rm.delete(Tm.eId) && wm.setOtherEntitySetting(Dm, Tm.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (mm, Tm, fm, hm, Am, am) => {
          if (am && "Mesh" === wm.getEntityType(am)) {
            const Tm = wm.getEntityName(am);
            "Upgrades" === Tm ? wm.openShop(mm, !1, "Upgrades") : "Items" === Tm ? wm.openShop(mm, !1, "Items") : "Prestige" === Tm ? wm.openShop(mm, !1, "Prestige") : "Collections" === Tm ? wm.openShop(mm, !1, "Collections") : "Base Skins" === Tm ? wm.openShop(mm, !1, "Base Skins") : "Gauntlet" === Tm ? wm.openShop(mm, !1, "Gauntlet") : "Diamond Shop" === Tm && wm.openShop(mm, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  34315: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am,
      f: () => xm
    });
    const hm = [{
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

    function Am(mm) {
      let Tm, fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof mm) {
        if (!Number.isFinite(mm)) return "0";
        if (Math.abs(mm) < 100) {
          const Tm = mm < 0 ? "-" : "",
            fm = Math.abs(mm);
          return fm >= 10 ? `${Tm}${fm.toFixed(1).replace(/\.0$/,"")}` : `${Tm}${fm.toFixed(2).replace(/\.?0+$/,"")}`
        }
        Tm = BigInt(Math.floor(mm))
      } else Tm = mm;
      const Am = Tm < 0n ? -Tm : Tm,
        am = Tm < 0n ? "-" : "",
        xm = Am.toString();
      if (xm.length <= fm) return `${am}${xm}`;
      const wm = 3 * Math.floor((xm.length - 1) / 3);
      if (wm < 3) return `${am}${xm}`;
      if (wm > 3 * hm.length) {
        const mm = xm[0],
          Tm = xm.slice(1, 3).replace(/0+$/, "");
        return `${am}${Tm?`${mm}.${Tm}`:mm}e${xm.length-1}`
      }
      const {
        threshold: Dm,
        suffix: im
      } = hm[hm.length - wm / 3], Rm = Am / Dm, pm = Number(1000n * (Am % Dm) / Dm), Em = Number(Rm) + pm / 1e3;
      let om;
      return om = Em >= 100 ? Math.floor(Em).toString() : Em >= 10 ? Em.toFixed(1).replace(/\.0$/, "") : Em.toFixed(2).replace(/\.?0+$/, ""), `${am}${om}${im}`
    }
    const am = hm.map((mm => {
      let {
        threshold: Tm,
        suffix: fm
      } = mm;
      return {
        threshold: Number(Tm),
        suffix: fm
      }
    })).filter((mm => {
      let {
        threshold: Tm
      } = mm;
      return Number.isFinite(Tm)
    }));

    function xm(mm) {
      const Tm = Math.abs(mm),
        fm = mm < 0 ? "-" : "";
      for (const {
          threshold: hm,
          suffix: Am
        }
        of am)
        if (Tm >= hm) {
          const mm = Tm / hm;
          if (mm >= 1e3) return `${fm}${Tm.toExponential(2).replace("e+","e")}`;
          let am;
          return am = mm >= 100 ? Math.floor(mm).toString() : mm >= 10 ? mm.toFixed(1).replace(/\.0$/, "") : mm.toFixed(2).replace(/\.?0+$/, ""), `${fm}${am}${Am}`
        } return `${fm}${Tm}`
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);