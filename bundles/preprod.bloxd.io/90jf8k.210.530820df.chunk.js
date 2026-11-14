export const id = 210;
export const ids = [210];
export const modules = {
  38924: (FF, WF, SF) => {
    SF.d(WF, {
      noaDevTools: () => RF
    });
    var CF = SF(35893),
      AF = SF(2180),
      uF = SF(1510);

    function hF(FF) {
      const {
        dA: WF
      } = FF, SF = WF.engine, CF = {
        width: SF.getRenderWidth(),
        height: SF.getRenderHeight()
      };
      return {
        canvas: SF.getRenderingCanvas(),
        maxTextureSize: SF.getCaps().maxTextureSize,
        drawing: () => !FF.vmF,
        resize: (FF, WF) => {
          SF.setSize(FF, WF)
        },
        restoreSize: () => {
          SF.setSize(CF.width, CF.height), WF.resize()
        },
        onFrameDrawn: WF => (FF.on("afterRender", WF), () => {
          FF.off("afterRender", WF)
        })
      }
    }
    var bW = SF(38900),
      dF = SF(8135);

    function PF(FF, WF) {
      let {
        width: dF,
        height: PF,
        colouring: RF
      } = WF;
      const iW = "normals" === RF,
        eF = "depth" === RF;
      return new Promise((WF => {
        try {
          const EF = (0, AF.h)();
          if (EF.dA.PA) return "screenshot" !== FF || null !== RF ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void WF()) : void(0, bW.e)(hF(EF), dF, PF).finally(WF);
          const QF = EF.dA.engine,
            rW = EF.dA.OWF(),
            gW = dF,
            tW = PF;
          Promise.all([Promise.all([SF.e(224), SF.e(225), SF.e(208)]).then((() => SF(58883))), Promise.all([SF.e(207), SF.e(206), SF.e(224), SF.e(225), SF.e(222), SF.e(226), SF.e(229), SF.e(281), SF.e(211)]).then((() => SF(58887))), Promise.all([SF.e(207), SF.e(206), SF.e(224), SF.e(225), SF.e(222), SF.e(232), SF.e(226), SF.e(234), SF.e(213)]).then((() => SF(58892))), SF.e(324).then((() => SF(58898))), Promise.all([SF.e(206), SF.e(202)]).then((() => SF(35617))), SF.e(223).then((() => SF(58906))), SF.e(201).then((() => SF(58912)))]).then((AF => {
            const {
              CreateScreenshotUsingRenderTarget: hF
            } = AF[1], {
              ShaderMaterial: bW
            } = AF[2], {
              ShaderLanguage: dF
            } = AF[3], {
              HC: PF
            } = AF[4], {
              registerDevtoolsShader: RF
            } = AF[6], EF = dF.GLSL, TF = new Map, aW = rW.meshes.filter((FF => FF.material));
            let kW = !1;

            function qW() {
              kW && (kW = !1, (0, CF.i)(rW.meshes, !1)), aW.forEach((FF => {
                const WF = TF.get(FF);
                WF && (FF.material = WF)
              }))
            }
            if (iW) {
              const FF = [],
                WF = [];
              aW.forEach((SF => {
                const CF = SF.name.toLowerCase(),
                  AF = SF.JWF().boundingBox.center,
                  uF = rW.activeCamera.position.subtract(AF).length();
                CF.includes("sky") || CF.includes("background") || CF.includes("environment") || uF > 1e3 ? WF.push(SF) : FF.push(SF)
              })), RF("devtoolsNormal", EF);
              const SF = new bW("normalMaterial", rW, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: EF
              });
              RF("devtoolsWhite", EF);
              const CF = new bW("whiteMaterial", rW, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: EF
              });
              FF.forEach((FF => {
                TF.set(FF, FF.material), FF.material = SF
              })), WF.forEach((FF => {
                TF.set(FF, FF.material), FF.material = CF
              }))
            } else if (eF) {
              RF("devtoolsDepth", EF);
              const FF = rW.activeCamera.position;
              let WF = 0,
                SF = 1 / 0;
              aW.forEach((CF => {
                const AF = CF.name.toLowerCase();
                if (AF.includes("sky") || AF.includes("background") || AF.includes("environment")) return;
                const uF = CF.JWF().boundingBox.center,
                  hF = PF.TransformCoordinates(uF, CF.getWorldMatrix()),
                  bW = FF.subtract(hF).length();
                bW > 1e3 || (WF = Math.max(WF, bW), SF = Math.min(SF, bW))
              }));
              const CF = WF - SF;
              WF += .1 * CF, SF = Math.max(0, SF - .1 * CF), console.log(`Depth range: min=${SF.toFixed(2)}, max=${WF.toFixed(2)}, range=${CF.toFixed(2)}`), CF < 1 && (WF = SF + 10);
              const AF = new bW("depthMaterial", rW, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: EF
              });
              AF.setVector3("cameraPosition", FF), AF.setFloat("maxDepth", WF), AF.setFloat("minDepth", SF), aW.forEach((FF => {
                TF.set(FF, FF.material), FF.material = AF
              }))
            }
            if ((0, CF.i)(rW.meshes, !0), kW = !0, "screenshot" === FF) {
              let FF = `bloxd-screenshot-${gW}x${tW}-${Date.now()}.png`;
              iW ? FF = `bloxd-screenshot-normals-${gW}x${tW}-${Date.now()}.png` : eF && (FF = `bloxd-screenshot-depth-${gW}x${tW}-${Date.now()}.png`), hF(QF, rW.activeCamera, {
                width: gW,
                height: tW
              }, (function(SF) {
                qW(), fetch(SF).then((function(FF) {
                  return FF.blob()
                })).then((function(SF) {
                  (0, uF.downloadBlob)(SF, FF), WF()
                })).catch((function(FF) {
                  console.error("Error processing screenshot:", FF), WF()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), qW(), WF()
              }))
            } else {
              let FF = "ju";
              iW ? FF = "scene-normals" : eF && (FF = "scene-depth"), iW || eF ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: FF
                  } = await Promise.all([SF.e(207), SF.e(206), SF.e(224), SF.e(225), SF.e(222), SF.e(232), SF.e(231), SF.e(212)]).then((() => SF(38233))), {
                    Color3: WF
                  } = await Promise.all([SF.e(207), SF.e(209)]).then((() => SF(35671))), CF = [], AF = [];
                  if (aW.forEach((FF => {
                      const WF = FF.name.toLowerCase(),
                        SF = FF.JWF().boundingBox.center,
                        uF = rW.activeCamera.position.subtract(SF).length();
                      WF.includes("sky") || WF.includes("background") || WF.includes("environment") || uF > 1e3 ? AF.push(FF) : CF.push(FF)
                    })), iW) CF.forEach(((SF, CF) => {
                    const AF = SF.getVerticesData("normal");
                    if (AF) {
                      const uF = [];
                      for (let FF = 0; FF < AF.length; FF += 3) {
                        const WF = Math.abs(AF[FF]),
                          SF = Math.abs(AF[FF + 1]),
                          CF = Math.abs(AF[FF + 2]);
                        uF.push(WF, SF, CF, 1)
                      }
                      SF.setVerticesData("color", uF);
                      const hF = new FF(`vertexColorMat_${CF}`, rW);
                      hF.disableLighting = !0, hF.emissiveColor = new WF(1, 1, 1), hF.specularColor = new WF(0, 0, 0), SF.material = hF
                    }
                  })), AF.forEach(((SF, CF) => {
                    const AF = SF.getVerticesData("position");
                    if (AF) {
                      const uF = [],
                        hF = AF.length / 3;
                      for (let FF = 0; FF < hF; FF++) uF.push(1, 1, 1, 1);
                      SF.setVerticesData("color", uF);
                      const bW = new FF(`whiteMat_${CF}`, rW);
                      bW.disableLighting = !0, bW.emissiveColor = new WF(1, 1, 1), bW.specularColor = new WF(0, 0, 0), SF.material = bW
                    }
                  }));
                  else if (eF) {
                    const SF = rW.activeCamera.position;
                    let AF = 0,
                      uF = 1 / 0;
                    CF.forEach((FF => {
                      const WF = FF.JWF().boundingBox.center,
                        CF = PF.TransformCoordinates(WF, FF.getWorldMatrix()),
                        hF = SF.subtract(CF).length();
                      AF = Math.max(AF, hF), uF = Math.min(uF, hF)
                    }));
                    const hF = AF - uF;
                    AF += .1 * hF, uF = Math.max(0, uF - .1 * hF), hF < 1 && (AF = uF + 10), aW.forEach(((CF, hF) => {
                      const bW = CF.name.toLowerCase(),
                        dF = CF.JWF().boundingBox.center,
                        RF = PF.TransformCoordinates(dF, CF.getWorldMatrix()),
                        iW = SF.subtract(RF).length();
                      if (!(bW.includes("sky") || bW.includes("background") || bW.includes("environment") || iW > 1e3)) {
                        const SF = 1 - Math.min(Math.max((iW - uF) / (AF - uF), 0), 1),
                          bW = new FF(`depthMat_${hF}`, rW);
                        bW.diffuseColor = new WF(SF, SF, SF), bW.specularColor = new WF(0, 0, 0), CF.material = bW
                      }
                    }))
                  }
                })().then((() => Promise.all([SF.e(207), SF.e(206), SF.e(224), SF.e(225), SF.e(222), SF.e(232), SF.e(226), SF.e(231), SF.e(229), SF.e(221), SF.e(234), SF.e(261), SF.e(281), SF.e(216), SF.e(233), SF.e(205)]).then((() => SF(58915))))).then((WF => WF.GLTF2Export.GLBAsync(rW, FF))).then((FF => {
                  qW(), FF.downloadFiles(), WF()
                })).catch((FF => {
                  console.error("Error exporting GLB:", FF), qW(), WF()
                }))
              }), 100) : Promise.all([SF.e(207), SF.e(206), SF.e(224), SF.e(225), SF.e(222), SF.e(232), SF.e(226), SF.e(231), SF.e(229), SF.e(221), SF.e(234), SF.e(261), SF.e(281), SF.e(216), SF.e(233), SF.e(205)]).then((() => SF(58915))).then((SF => {
                SF.GLTF2Export.GLBAsync(rW, FF).then((FF => {
                  qW(), FF.downloadFiles(), WF()
                })).catch((FF => {
                  console.error("Error exporting GLB:", FF), qW(), WF()
                }))
              })).catch((FF => {
                console.error("Error importing serializers:", FF), qW(), WF()
              }))
            }
          })).catch((FF => {
            console.error("Error downloading the scene:", FF), WF()
          }))
        } catch (EF) {
          console.error("Error taking screenshot:", EF), WF()
        }
      }))
    }
    const RF = new class {
      constructor() {
        this.tools = dF.ALL_DEV_TOOLS
      }
      downloadScene(FF, WF) {
        return PF(FF, WF)
      }
      async setAmbientLightIntensity(FF) {
        const {
          Color3: WF
        } = await Promise.all([SF.e(207), SF.e(209)]).then((() => SF(35671)));
        (0, AF.h)().dA.OWF().ambientColor = WF.FromArray([FF, FF, FF])
      }
    }
  },
  38900: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => dF
    });
    var CF = SF(1526);
    const AF = 33177600,
      uF = 3e4;
    let hF = !1;

    function bW(FF, WF, SF) {
      if (!FF.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (hF) return Promise.reject(new Error("A screenshot is already being taken"));
      hF = !0;
      const CF = function(FF, WF, SF) {
        const CF = Math.max(1, FF),
          uF = Math.max(1, WF),
          hF = Math.min(1, SF / Math.max(CF, uF), Math.sqrt(AF / (CF * uF)));
        return {
          width: Math.max(1, Math.floor(CF * hF)),
          height: Math.max(1, Math.floor(uF * hF))
        }
      }(WF, SF, FF.maxTextureSize);
      return FF.resize(CF.width, CF.height), new Promise(((WF, SF) => {
        let CF, AF = 2,
          bW = null;
        const dF = () => {
          var WF;
          hF = !1, null === (WF = bW) || void 0 === WF || WF(), clearTimeout(CF), FF.restoreSize()
        };
        CF = setTimeout((() => {
          dF(), SF(new Error("No frame was drawn to capture"))
        }), uF), bW = FF.onFrameDrawn((() => {
          if (AF--, AF > 0) return;
          const {
            canvas: CF
          } = FF, uF = {
            width: CF.width,
            height: CF.height
          };
          try {
            CF.toBlob((FF => {
              FF ? WF({
                blob: FF,
                ...uF
              }) : SF(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (hF) {
            SF(hF)
          } finally {
            dF()
          }
        }))
      }))
    }
    async function dF(FF, WF, SF) {
      try {
        const AF = await bW(FF, WF, SF);
        (0, CF.b)(AF.blob, `bloxd-screenshot-${AF.width}x${AF.height}-${Date.now()}.png`)
      } catch (AF) {
        console.error("Error taking screenshot:", AF)
      }
    }
  },
  35893: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => PF,
      i: () => bW,
      l: () => hF
    });
    var CF = SF(35887),
      AF = SF(35902);
    let uF = 0;

    function hF(FF, WF) {
      const SF = FF;
      SF._noaFaceGroups = null !== WF && void 0 !== WF ? WF : null, SF._noaFaceEpoch = -1, SF._noaFaceMask = -1, SF._noaFaceCount = -1, SF._noaFaceMaterial = null;
      const CF = FF.Om;
      CF && 1 === CF.length && (CF[0].indexStart = 0, CF[0].indexCount = FF.getTotalIndices())
    }

    function bW(FF, WF) {
      if (WF) {
        uF++;
        for (const WF of FF) {
          const FF = WF._noaFaceGroups;
          FF && hF(WF, FF)
        }
      } else uF = Math.max(0, uF - 1)
    }

    function dF(FF, WF, SF) {
      let AF = -1,
        uF = 0;
      for (let hF = 0; hF < CF.i; hF++) {
        const SF = FF[hF],
          bW = FF[hF + 1];
        bW > SF && WF & 1 << CF.e[hF] && (AF < 0 && (AF = SF), uF = bW)
      }
      return AF < 0 ? (SF[0] = 0, SF[1] = 0, 0) : (SF[0] = AF, SF[1] = uF - AF, uF - AF)
    }
    class PF {
      constructor(FF, WF) {
        this.MC = FF, this.engine = WF, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(FF, WF) {
        if (!WF) return;
        const SF = WF.getProjectionMatrix().m,
          hF = 0 === uF && 0 === SF[15],
          bW = WF.globalPosition,
          {
            engine: PF
          } = this,
          RF = hF ? (0, AF.b)(SF, PF.getRenderWidth(), PF.getRenderHeight()) : 0;
        bW.x === this.eyeX && bW.y === this.eyeY && bW.z === this.eyeZ && RF === this.focalPx && hF === this.culling || (this.epoch++, this.eyeX = bW.x, this.eyeY = bW.y, this.eyeZ = bW.z, this.focalPx = RF, this.culling = hF);
        const {
          epoch: iW,
          range: eF
        } = this, EF = this.MC / 2, QF = EF * Math.sqrt(3), rW = FF.data, gW = FF.length;
        let tW = 0;
        for (let uF = 0; uF < gW; uF++) {
          const FF = rW[uF],
            WF = FF._noaFaceGroups;
          if (WF && (FF._noaFaceEpoch !== iW || FF._noaFaceMaterial !== FF.material)) {
            FF._noaFaceEpoch = iW, FF._noaFaceMaterial = FF.material;
            const SF = FF.Om,
              uF = SF && 1 === SF.length ? SF[0] : null;
            let PF = -1;
            if (hF && uF && (0, CF.t)(FF.material)) {
              const SF = FF.position,
                CF = bW.x - SF.x,
                uF = bW.y - SF.y,
                hF = bW.z - SF.z,
                dF = CF - EF,
                iW = uF - EF,
                eF = hF - EF,
                rW = Math.sqrt(dF * dF + iW * iW + eF * eF) + QF;
              PF = (0, AF.f)(WF, CF, uF, hF, (0, AF.d)(rW, RF))
            }
            if (uF && PF !== FF._noaFaceMask) {
              FF._noaFaceMask = PF;
              let SF = 0,
                AF = WF[CF.i]; - 1 !== PF && (AF = dF(WF, PF, eF), SF = eF[0]), FF._noaFaceCount = AF, uF.indexStart = 6 * SF, uF.indexCount = 6 * AF, uF.setBoundingInfo(FF.JWF())
            }
          }
          WF && 0 === FF._noaFaceCount || (rW[tW++] = FF)
        }
        FF.length = tW
      }
    }
  },
  35887: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => hF,
      i: () => uF,
      k: () => dF,
      m: () => CF,
      o: () => bW,
      p: () => AF,
      t: () => PF
    });
    const CF = 6,
      AF = [0, 2, 4, 1, 3, 5, 0, 2],
      uF = 6,
      hF = [1, 0, 3, 2, 5, 4];
    for (let RF = uF; RF < AF.length; RF++)
      if (AF[RF] !== AF[RF - uF]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const bW = AF.length + 1,
      dF = (() => {
        const FF = [];
        for (let WF = 0; WF < uF; WF++) FF[AF[WF]] = WF;
        return FF
      })();

    function PF(FF) {
      return !!FF && FF.backFaceCulling && (0 === FF.transparencyMode || 1 === FF.transparencyMode)
    }
  },
  35902: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => bW,
      d: () => dF,
      e: () => RF,
      f: () => PF,
      j: () => QF
    });
    var CF = SF(35887);
    const AF = 1 / 16,
      uF = 1 / 64,
      hF = 2048;
    CF.m;

    function bW(FF, WF, SF) {
      return Math.min(Math.abs(FF[0] * WF), Math.abs(FF[5] * SF)) / 2
    }

    function dF(FF, WF) {
      return AF + uF * FF * FF / WF
    }

    function PF(FF, WF, SF, AF, uF) {
      const hF = CF.o;
      return RF(FF[hF], FF[hF + 1], FF[hF + 2], FF[hF + 3], FF[hF + 4], FF[hF + 5], WF, SF, AF, uF)
    }

    function RF(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF) {
      return (hF <= FF - PF ? 0 : 1) | (hF >= WF + PF ? 0 : 2) | (bW <= SF - PF ? 0 : 4) | (bW >= CF + PF ? 0 : 8) | (dF <= AF - PF ? 0 : 16) | (dF >= uF + PF ? 0 : 32)
    }
    const iW = (() => {
        const FF = [];
        for (let WF = 0; WF < CF.p.length; WF++) {
          let SF = 0;
          for (let AF = WF + 1; AF <= CF.p.length; AF++) {
            const uF = 1 << CF.p[AF - 1];
            if (SF & uF) break;
            SF |= uF, FF.push({
              start: WF,
              end: AF,
              sS: SF
            })
          }
        }
        return FF
      })(),
      eF = [];

    function EF(FF, WF) {
      const SF = CF.k[WF];
      return FF[SF + 1] - FF[SF]
    }

    function QF(FF, WF, SF) {
      let AF = 0;
      for (let hF = 0; hF < CF.m; hF++) EF(FF, hF) > 0 && (AF |= 1 << hF);
      if (0 === (WF &= AF)) return 0;
      if (WF === AF) return SF[0] = 0, SF[1] = FF[CF.i], 1;
      let uF = null,
        bW = 1 / 0;
      for (const PF of function(FF) {
          let WF = eF[FF];
          if (WF) return WF;
          const SF = new Map,
            CF = (FF, WF) => {
              const CF = 4 * FF + WF.length / 2;
              SF.has(CF) || SF.set(CF, {
                sS: FF,
                windows: WF
              })
            };
          for (const uF of iW)
            if ((uF.sS & FF) === FF && CF(uF.sS, [uF.start, uF.end]), 0 !== (uF.sS & FF))
              for (const WF of iW) WF.start < uF.end || 0 !== (uF.sS & WF.sS) || 0 === (WF.sS & FF) || ((uF.sS | WF.sS) & FF) !== FF || CF(uF.sS | WF.sS, [uF.start, uF.end, WF.start, WF.end]);
          const AF = [...SF.values()];
          return WF = AF.filter((FF => !AF.some((WF => WF !== FF && (WF.sS & FF.sS) === WF.sS && WF.windows.length <= FF.windows.length)))), eF[FF] = WF, WF
        }(WF)) {
        let SF = (PF.windows.length / 2 - 1) * hF;
        const dF = PF.sS & ~WF & AF;
        for (let WF = 0; WF < CF.m; WF++) dF & 1 << WF && (SF += EF(FF, WF));
        SF < bW && (uF = PF, bW = SF)
      }
      const dF = uF.windows;
      for (let CF = 0; CF < dF.length; CF += 2) {
        const WF = FF[dF[CF]];
        SF[CF] = WF, SF[CF + 1] = FF[dF[CF + 1]] - WF
      }
      return dF.length / 2
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);