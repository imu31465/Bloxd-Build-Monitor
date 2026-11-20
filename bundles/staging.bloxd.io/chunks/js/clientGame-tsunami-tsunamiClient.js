export const id = 26;
export const ids = [26];
export const modules = {
  39114: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => bk
    });
    var Rk = Bk(9029);
    const tk = 1e3 / 3;

    function ak(kk, Fk, Bk) {
      if ("parenthetical-seconds" === Fk) return ` (${kk}s)`;
      const Rk = `${Math.floor(kk/60)}:${(kk%60).toString().padStart(2,"0")}`;
      return Bk ? `${Bk}${Rk}` : Rk
    }

    function Xk(kk, Fk, Bk, tk, ak) {
      var Xk;
      const bk = {
        ...tk.baseNametag
      };
      bk.content = [...null !== (Xk = tk.baseNametag.content) && void 0 !== Xk ? Xk : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,Rk.e)(ak)}`
      }], kk.setOtherEntitySetting(Fk, Bk, "nameTagInfo", bk)
    }
    const bk = function(kk, Fk, Bk, Rk) {
      let bk, {
        localPlayerId: wk
      } = Rk;
      const dk = new Map,
        sk = new Map;
      let Vk = 0,
        Jk = 0;
      return {
        onCreate: kk => {
          bk = kk
        },
        yJ: kk => {
          const Fk = Date.now();
          for (const [Rk, tk] of dk) {
            const kk = Math.floor((Fk - tk.startTime) / 1e3),
              Xk = Math.max(0, tk.remainingSeconds - kk);
            if (Xk === tk.lastRenderedSecond) continue;
            tk.lastRenderedSecond = Xk;
            const sk = {
                str: ak(Xk, tk.format, tk.prefix),
                style: tk.style
              },
              Vk = {
                ...tk.baseNametag
              };
            var Bk;
            if ("content" === tk.location) Vk.content = [...null !== (Bk = tk.baseNametag.content) && void 0 !== Bk ? Bk : [], sk];
            else Vk.subtitle = [sk];
            bk.setOtherEntitySetting(wk, Rk, "nameTagInfo", Vk), Xk <= 0 && dk.delete(Rk)
          }
          if (sk.size > 0 && Fk - Vk >= tk) {
            Vk = Fk, Jk = (Jk + 1) % 3;
            let kk = 0;
            for (const [Bk, Rk] of sk) {
              if (kk++ % 3 !== Jk) continue;
              const tk = Math.floor((Fk - Rk.startTime) / 1e3);
              if (tk === Rk.lastRenderedSecond) continue;
              Rk.lastRenderedSecond = tk;
              const ak = Rk.accumulatedIncome + Rk.incomePerSecond * BigInt(tk);
              Xk(bk, wk, Bk, Rk, ak)
            }
          }
        },
        onReceivedMessageFromServer: (kk, Fk) => {
          if ("startCountdown" === kk) dk.set(Fk.eId, {
            baseNametag: Fk.baseNametag,
            remainingSeconds: Fk.remainingSeconds,
            startTime: Date.now(),
            format: Fk.format,
            location: Fk.location,
            prefix: Fk.prefix,
            style: Fk.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === kk) dk.delete(Fk.eId);
          else if ("startIncomeTicking" === kk) {
            const kk = {
              baseNametag: Fk.baseNametag,
              accumulatedIncome: BigInt(Fk.accumulatedIncome),
              incomePerSecond: BigInt(Fk.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            sk.set(Fk.eId, kk), Xk(bk, wk, Fk.eId, kk, kk.accumulatedIncome)
          } else "stopIncomeTicking" === kk && sk.delete(Fk.eId) && bk.setOtherEntitySetting(wk, Fk.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (kk, Fk, Bk, Rk, tk, ak) => {
          if (ak && "Mesh" === bk.getEntityType(ak)) {
            const Fk = bk.getEntityName(ak);
            "Upgrades" === Fk ? bk.openShop(kk, !1, "Upgrades") : "Items" === Fk ? bk.openShop(kk, !1, "Items") : "Prestige" === Fk ? bk.openShop(kk, !1, "Prestige") : "Collections" === Fk ? bk.openShop(kk, !1, "Collections") : "Base Skins" === Fk ? bk.openShop(kk, !1, "Base Skins") : "Gauntlet" === Fk ? bk.openShop(kk, !1, "Gauntlet") : "Diamond Shop" === Fk && bk.openShop(kk, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  9029: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => tk,
      f: () => Xk
    });
    const Rk = [{
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

    function tk(kk) {
      let Fk, Bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof kk) {
        if (!Number.isFinite(kk)) return "0";
        if (Math.abs(kk) < 100) {
          const Fk = kk < 0 ? "-" : "",
            Bk = Math.abs(kk);
          return Bk >= 10 ? `${Fk}${Bk.toFixed(1).replace(/\.0$/,"")}` : `${Fk}${Bk.toFixed(2).replace(/\.?0+$/,"")}`
        }
        Fk = BigInt(Math.floor(kk))
      } else Fk = kk;
      const tk = Fk < 0n ? -Fk : Fk,
        ak = Fk < 0n ? "-" : "",
        Xk = tk.toString();
      if (Xk.length <= Bk) return `${ak}${Xk}`;
      const bk = 3 * Math.floor((Xk.length - 1) / 3);
      if (bk < 3) return `${ak}${Xk}`;
      if (bk > 3 * Rk.length) {
        const kk = Xk[0],
          Fk = Xk.slice(1, 3).replace(/0+$/, "");
        return `${ak}${Fk?`${kk}.${Fk}`:kk}e${Xk.length-1}`
      }
      const {
        threshold: wk,
        suffix: dk
      } = Rk[Rk.length - bk / 3], sk = tk / wk, Vk = Number(1000n * (tk % wk) / wk), Jk = Number(sk) + Vk / 1e3;
      let Ak;
      return Ak = Jk >= 100 ? Math.floor(Jk).toString() : Jk >= 10 ? Jk.toFixed(1).replace(/\.0$/, "") : Jk.toFixed(2).replace(/\.?0+$/, ""), `${ak}${Ak}${dk}`
    }
    const ak = Rk.map((kk => {
      let {
        threshold: Fk,
        suffix: Bk
      } = kk;
      return {
        threshold: Number(Fk),
        suffix: Bk
      }
    })).filter((kk => {
      let {
        threshold: Fk
      } = kk;
      return Number.isFinite(Fk)
    }));

    function Xk(kk) {
      const Fk = Math.abs(kk),
        Bk = kk < 0 ? "-" : "";
      for (const {
          threshold: Rk,
          suffix: tk
        }
        of ak)
        if (Fk >= Rk) {
          const kk = Fk / Rk;
          if (kk >= 1e3) return `${Bk}${Fk.toExponential(2).replace("e+","e")}`;
          let ak;
          return ak = kk >= 100 ? Math.floor(kk).toString() : kk >= 10 ? kk.toFixed(1).replace(/\.0$/, "") : kk.toFixed(2).replace(/\.?0+$/, ""), `${Bk}${ak}${tk}`
        } return `${Bk}${Fk}`
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);