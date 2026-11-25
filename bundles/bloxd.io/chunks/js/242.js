export const id = 242;
export const ids = [242];
export const modules = {
  41454: (GG, bG, ZG) => {
    ZG.d(bG, {
      noaDevTools: () => pG
    });
    var wG = ZG(37926),
      SG = ZG(37906),
      LG = ZG(2751),
      yG = ZG(1702),
      kG = ZG(41367);

    function UG(GG) {
      const {
        HK: bG
      } = GG, ZG = bG.engine, wG = {
        width: ZG.getRenderWidth(),
        height: ZG.getRenderHeight()
      };
      return {
        canvas: ZG.getRenderingCanvas(),
        maxTextureSize: ZG.getCaps().maxTextureSize,
        drawing: () => !GG.pE,
        resize: (GG, bG) => {
          ZG.setSize(GG, bG)
        },
        restoreSize: () => {
          ZG.setSize(wG.width, wG.height), bG.resize()
        },
        onFrameDrawn: bG => (GG.on("afterRender", bG), () => {
          GG.off("afterRender", bG)
        })
      }
    }
    var YG = ZG(34362);

    function VG(GG, bG) {
      let {
        width: YG,
        height: VG,
        colouring: pG
      } = bG;
      const fG = "normals" === pG,
        QG = "depth" === pG;
      return new Promise((bG => {
        try {
          const KG = (0, LG.i)();
          if (KG.HK.tK) return "screenshot" !== GG || null !== pG ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void bG()) : void(0, kG.g)(UG(KG), YG, VG).finally(bG);
          const hG = KG.HK.engine,
            dG = KG.HK.Dv(),
            JG = YG,
            rG = VG;
          Promise.all([Promise.all([ZG.e(258), ZG.e(259), ZG.e(238)]).then((() => ZG(61800))), Promise.all([ZG.e(237), ZG.e(236), ZG.e(258), ZG.e(259), ZG.e(256), ZG.e(260), ZG.e(263), ZG.e(316), ZG.e(243)]).then((() => ZG(61807))), Promise.all([ZG.e(237), ZG.e(236), ZG.e(258), ZG.e(259), ZG.e(256), ZG.e(266), ZG.e(260), ZG.e(268), ZG.e(245)]).then((() => ZG(61809))), ZG.e(357).then((() => ZG(61816))), Promise.all([ZG.e(236), ZG.e(232)]).then((() => ZG(37432))), ZG.e(257).then((() => ZG(61824))), ZG.e(240).then((() => ZG(61826)))]).then((LG => {
            const {
              CreateScreenshotUsingRenderTarget: kG
            } = LG[1], {
              ShaderMaterial: UG
            } = LG[2], {
              ShaderLanguage: YG
            } = LG[3], {
              mK: VG
            } = LG[4], {
              registerDevtoolsShader: pG
            } = LG[6], KG = YG.GLSL, zG = new Map, EG = dG.meshes.filter((GG => GG.material));
            let oG = !1,
              XG = null;

            function uG() {
              var GG;
              oG && (oG = !1, (0, wG.h)(dG.meshes, !1)), null === (GG = XG) || void 0 === GG || GG(), XG = null, EG.forEach((GG => {
                const bG = zG.get(GG);
                bG && (GG.material = bG)
              }))
            }
            if (fG) {
              const GG = [],
                bG = [];
              EG.forEach((ZG => {
                const wG = ZG.name.toLowerCase(),
                  SG = ZG.HA().boundingBox.center,
                  LG = dG.activeCamera.position.subtract(SG).length();
                wG.includes("sky") || wG.includes("background") || wG.includes("environment") || LG > 1e3 ? bG.push(ZG) : GG.push(ZG)
              })), pG("devtoolsNormal", KG);
              const ZG = new UG("normalMaterial", dG, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: KG
              });
              pG("devtoolsWhite", KG);
              const wG = new UG("whiteMaterial", dG, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: KG
              });
              GG.forEach((GG => {
                zG.set(GG, GG.material), GG.material = ZG
              })), bG.forEach((GG => {
                zG.set(GG, GG.material), GG.material = wG
              }))
            } else if (QG) {
              pG("devtoolsDepth", KG);
              const GG = dG.activeCamera.position;
              let bG = 0,
                ZG = 1 / 0;
              EG.forEach((wG => {
                const SG = wG.name.toLowerCase();
                if (SG.includes("sky") || SG.includes("background") || SG.includes("environment")) return;
                const LG = wG.HA().boundingBox.center,
                  yG = VG.TransformCoordinates(LG, wG.getWorldMatrix()),
                  kG = GG.subtract(yG).length();
                kG > 1e3 || (bG = Math.max(bG, kG), ZG = Math.min(ZG, kG))
              }));
              const wG = bG - ZG;
              bG += .1 * wG, ZG = Math.max(0, ZG - .1 * wG), console.log(`Depth range: min=${ZG.toFixed(2)}, max=${bG.toFixed(2)}, range=${wG.toFixed(2)}`), wG < 1 && (bG = ZG + 10);
              const SG = new UG("depthMaterial", dG, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: KG
              });
              SG.setVector3("cameraPosition", GG), SG.setFloat("maxDepth", bG), SG.setFloat("minDepth", ZG), EG.forEach((GG => {
                zG.set(GG, GG.material), GG.material = SG
              }))
            }
            if ((0, wG.h)(dG.meshes, !0), oG = !0, "glb" === GG && (XG = (0, SG.d)(dG.meshes)), "screenshot" === GG) {
              let GG = `bloxd-screenshot-${JG}x${rG}-${Date.now()}.png`;
              fG ? GG = `bloxd-screenshot-normals-${JG}x${rG}-${Date.now()}.png` : QG && (GG = `bloxd-screenshot-depth-${JG}x${rG}-${Date.now()}.png`), kG(hG, dG.activeCamera, {
                width: JG,
                height: rG
              }, (function(ZG) {
                uG(), fetch(ZG).then((function(GG) {
                  return GG.blob()
                })).then((function(ZG) {
                  (0, yG.downloadBlob)(ZG, GG), bG()
                })).catch((function(GG) {
                  console.error("Error processing screenshot:", GG), bG()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), uG(), bG()
              }))
            } else {
              let GG = "Ah";
              fG ? GG = "scene-normals" : QG && (GG = "scene-depth"), fG || QG ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: GG
                  } = await Promise.all([ZG.e(237), ZG.e(236), ZG.e(258), ZG.e(259), ZG.e(256), ZG.e(266), ZG.e(265), ZG.e(244)]).then((() => ZG(40644))), {
                    Color3: bG
                  } = await Promise.all([ZG.e(237), ZG.e(241)]).then((() => ZG(37618))), wG = [], SG = [];
                  if (EG.forEach((GG => {
                      const bG = GG.name.toLowerCase(),
                        ZG = GG.HA().boundingBox.center,
                        LG = dG.activeCamera.position.subtract(ZG).length();
                      bG.includes("sky") || bG.includes("background") || bG.includes("environment") || LG > 1e3 ? SG.push(GG) : wG.push(GG)
                    })), fG) wG.forEach(((ZG, wG) => {
                    const SG = ZG.getVerticesData("normal");
                    if (SG) {
                      const LG = [];
                      for (let GG = 0; GG < SG.length; GG += 3) {
                        const bG = Math.abs(SG[GG]),
                          ZG = Math.abs(SG[GG + 1]),
                          wG = Math.abs(SG[GG + 2]);
                        LG.push(bG, ZG, wG, 1)
                      }
                      ZG.setVerticesData("color", LG);
                      const yG = new GG(`vertexColorMat_${wG}`, dG);
                      yG.disableLighting = !0, yG.emissiveColor = new bG(1, 1, 1), yG.specularColor = new bG(0, 0, 0), ZG.material = yG
                    }
                  })), SG.forEach(((ZG, wG) => {
                    const SG = ZG.getVerticesData("position");
                    if (SG) {
                      const LG = [],
                        yG = SG.length / 3;
                      for (let GG = 0; GG < yG; GG++) LG.push(1, 1, 1, 1);
                      ZG.setVerticesData("color", LG);
                      const kG = new GG(`whiteMat_${wG}`, dG);
                      kG.disableLighting = !0, kG.emissiveColor = new bG(1, 1, 1), kG.specularColor = new bG(0, 0, 0), ZG.material = kG
                    }
                  }));
                  else if (QG) {
                    const ZG = dG.activeCamera.position;
                    let SG = 0,
                      LG = 1 / 0;
                    wG.forEach((GG => {
                      const bG = GG.HA().boundingBox.center,
                        wG = VG.TransformCoordinates(bG, GG.getWorldMatrix()),
                        yG = ZG.subtract(wG).length();
                      SG = Math.max(SG, yG), LG = Math.min(LG, yG)
                    }));
                    const yG = SG - LG;
                    SG += .1 * yG, LG = Math.max(0, LG - .1 * yG), yG < 1 && (SG = LG + 10), EG.forEach(((wG, yG) => {
                      const kG = wG.name.toLowerCase(),
                        UG = wG.HA().boundingBox.center,
                        YG = VG.TransformCoordinates(UG, wG.getWorldMatrix()),
                        pG = ZG.subtract(YG).length();
                      if (!(kG.includes("sky") || kG.includes("background") || kG.includes("environment") || pG > 1e3)) {
                        const ZG = 1 - Math.min(Math.max((pG - LG) / (SG - LG), 0), 1),
                          kG = new GG(`depthMat_${yG}`, dG);
                        kG.diffuseColor = new bG(ZG, ZG, ZG), kG.specularColor = new bG(0, 0, 0), wG.material = kG
                      }
                    }))
                  }
                })().then((() => Promise.all([ZG.e(237), ZG.e(236), ZG.e(258), ZG.e(259), ZG.e(256), ZG.e(266), ZG.e(260), ZG.e(265), ZG.e(263), ZG.e(255), ZG.e(268), ZG.e(279), ZG.e(316), ZG.e(249), ZG.e(267), ZG.e(235)]).then((() => ZG(61835))))).then((bG => bG.GLTF2Export.GLBAsync(dG, GG))).then((GG => {
                  uG(), GG.downloadFiles(), bG()
                })).catch((GG => {
                  console.error("Error exporting GLB:", GG), uG(), bG()
                }))
              }), 100) : Promise.all([ZG.e(237), ZG.e(236), ZG.e(258), ZG.e(259), ZG.e(256), ZG.e(266), ZG.e(260), ZG.e(265), ZG.e(263), ZG.e(255), ZG.e(268), ZG.e(279), ZG.e(316), ZG.e(249), ZG.e(267), ZG.e(235)]).then((() => ZG(61835))).then((ZG => {
                ZG.GLTF2Export.GLBAsync(dG, GG).then((GG => {
                  uG(), GG.downloadFiles(), bG()
                })).catch((GG => {
                  console.error("Error exporting GLB:", GG), uG(), bG()
                }))
              })).catch((GG => {
                console.error("Error importing serializers:", GG), uG(), bG()
              }))
            }
          })).catch((GG => {
            console.error("Error downloading the scene:", GG), bG()
          }))
        } catch (KG) {
          console.error("Error taking screenshot:", KG), bG()
        }
      }))
    }
    const pG = new class {
      constructor() {
        this.tools = YG.ALL_DEV_TOOLS
      }
      downloadScene(GG, bG) {
        return VG(GG, bG)
      }
      async setAmbientLightIntensity(GG) {
        const {
          Color3: bG
        } = await Promise.all([ZG.e(237), ZG.e(241)]).then((() => ZG(37618)));
        (0, LG.i)().HK.Dv().ambientColor = bG.FromArray([GG, GG, GG])
      }
      capturePhoto(GG, bG, ZG) {
        return function(GG, bG, ZG, wG) {
          return (0, kG.c)(UG(GG), bG, ZG, wG)
        }((0, LG.i)(), GG, bG, ZG)
      }
    }
  },
  41367: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => kG,
      g: () => UG
    });
    var wG = ZG(1721);
    const SG = 33177600,
      LG = 3e4;
    let yG = !1;

    function kG(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: kG = 1,
        type: UG = "image/png",
        quality: YG
      } = wG;
      if (!GG.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (yG) return Promise.reject(new Error("A screenshot is already being taken"));
      yG = !0;
      const VG = function(GG, bG, ZG) {
        const wG = Math.max(1, GG),
          LG = Math.max(1, bG),
          yG = Math.min(1, ZG / Math.max(wG, LG), Math.sqrt(SG / (wG * LG)));
        return {
          width: Math.max(1, Math.floor(wG * yG)),
          height: Math.max(1, Math.floor(LG * yG))
        }
      }(bG, ZG, GG.maxTextureSize);
      return GG.resize(VG.width, VG.height, kG * VG.width / Math.max(1, bG)), new Promise(((bG, ZG) => {
        let wG, SG = 2,
          kG = null;
        const VG = () => {
          var bG;
          yG = !1, null === (bG = kG) || void 0 === bG || bG(), clearTimeout(wG), GG.restoreSize()
        };
        wG = setTimeout((() => {
          VG(), ZG(new Error("No frame was drawn to capture"))
        }), LG), kG = GG.onFrameDrawn((() => {
          if (SG--, SG > 0) return;
          const {
            canvas: wG
          } = GG, LG = {
            width: wG.width,
            height: wG.height
          };
          try {
            wG.toBlob((GG => {
              GG ? bG({
                blob: GG,
                ...LG
              }) : ZG(new Error("The canvas gave no image"))
            }), UG, YG)
          } catch (yG) {
            ZG(yG)
          } finally {
            VG()
          }
        }))
      }))
    }
    async function UG(GG, bG, ZG) {
      try {
        const SG = await kG(GG, bG, ZG);
        (0, wG.b)(SG.blob, `bloxd-screenshot-${SG.width}x${SG.height}-${Date.now()}.png`)
      } catch (SG) {
        console.error("Error taking screenshot:", SG)
      }
    }
  },
  37926: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => YG,
      h: () => kG,
      i: () => yG
    });
    var wG = ZG(37918),
      SG = ZG(37928);
    let LG = 0;

    function yG(GG, bG) {
      const ZG = GG;
      ZG._noaFaceGroups = null !== bG && void 0 !== bG ? bG : null, ZG._noaFaceEpoch = -1, ZG._noaFaceMask = -1, ZG._noaFaceCount = -1, ZG._noaFaceMaterial = null;
      const wG = GG.aE;
      wG && 1 === wG.length && (wG[0].indexStart = 0, wG[0].indexCount = GG.getTotalIndices())
    }

    function kG(GG, bG) {
      if (bG) {
        LG++;
        for (const bG of GG) {
          const GG = bG._noaFaceGroups;
          GG && yG(bG, GG)
        }
      } else LG = Math.max(0, LG - 1)
    }

    function UG(GG, bG, ZG) {
      let SG = -1,
        LG = 0;
      for (let yG = 0; yG < wG.d; yG++) {
        const ZG = GG[yG],
          kG = GG[yG + 1];
        kG > ZG && bG & 1 << wG.c[yG] && (SG < 0 && (SG = ZG), LG = kG)
      }
      return SG < 0 ? (ZG[0] = 0, ZG[1] = 0, 0) : (ZG[0] = SG, ZG[1] = LG - SG, LG - SG)
    }
    class YG {
      constructor(GG, bG) {
        this.rK = GG, this.engine = bG, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(GG, bG) {
        if (!bG) return;
        const ZG = bG.getProjectionMatrix().m,
          yG = 0 === LG && 0 === ZG[15],
          kG = bG.globalPosition,
          {
            engine: YG
          } = this,
          VG = yG ? (0, SG.d)(ZG, YG.getRenderWidth(), YG.getRenderHeight()) : 0;
        kG.x === this.eyeX && kG.y === this.eyeY && kG.z === this.eyeZ && VG === this.focalPx && yG === this.culling || (this.epoch++, this.eyeX = kG.x, this.eyeY = kG.y, this.eyeZ = kG.z, this.focalPx = VG, this.culling = yG);
        const {
          epoch: pG,
          range: fG
        } = this, QG = this.rK / 2, KG = QG * Math.sqrt(3), hG = GG.data, dG = GG.length;
        let JG = 0;
        for (let LG = 0; LG < dG; LG++) {
          const GG = hG[LG],
            bG = GG._noaFaceGroups;
          if (bG && (GG._noaFaceEpoch !== pG || GG._noaFaceMaterial !== GG.material)) {
            GG._noaFaceEpoch = pG, GG._noaFaceMaterial = GG.material;
            const ZG = GG.aE,
              LG = ZG && 1 === ZG.length ? ZG[0] : null;
            let YG = -1;
            if (yG && LG && (0, wG.n)(GG.material)) {
              const ZG = GG.position,
                wG = kG.x - ZG.x,
                LG = kG.y - ZG.y,
                yG = kG.z - ZG.z,
                UG = wG - QG,
                pG = LG - QG,
                fG = yG - QG,
                hG = Math.sqrt(UG * UG + pG * pG + fG * fG) + KG;
              YG = (0, SG.m)(bG, wG, LG, yG, (0, SG.h)(hG, VG))
            }
            if (LG && YG !== GG._noaFaceMask) {
              GG._noaFaceMask = YG;
              let ZG = 0,
                SG = bG[wG.d]; - 1 !== YG && (SG = UG(bG, YG, fG), ZG = fG[0]), GG._noaFaceCount = SG, LG.indexStart = 6 * ZG, LG.indexCount = 6 * SG, LG.setBoundingInfo(GG.HA())
            }
          }
          bG && 0 === GG._noaFaceCount || (hG[JG++] = GG)
        }
        GG.length = JG
      }
    }
  },
  37906: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => UG,
      h: () => kG
    });
    const wG = new WeakSet;
    let SG = 0;
    const LG = new Set;

    function yG(GG, bG) {
      GG._data = bG
    }

    function kG(GG) {
      var bG, ZG;
      (null !== (bG = null === (ZG = GG.getBuffer()) || void 0 === ZG ? void 0 : ZG.rp) && void 0 !== bG ? bG : 0) > 0 && (wG.add(GG), 0 === SG ? yG(GG, null) : LG.add(GG))
    }

    function UG(GG) {
      SG++;
      for (const ZG of function(GG) {
          const bG = new Set;
          for (const SG of GG) {
            const GG = SG.geometry;
            for (const SG of Object.values(null !== (ZG = null === GG || void 0 === GG ? void 0 : GG.getVertexBuffers()) && void 0 !== ZG ? ZG : {})) {
              var ZG;
              const GG = SG.getWrapperBuffer();
              wG.has(GG) && bG.add(GG)
            }
          }
          return bG
        }(GG)) ZG.getData() || YG(ZG), LG.add(ZG);
      let bG = !0;
      return () => {
        if (bG && (bG = !1, SG--, 0 === SG)) {
          for (const GG of LG) yG(GG, null);
          LG.clear()
        }
      }
    }

    function YG(GG) {
      const bG = GG.getBuffer();
      if (!bG || !(bG.rp > 0)) return;
      const ZG = GG._engine,
        wG = new Uint8Array(bG.rp);
      ZG.bindArrayBuffer(bG), ZG._gl.getBufferSubData(ZG._gl.ARRAY_BUFFER, 0, wG), ZG._resetVertexBufferBinding(), yG(GG, wG)
    }
  },
  37918: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => yG,
      d: () => LG,
      f: () => UG,
      g: () => wG,
      i: () => kG,
      k: () => SG,
      n: () => YG
    });
    const wG = 6,
      SG = [0, 2, 4, 1, 3, 5, 0, 2],
      LG = 6,
      yG = [1, 0, 3, 2, 5, 4];
    for (let VG = LG; VG < SG.length; VG++)
      if (SG[VG] !== SG[VG - LG]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const kG = SG.length + 1,
      UG = (() => {
        const GG = [];
        for (let bG = 0; bG < LG; bG++) GG[SG[bG]] = bG;
        return GG
      })();

    function YG(GG) {
      return !!GG && GG.backFaceCulling && (0 === GG.transparencyMode || 1 === GG.transparencyMode)
    }
  },
  37928: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => kG,
      h: () => UG,
      k: () => VG,
      m: () => YG,
      q: () => KG
    });
    var wG = ZG(37918);
    const SG = 1 / 16,
      LG = 1 / 64,
      yG = 2048;
    wG.g;

    function kG(GG, bG, ZG) {
      return Math.min(Math.abs(GG[0] * bG), Math.abs(GG[5] * ZG)) / 2
    }

    function UG(GG, bG) {
      return SG + LG * GG * GG / bG
    }

    function YG(GG, bG, ZG, SG, LG) {
      const yG = wG.i;
      return VG(GG[yG], GG[yG + 1], GG[yG + 2], GG[yG + 3], GG[yG + 4], GG[yG + 5], bG, ZG, SG, LG)
    }

    function VG(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG) {
      return (yG <= GG - YG ? 0 : 1) | (yG >= bG + YG ? 0 : 2) | (kG <= ZG - YG ? 0 : 4) | (kG >= wG + YG ? 0 : 8) | (UG <= SG - YG ? 0 : 16) | (UG >= LG + YG ? 0 : 32)
    }
    const pG = (() => {
        const GG = [];
        for (let bG = 0; bG < wG.k.length; bG++) {
          let ZG = 0;
          for (let SG = bG + 1; SG <= wG.k.length; SG++) {
            const LG = 1 << wG.k[SG - 1];
            if (ZG & LG) break;
            ZG |= LG, GG.push({
              start: bG,
              end: SG,
              uZ: ZG
            })
          }
        }
        return GG
      })(),
      fG = [];

    function QG(GG, bG) {
      const ZG = wG.f[bG];
      return GG[ZG + 1] - GG[ZG]
    }

    function KG(GG, bG, ZG) {
      let SG = 0;
      for (let yG = 0; yG < wG.g; yG++) QG(GG, yG) > 0 && (SG |= 1 << yG);
      if (0 === (bG &= SG)) return 0;
      if (bG === SG) return ZG[0] = 0, ZG[1] = GG[wG.d], 1;
      let LG = null,
        kG = 1 / 0;
      for (const YG of function(GG) {
          let bG = fG[GG];
          if (bG) return bG;
          const ZG = new Map,
            wG = (GG, bG) => {
              const wG = 4 * GG + bG.length / 2;
              ZG.has(wG) || ZG.set(wG, {
                uZ: GG,
                windows: bG
              })
            };
          for (const LG of pG)
            if ((LG.uZ & GG) === GG && wG(LG.uZ, [LG.start, LG.end]), 0 !== (LG.uZ & GG))
              for (const bG of pG) bG.start < LG.end || 0 !== (LG.uZ & bG.uZ) || 0 === (bG.uZ & GG) || ((LG.uZ | bG.uZ) & GG) !== GG || wG(LG.uZ | bG.uZ, [LG.start, LG.end, bG.start, bG.end]);
          const SG = [...ZG.values()];
          return bG = SG.filter((GG => !SG.some((bG => bG !== GG && (bG.uZ & GG.uZ) === bG.uZ && bG.windows.length <= GG.windows.length)))), fG[GG] = bG, bG
        }(bG)) {
        let ZG = (YG.windows.length / 2 - 1) * yG;
        const UG = YG.uZ & ~bG & SG;
        for (let bG = 0; bG < wG.g; bG++) UG & 1 << bG && (ZG += QG(GG, bG));
        ZG < kG && (LG = YG, kG = ZG)
      }
      const UG = LG.windows;
      for (let wG = 0; wG < UG.length; wG += 2) {
        const bG = GG[UG[wG]];
        ZG[wG] = bG, ZG[wG + 1] = GG[UG[wG + 1]] - bG
      }
      return UG.length / 2
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);