export const id = 48;
export const ids = [48];
export const modules = {
  42722: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      startRenderLite: () => SQ
    });
    var LQ = wQ(2809),
      qQ = wQ(634),
      oQ = wQ(126),
      DQ = wQ(4638),
      kQ = wQ(40169),
      vQ = wQ(4632),
      mQ = wQ(40222),
      uQ = wQ(40009),
      HQ = wQ(40378),
      bQ = wQ(2753),
      YQ = wQ(4352);
    const xQ = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class AQ {
      constructor() {
        this.failuresLogged = 0, this.summary = void 0, this.summaries = 0, this.summaryAtMs = -1 / 0
      }
      failures(QQ) {
        const FQ = QQ ? QQ.split(" ") : [],
          wQ = FQ.slice(this.failuresLogged).map((QQ => {
            var FQ;
            const [wQ, LQ] = QQ.split(":"), qQ = null !== (FQ = xQ.get(wQ.slice(-1))) && void 0 !== FQ ? FQ : "";
            return `gl link failed: program row ${parseInt(wQ)}${qQ}, read ${LQ} ms after issue`
          }));
        return this.failuresLogged = FQ.length, wQ
      }
      summaryLine(QQ, FQ) {
        const wQ = this.summaries < 10 ? 6e4 : 6e5;
        return void 0 === QQ || QQ === this.summary || FQ - this.summaryAtMs < wQ ? null : (this.summary = QQ, this.summaries++, this.summaryAtMs = FQ, `gl links: ${QQ}`)
      }
    }
    var tQ = wQ(4544);
    class eQ {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(QQ, FQ, wQ) {
        if ("none" !== FQ && (this.frames++, "paced" === FQ && this.paced++, "drawn" === FQ)) {
          if (this.drawn++, this.renderUs += wQ, this.renderUsMax = Math.max(this.renderUsMax, wQ), null !== this.lastDrawnMs) {
            const FQ = QQ - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, FQ), FQ >= 50 && this.longGaps++
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

    function MQ(QQ) {
      return (QQ / 1048576).toFixed(1)
    }
    class GQ {
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

    function pQ(QQ) {
      (0, bQ.m)("renderlite", QQ)
    }
    class cQ {
      constructor(QQ) {
        this.frames = new eQ, this.events = new GQ, this.links = new AQ, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this.visibilityChanged = () => {
          this.restartWindow(performance.now())
        }, this.fH = () => {
          var QQ, FQ;
          const wQ = this.session,
            qQ = (0, uQ.k)(),
            oQ = performance.now();
          if (this.logLinks(oQ), this.logGrid(), null === wQ || wQ.isStopped || !0 !== (null === qQ || void 0 === qQ ? void 0 : qQ.isCoreRunning)) return void this.restartWindow(oQ);
          if (document.hidden) return;
          if (oQ - this.windowStart < 2500) return;
          if (! function(QQ) {
              return QQ < 12 || (QQ - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const vQ = wQ.headerWord(DQ.F.GpuTimed),
            HQ = wQ.headerWord(DQ.F.GpuFrameUs),
            bQ = this.sampled === wQ ? {
              timed: vQ - this.gpuTimed >>> 0,
              us: HQ - this.gpuUs >>> 0
            } : null;
          this.sampled = wQ, this.gpuTimed = vQ, this.gpuUs = HQ;
          const YQ = null !== (QQ = null === (FQ = (0, mQ.J)((0, LQ.B)())) || void 0 === FQ ? void 0 : FQ.cLQ()) && void 0 !== QQ ? QQ : 0;
          pQ(function(QQ, FQ) {
            const wQ = FQ.windowMs / 1e3,
              LQ = [`${Math.round(wQ)}s: ${QQ.drawn} drawn (${(QQ.drawn/wQ).toFixed(1)}/s), ${QQ.paced} paced, ${QQ.frames-QQ.drawn-QQ.paced} skipped`, `gap max ${Math.round(QQ.gapMaxMs)} ms, ${QQ.longGaps} over 50 ms`, `render cpu ${QQ.drawn?(QQ.renderUs/QQ.drawn/1e3).toFixed(2):"-"} ms mean, ${(QQ.renderUsMax/1e3).toFixed(1)} max`];
            null !== FQ.gpu && LQ.push(`gpu ${FQ.gpu.timed?(FQ.gpu.us/FQ.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${FQ.gpu.timed} timed`);
            const qQ = FQ.census;
            LQ.push(null === qQ ? "draws none yet" : `draws ${(0,kQ.b)(qQ)} (terrain ${qQ.terrainOpaque}+${qQ.terrainTransparent}, pack ${qQ.terrainPack}, meshes ${qQ.regular+qQ.thin+qQ.line+qQ.text}, sky ${qQ.earthSky+qQ.skyMeshes}, particles ${qQ.particles})`);
            const oQ = null === FQ.gpuBytesBefore ? "" : ` (${FQ.gpuBytes>=FQ.gpuBytesBefore?"+":"-"}${MQ(Math.abs(FQ.gpuBytes-FQ.gpuBytesBefore))})`;
            return LQ.push(`gpu mem ${MQ(FQ.gpuBytes)} MiB${oQ}`), LQ.push(`pending ${FQ.pending}`, "terrain " + (FQ.terrainDrawn ? "drawn" : "not drawn yet")), FQ.eventsUnlogged > 0 && LQ.push(`${FQ.eventsUnlogged} events unlogged`), LQ.join("; ")
          }(this.frames.take(), {
            windowMs: oQ - this.windowStart,
            gpu: bQ,
            census: (0, kQ.f)(qQ.api),
            gpuBytes: YQ,
            gpuBytesBefore: this.gpuBytes,
            pending: wQ.headerWord(DQ.F.RenderPending),
            terrainDrawn: 0 !== (wQ.headerWord(DQ.F.LoadSteps) & DQ.U.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = YQ, this.windowStart = oQ
        }, pQ(`${(0,tQ.c)(QQ)}; client ${qQ.j.client} (${qQ.j.reason})`), setInterval(this.fH, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(QQ, FQ, wQ) {
        this.session = QQ, this.frames.frame(FQ, wQ, "drawn" === wQ ? QQ.headerWord(DQ.F.RenderUs) : 0)
      }
      coreErrors(QQ) {
        for (const {
            code: LQ,
            detail: qQ
          }
          of QQ) {
          var FQ, wQ;
          if (LQ >= DQ.h.RenderDeviceLost && LQ <= DQ.h.RenderSerialLinks) this.event(`render error ${(0,vQ.Dd)(LQ)}${null!==(FQ=null===(wQ=(0,HQ.d)(LQ,qQ))||void 0===wQ?void 0:wQ.words)&&void 0!==FQ?FQ:""} (detail ${qQ})`)
        }
      }
      reload(QQ, FQ, wQ, LQ) {
        this.event(`render reload: ${QQ?"webgpu":"gl"} ${wQ}, losses ${FQ}${void 0===LQ?"":`: ${LQ}`}`)
      }
      crashed(QQ) {
        let {
          site: FQ,
          error: wQ,
          header: LQ
        } = QQ;
        const qQ = null !== LQ && 0 !== LQ.lastError ? `, last error ${(0,vQ.Dd)(LQ.lastError)} (detail ${LQ.lastErrorDetail})` : "",
          oQ = wQ instanceof Error ? `${wQ.name}: ${wQ.message}` : null === wQ || void 0 === wQ ? "" : String(wQ);
        this.event(`core stopped at ${FQ}${qQ}${oQ&&`: ${oQ}`}`)
      }
      event(QQ) {
        const FQ = this.events.admit(QQ);
        null !== FQ && pQ(FQ)
      }
      restartWindow(QQ) {
        this.frames.restart(), this.windowStart = QQ;
        const FQ = this.session;
        null === FQ || FQ.isStopped ? this.sampled = null : (this.sampled = FQ, this.gpuTimed = FQ.headerWord(DQ.F.GpuTimed), this.gpuUs = FQ.headerWord(DQ.F.GpuFrameUs))
      }
      logLinks(QQ) {
        const FQ = window.bloxdRenderDebug;
        for (const LQ of this.links.failures(null === FQ || void 0 === FQ ? void 0 : FQ.linkFailures)) this.event(LQ);
        const wQ = this.links.summaryLine(null === FQ || void 0 === FQ ? void 0 : FQ.links, QQ);
        null !== wQ && pQ(wQ)
      }
      logGrid() {
        var QQ;
        const FQ = null === (QQ = window.bloxdRenderDebug) || void 0 === QQ ? void 0 : QQ.gridFaces;
        this.gridLogged || void 0 === FQ || (this.gridLogged = !0, pQ(`gl1 grid ${FQ}`))
      }
      logRenderer() {
        var QQ, FQ;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const wQ = window.bloxdRenderDebug,
          LQ = (0, oQ.q)(),
          qQ = void 0 === (null === wQ || void 0 === wQ ? void 0 : wQ.parallelCompile) ? "" : `; parallel compile ${wQ.parallelCompile}`;
        pQ(`renderer gl ${LQ?`${LQ.vendor} / ${LQ.renderer}`:"(not read)"}; terrain fetch ${null!==(QQ=null===wQ||void 0===wQ?void 0:wQ.fetch)&&void 0!==QQ?QQ:"(not noted)"}${qQ}`), pQ(`renderer caps ${null!==(FQ=null===wQ||void 0===wQ?void 0:wQ.caps)&&void 0!==FQ?FQ:"(not noted)"}`)
      }
    }
    let CQ = null;

    function SQ(QQ) {
      return (0, YQ.h)(), CQ ??= new cQ(QQ), CQ
    }
  },
  4544: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      if (null === QQ) return "backend: none picked (no renderer build)";
      const FQ = QQ.adapter ? `${QQ.adapter.vendor}/${QQ.adapter.architecture}` : "none";
      return `backend ${QQ.backend}: reason ${QQ.reason}, source ${QQ.source}, adapter ${FQ}`
    }
    wQ.d(FQ, {
      c: () => LQ
    })
  },
  40169: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ,
      f: () => oQ,
      j: () => kQ
    });
    var LQ = wQ(40003),
      qQ = wQ(40009);

    function oQ(QQ) {
      if (QQ.queries.drawCensus() < LQ.Hb.BYTES) return null;
      const FQ = QQ.memoryData(QQ.scratch(), LQ.Hb.BYTES, 4, "the draw census");
      return null === FQ ? null : {
        terrainOpaque: LQ.Hb.terrainOpaque(FQ, 0),
        terrainTransparent: LQ.Hb.terrainTransparent(FQ, 0),
        terrainPack: LQ.Hb.terrainPack(FQ, 0),
        earthSky: LQ.Hb.earthSky(FQ, 0),
        skyMeshes: LQ.Hb.skyMeshes(FQ, 0),
        regular: LQ.Hb.regular(FQ, 0),
        thin: LQ.Hb.thin(FQ, 0),
        line: LQ.Hb.line(FQ, 0),
        text: LQ.Hb.text(FQ, 0),
        particles: LQ.Hb.particles(FQ, 0),
        terrainParts: LQ.Hb.terrainParts(FQ, 0),
        terrainCompiling: LQ.Hb.terrainCompiling(FQ, 0)
      }
    }

    function DQ(QQ) {
      const {
        terrainOpaque: FQ,
        terrainTransparent: wQ,
        earthSky: LQ,
        skyMeshes: qQ,
        regular: oQ,
        thin: DQ,
        line: kQ,
        text: vQ,
        particles: mQ
      } = QQ;
      return FQ + wQ + LQ + qQ + oQ + DQ + kQ + vQ + mQ
    }

    function kQ() {
      const QQ = (0, qQ.k)();
      return !0 === (null === QQ || void 0 === QQ ? void 0 : QQ.isCoreRunning) ? function(QQ) {
        const FQ = oQ(QQ);
        if (null === FQ) return [];
        const {
          terrainOpaque: wQ,
          terrainTransparent: LQ,
          terrainPack: qQ,
          earthSky: kQ,
          skyMeshes: vQ,
          regular: mQ,
          thin: uQ,
          line: HQ,
          text: bQ,
          particles: YQ
        } = FQ;
        return [{
          label: "Drawn",
          value: `${DQ(FQ)}`
        }, {
          label: "Terrain",
          value: `${wQ} opaque / ${LQ} transparent (${qQ} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${mQ} / ${uQ}`
        }, {
          label: "Text / Lines",
          value: `${bQ} / ${HQ}`
        }, {
          label: "Sky / Particles",
          value: `${kQ+vQ} / ${YQ}`
        }]
      }(QQ.api) : []
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);