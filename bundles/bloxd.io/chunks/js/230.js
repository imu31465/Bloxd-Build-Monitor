export const id = 230;
export const ids = [230];
export const modules = {
  40160: (zz, tz, sz) => {
    sz.d(tz, {
      noaDevTools: () => uz
    });
    var Fz = sz(36934),
      Wz = sz(36917),
      Xz = sz(2555),
      Oz = sz(1664);

    function oz(zz) {
      const {
        mD: tz
      } = zz, sz = tz.engine, Fz = {
        width: sz.getRenderWidth(),
        height: sz.getRenderHeight()
      };
      return {
        canvas: sz.getRenderingCanvas(),
        maxTextureSize: sz.getCaps().maxTextureSize,
        drawing: () => !zz.JY,
        resize: (zz, tz) => {
          sz.setSize(zz, tz)
        },
        restoreSize: () => {
          sz.setSize(Fz.width, Fz.height), tz.resize()
        },
        onFrameDrawn: tz => (zz.on("afterRender", tz), () => {
          zz.off("afterRender", tz)
        })
      }
    }
    var vz = sz(40135),
      Uz = sz(8723);

    function Kz(zz, tz) {
      let {
        width: Uz,
        height: Kz,
        colouring: uz
      } = tz;
      const Nz = "normals" === uz,
        bz = "depth" === uz;
      return new Promise((tz => {
        try {
          const wz = (0, Xz.e)();
          if (wz.mD.JD) return "screenshot" !== zz || null !== uz ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void tz()) : void(0, vz.c)(oz(wz), Uz, Kz).finally(tz);
          const Dz = wz.mD.engine,
            gz = wz.mD.aJ(),
            Hz = Uz,
            Bz = Kz;
          Promise.all([Promise.all([sz.e(244), sz.e(245), sz.e(227)]).then((() => sz(60294))), Promise.all([sz.e(226), sz.e(225), sz.e(244), sz.e(245), sz.e(242), sz.e(246), sz.e(249), sz.e(301), sz.e(231)]).then((() => sz(60296))), Promise.all([sz.e(226), sz.e(225), sz.e(244), sz.e(245), sz.e(242), sz.e(252), sz.e(246), sz.e(254), sz.e(233)]).then((() => sz(60305))), sz.e(344).then((() => sz(60314))), Promise.all([sz.e(225), sz.e(221)]).then((() => sz(36473))), sz.e(243).then((() => sz(60319))), sz.e(228).then((() => sz(60325)))]).then((Xz => {
            const {
              CreateScreenshotUsingRenderTarget: oz
            } = Xz[1], {
              ShaderMaterial: vz
            } = Xz[2], {
              ShaderLanguage: Uz
            } = Xz[3], {
              XD: Kz
            } = Xz[4], {
              registerDevtoolsShader: uz
            } = Xz[6], wz = Uz.GLSL, Pz = new Map, rz = gz.meshes.filter((zz => zz.material));
            let Yz = !1,
              xz = null;

            function mz() {
              var zz;
              Yz && (Yz = !1, (0, Fz.f)(gz.meshes, !1)), null === (zz = xz) || void 0 === zz || zz(), xz = null, rz.forEach((zz => {
                const tz = Pz.get(zz);
                tz && (zz.material = tz)
              }))
            }
            if (Nz) {
              const zz = [],
                tz = [];
              rz.forEach((sz => {
                const Fz = sz.name.toLowerCase(),
                  Wz = sz.rC().boundingBox.center,
                  Xz = gz.activeCamera.position.subtract(Wz).length();
                Fz.includes("sky") || Fz.includes("background") || Fz.includes("environment") || Xz > 1e3 ? tz.push(sz) : zz.push(sz)
              })), uz("devtoolsNormal", wz);
              const sz = new vz("normalMaterial", gz, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: wz
              });
              uz("devtoolsWhite", wz);
              const Fz = new vz("whiteMaterial", gz, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: wz
              });
              zz.forEach((zz => {
                Pz.set(zz, zz.material), zz.material = sz
              })), tz.forEach((zz => {
                Pz.set(zz, zz.material), zz.material = Fz
              }))
            } else if (bz) {
              uz("devtoolsDepth", wz);
              const zz = gz.activeCamera.position;
              let tz = 0,
                sz = 1 / 0;
              rz.forEach((Fz => {
                const Wz = Fz.name.toLowerCase();
                if (Wz.includes("sky") || Wz.includes("background") || Wz.includes("environment")) return;
                const Xz = Fz.rC().boundingBox.center,
                  Oz = Kz.TransformCoordinates(Xz, Fz.getWorldMatrix()),
                  oz = zz.subtract(Oz).length();
                oz > 1e3 || (tz = Math.max(tz, oz), sz = Math.min(sz, oz))
              }));
              const Fz = tz - sz;
              tz += .1 * Fz, sz = Math.max(0, sz - .1 * Fz), console.log(`Depth range: min=${sz.toFixed(2)}, max=${tz.toFixed(2)}, range=${Fz.toFixed(2)}`), Fz < 1 && (tz = sz + 10);
              const Wz = new vz("depthMaterial", gz, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: wz
              });
              Wz.setVector3("cameraPosition", zz), Wz.setFloat("maxDepth", tz), Wz.setFloat("minDepth", sz), rz.forEach((zz => {
                Pz.set(zz, zz.material), zz.material = Wz
              }))
            }
            if ((0, Fz.f)(gz.meshes, !0), Yz = !0, "glb" === zz && (xz = (0, Wz.b)(gz.meshes)), "screenshot" === zz) {
              let zz = `bloxd-screenshot-${Hz}x${Bz}-${Date.now()}.png`;
              Nz ? zz = `bloxd-screenshot-normals-${Hz}x${Bz}-${Date.now()}.png` : bz && (zz = `bloxd-screenshot-depth-${Hz}x${Bz}-${Date.now()}.png`), oz(Dz, gz.activeCamera, {
                width: Hz,
                height: Bz
              }, (function(sz) {
                mz(), fetch(sz).then((function(zz) {
                  return zz.blob()
                })).then((function(sz) {
                  (0, Oz.downloadBlob)(sz, zz), tz()
                })).catch((function(zz) {
                  console.error("Error processing screenshot:", zz), tz()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), mz(), tz()
              }))
            } else {
              let zz = "Kg";
              Nz ? zz = "scene-normals" : bz && (zz = "scene-depth"), Nz || bz ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: zz
                  } = await Promise.all([sz.e(226), sz.e(225), sz.e(244), sz.e(245), sz.e(242), sz.e(252), sz.e(251), sz.e(232)]).then((() => sz(39427))), {
                    Color3: tz
                  } = await Promise.all([sz.e(226), sz.e(229)]).then((() => sz(36652))), Fz = [], Wz = [];
                  if (rz.forEach((zz => {
                      const tz = zz.name.toLowerCase(),
                        sz = zz.rC().boundingBox.center,
                        Xz = gz.activeCamera.position.subtract(sz).length();
                      tz.includes("sky") || tz.includes("background") || tz.includes("environment") || Xz > 1e3 ? Wz.push(zz) : Fz.push(zz)
                    })), Nz) Fz.forEach(((sz, Fz) => {
                    const Wz = sz.getVerticesData("normal");
                    if (Wz) {
                      const Xz = [];
                      for (let zz = 0; zz < Wz.length; zz += 3) {
                        const tz = Math.abs(Wz[zz]),
                          sz = Math.abs(Wz[zz + 1]),
                          Fz = Math.abs(Wz[zz + 2]);
                        Xz.push(tz, sz, Fz, 1)
                      }
                      sz.setVerticesData("color", Xz);
                      const Oz = new zz(`vertexColorMat_${Fz}`, gz);
                      Oz.disableLighting = !0, Oz.emissiveColor = new tz(1, 1, 1), Oz.specularColor = new tz(0, 0, 0), sz.material = Oz
                    }
                  })), Wz.forEach(((sz, Fz) => {
                    const Wz = sz.getVerticesData("position");
                    if (Wz) {
                      const Xz = [],
                        Oz = Wz.length / 3;
                      for (let zz = 0; zz < Oz; zz++) Xz.push(1, 1, 1, 1);
                      sz.setVerticesData("color", Xz);
                      const oz = new zz(`whiteMat_${Fz}`, gz);
                      oz.disableLighting = !0, oz.emissiveColor = new tz(1, 1, 1), oz.specularColor = new tz(0, 0, 0), sz.material = oz
                    }
                  }));
                  else if (bz) {
                    const sz = gz.activeCamera.position;
                    let Wz = 0,
                      Xz = 1 / 0;
                    Fz.forEach((zz => {
                      const tz = zz.rC().boundingBox.center,
                        Fz = Kz.TransformCoordinates(tz, zz.getWorldMatrix()),
                        Oz = sz.subtract(Fz).length();
                      Wz = Math.max(Wz, Oz), Xz = Math.min(Xz, Oz)
                    }));
                    const Oz = Wz - Xz;
                    Wz += .1 * Oz, Xz = Math.max(0, Xz - .1 * Oz), Oz < 1 && (Wz = Xz + 10), rz.forEach(((Fz, Oz) => {
                      const oz = Fz.name.toLowerCase(),
                        vz = Fz.rC().boundingBox.center,
                        Uz = Kz.TransformCoordinates(vz, Fz.getWorldMatrix()),
                        uz = sz.subtract(Uz).length();
                      if (!(oz.includes("sky") || oz.includes("background") || oz.includes("environment") || uz > 1e3)) {
                        const sz = 1 - Math.min(Math.max((uz - Xz) / (Wz - Xz), 0), 1),
                          oz = new zz(`depthMat_${Oz}`, gz);
                        oz.diffuseColor = new tz(sz, sz, sz), oz.specularColor = new tz(0, 0, 0), Fz.material = oz
                      }
                    }))
                  }
                })().then((() => Promise.all([sz.e(226), sz.e(225), sz.e(244), sz.e(245), sz.e(242), sz.e(252), sz.e(246), sz.e(251), sz.e(249), sz.e(241), sz.e(254), sz.e(264), sz.e(301), sz.e(236), sz.e(253), sz.e(224)]).then((() => sz(60332))))).then((tz => tz.GLTF2Export.GLBAsync(gz, zz))).then((zz => {
                  mz(), zz.downloadFiles(), tz()
                })).catch((zz => {
                  console.error("Error exporting GLB:", zz), mz(), tz()
                }))
              }), 100) : Promise.all([sz.e(226), sz.e(225), sz.e(244), sz.e(245), sz.e(242), sz.e(252), sz.e(246), sz.e(251), sz.e(249), sz.e(241), sz.e(254), sz.e(264), sz.e(301), sz.e(236), sz.e(253), sz.e(224)]).then((() => sz(60332))).then((sz => {
                sz.GLTF2Export.GLBAsync(gz, zz).then((zz => {
                  mz(), zz.downloadFiles(), tz()
                })).catch((zz => {
                  console.error("Error exporting GLB:", zz), mz(), tz()
                }))
              })).catch((zz => {
                console.error("Error importing serializers:", zz), mz(), tz()
              }))
            }
          })).catch((zz => {
            console.error("Error downloading the scene:", zz), tz()
          }))
        } catch (wz) {
          console.error("Error taking screenshot:", wz), tz()
        }
      }))
    }
    const uz = new class {
      constructor() {
        this.tools = Uz.ALL_DEV_TOOLS
      }
      downloadScene(zz, tz) {
        return Kz(zz, tz)
      }
      async setAmbientLightIntensity(zz) {
        const {
          Color3: tz
        } = await Promise.all([sz.e(226), sz.e(229)]).then((() => sz(36652)));
        (0, Xz.e)().mD.aJ().ambientColor = tz.FromArray([zz, zz, zz])
      }
    }
  },
  40135: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => vz
    });
    var Fz = sz(1681);
    const Wz = 33177600,
      Xz = 3e4;
    let Oz = !1;

    function oz(zz, tz, sz) {
      if (!zz.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (Oz) return Promise.reject(new Error("A screenshot is already being taken"));
      Oz = !0;
      const Fz = function(zz, tz, sz) {
        const Fz = Math.max(1, zz),
          Xz = Math.max(1, tz),
          Oz = Math.min(1, sz / Math.max(Fz, Xz), Math.sqrt(Wz / (Fz * Xz)));
        return {
          width: Math.max(1, Math.floor(Fz * Oz)),
          height: Math.max(1, Math.floor(Xz * Oz))
        }
      }(tz, sz, zz.maxTextureSize);
      return zz.resize(Fz.width, Fz.height), new Promise(((tz, sz) => {
        let Fz, Wz = 2,
          oz = null;
        const vz = () => {
          var tz;
          Oz = !1, null === (tz = oz) || void 0 === tz || tz(), clearTimeout(Fz), zz.restoreSize()
        };
        Fz = setTimeout((() => {
          vz(), sz(new Error("No frame was drawn to capture"))
        }), Xz), oz = zz.onFrameDrawn((() => {
          if (Wz--, Wz > 0) return;
          const {
            canvas: Fz
          } = zz, Xz = {
            width: Fz.width,
            height: Fz.height
          };
          try {
            Fz.toBlob((zz => {
              zz ? tz({
                blob: zz,
                ...Xz
              }) : sz(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (Oz) {
            sz(Oz)
          } finally {
            vz()
          }
        }))
      }))
    }
    async function vz(zz, tz, sz) {
      try {
        const Wz = await oz(zz, tz, sz);
        (0, Fz.d)(Wz.blob, `bloxd-screenshot-${Wz.width}x${Wz.height}-${Date.now()}.png`)
      } catch (Wz) {
        console.error("Error taking screenshot:", Wz)
      }
    }
  },
  36934: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Uz,
      f: () => oz,
      j: () => Oz
    });
    var Fz = sz(36932),
      Wz = sz(36943);
    let Xz = 0;

    function Oz(zz, tz) {
      const sz = zz;
      sz._noaFaceGroups = null !== tz && void 0 !== tz ? tz : null, sz._noaFaceEpoch = -1, sz._noaFaceMask = -1, sz._noaFaceCount = -1, sz._noaFaceMaterial = null;
      const Fz = zz.kY;
      Fz && 1 === Fz.length && (Fz[0].indexStart = 0, Fz[0].indexCount = zz.getTotalIndices())
    }

    function oz(zz, tz) {
      if (tz) {
        Xz++;
        for (const tz of zz) {
          const zz = tz._noaFaceGroups;
          zz && Oz(tz, zz)
        }
      } else Xz = Math.max(0, Xz - 1)
    }

    function vz(zz, tz, sz) {
      let Wz = -1,
        Xz = 0;
      for (let Oz = 0; Oz < Fz.f; Oz++) {
        const sz = zz[Oz],
          oz = zz[Oz + 1];
        oz > sz && tz & 1 << Fz.c[Oz] && (Wz < 0 && (Wz = sz), Xz = oz)
      }
      return Wz < 0 ? (sz[0] = 0, sz[1] = 0, 0) : (sz[0] = Wz, sz[1] = Xz - Wz, Xz - Wz)
    }
    class Uz {
      constructor(zz, tz) {
        this.pw = zz, this.engine = tz, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(zz, tz) {
        if (!tz) return;
        const sz = tz.getProjectionMatrix().m,
          Oz = 0 === Xz && 0 === sz[15],
          oz = tz.globalPosition,
          {
            engine: Uz
          } = this,
          Kz = Oz ? (0, Wz.d)(sz, Uz.getRenderWidth(), Uz.getRenderHeight()) : 0;
        oz.x === this.eyeX && oz.y === this.eyeY && oz.z === this.eyeZ && Kz === this.focalPx && Oz === this.culling || (this.epoch++, this.eyeX = oz.x, this.eyeY = oz.y, this.eyeZ = oz.z, this.focalPx = Kz, this.culling = Oz);
        const {
          epoch: uz,
          range: Nz
        } = this, bz = this.pw / 2, wz = bz * Math.sqrt(3), Dz = zz.data, gz = zz.length;
        let Hz = 0;
        for (let Xz = 0; Xz < gz; Xz++) {
          const zz = Dz[Xz],
            tz = zz._noaFaceGroups;
          if (tz && (zz._noaFaceEpoch !== uz || zz._noaFaceMaterial !== zz.material)) {
            zz._noaFaceEpoch = uz, zz._noaFaceMaterial = zz.material;
            const sz = zz.kY,
              Xz = sz && 1 === sz.length ? sz[0] : null;
            let Uz = -1;
            if (Oz && Xz && (0, Fz.m)(zz.material)) {
              const sz = zz.position,
                Fz = oz.x - sz.x,
                Xz = oz.y - sz.y,
                Oz = oz.z - sz.z,
                vz = Fz - bz,
                uz = Xz - bz,
                Nz = Oz - bz,
                Dz = Math.sqrt(vz * vz + uz * uz + Nz * Nz) + wz;
              Uz = (0, Wz.l)(tz, Fz, Xz, Oz, (0, Wz.h)(Dz, Kz))
            }
            if (Xz && Uz !== zz._noaFaceMask) {
              zz._noaFaceMask = Uz;
              let sz = 0,
                Wz = tz[Fz.f]; - 1 !== Uz && (Wz = vz(tz, Uz, Nz), sz = Nz[0]), zz._noaFaceCount = Wz, Xz.indexStart = 6 * sz, Xz.indexCount = 6 * Wz, Xz.setBoundingInfo(zz.rC())
            }
          }
          tz && 0 === zz._noaFaceCount || (Dz[Hz++] = zz)
        }
        zz.length = Hz
      }
    }
  },
  36917: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => vz,
      d: () => oz
    });
    const Fz = new WeakSet;
    let Wz = 0;
    const Xz = new Set;

    function Oz(zz, tz) {
      zz._data = tz
    }

    function oz(zz) {
      var tz, sz;
      (null !== (tz = null === (sz = zz.getBuffer()) || void 0 === sz ? void 0 : sz.au) && void 0 !== tz ? tz : 0) > 0 && (Fz.add(zz), 0 === Wz ? Oz(zz, null) : Xz.add(zz))
    }

    function vz(zz) {
      Wz++;
      for (const sz of function(zz) {
          const tz = new Set;
          for (const Wz of zz) {
            const zz = Wz.geometry;
            for (const Wz of Object.values(null !== (sz = null === zz || void 0 === zz ? void 0 : zz.getVertexBuffers()) && void 0 !== sz ? sz : {})) {
              var sz;
              const zz = Wz.getWrapperBuffer();
              Fz.has(zz) && tz.add(zz)
            }
          }
          return tz
        }(zz)) sz.getData() || Uz(sz), Xz.add(sz);
      let tz = !0;
      return () => {
        if (tz && (tz = !1, Wz--, 0 === Wz)) {
          for (const zz of Xz) Oz(zz, null);
          Xz.clear()
        }
      }
    }

    function Uz(zz) {
      const tz = zz.getBuffer();
      if (!tz || !(tz.au > 0)) return;
      const sz = zz._engine,
        Fz = new Uint8Array(tz.au);
      sz.bindArrayBuffer(tz), sz._gl.getBufferSubData(sz._gl.ARRAY_BUFFER, 0, Fz), sz._resetVertexBufferBinding(), Oz(zz, Fz)
    }
  },
  36932: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz,
      f: () => Xz,
      g: () => vz,
      h: () => Fz,
      j: () => oz,
      k: () => Wz,
      m: () => Uz
    });
    const Fz = 6,
      Wz = [0, 2, 4, 1, 3, 5, 0, 2],
      Xz = 6,
      Oz = [1, 0, 3, 2, 5, 4];
    for (let Kz = Xz; Kz < Wz.length; Kz++)
      if (Wz[Kz] !== Wz[Kz - Xz]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const oz = Wz.length + 1,
      vz = (() => {
        const zz = [];
        for (let tz = 0; tz < Xz; tz++) zz[Wz[tz]] = tz;
        return zz
      })();

    function Uz(zz) {
      return !!zz && zz.backFaceCulling && (0 === zz.transparencyMode || 1 === zz.transparencyMode)
    }
  },
  36943: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => oz,
      h: () => vz,
      j: () => Kz,
      l: () => Uz,
      n: () => wz
    });
    var Fz = sz(36932);
    const Wz = 1 / 16,
      Xz = 1 / 64,
      Oz = 2048;
    Fz.h;

    function oz(zz, tz, sz) {
      return Math.min(Math.abs(zz[0] * tz), Math.abs(zz[5] * sz)) / 2
    }

    function vz(zz, tz) {
      return Wz + Xz * zz * zz / tz
    }

    function Uz(zz, tz, sz, Wz, Xz) {
      const Oz = Fz.j;
      return Kz(zz[Oz], zz[Oz + 1], zz[Oz + 2], zz[Oz + 3], zz[Oz + 4], zz[Oz + 5], tz, sz, Wz, Xz)
    }

    function Kz(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz) {
      return (Oz <= zz - Uz ? 0 : 1) | (Oz >= tz + Uz ? 0 : 2) | (oz <= sz - Uz ? 0 : 4) | (oz >= Fz + Uz ? 0 : 8) | (vz <= Wz - Uz ? 0 : 16) | (vz >= Xz + Uz ? 0 : 32)
    }
    const uz = (() => {
        const zz = [];
        for (let tz = 0; tz < Fz.k.length; tz++) {
          let sz = 0;
          for (let Wz = tz + 1; Wz <= Fz.k.length; Wz++) {
            const Xz = 1 << Fz.k[Wz - 1];
            if (sz & Xz) break;
            sz |= Xz, zz.push({
              start: tz,
              end: Wz,
              xX: sz
            })
          }
        }
        return zz
      })(),
      Nz = [];

    function bz(zz, tz) {
      const sz = Fz.g[tz];
      return zz[sz + 1] - zz[sz]
    }

    function wz(zz, tz, sz) {
      let Wz = 0;
      for (let Oz = 0; Oz < Fz.h; Oz++) bz(zz, Oz) > 0 && (Wz |= 1 << Oz);
      if (0 === (tz &= Wz)) return 0;
      if (tz === Wz) return sz[0] = 0, sz[1] = zz[Fz.f], 1;
      let Xz = null,
        oz = 1 / 0;
      for (const Uz of function(zz) {
          let tz = Nz[zz];
          if (tz) return tz;
          const sz = new Map,
            Fz = (zz, tz) => {
              const Fz = 4 * zz + tz.length / 2;
              sz.has(Fz) || sz.set(Fz, {
                xX: zz,
                windows: tz
              })
            };
          for (const Xz of uz)
            if ((Xz.xX & zz) === zz && Fz(Xz.xX, [Xz.start, Xz.end]), 0 !== (Xz.xX & zz))
              for (const tz of uz) tz.start < Xz.end || 0 !== (Xz.xX & tz.xX) || 0 === (tz.xX & zz) || ((Xz.xX | tz.xX) & zz) !== zz || Fz(Xz.xX | tz.xX, [Xz.start, Xz.end, tz.start, tz.end]);
          const Wz = [...sz.values()];
          return tz = Wz.filter((zz => !Wz.some((tz => tz !== zz && (tz.xX & zz.xX) === tz.xX && tz.windows.length <= zz.windows.length)))), Nz[zz] = tz, tz
        }(tz)) {
        let sz = (Uz.windows.length / 2 - 1) * Oz;
        const vz = Uz.xX & ~tz & Wz;
        for (let tz = 0; tz < Fz.h; tz++) vz & 1 << tz && (sz += bz(zz, tz));
        sz < oz && (Xz = Uz, oz = sz)
      }
      const vz = Xz.windows;
      for (let Fz = 0; Fz < vz.length; Fz += 2) {
        const tz = zz[vz[Fz]];
        sz[Fz] = tz, sz[Fz + 1] = zz[vz[Fz + 1]] - tz
      }
      return vz.length / 2
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);