export const id = 230;
export const ids = [230];
export const modules = {
  40455: (UU, RU, gU) => {
    gU.d(RU, {
      noaDevTools: () => GU
    });
    var tU = gU(37067),
      pU = gU(37046),
      EU = gU(2551),
      PU = gU(1637);

    function TU(UU) {
      const {
        SC: RU
      } = UU, gU = RU.engine, tU = {
        width: gU.getRenderWidth(),
        height: gU.getRenderHeight()
      };
      return {
        canvas: gU.getRenderingCanvas(),
        maxTextureSize: gU.getCaps().maxTextureSize,
        drawing: () => !UU.pI,
        resize: (UU, RU) => {
          gU.setSize(UU, RU)
        },
        restoreSize: () => {
          gU.setSize(tU.width, tU.height), RU.resize()
        },
        onFrameDrawn: RU => (UU.on("afterRender", RU), () => {
          UU.off("afterRender", RU)
        })
      }
    }
    var qU = gU(40437),
      KU = gU(8880);

    function cU(UU, RU) {
      let {
        width: KU,
        height: cU,
        colouring: GU
      } = RU;
      const jU = "normals" === GU,
        uU = "depth" === GU;
      return new Promise((RU => {
        try {
          const CU = (0, EU.g)();
          if (CU.SC.sC) return "screenshot" !== UU || null !== GU ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void RU()) : void(0, qU.e)(TU(CU), KU, cU).finally(RU);
          const hU = CU.SC.engine,
            QU = CU.SC.aZ(),
            eU = KU,
            WU = cU;
          Promise.all([Promise.all([gU.e(244), gU.e(245), gU.e(227)]).then((() => gU(60528))), Promise.all([gU.e(226), gU.e(225), gU.e(244), gU.e(245), gU.e(242), gU.e(246), gU.e(249), gU.e(301), gU.e(231)]).then((() => gU(60532))), Promise.all([gU.e(226), gU.e(225), gU.e(244), gU.e(245), gU.e(242), gU.e(252), gU.e(246), gU.e(254), gU.e(233)]).then((() => gU(60535))), gU.e(344).then((() => gU(60537))), Promise.all([gU.e(225), gU.e(221)]).then((() => gU(36593))), gU.e(243).then((() => gU(60543))), gU.e(228).then((() => gU(60545)))]).then((EU => {
            const {
              CreateScreenshotUsingRenderTarget: TU
            } = EU[1], {
              ShaderMaterial: qU
            } = EU[2], {
              ShaderLanguage: KU
            } = EU[3], {
              xC: cU
            } = EU[4], {
              registerDevtoolsShader: GU
            } = EU[6], CU = KU.GLSL, fU = new Map, xU = QU.meshes.filter((UU => UU.material));
            let mU = !1,
              IU = null;

            function JU() {
              var UU;
              mU && (mU = !1, (0, tU.f)(QU.meshes, !1)), null === (UU = IU) || void 0 === UU || UU(), IU = null, xU.forEach((UU => {
                const RU = fU.get(UU);
                RU && (UU.material = RU)
              }))
            }
            if (jU) {
              const UU = [],
                RU = [];
              xU.forEach((gU => {
                const tU = gU.name.toLowerCase(),
                  pU = gU.lY().boundingBox.center,
                  EU = QU.activeCamera.position.subtract(pU).length();
                tU.includes("sky") || tU.includes("background") || tU.includes("environment") || EU > 1e3 ? RU.push(gU) : UU.push(gU)
              })), GU("devtoolsNormal", CU);
              const gU = new qU("normalMaterial", QU, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: CU
              });
              GU("devtoolsWhite", CU);
              const tU = new qU("whiteMaterial", QU, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: CU
              });
              UU.forEach((UU => {
                fU.set(UU, UU.material), UU.material = gU
              })), RU.forEach((UU => {
                fU.set(UU, UU.material), UU.material = tU
              }))
            } else if (uU) {
              GU("devtoolsDepth", CU);
              const UU = QU.activeCamera.position;
              let RU = 0,
                gU = 1 / 0;
              xU.forEach((tU => {
                const pU = tU.name.toLowerCase();
                if (pU.includes("sky") || pU.includes("background") || pU.includes("environment")) return;
                const EU = tU.lY().boundingBox.center,
                  PU = cU.TransformCoordinates(EU, tU.getWorldMatrix()),
                  TU = UU.subtract(PU).length();
                TU > 1e3 || (RU = Math.max(RU, TU), gU = Math.min(gU, TU))
              }));
              const tU = RU - gU;
              RU += .1 * tU, gU = Math.max(0, gU - .1 * tU), console.log(`Depth range: min=${gU.toFixed(2)}, max=${RU.toFixed(2)}, range=${tU.toFixed(2)}`), tU < 1 && (RU = gU + 10);
              const pU = new qU("depthMaterial", QU, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: CU
              });
              pU.setVector3("cameraPosition", UU), pU.setFloat("maxDepth", RU), pU.setFloat("minDepth", gU), xU.forEach((UU => {
                fU.set(UU, UU.material), UU.material = pU
              }))
            }
            if ((0, tU.f)(QU.meshes, !0), mU = !0, "glb" === UU && (IU = (0, pU.d)(QU.meshes)), "screenshot" === UU) {
              let UU = `bloxd-screenshot-${eU}x${WU}-${Date.now()}.png`;
              jU ? UU = `bloxd-screenshot-normals-${eU}x${WU}-${Date.now()}.png` : uU && (UU = `bloxd-screenshot-depth-${eU}x${WU}-${Date.now()}.png`), TU(hU, QU.activeCamera, {
                width: eU,
                height: WU
              }, (function(gU) {
                JU(), fetch(gU).then((function(UU) {
                  return UU.blob()
                })).then((function(gU) {
                  (0, PU.downloadBlob)(gU, UU), RU()
                })).catch((function(UU) {
                  console.error("Error processing screenshot:", UU), RU()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), JU(), RU()
              }))
            } else {
              let UU = "Zh";
              jU ? UU = "scene-normals" : uU && (UU = "scene-depth"), jU || uU ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: UU
                  } = await Promise.all([gU.e(226), gU.e(225), gU.e(244), gU.e(245), gU.e(242), gU.e(252), gU.e(251), gU.e(232)]).then((() => gU(39648))), {
                    Color3: RU
                  } = await Promise.all([gU.e(226), gU.e(229)]).then((() => gU(36754))), tU = [], pU = [];
                  if (xU.forEach((UU => {
                      const RU = UU.name.toLowerCase(),
                        gU = UU.lY().boundingBox.center,
                        EU = QU.activeCamera.position.subtract(gU).length();
                      RU.includes("sky") || RU.includes("background") || RU.includes("environment") || EU > 1e3 ? pU.push(UU) : tU.push(UU)
                    })), jU) tU.forEach(((gU, tU) => {
                    const pU = gU.getVerticesData("normal");
                    if (pU) {
                      const EU = [];
                      for (let UU = 0; UU < pU.length; UU += 3) {
                        const RU = Math.abs(pU[UU]),
                          gU = Math.abs(pU[UU + 1]),
                          tU = Math.abs(pU[UU + 2]);
                        EU.push(RU, gU, tU, 1)
                      }
                      gU.setVerticesData("color", EU);
                      const PU = new UU(`vertexColorMat_${tU}`, QU);
                      PU.disableLighting = !0, PU.emissiveColor = new RU(1, 1, 1), PU.specularColor = new RU(0, 0, 0), gU.material = PU
                    }
                  })), pU.forEach(((gU, tU) => {
                    const pU = gU.getVerticesData("position");
                    if (pU) {
                      const EU = [],
                        PU = pU.length / 3;
                      for (let UU = 0; UU < PU; UU++) EU.push(1, 1, 1, 1);
                      gU.setVerticesData("color", EU);
                      const TU = new UU(`whiteMat_${tU}`, QU);
                      TU.disableLighting = !0, TU.emissiveColor = new RU(1, 1, 1), TU.specularColor = new RU(0, 0, 0), gU.material = TU
                    }
                  }));
                  else if (uU) {
                    const gU = QU.activeCamera.position;
                    let pU = 0,
                      EU = 1 / 0;
                    tU.forEach((UU => {
                      const RU = UU.lY().boundingBox.center,
                        tU = cU.TransformCoordinates(RU, UU.getWorldMatrix()),
                        PU = gU.subtract(tU).length();
                      pU = Math.max(pU, PU), EU = Math.min(EU, PU)
                    }));
                    const PU = pU - EU;
                    pU += .1 * PU, EU = Math.max(0, EU - .1 * PU), PU < 1 && (pU = EU + 10), xU.forEach(((tU, PU) => {
                      const TU = tU.name.toLowerCase(),
                        qU = tU.lY().boundingBox.center,
                        KU = cU.TransformCoordinates(qU, tU.getWorldMatrix()),
                        GU = gU.subtract(KU).length();
                      if (!(TU.includes("sky") || TU.includes("background") || TU.includes("environment") || GU > 1e3)) {
                        const gU = 1 - Math.min(Math.max((GU - EU) / (pU - EU), 0), 1),
                          TU = new UU(`depthMat_${PU}`, QU);
                        TU.diffuseColor = new RU(gU, gU, gU), TU.specularColor = new RU(0, 0, 0), tU.material = TU
                      }
                    }))
                  }
                })().then((() => Promise.all([gU.e(226), gU.e(225), gU.e(244), gU.e(245), gU.e(242), gU.e(252), gU.e(246), gU.e(251), gU.e(249), gU.e(241), gU.e(254), gU.e(264), gU.e(301), gU.e(236), gU.e(253), gU.e(224)]).then((() => gU(60548))))).then((RU => RU.GLTF2Export.GLBAsync(QU, UU))).then((UU => {
                  JU(), UU.downloadFiles(), RU()
                })).catch((UU => {
                  console.error("Error exporting GLB:", UU), JU(), RU()
                }))
              }), 100) : Promise.all([gU.e(226), gU.e(225), gU.e(244), gU.e(245), gU.e(242), gU.e(252), gU.e(246), gU.e(251), gU.e(249), gU.e(241), gU.e(254), gU.e(264), gU.e(301), gU.e(236), gU.e(253), gU.e(224)]).then((() => gU(60548))).then((gU => {
                gU.GLTF2Export.GLBAsync(QU, UU).then((UU => {
                  JU(), UU.downloadFiles(), RU()
                })).catch((UU => {
                  console.error("Error exporting GLB:", UU), JU(), RU()
                }))
              })).catch((UU => {
                console.error("Error importing serializers:", UU), JU(), RU()
              }))
            }
          })).catch((UU => {
            console.error("Error downloading the scene:", UU), RU()
          }))
        } catch (CU) {
          console.error("Error taking screenshot:", CU), RU()
        }
      }))
    }
    const GU = new class {
      constructor() {
        this.tools = KU.ALL_DEV_TOOLS
      }
      downloadScene(UU, RU) {
        return cU(UU, RU)
      }
      async setAmbientLightIntensity(UU) {
        const {
          Color3: RU
        } = await Promise.all([gU.e(226), gU.e(229)]).then((() => gU(36754)));
        (0, EU.g)().SC.aZ().ambientColor = RU.FromArray([UU, UU, UU])
      }
    }
  },
  40437: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => qU
    });
    var tU = gU(1648);
    const pU = 33177600,
      EU = 3e4;
    let PU = !1;

    function TU(UU, RU, gU) {
      if (!UU.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (PU) return Promise.reject(new Error("A screenshot is already being taken"));
      PU = !0;
      const tU = function(UU, RU, gU) {
        const tU = Math.max(1, UU),
          EU = Math.max(1, RU),
          PU = Math.min(1, gU / Math.max(tU, EU), Math.sqrt(pU / (tU * EU)));
        return {
          width: Math.max(1, Math.floor(tU * PU)),
          height: Math.max(1, Math.floor(EU * PU))
        }
      }(RU, gU, UU.maxTextureSize);
      return UU.resize(tU.width, tU.height), new Promise(((RU, gU) => {
        let tU, pU = 2,
          TU = null;
        const qU = () => {
          var RU;
          PU = !1, null === (RU = TU) || void 0 === RU || RU(), clearTimeout(tU), UU.restoreSize()
        };
        tU = setTimeout((() => {
          qU(), gU(new Error("No frame was drawn to capture"))
        }), EU), TU = UU.onFrameDrawn((() => {
          if (pU--, pU > 0) return;
          const {
            canvas: tU
          } = UU, EU = {
            width: tU.width,
            height: tU.height
          };
          try {
            tU.toBlob((UU => {
              UU ? RU({
                blob: UU,
                ...EU
              }) : gU(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (PU) {
            gU(PU)
          } finally {
            qU()
          }
        }))
      }))
    }
    async function qU(UU, RU, gU) {
      try {
        const pU = await TU(UU, RU, gU);
        (0, tU.d)(pU.blob, `bloxd-screenshot-${pU.width}x${pU.height}-${Date.now()}.png`)
      } catch (pU) {
        console.error("Error taking screenshot:", pU)
      }
    }
  },
  37067: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => KU,
      f: () => TU,
      g: () => PU
    });
    var tU = gU(37062),
      pU = gU(37075);
    let EU = 0;

    function PU(UU, RU) {
      const gU = UU;
      gU._noaFaceGroups = null !== RU && void 0 !== RU ? RU : null, gU._noaFaceEpoch = -1, gU._noaFaceMask = -1, gU._noaFaceCount = -1, gU._noaFaceMaterial = null;
      const tU = UU.ZI;
      tU && 1 === tU.length && (tU[0].indexStart = 0, tU[0].indexCount = UU.getTotalIndices())
    }

    function TU(UU, RU) {
      if (RU) {
        EU++;
        for (const RU of UU) {
          const UU = RU._noaFaceGroups;
          UU && PU(RU, UU)
        }
      } else EU = Math.max(0, EU - 1)
    }

    function qU(UU, RU, gU) {
      let pU = -1,
        EU = 0;
      for (let PU = 0; PU < tU.i; PU++) {
        const gU = UU[PU],
          TU = UU[PU + 1];
        TU > gU && RU & 1 << tU.e[PU] && (pU < 0 && (pU = gU), EU = TU)
      }
      return pU < 0 ? (gU[0] = 0, gU[1] = 0, 0) : (gU[0] = pU, gU[1] = EU - pU, EU - pU)
    }
    class KU {
      constructor(UU, RU) {
        this.jC = UU, this.engine = RU, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(UU, RU) {
        if (!RU) return;
        const gU = RU.getProjectionMatrix().m,
          PU = 0 === EU && 0 === gU[15],
          TU = RU.globalPosition,
          {
            engine: KU
          } = this,
          cU = PU ? (0, pU.c)(gU, KU.getRenderWidth(), KU.getRenderHeight()) : 0;
        TU.x === this.eyeX && TU.y === this.eyeY && TU.z === this.eyeZ && cU === this.focalPx && PU === this.culling || (this.epoch++, this.eyeX = TU.x, this.eyeY = TU.y, this.eyeZ = TU.z, this.focalPx = cU, this.culling = PU);
        const {
          epoch: GU,
          range: jU
        } = this, uU = this.jC / 2, CU = uU * Math.sqrt(3), hU = UU.data, QU = UU.length;
        let eU = 0;
        for (let EU = 0; EU < QU; EU++) {
          const UU = hU[EU],
            RU = UU._noaFaceGroups;
          if (RU && (UU._noaFaceEpoch !== GU || UU._noaFaceMaterial !== UU.material)) {
            UU._noaFaceEpoch = GU, UU._noaFaceMaterial = UU.material;
            const gU = UU.ZI,
              EU = gU && 1 === gU.length ? gU[0] : null;
            let KU = -1;
            if (PU && EU && (0, tU.u)(UU.material)) {
              const gU = UU.position,
                tU = TU.x - gU.x,
                EU = TU.y - gU.y,
                PU = TU.z - gU.z,
                qU = tU - uU,
                GU = EU - uU,
                jU = PU - uU,
                hU = Math.sqrt(qU * qU + GU * GU + jU * jU) + CU;
              KU = (0, pU.i)(RU, tU, EU, PU, (0, pU.f)(hU, cU))
            }
            if (EU && KU !== UU._noaFaceMask) {
              UU._noaFaceMask = KU;
              let gU = 0,
                pU = RU[tU.i]; - 1 !== KU && (pU = qU(RU, KU, jU), gU = jU[0]), UU._noaFaceCount = pU, EU.indexStart = 6 * gU, EU.indexCount = 6 * pU, EU.setBoundingInfo(UU.lY())
            }
          }
          RU && 0 === UU._noaFaceCount || (hU[eU++] = UU)
        }
        UU.length = eU
      }
    }
  },
  37046: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => qU,
      g: () => TU
    });
    const tU = new WeakSet;
    let pU = 0;
    const EU = new Set;

    function PU(UU, RU) {
      UU._data = RU
    }

    function TU(UU) {
      var RU, gU;
      (null !== (RU = null === (gU = UU.getBuffer()) || void 0 === gU ? void 0 : gU.hG) && void 0 !== RU ? RU : 0) > 0 && (tU.add(UU), 0 === pU ? PU(UU, null) : EU.add(UU))
    }

    function qU(UU) {
      pU++;
      for (const gU of function(UU) {
          const RU = new Set;
          for (const pU of UU) {
            const UU = pU.geometry;
            for (const pU of Object.values(null !== (gU = null === UU || void 0 === UU ? void 0 : UU.getVertexBuffers()) && void 0 !== gU ? gU : {})) {
              var gU;
              const UU = pU.getWrapperBuffer();
              tU.has(UU) && RU.add(UU)
            }
          }
          return RU
        }(UU)) gU.getData() || KU(gU), EU.add(gU);
      let RU = !0;
      return () => {
        if (RU && (RU = !1, pU--, 0 === pU)) {
          for (const UU of EU) PU(UU, null);
          EU.clear()
        }
      }
    }

    function KU(UU) {
      const RU = UU.getBuffer();
      if (!RU || !(RU.hG > 0)) return;
      const gU = UU._engine,
        tU = new Uint8Array(RU.hG);
      gU.bindArrayBuffer(RU), gU._gl.getBufferSubData(gU._gl.ARRAY_BUFFER, 0, tU), gU._resetVertexBufferBinding(), PU(UU, tU)
    }
  },
  37062: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => PU,
      i: () => EU,
      l: () => qU,
      n: () => tU,
      o: () => TU,
      q: () => pU,
      u: () => KU
    });
    const tU = 6,
      pU = [0, 2, 4, 1, 3, 5, 0, 2],
      EU = 6,
      PU = [1, 0, 3, 2, 5, 4];
    for (let cU = EU; cU < pU.length; cU++)
      if (pU[cU] !== pU[cU - EU]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const TU = pU.length + 1,
      qU = (() => {
        const UU = [];
        for (let RU = 0; RU < EU; RU++) UU[pU[RU]] = RU;
        return UU
      })();

    function KU(UU) {
      return !!UU && UU.backFaceCulling && (0 === UU.transparencyMode || 1 === UU.transparencyMode)
    }
  },
  37075: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => TU,
      f: () => qU,
      h: () => cU,
      i: () => KU,
      k: () => CU
    });
    var tU = gU(37062);
    const pU = 1 / 16,
      EU = 1 / 64,
      PU = 2048;
    tU.n;

    function TU(UU, RU, gU) {
      return Math.min(Math.abs(UU[0] * RU), Math.abs(UU[5] * gU)) / 2
    }

    function qU(UU, RU) {
      return pU + EU * UU * UU / RU
    }

    function KU(UU, RU, gU, pU, EU) {
      const PU = tU.o;
      return cU(UU[PU], UU[PU + 1], UU[PU + 2], UU[PU + 3], UU[PU + 4], UU[PU + 5], RU, gU, pU, EU)
    }

    function cU(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU) {
      return (PU <= UU - KU ? 0 : 1) | (PU >= RU + KU ? 0 : 2) | (TU <= gU - KU ? 0 : 4) | (TU >= tU + KU ? 0 : 8) | (qU <= pU - KU ? 0 : 16) | (qU >= EU + KU ? 0 : 32)
    }
    const GU = (() => {
        const UU = [];
        for (let RU = 0; RU < tU.q.length; RU++) {
          let gU = 0;
          for (let pU = RU + 1; pU <= tU.q.length; pU++) {
            const EU = 1 << tU.q[pU - 1];
            if (gU & EU) break;
            gU |= EU, UU.push({
              start: RU,
              end: pU,
              PE: gU
            })
          }
        }
        return UU
      })(),
      jU = [];

    function uU(UU, RU) {
      const gU = tU.l[RU];
      return UU[gU + 1] - UU[gU]
    }

    function CU(UU, RU, gU) {
      let pU = 0;
      for (let PU = 0; PU < tU.n; PU++) uU(UU, PU) > 0 && (pU |= 1 << PU);
      if (0 === (RU &= pU)) return 0;
      if (RU === pU) return gU[0] = 0, gU[1] = UU[tU.i], 1;
      let EU = null,
        TU = 1 / 0;
      for (const KU of function(UU) {
          let RU = jU[UU];
          if (RU) return RU;
          const gU = new Map,
            tU = (UU, RU) => {
              const tU = 4 * UU + RU.length / 2;
              gU.has(tU) || gU.set(tU, {
                PE: UU,
                windows: RU
              })
            };
          for (const EU of GU)
            if ((EU.PE & UU) === UU && tU(EU.PE, [EU.start, EU.end]), 0 !== (EU.PE & UU))
              for (const RU of GU) RU.start < EU.end || 0 !== (EU.PE & RU.PE) || 0 === (RU.PE & UU) || ((EU.PE | RU.PE) & UU) !== UU || tU(EU.PE | RU.PE, [EU.start, EU.end, RU.start, RU.end]);
          const pU = [...gU.values()];
          return RU = pU.filter((UU => !pU.some((RU => RU !== UU && (RU.PE & UU.PE) === RU.PE && RU.windows.length <= UU.windows.length)))), jU[UU] = RU, RU
        }(RU)) {
        let gU = (KU.windows.length / 2 - 1) * PU;
        const qU = KU.PE & ~RU & pU;
        for (let RU = 0; RU < tU.n; RU++) qU & 1 << RU && (gU += uU(UU, RU));
        gU < TU && (EU = KU, TU = gU)
      }
      const qU = EU.windows;
      for (let tU = 0; tU < qU.length; tU += 2) {
        const RU = UU[qU[tU]];
        gU[tU] = RU, gU[tU + 1] = UU[qU[tU + 1]] - RU
      }
      return qU.length / 2
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);