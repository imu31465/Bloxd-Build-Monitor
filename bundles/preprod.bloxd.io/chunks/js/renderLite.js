export const id = 56;
export const ids = [56];
export const modules = {
  53760: (MM, rM, iM) => {
    iM.d(rM, {
      startRenderLite: () => wM
    });
    var OM = iM(3185),
      SM = iM(656),
      jM = iM(114),
      aM = iM(5200),
      PM = iM(42135),
      nM = iM(5198),
      QM = iM(41798),
      zM = iM(41677),
      LM = iM(41846),
      mM = iM(3122),
      HM = iM(4895),
      hM = iM(34904);
    const JM = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class dM {
      constructor(MM) {
        this.label = void 0, this.noted = void 0, this.lines = 0, this.atMs = -1 / 0, this.label = MM
      }
      line(MM, rM) {
        const iM = this.lines < 10 ? 6e4 : 6e5;
        return void 0 === MM || MM === this.noted || rM - this.atMs < iM ? null : (this.noted = MM, this.lines++, this.atMs = rM, `${this.label}: ${MM}`)
      }
    }
    class yM {
      constructor() {
        this.failuresLogged = 0, this.heldLogged = !1, this.links = new dM("gl links"), this.programUse = new dM("gl programs")
      }
      failures(MM) {
        const rM = MM ? MM.split(" ") : [],
          iM = rM.slice(this.failuresLogged).map((MM => {
            var rM;
            const [iM, OM] = MM.split(":"), SM = null !== (rM = JM.get(iM.slice(-1))) && void 0 !== rM ? rM : "";
            return `gl link failed: program row ${parseInt(iM)}${SM}, read ${OM} ms after issue`
          }));
        return this.failuresLogged = rM.length, iM
      }
      heldAtBackstop(MM) {
        return this.heldLogged || void 0 === MM ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${MM}`)
      }
      summaryLines(MM, rM, iM, OM) {
        const SM = this.links.line(MM, iM);
        return [SM && `${SM}; tab ${(0,hM.c)(OM)}`, this.programUse.line(rM, iM)].filter((MM => null !== MM))
      }
    }
    var lM = iM(5076);
    class EM {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(MM, rM, iM) {
        if ("none" !== rM && (this.frames++, "paced" === rM && this.paced++, "drawn" === rM)) {
          if (this.drawn++, this.renderUs += iM, this.renderUsMax = Math.max(this.renderUsMax, iM), null !== this.lastDrawnMs) {
            const rM = MM - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, rM), rM >= 50 && this.longGaps++
          }
          this.lastDrawnMs = MM
        }
      }
      restart() {
        this.take(), this.lastDrawnMs = null
      }
      take() {
        const MM = {
          frames: this.frames,
          drawn: this.drawn,
          paced: this.paced,
          gapMaxMs: this.gapMaxMs,
          longGaps: this.longGaps,
          renderUs: this.renderUs,
          renderUsMax: this.renderUsMax
        };
        return this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, MM
      }
    }

    function UM(MM) {
      return (MM / 1048576).toFixed(1)
    }
    class GM {
      constructor() {
        this.logged = 0, this.seen = new Set, this.unlogged = 0
      }
      admit(MM) {
        return this.logged >= 20 || this.seen.has(MM) ? (this.unlogged++, null) : (this.seen.add(MM), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${MM}` : MM)
      }
      takeUnlogged() {
        const MM = this.unlogged;
        return this.unlogged = 0, MM
      }
    }

    function CM(MM) {
      (0, mM.k)("renderlite", MM)
    }
    class eM {
      constructor(MM) {
        this.frames = new EM, this.events = new GM, this.programLines = new yM, this.compileSummary = new dM("webgpu compiles"), this.hidden = new hM.b, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this.visibilityChanged = () => {
          const MM = performance.now();
          this.hidden.changed(MM), this.restartWindow(MM)
        }, this.bL = () => {
          var MM, rM;
          const iM = this.session,
            SM = (0, zM.e)(),
            jM = performance.now();
          if (this.logLinks(jM), this.logGrid(), null === iM || iM.isStopped || !0 !== (null === SM || void 0 === SM ? void 0 : SM.isCoreRunning)) return void this.restartWindow(jM);
          if (document.hidden) return;
          if (jM - this.windowStart < 2500) return;
          if (! function(MM) {
              return MM < 12 || (MM - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const nM = iM.headerWord(aM.K.GpuTimed),
            LM = iM.headerWord(aM.K.GpuFrameUs),
            mM = this.sampled === iM ? {
              timed: nM - this.gpuTimed >>> 0,
              us: LM - this.gpuUs >>> 0
            } : null;
          this.sampled = iM, this.gpuTimed = nM, this.gpuUs = LM;
          const HM = null !== (MM = null === (rM = (0, QM.P)((0, OM.E)())) || void 0 === rM ? void 0 : rM.zOM()) && void 0 !== MM ? MM : 0;
          CM(function(MM, rM) {
            const iM = rM.windowMs / 1e3,
              OM = [`${Math.round(iM)}s: ${MM.drawn} drawn (${(MM.drawn/iM).toFixed(1)}/s), ${MM.paced} paced, ${MM.frames-MM.drawn-MM.paced} skipped`, `gap max ${Math.round(MM.gapMaxMs)} ms, ${MM.longGaps} over 50 ms`, `render cpu ${MM.drawn?(MM.renderUs/MM.drawn/1e3).toFixed(2):"-"} ms mean, ${(MM.renderUsMax/1e3).toFixed(1)} max`];
            null !== rM.gpu && OM.push(`gpu ${rM.gpu.timed?(rM.gpu.us/rM.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${rM.gpu.timed} timed`);
            const SM = rM.census;
            OM.push(null === SM ? "draws none yet" : `draws ${(0,PM.c)(SM)} (terrain ${SM.terrainOpaque}+${SM.terrainTransparent}, pack ${SM.terrainPack}, meshes ${SM.regular+SM.thin+SM.line+SM.text}, sky ${SM.earthSky+SM.skyMeshes}, particles ${SM.particles})`), null !== SM && SM.ringCopiesMax > 0 && OM.push(`frame rings ${SM.ringCopiesMax} copies max, ${SM.ringBusyWrites} busy writes so far`);
            const jM = null === rM.gpuBytesBefore ? "" : ` (${rM.gpuBytes>=rM.gpuBytesBefore?"+":"-"}${UM(Math.abs(rM.gpuBytes-rM.gpuBytesBefore))})`;
            return OM.push(`gpu mem ${UM(rM.gpuBytes)} MiB${jM}`), OM.push(`pending ${rM.pending}`, "terrain " + (rM.terrainDrawn ? "drawn" : "not drawn yet")), rM.eventsUnlogged > 0 && OM.push(`${rM.eventsUnlogged} events unlogged`), OM.join("; ")
          }(this.frames.take(), {
            windowMs: jM - this.windowStart,
            gpu: mM,
            census: (0, PM.f)(SM.api),
            gpuBytes: HM,
            gpuBytesBefore: this.gpuBytes,
            pending: iM.headerWord(aM.K.RenderPending),
            terrainDrawn: 0 !== (iM.headerWord(aM.K.LoadSteps) & aM.T.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = HM, this.windowStart = jM
        }, CM(`${(0,lM.d)(MM)}; client ${SM.x.client} (${SM.x.reason})`), setInterval(this.bL, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(MM, rM, iM) {
        this.session = MM, this.frames.frame(rM, iM, "drawn" === iM ? MM.headerWord(aM.K.RenderUs) : 0)
      }
      coreErrors(MM) {
        for (const {
            code: OM,
            detail: SM
          }
          of MM) {
          var rM, iM;
          if (OM >= aM.n.RenderDeviceLost && OM <= aM.n.RenderSerialLinks) this.event(`render error ${(0,nM.Yd)(OM)}${null!==(rM=null===(iM=(0,LM.e)(OM,SM))||void 0===iM?void 0:iM.words)&&void 0!==rM?rM:""} (detail ${SM})`)
        }
      }
      reload(MM, rM, iM, OM) {
        this.event(`render reload: ${MM?"webgpu":"gl"} ${iM}, losses ${rM}${void 0===OM?"":`: ${OM}`}`)
      }
      crashed(MM) {
        let {
          site: rM,
          error: iM,
          header: OM
        } = MM;
        const SM = null !== OM && 0 !== OM.lastError ? `, last error ${(0,nM.Yd)(OM.lastError)} (detail ${OM.lastErrorDetail})` : "",
          jM = iM instanceof Error ? `${iM.name}: ${iM.message}` : null === iM || void 0 === iM ? "" : String(iM);
        this.event(`core stopped at ${rM}${SM}${jM&&`: ${jM}`}`)
      }
      event(MM) {
        const rM = this.events.admit(MM);
        null !== rM && CM(rM)
      }
      restartWindow(MM) {
        this.frames.restart(), this.windowStart = MM;
        const rM = this.session;
        null === rM || rM.isStopped ? this.sampled = null : (this.sampled = rM, this.gpuTimed = rM.headerWord(aM.K.GpuTimed), this.gpuUs = rM.headerWord(aM.K.GpuFrameUs))
      }
      logLinks(MM) {
        const rM = window.bloxdRenderDebug;
        for (const SM of this.programLines.failures(null === rM || void 0 === rM ? void 0 : rM.linkFailures)) this.event(SM);
        const iM = this.programLines.heldAtBackstop(null === rM || void 0 === rM ? void 0 : rM.heldAtBackstop);
        null !== iM && CM(iM);
        for (const SM of this.programLines.summaryLines(null === rM || void 0 === rM ? void 0 : rM.links, null === rM || void 0 === rM ? void 0 : rM.programUse, MM, this.hidden.totals(MM))) CM(SM);
        const OM = this.compileSummary.line(null === rM || void 0 === rM ? void 0 : rM.compiles, MM);
        null !== OM && CM(OM)
      }
      logGrid() {
        var MM;
        const rM = null === (MM = window.bloxdRenderDebug) || void 0 === MM ? void 0 : MM.gridFaces;
        this.gridLogged || void 0 === rM || (this.gridLogged = !0, CM(`gl1 grid ${rM}`))
      }
      logRenderer() {
        var MM, rM;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const iM = window.bloxdRenderDebug,
          OM = (0, jM.y)(),
          SM = void 0 === (null === iM || void 0 === iM ? void 0 : iM.parallelCompile) ? "" : `; parallel compile ${iM.parallelCompile}`;
        CM(`renderer gl ${OM?`${OM.vendor} / ${OM.renderer}`:"(not read)"}; terrain fetch ${null!==(MM=null===iM||void 0===iM?void 0:iM.fetch)&&void 0!==MM?MM:"(not noted)"}${SM}`), CM(`renderer caps ${null!==(rM=null===iM||void 0===iM?void 0:iM.caps)&&void 0!==rM?rM:"(not noted)"}`)
      }
    }
    let bM = null;

    function wM(MM) {
      return (0, HM.d)(), bM ??= new eM(MM), bM
    }
  },
  5076: (MM, rM, iM) => {
    function OM(MM) {
      if (null === MM) return "backend: none picked (no renderer build)";
      const rM = MM.adapter ? `${MM.adapter.vendor}/${MM.adapter.architecture}` : "none";
      return `backend ${MM.backend}: reason ${MM.reason}, source ${MM.source}, adapter ${rM}`
    }
    iM.d(rM, {
      d: () => OM
    })
  },
  34904: (MM, rM, iM) => {
    function OM(MM) {
      return `hidden ${MM.changes} changes, ${Math.round(MM.hiddenMs)} ms`
    }
    iM.d(rM, {
      b: () => SM,
      c: () => OM
    });
    class SM {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(MM) {
        this.changes++, document.hidden ? this.hiddenSinceMs = MM : this.hiddenSinceMs >= 0 && (this.hiddenMs += MM - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(MM) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? MM - this.hiddenSinceMs : 0)
        }
      }
    }
  },
  42135: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM,
      f: () => jM,
      j: () => PM
    });
    var OM = iM(41669),
      SM = iM(41677);

    function jM(MM) {
      if (MM.queries.drawCensus() < OM.wb.BYTES) return null;
      const rM = MM.memoryData(MM.scratch(), OM.wb.BYTES, 4, "the draw census");
      return null === rM ? null : {
        terrainOpaque: OM.wb.terrainOpaque(rM, 0),
        terrainTransparent: OM.wb.terrainTransparent(rM, 0),
        terrainPack: OM.wb.terrainPack(rM, 0),
        earthSky: OM.wb.earthSky(rM, 0),
        skyMeshes: OM.wb.skyMeshes(rM, 0),
        regular: OM.wb.regular(rM, 0),
        thin: OM.wb.thin(rM, 0),
        line: OM.wb.line(rM, 0),
        text: OM.wb.text(rM, 0),
        particles: OM.wb.particles(rM, 0),
        terrainParts: OM.wb.terrainParts(rM, 0),
        terrainCompiling: OM.wb.terrainCompiling(rM, 0),
        ringCopiesMax: OM.wb.ringCopiesMax(rM, 0),
        ringBusyWrites: OM.wb.ringBusyWrites(rM, 0)
      }
    }

    function aM(MM) {
      const {
        terrainOpaque: rM,
        terrainTransparent: iM,
        earthSky: OM,
        skyMeshes: SM,
        regular: jM,
        thin: aM,
        line: PM,
        text: nM,
        particles: QM
      } = MM;
      return rM + iM + OM + SM + jM + aM + PM + nM + QM
    }

    function PM() {
      const MM = (0, SM.e)();
      return !0 === (null === MM || void 0 === MM ? void 0 : MM.isCoreRunning) ? function(MM) {
        const rM = jM(MM);
        if (null === rM) return [];
        const {
          terrainOpaque: iM,
          terrainTransparent: OM,
          terrainPack: SM,
          earthSky: PM,
          skyMeshes: nM,
          regular: QM,
          thin: zM,
          line: LM,
          text: mM,
          particles: HM
        } = rM;
        return [{
          label: "Drawn",
          value: `${aM(rM)}`
        }, {
          label: "Terrain",
          value: `${iM} opaque / ${OM} transparent (${SM} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${QM} / ${zM}`
        }, {
          label: "Text / Lines",
          value: `${mM} / ${LM}`
        }, {
          label: "Sky / Particles",
          value: `${PM+nM} / ${HM}`
        }]
      }(MM.api) : []
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);