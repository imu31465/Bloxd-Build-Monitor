export const id = 26;
export const ids = [26];
export const modules = {
  39547: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => lk
    });
    var Xk = Ik(34202);
    const Tk = 1e3 / 3;

    function ik(kk, Fk, Ik) {
      if ("parenthetical-seconds" === Fk) return ` (${kk}s)`;
      const Xk = `${Math.floor(kk/60)}:${(kk%60).toString().padStart(2,"0")}`;
      return Ik ? `${Ik}${Xk}` : Xk
    }

    function yk(kk, Fk, Ik, Tk, ik) {
      var yk;
      const lk = {
        ...Tk.baseNametag
      };
      lk.content = [...null !== (yk = Tk.baseNametag.content) && void 0 !== yk ? yk : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,Xk.c)(ik)}`
      }], kk.setOtherEntitySetting(Fk, Ik, "nameTagInfo", lk)
    }
    const lk = function(kk, Fk, Ik, Xk) {
      let lk, {
        localPlayerId: ak
      } = Xk;
      const qk = new Map,
        Lk = new Map;
      let tk = 0,
        Zk = 0;
      return {
        onCreate: kk => {
          lk = kk
        },
        Dt: kk => {
          const Fk = Date.now();
          for (const [Xk, Tk] of qk) {
            const kk = Math.floor((Fk - Tk.startTime) / 1e3),
              yk = Math.max(0, Tk.remainingSeconds - kk);
            if (yk === Tk.lastRenderedSecond) continue;
            Tk.lastRenderedSecond = yk;
            const Lk = {
                str: ik(yk, Tk.format, Tk.prefix),
                style: Tk.style
              },
              tk = {
                ...Tk.baseNametag
              };
            var Ik;
            if ("content" === Tk.location) tk.content = [...null !== (Ik = Tk.baseNametag.content) && void 0 !== Ik ? Ik : [], Lk];
            else tk.subtitle = [Lk];
            lk.setOtherEntitySetting(ak, Xk, "nameTagInfo", tk), yk <= 0 && qk.delete(Xk)
          }
          if (Lk.size > 0 && Fk - tk >= Tk) {
            tk = Fk, Zk = (Zk + 1) % 3;
            let kk = 0;
            for (const [Ik, Xk] of Lk) {
              if (kk++ % 3 !== Zk) continue;
              const Tk = Math.floor((Fk - Xk.startTime) / 1e3);
              if (Tk === Xk.lastRenderedSecond) continue;
              Xk.lastRenderedSecond = Tk;
              const ik = Xk.accumulatedIncome + Xk.incomePerSecond * BigInt(Tk);
              yk(lk, ak, Ik, Xk, ik)
            }
          }
        },
        onReceivedMessageFromServer: (kk, Fk) => {
          if ("startCountdown" === kk) qk.set(Fk.eId, {
            baseNametag: Fk.baseNametag,
            remainingSeconds: Fk.remainingSeconds,
            startTime: Date.now(),
            format: Fk.format,
            location: Fk.location,
            prefix: Fk.prefix,
            style: Fk.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === kk) qk.delete(Fk.eId);
          else if ("startIncomeTicking" === kk) {
            const kk = {
              baseNametag: Fk.baseNametag,
              accumulatedIncome: BigInt(Fk.accumulatedIncome),
              incomePerSecond: BigInt(Fk.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            Lk.set(Fk.eId, kk), yk(lk, ak, Fk.eId, kk, kk.accumulatedIncome)
          } else "stopIncomeTicking" === kk && Lk.delete(Fk.eId) && lk.setOtherEntitySetting(ak, Fk.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (kk, Fk, Ik, Xk, Tk, ik) => {
          if (ik && "Mesh" === lk.getEntityType(ik)) {
            const Fk = lk.getEntityName(ik);
            "Upgrades" === Fk ? lk.openShop(kk, !1, "Upgrades") : "Items" === Fk ? lk.openShop(kk, !1, "Items") : "Prestige" === Fk ? lk.openShop(kk, !1, "Prestige") : "Collections" === Fk ? lk.openShop(kk, !1, "Collections") : "Base Skins" === Fk ? lk.openShop(kk, !1, "Base Skins") : "Gauntlet" === Fk ? lk.openShop(kk, !1, "Gauntlet") : "Diamond Shop" === Fk && lk.openShop(kk, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  34202: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Tk,
      d: () => yk
    });
    const Xk = [{
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

    function Tk(kk) {
      let Fk, Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof kk) {
        if (!Number.isFinite(kk)) return "0";
        if (Math.abs(kk) < 100) {
          const Fk = kk < 0 ? "-" : "",
            Ik = Math.abs(kk);
          return Ik >= 10 ? `${Fk}${Ik.toFixed(1).replace(/\.0$/,"")}` : `${Fk}${Ik.toFixed(2).replace(/\.?0+$/,"")}`
        }
        Fk = BigInt(Math.floor(kk))
      } else Fk = kk;
      const Tk = Fk < 0n ? -Fk : Fk,
        ik = Fk < 0n ? "-" : "",
        yk = Tk.toString();
      if (yk.length <= Ik) return `${ik}${yk}`;
      const lk = 3 * Math.floor((yk.length - 1) / 3);
      if (lk < 3) return `${ik}${yk}`;
      if (lk > 3 * Xk.length) {
        const kk = yk[0],
          Fk = yk.slice(1, 3).replace(/0+$/, "");
        return `${ik}${Fk?`${kk}.${Fk}`:kk}e${yk.length-1}`
      }
      const {
        threshold: ak,
        suffix: qk
      } = Xk[Xk.length - lk / 3], Lk = Tk / ak, tk = Number(1000n * (Tk % ak) / ak), Zk = Number(Lk) + tk / 1e3;
      let jk;
      return jk = Zk >= 100 ? Math.floor(Zk).toString() : Zk >= 10 ? Zk.toFixed(1).replace(/\.0$/, "") : Zk.toFixed(2).replace(/\.?0+$/, ""), `${ik}${jk}${qk}`
    }
    const ik = Xk.map((kk => {
      let {
        threshold: Fk,
        suffix: Ik
      } = kk;
      return {
        threshold: Number(Fk),
        suffix: Ik
      }
    })).filter((kk => {
      let {
        threshold: Fk
      } = kk;
      return Number.isFinite(Fk)
    }));

    function yk(kk) {
      const Fk = Math.abs(kk),
        Ik = kk < 0 ? "-" : "";
      for (const {
          threshold: Xk,
          suffix: Tk
        }
        of ik)
        if (Fk >= Xk) {
          const kk = Fk / Xk;
          if (kk >= 1e3) return `${Ik}${Fk.toExponential(2).replace("e+","e")}`;
          let ik;
          return ik = kk >= 100 ? Math.floor(kk).toString() : kk >= 10 ? kk.toFixed(1).replace(/\.0$/, "") : kk.toFixed(2).replace(/\.?0+$/, ""), `${Ik}${ik}${Tk}`
        } return `${Ik}${Fk}`
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);