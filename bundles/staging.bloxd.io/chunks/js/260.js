export const id = 260;
export const ids = [260];
export const modules = {
  42389: (VV, eV, xV) => {
    xV.d(eV, {
      noaDevTools: () => ZV
    });
    var JV = xV(38630),
      YV = xV(38604),
      UV = xV(3093),
      yV = xV(1838),
      pV = xV(42290);

    function QV(VV) {
      const {
        gZ: eV
      } = VV, xV = eV.engine, JV = {
        width: xV.getRenderWidth(),
        height: xV.getRenderHeight()
      };
      return {
        canvas: xV.getRenderingCanvas(),
        maxTextureSize: xV.getCaps().maxTextureSize,
        zZ: () => !VV.DZ,
        resize: (VV, eV) => {
          xV.setSize(VV, eV)
        },
        restoreSize: () => {
          xV.setSize(JV.width, JV.height), eV.resize()
        },
        onFrameDrawn: xV => {
          const JV = () => {
            eV.qT && xV()
          };
          return VV.on("afterRender", JV), () => {
            VV.off("afterRender", JV)
          }
        }
      }
    }
    var nV = xV(35189);

    function wV(VV, eV) {
      let {
        width: nV,
        height: wV,
        colouring: ZV
      } = eV;
      const vV = "normals" === ZV,
        rV = "depth" === ZV;
      return new Promise((eV => {
        try {
          const kV = (0, UV.d)();
          if (kV.gZ.jb) return "screenshot" !== VV || null !== ZV ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void eV()) : void(0, pV.e)(QV(kV), nV, wV).finally(eV);
          const bV = kV.gZ.engine,
            EV = kV.gZ.dD(),
            BV = nV,
            jV = wV;
          Promise.all([Promise.all([xV.e(279), xV.e(280), xV.e(256)]).then((() => xV(64272))), Promise.all([xV.e(255), xV.e(254), xV.e(279), xV.e(280), xV.e(277), xV.e(281), xV.e(284), xV.e(620), xV.e(261)]).then((() => xV(64275))), Promise.all([xV.e(255), xV.e(254), xV.e(279), xV.e(280), xV.e(277), xV.e(287), xV.e(281), xV.e(289), xV.e(263)]).then((() => xV(64284))), xV.e(661).then((() => xV(64289))), Promise.all([xV.e(254), xV.e(250)]).then((() => xV(38263))), xV.e(278).then((() => xV(64298))), xV.e(259).then((() => xV(64307)))]).then((UV => {
            const {
              CreateScreenshotUsingRenderTarget: pV
            } = UV[1], {
              ShaderMaterial: QV
            } = UV[2], {
              ShaderLanguage: nV
            } = UV[3], {
              Ik: wV
            } = UV[4], {
              registerDevtoolsShader: ZV
            } = UV[6], kV = nV.GLSL, qV = new Map, tV = EV.meshes.filter((VV => VV.material));
            let FV = !1,
              TV = null;

            function PV() {
              var VV;
              FV && (FV = !1, (0, JV.i)(EV.meshes, !1)), null === (VV = TV) || void 0 === VV || VV(), TV = null, tV.forEach((VV => {
                const eV = qV.get(VV);
                eV && (VV.material = eV)
              }))
            }
            if (vV) {
              const VV = [],
                eV = [];
              tV.forEach((xV => {
                const JV = xV.name.toLowerCase(),
                  YV = xV.qL().boundingBox.center,
                  UV = EV.activeCamera.position.subtract(YV).length();
                JV.includes("sky") || JV.includes("background") || JV.includes("environment") || UV > 1e3 ? eV.push(xV) : VV.push(xV)
              })), ZV("devtoolsNormal", kV);
              const xV = new QV("normalMaterial", EV, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: kV
              });
              ZV("devtoolsWhite", kV);
              const JV = new QV("whiteMaterial", EV, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: kV
              });
              VV.forEach((VV => {
                qV.set(VV, VV.material), VV.material = xV
              })), eV.forEach((VV => {
                qV.set(VV, VV.material), VV.material = JV
              }))
            } else if (rV) {
              ZV("devtoolsDepth", kV);
              const VV = EV.activeCamera.position;
              let eV = 0,
                xV = 1 / 0;
              tV.forEach((JV => {
                const YV = JV.name.toLowerCase();
                if (YV.includes("sky") || YV.includes("background") || YV.includes("environment")) return;
                const UV = JV.qL().boundingBox.center,
                  yV = wV.TransformCoordinates(UV, JV.getWorldMatrix()),
                  pV = VV.subtract(yV).length();
                pV > 1e3 || (eV = Math.max(eV, pV), xV = Math.min(xV, pV))
              }));
              const JV = eV - xV;
              eV += .1 * JV, xV = Math.max(0, xV - .1 * JV), console.log(`Depth range: min=${xV.toFixed(2)}, max=${eV.toFixed(2)}, range=${JV.toFixed(2)}`), JV < 1 && (eV = xV + 10);
              const YV = new QV("depthMaterial", EV, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: kV
              });
              YV.setVector3("cameraPosition", VV), YV.setFloat("maxDepth", eV), YV.setFloat("minDepth", xV), tV.forEach((VV => {
                qV.set(VV, VV.material), VV.material = YV
              }))
            }
            if ((0, JV.i)(EV.meshes, !0), FV = !0, "glb" === VV && (TV = (0, YV.b)(EV.meshes)), "screenshot" === VV) {
              let VV = `bloxd-screenshot-${BV}x${jV}-${Date.now()}.png`;
              vV ? VV = `bloxd-screenshot-normals-${BV}x${jV}-${Date.now()}.png` : rV && (VV = `bloxd-screenshot-depth-${BV}x${jV}-${Date.now()}.png`), pV(bV, EV.activeCamera, {
                width: BV,
                height: jV
              }, (function(xV) {
                PV(), fetch(xV).then((function(VV) {
                  return VV.blob()
                })).then((function(xV) {
                  (0, yV.downloadBlob)(xV, VV), eV()
                })).catch((function(VV) {
                  console.error("Error processing screenshot:", VV), eV()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), PV(), eV()
              }))
            } else {
              let VV = "yE";
              vV ? VV = "scene-normals" : rV && (VV = "scene-depth"), vV || rV ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: VV
                  } = await Promise.all([xV.e(255), xV.e(254), xV.e(279), xV.e(280), xV.e(277), xV.e(287), xV.e(286), xV.e(262)]).then((() => xV(41524))), {
                    Color3: eV
                  } = await Promise.all([xV.e(255), xV.e(258)]).then((() => xV(38387))), JV = [], YV = [];
                  if (tV.forEach((VV => {
                      const eV = VV.name.toLowerCase(),
                        xV = VV.qL().boundingBox.center,
                        UV = EV.activeCamera.position.subtract(xV).length();
                      eV.includes("sky") || eV.includes("background") || eV.includes("environment") || UV > 1e3 ? YV.push(VV) : JV.push(VV)
                    })), vV) JV.forEach(((xV, JV) => {
                    const YV = xV.getVerticesData("normal");
                    if (YV) {
                      const UV = [];
                      for (let VV = 0; VV < YV.length; VV += 3) {
                        const eV = Math.abs(YV[VV]),
                          xV = Math.abs(YV[VV + 1]),
                          JV = Math.abs(YV[VV + 2]);
                        UV.push(eV, xV, JV, 1)
                      }
                      xV.setVerticesData("color", UV);
                      const yV = new VV(`vertexColorMat_${JV}`, EV);
                      yV.disableLighting = !0, yV.emissiveColor = new eV(1, 1, 1), yV.specularColor = new eV(0, 0, 0), xV.material = yV
                    }
                  })), YV.forEach(((xV, JV) => {
                    const YV = xV.getVerticesData("position");
                    if (YV) {
                      const UV = [],
                        yV = YV.length / 3;
                      for (let VV = 0; VV < yV; VV++) UV.push(1, 1, 1, 1);
                      xV.setVerticesData("color", UV);
                      const pV = new VV(`whiteMat_${JV}`, EV);
                      pV.disableLighting = !0, pV.emissiveColor = new eV(1, 1, 1), pV.specularColor = new eV(0, 0, 0), xV.material = pV
                    }
                  }));
                  else if (rV) {
                    const xV = EV.activeCamera.position;
                    let YV = 0,
                      UV = 1 / 0;
                    JV.forEach((VV => {
                      const eV = VV.qL().boundingBox.center,
                        JV = wV.TransformCoordinates(eV, VV.getWorldMatrix()),
                        yV = xV.subtract(JV).length();
                      YV = Math.max(YV, yV), UV = Math.min(UV, yV)
                    }));
                    const yV = YV - UV;
                    YV += .1 * yV, UV = Math.max(0, UV - .1 * yV), yV < 1 && (YV = UV + 10), tV.forEach(((JV, yV) => {
                      const pV = JV.name.toLowerCase(),
                        QV = JV.qL().boundingBox.center,
                        nV = wV.TransformCoordinates(QV, JV.getWorldMatrix()),
                        ZV = xV.subtract(nV).length();
                      if (!(pV.includes("sky") || pV.includes("background") || pV.includes("environment") || ZV > 1e3)) {
                        const xV = 1 - Math.min(Math.max((ZV - UV) / (YV - UV), 0), 1),
                          pV = new VV(`depthMat_${yV}`, EV);
                        pV.diffuseColor = new eV(xV, xV, xV), pV.specularColor = new eV(0, 0, 0), JV.material = pV
                      }
                    }))
                  }
                })().then((() => Promise.all([xV.e(255), xV.e(254), xV.e(279), xV.e(280), xV.e(277), xV.e(287), xV.e(281), xV.e(286), xV.e(284), xV.e(276), xV.e(289), xV.e(302), xV.e(620), xV.e(269), xV.e(288), xV.e(253)]).then((() => xV(64316))))).then((eV => eV.GLTF2Export.GLBAsync(EV, VV))).then((VV => {
                  PV(), VV.downloadFiles(), eV()
                })).catch((VV => {
                  console.error("Error exporting GLB:", VV), PV(), eV()
                }))
              }), 100) : Promise.all([xV.e(255), xV.e(254), xV.e(279), xV.e(280), xV.e(277), xV.e(287), xV.e(281), xV.e(286), xV.e(284), xV.e(276), xV.e(289), xV.e(302), xV.e(620), xV.e(269), xV.e(288), xV.e(253)]).then((() => xV(64316))).then((xV => {
                xV.GLTF2Export.GLBAsync(EV, VV).then((VV => {
                  PV(), VV.downloadFiles(), eV()
                })).catch((VV => {
                  console.error("Error exporting GLB:", VV), PV(), eV()
                }))
              })).catch((VV => {
                console.error("Error importing serializers:", VV), PV(), eV()
              }))
            }
          })).catch((VV => {
            console.error("Error downloading the scene:", VV), eV()
          }))
        } catch (kV) {
          console.error("Error taking screenshot:", kV), eV()
        }
      }))
    }
    const ZV = new class {
      constructor() {
        this.tools = nV.ALL_DEV_TOOLS
      }
      downloadScene(VV, eV) {
        return wV(VV, eV)
      }
      async setAmbientLightIntensity(VV) {
        const {
          Color3: eV
        } = await Promise.all([xV.e(255), xV.e(258)]).then((() => xV(38387)));
        (0, UV.d)().gZ.dD().ambientColor = eV.FromArray([VV, VV, VV])
      }
      capturePhoto(VV, eV, xV) {
        return function(VV, eV, xV, JV) {
          return (0, pV.c)(QV(VV), eV, xV, JV)
        }((0, UV.d)(), VV, eV, xV)
      }
    }
  },
  42290: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => pV,
      e: () => QV
    });
    var JV = xV(1846);
    const YV = 33177600,
      UV = 3e4;
    let yV = !1;

    function pV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: pV = 1,
        type: QV = "image/png",
        quality: nV
      } = JV;
      return VV.zZ() ? yV ? Promise.reject(new Error("A screenshot is already being taken")) : (yV = !0, new Promise(((JV, wV) => {
        let ZV, vV = 2,
          rV = null;
        const kV = () => {
          var eV;
          yV = !1, null === (eV = rV) || void 0 === eV || eV(), clearTimeout(ZV);
          try {
            VV.restoreSize()
          } catch (xV) {
            console.error("A screenshot couldn't size the canvas back", xV)
          }
        };
        ZV = setTimeout((() => {
          kV(), wV(new Error("No frame was drawn to capture"))
        }), UV);
        try {
          const JV = function(VV, eV, xV) {
            const JV = Math.max(1, VV),
              UV = Math.max(1, eV),
              yV = Math.min(1, xV / Math.max(JV, UV), Math.sqrt(YV / (JV * UV)));
            return {
              width: Math.max(1, Math.floor(JV * yV)),
              height: Math.max(1, Math.floor(UV * yV))
            }
          }(eV, xV, VV.maxTextureSize);
          VV.resize(JV.width, JV.height, pV * JV.width / Math.max(1, eV))
        } catch (bV) {
          return kV(), void wV(bV)
        }
        rV = VV.onFrameDrawn((() => {
          if (vV--, vV > 0) return;
          const {
            canvas: eV
          } = VV, xV = {
            width: eV.width,
            height: eV.height
          };
          try {
            eV.toBlob((VV => {
              VV ? JV({
                blob: VV,
                ...xV
              }) : wV(new Error("The canvas gave no image"))
            }), QV, nV)
          } catch (bV) {
            wV(bV)
          } finally {
            kV()
          }
        }))
      }))) : Promise.reject(new Error("Screenshots need a game to be running"))
    }
    async function QV(VV, eV, xV) {
      try {
        const YV = await pV(VV, eV, xV);
        (0, JV.c)(YV.blob, `bloxd-screenshot-${YV.width}x${YV.height}-${Date.now()}.png`)
      } catch (YV) {
        console.error("Error taking screenshot:", YV)
      }
    }
  },
  38630: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => nV,
      i: () => pV,
      k: () => yV
    });
    var JV = xV(38621),
      YV = xV(38633);
    let UV = 0;

    function yV(VV, eV) {
      const xV = VV;
      xV._noaFaceGroups = null !== eV && void 0 !== eV ? eV : null, xV._noaFaceEpoch = -1, xV._noaFaceMask = -1, xV._noaFaceCount = -1, xV._noaFaceMaterial = null;
      const JV = VV.hT;
      JV && 1 === JV.length && (JV[0].indexStart = 0, JV[0].indexCount = VV.getTotalIndices())
    }

    function pV(VV, eV) {
      if (eV) {
        UV++;
        for (const eV of VV) {
          const VV = eV._noaFaceGroups;
          VV && yV(eV, VV)
        }
      } else UV = Math.max(0, UV - 1)
    }

    function QV(VV, eV, xV) {
      let YV = -1,
        UV = 0;
      for (let yV = 0; yV < JV.e; yV++) {
        const xV = VV[yV],
          pV = VV[yV + 1];
        pV > xV && eV & 1 << JV.c[yV] && (YV < 0 && (YV = xV), UV = pV)
      }
      return YV < 0 ? (xV[0] = 0, xV[1] = 0, 0) : (xV[0] = YV, xV[1] = UV - YV, UV - YV)
    }
    class nV {
      constructor(VV, eV) {
        this.PZ = VV, this.engine = eV, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(VV, eV) {
        if (!eV) return;
        const xV = eV.getProjectionMatrix().m,
          yV = 0 === UV && 0 === xV[15],
          pV = eV.globalPosition,
          {
            engine: nV
          } = this,
          wV = yV ? (0, YV.b)(xV, nV.getRenderWidth(), nV.getRenderHeight()) : 0;
        pV.x === this.eyeX && pV.y === this.eyeY && pV.z === this.eyeZ && wV === this.focalPx && yV === this.culling || (this.epoch++, this.eyeX = pV.x, this.eyeY = pV.y, this.eyeZ = pV.z, this.focalPx = wV, this.culling = yV);
        const {
          epoch: ZV,
          range: vV
        } = this, rV = this.PZ / 2, kV = rV * Math.sqrt(3), bV = VV.data, EV = VV.length;
        let BV = 0;
        for (let UV = 0; UV < EV; UV++) {
          const VV = bV[UV],
            eV = VV._noaFaceGroups;
          if (eV && (VV._noaFaceEpoch !== ZV || VV._noaFaceMaterial !== VV.material)) {
            VV._noaFaceEpoch = ZV, VV._noaFaceMaterial = VV.material;
            const xV = VV.hT,
              UV = xV && 1 === xV.length ? xV[0] : null;
            let nV = -1;
            if (yV && UV && (0, JV.p)(VV.material)) {
              const xV = VV.position,
                JV = pV.x - xV.x,
                UV = pV.y - xV.y,
                yV = pV.z - xV.z,
                QV = JV - rV,
                ZV = UV - rV,
                vV = yV - rV,
                bV = Math.sqrt(QV * QV + ZV * ZV + vV * vV) + kV;
              nV = (0, YV.h)(eV, JV, UV, yV, (0, YV.c)(bV, wV))
            }
            if (UV && nV !== VV._noaFaceMask) {
              VV._noaFaceMask = nV;
              let xV = 0,
                YV = eV[JV.e]; - 1 !== nV && (YV = QV(eV, nV, vV), xV = vV[0]), VV._noaFaceCount = YV, UV.indexStart = 6 * xV, UV.indexCount = 6 * YV, UV.setBoundingInfo(VV.qL())
            }
          }
          eV && 0 === VV._noaFaceCount || (bV[BV++] = VV)
        }
        VV.length = BV
      }
    }
  },
  38604: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => QV,
      e: () => pV
    });
    const JV = new WeakSet;
    let YV = 0;
    const UV = new Set;

    function yV(VV, eV) {
      VV._data = eV
    }

    function pV(VV) {
      var eV, xV;
      (null !== (eV = null === (xV = VV.getBuffer()) || void 0 === xV ? void 0 : xV.Jv) && void 0 !== eV ? eV : 0) > 0 && (JV.add(VV), 0 === YV ? yV(VV, null) : UV.add(VV))
    }

    function QV(VV) {
      YV++;
      for (const xV of function(VV) {
          const eV = new Set;
          for (const YV of VV) {
            const VV = YV.geometry;
            for (const YV of Object.values(null !== (xV = null === VV || void 0 === VV ? void 0 : VV.getVertexBuffers()) && void 0 !== xV ? xV : {})) {
              var xV;
              const VV = YV.getWrapperBuffer();
              JV.has(VV) && eV.add(VV)
            }
          }
          return eV
        }(VV)) xV.getData() || nV(xV), UV.add(xV);
      let eV = !0;
      return () => {
        if (eV && (eV = !1, YV--, 0 === YV)) {
          for (const VV of UV) yV(VV, null);
          UV.clear()
        }
      }
    }

    function nV(VV) {
      const eV = VV.getBuffer();
      if (!eV || !(eV.Jv > 0)) return;
      const xV = VV._engine,
        JV = new Uint8Array(eV.Jv);
      xV.bindArrayBuffer(eV), xV._gl.getBufferSubData(xV._gl.ARRAY_BUFFER, 0, JV), xV._resetVertexBufferBinding(), yV(VV, JV)
    }
  },
  38621: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV,
      e: () => UV,
      h: () => QV,
      i: () => JV,
      k: () => pV,
      o: () => YV,
      p: () => nV
    });
    const JV = 6,
      YV = [0, 2, 4, 1, 3, 5, 0, 2],
      UV = 6,
      yV = [1, 0, 3, 2, 5, 4];
    for (let wV = UV; wV < YV.length; wV++)
      if (YV[wV] !== YV[wV - UV]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const pV = YV.length + 1,
      QV = (() => {
        const VV = [];
        for (let eV = 0; eV < UV; eV++) VV[YV[eV]] = eV;
        return VV
      })();

    function nV(VV) {
      return !!VV && VV.backFaceCulling && (0 === VV.transparencyMode || 1 === VV.transparencyMode)
    }
  },
  38633: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => pV,
      c: () => QV,
      f: () => wV,
      h: () => nV,
      i: () => kV
    });
    var JV = xV(38621);
    const YV = 1 / 16,
      UV = 1 / 64,
      yV = 2048;
    JV.i;

    function pV(VV, eV, xV) {
      return Math.min(Math.abs(VV[0] * eV), Math.abs(VV[5] * xV)) / 2
    }

    function QV(VV, eV) {
      return YV + UV * VV * VV / eV
    }

    function nV(VV, eV, xV, YV, UV) {
      const yV = JV.k;
      return wV(VV[yV], VV[yV + 1], VV[yV + 2], VV[yV + 3], VV[yV + 4], VV[yV + 5], eV, xV, YV, UV)
    }

    function wV(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV) {
      return (yV <= VV - nV ? 0 : 1) | (yV >= eV + nV ? 0 : 2) | (pV <= xV - nV ? 0 : 4) | (pV >= JV + nV ? 0 : 8) | (QV <= YV - nV ? 0 : 16) | (QV >= UV + nV ? 0 : 32)
    }
    const ZV = (() => {
        const VV = [];
        for (let eV = 0; eV < JV.o.length; eV++) {
          let xV = 0;
          for (let YV = eV + 1; YV <= JV.o.length; YV++) {
            const UV = 1 << JV.o[YV - 1];
            if (xV & UV) break;
            xV |= UV, VV.push({
              start: eV,
              end: YV,
              lU: xV
            })
          }
        }
        return VV
      })(),
      vV = [];

    function rV(VV, eV) {
      const xV = JV.h[eV];
      return VV[xV + 1] - VV[xV]
    }

    function kV(VV, eV, xV) {
      let YV = 0;
      for (let yV = 0; yV < JV.i; yV++) rV(VV, yV) > 0 && (YV |= 1 << yV);
      if (0 === (eV &= YV)) return 0;
      if (eV === YV) return xV[0] = 0, xV[1] = VV[JV.e], 1;
      let UV = null,
        pV = 1 / 0;
      for (const nV of function(VV) {
          let eV = vV[VV];
          if (eV) return eV;
          const xV = new Map,
            JV = (VV, eV) => {
              const JV = 4 * VV + eV.length / 2;
              xV.has(JV) || xV.set(JV, {
                lU: VV,
                windows: eV
              })
            };
          for (const UV of ZV)
            if ((UV.lU & VV) === VV && JV(UV.lU, [UV.start, UV.end]), 0 !== (UV.lU & VV))
              for (const eV of ZV) eV.start < UV.end || 0 !== (UV.lU & eV.lU) || 0 === (eV.lU & VV) || ((UV.lU | eV.lU) & VV) !== VV || JV(UV.lU | eV.lU, [UV.start, UV.end, eV.start, eV.end]);
          const YV = [...xV.values()];
          return eV = YV.filter((VV => !YV.some((eV => eV !== VV && (eV.lU & VV.lU) === eV.lU && eV.windows.length <= VV.windows.length)))), vV[VV] = eV, eV
        }(eV)) {
        let xV = (nV.windows.length / 2 - 1) * yV;
        const QV = nV.lU & ~eV & YV;
        for (let eV = 0; eV < JV.i; eV++) QV & 1 << eV && (xV += rV(VV, eV));
        xV < pV && (UV = nV, pV = xV)
      }
      const QV = UV.windows;
      for (let JV = 0; JV < QV.length; JV += 2) {
        const eV = VV[QV[JV]];
        xV[JV] = eV, xV[JV + 1] = VV[QV[JV + 1]] - eV
      }
      return QV.length / 2
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);