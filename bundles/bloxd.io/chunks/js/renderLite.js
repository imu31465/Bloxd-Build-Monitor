export const id = 48;
export const ids = [48];
export const modules = {
  42670: (bb, cb, sb) => {
    sb.d(cb, {
      startRenderLite: () => Yb
    });
    var kb = sb(3500),
      Wb = sb(649),
      ab = sb(160),
      Tb = sb(4517),
      Ub = sb(40162),
      Ib = sb(4512),
      Hb = sb(40207),
      fb = sb(40014),
      Mb = sb(40378),
      Xb = sb(2680),
      nb = sb(4247);
    const mb = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class lb {
      constructor() {
        this.failuresLogged = 0, this.summary = void 0, this.summaries = 0, this.summaryAtMs = -1 / 0
      }
      failures(bb) {
        const cb = bb ? bb.split(" ") : [],
          sb = cb.slice(this.failuresLogged).map((bb => {
            var cb;
            const [sb, kb] = bb.split(":"), Wb = null !== (cb = mb.get(sb.slice(-1))) && void 0 !== cb ? cb : "";
            return `gl link failed: program row ${parseInt(sb)}${Wb}, read ${kb} ms after issue`
          }));
        return this.failuresLogged = cb.length, sb
      }
      summaryLine(bb, cb) {
        const sb = this.summaries < 10 ? 6e4 : 6e5;
        return void 0 === bb || bb === this.summary || cb - this.summaryAtMs < sb ? null : (this.summary = bb, this.summaries++, this.summaryAtMs = cb, `gl links: ${bb}`)
      }
    }
    var Qb = sb(4430);
    class eb {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(bb, cb, sb) {
        if ("none" !== cb && (this.frames++, "paced" === cb && this.paced++, "drawn" === cb)) {
          if (this.drawn++, this.renderUs += sb, this.renderUsMax = Math.max(this.renderUsMax, sb), null !== this.lastDrawnMs) {
            const cb = bb - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, cb), cb >= 50 && this.longGaps++
          }
          this.lastDrawnMs = bb
        }
      }
      restart() {
        this.take(), this.lastDrawnMs = null
      }
      take() {
        const bb = {
          frames: this.frames,
          drawn: this.drawn,
          paced: this.paced,
          gapMaxMs: this.gapMaxMs,
          longGaps: this.longGaps,
          renderUs: this.renderUs,
          renderUsMax: this.renderUsMax
        };
        return this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, bb
      }
    }

    function Cb(bb) {
      return (bb / 1048576).toFixed(1)
    }
    class Nb {
      constructor() {
        this.logged = 0, this.seen = new Set, this.unlogged = 0
      }
      admit(bb) {
        return this.logged >= 20 || this.seen.has(bb) ? (this.unlogged++, null) : (this.seen.add(bb), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${bb}` : bb)
      }
      takeUnlogged() {
        const bb = this.unlogged;
        return this.unlogged = 0, bb
      }
    }

    function Vb(bb) {
      (0, Xb.m)("renderlite", function(bb) {
        let cb = 0,
          sb = 0,
          kb = 0;
        for (const ab of bb) {
          var Wb;
          const Tb = null !== (Wb = ab.codePointAt(0)) && void 0 !== Wb ? Wb : 0;
          if (cb += Tb < 128 ? 1 : Tb < 2048 ? 2 : Tb < 65536 ? 3 : 4, cb > 375) return `${bb.slice(0,kb)}...`;
          sb += ab.length, cb <= 372 && (kb = sb)
        }
        return bb
      }(bb))
    }
    class Lb {
      constructor(bb) {
        this.frames = new eb, this.events = new Nb, this.links = new lb, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.visibilityChanged = () => {
          this.restartWindow(performance.now())
        }, this.aX = () => {
          var bb, cb;
          const sb = this.session,
            Wb = (0, fb.h)(),
            ab = performance.now();
          if (this.logLinks(ab), null === sb || sb.isStopped || !0 !== (null === Wb || void 0 === Wb ? void 0 : Wb.isCoreRunning)) return void this.restartWindow(ab);
          if (document.hidden) return;
          if (ab - this.windowStart < 2500) return;
          if (! function(bb) {
              return bb < 12 || (bb - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const Ib = sb.headerWord(Tb.y.GpuTimed),
            Mb = sb.headerWord(Tb.y.GpuFrameUs),
            Xb = this.sampled === sb ? {
              timed: Ib - this.gpuTimed >>> 0,
              us: Mb - this.gpuUs >>> 0
            } : null;
          this.sampled = sb, this.gpuTimed = Ib, this.gpuUs = Mb;
          const nb = null !== (bb = null === (cb = (0, Hb.z)((0, kb.G)())) || void 0 === cb ? void 0 : cb.ysb()) && void 0 !== bb ? bb : 0;
          Vb(function(bb, cb) {
            const sb = cb.windowMs / 1e3,
              kb = [`${Math.round(sb)}s: ${bb.drawn} drawn (${(bb.drawn/sb).toFixed(1)}/s), ${bb.paced} paced, ${bb.frames-bb.drawn-bb.paced} skipped`, `gap max ${Math.round(bb.gapMaxMs)} ms, ${bb.longGaps} over 50 ms`, `render cpu ${bb.drawn?(bb.renderUs/bb.drawn/1e3).toFixed(2):"-"} ms mean, ${(bb.renderUsMax/1e3).toFixed(1)} max`];
            null !== cb.gpu && kb.push(`gpu ${cb.gpu.timed?(cb.gpu.us/cb.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${cb.gpu.timed} timed`);
            const Wb = cb.census;
            kb.push(null === Wb ? "draws none yet" : `draws ${(0,Ub.d)(Wb)} (terrain ${Wb.terrainOpaque}+${Wb.terrainTransparent}, pack ${Wb.terrainPack}, meshes ${Wb.regular+Wb.thin+Wb.line+Wb.text}, sky ${Wb.earthSky+Wb.skyMeshes}, particles ${Wb.particles})`);
            const ab = null === cb.gpuBytesBefore ? "" : ` (${cb.gpuBytes>=cb.gpuBytesBefore?"+":"-"}${Cb(Math.abs(cb.gpuBytes-cb.gpuBytesBefore))})`;
            return kb.push(`gpu mem ${Cb(cb.gpuBytes)} MiB${ab}`), kb.push(`pending ${cb.pending}`, "terrain " + (cb.terrainDrawn ? "drawn" : "not drawn yet")), cb.eventsUnlogged > 0 && kb.push(`${cb.eventsUnlogged} events unlogged`), kb.join("; ")
          }(this.frames.take(), {
            windowMs: ab - this.windowStart,
            gpu: Xb,
            census: (0, Ub.g)(Wb.api),
            gpuBytes: nb,
            gpuBytesBefore: this.gpuBytes,
            pending: sb.headerWord(Tb.y.RenderPending),
            terrainDrawn: 0 !== (sb.headerWord(Tb.y.LoadSteps) & Tb.G.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = nb, this.windowStart = ab
        }, Vb(`${(0,Qb.c)(bb)}; client ${Wb.n.client} (${Wb.n.reason})`), setInterval(this.aX, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(bb, cb, sb) {
        this.session = bb, this.frames.frame(cb, sb, "drawn" === sb ? bb.headerWord(Tb.y.RenderUs) : 0)
      }
      coreErrors(bb) {
        for (const {
            code: kb,
            detail: Wb
          }
          of bb) {
          var cb, sb;
          if (kb >= Tb.f.RenderDeviceLost && kb <= Tb.f.RenderSerialLinks) this.event(`render error ${(0,Ib.ge)(kb)}${null!==(cb=null===(sb=(0,Mb.d)(kb,Wb))||void 0===sb?void 0:sb.words)&&void 0!==cb?cb:""} (detail ${Wb})`)
        }
      }
      reload(bb, cb, sb, kb) {
        this.event(`render reload: ${bb?"webgpu":"gl"} ${sb}, losses ${cb}${void 0===kb?"":`: ${kb}`}`)
      }
      crashed(bb) {
        let {
          site: cb,
          error: sb,
          header: kb
        } = bb;
        const Wb = null !== kb && 0 !== kb.lastError ? `, last error ${(0,Ib.ge)(kb.lastError)} (detail ${kb.lastErrorDetail})` : "",
          ab = sb instanceof Error ? `${sb.name}: ${sb.message}` : null === sb || void 0 === sb ? "" : String(sb);
        this.event(`core stopped at ${cb}${Wb}${ab&&`: ${ab}`}`)
      }
      event(bb) {
        const cb = this.events.admit(bb);
        null !== cb && Vb(cb)
      }
      restartWindow(bb) {
        this.frames.restart(), this.windowStart = bb;
        const cb = this.session;
        null === cb || cb.isStopped ? this.sampled = null : (this.sampled = cb, this.gpuTimed = cb.headerWord(Tb.y.GpuTimed), this.gpuUs = cb.headerWord(Tb.y.GpuFrameUs))
      }
      logLinks(bb) {
        const cb = window.bloxdRenderDebug;
        for (const kb of this.links.failures(null === cb || void 0 === cb ? void 0 : cb.linkFailures)) this.event(kb);
        const sb = this.links.summaryLine(null === cb || void 0 === cb ? void 0 : cb.links, bb);
        null !== sb && Vb(sb)
      }
      logRenderer() {
        var bb, cb;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const sb = window.bloxdRenderDebug,
          kb = (0, ab.l)(),
          Wb = void 0 === (null === sb || void 0 === sb ? void 0 : sb.parallelCompile) ? "" : `; parallel compile ${sb.parallelCompile}`;
        Vb(`renderer gl ${kb?`${kb.vendor} / ${kb.renderer}`:"(not read)"}; terrain fetch ${null!==(bb=null===sb||void 0===sb?void 0:sb.fetch)&&void 0!==bb?bb:"(not noted)"}${Wb}`), Vb(`renderer caps ${null!==(cb=null===sb||void 0===sb?void 0:sb.caps)&&void 0!==cb?cb:"(not noted)"}`)
      }
    }
    let ub = null;

    function Yb(bb) {
      return (0, nb.e)(), ub ??= new Lb(bb), ub
    }
  },
  4430: (bb, cb, sb) => {
    function kb(bb) {
      if (null === bb) return "backend: none picked (no renderer build)";
      const cb = bb.adapter ? `${bb.adapter.vendor}/${bb.adapter.architecture}` : "none";
      return `backend ${bb.backend}: reason ${bb.reason}, source ${bb.source}, adapter ${cb}`
    }
    sb.d(cb, {
      c: () => kb
    })
  },
  40162: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb,
      g: () => ab,
      h: () => Ub
    });
    var kb = sb(40002),
      Wb = sb(40014);

    function ab(bb) {
      if (bb.queries.drawCensus() < kb.qb.BYTES) return null;
      const cb = bb.memoryData(bb.scratch(), kb.qb.BYTES, 4, "the draw census");
      return null === cb ? null : {
        terrainOpaque: kb.qb.terrainOpaque(cb, 0),
        terrainTransparent: kb.qb.terrainTransparent(cb, 0),
        terrainPack: kb.qb.terrainPack(cb, 0),
        earthSky: kb.qb.earthSky(cb, 0),
        skyMeshes: kb.qb.skyMeshes(cb, 0),
        regular: kb.qb.regular(cb, 0),
        thin: kb.qb.thin(cb, 0),
        line: kb.qb.line(cb, 0),
        text: kb.qb.text(cb, 0),
        particles: kb.qb.particles(cb, 0)
      }
    }

    function Tb(bb) {
      const {
        terrainOpaque: cb,
        terrainTransparent: sb,
        earthSky: kb,
        skyMeshes: Wb,
        regular: ab,
        thin: Tb,
        line: Ub,
        text: Ib,
        particles: Hb
      } = bb;
      return cb + sb + kb + Wb + ab + Tb + Ub + Ib + Hb
    }

    function Ub() {
      const bb = (0, Wb.h)();
      return !0 === (null === bb || void 0 === bb ? void 0 : bb.isCoreRunning) ? function(bb) {
        const cb = ab(bb);
        if (null === cb) return [];
        const {
          terrainOpaque: sb,
          terrainTransparent: kb,
          terrainPack: Wb,
          earthSky: Ub,
          skyMeshes: Ib,
          regular: Hb,
          thin: fb,
          line: Mb,
          text: Xb,
          particles: nb
        } = cb;
        return [{
          label: "Drawn",
          value: `${Tb(cb)}`
        }, {
          label: "Terrain",
          value: `${sb} opaque / ${kb} transparent (${Wb} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${Hb} / ${fb}`
        }, {
          label: "Text / Lines",
          value: `${Xb} / ${Mb}`
        }, {
          label: "Sky / Particles",
          value: `${Ub+Ib} / ${nb}`
        }]
      }(bb.api) : []
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);