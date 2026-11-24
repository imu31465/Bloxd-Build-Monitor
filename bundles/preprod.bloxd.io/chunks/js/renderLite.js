export const id = 50;
export const ids = [50];
export const modules = {
  51208: (pp, ip, cp) => {
    cp.d(ip, {
      startRenderLite: () => Rp
    });
    var Op = cp(2963),
      op = cp(657),
      Ip = cp(129),
      Sp = cp(4911),
      xp = cp(41248),
      Lp = cp(4903),
      Yp = cp(40911),
      Dp = cp(40783),
      Ap = cp(40954),
      Pp = cp(2908),
      Wp = cp(4596),
      yp = cp(34287);
    const Up = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class wp {
      constructor(pp) {
        this.label = void 0, this.noted = void 0, this.lines = 0, this.atMs = -1 / 0, this.label = pp
      }
      line(pp, ip) {
        const cp = this.lines < 10 ? 6e4 : 6e5;
        return void 0 === pp || pp === this.noted || ip - this.atMs < cp ? null : (this.noted = pp, this.lines++, this.atMs = ip, `${this.label}: ${pp}`)
      }
    }
    class vp {
      constructor() {
        this.failuresLogged = 0, this.heldLogged = !1, this.links = new wp("gl links"), this.programUse = new wp("gl programs")
      }
      failures(pp) {
        const ip = pp ? pp.split(" ") : [],
          cp = ip.slice(this.failuresLogged).map((pp => {
            var ip;
            const [cp, Op] = pp.split(":"), op = null !== (ip = Up.get(cp.slice(-1))) && void 0 !== ip ? ip : "";
            return `gl link failed: program row ${parseInt(cp)}${op}, read ${Op} ms after issue`
          }));
        return this.failuresLogged = ip.length, cp
      }
      heldAtBackstop(pp) {
        return this.heldLogged || void 0 === pp ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${pp}`)
      }
      summaryLines(pp, ip, cp, Op) {
        const op = this.links.line(pp, cp);
        return [op && `${op}; tab ${(0,yp.e)(Op)}`, this.programUse.line(ip, cp)].filter((pp => null !== pp))
      }
    }
    var tp = cp(4794);
    class Hp {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(pp, ip, cp) {
        if ("none" !== ip && (this.frames++, "paced" === ip && this.paced++, "drawn" === ip)) {
          if (this.drawn++, this.renderUs += cp, this.renderUsMax = Math.max(this.renderUsMax, cp), null !== this.lastDrawnMs) {
            const ip = pp - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, ip), ip >= 50 && this.longGaps++
          }
          this.lastDrawnMs = pp
        }
      }
      restart() {
        this.take(), this.lastDrawnMs = null
      }
      take() {
        const pp = {
          frames: this.frames,
          drawn: this.drawn,
          paced: this.paced,
          gapMaxMs: this.gapMaxMs,
          longGaps: this.longGaps,
          renderUs: this.renderUs,
          renderUsMax: this.renderUsMax
        };
        return this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, pp
      }
    }

    function dp(pp) {
      return (pp / 1048576).toFixed(1)
    }
    class ep {
      constructor() {
        this.logged = 0, this.seen = new Set, this.unlogged = 0
      }
      admit(pp) {
        return this.logged >= 20 || this.seen.has(pp) ? (this.unlogged++, null) : (this.seen.add(pp), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${pp}` : pp)
      }
      takeUnlogged() {
        const pp = this.unlogged;
        return this.unlogged = 0, pp
      }
    }

    function jp(pp) {
      (0, Pp.n)("renderlite", pp)
    }
    class kp {
      constructor(pp) {
        this.frames = new Hp, this.events = new ep, this.programLines = new vp, this.compileSummary = new wp("webgpu compiles"), this.hidden = new yp.c, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this.visibilityChanged = () => {
          const pp = performance.now();
          this.hidden.changed(pp), this.restartWindow(pp)
        }, this.LP = () => {
          var pp, ip;
          const cp = this.session,
            op = (0, Dp.k)(),
            Ip = performance.now();
          if (this.logLinks(Ip), this.logGrid(), null === cp || cp.isStopped || !0 !== (null === op || void 0 === op ? void 0 : op.isCoreRunning)) return void this.restartWindow(Ip);
          if (document.hidden) return;
          if (Ip - this.windowStart < 2500) return;
          if (! function(pp) {
              return pp < 12 || (pp - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const Lp = cp.headerWord(Sp.x.GpuTimed),
            Ap = cp.headerWord(Sp.x.GpuFrameUs),
            Pp = this.sampled === cp ? {
              timed: Lp - this.gpuTimed >>> 0,
              us: Ap - this.gpuUs >>> 0
            } : null;
          this.sampled = cp, this.gpuTimed = Lp, this.gpuUs = Ap;
          const Wp = null !== (pp = null === (ip = (0, Yp.Y)((0, Op.H)())) || void 0 === ip ? void 0 : ip.XOp()) && void 0 !== pp ? pp : 0;
          jp(function(pp, ip) {
            const cp = ip.windowMs / 1e3,
              Op = [`${Math.round(cp)}s: ${pp.drawn} drawn (${(pp.drawn/cp).toFixed(1)}/s), ${pp.paced} paced, ${pp.frames-pp.drawn-pp.paced} skipped`, `gap max ${Math.round(pp.gapMaxMs)} ms, ${pp.longGaps} over 50 ms`, `render cpu ${pp.drawn?(pp.renderUs/pp.drawn/1e3).toFixed(2):"-"} ms mean, ${(pp.renderUsMax/1e3).toFixed(1)} max`];
            null !== ip.gpu && Op.push(`gpu ${ip.gpu.timed?(ip.gpu.us/ip.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${ip.gpu.timed} timed`);
            const op = ip.census;
            Op.push(null === op ? "draws none yet" : `draws ${(0,xp.b)(op)} (terrain ${op.terrainOpaque}+${op.terrainTransparent}, pack ${op.terrainPack}, meshes ${op.regular+op.thin+op.line+op.text}, sky ${op.earthSky+op.skyMeshes}, particles ${op.particles})`), null !== op && op.ringCopiesMax > 0 && Op.push(`frame rings ${op.ringCopiesMax} copies max, ${op.ringBusyWrites} busy writes so far`);
            const Ip = null === ip.gpuBytesBefore ? "" : ` (${ip.gpuBytes>=ip.gpuBytesBefore?"+":"-"}${dp(Math.abs(ip.gpuBytes-ip.gpuBytesBefore))})`;
            return Op.push(`gpu mem ${dp(ip.gpuBytes)} MiB${Ip}`), Op.push(`pending ${ip.pending}`, "terrain " + (ip.terrainDrawn ? "drawn" : "not drawn yet")), ip.eventsUnlogged > 0 && Op.push(`${ip.eventsUnlogged} events unlogged`), Op.join("; ")
          }(this.frames.take(), {
            windowMs: Ip - this.windowStart,
            gpu: Pp,
            census: (0, xp.c)(op.api),
            gpuBytes: Wp,
            gpuBytesBefore: this.gpuBytes,
            pending: cp.headerWord(Sp.x.RenderPending),
            terrainDrawn: 0 !== (cp.headerWord(Sp.x.LoadSteps) & Sp.L.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = Wp, this.windowStart = Ip
        }, jp(`${(0,tp.e)(pp)}; client ${op.p.client} (${op.p.reason})`), setInterval(this.LP, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(pp, ip, cp) {
        this.session = pp, this.frames.frame(ip, cp, "drawn" === cp ? pp.headerWord(Sp.x.RenderUs) : 0)
      }
      coreErrors(pp) {
        for (const {
            code: Op,
            detail: op
          }
          of pp) {
          var ip, cp;
          if (Op >= Sp.k.RenderDeviceLost && Op <= Sp.k.RenderSerialLinks) this.event(`render error ${(0,Lp._d)(Op)}${null!==(ip=null===(cp=(0,Ap.c)(Op,op))||void 0===cp?void 0:cp.words)&&void 0!==ip?ip:""} (detail ${op})`)
        }
      }
      reload(pp, ip, cp, Op) {
        this.event(`render reload: ${pp?"webgpu":"gl"} ${cp}, losses ${ip}${void 0===Op?"":`: ${Op}`}`)
      }
      crashed(pp) {
        let {
          site: ip,
          error: cp,
          header: Op
        } = pp;
        const op = null !== Op && 0 !== Op.lastError ? `, last error ${(0,Lp._d)(Op.lastError)} (detail ${Op.lastErrorDetail})` : "",
          Ip = cp instanceof Error ? `${cp.name}: ${cp.message}` : null === cp || void 0 === cp ? "" : String(cp);
        this.event(`core stopped at ${ip}${op}${Ip&&`: ${Ip}`}`)
      }
      event(pp) {
        const ip = this.events.admit(pp);
        null !== ip && jp(ip)
      }
      restartWindow(pp) {
        this.frames.restart(), this.windowStart = pp;
        const ip = this.session;
        null === ip || ip.isStopped ? this.sampled = null : (this.sampled = ip, this.gpuTimed = ip.headerWord(Sp.x.GpuTimed), this.gpuUs = ip.headerWord(Sp.x.GpuFrameUs))
      }
      logLinks(pp) {
        const ip = window.bloxdRenderDebug;
        for (const op of this.programLines.failures(null === ip || void 0 === ip ? void 0 : ip.linkFailures)) this.event(op);
        const cp = this.programLines.heldAtBackstop(null === ip || void 0 === ip ? void 0 : ip.heldAtBackstop);
        null !== cp && jp(cp);
        for (const op of this.programLines.summaryLines(null === ip || void 0 === ip ? void 0 : ip.links, null === ip || void 0 === ip ? void 0 : ip.programUse, pp, this.hidden.totals(pp))) jp(op);
        const Op = this.compileSummary.line(null === ip || void 0 === ip ? void 0 : ip.compiles, pp);
        null !== Op && jp(Op)
      }
      logGrid() {
        var pp;
        const ip = null === (pp = window.bloxdRenderDebug) || void 0 === pp ? void 0 : pp.gridFaces;
        this.gridLogged || void 0 === ip || (this.gridLogged = !0, jp(`gl1 grid ${ip}`))
      }
      logRenderer() {
        var pp, ip;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const cp = window.bloxdRenderDebug,
          Op = (0, Ip.r)(),
          op = void 0 === (null === cp || void 0 === cp ? void 0 : cp.parallelCompile) ? "" : `; parallel compile ${cp.parallelCompile}`;
        jp(`renderer gl ${Op?`${Op.vendor} / ${Op.renderer}`:"(not read)"}; terrain fetch ${null!==(pp=null===cp||void 0===cp?void 0:cp.fetch)&&void 0!==pp?pp:"(not noted)"}${op}`), jp(`renderer caps ${null!==(ip=null===cp||void 0===cp?void 0:cp.caps)&&void 0!==ip?ip:"(not noted)"}`)
      }
    }
    let mp = null;

    function Rp(pp) {
      return (0, Wp.f)(), mp ??= new kp(pp), mp
    }
  },
  4794: (pp, ip, cp) => {
    function Op(pp) {
      if (null === pp) return "backend: none picked (no renderer build)";
      const ip = pp.adapter ? `${pp.adapter.vendor}/${pp.adapter.architecture}` : "none";
      return `backend ${pp.backend}: reason ${pp.reason}, source ${pp.source}, adapter ${ip}`
    }
    cp.d(ip, {
      e: () => Op
    })
  },
  34287: (pp, ip, cp) => {
    function Op(pp) {
      return `hidden ${pp.changes} changes, ${Math.round(pp.hiddenMs)} ms`
    }
    cp.d(ip, {
      c: () => op,
      e: () => Op
    });
    class op {
      constructor() {
        this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
      }
      changed(pp) {
        this.changes++, document.hidden ? this.hiddenSinceMs = pp : this.hiddenSinceMs >= 0 && (this.hiddenMs += pp - this.hiddenSinceMs, this.hiddenSinceMs = -1)
      }
      totals(pp) {
        return {
          changes: this.changes,
          hiddenMs: this.hiddenMs + (this.hiddenSinceMs >= 0 ? pp - this.hiddenSinceMs : 0)
        }
      }
    }
  },
  41248: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp,
      c: () => Ip,
      d: () => xp
    });
    var Op = cp(40769),
      op = cp(40783);

    function Ip(pp) {
      if (pp.queries.drawCensus() < Op.ob.BYTES) return null;
      const ip = pp.memoryData(pp.scratch(), Op.ob.BYTES, 4, "the draw census");
      return null === ip ? null : {
        terrainOpaque: Op.ob.terrainOpaque(ip, 0),
        terrainTransparent: Op.ob.terrainTransparent(ip, 0),
        terrainPack: Op.ob.terrainPack(ip, 0),
        earthSky: Op.ob.earthSky(ip, 0),
        skyMeshes: Op.ob.skyMeshes(ip, 0),
        regular: Op.ob.regular(ip, 0),
        thin: Op.ob.thin(ip, 0),
        line: Op.ob.line(ip, 0),
        text: Op.ob.text(ip, 0),
        particles: Op.ob.particles(ip, 0),
        terrainParts: Op.ob.terrainParts(ip, 0),
        terrainCompiling: Op.ob.terrainCompiling(ip, 0),
        ringCopiesMax: Op.ob.ringCopiesMax(ip, 0),
        ringBusyWrites: Op.ob.ringBusyWrites(ip, 0)
      }
    }

    function Sp(pp) {
      const {
        terrainOpaque: ip,
        terrainTransparent: cp,
        earthSky: Op,
        skyMeshes: op,
        regular: Ip,
        thin: Sp,
        line: xp,
        text: Lp,
        particles: Yp
      } = pp;
      return ip + cp + Op + op + Ip + Sp + xp + Lp + Yp
    }

    function xp() {
      const pp = (0, op.k)();
      return !0 === (null === pp || void 0 === pp ? void 0 : pp.isCoreRunning) ? function(pp) {
        const ip = Ip(pp);
        if (null === ip) return [];
        const {
          terrainOpaque: cp,
          terrainTransparent: Op,
          terrainPack: op,
          earthSky: xp,
          skyMeshes: Lp,
          regular: Yp,
          thin: Dp,
          line: Ap,
          text: Pp,
          particles: Wp
        } = ip;
        return [{
          label: "Drawn",
          value: `${Sp(ip)}`
        }, {
          label: "Terrain",
          value: `${cp} opaque / ${Op} transparent (${op} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${Yp} / ${Dp}`
        }, {
          label: "Text / Lines",
          value: `${Pp} / ${Ap}`
        }, {
          label: "Sky / Particles",
          value: `${xp+Lp} / ${Wp}`
        }]
      }(pp.api) : []
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);