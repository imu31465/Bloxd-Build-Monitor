export const id = 49;
export const ids = [49];
export const modules = {
  51012: (SS, HS, gS) => {
    gS.d(HS, {
      startRenderLite: () => JS
    });
    var tS = gS(3021),
      bS = gS(699),
      XS = gS(129),
      xS = gS(4935),
      NS = gS(41053),
      qS = gS(4926),
      uS = gS(40755),
      IS = gS(40625),
      fS = gS(40789),
      kS = gS(2953),
      aS = gS(4648),
      KS = gS(34090);
    const jS = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class GS {
      constructor(SS) {
        this.label = void 0, this.noted = void 0, this.lines = 0, this.atMs = -1 / 0, this.label = SS
      }
      line(SS, HS) {
        const gS = this.lines < 10 ? 6e4 : 6e5;
        return void 0 === SS || SS === this.noted || HS - this.atMs < gS ? null : (this.noted = SS, this.lines++, this.atMs = HS, `${this.label}: ${SS}`)
      }
    }
    class CS {
      constructor() {
        this.failuresLogged = 0, this.heldLogged = !1, this.links = new GS("gl links"), this.programUse = new GS("gl programs")
      }
      failures(SS) {
        const HS = SS ? SS.split(" ") : [],
          gS = HS.slice(this.failuresLogged).map((SS => {
            var HS;
            const [gS, tS] = SS.split(":"), bS = null !== (HS = jS.get(gS.slice(-1))) && void 0 !== HS ? HS : "";
            return `gl link failed: program row ${parseInt(gS)}${bS}, read ${tS} ms after issue`
          }));
        return this.failuresLogged = HS.length, gS
      }
      heldAtBackstop(SS) {
        return this.heldLogged || void 0 === SS ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${SS}`)
      }
      summaryLines(SS, HS, gS, tS) {
        const bS = this.links.line(SS, gS);
        return [bS && `${bS}; tab ${(0,KS.f)(tS)}`, this.programUse.line(HS, gS)].filter((SS => null !== SS))
      }
    }
    var nS = gS(4815);
    class PS {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(SS, HS, gS) {
        if ("none" !== HS && (this.frames++, "paced" === HS && this.paced++, "drawn" === HS)) {
          if (this.drawn++, this.renderUs += gS, this.renderUsMax = Math.max(this.renderUsMax, gS), null !== this.lastDrawnMs) {
            const HS = SS - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, HS), HS >= 50 && this.longGaps++
          }
          this.lastDrawnMs = SS
        }
      }
      restart() {
        this.take(), this.lastDrawnMs = null
      }
      take() {
        const SS = {
          frames: this.frames,
          drawn: this.drawn,
          paced: this.paced,
          gapMaxMs: this.gapMaxMs,
          longGaps: this.longGaps,
          renderUs: this.renderUs,
          renderUsMax: this.renderUsMax
        };
        return this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, SS
      }
    }

    function QS(SS) {
      return (SS / 1048576).toFixed(1)
    }
    class DS {
      constructor() {
        this.logged = 0, this.seen = new Set, this.unlogged = 0
      }
      admit(SS) {
        return this.logged >= 20 || this.seen.has(SS) ? (this.unlogged++, null) : (this.seen.add(SS), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${SS}` : SS)
      }
      takeUnlogged() {
        const SS = this.unlogged;
        return this.unlogged = 0, SS
      }
    }

    function wS(SS) {
      (0, kS.i)("renderlite", SS)
    }
    class hS {
      constructor(SS) {
        this.frames = new PS, this.events = new DS, this.programLines = new CS, this.compileSummary = new GS("webgpu compiles"), this.hidden = new KS.e, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this.visibilityChanged = () => {
          const SS = performance.now();
          this.hidden.changed(SS), this.restartWindow(SS)
        }, this.mf = () => {
          var SS, HS;
          const gS = this.session,
            bS = (0, IS.h)(),
            XS = performance.now();
          if (this.logLinks(XS), this.logGrid(), null === gS || gS.isStopped || !0 !== (null === bS || void 0 === bS ? void 0 : bS.isCoreRunning)) return void this.restartWindow(XS);
          if (document.hidden) return;
          if (XS - this.windowStart < 2500) return;
          if (! function(SS) {
              return SS < 12 || (SS - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const qS = gS.headerWord(xS.H.GpuTimed),
            fS = gS.headerWord(xS.H.GpuFrameUs),
            kS = this.sampled === gS ? {
              timed: qS - this.gpuTimed >>> 0,
              us: fS - this.gpuUs >>> 0
            } : null;
          this.sampled = gS, this.gpuTimed = qS, this.gpuUs = fS;
          const aS = null !== (SS = null === (HS = (0, uS.M)((0, tS.G)())) || void 0 === HS ? void 0 : HS.FgS()) && void 0 !== SS ? SS : 0;
          wS(function(SS, HS) {
            const gS = HS.windowMs / 1e3,
              tS = [`${Math.round(gS)}s: ${SS.drawn} drawn (${(SS.drawn/gS).toFixed(1)}/s), ${SS.paced} paced, ${SS.frames-SS.drawn-SS.paced} skipped`, `gap max ${Math.round(SS.gapMaxMs)} ms, ${SS.longGaps} over 50 ms`, `render cpu ${SS.drawn?(SS.renderUs/SS.drawn/1e3).toFixed(2):"-"} ms mean, ${(SS.renderUsMax/1e3).toFixed(1)} max`];
            null !== HS.gpu && tS.push(`gpu ${HS.gpu.timed?(HS.gpu.us/HS.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${HS.gpu.timed} timed`);
            const bS = HS.census;
            tS.push(null === bS ? "draws none yet" : `draws ${(0,NS.c)(bS)} (terrain ${bS.terrainOpaque}+${bS.terrainTransparent}, pack ${bS.terrainPack}, meshes ${bS.regular+bS.thin+bS.line+bS.text}, sky ${bS.earthSky+bS.skyMeshes}, particles ${bS.particles})`), null !== bS && bS.ringCopiesMax > 0 && tS.push(`frame rings ${bS.ringCopiesMax} copies max, ${bS.ringBusyWrites} busy writes so far`);
            const XS = null === HS.gpuBytesBefore ? "" : ` (${HS.gpuBytes>=HS.gpuBytesBefore?"+":"-"}${QS(Math.abs(HS.gpuBytes-HS.gpuBytesBefore))})`;
            return tS.push(`gpu mem ${QS(HS.gpuBytes)} MiB${XS}`), tS.push(`pending ${HS.pending}`, "terrain " + (HS.terrainDrawn ? "drawn" : "not drawn yet")), HS.eventsUnlogged > 0 && tS.push(`${HS.eventsUnlogged} events unlogged`), tS.join("; ")
          }(this.frames.take(), {
            windowMs: XS - this.windowStart,
            gpu: kS,
            census: (0, NS.f)(bS.api),
            gpuBytes: aS,
            gpuBytesBefore: this.gpuBytes,
            pending: gS.headerWord(xS.H.RenderPending),
            terrainDrawn: 0 !== (gS.headerWord(xS.H.LoadSteps) & xS.V.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = aS, this.windowStart = XS
        }, wS(`${(0,nS.e)(SS)}; client ${bS.p.client} (${bS.p.reason})`), setInterval(this.mf, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(SS, HS, gS) {
        this.session = SS, this.frames.frame(HS, gS, "drawn" === gS ? SS.headerWord(xS.H.RenderUs) : 0)
      }
      coreErrors(SS) {
        for (const {
            code: tS,
            detail: bS
          }
          of SS) {
          var HS, gS;
          if (tS >= xS.k.RenderDeviceLost && tS <= xS.k.RenderSerialLinks) this.event(`render error ${(0,qS.de)(tS)}${null!==(HS=null===(gS=(0,fS.d)(tS,bS))||void 0===gS?void 0:gS.words)&&void 0!==HS?HS:""} (detail ${bS})`)
        }
      }
      reload(SS, HS, gS, tS) {
        this.event(`render reload: ${SS?"webgpu":"gl"} ${gS}, losses ${HS}${void 0===tS?"":`: ${tS}`}`)
      }
      crashed(SS) {
        let {
          site: HS,
          error: gS,
          header: tS
        } = SS;
        const bS = null !== tS && 0 !== tS.lastError ? `, last error ${(0,qS.de)(tS.lastError)} (detail ${tS.lastErrorDetail})` : "",
          XS = gS instanceof Error ? `${gS.name}: ${gS.message}` : null === gS || void 0 === gS ? "" : String(gS);
        this.event(`core stopped at ${HS}${bS}${XS&&`: ${XS}`}`)
      }
      event(SS) {
        const HS = this.events.admit(SS);
        null !== HS && wS(HS)
      }
      restartWindow(SS) {
        this.frames.restart(), this.windowStart = SS;
        const HS = this.session;
        null === HS || HS.isStopped ? this.sampled = null : (this.sampled = HS, this.gpuTimed = HS.headerWord(xS.H.GpuTimed), this.gpuUs = HS.headerWord(xS.H.GpuFrameUs))
      }
      logLinks(SS) {
        const HS = window.bloxdRenderDebug;
        for (const bS of this.programLines.failures(null === HS || void 0 === HS ? void 0 : HS.linkFailures)) this.event(bS);
        const gS = this.programLines.heldAtBackstop(null === HS || void 0 === HS ? void 0 : HS.heldAtBackstop);
        null !== gS && wS(gS);
        for (const bS of this.programLines.summaryLines(null === HS || void 0 === HS ? void 0 : HS.links, null === HS || void 0 === HS ? void 0 : HS.programUse, SS, this.hidden.totals(SS))) wS(bS);
        const tS = this.compileSummary.line(null === HS || void 0 === HS ? void 0 : HS.compiles, SS);
        null !== tS && wS(tS)
      }
      logGrid() {
        var SS;
        const HS = null === (SS = window.bloxdRenderDebug) || void 0 === SS ? void 0 : SS.gridFaces;
        this.gridLogged || void 0 === HS || (this.gridLogged = !0, wS(`gl1 grid ${HS}`))
      }
      logRenderer() {
        var SS, HS;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const gS = window.bloxdRenderDebug,
          tS = (0, XS.l)(),
          bS = void 0 === (null === gS || void 0 === gS ? void 0 : gS.parallelCompile) ? "" : `; parallel compile ${gS.parallelCompile}`;
        wS(`renderer gl ${tS?`${tS.vendor} / ${tS.renderer}`:"(not read)"}; terrain fetch ${null!==(SS=null===gS||void 0===gS?void 0:gS.fetch)&&void 0!==SS?SS:"(not noted)"}${bS}`), wS(`renderer caps ${null!==(HS=null===gS||void 0===gS?void 0:gS.caps)&&void 0!==HS?HS:"(not noted)"}`)
      }
    }
    let ZS = null;

    function JS(SS) {
      return (0, aS.c)(), ZS ??= new hS(SS), ZS
    }
  },
  4815: (SS, HS, gS) => {
    function tS(SS) {
      if (null === SS) return "backend: none picked (no renderer build)";
      const HS = SS.adapter ? `${SS.adapter.vendor}/${SS.adapter.architecture}` : "none";
      return `backend ${SS.backend}: reason ${SS.reason}, source ${SS.source}, adapter ${HS}`
    }
    gS.d(HS, {
      e: () => tS
    })
  },
  34090: (SS, HS, gS) => {
    function tS(SS) {
      return `hidden ${SS.changes} changes, ${Math.round(SS.hiddenMs)} ms`
    }
    gS.d(HS, {
      e: () => bS,
      f: () => tS
    });
    class bS {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(SS) {
        this.changes++, document.hidden ? this.hiddenSinceMs = SS : this.hiddenSinceMs >= 0 && (this.hiddenMs += SS - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(SS) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? SS - this.hiddenSinceMs : 0)
        }
      }
    }
  },
  41053: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => xS,
      f: () => XS,
      i: () => NS
    });
    var tS = gS(40612),
      bS = gS(40625);

    function XS(SS) {
      if (SS.queries.drawCensus() < tS.kb.BYTES) return null;
      const HS = SS.memoryData(SS.scratch(), tS.kb.BYTES, 4, "the draw census");
      return null === HS ? null : {
        terrainOpaque: tS.kb.terrainOpaque(HS, 0),
        terrainTransparent: tS.kb.terrainTransparent(HS, 0),
        terrainPack: tS.kb.terrainPack(HS, 0),
        earthSky: tS.kb.earthSky(HS, 0),
        skyMeshes: tS.kb.skyMeshes(HS, 0),
        regular: tS.kb.regular(HS, 0),
        thin: tS.kb.thin(HS, 0),
        line: tS.kb.line(HS, 0),
        text: tS.kb.text(HS, 0),
        particles: tS.kb.particles(HS, 0),
        terrainParts: tS.kb.terrainParts(HS, 0),
        terrainCompiling: tS.kb.terrainCompiling(HS, 0),
        ringCopiesMax: tS.kb.ringCopiesMax(HS, 0),
        ringBusyWrites: tS.kb.ringBusyWrites(HS, 0)
      }
    }

    function xS(SS) {
      const {
        terrainOpaque: HS,
        terrainTransparent: gS,
        earthSky: tS,
        skyMeshes: bS,
        regular: XS,
        thin: xS,
        line: NS,
        text: qS,
        particles: uS
      } = SS;
      return HS + gS + tS + bS + XS + xS + NS + qS + uS
    }

    function NS() {
      const SS = (0, bS.h)();
      return !0 === (null === SS || void 0 === SS ? void 0 : SS.isCoreRunning) ? function(SS) {
        const HS = XS(SS);
        if (null === HS) return [];
        const {
          terrainOpaque: gS,
          terrainTransparent: tS,
          terrainPack: bS,
          earthSky: NS,
          skyMeshes: qS,
          regular: uS,
          thin: IS,
          line: fS,
          text: kS,
          particles: aS
        } = HS;
        return [{
          label: "Drawn",
          value: `${xS(HS)}`
        }, {
          label: "Terrain",
          value: `${gS} opaque / ${tS} transparent (${bS} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${uS} / ${IS}`
        }, {
          label: "Text / Lines",
          value: `${kS} / ${fS}`
        }, {
          label: "Sky / Particles",
          value: `${NS+qS} / ${aS}`
        }]
      }(SS.api) : []
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);