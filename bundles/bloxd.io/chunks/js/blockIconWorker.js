(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var zz = __webpack_require__.u,
        tz = __webpack_require__.e,
        sz = {},
        Fz = {};
      __webpack_require__.u = function(tz) {
        return zz(tz) + (sz.hasOwnProperty(tz) ? "?" + sz[tz] : "")
      }, __webpack_require__.e = function(Wz) {
        return tz(Wz).catch((function(tz) {
          var Xz = Fz.hasOwnProperty(Wz) ? Fz[Wz] : 4;
          if (Xz < 1) {
            var Oz = zz(Wz);
            throw tz.message = "Loading chunk " + Wz + " failed after 4 retries.\n(" + Oz + ")", tz.request = Oz, sz[Wz] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete Fz[Wz]
            }), 0), tz
          }
          return new Promise((function(zz) {
            var tz = 4 - Xz + 1;
            setTimeout((function() {
              var tz = "cache-bust=" + Date.now();
              sz[Wz] = tz, Fz[Wz] = Xz - 1, zz(__webpack_require__.e(Wz))
            }), function(zz) {
              return 500 * Math.pow(2, zz)
            }(tz))
          }))
        }))
      }
    }
  })();
  const zz = [15, 15, 15],
    tz = {
      top: 1,
      left: .85,
      right: .7
    };

  function sz(tz, sz, Fz) {
    let Wz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zz => 0 !== tz[4 * zz + 3];
    const Xz = (zz, tz) => zz < 0 || tz < 0 || zz >= sz || tz >= sz || !Wz(tz * sz + zz),
      Oz = [];
    for (let zz = 0; zz < sz; zz++)
      for (let tz = 0; tz < sz; tz++)
        if (!Xz(tz, zz)) zz: for (let Wz = -Fz; Wz <= Fz; Wz++) {
          const oz = Fz - Math.abs(Wz);
          for (let Fz = -oz; Fz <= oz; Fz++)
            if (Xz(tz + Fz, zz + Wz)) {
              Oz.push(zz * sz + tz);
              break zz
            }
        }
    for (const oz of Oz) tz.set(zz, 4 * oz), tz[4 * oz + 3] = 255
  }
  const Fz = Math.SQRT1_2,
    Wz = Math.sqrt(3) / 2,
    Xz = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    Oz = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    oz = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const vz = 1e-6;

  function Uz(zz, tz, sz, Fz) {
    let {
      origin: Wz,
      across: Xz,
      down: Oz,
      texture: oz,
      rect: [Uz, Kz, uz, Nz],
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
        if (Hz < -vz || Hz > 1 + vz || Bz < -vz || Bz > 1 + vz) continue;
        const Pz = Yz * sz + Fz;
        tz[Pz] = 1;
        const rz = Uz + Math.min(Math.max(Hz, 0), 1) * (uz - Uz),
          xz = Kz + Math.min(Math.max(Bz, 0), 1) * (Nz - Kz),
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

  function Kz(zz, tz, sz) {
    const Fz = zz.get(tz);
    if (void 0 === Fz) throw new Error(`no ${sz} was sent for ${tz.slice(0,100)}`);
    return Fz
  }
  const uz = {
      pixelsOf(zz) {
        const tz = new OffscreenCanvas(zz.width, zz.height),
          sz = tz.getContext("2d");
        if (!sz) throw new Error("no 2D context");
        return sz.drawImage(zz, 0, 0), zz.close(), {
          width: tz.width,
          height: tz.height,
          pixels: sz.getImageData(0, 0, tz.width, tz.height).data
        }
      },
      async encode(zz, tz) {
        const sz = new OffscreenCanvas(tz, tz),
          Fz = sz.getContext("2d");
        if (!Fz) throw new Error("no 2D context");
        Fz.putImageData(new ImageData(zz, tz, tz), 0, 0);
        const Wz = await sz.convertToBlob();
        return new Promise(((zz, tz) => {
          const sz = new FileReader;
          sz.onload = () => {
            zz(sz.result)
          }, sz.onerror = () => {
            var zz;
            tz(null !== (zz = sz.error) && void 0 !== zz ? zz : new Error("the icon did not encode"))
          }, sz.readAsDataURL(Wz)
        }))
      }
    },
    Nz = globalThis.WorkerGlobalScope;
  void 0 !== Nz && globalThis instanceof Nz && function(zz, vz) {
    const uz = new Map,
      Nz = new Map,
      bz = (tz, sz, Fz) => {
        (async () => {
          try {
            zz.postMessage({
              type: "drawn",
              id: tz,
              url: await vz.encode(Fz(), sz)
            })
          } catch (Wz) {
            zz.postMessage({
              type: "failed",
              message: String(Wz)
            })
          }
        })()
      };
    zz.onmessage = zz => {
      let {
        data: wz
      } = zz;
      if ("texture" === wz.type) uz.set(wz.url, vz.pixelsOf(wz.bitmap));
      else if ("model" === wz.type) Nz.set(wz.name, {
        geometry: wz.geometry,
        texture: vz.pixelsOf(wz.bitmap)
      });
      else if ("draw" === wz.type) {
        const {
          id: zz,
          top: vz,
          left: Nz,
          right: Dz,
          itemType: gz,
          size: Hz,
          outlineWidth: Bz
        } = wz;
        bz(zz, Hz, (() => function(zz, Xz, Oz, oz) {
          const vz = .6 * Oz,
            Kz = vz * Fz,
            uz = vz * Fz * .5,
            Nz = vz * Wz,
            bz = Math.max(...Xz.boxes.map((zz => zz[4]))),
            wz = Kz / 2 + (Oz - Kz) / 2,
            Dz = uz + (Oz - uz - uz - bz * Nz) / 2,
            gz = (zz, tz, sz) => ({
              x: wz + (zz - sz) * Kz,
              y: Dz - uz + (zz + sz) * uz + (bz - tz) * Nz
            }),
            Hz = (zz, tz, sz, Fz, Wz, Oz) => ({
              origin: zz,
              across: {
                x: tz.x - zz.x,
                y: tz.y - zz.y
              },
              down: {
                x: sz.x - zz.x,
                y: sz.y - zz.y
              },
              texture: Fz,
              rect: Xz.cropFaces ? Wz : [0, 0, 1, 1],
              shade: Oz
            }),
            Bz = new Uint8ClampedArray(Oz * Oz * 4),
            Pz = new Uint8Array(Oz * Oz),
            rz = tz;
          for (const [tz, sz, Fz, Wz, Yz, xz] of Xz.boxes) {
            const Xz = Hz(gz(Wz, Yz, xz), gz(Wz, Yz, Fz), gz(Wz, sz, xz), zz.right, [1 - xz, 1 - Yz, 1 - Fz, 1 - sz], rz.right),
              oz = Hz(gz(tz, Yz, xz), gz(Wz, Yz, xz), gz(tz, sz, xz), zz.left, [tz, 1 - Yz, Wz, 1 - sz], rz.left),
              vz = Hz(gz(tz, Yz, Fz), gz(Wz, Yz, Fz), gz(tz, Yz, xz), zz.top, [tz, Fz, Wz, xz], rz.top);
            for (const zz of [Xz, oz, vz]) Uz(Bz, Pz, Oz, zz)
          }
          return sz(Bz, Oz, oz, (zz => 1 === Pz[zz])), Bz
        }({
          top: Kz(uz, vz, "texture"),
          left: Kz(uz, Nz, "texture"),
          right: Kz(uz, Dz, "texture")
        }, function(zz) {
          return "SlabBlock" === zz ? Oz : "StairsBlock" === zz ? oz : Xz
        }(gz), Hz, Bz)))
      } else {
        const {
          id: zz,
          name: tz,
          size: Fz,
          outlineWidth: Wz
        } = wz;
        bz(zz, Fz, (() => {
          const {
            geometry: zz,
            texture: Xz
          } = Kz(Nz, tz, "model");
          return function(zz, tz, Fz, Wz) {
            const {
              vertices: Xz,
              uvs: Oz,
              indices: oz,
              shades: vz
            } = zz, Uz = .03125 * Fz, Kz = Fz - 2 * Uz, uz = new Float32Array(Xz.length);
            for (let sz = 0; sz < Xz.length; sz += 3) uz[sz] = Uz + Xz[sz] * Kz, uz[sz + 1] = Uz + Xz[sz + 1] * Kz, uz[sz + 2] = Xz[sz + 2];
            const Nz = new Float32Array(Fz * Fz).fill(-1 / 0),
              bz = new Uint8ClampedArray(Fz * Fz * 4),
              wz = 255 * zz.alphaCutoff;
            for (let sz = 0; sz < oz.length; sz += 3) {
              const [zz, Wz, Xz] = [oz[sz], oz[sz + 1], oz[sz + 2]], [Uz, Kz, Dz] = [3 * zz, 3 * Wz, 3 * Xz], [gz, Hz, Bz, Pz, rz, Yz] = [uz[Uz], uz[Uz + 1], uz[Kz], uz[Kz + 1], uz[Dz], uz[Dz + 1]], xz = (Bz - gz) * (Yz - Hz) - (rz - gz) * (Pz - Hz);
              if (Math.abs(xz) < 1e-9) continue;
              const mz = vz[sz / 3],
                [Jz, Iz, Cz, ez, Zz, Gz] = [Oz[2 * zz], Oz[2 * zz + 1], Oz[2 * Wz], Oz[2 * Wz + 1], Oz[2 * Xz], Oz[2 * Xz + 1]],
                Tz = Math.max(0, Math.floor(Math.min(gz, Bz, rz))),
                cz = Math.min(Fz - 1, Math.ceil(Math.max(gz, Bz, rz))),
                jz = Math.max(0, Math.floor(Math.min(Hz, Pz, Yz))),
                Az = Math.min(Fz - 1, Math.ceil(Math.max(Hz, Pz, Yz)));
              for (let sz = jz; sz <= Az; sz++)
                for (let zz = Tz; zz <= cz; zz++) {
                  const [Wz, Xz] = [zz + .5, sz + .5], Oz = ((Wz - gz) * (Yz - Hz) - (rz - gz) * (Xz - Hz)) / xz, oz = ((Bz - gz) * (Xz - Hz) - (Wz - gz) * (Pz - Hz)) / xz, vz = 1 - Oz - oz;
                  if (vz < 0 || Oz < 0 || oz < 0) continue;
                  const Tz = vz * uz[Uz + 2] + Oz * uz[Kz + 2] + oz * uz[Dz + 2],
                    cz = sz * Fz + zz;
                  if (Tz <= Nz[cz]) continue;
                  const jz = Math.max(0, Math.min(tz.width - 1, Math.floor((vz * Jz + Oz * Cz + oz * Zz) * tz.width))),
                    Az = 4 * (Math.max(0, Math.min(tz.height - 1, Math.floor((vz * Iz + Oz * ez + oz * Gz) * tz.height))) * tz.width + jz);
                  tz.pixels[Az + 3] < wz || (Nz[cz] = Tz, bz[4 * cz] = tz.pixels[Az] * mz, bz[4 * cz + 1] = tz.pixels[Az + 1] * mz, bz[4 * cz + 2] = tz.pixels[Az + 2] * mz, bz[4 * cz + 3] = 255)
                }
            }
            return sz(bz, Fz, Wz), bz
          }(zz, Xz, Fz, Wz)
        }))
      }
    }, zz.postMessage({
      type: "started"
    })
  }(globalThis, uz)
})();