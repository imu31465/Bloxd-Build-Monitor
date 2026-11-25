export const id = 50;
export const ids = [50];
export const modules = {
  51430: (GG, bG, ZG) => {
    ZG.d(bG, {
      startRenderLite: () => CG
    });
    var wG = ZG(2868),
      SG = ZG(631),
      LG = ZG(111),
      yG = ZG(4818),
      kG = ZG(41423),
      UG = ZG(4810),
      YG = ZG(41100),
      VG = ZG(40971),
      pG = ZG(41133),
      fG = ZG(2801),
      QG = ZG(4527),
      KG = ZG(34345);
    const hG = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class dG {
      constructor(GG) {
        this.label = void 0, this.noted = void 0, this.lines = 0, this.atMs = -1 / 0, this.label = GG
      }
      line(GG, bG) {
        const ZG = this.lines < 10 ? 6e4 : 6e5;
        return void 0 === GG || GG === this.noted || bG - this.atMs < ZG ? null : (this.noted = GG, this.lines++, this.atMs = bG, `${this.label}: ${GG}`)
      }
    }
    class JG {
      constructor() {
        this.failuresLogged = 0, this.heldLogged = !1, this.links = new dG("gl links"), this.programUse = new dG("gl programs")
      }
      failures(GG) {
        const bG = GG ? GG.split(" ") : [],
          ZG = bG.slice(this.failuresLogged).map((GG => {
            var bG;
            const [ZG, wG] = GG.split(":"), SG = null !== (bG = hG.get(ZG.slice(-1))) && void 0 !== bG ? bG : "";
            return `gl link failed: program row ${parseInt(ZG)}${SG}, read ${wG} ms after issue`
          }));
        return this.failuresLogged = bG.length, ZG
      }
      heldAtBackstop(GG) {
        return this.heldLogged || void 0 === GG ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${GG}`)
      }
      summaryLines(GG, bG, ZG, wG) {
        const SG = this.links.line(GG, ZG);
        return [SG && `${SG}; tab ${(0,KG.f)(wG)}`, this.programUse.line(bG, ZG)].filter((GG => null !== GG))
      }
    }
    var rG = ZG(4712);
    class zG {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(GG, bG, ZG) {
        if ("none" !== bG && (this.frames++, "paced" === bG && this.paced++, "drawn" === bG)) {
          if (this.drawn++, this.renderUs += ZG, this.renderUsMax = Math.max(this.renderUsMax, ZG), null !== this.lastDrawnMs) {
            const bG = GG - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, bG), bG >= 50 && this.longGaps++
          }
          this.lastDrawnMs = GG
        }
      }
      restart() {
        this.take(), this.lastDrawnMs = null
      }
      take() {
        const GG = {
          frames: this.frames,
          drawn: this.drawn,
          paced: this.paced,
          gapMaxMs: this.gapMaxMs,
          longGaps: this.longGaps,
          renderUs: this.renderUs,
          renderUsMax: this.renderUsMax
        };
        return this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, GG
      }
    }

    function EG(GG) {
      return (GG / 1048576).toFixed(1)
    }
    class oG {
      constructor() {
        this.logged = 0, this.seen = new Set, this.unlogged = 0
      }
      admit(GG) {
        return this.logged >= 20 || this.seen.has(GG) ? (this.unlogged++, null) : (this.seen.add(GG), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${GG}` : GG)
      }
      takeUnlogged() {
        const GG = this.unlogged;
        return this.unlogged = 0, GG
      }
    }

    function XG(GG) {
      (0, fG.j)("renderlite", GG)
    }
    class uG {
      constructor(GG) {
        this.frames = new zG, this.events = new oG, this.programLines = new JG, this.compileSummary = new dG("webgpu compiles"), this.hidden = new KG.c, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this.visibilityChanged = () => {
          const GG = performance.now();
          this.hidden.changed(GG), this.restartWindow(GG)
        }, this.Tp = () => {
          var GG, bG;
          const ZG = this.session,
            SG = (0, VG.f)(),
            LG = performance.now();
          if (this.logLinks(LG), this.logGrid(), null === ZG || ZG.isStopped || !0 !== (null === SG || void 0 === SG ? void 0 : SG.isCoreRunning)) return void this.restartWindow(LG);
          if (document.hidden) return;
          if (LG - this.windowStart < 2500) return;
          if (! function(GG) {
              return GG < 12 || (GG - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const UG = ZG.headerWord(yG.K.GpuTimed),
            pG = ZG.headerWord(yG.K.GpuFrameUs),
            fG = this.sampled === ZG ? {
              timed: UG - this.gpuTimed >>> 0,
              us: pG - this.gpuUs >>> 0
            } : null;
          this.sampled = ZG, this.gpuTimed = UG, this.gpuUs = pG;
          const QG = null !== (GG = null === (bG = (0, YG.P)((0, wG.G)())) || void 0 === bG ? void 0 : bG.uwG()) && void 0 !== GG ? GG : 0;
          XG(function(GG, bG) {
            const ZG = bG.windowMs / 1e3,
              wG = [`${Math.round(ZG)}s: ${GG.drawn} drawn (${(GG.drawn/ZG).toFixed(1)}/s), ${GG.paced} paced, ${GG.frames-GG.drawn-GG.paced} skipped`, `gap max ${Math.round(GG.gapMaxMs)} ms, ${GG.longGaps} over 50 ms`, `render cpu ${GG.drawn?(GG.renderUs/GG.drawn/1e3).toFixed(2):"-"} ms mean, ${(GG.renderUsMax/1e3).toFixed(1)} max`];
            null !== bG.gpu && wG.push(`gpu ${bG.gpu.timed?(bG.gpu.us/bG.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${bG.gpu.timed} timed`);
            const SG = bG.census;
            wG.push(null === SG ? "draws none yet" : `draws ${(0,kG.e)(SG)} (terrain ${SG.terrainOpaque}+${SG.terrainTransparent}, pack ${SG.terrainPack}, meshes ${SG.regular+SG.thin+SG.line+SG.text}, sky ${SG.earthSky+SG.skyMeshes}, particles ${SG.particles})`), null !== SG && SG.ringCopiesMax > 0 && wG.push(`frame rings ${SG.ringCopiesMax} copies max, ${SG.ringBusyWrites} busy writes so far`);
            const LG = null === bG.gpuBytesBefore ? "" : ` (${bG.gpuBytes>=bG.gpuBytesBefore?"+":"-"}${EG(Math.abs(bG.gpuBytes-bG.gpuBytesBefore))})`;
            return wG.push(`gpu mem ${EG(bG.gpuBytes)} MiB${LG}`), wG.push(`pending ${bG.pending}`, "terrain " + (bG.terrainDrawn ? "drawn" : "not drawn yet")), bG.eventsUnlogged > 0 && wG.push(`${bG.eventsUnlogged} events unlogged`), wG.join("; ")
          }(this.frames.take(), {
            windowMs: LG - this.windowStart,
            gpu: fG,
            census: (0, kG.f)(SG.api),
            gpuBytes: QG,
            gpuBytesBefore: this.gpuBytes,
            pending: ZG.headerWord(yG.K.RenderPending),
            terrainDrawn: 0 !== (ZG.headerWord(yG.K.LoadSteps) & yG.X.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = QG, this.windowStart = LG
        }, XG(`${(0,rG.b)(GG)}; client ${SG.s.client} (${SG.s.reason})`), setInterval(this.Tp, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(GG, bG, ZG) {
        this.session = GG, this.frames.frame(bG, ZG, "drawn" === ZG ? GG.headerWord(yG.K.RenderUs) : 0)
      }
      coreErrors(GG) {
        for (const {
            code: wG,
            detail: SG
          }
          of GG) {
          var bG, ZG;
          if (wG >= yG.m.RenderDeviceLost && wG <= yG.m.RenderSerialLinks) this.event(`render error ${(0,UG.de)(wG)}${null!==(bG=null===(ZG=(0,pG.c)(wG,SG))||void 0===ZG?void 0:ZG.words)&&void 0!==bG?bG:""} (detail ${SG})`)
        }
      }
      reload(GG, bG, ZG, wG) {
        this.event(`render reload: ${GG?"webgpu":"gl"} ${ZG}, losses ${bG}${void 0===wG?"":`: ${wG}`}`)
      }
      crashed(GG) {
        let {
          site: bG,
          error: ZG,
          header: wG
        } = GG;
        const SG = null !== wG && 0 !== wG.lastError ? `, last error ${(0,UG.de)(wG.lastError)} (detail ${wG.lastErrorDetail})` : "",
          LG = ZG instanceof Error ? `${ZG.name}: ${ZG.message}` : null === ZG || void 0 === ZG ? "" : String(ZG);
        this.event(`core stopped at ${bG}${SG}${LG&&`: ${LG}`}`)
      }
      event(GG) {
        const bG = this.events.admit(GG);
        null !== bG && XG(bG)
      }
      restartWindow(GG) {
        this.frames.restart(), this.windowStart = GG;
        const bG = this.session;
        null === bG || bG.isStopped ? this.sampled = null : (this.sampled = bG, this.gpuTimed = bG.headerWord(yG.K.GpuTimed), this.gpuUs = bG.headerWord(yG.K.GpuFrameUs))
      }
      logLinks(GG) {
        const bG = window.bloxdRenderDebug;
        for (const SG of this.programLines.failures(null === bG || void 0 === bG ? void 0 : bG.linkFailures)) this.event(SG);
        const ZG = this.programLines.heldAtBackstop(null === bG || void 0 === bG ? void 0 : bG.heldAtBackstop);
        null !== ZG && XG(ZG);
        for (const SG of this.programLines.summaryLines(null === bG || void 0 === bG ? void 0 : bG.links, null === bG || void 0 === bG ? void 0 : bG.programUse, GG, this.hidden.totals(GG))) XG(SG);
        const wG = this.compileSummary.line(null === bG || void 0 === bG ? void 0 : bG.compiles, GG);
        null !== wG && XG(wG)
      }
      logGrid() {
        var GG;
        const bG = null === (GG = window.bloxdRenderDebug) || void 0 === GG ? void 0 : GG.gridFaces;
        this.gridLogged || void 0 === bG || (this.gridLogged = !0, XG(`gl1 grid ${bG}`))
      }
      logRenderer() {
        var GG, bG;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const ZG = window.bloxdRenderDebug,
          wG = (0, LG.q)(),
          SG = void 0 === (null === ZG || void 0 === ZG ? void 0 : ZG.parallelCompile) ? "" : `; parallel compile ${ZG.parallelCompile}`;
        XG(`renderer gl ${wG?`${wG.vendor} / ${wG.renderer}`:"(not read)"}; terrain fetch ${null!==(GG=null===ZG||void 0===ZG?void 0:ZG.fetch)&&void 0!==GG?GG:"(not noted)"}${SG}`), XG(`renderer caps ${null!==(bG=null===ZG||void 0===ZG?void 0:ZG.caps)&&void 0!==bG?bG:"(not noted)"}`)
      }
    }
    let iG = null;

    function CG(GG) {
      return (0, QG.e)(), iG ??= new uG(GG), iG
    }
  },
  4712: (GG, bG, ZG) => {
    function wG(GG) {
      if (null === GG) return "backend: none picked (no renderer build)";
      const bG = GG.adapter ? `${GG.adapter.vendor}/${GG.adapter.architecture}` : "none";
      return `backend ${GG.backend}: reason ${GG.reason}, source ${GG.source}, adapter ${bG}`
    }
    ZG.d(bG, {
      b: () => wG
    })
  },
  34345: (GG, bG, ZG) => {
    function wG(GG) {
      return `hidden ${GG.changes} changes, ${Math.round(GG.hiddenMs)} ms`
    }
    ZG.d(bG, {
      c: () => SG,
      f: () => wG
    });
    class SG {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(GG) {
        this.changes++, document.hidden ? this.hiddenSinceMs = GG : this.hiddenSinceMs >= 0 && (this.hiddenMs += GG - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(GG) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? GG - this.hiddenSinceMs : 0)
        }
      }
    }
  },
  41423: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG,
      f: () => LG,
      j: () => kG
    });
    var wG = ZG(40954),
      SG = ZG(40971);

    function LG(GG) {
      if (GG.queries.drawCensus() < wG.Bb.BYTES) return null;
      const bG = GG.memoryData(GG.scratch(), wG.Bb.BYTES, 4, "the draw census");
      return null === bG ? null : {
        terrainOpaque: wG.Bb.terrainOpaque(bG, 0),
        terrainTransparent: wG.Bb.terrainTransparent(bG, 0),
        terrainPack: wG.Bb.terrainPack(bG, 0),
        earthSky: wG.Bb.earthSky(bG, 0),
        skyMeshes: wG.Bb.skyMeshes(bG, 0),
        regular: wG.Bb.regular(bG, 0),
        thin: wG.Bb.thin(bG, 0),
        line: wG.Bb.line(bG, 0),
        text: wG.Bb.text(bG, 0),
        particles: wG.Bb.particles(bG, 0),
        terrainParts: wG.Bb.terrainParts(bG, 0),
        terrainCompiling: wG.Bb.terrainCompiling(bG, 0),
        ringCopiesMax: wG.Bb.ringCopiesMax(bG, 0),
        ringBusyWrites: wG.Bb.ringBusyWrites(bG, 0)
      }
    }

    function yG(GG) {
      const {
        terrainOpaque: bG,
        terrainTransparent: ZG,
        earthSky: wG,
        skyMeshes: SG,
        regular: LG,
        thin: yG,
        line: kG,
        text: UG,
        particles: YG
      } = GG;
      return bG + ZG + wG + SG + LG + yG + kG + UG + YG
    }

    function kG() {
      const GG = (0, SG.f)();
      return !0 === (null === GG || void 0 === GG ? void 0 : GG.isCoreRunning) ? function(GG) {
        const bG = LG(GG);
        if (null === bG) return [];
        const {
          terrainOpaque: ZG,
          terrainTransparent: wG,
          terrainPack: SG,
          earthSky: kG,
          skyMeshes: UG,
          regular: YG,
          thin: VG,
          line: pG,
          text: fG,
          particles: QG
        } = bG;
        return [{
          label: "Drawn",
          value: `${yG(bG)}`
        }, {
          label: "Terrain",
          value: `${ZG} opaque / ${wG} transparent (${SG} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${YG} / ${VG}`
        }, {
          label: "Text / Lines",
          value: `${fG} / ${pG}`
        }, {
          label: "Sky / Particles",
          value: `${kG+UG} / ${QG}`
        }]
      }(GG.api) : []
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);