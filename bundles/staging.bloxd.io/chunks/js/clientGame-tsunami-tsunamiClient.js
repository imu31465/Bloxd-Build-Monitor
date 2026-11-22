export const id = 26;
export const ids = [26];
export const modules = {
  39109: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      default: () => rk
    });
    var Dk = ik(33788);
    const fk = 1e3 / 3;

    function Sk(kk, ek, ik) {
      if ("parenthetical-seconds" === ek) return ` (${kk}s)`;
      const Dk = `${Math.floor(kk/60)}:${(kk%60).toString().padStart(2,"0")}`;
      return ik ? `${ik}${Dk}` : Dk
    }

    function bk(kk, ek, ik, fk, Sk) {
      var bk;
      const rk = {
        ...fk.baseNametag
      };
      rk.content = [...null !== (bk = fk.baseNametag.content) && void 0 !== bk ? bk : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,Dk.b)(Sk)}`
      }], kk.setOtherEntitySetting(ek, ik, "nameTagInfo", rk)
    }
    const rk = function(kk, ek, ik, Dk) {
      let rk, {
        localPlayerId: Pk
      } = Dk;
      const mk = new Map,
        Mk = new Map;
      let Kk = 0,
        xk = 0;
      return {
        onCreate: kk => {
          rk = kk
        },
        Px: kk => {
          const ek = Date.now();
          for (const [Dk, fk] of mk) {
            const kk = Math.floor((ek - fk.startTime) / 1e3),
              bk = Math.max(0, fk.remainingSeconds - kk);
            if (bk === fk.lastRenderedSecond) continue;
            fk.lastRenderedSecond = bk;
            const Mk = {
                str: Sk(bk, fk.format, fk.prefix),
                style: fk.style
              },
              Kk = {
                ...fk.baseNametag
              };
            var ik;
            if ("content" === fk.location) Kk.content = [...null !== (ik = fk.baseNametag.content) && void 0 !== ik ? ik : [], Mk];
            else Kk.subtitle = [Mk];
            rk.setOtherEntitySetting(Pk, Dk, "nameTagInfo", Kk), bk <= 0 && mk.delete(Dk)
          }
          if (Mk.size > 0 && ek - Kk >= fk) {
            Kk = ek, xk = (xk + 1) % 3;
            let kk = 0;
            for (const [ik, Dk] of Mk) {
              if (kk++ % 3 !== xk) continue;
              const fk = Math.floor((ek - Dk.startTime) / 1e3);
              if (fk === Dk.lastRenderedSecond) continue;
              Dk.lastRenderedSecond = fk;
              const Sk = Dk.accumulatedIncome + Dk.incomePerSecond * BigInt(fk);
              bk(rk, Pk, ik, Dk, Sk)
            }
          }
        },
        onReceivedMessageFromServer: (kk, ek) => {
          if ("startCountdown" === kk) mk.set(ek.eId, {
            baseNametag: ek.baseNametag,
            remainingSeconds: ek.remainingSeconds,
            startTime: Date.now(),
            format: ek.format,
            location: ek.location,
            prefix: ek.prefix,
            style: ek.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === kk) mk.delete(ek.eId);
          else if ("startIncomeTicking" === kk) {
            const kk = {
              baseNametag: ek.baseNametag,
              accumulatedIncome: BigInt(ek.accumulatedIncome),
              incomePerSecond: BigInt(ek.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            Mk.set(ek.eId, kk), bk(rk, Pk, ek.eId, kk, kk.accumulatedIncome)
          } else "stopIncomeTicking" === kk && Mk.delete(ek.eId) && rk.setOtherEntitySetting(Pk, ek.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (kk, ek, ik, Dk, fk, Sk) => {
          if (Sk && "Mesh" === rk.getEntityType(Sk)) {
            const ek = rk.getEntityName(Sk);
            "Upgrades" === ek ? rk.openShop(kk, !1, "Upgrades") : "Items" === ek ? rk.openShop(kk, !1, "Items") : "Prestige" === ek ? rk.openShop(kk, !1, "Prestige") : "Collections" === ek ? rk.openShop(kk, !1, "Collections") : "Base Skins" === ek ? rk.openShop(kk, !1, "Base Skins") : "Gauntlet" === ek ? rk.openShop(kk, !1, "Gauntlet") : "Diamond Shop" === ek && rk.openShop(kk, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  33788: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => fk,
      e: () => bk
    });
    const Dk = [{
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

    function fk(kk) {
      let ek, ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof kk) {
        if (!Number.isFinite(kk)) return "0";
        if (Math.abs(kk) < 100) {
          const ek = kk < 0 ? "-" : "",
            ik = Math.abs(kk);
          return ik >= 10 ? `${ek}${ik.toFixed(1).replace(/\.0$/,"")}` : `${ek}${ik.toFixed(2).replace(/\.?0+$/,"")}`
        }
        ek = BigInt(Math.floor(kk))
      } else ek = kk;
      const fk = ek < 0n ? -ek : ek,
        Sk = ek < 0n ? "-" : "",
        bk = fk.toString();
      if (bk.length <= ik) return `${Sk}${bk}`;
      const rk = 3 * Math.floor((bk.length - 1) / 3);
      if (rk < 3) return `${Sk}${bk}`;
      if (rk > 3 * Dk.length) {
        const kk = bk[0],
          ek = bk.slice(1, 3).replace(/0+$/, "");
        return `${Sk}${ek?`${kk}.${ek}`:kk}e${bk.length-1}`
      }
      const {
        threshold: Pk,
        suffix: mk
      } = Dk[Dk.length - rk / 3], Mk = fk / Pk, Kk = Number(1000n * (fk % Pk) / Pk), xk = Number(Mk) + Kk / 1e3;
      let nk;
      return nk = xk >= 100 ? Math.floor(xk).toString() : xk >= 10 ? xk.toFixed(1).replace(/\.0$/, "") : xk.toFixed(2).replace(/\.?0+$/, ""), `${Sk}${nk}${mk}`
    }
    const Sk = Dk.map((kk => {
      let {
        threshold: ek,
        suffix: ik
      } = kk;
      return {
        threshold: Number(ek),
        suffix: ik
      }
    })).filter((kk => {
      let {
        threshold: ek
      } = kk;
      return Number.isFinite(ek)
    }));

    function bk(kk) {
      const ek = Math.abs(kk),
        ik = kk < 0 ? "-" : "";
      for (const {
          threshold: Dk,
          suffix: fk
        }
        of Sk)
        if (ek >= Dk) {
          const kk = ek / Dk;
          if (kk >= 1e3) return `${ik}${ek.toExponential(2).replace("e+","e")}`;
          let Sk;
          return Sk = kk >= 100 ? Math.floor(kk).toString() : kk >= 10 ? kk.toFixed(1).replace(/\.0$/, "") : kk.toFixed(2).replace(/\.?0+$/, ""), `${ik}${Sk}${fk}`
        } return `${ik}${ek}`
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);