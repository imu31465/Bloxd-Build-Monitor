export const id = 48;
export const ids = [48];
export const modules = {
  42369: (YY, rY, DY) => {
    DY.d(rY, {
      startRenderLite: () => TY
    });
    var FY = DY(3312),
      AY = DY(649),
      IY = DY(138),
      RY = DY(4382),
      OY = DY(39835),
      gY = DY(4376),
      aY = DY(39890),
      vY = DY(39693),
      uY = DY(40063),
      sY = DY(2565),
      iY = DY(4055);
    const yY = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class QY {
      constructor() {
        this.failuresLogged = 0, this.summary = void 0, this.summaries = 0, this.summaryAtMs = -1 / 0
      }
      failures(YY) {
        const rY = YY ? YY.split(" ") : [],
          DY = rY.slice(this.failuresLogged).map((YY => {
            var rY;
            const [DY, FY] = YY.split(":"), AY = null !== (rY = yY.get(DY.slice(-1))) && void 0 !== rY ? rY : "";
            return `gl link failed: program row ${parseInt(DY)}${AY}, read ${FY} ms after issue`
          }));
        return this.failuresLogged = rY.length, DY
      }
      summaryLine(YY, rY) {
        const DY = this.summaries < 10 ? 6e4 : 6e5;
        return void 0 === YY || YY === this.summary || rY - this.summaryAtMs < DY ? null : (this.summary = YY, this.summaries++, this.summaryAtMs = rY, `gl links: ${YY}`)
      }
    }
    var oY = DY(4272);
    class WY {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(YY, rY, DY) {
        if ("none" !== rY && (this.frames++, "paced" === rY && this.paced++, "drawn" === rY)) {
          if (this.drawn++, this.renderUs += DY, this.renderUsMax = Math.max(this.renderUsMax, DY), null !== this.lastDrawnMs) {
            const rY = YY - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, rY), rY >= 50 && this.longGaps++
          }
          this.lastDrawnMs = YY
        }
      }
      restart() {
        this.take(), this.lastDrawnMs = null
      }
      take() {
        const YY = {
          frames: this.frames,
          drawn: this.drawn,
          paced: this.paced,
          gapMaxMs: this.gapMaxMs,
          longGaps: this.longGaps,
          renderUs: this.renderUs,
          renderUsMax: this.renderUsMax
        };
        return this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, YY
      }
    }

    function EY(YY) {
      return (YY / 1048576).toFixed(1)
    }
    class mY {
      constructor() {
        this.logged = 0, this.seen = new Set, this.unlogged = 0
      }
      admit(YY) {
        return this.logged >= 20 || this.seen.has(YY) ? (this.unlogged++, null) : (this.seen.add(YY), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${YY}` : YY)
      }
      takeUnlogged() {
        const YY = this.unlogged;
        return this.unlogged = 0, YY
      }
    }

    function VY(YY) {
      (0, sY.n)("renderlite", function(YY) {
        let rY = 0,
          DY = 0,
          FY = 0;
        for (const IY of YY) {
          var AY;
          const RY = null !== (AY = IY.codePointAt(0)) && void 0 !== AY ? AY : 0;
          if (rY += RY < 128 ? 1 : RY < 2048 ? 2 : RY < 65536 ? 3 : 4, rY > 375) return `${YY.slice(0,FY)}...`;
          DY += IY.length, rY <= 372 && (FY = DY)
        }
        return YY
      }(YY))
    }
    class SY {
      constructor(YY) {
        this.frames = new WY, this.events = new mY, this.links = new QY, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.visibilityChanged = () => {
          this.restartWindow(performance.now())
        }, this.Zu = () => {
          var YY, rY;
          const DY = this.session,
            AY = (0, vY.g)(),
            IY = performance.now();
          if (this.logLinks(IY), null === DY || DY.isStopped || !0 !== (null === AY || void 0 === AY ? void 0 : AY.isCoreRunning)) return void this.restartWindow(IY);
          if (document.hidden) return;
          if (IY - this.windowStart < 2500) return;
          if (! function(YY) {
              return YY < 12 || (YY - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const gY = DY.headerWord(RY.B.GpuTimed),
            uY = DY.headerWord(RY.B.GpuFrameUs),
            sY = this.sampled === DY ? {
              timed: gY - this.gpuTimed >>> 0,
              us: uY - this.gpuUs >>> 0
            } : null;
          this.sampled = DY, this.gpuTimed = gY, this.gpuUs = uY;
          const iY = null !== (YY = null === (rY = (0, aY.D)((0, FY.D)())) || void 0 === rY ? void 0 : rY.sDY()) && void 0 !== YY ? YY : 0;
          VY(function(YY, rY) {
            const DY = rY.windowMs / 1e3,
              FY = [`${Math.round(DY)}s: ${YY.drawn} drawn (${(YY.drawn/DY).toFixed(1)}/s), ${YY.paced} paced, ${YY.frames-YY.drawn-YY.paced} skipped`, `gap max ${Math.round(YY.gapMaxMs)} ms, ${YY.longGaps} over 50 ms`, `render cpu ${YY.drawn?(YY.renderUs/YY.drawn/1e3).toFixed(2):"-"} ms mean, ${(YY.renderUsMax/1e3).toFixed(1)} max`];
            null !== rY.gpu && FY.push(`gpu ${rY.gpu.timed?(rY.gpu.us/rY.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${rY.gpu.timed} timed`);
            const AY = rY.census;
            FY.push(null === AY ? "draws none yet" : `draws ${(0,OY.c)(AY)} (terrain ${AY.terrainOpaque}+${AY.terrainTransparent}, pack ${AY.terrainPack}, meshes ${AY.regular+AY.thin+AY.line+AY.text}, sky ${AY.earthSky+AY.skyMeshes}, particles ${AY.particles})`);
            const IY = null === rY.gpuBytesBefore ? "" : ` (${rY.gpuBytes>=rY.gpuBytesBefore?"+":"-"}${EY(Math.abs(rY.gpuBytes-rY.gpuBytesBefore))})`;
            return FY.push(`gpu mem ${EY(rY.gpuBytes)} MiB${IY}`), FY.push(`pending ${rY.pending}`, "terrain " + (rY.terrainDrawn ? "drawn" : "not drawn yet")), rY.eventsUnlogged > 0 && FY.push(`${rY.eventsUnlogged} events unlogged`), FY.join("; ")
          }(this.frames.take(), {
            windowMs: IY - this.windowStart,
            gpu: sY,
            census: (0, OY.f)(AY.api),
            gpuBytes: iY,
            gpuBytesBefore: this.gpuBytes,
            pending: DY.headerWord(RY.B.RenderPending),
            terrainDrawn: 0 !== (DY.headerWord(RY.B.LoadSteps) & RY.J.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = iY, this.windowStart = IY
        }, VY(`${(0,oY.c)(YY)}; client ${AY.i.client} (${AY.i.reason})`), setInterval(this.Zu, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(YY, rY, DY) {
        this.session = YY, this.frames.frame(rY, DY, "drawn" === DY ? YY.headerWord(RY.B.RenderUs) : 0)
      }
      coreErrors(YY) {
        for (const {
            code: FY,
            detail: AY
          }
          of YY) {
          var rY, DY;
          if (FY >= RY.f.RenderDeviceLost && FY <= RY.f.RenderSerialLinks) this.event(`render error ${(0,gY.Qd)(FY)}${null!==(rY=null===(DY=(0,uY.c)(FY,AY))||void 0===DY?void 0:DY.words)&&void 0!==rY?rY:""} (detail ${AY})`)
        }
      }
      reload(YY, rY, DY, FY) {
        this.event(`render reload: ${YY?"webgpu":"gl"} ${DY}, losses ${rY}${void 0===FY?"":`: ${FY}`}`)
      }
      crashed(YY) {
        let {
          site: rY,
          error: DY,
          header: FY
        } = YY;
        const AY = null !== FY && 0 !== FY.lastError ? `, last error ${(0,gY.Qd)(FY.lastError)} (detail ${FY.lastErrorDetail})` : "",
          IY = DY instanceof Error ? `${DY.name}: ${DY.message}` : null === DY || void 0 === DY ? "" : String(DY);
        this.event(`core stopped at ${rY}${AY}${IY&&`: ${IY}`}`)
      }
      event(YY) {
        const rY = this.events.admit(YY);
        null !== rY && VY(rY)
      }
      restartWindow(YY) {
        this.frames.restart(), this.windowStart = YY;
        const rY = this.session;
        null === rY || rY.isStopped ? this.sampled = null : (this.sampled = rY, this.gpuTimed = rY.headerWord(RY.B.GpuTimed), this.gpuUs = rY.headerWord(RY.B.GpuFrameUs))
      }
      logLinks(YY) {
        const rY = window.bloxdRenderDebug;
        for (const FY of this.links.failures(null === rY || void 0 === rY ? void 0 : rY.linkFailures)) this.event(FY);
        const DY = this.links.summaryLine(null === rY || void 0 === rY ? void 0 : rY.links, YY);
        null !== DY && VY(DY)
      }
      logRenderer() {
        var YY, rY;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const DY = window.bloxdRenderDebug,
          FY = (0, IY.q)(),
          AY = void 0 === (null === DY || void 0 === DY ? void 0 : DY.parallelCompile) ? "" : `; parallel compile ${DY.parallelCompile}`;
        VY(`renderer gl ${FY?`${FY.vendor} / ${FY.renderer}`:"(not read)"}; terrain fetch ${null!==(YY=null===DY||void 0===DY?void 0:DY.fetch)&&void 0!==YY?YY:"(not noted)"}${AY}`), VY(`renderer caps ${null!==(rY=null===DY||void 0===DY?void 0:DY.caps)&&void 0!==rY?rY:"(not noted)"}`)
      }
    }
    let lY = null;

    function TY(YY) {
      return (0, iY.e)(), lY ??= new SY(YY), lY
    }
  },
  4272: (YY, rY, DY) => {
    function FY(YY) {
      if (null === YY) return "backend: none picked (no renderer build)";
      const rY = YY.adapter ? `${YY.adapter.vendor}/${YY.adapter.architecture}` : "none";
      return `backend ${YY.backend}: reason ${YY.reason}, source ${YY.source}, adapter ${rY}`
    }
    DY.d(rY, {
      c: () => FY
    })
  },
  39835: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => RY,
      f: () => IY,
      j: () => OY
    });
    var FY = DY(39683),
      AY = DY(39693);

    function IY(YY) {
      if (YY.queries.drawCensus() < FY.ub.BYTES) return null;
      const rY = YY.memoryData(YY.scratch(), FY.ub.BYTES, 4, "the draw census");
      return null === rY ? null : {
        terrainOpaque: FY.ub.terrainOpaque(rY, 0),
        terrainTransparent: FY.ub.terrainTransparent(rY, 0),
        terrainPack: FY.ub.terrainPack(rY, 0),
        earthSky: FY.ub.earthSky(rY, 0),
        skyMeshes: FY.ub.skyMeshes(rY, 0),
        regular: FY.ub.regular(rY, 0),
        thin: FY.ub.thin(rY, 0),
        line: FY.ub.line(rY, 0),
        text: FY.ub.text(rY, 0),
        particles: FY.ub.particles(rY, 0)
      }
    }

    function RY(YY) {
      const {
        terrainOpaque: rY,
        terrainTransparent: DY,
        earthSky: FY,
        skyMeshes: AY,
        regular: IY,
        thin: RY,
        line: OY,
        text: gY,
        particles: aY
      } = YY;
      return rY + DY + FY + AY + IY + RY + OY + gY + aY
    }

    function OY() {
      const YY = (0, AY.g)();
      return !0 === (null === YY || void 0 === YY ? void 0 : YY.isCoreRunning) ? function(YY) {
        const rY = IY(YY);
        if (null === rY) return [];
        const {
          terrainOpaque: DY,
          terrainTransparent: FY,
          terrainPack: AY,
          earthSky: OY,
          skyMeshes: gY,
          regular: aY,
          thin: vY,
          line: uY,
          text: sY,
          particles: iY
        } = rY;
        return [{
          label: "Drawn",
          value: `${RY(rY)}`
        }, {
          label: "Terrain",
          value: `${DY} opaque / ${FY} transparent (${AY} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${aY} / ${vY}`
        }, {
          label: "Text / Lines",
          value: `${sY} / ${uY}`
        }, {
          label: "Sky / Particles",
          value: `${OY+gY} / ${iY}`
        }]
      }(YY.api) : []
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);