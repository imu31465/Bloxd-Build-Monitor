export const id = 4;
export const ids = [4];
export const modules = {
  35900: (zz, uz, bz) => {
    var Ez = {
      "./Artisan Bench.json": [40390, 265],
      "./Aspen Item Pedestal.json": [40398, 266],
      "./Cedar Item Pedestal.json": [40406, 267],
      "./Cherry Item Pedestal.json": [40415, 268],
      "./Furnace.json": [40420, 269],
      "./Jungle Item Pedestal.json": [40428, 270],
      "./Mango Item Pedestal.json": [40436, 271],
      "./Palm Item Pedestal.json": [40443, 272],
      "./Pear Item Pedestal.json": [40448, 273],
      "./Pine Item Pedestal.json": [40453, 274],
      "./Plum Item Pedestal.json": [40457, 275],
      "./Potion Table.json": [40460, 276],
      "./Salvaging Table.json": [40462, 277],
      "./Showcase.json": [40466, 278],
      "./Spectral Item Pedestal.json": [40469, 279],
      "./Workbench.json": [40477, 280]
    };

    function nz(zz) {
      if (!bz.o(Ez, zz)) return Promise.resolve().then((() => {
        var uz = new Error("Cannot find module '" + zz + "'");
        throw uz.code = "MODULE_NOT_FOUND", uz
      }));
      var uz = Ez[zz],
        nz = uz[0];
      return bz.e(uz[1]).then((() => bz(nz)))
    }
    nz.keys = () => Object.keys(Ez), nz.id = 35900, zz.exports = nz
  },
  35897: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      getBlockModelIconUrl: () => dz,
      hasBlockModelIcon: () => Hz
    });
    var Ez = bz(35883),
      nz = bz(35877);
    const iz = bz(35900),
      lz = new Map(iz.keys().filter((zz => zz.startsWith("./"))).map((zz => [zz.slice(2, -5), zz]))),
      Mz = new Map,
      tz = new Map;

    function Hz(zz) {
      return lz.has(zz)
    }

    function Oz(zz) {
      return iz(lz.get(zz))
    }
    async function pz(zz, uz, bz) {
      const {
        data: Ez,
        texture: iz
      } = await
      function(zz) {
        let uz = Mz.get(zz);
        return uz || (uz = Oz(zz).then((async zz => {
          const uz = new Image;
          uz.src = zz.texture, await uz.decode();
          const bz = document.createElement("canvas");
          bz.width = uz.width, bz.height = uz.height;
          const Ez = bz.getContext("2d");
          return Ez.drawImage(uz, 0, 0), {
            data: zz,
            texture: {
              width: uz.width,
              height: uz.height,
              pixels: Ez.getImageData(0, 0, uz.width, uz.height).data
            }
          }
        })), uz.catch((() => {
          Mz.delete(zz)
        })), Mz.set(zz, uz)), uz
      }(zz), lz = document.createElement("canvas");
      return lz.width = uz, lz.height = uz, lz.getContext("2d").putImageData(new ImageData((0, nz.g)(Ez, iz, uz, bz), uz, uz), 0, 0), lz.toDataURL()
    }

    function dz(zz, uz, bz) {
      const nz = `${uz}|${bz}|${zz}`;
      let iz = tz.get(nz);
      return iz || (iz = (0, Ez.f)(zz, (() => Oz(zz)), uz, bz).then((Ez => null !== Ez && void 0 !== Ez ? Ez : pz(zz, uz, bz))), iz.catch((() => {
        tz.delete(nz)
      })), tz.set(nz, iz)), iz
    }
  },
  35883: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Jz,
      f: () => Az,
      h: () => fz
    });
    var Ez = bz(301),
      nz = bz(96);
    const iz = new(bz(35892).c)(new URL(bz.p + bz.u(3), bz.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var lz = bz(1732),
      Mz = bz(2956);
    const tz = 1e4,
      Hz = 3e4;
    let Oz = null,
      pz = null,
      dz = null,
      Fz = !1,
      Zz = 0;
    const Rz = new Map;
    let Kz = null;
    const wz = new Map,
      Xz = new Map;

    function fz(zz) {
      const uz = new Promise(((uz, bz) => {
        const Ez = new Image;
        Ez.crossOrigin = "anonymous", Ez.fetchPriority = "high", Ez.onload = () => {
          uz(Ez)
        }, Ez.onerror = () => {
          bz(new Error(`A block icon's texture did not load: ${zz.slice(0,100)}`))
        }, Ez.src = zz
      }));
      return (0, Mz.g)(uz)
    }

    function sz(zz) {
      var uz, bz;
      Fz || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${zz}`), Fz = !0, null === (uz = Oz) || void 0 === uz || uz.terminate(), Oz = null, pz = null, wz.clear(), Xz.clear();
      for (const Ez of Rz.values()) Ez(null);
      Rz.clear(), null === (bz = Kz) || void 0 === bz || bz()
    }

    function rz() {
      return dz ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === Ez.d.ios_icon_worker_v1 && (0, nz.isWebKit)()) return;
        try {
          Oz = await async function() {
            return await iz.ready(), iz.start()
          }()
        } catch (Mz) {
          return void sz(`did not start (${String(Mz)})`)
        }
        let zz = () => {};
        const uz = new Promise((uz => {
          zz = uz
        }));
        Oz.onmessage = uz => {
          let {
            data: bz
          } = uz;
          if ("started" === bz.type) pz = Oz, zz();
          else if ("failed" === bz.type) sz(`failed a draw (${bz.message})`);
          else {
            var Ez, nz;
            null === (Ez = Rz.get(bz.id)) || void 0 === Ez || Ez(bz.url), Rz.delete(bz.id), null === (nz = Kz) || void 0 === nz || nz()
          }
        }, Oz.onerror = uz => {
          uz.preventDefault(), sz(`stopped (${uz.message||"its script did not load or run"})`), zz()
        };
        const bz = `did not start in ${Hz/1e3} s`;
        await (0, lz.l)(uz, Hz, bz).catch((() => {
          sz(bz)
        }))
      }(), dz
    }

    function oz() {
      if (null !== Kz || 0 === Rz.size) return;
      const zz = new Promise((zz => {
          Kz = zz
        })),
        uz = `did not answer in ${tz/1e3} s`;
      (0, lz.l)(zz, tz, uz).then((() => {
        Kz = null, oz()
      }), (() => {
        Kz = null, sz(uz)
      }))
    }

    function Nz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      zz.postMessage(uz, bz)
    }

    function vz(zz, uz, bz, Ez) {
      let nz = uz.get(bz);
      return void 0 === nz && (nz = Ez().then((async uz => {
        let {
          image: bz,
          request: Ez
        } = uz;
        try {
          const uz = await createImageBitmap(bz);
          Nz(zz, Ez(uz), [uz])
        } catch (nz) {
          sz(`could not take an image (${String(nz)})`)
        }
      })), nz.catch((() => {
        uz.get(bz) === nz && uz.delete(bz)
      })), uz.set(bz, nz)), nz
    }
    async function xz(zz, uz) {
      rz();
      const bz = pz;
      if (null === bz) return null;
      if (await zz(bz), pz !== bz) return null;
      const Ez = ++Zz;
      return new Promise((zz => {
        Rz.set(Ez, zz), Nz(bz, uz(Ez)), oz()
      }))
    }

    function Jz(zz, uz, bz) {
      return xz((uz => Promise.all([zz.top, zz.left, zz.right].map((zz => function(zz, uz) {
        return vz(zz, wz, uz, (async () => ({
          image: await fz(uz),
          request: zz => ({
            type: "texture",
            url: uz,
            bitmap: zz
          })
        })))
      }(uz, zz))))), (Ez => ({
        type: "draw",
        id: Ez,
        ...zz,
        size: uz,
        outlineWidth: bz
      })))
    }

    function Az(zz, uz, bz, Ez) {
      return xz((bz => function(zz, uz, bz) {
        return vz(zz, Xz, uz, (async () => {
          const {
            texture: zz,
            ...Ez
          } = await bz();
          return {
            image: await fz(zz),
            request: zz => ({
              type: "model",
              name: uz,
              bitmap: zz,
              geometry: Ez
            })
          }
        }))
      }(bz, zz, uz)), (uz => ({
        type: "drawModel",
        id: uz,
        name: zz,
        size: bz,
        outlineWidth: Ez
      })))
    }
  },
  35877: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => iz,
      f: () => Mz,
      g: () => lz
    });
    const Ez = 1 / 32,
      nz = [15, 15, 15],
      iz = {
        top: 1,
        left: .85,
        right: .7
      };

    function lz(zz, uz, bz, nz) {
      const {
        vertices: iz,
        uvs: lz,
        indices: tz,
        shades: Hz
      } = zz, Oz = bz * Ez, pz = bz - 2 * Oz, dz = new Float32Array(iz.length);
      for (let Ez = 0; Ez < iz.length; Ez += 3) dz[Ez] = Oz + iz[Ez] * pz, dz[Ez + 1] = Oz + iz[Ez + 1] * pz, dz[Ez + 2] = iz[Ez + 2];
      const Fz = new Float32Array(bz * bz).fill(-1 / 0),
        Zz = new Uint8ClampedArray(bz * bz * 4),
        Rz = 255 * zz.alphaCutoff;
      for (let Ez = 0; Ez < tz.length; Ez += 3) {
        const [zz, nz, iz] = [tz[Ez], tz[Ez + 1], tz[Ez + 2]], [Mz, Oz, pz] = [3 * zz, 3 * nz, 3 * iz], [Kz, wz, Xz, fz, sz, rz] = [dz[Mz], dz[Mz + 1], dz[Oz], dz[Oz + 1], dz[pz], dz[pz + 1]], oz = (Xz - Kz) * (rz - wz) - (sz - Kz) * (fz - wz);
        if (Math.abs(oz) < 1e-9) continue;
        const Nz = Hz[Ez / 3],
          [vz, xz, Jz, Az, Tz, Lz] = [lz[2 * zz], lz[2 * zz + 1], lz[2 * nz], lz[2 * nz + 1], lz[2 * iz], lz[2 * iz + 1]],
          Pz = Math.max(0, Math.floor(Math.min(Kz, Xz, sz))),
          Gz = Math.min(bz - 1, Math.ceil(Math.max(Kz, Xz, sz))),
          az = Math.max(0, Math.floor(Math.min(wz, fz, rz))),
          Vz = Math.min(bz - 1, Math.ceil(Math.max(wz, fz, rz)));
        for (let Ez = az; Ez <= Vz; Ez++)
          for (let zz = Pz; zz <= Gz; zz++) {
            const [nz, iz] = [zz + .5, Ez + .5], lz = ((nz - Kz) * (rz - wz) - (sz - Kz) * (iz - wz)) / oz, tz = ((Xz - Kz) * (iz - wz) - (nz - Kz) * (fz - wz)) / oz, Hz = 1 - lz - tz;
            if (Hz < 0 || lz < 0 || tz < 0) continue;
            const Pz = Hz * dz[Mz + 2] + lz * dz[Oz + 2] + tz * dz[pz + 2],
              Gz = Ez * bz + zz;
            if (Pz <= Fz[Gz]) continue;
            const az = Math.max(0, Math.min(uz.width - 1, Math.floor((Hz * vz + lz * Jz + tz * Tz) * uz.width))),
              Vz = 4 * (Math.max(0, Math.min(uz.height - 1, Math.floor((Hz * xz + lz * Az + tz * Lz) * uz.height))) * uz.width + az);
            uz.pixels[Vz + 3] < Rz || (Fz[Gz] = Pz, Zz[4 * Gz] = uz.pixels[Vz] * Nz, Zz[4 * Gz + 1] = uz.pixels[Vz + 1] * Nz, Zz[4 * Gz + 2] = uz.pixels[Vz + 2] * Nz, Zz[4 * Gz + 3] = 255)
          }
      }
      return Mz(Zz, bz, nz), Zz
    }

    function Mz(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : uz => 0 !== zz[4 * uz + 3];
      const iz = (zz, bz) => zz < 0 || bz < 0 || zz >= uz || bz >= uz || !Ez(bz * uz + zz),
        lz = [];
      for (let nz = 0; nz < uz; nz++)
        for (let zz = 0; zz < uz; zz++)
          if (!iz(zz, nz)) zz: for (let Ez = -bz; Ez <= bz; Ez++) {
            const Mz = bz - Math.abs(Ez);
            for (let bz = -Mz; bz <= Mz; bz++)
              if (iz(zz + bz, nz + Ez)) {
                lz.push(nz * uz + zz);
                break zz
              }
          }
      for (const Mz of lz) zz.set(nz, 4 * Mz), zz[4 * Mz + 3] = 255
    }
  },
  35892: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => nz
    });
    const Ez = {
      wait: function(zz) {
        return new Promise((uz => {
          setTimeout(uz, zz)
        }))
      },
      stallMs: 2e4
    };
    class nz {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ez;
        this.url = zz, this.options = uz, this.timing = bz, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = zz
      }
      ready() {
        if (null === this.fetched) {
          const zz = new AbortController;
          this.fetchAbort = zz, this.fetched = this.fetchWithRetries(zz.signal).finally((() => {
            this.fetchAbort === zz && (this.fetchAbort = null)
          }))
        }
        return this.fetched
      }
      cancel() {
        null !== this.fetchAbort && (this.fetchAbort.abort(), this.fetchAbort = null, this.fetched = null)
      }
      start() {
        return new Worker(this.scriptUrl, this.options)
      }
      async fetchWithRetries(zz) {
        for (let uz = 0;; uz++) {
          const bz = new URL(this.url);
          if (uz > 0 && bz.searchParams.set("cache-bust", `${Date.now()}-${uz}`), await this.fetchWhole(bz, zz)) return void(this.scriptUrl = bz);
          if (uz >= 3 || zz.aborted) return;
          if (await this.timing.wait(500 * 2 ** uz), zz.aborted) return
        }
      }
      async fetchWhole(zz, uz) {
        const bz = new AbortController;
        let Ez;
        const nz = () => {
            clearTimeout(Ez), Ez = setTimeout((() => {
              bz.abort()
            }), this.timing.stallMs)
          },
          iz = () => {
            bz.abort()
          };
        uz.addEventListener("abort", iz, {
          once: !0
        }), nz();
        try {
          var lz;
          const uz = await fetch(zz, {
            signal: bz.signal
          });
          if (!uz.ok) return !1;
          const Ez = null === (lz = uz.body) || void 0 === lz ? void 0 : lz.getReader();
          if (!Ez) return !1;
          for (;;) {
            const {
              done: zz
            } = await Ez.read();
            if (zz) return !0;
            nz()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Ez), uz.removeEventListener("abort", iz)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);