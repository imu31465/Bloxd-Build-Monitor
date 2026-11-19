export const id = 230;
export const ids = [230];
export const modules = {
  40148: (DD, CD, cD) => {
    cD.d(CD, {
      noaDevTools: () => BD
    });
    var ID = cD(36930),
      pD = cD(36917),
      iD = cD(2642),
      fD = cD(1701);

    function bD(DD) {
      const {
        XZ: CD
      } = DD, cD = CD.engine, ID = {
        width: cD.getRenderWidth(),
        height: cD.getRenderHeight()
      };
      return {
        canvas: cD.getRenderingCanvas(),
        maxTextureSize: cD.getCaps().maxTextureSize,
        drawing: () => !DD.fn,
        resize: (DD, CD) => {
          cD.setSize(DD, CD)
        },
        restoreSize: () => {
          cD.setSize(ID.width, ID.height), CD.resize()
        },
        onFrameDrawn: CD => (DD.on("afterRender", CD), () => {
          DD.off("afterRender", CD)
        })
      }
    }
    var QD = cD(40122),
      wD = cD(8925);

    function SD(DD, CD) {
      let {
        width: wD,
        height: SD,
        colouring: BD
      } = CD;
      const yD = "normals" === BD,
        MD = "depth" === BD;
      return new Promise((CD => {
        try {
          const tD = (0, iD.i)();
          if (tD.XZ.mZ) return "screenshot" !== DD || null !== BD ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void CD()) : void(0, QD.d)(bD(tD), wD, SD).finally(CD);
          const ZD = tD.XZ.engine,
            oD = tD.XZ.hq(),
            vD = wD,
            ND = SD;
          Promise.all([Promise.all([cD.e(244), cD.e(245), cD.e(227)]).then((() => cD(60375))), Promise.all([cD.e(226), cD.e(225), cD.e(244), cD.e(245), cD.e(242), cD.e(246), cD.e(249), cD.e(301), cD.e(231)]).then((() => cD(60379))), Promise.all([cD.e(226), cD.e(225), cD.e(244), cD.e(245), cD.e(242), cD.e(252), cD.e(246), cD.e(254), cD.e(233)]).then((() => cD(60383))), cD.e(344).then((() => cD(60391))), Promise.all([cD.e(225), cD.e(221)]).then((() => cD(36440))), cD.e(243).then((() => cD(60393))), cD.e(228).then((() => cD(60399)))]).then((iD => {
            const {
              CreateScreenshotUsingRenderTarget: bD
            } = iD[1], {
              ShaderMaterial: QD
            } = iD[2], {
              ShaderLanguage: wD
            } = iD[3], {
              cZ: SD
            } = iD[4], {
              registerDevtoolsShader: BD
            } = iD[6], tD = wD.GLSL, gD = new Map, XD = oD.meshes.filter((DD => DD.material));
            let mD = !1,
              nD = null;

            function OD() {
              var DD;
              mD && (mD = !1, (0, ID.e)(oD.meshes, !1)), null === (DD = nD) || void 0 === DD || DD(), nD = null, XD.forEach((DD => {
                const CD = gD.get(DD);
                CD && (DD.material = CD)
              }))
            }
            if (yD) {
              const DD = [],
                CD = [];
              XD.forEach((cD => {
                const ID = cD.name.toLowerCase(),
                  pD = cD.VJ().boundingBox.center,
                  iD = oD.activeCamera.position.subtract(pD).length();
                ID.includes("sky") || ID.includes("background") || ID.includes("environment") || iD > 1e3 ? CD.push(cD) : DD.push(cD)
              })), BD("devtoolsNormal", tD);
              const cD = new QD("normalMaterial", oD, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: tD
              });
              BD("devtoolsWhite", tD);
              const ID = new QD("whiteMaterial", oD, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: tD
              });
              DD.forEach((DD => {
                gD.set(DD, DD.material), DD.material = cD
              })), CD.forEach((DD => {
                gD.set(DD, DD.material), DD.material = ID
              }))
            } else if (MD) {
              BD("devtoolsDepth", tD);
              const DD = oD.activeCamera.position;
              let CD = 0,
                cD = 1 / 0;
              XD.forEach((ID => {
                const pD = ID.name.toLowerCase();
                if (pD.includes("sky") || pD.includes("background") || pD.includes("environment")) return;
                const iD = ID.VJ().boundingBox.center,
                  fD = SD.TransformCoordinates(iD, ID.getWorldMatrix()),
                  bD = DD.subtract(fD).length();
                bD > 1e3 || (CD = Math.max(CD, bD), cD = Math.min(cD, bD))
              }));
              const ID = CD - cD;
              CD += .1 * ID, cD = Math.max(0, cD - .1 * ID), console.log(`Depth range: min=${cD.toFixed(2)}, max=${CD.toFixed(2)}, range=${ID.toFixed(2)}`), ID < 1 && (CD = cD + 10);
              const pD = new QD("depthMaterial", oD, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: tD
              });
              pD.setVector3("cameraPosition", DD), pD.setFloat("maxDepth", CD), pD.setFloat("minDepth", cD), XD.forEach((DD => {
                gD.set(DD, DD.material), DD.material = pD
              }))
            }
            if ((0, ID.e)(oD.meshes, !0), mD = !0, "glb" === DD && (nD = (0, pD.b)(oD.meshes)), "screenshot" === DD) {
              let DD = `bloxd-screenshot-${vD}x${ND}-${Date.now()}.png`;
              yD ? DD = `bloxd-screenshot-normals-${vD}x${ND}-${Date.now()}.png` : MD && (DD = `bloxd-screenshot-depth-${vD}x${ND}-${Date.now()}.png`), bD(ZD, oD.activeCamera, {
                width: vD,
                height: ND
              }, (function(cD) {
                OD(), fetch(cD).then((function(DD) {
                  return DD.blob()
                })).then((function(cD) {
                  (0, fD.downloadBlob)(cD, DD), CD()
                })).catch((function(DD) {
                  console.error("Error processing screenshot:", DD), CD()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), OD(), CD()
              }))
            } else {
              let DD = "wo";
              yD ? DD = "scene-normals" : MD && (DD = "scene-depth"), yD || MD ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: DD
                  } = await Promise.all([cD.e(226), cD.e(225), cD.e(244), cD.e(245), cD.e(242), cD.e(252), cD.e(251), cD.e(232)]).then((() => cD(39396))), {
                    Color3: CD
                  } = await Promise.all([cD.e(226), cD.e(229)]).then((() => cD(36613))), ID = [], pD = [];
                  if (XD.forEach((DD => {
                      const CD = DD.name.toLowerCase(),
                        cD = DD.VJ().boundingBox.center,
                        iD = oD.activeCamera.position.subtract(cD).length();
                      CD.includes("sky") || CD.includes("background") || CD.includes("environment") || iD > 1e3 ? pD.push(DD) : ID.push(DD)
                    })), yD) ID.forEach(((cD, ID) => {
                    const pD = cD.getVerticesData("normal");
                    if (pD) {
                      const iD = [];
                      for (let DD = 0; DD < pD.length; DD += 3) {
                        const CD = Math.abs(pD[DD]),
                          cD = Math.abs(pD[DD + 1]),
                          ID = Math.abs(pD[DD + 2]);
                        iD.push(CD, cD, ID, 1)
                      }
                      cD.setVerticesData("color", iD);
                      const fD = new DD(`vertexColorMat_${ID}`, oD);
                      fD.disableLighting = !0, fD.emissiveColor = new CD(1, 1, 1), fD.specularColor = new CD(0, 0, 0), cD.material = fD
                    }
                  })), pD.forEach(((cD, ID) => {
                    const pD = cD.getVerticesData("position");
                    if (pD) {
                      const iD = [],
                        fD = pD.length / 3;
                      for (let DD = 0; DD < fD; DD++) iD.push(1, 1, 1, 1);
                      cD.setVerticesData("color", iD);
                      const bD = new DD(`whiteMat_${ID}`, oD);
                      bD.disableLighting = !0, bD.emissiveColor = new CD(1, 1, 1), bD.specularColor = new CD(0, 0, 0), cD.material = bD
                    }
                  }));
                  else if (MD) {
                    const cD = oD.activeCamera.position;
                    let pD = 0,
                      iD = 1 / 0;
                    ID.forEach((DD => {
                      const CD = DD.VJ().boundingBox.center,
                        ID = SD.TransformCoordinates(CD, DD.getWorldMatrix()),
                        fD = cD.subtract(ID).length();
                      pD = Math.max(pD, fD), iD = Math.min(iD, fD)
                    }));
                    const fD = pD - iD;
                    pD += .1 * fD, iD = Math.max(0, iD - .1 * fD), fD < 1 && (pD = iD + 10), XD.forEach(((ID, fD) => {
                      const bD = ID.name.toLowerCase(),
                        QD = ID.VJ().boundingBox.center,
                        wD = SD.TransformCoordinates(QD, ID.getWorldMatrix()),
                        BD = cD.subtract(wD).length();
                      if (!(bD.includes("sky") || bD.includes("background") || bD.includes("environment") || BD > 1e3)) {
                        const cD = 1 - Math.min(Math.max((BD - iD) / (pD - iD), 0), 1),
                          bD = new DD(`depthMat_${fD}`, oD);
                        bD.diffuseColor = new CD(cD, cD, cD), bD.specularColor = new CD(0, 0, 0), ID.material = bD
                      }
                    }))
                  }
                })().then((() => Promise.all([cD.e(226), cD.e(225), cD.e(244), cD.e(245), cD.e(242), cD.e(252), cD.e(246), cD.e(251), cD.e(249), cD.e(241), cD.e(254), cD.e(264), cD.e(301), cD.e(236), cD.e(253), cD.e(224)]).then((() => cD(60406))))).then((CD => CD.GLTF2Export.GLBAsync(oD, DD))).then((DD => {
                  OD(), DD.downloadFiles(), CD()
                })).catch((DD => {
                  console.error("Error exporting GLB:", DD), OD(), CD()
                }))
              }), 100) : Promise.all([cD.e(226), cD.e(225), cD.e(244), cD.e(245), cD.e(242), cD.e(252), cD.e(246), cD.e(251), cD.e(249), cD.e(241), cD.e(254), cD.e(264), cD.e(301), cD.e(236), cD.e(253), cD.e(224)]).then((() => cD(60406))).then((cD => {
                cD.GLTF2Export.GLBAsync(oD, DD).then((DD => {
                  OD(), DD.downloadFiles(), CD()
                })).catch((DD => {
                  console.error("Error exporting GLB:", DD), OD(), CD()
                }))
              })).catch((DD => {
                console.error("Error importing serializers:", DD), OD(), CD()
              }))
            }
          })).catch((DD => {
            console.error("Error downloading the scene:", DD), CD()
          }))
        } catch (tD) {
          console.error("Error taking screenshot:", tD), CD()
        }
      }))
    }
    const BD = new class {
      constructor() {
        this.tools = wD.ALL_DEV_TOOLS
      }
      downloadScene(DD, CD) {
        return SD(DD, CD)
      }
      async setAmbientLightIntensity(DD) {
        const {
          Color3: CD
        } = await Promise.all([cD.e(226), cD.e(229)]).then((() => cD(36613)));
        (0, iD.i)().XZ.hq().ambientColor = CD.FromArray([DD, DD, DD])
      }
    }
  },
  40122: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => QD
    });
    var ID = cD(1728);
    const pD = 33177600,
      iD = 3e4;
    let fD = !1;

    function bD(DD, CD, cD) {
      if (!DD.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (fD) return Promise.reject(new Error("A screenshot is already being taken"));
      fD = !0;
      const ID = function(DD, CD, cD) {
        const ID = Math.max(1, DD),
          iD = Math.max(1, CD),
          fD = Math.min(1, cD / Math.max(ID, iD), Math.sqrt(pD / (ID * iD)));
        return {
          width: Math.max(1, Math.floor(ID * fD)),
          height: Math.max(1, Math.floor(iD * fD))
        }
      }(CD, cD, DD.maxTextureSize);
      return DD.resize(ID.width, ID.height), new Promise(((CD, cD) => {
        let ID, pD = 2,
          bD = null;
        const QD = () => {
          var CD;
          fD = !1, null === (CD = bD) || void 0 === CD || CD(), clearTimeout(ID), DD.restoreSize()
        };
        ID = setTimeout((() => {
          QD(), cD(new Error("No frame was drawn to capture"))
        }), iD), bD = DD.onFrameDrawn((() => {
          if (pD--, pD > 0) return;
          const {
            canvas: ID
          } = DD, iD = {
            width: ID.width,
            height: ID.height
          };
          try {
            ID.toBlob((DD => {
              DD ? CD({
                blob: DD,
                ...iD
              }) : cD(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (fD) {
            cD(fD)
          } finally {
            QD()
          }
        }))
      }))
    }
    async function QD(DD, CD, cD) {
      try {
        const pD = await bD(DD, CD, cD);
        (0, ID.c)(pD.blob, `bloxd-screenshot-${pD.width}x${pD.height}-${Date.now()}.png`)
      } catch (pD) {
        console.error("Error taking screenshot:", pD)
      }
    }
  },
  36930: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => wD,
      e: () => bD,
      i: () => fD
    });
    var ID = cD(36924),
      pD = cD(36939);
    let iD = 0;

    function fD(DD, CD) {
      const cD = DD;
      cD._noaFaceGroups = null !== CD && void 0 !== CD ? CD : null, cD._noaFaceEpoch = -1, cD._noaFaceMask = -1, cD._noaFaceCount = -1, cD._noaFaceMaterial = null;
      const ID = DD.IH;
      ID && 1 === ID.length && (ID[0].indexStart = 0, ID[0].indexCount = DD.getTotalIndices())
    }

    function bD(DD, CD) {
      if (CD) {
        iD++;
        for (const CD of DD) {
          const DD = CD._noaFaceGroups;
          DD && fD(CD, DD)
        }
      } else iD = Math.max(0, iD - 1)
    }

    function QD(DD, CD, cD) {
      let pD = -1,
        iD = 0;
      for (let fD = 0; fD < ID.e; fD++) {
        const cD = DD[fD],
          bD = DD[fD + 1];
        bD > cD && CD & 1 << ID.b[fD] && (pD < 0 && (pD = cD), iD = bD)
      }
      return pD < 0 ? (cD[0] = 0, cD[1] = 0, 0) : (cD[0] = pD, cD[1] = iD - pD, iD - pD)
    }
    class wD {
      constructor(DD, CD) {
        this.Wt = DD, this.engine = CD, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(DD, CD) {
        if (!CD) return;
        const cD = CD.getProjectionMatrix().m,
          fD = 0 === iD && 0 === cD[15],
          bD = CD.globalPosition,
          {
            engine: wD
          } = this,
          SD = fD ? (0, pD.d)(cD, wD.getRenderWidth(), wD.getRenderHeight()) : 0;
        bD.x === this.eyeX && bD.y === this.eyeY && bD.z === this.eyeZ && SD === this.focalPx && fD === this.culling || (this.epoch++, this.eyeX = bD.x, this.eyeY = bD.y, this.eyeZ = bD.z, this.focalPx = SD, this.culling = fD);
        const {
          epoch: BD,
          range: yD
        } = this, MD = this.Wt / 2, tD = MD * Math.sqrt(3), ZD = DD.data, oD = DD.length;
        let vD = 0;
        for (let iD = 0; iD < oD; iD++) {
          const DD = ZD[iD],
            CD = DD._noaFaceGroups;
          if (CD && (DD._noaFaceEpoch !== BD || DD._noaFaceMaterial !== DD.material)) {
            DD._noaFaceEpoch = BD, DD._noaFaceMaterial = DD.material;
            const cD = DD.IH,
              iD = cD && 1 === cD.length ? cD[0] : null;
            let wD = -1;
            if (fD && iD && (0, ID.t)(DD.material)) {
              const cD = DD.position,
                ID = bD.x - cD.x,
                iD = bD.y - cD.y,
                fD = bD.z - cD.z,
                QD = ID - MD,
                BD = iD - MD,
                yD = fD - MD,
                ZD = Math.sqrt(QD * QD + BD * BD + yD * yD) + tD;
              wD = (0, pD.h)(CD, ID, iD, fD, (0, pD.e)(ZD, SD))
            }
            if (iD && wD !== DD._noaFaceMask) {
              DD._noaFaceMask = wD;
              let cD = 0,
                pD = CD[ID.e]; - 1 !== wD && (pD = QD(CD, wD, yD), cD = yD[0]), DD._noaFaceCount = pD, iD.indexStart = 6 * cD, iD.indexCount = 6 * pD, iD.setBoundingInfo(DD.VJ())
            }
          }
          CD && 0 === DD._noaFaceCount || (ZD[vD++] = DD)
        }
        DD.length = vD
      }
    }
  },
  36917: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => QD,
      d: () => bD
    });
    const ID = new WeakSet;
    let pD = 0;
    const iD = new Set;

    function fD(DD, CD) {
      DD._data = CD
    }

    function bD(DD) {
      var CD, cD;
      (null !== (CD = null === (cD = DD.getBuffer()) || void 0 === cD ? void 0 : cD.LB) && void 0 !== CD ? CD : 0) > 0 && (ID.add(DD), 0 === pD ? fD(DD, null) : iD.add(DD))
    }

    function QD(DD) {
      pD++;
      for (const cD of function(DD) {
          const CD = new Set;
          for (const pD of DD) {
            const DD = pD.geometry;
            for (const pD of Object.values(null !== (cD = null === DD || void 0 === DD ? void 0 : DD.getVertexBuffers()) && void 0 !== cD ? cD : {})) {
              var cD;
              const DD = pD.getWrapperBuffer();
              ID.has(DD) && CD.add(DD)
            }
          }
          return CD
        }(DD)) cD.getData() || wD(cD), iD.add(cD);
      let CD = !0;
      return () => {
        if (CD && (CD = !1, pD--, 0 === pD)) {
          for (const DD of iD) fD(DD, null);
          iD.clear()
        }
      }
    }

    function wD(DD) {
      const CD = DD.getBuffer();
      if (!CD || !(CD.LB > 0)) return;
      const cD = DD._engine,
        ID = new Uint8Array(CD.LB);
      cD.bindArrayBuffer(CD), cD._gl.getBufferSubData(cD._gl.ARRAY_BUFFER, 0, ID), cD._resetVertexBufferBinding(), fD(DD, ID)
    }
  },
  36924: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD,
      e: () => iD,
      g: () => QD,
      k: () => ID,
      l: () => bD,
      p: () => pD,
      t: () => wD
    });
    const ID = 6,
      pD = [0, 2, 4, 1, 3, 5, 0, 2],
      iD = 6,
      fD = [1, 0, 3, 2, 5, 4];
    for (let SD = iD; SD < pD.length; SD++)
      if (pD[SD] !== pD[SD - iD]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const bD = pD.length + 1,
      QD = (() => {
        const DD = [];
        for (let CD = 0; CD < iD; CD++) DD[pD[CD]] = CD;
        return DD
      })();

    function wD(DD) {
      return !!DD && DD.backFaceCulling && (0 === DD.transparencyMode || 1 === DD.transparencyMode)
    }
  },
  36939: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => bD,
      e: () => QD,
      f: () => SD,
      h: () => wD,
      k: () => tD
    });
    var ID = cD(36924);
    const pD = 1 / 16,
      iD = 1 / 64,
      fD = 2048;
    ID.k;

    function bD(DD, CD, cD) {
      return Math.min(Math.abs(DD[0] * CD), Math.abs(DD[5] * cD)) / 2
    }

    function QD(DD, CD) {
      return pD + iD * DD * DD / CD
    }

    function wD(DD, CD, cD, pD, iD) {
      const fD = ID.l;
      return SD(DD[fD], DD[fD + 1], DD[fD + 2], DD[fD + 3], DD[fD + 4], DD[fD + 5], CD, cD, pD, iD)
    }

    function SD(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD) {
      return (fD <= DD - wD ? 0 : 1) | (fD >= CD + wD ? 0 : 2) | (bD <= cD - wD ? 0 : 4) | (bD >= ID + wD ? 0 : 8) | (QD <= pD - wD ? 0 : 16) | (QD >= iD + wD ? 0 : 32)
    }
    const BD = (() => {
        const DD = [];
        for (let CD = 0; CD < ID.p.length; CD++) {
          let cD = 0;
          for (let pD = CD + 1; pD <= ID.p.length; pD++) {
            const iD = 1 << ID.p[pD - 1];
            if (cD & iD) break;
            cD |= iD, DD.push({
              start: CD,
              end: pD,
              Ci: cD
            })
          }
        }
        return DD
      })(),
      yD = [];

    function MD(DD, CD) {
      const cD = ID.g[CD];
      return DD[cD + 1] - DD[cD]
    }

    function tD(DD, CD, cD) {
      let pD = 0;
      for (let fD = 0; fD < ID.k; fD++) MD(DD, fD) > 0 && (pD |= 1 << fD);
      if (0 === (CD &= pD)) return 0;
      if (CD === pD) return cD[0] = 0, cD[1] = DD[ID.e], 1;
      let iD = null,
        bD = 1 / 0;
      for (const wD of function(DD) {
          let CD = yD[DD];
          if (CD) return CD;
          const cD = new Map,
            ID = (DD, CD) => {
              const ID = 4 * DD + CD.length / 2;
              cD.has(ID) || cD.set(ID, {
                Ci: DD,
                windows: CD
              })
            };
          for (const iD of BD)
            if ((iD.Ci & DD) === DD && ID(iD.Ci, [iD.start, iD.end]), 0 !== (iD.Ci & DD))
              for (const CD of BD) CD.start < iD.end || 0 !== (iD.Ci & CD.Ci) || 0 === (CD.Ci & DD) || ((iD.Ci | CD.Ci) & DD) !== DD || ID(iD.Ci | CD.Ci, [iD.start, iD.end, CD.start, CD.end]);
          const pD = [...cD.values()];
          return CD = pD.filter((DD => !pD.some((CD => CD !== DD && (CD.Ci & DD.Ci) === CD.Ci && CD.windows.length <= DD.windows.length)))), yD[DD] = CD, CD
        }(CD)) {
        let cD = (wD.windows.length / 2 - 1) * fD;
        const QD = wD.Ci & ~CD & pD;
        for (let CD = 0; CD < ID.k; CD++) QD & 1 << CD && (cD += MD(DD, CD));
        cD < bD && (iD = wD, bD = cD)
      }
      const QD = iD.windows;
      for (let ID = 0; ID < QD.length; ID += 2) {
        const CD = DD[QD[ID]];
        cD[ID] = CD, cD[ID + 1] = DD[QD[ID + 1]] - CD
      }
      return QD.length / 2
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);