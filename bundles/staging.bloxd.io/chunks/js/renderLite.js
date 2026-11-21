export const id = 48;
export const ids = [48];
export const modules = {
  43231: (dd, Jd, kd) => {
    kd.d(Jd, {
      startRenderLite: () => Bd
    });
    var pd = kd(2761),
      Nd = kd(626),
      Wd = kd(119),
      Pd = kd(4688),
      Zd = kd(40714),
      gd = kd(4680),
      Cd = kd(40771),
      Kd = kd(40575),
      od = kd(40952),
      ld = kd(2704),
      Qd = kd(4369);
    const Ld = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class Od {
      constructor() {
        this.failuresLogged = 0, this.summary = void 0, this.summaries = 0, this.summaryAtMs = -1 / 0
      }
      failures(dd) {
        const Jd = dd ? dd.split(" ") : [],
          kd = Jd.slice(this.failuresLogged).map((dd => {
            var Jd;
            const [kd, pd] = dd.split(":"), Nd = null !== (Jd = Ld.get(kd.slice(-1))) && void 0 !== Jd ? Jd : "";
            return `gl link failed: program row ${parseInt(kd)}${Nd}, read ${pd} ms after issue`
          }));
        return this.failuresLogged = Jd.length, kd
      }
      summaryLine(dd, Jd) {
        const kd = this.summaries < 10 ? 6e4 : 6e5;
        return void 0 === dd || dd === this.summary || Jd - this.summaryAtMs < kd ? null : (this.summary = dd, this.summaries++, this.summaryAtMs = Jd, `gl links: ${dd}`)
      }
    }
    var ed = kd(4569);
    class Rd {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(dd, Jd, kd) {
        if ("none" !== Jd && (this.frames++, "paced" === Jd && this.paced++, "drawn" === Jd)) {
          if (this.drawn++, this.renderUs += kd, this.renderUsMax = Math.max(this.renderUsMax, kd), null !== this.lastDrawnMs) {
            const Jd = dd - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, Jd), Jd >= 50 && this.longGaps++
          }
          this.lastDrawnMs = dd
        }
      }
      restart() {
        this.take(), this.lastDrawnMs = null
      }
      take() {
        const dd = {
          frames: this.frames,
          drawn: this.drawn,
          paced: this.paced,
          gapMaxMs: this.gapMaxMs,
          longGaps: this.longGaps,
          renderUs: this.renderUs,
          renderUsMax: this.renderUsMax
        };
        return this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, dd
      }
    }

    function Id(dd) {
      return (dd / 1048576).toFixed(1)
    }
    class Gd {
      constructor() {
        this.logged = 0, this.seen = new Set, this.unlogged = 0
      }
      admit(dd) {
        return this.logged >= 20 || this.seen.has(dd) ? (this.unlogged++, null) : (this.seen.add(dd), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${dd}` : dd)
      }
      takeUnlogged() {
        const dd = this.unlogged;
        return this.unlogged = 0, dd
      }
    }

    function vd(dd) {
      (0, ld.h)("renderlite", dd)
    }
    class xd {
      constructor(dd) {
        this.frames = new Rd, this.events = new Gd, this.links = new Od, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this.visibilityChanged = () => {
          this.restartWindow(performance.now())
        }, this.Do = () => {
          var dd, Jd;
          const kd = this.session,
            Nd = (0, Kd.k)(),
            Wd = performance.now();
          if (this.logLinks(Wd), this.logGrid(), null === kd || kd.isStopped || !0 !== (null === Nd || void 0 === Nd ? void 0 : Nd.isCoreRunning)) return void this.restartWindow(Wd);
          if (document.hidden) return;
          if (Wd - this.windowStart < 2500) return;
          if (! function(dd) {
              return dd < 12 || (dd - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const gd = kd.headerWord(Pd.B.GpuTimed),
            od = kd.headerWord(Pd.B.GpuFrameUs),
            ld = this.sampled === kd ? {
              timed: gd - this.gpuTimed >>> 0,
              us: od - this.gpuUs >>> 0
            } : null;
          this.sampled = kd, this.gpuTimed = gd, this.gpuUs = od;
          const Qd = null !== (dd = null === (Jd = (0, Cd.C)((0, pd.x)())) || void 0 === Jd ? void 0 : Jd.Ipd()) && void 0 !== dd ? dd : 0;
          vd(function(dd, Jd) {
            const kd = Jd.windowMs / 1e3,
              pd = [`${Math.round(kd)}s: ${dd.drawn} drawn (${(dd.drawn/kd).toFixed(1)}/s), ${dd.paced} paced, ${dd.frames-dd.drawn-dd.paced} skipped`, `gap max ${Math.round(dd.gapMaxMs)} ms, ${dd.longGaps} over 50 ms`, `render cpu ${dd.drawn?(dd.renderUs/dd.drawn/1e3).toFixed(2):"-"} ms mean, ${(dd.renderUsMax/1e3).toFixed(1)} max`];
            null !== Jd.gpu && pd.push(`gpu ${Jd.gpu.timed?(Jd.gpu.us/Jd.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${Jd.gpu.timed} timed`);
            const Nd = Jd.census;
            pd.push(null === Nd ? "draws none yet" : `draws ${(0,Zd.d)(Nd)} (terrain ${Nd.terrainOpaque}+${Nd.terrainTransparent}, pack ${Nd.terrainPack}, meshes ${Nd.regular+Nd.thin+Nd.line+Nd.text}, sky ${Nd.earthSky+Nd.skyMeshes}, particles ${Nd.particles})`);
            const Wd = null === Jd.gpuBytesBefore ? "" : ` (${Jd.gpuBytes>=Jd.gpuBytesBefore?"+":"-"}${Id(Math.abs(Jd.gpuBytes-Jd.gpuBytesBefore))})`;
            return pd.push(`gpu mem ${Id(Jd.gpuBytes)} MiB${Wd}`), pd.push(`pending ${Jd.pending}`, "terrain " + (Jd.terrainDrawn ? "drawn" : "not drawn yet")), Jd.eventsUnlogged > 0 && pd.push(`${Jd.eventsUnlogged} events unlogged`), pd.join("; ")
          }(this.frames.take(), {
            windowMs: Wd - this.windowStart,
            gpu: ld,
            census: (0, Zd.h)(Nd.api),
            gpuBytes: Qd,
            gpuBytesBefore: this.gpuBytes,
            pending: kd.headerWord(Pd.B.RenderPending),
            terrainDrawn: 0 !== (kd.headerWord(Pd.B.LoadSteps) & Pd.P.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = Qd, this.windowStart = Wd
        }, vd(`${(0,ed.b)(dd)}; client ${Nd.l.client} (${Nd.l.reason})`), setInterval(this.Do, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(dd, Jd, kd) {
        this.session = dd, this.frames.frame(Jd, kd, "drawn" === kd ? dd.headerWord(Pd.B.RenderUs) : 0)
      }
      coreErrors(dd) {
        for (const {
            code: pd,
            detail: Nd
          }
          of dd) {
          var Jd, kd;
          if (pd >= Pd.d.RenderDeviceLost && pd <= Pd.d.RenderSerialLinks) this.event(`render error ${(0,gd.ie)(pd)}${null!==(Jd=null===(kd=(0,od.c)(pd,Nd))||void 0===kd?void 0:kd.words)&&void 0!==Jd?Jd:""} (detail ${Nd})`)
        }
      }
      reload(dd, Jd, kd, pd) {
        this.event(`render reload: ${dd?"webgpu":"gl"} ${kd}, losses ${Jd}${void 0===pd?"":`: ${pd}`}`)
      }
      crashed(dd) {
        let {
          site: Jd,
          error: kd,
          header: pd
        } = dd;
        const Nd = null !== pd && 0 !== pd.lastError ? `, last error ${(0,gd.ie)(pd.lastError)} (detail ${pd.lastErrorDetail})` : "",
          Wd = kd instanceof Error ? `${kd.name}: ${kd.message}` : null === kd || void 0 === kd ? "" : String(kd);
        this.event(`core stopped at ${Jd}${Nd}${Wd&&`: ${Wd}`}`)
      }
      event(dd) {
        const Jd = this.events.admit(dd);
        null !== Jd && vd(Jd)
      }
      restartWindow(dd) {
        this.frames.restart(), this.windowStart = dd;
        const Jd = this.session;
        null === Jd || Jd.isStopped ? this.sampled = null : (this.sampled = Jd, this.gpuTimed = Jd.headerWord(Pd.B.GpuTimed), this.gpuUs = Jd.headerWord(Pd.B.GpuFrameUs))
      }
      logLinks(dd) {
        const Jd = window.bloxdRenderDebug;
        for (const pd of this.links.failures(null === Jd || void 0 === Jd ? void 0 : Jd.linkFailures)) this.event(pd);
        const kd = this.links.summaryLine(null === Jd || void 0 === Jd ? void 0 : Jd.links, dd);
        null !== kd && vd(kd)
      }
      logGrid() {
        var dd;
        const Jd = null === (dd = window.bloxdRenderDebug) || void 0 === dd ? void 0 : dd.gridFaces;
        this.gridLogged || void 0 === Jd || (this.gridLogged = !0, vd(`gl1 grid ${Jd}`))
      }
      logRenderer() {
        var dd, Jd;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const kd = window.bloxdRenderDebug,
          pd = (0, Wd.q)(),
          Nd = void 0 === (null === kd || void 0 === kd ? void 0 : kd.parallelCompile) ? "" : `; parallel compile ${kd.parallelCompile}`;
        vd(`renderer gl ${pd?`${pd.vendor} / ${pd.renderer}`:"(not read)"}; terrain fetch ${null!==(dd=null===kd||void 0===kd?void 0:kd.fetch)&&void 0!==dd?dd:"(not noted)"}${Nd}`), vd(`renderer caps ${null!==(Jd=null===kd||void 0===kd?void 0:kd.caps)&&void 0!==Jd?Jd:"(not noted)"}`)
      }
    }
    let qd = null;

    function Bd(dd) {
      return (0, Qd.h)(), qd ??= new xd(dd), qd
    }
  },
  4569: (dd, Jd, kd) => {
    function pd(dd) {
      if (null === dd) return "backend: none picked (no renderer build)";
      const Jd = dd.adapter ? `${dd.adapter.vendor}/${dd.adapter.architecture}` : "none";
      return `backend ${dd.backend}: reason ${dd.reason}, source ${dd.source}, adapter ${Jd}`
    }
    kd.d(Jd, {
      b: () => pd
    })
  },
  40714: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Pd,
      h: () => Wd,
      k: () => Zd
    });
    var pd = kd(40569),
      Nd = kd(40575);

    function Wd(dd) {
      if (dd.queries.drawCensus() < pd.Gb.BYTES) return null;
      const Jd = dd.memoryData(dd.scratch(), pd.Gb.BYTES, 4, "the draw census");
      return null === Jd ? null : {
        terrainOpaque: pd.Gb.terrainOpaque(Jd, 0),
        terrainTransparent: pd.Gb.terrainTransparent(Jd, 0),
        terrainPack: pd.Gb.terrainPack(Jd, 0),
        earthSky: pd.Gb.earthSky(Jd, 0),
        skyMeshes: pd.Gb.skyMeshes(Jd, 0),
        regular: pd.Gb.regular(Jd, 0),
        thin: pd.Gb.thin(Jd, 0),
        line: pd.Gb.line(Jd, 0),
        text: pd.Gb.text(Jd, 0),
        particles: pd.Gb.particles(Jd, 0),
        terrainParts: pd.Gb.terrainParts(Jd, 0),
        terrainCompiling: pd.Gb.terrainCompiling(Jd, 0)
      }
    }

    function Pd(dd) {
      const {
        terrainOpaque: Jd,
        terrainTransparent: kd,
        earthSky: pd,
        skyMeshes: Nd,
        regular: Wd,
        thin: Pd,
        line: Zd,
        text: gd,
        particles: Cd
      } = dd;
      return Jd + kd + pd + Nd + Wd + Pd + Zd + gd + Cd
    }

    function Zd() {
      const dd = (0, Nd.k)();
      return !0 === (null === dd || void 0 === dd ? void 0 : dd.isCoreRunning) ? function(dd) {
        const Jd = Wd(dd);
        if (null === Jd) return [];
        const {
          terrainOpaque: kd,
          terrainTransparent: pd,
          terrainPack: Nd,
          earthSky: Zd,
          skyMeshes: gd,
          regular: Cd,
          thin: Kd,
          line: od,
          text: ld,
          particles: Qd
        } = Jd;
        return [{
          label: "Drawn",
          value: `${Pd(Jd)}`
        }, {
          label: "Terrain",
          value: `${kd} opaque / ${pd} transparent (${Nd} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${Cd} / ${Kd}`
        }, {
          label: "Text / Lines",
          value: `${ld} / ${od}`
        }, {
          label: "Sky / Particles",
          value: `${Zd+gd} / ${Qd}`
        }]
      }(dd.api) : []
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);