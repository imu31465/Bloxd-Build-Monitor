export const id = 48;
export const ids = [48];
export const modules = {
  42709: (bb, ub, hb) => {
    hb.d(ub, {
      startRenderLite: () => rb
    });
    var Bb = hb(2683),
      Ob = hb(599),
      Gb = hb(113),
      Ub = hb(4564),
      Lb = hb(40171),
      Yb = hb(4555),
      Sb = hb(40212),
      ab = hb(40049),
      Hb = hb(40378),
      wb = hb(2633),
      Zb = hb(4270);
    const Xb = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class pb {
      constructor() {
        this.failuresLogged = 0, this.summary = void 0, this.summaries = 0, this.summaryAtMs = -1 / 0
      }
      failures(bb) {
        const ub = bb ? bb.split(" ") : [],
          hb = ub.slice(this.failuresLogged).map((bb => {
            var ub;
            const [hb, Bb] = bb.split(":"), Ob = null !== (ub = Xb.get(hb.slice(-1))) && void 0 !== ub ? ub : "";
            return `gl link failed: program row ${parseInt(hb)}${Ob}, read ${Bb} ms after issue`
          }));
        return this.failuresLogged = ub.length, hb
      }
      summaryLine(bb, ub) {
        const hb = this.summaries < 10 ? 6e4 : 6e5;
        return void 0 === bb || bb === this.summary || ub - this.summaryAtMs < hb ? null : (this.summary = bb, this.summaries++, this.summaryAtMs = ub, `gl links: ${bb}`)
      }
    }
    var ob = hb(4468);
    class Ab {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(bb, ub, hb) {
        if ("none" !== ub && (this.frames++, "paced" === ub && this.paced++, "drawn" === ub)) {
          if (this.drawn++, this.renderUs += hb, this.renderUsMax = Math.max(this.renderUsMax, hb), null !== this.lastDrawnMs) {
            const ub = bb - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, ub), ub >= 50 && this.longGaps++
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

    function lb(bb) {
      return (bb / 1048576).toFixed(1)
    }
    class Kb {
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

    function Wb(bb) {
      (0, wb.l)("renderlite", bb)
    }
    class Cb {
      constructor(bb) {
        this.frames = new Ab, this.events = new Kb, this.links = new pb, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this.visibilityChanged = () => {
          this.restartWindow(performance.now())
        }, this.gH = () => {
          var bb, ub;
          const hb = this.session,
            Ob = (0, ab.l)(),
            Gb = performance.now();
          if (this.logLinks(Gb), this.logGrid(), null === hb || hb.isStopped || !0 !== (null === Ob || void 0 === Ob ? void 0 : Ob.isCoreRunning)) return void this.restartWindow(Gb);
          if (document.hidden) return;
          if (Gb - this.windowStart < 2500) return;
          if (! function(bb) {
              return bb < 12 || (bb - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const Yb = hb.headerWord(Ub.B.GpuTimed),
            Hb = hb.headerWord(Ub.B.GpuFrameUs),
            wb = this.sampled === hb ? {
              timed: Yb - this.gpuTimed >>> 0,
              us: Hb - this.gpuUs >>> 0
            } : null;
          this.sampled = hb, this.gpuTimed = Yb, this.gpuUs = Hb;
          const Zb = null !== (bb = null === (ub = (0, Sb.J)((0, Bb.B)())) || void 0 === ub ? void 0 : ub.YBb()) && void 0 !== bb ? bb : 0;
          Wb(function(bb, ub) {
            const hb = ub.windowMs / 1e3,
              Bb = [`${Math.round(hb)}s: ${bb.drawn} drawn (${(bb.drawn/hb).toFixed(1)}/s), ${bb.paced} paced, ${bb.frames-bb.drawn-bb.paced} skipped`, `gap max ${Math.round(bb.gapMaxMs)} ms, ${bb.longGaps} over 50 ms`, `render cpu ${bb.drawn?(bb.renderUs/bb.drawn/1e3).toFixed(2):"-"} ms mean, ${(bb.renderUsMax/1e3).toFixed(1)} max`];
            null !== ub.gpu && Bb.push(`gpu ${ub.gpu.timed?(ub.gpu.us/ub.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${ub.gpu.timed} timed`);
            const Ob = ub.census;
            Bb.push(null === Ob ? "draws none yet" : `draws ${(0,Lb.b)(Ob)} (terrain ${Ob.terrainOpaque}+${Ob.terrainTransparent}, pack ${Ob.terrainPack}, meshes ${Ob.regular+Ob.thin+Ob.line+Ob.text}, sky ${Ob.earthSky+Ob.skyMeshes}, particles ${Ob.particles})`);
            const Gb = null === ub.gpuBytesBefore ? "" : ` (${ub.gpuBytes>=ub.gpuBytesBefore?"+":"-"}${lb(Math.abs(ub.gpuBytes-ub.gpuBytesBefore))})`;
            return Bb.push(`gpu mem ${lb(ub.gpuBytes)} MiB${Gb}`), Bb.push(`pending ${ub.pending}`, "terrain " + (ub.terrainDrawn ? "drawn" : "not drawn yet")), ub.eventsUnlogged > 0 && Bb.push(`${ub.eventsUnlogged} events unlogged`), Bb.join("; ")
          }(this.frames.take(), {
            windowMs: Gb - this.windowStart,
            gpu: wb,
            census: (0, Lb.d)(Ob.api),
            gpuBytes: Zb,
            gpuBytesBefore: this.gpuBytes,
            pending: hb.headerWord(Ub.B.RenderPending),
            terrainDrawn: 0 !== (hb.headerWord(Ub.B.LoadSteps) & Ub.N.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = Zb, this.windowStart = Gb
        }, Wb(`${(0,ob.e)(bb)}; client ${Ob.f.client} (${Ob.f.reason})`), setInterval(this.gH, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(bb, ub, hb) {
        this.session = bb, this.frames.frame(ub, hb, "drawn" === hb ? bb.headerWord(Ub.B.RenderUs) : 0)
      }
      coreErrors(bb) {
        for (const {
            code: Bb,
            detail: Ob
          }
          of bb) {
          var ub, hb;
          if (Bb >= Ub.f.RenderDeviceLost && Bb <= Ub.f.RenderSerialLinks) this.event(`render error ${(0,Yb.Md)(Bb)}${null!==(ub=null===(hb=(0,Hb.c)(Bb,Ob))||void 0===hb?void 0:hb.words)&&void 0!==ub?ub:""} (detail ${Ob})`)
        }
      }
      reload(bb, ub, hb, Bb) {
        this.event(`render reload: ${bb?"webgpu":"gl"} ${hb}, losses ${ub}${void 0===Bb?"":`: ${Bb}`}`)
      }
      crashed(bb) {
        let {
          site: ub,
          error: hb,
          header: Bb
        } = bb;
        const Ob = null !== Bb && 0 !== Bb.lastError ? `, last error ${(0,Yb.Md)(Bb.lastError)} (detail ${Bb.lastErrorDetail})` : "",
          Gb = hb instanceof Error ? `${hb.name}: ${hb.message}` : null === hb || void 0 === hb ? "" : String(hb);
        this.event(`core stopped at ${ub}${Ob}${Gb&&`: ${Gb}`}`)
      }
      event(bb) {
        const ub = this.events.admit(bb);
        null !== ub && Wb(ub)
      }
      restartWindow(bb) {
        this.frames.restart(), this.windowStart = bb;
        const ub = this.session;
        null === ub || ub.isStopped ? this.sampled = null : (this.sampled = ub, this.gpuTimed = ub.headerWord(Ub.B.GpuTimed), this.gpuUs = ub.headerWord(Ub.B.GpuFrameUs))
      }
      logLinks(bb) {
        const ub = window.bloxdRenderDebug;
        for (const Bb of this.links.failures(null === ub || void 0 === ub ? void 0 : ub.linkFailures)) this.event(Bb);
        const hb = this.links.summaryLine(null === ub || void 0 === ub ? void 0 : ub.links, bb);
        null !== hb && Wb(hb)
      }
      logGrid() {
        var bb;
        const ub = null === (bb = window.bloxdRenderDebug) || void 0 === bb ? void 0 : bb.gridFaces;
        this.gridLogged || void 0 === ub || (this.gridLogged = !0, Wb(`gl1 grid ${ub}`))
      }
      logRenderer() {
        var bb, ub;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const hb = window.bloxdRenderDebug,
          Bb = (0, Gb.o)(),
          Ob = void 0 === (null === hb || void 0 === hb ? void 0 : hb.parallelCompile) ? "" : `; parallel compile ${hb.parallelCompile}`;
        Wb(`renderer gl ${Bb?`${Bb.vendor} / ${Bb.renderer}`:"(not read)"}; terrain fetch ${null!==(bb=null===hb||void 0===hb?void 0:hb.fetch)&&void 0!==bb?bb:"(not noted)"}${Ob}`), Wb(`renderer caps ${null!==(ub=null===hb||void 0===hb?void 0:hb.caps)&&void 0!==ub?ub:"(not noted)"}`)
      }
    }
    let db = null;

    function rb(bb) {
      return (0, Zb.e)(), db ??= new Cb(bb), db
    }
  },
  4468: (bb, ub, hb) => {
    function Bb(bb) {
      if (null === bb) return "backend: none picked (no renderer build)";
      const ub = bb.adapter ? `${bb.adapter.vendor}/${bb.adapter.architecture}` : "none";
      return `backend ${bb.backend}: reason ${bb.reason}, source ${bb.source}, adapter ${ub}`
    }
    hb.d(ub, {
      e: () => Bb
    })
  },
  40171: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub,
      d: () => Gb,
      f: () => Lb
    });
    var Bb = hb(40035),
      Ob = hb(40049);

    function Gb(bb) {
      if (bb.queries.drawCensus() < Bb.vb.BYTES) return null;
      const ub = bb.memoryData(bb.scratch(), Bb.vb.BYTES, 4, "the draw census");
      return null === ub ? null : {
        terrainOpaque: Bb.vb.terrainOpaque(ub, 0),
        terrainTransparent: Bb.vb.terrainTransparent(ub, 0),
        terrainPack: Bb.vb.terrainPack(ub, 0),
        earthSky: Bb.vb.earthSky(ub, 0),
        skyMeshes: Bb.vb.skyMeshes(ub, 0),
        regular: Bb.vb.regular(ub, 0),
        thin: Bb.vb.thin(ub, 0),
        line: Bb.vb.line(ub, 0),
        text: Bb.vb.text(ub, 0),
        particles: Bb.vb.particles(ub, 0),
        terrainParts: Bb.vb.terrainParts(ub, 0),
        terrainCompiling: Bb.vb.terrainCompiling(ub, 0)
      }
    }

    function Ub(bb) {
      const {
        terrainOpaque: ub,
        terrainTransparent: hb,
        earthSky: Bb,
        skyMeshes: Ob,
        regular: Gb,
        thin: Ub,
        line: Lb,
        text: Yb,
        particles: Sb
      } = bb;
      return ub + hb + Bb + Ob + Gb + Ub + Lb + Yb + Sb
    }

    function Lb() {
      const bb = (0, Ob.l)();
      return !0 === (null === bb || void 0 === bb ? void 0 : bb.isCoreRunning) ? function(bb) {
        const ub = Gb(bb);
        if (null === ub) return [];
        const {
          terrainOpaque: hb,
          terrainTransparent: Bb,
          terrainPack: Ob,
          earthSky: Lb,
          skyMeshes: Yb,
          regular: Sb,
          thin: ab,
          line: Hb,
          text: wb,
          particles: Zb
        } = ub;
        return [{
          label: "Drawn",
          value: `${Ub(ub)}`
        }, {
          label: "Terrain",
          value: `${hb} opaque / ${Bb} transparent (${Ob} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${Sb} / ${ab}`
        }, {
          label: "Text / Lines",
          value: `${wb} / ${Hb}`
        }, {
          label: "Sky / Particles",
          value: `${Lb+Yb} / ${Zb}`
        }]
      }(bb.api) : []
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);