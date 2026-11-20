export const id = 231;
export const ids = [231];
export const modules = {
  40684: (TT, kT, cT) => {
    cT.d(kT, {
      noaDevTools: () => AT
    });
    var lT = cT(37400),
      MT = cT(37381),
      KT = cT(2790),
      OT = cT(1741);

    function yT(TT) {
      const {
        gv: kT
      } = TT, cT = kT.engine, lT = {
        width: cT.getRenderWidth(),
        height: cT.getRenderHeight()
      };
      return {
        canvas: cT.getRenderingCanvas(),
        maxTextureSize: cT.getCaps().maxTextureSize,
        drawing: () => !TT.FQ,
        resize: (TT, kT) => {
          cT.setSize(TT, kT)
        },
        restoreSize: () => {
          cT.setSize(lT.width, lT.height), kT.resize()
        },
        onFrameDrawn: kT => (TT.on("afterRender", kT), () => {
          TT.off("afterRender", kT)
        })
      }
    }
    var fT = cT(40665),
      xT = cT(9233);

    function IT(TT, kT) {
      let {
        width: xT,
        height: IT,
        colouring: AT
      } = kT;
      const CT = "normals" === AT,
        jT = "depth" === AT;
      return new Promise((kT => {
        try {
          const vT = (0, KT.f)();
          if (vT.gv.Uv) return "screenshot" !== TT || null !== AT ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void kT()) : void(0, fT.c)(yT(vT), xT, IT).finally(kT);
          const tT = vT.gv.engine,
            hT = vT.gv.NJ(),
            NT = xT,
            QT = IT;
          Promise.all([Promise.all([cT.e(246), cT.e(247), cT.e(228)]).then((() => cT(60548))), Promise.all([cT.e(227), cT.e(226), cT.e(246), cT.e(247), cT.e(244), cT.e(248), cT.e(251), cT.e(302), cT.e(232)]).then((() => cT(60554))), Promise.all([cT.e(227), cT.e(226), cT.e(246), cT.e(247), cT.e(244), cT.e(254), cT.e(248), cT.e(256), cT.e(234)]).then((() => cT(60556))), cT.e(345).then((() => cT(60565))), Promise.all([cT.e(226), cT.e(222)]).then((() => cT(36885))), cT.e(245).then((() => cT(60569))), cT.e(229).then((() => cT(60571)))]).then((KT => {
            const {
              CreateScreenshotUsingRenderTarget: yT
            } = KT[1], {
              ShaderMaterial: fT
            } = KT[2], {
              ShaderLanguage: xT
            } = KT[3], {
              Fv: IT
            } = KT[4], {
              registerDevtoolsShader: AT
            } = KT[6], vT = xT.GLSL, ST = new Map, DT = hT.meshes.filter((TT => TT.material));
            let aT = !1,
              FT = null;

            function rT() {
              var TT;
              aT && (aT = !1, (0, lT.d)(hT.meshes, !1)), null === (TT = FT) || void 0 === TT || TT(), FT = null, DT.forEach((TT => {
                const kT = ST.get(TT);
                kT && (TT.material = kT)
              }))
            }
            if (CT) {
              const TT = [],
                kT = [];
              DT.forEach((cT => {
                const lT = cT.name.toLowerCase(),
                  MT = cT.DH().boundingBox.center,
                  KT = hT.activeCamera.position.subtract(MT).length();
                lT.includes("sky") || lT.includes("background") || lT.includes("environment") || KT > 1e3 ? kT.push(cT) : TT.push(cT)
              })), AT("devtoolsNormal", vT);
              const cT = new fT("normalMaterial", hT, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: vT
              });
              AT("devtoolsWhite", vT);
              const lT = new fT("whiteMaterial", hT, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: vT
              });
              TT.forEach((TT => {
                ST.set(TT, TT.material), TT.material = cT
              })), kT.forEach((TT => {
                ST.set(TT, TT.material), TT.material = lT
              }))
            } else if (jT) {
              AT("devtoolsDepth", vT);
              const TT = hT.activeCamera.position;
              let kT = 0,
                cT = 1 / 0;
              DT.forEach((lT => {
                const MT = lT.name.toLowerCase();
                if (MT.includes("sky") || MT.includes("background") || MT.includes("environment")) return;
                const KT = lT.DH().boundingBox.center,
                  OT = IT.TransformCoordinates(KT, lT.getWorldMatrix()),
                  yT = TT.subtract(OT).length();
                yT > 1e3 || (kT = Math.max(kT, yT), cT = Math.min(cT, yT))
              }));
              const lT = kT - cT;
              kT += .1 * lT, cT = Math.max(0, cT - .1 * lT), console.log(`Depth range: min=${cT.toFixed(2)}, max=${kT.toFixed(2)}, range=${lT.toFixed(2)}`), lT < 1 && (kT = cT + 10);
              const MT = new fT("depthMaterial", hT, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: vT
              });
              MT.setVector3("cameraPosition", TT), MT.setFloat("maxDepth", kT), MT.setFloat("minDepth", cT), DT.forEach((TT => {
                ST.set(TT, TT.material), TT.material = MT
              }))
            }
            if ((0, lT.d)(hT.meshes, !0), aT = !0, "glb" === TT && (FT = (0, MT.c)(hT.meshes)), "screenshot" === TT) {
              let TT = `bloxd-screenshot-${NT}x${QT}-${Date.now()}.png`;
              CT ? TT = `bloxd-screenshot-normals-${NT}x${QT}-${Date.now()}.png` : jT && (TT = `bloxd-screenshot-depth-${NT}x${QT}-${Date.now()}.png`), yT(tT, hT.activeCamera, {
                width: NT,
                height: QT
              }, (function(cT) {
                rT(), fetch(cT).then((function(TT) {
                  return TT.blob()
                })).then((function(cT) {
                  (0, OT.downloadBlob)(cT, TT), kT()
                })).catch((function(TT) {
                  console.error("Error processing screenshot:", TT), kT()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), rT(), kT()
              }))
            } else {
              let TT = "et";
              CT ? TT = "scene-normals" : jT && (TT = "scene-depth"), CT || jT ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: TT
                  } = await Promise.all([cT.e(227), cT.e(226), cT.e(246), cT.e(247), cT.e(244), cT.e(254), cT.e(253), cT.e(233)]).then((() => cT(39889))), {
                    Color3: kT
                  } = await Promise.all([cT.e(227), cT.e(230)]).then((() => cT(37086))), lT = [], MT = [];
                  if (DT.forEach((TT => {
                      const kT = TT.name.toLowerCase(),
                        cT = TT.DH().boundingBox.center,
                        KT = hT.activeCamera.position.subtract(cT).length();
                      kT.includes("sky") || kT.includes("background") || kT.includes("environment") || KT > 1e3 ? MT.push(TT) : lT.push(TT)
                    })), CT) lT.forEach(((cT, lT) => {
                    const MT = cT.getVerticesData("normal");
                    if (MT) {
                      const KT = [];
                      for (let TT = 0; TT < MT.length; TT += 3) {
                        const kT = Math.abs(MT[TT]),
                          cT = Math.abs(MT[TT + 1]),
                          lT = Math.abs(MT[TT + 2]);
                        KT.push(kT, cT, lT, 1)
                      }
                      cT.setVerticesData("color", KT);
                      const OT = new TT(`vertexColorMat_${lT}`, hT);
                      OT.disableLighting = !0, OT.emissiveColor = new kT(1, 1, 1), OT.specularColor = new kT(0, 0, 0), cT.material = OT
                    }
                  })), MT.forEach(((cT, lT) => {
                    const MT = cT.getVerticesData("position");
                    if (MT) {
                      const KT = [],
                        OT = MT.length / 3;
                      for (let TT = 0; TT < OT; TT++) KT.push(1, 1, 1, 1);
                      cT.setVerticesData("color", KT);
                      const yT = new TT(`whiteMat_${lT}`, hT);
                      yT.disableLighting = !0, yT.emissiveColor = new kT(1, 1, 1), yT.specularColor = new kT(0, 0, 0), cT.material = yT
                    }
                  }));
                  else if (jT) {
                    const cT = hT.activeCamera.position;
                    let MT = 0,
                      KT = 1 / 0;
                    lT.forEach((TT => {
                      const kT = TT.DH().boundingBox.center,
                        lT = IT.TransformCoordinates(kT, TT.getWorldMatrix()),
                        OT = cT.subtract(lT).length();
                      MT = Math.max(MT, OT), KT = Math.min(KT, OT)
                    }));
                    const OT = MT - KT;
                    MT += .1 * OT, KT = Math.max(0, KT - .1 * OT), OT < 1 && (MT = KT + 10), DT.forEach(((lT, OT) => {
                      const yT = lT.name.toLowerCase(),
                        fT = lT.DH().boundingBox.center,
                        xT = IT.TransformCoordinates(fT, lT.getWorldMatrix()),
                        AT = cT.subtract(xT).length();
                      if (!(yT.includes("sky") || yT.includes("background") || yT.includes("environment") || AT > 1e3)) {
                        const cT = 1 - Math.min(Math.max((AT - KT) / (MT - KT), 0), 1),
                          yT = new TT(`depthMat_${OT}`, hT);
                        yT.diffuseColor = new kT(cT, cT, cT), yT.specularColor = new kT(0, 0, 0), lT.material = yT
                      }
                    }))
                  }
                })().then((() => Promise.all([cT.e(227), cT.e(226), cT.e(246), cT.e(247), cT.e(244), cT.e(254), cT.e(248), cT.e(253), cT.e(251), cT.e(243), cT.e(256), cT.e(265), cT.e(302), cT.e(238), cT.e(255), cT.e(225)]).then((() => cT(60573))))).then((kT => kT.GLTF2Export.GLBAsync(hT, TT))).then((TT => {
                  rT(), TT.downloadFiles(), kT()
                })).catch((TT => {
                  console.error("Error exporting GLB:", TT), rT(), kT()
                }))
              }), 100) : Promise.all([cT.e(227), cT.e(226), cT.e(246), cT.e(247), cT.e(244), cT.e(254), cT.e(248), cT.e(253), cT.e(251), cT.e(243), cT.e(256), cT.e(265), cT.e(302), cT.e(238), cT.e(255), cT.e(225)]).then((() => cT(60573))).then((cT => {
                cT.GLTF2Export.GLBAsync(hT, TT).then((TT => {
                  rT(), TT.downloadFiles(), kT()
                })).catch((TT => {
                  console.error("Error exporting GLB:", TT), rT(), kT()
                }))
              })).catch((TT => {
                console.error("Error importing serializers:", TT), rT(), kT()
              }))
            }
          })).catch((TT => {
            console.error("Error downloading the scene:", TT), kT()
          }))
        } catch (vT) {
          console.error("Error taking screenshot:", vT), kT()
        }
      }))
    }
    const AT = new class {
      constructor() {
        this.tools = xT.ALL_DEV_TOOLS
      }
      downloadScene(TT, kT) {
        return IT(TT, kT)
      }
      async setAmbientLightIntensity(TT) {
        const {
          Color3: kT
        } = await Promise.all([cT.e(227), cT.e(230)]).then((() => cT(37086)));
        (0, KT.f)().gv.NJ().ambientColor = kT.FromArray([TT, TT, TT])
      }
    }
  },
  40665: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => fT
    });
    var lT = cT(1758);
    const MT = 33177600,
      KT = 3e4;
    let OT = !1;

    function yT(TT, kT, cT) {
      if (!TT.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (OT) return Promise.reject(new Error("A screenshot is already being taken"));
      OT = !0;
      const lT = function(TT, kT, cT) {
        const lT = Math.max(1, TT),
          KT = Math.max(1, kT),
          OT = Math.min(1, cT / Math.max(lT, KT), Math.sqrt(MT / (lT * KT)));
        return {
          width: Math.max(1, Math.floor(lT * OT)),
          height: Math.max(1, Math.floor(KT * OT))
        }
      }(kT, cT, TT.maxTextureSize);
      return TT.resize(lT.width, lT.height), new Promise(((kT, cT) => {
        let lT, MT = 2,
          yT = null;
        const fT = () => {
          var kT;
          OT = !1, null === (kT = yT) || void 0 === kT || kT(), clearTimeout(lT), TT.restoreSize()
        };
        lT = setTimeout((() => {
          fT(), cT(new Error("No frame was drawn to capture"))
        }), KT), yT = TT.onFrameDrawn((() => {
          if (MT--, MT > 0) return;
          const {
            canvas: lT
          } = TT, KT = {
            width: lT.width,
            height: lT.height
          };
          try {
            lT.toBlob((TT => {
              TT ? kT({
                blob: TT,
                ...KT
              }) : cT(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (OT) {
            cT(OT)
          } finally {
            fT()
          }
        }))
      }))
    }
    async function fT(TT, kT, cT) {
      try {
        const MT = await yT(TT, kT, cT);
        (0, lT.b)(MT.blob, `bloxd-screenshot-${MT.width}x${MT.height}-${Date.now()}.png`)
      } catch (MT) {
        console.error("Error taking screenshot:", MT)
      }
    }
  },
  37400: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => xT,
      d: () => yT,
      h: () => OT
    });
    var lT = cT(37395),
      MT = cT(37402);
    let KT = 0;

    function OT(TT, kT) {
      const cT = TT;
      cT._noaFaceGroups = null !== kT && void 0 !== kT ? kT : null, cT._noaFaceEpoch = -1, cT._noaFaceMask = -1, cT._noaFaceCount = -1, cT._noaFaceMaterial = null;
      const lT = TT.kF;
      lT && 1 === lT.length && (lT[0].indexStart = 0, lT[0].indexCount = TT.getTotalIndices())
    }

    function yT(TT, kT) {
      if (kT) {
        KT++;
        for (const kT of TT) {
          const TT = kT._noaFaceGroups;
          TT && OT(kT, TT)
        }
      } else KT = Math.max(0, KT - 1)
    }

    function fT(TT, kT, cT) {
      let MT = -1,
        KT = 0;
      for (let OT = 0; OT < lT.f; OT++) {
        const cT = TT[OT],
          yT = TT[OT + 1];
        yT > cT && kT & 1 << lT.b[OT] && (MT < 0 && (MT = cT), KT = yT)
      }
      return MT < 0 ? (cT[0] = 0, cT[1] = 0, 0) : (cT[0] = MT, cT[1] = KT - MT, KT - MT)
    }
    class xT {
      constructor(TT, kT) {
        this.vv = TT, this.engine = kT, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(TT, kT) {
        if (!kT) return;
        const cT = kT.getProjectionMatrix().m,
          OT = 0 === KT && 0 === cT[15],
          yT = kT.globalPosition,
          {
            engine: xT
          } = this,
          IT = OT ? (0, MT.e)(cT, xT.getRenderWidth(), xT.getRenderHeight()) : 0;
        yT.x === this.eyeX && yT.y === this.eyeY && yT.z === this.eyeZ && IT === this.focalPx && OT === this.culling || (this.epoch++, this.eyeX = yT.x, this.eyeY = yT.y, this.eyeZ = yT.z, this.focalPx = IT, this.culling = OT);
        const {
          epoch: AT,
          range: CT
        } = this, jT = this.vv / 2, vT = jT * Math.sqrt(3), tT = TT.data, hT = TT.length;
        let NT = 0;
        for (let KT = 0; KT < hT; KT++) {
          const TT = tT[KT],
            kT = TT._noaFaceGroups;
          if (kT && (TT._noaFaceEpoch !== AT || TT._noaFaceMaterial !== TT.material)) {
            TT._noaFaceEpoch = AT, TT._noaFaceMaterial = TT.material;
            const cT = TT.kF,
              KT = cT && 1 === cT.length ? cT[0] : null;
            let xT = -1;
            if (OT && KT && (0, lT.r)(TT.material)) {
              const cT = TT.position,
                lT = yT.x - cT.x,
                KT = yT.y - cT.y,
                OT = yT.z - cT.z,
                fT = lT - jT,
                AT = KT - jT,
                CT = OT - jT,
                tT = Math.sqrt(fT * fT + AT * AT + CT * CT) + vT;
              xT = (0, MT.q)(kT, lT, KT, OT, (0, MT.i)(tT, IT))
            }
            if (KT && xT !== TT._noaFaceMask) {
              TT._noaFaceMask = xT;
              let cT = 0,
                MT = kT[lT.f]; - 1 !== xT && (MT = fT(kT, xT, CT), cT = CT[0]), TT._noaFaceCount = MT, KT.indexStart = 6 * cT, KT.indexCount = 6 * MT, KT.setBoundingInfo(TT.DH())
            }
          }
          kT && 0 === TT._noaFaceCount || (tT[NT++] = TT)
        }
        TT.length = NT
      }
    }
  },
  37381: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => fT,
      e: () => yT
    });
    const lT = new WeakSet;
    let MT = 0;
    const KT = new Set;

    function OT(TT, kT) {
      TT._data = kT
    }

    function yT(TT) {
      var kT, cT;
      (null !== (kT = null === (cT = TT.getBuffer()) || void 0 === cT ? void 0 : cT.DA) && void 0 !== kT ? kT : 0) > 0 && (lT.add(TT), 0 === MT ? OT(TT, null) : KT.add(TT))
    }

    function fT(TT) {
      MT++;
      for (const cT of function(TT) {
          const kT = new Set;
          for (const MT of TT) {
            const TT = MT.geometry;
            for (const MT of Object.values(null !== (cT = null === TT || void 0 === TT ? void 0 : TT.getVertexBuffers()) && void 0 !== cT ? cT : {})) {
              var cT;
              const TT = MT.getWrapperBuffer();
              lT.has(TT) && kT.add(TT)
            }
          }
          return kT
        }(TT)) cT.getData() || xT(cT), KT.add(cT);
      let kT = !0;
      return () => {
        if (kT && (kT = !1, MT--, 0 === MT)) {
          for (const TT of KT) OT(TT, null);
          KT.clear()
        }
      }
    }

    function xT(TT) {
      const kT = TT.getBuffer();
      if (!kT || !(kT.DA > 0)) return;
      const cT = TT._engine,
        lT = new Uint8Array(kT.DA);
      cT.bindArrayBuffer(kT), cT._gl.getBufferSubData(cT._gl.ARRAY_BUFFER, 0, lT), cT._resetVertexBufferBinding(), OT(TT, lT)
    }
  },
  37395: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => OT,
      f: () => KT,
      i: () => fT,
      l: () => lT,
      m: () => yT,
      n: () => MT,
      r: () => xT
    });
    const lT = 6,
      MT = [0, 2, 4, 1, 3, 5, 0, 2],
      KT = 6,
      OT = [1, 0, 3, 2, 5, 4];
    for (let IT = KT; IT < MT.length; IT++)
      if (MT[IT] !== MT[IT - KT]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const yT = MT.length + 1,
      fT = (() => {
        const TT = [];
        for (let kT = 0; kT < KT; kT++) TT[MT[kT]] = kT;
        return TT
      })();

    function xT(TT) {
      return !!TT && TT.backFaceCulling && (0 === TT.transparencyMode || 1 === TT.transparencyMode)
    }
  },
  37402: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => yT,
      i: () => fT,
      m: () => IT,
      q: () => xT,
      u: () => vT
    });
    var lT = cT(37395);
    const MT = 1 / 16,
      KT = 1 / 64,
      OT = 2048;
    lT.l;

    function yT(TT, kT, cT) {
      return Math.min(Math.abs(TT[0] * kT), Math.abs(TT[5] * cT)) / 2
    }

    function fT(TT, kT) {
      return MT + KT * TT * TT / kT
    }

    function xT(TT, kT, cT, MT, KT) {
      const OT = lT.m;
      return IT(TT[OT], TT[OT + 1], TT[OT + 2], TT[OT + 3], TT[OT + 4], TT[OT + 5], kT, cT, MT, KT)
    }

    function IT(TT, kT, cT, lT, MT, KT, OT, yT, fT, xT) {
      return (OT <= TT - xT ? 0 : 1) | (OT >= kT + xT ? 0 : 2) | (yT <= cT - xT ? 0 : 4) | (yT >= lT + xT ? 0 : 8) | (fT <= MT - xT ? 0 : 16) | (fT >= KT + xT ? 0 : 32)
    }
    const AT = (() => {
        const TT = [];
        for (let kT = 0; kT < lT.n.length; kT++) {
          let cT = 0;
          for (let MT = kT + 1; MT <= lT.n.length; MT++) {
            const KT = 1 << lT.n[MT - 1];
            if (cT & KT) break;
            cT |= KT, TT.push({
              start: kT,
              end: MT,
              Gk: cT
            })
          }
        }
        return TT
      })(),
      CT = [];

    function jT(TT, kT) {
      const cT = lT.i[kT];
      return TT[cT + 1] - TT[cT]
    }

    function vT(TT, kT, cT) {
      let MT = 0;
      for (let OT = 0; OT < lT.l; OT++) jT(TT, OT) > 0 && (MT |= 1 << OT);
      if (0 === (kT &= MT)) return 0;
      if (kT === MT) return cT[0] = 0, cT[1] = TT[lT.f], 1;
      let KT = null,
        yT = 1 / 0;
      for (const xT of function(TT) {
          let kT = CT[TT];
          if (kT) return kT;
          const cT = new Map,
            lT = (TT, kT) => {
              const lT = 4 * TT + kT.length / 2;
              cT.has(lT) || cT.set(lT, {
                Gk: TT,
                windows: kT
              })
            };
          for (const KT of AT)
            if ((KT.Gk & TT) === TT && lT(KT.Gk, [KT.start, KT.end]), 0 !== (KT.Gk & TT))
              for (const kT of AT) kT.start < KT.end || 0 !== (KT.Gk & kT.Gk) || 0 === (kT.Gk & TT) || ((KT.Gk | kT.Gk) & TT) !== TT || lT(KT.Gk | kT.Gk, [KT.start, KT.end, kT.start, kT.end]);
          const MT = [...cT.values()];
          return kT = MT.filter((TT => !MT.some((kT => kT !== TT && (kT.Gk & TT.Gk) === kT.Gk && kT.windows.length <= TT.windows.length)))), CT[TT] = kT, kT
        }(kT)) {
        let cT = (xT.windows.length / 2 - 1) * OT;
        const fT = xT.Gk & ~kT & MT;
        for (let kT = 0; kT < lT.l; kT++) fT & 1 << kT && (cT += jT(TT, kT));
        cT < yT && (KT = xT, yT = cT)
      }
      const fT = KT.windows;
      for (let lT = 0; lT < fT.length; lT += 2) {
        const kT = TT[fT[lT]];
        cT[lT] = kT, cT[lT + 1] = TT[fT[lT + 1]] - kT
      }
      return fT.length / 2
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);