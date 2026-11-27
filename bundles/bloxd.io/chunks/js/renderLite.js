export const id = 58;
export const ids = [58];
export const modules = {
  54647: (RR, JR, GR) => {
    GR.d(JR, {
      startRenderLite: () => lR
    });
    var yR = GR(2448),
      tR = GR(709),
      uR = GR(132),
      ZR = GR(5685),
      qR = GR(42568),
      iR = GR(5676),
      fR = GR(42230),
      VR = GR(42118),
      KR = GR(42300),
      wR = GR(3960),
      rR = GR(5316),
      eR = GR(35012);
    const aR = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class LR {
      constructor(RR) {
        this.label = void 0, this.noted = void 0, this.lines = 0, this.atMs = -1 / 0, this.label = RR
      }
      line(RR, JR) {
        const GR = this.lines < 10 ? 6e4 : 6e5;
        return void 0 === RR || RR === this.noted || JR - this.atMs < GR ? null : (this.noted = RR, this.lines++, this.atMs = JR, `${this.label}: ${RR}`)
      }
    }
    class nR {
      constructor() {
        this.failuresLogged = 0, this.heldLogged = !1, this.links = new LR("gl links"), this.programUse = new LR("gl programs")
      }
      failures(RR) {
        const JR = RR ? RR.split(" ") : [],
          GR = JR.slice(this.failuresLogged).map((RR => {
            var JR;
            const [GR, yR] = RR.split(":"), tR = null !== (JR = aR.get(GR.slice(-1))) && void 0 !== JR ? JR : "";
            return `gl link failed: program row ${parseInt(GR)}${tR}, read ${yR} ms after issue`
          }));
        return this.failuresLogged = JR.length, GR
      }
      heldAtBackstop(RR) {
        return this.heldLogged || void 0 === RR ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${RR}`)
      }
      summaryLines(RR, JR, GR, yR) {
        const tR = this.links.line(RR, GR);
        return [tR && `${tR}; tab ${(0,eR.c)(yR)}`, this.programUse.line(JR, GR)].filter((RR => null !== RR))
      }
    }
    var UR = GR(5563);
    class WR {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(RR, JR, GR) {
        if ("none" !== JR && (this.frames++, "paced" === JR && this.paced++, "drawn" === JR)) {
          if (this.drawn++, this.renderUs += GR, this.renderUsMax = Math.max(this.renderUsMax, GR), null !== this.lastDrawnMs) {
            const JR = RR - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, JR), JR >= 50 && this.longGaps++
          }
          this.lastDrawnMs = RR
        }
      }
      restart() {
        this.take(), this.lastDrawnMs = null
      }
      take() {
        const RR = {
          frames: this.frames,
          drawn: this.drawn,
          paced: this.paced,
          gapMaxMs: this.gapMaxMs,
          longGaps: this.longGaps,
          renderUs: this.renderUs,
          renderUsMax: this.renderUsMax
        };
        return this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, RR
      }
    }

    function AR(RR) {
      return (RR / 1048576).toFixed(1)
    }
    class CR {
      constructor() {
        this.logged = 0, this.seen = new Set, this.unlogged = 0
      }
      admit(RR) {
        return this.logged >= 20 || this.seen.has(RR) ? (this.unlogged++, null) : (this.seen.add(RR), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${RR}` : RR)
      }
      takeUnlogged() {
        const RR = this.unlogged;
        return this.unlogged = 0, RR
      }
    }

    function XR(RR) {
      (0, wR.k)("renderlite", RR)
    }
    class MR {
      constructor(RR) {
        this.frames = new WR, this.events = new CR, this.programLines = new nR, this.compileSummary = new LR("webgpu compiles"), this.hidden = new eR.b, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this.prejoinLogged = null, this.visibilityChanged = () => {
          const RR = performance.now();
          this.hidden.changed(RR), this.restartWindow(RR)
        }, this.gK = () => {
          var RR, JR;
          const GR = this.session,
            tR = (0, VR.l)(),
            uR = performance.now();
          var iR;
          if (this.logLinks(uR), this.logGrid(), null === GR || GR.isStopped || !0 !== (null === tR || void 0 === tR ? void 0 : tR.isCoreRunning)) return null === (iR = window.bloxdRenderDebug) || void 0 === iR || delete iR.meshMaterials, void this.restartWindow(uR);
          if (document.hidden) return;
          if (uR - this.windowStart < 2500) return;
          if (! function(RR) {
              return RR < 12 || (RR - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const KR = GR.headerWord(ZR.L.GpuTimed),
            wR = GR.headerWord(ZR.L.GpuFrameUs),
            rR = this.sampled === GR ? {
              timed: KR - this.gpuTimed >>> 0,
              us: wR - this.gpuUs >>> 0
            } : null;
          this.sampled = GR, this.gpuTimed = KR, this.gpuUs = wR;
          const eR = null !== (RR = null === (JR = (0, fR.M)((0, yR.w)())) || void 0 === JR ? void 0 : JR.atR()) && void 0 !== RR ? RR : 0;
          XR(function(RR, JR) {
            const GR = JR.windowMs / 1e3,
              yR = [`${Math.round(GR)}s: ${RR.drawn} drawn (${(RR.drawn/GR).toFixed(1)}/s), ${RR.paced} paced, ${RR.frames-RR.drawn-RR.paced} skipped`, `gap max ${Math.round(RR.gapMaxMs)} ms, ${RR.longGaps} over 50 ms`, `render cpu ${RR.drawn?(RR.renderUs/RR.drawn/1e3).toFixed(2):"-"} ms mean, ${(RR.renderUsMax/1e3).toFixed(1)} max`];
            null !== JR.gpu && yR.push(`gpu ${JR.gpu.timed?(JR.gpu.us/JR.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${JR.gpu.timed} timed`);
            const tR = JR.census;
            yR.push(null === tR ? "draws none yet" : `draws ${(0,qR.c)(tR)} (terrain ${tR.terrainOpaque}+${tR.terrainTransparent}, pack ${tR.terrainPack}, meshes ${tR.regular+tR.thin+tR.line+tR.text} (${tR.text} text, ${tR.thin} thin, ${tR.line} line), sky ${tR.earthSky+tR.skyMeshes}, particles ${tR.particles})`), null !== tR && tR.ringCopiesMax > 0 && yR.push(`frame rings ${tR.ringCopiesMax} copies max, ${tR.ringBusyWrites} busy writes so far`);
            const uR = null === JR.gpuBytesBefore ? "" : ` (${JR.gpuBytes>=JR.gpuBytesBefore?"+":"-"}${AR(Math.abs(JR.gpuBytes-JR.gpuBytesBefore))})`;
            return yR.push(`gpu mem ${AR(JR.gpuBytes)} MiB${uR}`), yR.push(`pending ${JR.pending}`, "terrain " + (JR.terrainDrawn ? "drawn" : "not drawn yet")), JR.eventsUnlogged > 0 && yR.push(`${JR.eventsUnlogged} events unlogged`), yR.join("; ")
          }(this.frames.take(), {
            windowMs: uR - this.windowStart,
            gpu: rR,
            census: (0, qR.d)(tR.api),
            gpuBytes: eR,
            gpuBytesBefore: this.gpuBytes,
            pending: GR.headerWord(ZR.L.RenderPending),
            terrainDrawn: 0 !== (GR.headerWord(ZR.L.LoadSteps) & ZR.ab.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          }));
          const aR = window.bloxdRenderDebug;
          void 0 !== (null === aR || void 0 === aR ? void 0 : aR.meshMaterials) && (XR(`mesh materials ${aR.meshMaterials}`), delete aR.meshMaterials), this.gpuBytes = eR, this.windowStart = uR
        }, XR(`${(0,UR.b)(RR)}; client ${tR.z.client} (${tR.z.reason})`), setInterval(this.gK, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(RR, JR, GR) {
        var yR;
        this.session !== RR && (null === (yR = window.bloxdRenderDebug) || void 0 === yR || delete yR.meshMaterials);
        this.session = RR, this.frames.frame(JR, GR, "drawn" === GR ? RR.headerWord(ZR.L.RenderUs) : 0)
      }
      coreErrors(RR) {
        for (const {
            code: yR,
            detail: tR
          }
          of RR) {
          var JR, GR;
          if (yR >= ZR.p.RenderDeviceLost && yR <= ZR.p.RenderSerialLinks) this.event(`render error ${(0,iR.ge)(yR)}${null!==(JR=null===(GR=(0,KR.b)(yR,tR))||void 0===GR?void 0:GR.words)&&void 0!==JR?JR:""} (detail ${tR})`)
        }
      }
      reload(RR, JR, GR, yR) {
        this.event(`render reload: ${RR?"webgpu":"gl"} ${GR}, losses ${JR}${void 0===yR?"":`: ${yR}`}`)
      }
      glContextLost(RR, JR, GR) {
        const yR = null === JR || void 0 === JR ? void 0 : JR.split(" "),
          tR = 3 === (null === yR || void 0 === yR ? void 0 : yR.length) ? `vertex arrays ${yR[0]}, keyed draws peak ${yR[1]} (sweep floor ${yR[2]})` : "vertex arrays unnoted";
        this.event(`gl context lost ${RR?"in game":"at home"}: ${tR}, render distance ${null!==GR&&void 0!==GR?GR:"none"}`)
      }
      crashed(RR) {
        let {
          site: JR,
          error: GR,
          header: yR
        } = RR;
        const tR = null !== yR && 0 !== yR.lastError ? `, last error ${(0,iR.ge)(yR.lastError)} (detail ${yR.lastErrorDetail})` : "",
          uR = GR instanceof Error ? `${GR.name}: ${GR.message}` : null === GR || void 0 === GR ? "" : String(GR);
        this.event(`core stopped at ${JR}${tR}${uR&&`: ${uR}`}`)
      }
      event(RR) {
        const JR = this.events.admit(RR);
        null !== JR && XR(JR)
      }
      restartWindow(RR) {
        this.frames.restart(), this.windowStart = RR;
        const JR = this.session;
        null === JR || JR.isStopped ? this.sampled = null : (this.sampled = JR, this.gpuTimed = JR.headerWord(ZR.L.GpuTimed), this.gpuUs = JR.headerWord(ZR.L.GpuFrameUs))
      }
      logLinks(RR) {
        const JR = window.bloxdRenderDebug;
        for (const tR of this.programLines.failures(null === JR || void 0 === JR ? void 0 : JR.linkFailures)) this.event(tR);
        const GR = this.programLines.heldAtBackstop(null === JR || void 0 === JR ? void 0 : JR.heldAtBackstop);
        null !== GR && XR(GR);
        for (const tR of this.programLines.summaryLines(null === JR || void 0 === JR ? void 0 : JR.links, null === JR || void 0 === JR ? void 0 : JR.programUse, RR, this.hidden.totals(RR))) XR(tR);
        const yR = this.compileSummary.line(null === JR || void 0 === JR ? void 0 : JR.compiles, RR);
        null !== yR && XR(yR), void 0 !== (null === JR || void 0 === JR ? void 0 : JR.prejoin) && JR.prejoin !== this.prejoinLogged && (this.prejoinLogged = JR.prejoin, XR(`prejoin ${JR.prejoin}`))
      }
      logGrid() {
        var RR;
        const JR = null === (RR = window.bloxdRenderDebug) || void 0 === RR ? void 0 : RR.gridFaces;
        this.gridLogged || void 0 === JR || (this.gridLogged = !0, XR(`gl1 grid ${JR}`))
      }
      logRenderer() {
        var RR, JR;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const GR = window.bloxdRenderDebug,
          yR = (0, uR.y)(),
          tR = void 0 === (null === GR || void 0 === GR ? void 0 : GR.parallelCompile) ? "" : `; parallel compile ${GR.parallelCompile}`;
        XR(`renderer gl ${yR?`${yR.vendor} / ${yR.renderer}`:"(not read)"}; terrain fetch ${null!==(RR=null===GR||void 0===GR?void 0:GR.fetch)&&void 0!==RR?RR:"(not noted)"}${tR}`), XR(`renderer caps ${null!==(JR=null===GR||void 0===GR?void 0:GR.caps)&&void 0!==JR?JR:"(not noted)"}`)
      }
    }
    let BR = null;

    function lR(RR) {
      return (0, rR.c)(), BR ??= new MR(RR), BR
    }
  },
  5563: (RR, JR, GR) => {
    function yR(RR) {
      if (null === RR) return "backend: none picked (no renderer build)";
      const JR = RR.adapter ? `${RR.adapter.vendor}/${RR.adapter.architecture}` : "none";
      return `backend ${RR.backend}: reason ${RR.reason}, source ${RR.source}, adapter ${JR}`
    }
    GR.d(JR, {
      b: () => yR
    })
  },
  35012: (RR, JR, GR) => {
    function yR(RR) {
      return `hidden ${RR.changes} changes, ${Math.round(RR.hiddenMs)} ms`
    }
    GR.d(JR, {
      b: () => tR,
      c: () => yR
    });
    class tR {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(RR) {
        this.changes++, document.hidden ? this.hiddenSinceMs = RR : this.hiddenSinceMs >= 0 && (this.hiddenMs += RR - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(RR) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? RR - this.hiddenSinceMs : 0)
        }
      }
    }
  },
  42568: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR,
      d: () => uR,
      g: () => qR
    });
    var yR = GR(42106),
      tR = GR(42118);

    function uR(RR) {
      if (RR.queries.drawCensus() < yR.wb.BYTES) return null;
      const JR = RR.memoryData(RR.scratch(), yR.wb.BYTES, 4, "the draw census");
      return null === JR ? null : {
        terrainOpaque: yR.wb.terrainOpaque(JR, 0),
        terrainTransparent: yR.wb.terrainTransparent(JR, 0),
        terrainPack: yR.wb.terrainPack(JR, 0),
        earthSky: yR.wb.earthSky(JR, 0),
        skyMeshes: yR.wb.skyMeshes(JR, 0),
        regular: yR.wb.regular(JR, 0),
        thin: yR.wb.thin(JR, 0),
        line: yR.wb.line(JR, 0),
        text: yR.wb.text(JR, 0),
        particles: yR.wb.particles(JR, 0),
        terrainParts: yR.wb.terrainParts(JR, 0),
        terrainCompiling: yR.wb.terrainCompiling(JR, 0),
        ringCopiesMax: yR.wb.ringCopiesMax(JR, 0),
        ringBusyWrites: yR.wb.ringBusyWrites(JR, 0)
      }
    }

    function ZR(RR) {
      const {
        terrainOpaque: JR,
        terrainTransparent: GR,
        earthSky: yR,
        skyMeshes: tR,
        regular: uR,
        thin: ZR,
        line: qR,
        text: iR,
        particles: fR
      } = RR;
      return JR + GR + yR + tR + uR + ZR + qR + iR + fR
    }

    function qR() {
      const RR = (0, tR.l)();
      return !0 === (null === RR || void 0 === RR ? void 0 : RR.isCoreRunning) ? function(RR) {
        const JR = uR(RR);
        if (null === JR) return [];
        const {
          terrainOpaque: GR,
          terrainTransparent: yR,
          terrainPack: tR,
          earthSky: qR,
          skyMeshes: iR,
          regular: fR,
          thin: VR,
          line: KR,
          text: wR,
          particles: rR
        } = JR;
        return [{
          label: "Drawn",
          value: `${ZR(JR)}`
        }, {
          label: "Terrain",
          value: `${GR} opaque / ${yR} transparent (${tR} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${fR} / ${VR}`
        }, {
          label: "Text / Lines",
          value: `${wR} / ${KR}`
        }, {
          label: "Sky / Particles",
          value: `${qR+iR} / ${rR}`
        }]
      }(RR.api) : []
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);