export const id = 236;
export const ids = [236];
export const modules = {
  40984: (DD, zD, wD) => {
    wD.d(zD, {
      noaDevTools: () => AD
    });
    var pD = wD(37543),
      sD = wD(37527),
      KD = wD(2769),
      rD = wD(1737),
      LD = wD(40889);

    function cD(DD) {
      const {
        wB: zD
      } = DD, wD = zD.engine, pD = {
        width: wD.getRenderWidth(),
        height: wD.getRenderHeight()
      };
      return {
        canvas: wD.getRenderingCanvas(),
        maxTextureSize: wD.getCaps().maxTextureSize,
        drawing: () => !DD.HJ,
        resize: (DD, zD) => {
          wD.setSize(DD, zD)
        },
        restoreSize: () => {
          wD.setSize(pD.width, pD.height), zD.resize()
        },
        onFrameDrawn: zD => (DD.on("afterRender", zD), () => {
          DD.off("afterRender", zD)
        })
      }
    }
    var gD = wD(34095);

    function RD(DD, zD) {
      let {
        width: gD,
        height: RD,
        colouring: AD
      } = zD;
      const UD = "normals" === AD,
        fD = "depth" === AD;
      return new Promise((zD => {
        try {
          const ID = (0, KD.e)();
          if (ID.wB.pB) return "screenshot" !== DD || null !== AD ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void zD()) : void(0, LD.g)(cD(ID), gD, RD).finally(zD);
          const BD = ID.wB.engine,
            GD = ID.wB.Ul(),
            hD = gD,
            nD = RD;
          Promise.all([Promise.all([wD.e(254), wD.e(255), wD.e(233)]).then((() => wD(61016))), Promise.all([wD.e(232), wD.e(231), wD.e(254), wD.e(255), wD.e(252), wD.e(256), wD.e(259), wD.e(311), wD.e(237)]).then((() => wD(61020))), Promise.all([wD.e(232), wD.e(231), wD.e(254), wD.e(255), wD.e(252), wD.e(262), wD.e(256), wD.e(264), wD.e(239)]).then((() => wD(61022))), wD.e(352).then((() => wD(61028))), Promise.all([wD.e(231), wD.e(227)]).then((() => wD(37070))), wD.e(253).then((() => wD(61035))), wD.e(234).then((() => wD(61039)))]).then((KD => {
            const {
              CreateScreenshotUsingRenderTarget: LD
            } = KD[1], {
              ShaderMaterial: cD
            } = KD[2], {
              ShaderLanguage: gD
            } = KD[3], {
              WI: RD
            } = KD[4], {
              registerDevtoolsShader: AD
            } = KD[6], ID = gD.GLSL, MD = new Map, OD = GD.meshes.filter((DD => DD.material));
            let JD = !1,
              ED = null;

            function QD() {
              var DD;
              JD && (JD = !1, (0, pD.g)(GD.meshes, !1)), null === (DD = ED) || void 0 === DD || DD(), ED = null, OD.forEach((DD => {
                const zD = MD.get(DD);
                zD && (DD.material = zD)
              }))
            }
            if (UD) {
              const DD = [],
                zD = [];
              OD.forEach((wD => {
                const pD = wD.name.toLowerCase(),
                  sD = wD.FW().boundingBox.center,
                  KD = GD.activeCamera.position.subtract(sD).length();
                pD.includes("sky") || pD.includes("background") || pD.includes("environment") || KD > 1e3 ? zD.push(wD) : DD.push(wD)
              })), AD("devtoolsNormal", ID);
              const wD = new cD("normalMaterial", GD, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: ID
              });
              AD("devtoolsWhite", ID);
              const pD = new cD("whiteMaterial", GD, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: ID
              });
              DD.forEach((DD => {
                MD.set(DD, DD.material), DD.material = wD
              })), zD.forEach((DD => {
                MD.set(DD, DD.material), DD.material = pD
              }))
            } else if (fD) {
              AD("devtoolsDepth", ID);
              const DD = GD.activeCamera.position;
              let zD = 0,
                wD = 1 / 0;
              OD.forEach((pD => {
                const sD = pD.name.toLowerCase();
                if (sD.includes("sky") || sD.includes("background") || sD.includes("environment")) return;
                const KD = pD.FW().boundingBox.center,
                  rD = RD.TransformCoordinates(KD, pD.getWorldMatrix()),
                  LD = DD.subtract(rD).length();
                LD > 1e3 || (zD = Math.max(zD, LD), wD = Math.min(wD, LD))
              }));
              const pD = zD - wD;
              zD += .1 * pD, wD = Math.max(0, wD - .1 * pD), console.log(`Depth range: min=${wD.toFixed(2)}, max=${zD.toFixed(2)}, range=${pD.toFixed(2)}`), pD < 1 && (zD = wD + 10);
              const sD = new cD("depthMaterial", GD, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: ID
              });
              sD.setVector3("cameraPosition", DD), sD.setFloat("maxDepth", zD), sD.setFloat("minDepth", wD), OD.forEach((DD => {
                MD.set(DD, DD.material), DD.material = sD
              }))
            }
            if ((0, pD.g)(GD.meshes, !0), JD = !0, "glb" === DD && (ED = (0, sD.b)(GD.meshes)), "screenshot" === DD) {
              let DD = `bloxd-screenshot-${hD}x${nD}-${Date.now()}.png`;
              UD ? DD = `bloxd-screenshot-normals-${hD}x${nD}-${Date.now()}.png` : fD && (DD = `bloxd-screenshot-depth-${hD}x${nD}-${Date.now()}.png`), LD(BD, GD.activeCamera, {
                width: hD,
                height: nD
              }, (function(wD) {
                QD(), fetch(wD).then((function(DD) {
                  return DD.blob()
                })).then((function(wD) {
                  (0, rD.downloadBlob)(wD, DD), zD()
                })).catch((function(DD) {
                  console.error("Error processing screenshot:", DD), zD()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), QD(), zD()
              }))
            } else {
              let DD = "oB";
              UD ? DD = "scene-normals" : fD && (DD = "scene-depth"), UD || fD ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: DD
                  } = await Promise.all([wD.e(232), wD.e(231), wD.e(254), wD.e(255), wD.e(252), wD.e(262), wD.e(261), wD.e(238)]).then((() => wD(40192))), {
                    Color3: zD
                  } = await Promise.all([wD.e(232), wD.e(235)]).then((() => wD(37267))), pD = [], sD = [];
                  if (OD.forEach((DD => {
                      const zD = DD.name.toLowerCase(),
                        wD = DD.FW().boundingBox.center,
                        KD = GD.activeCamera.position.subtract(wD).length();
                      zD.includes("sky") || zD.includes("background") || zD.includes("environment") || KD > 1e3 ? sD.push(DD) : pD.push(DD)
                    })), UD) pD.forEach(((wD, pD) => {
                    const sD = wD.getVerticesData("normal");
                    if (sD) {
                      const KD = [];
                      for (let DD = 0; DD < sD.length; DD += 3) {
                        const zD = Math.abs(sD[DD]),
                          wD = Math.abs(sD[DD + 1]),
                          pD = Math.abs(sD[DD + 2]);
                        KD.push(zD, wD, pD, 1)
                      }
                      wD.setVerticesData("color", KD);
                      const rD = new DD(`vertexColorMat_${pD}`, GD);
                      rD.disableLighting = !0, rD.emissiveColor = new zD(1, 1, 1), rD.specularColor = new zD(0, 0, 0), wD.material = rD
                    }
                  })), sD.forEach(((wD, pD) => {
                    const sD = wD.getVerticesData("position");
                    if (sD) {
                      const KD = [],
                        rD = sD.length / 3;
                      for (let DD = 0; DD < rD; DD++) KD.push(1, 1, 1, 1);
                      wD.setVerticesData("color", KD);
                      const LD = new DD(`whiteMat_${pD}`, GD);
                      LD.disableLighting = !0, LD.emissiveColor = new zD(1, 1, 1), LD.specularColor = new zD(0, 0, 0), wD.material = LD
                    }
                  }));
                  else if (fD) {
                    const wD = GD.activeCamera.position;
                    let sD = 0,
                      KD = 1 / 0;
                    pD.forEach((DD => {
                      const zD = DD.FW().boundingBox.center,
                        pD = RD.TransformCoordinates(zD, DD.getWorldMatrix()),
                        rD = wD.subtract(pD).length();
                      sD = Math.max(sD, rD), KD = Math.min(KD, rD)
                    }));
                    const rD = sD - KD;
                    sD += .1 * rD, KD = Math.max(0, KD - .1 * rD), rD < 1 && (sD = KD + 10), OD.forEach(((pD, rD) => {
                      const LD = pD.name.toLowerCase(),
                        cD = pD.FW().boundingBox.center,
                        gD = RD.TransformCoordinates(cD, pD.getWorldMatrix()),
                        AD = wD.subtract(gD).length();
                      if (!(LD.includes("sky") || LD.includes("background") || LD.includes("environment") || AD > 1e3)) {
                        const wD = 1 - Math.min(Math.max((AD - KD) / (sD - KD), 0), 1),
                          LD = new DD(`depthMat_${rD}`, GD);
                        LD.diffuseColor = new zD(wD, wD, wD), LD.specularColor = new zD(0, 0, 0), pD.material = LD
                      }
                    }))
                  }
                })().then((() => Promise.all([wD.e(232), wD.e(231), wD.e(254), wD.e(255), wD.e(252), wD.e(262), wD.e(256), wD.e(261), wD.e(259), wD.e(251), wD.e(264), wD.e(274), wD.e(311), wD.e(244), wD.e(263), wD.e(230)]).then((() => wD(61046))))).then((zD => zD.GLTF2Export.GLBAsync(GD, DD))).then((DD => {
                  QD(), DD.downloadFiles(), zD()
                })).catch((DD => {
                  console.error("Error exporting GLB:", DD), QD(), zD()
                }))
              }), 100) : Promise.all([wD.e(232), wD.e(231), wD.e(254), wD.e(255), wD.e(252), wD.e(262), wD.e(256), wD.e(261), wD.e(259), wD.e(251), wD.e(264), wD.e(274), wD.e(311), wD.e(244), wD.e(263), wD.e(230)]).then((() => wD(61046))).then((wD => {
                wD.GLTF2Export.GLBAsync(GD, DD).then((DD => {
                  QD(), DD.downloadFiles(), zD()
                })).catch((DD => {
                  console.error("Error exporting GLB:", DD), QD(), zD()
                }))
              })).catch((DD => {
                console.error("Error importing serializers:", DD), QD(), zD()
              }))
            }
          })).catch((DD => {
            console.error("Error downloading the scene:", DD), zD()
          }))
        } catch (ID) {
          console.error("Error taking screenshot:", ID), zD()
        }
      }))
    }
    const AD = new class {
      constructor() {
        this.tools = gD.ALL_DEV_TOOLS
      }
      downloadScene(DD, zD) {
        return RD(DD, zD)
      }
      async setAmbientLightIntensity(DD) {
        const {
          Color3: zD
        } = await Promise.all([wD.e(232), wD.e(235)]).then((() => wD(37267)));
        (0, KD.e)().wB.Ul().ambientColor = zD.FromArray([DD, DD, DD])
      }
      capturePhoto(DD, zD, wD) {
        return function(DD, zD, wD, pD) {
          return (0, LD.c)(cD(DD), zD, wD, pD)
        }((0, KD.e)(), DD, zD, wD)
      }
    }
  },
  40889: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => LD,
      g: () => cD
    });
    var pD = wD(1753);
    const sD = 33177600,
      KD = 3e4;
    let rD = !1;

    function LD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: LD = 1,
        type: cD = "image/png",
        quality: gD
      } = pD;
      if (!DD.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (rD) return Promise.reject(new Error("A screenshot is already being taken"));
      rD = !0;
      const RD = function(DD, zD, wD) {
        const pD = Math.max(1, DD),
          KD = Math.max(1, zD),
          rD = Math.min(1, wD / Math.max(pD, KD), Math.sqrt(sD / (pD * KD)));
        return {
          width: Math.max(1, Math.floor(pD * rD)),
          height: Math.max(1, Math.floor(KD * rD))
        }
      }(zD, wD, DD.maxTextureSize);
      return DD.resize(RD.width, RD.height, LD * RD.width / Math.max(1, zD)), new Promise(((zD, wD) => {
        let pD, sD = 2,
          LD = null;
        const RD = () => {
          var zD;
          rD = !1, null === (zD = LD) || void 0 === zD || zD(), clearTimeout(pD), DD.restoreSize()
        };
        pD = setTimeout((() => {
          RD(), wD(new Error("No frame was drawn to capture"))
        }), KD), LD = DD.onFrameDrawn((() => {
          if (sD--, sD > 0) return;
          const {
            canvas: pD
          } = DD, KD = {
            width: pD.width,
            height: pD.height
          };
          try {
            pD.toBlob((DD => {
              DD ? zD({
                blob: DD,
                ...KD
              }) : wD(new Error("The canvas gave no image"))
            }), cD, gD)
          } catch (rD) {
            wD(rD)
          } finally {
            RD()
          }
        }))
      }))
    }
    async function cD(DD, zD, wD) {
      try {
        const sD = await LD(DD, zD, wD);
        (0, pD.b)(sD.blob, `bloxd-screenshot-${sD.width}x${sD.height}-${Date.now()}.png`)
      } catch (sD) {
        console.error("Error taking screenshot:", sD)
      }
    }
  },
  37543: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => gD,
      g: () => LD,
      i: () => rD
    });
    var pD = wD(37535),
      sD = wD(37550);
    let KD = 0;

    function rD(DD, zD) {
      const wD = DD;
      wD._noaFaceGroups = null !== zD && void 0 !== zD ? zD : null, wD._noaFaceEpoch = -1, wD._noaFaceMask = -1, wD._noaFaceCount = -1, wD._noaFaceMaterial = null;
      const pD = DD.QE;
      pD && 1 === pD.length && (pD[0].indexStart = 0, pD[0].indexCount = DD.getTotalIndices())
    }

    function LD(DD, zD) {
      if (zD) {
        KD++;
        for (const zD of DD) {
          const DD = zD._noaFaceGroups;
          DD && rD(zD, DD)
        }
      } else KD = Math.max(0, KD - 1)
    }

    function cD(DD, zD, wD) {
      let sD = -1,
        KD = 0;
      for (let rD = 0; rD < pD.e; rD++) {
        const wD = DD[rD],
          LD = DD[rD + 1];
        LD > wD && zD & 1 << pD.c[rD] && (sD < 0 && (sD = wD), KD = LD)
      }
      return sD < 0 ? (wD[0] = 0, wD[1] = 0, 0) : (wD[0] = sD, wD[1] = KD - sD, KD - sD)
    }
    class gD {
      constructor(DD, zD) {
        this.CI = DD, this.engine = zD, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(DD, zD) {
        if (!zD) return;
        const wD = zD.getProjectionMatrix().m,
          rD = 0 === KD && 0 === wD[15],
          LD = zD.globalPosition,
          {
            engine: gD
          } = this,
          RD = rD ? (0, sD.e)(wD, gD.getRenderWidth(), gD.getRenderHeight()) : 0;
        LD.x === this.eyeX && LD.y === this.eyeY && LD.z === this.eyeZ && RD === this.focalPx && rD === this.culling || (this.epoch++, this.eyeX = LD.x, this.eyeY = LD.y, this.eyeZ = LD.z, this.focalPx = RD, this.culling = rD);
        const {
          epoch: AD,
          range: UD
        } = this, fD = this.CI / 2, ID = fD * Math.sqrt(3), BD = DD.data, GD = DD.length;
        let hD = 0;
        for (let KD = 0; KD < GD; KD++) {
          const DD = BD[KD],
            zD = DD._noaFaceGroups;
          if (zD && (DD._noaFaceEpoch !== AD || DD._noaFaceMaterial !== DD.material)) {
            DD._noaFaceEpoch = AD, DD._noaFaceMaterial = DD.material;
            const wD = DD.QE,
              KD = wD && 1 === wD.length ? wD[0] : null;
            let gD = -1;
            if (rD && KD && (0, pD.q)(DD.material)) {
              const wD = DD.position,
                pD = LD.x - wD.x,
                KD = LD.y - wD.y,
                rD = LD.z - wD.z,
                cD = pD - fD,
                AD = KD - fD,
                UD = rD - fD,
                BD = Math.sqrt(cD * cD + AD * AD + UD * UD) + ID;
              gD = (0, sD.k)(zD, pD, KD, rD, (0, sD.f)(BD, RD))
            }
            if (KD && gD !== DD._noaFaceMask) {
              DD._noaFaceMask = gD;
              let wD = 0,
                sD = zD[pD.e]; - 1 !== gD && (sD = cD(zD, gD, UD), wD = UD[0]), DD._noaFaceCount = sD, KD.indexStart = 6 * wD, KD.indexCount = 6 * sD, KD.setBoundingInfo(DD.FW())
            }
          }
          zD && 0 === DD._noaFaceCount || (BD[hD++] = DD)
        }
        DD.length = hD
      }
    }
  },
  37527: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => cD,
      f: () => LD
    });
    const pD = new WeakSet;
    let sD = 0;
    const KD = new Set;

    function rD(DD, zD) {
      DD._data = zD
    }

    function LD(DD) {
      var zD, wD;
      (null !== (zD = null === (wD = DD.getBuffer()) || void 0 === wD ? void 0 : wD.bA) && void 0 !== zD ? zD : 0) > 0 && (pD.add(DD), 0 === sD ? rD(DD, null) : KD.add(DD))
    }

    function cD(DD) {
      sD++;
      for (const wD of function(DD) {
          const zD = new Set;
          for (const sD of DD) {
            const DD = sD.geometry;
            for (const sD of Object.values(null !== (wD = null === DD || void 0 === DD ? void 0 : DD.getVertexBuffers()) && void 0 !== wD ? wD : {})) {
              var wD;
              const DD = sD.getWrapperBuffer();
              pD.has(DD) && zD.add(DD)
            }
          }
          return zD
        }(DD)) wD.getData() || gD(wD), KD.add(wD);
      let zD = !0;
      return () => {
        if (zD && (zD = !1, sD--, 0 === sD)) {
          for (const DD of KD) rD(DD, null);
          KD.clear()
        }
      }
    }

    function gD(DD) {
      const zD = DD.getBuffer();
      if (!zD || !(zD.bA > 0)) return;
      const wD = DD._engine,
        pD = new Uint8Array(zD.bA);
      wD.bindArrayBuffer(zD), wD._gl.getBufferSubData(wD._gl.ARRAY_BUFFER, 0, pD), wD._resetVertexBufferBinding(), rD(DD, pD)
    }
  },
  37535: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => rD,
      e: () => KD,
      g: () => cD,
      j: () => pD,
      k: () => LD,
      o: () => sD,
      q: () => gD
    });
    const pD = 6,
      sD = [0, 2, 4, 1, 3, 5, 0, 2],
      KD = 6,
      rD = [1, 0, 3, 2, 5, 4];
    for (let RD = KD; RD < sD.length; RD++)
      if (sD[RD] !== sD[RD - KD]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const LD = sD.length + 1,
      cD = (() => {
        const DD = [];
        for (let zD = 0; zD < KD; zD++) DD[sD[zD]] = zD;
        return DD
      })();

    function gD(DD) {
      return !!DD && DD.backFaceCulling && (0 === DD.transparencyMode || 1 === DD.transparencyMode)
    }
  },
  37550: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => LD,
      f: () => cD,
      j: () => RD,
      k: () => gD,
      m: () => ID
    });
    var pD = wD(37535);
    const sD = 1 / 16,
      KD = 1 / 64,
      rD = 2048;
    pD.j;

    function LD(DD, zD, wD) {
      return Math.min(Math.abs(DD[0] * zD), Math.abs(DD[5] * wD)) / 2
    }

    function cD(DD, zD) {
      return sD + KD * DD * DD / zD
    }

    function gD(DD, zD, wD, sD, KD) {
      const rD = pD.k;
      return RD(DD[rD], DD[rD + 1], DD[rD + 2], DD[rD + 3], DD[rD + 4], DD[rD + 5], zD, wD, sD, KD)
    }

    function RD(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD) {
      return (rD <= DD - gD ? 0 : 1) | (rD >= zD + gD ? 0 : 2) | (LD <= wD - gD ? 0 : 4) | (LD >= pD + gD ? 0 : 8) | (cD <= sD - gD ? 0 : 16) | (cD >= KD + gD ? 0 : 32)
    }
    const AD = (() => {
        const DD = [];
        for (let zD = 0; zD < pD.o.length; zD++) {
          let wD = 0;
          for (let sD = zD + 1; sD <= pD.o.length; sD++) {
            const KD = 1 << pD.o[sD - 1];
            if (wD & KD) break;
            wD |= KD, DD.push({
              start: zD,
              end: sD,
              Yp: wD
            })
          }
        }
        return DD
      })(),
      UD = [];

    function fD(DD, zD) {
      const wD = pD.g[zD];
      return DD[wD + 1] - DD[wD]
    }

    function ID(DD, zD, wD) {
      let sD = 0;
      for (let rD = 0; rD < pD.j; rD++) fD(DD, rD) > 0 && (sD |= 1 << rD);
      if (0 === (zD &= sD)) return 0;
      if (zD === sD) return wD[0] = 0, wD[1] = DD[pD.e], 1;
      let KD = null,
        LD = 1 / 0;
      for (const gD of function(DD) {
          let zD = UD[DD];
          if (zD) return zD;
          const wD = new Map,
            pD = (DD, zD) => {
              const pD = 4 * DD + zD.length / 2;
              wD.has(pD) || wD.set(pD, {
                Yp: DD,
                windows: zD
              })
            };
          for (const KD of AD)
            if ((KD.Yp & DD) === DD && pD(KD.Yp, [KD.start, KD.end]), 0 !== (KD.Yp & DD))
              for (const zD of AD) zD.start < KD.end || 0 !== (KD.Yp & zD.Yp) || 0 === (zD.Yp & DD) || ((KD.Yp | zD.Yp) & DD) !== DD || pD(KD.Yp | zD.Yp, [KD.start, KD.end, zD.start, zD.end]);
          const sD = [...wD.values()];
          return zD = sD.filter((DD => !sD.some((zD => zD !== DD && (zD.Yp & DD.Yp) === zD.Yp && zD.windows.length <= DD.windows.length)))), UD[DD] = zD, zD
        }(zD)) {
        let wD = (gD.windows.length / 2 - 1) * rD;
        const cD = gD.Yp & ~zD & sD;
        for (let zD = 0; zD < pD.j; zD++) cD & 1 << zD && (wD += fD(DD, zD));
        wD < LD && (KD = gD, LD = wD)
      }
      const cD = KD.windows;
      for (let pD = 0; pD < cD.length; pD += 2) {
        const zD = DD[cD[pD]];
        wD[pD] = zD, wD[pD + 1] = DD[cD[pD + 1]] - zD
      }
      return cD.length / 2
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);