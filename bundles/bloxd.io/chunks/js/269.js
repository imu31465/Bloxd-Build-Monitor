export const id = 269;
export const ids = [269];
export const modules = {
  42543: (WW, iW, OW) => {
    OW.d(iW, {
      noaDevTools: () => ZW
    });
    var mW = OW(38626),
      EW = OW(38612),
      NW = OW(2365),
      PW = OW(1856),
      LW = OW(42471);

    function cW(WW) {
      const {
        TZ: iW
      } = WW, OW = iW.engine, mW = {
        width: OW.getRenderWidth(),
        height: OW.getRenderHeight()
      };
      return {
        canvas: OW.getRenderingCanvas(),
        maxTextureSize: OW.getCaps().maxTextureSize,
        KZ: () => !WW.JZ,
        resize: (WW, iW) => {
          OW.setSize(WW, iW)
        },
        restoreSize: () => {
          OW.setSize(mW.width, mW.height), iW.resize()
        },
        onFrameDrawn: OW => {
          const mW = () => {
            iW.TY && OW()
          };
          return WW.on("afterRender", mW), () => {
            WW.off("afterRender", mW)
          }
        }
      }
    }
    var wW = OW(35114);

    function tW(WW, iW) {
      let {
        width: wW,
        height: tW,
        colouring: ZW
      } = iW;
      const xW = "normals" === ZW,
        lW = "depth" === ZW;
      return new Promise((iW => {
        try {
          const AW = (0, NW.h)();
          if (AW.TZ.Lb) return "screenshot" !== WW || null !== ZW ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void iW()) : void(0, LW.f)(cW(AW), wW, tW).finally(iW);
          const bW = AW.TZ.engine,
            jW = AW.TZ.bD(),
            UW = wW,
            kW = tW;
          Promise.all([Promise.all([OW.e(289), OW.e(290), OW.e(265)]).then((() => OW(64385))), Promise.all([OW.e(264), OW.e(263), OW.e(289), OW.e(290), OW.e(287), OW.e(291), OW.e(294), OW.e(629), OW.e(271)]).then((() => OW(64392))), Promise.all([OW.e(264), OW.e(263), OW.e(289), OW.e(290), OW.e(287), OW.e(297), OW.e(291), OW.e(299), OW.e(273)]).then((() => OW(64398))), OW.e(670).then((() => OW(64402))), Promise.all([OW.e(263), OW.e(259)]).then((() => OW(38235))), OW.e(288).then((() => OW(64405))), OW.e(268).then((() => OW(64410)))]).then((NW => {
            const {
              CreateScreenshotUsingRenderTarget: LW
            } = NW[1], {
              ShaderMaterial: cW
            } = NW[2], {
              ShaderLanguage: wW
            } = NW[3], {
              fA: tW
            } = NW[4], {
              registerDevtoolsShader: ZW
            } = NW[6], AW = wW.GLSL, sW = new Map, MW = jW.meshes.filter((WW => WW.material));
            let KW = !1,
              SW = null;

            function YW() {
              var WW;
              KW && (KW = !1, (0, mW.g)(jW.meshes, !1)), null === (WW = SW) || void 0 === WW || WW(), SW = null, MW.forEach((WW => {
                const iW = sW.get(WW);
                iW && (WW.material = iW)
              }))
            }
            if (xW) {
              const WW = [],
                iW = [];
              MW.forEach((OW => {
                const mW = OW.name.toLowerCase(),
                  EW = OW.KV().boundingBox.center,
                  NW = jW.activeCamera.position.subtract(EW).length();
                mW.includes("sky") || mW.includes("background") || mW.includes("environment") || NW > 1e3 ? iW.push(OW) : WW.push(OW)
              })), ZW("devtoolsNormal", AW);
              const OW = new cW("normalMaterial", jW, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: AW
              });
              ZW("devtoolsWhite", AW);
              const mW = new cW("whiteMaterial", jW, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: AW
              });
              WW.forEach((WW => {
                sW.set(WW, WW.material), WW.material = OW
              })), iW.forEach((WW => {
                sW.set(WW, WW.material), WW.material = mW
              }))
            } else if (lW) {
              ZW("devtoolsDepth", AW);
              const WW = jW.activeCamera.position;
              let iW = 0,
                OW = 1 / 0;
              MW.forEach((mW => {
                const EW = mW.name.toLowerCase();
                if (EW.includes("sky") || EW.includes("background") || EW.includes("environment")) return;
                const NW = mW.KV().boundingBox.center,
                  PW = tW.TransformCoordinates(NW, mW.getWorldMatrix()),
                  LW = WW.subtract(PW).length();
                LW > 1e3 || (iW = Math.max(iW, LW), OW = Math.min(OW, LW))
              }));
              const mW = iW - OW;
              iW += .1 * mW, OW = Math.max(0, OW - .1 * mW), console.log(`Depth range: min=${OW.toFixed(2)}, max=${iW.toFixed(2)}, range=${mW.toFixed(2)}`), mW < 1 && (iW = OW + 10);
              const EW = new cW("depthMaterial", jW, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: AW
              });
              EW.setVector3("cameraPosition", WW), EW.setFloat("maxDepth", iW), EW.setFloat("minDepth", OW), MW.forEach((WW => {
                sW.set(WW, WW.material), WW.material = EW
              }))
            }
            if ((0, mW.g)(jW.meshes, !0), KW = !0, "glb" === WW && (SW = (0, EW.c)(jW.meshes)), "screenshot" === WW) {
              let WW = `bloxd-screenshot-${UW}x${kW}-${Date.now()}.png`;
              xW ? WW = `bloxd-screenshot-normals-${UW}x${kW}-${Date.now()}.png` : lW && (WW = `bloxd-screenshot-depth-${UW}x${kW}-${Date.now()}.png`), LW(bW, jW.activeCamera, {
                width: UW,
                height: kW
              }, (function(OW) {
                YW(), fetch(OW).then((function(WW) {
                  return WW.blob()
                })).then((function(OW) {
                  (0, PW.downloadBlob)(OW, WW), iW()
                })).catch((function(WW) {
                  console.error("Error processing screenshot:", WW), iW()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), YW(), iW()
              }))
            } else {
              let WW = "rb";
              xW ? WW = "scene-normals" : lW && (WW = "scene-depth"), xW || lW ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: WW
                  } = await Promise.all([OW.e(264), OW.e(263), OW.e(289), OW.e(290), OW.e(287), OW.e(297), OW.e(296), OW.e(272)]).then((() => OW(41782))), {
                    Color3: iW
                  } = await Promise.all([OW.e(264), OW.e(267)]).then((() => OW(38369))), mW = [], EW = [];
                  if (MW.forEach((WW => {
                      const iW = WW.name.toLowerCase(),
                        OW = WW.KV().boundingBox.center,
                        NW = jW.activeCamera.position.subtract(OW).length();
                      iW.includes("sky") || iW.includes("background") || iW.includes("environment") || NW > 1e3 ? EW.push(WW) : mW.push(WW)
                    })), xW) mW.forEach(((OW, mW) => {
                    const EW = OW.getVerticesData("normal");
                    if (EW) {
                      const NW = [];
                      for (let WW = 0; WW < EW.length; WW += 3) {
                        const iW = Math.abs(EW[WW]),
                          OW = Math.abs(EW[WW + 1]),
                          mW = Math.abs(EW[WW + 2]);
                        NW.push(iW, OW, mW, 1)
                      }
                      OW.setVerticesData("color", NW);
                      const PW = new WW(`vertexColorMat_${mW}`, jW);
                      PW.disableLighting = !0, PW.emissiveColor = new iW(1, 1, 1), PW.specularColor = new iW(0, 0, 0), OW.material = PW
                    }
                  })), EW.forEach(((OW, mW) => {
                    const EW = OW.getVerticesData("position");
                    if (EW) {
                      const NW = [],
                        PW = EW.length / 3;
                      for (let WW = 0; WW < PW; WW++) NW.push(1, 1, 1, 1);
                      OW.setVerticesData("color", NW);
                      const LW = new WW(`whiteMat_${mW}`, jW);
                      LW.disableLighting = !0, LW.emissiveColor = new iW(1, 1, 1), LW.specularColor = new iW(0, 0, 0), OW.material = LW
                    }
                  }));
                  else if (lW) {
                    const OW = jW.activeCamera.position;
                    let EW = 0,
                      NW = 1 / 0;
                    mW.forEach((WW => {
                      const iW = WW.KV().boundingBox.center,
                        mW = tW.TransformCoordinates(iW, WW.getWorldMatrix()),
                        PW = OW.subtract(mW).length();
                      EW = Math.max(EW, PW), NW = Math.min(NW, PW)
                    }));
                    const PW = EW - NW;
                    EW += .1 * PW, NW = Math.max(0, NW - .1 * PW), PW < 1 && (EW = NW + 10), MW.forEach(((mW, PW) => {
                      const LW = mW.name.toLowerCase(),
                        cW = mW.KV().boundingBox.center,
                        wW = tW.TransformCoordinates(cW, mW.getWorldMatrix()),
                        ZW = OW.subtract(wW).length();
                      if (!(LW.includes("sky") || LW.includes("background") || LW.includes("environment") || ZW > 1e3)) {
                        const OW = 1 - Math.min(Math.max((ZW - NW) / (EW - NW), 0), 1),
                          LW = new WW(`depthMat_${PW}`, jW);
                        LW.diffuseColor = new iW(OW, OW, OW), LW.specularColor = new iW(0, 0, 0), mW.material = LW
                      }
                    }))
                  }
                })().then((() => Promise.all([OW.e(264), OW.e(263), OW.e(289), OW.e(290), OW.e(287), OW.e(297), OW.e(291), OW.e(296), OW.e(294), OW.e(286), OW.e(299), OW.e(311), OW.e(629), OW.e(278), OW.e(298), OW.e(262)]).then((() => OW(64419))))).then((iW => iW.GLTF2Export.GLBAsync(jW, WW))).then((WW => {
                  YW(), WW.downloadFiles(), iW()
                })).catch((WW => {
                  console.error("Error exporting GLB:", WW), YW(), iW()
                }))
              }), 100) : Promise.all([OW.e(264), OW.e(263), OW.e(289), OW.e(290), OW.e(287), OW.e(297), OW.e(291), OW.e(296), OW.e(294), OW.e(286), OW.e(299), OW.e(311), OW.e(629), OW.e(278), OW.e(298), OW.e(262)]).then((() => OW(64419))).then((OW => {
                OW.GLTF2Export.GLBAsync(jW, WW).then((WW => {
                  YW(), WW.downloadFiles(), iW()
                })).catch((WW => {
                  console.error("Error exporting GLB:", WW), YW(), iW()
                }))
              })).catch((WW => {
                console.error("Error importing serializers:", WW), YW(), iW()
              }))
            }
          })).catch((WW => {
            console.error("Error downloading the scene:", WW), iW()
          }))
        } catch (AW) {
          console.error("Error taking screenshot:", AW), iW()
        }
      }))
    }
    const ZW = new class {
      constructor() {
        this.tools = wW.ALL_DEV_TOOLS
      }
      downloadScene(WW, iW) {
        return tW(WW, iW)
      }
      async setAmbientLightIntensity(WW) {
        const {
          Color3: iW
        } = await Promise.all([OW.e(264), OW.e(267)]).then((() => OW(38369)));
        (0, NW.h)().TZ.bD().ambientColor = iW.FromArray([WW, WW, WW])
      }
      capturePhoto(WW, iW, OW) {
        return function(WW, iW, OW, mW) {
          return (0, LW.d)(cW(WW), iW, OW, mW)
        }((0, NW.h)(), WW, iW, OW)
      }
    }
  },
  42471: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => LW,
      f: () => cW
    });
    var mW = OW(1876);
    const EW = 33177600,
      NW = 3e4;
    let PW = !1;

    function LW(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: LW = 1,
        type: cW = "image/png",
        quality: wW
      } = mW;
      return WW.KZ() ? PW ? Promise.reject(new Error("A screenshot is already being taken")) : (PW = !0, new Promise(((mW, tW) => {
        let ZW, xW = 2,
          lW = null;
        const AW = () => {
          var iW;
          PW = !1, null === (iW = lW) || void 0 === iW || iW(), clearTimeout(ZW);
          try {
            WW.restoreSize()
          } catch (OW) {
            console.error("A screenshot couldn't size the canvas back", OW)
          }
        };
        ZW = setTimeout((() => {
          AW(), tW(new Error("No frame was drawn to capture"))
        }), NW);
        try {
          const mW = function(WW, iW, OW) {
            const mW = Math.max(1, WW),
              NW = Math.max(1, iW),
              PW = Math.min(1, OW / Math.max(mW, NW), Math.sqrt(EW / (mW * NW)));
            return {
              width: Math.max(1, Math.floor(mW * PW)),
              height: Math.max(1, Math.floor(NW * PW))
            }
          }(iW, OW, WW.maxTextureSize);
          WW.resize(mW.width, mW.height, LW * mW.width / Math.max(1, iW))
        } catch (bW) {
          return AW(), void tW(bW)
        }
        lW = WW.onFrameDrawn((() => {
          if (xW--, xW > 0) return;
          const {
            canvas: iW
          } = WW, OW = {
            width: iW.width,
            height: iW.height
          };
          try {
            iW.toBlob((WW => {
              WW ? mW({
                blob: WW,
                ...OW
              }) : tW(new Error("The canvas gave no image"))
            }), cW, wW)
          } catch (bW) {
            tW(bW)
          } finally {
            AW()
          }
        }))
      }))) : Promise.reject(new Error("Screenshots need a game to be running"))
    }
    async function cW(WW, iW, OW) {
      try {
        const EW = await LW(WW, iW, OW);
        (0, mW.e)(EW.blob, `bloxd-screenshot-${EW.width}x${EW.height}-${Date.now()}.png`)
      } catch (EW) {
        console.error("Error taking screenshot:", EW)
      }
    }
  },
  38626: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => wW,
      g: () => LW,
      i: () => PW
    });
    var mW = OW(38623),
      EW = OW(38631);
    let NW = 0;

    function PW(WW, iW) {
      const OW = WW;
      OW._noaFaceGroups = null !== iW && void 0 !== iW ? iW : null, OW._noaFaceEpoch = -1, OW._noaFaceMask = -1, OW._noaFaceCount = -1, OW._noaFaceMaterial = null;
      const mW = WW.hY;
      mW && 1 === mW.length && (mW[0].indexStart = 0, mW[0].indexCount = WW.getTotalIndices())
    }

    function LW(WW, iW) {
      if (iW) {
        NW++;
        for (const iW of WW) {
          const WW = iW._noaFaceGroups;
          WW && PW(iW, WW)
        }
      } else NW = Math.max(0, NW - 1)
    }

    function cW(WW, iW, OW) {
      let EW = -1,
        NW = 0;
      for (let PW = 0; PW < mW.f; PW++) {
        const OW = WW[PW],
          LW = WW[PW + 1];
        LW > OW && iW & 1 << mW.d[PW] && (EW < 0 && (EW = OW), NW = LW)
      }
      return EW < 0 ? (OW[0] = 0, OW[1] = 0, 0) : (OW[0] = EW, OW[1] = NW - EW, NW - EW)
    }
    class wW {
      constructor(WW, iW) {
        this.jZ = WW, this.engine = iW, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(WW, iW) {
        if (!iW) return;
        const OW = iW.getProjectionMatrix().m,
          PW = 0 === NW && 0 === OW[15],
          LW = iW.globalPosition,
          {
            engine: wW
          } = this,
          tW = PW ? (0, EW.e)(OW, wW.getRenderWidth(), wW.getRenderHeight()) : 0;
        LW.x === this.eyeX && LW.y === this.eyeY && LW.z === this.eyeZ && tW === this.focalPx && PW === this.culling || (this.epoch++, this.eyeX = LW.x, this.eyeY = LW.y, this.eyeZ = LW.z, this.focalPx = tW, this.culling = PW);
        const {
          epoch: ZW,
          range: xW
        } = this, lW = this.jZ / 2, AW = lW * Math.sqrt(3), bW = WW.data, jW = WW.length;
        let UW = 0;
        for (let NW = 0; NW < jW; NW++) {
          const WW = bW[NW],
            iW = WW._noaFaceGroups;
          if (iW && (WW._noaFaceEpoch !== ZW || WW._noaFaceMaterial !== WW.material)) {
            WW._noaFaceEpoch = ZW, WW._noaFaceMaterial = WW.material;
            const OW = WW.hY,
              NW = OW && 1 === OW.length ? OW[0] : null;
            let wW = -1;
            if (PW && NW && (0, mW.w)(WW.material)) {
              const OW = WW.position,
                mW = LW.x - OW.x,
                NW = LW.y - OW.y,
                PW = LW.z - OW.z,
                cW = mW - lW,
                ZW = NW - lW,
                xW = PW - lW,
                bW = Math.sqrt(cW * cW + ZW * ZW + xW * xW) + AW;
              wW = (0, EW.m)(iW, mW, NW, PW, (0, EW.h)(bW, tW))
            }
            if (NW && wW !== WW._noaFaceMask) {
              WW._noaFaceMask = wW;
              let OW = 0,
                EW = iW[mW.f]; - 1 !== wW && (EW = cW(iW, wW, xW), OW = xW[0]), WW._noaFaceCount = EW, NW.indexStart = 6 * OW, NW.indexCount = 6 * EW, NW.setBoundingInfo(WW.KV())
            }
          }
          iW && 0 === WW._noaFaceCount || (bW[UW++] = WW)
        }
        WW.length = UW
      }
    }
  },
  38612: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => cW,
      d: () => LW
    });
    const mW = new WeakSet;
    let EW = 0;
    const NW = new Set;

    function PW(WW, iW) {
      WW._data = iW
    }

    function LW(WW) {
      var iW, OW;
      (null !== (iW = null === (OW = WW.getBuffer()) || void 0 === OW ? void 0 : OW.aZ) && void 0 !== iW ? iW : 0) > 0 && (mW.add(WW), 0 === EW ? PW(WW, null) : NW.add(WW))
    }

    function cW(WW) {
      EW++;
      for (const OW of function(WW) {
          const iW = new Set;
          for (const EW of WW) {
            const WW = EW.geometry;
            for (const EW of Object.values(null !== (OW = null === WW || void 0 === WW ? void 0 : WW.getVertexBuffers()) && void 0 !== OW ? OW : {})) {
              var OW;
              const WW = EW.getWrapperBuffer();
              mW.has(WW) && iW.add(WW)
            }
          }
          return iW
        }(WW)) OW.getData() || wW(OW), NW.add(OW);
      let iW = !0;
      return () => {
        if (iW && (iW = !1, EW--, 0 === EW)) {
          for (const WW of NW) PW(WW, null);
          NW.clear()
        }
      }
    }

    function wW(WW) {
      const iW = WW.getBuffer();
      if (!iW || !(iW.aZ > 0)) return;
      const OW = WW._engine,
        mW = new Uint8Array(iW.aZ);
      OW.bindArrayBuffer(iW), OW._gl.getBufferSubData(OW._gl.ARRAY_BUFFER, 0, mW), OW._resetVertexBufferBinding(), PW(WW, mW)
    }
  },
  38623: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW,
      f: () => NW,
      g: () => cW,
      k: () => mW,
      o: () => LW,
      s: () => EW,
      w: () => wW
    });
    const mW = 6,
      EW = [0, 2, 4, 1, 3, 5, 0, 2],
      NW = 6,
      PW = [1, 0, 3, 2, 5, 4];
    for (let tW = NW; tW < EW.length; tW++)
      if (EW[tW] !== EW[tW - NW]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const LW = EW.length + 1,
      cW = (() => {
        const WW = [];
        for (let iW = 0; iW < NW; iW++) WW[EW[iW]] = iW;
        return WW
      })();

    function wW(WW) {
      return !!WW && WW.backFaceCulling && (0 === WW.transparencyMode || 1 === WW.transparencyMode)
    }
  },
  38631: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => LW,
      h: () => cW,
      j: () => tW,
      m: () => wW,
      o: () => AW
    });
    var mW = OW(38623);
    const EW = 1 / 16,
      NW = 1 / 64,
      PW = 2048;
    mW.k;

    function LW(WW, iW, OW) {
      return Math.min(Math.abs(WW[0] * iW), Math.abs(WW[5] * OW)) / 2
    }

    function cW(WW, iW) {
      return EW + NW * WW * WW / iW
    }

    function wW(WW, iW, OW, EW, NW) {
      const PW = mW.o;
      return tW(WW[PW], WW[PW + 1], WW[PW + 2], WW[PW + 3], WW[PW + 4], WW[PW + 5], iW, OW, EW, NW)
    }

    function tW(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW) {
      return (PW <= WW - wW ? 0 : 1) | (PW >= iW + wW ? 0 : 2) | (LW <= OW - wW ? 0 : 4) | (LW >= mW + wW ? 0 : 8) | (cW <= EW - wW ? 0 : 16) | (cW >= NW + wW ? 0 : 32)
    }
    const ZW = (() => {
        const WW = [];
        for (let iW = 0; iW < mW.s.length; iW++) {
          let OW = 0;
          for (let EW = iW + 1; EW <= mW.s.length; EW++) {
            const NW = 1 << mW.s[EW - 1];
            if (OW & NW) break;
            OW |= NW, WW.push({
              start: iW,
              end: EW,
              iW: OW
            })
          }
        }
        return WW
      })(),
      xW = [];

    function lW(WW, iW) {
      const OW = mW.g[iW];
      return WW[OW + 1] - WW[OW]
    }

    function AW(WW, iW, OW) {
      let EW = 0;
      for (let PW = 0; PW < mW.k; PW++) lW(WW, PW) > 0 && (EW |= 1 << PW);
      if (0 === (iW &= EW)) return 0;
      if (iW === EW) return OW[0] = 0, OW[1] = WW[mW.f], 1;
      let NW = null,
        LW = 1 / 0;
      for (const wW of function(WW) {
          let iW = xW[WW];
          if (iW) return iW;
          const OW = new Map,
            mW = (WW, iW) => {
              const mW = 4 * WW + iW.length / 2;
              OW.has(mW) || OW.set(mW, {
                iW: WW,
                windows: iW
              })
            };
          for (const NW of ZW)
            if ((NW.iW & WW) === WW && mW(NW.iW, [NW.start, NW.end]), 0 !== (NW.iW & WW))
              for (const iW of ZW) iW.start < NW.end || 0 !== (NW.iW & iW.iW) || 0 === (iW.iW & WW) || ((NW.iW | iW.iW) & WW) !== WW || mW(NW.iW | iW.iW, [NW.start, NW.end, iW.start, iW.end]);
          const EW = [...OW.values()];
          return iW = EW.filter((WW => !EW.some((iW => iW !== WW && (iW.iW & WW.iW) === iW.iW && iW.windows.length <= WW.windows.length)))), xW[WW] = iW, iW
        }(iW)) {
        let OW = (wW.windows.length / 2 - 1) * PW;
        const cW = wW.iW & ~iW & EW;
        for (let iW = 0; iW < mW.k; iW++) cW & 1 << iW && (OW += lW(WW, iW));
        OW < LW && (NW = wW, LW = OW)
      }
      const cW = NW.windows;
      for (let mW = 0; mW < cW.length; mW += 2) {
        const iW = WW[cW[mW]];
        OW[mW] = iW, OW[mW + 1] = WW[cW[mW + 1]] - iW
      }
      return cW.length / 2
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);