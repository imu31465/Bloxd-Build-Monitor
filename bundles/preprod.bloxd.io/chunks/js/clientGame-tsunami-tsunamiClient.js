export const id = 26;
export const ids = [26];
export const modules = {
  38154: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => cb
    });
    var Uy = Wy(8431);
    const hy = 1e3 / 3;

    function fy(yb, bb, Wy) {
      if ("parenthetical-seconds" === bb) return ` (${yb}s)`;
      const Uy = `${Math.floor(yb/60)}:${(yb%60).toString().padStart(2,"0")}`;
      return Wy ? `${Wy}${Uy}` : Uy
    }

    function Zy(yb, bb, Wy, hy, fy) {
      var Zy;
      const cb = {
        ...hy.baseNametag
      };
      cb.content = [...null !== (Zy = hy.baseNametag.content) && void 0 !== Zy ? Zy : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,Uy.b)(fy)}`
      }], yb.setOtherEntitySetting(bb, Wy, "nameTagInfo", cb)
    }
    const cb = function(yb, bb, Wy, Uy) {
      let cb, {
        localPlayerId: Py
      } = Uy;
      const oy = new Map,
        By = new Map;
      let Ky = 0,
        ey = 0;
      return {
        onCreate: yb => {
          cb = yb
        },
        Zb: yb => {
          const bb = Date.now();
          for (const [Uy, hy] of oy) {
            const yb = Math.floor((bb - hy.startTime) / 1e3),
              Zy = Math.max(0, hy.remainingSeconds - yb);
            if (Zy === hy.lastRenderedSecond) continue;
            hy.lastRenderedSecond = Zy;
            const By = {
                str: fy(Zy, hy.format, hy.prefix),
                style: hy.style
              },
              Ky = {
                ...hy.baseNametag
              };
            var Wy;
            if ("content" === hy.location) Ky.content = [...null !== (Wy = hy.baseNametag.content) && void 0 !== Wy ? Wy : [], By];
            else Ky.subtitle = [By];
            cb.setOtherEntitySetting(Py, Uy, "nameTagInfo", Ky), Zy <= 0 && oy.delete(Uy)
          }
          if (By.size > 0 && bb - Ky >= hy) {
            Ky = bb, ey = (ey + 1) % 3;
            let yb = 0;
            for (const [Wy, Uy] of By) {
              if (yb++ % 3 !== ey) continue;
              const hy = Math.floor((bb - Uy.startTime) / 1e3);
              if (hy === Uy.lastRenderedSecond) continue;
              Uy.lastRenderedSecond = hy;
              const fy = Uy.accumulatedIncome + Uy.incomePerSecond * BigInt(hy);
              Zy(cb, Py, Wy, Uy, fy)
            }
          }
        },
        onReceivedMessageFromServer: (yb, bb) => {
          if ("startCountdown" === yb) oy.set(bb.eId, {
            baseNametag: bb.baseNametag,
            remainingSeconds: bb.remainingSeconds,
            startTime: Date.now(),
            format: bb.format,
            location: bb.location,
            prefix: bb.prefix,
            style: bb.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === yb) oy.delete(bb.eId);
          else if ("startIncomeTicking" === yb) {
            const yb = {
              baseNametag: bb.baseNametag,
              accumulatedIncome: BigInt(bb.accumulatedIncome),
              incomePerSecond: BigInt(bb.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            By.set(bb.eId, yb), Zy(cb, Py, bb.eId, yb, yb.accumulatedIncome)
          } else "stopIncomeTicking" === yb && By.delete(bb.eId) && cb.setOtherEntitySetting(Py, bb.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (yb, bb, Wy, Uy, hy, fy) => {
          if (fy && "Mesh" === cb.getEntityType(fy)) {
            const bb = cb.getEntityName(fy);
            "Upgrades" === bb ? cb.openShop(yb, !1, "Upgrades") : "Items" === bb ? cb.openShop(yb, !1, "Items") : "Prestige" === bb ? cb.openShop(yb, !1, "Prestige") : "Collections" === bb ? cb.openShop(yb, !1, "Collections") : "Base Skins" === bb ? cb.openShop(yb, !1, "Base Skins") : "Gauntlet" === bb ? cb.openShop(yb, !1, "Gauntlet") : "Diamond Shop" === bb && cb.openShop(yb, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  8431: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => hy,
      e: () => Zy
    });
    const Uy = [{
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

    function hy(yb) {
      let bb, Wy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof yb) {
        if (!Number.isFinite(yb)) return "0";
        if (Math.abs(yb) < 100) {
          const bb = yb < 0 ? "-" : "",
            Wy = Math.abs(yb);
          return Wy >= 10 ? `${bb}${Wy.toFixed(1).replace(/\.0$/,"")}` : `${bb}${Wy.toFixed(2).replace(/\.?0+$/,"")}`
        }
        bb = BigInt(Math.floor(yb))
      } else bb = yb;
      const hy = bb < 0n ? -bb : bb,
        fy = bb < 0n ? "-" : "",
        Zy = hy.toString();
      if (Zy.length <= Wy) return `${fy}${Zy}`;
      const cb = 3 * Math.floor((Zy.length - 1) / 3);
      if (cb < 3) return `${fy}${Zy}`;
      if (cb > 3 * Uy.length) {
        const yb = Zy[0],
          bb = Zy.slice(1, 3).replace(/0+$/, "");
        return `${fy}${bb?`${yb}.${bb}`:yb}e${Zy.length-1}`
      }
      const {
        threshold: Py,
        suffix: oy
      } = Uy[Uy.length - cb / 3], By = hy / Py, Ky = Number(1000n * (hy % Py) / Py), ey = Number(By) + Ky / 1e3;
      let qb;
      return qb = ey >= 100 ? Math.floor(ey).toString() : ey >= 10 ? ey.toFixed(1).replace(/\.0$/, "") : ey.toFixed(2).replace(/\.?0+$/, ""), `${fy}${qb}${oy}`
    }
    const fy = Uy.map((yb => {
      let {
        threshold: bb,
        suffix: Wy
      } = yb;
      return {
        threshold: Number(bb),
        suffix: Wy
      }
    })).filter((yb => {
      let {
        threshold: bb
      } = yb;
      return Number.isFinite(bb)
    }));

    function Zy(yb) {
      const bb = Math.abs(yb),
        Wy = yb < 0 ? "-" : "";
      for (const {
          threshold: Uy,
          suffix: hy
        }
        of fy)
        if (bb >= Uy) {
          const yb = bb / Uy;
          if (yb >= 1e3) return `${Wy}${bb.toExponential(2).replace("e+","e")}`;
          let fy;
          return fy = yb >= 100 ? Math.floor(yb).toString() : yb >= 10 ? yb.toFixed(1).replace(/\.0$/, "") : yb.toFixed(2).replace(/\.?0+$/, ""), `${Wy}${fy}${hy}`
        } return `${Wy}${bb}`
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);