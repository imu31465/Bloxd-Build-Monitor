export const id = 2;
export const ids = [2];
export const modules = {
  35905: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      drawBlockIcon: () => rz,
      drawBlockIconUrl: () => Yz,
      getDrawnBlockIcon: () => Pz
    });
    var Fz = sz(35907);
    const Wz = Math.SQRT1_2,
      Xz = Math.sqrt(3) / 2,
      Oz = .5,
      oz = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      vz = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      Uz = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const Kz = 1e-6;

    function uz(zz, tz, sz, Fz) {
      let {
        origin: Wz,
        across: Xz,
        down: Oz,
        texture: oz,
        rect: [vz, Uz, uz, Nz],
        shade: bz
      } = Fz;
      const wz = Xz.x * Oz.y - Xz.y * Oz.x;
      if (Math.abs(wz) < 1e-9) return;
      const Dz = [Wz.x, Wz.x + Xz.x, Wz.x + Oz.x, Wz.x + Xz.x + Oz.x],
        gz = [Wz.y, Wz.y + Xz.y, Wz.y + Oz.y, Wz.y + Xz.y + Oz.y],
        Hz = Math.max(0, Math.floor(Math.min(...Dz))),
        Bz = Math.min(sz - 1, Math.ceil(Math.max(...Dz))),
        Pz = Math.max(0, Math.floor(Math.min(...gz))),
        rz = Math.min(sz - 1, Math.ceil(Math.max(...gz)));
      for (let Yz = Pz; Yz <= rz; Yz++)
        for (let Fz = Hz; Fz <= Bz; Fz++) {
          const Dz = Fz + .5 - Wz.x,
            gz = Yz + .5 - Wz.y,
            Hz = (Dz * Oz.y - gz * Oz.x) / wz,
            Bz = (Xz.x * gz - Xz.y * Dz) / wz;
          if (Hz < -Kz || Hz > 1 + Kz || Bz < -Kz || Bz > 1 + Kz) continue;
          const Pz = Yz * sz + Fz;
          tz[Pz] = 1;
          const rz = vz + Math.min(Math.max(Hz, 0), 1) * (uz - vz),
            xz = Uz + Math.min(Math.max(Bz, 0), 1) * (Nz - Uz),
            mz = Math.min(oz.width - 1, Math.floor(rz * oz.width)),
            Jz = 4 * (Math.min(oz.height - 1, Math.floor(xz * oz.height)) * oz.width + mz),
            Iz = oz.pixels[Jz + 3] / 255;
          if (0 === Iz) continue;
          const Cz = 4 * Pz,
            ez = zz[Cz + 3] / 255 * (1 - Iz),
            Zz = Iz + ez;
          for (let tz = 0; tz < 3; tz++) zz[Cz + tz] = (oz.pixels[Jz + tz] * bz * Iz + zz[Cz + tz] * ez) / Zz;
          zz[Cz + 3] = 255 * Zz
        }
    }
    var Nz = sz(35911);
    const bz = new Map,
      wz = new Map,
      Dz = new Map,
      gz = new Map;

    function Hz(zz, tz, sz) {
      return `${tz}|${sz}|${zz}`
    }

    function Bz(zz, tz, sz) {
      let Fz = zz.get(tz);
      return void 0 === Fz && (Fz = sz().catch((sz => {
        throw zz.delete(tz), sz
      })), zz.set(tz, Fz)), Fz
    }

    function Pz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return wz.get(Hz(zz, tz, sz))
    }

    function rz(zz, tz, sz, Fz) {
      const Wz = Hz(zz, tz, sz);
      return Bz(bz, Wz, (async () => {
        const Xz = await mz(Fz(zz), tz, xz(sz));
        return wz.set(Wz, Xz), Xz
      }))
    }

    function Yz(zz, tz, sz, Fz) {
      return Bz(Dz, Hz(zz, tz, sz), (async () => {
        var Wz;
        const Xz = Fz(zz),
          Oz = xz(sz);
        return null !== (Wz = await (0, Nz.c)(Xz, tz, Oz)) && void 0 !== Wz ? Wz : (await mz(Xz, tz, Oz)).toDataURL()
      }))
    }

    function xz(zz) {
      return Math.max(1, Math.round(zz))
    }
    async function mz(zz, tz, sz) {
      let {
        top: Kz,
        left: Nz,
        right: bz,
        itemType: wz
      } = zz;
      const [Dz, gz, Hz] = await Promise.all([Jz(Kz), Jz(Nz), Jz(bz)]), Bz = function(zz, tz, sz, oz) {
        const vz = .6 * sz,
          Uz = vz * Wz,
          Kz = vz * Wz * Oz,
          Nz = vz * Xz,
          bz = Math.max(...tz.boxes.map((zz => zz[4]))),
          wz = Uz / 2 + (sz - Uz) / 2,
          Dz = Kz + (sz - Kz - Kz - bz * Nz) / 2,
          gz = (zz, tz, sz) => ({
            x: wz + (zz - sz) * Uz,
            y: Dz - Kz + (zz + sz) * Kz + (bz - tz) * Nz
          }),
          Hz = (zz, sz, Fz, Wz, Xz, Oz) => ({
            origin: zz,
            across: {
              x: sz.x - zz.x,
              y: sz.y - zz.y
            },
            down: {
              x: Fz.x - zz.x,
              y: Fz.y - zz.y
            },
            texture: Wz,
            rect: tz.cropFaces ? Xz : [0, 0, 1, 1],
            shade: Oz
          }),
          Bz = new Uint8ClampedArray(sz * sz * 4),
          Pz = new Uint8Array(sz * sz),
          rz = Fz.c;
        for (const [Fz, Wz, Xz, Oz, Yz, xz] of tz.boxes) {
          const tz = Hz(gz(Oz, Yz, xz), gz(Oz, Yz, Xz), gz(Oz, Wz, xz), zz.right, [1 - xz, 1 - Yz, 1 - Xz, 1 - Wz], rz.right),
            oz = Hz(gz(Fz, Yz, xz), gz(Oz, Yz, xz), gz(Fz, Wz, xz), zz.left, [Fz, 1 - Yz, Oz, 1 - Wz], rz.left),
            vz = Hz(gz(Fz, Yz, Xz), gz(Oz, Yz, Xz), gz(Fz, Yz, xz), zz.top, [Fz, Xz, Oz, xz], rz.top);
          for (const zz of [tz, oz, vz]) uz(Bz, Pz, sz, zz)
        }
        return (0, Fz.f)(Bz, sz, oz, (zz => 1 === Pz[zz])), Bz
      }({
        top: Dz,
        left: gz,
        right: Hz
      }, function(zz) {
        return "SlabBlock" === zz ? vz : "StairsBlock" === zz ? Uz : oz
      }(wz), tz, sz), Pz = document.createElement("canvas");
      Pz.width = tz, Pz.height = tz;
      const rz = Pz.getContext("2d");
      if (!rz) throw new Error("Failed to get 2D context");
      return rz.putImageData(new ImageData(Bz, tz, tz), 0, 0), Pz
    }

    function Jz(zz) {
      return Bz(gz, zz, (async () => {
        const tz = await (0, Nz.g)(zz),
          sz = document.createElement("canvas");
        sz.width = tz.width, sz.height = tz.height;
        const Fz = sz.getContext("2d");
        if (!Fz) throw new Error("Failed to get 2D context");
        return Fz.drawImage(tz, 0, 0), {
          width: tz.width,
          height: tz.height,
          pixels: Fz.getImageData(0, 0, tz.width, tz.height).data
        }
      }))
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
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);