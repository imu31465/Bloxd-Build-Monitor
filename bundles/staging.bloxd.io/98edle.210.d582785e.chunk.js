export const id = 210;
export const ids = [210];
export const modules = {
  38552: (WW, RW, MW) => {
    MW.d(RW, {
      noaDevTools: () => eW
    });
    var wW = MW(35600),
      CW = MW(2154),
      zR = MW(1495);

    function AW(WW) {
      const {
        AC: RW
      } = WW, MW = RW.engine, wW = {
        width: MW.getRenderWidth(),
        height: MW.getRenderHeight()
      };
      return {
        canvas: MW.getRenderingCanvas(),
        maxTextureSize: MW.getCaps().maxTextureSize,
        drawing: () => !WW.Hk,
        resize: (WW, RW) => {
          MW.setSize(WW, RW)
        },
        restoreSize: () => {
          MW.setSize(wW.width, wW.height), RW.resize()
        },
        onFrameDrawn: RW => (WW.on("afterRender", RW), () => {
          WW.off("afterRender", RW)
        })
      }
    }
    var bR = MW(38519),
      yR = MW(8068);

    function NW(WW, RW) {
      let {
        width: yR,
        height: NW,
        colouring: eW
      } = RW;
      const BW = "normals" === eW,
        tR = "depth" === eW;
      return new Promise((RW => {
        try {
          const TW = (0, CW.e)();
          if (TW.AC.bz) return "screenshot" !== WW || null !== eW ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void RW()) : void(0, bR.b)(AW(TW), yR, NW).finally(RW);
          const gR = TW.AC.engine,
            iR = TW.AC.QRW(),
            YW = yR,
            JW = NW;
          Promise.all([Promise.all([MW.e(224), MW.e(225), MW.e(208)]).then((() => MW(58568))), Promise.all([MW.e(207), MW.e(206), MW.e(224), MW.e(225), MW.e(222), MW.e(226), MW.e(229), MW.e(281), MW.e(211)]).then((() => MW(58574))), Promise.all([MW.e(207), MW.e(206), MW.e(224), MW.e(225), MW.e(222), MW.e(232), MW.e(226), MW.e(234), MW.e(213)]).then((() => MW(58583))), MW.e(324).then((() => MW(58591))), Promise.all([MW.e(206), MW.e(202)]).then((() => MW(35317))), MW.e(223).then((() => MW(58597))), MW.e(201).then((() => MW(58602)))]).then((CW => {
            const {
              CreateScreenshotUsingRenderTarget: AW
            } = CW[1], {
              ShaderMaterial: bR
            } = CW[2], {
              ShaderLanguage: yR
            } = CW[3], {
              vC: NW
            } = CW[4], {
              registerDevtoolsShader: eW
            } = CW[6], TW = yR.GLSL, PW = new Map, IW = iR.meshes.filter((WW => WW.material));
            let oW = !1;

            function lW() {
              oW && (oW = !1, (0, wW.g)(iR.meshes, !1)), IW.forEach((WW => {
                const RW = PW.get(WW);
                RW && (WW.material = RW)
              }))
            }
            if (BW) {
              const WW = [],
                RW = [];
              IW.forEach((MW => {
                const wW = MW.name.toLowerCase(),
                  CW = MW.LRW().boundingBox.center,
                  zR = iR.activeCamera.position.subtract(CW).length();
                wW.includes("sky") || wW.includes("background") || wW.includes("environment") || zR > 1e3 ? RW.push(MW) : WW.push(MW)
              })), eW("devtoolsNormal", TW);
              const MW = new bR("normalMaterial", iR, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: TW
              });
              eW("devtoolsWhite", TW);
              const wW = new bR("whiteMaterial", iR, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: TW
              });
              WW.forEach((WW => {
                PW.set(WW, WW.material), WW.material = MW
              })), RW.forEach((WW => {
                PW.set(WW, WW.material), WW.material = wW
              }))
            } else if (tR) {
              eW("devtoolsDepth", TW);
              const WW = iR.activeCamera.position;
              let RW = 0,
                MW = 1 / 0;
              IW.forEach((wW => {
                const CW = wW.name.toLowerCase();
                if (CW.includes("sky") || CW.includes("background") || CW.includes("environment")) return;
                const zR = wW.LRW().boundingBox.center,
                  AW = NW.TransformCoordinates(zR, wW.getWorldMatrix()),
                  bR = WW.subtract(AW).length();
                bR > 1e3 || (RW = Math.max(RW, bR), MW = Math.min(MW, bR))
              }));
              const wW = RW - MW;
              RW += .1 * wW, MW = Math.max(0, MW - .1 * wW), console.log(`Depth range: min=${MW.toFixed(2)}, max=${RW.toFixed(2)}, range=${wW.toFixed(2)}`), wW < 1 && (RW = MW + 10);
              const CW = new bR("depthMaterial", iR, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: TW
              });
              CW.setVector3("cameraPosition", WW), CW.setFloat("maxDepth", RW), CW.setFloat("minDepth", MW), IW.forEach((WW => {
                PW.set(WW, WW.material), WW.material = CW
              }))
            }
            if ((0, wW.g)(iR.meshes, !0), oW = !0, "screenshot" === WW) {
              let WW = `bloxd-screenshot-${YW}x${JW}-${Date.now()}.png`;
              BW ? WW = `bloxd-screenshot-normals-${YW}x${JW}-${Date.now()}.png` : tR && (WW = `bloxd-screenshot-depth-${YW}x${JW}-${Date.now()}.png`), AW(gR, iR.activeCamera, {
                width: YW,
                height: JW
              }, (function(MW) {
                lW(), fetch(MW).then((function(WW) {
                  return WW.blob()
                })).then((function(MW) {
                  (0, zR.downloadBlob)(MW, WW), RW()
                })).catch((function(WW) {
                  console.error("Error processing screenshot:", WW), RW()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), lW(), RW()
              }))
            } else {
              let WW = "LC";
              BW ? WW = "scene-normals" : tR && (WW = "scene-depth"), BW || tR ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: WW
                  } = await Promise.all([MW.e(207), MW.e(206), MW.e(224), MW.e(225), MW.e(222), MW.e(232), MW.e(231), MW.e(212)]).then((() => MW(37844))), {
                    Color3: RW
                  } = await Promise.all([MW.e(207), MW.e(209)]).then((() => MW(35373))), wW = [], CW = [];
                  if (IW.forEach((WW => {
                      const RW = WW.name.toLowerCase(),
                        MW = WW.LRW().boundingBox.center,
                        zR = iR.activeCamera.position.subtract(MW).length();
                      RW.includes("sky") || RW.includes("background") || RW.includes("environment") || zR > 1e3 ? CW.push(WW) : wW.push(WW)
                    })), BW) wW.forEach(((MW, wW) => {
                    const CW = MW.getVerticesData("normal");
                    if (CW) {
                      const zR = [];
                      for (let WW = 0; WW < CW.length; WW += 3) {
                        const RW = Math.abs(CW[WW]),
                          MW = Math.abs(CW[WW + 1]),
                          wW = Math.abs(CW[WW + 2]);
                        zR.push(RW, MW, wW, 1)
                      }
                      MW.setVerticesData("color", zR);
                      const AW = new WW(`vertexColorMat_${wW}`, iR);
                      AW.disableLighting = !0, AW.emissiveColor = new RW(1, 1, 1), AW.specularColor = new RW(0, 0, 0), MW.material = AW
                    }
                  })), CW.forEach(((MW, wW) => {
                    const CW = MW.getVerticesData("position");
                    if (CW) {
                      const zR = [],
                        AW = CW.length / 3;
                      for (let WW = 0; WW < AW; WW++) zR.push(1, 1, 1, 1);
                      MW.setVerticesData("color", zR);
                      const bR = new WW(`whiteMat_${wW}`, iR);
                      bR.disableLighting = !0, bR.emissiveColor = new RW(1, 1, 1), bR.specularColor = new RW(0, 0, 0), MW.material = bR
                    }
                  }));
                  else if (tR) {
                    const MW = iR.activeCamera.position;
                    let CW = 0,
                      zR = 1 / 0;
                    wW.forEach((WW => {
                      const RW = WW.LRW().boundingBox.center,
                        wW = NW.TransformCoordinates(RW, WW.getWorldMatrix()),
                        AW = MW.subtract(wW).length();
                      CW = Math.max(CW, AW), zR = Math.min(zR, AW)
                    }));
                    const AW = CW - zR;
                    CW += .1 * AW, zR = Math.max(0, zR - .1 * AW), AW < 1 && (CW = zR + 10), IW.forEach(((wW, AW) => {
                      const bR = wW.name.toLowerCase(),
                        yR = wW.LRW().boundingBox.center,
                        eW = NW.TransformCoordinates(yR, wW.getWorldMatrix()),
                        BW = MW.subtract(eW).length();
                      if (!(bR.includes("sky") || bR.includes("background") || bR.includes("environment") || BW > 1e3)) {
                        const MW = 1 - Math.min(Math.max((BW - zR) / (CW - zR), 0), 1),
                          bR = new WW(`depthMat_${AW}`, iR);
                        bR.diffuseColor = new RW(MW, MW, MW), bR.specularColor = new RW(0, 0, 0), wW.material = bR
                      }
                    }))
                  }
                })().then((() => Promise.all([MW.e(207), MW.e(206), MW.e(224), MW.e(225), MW.e(222), MW.e(232), MW.e(226), MW.e(231), MW.e(229), MW.e(221), MW.e(234), MW.e(261), MW.e(281), MW.e(216), MW.e(233), MW.e(205)]).then((() => MW(58605))))).then((RW => RW.GLTF2Export.GLBAsync(iR, WW))).then((WW => {
                  lW(), WW.downloadFiles(), RW()
                })).catch((WW => {
                  console.error("Error exporting GLB:", WW), lW(), RW()
                }))
              }), 100) : Promise.all([MW.e(207), MW.e(206), MW.e(224), MW.e(225), MW.e(222), MW.e(232), MW.e(226), MW.e(231), MW.e(229), MW.e(221), MW.e(234), MW.e(261), MW.e(281), MW.e(216), MW.e(233), MW.e(205)]).then((() => MW(58605))).then((MW => {
                MW.GLTF2Export.GLBAsync(iR, WW).then((WW => {
                  lW(), WW.downloadFiles(), RW()
                })).catch((WW => {
                  console.error("Error exporting GLB:", WW), lW(), RW()
                }))
              })).catch((WW => {
                console.error("Error importing serializers:", WW), lW(), RW()
              }))
            }
          })).catch((WW => {
            console.error("Error downloading the scene:", WW), RW()
          }))
        } catch (TW) {
          console.error("Error taking screenshot:", TW), RW()
        }
      }))
    }
    const eW = new class {
      constructor() {
        this.tools = yR.ALL_DEV_TOOLS
      }
      downloadScene(WW, RW) {
        return NW(WW, RW)
      }
      async setAmbientLightIntensity(WW) {
        const {
          Color3: RW
        } = await Promise.all([MW.e(207), MW.e(209)]).then((() => MW(35373)));
        (0, CW.e)().AC.QRW().ambientColor = RW.FromArray([WW, WW, WW])
      }
    }
  },
  38519: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => yR
    });
    var wW = MW(1506);
    const CW = 33177600,
      zR = 3e4;
    let AW = !1;

    function bR(WW, RW, MW) {
      if (!WW.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (AW) return Promise.reject(new Error("A screenshot is already being taken"));
      AW = !0;
      const wW = function(WW, RW, MW) {
        const wW = Math.max(1, WW),
          zR = Math.max(1, RW),
          AW = Math.min(1, MW / Math.max(wW, zR), Math.sqrt(CW / (wW * zR)));
        return {
          width: Math.max(1, Math.floor(wW * AW)),
          height: Math.max(1, Math.floor(zR * AW))
        }
      }(RW, MW, WW.maxTextureSize);
      return WW.resize(wW.width, wW.height), new Promise(((RW, MW) => {
        let wW, CW = 2,
          bR = null;
        const yR = () => {
          var RW;
          AW = !1, null === (RW = bR) || void 0 === RW || RW(), clearTimeout(wW), WW.restoreSize()
        };
        wW = setTimeout((() => {
          yR(), MW(new Error("No frame was drawn to capture"))
        }), zR), bR = WW.onFrameDrawn((() => {
          if (CW--, CW > 0) return;
          const {
            canvas: wW
          } = WW, zR = {
            width: wW.width,
            height: wW.height
          };
          try {
            wW.toBlob((WW => {
              WW ? RW({
                blob: WW,
                ...zR
              }) : MW(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (AW) {
            MW(AW)
          } finally {
            yR()
          }
        }))
      }))
    }
    async function yR(WW, RW, MW) {
      try {
        const CW = await bR(WW, RW, MW);
        (0, wW.c)(CW.blob, `bloxd-screenshot-${CW.width}x${CW.height}-${Date.now()}.png`)
      } catch (CW) {
        console.error("Error taking screenshot:", CW)
      }
    }
  },
  35600: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => NW,
      g: () => bR,
      j: () => AW
    });
    var wW = MW(35592),
      CW = MW(35605);
    let zR = 0;

    function AW(WW, RW) {
      const MW = WW;
      MW._noaFaceGroups = null !== RW && void 0 !== RW ? RW : null, MW._noaFaceEpoch = -1, MW._noaFaceMask = -1, MW._noaFaceCount = -1, MW._noaFaceMaterial = null;
      const wW = WW.Qs;
      wW && 1 === wW.length && (wW[0].indexStart = 0, wW[0].indexCount = WW.getTotalIndices())
    }

    function bR(WW, RW) {
      if (RW) {
        zR++;
        for (const RW of WW) {
          const WW = RW._noaFaceGroups;
          WW && AW(RW, WW)
        }
      } else zR = Math.max(0, zR - 1)
    }

    function yR(WW, RW, MW) {
      let CW = -1,
        zR = 0;
      for (let AW = 0; AW < wW.g; AW++) {
        const MW = WW[AW],
          bR = WW[AW + 1];
        bR > MW && RW & 1 << wW.c[AW] && (CW < 0 && (CW = MW), zR = bR)
      }
      return CW < 0 ? (MW[0] = 0, MW[1] = 0, 0) : (MW[0] = CW, MW[1] = zR - CW, zR - CW)
    }
    class NW {
      constructor(WW, RW) {
        this.dw = WW, this.engine = RW, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(WW, RW) {
        if (!RW) return;
        const MW = RW.getProjectionMatrix().m,
          AW = 0 === zR && 0 === MW[15],
          bR = RW.globalPosition,
          {
            engine: NW
          } = this,
          eW = AW ? (0, CW.e)(MW, NW.getRenderWidth(), NW.getRenderHeight()) : 0;
        bR.x === this.eyeX && bR.y === this.eyeY && bR.z === this.eyeZ && eW === this.focalPx && AW === this.culling || (this.epoch++, this.eyeX = bR.x, this.eyeY = bR.y, this.eyeZ = bR.z, this.focalPx = eW, this.culling = AW);
        const {
          epoch: BW,
          range: tR
        } = this, TW = this.dw / 2, gR = TW * Math.sqrt(3), iR = WW.data, YW = WW.length;
        let JW = 0;
        for (let zR = 0; zR < YW; zR++) {
          const WW = iR[zR],
            RW = WW._noaFaceGroups;
          if (RW && (WW._noaFaceEpoch !== BW || WW._noaFaceMaterial !== WW.material)) {
            WW._noaFaceEpoch = BW, WW._noaFaceMaterial = WW.material;
            const MW = WW.Qs,
              zR = MW && 1 === MW.length ? MW[0] : null;
            let NW = -1;
            if (AW && zR && (0, wW.t)(WW.material)) {
              const MW = WW.position,
                wW = bR.x - MW.x,
                zR = bR.y - MW.y,
                AW = bR.z - MW.z,
                yR = wW - TW,
                BW = zR - TW,
                tR = AW - TW,
                iR = Math.sqrt(yR * yR + BW * BW + tR * tR) + gR;
              NW = (0, CW.i)(RW, wW, zR, AW, (0, CW.g)(iR, eW))
            }
            if (zR && NW !== WW._noaFaceMask) {
              WW._noaFaceMask = NW;
              let MW = 0,
                CW = RW[wW.g]; - 1 !== NW && (CW = yR(RW, NW, tR), MW = tR[0]), WW._noaFaceCount = CW, zR.indexStart = 6 * MW, zR.indexCount = 6 * CW, zR.setBoundingInfo(WW.LRW())
            }
          }
          RW && 0 === WW._noaFaceCount || (iR[JW++] = WW)
        }
        WW.length = JW
      }
    }
  },
  35592: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW,
      g: () => zR,
      k: () => yR,
      l: () => wW,
      p: () => bR,
      s: () => CW,
      t: () => NW
    });
    const wW = 6,
      CW = [0, 2, 4, 1, 3, 5, 0, 2],
      zR = 6,
      AW = [1, 0, 3, 2, 5, 4];
    for (let eW = zR; eW < CW.length; eW++)
      if (CW[eW] !== CW[eW - zR]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const bR = CW.length + 1,
      yR = (() => {
        const WW = [];
        for (let RW = 0; RW < zR; RW++) WW[CW[RW]] = RW;
        return WW
      })();

    function NW(WW) {
      return !!WW && WW.backFaceCulling && (0 === WW.transparencyMode || 1 === WW.transparencyMode)
    }
  },
  35605: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => bR,
      g: () => yR,
      h: () => eW,
      i: () => NW,
      k: () => gR
    });
    var wW = MW(35592);
    const CW = 1 / 16,
      zR = 1 / 64,
      AW = 2048;
    wW.l;

    function bR(WW, RW, MW) {
      return Math.min(Math.abs(WW[0] * RW), Math.abs(WW[5] * MW)) / 2
    }

    function yR(WW, RW) {
      return CW + zR * WW * WW / RW
    }

    function NW(WW, RW, MW, CW, zR) {
      const AW = wW.p;
      return eW(WW[AW], WW[AW + 1], WW[AW + 2], WW[AW + 3], WW[AW + 4], WW[AW + 5], RW, MW, CW, zR)
    }

    function eW(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW) {
      return (AW <= WW - NW ? 0 : 1) | (AW >= RW + NW ? 0 : 2) | (bR <= MW - NW ? 0 : 4) | (bR >= wW + NW ? 0 : 8) | (yR <= CW - NW ? 0 : 16) | (yR >= zR + NW ? 0 : 32)
    }
    const BW = (() => {
        const WW = [];
        for (let RW = 0; RW < wW.s.length; RW++) {
          let MW = 0;
          for (let CW = RW + 1; CW <= wW.s.length; CW++) {
            const zR = 1 << wW.s[CW - 1];
            if (MW & zR) break;
            MW |= zR, WW.push({
              start: RW,
              end: CW,
              xw: MW
            })
          }
        }
        return WW
      })(),
      tR = [];

    function TW(WW, RW) {
      const MW = wW.k[RW];
      return WW[MW + 1] - WW[MW]
    }

    function gR(WW, RW, MW) {
      let CW = 0;
      for (let AW = 0; AW < wW.l; AW++) TW(WW, AW) > 0 && (CW |= 1 << AW);
      if (0 === (RW &= CW)) return 0;
      if (RW === CW) return MW[0] = 0, MW[1] = WW[wW.g], 1;
      let zR = null,
        bR = 1 / 0;
      for (const NW of function(WW) {
          let RW = tR[WW];
          if (RW) return RW;
          const MW = new Map,
            wW = (WW, RW) => {
              const wW = 4 * WW + RW.length / 2;
              MW.has(wW) || MW.set(wW, {
                xw: WW,
                windows: RW
              })
            };
          for (const zR of BW)
            if ((zR.xw & WW) === WW && wW(zR.xw, [zR.start, zR.end]), 0 !== (zR.xw & WW))
              for (const RW of BW) RW.start < zR.end || 0 !== (zR.xw & RW.xw) || 0 === (RW.xw & WW) || ((zR.xw | RW.xw) & WW) !== WW || wW(zR.xw | RW.xw, [zR.start, zR.end, RW.start, RW.end]);
          const CW = [...MW.values()];
          return RW = CW.filter((WW => !CW.some((RW => RW !== WW && (RW.xw & WW.xw) === RW.xw && RW.windows.length <= WW.windows.length)))), tR[WW] = RW, RW
        }(RW)) {
        let MW = (NW.windows.length / 2 - 1) * AW;
        const yR = NW.xw & ~RW & CW;
        for (let RW = 0; RW < wW.l; RW++) yR & 1 << RW && (MW += TW(WW, RW));
        MW < bR && (zR = NW, bR = MW)
      }
      const yR = zR.windows;
      for (let wW = 0; wW < yR.length; wW += 2) {
        const RW = WW[yR[wW]];
        MW[wW] = RW, MW[wW + 1] = WW[yR[wW + 1]] - RW
      }
      return yR.length / 2
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);