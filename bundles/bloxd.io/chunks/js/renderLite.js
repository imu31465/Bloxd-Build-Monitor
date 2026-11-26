export const id = 56;
export const ids = [56];
export const modules = {
  53961: (VV, eV, xV) => {
    xV.d(eV, {
      startRenderLite: () => NV
    });
    var JV = xV(3194),
      YV = xV(686),
      UV = xV(134),
      yV = xV(5301),
      pV = xV(42341),
      QV = xV(5297),
      nV = xV(42001),
      wV = xV(41861),
      ZV = xV(42046),
      vV = xV(3142),
      rV = xV(4981),
      kV = xV(35165);
    const bV = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class EV {
      constructor(VV) {
        this.label = void 0, this.noted = void 0, this.lines = 0, this.atMs = -1 / 0, this.label = VV
      }
      line(VV, eV) {
        const xV = this.lines < 10 ? 6e4 : 6e5;
        return void 0 === VV || VV === this.noted || eV - this.atMs < xV ? null : (this.noted = VV, this.lines++, this.atMs = eV, `${this.label}: ${VV}`)
      }
    }
    class BV {
      constructor() {
        this.failuresLogged = 0, this.heldLogged = !1, this.links = new EV("gl links"), this.programUse = new EV("gl programs")
      }
      failures(VV) {
        const eV = VV ? VV.split(" ") : [],
          xV = eV.slice(this.failuresLogged).map((VV => {
            var eV;
            const [xV, JV] = VV.split(":"), YV = null !== (eV = bV.get(xV.slice(-1))) && void 0 !== eV ? eV : "";
            return `gl link failed: program row ${parseInt(xV)}${YV}, read ${JV} ms after issue`
          }));
        return this.failuresLogged = eV.length, xV
      }
      heldAtBackstop(VV) {
        return this.heldLogged || void 0 === VV ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${VV}`)
      }
      summaryLines(VV, eV, xV, JV) {
        const YV = this.links.line(VV, xV);
        return [YV && `${YV}; tab ${(0,kV.f)(JV)}`, this.programUse.line(eV, xV)].filter((VV => null !== VV))
      }
    }
    var jV = xV(5189);
    class qV {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(VV, eV, xV) {
        if ("none" !== eV && (this.frames++, "paced" === eV && this.paced++, "drawn" === eV)) {
          if (this.drawn++, this.renderUs += xV, this.renderUsMax = Math.max(this.renderUsMax, xV), null !== this.lastDrawnMs) {
            const eV = VV - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, eV), eV >= 50 && this.longGaps++
          }
          this.lastDrawnMs = VV
        }
      }
      restart() {
        this.take(), this.lastDrawnMs = null
      }
      take() {
        const VV = {
          frames: this.frames,
          drawn: this.drawn,
          paced: this.paced,
          gapMaxMs: this.gapMaxMs,
          longGaps: this.longGaps,
          renderUs: this.renderUs,
          renderUsMax: this.renderUsMax
        };
        return this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, VV
      }
    }

    function tV(VV) {
      return (VV / 1048576).toFixed(1)
    }
    class FV {
      constructor() {
        this.logged = 0, this.seen = new Set, this.unlogged = 0
      }
      admit(VV) {
        return this.logged >= 20 || this.seen.has(VV) ? (this.unlogged++, null) : (this.seen.add(VV), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${VV}` : VV)
      }
      takeUnlogged() {
        const VV = this.unlogged;
        return this.unlogged = 0, VV
      }
    }

    function TV(VV) {
      (0, vV.i)("renderlite", VV)
    }
    class PV {
      constructor(VV) {
        this.frames = new qV, this.events = new FV, this.programLines = new BV, this.compileSummary = new EV("webgpu compiles"), this.hidden = new kV.c, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this.visibilityChanged = () => {
          const VV = performance.now();
          this.hidden.changed(VV), this.restartWindow(VV)
        }, this.iZ = () => {
          var VV, eV;
          const xV = this.session,
            YV = (0, wV.k)(),
            UV = performance.now();
          if (this.logLinks(UV), this.logGrid(), null === xV || xV.isStopped || !0 !== (null === YV || void 0 === YV ? void 0 : YV.isCoreRunning)) return void this.restartWindow(UV);
          if (document.hidden) return;
          if (UV - this.windowStart < 2500) return;
          if (! function(VV) {
              return VV < 12 || (VV - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const QV = xV.headerWord(yV.Q.GpuTimed),
            ZV = xV.headerWord(yV.Q.GpuFrameUs),
            vV = this.sampled === xV ? {
              timed: QV - this.gpuTimed >>> 0,
              us: ZV - this.gpuUs >>> 0
            } : null;
          this.sampled = xV, this.gpuTimed = QV, this.gpuUs = ZV;
          const rV = null !== (VV = null === (eV = (0, nV.P)((0, JV.D)())) || void 0 === eV ? void 0 : eV.MYV()) && void 0 !== VV ? VV : 0;
          TV(function(VV, eV) {
            const xV = eV.windowMs / 1e3,
              JV = [`${Math.round(xV)}s: ${VV.drawn} drawn (${(VV.drawn/xV).toFixed(1)}/s), ${VV.paced} paced, ${VV.frames-VV.drawn-VV.paced} skipped`, `gap max ${Math.round(VV.gapMaxMs)} ms, ${VV.longGaps} over 50 ms`, `render cpu ${VV.drawn?(VV.renderUs/VV.drawn/1e3).toFixed(2):"-"} ms mean, ${(VV.renderUsMax/1e3).toFixed(1)} max`];
            null !== eV.gpu && JV.push(`gpu ${eV.gpu.timed?(eV.gpu.us/eV.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${eV.gpu.timed} timed`);
            const YV = eV.census;
            JV.push(null === YV ? "draws none yet" : `draws ${(0,pV.c)(YV)} (terrain ${YV.terrainOpaque}+${YV.terrainTransparent}, pack ${YV.terrainPack}, meshes ${YV.regular+YV.thin+YV.line+YV.text}, sky ${YV.earthSky+YV.skyMeshes}, particles ${YV.particles})`), null !== YV && YV.ringCopiesMax > 0 && JV.push(`frame rings ${YV.ringCopiesMax} copies max, ${YV.ringBusyWrites} busy writes so far`);
            const UV = null === eV.gpuBytesBefore ? "" : ` (${eV.gpuBytes>=eV.gpuBytesBefore?"+":"-"}${tV(Math.abs(eV.gpuBytes-eV.gpuBytesBefore))})`;
            return JV.push(`gpu mem ${tV(eV.gpuBytes)} MiB${UV}`), JV.push(`pending ${eV.pending}`, "terrain " + (eV.terrainDrawn ? "drawn" : "not drawn yet")), eV.eventsUnlogged > 0 && JV.push(`${eV.eventsUnlogged} events unlogged`), JV.join("; ")
          }(this.frames.take(), {
            windowMs: UV - this.windowStart,
            gpu: vV,
            census: (0, pV.f)(YV.api),
            gpuBytes: rV,
            gpuBytesBefore: this.gpuBytes,
            pending: xV.headerWord(yV.Q.RenderPending),
            terrainDrawn: 0 !== (xV.headerWord(yV.Q.LoadSteps) & yV.cb.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = rV, this.windowStart = UV
        }, TV(`${(0,jV.d)(VV)}; client ${YV.s.client} (${YV.s.reason})`), setInterval(this.iZ, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(VV, eV, xV) {
        this.session = VV, this.frames.frame(eV, xV, "drawn" === xV ? VV.headerWord(yV.Q.RenderUs) : 0)
      }
      coreErrors(VV) {
        for (const {
            code: JV,
            detail: YV
          }
          of VV) {
          var eV, xV;
          if (JV >= yV.s.RenderDeviceLost && JV <= yV.s.RenderSerialLinks) this.event(`render error ${(0,QV.be)(JV)}${null!==(eV=null===(xV=(0,ZV.c)(JV,YV))||void 0===xV?void 0:xV.words)&&void 0!==eV?eV:""} (detail ${YV})`)
        }
      }
      reload(VV, eV, xV, JV) {
        this.event(`render reload: ${VV?"webgpu":"gl"} ${xV}, losses ${eV}${void 0===JV?"":`: ${JV}`}`)
      }
      crashed(VV) {
        let {
          site: eV,
          error: xV,
          header: JV
        } = VV;
        const YV = null !== JV && 0 !== JV.lastError ? `, last error ${(0,QV.be)(JV.lastError)} (detail ${JV.lastErrorDetail})` : "",
          UV = xV instanceof Error ? `${xV.name}: ${xV.message}` : null === xV || void 0 === xV ? "" : String(xV);
        this.event(`core stopped at ${eV}${YV}${UV&&`: ${UV}`}`)
      }
      event(VV) {
        const eV = this.events.admit(VV);
        null !== eV && TV(eV)
      }
      restartWindow(VV) {
        this.frames.restart(), this.windowStart = VV;
        const eV = this.session;
        null === eV || eV.isStopped ? this.sampled = null : (this.sampled = eV, this.gpuTimed = eV.headerWord(yV.Q.GpuTimed), this.gpuUs = eV.headerWord(yV.Q.GpuFrameUs))
      }
      logLinks(VV) {
        const eV = window.bloxdRenderDebug;
        for (const YV of this.programLines.failures(null === eV || void 0 === eV ? void 0 : eV.linkFailures)) this.event(YV);
        const xV = this.programLines.heldAtBackstop(null === eV || void 0 === eV ? void 0 : eV.heldAtBackstop);
        null !== xV && TV(xV);
        for (const YV of this.programLines.summaryLines(null === eV || void 0 === eV ? void 0 : eV.links, null === eV || void 0 === eV ? void 0 : eV.programUse, VV, this.hidden.totals(VV))) TV(YV);
        const JV = this.compileSummary.line(null === eV || void 0 === eV ? void 0 : eV.compiles, VV);
        null !== JV && TV(JV)
      }
      logGrid() {
        var VV;
        const eV = null === (VV = window.bloxdRenderDebug) || void 0 === VV ? void 0 : VV.gridFaces;
        this.gridLogged || void 0 === eV || (this.gridLogged = !0, TV(`gl1 grid ${eV}`))
      }
      logRenderer() {
        var VV, eV;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const xV = window.bloxdRenderDebug,
          JV = (0, UV.z)(),
          YV = void 0 === (null === xV || void 0 === xV ? void 0 : xV.parallelCompile) ? "" : `; parallel compile ${xV.parallelCompile}`;
        TV(`renderer gl ${JV?`${JV.vendor} / ${JV.renderer}`:"(not read)"}; terrain fetch ${null!==(VV=null===xV||void 0===xV?void 0:xV.fetch)&&void 0!==VV?VV:"(not noted)"}${YV}`), TV(`renderer caps ${null!==(eV=null===xV||void 0===xV?void 0:xV.caps)&&void 0!==eV?eV:"(not noted)"}`)
      }
    }
    let AV = null;

    function NV(VV) {
      return (0, rV.f)(), AV ??= new PV(VV), AV
    }
  },
  5189: (VV, eV, xV) => {
    function JV(VV) {
      if (null === VV) return "backend: none picked (no renderer build)";
      const eV = VV.adapter ? `${VV.adapter.vendor}/${VV.adapter.architecture}` : "none";
      return `backend ${VV.backend}: reason ${VV.reason}, source ${VV.source}, adapter ${eV}`
    }
    xV.d(eV, {
      d: () => JV
    })
  },
  35165: (VV, eV, xV) => {
    function JV(VV) {
      return `hidden ${VV.changes} changes, ${Math.round(VV.hiddenMs)} ms`
    }
    xV.d(eV, {
      c: () => YV,
      f: () => JV
    });
    class YV {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(VV) {
        this.changes++, document.hidden ? this.hiddenSinceMs = VV : this.hiddenSinceMs >= 0 && (this.hiddenMs += VV - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(VV) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? VV - this.hiddenSinceMs : 0)
        }
      }
    }
  },
  42341: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV,
      f: () => UV,
      g: () => pV
    });
    var JV = xV(41852),
      YV = xV(41861);

    function UV(VV) {
      if (VV.queries.drawCensus() < JV.xb.BYTES) return null;
      const eV = VV.memoryData(VV.scratch(), JV.xb.BYTES, 4, "the draw census");
      return null === eV ? null : {
        terrainOpaque: JV.xb.terrainOpaque(eV, 0),
        terrainTransparent: JV.xb.terrainTransparent(eV, 0),
        terrainPack: JV.xb.terrainPack(eV, 0),
        earthSky: JV.xb.earthSky(eV, 0),
        skyMeshes: JV.xb.skyMeshes(eV, 0),
        regular: JV.xb.regular(eV, 0),
        thin: JV.xb.thin(eV, 0),
        line: JV.xb.line(eV, 0),
        text: JV.xb.text(eV, 0),
        particles: JV.xb.particles(eV, 0),
        terrainParts: JV.xb.terrainParts(eV, 0),
        terrainCompiling: JV.xb.terrainCompiling(eV, 0),
        ringCopiesMax: JV.xb.ringCopiesMax(eV, 0),
        ringBusyWrites: JV.xb.ringBusyWrites(eV, 0)
      }
    }

    function yV(VV) {
      const {
        terrainOpaque: eV,
        terrainTransparent: xV,
        earthSky: JV,
        skyMeshes: YV,
        regular: UV,
        thin: yV,
        line: pV,
        text: QV,
        particles: nV
      } = VV;
      return eV + xV + JV + YV + UV + yV + pV + QV + nV
    }

    function pV() {
      const VV = (0, YV.k)();
      return !0 === (null === VV || void 0 === VV ? void 0 : VV.isCoreRunning) ? function(VV) {
        const eV = UV(VV);
        if (null === eV) return [];
        const {
          terrainOpaque: xV,
          terrainTransparent: JV,
          terrainPack: YV,
          earthSky: pV,
          skyMeshes: QV,
          regular: nV,
          thin: wV,
          line: ZV,
          text: vV,
          particles: rV
        } = eV;
        return [{
          label: "Drawn",
          value: `${yV(eV)}`
        }, {
          label: "Terrain",
          value: `${xV} opaque / ${JV} transparent (${YV} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${nV} / ${wV}`
        }, {
          label: "Text / Lines",
          value: `${vV} / ${ZV}`
        }, {
          label: "Sky / Particles",
          value: `${pV+QV} / ${rV}`
        }]
      }(VV.api) : []
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);