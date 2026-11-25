export const id = 60;
export const ids = [60];
export const modules = {
  38855: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt,
      f: () => Dt
    });
    const Ot = new WeakMap;

    function qt(tt, et) {
      return Ot.set(tt, et), tt
    }

    function Dt(tt) {
      var et;
      return null !== (et = Ot.get(tt)) && void 0 !== et ? et : null
    }
  },
  38876: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt
    });
    var Ot = Vt(1308);

    function qt(tt) {
      const et = /(\d*\.?\d+)px/.exec(tt);
      return et ? Number(et[1]) : null
    }

    function Dt(tt) {
      return tt.split(/[\s,]+/).pop()
    }
    let mt = !1;
    const dt = {
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
      drawText: function(tt, et, Ot, dt, jt, Ht) {
        if (jt <= 0 || Ht <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: Xt,
          fontVariant: Qt,
          fontWeight: lt,
          fontSize: Et,
          font: ft
        } = this, wt = [Xt, Qt, lt, `${Et}px`, ft].filter(Boolean).join(" "), yt = [
          [lt, `${Et}px`, Dt(ft)].filter(Boolean).join(" "), `${Et}px sans-serif`
        ], Nt = tt.font, Mt = function(tt, et, Vt) {
          for (const Ot of et) {
            tt.font = Ot;
            const et = qt(tt.font),
              mt = Dt(Ot);
            if (null !== et && Math.abs(et - Vt) <= .5 && tt.font.toLowerCase().includes(mt.toLowerCase())) return Ot
          }
          return null
        }(tt, [wt, ...yt], Et);
        Mt !== wt && function(tt, et, Ot) {
          mt || (mt = !0, Promise.resolve().then((() => Vt(1167))).then((Vt => {
            let {
              Nw: qt
            } = Vt;
            qt(new Error("A canvas didn't take canvasTxt's font"), {
              font: tt,
              hE: et,
              drawnWith: null !== Ot && void 0 !== Ot ? Ot : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(wt, Nt, Mt);
        const bt = qt(tt.font);
        if (null === Mt && null !== bt && bt > 0) {
          const Vt = Et / bt;
          tt.save();
          try {
            return tt.scale(Vt, Vt), {
              height: this.drawLines(tt, et, Ot / Vt, dt / Vt, jt / Vt, Ht / Vt, bt).height * Vt
            }
          } finally {
            tt.restore()
          }
        }
        return this.drawLines(tt, et, Ot, dt, jt, Ht, Et)
      },
      drawLines: function(tt, et, Vt, qt, Dt, mt, dt) {
        const jt = Vt + Dt,
          Ht = qt + mt;
        let Xt, Qt = qt + mt / 2 + dt / 2;
        "right" === this.align ? (Xt = jt, tt.textAlign = "right") : "left" === this.align ? (Xt = Vt, tt.textAlign = "left") : (Xt = Vt + Dt / 2, tt.textAlign = "center");
        for (const Ot of et) {
          tt.measureText(Ot).width >= Dt && (et = et.replace(Ot, ""))
        }
        et = (0, Ot.W)(et);
        const lt = [],
          Et = et.split("\n"),
          ft = this.justify ? tt.measureText("\u200a").width : 0;
        Et.forEach((et => {
          let Vt = tt.measureText(et).width;
          if (Vt <= Dt) lt.push(et);
          else {
            let Ot = et;
            const qt = Dt;
            let mt, dt, jt;
            for (Vt = tt.measureText(Ot).width; Vt > qt;) {
              for (mt = 0, dt = 0, jt = ""; dt < qt;) mt++, jt = Ot.substr(0, mt), dt = tt.measureText(jt).width;
              mt--, jt = jt.substr(0, mt);
              const et = mt;
              if (" " !== Ot.substr(mt, 1)) {
                for (;
                  " " !== Ot.substr(mt, 1) && 0 !== mt;) mt--;
                0 === mt && (mt = et), jt = Ot.substr(0, mt)
              }
              jt = this.justify ? this.justifyLine(tt, jt, ft, "\u200a", Dt) : jt, Ot = Ot.substr(mt), Vt = tt.measureText(Ot).width, lt.push(jt)
            }
            Vt > 0 && lt.push(Ot)
          }
        }));
        const wt = this.lineHeight ? this.lineHeight : this.getTextHeight(tt, et),
          yt = wt * (lt.length - 1),
          Nt = yt / 2;
        let Mt = qt;
        "top" === this.vAlign ? Qt = qt + dt : "bottom" === this.vAlign ? (Qt = Ht - yt, Mt = Ht) : (Mt = qt + mt / 2, Qt -= Nt), lt.forEach((et => {
          et = et.trim(), tt.fillText(et, Xt, Qt), Qt += wt
        })), this.debug && (tt.lineWidth = 3, tt.strokeStyle = "#00909e", tt.strokeRect(Vt, qt, Dt, mt), tt.lineWidth = 2, tt.strokeStyle = "#f6d743", tt.beginPath(), tt.moveTo(Xt, qt), tt.lineTo(Xt, Ht), tt.stroke(), tt.strokeStyle = "#ff6363", tt.beginPath(), tt.moveTo(Vt, Mt), tt.lineTo(jt, Mt), tt.stroke());
        return {
          height: yt + wt
        }
      },
      getTextHeight: function(tt, et) {
        const Vt = tt.textBaseline;
        tt.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: Ot
        } = tt.measureText(et);
        return tt.textBaseline = Vt, Ot
      },
      justifyLine: function(tt, et, Vt, Ot, qt) {
        const Dt = et.trim(),
          mt = tt.measureText(Dt).width,
          dt = Dt.split(/\s+/).length - 1,
          jt = Math.floor((qt - mt) / Vt);
        if (dt <= 0 || jt <= 0) return Dt;
        const Ht = Math.floor(jt / dt);
        let Xt = jt - dt * Ht,
          Qt = [];
        for (let lt = 0; lt < Ht; lt++) Qt.push(Ot);
        Qt = Qt.join("");
        return Dt.replace(/\s+/g, (tt => {
          const et = Xt > 0 ? Qt + Ot : Qt;
          return Xt--, tt + et
        }))
      }
    }
  },
  38879: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => wt,
      e: () => ft,
      h: () => lt,
      k: () => Xt,
      n: () => Qt
    });
    var Ot = Vt(4339),
      qt = Vt(391);
    const Dt = 1024,
      mt = 1536,
      dt = 2 * Ot.j + 1,
      jt = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      Ht = 1.5;

    function Xt(tt, et, Vt) {
      if ("string" !== typeof tt) return et;
      try {
        const Vt = JSON.parse(tt);
        return Vt && "object" === typeof Vt ? Vt : et
      } catch (Ot) {
        return void 0 !== Vt && console.error(`Couldn't parse ${Vt}`, Ot), et
      }
    }

    function Qt(tt) {
      return Xt(tt, null, "a leaderboard's rows")
    }

    function lt(tt, et) {
      var Vt, Ot;
      return null !== et && void 0 !== et ? et : {
        status: null !== (Vt = tt.status) && void 0 !== Vt ? Vt : "loading",
        entries: null !== (Ot = tt.entries) && void 0 !== Ot ? Ot : []
      }
    }

    function Et(tt, et) {
      return "number" === typeof tt && Number.isFinite(tt) && tt > 0 ? tt : et
    }

    function ft(tt, et) {
      const Vt = Et(tt.size, 1);
      let Ot = Et(tt.width, Et(2.5 * Vt, 2.5)),
        qt = Et(tt.height, Et(3.75 * Vt, 3.75));
      Number.isFinite(Dt * qt / Ot) && Number.isFinite(mt * Ot / qt) || (Ot = 2.5, qt = 3.75);
      const dt = qt / Ot,
        jt = Math.max(1, Math.min(Dt, et / dt));
      return {
        width: Ot,
        height: qt,
        layoutWidth: Math.max(Dt, mt / dt),
        layoutHeight: Math.max(mt, Dt * dt),
        pixelWidth: Math.round(jt),
        pixelHeight: Math.round(Math.max(1, Math.min(et, jt * dt)))
      }
    }

    function wt(tt, et, Vt, mt, Xt, Qt) {
      tt.setTransform(1, 0, 0, 1, 0, 0), tt.fillStyle = qt.P.defaultNameTagBackground, tt.fillRect(0, 0, et, Vt), tt.scale(et / mt.layoutWidth, Vt / mt.layoutHeight), tt.translate((mt.layoutWidth - Dt) / 2, 0),
        function(tt, et, Vt, Dt) {
          var mt, Xt, Qt, lt;
          const {
            top: Et,
            around: ft,
            showPlayerText: wt,
            localPlayerDbId: Mt
          } = Vt, {
            whiteUiText: bt,
            grayUiText: Jt,
            yellowUiText: Ct
          } = qt.P;
          tt.textBaseline = "middle";
          const ut = function(et, Vt, Ot, qt, Dt, mt) {
              let dt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              tt.font = `bold ${qt}px 'Jetbrains Mono', monospace`, tt.fillStyle = Dt, tt.textAlign = dt;
              let jt = et.replace(/[\r\n\t]/g, " ");
              if (tt.measureText(jt).width > mt) {
                for (; jt.length > 0 && tt.measureText(`${jt}\u2026`).width > mt;) jt = jt.slice(0, -1);
                jt += "\u2026"
              }
              tt.fillText(jt, Vt, Ot)
            },
            Kt = et => {
              tt.fillStyle = bt, tt.globalAlpha = .15, tt.fillRect(24, et, 976, 2), tt.globalAlpha = 1
            },
            ht = null === Mt ? null : (0, qt.uc)(Mt),
            vt = tt => null !== ht && tt.playerHash === ht,
            Wt = yt(Et.entries, Ot.m),
            St = "ready" === Et.status && Wt.length > 0,
            ct = null === ft ? [] : yt(ft.entries, dt),
            Rt = Wt.some(vt),
            It = null === ft ? null : function(tt) {
              const et = tt;
              if (!et || !Number.isFinite(et.rank) || !Number.isFinite(et.tied) || !Number.isFinite(et.total)) return null;
              return et
            }(ft.standing),
            Pt = ct.find(vt),
            Zt = Wt.find(vt),
            Lt = null === It || void 0 === Pt ? null : {
              value: Pt.value,
              rank: It.rank
            },
            Ft = Nt(Wt, void 0 === Zt || Zt.value === (null === Lt || void 0 === Lt ? void 0 : Lt.value) ? Lt : null),
            kt = Nt(ct, Lt),
            Gt = (tt, et) => {
              const Vt = tt.findIndex(vt);
              return Vt >= 0 ? et[Vt] : null
            },
            zt = null !== (mt = null !== (Xt = null === It || void 0 === It ? void 0 : It.rank) && void 0 !== Xt ? Xt : Gt(ct, kt)) && void 0 !== mt ? mt : Gt(Wt, Ft);
          tt.font = "bold 34px 'Jetbrains Mono', monospace";
          const ot = [...St ? Ft : [], ...Rt ? [] : kt],
            rt = Math.min(280, Math.max(0, ...ot.map((et => tt.measureText(jt.format(et)).width)))),
            Ut = rt <= 80,
            At = Ut ? 80 : 32 + rt,
            it = Ut ? 148 : At + 28,
            Yt = 660 - it;
          ut(`TOP ${Ot.m}  /  ALL TIME`, 24, 52, 28, Jt, 976), ut(wt ? String(null !== (Qt = et.title) && void 0 !== Qt ? Qt : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, bt, 976), ut("RANK", 32, 174, 28, Jt, it - 40), ut("PLAYER", it, 174, 28, Jt, Yt), ut(wt ? String(null !== (lt = et.scoreLabel) && void 0 !== lt ? lt : "Score").slice(0, 24) : "Score", 992, 174, 28, Jt, 304, "right"), Kt(202);
          const Bt = (Dt - 232) / (Ot.m + Ht + dt),
            pt = 208 + Ot.m * Bt,
            xt = pt + Ht * Bt,
            Tt = (et, Vt, Ot, qt) => {
              const Dt = vt(et);
              tt.fillStyle = Dt ? Ct : bt, tt.globalAlpha = Dt ? .15 : qt ? .035 : 0, tt.fillRect(24, Ot - Bt / 2 + 1, 976, Bt - 2), tt.globalAlpha = 1;
              const mt = Dt ? Ct : bt;
              ut(jt.format(Vt), At, Ot, 34, mt, Ut ? 80 : rt, Ut ? "center" : "right"), ut(wt ? String(et.name).slice(0, 64) : "Player", it, Ot, 34, mt, Yt);
              const dt = jt.format(et.value);
              ut(tt.measureText(dt).width > 304 ? et.value.toExponential(6) : dt, 992, Ot, 34, mt, 304, "right")
            };
          if (St)
            for (const [Ot, qt] of Wt.entries()) Tt(qt, Ft[Ot], 208 + (Ot + .5) * Bt, Ot % 2 === 0);
          else {
            const tt = "error" === Et.status,
              et = tt ? "Couldn't load leaderboard" : "ready" === Et.status ? "No scores yet" : "Loading leaderboard\u2026",
              Vt = tt ? "Trying again shortly" : "ready" === Et.status ? "Be the first on the board!" : "Fetching the top players",
              Ot = (208 + pt) / 2;
            ut(et, 512, Ot - 28, 40, tt ? qt.P.redUiText : bt, 960, "center"), ut(Vt, 512, Ot + 27, 30, Jt, 960, "center")
          }
          const gt = pt + Ht * Bt / 2;
          if (null === zt) Kt(gt);
          else {
            const et = null === It ? 0 : It.tied - 1,
              Vt = `YOUR RANK #${jt.format(zt)}${null===It?"":` of ${jt.format(It.total)}`}`;
            tt.font = "bold 36px 'Jetbrains Mono', monospace";
            const Ot = Math.max(20, Math.min(36, Math.floor(34560 / tt.measureText(Vt).width)));
            ut(Vt, 512, gt - (et > 0 ? 15 : 0), Ot, Ct, 960, "center"), et > 0 && ut(`Tied with ${jt.format(et)} other${1===et?"":"s"}`, 512, gt + 24, 24, Jt, 960, "center")
          }
          if (null === ft) return;
          const st = xt + dt * Bt / 2;
          if (Rt) ut(`You're in the top ${Ot.m}!`, 512, st, 40, Ct, 960, "center");
          else if (0 === ct.length) ut("You're not on this board yet", 512, st, 34, Jt, 960, "center");
          else
            for (const [Ot, qt] of ct.entries()) Tt(qt, kt[Ot], xt + (Ot + .5) * Bt, Ot % 2 === 0)
        }(tt, Xt, Qt, mt.layoutHeight)
    }

    function yt(tt, et) {
      return Array.isArray(tt) ? tt.slice(0, et).filter((tt => tt && Number.isFinite(tt.rank) && Number.isFinite(tt.value))) : []
    }

    function Nt(tt, et) {
      const Vt = [];
      let Ot = !1;
      return tt.forEach(((qt, Dt) => {
        if (null !== et && qt.value === et.value) return void Vt.push(et.rank);
        const mt = Dt > 0 && qt.value === tt[Dt - 1].value;
        mt || (Ot = 0 === Dt && 1 !== qt.rank), Vt.push(mt && !Ot ? Vt[Dt - 1] : qt.rank)
      })), Vt
    }
  },
  39070: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt,
      i: () => Dt
    });
    const Ot = 32;

    function qt(tt) {
      return Array.from(tt).length
    }

    function Dt(tt) {
      const et = [""];
      let Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        qt = "";
      const Dt = () => {
        et.push(""), Vt = 0, qt = ""
      };
      for (const mt of tt.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(mt)) Dt();
        else if (/^\s+$/.test(mt)) qt += mt;
      else if (mt.length > 0) {
        const tt = Array.from(mt);
        Vt > 0 && Vt + qt.length + tt.length > Ot && Dt(), et[et.length - 1] += qt, Vt += qt.length, qt = "";
        for (const qt of tt) Vt >= Ot && Dt(), et[et.length - 1] += qt, Vt++
      }
      return et[et.length - 1] += qt, et
    }
  },
  51261: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      WasmPreviewHost: () => Se,
      pageBuiltInAnimationPack: () => lt,
      pagePreviews: () => de,
      previewModule: () => st
    });
    var Ot = Vt(2965),
      qt = Vt(712);
    const Dt = "[bloxd-wasm-client]";

    function mt(tt) {
      const et = {
        wasm: "unknown",
        client: String(qt.d)
      };
      try {
        var Vt;
        et.wasm = null !== (Vt = null === tt || void 0 === tt ? void 0 : tt.bQ()) && void 0 !== Vt ? Vt : et.wasm
      } catch {}
      return et
    }
    async function dt(tt) {
      if (tt.length < 2 || 31 !== tt[0] || 139 !== tt[1]) return tt;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: et
        } = await Promise.resolve().then((() => Vt(2915)));
        return et(tt)
      }
      const et = new Blob([tt]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(et).arrayBuffer())
    }

    function jt(tt, et, Ot, qt) {
      Promise.resolve().then((() => Vt(40933))).then((Vt => {
        let {
          reportDataLoadFailure: Dt
        } = Vt;
        Dt(tt, et, Ot, qt)
      }), (et => {
        console.warn(`${Dt} ${tt} didn't load, and the report couldn't be sent`, Ot.error, et)
      }))
    }
    const Ht = [3e4, 12e4, 3e5];
    class Xt {
      constructor(tt) {
        this.deps = tt, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((tt => {
          this.resolveSet = tt
        }))
      }
      provide(tt) {
        return this.loading ??= this.load(tt), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(tt) {
        const et = mt(tt),
          Vt = await async function(tt, et) {
            let Vt;
            try {
              Vt = await tt()
            } catch (Ot) {
              return {
                stage: "fetch",
                error: Ot
              }
            }
            try {
              return et(Vt) ? null : {
                stage: "decode",
                error: null
              }
            } catch (Ot) {
              return {
                stage: "decode",
                error: Ot
              }
            }
          }((() => this.deps.fetch()), (et => {
            const Vt = tt.iDt(et);
            return Vt && this.resolveSet(et), Vt
          }));
        if (null !== Vt) {
          if ("fetch" === Vt.stage) {
            this.loading = null;
            const et = Ht[this.retries++];
            void 0 !== et && this.deps.later((() => {
              this.provide(tt)
            }), et)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(Vt, et))
        }
      }
    }
    let Qt = null;

    function lt() {
      return Qt ??= new Xt({
        fetch: async () => dt(await (0, Ot.I)(Et(), {
          priority: "low"
        })),
        onFailed: (tt, et) => {
          jt("builtInAnimations", Et(), tt, et)
        },
        later: (tt, et) => {
          setTimeout(tt, et)
        }
      }), Qt
    }

    function Et() {
      return Vt(51269)
    }
    var ft = Vt(2961),
      wt = Vt(1293),
      yt = Vt(373),
      Nt = Vt(366),
      Mt = Vt(725),
      bt = Vt(4960),
      Jt = Vt(40905),
      Ct = Vt(40920),
      ut = Vt(41127),
      Kt = (Vt(40960), Vt(40977)),
      ht = Vt(40985),
      vt = Vt(40987),
      Wt = Vt(40916),
      St = Vt(41154),
      ct = Vt(41157),
      Rt = Vt(40903),
      It = Vt(41167),
      Pt = Vt(41031),
      Zt = Vt(41022),
      Lt = Vt(41075),
      Ft = Vt(41141),
      kt = Vt(42838),
      Gt = Vt(36507),
      zt = Vt(3772);
    const ot = "[bloxd-previews]",
      rt = 4e5,
      Ut = 0,
      At = 1,
      it = 2,
      Yt = 1,
      Bt = 2,
      pt = 3,
      xt = 0,
      Tt = 1,
      gt = 2;

    function st(tt) {
      const et = tt,
        Vt = (0, Jt.P)(tt),
        Ot = (0, Jt.h)(tt);
      return null !== Vt && null !== Ot && "function" === typeof et.rDt && "function" === typeof et.UDt && "function" === typeof et.ADt ? et : null
    }

    function nt(tt, et, Vt) {
      let [Ot, qt] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [tt, et], Dt = Math.min(Number.isFinite(Vt) && Vt > 0 ? Vt : 1, 2);
      const mt = Math.max(0, Ot, tt) * Math.max(0, qt, et) * Dt * Dt;
      return mt > rt && (Dt *= Math.sqrt(rt / mt)), [Math.max(1, Math.floor(Math.max(0, tt) * Dt)), Math.max(1, Math.floor(Math.max(0, et) * Dt))]
    }

    function te() {
      return Vt(51273)
    }
    async function ee(tt, et, Ot) {
      var qt;
      let Dt = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      "lost" === tt && (0, Rt.A)();
      const dt = await (0, Rt.Q)();
      if (null === dt || (0, Jt.l)(dt) || (0, Rt.e)()) return;
      const jt = "webgpu" === dt.backend;
      if (!jt && "lost" !== tt) return;
      const Ht = jt && (0, Nt.l)(dt.adapter, null !== Ot && void 0 !== Ot ? Ot : null, "lost" === tt, Dt),
        Xt = null !== (qt = "lost" === tt ? (0, Ct.l)((0, ft.W)() ? (0, Jt.P)((0, ft.F)()) : null) : void 0) && void 0 !== qt ? qt : et,
        Qt = jt ? (0, Jt.$)(tt, void 0, (0, Ct.c)(Xt)) : null;
      if (null === Qt) {
        jt || (0, Mt.w)(), (0, Rt.q)();
        try {
          await async function(tt, et, Ot, qt, Dt) {
            let {
              restoreLost: dt,
              adapterRemembered: jt
            } = Dt;
            const Ht = (0, ft.W)(),
              {
                flushCrashReports: Xt,
                reportRenderReload: Qt
              } = await Promise.resolve().then((() => Vt(40933)));
            Qt(tt.backend, qt, mt(Ht ? (0, ft.F)() : null), {
              from: "home",
              cause: et,
              restoreLost: dt,
              adapterRemembered: jt,
              ...Ve(tt, et, Ot)
            }), await Xt(Pt.c)
          }(dt, tt, Xt, null !== Ot && void 0 !== Ot ? Ot : "start_failed" === tt ? 0 : 1, {
            restoreLost: Dt,
            adapterRemembered: Ht
          })
        } catch (Et) {
          console.warn(`${ot} ${dt.backend} failed at home (${tt}), and its report couldn't be sent`, Et)
        }(0, Pt.h)()
      } else {
        var lt;
        const et = Ve(dt, tt, Xt),
          Ot = `WebGPU failed at home (${tt}${void 0===et.error?"":`: ${et.error instanceof Error?et.error.message:(0,Gt.j)(et.error)}`}) and ${Qt}`;
        console.warn(`${ot} ${Ot}: the previews stop`, null !== (lt = et.error) && void 0 !== lt ? lt : ""), (0, Rt.t)(Ot);
        try {
          const {
            countRenderLost: Ot
          } = await Promise.resolve().then((() => Vt(40933)));
          Ot(tt, et.error, et.context)
        } catch (wt) {
          console.warn(`${ot} WebGPU failed at home (${tt}), and its count couldn't be sent`, wt)
        }
      }
    }

    function Ve(tt, et, Vt) {
      let {
        adapter: Ot
      } = tt;
      return {
        error: Vt,
        context: {
          adapter: Ot,
          boundAtMs: "start_failed" === et ? null : (0, Rt.L)(),
          indirectHangs: (0, Rt.D)(),
          restoresSkipped: (0, Rt.N)()
        }
      }
    }
    async function Oe() {
      if (!(0, ft.W)()) {
        const tt = await (0, Rt.Q)();
        if (null === tt || (0, Jt.l)(tt)) return null;
        if (await (0, It.e)(await tt.load()), !(0, ft.W)()) return null
      }
      return st((0, ft.F)())
    }
    class qe {
      constructor(tt, et, Vt, Ot, qt, Dt) {
        this.page = tt, this.host = et, this.id = Vt, this.canvas = Ot, this.size = qt, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const mt = {
            ...Dt.images,
            glbUrl: tt => {
              var et;
              return null !== (et = this.models.drawnUrl(tt)) && void 0 !== et ? et : Dt.images.glbUrl(tt)
            }
          },
          dt = et => tt.modelFile(et);
        this.images = new ut.g(mt, (tt => {
          console.warn(`${ot} image ${tt.key.kind}:${tt.key.index}:${tt.key.word} failed`, tt.error)
        }), {
          fetchFile: dt,
          fetchImage: et => tt.imageFile(et)
        }), tt.startModels(), this.models = new Kt.i(Dt.files, ((et, Vt) => tt.buildModel(et, Vt)), (tt => {
          console.warn(`${ot} model file ${tt.file} (${tt.url}) failed`, tt.error)
        }), {
          fetchFile: dt,
          onWritten: (tt, et) => {
            this.images.glbWritten(tt, et)
          },
          onTaken: (tt, et) => {
            this.images.glbTaken(tt, et)
          }
        }), this.write = (tt, et, Vt) => {
          if (this.closed) return !0;
          if (tt === Kt.d) {
            const tt = new DataView(Vt.buffer, Vt.byteOffset, vt.b),
              Ot = tt.getUint32(0, !0),
              qt = tt.getUint32(vt.f, !0),
              Dt = this.page.hostCall(gt, (() => this.host.edt(this.id, Ot, et, Vt.subarray(vt.b))));
            return this.outcomes.push([qt, Dt]), !0
          }
          return tt === ut.d && (this.page.hostCall(void 0, (() => {
            this.host.Odt(this.id, Vt)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(tt, et, Vt) {
        if (this.closed) return;
        const [Ot, qt] = nt(tt, et, this.page.dpr(), Vt);
        Ot === this.size[0] && qt === this.size[1] || (this.size = [Ot, qt], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, Ot, qt)
        })))
      }
      setMob(tt, et, Vt, Ot) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.jdt(this.id, tt, et, Vt, Ot))))
      }
      setPet(tt, et, Vt, Ot) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Xdt(this.id, tt, et, Vt, Ot))))
      }
      setPlayer(tt, et, Vt) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Ddt(this.id, tt, et, Vt))))
      }
      setFigure(tt, et, Vt, Ot) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.mdt(this.id, tt, et, Vt, Ot))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const tt = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === tt || tt.length < 3 ? null : {
          alpha: tt[0],
          beta: tt[1],
          radius: tt[2]
        }
      }
      setOrbit(tt) {
        let {
          alpha: et,
          beta: Vt,
          radius: Ot
        } = tt;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.Hdt(this.id, et, Vt, Ot)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((tt => {
          this.settled.push(tt)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, St.d)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [tt, et] of this.outcomes) {
          const Vt = et === xt ? [] : [et === Tt ? tt : (tt | Kt.f) >>> 0];
          this.models.taken(tt, Vt)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(tt) {
        let et = !1;
        if (tt) {
          const tt = this.host.Edt(this.id);
          for (const et of tt) this.models.request(et);
          const Vt = this.host.ldt(this.id);
          Vt.length > 0 && this.images.onEvent(Vt), et = tt.length > 0 || Vt.length > 0
        }
        const Vt = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          Ot = et || Vt > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = Ot ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(tt) {
        this.page.hostCall(void 0, (() => {
          const et = this.host.close(this.id);
          et.length > 0 && this.images.onEvent(et), this.page.isTrapped || tt.ADt(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const tt = this.settled;
        this.settled = [];
        for (const et of tt) et()
      }
    }
    class De {
      constructor(tt) {
        this.deps = tt, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: tt => {
            this.modelsFailed(tt)
          },
          onDecoderFailed: tt => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${ot} the Draco decoder didn't load: models waiting on it won't draw`, tt))
          },
          onWorkerLost: tt => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${ot} a model worker was lost: ${tt}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.YE = {
          setShaderPack: (tt, et, Vt, Ot, qt) => (this.shaderPackArgs = [tt, et, Vt, Ot, qt], this.handOverShaderPack(), !0)
        }, this.frame = tt => {
          this.frameId = null;
          const et = this.host;
          if (null !== et && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(et, tt)
          } catch (Vt) {
            if (!this.stopIfTrapped(Vt) && (this.stop(), (0, Jt.o)(Vt))) return void this.deps.onRenderFailed("frames_refused", Vt);
            console.warn(`${ot} the previews stopped: their frame threw`, Vt)
          }
        }, tt.pack.onChange((() => {
          this.packChanged()
        })), tt.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const tt of this.previews.values()) tt.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var tt, et;
        return null !== (tt = null === (et = this.host) || void 0 === et ? void 0 : et.attached()) && void 0 !== tt && tt
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((tt, et) => tt + et), 0) / this.costs.length
      }
      async bindSession(tt, et, Vt) {
        const Ot = this.binding,
          qt = this.sessionEnds;
        try {
          const Dt = this.hostOf(tt);
          if (!Dt.Vdt()) {
            const et = (0, Lt.g)().sampleCount,
              mt = await Vt(et);
            if (this.sessionEnds !== qt) return this.keepRendererOfEndedSession(tt, Dt, mt, et, Ot), et;
            if (!Dt.zmt(mt)) throw new Error("the page has a renderer already");
            (0, Rt.x)(performance.now()), this.samples = et, (0, Ft.f)((0, Jt.h)(tt))
          }
          if (!Dt.attach(et)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === Ot && this.endBinding()
        }
      }
      keepRendererOfEndedSession(tt, et, Vt, Ot, qt) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== qt) try {
          Vt.free()
        } catch (Dt) {
          console.warn(`${ot} an ended session's renderer didn't free`, Dt)
        } else et.zmt(Vt) && ((0, Rt.x)(performance.now()), this.samples = Ot, (0, Ft.f)(this.registryOf(tt)))
      }
      async beginSession() {
        var tt;
        let et = () => {};
        const Vt = new Promise((tt => {
          et = tt
        }));
        this.binding = {
          done: Vt,
          release: et
        }, await (null === (tt = this.opening) || void 0 === tt ? void 0 : tt.catch((() => null)));
        const Ot = this.pageCanvas;
        return this.pageCanvas = null, Ot
      }
      endSession(tt) {
        var et, Vt;
        if (this.sessionEnds++, this.lastEndReturned = tt, this.endBinding(), tt) {
          try {
            var Ot;
            null === (Ot = this.host) || void 0 === Ot || Ot.detach()
          } catch (qt) {
            return void console.warn(`${ot} the session's core kept the page's renderer`, qt)
          }!0 === (null === (et = this.host) || void 0 === et ? void 0 : et.attached()) && console.warn(`${ot} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (Vt = this.host) || void 0 === Vt ? void 0 : Vt.Vdt()) && (0, Ft.f)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var tt;
        null === (tt = this.binding) || void 0 === tt || tt.release(), this.binding = null
      }
      async openPreview(tt, et, Vt, Ot) {
        const qt = await this.renderingHost(),
          Dt = this.module;
        if (null === qt || null === Dt) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(qt), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(Dt)
        }));
        const mt = this.nextId++,
          dt = this.deps.createCanvas(),
          [jt, Ht] = nt(et, Vt, this.deps.dpr(), Ot);
        dt.width = jt, dt.height = Ht;
        if (!this.guarded((() => (Dt.UDt(mt, dt), qt.open(mt, jt, Ht, tt))))) throw this.hostCall(void 0, (() => {
          Dt.ADt(mt)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const Xt = new qe(this, qt, mt, dt, [jt, Ht], this.deps);
        return this.previews.set(mt, Xt), this.startFrames(), Xt
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, Rt.e)() || null !== (0, Rt.J)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((tt => {
          null === tt || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(tt) {
        return this.prefetchedOr(tt, this.deps.fetchModel)
      }
      imageFile(tt) {
        return this.prefetchedOr(tt, Ot.I)
      }
      prefetchedOr(tt, et) {
        const Vt = this.prefetchedFiles.get(tt);
        return void 0 === Vt ? et(tt) : Vt.catch((() => et(tt)))
      }
      async prefetchPlayerFiles() {
        const tt = this.deps.playerFile().then((tt => this.deps.files.url(tt))),
          et = await Promise.all([tt, this.deps.images.lifeformAtlasUrl(St.b)]).catch((() => null));
        if (null === et) return;
        const [Vt, Ot] = et, qt = (tt, et) => {
          if (null === tt) return;
          const Vt = et(tt);
          this.prefetchedFiles.set(tt, Vt), Vt.catch((() => {
            this.prefetchedFiles.delete(tt)
          }))
        };
        qt(Vt, (tt => this.modelFile(tt))), qt(Ot, (tt => this.imageFile(tt)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((tt => (null === tt && (this.moduleLoad = null), tt)), (tt => {
          throw this.moduleLoad = null, tt
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((tt => {
          throw this.animationTable = null, tt
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((tt => (this.modelsFailed(tt), () => new Promise((() => {})))))
      }
      buildModel(tt, et) {
        return this.startModels(), this.models.then((Vt => Vt(tt, et))).then((tt => this.unavailable ? new Promise((() => {})) : tt))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(tt) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${ot} the model workers didn't start: models won't draw in the previews`, tt))
      }
      called(tt) {
        return 0 !== tt && this.logError(tt, 0), tt
      }
      closePreview(tt) {
        this.previews.delete(tt.id), null !== this.module && tt.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(tt) {
        if (null !== this.module && this.module !== tt) throw new Error("a second renderer module on one page");
        return this.module = tt, null === this.host && (this.host = this.guarded((() => new tt.rDt)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: tt
        } = this;
        null !== tt && this.outsideCall("the game's start or end", (() => {
          tt.ddt(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: tt,
          shaderPackArgs: et
        } = this;
        null !== tt && null !== et && this.outsideCall("the shader pack's hand-over", (() => {
          tt.rOt(...et) || console.warn(`${ot} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(tt, et) {
        try {
          this.hostCall(void 0, et)
        } catch (Vt) {
          this.stop(), console.warn(`${ot} the previews stopped: ${tt} threw`, Vt)
        }
      }
      async loadAnimations(tt) {
        const et = mt(null),
          Vt = this.module;
        try {
          et.wasm = null === Vt ? et.wasm : this.hostCall(et.wasm, (() => Vt.bQ()))
        } catch {}
        let Ot, qt;
        try {
          Ot = await this.fetchAnimationTable()
        } catch (Dt) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: Dt
          }, et)
        }
        if (!this.settleIfTrapped()) {
          try {
            qt = tt.qdt(Ot)
          } catch (Dt) {
            if (this.stopIfTrapped(Dt)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: Dt
            }, et)
          }
          qt || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, et)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const tt = this.host;
        return null !== tt && this.guarded((() => tt.Vdt())) ? tt : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var tt;
        const et = null !== (tt = this.module) && void 0 !== tt ? tt : await this.loadModule();
        if (null === et) return null;
        const Vt = this.hostOf(et),
          Ot = () => this.guarded((() => Vt.Vdt()));
        if (Ot()) return Vt;
        if (null !== (0, Rt.J)() || (0, Rt.e)()) return null;
        const qt = this.deps.createCanvas();
        qt.width = 1, qt.height = 1;
        const Dt = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const mt = (0, Lt.g)().sampleCount;
        let dt;
        try {
          dt = await (0, Jt.t)(et, "previewRenderer", qt, mt, kt.b, Dt)
        } catch (jt) {
          throw jt instanceof Wt.e ? this.stopForTrap(jt) : (0, Jt.r)(jt) && await this.deps.onRenderFailed("start_failed", jt), jt
        }
        return this.guarded((() => Vt.zmt(dt))) ? ((0, Rt.x)(performance.now()), this.samples = mt, this.pageCanvas = qt, (0, Ft.f)(this.registryOf(et)), Vt) : Ot() ? Vt : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(tt, et) {
        for (const mt of this.previews.values()) mt.feed();
        if (this.stopped) return;
        const Vt = this.deps.now(),
          Ot = tt.frame(et);
        this.costs.push(this.deps.now() - Vt), this.costs.length > 120 && this.costs.shift();
        const qt = 0 !== (256 & Ot),
          Dt = 255 & Ot;
        for (const mt of this.previews.values()) {
          if (this.stopped) return;
          mt.collect(qt)
        }
        if (!this.stopped) {
          if (0 !== (512 & Ot) && this.deps.onDrew(), qt) {
            const et = tt.Qdt();
            for (let tt = 0; tt + 1 < et.length; tt += 2) et[tt] === bt.M.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(et[tt], et[tt + 1])
          }
          if (Dt !== Yt) {
            if (Dt === Bt) return this.stop(), void this.deps.onFatal(tt.smt(), tt.nmt());
            if (Dt === pt) return this.stop(), void console.warn(`${ot} the previews stopped: the page's renderer went with its session`);
            (0, yt.b)(et), this.startFrames()
          } else {
            const et = tt.tdt();
            this.stop();
            const Vt = et[2] === bt.hd.PIPELINE_FAILED ? "pipeline_failed" : "lost";
            this.deps.onRenderFailed(Vt, void 0, et[1], et[2] === bt.hd.RESTORE_LOST)
          }
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, Wt.l)(this.module) || "failed" === (0, ft.D)())
      }
      hostCall(tt, et) {
        if (this.settleIfTrapped()) return tt;
        try {
          return et()
        } catch (Vt) {
          if (this.stopIfTrapped(Vt)) return tt;
          throw Vt
        }
      }
      guarded(tt) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return tt()
        } catch (et) {
          throw this.stopIfTrapped(et), et
        }
      }
      registryOf(tt) {
        return {
          vOt: (et, Vt) => {
            this.hostCall(void 0, (() => {
              tt.vOt(et, Vt)
            }))
          },
          WOt: et => {
            this.hostCall(void 0, (() => {
              tt.WOt(et)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, Ft.f)(null)), !0)
      }
      stopIfTrapped(tt) {
        return !(null === this.module || !(0, Wt.p)(this.module, tt)) && (this.stopForTrap(tt), !0)
      }
      stopForTrap(tt) {
        this.stop(), (0, Ft.f)(null), (0, zt.g)("previews", tt)
      }
      stop() {
        this.stopped = !0;
        for (const tt of this.previews.values()) tt.abandon()
      }
      logError(tt, et) {
        const Vt = `${tt}:${et}`;
        this.loggedErrors.has(Vt) || (this.loggedErrors.add(Vt), console.warn(`${ot} error ${tt} (detail ${et})`))
      }
    }
    let me = null;

    function de() {
      return me ??= new De(function() {
        const tt = (0, ht.p)(wt.clientSideServerUrls.staticUrl, {
          packUrl: tt => {
            var et, Vt;
            return null !== (et = null === (Vt = St.c.current) || void 0 === Vt ? void 0 : Vt.modelUrl(tt)) && void 0 !== et ? et : null
          }
        });
        return {
          loadModule: Oe,
          startModels: async tt => {
            const {
              pageModelPool: et
            } = await Vt.e(43).then((() => Vt(51332))), {
              pool: Ot
            } = et(tt);
            return (tt, et) => Ot.build(tt, et)
          },
          fetchAnimations: async () => dt(await (0, Ot.I)(te())),
          playerFile: async () => (await (0, ht.n)()).PLAYER_FILE,
          onAnimationsFailed: (tt, et) => {
            jt("previewAnimations", te(), tt, et)
          },
          provideBuiltInAnimationPack: tt => {
            lt().provide(tt)
          },
          openExtras: Rt.F,
          files: tt,
          images: (0, St.h)((0, ut.l)(tt.url), (() => St.c.current)),
          pack: St.c,
          game: ct.b,
          fetchModel: tt => (0, ht.i)(tt),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: tt => requestAnimationFrame(tt),
          cancelFrame: tt => {
            cancelAnimationFrame(tt)
          },
          onRenderFailed: ee,
          onFatal: (tt, et) => {
            console.error(`${ot} the previews stopped: renderer error ${tt} (detail ${et})`)
          },
          onDeviceLost: () => {
            (0, Rt.H)() === Zt.c.webgpu && ((0, Ct.d)((0, ft.W)() ? (0, Jt.P)((0, ft.F)()) : null), Nt.D.lost())
          },
          onDrew: () => {
            Nt.D.drew()
          }
        }
      }()), me
    }
    var je = Vt(705),
      He = Vt(38855),
      Xe = Vt(3346);
    const Qe = {
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
    const le = "[bloxd-previews]",
      Ee = new Uint32Array(5);

    function fe(tt) {
      return je.f.indexOf(tt)
    }
    const we = new WeakSet;

    function ye(tt) {
      const et = (0, He.f)(tt),
        Vt = null === et ? -1 : Ne(et);
      return -1 !== Vt ? Vt : (we.has(tt) || (we.add(tt), console.warn(`${le} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function Ne(tt) {
      var et;
      return null !== (et = Qe[tt]) && void 0 !== et ? et : -1
    }

    function ae(tt, et) {
      const {
        canvas: Vt
      } = et;
      Vt.style.width = "100%", Vt.style.height = "100%", Vt.style.display = "block", tt.appendChild(Vt)
    }

    function Me(tt) {
      const et = tt.getBoundingClientRect();
      return [et.width, et.height]
    }
    class be {
      constructor(tt, et) {
        this.preview = tt, this.showView = et
      }
      show(tt) {
        this.showView(this.preview, tt)
      }
      resize(tt, et) {
        this.preview.resize(tt, et)
      }
      close() {
        this.preview.close()
      }
    }
    class Je {
      constructor(tt) {
        this.preview = tt, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(tt) {
          const {
            canvas: et
          } = tt;
          let Vt = null;
          const Ot = tt => {
              var Ot;
              Vt = {
                pointer: tt.pointerId,
                x: tt.clientX,
                y: tt.clientY
              }, null === (Ot = et.setPointerCapture) || void 0 === Ot || Ot.call(et, tt.pointerId)
            },
            qt = et => {
              var Ot;
              const qt = tt.orbit;
              if ((null === (Ot = Vt) || void 0 === Ot ? void 0 : Ot.pointer) !== et.pointerId || null === qt) return;
              const Dt = et.clientX - Vt.x,
                mt = et.clientY - Vt.y;
              Vt = {
                ...Vt,
                x: et.clientX,
                y: et.clientY
              }, tt.setOrbit({
                alpha: qt.alpha - .01 * Dt,
                beta: Math.min(Math.PI - .01, Math.max(.01, qt.beta - .01 * mt)),
                radius: qt.radius
              })
            },
            Dt = tt => {
              var et;
              (null === (et = Vt) || void 0 === et ? void 0 : et.pointer) === tt.pointerId && (Vt = null)
            },
            mt = et => {
              const Vt = tt.orbit;
              if (null === Vt) return;
              et.preventDefault();
              const Ot = et.deltaY * (et.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : et.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                qt = Math.min(100, Math.max(5, Vt.radius + .08 * Ot));
              tt.setOrbit({
                ...Vt,
                radius: qt
              })
            };
          return et.style.touchAction = "none", et.addEventListener("pointerdown", Ot), et.addEventListener("pointermove", qt), et.addEventListener("pointerup", Dt), et.addEventListener("pointercancel", Dt), et.addEventListener("wheel", mt, {
            passive: !1
          }), () => {
            et.removeEventListener("pointerdown", Ot), et.removeEventListener("pointermove", qt), et.removeEventListener("pointerup", Dt), et.removeEventListener("pointercancel", Dt), et.removeEventListener("wheel", mt)
          }
        }(tt), this.dev = {
          canvas: () => tt.canvas,
          isolateHead: () => {
            console.warn(`${le} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = tt.untilSettled().then((() => {
          if (tt.isStopped) throw new Error(`${le} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(tt, et) {
        this.cosmetics[tt] = et, this.apply()
      }
      playEmote(tt) {
        null === tt || tt !== this.emote ? (this.emote = tt, this.apply()) : this.preview.replay()
      }
      untilDrawn(tt) {
        return this.preview.untilSettled()
      }
      setOrbit(tt) {
        let {
          yaw: et,
          pitch: Vt,
          radius: Ot
        } = tt;
        const qt = this.preview.orbit;
        null !== qt && this.preview.setOrbit({
          alpha: et,
          beta: Vt,
          radius: null !== Ot && void 0 !== Ot ? Ot : qt.radius
        })
      }
      resetCamera() {}
      resize(tt, et) {
        this.preview.resize(tt, et)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var tt;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), Ee, null === (tt = this.emote) ? -1 : Ne(tt))
      }
    }

    function Ce(tt, et) {
      let {
        mobType: Vt,
        variation: Ot,
        animation: qt
      } = et;
      tt.setMob(fe(Vt), null !== Ot && void 0 !== Ot ? Ot : "", 1, ye(qt))
    }

    function ue(tt, et) {
      let {
        mobType: Vt,
        variation: Ot,
        metaInfo: qt,
        tamed: Dt
      } = et;
      tt.setPet(fe(Vt), Ot, qt, Dt)
    }
    const Ke = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class he {
      constructor(tt, et, Vt, Ot) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, tt(Vt.width, Ot[1], Ot).then((tt => {
          if (this.closed) return void tt.close();
          const {
            style: Vt
          } = tt.canvas;
          Vt.position = "absolute", Vt.top = "0", Vt.visibility = "hidden", ae(et, tt), this.preview = tt, this.apply()
        })).catch((tt => {
          console.error(`${le} couldn't open a lineup figure`, tt)
        }))
      }
      update(tt, et, Vt, Ot, qt) {
        this.figure = tt, this.shown = et, this.order = Vt, this.span = Ot, this.lineup = qt, this.apply()
      }
      close() {
        var tt;
        this.closed = !0, null === (tt = this.preview) || void 0 === tt || tt.close(), this.preview = null
      }
      apply() {
        const {
          preview: tt,
          figure: et,
          lineup: Vt
        } = this;
        if (null === tt || null === et) return;
        if (this.given !== et) {
          var Ot;
          this.given = et, this.loaded = !1;
          const Vt = null === et.LJ ? 0 : null !== (Ot = (0, Xe.b)(et.LJ)) && void 0 !== Ot ? Ot : 0;
          tt.setFigure(function(tt) {
            return JSON.stringify(Object.fromEntries(tt.cosmetics))
          }(et), Vt, ye(et.animation), et.size), tt.untilSettled().then((() => {
            this.given === et && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: qt,
          width: Dt
        } = this.span;
        tt.resize(Dt, Vt[1], Vt);
        const {
          style: mt
        } = tt.canvas;
        mt.left = `${qt}px`, mt.width = `${Dt}px`, mt.zIndex = this.order, mt.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class ve {
      constructor(tt, et) {
        this.open = et, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = Me(tt), this.layer = document.createElement("div");
        const {
          style: Vt
        } = this.layer;
        Vt.position = "relative", Vt.isolation = "isolate", Vt.overflow = "hidden", Vt.width = "100%", Vt.height = "100%", Vt.pointerEvents = "none", tt.appendChild(this.layer)
      }
      show(tt) {
        this.view = tt, this.place()
      }
      resize(tt, et) {
        this.size = [tt, et], this.place()
      }
      close() {
        for (const tt of this.figures) tt.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: tt,
          shown: et
        } = this.view;
        for (const Ot of this.figures.splice(tt.length)) Ot.close();
        const {
          size: Vt
        } = this;
        tt.forEach(((Ot, qt) => {
          var Dt;
          const mt = function(tt, et, Vt, Ot) {
            let [qt, Dt] = Ot;
            const mt = (tt + .5) * qt / et,
              dt = Math.min(Math.max(qt / et, 2 * Vt * Dt), 2 * Math.max(mt, qt - mt));
            return {
              left: mt - dt / 2,
              width: dt
            }
          }(qt, tt.length, function(tt) {
            let {
              animation: et,
              size: Vt
            } = tt;
            const {
              aimed: Ot,
              ready: qt
            } = Ke;
            return (ye(et) === Qe.gunAimed ? Ot : qt) * Vt
          }(Ot), Vt);
          this.figures[qt] ??= new he(this.open, this.layer, mt, Vt), this.figures[qt].update(Ot, null !== (Dt = et[qt]) && void 0 !== Dt && Dt, function(tt, et) {
            return String(Math.round(1e3 * tt) + et)
          }(Ot.size, qt), mt, Vt)
        }))
      }
    }
    const We = {
      player: At,
      store: it
    };
    class Se {
      constructor(tt) {
        this.page = tt
      }
      async openMob(tt) {
        return new be(await this.open(tt, Ut), Ce)
      }
      async openPet(tt) {
        return new be(await this.open(tt, Ut), ue)
      }
      openMobLineup(tt) {
        return new ve(tt, ((tt, et, Vt) => this.page.openPreview(Ut, tt, et, Vt)))
      }
      async openCharacter(tt, et) {
        return new Je(await this.open(tt, We[et]))
      }
      async open(tt, et) {
        const [Vt, Ot] = Me(tt), qt = await this.page.openPreview(et, Vt, Ot);
        return ae(tt, qt), qt
      }
    }
  },
  36990: (tt, et, Vt) => {
    Vt.d(et, {
      B: () => Nt,
      d: () => Ot,
      f: () => qt,
      g: () => lt,
      i: () => yt,
      k: () => Xt,
      n: () => Mt,
      q: () => jt,
      t: () => Ht,
      v: () => Et,
      y: () => ft,
      z: () => wt
    });
    const Ot = [{
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

    function qt(tt, et) {
      const {
        numLines: Vt,
        charsPerLine: qt
      } = Ot[et];
      return bt(tt, Vt, qt, !1)
    }
    const Dt = 7 / 8,
      mt = .25,
      dt = 8;

    function jt(tt, et) {
      return {
        width: Math.min(tt, dt) - 2 * mt,
        height: Math.min(et, dt) - 2 * mt
      }
    }

    function Ht(tt, et, Vt) {
      const qt = jt(tt, et),
        {
          numLines: mt,
          charsPerLine: dt
        } = Ot[Vt];
      return {
        numLines: Math.max(1, Math.floor(mt / Dt * qt.height)),
        charsPerLine: Math.max(1, Math.floor(dt * qt.width))
      }
    }

    function Xt(tt, et, Vt, Ot) {
      const {
        numLines: qt,
        charsPerLine: Dt
      } = Ht(Vt, Ot, et);
      return bt(tt, qt, Dt, !1)
    }
    const Qt = 32e3;

    function lt(tt) {
      return tt.slice(0, Qt)
    }
    const Et = 512e3,
      ft = 64,
      wt = Et;

    function yt(tt, et) {
      const Vt = Math.max(0, wt - et),
        Ot = Math.min(Et, Vt);
      return tt.slice(0, Ot)
    }
    const Nt = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      td: {
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

    function Mt(tt, et) {
      const {
        numLines: Vt,
        charsPerLine: Ot
      } = Nt[et];
      return bt(tt, Vt, Ot, !1)
    }

    function bt(tt, et, Vt, Ot, qt) {
      (qt || Ot) && (tt = tt.slice(0, null !== qt && void 0 !== qt ? qt : et * Vt));
      const Dt = tt.split("\n");
      if (Dt.length > et && Dt.splice(et, Dt.length - et), !Ot)
        for (let mt = 0; mt < Dt.length; mt++) {
          const tt = Dt[mt];
          tt.length > Vt && (Dt[mt] = tt.substring(0, Vt), Dt.length < et && Dt.splice(mt + 1, 0, tt.substring(Vt)))
        }
      return Dt.join("\n")
    }
  },
  51269: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/builtInAnimations.anim.38e056f49512e10b7206.gz"
  },
  51273: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);