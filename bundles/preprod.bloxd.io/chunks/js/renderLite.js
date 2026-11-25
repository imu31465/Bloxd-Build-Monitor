export const id = 52;
export const ids = [52];
export const modules = {
  51231: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      startRenderLite: () => HQ
    });
    var wQ = XQ(3107),
      qQ = XQ(691),
      TQ = XQ(150),
      zQ = XQ(5140),
      sQ = XQ(41238),
      FQ = XQ(5134),
      PQ = XQ(40930),
      gQ = XQ(40829),
      JQ = XQ(40970),
      rQ = XQ(3045),
      IQ = XQ(4821),
      jQ = XQ(34367);
    const BQ = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class yQ {
      constructor(QQ) {
        this.label = void 0, this.noted = void 0, this.lines = 0, this.atMs = -1 / 0, this.label = QQ
      }
      line(QQ, WQ) {
        const XQ = this.lines < 10 ? 6e4 : 6e5;
        return void 0 === QQ || QQ === this.noted || WQ - this.atMs < XQ ? null : (this.noted = QQ, this.lines++, this.atMs = WQ, `${this.label}: ${QQ}`)
      }
    }
    class VQ {
      constructor() {
        this.failuresLogged = 0, this.heldLogged = !1, this.links = new yQ("gl links"), this.programUse = new yQ("gl programs")
      }
      failures(QQ) {
        const WQ = QQ ? QQ.split(" ") : [],
          XQ = WQ.slice(this.failuresLogged).map((QQ => {
            var WQ;
            const [XQ, wQ] = QQ.split(":"), qQ = null !== (WQ = BQ.get(XQ.slice(-1))) && void 0 !== WQ ? WQ : "";
            return `gl link failed: program row ${parseInt(XQ)}${qQ}, read ${wQ} ms after issue`
          }));
        return this.failuresLogged = WQ.length, XQ
      }
      heldAtBackstop(QQ) {
        return this.heldLogged || void 0 === QQ ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${QQ}`)
      }
      summaryLines(QQ, WQ, XQ, wQ) {
        const qQ = this.links.line(QQ, XQ);
        return [qQ && `${qQ}; tab ${(0,jQ.f)(wQ)}`, this.programUse.line(WQ, XQ)].filter((QQ => null !== QQ))
      }
    }
    var DQ = XQ(5008);
    class pQ {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(QQ, WQ, XQ) {
        if ("none" !== WQ && (this.frames++, "paced" === WQ && this.paced++, "drawn" === WQ)) {
          if (this.drawn++, this.renderUs += XQ, this.renderUsMax = Math.max(this.renderUsMax, XQ), null !== this.lastDrawnMs) {
            const WQ = QQ - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, WQ), WQ >= 50 && this.longGaps++
          }
          this.lastDrawnMs = QQ
        }
      }
      restart() {
        this.take(), this.lastDrawnMs = null
      }
      take() {
        const QQ = {
          frames: this.frames,
          drawn: this.drawn,
          paced: this.paced,
          gapMaxMs: this.gapMaxMs,
          longGaps: this.longGaps,
          renderUs: this.renderUs,
          renderUsMax: this.renderUsMax
        };
        return this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, QQ
      }
    }

    function GQ(QQ) {
      return (QQ / 1048576).toFixed(1)
    }
    class UQ {
      constructor() {
        this.logged = 0, this.seen = new Set, this.unlogged = 0
      }
      admit(QQ) {
        return this.logged >= 20 || this.seen.has(QQ) ? (this.unlogged++, null) : (this.seen.add(QQ), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${QQ}` : QQ)
      }
      takeUnlogged() {
        const QQ = this.unlogged;
        return this.unlogged = 0, QQ
      }
    }

    function bQ(QQ) {
      (0, rQ.j)("renderlite", QQ)
    }
    class vQ {
      constructor(QQ) {
        this.frames = new pQ, this.events = new UQ, this.programLines = new VQ, this.compileSummary = new yQ("webgpu compiles"), this.hidden = new jQ.c, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this.visibilityChanged = () => {
          const QQ = performance.now();
          this.hidden.changed(QQ), this.restartWindow(QQ)
        }, this.fJ = () => {
          var QQ, WQ;
          const XQ = this.session,
            qQ = (0, gQ.j)(),
            TQ = performance.now();
          if (this.logLinks(TQ), this.logGrid(), null === XQ || XQ.isStopped || !0 !== (null === qQ || void 0 === qQ ? void 0 : qQ.isCoreRunning)) return void this.restartWindow(TQ);
          if (document.hidden) return;
          if (TQ - this.windowStart < 2500) return;
          if (! function(QQ) {
              return QQ < 12 || (QQ - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const FQ = XQ.headerWord(zQ.F.GpuTimed),
            JQ = XQ.headerWord(zQ.F.GpuFrameUs),
            rQ = this.sampled === XQ ? {
              timed: FQ - this.gpuTimed >>> 0,
              us: JQ - this.gpuUs >>> 0
            } : null;
          this.sampled = XQ, this.gpuTimed = FQ, this.gpuUs = JQ;
          const IQ = null !== (QQ = null === (WQ = (0, PQ.P)((0, wQ.B)())) || void 0 === WQ ? void 0 : WQ.bwQ()) && void 0 !== QQ ? QQ : 0;
          bQ(function(QQ, WQ) {
            const XQ = WQ.windowMs / 1e3,
              wQ = [`${Math.round(XQ)}s: ${QQ.drawn} drawn (${(QQ.drawn/XQ).toFixed(1)}/s), ${QQ.paced} paced, ${QQ.frames-QQ.drawn-QQ.paced} skipped`, `gap max ${Math.round(QQ.gapMaxMs)} ms, ${QQ.longGaps} over 50 ms`, `render cpu ${QQ.drawn?(QQ.renderUs/QQ.drawn/1e3).toFixed(2):"-"} ms mean, ${(QQ.renderUsMax/1e3).toFixed(1)} max`];
            null !== WQ.gpu && wQ.push(`gpu ${WQ.gpu.timed?(WQ.gpu.us/WQ.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${WQ.gpu.timed} timed`);
            const qQ = WQ.census;
            wQ.push(null === qQ ? "draws none yet" : `draws ${(0,sQ.b)(qQ)} (terrain ${qQ.terrainOpaque}+${qQ.terrainTransparent}, pack ${qQ.terrainPack}, meshes ${qQ.regular+qQ.thin+qQ.line+qQ.text}, sky ${qQ.earthSky+qQ.skyMeshes}, particles ${qQ.particles})`), null !== qQ && qQ.ringCopiesMax > 0 && wQ.push(`frame rings ${qQ.ringCopiesMax} copies max, ${qQ.ringBusyWrites} busy writes so far`);
            const TQ = null === WQ.gpuBytesBefore ? "" : ` (${WQ.gpuBytes>=WQ.gpuBytesBefore?"+":"-"}${GQ(Math.abs(WQ.gpuBytes-WQ.gpuBytesBefore))})`;
            return wQ.push(`gpu mem ${GQ(WQ.gpuBytes)} MiB${TQ}`), wQ.push(`pending ${WQ.pending}`, "terrain " + (WQ.terrainDrawn ? "drawn" : "not drawn yet")), WQ.eventsUnlogged > 0 && wQ.push(`${WQ.eventsUnlogged} events unlogged`), wQ.join("; ")
          }(this.frames.take(), {
            windowMs: TQ - this.windowStart,
            gpu: rQ,
            census: (0, sQ.c)(qQ.api),
            gpuBytes: IQ,
            gpuBytesBefore: this.gpuBytes,
            pending: XQ.headerWord(zQ.F.RenderPending),
            terrainDrawn: 0 !== (XQ.headerWord(zQ.F.LoadSteps) & zQ.V.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = IQ, this.windowStart = TQ
        }, bQ(`${(0,DQ.d)(QQ)}; client ${qQ.l.client} (${qQ.l.reason})`), setInterval(this.fJ, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(QQ, WQ, XQ) {
        this.session = QQ, this.frames.frame(WQ, XQ, "drawn" === XQ ? QQ.headerWord(zQ.F.RenderUs) : 0)
      }
      coreErrors(QQ) {
        for (const {
            code: wQ,
            detail: qQ
          }
          of QQ) {
          var WQ, XQ;
          if (wQ >= zQ.n.RenderDeviceLost && wQ <= zQ.n.RenderSerialLinks) this.event(`render error ${(0,FQ.de)(wQ)}${null!==(WQ=null===(XQ=(0,JQ.c)(wQ,qQ))||void 0===XQ?void 0:XQ.words)&&void 0!==WQ?WQ:""} (detail ${qQ})`)
        }
      }
      reload(QQ, WQ, XQ, wQ) {
        this.event(`render reload: ${QQ?"webgpu":"gl"} ${XQ}, losses ${WQ}${void 0===wQ?"":`: ${wQ}`}`)
      }
      crashed(QQ) {
        let {
          site: WQ,
          error: XQ,
          header: wQ
        } = QQ;
        const qQ = null !== wQ && 0 !== wQ.lastError ? `, last error ${(0,FQ.de)(wQ.lastError)} (detail ${wQ.lastErrorDetail})` : "",
          TQ = XQ instanceof Error ? `${XQ.name}: ${XQ.message}` : null === XQ || void 0 === XQ ? "" : String(XQ);
        this.event(`core stopped at ${WQ}${qQ}${TQ&&`: ${TQ}`}`)
      }
      event(QQ) {
        const WQ = this.events.admit(QQ);
        null !== WQ && bQ(WQ)
      }
      restartWindow(QQ) {
        this.frames.restart(), this.windowStart = QQ;
        const WQ = this.session;
        null === WQ || WQ.isStopped ? this.sampled = null : (this.sampled = WQ, this.gpuTimed = WQ.headerWord(zQ.F.GpuTimed), this.gpuUs = WQ.headerWord(zQ.F.GpuFrameUs))
      }
      logLinks(QQ) {
        const WQ = window.bloxdRenderDebug;
        for (const qQ of this.programLines.failures(null === WQ || void 0 === WQ ? void 0 : WQ.linkFailures)) this.event(qQ);
        const XQ = this.programLines.heldAtBackstop(null === WQ || void 0 === WQ ? void 0 : WQ.heldAtBackstop);
        null !== XQ && bQ(XQ);
        for (const qQ of this.programLines.summaryLines(null === WQ || void 0 === WQ ? void 0 : WQ.links, null === WQ || void 0 === WQ ? void 0 : WQ.programUse, QQ, this.hidden.totals(QQ))) bQ(qQ);
        const wQ = this.compileSummary.line(null === WQ || void 0 === WQ ? void 0 : WQ.compiles, QQ);
        null !== wQ && bQ(wQ)
      }
      logGrid() {
        var QQ;
        const WQ = null === (QQ = window.bloxdRenderDebug) || void 0 === QQ ? void 0 : QQ.gridFaces;
        this.gridLogged || void 0 === WQ || (this.gridLogged = !0, bQ(`gl1 grid ${WQ}`))
      }
      logRenderer() {
        var QQ, WQ;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const XQ = window.bloxdRenderDebug,
          wQ = (0, TQ.y)(),
          qQ = void 0 === (null === XQ || void 0 === XQ ? void 0 : XQ.parallelCompile) ? "" : `; parallel compile ${XQ.parallelCompile}`;
        bQ(`renderer gl ${wQ?`${wQ.vendor} / ${wQ.renderer}`:"(not read)"}; terrain fetch ${null!==(QQ=null===XQ||void 0===XQ?void 0:XQ.fetch)&&void 0!==QQ?QQ:"(not noted)"}${qQ}`), bQ(`renderer caps ${null!==(WQ=null===XQ||void 0===XQ?void 0:XQ.caps)&&void 0!==WQ?WQ:"(not noted)"}`)
      }
    }
    let dQ = null;

    function HQ(QQ) {
      return (0, IQ.f)(), dQ ??= new vQ(QQ), dQ
    }
  },
  5008: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      if (null === QQ) return "backend: none picked (no renderer build)";
      const WQ = QQ.adapter ? `${QQ.adapter.vendor}/${QQ.adapter.architecture}` : "none";
      return `backend ${QQ.backend}: reason ${QQ.reason}, source ${QQ.source}, adapter ${WQ}`
    }
    XQ.d(WQ, {
      d: () => wQ
    })
  },
  34367: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      return `hidden ${QQ.changes} changes, ${Math.round(QQ.hiddenMs)} ms`
    }
    XQ.d(WQ, {
      c: () => qQ,
      f: () => wQ
    });
    class qQ {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(QQ) {
        this.changes++, document.hidden ? this.hiddenSinceMs = QQ : this.hiddenSinceMs >= 0 && (this.hiddenMs += QQ - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(QQ) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? QQ - this.hiddenSinceMs : 0)
        }
      }
    }
  },
  41238: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ,
      c: () => TQ,
      g: () => sQ
    });
    var wQ = XQ(40813),
      qQ = XQ(40829);

    function TQ(QQ) {
      if (QQ.queries.drawCensus() < wQ.Ob.BYTES) return null;
      const WQ = QQ.memoryData(QQ.scratch(), wQ.Ob.BYTES, 4, "the draw census");
      return null === WQ ? null : {
        terrainOpaque: wQ.Ob.terrainOpaque(WQ, 0),
        terrainTransparent: wQ.Ob.terrainTransparent(WQ, 0),
        terrainPack: wQ.Ob.terrainPack(WQ, 0),
        earthSky: wQ.Ob.earthSky(WQ, 0),
        skyMeshes: wQ.Ob.skyMeshes(WQ, 0),
        regular: wQ.Ob.regular(WQ, 0),
        thin: wQ.Ob.thin(WQ, 0),
        line: wQ.Ob.line(WQ, 0),
        text: wQ.Ob.text(WQ, 0),
        particles: wQ.Ob.particles(WQ, 0),
        terrainParts: wQ.Ob.terrainParts(WQ, 0),
        terrainCompiling: wQ.Ob.terrainCompiling(WQ, 0),
        ringCopiesMax: wQ.Ob.ringCopiesMax(WQ, 0),
        ringBusyWrites: wQ.Ob.ringBusyWrites(WQ, 0)
      }
    }

    function zQ(QQ) {
      const {
        terrainOpaque: WQ,
        terrainTransparent: XQ,
        earthSky: wQ,
        skyMeshes: qQ,
        regular: TQ,
        thin: zQ,
        line: sQ,
        text: FQ,
        particles: PQ
      } = QQ;
      return WQ + XQ + wQ + qQ + TQ + zQ + sQ + FQ + PQ
    }

    function sQ() {
      const QQ = (0, qQ.j)();
      return !0 === (null === QQ || void 0 === QQ ? void 0 : QQ.isCoreRunning) ? function(QQ) {
        const WQ = TQ(QQ);
        if (null === WQ) return [];
        const {
          terrainOpaque: XQ,
          terrainTransparent: wQ,
          terrainPack: qQ,
          earthSky: sQ,
          skyMeshes: FQ,
          regular: PQ,
          thin: gQ,
          line: JQ,
          text: rQ,
          particles: IQ
        } = WQ;
        return [{
          label: "Drawn",
          value: `${zQ(WQ)}`
        }, {
          label: "Terrain",
          value: `${XQ} opaque / ${wQ} transparent (${qQ} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${PQ} / ${gQ}`
        }, {
          label: "Text / Lines",
          value: `${rQ} / ${JQ}`
        }, {
          label: "Sky / Particles",
          value: `${sQ+FQ} / ${IQ}`
        }]
      }(QQ.api) : []
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);