export const id = 57;
export const ids = [57];
export const modules = {
  54558: (HH, BH, LH) => {
    LH.d(BH, {
      startRenderLite: () => bH
    });
    var AH = LH(3168),
      rH = LH(642),
      SH = LH(114),
      hH = LH(5268),
      tH = LH(42343),
      zH = LH(5265),
      CH = LH(42034),
      EH = LH(41911),
      XH = LH(42082),
      GH = LH(3105),
      YH = LH(4921),
      uH = LH(34837);
    const QH = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class WH {
      constructor(HH) {
        this.label = void 0, this.noted = void 0, this.lines = 0, this.atMs = -1 / 0, this.label = HH
      }
      line(HH, BH) {
        const LH = this.lines < 10 ? 6e4 : 6e5;
        return void 0 === HH || HH === this.noted || BH - this.atMs < LH ? null : (this.noted = HH, this.lines++, this.atMs = BH, `${this.label}: ${HH}`)
      }
    }
    class MH {
      constructor() {
        this.failuresLogged = 0, this.heldLogged = !1, this.links = new WH("gl links"), this.programUse = new WH("gl programs")
      }
      failures(HH) {
        const BH = HH ? HH.split(" ") : [],
          LH = BH.slice(this.failuresLogged).map((HH => {
            var BH;
            const [LH, AH] = HH.split(":"), rH = null !== (BH = QH.get(LH.slice(-1))) && void 0 !== BH ? BH : "";
            return `gl link failed: program row ${parseInt(LH)}${rH}, read ${AH} ms after issue`
          }));
        return this.failuresLogged = BH.length, LH
      }
      heldAtBackstop(HH) {
        return this.heldLogged || void 0 === HH ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${HH}`)
      }
      summaryLines(HH, BH, LH, AH) {
        const rH = this.links.line(HH, LH);
        return [rH && `${rH}; tab ${(0,uH.c)(AH)}`, this.programUse.line(BH, LH)].filter((HH => null !== HH))
      }
    }
    var xH = LH(5150);
    class vH {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(HH, BH, LH) {
        if ("none" !== BH && (this.frames++, "paced" === BH && this.paced++, "drawn" === BH)) {
          if (this.drawn++, this.renderUs += LH, this.renderUsMax = Math.max(this.renderUsMax, LH), null !== this.lastDrawnMs) {
            const BH = HH - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, BH), BH >= 50 && this.longGaps++
          }
          this.lastDrawnMs = HH
        }
      }
      restart() {
        this.take(), this.lastDrawnMs = null
      }
      take() {
        const HH = {
          frames: this.frames,
          drawn: this.drawn,
          paced: this.paced,
          gapMaxMs: this.gapMaxMs,
          longGaps: this.longGaps,
          renderUs: this.renderUs,
          renderUsMax: this.renderUsMax
        };
        return this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, HH
      }
    }

    function PH(HH) {
      return (HH / 1048576).toFixed(1)
    }
    class TH {
      constructor() {
        this.logged = 0, this.seen = new Set, this.unlogged = 0
      }
      admit(HH) {
        return this.logged >= 20 || this.seen.has(HH) ? (this.unlogged++, null) : (this.seen.add(HH), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${HH}` : HH)
      }
      takeUnlogged() {
        const HH = this.unlogged;
        return this.unlogged = 0, HH
      }
    }

    function UH(HH) {
      (0, GH.j)("renderlite", HH)
    }
    class VH {
      constructor(HH) {
        this.frames = new vH, this.events = new TH, this.programLines = new MH, this.compileSummary = new WH("webgpu compiles"), this.hidden = new uH.b, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this.visibilityChanged = () => {
          const HH = performance.now();
          this.hidden.changed(HH), this.restartWindow(HH)
        }, this.IX = () => {
          var HH, BH;
          const LH = this.session,
            rH = (0, EH.i)(),
            SH = performance.now();
          if (this.logLinks(SH), this.logGrid(), null === LH || LH.isStopped || !0 !== (null === rH || void 0 === rH ? void 0 : rH.isCoreRunning)) return void this.restartWindow(SH);
          if (document.hidden) return;
          if (SH - this.windowStart < 2500) return;
          if (! function(HH) {
              return HH < 12 || (HH - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const zH = LH.headerWord(hH.I.GpuTimed),
            XH = LH.headerWord(hH.I.GpuFrameUs),
            GH = this.sampled === LH ? {
              timed: zH - this.gpuTimed >>> 0,
              us: XH - this.gpuUs >>> 0
            } : null;
          this.sampled = LH, this.gpuTimed = zH, this.gpuUs = XH;
          const YH = null !== (HH = null === (BH = (0, CH.M)((0, AH.D)())) || void 0 === BH ? void 0 : BH.urH()) && void 0 !== HH ? HH : 0;
          UH(function(HH, BH) {
            const LH = BH.windowMs / 1e3,
              AH = [`${Math.round(LH)}s: ${HH.drawn} drawn (${(HH.drawn/LH).toFixed(1)}/s), ${HH.paced} paced, ${HH.frames-HH.drawn-HH.paced} skipped`, `gap max ${Math.round(HH.gapMaxMs)} ms, ${HH.longGaps} over 50 ms`, `render cpu ${HH.drawn?(HH.renderUs/HH.drawn/1e3).toFixed(2):"-"} ms mean, ${(HH.renderUsMax/1e3).toFixed(1)} max`];
            null !== BH.gpu && AH.push(`gpu ${BH.gpu.timed?(BH.gpu.us/BH.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${BH.gpu.timed} timed`);
            const rH = BH.census;
            AH.push(null === rH ? "draws none yet" : `draws ${(0,tH.d)(rH)} (terrain ${rH.terrainOpaque}+${rH.terrainTransparent}, pack ${rH.terrainPack}, meshes ${rH.regular+rH.thin+rH.line+rH.text}, sky ${rH.earthSky+rH.skyMeshes}, particles ${rH.particles})`), null !== rH && rH.ringCopiesMax > 0 && AH.push(`frame rings ${rH.ringCopiesMax} copies max, ${rH.ringBusyWrites} busy writes so far`);
            const SH = null === BH.gpuBytesBefore ? "" : ` (${BH.gpuBytes>=BH.gpuBytesBefore?"+":"-"}${PH(Math.abs(BH.gpuBytes-BH.gpuBytesBefore))})`;
            return AH.push(`gpu mem ${PH(BH.gpuBytes)} MiB${SH}`), AH.push(`pending ${BH.pending}`, "terrain " + (BH.terrainDrawn ? "drawn" : "not drawn yet")), BH.eventsUnlogged > 0 && AH.push(`${BH.eventsUnlogged} events unlogged`), AH.join("; ")
          }(this.frames.take(), {
            windowMs: SH - this.windowStart,
            gpu: GH,
            census: (0, tH.h)(rH.api),
            gpuBytes: YH,
            gpuBytesBefore: this.gpuBytes,
            pending: LH.headerWord(hH.I.RenderPending),
            terrainDrawn: 0 !== (LH.headerWord(hH.I.LoadSteps) & hH.$.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = YH, this.windowStart = SH
        }, UH(`${(0,xH.e)(HH)}; client ${rH.A.client} (${rH.A.reason})`), setInterval(this.IX, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(HH, BH, LH) {
        this.session = HH, this.frames.frame(BH, LH, "drawn" === LH ? HH.headerWord(hH.I.RenderUs) : 0)
      }
      coreErrors(HH) {
        for (const {
            code: AH,
            detail: rH
          }
          of HH) {
          var BH, LH;
          if (AH >= hH.p.RenderDeviceLost && AH <= hH.p.RenderSerialLinks) this.event(`render error ${(0,zH.Zd)(AH)}${null!==(BH=null===(LH=(0,XH.d)(AH,rH))||void 0===LH?void 0:LH.words)&&void 0!==BH?BH:""} (detail ${rH})`)
        }
      }
      reload(HH, BH, LH, AH) {
        this.event(`render reload: ${HH?"webgpu":"gl"} ${LH}, losses ${BH}${void 0===AH?"":`: ${AH}`}`)
      }
      glContextLost(HH, BH, LH) {
        const AH = null === BH || void 0 === BH ? void 0 : BH.split(" "),
          rH = 3 === (null === AH || void 0 === AH ? void 0 : AH.length) ? `vertex arrays ${AH[0]}, keyed draws peak ${AH[1]} (sweep floor ${AH[2]})` : "vertex arrays unnoted";
        this.event(`gl context lost ${HH?"in game":"at home"}: ${rH}, render distance ${null!==LH&&void 0!==LH?LH:"none"}`)
      }
      crashed(HH) {
        let {
          site: BH,
          error: LH,
          header: AH
        } = HH;
        const rH = null !== AH && 0 !== AH.lastError ? `, last error ${(0,zH.Zd)(AH.lastError)} (detail ${AH.lastErrorDetail})` : "",
          SH = LH instanceof Error ? `${LH.name}: ${LH.message}` : null === LH || void 0 === LH ? "" : String(LH);
        this.event(`core stopped at ${BH}${rH}${SH&&`: ${SH}`}`)
      }
      event(HH) {
        const BH = this.events.admit(HH);
        null !== BH && UH(BH)
      }
      restartWindow(HH) {
        this.frames.restart(), this.windowStart = HH;
        const BH = this.session;
        null === BH || BH.isStopped ? this.sampled = null : (this.sampled = BH, this.gpuTimed = BH.headerWord(hH.I.GpuTimed), this.gpuUs = BH.headerWord(hH.I.GpuFrameUs))
      }
      logLinks(HH) {
        const BH = window.bloxdRenderDebug;
        for (const rH of this.programLines.failures(null === BH || void 0 === BH ? void 0 : BH.linkFailures)) this.event(rH);
        const LH = this.programLines.heldAtBackstop(null === BH || void 0 === BH ? void 0 : BH.heldAtBackstop);
        null !== LH && UH(LH);
        for (const rH of this.programLines.summaryLines(null === BH || void 0 === BH ? void 0 : BH.links, null === BH || void 0 === BH ? void 0 : BH.programUse, HH, this.hidden.totals(HH))) UH(rH);
        const AH = this.compileSummary.line(null === BH || void 0 === BH ? void 0 : BH.compiles, HH);
        null !== AH && UH(AH)
      }
      logGrid() {
        var HH;
        const BH = null === (HH = window.bloxdRenderDebug) || void 0 === HH ? void 0 : HH.gridFaces;
        this.gridLogged || void 0 === BH || (this.gridLogged = !0, UH(`gl1 grid ${BH}`))
      }
      logRenderer() {
        var HH, BH;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const LH = window.bloxdRenderDebug,
          AH = (0, SH.z)(),
          rH = void 0 === (null === LH || void 0 === LH ? void 0 : LH.parallelCompile) ? "" : `; parallel compile ${LH.parallelCompile}`;
        UH(`renderer gl ${AH?`${AH.vendor} / ${AH.renderer}`:"(not read)"}; terrain fetch ${null!==(HH=null===LH||void 0===LH?void 0:LH.fetch)&&void 0!==HH?HH:"(not noted)"}${rH}`), UH(`renderer caps ${null!==(BH=null===LH||void 0===LH?void 0:LH.caps)&&void 0!==BH?BH:"(not noted)"}`)
      }
    }
    let OH = null;

    function bH(HH) {
      return (0, YH.g)(), OH ??= new VH(HH), OH
    }
  },
  5150: (HH, BH, LH) => {
    function AH(HH) {
      if (null === HH) return "backend: none picked (no renderer build)";
      const BH = HH.adapter ? `${HH.adapter.vendor}/${HH.adapter.architecture}` : "none";
      return `backend ${HH.backend}: reason ${HH.reason}, source ${HH.source}, adapter ${BH}`
    }
    LH.d(BH, {
      e: () => AH
    })
  },
  34837: (HH, BH, LH) => {
    function AH(HH) {
      return `hidden ${HH.changes} changes, ${Math.round(HH.hiddenMs)} ms`
    }
    LH.d(BH, {
      b: () => rH,
      c: () => AH
    });
    class rH {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(HH) {
        this.changes++, document.hidden ? this.hiddenSinceMs = HH : this.hiddenSinceMs >= 0 && (this.hiddenMs += HH - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(HH) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? HH - this.hiddenSinceMs : 0)
        }
      }
    }
  },
  42343: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH,
      h: () => SH,
      j: () => tH
    });
    var AH = LH(41898),
      rH = LH(41911);

    function SH(HH) {
      if (HH.queries.drawCensus() < AH.Gb.BYTES) return null;
      const BH = HH.memoryData(HH.scratch(), AH.Gb.BYTES, 4, "the draw census");
      return null === BH ? null : {
        terrainOpaque: AH.Gb.terrainOpaque(BH, 0),
        terrainTransparent: AH.Gb.terrainTransparent(BH, 0),
        terrainPack: AH.Gb.terrainPack(BH, 0),
        earthSky: AH.Gb.earthSky(BH, 0),
        skyMeshes: AH.Gb.skyMeshes(BH, 0),
        regular: AH.Gb.regular(BH, 0),
        thin: AH.Gb.thin(BH, 0),
        line: AH.Gb.line(BH, 0),
        text: AH.Gb.text(BH, 0),
        particles: AH.Gb.particles(BH, 0),
        terrainParts: AH.Gb.terrainParts(BH, 0),
        terrainCompiling: AH.Gb.terrainCompiling(BH, 0),
        ringCopiesMax: AH.Gb.ringCopiesMax(BH, 0),
        ringBusyWrites: AH.Gb.ringBusyWrites(BH, 0)
      }
    }

    function hH(HH) {
      const {
        terrainOpaque: BH,
        terrainTransparent: LH,
        earthSky: AH,
        skyMeshes: rH,
        regular: SH,
        thin: hH,
        line: tH,
        text: zH,
        particles: CH
      } = HH;
      return BH + LH + AH + rH + SH + hH + tH + zH + CH
    }

    function tH() {
      const HH = (0, rH.i)();
      return !0 === (null === HH || void 0 === HH ? void 0 : HH.isCoreRunning) ? function(HH) {
        const BH = SH(HH);
        if (null === BH) return [];
        const {
          terrainOpaque: LH,
          terrainTransparent: AH,
          terrainPack: rH,
          earthSky: tH,
          skyMeshes: zH,
          regular: CH,
          thin: EH,
          line: XH,
          text: GH,
          particles: YH
        } = BH;
        return [{
          label: "Drawn",
          value: `${hH(BH)}`
        }, {
          label: "Terrain",
          value: `${LH} opaque / ${AH} transparent (${rH} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${CH} / ${EH}`
        }, {
          label: "Text / Lines",
          value: `${GH} / ${XH}`
        }, {
          label: "Sky / Particles",
          value: `${tH+zH} / ${YH}`
        }]
      }(HH.api) : []
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);