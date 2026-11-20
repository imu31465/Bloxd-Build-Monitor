export const id = 48;
export const ids = [48];
export const modules = {
  42891: (uu, Ru, yu) => {
    yu.d(Ru, {
      startRenderLite: () => ku
    });
    var Eu = yu(3510),
      Ku = yu(624),
      Qu = yu(143),
      mu = yu(4564),
      Ju = yu(40311),
      Nu = yu(4562),
      Xu = yu(40361),
      Vu = yu(40173),
      ru = yu(40523),
      Bu = yu(2707),
      xu = yu(4275);
    const Su = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class pu {
      constructor() {
        this.failuresLogged = 0, this.summary = void 0, this.summaries = 0, this.summaryAtMs = -1 / 0
      }
      failures(uu) {
        const Ru = uu ? uu.split(" ") : [],
          yu = Ru.slice(this.failuresLogged).map((uu => {
            var Ru;
            const [yu, Eu] = uu.split(":"), Ku = null !== (Ru = Su.get(yu.slice(-1))) && void 0 !== Ru ? Ru : "";
            return `gl link failed: program row ${parseInt(yu)}${Ku}, read ${Eu} ms after issue`
          }));
        return this.failuresLogged = Ru.length, yu
      }
      summaryLine(uu, Ru) {
        const yu = this.summaries < 10 ? 6e4 : 6e5;
        return void 0 === uu || uu === this.summary || Ru - this.summaryAtMs < yu ? null : (this.summary = uu, this.summaries++, this.summaryAtMs = Ru, `gl links: ${uu}`)
      }
    }
    var Tu = yu(4473);
    class Wu {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(uu, Ru, yu) {
        if ("none" !== Ru && (this.frames++, "paced" === Ru && this.paced++, "drawn" === Ru)) {
          if (this.drawn++, this.renderUs += yu, this.renderUsMax = Math.max(this.renderUsMax, yu), null !== this.lastDrawnMs) {
            const Ru = uu - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, Ru), Ru >= 50 && this.longGaps++
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

    function ju(uu) {
      return (uu / 1048576).toFixed(1)
    }
    class Hu {
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

    function du(uu) {
      (0, Bu.i)("renderlite", function(uu) {
        let Ru = 0,
          yu = 0,
          Eu = 0;
        for (const Qu of uu) {
          var Ku;
          const mu = null !== (Ku = Qu.codePointAt(0)) && void 0 !== Ku ? Ku : 0;
          if (Ru += mu < 128 ? 1 : mu < 2048 ? 2 : mu < 65536 ? 3 : 4, Ru > 375) return `${uu.slice(0,Eu)}...`;
          yu += Qu.length, Ru <= 372 && (Eu = yu)
        }
        return uu
      }(uu))
    }
    class bu {
      constructor(uu) {
        this.frames = new Wu, this.events = new Hu, this.links = new pu, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.visibilityChanged = () => {
          this.restartWindow(performance.now())
        }, this.sr = () => {
          var uu, Ru;
          const yu = this.session,
            Ku = (0, Vu.i)(),
            Qu = performance.now();
          if (this.logLinks(Qu), null === yu || yu.isStopped || !0 !== (null === Ku || void 0 === Ku ? void 0 : Ku.isCoreRunning)) return void this.restartWindow(Qu);
          if (document.hidden) return;
          if (Qu - this.windowStart < 2500) return;
          if (! function(uu) {
              return uu < 12 || (uu - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const Nu = yu.headerWord(mu.E.GpuTimed),
            ru = yu.headerWord(mu.E.GpuFrameUs),
            Bu = this.sampled === yu ? {
              timed: Nu - this.gpuTimed >>> 0,
              us: ru - this.gpuUs >>> 0
            } : null;
          this.sampled = yu, this.gpuTimed = Nu, this.gpuUs = ru;
          const xu = null !== (uu = null === (Ru = (0, Xu.F)((0, Eu.w)())) || void 0 === Ru ? void 0 : Ru.dEu()) && void 0 !== uu ? uu : 0;
          du(function(uu, Ru) {
            const yu = Ru.windowMs / 1e3,
              Eu = [`${Math.round(yu)}s: ${uu.drawn} drawn (${(uu.drawn/yu).toFixed(1)}/s), ${uu.paced} paced, ${uu.frames-uu.drawn-uu.paced} skipped`, `gap max ${Math.round(uu.gapMaxMs)} ms, ${uu.longGaps} over 50 ms`, `render cpu ${uu.drawn?(uu.renderUs/uu.drawn/1e3).toFixed(2):"-"} ms mean, ${(uu.renderUsMax/1e3).toFixed(1)} max`];
            null !== Ru.gpu && Eu.push(`gpu ${Ru.gpu.timed?(Ru.gpu.us/Ru.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${Ru.gpu.timed} timed`);
            const Ku = Ru.census;
            Eu.push(null === Ku ? "draws none yet" : `draws ${(0,Ju.b)(Ku)} (terrain ${Ku.terrainOpaque}+${Ku.terrainTransparent}, pack ${Ku.terrainPack}, meshes ${Ku.regular+Ku.thin+Ku.line+Ku.text}, sky ${Ku.earthSky+Ku.skyMeshes}, particles ${Ku.particles})`);
            const Qu = null === Ru.gpuBytesBefore ? "" : ` (${Ru.gpuBytes>=Ru.gpuBytesBefore?"+":"-"}${ju(Math.abs(Ru.gpuBytes-Ru.gpuBytesBefore))})`;
            return Eu.push(`gpu mem ${ju(Ru.gpuBytes)} MiB${Qu}`), Eu.push(`pending ${Ru.pending}`, "terrain " + (Ru.terrainDrawn ? "drawn" : "not drawn yet")), Ru.eventsUnlogged > 0 && Eu.push(`${Ru.eventsUnlogged} events unlogged`), Eu.join("; ")
          }(this.frames.take(), {
            windowMs: Qu - this.windowStart,
            gpu: Bu,
            census: (0, Ju.d)(Ku.api),
            gpuBytes: xu,
            gpuBytesBefore: this.gpuBytes,
            pending: yu.headerWord(mu.E.RenderPending),
            terrainDrawn: 0 !== (yu.headerWord(mu.E.LoadSteps) & mu.L.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = xu, this.windowStart = Qu
        }, du(`${(0,Tu.e)(uu)}; client ${Ku.i.client} (${Ku.i.reason})`), setInterval(this.sr, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(uu, Ru, yu) {
        this.session = uu, this.frames.frame(Ru, yu, "drawn" === yu ? uu.headerWord(mu.E.RenderUs) : 0)
      }
      coreErrors(uu) {
        for (const {
            code: Eu,
            detail: Ku
          }
          of uu) {
          var Ru, yu;
          if (Eu >= mu.g.RenderDeviceLost && Eu <= mu.g.RenderSerialLinks) this.event(`render error ${(0,Nu.Ud)(Eu)}${null!==(Ru=null===(yu=(0,ru.b)(Eu,Ku))||void 0===yu?void 0:yu.words)&&void 0!==Ru?Ru:""} (detail ${Ku})`)
        }
      }
      reload(uu, Ru, yu, Eu) {
        this.event(`render reload: ${uu?"webgpu":"gl"} ${yu}, losses ${Ru}${void 0===Eu?"":`: ${Eu}`}`)
      }
      crashed(uu) {
        let {
          site: Ru,
          error: yu,
          header: Eu
        } = uu;
        const Ku = null !== Eu && 0 !== Eu.lastError ? `, last error ${(0,Nu.Ud)(Eu.lastError)} (detail ${Eu.lastErrorDetail})` : "",
          Qu = yu instanceof Error ? `${yu.name}: ${yu.message}` : null === yu || void 0 === yu ? "" : String(yu);
        this.event(`core stopped at ${Ru}${Ku}${Qu&&`: ${Qu}`}`)
      }
      event(uu) {
        const Ru = this.events.admit(uu);
        null !== Ru && du(Ru)
      }
      restartWindow(uu) {
        this.frames.restart(), this.windowStart = uu;
        const Ru = this.session;
        null === Ru || Ru.isStopped ? this.sampled = null : (this.sampled = Ru, this.gpuTimed = Ru.headerWord(mu.E.GpuTimed), this.gpuUs = Ru.headerWord(mu.E.GpuFrameUs))
      }
      logLinks(uu) {
        const Ru = window.bloxdRenderDebug;
        for (const Eu of this.links.failures(null === Ru || void 0 === Ru ? void 0 : Ru.linkFailures)) this.event(Eu);
        const yu = this.links.summaryLine(null === Ru || void 0 === Ru ? void 0 : Ru.links, uu);
        null !== yu && du(yu)
      }
      logRenderer() {
        var uu, Ru;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const yu = window.bloxdRenderDebug,
          Eu = (0, Qu.j)(),
          Ku = void 0 === (null === yu || void 0 === yu ? void 0 : yu.parallelCompile) ? "" : `; parallel compile ${yu.parallelCompile}`;
        du(`renderer gl ${Eu?`${Eu.vendor} / ${Eu.renderer}`:"(not read)"}; terrain fetch ${null!==(uu=null===yu||void 0===yu?void 0:yu.fetch)&&void 0!==uu?uu:"(not noted)"}${Ku}`), du(`renderer caps ${null!==(Ru=null===yu||void 0===yu?void 0:yu.caps)&&void 0!==Ru?Ru:"(not noted)"}`)
      }
    }
    let Cu = null;

    function ku(uu) {
      return (0, xu.f)(), Cu ??= new bu(uu), Cu
    }
  },
  4473: (uu, Ru, yu) => {
    function Eu(uu) {
      if (null === uu) return "backend: none picked (no renderer build)";
      const Ru = uu.adapter ? `${uu.adapter.vendor}/${uu.adapter.architecture}` : "none";
      return `backend ${uu.backend}: reason ${uu.reason}, source ${uu.source}, adapter ${Ru}`
    }
    yu.d(Ru, {
      e: () => Eu
    })
  },
  40311: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu,
      d: () => Qu,
      f: () => Ju
    });
    var Eu = yu(40160),
      Ku = yu(40173);

    function Qu(uu) {
      if (uu.queries.drawCensus() < Eu.Hb.BYTES) return null;
      const Ru = uu.memoryData(uu.scratch(), Eu.Hb.BYTES, 4, "the draw census");
      return null === Ru ? null : {
        terrainOpaque: Eu.Hb.terrainOpaque(Ru, 0),
        terrainTransparent: Eu.Hb.terrainTransparent(Ru, 0),
        terrainPack: Eu.Hb.terrainPack(Ru, 0),
        earthSky: Eu.Hb.earthSky(Ru, 0),
        skyMeshes: Eu.Hb.skyMeshes(Ru, 0),
        regular: Eu.Hb.regular(Ru, 0),
        thin: Eu.Hb.thin(Ru, 0),
        line: Eu.Hb.line(Ru, 0),
        text: Eu.Hb.text(Ru, 0),
        particles: Eu.Hb.particles(Ru, 0)
      }
    }

    function mu(uu) {
      const {
        terrainOpaque: Ru,
        terrainTransparent: yu,
        earthSky: Eu,
        skyMeshes: Ku,
        regular: Qu,
        thin: mu,
        line: Ju,
        text: Nu,
        particles: Xu
      } = uu;
      return Ru + yu + Eu + Ku + Qu + mu + Ju + Nu + Xu
    }

    function Ju() {
      const uu = (0, Ku.i)();
      return !0 === (null === uu || void 0 === uu ? void 0 : uu.isCoreRunning) ? function(uu) {
        const Ru = Qu(uu);
        if (null === Ru) return [];
        const {
          terrainOpaque: yu,
          terrainTransparent: Eu,
          terrainPack: Ku,
          earthSky: Ju,
          skyMeshes: Nu,
          regular: Xu,
          thin: Vu,
          line: ru,
          text: Bu,
          particles: xu
        } = Ru;
        return [{
          label: "Drawn",
          value: `${mu(Ru)}`
        }, {
          label: "Terrain",
          value: `${yu} opaque / ${Eu} transparent (${Ku} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${Xu} / ${Vu}`
        }, {
          label: "Text / Lines",
          value: `${Bu} / ${ru}`
        }, {
          label: "Sky / Particles",
          value: `${Ju+Nu} / ${xu}`
        }]
      }(uu.api) : []
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);