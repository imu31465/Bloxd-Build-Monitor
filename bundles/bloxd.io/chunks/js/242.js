export const id = 242;
export const ids = [242];
export const modules = {
  41159: (BB, jB, zB) => {
    zB.d(jB, {
      noaDevTools: () => pB
    });
    var QB = zB(37647),
      nB = zB(37629),
      dB = zB(2863),
      IB = zB(1778),
      NB = zB(41052);

    function uB(BB) {
      const {
        pm: jB
      } = BB, zB = jB.engine, QB = {
        width: zB.getRenderWidth(),
        height: zB.getRenderHeight()
      };
      return {
        canvas: zB.getRenderingCanvas(),
        maxTextureSize: zB.getCaps().maxTextureSize,
        drawing: () => !BB.qL,
        resize: (BB, jB) => {
          zB.setSize(BB, jB)
        },
        restoreSize: () => {
          zB.setSize(QB.width, QB.height), jB.resize()
        },
        onFrameDrawn: jB => (BB.on("afterRender", jB), () => {
          BB.off("afterRender", jB)
        })
      }
    }
    var UB = zB(34126);

    function aB(BB, jB) {
      let {
        width: UB,
        height: aB,
        colouring: pB
      } = jB;
      const rB = "normals" === pB,
        sB = "depth" === pB;
      return new Promise((jB => {
        try {
          const JB = (0, dB.g)();
          if (JB.pm.rm) return "screenshot" !== BB || null !== pB ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void jB()) : void(0, NB.h)(uB(JB), UB, aB).finally(jB);
          const mB = JB.pm.engine,
            yB = JB.pm.aY(),
            kB = UB,
            GB = aB;
          Promise.all([Promise.all([zB.e(258), zB.e(259), zB.e(238)]).then((() => zB(61413))), Promise.all([zB.e(237), zB.e(236), zB.e(258), zB.e(259), zB.e(256), zB.e(260), zB.e(263), zB.e(316), zB.e(243)]).then((() => zB(61416))), Promise.all([zB.e(237), zB.e(236), zB.e(258), zB.e(259), zB.e(256), zB.e(266), zB.e(260), zB.e(268), zB.e(245)]).then((() => zB(61420))), zB.e(357).then((() => zB(61427))), Promise.all([zB.e(236), zB.e(232)]).then((() => zB(37166))), zB.e(257).then((() => zB(61435))), zB.e(240).then((() => zB(61439)))]).then((dB => {
            const {
              CreateScreenshotUsingRenderTarget: NB
            } = dB[1], {
              ShaderMaterial: uB
            } = dB[2], {
              ShaderLanguage: UB
            } = dB[3], {
              KJ: aB
            } = dB[4], {
              registerDevtoolsShader: pB
            } = dB[6], JB = UB.GLSL, LB = new Map, gB = yB.meshes.filter((BB => BB.material));
            let tB = !1,
              SB = null;

            function MB() {
              var BB;
              tB && (tB = !1, (0, QB.e)(yB.meshes, !1)), null === (BB = SB) || void 0 === BB || BB(), SB = null, gB.forEach((BB => {
                const jB = LB.get(BB);
                jB && (BB.material = jB)
              }))
            }
            if (rB) {
              const BB = [],
                jB = [];
              gB.forEach((zB => {
                const QB = zB.name.toLowerCase(),
                  nB = zB.rV().boundingBox.center,
                  dB = yB.activeCamera.position.subtract(nB).length();
                QB.includes("sky") || QB.includes("background") || QB.includes("environment") || dB > 1e3 ? jB.push(zB) : BB.push(zB)
              })), pB("devtoolsNormal", JB);
              const zB = new uB("normalMaterial", yB, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: JB
              });
              pB("devtoolsWhite", JB);
              const QB = new uB("whiteMaterial", yB, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: JB
              });
              BB.forEach((BB => {
                LB.set(BB, BB.material), BB.material = zB
              })), jB.forEach((BB => {
                LB.set(BB, BB.material), BB.material = QB
              }))
            } else if (sB) {
              pB("devtoolsDepth", JB);
              const BB = yB.activeCamera.position;
              let jB = 0,
                zB = 1 / 0;
              gB.forEach((QB => {
                const nB = QB.name.toLowerCase();
                if (nB.includes("sky") || nB.includes("background") || nB.includes("environment")) return;
                const dB = QB.rV().boundingBox.center,
                  IB = aB.TransformCoordinates(dB, QB.getWorldMatrix()),
                  NB = BB.subtract(IB).length();
                NB > 1e3 || (jB = Math.max(jB, NB), zB = Math.min(zB, NB))
              }));
              const QB = jB - zB;
              jB += .1 * QB, zB = Math.max(0, zB - .1 * QB), console.log(`Depth range: min=${zB.toFixed(2)}, max=${jB.toFixed(2)}, range=${QB.toFixed(2)}`), QB < 1 && (jB = zB + 10);
              const nB = new uB("depthMaterial", yB, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: JB
              });
              nB.setVector3("cameraPosition", BB), nB.setFloat("maxDepth", jB), nB.setFloat("minDepth", zB), gB.forEach((BB => {
                LB.set(BB, BB.material), BB.material = nB
              }))
            }
            if ((0, QB.e)(yB.meshes, !0), tB = !0, "glb" === BB && (SB = (0, nB.d)(yB.meshes)), "screenshot" === BB) {
              let BB = `bloxd-screenshot-${kB}x${GB}-${Date.now()}.png`;
              rB ? BB = `bloxd-screenshot-normals-${kB}x${GB}-${Date.now()}.png` : sB && (BB = `bloxd-screenshot-depth-${kB}x${GB}-${Date.now()}.png`), NB(mB, yB.activeCamera, {
                width: kB,
                height: GB
              }, (function(zB) {
                MB(), fetch(zB).then((function(BB) {
                  return BB.blob()
                })).then((function(zB) {
                  (0, IB.downloadBlob)(zB, BB), jB()
                })).catch((function(BB) {
                  console.error("Error processing screenshot:", BB), jB()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), MB(), jB()
              }))
            } else {
              let BB = "ny";
              rB ? BB = "scene-normals" : sB && (BB = "scene-depth"), rB || sB ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: BB
                  } = await Promise.all([zB.e(237), zB.e(236), zB.e(258), zB.e(259), zB.e(256), zB.e(266), zB.e(265), zB.e(244)]).then((() => zB(40350))), {
                    Color3: jB
                  } = await Promise.all([zB.e(237), zB.e(241)]).then((() => zB(37372))), QB = [], nB = [];
                  if (gB.forEach((BB => {
                      const jB = BB.name.toLowerCase(),
                        zB = BB.rV().boundingBox.center,
                        dB = yB.activeCamera.position.subtract(zB).length();
                      jB.includes("sky") || jB.includes("background") || jB.includes("environment") || dB > 1e3 ? nB.push(BB) : QB.push(BB)
                    })), rB) QB.forEach(((zB, QB) => {
                    const nB = zB.getVerticesData("normal");
                    if (nB) {
                      const dB = [];
                      for (let BB = 0; BB < nB.length; BB += 3) {
                        const jB = Math.abs(nB[BB]),
                          zB = Math.abs(nB[BB + 1]),
                          QB = Math.abs(nB[BB + 2]);
                        dB.push(jB, zB, QB, 1)
                      }
                      zB.setVerticesData("color", dB);
                      const IB = new BB(`vertexColorMat_${QB}`, yB);
                      IB.disableLighting = !0, IB.emissiveColor = new jB(1, 1, 1), IB.specularColor = new jB(0, 0, 0), zB.material = IB
                    }
                  })), nB.forEach(((zB, QB) => {
                    const nB = zB.getVerticesData("position");
                    if (nB) {
                      const dB = [],
                        IB = nB.length / 3;
                      for (let BB = 0; BB < IB; BB++) dB.push(1, 1, 1, 1);
                      zB.setVerticesData("color", dB);
                      const NB = new BB(`whiteMat_${QB}`, yB);
                      NB.disableLighting = !0, NB.emissiveColor = new jB(1, 1, 1), NB.specularColor = new jB(0, 0, 0), zB.material = NB
                    }
                  }));
                  else if (sB) {
                    const zB = yB.activeCamera.position;
                    let nB = 0,
                      dB = 1 / 0;
                    QB.forEach((BB => {
                      const jB = BB.rV().boundingBox.center,
                        QB = aB.TransformCoordinates(jB, BB.getWorldMatrix()),
                        IB = zB.subtract(QB).length();
                      nB = Math.max(nB, IB), dB = Math.min(dB, IB)
                    }));
                    const IB = nB - dB;
                    nB += .1 * IB, dB = Math.max(0, dB - .1 * IB), IB < 1 && (nB = dB + 10), gB.forEach(((QB, IB) => {
                      const NB = QB.name.toLowerCase(),
                        uB = QB.rV().boundingBox.center,
                        UB = aB.TransformCoordinates(uB, QB.getWorldMatrix()),
                        pB = zB.subtract(UB).length();
                      if (!(NB.includes("sky") || NB.includes("background") || NB.includes("environment") || pB > 1e3)) {
                        const zB = 1 - Math.min(Math.max((pB - dB) / (nB - dB), 0), 1),
                          NB = new BB(`depthMat_${IB}`, yB);
                        NB.diffuseColor = new jB(zB, zB, zB), NB.specularColor = new jB(0, 0, 0), QB.material = NB
                      }
                    }))
                  }
                })().then((() => Promise.all([zB.e(237), zB.e(236), zB.e(258), zB.e(259), zB.e(256), zB.e(266), zB.e(260), zB.e(265), zB.e(263), zB.e(255), zB.e(268), zB.e(279), zB.e(316), zB.e(249), zB.e(267), zB.e(235)]).then((() => zB(61444))))).then((jB => jB.GLTF2Export.GLBAsync(yB, BB))).then((BB => {
                  MB(), BB.downloadFiles(), jB()
                })).catch((BB => {
                  console.error("Error exporting GLB:", BB), MB(), jB()
                }))
              }), 100) : Promise.all([zB.e(237), zB.e(236), zB.e(258), zB.e(259), zB.e(256), zB.e(266), zB.e(260), zB.e(265), zB.e(263), zB.e(255), zB.e(268), zB.e(279), zB.e(316), zB.e(249), zB.e(267), zB.e(235)]).then((() => zB(61444))).then((zB => {
                zB.GLTF2Export.GLBAsync(yB, BB).then((BB => {
                  MB(), BB.downloadFiles(), jB()
                })).catch((BB => {
                  console.error("Error exporting GLB:", BB), MB(), jB()
                }))
              })).catch((BB => {
                console.error("Error importing serializers:", BB), MB(), jB()
              }))
            }
          })).catch((BB => {
            console.error("Error downloading the scene:", BB), jB()
          }))
        } catch (JB) {
          console.error("Error taking screenshot:", JB), jB()
        }
      }))
    }
    const pB = new class {
      constructor() {
        this.tools = UB.ALL_DEV_TOOLS
      }
      downloadScene(BB, jB) {
        return aB(BB, jB)
      }
      async setAmbientLightIntensity(BB) {
        const {
          Color3: jB
        } = await Promise.all([zB.e(237), zB.e(241)]).then((() => zB(37372)));
        (0, dB.g)().pm.aY().ambientColor = jB.FromArray([BB, BB, BB])
      }
      capturePhoto(BB, jB, zB) {
        return function(BB, jB, zB, QB) {
          return (0, NB.d)(uB(BB), jB, zB, QB)
        }((0, dB.g)(), BB, jB, zB)
      }
    }
  },
  41052: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => NB,
      h: () => uB
    });
    var QB = zB(1794);
    const nB = 33177600,
      dB = 3e4;
    let IB = !1;

    function NB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: NB = 1,
        type: uB = "image/png",
        quality: UB
      } = QB;
      if (!BB.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (IB) return Promise.reject(new Error("A screenshot is already being taken"));
      IB = !0;
      const aB = function(BB, jB, zB) {
        const QB = Math.max(1, BB),
          dB = Math.max(1, jB),
          IB = Math.min(1, zB / Math.max(QB, dB), Math.sqrt(nB / (QB * dB)));
        return {
          width: Math.max(1, Math.floor(QB * IB)),
          height: Math.max(1, Math.floor(dB * IB))
        }
      }(jB, zB, BB.maxTextureSize);
      return BB.resize(aB.width, aB.height, NB * aB.width / Math.max(1, jB)), new Promise(((jB, zB) => {
        let QB, nB = 2,
          NB = null;
        const aB = () => {
          var jB;
          IB = !1, null === (jB = NB) || void 0 === jB || jB(), clearTimeout(QB), BB.restoreSize()
        };
        QB = setTimeout((() => {
          aB(), zB(new Error("No frame was drawn to capture"))
        }), dB), NB = BB.onFrameDrawn((() => {
          if (nB--, nB > 0) return;
          const {
            canvas: QB
          } = BB, dB = {
            width: QB.width,
            height: QB.height
          };
          try {
            QB.toBlob((BB => {
              BB ? jB({
                blob: BB,
                ...dB
              }) : zB(new Error("The canvas gave no image"))
            }), uB, UB)
          } catch (IB) {
            zB(IB)
          } finally {
            aB()
          }
        }))
      }))
    }
    async function uB(BB, jB, zB) {
      try {
        const nB = await NB(BB, jB, zB);
        (0, QB.e)(nB.blob, `bloxd-screenshot-${nB.width}x${nB.height}-${Date.now()}.png`)
      } catch (nB) {
        console.error("Error taking screenshot:", nB)
      }
    }
  },
  37647: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => UB,
      e: () => NB,
      i: () => IB
    });
    var QB = zB(37640),
      nB = zB(37655);
    let dB = 0;

    function IB(BB, jB) {
      const zB = BB;
      zB._noaFaceGroups = null !== jB && void 0 !== jB ? jB : null, zB._noaFaceEpoch = -1, zB._noaFaceMask = -1, zB._noaFaceCount = -1, zB._noaFaceMaterial = null;
      const QB = BB.cL;
      QB && 1 === QB.length && (QB[0].indexStart = 0, QB[0].indexCount = BB.getTotalIndices())
    }

    function NB(BB, jB) {
      if (jB) {
        dB++;
        for (const jB of BB) {
          const BB = jB._noaFaceGroups;
          BB && IB(jB, BB)
        }
      } else dB = Math.max(0, dB - 1)
    }

    function uB(BB, jB, zB) {
      let nB = -1,
        dB = 0;
      for (let IB = 0; IB < QB.d; IB++) {
        const zB = BB[IB],
          NB = BB[IB + 1];
        NB > zB && jB & 1 << QB.c[IB] && (nB < 0 && (nB = zB), dB = NB)
      }
      return nB < 0 ? (zB[0] = 0, zB[1] = 0, 0) : (zB[0] = nB, zB[1] = dB - nB, dB - nB)
    }
    class UB {
      constructor(BB, jB) {
        this.ZJ = BB, this.engine = jB, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(BB, jB) {
        if (!jB) return;
        const zB = jB.getProjectionMatrix().m,
          IB = 0 === dB && 0 === zB[15],
          NB = jB.globalPosition,
          {
            engine: UB
          } = this,
          aB = IB ? (0, nB.d)(zB, UB.getRenderWidth(), UB.getRenderHeight()) : 0;
        NB.x === this.eyeX && NB.y === this.eyeY && NB.z === this.eyeZ && aB === this.focalPx && IB === this.culling || (this.epoch++, this.eyeX = NB.x, this.eyeY = NB.y, this.eyeZ = NB.z, this.focalPx = aB, this.culling = IB);
        const {
          epoch: pB,
          range: rB
        } = this, sB = this.ZJ / 2, JB = sB * Math.sqrt(3), mB = BB.data, yB = BB.length;
        let kB = 0;
        for (let dB = 0; dB < yB; dB++) {
          const BB = mB[dB],
            jB = BB._noaFaceGroups;
          if (jB && (BB._noaFaceEpoch !== pB || BB._noaFaceMaterial !== BB.material)) {
            BB._noaFaceEpoch = pB, BB._noaFaceMaterial = BB.material;
            const zB = BB.cL,
              dB = zB && 1 === zB.length ? zB[0] : null;
            let UB = -1;
            if (IB && dB && (0, QB.x)(BB.material)) {
              const zB = BB.position,
                QB = NB.x - zB.x,
                dB = NB.y - zB.y,
                IB = NB.z - zB.z,
                uB = QB - sB,
                pB = dB - sB,
                rB = IB - sB,
                mB = Math.sqrt(uB * uB + pB * pB + rB * rB) + JB;
              UB = (0, nB.j)(jB, QB, dB, IB, (0, nB.e)(mB, aB))
            }
            if (dB && UB !== BB._noaFaceMask) {
              BB._noaFaceMask = UB;
              let zB = 0,
                nB = jB[QB.d]; - 1 !== UB && (nB = uB(jB, UB, rB), zB = rB[0]), BB._noaFaceCount = nB, dB.indexStart = 6 * zB, dB.indexCount = 6 * nB, dB.setBoundingInfo(BB.rV())
            }
          }
          jB && 0 === BB._noaFaceCount || (mB[kB++] = BB)
        }
        BB.length = kB
      }
    }
  },
  37629: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => uB,
      f: () => NB
    });
    const QB = new WeakSet;
    let nB = 0;
    const dB = new Set;

    function IB(BB, jB) {
      BB._data = jB
    }

    function NB(BB) {
      var jB, zB;
      (null !== (jB = null === (zB = BB.getBuffer()) || void 0 === zB ? void 0 : zB.Ep) && void 0 !== jB ? jB : 0) > 0 && (QB.add(BB), 0 === nB ? IB(BB, null) : dB.add(BB))
    }

    function uB(BB) {
      nB++;
      for (const zB of function(BB) {
          const jB = new Set;
          for (const nB of BB) {
            const BB = nB.geometry;
            for (const nB of Object.values(null !== (zB = null === BB || void 0 === BB ? void 0 : BB.getVertexBuffers()) && void 0 !== zB ? zB : {})) {
              var zB;
              const BB = nB.getWrapperBuffer();
              QB.has(BB) && jB.add(BB)
            }
          }
          return jB
        }(BB)) zB.getData() || UB(zB), dB.add(zB);
      let jB = !0;
      return () => {
        if (jB && (jB = !1, nB--, 0 === nB)) {
          for (const BB of dB) IB(BB, null);
          dB.clear()
        }
      }
    }

    function UB(BB) {
      const jB = BB.getBuffer();
      if (!jB || !(jB.Ep > 0)) return;
      const zB = BB._engine,
        QB = new Uint8Array(jB.Ep);
      zB.bindArrayBuffer(jB), zB._gl.getBufferSubData(zB._gl.ARRAY_BUFFER, 0, QB), zB._resetVertexBufferBinding(), IB(BB, QB)
    }
  },
  37640: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => IB,
      d: () => dB,
      h: () => uB,
      l: () => QB,
      p: () => NB,
      t: () => nB,
      x: () => UB
    });
    const QB = 6,
      nB = [0, 2, 4, 1, 3, 5, 0, 2],
      dB = 6,
      IB = [1, 0, 3, 2, 5, 4];
    for (let aB = dB; aB < nB.length; aB++)
      if (nB[aB] !== nB[aB - dB]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const NB = nB.length + 1,
      uB = (() => {
        const BB = [];
        for (let jB = 0; jB < dB; jB++) BB[nB[jB]] = jB;
        return BB
      })();

    function UB(BB) {
      return !!BB && BB.backFaceCulling && (0 === BB.transparencyMode || 1 === BB.transparencyMode)
    }
  },
  37655: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => NB,
      e: () => uB,
      f: () => aB,
      j: () => UB,
      k: () => JB
    });
    var QB = zB(37640);
    const nB = 1 / 16,
      dB = 1 / 64,
      IB = 2048;
    QB.l;

    function NB(BB, jB, zB) {
      return Math.min(Math.abs(BB[0] * jB), Math.abs(BB[5] * zB)) / 2
    }

    function uB(BB, jB) {
      return nB + dB * BB * BB / jB
    }

    function UB(BB, jB, zB, nB, dB) {
      const IB = QB.p;
      return aB(BB[IB], BB[IB + 1], BB[IB + 2], BB[IB + 3], BB[IB + 4], BB[IB + 5], jB, zB, nB, dB)
    }

    function aB(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB) {
      return (IB <= BB - UB ? 0 : 1) | (IB >= jB + UB ? 0 : 2) | (NB <= zB - UB ? 0 : 4) | (NB >= QB + UB ? 0 : 8) | (uB <= nB - UB ? 0 : 16) | (uB >= dB + UB ? 0 : 32)
    }
    const pB = (() => {
        const BB = [];
        for (let jB = 0; jB < QB.t.length; jB++) {
          let zB = 0;
          for (let nB = jB + 1; nB <= QB.t.length; nB++) {
            const dB = 1 << QB.t[nB - 1];
            if (zB & dB) break;
            zB |= dB, BB.push({
              start: jB,
              end: nB,
              Mz: zB
            })
          }
        }
        return BB
      })(),
      rB = [];

    function sB(BB, jB) {
      const zB = QB.h[jB];
      return BB[zB + 1] - BB[zB]
    }

    function JB(BB, jB, zB) {
      let nB = 0;
      for (let IB = 0; IB < QB.l; IB++) sB(BB, IB) > 0 && (nB |= 1 << IB);
      if (0 === (jB &= nB)) return 0;
      if (jB === nB) return zB[0] = 0, zB[1] = BB[QB.d], 1;
      let dB = null,
        NB = 1 / 0;
      for (const UB of function(BB) {
          let jB = rB[BB];
          if (jB) return jB;
          const zB = new Map,
            QB = (BB, jB) => {
              const QB = 4 * BB + jB.length / 2;
              zB.has(QB) || zB.set(QB, {
                Mz: BB,
                windows: jB
              })
            };
          for (const dB of pB)
            if ((dB.Mz & BB) === BB && QB(dB.Mz, [dB.start, dB.end]), 0 !== (dB.Mz & BB))
              for (const jB of pB) jB.start < dB.end || 0 !== (dB.Mz & jB.Mz) || 0 === (jB.Mz & BB) || ((dB.Mz | jB.Mz) & BB) !== BB || QB(dB.Mz | jB.Mz, [dB.start, dB.end, jB.start, jB.end]);
          const nB = [...zB.values()];
          return jB = nB.filter((BB => !nB.some((jB => jB !== BB && (jB.Mz & BB.Mz) === jB.Mz && jB.windows.length <= BB.windows.length)))), rB[BB] = jB, jB
        }(jB)) {
        let zB = (UB.windows.length / 2 - 1) * IB;
        const uB = UB.Mz & ~jB & nB;
        for (let jB = 0; jB < QB.l; jB++) uB & 1 << jB && (zB += sB(BB, jB));
        zB < NB && (dB = UB, NB = zB)
      }
      const uB = dB.windows;
      for (let QB = 0; QB < uB.length; QB += 2) {
        const jB = BB[uB[QB]];
        zB[QB] = jB, zB[QB + 1] = BB[uB[QB + 1]] - jB
      }
      return uB.length / 2
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);