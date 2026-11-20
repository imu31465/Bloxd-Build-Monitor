export const id = 48;
export const ids = [48];
export const modules = {
  42773: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      startRenderLite: () => Ok
    });
    var Rk = Bk(3502),
      tk = Bk(624),
      ak = Bk(130),
      Xk = Bk(4531),
      bk = Bk(40147),
      wk = Bk(4524),
      dk = Bk(40189),
      sk = Bk(40015),
      Vk = Bk(40364),
      Jk = Bk(2711),
      Ak = Bk(4252);
    const ek = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class yk {
      constructor() {
        this.failuresLogged = 0, this.summary = void 0, this.summaries = 0, this.summaryAtMs = -1 / 0
      }
      failures(kk) {
        const Fk = kk ? kk.split(" ") : [],
          Bk = Fk.slice(this.failuresLogged).map((kk => {
            var Fk;
            const [Bk, Rk] = kk.split(":"), tk = null !== (Fk = ek.get(Bk.slice(-1))) && void 0 !== Fk ? Fk : "";
            return `gl link failed: program row ${parseInt(Bk)}${tk}, read ${Rk} ms after issue`
          }));
        return this.failuresLogged = Fk.length, Bk
      }
      summaryLine(kk, Fk) {
        const Bk = this.summaries < 10 ? 6e4 : 6e5;
        return void 0 === kk || kk === this.summary || Fk - this.summaryAtMs < Bk ? null : (this.summary = kk, this.summaries++, this.summaryAtMs = Fk, `gl links: ${kk}`)
      }
    }
    var fk = Bk(4428);
    class mk {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(kk, Fk, Bk) {
        if ("none" !== Fk && (this.frames++, "paced" === Fk && this.paced++, "drawn" === Fk)) {
          if (this.drawn++, this.renderUs += Bk, this.renderUsMax = Math.max(this.renderUsMax, Bk), null !== this.lastDrawnMs) {
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

    function Wk(kk) {
      return (kk / 1048576).toFixed(1)
    }
    class vk {
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

    function ik(kk) {
      (0, Jk.k)("renderlite", function(kk) {
        let Fk = 0,
          Bk = 0,
          Rk = 0;
        for (const ak of kk) {
          var tk;
          const Xk = null !== (tk = ak.codePointAt(0)) && void 0 !== tk ? tk : 0;
          if (Fk += Xk < 128 ? 1 : Xk < 2048 ? 2 : Xk < 65536 ? 3 : 4, Fk > 375) return `${kk.slice(0,Rk)}...`;
          Bk += ak.length, Fk <= 372 && (Rk = Bk)
        }
        return kk
      }(kk))
    }
    class Yk {
      constructor(kk) {
        this.frames = new mk, this.events = new vk, this.links = new yk, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.visibilityChanged = () => {
          this.restartWindow(performance.now())
        }, this.yJ = () => {
          var kk, Fk;
          const Bk = this.session,
            tk = (0, sk.g)(),
            ak = performance.now();
          if (this.logLinks(ak), null === Bk || Bk.isStopped || !0 !== (null === tk || void 0 === tk ? void 0 : tk.isCoreRunning)) return void this.restartWindow(ak);
          if (document.hidden) return;
          if (ak - this.windowStart < 2500) return;
          if (! function(kk) {
              return kk < 12 || (kk - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const wk = Bk.headerWord(Xk.z.GpuTimed),
            Vk = Bk.headerWord(Xk.z.GpuFrameUs),
            Jk = this.sampled === Bk ? {
              timed: wk - this.gpuTimed >>> 0,
              us: Vk - this.gpuUs >>> 0
            } : null;
          this.sampled = Bk, this.gpuTimed = wk, this.gpuUs = Vk;
          const Ak = null !== (kk = null === (Fk = (0, dk.C)((0, Rk.y)())) || void 0 === Fk ? void 0 : Fk.GBk()) && void 0 !== kk ? kk : 0;
          ik(function(kk, Fk) {
            const Bk = Fk.windowMs / 1e3,
              Rk = [`${Math.round(Bk)}s: ${kk.drawn} drawn (${(kk.drawn/Bk).toFixed(1)}/s), ${kk.paced} paced, ${kk.frames-kk.drawn-kk.paced} skipped`, `gap max ${Math.round(kk.gapMaxMs)} ms, ${kk.longGaps} over 50 ms`, `render cpu ${kk.drawn?(kk.renderUs/kk.drawn/1e3).toFixed(2):"-"} ms mean, ${(kk.renderUsMax/1e3).toFixed(1)} max`];
            null !== Fk.gpu && Rk.push(`gpu ${Fk.gpu.timed?(Fk.gpu.us/Fk.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${Fk.gpu.timed} timed`);
            const tk = Fk.census;
            Rk.push(null === tk ? "draws none yet" : `draws ${(0,bk.e)(tk)} (terrain ${tk.terrainOpaque}+${tk.terrainTransparent}, pack ${tk.terrainPack}, meshes ${tk.regular+tk.thin+tk.line+tk.text}, sky ${tk.earthSky+tk.skyMeshes}, particles ${tk.particles})`);
            const ak = null === Fk.gpuBytesBefore ? "" : ` (${Fk.gpuBytes>=Fk.gpuBytesBefore?"+":"-"}${Wk(Math.abs(Fk.gpuBytes-Fk.gpuBytesBefore))})`;
            return Rk.push(`gpu mem ${Wk(Fk.gpuBytes)} MiB${ak}`), Rk.push(`pending ${Fk.pending}`, "terrain " + (Fk.terrainDrawn ? "drawn" : "not drawn yet")), Fk.eventsUnlogged > 0 && Rk.push(`${Fk.eventsUnlogged} events unlogged`), Rk.join("; ")
          }(this.frames.take(), {
            windowMs: ak - this.windowStart,
            gpu: Jk,
            census: (0, bk.h)(tk.api),
            gpuBytes: Ak,
            gpuBytesBefore: this.gpuBytes,
            pending: Bk.headerWord(Xk.z.RenderPending),
            terrainDrawn: 0 !== (Bk.headerWord(Xk.z.LoadSteps) & Xk.F.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = Ak, this.windowStart = ak
        }, ik(`${(0,fk.c)(kk)}; client ${tk.i.client} (${tk.i.reason})`), setInterval(this.yJ, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(kk, Fk, Bk) {
        this.session = kk, this.frames.frame(Fk, Bk, "drawn" === Bk ? kk.headerWord(Xk.z.RenderUs) : 0)
      }
      coreErrors(kk) {
        for (const {
            code: Rk,
            detail: tk
          }
          of kk) {
          var Fk, Bk;
          if (Rk >= Xk.g.RenderDeviceLost && Rk <= Xk.g.RenderSerialLinks) this.event(`render error ${(0,wk.hd)(Rk)}${null!==(Fk=null===(Bk=(0,Vk.e)(Rk,tk))||void 0===Bk?void 0:Bk.words)&&void 0!==Fk?Fk:""} (detail ${tk})`)
        }
      }
      reload(kk, Fk, Bk, Rk) {
        this.event(`render reload: ${kk?"webgpu":"gl"} ${Bk}, losses ${Fk}${void 0===Rk?"":`: ${Rk}`}`)
      }
      crashed(kk) {
        let {
          site: Fk,
          error: Bk,
          header: Rk
        } = kk;
        const tk = null !== Rk && 0 !== Rk.lastError ? `, last error ${(0,wk.hd)(Rk.lastError)} (detail ${Rk.lastErrorDetail})` : "",
          ak = Bk instanceof Error ? `${Bk.name}: ${Bk.message}` : null === Bk || void 0 === Bk ? "" : String(Bk);
        this.event(`core stopped at ${Fk}${tk}${ak&&`: ${ak}`}`)
      }
      event(kk) {
        const Fk = this.events.admit(kk);
        null !== Fk && ik(Fk)
      }
      restartWindow(kk) {
        this.frames.restart(), this.windowStart = kk;
        const Fk = this.session;
        null === Fk || Fk.isStopped ? this.sampled = null : (this.sampled = Fk, this.gpuTimed = Fk.headerWord(Xk.z.GpuTimed), this.gpuUs = Fk.headerWord(Xk.z.GpuFrameUs))
      }
      logLinks(kk) {
        const Fk = window.bloxdRenderDebug;
        for (const Rk of this.links.failures(null === Fk || void 0 === Fk ? void 0 : Fk.linkFailures)) this.event(Rk);
        const Bk = this.links.summaryLine(null === Fk || void 0 === Fk ? void 0 : Fk.links, kk);
        null !== Bk && ik(Bk)
      }
      logRenderer() {
        var kk, Fk;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const Bk = window.bloxdRenderDebug,
          Rk = (0, ak.o)(),
          tk = void 0 === (null === Bk || void 0 === Bk ? void 0 : Bk.parallelCompile) ? "" : `; parallel compile ${Bk.parallelCompile}`;
        ik(`renderer gl ${Rk?`${Rk.vendor} / ${Rk.renderer}`:"(not read)"}; terrain fetch ${null!==(kk=null===Bk||void 0===Bk?void 0:Bk.fetch)&&void 0!==kk?kk:"(not noted)"}${tk}`), ik(`renderer caps ${null!==(Fk=null===Bk||void 0===Bk?void 0:Bk.caps)&&void 0!==Fk?Fk:"(not noted)"}`)
      }
    }
    let Lk = null;

    function Ok(kk) {
      return (0, Ak.f)(), Lk ??= new Yk(kk), Lk
    }
  },
  4428: (kk, Fk, Bk) => {
    function Rk(kk) {
      if (null === kk) return "backend: none picked (no renderer build)";
      const Fk = kk.adapter ? `${kk.adapter.vendor}/${kk.adapter.architecture}` : "none";
      return `backend ${kk.backend}: reason ${kk.reason}, source ${kk.source}, adapter ${Fk}`
    }
    Bk.d(Fk, {
      c: () => Rk
    })
  },
  40147: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Xk,
      h: () => ak,
      i: () => bk
    });
    var Rk = Bk(4e4),
      tk = Bk(40015);

    function ak(kk) {
      if (kk.queries.drawCensus() < Rk.Hb.BYTES) return null;
      const Fk = kk.memoryData(kk.scratch(), Rk.Hb.BYTES, 4, "the draw census");
      return null === Fk ? null : {
        terrainOpaque: Rk.Hb.terrainOpaque(Fk, 0),
        terrainTransparent: Rk.Hb.terrainTransparent(Fk, 0),
        terrainPack: Rk.Hb.terrainPack(Fk, 0),
        earthSky: Rk.Hb.earthSky(Fk, 0),
        skyMeshes: Rk.Hb.skyMeshes(Fk, 0),
        regular: Rk.Hb.regular(Fk, 0),
        thin: Rk.Hb.thin(Fk, 0),
        line: Rk.Hb.line(Fk, 0),
        text: Rk.Hb.text(Fk, 0),
        particles: Rk.Hb.particles(Fk, 0)
      }
    }

    function Xk(kk) {
      const {
        terrainOpaque: Fk,
        terrainTransparent: Bk,
        earthSky: Rk,
        skyMeshes: tk,
        regular: ak,
        thin: Xk,
        line: bk,
        text: wk,
        particles: dk
      } = kk;
      return Fk + Bk + Rk + tk + ak + Xk + bk + wk + dk
    }

    function bk() {
      const kk = (0, tk.g)();
      return !0 === (null === kk || void 0 === kk ? void 0 : kk.isCoreRunning) ? function(kk) {
        const Fk = ak(kk);
        if (null === Fk) return [];
        const {
          terrainOpaque: Bk,
          terrainTransparent: Rk,
          terrainPack: tk,
          earthSky: bk,
          skyMeshes: wk,
          regular: dk,
          thin: sk,
          line: Vk,
          text: Jk,
          particles: Ak
        } = Fk;
        return [{
          label: "Drawn",
          value: `${Xk(Fk)}`
        }, {
          label: "Terrain",
          value: `${Bk} opaque / ${Rk} transparent (${tk} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${dk} / ${sk}`
        }, {
          label: "Text / Lines",
          value: `${Jk} / ${Vk}`
        }, {
          label: "Sky / Particles",
          value: `${bk+wk} / ${Ak}`
        }]
      }(kk.api) : []
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);