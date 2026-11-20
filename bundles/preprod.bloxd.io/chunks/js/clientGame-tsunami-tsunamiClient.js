export const id = 26;
export const ids = [26];
export const modules = {
  39455: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => xq
    });
    var Yq = gq(9304);
    const lq = 1e3 / 3;

    function Oq(qq, Eq, gq) {
      if ("parenthetical-seconds" === Eq) return ` (${qq}s)`;
      const Yq = `${Math.floor(qq/60)}:${(qq%60).toString().padStart(2,"0")}`;
      return gq ? `${gq}${Yq}` : Yq
    }

    function mq(qq, Eq, gq, lq, Oq) {
      var mq;
      const xq = {
        ...lq.baseNametag
      };
      xq.content = [...null !== (mq = lq.baseNametag.content) && void 0 !== mq ? mq : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,Yq.c)(Oq)}`
      }], qq.setOtherEntitySetting(Eq, gq, "nameTagInfo", xq)
    }
    const xq = function(qq, Eq, gq, Yq) {
      let xq, {
        localPlayerId: Aq
      } = Yq;
      const cq = new Map,
        uq = new Map;
      let Bq = 0,
        Wq = 0;
      return {
        onCreate: qq => {
          xq = qq
        },
        SB: qq => {
          const Eq = Date.now();
          for (const [Yq, lq] of cq) {
            const qq = Math.floor((Eq - lq.startTime) / 1e3),
              mq = Math.max(0, lq.remainingSeconds - qq);
            if (mq === lq.lastRenderedSecond) continue;
            lq.lastRenderedSecond = mq;
            const uq = {
                str: Oq(mq, lq.format, lq.prefix),
                style: lq.style
              },
              Bq = {
                ...lq.baseNametag
              };
            var gq;
            if ("content" === lq.location) Bq.content = [...null !== (gq = lq.baseNametag.content) && void 0 !== gq ? gq : [], uq];
            else Bq.subtitle = [uq];
            xq.setOtherEntitySetting(Aq, Yq, "nameTagInfo", Bq), mq <= 0 && cq.delete(Yq)
          }
          if (uq.size > 0 && Eq - Bq >= lq) {
            Bq = Eq, Wq = (Wq + 1) % 3;
            let qq = 0;
            for (const [gq, Yq] of uq) {
              if (qq++ % 3 !== Wq) continue;
              const lq = Math.floor((Eq - Yq.startTime) / 1e3);
              if (lq === Yq.lastRenderedSecond) continue;
              Yq.lastRenderedSecond = lq;
              const Oq = Yq.accumulatedIncome + Yq.incomePerSecond * BigInt(lq);
              mq(xq, Aq, gq, Yq, Oq)
            }
          }
        },
        onReceivedMessageFromServer: (qq, Eq) => {
          if ("startCountdown" === qq) cq.set(Eq.eId, {
            baseNametag: Eq.baseNametag,
            remainingSeconds: Eq.remainingSeconds,
            startTime: Date.now(),
            format: Eq.format,
            location: Eq.location,
            prefix: Eq.prefix,
            style: Eq.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === qq) cq.delete(Eq.eId);
          else if ("startIncomeTicking" === qq) {
            const qq = {
              baseNametag: Eq.baseNametag,
              accumulatedIncome: BigInt(Eq.accumulatedIncome),
              incomePerSecond: BigInt(Eq.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            uq.set(Eq.eId, qq), mq(xq, Aq, Eq.eId, qq, qq.accumulatedIncome)
          } else "stopIncomeTicking" === qq && uq.delete(Eq.eId) && xq.setOtherEntitySetting(Aq, Eq.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (qq, Eq, gq, Yq, lq, Oq) => {
          if (Oq && "Mesh" === xq.getEntityType(Oq)) {
            const Eq = xq.getEntityName(Oq);
            "Upgrades" === Eq ? xq.openShop(qq, !1, "Upgrades") : "Items" === Eq ? xq.openShop(qq, !1, "Items") : "Prestige" === Eq ? xq.openShop(qq, !1, "Prestige") : "Collections" === Eq ? xq.openShop(qq, !1, "Collections") : "Base Skins" === Eq ? xq.openShop(qq, !1, "Base Skins") : "Gauntlet" === Eq ? xq.openShop(qq, !1, "Gauntlet") : "Diamond Shop" === Eq && xq.openShop(qq, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  9304: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => lq,
      d: () => mq
    });
    const Yq = [{
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

    function lq(qq) {
      let Eq, gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof qq) {
        if (!Number.isFinite(qq)) return "0";
        if (Math.abs(qq) < 100) {
          const Eq = qq < 0 ? "-" : "",
            gq = Math.abs(qq);
          return gq >= 10 ? `${Eq}${gq.toFixed(1).replace(/\.0$/,"")}` : `${Eq}${gq.toFixed(2).replace(/\.?0+$/,"")}`
        }
        Eq = BigInt(Math.floor(qq))
      } else Eq = qq;
      const lq = Eq < 0n ? -Eq : Eq,
        Oq = Eq < 0n ? "-" : "",
        mq = lq.toString();
      if (mq.length <= gq) return `${Oq}${mq}`;
      const xq = 3 * Math.floor((mq.length - 1) / 3);
      if (xq < 3) return `${Oq}${mq}`;
      if (xq > 3 * Yq.length) {
        const qq = mq[0],
          Eq = mq.slice(1, 3).replace(/0+$/, "");
        return `${Oq}${Eq?`${qq}.${Eq}`:qq}e${mq.length-1}`
      }
      const {
        threshold: Aq,
        suffix: cq
      } = Yq[Yq.length - xq / 3], uq = lq / Aq, Bq = Number(1000n * (lq % Aq) / Aq), Wq = Number(uq) + Bq / 1e3;
      let Nq;
      return Nq = Wq >= 100 ? Math.floor(Wq).toString() : Wq >= 10 ? Wq.toFixed(1).replace(/\.0$/, "") : Wq.toFixed(2).replace(/\.?0+$/, ""), `${Oq}${Nq}${cq}`
    }
    const Oq = Yq.map((qq => {
      let {
        threshold: Eq,
        suffix: gq
      } = qq;
      return {
        threshold: Number(Eq),
        suffix: gq
      }
    })).filter((qq => {
      let {
        threshold: Eq
      } = qq;
      return Number.isFinite(Eq)
    }));

    function mq(qq) {
      const Eq = Math.abs(qq),
        gq = qq < 0 ? "-" : "";
      for (const {
          threshold: Yq,
          suffix: lq
        }
        of Oq)
        if (Eq >= Yq) {
          const qq = Eq / Yq;
          if (qq >= 1e3) return `${gq}${Eq.toExponential(2).replace("e+","e")}`;
          let Oq;
          return Oq = qq >= 100 ? Math.floor(qq).toString() : qq >= 10 ? qq.toFixed(1).replace(/\.0$/, "") : qq.toFixed(2).replace(/\.?0+$/, ""), `${gq}${Oq}${lq}`
        } return `${gq}${Eq}`
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);