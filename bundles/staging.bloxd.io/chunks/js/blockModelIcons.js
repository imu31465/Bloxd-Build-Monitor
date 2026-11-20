export const id = 4;
export const ids = [4];
export const modules = {
  35925: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      getBlockModelIconUrl: () => Nz,
      hasBlockModelIcon: () => Uz
    });
    var Fz = sz(35911),
      Wz = sz(35907);
    const Xz = sz(35929),
      Oz = new Map(Xz.keys().filter((zz => zz.startsWith("./"))).map((zz => [zz.slice(2, -5), zz]))),
      oz = new Map,
      vz = new Map;

    function Uz(zz) {
      return Oz.has(zz)
    }

    function Kz(zz) {
      return Xz(Oz.get(zz))
    }
    async function uz(zz, tz, sz) {
      const {
        data: Fz,
        texture: Xz
      } = await
      function(zz) {
        let tz = oz.get(zz);
        return tz || (tz = Kz(zz).then((async zz => {
          const tz = new Image;
          tz.src = zz.texture, await tz.decode();
          const sz = document.createElement("canvas");
          sz.width = tz.width, sz.height = tz.height;
          const Fz = sz.getContext("2d");
          return Fz.drawImage(tz, 0, 0), {
            data: zz,
            texture: {
              width: tz.width,
              height: tz.height,
              pixels: Fz.getImageData(0, 0, tz.width, tz.height).data
            }
          }
        })), tz.catch((() => {
          oz.delete(zz)
        })), oz.set(zz, tz)), tz
      }(zz), Oz = document.createElement("canvas");
      return Oz.width = tz, Oz.height = tz, Oz.getContext("2d").putImageData(new ImageData((0, Wz.i)(Fz, Xz, tz, sz), tz, tz), 0, 0), Oz.toDataURL()
    }

    function Nz(zz, tz, sz) {
      const Wz = `${tz}|${sz}|${zz}`;
      let Xz = vz.get(Wz);
      return Xz || (Xz = (0, Fz.f)(zz, (() => Kz(zz)), tz, sz).then((Fz => null !== Fz && void 0 !== Fz ? Fz : uz(zz, tz, sz))), Xz.catch((() => {
        vz.delete(Wz)
      })), vz.set(Wz, Xz)), Xz
    }
  },
  35911: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Cz,
      f: () => ez,
      g: () => Pz
    });
    var Fz = sz(292),
      Wz = sz(106);
    const Xz = new(sz(35917).d)(new URL(sz.p + sz.u(3), sz.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var Oz = sz(1715),
      oz = sz(2913);
    const vz = 1e4,
      Uz = 3e4;
    let Kz = null,
      uz = null,
      Nz = null,
      bz = !1,
      wz = 0;
    const Dz = new Map;
    let gz = null;
    const Hz = new Map,
      Bz = new Map;

    function Pz(zz) {
      const tz = new Promise(((tz, sz) => {
        const Fz = new Image;
        Fz.crossOrigin = "anonymous", Fz.fetchPriority = "high", Fz.onload = () => {
          tz(Fz)
        }, Fz.onerror = () => {
          sz(new Error(`A block icon's texture did not load: ${zz.slice(0,100)}`))
        }, Fz.src = zz
      }));
      return (0, oz.g)(tz)
    }

    function rz(zz) {
      var tz, sz;
      bz || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${zz}`), bz = !0, null === (tz = Kz) || void 0 === tz || tz.terminate(), Kz = null, uz = null, Hz.clear(), Bz.clear();
      for (const Fz of Dz.values()) Fz(null);
      Dz.clear(), null === (sz = gz) || void 0 === sz || sz()
    }

    function Yz() {
      return Nz ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === Fz.b.ios_icon_worker_v1 && (0, Wz.isWebKit)()) return;
        try {
          Kz = await async function() {
            return await Xz.ready(), Xz.start()
          }()
        } catch (oz) {
          return void rz(`did not start (${String(oz)})`)
        }
        let zz = () => {};
        const tz = new Promise((tz => {
          zz = tz
        }));
        Kz.onmessage = tz => {
          let {
            data: sz
          } = tz;
          if ("started" === sz.type) uz = Kz, zz();
          else if ("failed" === sz.type) rz(`failed a draw (${sz.message})`);
          else {
            var Fz, Wz;
            null === (Fz = Dz.get(sz.id)) || void 0 === Fz || Fz(sz.url), Dz.delete(sz.id), null === (Wz = gz) || void 0 === Wz || Wz()
          }
        }, Kz.onerror = tz => {
          tz.preventDefault(), rz(`stopped (${tz.message||"its script did not load or run"})`), zz()
        };
        const sz = `did not start in ${Uz/1e3} s`;
        await (0, Oz.f)(tz, Uz, sz).catch((() => {
          rz(sz)
        }))
      }(), Nz
    }

    function xz() {
      if (null !== gz || 0 === Dz.size) return;
      const zz = new Promise((zz => {
          gz = zz
        })),
        tz = `did not answer in ${vz/1e3} s`;
      (0, Oz.f)(zz, vz, tz).then((() => {
        gz = null, xz()
      }), (() => {
        gz = null, rz(tz)
      }))
    }

    function mz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      zz.postMessage(tz, sz)
    }

    function Jz(zz, tz, sz, Fz) {
      let Wz = tz.get(sz);
      return void 0 === Wz && (Wz = Fz().then((async tz => {
        let {
          image: sz,
          request: Fz
        } = tz;
        try {
          const tz = await createImageBitmap(sz);
          mz(zz, Fz(tz), [tz])
        } catch (Wz) {
          rz(`could not take an image (${String(Wz)})`)
        }
      })), Wz.catch((() => {
        tz.get(sz) === Wz && tz.delete(sz)
      })), tz.set(sz, Wz)), Wz
    }
    async function Iz(zz, tz) {
      Yz();
      const sz = uz;
      if (null === sz) return null;
      if (await zz(sz), uz !== sz) return null;
      const Fz = ++wz;
      return new Promise((zz => {
        Dz.set(Fz, zz), mz(sz, tz(Fz)), xz()
      }))
    }

    function Cz(zz, tz, sz) {
      return Iz((tz => Promise.all([zz.top, zz.left, zz.right].map((zz => function(zz, tz) {
        return Jz(zz, Hz, tz, (async () => ({
          image: await Pz(tz),
          request: zz => ({
            type: "texture",
            url: tz,
            bitmap: zz
          })
        })))
      }(tz, zz))))), (Fz => ({
        type: "draw",
        id: Fz,
        ...zz,
        size: tz,
        outlineWidth: sz
      })))
    }

    function ez(zz, tz, sz, Fz) {
      return Iz((sz => function(zz, tz, sz) {
        return Jz(zz, Bz, tz, (async () => {
          const {
            texture: zz,
            ...Fz
          } = await sz();
          return {
            image: await Pz(zz),
            request: zz => ({
              type: "model",
              name: tz,
              bitmap: zz,
              geometry: Fz
            })
          }
        }))
      }(sz, zz, tz)), (tz => ({
        type: "drawModel",
        id: tz,
        name: zz,
        size: sz,
        outlineWidth: Fz
      })))
    }
  },
  35907: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz,
      f: () => oz,
      i: () => Oz
    });
    const Fz = 1 / 32,
      Wz = [15, 15, 15],
      Xz = {
        top: 1,
        left: .85,
        right: .7
      };

    function Oz(zz, tz, sz, Wz) {
      const {
        vertices: Xz,
        uvs: Oz,
        indices: vz,
        shades: Uz
      } = zz, Kz = sz * Fz, uz = sz - 2 * Kz, Nz = new Float32Array(Xz.length);
      for (let Fz = 0; Fz < Xz.length; Fz += 3) Nz[Fz] = Kz + Xz[Fz] * uz, Nz[Fz + 1] = Kz + Xz[Fz + 1] * uz, Nz[Fz + 2] = Xz[Fz + 2];
      const bz = new Float32Array(sz * sz).fill(-1 / 0),
        wz = new Uint8ClampedArray(sz * sz * 4),
        Dz = 255 * zz.alphaCutoff;
      for (let Fz = 0; Fz < vz.length; Fz += 3) {
        const [zz, Wz, Xz] = [vz[Fz], vz[Fz + 1], vz[Fz + 2]], [oz, Kz, uz] = [3 * zz, 3 * Wz, 3 * Xz], [gz, Hz, Bz, Pz, rz, Yz] = [Nz[oz], Nz[oz + 1], Nz[Kz], Nz[Kz + 1], Nz[uz], Nz[uz + 1]], xz = (Bz - gz) * (Yz - Hz) - (rz - gz) * (Pz - Hz);
        if (Math.abs(xz) < 1e-9) continue;
        const mz = Uz[Fz / 3],
          [Jz, Iz, Cz, ez, Zz, Gz] = [Oz[2 * zz], Oz[2 * zz + 1], Oz[2 * Wz], Oz[2 * Wz + 1], Oz[2 * Xz], Oz[2 * Xz + 1]],
          Tz = Math.max(0, Math.floor(Math.min(gz, Bz, rz))),
          cz = Math.min(sz - 1, Math.ceil(Math.max(gz, Bz, rz))),
          jz = Math.max(0, Math.floor(Math.min(Hz, Pz, Yz))),
          Az = Math.min(sz - 1, Math.ceil(Math.max(Hz, Pz, Yz)));
        for (let Fz = jz; Fz <= Az; Fz++)
          for (let zz = Tz; zz <= cz; zz++) {
            const [Wz, Xz] = [zz + .5, Fz + .5], Oz = ((Wz - gz) * (Yz - Hz) - (rz - gz) * (Xz - Hz)) / xz, vz = ((Bz - gz) * (Xz - Hz) - (Wz - gz) * (Pz - Hz)) / xz, Uz = 1 - Oz - vz;
            if (Uz < 0 || Oz < 0 || vz < 0) continue;
            const Tz = Uz * Nz[oz + 2] + Oz * Nz[Kz + 2] + vz * Nz[uz + 2],
              cz = Fz * sz + zz;
            if (Tz <= bz[cz]) continue;
            const jz = Math.max(0, Math.min(tz.width - 1, Math.floor((Uz * Jz + Oz * Cz + vz * Zz) * tz.width))),
              Az = 4 * (Math.max(0, Math.min(tz.height - 1, Math.floor((Uz * Iz + Oz * ez + vz * Gz) * tz.height))) * tz.width + jz);
            tz.pixels[Az + 3] < Dz || (bz[cz] = Tz, wz[4 * cz] = tz.pixels[Az] * mz, wz[4 * cz + 1] = tz.pixels[Az + 1] * mz, wz[4 * cz + 2] = tz.pixels[Az + 2] * mz, wz[4 * cz + 3] = 255)
          }
      }
      return oz(wz, sz, Wz), wz
    }

    function oz(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tz => 0 !== zz[4 * tz + 3];
      const Xz = (zz, sz) => zz < 0 || sz < 0 || zz >= tz || sz >= tz || !Fz(sz * tz + zz),
        Oz = [];
      for (let Wz = 0; Wz < tz; Wz++)
        for (let zz = 0; zz < tz; zz++)
          if (!Xz(zz, Wz)) zz: for (let Fz = -sz; Fz <= sz; Fz++) {
            const oz = sz - Math.abs(Fz);
            for (let sz = -oz; sz <= oz; sz++)
              if (Xz(zz + sz, Wz + Fz)) {
                Oz.push(Wz * tz + zz);
                break zz
              }
          }
      for (const oz of Oz) zz.set(Wz, 4 * oz), zz[4 * oz + 3] = 255
    }
  },
  35917: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Wz
    });
    const Fz = {
      wait: function(zz) {
        return new Promise((tz => {
          setTimeout(tz, zz)
        }))
      },
      stallMs: 2e4
    };
    class Wz {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Fz;
        this.url = zz, this.options = tz, this.timing = sz, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = zz
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
        for (let tz = 0;; tz++) {
          const sz = new URL(this.url);
          if (tz > 0 && sz.searchParams.set("cache-bust", `${Date.now()}-${tz}`), await this.fetchWhole(sz, zz)) return void(this.scriptUrl = sz);
          if (tz >= 3 || zz.aborted) return;
          if (await this.timing.wait(500 * 2 ** tz), zz.aborted) return
        }
      }
      async fetchWhole(zz, tz) {
        const sz = new AbortController;
        let Fz;
        const Wz = () => {
            clearTimeout(Fz), Fz = setTimeout((() => {
              sz.abort()
            }), this.timing.stallMs)
          },
          Xz = () => {
            sz.abort()
          };
        tz.addEventListener("abort", Xz, {
          once: !0
        }), Wz();
        try {
          var Oz;
          const tz = await fetch(zz, {
            signal: sz.signal
          });
          if (!tz.ok) return !1;
          const Fz = null === (Oz = tz.body) || void 0 === Oz ? void 0 : Oz.getReader();
          if (!Fz) return !1;
          for (;;) {
            const {
              done: zz
            } = await Fz.read();
            if (zz) return !0;
            Wz()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(Fz), tz.removeEventListener("abort", Xz)
        }
      }
    }
  },
  35929: (zz, tz, sz) => {
    var Fz = {
      "./Artisan Bench.json": [40268, 265],
      "./Aspen Item Pedestal.json": [40274, 266],
      "./Cedar Item Pedestal.json": [40279, 267],
      "./Cherry Item Pedestal.json": [40288, 268],
      "./Furnace.json": [40294, 269],
      "./Jungle Item Pedestal.json": [40302, 270],
      "./Mango Item Pedestal.json": [40311, 271],
      "./Palm Item Pedestal.json": [40319, 272],
      "./Pear Item Pedestal.json": [40327, 273],
      "./Pine Item Pedestal.json": [40336, 274],
      "./Plum Item Pedestal.json": [40341, 275],
      "./Potion Table.json": [40349, 276],
      "./Salvaging Table.json": [40352, 277],
      "./Showcase.json": [40361, 278],
      "./Spectral Item Pedestal.json": [40370, 279],
      "./Workbench.json": [40379, 280]
    };

    function Wz(zz) {
      if (!sz.o(Fz, zz)) return Promise.resolve().then((() => {
        var tz = new Error("Cannot find module '" + zz + "'");
        throw tz.code = "MODULE_NOT_FOUND", tz
      }));
      var tz = Fz[zz],
        Wz = tz[0];
      return sz.e(tz[1]).then((() => sz(Wz)))
    }
    Wz.keys = () => Object.keys(Fz), Wz.id = 35929, zz.exports = Wz
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);