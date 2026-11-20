export const id = 48;
export const ids = [48];
export const modules = {
  42650: (UU, RU, gU) => {
    gU.d(RU, {
      startRenderLite: () => JU
    });
    var tU = gU(3372),
      pU = gU(603),
      EU = gU(131),
      PU = gU(4456),
      TU = gU(40116),
      qU = gU(4449),
      KU = gU(40166),
      cU = gU(39971),
      GU = gU(40331),
      jU = gU(2624),
      uU = gU(4179);
    const CU = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class hU {
      constructor() {
        this.failuresLogged = 0, this.summary = void 0, this.summaries = 0, this.summaryAtMs = -1 / 0
      }
      failures(UU) {
        const RU = UU ? UU.split(" ") : [],
          gU = RU.slice(this.failuresLogged).map((UU => {
            var RU;
            const [gU, tU] = UU.split(":"), pU = null !== (RU = CU.get(gU.slice(-1))) && void 0 !== RU ? RU : "";
            return `gl link failed: program row ${parseInt(gU)}${pU}, read ${tU} ms after issue`
          }));
        return this.failuresLogged = RU.length, gU
      }
      summaryLine(UU, RU) {
        const gU = this.summaries < 10 ? 6e4 : 6e5;
        return void 0 === UU || UU === this.summary || RU - this.summaryAtMs < gU ? null : (this.summary = UU, this.summaries++, this.summaryAtMs = RU, `gl links: ${UU}`)
      }
    }
    var QU = gU(4356);
    class eU {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(UU, RU, gU) {
        if ("none" !== RU && (this.frames++, "paced" === RU && this.paced++, "drawn" === RU)) {
          if (this.drawn++, this.renderUs += gU, this.renderUsMax = Math.max(this.renderUsMax, gU), null !== this.lastDrawnMs) {
            const RU = UU - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, RU), RU >= 50 && this.longGaps++
          }
          this.lastDrawnMs = UU
        }
      }
      restart() {
        this.take(), this.lastDrawnMs = null
      }
      take() {
        const UU = {
          frames: this.frames,
          drawn: this.drawn,
          paced: this.paced,
          gapMaxMs: this.gapMaxMs,
          longGaps: this.longGaps,
          renderUs: this.renderUs,
          renderUsMax: this.renderUsMax
        };
        return this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, UU
      }
    }

    function WU(UU) {
      return (UU / 1048576).toFixed(1)
    }
    class fU {
      constructor() {
        this.logged = 0, this.seen = new Set, this.unlogged = 0
      }
      admit(UU) {
        return this.logged >= 20 || this.seen.has(UU) ? (this.unlogged++, null) : (this.seen.add(UU), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${UU}` : UU)
      }
      takeUnlogged() {
        const UU = this.unlogged;
        return this.unlogged = 0, UU
      }
    }

    function xU(UU) {
      (0, jU.h)("renderlite", function(UU) {
        let RU = 0,
          gU = 0,
          tU = 0;
        for (const EU of UU) {
          var pU;
          const PU = null !== (pU = EU.codePointAt(0)) && void 0 !== pU ? pU : 0;
          if (RU += PU < 128 ? 1 : PU < 2048 ? 2 : PU < 65536 ? 3 : 4, RU > 375) return `${UU.slice(0,tU)}...`;
          gU += EU.length, RU <= 372 && (tU = gU)
        }
        return UU
      }(UU))
    }
    class mU {
      constructor(UU) {
        this.frames = new eU, this.events = new fU, this.links = new hU, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.visibilityChanged = () => {
          this.restartWindow(performance.now())
        }, this.HG = () => {
          var UU, RU;
          const gU = this.session,
            pU = (0, cU.i)(),
            EU = performance.now();
          if (this.logLinks(EU), null === gU || gU.isStopped || !0 !== (null === pU || void 0 === pU ? void 0 : pU.isCoreRunning)) return void this.restartWindow(EU);
          if (document.hidden) return;
          if (EU - this.windowStart < 2500) return;
          if (! function(UU) {
              return UU < 12 || (UU - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const qU = gU.headerWord(PU.A.GpuTimed),
            GU = gU.headerWord(PU.A.GpuFrameUs),
            jU = this.sampled === gU ? {
              timed: qU - this.gpuTimed >>> 0,
              us: GU - this.gpuUs >>> 0
            } : null;
          this.sampled = gU, this.gpuTimed = qU, this.gpuUs = GU;
          const uU = null !== (UU = null === (RU = (0, KU.E)((0, tU.A)())) || void 0 === RU ? void 0 : RU.YgU()) && void 0 !== UU ? UU : 0;
          xU(function(UU, RU) {
            const gU = RU.windowMs / 1e3,
              tU = [`${Math.round(gU)}s: ${UU.drawn} drawn (${(UU.drawn/gU).toFixed(1)}/s), ${UU.paced} paced, ${UU.frames-UU.drawn-UU.paced} skipped`, `gap max ${Math.round(UU.gapMaxMs)} ms, ${UU.longGaps} over 50 ms`, `render cpu ${UU.drawn?(UU.renderUs/UU.drawn/1e3).toFixed(2):"-"} ms mean, ${(UU.renderUsMax/1e3).toFixed(1)} max`];
            null !== RU.gpu && tU.push(`gpu ${RU.gpu.timed?(RU.gpu.us/RU.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${RU.gpu.timed} timed`);
            const pU = RU.census;
            tU.push(null === pU ? "draws none yet" : `draws ${(0,TU.c)(pU)} (terrain ${pU.terrainOpaque}+${pU.terrainTransparent}, pack ${pU.terrainPack}, meshes ${pU.regular+pU.thin+pU.line+pU.text}, sky ${pU.earthSky+pU.skyMeshes}, particles ${pU.particles})`);
            const EU = null === RU.gpuBytesBefore ? "" : ` (${RU.gpuBytes>=RU.gpuBytesBefore?"+":"-"}${WU(Math.abs(RU.gpuBytes-RU.gpuBytesBefore))})`;
            return tU.push(`gpu mem ${WU(RU.gpuBytes)} MiB${EU}`), tU.push(`pending ${RU.pending}`, "terrain " + (RU.terrainDrawn ? "drawn" : "not drawn yet")), RU.eventsUnlogged > 0 && tU.push(`${RU.eventsUnlogged} events unlogged`), tU.join("; ")
          }(this.frames.take(), {
            windowMs: EU - this.windowStart,
            gpu: jU,
            census: (0, TU.f)(pU.api),
            gpuBytes: uU,
            gpuBytesBefore: this.gpuBytes,
            pending: gU.headerWord(PU.A.RenderPending),
            terrainDrawn: 0 !== (gU.headerWord(PU.A.LoadSteps) & PU.G.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = uU, this.windowStart = EU
        }, xU(`${(0,QU.e)(UU)}; client ${pU.n.client} (${pU.n.reason})`), setInterval(this.HG, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(UU, RU, gU) {
        this.session = UU, this.frames.frame(RU, gU, "drawn" === gU ? UU.headerWord(PU.A.RenderUs) : 0)
      }
      coreErrors(UU) {
        for (const {
            code: tU,
            detail: pU
          }
          of UU) {
          var RU, gU;
          if (tU >= PU.e.RenderDeviceLost && tU <= PU.e.RenderSerialLinks) this.event(`render error ${(0,qU.de)(tU)}${null!==(RU=null===(gU=(0,GU.d)(tU,pU))||void 0===gU?void 0:gU.words)&&void 0!==RU?RU:""} (detail ${pU})`)
        }
      }
      reload(UU, RU, gU, tU) {
        this.event(`render reload: ${UU?"webgpu":"gl"} ${gU}, losses ${RU}${void 0===tU?"":`: ${tU}`}`)
      }
      crashed(UU) {
        let {
          site: RU,
          error: gU,
          header: tU
        } = UU;
        const pU = null !== tU && 0 !== tU.lastError ? `, last error ${(0,qU.de)(tU.lastError)} (detail ${tU.lastErrorDetail})` : "",
          EU = gU instanceof Error ? `${gU.name}: ${gU.message}` : null === gU || void 0 === gU ? "" : String(gU);
        this.event(`core stopped at ${RU}${pU}${EU&&`: ${EU}`}`)
      }
      event(UU) {
        const RU = this.events.admit(UU);
        null !== RU && xU(RU)
      }
      restartWindow(UU) {
        this.frames.restart(), this.windowStart = UU;
        const RU = this.session;
        null === RU || RU.isStopped ? this.sampled = null : (this.sampled = RU, this.gpuTimed = RU.headerWord(PU.A.GpuTimed), this.gpuUs = RU.headerWord(PU.A.GpuFrameUs))
      }
      logLinks(UU) {
        const RU = window.bloxdRenderDebug;
        for (const tU of this.links.failures(null === RU || void 0 === RU ? void 0 : RU.linkFailures)) this.event(tU);
        const gU = this.links.summaryLine(null === RU || void 0 === RU ? void 0 : RU.links, UU);
        null !== gU && xU(gU)
      }
      logRenderer() {
        var UU, RU;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const gU = window.bloxdRenderDebug,
          tU = (0, EU.n)(),
          pU = void 0 === (null === gU || void 0 === gU ? void 0 : gU.parallelCompile) ? "" : `; parallel compile ${gU.parallelCompile}`;
        xU(`renderer gl ${tU?`${tU.vendor} / ${tU.renderer}`:"(not read)"}; terrain fetch ${null!==(UU=null===gU||void 0===gU?void 0:gU.fetch)&&void 0!==UU?UU:"(not noted)"}${pU}`), xU(`renderer caps ${null!==(RU=null===gU||void 0===gU?void 0:gU.caps)&&void 0!==RU?RU:"(not noted)"}`)
      }
    }
    let IU = null;

    function JU(UU) {
      return (0, uU.g)(), IU ??= new mU(UU), IU
    }
  },
  4356: (UU, RU, gU) => {
    function tU(UU) {
      if (null === UU) return "backend: none picked (no renderer build)";
      const RU = UU.adapter ? `${UU.adapter.vendor}/${UU.adapter.architecture}` : "none";
      return `backend ${UU.backend}: reason ${UU.reason}, source ${UU.source}, adapter ${RU}`
    }
    gU.d(RU, {
      e: () => tU
    })
  },
  40116: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => PU,
      f: () => EU,
      g: () => TU
    });
    var tU = gU(39955),
      pU = gU(39971);

    function EU(UU) {
      if (UU.queries.drawCensus() < tU.zb.BYTES) return null;
      const RU = UU.memoryData(UU.scratch(), tU.zb.BYTES, 4, "the draw census");
      return null === RU ? null : {
        terrainOpaque: tU.zb.terrainOpaque(RU, 0),
        terrainTransparent: tU.zb.terrainTransparent(RU, 0),
        terrainPack: tU.zb.terrainPack(RU, 0),
        earthSky: tU.zb.earthSky(RU, 0),
        skyMeshes: tU.zb.skyMeshes(RU, 0),
        regular: tU.zb.regular(RU, 0),
        thin: tU.zb.thin(RU, 0),
        line: tU.zb.line(RU, 0),
        text: tU.zb.text(RU, 0),
        particles: tU.zb.particles(RU, 0)
      }
    }

    function PU(UU) {
      const {
        terrainOpaque: RU,
        terrainTransparent: gU,
        earthSky: tU,
        skyMeshes: pU,
        regular: EU,
        thin: PU,
        line: TU,
        text: qU,
        particles: KU
      } = UU;
      return RU + gU + tU + pU + EU + PU + TU + qU + KU
    }

    function TU() {
      const UU = (0, pU.i)();
      return !0 === (null === UU || void 0 === UU ? void 0 : UU.isCoreRunning) ? function(UU) {
        const RU = EU(UU);
        if (null === RU) return [];
        const {
          terrainOpaque: gU,
          terrainTransparent: tU,
          terrainPack: pU,
          earthSky: TU,
          skyMeshes: qU,
          regular: KU,
          thin: cU,
          line: GU,
          text: jU,
          particles: uU
        } = RU;
        return [{
          label: "Drawn",
          value: `${PU(RU)}`
        }, {
          label: "Terrain",
          value: `${gU} opaque / ${tU} transparent (${pU} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${KU} / ${cU}`
        }, {
          label: "Text / Lines",
          value: `${jU} / ${GU}`
        }, {
          label: "Sky / Particles",
          value: `${TU+qU} / ${uU}`
        }]
      }(UU.api) : []
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);