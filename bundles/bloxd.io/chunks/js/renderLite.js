export const id = 49;
export const ids = [49];
export const modules = {
  50550: (kk, ek, ik) => {
    ik.d(ek, {
      startRenderLite: () => sk
    });
    var Dk = ik(2821),
      fk = ik(610),
      Sk = ik(129),
      bk = ik(4741),
      rk = ik(40608),
      Pk = ik(4735),
      mk = ik(40297),
      Mk = ik(40165),
      Kk = ik(40337),
      xk = ik(2752),
      nk = ik(4449),
      Uk = ik(33646);
    const Hk = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class wk {
      constructor(kk) {
        this.label = void 0, this.noted = void 0, this.lines = 0, this.atMs = -1 / 0, this.label = kk
      }
      line(kk, ek) {
        const ik = this.lines < 10 ? 6e4 : 6e5;
        return void 0 === kk || kk === this.noted || ek - this.atMs < ik ? null : (this.noted = kk, this.lines++, this.atMs = ek, `${this.label}: ${kk}`)
      }
    }
    class lk {
      constructor() {
        this.failuresLogged = 0, this.heldLogged = !1, this.links = new wk("gl links"), this.programUse = new wk("gl programs")
      }
      failures(kk) {
        const ek = kk ? kk.split(" ") : [],
          ik = ek.slice(this.failuresLogged).map((kk => {
            var ek;
            const [ik, Dk] = kk.split(":"), fk = null !== (ek = Hk.get(ik.slice(-1))) && void 0 !== ek ? ek : "";
            return `gl link failed: program row ${parseInt(ik)}${fk}, read ${Dk} ms after issue`
          }));
        return this.failuresLogged = ek.length, ik
      }
      heldAtBackstop(kk) {
        return this.heldLogged || void 0 === kk ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${kk}`)
      }
      summaryLines(kk, ek, ik, Dk) {
        const fk = this.links.line(kk, ik);
        return [fk && `${fk}; tab ${(0,Uk.i)(Dk)}`, this.programUse.line(ek, ik)].filter((kk => null !== kk))
      }
    }
    var pk = ik(4637);
    class yk {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(kk, ek, ik) {
        if ("none" !== ek && (this.frames++, "paced" === ek && this.paced++, "drawn" === ek)) {
          if (this.drawn++, this.renderUs += ik, this.renderUsMax = Math.max(this.renderUsMax, ik), null !== this.lastDrawnMs) {
            const ek = kk - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, ek), ek >= 50 && this.longGaps++
          }
          this.lastDrawnMs = kk
        }
      }
      restart() {
        this.take(), this.lastDrawnMs = null
      }
      take() {
        const kk = {
          frames: this.frames,
          drawn: this.drawn,
          paced: this.paced,
          gapMaxMs: this.gapMaxMs,
          longGaps: this.longGaps,
          renderUs: this.renderUs,
          renderUsMax: this.renderUsMax
        };
        return this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, kk
      }
    }

    function Yk(kk) {
      return (kk / 1048576).toFixed(1)
    }
    class Lk {
      constructor() {
        this.logged = 0, this.seen = new Set, this.unlogged = 0
      }
      admit(kk) {
        return this.logged >= 20 || this.seen.has(kk) ? (this.unlogged++, null) : (this.seen.add(kk), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${kk}` : kk)
      }
      takeUnlogged() {
        const kk = this.unlogged;
        return this.unlogged = 0, kk
      }
    }

    function Ck(kk) {
      (0, xk.l)("renderlite", kk)
    }
    class Ak {
      constructor(kk) {
        this.frames = new yk, this.events = new Lk, this.programLines = new lk, this.compileSummary = new wk("webgpu compiles"), this.hidden = new Uk.e, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this.visibilityChanged = () => {
          const kk = performance.now();
          this.hidden.changed(kk), this.restartWindow(kk)
        }, this.Px = () => {
          var kk, ek;
          const ik = this.session,
            fk = (0, Mk.g)(),
            Sk = performance.now();
          if (this.logLinks(Sk), this.logGrid(), null === ik || ik.isStopped || !0 !== (null === fk || void 0 === fk ? void 0 : fk.isCoreRunning)) return void this.restartWindow(Sk);
          if (document.hidden) return;
          if (Sk - this.windowStart < 2500) return;
          if (! function(kk) {
              return kk < 12 || (kk - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const Pk = ik.headerWord(bk.L.GpuTimed),
            Kk = ik.headerWord(bk.L.GpuFrameUs),
            xk = this.sampled === ik ? {
              timed: Pk - this.gpuTimed >>> 0,
              us: Kk - this.gpuUs >>> 0
            } : null;
          this.sampled = ik, this.gpuTimed = Pk, this.gpuUs = Kk;
          const nk = null !== (kk = null === (ek = (0, mk.I)((0, Dk.H)())) || void 0 === ek ? void 0 : ek.Wik()) && void 0 !== kk ? kk : 0;
          Ck(function(kk, ek) {
            const ik = ek.windowMs / 1e3,
              Dk = [`${Math.round(ik)}s: ${kk.drawn} drawn (${(kk.drawn/ik).toFixed(1)}/s), ${kk.paced} paced, ${kk.frames-kk.drawn-kk.paced} skipped`, `gap max ${Math.round(kk.gapMaxMs)} ms, ${kk.longGaps} over 50 ms`, `render cpu ${kk.drawn?(kk.renderUs/kk.drawn/1e3).toFixed(2):"-"} ms mean, ${(kk.renderUsMax/1e3).toFixed(1)} max`];
            null !== ek.gpu && Dk.push(`gpu ${ek.gpu.timed?(ek.gpu.us/ek.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${ek.gpu.timed} timed`);
            const fk = ek.census;
            Dk.push(null === fk ? "draws none yet" : `draws ${(0,rk.b)(fk)} (terrain ${fk.terrainOpaque}+${fk.terrainTransparent}, pack ${fk.terrainPack}, meshes ${fk.regular+fk.thin+fk.line+fk.text}, sky ${fk.earthSky+fk.skyMeshes}, particles ${fk.particles})`), null !== fk && fk.ringCopiesMax > 0 && Dk.push(`frame rings ${fk.ringCopiesMax} copies max, ${fk.ringBusyWrites} busy writes so far`);
            const Sk = null === ek.gpuBytesBefore ? "" : ` (${ek.gpuBytes>=ek.gpuBytesBefore?"+":"-"}${Yk(Math.abs(ek.gpuBytes-ek.gpuBytesBefore))})`;
            return Dk.push(`gpu mem ${Yk(ek.gpuBytes)} MiB${Sk}`), Dk.push(`pending ${ek.pending}`, "terrain " + (ek.terrainDrawn ? "drawn" : "not drawn yet")), ek.eventsUnlogged > 0 && Dk.push(`${ek.eventsUnlogged} events unlogged`), Dk.join("; ")
          }(this.frames.take(), {
            windowMs: Sk - this.windowStart,
            gpu: xk,
            census: (0, rk.f)(fk.api),
            gpuBytes: nk,
            gpuBytesBefore: this.gpuBytes,
            pending: ik.headerWord(bk.L.RenderPending),
            terrainDrawn: 0 !== (ik.headerWord(bk.L.LoadSteps) & bk._.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = nk, this.windowStart = Sk
        }, Ck(`${(0,pk.d)(kk)}; client ${fk.l.client} (${fk.l.reason})`), setInterval(this.Px, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(kk, ek, ik) {
        this.session = kk, this.frames.frame(ek, ik, "drawn" === ik ? kk.headerWord(bk.L.RenderUs) : 0)
      }
      coreErrors(kk) {
        for (const {
            code: Dk,
            detail: fk
          }
          of kk) {
          var ek, ik;
          if (Dk >= bk.p.RenderDeviceLost && Dk <= bk.p.RenderSerialLinks) this.event(`render error ${(0,Pk.le)(Dk)}${null!==(ek=null===(ik=(0,Kk.e)(Dk,fk))||void 0===ik?void 0:ik.words)&&void 0!==ek?ek:""} (detail ${fk})`)
        }
      }
      reload(kk, ek, ik, Dk) {
        this.event(`render reload: ${kk?"webgpu":"gl"} ${ik}, losses ${ek}${void 0===Dk?"":`: ${Dk}`}`)
      }
      crashed(kk) {
        let {
          site: ek,
          error: ik,
          header: Dk
        } = kk;
        const fk = null !== Dk && 0 !== Dk.lastError ? `, last error ${(0,Pk.le)(Dk.lastError)} (detail ${Dk.lastErrorDetail})` : "",
          Sk = ik instanceof Error ? `${ik.name}: ${ik.message}` : null === ik || void 0 === ik ? "" : String(ik);
        this.event(`core stopped at ${ek}${fk}${Sk&&`: ${Sk}`}`)
      }
      event(kk) {
        const ek = this.events.admit(kk);
        null !== ek && Ck(ek)
      }
      restartWindow(kk) {
        this.frames.restart(), this.windowStart = kk;
        const ek = this.session;
        null === ek || ek.isStopped ? this.sampled = null : (this.sampled = ek, this.gpuTimed = ek.headerWord(bk.L.GpuTimed), this.gpuUs = ek.headerWord(bk.L.GpuFrameUs))
      }
      logLinks(kk) {
        const ek = window.bloxdRenderDebug;
        for (const fk of this.programLines.failures(null === ek || void 0 === ek ? void 0 : ek.linkFailures)) this.event(fk);
        const ik = this.programLines.heldAtBackstop(null === ek || void 0 === ek ? void 0 : ek.heldAtBackstop);
        null !== ik && Ck(ik);
        for (const fk of this.programLines.summaryLines(null === ek || void 0 === ek ? void 0 : ek.links, null === ek || void 0 === ek ? void 0 : ek.programUse, kk, this.hidden.totals(kk))) Ck(fk);
        const Dk = this.compileSummary.line(null === ek || void 0 === ek ? void 0 : ek.compiles, kk);
        null !== Dk && Ck(Dk)
      }
      logGrid() {
        var kk;
        const ek = null === (kk = window.bloxdRenderDebug) || void 0 === kk ? void 0 : kk.gridFaces;
        this.gridLogged || void 0 === ek || (this.gridLogged = !0, Ck(`gl1 grid ${ek}`))
      }
      logRenderer() {
        var kk, ek;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const ik = window.bloxdRenderDebug,
          Dk = (0, Sk.p)(),
          fk = void 0 === (null === ik || void 0 === ik ? void 0 : ik.parallelCompile) ? "" : `; parallel compile ${ik.parallelCompile}`;
        Ck(`renderer gl ${Dk?`${Dk.vendor} / ${Dk.renderer}`:"(not read)"}; terrain fetch ${null!==(kk=null===ik||void 0===ik?void 0:ik.fetch)&&void 0!==kk?kk:"(not noted)"}${fk}`), Ck(`renderer caps ${null!==(ek=null===ik||void 0===ik?void 0:ik.caps)&&void 0!==ek?ek:"(not noted)"}`)
      }
    }
    let jk = null;

    function sk(kk) {
      return (0, nk.h)(), jk ??= new Ak(kk), jk
    }
  },
  4637: (kk, ek, ik) => {
    function Dk(kk) {
      if (null === kk) return "backend: none picked (no renderer build)";
      const ek = kk.adapter ? `${kk.adapter.vendor}/${kk.adapter.architecture}` : "none";
      return `backend ${kk.backend}: reason ${kk.reason}, source ${kk.source}, adapter ${ek}`
    }
    ik.d(ek, {
      d: () => Dk
    })
  },
  33646: (kk, ek, ik) => {
    function Dk(kk) {
      return `hidden ${kk.changes} changes, ${Math.round(kk.hiddenMs)} ms`
    }
    ik.d(ek, {
      e: () => fk,
      i: () => Dk
    });
    class fk {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(kk) {
        this.changes++, document.hidden ? this.hiddenSinceMs = kk : this.hiddenSinceMs >= 0 && (this.hiddenMs += kk - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(kk) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? kk - this.hiddenSinceMs : 0)
        }
      }
    }
  },
  40608: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk,
      f: () => Sk,
      i: () => rk
    });
    var Dk = ik(40157),
      fk = ik(40165);

    function Sk(kk) {
      if (kk.queries.drawCensus() < Dk.qb.BYTES) return null;
      const ek = kk.memoryData(kk.scratch(), Dk.qb.BYTES, 4, "the draw census");
      return null === ek ? null : {
        terrainOpaque: Dk.qb.terrainOpaque(ek, 0),
        terrainTransparent: Dk.qb.terrainTransparent(ek, 0),
        terrainPack: Dk.qb.terrainPack(ek, 0),
        earthSky: Dk.qb.earthSky(ek, 0),
        skyMeshes: Dk.qb.skyMeshes(ek, 0),
        regular: Dk.qb.regular(ek, 0),
        thin: Dk.qb.thin(ek, 0),
        line: Dk.qb.line(ek, 0),
        text: Dk.qb.text(ek, 0),
        particles: Dk.qb.particles(ek, 0),
        terrainParts: Dk.qb.terrainParts(ek, 0),
        terrainCompiling: Dk.qb.terrainCompiling(ek, 0),
        ringCopiesMax: Dk.qb.ringCopiesMax(ek, 0),
        ringBusyWrites: Dk.qb.ringBusyWrites(ek, 0)
      }
    }

    function bk(kk) {
      const {
        terrainOpaque: ek,
        terrainTransparent: ik,
        earthSky: Dk,
        skyMeshes: fk,
        regular: Sk,
        thin: bk,
        line: rk,
        text: Pk,
        particles: mk
      } = kk;
      return ek + ik + Dk + fk + Sk + bk + rk + Pk + mk
    }

    function rk() {
      const kk = (0, fk.g)();
      return !0 === (null === kk || void 0 === kk ? void 0 : kk.isCoreRunning) ? function(kk) {
        const ek = Sk(kk);
        if (null === ek) return [];
        const {
          terrainOpaque: ik,
          terrainTransparent: Dk,
          terrainPack: fk,
          earthSky: rk,
          skyMeshes: Pk,
          regular: mk,
          thin: Mk,
          line: Kk,
          text: xk,
          particles: nk
        } = ek;
        return [{
          label: "Drawn",
          value: `${bk(ek)}`
        }, {
          label: "Terrain",
          value: `${ik} opaque / ${Dk} transparent (${fk} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${mk} / ${Mk}`
        }, {
          label: "Text / Lines",
          value: `${xk} / ${Kk}`
        }, {
          label: "Sky / Particles",
          value: `${rk+Pk} / ${nk}`
        }]
      }(kk.api) : []
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);