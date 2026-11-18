export const id = 218;
export const ids = [218];
export const modules = {
  39848: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      noaDevTools: () => hJ
    });
    var FJ = ZJ(36459),
      UJ = ZJ(36440),
      eJ = ZJ(2401),
      XJ = ZJ(1599);

    function AJ(JJ) {
      const {
        XG: cJ
      } = JJ, ZJ = cJ.engine, FJ = {
        width: ZJ.getRenderWidth(),
        height: ZJ.getRenderHeight()
      };
      return {
        canvas: ZJ.getRenderingCanvas(),
        maxTextureSize: ZJ.getCaps().maxTextureSize,
        drawing: () => !JJ.kE,
        resize: (JJ, cJ) => {
          ZJ.setSize(JJ, cJ)
        },
        restoreSize: () => {
          ZJ.setSize(FJ.width, FJ.height), cJ.resize()
        },
        onFrameDrawn: cJ => (JJ.on("afterRender", cJ), () => {
          JJ.off("afterRender", cJ)
        })
      }
    }
    var qJ = ZJ(39824),
      jJ = ZJ(8476);

    function YJ(JJ, cJ) {
      let {
        width: jJ,
        height: YJ,
        colouring: hJ
      } = cJ;
      const DJ = "normals" === hJ,
        sJ = "depth" === hJ;
      return new Promise((cJ => {
        try {
          const nJ = (0, eJ.h)();
          if (nJ.XG.AG) return "screenshot" !== JJ || null !== hJ ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void cJ()) : void(0, qJ.e)(AJ(nJ), jJ, YJ).finally(cJ);
          const GJ = nJ.XG.engine,
            fJ = nJ.XG.Qy(),
            xJ = jJ,
            rJ = YJ;
          Promise.all([Promise.all([ZJ.e(234), ZJ.e(235), ZJ.e(216)]).then((() => ZJ(59384))), Promise.all([ZJ.e(215), ZJ.e(214), ZJ.e(234), ZJ.e(235), ZJ.e(232), ZJ.e(236), ZJ.e(239), ZJ.e(291), ZJ.e(219)]).then((() => ZJ(59392))), Promise.all([ZJ.e(215), ZJ.e(214), ZJ.e(234), ZJ.e(235), ZJ.e(232), ZJ.e(242), ZJ.e(236), ZJ.e(244), ZJ.e(221)]).then((() => ZJ(59394))), ZJ.e(334).then((() => ZJ(59401))), Promise.all([ZJ.e(214), ZJ.e(210)]).then((() => ZJ(36165))), ZJ.e(233).then((() => ZJ(59409))), ZJ.e(209).then((() => ZJ(59412)))]).then((eJ => {
            const {
              CreateScreenshotUsingRenderTarget: AJ
            } = eJ[1], {
              ShaderMaterial: qJ
            } = eJ[2], {
              ShaderLanguage: jJ
            } = eJ[3], {
              Pn: YJ
            } = eJ[4], {
              registerDevtoolsShader: hJ
            } = eJ[6], nJ = jJ.GLSL, vJ = new Map, mJ = fJ.meshes.filter((JJ => JJ.material));
            let QJ = !1,
              EJ = null;

            function VJ() {
              var JJ;
              QJ && (QJ = !1, (0, FJ.f)(fJ.meshes, !1)), null === (JJ = EJ) || void 0 === JJ || JJ(), EJ = null, mJ.forEach((JJ => {
                const cJ = vJ.get(JJ);
                cJ && (JJ.material = cJ)
              }))
            }
            if (DJ) {
              const JJ = [],
                cJ = [];
              mJ.forEach((ZJ => {
                const FJ = ZJ.name.toLowerCase(),
                  UJ = ZJ.rM().boundingBox.center,
                  eJ = fJ.activeCamera.position.subtract(UJ).length();
                FJ.includes("sky") || FJ.includes("background") || FJ.includes("environment") || eJ > 1e3 ? cJ.push(ZJ) : JJ.push(ZJ)
              })), hJ("devtoolsNormal", nJ);
              const ZJ = new qJ("normalMaterial", fJ, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: nJ
              });
              hJ("devtoolsWhite", nJ);
              const FJ = new qJ("whiteMaterial", fJ, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: nJ
              });
              JJ.forEach((JJ => {
                vJ.set(JJ, JJ.material), JJ.material = ZJ
              })), cJ.forEach((JJ => {
                vJ.set(JJ, JJ.material), JJ.material = FJ
              }))
            } else if (sJ) {
              hJ("devtoolsDepth", nJ);
              const JJ = fJ.activeCamera.position;
              let cJ = 0,
                ZJ = 1 / 0;
              mJ.forEach((FJ => {
                const UJ = FJ.name.toLowerCase();
                if (UJ.includes("sky") || UJ.includes("background") || UJ.includes("environment")) return;
                const eJ = FJ.rM().boundingBox.center,
                  XJ = YJ.TransformCoordinates(eJ, FJ.getWorldMatrix()),
                  AJ = JJ.subtract(XJ).length();
                AJ > 1e3 || (cJ = Math.max(cJ, AJ), ZJ = Math.min(ZJ, AJ))
              }));
              const FJ = cJ - ZJ;
              cJ += .1 * FJ, ZJ = Math.max(0, ZJ - .1 * FJ), console.log(`Depth range: min=${ZJ.toFixed(2)}, max=${cJ.toFixed(2)}, range=${FJ.toFixed(2)}`), FJ < 1 && (cJ = ZJ + 10);
              const UJ = new qJ("depthMaterial", fJ, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: nJ
              });
              UJ.setVector3("cameraPosition", JJ), UJ.setFloat("maxDepth", cJ), UJ.setFloat("minDepth", ZJ), mJ.forEach((JJ => {
                vJ.set(JJ, JJ.material), JJ.material = UJ
              }))
            }
            if ((0, FJ.f)(fJ.meshes, !0), QJ = !0, "glb" === JJ && (EJ = (0, UJ.b)(fJ.meshes)), "screenshot" === JJ) {
              let JJ = `bloxd-screenshot-${xJ}x${rJ}-${Date.now()}.png`;
              DJ ? JJ = `bloxd-screenshot-normals-${xJ}x${rJ}-${Date.now()}.png` : sJ && (JJ = `bloxd-screenshot-depth-${xJ}x${rJ}-${Date.now()}.png`), AJ(GJ, fJ.activeCamera, {
                width: xJ,
                height: rJ
              }, (function(ZJ) {
                VJ(), fetch(ZJ).then((function(JJ) {
                  return JJ.blob()
                })).then((function(ZJ) {
                  (0, XJ.downloadBlob)(ZJ, JJ), cJ()
                })).catch((function(JJ) {
                  console.error("Error processing screenshot:", JJ), cJ()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), VJ(), cJ()
              }))
            } else {
              let JJ = "iG";
              DJ ? JJ = "scene-normals" : sJ && (JJ = "scene-depth"), DJ || sJ ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: JJ
                  } = await Promise.all([ZJ.e(215), ZJ.e(214), ZJ.e(234), ZJ.e(235), ZJ.e(232), ZJ.e(242), ZJ.e(241), ZJ.e(220)]).then((() => ZJ(39029))), {
                    Color3: cJ
                  } = await Promise.all([ZJ.e(215), ZJ.e(217)]).then((() => ZJ(36229))), FJ = [], UJ = [];
                  if (mJ.forEach((JJ => {
                      const cJ = JJ.name.toLowerCase(),
                        ZJ = JJ.rM().boundingBox.center,
                        eJ = fJ.activeCamera.position.subtract(ZJ).length();
                      cJ.includes("sky") || cJ.includes("background") || cJ.includes("environment") || eJ > 1e3 ? UJ.push(JJ) : FJ.push(JJ)
                    })), DJ) FJ.forEach(((ZJ, FJ) => {
                    const UJ = ZJ.getVerticesData("normal");
                    if (UJ) {
                      const eJ = [];
                      for (let JJ = 0; JJ < UJ.length; JJ += 3) {
                        const cJ = Math.abs(UJ[JJ]),
                          ZJ = Math.abs(UJ[JJ + 1]),
                          FJ = Math.abs(UJ[JJ + 2]);
                        eJ.push(cJ, ZJ, FJ, 1)
                      }
                      ZJ.setVerticesData("color", eJ);
                      const XJ = new JJ(`vertexColorMat_${FJ}`, fJ);
                      XJ.disableLighting = !0, XJ.emissiveColor = new cJ(1, 1, 1), XJ.specularColor = new cJ(0, 0, 0), ZJ.material = XJ
                    }
                  })), UJ.forEach(((ZJ, FJ) => {
                    const UJ = ZJ.getVerticesData("position");
                    if (UJ) {
                      const eJ = [],
                        XJ = UJ.length / 3;
                      for (let JJ = 0; JJ < XJ; JJ++) eJ.push(1, 1, 1, 1);
                      ZJ.setVerticesData("color", eJ);
                      const AJ = new JJ(`whiteMat_${FJ}`, fJ);
                      AJ.disableLighting = !0, AJ.emissiveColor = new cJ(1, 1, 1), AJ.specularColor = new cJ(0, 0, 0), ZJ.material = AJ
                    }
                  }));
                  else if (sJ) {
                    const ZJ = fJ.activeCamera.position;
                    let UJ = 0,
                      eJ = 1 / 0;
                    FJ.forEach((JJ => {
                      const cJ = JJ.rM().boundingBox.center,
                        FJ = YJ.TransformCoordinates(cJ, JJ.getWorldMatrix()),
                        XJ = ZJ.subtract(FJ).length();
                      UJ = Math.max(UJ, XJ), eJ = Math.min(eJ, XJ)
                    }));
                    const XJ = UJ - eJ;
                    UJ += .1 * XJ, eJ = Math.max(0, eJ - .1 * XJ), XJ < 1 && (UJ = eJ + 10), mJ.forEach(((FJ, XJ) => {
                      const AJ = FJ.name.toLowerCase(),
                        qJ = FJ.rM().boundingBox.center,
                        jJ = YJ.TransformCoordinates(qJ, FJ.getWorldMatrix()),
                        hJ = ZJ.subtract(jJ).length();
                      if (!(AJ.includes("sky") || AJ.includes("background") || AJ.includes("environment") || hJ > 1e3)) {
                        const ZJ = 1 - Math.min(Math.max((hJ - eJ) / (UJ - eJ), 0), 1),
                          AJ = new JJ(`depthMat_${XJ}`, fJ);
                        AJ.diffuseColor = new cJ(ZJ, ZJ, ZJ), AJ.specularColor = new cJ(0, 0, 0), FJ.material = AJ
                      }
                    }))
                  }
                })().then((() => Promise.all([ZJ.e(215), ZJ.e(214), ZJ.e(234), ZJ.e(235), ZJ.e(232), ZJ.e(242), ZJ.e(236), ZJ.e(241), ZJ.e(239), ZJ.e(231), ZJ.e(244), ZJ.e(271), ZJ.e(291), ZJ.e(225), ZJ.e(243), ZJ.e(213)]).then((() => ZJ(59415))))).then((cJ => cJ.GLTF2Export.GLBAsync(fJ, JJ))).then((JJ => {
                  VJ(), JJ.downloadFiles(), cJ()
                })).catch((JJ => {
                  console.error("Error exporting GLB:", JJ), VJ(), cJ()
                }))
              }), 100) : Promise.all([ZJ.e(215), ZJ.e(214), ZJ.e(234), ZJ.e(235), ZJ.e(232), ZJ.e(242), ZJ.e(236), ZJ.e(241), ZJ.e(239), ZJ.e(231), ZJ.e(244), ZJ.e(271), ZJ.e(291), ZJ.e(225), ZJ.e(243), ZJ.e(213)]).then((() => ZJ(59415))).then((ZJ => {
                ZJ.GLTF2Export.GLBAsync(fJ, JJ).then((JJ => {
                  VJ(), JJ.downloadFiles(), cJ()
                })).catch((JJ => {
                  console.error("Error exporting GLB:", JJ), VJ(), cJ()
                }))
              })).catch((JJ => {
                console.error("Error importing serializers:", JJ), VJ(), cJ()
              }))
            }
          })).catch((JJ => {
            console.error("Error downloading the scene:", JJ), cJ()
          }))
        } catch (nJ) {
          console.error("Error taking screenshot:", nJ), cJ()
        }
      }))
    }
    const hJ = new class {
      constructor() {
        this.tools = jJ.ALL_DEV_TOOLS
      }
      downloadScene(JJ, cJ) {
        return YJ(JJ, cJ)
      }
      async setAmbientLightIntensity(JJ) {
        const {
          Color3: cJ
        } = await Promise.all([ZJ.e(215), ZJ.e(217)]).then((() => ZJ(36229)));
        (0, eJ.h)().XG.Qy().ambientColor = cJ.FromArray([JJ, JJ, JJ])
      }
    }
  },
  39824: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => qJ
    });
    var FJ = ZJ(1620);
    const UJ = 33177600,
      eJ = 3e4;
    let XJ = !1;

    function AJ(JJ, cJ, ZJ) {
      if (!JJ.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (XJ) return Promise.reject(new Error("A screenshot is already being taken"));
      XJ = !0;
      const FJ = function(JJ, cJ, ZJ) {
        const FJ = Math.max(1, JJ),
          eJ = Math.max(1, cJ),
          XJ = Math.min(1, ZJ / Math.max(FJ, eJ), Math.sqrt(UJ / (FJ * eJ)));
        return {
          width: Math.max(1, Math.floor(FJ * XJ)),
          height: Math.max(1, Math.floor(eJ * XJ))
        }
      }(cJ, ZJ, JJ.maxTextureSize);
      return JJ.resize(FJ.width, FJ.height), new Promise(((cJ, ZJ) => {
        let FJ, UJ = 2,
          AJ = null;
        const qJ = () => {
          var cJ;
          XJ = !1, null === (cJ = AJ) || void 0 === cJ || cJ(), clearTimeout(FJ), JJ.restoreSize()
        };
        FJ = setTimeout((() => {
          qJ(), ZJ(new Error("No frame was drawn to capture"))
        }), eJ), AJ = JJ.onFrameDrawn((() => {
          if (UJ--, UJ > 0) return;
          const {
            canvas: FJ
          } = JJ, eJ = {
            width: FJ.width,
            height: FJ.height
          };
          try {
            FJ.toBlob((JJ => {
              JJ ? cJ({
                blob: JJ,
                ...eJ
              }) : ZJ(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (XJ) {
            ZJ(XJ)
          } finally {
            qJ()
          }
        }))
      }))
    }
    async function qJ(JJ, cJ, ZJ) {
      try {
        const UJ = await AJ(JJ, cJ, ZJ);
        (0, FJ.d)(UJ.blob, `bloxd-screenshot-${UJ.width}x${UJ.height}-${Date.now()}.png`)
      } catch (UJ) {
        console.error("Error taking screenshot:", UJ)
      }
    }
  },
  36459: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => jJ,
      f: () => AJ,
      g: () => XJ
    });
    var FJ = ZJ(36450),
      UJ = ZJ(36468);
    let eJ = 0;

    function XJ(JJ, cJ) {
      const ZJ = JJ;
      ZJ._noaFaceGroups = null !== cJ && void 0 !== cJ ? cJ : null, ZJ._noaFaceEpoch = -1, ZJ._noaFaceMask = -1, ZJ._noaFaceCount = -1, ZJ._noaFaceMaterial = null;
      const FJ = JJ.aE;
      FJ && 1 === FJ.length && (FJ[0].indexStart = 0, FJ[0].indexCount = JJ.getTotalIndices())
    }

    function AJ(JJ, cJ) {
      if (cJ) {
        eJ++;
        for (const cJ of JJ) {
          const JJ = cJ._noaFaceGroups;
          JJ && XJ(cJ, JJ)
        }
      } else eJ = Math.max(0, eJ - 1)
    }

    function qJ(JJ, cJ, ZJ) {
      let UJ = -1,
        eJ = 0;
      for (let XJ = 0; XJ < FJ.f; XJ++) {
        const ZJ = JJ[XJ],
          AJ = JJ[XJ + 1];
        AJ > ZJ && cJ & 1 << FJ.d[XJ] && (UJ < 0 && (UJ = ZJ), eJ = AJ)
      }
      return UJ < 0 ? (ZJ[0] = 0, ZJ[1] = 0, 0) : (ZJ[0] = UJ, ZJ[1] = eJ - UJ, eJ - UJ)
    }
    class jJ {
      constructor(JJ, cJ) {
        this.Kn = JJ, this.engine = cJ, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(JJ, cJ) {
        if (!cJ) return;
        const ZJ = cJ.getProjectionMatrix().m,
          XJ = 0 === eJ && 0 === ZJ[15],
          AJ = cJ.globalPosition,
          {
            engine: jJ
          } = this,
          YJ = XJ ? (0, UJ.c)(ZJ, jJ.getRenderWidth(), jJ.getRenderHeight()) : 0;
        AJ.x === this.eyeX && AJ.y === this.eyeY && AJ.z === this.eyeZ && YJ === this.focalPx && XJ === this.culling || (this.epoch++, this.eyeX = AJ.x, this.eyeY = AJ.y, this.eyeZ = AJ.z, this.focalPx = YJ, this.culling = XJ);
        const {
          epoch: hJ,
          range: DJ
        } = this, sJ = this.Kn / 2, nJ = sJ * Math.sqrt(3), GJ = JJ.data, fJ = JJ.length;
        let xJ = 0;
        for (let eJ = 0; eJ < fJ; eJ++) {
          const JJ = GJ[eJ],
            cJ = JJ._noaFaceGroups;
          if (cJ && (JJ._noaFaceEpoch !== hJ || JJ._noaFaceMaterial !== JJ.material)) {
            JJ._noaFaceEpoch = hJ, JJ._noaFaceMaterial = JJ.material;
            const ZJ = JJ.aE,
              eJ = ZJ && 1 === ZJ.length ? ZJ[0] : null;
            let jJ = -1;
            if (XJ && eJ && (0, FJ.u)(JJ.material)) {
              const ZJ = JJ.position,
                FJ = AJ.x - ZJ.x,
                eJ = AJ.y - ZJ.y,
                XJ = AJ.z - ZJ.z,
                qJ = FJ - sJ,
                hJ = eJ - sJ,
                DJ = XJ - sJ,
                GJ = Math.sqrt(qJ * qJ + hJ * hJ + DJ * DJ) + nJ;
              jJ = (0, UJ.n)(cJ, FJ, eJ, XJ, (0, UJ.g)(GJ, YJ))
            }
            if (eJ && jJ !== JJ._noaFaceMask) {
              JJ._noaFaceMask = jJ;
              let ZJ = 0,
                UJ = cJ[FJ.f]; - 1 !== jJ && (UJ = qJ(cJ, jJ, DJ), ZJ = DJ[0]), JJ._noaFaceCount = UJ, eJ.indexStart = 6 * ZJ, eJ.indexCount = 6 * UJ, eJ.setBoundingInfo(JJ.rM())
            }
          }
          cJ && 0 === JJ._noaFaceCount || (GJ[xJ++] = JJ)
        }
        JJ.length = xJ
      }
    }
  },
  36440: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => qJ,
      e: () => AJ
    });
    const FJ = new WeakSet;
    let UJ = 0;
    const eJ = new Set;

    function XJ(JJ, cJ) {
      JJ._data = cJ
    }

    function AJ(JJ) {
      var cJ, ZJ;
      (null !== (cJ = null === (ZJ = JJ.getBuffer()) || void 0 === ZJ ? void 0 : ZJ.qh) && void 0 !== cJ ? cJ : 0) > 0 && (FJ.add(JJ), 0 === UJ ? XJ(JJ, null) : eJ.add(JJ))
    }

    function qJ(JJ) {
      UJ++;
      for (const ZJ of function(JJ) {
          const cJ = new Set;
          for (const UJ of JJ) {
            const JJ = UJ.geometry;
            for (const UJ of Object.values(null !== (ZJ = null === JJ || void 0 === JJ ? void 0 : JJ.getVertexBuffers()) && void 0 !== ZJ ? ZJ : {})) {
              var ZJ;
              const JJ = UJ.getWrapperBuffer();
              FJ.has(JJ) && cJ.add(JJ)
            }
          }
          return cJ
        }(JJ)) ZJ.getData() || jJ(ZJ), eJ.add(ZJ);
      let cJ = !0;
      return () => {
        if (cJ && (cJ = !1, UJ--, 0 === UJ)) {
          for (const JJ of eJ) XJ(JJ, null);
          eJ.clear()
        }
      }
    }

    function jJ(JJ) {
      const cJ = JJ.getBuffer();
      if (!cJ || !(cJ.qh > 0)) return;
      const ZJ = JJ._engine,
        FJ = new Uint8Array(cJ.qh);
      ZJ.bindArrayBuffer(cJ), ZJ._gl.getBufferSubData(ZJ._gl.ARRAY_BUFFER, 0, FJ), ZJ._resetVertexBufferBinding(), XJ(JJ, FJ)
    }
  },
  36450: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ,
      f: () => eJ,
      j: () => qJ,
      k: () => FJ,
      n: () => AJ,
      r: () => UJ,
      u: () => jJ
    });
    const FJ = 6,
      UJ = [0, 2, 4, 1, 3, 5, 0, 2],
      eJ = 6,
      XJ = [1, 0, 3, 2, 5, 4];
    for (let YJ = eJ; YJ < UJ.length; YJ++)
      if (UJ[YJ] !== UJ[YJ - eJ]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const AJ = UJ.length + 1,
      qJ = (() => {
        const JJ = [];
        for (let cJ = 0; cJ < eJ; cJ++) JJ[UJ[cJ]] = cJ;
        return JJ
      })();

    function jJ(JJ) {
      return !!JJ && JJ.backFaceCulling && (0 === JJ.transparencyMode || 1 === JJ.transparencyMode)
    }
  },
  36468: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => AJ,
      g: () => qJ,
      j: () => YJ,
      n: () => jJ,
      p: () => nJ
    });
    var FJ = ZJ(36450);
    const UJ = 1 / 16,
      eJ = 1 / 64,
      XJ = 2048;
    FJ.k;

    function AJ(JJ, cJ, ZJ) {
      return Math.min(Math.abs(JJ[0] * cJ), Math.abs(JJ[5] * ZJ)) / 2
    }

    function qJ(JJ, cJ) {
      return UJ + eJ * JJ * JJ / cJ
    }

    function jJ(JJ, cJ, ZJ, UJ, eJ) {
      const XJ = FJ.n;
      return YJ(JJ[XJ], JJ[XJ + 1], JJ[XJ + 2], JJ[XJ + 3], JJ[XJ + 4], JJ[XJ + 5], cJ, ZJ, UJ, eJ)
    }

    function YJ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ) {
      return (XJ <= JJ - jJ ? 0 : 1) | (XJ >= cJ + jJ ? 0 : 2) | (AJ <= ZJ - jJ ? 0 : 4) | (AJ >= FJ + jJ ? 0 : 8) | (qJ <= UJ - jJ ? 0 : 16) | (qJ >= eJ + jJ ? 0 : 32)
    }
    const hJ = (() => {
        const JJ = [];
        for (let cJ = 0; cJ < FJ.r.length; cJ++) {
          let ZJ = 0;
          for (let UJ = cJ + 1; UJ <= FJ.r.length; UJ++) {
            const eJ = 1 << FJ.r[UJ - 1];
            if (ZJ & eJ) break;
            ZJ |= eJ, JJ.push({
              start: cJ,
              end: UJ,
              vU: ZJ
            })
          }
        }
        return JJ
      })(),
      DJ = [];

    function sJ(JJ, cJ) {
      const ZJ = FJ.j[cJ];
      return JJ[ZJ + 1] - JJ[ZJ]
    }

    function nJ(JJ, cJ, ZJ) {
      let UJ = 0;
      for (let XJ = 0; XJ < FJ.k; XJ++) sJ(JJ, XJ) > 0 && (UJ |= 1 << XJ);
      if (0 === (cJ &= UJ)) return 0;
      if (cJ === UJ) return ZJ[0] = 0, ZJ[1] = JJ[FJ.f], 1;
      let eJ = null,
        AJ = 1 / 0;
      for (const jJ of function(JJ) {
          let cJ = DJ[JJ];
          if (cJ) return cJ;
          const ZJ = new Map,
            FJ = (JJ, cJ) => {
              const FJ = 4 * JJ + cJ.length / 2;
              ZJ.has(FJ) || ZJ.set(FJ, {
                vU: JJ,
                windows: cJ
              })
            };
          for (const eJ of hJ)
            if ((eJ.vU & JJ) === JJ && FJ(eJ.vU, [eJ.start, eJ.end]), 0 !== (eJ.vU & JJ))
              for (const cJ of hJ) cJ.start < eJ.end || 0 !== (eJ.vU & cJ.vU) || 0 === (cJ.vU & JJ) || ((eJ.vU | cJ.vU) & JJ) !== JJ || FJ(eJ.vU | cJ.vU, [eJ.start, eJ.end, cJ.start, cJ.end]);
          const UJ = [...ZJ.values()];
          return cJ = UJ.filter((JJ => !UJ.some((cJ => cJ !== JJ && (cJ.vU & JJ.vU) === cJ.vU && cJ.windows.length <= JJ.windows.length)))), DJ[JJ] = cJ, cJ
        }(cJ)) {
        let ZJ = (jJ.windows.length / 2 - 1) * XJ;
        const qJ = jJ.vU & ~cJ & UJ;
        for (let cJ = 0; cJ < FJ.k; cJ++) qJ & 1 << cJ && (ZJ += sJ(JJ, cJ));
        ZJ < AJ && (eJ = jJ, AJ = ZJ)
      }
      const qJ = eJ.windows;
      for (let FJ = 0; FJ < qJ.length; FJ += 2) {
        const cJ = JJ[qJ[FJ]];
        ZJ[FJ] = cJ, ZJ[FJ + 1] = JJ[qJ[FJ + 1]] - cJ
      }
      return qJ.length / 2
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);