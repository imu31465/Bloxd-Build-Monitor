export const id = 242;
export const ids = [242];
export const modules = {
  41093: (BB, IB, ZB) => {
    ZB.d(IB, {
      noaDevTools: () => hB
    });
    var TB = ZB(37613),
      JB = ZB(37594),
      oB = ZB(2912),
      GB = ZB(1805),
      vB = ZB(40999);

    function kB(BB) {
      const {
        Ig: IB
      } = BB, ZB = IB.engine, TB = {
        width: ZB.getRenderWidth(),
        height: ZB.getRenderHeight()
      };
      return {
        canvas: ZB.getRenderingCanvas(),
        maxTextureSize: ZB.getCaps().maxTextureSize,
        drawing: () => !BB.iW,
        resize: (BB, IB) => {
          ZB.setSize(BB, IB)
        },
        restoreSize: () => {
          ZB.setSize(TB.width, TB.height), IB.resize()
        },
        onFrameDrawn: IB => (BB.on("afterRender", IB), () => {
          BB.off("afterRender", IB)
        })
      }
    }
    var cB = ZB(34060);

    function nB(BB, IB) {
      let {
        width: cB,
        height: nB,
        colouring: hB
      } = IB;
      const zB = "normals" === hB,
        FB = "depth" === hB;
      return new Promise((IB => {
        try {
          const NB = (0, oB.h)();
          if (NB.Ig.Zg) return "screenshot" !== BB || null !== hB ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void IB()) : void(0, vB.h)(kB(NB), cB, nB).finally(IB);
          const gB = NB.Ig.engine,
            qB = NB.Ig.JR(),
            yB = cB,
            UB = nB;
          Promise.all([Promise.all([ZB.e(258), ZB.e(259), ZB.e(238)]).then((() => ZB(61291))), Promise.all([ZB.e(237), ZB.e(236), ZB.e(258), ZB.e(259), ZB.e(256), ZB.e(260), ZB.e(263), ZB.e(316), ZB.e(243)]).then((() => ZB(61297))), Promise.all([ZB.e(237), ZB.e(236), ZB.e(258), ZB.e(259), ZB.e(256), ZB.e(266), ZB.e(260), ZB.e(268), ZB.e(245)]).then((() => ZB(61306))), ZB.e(357).then((() => ZB(61309))), Promise.all([ZB.e(236), ZB.e(232)]).then((() => ZB(37113))), ZB.e(257).then((() => ZB(61317))), ZB.e(240).then((() => ZB(61319)))]).then((oB => {
            const {
              CreateScreenshotUsingRenderTarget: vB
            } = oB[1], {
              ShaderMaterial: kB
            } = oB[2], {
              ShaderLanguage: cB
            } = oB[3], {
              rN: nB
            } = oB[4], {
              registerDevtoolsShader: hB
            } = oB[6], NB = cB.GLSL, WB = new Map, dB = qB.meshes.filter((BB => BB.material));
            let CB = !1,
              QB = null;

            function sB() {
              var BB;
              CB && (CB = !1, (0, TB.h)(qB.meshes, !1)), null === (BB = QB) || void 0 === BB || BB(), QB = null, dB.forEach((BB => {
                const IB = WB.get(BB);
                IB && (BB.material = IB)
              }))
            }
            if (zB) {
              const BB = [],
                IB = [];
              dB.forEach((ZB => {
                const TB = ZB.name.toLowerCase(),
                  JB = ZB.qm().boundingBox.center,
                  oB = qB.activeCamera.position.subtract(JB).length();
                TB.includes("sky") || TB.includes("background") || TB.includes("environment") || oB > 1e3 ? IB.push(ZB) : BB.push(ZB)
              })), hB("devtoolsNormal", NB);
              const ZB = new kB("normalMaterial", qB, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: NB
              });
              hB("devtoolsWhite", NB);
              const TB = new kB("whiteMaterial", qB, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: NB
              });
              BB.forEach((BB => {
                WB.set(BB, BB.material), BB.material = ZB
              })), IB.forEach((BB => {
                WB.set(BB, BB.material), BB.material = TB
              }))
            } else if (FB) {
              hB("devtoolsDepth", NB);
              const BB = qB.activeCamera.position;
              let IB = 0,
                ZB = 1 / 0;
              dB.forEach((TB => {
                const JB = TB.name.toLowerCase();
                if (JB.includes("sky") || JB.includes("background") || JB.includes("environment")) return;
                const oB = TB.qm().boundingBox.center,
                  GB = nB.TransformCoordinates(oB, TB.getWorldMatrix()),
                  vB = BB.subtract(GB).length();
                vB > 1e3 || (IB = Math.max(IB, vB), ZB = Math.min(ZB, vB))
              }));
              const TB = IB - ZB;
              IB += .1 * TB, ZB = Math.max(0, ZB - .1 * TB), console.log(`Depth range: min=${ZB.toFixed(2)}, max=${IB.toFixed(2)}, range=${TB.toFixed(2)}`), TB < 1 && (IB = ZB + 10);
              const JB = new kB("depthMaterial", qB, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: NB
              });
              JB.setVector3("cameraPosition", BB), JB.setFloat("maxDepth", IB), JB.setFloat("minDepth", ZB), dB.forEach((BB => {
                WB.set(BB, BB.material), BB.material = JB
              }))
            }
            if ((0, TB.h)(qB.meshes, !0), CB = !0, "glb" === BB && (QB = (0, JB.b)(qB.meshes)), "screenshot" === BB) {
              let BB = `bloxd-screenshot-${yB}x${UB}-${Date.now()}.png`;
              zB ? BB = `bloxd-screenshot-normals-${yB}x${UB}-${Date.now()}.png` : FB && (BB = `bloxd-screenshot-depth-${yB}x${UB}-${Date.now()}.png`), vB(gB, qB.activeCamera, {
                width: yB,
                height: UB
              }, (function(ZB) {
                sB(), fetch(ZB).then((function(BB) {
                  return BB.blob()
                })).then((function(ZB) {
                  (0, GB.downloadBlob)(ZB, BB), IB()
                })).catch((function(BB) {
                  console.error("Error processing screenshot:", BB), IB()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), sB(), IB()
              }))
            } else {
              let BB = "lg";
              zB ? BB = "scene-normals" : FB && (BB = "scene-depth"), zB || FB ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: BB
                  } = await Promise.all([ZB.e(237), ZB.e(236), ZB.e(258), ZB.e(259), ZB.e(256), ZB.e(266), ZB.e(265), ZB.e(244)]).then((() => ZB(40318))), {
                    Color3: IB
                  } = await Promise.all([ZB.e(237), ZB.e(241)]).then((() => ZB(37304))), TB = [], JB = [];
                  if (dB.forEach((BB => {
                      const IB = BB.name.toLowerCase(),
                        ZB = BB.qm().boundingBox.center,
                        oB = qB.activeCamera.position.subtract(ZB).length();
                      IB.includes("sky") || IB.includes("background") || IB.includes("environment") || oB > 1e3 ? JB.push(BB) : TB.push(BB)
                    })), zB) TB.forEach(((ZB, TB) => {
                    const JB = ZB.getVerticesData("normal");
                    if (JB) {
                      const oB = [];
                      for (let BB = 0; BB < JB.length; BB += 3) {
                        const IB = Math.abs(JB[BB]),
                          ZB = Math.abs(JB[BB + 1]),
                          TB = Math.abs(JB[BB + 2]);
                        oB.push(IB, ZB, TB, 1)
                      }
                      ZB.setVerticesData("color", oB);
                      const GB = new BB(`vertexColorMat_${TB}`, qB);
                      GB.disableLighting = !0, GB.emissiveColor = new IB(1, 1, 1), GB.specularColor = new IB(0, 0, 0), ZB.material = GB
                    }
                  })), JB.forEach(((ZB, TB) => {
                    const JB = ZB.getVerticesData("position");
                    if (JB) {
                      const oB = [],
                        GB = JB.length / 3;
                      for (let BB = 0; BB < GB; BB++) oB.push(1, 1, 1, 1);
                      ZB.setVerticesData("color", oB);
                      const vB = new BB(`whiteMat_${TB}`, qB);
                      vB.disableLighting = !0, vB.emissiveColor = new IB(1, 1, 1), vB.specularColor = new IB(0, 0, 0), ZB.material = vB
                    }
                  }));
                  else if (FB) {
                    const ZB = qB.activeCamera.position;
                    let JB = 0,
                      oB = 1 / 0;
                    TB.forEach((BB => {
                      const IB = BB.qm().boundingBox.center,
                        TB = nB.TransformCoordinates(IB, BB.getWorldMatrix()),
                        GB = ZB.subtract(TB).length();
                      JB = Math.max(JB, GB), oB = Math.min(oB, GB)
                    }));
                    const GB = JB - oB;
                    JB += .1 * GB, oB = Math.max(0, oB - .1 * GB), GB < 1 && (JB = oB + 10), dB.forEach(((TB, GB) => {
                      const vB = TB.name.toLowerCase(),
                        kB = TB.qm().boundingBox.center,
                        cB = nB.TransformCoordinates(kB, TB.getWorldMatrix()),
                        hB = ZB.subtract(cB).length();
                      if (!(vB.includes("sky") || vB.includes("background") || vB.includes("environment") || hB > 1e3)) {
                        const ZB = 1 - Math.min(Math.max((hB - oB) / (JB - oB), 0), 1),
                          vB = new BB(`depthMat_${GB}`, qB);
                        vB.diffuseColor = new IB(ZB, ZB, ZB), vB.specularColor = new IB(0, 0, 0), TB.material = vB
                      }
                    }))
                  }
                })().then((() => Promise.all([ZB.e(237), ZB.e(236), ZB.e(258), ZB.e(259), ZB.e(256), ZB.e(266), ZB.e(260), ZB.e(265), ZB.e(263), ZB.e(255), ZB.e(268), ZB.e(279), ZB.e(316), ZB.e(249), ZB.e(267), ZB.e(235)]).then((() => ZB(61321))))).then((IB => IB.GLTF2Export.GLBAsync(qB, BB))).then((BB => {
                  sB(), BB.downloadFiles(), IB()
                })).catch((BB => {
                  console.error("Error exporting GLB:", BB), sB(), IB()
                }))
              }), 100) : Promise.all([ZB.e(237), ZB.e(236), ZB.e(258), ZB.e(259), ZB.e(256), ZB.e(266), ZB.e(260), ZB.e(265), ZB.e(263), ZB.e(255), ZB.e(268), ZB.e(279), ZB.e(316), ZB.e(249), ZB.e(267), ZB.e(235)]).then((() => ZB(61321))).then((ZB => {
                ZB.GLTF2Export.GLBAsync(qB, BB).then((BB => {
                  sB(), BB.downloadFiles(), IB()
                })).catch((BB => {
                  console.error("Error exporting GLB:", BB), sB(), IB()
                }))
              })).catch((BB => {
                console.error("Error importing serializers:", BB), sB(), IB()
              }))
            }
          })).catch((BB => {
            console.error("Error downloading the scene:", BB), IB()
          }))
        } catch (NB) {
          console.error("Error taking screenshot:", NB), IB()
        }
      }))
    }
    const hB = new class {
      constructor() {
        this.tools = cB.ALL_DEV_TOOLS
      }
      downloadScene(BB, IB) {
        return nB(BB, IB)
      }
      async setAmbientLightIntensity(BB) {
        const {
          Color3: IB
        } = await Promise.all([ZB.e(237), ZB.e(241)]).then((() => ZB(37304)));
        (0, oB.h)().Ig.JR().ambientColor = IB.FromArray([BB, BB, BB])
      }
      capturePhoto(BB, IB, ZB) {
        return function(BB, IB, ZB, TB) {
          return (0, vB.d)(kB(BB), IB, ZB, TB)
        }((0, oB.h)(), BB, IB, ZB)
      }
    }
  },
  40999: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => vB,
      h: () => kB
    });
    var TB = ZB(1821);
    const JB = 33177600,
      oB = 3e4;
    let GB = !1;

    function vB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: vB = 1,
        type: kB = "image/png",
        quality: cB
      } = TB;
      if (!BB.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (GB) return Promise.reject(new Error("A screenshot is already being taken"));
      GB = !0;
      const nB = function(BB, IB, ZB) {
        const TB = Math.max(1, BB),
          oB = Math.max(1, IB),
          GB = Math.min(1, ZB / Math.max(TB, oB), Math.sqrt(JB / (TB * oB)));
        return {
          width: Math.max(1, Math.floor(TB * GB)),
          height: Math.max(1, Math.floor(oB * GB))
        }
      }(IB, ZB, BB.maxTextureSize);
      return BB.resize(nB.width, nB.height, vB * nB.width / Math.max(1, IB)), new Promise(((IB, ZB) => {
        let TB, JB = 2,
          vB = null;
        const nB = () => {
          var IB;
          GB = !1, null === (IB = vB) || void 0 === IB || IB(), clearTimeout(TB), BB.restoreSize()
        };
        TB = setTimeout((() => {
          nB(), ZB(new Error("No frame was drawn to capture"))
        }), oB), vB = BB.onFrameDrawn((() => {
          if (JB--, JB > 0) return;
          const {
            canvas: TB
          } = BB, oB = {
            width: TB.width,
            height: TB.height
          };
          try {
            TB.toBlob((BB => {
              BB ? IB({
                blob: BB,
                ...oB
              }) : ZB(new Error("The canvas gave no image"))
            }), kB, cB)
          } catch (GB) {
            ZB(GB)
          } finally {
            nB()
          }
        }))
      }))
    }
    async function kB(BB, IB, ZB) {
      try {
        const JB = await vB(BB, IB, ZB);
        (0, TB.d)(JB.blob, `bloxd-screenshot-${JB.width}x${JB.height}-${Date.now()}.png`)
      } catch (JB) {
        console.error("Error taking screenshot:", JB)
      }
    }
  },
  37613: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => cB,
      h: () => vB,
      i: () => GB
    });
    var TB = ZB(37609),
      JB = ZB(37622);
    let oB = 0;

    function GB(BB, IB) {
      const ZB = BB;
      ZB._noaFaceGroups = null !== IB && void 0 !== IB ? IB : null, ZB._noaFaceEpoch = -1, ZB._noaFaceMask = -1, ZB._noaFaceCount = -1, ZB._noaFaceMaterial = null;
      const TB = BB.EW;
      TB && 1 === TB.length && (TB[0].indexStart = 0, TB[0].indexCount = BB.getTotalIndices())
    }

    function vB(BB, IB) {
      if (IB) {
        oB++;
        for (const IB of BB) {
          const BB = IB._noaFaceGroups;
          BB && GB(IB, BB)
        }
      } else oB = Math.max(0, oB - 1)
    }

    function kB(BB, IB, ZB) {
      let JB = -1,
        oB = 0;
      for (let GB = 0; GB < TB.g; GB++) {
        const ZB = BB[GB],
          vB = BB[GB + 1];
        vB > ZB && IB & 1 << TB.c[GB] && (JB < 0 && (JB = ZB), oB = vB)
      }
      return JB < 0 ? (ZB[0] = 0, ZB[1] = 0, 0) : (ZB[0] = JB, ZB[1] = oB - JB, oB - JB)
    }
    class cB {
      constructor(BB, IB) {
        this.YN = BB, this.engine = IB, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(BB, IB) {
        if (!IB) return;
        const ZB = IB.getProjectionMatrix().m,
          GB = 0 === oB && 0 === ZB[15],
          vB = IB.globalPosition,
          {
            engine: cB
          } = this,
          nB = GB ? (0, JB.e)(ZB, cB.getRenderWidth(), cB.getRenderHeight()) : 0;
        vB.x === this.eyeX && vB.y === this.eyeY && vB.z === this.eyeZ && nB === this.focalPx && GB === this.culling || (this.epoch++, this.eyeX = vB.x, this.eyeY = vB.y, this.eyeZ = vB.z, this.focalPx = nB, this.culling = GB);
        const {
          epoch: hB,
          range: zB
        } = this, FB = this.YN / 2, NB = FB * Math.sqrt(3), gB = BB.data, qB = BB.length;
        let yB = 0;
        for (let oB = 0; oB < qB; oB++) {
          const BB = gB[oB],
            IB = BB._noaFaceGroups;
          if (IB && (BB._noaFaceEpoch !== hB || BB._noaFaceMaterial !== BB.material)) {
            BB._noaFaceEpoch = hB, BB._noaFaceMaterial = BB.material;
            const ZB = BB.EW,
              oB = ZB && 1 === ZB.length ? ZB[0] : null;
            let cB = -1;
            if (GB && oB && (0, TB.r)(BB.material)) {
              const ZB = BB.position,
                TB = vB.x - ZB.x,
                oB = vB.y - ZB.y,
                GB = vB.z - ZB.z,
                kB = TB - FB,
                hB = oB - FB,
                zB = GB - FB,
                gB = Math.sqrt(kB * kB + hB * hB + zB * zB) + NB;
              cB = (0, JB.l)(IB, TB, oB, GB, (0, JB.h)(gB, nB))
            }
            if (oB && cB !== BB._noaFaceMask) {
              BB._noaFaceMask = cB;
              let ZB = 0,
                JB = IB[TB.g]; - 1 !== cB && (JB = kB(IB, cB, zB), ZB = zB[0]), BB._noaFaceCount = JB, oB.indexStart = 6 * ZB, oB.indexCount = 6 * JB, oB.setBoundingInfo(BB.qm())
            }
          }
          IB && 0 === BB._noaFaceCount || (gB[yB++] = BB)
        }
        BB.length = yB
      }
    }
  },
  37594: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => kB,
      c: () => vB
    });
    const TB = new WeakSet;
    let JB = 0;
    const oB = new Set;

    function GB(BB, IB) {
      BB._data = IB
    }

    function vB(BB) {
      var IB, ZB;
      (null !== (IB = null === (ZB = BB.getBuffer()) || void 0 === ZB ? void 0 : ZB.ah) && void 0 !== IB ? IB : 0) > 0 && (TB.add(BB), 0 === JB ? GB(BB, null) : oB.add(BB))
    }

    function kB(BB) {
      JB++;
      for (const ZB of function(BB) {
          const IB = new Set;
          for (const JB of BB) {
            const BB = JB.geometry;
            for (const JB of Object.values(null !== (ZB = null === BB || void 0 === BB ? void 0 : BB.getVertexBuffers()) && void 0 !== ZB ? ZB : {})) {
              var ZB;
              const BB = JB.getWrapperBuffer();
              TB.has(BB) && IB.add(BB)
            }
          }
          return IB
        }(BB)) ZB.getData() || cB(ZB), oB.add(ZB);
      let IB = !0;
      return () => {
        if (IB && (IB = !1, JB--, 0 === JB)) {
          for (const BB of oB) GB(BB, null);
          oB.clear()
        }
      }
    }

    function cB(BB) {
      const IB = BB.getBuffer();
      if (!IB || !(IB.ah > 0)) return;
      const ZB = BB._engine,
        TB = new Uint8Array(IB.ah);
      ZB.bindArrayBuffer(IB), ZB._gl.getBufferSubData(ZB._gl.ARRAY_BUFFER, 0, TB), ZB._resetVertexBufferBinding(), GB(BB, TB)
    }
  },
  37609: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => GB,
      g: () => oB,
      h: () => kB,
      l: () => TB,
      o: () => vB,
      p: () => JB,
      r: () => cB
    });
    const TB = 6,
      JB = [0, 2, 4, 1, 3, 5, 0, 2],
      oB = 6,
      GB = [1, 0, 3, 2, 5, 4];
    for (let nB = oB; nB < JB.length; nB++)
      if (JB[nB] !== JB[nB - oB]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const vB = JB.length + 1,
      kB = (() => {
        const BB = [];
        for (let IB = 0; IB < oB; IB++) BB[JB[IB]] = IB;
        return BB
      })();

    function cB(BB) {
      return !!BB && BB.backFaceCulling && (0 === BB.transparencyMode || 1 === BB.transparencyMode)
    }
  },
  37622: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => vB,
      h: () => kB,
      i: () => nB,
      l: () => cB,
      p: () => NB
    });
    var TB = ZB(37609);
    const JB = 1 / 16,
      oB = 1 / 64,
      GB = 2048;
    TB.l;

    function vB(BB, IB, ZB) {
      return Math.min(Math.abs(BB[0] * IB), Math.abs(BB[5] * ZB)) / 2
    }

    function kB(BB, IB) {
      return JB + oB * BB * BB / IB
    }

    function cB(BB, IB, ZB, JB, oB) {
      const GB = TB.o;
      return nB(BB[GB], BB[GB + 1], BB[GB + 2], BB[GB + 3], BB[GB + 4], BB[GB + 5], IB, ZB, JB, oB)
    }

    function nB(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB) {
      return (GB <= BB - cB ? 0 : 1) | (GB >= IB + cB ? 0 : 2) | (vB <= ZB - cB ? 0 : 4) | (vB >= TB + cB ? 0 : 8) | (kB <= JB - cB ? 0 : 16) | (kB >= oB + cB ? 0 : 32)
    }
    const hB = (() => {
        const BB = [];
        for (let IB = 0; IB < TB.p.length; IB++) {
          let ZB = 0;
          for (let JB = IB + 1; JB <= TB.p.length; JB++) {
            const oB = 1 << TB.p[JB - 1];
            if (ZB & oB) break;
            ZB |= oB, BB.push({
              start: IB,
              end: JB,
              QZ: ZB
            })
          }
        }
        return BB
      })(),
      zB = [];

    function FB(BB, IB) {
      const ZB = TB.h[IB];
      return BB[ZB + 1] - BB[ZB]
    }

    function NB(BB, IB, ZB) {
      let JB = 0;
      for (let GB = 0; GB < TB.l; GB++) FB(BB, GB) > 0 && (JB |= 1 << GB);
      if (0 === (IB &= JB)) return 0;
      if (IB === JB) return ZB[0] = 0, ZB[1] = BB[TB.g], 1;
      let oB = null,
        vB = 1 / 0;
      for (const cB of function(BB) {
          let IB = zB[BB];
          if (IB) return IB;
          const ZB = new Map,
            TB = (BB, IB) => {
              const TB = 4 * BB + IB.length / 2;
              ZB.has(TB) || ZB.set(TB, {
                QZ: BB,
                windows: IB
              })
            };
          for (const oB of hB)
            if ((oB.QZ & BB) === BB && TB(oB.QZ, [oB.start, oB.end]), 0 !== (oB.QZ & BB))
              for (const IB of hB) IB.start < oB.end || 0 !== (oB.QZ & IB.QZ) || 0 === (IB.QZ & BB) || ((oB.QZ | IB.QZ) & BB) !== BB || TB(oB.QZ | IB.QZ, [oB.start, oB.end, IB.start, IB.end]);
          const JB = [...ZB.values()];
          return IB = JB.filter((BB => !JB.some((IB => IB !== BB && (IB.QZ & BB.QZ) === IB.QZ && IB.windows.length <= BB.windows.length)))), zB[BB] = IB, IB
        }(IB)) {
        let ZB = (cB.windows.length / 2 - 1) * GB;
        const kB = cB.QZ & ~IB & JB;
        for (let IB = 0; IB < TB.l; IB++) kB & 1 << IB && (ZB += FB(BB, IB));
        ZB < vB && (oB = cB, vB = ZB)
      }
      const kB = oB.windows;
      for (let TB = 0; TB < kB.length; TB += 2) {
        const IB = BB[kB[TB]];
        ZB[TB] = IB, ZB[TB + 1] = BB[kB[TB + 1]] - IB
      }
      return kB.length / 2
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);