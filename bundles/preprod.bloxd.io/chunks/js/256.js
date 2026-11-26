export const id = 256;
export const ids = [256];
export const modules = {
  42167: (UU, XU, zU) => {
    zU.d(XU, {
      noaDevTools: () => YU
    });
    var cU = zU(38194),
      yU = zU(38178),
      QU = zU(3043),
      AU = zU(1800),
      FU = zU(42077);

    function oU(UU) {
      const {
        WY: XU
      } = UU, zU = XU.engine, cU = {
        width: zU.getRenderWidth(),
        height: zU.getRenderHeight()
      };
      return {
        canvas: zU.getRenderingCanvas(),
        maxTextureSize: zU.getCaps().maxTextureSize,
        BY: () => !UU.dY,
        resize: (UU, XU) => {
          zU.setSize(UU, XU)
        },
        restoreSize: () => {
          zU.setSize(cU.width, cU.height), XU.resize()
        },
        onFrameDrawn: zU => {
          const cU = () => {
            XU.YB && zU()
          };
          return UU.on("afterRender", cU), () => {
            UU.off("afterRender", cU)
          }
        }
      }
    }
    var DU = zU(34748);

    function EU(UU, XU) {
      let {
        width: DU,
        height: EU,
        colouring: YU
      } = XU;
      const NU = "normals" === YU,
        IU = "depth" === YU;
      return new Promise((XU => {
        try {
          const pU = (0, QU.e)();
          if (pU.WY.Ua) return "screenshot" !== UU || null !== YU ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void XU()) : void(0, FU.i)(oU(pU), DU, EU).finally(XU);
          const aU = pU.WY.engine,
            tU = pU.WY.nS(),
            gU = DU,
            kU = EU;
          Promise.all([Promise.all([zU.e(277), zU.e(278), zU.e(252)]).then((() => zU(63941))), Promise.all([zU.e(251), zU.e(250), zU.e(277), zU.e(278), zU.e(275), zU.e(279), zU.e(282), zU.e(617), zU.e(257)]).then((() => zU(63944))), Promise.all([zU.e(251), zU.e(250), zU.e(277), zU.e(278), zU.e(275), zU.e(285), zU.e(279), zU.e(287), zU.e(259)]).then((() => zU(63952))), zU.e(658).then((() => zU(63955))), Promise.all([zU.e(250), zU.e(246)]).then((() => zU(37814))), zU.e(276).then((() => zU(63962))), zU.e(255).then((() => zU(63966)))]).then((QU => {
            const {
              CreateScreenshotUsingRenderTarget: FU
            } = QU[1], {
              ShaderMaterial: oU
            } = QU[2], {
              ShaderLanguage: DU
            } = QU[3], {
              Sp: EU
            } = QU[4], {
              registerDevtoolsShader: YU
            } = QU[6], pU = DU.GLSL, GU = new Map, BU = tU.meshes.filter((UU => UU.material));
            let ZU = !1,
              RU = null;

            function PU() {
              var UU;
              ZU && (ZU = !1, (0, cU.h)(tU.meshes, !1)), null === (UU = RU) || void 0 === UU || UU(), RU = null, BU.forEach((UU => {
                const XU = GU.get(UU);
                XU && (UU.material = XU)
              }))
            }
            if (NU) {
              const UU = [],
                XU = [];
              BU.forEach((zU => {
                const cU = zU.name.toLowerCase(),
                  yU = zU.gM().boundingBox.center,
                  QU = tU.activeCamera.position.subtract(yU).length();
                cU.includes("sky") || cU.includes("background") || cU.includes("environment") || QU > 1e3 ? XU.push(zU) : UU.push(zU)
              })), YU("devtoolsNormal", pU);
              const zU = new oU("normalMaterial", tU, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: pU
              });
              YU("devtoolsWhite", pU);
              const cU = new oU("whiteMaterial", tU, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: pU
              });
              UU.forEach((UU => {
                GU.set(UU, UU.material), UU.material = zU
              })), XU.forEach((UU => {
                GU.set(UU, UU.material), UU.material = cU
              }))
            } else if (IU) {
              YU("devtoolsDepth", pU);
              const UU = tU.activeCamera.position;
              let XU = 0,
                zU = 1 / 0;
              BU.forEach((cU => {
                const yU = cU.name.toLowerCase();
                if (yU.includes("sky") || yU.includes("background") || yU.includes("environment")) return;
                const QU = cU.gM().boundingBox.center,
                  AU = EU.TransformCoordinates(QU, cU.getWorldMatrix()),
                  FU = UU.subtract(AU).length();
                FU > 1e3 || (XU = Math.max(XU, FU), zU = Math.min(zU, FU))
              }));
              const cU = XU - zU;
              XU += .1 * cU, zU = Math.max(0, zU - .1 * cU), console.log(`Depth range: min=${zU.toFixed(2)}, max=${XU.toFixed(2)}, range=${cU.toFixed(2)}`), cU < 1 && (XU = zU + 10);
              const yU = new oU("depthMaterial", tU, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: pU
              });
              yU.setVector3("cameraPosition", UU), yU.setFloat("maxDepth", XU), yU.setFloat("minDepth", zU), BU.forEach((UU => {
                GU.set(UU, UU.material), UU.material = yU
              }))
            }
            if ((0, cU.h)(tU.meshes, !0), ZU = !0, "glb" === UU && (RU = (0, yU.b)(tU.meshes)), "screenshot" === UU) {
              let UU = `bloxd-screenshot-${gU}x${kU}-${Date.now()}.png`;
              NU ? UU = `bloxd-screenshot-normals-${gU}x${kU}-${Date.now()}.png` : IU && (UU = `bloxd-screenshot-depth-${gU}x${kU}-${Date.now()}.png`), FU(aU, tU.activeCamera, {
                width: gU,
                height: kU
              }, (function(zU) {
                PU(), fetch(zU).then((function(UU) {
                  return UU.blob()
                })).then((function(zU) {
                  (0, AU.downloadBlob)(zU, UU), XU()
                })).catch((function(UU) {
                  console.error("Error processing screenshot:", UU), XU()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), PU(), XU()
              }))
            } else {
              let UU = "sa";
              NU ? UU = "scene-normals" : IU && (UU = "scene-depth"), NU || IU ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: UU
                  } = await Promise.all([zU.e(251), zU.e(250), zU.e(277), zU.e(278), zU.e(275), zU.e(285), zU.e(284), zU.e(258)]).then((() => zU(41348))), {
                    Color3: XU
                  } = await Promise.all([zU.e(251), zU.e(254)]).then((() => zU(37919))), cU = [], yU = [];
                  if (BU.forEach((UU => {
                      const XU = UU.name.toLowerCase(),
                        zU = UU.gM().boundingBox.center,
                        QU = tU.activeCamera.position.subtract(zU).length();
                      XU.includes("sky") || XU.includes("background") || XU.includes("environment") || QU > 1e3 ? yU.push(UU) : cU.push(UU)
                    })), NU) cU.forEach(((zU, cU) => {
                    const yU = zU.getVerticesData("normal");
                    if (yU) {
                      const QU = [];
                      for (let UU = 0; UU < yU.length; UU += 3) {
                        const XU = Math.abs(yU[UU]),
                          zU = Math.abs(yU[UU + 1]),
                          cU = Math.abs(yU[UU + 2]);
                        QU.push(XU, zU, cU, 1)
                      }
                      zU.setVerticesData("color", QU);
                      const AU = new UU(`vertexColorMat_${cU}`, tU);
                      AU.disableLighting = !0, AU.emissiveColor = new XU(1, 1, 1), AU.specularColor = new XU(0, 0, 0), zU.material = AU
                    }
                  })), yU.forEach(((zU, cU) => {
                    const yU = zU.getVerticesData("position");
                    if (yU) {
                      const QU = [],
                        AU = yU.length / 3;
                      for (let UU = 0; UU < AU; UU++) QU.push(1, 1, 1, 1);
                      zU.setVerticesData("color", QU);
                      const FU = new UU(`whiteMat_${cU}`, tU);
                      FU.disableLighting = !0, FU.emissiveColor = new XU(1, 1, 1), FU.specularColor = new XU(0, 0, 0), zU.material = FU
                    }
                  }));
                  else if (IU) {
                    const zU = tU.activeCamera.position;
                    let yU = 0,
                      QU = 1 / 0;
                    cU.forEach((UU => {
                      const XU = UU.gM().boundingBox.center,
                        cU = EU.TransformCoordinates(XU, UU.getWorldMatrix()),
                        AU = zU.subtract(cU).length();
                      yU = Math.max(yU, AU), QU = Math.min(QU, AU)
                    }));
                    const AU = yU - QU;
                    yU += .1 * AU, QU = Math.max(0, QU - .1 * AU), AU < 1 && (yU = QU + 10), BU.forEach(((cU, AU) => {
                      const FU = cU.name.toLowerCase(),
                        oU = cU.gM().boundingBox.center,
                        DU = EU.TransformCoordinates(oU, cU.getWorldMatrix()),
                        YU = zU.subtract(DU).length();
                      if (!(FU.includes("sky") || FU.includes("background") || FU.includes("environment") || YU > 1e3)) {
                        const zU = 1 - Math.min(Math.max((YU - QU) / (yU - QU), 0), 1),
                          FU = new UU(`depthMat_${AU}`, tU);
                        FU.diffuseColor = new XU(zU, zU, zU), FU.specularColor = new XU(0, 0, 0), cU.material = FU
                      }
                    }))
                  }
                })().then((() => Promise.all([zU.e(251), zU.e(250), zU.e(277), zU.e(278), zU.e(275), zU.e(285), zU.e(279), zU.e(284), zU.e(282), zU.e(274), zU.e(287), zU.e(299), zU.e(617), zU.e(265), zU.e(286), zU.e(249)]).then((() => zU(63969))))).then((XU => XU.GLTF2Export.GLBAsync(tU, UU))).then((UU => {
                  PU(), UU.downloadFiles(), XU()
                })).catch((UU => {
                  console.error("Error exporting GLB:", UU), PU(), XU()
                }))
              }), 100) : Promise.all([zU.e(251), zU.e(250), zU.e(277), zU.e(278), zU.e(275), zU.e(285), zU.e(279), zU.e(284), zU.e(282), zU.e(274), zU.e(287), zU.e(299), zU.e(617), zU.e(265), zU.e(286), zU.e(249)]).then((() => zU(63969))).then((zU => {
                zU.GLTF2Export.GLBAsync(tU, UU).then((UU => {
                  PU(), UU.downloadFiles(), XU()
                })).catch((UU => {
                  console.error("Error exporting GLB:", UU), PU(), XU()
                }))
              })).catch((UU => {
                console.error("Error importing serializers:", UU), PU(), XU()
              }))
            }
          })).catch((UU => {
            console.error("Error downloading the scene:", UU), XU()
          }))
        } catch (pU) {
          console.error("Error taking screenshot:", pU), XU()
        }
      }))
    }
    const YU = new class {
      constructor() {
        this.tools = DU.ALL_DEV_TOOLS
      }
      downloadScene(UU, XU) {
        return EU(UU, XU)
      }
      async setAmbientLightIntensity(UU) {
        const {
          Color3: XU
        } = await Promise.all([zU.e(251), zU.e(254)]).then((() => zU(37919)));
        (0, QU.e)().WY.nS().ambientColor = XU.FromArray([UU, UU, UU])
      }
      capturePhoto(UU, XU, zU) {
        return function(UU, XU, zU, cU) {
          return (0, FU.e)(oU(UU), XU, zU, cU)
        }((0, QU.e)(), UU, XU, zU)
      }
    }
  },
  42077: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => FU,
      i: () => oU
    });
    var cU = zU(1817);
    const yU = 33177600,
      QU = 3e4;
    let AU = !1;

    function FU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: FU = 1,
        type: oU = "image/png",
        quality: DU
      } = cU;
      return UU.BY() ? AU ? Promise.reject(new Error("A screenshot is already being taken")) : (AU = !0, new Promise(((cU, EU) => {
        let YU, NU = 2,
          IU = null;
        const pU = () => {
          var XU;
          AU = !1, null === (XU = IU) || void 0 === XU || XU(), clearTimeout(YU);
          try {
            UU.restoreSize()
          } catch (zU) {
            console.error("A screenshot couldn't size the canvas back", zU)
          }
        };
        YU = setTimeout((() => {
          pU(), EU(new Error("No frame was drawn to capture"))
        }), QU);
        try {
          const cU = function(UU, XU, zU) {
            const cU = Math.max(1, UU),
              QU = Math.max(1, XU),
              AU = Math.min(1, zU / Math.max(cU, QU), Math.sqrt(yU / (cU * QU)));
            return {
              width: Math.max(1, Math.floor(cU * AU)),
              height: Math.max(1, Math.floor(QU * AU))
            }
          }(XU, zU, UU.maxTextureSize);
          UU.resize(cU.width, cU.height, FU * cU.width / Math.max(1, XU))
        } catch (aU) {
          return pU(), void EU(aU)
        }
        IU = UU.onFrameDrawn((() => {
          if (NU--, NU > 0) return;
          const {
            canvas: XU
          } = UU, zU = {
            width: XU.width,
            height: XU.height
          };
          try {
            XU.toBlob((UU => {
              UU ? cU({
                blob: UU,
                ...zU
              }) : EU(new Error("The canvas gave no image"))
            }), oU, DU)
          } catch (aU) {
            EU(aU)
          } finally {
            pU()
          }
        }))
      }))) : Promise.reject(new Error("Screenshots need a game to be running"))
    }
    async function oU(UU, XU, zU) {
      try {
        const yU = await FU(UU, XU, zU);
        (0, cU.c)(yU.blob, `bloxd-screenshot-${yU.width}x${yU.height}-${Date.now()}.png`)
      } catch (yU) {
        console.error("Error taking screenshot:", yU)
      }
    }
  },
  38194: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => DU,
      h: () => FU,
      l: () => AU
    });
    var cU = zU(38185),
      yU = zU(38202);
    let QU = 0;

    function AU(UU, XU) {
      const zU = UU;
      zU._noaFaceGroups = null !== XU && void 0 !== XU ? XU : null, zU._noaFaceEpoch = -1, zU._noaFaceMask = -1, zU._noaFaceCount = -1, zU._noaFaceMaterial = null;
      const cU = UU.uB;
      cU && 1 === cU.length && (cU[0].indexStart = 0, cU[0].indexCount = UU.getTotalIndices())
    }

    function FU(UU, XU) {
      if (XU) {
        QU++;
        for (const XU of UU) {
          const UU = XU._noaFaceGroups;
          UU && AU(XU, UU)
        }
      } else QU = Math.max(0, QU - 1)
    }

    function oU(UU, XU, zU) {
      let yU = -1,
        QU = 0;
      for (let AU = 0; AU < cU.c; AU++) {
        const zU = UU[AU],
          FU = UU[AU + 1];
        FU > zU && XU & 1 << cU.b[AU] && (yU < 0 && (yU = zU), QU = FU)
      }
      return yU < 0 ? (zU[0] = 0, zU[1] = 0, 0) : (zU[0] = yU, zU[1] = QU - yU, QU - yU)
    }
    class DU {
      constructor(UU, XU) {
        this.aY = UU, this.engine = XU, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(UU, XU) {
        if (!XU) return;
        const zU = XU.getProjectionMatrix().m,
          AU = 0 === QU && 0 === zU[15],
          FU = XU.globalPosition,
          {
            engine: DU
          } = this,
          EU = AU ? (0, yU.e)(zU, DU.getRenderWidth(), DU.getRenderHeight()) : 0;
        FU.x === this.eyeX && FU.y === this.eyeY && FU.z === this.eyeZ && EU === this.focalPx && AU === this.culling || (this.epoch++, this.eyeX = FU.x, this.eyeY = FU.y, this.eyeZ = FU.z, this.focalPx = EU, this.culling = AU);
        const {
          epoch: YU,
          range: NU
        } = this, IU = this.aY / 2, pU = IU * Math.sqrt(3), aU = UU.data, tU = UU.length;
        let gU = 0;
        for (let QU = 0; QU < tU; QU++) {
          const UU = aU[QU],
            XU = UU._noaFaceGroups;
          if (XU && (UU._noaFaceEpoch !== YU || UU._noaFaceMaterial !== UU.material)) {
            UU._noaFaceEpoch = YU, UU._noaFaceMaterial = UU.material;
            const zU = UU.uB,
              QU = zU && 1 === zU.length ? zU[0] : null;
            let DU = -1;
            if (AU && QU && (0, cU.m)(UU.material)) {
              const zU = UU.position,
                cU = FU.x - zU.x,
                QU = FU.y - zU.y,
                AU = FU.z - zU.z,
                oU = cU - IU,
                YU = QU - IU,
                NU = AU - IU,
                aU = Math.sqrt(oU * oU + YU * YU + NU * NU) + pU;
              DU = (0, yU.n)(XU, cU, QU, AU, (0, yU.i)(aU, EU))
            }
            if (QU && DU !== UU._noaFaceMask) {
              UU._noaFaceMask = DU;
              let zU = 0,
                yU = XU[cU.c]; - 1 !== DU && (yU = oU(XU, DU, NU), zU = NU[0]), UU._noaFaceCount = yU, QU.indexStart = 6 * zU, QU.indexCount = 6 * yU, QU.setBoundingInfo(UU.gM())
            }
          }
          XU && 0 === UU._noaFaceCount || (aU[gU++] = UU)
        }
        UU.length = gU
      }
    }
  },
  38178: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => oU,
      e: () => FU
    });
    const cU = new WeakSet;
    let yU = 0;
    const QU = new Set;

    function AU(UU, XU) {
      UU._data = XU
    }

    function FU(UU) {
      var XU, zU;
      (null !== (XU = null === (zU = UU.getBuffer()) || void 0 === zU ? void 0 : zU.xY) && void 0 !== XU ? XU : 0) > 0 && (cU.add(UU), 0 === yU ? AU(UU, null) : QU.add(UU))
    }

    function oU(UU) {
      yU++;
      for (const zU of function(UU) {
          const XU = new Set;
          for (const yU of UU) {
            const UU = yU.geometry;
            for (const yU of Object.values(null !== (zU = null === UU || void 0 === UU ? void 0 : UU.getVertexBuffers()) && void 0 !== zU ? zU : {})) {
              var zU;
              const UU = yU.getWrapperBuffer();
              cU.has(UU) && XU.add(UU)
            }
          }
          return XU
        }(UU)) zU.getData() || DU(zU), QU.add(zU);
      let XU = !0;
      return () => {
        if (XU && (XU = !1, yU--, 0 === yU)) {
          for (const UU of QU) AU(UU, null);
          QU.clear()
        }
      }
    }

    function DU(UU) {
      const XU = UU.getBuffer();
      if (!XU || !(XU.xY > 0)) return;
      const zU = UU._engine,
        cU = new Uint8Array(XU.xY);
      zU.bindArrayBuffer(XU), zU._gl.getBufferSubData(zU._gl.ARRAY_BUFFER, 0, cU), zU._resetVertexBufferBinding(), AU(UU, cU)
    }
  },
  38185: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => AU,
      c: () => QU,
      d: () => oU,
      h: () => cU,
      i: () => FU,
      k: () => yU,
      m: () => DU
    });
    const cU = 6,
      yU = [0, 2, 4, 1, 3, 5, 0, 2],
      QU = 6,
      AU = [1, 0, 3, 2, 5, 4];
    for (let EU = QU; EU < yU.length; EU++)
      if (yU[EU] !== yU[EU - QU]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const FU = yU.length + 1,
      oU = (() => {
        const UU = [];
        for (let XU = 0; XU < QU; XU++) UU[yU[XU]] = XU;
        return UU
      })();

    function DU(UU) {
      return !!UU && UU.backFaceCulling && (0 === UU.transparencyMode || 1 === UU.transparencyMode)
    }
  },
  38202: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => FU,
      i: () => oU,
      k: () => EU,
      n: () => DU,
      p: () => pU
    });
    var cU = zU(38185);
    const yU = 1 / 16,
      QU = 1 / 64,
      AU = 2048;
    cU.h;

    function FU(UU, XU, zU) {
      return Math.min(Math.abs(UU[0] * XU), Math.abs(UU[5] * zU)) / 2
    }

    function oU(UU, XU) {
      return yU + QU * UU * UU / XU
    }

    function DU(UU, XU, zU, yU, QU) {
      const AU = cU.i;
      return EU(UU[AU], UU[AU + 1], UU[AU + 2], UU[AU + 3], UU[AU + 4], UU[AU + 5], XU, zU, yU, QU)
    }

    function EU(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU) {
      return (AU <= UU - DU ? 0 : 1) | (AU >= XU + DU ? 0 : 2) | (FU <= zU - DU ? 0 : 4) | (FU >= cU + DU ? 0 : 8) | (oU <= yU - DU ? 0 : 16) | (oU >= QU + DU ? 0 : 32)
    }
    const YU = (() => {
        const UU = [];
        for (let XU = 0; XU < cU.k.length; XU++) {
          let zU = 0;
          for (let yU = XU + 1; yU <= cU.k.length; yU++) {
            const QU = 1 << cU.k[yU - 1];
            if (zU & QU) break;
            zU |= QU, UU.push({
              start: XU,
              end: yU,
              rQ: zU
            })
          }
        }
        return UU
      })(),
      NU = [];

    function IU(UU, XU) {
      const zU = cU.d[XU];
      return UU[zU + 1] - UU[zU]
    }

    function pU(UU, XU, zU) {
      let yU = 0;
      for (let AU = 0; AU < cU.h; AU++) IU(UU, AU) > 0 && (yU |= 1 << AU);
      if (0 === (XU &= yU)) return 0;
      if (XU === yU) return zU[0] = 0, zU[1] = UU[cU.c], 1;
      let QU = null,
        FU = 1 / 0;
      for (const DU of function(UU) {
          let XU = NU[UU];
          if (XU) return XU;
          const zU = new Map,
            cU = (UU, XU) => {
              const cU = 4 * UU + XU.length / 2;
              zU.has(cU) || zU.set(cU, {
                rQ: UU,
                windows: XU
              })
            };
          for (const QU of YU)
            if ((QU.rQ & UU) === UU && cU(QU.rQ, [QU.start, QU.end]), 0 !== (QU.rQ & UU))
              for (const XU of YU) XU.start < QU.end || 0 !== (QU.rQ & XU.rQ) || 0 === (XU.rQ & UU) || ((QU.rQ | XU.rQ) & UU) !== UU || cU(QU.rQ | XU.rQ, [QU.start, QU.end, XU.start, XU.end]);
          const yU = [...zU.values()];
          return XU = yU.filter((UU => !yU.some((XU => XU !== UU && (XU.rQ & UU.rQ) === XU.rQ && XU.windows.length <= UU.windows.length)))), NU[UU] = XU, XU
        }(XU)) {
        let zU = (DU.windows.length / 2 - 1) * AU;
        const oU = DU.rQ & ~XU & yU;
        for (let XU = 0; XU < cU.h; XU++) oU & 1 << XU && (zU += IU(UU, XU));
        zU < FU && (QU = DU, FU = zU)
      }
      const oU = QU.windows;
      for (let cU = 0; cU < oU.length; cU += 2) {
        const XU = UU[oU[cU]];
        zU[cU] = XU, zU[cU + 1] = UU[oU[cU + 1]] - XU
      }
      return oU.length / 2
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);