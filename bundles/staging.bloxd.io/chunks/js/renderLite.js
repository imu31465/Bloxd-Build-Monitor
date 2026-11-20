export const id = 48;
export const ids = [48];
export const modules = {
  42812: (TT, kT, cT) => {
    cT.d(kT, {
      startRenderLite: () => rT
    });
    var lT = cT(3679),
      MT = cT(636),
      KT = cT(150),
      OT = cT(4769),
      yT = cT(40369),
      fT = cT(4761),
      xT = cT(40426),
      IT = cT(40215),
      AT = cT(40569),
      CT = cT(2853),
      jT = cT(4491);
    const vT = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class tT {
      constructor() {
        this.failuresLogged = 0, this.summary = void 0, this.summaries = 0, this.summaryAtMs = -1 / 0
      }
      failures(TT) {
        const kT = TT ? TT.split(" ") : [],
          cT = kT.slice(this.failuresLogged).map((TT => {
            var kT;
            const [cT, lT] = TT.split(":"), MT = null !== (kT = vT.get(cT.slice(-1))) && void 0 !== kT ? kT : "";
            return `gl link failed: program row ${parseInt(cT)}${MT}, read ${lT} ms after issue`
          }));
        return this.failuresLogged = kT.length, cT
      }
      summaryLine(TT, kT) {
        const cT = this.summaries < 10 ? 6e4 : 6e5;
        return void 0 === TT || TT === this.summary || kT - this.summaryAtMs < cT ? null : (this.summary = TT, this.summaries++, this.summaryAtMs = kT, `gl links: ${TT}`)
      }
    }
    var hT = cT(4688);
    class NT {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(TT, kT, cT) {
        if ("none" !== kT && (this.frames++, "paced" === kT && this.paced++, "drawn" === kT)) {
          if (this.drawn++, this.renderUs += cT, this.renderUsMax = Math.max(this.renderUsMax, cT), null !== this.lastDrawnMs) {
            const kT = TT - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, kT), kT >= 50 && this.longGaps++
          }
          this.lastDrawnMs = TT
        }
      }
      restart() {
        this.take(), this.lastDrawnMs = null
      }
      take() {
        const TT = {
          frames: this.frames,
          drawn: this.drawn,
          paced: this.paced,
          gapMaxMs: this.gapMaxMs,
          longGaps: this.longGaps,
          renderUs: this.renderUs,
          renderUsMax: this.renderUsMax
        };
        return this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, TT
      }
    }

    function QT(TT) {
      return (TT / 1048576).toFixed(1)
    }
    class ST {
      constructor() {
        this.logged = 0, this.seen = new Set, this.unlogged = 0
      }
      admit(TT) {
        return this.logged >= 20 || this.seen.has(TT) ? (this.unlogged++, null) : (this.seen.add(TT), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${TT}` : TT)
      }
      takeUnlogged() {
        const TT = this.unlogged;
        return this.unlogged = 0, TT
      }
    }

    function DT(TT) {
      (0, CT.k)("renderlite", TT)
    }
    class aT {
      constructor(TT) {
        this.frames = new NT, this.events = new ST, this.links = new tT, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this.visibilityChanged = () => {
          this.restartWindow(performance.now())
        }, this.UA = () => {
          var TT, kT;
          const cT = this.session,
            MT = (0, IT.g)(),
            KT = performance.now();
          if (this.logLinks(KT), this.logGrid(), null === cT || cT.isStopped || !0 !== (null === MT || void 0 === MT ? void 0 : MT.isCoreRunning)) return void this.restartWindow(KT);
          if (document.hidden) return;
          if (KT - this.windowStart < 2500) return;
          if (! function(TT) {
              return TT < 12 || (TT - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const fT = cT.headerWord(OT.B.GpuTimed),
            AT = cT.headerWord(OT.B.GpuFrameUs),
            CT = this.sampled === cT ? {
              timed: fT - this.gpuTimed >>> 0,
              us: AT - this.gpuUs >>> 0
            } : null;
          this.sampled = cT, this.gpuTimed = fT, this.gpuUs = AT;
          const jT = null !== (TT = null === (kT = (0, xT.D)((0, lT.x)())) || void 0 === kT ? void 0 : kT.hcT()) && void 0 !== TT ? TT : 0;
          DT(function(TT, kT) {
            const cT = kT.windowMs / 1e3,
              lT = [`${Math.round(cT)}s: ${TT.drawn} drawn (${(TT.drawn/cT).toFixed(1)}/s), ${TT.paced} paced, ${TT.frames-TT.drawn-TT.paced} skipped`, `gap max ${Math.round(TT.gapMaxMs)} ms, ${TT.longGaps} over 50 ms`, `render cpu ${TT.drawn?(TT.renderUs/TT.drawn/1e3).toFixed(2):"-"} ms mean, ${(TT.renderUsMax/1e3).toFixed(1)} max`];
            null !== kT.gpu && lT.push(`gpu ${kT.gpu.timed?(kT.gpu.us/kT.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${kT.gpu.timed} timed`);
            const MT = kT.census;
            lT.push(null === MT ? "draws none yet" : `draws ${(0,yT.d)(MT)} (terrain ${MT.terrainOpaque}+${MT.terrainTransparent}, pack ${MT.terrainPack}, meshes ${MT.regular+MT.thin+MT.line+MT.text}, sky ${MT.earthSky+MT.skyMeshes}, particles ${MT.particles})`);
            const KT = null === kT.gpuBytesBefore ? "" : ` (${kT.gpuBytes>=kT.gpuBytesBefore?"+":"-"}${QT(Math.abs(kT.gpuBytes-kT.gpuBytesBefore))})`;
            return lT.push(`gpu mem ${QT(kT.gpuBytes)} MiB${KT}`), lT.push(`pending ${kT.pending}`, "terrain " + (kT.terrainDrawn ? "drawn" : "not drawn yet")), kT.eventsUnlogged > 0 && lT.push(`${kT.eventsUnlogged} events unlogged`), lT.join("; ")
          }(this.frames.take(), {
            windowMs: KT - this.windowStart,
            gpu: CT,
            census: (0, yT.g)(MT.api),
            gpuBytes: jT,
            gpuBytesBefore: this.gpuBytes,
            pending: cT.headerWord(OT.B.RenderPending),
            terrainDrawn: 0 !== (cT.headerWord(OT.B.LoadSteps) & OT.H.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = jT, this.windowStart = KT
        }, DT(`${(0,hT.e)(TT)}; client ${MT.k.client} (${MT.k.reason})`), setInterval(this.UA, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(TT, kT, cT) {
        this.session = TT, this.frames.frame(kT, cT, "drawn" === cT ? TT.headerWord(OT.B.RenderUs) : 0)
      }
      coreErrors(TT) {
        for (const {
            code: lT,
            detail: MT
          }
          of TT) {
          var kT, cT;
          if (lT >= OT.e.RenderDeviceLost && lT <= OT.e.RenderSerialLinks) this.event(`render error ${(0,fT.Vd)(lT)}${null!==(kT=null===(cT=(0,AT.c)(lT,MT))||void 0===cT?void 0:cT.words)&&void 0!==kT?kT:""} (detail ${MT})`)
        }
      }
      reload(TT, kT, cT, lT) {
        this.event(`render reload: ${TT?"webgpu":"gl"} ${cT}, losses ${kT}${void 0===lT?"":`: ${lT}`}`)
      }
      crashed(TT) {
        let {
          site: kT,
          error: cT,
          header: lT
        } = TT;
        const MT = null !== lT && 0 !== lT.lastError ? `, last error ${(0,fT.Vd)(lT.lastError)} (detail ${lT.lastErrorDetail})` : "",
          KT = cT instanceof Error ? `${cT.name}: ${cT.message}` : null === cT || void 0 === cT ? "" : String(cT);
        this.event(`core stopped at ${kT}${MT}${KT&&`: ${KT}`}`)
      }
      event(TT) {
        const kT = this.events.admit(TT);
        null !== kT && DT(kT)
      }
      restartWindow(TT) {
        this.frames.restart(), this.windowStart = TT;
        const kT = this.session;
        null === kT || kT.isStopped ? this.sampled = null : (this.sampled = kT, this.gpuTimed = kT.headerWord(OT.B.GpuTimed), this.gpuUs = kT.headerWord(OT.B.GpuFrameUs))
      }
      logLinks(TT) {
        const kT = window.bloxdRenderDebug;
        for (const lT of this.links.failures(null === kT || void 0 === kT ? void 0 : kT.linkFailures)) this.event(lT);
        const cT = this.links.summaryLine(null === kT || void 0 === kT ? void 0 : kT.links, TT);
        null !== cT && DT(cT)
      }
      logGrid() {
        var TT;
        const kT = null === (TT = window.bloxdRenderDebug) || void 0 === TT ? void 0 : TT.gridFaces;
        this.gridLogged || void 0 === kT || (this.gridLogged = !0, DT(`gl1 grid ${kT}`))
      }
      logRenderer() {
        var TT, kT;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const cT = window.bloxdRenderDebug,
          lT = (0, KT.q)(),
          MT = void 0 === (null === cT || void 0 === cT ? void 0 : cT.parallelCompile) ? "" : `; parallel compile ${cT.parallelCompile}`;
        DT(`renderer gl ${lT?`${lT.vendor} / ${lT.renderer}`:"(not read)"}; terrain fetch ${null!==(TT=null===cT||void 0===cT?void 0:cT.fetch)&&void 0!==TT?TT:"(not noted)"}${MT}`), DT(`renderer caps ${null!==(kT=null===cT||void 0===cT?void 0:cT.caps)&&void 0!==kT?kT:"(not noted)"}`)
      }
    }
    let FT = null;

    function rT(TT) {
      return (0, jT.g)(), FT ??= new aT(TT), FT
    }
  },
  4688: (TT, kT, cT) => {
    function lT(TT) {
      if (null === TT) return "backend: none picked (no renderer build)";
      const kT = TT.adapter ? `${TT.adapter.vendor}/${TT.adapter.architecture}` : "none";
      return `backend ${TT.backend}: reason ${TT.reason}, source ${TT.source}, adapter ${kT}`
    }
    cT.d(kT, {
      e: () => lT
    })
  },
  40369: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => OT,
      g: () => KT,
      k: () => yT
    });
    var lT = cT(40204),
      MT = cT(40215);

    function KT(TT) {
      if (TT.queries.drawCensus() < lT.Kb.BYTES) return null;
      const kT = TT.memoryData(TT.scratch(), lT.Kb.BYTES, 4, "the draw census");
      return null === kT ? null : {
        terrainOpaque: lT.Kb.terrainOpaque(kT, 0),
        terrainTransparent: lT.Kb.terrainTransparent(kT, 0),
        terrainPack: lT.Kb.terrainPack(kT, 0),
        earthSky: lT.Kb.earthSky(kT, 0),
        skyMeshes: lT.Kb.skyMeshes(kT, 0),
        regular: lT.Kb.regular(kT, 0),
        thin: lT.Kb.thin(kT, 0),
        line: lT.Kb.line(kT, 0),
        text: lT.Kb.text(kT, 0),
        particles: lT.Kb.particles(kT, 0),
        terrainParts: lT.Kb.terrainParts(kT, 0),
        terrainCompiling: lT.Kb.terrainCompiling(kT, 0)
      }
    }

    function OT(TT) {
      const {
        terrainOpaque: kT,
        terrainTransparent: cT,
        earthSky: lT,
        skyMeshes: MT,
        regular: KT,
        thin: OT,
        line: yT,
        text: fT,
        particles: xT
      } = TT;
      return kT + cT + lT + MT + KT + OT + yT + fT + xT
    }

    function yT() {
      const TT = (0, MT.g)();
      return !0 === (null === TT || void 0 === TT ? void 0 : TT.isCoreRunning) ? function(TT) {
        const kT = KT(TT);
        if (null === kT) return [];
        const {
          terrainOpaque: cT,
          terrainTransparent: lT,
          terrainPack: MT,
          earthSky: yT,
          skyMeshes: fT,
          regular: xT,
          thin: IT,
          line: AT,
          text: CT,
          particles: jT
        } = kT;
        return [{
          label: "Drawn",
          value: `${OT(kT)}`
        }, {
          label: "Terrain",
          value: `${cT} opaque / ${lT} transparent (${MT} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${xT} / ${IT}`
        }, {
          label: "Text / Lines",
          value: `${CT} / ${AT}`
        }, {
          label: "Sky / Particles",
          value: `${yT+fT} / ${jT}`
        }]
      }(TT.api) : []
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);