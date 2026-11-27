export const id = 58;
export const ids = [58];
export const modules = {
  54811: (WW, iW, OW) => {
    OW.d(iW, {
      startRenderLite: () => TW
    });
    var mW = OW(2381),
      EW = OW(671),
      NW = OW(131),
      PW = OW(5551),
      LW = OW(42528),
      cW = OW(5546),
      wW = OW(42216),
      tW = OW(42109),
      ZW = OW(42272),
      xW = OW(3866),
      lW = OW(5217),
      AW = OW(35100);
    const bW = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class jW {
      constructor(WW) {
        this.label = void 0, this.noted = void 0, this.lines = 0, this.atMs = -1 / 0, this.label = WW
      }
      line(WW, iW) {
        const OW = this.lines < 10 ? 6e4 : 6e5;
        return void 0 === WW || WW === this.noted || iW - this.atMs < OW ? null : (this.noted = WW, this.lines++, this.atMs = iW, `${this.label}: ${WW}`)
      }
    }
    class UW {
      constructor() {
        this.failuresLogged = 0, this.heldLogged = !1, this.links = new jW("gl links"), this.programUse = new jW("gl programs")
      }
      failures(WW) {
        const iW = WW ? WW.split(" ") : [],
          OW = iW.slice(this.failuresLogged).map((WW => {
            var iW;
            const [OW, mW] = WW.split(":"), EW = null !== (iW = bW.get(OW.slice(-1))) && void 0 !== iW ? iW : "";
            return `gl link failed: program row ${parseInt(OW)}${EW}, read ${mW} ms after issue`
          }));
        return this.failuresLogged = iW.length, OW
      }
      heldAtBackstop(WW) {
        return this.heldLogged || void 0 === WW ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${WW}`)
      }
      summaryLines(WW, iW, OW, mW) {
        const EW = this.links.line(WW, OW);
        return [EW && `${EW}; tab ${(0,AW.e)(mW)}`, this.programUse.line(iW, OW)].filter((WW => null !== WW))
      }
    }
    var kW = OW(5431);
    class sW {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(WW, iW, OW) {
        if ("none" !== iW && (this.frames++, "paced" === iW && this.paced++, "drawn" === iW)) {
          if (this.drawn++, this.renderUs += OW, this.renderUsMax = Math.max(this.renderUsMax, OW), null !== this.lastDrawnMs) {
            const iW = WW - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, iW), iW >= 50 && this.longGaps++
          }
          this.lastDrawnMs = WW
        }
      }
      restart() {
        this.take(), this.lastDrawnMs = null
      }
      take() {
        const WW = {
          frames: this.frames,
          drawn: this.drawn,
          paced: this.paced,
          gapMaxMs: this.gapMaxMs,
          longGaps: this.longGaps,
          renderUs: this.renderUs,
          renderUsMax: this.renderUsMax
        };
        return this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, WW
      }
    }

    function MW(WW) {
      return (WW / 1048576).toFixed(1)
    }
    class KW {
      constructor() {
        this.logged = 0, this.seen = new Set, this.unlogged = 0
      }
      admit(WW) {
        return this.logged >= 20 || this.seen.has(WW) ? (this.unlogged++, null) : (this.seen.add(WW), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${WW}` : WW)
      }
      takeUnlogged() {
        const WW = this.unlogged;
        return this.unlogged = 0, WW
      }
    }

    function SW(WW) {
      (0, xW.m)("renderlite", WW)
    }
    class YW {
      constructor(WW) {
        this.frames = new sW, this.events = new KW, this.programLines = new UW, this.compileSummary = new jW("webgpu compiles"), this.hidden = new AW.d, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this.prejoinLogged = null, this.visibilityChanged = () => {
          const WW = performance.now();
          this.hidden.changed(WW), this.restartWindow(WW)
        }, this.hZ = () => {
          var WW, iW;
          const OW = this.session,
            EW = (0, tW.f)(),
            NW = performance.now();
          var cW;
          if (this.logLinks(NW), this.logGrid(), null === OW || OW.isStopped || !0 !== (null === EW || void 0 === EW ? void 0 : EW.isCoreRunning)) return null === (cW = window.bloxdRenderDebug) || void 0 === cW || delete cW.meshMaterials, void this.restartWindow(NW);
          if (document.hidden) return;
          if (NW - this.windowStart < 2500) return;
          if (! function(WW) {
              return WW < 12 || (WW - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const ZW = OW.headerWord(PW.M.GpuTimed),
            xW = OW.headerWord(PW.M.GpuFrameUs),
            lW = this.sampled === OW ? {
              timed: ZW - this.gpuTimed >>> 0,
              us: xW - this.gpuUs >>> 0
            } : null;
          this.sampled = OW, this.gpuTimed = ZW, this.gpuUs = xW;
          const AW = null !== (WW = null === (iW = (0, wW.M)((0, mW.G)())) || void 0 === iW ? void 0 : iW.HmW()) && void 0 !== WW ? WW : 0;
          SW(function(WW, iW) {
            const OW = iW.windowMs / 1e3,
              mW = [`${Math.round(OW)}s: ${WW.drawn} drawn (${(WW.drawn/OW).toFixed(1)}/s), ${WW.paced} paced, ${WW.frames-WW.drawn-WW.paced} skipped`, `gap max ${Math.round(WW.gapMaxMs)} ms, ${WW.longGaps} over 50 ms`, `render cpu ${WW.drawn?(WW.renderUs/WW.drawn/1e3).toFixed(2):"-"} ms mean, ${(WW.renderUsMax/1e3).toFixed(1)} max`];
            null !== iW.gpu && mW.push(`gpu ${iW.gpu.timed?(iW.gpu.us/iW.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${iW.gpu.timed} timed`);
            const EW = iW.census;
            mW.push(null === EW ? "draws none yet" : `draws ${(0,LW.b)(EW)} (terrain ${EW.terrainOpaque}+${EW.terrainTransparent}, pack ${EW.terrainPack}, meshes ${EW.regular+EW.thin+EW.line+EW.text} (${EW.text} text, ${EW.thin} thin, ${EW.line} line), sky ${EW.earthSky+EW.skyMeshes}, particles ${EW.particles})`), null !== EW && EW.ringCopiesMax > 0 && mW.push(`frame rings ${EW.ringCopiesMax} copies max, ${EW.ringBusyWrites} busy writes so far`);
            const NW = null === iW.gpuBytesBefore ? "" : ` (${iW.gpuBytes>=iW.gpuBytesBefore?"+":"-"}${MW(Math.abs(iW.gpuBytes-iW.gpuBytesBefore))})`;
            return mW.push(`gpu mem ${MW(iW.gpuBytes)} MiB${NW}`), mW.push(`pending ${iW.pending}`, "terrain " + (iW.terrainDrawn ? "drawn" : "not drawn yet")), iW.eventsUnlogged > 0 && mW.push(`${iW.eventsUnlogged} events unlogged`), mW.join("; ")
          }(this.frames.take(), {
            windowMs: NW - this.windowStart,
            gpu: lW,
            census: (0, LW.c)(EW.api),
            gpuBytes: AW,
            gpuBytesBefore: this.gpuBytes,
            pending: OW.headerWord(PW.M.RenderPending),
            terrainDrawn: 0 !== (OW.headerWord(PW.M.LoadSteps) & PW.Y.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          }));
          const bW = window.bloxdRenderDebug;
          void 0 !== (null === bW || void 0 === bW ? void 0 : bW.meshMaterials) && (SW(`mesh materials ${bW.meshMaterials}`), delete bW.meshMaterials), this.gpuBytes = AW, this.windowStart = NW
        }, SW(`${(0,kW.e)(WW)}; client ${EW.B.client} (${EW.B.reason})`), setInterval(this.hZ, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(WW, iW, OW) {
        var mW;
        this.session !== WW && (null === (mW = window.bloxdRenderDebug) || void 0 === mW || delete mW.meshMaterials);
        this.session = WW, this.frames.frame(iW, OW, "drawn" === OW ? WW.headerWord(PW.M.RenderUs) : 0)
      }
      coreErrors(WW) {
        for (const {
            code: mW,
            detail: EW
          }
          of WW) {
          var iW, OW;
          if (mW >= PW.o.RenderDeviceLost && mW <= PW.o.RenderSerialLinks) this.event(`render error ${(0,cW.de)(mW)}${null!==(iW=null===(OW=(0,ZW.b)(mW,EW))||void 0===OW?void 0:OW.words)&&void 0!==iW?iW:""} (detail ${EW})`)
        }
      }
      reload(WW, iW, OW, mW) {
        this.event(`render reload: ${WW?"webgpu":"gl"} ${OW}, losses ${iW}${void 0===mW?"":`: ${mW}`}`)
      }
      glContextLost(WW, iW, OW) {
        const mW = null === iW || void 0 === iW ? void 0 : iW.split(" "),
          EW = 3 === (null === mW || void 0 === mW ? void 0 : mW.length) ? `vertex arrays ${mW[0]}, keyed draws peak ${mW[1]} (sweep floor ${mW[2]})` : "vertex arrays unnoted";
        this.event(`gl context lost ${WW?"in game":"at home"}: ${EW}, render distance ${null!==OW&&void 0!==OW?OW:"none"}`)
      }
      crashed(WW) {
        let {
          site: iW,
          error: OW,
          header: mW
        } = WW;
        const EW = null !== mW && 0 !== mW.lastError ? `, last error ${(0,cW.de)(mW.lastError)} (detail ${mW.lastErrorDetail})` : "",
          NW = OW instanceof Error ? `${OW.name}: ${OW.message}` : null === OW || void 0 === OW ? "" : String(OW);
        this.event(`core stopped at ${iW}${EW}${NW&&`: ${NW}`}`)
      }
      event(WW) {
        const iW = this.events.admit(WW);
        null !== iW && SW(iW)
      }
      restartWindow(WW) {
        this.frames.restart(), this.windowStart = WW;
        const iW = this.session;
        null === iW || iW.isStopped ? this.sampled = null : (this.sampled = iW, this.gpuTimed = iW.headerWord(PW.M.GpuTimed), this.gpuUs = iW.headerWord(PW.M.GpuFrameUs))
      }
      logLinks(WW) {
        const iW = window.bloxdRenderDebug;
        for (const EW of this.programLines.failures(null === iW || void 0 === iW ? void 0 : iW.linkFailures)) this.event(EW);
        const OW = this.programLines.heldAtBackstop(null === iW || void 0 === iW ? void 0 : iW.heldAtBackstop);
        null !== OW && SW(OW);
        for (const EW of this.programLines.summaryLines(null === iW || void 0 === iW ? void 0 : iW.links, null === iW || void 0 === iW ? void 0 : iW.programUse, WW, this.hidden.totals(WW))) SW(EW);
        const mW = this.compileSummary.line(null === iW || void 0 === iW ? void 0 : iW.compiles, WW);
        null !== mW && SW(mW), void 0 !== (null === iW || void 0 === iW ? void 0 : iW.prejoin) && iW.prejoin !== this.prejoinLogged && (this.prejoinLogged = iW.prejoin, SW(`prejoin ${iW.prejoin}`))
      }
      logGrid() {
        var WW;
        const iW = null === (WW = window.bloxdRenderDebug) || void 0 === WW ? void 0 : WW.gridFaces;
        this.gridLogged || void 0 === iW || (this.gridLogged = !0, SW(`gl1 grid ${iW}`))
      }
      logRenderer() {
        var WW, iW;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const OW = window.bloxdRenderDebug,
          mW = (0, NW.t)(),
          EW = void 0 === (null === OW || void 0 === OW ? void 0 : OW.parallelCompile) ? "" : `; parallel compile ${OW.parallelCompile}`;
        SW(`renderer gl ${mW?`${mW.vendor} / ${mW.renderer}`:"(not read)"}; terrain fetch ${null!==(WW=null===OW||void 0===OW?void 0:OW.fetch)&&void 0!==WW?WW:"(not noted)"}${EW}`), SW(`renderer caps ${null!==(iW=null===OW||void 0===OW?void 0:OW.caps)&&void 0!==iW?iW:"(not noted)"}`)
      }
    }
    let yW = null;

    function TW(WW) {
      return (0, lW.d)(), yW ??= new YW(WW), yW
    }
  },
  5431: (WW, iW, OW) => {
    function mW(WW) {
      if (null === WW) return "backend: none picked (no renderer build)";
      const iW = WW.adapter ? `${WW.adapter.vendor}/${WW.adapter.architecture}` : "none";
      return `backend ${WW.backend}: reason ${WW.reason}, source ${WW.source}, adapter ${iW}`
    }
    OW.d(iW, {
      e: () => mW
    })
  },
  35100: (WW, iW, OW) => {
    function mW(WW) {
      return `hidden ${WW.changes} changes, ${Math.round(WW.hiddenMs)} ms`
    }
    OW.d(iW, {
      d: () => EW,
      e: () => mW
    });
    class EW {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(WW) {
        this.changes++, document.hidden ? this.hiddenSinceMs = WW : this.hiddenSinceMs >= 0 && (this.hiddenMs += WW - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(WW) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? WW - this.hiddenSinceMs : 0)
        }
      }
    }
  },
  42528: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => PW,
      c: () => NW,
      f: () => LW
    });
    var mW = OW(42094),
      EW = OW(42109);

    function NW(WW) {
      if (WW.queries.drawCensus() < mW.Ib.BYTES) return null;
      const iW = WW.memoryData(WW.scratch(), mW.Ib.BYTES, 4, "the draw census");
      return null === iW ? null : {
        terrainOpaque: mW.Ib.terrainOpaque(iW, 0),
        terrainTransparent: mW.Ib.terrainTransparent(iW, 0),
        terrainPack: mW.Ib.terrainPack(iW, 0),
        earthSky: mW.Ib.earthSky(iW, 0),
        skyMeshes: mW.Ib.skyMeshes(iW, 0),
        regular: mW.Ib.regular(iW, 0),
        thin: mW.Ib.thin(iW, 0),
        line: mW.Ib.line(iW, 0),
        text: mW.Ib.text(iW, 0),
        particles: mW.Ib.particles(iW, 0),
        terrainParts: mW.Ib.terrainParts(iW, 0),
        terrainCompiling: mW.Ib.terrainCompiling(iW, 0),
        ringCopiesMax: mW.Ib.ringCopiesMax(iW, 0),
        ringBusyWrites: mW.Ib.ringBusyWrites(iW, 0)
      }
    }

    function PW(WW) {
      const {
        terrainOpaque: iW,
        terrainTransparent: OW,
        earthSky: mW,
        skyMeshes: EW,
        regular: NW,
        thin: PW,
        line: LW,
        text: cW,
        particles: wW
      } = WW;
      return iW + OW + mW + EW + NW + PW + LW + cW + wW
    }

    function LW() {
      const WW = (0, EW.f)();
      return !0 === (null === WW || void 0 === WW ? void 0 : WW.isCoreRunning) ? function(WW) {
        const iW = NW(WW);
        if (null === iW) return [];
        const {
          terrainOpaque: OW,
          terrainTransparent: mW,
          terrainPack: EW,
          earthSky: LW,
          skyMeshes: cW,
          regular: wW,
          thin: tW,
          line: ZW,
          text: xW,
          particles: lW
        } = iW;
        return [{
          label: "Drawn",
          value: `${PW(iW)}`
        }, {
          label: "Terrain",
          value: `${OW} opaque / ${mW} transparent (${EW} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${wW} / ${tW}`
        }, {
          label: "Text / Lines",
          value: `${xW} / ${ZW}`
        }, {
          label: "Sky / Particles",
          value: `${LW+cW} / ${lW}`
        }]
      }(WW.api) : []
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);