export const id = 50;
export const ids = [50];
export const modules = {
  51287: (tt, et, Vt) => {
    Vt.d(et, {
      startRenderLite: () => vt
    });
    var Ot = Vt(2961),
      qt = Vt(725),
      Dt = Vt(146),
      mt = Vt(4963),
      dt = Vt(41222),
      jt = Vt(4960),
      Ht = Vt(40905),
      Xt = Vt(40769),
      Qt = Vt(40940),
      lt = Vt(2902),
      Et = Vt(4646),
      ft = Vt(34235);
    const wt = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class yt {
      constructor(tt) {
        this.label = void 0, this.noted = void 0, this.lines = 0, this.atMs = -1 / 0, this.label = tt
      }
      line(tt, et) {
        const Vt = this.lines < 10 ? 6e4 : 6e5;
        return void 0 === tt || tt === this.noted || et - this.atMs < Vt ? null : (this.noted = tt, this.lines++, this.atMs = et, `${this.label}: ${tt}`)
      }
    }
    class Nt {
      constructor() {
        this.failuresLogged = 0, this.heldLogged = !1, this.links = new yt("gl links"), this.programUse = new yt("gl programs")
      }
      failures(tt) {
        const et = tt ? tt.split(" ") : [],
          Vt = et.slice(this.failuresLogged).map((tt => {
            var et;
            const [Vt, Ot] = tt.split(":"), qt = null !== (et = wt.get(Vt.slice(-1))) && void 0 !== et ? et : "";
            return `gl link failed: program row ${parseInt(Vt)}${qt}, read ${Ot} ms after issue`
          }));
        return this.failuresLogged = et.length, Vt
      }
      heldAtBackstop(tt) {
        return this.heldLogged || void 0 === tt ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${tt}`)
      }
      summaryLines(tt, et, Vt, Ot) {
        const qt = this.links.line(tt, Vt);
        return [qt && `${qt}; tab ${(0,ft.f)(Ot)}`, this.programUse.line(et, Vt)].filter((tt => null !== tt))
      }
    }
    var Mt = Vt(4859);
    class bt {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(tt, et, Vt) {
        if ("none" !== et && (this.frames++, "paced" === et && this.paced++, "drawn" === et)) {
          if (this.drawn++, this.renderUs += Vt, this.renderUsMax = Math.max(this.renderUsMax, Vt), null !== this.lastDrawnMs) {
            const et = tt - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, et), et >= 50 && this.longGaps++
          }
          this.lastDrawnMs = tt
        }
      }
      restart() {
        this.take(), this.lastDrawnMs = null
      }
      take() {
        const tt = {
          frames: this.frames,
          drawn: this.drawn,
          paced: this.paced,
          gapMaxMs: this.gapMaxMs,
          longGaps: this.longGaps,
          renderUs: this.renderUs,
          renderUsMax: this.renderUsMax
        };
        return this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, tt
      }
    }

    function Jt(tt) {
      return (tt / 1048576).toFixed(1)
    }
    class Ct {
      constructor() {
        this.logged = 0, this.seen = new Set, this.unlogged = 0
      }
      admit(tt) {
        return this.logged >= 20 || this.seen.has(tt) ? (this.unlogged++, null) : (this.seen.add(tt), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${tt}` : tt)
      }
      takeUnlogged() {
        const tt = this.unlogged;
        return this.unlogged = 0, tt
      }
    }

    function ut(tt) {
      (0, lt.n)("renderlite", tt)
    }
    class Kt {
      constructor(tt) {
        this.frames = new bt, this.events = new Ct, this.programLines = new Nt, this.compileSummary = new yt("webgpu compiles"), this.hidden = new ft.d, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this.visibilityChanged = () => {
          const tt = performance.now();
          this.hidden.changed(tt), this.restartWindow(tt)
        }, this.BQ = () => {
          var tt, et;
          const Vt = this.session,
            qt = (0, Xt.g)(),
            Dt = performance.now();
          if (this.logLinks(Dt), this.logGrid(), null === Vt || Vt.isStopped || !0 !== (null === qt || void 0 === qt ? void 0 : qt.isCoreRunning)) return void this.restartWindow(Dt);
          if (document.hidden) return;
          if (Dt - this.windowStart < 2500) return;
          if (! function(tt) {
              return tt < 12 || (tt - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const jt = Vt.headerWord(mt.J.GpuTimed),
            Qt = Vt.headerWord(mt.J.GpuFrameUs),
            lt = this.sampled === Vt ? {
              timed: jt - this.gpuTimed >>> 0,
              us: Qt - this.gpuUs >>> 0
            } : null;
          this.sampled = Vt, this.gpuTimed = jt, this.gpuUs = Qt;
          const Et = null !== (tt = null === (et = (0, Ht.P)((0, Ot.F)())) || void 0 === et ? void 0 : et.ZOt()) && void 0 !== tt ? tt : 0;
          ut(function(tt, et) {
            const Vt = et.windowMs / 1e3,
              Ot = [`${Math.round(Vt)}s: ${tt.drawn} drawn (${(tt.drawn/Vt).toFixed(1)}/s), ${tt.paced} paced, ${tt.frames-tt.drawn-tt.paced} skipped`, `gap max ${Math.round(tt.gapMaxMs)} ms, ${tt.longGaps} over 50 ms`, `render cpu ${tt.drawn?(tt.renderUs/tt.drawn/1e3).toFixed(2):"-"} ms mean, ${(tt.renderUsMax/1e3).toFixed(1)} max`];
            null !== et.gpu && Ot.push(`gpu ${et.gpu.timed?(et.gpu.us/et.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${et.gpu.timed} timed`);
            const qt = et.census;
            Ot.push(null === qt ? "draws none yet" : `draws ${(0,dt.d)(qt)} (terrain ${qt.terrainOpaque}+${qt.terrainTransparent}, pack ${qt.terrainPack}, meshes ${qt.regular+qt.thin+qt.line+qt.text}, sky ${qt.earthSky+qt.skyMeshes}, particles ${qt.particles})`), null !== qt && qt.ringCopiesMax > 0 && Ot.push(`frame rings ${qt.ringCopiesMax} copies max, ${qt.ringBusyWrites} busy writes so far`);
            const Dt = null === et.gpuBytesBefore ? "" : ` (${et.gpuBytes>=et.gpuBytesBefore?"+":"-"}${Jt(Math.abs(et.gpuBytes-et.gpuBytesBefore))})`;
            return Ot.push(`gpu mem ${Jt(et.gpuBytes)} MiB${Dt}`), Ot.push(`pending ${et.pending}`, "terrain " + (et.terrainDrawn ? "drawn" : "not drawn yet")), et.eventsUnlogged > 0 && Ot.push(`${et.eventsUnlogged} events unlogged`), Ot.join("; ")
          }(this.frames.take(), {
            windowMs: Dt - this.windowStart,
            gpu: lt,
            census: (0, dt.h)(qt.api),
            gpuBytes: Et,
            gpuBytesBefore: this.gpuBytes,
            pending: Vt.headerWord(mt.J.RenderPending),
            terrainDrawn: 0 !== (Vt.headerWord(mt.J.LoadSteps) & mt.X.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = Et, this.windowStart = Dt
        }, ut(`${(0,Mt.d)(tt)}; client ${qt.u.client} (${qt.u.reason})`), setInterval(this.BQ, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(tt, et, Vt) {
        this.session = tt, this.frames.frame(et, Vt, "drawn" === Vt ? tt.headerWord(mt.J.RenderUs) : 0)
      }
      coreErrors(tt) {
        for (const {
            code: Ot,
            detail: qt
          }
          of tt) {
          var et, Vt;
          if (Ot >= mt.l.RenderDeviceLost && Ot <= mt.l.RenderSerialLinks) this.event(`render error ${(0,jt.qe)(Ot)}${null!==(et=null===(Vt=(0,Qt.b)(Ot,qt))||void 0===Vt?void 0:Vt.words)&&void 0!==et?et:""} (detail ${qt})`)
        }
      }
      reload(tt, et, Vt, Ot) {
        this.event(`render reload: ${tt?"webgpu":"gl"} ${Vt}, losses ${et}${void 0===Ot?"":`: ${Ot}`}`)
      }
      crashed(tt) {
        let {
          site: et,
          error: Vt,
          header: Ot
        } = tt;
        const qt = null !== Ot && 0 !== Ot.lastError ? `, last error ${(0,jt.qe)(Ot.lastError)} (detail ${Ot.lastErrorDetail})` : "",
          Dt = Vt instanceof Error ? `${Vt.name}: ${Vt.message}` : null === Vt || void 0 === Vt ? "" : String(Vt);
        this.event(`core stopped at ${et}${qt}${Dt&&`: ${Dt}`}`)
      }
      event(tt) {
        const et = this.events.admit(tt);
        null !== et && ut(et)
      }
      restartWindow(tt) {
        this.frames.restart(), this.windowStart = tt;
        const et = this.session;
        null === et || et.isStopped ? this.sampled = null : (this.sampled = et, this.gpuTimed = et.headerWord(mt.J.GpuTimed), this.gpuUs = et.headerWord(mt.J.GpuFrameUs))
      }
      logLinks(tt) {
        const et = window.bloxdRenderDebug;
        for (const qt of this.programLines.failures(null === et || void 0 === et ? void 0 : et.linkFailures)) this.event(qt);
        const Vt = this.programLines.heldAtBackstop(null === et || void 0 === et ? void 0 : et.heldAtBackstop);
        null !== Vt && ut(Vt);
        for (const qt of this.programLines.summaryLines(null === et || void 0 === et ? void 0 : et.links, null === et || void 0 === et ? void 0 : et.programUse, tt, this.hidden.totals(tt))) ut(qt);
        const Ot = this.compileSummary.line(null === et || void 0 === et ? void 0 : et.compiles, tt);
        null !== Ot && ut(Ot)
      }
      logGrid() {
        var tt;
        const et = null === (tt = window.bloxdRenderDebug) || void 0 === tt ? void 0 : tt.gridFaces;
        this.gridLogged || void 0 === et || (this.gridLogged = !0, ut(`gl1 grid ${et}`))
      }
      logRenderer() {
        var tt, et;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const Vt = window.bloxdRenderDebug,
          Ot = (0, Dt.y)(),
          qt = void 0 === (null === Vt || void 0 === Vt ? void 0 : Vt.parallelCompile) ? "" : `; parallel compile ${Vt.parallelCompile}`;
        ut(`renderer gl ${Ot?`${Ot.vendor} / ${Ot.renderer}`:"(not read)"}; terrain fetch ${null!==(tt=null===Vt||void 0===Vt?void 0:Vt.fetch)&&void 0!==tt?tt:"(not noted)"}${qt}`), ut(`renderer caps ${null!==(et=null===Vt||void 0===Vt?void 0:Vt.caps)&&void 0!==et?et:"(not noted)"}`)
      }
    }
    let ht = null;

    function vt(tt) {
      return (0, Et.f)(), ht ??= new Kt(tt), ht
    }
  },
  4859: (tt, et, Vt) => {
    function Ot(tt) {
      if (null === tt) return "backend: none picked (no renderer build)";
      const et = tt.adapter ? `${tt.adapter.vendor}/${tt.adapter.architecture}` : "none";
      return `backend ${tt.backend}: reason ${tt.reason}, source ${tt.source}, adapter ${et}`
    }
    Vt.d(et, {
      d: () => Ot
    })
  },
  34235: (tt, et, Vt) => {
    function Ot(tt) {
      return `hidden ${tt.changes} changes, ${Math.round(tt.hiddenMs)} ms`
    }
    Vt.d(et, {
      d: () => qt,
      f: () => Ot
    });
    class qt {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(tt) {
        this.changes++, document.hidden ? this.hiddenSinceMs = tt : this.hiddenSinceMs >= 0 && (this.hiddenMs += tt - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(tt) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? tt - this.hiddenSinceMs : 0)
        }
      }
    }
  },
  41222: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt,
      h: () => Dt,
      k: () => dt
    });
    var Ot = Vt(40761),
      qt = Vt(40769);

    function Dt(tt) {
      if (tt.queries.drawCensus() < Ot.Cb.BYTES) return null;
      const et = tt.memoryData(tt.scratch(), Ot.Cb.BYTES, 4, "the draw census");
      return null === et ? null : {
        terrainOpaque: Ot.Cb.terrainOpaque(et, 0),
        terrainTransparent: Ot.Cb.terrainTransparent(et, 0),
        terrainPack: Ot.Cb.terrainPack(et, 0),
        earthSky: Ot.Cb.earthSky(et, 0),
        skyMeshes: Ot.Cb.skyMeshes(et, 0),
        regular: Ot.Cb.regular(et, 0),
        thin: Ot.Cb.thin(et, 0),
        line: Ot.Cb.line(et, 0),
        text: Ot.Cb.text(et, 0),
        particles: Ot.Cb.particles(et, 0),
        terrainParts: Ot.Cb.terrainParts(et, 0),
        terrainCompiling: Ot.Cb.terrainCompiling(et, 0),
        ringCopiesMax: Ot.Cb.ringCopiesMax(et, 0),
        ringBusyWrites: Ot.Cb.ringBusyWrites(et, 0)
      }
    }

    function mt(tt) {
      const {
        terrainOpaque: et,
        terrainTransparent: Vt,
        earthSky: Ot,
        skyMeshes: qt,
        regular: Dt,
        thin: mt,
        line: dt,
        text: jt,
        particles: Ht
      } = tt;
      return et + Vt + Ot + qt + Dt + mt + dt + jt + Ht
    }

    function dt() {
      const tt = (0, qt.g)();
      return !0 === (null === tt || void 0 === tt ? void 0 : tt.isCoreRunning) ? function(tt) {
        const et = Dt(tt);
        if (null === et) return [];
        const {
          terrainOpaque: Vt,
          terrainTransparent: Ot,
          terrainPack: qt,
          earthSky: dt,
          skyMeshes: jt,
          regular: Ht,
          thin: Xt,
          line: Qt,
          text: lt,
          particles: Et
        } = et;
        return [{
          label: "Drawn",
          value: `${mt(et)}`
        }, {
          label: "Terrain",
          value: `${Vt} opaque / ${Ot} transparent (${qt} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${Ht} / ${Xt}`
        }, {
          label: "Text / Lines",
          value: `${lt} / ${Qt}`
        }, {
          label: "Sky / Particles",
          value: `${dt+jt} / ${Et}`
        }]
      }(tt.api) : []
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);