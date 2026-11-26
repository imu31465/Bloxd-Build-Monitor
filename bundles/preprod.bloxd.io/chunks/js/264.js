export const id = 264;
export const ids = [264];
export const modules = {
  42369: (HH, BH, LH) => {
    LH.d(BH, {
      noaDevTools: () => XH
    });
    var AH = LH(38304),
      rH = LH(38295),
      SH = LH(3038),
      hH = LH(1789),
      tH = LH(42292);

    function zH(HH) {
      const {
        mX: BH
      } = HH, LH = BH.engine, AH = {
        width: LH.getRenderWidth(),
        height: LH.getRenderHeight()
      };
      return {
        canvas: LH.getRenderingCanvas(),
        maxTextureSize: LH.getCaps().maxTextureSize,
        VX: () => !HH.oX,
        resize: (HH, BH) => {
          LH.setSize(HH, BH)
        },
        restoreSize: () => {
          LH.setSize(AH.width, AH.height), BH.resize()
        },
        onFrameDrawn: LH => {
          const AH = () => {
            BH.kU && LH()
          };
          return HH.on("afterRender", AH), () => {
            HH.off("afterRender", AH)
          }
        }
      }
    }
    var CH = LH(34856);

    function EH(HH, BH) {
      let {
        width: CH,
        height: EH,
        colouring: XH
      } = BH;
      const GH = "normals" === XH,
        YH = "depth" === XH;
      return new Promise((BH => {
        try {
          const uH = (0, SH.c)();
          if (uH.mX.yu) return "screenshot" !== HH || null !== XH ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void BH()) : void(0, tH.f)(zH(uH), CH, EH).finally(BH);
          const QH = uH.mX.engine,
            WH = uH.mX.yN(),
            MH = CH,
            xH = EH;
          Promise.all([Promise.all([LH.e(283), LH.e(284), LH.e(260)]).then((() => LH(64093))), Promise.all([LH.e(259), LH.e(258), LH.e(283), LH.e(284), LH.e(281), LH.e(285), LH.e(288), LH.e(620), LH.e(265)]).then((() => LH(64095))), Promise.all([LH.e(259), LH.e(258), LH.e(283), LH.e(284), LH.e(281), LH.e(291), LH.e(285), LH.e(293), LH.e(267)]).then((() => LH(64100))), LH.e(661).then((() => LH(64102))), Promise.all([LH.e(258), LH.e(254)]).then((() => LH(37961))), LH.e(282).then((() => LH(64110))), LH.e(263).then((() => LH(64115)))]).then((SH => {
            const {
              CreateScreenshotUsingRenderTarget: tH
            } = SH[1], {
              ShaderMaterial: zH
            } = SH[2], {
              ShaderLanguage: CH
            } = SH[3], {
              lu: EH
            } = SH[4], {
              registerDevtoolsShader: XH
            } = SH[6], uH = CH.GLSL, vH = new Map, PH = WH.meshes.filter((HH => HH.material));
            let TH = !1,
              UH = null;

            function VH() {
              var HH;
              TH && (TH = !1, (0, AH.f)(WH.meshes, !1)), null === (HH = UH) || void 0 === HH || HH(), UH = null, PH.forEach((HH => {
                const BH = vH.get(HH);
                BH && (HH.material = BH)
              }))
            }
            if (GH) {
              const HH = [],
                BH = [];
              PH.forEach((LH => {
                const AH = LH.name.toLowerCase(),
                  rH = LH.jF().boundingBox.center,
                  SH = WH.activeCamera.position.subtract(rH).length();
                AH.includes("sky") || AH.includes("background") || AH.includes("environment") || SH > 1e3 ? BH.push(LH) : HH.push(LH)
              })), XH("devtoolsNormal", uH);
              const LH = new zH("normalMaterial", WH, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: uH
              });
              XH("devtoolsWhite", uH);
              const AH = new zH("whiteMaterial", WH, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: uH
              });
              HH.forEach((HH => {
                vH.set(HH, HH.material), HH.material = LH
              })), BH.forEach((HH => {
                vH.set(HH, HH.material), HH.material = AH
              }))
            } else if (YH) {
              XH("devtoolsDepth", uH);
              const HH = WH.activeCamera.position;
              let BH = 0,
                LH = 1 / 0;
              PH.forEach((AH => {
                const rH = AH.name.toLowerCase();
                if (rH.includes("sky") || rH.includes("background") || rH.includes("environment")) return;
                const SH = AH.jF().boundingBox.center,
                  hH = EH.TransformCoordinates(SH, AH.getWorldMatrix()),
                  tH = HH.subtract(hH).length();
                tH > 1e3 || (BH = Math.max(BH, tH), LH = Math.min(LH, tH))
              }));
              const AH = BH - LH;
              BH += .1 * AH, LH = Math.max(0, LH - .1 * AH), console.log(`Depth range: min=${LH.toFixed(2)}, max=${BH.toFixed(2)}, range=${AH.toFixed(2)}`), AH < 1 && (BH = LH + 10);
              const rH = new zH("depthMaterial", WH, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: uH
              });
              rH.setVector3("cameraPosition", HH), rH.setFloat("maxDepth", BH), rH.setFloat("minDepth", LH), PH.forEach((HH => {
                vH.set(HH, HH.material), HH.material = rH
              }))
            }
            if ((0, AH.f)(WH.meshes, !0), TH = !0, "glb" === HH && (UH = (0, rH.b)(WH.meshes)), "screenshot" === HH) {
              let HH = `bloxd-screenshot-${MH}x${xH}-${Date.now()}.png`;
              GH ? HH = `bloxd-screenshot-normals-${MH}x${xH}-${Date.now()}.png` : YH && (HH = `bloxd-screenshot-depth-${MH}x${xH}-${Date.now()}.png`), tH(QH, WH.activeCamera, {
                width: MH,
                height: xH
              }, (function(LH) {
                VH(), fetch(LH).then((function(HH) {
                  return HH.blob()
                })).then((function(LH) {
                  (0, hH.downloadBlob)(LH, HH), BH()
                })).catch((function(HH) {
                  console.error("Error processing screenshot:", HH), BH()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), VH(), BH()
              }))
            } else {
              let HH = "NQ";
              GH ? HH = "scene-normals" : YH && (HH = "scene-depth"), GH || YH ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: HH
                  } = await Promise.all([LH.e(259), LH.e(258), LH.e(283), LH.e(284), LH.e(281), LH.e(291), LH.e(290), LH.e(266)]).then((() => LH(41538))), {
                    Color3: BH
                  } = await Promise.all([LH.e(259), LH.e(262)]).then((() => LH(38071))), AH = [], rH = [];
                  if (PH.forEach((HH => {
                      const BH = HH.name.toLowerCase(),
                        LH = HH.jF().boundingBox.center,
                        SH = WH.activeCamera.position.subtract(LH).length();
                      BH.includes("sky") || BH.includes("background") || BH.includes("environment") || SH > 1e3 ? rH.push(HH) : AH.push(HH)
                    })), GH) AH.forEach(((LH, AH) => {
                    const rH = LH.getVerticesData("normal");
                    if (rH) {
                      const SH = [];
                      for (let HH = 0; HH < rH.length; HH += 3) {
                        const BH = Math.abs(rH[HH]),
                          LH = Math.abs(rH[HH + 1]),
                          AH = Math.abs(rH[HH + 2]);
                        SH.push(BH, LH, AH, 1)
                      }
                      LH.setVerticesData("color", SH);
                      const hH = new HH(`vertexColorMat_${AH}`, WH);
                      hH.disableLighting = !0, hH.emissiveColor = new BH(1, 1, 1), hH.specularColor = new BH(0, 0, 0), LH.material = hH
                    }
                  })), rH.forEach(((LH, AH) => {
                    const rH = LH.getVerticesData("position");
                    if (rH) {
                      const SH = [],
                        hH = rH.length / 3;
                      for (let HH = 0; HH < hH; HH++) SH.push(1, 1, 1, 1);
                      LH.setVerticesData("color", SH);
                      const tH = new HH(`whiteMat_${AH}`, WH);
                      tH.disableLighting = !0, tH.emissiveColor = new BH(1, 1, 1), tH.specularColor = new BH(0, 0, 0), LH.material = tH
                    }
                  }));
                  else if (YH) {
                    const LH = WH.activeCamera.position;
                    let rH = 0,
                      SH = 1 / 0;
                    AH.forEach((HH => {
                      const BH = HH.jF().boundingBox.center,
                        AH = EH.TransformCoordinates(BH, HH.getWorldMatrix()),
                        hH = LH.subtract(AH).length();
                      rH = Math.max(rH, hH), SH = Math.min(SH, hH)
                    }));
                    const hH = rH - SH;
                    rH += .1 * hH, SH = Math.max(0, SH - .1 * hH), hH < 1 && (rH = SH + 10), PH.forEach(((AH, hH) => {
                      const tH = AH.name.toLowerCase(),
                        zH = AH.jF().boundingBox.center,
                        CH = EH.TransformCoordinates(zH, AH.getWorldMatrix()),
                        XH = LH.subtract(CH).length();
                      if (!(tH.includes("sky") || tH.includes("background") || tH.includes("environment") || XH > 1e3)) {
                        const LH = 1 - Math.min(Math.max((XH - SH) / (rH - SH), 0), 1),
                          tH = new HH(`depthMat_${hH}`, WH);
                        tH.diffuseColor = new BH(LH, LH, LH), tH.specularColor = new BH(0, 0, 0), AH.material = tH
                      }
                    }))
                  }
                })().then((() => Promise.all([LH.e(259), LH.e(258), LH.e(283), LH.e(284), LH.e(281), LH.e(291), LH.e(285), LH.e(290), LH.e(288), LH.e(280), LH.e(293), LH.e(303), LH.e(620), LH.e(272), LH.e(292), LH.e(257)]).then((() => LH(64122))))).then((BH => BH.GLTF2Export.GLBAsync(WH, HH))).then((HH => {
                  VH(), HH.downloadFiles(), BH()
                })).catch((HH => {
                  console.error("Error exporting GLB:", HH), VH(), BH()
                }))
              }), 100) : Promise.all([LH.e(259), LH.e(258), LH.e(283), LH.e(284), LH.e(281), LH.e(291), LH.e(285), LH.e(290), LH.e(288), LH.e(280), LH.e(293), LH.e(303), LH.e(620), LH.e(272), LH.e(292), LH.e(257)]).then((() => LH(64122))).then((LH => {
                LH.GLTF2Export.GLBAsync(WH, HH).then((HH => {
                  VH(), HH.downloadFiles(), BH()
                })).catch((HH => {
                  console.error("Error exporting GLB:", HH), VH(), BH()
                }))
              })).catch((HH => {
                console.error("Error importing serializers:", HH), VH(), BH()
              }))
            }
          })).catch((HH => {
            console.error("Error downloading the scene:", HH), BH()
          }))
        } catch (uH) {
          console.error("Error taking screenshot:", uH), BH()
        }
      }))
    }
    const XH = new class {
      constructor() {
        this.tools = CH.ALL_DEV_TOOLS
      }
      downloadScene(HH, BH) {
        return EH(HH, BH)
      }
      async setAmbientLightIntensity(HH) {
        const {
          Color3: BH
        } = await Promise.all([LH.e(259), LH.e(262)]).then((() => LH(38071)));
        (0, SH.c)().mX.yN().ambientColor = BH.FromArray([HH, HH, HH])
      }
      capturePhoto(HH, BH, LH) {
        return function(HH, BH, LH, AH) {
          return (0, tH.c)(zH(HH), BH, LH, AH)
        }((0, SH.c)(), HH, BH, LH)
      }
    }
  },
  42292: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => tH,
      f: () => zH
    });
    var AH = LH(1807);
    const rH = 33177600,
      SH = 3e4;
    let hH = !1;

    function tH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: tH = 1,
        type: zH = "image/png",
        quality: CH
      } = AH;
      return HH.VX() ? hH ? Promise.reject(new Error("A screenshot is already being taken")) : (hH = !0, new Promise(((AH, EH) => {
        let XH, GH = 2,
          YH = null;
        const uH = () => {
          var BH;
          hH = !1, null === (BH = YH) || void 0 === BH || BH(), clearTimeout(XH);
          try {
            HH.restoreSize()
          } catch (LH) {
            console.error("A screenshot couldn't size the canvas back", LH)
          }
        };
        XH = setTimeout((() => {
          uH(), EH(new Error("No frame was drawn to capture"))
        }), SH);
        try {
          const AH = function(HH, BH, LH) {
            const AH = Math.max(1, HH),
              SH = Math.max(1, BH),
              hH = Math.min(1, LH / Math.max(AH, SH), Math.sqrt(rH / (AH * SH)));
            return {
              width: Math.max(1, Math.floor(AH * hH)),
              height: Math.max(1, Math.floor(SH * hH))
            }
          }(BH, LH, HH.maxTextureSize);
          HH.resize(AH.width, AH.height, tH * AH.width / Math.max(1, BH))
        } catch (QH) {
          return uH(), void EH(QH)
        }
        YH = HH.onFrameDrawn((() => {
          if (GH--, GH > 0) return;
          const {
            canvas: BH
          } = HH, LH = {
            width: BH.width,
            height: BH.height
          };
          try {
            BH.toBlob((HH => {
              HH ? AH({
                blob: HH,
                ...LH
              }) : EH(new Error("The canvas gave no image"))
            }), zH, CH)
          } catch (QH) {
            EH(QH)
          } finally {
            uH()
          }
        }))
      }))) : Promise.reject(new Error("Screenshots need a game to be running"))
    }
    async function zH(HH, BH, LH) {
      try {
        const rH = await tH(HH, BH, LH);
        (0, AH.e)(rH.blob, `bloxd-screenshot-${rH.width}x${rH.height}-${Date.now()}.png`)
      } catch (rH) {
        console.error("Error taking screenshot:", rH)
      }
    }
  },
  38304: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => CH,
      f: () => tH,
      h: () => hH
    });
    var AH = LH(38302),
      rH = LH(38308);
    let SH = 0;

    function hH(HH, BH) {
      const LH = HH;
      LH._noaFaceGroups = null !== BH && void 0 !== BH ? BH : null, LH._noaFaceEpoch = -1, LH._noaFaceMask = -1, LH._noaFaceCount = -1, LH._noaFaceMaterial = null;
      const AH = HH.jU;
      AH && 1 === AH.length && (AH[0].indexStart = 0, AH[0].indexCount = HH.getTotalIndices())
    }

    function tH(HH, BH) {
      if (BH) {
        SH++;
        for (const BH of HH) {
          const HH = BH._noaFaceGroups;
          HH && hH(BH, HH)
        }
      } else SH = Math.max(0, SH - 1)
    }

    function zH(HH, BH, LH) {
      let rH = -1,
        SH = 0;
      for (let hH = 0; hH < AH.e; hH++) {
        const LH = HH[hH],
          tH = HH[hH + 1];
        tH > LH && BH & 1 << AH.c[hH] && (rH < 0 && (rH = LH), SH = tH)
      }
      return rH < 0 ? (LH[0] = 0, LH[1] = 0, 0) : (LH[0] = rH, LH[1] = SH - rH, SH - rH)
    }
    class CH {
      constructor(HH, BH) {
        this.xX = HH, this.engine = BH, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(HH, BH) {
        if (!BH) return;
        const LH = BH.getProjectionMatrix().m,
          hH = 0 === SH && 0 === LH[15],
          tH = BH.globalPosition,
          {
            engine: CH
          } = this,
          EH = hH ? (0, rH.d)(LH, CH.getRenderWidth(), CH.getRenderHeight()) : 0;
        tH.x === this.eyeX && tH.y === this.eyeY && tH.z === this.eyeZ && EH === this.focalPx && hH === this.culling || (this.epoch++, this.eyeX = tH.x, this.eyeY = tH.y, this.eyeZ = tH.z, this.focalPx = EH, this.culling = hH);
        const {
          epoch: XH,
          range: GH
        } = this, YH = this.xX / 2, uH = YH * Math.sqrt(3), QH = HH.data, WH = HH.length;
        let MH = 0;
        for (let SH = 0; SH < WH; SH++) {
          const HH = QH[SH],
            BH = HH._noaFaceGroups;
          if (BH && (HH._noaFaceEpoch !== XH || HH._noaFaceMaterial !== HH.material)) {
            HH._noaFaceEpoch = XH, HH._noaFaceMaterial = HH.material;
            const LH = HH.jU,
              SH = LH && 1 === LH.length ? LH[0] : null;
            let CH = -1;
            if (hH && SH && (0, AH.v)(HH.material)) {
              const LH = HH.position,
                AH = tH.x - LH.x,
                SH = tH.y - LH.y,
                hH = tH.z - LH.z,
                zH = AH - YH,
                XH = SH - YH,
                GH = hH - YH,
                QH = Math.sqrt(zH * zH + XH * XH + GH * GH) + uH;
              CH = (0, rH.m)(BH, AH, SH, hH, (0, rH.h)(QH, EH))
            }
            if (SH && CH !== HH._noaFaceMask) {
              HH._noaFaceMask = CH;
              let LH = 0,
                rH = BH[AH.e]; - 1 !== CH && (rH = zH(BH, CH, GH), LH = GH[0]), HH._noaFaceCount = rH, SH.indexStart = 6 * LH, SH.indexCount = 6 * rH, SH.setBoundingInfo(HH.jF())
            }
          }
          BH && 0 === HH._noaFaceCount || (QH[MH++] = HH)
        }
        HH.length = MH
      }
    }
  },
  38295: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => zH,
      e: () => tH
    });
    const AH = new WeakSet;
    let rH = 0;
    const SH = new Set;

    function hH(HH, BH) {
      HH._data = BH
    }

    function tH(HH) {
      var BH, LH;
      (null !== (BH = null === (LH = HH.getBuffer()) || void 0 === LH ? void 0 : LH.aX) && void 0 !== BH ? BH : 0) > 0 && (AH.add(HH), 0 === rH ? hH(HH, null) : SH.add(HH))
    }

    function zH(HH) {
      rH++;
      for (const LH of function(HH) {
          const BH = new Set;
          for (const rH of HH) {
            const HH = rH.geometry;
            for (const rH of Object.values(null !== (LH = null === HH || void 0 === HH ? void 0 : HH.getVertexBuffers()) && void 0 !== LH ? LH : {})) {
              var LH;
              const HH = rH.getWrapperBuffer();
              AH.has(HH) && BH.add(HH)
            }
          }
          return BH
        }(HH)) LH.getData() || CH(LH), SH.add(LH);
      let BH = !0;
      return () => {
        if (BH && (BH = !1, rH--, 0 === rH)) {
          for (const HH of SH) hH(HH, null);
          SH.clear()
        }
      }
    }

    function CH(HH) {
      const BH = HH.getBuffer();
      if (!BH || !(BH.aX > 0)) return;
      const LH = HH._engine,
        AH = new Uint8Array(BH.aX);
      LH.bindArrayBuffer(BH), LH._gl.getBufferSubData(LH._gl.ARRAY_BUFFER, 0, AH), LH._resetVertexBufferBinding(), hH(HH, AH)
    }
  },
  38302: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH,
      e: () => SH,
      i: () => zH,
      m: () => AH,
      q: () => tH,
      t: () => rH,
      v: () => CH
    });
    const AH = 6,
      rH = [0, 2, 4, 1, 3, 5, 0, 2],
      SH = 6,
      hH = [1, 0, 3, 2, 5, 4];
    for (let EH = SH; EH < rH.length; EH++)
      if (rH[EH] !== rH[EH - SH]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const tH = rH.length + 1,
      zH = (() => {
        const HH = [];
        for (let BH = 0; BH < SH; BH++) HH[rH[BH]] = BH;
        return HH
      })();

    function CH(HH) {
      return !!HH && HH.backFaceCulling && (0 === HH.transparencyMode || 1 === HH.transparencyMode)
    }
  },
  38308: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => tH,
      h: () => zH,
      i: () => EH,
      m: () => CH,
      o: () => uH
    });
    var AH = LH(38302);
    const rH = 1 / 16,
      SH = 1 / 64,
      hH = 2048;
    AH.m;

    function tH(HH, BH, LH) {
      return Math.min(Math.abs(HH[0] * BH), Math.abs(HH[5] * LH)) / 2
    }

    function zH(HH, BH) {
      return rH + SH * HH * HH / BH
    }

    function CH(HH, BH, LH, rH, SH) {
      const hH = AH.q;
      return EH(HH[hH], HH[hH + 1], HH[hH + 2], HH[hH + 3], HH[hH + 4], HH[hH + 5], BH, LH, rH, SH)
    }

    function EH(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH) {
      return (hH <= HH - CH ? 0 : 1) | (hH >= BH + CH ? 0 : 2) | (tH <= LH - CH ? 0 : 4) | (tH >= AH + CH ? 0 : 8) | (zH <= rH - CH ? 0 : 16) | (zH >= SH + CH ? 0 : 32)
    }
    const XH = (() => {
        const HH = [];
        for (let BH = 0; BH < AH.t.length; BH++) {
          let LH = 0;
          for (let rH = BH + 1; rH <= AH.t.length; rH++) {
            const SH = 1 << AH.t[rH - 1];
            if (LH & SH) break;
            LH |= SH, HH.push({
              start: BH,
              end: rH,
              pS: LH
            })
          }
        }
        return HH
      })(),
      GH = [];

    function YH(HH, BH) {
      const LH = AH.i[BH];
      return HH[LH + 1] - HH[LH]
    }

    function uH(HH, BH, LH) {
      let rH = 0;
      for (let hH = 0; hH < AH.m; hH++) YH(HH, hH) > 0 && (rH |= 1 << hH);
      if (0 === (BH &= rH)) return 0;
      if (BH === rH) return LH[0] = 0, LH[1] = HH[AH.e], 1;
      let SH = null,
        tH = 1 / 0;
      for (const CH of function(HH) {
          let BH = GH[HH];
          if (BH) return BH;
          const LH = new Map,
            AH = (HH, BH) => {
              const AH = 4 * HH + BH.length / 2;
              LH.has(AH) || LH.set(AH, {
                pS: HH,
                windows: BH
              })
            };
          for (const SH of XH)
            if ((SH.pS & HH) === HH && AH(SH.pS, [SH.start, SH.end]), 0 !== (SH.pS & HH))
              for (const BH of XH) BH.start < SH.end || 0 !== (SH.pS & BH.pS) || 0 === (BH.pS & HH) || ((SH.pS | BH.pS) & HH) !== HH || AH(SH.pS | BH.pS, [SH.start, SH.end, BH.start, BH.end]);
          const rH = [...LH.values()];
          return BH = rH.filter((HH => !rH.some((BH => BH !== HH && (BH.pS & HH.pS) === BH.pS && BH.windows.length <= HH.windows.length)))), GH[HH] = BH, BH
        }(BH)) {
        let LH = (CH.windows.length / 2 - 1) * hH;
        const zH = CH.pS & ~BH & rH;
        for (let BH = 0; BH < AH.m; BH++) zH & 1 << BH && (LH += YH(HH, BH));
        LH < tH && (SH = CH, tH = LH)
      }
      const zH = SH.windows;
      for (let AH = 0; AH < zH.length; AH += 2) {
        const BH = HH[zH[AH]];
        LH[AH] = BH, LH[AH + 1] = HH[zH[AH + 1]] - BH
      }
      return zH.length / 2
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);