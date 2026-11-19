export const id = 230;
export const ids = [230];
export const modules = {
  40259: (zz, uz, bz) => {
    bz.d(uz, {
      noaDevTools: () => pz
    });
    var Ez = bz(37015),
      nz = bz(36988),
      iz = bz(2623),
      lz = bz(1673);

    function Mz(zz) {
      const {
        oR: uz
      } = zz, bz = uz.engine, Ez = {
        width: bz.getRenderWidth(),
        height: bz.getRenderHeight()
      };
      return {
        canvas: bz.getRenderingCanvas(),
        maxTextureSize: bz.getCaps().maxTextureSize,
        drawing: () => !zz.oN,
        resize: (zz, uz) => {
          bz.setSize(zz, uz)
        },
        restoreSize: () => {
          bz.setSize(Ez.width, Ez.height), uz.resize()
        },
        onFrameDrawn: uz => (zz.on("afterRender", uz), () => {
          zz.off("afterRender", uz)
        })
      }
    }
    var tz = bz(40238),
      Hz = bz(8886);

    function Oz(zz, uz) {
      let {
        width: Hz,
        height: Oz,
        colouring: pz
      } = uz;
      const dz = "normals" === pz,
        Fz = "depth" === pz;
      return new Promise((uz => {
        try {
          const Zz = (0, iz.g)();
          if (Zz.oR.NR) return "screenshot" !== zz || null !== pz ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void uz()) : void(0, tz.b)(Mz(Zz), Hz, Oz).finally(uz);
          const Rz = Zz.oR.engine,
            Kz = Zz.oR.XT(),
            wz = Hz,
            Xz = Oz;
          Promise.all([Promise.all([bz.e(244), bz.e(245), bz.e(227)]).then((() => bz(60309))), Promise.all([bz.e(226), bz.e(225), bz.e(244), bz.e(245), bz.e(242), bz.e(246), bz.e(249), bz.e(301), bz.e(231)]).then((() => bz(60313))), Promise.all([bz.e(226), bz.e(225), bz.e(244), bz.e(245), bz.e(242), bz.e(252), bz.e(246), bz.e(254), bz.e(233)]).then((() => bz(60322))), bz.e(344).then((() => bz(60329))), Promise.all([bz.e(225), bz.e(221)]).then((() => bz(36514))), bz.e(243).then((() => bz(60333))), bz.e(228).then((() => bz(60339)))]).then((iz => {
            const {
              CreateScreenshotUsingRenderTarget: Mz
            } = iz[1], {
              ShaderMaterial: tz
            } = iz[2], {
              ShaderLanguage: Hz
            } = iz[3], {
              ER: Oz
            } = iz[4], {
              registerDevtoolsShader: pz
            } = iz[6], Zz = Hz.GLSL, fz = new Map, sz = Kz.meshes.filter((zz => zz.material));
            let rz = !1,
              oz = null;

            function Nz() {
              var zz;
              rz && (rz = !1, (0, Ez.i)(Kz.meshes, !1)), null === (zz = oz) || void 0 === zz || zz(), oz = null, sz.forEach((zz => {
                const uz = fz.get(zz);
                uz && (zz.material = uz)
              }))
            }
            if (dz) {
              const zz = [],
                uz = [];
              sz.forEach((bz => {
                const Ez = bz.name.toLowerCase(),
                  nz = bz.lG().boundingBox.center,
                  iz = Kz.activeCamera.position.subtract(nz).length();
                Ez.includes("sky") || Ez.includes("background") || Ez.includes("environment") || iz > 1e3 ? uz.push(bz) : zz.push(bz)
              })), pz("devtoolsNormal", Zz);
              const bz = new tz("normalMaterial", Kz, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: Zz
              });
              pz("devtoolsWhite", Zz);
              const Ez = new tz("whiteMaterial", Kz, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: Zz
              });
              zz.forEach((zz => {
                fz.set(zz, zz.material), zz.material = bz
              })), uz.forEach((zz => {
                fz.set(zz, zz.material), zz.material = Ez
              }))
            } else if (Fz) {
              pz("devtoolsDepth", Zz);
              const zz = Kz.activeCamera.position;
              let uz = 0,
                bz = 1 / 0;
              sz.forEach((Ez => {
                const nz = Ez.name.toLowerCase();
                if (nz.includes("sky") || nz.includes("background") || nz.includes("environment")) return;
                const iz = Ez.lG().boundingBox.center,
                  lz = Oz.TransformCoordinates(iz, Ez.getWorldMatrix()),
                  Mz = zz.subtract(lz).length();
                Mz > 1e3 || (uz = Math.max(uz, Mz), bz = Math.min(bz, Mz))
              }));
              const Ez = uz - bz;
              uz += .1 * Ez, bz = Math.max(0, bz - .1 * Ez), console.log(`Depth range: min=${bz.toFixed(2)}, max=${uz.toFixed(2)}, range=${Ez.toFixed(2)}`), Ez < 1 && (uz = bz + 10);
              const nz = new tz("depthMaterial", Kz, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: Zz
              });
              nz.setVector3("cameraPosition", zz), nz.setFloat("maxDepth", uz), nz.setFloat("minDepth", bz), sz.forEach((zz => {
                fz.set(zz, zz.material), zz.material = nz
              }))
            }
            if ((0, Ez.i)(Kz.meshes, !0), rz = !0, "glb" === zz && (oz = (0, nz.d)(Kz.meshes)), "screenshot" === zz) {
              let zz = `bloxd-screenshot-${wz}x${Xz}-${Date.now()}.png`;
              dz ? zz = `bloxd-screenshot-normals-${wz}x${Xz}-${Date.now()}.png` : Fz && (zz = `bloxd-screenshot-depth-${wz}x${Xz}-${Date.now()}.png`), Mz(Rz, Kz.activeCamera, {
                width: wz,
                height: Xz
              }, (function(bz) {
                Nz(), fetch(bz).then((function(zz) {
                  return zz.blob()
                })).then((function(bz) {
                  (0, lz.downloadBlob)(bz, zz), uz()
                })).catch((function(zz) {
                  console.error("Error processing screenshot:", zz), uz()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), Nz(), uz()
              }))
            } else {
              let zz = "tK";
              dz ? zz = "scene-normals" : Fz && (zz = "scene-depth"), dz || Fz ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: zz
                  } = await Promise.all([bz.e(226), bz.e(225), bz.e(244), bz.e(245), bz.e(242), bz.e(252), bz.e(251), bz.e(232)]).then((() => bz(39425))), {
                    Color3: uz
                  } = await Promise.all([bz.e(226), bz.e(229)]).then((() => bz(36709))), Ez = [], nz = [];
                  if (sz.forEach((zz => {
                      const uz = zz.name.toLowerCase(),
                        bz = zz.lG().boundingBox.center,
                        iz = Kz.activeCamera.position.subtract(bz).length();
                      uz.includes("sky") || uz.includes("background") || uz.includes("environment") || iz > 1e3 ? nz.push(zz) : Ez.push(zz)
                    })), dz) Ez.forEach(((bz, Ez) => {
                    const nz = bz.getVerticesData("normal");
                    if (nz) {
                      const iz = [];
                      for (let zz = 0; zz < nz.length; zz += 3) {
                        const uz = Math.abs(nz[zz]),
                          bz = Math.abs(nz[zz + 1]),
                          Ez = Math.abs(nz[zz + 2]);
                        iz.push(uz, bz, Ez, 1)
                      }
                      bz.setVerticesData("color", iz);
                      const lz = new zz(`vertexColorMat_${Ez}`, Kz);
                      lz.disableLighting = !0, lz.emissiveColor = new uz(1, 1, 1), lz.specularColor = new uz(0, 0, 0), bz.material = lz
                    }
                  })), nz.forEach(((bz, Ez) => {
                    const nz = bz.getVerticesData("position");
                    if (nz) {
                      const iz = [],
                        lz = nz.length / 3;
                      for (let zz = 0; zz < lz; zz++) iz.push(1, 1, 1, 1);
                      bz.setVerticesData("color", iz);
                      const Mz = new zz(`whiteMat_${Ez}`, Kz);
                      Mz.disableLighting = !0, Mz.emissiveColor = new uz(1, 1, 1), Mz.specularColor = new uz(0, 0, 0), bz.material = Mz
                    }
                  }));
                  else if (Fz) {
                    const bz = Kz.activeCamera.position;
                    let nz = 0,
                      iz = 1 / 0;
                    Ez.forEach((zz => {
                      const uz = zz.lG().boundingBox.center,
                        Ez = Oz.TransformCoordinates(uz, zz.getWorldMatrix()),
                        lz = bz.subtract(Ez).length();
                      nz = Math.max(nz, lz), iz = Math.min(iz, lz)
                    }));
                    const lz = nz - iz;
                    nz += .1 * lz, iz = Math.max(0, iz - .1 * lz), lz < 1 && (nz = iz + 10), sz.forEach(((Ez, lz) => {
                      const Mz = Ez.name.toLowerCase(),
                        tz = Ez.lG().boundingBox.center,
                        Hz = Oz.TransformCoordinates(tz, Ez.getWorldMatrix()),
                        pz = bz.subtract(Hz).length();
                      if (!(Mz.includes("sky") || Mz.includes("background") || Mz.includes("environment") || pz > 1e3)) {
                        const bz = 1 - Math.min(Math.max((pz - iz) / (nz - iz), 0), 1),
                          Mz = new zz(`depthMat_${lz}`, Kz);
                        Mz.diffuseColor = new uz(bz, bz, bz), Mz.specularColor = new uz(0, 0, 0), Ez.material = Mz
                      }
                    }))
                  }
                })().then((() => Promise.all([bz.e(226), bz.e(225), bz.e(244), bz.e(245), bz.e(242), bz.e(252), bz.e(246), bz.e(251), bz.e(249), bz.e(241), bz.e(254), bz.e(264), bz.e(301), bz.e(236), bz.e(253), bz.e(224)]).then((() => bz(60343))))).then((uz => uz.GLTF2Export.GLBAsync(Kz, zz))).then((zz => {
                  Nz(), zz.downloadFiles(), uz()
                })).catch((zz => {
                  console.error("Error exporting GLB:", zz), Nz(), uz()
                }))
              }), 100) : Promise.all([bz.e(226), bz.e(225), bz.e(244), bz.e(245), bz.e(242), bz.e(252), bz.e(246), bz.e(251), bz.e(249), bz.e(241), bz.e(254), bz.e(264), bz.e(301), bz.e(236), bz.e(253), bz.e(224)]).then((() => bz(60343))).then((bz => {
                bz.GLTF2Export.GLBAsync(Kz, zz).then((zz => {
                  Nz(), zz.downloadFiles(), uz()
                })).catch((zz => {
                  console.error("Error exporting GLB:", zz), Nz(), uz()
                }))
              })).catch((zz => {
                console.error("Error importing serializers:", zz), Nz(), uz()
              }))
            }
          })).catch((zz => {
            console.error("Error downloading the scene:", zz), uz()
          }))
        } catch (Zz) {
          console.error("Error taking screenshot:", Zz), uz()
        }
      }))
    }
    const pz = new class {
      constructor() {
        this.tools = Hz.ALL_DEV_TOOLS
      }
      downloadScene(zz, uz) {
        return Oz(zz, uz)
      }
      async setAmbientLightIntensity(zz) {
        const {
          Color3: uz
        } = await Promise.all([bz.e(226), bz.e(229)]).then((() => bz(36709)));
        (0, iz.g)().oR.XT().ambientColor = uz.FromArray([zz, zz, zz])
      }
    }
  },
  40238: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => tz
    });
    var Ez = bz(1696);
    const nz = 33177600,
      iz = 3e4;
    let lz = !1;

    function Mz(zz, uz, bz) {
      if (!zz.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (lz) return Promise.reject(new Error("A screenshot is already being taken"));
      lz = !0;
      const Ez = function(zz, uz, bz) {
        const Ez = Math.max(1, zz),
          iz = Math.max(1, uz),
          lz = Math.min(1, bz / Math.max(Ez, iz), Math.sqrt(nz / (Ez * iz)));
        return {
          width: Math.max(1, Math.floor(Ez * lz)),
          height: Math.max(1, Math.floor(iz * lz))
        }
      }(uz, bz, zz.maxTextureSize);
      return zz.resize(Ez.width, Ez.height), new Promise(((uz, bz) => {
        let Ez, nz = 2,
          Mz = null;
        const tz = () => {
          var uz;
          lz = !1, null === (uz = Mz) || void 0 === uz || uz(), clearTimeout(Ez), zz.restoreSize()
        };
        Ez = setTimeout((() => {
          tz(), bz(new Error("No frame was drawn to capture"))
        }), iz), Mz = zz.onFrameDrawn((() => {
          if (nz--, nz > 0) return;
          const {
            canvas: Ez
          } = zz, iz = {
            width: Ez.width,
            height: Ez.height
          };
          try {
            Ez.toBlob((zz => {
              zz ? uz({
                blob: zz,
                ...iz
              }) : bz(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (lz) {
            bz(lz)
          } finally {
            tz()
          }
        }))
      }))
    }
    async function tz(zz, uz, bz) {
      try {
        const nz = await Mz(zz, uz, bz);
        (0, Ez.c)(nz.blob, `bloxd-screenshot-${nz.width}x${nz.height}-${Date.now()}.png`)
      } catch (nz) {
        console.error("Error taking screenshot:", nz)
      }
    }
  },
  37015: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Hz,
      i: () => Mz,
      m: () => lz
    });
    var Ez = bz(37006),
      nz = bz(37020);
    let iz = 0;

    function lz(zz, uz) {
      const bz = zz;
      bz._noaFaceGroups = null !== uz && void 0 !== uz ? uz : null, bz._noaFaceEpoch = -1, bz._noaFaceMask = -1, bz._noaFaceCount = -1, bz._noaFaceMaterial = null;
      const Ez = zz.hN;
      Ez && 1 === Ez.length && (Ez[0].indexStart = 0, Ez[0].indexCount = zz.getTotalIndices())
    }

    function Mz(zz, uz) {
      if (uz) {
        iz++;
        for (const uz of zz) {
          const zz = uz._noaFaceGroups;
          zz && lz(uz, zz)
        }
      } else iz = Math.max(0, iz - 1)
    }

    function tz(zz, uz, bz) {
      let nz = -1,
        iz = 0;
      for (let lz = 0; lz < Ez.c; lz++) {
        const bz = zz[lz],
          Mz = zz[lz + 1];
        Mz > bz && uz & 1 << Ez.b[lz] && (nz < 0 && (nz = bz), iz = Mz)
      }
      return nz < 0 ? (bz[0] = 0, bz[1] = 0, 0) : (bz[0] = nz, bz[1] = iz - nz, iz - nz)
    }
    class Hz {
      constructor(zz, uz) {
        this.IZ = zz, this.engine = uz, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(zz, uz) {
        if (!uz) return;
        const bz = uz.getProjectionMatrix().m,
          lz = 0 === iz && 0 === bz[15],
          Mz = uz.globalPosition,
          {
            engine: Hz
          } = this,
          Oz = lz ? (0, nz.b)(bz, Hz.getRenderWidth(), Hz.getRenderHeight()) : 0;
        Mz.x === this.eyeX && Mz.y === this.eyeY && Mz.z === this.eyeZ && Oz === this.focalPx && lz === this.culling || (this.epoch++, this.eyeX = Mz.x, this.eyeY = Mz.y, this.eyeZ = Mz.z, this.focalPx = Oz, this.culling = lz);
        const {
          epoch: pz,
          range: dz
        } = this, Fz = this.IZ / 2, Zz = Fz * Math.sqrt(3), Rz = zz.data, Kz = zz.length;
        let wz = 0;
        for (let iz = 0; iz < Kz; iz++) {
          const zz = Rz[iz],
            uz = zz._noaFaceGroups;
          if (uz && (zz._noaFaceEpoch !== pz || zz._noaFaceMaterial !== zz.material)) {
            zz._noaFaceEpoch = pz, zz._noaFaceMaterial = zz.material;
            const bz = zz.hN,
              iz = bz && 1 === bz.length ? bz[0] : null;
            let Hz = -1;
            if (lz && iz && (0, Ez.p)(zz.material)) {
              const bz = zz.position,
                Ez = Mz.x - bz.x,
                iz = Mz.y - bz.y,
                lz = Mz.z - bz.z,
                tz = Ez - Fz,
                pz = iz - Fz,
                dz = lz - Fz,
                Rz = Math.sqrt(tz * tz + pz * pz + dz * dz) + Zz;
              Hz = (0, nz.k)(uz, Ez, iz, lz, (0, nz.d)(Rz, Oz))
            }
            if (iz && Hz !== zz._noaFaceMask) {
              zz._noaFaceMask = Hz;
              let bz = 0,
                nz = uz[Ez.c]; - 1 !== Hz && (nz = tz(uz, Hz, dz), bz = dz[0]), zz._noaFaceCount = nz, iz.indexStart = 6 * bz, iz.indexCount = 6 * nz, iz.setBoundingInfo(zz.lG())
            }
          }
          uz && 0 === zz._noaFaceCount || (Rz[wz++] = zz)
        }
        zz.length = wz
      }
    }
  },
  36988: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => tz,
      g: () => Mz
    });
    const Ez = new WeakSet;
    let nz = 0;
    const iz = new Set;

    function lz(zz, uz) {
      zz._data = uz
    }

    function Mz(zz) {
      var uz, bz;
      (null !== (uz = null === (bz = zz.getBuffer()) || void 0 === bz ? void 0 : bz.Bp) && void 0 !== uz ? uz : 0) > 0 && (Ez.add(zz), 0 === nz ? lz(zz, null) : iz.add(zz))
    }

    function tz(zz) {
      nz++;
      for (const bz of function(zz) {
          const uz = new Set;
          for (const nz of zz) {
            const zz = nz.geometry;
            for (const nz of Object.values(null !== (bz = null === zz || void 0 === zz ? void 0 : zz.getVertexBuffers()) && void 0 !== bz ? bz : {})) {
              var bz;
              const zz = nz.getWrapperBuffer();
              Ez.has(zz) && uz.add(zz)
            }
          }
          return uz
        }(zz)) bz.getData() || Hz(bz), iz.add(bz);
      let uz = !0;
      return () => {
        if (uz && (uz = !1, nz--, 0 === nz)) {
          for (const zz of iz) lz(zz, null);
          iz.clear()
        }
      }
    }

    function Hz(zz) {
      const uz = zz.getBuffer();
      if (!uz || !(uz.Bp > 0)) return;
      const bz = zz._engine,
        Ez = new Uint8Array(uz.Bp);
      bz.bindArrayBuffer(uz), bz._gl.getBufferSubData(bz._gl.ARRAY_BUFFER, 0, Ez), bz._resetVertexBufferBinding(), lz(zz, Ez)
    }
  },
  37006: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => lz,
      c: () => iz,
      f: () => tz,
      g: () => Ez,
      j: () => Mz,
      l: () => nz,
      p: () => Hz
    });
    const Ez = 6,
      nz = [0, 2, 4, 1, 3, 5, 0, 2],
      iz = 6,
      lz = [1, 0, 3, 2, 5, 4];
    for (let Oz = iz; Oz < nz.length; Oz++)
      if (nz[Oz] !== nz[Oz - iz]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const Mz = nz.length + 1,
      tz = (() => {
        const zz = [];
        for (let uz = 0; uz < iz; uz++) zz[nz[uz]] = uz;
        return zz
      })();

    function Hz(zz) {
      return !!zz && zz.backFaceCulling && (0 === zz.transparencyMode || 1 === zz.transparencyMode)
    }
  },
  37020: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Mz,
      d: () => tz,
      h: () => Oz,
      k: () => Hz,
      o: () => Zz
    });
    var Ez = bz(37006);
    const nz = 1 / 16,
      iz = 1 / 64,
      lz = 2048;
    Ez.g;

    function Mz(zz, uz, bz) {
      return Math.min(Math.abs(zz[0] * uz), Math.abs(zz[5] * bz)) / 2
    }

    function tz(zz, uz) {
      return nz + iz * zz * zz / uz
    }

    function Hz(zz, uz, bz, nz, iz) {
      const lz = Ez.j;
      return Oz(zz[lz], zz[lz + 1], zz[lz + 2], zz[lz + 3], zz[lz + 4], zz[lz + 5], uz, bz, nz, iz)
    }

    function Oz(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz) {
      return (lz <= zz - Hz ? 0 : 1) | (lz >= uz + Hz ? 0 : 2) | (Mz <= bz - Hz ? 0 : 4) | (Mz >= Ez + Hz ? 0 : 8) | (tz <= nz - Hz ? 0 : 16) | (tz >= iz + Hz ? 0 : 32)
    }
    const pz = (() => {
        const zz = [];
        for (let uz = 0; uz < Ez.l.length; uz++) {
          let bz = 0;
          for (let nz = uz + 1; nz <= Ez.l.length; nz++) {
            const iz = 1 << Ez.l[nz - 1];
            if (bz & iz) break;
            bz |= iz, zz.push({
              start: uz,
              end: nz,
              si: bz
            })
          }
        }
        return zz
      })(),
      dz = [];

    function Fz(zz, uz) {
      const bz = Ez.f[uz];
      return zz[bz + 1] - zz[bz]
    }

    function Zz(zz, uz, bz) {
      let nz = 0;
      for (let lz = 0; lz < Ez.g; lz++) Fz(zz, lz) > 0 && (nz |= 1 << lz);
      if (0 === (uz &= nz)) return 0;
      if (uz === nz) return bz[0] = 0, bz[1] = zz[Ez.c], 1;
      let iz = null,
        Mz = 1 / 0;
      for (const Hz of function(zz) {
          let uz = dz[zz];
          if (uz) return uz;
          const bz = new Map,
            Ez = (zz, uz) => {
              const Ez = 4 * zz + uz.length / 2;
              bz.has(Ez) || bz.set(Ez, {
                si: zz,
                windows: uz
              })
            };
          for (const iz of pz)
            if ((iz.si & zz) === zz && Ez(iz.si, [iz.start, iz.end]), 0 !== (iz.si & zz))
              for (const uz of pz) uz.start < iz.end || 0 !== (iz.si & uz.si) || 0 === (uz.si & zz) || ((iz.si | uz.si) & zz) !== zz || Ez(iz.si | uz.si, [iz.start, iz.end, uz.start, uz.end]);
          const nz = [...bz.values()];
          return uz = nz.filter((zz => !nz.some((uz => uz !== zz && (uz.si & zz.si) === uz.si && uz.windows.length <= zz.windows.length)))), dz[zz] = uz, uz
        }(uz)) {
        let bz = (Hz.windows.length / 2 - 1) * lz;
        const tz = Hz.si & ~uz & nz;
        for (let uz = 0; uz < Ez.g; uz++) tz & 1 << uz && (bz += Fz(zz, uz));
        bz < Mz && (iz = Hz, Mz = bz)
      }
      const tz = iz.windows;
      for (let Ez = 0; Ez < tz.length; Ez += 2) {
        const uz = zz[tz[Ez]];
        bz[Ez] = uz, bz[Ez + 1] = zz[tz[Ez + 1]] - uz
      }
      return tz.length / 2
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);