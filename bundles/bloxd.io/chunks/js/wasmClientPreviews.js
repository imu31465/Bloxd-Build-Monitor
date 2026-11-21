export const id = 57;
export const ids = [57];
export const modules = {
  38776: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Nd,
      c: () => Wd
    });
    const pd = new WeakMap;

    function Nd(dd, Jd) {
      return pd.set(dd, Jd), dd
    }

    function Wd(dd) {
      var Jd;
      return null !== (Jd = pd.get(dd)) && void 0 !== Jd ? Jd : null
    }
  },
  38794: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Zd
    });
    var pd = kd(1245);

    function Nd(dd) {
      const Jd = /(\d*\.?\d+)px/.exec(dd);
      return Jd ? Number(Jd[1]) : null
    }

    function Wd(dd) {
      return dd.split(/[\s,]+/).pop()
    }
    let Pd = !1;
    const Zd = {
      debug: !1,
      align: "center",
      vAlign: "middle",
      fontSize: 14,
      fontWeight: "",
      fontStyle: "",
      fontVariant: "",
      font: "Arial",
      lineHeight: null,
      justify: !1,
      drawText: function(dd, Jd, pd, Zd, gd, Cd) {
        if (gd <= 0 || Cd <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: Kd,
          fontVariant: od,
          fontWeight: ld,
          fontSize: Qd,
          font: Ld
        } = this, Od = [Kd, od, ld, `${Qd}px`, Ld].filter(Boolean).join(" "), ed = [
          [ld, `${Qd}px`, Wd(Ld)].filter(Boolean).join(" "), `${Qd}px sans-serif`
        ], Rd = dd.font, Id = function(dd, Jd, kd) {
          for (const pd of Jd) {
            dd.font = pd;
            const Jd = Nd(dd.font),
              Pd = Wd(pd);
            if (null !== Jd && Math.abs(Jd - kd) <= .5 && dd.font.toLowerCase().includes(Pd.toLowerCase())) return pd
          }
          return null
        }(dd, [Od, ...ed], Qd);
        Id !== Od && function(dd, Jd, pd) {
          Pd || (Pd = !0, Promise.resolve().then((() => kd(1078))).then((kd => {
            let {
              ZO: Nd
            } = kd;
            Nd(new Error("A canvas didn't take canvasTxt's font"), {
              font: dd,
              qQ: Jd,
              drawnWith: null !== pd && void 0 !== pd ? pd : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(Od, Rd, Id);
        const Gd = Nd(dd.font);
        if (null === Id && null !== Gd && Gd > 0) {
          const kd = Qd / Gd;
          dd.save();
          try {
            return dd.scale(kd, kd), {
              height: this.drawLines(dd, Jd, pd / kd, Zd / kd, gd / kd, Cd / kd, Gd).height * kd
            }
          } finally {
            dd.restore()
          }
        }
        return this.drawLines(dd, Jd, pd, Zd, gd, Cd, Qd)
      },
      drawLines: function(dd, Jd, kd, Nd, Wd, Pd, Zd) {
        const gd = kd + Wd,
          Cd = Nd + Pd;
        let Kd, od = Nd + Pd / 2 + Zd / 2;
        "right" === this.align ? (Kd = gd, dd.textAlign = "right") : "left" === this.align ? (Kd = kd, dd.textAlign = "left") : (Kd = kd + Wd / 2, dd.textAlign = "center");
        for (const pd of Jd) {
          dd.measureText(pd).width >= Wd && (Jd = Jd.replace(pd, ""))
        }
        Jd = (0, pd.R)(Jd);
        const ld = [],
          Qd = Jd.split("\n"),
          Ld = this.justify ? dd.measureText("\u200a").width : 0;
        Qd.forEach((Jd => {
          let kd = dd.measureText(Jd).width;
          if (kd <= Wd) ld.push(Jd);
          else {
            let pd = Jd;
            const Nd = Wd;
            let Pd, Zd, gd;
            for (kd = dd.measureText(pd).width; kd > Nd;) {
              for (Pd = 0, Zd = 0, gd = ""; Zd < Nd;) Pd++, gd = pd.substr(0, Pd), Zd = dd.measureText(gd).width;
              Pd--, gd = gd.substr(0, Pd);
              const Jd = Pd;
              if (" " !== pd.substr(Pd, 1)) {
                for (;
                  " " !== pd.substr(Pd, 1) && 0 !== Pd;) Pd--;
                0 === Pd && (Pd = Jd), gd = pd.substr(0, Pd)
              }
              gd = this.justify ? this.justifyLine(dd, gd, Ld, "\u200a", Wd) : gd, pd = pd.substr(Pd), kd = dd.measureText(pd).width, ld.push(gd)
            }
            kd > 0 && ld.push(pd)
          }
        }));
        const Od = this.lineHeight ? this.lineHeight : this.getTextHeight(dd, Jd),
          ed = Od * (ld.length - 1),
          Rd = ed / 2;
        let Id = Nd;
        "top" === this.vAlign ? od = Nd + Zd : "bottom" === this.vAlign ? (od = Cd - ed, Id = Cd) : (Id = Nd + Pd / 2, od -= Rd), ld.forEach((Jd => {
          Jd = Jd.trim(), dd.fillText(Jd, Kd, od), od += Od
        })), this.debug && (dd.lineWidth = 3, dd.strokeStyle = "#00909e", dd.strokeRect(kd, Nd, Wd, Pd), dd.lineWidth = 2, dd.strokeStyle = "#f6d743", dd.beginPath(), dd.moveTo(Kd, Nd), dd.lineTo(Kd, Cd), dd.stroke(), dd.strokeStyle = "#ff6363", dd.beginPath(), dd.moveTo(kd, Id), dd.lineTo(gd, Id), dd.stroke());
        return {
          height: ed + Od
        }
      },
      getTextHeight: function(dd, Jd) {
        const kd = dd.textBaseline;
        dd.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: pd
        } = dd.measureText(Jd);
        return dd.textBaseline = kd, pd
      },
      justifyLine: function(dd, Jd, kd, pd, Nd) {
        const Wd = Jd.trim(),
          Pd = dd.measureText(Wd).width,
          Zd = Wd.split(/\s+/).length - 1,
          gd = Math.floor((Nd - Pd) / kd);
        if (Zd <= 0 || gd <= 0) return Wd;
        const Cd = Math.floor(gd / Zd);
        let Kd = gd - Zd * Cd,
          od = [];
        for (let ld = 0; ld < Cd; ld++) od.push(pd);
        od = od.join("");
        return Wd.replace(/\s+/g, (dd => {
          const Jd = Kd > 0 ? od + pd : od;
          return Kd--, dd + Jd
        }))
      }
    }
  },
  38798: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Od,
      f: () => Ld,
      j: () => ld,
      l: () => Kd,
      n: () => od
    });
    var pd = kd(4090),
      Nd = kd(313);
    const Wd = 1024,
      Pd = 1536,
      Zd = 2 * pd.l + 1,
      gd = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      Cd = 1.5;

    function Kd(dd, Jd, kd) {
      if ("string" !== typeof dd) return Jd;
      try {
        const kd = JSON.parse(dd);
        return kd && "object" === typeof kd ? kd : Jd
      } catch (pd) {
        return void 0 !== kd && console.error(`Couldn't parse ${kd}`, pd), Jd
      }
    }

    function od(dd) {
      return Kd(dd, null, "a leaderboard's rows")
    }

    function ld(dd, Jd) {
      var kd, pd;
      return null !== Jd && void 0 !== Jd ? Jd : {
        status: null !== (kd = dd.status) && void 0 !== kd ? kd : "loading",
        entries: null !== (pd = dd.entries) && void 0 !== pd ? pd : []
      }
    }

    function Qd(dd, Jd) {
      return "number" === typeof dd && Number.isFinite(dd) && dd > 0 ? dd : Jd
    }

    function Ld(dd, Jd) {
      const kd = Qd(dd.size, 1);
      let pd = Qd(dd.width, Qd(2.5 * kd, 2.5)),
        Nd = Qd(dd.height, Qd(3.75 * kd, 3.75));
      Number.isFinite(Wd * Nd / pd) && Number.isFinite(Pd * pd / Nd) || (pd = 2.5, Nd = 3.75);
      const Zd = Nd / pd,
        gd = Math.max(1, Math.min(Wd, Jd / Zd));
      return {
        width: pd,
        height: Nd,
        layoutWidth: Math.max(Wd, Pd / Zd),
        layoutHeight: Math.max(Pd, Wd * Zd),
        pixelWidth: Math.round(gd),
        pixelHeight: Math.round(Math.max(1, Math.min(Jd, gd * Zd)))
      }
    }

    function Od(dd, Jd, kd, Pd, Kd, od) {
      dd.setTransform(1, 0, 0, 1, 0, 0), dd.fillStyle = Nd.M.defaultNameTagBackground, dd.fillRect(0, 0, Jd, kd), dd.scale(Jd / Pd.layoutWidth, kd / Pd.layoutHeight), dd.translate((Pd.layoutWidth - Wd) / 2, 0),
        function(dd, Jd, kd, Wd) {
          var Pd, Kd, od, ld;
          const {
            top: Qd,
            around: Ld,
            showPlayerText: Od,
            localPlayerDbId: Id
          } = kd, {
            whiteUiText: Gd,
            grayUiText: vd,
            yellowUiText: xd
          } = Nd.M;
          dd.textBaseline = "middle";
          const qd = function(Jd, kd, pd, Nd, Wd, Pd) {
              let Zd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              dd.font = `bold ${Nd}px 'Jetbrains Mono', monospace`, dd.fillStyle = Wd, dd.textAlign = Zd;
              let gd = Jd.replace(/[\r\n\t]/g, " ");
              if (dd.measureText(gd).width > Pd) {
                for (; gd.length > 0 && dd.measureText(`${gd}\u2026`).width > Pd;) gd = gd.slice(0, -1);
                gd += "\u2026"
              }
              dd.fillText(gd, kd, pd)
            },
            Bd = Jd => {
              dd.fillStyle = Gd, dd.globalAlpha = .15, dd.fillRect(24, Jd, 976, 2), dd.globalAlpha = 1
            },
            sd = null === Id ? null : (0, Nd.qc)(Id),
            ad = dd => null !== sd && dd.playerHash === sd,
            Md = ed(Qd.entries, pd.m),
            Fd = "ready" === Qd.status && Md.length > 0,
            Yd = null === Ld ? [] : ed(Ld.entries, Zd),
            md = Md.some(ad),
            bd = null === Ld ? null : function(dd) {
              const Jd = dd;
              if (!Jd || !Number.isFinite(Jd.rank) || !Number.isFinite(Jd.tied) || !Number.isFinite(Jd.total)) return null;
              return Jd
            }(Ld.standing),
            Sd = Yd.find(ad),
            jd = Md.find(ad),
            Xd = null === bd || void 0 === Sd ? null : {
              value: Sd.value,
              rank: bd.rank
            },
            fd = Rd(Md, void 0 === jd || jd.value === (null === Xd || void 0 === Xd ? void 0 : Xd.value) ? Xd : null),
            nd = Rd(Yd, Xd),
            Ud = (dd, Jd) => {
              const kd = dd.findIndex(ad);
              return kd >= 0 ? Jd[kd] : null
            },
            yd = null !== (Pd = null !== (Kd = null === bd || void 0 === bd ? void 0 : bd.rank) && void 0 !== Kd ? Kd : Ud(Yd, nd)) && void 0 !== Pd ? Pd : Ud(Md, fd);
          dd.font = "bold 34px 'Jetbrains Mono', monospace";
          const Dd = [...Fd ? fd : [], ...md ? [] : nd],
            Td = Math.min(280, Math.max(0, ...Dd.map((Jd => dd.measureText(gd.format(Jd)).width)))),
            Ed = Td <= 80,
            cd = Ed ? 80 : 32 + Td,
            hd = Ed ? 148 : cd + 28,
            rd = 660 - hd;
          qd(`TOP ${pd.m}  /  ALL TIME`, 24, 52, 28, vd, 976), qd(Od ? String(null !== (od = Jd.title) && void 0 !== od ? od : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, Gd, 976), qd("RANK", 32, 174, 28, vd, hd - 40), qd("PLAYER", hd, 174, 28, vd, rd), qd(Od ? String(null !== (ld = Jd.scoreLabel) && void 0 !== ld ? ld : "Score").slice(0, 24) : "Score", 992, 174, 28, vd, 304, "right"), Bd(202);
          const ud = (Wd - 232) / (pd.m + Cd + Zd),
            td = 208 + pd.m * ud,
            Vd = td + Cd * ud,
            zd = (Jd, kd, pd, Nd) => {
              const Wd = ad(Jd);
              dd.fillStyle = Wd ? xd : Gd, dd.globalAlpha = Wd ? .15 : Nd ? .035 : 0, dd.fillRect(24, pd - ud / 2 + 1, 976, ud - 2), dd.globalAlpha = 1;
              const Pd = Wd ? xd : Gd;
              qd(gd.format(kd), cd, pd, 34, Pd, Ed ? 80 : Td, Ed ? "center" : "right"), qd(Od ? String(Jd.name).slice(0, 64) : "Player", hd, pd, 34, Pd, rd);
              const Zd = gd.format(Jd.value);
              qd(dd.measureText(Zd).width > 304 ? Jd.value.toExponential(6) : Zd, 992, pd, 34, Pd, 304, "right")
            };
          if (Fd)
            for (const [pd, Nd] of Md.entries()) zd(Nd, fd[pd], 208 + (pd + .5) * ud, pd % 2 === 0);
          else {
            const dd = "error" === Qd.status,
              Jd = dd ? "Couldn't load leaderboard" : "ready" === Qd.status ? "No scores yet" : "Loading leaderboard\u2026",
              kd = dd ? "Trying again shortly" : "ready" === Qd.status ? "Be the first on the board!" : "Fetching the top players",
              pd = (208 + td) / 2;
            qd(Jd, 512, pd - 28, 40, dd ? Nd.M.redUiText : Gd, 960, "center"), qd(kd, 512, pd + 27, 30, vd, 960, "center")
          }
          const Hd = td + Cd * ud / 2;
          if (null === yd) Bd(Hd);
          else {
            const Jd = null === bd ? 0 : bd.tied - 1,
              kd = `YOUR RANK #${gd.format(yd)}${null===bd?"":` of ${gd.format(bd.total)}`}`;
            dd.font = "bold 36px 'Jetbrains Mono', monospace";
            const pd = Math.max(20, Math.min(36, Math.floor(34560 / dd.measureText(kd).width)));
            qd(kd, 512, Hd - (Jd > 0 ? 15 : 0), pd, xd, 960, "center"), Jd > 0 && qd(`Tied with ${gd.format(Jd)} other${1===Jd?"":"s"}`, 512, Hd + 24, 24, vd, 960, "center")
          }
          if (null === Ld) return;
          const wd = Vd + Zd * ud / 2;
          if (md) qd(`You're in the top ${pd.m}!`, 512, wd, 40, xd, 960, "center");
          else if (0 === Yd.length) qd("You're not on this board yet", 512, wd, 34, vd, 960, "center");
          else
            for (const [pd, Nd] of Yd.entries()) zd(Nd, nd[pd], Vd + (pd + .5) * ud, pd % 2 === 0)
        }(dd, Kd, od, Pd.layoutHeight)
    }

    function ed(dd, Jd) {
      return Array.isArray(dd) ? dd.slice(0, Jd).filter((dd => dd && Number.isFinite(dd.rank) && Number.isFinite(dd.value))) : []
    }

    function Rd(dd, Jd) {
      const kd = [];
      let pd = !1;
      return dd.forEach(((Nd, Wd) => {
        if (null !== Jd && Nd.value === Jd.value) return void kd.push(Jd.rank);
        const Pd = Wd > 0 && Nd.value === dd[Wd - 1].value;
        Pd || (pd = 0 === Wd && 1 !== Nd.rank), kd.push(Pd && !pd ? kd[Wd - 1] : Nd.rank)
      })), kd
    }
  },
  39039: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Nd,
      g: () => Wd
    });
    const pd = 32;

    function Nd(dd) {
      return Array.from(dd).length
    }

    function Wd(dd) {
      const Jd = [""];
      let kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Nd = "";
      const Wd = () => {
        Jd.push(""), kd = 0, Nd = ""
      };
      for (const Pd of dd.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(Pd)) Wd();
        else if (/^\s+$/.test(Pd)) Nd += Pd;
      else if (Pd.length > 0) {
        const dd = Array.from(Pd);
        kd > 0 && kd + Nd.length + dd.length > pd && Wd(), Jd[Jd.length - 1] += Nd, kd += Nd.length, Nd = "";
        for (const Nd of dd) kd >= pd && Wd(), Jd[Jd.length - 1] += Nd, kd++
      }
      return Jd[Jd.length - 1] += Nd, Jd
    }
  },
  43193: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      WasmPreviewHost: () => sJ,
      pageBuiltInAnimationPack: () => ld,
      pagePreviews: () => pJ,
      previewModule: () => Vd
    });
    var pd = kd(2770),
      Nd = kd(614);
    const Wd = "[bloxd-wasm-client]";

    function Pd(dd) {
      const Jd = {
        wasm: "unknown",
        client: String(Nd.c)
      };
      try {
        var kd;
        Jd.wasm = null !== (kd = null === dd || void 0 === dd ? void 0 : dd.Zo()) && void 0 !== kd ? kd : Jd.wasm
      } catch {}
      return Jd
    }
    async function Zd(dd) {
      if (dd.length < 2 || 31 !== dd[0] || 139 !== dd[1]) return dd;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: Jd
        } = await Promise.resolve().then((() => kd(2716)));
        return Jd(dd)
      }
      const Jd = new Blob([dd]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(Jd).arrayBuffer())
    }

    function gd(dd, Jd, pd, Nd) {
      Promise.resolve().then((() => kd(40940))).then((kd => {
        let {
          reportDataLoadFailure: Wd
        } = kd;
        Wd(dd, Jd, pd, Nd)
      }), (Jd => {
        console.warn(`${Wd} ${dd} didn't load, and the report couldn't be sent`, pd.error, Jd)
      }))
    }
    const Cd = [3e4, 12e4, 3e5];
    class Kd {
      constructor(dd) {
        this.deps = dd, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((dd => {
          this.resolveSet = dd
        }))
      }
      provide(dd) {
        return this.loading ??= this.load(dd), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(dd) {
        const Jd = Pd(dd),
          kd = await async function(dd, Jd) {
            let kd;
            try {
              kd = await dd()
            } catch (pd) {
              return {
                stage: "fetch",
                error: pd
              }
            }
            try {
              return Jd(kd) ? null : {
                stage: "decode",
                error: null
              }
            } catch (pd) {
              return {
                stage: "decode",
                error: pd
              }
            }
          }((() => this.deps.fetch()), (Jd => {
            const kd = dd.mWd(Jd);
            return kd && this.resolveSet(Jd), kd
          }));
        if (null !== kd) {
          if ("fetch" === kd.stage) {
            this.loading = null;
            const Jd = Cd[this.retries++];
            void 0 !== Jd && this.deps.later((() => {
              this.provide(dd)
            }), Jd)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(kd, Jd))
        }
      }
    }
    let od = null;

    function ld() {
      return od ??= new Kd({
        fetch: async () => Zd(await (0, pd.D)(Qd(), {
          priority: "low"
        })),
        onFailed: (dd, Jd) => {
          gd("builtInAnimations", Qd(), dd, Jd)
        },
        later: (dd, Jd) => {
          setTimeout(dd, Jd)
        }
      }), od
    }

    function Qd() {
      return kd(43197)
    }
    var Ld = kd(2761),
      Od = kd(36480),
      ed = kd(40745),
      Rd = kd(1220),
      Id = kd(296),
      Gd = kd(626),
      vd = kd(40771),
      xd = kd(41006),
      qd = (kd(40781), kd(40954)),
      Bd = kd(40963),
      sd = kd(40972),
      ad = kd(40778),
      Md = kd(41020),
      Fd = kd(41028),
      Yd = kd(40801),
      md = kd(40891),
      bd = kd(40893),
      Sd = kd(41011),
      jd = kd(42499),
      Xd = kd(36458),
      fd = kd(3591);
    const nd = "[bloxd-previews]",
      Ud = 4e5,
      yd = 0,
      Dd = 1,
      Td = 2,
      Ed = 1,
      cd = 2,
      hd = 3,
      rd = 0,
      ud = 1,
      td = 2;

    function Vd(dd) {
      const Jd = dd,
        kd = (0, vd.C)(dd),
        pd = (0, vd.h)(dd);
      return null !== kd && null !== pd && "function" === typeof Jd.MWd && "function" === typeof Jd.FWd && "function" === typeof Jd.YWd ? Jd : null
    }

    function zd(dd, Jd, kd) {
      let [pd, Nd] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [dd, Jd], Wd = Math.min(Number.isFinite(kd) && kd > 0 ? kd : 1, 2);
      const Pd = Math.max(0, pd, dd) * Math.max(0, Nd, Jd) * Wd * Wd;
      return Pd > Ud && (Wd *= Math.sqrt(Ud / Pd)), [Math.max(1, Math.floor(Math.max(0, dd) * Wd)), Math.max(1, Math.floor(Math.max(0, Jd) * Wd))]
    }

    function Hd() {
      return kd(43201)
    }
    async function wd(dd, Jd) {
      "lost" === dd && (0, Yd.z)();
      const pd = await (0, Yd.R)();
      if (null === pd || (0, vd.l)(pd) || (0, Yd.d)()) return;
      const Nd = "webgpu" === pd.backend;
      if (!Nd && "lost" !== dd) return;
      const Wd = Nd ? (0, vd.J)(dd) : null;
      if (null !== Wd) {
        const kd = `WebGPU failed at home (${dd}${void 0===Jd?"":`: ${Jd instanceof Error?Jd.message:(0,Xd.j)(Jd)}`}) and ${Wd}`;
        return console.warn(`${nd} ${kd}: the previews stop`, null !== Jd && void 0 !== Jd ? Jd : ""), void(0, Yd.r)(kd)
      }
      Nd || (0, Gd.n)(), (0, Yd.o)();
      try {
        await async function(dd, Jd, pd) {
          var Nd;
          let {
            backend: Wd,
            adapter: Zd
          } = dd;
          const gd = (0, Ld.M)(),
            {
              flushCrashReports: Cd,
              reportRenderReload: Kd
            } = await Promise.resolve().then((() => kd(40940)));
          Kd(Wd, "start_failed" === Jd ? 0 : 1, Pd(gd ? (0, Ld.x)() : null), {
            cause: Jd,
            error: "lost" === Jd && null !== (Nd = (0, vd.M)(gd ? (0, vd.C)((0, Ld.x)()) : null)) && void 0 !== Nd ? Nd : pd,
            context: {
              adapter: Zd,
              boundAtMs: "start_failed" === Jd ? null : (0, Yd.P)(),
              indirectHangs: (0, Yd.C)()
            }
          }), await Cd(md.d)
        }(pd, dd, Jd)
      } catch (Zd) {
        console.warn(`${nd} ${pd.backend} failed at home (${dd}), and its report couldn't be sent`, Zd)
      }(0, md.i)()
    }
    async function Ad() {
      if (!(0, Ld.M)()) {
        const dd = await (0, Yd.R)();
        if (null === dd || (0, vd.l)(dd)) return null;
        if (await (0, Od.h)(await dd.load(), ed.g), !(0, Ld.M)()) return null
      }
      return Vd((0, Ld.x)())
    }
    class dJ {
      constructor(dd, Jd, kd, pd, Nd, Wd) {
        this.page = dd, this.host = Jd, this.id = kd, this.canvas = pd, this.size = Nd, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const Pd = {
            ...Wd.images,
            glbUrl: dd => {
              var Jd;
              return null !== (Jd = this.models.drawnUrl(dd)) && void 0 !== Jd ? Jd : Wd.images.glbUrl(dd)
            }
          },
          Zd = Jd => dd.modelFile(Jd);
        this.images = new xd.i(Pd, (dd => {
          console.warn(`${nd} image ${dd.key.kind}:${dd.key.index}:${dd.key.word} failed`, dd.error)
        }), {
          fetchFile: Zd,
          fetchImage: Jd => dd.imageFile(Jd)
        }), dd.startModels(), this.models = new qd.m(Wd.files, ((Jd, kd) => dd.buildModel(Jd, kd)), (dd => {
          console.warn(`${nd} model file ${dd.file} (${dd.url}) failed`, dd.error)
        }), {
          fetchFile: Zd,
          onWritten: (dd, Jd) => {
            this.images.glbWritten(dd, Jd)
          },
          onTaken: (dd, Jd) => {
            this.images.glbTaken(dd, Jd)
          }
        }), this.write = (dd, Jd, kd) => {
          if (this.closed) return !0;
          if (dd === qd.e) {
            const dd = new DataView(kd.buffer, kd.byteOffset, sd.b),
              pd = dd.getUint32(0, !0),
              Nd = dd.getUint32(sd.d, !0),
              Wd = this.page.hostCall(td, (() => this.host.SPd(this.id, pd, Jd, kd.subarray(sd.b))));
            return this.outcomes.push([Nd, Wd]), !0
          }
          return dd === xd.e && (this.page.hostCall(void 0, (() => {
            this.host.XPd(this.id, kd)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(dd, Jd, kd) {
        if (this.closed) return;
        const [pd, Nd] = zd(dd, Jd, this.page.dpr(), kd);
        pd === this.size[0] && Nd === this.size[1] || (this.size = [pd, Nd], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, pd, Nd)
        })))
      }
      setMob(dd, Jd, kd, pd) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.DPd(this.id, dd, Jd, kd, pd))))
      }
      setPet(dd, Jd, kd, pd) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.EPd(this.id, dd, Jd, kd, pd))))
      }
      setPlayer(dd, Jd, kd) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.nPd(this.id, dd, Jd, kd))))
      }
      setFigure(dd, Jd, kd, pd) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.UPd(this.id, dd, Jd, kd, pd))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const dd = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === dd || dd.length < 3 ? null : {
          alpha: dd[0],
          beta: dd[1],
          radius: dd[2]
        }
      }
      setOrbit(dd) {
        let {
          alpha: Jd,
          beta: kd,
          radius: pd
        } = dd;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.TPd(this.id, Jd, kd, pd)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((dd => {
          this.settled.push(dd)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, Md.h)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [dd, Jd] of this.outcomes) {
          const kd = Jd === rd ? [] : [Jd === ud ? dd : (dd | qd.i) >>> 0];
          this.models.taken(dd, kd)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(dd) {
        let Jd = !1;
        if (dd) {
          const dd = this.host.rPd(this.id);
          for (const Jd of dd) this.models.request(Jd);
          const kd = this.host.hPd(this.id);
          kd.length > 0 && this.images.onEvent(kd), Jd = dd.length > 0 || kd.length > 0
        }
        const kd = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          pd = Jd || kd > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = pd ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(dd) {
        this.page.hostCall(void 0, (() => {
          const Jd = this.host.close(this.id);
          Jd.length > 0 && this.images.onEvent(Jd), this.page.isTrapped || dd.YWd(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const dd = this.settled;
        this.settled = [];
        for (const Jd of dd) Jd()
      }
    }
    class JJ {
      constructor(dd) {
        this.deps = dd, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: dd => {
            this.modelsFailed(dd)
          },
          onDecoderFailed: dd => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${nd} the Draco decoder didn't load: models waiting on it won't draw`, dd))
          },
          onWorkerLost: dd => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${nd} a model worker was lost: ${dd}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.EQ = {
          setShaderPack: (dd, Jd, kd, pd, Nd) => (this.shaderPackArgs = [dd, Jd, kd, pd, Nd], this.handOverShaderPack(), !0)
        }, this.frame = dd => {
          this.frameId = null;
          const Jd = this.host;
          if (null !== Jd && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(Jd, dd)
          } catch (kd) {
            if (!this.stopIfTrapped(kd) && (this.stop(), (0, vd.n)(kd))) return void this.deps.onRenderFailed("frames_refused", kd);
            console.warn(`${nd} the previews stopped: their frame threw`, kd)
          }
        }, dd.pack.onChange((() => {
          this.packChanged()
        })), dd.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const dd of this.previews.values()) dd.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var dd, Jd;
        return null !== (dd = null === (Jd = this.host) || void 0 === Jd ? void 0 : Jd.attached()) && void 0 !== dd && dd
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((dd, Jd) => dd + Jd), 0) / this.costs.length
      }
      async bindSession(dd, Jd, kd) {
        const pd = this.binding,
          Nd = this.sessionEnds;
        try {
          const Wd = this.hostOf(dd);
          if (!Wd.jPd()) {
            const Jd = (0, bd.d)().sampleCount,
              Pd = await kd(Jd);
            if (this.sessionEnds !== Nd) return this.keepRendererOfEndedSession(dd, Wd, Pd, Jd, pd), Jd;
            if (!Wd.IPd(Pd)) throw new Error("the page has a renderer already");
            (0, Yd.v)(performance.now()), this.samples = Jd, (0, Sd.h)((0, vd.h)(dd))
          }
          if (!Wd.attach(Jd)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === pd && this.endBinding()
        }
      }
      keepRendererOfEndedSession(dd, Jd, kd, pd, Nd) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== Nd) try {
          kd.free()
        } catch (Wd) {
          console.warn(`${nd} an ended session's renderer didn't free`, Wd)
        } else Jd.IPd(kd) && ((0, Yd.v)(performance.now()), this.samples = pd, (0, Sd.h)(this.registryOf(dd)))
      }
      async beginSession() {
        var dd;
        let Jd = () => {};
        const kd = new Promise((dd => {
          Jd = dd
        }));
        this.binding = {
          done: kd,
          release: Jd
        }, await (null === (dd = this.opening) || void 0 === dd ? void 0 : dd.catch((() => null)));
        const pd = this.pageCanvas;
        return this.pageCanvas = null, pd
      }
      endSession(dd) {
        var Jd, kd;
        if (this.sessionEnds++, this.lastEndReturned = dd, this.endBinding(), dd) {
          try {
            var pd;
            null === (pd = this.host) || void 0 === pd || pd.detach()
          } catch (Nd) {
            return void console.warn(`${nd} the session's core kept the page's renderer`, Nd)
          }!0 === (null === (Jd = this.host) || void 0 === Jd ? void 0 : Jd.attached()) && console.warn(`${nd} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (kd = this.host) || void 0 === kd ? void 0 : kd.jPd()) && (0, Sd.h)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var dd;
        null === (dd = this.binding) || void 0 === dd || dd.release(), this.binding = null
      }
      async openPreview(dd, Jd, kd, pd) {
        const Nd = await this.renderingHost(),
          Wd = this.module;
        if (null === Nd || null === Wd) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(Nd), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(Wd)
        }));
        const Pd = this.nextId++,
          Zd = this.deps.createCanvas(),
          [gd, Cd] = zd(Jd, kd, this.deps.dpr(), pd);
        Zd.width = gd, Zd.height = Cd;
        if (!this.guarded((() => (Wd.FWd(Pd, Zd), Nd.open(Pd, gd, Cd, dd))))) throw this.hostCall(void 0, (() => {
          Wd.YWd(Pd)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const Kd = new dJ(this, Nd, Pd, Zd, [gd, Cd], this.deps);
        return this.previews.set(Pd, Kd), this.startFrames(), Kd
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, Yd.d)() || null !== (0, Yd.L)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((dd => {
          null === dd || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(dd) {
        return this.prefetchedOr(dd, this.deps.fetchModel)
      }
      imageFile(dd) {
        return this.prefetchedOr(dd, pd.D)
      }
      prefetchedOr(dd, Jd) {
        const kd = this.prefetchedFiles.get(dd);
        return void 0 === kd ? Jd(dd) : kd.catch((() => Jd(dd)))
      }
      async prefetchPlayerFiles() {
        const dd = this.deps.playerFile().then((dd => this.deps.files.url(dd))),
          Jd = await Promise.all([dd, this.deps.images.lifeformAtlasUrl(Md.d)]).catch((() => null));
        if (null === Jd) return;
        const [kd, pd] = Jd, Nd = (dd, Jd) => {
          if (null === dd) return;
          const kd = Jd(dd);
          this.prefetchedFiles.set(dd, kd), kd.catch((() => {
            this.prefetchedFiles.delete(dd)
          }))
        };
        Nd(kd, (dd => this.modelFile(dd))), Nd(pd, (dd => this.imageFile(dd)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((dd => (null === dd && (this.moduleLoad = null), dd)), (dd => {
          throw this.moduleLoad = null, dd
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((dd => {
          throw this.animationTable = null, dd
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((dd => (this.modelsFailed(dd), () => new Promise((() => {})))))
      }
      buildModel(dd, Jd) {
        return this.startModels(), this.models.then((kd => kd(dd, Jd))).then((dd => this.unavailable ? new Promise((() => {})) : dd))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(dd) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${nd} the model workers didn't start: models won't draw in the previews`, dd))
      }
      called(dd) {
        return 0 !== dd && this.logError(dd, 0), dd
      }
      closePreview(dd) {
        this.previews.delete(dd.id), null !== this.module && dd.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(dd) {
        if (null !== this.module && this.module !== dd) throw new Error("a second renderer module on one page");
        return this.module = dd, null === this.host && (this.host = this.guarded((() => new dd.MWd)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: dd
        } = this;
        null !== dd && this.outsideCall("the game's start or end", (() => {
          dd.yPd(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: dd,
          shaderPackArgs: Jd
        } = this;
        null !== dd && null !== Jd && this.outsideCall("the shader pack's hand-over", (() => {
          dd.Mpd(...Jd) || console.warn(`${nd} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(dd, Jd) {
        try {
          this.hostCall(void 0, Jd)
        } catch (kd) {
          this.stop(), console.warn(`${nd} the previews stopped: ${dd} threw`, kd)
        }
      }
      async loadAnimations(dd) {
        const Jd = Pd(null),
          kd = this.module;
        try {
          Jd.wasm = null === kd ? Jd.wasm : this.hostCall(Jd.wasm, (() => kd.Zo()))
        } catch {}
        let pd, Nd;
        try {
          pd = await this.fetchAnimationTable()
        } catch (Wd) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: Wd
          }, Jd)
        }
        if (!this.settleIfTrapped()) {
          try {
            Nd = dd.fPd(pd)
          } catch (Wd) {
            if (this.stopIfTrapped(Wd)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: Wd
            }, Jd)
          }
          Nd || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, Jd)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const dd = this.host;
        return null !== dd && this.guarded((() => dd.jPd())) ? dd : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var dd;
        const Jd = null !== (dd = this.module) && void 0 !== dd ? dd : await this.loadModule();
        if (null === Jd) return null;
        const kd = this.hostOf(Jd),
          pd = () => this.guarded((() => kd.jPd()));
        if (pd()) return kd;
        if (null !== (0, Yd.L)() || (0, Yd.d)()) return null;
        const Nd = this.deps.createCanvas();
        Nd.width = 1, Nd.height = 1;
        const Wd = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const Pd = (0, bd.d)().sampleCount;
        let Zd;
        try {
          Zd = await (0, vd.s)(Jd, "previewRenderer", Nd, Pd, jd.b, Wd)
        } catch (gd) {
          throw gd instanceof ad.e ? this.stopForTrap(gd) : (0, vd.r)(gd) && await this.deps.onRenderFailed("start_failed", gd), gd
        }
        return this.guarded((() => kd.IPd(Zd))) ? ((0, Yd.v)(performance.now()), this.samples = Pd, this.pageCanvas = Nd, (0, Sd.h)(this.registryOf(Jd)), kd) : pd() ? kd : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(dd, Jd) {
        for (const Pd of this.previews.values()) Pd.feed();
        if (this.stopped) return;
        const kd = this.deps.now(),
          pd = dd.frame(Jd);
        this.costs.push(this.deps.now() - kd), this.costs.length > 120 && this.costs.shift();
        const Nd = 0 !== (256 & pd),
          Wd = 255 & pd;
        for (const Pd of this.previews.values()) {
          if (this.stopped) return;
          Pd.collect(Nd)
        }
        if (!this.stopped) {
          if (Nd) {
            const Jd = dd.cPd();
            for (let dd = 0; dd + 1 < Jd.length; dd += 2) this.logError(Jd[dd], Jd[dd + 1])
          }
          if (Wd === Ed) return this.stop(), void this.deps.onRenderFailed("lost");
          if (Wd === cd) return this.stop(), void this.deps.onFatal(dd.mPd(), dd.bPd());
          if (Wd === hd) return this.stop(), void console.warn(`${nd} the previews stopped: the page's renderer went with its session`);
          (0, Id.e)(Jd), this.startFrames()
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, ad.j)(this.module) || "failed" === (0, Ld.v)())
      }
      hostCall(dd, Jd) {
        if (this.settleIfTrapped()) return dd;
        try {
          return Jd()
        } catch (kd) {
          if (this.stopIfTrapped(kd)) return dd;
          throw kd
        }
      }
      guarded(dd) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return dd()
        } catch (Jd) {
          throw this.stopIfTrapped(Jd), Jd
        }
      }
      registryOf(dd) {
        return {
          Kpd: (Jd, kd) => {
            this.hostCall(void 0, (() => {
              dd.Kpd(Jd, kd)
            }))
          },
          lpd: Jd => {
            this.hostCall(void 0, (() => {
              dd.lpd(Jd)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, Sd.h)(null)), !0)
      }
      stopIfTrapped(dd) {
        return !(null === this.module || !(0, ad.k)(this.module, dd)) && (this.stopForTrap(dd), !0)
      }
      stopForTrap(dd) {
        this.stop(), (0, Sd.h)(null), (0, fd.i)("previews", dd)
      }
      stop() {
        this.stopped = !0;
        for (const dd of this.previews.values()) dd.abandon()
      }
      logError(dd, Jd) {
        const kd = `${dd}:${Jd}`;
        this.loggedErrors.has(kd) || (this.loggedErrors.add(kd), console.warn(`${nd} error ${dd} (detail ${Jd})`))
      }
    }
    let kJ = null;

    function pJ() {
      return kJ ??= new JJ(function() {
        const dd = (0, Bd.n)(Rd.clientSideServerUrls.staticUrl, {
          packUrl: dd => {
            var Jd, kd;
            return null !== (Jd = null === (kd = Md.g.current) || void 0 === kd ? void 0 : kd.modelUrl(dd)) && void 0 !== Jd ? Jd : null
          }
        });
        return {
          loadModule: Ad,
          startModels: async dd => {
            const {
              pageModelPool: Jd
            } = await kd.e(42).then((() => kd(43280))), {
              pool: pd
            } = Jd(dd);
            return (dd, Jd) => pd.build(dd, Jd)
          },
          fetchAnimations: async () => Zd(await (0, pd.D)(Hd())),
          playerFile: async () => (await (0, Bd.l)()).PLAYER_FILE,
          onAnimationsFailed: (dd, Jd) => {
            gd("previewAnimations", Hd(), dd, Jd)
          },
          provideBuiltInAnimationPack: dd => {
            ld().provide(dd)
          },
          openExtras: Yd.E,
          files: dd,
          images: (0, Md.k)((0, xd.p)(dd.url), (() => Md.g.current)),
          pack: Md.g,
          game: Fd.b,
          fetchModel: dd => (0, Bd.h)(dd),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: dd => requestAnimationFrame(dd),
          cancelFrame: dd => {
            cancelAnimationFrame(dd)
          },
          onRenderFailed: wd,
          onFatal: (dd, Jd) => {
            console.error(`${nd} the previews stopped: renderer error ${dd} (detail ${Jd})`)
          }
        }
      }()), kJ
    }
    var NJ = kd(597),
      WJ = kd(38776),
      PJ = kd(3130);
    const ZJ = {
      wave: 0,
      clap: 1,
      point: 2,
      shrug: 3,
      cheer: 4,
      sit: 5,
      beeFly: 6,
      bow: 7,
      jesterDance: 8,
      mobIdle: 9,
      caveGolem: 10,
      magmaGolem: 11,
      frostWraith: 12,
      tikiTerror: 13,
      gunReady: 14,
      gunAimed: 15
    };
    const gJ = "[bloxd-previews]",
      CJ = new Uint32Array(5);

    function KJ(dd) {
      return NJ.k.indexOf(dd)
    }
    const oJ = new WeakSet;

    function lJ(dd) {
      const Jd = (0, WJ.c)(dd),
        kd = null === Jd ? -1 : QJ(Jd);
      return -1 !== kd ? kd : (oJ.has(dd) || (oJ.add(dd), console.warn(`${gJ} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function QJ(dd) {
      var Jd;
      return null !== (Jd = ZJ[dd]) && void 0 !== Jd ? Jd : -1
    }

    function LJ(dd, Jd) {
      const {
        canvas: kd
      } = Jd;
      kd.style.width = "100%", kd.style.height = "100%", kd.style.display = "block", dd.appendChild(kd)
    }

    function OJ(dd) {
      const Jd = dd.getBoundingClientRect();
      return [Jd.width, Jd.height]
    }
    class eJ {
      constructor(dd, Jd) {
        this.preview = dd, this.showView = Jd
      }
      show(dd) {
        this.showView(this.preview, dd)
      }
      resize(dd, Jd) {
        this.preview.resize(dd, Jd)
      }
      close() {
        this.preview.close()
      }
    }
    class RJ {
      constructor(dd) {
        this.preview = dd, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(dd) {
          const {
            canvas: Jd
          } = dd;
          let kd = null;
          const pd = dd => {
              var pd;
              kd = {
                pointer: dd.pointerId,
                x: dd.clientX,
                y: dd.clientY
              }, null === (pd = Jd.setPointerCapture) || void 0 === pd || pd.call(Jd, dd.pointerId)
            },
            Nd = Jd => {
              var pd;
              const Nd = dd.orbit;
              if ((null === (pd = kd) || void 0 === pd ? void 0 : pd.pointer) !== Jd.pointerId || null === Nd) return;
              const Wd = Jd.clientX - kd.x,
                Pd = Jd.clientY - kd.y;
              kd = {
                ...kd,
                x: Jd.clientX,
                y: Jd.clientY
              }, dd.setOrbit({
                alpha: Nd.alpha - .01 * Wd,
                beta: Math.min(Math.PI - .01, Math.max(.01, Nd.beta - .01 * Pd)),
                radius: Nd.radius
              })
            },
            Wd = dd => {
              var Jd;
              (null === (Jd = kd) || void 0 === Jd ? void 0 : Jd.pointer) === dd.pointerId && (kd = null)
            },
            Pd = Jd => {
              const kd = dd.orbit;
              if (null === kd) return;
              Jd.preventDefault();
              const pd = Jd.deltaY * (Jd.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : Jd.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                Nd = Math.min(100, Math.max(5, kd.radius + .08 * pd));
              dd.setOrbit({
                ...kd,
                radius: Nd
              })
            };
          return Jd.style.touchAction = "none", Jd.addEventListener("pointerdown", pd), Jd.addEventListener("pointermove", Nd), Jd.addEventListener("pointerup", Wd), Jd.addEventListener("pointercancel", Wd), Jd.addEventListener("wheel", Pd, {
            passive: !1
          }), () => {
            Jd.removeEventListener("pointerdown", pd), Jd.removeEventListener("pointermove", Nd), Jd.removeEventListener("pointerup", Wd), Jd.removeEventListener("pointercancel", Wd), Jd.removeEventListener("wheel", Pd)
          }
        }(dd), this.dev = {
          canvas: () => dd.canvas,
          isolateHead: () => {
            console.warn(`${gJ} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = dd.untilSettled().then((() => {
          if (dd.isStopped) throw new Error(`${gJ} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(dd, Jd) {
        this.cosmetics[dd] = Jd, this.apply()
      }
      playEmote(dd) {
        null === dd || dd !== this.emote ? (this.emote = dd, this.apply()) : this.preview.replay()
      }
      untilDrawn(dd) {
        return this.preview.untilSettled()
      }
      setOrbit(dd) {
        let {
          yaw: Jd,
          pitch: kd,
          radius: pd
        } = dd;
        const Nd = this.preview.orbit;
        null !== Nd && this.preview.setOrbit({
          alpha: Jd,
          beta: kd,
          radius: null !== pd && void 0 !== pd ? pd : Nd.radius
        })
      }
      resetCamera() {}
      resize(dd, Jd) {
        this.preview.resize(dd, Jd)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var dd;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), CJ, null === (dd = this.emote) ? -1 : QJ(dd))
      }
    }

    function IJ(dd, Jd) {
      let {
        mobType: kd,
        variation: pd,
        animation: Nd
      } = Jd;
      dd.setMob(KJ(kd), null !== pd && void 0 !== pd ? pd : "", 1, lJ(Nd))
    }

    function GJ(dd, Jd) {
      let {
        mobType: kd,
        variation: pd,
        metaInfo: Nd,
        tamed: Wd
      } = Jd;
      dd.setPet(KJ(kd), pd, Nd, Wd)
    }
    const vJ = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class xJ {
      constructor(dd, Jd, kd, pd) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, dd(kd.width, pd[1], pd).then((dd => {
          if (this.closed) return void dd.close();
          const {
            style: kd
          } = dd.canvas;
          kd.position = "absolute", kd.top = "0", kd.visibility = "hidden", LJ(Jd, dd), this.preview = dd, this.apply()
        })).catch((dd => {
          console.error(`${gJ} couldn't open a lineup figure`, dd)
        }))
      }
      update(dd, Jd, kd, pd, Nd) {
        this.figure = dd, this.shown = Jd, this.order = kd, this.span = pd, this.lineup = Nd, this.apply()
      }
      close() {
        var dd;
        this.closed = !0, null === (dd = this.preview) || void 0 === dd || dd.close(), this.preview = null
      }
      apply() {
        const {
          preview: dd,
          figure: Jd,
          lineup: kd
        } = this;
        if (null === dd || null === Jd) return;
        if (this.given !== Jd) {
          var pd;
          this.given = Jd, this.loaded = !1;
          const kd = null === Jd.Dv ? 0 : null !== (pd = (0, PJ.c)(Jd.Dv)) && void 0 !== pd ? pd : 0;
          dd.setFigure(function(dd) {
            return JSON.stringify(Object.fromEntries(dd.cosmetics))
          }(Jd), kd, lJ(Jd.animation), Jd.size), dd.untilSettled().then((() => {
            this.given === Jd && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: Nd,
          width: Wd
        } = this.span;
        dd.resize(Wd, kd[1], kd);
        const {
          style: Pd
        } = dd.canvas;
        Pd.left = `${Nd}px`, Pd.width = `${Wd}px`, Pd.zIndex = this.order, Pd.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class qJ {
      constructor(dd, Jd) {
        this.open = Jd, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = OJ(dd), this.layer = document.createElement("div");
        const {
          style: kd
        } = this.layer;
        kd.position = "relative", kd.isolation = "isolate", kd.overflow = "hidden", kd.width = "100%", kd.height = "100%", kd.pointerEvents = "none", dd.appendChild(this.layer)
      }
      show(dd) {
        this.view = dd, this.place()
      }
      resize(dd, Jd) {
        this.size = [dd, Jd], this.place()
      }
      close() {
        for (const dd of this.figures) dd.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: dd,
          shown: Jd
        } = this.view;
        for (const pd of this.figures.splice(dd.length)) pd.close();
        const {
          size: kd
        } = this;
        dd.forEach(((pd, Nd) => {
          var Wd;
          const Pd = function(dd, Jd, kd, pd) {
            let [Nd, Wd] = pd;
            const Pd = (dd + .5) * Nd / Jd,
              Zd = Math.min(Math.max(Nd / Jd, 2 * kd * Wd), 2 * Math.max(Pd, Nd - Pd));
            return {
              left: Pd - Zd / 2,
              width: Zd
            }
          }(Nd, dd.length, function(dd) {
            let {
              animation: Jd,
              size: kd
            } = dd;
            const {
              aimed: pd,
              ready: Nd
            } = vJ;
            return (lJ(Jd) === ZJ.gunAimed ? pd : Nd) * kd
          }(pd), kd);
          this.figures[Nd] ??= new xJ(this.open, this.layer, Pd, kd), this.figures[Nd].update(pd, null !== (Wd = Jd[Nd]) && void 0 !== Wd && Wd, function(dd, Jd) {
            return String(Math.round(1e3 * dd) + Jd)
          }(pd.size, Nd), Pd, kd)
        }))
      }
    }
    const BJ = {
      player: Dd,
      store: Td
    };
    class sJ {
      constructor(dd) {
        this.page = dd
      }
      async openMob(dd) {
        return new eJ(await this.open(dd, yd), IJ)
      }
      async openPet(dd) {
        return new eJ(await this.open(dd, yd), GJ)
      }
      openMobLineup(dd) {
        return new qJ(dd, ((dd, Jd, kd) => this.page.openPreview(yd, dd, Jd, kd)))
      }
      async openCharacter(dd, Jd) {
        return new RJ(await this.open(dd, BJ[Jd]))
      }
      async open(dd, Jd) {
        const [kd, pd] = OJ(dd), Nd = await this.page.openPreview(Jd, kd, pd);
        return LJ(dd, Nd), Nd
      }
    }
  },
  36919: (dd, Jd, kd) => {
    kd.d(Jd, {
      B: () => Ld,
      C: () => Od,
      E: () => Rd,
      c: () => pd,
      f: () => Nd,
      i: () => ld,
      l: () => ed,
      m: () => Kd,
      q: () => Id,
      u: () => gd,
      v: () => Cd,
      y: () => Qd
    });
    const pd = [{
      numLines: 7,
      charsPerLine: 16,
      uiFontSize: 3.3,
      ingameFontSize: 25
    }, {
      numLines: 5,
      charsPerLine: 11,
      uiFontSize: 4.6,
      ingameFontSize: 36
    }, {
      numLines: 3,
      charsPerLine: 7,
      uiFontSize: 7.5,
      ingameFontSize: 58
    }];

    function Nd(dd, Jd) {
      const {
        numLines: kd,
        charsPerLine: Nd
      } = pd[Jd];
      return Gd(dd, kd, Nd, !1)
    }
    const Wd = 7 / 8,
      Pd = .25,
      Zd = 8;

    function gd(dd, Jd) {
      return {
        width: Math.min(dd, Zd) - 2 * Pd,
        height: Math.min(Jd, Zd) - 2 * Pd
      }
    }

    function Cd(dd, Jd, kd) {
      const Nd = gd(dd, Jd),
        {
          numLines: Pd,
          charsPerLine: Zd
        } = pd[kd];
      return {
        numLines: Math.max(1, Math.floor(Pd / Wd * Nd.height)),
        charsPerLine: Math.max(1, Math.floor(Zd * Nd.width))
      }
    }

    function Kd(dd, Jd, kd, pd) {
      const {
        numLines: Nd,
        charsPerLine: Wd
      } = Cd(kd, pd, Jd);
      return Gd(dd, Nd, Wd, !1)
    }
    const od = 32e3;

    function ld(dd) {
      return dd.slice(0, od)
    }
    const Qd = 512e3,
      Ld = 64,
      Od = Qd;

    function ed(dd, Jd) {
      const kd = Math.max(0, Od - Jd),
        pd = Math.min(Qd, kd);
      return dd.slice(0, pd)
    }
    const Rd = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      iC: {
        numLines: 1,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      nameTag: {
        numLines: 1,
        charsPerLine: 13,
        uiFontSize: 4.6
      }
    };

    function Id(dd, Jd) {
      const {
        numLines: kd,
        charsPerLine: pd
      } = Rd[Jd];
      return Gd(dd, kd, pd, !1)
    }

    function Gd(dd, Jd, kd, pd, Nd) {
      (Nd || pd) && (dd = dd.slice(0, null !== Nd && void 0 !== Nd ? Nd : Jd * kd));
      const Wd = dd.split("\n");
      if (Wd.length > Jd && Wd.splice(Jd, Wd.length - Jd), !pd)
        for (let Pd = 0; Pd < Wd.length; Pd++) {
          const dd = Wd[Pd];
          dd.length > kd && (Wd[Pd] = dd.substring(0, kd), Wd.length < Jd && Wd.splice(Pd + 1, 0, dd.substring(kd)))
        }
      return Wd.join("\n")
    }
  },
  43197: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/builtInAnimations.anim.38e056f49512e10b7206.gz"
  },
  43201: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);