export const id = 58;
export const ids = [58];
export const modules = {
  55152: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      startRenderLite: () => vr
    });
    var Zr = Qr(2396),
      Wr = Qr(712),
      ar = Qr(135),
      jr = Qr(5617),
      Ir = Qr(42895),
      fr = Qr(5610),
      Er = Qr(42559),
      pr = Qr(42451),
      xr = Qr(42617),
      mr = Qr(3909),
      Nr = Qr(5270),
      Ur = Qr(35315);
    const tr = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class hr {
      constructor(rr) {
        this.label = void 0, this.noted = void 0, this.lines = 0, this.atMs = -1 / 0, this.label = rr
      }
      line(rr, Sr) {
        const Qr = this.lines < 10 ? 6e4 : 6e5;
        return void 0 === rr || rr === this.noted || Sr - this.atMs < Qr ? null : (this.noted = rr, this.lines++, this.atMs = Sr, `${this.label}: ${rr}`)
      }
    }
    class zr {
      constructor() {
        this.failuresLogged = 0, this.heldLogged = !1, this.links = new hr("gl links"), this.programUse = new hr("gl programs")
      }
      failures(rr) {
        const Sr = rr ? rr.split(" ") : [],
          Qr = Sr.slice(this.failuresLogged).map((rr => {
            var Sr;
            const [Qr, Zr] = rr.split(":"), Wr = null !== (Sr = tr.get(Qr.slice(-1))) && void 0 !== Sr ? Sr : "";
            return `gl link failed: program row ${parseInt(Qr)}${Wr}, read ${Zr} ms after issue`
          }));
        return this.failuresLogged = Sr.length, Qr
      }
      heldAtBackstop(rr) {
        return this.heldLogged || void 0 === rr ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${rr}`)
      }
      summaryLines(rr, Sr, Qr, Zr) {
        const Wr = this.links.line(rr, Qr);
        return [Wr && `${Wr}; tab ${(0,Ur.g)(Zr)}`, this.programUse.line(Sr, Qr)].filter((rr => null !== rr))
      }
    }
    var Yr = Qr(5501);
    class nr {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(rr, Sr, Qr) {
        if ("none" !== Sr && (this.frames++, "paced" === Sr && this.paced++, "drawn" === Sr)) {
          if (this.drawn++, this.renderUs += Qr, this.renderUsMax = Math.max(this.renderUsMax, Qr), null !== this.lastDrawnMs) {
            const Sr = rr - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, Sr), Sr >= 50 && this.longGaps++
          }
          this.lastDrawnMs = rr
        }
      }
      restart() {
        this.take(), this.lastDrawnMs = null
      }
      take() {
        const rr = {
          frames: this.frames,
          drawn: this.drawn,
          paced: this.paced,
          gapMaxMs: this.gapMaxMs,
          longGaps: this.longGaps,
          renderUs: this.renderUs,
          renderUsMax: this.renderUsMax
        };
        return this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, rr
      }
    }

    function er(rr) {
      return (rr / 1048576).toFixed(1)
    }
    class Kr {
      constructor() {
        this.logged = 0, this.seen = new Set, this.unlogged = 0
      }
      admit(rr) {
        return this.logged >= 20 || this.seen.has(rr) ? (this.unlogged++, null) : (this.seen.add(rr), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${rr}` : rr)
      }
      takeUnlogged() {
        const rr = this.unlogged;
        return this.unlogged = 0, rr
      }
    }

    function yr(rr) {
      (0, mr.l)("renderlite", rr)
    }
    class Br {
      constructor(rr) {
        this.frames = new nr, this.events = new Kr, this.programLines = new zr, this.compileSummary = new hr("webgpu compiles"), this.hidden = new Ur.c, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this.prejoinLogged = null, this.visibilityChanged = () => {
          const rr = performance.now();
          this.hidden.changed(rr), this.restartWindow(rr)
        }, this.lx = () => {
          var rr, Sr;
          const Qr = this.session,
            Wr = (0, pr.f)(),
            ar = performance.now();
          var fr;
          if (this.logLinks(ar), this.logGrid(), null === Qr || Qr.isStopped || !0 !== (null === Wr || void 0 === Wr ? void 0 : Wr.isCoreRunning)) return null === (fr = window.bloxdRenderDebug) || void 0 === fr || delete fr.meshMaterials, void this.restartWindow(ar);
          if (document.hidden) return;
          if (ar - this.windowStart < 2500) return;
          if (! function(rr) {
              return rr < 12 || (rr - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const xr = Qr.headerWord(jr.L.GpuTimed),
            mr = Qr.headerWord(jr.L.GpuFrameUs),
            Nr = this.sampled === Qr ? {
              timed: xr - this.gpuTimed >>> 0,
              us: mr - this.gpuUs >>> 0
            } : null;
          this.sampled = Qr, this.gpuTimed = xr, this.gpuUs = mr;
          const Ur = null !== (rr = null === (Sr = (0, Er.T)((0, Zr.z)())) || void 0 === Sr ? void 0 : Sr.bZr()) && void 0 !== rr ? rr : 0;
          yr(function(rr, Sr) {
            const Qr = Sr.windowMs / 1e3,
              Zr = [`${Math.round(Qr)}s: ${rr.drawn} drawn (${(rr.drawn/Qr).toFixed(1)}/s), ${rr.paced} paced, ${rr.frames-rr.drawn-rr.paced} skipped`, `gap max ${Math.round(rr.gapMaxMs)} ms, ${rr.longGaps} over 50 ms`, `render cpu ${rr.drawn?(rr.renderUs/rr.drawn/1e3).toFixed(2):"-"} ms mean, ${(rr.renderUsMax/1e3).toFixed(1)} max`];
            null !== Sr.gpu && Zr.push(`gpu ${Sr.gpu.timed?(Sr.gpu.us/Sr.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${Sr.gpu.timed} timed`);
            const Wr = Sr.census;
            Zr.push(null === Wr ? "draws none yet" : `draws ${(0,Ir.e)(Wr)} (terrain ${Wr.terrainOpaque}+${Wr.terrainTransparent}, pack ${Wr.terrainPack}, meshes ${Wr.regular+Wr.thin+Wr.line+Wr.text} (${Wr.text} text, ${Wr.thin} thin, ${Wr.line} line), sky ${Wr.earthSky+Wr.skyMeshes}, particles ${Wr.particles})`), null !== Wr && Wr.ringCopiesMax > 0 && Zr.push(`frame rings ${Wr.ringCopiesMax} copies max, ${Wr.ringBusyWrites} busy writes so far`);
            const ar = null === Sr.gpuBytesBefore ? "" : ` (${Sr.gpuBytes>=Sr.gpuBytesBefore?"+":"-"}${er(Math.abs(Sr.gpuBytes-Sr.gpuBytesBefore))})`;
            return Zr.push(`gpu mem ${er(Sr.gpuBytes)} MiB${ar}`), Zr.push(`pending ${Sr.pending}`, "terrain " + (Sr.terrainDrawn ? "drawn" : "not drawn yet")), Sr.eventsUnlogged > 0 && Zr.push(`${Sr.eventsUnlogged} events unlogged`), Zr.join("; ")
          }(this.frames.take(), {
            windowMs: ar - this.windowStart,
            gpu: Nr,
            census: (0, Ir.f)(Wr.api),
            gpuBytes: Ur,
            gpuBytesBefore: this.gpuBytes,
            pending: Qr.headerWord(jr.L.RenderPending),
            terrainDrawn: 0 !== (Qr.headerWord(jr.L.LoadSteps) & jr.V.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          }));
          const tr = window.bloxdRenderDebug;
          void 0 !== (null === tr || void 0 === tr ? void 0 : tr.meshMaterials) && (yr(`mesh materials ${tr.meshMaterials}`), delete tr.meshMaterials), this.gpuBytes = Ur, this.windowStart = ar
        }, yr(`${(0,Yr.e)(rr)}; client ${Wr.B.client} (${Wr.B.reason})`), setInterval(this.lx, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(rr, Sr, Qr) {
        var Zr;
        this.session !== rr && (null === (Zr = window.bloxdRenderDebug) || void 0 === Zr || delete Zr.meshMaterials);
        this.session = rr, this.frames.frame(Sr, Qr, "drawn" === Qr ? rr.headerWord(jr.L.RenderUs) : 0)
      }
      coreErrors(rr) {
        for (const {
            code: Zr,
            detail: Wr
          }
          of rr) {
          var Sr, Qr;
          if (Zr >= jr.o.RenderDeviceLost && Zr <= jr.o.RenderSerialLinks) this.event(`render error ${(0,fr.te)(Zr)}${null!==(Sr=null===(Qr=(0,xr.b)(Zr,Wr))||void 0===Qr?void 0:Qr.words)&&void 0!==Sr?Sr:""} (detail ${Wr})`)
        }
      }
      reload(rr, Sr, Qr, Zr) {
        this.event(`render reload: ${rr?"webgpu":"gl"} ${Qr}, losses ${Sr}${void 0===Zr?"":`: ${Zr}`}`)
      }
      glContextLost(rr, Sr, Qr) {
        const Zr = null === Sr || void 0 === Sr ? void 0 : Sr.split(" "),
          Wr = 3 === (null === Zr || void 0 === Zr ? void 0 : Zr.length) ? `vertex arrays ${Zr[0]}, keyed draws peak ${Zr[1]} (sweep floor ${Zr[2]})` : "vertex arrays unnoted";
        this.event(`gl context lost ${rr?"in game":"at home"}: ${Wr}, render distance ${null!==Qr&&void 0!==Qr?Qr:"none"}`)
      }
      crashed(rr) {
        let {
          site: Sr,
          error: Qr,
          header: Zr
        } = rr;
        const Wr = null !== Zr && 0 !== Zr.lastError ? `, last error ${(0,fr.te)(Zr.lastError)} (detail ${Zr.lastErrorDetail})` : "",
          ar = Qr instanceof Error ? `${Qr.name}: ${Qr.message}` : null === Qr || void 0 === Qr ? "" : String(Qr);
        this.event(`core stopped at ${Sr}${Wr}${ar&&`: ${ar}`}`)
      }
      event(rr) {
        const Sr = this.events.admit(rr);
        null !== Sr && yr(Sr)
      }
      restartWindow(rr) {
        this.frames.restart(), this.windowStart = rr;
        const Sr = this.session;
        null === Sr || Sr.isStopped ? this.sampled = null : (this.sampled = Sr, this.gpuTimed = Sr.headerWord(jr.L.GpuTimed), this.gpuUs = Sr.headerWord(jr.L.GpuFrameUs))
      }
      logLinks(rr) {
        const Sr = window.bloxdRenderDebug;
        for (const Wr of this.programLines.failures(null === Sr || void 0 === Sr ? void 0 : Sr.linkFailures)) this.event(Wr);
        const Qr = this.programLines.heldAtBackstop(null === Sr || void 0 === Sr ? void 0 : Sr.heldAtBackstop);
        null !== Qr && yr(Qr);
        for (const Wr of this.programLines.summaryLines(null === Sr || void 0 === Sr ? void 0 : Sr.links, null === Sr || void 0 === Sr ? void 0 : Sr.programUse, rr, this.hidden.totals(rr))) yr(Wr);
        const Zr = this.compileSummary.line(null === Sr || void 0 === Sr ? void 0 : Sr.compiles, rr);
        null !== Zr && yr(Zr), void 0 !== (null === Sr || void 0 === Sr ? void 0 : Sr.prejoin) && Sr.prejoin !== this.prejoinLogged && (this.prejoinLogged = Sr.prejoin, yr(`prejoin ${Sr.prejoin}`))
      }
      logGrid() {
        var rr;
        const Sr = null === (rr = window.bloxdRenderDebug) || void 0 === rr ? void 0 : rr.gridFaces;
        this.gridLogged || void 0 === Sr || (this.gridLogged = !0, yr(`gl1 grid ${Sr}`))
      }
      logRenderer() {
        var rr, Sr;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const Qr = window.bloxdRenderDebug,
          Zr = (0, ar.C)(),
          Wr = void 0 === (null === Qr || void 0 === Qr ? void 0 : Qr.parallelCompile) ? "" : `; parallel compile ${Qr.parallelCompile}`;
        yr(`renderer gl ${Zr?`${Zr.vendor} / ${Zr.renderer}`:"(not read)"}; terrain fetch ${null!==(rr=null===Qr||void 0===Qr?void 0:Qr.fetch)&&void 0!==rr?rr:"(not noted)"}${Wr}`), yr(`renderer caps ${null!==(Sr=null===Qr||void 0===Qr?void 0:Qr.caps)&&void 0!==Sr?Sr:"(not noted)"}`)
      }
    }
    let Tr = null;

    function vr(rr) {
      return (0, Nr.e)(), Tr ??= new Br(rr), Tr
    }
  },
  5501: (rr, Sr, Qr) => {
    function Zr(rr) {
      if (null === rr) return "backend: none picked (no renderer build)";
      const Sr = rr.adapter ? `${rr.adapter.vendor}/${rr.adapter.architecture}` : "none";
      return `backend ${rr.backend}: reason ${rr.reason}, source ${rr.source}, adapter ${Sr}`
    }
    Qr.d(Sr, {
      e: () => Zr
    })
  },
  35315: (rr, Sr, Qr) => {
    function Zr(rr) {
      return `hidden ${rr.changes} changes, ${Math.round(rr.hiddenMs)} ms`
    }
    Qr.d(Sr, {
      c: () => Wr,
      g: () => Zr
    });
    class Wr {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(rr) {
        this.changes++, document.hidden ? this.hiddenSinceMs = rr : this.hiddenSinceMs >= 0 && (this.hiddenMs += rr - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(rr) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? rr - this.hiddenSinceMs : 0)
        }
      }
    }
  },
  42895: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => jr,
      f: () => ar,
      i: () => Ir
    });
    var Zr = Qr(42438),
      Wr = Qr(42451);

    function ar(rr) {
      if (rr.queries.drawCensus() < Zr.lb.BYTES) return null;
      const Sr = rr.memoryData(rr.scratch(), Zr.lb.BYTES, 4, "the draw census");
      return null === Sr ? null : {
        terrainOpaque: Zr.lb.terrainOpaque(Sr, 0),
        terrainTransparent: Zr.lb.terrainTransparent(Sr, 0),
        terrainPack: Zr.lb.terrainPack(Sr, 0),
        earthSky: Zr.lb.earthSky(Sr, 0),
        skyMeshes: Zr.lb.skyMeshes(Sr, 0),
        regular: Zr.lb.regular(Sr, 0),
        thin: Zr.lb.thin(Sr, 0),
        line: Zr.lb.line(Sr, 0),
        text: Zr.lb.text(Sr, 0),
        particles: Zr.lb.particles(Sr, 0),
        terrainParts: Zr.lb.terrainParts(Sr, 0),
        terrainCompiling: Zr.lb.terrainCompiling(Sr, 0),
        ringCopiesMax: Zr.lb.ringCopiesMax(Sr, 0),
        ringBusyWrites: Zr.lb.ringBusyWrites(Sr, 0)
      }
    }

    function jr(rr) {
      const {
        terrainOpaque: Sr,
        terrainTransparent: Qr,
        earthSky: Zr,
        skyMeshes: Wr,
        regular: ar,
        thin: jr,
        line: Ir,
        text: fr,
        particles: Er
      } = rr;
      return Sr + Qr + Zr + Wr + ar + jr + Ir + fr + Er
    }

    function Ir() {
      const rr = (0, Wr.f)();
      return !0 === (null === rr || void 0 === rr ? void 0 : rr.isCoreRunning) ? function(rr) {
        const Sr = ar(rr);
        if (null === Sr) return [];
        const {
          terrainOpaque: Qr,
          terrainTransparent: Zr,
          terrainPack: Wr,
          earthSky: Ir,
          skyMeshes: fr,
          regular: Er,
          thin: pr,
          line: xr,
          text: mr,
          particles: Nr
        } = Sr;
        return [{
          label: "Drawn",
          value: `${jr(Sr)}`
        }, {
          label: "Terrain",
          value: `${Qr} opaque / ${Zr} transparent (${Wr} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${Er} / ${pr}`
        }, {
          label: "Text / Lines",
          value: `${mr} / ${xr}`
        }, {
          label: "Sky / Particles",
          value: `${Ir+fr} / ${Nr}`
        }]
      }(rr.api) : []
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);