export const id = 26;
export const ids = [26];
export const modules = {
  39126: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => Ub
    });
    var kb = sb(8947);
    const Wb = 1e3 / 3;

    function ab(bb, cb, sb) {
      if ("parenthetical-seconds" === cb) return ` (${bb}s)`;
      const kb = `${Math.floor(bb/60)}:${(bb%60).toString().padStart(2,"0")}`;
      return sb ? `${sb}${kb}` : kb
    }

    function Tb(bb, cb, sb, Wb, ab) {
      var Tb;
      const Ub = {
        ...Wb.baseNametag
      };
      Ub.content = [...null !== (Tb = Wb.baseNametag.content) && void 0 !== Tb ? Tb : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,kb.e)(ab)}`
      }], bb.setOtherEntitySetting(cb, sb, "nameTagInfo", Ub)
    }
    const Ub = function(bb, cb, sb, kb) {
      let Ub, {
        localPlayerId: Ib
      } = kb;
      const Hb = new Map,
        fb = new Map;
      let Mb = 0,
        Xb = 0;
      return {
        onCreate: bb => {
          Ub = bb
        },
        aX: bb => {
          const cb = Date.now();
          for (const [kb, Wb] of Hb) {
            const bb = Math.floor((cb - Wb.startTime) / 1e3),
              Tb = Math.max(0, Wb.remainingSeconds - bb);
            if (Tb === Wb.lastRenderedSecond) continue;
            Wb.lastRenderedSecond = Tb;
            const fb = {
                str: ab(Tb, Wb.format, Wb.prefix),
                style: Wb.style
              },
              Mb = {
                ...Wb.baseNametag
              };
            var sb;
            if ("content" === Wb.location) Mb.content = [...null !== (sb = Wb.baseNametag.content) && void 0 !== sb ? sb : [], fb];
            else Mb.subtitle = [fb];
            Ub.setOtherEntitySetting(Ib, kb, "nameTagInfo", Mb), Tb <= 0 && Hb.delete(kb)
          }
          if (fb.size > 0 && cb - Mb >= Wb) {
            Mb = cb, Xb = (Xb + 1) % 3;
            let bb = 0;
            for (const [sb, kb] of fb) {
              if (bb++ % 3 !== Xb) continue;
              const Wb = Math.floor((cb - kb.startTime) / 1e3);
              if (Wb === kb.lastRenderedSecond) continue;
              kb.lastRenderedSecond = Wb;
              const ab = kb.accumulatedIncome + kb.incomePerSecond * BigInt(Wb);
              Tb(Ub, Ib, sb, kb, ab)
            }
          }
        },
        onReceivedMessageFromServer: (bb, cb) => {
          if ("startCountdown" === bb) Hb.set(cb.eId, {
            baseNametag: cb.baseNametag,
            remainingSeconds: cb.remainingSeconds,
            startTime: Date.now(),
            format: cb.format,
            location: cb.location,
            prefix: cb.prefix,
            style: cb.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === bb) Hb.delete(cb.eId);
          else if ("startIncomeTicking" === bb) {
            const bb = {
              baseNametag: cb.baseNametag,
              accumulatedIncome: BigInt(cb.accumulatedIncome),
              incomePerSecond: BigInt(cb.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            fb.set(cb.eId, bb), Tb(Ub, Ib, cb.eId, bb, bb.accumulatedIncome)
          } else "stopIncomeTicking" === bb && fb.delete(cb.eId) && Ub.setOtherEntitySetting(Ib, cb.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (bb, cb, sb, kb, Wb, ab) => {
          if (ab && "Mesh" === Ub.getEntityType(ab)) {
            const cb = Ub.getEntityName(ab);
            "Upgrades" === cb ? Ub.openShop(bb, !1, "Upgrades") : "Items" === cb ? Ub.openShop(bb, !1, "Items") : "Prestige" === cb ? Ub.openShop(bb, !1, "Prestige") : "Collections" === cb ? Ub.openShop(bb, !1, "Collections") : "Base Skins" === cb ? Ub.openShop(bb, !1, "Base Skins") : "Gauntlet" === cb ? Ub.openShop(bb, !1, "Gauntlet") : "Diamond Shop" === cb && Ub.openShop(bb, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  8947: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Wb,
      g: () => Tb
    });
    const kb = [{
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

    function Wb(bb) {
      let cb, sb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof bb) {
        if (!Number.isFinite(bb)) return "0";
        if (Math.abs(bb) < 100) {
          const cb = bb < 0 ? "-" : "",
            sb = Math.abs(bb);
          return sb >= 10 ? `${cb}${sb.toFixed(1).replace(/\.0$/,"")}` : `${cb}${sb.toFixed(2).replace(/\.?0+$/,"")}`
        }
        cb = BigInt(Math.floor(bb))
      } else cb = bb;
      const Wb = cb < 0n ? -cb : cb,
        ab = cb < 0n ? "-" : "",
        Tb = Wb.toString();
      if (Tb.length <= sb) return `${ab}${Tb}`;
      const Ub = 3 * Math.floor((Tb.length - 1) / 3);
      if (Ub < 3) return `${ab}${Tb}`;
      if (Ub > 3 * kb.length) {
        const bb = Tb[0],
          cb = Tb.slice(1, 3).replace(/0+$/, "");
        return `${ab}${cb?`${bb}.${cb}`:bb}e${Tb.length-1}`
      }
      const {
        threshold: Ib,
        suffix: Hb
      } = kb[kb.length - Ub / 3], fb = Wb / Ib, Mb = Number(1000n * (Wb % Ib) / Ib), Xb = Number(fb) + Mb / 1e3;
      let nb;
      return nb = Xb >= 100 ? Math.floor(Xb).toString() : Xb >= 10 ? Xb.toFixed(1).replace(/\.0$/, "") : Xb.toFixed(2).replace(/\.?0+$/, ""), `${ab}${nb}${Hb}`
    }
    const ab = kb.map((bb => {
      let {
        threshold: cb,
        suffix: sb
      } = bb;
      return {
        threshold: Number(cb),
        suffix: sb
      }
    })).filter((bb => {
      let {
        threshold: cb
      } = bb;
      return Number.isFinite(cb)
    }));

    function Tb(bb) {
      const cb = Math.abs(bb),
        sb = bb < 0 ? "-" : "";
      for (const {
          threshold: kb,
          suffix: Wb
        }
        of ab)
        if (cb >= kb) {
          const bb = cb / kb;
          if (bb >= 1e3) return `${sb}${cb.toExponential(2).replace("e+","e")}`;
          let ab;
          return ab = bb >= 100 ? Math.floor(bb).toString() : bb >= 10 ? bb.toFixed(1).replace(/\.0$/, "") : bb.toFixed(2).replace(/\.?0+$/, ""), `${sb}${ab}${Wb}`
        } return `${sb}${cb}`
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);