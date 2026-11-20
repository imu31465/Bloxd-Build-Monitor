export const id = 26;
export const ids = [26];
export const modules = {
  39156: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => Lb
    });
    var Bb = hb(9115);
    const Ob = 1e3 / 3;

    function Gb(bb, ub, hb) {
      if ("parenthetical-seconds" === ub) return ` (${bb}s)`;
      const Bb = `${Math.floor(bb/60)}:${(bb%60).toString().padStart(2,"0")}`;
      return hb ? `${hb}${Bb}` : Bb
    }

    function Ub(bb, ub, hb, Ob, Gb) {
      var Ub;
      const Lb = {
        ...Ob.baseNametag
      };
      Lb.content = [...null !== (Ub = Ob.baseNametag.content) && void 0 !== Ub ? Ub : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,Bb.b)(Gb)}`
      }], bb.setOtherEntitySetting(ub, hb, "nameTagInfo", Lb)
    }
    const Lb = function(bb, ub, hb, Bb) {
      let Lb, {
        localPlayerId: Yb
      } = Bb;
      const Sb = new Map,
        ab = new Map;
      let Hb = 0,
        wb = 0;
      return {
        onCreate: bb => {
          Lb = bb
        },
        gH: bb => {
          const ub = Date.now();
          for (const [Bb, Ob] of Sb) {
            const bb = Math.floor((ub - Ob.startTime) / 1e3),
              Ub = Math.max(0, Ob.remainingSeconds - bb);
            if (Ub === Ob.lastRenderedSecond) continue;
            Ob.lastRenderedSecond = Ub;
            const ab = {
                str: Gb(Ub, Ob.format, Ob.prefix),
                style: Ob.style
              },
              Hb = {
                ...Ob.baseNametag
              };
            var hb;
            if ("content" === Ob.location) Hb.content = [...null !== (hb = Ob.baseNametag.content) && void 0 !== hb ? hb : [], ab];
            else Hb.subtitle = [ab];
            Lb.setOtherEntitySetting(Yb, Bb, "nameTagInfo", Hb), Ub <= 0 && Sb.delete(Bb)
          }
          if (ab.size > 0 && ub - Hb >= Ob) {
            Hb = ub, wb = (wb + 1) % 3;
            let bb = 0;
            for (const [hb, Bb] of ab) {
              if (bb++ % 3 !== wb) continue;
              const Ob = Math.floor((ub - Bb.startTime) / 1e3);
              if (Ob === Bb.lastRenderedSecond) continue;
              Bb.lastRenderedSecond = Ob;
              const Gb = Bb.accumulatedIncome + Bb.incomePerSecond * BigInt(Ob);
              Ub(Lb, Yb, hb, Bb, Gb)
            }
          }
        },
        onReceivedMessageFromServer: (bb, ub) => {
          if ("startCountdown" === bb) Sb.set(ub.eId, {
            baseNametag: ub.baseNametag,
            remainingSeconds: ub.remainingSeconds,
            startTime: Date.now(),
            format: ub.format,
            location: ub.location,
            prefix: ub.prefix,
            style: ub.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === bb) Sb.delete(ub.eId);
          else if ("startIncomeTicking" === bb) {
            const bb = {
              baseNametag: ub.baseNametag,
              accumulatedIncome: BigInt(ub.accumulatedIncome),
              incomePerSecond: BigInt(ub.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            ab.set(ub.eId, bb), Ub(Lb, Yb, ub.eId, bb, bb.accumulatedIncome)
          } else "stopIncomeTicking" === bb && ab.delete(ub.eId) && Lb.setOtherEntitySetting(Yb, ub.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (bb, ub, hb, Bb, Ob, Gb) => {
          if (Gb && "Mesh" === Lb.getEntityType(Gb)) {
            const ub = Lb.getEntityName(Gb);
            "Upgrades" === ub ? Lb.openShop(bb, !1, "Upgrades") : "Items" === ub ? Lb.openShop(bb, !1, "Items") : "Prestige" === ub ? Lb.openShop(bb, !1, "Prestige") : "Collections" === ub ? Lb.openShop(bb, !1, "Collections") : "Base Skins" === ub ? Lb.openShop(bb, !1, "Base Skins") : "Gauntlet" === ub ? Lb.openShop(bb, !1, "Gauntlet") : "Diamond Shop" === ub && Lb.openShop(bb, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  9115: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob,
      c: () => Ub
    });
    const Bb = [{
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

    function Ob(bb) {
      let ub, hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof bb) {
        if (!Number.isFinite(bb)) return "0";
        if (Math.abs(bb) < 100) {
          const ub = bb < 0 ? "-" : "",
            hb = Math.abs(bb);
          return hb >= 10 ? `${ub}${hb.toFixed(1).replace(/\.0$/,"")}` : `${ub}${hb.toFixed(2).replace(/\.?0+$/,"")}`
        }
        ub = BigInt(Math.floor(bb))
      } else ub = bb;
      const Ob = ub < 0n ? -ub : ub,
        Gb = ub < 0n ? "-" : "",
        Ub = Ob.toString();
      if (Ub.length <= hb) return `${Gb}${Ub}`;
      const Lb = 3 * Math.floor((Ub.length - 1) / 3);
      if (Lb < 3) return `${Gb}${Ub}`;
      if (Lb > 3 * Bb.length) {
        const bb = Ub[0],
          ub = Ub.slice(1, 3).replace(/0+$/, "");
        return `${Gb}${ub?`${bb}.${ub}`:bb}e${Ub.length-1}`
      }
      const {
        threshold: Yb,
        suffix: Sb
      } = Bb[Bb.length - Lb / 3], ab = Ob / Yb, Hb = Number(1000n * (Ob % Yb) / Yb), wb = Number(ab) + Hb / 1e3;
      let Zb;
      return Zb = wb >= 100 ? Math.floor(wb).toString() : wb >= 10 ? wb.toFixed(1).replace(/\.0$/, "") : wb.toFixed(2).replace(/\.?0+$/, ""), `${Gb}${Zb}${Sb}`
    }
    const Gb = Bb.map((bb => {
      let {
        threshold: ub,
        suffix: hb
      } = bb;
      return {
        threshold: Number(ub),
        suffix: hb
      }
    })).filter((bb => {
      let {
        threshold: ub
      } = bb;
      return Number.isFinite(ub)
    }));

    function Ub(bb) {
      const ub = Math.abs(bb),
        hb = bb < 0 ? "-" : "";
      for (const {
          threshold: Bb,
          suffix: Ob
        }
        of Gb)
        if (ub >= Bb) {
          const bb = ub / Bb;
          if (bb >= 1e3) return `${hb}${ub.toExponential(2).replace("e+","e")}`;
          let Gb;
          return Gb = bb >= 100 ? Math.floor(bb).toString() : bb >= 10 ? bb.toFixed(1).replace(/\.0$/, "") : bb.toFixed(2).replace(/\.?0+$/, ""), `${hb}${Gb}${Ob}`
        } return `${hb}${ub}`
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);