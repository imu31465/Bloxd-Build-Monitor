export const id = 57;
export const ids = [57];
export const modules = {
  53755: (UU, XU, zU) => {
    zU.d(XU, {
      startRenderLite: () => dU
    });
    var cU = zU(3169),
      yU = zU(687),
      QU = zU(134),
      AU = zU(5326),
      FU = zU(42133),
      oU = zU(5318),
      DU = zU(41795),
      EU = zU(41660),
      YU = zU(41857),
      NU = zU(3099),
      IU = zU(4947),
      pU = zU(34733);
    const aU = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class tU {
      constructor(UU) {
        this.label = void 0, this.noted = void 0, this.lines = 0, this.atMs = -1 / 0, this.label = UU
      }
      line(UU, XU) {
        const zU = this.lines < 10 ? 6e4 : 6e5;
        return void 0 === UU || UU === this.noted || XU - this.atMs < zU ? null : (this.noted = UU, this.lines++, this.atMs = XU, `${this.label}: ${UU}`)
      }
    }
    class gU {
      constructor() {
        this.failuresLogged = 0, this.heldLogged = !1, this.links = new tU("gl links"), this.programUse = new tU("gl programs")
      }
      failures(UU) {
        const XU = UU ? UU.split(" ") : [],
          zU = XU.slice(this.failuresLogged).map((UU => {
            var XU;
            const [zU, cU] = UU.split(":"), yU = null !== (XU = aU.get(zU.slice(-1))) && void 0 !== XU ? XU : "";
            return `gl link failed: program row ${parseInt(zU)}${yU}, read ${cU} ms after issue`
          }));
        return this.failuresLogged = XU.length, zU
      }
      heldAtBackstop(UU) {
        return this.heldLogged || void 0 === UU ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${UU}`)
      }
      summaryLines(UU, XU, zU, cU) {
        const yU = this.links.line(UU, zU);
        return [yU && `${yU}; tab ${(0,pU.i)(cU)}`, this.programUse.line(XU, zU)].filter((UU => null !== UU))
      }
    }
    var kU = zU(5184);
    class GU {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(UU, XU, zU) {
        if ("none" !== XU && (this.frames++, "paced" === XU && this.paced++, "drawn" === XU)) {
          if (this.drawn++, this.renderUs += zU, this.renderUsMax = Math.max(this.renderUsMax, zU), null !== this.lastDrawnMs) {
            const XU = UU - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, XU), XU >= 50 && this.longGaps++
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

    function BU(UU) {
      return (UU / 1048576).toFixed(1)
    }
    class ZU {
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

    function RU(UU) {
      (0, NU.l)("renderlite", UU)
    }
    class PU {
      constructor(UU) {
        this.frames = new GU, this.events = new ZU, this.programLines = new gU, this.compileSummary = new tU("webgpu compiles"), this.hidden = new pU.e, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this.visibilityChanged = () => {
          const UU = performance.now();
          this.hidden.changed(UU), this.restartWindow(UU)
        }, this.LY = () => {
          var UU, XU;
          const zU = this.session,
            yU = (0, EU.f)(),
            QU = performance.now();
          if (this.logLinks(QU), this.logGrid(), null === zU || zU.isStopped || !0 !== (null === yU || void 0 === yU ? void 0 : yU.isCoreRunning)) return void this.restartWindow(QU);
          if (document.hidden) return;
          if (QU - this.windowStart < 2500) return;
          if (! function(UU) {
              return UU < 12 || (UU - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const oU = zU.headerWord(AU.I.GpuTimed),
            YU = zU.headerWord(AU.I.GpuFrameUs),
            NU = this.sampled === zU ? {
              timed: oU - this.gpuTimed >>> 0,
              us: YU - this.gpuUs >>> 0
            } : null;
          this.sampled = zU, this.gpuTimed = oU, this.gpuUs = YU;
          const IU = null !== (UU = null === (XU = (0, DU.Y)((0, cU.E)())) || void 0 === XU ? void 0 : XU.hcU()) && void 0 !== UU ? UU : 0;
          RU(function(UU, XU) {
            const zU = XU.windowMs / 1e3,
              cU = [`${Math.round(zU)}s: ${UU.drawn} drawn (${(UU.drawn/zU).toFixed(1)}/s), ${UU.paced} paced, ${UU.frames-UU.drawn-UU.paced} skipped`, `gap max ${Math.round(UU.gapMaxMs)} ms, ${UU.longGaps} over 50 ms`, `render cpu ${UU.drawn?(UU.renderUs/UU.drawn/1e3).toFixed(2):"-"} ms mean, ${(UU.renderUsMax/1e3).toFixed(1)} max`];
            null !== XU.gpu && cU.push(`gpu ${XU.gpu.timed?(XU.gpu.us/XU.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${XU.gpu.timed} timed`);
            const yU = XU.census;
            cU.push(null === yU ? "draws none yet" : `draws ${(0,FU.d)(yU)} (terrain ${yU.terrainOpaque}+${yU.terrainTransparent}, pack ${yU.terrainPack}, meshes ${yU.regular+yU.thin+yU.line+yU.text}, sky ${yU.earthSky+yU.skyMeshes}, particles ${yU.particles})`), null !== yU && yU.ringCopiesMax > 0 && cU.push(`frame rings ${yU.ringCopiesMax} copies max, ${yU.ringBusyWrites} busy writes so far`);
            const QU = null === XU.gpuBytesBefore ? "" : ` (${XU.gpuBytes>=XU.gpuBytesBefore?"+":"-"}${BU(Math.abs(XU.gpuBytes-XU.gpuBytesBefore))})`;
            return cU.push(`gpu mem ${BU(XU.gpuBytes)} MiB${QU}`), cU.push(`pending ${XU.pending}`, "terrain " + (XU.terrainDrawn ? "drawn" : "not drawn yet")), XU.eventsUnlogged > 0 && cU.push(`${XU.eventsUnlogged} events unlogged`), cU.join("; ")
          }(this.frames.take(), {
            windowMs: QU - this.windowStart,
            gpu: NU,
            census: (0, FU.h)(yU.api),
            gpuBytes: IU,
            gpuBytesBefore: this.gpuBytes,
            pending: zU.headerWord(AU.I.RenderPending),
            terrainDrawn: 0 !== (zU.headerWord(AU.I.LoadSteps) & AU.Y.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = IU, this.windowStart = QU
        }, RU(`${(0,kU.c)(UU)}; client ${yU.s.client} (${yU.s.reason})`), setInterval(this.LY, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(UU, XU, zU) {
        this.session = UU, this.frames.frame(XU, zU, "drawn" === zU ? UU.headerWord(AU.I.RenderUs) : 0)
      }
      coreErrors(UU) {
        for (const {
            code: cU,
            detail: yU
          }
          of UU) {
          var XU, zU;
          if (cU >= AU.h.RenderDeviceLost && cU <= AU.h.RenderSerialLinks) this.event(`render error ${(0,oU.ke)(cU)}${null!==(XU=null===(zU=(0,YU.d)(cU,yU))||void 0===zU?void 0:zU.words)&&void 0!==XU?XU:""} (detail ${yU})`)
        }
      }
      reload(UU, XU, zU, cU) {
        this.event(`render reload: ${UU?"webgpu":"gl"} ${zU}, losses ${XU}${void 0===cU?"":`: ${cU}`}`)
      }
      glContextLost(UU, XU, zU) {
        const cU = null === XU || void 0 === XU ? void 0 : XU.split(" "),
          yU = 3 === (null === cU || void 0 === cU ? void 0 : cU.length) ? `vertex arrays ${cU[0]}, keyed draws peak ${cU[1]} (sweep floor ${cU[2]})` : "vertex arrays unnoted";
        this.event(`gl context lost ${UU?"in game":"at home"}: ${yU}, render distance ${null!==zU&&void 0!==zU?zU:"none"}`)
      }
      crashed(UU) {
        let {
          site: XU,
          error: zU,
          header: cU
        } = UU;
        const yU = null !== cU && 0 !== cU.lastError ? `, last error ${(0,oU.ke)(cU.lastError)} (detail ${cU.lastErrorDetail})` : "",
          QU = zU instanceof Error ? `${zU.name}: ${zU.message}` : null === zU || void 0 === zU ? "" : String(zU);
        this.event(`core stopped at ${XU}${yU}${QU&&`: ${QU}`}`)
      }
      event(UU) {
        const XU = this.events.admit(UU);
        null !== XU && RU(XU)
      }
      restartWindow(UU) {
        this.frames.restart(), this.windowStart = UU;
        const XU = this.session;
        null === XU || XU.isStopped ? this.sampled = null : (this.sampled = XU, this.gpuTimed = XU.headerWord(AU.I.GpuTimed), this.gpuUs = XU.headerWord(AU.I.GpuFrameUs))
      }
      logLinks(UU) {
        const XU = window.bloxdRenderDebug;
        for (const yU of this.programLines.failures(null === XU || void 0 === XU ? void 0 : XU.linkFailures)) this.event(yU);
        const zU = this.programLines.heldAtBackstop(null === XU || void 0 === XU ? void 0 : XU.heldAtBackstop);
        null !== zU && RU(zU);
        for (const yU of this.programLines.summaryLines(null === XU || void 0 === XU ? void 0 : XU.links, null === XU || void 0 === XU ? void 0 : XU.programUse, UU, this.hidden.totals(UU))) RU(yU);
        const cU = this.compileSummary.line(null === XU || void 0 === XU ? void 0 : XU.compiles, UU);
        null !== cU && RU(cU)
      }
      logGrid() {
        var UU;
        const XU = null === (UU = window.bloxdRenderDebug) || void 0 === UU ? void 0 : UU.gridFaces;
        this.gridLogged || void 0 === XU || (this.gridLogged = !0, RU(`gl1 grid ${XU}`))
      }
      logRenderer() {
        var UU, XU;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const zU = window.bloxdRenderDebug,
          cU = (0, QU.A)(),
          yU = void 0 === (null === zU || void 0 === zU ? void 0 : zU.parallelCompile) ? "" : `; parallel compile ${zU.parallelCompile}`;
        RU(`renderer gl ${cU?`${cU.vendor} / ${cU.renderer}`:"(not read)"}; terrain fetch ${null!==(UU=null===zU||void 0===zU?void 0:zU.fetch)&&void 0!==UU?UU:"(not noted)"}${yU}`), RU(`renderer caps ${null!==(XU=null===zU||void 0===zU?void 0:zU.caps)&&void 0!==XU?XU:"(not noted)"}`)
      }
    }
    let WU = null;

    function dU(UU) {
      return (0, IU.g)(), WU ??= new PU(UU), WU
    }
  },
  5184: (UU, XU, zU) => {
    function cU(UU) {
      if (null === UU) return "backend: none picked (no renderer build)";
      const XU = UU.adapter ? `${UU.adapter.vendor}/${UU.adapter.architecture}` : "none";
      return `backend ${UU.backend}: reason ${UU.reason}, source ${UU.source}, adapter ${XU}`
    }
    zU.d(XU, {
      c: () => cU
    })
  },
  34733: (UU, XU, zU) => {
    function cU(UU) {
      return `hidden ${UU.changes} changes, ${Math.round(UU.hiddenMs)} ms`
    }
    zU.d(XU, {
      e: () => yU,
      i: () => cU
    });
    class yU {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(UU) {
        this.changes++, document.hidden ? this.hiddenSinceMs = UU : this.hiddenSinceMs >= 0 && (this.hiddenMs += UU - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(UU) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? UU - this.hiddenSinceMs : 0)
        }
      }
    }
  },
  42133: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU,
      h: () => QU,
      k: () => FU
    });
    var cU = zU(41652),
      yU = zU(41660);

    function QU(UU) {
      if (UU.queries.drawCensus() < cU.Cb.BYTES) return null;
      const XU = UU.memoryData(UU.scratch(), cU.Cb.BYTES, 4, "the draw census");
      return null === XU ? null : {
        terrainOpaque: cU.Cb.terrainOpaque(XU, 0),
        terrainTransparent: cU.Cb.terrainTransparent(XU, 0),
        terrainPack: cU.Cb.terrainPack(XU, 0),
        earthSky: cU.Cb.earthSky(XU, 0),
        skyMeshes: cU.Cb.skyMeshes(XU, 0),
        regular: cU.Cb.regular(XU, 0),
        thin: cU.Cb.thin(XU, 0),
        line: cU.Cb.line(XU, 0),
        text: cU.Cb.text(XU, 0),
        particles: cU.Cb.particles(XU, 0),
        terrainParts: cU.Cb.terrainParts(XU, 0),
        terrainCompiling: cU.Cb.terrainCompiling(XU, 0),
        ringCopiesMax: cU.Cb.ringCopiesMax(XU, 0),
        ringBusyWrites: cU.Cb.ringBusyWrites(XU, 0)
      }
    }

    function AU(UU) {
      const {
        terrainOpaque: XU,
        terrainTransparent: zU,
        earthSky: cU,
        skyMeshes: yU,
        regular: QU,
        thin: AU,
        line: FU,
        text: oU,
        particles: DU
      } = UU;
      return XU + zU + cU + yU + QU + AU + FU + oU + DU
    }

    function FU() {
      const UU = (0, yU.f)();
      return !0 === (null === UU || void 0 === UU ? void 0 : UU.isCoreRunning) ? function(UU) {
        const XU = QU(UU);
        if (null === XU) return [];
        const {
          terrainOpaque: zU,
          terrainTransparent: cU,
          terrainPack: yU,
          earthSky: FU,
          skyMeshes: oU,
          regular: DU,
          thin: EU,
          line: YU,
          text: NU,
          particles: IU
        } = XU;
        return [{
          label: "Drawn",
          value: `${AU(XU)}`
        }, {
          label: "Terrain",
          value: `${zU} opaque / ${cU} transparent (${yU} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${DU} / ${EU}`
        }, {
          label: "Text / Lines",
          value: `${NU} / ${YU}`
        }, {
          label: "Sky / Particles",
          value: `${FU+oU} / ${IU}`
        }]
      }(UU.api) : []
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);