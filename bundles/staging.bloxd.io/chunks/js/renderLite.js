export const id = 49;
export const ids = [49];
export const modules = {
  50786: (DD, zD, wD) => {
    wD.d(zD, {
      startRenderLite: () => VD
    });
    var pD = wD(2861),
      sD = wD(638),
      KD = wD(125),
      rD = wD(4820),
      LD = wD(40940),
      cD = wD(4817),
      gD = wD(40634),
      RD = wD(40516),
      AD = wD(40672),
      UD = wD(2811),
      fD = wD(4527),
      ID = wD(34079);
    const BD = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class GD {
      constructor(DD) {
        this.label = void 0, this.noted = void 0, this.lines = 0, this.atMs = -1 / 0, this.label = DD
      }
      line(DD, zD) {
        const wD = this.lines < 10 ? 6e4 : 6e5;
        return void 0 === DD || DD === this.noted || zD - this.atMs < wD ? null : (this.noted = DD, this.lines++, this.atMs = zD, `${this.label}: ${DD}`)
      }
    }
    class hD {
      constructor() {
        this.failuresLogged = 0, this.heldLogged = !1, this.links = new GD("gl links"), this.programUse = new GD("gl programs")
      }
      failures(DD) {
        const zD = DD ? DD.split(" ") : [],
          wD = zD.slice(this.failuresLogged).map((DD => {
            var zD;
            const [wD, pD] = DD.split(":"), sD = null !== (zD = BD.get(wD.slice(-1))) && void 0 !== zD ? zD : "";
            return `gl link failed: program row ${parseInt(wD)}${sD}, read ${pD} ms after issue`
          }));
        return this.failuresLogged = zD.length, wD
      }
      heldAtBackstop(DD) {
        return this.heldLogged || void 0 === DD ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${DD}`)
      }
      summaryLines(DD, zD, wD, pD) {
        const sD = this.links.line(DD, wD);
        return [sD && `${sD}; tab ${(0,ID.d)(pD)}`, this.programUse.line(zD, wD)].filter((DD => null !== DD))
      }
    }
    var nD = wD(4729);
    class MD {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(DD, zD, wD) {
        if ("none" !== zD && (this.frames++, "paced" === zD && this.paced++, "drawn" === zD)) {
          if (this.drawn++, this.renderUs += wD, this.renderUsMax = Math.max(this.renderUsMax, wD), null !== this.lastDrawnMs) {
            const zD = DD - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, zD), zD >= 50 && this.longGaps++
          }
          this.lastDrawnMs = DD
        }
      }
      restart() {
        this.take(), this.lastDrawnMs = null
      }
      take() {
        const DD = {
          frames: this.frames,
          drawn: this.drawn,
          paced: this.paced,
          gapMaxMs: this.gapMaxMs,
          longGaps: this.longGaps,
          renderUs: this.renderUs,
          renderUsMax: this.renderUsMax
        };
        return this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, DD
      }
    }

    function OD(DD) {
      return (DD / 1048576).toFixed(1)
    }
    class JD {
      constructor() {
        this.logged = 0, this.seen = new Set, this.unlogged = 0
      }
      admit(DD) {
        return this.logged >= 20 || this.seen.has(DD) ? (this.unlogged++, null) : (this.seen.add(DD), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${DD}` : DD)
      }
      takeUnlogged() {
        const DD = this.unlogged;
        return this.unlogged = 0, DD
      }
    }

    function ED(DD) {
      (0, UD.l)("renderlite", DD)
    }
    class QD {
      constructor(DD) {
        this.frames = new MD, this.events = new JD, this.programLines = new hD, this.compileSummary = new GD("webgpu compiles"), this.hidden = new ID.b, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this.visibilityChanged = () => {
          const DD = performance.now();
          this.hidden.changed(DD), this.restartWindow(DD)
        }, this.DU = () => {
          var DD, zD;
          const wD = this.session,
            sD = (0, RD.i)(),
            KD = performance.now();
          if (this.logLinks(KD), this.logGrid(), null === wD || wD.isStopped || !0 !== (null === sD || void 0 === sD ? void 0 : sD.isCoreRunning)) return void this.restartWindow(KD);
          if (document.hidden) return;
          if (KD - this.windowStart < 2500) return;
          if (! function(DD) {
              return DD < 12 || (DD - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const cD = wD.headerWord(rD.G.GpuTimed),
            AD = wD.headerWord(rD.G.GpuFrameUs),
            UD = this.sampled === wD ? {
              timed: cD - this.gpuTimed >>> 0,
              us: AD - this.gpuUs >>> 0
            } : null;
          this.sampled = wD, this.gpuTimed = cD, this.gpuUs = AD;
          const fD = null !== (DD = null === (zD = (0, gD.N)((0, pD.z)())) || void 0 === zD ? void 0 : zD.MpD()) && void 0 !== DD ? DD : 0;
          ED(function(DD, zD) {
            const wD = zD.windowMs / 1e3,
              pD = [`${Math.round(wD)}s: ${DD.drawn} drawn (${(DD.drawn/wD).toFixed(1)}/s), ${DD.paced} paced, ${DD.frames-DD.drawn-DD.paced} skipped`, `gap max ${Math.round(DD.gapMaxMs)} ms, ${DD.longGaps} over 50 ms`, `render cpu ${DD.drawn?(DD.renderUs/DD.drawn/1e3).toFixed(2):"-"} ms mean, ${(DD.renderUsMax/1e3).toFixed(1)} max`];
            null !== zD.gpu && pD.push(`gpu ${zD.gpu.timed?(zD.gpu.us/zD.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${zD.gpu.timed} timed`);
            const sD = zD.census;
            pD.push(null === sD ? "draws none yet" : `draws ${(0,LD.d)(sD)} (terrain ${sD.terrainOpaque}+${sD.terrainTransparent}, pack ${sD.terrainPack}, meshes ${sD.regular+sD.thin+sD.line+sD.text}, sky ${sD.earthSky+sD.skyMeshes}, particles ${sD.particles})`), null !== sD && sD.ringCopiesMax > 0 && pD.push(`frame rings ${sD.ringCopiesMax} copies max, ${sD.ringBusyWrites} busy writes so far`);
            const KD = null === zD.gpuBytesBefore ? "" : ` (${zD.gpuBytes>=zD.gpuBytesBefore?"+":"-"}${OD(Math.abs(zD.gpuBytes-zD.gpuBytesBefore))})`;
            return pD.push(`gpu mem ${OD(zD.gpuBytes)} MiB${KD}`), pD.push(`pending ${zD.pending}`, "terrain " + (zD.terrainDrawn ? "drawn" : "not drawn yet")), zD.eventsUnlogged > 0 && pD.push(`${zD.eventsUnlogged} events unlogged`), pD.join("; ")
          }(this.frames.take(), {
            windowMs: KD - this.windowStart,
            gpu: UD,
            census: (0, LD.h)(sD.api),
            gpuBytes: fD,
            gpuBytesBefore: this.gpuBytes,
            pending: wD.headerWord(rD.G.RenderPending),
            terrainDrawn: 0 !== (wD.headerWord(rD.G.LoadSteps) & rD.V.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = fD, this.windowStart = KD
        }, ED(`${(0,nD.d)(DD)}; client ${sD.n.client} (${sD.n.reason})`), setInterval(this.DU, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(DD, zD, wD) {
        this.session = DD, this.frames.frame(zD, wD, "drawn" === wD ? DD.headerWord(rD.G.RenderUs) : 0)
      }
      coreErrors(DD) {
        for (const {
            code: pD,
            detail: sD
          }
          of DD) {
          var zD, wD;
          if (pD >= rD.o.RenderDeviceLost && pD <= rD.o.RenderSerialLinks) this.event(`render error ${(0,cD.fe)(pD)}${null!==(zD=null===(wD=(0,AD.e)(pD,sD))||void 0===wD?void 0:wD.words)&&void 0!==zD?zD:""} (detail ${sD})`)
        }
      }
      reload(DD, zD, wD, pD) {
        this.event(`render reload: ${DD?"webgpu":"gl"} ${wD}, losses ${zD}${void 0===pD?"":`: ${pD}`}`)
      }
      crashed(DD) {
        let {
          site: zD,
          error: wD,
          header: pD
        } = DD;
        const sD = null !== pD && 0 !== pD.lastError ? `, last error ${(0,cD.fe)(pD.lastError)} (detail ${pD.lastErrorDetail})` : "",
          KD = wD instanceof Error ? `${wD.name}: ${wD.message}` : null === wD || void 0 === wD ? "" : String(wD);
        this.event(`core stopped at ${zD}${sD}${KD&&`: ${KD}`}`)
      }
      event(DD) {
        const zD = this.events.admit(DD);
        null !== zD && ED(zD)
      }
      restartWindow(DD) {
        this.frames.restart(), this.windowStart = DD;
        const zD = this.session;
        null === zD || zD.isStopped ? this.sampled = null : (this.sampled = zD, this.gpuTimed = zD.headerWord(rD.G.GpuTimed), this.gpuUs = zD.headerWord(rD.G.GpuFrameUs))
      }
      logLinks(DD) {
        const zD = window.bloxdRenderDebug;
        for (const sD of this.programLines.failures(null === zD || void 0 === zD ? void 0 : zD.linkFailures)) this.event(sD);
        const wD = this.programLines.heldAtBackstop(null === zD || void 0 === zD ? void 0 : zD.heldAtBackstop);
        null !== wD && ED(wD);
        for (const sD of this.programLines.summaryLines(null === zD || void 0 === zD ? void 0 : zD.links, null === zD || void 0 === zD ? void 0 : zD.programUse, DD, this.hidden.totals(DD))) ED(sD);
        const pD = this.compileSummary.line(null === zD || void 0 === zD ? void 0 : zD.compiles, DD);
        null !== pD && ED(pD)
      }
      logGrid() {
        var DD;
        const zD = null === (DD = window.bloxdRenderDebug) || void 0 === DD ? void 0 : DD.gridFaces;
        this.gridLogged || void 0 === zD || (this.gridLogged = !0, ED(`gl1 grid ${zD}`))
      }
      logRenderer() {
        var DD, zD;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const wD = window.bloxdRenderDebug,
          pD = (0, KD.p)(),
          sD = void 0 === (null === wD || void 0 === wD ? void 0 : wD.parallelCompile) ? "" : `; parallel compile ${wD.parallelCompile}`;
        ED(`renderer gl ${pD?`${pD.vendor} / ${pD.renderer}`:"(not read)"}; terrain fetch ${null!==(DD=null===wD||void 0===wD?void 0:wD.fetch)&&void 0!==DD?DD:"(not noted)"}${sD}`), ED(`renderer caps ${null!==(zD=null===wD||void 0===wD?void 0:wD.caps)&&void 0!==zD?zD:"(not noted)"}`)
      }
    }
    let XD = null;

    function VD(DD) {
      return (0, fD.f)(), XD ??= new QD(DD), XD
    }
  },
  4729: (DD, zD, wD) => {
    function pD(DD) {
      if (null === DD) return "backend: none picked (no renderer build)";
      const zD = DD.adapter ? `${DD.adapter.vendor}/${DD.adapter.architecture}` : "none";
      return `backend ${DD.backend}: reason ${DD.reason}, source ${DD.source}, adapter ${zD}`
    }
    wD.d(zD, {
      d: () => pD
    })
  },
  34079: (DD, zD, wD) => {
    function pD(DD) {
      return `hidden ${DD.changes} changes, ${Math.round(DD.hiddenMs)} ms`
    }
    wD.d(zD, {
      b: () => sD,
      d: () => pD
    });
    class sD {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(DD) {
        this.changes++, document.hidden ? this.hiddenSinceMs = DD : this.hiddenSinceMs >= 0 && (this.hiddenMs += DD - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(DD) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? DD - this.hiddenSinceMs : 0)
        }
      }
    }
  },
  40940: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => rD,
      h: () => KD,
      j: () => LD
    });
    var pD = wD(40506),
      sD = wD(40516);

    function KD(DD) {
      if (DD.queries.drawCensus() < pD.yb.BYTES) return null;
      const zD = DD.memoryData(DD.scratch(), pD.yb.BYTES, 4, "the draw census");
      return null === zD ? null : {
        terrainOpaque: pD.yb.terrainOpaque(zD, 0),
        terrainTransparent: pD.yb.terrainTransparent(zD, 0),
        terrainPack: pD.yb.terrainPack(zD, 0),
        earthSky: pD.yb.earthSky(zD, 0),
        skyMeshes: pD.yb.skyMeshes(zD, 0),
        regular: pD.yb.regular(zD, 0),
        thin: pD.yb.thin(zD, 0),
        line: pD.yb.line(zD, 0),
        text: pD.yb.text(zD, 0),
        particles: pD.yb.particles(zD, 0),
        terrainParts: pD.yb.terrainParts(zD, 0),
        terrainCompiling: pD.yb.terrainCompiling(zD, 0),
        ringCopiesMax: pD.yb.ringCopiesMax(zD, 0),
        ringBusyWrites: pD.yb.ringBusyWrites(zD, 0)
      }
    }

    function rD(DD) {
      const {
        terrainOpaque: zD,
        terrainTransparent: wD,
        earthSky: pD,
        skyMeshes: sD,
        regular: KD,
        thin: rD,
        line: LD,
        text: cD,
        particles: gD
      } = DD;
      return zD + wD + pD + sD + KD + rD + LD + cD + gD
    }

    function LD() {
      const DD = (0, sD.i)();
      return !0 === (null === DD || void 0 === DD ? void 0 : DD.isCoreRunning) ? function(DD) {
        const zD = KD(DD);
        if (null === zD) return [];
        const {
          terrainOpaque: wD,
          terrainTransparent: pD,
          terrainPack: sD,
          earthSky: LD,
          skyMeshes: cD,
          regular: gD,
          thin: RD,
          line: AD,
          text: UD,
          particles: fD
        } = zD;
        return [{
          label: "Drawn",
          value: `${rD(zD)}`
        }, {
          label: "Terrain",
          value: `${wD} opaque / ${pD} transparent (${sD} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${gD} / ${RD}`
        }, {
          label: "Text / Lines",
          value: `${UD} / ${AD}`
        }, {
          label: "Sky / Particles",
          value: `${LD+cD} / ${fD}`
        }]
      }(DD.api) : []
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);