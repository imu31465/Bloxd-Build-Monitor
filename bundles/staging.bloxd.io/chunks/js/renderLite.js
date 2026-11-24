export const id = 49;
export const ids = [49];
export const modules = {
  50974: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      startRenderLite: () => Sk
    });
    var Xk = Ik(2801),
      Tk = Ik(646),
      ik = Ik(123),
      yk = Ik(4799),
      lk = Ik(41047),
      ak = Ik(4797),
      qk = Ik(40726),
      Lk = Ik(40596),
      tk = Ik(40771),
      Zk = Ik(2744),
      jk = Ik(4502),
      ek = Ik(34023);
    const wk = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class Hk {
      constructor(kk) {
        this.label = void 0, this.noted = void 0, this.lines = 0, this.atMs = -1 / 0, this.label = kk
      }
      line(kk, Fk) {
        const Ik = this.lines < 10 ? 6e4 : 6e5;
        return void 0 === kk || kk === this.noted || Fk - this.atMs < Ik ? null : (this.noted = kk, this.lines++, this.atMs = Fk, `${this.label}: ${kk}`)
      }
    }
    class Jk {
      constructor() {
        this.failuresLogged = 0, this.heldLogged = !1, this.links = new Hk("gl links"), this.programUse = new Hk("gl programs")
      }
      failures(kk) {
        const Fk = kk ? kk.split(" ") : [],
          Ik = Fk.slice(this.failuresLogged).map((kk => {
            var Fk;
            const [Ik, Xk] = kk.split(":"), Tk = null !== (Fk = wk.get(Ik.slice(-1))) && void 0 !== Fk ? Fk : "";
            return `gl link failed: program row ${parseInt(Ik)}${Tk}, read ${Xk} ms after issue`
          }));
        return this.failuresLogged = Fk.length, Ik
      }
      heldAtBackstop(kk) {
        return this.heldLogged || void 0 === kk ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${kk}`)
      }
      summaryLines(kk, Fk, Ik, Xk) {
        const Tk = this.links.line(kk, Ik);
        return [Tk && `${Tk}; tab ${(0,ek.e)(Xk)}`, this.programUse.line(Fk, Ik)].filter((kk => null !== kk))
      }
    }
    var xk = Ik(4696);
    class Pk {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(kk, Fk, Ik) {
        if ("none" !== Fk && (this.frames++, "paced" === Fk && this.paced++, "drawn" === Fk)) {
          if (this.drawn++, this.renderUs += Ik, this.renderUsMax = Math.max(this.renderUsMax, Ik), null !== this.lastDrawnMs) {
            const Fk = kk - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, Fk), Fk >= 50 && this.longGaps++
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

    function Kk(kk) {
      return (kk / 1048576).toFixed(1)
    }
    class Qk {
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

    function sk(kk) {
      (0, Zk.g)("renderlite", kk)
    }
    class Vk {
      constructor(kk) {
        this.frames = new Pk, this.events = new Qk, this.programLines = new Jk, this.compileSummary = new Hk("webgpu compiles"), this.hidden = new ek.d, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this.visibilityChanged = () => {
          const kk = performance.now();
          this.hidden.changed(kk), this.restartWindow(kk)
        }, this.Dt = () => {
          var kk, Fk;
          const Ik = this.session,
            Tk = (0, Lk.k)(),
            ik = performance.now();
          if (this.logLinks(ik), this.logGrid(), null === Ik || Ik.isStopped || !0 !== (null === Tk || void 0 === Tk ? void 0 : Tk.isCoreRunning)) return void this.restartWindow(ik);
          if (document.hidden) return;
          if (ik - this.windowStart < 2500) return;
          if (! function(kk) {
              return kk < 12 || (kk - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const ak = Ik.headerWord(yk.F.GpuTimed),
            tk = Ik.headerWord(yk.F.GpuFrameUs),
            Zk = this.sampled === Ik ? {
              timed: ak - this.gpuTimed >>> 0,
              us: tk - this.gpuUs >>> 0
            } : null;
          this.sampled = Ik, this.gpuTimed = ak, this.gpuUs = tk;
          const jk = null !== (kk = null === (Fk = (0, qk.B)((0, Xk.y)())) || void 0 === Fk ? void 0 : Fk.FXk()) && void 0 !== kk ? kk : 0;
          sk(function(kk, Fk) {
            const Ik = Fk.windowMs / 1e3,
              Xk = [`${Math.round(Ik)}s: ${kk.drawn} drawn (${(kk.drawn/Ik).toFixed(1)}/s), ${kk.paced} paced, ${kk.frames-kk.drawn-kk.paced} skipped`, `gap max ${Math.round(kk.gapMaxMs)} ms, ${kk.longGaps} over 50 ms`, `render cpu ${kk.drawn?(kk.renderUs/kk.drawn/1e3).toFixed(2):"-"} ms mean, ${(kk.renderUsMax/1e3).toFixed(1)} max`];
            null !== Fk.gpu && Xk.push(`gpu ${Fk.gpu.timed?(Fk.gpu.us/Fk.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${Fk.gpu.timed} timed`);
            const Tk = Fk.census;
            Xk.push(null === Tk ? "draws none yet" : `draws ${(0,lk.e)(Tk)} (terrain ${Tk.terrainOpaque}+${Tk.terrainTransparent}, pack ${Tk.terrainPack}, meshes ${Tk.regular+Tk.thin+Tk.line+Tk.text}, sky ${Tk.earthSky+Tk.skyMeshes}, particles ${Tk.particles})`), null !== Tk && Tk.ringCopiesMax > 0 && Xk.push(`frame rings ${Tk.ringCopiesMax} copies max, ${Tk.ringBusyWrites} busy writes so far`);
            const ik = null === Fk.gpuBytesBefore ? "" : ` (${Fk.gpuBytes>=Fk.gpuBytesBefore?"+":"-"}${Kk(Math.abs(Fk.gpuBytes-Fk.gpuBytesBefore))})`;
            return Xk.push(`gpu mem ${Kk(Fk.gpuBytes)} MiB${ik}`), Xk.push(`pending ${Fk.pending}`, "terrain " + (Fk.terrainDrawn ? "drawn" : "not drawn yet")), Fk.eventsUnlogged > 0 && Xk.push(`${Fk.eventsUnlogged} events unlogged`), Xk.join("; ")
          }(this.frames.take(), {
            windowMs: ik - this.windowStart,
            gpu: Zk,
            census: (0, lk.g)(Tk.api),
            gpuBytes: jk,
            gpuBytesBefore: this.gpuBytes,
            pending: Ik.headerWord(yk.F.RenderPending),
            terrainDrawn: 0 !== (Ik.headerWord(yk.F.LoadSteps) & yk.W.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = jk, this.windowStart = ik
        }, sk(`${(0,xk.b)(kk)}; client ${Tk.o.client} (${Tk.o.reason})`), setInterval(this.Dt, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(kk, Fk, Ik) {
        this.session = kk, this.frames.frame(Fk, Ik, "drawn" === Ik ? kk.headerWord(yk.F.RenderUs) : 0)
      }
      coreErrors(kk) {
        for (const {
            code: Xk,
            detail: Tk
          }
          of kk) {
          var Fk, Ik;
          if (Xk >= yk.m.RenderDeviceLost && Xk <= yk.m.RenderSerialLinks) this.event(`render error ${(0,ak.ae)(Xk)}${null!==(Fk=null===(Ik=(0,tk.c)(Xk,Tk))||void 0===Ik?void 0:Ik.words)&&void 0!==Fk?Fk:""} (detail ${Tk})`)
        }
      }
      reload(kk, Fk, Ik, Xk) {
        this.event(`render reload: ${kk?"webgpu":"gl"} ${Ik}, losses ${Fk}${void 0===Xk?"":`: ${Xk}`}`)
      }
      crashed(kk) {
        let {
          site: Fk,
          error: Ik,
          header: Xk
        } = kk;
        const Tk = null !== Xk && 0 !== Xk.lastError ? `, last error ${(0,ak.ae)(Xk.lastError)} (detail ${Xk.lastErrorDetail})` : "",
          ik = Ik instanceof Error ? `${Ik.name}: ${Ik.message}` : null === Ik || void 0 === Ik ? "" : String(Ik);
        this.event(`core stopped at ${Fk}${Tk}${ik&&`: ${ik}`}`)
      }
      event(kk) {
        const Fk = this.events.admit(kk);
        null !== Fk && sk(Fk)
      }
      restartWindow(kk) {
        this.frames.restart(), this.windowStart = kk;
        const Fk = this.session;
        null === Fk || Fk.isStopped ? this.sampled = null : (this.sampled = Fk, this.gpuTimed = Fk.headerWord(yk.F.GpuTimed), this.gpuUs = Fk.headerWord(yk.F.GpuFrameUs))
      }
      logLinks(kk) {
        const Fk = window.bloxdRenderDebug;
        for (const Tk of this.programLines.failures(null === Fk || void 0 === Fk ? void 0 : Fk.linkFailures)) this.event(Tk);
        const Ik = this.programLines.heldAtBackstop(null === Fk || void 0 === Fk ? void 0 : Fk.heldAtBackstop);
        null !== Ik && sk(Ik);
        for (const Tk of this.programLines.summaryLines(null === Fk || void 0 === Fk ? void 0 : Fk.links, null === Fk || void 0 === Fk ? void 0 : Fk.programUse, kk, this.hidden.totals(kk))) sk(Tk);
        const Xk = this.compileSummary.line(null === Fk || void 0 === Fk ? void 0 : Fk.compiles, kk);
        null !== Xk && sk(Xk)
      }
      logGrid() {
        var kk;
        const Fk = null === (kk = window.bloxdRenderDebug) || void 0 === kk ? void 0 : kk.gridFaces;
        this.gridLogged || void 0 === Fk || (this.gridLogged = !0, sk(`gl1 grid ${Fk}`))
      }
      logRenderer() {
        var kk, Fk;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const Ik = window.bloxdRenderDebug,
          Xk = (0, ik.p)(),
          Tk = void 0 === (null === Ik || void 0 === Ik ? void 0 : Ik.parallelCompile) ? "" : `; parallel compile ${Ik.parallelCompile}`;
        sk(`renderer gl ${Xk?`${Xk.vendor} / ${Xk.renderer}`:"(not read)"}; terrain fetch ${null!==(kk=null===Ik||void 0===Ik?void 0:Ik.fetch)&&void 0!==kk?kk:"(not noted)"}${Tk}`), sk(`renderer caps ${null!==(Fk=null===Ik||void 0===Ik?void 0:Ik.caps)&&void 0!==Fk?Fk:"(not noted)"}`)
      }
    }
    let zk = null;

    function Sk(kk) {
      return (0, jk.g)(), zk ??= new Vk(kk), zk
    }
  },
  4696: (kk, Fk, Ik) => {
    function Xk(kk) {
      if (null === kk) return "backend: none picked (no renderer build)";
      const Fk = kk.adapter ? `${kk.adapter.vendor}/${kk.adapter.architecture}` : "none";
      return `backend ${kk.backend}: reason ${kk.reason}, source ${kk.source}, adapter ${Fk}`
    }
    Ik.d(Fk, {
      b: () => Xk
    })
  },
  34023: (kk, Fk, Ik) => {
    function Xk(kk) {
      return `hidden ${kk.changes} changes, ${Math.round(kk.hiddenMs)} ms`
    }
    Ik.d(Fk, {
      d: () => Tk,
      e: () => Xk
    });
    class Tk {
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
  41047: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => yk,
      g: () => ik,
      j: () => lk
    });
    var Xk = Ik(40583),
      Tk = Ik(40596);

    function ik(kk) {
      if (kk.queries.drawCensus() < Xk.xb.BYTES) return null;
      const Fk = kk.memoryData(kk.scratch(), Xk.xb.BYTES, 4, "the draw census");
      return null === Fk ? null : {
        terrainOpaque: Xk.xb.terrainOpaque(Fk, 0),
        terrainTransparent: Xk.xb.terrainTransparent(Fk, 0),
        terrainPack: Xk.xb.terrainPack(Fk, 0),
        earthSky: Xk.xb.earthSky(Fk, 0),
        skyMeshes: Xk.xb.skyMeshes(Fk, 0),
        regular: Xk.xb.regular(Fk, 0),
        thin: Xk.xb.thin(Fk, 0),
        line: Xk.xb.line(Fk, 0),
        text: Xk.xb.text(Fk, 0),
        particles: Xk.xb.particles(Fk, 0),
        terrainParts: Xk.xb.terrainParts(Fk, 0),
        terrainCompiling: Xk.xb.terrainCompiling(Fk, 0),
        ringCopiesMax: Xk.xb.ringCopiesMax(Fk, 0),
        ringBusyWrites: Xk.xb.ringBusyWrites(Fk, 0)
      }
    }

    function yk(kk) {
      const {
        terrainOpaque: Fk,
        terrainTransparent: Ik,
        earthSky: Xk,
        skyMeshes: Tk,
        regular: ik,
        thin: yk,
        line: lk,
        text: ak,
        particles: qk
      } = kk;
      return Fk + Ik + Xk + Tk + ik + yk + lk + ak + qk
    }

    function lk() {
      const kk = (0, Tk.k)();
      return !0 === (null === kk || void 0 === kk ? void 0 : kk.isCoreRunning) ? function(kk) {
        const Fk = ik(kk);
        if (null === Fk) return [];
        const {
          terrainOpaque: Ik,
          terrainTransparent: Xk,
          terrainPack: Tk,
          earthSky: lk,
          skyMeshes: ak,
          regular: qk,
          thin: Lk,
          line: tk,
          text: Zk,
          particles: jk
        } = Fk;
        return [{
          label: "Drawn",
          value: `${yk(Fk)}`
        }, {
          label: "Terrain",
          value: `${Ik} opaque / ${Xk} transparent (${Tk} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${qk} / ${Lk}`
        }, {
          label: "Text / Lines",
          value: `${Zk} / ${tk}`
        }, {
          label: "Sky / Particles",
          value: `${lk+ak} / ${jk}`
        }]
      }(kk.api) : []
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);