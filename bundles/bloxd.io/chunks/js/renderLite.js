export const id = 58;
export const ids = [58];
export const modules = {
  54879: (bb, wb, Mb) => {
    Mb.d(wb, {
      startRenderLite: () => Kb
    });
    var eb = Mb(2463),
      Hb = Mb(698),
      pb = Mb(153),
      Vb = Mb(5685),
      gb = Mb(42705),
      lb = Mb(5678),
      Lb = Mb(42375),
      Ib = Mb(42263),
      Ob = Mb(42441),
      Ub = Mb(4060),
      tb = Mb(5354),
      Cb = Mb(35190);
    const Eb = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class Fb {
      constructor(bb) {
        this.label = void 0, this.noted = void 0, this.lines = 0, this.atMs = -1 / 0, this.label = bb
      }
      line(bb, wb) {
        const Mb = this.lines < 10 ? 6e4 : 6e5;
        return void 0 === bb || bb === this.noted || wb - this.atMs < Mb ? null : (this.noted = bb, this.lines++, this.atMs = wb, `${this.label}: ${bb}`)
      }
    }
    class Bb {
      constructor() {
        this.failuresLogged = 0, this.heldLogged = !1, this.links = new Fb("gl links"), this.programUse = new Fb("gl programs")
      }
      failures(bb) {
        const wb = bb ? bb.split(" ") : [],
          Mb = wb.slice(this.failuresLogged).map((bb => {
            var wb;
            const [Mb, eb] = bb.split(":"), Hb = null !== (wb = Eb.get(Mb.slice(-1))) && void 0 !== wb ? wb : "";
            return `gl link failed: program row ${parseInt(Mb)}${Hb}, read ${eb} ms after issue`
          }));
        return this.failuresLogged = wb.length, Mb
      }
      heldAtBackstop(bb) {
        return this.heldLogged || void 0 === bb ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${bb}`)
      }
      summaryLines(bb, wb, Mb, eb) {
        const Hb = this.links.line(bb, Mb);
        return [Hb && `${Hb}; tab ${(0,Cb.f)(eb)}`, this.programUse.line(wb, Mb)].filter((bb => null !== bb))
      }
    }
    var sb = Mb(5590);
    class mb {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(bb, wb, Mb) {
        if ("none" !== wb && (this.frames++, "paced" === wb && this.paced++, "drawn" === wb)) {
          if (this.drawn++, this.renderUs += Mb, this.renderUsMax = Math.max(this.renderUsMax, Mb), null !== this.lastDrawnMs) {
            const wb = bb - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, wb), wb >= 50 && this.longGaps++
          }
          this.lastDrawnMs = bb
        }
      }
      restart() {
        this.take(), this.lastDrawnMs = null
      }
      take() {
        const bb = {
          frames: this.frames,
          drawn: this.drawn,
          paced: this.paced,
          gapMaxMs: this.gapMaxMs,
          longGaps: this.longGaps,
          renderUs: this.renderUs,
          renderUsMax: this.renderUsMax
        };
        return this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, bb
      }
    }

    function hb(bb) {
      return (bb / 1048576).toFixed(1)
    }
    class zb {
      constructor() {
        this.logged = 0, this.seen = new Set, this.unlogged = 0
      }
      admit(bb) {
        return this.logged >= 20 || this.seen.has(bb) ? (this.unlogged++, null) : (this.seen.add(bb), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${bb}` : bb)
      }
      takeUnlogged() {
        const bb = this.unlogged;
        return this.unlogged = 0, bb
      }
    }

    function Xb(bb) {
      (0, Ub.j)("renderlite", bb)
    }
    class xb {
      constructor(bb) {
        this.frames = new mb, this.events = new zb, this.programLines = new Bb, this.compileSummary = new Fb("webgpu compiles"), this.hidden = new Cb.d, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this.prejoinLogged = null, this.visibilityChanged = () => {
          const bb = performance.now();
          this.hidden.changed(bb), this.restartWindow(bb)
        }, this.sO = () => {
          var bb, wb;
          const Mb = this.session,
            Hb = (0, Ib.m)(),
            pb = performance.now();
          var lb;
          if (this.logLinks(pb), this.logGrid(), null === Mb || Mb.isStopped || !0 !== (null === Hb || void 0 === Hb ? void 0 : Hb.isCoreRunning)) return null === (lb = window.bloxdRenderDebug) || void 0 === lb || delete lb.meshMaterials, void this.restartWindow(pb);
          if (document.hidden) return;
          if (pb - this.windowStart < 2500) return;
          if (! function(bb) {
              return bb < 12 || (bb - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const Ob = Mb.headerWord(Vb.L.GpuTimed),
            Ub = Mb.headerWord(Vb.L.GpuFrameUs),
            tb = this.sampled === Mb ? {
              timed: Ob - this.gpuTimed >>> 0,
              us: Ub - this.gpuUs >>> 0
            } : null;
          this.sampled = Mb, this.gpuTimed = Ob, this.gpuUs = Ub;
          const Cb = null !== (bb = null === (wb = (0, Lb.O)((0, eb.w)())) || void 0 === wb ? void 0 : wb.KHb()) && void 0 !== bb ? bb : 0;
          Xb(function(bb, wb) {
            const Mb = wb.windowMs / 1e3,
              eb = [`${Math.round(Mb)}s: ${bb.drawn} drawn (${(bb.drawn/Mb).toFixed(1)}/s), ${bb.paced} paced, ${bb.frames-bb.drawn-bb.paced} skipped`, `gap max ${Math.round(bb.gapMaxMs)} ms, ${bb.longGaps} over 50 ms`, `render cpu ${bb.drawn?(bb.renderUs/bb.drawn/1e3).toFixed(2):"-"} ms mean, ${(bb.renderUsMax/1e3).toFixed(1)} max`];
            null !== wb.gpu && eb.push(`gpu ${wb.gpu.timed?(wb.gpu.us/wb.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${wb.gpu.timed} timed`);
            const Hb = wb.census;
            eb.push(null === Hb ? "draws none yet" : `draws ${(0,gb.b)(Hb)} (terrain ${Hb.terrainOpaque}+${Hb.terrainTransparent}, pack ${Hb.terrainPack}, meshes ${Hb.regular+Hb.thin+Hb.line+Hb.text} (${Hb.text} text, ${Hb.thin} thin, ${Hb.line} line), sky ${Hb.earthSky+Hb.skyMeshes}, particles ${Hb.particles})`), null !== Hb && Hb.ringCopiesMax > 0 && eb.push(`frame rings ${Hb.ringCopiesMax} copies max, ${Hb.ringBusyWrites} busy writes so far`);
            const pb = null === wb.gpuBytesBefore ? "" : ` (${wb.gpuBytes>=wb.gpuBytesBefore?"+":"-"}${hb(Math.abs(wb.gpuBytes-wb.gpuBytesBefore))})`;
            return eb.push(`gpu mem ${hb(wb.gpuBytes)} MiB${pb}`), eb.push(`pending ${wb.pending}`, "terrain " + (wb.terrainDrawn ? "drawn" : "not drawn yet")), wb.eventsUnlogged > 0 && eb.push(`${wb.eventsUnlogged} events unlogged`), eb.join("; ")
          }(this.frames.take(), {
            windowMs: pb - this.windowStart,
            gpu: tb,
            census: (0, gb.d)(Hb.api),
            gpuBytes: Cb,
            gpuBytesBefore: this.gpuBytes,
            pending: Mb.headerWord(Vb.L.RenderPending),
            terrainDrawn: 0 !== (Mb.headerWord(Vb.L.LoadSteps) & Vb.$.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          }));
          const Eb = window.bloxdRenderDebug;
          void 0 !== (null === Eb || void 0 === Eb ? void 0 : Eb.meshMaterials) && (Xb(`mesh materials ${Eb.meshMaterials}`), delete Eb.meshMaterials), this.gpuBytes = Cb, this.windowStart = pb
        }, Xb(`${(0,sb.d)(bb)}; client ${Hb.A.client} (${Hb.A.reason})`), setInterval(this.sO, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(bb, wb, Mb) {
        var eb;
        this.session !== bb && (null === (eb = window.bloxdRenderDebug) || void 0 === eb || delete eb.meshMaterials);
        this.session = bb, this.frames.frame(wb, Mb, "drawn" === Mb ? bb.headerWord(Vb.L.RenderUs) : 0)
      }
      coreErrors(bb) {
        for (const {
            code: eb,
            detail: Hb
          }
          of bb) {
          var wb, Mb;
          if (eb >= Vb.p.RenderDeviceLost && eb <= Vb.p.RenderSerialLinks) this.event(`render error ${(0,lb.ge)(eb)}${null!==(wb=null===(Mb=(0,Ob.e)(eb,Hb))||void 0===Mb?void 0:Mb.words)&&void 0!==wb?wb:""} (detail ${Hb})`)
        }
      }
      reload(bb, wb, Mb, eb) {
        this.event(`render reload: ${bb?"webgpu":"gl"} ${Mb}, losses ${wb}${void 0===eb?"":`: ${eb}`}`)
      }
      glContextLost(bb, wb, Mb) {
        const eb = null === wb || void 0 === wb ? void 0 : wb.split(" "),
          Hb = 3 === (null === eb || void 0 === eb ? void 0 : eb.length) ? `vertex arrays ${eb[0]}, keyed draws peak ${eb[1]} (sweep floor ${eb[2]})` : "vertex arrays unnoted";
        this.event(`gl context lost ${bb?"in game":"at home"}: ${Hb}, render distance ${null!==Mb&&void 0!==Mb?Mb:"none"}`)
      }
      crashed(bb) {
        let {
          site: wb,
          error: Mb,
          header: eb
        } = bb;
        const Hb = null !== eb && 0 !== eb.lastError ? `, last error ${(0,lb.ge)(eb.lastError)} (detail ${eb.lastErrorDetail})` : "",
          pb = Mb instanceof Error ? `${Mb.name}: ${Mb.message}` : null === Mb || void 0 === Mb ? "" : String(Mb);
        this.event(`core stopped at ${wb}${Hb}${pb&&`: ${pb}`}`)
      }
      event(bb) {
        const wb = this.events.admit(bb);
        null !== wb && Xb(wb)
      }
      restartWindow(bb) {
        this.frames.restart(), this.windowStart = bb;
        const wb = this.session;
        null === wb || wb.isStopped ? this.sampled = null : (this.sampled = wb, this.gpuTimed = wb.headerWord(Vb.L.GpuTimed), this.gpuUs = wb.headerWord(Vb.L.GpuFrameUs))
      }
      logLinks(bb) {
        const wb = window.bloxdRenderDebug;
        for (const Hb of this.programLines.failures(null === wb || void 0 === wb ? void 0 : wb.linkFailures)) this.event(Hb);
        const Mb = this.programLines.heldAtBackstop(null === wb || void 0 === wb ? void 0 : wb.heldAtBackstop);
        null !== Mb && Xb(Mb);
        for (const Hb of this.programLines.summaryLines(null === wb || void 0 === wb ? void 0 : wb.links, null === wb || void 0 === wb ? void 0 : wb.programUse, bb, this.hidden.totals(bb))) Xb(Hb);
        const eb = this.compileSummary.line(null === wb || void 0 === wb ? void 0 : wb.compiles, bb);
        null !== eb && Xb(eb), void 0 !== (null === wb || void 0 === wb ? void 0 : wb.prejoin) && wb.prejoin !== this.prejoinLogged && (this.prejoinLogged = wb.prejoin, Xb(`prejoin ${wb.prejoin}`))
      }
      logGrid() {
        var bb;
        const wb = null === (bb = window.bloxdRenderDebug) || void 0 === bb ? void 0 : bb.gridFaces;
        this.gridLogged || void 0 === wb || (this.gridLogged = !0, Xb(`gl1 grid ${wb}`))
      }
      logRenderer() {
        var bb, wb;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const Mb = window.bloxdRenderDebug,
          eb = (0, pb.x)(),
          Hb = void 0 === (null === Mb || void 0 === Mb ? void 0 : Mb.parallelCompile) ? "" : `; parallel compile ${Mb.parallelCompile}`;
        Xb(`renderer gl ${eb?`${eb.vendor} / ${eb.renderer}`:"(not read)"}; terrain fetch ${null!==(bb=null===Mb||void 0===Mb?void 0:Mb.fetch)&&void 0!==bb?bb:"(not noted)"}${Hb}`), Xb(`renderer caps ${null!==(wb=null===Mb||void 0===Mb?void 0:Mb.caps)&&void 0!==wb?wb:"(not noted)"}`)
      }
    }
    let jb = null;

    function Kb(bb) {
      return (0, tb.f)(), jb ??= new xb(bb), jb
    }
  },
  5590: (bb, wb, Mb) => {
    function eb(bb) {
      if (null === bb) return "backend: none picked (no renderer build)";
      const wb = bb.adapter ? `${bb.adapter.vendor}/${bb.adapter.architecture}` : "none";
      return `backend ${bb.backend}: reason ${bb.reason}, source ${bb.source}, adapter ${wb}`
    }
    Mb.d(wb, {
      d: () => eb
    })
  },
  35190: (bb, wb, Mb) => {
    function eb(bb) {
      return `hidden ${bb.changes} changes, ${Math.round(bb.hiddenMs)} ms`
    }
    Mb.d(wb, {
      d: () => Hb,
      f: () => eb
    });
    class Hb {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(bb) {
        this.changes++, document.hidden ? this.hiddenSinceMs = bb : this.hiddenSinceMs >= 0 && (this.hiddenMs += bb - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(bb) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? bb - this.hiddenSinceMs : 0)
        }
      }
    }
  },
  42705: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb,
      d: () => pb,
      g: () => gb
    });
    var eb = Mb(42253),
      Hb = Mb(42263);

    function pb(bb) {
      if (bb.queries.drawCensus() < eb.tb.BYTES) return null;
      const wb = bb.memoryData(bb.scratch(), eb.tb.BYTES, 4, "the draw census");
      return null === wb ? null : {
        terrainOpaque: eb.tb.terrainOpaque(wb, 0),
        terrainTransparent: eb.tb.terrainTransparent(wb, 0),
        terrainPack: eb.tb.terrainPack(wb, 0),
        earthSky: eb.tb.earthSky(wb, 0),
        skyMeshes: eb.tb.skyMeshes(wb, 0),
        regular: eb.tb.regular(wb, 0),
        thin: eb.tb.thin(wb, 0),
        line: eb.tb.line(wb, 0),
        text: eb.tb.text(wb, 0),
        particles: eb.tb.particles(wb, 0),
        terrainParts: eb.tb.terrainParts(wb, 0),
        terrainCompiling: eb.tb.terrainCompiling(wb, 0),
        ringCopiesMax: eb.tb.ringCopiesMax(wb, 0),
        ringBusyWrites: eb.tb.ringBusyWrites(wb, 0)
      }
    }

    function Vb(bb) {
      const {
        terrainOpaque: wb,
        terrainTransparent: Mb,
        earthSky: eb,
        skyMeshes: Hb,
        regular: pb,
        thin: Vb,
        line: gb,
        text: lb,
        particles: Lb
      } = bb;
      return wb + Mb + eb + Hb + pb + Vb + gb + lb + Lb
    }

    function gb() {
      const bb = (0, Hb.m)();
      return !0 === (null === bb || void 0 === bb ? void 0 : bb.isCoreRunning) ? function(bb) {
        const wb = pb(bb);
        if (null === wb) return [];
        const {
          terrainOpaque: Mb,
          terrainTransparent: eb,
          terrainPack: Hb,
          earthSky: gb,
          skyMeshes: lb,
          regular: Lb,
          thin: Ib,
          line: Ob,
          text: Ub,
          particles: tb
        } = wb;
        return [{
          label: "Drawn",
          value: `${Vb(wb)}`
        }, {
          label: "Terrain",
          value: `${Mb} opaque / ${eb} transparent (${Hb} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${Lb} / ${Ib}`
        }, {
          label: "Text / Lines",
          value: `${Ub} / ${Ob}`
        }, {
          label: "Sky / Particles",
          value: `${gb+lb} / ${tb}`
        }]
      }(bb.api) : []
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);