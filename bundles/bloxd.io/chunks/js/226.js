export const id = 226;
export const ids = [226];
export const modules = {
  39852: (TT, oT, IT) => {
    IT.d(oT, {
      noaDevTools: () => DT
    });
    var iT = IT(36397),
      zT = IT(36385),
      kT = IT(2465),
      WT = IT(1665);

    function XT(TT) {
      const {
        FK: oT
      } = TT, IT = oT.engine, iT = {
        width: IT.getRenderWidth(),
        height: IT.getRenderHeight()
      };
      return {
        canvas: IT.getRenderingCanvas(),
        maxTextureSize: IT.getCaps().maxTextureSize,
        drawing: () => !TT.uR,
        resize: (TT, oT) => {
          IT.setSize(TT, oT)
        },
        restoreSize: () => {
          IT.setSize(iT.width, iT.height), oT.resize()
        },
        onFrameDrawn: oT => (TT.on("afterRender", oT), () => {
          TT.off("afterRender", oT)
        })
      }
    }
    var BT = IT(39829),
      FT = IT(8647);

    function ST(TT, oT) {
      let {
        width: FT,
        height: ST,
        colouring: DT
      } = oT;
      const LT = "normals" === DT,
        xT = "depth" === DT;
      return new Promise((oT => {
        try {
          const cT = (0, kT.i)();
          if (cT.FK.SK) return "screenshot" !== TT || null !== DT ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void oT()) : void(0, BT.d)(XT(cT), FT, ST).finally(oT);
          const KT = cT.FK.engine,
            MT = cT.FK.pC(),
            rT = FT,
            AT = ST;
          Promise.all([Promise.all([IT.e(243), IT.e(244), IT.e(224)]).then((() => IT(59995))), Promise.all([IT.e(223), IT.e(222), IT.e(243), IT.e(244), IT.e(241), IT.e(245), IT.e(248), IT.e(301), IT.e(227)]).then((() => IT(59998))), Promise.all([IT.e(223), IT.e(222), IT.e(243), IT.e(244), IT.e(241), IT.e(251), IT.e(245), IT.e(253), IT.e(229)]).then((() => IT(60005))), IT.e(344).then((() => IT(60012))), Promise.all([IT.e(222), IT.e(218)]).then((() => IT(36114))), IT.e(242).then((() => IT(60015))), IT.e(217).then((() => IT(60022)))]).then((kT => {
            const {
              CreateScreenshotUsingRenderTarget: XT
            } = kT[1], {
              ShaderMaterial: BT
            } = kT[2], {
              ShaderLanguage: FT
            } = kT[3], {
              sc: ST
            } = kT[4], {
              registerDevtoolsShader: DT
            } = kT[6], cT = FT.GLSL, gT = new Map, hT = MT.meshes.filter((TT => TT.material));
            let wT = !1,
              mT = null;

            function eT() {
              var TT;
              wT && (wT = !1, (0, iT.f)(MT.meshes, !1)), null === (TT = mT) || void 0 === TT || TT(), mT = null, hT.forEach((TT => {
                const oT = gT.get(TT);
                oT && (TT.material = oT)
              }))
            }
            if (LT) {
              const TT = [],
                oT = [];
              hT.forEach((IT => {
                const iT = IT.name.toLowerCase(),
                  zT = IT.GJ().boundingBox.center,
                  kT = MT.activeCamera.position.subtract(zT).length();
                iT.includes("sky") || iT.includes("background") || iT.includes("environment") || kT > 1e3 ? oT.push(IT) : TT.push(IT)
              })), DT("devtoolsNormal", cT);
              const IT = new BT("normalMaterial", MT, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: cT
              });
              DT("devtoolsWhite", cT);
              const iT = new BT("whiteMaterial", MT, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: cT
              });
              TT.forEach((TT => {
                gT.set(TT, TT.material), TT.material = IT
              })), oT.forEach((TT => {
                gT.set(TT, TT.material), TT.material = iT
              }))
            } else if (xT) {
              DT("devtoolsDepth", cT);
              const TT = MT.activeCamera.position;
              let oT = 0,
                IT = 1 / 0;
              hT.forEach((iT => {
                const zT = iT.name.toLowerCase();
                if (zT.includes("sky") || zT.includes("background") || zT.includes("environment")) return;
                const kT = iT.GJ().boundingBox.center,
                  WT = ST.TransformCoordinates(kT, iT.getWorldMatrix()),
                  XT = TT.subtract(WT).length();
                XT > 1e3 || (oT = Math.max(oT, XT), IT = Math.min(IT, XT))
              }));
              const iT = oT - IT;
              oT += .1 * iT, IT = Math.max(0, IT - .1 * iT), console.log(`Depth range: min=${IT.toFixed(2)}, max=${oT.toFixed(2)}, range=${iT.toFixed(2)}`), iT < 1 && (oT = IT + 10);
              const zT = new BT("depthMaterial", MT, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: cT
              });
              zT.setVector3("cameraPosition", TT), zT.setFloat("maxDepth", oT), zT.setFloat("minDepth", IT), hT.forEach((TT => {
                gT.set(TT, TT.material), TT.material = zT
              }))
            }
            if ((0, iT.f)(MT.meshes, !0), wT = !0, "glb" === TT && (mT = (0, zT.e)(MT.meshes)), "screenshot" === TT) {
              let TT = `bloxd-screenshot-${rT}x${AT}-${Date.now()}.png`;
              LT ? TT = `bloxd-screenshot-normals-${rT}x${AT}-${Date.now()}.png` : xT && (TT = `bloxd-screenshot-depth-${rT}x${AT}-${Date.now()}.png`), XT(KT, MT.activeCamera, {
                width: rT,
                height: AT
              }, (function(IT) {
                eT(), fetch(IT).then((function(TT) {
                  return TT.blob()
                })).then((function(IT) {
                  (0, WT.downloadBlob)(IT, TT), oT()
                })).catch((function(TT) {
                  console.error("Error processing screenshot:", TT), oT()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), eT(), oT()
              }))
            } else {
              let TT = "NK";
              LT ? TT = "scene-normals" : xT && (TT = "scene-depth"), LT || xT ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: TT
                  } = await Promise.all([IT.e(223), IT.e(222), IT.e(243), IT.e(244), IT.e(241), IT.e(251), IT.e(250), IT.e(228)]).then((() => IT(39038))), {
                    Color3: oT
                  } = await Promise.all([IT.e(223), IT.e(225)]).then((() => IT(36175))), iT = [], zT = [];
                  if (hT.forEach((TT => {
                      const oT = TT.name.toLowerCase(),
                        IT = TT.GJ().boundingBox.center,
                        kT = MT.activeCamera.position.subtract(IT).length();
                      oT.includes("sky") || oT.includes("background") || oT.includes("environment") || kT > 1e3 ? zT.push(TT) : iT.push(TT)
                    })), LT) iT.forEach(((IT, iT) => {
                    const zT = IT.getVerticesData("normal");
                    if (zT) {
                      const kT = [];
                      for (let TT = 0; TT < zT.length; TT += 3) {
                        const oT = Math.abs(zT[TT]),
                          IT = Math.abs(zT[TT + 1]),
                          iT = Math.abs(zT[TT + 2]);
                        kT.push(oT, IT, iT, 1)
                      }
                      IT.setVerticesData("color", kT);
                      const WT = new TT(`vertexColorMat_${iT}`, MT);
                      WT.disableLighting = !0, WT.emissiveColor = new oT(1, 1, 1), WT.specularColor = new oT(0, 0, 0), IT.material = WT
                    }
                  })), zT.forEach(((IT, iT) => {
                    const zT = IT.getVerticesData("position");
                    if (zT) {
                      const kT = [],
                        WT = zT.length / 3;
                      for (let TT = 0; TT < WT; TT++) kT.push(1, 1, 1, 1);
                      IT.setVerticesData("color", kT);
                      const XT = new TT(`whiteMat_${iT}`, MT);
                      XT.disableLighting = !0, XT.emissiveColor = new oT(1, 1, 1), XT.specularColor = new oT(0, 0, 0), IT.material = XT
                    }
                  }));
                  else if (xT) {
                    const IT = MT.activeCamera.position;
                    let zT = 0,
                      kT = 1 / 0;
                    iT.forEach((TT => {
                      const oT = TT.GJ().boundingBox.center,
                        iT = ST.TransformCoordinates(oT, TT.getWorldMatrix()),
                        WT = IT.subtract(iT).length();
                      zT = Math.max(zT, WT), kT = Math.min(kT, WT)
                    }));
                    const WT = zT - kT;
                    zT += .1 * WT, kT = Math.max(0, kT - .1 * WT), WT < 1 && (zT = kT + 10), hT.forEach(((iT, WT) => {
                      const XT = iT.name.toLowerCase(),
                        BT = iT.GJ().boundingBox.center,
                        FT = ST.TransformCoordinates(BT, iT.getWorldMatrix()),
                        DT = IT.subtract(FT).length();
                      if (!(XT.includes("sky") || XT.includes("background") || XT.includes("environment") || DT > 1e3)) {
                        const IT = 1 - Math.min(Math.max((DT - kT) / (zT - kT), 0), 1),
                          XT = new TT(`depthMat_${WT}`, MT);
                        XT.diffuseColor = new oT(IT, IT, IT), XT.specularColor = new oT(0, 0, 0), iT.material = XT
                      }
                    }))
                  }
                })().then((() => Promise.all([IT.e(223), IT.e(222), IT.e(243), IT.e(244), IT.e(241), IT.e(251), IT.e(245), IT.e(250), IT.e(248), IT.e(240), IT.e(253), IT.e(281), IT.e(301), IT.e(234), IT.e(252), IT.e(221)]).then((() => IT(60029))))).then((oT => oT.GLTF2Export.GLBAsync(MT, TT))).then((TT => {
                  eT(), TT.downloadFiles(), oT()
                })).catch((TT => {
                  console.error("Error exporting GLB:", TT), eT(), oT()
                }))
              }), 100) : Promise.all([IT.e(223), IT.e(222), IT.e(243), IT.e(244), IT.e(241), IT.e(251), IT.e(245), IT.e(250), IT.e(248), IT.e(240), IT.e(253), IT.e(281), IT.e(301), IT.e(234), IT.e(252), IT.e(221)]).then((() => IT(60029))).then((IT => {
                IT.GLTF2Export.GLBAsync(MT, TT).then((TT => {
                  eT(), TT.downloadFiles(), oT()
                })).catch((TT => {
                  console.error("Error exporting GLB:", TT), eT(), oT()
                }))
              })).catch((TT => {
                console.error("Error importing serializers:", TT), eT(), oT()
              }))
            }
          })).catch((TT => {
            console.error("Error downloading the scene:", TT), oT()
          }))
        } catch (cT) {
          console.error("Error taking screenshot:", cT), oT()
        }
      }))
    }
    const DT = new class {
      constructor() {
        this.tools = FT.ALL_DEV_TOOLS
      }
      downloadScene(TT, oT) {
        return ST(TT, oT)
      }
      async setAmbientLightIntensity(TT) {
        const {
          Color3: oT
        } = await Promise.all([IT.e(223), IT.e(225)]).then((() => IT(36175)));
        (0, kT.i)().FK.pC().ambientColor = oT.FromArray([TT, TT, TT])
      }
    }
  },
  39829: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => BT
    });
    var iT = IT(1679);
    const zT = 33177600,
      kT = 3e4;
    let WT = !1;

    function XT(TT, oT, IT) {
      if (!TT.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (WT) return Promise.reject(new Error("A screenshot is already being taken"));
      WT = !0;
      const iT = function(TT, oT, IT) {
        const iT = Math.max(1, TT),
          kT = Math.max(1, oT),
          WT = Math.min(1, IT / Math.max(iT, kT), Math.sqrt(zT / (iT * kT)));
        return {
          width: Math.max(1, Math.floor(iT * WT)),
          height: Math.max(1, Math.floor(kT * WT))
        }
      }(oT, IT, TT.maxTextureSize);
      return TT.resize(iT.width, iT.height), new Promise(((oT, IT) => {
        let iT, zT = 2,
          XT = null;
        const BT = () => {
          var oT;
          WT = !1, null === (oT = XT) || void 0 === oT || oT(), clearTimeout(iT), TT.restoreSize()
        };
        iT = setTimeout((() => {
          BT(), IT(new Error("No frame was drawn to capture"))
        }), kT), XT = TT.onFrameDrawn((() => {
          if (zT--, zT > 0) return;
          const {
            canvas: iT
          } = TT, kT = {
            width: iT.width,
            height: iT.height
          };
          try {
            iT.toBlob((TT => {
              TT ? oT({
                blob: TT,
                ...kT
              }) : IT(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (WT) {
            IT(WT)
          } finally {
            BT()
          }
        }))
      }))
    }
    async function BT(TT, oT, IT) {
      try {
        const zT = await XT(TT, oT, IT);
        (0, iT.d)(zT.blob, `bloxd-screenshot-${zT.width}x${zT.height}-${Date.now()}.png`)
      } catch (zT) {
        console.error("Error taking screenshot:", zT)
      }
    }
  },
  36397: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => FT,
      f: () => XT,
      h: () => WT
    });
    var iT = IT(36391),
      zT = IT(36404);
    let kT = 0;

    function WT(TT, oT) {
      const IT = TT;
      IT._noaFaceGroups = null !== oT && void 0 !== oT ? oT : null, IT._noaFaceEpoch = -1, IT._noaFaceMask = -1, IT._noaFaceCount = -1, IT._noaFaceMaterial = null;
      const iT = TT.pR;
      iT && 1 === iT.length && (iT[0].indexStart = 0, iT[0].indexCount = TT.getTotalIndices())
    }

    function XT(TT, oT) {
      if (oT) {
        kT++;
        for (const oT of TT) {
          const TT = oT._noaFaceGroups;
          TT && WT(oT, TT)
        }
      } else kT = Math.max(0, kT - 1)
    }

    function BT(TT, oT, IT) {
      let zT = -1,
        kT = 0;
      for (let WT = 0; WT < iT.c; WT++) {
        const IT = TT[WT],
          XT = TT[WT + 1];
        XT > IT && oT & 1 << iT.b[WT] && (zT < 0 && (zT = IT), kT = XT)
      }
      return zT < 0 ? (IT[0] = 0, IT[1] = 0, 0) : (IT[0] = zT, IT[1] = kT - zT, kT - zT)
    }
    class FT {
      constructor(TT, oT) {
        this.Yc = TT, this.engine = oT, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(TT, oT) {
        if (!oT) return;
        const IT = oT.getProjectionMatrix().m,
          WT = 0 === kT && 0 === IT[15],
          XT = oT.globalPosition,
          {
            engine: FT
          } = this,
          ST = WT ? (0, zT.d)(IT, FT.getRenderWidth(), FT.getRenderHeight()) : 0;
        XT.x === this.eyeX && XT.y === this.eyeY && XT.z === this.eyeZ && ST === this.focalPx && WT === this.culling || (this.epoch++, this.eyeX = XT.x, this.eyeY = XT.y, this.eyeZ = XT.z, this.focalPx = ST, this.culling = WT);
        const {
          epoch: DT,
          range: LT
        } = this, xT = this.Yc / 2, cT = xT * Math.sqrt(3), KT = TT.data, MT = TT.length;
        let rT = 0;
        for (let kT = 0; kT < MT; kT++) {
          const TT = KT[kT],
            oT = TT._noaFaceGroups;
          if (oT && (TT._noaFaceEpoch !== DT || TT._noaFaceMaterial !== TT.material)) {
            TT._noaFaceEpoch = DT, TT._noaFaceMaterial = TT.material;
            const IT = TT.pR,
              kT = IT && 1 === IT.length ? IT[0] : null;
            let FT = -1;
            if (WT && kT && (0, iT.k)(TT.material)) {
              const IT = TT.position,
                iT = XT.x - IT.x,
                kT = XT.y - IT.y,
                WT = XT.z - IT.z,
                BT = iT - xT,
                DT = kT - xT,
                LT = WT - xT,
                KT = Math.sqrt(BT * BT + DT * DT + LT * LT) + cT;
              FT = (0, zT.l)(oT, iT, kT, WT, (0, zT.e)(KT, ST))
            }
            if (kT && FT !== TT._noaFaceMask) {
              TT._noaFaceMask = FT;
              let IT = 0,
                zT = oT[iT.c]; - 1 !== FT && (zT = BT(oT, FT, LT), IT = LT[0]), TT._noaFaceCount = zT, kT.indexStart = 6 * IT, kT.indexCount = 6 * zT, kT.setBoundingInfo(TT.GJ())
            }
          }
          oT && 0 === TT._noaFaceCount || (KT[rT++] = TT)
        }
        TT.length = rT
      }
    }
  },
  36385: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => BT,
      g: () => XT
    });
    const iT = new WeakSet;
    let zT = 0;
    const kT = new Set;

    function WT(TT, oT) {
      TT._data = oT
    }

    function XT(TT) {
      var oT, IT;
      (null !== (oT = null === (IT = TT.getBuffer()) || void 0 === IT ? void 0 : IT.fD) && void 0 !== oT ? oT : 0) > 0 && (iT.add(TT), 0 === zT ? WT(TT, null) : kT.add(TT))
    }

    function BT(TT) {
      zT++;
      for (const IT of function(TT) {
          const oT = new Set;
          for (const zT of TT) {
            const TT = zT.geometry;
            for (const zT of Object.values(null !== (IT = null === TT || void 0 === TT ? void 0 : TT.getVertexBuffers()) && void 0 !== IT ? IT : {})) {
              var IT;
              const TT = zT.getWrapperBuffer();
              iT.has(TT) && oT.add(TT)
            }
          }
          return oT
        }(TT)) IT.getData() || FT(IT), kT.add(IT);
      let oT = !0;
      return () => {
        if (oT && (oT = !1, zT--, 0 === zT)) {
          for (const TT of kT) WT(TT, null);
          kT.clear()
        }
      }
    }

    function FT(TT) {
      const oT = TT.getBuffer();
      if (!oT || !(oT.fD > 0)) return;
      const IT = TT._engine,
        iT = new Uint8Array(oT.fD);
      IT.bindArrayBuffer(oT), IT._gl.getBufferSubData(IT._gl.ARRAY_BUFFER, 0, iT), IT._resetVertexBufferBinding(), WT(TT, iT)
    }
  },
  36391: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => WT,
      c: () => kT,
      d: () => BT,
      f: () => iT,
      g: () => XT,
      j: () => zT,
      k: () => FT
    });
    const iT = 6,
      zT = [0, 2, 4, 1, 3, 5, 0, 2],
      kT = 6,
      WT = [1, 0, 3, 2, 5, 4];
    for (let ST = kT; ST < zT.length; ST++)
      if (zT[ST] !== zT[ST - kT]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const XT = zT.length + 1,
      BT = (() => {
        const TT = [];
        for (let oT = 0; oT < kT; oT++) TT[zT[oT]] = oT;
        return TT
      })();

    function FT(TT) {
      return !!TT && TT.backFaceCulling && (0 === TT.transparencyMode || 1 === TT.transparencyMode)
    }
  },
  36404: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => XT,
      e: () => BT,
      i: () => ST,
      l: () => FT,
      n: () => cT
    });
    var iT = IT(36391);
    const zT = 1 / 16,
      kT = 1 / 64,
      WT = 2048;
    iT.f;

    function XT(TT, oT, IT) {
      return Math.min(Math.abs(TT[0] * oT), Math.abs(TT[5] * IT)) / 2
    }

    function BT(TT, oT) {
      return zT + kT * TT * TT / oT
    }

    function FT(TT, oT, IT, zT, kT) {
      const WT = iT.g;
      return ST(TT[WT], TT[WT + 1], TT[WT + 2], TT[WT + 3], TT[WT + 4], TT[WT + 5], oT, IT, zT, kT)
    }

    function ST(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT) {
      return (WT <= TT - FT ? 0 : 1) | (WT >= oT + FT ? 0 : 2) | (XT <= IT - FT ? 0 : 4) | (XT >= iT + FT ? 0 : 8) | (BT <= zT - FT ? 0 : 16) | (BT >= kT + FT ? 0 : 32)
    }
    const DT = (() => {
        const TT = [];
        for (let oT = 0; oT < iT.j.length; oT++) {
          let IT = 0;
          for (let zT = oT + 1; zT <= iT.j.length; zT++) {
            const kT = 1 << iT.j[zT - 1];
            if (IT & kT) break;
            IT |= kT, TT.push({
              start: oT,
              end: zT,
              Ci: IT
            })
          }
        }
        return TT
      })(),
      LT = [];

    function xT(TT, oT) {
      const IT = iT.d[oT];
      return TT[IT + 1] - TT[IT]
    }

    function cT(TT, oT, IT) {
      let zT = 0;
      for (let WT = 0; WT < iT.f; WT++) xT(TT, WT) > 0 && (zT |= 1 << WT);
      if (0 === (oT &= zT)) return 0;
      if (oT === zT) return IT[0] = 0, IT[1] = TT[iT.c], 1;
      let kT = null,
        XT = 1 / 0;
      for (const FT of function(TT) {
          let oT = LT[TT];
          if (oT) return oT;
          const IT = new Map,
            iT = (TT, oT) => {
              const iT = 4 * TT + oT.length / 2;
              IT.has(iT) || IT.set(iT, {
                Ci: TT,
                windows: oT
              })
            };
          for (const kT of DT)
            if ((kT.Ci & TT) === TT && iT(kT.Ci, [kT.start, kT.end]), 0 !== (kT.Ci & TT))
              for (const oT of DT) oT.start < kT.end || 0 !== (kT.Ci & oT.Ci) || 0 === (oT.Ci & TT) || ((kT.Ci | oT.Ci) & TT) !== TT || iT(kT.Ci | oT.Ci, [kT.start, kT.end, oT.start, oT.end]);
          const zT = [...IT.values()];
          return oT = zT.filter((TT => !zT.some((oT => oT !== TT && (oT.Ci & TT.Ci) === oT.Ci && oT.windows.length <= TT.windows.length)))), LT[TT] = oT, oT
        }(oT)) {
        let IT = (FT.windows.length / 2 - 1) * WT;
        const BT = FT.Ci & ~oT & zT;
        for (let oT = 0; oT < iT.f; oT++) BT & 1 << oT && (IT += xT(TT, oT));
        IT < XT && (kT = FT, XT = IT)
      }
      const BT = kT.windows;
      for (let iT = 0; iT < BT.length; iT += 2) {
        const oT = TT[BT[iT]];
        IT[iT] = oT, IT[iT + 1] = TT[BT[iT + 1]] - oT
      }
      return BT.length / 2
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);