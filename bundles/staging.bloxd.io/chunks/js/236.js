export const id = 236;
export const ids = [236];
export const modules = {
  41082: (SS, HS, gS) => {
    gS.d(HS, {
      noaDevTools: () => fS
    });
    var tS = gS(37578),
      bS = gS(37559),
      XS = gS(2910),
      xS = gS(1844),
      NS = gS(40997);

    function qS(SS) {
      const {
        Hj: HS
      } = SS, gS = HS.engine, tS = {
        width: gS.getRenderWidth(),
        height: gS.getRenderHeight()
      };
      return {
        canvas: gS.getRenderingCanvas(),
        maxTextureSize: gS.getCaps().maxTextureSize,
        drawing: () => !SS.KD,
        resize: (SS, HS) => {
          gS.setSize(SS, HS)
        },
        restoreSize: () => {
          gS.setSize(tS.width, tS.height), HS.resize()
        },
        onFrameDrawn: HS => (SS.on("afterRender", HS), () => {
          SS.off("afterRender", HS)
        })
      }
    }
    var uS = gS(34113);

    function IS(SS, HS) {
      let {
        width: uS,
        height: IS,
        colouring: fS
      } = HS;
      const kS = "normals" === fS,
        aS = "depth" === fS;
      return new Promise((HS => {
        try {
          const KS = (0, XS.e)();
          if (KS.Hj.gj) return "screenshot" !== SS || null !== fS ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void HS()) : void(0, NS.g)(qS(KS), uS, IS).finally(HS);
          const jS = KS.Hj.engine,
            GS = KS.Hj.lL(),
            CS = uS,
            nS = IS;
          Promise.all([Promise.all([gS.e(254), gS.e(255), gS.e(233)]).then((() => gS(61307))), Promise.all([gS.e(232), gS.e(231), gS.e(254), gS.e(255), gS.e(252), gS.e(256), gS.e(259), gS.e(311), gS.e(237)]).then((() => gS(61309))), Promise.all([gS.e(232), gS.e(231), gS.e(254), gS.e(255), gS.e(252), gS.e(262), gS.e(256), gS.e(264), gS.e(239)]).then((() => gS(61311))), gS.e(352).then((() => gS(61320))), Promise.all([gS.e(231), gS.e(227)]).then((() => gS(37113))), gS.e(253).then((() => gS(61329))), gS.e(234).then((() => gS(61336)))]).then((XS => {
            const {
              CreateScreenshotUsingRenderTarget: NS
            } = XS[1], {
              ShaderMaterial: qS
            } = XS[2], {
              ShaderLanguage: uS
            } = XS[3], {
              VK: IS
            } = XS[4], {
              registerDevtoolsShader: fS
            } = XS[6], KS = uS.GLSL, PS = new Map, QS = GS.meshes.filter((SS => SS.material));
            let DS = !1,
              wS = null;

            function hS() {
              var SS;
              DS && (DS = !1, (0, tS.e)(GS.meshes, !1)), null === (SS = wS) || void 0 === SS || SS(), wS = null, QS.forEach((SS => {
                const HS = PS.get(SS);
                HS && (SS.material = HS)
              }))
            }
            if (kS) {
              const SS = [],
                HS = [];
              QS.forEach((gS => {
                const tS = gS.name.toLowerCase(),
                  bS = gS.hA().boundingBox.center,
                  XS = GS.activeCamera.position.subtract(bS).length();
                tS.includes("sky") || tS.includes("background") || tS.includes("environment") || XS > 1e3 ? HS.push(gS) : SS.push(gS)
              })), fS("devtoolsNormal", KS);
              const gS = new qS("normalMaterial", GS, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: KS
              });
              fS("devtoolsWhite", KS);
              const tS = new qS("whiteMaterial", GS, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: KS
              });
              SS.forEach((SS => {
                PS.set(SS, SS.material), SS.material = gS
              })), HS.forEach((SS => {
                PS.set(SS, SS.material), SS.material = tS
              }))
            } else if (aS) {
              fS("devtoolsDepth", KS);
              const SS = GS.activeCamera.position;
              let HS = 0,
                gS = 1 / 0;
              QS.forEach((tS => {
                const bS = tS.name.toLowerCase();
                if (bS.includes("sky") || bS.includes("background") || bS.includes("environment")) return;
                const XS = tS.hA().boundingBox.center,
                  xS = IS.TransformCoordinates(XS, tS.getWorldMatrix()),
                  NS = SS.subtract(xS).length();
                NS > 1e3 || (HS = Math.max(HS, NS), gS = Math.min(gS, NS))
              }));
              const tS = HS - gS;
              HS += .1 * tS, gS = Math.max(0, gS - .1 * tS), console.log(`Depth range: min=${gS.toFixed(2)}, max=${HS.toFixed(2)}, range=${tS.toFixed(2)}`), tS < 1 && (HS = gS + 10);
              const bS = new qS("depthMaterial", GS, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: KS
              });
              bS.setVector3("cameraPosition", SS), bS.setFloat("maxDepth", HS), bS.setFloat("minDepth", gS), QS.forEach((SS => {
                PS.set(SS, SS.material), SS.material = bS
              }))
            }
            if ((0, tS.e)(GS.meshes, !0), DS = !0, "glb" === SS && (wS = (0, bS.e)(GS.meshes)), "screenshot" === SS) {
              let SS = `bloxd-screenshot-${CS}x${nS}-${Date.now()}.png`;
              kS ? SS = `bloxd-screenshot-normals-${CS}x${nS}-${Date.now()}.png` : aS && (SS = `bloxd-screenshot-depth-${CS}x${nS}-${Date.now()}.png`), NS(jS, GS.activeCamera, {
                width: CS,
                height: nS
              }, (function(gS) {
                hS(), fetch(gS).then((function(SS) {
                  return SS.blob()
                })).then((function(gS) {
                  (0, xS.downloadBlob)(gS, SS), HS()
                })).catch((function(SS) {
                  console.error("Error processing screenshot:", SS), HS()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), hS(), HS()
              }))
            } else {
              let SS = "Bj";
              kS ? SS = "scene-normals" : aS && (SS = "scene-depth"), kS || aS ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: SS
                  } = await Promise.all([gS.e(232), gS.e(231), gS.e(254), gS.e(255), gS.e(252), gS.e(262), gS.e(261), gS.e(238)]).then((() => gS(40306))), {
                    Color3: HS
                  } = await Promise.all([gS.e(232), gS.e(235)]).then((() => gS(37294))), tS = [], bS = [];
                  if (QS.forEach((SS => {
                      const HS = SS.name.toLowerCase(),
                        gS = SS.hA().boundingBox.center,
                        XS = GS.activeCamera.position.subtract(gS).length();
                      HS.includes("sky") || HS.includes("background") || HS.includes("environment") || XS > 1e3 ? bS.push(SS) : tS.push(SS)
                    })), kS) tS.forEach(((gS, tS) => {
                    const bS = gS.getVerticesData("normal");
                    if (bS) {
                      const XS = [];
                      for (let SS = 0; SS < bS.length; SS += 3) {
                        const HS = Math.abs(bS[SS]),
                          gS = Math.abs(bS[SS + 1]),
                          tS = Math.abs(bS[SS + 2]);
                        XS.push(HS, gS, tS, 1)
                      }
                      gS.setVerticesData("color", XS);
                      const xS = new SS(`vertexColorMat_${tS}`, GS);
                      xS.disableLighting = !0, xS.emissiveColor = new HS(1, 1, 1), xS.specularColor = new HS(0, 0, 0), gS.material = xS
                    }
                  })), bS.forEach(((gS, tS) => {
                    const bS = gS.getVerticesData("position");
                    if (bS) {
                      const XS = [],
                        xS = bS.length / 3;
                      for (let SS = 0; SS < xS; SS++) XS.push(1, 1, 1, 1);
                      gS.setVerticesData("color", XS);
                      const NS = new SS(`whiteMat_${tS}`, GS);
                      NS.disableLighting = !0, NS.emissiveColor = new HS(1, 1, 1), NS.specularColor = new HS(0, 0, 0), gS.material = NS
                    }
                  }));
                  else if (aS) {
                    const gS = GS.activeCamera.position;
                    let bS = 0,
                      XS = 1 / 0;
                    tS.forEach((SS => {
                      const HS = SS.hA().boundingBox.center,
                        tS = IS.TransformCoordinates(HS, SS.getWorldMatrix()),
                        xS = gS.subtract(tS).length();
                      bS = Math.max(bS, xS), XS = Math.min(XS, xS)
                    }));
                    const xS = bS - XS;
                    bS += .1 * xS, XS = Math.max(0, XS - .1 * xS), xS < 1 && (bS = XS + 10), QS.forEach(((tS, xS) => {
                      const NS = tS.name.toLowerCase(),
                        qS = tS.hA().boundingBox.center,
                        uS = IS.TransformCoordinates(qS, tS.getWorldMatrix()),
                        fS = gS.subtract(uS).length();
                      if (!(NS.includes("sky") || NS.includes("background") || NS.includes("environment") || fS > 1e3)) {
                        const gS = 1 - Math.min(Math.max((fS - XS) / (bS - XS), 0), 1),
                          NS = new SS(`depthMat_${xS}`, GS);
                        NS.diffuseColor = new HS(gS, gS, gS), NS.specularColor = new HS(0, 0, 0), tS.material = NS
                      }
                    }))
                  }
                })().then((() => Promise.all([gS.e(232), gS.e(231), gS.e(254), gS.e(255), gS.e(252), gS.e(262), gS.e(256), gS.e(261), gS.e(259), gS.e(251), gS.e(264), gS.e(274), gS.e(311), gS.e(244), gS.e(263), gS.e(230)]).then((() => gS(61338))))).then((HS => HS.GLTF2Export.GLBAsync(GS, SS))).then((SS => {
                  hS(), SS.downloadFiles(), HS()
                })).catch((SS => {
                  console.error("Error exporting GLB:", SS), hS(), HS()
                }))
              }), 100) : Promise.all([gS.e(232), gS.e(231), gS.e(254), gS.e(255), gS.e(252), gS.e(262), gS.e(256), gS.e(261), gS.e(259), gS.e(251), gS.e(264), gS.e(274), gS.e(311), gS.e(244), gS.e(263), gS.e(230)]).then((() => gS(61338))).then((gS => {
                gS.GLTF2Export.GLBAsync(GS, SS).then((SS => {
                  hS(), SS.downloadFiles(), HS()
                })).catch((SS => {
                  console.error("Error exporting GLB:", SS), hS(), HS()
                }))
              })).catch((SS => {
                console.error("Error importing serializers:", SS), hS(), HS()
              }))
            }
          })).catch((SS => {
            console.error("Error downloading the scene:", SS), HS()
          }))
        } catch (KS) {
          console.error("Error taking screenshot:", KS), HS()
        }
      }))
    }
    const fS = new class {
      constructor() {
        this.tools = uS.ALL_DEV_TOOLS
      }
      downloadScene(SS, HS) {
        return IS(SS, HS)
      }
      async setAmbientLightIntensity(SS) {
        const {
          Color3: HS
        } = await Promise.all([gS.e(232), gS.e(235)]).then((() => gS(37294)));
        (0, XS.e)().Hj.lL().ambientColor = HS.FromArray([SS, SS, SS])
      }
      capturePhoto(SS, HS, gS) {
        return function(SS, HS, gS, tS) {
          return (0, NS.d)(qS(SS), HS, gS, tS)
        }((0, XS.e)(), SS, HS, gS)
      }
    }
  },
  40997: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => NS,
      g: () => qS
    });
    var tS = gS(1860);
    const bS = 33177600,
      XS = 3e4;
    let xS = !1;

    function NS(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: NS = 1,
        type: qS = "image/png",
        quality: uS
      } = tS;
      if (!SS.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (xS) return Promise.reject(new Error("A screenshot is already being taken"));
      xS = !0;
      const IS = function(SS, HS, gS) {
        const tS = Math.max(1, SS),
          XS = Math.max(1, HS),
          xS = Math.min(1, gS / Math.max(tS, XS), Math.sqrt(bS / (tS * XS)));
        return {
          width: Math.max(1, Math.floor(tS * xS)),
          height: Math.max(1, Math.floor(XS * xS))
        }
      }(HS, gS, SS.maxTextureSize);
      return SS.resize(IS.width, IS.height, NS * IS.width / Math.max(1, HS)), new Promise(((HS, gS) => {
        let tS, bS = 2,
          NS = null;
        const IS = () => {
          var HS;
          xS = !1, null === (HS = NS) || void 0 === HS || HS(), clearTimeout(tS), SS.restoreSize()
        };
        tS = setTimeout((() => {
          IS(), gS(new Error("No frame was drawn to capture"))
        }), XS), NS = SS.onFrameDrawn((() => {
          if (bS--, bS > 0) return;
          const {
            canvas: tS
          } = SS, XS = {
            width: tS.width,
            height: tS.height
          };
          try {
            tS.toBlob((SS => {
              SS ? HS({
                blob: SS,
                ...XS
              }) : gS(new Error("The canvas gave no image"))
            }), qS, uS)
          } catch (xS) {
            gS(xS)
          } finally {
            IS()
          }
        }))
      }))
    }
    async function qS(SS, HS, gS) {
      try {
        const bS = await NS(SS, HS, gS);
        (0, tS.c)(bS.blob, `bloxd-screenshot-${bS.width}x${bS.height}-${Date.now()}.png`)
      } catch (bS) {
        console.error("Error taking screenshot:", bS)
      }
    }
  },
  37578: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => uS,
      e: () => NS,
      g: () => xS
    });
    var tS = gS(37573),
      bS = gS(37586);
    let XS = 0;

    function xS(SS, HS) {
      const gS = SS;
      gS._noaFaceGroups = null !== HS && void 0 !== HS ? HS : null, gS._noaFaceEpoch = -1, gS._noaFaceMask = -1, gS._noaFaceCount = -1, gS._noaFaceMaterial = null;
      const tS = SS.dD;
      tS && 1 === tS.length && (tS[0].indexStart = 0, tS[0].indexCount = SS.getTotalIndices())
    }

    function NS(SS, HS) {
      if (HS) {
        XS++;
        for (const HS of SS) {
          const SS = HS._noaFaceGroups;
          SS && xS(HS, SS)
        }
      } else XS = Math.max(0, XS - 1)
    }

    function qS(SS, HS, gS) {
      let bS = -1,
        XS = 0;
      for (let xS = 0; xS < tS.h; xS++) {
        const gS = SS[xS],
          NS = SS[xS + 1];
        NS > gS && HS & 1 << tS.e[xS] && (bS < 0 && (bS = gS), XS = NS)
      }
      return bS < 0 ? (gS[0] = 0, gS[1] = 0, 0) : (gS[0] = bS, gS[1] = XS - bS, XS - bS)
    }
    class uS {
      constructor(SS, HS) {
        this.JK = SS, this.engine = HS, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(SS, HS) {
        if (!HS) return;
        const gS = HS.getProjectionMatrix().m,
          xS = 0 === XS && 0 === gS[15],
          NS = HS.globalPosition,
          {
            engine: uS
          } = this,
          IS = xS ? (0, bS.b)(gS, uS.getRenderWidth(), uS.getRenderHeight()) : 0;
        NS.x === this.eyeX && NS.y === this.eyeY && NS.z === this.eyeZ && IS === this.focalPx && xS === this.culling || (this.epoch++, this.eyeX = NS.x, this.eyeY = NS.y, this.eyeZ = NS.z, this.focalPx = IS, this.culling = xS);
        const {
          epoch: fS,
          range: kS
        } = this, aS = this.JK / 2, KS = aS * Math.sqrt(3), jS = SS.data, GS = SS.length;
        let CS = 0;
        for (let XS = 0; XS < GS; XS++) {
          const SS = jS[XS],
            HS = SS._noaFaceGroups;
          if (HS && (SS._noaFaceEpoch !== fS || SS._noaFaceMaterial !== SS.material)) {
            SS._noaFaceEpoch = fS, SS._noaFaceMaterial = SS.material;
            const gS = SS.dD,
              XS = gS && 1 === gS.length ? gS[0] : null;
            let uS = -1;
            if (xS && XS && (0, tS.y)(SS.material)) {
              const gS = SS.position,
                tS = NS.x - gS.x,
                XS = NS.y - gS.y,
                xS = NS.z - gS.z,
                qS = tS - aS,
                fS = XS - aS,
                kS = xS - aS,
                jS = Math.sqrt(qS * qS + fS * fS + kS * kS) + KS;
              uS = (0, bS.i)(HS, tS, XS, xS, (0, bS.f)(jS, IS))
            }
            if (XS && uS !== SS._noaFaceMask) {
              SS._noaFaceMask = uS;
              let gS = 0,
                bS = HS[tS.h]; - 1 !== uS && (bS = qS(HS, uS, kS), gS = kS[0]), SS._noaFaceCount = bS, XS.indexStart = 6 * gS, XS.indexCount = 6 * bS, XS.setBoundingInfo(SS.hA())
            }
          }
          HS && 0 === SS._noaFaceCount || (jS[CS++] = SS)
        }
        SS.length = CS
      }
    }
  },
  37559: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => qS,
      g: () => NS
    });
    const tS = new WeakSet;
    let bS = 0;
    const XS = new Set;

    function xS(SS, HS) {
      SS._data = HS
    }

    function NS(SS) {
      var HS, gS;
      (null !== (HS = null === (gS = SS.getBuffer()) || void 0 === gS ? void 0 : gS.hf) && void 0 !== HS ? HS : 0) > 0 && (tS.add(SS), 0 === bS ? xS(SS, null) : XS.add(SS))
    }

    function qS(SS) {
      bS++;
      for (const gS of function(SS) {
          const HS = new Set;
          for (const bS of SS) {
            const SS = bS.geometry;
            for (const bS of Object.values(null !== (gS = null === SS || void 0 === SS ? void 0 : SS.getVertexBuffers()) && void 0 !== gS ? gS : {})) {
              var gS;
              const SS = bS.getWrapperBuffer();
              tS.has(SS) && HS.add(SS)
            }
          }
          return HS
        }(SS)) gS.getData() || uS(gS), XS.add(gS);
      let HS = !0;
      return () => {
        if (HS && (HS = !1, bS--, 0 === bS)) {
          for (const SS of XS) xS(SS, null);
          XS.clear()
        }
      }
    }

    function uS(SS) {
      const HS = SS.getBuffer();
      if (!HS || !(HS.hf > 0)) return;
      const gS = SS._engine,
        tS = new Uint8Array(HS.hf);
      gS.bindArrayBuffer(HS), gS._gl.getBufferSubData(gS._gl.ARRAY_BUFFER, 0, tS), gS._resetVertexBufferBinding(), xS(SS, tS)
    }
  },
  37573: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS,
      h: () => XS,
      l: () => qS,
      o: () => tS,
      s: () => NS,
      u: () => bS,
      y: () => uS
    });
    const tS = 6,
      bS = [0, 2, 4, 1, 3, 5, 0, 2],
      XS = 6,
      xS = [1, 0, 3, 2, 5, 4];
    for (let IS = XS; IS < bS.length; IS++)
      if (bS[IS] !== bS[IS - XS]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const NS = bS.length + 1,
      qS = (() => {
        const SS = [];
        for (let HS = 0; HS < XS; HS++) SS[bS[HS]] = HS;
        return SS
      })();

    function uS(SS) {
      return !!SS && SS.backFaceCulling && (0 === SS.transparencyMode || 1 === SS.transparencyMode)
    }
  },
  37586: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => NS,
      f: () => qS,
      g: () => IS,
      i: () => uS,
      j: () => KS
    });
    var tS = gS(37573);
    const bS = 1 / 16,
      XS = 1 / 64,
      xS = 2048;
    tS.o;

    function NS(SS, HS, gS) {
      return Math.min(Math.abs(SS[0] * HS), Math.abs(SS[5] * gS)) / 2
    }

    function qS(SS, HS) {
      return bS + XS * SS * SS / HS
    }

    function uS(SS, HS, gS, bS, XS) {
      const xS = tS.s;
      return IS(SS[xS], SS[xS + 1], SS[xS + 2], SS[xS + 3], SS[xS + 4], SS[xS + 5], HS, gS, bS, XS)
    }

    function IS(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS) {
      return (xS <= SS - uS ? 0 : 1) | (xS >= HS + uS ? 0 : 2) | (NS <= gS - uS ? 0 : 4) | (NS >= tS + uS ? 0 : 8) | (qS <= bS - uS ? 0 : 16) | (qS >= XS + uS ? 0 : 32)
    }
    const fS = (() => {
        const SS = [];
        for (let HS = 0; HS < tS.u.length; HS++) {
          let gS = 0;
          for (let bS = HS + 1; bS <= tS.u.length; bS++) {
            const XS = 1 << tS.u[bS - 1];
            if (gS & XS) break;
            gS |= XS, SS.push({
              start: HS,
              end: bS,
              Tt: gS
            })
          }
        }
        return SS
      })(),
      kS = [];

    function aS(SS, HS) {
      const gS = tS.l[HS];
      return SS[gS + 1] - SS[gS]
    }

    function KS(SS, HS, gS) {
      let bS = 0;
      for (let xS = 0; xS < tS.o; xS++) aS(SS, xS) > 0 && (bS |= 1 << xS);
      if (0 === (HS &= bS)) return 0;
      if (HS === bS) return gS[0] = 0, gS[1] = SS[tS.h], 1;
      let XS = null,
        NS = 1 / 0;
      for (const uS of function(SS) {
          let HS = kS[SS];
          if (HS) return HS;
          const gS = new Map,
            tS = (SS, HS) => {
              const tS = 4 * SS + HS.length / 2;
              gS.has(tS) || gS.set(tS, {
                Tt: SS,
                windows: HS
              })
            };
          for (const XS of fS)
            if ((XS.Tt & SS) === SS && tS(XS.Tt, [XS.start, XS.end]), 0 !== (XS.Tt & SS))
              for (const HS of fS) HS.start < XS.end || 0 !== (XS.Tt & HS.Tt) || 0 === (HS.Tt & SS) || ((XS.Tt | HS.Tt) & SS) !== SS || tS(XS.Tt | HS.Tt, [XS.start, XS.end, HS.start, HS.end]);
          const bS = [...gS.values()];
          return HS = bS.filter((SS => !bS.some((HS => HS !== SS && (HS.Tt & SS.Tt) === HS.Tt && HS.windows.length <= SS.windows.length)))), kS[SS] = HS, HS
        }(HS)) {
        let gS = (uS.windows.length / 2 - 1) * xS;
        const qS = uS.Tt & ~HS & bS;
        for (let HS = 0; HS < tS.o; HS++) qS & 1 << HS && (gS += aS(SS, HS));
        gS < NS && (XS = uS, NS = gS)
      }
      const qS = XS.windows;
      for (let tS = 0; tS < qS.length; tS += 2) {
        const HS = SS[qS[tS]];
        gS[tS] = HS, gS[tS + 1] = SS[qS[tS + 1]] - HS
      }
      return qS.length / 2
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);