export const id = 48;
export const ids = [48];
export const modules = {
  43069: (qq, Eq, gq) => {
    gq.d(Eq, {
      startRenderLite: () => tq
    });
    var Yq = gq(2797),
      lq = gq(611),
      Oq = gq(128),
      mq = gq(4625),
      xq = gq(40462),
      Aq = gq(4622),
      cq = gq(40498),
      uq = gq(40325),
      Bq = gq(40697),
      Wq = gq(2733),
      Nq = gq(4340);
    const aq = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class Vq {
      constructor() {
        this.failuresLogged = 0, this.summary = void 0, this.summaries = 0, this.summaryAtMs = -1 / 0
      }
      failures(qq) {
        const Eq = qq ? qq.split(" ") : [],
          gq = Eq.slice(this.failuresLogged).map((qq => {
            var Eq;
            const [gq, Yq] = qq.split(":"), lq = null !== (Eq = aq.get(gq.slice(-1))) && void 0 !== Eq ? Eq : "";
            return `gl link failed: program row ${parseInt(gq)}${lq}, read ${Yq} ms after issue`
          }));
        return this.failuresLogged = Eq.length, gq
      }
      summaryLine(qq, Eq) {
        const gq = this.summaries < 10 ? 6e4 : 6e5;
        return void 0 === qq || qq === this.summary || Eq - this.summaryAtMs < gq ? null : (this.summary = qq, this.summaries++, this.summaryAtMs = Eq, `gl links: ${qq}`)
      }
    }
    var dq = gq(4527);
    class jq {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(qq, Eq, gq) {
        if ("none" !== Eq && (this.frames++, "paced" === Eq && this.paced++, "drawn" === Eq)) {
          if (this.drawn++, this.renderUs += gq, this.renderUsMax = Math.max(this.renderUsMax, gq), null !== this.lastDrawnMs) {
            const Eq = qq - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, Eq), Eq >= 50 && this.longGaps++
          }
          this.lastDrawnMs = qq
        }
      }
      restart() {
        this.take(), this.lastDrawnMs = null
      }
      take() {
        const qq = {
          frames: this.frames,
          drawn: this.drawn,
          paced: this.paced,
          gapMaxMs: this.gapMaxMs,
          longGaps: this.longGaps,
          renderUs: this.renderUs,
          renderUsMax: this.renderUsMax
        };
        return this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, qq
      }
    }

    function Hq(qq) {
      return (qq / 1048576).toFixed(1)
    }
    class oq {
      constructor() {
        this.logged = 0, this.seen = new Set, this.unlogged = 0
      }
      admit(qq) {
        return this.logged >= 20 || this.seen.has(qq) ? (this.unlogged++, null) : (this.seen.add(qq), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${qq}` : qq)
      }
      takeUnlogged() {
        const qq = this.unlogged;
        return this.unlogged = 0, qq
      }
    }

    function Pq(qq) {
      (0, Wq.m)("renderlite", qq)
    }
    class Qq {
      constructor(qq) {
        this.frames = new jq, this.events = new oq, this.links = new Vq, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this.visibilityChanged = () => {
          this.restartWindow(performance.now())
        }, this.SB = () => {
          var qq, Eq;
          const gq = this.session,
            lq = (0, uq.e)(),
            Oq = performance.now();
          if (this.logLinks(Oq), this.logGrid(), null === gq || gq.isStopped || !0 !== (null === lq || void 0 === lq ? void 0 : lq.isCoreRunning)) return void this.restartWindow(Oq);
          if (document.hidden) return;
          if (Oq - this.windowStart < 2500) return;
          if (! function(qq) {
              return qq < 12 || (qq - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const Aq = gq.headerWord(mq.C.GpuTimed),
            Bq = gq.headerWord(mq.C.GpuFrameUs),
            Wq = this.sampled === gq ? {
              timed: Aq - this.gpuTimed >>> 0,
              us: Bq - this.gpuUs >>> 0
            } : null;
          this.sampled = gq, this.gpuTimed = Aq, this.gpuUs = Bq;
          const Nq = null !== (qq = null === (Eq = (0, cq.B)((0, Yq.C)())) || void 0 === Eq ? void 0 : Eq.tYq()) && void 0 !== qq ? qq : 0;
          Pq(function(qq, Eq) {
            const gq = Eq.windowMs / 1e3,
              Yq = [`${Math.round(gq)}s: ${qq.drawn} drawn (${(qq.drawn/gq).toFixed(1)}/s), ${qq.paced} paced, ${qq.frames-qq.drawn-qq.paced} skipped`, `gap max ${Math.round(qq.gapMaxMs)} ms, ${qq.longGaps} over 50 ms`, `render cpu ${qq.drawn?(qq.renderUs/qq.drawn/1e3).toFixed(2):"-"} ms mean, ${(qq.renderUsMax/1e3).toFixed(1)} max`];
            null !== Eq.gpu && Yq.push(`gpu ${Eq.gpu.timed?(Eq.gpu.us/Eq.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${Eq.gpu.timed} timed`);
            const lq = Eq.census;
            Yq.push(null === lq ? "draws none yet" : `draws ${(0,xq.e)(lq)} (terrain ${lq.terrainOpaque}+${lq.terrainTransparent}, pack ${lq.terrainPack}, meshes ${lq.regular+lq.thin+lq.line+lq.text}, sky ${lq.earthSky+lq.skyMeshes}, particles ${lq.particles})`);
            const Oq = null === Eq.gpuBytesBefore ? "" : ` (${Eq.gpuBytes>=Eq.gpuBytesBefore?"+":"-"}${Hq(Math.abs(Eq.gpuBytes-Eq.gpuBytesBefore))})`;
            return Yq.push(`gpu mem ${Hq(Eq.gpuBytes)} MiB${Oq}`), Yq.push(`pending ${Eq.pending}`, "terrain " + (Eq.terrainDrawn ? "drawn" : "not drawn yet")), Eq.eventsUnlogged > 0 && Yq.push(`${Eq.eventsUnlogged} events unlogged`), Yq.join("; ")
          }(this.frames.take(), {
            windowMs: Oq - this.windowStart,
            gpu: Wq,
            census: (0, xq.f)(lq.api),
            gpuBytes: Nq,
            gpuBytesBefore: this.gpuBytes,
            pending: gq.headerWord(mq.C.RenderPending),
            terrainDrawn: 0 !== (gq.headerWord(mq.C.LoadSteps) & mq.O.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = Nq, this.windowStart = Oq
        }, Pq(`${(0,dq.e)(qq)}; client ${lq.k.client} (${lq.k.reason})`), setInterval(this.SB, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(qq, Eq, gq) {
        this.session = qq, this.frames.frame(Eq, gq, "drawn" === gq ? qq.headerWord(mq.C.RenderUs) : 0)
      }
      coreErrors(qq) {
        for (const {
            code: Yq,
            detail: lq
          }
          of qq) {
          var Eq, gq;
          if (Yq >= mq.f.RenderDeviceLost && Yq <= mq.f.RenderSerialLinks) this.event(`render error ${(0,Aq.ne)(Yq)}${null!==(Eq=null===(gq=(0,Bq.b)(Yq,lq))||void 0===gq?void 0:gq.words)&&void 0!==Eq?Eq:""} (detail ${lq})`)
        }
      }
      reload(qq, Eq, gq, Yq) {
        this.event(`render reload: ${qq?"webgpu":"gl"} ${gq}, losses ${Eq}${void 0===Yq?"":`: ${Yq}`}`)
      }
      crashed(qq) {
        let {
          site: Eq,
          error: gq,
          header: Yq
        } = qq;
        const lq = null !== Yq && 0 !== Yq.lastError ? `, last error ${(0,Aq.ne)(Yq.lastError)} (detail ${Yq.lastErrorDetail})` : "",
          Oq = gq instanceof Error ? `${gq.name}: ${gq.message}` : null === gq || void 0 === gq ? "" : String(gq);
        this.event(`core stopped at ${Eq}${lq}${Oq&&`: ${Oq}`}`)
      }
      event(qq) {
        const Eq = this.events.admit(qq);
        null !== Eq && Pq(Eq)
      }
      restartWindow(qq) {
        this.frames.restart(), this.windowStart = qq;
        const Eq = this.session;
        null === Eq || Eq.isStopped ? this.sampled = null : (this.sampled = Eq, this.gpuTimed = Eq.headerWord(mq.C.GpuTimed), this.gpuUs = Eq.headerWord(mq.C.GpuFrameUs))
      }
      logLinks(qq) {
        const Eq = window.bloxdRenderDebug;
        for (const Yq of this.links.failures(null === Eq || void 0 === Eq ? void 0 : Eq.linkFailures)) this.event(Yq);
        const gq = this.links.summaryLine(null === Eq || void 0 === Eq ? void 0 : Eq.links, qq);
        null !== gq && Pq(gq)
      }
      logGrid() {
        var qq;
        const Eq = null === (qq = window.bloxdRenderDebug) || void 0 === qq ? void 0 : qq.gridFaces;
        this.gridLogged || void 0 === Eq || (this.gridLogged = !0, Pq(`gl1 grid ${Eq}`))
      }
      logRenderer() {
        var qq, Eq;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const gq = window.bloxdRenderDebug,
          Yq = (0, Oq.t)(),
          lq = void 0 === (null === gq || void 0 === gq ? void 0 : gq.parallelCompile) ? "" : `; parallel compile ${gq.parallelCompile}`;
        Pq(`renderer gl ${Yq?`${Yq.vendor} / ${Yq.renderer}`:"(not read)"}; terrain fetch ${null!==(qq=null===gq||void 0===gq?void 0:gq.fetch)&&void 0!==qq?qq:"(not noted)"}${lq}`), Pq(`renderer caps ${null!==(Eq=null===gq||void 0===gq?void 0:gq.caps)&&void 0!==Eq?Eq:"(not noted)"}`)
      }
    }
    let yq = null;

    function tq(qq) {
      return (0, Nq.c)(), yq ??= new Qq(qq), yq
    }
  },
  4527: (qq, Eq, gq) => {
    function Yq(qq) {
      if (null === qq) return "backend: none picked (no renderer build)";
      const Eq = qq.adapter ? `${qq.adapter.vendor}/${qq.adapter.architecture}` : "none";
      return `backend ${qq.backend}: reason ${qq.reason}, source ${qq.source}, adapter ${Eq}`
    }
    gq.d(Eq, {
      e: () => Yq
    })
  },
  40462: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => mq,
      f: () => Oq,
      h: () => xq
    });
    var Yq = gq(40318),
      lq = gq(40325);

    function Oq(qq) {
      if (qq.queries.drawCensus() < Yq.zb.BYTES) return null;
      const Eq = qq.memoryData(qq.scratch(), Yq.zb.BYTES, 4, "the draw census");
      return null === Eq ? null : {
        terrainOpaque: Yq.zb.terrainOpaque(Eq, 0),
        terrainTransparent: Yq.zb.terrainTransparent(Eq, 0),
        terrainPack: Yq.zb.terrainPack(Eq, 0),
        earthSky: Yq.zb.earthSky(Eq, 0),
        skyMeshes: Yq.zb.skyMeshes(Eq, 0),
        regular: Yq.zb.regular(Eq, 0),
        thin: Yq.zb.thin(Eq, 0),
        line: Yq.zb.line(Eq, 0),
        text: Yq.zb.text(Eq, 0),
        particles: Yq.zb.particles(Eq, 0),
        terrainParts: Yq.zb.terrainParts(Eq, 0),
        terrainCompiling: Yq.zb.terrainCompiling(Eq, 0)
      }
    }

    function mq(qq) {
      const {
        terrainOpaque: Eq,
        terrainTransparent: gq,
        earthSky: Yq,
        skyMeshes: lq,
        regular: Oq,
        thin: mq,
        line: xq,
        text: Aq,
        particles: cq
      } = qq;
      return Eq + gq + Yq + lq + Oq + mq + xq + Aq + cq
    }

    function xq() {
      const qq = (0, lq.e)();
      return !0 === (null === qq || void 0 === qq ? void 0 : qq.isCoreRunning) ? function(qq) {
        const Eq = Oq(qq);
        if (null === Eq) return [];
        const {
          terrainOpaque: gq,
          terrainTransparent: Yq,
          terrainPack: lq,
          earthSky: xq,
          skyMeshes: Aq,
          regular: cq,
          thin: uq,
          line: Bq,
          text: Wq,
          particles: Nq
        } = Eq;
        return [{
          label: "Drawn",
          value: `${mq(Eq)}`
        }, {
          label: "Terrain",
          value: `${gq} opaque / ${Yq} transparent (${lq} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${cq} / ${uq}`
        }, {
          label: "Text / Lines",
          value: `${Wq} / ${Bq}`
        }, {
          label: "Sky / Particles",
          value: `${xq+Aq} / ${Nq}`
        }]
      }(qq.api) : []
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);