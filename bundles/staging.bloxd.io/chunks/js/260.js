export const id = 260;
export const ids = [260];
export const modules = {
  42174: (MM, rM, iM) => {
    iM.d(rM, {
      noaDevTools: () => LM
    });
    var OM = iM(38423),
      SM = iM(38404),
      jM = iM(3063),
      aM = iM(1830),
      PM = iM(42067);

    function nM(MM) {
      const {
        CL: rM
      } = MM, iM = rM.engine, OM = {
        width: iM.getRenderWidth(),
        height: iM.getRenderHeight()
      };
      return {
        canvas: iM.getRenderingCanvas(),
        maxTextureSize: iM.getCaps().maxTextureSize,
        lL: () => !MM.eL,
        resize: (MM, rM) => {
          iM.setSize(MM, rM)
        },
        restoreSize: () => {
          iM.setSize(OM.width, OM.height), rM.resize()
        },
        onFrameDrawn: iM => {
          const OM = () => {
            rM.IU && iM()
          };
          return MM.on("afterRender", OM), () => {
            MM.off("afterRender", OM)
          }
        }
      }
    }
    var QM = iM(34920);

    function zM(MM, rM) {
      let {
        width: QM,
        height: zM,
        colouring: LM
      } = rM;
      const mM = "normals" === LM,
        HM = "depth" === LM;
      return new Promise((rM => {
        try {
          const hM = (0, jM.f)();
          if (hM.CL.MJ) return "screenshot" !== MM || null !== LM ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void rM()) : void(0, PM.h)(nM(hM), QM, zM).finally(rM);
          const JM = hM.CL.engine,
            dM = hM.CL.Hk(),
            yM = QM,
            lM = zM;
          Promise.all([Promise.all([iM.e(279), iM.e(280), iM.e(256)]).then((() => iM(63884))), Promise.all([iM.e(255), iM.e(254), iM.e(279), iM.e(280), iM.e(277), iM.e(281), iM.e(284), iM.e(620), iM.e(261)]).then((() => iM(63893))), Promise.all([iM.e(255), iM.e(254), iM.e(279), iM.e(280), iM.e(277), iM.e(287), iM.e(281), iM.e(289), iM.e(263)]).then((() => iM(63896))), iM.e(661).then((() => iM(63903))), Promise.all([iM.e(254), iM.e(250)]).then((() => iM(38034))), iM.e(278).then((() => iM(63910))), iM.e(259).then((() => iM(63918)))]).then((jM => {
            const {
              CreateScreenshotUsingRenderTarget: PM
            } = jM[1], {
              ShaderMaterial: nM
            } = jM[2], {
              ShaderLanguage: QM
            } = jM[3], {
              sh: zM
            } = jM[4], {
              registerDevtoolsShader: LM
            } = jM[6], hM = QM.GLSL, EM = new Map, UM = dM.meshes.filter((MM => MM.material));
            let GM = !1,
              CM = null;

            function eM() {
              var MM;
              GM && (GM = !1, (0, OM.f)(dM.meshes, !1)), null === (MM = CM) || void 0 === MM || MM(), CM = null, UM.forEach((MM => {
                const rM = EM.get(MM);
                rM && (MM.material = rM)
              }))
            }
            if (mM) {
              const MM = [],
                rM = [];
              UM.forEach((iM => {
                const OM = iM.name.toLowerCase(),
                  SM = iM.aY().boundingBox.center,
                  jM = dM.activeCamera.position.subtract(SM).length();
                OM.includes("sky") || OM.includes("background") || OM.includes("environment") || jM > 1e3 ? rM.push(iM) : MM.push(iM)
              })), LM("devtoolsNormal", hM);
              const iM = new nM("normalMaterial", dM, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: hM
              });
              LM("devtoolsWhite", hM);
              const OM = new nM("whiteMaterial", dM, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: hM
              });
              MM.forEach((MM => {
                EM.set(MM, MM.material), MM.material = iM
              })), rM.forEach((MM => {
                EM.set(MM, MM.material), MM.material = OM
              }))
            } else if (HM) {
              LM("devtoolsDepth", hM);
              const MM = dM.activeCamera.position;
              let rM = 0,
                iM = 1 / 0;
              UM.forEach((OM => {
                const SM = OM.name.toLowerCase();
                if (SM.includes("sky") || SM.includes("background") || SM.includes("environment")) return;
                const jM = OM.aY().boundingBox.center,
                  aM = zM.TransformCoordinates(jM, OM.getWorldMatrix()),
                  PM = MM.subtract(aM).length();
                PM > 1e3 || (rM = Math.max(rM, PM), iM = Math.min(iM, PM))
              }));
              const OM = rM - iM;
              rM += .1 * OM, iM = Math.max(0, iM - .1 * OM), console.log(`Depth range: min=${iM.toFixed(2)}, max=${rM.toFixed(2)}, range=${OM.toFixed(2)}`), OM < 1 && (rM = iM + 10);
              const SM = new nM("depthMaterial", dM, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: hM
              });
              SM.setVector3("cameraPosition", MM), SM.setFloat("maxDepth", rM), SM.setFloat("minDepth", iM), UM.forEach((MM => {
                EM.set(MM, MM.material), MM.material = SM
              }))
            }
            if ((0, OM.f)(dM.meshes, !0), GM = !0, "glb" === MM && (CM = (0, SM.b)(dM.meshes)), "screenshot" === MM) {
              let MM = `bloxd-screenshot-${yM}x${lM}-${Date.now()}.png`;
              mM ? MM = `bloxd-screenshot-normals-${yM}x${lM}-${Date.now()}.png` : HM && (MM = `bloxd-screenshot-depth-${yM}x${lM}-${Date.now()}.png`), PM(JM, dM.activeCamera, {
                width: yM,
                height: lM
              }, (function(iM) {
                eM(), fetch(iM).then((function(MM) {
                  return MM.blob()
                })).then((function(iM) {
                  (0, aM.downloadBlob)(iM, MM), rM()
                })).catch((function(MM) {
                  console.error("Error processing screenshot:", MM), rM()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), eM(), rM()
              }))
            } else {
              let MM = "YJ";
              mM ? MM = "scene-normals" : HM && (MM = "scene-depth"), mM || HM ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: MM
                  } = await Promise.all([iM.e(255), iM.e(254), iM.e(279), iM.e(280), iM.e(277), iM.e(287), iM.e(286), iM.e(262)]).then((() => iM(41374))), {
                    Color3: rM
                  } = await Promise.all([iM.e(255), iM.e(258)]).then((() => iM(38167))), OM = [], SM = [];
                  if (UM.forEach((MM => {
                      const rM = MM.name.toLowerCase(),
                        iM = MM.aY().boundingBox.center,
                        jM = dM.activeCamera.position.subtract(iM).length();
                      rM.includes("sky") || rM.includes("background") || rM.includes("environment") || jM > 1e3 ? SM.push(MM) : OM.push(MM)
                    })), mM) OM.forEach(((iM, OM) => {
                    const SM = iM.getVerticesData("normal");
                    if (SM) {
                      const jM = [];
                      for (let MM = 0; MM < SM.length; MM += 3) {
                        const rM = Math.abs(SM[MM]),
                          iM = Math.abs(SM[MM + 1]),
                          OM = Math.abs(SM[MM + 2]);
                        jM.push(rM, iM, OM, 1)
                      }
                      iM.setVerticesData("color", jM);
                      const aM = new MM(`vertexColorMat_${OM}`, dM);
                      aM.disableLighting = !0, aM.emissiveColor = new rM(1, 1, 1), aM.specularColor = new rM(0, 0, 0), iM.material = aM
                    }
                  })), SM.forEach(((iM, OM) => {
                    const SM = iM.getVerticesData("position");
                    if (SM) {
                      const jM = [],
                        aM = SM.length / 3;
                      for (let MM = 0; MM < aM; MM++) jM.push(1, 1, 1, 1);
                      iM.setVerticesData("color", jM);
                      const PM = new MM(`whiteMat_${OM}`, dM);
                      PM.disableLighting = !0, PM.emissiveColor = new rM(1, 1, 1), PM.specularColor = new rM(0, 0, 0), iM.material = PM
                    }
                  }));
                  else if (HM) {
                    const iM = dM.activeCamera.position;
                    let SM = 0,
                      jM = 1 / 0;
                    OM.forEach((MM => {
                      const rM = MM.aY().boundingBox.center,
                        OM = zM.TransformCoordinates(rM, MM.getWorldMatrix()),
                        aM = iM.subtract(OM).length();
                      SM = Math.max(SM, aM), jM = Math.min(jM, aM)
                    }));
                    const aM = SM - jM;
                    SM += .1 * aM, jM = Math.max(0, jM - .1 * aM), aM < 1 && (SM = jM + 10), UM.forEach(((OM, aM) => {
                      const PM = OM.name.toLowerCase(),
                        nM = OM.aY().boundingBox.center,
                        QM = zM.TransformCoordinates(nM, OM.getWorldMatrix()),
                        LM = iM.subtract(QM).length();
                      if (!(PM.includes("sky") || PM.includes("background") || PM.includes("environment") || LM > 1e3)) {
                        const iM = 1 - Math.min(Math.max((LM - jM) / (SM - jM), 0), 1),
                          PM = new MM(`depthMat_${aM}`, dM);
                        PM.diffuseColor = new rM(iM, iM, iM), PM.specularColor = new rM(0, 0, 0), OM.material = PM
                      }
                    }))
                  }
                })().then((() => Promise.all([iM.e(255), iM.e(254), iM.e(279), iM.e(280), iM.e(277), iM.e(287), iM.e(281), iM.e(286), iM.e(284), iM.e(276), iM.e(289), iM.e(302), iM.e(620), iM.e(269), iM.e(288), iM.e(253)]).then((() => iM(63927))))).then((rM => rM.GLTF2Export.GLBAsync(dM, MM))).then((MM => {
                  eM(), MM.downloadFiles(), rM()
                })).catch((MM => {
                  console.error("Error exporting GLB:", MM), eM(), rM()
                }))
              }), 100) : Promise.all([iM.e(255), iM.e(254), iM.e(279), iM.e(280), iM.e(277), iM.e(287), iM.e(281), iM.e(286), iM.e(284), iM.e(276), iM.e(289), iM.e(302), iM.e(620), iM.e(269), iM.e(288), iM.e(253)]).then((() => iM(63927))).then((iM => {
                iM.GLTF2Export.GLBAsync(dM, MM).then((MM => {
                  eM(), MM.downloadFiles(), rM()
                })).catch((MM => {
                  console.error("Error exporting GLB:", MM), eM(), rM()
                }))
              })).catch((MM => {
                console.error("Error importing serializers:", MM), eM(), rM()
              }))
            }
          })).catch((MM => {
            console.error("Error downloading the scene:", MM), rM()
          }))
        } catch (hM) {
          console.error("Error taking screenshot:", hM), rM()
        }
      }))
    }
    const LM = new class {
      constructor() {
        this.tools = QM.ALL_DEV_TOOLS
      }
      downloadScene(MM, rM) {
        return zM(MM, rM)
      }
      async setAmbientLightIntensity(MM) {
        const {
          Color3: rM
        } = await Promise.all([iM.e(255), iM.e(258)]).then((() => iM(38167)));
        (0, jM.f)().CL.Hk().ambientColor = rM.FromArray([MM, MM, MM])
      }
      capturePhoto(MM, rM, iM) {
        return function(MM, rM, iM, OM) {
          return (0, PM.d)(nM(MM), rM, iM, OM)
        }((0, jM.f)(), MM, rM, iM)
      }
    }
  },
  42067: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => PM,
      h: () => nM
    });
    var OM = iM(1845);
    const SM = 33177600,
      jM = 3e4;
    let aM = !1;

    function PM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: PM = 1,
        type: nM = "image/png",
        quality: QM
      } = OM;
      return MM.lL() ? aM ? Promise.reject(new Error("A screenshot is already being taken")) : (aM = !0, new Promise(((OM, zM) => {
        let LM, mM = 2,
          HM = null;
        const hM = () => {
          var rM;
          aM = !1, null === (rM = HM) || void 0 === rM || rM(), clearTimeout(LM);
          try {
            MM.restoreSize()
          } catch (iM) {
            console.error("A screenshot couldn't size the canvas back", iM)
          }
        };
        LM = setTimeout((() => {
          hM(), zM(new Error("No frame was drawn to capture"))
        }), jM);
        try {
          const OM = function(MM, rM, iM) {
            const OM = Math.max(1, MM),
              jM = Math.max(1, rM),
              aM = Math.min(1, iM / Math.max(OM, jM), Math.sqrt(SM / (OM * jM)));
            return {
              width: Math.max(1, Math.floor(OM * aM)),
              height: Math.max(1, Math.floor(jM * aM))
            }
          }(rM, iM, MM.maxTextureSize);
          MM.resize(OM.width, OM.height, PM * OM.width / Math.max(1, rM))
        } catch (JM) {
          return hM(), void zM(JM)
        }
        HM = MM.onFrameDrawn((() => {
          if (mM--, mM > 0) return;
          const {
            canvas: rM
          } = MM, iM = {
            width: rM.width,
            height: rM.height
          };
          try {
            rM.toBlob((MM => {
              MM ? OM({
                blob: MM,
                ...iM
              }) : zM(new Error("The canvas gave no image"))
            }), nM, QM)
          } catch (JM) {
            zM(JM)
          } finally {
            hM()
          }
        }))
      }))) : Promise.reject(new Error("Screenshots need a game to be running"))
    }
    async function nM(MM, rM, iM) {
      try {
        const SM = await PM(MM, rM, iM);
        (0, OM.c)(SM.blob, `bloxd-screenshot-${SM.width}x${SM.height}-${Date.now()}.png`)
      } catch (SM) {
        console.error("Error taking screenshot:", SM)
      }
    }
  },
  38423: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => QM,
      f: () => PM,
      j: () => aM
    });
    var OM = iM(38418),
      SM = iM(38426);
    let jM = 0;

    function aM(MM, rM) {
      const iM = MM;
      iM._noaFaceGroups = null !== rM && void 0 !== rM ? rM : null, iM._noaFaceEpoch = -1, iM._noaFaceMask = -1, iM._noaFaceCount = -1, iM._noaFaceMaterial = null;
      const OM = MM.iG;
      OM && 1 === OM.length && (OM[0].indexStart = 0, OM[0].indexCount = MM.getTotalIndices())
    }

    function PM(MM, rM) {
      if (rM) {
        jM++;
        for (const rM of MM) {
          const MM = rM._noaFaceGroups;
          MM && aM(rM, MM)
        }
      } else jM = Math.max(0, jM - 1)
    }

    function nM(MM, rM, iM) {
      let SM = -1,
        jM = 0;
      for (let aM = 0; aM < OM.g; aM++) {
        const iM = MM[aM],
          PM = MM[aM + 1];
        PM > iM && rM & 1 << OM.c[aM] && (SM < 0 && (SM = iM), jM = PM)
      }
      return SM < 0 ? (iM[0] = 0, iM[1] = 0, 0) : (iM[0] = SM, iM[1] = jM - SM, jM - SM)
    }
    class QM {
      constructor(MM, rM) {
        this.HL = MM, this.engine = rM, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(MM, rM) {
        if (!rM) return;
        const iM = rM.getProjectionMatrix().m,
          aM = 0 === jM && 0 === iM[15],
          PM = rM.globalPosition,
          {
            engine: QM
          } = this,
          zM = aM ? (0, SM.c)(iM, QM.getRenderWidth(), QM.getRenderHeight()) : 0;
        PM.x === this.eyeX && PM.y === this.eyeY && PM.z === this.eyeZ && zM === this.focalPx && aM === this.culling || (this.epoch++, this.eyeX = PM.x, this.eyeY = PM.y, this.eyeZ = PM.z, this.focalPx = zM, this.culling = aM);
        const {
          epoch: LM,
          range: mM
        } = this, HM = this.HL / 2, hM = HM * Math.sqrt(3), JM = MM.data, dM = MM.length;
        let yM = 0;
        for (let jM = 0; jM < dM; jM++) {
          const MM = JM[jM],
            rM = MM._noaFaceGroups;
          if (rM && (MM._noaFaceEpoch !== LM || MM._noaFaceMaterial !== MM.material)) {
            MM._noaFaceEpoch = LM, MM._noaFaceMaterial = MM.material;
            const iM = MM.iG,
              jM = iM && 1 === iM.length ? iM[0] : null;
            let QM = -1;
            if (aM && jM && (0, OM.t)(MM.material)) {
              const iM = MM.position,
                OM = PM.x - iM.x,
                jM = PM.y - iM.y,
                aM = PM.z - iM.z,
                nM = OM - HM,
                LM = jM - HM,
                mM = aM - HM,
                JM = Math.sqrt(nM * nM + LM * LM + mM * mM) + hM;
              QM = (0, SM.k)(rM, OM, jM, aM, (0, SM.e)(JM, zM))
            }
            if (jM && QM !== MM._noaFaceMask) {
              MM._noaFaceMask = QM;
              let iM = 0,
                SM = rM[OM.g]; - 1 !== QM && (SM = nM(rM, QM, mM), iM = mM[0]), MM._noaFaceCount = SM, jM.indexStart = 6 * iM, jM.indexCount = 6 * SM, jM.setBoundingInfo(MM.aY())
            }
          }
          rM && 0 === MM._noaFaceCount || (JM[yM++] = MM)
        }
        MM.length = yM
      }
    }
  },
  38404: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => nM,
      e: () => PM
    });
    const OM = new WeakSet;
    let SM = 0;
    const jM = new Set;

    function aM(MM, rM) {
      MM._data = rM
    }

    function PM(MM) {
      var rM, iM;
      (null !== (rM = null === (iM = MM.getBuffer()) || void 0 === iM ? void 0 : iM.vL) && void 0 !== rM ? rM : 0) > 0 && (OM.add(MM), 0 === SM ? aM(MM, null) : jM.add(MM))
    }

    function nM(MM) {
      SM++;
      for (const iM of function(MM) {
          const rM = new Set;
          for (const SM of MM) {
            const MM = SM.geometry;
            for (const SM of Object.values(null !== (iM = null === MM || void 0 === MM ? void 0 : MM.getVertexBuffers()) && void 0 !== iM ? iM : {})) {
              var iM;
              const MM = SM.getWrapperBuffer();
              OM.has(MM) && rM.add(MM)
            }
          }
          return rM
        }(MM)) iM.getData() || QM(iM), jM.add(iM);
      let rM = !0;
      return () => {
        if (rM && (rM = !1, SM--, 0 === SM)) {
          for (const MM of jM) aM(MM, null);
          jM.clear()
        }
      }
    }

    function QM(MM) {
      const rM = MM.getBuffer();
      if (!rM || !(rM.vL > 0)) return;
      const iM = MM._engine,
        OM = new Uint8Array(rM.vL);
      iM.bindArrayBuffer(rM), iM._gl.getBufferSubData(iM._gl.ARRAY_BUFFER, 0, OM), iM._resetVertexBufferBinding(), aM(MM, OM)
    }
  },
  38418: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM,
      g: () => jM,
      k: () => nM,
      l: () => OM,
      n: () => PM,
      r: () => SM,
      t: () => QM
    });
    const OM = 6,
      SM = [0, 2, 4, 1, 3, 5, 0, 2],
      jM = 6,
      aM = [1, 0, 3, 2, 5, 4];
    for (let zM = jM; zM < SM.length; zM++)
      if (SM[zM] !== SM[zM - jM]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const PM = SM.length + 1,
      nM = (() => {
        const MM = [];
        for (let rM = 0; rM < jM; rM++) MM[SM[rM]] = rM;
        return MM
      })();

    function QM(MM) {
      return !!MM && MM.backFaceCulling && (0 === MM.transparencyMode || 1 === MM.transparencyMode)
    }
  },
  38426: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => PM,
      e: () => nM,
      h: () => zM,
      k: () => QM,
      l: () => hM
    });
    var OM = iM(38418);
    const SM = 1 / 16,
      jM = 1 / 64,
      aM = 2048;
    OM.l;

    function PM(MM, rM, iM) {
      return Math.min(Math.abs(MM[0] * rM), Math.abs(MM[5] * iM)) / 2
    }

    function nM(MM, rM) {
      return SM + jM * MM * MM / rM
    }

    function QM(MM, rM, iM, SM, jM) {
      const aM = OM.n;
      return zM(MM[aM], MM[aM + 1], MM[aM + 2], MM[aM + 3], MM[aM + 4], MM[aM + 5], rM, iM, SM, jM)
    }

    function zM(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM) {
      return (aM <= MM - QM ? 0 : 1) | (aM >= rM + QM ? 0 : 2) | (PM <= iM - QM ? 0 : 4) | (PM >= OM + QM ? 0 : 8) | (nM <= SM - QM ? 0 : 16) | (nM >= jM + QM ? 0 : 32)
    }
    const LM = (() => {
        const MM = [];
        for (let rM = 0; rM < OM.r.length; rM++) {
          let iM = 0;
          for (let SM = rM + 1; SM <= OM.r.length; SM++) {
            const jM = 1 << OM.r[SM - 1];
            if (iM & jM) break;
            iM |= jM, MM.push({
              start: rM,
              end: SM,
              Nj: iM
            })
          }
        }
        return MM
      })(),
      mM = [];

    function HM(MM, rM) {
      const iM = OM.k[rM];
      return MM[iM + 1] - MM[iM]
    }

    function hM(MM, rM, iM) {
      let SM = 0;
      for (let aM = 0; aM < OM.l; aM++) HM(MM, aM) > 0 && (SM |= 1 << aM);
      if (0 === (rM &= SM)) return 0;
      if (rM === SM) return iM[0] = 0, iM[1] = MM[OM.g], 1;
      let jM = null,
        PM = 1 / 0;
      for (const QM of function(MM) {
          let rM = mM[MM];
          if (rM) return rM;
          const iM = new Map,
            OM = (MM, rM) => {
              const OM = 4 * MM + rM.length / 2;
              iM.has(OM) || iM.set(OM, {
                Nj: MM,
                windows: rM
              })
            };
          for (const jM of LM)
            if ((jM.Nj & MM) === MM && OM(jM.Nj, [jM.start, jM.end]), 0 !== (jM.Nj & MM))
              for (const rM of LM) rM.start < jM.end || 0 !== (jM.Nj & rM.Nj) || 0 === (rM.Nj & MM) || ((jM.Nj | rM.Nj) & MM) !== MM || OM(jM.Nj | rM.Nj, [jM.start, jM.end, rM.start, rM.end]);
          const SM = [...iM.values()];
          return rM = SM.filter((MM => !SM.some((rM => rM !== MM && (rM.Nj & MM.Nj) === rM.Nj && rM.windows.length <= MM.windows.length)))), mM[MM] = rM, rM
        }(rM)) {
        let iM = (QM.windows.length / 2 - 1) * aM;
        const nM = QM.Nj & ~rM & SM;
        for (let rM = 0; rM < OM.l; rM++) nM & 1 << rM && (iM += HM(MM, rM));
        iM < PM && (jM = QM, PM = iM)
      }
      const nM = jM.windows;
      for (let OM = 0; OM < nM.length; OM += 2) {
        const rM = MM[nM[OM]];
        iM[OM] = rM, iM[OM + 1] = MM[nM[OM + 1]] - rM
      }
      return nM.length / 2
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);