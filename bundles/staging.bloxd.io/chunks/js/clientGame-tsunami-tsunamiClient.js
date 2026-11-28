export const id = 32;
export const ids = [32];
export const modules = {
  41019: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => gb
    });
    var eb = Mb(35351);
    const Hb = 1e3 / 3;

    function pb(bb, wb, Mb) {
      if ("parenthetical-seconds" === wb) return ` (${bb}s)`;
      const eb = `${Math.floor(bb/60)}:${(bb%60).toString().padStart(2,"0")}`;
      return Mb ? `${Mb}${eb}` : eb
    }

    function Vb(bb, wb, Mb, Hb, pb) {
      var Vb;
      const gb = {
        ...Hb.baseNametag
      };
      gb.content = [...null !== (Vb = Hb.baseNametag.content) && void 0 !== Vb ? Vb : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,eb.b)(pb)}`
      }], bb.setOtherEntitySetting(wb, Mb, "nameTagInfo", gb)
    }
    const gb = function(bb, wb, Mb, eb) {
      let gb, {
        localPlayerId: lb
      } = eb;
      const Lb = new Map,
        Ib = new Map;
      let Ob = 0,
        Ub = 0;
      return {
        onCreate: bb => {
          gb = bb
        },
        sO: bb => {
          const wb = Date.now();
          for (const [eb, Hb] of Lb) {
            const bb = Math.floor((wb - Hb.startTime) / 1e3),
              Vb = Math.max(0, Hb.remainingSeconds - bb);
            if (Vb === Hb.lastRenderedSecond) continue;
            Hb.lastRenderedSecond = Vb;
            const Ib = {
                str: pb(Vb, Hb.format, Hb.prefix),
                style: Hb.style
              },
              Ob = {
                ...Hb.baseNametag
              };
            var Mb;
            if ("content" === Hb.location) Ob.content = [...null !== (Mb = Hb.baseNametag.content) && void 0 !== Mb ? Mb : [], Ib];
            else Ob.subtitle = [Ib];
            gb.setOtherEntitySetting(lb, eb, "nameTagInfo", Ob), Vb <= 0 && Lb.delete(eb)
          }
          if (Ib.size > 0 && wb - Ob >= Hb) {
            Ob = wb, Ub = (Ub + 1) % 3;
            let bb = 0;
            for (const [Mb, eb] of Ib) {
              if (bb++ % 3 !== Ub) continue;
              const Hb = Math.floor((wb - eb.startTime) / 1e3);
              if (Hb === eb.lastRenderedSecond) continue;
              eb.lastRenderedSecond = Hb;
              const pb = eb.accumulatedIncome + eb.incomePerSecond * BigInt(Hb);
              Vb(gb, lb, Mb, eb, pb)
            }
          }
        },
        onReceivedMessageFromServer: (bb, wb) => {
          if ("startCountdown" === bb) Lb.set(wb.eId, {
            baseNametag: wb.baseNametag,
            remainingSeconds: wb.remainingSeconds,
            startTime: Date.now(),
            format: wb.format,
            location: wb.location,
            prefix: wb.prefix,
            style: wb.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === bb) Lb.delete(wb.eId);
          else if ("startIncomeTicking" === bb) {
            const bb = {
              baseNametag: wb.baseNametag,
              accumulatedIncome: BigInt(wb.accumulatedIncome),
              incomePerSecond: BigInt(wb.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            Ib.set(wb.eId, bb), Vb(gb, lb, wb.eId, bb, bb.accumulatedIncome)
          } else "stopIncomeTicking" === bb && Ib.delete(wb.eId) && gb.setOtherEntitySetting(lb, wb.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (bb, wb, Mb, eb, Hb, pb) => {
          if (pb && "Mesh" === gb.getEntityType(pb)) {
            const wb = gb.getEntityName(pb);
            "Upgrades" === wb ? gb.openShop(bb, !1, "Upgrades") : "Items" === wb ? gb.openShop(bb, !1, "Items") : "Prestige" === wb ? gb.openShop(bb, !1, "Prestige") : "Collections" === wb ? gb.openShop(bb, !1, "Collections") : "Base Skins" === wb ? gb.openShop(bb, !1, "Base Skins") : "Gauntlet" === wb ? gb.openShop(bb, !1, "Gauntlet") : "Diamond Shop" === wb && gb.openShop(bb, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  35351: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb,
      d: () => Vb
    });
    const eb = [{
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

    function Hb(bb) {
      let wb, Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof bb) {
        if (!Number.isFinite(bb)) return "0";
        if (Math.abs(bb) < 100) {
          const wb = bb < 0 ? "-" : "",
            Mb = Math.abs(bb);
          return Mb >= 10 ? `${wb}${Mb.toFixed(1).replace(/\.0$/,"")}` : `${wb}${Mb.toFixed(2).replace(/\.?0+$/,"")}`
        }
        wb = BigInt(Math.floor(bb))
      } else wb = bb;
      const Hb = wb < 0n ? -wb : wb,
        pb = wb < 0n ? "-" : "",
        Vb = Hb.toString();
      if (Vb.length <= Mb) return `${pb}${Vb}`;
      const gb = 3 * Math.floor((Vb.length - 1) / 3);
      if (gb < 3) return `${pb}${Vb}`;
      if (gb > 3 * eb.length) {
        const bb = Vb[0],
          wb = Vb.slice(1, 3).replace(/0+$/, "");
        return `${pb}${wb?`${bb}.${wb}`:bb}e${Vb.length-1}`
      }
      const {
        threshold: lb,
        suffix: Lb
      } = eb[eb.length - gb / 3], Ib = Hb / lb, Ob = Number(1000n * (Hb % lb) / lb), Ub = Number(Ib) + Ob / 1e3;
      let tb;
      return tb = Ub >= 100 ? Math.floor(Ub).toString() : Ub >= 10 ? Ub.toFixed(1).replace(/\.0$/, "") : Ub.toFixed(2).replace(/\.?0+$/, ""), `${pb}${tb}${Lb}`
    }
    const pb = eb.map((bb => {
      let {
        threshold: wb,
        suffix: Mb
      } = bb;
      return {
        threshold: Number(wb),
        suffix: Mb
      }
    })).filter((bb => {
      let {
        threshold: wb
      } = bb;
      return Number.isFinite(wb)
    }));

    function Vb(bb) {
      const wb = Math.abs(bb),
        Mb = bb < 0 ? "-" : "";
      for (const {
          threshold: eb,
          suffix: Hb
        }
        of pb)
        if (wb >= eb) {
          const bb = wb / eb;
          if (bb >= 1e3) return `${Mb}${wb.toExponential(2).replace("e+","e")}`;
          let pb;
          return pb = bb >= 100 ? Math.floor(bb).toString() : bb >= 10 ? bb.toFixed(1).replace(/\.0$/, "") : bb.toFixed(2).replace(/\.?0+$/, ""), `${Mb}${pb}${Hb}`
        } return `${Mb}${wb}`
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);