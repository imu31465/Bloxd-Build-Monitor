export const id = 48;
export const ids = [48];
export const modules = {
  42598: (zz, uz, bz) => {
    bz.d(uz, {
      startRenderLite: () => Nz
    });
    var Ez = bz(3468),
      nz = bz(606),
      iz = bz(125),
      lz = bz(4564),
      Mz = bz(39902),
      tz = bz(4560),
      Hz = bz(39965),
      Oz = bz(39750),
      pz = bz(40153),
      dz = bz(2689),
      Fz = bz(4282);
    const Zz = new Map([
      ["r", " retry"],
      ["f", " fallback"]
    ]);
    class Rz {
      constructor() {
        this.failuresLogged = 0, this.summary = void 0, this.summaries = 0, this.summaryAtMs = -1 / 0
      }
      failures(zz) {
        const uz = zz ? zz.split(" ") : [],
          bz = uz.slice(this.failuresLogged).map((zz => {
            var uz;
            const [bz, Ez] = zz.split(":"), nz = null !== (uz = Zz.get(bz.slice(-1))) && void 0 !== uz ? uz : "";
            return `gl link failed: program row ${parseInt(bz)}${nz}, read ${Ez} ms after issue`
          }));
        return this.failuresLogged = uz.length, bz
      }
      summaryLine(zz, uz) {
        const bz = this.summaries < 10 ? 6e4 : 6e5;
        return void 0 === zz || zz === this.summary || uz - this.summaryAtMs < bz ? null : (this.summary = zz, this.summaries++, this.summaryAtMs = uz, `gl links: ${zz}`)
      }
    }
    var Kz = bz(4454);
    class wz {
      constructor() {
        this.frames = 0, this.drawn = 0, this.paced = 0, this.gapMaxMs = 0, this.longGaps = 0, this.renderUs = 0, this.renderUsMax = 0, this.lastDrawnMs = null
      }
      frame(zz, uz, bz) {
        if ("none" !== uz && (this.frames++, "paced" === uz && this.paced++, "drawn" === uz)) {
          if (this.drawn++, this.renderUs += bz, this.renderUsMax = Math.max(this.renderUsMax, bz), null !== this.lastDrawnMs) {
            const uz = zz - this.lastDrawnMs;
            this.gapMaxMs = Math.max(this.gapMaxMs, uz), uz >= 50 && this.longGaps++
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

    function Xz(zz) {
      return (zz / 1048576).toFixed(1)
    }
    class fz {
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

    function sz(zz) {
      (0, dz.i)("renderlite", function(zz) {
        let uz = 0,
          bz = 0,
          Ez = 0;
        for (const iz of zz) {
          var nz;
          const lz = null !== (nz = iz.codePointAt(0)) && void 0 !== nz ? nz : 0;
          if (uz += lz < 128 ? 1 : lz < 2048 ? 2 : lz < 65536 ? 3 : 4, uz > 375) return `${zz.slice(0,Ez)}...`;
          bz += iz.length, uz <= 372 && (Ez = bz)
        }
        return zz
      }(zz))
    }
    class rz {
      constructor(zz) {
        this.frames = new wz, this.events = new fz, this.links = new Rz, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.visibilityChanged = () => {
          this.restartWindow(performance.now())
        }, this.sd = () => {
          var zz, uz;
          const bz = this.session,
            nz = (0, Oz.j)(),
            iz = performance.now();
          if (this.logLinks(iz), null === bz || bz.isStopped || !0 !== (null === nz || void 0 === nz ? void 0 : nz.isCoreRunning)) return void this.restartWindow(iz);
          if (document.hidden) return;
          if (iz - this.windowStart < 2500) return;
          if (! function(zz) {
              return zz < 12 || (zz - 12) % 3 === 2
            }(this.windows++)) return;
          this.logRenderer();
          const tz = bz.headerWord(lz.A.GpuTimed),
            pz = bz.headerWord(lz.A.GpuFrameUs),
            dz = this.sampled === bz ? {
              timed: tz - this.gpuTimed >>> 0,
              us: pz - this.gpuUs >>> 0
            } : null;
          this.sampled = bz, this.gpuTimed = tz, this.gpuUs = pz;
          const Fz = null !== (zz = null === (uz = (0, Hz.E)((0, Ez.G)())) || void 0 === uz ? void 0 : uz.wbz()) && void 0 !== zz ? zz : 0;
          sz(function(zz, uz) {
            const bz = uz.windowMs / 1e3,
              Ez = [`${Math.round(bz)}s: ${zz.drawn} drawn (${(zz.drawn/bz).toFixed(1)}/s), ${zz.paced} paced, ${zz.frames-zz.drawn-zz.paced} skipped`, `gap max ${Math.round(zz.gapMaxMs)} ms, ${zz.longGaps} over 50 ms`, `render cpu ${zz.drawn?(zz.renderUs/zz.drawn/1e3).toFixed(2):"-"} ms mean, ${(zz.renderUsMax/1e3).toFixed(1)} max`];
            null !== uz.gpu && Ez.push(`gpu ${uz.gpu.timed?(uz.gpu.us/uz.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${uz.gpu.timed} timed`);
            const nz = uz.census;
            Ez.push(null === nz ? "draws none yet" : `draws ${(0,Mz.b)(nz)} (terrain ${nz.terrainOpaque}+${nz.terrainTransparent}, pack ${nz.terrainPack}, meshes ${nz.regular+nz.thin+nz.line+nz.text}, sky ${nz.earthSky+nz.skyMeshes}, particles ${nz.particles})`);
            const iz = null === uz.gpuBytesBefore ? "" : ` (${uz.gpuBytes>=uz.gpuBytesBefore?"+":"-"}${Xz(Math.abs(uz.gpuBytes-uz.gpuBytesBefore))})`;
            return Ez.push(`gpu mem ${Xz(uz.gpuBytes)} MiB${iz}`), Ez.push(`pending ${uz.pending}`, "terrain " + (uz.terrainDrawn ? "drawn" : "not drawn yet")), uz.eventsUnlogged > 0 && Ez.push(`${uz.eventsUnlogged} events unlogged`), Ez.join("; ")
          }(this.frames.take(), {
            windowMs: iz - this.windowStart,
            gpu: dz,
            census: (0, Mz.d)(nz.api),
            gpuBytes: Fz,
            gpuBytesBefore: this.gpuBytes,
            pending: bz.headerWord(lz.A.RenderPending),
            terrainDrawn: 0 !== (bz.headerWord(lz.A.LoadSteps) & lz.M.TerrainDrawn),
            eventsUnlogged: this.events.takeUnlogged()
          })), this.gpuBytes = Fz, this.windowStart = iz
        }, sz(`${(0,Kz.d)(zz)}; client ${nz.o.client} (${nz.o.reason})`), setInterval(this.sd, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
      }
      frame(zz, uz, bz) {
        this.session = zz, this.frames.frame(uz, bz, "drawn" === bz ? zz.headerWord(lz.A.RenderUs) : 0)
      }
      coreErrors(zz) {
        for (const {
            code: Ez,
            detail: nz
          }
          of zz) {
          var uz, bz;
          if (Ez >= lz.g.RenderDeviceLost && Ez <= lz.g.RenderSerialLinks) this.event(`render error ${(0,tz.Td)(Ez)}${null!==(uz=null===(bz=(0,pz.b)(Ez,nz))||void 0===bz?void 0:bz.words)&&void 0!==uz?uz:""} (detail ${nz})`)
        }
      }
      reload(zz, uz, bz, Ez) {
        this.event(`render reload: ${zz?"webgpu":"gl"} ${bz}, losses ${uz}${void 0===Ez?"":`: ${Ez}`}`)
      }
      crashed(zz) {
        let {
          site: uz,
          error: bz,
          header: Ez
        } = zz;
        const nz = null !== Ez && 0 !== Ez.lastError ? `, last error ${(0,tz.Td)(Ez.lastError)} (detail ${Ez.lastErrorDetail})` : "",
          iz = bz instanceof Error ? `${bz.name}: ${bz.message}` : null === bz || void 0 === bz ? "" : String(bz);
        this.event(`core stopped at ${uz}${nz}${iz&&`: ${iz}`}`)
      }
      event(zz) {
        const uz = this.events.admit(zz);
        null !== uz && sz(uz)
      }
      restartWindow(zz) {
        this.frames.restart(), this.windowStart = zz;
        const uz = this.session;
        null === uz || uz.isStopped ? this.sampled = null : (this.sampled = uz, this.gpuTimed = uz.headerWord(lz.A.GpuTimed), this.gpuUs = uz.headerWord(lz.A.GpuFrameUs))
      }
      logLinks(zz) {
        const uz = window.bloxdRenderDebug;
        for (const Ez of this.links.failures(null === uz || void 0 === uz ? void 0 : uz.linkFailures)) this.event(Ez);
        const bz = this.links.summaryLine(null === uz || void 0 === uz ? void 0 : uz.links, zz);
        null !== bz && sz(bz)
      }
      logRenderer() {
        var zz, uz;
        if (this.rendererLogged) return;
        this.rendererLogged = !0;
        const bz = window.bloxdRenderDebug,
          Ez = (0, iz.m)(),
          nz = void 0 === (null === bz || void 0 === bz ? void 0 : bz.parallelCompile) ? "" : `; parallel compile ${bz.parallelCompile}`;
        sz(`renderer gl ${Ez?`${Ez.vendor} / ${Ez.renderer}`:"(not read)"}; terrain fetch ${null!==(zz=null===bz||void 0===bz?void 0:bz.fetch)&&void 0!==zz?zz:"(not noted)"}${nz}`), sz(`renderer caps ${null!==(uz=null===bz||void 0===bz?void 0:bz.caps)&&void 0!==uz?uz:"(not noted)"}`)
      }
    }
    let oz = null;

    function Nz(zz) {
      return (0, Fz.h)(), oz ??= new rz(zz), oz
    }
  },
  4454: (zz, uz, bz) => {
    function Ez(zz) {
      if (null === zz) return "backend: none picked (no renderer build)";
      const uz = zz.adapter ? `${zz.adapter.vendor}/${zz.adapter.architecture}` : "none";
      return `backend ${zz.backend}: reason ${zz.reason}, source ${zz.source}, adapter ${uz}`
    }
    bz.d(uz, {
      d: () => Ez
    })
  },
  39902: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => lz,
      d: () => iz,
      h: () => Mz
    });
    var Ez = bz(39740),
      nz = bz(39750);

    function iz(zz) {
      if (zz.queries.drawCensus() < Ez.Hb.BYTES) return null;
      const uz = zz.memoryData(zz.scratch(), Ez.Hb.BYTES, 4, "the draw census");
      return null === uz ? null : {
        terrainOpaque: Ez.Hb.terrainOpaque(uz, 0),
        terrainTransparent: Ez.Hb.terrainTransparent(uz, 0),
        terrainPack: Ez.Hb.terrainPack(uz, 0),
        earthSky: Ez.Hb.earthSky(uz, 0),
        skyMeshes: Ez.Hb.skyMeshes(uz, 0),
        regular: Ez.Hb.regular(uz, 0),
        thin: Ez.Hb.thin(uz, 0),
        line: Ez.Hb.line(uz, 0),
        text: Ez.Hb.text(uz, 0),
        particles: Ez.Hb.particles(uz, 0)
      }
    }

    function lz(zz) {
      const {
        terrainOpaque: uz,
        terrainTransparent: bz,
        earthSky: Ez,
        skyMeshes: nz,
        regular: iz,
        thin: lz,
        line: Mz,
        text: tz,
        particles: Hz
      } = zz;
      return uz + bz + Ez + nz + iz + lz + Mz + tz + Hz
    }

    function Mz() {
      const zz = (0, nz.j)();
      return !0 === (null === zz || void 0 === zz ? void 0 : zz.isCoreRunning) ? function(zz) {
        const uz = iz(zz);
        if (null === uz) return [];
        const {
          terrainOpaque: bz,
          terrainTransparent: Ez,
          terrainPack: nz,
          earthSky: Mz,
          skyMeshes: tz,
          regular: Hz,
          thin: Oz,
          line: pz,
          text: dz,
          particles: Fz
        } = uz;
        return [{
          label: "Drawn",
          value: `${lz(uz)}`
        }, {
          label: "Terrain",
          value: `${bz} opaque / ${Ez} transparent (${nz} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${Hz} / ${Oz}`
        }, {
          label: "Text / Lines",
          value: `${dz} / ${pz}`
        }, {
          label: "Sky / Particles",
          value: `${Mz+tz} / ${Fz}`
        }]
      }(zz.api) : []
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);