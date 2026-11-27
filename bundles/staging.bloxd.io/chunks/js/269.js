export const id = 269;
export const ids = [269];
export const modules = {
  42590: (RR, JR, GR) => {
    GR.d(JR, {
      noaDevTools: () => KR
    });
    var yR = GR(38616),
      tR = GR(38599),
      uR = GR(2435),
      ZR = GR(1943),
      qR = GR(42516);

    function iR(RR) {
      const {
        lK: JR
      } = RR, GR = JR.engine, yR = {
        width: GR.getRenderWidth(),
        height: GR.getRenderHeight()
      };
      return {
        canvas: GR.getRenderingCanvas(),
        maxTextureSize: GR.getCaps().maxTextureSize,
        CK: () => !RR.pK,
        resize: (RR, JR) => {
          GR.setSize(RR, JR)
        },
        restoreSize: () => {
          GR.setSize(yR.width, yR.height), JR.resize()
        },
        onFrameDrawn: GR => {
          const yR = () => {
            JR.FX && GR()
          };
          return RR.on("afterRender", yR), () => {
            RR.off("afterRender", yR)
          }
        }
      }
    }
    var fR = GR(35029);

    function VR(RR, JR) {
      let {
        width: fR,
        height: VR,
        colouring: KR
      } = JR;
      const wR = "normals" === KR,
        rR = "depth" === KR;
      return new Promise((JR => {
        try {
          const eR = (0, uR.i)();
          if (eR.lK.La) return "screenshot" !== RR || null !== KR ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void JR()) : void(0, qR.f)(iR(eR), fR, VR).finally(JR);
          const aR = eR.lK.engine,
            LR = eR.lK.jH(),
            nR = fR,
            UR = VR;
          Promise.all([Promise.all([GR.e(289), GR.e(290), GR.e(265)]).then((() => GR(64132))), Promise.all([GR.e(264), GR.e(263), GR.e(289), GR.e(290), GR.e(287), GR.e(291), GR.e(294), GR.e(629), GR.e(271)]).then((() => GR(64134))), Promise.all([GR.e(264), GR.e(263), GR.e(289), GR.e(290), GR.e(287), GR.e(297), GR.e(291), GR.e(299), GR.e(273)]).then((() => GR(64138))), GR.e(670).then((() => GR(64143))), Promise.all([GR.e(263), GR.e(259)]).then((() => GR(38195))), GR.e(288).then((() => GR(64146))), GR.e(268).then((() => GR(64149)))]).then((uR => {
            const {
              CreateScreenshotUsingRenderTarget: qR
            } = uR[1], {
              ShaderMaterial: iR
            } = uR[2], {
              ShaderLanguage: fR
            } = uR[3], {
              Fe: VR
            } = uR[4], {
              registerDevtoolsShader: KR
            } = uR[6], eR = fR.GLSL, WR = new Map, AR = LR.meshes.filter((RR => RR.material));
            let CR = !1,
              XR = null;

            function MR() {
              var RR;
              CR && (CR = !1, (0, yR.h)(LR.meshes, !1)), null === (RR = XR) || void 0 === RR || RR(), XR = null, AR.forEach((RR => {
                const JR = WR.get(RR);
                JR && (RR.material = JR)
              }))
            }
            if (wR) {
              const RR = [],
                JR = [];
              AR.forEach((GR => {
                const yR = GR.name.toLowerCase(),
                  tR = GR.Tm().boundingBox.center,
                  uR = LR.activeCamera.position.subtract(tR).length();
                yR.includes("sky") || yR.includes("background") || yR.includes("environment") || uR > 1e3 ? JR.push(GR) : RR.push(GR)
              })), KR("devtoolsNormal", eR);
              const GR = new iR("normalMaterial", LR, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: eR
              });
              KR("devtoolsWhite", eR);
              const yR = new iR("whiteMaterial", LR, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: eR
              });
              RR.forEach((RR => {
                WR.set(RR, RR.material), RR.material = GR
              })), JR.forEach((RR => {
                WR.set(RR, RR.material), RR.material = yR
              }))
            } else if (rR) {
              KR("devtoolsDepth", eR);
              const RR = LR.activeCamera.position;
              let JR = 0,
                GR = 1 / 0;
              AR.forEach((yR => {
                const tR = yR.name.toLowerCase();
                if (tR.includes("sky") || tR.includes("background") || tR.includes("environment")) return;
                const uR = yR.Tm().boundingBox.center,
                  ZR = VR.TransformCoordinates(uR, yR.getWorldMatrix()),
                  qR = RR.subtract(ZR).length();
                qR > 1e3 || (JR = Math.max(JR, qR), GR = Math.min(GR, qR))
              }));
              const yR = JR - GR;
              JR += .1 * yR, GR = Math.max(0, GR - .1 * yR), console.log(`Depth range: min=${GR.toFixed(2)}, max=${JR.toFixed(2)}, range=${yR.toFixed(2)}`), yR < 1 && (JR = GR + 10);
              const tR = new iR("depthMaterial", LR, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: eR
              });
              tR.setVector3("cameraPosition", RR), tR.setFloat("maxDepth", JR), tR.setFloat("minDepth", GR), AR.forEach((RR => {
                WR.set(RR, RR.material), RR.material = tR
              }))
            }
            if ((0, yR.h)(LR.meshes, !0), CR = !0, "glb" === RR && (XR = (0, tR.b)(LR.meshes)), "screenshot" === RR) {
              let RR = `bloxd-screenshot-${nR}x${UR}-${Date.now()}.png`;
              wR ? RR = `bloxd-screenshot-normals-${nR}x${UR}-${Date.now()}.png` : rR && (RR = `bloxd-screenshot-depth-${nR}x${UR}-${Date.now()}.png`), qR(aR, LR.activeCamera, {
                width: nR,
                height: UR
              }, (function(GR) {
                MR(), fetch(GR).then((function(RR) {
                  return RR.blob()
                })).then((function(GR) {
                  (0, ZR.downloadBlob)(GR, RR), JR()
                })).catch((function(RR) {
                  console.error("Error processing screenshot:", RR), JR()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), MR(), JR()
              }))
            } else {
              let RR = "tL";
              wR ? RR = "scene-normals" : rR && (RR = "scene-depth"), wR || rR ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: RR
                  } = await Promise.all([GR.e(264), GR.e(263), GR.e(289), GR.e(290), GR.e(287), GR.e(297), GR.e(296), GR.e(272)]).then((() => GR(41781))), {
                    Color3: JR
                  } = await Promise.all([GR.e(264), GR.e(267)]).then((() => GR(38329))), yR = [], tR = [];
                  if (AR.forEach((RR => {
                      const JR = RR.name.toLowerCase(),
                        GR = RR.Tm().boundingBox.center,
                        uR = LR.activeCamera.position.subtract(GR).length();
                      JR.includes("sky") || JR.includes("background") || JR.includes("environment") || uR > 1e3 ? tR.push(RR) : yR.push(RR)
                    })), wR) yR.forEach(((GR, yR) => {
                    const tR = GR.getVerticesData("normal");
                    if (tR) {
                      const uR = [];
                      for (let RR = 0; RR < tR.length; RR += 3) {
                        const JR = Math.abs(tR[RR]),
                          GR = Math.abs(tR[RR + 1]),
                          yR = Math.abs(tR[RR + 2]);
                        uR.push(JR, GR, yR, 1)
                      }
                      GR.setVerticesData("color", uR);
                      const ZR = new RR(`vertexColorMat_${yR}`, LR);
                      ZR.disableLighting = !0, ZR.emissiveColor = new JR(1, 1, 1), ZR.specularColor = new JR(0, 0, 0), GR.material = ZR
                    }
                  })), tR.forEach(((GR, yR) => {
                    const tR = GR.getVerticesData("position");
                    if (tR) {
                      const uR = [],
                        ZR = tR.length / 3;
                      for (let RR = 0; RR < ZR; RR++) uR.push(1, 1, 1, 1);
                      GR.setVerticesData("color", uR);
                      const qR = new RR(`whiteMat_${yR}`, LR);
                      qR.disableLighting = !0, qR.emissiveColor = new JR(1, 1, 1), qR.specularColor = new JR(0, 0, 0), GR.material = qR
                    }
                  }));
                  else if (rR) {
                    const GR = LR.activeCamera.position;
                    let tR = 0,
                      uR = 1 / 0;
                    yR.forEach((RR => {
                      const JR = RR.Tm().boundingBox.center,
                        yR = VR.TransformCoordinates(JR, RR.getWorldMatrix()),
                        ZR = GR.subtract(yR).length();
                      tR = Math.max(tR, ZR), uR = Math.min(uR, ZR)
                    }));
                    const ZR = tR - uR;
                    tR += .1 * ZR, uR = Math.max(0, uR - .1 * ZR), ZR < 1 && (tR = uR + 10), AR.forEach(((yR, ZR) => {
                      const qR = yR.name.toLowerCase(),
                        iR = yR.Tm().boundingBox.center,
                        fR = VR.TransformCoordinates(iR, yR.getWorldMatrix()),
                        KR = GR.subtract(fR).length();
                      if (!(qR.includes("sky") || qR.includes("background") || qR.includes("environment") || KR > 1e3)) {
                        const GR = 1 - Math.min(Math.max((KR - uR) / (tR - uR), 0), 1),
                          qR = new RR(`depthMat_${ZR}`, LR);
                        qR.diffuseColor = new JR(GR, GR, GR), qR.specularColor = new JR(0, 0, 0), yR.material = qR
                      }
                    }))
                  }
                })().then((() => Promise.all([GR.e(264), GR.e(263), GR.e(289), GR.e(290), GR.e(287), GR.e(297), GR.e(291), GR.e(296), GR.e(294), GR.e(286), GR.e(299), GR.e(311), GR.e(629), GR.e(278), GR.e(298), GR.e(262)]).then((() => GR(64157))))).then((JR => JR.GLTF2Export.GLBAsync(LR, RR))).then((RR => {
                  MR(), RR.downloadFiles(), JR()
                })).catch((RR => {
                  console.error("Error exporting GLB:", RR), MR(), JR()
                }))
              }), 100) : Promise.all([GR.e(264), GR.e(263), GR.e(289), GR.e(290), GR.e(287), GR.e(297), GR.e(291), GR.e(296), GR.e(294), GR.e(286), GR.e(299), GR.e(311), GR.e(629), GR.e(278), GR.e(298), GR.e(262)]).then((() => GR(64157))).then((GR => {
                GR.GLTF2Export.GLBAsync(LR, RR).then((RR => {
                  MR(), RR.downloadFiles(), JR()
                })).catch((RR => {
                  console.error("Error exporting GLB:", RR), MR(), JR()
                }))
              })).catch((RR => {
                console.error("Error importing serializers:", RR), MR(), JR()
              }))
            }
          })).catch((RR => {
            console.error("Error downloading the scene:", RR), JR()
          }))
        } catch (eR) {
          console.error("Error taking screenshot:", eR), JR()
        }
      }))
    }
    const KR = new class {
      constructor() {
        this.tools = fR.ALL_DEV_TOOLS
      }
      downloadScene(RR, JR) {
        return VR(RR, JR)
      }
      async setAmbientLightIntensity(RR) {
        const {
          Color3: JR
        } = await Promise.all([GR.e(264), GR.e(267)]).then((() => GR(38329)));
        (0, uR.i)().lK.jH().ambientColor = JR.FromArray([RR, RR, RR])
      }
      capturePhoto(RR, JR, GR) {
        return function(RR, JR, GR, yR) {
          return (0, qR.e)(iR(RR), JR, GR, yR)
        }((0, uR.i)(), RR, JR, GR)
      }
    }
  },
  42516: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR,
      f: () => iR
    });
    var yR = GR(1963);
    const tR = 33177600,
      uR = 3e4;
    let ZR = !1;

    function qR(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: qR = 1,
        type: iR = "image/png",
        quality: fR
      } = yR;
      return RR.CK() ? ZR ? Promise.reject(new Error("A screenshot is already being taken")) : (ZR = !0, new Promise(((yR, VR) => {
        let KR, wR = 2,
          rR = null;
        const eR = () => {
          var JR;
          ZR = !1, null === (JR = rR) || void 0 === JR || JR(), clearTimeout(KR);
          try {
            RR.restoreSize()
          } catch (GR) {
            console.error("A screenshot couldn't size the canvas back", GR)
          }
        };
        KR = setTimeout((() => {
          eR(), VR(new Error("No frame was drawn to capture"))
        }), uR);
        try {
          const yR = function(RR, JR, GR) {
            const yR = Math.max(1, RR),
              uR = Math.max(1, JR),
              ZR = Math.min(1, GR / Math.max(yR, uR), Math.sqrt(tR / (yR * uR)));
            return {
              width: Math.max(1, Math.floor(yR * ZR)),
              height: Math.max(1, Math.floor(uR * ZR))
            }
          }(JR, GR, RR.maxTextureSize);
          RR.resize(yR.width, yR.height, qR * yR.width / Math.max(1, JR))
        } catch (aR) {
          return eR(), void VR(aR)
        }
        rR = RR.onFrameDrawn((() => {
          if (wR--, wR > 0) return;
          const {
            canvas: JR
          } = RR, GR = {
            width: JR.width,
            height: JR.height
          };
          try {
            JR.toBlob((RR => {
              RR ? yR({
                blob: RR,
                ...GR
              }) : VR(new Error("The canvas gave no image"))
            }), iR, fR)
          } catch (aR) {
            VR(aR)
          } finally {
            eR()
          }
        }))
      }))) : Promise.reject(new Error("Screenshots need a game to be running"))
    }
    async function iR(RR, JR, GR) {
      try {
        const tR = await qR(RR, JR, GR);
        (0, yR.e)(tR.blob, `bloxd-screenshot-${tR.width}x${tR.height}-${Date.now()}.png`)
      } catch (tR) {
        console.error("Error taking screenshot:", tR)
      }
    }
  },
  38616: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => fR,
      h: () => qR,
      i: () => ZR
    });
    var yR = GR(38612),
      tR = GR(38619);
    let uR = 0;

    function ZR(RR, JR) {
      const GR = RR;
      GR._noaFaceGroups = null !== JR && void 0 !== JR ? JR : null, GR._noaFaceEpoch = -1, GR._noaFaceMask = -1, GR._noaFaceCount = -1, GR._noaFaceMaterial = null;
      const yR = RR.XM;
      yR && 1 === yR.length && (yR[0].indexStart = 0, yR[0].indexCount = RR.getTotalIndices())
    }

    function qR(RR, JR) {
      if (JR) {
        uR++;
        for (const JR of RR) {
          const RR = JR._noaFaceGroups;
          RR && ZR(JR, RR)
        }
      } else uR = Math.max(0, uR - 1)
    }

    function iR(RR, JR, GR) {
      let tR = -1,
        uR = 0;
      for (let ZR = 0; ZR < yR.g; ZR++) {
        const GR = RR[ZR],
          qR = RR[ZR + 1];
        qR > GR && JR & 1 << yR.d[ZR] && (tR < 0 && (tR = GR), uR = qR)
      }
      return tR < 0 ? (GR[0] = 0, GR[1] = 0, 0) : (GR[0] = tR, GR[1] = uR - tR, uR - tR)
    }
    class fR {
      constructor(RR, JR) {
        this.LK = RR, this.engine = JR, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(RR, JR) {
        if (!JR) return;
        const GR = JR.getProjectionMatrix().m,
          ZR = 0 === uR && 0 === GR[15],
          qR = JR.globalPosition,
          {
            engine: fR
          } = this,
          VR = ZR ? (0, tR.e)(GR, fR.getRenderWidth(), fR.getRenderHeight()) : 0;
        qR.x === this.eyeX && qR.y === this.eyeY && qR.z === this.eyeZ && VR === this.focalPx && ZR === this.culling || (this.epoch++, this.eyeX = qR.x, this.eyeY = qR.y, this.eyeZ = qR.z, this.focalPx = VR, this.culling = ZR);
        const {
          epoch: KR,
          range: wR
        } = this, rR = this.LK / 2, eR = rR * Math.sqrt(3), aR = RR.data, LR = RR.length;
        let nR = 0;
        for (let uR = 0; uR < LR; uR++) {
          const RR = aR[uR],
            JR = RR._noaFaceGroups;
          if (JR && (RR._noaFaceEpoch !== KR || RR._noaFaceMaterial !== RR.material)) {
            RR._noaFaceEpoch = KR, RR._noaFaceMaterial = RR.material;
            const GR = RR.XM,
              uR = GR && 1 === GR.length ? GR[0] : null;
            let fR = -1;
            if (ZR && uR && (0, yR.s)(RR.material)) {
              const GR = RR.position,
                yR = qR.x - GR.x,
                uR = qR.y - GR.y,
                ZR = qR.z - GR.z,
                iR = yR - rR,
                KR = uR - rR,
                wR = ZR - rR,
                aR = Math.sqrt(iR * iR + KR * KR + wR * wR) + eR;
              fR = (0, tR.k)(JR, yR, uR, ZR, (0, tR.f)(aR, VR))
            }
            if (uR && fR !== RR._noaFaceMask) {
              RR._noaFaceMask = fR;
              let GR = 0,
                tR = JR[yR.g]; - 1 !== fR && (tR = iR(JR, fR, wR), GR = wR[0]), RR._noaFaceCount = tR, uR.indexStart = 6 * GR, uR.indexCount = 6 * tR, uR.setBoundingInfo(RR.Tm())
            }
          }
          JR && 0 === RR._noaFaceCount || (aR[nR++] = RR)
        }
        RR.length = nR
      }
    }
  },
  38599: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => iR,
      c: () => qR
    });
    const yR = new WeakSet;
    let tR = 0;
    const uR = new Set;

    function ZR(RR, JR) {
      RR._data = JR
    }

    function qR(RR) {
      var JR, GR;
      (null !== (JR = null === (GR = RR.getBuffer()) || void 0 === GR ? void 0 : GR.hK) && void 0 !== JR ? JR : 0) > 0 && (yR.add(RR), 0 === tR ? ZR(RR, null) : uR.add(RR))
    }

    function iR(RR) {
      tR++;
      for (const GR of function(RR) {
          const JR = new Set;
          for (const tR of RR) {
            const RR = tR.geometry;
            for (const tR of Object.values(null !== (GR = null === RR || void 0 === RR ? void 0 : RR.getVertexBuffers()) && void 0 !== GR ? GR : {})) {
              var GR;
              const RR = tR.getWrapperBuffer();
              yR.has(RR) && JR.add(RR)
            }
          }
          return JR
        }(RR)) GR.getData() || fR(GR), uR.add(GR);
      let JR = !0;
      return () => {
        if (JR && (JR = !1, tR--, 0 === tR)) {
          for (const RR of uR) ZR(RR, null);
          uR.clear()
        }
      }
    }

    function fR(RR) {
      const JR = RR.getBuffer();
      if (!JR || !(JR.hK > 0)) return;
      const GR = RR._engine,
        yR = new Uint8Array(JR.hK);
      GR.bindArrayBuffer(JR), GR._gl.getBufferSubData(GR._gl.ARRAY_BUFFER, 0, yR), GR._resetVertexBufferBinding(), ZR(RR, yR)
    }
  },
  38612: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR,
      g: () => uR,
      j: () => iR,
      n: () => yR,
      o: () => qR,
      r: () => tR,
      s: () => fR
    });
    const yR = 6,
      tR = [0, 2, 4, 1, 3, 5, 0, 2],
      uR = 6,
      ZR = [1, 0, 3, 2, 5, 4];
    for (let VR = uR; VR < tR.length; VR++)
      if (tR[VR] !== tR[VR - uR]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const qR = tR.length + 1,
      iR = (() => {
        const RR = [];
        for (let JR = 0; JR < uR; JR++) RR[tR[JR]] = JR;
        return RR
      })();

    function fR(RR) {
      return !!RR && RR.backFaceCulling && (0 === RR.transparencyMode || 1 === RR.transparencyMode)
    }
  },
  38619: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR,
      f: () => iR,
      h: () => VR,
      k: () => fR,
      l: () => eR
    });
    var yR = GR(38612);
    const tR = 1 / 16,
      uR = 1 / 64,
      ZR = 2048;
    yR.n;

    function qR(RR, JR, GR) {
      return Math.min(Math.abs(RR[0] * JR), Math.abs(RR[5] * GR)) / 2
    }

    function iR(RR, JR) {
      return tR + uR * RR * RR / JR
    }

    function fR(RR, JR, GR, tR, uR) {
      const ZR = yR.o;
      return VR(RR[ZR], RR[ZR + 1], RR[ZR + 2], RR[ZR + 3], RR[ZR + 4], RR[ZR + 5], JR, GR, tR, uR)
    }

    function VR(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR) {
      return (ZR <= RR - fR ? 0 : 1) | (ZR >= JR + fR ? 0 : 2) | (qR <= GR - fR ? 0 : 4) | (qR >= yR + fR ? 0 : 8) | (iR <= tR - fR ? 0 : 16) | (iR >= uR + fR ? 0 : 32)
    }
    const KR = (() => {
        const RR = [];
        for (let JR = 0; JR < yR.r.length; JR++) {
          let GR = 0;
          for (let tR = JR + 1; tR <= yR.r.length; tR++) {
            const uR = 1 << yR.r[tR - 1];
            if (GR & uR) break;
            GR |= uR, RR.push({
              start: JR,
              end: tR,
              JR: GR
            })
          }
        }
        return RR
      })(),
      wR = [];

    function rR(RR, JR) {
      const GR = yR.j[JR];
      return RR[GR + 1] - RR[GR]
    }

    function eR(RR, JR, GR) {
      let tR = 0;
      for (let ZR = 0; ZR < yR.n; ZR++) rR(RR, ZR) > 0 && (tR |= 1 << ZR);
      if (0 === (JR &= tR)) return 0;
      if (JR === tR) return GR[0] = 0, GR[1] = RR[yR.g], 1;
      let uR = null,
        qR = 1 / 0;
      for (const fR of function(RR) {
          let JR = wR[RR];
          if (JR) return JR;
          const GR = new Map,
            yR = (RR, JR) => {
              const yR = 4 * RR + JR.length / 2;
              GR.has(yR) || GR.set(yR, {
                JR: RR,
                windows: JR
              })
            };
          for (const uR of KR)
            if ((uR.JR & RR) === RR && yR(uR.JR, [uR.start, uR.end]), 0 !== (uR.JR & RR))
              for (const JR of KR) JR.start < uR.end || 0 !== (uR.JR & JR.JR) || 0 === (JR.JR & RR) || ((uR.JR | JR.JR) & RR) !== RR || yR(uR.JR | JR.JR, [uR.start, uR.end, JR.start, JR.end]);
          const tR = [...GR.values()];
          return JR = tR.filter((RR => !tR.some((JR => JR !== RR && (JR.JR & RR.JR) === JR.JR && JR.windows.length <= RR.windows.length)))), wR[RR] = JR, JR
        }(JR)) {
        let GR = (fR.windows.length / 2 - 1) * ZR;
        const iR = fR.JR & ~JR & tR;
        for (let JR = 0; JR < yR.n; JR++) iR & 1 << JR && (GR += rR(RR, JR));
        GR < qR && (uR = fR, qR = GR)
      }
      const iR = uR.windows;
      for (let yR = 0; yR < iR.length; yR += 2) {
        const JR = RR[iR[yR]];
        GR[yR] = JR, GR[yR + 1] = RR[iR[yR + 1]] - JR
      }
      return iR.length / 2
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);