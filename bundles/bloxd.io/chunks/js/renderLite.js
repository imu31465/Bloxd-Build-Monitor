export const id = 48;
export const ids = [48];
export const modules = {
  42424: (bb, ab, Ub) => {
    Ub.d(ab, {
      startRenderLite: () => fb
    });
    var Ab = Ub(3376),
      Mb = Ub(603),
      Tb = Ub(131),
      Eb = Ub(4485),
      Yb = Ub(39852),
      Bb = Ub(4479),
      eb = Ub(39902),
      vb = Ub(39714),
      Lb = Ub(40056),
      Pb = Ub(2621),
      Xb = Ub(4196);
    const jb = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class Rb {
      constructor() {
        this.failuresLogged = 0, this.summary = void 0, this.summaries = 0, this.summaryAtMs = -1 / 0
      }
      failures(bb) {
        const ab = bb ? bb.split(" ") : [],
          Ub = ab.slice(this.failuresLogged).map((bb => {
            var ab;
            const [Ub, Ab] = bb.split(":"), Mb = null !== (ab = jb.get(Ub.slice(-1))) && void 0 !== ab ? ab : "";
            return `gl link failed: program row ${parseInt(Ub)}${Mb}, read ${Ab} ms after issue`
          }));
        return this.failuresLogged = ab.length, Ub
      }
      summaryLine(bb, ab) {
        const Ub = this.summaries < 10 ? 6e4 : 6e5;
        return void 0 === bb || bb === this.summary || ab - this.summaryAtMs < Ub ? null : (this.summary = bb, this.summaries++, this.summaryAtMs = ab, `gl links: ${bb}`)
      }
    }
    var kb = Ub(4383);
    class yb {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(bb, ab, Ub) {
        if ("none" !== ab && (this.frames++, "paced" === ab && this.paced++, "drawn" === ab)) {
          if (this.drawn++, this.renderUs += Ub, this.renderUsMax = Math.max(this.renderUsMax, Ub), null !== this.lastDrawnMs) {
            const ab = bb - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, ab), ab >= 50 && this.longGaps++
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

    function Zb(bb) {
      return (bb / 1048576).toFixed(1)
    }
    class Db {
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

    function zb(bb) {
      (0, Pb.n)("renderlite", function(bb) {
        let ab = 0,
          Ub = 0,
          Ab = 0;
        for (const Tb of bb) {
          var Mb;
          const Eb = null !== (Mb = Tb.codePointAt(0)) && void 0 !== Mb ? Mb : 0;
          if (ab += Eb < 128 ? 1 : Eb < 2048 ? 2 : Eb < 65536 ? 3 : 4, ab > 375) return `${bb.slice(0,Ab)}...`;
          Ub += Tb.length, ab <= 372 && (Ab = Ub)
        }
        return bb
      }(bb))
    }
    class xb {
      constructor(bb) {
        this.frames = new yb, this.events = new Db, this.links = new Rb, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.visibilityChanged = () => {
          this.restartWindow(performance.now())
        }, this.qL = () => {
          var bb, ab;
          const Ub = this.session,
            Mb = (0, vb.i)(),
            Tb = performance.now();
          if (this.logLinks(Tb), null === Ub || Ub.isStopped || !0 !== (null === Mb || void 0 === Mb ? void 0 : Mb.isCoreRunning)) return void this.restartWindow(Tb);
          if (document.hidden) return;
          if (Tb - this.windowStart < 2500) return;
          if (! function(bb) {
              return bb < 12 || (bb - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const Bb = Ub.headerWord(Eb.F.GpuTimed),
            Lb = Ub.headerWord(Eb.F.GpuFrameUs),
            Pb = this.sampled === Ub ? {
              timed: Bb - this.gpuTimed >>> 0,
              us: Lb - this.gpuUs >>> 0
            } : null;
          this.sampled = Ub, this.gpuTimed = Bb, this.gpuUs = Lb;
          const Xb = null !== (bb = null === (ab = (0, eb.G)((0, Ab.x)())) || void 0 === ab ? void 0 : ab.dUb()) && void 0 !== bb ? bb : 0;
          zb(function(bb, ab) {
            const Ub = ab.windowMs / 1e3,
              Ab = [`${Math.round(Ub)}s: ${bb.drawn} drawn (${(bb.drawn/Ub).toFixed(1)}/s), ${bb.paced} paced, ${bb.frames-bb.drawn-bb.paced} skipped`, `gap max ${Math.round(bb.gapMaxMs)} ms, ${bb.longGaps} over 50 ms`, `render cpu ${bb.drawn?(bb.renderUs/bb.drawn/1e3).toFixed(2):"-"} ms mean, ${(bb.renderUsMax/1e3).toFixed(1)} max`];
            null !== ab.gpu && Ab.push(`gpu ${ab.gpu.timed?(ab.gpu.us/ab.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${ab.gpu.timed} timed`);
            const Mb = ab.census;
            Ab.push(null === Mb ? "draws none yet" : `draws ${(0,Yb.d)(Mb)} (terrain ${Mb.terrainOpaque}+${Mb.terrainTransparent}, pack ${Mb.terrainPack}, meshes ${Mb.regular+Mb.thin+Mb.line+Mb.text}, sky ${Mb.earthSky+Mb.skyMeshes}, particles ${Mb.particles})`);
            const Tb = null === ab.gpuBytesBefore ? "" : ` (${ab.gpuBytes>=ab.gpuBytesBefore?"+":"-"}${Zb(Math.abs(ab.gpuBytes-ab.gpuBytesBefore))})`;
            return Ab.push(`gpu mem ${Zb(ab.gpuBytes)} MiB${Tb}`), Ab.push(`pending ${ab.pending}`, "terrain " + (ab.terrainDrawn ? "drawn" : "not drawn yet")), ab.eventsUnlogged > 0 && Ab.push(`${ab.eventsUnlogged} events unlogged`), Ab.join("; ")
          }(this.frames.take(), {
            windowMs: Tb - this.windowStart,
            gpu: Pb,
            census: (0, Yb.f)(Mb.api),
            gpuBytes: Xb,
            gpuBytesBefore: this.gpuBytes,
            pending: Ub.headerWord(Eb.F.RenderPending),
            terrainDrawn: 0 !== (Ub.headerWord(Eb.F.LoadSteps) & Eb.M.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = Xb, this.windowStart = Tb
        }, zb(`${(0,kb.e)(bb)}; client ${Mb.j.client} (${Mb.j.reason})`), setInterval(this.qL, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(bb, ab, Ub) {
        this.session = bb, this.frames.frame(ab, Ub, "drawn" === Ub ? bb.headerWord(Eb.F.RenderUs) : 0)
      }
      coreErrors(bb) {
        for (const {
            code: Ab,
            detail: Mb
          }
          of bb) {
          var ab, Ub;
          if (Ab >= Eb.h.RenderDeviceLost && Ab <= Eb.h.RenderSerialLinks) this.event(`render error ${(0,Bb.Jd)(Ab)}${null!==(ab=null===(Ub=(0,Lb.c)(Ab,Mb))||void 0===Ub?void 0:Ub.words)&&void 0!==ab?ab:""} (detail ${Mb})`)
        }
      }
      reload(bb, ab, Ub, Ab) {
        this.event(`render reload: ${bb?"webgpu":"gl"} ${Ub}, losses ${ab}${void 0===Ab?"":`: ${Ab}`}`)
      }
      crashed(bb) {
        let {
          site: ab,
          error: Ub,
          header: Ab
        } = bb;
        const Mb = null !== Ab && 0 !== Ab.lastError ? `, last error ${(0,Bb.Jd)(Ab.lastError)} (detail ${Ab.lastErrorDetail})` : "",
          Tb = Ub instanceof Error ? `${Ub.name}: ${Ub.message}` : null === Ub || void 0 === Ub ? "" : String(Ub);
        this.event(`core stopped at ${ab}${Mb}${Tb&&`: ${Tb}`}`)
      }
      event(bb) {
        const ab = this.events.admit(bb);
        null !== ab && zb(ab)
      }
      restartWindow(bb) {
        this.frames.restart(), this.windowStart = bb;
        const ab = this.session;
        null === ab || ab.isStopped ? this.sampled = null : (this.sampled = ab, this.gpuTimed = ab.headerWord(Eb.F.GpuTimed), this.gpuUs = ab.headerWord(Eb.F.GpuFrameUs))
      }
      logLinks(bb) {
        const ab = window.bloxdRenderDebug;
        for (const Ab of this.links.failures(null === ab || void 0 === ab ? void 0 : ab.linkFailures)) this.event(Ab);
        const Ub = this.links.summaryLine(null === ab || void 0 === ab ? void 0 : ab.links, bb);
        null !== Ub && zb(Ub)
      }
      logRenderer() {
        var bb, ab;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const Ub = window.bloxdRenderDebug,
          Ab = (0, Tb.j)(),
          Mb = void 0 === (null === Ub || void 0 === Ub ? void 0 : Ub.parallelCompile) ? "" : `; parallel compile ${Ub.parallelCompile}`;
        zb(`renderer gl ${Ab?`${Ab.vendor} / ${Ab.renderer}`:"(not read)"}; terrain fetch ${null!==(bb=null===Ub||void 0===Ub?void 0:Ub.fetch)&&void 0!==bb?bb:"(not noted)"}${Mb}`), zb(`renderer caps ${null!==(ab=null===Ub||void 0===Ub?void 0:Ub.caps)&&void 0!==ab?ab:"(not noted)"}`)
      }
    }
    let ib = null;

    function fb(bb) {
      return (0, Xb.f)(), ib ??= new xb(bb), ib
    }
  },
  4383: (bb, ab, Ub) => {
    function Ab(bb) {
      if (null === bb) return "backend: none picked (no renderer build)";
      const ab = bb.adapter ? `${bb.adapter.vendor}/${bb.adapter.architecture}` : "none";
      return `backend ${bb.backend}: reason ${bb.reason}, source ${bb.source}, adapter ${ab}`
    }
    Ub.d(ab, {
      e: () => Ab
    })
  },
  39852: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Eb,
      f: () => Tb,
      h: () => Yb
    });
    var Ab = Ub(39701),
      Mb = Ub(39714);

    function Tb(bb) {
      if (bb.queries.drawCensus() < Ab.Cb.BYTES) return null;
      const ab = bb.memoryData(bb.scratch(), Ab.Cb.BYTES, 4, "the draw census");
      return null === ab ? null : {
        terrainOpaque: Ab.Cb.terrainOpaque(ab, 0),
        terrainTransparent: Ab.Cb.terrainTransparent(ab, 0),
        terrainPack: Ab.Cb.terrainPack(ab, 0),
        earthSky: Ab.Cb.earthSky(ab, 0),
        skyMeshes: Ab.Cb.skyMeshes(ab, 0),
        regular: Ab.Cb.regular(ab, 0),
        thin: Ab.Cb.thin(ab, 0),
        line: Ab.Cb.line(ab, 0),
        text: Ab.Cb.text(ab, 0),
        particles: Ab.Cb.particles(ab, 0)
      }
    }

    function Eb(bb) {
      const {
        terrainOpaque: ab,
        terrainTransparent: Ub,
        earthSky: Ab,
        skyMeshes: Mb,
        regular: Tb,
        thin: Eb,
        line: Yb,
        text: Bb,
        particles: eb
      } = bb;
      return ab + Ub + Ab + Mb + Tb + Eb + Yb + Bb + eb
    }

    function Yb() {
      const bb = (0, Mb.i)();
      return !0 === (null === bb || void 0 === bb ? void 0 : bb.isCoreRunning) ? function(bb) {
        const ab = Tb(bb);
        if (null === ab) return [];
        const {
          terrainOpaque: Ub,
          terrainTransparent: Ab,
          terrainPack: Mb,
          earthSky: Yb,
          skyMeshes: Bb,
          regular: eb,
          thin: vb,
          line: Lb,
          text: Pb,
          particles: Xb
        } = ab;
        return [{
          label: "Drawn",
          value: `${Eb(ab)}`
        }, {
          label: "Terrain",
          value: `${Ub} opaque / ${Ab} transparent (${Mb} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${eb} / ${vb}`
        }, {
          label: "Text / Lines",
          value: `${Pb} / ${Lb}`
        }, {
          label: "Sky / Particles",
          value: `${Yb+Bb} / ${Xb}`
        }]
      }(bb.api) : []
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);