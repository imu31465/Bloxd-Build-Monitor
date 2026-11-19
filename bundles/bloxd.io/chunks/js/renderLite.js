export const id = 48;
export const ids = [48];
export const modules = {
  42476: (DD, CD, cD) => {
    cD.d(CD, {
      startRenderLite: () => OD
    });
    var ID = cD(3525),
      pD = cD(646),
      iD = cD(116),
      fD = cD(4585),
      bD = cD(39804),
      QD = cD(4581),
      wD = cD(39852),
      SD = cD(39692),
      BD = cD(40048),
      yD = cD(2727),
      MD = cD(4310);
    const tD = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class ZD {
      constructor() {
        this.failuresLogged = 0, this.summary = void 0, this.summaries = 0, this.summaryAtMs = -1 / 0
      }
      failures(DD) {
        const CD = DD ? DD.split(" ") : [],
          cD = CD.slice(this.failuresLogged).map((DD => {
            var CD;
            const [cD, ID] = DD.split(":"), pD = null !== (CD = tD.get(cD.slice(-1))) && void 0 !== CD ? CD : "";
            return `gl link failed: program row ${parseInt(cD)}${pD}, read ${ID} ms after issue`
          }));
        return this.failuresLogged = CD.length, cD
      }
      summaryLine(DD, CD) {
        const cD = this.summaries < 10 ? 6e4 : 6e5;
        return void 0 === DD || DD === this.summary || CD - this.summaryAtMs < cD ? null : (this.summary = DD, this.summaries++, this.summaryAtMs = CD, `gl links: ${DD}`)
      }
    }
    var oD = cD(4498);
    class vD {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(DD, CD, cD) {
        if ("none" !== CD && (this.frames++, "paced" === CD && this.paced++, "drawn" === CD)) {
          if (this.drawn++, this.renderUs += cD, this.renderUsMax = Math.max(this.renderUsMax, cD), null !== this.lastDrawnMs) {
            const CD = DD - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, CD), CD >= 50 && this.longGaps++
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

    function ND(DD) {
      return (DD / 1048576).toFixed(1)
    }
    class gD {
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

    function XD(DD) {
      (0, yD.j)("renderlite", function(DD) {
        let CD = 0,
          cD = 0,
          ID = 0;
        for (const iD of DD) {
          var pD;
          const fD = null !== (pD = iD.codePointAt(0)) && void 0 !== pD ? pD : 0;
          if (CD += fD < 128 ? 1 : fD < 2048 ? 2 : fD < 65536 ? 3 : 4, CD > 375) return `${DD.slice(0,ID)}...`;
          cD += iD.length, CD <= 372 && (ID = cD)
        }
        return DD
      }(DD))
    }
    class mD {
      constructor(DD) {
        this.frames = new vD, this.events = new gD, this.links = new ZD, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.visibilityChanged = () => {
          this.restartWindow(performance.now())
        }, this.wy = () => {
          var DD, CD;
          const cD = this.session,
            pD = (0, SD.g)(),
            iD = performance.now();
          if (this.logLinks(iD), null === cD || cD.isStopped || !0 !== (null === pD || void 0 === pD ? void 0 : pD.isCoreRunning)) return void this.restartWindow(iD);
          if (document.hidden) return;
          if (iD - this.windowStart < 2500) return;
          if (! function(DD) {
              return DD < 12 || (DD - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const QD = cD.headerWord(fD.A.GpuTimed),
            BD = cD.headerWord(fD.A.GpuFrameUs),
            yD = this.sampled === cD ? {
              timed: QD - this.gpuTimed >>> 0,
              us: BD - this.gpuUs >>> 0
            } : null;
          this.sampled = cD, this.gpuTimed = QD, this.gpuUs = BD;
          const MD = null !== (DD = null === (CD = (0, wD.H)((0, ID.x)())) || void 0 === CD ? void 0 : CD.ZcD()) && void 0 !== DD ? DD : 0;
          XD(function(DD, CD) {
            const cD = CD.windowMs / 1e3,
              ID = [`${Math.round(cD)}s: ${DD.drawn} drawn (${(DD.drawn/cD).toFixed(1)}/s), ${DD.paced} paced, ${DD.frames-DD.drawn-DD.paced} skipped`, `gap max ${Math.round(DD.gapMaxMs)} ms, ${DD.longGaps} over 50 ms`, `render cpu ${DD.drawn?(DD.renderUs/DD.drawn/1e3).toFixed(2):"-"} ms mean, ${(DD.renderUsMax/1e3).toFixed(1)} max`];
            null !== CD.gpu && ID.push(`gpu ${CD.gpu.timed?(CD.gpu.us/CD.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${CD.gpu.timed} timed`);
            const pD = CD.census;
            ID.push(null === pD ? "draws none yet" : `draws ${(0,bD.e)(pD)} (terrain ${pD.terrainOpaque}+${pD.terrainTransparent}, pack ${pD.terrainPack}, meshes ${pD.regular+pD.thin+pD.line+pD.text}, sky ${pD.earthSky+pD.skyMeshes}, particles ${pD.particles})`);
            const iD = null === CD.gpuBytesBefore ? "" : ` (${CD.gpuBytes>=CD.gpuBytesBefore?"+":"-"}${ND(Math.abs(CD.gpuBytes-CD.gpuBytesBefore))})`;
            return ID.push(`gpu mem ${ND(CD.gpuBytes)} MiB${iD}`), ID.push(`pending ${CD.pending}`, "terrain " + (CD.terrainDrawn ? "drawn" : "not drawn yet")), CD.eventsUnlogged > 0 && ID.push(`${CD.eventsUnlogged} events unlogged`), ID.join("; ")
          }(this.frames.take(), {
            windowMs: iD - this.windowStart,
            gpu: yD,
            census: (0, bD.g)(pD.api),
            gpuBytes: MD,
            gpuBytesBefore: this.gpuBytes,
            pending: cD.headerWord(fD.A.RenderPending),
            terrainDrawn: 0 !== (cD.headerWord(fD.A.LoadSteps) & fD.I.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = MD, this.windowStart = iD
        }, XD(`${(0,oD.e)(DD)}; client ${pD.g.client} (${pD.g.reason})`), setInterval(this.wy, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(DD, CD, cD) {
        this.session = DD, this.frames.frame(CD, cD, "drawn" === cD ? DD.headerWord(fD.A.RenderUs) : 0)
      }
      coreErrors(DD) {
        for (const {
            code: ID,
            detail: pD
          }
          of DD) {
          var CD, cD;
          if (ID >= fD.g.RenderDeviceLost && ID <= fD.g.RenderSerialLinks) this.event(`render error ${(0,QD.Sd)(ID)}${null!==(CD=null===(cD=(0,BD.e)(ID,pD))||void 0===cD?void 0:cD.words)&&void 0!==CD?CD:""} (detail ${pD})`)
        }
      }
      reload(DD, CD, cD, ID) {
        this.event(`render reload: ${DD?"webgpu":"gl"} ${cD}, losses ${CD}${void 0===ID?"":`: ${ID}`}`)
      }
      crashed(DD) {
        let {
          site: CD,
          error: cD,
          header: ID
        } = DD;
        const pD = null !== ID && 0 !== ID.lastError ? `, last error ${(0,QD.Sd)(ID.lastError)} (detail ${ID.lastErrorDetail})` : "",
          iD = cD instanceof Error ? `${cD.name}: ${cD.message}` : null === cD || void 0 === cD ? "" : String(cD);
        this.event(`core stopped at ${CD}${pD}${iD&&`: ${iD}`}`)
      }
      event(DD) {
        const CD = this.events.admit(DD);
        null !== CD && XD(CD)
      }
      restartWindow(DD) {
        this.frames.restart(), this.windowStart = DD;
        const CD = this.session;
        null === CD || CD.isStopped ? this.sampled = null : (this.sampled = CD, this.gpuTimed = CD.headerWord(fD.A.GpuTimed), this.gpuUs = CD.headerWord(fD.A.GpuFrameUs))
      }
      logLinks(DD) {
        const CD = window.bloxdRenderDebug;
        for (const ID of this.links.failures(null === CD || void 0 === CD ? void 0 : CD.linkFailures)) this.event(ID);
        const cD = this.links.summaryLine(null === CD || void 0 === CD ? void 0 : CD.links, DD);
        null !== cD && XD(cD)
      }
      logRenderer() {
        var DD, CD;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const cD = window.bloxdRenderDebug,
          ID = (0, iD.l)(),
          pD = void 0 === (null === cD || void 0 === cD ? void 0 : cD.parallelCompile) ? "" : `; parallel compile ${cD.parallelCompile}`;
        XD(`renderer gl ${ID?`${ID.vendor} / ${ID.renderer}`:"(not read)"}; terrain fetch ${null!==(DD=null===cD||void 0===cD?void 0:cD.fetch)&&void 0!==DD?DD:"(not noted)"}${pD}`), XD(`renderer caps ${null!==(CD=null===cD||void 0===cD?void 0:cD.caps)&&void 0!==CD?CD:"(not noted)"}`)
      }
    }
    let nD = null;

    function OD(DD) {
      return (0, MD.d)(), nD ??= new mD(DD), nD
    }
  },
  4498: (DD, CD, cD) => {
    function ID(DD) {
      if (null === DD) return "backend: none picked (no renderer build)";
      const CD = DD.adapter ? `${DD.adapter.vendor}/${DD.adapter.architecture}` : "none";
      return `backend ${DD.backend}: reason ${DD.reason}, source ${DD.source}, adapter ${CD}`
    }
    cD.d(CD, {
      e: () => ID
    })
  },
  39804: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => fD,
      g: () => iD,
      i: () => bD
    });
    var ID = cD(39680),
      pD = cD(39692);

    function iD(DD) {
      if (DD.queries.drawCensus() < ID.Jb.BYTES) return null;
      const CD = DD.memoryData(DD.scratch(), ID.Jb.BYTES, 4, "the draw census");
      return null === CD ? null : {
        terrainOpaque: ID.Jb.terrainOpaque(CD, 0),
        terrainTransparent: ID.Jb.terrainTransparent(CD, 0),
        terrainPack: ID.Jb.terrainPack(CD, 0),
        earthSky: ID.Jb.earthSky(CD, 0),
        skyMeshes: ID.Jb.skyMeshes(CD, 0),
        regular: ID.Jb.regular(CD, 0),
        thin: ID.Jb.thin(CD, 0),
        line: ID.Jb.line(CD, 0),
        text: ID.Jb.text(CD, 0),
        particles: ID.Jb.particles(CD, 0)
      }
    }

    function fD(DD) {
      const {
        terrainOpaque: CD,
        terrainTransparent: cD,
        earthSky: ID,
        skyMeshes: pD,
        regular: iD,
        thin: fD,
        line: bD,
        text: QD,
        particles: wD
      } = DD;
      return CD + cD + ID + pD + iD + fD + bD + QD + wD
    }

    function bD() {
      const DD = (0, pD.g)();
      return !0 === (null === DD || void 0 === DD ? void 0 : DD.isCoreRunning) ? function(DD) {
        const CD = iD(DD);
        if (null === CD) return [];
        const {
          terrainOpaque: cD,
          terrainTransparent: ID,
          terrainPack: pD,
          earthSky: bD,
          skyMeshes: QD,
          regular: wD,
          thin: SD,
          line: BD,
          text: yD,
          particles: MD
        } = CD;
        return [{
          label: "Drawn",
          value: `${fD(CD)}`
        }, {
          label: "Terrain",
          value: `${cD} opaque / ${ID} transparent (${pD} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${wD} / ${SD}`
        }, {
          label: "Text / Lines",
          value: `${yD} / ${BD}`
        }, {
          label: "Sky / Particles",
          value: `${bD+QD} / ${MD}`
        }]
      }(DD.api) : []
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);