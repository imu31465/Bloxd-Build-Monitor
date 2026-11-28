export const id = 58;
export const ids = [58];
export const modules = {
  55073: (dd, Od, md) => {
    md.d(Od, {
      startRenderLite: () => Ud
    });
    var Wd = md(2421),
      Fd = md(732),
      Rd = md(145),
      Xd = md(5571),
      Kd = md(42991),
      hd = md(5568),
      vd = md(42658),
      Qd = md(42552),
      td = md(42721),
      od = md(3903),
      Nd = md(5169),
      qd = md(35404);
    const Hd = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class yd {
      constructor(dd) {
        this.label = void 0, this.noted = void 0, this.lines = 0, this.atMs = -1 / 0, this.label = dd
      }
      line(dd, Od) {
        const md = this.lines < 10 ? 6e4 : 6e5;
        return void 0 === dd || dd === this.noted || Od - this.atMs < md ? null : (this.noted = dd, this.lines++, this.atMs = Od, `${this.label}: ${dd}`)
      }
    }
    class bd {
      constructor() {
        this.failuresLogged = 0, this.heldLogged = !1, this.links = new yd("gl links"), this.programUse = new yd("gl programs")
      }
      failures(dd) {
        const Od = dd ? dd.split(" ") : [],
          md = Od.slice(this.failuresLogged).map((dd => {
            var Od;
            const [md, Wd] = dd.split(":"), Fd = null !== (Od = Hd.get(md.slice(-1))) && void 0 !== Od ? Od : "";
            return `gl link failed: program row ${parseInt(md)}${Fd}, read ${Wd} ms after issue`
          }));
        return this.failuresLogged = Od.length, md
      }
      heldAtBackstop(dd) {
        return this.heldLogged || void 0 === dd ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${dd}`)
      }
      summaryLines(dd, Od, md, Wd) {
        const Fd = this.links.line(dd, md);
        return [Fd && `${Fd}; tab ${(0,qd.g)(Wd)}`, this.programUse.line(Od, md)].filter((dd => null !== dd))
      }
    }
    var Td = md(5431);
    class pd {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(dd, Od, md) {
        if ("none" !== Od && (this.frames++, "paced" === Od && this.paced++, "drawn" === Od)) {
          if (this.drawn++, this.renderUs += md, this.renderUsMax = Math.max(this.renderUsMax, md), null !== this.lastDrawnMs) {
            const Od = dd - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, Od), Od >= 50 && this.longGaps++
          }
          this.lastDrawnMs = dd
        }
      }
      restart() {
        this.take(), this.lastDrawnMs = null
      }
      take() {
        const dd = {
          frames: this.frames,
          drawn: this.drawn,
          paced: this.paced,
          gapMaxMs: this.gapMaxMs,
          longGaps: this.longGaps,
          renderUs: this.renderUs,
          renderUsMax: this.renderUsMax
        };
        return this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, dd
      }
    }

    function Yd(dd) {
      return (dd / 1048576).toFixed(1)
    }
    class gd {
      constructor() {
        this.logged = 0, this.seen = new Set, this.unlogged = 0
      }
      admit(dd) {
        return this.logged >= 20 || this.seen.has(dd) ? (this.unlogged++, null) : (this.seen.add(dd), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${dd}` : dd)
      }
      takeUnlogged() {
        const dd = this.unlogged;
        return this.unlogged = 0, dd
      }
    }

    function wd(dd) {
      (0, od.k)("renderlite", dd)
    }
    class Ed {
      constructor(dd) {
        this.frames = new pd, this.events = new gd, this.programLines = new bd, this.compileSummary = new yd("webgpu compiles"), this.hidden = new qd.d, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this.prejoinLogged = null, this.visibilityChanged = () => {
          const dd = performance.now();
          this.hidden.changed(dd), this.restartWindow(dd)
        }, this.Et = () => {
          var dd, Od;
          const md = this.session,
            Fd = (0, Qd.l)(),
            Rd = performance.now();
          var hd;
          if (this.logLinks(Rd), this.logGrid(), null === md || md.isStopped || !0 !== (null === Fd || void 0 === Fd ? void 0 : Fd.isCoreRunning)) return null === (hd = window.bloxdRenderDebug) || void 0 === hd || delete hd.meshMaterials, void this.restartWindow(Rd);
          if (document.hidden) return;
          if (Rd - this.windowStart < 2500) return;
          if (! function(dd) {
              return dd < 12 || (dd - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const td = md.headerWord(Xd.I.GpuTimed),
            od = md.headerWord(Xd.I.GpuFrameUs),
            Nd = this.sampled === md ? {
              timed: td - this.gpuTimed >>> 0,
              us: od - this.gpuUs >>> 0
            } : null;
          this.sampled = md, this.gpuTimed = td, this.gpuUs = od;
          const qd = null !== (dd = null === (Od = (0, vd.S)((0, Wd.A)())) || void 0 === Od ? void 0 : Od.EFd()) && void 0 !== dd ? dd : 0;
          wd(function(dd, Od) {
            const md = Od.windowMs / 1e3,
              Wd = [`${Math.round(md)}s: ${dd.drawn} drawn (${(dd.drawn/md).toFixed(1)}/s), ${dd.paced} paced, ${dd.frames-dd.drawn-dd.paced} skipped`, `gap max ${Math.round(dd.gapMaxMs)} ms, ${dd.longGaps} over 50 ms`, `render cpu ${dd.drawn?(dd.renderUs/dd.drawn/1e3).toFixed(2):"-"} ms mean, ${(dd.renderUsMax/1e3).toFixed(1)} max`];
            null !== Od.gpu && Wd.push(`gpu ${Od.gpu.timed?(Od.gpu.us/Od.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${Od.gpu.timed} timed`);
            const Fd = Od.census;
            Wd.push(null === Fd ? "draws none yet" : `draws ${(0,Kd.b)(Fd)} (terrain ${Fd.terrainOpaque}+${Fd.terrainTransparent}, pack ${Fd.terrainPack}, meshes ${Fd.regular+Fd.thin+Fd.line+Fd.text} (${Fd.text} text, ${Fd.thin} thin, ${Fd.line} line), sky ${Fd.earthSky+Fd.skyMeshes}, particles ${Fd.particles})`), null !== Fd && Fd.ringCopiesMax > 0 && Wd.push(`frame rings ${Fd.ringCopiesMax} copies max, ${Fd.ringBusyWrites} busy writes so far`);
            const Rd = null === Od.gpuBytesBefore ? "" : ` (${Od.gpuBytes>=Od.gpuBytesBefore?"+":"-"}${Yd(Math.abs(Od.gpuBytes-Od.gpuBytesBefore))})`;
            return Wd.push(`gpu mem ${Yd(Od.gpuBytes)} MiB${Rd}`), Wd.push(`pending ${Od.pending}`, "terrain " + (Od.terrainDrawn ? "drawn" : "not drawn yet")), Od.eventsUnlogged > 0 && Wd.push(`${Od.eventsUnlogged} events unlogged`), Wd.join("; ")
          }(this.frames.take(), {
            windowMs: Rd - this.windowStart,
            gpu: Nd,
            census: (0, Kd.f)(Fd.api),
            gpuBytes: qd,
            gpuBytesBefore: this.gpuBytes,
            pending: md.headerWord(Xd.I.RenderPending),
            terrainDrawn: 0 !== (md.headerWord(Xd.I.LoadSteps) & Xd.X.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          }));
          const Hd = window.bloxdRenderDebug;
          void 0 !== (null === Hd || void 0 === Hd ? void 0 : Hd.meshMaterials) && (wd(`mesh materials ${Hd.meshMaterials}`), delete Hd.meshMaterials), this.gpuBytes = qd, this.windowStart = Rd
        }, wd(`${(0,Td.e)(dd)}; client ${Fd.y.client} (${Fd.y.reason})`), setInterval(this.Et, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(dd, Od, md) {
        var Wd;
        this.session !== dd && (null === (Wd = window.bloxdRenderDebug) || void 0 === Wd || delete Wd.meshMaterials);
        this.session = dd, this.frames.frame(Od, md, "drawn" === md ? dd.headerWord(Xd.I.RenderUs) : 0)
      }
      coreErrors(dd) {
        for (const {
            code: Wd,
            detail: Fd
          }
          of dd) {
          var Od, md;
          if (Wd >= Xd.p.RenderDeviceLost && Wd <= Xd.p.RenderSerialLinks) this.event(`render error ${(0,hd.ae)(Wd)}${null!==(Od=null===(md=(0,td.d)(Wd,Fd))||void 0===md?void 0:md.words)&&void 0!==Od?Od:""} (detail ${Fd})`)
        }
      }
      reload(dd, Od, md, Wd) {
        this.event(`render reload: ${dd?"webgpu":"gl"} ${md}, losses ${Od}${void 0===Wd?"":`: ${Wd}`}`)
      }
      glContextLost(dd, Od, md) {
        const Wd = null === Od || void 0 === Od ? void 0 : Od.split(" "),
          Fd = 3 === (null === Wd || void 0 === Wd ? void 0 : Wd.length) ? `vertex arrays ${Wd[0]}, keyed draws peak ${Wd[1]} (sweep floor ${Wd[2]})` : "vertex arrays unnoted";
        this.event(`gl context lost ${dd?"in game":"at home"}: ${Fd}, render distance ${null!==md&&void 0!==md?md:"none"}`)
      }
      crashed(dd) {
        let {
          site: Od,
          error: md,
          header: Wd
        } = dd;
        const Fd = null !== Wd && 0 !== Wd.lastError ? `, last error ${(0,hd.ae)(Wd.lastError)} (detail ${Wd.lastErrorDetail})` : "",
          Rd = md instanceof Error ? `${md.name}: ${md.message}` : null === md || void 0 === md ? "" : String(md);
        this.event(`core stopped at ${Od}${Fd}${Rd&&`: ${Rd}`}`)
      }
      event(dd) {
        const Od = this.events.admit(dd);
        null !== Od && wd(Od)
      }
      restartWindow(dd) {
        this.frames.restart(), this.windowStart = dd;
        const Od = this.session;
        null === Od || Od.isStopped ? this.sampled = null : (this.sampled = Od, this.gpuTimed = Od.headerWord(Xd.I.GpuTimed), this.gpuUs = Od.headerWord(Xd.I.GpuFrameUs))
      }
      logLinks(dd) {
        const Od = window.bloxdRenderDebug;
        for (const Fd of this.programLines.failures(null === Od || void 0 === Od ? void 0 : Od.linkFailures)) this.event(Fd);
        const md = this.programLines.heldAtBackstop(null === Od || void 0 === Od ? void 0 : Od.heldAtBackstop);
        null !== md && wd(md);
        for (const Fd of this.programLines.summaryLines(null === Od || void 0 === Od ? void 0 : Od.links, null === Od || void 0 === Od ? void 0 : Od.programUse, dd, this.hidden.totals(dd))) wd(Fd);
        const Wd = this.compileSummary.line(null === Od || void 0 === Od ? void 0 : Od.compiles, dd);
        null !== Wd && wd(Wd), void 0 !== (null === Od || void 0 === Od ? void 0 : Od.prejoin) && Od.prejoin !== this.prejoinLogged && (this.prejoinLogged = Od.prejoin, wd(`prejoin ${Od.prejoin}`))
      }
      logGrid() {
        var dd;
        const Od = null === (dd = window.bloxdRenderDebug) || void 0 === dd ? void 0 : dd.gridFaces;
        this.gridLogged || void 0 === Od || (this.gridLogged = !0, wd(`gl1 grid ${Od}`))
      }
      logRenderer() {
        var dd, Od;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const md = window.bloxdRenderDebug,
          Wd = (0, Rd.y)(),
          Fd = void 0 === (null === md || void 0 === md ? void 0 : md.parallelCompile) ? "" : `; parallel compile ${md.parallelCompile}`;
        wd(`renderer gl ${Wd?`${Wd.vendor} / ${Wd.renderer}`:"(not read)"}; terrain fetch ${null!==(dd=null===md||void 0===md?void 0:md.fetch)&&void 0!==dd?dd:"(not noted)"}${Fd}`), wd(`renderer caps ${null!==(Od=null===md||void 0===md?void 0:md.caps)&&void 0!==Od?Od:"(not noted)"}`)
      }
    }
    let Jd = null;

    function Ud(dd) {
      return (0, Nd.i)(), Jd ??= new Ed(dd), Jd
    }
  },
  5431: (dd, Od, md) => {
    function Wd(dd) {
      if (null === dd) return "backend: none picked (no renderer build)";
      const Od = dd.adapter ? `${dd.adapter.vendor}/${dd.adapter.architecture}` : "none";
      return `backend ${dd.backend}: reason ${dd.reason}, source ${dd.source}, adapter ${Od}`
    }
    md.d(Od, {
      e: () => Wd
    })
  },
  35404: (dd, Od, md) => {
    function Wd(dd) {
      return `hidden ${dd.changes} changes, ${Math.round(dd.hiddenMs)} ms`
    }
    md.d(Od, {
      d: () => Fd,
      g: () => Wd
    });
    class Fd {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(dd) {
        this.changes++, document.hidden ? this.hiddenSinceMs = dd : this.hiddenSinceMs >= 0 && (this.hiddenMs += dd - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(dd) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? dd - this.hiddenSinceMs : 0)
        }
      }
    }
  },
  42991: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd,
      f: () => Rd,
      h: () => Kd
    });
    var Wd = md(42540),
      Fd = md(42552);

    function Rd(dd) {
      if (dd.queries.drawCensus() < Wd.Db.BYTES) return null;
      const Od = dd.memoryData(dd.scratch(), Wd.Db.BYTES, 4, "the draw census");
      return null === Od ? null : {
        terrainOpaque: Wd.Db.terrainOpaque(Od, 0),
        terrainTransparent: Wd.Db.terrainTransparent(Od, 0),
        terrainPack: Wd.Db.terrainPack(Od, 0),
        earthSky: Wd.Db.earthSky(Od, 0),
        skyMeshes: Wd.Db.skyMeshes(Od, 0),
        regular: Wd.Db.regular(Od, 0),
        thin: Wd.Db.thin(Od, 0),
        line: Wd.Db.line(Od, 0),
        text: Wd.Db.text(Od, 0),
        particles: Wd.Db.particles(Od, 0),
        terrainParts: Wd.Db.terrainParts(Od, 0),
        terrainCompiling: Wd.Db.terrainCompiling(Od, 0),
        ringCopiesMax: Wd.Db.ringCopiesMax(Od, 0),
        ringBusyWrites: Wd.Db.ringBusyWrites(Od, 0)
      }
    }

    function Xd(dd) {
      const {
        terrainOpaque: Od,
        terrainTransparent: md,
        earthSky: Wd,
        skyMeshes: Fd,
        regular: Rd,
        thin: Xd,
        line: Kd,
        text: hd,
        particles: vd
      } = dd;
      return Od + md + Wd + Fd + Rd + Xd + Kd + hd + vd
    }

    function Kd() {
      const dd = (0, Fd.l)();
      return !0 === (null === dd || void 0 === dd ? void 0 : dd.isCoreRunning) ? function(dd) {
        const Od = Rd(dd);
        if (null === Od) return [];
        const {
          terrainOpaque: md,
          terrainTransparent: Wd,
          terrainPack: Fd,
          earthSky: Kd,
          skyMeshes: hd,
          regular: vd,
          thin: Qd,
          line: td,
          text: od,
          particles: Nd
        } = Od;
        return [{
          label: "Drawn",
          value: `${Xd(Od)}`
        }, {
          label: "Terrain",
          value: `${md} opaque / ${Wd} transparent (${Fd} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${vd} / ${Qd}`
        }, {
          label: "Text / Lines",
          value: `${od} / ${td}`
        }, {
          label: "Sky / Particles",
          value: `${Kd+hd} / ${Nd}`
        }]
      }(dd.api) : []
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);