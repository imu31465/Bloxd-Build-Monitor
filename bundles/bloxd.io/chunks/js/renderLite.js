export const id = 57;
export const ids = [57];
export const modules = {
  54067: (BB, OB, GB) => {
    GB.d(OB, {
      startRenderLite: () => fB
    });
    var YB = GB(3206),
      DB = GB(662),
      QB = GB(118),
      oB = GB(5287),
      jB = GB(42045),
      yB = GB(5281),
      JB = GB(41729),
      MB = GB(41593),
      PB = GB(41784),
      zB = GB(3136),
      lB = GB(4923),
      pB = GB(34654);
    const qB = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class ZB {
      constructor(BB) {
        this.label = void 0, this.noted = void 0, this.lines = 0, this.atMs = -1 / 0, this.label = BB
      }
      line(BB, OB) {
        const GB = this.lines < 10 ? 6e4 : 6e5;
        return void 0 === BB || BB === this.noted || OB - this.atMs < GB ? null : (this.noted = BB, this.lines++, this.atMs = OB, `${this.label}: ${BB}`)
      }
    }
    class NB {
      constructor() {
        this.failuresLogged = 0, this.heldLogged = !1, this.links = new ZB("gl links"), this.programUse = new ZB("gl programs")
      }
      failures(BB) {
        const OB = BB ? BB.split(" ") : [],
          GB = OB.slice(this.failuresLogged).map((BB => {
            var OB;
            const [GB, YB] = BB.split(":"), DB = null !== (OB = qB.get(GB.slice(-1))) && void 0 !== OB ? OB : "";
            return `gl link failed: program row ${parseInt(GB)}${DB}, read ${YB} ms after issue`
          }));
        return this.failuresLogged = OB.length, GB
      }
      heldAtBackstop(BB) {
        return this.heldLogged || void 0 === BB ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${BB}`)
      }
      summaryLines(BB, OB, GB, YB) {
        const DB = this.links.line(BB, GB);
        return [DB && `${DB}; tab ${(0,pB.d)(YB)}`, this.programUse.line(OB, GB)].filter((BB => null !== BB))
      }
    }
    var RB = GB(5167);
    class WB {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(BB, OB, GB) {
        if ("none" !== OB && (this.frames++, "paced" === OB && this.paced++, "drawn" === OB)) {
          if (this.drawn++, this.renderUs += GB, this.renderUsMax = Math.max(this.renderUsMax, GB), null !== this.lastDrawnMs) {
            const OB = BB - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, OB), OB >= 50 && this.longGaps++
          }
          this.lastDrawnMs = BB
        }
      }
      restart() {
        this.take(), this.lastDrawnMs = null
      }
      take() {
        const BB = {
          frames: this.frames,
          drawn: this.drawn,
          paced: this.paced,
          gapMaxMs: this.gapMaxMs,
          longGaps: this.longGaps,
          renderUs: this.renderUs,
          renderUsMax: this.renderUsMax
        };
        return this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, BB
      }
    }

    function AB(BB) {
      return (BB / 1048576).toFixed(1)
    }
    class VB {
      constructor() {
        this.logged = 0, this.seen = new Set, this.unlogged = 0
      }
      admit(BB) {
        return this.logged >= 20 || this.seen.has(BB) ? (this.unlogged++, null) : (this.seen.add(BB), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${BB}` : BB)
      }
      takeUnlogged() {
        const BB = this.unlogged;
        return this.unlogged = 0, BB
      }
    }

    function SB(BB) {
      (0, zB.m)("renderlite", BB)
    }
    class nB {
      constructor(BB) {
        this.frames = new WB, this.events = new VB, this.programLines = new NB, this.compileSummary = new ZB("webgpu compiles"), this.hidden = new pB.c, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this.visibilityChanged = () => {
          const BB = performance.now();
          this.hidden.changed(BB), this.restartWindow(BB)
        }, this.kP = () => {
          var BB, OB;
          const GB = this.session,
            DB = (0, MB.j)(),
            QB = performance.now();
          if (this.logLinks(QB), this.logGrid(), null === GB || GB.isStopped || !0 !== (null === DB || void 0 === DB ? void 0 : DB.isCoreRunning)) return void this.restartWindow(QB);
          if (document.hidden) return;
          if (QB - this.windowStart < 2500) return;
          if (! function(BB) {
              return BB < 12 || (BB - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const yB = GB.headerWord(oB.O.GpuTimed),
            PB = GB.headerWord(oB.O.GpuFrameUs),
            zB = this.sampled === GB ? {
              timed: yB - this.gpuTimed >>> 0,
              us: PB - this.gpuUs >>> 0
            } : null;
          this.sampled = GB, this.gpuTimed = yB, this.gpuUs = PB;
          const lB = null !== (BB = null === (OB = (0, JB.W)((0, YB.A)())) || void 0 === OB ? void 0 : OB.nDB()) && void 0 !== BB ? BB : 0;
          SB(function(BB, OB) {
            const GB = OB.windowMs / 1e3,
              YB = [`${Math.round(GB)}s: ${BB.drawn} drawn (${(BB.drawn/GB).toFixed(1)}/s), ${BB.paced} paced, ${BB.frames-BB.drawn-BB.paced} skipped`, `gap max ${Math.round(BB.gapMaxMs)} ms, ${BB.longGaps} over 50 ms`, `render cpu ${BB.drawn?(BB.renderUs/BB.drawn/1e3).toFixed(2):"-"} ms mean, ${(BB.renderUsMax/1e3).toFixed(1)} max`];
            null !== OB.gpu && YB.push(`gpu ${OB.gpu.timed?(OB.gpu.us/OB.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${OB.gpu.timed} timed`);
            const DB = OB.census;
            YB.push(null === DB ? "draws none yet" : `draws ${(0,jB.d)(DB)} (terrain ${DB.terrainOpaque}+${DB.terrainTransparent}, pack ${DB.terrainPack}, meshes ${DB.regular+DB.thin+DB.line+DB.text}, sky ${DB.earthSky+DB.skyMeshes}, particles ${DB.particles})`), null !== DB && DB.ringCopiesMax > 0 && YB.push(`frame rings ${DB.ringCopiesMax} copies max, ${DB.ringBusyWrites} busy writes so far`);
            const QB = null === OB.gpuBytesBefore ? "" : ` (${OB.gpuBytes>=OB.gpuBytesBefore?"+":"-"}${AB(Math.abs(OB.gpuBytes-OB.gpuBytesBefore))})`;
            return YB.push(`gpu mem ${AB(OB.gpuBytes)} MiB${QB}`), YB.push(`pending ${OB.pending}`, "terrain " + (OB.terrainDrawn ? "drawn" : "not drawn yet")), OB.eventsUnlogged > 0 && YB.push(`${OB.eventsUnlogged} events unlogged`), YB.join("; ")
          }(this.frames.take(), {
            windowMs: QB - this.windowStart,
            gpu: zB,
            census: (0, jB.e)(DB.api),
            gpuBytes: lB,
            gpuBytesBefore: this.gpuBytes,
            pending: GB.headerWord(oB.O.RenderPending),
            terrainDrawn: 0 !== (GB.headerWord(oB.O.LoadSteps) & oB.bb.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = lB, this.windowStart = QB
        }, SB(`${(0,RB.d)(BB)}; client ${DB.u.client} (${DB.u.reason})`), setInterval(this.kP, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(BB, OB, GB) {
        this.session = BB, this.frames.frame(OB, GB, "drawn" === GB ? BB.headerWord(oB.O.RenderUs) : 0)
      }
      coreErrors(BB) {
        for (const {
            code: YB,
            detail: DB
          }
          of BB) {
          var OB, GB;
          if (YB >= oB.p.RenderDeviceLost && YB <= oB.p.RenderSerialLinks) this.event(`render error ${(0,yB.$d)(YB)}${null!==(OB=null===(GB=(0,PB.d)(YB,DB))||void 0===GB?void 0:GB.words)&&void 0!==OB?OB:""} (detail ${DB})`)
        }
      }
      reload(BB, OB, GB, YB) {
        this.event(`render reload: ${BB?"webgpu":"gl"} ${GB}, losses ${OB}${void 0===YB?"":`: ${YB}`}`)
      }
      glContextLost(BB, OB, GB) {
        const YB = null === OB || void 0 === OB ? void 0 : OB.split(" "),
          DB = 3 === (null === YB || void 0 === YB ? void 0 : YB.length) ? `vertex arrays ${YB[0]}, keyed draws peak ${YB[1]} (sweep floor ${YB[2]})` : "vertex arrays unnoted";
        this.event(`gl context lost ${BB?"in game":"at home"}: ${DB}, render distance ${null!==GB&&void 0!==GB?GB:"none"}`)
      }
      crashed(BB) {
        let {
          site: OB,
          error: GB,
          header: YB
        } = BB;
        const DB = null !== YB && 0 !== YB.lastError ? `, last error ${(0,yB.$d)(YB.lastError)} (detail ${YB.lastErrorDetail})` : "",
          QB = GB instanceof Error ? `${GB.name}: ${GB.message}` : null === GB || void 0 === GB ? "" : String(GB);
        this.event(`core stopped at ${OB}${DB}${QB&&`: ${QB}`}`)
      }
      event(BB) {
        const OB = this.events.admit(BB);
        null !== OB && SB(OB)
      }
      restartWindow(BB) {
        this.frames.restart(), this.windowStart = BB;
        const OB = this.session;
        null === OB || OB.isStopped ? this.sampled = null : (this.sampled = OB, this.gpuTimed = OB.headerWord(oB.O.GpuTimed), this.gpuUs = OB.headerWord(oB.O.GpuFrameUs))
      }
      logLinks(BB) {
        const OB = window.bloxdRenderDebug;
        for (const DB of this.programLines.failures(null === OB || void 0 === OB ? void 0 : OB.linkFailures)) this.event(DB);
        const GB = this.programLines.heldAtBackstop(null === OB || void 0 === OB ? void 0 : OB.heldAtBackstop);
        null !== GB && SB(GB);
        for (const DB of this.programLines.summaryLines(null === OB || void 0 === OB ? void 0 : OB.links, null === OB || void 0 === OB ? void 0 : OB.programUse, BB, this.hidden.totals(BB))) SB(DB);
        const YB = this.compileSummary.line(null === OB || void 0 === OB ? void 0 : OB.compiles, BB);
        null !== YB && SB(YB)
      }
      logGrid() {
        var BB;
        const OB = null === (BB = window.bloxdRenderDebug) || void 0 === BB ? void 0 : BB.gridFaces;
        this.gridLogged || void 0 === OB || (this.gridLogged = !0, SB(`gl1 grid ${OB}`))
      }
      logRenderer() {
        var BB, OB;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const GB = window.bloxdRenderDebug,
          YB = (0, QB.B)(),
          DB = void 0 === (null === GB || void 0 === GB ? void 0 : GB.parallelCompile) ? "" : `; parallel compile ${GB.parallelCompile}`;
        SB(`renderer gl ${YB?`${YB.vendor} / ${YB.renderer}`:"(not read)"}; terrain fetch ${null!==(BB=null===GB||void 0===GB?void 0:GB.fetch)&&void 0!==BB?BB:"(not noted)"}${DB}`), SB(`renderer caps ${null!==(OB=null===GB||void 0===GB?void 0:GB.caps)&&void 0!==OB?OB:"(not noted)"}`)
      }
    }
    let UB = null;

    function fB(BB) {
      return (0, lB.d)(), UB ??= new nB(BB), UB
    }
  },
  5167: (BB, OB, GB) => {
    function YB(BB) {
      if (null === BB) return "backend: none picked (no renderer build)";
      const OB = BB.adapter ? `${BB.adapter.vendor}/${BB.adapter.architecture}` : "none";
      return `backend ${BB.backend}: reason ${BB.reason}, source ${BB.source}, adapter ${OB}`
    }
    GB.d(OB, {
      d: () => YB
    })
  },
  34654: (BB, OB, GB) => {
    function YB(BB) {
      return `hidden ${BB.changes} changes, ${Math.round(BB.hiddenMs)} ms`
    }
    GB.d(OB, {
      c: () => DB,
      d: () => YB
    });
    class DB {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(BB) {
        this.changes++, document.hidden ? this.hiddenSinceMs = BB : this.hiddenSinceMs >= 0 && (this.hiddenMs += BB - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(BB) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? BB - this.hiddenSinceMs : 0)
        }
      }
    }
  },
  42045: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB,
      e: () => QB,
      i: () => jB
    });
    var YB = GB(41579),
      DB = GB(41593);

    function QB(BB) {
      if (BB.queries.drawCensus() < YB.Cb.BYTES) return null;
      const OB = BB.memoryData(BB.scratch(), YB.Cb.BYTES, 4, "the draw census");
      return null === OB ? null : {
        terrainOpaque: YB.Cb.terrainOpaque(OB, 0),
        terrainTransparent: YB.Cb.terrainTransparent(OB, 0),
        terrainPack: YB.Cb.terrainPack(OB, 0),
        earthSky: YB.Cb.earthSky(OB, 0),
        skyMeshes: YB.Cb.skyMeshes(OB, 0),
        regular: YB.Cb.regular(OB, 0),
        thin: YB.Cb.thin(OB, 0),
        line: YB.Cb.line(OB, 0),
        text: YB.Cb.text(OB, 0),
        particles: YB.Cb.particles(OB, 0),
        terrainParts: YB.Cb.terrainParts(OB, 0),
        terrainCompiling: YB.Cb.terrainCompiling(OB, 0),
        ringCopiesMax: YB.Cb.ringCopiesMax(OB, 0),
        ringBusyWrites: YB.Cb.ringBusyWrites(OB, 0)
      }
    }

    function oB(BB) {
      const {
        terrainOpaque: OB,
        terrainTransparent: GB,
        earthSky: YB,
        skyMeshes: DB,
        regular: QB,
        thin: oB,
        line: jB,
        text: yB,
        particles: JB
      } = BB;
      return OB + GB + YB + DB + QB + oB + jB + yB + JB
    }

    function jB() {
      const BB = (0, DB.j)();
      return !0 === (null === BB || void 0 === BB ? void 0 : BB.isCoreRunning) ? function(BB) {
        const OB = QB(BB);
        if (null === OB) return [];
        const {
          terrainOpaque: GB,
          terrainTransparent: YB,
          terrainPack: DB,
          earthSky: jB,
          skyMeshes: yB,
          regular: JB,
          thin: MB,
          line: PB,
          text: zB,
          particles: lB
        } = OB;
        return [{
          label: "Drawn",
          value: `${oB(OB)}`
        }, {
          label: "Terrain",
          value: `${GB} opaque / ${YB} transparent (${DB} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${JB} / ${MB}`
        }, {
          label: "Text / Lines",
          value: `${zB} / ${PB}`
        }, {
          label: "Sky / Particles",
          value: `${jB+yB} / ${lB}`
        }]
      }(BB.api) : []
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);