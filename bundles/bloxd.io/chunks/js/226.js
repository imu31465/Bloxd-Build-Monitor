export const id = 226;
export const ids = [226];
export const modules = {
  40158: (YY, rY, DY) => {
    DY.d(rY, {
      noaDevTools: () => uY
    });
    var FY = DY(36812),
      AY = DY(36801),
      IY = DY(2501),
      RY = DY(1699);

    function OY(YY) {
      const {
        sQ: rY
      } = YY, DY = rY.engine, FY = {
        width: DY.getRenderWidth(),
        height: DY.getRenderHeight()
      };
      return {
        canvas: DY.getRenderingCanvas(),
        maxTextureSize: DY.getCaps().maxTextureSize,
        drawing: () => !YY.Wm,
        resize: (YY, rY) => {
          DY.setSize(YY, rY)
        },
        restoreSize: () => {
          DY.setSize(FY.width, FY.height), rY.resize()
        },
        onFrameDrawn: rY => (YY.on("afterRender", rY), () => {
          YY.off("afterRender", rY)
        })
      }
    }
    var gY = DY(40147),
      aY = DY(8643);

    function vY(YY, rY) {
      let {
        width: aY,
        height: vY,
        colouring: uY
      } = rY;
      const sY = "normals" === uY,
        iY = "depth" === uY;
      return new Promise((rY => {
        try {
          const yY = (0, IY.e)();
          if (yY.sQ.iQ) return "screenshot" !== YY || null !== uY ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void rY()) : void(0, gY.e)(OY(yY), aY, vY).finally(rY);
          const QY = yY.sQ.engine,
            oY = yY.sQ.hT(),
            WY = aY,
            EY = vY;
          Promise.all([Promise.all([DY.e(243), DY.e(244), DY.e(224)]).then((() => DY(60196))), Promise.all([DY.e(223), DY.e(222), DY.e(243), DY.e(244), DY.e(241), DY.e(245), DY.e(248), DY.e(301), DY.e(227)]).then((() => DY(60201))), Promise.all([DY.e(223), DY.e(222), DY.e(243), DY.e(244), DY.e(241), DY.e(251), DY.e(245), DY.e(253), DY.e(229)]).then((() => DY(60208))), DY.e(344).then((() => DY(60213))), Promise.all([DY.e(222), DY.e(218)]).then((() => DY(36518))), DY.e(242).then((() => DY(60220))), DY.e(217).then((() => DY(60229)))]).then((IY => {
            const {
              CreateScreenshotUsingRenderTarget: OY
            } = IY[1], {
              ShaderMaterial: gY
            } = IY[2], {
              ShaderLanguage: aY
            } = IY[3], {
              xy: vY
            } = IY[4], {
              registerDevtoolsShader: uY
            } = IY[6], yY = aY.GLSL, mY = new Map, VY = oY.meshes.filter((YY => YY.material));
            let SY = !1,
              lY = null;

            function TY() {
              var YY;
              SY && (SY = !1, (0, FY.e)(oY.meshes, !1)), null === (YY = lY) || void 0 === YY || YY(), lY = null, VY.forEach((YY => {
                const rY = mY.get(YY);
                rY && (YY.material = rY)
              }))
            }
            if (sY) {
              const YY = [],
                rY = [];
              VY.forEach((DY => {
                const FY = DY.name.toLowerCase(),
                  AY = DY.oB().boundingBox.center,
                  IY = oY.activeCamera.position.subtract(AY).length();
                FY.includes("sky") || FY.includes("background") || FY.includes("environment") || IY > 1e3 ? rY.push(DY) : YY.push(DY)
              })), uY("devtoolsNormal", yY);
              const DY = new gY("normalMaterial", oY, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: yY
              });
              uY("devtoolsWhite", yY);
              const FY = new gY("whiteMaterial", oY, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: yY
              });
              YY.forEach((YY => {
                mY.set(YY, YY.material), YY.material = DY
              })), rY.forEach((YY => {
                mY.set(YY, YY.material), YY.material = FY
              }))
            } else if (iY) {
              uY("devtoolsDepth", yY);
              const YY = oY.activeCamera.position;
              let rY = 0,
                DY = 1 / 0;
              VY.forEach((FY => {
                const AY = FY.name.toLowerCase();
                if (AY.includes("sky") || AY.includes("background") || AY.includes("environment")) return;
                const IY = FY.oB().boundingBox.center,
                  RY = vY.TransformCoordinates(IY, FY.getWorldMatrix()),
                  OY = YY.subtract(RY).length();
                OY > 1e3 || (rY = Math.max(rY, OY), DY = Math.min(DY, OY))
              }));
              const FY = rY - DY;
              rY += .1 * FY, DY = Math.max(0, DY - .1 * FY), console.log(`Depth range: min=${DY.toFixed(2)}, max=${rY.toFixed(2)}, range=${FY.toFixed(2)}`), FY < 1 && (rY = DY + 10);
              const AY = new gY("depthMaterial", oY, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: yY
              });
              AY.setVector3("cameraPosition", YY), AY.setFloat("maxDepth", rY), AY.setFloat("minDepth", DY), VY.forEach((YY => {
                mY.set(YY, YY.material), YY.material = AY
              }))
            }
            if ((0, FY.e)(oY.meshes, !0), SY = !0, "glb" === YY && (lY = (0, AY.c)(oY.meshes)), "screenshot" === YY) {
              let YY = `bloxd-screenshot-${WY}x${EY}-${Date.now()}.png`;
              sY ? YY = `bloxd-screenshot-normals-${WY}x${EY}-${Date.now()}.png` : iY && (YY = `bloxd-screenshot-depth-${WY}x${EY}-${Date.now()}.png`), OY(QY, oY.activeCamera, {
                width: WY,
                height: EY
              }, (function(DY) {
                TY(), fetch(DY).then((function(YY) {
                  return YY.blob()
                })).then((function(DY) {
                  (0, RY.downloadBlob)(DY, YY), rY()
                })).catch((function(YY) {
                  console.error("Error processing screenshot:", YY), rY()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), TY(), rY()
              }))
            } else {
              let YY = "LQ";
              sY ? YY = "scene-normals" : iY && (YY = "scene-depth"), sY || iY ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: YY
                  } = await Promise.all([DY.e(223), DY.e(222), DY.e(243), DY.e(244), DY.e(241), DY.e(251), DY.e(250), DY.e(228)]).then((() => DY(39391))), {
                    Color3: rY
                  } = await Promise.all([DY.e(223), DY.e(225)]).then((() => DY(36586))), FY = [], AY = [];
                  if (VY.forEach((YY => {
                      const rY = YY.name.toLowerCase(),
                        DY = YY.oB().boundingBox.center,
                        IY = oY.activeCamera.position.subtract(DY).length();
                      rY.includes("sky") || rY.includes("background") || rY.includes("environment") || IY > 1e3 ? AY.push(YY) : FY.push(YY)
                    })), sY) FY.forEach(((DY, FY) => {
                    const AY = DY.getVerticesData("normal");
                    if (AY) {
                      const IY = [];
                      for (let YY = 0; YY < AY.length; YY += 3) {
                        const rY = Math.abs(AY[YY]),
                          DY = Math.abs(AY[YY + 1]),
                          FY = Math.abs(AY[YY + 2]);
                        IY.push(rY, DY, FY, 1)
                      }
                      DY.setVerticesData("color", IY);
                      const RY = new YY(`vertexColorMat_${FY}`, oY);
                      RY.disableLighting = !0, RY.emissiveColor = new rY(1, 1, 1), RY.specularColor = new rY(0, 0, 0), DY.material = RY
                    }
                  })), AY.forEach(((DY, FY) => {
                    const AY = DY.getVerticesData("position");
                    if (AY) {
                      const IY = [],
                        RY = AY.length / 3;
                      for (let YY = 0; YY < RY; YY++) IY.push(1, 1, 1, 1);
                      DY.setVerticesData("color", IY);
                      const OY = new YY(`whiteMat_${FY}`, oY);
                      OY.disableLighting = !0, OY.emissiveColor = new rY(1, 1, 1), OY.specularColor = new rY(0, 0, 0), DY.material = OY
                    }
                  }));
                  else if (iY) {
                    const DY = oY.activeCamera.position;
                    let AY = 0,
                      IY = 1 / 0;
                    FY.forEach((YY => {
                      const rY = YY.oB().boundingBox.center,
                        FY = vY.TransformCoordinates(rY, YY.getWorldMatrix()),
                        RY = DY.subtract(FY).length();
                      AY = Math.max(AY, RY), IY = Math.min(IY, RY)
                    }));
                    const RY = AY - IY;
                    AY += .1 * RY, IY = Math.max(0, IY - .1 * RY), RY < 1 && (AY = IY + 10), VY.forEach(((FY, RY) => {
                      const OY = FY.name.toLowerCase(),
                        gY = FY.oB().boundingBox.center,
                        aY = vY.TransformCoordinates(gY, FY.getWorldMatrix()),
                        uY = DY.subtract(aY).length();
                      if (!(OY.includes("sky") || OY.includes("background") || OY.includes("environment") || uY > 1e3)) {
                        const DY = 1 - Math.min(Math.max((uY - IY) / (AY - IY), 0), 1),
                          OY = new YY(`depthMat_${RY}`, oY);
                        OY.diffuseColor = new rY(DY, DY, DY), OY.specularColor = new rY(0, 0, 0), FY.material = OY
                      }
                    }))
                  }
                })().then((() => Promise.all([DY.e(223), DY.e(222), DY.e(243), DY.e(244), DY.e(241), DY.e(251), DY.e(245), DY.e(250), DY.e(248), DY.e(240), DY.e(253), DY.e(281), DY.e(301), DY.e(234), DY.e(252), DY.e(221)]).then((() => DY(60234))))).then((rY => rY.GLTF2Export.GLBAsync(oY, YY))).then((YY => {
                  TY(), YY.downloadFiles(), rY()
                })).catch((YY => {
                  console.error("Error exporting GLB:", YY), TY(), rY()
                }))
              }), 100) : Promise.all([DY.e(223), DY.e(222), DY.e(243), DY.e(244), DY.e(241), DY.e(251), DY.e(245), DY.e(250), DY.e(248), DY.e(240), DY.e(253), DY.e(281), DY.e(301), DY.e(234), DY.e(252), DY.e(221)]).then((() => DY(60234))).then((DY => {
                DY.GLTF2Export.GLBAsync(oY, YY).then((YY => {
                  TY(), YY.downloadFiles(), rY()
                })).catch((YY => {
                  console.error("Error exporting GLB:", YY), TY(), rY()
                }))
              })).catch((YY => {
                console.error("Error importing serializers:", YY), TY(), rY()
              }))
            }
          })).catch((YY => {
            console.error("Error downloading the scene:", YY), rY()
          }))
        } catch (yY) {
          console.error("Error taking screenshot:", yY), rY()
        }
      }))
    }
    const uY = new class {
      constructor() {
        this.tools = aY.ALL_DEV_TOOLS
      }
      downloadScene(YY, rY) {
        return vY(YY, rY)
      }
      async setAmbientLightIntensity(YY) {
        const {
          Color3: rY
        } = await Promise.all([DY.e(223), DY.e(225)]).then((() => DY(36586)));
        (0, IY.e)().sQ.hT().ambientColor = rY.FromArray([YY, YY, YY])
      }
    }
  },
  40147: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => gY
    });
    var FY = DY(1716);
    const AY = 33177600,
      IY = 3e4;
    let RY = !1;

    function OY(YY, rY, DY) {
      if (!YY.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (RY) return Promise.reject(new Error("A screenshot is already being taken"));
      RY = !0;
      const FY = function(YY, rY, DY) {
        const FY = Math.max(1, YY),
          IY = Math.max(1, rY),
          RY = Math.min(1, DY / Math.max(FY, IY), Math.sqrt(AY / (FY * IY)));
        return {
          width: Math.max(1, Math.floor(FY * RY)),
          height: Math.max(1, Math.floor(IY * RY))
        }
      }(rY, DY, YY.maxTextureSize);
      return YY.resize(FY.width, FY.height), new Promise(((rY, DY) => {
        let FY, AY = 2,
          OY = null;
        const gY = () => {
          var rY;
          RY = !1, null === (rY = OY) || void 0 === rY || rY(), clearTimeout(FY), YY.restoreSize()
        };
        FY = setTimeout((() => {
          gY(), DY(new Error("No frame was drawn to capture"))
        }), IY), OY = YY.onFrameDrawn((() => {
          if (AY--, AY > 0) return;
          const {
            canvas: FY
          } = YY, IY = {
            width: FY.width,
            height: FY.height
          };
          try {
            FY.toBlob((YY => {
              YY ? rY({
                blob: YY,
                ...IY
              }) : DY(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (RY) {
            DY(RY)
          } finally {
            gY()
          }
        }))
      }))
    }
    async function gY(YY, rY, DY) {
      try {
        const AY = await OY(YY, rY, DY);
        (0, FY.d)(AY.blob, `bloxd-screenshot-${AY.width}x${AY.height}-${Date.now()}.png`)
      } catch (AY) {
        console.error("Error taking screenshot:", AY)
      }
    }
  },
  36812: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => aY,
      e: () => OY,
      h: () => RY
    });
    var FY = DY(36809),
      AY = DY(36817);
    let IY = 0;

    function RY(YY, rY) {
      const DY = YY;
      DY._noaFaceGroups = null !== rY && void 0 !== rY ? rY : null, DY._noaFaceEpoch = -1, DY._noaFaceMask = -1, DY._noaFaceCount = -1, DY._noaFaceMaterial = null;
      const FY = YY.qm;
      FY && 1 === FY.length && (FY[0].indexStart = 0, FY[0].indexCount = YY.getTotalIndices())
    }

    function OY(YY, rY) {
      if (rY) {
        IY++;
        for (const rY of YY) {
          const YY = rY._noaFaceGroups;
          YY && RY(rY, YY)
        }
      } else IY = Math.max(0, IY - 1)
    }

    function gY(YY, rY, DY) {
      let AY = -1,
        IY = 0;
      for (let RY = 0; RY < FY.c; RY++) {
        const DY = YY[RY],
          OY = YY[RY + 1];
        OY > DY && rY & 1 << FY.b[RY] && (AY < 0 && (AY = DY), IY = OY)
      }
      return AY < 0 ? (DY[0] = 0, DY[1] = 0, 0) : (DY[0] = AY, DY[1] = IY - AY, IY - AY)
    }
    class aY {
      constructor(YY, rY) {
        this.Jy = YY, this.engine = rY, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(YY, rY) {
        if (!rY) return;
        const DY = rY.getProjectionMatrix().m,
          RY = 0 === IY && 0 === DY[15],
          OY = rY.globalPosition,
          {
            engine: aY
          } = this,
          vY = RY ? (0, AY.c)(DY, aY.getRenderWidth(), aY.getRenderHeight()) : 0;
        OY.x === this.eyeX && OY.y === this.eyeY && OY.z === this.eyeZ && vY === this.focalPx && RY === this.culling || (this.epoch++, this.eyeX = OY.x, this.eyeY = OY.y, this.eyeZ = OY.z, this.focalPx = vY, this.culling = RY);
        const {
          epoch: uY,
          range: sY
        } = this, iY = this.Jy / 2, yY = iY * Math.sqrt(3), QY = YY.data, oY = YY.length;
        let WY = 0;
        for (let IY = 0; IY < oY; IY++) {
          const YY = QY[IY],
            rY = YY._noaFaceGroups;
          if (rY && (YY._noaFaceEpoch !== uY || YY._noaFaceMaterial !== YY.material)) {
            YY._noaFaceEpoch = uY, YY._noaFaceMaterial = YY.material;
            const DY = YY.qm,
              IY = DY && 1 === DY.length ? DY[0] : null;
            let aY = -1;
            if (RY && IY && (0, FY.q)(YY.material)) {
              const DY = YY.position,
                FY = OY.x - DY.x,
                IY = OY.y - DY.y,
                RY = OY.z - DY.z,
                gY = FY - iY,
                uY = IY - iY,
                sY = RY - iY,
                QY = Math.sqrt(gY * gY + uY * uY + sY * sY) + yY;
              aY = (0, AY.l)(rY, FY, IY, RY, (0, AY.f)(QY, vY))
            }
            if (IY && aY !== YY._noaFaceMask) {
              YY._noaFaceMask = aY;
              let DY = 0,
                AY = rY[FY.c]; - 1 !== aY && (AY = gY(rY, aY, sY), DY = sY[0]), YY._noaFaceCount = AY, IY.indexStart = 6 * DY, IY.indexCount = 6 * AY, IY.setBoundingInfo(YY.oB())
            }
          }
          rY && 0 === YY._noaFaceCount || (QY[WY++] = YY)
        }
        YY.length = WY
      }
    }
  },
  36801: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => gY,
      g: () => OY
    });
    const FY = new WeakSet;
    let AY = 0;
    const IY = new Set;

    function RY(YY, rY) {
      YY._data = rY
    }

    function OY(YY) {
      var rY, DY;
      (null !== (rY = null === (DY = YY.getBuffer()) || void 0 === DY ? void 0 : DY.gu) && void 0 !== rY ? rY : 0) > 0 && (FY.add(YY), 0 === AY ? RY(YY, null) : IY.add(YY))
    }

    function gY(YY) {
      AY++;
      for (const DY of function(YY) {
          const rY = new Set;
          for (const AY of YY) {
            const YY = AY.geometry;
            for (const AY of Object.values(null !== (DY = null === YY || void 0 === YY ? void 0 : YY.getVertexBuffers()) && void 0 !== DY ? DY : {})) {
              var DY;
              const YY = AY.getWrapperBuffer();
              FY.has(YY) && rY.add(YY)
            }
          }
          return rY
        }(YY)) DY.getData() || aY(DY), IY.add(DY);
      let rY = !0;
      return () => {
        if (rY && (rY = !1, AY--, 0 === AY)) {
          for (const YY of IY) RY(YY, null);
          IY.clear()
        }
      }
    }

    function aY(YY) {
      const rY = YY.getBuffer();
      if (!rY || !(rY.gu > 0)) return;
      const DY = YY._engine,
        FY = new Uint8Array(rY.gu);
      DY.bindArrayBuffer(rY), DY._gl.getBufferSubData(DY._gl.ARRAY_BUFFER, 0, FY), DY._resetVertexBufferBinding(), RY(YY, FY)
    }
  },
  36809: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => RY,
      c: () => IY,
      g: () => gY,
      i: () => FY,
      m: () => OY,
      p: () => AY,
      q: () => aY
    });
    const FY = 6,
      AY = [0, 2, 4, 1, 3, 5, 0, 2],
      IY = 6,
      RY = [1, 0, 3, 2, 5, 4];
    for (let vY = IY; vY < AY.length; vY++)
      if (AY[vY] !== AY[vY - IY]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const OY = AY.length + 1,
      gY = (() => {
        const YY = [];
        for (let rY = 0; rY < IY; rY++) YY[AY[rY]] = rY;
        return YY
      })();

    function aY(YY) {
      return !!YY && YY.backFaceCulling && (0 === YY.transparencyMode || 1 === YY.transparencyMode)
    }
  },
  36817: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => OY,
      f: () => gY,
      i: () => vY,
      l: () => aY,
      m: () => yY
    });
    var FY = DY(36809);
    const AY = 1 / 16,
      IY = 1 / 64,
      RY = 2048;
    FY.i;

    function OY(YY, rY, DY) {
      return Math.min(Math.abs(YY[0] * rY), Math.abs(YY[5] * DY)) / 2
    }

    function gY(YY, rY) {
      return AY + IY * YY * YY / rY
    }

    function aY(YY, rY, DY, AY, IY) {
      const RY = FY.m;
      return vY(YY[RY], YY[RY + 1], YY[RY + 2], YY[RY + 3], YY[RY + 4], YY[RY + 5], rY, DY, AY, IY)
    }

    function vY(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY) {
      return (RY <= YY - aY ? 0 : 1) | (RY >= rY + aY ? 0 : 2) | (OY <= DY - aY ? 0 : 4) | (OY >= FY + aY ? 0 : 8) | (gY <= AY - aY ? 0 : 16) | (gY >= IY + aY ? 0 : 32)
    }
    const uY = (() => {
        const YY = [];
        for (let rY = 0; rY < FY.p.length; rY++) {
          let DY = 0;
          for (let AY = rY + 1; AY <= FY.p.length; AY++) {
            const IY = 1 << FY.p[AY - 1];
            if (DY & IY) break;
            DY |= IY, YY.push({
              start: rY,
              end: AY,
              EF: DY
            })
          }
        }
        return YY
      })(),
      sY = [];

    function iY(YY, rY) {
      const DY = FY.g[rY];
      return YY[DY + 1] - YY[DY]
    }

    function yY(YY, rY, DY) {
      let AY = 0;
      for (let RY = 0; RY < FY.i; RY++) iY(YY, RY) > 0 && (AY |= 1 << RY);
      if (0 === (rY &= AY)) return 0;
      if (rY === AY) return DY[0] = 0, DY[1] = YY[FY.c], 1;
      let IY = null,
        OY = 1 / 0;
      for (const aY of function(YY) {
          let rY = sY[YY];
          if (rY) return rY;
          const DY = new Map,
            FY = (YY, rY) => {
              const FY = 4 * YY + rY.length / 2;
              DY.has(FY) || DY.set(FY, {
                EF: YY,
                windows: rY
              })
            };
          for (const IY of uY)
            if ((IY.EF & YY) === YY && FY(IY.EF, [IY.start, IY.end]), 0 !== (IY.EF & YY))
              for (const rY of uY) rY.start < IY.end || 0 !== (IY.EF & rY.EF) || 0 === (rY.EF & YY) || ((IY.EF | rY.EF) & YY) !== YY || FY(IY.EF | rY.EF, [IY.start, IY.end, rY.start, rY.end]);
          const AY = [...DY.values()];
          return rY = AY.filter((YY => !AY.some((rY => rY !== YY && (rY.EF & YY.EF) === rY.EF && rY.windows.length <= YY.windows.length)))), sY[YY] = rY, rY
        }(rY)) {
        let DY = (aY.windows.length / 2 - 1) * RY;
        const gY = aY.EF & ~rY & AY;
        for (let rY = 0; rY < FY.i; rY++) gY & 1 << rY && (DY += iY(YY, rY));
        DY < OY && (IY = aY, OY = DY)
      }
      const gY = IY.windows;
      for (let FY = 0; FY < gY.length; FY += 2) {
        const rY = YY[gY[FY]];
        DY[FY] = rY, DY[FY + 1] = YY[gY[FY + 1]] - rY
      }
      return gY.length / 2
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);