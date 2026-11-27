export const id = 32;
export const ids = [32];
export const modules = {
  41240: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => Ir
    });
    var Zr = Qr(35488);
    const Wr = 1e3 / 3;

    function ar(rr, Sr, Qr) {
      if ("parenthetical-seconds" === Sr) return ` (${rr}s)`;
      const Zr = `${Math.floor(rr/60)}:${(rr%60).toString().padStart(2,"0")}`;
      return Qr ? `${Qr}${Zr}` : Zr
    }

    function jr(rr, Sr, Qr, Wr, ar) {
      var jr;
      const Ir = {
        ...Wr.baseNametag
      };
      Ir.content = [...null !== (jr = Wr.baseNametag.content) && void 0 !== jr ? jr : [], {
        str: " "
      }, {
        icon: "Gold Coin"
      }, {
        str: `: ${(0,Zr.e)(ar)}`
      }], rr.setOtherEntitySetting(Sr, Qr, "nameTagInfo", Ir)
    }
    const Ir = function(rr, Sr, Qr, Zr) {
      let Ir, {
        localPlayerId: fr
      } = Zr;
      const Er = new Map,
        pr = new Map;
      let xr = 0,
        mr = 0;
      return {
        onCreate: rr => {
          Ir = rr
        },
        lx: rr => {
          const Sr = Date.now();
          for (const [Zr, Wr] of Er) {
            const rr = Math.floor((Sr - Wr.startTime) / 1e3),
              jr = Math.max(0, Wr.remainingSeconds - rr);
            if (jr === Wr.lastRenderedSecond) continue;
            Wr.lastRenderedSecond = jr;
            const pr = {
                str: ar(jr, Wr.format, Wr.prefix),
                style: Wr.style
              },
              xr = {
                ...Wr.baseNametag
              };
            var Qr;
            if ("content" === Wr.location) xr.content = [...null !== (Qr = Wr.baseNametag.content) && void 0 !== Qr ? Qr : [], pr];
            else xr.subtitle = [pr];
            Ir.setOtherEntitySetting(fr, Zr, "nameTagInfo", xr), jr <= 0 && Er.delete(Zr)
          }
          if (pr.size > 0 && Sr - xr >= Wr) {
            xr = Sr, mr = (mr + 1) % 3;
            let rr = 0;
            for (const [Qr, Zr] of pr) {
              if (rr++ % 3 !== mr) continue;
              const Wr = Math.floor((Sr - Zr.startTime) / 1e3);
              if (Wr === Zr.lastRenderedSecond) continue;
              Zr.lastRenderedSecond = Wr;
              const ar = Zr.accumulatedIncome + Zr.incomePerSecond * BigInt(Wr);
              jr(Ir, fr, Qr, Zr, ar)
            }
          }
        },
        onReceivedMessageFromServer: (rr, Sr) => {
          if ("startCountdown" === rr) Er.set(Sr.eId, {
            baseNametag: Sr.baseNametag,
            remainingSeconds: Sr.remainingSeconds,
            startTime: Date.now(),
            format: Sr.format,
            location: Sr.location,
            prefix: Sr.prefix,
            style: Sr.style,
            lastRenderedSecond: -1
          });
          else if ("stopCountdown" === rr) Er.delete(Sr.eId);
          else if ("startIncomeTicking" === rr) {
            const rr = {
              baseNametag: Sr.baseNametag,
              accumulatedIncome: BigInt(Sr.accumulatedIncome),
              incomePerSecond: BigInt(Sr.incomePerSecond),
              startTime: Date.now(),
              lastRenderedSecond: -1
            };
            pr.set(Sr.eId, rr), jr(Ir, fr, Sr.eId, rr, rr.accumulatedIncome)
          } else "stopIncomeTicking" === rr && pr.delete(Sr.eId) && Ir.setOtherEntitySetting(fr, Sr.eId, "nameTagInfo", {
            content: []
          })
        },
        onPlayerAltAction: (rr, Sr, Qr, Zr, Wr, ar) => {
          if (ar && "Mesh" === Ir.getEntityType(ar)) {
            const Sr = Ir.getEntityName(ar);
            "Upgrades" === Sr ? Ir.openShop(rr, !1, "Upgrades") : "Items" === Sr ? Ir.openShop(rr, !1, "Items") : "Prestige" === Sr ? Ir.openShop(rr, !1, "Prestige") : "Collections" === Sr ? Ir.openShop(rr, !1, "Collections") : "Base Skins" === Sr ? Ir.openShop(rr, !1, "Base Skins") : "Gauntlet" === Sr ? Ir.openShop(rr, !1, "Gauntlet") : "Diamond Shop" === Sr && Ir.openShop(rr, !1, "Diamond Shop")
          }
        }
      }
    }
  },
  35488: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Wr,
      i: () => jr
    });
    const Zr = [{
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

    function Wr(rr) {
      let Sr, Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof rr) {
        if (!Number.isFinite(rr)) return "0";
        if (Math.abs(rr) < 100) {
          const Sr = rr < 0 ? "-" : "",
            Qr = Math.abs(rr);
          return Qr >= 10 ? `${Sr}${Qr.toFixed(1).replace(/\.0$/,"")}` : `${Sr}${Qr.toFixed(2).replace(/\.?0+$/,"")}`
        }
        Sr = BigInt(Math.floor(rr))
      } else Sr = rr;
      const Wr = Sr < 0n ? -Sr : Sr,
        ar = Sr < 0n ? "-" : "",
        jr = Wr.toString();
      if (jr.length <= Qr) return `${ar}${jr}`;
      const Ir = 3 * Math.floor((jr.length - 1) / 3);
      if (Ir < 3) return `${ar}${jr}`;
      if (Ir > 3 * Zr.length) {
        const rr = jr[0],
          Sr = jr.slice(1, 3).replace(/0+$/, "");
        return `${ar}${Sr?`${rr}.${Sr}`:rr}e${jr.length-1}`
      }
      const {
        threshold: fr,
        suffix: Er
      } = Zr[Zr.length - Ir / 3], pr = Wr / fr, xr = Number(1000n * (Wr % fr) / fr), mr = Number(pr) + xr / 1e3;
      let Nr;
      return Nr = mr >= 100 ? Math.floor(mr).toString() : mr >= 10 ? mr.toFixed(1).replace(/\.0$/, "") : mr.toFixed(2).replace(/\.?0+$/, ""), `${ar}${Nr}${Er}`
    }
    const ar = Zr.map((rr => {
      let {
        threshold: Sr,
        suffix: Qr
      } = rr;
      return {
        threshold: Number(Sr),
        suffix: Qr
      }
    })).filter((rr => {
      let {
        threshold: Sr
      } = rr;
      return Number.isFinite(Sr)
    }));

    function jr(rr) {
      const Sr = Math.abs(rr),
        Qr = rr < 0 ? "-" : "";
      for (const {
          threshold: Zr,
          suffix: Wr
        }
        of ar)
        if (Sr >= Zr) {
          const rr = Sr / Zr;
          if (rr >= 1e3) return `${Qr}${Sr.toExponential(2).replace("e+","e")}`;
          let ar;
          return ar = rr >= 100 ? Math.floor(rr).toString() : rr >= 10 ? rr.toFixed(1).replace(/\.0$/, "") : rr.toFixed(2).replace(/\.?0+$/, ""), `${Qr}${ar}${Wr}`
        } return `${Qr}${Sr}`
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);