export const id = 49;
export const ids = [49];
export const modules = {
  50979: (mm, Tm, fm) => {
    fm.d(Tm, {
      startRenderLite: () => zm
    });
    var hm = fm(2873),
      Am = fm(675),
      am = fm(130),
      xm = fm(4741),
      wm = fm(41094),
      Dm = fm(4732),
      im = fm(40793),
      Rm = fm(40669),
      pm = fm(40832),
      Em = fm(2813),
      om = fm(4448),
      Om = fm(34153);
    const Ym = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class qm {
      constructor(mm) {
        this.label = void 0, this.noted = void 0, this.lines = 0, this.atMs = -1 / 0, this.label = mm
      }
      line(mm, Tm) {
        const fm = this.lines < 10 ? 6e4 : 6e5;
        return void 0 === mm || mm === this.noted || Tm - this.atMs < fm ? null : (this.noted = mm, this.lines++, this.atMs = Tm, `${this.label}: ${mm}`)
      }
    }
    class jm {
      constructor() {
        this.failuresLogged = 0, this.heldLogged = !1, this.links = new qm("gl links"), this.programUse = new qm("gl programs")
      }
      failures(mm) {
        const Tm = mm ? mm.split(" ") : [],
          fm = Tm.slice(this.failuresLogged).map((mm => {
            var Tm;
            const [fm, hm] = mm.split(":"), Am = null !== (Tm = Ym.get(fm.slice(-1))) && void 0 !== Tm ? Tm : "";
            return `gl link failed: program row ${parseInt(fm)}${Am}, read ${hm} ms after issue`
          }));
        return this.failuresLogged = Tm.length, fm
      }
      heldAtBackstop(mm) {
        return this.heldLogged || void 0 === mm ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${mm}`)
      }
      summaryLines(mm, Tm, fm, hm) {
        const Am = this.links.line(mm, fm);
        return [Am && `${Am}; tab ${(0,Om.g)(hm)}`, this.programUse.line(Tm, fm)].filter((mm => null !== mm))
      }
    }
    var Vm = fm(4637);
    class Im {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(mm, Tm, fm) {
        if ("none" !== Tm && (this.frames++, "paced" === Tm && this.paced++, "drawn" === Tm)) {
          if (this.drawn++, this.renderUs += fm, this.renderUsMax = Math.max(this.renderUsMax, fm), null !== this.lastDrawnMs) {
            const Tm = mm - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, Tm), Tm >= 50 && this.longGaps++
          }
          this.lastDrawnMs = mm
        }
      }
      restart() {
        this.take(), this.lastDrawnMs = null
      }
      take() {
        const mm = {
          frames: this.frames,
          drawn: this.drawn,
          paced: this.paced,
          gapMaxMs: this.gapMaxMs,
          longGaps: this.longGaps,
          renderUs: this.renderUs,
          renderUsMax: this.renderUsMax
        };
        return this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, mm
      }
    }

    function Km(mm) {
      return (mm / 1048576).toFixed(1)
    }
    class Qm {
      constructor() {
        this.logged = 0, this.seen = new Set, this.unlogged = 0
      }
      admit(mm) {
        return this.logged >= 20 || this.seen.has(mm) ? (this.unlogged++, null) : (this.seen.add(mm), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${mm}` : mm)
      }
      takeUnlogged() {
        const mm = this.unlogged;
        return this.unlogged = 0, mm
      }
    }

    function nm(mm) {
      (0, Em.g)("renderlite", mm)
    }
    class Jm {
      constructor(mm) {
        this.frames = new Im, this.events = new Qm, this.programLines = new jm, this.compileSummary = new qm("webgpu compiles"), this.hidden = new Om.d, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this.visibilityChanged = () => {
          const mm = performance.now();
          this.hidden.changed(mm), this.restartWindow(mm)
        }, this.DE = () => {
          var mm, Tm;
          const fm = this.session,
            Am = (0, Rm.i)(),
            am = performance.now();
          if (this.logLinks(am), this.logGrid(), null === fm || fm.isStopped || !0 !== (null === Am || void 0 === Am ? void 0 : Am.isCoreRunning)) return void this.restartWindow(am);
          if (document.hidden) return;
          if (am - this.windowStart < 2500) return;
          if (! function(mm) {
              return mm < 12 || (mm - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const Dm = fm.headerWord(xm.L.GpuTimed),
            pm = fm.headerWord(xm.L.GpuFrameUs),
            Em = this.sampled === fm ? {
              timed: Dm - this.gpuTimed >>> 0,
              us: pm - this.gpuUs >>> 0
            } : null;
          this.sampled = fm, this.gpuTimed = Dm, this.gpuUs = pm;
          const om = null !== (mm = null === (Tm = (0, im.L)((0, hm.D)())) || void 0 === Tm ? void 0 : Tm.Thm()) && void 0 !== mm ? mm : 0;
          nm(function(mm, Tm) {
            const fm = Tm.windowMs / 1e3,
              hm = [`${Math.round(fm)}s: ${mm.drawn} drawn (${(mm.drawn/fm).toFixed(1)}/s), ${mm.paced} paced, ${mm.frames-mm.drawn-mm.paced} skipped`, `gap max ${Math.round(mm.gapMaxMs)} ms, ${mm.longGaps} over 50 ms`, `render cpu ${mm.drawn?(mm.renderUs/mm.drawn/1e3).toFixed(2):"-"} ms mean, ${(mm.renderUsMax/1e3).toFixed(1)} max`];
            null !== Tm.gpu && hm.push(`gpu ${Tm.gpu.timed?(Tm.gpu.us/Tm.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${Tm.gpu.timed} timed`);
            const Am = Tm.census;
            hm.push(null === Am ? "draws none yet" : `draws ${(0,wm.e)(Am)} (terrain ${Am.terrainOpaque}+${Am.terrainTransparent}, pack ${Am.terrainPack}, meshes ${Am.regular+Am.thin+Am.line+Am.text}, sky ${Am.earthSky+Am.skyMeshes}, particles ${Am.particles})`), null !== Am && Am.ringCopiesMax > 0 && hm.push(`frame rings ${Am.ringCopiesMax} copies max, ${Am.ringBusyWrites} busy writes so far`);
            const am = null === Tm.gpuBytesBefore ? "" : ` (${Tm.gpuBytes>=Tm.gpuBytesBefore?"+":"-"}${Km(Math.abs(Tm.gpuBytes-Tm.gpuBytesBefore))})`;
            return hm.push(`gpu mem ${Km(Tm.gpuBytes)} MiB${am}`), hm.push(`pending ${Tm.pending}`, "terrain " + (Tm.terrainDrawn ? "drawn" : "not drawn yet")), Tm.eventsUnlogged > 0 && hm.push(`${Tm.eventsUnlogged} events unlogged`), hm.join("; ")
          }(this.frames.take(), {
            windowMs: am - this.windowStart,
            gpu: Em,
            census: (0, wm.h)(Am.api),
            gpuBytes: om,
            gpuBytesBefore: this.gpuBytes,
            pending: fm.headerWord(xm.L.RenderPending),
            terrainDrawn: 0 !== (fm.headerWord(xm.L.LoadSteps) & xm._.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = om, this.windowStart = am
        }, nm(`${(0,Vm.d)(mm)}; client ${Am.s.client} (${Am.s.reason})`), setInterval(this.DE, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(mm, Tm, fm) {
        this.session = mm, this.frames.frame(Tm, fm, "drawn" === fm ? mm.headerWord(xm.L.RenderUs) : 0)
      }
      coreErrors(mm) {
        for (const {
            code: hm,
            detail: Am
          }
          of mm) {
          var Tm, fm;
          if (hm >= xm.p.RenderDeviceLost && hm <= xm.p.RenderSerialLinks) this.event(`render error ${(0,Dm.ee)(hm)}${null!==(Tm=null===(fm=(0,pm.d)(hm,Am))||void 0===fm?void 0:fm.words)&&void 0!==Tm?Tm:""} (detail ${Am})`)
        }
      }
      reload(mm, Tm, fm, hm) {
        this.event(`render reload: ${mm?"webgpu":"gl"} ${fm}, losses ${Tm}${void 0===hm?"":`: ${hm}`}`)
      }
      crashed(mm) {
        let {
          site: Tm,
          error: fm,
          header: hm
        } = mm;
        const Am = null !== hm && 0 !== hm.lastError ? `, last error ${(0,Dm.ee)(hm.lastError)} (detail ${hm.lastErrorDetail})` : "",
          am = fm instanceof Error ? `${fm.name}: ${fm.message}` : null === fm || void 0 === fm ? "" : String(fm);
        this.event(`core stopped at ${Tm}${Am}${am&&`: ${am}`}`)
      }
      event(mm) {
        const Tm = this.events.admit(mm);
        null !== Tm && nm(Tm)
      }
      restartWindow(mm) {
        this.frames.restart(), this.windowStart = mm;
        const Tm = this.session;
        null === Tm || Tm.isStopped ? this.sampled = null : (this.sampled = Tm, this.gpuTimed = Tm.headerWord(xm.L.GpuTimed), this.gpuUs = Tm.headerWord(xm.L.GpuFrameUs))
      }
      logLinks(mm) {
        const Tm = window.bloxdRenderDebug;
        for (const Am of this.programLines.failures(null === Tm || void 0 === Tm ? void 0 : Tm.linkFailures)) this.event(Am);
        const fm = this.programLines.heldAtBackstop(null === Tm || void 0 === Tm ? void 0 : Tm.heldAtBackstop);
        null !== fm && nm(fm);
        for (const Am of this.programLines.summaryLines(null === Tm || void 0 === Tm ? void 0 : Tm.links, null === Tm || void 0 === Tm ? void 0 : Tm.programUse, mm, this.hidden.totals(mm))) nm(Am);
        const hm = this.compileSummary.line(null === Tm || void 0 === Tm ? void 0 : Tm.compiles, mm);
        null !== hm && nm(hm)
      }
      logGrid() {
        var mm;
        const Tm = null === (mm = window.bloxdRenderDebug) || void 0 === mm ? void 0 : mm.gridFaces;
        this.gridLogged || void 0 === Tm || (this.gridLogged = !0, nm(`gl1 grid ${Tm}`))
      }
      logRenderer() {
        var mm, Tm;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const fm = window.bloxdRenderDebug,
          hm = (0, am.p)(),
          Am = void 0 === (null === fm || void 0 === fm ? void 0 : fm.parallelCompile) ? "" : `; parallel compile ${fm.parallelCompile}`;
        nm(`renderer gl ${hm?`${hm.vendor} / ${hm.renderer}`:"(not read)"}; terrain fetch ${null!==(mm=null===fm||void 0===fm?void 0:fm.fetch)&&void 0!==mm?mm:"(not noted)"}${Am}`), nm(`renderer caps ${null!==(Tm=null===fm||void 0===fm?void 0:fm.caps)&&void 0!==Tm?Tm:"(not noted)"}`)
      }
    }
    let cm = null;

    function zm(mm) {
      return (0, om.e)(), cm ??= new Jm(mm), cm
    }
  },
  4637: (mm, Tm, fm) => {
    function hm(mm) {
      if (null === mm) return "backend: none picked (no renderer build)";
      const Tm = mm.adapter ? `${mm.adapter.vendor}/${mm.adapter.architecture}` : "none";
      return `backend ${mm.backend}: reason ${mm.reason}, source ${mm.source}, adapter ${Tm}`
    }
    fm.d(Tm, {
      d: () => hm
    })
  },
  34153: (mm, Tm, fm) => {
    function hm(mm) {
      return `hidden ${mm.changes} changes, ${Math.round(mm.hiddenMs)} ms`
    }
    fm.d(Tm, {
      d: () => Am,
      g: () => hm
    });
    class Am {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(mm) {
        this.changes++, document.hidden ? this.hiddenSinceMs = mm : this.hiddenSinceMs >= 0 && (this.hiddenMs += mm - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(mm) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? mm - this.hiddenSinceMs : 0)
        }
      }
    }
  },
  41094: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => xm,
      h: () => am,
      l: () => wm
    });
    var hm = fm(40663),
      Am = fm(40669);

    function am(mm) {
      if (mm.queries.drawCensus() < hm.Hb.BYTES) return null;
      const Tm = mm.memoryData(mm.scratch(), hm.Hb.BYTES, 4, "the draw census");
      return null === Tm ? null : {
        terrainOpaque: hm.Hb.terrainOpaque(Tm, 0),
        terrainTransparent: hm.Hb.terrainTransparent(Tm, 0),
        terrainPack: hm.Hb.terrainPack(Tm, 0),
        earthSky: hm.Hb.earthSky(Tm, 0),
        skyMeshes: hm.Hb.skyMeshes(Tm, 0),
        regular: hm.Hb.regular(Tm, 0),
        thin: hm.Hb.thin(Tm, 0),
        line: hm.Hb.line(Tm, 0),
        text: hm.Hb.text(Tm, 0),
        particles: hm.Hb.particles(Tm, 0),
        terrainParts: hm.Hb.terrainParts(Tm, 0),
        terrainCompiling: hm.Hb.terrainCompiling(Tm, 0),
        ringCopiesMax: hm.Hb.ringCopiesMax(Tm, 0),
        ringBusyWrites: hm.Hb.ringBusyWrites(Tm, 0)
      }
    }

    function xm(mm) {
      const {
        terrainOpaque: Tm,
        terrainTransparent: fm,
        earthSky: hm,
        skyMeshes: Am,
        regular: am,
        thin: xm,
        line: wm,
        text: Dm,
        particles: im
      } = mm;
      return Tm + fm + hm + Am + am + xm + wm + Dm + im
    }

    function wm() {
      const mm = (0, Am.i)();
      return !0 === (null === mm || void 0 === mm ? void 0 : mm.isCoreRunning) ? function(mm) {
        const Tm = am(mm);
        if (null === Tm) return [];
        const {
          terrainOpaque: fm,
          terrainTransparent: hm,
          terrainPack: Am,
          earthSky: wm,
          skyMeshes: Dm,
          regular: im,
          thin: Rm,
          line: pm,
          text: Em,
          particles: om
        } = Tm;
        return [{
          label: "Drawn",
          value: `${xm(Tm)}`
        }, {
          label: "Terrain",
          value: `${fm} opaque / ${hm} transparent (${Am} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${im} / ${Rm}`
        }, {
          label: "Text / Lines",
          value: `${Em} / ${pm}`
        }, {
          label: "Sky / Particles",
          value: `${wm+Dm} / ${om}`
        }]
      }(mm.api) : []
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);