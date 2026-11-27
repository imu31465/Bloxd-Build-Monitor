export const id = 57;
export const ids = [57];
export const modules = {
  54272: (ee, ie, He) => {
    He.d(ie, {
      startRenderLite: () => te
    });
    var ye = He(3094),
      be = He(645),
      Me = He(123),
      Ke = He(5279),
      Ue = He(42116),
      Fe = He(5271),
      Je = He(41827),
      oe = He(41704),
      Re = He(41878),
      ke = He(3037),
      qe = He(4896),
      fe = He(34736);
    const Te = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class pe {
      constructor(ee) {
        this.label = void 0, this.noted = void 0, this.lines = 0, this.atMs = -1 / 0, this.label = ee
      }
      line(ee, ie) {
        const He = this.lines < 10 ? 6e4 : 6e5;
        return void 0 === ee || ee === this.noted || ie - this.atMs < He ? null : (this.noted = ee, this.lines++, this.atMs = ie, `${this.label}: ${ee}`)
      }
    }
    class Xe {
      constructor() {
        this.failuresLogged = 0, this.heldLogged = !1, this.links = new pe("gl links"), this.programUse = new pe("gl programs")
      }
      failures(ee) {
        const ie = ee ? ee.split(" ") : [],
          He = ie.slice(this.failuresLogged).map((ee => {
            var ie;
            const [He, ye] = ee.split(":"), be = null !== (ie = Te.get(He.slice(-1))) && void 0 !== ie ? ie : "";
            return `gl link failed: program row ${parseInt(He)}${be}, read ${ye} ms after issue`
          }));
        return this.failuresLogged = ie.length, He
      }
      heldAtBackstop(ee) {
        return this.heldLogged || void 0 === ee ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${ee}`)
      }
      summaryLines(ee, ie, He, ye) {
        const be = this.links.line(ee, He);
        return [be && `${be}; tab ${(0,fe.e)(ye)}`, this.programUse.line(ie, He)].filter((ee => null !== ee))
      }
    }
    var ze = He(5160);
    class Be {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(ee, ie, He) {
        if ("none" !== ie && (this.frames++, "paced" === ie && this.paced++, "drawn" === ie)) {
          if (this.drawn++, this.renderUs += He, this.renderUsMax = Math.max(this.renderUsMax, He), null !== this.lastDrawnMs) {
            const ie = ee - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, ie), ie >= 50 && this.longGaps++
          }
          this.lastDrawnMs = ee
        }
      }
      restart() {
        this.take(), this.lastDrawnMs = null
      }
      take() {
        const ee = {
          frames: this.frames,
          drawn: this.drawn,
          paced: this.paced,
          gapMaxMs: this.gapMaxMs,
          longGaps: this.longGaps,
          renderUs: this.renderUs,
          renderUsMax: this.renderUsMax
        };
        return this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, ee
      }
    }

    function Ee(ee) {
      return (ee / 1048576).toFixed(1)
    }
    class ge {
      constructor() {
        this.logged = 0, this.seen = new Set, this.unlogged = 0
      }
      admit(ee) {
        return this.logged >= 20 || this.seen.has(ee) ? (this.unlogged++, null) : (this.seen.add(ee), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${ee}` : ee)
      }
      takeUnlogged() {
        const ee = this.unlogged;
        return this.unlogged = 0, ee
      }
    }

    function Oe(ee) {
      (0, ke.m)("renderlite", ee)
    }
    class de {
      constructor(ee) {
        this.frames = new Be, this.events = new ge, this.programLines = new Xe, this.compileSummary = new pe("webgpu compiles"), this.hidden = new fe.c, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this.visibilityChanged = () => {
          const ee = performance.now();
          this.hidden.changed(ee), this.restartWindow(ee)
        }, this.YR = () => {
          var ee, ie;
          const He = this.session,
            be = (0, oe.h)(),
            Me = performance.now();
          if (this.logLinks(Me), this.logGrid(), null === He || He.isStopped || !0 !== (null === be || void 0 === be ? void 0 : be.isCoreRunning)) return void this.restartWindow(Me);
          if (document.hidden) return;
          if (Me - this.windowStart < 2500) return;
          if (! function(ee) {
              return ee < 12 || (ee - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const Fe = He.headerWord(Ke.F.GpuTimed),
            Re = He.headerWord(Ke.F.GpuFrameUs),
            ke = this.sampled === He ? {
              timed: Fe - this.gpuTimed >>> 0,
              us: Re - this.gpuUs >>> 0
            } : null;
          this.sampled = He, this.gpuTimed = Fe, this.gpuUs = Re;
          const qe = null !== (ee = null === (ie = (0, Je.Q)((0, ye.F)())) || void 0 === ie ? void 0 : ie.hbe()) && void 0 !== ee ? ee : 0;
          Oe(function(ee, ie) {
            const He = ie.windowMs / 1e3,
              ye = [`${Math.round(He)}s: ${ee.drawn} drawn (${(ee.drawn/He).toFixed(1)}/s), ${ee.paced} paced, ${ee.frames-ee.drawn-ee.paced} skipped`, `gap max ${Math.round(ee.gapMaxMs)} ms, ${ee.longGaps} over 50 ms`, `render cpu ${ee.drawn?(ee.renderUs/ee.drawn/1e3).toFixed(2):"-"} ms mean, ${(ee.renderUsMax/1e3).toFixed(1)} max`];
            null !== ie.gpu && ye.push(`gpu ${ie.gpu.timed?(ie.gpu.us/ie.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${ie.gpu.timed} timed`);
            const be = ie.census;
            ye.push(null === be ? "draws none yet" : `draws ${(0,Ue.c)(be)} (terrain ${be.terrainOpaque}+${be.terrainTransparent}, pack ${be.terrainPack}, meshes ${be.regular+be.thin+be.line+be.text}, sky ${be.earthSky+be.skyMeshes}, particles ${be.particles})`), null !== be && be.ringCopiesMax > 0 && ye.push(`frame rings ${be.ringCopiesMax} copies max, ${be.ringBusyWrites} busy writes so far`);
            const Me = null === ie.gpuBytesBefore ? "" : ` (${ie.gpuBytes>=ie.gpuBytesBefore?"+":"-"}${Ee(Math.abs(ie.gpuBytes-ie.gpuBytesBefore))})`;
            return ye.push(`gpu mem ${Ee(ie.gpuBytes)} MiB${Me}`), ye.push(`pending ${ie.pending}`, "terrain " + (ie.terrainDrawn ? "drawn" : "not drawn yet")), ie.eventsUnlogged > 0 && ye.push(`${ie.eventsUnlogged} events unlogged`), ye.join("; ")
          }(this.frames.take(), {
            windowMs: Me - this.windowStart,
            gpu: ke,
            census: (0, Ue.d)(be.api),
            gpuBytes: qe,
            gpuBytesBefore: this.gpuBytes,
            pending: He.headerWord(Ke.F.RenderPending),
            terrainDrawn: 0 !== (He.headerWord(Ke.F.LoadSteps) & Ke.U.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = qe, this.windowStart = Me
        }, Oe(`${(0,ze.e)(ee)}; client ${be.y.client} (${be.y.reason})`), setInterval(this.YR, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(ee, ie, He) {
        this.session = ee, this.frames.frame(ie, He, "drawn" === He ? ee.headerWord(Ke.F.RenderUs) : 0)
      }
      coreErrors(ee) {
        for (const {
            code: ye,
            detail: be
          }
          of ee) {
          var ie, He;
          if (ye >= Ke.o.RenderDeviceLost && ye <= Ke.o.RenderSerialLinks) this.event(`render error ${(0,Fe.Xd)(ye)}${null!==(ie=null===(He=(0,Re.d)(ye,be))||void 0===He?void 0:He.words)&&void 0!==ie?ie:""} (detail ${be})`)
        }
      }
      reload(ee, ie, He, ye) {
        this.event(`render reload: ${ee?"webgpu":"gl"} ${He}, losses ${ie}${void 0===ye?"":`: ${ye}`}`)
      }
      glContextLost(ee, ie, He) {
        const ye = null === ie || void 0 === ie ? void 0 : ie.split(" "),
          be = 3 === (null === ye || void 0 === ye ? void 0 : ye.length) ? `vertex arrays ${ye[0]}, keyed draws peak ${ye[1]} (sweep floor ${ye[2]})` : "vertex arrays unnoted";
        this.event(`gl context lost ${ee?"in game":"at home"}: ${be}, render distance ${null!==He&&void 0!==He?He:"none"}`)
      }
      crashed(ee) {
        let {
          site: ie,
          error: He,
          header: ye
        } = ee;
        const be = null !== ye && 0 !== ye.lastError ? `, last error ${(0,Fe.Xd)(ye.lastError)} (detail ${ye.lastErrorDetail})` : "",
          Me = He instanceof Error ? `${He.name}: ${He.message}` : null === He || void 0 === He ? "" : String(He);
        this.event(`core stopped at ${ie}${be}${Me&&`: ${Me}`}`)
      }
      event(ee) {
        const ie = this.events.admit(ee);
        null !== ie && Oe(ie)
      }
      restartWindow(ee) {
        this.frames.restart(), this.windowStart = ee;
        const ie = this.session;
        null === ie || ie.isStopped ? this.sampled = null : (this.sampled = ie, this.gpuTimed = ie.headerWord(Ke.F.GpuTimed), this.gpuUs = ie.headerWord(Ke.F.GpuFrameUs))
      }
      logLinks(ee) {
        const ie = window.bloxdRenderDebug;
        for (const be of this.programLines.failures(null === ie || void 0 === ie ? void 0 : ie.linkFailures)) this.event(be);
        const He = this.programLines.heldAtBackstop(null === ie || void 0 === ie ? void 0 : ie.heldAtBackstop);
        null !== He && Oe(He);
        for (const be of this.programLines.summaryLines(null === ie || void 0 === ie ? void 0 : ie.links, null === ie || void 0 === ie ? void 0 : ie.programUse, ee, this.hidden.totals(ee))) Oe(be);
        const ye = this.compileSummary.line(null === ie || void 0 === ie ? void 0 : ie.compiles, ee);
        null !== ye && Oe(ye)
      }
      logGrid() {
        var ee;
        const ie = null === (ee = window.bloxdRenderDebug) || void 0 === ee ? void 0 : ee.gridFaces;
        this.gridLogged || void 0 === ie || (this.gridLogged = !0, Oe(`gl1 grid ${ie}`))
      }
      logRenderer() {
        var ee, ie;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const He = window.bloxdRenderDebug,
          ye = (0, Me.D)(),
          be = void 0 === (null === He || void 0 === He ? void 0 : He.parallelCompile) ? "" : `; parallel compile ${He.parallelCompile}`;
        Oe(`renderer gl ${ye?`${ye.vendor} / ${ye.renderer}`:"(not read)"}; terrain fetch ${null!==(ee=null===He||void 0===He?void 0:He.fetch)&&void 0!==ee?ee:"(not noted)"}${be}`), Oe(`renderer caps ${null!==(ie=null===He||void 0===He?void 0:He.caps)&&void 0!==ie?ie:"(not noted)"}`)
      }
    }
    let We = null;

    function te(ee) {
      return (0, qe.e)(), We ??= new de(ee), We
    }
  },
  5160: (ee, ie, He) => {
    function ye(ee) {
      if (null === ee) return "backend: none picked (no renderer build)";
      const ie = ee.adapter ? `${ee.adapter.vendor}/${ee.adapter.architecture}` : "none";
      return `backend ${ee.backend}: reason ${ee.reason}, source ${ee.source}, adapter ${ie}`
    }
    He.d(ie, {
      e: () => ye
    })
  },
  34736: (ee, ie, He) => {
    function ye(ee) {
      return `hidden ${ee.changes} changes, ${Math.round(ee.hiddenMs)} ms`
    }
    He.d(ie, {
      c: () => be,
      e: () => ye
    });
    class be {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(ee) {
        this.changes++, document.hidden ? this.hiddenSinceMs = ee : this.hiddenSinceMs >= 0 && (this.hiddenMs += ee - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(ee) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? ee - this.hiddenSinceMs : 0)
        }
      }
    }
  },
  42116: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      d: () => Me,
      g: () => Ue
    });
    var ye = He(41694),
      be = He(41704);

    function Me(ee) {
      if (ee.queries.drawCensus() < ye.vb.BYTES) return null;
      const ie = ee.memoryData(ee.scratch(), ye.vb.BYTES, 4, "the draw census");
      return null === ie ? null : {
        terrainOpaque: ye.vb.terrainOpaque(ie, 0),
        terrainTransparent: ye.vb.terrainTransparent(ie, 0),
        terrainPack: ye.vb.terrainPack(ie, 0),
        earthSky: ye.vb.earthSky(ie, 0),
        skyMeshes: ye.vb.skyMeshes(ie, 0),
        regular: ye.vb.regular(ie, 0),
        thin: ye.vb.thin(ie, 0),
        line: ye.vb.line(ie, 0),
        text: ye.vb.text(ie, 0),
        particles: ye.vb.particles(ie, 0),
        terrainParts: ye.vb.terrainParts(ie, 0),
        terrainCompiling: ye.vb.terrainCompiling(ie, 0),
        ringCopiesMax: ye.vb.ringCopiesMax(ie, 0),
        ringBusyWrites: ye.vb.ringBusyWrites(ie, 0)
      }
    }

    function Ke(ee) {
      const {
        terrainOpaque: ie,
        terrainTransparent: He,
        earthSky: ye,
        skyMeshes: be,
        regular: Me,
        thin: Ke,
        line: Ue,
        text: Fe,
        particles: Je
      } = ee;
      return ie + He + ye + be + Me + Ke + Ue + Fe + Je
    }

    function Ue() {
      const ee = (0, be.h)();
      return !0 === (null === ee || void 0 === ee ? void 0 : ee.isCoreRunning) ? function(ee) {
        const ie = Me(ee);
        if (null === ie) return [];
        const {
          terrainOpaque: He,
          terrainTransparent: ye,
          terrainPack: be,
          earthSky: Ue,
          skyMeshes: Fe,
          regular: Je,
          thin: oe,
          line: Re,
          text: ke,
          particles: qe
        } = ie;
        return [{
          label: "Drawn",
          value: `${Ke(ie)}`
        }, {
          label: "Terrain",
          value: `${He} opaque / ${ye} transparent (${be} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${Je} / ${oe}`
        }, {
          label: "Text / Lines",
          value: `${ke} / ${Re}`
        }, {
          label: "Sky / Particles",
          value: `${Ue+Fe} / ${qe}`
        }]
      }(ee.api) : []
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);