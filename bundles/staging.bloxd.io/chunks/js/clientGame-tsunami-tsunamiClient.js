export const id = 26;
export const ids = [26];
export const modules = {
  38780: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => Yb
    });
    var Ab = Ub(8930);
    const Mb = 1e3 / 3;

    function Tb(bb, ab, Ub) {
      if ("parenthetical-seconds" === ab) return ` (${bb}s)`;
      const Ab = `${Math.floor(bb/60)}:${(bb%60).toString().padStart(2,"0")}`;
      return Ub ? `${Ub}${Ab}` : Ab
    }

    function Eb(bb, ab, Ub, Mb, Tb) {
      var Eb;
      const Yb = {
        ...Mb.baseNametag
      };
      Yb.content = [...null !== (Eb = Mb.baseNametag.content) && void 0 !== Eb ? Eb : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,Ab.d)(Tb)}`
      }], bb.setOtherEntitySetting(ab, Ub, "nameTagInfo", Yb)
    }
    const Yb = function(bb, ab, Ub, Ab) {
      let Yb, {
        localPlayerId: Bb
      } = Ab;
      const eb = new Map,
        vb = new Map;
      let Lb = 0,
        Pb = 0;
      return {
        onCreate: bb => {
          Yb = bb
        },
        qL: bb => {
          const ab = Date.now();
          for (const [Ab, Mb] of eb) {
            const bb = Math.floor((ab - Mb.startTime) / 1e3),
              Eb = Math.max(0, Mb.remainingSeconds - bb);
            if (Eb === Mb.lastRenderedSecond) continue;
            Mb.lastRenderedSecond = Eb;
            const vb = {
                str: Tb(Eb, Mb.format, Mb.prefix),
                style: Mb.style
              },
              Lb = {
                ...Mb.baseNametag
              };
            var Ub;
            if ("content" === Mb.location) Lb.content = [...null !== (Ub = Mb.baseNametag.content) && void 0 !== Ub ? Ub : [], vb];
            else Lb.subtitle = [vb];
            Yb.setOtherEntitySetting(Bb, Ab, "nameTagInfo", Lb), Eb <= 0 && eb.delete(Ab)
          }
          if (vb.size > 0 && ab - Lb >= Mb) {
            Lb = ab, Pb = (Pb + 1) % 3;
            let bb = 0;
            for (const [Ub, Ab] of vb) {
              if (bb++ % 3 !== Pb) continue;
              const Mb = Math.floor((ab - Ab.startTime) / 1e3);
              if (Mb === Ab.lastRenderedSecond) continue;
              Ab.lastRenderedSecond = Mb;
              const Tb = Ab.accumulatedIncome + Ab.incomePerSecond * BigInt(Mb);
              Eb(Yb, Bb, Ub, Ab, Tb)
            }
          }
        },
        onReceivedMessageFromServer: (bb, ab) => {
          if ("startCountdown" === bb) eb.set(ab.eId, {
            baseNametag: ab.baseNametag,
            remainingSeconds: ab.remainingSeconds,
            startTime: Date.now(),
            format: ab.format,
            location: ab.location,
            prefix: ab.prefix,
            style: ab.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === bb) eb.delete(ab.eId);
          else if ("startIncomeTicking" === bb) {
            const bb = {
              baseNametag: ab.baseNametag,
              accumulatedIncome: BigInt(ab.accumulatedIncome),
              incomePerSecond: BigInt(ab.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            vb.set(ab.eId, bb), Eb(Yb, Bb, ab.eId, bb, bb.accumulatedIncome)
          } else "stopIncomeTicking" === bb && vb.delete(ab.eId) && Yb.setOtherEntitySetting(Bb, ab.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (bb, ab, Ub, Ab, Mb, Tb) => {
          if (Tb && "Mesh" === Yb.getEntityType(Tb)) {
            const ab = Yb.getEntityName(Tb);
            "Upgrades" === ab ? Yb.openShop(bb, !1, "Upgrades") : "Items" === ab ? Yb.openShop(bb, !1, "Items") : "Prestige" === ab ? Yb.openShop(bb, !1, "Prestige") : "Collections" === ab ? Yb.openShop(bb, !1, "Collections") : "Base Skins" === ab ? Yb.openShop(bb, !1, "Base Skins") : "Gauntlet" === ab ? Yb.openShop(bb, !1, "Gauntlet") : "Diamond Shop" === ab && Yb.openShop(bb, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  8930: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Mb,
      g: () => Eb
    });
    const Ab = [{
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

    function Mb(bb) {
      let ab, Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof bb) {
        if (!Number.isFinite(bb)) return "0";
        if (Math.abs(bb) < 100) {
          const ab = bb < 0 ? "-" : "",
            Ub = Math.abs(bb);
          return Ub >= 10 ? `${ab}${Ub.toFixed(1).replace(/\.0$/,"")}` : `${ab}${Ub.toFixed(2).replace(/\.?0+$/,"")}`
        }
        ab = BigInt(Math.floor(bb))
      } else ab = bb;
      const Mb = ab < 0n ? -ab : ab,
        Tb = ab < 0n ? "-" : "",
        Eb = Mb.toString();
      if (Eb.length <= Ub) return `${Tb}${Eb}`;
      const Yb = 3 * Math.floor((Eb.length - 1) / 3);
      if (Yb < 3) return `${Tb}${Eb}`;
      if (Yb > 3 * Ab.length) {
        const bb = Eb[0],
          ab = Eb.slice(1, 3).replace(/0+$/, "");
        return `${Tb}${ab?`${bb}.${ab}`:bb}e${Eb.length-1}`
      }
      const {
        threshold: Bb,
        suffix: eb
      } = Ab[Ab.length - Yb / 3], vb = Mb / Bb, Lb = Number(1000n * (Mb % Bb) / Bb), Pb = Number(vb) + Lb / 1e3;
      let Xb;
      return Xb = Pb >= 100 ? Math.floor(Pb).toString() : Pb >= 10 ? Pb.toFixed(1).replace(/\.0$/, "") : Pb.toFixed(2).replace(/\.?0+$/, ""), `${Tb}${Xb}${eb}`
    }
    const Tb = Ab.map((bb => {
      let {
        threshold: ab,
        suffix: Ub
      } = bb;
      return {
        threshold: Number(ab),
        suffix: Ub
      }
    })).filter((bb => {
      let {
        threshold: ab
      } = bb;
      return Number.isFinite(ab)
    }));

    function Eb(bb) {
      const ab = Math.abs(bb),
        Ub = bb < 0 ? "-" : "";
      for (const {
          threshold: Ab,
          suffix: Mb
        }
        of Tb)
        if (ab >= Ab) {
          const bb = ab / Ab;
          if (bb >= 1e3) return `${Ub}${ab.toExponential(2).replace("e+","e")}`;
          let Tb;
          return Tb = bb >= 100 ? Math.floor(bb).toString() : bb >= 10 ? bb.toFixed(1).replace(/\.0$/, "") : bb.toFixed(2).replace(/\.?0+$/, ""), `${Ub}${Tb}${Mb}`
        } return `${Ub}${ab}`
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);