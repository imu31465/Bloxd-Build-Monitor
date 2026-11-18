export const id = 218;
export const ids = [218];
export const modules = {
  39796: (BB, TB, dB) => {
    dB.d(TB, {
      noaDevTools: () => kB
    });
    var VB = dB(36412),
      yB = dB(36399),
      pB = dB(2385),
      lB = dB(1596);

    function JB(BB) {
      const {
        yu: TB
      } = BB, dB = TB.engine, VB = {
        width: dB.getRenderWidth(),
        height: dB.getRenderHeight()
      };
      return {
        canvas: dB.getRenderingCanvas(),
        maxTextureSize: dB.getCaps().maxTextureSize,
        drawing: () => !BB.Wm,
        resize: (BB, TB) => {
          dB.setSize(BB, TB)
        },
        restoreSize: () => {
          dB.setSize(VB.width, VB.height), TB.resize()
        },
        onFrameDrawn: TB => (BB.on("afterRender", TB), () => {
          BB.off("afterRender", TB)
        })
      }
    }
    var YB = dB(39774),
      gB = dB(8520);

    function oB(BB, TB) {
      let {
        width: gB,
        height: oB,
        colouring: kB
      } = TB;
      const LB = "normals" === kB,
        OB = "depth" === kB;
      return new Promise((TB => {
        try {
          const DB = (0, pB.d)();
          if (DB.yu.pu) return "screenshot" !== BB || null !== kB ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void TB()) : void(0, YB.d)(JB(DB), gB, oB).finally(TB);
          const uB = DB.yu.engine,
            HB = DB.yu.jU(),
            EB = gB,
            vB = oB;
          Promise.all([Promise.all([dB.e(234), dB.e(235), dB.e(216)]).then((() => dB(59711))), Promise.all([dB.e(215), dB.e(214), dB.e(234), dB.e(235), dB.e(232), dB.e(236), dB.e(239), dB.e(291), dB.e(219)]).then((() => dB(59713))), Promise.all([dB.e(215), dB.e(214), dB.e(234), dB.e(235), dB.e(232), dB.e(242), dB.e(236), dB.e(244), dB.e(221)]).then((() => dB(59715))), dB.e(334).then((() => dB(59722))), Promise.all([dB.e(214), dB.e(210)]).then((() => dB(36119))), dB.e(233).then((() => dB(59725))), dB.e(209).then((() => dB(59734)))]).then((pB => {
            const {
              CreateScreenshotUsingRenderTarget: JB
            } = pB[1], {
              ShaderMaterial: YB
            } = pB[2], {
              ShaderLanguage: gB
            } = pB[3], {
              RD: oB
            } = pB[4], {
              registerDevtoolsShader: kB
            } = pB[6], DB = gB.GLSL, mB = new Map, iB = HB.meshes.filter((BB => BB.material));
            let NB = !1,
              tB = null;

            function fB() {
              var BB;
              NB && (NB = !1, (0, VB.e)(HB.meshes, !1)), null === (BB = tB) || void 0 === BB || BB(), tB = null, iB.forEach((BB => {
                const TB = mB.get(BB);
                TB && (BB.material = TB)
              }))
            }
            if (LB) {
              const BB = [],
                TB = [];
              iB.forEach((dB => {
                const VB = dB.name.toLowerCase(),
                  yB = dB.IK().boundingBox.center,
                  pB = HB.activeCamera.position.subtract(yB).length();
                VB.includes("sky") || VB.includes("background") || VB.includes("environment") || pB > 1e3 ? TB.push(dB) : BB.push(dB)
              })), kB("devtoolsNormal", DB);
              const dB = new YB("normalMaterial", HB, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: DB
              });
              kB("devtoolsWhite", DB);
              const VB = new YB("whiteMaterial", HB, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: DB
              });
              BB.forEach((BB => {
                mB.set(BB, BB.material), BB.material = dB
              })), TB.forEach((BB => {
                mB.set(BB, BB.material), BB.material = VB
              }))
            } else if (OB) {
              kB("devtoolsDepth", DB);
              const BB = HB.activeCamera.position;
              let TB = 0,
                dB = 1 / 0;
              iB.forEach((VB => {
                const yB = VB.name.toLowerCase();
                if (yB.includes("sky") || yB.includes("background") || yB.includes("environment")) return;
                const pB = VB.IK().boundingBox.center,
                  lB = oB.TransformCoordinates(pB, VB.getWorldMatrix()),
                  JB = BB.subtract(lB).length();
                JB > 1e3 || (TB = Math.max(TB, JB), dB = Math.min(dB, JB))
              }));
              const VB = TB - dB;
              TB += .1 * VB, dB = Math.max(0, dB - .1 * VB), console.log(`Depth range: min=${dB.toFixed(2)}, max=${TB.toFixed(2)}, range=${VB.toFixed(2)}`), VB < 1 && (TB = dB + 10);
              const yB = new YB("depthMaterial", HB, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: DB
              });
              yB.setVector3("cameraPosition", BB), yB.setFloat("maxDepth", TB), yB.setFloat("minDepth", dB), iB.forEach((BB => {
                mB.set(BB, BB.material), BB.material = yB
              }))
            }
            if ((0, VB.e)(HB.meshes, !0), NB = !0, "glb" === BB && (tB = (0, yB.d)(HB.meshes)), "screenshot" === BB) {
              let BB = `bloxd-screenshot-${EB}x${vB}-${Date.now()}.png`;
              LB ? BB = `bloxd-screenshot-normals-${EB}x${vB}-${Date.now()}.png` : OB && (BB = `bloxd-screenshot-depth-${EB}x${vB}-${Date.now()}.png`), JB(uB, HB.activeCamera, {
                width: EB,
                height: vB
              }, (function(dB) {
                fB(), fetch(dB).then((function(BB) {
                  return BB.blob()
                })).then((function(dB) {
                  (0, lB.downloadBlob)(dB, BB), TB()
                })).catch((function(BB) {
                  console.error("Error processing screenshot:", BB), TB()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), fB(), TB()
              }))
            } else {
              let BB = "Gu";
              LB ? BB = "scene-normals" : OB && (BB = "scene-depth"), LB || OB ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: BB
                  } = await Promise.all([dB.e(215), dB.e(214), dB.e(234), dB.e(235), dB.e(232), dB.e(242), dB.e(241), dB.e(220)]).then((() => dB(39019))), {
                    Color3: TB
                  } = await Promise.all([dB.e(215), dB.e(217)]).then((() => dB(36180))), VB = [], yB = [];
                  if (iB.forEach((BB => {
                      const TB = BB.name.toLowerCase(),
                        dB = BB.IK().boundingBox.center,
                        pB = HB.activeCamera.position.subtract(dB).length();
                      TB.includes("sky") || TB.includes("background") || TB.includes("environment") || pB > 1e3 ? yB.push(BB) : VB.push(BB)
                    })), LB) VB.forEach(((dB, VB) => {
                    const yB = dB.getVerticesData("normal");
                    if (yB) {
                      const pB = [];
                      for (let BB = 0; BB < yB.length; BB += 3) {
                        const TB = Math.abs(yB[BB]),
                          dB = Math.abs(yB[BB + 1]),
                          VB = Math.abs(yB[BB + 2]);
                        pB.push(TB, dB, VB, 1)
                      }
                      dB.setVerticesData("color", pB);
                      const lB = new BB(`vertexColorMat_${VB}`, HB);
                      lB.disableLighting = !0, lB.emissiveColor = new TB(1, 1, 1), lB.specularColor = new TB(0, 0, 0), dB.material = lB
                    }
                  })), yB.forEach(((dB, VB) => {
                    const yB = dB.getVerticesData("position");
                    if (yB) {
                      const pB = [],
                        lB = yB.length / 3;
                      for (let BB = 0; BB < lB; BB++) pB.push(1, 1, 1, 1);
                      dB.setVerticesData("color", pB);
                      const JB = new BB(`whiteMat_${VB}`, HB);
                      JB.disableLighting = !0, JB.emissiveColor = new TB(1, 1, 1), JB.specularColor = new TB(0, 0, 0), dB.material = JB
                    }
                  }));
                  else if (OB) {
                    const dB = HB.activeCamera.position;
                    let yB = 0,
                      pB = 1 / 0;
                    VB.forEach((BB => {
                      const TB = BB.IK().boundingBox.center,
                        VB = oB.TransformCoordinates(TB, BB.getWorldMatrix()),
                        lB = dB.subtract(VB).length();
                      yB = Math.max(yB, lB), pB = Math.min(pB, lB)
                    }));
                    const lB = yB - pB;
                    yB += .1 * lB, pB = Math.max(0, pB - .1 * lB), lB < 1 && (yB = pB + 10), iB.forEach(((VB, lB) => {
                      const JB = VB.name.toLowerCase(),
                        YB = VB.IK().boundingBox.center,
                        gB = oB.TransformCoordinates(YB, VB.getWorldMatrix()),
                        kB = dB.subtract(gB).length();
                      if (!(JB.includes("sky") || JB.includes("background") || JB.includes("environment") || kB > 1e3)) {
                        const dB = 1 - Math.min(Math.max((kB - pB) / (yB - pB), 0), 1),
                          JB = new BB(`depthMat_${lB}`, HB);
                        JB.diffuseColor = new TB(dB, dB, dB), JB.specularColor = new TB(0, 0, 0), VB.material = JB
                      }
                    }))
                  }
                })().then((() => Promise.all([dB.e(215), dB.e(214), dB.e(234), dB.e(235), dB.e(232), dB.e(242), dB.e(236), dB.e(241), dB.e(239), dB.e(231), dB.e(244), dB.e(271), dB.e(291), dB.e(225), dB.e(243), dB.e(213)]).then((() => dB(59741))))).then((TB => TB.GLTF2Export.GLBAsync(HB, BB))).then((BB => {
                  fB(), BB.downloadFiles(), TB()
                })).catch((BB => {
                  console.error("Error exporting GLB:", BB), fB(), TB()
                }))
              }), 100) : Promise.all([dB.e(215), dB.e(214), dB.e(234), dB.e(235), dB.e(232), dB.e(242), dB.e(236), dB.e(241), dB.e(239), dB.e(231), dB.e(244), dB.e(271), dB.e(291), dB.e(225), dB.e(243), dB.e(213)]).then((() => dB(59741))).then((dB => {
                dB.GLTF2Export.GLBAsync(HB, BB).then((BB => {
                  fB(), BB.downloadFiles(), TB()
                })).catch((BB => {
                  console.error("Error exporting GLB:", BB), fB(), TB()
                }))
              })).catch((BB => {
                console.error("Error importing serializers:", BB), fB(), TB()
              }))
            }
          })).catch((BB => {
            console.error("Error downloading the scene:", BB), TB()
          }))
        } catch (DB) {
          console.error("Error taking screenshot:", DB), TB()
        }
      }))
    }
    const kB = new class {
      constructor() {
        this.tools = gB.ALL_DEV_TOOLS
      }
      downloadScene(BB, TB) {
        return oB(BB, TB)
      }
      async setAmbientLightIntensity(BB) {
        const {
          Color3: TB
        } = await Promise.all([dB.e(215), dB.e(217)]).then((() => dB(36180)));
        (0, pB.d)().yu.jU().ambientColor = TB.FromArray([BB, BB, BB])
      }
    }
  },
  39774: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => YB
    });
    var VB = dB(1612);
    const yB = 33177600,
      pB = 3e4;
    let lB = !1;

    function JB(BB, TB, dB) {
      if (!BB.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (lB) return Promise.reject(new Error("A screenshot is already being taken"));
      lB = !0;
      const VB = function(BB, TB, dB) {
        const VB = Math.max(1, BB),
          pB = Math.max(1, TB),
          lB = Math.min(1, dB / Math.max(VB, pB), Math.sqrt(yB / (VB * pB)));
        return {
          width: Math.max(1, Math.floor(VB * lB)),
          height: Math.max(1, Math.floor(pB * lB))
        }
      }(TB, dB, BB.maxTextureSize);
      return BB.resize(VB.width, VB.height), new Promise(((TB, dB) => {
        let VB, yB = 2,
          JB = null;
        const YB = () => {
          var TB;
          lB = !1, null === (TB = JB) || void 0 === TB || TB(), clearTimeout(VB), BB.restoreSize()
        };
        VB = setTimeout((() => {
          YB(), dB(new Error("No frame was drawn to capture"))
        }), pB), JB = BB.onFrameDrawn((() => {
          if (yB--, yB > 0) return;
          const {
            canvas: VB
          } = BB, pB = {
            width: VB.width,
            height: VB.height
          };
          try {
            VB.toBlob((BB => {
              BB ? TB({
                blob: BB,
                ...pB
              }) : dB(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (lB) {
            dB(lB)
          } finally {
            YB()
          }
        }))
      }))
    }
    async function YB(BB, TB, dB) {
      try {
        const yB = await JB(BB, TB, dB);
        (0, VB.c)(yB.blob, `bloxd-screenshot-${yB.width}x${yB.height}-${Date.now()}.png`)
      } catch (yB) {
        console.error("Error taking screenshot:", yB)
      }
    }
  },
  36412: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => gB,
      e: () => JB,
      g: () => lB
    });
    var VB = dB(36409),
      yB = dB(36420);
    let pB = 0;

    function lB(BB, TB) {
      const dB = BB;
      dB._noaFaceGroups = null !== TB && void 0 !== TB ? TB : null, dB._noaFaceEpoch = -1, dB._noaFaceMask = -1, dB._noaFaceCount = -1, dB._noaFaceMaterial = null;
      const VB = BB.oN;
      VB && 1 === VB.length && (VB[0].indexStart = 0, VB[0].indexCount = BB.getTotalIndices())
    }

    function JB(BB, TB) {
      if (TB) {
        pB++;
        for (const TB of BB) {
          const BB = TB._noaFaceGroups;
          BB && lB(TB, BB)
        }
      } else pB = Math.max(0, pB - 1)
    }

    function YB(BB, TB, dB) {
      let yB = -1,
        pB = 0;
      for (let lB = 0; lB < VB.f; lB++) {
        const dB = BB[lB],
          JB = BB[lB + 1];
        JB > dB && TB & 1 << VB.d[lB] && (yB < 0 && (yB = dB), pB = JB)
      }
      return yB < 0 ? (dB[0] = 0, dB[1] = 0, 0) : (dB[0] = yB, dB[1] = pB - yB, pB - yB)
    }
    class gB {
      constructor(BB, TB) {
        this.UD = BB, this.engine = TB, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(BB, TB) {
        if (!TB) return;
        const dB = TB.getProjectionMatrix().m,
          lB = 0 === pB && 0 === dB[15],
          JB = TB.globalPosition,
          {
            engine: gB
          } = this,
          oB = lB ? (0, yB.c)(dB, gB.getRenderWidth(), gB.getRenderHeight()) : 0;
        JB.x === this.eyeX && JB.y === this.eyeY && JB.z === this.eyeZ && oB === this.focalPx && lB === this.culling || (this.epoch++, this.eyeX = JB.x, this.eyeY = JB.y, this.eyeZ = JB.z, this.focalPx = oB, this.culling = lB);
        const {
          epoch: kB,
          range: LB
        } = this, OB = this.UD / 2, DB = OB * Math.sqrt(3), uB = BB.data, HB = BB.length;
        let EB = 0;
        for (let pB = 0; pB < HB; pB++) {
          const BB = uB[pB],
            TB = BB._noaFaceGroups;
          if (TB && (BB._noaFaceEpoch !== kB || BB._noaFaceMaterial !== BB.material)) {
            BB._noaFaceEpoch = kB, BB._noaFaceMaterial = BB.material;
            const dB = BB.oN,
              pB = dB && 1 === dB.length ? dB[0] : null;
            let gB = -1;
            if (lB && pB && (0, VB.q)(BB.material)) {
              const dB = BB.position,
                VB = JB.x - dB.x,
                pB = JB.y - dB.y,
                lB = JB.z - dB.z,
                YB = VB - OB,
                kB = pB - OB,
                LB = lB - OB,
                uB = Math.sqrt(YB * YB + kB * kB + LB * LB) + DB;
              gB = (0, yB.l)(TB, VB, pB, lB, (0, yB.g)(uB, oB))
            }
            if (pB && gB !== BB._noaFaceMask) {
              BB._noaFaceMask = gB;
              let dB = 0,
                yB = TB[VB.f]; - 1 !== gB && (yB = YB(TB, gB, LB), dB = LB[0]), BB._noaFaceCount = yB, pB.indexStart = 6 * dB, pB.indexCount = 6 * yB, pB.setBoundingInfo(BB.IK())
            }
          }
          TB && 0 === BB._noaFaceCount || (uB[EB++] = BB)
        }
        BB.length = EB
      }
    }
  },
  36399: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => YB,
      g: () => JB
    });
    const VB = new WeakSet;
    let yB = 0;
    const pB = new Set;

    function lB(BB, TB) {
      BB._data = TB
    }

    function JB(BB) {
      var TB, dB;
      (null !== (TB = null === (dB = BB.getBuffer()) || void 0 === dB ? void 0 : dB.Kk) && void 0 !== TB ? TB : 0) > 0 && (VB.add(BB), 0 === yB ? lB(BB, null) : pB.add(BB))
    }

    function YB(BB) {
      yB++;
      for (const dB of function(BB) {
          const TB = new Set;
          for (const yB of BB) {
            const BB = yB.geometry;
            for (const yB of Object.values(null !== (dB = null === BB || void 0 === BB ? void 0 : BB.getVertexBuffers()) && void 0 !== dB ? dB : {})) {
              var dB;
              const BB = yB.getWrapperBuffer();
              VB.has(BB) && TB.add(BB)
            }
          }
          return TB
        }(BB)) dB.getData() || gB(dB), pB.add(dB);
      let TB = !0;
      return () => {
        if (TB && (TB = !1, yB--, 0 === yB)) {
          for (const BB of pB) lB(BB, null);
          pB.clear()
        }
      }
    }

    function gB(BB) {
      const TB = BB.getBuffer();
      if (!TB || !(TB.Kk > 0)) return;
      const dB = BB._engine,
        VB = new Uint8Array(TB.Kk);
      dB.bindArrayBuffer(TB), dB._gl.getBufferSubData(dB._gl.ARRAY_BUFFER, 0, VB), dB._resetVertexBufferBinding(), lB(BB, VB)
    }
  },
  36409: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => lB,
      f: () => pB,
      h: () => YB,
      l: () => VB,
      m: () => JB,
      p: () => yB,
      q: () => gB
    });
    const VB = 6,
      yB = [0, 2, 4, 1, 3, 5, 0, 2],
      pB = 6,
      lB = [1, 0, 3, 2, 5, 4];
    for (let oB = pB; oB < yB.length; oB++)
      if (yB[oB] !== yB[oB - pB]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const JB = yB.length + 1,
      YB = (() => {
        const BB = [];
        for (let TB = 0; TB < pB; TB++) BB[yB[TB]] = TB;
        return BB
      })();

    function gB(BB) {
      return !!BB && BB.backFaceCulling && (0 === BB.transparencyMode || 1 === BB.transparencyMode)
    }
  },
  36420: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => JB,
      g: () => YB,
      j: () => oB,
      l: () => gB,
      n: () => DB
    });
    var VB = dB(36409);
    const yB = 1 / 16,
      pB = 1 / 64,
      lB = 2048;
    VB.l;

    function JB(BB, TB, dB) {
      return Math.min(Math.abs(BB[0] * TB), Math.abs(BB[5] * dB)) / 2
    }

    function YB(BB, TB) {
      return yB + pB * BB * BB / TB
    }

    function gB(BB, TB, dB, yB, pB) {
      const lB = VB.m;
      return oB(BB[lB], BB[lB + 1], BB[lB + 2], BB[lB + 3], BB[lB + 4], BB[lB + 5], TB, dB, yB, pB)
    }

    function oB(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB) {
      return (lB <= BB - gB ? 0 : 1) | (lB >= TB + gB ? 0 : 2) | (JB <= dB - gB ? 0 : 4) | (JB >= VB + gB ? 0 : 8) | (YB <= yB - gB ? 0 : 16) | (YB >= pB + gB ? 0 : 32)
    }
    const kB = (() => {
        const BB = [];
        for (let TB = 0; TB < VB.p.length; TB++) {
          let dB = 0;
          for (let yB = TB + 1; yB <= VB.p.length; yB++) {
            const pB = 1 << VB.p[yB - 1];
            if (dB & pB) break;
            dB |= pB, BB.push({
              start: TB,
              end: yB,
              EB: dB
            })
          }
        }
        return BB
      })(),
      LB = [];

    function OB(BB, TB) {
      const dB = VB.h[TB];
      return BB[dB + 1] - BB[dB]
    }

    function DB(BB, TB, dB) {
      let yB = 0;
      for (let lB = 0; lB < VB.l; lB++) OB(BB, lB) > 0 && (yB |= 1 << lB);
      if (0 === (TB &= yB)) return 0;
      if (TB === yB) return dB[0] = 0, dB[1] = BB[VB.f], 1;
      let pB = null,
        JB = 1 / 0;
      for (const gB of function(BB) {
          let TB = LB[BB];
          if (TB) return TB;
          const dB = new Map,
            VB = (BB, TB) => {
              const VB = 4 * BB + TB.length / 2;
              dB.has(VB) || dB.set(VB, {
                EB: BB,
                windows: TB
              })
            };
          for (const pB of kB)
            if ((pB.EB & BB) === BB && VB(pB.EB, [pB.start, pB.end]), 0 !== (pB.EB & BB))
              for (const TB of kB) TB.start < pB.end || 0 !== (pB.EB & TB.EB) || 0 === (TB.EB & BB) || ((pB.EB | TB.EB) & BB) !== BB || VB(pB.EB | TB.EB, [pB.start, pB.end, TB.start, TB.end]);
          const yB = [...dB.values()];
          return TB = yB.filter((BB => !yB.some((TB => TB !== BB && (TB.EB & BB.EB) === TB.EB && TB.windows.length <= BB.windows.length)))), LB[BB] = TB, TB
        }(TB)) {
        let dB = (gB.windows.length / 2 - 1) * lB;
        const YB = gB.EB & ~TB & yB;
        for (let TB = 0; TB < VB.l; TB++) YB & 1 << TB && (dB += OB(BB, TB));
        dB < JB && (pB = gB, JB = dB)
      }
      const YB = pB.windows;
      for (let VB = 0; VB < YB.length; VB += 2) {
        const TB = BB[YB[VB]];
        dB[VB] = TB, dB[VB + 1] = BB[YB[VB + 1]] - TB
      }
      return YB.length / 2
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);