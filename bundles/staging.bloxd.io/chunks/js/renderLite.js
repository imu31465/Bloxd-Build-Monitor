export const id = 50;
export const ids = [50];
export const modules = {
  51260: (uu, Eu, ju) => {
    ju.d(Eu, {
      startRenderLite: () => du
    });
    var su = ju(3017),
      Uu = ju(680),
      Zu = ju(124),
      Xu = ju(4976),
      lu = ju(41247),
      qu = ju(4970),
      fu = ju(40963),
      Cu = ju(40847),
      bu = ju(40997),
      cu = ju(2943),
      Nu = ju(4698),
      Ou = ju(34424);
    const Yu = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class hu {
      constructor(uu) {
        this.label = void 0, this.noted = void 0, this.lines = 0, this.atMs = -1 / 0, this.label = uu
      }
      line(uu, Eu) {
        const ju = this.lines < 10 ? 6e4 : 6e5;
        return void 0 === uu || uu === this.noted || Eu - this.atMs < ju ? null : (this.noted = uu, this.lines++, this.atMs = Eu, `${this.label}: ${uu}`)
      }
    }
    class Du {
      constructor() {
        this.failuresLogged = 0, this.heldLogged = !1, this.links = new hu("gl links"), this.programUse = new hu("gl programs")
      }
      failures(uu) {
        const Eu = uu ? uu.split(" ") : [],
          ju = Eu.slice(this.failuresLogged).map((uu => {
            var Eu;
            const [ju, su] = uu.split(":"), Uu = null !== (Eu = Yu.get(ju.slice(-1))) && void 0 !== Eu ? Eu : "";
            return `gl link failed: program row ${parseInt(ju)}${Uu}, read ${su} ms after issue`
          }));
        return this.failuresLogged = Eu.length, ju
      }
      heldAtBackstop(uu) {
        return this.heldLogged || void 0 === uu ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${uu}`)
      }
      summaryLines(uu, Eu, ju, su) {
        const Uu = this.links.line(uu, ju);
        return [Uu && `${Uu}; tab ${(0,Ou.d)(su)}`, this.programUse.line(Eu, ju)].filter((uu => null !== uu))
      }
    }
    var gu = ju(4881);
    class Mu {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(uu, Eu, ju) {
        if ("none" !== Eu && (this.frames++, "paced" === Eu && this.paced++, "drawn" === Eu)) {
          if (this.drawn++, this.renderUs += ju, this.renderUsMax = Math.max(this.renderUsMax, ju), null !== this.lastDrawnMs) {
            const Eu = uu - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, Eu), Eu >= 50 && this.longGaps++
          }
          this.lastDrawnMs = uu
        }
      }
      restart() {
        this.take(), this.lastDrawnMs = null
      }
      take() {
        const uu = {
          frames: this.frames,
          drawn: this.drawn,
          paced: this.paced,
          gapMaxMs: this.gapMaxMs,
          longGaps: this.longGaps,
          renderUs: this.renderUs,
          renderUsMax: this.renderUsMax
        };
        return this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, uu
      }
    }

    function eu(uu) {
      return (uu / 1048576).toFixed(1)
    }
    class Gu {
      constructor() {
        this.logged = 0, this.seen = new Set, this.unlogged = 0
      }
      admit(uu) {
        return this.logged >= 20 || this.seen.has(uu) ? (this.unlogged++, null) : (this.seen.add(uu), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${uu}` : uu)
      }
      takeUnlogged() {
        const uu = this.unlogged;
        return this.unlogged = 0, uu
      }
    }

    function pu(uu) {
      (0, cu.k)("renderlite", uu)
    }
    class wu {
      constructor(uu) {
        this.frames = new Mu, this.events = new Gu, this.programLines = new Du, this.compileSummary = new hu("webgpu compiles"), this.hidden = new Ou.b, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this.visibilityChanged = () => {
          const uu = performance.now();
          this.hidden.changed(uu), this.restartWindow(uu)
        }, this.Tb = () => {
          var uu, Eu;
          const ju = this.session,
            Uu = (0, Cu.l)(),
            Zu = performance.now();
          if (this.logLinks(Zu), this.logGrid(), null === ju || ju.isStopped || !0 !== (null === Uu || void 0 === Uu ? void 0 : Uu.isCoreRunning)) return void this.restartWindow(Zu);
          if (document.hidden) return;
          if (Zu - this.windowStart < 2500) return;
          if (! function(uu) {
              return uu < 12 || (uu - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const qu = ju.headerWord(Xu.K.GpuTimed),
            bu = ju.headerWord(Xu.K.GpuFrameUs),
            cu = this.sampled === ju ? {
              timed: qu - this.gpuTimed >>> 0,
              us: bu - this.gpuUs >>> 0
            } : null;
          this.sampled = ju, this.gpuTimed = qu, this.gpuUs = bu;
          const Nu = null !== (uu = null === (Eu = (0, fu.Z)((0, su.F)())) || void 0 === Eu ? void 0 : Eu.Csu()) && void 0 !== uu ? uu : 0;
          pu(function(uu, Eu) {
            const ju = Eu.windowMs / 1e3,
              su = [`${Math.round(ju)}s: ${uu.drawn} drawn (${(uu.drawn/ju).toFixed(1)}/s), ${uu.paced} paced, ${uu.frames-uu.drawn-uu.paced} skipped`, `gap max ${Math.round(uu.gapMaxMs)} ms, ${uu.longGaps} over 50 ms`, `render cpu ${uu.drawn?(uu.renderUs/uu.drawn/1e3).toFixed(2):"-"} ms mean, ${(uu.renderUsMax/1e3).toFixed(1)} max`];
            null !== Eu.gpu && su.push(`gpu ${Eu.gpu.timed?(Eu.gpu.us/Eu.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${Eu.gpu.timed} timed`);
            const Uu = Eu.census;
            su.push(null === Uu ? "draws none yet" : `draws ${(0,lu.b)(Uu)} (terrain ${Uu.terrainOpaque}+${Uu.terrainTransparent}, pack ${Uu.terrainPack}, meshes ${Uu.regular+Uu.thin+Uu.line+Uu.text}, sky ${Uu.earthSky+Uu.skyMeshes}, particles ${Uu.particles})`), null !== Uu && Uu.ringCopiesMax > 0 && su.push(`frame rings ${Uu.ringCopiesMax} copies max, ${Uu.ringBusyWrites} busy writes so far`);
            const Zu = null === Eu.gpuBytesBefore ? "" : ` (${Eu.gpuBytes>=Eu.gpuBytesBefore?"+":"-"}${eu(Math.abs(Eu.gpuBytes-Eu.gpuBytesBefore))})`;
            return su.push(`gpu mem ${eu(Eu.gpuBytes)} MiB${Zu}`), su.push(`pending ${Eu.pending}`, "terrain " + (Eu.terrainDrawn ? "drawn" : "not drawn yet")), Eu.eventsUnlogged > 0 && su.push(`${Eu.eventsUnlogged} events unlogged`), su.join("; ")
          }(this.frames.take(), {
            windowMs: Zu - this.windowStart,
            gpu: cu,
            census: (0, lu.e)(Uu.api),
            gpuBytes: Nu,
            gpuBytesBefore: this.gpuBytes,
            pending: ju.headerWord(Xu.K.RenderPending),
            terrainDrawn: 0 !== (ju.headerWord(Xu.K.LoadSteps) & Xu.X.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = Nu, this.windowStart = Zu
        }, pu(`${(0,gu.d)(uu)}; client ${Uu.r.client} (${Uu.r.reason})`), setInterval(this.Tb, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(uu, Eu, ju) {
        this.session = uu, this.frames.frame(Eu, ju, "drawn" === ju ? uu.headerWord(Xu.K.RenderUs) : 0)
      }
      coreErrors(uu) {
        for (const {
            code: su,
            detail: Uu
          }
          of uu) {
          var Eu, ju;
          if (su >= Xu.j.RenderDeviceLost && su <= Xu.j.RenderSerialLinks) this.event(`render error ${(0,qu.he)(su)}${null!==(Eu=null===(ju=(0,bu.e)(su,Uu))||void 0===ju?void 0:ju.words)&&void 0!==Eu?Eu:""} (detail ${Uu})`)
        }
      }
      reload(uu, Eu, ju, su) {
        this.event(`render reload: ${uu?"webgpu":"gl"} ${ju}, losses ${Eu}${void 0===su?"":`: ${su}`}`)
      }
      crashed(uu) {
        let {
          site: Eu,
          error: ju,
          header: su
        } = uu;
        const Uu = null !== su && 0 !== su.lastError ? `, last error ${(0,qu.he)(su.lastError)} (detail ${su.lastErrorDetail})` : "",
          Zu = ju instanceof Error ? `${ju.name}: ${ju.message}` : null === ju || void 0 === ju ? "" : String(ju);
        this.event(`core stopped at ${Eu}${Uu}${Zu&&`: ${Zu}`}`)
      }
      event(uu) {
        const Eu = this.events.admit(uu);
        null !== Eu && pu(Eu)
      }
      restartWindow(uu) {
        this.frames.restart(), this.windowStart = uu;
        const Eu = this.session;
        null === Eu || Eu.isStopped ? this.sampled = null : (this.sampled = Eu, this.gpuTimed = Eu.headerWord(Xu.K.GpuTimed), this.gpuUs = Eu.headerWord(Xu.K.GpuFrameUs))
      }
      logLinks(uu) {
        const Eu = window.bloxdRenderDebug;
        for (const Uu of this.programLines.failures(null === Eu || void 0 === Eu ? void 0 : Eu.linkFailures)) this.event(Uu);
        const ju = this.programLines.heldAtBackstop(null === Eu || void 0 === Eu ? void 0 : Eu.heldAtBackstop);
        null !== ju && pu(ju);
        for (const Uu of this.programLines.summaryLines(null === Eu || void 0 === Eu ? void 0 : Eu.links, null === Eu || void 0 === Eu ? void 0 : Eu.programUse, uu, this.hidden.totals(uu))) pu(Uu);
        const su = this.compileSummary.line(null === Eu || void 0 === Eu ? void 0 : Eu.compiles, uu);
        null !== su && pu(su)
      }
      logGrid() {
        var uu;
        const Eu = null === (uu = window.bloxdRenderDebug) || void 0 === uu ? void 0 : uu.gridFaces;
        this.gridLogged || void 0 === Eu || (this.gridLogged = !0, pu(`gl1 grid ${Eu}`))
      }
      logRenderer() {
        var uu, Eu;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const ju = window.bloxdRenderDebug,
          su = (0, Zu.q)(),
          Uu = void 0 === (null === ju || void 0 === ju ? void 0 : ju.parallelCompile) ? "" : `; parallel compile ${ju.parallelCompile}`;
        pu(`renderer gl ${su?`${su.vendor} / ${su.renderer}`:"(not read)"}; terrain fetch ${null!==(uu=null===ju||void 0===ju?void 0:ju.fetch)&&void 0!==uu?uu:"(not noted)"}${Uu}`), pu(`renderer caps ${null!==(Eu=null===ju||void 0===ju?void 0:ju.caps)&&void 0!==Eu?Eu:"(not noted)"}`)
      }
    }
    let Ju = null;

    function du(uu) {
      return (0, Nu.f)(), Ju ??= new wu(uu), Ju
    }
  },
  4881: (uu, Eu, ju) => {
    function su(uu) {
      if (null === uu) return "backend: none picked (no renderer build)";
      const Eu = uu.adapter ? `${uu.adapter.vendor}/${uu.adapter.architecture}` : "none";
      return `backend ${uu.backend}: reason ${uu.reason}, source ${uu.source}, adapter ${Eu}`
    }
    ju.d(Eu, {
      d: () => su
    })
  },
  34424: (uu, Eu, ju) => {
    function su(uu) {
      return `hidden ${uu.changes} changes, ${Math.round(uu.hiddenMs)} ms`
    }
    ju.d(Eu, {
      b: () => Uu,
      d: () => su
    });
    class Uu {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(uu) {
        this.changes++, document.hidden ? this.hiddenSinceMs = uu : this.hiddenSinceMs >= 0 && (this.hiddenMs += uu - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(uu) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? uu - this.hiddenSinceMs : 0)
        }
      }
    }
  },
  41247: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu,
      e: () => Zu,
      h: () => lu
    });
    var su = ju(40833),
      Uu = ju(40847);

    function Zu(uu) {
      if (uu.queries.drawCensus() < su.vb.BYTES) return null;
      const Eu = uu.memoryData(uu.scratch(), su.vb.BYTES, 4, "the draw census");
      return null === Eu ? null : {
        terrainOpaque: su.vb.terrainOpaque(Eu, 0),
        terrainTransparent: su.vb.terrainTransparent(Eu, 0),
        terrainPack: su.vb.terrainPack(Eu, 0),
        earthSky: su.vb.earthSky(Eu, 0),
        skyMeshes: su.vb.skyMeshes(Eu, 0),
        regular: su.vb.regular(Eu, 0),
        thin: su.vb.thin(Eu, 0),
        line: su.vb.line(Eu, 0),
        text: su.vb.text(Eu, 0),
        particles: su.vb.particles(Eu, 0),
        terrainParts: su.vb.terrainParts(Eu, 0),
        terrainCompiling: su.vb.terrainCompiling(Eu, 0),
        ringCopiesMax: su.vb.ringCopiesMax(Eu, 0),
        ringBusyWrites: su.vb.ringBusyWrites(Eu, 0)
      }
    }

    function Xu(uu) {
      const {
        terrainOpaque: Eu,
        terrainTransparent: ju,
        earthSky: su,
        skyMeshes: Uu,
        regular: Zu,
        thin: Xu,
        line: lu,
        text: qu,
        particles: fu
      } = uu;
      return Eu + ju + su + Uu + Zu + Xu + lu + qu + fu
    }

    function lu() {
      const uu = (0, Uu.l)();
      return !0 === (null === uu || void 0 === uu ? void 0 : uu.isCoreRunning) ? function(uu) {
        const Eu = Zu(uu);
        if (null === Eu) return [];
        const {
          terrainOpaque: ju,
          terrainTransparent: su,
          terrainPack: Uu,
          earthSky: lu,
          skyMeshes: qu,
          regular: fu,
          thin: Cu,
          line: bu,
          text: cu,
          particles: Nu
        } = Eu;
        return [{
          label: "Drawn",
          value: `${Xu(Eu)}`
        }, {
          label: "Terrain",
          value: `${ju} opaque / ${su} transparent (${Uu} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${fu} / ${Cu}`
        }, {
          label: "Text / Lines",
          value: `${cu} / ${bu}`
        }, {
          label: "Sky / Particles",
          value: `${lu+qu} / ${Nu}`
        }]
      }(uu.api) : []
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);