export const id = 50;
export const ids = [50];
export const modules = {
  51069: (BB, IB, ZB) => {
    ZB.d(IB, {
      startRenderLite: () => OB
    });
    var TB = ZB(3036),
      JB = ZB(684),
      oB = ZB(138),
      GB = ZB(4975),
      vB = ZB(41052),
      kB = ZB(4969),
      cB = ZB(40759),
      nB = ZB(40643),
      hB = ZB(40792),
      zB = ZB(2973),
      FB = ZB(4698),
      NB = ZB(34046);
    const gB = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class qB {
      constructor(BB) {
        this.label = void 0, this.noted = void 0, this.lines = 0, this.atMs = -1 / 0, this.label = BB
      }
      line(BB, IB) {
        const ZB = this.lines < 10 ? 6e4 : 6e5;
        return void 0 === BB || BB === this.noted || IB - this.atMs < ZB ? null : (this.noted = BB, this.lines++, this.atMs = IB, `${this.label}: ${BB}`)
      }
    }
    class yB {
      constructor() {
        this.failuresLogged = 0, this.heldLogged = !1, this.links = new qB("gl links"), this.programUse = new qB("gl programs")
      }
      failures(BB) {
        const IB = BB ? BB.split(" ") : [],
          ZB = IB.slice(this.failuresLogged).map((BB => {
            var IB;
            const [ZB, TB] = BB.split(":"), JB = null !== (IB = gB.get(ZB.slice(-1))) && void 0 !== IB ? IB : "";
            return `gl link failed: program row ${parseInt(ZB)}${JB}, read ${TB} ms after issue`
          }));
        return this.failuresLogged = IB.length, ZB
      }
      heldAtBackstop(BB) {
        return this.heldLogged || void 0 === BB ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${BB}`)
      }
      summaryLines(BB, IB, ZB, TB) {
        const JB = this.links.line(BB, ZB);
        return [JB && `${JB}; tab ${(0,NB.f)(TB)}`, this.programUse.line(IB, ZB)].filter((BB => null !== BB))
      }
    }
    var UB = ZB(4879);
    class WB {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(BB, IB, ZB) {
        if ("none" !== IB && (this.frames++, "paced" === IB && this.paced++, "drawn" === IB)) {
          if (this.drawn++, this.renderUs += ZB, this.renderUsMax = Math.max(this.renderUsMax, ZB), null !== this.lastDrawnMs) {
            const IB = BB - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, IB), IB >= 50 && this.longGaps++
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

    function dB(BB) {
      return (BB / 1048576).toFixed(1)
    }
    class CB {
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

    function QB(BB) {
      (0, zB.o)("renderlite", BB)
    }
    class sB {
      constructor(BB) {
        this.frames = new WB, this.events = new CB, this.programLines = new yB, this.compileSummary = new qB("webgpu compiles"), this.hidden = new NB.b, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this.visibilityChanged = () => {
          const BB = performance.now();
          this.hidden.changed(BB), this.restartWindow(BB)
        }, this.Iz = () => {
          var BB, IB;
          const ZB = this.session,
            JB = (0, nB.j)(),
            oB = performance.now();
          if (this.logLinks(oB), this.logGrid(), null === ZB || ZB.isStopped || !0 !== (null === JB || void 0 === JB ? void 0 : JB.isCoreRunning)) return void this.restartWindow(oB);
          if (document.hidden) return;
          if (oB - this.windowStart < 2500) return;
          if (! function(BB) {
              return BB < 12 || (BB - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const kB = ZB.headerWord(GB.J.GpuTimed),
            hB = ZB.headerWord(GB.J.GpuFrameUs),
            zB = this.sampled === ZB ? {
              timed: kB - this.gpuTimed >>> 0,
              us: hB - this.gpuUs >>> 0
            } : null;
          this.sampled = ZB, this.gpuTimed = kB, this.gpuUs = hB;
          const FB = null !== (BB = null === (IB = (0, cB.Q)((0, TB.x)())) || void 0 === IB ? void 0 : IB.YTB()) && void 0 !== BB ? BB : 0;
          QB(function(BB, IB) {
            const ZB = IB.windowMs / 1e3,
              TB = [`${Math.round(ZB)}s: ${BB.drawn} drawn (${(BB.drawn/ZB).toFixed(1)}/s), ${BB.paced} paced, ${BB.frames-BB.drawn-BB.paced} skipped`, `gap max ${Math.round(BB.gapMaxMs)} ms, ${BB.longGaps} over 50 ms`, `render cpu ${BB.drawn?(BB.renderUs/BB.drawn/1e3).toFixed(2):"-"} ms mean, ${(BB.renderUsMax/1e3).toFixed(1)} max`];
            null !== IB.gpu && TB.push(`gpu ${IB.gpu.timed?(IB.gpu.us/IB.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${IB.gpu.timed} timed`);
            const JB = IB.census;
            TB.push(null === JB ? "draws none yet" : `draws ${(0,vB.d)(JB)} (terrain ${JB.terrainOpaque}+${JB.terrainTransparent}, pack ${JB.terrainPack}, meshes ${JB.regular+JB.thin+JB.line+JB.text}, sky ${JB.earthSky+JB.skyMeshes}, particles ${JB.particles})`), null !== JB && JB.ringCopiesMax > 0 && TB.push(`frame rings ${JB.ringCopiesMax} copies max, ${JB.ringBusyWrites} busy writes so far`);
            const oB = null === IB.gpuBytesBefore ? "" : ` (${IB.gpuBytes>=IB.gpuBytesBefore?"+":"-"}${dB(Math.abs(IB.gpuBytes-IB.gpuBytesBefore))})`;
            return TB.push(`gpu mem ${dB(IB.gpuBytes)} MiB${oB}`), TB.push(`pending ${IB.pending}`, "terrain " + (IB.terrainDrawn ? "drawn" : "not drawn yet")), IB.eventsUnlogged > 0 && TB.push(`${IB.eventsUnlogged} events unlogged`), TB.join("; ")
          }(this.frames.take(), {
            windowMs: oB - this.windowStart,
            gpu: zB,
            census: (0, vB.e)(JB.api),
            gpuBytes: FB,
            gpuBytesBefore: this.gpuBytes,
            pending: ZB.headerWord(GB.J.RenderPending),
            terrainDrawn: 0 !== (ZB.headerWord(GB.J.LoadSteps) & GB.W.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = FB, this.windowStart = oB
        }, QB(`${(0,UB.b)(BB)}; client ${JB.p.client} (${JB.p.reason})`), setInterval(this.Iz, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(BB, IB, ZB) {
        this.session = BB, this.frames.frame(IB, ZB, "drawn" === ZB ? BB.headerWord(GB.J.RenderUs) : 0)
      }
      coreErrors(BB) {
        for (const {
            code: TB,
            detail: JB
          }
          of BB) {
          var IB, ZB;
          if (TB >= GB.n.RenderDeviceLost && TB <= GB.n.RenderSerialLinks) this.event(`render error ${(0,kB.fe)(TB)}${null!==(IB=null===(ZB=(0,hB.b)(TB,JB))||void 0===ZB?void 0:ZB.words)&&void 0!==IB?IB:""} (detail ${JB})`)
        }
      }
      reload(BB, IB, ZB, TB) {
        this.event(`render reload: ${BB?"webgpu":"gl"} ${ZB}, losses ${IB}${void 0===TB?"":`: ${TB}`}`)
      }
      crashed(BB) {
        let {
          site: IB,
          error: ZB,
          header: TB
        } = BB;
        const JB = null !== TB && 0 !== TB.lastError ? `, last error ${(0,kB.fe)(TB.lastError)} (detail ${TB.lastErrorDetail})` : "",
          oB = ZB instanceof Error ? `${ZB.name}: ${ZB.message}` : null === ZB || void 0 === ZB ? "" : String(ZB);
        this.event(`core stopped at ${IB}${JB}${oB&&`: ${oB}`}`)
      }
      event(BB) {
        const IB = this.events.admit(BB);
        null !== IB && QB(IB)
      }
      restartWindow(BB) {
        this.frames.restart(), this.windowStart = BB;
        const IB = this.session;
        null === IB || IB.isStopped ? this.sampled = null : (this.sampled = IB, this.gpuTimed = IB.headerWord(GB.J.GpuTimed), this.gpuUs = IB.headerWord(GB.J.GpuFrameUs))
      }
      logLinks(BB) {
        const IB = window.bloxdRenderDebug;
        for (const JB of this.programLines.failures(null === IB || void 0 === IB ? void 0 : IB.linkFailures)) this.event(JB);
        const ZB = this.programLines.heldAtBackstop(null === IB || void 0 === IB ? void 0 : IB.heldAtBackstop);
        null !== ZB && QB(ZB);
        for (const JB of this.programLines.summaryLines(null === IB || void 0 === IB ? void 0 : IB.links, null === IB || void 0 === IB ? void 0 : IB.programUse, BB, this.hidden.totals(BB))) QB(JB);
        const TB = this.compileSummary.line(null === IB || void 0 === IB ? void 0 : IB.compiles, BB);
        null !== TB && QB(TB)
      }
      logGrid() {
        var BB;
        const IB = null === (BB = window.bloxdRenderDebug) || void 0 === BB ? void 0 : BB.gridFaces;
        this.gridLogged || void 0 === IB || (this.gridLogged = !0, QB(`gl1 grid ${IB}`))
      }
      logRenderer() {
        var BB, IB;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const ZB = window.bloxdRenderDebug,
          TB = (0, oB.p)(),
          JB = void 0 === (null === ZB || void 0 === ZB ? void 0 : ZB.parallelCompile) ? "" : `; parallel compile ${ZB.parallelCompile}`;
        QB(`renderer gl ${TB?`${TB.vendor} / ${TB.renderer}`:"(not read)"}; terrain fetch ${null!==(BB=null===ZB||void 0===ZB?void 0:ZB.fetch)&&void 0!==BB?BB:"(not noted)"}${JB}`), QB(`renderer caps ${null!==(IB=null===ZB||void 0===ZB?void 0:ZB.caps)&&void 0!==IB?IB:"(not noted)"}`)
      }
    }
    let wB = null;

    function OB(BB) {
      return (0, FB.g)(), wB ??= new sB(BB), wB
    }
  },
  4879: (BB, IB, ZB) => {
    function TB(BB) {
      if (null === BB) return "backend: none picked (no renderer build)";
      const IB = BB.adapter ? `${BB.adapter.vendor}/${BB.adapter.architecture}` : "none";
      return `backend ${BB.backend}: reason ${BB.reason}, source ${BB.source}, adapter ${IB}`
    }
    ZB.d(IB, {
      b: () => TB
    })
  },
  34046: (BB, IB, ZB) => {
    function TB(BB) {
      return `hidden ${BB.changes} changes, ${Math.round(BB.hiddenMs)} ms`
    }
    ZB.d(IB, {
      b: () => JB,
      f: () => TB
    });
    class JB {
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
  41052: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => GB,
      e: () => oB,
      h: () => vB
    });
    var TB = ZB(40633),
      JB = ZB(40643);

    function oB(BB) {
      if (BB.queries.drawCensus() < TB.qb.BYTES) return null;
      const IB = BB.memoryData(BB.scratch(), TB.qb.BYTES, 4, "the draw census");
      return null === IB ? null : {
        terrainOpaque: TB.qb.terrainOpaque(IB, 0),
        terrainTransparent: TB.qb.terrainTransparent(IB, 0),
        terrainPack: TB.qb.terrainPack(IB, 0),
        earthSky: TB.qb.earthSky(IB, 0),
        skyMeshes: TB.qb.skyMeshes(IB, 0),
        regular: TB.qb.regular(IB, 0),
        thin: TB.qb.thin(IB, 0),
        line: TB.qb.line(IB, 0),
        text: TB.qb.text(IB, 0),
        particles: TB.qb.particles(IB, 0),
        terrainParts: TB.qb.terrainParts(IB, 0),
        terrainCompiling: TB.qb.terrainCompiling(IB, 0),
        ringCopiesMax: TB.qb.ringCopiesMax(IB, 0),
        ringBusyWrites: TB.qb.ringBusyWrites(IB, 0)
      }
    }

    function GB(BB) {
      const {
        terrainOpaque: IB,
        terrainTransparent: ZB,
        earthSky: TB,
        skyMeshes: JB,
        regular: oB,
        thin: GB,
        line: vB,
        text: kB,
        particles: cB
      } = BB;
      return IB + ZB + TB + JB + oB + GB + vB + kB + cB
    }

    function vB() {
      const BB = (0, JB.j)();
      return !0 === (null === BB || void 0 === BB ? void 0 : BB.isCoreRunning) ? function(BB) {
        const IB = oB(BB);
        if (null === IB) return [];
        const {
          terrainOpaque: ZB,
          terrainTransparent: TB,
          terrainPack: JB,
          earthSky: vB,
          skyMeshes: kB,
          regular: cB,
          thin: nB,
          line: hB,
          text: zB,
          particles: FB
        } = IB;
        return [{
          label: "Drawn",
          value: `${GB(IB)}`
        }, {
          label: "Terrain",
          value: `${ZB} opaque / ${TB} transparent (${JB} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${cB} / ${nB}`
        }, {
          label: "Text / Lines",
          value: `${zB} / ${hB}`
        }, {
          label: "Sky / Particles",
          value: `${vB+kB} / ${FB}`
        }]
      }(BB.api) : []
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);