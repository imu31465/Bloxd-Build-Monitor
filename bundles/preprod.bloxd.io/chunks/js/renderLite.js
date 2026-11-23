export const id = 49;
export const ids = [49];
export const modules = {
  50726: (CC, zC, ZC) => {
    ZC.d(zC, {
      startRenderLite: () => vC
    });
    var QC = ZC(2848),
      wC = ZC(615),
      bC = ZC(107),
      nC = ZC(4733),
      fC = ZC(40858),
      oC = ZC(4727),
      qC = ZC(40542),
      FC = ZC(40423),
      WC = ZC(40580),
      NC = ZC(2800),
      MC = ZC(4445),
      gC = ZC(34016);
    const SC = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class pC {
      constructor(CC) {
        this.label = void 0, this.noted = void 0, this.lines = 0, this.atMs = -1 / 0, this.label = CC
      }
      line(CC, zC) {
        const ZC = this.lines < 10 ? 6e4 : 6e5;
        return void 0 === CC || CC === this.noted || zC - this.atMs < ZC ? null : (this.noted = CC, this.lines++, this.atMs = zC, `${this.label}: ${CC}`)
      }
    }
    class PC {
      constructor() {
        this.failuresLogged = 0, this.heldLogged = !1, this.links = new pC("gl links"), this.programUse = new pC("gl programs")
      }
      failures(CC) {
        const zC = CC ? CC.split(" ") : [],
          ZC = zC.slice(this.failuresLogged).map((CC => {
            var zC;
            const [ZC, QC] = CC.split(":"), wC = null !== (zC = SC.get(ZC.slice(-1))) && void 0 !== zC ? zC : "";
            return `gl link failed: program row ${parseInt(ZC)}${wC}, read ${QC} ms after issue`
          }));
        return this.failuresLogged = zC.length, ZC
      }
      heldAtBackstop(CC) {
        return this.heldLogged || void 0 === CC ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${CC}`)
      }
      summaryLines(CC, zC, ZC, QC) {
        const wC = this.links.line(CC, ZC);
        return [wC && `${wC}; tab ${(0,gC.f)(QC)}`, this.programUse.line(zC, ZC)].filter((CC => null !== CC))
      }
    }
    var GC = ZC(4640);
    class RC {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(CC, zC, ZC) {
        if ("none" !== zC && (this.frames++, "paced" === zC && this.paced++, "drawn" === zC)) {
          if (this.drawn++, this.renderUs += ZC, this.renderUsMax = Math.max(this.renderUsMax, ZC), null !== this.lastDrawnMs) {
            const zC = CC - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, zC), zC >= 50 && this.longGaps++
          }
          this.lastDrawnMs = CC
        }
      }
      restart() {
        this.take(), this.lastDrawnMs = null
      }
      take() {
        const CC = {
          frames: this.frames,
          drawn: this.drawn,
          paced: this.paced,
          gapMaxMs: this.gapMaxMs,
          longGaps: this.longGaps,
          renderUs: this.renderUs,
          renderUsMax: this.renderUsMax
        };
        return this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, CC
      }
    }

    function AC(CC) {
      return (CC / 1048576).toFixed(1)
    }
    class xC {
      constructor() {
        this.logged = 0, this.seen = new Set, this.unlogged = 0
      }
      admit(CC) {
        return this.logged >= 20 || this.seen.has(CC) ? (this.unlogged++, null) : (this.seen.add(CC), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${CC}` : CC)
      }
      takeUnlogged() {
        const CC = this.unlogged;
        return this.unlogged = 0, CC
      }
    }

    function JC(CC) {
      (0, NC.i)("renderlite", CC)
    }
    class IC {
      constructor(CC) {
        this.frames = new RC, this.events = new xC, this.programLines = new PC, this.compileSummary = new pC("webgpu compiles"), this.hidden = new gC.d, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this.visibilityChanged = () => {
          const CC = performance.now();
          this.hidden.changed(CC), this.restartWindow(CC)
        }, this.ZN = () => {
          var CC, zC;
          const ZC = this.session,
            wC = (0, FC.k)(),
            bC = performance.now();
          if (this.logLinks(bC), this.logGrid(), null === ZC || ZC.isStopped || !0 !== (null === wC || void 0 === wC ? void 0 : wC.isCoreRunning)) return void this.restartWindow(bC);
          if (document.hidden) return;
          if (bC - this.windowStart < 2500) return;
          if (! function(CC) {
              return CC < 12 || (CC - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const oC = ZC.headerWord(nC.O.GpuTimed),
            WC = ZC.headerWord(nC.O.GpuFrameUs),
            NC = this.sampled === ZC ? {
              timed: oC - this.gpuTimed >>> 0,
              us: WC - this.gpuUs >>> 0
            } : null;
          this.sampled = ZC, this.gpuTimed = oC, this.gpuUs = WC;
          const MC = null !== (CC = null === (zC = (0, qC.O)((0, QC.z)())) || void 0 === zC ? void 0 : zC.UZC()) && void 0 !== CC ? CC : 0;
          JC(function(CC, zC) {
            const ZC = zC.windowMs / 1e3,
              QC = [`${Math.round(ZC)}s: ${CC.drawn} drawn (${(CC.drawn/ZC).toFixed(1)}/s), ${CC.paced} paced, ${CC.frames-CC.drawn-CC.paced} skipped`, `gap max ${Math.round(CC.gapMaxMs)} ms, ${CC.longGaps} over 50 ms`, `render cpu ${CC.drawn?(CC.renderUs/CC.drawn/1e3).toFixed(2):"-"} ms mean, ${(CC.renderUsMax/1e3).toFixed(1)} max`];
            null !== zC.gpu && QC.push(`gpu ${zC.gpu.timed?(zC.gpu.us/zC.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${zC.gpu.timed} timed`);
            const wC = zC.census;
            QC.push(null === wC ? "draws none yet" : `draws ${(0,fC.c)(wC)} (terrain ${wC.terrainOpaque}+${wC.terrainTransparent}, pack ${wC.terrainPack}, meshes ${wC.regular+wC.thin+wC.line+wC.text}, sky ${wC.earthSky+wC.skyMeshes}, particles ${wC.particles})`), null !== wC && wC.ringCopiesMax > 0 && QC.push(`frame rings ${wC.ringCopiesMax} copies max, ${wC.ringBusyWrites} busy writes so far`);
            const bC = null === zC.gpuBytesBefore ? "" : ` (${zC.gpuBytes>=zC.gpuBytesBefore?"+":"-"}${AC(Math.abs(zC.gpuBytes-zC.gpuBytesBefore))})`;
            return QC.push(`gpu mem ${AC(zC.gpuBytes)} MiB${bC}`), QC.push(`pending ${zC.pending}`, "terrain " + (zC.terrainDrawn ? "drawn" : "not drawn yet")), zC.eventsUnlogged > 0 && QC.push(`${zC.eventsUnlogged} events unlogged`), QC.join("; ")
          }(this.frames.take(), {
            windowMs: bC - this.windowStart,
            gpu: NC,
            census: (0, fC.d)(wC.api),
            gpuBytes: MC,
            gpuBytesBefore: this.gpuBytes,
            pending: ZC.headerWord(nC.O.RenderPending),
            terrainDrawn: 0 !== (ZC.headerWord(nC.O.LoadSteps) & nC.eb.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = MC, this.windowStart = bC
        }, JC(`${(0,GC.b)(CC)}; client ${wC.r.client} (${wC.r.reason})`), setInterval(this.ZN, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(CC, zC, ZC) {
        this.session = CC, this.frames.frame(zC, ZC, "drawn" === ZC ? CC.headerWord(nC.O.RenderUs) : 0)
      }
      coreErrors(CC) {
        for (const {
            code: QC,
            detail: wC
          }
          of CC) {
          var zC, ZC;
          if (QC >= nC.o.RenderDeviceLost && QC <= nC.o.RenderSerialLinks) this.event(`render error ${(0,oC.$d)(QC)}${null!==(zC=null===(ZC=(0,WC.e)(QC,wC))||void 0===ZC?void 0:ZC.words)&&void 0!==zC?zC:""} (detail ${wC})`)
        }
      }
      reload(CC, zC, ZC, QC) {
        this.event(`render reload: ${CC?"webgpu":"gl"} ${ZC}, losses ${zC}${void 0===QC?"":`: ${QC}`}`)
      }
      crashed(CC) {
        let {
          site: zC,
          error: ZC,
          header: QC
        } = CC;
        const wC = null !== QC && 0 !== QC.lastError ? `, last error ${(0,oC.$d)(QC.lastError)} (detail ${QC.lastErrorDetail})` : "",
          bC = ZC instanceof Error ? `${ZC.name}: ${ZC.message}` : null === ZC || void 0 === ZC ? "" : String(ZC);
        this.event(`core stopped at ${zC}${wC}${bC&&`: ${bC}`}`)
      }
      event(CC) {
        const zC = this.events.admit(CC);
        null !== zC && JC(zC)
      }
      restartWindow(CC) {
        this.frames.restart(), this.windowStart = CC;
        const zC = this.session;
        null === zC || zC.isStopped ? this.sampled = null : (this.sampled = zC, this.gpuTimed = zC.headerWord(nC.O.GpuTimed), this.gpuUs = zC.headerWord(nC.O.GpuFrameUs))
      }
      logLinks(CC) {
        const zC = window.bloxdRenderDebug;
        for (const wC of this.programLines.failures(null === zC || void 0 === zC ? void 0 : zC.linkFailures)) this.event(wC);
        const ZC = this.programLines.heldAtBackstop(null === zC || void 0 === zC ? void 0 : zC.heldAtBackstop);
        null !== ZC && JC(ZC);
        for (const wC of this.programLines.summaryLines(null === zC || void 0 === zC ? void 0 : zC.links, null === zC || void 0 === zC ? void 0 : zC.programUse, CC, this.hidden.totals(CC))) JC(wC);
        const QC = this.compileSummary.line(null === zC || void 0 === zC ? void 0 : zC.compiles, CC);
        null !== QC && JC(QC)
      }
      logGrid() {
        var CC;
        const zC = null === (CC = window.bloxdRenderDebug) || void 0 === CC ? void 0 : CC.gridFaces;
        this.gridLogged || void 0 === zC || (this.gridLogged = !0, JC(`gl1 grid ${zC}`))
      }
      logRenderer() {
        var CC, zC;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const ZC = window.bloxdRenderDebug,
          QC = (0, bC.n)(),
          wC = void 0 === (null === ZC || void 0 === ZC ? void 0 : ZC.parallelCompile) ? "" : `; parallel compile ${ZC.parallelCompile}`;
        JC(`renderer gl ${QC?`${QC.vendor} / ${QC.renderer}`:"(not read)"}; terrain fetch ${null!==(CC=null===ZC||void 0===ZC?void 0:ZC.fetch)&&void 0!==CC?CC:"(not noted)"}${wC}`), JC(`renderer caps ${null!==(zC=null===ZC||void 0===ZC?void 0:ZC.caps)&&void 0!==zC?zC:"(not noted)"}`)
      }
    }
    let iC = null;

    function vC(CC) {
      return (0, MC.f)(), iC ??= new IC(CC), iC
    }
  },
  4640: (CC, zC, ZC) => {
    function QC(CC) {
      if (null === CC) return "backend: none picked (no renderer build)";
      const zC = CC.adapter ? `${CC.adapter.vendor}/${CC.adapter.architecture}` : "none";
      return `backend ${CC.backend}: reason ${CC.reason}, source ${CC.source}, adapter ${zC}`
    }
    ZC.d(zC, {
      b: () => QC
    })
  },
  34016: (CC, zC, ZC) => {
    function QC(CC) {
      return `hidden ${CC.changes} changes, ${Math.round(CC.hiddenMs)} ms`
    }
    ZC.d(zC, {
      d: () => wC,
      f: () => QC
    });
    class wC {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(CC) {
        this.changes++, document.hidden ? this.hiddenSinceMs = CC : this.hiddenSinceMs >= 0 && (this.hiddenMs += CC - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(CC) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? CC - this.hiddenSinceMs : 0)
        }
      }
    }
  },
  40858: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => nC,
      d: () => bC,
      e: () => fC
    });
    var QC = ZC(40412),
      wC = ZC(40423);

    function bC(CC) {
      if (CC.queries.drawCensus() < QC.Gb.BYTES) return null;
      const zC = CC.memoryData(CC.scratch(), QC.Gb.BYTES, 4, "the draw census");
      return null === zC ? null : {
        terrainOpaque: QC.Gb.terrainOpaque(zC, 0),
        terrainTransparent: QC.Gb.terrainTransparent(zC, 0),
        terrainPack: QC.Gb.terrainPack(zC, 0),
        earthSky: QC.Gb.earthSky(zC, 0),
        skyMeshes: QC.Gb.skyMeshes(zC, 0),
        regular: QC.Gb.regular(zC, 0),
        thin: QC.Gb.thin(zC, 0),
        line: QC.Gb.line(zC, 0),
        text: QC.Gb.text(zC, 0),
        particles: QC.Gb.particles(zC, 0),
        terrainParts: QC.Gb.terrainParts(zC, 0),
        terrainCompiling: QC.Gb.terrainCompiling(zC, 0),
        ringCopiesMax: QC.Gb.ringCopiesMax(zC, 0),
        ringBusyWrites: QC.Gb.ringBusyWrites(zC, 0)
      }
    }

    function nC(CC) {
      const {
        terrainOpaque: zC,
        terrainTransparent: ZC,
        earthSky: QC,
        skyMeshes: wC,
        regular: bC,
        thin: nC,
        line: fC,
        text: oC,
        particles: qC
      } = CC;
      return zC + ZC + QC + wC + bC + nC + fC + oC + qC
    }

    function fC() {
      const CC = (0, wC.k)();
      return !0 === (null === CC || void 0 === CC ? void 0 : CC.isCoreRunning) ? function(CC) {
        const zC = bC(CC);
        if (null === zC) return [];
        const {
          terrainOpaque: ZC,
          terrainTransparent: QC,
          terrainPack: wC,
          earthSky: fC,
          skyMeshes: oC,
          regular: qC,
          thin: FC,
          line: WC,
          text: NC,
          particles: MC
        } = zC;
        return [{
          label: "Drawn",
          value: `${nC(zC)}`
        }, {
          label: "Terrain",
          value: `${ZC} opaque / ${QC} transparent (${wC} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${qC} / ${FC}`
        }, {
          label: "Text / Lines",
          value: `${NC} / ${WC}`
        }, {
          label: "Sky / Particles",
          value: `${fC+oC} / ${MC}`
        }]
      }(CC.api) : []
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);