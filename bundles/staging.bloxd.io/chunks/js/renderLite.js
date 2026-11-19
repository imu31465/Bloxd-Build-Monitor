export const id = 48;
export const ids = [48];
export const modules = {
  42123: (TT, oT, IT) => {
    IT.d(oT, {
      startRenderLite: () => eT
    });
    var iT = IT(3276),
      zT = IT(637),
      kT = IT(134),
      WT = IT(4285),
      XT = IT(39513),
      BT = IT(4276),
      FT = IT(39567),
      ST = IT(39371),
      DT = IT(39749),
      LT = IT(2541),
      xT = IT(4030);
    const cT = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class KT {
      constructor() {
        this.failuresLogged = 0, this.summary = void 0, this.summaries = 0, this.summaryAtMs = -1 / 0
      }
      failures(TT) {
        const oT = TT ? TT.split(" ") : [],
          IT = oT.slice(this.failuresLogged).map((TT => {
            var oT;
            const [IT, iT] = TT.split(":"), zT = null !== (oT = cT.get(IT.slice(-1))) && void 0 !== oT ? oT : "";
            return `gl link failed: program row ${parseInt(IT)}${zT}, read ${iT} ms after issue`
          }));
        return this.failuresLogged = oT.length, IT
      }
      summaryLine(TT, oT) {
        const IT = this.summaries < 10 ? 6e4 : 6e5;
        return void 0 === TT || TT === this.summary || oT - this.summaryAtMs < IT ? null : (this.summary = TT, this.summaries++, this.summaryAtMs = oT, `gl links: ${TT}`)
      }
    }
    var MT = IT(4195);
    class rT {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(TT, oT, IT) {
        if ("none" !== oT && (this.frames++, "paced" === oT && this.paced++, "drawn" === oT)) {
          if (this.drawn++, this.renderUs += IT, this.renderUsMax = Math.max(this.renderUsMax, IT), null !== this.lastDrawnMs) {
            const oT = TT - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, oT), oT >= 50 && this.longGaps++
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

    function AT(TT) {
      return (TT / 1048576).toFixed(1)
    }
    class gT {
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

    function hT(TT) {
      (0, LT.l)("renderlite", function(TT) {
        let oT = 0,
          IT = 0,
          iT = 0;
        for (const kT of TT) {
          var zT;
          const WT = null !== (zT = kT.codePointAt(0)) && void 0 !== zT ? zT : 0;
          if (oT += WT < 128 ? 1 : WT < 2048 ? 2 : WT < 65536 ? 3 : 4, oT > 375) return `${TT.slice(0,iT)}...`;
          IT += kT.length, oT <= 372 && (iT = IT)
        }
        return TT
      }(TT))
    }
    class wT {
      constructor(TT) {
        this.frames = new rT, this.events = new gT, this.links = new KT, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.visibilityChanged = () => {
          this.restartWindow(performance.now())
        }, this.dD = () => {
          var TT, oT;
          const IT = this.session,
            zT = (0, ST.i)(),
            kT = performance.now();
          if (this.logLinks(kT), null === IT || IT.isStopped || !0 !== (null === zT || void 0 === zT ? void 0 : zT.isCoreRunning)) return void this.restartWindow(kT);
          if (document.hidden) return;
          if (kT - this.windowStart < 2500) return;
          if (! function(TT) {
              return TT < 12 || (TT - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const BT = IT.headerWord(WT.A.GpuTimed),
            DT = IT.headerWord(WT.A.GpuFrameUs),
            LT = this.sampled === IT ? {
              timed: BT - this.gpuTimed >>> 0,
              us: DT - this.gpuUs >>> 0
            } : null;
          this.sampled = IT, this.gpuTimed = BT, this.gpuUs = DT;
          const xT = null !== (TT = null === (oT = (0, FT.I)((0, iT.z)())) || void 0 === oT ? void 0 : oT.nIT()) && void 0 !== TT ? TT : 0;
          hT(function(TT, oT) {
            const IT = oT.windowMs / 1e3,
              iT = [`${Math.round(IT)}s: ${TT.drawn} drawn (${(TT.drawn/IT).toFixed(1)}/s), ${TT.paced} paced, ${TT.frames-TT.drawn-TT.paced} skipped`, `gap max ${Math.round(TT.gapMaxMs)} ms, ${TT.longGaps} over 50 ms`, `render cpu ${TT.drawn?(TT.renderUs/TT.drawn/1e3).toFixed(2):"-"} ms mean, ${(TT.renderUsMax/1e3).toFixed(1)} max`];
            null !== oT.gpu && iT.push(`gpu ${oT.gpu.timed?(oT.gpu.us/oT.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${oT.gpu.timed} timed`);
            const zT = oT.census;
            iT.push(null === zT ? "draws none yet" : `draws ${(0,XT.c)(zT)} (terrain ${zT.terrainOpaque}+${zT.terrainTransparent}, pack ${zT.terrainPack}, meshes ${zT.regular+zT.thin+zT.line+zT.text}, sky ${zT.earthSky+zT.skyMeshes}, particles ${zT.particles})`);
            const kT = null === oT.gpuBytesBefore ? "" : ` (${oT.gpuBytes>=oT.gpuBytesBefore?"+":"-"}${AT(Math.abs(oT.gpuBytes-oT.gpuBytesBefore))})`;
            return iT.push(`gpu mem ${AT(oT.gpuBytes)} MiB${kT}`), iT.push(`pending ${oT.pending}`, "terrain " + (oT.terrainDrawn ? "drawn" : "not drawn yet")), oT.eventsUnlogged > 0 && iT.push(`${oT.eventsUnlogged} events unlogged`), iT.join("; ")
          }(this.frames.take(), {
            windowMs: kT - this.windowStart,
            gpu: LT,
            census: (0, XT.g)(zT.api),
            gpuBytes: xT,
            gpuBytesBefore: this.gpuBytes,
            pending: IT.headerWord(WT.A.RenderPending),
            terrainDrawn: 0 !== (IT.headerWord(WT.A.LoadSteps) & WT.J.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = xT, this.windowStart = kT
        }, hT(`${(0,MT.c)(TT)}; client ${zT.n.client} (${zT.n.reason})`), setInterval(this.dD, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(TT, oT, IT) {
        this.session = TT, this.frames.frame(oT, IT, "drawn" === IT ? TT.headerWord(WT.A.RenderUs) : 0)
      }
      coreErrors(TT) {
        for (const {
            code: iT,
            detail: zT
          }
          of TT) {
          var oT, IT;
          if (iT >= WT.d.RenderDeviceLost && iT <= WT.d.RenderSerialLinks) this.event(`render error ${(0,BT.he)(iT)}${null!==(oT=null===(IT=(0,DT.c)(iT,zT))||void 0===IT?void 0:IT.words)&&void 0!==oT?oT:""} (detail ${zT})`)
        }
      }
      reload(TT, oT, IT, iT) {
        this.event(`render reload: ${TT?"webgpu":"gl"} ${IT}, losses ${oT}${void 0===iT?"":`: ${iT}`}`)
      }
      crashed(TT) {
        let {
          site: oT,
          error: IT,
          header: iT
        } = TT;
        const zT = null !== iT && 0 !== iT.lastError ? `, last error ${(0,BT.he)(iT.lastError)} (detail ${iT.lastErrorDetail})` : "",
          kT = IT instanceof Error ? `${IT.name}: ${IT.message}` : null === IT || void 0 === IT ? "" : String(IT);
        this.event(`core stopped at ${oT}${zT}${kT&&`: ${kT}`}`)
      }
      event(TT) {
        const oT = this.events.admit(TT);
        null !== oT && hT(oT)
      }
      restartWindow(TT) {
        this.frames.restart(), this.windowStart = TT;
        const oT = this.session;
        null === oT || oT.isStopped ? this.sampled = null : (this.sampled = oT, this.gpuTimed = oT.headerWord(WT.A.GpuTimed), this.gpuUs = oT.headerWord(WT.A.GpuFrameUs))
      }
      logLinks(TT) {
        const oT = window.bloxdRenderDebug;
        for (const iT of this.links.failures(null === oT || void 0 === oT ? void 0 : oT.linkFailures)) this.event(iT);
        const IT = this.links.summaryLine(null === oT || void 0 === oT ? void 0 : oT.links, TT);
        null !== IT && hT(IT)
      }
      logRenderer() {
        var TT, oT;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const IT = window.bloxdRenderDebug,
          iT = (0, kT.m)(),
          zT = void 0 === (null === IT || void 0 === IT ? void 0 : IT.parallelCompile) ? "" : `; parallel compile ${IT.parallelCompile}`;
        hT(`renderer gl ${iT?`${iT.vendor} / ${iT.renderer}`:"(not read)"}; terrain fetch ${null!==(TT=null===IT||void 0===IT?void 0:IT.fetch)&&void 0!==TT?TT:"(not noted)"}${zT}`), hT(`renderer caps ${null!==(oT=null===IT||void 0===IT?void 0:IT.caps)&&void 0!==oT?oT:"(not noted)"}`)
      }
    }
    let mT = null;

    function eT(TT) {
      return (0, xT.g)(), mT ??= new wT(TT), mT
    }
  },
  4195: (TT, oT, IT) => {
    function iT(TT) {
      if (null === TT) return "backend: none picked (no renderer build)";
      const oT = TT.adapter ? `${TT.adapter.vendor}/${TT.adapter.architecture}` : "none";
      return `backend ${TT.backend}: reason ${TT.reason}, source ${TT.source}, adapter ${oT}`
    }
    IT.d(oT, {
      c: () => iT
    })
  },
  39513: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => WT,
      g: () => kT,
      h: () => XT
    });
    var iT = IT(39354),
      zT = IT(39371);

    function kT(TT) {
      if (TT.queries.drawCensus() < iT.zb.BYTES) return null;
      const oT = TT.memoryData(TT.scratch(), iT.zb.BYTES, 4, "the draw census");
      return null === oT ? null : {
        terrainOpaque: iT.zb.terrainOpaque(oT, 0),
        terrainTransparent: iT.zb.terrainTransparent(oT, 0),
        terrainPack: iT.zb.terrainPack(oT, 0),
        earthSky: iT.zb.earthSky(oT, 0),
        skyMeshes: iT.zb.skyMeshes(oT, 0),
        regular: iT.zb.regular(oT, 0),
        thin: iT.zb.thin(oT, 0),
        line: iT.zb.line(oT, 0),
        text: iT.zb.text(oT, 0),
        particles: iT.zb.particles(oT, 0)
      }
    }

    function WT(TT) {
      const {
        terrainOpaque: oT,
        terrainTransparent: IT,
        earthSky: iT,
        skyMeshes: zT,
        regular: kT,
        thin: WT,
        line: XT,
        text: BT,
        particles: FT
      } = TT;
      return oT + IT + iT + zT + kT + WT + XT + BT + FT
    }

    function XT() {
      const TT = (0, zT.i)();
      return !0 === (null === TT || void 0 === TT ? void 0 : TT.isCoreRunning) ? function(TT) {
        const oT = kT(TT);
        if (null === oT) return [];
        const {
          terrainOpaque: IT,
          terrainTransparent: iT,
          terrainPack: zT,
          earthSky: XT,
          skyMeshes: BT,
          regular: FT,
          thin: ST,
          line: DT,
          text: LT,
          particles: xT
        } = oT;
        return [{
          label: "Drawn",
          value: `${WT(oT)}`
        }, {
          label: "Terrain",
          value: `${IT} opaque / ${iT} transparent (${zT} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${FT} / ${ST}`
        }, {
          label: "Text / Lines",
          value: `${LT} / ${DT}`
        }, {
          label: "Sky / Particles",
          value: `${XT+BT} / ${xT}`
        }]
      }(TT.api) : []
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);