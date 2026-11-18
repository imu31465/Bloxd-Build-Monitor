export const id = 217;
export const ids = [217];
export const modules = {
  39551: (yb, bb, Wy) => {
    Wy.d(bb, {
      noaDevTools: () => Ky
    });
    var Uy = Wy(36144),
      hy = Wy(36120),
      fy = Wy(2234),
      Zy = Wy(1496);

    function cb(yb) {
      const {
        Ch: bb
      } = yb, Wy = bb.engine, Uy = {
        width: Wy.getRenderWidth(),
        height: Wy.getRenderHeight()
      };
      return {
        canvas: Wy.getRenderingCanvas(),
        maxTextureSize: Wy.getCaps().maxTextureSize,
        drawing: () => !yb.Om,
        resize: (yb, bb) => {
          Wy.setSize(yb, bb)
        },
        restoreSize: () => {
          Wy.setSize(Uy.width, Uy.height), bb.resize()
        },
        onFrameDrawn: bb => (yb.on("afterRender", bb), () => {
          yb.off("afterRender", bb)
        })
      }
    }
    var Py = Wy(39541),
      oy = Wy(8345);

    function By(yb, bb) {
      let {
        width: oy,
        height: By,
        colouring: Ky
      } = bb;
      const ey = "normals" === Ky,
        qb = "depth" === Ky;
      return new Promise((bb => {
        try {
          const sy = (0, fy.g)();
          if (sy.Ch.Th) return "screenshot" !== yb || null !== Ky ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void bb()) : void(0, Py.d)(cb(sy), oy, By).finally(bb);
          const Sy = sy.Ch.engine,
            Ey = sy.Ch.kWy(),
            ly = oy,
            mb = By;
          Promise.all([Promise.all([Wy.e(233), Wy.e(234), Wy.e(215)]).then((() => Wy(59676))), Promise.all([Wy.e(214), Wy.e(213), Wy.e(233), Wy.e(234), Wy.e(231), Wy.e(235), Wy.e(238), Wy.e(289), Wy.e(218)]).then((() => Wy(59680))), Promise.all([Wy.e(214), Wy.e(213), Wy.e(233), Wy.e(234), Wy.e(231), Wy.e(241), Wy.e(235), Wy.e(243), Wy.e(220)]).then((() => Wy(59682))), Wy.e(332).then((() => Wy(59688))), Promise.all([Wy.e(213), Wy.e(209)]).then((() => Wy(35856))), Wy.e(232).then((() => Wy(59697))), Wy.e(208).then((() => Wy(59702)))]).then((fy => {
            const {
              CreateScreenshotUsingRenderTarget: cb
            } = fy[1], {
              ShaderMaterial: Py
            } = fy[2], {
              ShaderLanguage: oy
            } = fy[3], {
              dU: By
            } = fy[4], {
              registerDevtoolsShader: Ky
            } = fy[6], sy = oy.GLSL, Cy = new Map, Ty = Ey.meshes.filter((yb => yb.material));
            let Vy = !1,
              Jy = null;

            function gb() {
              var yb;
              Vy && (Vy = !1, (0, Uy.d)(Ey.meshes, !1)), null === (yb = Jy) || void 0 === yb || yb(), Jy = null, Ty.forEach((yb => {
                const bb = Cy.get(yb);
                bb && (yb.material = bb)
              }))
            }
            if (ey) {
              const yb = [],
                bb = [];
              Ty.forEach((Wy => {
                const Uy = Wy.name.toLowerCase(),
                  hy = Wy.qUy().boundingBox.center,
                  fy = Ey.activeCamera.position.subtract(hy).length();
                Uy.includes("sky") || Uy.includes("background") || Uy.includes("environment") || fy > 1e3 ? bb.push(Wy) : yb.push(Wy)
              })), Ky("devtoolsNormal", sy);
              const Wy = new Py("normalMaterial", Ey, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: sy
              });
              Ky("devtoolsWhite", sy);
              const Uy = new Py("whiteMaterial", Ey, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: sy
              });
              yb.forEach((yb => {
                Cy.set(yb, yb.material), yb.material = Wy
              })), bb.forEach((yb => {
                Cy.set(yb, yb.material), yb.material = Uy
              }))
            } else if (qb) {
              Ky("devtoolsDepth", sy);
              const yb = Ey.activeCamera.position;
              let bb = 0,
                Wy = 1 / 0;
              Ty.forEach((Uy => {
                const hy = Uy.name.toLowerCase();
                if (hy.includes("sky") || hy.includes("background") || hy.includes("environment")) return;
                const fy = Uy.qUy().boundingBox.center,
                  Zy = By.TransformCoordinates(fy, Uy.getWorldMatrix()),
                  cb = yb.subtract(Zy).length();
                cb > 1e3 || (bb = Math.max(bb, cb), Wy = Math.min(Wy, cb))
              }));
              const Uy = bb - Wy;
              bb += .1 * Uy, Wy = Math.max(0, Wy - .1 * Uy), console.log(`Depth range: min=${Wy.toFixed(2)}, max=${bb.toFixed(2)}, range=${Uy.toFixed(2)}`), Uy < 1 && (bb = Wy + 10);
              const hy = new Py("depthMaterial", Ey, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: sy
              });
              hy.setVector3("cameraPosition", yb), hy.setFloat("maxDepth", bb), hy.setFloat("minDepth", Wy), Ty.forEach((yb => {
                Cy.set(yb, yb.material), yb.material = hy
              }))
            }
            if ((0, Uy.d)(Ey.meshes, !0), Vy = !0, "glb" === yb && (Jy = (0, hy.b)(Ey.meshes)), "screenshot" === yb) {
              let yb = `bloxd-screenshot-${ly}x${mb}-${Date.now()}.png`;
              ey ? yb = `bloxd-screenshot-normals-${ly}x${mb}-${Date.now()}.png` : qb && (yb = `bloxd-screenshot-depth-${ly}x${mb}-${Date.now()}.png`), cb(Sy, Ey.activeCamera, {
                width: ly,
                height: mb
              }, (function(Wy) {
                gb(), fetch(Wy).then((function(yb) {
                  return yb.blob()
                })).then((function(Wy) {
                  (0, Zy.downloadBlob)(Wy, yb), bb()
                })).catch((function(yb) {
                  console.error("Error processing screenshot:", yb), bb()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), gb(), bb()
              }))
            } else {
              let yb = "Pf";
              ey ? yb = "scene-normals" : qb && (yb = "scene-depth"), ey || qb ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: yb
                  } = await Promise.all([Wy.e(214), Wy.e(213), Wy.e(233), Wy.e(234), Wy.e(231), Wy.e(241), Wy.e(240), Wy.e(219)]).then((() => Wy(38746))), {
                    Color3: bb
                  } = await Promise.all([Wy.e(214), Wy.e(216)]).then((() => Wy(35917))), Uy = [], hy = [];
                  if (Ty.forEach((yb => {
                      const bb = yb.name.toLowerCase(),
                        Wy = yb.qUy().boundingBox.center,
                        fy = Ey.activeCamera.position.subtract(Wy).length();
                      bb.includes("sky") || bb.includes("background") || bb.includes("environment") || fy > 1e3 ? hy.push(yb) : Uy.push(yb)
                    })), ey) Uy.forEach(((Wy, Uy) => {
                    const hy = Wy.getVerticesData("normal");
                    if (hy) {
                      const fy = [];
                      for (let yb = 0; yb < hy.length; yb += 3) {
                        const bb = Math.abs(hy[yb]),
                          Wy = Math.abs(hy[yb + 1]),
                          Uy = Math.abs(hy[yb + 2]);
                        fy.push(bb, Wy, Uy, 1)
                      }
                      Wy.setVerticesData("color", fy);
                      const Zy = new yb(`vertexColorMat_${Uy}`, Ey);
                      Zy.disableLighting = !0, Zy.emissiveColor = new bb(1, 1, 1), Zy.specularColor = new bb(0, 0, 0), Wy.material = Zy
                    }
                  })), hy.forEach(((Wy, Uy) => {
                    const hy = Wy.getVerticesData("position");
                    if (hy) {
                      const fy = [],
                        Zy = hy.length / 3;
                      for (let yb = 0; yb < Zy; yb++) fy.push(1, 1, 1, 1);
                      Wy.setVerticesData("color", fy);
                      const cb = new yb(`whiteMat_${Uy}`, Ey);
                      cb.disableLighting = !0, cb.emissiveColor = new bb(1, 1, 1), cb.specularColor = new bb(0, 0, 0), Wy.material = cb
                    }
                  }));
                  else if (qb) {
                    const Wy = Ey.activeCamera.position;
                    let hy = 0,
                      fy = 1 / 0;
                    Uy.forEach((yb => {
                      const bb = yb.qUy().boundingBox.center,
                        Uy = By.TransformCoordinates(bb, yb.getWorldMatrix()),
                        Zy = Wy.subtract(Uy).length();
                      hy = Math.max(hy, Zy), fy = Math.min(fy, Zy)
                    }));
                    const Zy = hy - fy;
                    hy += .1 * Zy, fy = Math.max(0, fy - .1 * Zy), Zy < 1 && (hy = fy + 10), Ty.forEach(((Uy, Zy) => {
                      const cb = Uy.name.toLowerCase(),
                        Py = Uy.qUy().boundingBox.center,
                        oy = By.TransformCoordinates(Py, Uy.getWorldMatrix()),
                        Ky = Wy.subtract(oy).length();
                      if (!(cb.includes("sky") || cb.includes("background") || cb.includes("environment") || Ky > 1e3)) {
                        const Wy = 1 - Math.min(Math.max((Ky - fy) / (hy - fy), 0), 1),
                          cb = new yb(`depthMat_${Zy}`, Ey);
                        cb.diffuseColor = new bb(Wy, Wy, Wy), cb.specularColor = new bb(0, 0, 0), Uy.material = cb
                      }
                    }))
                  }
                })().then((() => Promise.all([Wy.e(214), Wy.e(213), Wy.e(233), Wy.e(234), Wy.e(231), Wy.e(241), Wy.e(235), Wy.e(240), Wy.e(238), Wy.e(230), Wy.e(243), Wy.e(269), Wy.e(289), Wy.e(223), Wy.e(242), Wy.e(212)]).then((() => Wy(59706))))).then((bb => bb.GLTF2Export.GLBAsync(Ey, yb))).then((yb => {
                  gb(), yb.downloadFiles(), bb()
                })).catch((yb => {
                  console.error("Error exporting GLB:", yb), gb(), bb()
                }))
              }), 100) : Promise.all([Wy.e(214), Wy.e(213), Wy.e(233), Wy.e(234), Wy.e(231), Wy.e(241), Wy.e(235), Wy.e(240), Wy.e(238), Wy.e(230), Wy.e(243), Wy.e(269), Wy.e(289), Wy.e(223), Wy.e(242), Wy.e(212)]).then((() => Wy(59706))).then((Wy => {
                Wy.GLTF2Export.GLBAsync(Ey, yb).then((yb => {
                  gb(), yb.downloadFiles(), bb()
                })).catch((yb => {
                  console.error("Error exporting GLB:", yb), gb(), bb()
                }))
              })).catch((yb => {
                console.error("Error importing serializers:", yb), gb(), bb()
              }))
            }
          })).catch((yb => {
            console.error("Error downloading the scene:", yb), bb()
          }))
        } catch (sy) {
          console.error("Error taking screenshot:", sy), bb()
        }
      }))
    }
    const Ky = new class {
      constructor() {
        this.tools = oy.ALL_DEV_TOOLS
      }
      downloadScene(yb, bb) {
        return By(yb, bb)
      }
      async setAmbientLightIntensity(yb) {
        const {
          Color3: bb
        } = await Promise.all([Wy.e(214), Wy.e(216)]).then((() => Wy(35917)));
        (0, fy.g)().Ch.kWy().ambientColor = bb.FromArray([yb, yb, yb])
      }
    }
  },
  39541: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Py
    });
    var Uy = Wy(1506);
    const hy = 33177600,
      fy = 3e4;
    let Zy = !1;

    function cb(yb, bb, Wy) {
      if (!yb.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (Zy) return Promise.reject(new Error("A screenshot is already being taken"));
      Zy = !0;
      const Uy = function(yb, bb, Wy) {
        const Uy = Math.max(1, yb),
          fy = Math.max(1, bb),
          Zy = Math.min(1, Wy / Math.max(Uy, fy), Math.sqrt(hy / (Uy * fy)));
        return {
          width: Math.max(1, Math.floor(Uy * Zy)),
          height: Math.max(1, Math.floor(fy * Zy))
        }
      }(bb, Wy, yb.maxTextureSize);
      return yb.resize(Uy.width, Uy.height), new Promise(((bb, Wy) => {
        let Uy, hy = 2,
          cb = null;
        const Py = () => {
          var bb;
          Zy = !1, null === (bb = cb) || void 0 === bb || bb(), clearTimeout(Uy), yb.restoreSize()
        };
        Uy = setTimeout((() => {
          Py(), Wy(new Error("No frame was drawn to capture"))
        }), fy), cb = yb.onFrameDrawn((() => {
          if (hy--, hy > 0) return;
          const {
            canvas: Uy
          } = yb, fy = {
            width: Uy.width,
            height: Uy.height
          };
          try {
            Uy.toBlob((yb => {
              yb ? bb({
                blob: yb,
                ...fy
              }) : Wy(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (Zy) {
            Wy(Zy)
          } finally {
            Py()
          }
        }))
      }))
    }
    async function Py(yb, bb, Wy) {
      try {
        const hy = await cb(yb, bb, Wy);
        (0, Uy.b)(hy.blob, `bloxd-screenshot-${hy.width}x${hy.height}-${Date.now()}.png`)
      } catch (hy) {
        console.error("Error taking screenshot:", hy)
      }
    }
  },
  36144: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => oy,
      d: () => cb,
      g: () => Zy
    });
    var Uy = Wy(36137),
      hy = Wy(36146);
    let fy = 0;

    function Zy(yb, bb) {
      const Wy = yb;
      Wy._noaFaceGroups = null !== bb && void 0 !== bb ? bb : null, Wy._noaFaceEpoch = -1, Wy._noaFaceMask = -1, Wy._noaFaceCount = -1, Wy._noaFaceMaterial = null;
      const Uy = yb.vJ;
      Uy && 1 === Uy.length && (Uy[0].indexStart = 0, Uy[0].indexCount = yb.getTotalIndices())
    }

    function cb(yb, bb) {
      if (bb) {
        fy++;
        for (const bb of yb) {
          const yb = bb._noaFaceGroups;
          yb && Zy(bb, yb)
        }
      } else fy = Math.max(0, fy - 1)
    }

    function Py(yb, bb, Wy) {
      let hy = -1,
        fy = 0;
      for (let Zy = 0; Zy < Uy.g; Zy++) {
        const Wy = yb[Zy],
          cb = yb[Zy + 1];
        cb > Wy && bb & 1 << Uy.d[Zy] && (hy < 0 && (hy = Wy), fy = cb)
      }
      return hy < 0 ? (Wy[0] = 0, Wy[1] = 0, 0) : (Wy[0] = hy, Wy[1] = fy - hy, fy - hy)
    }
    class oy {
      constructor(yb, bb) {
        this.DU = yb, this.engine = bb, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(yb, bb) {
        if (!bb) return;
        const Wy = bb.getProjectionMatrix().m,
          Zy = 0 === fy && 0 === Wy[15],
          cb = bb.globalPosition,
          {
            engine: oy
          } = this,
          By = Zy ? (0, hy.e)(Wy, oy.getRenderWidth(), oy.getRenderHeight()) : 0;
        cb.x === this.eyeX && cb.y === this.eyeY && cb.z === this.eyeZ && By === this.focalPx && Zy === this.culling || (this.epoch++, this.eyeX = cb.x, this.eyeY = cb.y, this.eyeZ = cb.z, this.focalPx = By, this.culling = Zy);
        const {
          epoch: Ky,
          range: ey
        } = this, qb = this.DU / 2, sy = qb * Math.sqrt(3), Sy = yb.data, Ey = yb.length;
        let ly = 0;
        for (let fy = 0; fy < Ey; fy++) {
          const yb = Sy[fy],
            bb = yb._noaFaceGroups;
          if (bb && (yb._noaFaceEpoch !== Ky || yb._noaFaceMaterial !== yb.material)) {
            yb._noaFaceEpoch = Ky, yb._noaFaceMaterial = yb.material;
            const Wy = yb.vJ,
              fy = Wy && 1 === Wy.length ? Wy[0] : null;
            let oy = -1;
            if (Zy && fy && (0, Uy.u)(yb.material)) {
              const Wy = yb.position,
                Uy = cb.x - Wy.x,
                fy = cb.y - Wy.y,
                Zy = cb.z - Wy.z,
                Py = Uy - qb,
                Ky = fy - qb,
                ey = Zy - qb,
                Sy = Math.sqrt(Py * Py + Ky * Ky + ey * ey) + sy;
              oy = (0, hy.l)(bb, Uy, fy, Zy, (0, hy.h)(Sy, By))
            }
            if (fy && oy !== yb._noaFaceMask) {
              yb._noaFaceMask = oy;
              let Wy = 0,
                hy = bb[Uy.g]; - 1 !== oy && (hy = Py(bb, oy, ey), Wy = ey[0]), yb._noaFaceCount = hy, fy.indexStart = 6 * Wy, fy.indexCount = 6 * hy, fy.setBoundingInfo(yb.qUy())
            }
          }
          bb && 0 === yb._noaFaceCount || (Sy[ly++] = yb)
        }
        yb.length = ly
      }
    }
  },
  36120: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Py,
      f: () => cb
    });
    const Uy = new WeakSet;
    let hy = 0;
    const fy = new Set;

    function Zy(yb, bb) {
      yb._data = bb
    }

    function cb(yb) {
      var bb, Wy;
      (null !== (bb = null === (Wy = yb.getBuffer()) || void 0 === Wy ? void 0 : Wy.Hy) && void 0 !== bb ? bb : 0) > 0 && (Uy.add(yb), 0 === hy ? Zy(yb, null) : fy.add(yb))
    }

    function Py(yb) {
      hy++;
      for (const Wy of function(yb) {
          const bb = new Set;
          for (const hy of yb) {
            const yb = hy.geometry;
            for (const hy of Object.values(null !== (Wy = null === yb || void 0 === yb ? void 0 : yb.getVertexBuffers()) && void 0 !== Wy ? Wy : {})) {
              var Wy;
              const yb = hy.getWrapperBuffer();
              Uy.has(yb) && bb.add(yb)
            }
          }
          return bb
        }(yb)) Wy.getData() || oy(Wy), fy.add(Wy);
      let bb = !0;
      return () => {
        if (bb && (bb = !1, hy--, 0 === hy)) {
          for (const yb of fy) Zy(yb, null);
          fy.clear()
        }
      }
    }

    function oy(yb) {
      const bb = yb.getBuffer();
      if (!bb || !(bb.Hy > 0)) return;
      const Wy = yb._engine,
        Uy = new Uint8Array(bb.Hy);
      Wy.bindArrayBuffer(bb), Wy._gl.getBufferSubData(Wy._gl.ARRAY_BUFFER, 0, Uy), Wy._resetVertexBufferBinding(), Zy(yb, Uy)
    }
  },
  36137: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Zy,
      g: () => fy,
      i: () => Py,
      m: () => Uy,
      o: () => cb,
      q: () => hy,
      u: () => oy
    });
    const Uy = 6,
      hy = [0, 2, 4, 1, 3, 5, 0, 2],
      fy = 6,
      Zy = [1, 0, 3, 2, 5, 4];
    for (let By = fy; By < hy.length; By++)
      if (hy[By] !== hy[By - fy]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const cb = hy.length + 1,
      Py = (() => {
        const yb = [];
        for (let bb = 0; bb < fy; bb++) yb[hy[bb]] = bb;
        return yb
      })();

    function oy(yb) {
      return !!yb && yb.backFaceCulling && (0 === yb.transparencyMode || 1 === yb.transparencyMode)
    }
  },
  36146: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => cb,
      h: () => Py,
      i: () => By,
      l: () => oy,
      o: () => sy
    });
    var Uy = Wy(36137);
    const hy = 1 / 16,
      fy = 1 / 64,
      Zy = 2048;
    Uy.m;

    function cb(yb, bb, Wy) {
      return Math.min(Math.abs(yb[0] * bb), Math.abs(yb[5] * Wy)) / 2
    }

    function Py(yb, bb) {
      return hy + fy * yb * yb / bb
    }

    function oy(yb, bb, Wy, hy, fy) {
      const Zy = Uy.o;
      return By(yb[Zy], yb[Zy + 1], yb[Zy + 2], yb[Zy + 3], yb[Zy + 4], yb[Zy + 5], bb, Wy, hy, fy)
    }

    function By(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy) {
      return (Zy <= yb - oy ? 0 : 1) | (Zy >= bb + oy ? 0 : 2) | (cb <= Wy - oy ? 0 : 4) | (cb >= Uy + oy ? 0 : 8) | (Py <= hy - oy ? 0 : 16) | (Py >= fy + oy ? 0 : 32)
    }
    const Ky = (() => {
        const yb = [];
        for (let bb = 0; bb < Uy.q.length; bb++) {
          let Wy = 0;
          for (let hy = bb + 1; hy <= Uy.q.length; hy++) {
            const fy = 1 << Uy.q[hy - 1];
            if (Wy & fy) break;
            Wy |= fy, yb.push({
              start: bb,
              end: hy,
              IW: Wy
            })
          }
        }
        return yb
      })(),
      ey = [];

    function qb(yb, bb) {
      const Wy = Uy.i[bb];
      return yb[Wy + 1] - yb[Wy]
    }

    function sy(yb, bb, Wy) {
      let hy = 0;
      for (let Zy = 0; Zy < Uy.m; Zy++) qb(yb, Zy) > 0 && (hy |= 1 << Zy);
      if (0 === (bb &= hy)) return 0;
      if (bb === hy) return Wy[0] = 0, Wy[1] = yb[Uy.g], 1;
      let fy = null,
        cb = 1 / 0;
      for (const oy of function(yb) {
          let bb = ey[yb];
          if (bb) return bb;
          const Wy = new Map,
            Uy = (yb, bb) => {
              const Uy = 4 * yb + bb.length / 2;
              Wy.has(Uy) || Wy.set(Uy, {
                IW: yb,
                windows: bb
              })
            };
          for (const fy of Ky)
            if ((fy.IW & yb) === yb && Uy(fy.IW, [fy.start, fy.end]), 0 !== (fy.IW & yb))
              for (const bb of Ky) bb.start < fy.end || 0 !== (fy.IW & bb.IW) || 0 === (bb.IW & yb) || ((fy.IW | bb.IW) & yb) !== yb || Uy(fy.IW | bb.IW, [fy.start, fy.end, bb.start, bb.end]);
          const hy = [...Wy.values()];
          return bb = hy.filter((yb => !hy.some((bb => bb !== yb && (bb.IW & yb.IW) === bb.IW && bb.windows.length <= yb.windows.length)))), ey[yb] = bb, bb
        }(bb)) {
        let Wy = (oy.windows.length / 2 - 1) * Zy;
        const Py = oy.IW & ~bb & hy;
        for (let bb = 0; bb < Uy.m; bb++) Py & 1 << bb && (Wy += qb(yb, bb));
        Wy < cb && (fy = oy, cb = Wy)
      }
      const Py = fy.windows;
      for (let Uy = 0; Uy < Py.length; Uy += 2) {
        const bb = yb[Py[Uy]];
        Wy[Uy] = bb, Wy[Uy + 1] = yb[Py[Uy + 1]] - bb
      }
      return Py.length / 2
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);