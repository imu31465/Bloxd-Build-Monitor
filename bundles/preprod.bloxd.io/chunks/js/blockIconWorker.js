(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var zz = __webpack_require__.u,
        uz = __webpack_require__.e,
        bz = {},
        Ez = {};
      __webpack_require__.u = function(uz) {
        return zz(uz) + (bz.hasOwnProperty(uz) ? "?" + bz[uz] : "")
      }, __webpack_require__.e = function(nz) {
        return uz(nz).catch((function(uz) {
          var iz = Ez.hasOwnProperty(nz) ? Ez[nz] : 4;
          if (iz < 1) {
            var lz = zz(nz);
            throw uz.message = "Loading chunk " + nz + " failed after 4 retries.\n(" + lz + ")", uz.request = lz, bz[nz] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete Ez[nz]
            }), 0), uz
          }
          return new Promise((function(zz) {
            var uz = 4 - iz + 1;
            setTimeout((function() {
              var uz = "cache-bust=" + Date.now();
              bz[nz] = uz, Ez[nz] = iz - 1, zz(__webpack_require__.e(nz))
            }), function(zz) {
              return 500 * Math.pow(2, zz)
            }(uz))
          }))
        }))
      }
    }
  })();
  const zz = [15, 15, 15],
    uz = {
      top: 1,
      left: .85,
      right: .7
    };

  function bz(uz, bz, Ez) {
    let nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zz => 0 !== uz[4 * zz + 3];
    const iz = (zz, uz) => zz < 0 || uz < 0 || zz >= bz || uz >= bz || !nz(uz * bz + zz),
      lz = [];
    for (let zz = 0; zz < bz; zz++)
      for (let uz = 0; uz < bz; uz++)
        if (!iz(uz, zz)) zz: for (let nz = -Ez; nz <= Ez; nz++) {
          const Mz = Ez - Math.abs(nz);
          for (let Ez = -Mz; Ez <= Mz; Ez++)
            if (iz(uz + Ez, zz + nz)) {
              lz.push(zz * bz + uz);
              break zz
            }
        }
    for (const Mz of lz) uz.set(zz, 4 * Mz), uz[4 * Mz + 3] = 255
  }
  const Ez = Math.SQRT1_2,
    nz = Math.sqrt(3) / 2,
    iz = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    lz = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    Mz = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const tz = 1e-6;

  function Hz(zz, uz, bz, Ez) {
    let {
      origin: nz,
      across: iz,
      down: lz,
      texture: Mz,
      rect: [Hz, Oz, pz, dz],
      shade: Fz
    } = Ez;
    const Zz = iz.x * lz.y - iz.y * lz.x;
    if (Math.abs(Zz) < 1e-9) return;
    const Rz = [nz.x, nz.x + iz.x, nz.x + lz.x, nz.x + iz.x + lz.x],
      Kz = [nz.y, nz.y + iz.y, nz.y + lz.y, nz.y + iz.y + lz.y],
      wz = Math.max(0, Math.floor(Math.min(...Rz))),
      Xz = Math.min(bz - 1, Math.ceil(Math.max(...Rz))),
      fz = Math.max(0, Math.floor(Math.min(...Kz))),
      sz = Math.min(bz - 1, Math.ceil(Math.max(...Kz)));
    for (let rz = fz; rz <= sz; rz++)
      for (let Ez = wz; Ez <= Xz; Ez++) {
        const Rz = Ez + .5 - nz.x,
          Kz = rz + .5 - nz.y,
          wz = (Rz * lz.y - Kz * lz.x) / Zz,
          Xz = (iz.x * Kz - iz.y * Rz) / Zz;
        if (wz < -tz || wz > 1 + tz || Xz < -tz || Xz > 1 + tz) continue;
        const fz = rz * bz + Ez;
        uz[fz] = 1;
        const sz = Hz + Math.min(Math.max(wz, 0), 1) * (pz - Hz),
          oz = Oz + Math.min(Math.max(Xz, 0), 1) * (dz - Oz),
          Nz = Math.min(Mz.width - 1, Math.floor(sz * Mz.width)),
          vz = 4 * (Math.min(Mz.height - 1, Math.floor(oz * Mz.height)) * Mz.width + Nz),
          xz = Mz.pixels[vz + 3] / 255;
        if (0 === xz) continue;
        const Jz = 4 * fz,
          Az = zz[Jz + 3] / 255 * (1 - xz),
          Tz = xz + Az;
        for (let uz = 0; uz < 3; uz++) zz[Jz + uz] = (Mz.pixels[vz + uz] * Fz * xz + zz[Jz + uz] * Az) / Tz;
        zz[Jz + 3] = 255 * Tz
      }
  }

  function Oz(zz, uz, bz) {
    const Ez = zz.get(uz);
    if (void 0 === Ez) throw new Error(`no ${bz} was sent for ${uz.slice(0,100)}`);
    return Ez
  }
  const pz = {
      pixelsOf(zz) {
        const uz = new OffscreenCanvas(zz.width, zz.height),
          bz = uz.getContext("2d");
        if (!bz) throw new Error("no 2D context");
        return bz.drawImage(zz, 0, 0), zz.close(), {
          width: uz.width,
          height: uz.height,
          pixels: bz.getImageData(0, 0, uz.width, uz.height).data
        }
      },
      async encode(zz, uz) {
        const bz = new OffscreenCanvas(uz, uz),
          Ez = bz.getContext("2d");
        if (!Ez) throw new Error("no 2D context");
        Ez.putImageData(new ImageData(zz, uz, uz), 0, 0);
        const nz = await bz.convertToBlob();
        return new Promise(((zz, uz) => {
          const bz = new FileReader;
          bz.onload = () => {
            zz(bz.result)
          }, bz.onerror = () => {
            var zz;
            uz(null !== (zz = bz.error) && void 0 !== zz ? zz : new Error("the icon did not encode"))
          }, bz.readAsDataURL(nz)
        }))
      }
    },
    dz = globalThis.WorkerGlobalScope;
  void 0 !== dz && globalThis instanceof dz && function(zz, tz) {
    const pz = new Map,
      dz = new Map,
      Fz = (uz, bz, Ez) => {
        (async () => {
          try {
            zz.postMessage({
              type: "drawn",
              id: uz,
              url: await tz.encode(Ez(), bz)
            })
          } catch (nz) {
            zz.postMessage({
              type: "failed",
              message: String(nz)
            })
          }
        })()
      };
    zz.onmessage = zz => {
      let {
        data: Zz
      } = zz;
      if ("texture" === Zz.type) pz.set(Zz.url, tz.pixelsOf(Zz.bitmap));
      else if ("model" === Zz.type) dz.set(Zz.name, {
        geometry: Zz.geometry,
        texture: tz.pixelsOf(Zz.bitmap)
      });
      else if ("draw" === Zz.type) {
        const {
          id: zz,
          top: tz,
          left: dz,
          right: Rz,
          itemType: Kz,
          size: wz,
          outlineWidth: Xz
        } = Zz;
        Fz(zz, wz, (() => function(zz, iz, lz, Mz) {
          const tz = .6 * lz,
            Oz = tz * Ez,
            pz = tz * Ez * .5,
            dz = tz * nz,
            Fz = Math.max(...iz.boxes.map((zz => zz[4]))),
            Zz = Oz / 2 + (lz - Oz) / 2,
            Rz = pz + (lz - pz - pz - Fz * dz) / 2,
            Kz = (zz, uz, bz) => ({
              x: Zz + (zz - bz) * Oz,
              y: Rz - pz + (zz + bz) * pz + (Fz - uz) * dz
            }),
            wz = (zz, uz, bz, Ez, nz, lz) => ({
              origin: zz,
              across: {
                x: uz.x - zz.x,
                y: uz.y - zz.y
              },
              down: {
                x: bz.x - zz.x,
                y: bz.y - zz.y
              },
              texture: Ez,
              rect: iz.cropFaces ? nz : [0, 0, 1, 1],
              shade: lz
            }),
            Xz = new Uint8ClampedArray(lz * lz * 4),
            fz = new Uint8Array(lz * lz),
            sz = uz;
          for (const [uz, bz, Ez, nz, rz, oz] of iz.boxes) {
            const iz = wz(Kz(nz, rz, oz), Kz(nz, rz, Ez), Kz(nz, bz, oz), zz.right, [1 - oz, 1 - rz, 1 - Ez, 1 - bz], sz.right),
              Mz = wz(Kz(uz, rz, oz), Kz(nz, rz, oz), Kz(uz, bz, oz), zz.left, [uz, 1 - rz, nz, 1 - bz], sz.left),
              tz = wz(Kz(uz, rz, Ez), Kz(nz, rz, Ez), Kz(uz, rz, oz), zz.top, [uz, Ez, nz, oz], sz.top);
            for (const zz of [iz, Mz, tz]) Hz(Xz, fz, lz, zz)
          }
          return bz(Xz, lz, Mz, (zz => 1 === fz[zz])), Xz
        }({
          top: Oz(pz, tz, "texture"),
          left: Oz(pz, dz, "texture"),
          right: Oz(pz, Rz, "texture")
        }, function(zz) {
          return "SlabBlock" === zz ? lz : "StairsBlock" === zz ? Mz : iz
        }(Kz), wz, Xz)))
      } else {
        const {
          id: zz,
          name: uz,
          size: Ez,
          outlineWidth: nz
        } = Zz;
        Fz(zz, Ez, (() => {
          const {
            geometry: zz,
            texture: iz
          } = Oz(dz, uz, "model");
          return function(zz, uz, Ez, nz) {
            const {
              vertices: iz,
              uvs: lz,
              indices: Mz,
              shades: tz
            } = zz, Hz = .03125 * Ez, Oz = Ez - 2 * Hz, pz = new Float32Array(iz.length);
            for (let bz = 0; bz < iz.length; bz += 3) pz[bz] = Hz + iz[bz] * Oz, pz[bz + 1] = Hz + iz[bz + 1] * Oz, pz[bz + 2] = iz[bz + 2];
            const dz = new Float32Array(Ez * Ez).fill(-1 / 0),
              Fz = new Uint8ClampedArray(Ez * Ez * 4),
              Zz = 255 * zz.alphaCutoff;
            for (let bz = 0; bz < Mz.length; bz += 3) {
              const [zz, nz, iz] = [Mz[bz], Mz[bz + 1], Mz[bz + 2]], [Hz, Oz, Rz] = [3 * zz, 3 * nz, 3 * iz], [Kz, wz, Xz, fz, sz, rz] = [pz[Hz], pz[Hz + 1], pz[Oz], pz[Oz + 1], pz[Rz], pz[Rz + 1]], oz = (Xz - Kz) * (rz - wz) - (sz - Kz) * (fz - wz);
              if (Math.abs(oz) < 1e-9) continue;
              const Nz = tz[bz / 3],
                [vz, xz, Jz, Az, Tz, Lz] = [lz[2 * zz], lz[2 * zz + 1], lz[2 * nz], lz[2 * nz + 1], lz[2 * iz], lz[2 * iz + 1]],
                Pz = Math.max(0, Math.floor(Math.min(Kz, Xz, sz))),
                Gz = Math.min(Ez - 1, Math.ceil(Math.max(Kz, Xz, sz))),
                az = Math.max(0, Math.floor(Math.min(wz, fz, rz))),
                Vz = Math.min(Ez - 1, Math.ceil(Math.max(wz, fz, rz)));
              for (let bz = az; bz <= Vz; bz++)
                for (let zz = Pz; zz <= Gz; zz++) {
                  const [nz, iz] = [zz + .5, bz + .5], lz = ((nz - Kz) * (rz - wz) - (sz - Kz) * (iz - wz)) / oz, Mz = ((Xz - Kz) * (iz - wz) - (nz - Kz) * (fz - wz)) / oz, tz = 1 - lz - Mz;
                  if (tz < 0 || lz < 0 || Mz < 0) continue;
                  const Pz = tz * pz[Hz + 2] + lz * pz[Oz + 2] + Mz * pz[Rz + 2],
                    Gz = bz * Ez + zz;
                  if (Pz <= dz[Gz]) continue;
                  const az = Math.max(0, Math.min(uz.width - 1, Math.floor((tz * vz + lz * Jz + Mz * Tz) * uz.width))),
                    Vz = 4 * (Math.max(0, Math.min(uz.height - 1, Math.floor((tz * xz + lz * Az + Mz * Lz) * uz.height))) * uz.width + az);
                  uz.pixels[Vz + 3] < Zz || (dz[Gz] = Pz, Fz[4 * Gz] = uz.pixels[Vz] * Nz, Fz[4 * Gz + 1] = uz.pixels[Vz + 1] * Nz, Fz[4 * Gz + 2] = uz.pixels[Vz + 2] * Nz, Fz[4 * Gz + 3] = 255)
                }
            }
            return bz(Fz, Ez, nz), Fz
          }(zz, iz, Ez, nz)
        }))
      }
    }, zz.postMessage({
      type: "started"
    })
  }(globalThis, pz)
})();