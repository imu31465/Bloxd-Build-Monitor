export const id = 236;
export const ids = [236];
export const modules = {
  40899: (CC, zC, ZC) => {
    ZC.d(zC, {
      noaDevTools: () => WC
    });
    var QC = ZC(37404),
      wC = ZC(37394),
      bC = ZC(2753),
      nC = ZC(1645),
      fC = ZC(40805);

    function oC(CC) {
      const {
        Vg: zC
      } = CC, ZC = zC.engine, QC = {
        width: ZC.getRenderWidth(),
        height: ZC.getRenderHeight()
      };
      return {
        canvas: ZC.getRenderingCanvas(),
        maxTextureSize: ZC.getCaps().maxTextureSize,
        drawing: () => !CC.kR,
        resize: (CC, zC) => {
          ZC.setSize(CC, zC)
        },
        restoreSize: () => {
          ZC.setSize(QC.width, QC.height), zC.resize()
        },
        onFrameDrawn: zC => (CC.on("afterRender", zC), () => {
          CC.off("afterRender", zC)
        })
      }
    }
    var qC = ZC(34040);

    function FC(CC, zC) {
      let {
        width: qC,
        height: FC,
        colouring: WC
      } = zC;
      const NC = "normals" === WC,
        MC = "depth" === WC;
      return new Promise((zC => {
        try {
          const gC = (0, bC.e)();
          if (gC.Vg.CS) return "screenshot" !== CC || null !== WC ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void zC()) : void(0, fC.e)(oC(gC), qC, FC).finally(zC);
          const SC = gC.Vg.engine,
            pC = gC.Vg.Km(),
            PC = qC,
            GC = FC;
          Promise.all([Promise.all([ZC.e(254), ZC.e(255), ZC.e(233)]).then((() => ZC(60923))), Promise.all([ZC.e(232), ZC.e(231), ZC.e(254), ZC.e(255), ZC.e(252), ZC.e(256), ZC.e(259), ZC.e(311), ZC.e(237)]).then((() => ZC(60925))), Promise.all([ZC.e(232), ZC.e(231), ZC.e(254), ZC.e(255), ZC.e(252), ZC.e(262), ZC.e(256), ZC.e(264), ZC.e(239)]).then((() => ZC(60929))), ZC.e(352).then((() => ZC(60932))), Promise.all([ZC.e(231), ZC.e(227)]).then((() => ZC(36961))), ZC.e(253).then((() => ZC(60938))), ZC.e(234).then((() => ZC(60944)))]).then((bC => {
            const {
              CreateScreenshotUsingRenderTarget: fC
            } = bC[1], {
              ShaderMaterial: oC
            } = bC[2], {
              ShaderLanguage: qC
            } = bC[3], {
              Eg: FC
            } = bC[4], {
              registerDevtoolsShader: WC
            } = bC[6], gC = qC.GLSL, RC = new Map, AC = pC.meshes.filter((CC => CC.material));
            let xC = !1,
              JC = null;

            function IC() {
              var CC;
              xC && (xC = !1, (0, QC.g)(pC.meshes, !1)), null === (CC = JC) || void 0 === CC || CC(), JC = null, AC.forEach((CC => {
                const zC = RC.get(CC);
                zC && (CC.material = zC)
              }))
            }
            if (NC) {
              const CC = [],
                zC = [];
              AC.forEach((ZC => {
                const QC = ZC.name.toLowerCase(),
                  wC = ZC.WE().boundingBox.center,
                  bC = pC.activeCamera.position.subtract(wC).length();
                QC.includes("sky") || QC.includes("background") || QC.includes("environment") || bC > 1e3 ? zC.push(ZC) : CC.push(ZC)
              })), WC("devtoolsNormal", gC);
              const ZC = new oC("normalMaterial", pC, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: gC
              });
              WC("devtoolsWhite", gC);
              const QC = new oC("whiteMaterial", pC, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: gC
              });
              CC.forEach((CC => {
                RC.set(CC, CC.material), CC.material = ZC
              })), zC.forEach((CC => {
                RC.set(CC, CC.material), CC.material = QC
              }))
            } else if (MC) {
              WC("devtoolsDepth", gC);
              const CC = pC.activeCamera.position;
              let zC = 0,
                ZC = 1 / 0;
              AC.forEach((QC => {
                const wC = QC.name.toLowerCase();
                if (wC.includes("sky") || wC.includes("background") || wC.includes("environment")) return;
                const bC = QC.WE().boundingBox.center,
                  nC = FC.TransformCoordinates(bC, QC.getWorldMatrix()),
                  fC = CC.subtract(nC).length();
                fC > 1e3 || (zC = Math.max(zC, fC), ZC = Math.min(ZC, fC))
              }));
              const QC = zC - ZC;
              zC += .1 * QC, ZC = Math.max(0, ZC - .1 * QC), console.log(`Depth range: min=${ZC.toFixed(2)}, max=${zC.toFixed(2)}, range=${QC.toFixed(2)}`), QC < 1 && (zC = ZC + 10);
              const wC = new oC("depthMaterial", pC, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: gC
              });
              wC.setVector3("cameraPosition", CC), wC.setFloat("maxDepth", zC), wC.setFloat("minDepth", ZC), AC.forEach((CC => {
                RC.set(CC, CC.material), CC.material = wC
              }))
            }
            if ((0, QC.g)(pC.meshes, !0), xC = !0, "glb" === CC && (JC = (0, wC.c)(pC.meshes)), "screenshot" === CC) {
              let CC = `bloxd-screenshot-${PC}x${GC}-${Date.now()}.png`;
              NC ? CC = `bloxd-screenshot-normals-${PC}x${GC}-${Date.now()}.png` : MC && (CC = `bloxd-screenshot-depth-${PC}x${GC}-${Date.now()}.png`), fC(SC, pC.activeCamera, {
                width: PC,
                height: GC
              }, (function(ZC) {
                IC(), fetch(ZC).then((function(CC) {
                  return CC.blob()
                })).then((function(ZC) {
                  (0, nC.downloadBlob)(ZC, CC), zC()
                })).catch((function(CC) {
                  console.error("Error processing screenshot:", CC), zC()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), IC(), zC()
              }))
            } else {
              let CC = "sS";
              NC ? CC = "scene-normals" : MC && (CC = "scene-depth"), NC || MC ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: CC
                  } = await Promise.all([ZC.e(232), ZC.e(231), ZC.e(254), ZC.e(255), ZC.e(252), ZC.e(262), ZC.e(261), ZC.e(238)]).then((() => ZC(40092))), {
                    Color3: zC
                  } = await Promise.all([ZC.e(232), ZC.e(235)]).then((() => ZC(37138))), QC = [], wC = [];
                  if (AC.forEach((CC => {
                      const zC = CC.name.toLowerCase(),
                        ZC = CC.WE().boundingBox.center,
                        bC = pC.activeCamera.position.subtract(ZC).length();
                      zC.includes("sky") || zC.includes("background") || zC.includes("environment") || bC > 1e3 ? wC.push(CC) : QC.push(CC)
                    })), NC) QC.forEach(((ZC, QC) => {
                    const wC = ZC.getVerticesData("normal");
                    if (wC) {
                      const bC = [];
                      for (let CC = 0; CC < wC.length; CC += 3) {
                        const zC = Math.abs(wC[CC]),
                          ZC = Math.abs(wC[CC + 1]),
                          QC = Math.abs(wC[CC + 2]);
                        bC.push(zC, ZC, QC, 1)
                      }
                      ZC.setVerticesData("color", bC);
                      const nC = new CC(`vertexColorMat_${QC}`, pC);
                      nC.disableLighting = !0, nC.emissiveColor = new zC(1, 1, 1), nC.specularColor = new zC(0, 0, 0), ZC.material = nC
                    }
                  })), wC.forEach(((ZC, QC) => {
                    const wC = ZC.getVerticesData("position");
                    if (wC) {
                      const bC = [],
                        nC = wC.length / 3;
                      for (let CC = 0; CC < nC; CC++) bC.push(1, 1, 1, 1);
                      ZC.setVerticesData("color", bC);
                      const fC = new CC(`whiteMat_${QC}`, pC);
                      fC.disableLighting = !0, fC.emissiveColor = new zC(1, 1, 1), fC.specularColor = new zC(0, 0, 0), ZC.material = fC
                    }
                  }));
                  else if (MC) {
                    const ZC = pC.activeCamera.position;
                    let wC = 0,
                      bC = 1 / 0;
                    QC.forEach((CC => {
                      const zC = CC.WE().boundingBox.center,
                        QC = FC.TransformCoordinates(zC, CC.getWorldMatrix()),
                        nC = ZC.subtract(QC).length();
                      wC = Math.max(wC, nC), bC = Math.min(bC, nC)
                    }));
                    const nC = wC - bC;
                    wC += .1 * nC, bC = Math.max(0, bC - .1 * nC), nC < 1 && (wC = bC + 10), AC.forEach(((QC, nC) => {
                      const fC = QC.name.toLowerCase(),
                        oC = QC.WE().boundingBox.center,
                        qC = FC.TransformCoordinates(oC, QC.getWorldMatrix()),
                        WC = ZC.subtract(qC).length();
                      if (!(fC.includes("sky") || fC.includes("background") || fC.includes("environment") || WC > 1e3)) {
                        const ZC = 1 - Math.min(Math.max((WC - bC) / (wC - bC), 0), 1),
                          fC = new CC(`depthMat_${nC}`, pC);
                        fC.diffuseColor = new zC(ZC, ZC, ZC), fC.specularColor = new zC(0, 0, 0), QC.material = fC
                      }
                    }))
                  }
                })().then((() => Promise.all([ZC.e(232), ZC.e(231), ZC.e(254), ZC.e(255), ZC.e(252), ZC.e(262), ZC.e(256), ZC.e(261), ZC.e(259), ZC.e(251), ZC.e(264), ZC.e(274), ZC.e(311), ZC.e(244), ZC.e(263), ZC.e(230)]).then((() => ZC(60950))))).then((zC => zC.GLTF2Export.GLBAsync(pC, CC))).then((CC => {
                  IC(), CC.downloadFiles(), zC()
                })).catch((CC => {
                  console.error("Error exporting GLB:", CC), IC(), zC()
                }))
              }), 100) : Promise.all([ZC.e(232), ZC.e(231), ZC.e(254), ZC.e(255), ZC.e(252), ZC.e(262), ZC.e(256), ZC.e(261), ZC.e(259), ZC.e(251), ZC.e(264), ZC.e(274), ZC.e(311), ZC.e(244), ZC.e(263), ZC.e(230)]).then((() => ZC(60950))).then((ZC => {
                ZC.GLTF2Export.GLBAsync(pC, CC).then((CC => {
                  IC(), CC.downloadFiles(), zC()
                })).catch((CC => {
                  console.error("Error exporting GLB:", CC), IC(), zC()
                }))
              })).catch((CC => {
                console.error("Error importing serializers:", CC), IC(), zC()
              }))
            }
          })).catch((CC => {
            console.error("Error downloading the scene:", CC), zC()
          }))
        } catch (gC) {
          console.error("Error taking screenshot:", gC), zC()
        }
      }))
    }
    const WC = new class {
      constructor() {
        this.tools = qC.ALL_DEV_TOOLS
      }
      downloadScene(CC, zC) {
        return FC(CC, zC)
      }
      async setAmbientLightIntensity(CC) {
        const {
          Color3: zC
        } = await Promise.all([ZC.e(232), ZC.e(235)]).then((() => ZC(37138)));
        (0, bC.e)().Vg.Km().ambientColor = zC.FromArray([CC, CC, CC])
      }
      capturePhoto(CC, zC, ZC) {
        return function(CC, zC, ZC, QC) {
          return (0, fC.d)(oC(CC), zC, ZC, QC)
        }((0, bC.e)(), CC, zC, ZC)
      }
    }
  },
  40805: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => fC,
      e: () => oC
    });
    var QC = ZC(1664);
    const wC = 33177600,
      bC = 3e4;
    let nC = !1;

    function fC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: fC = 1,
        type: oC = "image/png",
        quality: qC
      } = QC;
      if (!CC.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (nC) return Promise.reject(new Error("A screenshot is already being taken"));
      nC = !0;
      const FC = function(CC, zC, ZC) {
        const QC = Math.max(1, CC),
          bC = Math.max(1, zC),
          nC = Math.min(1, ZC / Math.max(QC, bC), Math.sqrt(wC / (QC * bC)));
        return {
          width: Math.max(1, Math.floor(QC * nC)),
          height: Math.max(1, Math.floor(bC * nC))
        }
      }(zC, ZC, CC.maxTextureSize);
      return CC.resize(FC.width, FC.height, fC * FC.width / Math.max(1, zC)), new Promise(((zC, ZC) => {
        let QC, wC = 2,
          fC = null;
        const FC = () => {
          var zC;
          nC = !1, null === (zC = fC) || void 0 === zC || zC(), clearTimeout(QC), CC.restoreSize()
        };
        QC = setTimeout((() => {
          FC(), ZC(new Error("No frame was drawn to capture"))
        }), bC), fC = CC.onFrameDrawn((() => {
          if (wC--, wC > 0) return;
          const {
            canvas: QC
          } = CC, bC = {
            width: QC.width,
            height: QC.height
          };
          try {
            QC.toBlob((CC => {
              CC ? zC({
                blob: CC,
                ...bC
              }) : ZC(new Error("The canvas gave no image"))
            }), oC, qC)
          } catch (nC) {
            ZC(nC)
          } finally {
            FC()
          }
        }))
      }))
    }
    async function oC(CC, zC, ZC) {
      try {
        const wC = await fC(CC, zC, ZC);
        (0, QC.e)(wC.blob, `bloxd-screenshot-${wC.width}x${wC.height}-${Date.now()}.png`)
      } catch (wC) {
        console.error("Error taking screenshot:", wC)
      }
    }
  },
  37404: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => qC,
      g: () => fC,
      i: () => nC
    });
    var QC = ZC(37398),
      wC = ZC(37408);
    let bC = 0;

    function nC(CC, zC) {
      const ZC = CC;
      ZC._noaFaceGroups = null !== zC && void 0 !== zC ? zC : null, ZC._noaFaceEpoch = -1, ZC._noaFaceMask = -1, ZC._noaFaceCount = -1, ZC._noaFaceMaterial = null;
      const QC = CC.Zx;
      QC && 1 === QC.length && (QC[0].indexStart = 0, QC[0].indexCount = CC.getTotalIndices())
    }

    function fC(CC, zC) {
      if (zC) {
        bC++;
        for (const zC of CC) {
          const CC = zC._noaFaceGroups;
          CC && nC(zC, CC)
        }
      } else bC = Math.max(0, bC - 1)
    }

    function oC(CC, zC, ZC) {
      let wC = -1,
        bC = 0;
      for (let nC = 0; nC < QC.d; nC++) {
        const ZC = CC[nC],
          fC = CC[nC + 1];
        fC > ZC && zC & 1 << QC.b[nC] && (wC < 0 && (wC = ZC), bC = fC)
      }
      return wC < 0 ? (ZC[0] = 0, ZC[1] = 0, 0) : (ZC[0] = wC, ZC[1] = bC - wC, bC - wC)
    }
    class qC {
      constructor(CC, zC) {
        this.Ig = CC, this.engine = zC, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(CC, zC) {
        if (!zC) return;
        const ZC = zC.getProjectionMatrix().m,
          nC = 0 === bC && 0 === ZC[15],
          fC = zC.globalPosition,
          {
            engine: qC
          } = this,
          FC = nC ? (0, wC.c)(ZC, qC.getRenderWidth(), qC.getRenderHeight()) : 0;
        fC.x === this.eyeX && fC.y === this.eyeY && fC.z === this.eyeZ && FC === this.focalPx && nC === this.culling || (this.epoch++, this.eyeX = fC.x, this.eyeY = fC.y, this.eyeZ = fC.z, this.focalPx = FC, this.culling = nC);
        const {
          epoch: WC,
          range: NC
        } = this, MC = this.Ig / 2, gC = MC * Math.sqrt(3), SC = CC.data, pC = CC.length;
        let PC = 0;
        for (let bC = 0; bC < pC; bC++) {
          const CC = SC[bC],
            zC = CC._noaFaceGroups;
          if (zC && (CC._noaFaceEpoch !== WC || CC._noaFaceMaterial !== CC.material)) {
            CC._noaFaceEpoch = WC, CC._noaFaceMaterial = CC.material;
            const ZC = CC.Zx,
              bC = ZC && 1 === ZC.length ? ZC[0] : null;
            let qC = -1;
            if (nC && bC && (0, QC.r)(CC.material)) {
              const ZC = CC.position,
                QC = fC.x - ZC.x,
                bC = fC.y - ZC.y,
                nC = fC.z - ZC.z,
                oC = QC - MC,
                WC = bC - MC,
                NC = nC - MC,
                SC = Math.sqrt(oC * oC + WC * WC + NC * NC) + gC;
              qC = (0, wC.i)(zC, QC, bC, nC, (0, wC.e)(SC, FC))
            }
            if (bC && qC !== CC._noaFaceMask) {
              CC._noaFaceMask = qC;
              let ZC = 0,
                wC = zC[QC.d]; - 1 !== qC && (wC = oC(zC, qC, NC), ZC = NC[0]), CC._noaFaceCount = wC, bC.indexStart = 6 * ZC, bC.indexCount = 6 * wC, bC.setBoundingInfo(CC.WE())
            }
          }
          zC && 0 === CC._noaFaceCount || (SC[PC++] = CC)
        }
        CC.length = PC
      }
    }
  },
  37394: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => oC,
      g: () => fC
    });
    const QC = new WeakSet;
    let wC = 0;
    const bC = new Set;

    function nC(CC, zC) {
      CC._data = zC
    }

    function fC(CC) {
      var zC, ZC;
      (null !== (zC = null === (ZC = CC.getBuffer()) || void 0 === ZC ? void 0 : ZC.HW) && void 0 !== zC ? zC : 0) > 0 && (QC.add(CC), 0 === wC ? nC(CC, null) : bC.add(CC))
    }

    function oC(CC) {
      wC++;
      for (const ZC of function(CC) {
          const zC = new Set;
          for (const wC of CC) {
            const CC = wC.geometry;
            for (const wC of Object.values(null !== (ZC = null === CC || void 0 === CC ? void 0 : CC.getVertexBuffers()) && void 0 !== ZC ? ZC : {})) {
              var ZC;
              const CC = wC.getWrapperBuffer();
              QC.has(CC) && zC.add(CC)
            }
          }
          return zC
        }(CC)) ZC.getData() || qC(ZC), bC.add(ZC);
      let zC = !0;
      return () => {
        if (zC && (zC = !1, wC--, 0 === wC)) {
          for (const CC of bC) nC(CC, null);
          bC.clear()
        }
      }
    }

    function qC(CC) {
      const zC = CC.getBuffer();
      if (!zC || !(zC.HW > 0)) return;
      const ZC = CC._engine,
        QC = new Uint8Array(zC.HW);
      ZC.bindArrayBuffer(zC), ZC._gl.getBufferSubData(ZC._gl.ARRAY_BUFFER, 0, QC), ZC._resetVertexBufferBinding(), nC(CC, QC)
    }
  },
  37398: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => nC,
      d: () => bC,
      g: () => oC,
      j: () => QC,
      k: () => fC,
      n: () => wC,
      r: () => qC
    });
    const QC = 6,
      wC = [0, 2, 4, 1, 3, 5, 0, 2],
      bC = 6,
      nC = [1, 0, 3, 2, 5, 4];
    for (let FC = bC; FC < wC.length; FC++)
      if (wC[FC] !== wC[FC - bC]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const fC = wC.length + 1,
      oC = (() => {
        const CC = [];
        for (let zC = 0; zC < bC; zC++) CC[wC[zC]] = zC;
        return CC
      })();

    function qC(CC) {
      return !!CC && CC.backFaceCulling && (0 === CC.transparencyMode || 1 === CC.transparencyMode)
    }
  },
  37408: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => fC,
      e: () => oC,
      f: () => FC,
      i: () => qC,
      k: () => gC
    });
    var QC = ZC(37398);
    const wC = 1 / 16,
      bC = 1 / 64,
      nC = 2048;
    QC.j;

    function fC(CC, zC, ZC) {
      return Math.min(Math.abs(CC[0] * zC), Math.abs(CC[5] * ZC)) / 2
    }

    function oC(CC, zC) {
      return wC + bC * CC * CC / zC
    }

    function qC(CC, zC, ZC, wC, bC) {
      const nC = QC.k;
      return FC(CC[nC], CC[nC + 1], CC[nC + 2], CC[nC + 3], CC[nC + 4], CC[nC + 5], zC, ZC, wC, bC)
    }

    function FC(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC) {
      return (nC <= CC - qC ? 0 : 1) | (nC >= zC + qC ? 0 : 2) | (fC <= ZC - qC ? 0 : 4) | (fC >= QC + qC ? 0 : 8) | (oC <= wC - qC ? 0 : 16) | (oC >= bC + qC ? 0 : 32)
    }
    const WC = (() => {
        const CC = [];
        for (let zC = 0; zC < QC.n.length; zC++) {
          let ZC = 0;
          for (let wC = zC + 1; wC <= QC.n.length; wC++) {
            const bC = 1 << QC.n[wC - 1];
            if (ZC & bC) break;
            ZC |= bC, CC.push({
              start: zC,
              end: wC,
              tQ: ZC
            })
          }
        }
        return CC
      })(),
      NC = [];

    function MC(CC, zC) {
      const ZC = QC.g[zC];
      return CC[ZC + 1] - CC[ZC]
    }

    function gC(CC, zC, ZC) {
      let wC = 0;
      for (let nC = 0; nC < QC.j; nC++) MC(CC, nC) > 0 && (wC |= 1 << nC);
      if (0 === (zC &= wC)) return 0;
      if (zC === wC) return ZC[0] = 0, ZC[1] = CC[QC.d], 1;
      let bC = null,
        fC = 1 / 0;
      for (const qC of function(CC) {
          let zC = NC[CC];
          if (zC) return zC;
          const ZC = new Map,
            QC = (CC, zC) => {
              const QC = 4 * CC + zC.length / 2;
              ZC.has(QC) || ZC.set(QC, {
                tQ: CC,
                windows: zC
              })
            };
          for (const bC of WC)
            if ((bC.tQ & CC) === CC && QC(bC.tQ, [bC.start, bC.end]), 0 !== (bC.tQ & CC))
              for (const zC of WC) zC.start < bC.end || 0 !== (bC.tQ & zC.tQ) || 0 === (zC.tQ & CC) || ((bC.tQ | zC.tQ) & CC) !== CC || QC(bC.tQ | zC.tQ, [bC.start, bC.end, zC.start, zC.end]);
          const wC = [...ZC.values()];
          return zC = wC.filter((CC => !wC.some((zC => zC !== CC && (zC.tQ & CC.tQ) === zC.tQ && zC.windows.length <= CC.windows.length)))), NC[CC] = zC, zC
        }(zC)) {
        let ZC = (qC.windows.length / 2 - 1) * nC;
        const oC = qC.tQ & ~zC & wC;
        for (let zC = 0; zC < QC.j; zC++) oC & 1 << zC && (ZC += MC(CC, zC));
        ZC < fC && (bC = qC, fC = ZC)
      }
      const oC = bC.windows;
      for (let QC = 0; QC < oC.length; QC += 2) {
        const zC = CC[oC[QC]];
        ZC[QC] = zC, ZC[QC + 1] = CC[oC[QC + 1]] - zC
      }
      return oC.length / 2
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);