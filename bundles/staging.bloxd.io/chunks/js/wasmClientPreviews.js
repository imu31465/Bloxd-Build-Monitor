export const id = 59;
export const ids = [59];
export const modules = {
  38730: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Am,
      g: () => am
    });
    const hm = new WeakMap;

    function Am(mm, Tm) {
      return hm.set(mm, Tm), mm
    }

    function am(mm) {
      var Tm;
      return null !== (Tm = hm.get(mm)) && void 0 !== Tm ? Tm : null
    }
  },
  38750: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => wm
    });
    var hm = fm(1235);

    function Am(mm) {
      const Tm = /(\d*\.?\d+)px/.exec(mm);
      return Tm ? Number(Tm[1]) : null
    }

    function am(mm) {
      return mm.split(/[\s,]+/).pop()
    }
    let xm = !1;
    const wm = {
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
      drawText: function(mm, Tm, hm, wm, Dm, im) {
        if (Dm <= 0 || im <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: Rm,
          fontVariant: pm,
          fontWeight: Em,
          fontSize: om,
          font: Om
        } = this, Ym = [Rm, pm, Em, `${om}px`, Om].filter(Boolean).join(" "), qm = [
          [Em, `${om}px`, am(Om)].filter(Boolean).join(" "), `${om}px sans-serif`
        ], jm = mm.font, Vm = function(mm, Tm, fm) {
          for (const hm of Tm) {
            mm.font = hm;
            const Tm = Am(mm.font),
              xm = am(hm);
            if (null !== Tm && Math.abs(Tm - fm) <= .5 && mm.font.toLowerCase().includes(xm.toLowerCase())) return hm
          }
          return null
        }(mm, [Ym, ...qm], om);
        Vm !== Ym && function(mm, Tm, hm) {
          xm || (xm = !0, Promise.resolve().then((() => fm(1103))).then((fm => {
            let {
              lY: Am
            } = fm;
            Am(new Error("A canvas didn't take canvasTxt's font"), {
              font: mm,
              mO: Tm,
              drawnWith: null !== hm && void 0 !== hm ? hm : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(Ym, jm, Vm);
        const Im = Am(mm.font);
        if (null === Vm && null !== Im && Im > 0) {
          const fm = om / Im;
          mm.save();
          try {
            return mm.scale(fm, fm), {
              height: this.drawLines(mm, Tm, hm / fm, wm / fm, Dm / fm, im / fm, Im).height * fm
            }
          } finally {
            mm.restore()
          }
        }
        return this.drawLines(mm, Tm, hm, wm, Dm, im, om)
      },
      drawLines: function(mm, Tm, fm, Am, am, xm, wm) {
        const Dm = fm + am,
          im = Am + xm;
        let Rm, pm = Am + xm / 2 + wm / 2;
        "right" === this.align ? (Rm = Dm, mm.textAlign = "right") : "left" === this.align ? (Rm = fm, mm.textAlign = "left") : (Rm = fm + am / 2, mm.textAlign = "center");
        for (const hm of Tm) {
          mm.measureText(hm).width >= am && (Tm = Tm.replace(hm, ""))
        }
        Tm = (0, hm.M)(Tm);
        const Em = [],
          om = Tm.split("\n"),
          Om = this.justify ? mm.measureText("\u200a").width : 0;
        om.forEach((Tm => {
          let fm = mm.measureText(Tm).width;
          if (fm <= am) Em.push(Tm);
          else {
            let hm = Tm;
            const Am = am;
            let xm, wm, Dm;
            for (fm = mm.measureText(hm).width; fm > Am;) {
              for (xm = 0, wm = 0, Dm = ""; wm < Am;) xm++, Dm = hm.substr(0, xm), wm = mm.measureText(Dm).width;
              xm--, Dm = Dm.substr(0, xm);
              const Tm = xm;
              if (" " !== hm.substr(xm, 1)) {
                for (;
                  " " !== hm.substr(xm, 1) && 0 !== xm;) xm--;
                0 === xm && (xm = Tm), Dm = hm.substr(0, xm)
              }
              Dm = this.justify ? this.justifyLine(mm, Dm, Om, "\u200a", am) : Dm, hm = hm.substr(xm), fm = mm.measureText(hm).width, Em.push(Dm)
            }
            fm > 0 && Em.push(hm)
          }
        }));
        const Ym = this.lineHeight ? this.lineHeight : this.getTextHeight(mm, Tm),
          qm = Ym * (Em.length - 1),
          jm = qm / 2;
        let Vm = Am;
        "top" === this.vAlign ? pm = Am + wm : "bottom" === this.vAlign ? (pm = im - qm, Vm = im) : (Vm = Am + xm / 2, pm -= jm), Em.forEach((Tm => {
          Tm = Tm.trim(), mm.fillText(Tm, Rm, pm), pm += Ym
        })), this.debug && (mm.lineWidth = 3, mm.strokeStyle = "#00909e", mm.strokeRect(fm, Am, am, xm), mm.lineWidth = 2, mm.strokeStyle = "#f6d743", mm.beginPath(), mm.moveTo(Rm, Am), mm.lineTo(Rm, im), mm.stroke(), mm.strokeStyle = "#ff6363", mm.beginPath(), mm.moveTo(fm, Vm), mm.lineTo(Dm, Vm), mm.stroke());
        return {
          height: qm + Ym
        }
      },
      getTextHeight: function(mm, Tm) {
        const fm = mm.textBaseline;
        mm.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: hm
        } = mm.measureText(Tm);
        return mm.textBaseline = fm, hm
      },
      justifyLine: function(mm, Tm, fm, hm, Am) {
        const am = Tm.trim(),
          xm = mm.measureText(am).width,
          wm = am.split(/\s+/).length - 1,
          Dm = Math.floor((Am - xm) / fm);
        if (wm <= 0 || Dm <= 0) return am;
        const im = Math.floor(Dm / wm);
        let Rm = Dm - wm * im,
          pm = [];
        for (let Em = 0; Em < im; Em++) pm.push(hm);
        pm = pm.join("");
        return am.replace(/\s+/g, (mm => {
          const Tm = Rm > 0 ? pm + hm : pm;
          return Rm--, mm + Tm
        }))
      }
    }
  },
  38756: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Ym,
      g: () => Om,
      j: () => Em,
      l: () => Rm,
      p: () => pm
    });
    var hm = fm(4171),
      Am = fm(354);
    const am = 1024,
      xm = 1536,
      wm = 2 * hm.n + 1,
      Dm = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      im = 1.5;

    function Rm(mm, Tm, fm) {
      if ("string" !== typeof mm) return Tm;
      try {
        const fm = JSON.parse(mm);
        return fm && "object" === typeof fm ? fm : Tm
      } catch (hm) {
        return void 0 !== fm && console.error(`Couldn't parse ${fm}`, hm), Tm
      }
    }

    function pm(mm) {
      return Rm(mm, null, "a leaderboard's rows")
    }

    function Em(mm, Tm) {
      var fm, hm;
      return null !== Tm && void 0 !== Tm ? Tm : {
        status: null !== (fm = mm.status) && void 0 !== fm ? fm : "loading",
        entries: null !== (hm = mm.entries) && void 0 !== hm ? hm : []
      }
    }

    function om(mm, Tm) {
      return "number" === typeof mm && Number.isFinite(mm) && mm > 0 ? mm : Tm
    }

    function Om(mm, Tm) {
      const fm = om(mm.size, 1);
      let hm = om(mm.width, om(2.5 * fm, 2.5)),
        Am = om(mm.height, om(3.75 * fm, 3.75));
      Number.isFinite(am * Am / hm) && Number.isFinite(xm * hm / Am) || (hm = 2.5, Am = 3.75);
      const wm = Am / hm,
        Dm = Math.max(1, Math.min(am, Tm / wm));
      return {
        width: hm,
        height: Am,
        layoutWidth: Math.max(am, xm / wm),
        layoutHeight: Math.max(xm, am * wm),
        pixelWidth: Math.round(Dm),
        pixelHeight: Math.round(Math.max(1, Math.min(Tm, Dm * wm)))
      }
    }

    function Ym(mm, Tm, fm, xm, Rm, pm) {
      mm.setTransform(1, 0, 0, 1, 0, 0), mm.fillStyle = Am.J.defaultNameTagBackground, mm.fillRect(0, 0, Tm, fm), mm.scale(Tm / xm.layoutWidth, fm / xm.layoutHeight), mm.translate((xm.layoutWidth - am) / 2, 0),
        function(mm, Tm, fm, am) {
          var xm, Rm, pm, Em;
          const {
            top: om,
            around: Om,
            showPlayerText: Ym,
            localPlayerDbId: Vm
          } = fm, {
            whiteUiText: Im,
            grayUiText: Km,
            yellowUiText: Qm
          } = Am.J;
          mm.textBaseline = "middle";
          const nm = function(Tm, fm, hm, Am, am, xm) {
              let wm = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              mm.font = `bold ${Am}px 'Jetbrains Mono', monospace`, mm.fillStyle = am, mm.textAlign = wm;
              let Dm = Tm.replace(/[\r\n\t]/g, " ");
              if (mm.measureText(Dm).width > xm) {
                for (; Dm.length > 0 && mm.measureText(`${Dm}\u2026`).width > xm;) Dm = Dm.slice(0, -1);
                Dm += "\u2026"
              }
              mm.fillText(Dm, fm, hm)
            },
            Jm = Tm => {
              mm.fillStyle = Im, mm.globalAlpha = .15, mm.fillRect(24, Tm, 976, 2), mm.globalAlpha = 1
            },
            cm = null === Vm ? null : (0, Am.jc)(Vm),
            zm = mm => null !== cm && mm.playerHash === cm,
            Zm = qm(om.entries, hm.r),
            km = "ready" === om.status && Zm.length > 0,
            bm = null === Om ? [] : qm(Om.entries, wm),
            Sm = Zm.some(zm),
            em = null === Om ? null : function(mm) {
              const Tm = mm;
              if (!Tm || !Number.isFinite(Tm.rank) || !Number.isFinite(Tm.tied) || !Number.isFinite(Tm.total)) return null;
              return Tm
            }(Om.standing),
            Nm = bm.find(zm),
            Gm = Zm.find(zm),
            Xm = null === em || void 0 === Nm ? null : {
              value: Nm.value,
              rank: em.rank
            },
            Pm = jm(Zm, void 0 === Gm || Gm.value === (null === Xm || void 0 === Xm ? void 0 : Xm.value) ? Xm : null),
            Hm = jm(bm, Xm),
            ym = (mm, Tm) => {
              const fm = mm.findIndex(zm);
              return fm >= 0 ? Tm[fm] : null
            },
            Cm = null !== (xm = null !== (Rm = null === em || void 0 === em ? void 0 : em.rank) && void 0 !== Rm ? Rm : ym(bm, Hm)) && void 0 !== xm ? xm : ym(Zm, Pm);
          mm.font = "bold 34px 'Jetbrains Mono', monospace";
          const rm = [...km ? Pm : [], ...Sm ? [] : Hm],
            sm = Math.min(280, Math.max(0, ...rm.map((Tm => mm.measureText(Dm.format(Tm)).width)))),
            lm = sm <= 80,
            Mm = lm ? 80 : 32 + sm,
            um = lm ? 148 : Mm + 28,
            Bm = 660 - um;
          nm(`TOP ${hm.r}  /  ALL TIME`, 24, 52, 28, Km, 976), nm(Ym ? String(null !== (pm = Tm.title) && void 0 !== pm ? pm : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, Im, 976), nm("RANK", 32, 174, 28, Km, um - 40), nm("PLAYER", um, 174, 28, Km, Bm), nm(Ym ? String(null !== (Em = Tm.scoreLabel) && void 0 !== Em ? Em : "Score").slice(0, 24) : "Score", 992, 174, 28, Km, 304, "right"), Jm(202);
          const Lm = (am - 232) / (hm.r + im + wm),
            tm = 208 + hm.r * Lm,
            Um = tm + im * Lm,
            dm = (Tm, fm, hm, Am) => {
              const am = zm(Tm);
              mm.fillStyle = am ? Qm : Im, mm.globalAlpha = am ? .15 : Am ? .035 : 0, mm.fillRect(24, hm - Lm / 2 + 1, 976, Lm - 2), mm.globalAlpha = 1;
              const xm = am ? Qm : Im;
              nm(Dm.format(fm), Mm, hm, 34, xm, lm ? 80 : sm, lm ? "center" : "right"), nm(Ym ? String(Tm.name).slice(0, 64) : "Player", um, hm, 34, xm, Bm);
              const wm = Dm.format(Tm.value);
              nm(mm.measureText(wm).width > 304 ? Tm.value.toExponential(6) : wm, 992, hm, 34, xm, 304, "right")
            };
          if (km)
            for (const [hm, Am] of Zm.entries()) dm(Am, Pm[hm], 208 + (hm + .5) * Lm, hm % 2 === 0);
          else {
            const mm = "error" === om.status,
              Tm = mm ? "Couldn't load leaderboard" : "ready" === om.status ? "No scores yet" : "Loading leaderboard\u2026",
              fm = mm ? "Trying again shortly" : "ready" === om.status ? "Be the first on the board!" : "Fetching the top players",
              hm = (208 + tm) / 2;
            nm(Tm, 512, hm - 28, 40, mm ? Am.J.redUiText : Im, 960, "center"), nm(fm, 512, hm + 27, 30, Km, 960, "center")
          }
          const gm = tm + im * Lm / 2;
          if (null === Cm) Jm(gm);
          else {
            const Tm = null === em ? 0 : em.tied - 1,
              fm = `YOUR RANK #${Dm.format(Cm)}${null===em?"":` of ${Dm.format(em.total)}`}`;
            mm.font = "bold 36px 'Jetbrains Mono', monospace";
            const hm = Math.max(20, Math.min(36, Math.floor(34560 / mm.measureText(fm).width)));
            nm(fm, 512, gm - (Tm > 0 ? 15 : 0), hm, Qm, 960, "center"), Tm > 0 && nm(`Tied with ${Dm.format(Tm)} other${1===Tm?"":"s"}`, 512, gm + 24, 24, Km, 960, "center")
          }
          if (null === Om) return;
          const Wm = Um + wm * Lm / 2;
          if (Sm) nm(`You're in the top ${hm.r}!`, 512, Wm, 40, Qm, 960, "center");
          else if (0 === bm.length) nm("You're not on this board yet", 512, Wm, 34, Km, 960, "center");
          else
            for (const [hm, Am] of bm.entries()) dm(Am, Hm[hm], Um + (hm + .5) * Lm, hm % 2 === 0)
        }(mm, Rm, pm, xm.layoutHeight)
    }

    function qm(mm, Tm) {
      return Array.isArray(mm) ? mm.slice(0, Tm).filter((mm => mm && Number.isFinite(mm.rank) && Number.isFinite(mm.value))) : []
    }

    function jm(mm, Tm) {
      const fm = [];
      let hm = !1;
      return mm.forEach(((Am, am) => {
        if (null !== Tm && Am.value === Tm.value) return void fm.push(Tm.rank);
        const xm = am > 0 && Am.value === mm[am - 1].value;
        xm || (hm = 0 === am && 1 !== Am.rank), fm.push(xm && !hm ? fm[am - 1] : Am.rank)
      })), fm
    }
  },
  38972: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Am,
      g: () => am
    });
    const hm = 32;

    function Am(mm) {
      return Array.from(mm).length
    }

    function am(mm) {
      const Tm = [""];
      let fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Am = "";
      const am = () => {
        Tm.push(""), fm = 0, Am = ""
      };
      for (const xm of mm.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(xm)) am();
        else if (/^\s+$/.test(xm)) Am += xm;
      else if (xm.length > 0) {
        const mm = Array.from(xm);
        fm > 0 && fm + Am.length + mm.length > hm && am(), Tm[Tm.length - 1] += Am, fm += Am.length, Am = "";
        for (const Am of mm) fm >= hm && am(), Tm[Tm.length - 1] += Am, fm++
      }
      return Tm[Tm.length - 1] += Am, Tm
    }
  },
  50960: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      WasmPreviewHost: () => kT,
      pageBuiltInAnimationPack: () => Em,
      pagePreviews: () => xT,
      previewModule: () => gm
    });
    var hm = fm(2876),
      Am = fm(658);
    const am = "[bloxd-wasm-client]";

    function xm(mm) {
      const Tm = {
        wasm: "unknown",
        client: String(Am.d)
      };
      try {
        var fm;
        Tm.wasm = null !== (fm = null === mm || void 0 === mm ? void 0 : mm.Xp()) && void 0 !== fm ? fm : Tm.wasm
      } catch {}
      return Tm
    }
    async function wm(mm) {
      if (mm.length < 2 || 31 !== mm[0] || 139 !== mm[1]) return mm;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: Tm
        } = await Promise.resolve().then((() => fm(2826)));
        return Tm(mm)
      }
      const Tm = new Blob([mm]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(Tm).arrayBuffer())
    }

    function Dm(mm, Tm, hm, Am) {
      Promise.resolve().then((() => fm(40821))).then((fm => {
        let {
          reportDataLoadFailure: am
        } = fm;
        am(mm, Tm, hm, Am)
      }), (Tm => {
        console.warn(`${am} ${mm} didn't load, and the report couldn't be sent`, hm.error, Tm)
      }))
    }
    const im = [3e4, 12e4, 3e5];
    class Rm {
      constructor(mm) {
        this.deps = mm, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((mm => {
          this.resolveSet = mm
        }))
      }
      provide(mm) {
        return this.loading ??= this.load(mm), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(mm) {
        const Tm = xm(mm),
          fm = await async function(mm, Tm) {
            let fm;
            try {
              fm = await mm()
            } catch (hm) {
              return {
                stage: "fetch",
                error: hm
              }
            }
            try {
              return Tm(fm) ? null : {
                stage: "decode",
                error: null
              }
            } catch (hm) {
              return {
                stage: "decode",
                error: hm
              }
            }
          }((() => this.deps.fetch()), (Tm => {
            const fm = mm.oam(Tm);
            return fm && this.resolveSet(Tm), fm
          }));
        if (null !== fm) {
          if ("fetch" === fm.stage) {
            this.loading = null;
            const Tm = im[this.retries++];
            void 0 !== Tm && this.deps.later((() => {
              this.provide(mm)
            }), Tm)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(fm, Tm))
        }
      }
    }
    let pm = null;

    function Em() {
      return pm ??= new Rm({
        fetch: async () => wm(await (0, hm.I)(om(), {
          priority: "low"
        })),
        onFailed: (mm, Tm) => {
          Dm("builtInAnimations", om(), mm, Tm)
        },
        later: (mm, Tm) => {
          setTimeout(mm, Tm)
        }
      }), pm
    }

    function om() {
      return fm(50962)
    }
    var Om = fm(2873),
      Ym = fm(1214),
      qm = fm(336),
      jm = fm(330),
      Vm = fm(675),
      Im = fm(4732),
      Km = fm(40793),
      Qm = fm(41019),
      nm = (fm(40848), fm(40864)),
      Jm = fm(40866),
      cm = fm(40870),
      zm = fm(40807),
      Zm = fm(41032),
      km = fm(41039),
      bm = fm(40790),
      Sm = fm(41052),
      em = fm(40928),
      Nm = fm(40913),
      Gm = fm(40971),
      Xm = fm(41024),
      Pm = fm(42637),
      Hm = fm(36363),
      ym = fm(3696);
    const Cm = "[bloxd-previews]",
      rm = 4e5,
      sm = 0,
      lm = 1,
      Mm = 2,
      um = 1,
      Bm = 2,
      Lm = 3,
      tm = 0,
      Um = 1,
      dm = 2;

    function gm(mm) {
      const Tm = mm,
        fm = (0, Km.L)(mm),
        hm = (0, Km.k)(mm);
      return null !== fm && null !== hm && "function" === typeof Tm.Ram && "function" === typeof Tm.pam && "function" === typeof Tm.Eam ? Tm : null
    }

    function Wm(mm, Tm, fm) {
      let [hm, Am] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [mm, Tm], am = Math.min(Number.isFinite(fm) && fm > 0 ? fm : 1, 2);
      const xm = Math.max(0, hm, mm) * Math.max(0, Am, Tm) * am * am;
      return xm > rm && (am *= Math.sqrt(rm / xm)), [Math.max(1, Math.floor(Math.max(0, mm) * am)), Math.max(1, Math.floor(Math.max(0, Tm) * am))]
    }

    function Fm() {
      return fm(50964)
    }
    async function mT(mm, Tm, hm) {
      let Am = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      "lost" === mm && (0, bm.D)();
      const am = await (0, bm.X)();
      if (null === am || (0, Km.o)(am) || (0, bm.e)()) return;
      const wm = "webgpu" === am.backend;
      if (!wm && "lost" !== mm) return;
      const Dm = wm && (0, jm.m)(am.adapter, null !== hm && void 0 !== hm ? hm : null, "lost" === mm, Am),
        im = wm ? (0, Km.W)(mm) : null;
      if (null === im) {
        wm || (0, Vm.u)(), (0, bm.t)();
        try {
          await async function(mm, Tm, hm, Am, am) {
            let {
              restoreLost: wm,
              adapterRemembered: Dm
            } = am;
            const im = (0, Om.U)(),
              {
                flushCrashReports: Rm,
                reportRenderReload: pm
              } = await Promise.resolve().then((() => fm(40821)));
            pm(mm.backend, Am, xm(im ? (0, Om.D)() : null), {
              from: "home",
              cause: Tm,
              restoreLost: wm,
              adapterRemembered: Dm,
              ...TT(mm, Tm, hm)
            }), await Rm(em.c)
          }(am, mm, Tm, null !== hm && void 0 !== hm ? hm : "start_failed" === mm ? 0 : 1, {
            restoreLost: Am,
            adapterRemembered: Dm
          })
        } catch (pm) {
          console.warn(`${Cm} ${am.backend} failed at home (${mm}), and its report couldn't be sent`, pm)
        }(0, em.h)()
      } else {
        var Rm;
        const hm = TT(am, mm, Tm),
          Am = `WebGPU failed at home (${mm}${void 0===hm.error?"":`: ${hm.error instanceof Error?hm.error.message:(0,Hm.l)(hm.error)}`}) and ${im}`;
        console.warn(`${Cm} ${Am}: the previews stop`, null !== (Rm = hm.error) && void 0 !== Rm ? Rm : ""), (0, bm.x)(Am);
        try {
          const {
            countRenderLost: Tm
          } = await Promise.resolve().then((() => fm(40821)));
          Tm(mm, hm.error, hm.context)
        } catch (Em) {
          console.warn(`${Cm} WebGPU failed at home (${mm}), and its count couldn't be sent`, Em)
        }
      }
    }

    function TT(mm, Tm, fm) {
      var hm;
      let {
        adapter: Am
      } = mm;
      const am = (0, Om.U)();
      return {
        error: "lost" === Tm && null !== (hm = (0, Km.Z)(am ? (0, Km.L)((0, Om.D)()) : null)) && void 0 !== hm ? hm : fm,
        context: {
          adapter: Am,
          boundAtMs: "start_failed" === Tm ? null : (0, bm.S)(),
          indirectHangs: (0, bm.H)(),
          restoresSkipped: (0, bm.T)()
        }
      }
    }
    async function fT() {
      if (!(0, Om.U)()) {
        const mm = await (0, bm.X)();
        if (null === mm || (0, Km.o)(mm)) return null;
        if (await (0, Sm.e)(await mm.load()), !(0, Om.U)()) return null
      }
      return gm((0, Om.D)())
    }
    class hT {
      constructor(mm, Tm, fm, hm, Am, am) {
        this.page = mm, this.host = Tm, this.id = fm, this.canvas = hm, this.size = Am, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const xm = {
            ...am.images,
            glbUrl: mm => {
              var Tm;
              return null !== (Tm = this.models.drawnUrl(mm)) && void 0 !== Tm ? Tm : am.images.glbUrl(mm)
            }
          },
          wm = Tm => mm.modelFile(Tm);
        this.images = new Qm.e(xm, (mm => {
          console.warn(`${Cm} image ${mm.key.kind}:${mm.key.index}:${mm.key.word} failed`, mm.error)
        }), {
          fetchFile: wm,
          fetchImage: Tm => mm.imageFile(Tm)
        }), mm.startModels(), this.models = new nm.i(am.files, ((Tm, fm) => mm.buildModel(Tm, fm)), (mm => {
          console.warn(`${Cm} model file ${mm.file} (${mm.url}) failed`, mm.error)
        }), {
          fetchFile: wm,
          onWritten: (mm, Tm) => {
            this.images.glbWritten(mm, Tm)
          },
          onTaken: (mm, Tm) => {
            this.images.glbTaken(mm, Tm)
          }
        }), this.write = (mm, Tm, fm) => {
          if (this.closed) return !0;
          if (mm === nm.b) {
            const mm = new DataView(fm.buffer, fm.byteOffset, cm.d),
              hm = mm.getUint32(0, !0),
              Am = mm.getUint32(cm.g, !0),
              am = this.page.hostCall(dm, (() => this.host.cxm(this.id, hm, Tm, fm.subarray(cm.d))));
            return this.outcomes.push([Am, am]), !0
          }
          return mm === Qm.b && (this.page.hostCall(void 0, (() => {
            this.host.Zxm(this.id, fm)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(mm, Tm, fm) {
        if (this.closed) return;
        const [hm, Am] = Wm(mm, Tm, this.page.dpr(), fm);
        hm === this.size[0] && Am === this.size[1] || (this.size = [hm, Am], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, hm, Am)
        })))
      }
      setMob(mm, Tm, fm, hm) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Nxm(this.id, mm, Tm, fm, hm))))
      }
      setPet(mm, Tm, fm, hm) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Xxm(this.id, mm, Tm, fm, hm))))
      }
      setPlayer(mm, Tm, fm) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.bxm(this.id, mm, Tm, fm))))
      }
      setFigure(mm, Tm, fm, hm) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Sxm(this.id, mm, Tm, fm, hm))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const mm = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === mm || mm.length < 3 ? null : {
          alpha: mm[0],
          beta: mm[1],
          radius: mm[2]
        }
      }
      setOrbit(mm) {
        let {
          alpha: Tm,
          beta: fm,
          radius: hm
        } = mm;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.Gxm(this.id, Tm, fm, hm)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((mm => {
          this.settled.push(mm)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, Zm.j)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [mm, Tm] of this.outcomes) {
          const fm = Tm === tm ? [] : [Tm === Um ? mm : (mm | nm.f) >>> 0];
          this.models.taken(mm, fm)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(mm) {
        let Tm = !1;
        if (mm) {
          const mm = this.host.Cxm(this.id);
          for (const Tm of mm) this.models.request(Tm);
          const fm = this.host.yxm(this.id);
          fm.length > 0 && this.images.onEvent(fm), Tm = mm.length > 0 || fm.length > 0
        }
        const fm = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          hm = Tm || fm > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = hm ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(mm) {
        this.page.hostCall(void 0, (() => {
          const Tm = this.host.close(this.id);
          Tm.length > 0 && this.images.onEvent(Tm), this.page.isTrapped || mm.Eam(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const mm = this.settled;
        this.settled = [];
        for (const Tm of mm) Tm()
      }
    }
    class AT {
      constructor(mm) {
        this.deps = mm, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: mm => {
            this.modelsFailed(mm)
          },
          onDecoderFailed: mm => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${Cm} the Draco decoder didn't load: models waiting on it won't draw`, mm))
          },
          onWorkerLost: mm => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${Cm} a model worker was lost: ${mm}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.KO = {
          setShaderPack: (mm, Tm, fm, hm, Am) => (this.shaderPackArgs = [mm, Tm, fm, hm, Am], this.handOverShaderPack(), !0)
        }, this.frame = mm => {
          this.frameId = null;
          const Tm = this.host;
          if (null !== Tm && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(Tm, mm)
          } catch (fm) {
            if (!this.stopIfTrapped(fm) && (this.stop(), (0, Km.p)(fm))) return void this.deps.onRenderFailed("frames_refused", fm);
            console.warn(`${Cm} the previews stopped: their frame threw`, fm)
          }
        }, mm.pack.onChange((() => {
          this.packChanged()
        })), mm.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const mm of this.previews.values()) mm.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var mm, Tm;
        return null !== (mm = null === (Tm = this.host) || void 0 === Tm ? void 0 : Tm.attached()) && void 0 !== mm && mm
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((mm, Tm) => mm + Tm), 0) / this.costs.length
      }
      async bindSession(mm, Tm, fm) {
        const hm = this.binding,
          Am = this.sessionEnds;
        try {
          const am = this.hostOf(mm);
          if (!am.zxm()) {
            const Tm = (0, Gm.e)().sampleCount,
              xm = await fm(Tm);
            if (this.sessionEnds !== Am) return this.keepRendererOfEndedSession(mm, am, xm, Tm, hm), Tm;
            if (!am.ixm(xm)) throw new Error("the page has a renderer already");
            (0, bm.z)(performance.now()), this.samples = Tm, (0, Xm.d)((0, Km.k)(mm))
          }
          if (!am.attach(Tm)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === hm && this.endBinding()
        }
      }
      keepRendererOfEndedSession(mm, Tm, fm, hm, Am) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== Am) try {
          fm.free()
        } catch (am) {
          console.warn(`${Cm} an ended session's renderer didn't free`, am)
        } else Tm.ixm(fm) && ((0, bm.z)(performance.now()), this.samples = hm, (0, Xm.d)(this.registryOf(mm)))
      }
      async beginSession() {
        var mm;
        let Tm = () => {};
        const fm = new Promise((mm => {
          Tm = mm
        }));
        this.binding = {
          done: fm,
          release: Tm
        }, await (null === (mm = this.opening) || void 0 === mm ? void 0 : mm.catch((() => null)));
        const hm = this.pageCanvas;
        return this.pageCanvas = null, hm
      }
      endSession(mm) {
        var Tm, fm;
        if (this.sessionEnds++, this.lastEndReturned = mm, this.endBinding(), mm) {
          try {
            var hm;
            null === (hm = this.host) || void 0 === hm || hm.detach()
          } catch (Am) {
            return void console.warn(`${Cm} the session's core kept the page's renderer`, Am)
          }!0 === (null === (Tm = this.host) || void 0 === Tm ? void 0 : Tm.attached()) && console.warn(`${Cm} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (fm = this.host) || void 0 === fm ? void 0 : fm.zxm()) && (0, Xm.d)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var mm;
        null === (mm = this.binding) || void 0 === mm || mm.release(), this.binding = null
      }
      async openPreview(mm, Tm, fm, hm) {
        const Am = await this.renderingHost(),
          am = this.module;
        if (null === Am || null === am) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(Am), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(am)
        }));
        const xm = this.nextId++,
          wm = this.deps.createCanvas(),
          [Dm, im] = Wm(Tm, fm, this.deps.dpr(), hm);
        wm.width = Dm, wm.height = im;
        if (!this.guarded((() => (am.pam(xm, wm), Am.open(xm, Dm, im, mm))))) throw this.hostCall(void 0, (() => {
          am.Eam(xm)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const Rm = new hT(this, Am, xm, wm, [Dm, im], this.deps);
        return this.previews.set(xm, Rm), this.startFrames(), Rm
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, bm.e)() || null !== (0, bm.P)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((mm => {
          null === mm || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(mm) {
        return this.prefetchedOr(mm, this.deps.fetchModel)
      }
      imageFile(mm) {
        return this.prefetchedOr(mm, hm.I)
      }
      prefetchedOr(mm, Tm) {
        const fm = this.prefetchedFiles.get(mm);
        return void 0 === fm ? Tm(mm) : fm.catch((() => Tm(mm)))
      }
      async prefetchPlayerFiles() {
        const mm = this.deps.playerFile().then((mm => this.deps.files.url(mm))),
          Tm = await Promise.all([mm, this.deps.images.lifeformAtlasUrl(Zm.b)]).catch((() => null));
        if (null === Tm) return;
        const [fm, hm] = Tm, Am = (mm, Tm) => {
          if (null === mm) return;
          const fm = Tm(mm);
          this.prefetchedFiles.set(mm, fm), fm.catch((() => {
            this.prefetchedFiles.delete(mm)
          }))
        };
        Am(fm, (mm => this.modelFile(mm))), Am(hm, (mm => this.imageFile(mm)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((mm => (null === mm && (this.moduleLoad = null), mm)), (mm => {
          throw this.moduleLoad = null, mm
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((mm => {
          throw this.animationTable = null, mm
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((mm => (this.modelsFailed(mm), () => new Promise((() => {})))))
      }
      buildModel(mm, Tm) {
        return this.startModels(), this.models.then((fm => fm(mm, Tm))).then((mm => this.unavailable ? new Promise((() => {})) : mm))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(mm) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${Cm} the model workers didn't start: models won't draw in the previews`, mm))
      }
      called(mm) {
        return 0 !== mm && this.logError(mm, 0), mm
      }
      closePreview(mm) {
        this.previews.delete(mm.id), null !== this.module && mm.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(mm) {
        if (null !== this.module && this.module !== mm) throw new Error("a second renderer module on one page");
        return this.module = mm, null === this.host && (this.host = this.guarded((() => new mm.Ram)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: mm
        } = this;
        null !== mm && this.outsideCall("the game's start or end", (() => {
          mm.exm(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: mm,
          shaderPackArgs: Tm
        } = this;
        null !== mm && null !== Tm && this.outsideCall("the shader pack's hand-over", (() => {
          mm.Dhm(...Tm) || console.warn(`${Cm} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(mm, Tm) {
        try {
          this.hostCall(void 0, Tm)
        } catch (fm) {
          this.stop(), console.warn(`${Cm} the previews stopped: ${mm} threw`, fm)
        }
      }
      async loadAnimations(mm) {
        const Tm = xm(null),
          fm = this.module;
        try {
          Tm.wasm = null === fm ? Tm.wasm : this.hostCall(Tm.wasm, (() => fm.Xp()))
        } catch {}
        let hm, Am;
        try {
          hm = await this.fetchAnimationTable()
        } catch (am) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: am
          }, Tm)
        }
        if (!this.settleIfTrapped()) {
          try {
            Am = mm.kxm(hm)
          } catch (am) {
            if (this.stopIfTrapped(am)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: am
            }, Tm)
          }
          Am || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, Tm)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const mm = this.host;
        return null !== mm && this.guarded((() => mm.zxm())) ? mm : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var mm;
        const Tm = null !== (mm = this.module) && void 0 !== mm ? mm : await this.loadModule();
        if (null === Tm) return null;
        const fm = this.hostOf(Tm),
          hm = () => this.guarded((() => fm.zxm()));
        if (hm()) return fm;
        if (null !== (0, bm.P)() || (0, bm.e)()) return null;
        const Am = this.deps.createCanvas();
        Am.width = 1, Am.height = 1;
        const am = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const xm = (0, Gm.e)().sampleCount;
        let wm;
        try {
          wm = await (0, Km.v)(Tm, "previewRenderer", Am, xm, Pm.e, am)
        } catch (Dm) {
          throw Dm instanceof zm.e ? this.stopForTrap(Dm) : (0, Km.t)(Dm) && await this.deps.onRenderFailed("start_failed", Dm), Dm
        }
        return this.guarded((() => fm.ixm(wm))) ? ((0, bm.z)(performance.now()), this.samples = xm, this.pageCanvas = Am, (0, Xm.d)(this.registryOf(Tm)), fm) : hm() ? fm : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(mm, Tm) {
        for (const xm of this.previews.values()) xm.feed();
        if (this.stopped) return;
        const fm = this.deps.now(),
          hm = mm.frame(Tm);
        this.costs.push(this.deps.now() - fm), this.costs.length > 120 && this.costs.shift();
        const Am = 0 !== (256 & hm),
          am = 255 & hm;
        for (const xm of this.previews.values()) {
          if (this.stopped) return;
          xm.collect(Am)
        }
        if (!this.stopped) {
          if (0 !== (512 & hm) && this.deps.onDrew(), Am) {
            const Tm = mm.Hxm();
            for (let mm = 0; mm + 1 < Tm.length; mm += 2) Tm[mm] === Im.Q.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(Tm[mm], Tm[mm + 1])
          }
          if (am !== um) {
            if (am === Bm) return this.stop(), void this.deps.onFatal(mm.Qxm(), mm.nxm());
            if (am === Lm) return this.stop(), void console.warn(`${Cm} the previews stopped: the page's renderer went with its session`);
            (0, qm.d)(Tm), this.startFrames()
          } else {
            const Tm = mm.Jxm();
            this.stop();
            const fm = Tm[2] === Im.Wc.PIPELINE_FAILED ? "pipeline_failed" : "lost";
            this.deps.onRenderFailed(fm, void 0, Tm[1], Tm[2] === Im.Wc.RESTORE_LOST)
          }
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, zm.i)(this.module) || "failed" === (0, Om.A)())
      }
      hostCall(mm, Tm) {
        if (this.settleIfTrapped()) return mm;
        try {
          return Tm()
        } catch (fm) {
          if (this.stopIfTrapped(fm)) return mm;
          throw fm
        }
      }
      guarded(mm) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return mm()
        } catch (Tm) {
          throw this.stopIfTrapped(Tm), Tm
        }
      }
      registryOf(mm) {
        return {
          tfm: (Tm, fm) => {
            this.hostCall(void 0, (() => {
              mm.tfm(Tm, fm)
            }))
          },
          Ufm: Tm => {
            this.hostCall(void 0, (() => {
              mm.Ufm(Tm)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, Xm.d)(null)), !0)
      }
      stopIfTrapped(mm) {
        return !(null === this.module || !(0, zm.m)(this.module, mm)) && (this.stopForTrap(mm), !0)
      }
      stopForTrap(mm) {
        this.stop(), (0, Xm.d)(null), (0, ym.c)("previews", mm)
      }
      stop() {
        this.stopped = !0;
        for (const mm of this.previews.values()) mm.abandon()
      }
      logError(mm, Tm) {
        const fm = `${mm}:${Tm}`;
        this.loggedErrors.has(fm) || (this.loggedErrors.add(fm), console.warn(`${Cm} error ${mm} (detail ${Tm})`))
      }
    }
    let aT = null;

    function xT() {
      return aT ??= new AT(function() {
        const mm = (0, Jm.s)(Ym.clientSideServerUrls.staticUrl, {
          packUrl: mm => {
            var Tm, fm;
            return null !== (Tm = null === (fm = Zm.f.current) || void 0 === fm ? void 0 : fm.modelUrl(mm)) && void 0 !== Tm ? Tm : null
          }
        });
        return {
          loadModule: fT,
          startModels: async mm => {
            const {
              pageModelPool: Tm
            } = await fm.e(42).then((() => fm(51029))), {
              pool: hm
            } = Tm(mm);
            return (mm, Tm) => hm.build(mm, Tm)
          },
          fetchAnimations: async () => wm(await (0, hm.I)(Fm())),
          playerFile: async () => (await (0, Jm.p)()).PLAYER_FILE,
          onAnimationsFailed: (mm, Tm) => {
            Dm("previewAnimations", Fm(), mm, Tm)
          },
          provideBuiltInAnimationPack: mm => {
            Em().provide(mm)
          },
          openExtras: bm.K,
          files: mm,
          images: (0, Zm.l)((0, Qm.o)(mm.url), (() => Zm.f.current)),
          pack: Zm.f,
          game: km.d,
          fetchModel: mm => (0, Jm.l)(mm),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: mm => requestAnimationFrame(mm),
          cancelFrame: mm => {
            cancelAnimationFrame(mm)
          },
          onRenderFailed: mT,
          onFatal: (mm, Tm) => {
            console.error(`${Cm} the previews stopped: renderer error ${mm} (detail ${Tm})`)
          },
          onDeviceLost: () => {
            (0, bm.O)() === Nm.b.webgpu && jm.C.lost()
          },
          onDrew: () => {
            jm.C.drew()
          }
        }
      }()), aT
    }
    var wT = fm(645),
      DT = fm(38730),
      iT = fm(3301);
    const RT = {
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
    const pT = "[bloxd-previews]",
      ET = new Uint32Array(5);

    function oT(mm) {
      return wT.n.indexOf(mm)
    }
    const OT = new WeakSet;

    function YT(mm) {
      const Tm = (0, DT.g)(mm),
        fm = null === Tm ? -1 : qT(Tm);
      return -1 !== fm ? fm : (OT.has(mm) || (OT.add(mm), console.warn(`${pT} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function qT(mm) {
      var Tm;
      return null !== (Tm = RT[mm]) && void 0 !== Tm ? Tm : -1
    }

    function jT(mm, Tm) {
      const {
        canvas: fm
      } = Tm;
      fm.style.width = "100%", fm.style.height = "100%", fm.style.display = "block", mm.appendChild(fm)
    }

    function VT(mm) {
      const Tm = mm.getBoundingClientRect();
      return [Tm.width, Tm.height]
    }
    class IT {
      constructor(mm, Tm) {
        this.preview = mm, this.showView = Tm
      }
      show(mm) {
        this.showView(this.preview, mm)
      }
      resize(mm, Tm) {
        this.preview.resize(mm, Tm)
      }
      close() {
        this.preview.close()
      }
    }
    class KT {
      constructor(mm) {
        this.preview = mm, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(mm) {
          const {
            canvas: Tm
          } = mm;
          let fm = null;
          const hm = mm => {
              var hm;
              fm = {
                pointer: mm.pointerId,
                x: mm.clientX,
                y: mm.clientY
              }, null === (hm = Tm.setPointerCapture) || void 0 === hm || hm.call(Tm, mm.pointerId)
            },
            Am = Tm => {
              var hm;
              const Am = mm.orbit;
              if ((null === (hm = fm) || void 0 === hm ? void 0 : hm.pointer) !== Tm.pointerId || null === Am) return;
              const am = Tm.clientX - fm.x,
                xm = Tm.clientY - fm.y;
              fm = {
                ...fm,
                x: Tm.clientX,
                y: Tm.clientY
              }, mm.setOrbit({
                alpha: Am.alpha - .01 * am,
                beta: Math.min(Math.PI - .01, Math.max(.01, Am.beta - .01 * xm)),
                radius: Am.radius
              })
            },
            am = mm => {
              var Tm;
              (null === (Tm = fm) || void 0 === Tm ? void 0 : Tm.pointer) === mm.pointerId && (fm = null)
            },
            xm = Tm => {
              const fm = mm.orbit;
              if (null === fm) return;
              Tm.preventDefault();
              const hm = Tm.deltaY * (Tm.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : Tm.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                Am = Math.min(100, Math.max(5, fm.radius + .08 * hm));
              mm.setOrbit({
                ...fm,
                radius: Am
              })
            };
          return Tm.style.touchAction = "none", Tm.addEventListener("pointerdown", hm), Tm.addEventListener("pointermove", Am), Tm.addEventListener("pointerup", am), Tm.addEventListener("pointercancel", am), Tm.addEventListener("wheel", xm, {
            passive: !1
          }), () => {
            Tm.removeEventListener("pointerdown", hm), Tm.removeEventListener("pointermove", Am), Tm.removeEventListener("pointerup", am), Tm.removeEventListener("pointercancel", am), Tm.removeEventListener("wheel", xm)
          }
        }(mm), this.dev = {
          canvas: () => mm.canvas,
          isolateHead: () => {
            console.warn(`${pT} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = mm.untilSettled().then((() => {
          if (mm.isStopped) throw new Error(`${pT} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(mm, Tm) {
        this.cosmetics[mm] = Tm, this.apply()
      }
      playEmote(mm) {
        null === mm || mm !== this.emote ? (this.emote = mm, this.apply()) : this.preview.replay()
      }
      untilDrawn(mm) {
        return this.preview.untilSettled()
      }
      setOrbit(mm) {
        let {
          yaw: Tm,
          pitch: fm,
          radius: hm
        } = mm;
        const Am = this.preview.orbit;
        null !== Am && this.preview.setOrbit({
          alpha: Tm,
          beta: fm,
          radius: null !== hm && void 0 !== hm ? hm : Am.radius
        })
      }
      resetCamera() {}
      resize(mm, Tm) {
        this.preview.resize(mm, Tm)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var mm;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), ET, null === (mm = this.emote) ? -1 : qT(mm))
      }
    }

    function QT(mm, Tm) {
      let {
        mobType: fm,
        variation: hm,
        animation: Am
      } = Tm;
      mm.setMob(oT(fm), null !== hm && void 0 !== hm ? hm : "", 1, YT(Am))
    }

    function nT(mm, Tm) {
      let {
        mobType: fm,
        variation: hm,
        metaInfo: Am,
        tamed: am
      } = Tm;
      mm.setPet(oT(fm), hm, Am, am)
    }
    const JT = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class cT {
      constructor(mm, Tm, fm, hm) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, mm(fm.width, hm[1], hm).then((mm => {
          if (this.closed) return void mm.close();
          const {
            style: fm
          } = mm.canvas;
          fm.position = "absolute", fm.top = "0", fm.visibility = "hidden", jT(Tm, mm), this.preview = mm, this.apply()
        })).catch((mm => {
          console.error(`${pT} couldn't open a lineup figure`, mm)
        }))
      }
      update(mm, Tm, fm, hm, Am) {
        this.figure = mm, this.shown = Tm, this.order = fm, this.span = hm, this.lineup = Am, this.apply()
      }
      close() {
        var mm;
        this.closed = !0, null === (mm = this.preview) || void 0 === mm || mm.close(), this.preview = null
      }
      apply() {
        const {
          preview: mm,
          figure: Tm,
          lineup: fm
        } = this;
        if (null === mm || null === Tm) return;
        if (this.given !== Tm) {
          var hm;
          this.given = Tm, this.loaded = !1;
          const fm = null === Tm.zK ? 0 : null !== (hm = (0, iT.c)(Tm.zK)) && void 0 !== hm ? hm : 0;
          mm.setFigure(function(mm) {
            return JSON.stringify(Object.fromEntries(mm.cosmetics))
          }(Tm), fm, YT(Tm.animation), Tm.size), mm.untilSettled().then((() => {
            this.given === Tm && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: Am,
          width: am
        } = this.span;
        mm.resize(am, fm[1], fm);
        const {
          style: xm
        } = mm.canvas;
        xm.left = `${Am}px`, xm.width = `${am}px`, xm.zIndex = this.order, xm.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class zT {
      constructor(mm, Tm) {
        this.open = Tm, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = VT(mm), this.layer = document.createElement("div");
        const {
          style: fm
        } = this.layer;
        fm.position = "relative", fm.isolation = "isolate", fm.overflow = "hidden", fm.width = "100%", fm.height = "100%", fm.pointerEvents = "none", mm.appendChild(this.layer)
      }
      show(mm) {
        this.view = mm, this.place()
      }
      resize(mm, Tm) {
        this.size = [mm, Tm], this.place()
      }
      close() {
        for (const mm of this.figures) mm.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: mm,
          shown: Tm
        } = this.view;
        for (const hm of this.figures.splice(mm.length)) hm.close();
        const {
          size: fm
        } = this;
        mm.forEach(((hm, Am) => {
          var am;
          const xm = function(mm, Tm, fm, hm) {
            let [Am, am] = hm;
            const xm = (mm + .5) * Am / Tm,
              wm = Math.min(Math.max(Am / Tm, 2 * fm * am), 2 * Math.max(xm, Am - xm));
            return {
              left: xm - wm / 2,
              width: wm
            }
          }(Am, mm.length, function(mm) {
            let {
              animation: Tm,
              size: fm
            } = mm;
            const {
              aimed: hm,
              ready: Am
            } = JT;
            return (YT(Tm) === RT.gunAimed ? hm : Am) * fm
          }(hm), fm);
          this.figures[Am] ??= new cT(this.open, this.layer, xm, fm), this.figures[Am].update(hm, null !== (am = Tm[Am]) && void 0 !== am && am, function(mm, Tm) {
            return String(Math.round(1e3 * mm) + Tm)
          }(hm.size, Am), xm, fm)
        }))
      }
    }
    const ZT = {
      player: lm,
      store: Mm
    };
    class kT {
      constructor(mm) {
        this.page = mm
      }
      async openMob(mm) {
        return new IT(await this.open(mm, sm), QT)
      }
      async openPet(mm) {
        return new IT(await this.open(mm, sm), nT)
      }
      openMobLineup(mm) {
        return new zT(mm, ((mm, Tm, fm) => this.page.openPreview(sm, mm, Tm, fm)))
      }
      async openCharacter(mm, Tm) {
        return new KT(await this.open(mm, ZT[Tm]))
      }
      async open(mm, Tm) {
        const [fm, hm] = VT(mm), Am = await this.page.openPreview(Tm, fm, hm);
        return jT(mm, Am), Am
      }
    }
  },
  36836: (mm, Tm, fm) => {
    fm.d(Tm, {
      A: () => jm,
      b: () => hm,
      e: () => Am,
      h: () => Em,
      j: () => qm,
      m: () => Rm,
      q: () => Vm,
      s: () => Dm,
      u: () => im,
      v: () => om,
      w: () => Om,
      z: () => Ym
    });
    const hm = [{
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

    function Am(mm, Tm) {
      const {
        numLines: fm,
        charsPerLine: Am
      } = hm[Tm];
      return Im(mm, fm, Am, !1)
    }
    const am = 7 / 8,
      xm = .25,
      wm = 8;

    function Dm(mm, Tm) {
      return {
        width: Math.min(mm, wm) - 2 * xm,
        height: Math.min(Tm, wm) - 2 * xm
      }
    }

    function im(mm, Tm, fm) {
      const Am = Dm(mm, Tm),
        {
          numLines: xm,
          charsPerLine: wm
        } = hm[fm];
      return {
        numLines: Math.max(1, Math.floor(xm / am * Am.height)),
        charsPerLine: Math.max(1, Math.floor(wm * Am.width))
      }
    }

    function Rm(mm, Tm, fm, hm) {
      const {
        numLines: Am,
        charsPerLine: am
      } = im(fm, hm, Tm);
      return Im(mm, Am, am, !1)
    }
    const pm = 32e3;

    function Em(mm) {
      return mm.slice(0, pm)
    }
    const om = 512e3,
      Om = 64,
      Ym = om;

    function qm(mm, Tm) {
      const fm = Math.max(0, Ym - Tm),
        hm = Math.min(om, fm);
      return mm.slice(0, hm)
    }
    const jm = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      zi: {
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

    function Vm(mm, Tm) {
      const {
        numLines: fm,
        charsPerLine: hm
      } = jm[Tm];
      return Im(mm, fm, hm, !1)
    }

    function Im(mm, Tm, fm, hm, Am) {
      (Am || hm) && (mm = mm.slice(0, null !== Am && void 0 !== Am ? Am : Tm * fm));
      const am = mm.split("\n");
      if (am.length > Tm && am.splice(Tm, am.length - Tm), !hm)
        for (let xm = 0; xm < am.length; xm++) {
          const mm = am[xm];
          mm.length > fm && (am[xm] = mm.substring(0, fm), am.length < Tm && am.splice(xm + 1, 0, mm.substring(fm)))
        }
      return am.join("\n")
    }
  },
  50962: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/builtInAnimations.anim.38e056f49512e10b7206.gz"
  },
  50964: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);