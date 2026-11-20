export const id = 48;
export const ids = [48];
export const modules = {
  42369: (zz, tz, sz) => {
    sz.d(tz, {
      startRenderLite: () => mz
    });
    var Fz = sz(3376),
      Wz = sz(601),
      Xz = sz(129),
      Oz = sz(4436),
      oz = sz(39851),
      vz = sz(4432),
      Uz = sz(39887),
      Kz = sz(39720),
      uz = sz(40046),
      Nz = sz(2637),
      bz = sz(4153);
    const wz = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class Dz {
      constructor() {
        this.failuresLogged = 0, this.summary = void 0, this.summaries = 0, this.summaryAtMs = -1 / 0
      }
      failures(zz) {
        const tz = zz ? zz.split(" ") : [],
          sz = tz.slice(this.failuresLogged).map((zz => {
            var tz;
            const [sz, Fz] = zz.split(":"), Wz = null !== (tz = wz.get(sz.slice(-1))) && void 0 !== tz ? tz : "";
            return `gl link failed: program row ${parseInt(sz)}${Wz}, read ${Fz} ms after issue`
          }));
        return this.failuresLogged = tz.length, sz
      }
      summaryLine(zz, tz) {
        const sz = this.summaries < 10 ? 6e4 : 6e5;
        return void 0 === zz || zz === this.summary || tz - this.summaryAtMs < sz ? null : (this.summary = zz, this.summaries++, this.summaryAtMs = tz, `gl links: ${zz}`)
      }
    }
    var gz = sz(4349);
    class Hz {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(zz, tz, sz) {
        if ("none" !== tz && (this.frames++, "paced" === tz && this.paced++, "drawn" === tz)) {
          if (this.drawn++, this.renderUs += sz, this.renderUsMax = Math.max(this.renderUsMax, sz), null !== this.lastDrawnMs) {
            const tz = zz - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, tz), tz >= 50 && this.longGaps++
          }
          this.lastDrawnMs = zz
        }
      }
      restart() {
        this.take(), this.lastDrawnMs = null
      }
      take() {
        const zz = {
          frames: this.frames,
          drawn: this.drawn,
          paced: this.paced,
          gapMaxMs: this.gapMaxMs,
          longGaps: this.longGaps,
          renderUs: this.renderUs,
          renderUsMax: this.renderUsMax
        };
        return this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, zz
      }
    }

    function Bz(zz) {
      return (zz / 1048576).toFixed(1)
    }
    class Pz {
      constructor() {
        this.logged = 0, this.seen = new Set, this.unlogged = 0
      }
      admit(zz) {
        return this.logged >= 20 || this.seen.has(zz) ? (this.unlogged++, null) : (this.seen.add(zz), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${zz}` : zz)
      }
      takeUnlogged() {
        const zz = this.unlogged;
        return this.unlogged = 0, zz
      }
    }

    function rz(zz) {
      (0, Nz.g)("renderlite", function(zz) {
        let tz = 0,
          sz = 0,
          Fz = 0;
        for (const Xz of zz) {
          var Wz;
          const Oz = null !== (Wz = Xz.codePointAt(0)) && void 0 !== Wz ? Wz : 0;
          if (tz += Oz < 128 ? 1 : Oz < 2048 ? 2 : Oz < 65536 ? 3 : 4, tz > 375) return `${zz.slice(0,Fz)}...`;
          sz += Xz.length, tz <= 372 && (Fz = sz)
        }
        return zz
      }(zz))
    }
    class Yz {
      constructor(zz) {
        this.frames = new Hz, this.events = new Pz, this.links = new Dz, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.visibilityChanged = () => {
          this.restartWindow(performance.now())
        }, this.wN = () => {
          var zz, tz;
          const sz = this.session,
            Wz = (0, Kz.f)(),
            Xz = performance.now();
          if (this.logLinks(Xz), null === sz || sz.isStopped || !0 !== (null === Wz || void 0 === Wz ? void 0 : Wz.isCoreRunning)) return void this.restartWindow(Xz);
          if (document.hidden) return;
          if (Xz - this.windowStart < 2500) return;
          if (! function(zz) {
              return zz < 12 || (zz - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const vz = sz.headerWord(Oz.D.GpuTimed),
            uz = sz.headerWord(Oz.D.GpuFrameUs),
            Nz = this.sampled === sz ? {
              timed: vz - this.gpuTimed >>> 0,
              us: uz - this.gpuUs >>> 0
            } : null;
          this.sampled = sz, this.gpuTimed = vz, this.gpuUs = uz;
          const bz = null !== (zz = null === (tz = (0, Uz.D)((0, Fz.J)())) || void 0 === tz ? void 0 : tz.jsz()) && void 0 !== zz ? zz : 0;
          rz(function(zz, tz) {
            const sz = tz.windowMs / 1e3,
              Fz = [`${Math.round(sz)}s: ${zz.drawn} drawn (${(zz.drawn/sz).toFixed(1)}/s), ${zz.paced} paced, ${zz.frames-zz.drawn-zz.paced} skipped`, `gap max ${Math.round(zz.gapMaxMs)} ms, ${zz.longGaps} over 50 ms`, `render cpu ${zz.drawn?(zz.renderUs/zz.drawn/1e3).toFixed(2):"-"} ms mean, ${(zz.renderUsMax/1e3).toFixed(1)} max`];
            null !== tz.gpu && Fz.push(`gpu ${tz.gpu.timed?(tz.gpu.us/tz.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${tz.gpu.timed} timed`);
            const Wz = tz.census;
            Fz.push(null === Wz ? "draws none yet" : `draws ${(0,oz.e)(Wz)} (terrain ${Wz.terrainOpaque}+${Wz.terrainTransparent}, pack ${Wz.terrainPack}, meshes ${Wz.regular+Wz.thin+Wz.line+Wz.text}, sky ${Wz.earthSky+Wz.skyMeshes}, particles ${Wz.particles})`);
            const Xz = null === tz.gpuBytesBefore ? "" : ` (${tz.gpuBytes>=tz.gpuBytesBefore?"+":"-"}${Bz(Math.abs(tz.gpuBytes-tz.gpuBytesBefore))})`;
            return Fz.push(`gpu mem ${Bz(tz.gpuBytes)} MiB${Xz}`), Fz.push(`pending ${tz.pending}`, "terrain " + (tz.terrainDrawn ? "drawn" : "not drawn yet")), tz.eventsUnlogged > 0 && Fz.push(`${tz.eventsUnlogged} events unlogged`), Fz.join("; ")
          }(this.frames.take(), {
            windowMs: Xz - this.windowStart,
            gpu: Nz,
            census: (0, oz.i)(Wz.api),
            gpuBytes: bz,
            gpuBytesBefore: this.gpuBytes,
            pending: sz.headerWord(Oz.D.RenderPending),
            terrainDrawn: 0 !== (sz.headerWord(Oz.D.LoadSteps) & Oz.K.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = bz, this.windowStart = Xz
        }, rz(`${(0,gz.c)(zz)}; client ${Wz.j.client} (${Wz.j.reason})`), setInterval(this.wN, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(zz, tz, sz) {
        this.session = zz, this.frames.frame(tz, sz, "drawn" === sz ? zz.headerWord(Oz.D.RenderUs) : 0)
      }
      coreErrors(zz) {
        for (const {
            code: Fz,
            detail: Wz
          }
          of zz) {
          var tz, sz;
          if (Fz >= Oz.g.RenderDeviceLost && Fz <= Oz.g.RenderSerialLinks) this.event(`render error ${(0,vz.Wd)(Fz)}${null!==(tz=null===(sz=(0,uz.b)(Fz,Wz))||void 0===sz?void 0:sz.words)&&void 0!==tz?tz:""} (detail ${Wz})`)
        }
      }
      reload(zz, tz, sz, Fz) {
        this.event(`render reload: ${zz?"webgpu":"gl"} ${sz}, losses ${tz}${void 0===Fz?"":`: ${Fz}`}`)
      }
      crashed(zz) {
        let {
          site: tz,
          error: sz,
          header: Fz
        } = zz;
        const Wz = null !== Fz && 0 !== Fz.lastError ? `, last error ${(0,vz.Wd)(Fz.lastError)} (detail ${Fz.lastErrorDetail})` : "",
          Xz = sz instanceof Error ? `${sz.name}: ${sz.message}` : null === sz || void 0 === sz ? "" : String(sz);
        this.event(`core stopped at ${tz}${Wz}${Xz&&`: ${Xz}`}`)
      }
      event(zz) {
        const tz = this.events.admit(zz);
        null !== tz && rz(tz)
      }
      restartWindow(zz) {
        this.frames.restart(), this.windowStart = zz;
        const tz = this.session;
        null === tz || tz.isStopped ? this.sampled = null : (this.sampled = tz, this.gpuTimed = tz.headerWord(Oz.D.GpuTimed), this.gpuUs = tz.headerWord(Oz.D.GpuFrameUs))
      }
      logLinks(zz) {
        const tz = window.bloxdRenderDebug;
        for (const Fz of this.links.failures(null === tz || void 0 === tz ? void 0 : tz.linkFailures)) this.event(Fz);
        const sz = this.links.summaryLine(null === tz || void 0 === tz ? void 0 : tz.links, zz);
        null !== sz && rz(sz)
      }
      logRenderer() {
        var zz, tz;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const sz = window.bloxdRenderDebug,
          Fz = (0, Xz.k)(),
          Wz = void 0 === (null === sz || void 0 === sz ? void 0 : sz.parallelCompile) ? "" : `; parallel compile ${sz.parallelCompile}`;
        rz(`renderer gl ${Fz?`${Fz.vendor} / ${Fz.renderer}`:"(not read)"}; terrain fetch ${null!==(zz=null===sz||void 0===sz?void 0:sz.fetch)&&void 0!==zz?zz:"(not noted)"}${Wz}`), rz(`renderer caps ${null!==(tz=null===sz||void 0===sz?void 0:sz.caps)&&void 0!==tz?tz:"(not noted)"}`)
      }
    }
    let xz = null;

    function mz(zz) {
      return (0, bz.g)(), xz ??= new Yz(zz), xz
    }
  },
  4349: (zz, tz, sz) => {
    function Fz(zz) {
      if (null === zz) return "backend: none picked (no renderer build)";
      const tz = zz.adapter ? `${zz.adapter.vendor}/${zz.adapter.architecture}` : "none";
      return `backend ${zz.backend}: reason ${zz.reason}, source ${zz.source}, adapter ${tz}`
    }
    sz.d(tz, {
      c: () => Fz
    })
  },
  39851: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Oz,
      i: () => Xz,
      k: () => oz
    });
    var Fz = sz(39714),
      Wz = sz(39720);

    function Xz(zz) {
      if (zz.queries.drawCensus() < Fz.xb.BYTES) return null;
      const tz = zz.memoryData(zz.scratch(), Fz.xb.BYTES, 4, "the draw census");
      return null === tz ? null : {
        terrainOpaque: Fz.xb.terrainOpaque(tz, 0),
        terrainTransparent: Fz.xb.terrainTransparent(tz, 0),
        terrainPack: Fz.xb.terrainPack(tz, 0),
        earthSky: Fz.xb.earthSky(tz, 0),
        skyMeshes: Fz.xb.skyMeshes(tz, 0),
        regular: Fz.xb.regular(tz, 0),
        thin: Fz.xb.thin(tz, 0),
        line: Fz.xb.line(tz, 0),
        text: Fz.xb.text(tz, 0),
        particles: Fz.xb.particles(tz, 0)
      }
    }

    function Oz(zz) {
      const {
        terrainOpaque: tz,
        terrainTransparent: sz,
        earthSky: Fz,
        skyMeshes: Wz,
        regular: Xz,
        thin: Oz,
        line: oz,
        text: vz,
        particles: Uz
      } = zz;
      return tz + sz + Fz + Wz + Xz + Oz + oz + vz + Uz
    }

    function oz() {
      const zz = (0, Wz.f)();
      return !0 === (null === zz || void 0 === zz ? void 0 : zz.isCoreRunning) ? function(zz) {
        const tz = Xz(zz);
        if (null === tz) return [];
        const {
          terrainOpaque: sz,
          terrainTransparent: Fz,
          terrainPack: Wz,
          earthSky: oz,
          skyMeshes: vz,
          regular: Uz,
          thin: Kz,
          line: uz,
          text: Nz,
          particles: bz
        } = tz;
        return [{
          label: "Drawn",
          value: `${Oz(tz)}`
        }, {
          label: "Terrain",
          value: `${sz} opaque / ${Fz} transparent (${Wz} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${Uz} / ${Kz}`
        }, {
          label: "Text / Lines",
          value: `${Nz} / ${uz}`
        }, {
          label: "Sky / Particles",
          value: `${oz+vz} / ${bz}`
        }]
      }(zz.api) : []
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);