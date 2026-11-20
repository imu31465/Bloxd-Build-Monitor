export const id = 48;
export const ids = [48];
export const modules = {
  42707: (vv, zv, Pv) => {
    Pv.d(zv, {
      startRenderLite: () => Fv
    });
    var hv = Pv(3466),
      Sv = Pv(635),
      ev = Pv(101),
      gv = Pv(4542),
      pv = Pv(40038),
      dv = Pv(4535),
      Nv = Pv(40078),
      lv = Pv(39898),
      Tv = Pv(40244),
      Wv = Pv(2682),
      wv = Pv(4264);
    const av = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class sv {
      constructor() {
        this.failuresLogged = 0, this.summary = void 0, this.summaries = 0, this.summaryAtMs = -1 / 0
      }
      failures(vv) {
        const zv = vv ? vv.split(" ") : [],
          Pv = zv.slice(this.failuresLogged).map((vv => {
            var zv;
            const [Pv, hv] = vv.split(":"), Sv = null !== (zv = av.get(Pv.slice(-1))) && void 0 !== zv ? zv : "";
            return `gl link failed: program row ${parseInt(Pv)}${Sv}, read ${hv} ms after issue`
          }));
        return this.failuresLogged = zv.length, Pv
      }
      summaryLine(vv, zv) {
        const Pv = this.summaries < 10 ? 6e4 : 6e5;
        return void 0 === vv || vv === this.summary || zv - this.summaryAtMs < Pv ? null : (this.summary = vv, this.summaries++, this.summaryAtMs = zv, `gl links: ${vv}`)
      }
    }
    var Cv = Pv(4456);
    class iv {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(vv, zv, Pv) {
        if ("none" !== zv && (this.frames++, "paced" === zv && this.paced++, "drawn" === zv)) {
          if (this.drawn++, this.renderUs += Pv, this.renderUsMax = Math.max(this.renderUsMax, Pv), null !== this.lastDrawnMs) {
            const zv = vv - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, zv), zv >= 50 && this.longGaps++
          }
          this.lastDrawnMs = vv
        }
      }
      restart() {
        this.take(), this.lastDrawnMs = null
      }
      take() {
        const vv = {
          frames: this.frames,
          drawn: this.drawn,
          paced: this.paced,
          gapMaxMs: this.gapMaxMs,
          longGaps: this.longGaps,
          renderUs: this.renderUs,
          renderUsMax: this.renderUsMax
        };
        return this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, vv
      }
    }

    function cv(vv) {
      return (vv / 1048576).toFixed(1)
    }
    class Gv {
      constructor() {
        this.logged = 0, this.seen = new Set, this.unlogged = 0
      }
      admit(vv) {
        return this.logged >= 20 || this.seen.has(vv) ? (this.unlogged++, null) : (this.seen.add(vv), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${vv}` : vv)
      }
      takeUnlogged() {
        const vv = this.unlogged;
        return this.unlogged = 0, vv
      }
    }

    function mv(vv) {
      (0, Wv.i)("renderlite", vv)
    }
    class jv {
      constructor(vv) {
        this.frames = new iv, this.events = new Gv, this.links = new sv, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.visibilityChanged = () => {
          this.restartWindow(performance.now())
        }, this.MT = () => {
          var vv, zv;
          const Pv = this.session,
            Sv = (0, lv.h)(),
            ev = performance.now();
          if (this.logLinks(ev), null === Pv || Pv.isStopped || !0 !== (null === Sv || void 0 === Sv ? void 0 : Sv.isCoreRunning)) return void this.restartWindow(ev);
          if (document.hidden) return;
          if (ev - this.windowStart < 2500) return;
          if (! function(vv) {
              return vv < 12 || (vv - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const dv = Pv.headerWord(gv.A.GpuTimed),
            Tv = Pv.headerWord(gv.A.GpuFrameUs),
            Wv = this.sampled === Pv ? {
              timed: dv - this.gpuTimed >>> 0,
              us: Tv - this.gpuUs >>> 0
            } : null;
          this.sampled = Pv, this.gpuTimed = dv, this.gpuUs = Tv;
          const wv = null !== (vv = null === (zv = (0, Nv.G)((0, hv.C)())) || void 0 === zv ? void 0 : zv.PPv()) && void 0 !== vv ? vv : 0;
          mv(function(vv, zv) {
            const Pv = zv.windowMs / 1e3,
              hv = [`${Math.round(Pv)}s: ${vv.drawn} drawn (${(vv.drawn/Pv).toFixed(1)}/s), ${vv.paced} paced, ${vv.frames-vv.drawn-vv.paced} skipped`, `gap max ${Math.round(vv.gapMaxMs)} ms, ${vv.longGaps} over 50 ms`, `render cpu ${vv.drawn?(vv.renderUs/vv.drawn/1e3).toFixed(2):"-"} ms mean, ${(vv.renderUsMax/1e3).toFixed(1)} max`];
            null !== zv.gpu && hv.push(`gpu ${zv.gpu.timed?(zv.gpu.us/zv.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${zv.gpu.timed} timed`);
            const Sv = zv.census;
            hv.push(null === Sv ? "draws none yet" : `draws ${(0,pv.b)(Sv)} (terrain ${Sv.terrainOpaque}+${Sv.terrainTransparent}, pack ${Sv.terrainPack}, meshes ${Sv.regular+Sv.thin+Sv.line+Sv.text}, sky ${Sv.earthSky+Sv.skyMeshes}, particles ${Sv.particles})`);
            const ev = null === zv.gpuBytesBefore ? "" : ` (${zv.gpuBytes>=zv.gpuBytesBefore?"+":"-"}${cv(Math.abs(zv.gpuBytes-zv.gpuBytesBefore))})`;
            return hv.push(`gpu mem ${cv(zv.gpuBytes)} MiB${ev}`), hv.push(`pending ${zv.pending}`, "terrain " + (zv.terrainDrawn ? "drawn" : "not drawn yet")), zv.eventsUnlogged > 0 && hv.push(`${zv.eventsUnlogged} events unlogged`), hv.join("; ")
          }(this.frames.take(), {
            windowMs: ev - this.windowStart,
            gpu: Wv,
            census: (0, pv.c)(Sv.api),
            gpuBytes: wv,
            gpuBytesBefore: this.gpuBytes,
            pending: Pv.headerWord(gv.A.RenderPending),
            terrainDrawn: 0 !== (Pv.headerWord(gv.A.LoadSteps) & gv.I.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = wv, this.windowStart = ev
        }, mv(`${(0,Cv.b)(vv)}; client ${Sv.m.client} (${Sv.m.reason})`), setInterval(this.MT, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(vv, zv, Pv) {
        this.session = vv, this.frames.frame(zv, Pv, "drawn" === Pv ? vv.headerWord(gv.A.RenderUs) : 0)
      }
      coreErrors(vv) {
        for (const {
            code: hv,
            detail: Sv
          }
          of vv) {
          var zv, Pv;
          if (hv >= gv.f.RenderDeviceLost && hv <= gv.f.RenderSerialLinks) this.event(`render error ${(0,dv.qe)(hv)}${null!==(zv=null===(Pv=(0,Tv.c)(hv,Sv))||void 0===Pv?void 0:Pv.words)&&void 0!==zv?zv:""} (detail ${Sv})`)
        }
      }
      reload(vv, zv, Pv, hv) {
        this.event(`render reload: ${vv?"webgpu":"gl"} ${Pv}, losses ${zv}${void 0===hv?"":`: ${hv}`}`)
      }
      crashed(vv) {
        let {
          site: zv,
          error: Pv,
          header: hv
        } = vv;
        const Sv = null !== hv && 0 !== hv.lastError ? `, last error ${(0,dv.qe)(hv.lastError)} (detail ${hv.lastErrorDetail})` : "",
          ev = Pv instanceof Error ? `${Pv.name}: ${Pv.message}` : null === Pv || void 0 === Pv ? "" : String(Pv);
        this.event(`core stopped at ${zv}${Sv}${ev&&`: ${ev}`}`)
      }
      event(vv) {
        const zv = this.events.admit(vv);
        null !== zv && mv(zv)
      }
      restartWindow(vv) {
        this.frames.restart(), this.windowStart = vv;
        const zv = this.session;
        null === zv || zv.isStopped ? this.sampled = null : (this.sampled = zv, this.gpuTimed = zv.headerWord(gv.A.GpuTimed), this.gpuUs = zv.headerWord(gv.A.GpuFrameUs))
      }
      logLinks(vv) {
        const zv = window.bloxdRenderDebug;
        for (const hv of this.links.failures(null === zv || void 0 === zv ? void 0 : zv.linkFailures)) this.event(hv);
        const Pv = this.links.summaryLine(null === zv || void 0 === zv ? void 0 : zv.links, vv);
        null !== Pv && mv(Pv)
      }
      logRenderer() {
        var vv, zv;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const Pv = window.bloxdRenderDebug,
          hv = (0, ev.s)(),
          Sv = void 0 === (null === Pv || void 0 === Pv ? void 0 : Pv.parallelCompile) ? "" : `; parallel compile ${Pv.parallelCompile}`;
        mv(`renderer gl ${hv?`${hv.vendor} / ${hv.renderer}`:"(not read)"}; terrain fetch ${null!==(vv=null===Pv||void 0===Pv?void 0:Pv.fetch)&&void 0!==vv?vv:"(not noted)"}${Sv}`), mv(`renderer caps ${null!==(zv=null===Pv||void 0===Pv?void 0:Pv.caps)&&void 0!==zv?zv:"(not noted)"}`)
      }
    }
    let fv = null;

    function Fv(vv) {
      return (0, wv.f)(), fv ??= new jv(vv), fv
    }
  },
  4456: (vv, zv, Pv) => {
    function hv(vv) {
      if (null === vv) return "backend: none picked (no renderer build)";
      const zv = vv.adapter ? `${vv.adapter.vendor}/${vv.adapter.architecture}` : "none";
      return `backend ${vv.backend}: reason ${vv.reason}, source ${vv.source}, adapter ${zv}`
    }
    Pv.d(zv, {
      b: () => hv
    })
  },
  40038: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => gv,
      c: () => ev,
      g: () => pv
    });
    var hv = Pv(39889),
      Sv = Pv(39898);

    function ev(vv) {
      if (vv.queries.drawCensus() < hv.zb.BYTES) return null;
      const zv = vv.memoryData(vv.scratch(), hv.zb.BYTES, 4, "the draw census");
      return null === zv ? null : {
        terrainOpaque: hv.zb.terrainOpaque(zv, 0),
        terrainTransparent: hv.zb.terrainTransparent(zv, 0),
        terrainPack: hv.zb.terrainPack(zv, 0),
        earthSky: hv.zb.earthSky(zv, 0),
        skyMeshes: hv.zb.skyMeshes(zv, 0),
        regular: hv.zb.regular(zv, 0),
        thin: hv.zb.thin(zv, 0),
        line: hv.zb.line(zv, 0),
        text: hv.zb.text(zv, 0),
        particles: hv.zb.particles(zv, 0),
        terrainParts: hv.zb.terrainParts(zv, 0),
        terrainCompiling: hv.zb.terrainCompiling(zv, 0)
      }
    }

    function gv(vv) {
      const {
        terrainOpaque: zv,
        terrainTransparent: Pv,
        earthSky: hv,
        skyMeshes: Sv,
        regular: ev,
        thin: gv,
        line: pv,
        text: dv,
        particles: Nv
      } = vv;
      return zv + Pv + hv + Sv + ev + gv + pv + dv + Nv
    }

    function pv() {
      const vv = (0, Sv.h)();
      return !0 === (null === vv || void 0 === vv ? void 0 : vv.isCoreRunning) ? function(vv) {
        const zv = ev(vv);
        if (null === zv) return [];
        const {
          terrainOpaque: Pv,
          terrainTransparent: hv,
          terrainPack: Sv,
          earthSky: pv,
          skyMeshes: dv,
          regular: Nv,
          thin: lv,
          line: Tv,
          text: Wv,
          particles: wv
        } = zv;
        return [{
          label: "Drawn",
          value: `${gv(zv)}`
        }, {
          label: "Terrain",
          value: `${Pv} opaque / ${hv} transparent (${Sv} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${Nv} / ${lv}`
        }, {
          label: "Text / Lines",
          value: `${Wv} / ${Tv}`
        }, {
          label: "Sky / Particles",
          value: `${pv+dv} / ${wv}`
        }]
      }(vv.api) : []
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);