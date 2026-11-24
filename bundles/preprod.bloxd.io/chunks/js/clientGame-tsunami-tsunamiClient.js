export const id = 26;
export const ids = [26];
export const modules = {
  39753: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => xp
    });
    var Op = cp(34453);
    const op = 1e3 / 3;

    function Ip(pp, ip, cp) {
      if ("parenthetical-seconds" === ip) return ` (${pp}s)`;
      const Op = `${Math.floor(pp/60)}:${(pp%60).toString().padStart(2,"0")}`;
      return cp ? `${cp}${Op}` : Op
    }

    function Sp(pp, ip, cp, op, Ip) {
      var Sp;
      const xp = {
        ...op.baseNametag
      };
      xp.content = [...null !== (Sp = op.baseNametag.content) && void 0 !== Sp ? Sp : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,Op.e)(Ip)}`
      }], pp.setOtherEntitySetting(ip, cp, "nameTagInfo", xp)
    }
    const xp = function(pp, ip, cp, Op) {
      let xp, {
        localPlayerId: Lp
      } = Op;
      const Yp = new Map,
        Dp = new Map;
      let Ap = 0,
        Pp = 0;
      return {
        onCreate: pp => {
          xp = pp
        },
        LP: pp => {
          const ip = Date.now();
          for (const [Op, op] of Yp) {
            const pp = Math.floor((ip - op.startTime) / 1e3),
              Sp = Math.max(0, op.remainingSeconds - pp);
            if (Sp === op.lastRenderedSecond) continue;
            op.lastRenderedSecond = Sp;
            const Dp = {
                str: Ip(Sp, op.format, op.prefix),
                style: op.style
              },
              Ap = {
                ...op.baseNametag
              };
            var cp;
            if ("content" === op.location) Ap.content = [...null !== (cp = op.baseNametag.content) && void 0 !== cp ? cp : [], Dp];
            else Ap.subtitle = [Dp];
            xp.setOtherEntitySetting(Lp, Op, "nameTagInfo", Ap), Sp <= 0 && Yp.delete(Op)
          }
          if (Dp.size > 0 && ip - Ap >= op) {
            Ap = ip, Pp = (Pp + 1) % 3;
            let pp = 0;
            for (const [cp, Op] of Dp) {
              if (pp++ % 3 !== Pp) continue;
              const op = Math.floor((ip - Op.startTime) / 1e3);
              if (op === Op.lastRenderedSecond) continue;
              Op.lastRenderedSecond = op;
              const Ip = Op.accumulatedIncome + Op.incomePerSecond * BigInt(op);
              Sp(xp, Lp, cp, Op, Ip)
            }
          }
        },
        onReceivedMessageFromServer: (pp, ip) => {
          if ("startCountdown" === pp) Yp.set(ip.eId, {
            baseNametag: ip.baseNametag,
            remainingSeconds: ip.remainingSeconds,
            startTime: Date.now(),
            format: ip.format,
            location: ip.location,
            prefix: ip.prefix,
            style: ip.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === pp) Yp.delete(ip.eId);
          else if ("startIncomeTicking" === pp) {
            const pp = {
              baseNametag: ip.baseNametag,
              accumulatedIncome: BigInt(ip.accumulatedIncome),
              incomePerSecond: BigInt(ip.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            Dp.set(ip.eId, pp), Sp(xp, Lp, ip.eId, pp, pp.accumulatedIncome)
          } else "stopIncomeTicking" === pp && Dp.delete(ip.eId) && xp.setOtherEntitySetting(Lp, ip.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (pp, ip, cp, Op, op, Ip) => {
          if (Ip && "Mesh" === xp.getEntityType(Ip)) {
            const ip = xp.getEntityName(Ip);
            "Upgrades" === ip ? xp.openShop(pp, !1, "Upgrades") : "Items" === ip ? xp.openShop(pp, !1, "Items") : "Prestige" === ip ? xp.openShop(pp, !1, "Prestige") : "Collections" === ip ? xp.openShop(pp, !1, "Collections") : "Base Skins" === ip ? xp.openShop(pp, !1, "Base Skins") : "Gauntlet" === ip ? xp.openShop(pp, !1, "Gauntlet") : "Diamond Shop" === ip && xp.openShop(pp, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  34453: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => op,
      g: () => Sp
    });
    const Op = [{
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

    function op(pp) {
      let ip, cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof pp) {
        if (!Number.isFinite(pp)) return "0";
        if (Math.abs(pp) < 100) {
          const ip = pp < 0 ? "-" : "",
            cp = Math.abs(pp);
          return cp >= 10 ? `${ip}${cp.toFixed(1).replace(/\.0$/,"")}` : `${ip}${cp.toFixed(2).replace(/\.?0+$/,"")}`
        }
        ip = BigInt(Math.floor(pp))
      } else ip = pp;
      const op = ip < 0n ? -ip : ip,
        Ip = ip < 0n ? "-" : "",
        Sp = op.toString();
      if (Sp.length <= cp) return `${Ip}${Sp}`;
      const xp = 3 * Math.floor((Sp.length - 1) / 3);
      if (xp < 3) return `${Ip}${Sp}`;
      if (xp > 3 * Op.length) {
        const pp = Sp[0],
          ip = Sp.slice(1, 3).replace(/0+$/, "");
        return `${Ip}${ip?`${pp}.${ip}`:pp}e${Sp.length-1}`
      }
      const {
        threshold: Lp,
        suffix: Yp
      } = Op[Op.length - xp / 3], Dp = op / Lp, Ap = Number(1000n * (op % Lp) / Lp), Pp = Number(Dp) + Ap / 1e3;
      let Wp;
      return Wp = Pp >= 100 ? Math.floor(Pp).toString() : Pp >= 10 ? Pp.toFixed(1).replace(/\.0$/, "") : Pp.toFixed(2).replace(/\.?0+$/, ""), `${Ip}${Wp}${Yp}`
    }
    const Ip = Op.map((pp => {
      let {
        threshold: ip,
        suffix: cp
      } = pp;
      return {
        threshold: Number(ip),
        suffix: cp
      }
    })).filter((pp => {
      let {
        threshold: ip
      } = pp;
      return Number.isFinite(ip)
    }));

    function Sp(pp) {
      const ip = Math.abs(pp),
        cp = pp < 0 ? "-" : "";
      for (const {
          threshold: Op,
          suffix: op
        }
        of Ip)
        if (ip >= Op) {
          const pp = ip / Op;
          if (pp >= 1e3) return `${cp}${ip.toExponential(2).replace("e+","e")}`;
          let Ip;
          return Ip = pp >= 100 ? Math.floor(pp).toString() : pp >= 10 ? pp.toFixed(1).replace(/\.0$/, "") : pp.toFixed(2).replace(/\.?0+$/, ""), `${cp}${Ip}${op}`
        } return `${cp}${ip}`
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);