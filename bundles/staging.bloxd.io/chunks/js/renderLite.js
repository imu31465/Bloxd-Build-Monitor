export const id = 50;
export const ids = [50];
export const modules = {
  51158: (BB, jB, zB) => {
    zB.d(jB, {
      startRenderLite: () => iB
    });
    var QB = zB(2967),
      nB = zB(690),
      dB = zB(140),
      IB = zB(4893),
      NB = zB(41117),
      uB = zB(4887),
      UB = zB(40805),
      aB = zB(40695),
      pB = zB(40842),
      rB = zB(2912),
      sB = zB(4635),
      JB = zB(34105);
    const mB = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class yB {
      constructor(BB) {
        this.label = void 0, this.noted = void 0, this.lines = 0, this.atMs = -1 / 0, this.label = BB
      }
      line(BB, jB) {
        const zB = this.lines < 10 ? 6e4 : 6e5;
        return void 0 === BB || BB === this.noted || jB - this.atMs < zB ? null : (this.noted = BB, this.lines++, this.atMs = jB, `${this.label}: ${BB}`)
      }
    }
    class kB {
      constructor() {
        this.failuresLogged = 0, this.heldLogged = !1, this.links = new yB("gl links"), this.programUse = new yB("gl programs")
      }
      failures(BB) {
        const jB = BB ? BB.split(" ") : [],
          zB = jB.slice(this.failuresLogged).map((BB => {
            var jB;
            const [zB, QB] = BB.split(":"), nB = null !== (jB = mB.get(zB.slice(-1))) && void 0 !== jB ? jB : "";
            return `gl link failed: program row ${parseInt(zB)}${nB}, read ${QB} ms after issue`
          }));
        return this.failuresLogged = jB.length, zB
      }
      heldAtBackstop(BB) {
        return this.heldLogged || void 0 === BB ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${BB}`)
      }
      summaryLines(BB, jB, zB, QB) {
        const nB = this.links.line(BB, zB);
        return [nB && `${nB}; tab ${(0,JB.h)(QB)}`, this.programUse.line(jB, zB)].filter((BB => null !== BB))
      }
    }
    var GB = zB(4786);
    class LB {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(BB, jB, zB) {
        if ("none" !== jB && (this.frames++, "paced" === jB && this.paced++, "drawn" === jB)) {
          if (this.drawn++, this.renderUs += zB, this.renderUsMax = Math.max(this.renderUsMax, zB), null !== this.lastDrawnMs) {
            const jB = BB - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, jB), jB >= 50 && this.longGaps++
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

    function gB(BB) {
      return (BB / 1048576).toFixed(1)
    }
    class tB {
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
      (0, rB.n)("renderlite", BB)
    }
    class MB {
      constructor(BB) {
        this.frames = new LB, this.events = new tB, this.programLines = new kB, this.compileSummary = new yB("webgpu compiles"), this.hidden = new JB.e, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this.visibilityChanged = () => {
          const BB = performance.now();
          this.hidden.changed(BB), this.restartWindow(BB)
        }, this.vp = () => {
          var BB, jB;
          const zB = this.session,
            nB = (0, aB.g)(),
            dB = performance.now();
          if (this.logLinks(dB), this.logGrid(), null === zB || zB.isStopped || !0 !== (null === nB || void 0 === nB ? void 0 : nB.isCoreRunning)) return void this.restartWindow(dB);
          if (document.hidden) return;
          if (dB - this.windowStart < 2500) return;
          if (! function(BB) {
              return BB < 12 || (BB - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const uB = zB.headerWord(IB.C.GpuTimed),
            pB = zB.headerWord(IB.C.GpuFrameUs),
            rB = this.sampled === zB ? {
              timed: uB - this.gpuTimed >>> 0,
              us: pB - this.gpuUs >>> 0
            } : null;
          this.sampled = zB, this.gpuTimed = uB, this.gpuUs = pB;
          const sB = null !== (BB = null === (jB = (0, UB.S)((0, QB.C)())) || void 0 === jB ? void 0 : jB.BQB()) && void 0 !== BB ? BB : 0;
          SB(function(BB, jB) {
            const zB = jB.windowMs / 1e3,
              QB = [`${Math.round(zB)}s: ${BB.drawn} drawn (${(BB.drawn/zB).toFixed(1)}/s), ${BB.paced} paced, ${BB.frames-BB.drawn-BB.paced} skipped`, `gap max ${Math.round(BB.gapMaxMs)} ms, ${BB.longGaps} over 50 ms`, `render cpu ${BB.drawn?(BB.renderUs/BB.drawn/1e3).toFixed(2):"-"} ms mean, ${(BB.renderUsMax/1e3).toFixed(1)} max`];
            null !== jB.gpu && QB.push(`gpu ${jB.gpu.timed?(jB.gpu.us/jB.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${jB.gpu.timed} timed`);
            const nB = jB.census;
            QB.push(null === nB ? "draws none yet" : `draws ${(0,NB.d)(nB)} (terrain ${nB.terrainOpaque}+${nB.terrainTransparent}, pack ${nB.terrainPack}, meshes ${nB.regular+nB.thin+nB.line+nB.text}, sky ${nB.earthSky+nB.skyMeshes}, particles ${nB.particles})`), null !== nB && nB.ringCopiesMax > 0 && QB.push(`frame rings ${nB.ringCopiesMax} copies max, ${nB.ringBusyWrites} busy writes so far`);
            const dB = null === jB.gpuBytesBefore ? "" : ` (${jB.gpuBytes>=jB.gpuBytesBefore?"+":"-"}${gB(Math.abs(jB.gpuBytes-jB.gpuBytesBefore))})`;
            return QB.push(`gpu mem ${gB(jB.gpuBytes)} MiB${dB}`), QB.push(`pending ${jB.pending}`, "terrain " + (jB.terrainDrawn ? "drawn" : "not drawn yet")), jB.eventsUnlogged > 0 && QB.push(`${jB.eventsUnlogged} events unlogged`), QB.join("; ")
          }(this.frames.take(), {
            windowMs: dB - this.windowStart,
            gpu: rB,
            census: (0, NB.e)(nB.api),
            gpuBytes: sB,
            gpuBytesBefore: this.gpuBytes,
            pending: zB.headerWord(IB.C.RenderPending),
            terrainDrawn: 0 !== (zB.headerWord(IB.C.LoadSteps) & IB.M.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = sB, this.windowStart = dB
        }, SB(`${(0,GB.e)(BB)}; client ${nB.p.client} (${nB.p.reason})`), setInterval(this.vp, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(BB, jB, zB) {
        this.session = BB, this.frames.frame(jB, zB, "drawn" === zB ? BB.headerWord(IB.C.RenderUs) : 0)
      }
      coreErrors(BB) {
        for (const {
            code: QB,
            detail: nB
          }
          of BB) {
          var jB, zB;
          if (QB >= IB.m.RenderDeviceLost && QB <= IB.m.RenderSerialLinks) this.event(`render error ${(0,uB.Od)(QB)}${null!==(jB=null===(zB=(0,pB.e)(QB,nB))||void 0===zB?void 0:zB.words)&&void 0!==jB?jB:""} (detail ${nB})`)
        }
      }
      reload(BB, jB, zB, QB) {
        this.event(`render reload: ${BB?"webgpu":"gl"} ${zB}, losses ${jB}${void 0===QB?"":`: ${QB}`}`)
      }
      crashed(BB) {
        let {
          site: jB,
          error: zB,
          header: QB
        } = BB;
        const nB = null !== QB && 0 !== QB.lastError ? `, last error ${(0,uB.Od)(QB.lastError)} (detail ${QB.lastErrorDetail})` : "",
          dB = zB instanceof Error ? `${zB.name}: ${zB.message}` : null === zB || void 0 === zB ? "" : String(zB);
        this.event(`core stopped at ${jB}${nB}${dB&&`: ${dB}`}`)
      }
      event(BB) {
        const jB = this.events.admit(BB);
        null !== jB && SB(jB)
      }
      restartWindow(BB) {
        this.frames.restart(), this.windowStart = BB;
        const jB = this.session;
        null === jB || jB.isStopped ? this.sampled = null : (this.sampled = jB, this.gpuTimed = jB.headerWord(IB.C.GpuTimed), this.gpuUs = jB.headerWord(IB.C.GpuFrameUs))
      }
      logLinks(BB) {
        const jB = window.bloxdRenderDebug;
        for (const nB of this.programLines.failures(null === jB || void 0 === jB ? void 0 : jB.linkFailures)) this.event(nB);
        const zB = this.programLines.heldAtBackstop(null === jB || void 0 === jB ? void 0 : jB.heldAtBackstop);
        null !== zB && SB(zB);
        for (const nB of this.programLines.summaryLines(null === jB || void 0 === jB ? void 0 : jB.links, null === jB || void 0 === jB ? void 0 : jB.programUse, BB, this.hidden.totals(BB))) SB(nB);
        const QB = this.compileSummary.line(null === jB || void 0 === jB ? void 0 : jB.compiles, BB);
        null !== QB && SB(QB)
      }
      logGrid() {
        var BB;
        const jB = null === (BB = window.bloxdRenderDebug) || void 0 === BB ? void 0 : BB.gridFaces;
        this.gridLogged || void 0 === jB || (this.gridLogged = !0, SB(`gl1 grid ${jB}`))
      }
      logRenderer() {
        var BB, jB;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const zB = window.bloxdRenderDebug,
          QB = (0, dB.q)(),
          nB = void 0 === (null === zB || void 0 === zB ? void 0 : zB.parallelCompile) ? "" : `; parallel compile ${zB.parallelCompile}`;
        SB(`renderer gl ${QB?`${QB.vendor} / ${QB.renderer}`:"(not read)"}; terrain fetch ${null!==(BB=null===zB||void 0===zB?void 0:zB.fetch)&&void 0!==BB?BB:"(not noted)"}${nB}`), SB(`renderer caps ${null!==(jB=null===zB||void 0===zB?void 0:zB.caps)&&void 0!==jB?jB:"(not noted)"}`)
      }
    }
    let EB = null;

    function iB(BB) {
      return (0, sB.e)(), EB ??= new MB(BB), EB
    }
  },
  4786: (BB, jB, zB) => {
    function QB(BB) {
      if (null === BB) return "backend: none picked (no renderer build)";
      const jB = BB.adapter ? `${BB.adapter.vendor}/${BB.adapter.architecture}` : "none";
      return `backend ${BB.backend}: reason ${BB.reason}, source ${BB.source}, adapter ${jB}`
    }
    zB.d(jB, {
      e: () => QB
    })
  },
  34105: (BB, jB, zB) => {
    function QB(BB) {
      return `hidden ${BB.changes} changes, ${Math.round(BB.hiddenMs)} ms`
    }
    zB.d(jB, {
      e: () => nB,
      h: () => QB
    });
    class nB {
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
  41117: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => IB,
      e: () => dB,
      h: () => NB
    });
    var QB = zB(40682),
      nB = zB(40695);

    function dB(BB) {
      if (BB.queries.drawCensus() < QB.Kb.BYTES) return null;
      const jB = BB.memoryData(BB.scratch(), QB.Kb.BYTES, 4, "the draw census");
      return null === jB ? null : {
        terrainOpaque: QB.Kb.terrainOpaque(jB, 0),
        terrainTransparent: QB.Kb.terrainTransparent(jB, 0),
        terrainPack: QB.Kb.terrainPack(jB, 0),
        earthSky: QB.Kb.earthSky(jB, 0),
        skyMeshes: QB.Kb.skyMeshes(jB, 0),
        regular: QB.Kb.regular(jB, 0),
        thin: QB.Kb.thin(jB, 0),
        line: QB.Kb.line(jB, 0),
        text: QB.Kb.text(jB, 0),
        particles: QB.Kb.particles(jB, 0),
        terrainParts: QB.Kb.terrainParts(jB, 0),
        terrainCompiling: QB.Kb.terrainCompiling(jB, 0),
        ringCopiesMax: QB.Kb.ringCopiesMax(jB, 0),
        ringBusyWrites: QB.Kb.ringBusyWrites(jB, 0)
      }
    }

    function IB(BB) {
      const {
        terrainOpaque: jB,
        terrainTransparent: zB,
        earthSky: QB,
        skyMeshes: nB,
        regular: dB,
        thin: IB,
        line: NB,
        text: uB,
        particles: UB
      } = BB;
      return jB + zB + QB + nB + dB + IB + NB + uB + UB
    }

    function NB() {
      const BB = (0, nB.g)();
      return !0 === (null === BB || void 0 === BB ? void 0 : BB.isCoreRunning) ? function(BB) {
        const jB = dB(BB);
        if (null === jB) return [];
        const {
          terrainOpaque: zB,
          terrainTransparent: QB,
          terrainPack: nB,
          earthSky: NB,
          skyMeshes: uB,
          regular: UB,
          thin: aB,
          line: pB,
          text: rB,
          particles: sB
        } = jB;
        return [{
          label: "Drawn",
          value: `${IB(jB)}`
        }, {
          label: "Terrain",
          value: `${zB} opaque / ${QB} transparent (${nB} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${UB} / ${aB}`
        }, {
          label: "Text / Lines",
          value: `${rB} / ${pB}`
        }, {
          label: "Sky / Particles",
          value: `${NB+uB} / ${sB}`
        }]
      }(BB.api) : []
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);