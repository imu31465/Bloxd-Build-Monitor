export const id = 24;
export const ids = [24];
export const modules = {
  37761: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      default: () => sc
    });
    var Vc = nc(8203);
    const Ic = 1e3 / 3;

    function rB(cB, Bc, nc) {
      if ("parenthetical-seconds" === Bc) return ` (${cB}s)`;
      const Vc = `${Math.floor(cB/60)}:${(cB%60).toString().padStart(2,"0")}`;
      return nc ? `${nc}${Vc}` : Vc
    }

    function uc(cB, Bc, nc, Ic, rB) {
      var uc;
      const sc = {
        ...Ic.baseNametag
      };
      sc.content = [...null !== (uc = Ic.baseNametag.content) && void 0 !== uc ? uc : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,Vc.b)(rB)}`
      }], cB.setOtherEntitySetting(Bc, nc, "nameTagInfo", sc)
    }
    const sc = function(cB, Bc, nc, Vc) {
      let sc, {
        localPlayerId: Mc
      } = Vc;
      const Pc = new Map,
        qB = new Map;
      let Oc = 0,
        Tc = 0;
      return {
        onCreate: cB => {
          sc = cB
        },
        cn: cB => {
          const Bc = Date.now();
          for (const [Vc, Ic] of Pc) {
            const cB = Math.floor((Bc - Ic.startTime) / 1e3),
              uc = Math.max(0, Ic.remainingSeconds - cB);
            if (uc === Ic.lastRenderedSecond) continue;
            Ic.lastRenderedSecond = uc;
            const qB = {
                str: rB(uc, Ic.format, Ic.prefix),
                style: Ic.style
              },
              Oc = {
                ...Ic.baseNametag
              };
            var nc;
            if ("content" === Ic.location) Oc.content = [...null !== (nc = Ic.baseNametag.content) && void 0 !== nc ? nc : [], qB];
            else Oc.subtitle = [qB];
            sc.setOtherEntitySetting(Mc, Vc, "nameTagInfo", Oc), uc <= 0 && Pc.delete(Vc)
          }
          if (qB.size > 0 && Bc - Oc >= Ic) {
            Oc = Bc, Tc = (Tc + 1) % 3;
            let cB = 0;
            for (const [nc, Vc] of qB) {
              if (cB++ % 3 !== Tc) continue;
              const Ic = Math.floor((Bc - Vc.startTime) / 1e3);
              if (Ic === Vc.lastRenderedSecond) continue;
              Vc.lastRenderedSecond = Ic;
              const rB = Vc.accumulatedIncome + Vc.incomePerSecond * BigInt(Ic);
              uc(sc, Mc, nc, Vc, rB)
            }
          }
        },
        onReceivedMessageFromServer: (cB, Bc) => {
          if ("startCountdown" === cB) Pc.set(Bc.eId, {
            baseNametag: Bc.baseNametag,
            remainingSeconds: Bc.remainingSeconds,
            startTime: Date.now(),
            format: Bc.format,
            location: Bc.location,
            prefix: Bc.prefix,
            style: Bc.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === cB) Pc.delete(Bc.eId);
          else if ("startIncomeTicking" === cB) {
            const cB = {
              baseNametag: Bc.baseNametag,
              accumulatedIncome: BigInt(Bc.accumulatedIncome),
              incomePerSecond: BigInt(Bc.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            qB.set(Bc.eId, cB), uc(sc, Mc, Bc.eId, cB, cB.accumulatedIncome)
          } else "stopIncomeTicking" === cB && qB.delete(Bc.eId) && sc.setOtherEntitySetting(Mc, Bc.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (cB, Bc, nc, Vc, Ic, rB) => {
          if (rB && "Mesh" === sc.getEntityType(rB)) {
            const Bc = sc.getEntityName(rB);
            "Upgrades" === Bc ? sc.openShop(cB, !1, "Upgrades") : "Items" === Bc ? sc.openShop(cB, !1, "Items") : "Prestige" === Bc ? sc.openShop(cB, !1, "Prestige") : "Collections" === Bc ? sc.openShop(cB, !1, "Collections") : "Base Skins" === Bc ? sc.openShop(cB, !1, "Base Skins") : "Gauntlet" === Bc ? sc.openShop(cB, !1, "Gauntlet") : "Diamond Shop" === Bc && sc.openShop(cB, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  8203: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Ic,
      e: () => uc
    });
    const Vc = [{
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

    function Ic(cB) {
      let Bc, nc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof cB) {
        if (!Number.isFinite(cB)) return "0";
        if (Math.abs(cB) < 100) {
          const Bc = cB < 0 ? "-" : "",
            nc = Math.abs(cB);
          return nc >= 10 ? `${Bc}${nc.toFixed(1).replace(/\.0$/,"")}` : `${Bc}${nc.toFixed(2).replace(/\.?0+$/,"")}`
        }
        Bc = BigInt(Math.floor(cB))
      } else Bc = cB;
      const Ic = Bc < 0n ? -Bc : Bc,
        rB = Bc < 0n ? "-" : "",
        uc = Ic.toString();
      if (uc.length <= nc) return `${rB}${uc}`;
      const sc = 3 * Math.floor((uc.length - 1) / 3);
      if (sc < 3) return `${rB}${uc}`;
      if (sc > 3 * Vc.length) {
        const cB = uc[0],
          Bc = uc.slice(1, 3).replace(/0+$/, "");
        return `${rB}${Bc?`${cB}.${Bc}`:cB}e${uc.length-1}`
      }
      const {
        threshold: Mc,
        suffix: Pc
      } = Vc[Vc.length - sc / 3], qB = Ic / Mc, Oc = Number(1000n * (Ic % Mc) / Mc), Tc = Number(qB) + Oc / 1e3;
      let fc;
      return fc = Tc >= 100 ? Math.floor(Tc).toString() : Tc >= 10 ? Tc.toFixed(1).replace(/\.0$/, "") : Tc.toFixed(2).replace(/\.?0+$/, ""), `${rB}${fc}${Pc}`
    }
    const rB = Vc.map((cB => {
      let {
        threshold: Bc,
        suffix: nc
      } = cB;
      return {
        threshold: Number(Bc),
        suffix: nc
      }
    })).filter((cB => {
      let {
        threshold: Bc
      } = cB;
      return Number.isFinite(Bc)
    }));

    function uc(cB) {
      const Bc = Math.abs(cB),
        nc = cB < 0 ? "-" : "";
      for (const {
          threshold: Vc,
          suffix: Ic
        }
        of rB)
        if (Bc >= Vc) {
          const cB = Bc / Vc;
          if (cB >= 1e3) return `${nc}${Bc.toExponential(2).replace("e+","e")}`;
          let rB;
          return rB = cB >= 100 ? Math.floor(cB).toString() : cB >= 10 ? cB.toFixed(1).replace(/\.0$/, "") : cB.toFixed(2).replace(/\.?0+$/, ""), `${nc}${rB}${Ic}`
        } return `${nc}${Bc}`
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);