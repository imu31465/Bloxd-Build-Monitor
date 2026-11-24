export const id = 50;
export const ids = [50];
export const modules = {
  51124: (TT, UT, mT) => {
    mT.d(UT, {
      startRenderLite: () => JT
    });
    var WT = mT(2992),
      zT = mT(681),
      MT = mT(130),
      gT = mT(4904),
      nT = mT(41163),
      HT = mT(4895),
      kT = mT(40860),
      jT = mT(40724),
      lT = mT(40900),
      LT = mT(2929),
      pT = mT(4619),
      BT = mT(34126);
    const ZT = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class cT {
      constructor(TT) {
        this.label = void 0, this.noted = void 0, this.lines = 0, this.atMs = -1 / 0, this.label = TT
      }
      line(TT, UT) {
        const mT = this.lines < 10 ? 6e4 : 6e5;
        return void 0 === TT || TT === this.noted || UT - this.atMs < mT ? null : (this.noted = TT, this.lines++, this.atMs = UT, `${this.label}: ${TT}`)
      }
    }
    class vT {
      constructor() {
        this.failuresLogged = 0, this.heldLogged = !1, this.links = new cT("gl links"), this.programUse = new cT("gl programs")
      }
      failures(TT) {
        const UT = TT ? TT.split(" ") : [],
          mT = UT.slice(this.failuresLogged).map((TT => {
            var UT;
            const [mT, WT] = TT.split(":"), zT = null !== (UT = ZT.get(mT.slice(-1))) && void 0 !== UT ? UT : "";
            return `gl link failed: program row ${parseInt(mT)}${zT}, read ${WT} ms after issue`
          }));
        return this.failuresLogged = UT.length, mT
      }
      heldAtBackstop(TT) {
        return this.heldLogged || void 0 === TT ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${TT}`)
      }
      summaryLines(TT, UT, mT, WT) {
        const zT = this.links.line(TT, mT);
        return [zT && `${zT}; tab ${(0,BT.e)(WT)}`, this.programUse.line(UT, mT)].filter((TT => null !== TT))
      }
    }
    var fT = mT(4782);
    class qT {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(TT, UT, mT) {
        if ("none" !== UT && (this.frames++, "paced" === UT && this.paced++, "drawn" === UT)) {
          if (this.drawn++, this.renderUs += mT, this.renderUsMax = Math.max(this.renderUsMax, mT), null !== this.lastDrawnMs) {
            const UT = TT - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, UT), UT >= 50 && this.longGaps++
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

    function iT(TT) {
      return (TT / 1048576).toFixed(1)
    }
    class bT {
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

    function OT(TT) {
      (0, LT.m)("renderlite", TT)
    }
    class eT {
      constructor(TT) {
        this.frames = new qT, this.events = new bT, this.programLines = new vT, this.compileSummary = new cT("webgpu compiles"), this.hidden = new BT.b, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this.visibilityChanged = () => {
          const TT = performance.now();
          this.hidden.changed(TT), this.restartWindow(TT)
        }, this.Cl = () => {
          var TT, UT;
          const mT = this.session,
            zT = (0, jT.i)(),
            MT = performance.now();
          if (this.logLinks(MT), this.logGrid(), null === mT || mT.isStopped || !0 !== (null === zT || void 0 === zT ? void 0 : zT.isCoreRunning)) return void this.restartWindow(MT);
          if (document.hidden) return;
          if (MT - this.windowStart < 2500) return;
          if (! function(TT) {
              return TT < 12 || (TT - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const HT = mT.headerWord(gT.F.GpuTimed),
            lT = mT.headerWord(gT.F.GpuFrameUs),
            LT = this.sampled === mT ? {
              timed: HT - this.gpuTimed >>> 0,
              us: lT - this.gpuUs >>> 0
            } : null;
          this.sampled = mT, this.gpuTimed = HT, this.gpuUs = lT;
          const pT = null !== (TT = null === (UT = (0, kT.O)((0, WT.C)())) || void 0 === UT ? void 0 : UT.LWT()) && void 0 !== TT ? TT : 0;
          OT(function(TT, UT) {
            const mT = UT.windowMs / 1e3,
              WT = [`${Math.round(mT)}s: ${TT.drawn} drawn (${(TT.drawn/mT).toFixed(1)}/s), ${TT.paced} paced, ${TT.frames-TT.drawn-TT.paced} skipped`, `gap max ${Math.round(TT.gapMaxMs)} ms, ${TT.longGaps} over 50 ms`, `render cpu ${TT.drawn?(TT.renderUs/TT.drawn/1e3).toFixed(2):"-"} ms mean, ${(TT.renderUsMax/1e3).toFixed(1)} max`];
            null !== UT.gpu && WT.push(`gpu ${UT.gpu.timed?(UT.gpu.us/UT.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${UT.gpu.timed} timed`);
            const zT = UT.census;
            WT.push(null === zT ? "draws none yet" : `draws ${(0,nT.b)(zT)} (terrain ${zT.terrainOpaque}+${zT.terrainTransparent}, pack ${zT.terrainPack}, meshes ${zT.regular+zT.thin+zT.line+zT.text}, sky ${zT.earthSky+zT.skyMeshes}, particles ${zT.particles})`), null !== zT && zT.ringCopiesMax > 0 && WT.push(`frame rings ${zT.ringCopiesMax} copies max, ${zT.ringBusyWrites} busy writes so far`);
            const MT = null === UT.gpuBytesBefore ? "" : ` (${UT.gpuBytes>=UT.gpuBytesBefore?"+":"-"}${iT(Math.abs(UT.gpuBytes-UT.gpuBytesBefore))})`;
            return WT.push(`gpu mem ${iT(UT.gpuBytes)} MiB${MT}`), WT.push(`pending ${UT.pending}`, "terrain " + (UT.terrainDrawn ? "drawn" : "not drawn yet")), UT.eventsUnlogged > 0 && WT.push(`${UT.eventsUnlogged} events unlogged`), WT.join("; ")
          }(this.frames.take(), {
            windowMs: MT - this.windowStart,
            gpu: LT,
            census: (0, nT.d)(zT.api),
            gpuBytes: pT,
            gpuBytesBefore: this.gpuBytes,
            pending: mT.headerWord(gT.F.RenderPending),
            terrainDrawn: 0 !== (mT.headerWord(gT.F.LoadSteps) & gT.V.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = pT, this.windowStart = MT
        }, OT(`${(0,fT.e)(TT)}; client ${zT.r.client} (${zT.r.reason})`), setInterval(this.Cl, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(TT, UT, mT) {
        this.session = TT, this.frames.frame(UT, mT, "drawn" === mT ? TT.headerWord(gT.F.RenderUs) : 0)
      }
      coreErrors(TT) {
        for (const {
            code: WT,
            detail: zT
          }
          of TT) {
          var UT, mT;
          if (WT >= gT.l.RenderDeviceLost && WT <= gT.l.RenderSerialLinks) this.event(`render error ${(0,HT.pe)(WT)}${null!==(UT=null===(mT=(0,lT.e)(WT,zT))||void 0===mT?void 0:mT.words)&&void 0!==UT?UT:""} (detail ${zT})`)
        }
      }
      reload(TT, UT, mT, WT) {
        this.event(`render reload: ${TT?"webgpu":"gl"} ${mT}, losses ${UT}${void 0===WT?"":`: ${WT}`}`)
      }
      crashed(TT) {
        let {
          site: UT,
          error: mT,
          header: WT
        } = TT;
        const zT = null !== WT && 0 !== WT.lastError ? `, last error ${(0,HT.pe)(WT.lastError)} (detail ${WT.lastErrorDetail})` : "",
          MT = mT instanceof Error ? `${mT.name}: ${mT.message}` : null === mT || void 0 === mT ? "" : String(mT);
        this.event(`core stopped at ${UT}${zT}${MT&&`: ${MT}`}`)
      }
      event(TT) {
        const UT = this.events.admit(TT);
        null !== UT && OT(UT)
      }
      restartWindow(TT) {
        this.frames.restart(), this.windowStart = TT;
        const UT = this.session;
        null === UT || UT.isStopped ? this.sampled = null : (this.sampled = UT, this.gpuTimed = UT.headerWord(gT.F.GpuTimed), this.gpuUs = UT.headerWord(gT.F.GpuFrameUs))
      }
      logLinks(TT) {
        const UT = window.bloxdRenderDebug;
        for (const zT of this.programLines.failures(null === UT || void 0 === UT ? void 0 : UT.linkFailures)) this.event(zT);
        const mT = this.programLines.heldAtBackstop(null === UT || void 0 === UT ? void 0 : UT.heldAtBackstop);
        null !== mT && OT(mT);
        for (const zT of this.programLines.summaryLines(null === UT || void 0 === UT ? void 0 : UT.links, null === UT || void 0 === UT ? void 0 : UT.programUse, TT, this.hidden.totals(TT))) OT(zT);
        const WT = this.compileSummary.line(null === UT || void 0 === UT ? void 0 : UT.compiles, TT);
        null !== WT && OT(WT)
      }
      logGrid() {
        var TT;
        const UT = null === (TT = window.bloxdRenderDebug) || void 0 === TT ? void 0 : TT.gridFaces;
        this.gridLogged || void 0 === UT || (this.gridLogged = !0, OT(`gl1 grid ${UT}`))
      }
      logRenderer() {
        var TT, UT;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const mT = window.bloxdRenderDebug,
          WT = (0, MT.s)(),
          zT = void 0 === (null === mT || void 0 === mT ? void 0 : mT.parallelCompile) ? "" : `; parallel compile ${mT.parallelCompile}`;
        OT(`renderer gl ${WT?`${WT.vendor} / ${WT.renderer}`:"(not read)"}; terrain fetch ${null!==(TT=null===mT||void 0===mT?void 0:mT.fetch)&&void 0!==TT?TT:"(not noted)"}${zT}`), OT(`renderer caps ${null!==(UT=null===mT||void 0===mT?void 0:mT.caps)&&void 0!==UT?UT:"(not noted)"}`)
      }
    }
    let YT = null;

    function JT(TT) {
      return (0, pT.e)(), YT ??= new eT(TT), YT
    }
  },
  4782: (TT, UT, mT) => {
    function WT(TT) {
      if (null === TT) return "backend: none picked (no renderer build)";
      const UT = TT.adapter ? `${TT.adapter.vendor}/${TT.adapter.architecture}` : "none";
      return `backend ${TT.backend}: reason ${TT.reason}, source ${TT.source}, adapter ${UT}`
    }
    mT.d(UT, {
      e: () => WT
    })
  },
  34126: (TT, UT, mT) => {
    function WT(TT) {
      return `hidden ${TT.changes} changes, ${Math.round(TT.hiddenMs)} ms`
    }
    mT.d(UT, {
      b: () => zT,
      e: () => WT
    });
    class zT {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(TT) {
        this.changes++, document.hidden ? this.hiddenSinceMs = TT : this.hiddenSinceMs >= 0 && (this.hiddenMs += TT - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(TT) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? TT - this.hiddenSinceMs : 0)
        }
      }
    }
  },
  41163: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => gT,
      d: () => MT,
      f: () => nT
    });
    var WT = mT(40709),
      zT = mT(40724);

    function MT(TT) {
      if (TT.queries.drawCensus() < WT.Bb.BYTES) return null;
      const UT = TT.memoryData(TT.scratch(), WT.Bb.BYTES, 4, "the draw census");
      return null === UT ? null : {
        terrainOpaque: WT.Bb.terrainOpaque(UT, 0),
        terrainTransparent: WT.Bb.terrainTransparent(UT, 0),
        terrainPack: WT.Bb.terrainPack(UT, 0),
        earthSky: WT.Bb.earthSky(UT, 0),
        skyMeshes: WT.Bb.skyMeshes(UT, 0),
        regular: WT.Bb.regular(UT, 0),
        thin: WT.Bb.thin(UT, 0),
        line: WT.Bb.line(UT, 0),
        text: WT.Bb.text(UT, 0),
        particles: WT.Bb.particles(UT, 0),
        terrainParts: WT.Bb.terrainParts(UT, 0),
        terrainCompiling: WT.Bb.terrainCompiling(UT, 0),
        ringCopiesMax: WT.Bb.ringCopiesMax(UT, 0),
        ringBusyWrites: WT.Bb.ringBusyWrites(UT, 0)
      }
    }

    function gT(TT) {
      const {
        terrainOpaque: UT,
        terrainTransparent: mT,
        earthSky: WT,
        skyMeshes: zT,
        regular: MT,
        thin: gT,
        line: nT,
        text: HT,
        particles: kT
      } = TT;
      return UT + mT + WT + zT + MT + gT + nT + HT + kT
    }

    function nT() {
      const TT = (0, zT.i)();
      return !0 === (null === TT || void 0 === TT ? void 0 : TT.isCoreRunning) ? function(TT) {
        const UT = MT(TT);
        if (null === UT) return [];
        const {
          terrainOpaque: mT,
          terrainTransparent: WT,
          terrainPack: zT,
          earthSky: nT,
          skyMeshes: HT,
          regular: kT,
          thin: jT,
          line: lT,
          text: LT,
          particles: pT
        } = UT;
        return [{
          label: "Drawn",
          value: `${gT(UT)}`
        }, {
          label: "Terrain",
          value: `${mT} opaque / ${WT} transparent (${zT} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${kT} / ${jT}`
        }, {
          label: "Text / Lines",
          value: `${LT} / ${lT}`
        }, {
          label: "Sky / Particles",
          value: `${nT+HT} / ${pT}`
        }]
      }(TT.api) : []
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);