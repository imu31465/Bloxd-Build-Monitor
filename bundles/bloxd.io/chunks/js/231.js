export const id = 231;
export const ids = [231];
export const modules = {
  40475: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      noaDevTools: () => HQ
    });
    var LQ = wQ(37129),
      qQ = wQ(37118),
      oQ = wQ(2676),
      DQ = wQ(1725);

    function kQ(QQ) {
      const {
        Zx: FQ
      } = QQ, wQ = FQ.engine, LQ = {
        width: wQ.getRenderWidth(),
        height: wQ.getRenderHeight()
      };
      return {
        canvas: wQ.getRenderingCanvas(),
        maxTextureSize: wQ.getCaps().maxTextureSize,
        drawing: () => !QQ.WC,
        resize: (QQ, FQ) => {
          wQ.setSize(QQ, FQ)
        },
        restoreSize: () => {
          wQ.setSize(LQ.width, LQ.height), FQ.resize()
        },
        onFrameDrawn: FQ => (QQ.on("afterRender", FQ), () => {
          QQ.off("afterRender", FQ)
        })
      }
    }
    var vQ = wQ(40455),
      mQ = wQ(8978);

    function uQ(QQ, FQ) {
      let {
        width: mQ,
        height: uQ,
        colouring: HQ
      } = FQ;
      const bQ = "normals" === HQ,
        YQ = "depth" === HQ;
      return new Promise((FQ => {
        try {
          const xQ = (0, oQ.d)();
          if (xQ.Zx.yx) return "screenshot" !== QQ || null !== HQ ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void FQ()) : void(0, vQ.c)(kQ(xQ), mQ, uQ).finally(FQ);
          const AQ = xQ.Zx.engine,
            tQ = xQ.Zx.iN(),
            eQ = mQ,
            MQ = uQ;
          Promise.all([Promise.all([wQ.e(246), wQ.e(247), wQ.e(228)]).then((() => wQ(60631))), Promise.all([wQ.e(227), wQ.e(226), wQ.e(246), wQ.e(247), wQ.e(244), wQ.e(248), wQ.e(251), wQ.e(302), wQ.e(232)]).then((() => wQ(60637))), Promise.all([wQ.e(227), wQ.e(226), wQ.e(246), wQ.e(247), wQ.e(244), wQ.e(254), wQ.e(248), wQ.e(256), wQ.e(234)]).then((() => wQ(60642))), wQ.e(345).then((() => wQ(60647))), Promise.all([wQ.e(226), wQ.e(222)]).then((() => wQ(36688))), wQ.e(245).then((() => wQ(60652))), wQ.e(229).then((() => wQ(60660)))]).then((oQ => {
            const {
              CreateScreenshotUsingRenderTarget: kQ
            } = oQ[1], {
              ShaderMaterial: vQ
            } = oQ[2], {
              ShaderLanguage: mQ
            } = oQ[3], {
              Ox: uQ
            } = oQ[4], {
              registerDevtoolsShader: HQ
            } = oQ[6], xQ = mQ.GLSL, GQ = new Map, pQ = tQ.meshes.filter((QQ => QQ.material));
            let cQ = !1,
              CQ = null;

            function SQ() {
              var QQ;
              cQ && (cQ = !1, (0, LQ.f)(tQ.meshes, !1)), null === (QQ = CQ) || void 0 === QQ || QQ(), CQ = null, pQ.forEach((QQ => {
                const FQ = GQ.get(QQ);
                FQ && (QQ.material = FQ)
              }))
            }
            if (bQ) {
              const QQ = [],
                FQ = [];
              pQ.forEach((wQ => {
                const LQ = wQ.name.toLowerCase(),
                  qQ = wQ.sK().boundingBox.center,
                  oQ = tQ.activeCamera.position.subtract(qQ).length();
                LQ.includes("sky") || LQ.includes("background") || LQ.includes("environment") || oQ > 1e3 ? FQ.push(wQ) : QQ.push(wQ)
              })), HQ("devtoolsNormal", xQ);
              const wQ = new vQ("normalMaterial", tQ, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: xQ
              });
              HQ("devtoolsWhite", xQ);
              const LQ = new vQ("whiteMaterial", tQ, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: xQ
              });
              QQ.forEach((QQ => {
                GQ.set(QQ, QQ.material), QQ.material = wQ
              })), FQ.forEach((QQ => {
                GQ.set(QQ, QQ.material), QQ.material = LQ
              }))
            } else if (YQ) {
              HQ("devtoolsDepth", xQ);
              const QQ = tQ.activeCamera.position;
              let FQ = 0,
                wQ = 1 / 0;
              pQ.forEach((LQ => {
                const qQ = LQ.name.toLowerCase();
                if (qQ.includes("sky") || qQ.includes("background") || qQ.includes("environment")) return;
                const oQ = LQ.sK().boundingBox.center,
                  DQ = uQ.TransformCoordinates(oQ, LQ.getWorldMatrix()),
                  kQ = QQ.subtract(DQ).length();
                kQ > 1e3 || (FQ = Math.max(FQ, kQ), wQ = Math.min(wQ, kQ))
              }));
              const LQ = FQ - wQ;
              FQ += .1 * LQ, wQ = Math.max(0, wQ - .1 * LQ), console.log(`Depth range: min=${wQ.toFixed(2)}, max=${FQ.toFixed(2)}, range=${LQ.toFixed(2)}`), LQ < 1 && (FQ = wQ + 10);
              const qQ = new vQ("depthMaterial", tQ, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: xQ
              });
              qQ.setVector3("cameraPosition", QQ), qQ.setFloat("maxDepth", FQ), qQ.setFloat("minDepth", wQ), pQ.forEach((QQ => {
                GQ.set(QQ, QQ.material), QQ.material = qQ
              }))
            }
            if ((0, LQ.f)(tQ.meshes, !0), cQ = !0, "glb" === QQ && (CQ = (0, qQ.b)(tQ.meshes)), "screenshot" === QQ) {
              let QQ = `bloxd-screenshot-${eQ}x${MQ}-${Date.now()}.png`;
              bQ ? QQ = `bloxd-screenshot-normals-${eQ}x${MQ}-${Date.now()}.png` : YQ && (QQ = `bloxd-screenshot-depth-${eQ}x${MQ}-${Date.now()}.png`), kQ(AQ, tQ.activeCamera, {
                width: eQ,
                height: MQ
              }, (function(wQ) {
                SQ(), fetch(wQ).then((function(QQ) {
                  return QQ.blob()
                })).then((function(wQ) {
                  (0, DQ.downloadBlob)(wQ, QQ), FQ()
                })).catch((function(QQ) {
                  console.error("Error processing screenshot:", QQ), FQ()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), SQ(), FQ()
              }))
            } else {
              let QQ = "lA";
              bQ ? QQ = "scene-normals" : YQ && (QQ = "scene-depth"), bQ || YQ ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: QQ
                  } = await Promise.all([wQ.e(227), wQ.e(226), wQ.e(246), wQ.e(247), wQ.e(244), wQ.e(254), wQ.e(253), wQ.e(233)]).then((() => wQ(39692))), {
                    Color3: FQ
                  } = await Promise.all([wQ.e(227), wQ.e(230)]).then((() => wQ(36870))), LQ = [], qQ = [];
                  if (pQ.forEach((QQ => {
                      const FQ = QQ.name.toLowerCase(),
                        wQ = QQ.sK().boundingBox.center,
                        oQ = tQ.activeCamera.position.subtract(wQ).length();
                      FQ.includes("sky") || FQ.includes("background") || FQ.includes("environment") || oQ > 1e3 ? qQ.push(QQ) : LQ.push(QQ)
                    })), bQ) LQ.forEach(((wQ, LQ) => {
                    const qQ = wQ.getVerticesData("normal");
                    if (qQ) {
                      const oQ = [];
                      for (let QQ = 0; QQ < qQ.length; QQ += 3) {
                        const FQ = Math.abs(qQ[QQ]),
                          wQ = Math.abs(qQ[QQ + 1]),
                          LQ = Math.abs(qQ[QQ + 2]);
                        oQ.push(FQ, wQ, LQ, 1)
                      }
                      wQ.setVerticesData("color", oQ);
                      const DQ = new QQ(`vertexColorMat_${LQ}`, tQ);
                      DQ.disableLighting = !0, DQ.emissiveColor = new FQ(1, 1, 1), DQ.specularColor = new FQ(0, 0, 0), wQ.material = DQ
                    }
                  })), qQ.forEach(((wQ, LQ) => {
                    const qQ = wQ.getVerticesData("position");
                    if (qQ) {
                      const oQ = [],
                        DQ = qQ.length / 3;
                      for (let QQ = 0; QQ < DQ; QQ++) oQ.push(1, 1, 1, 1);
                      wQ.setVerticesData("color", oQ);
                      const kQ = new QQ(`whiteMat_${LQ}`, tQ);
                      kQ.disableLighting = !0, kQ.emissiveColor = new FQ(1, 1, 1), kQ.specularColor = new FQ(0, 0, 0), wQ.material = kQ
                    }
                  }));
                  else if (YQ) {
                    const wQ = tQ.activeCamera.position;
                    let qQ = 0,
                      oQ = 1 / 0;
                    LQ.forEach((QQ => {
                      const FQ = QQ.sK().boundingBox.center,
                        LQ = uQ.TransformCoordinates(FQ, QQ.getWorldMatrix()),
                        DQ = wQ.subtract(LQ).length();
                      qQ = Math.max(qQ, DQ), oQ = Math.min(oQ, DQ)
                    }));
                    const DQ = qQ - oQ;
                    qQ += .1 * DQ, oQ = Math.max(0, oQ - .1 * DQ), DQ < 1 && (qQ = oQ + 10), pQ.forEach(((LQ, DQ) => {
                      const kQ = LQ.name.toLowerCase(),
                        vQ = LQ.sK().boundingBox.center,
                        mQ = uQ.TransformCoordinates(vQ, LQ.getWorldMatrix()),
                        HQ = wQ.subtract(mQ).length();
                      if (!(kQ.includes("sky") || kQ.includes("background") || kQ.includes("environment") || HQ > 1e3)) {
                        const wQ = 1 - Math.min(Math.max((HQ - oQ) / (qQ - oQ), 0), 1),
                          kQ = new QQ(`depthMat_${DQ}`, tQ);
                        kQ.diffuseColor = new FQ(wQ, wQ, wQ), kQ.specularColor = new FQ(0, 0, 0), LQ.material = kQ
                      }
                    }))
                  }
                })().then((() => Promise.all([wQ.e(227), wQ.e(226), wQ.e(246), wQ.e(247), wQ.e(244), wQ.e(254), wQ.e(248), wQ.e(253), wQ.e(251), wQ.e(243), wQ.e(256), wQ.e(265), wQ.e(302), wQ.e(238), wQ.e(255), wQ.e(225)]).then((() => wQ(60666))))).then((FQ => FQ.GLTF2Export.GLBAsync(tQ, QQ))).then((QQ => {
                  SQ(), QQ.downloadFiles(), FQ()
                })).catch((QQ => {
                  console.error("Error exporting GLB:", QQ), SQ(), FQ()
                }))
              }), 100) : Promise.all([wQ.e(227), wQ.e(226), wQ.e(246), wQ.e(247), wQ.e(244), wQ.e(254), wQ.e(248), wQ.e(253), wQ.e(251), wQ.e(243), wQ.e(256), wQ.e(265), wQ.e(302), wQ.e(238), wQ.e(255), wQ.e(225)]).then((() => wQ(60666))).then((wQ => {
                wQ.GLTF2Export.GLBAsync(tQ, QQ).then((QQ => {
                  SQ(), QQ.downloadFiles(), FQ()
                })).catch((QQ => {
                  console.error("Error exporting GLB:", QQ), SQ(), FQ()
                }))
              })).catch((QQ => {
                console.error("Error importing serializers:", QQ), SQ(), FQ()
              }))
            }
          })).catch((QQ => {
            console.error("Error downloading the scene:", QQ), FQ()
          }))
        } catch (xQ) {
          console.error("Error taking screenshot:", xQ), FQ()
        }
      }))
    }
    const HQ = new class {
      constructor() {
        this.tools = mQ.ALL_DEV_TOOLS
      }
      downloadScene(QQ, FQ) {
        return uQ(QQ, FQ)
      }
      async setAmbientLightIntensity(QQ) {
        const {
          Color3: FQ
        } = await Promise.all([wQ.e(227), wQ.e(230)]).then((() => wQ(36870)));
        (0, oQ.d)().Zx.iN().ambientColor = FQ.FromArray([QQ, QQ, QQ])
      }
    }
  },
  40455: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => vQ
    });
    var LQ = wQ(1739);
    const qQ = 33177600,
      oQ = 3e4;
    let DQ = !1;

    function kQ(QQ, FQ, wQ) {
      if (!QQ.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (DQ) return Promise.reject(new Error("A screenshot is already being taken"));
      DQ = !0;
      const LQ = function(QQ, FQ, wQ) {
        const LQ = Math.max(1, QQ),
          oQ = Math.max(1, FQ),
          DQ = Math.min(1, wQ / Math.max(LQ, oQ), Math.sqrt(qQ / (LQ * oQ)));
        return {
          width: Math.max(1, Math.floor(LQ * DQ)),
          height: Math.max(1, Math.floor(oQ * DQ))
        }
      }(FQ, wQ, QQ.maxTextureSize);
      return QQ.resize(LQ.width, LQ.height), new Promise(((FQ, wQ) => {
        let LQ, qQ = 2,
          kQ = null;
        const vQ = () => {
          var FQ;
          DQ = !1, null === (FQ = kQ) || void 0 === FQ || FQ(), clearTimeout(LQ), QQ.restoreSize()
        };
        LQ = setTimeout((() => {
          vQ(), wQ(new Error("No frame was drawn to capture"))
        }), oQ), kQ = QQ.onFrameDrawn((() => {
          if (qQ--, qQ > 0) return;
          const {
            canvas: LQ
          } = QQ, oQ = {
            width: LQ.width,
            height: LQ.height
          };
          try {
            LQ.toBlob((QQ => {
              QQ ? FQ({
                blob: QQ,
                ...oQ
              }) : wQ(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (DQ) {
            wQ(DQ)
          } finally {
            vQ()
          }
        }))
      }))
    }
    async function vQ(QQ, FQ, wQ) {
      try {
        const qQ = await kQ(QQ, FQ, wQ);
        (0, LQ.e)(qQ.blob, `bloxd-screenshot-${qQ.width}x${qQ.height}-${Date.now()}.png`)
      } catch (qQ) {
        console.error("Error taking screenshot:", qQ)
      }
    }
  },
  37129: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => mQ,
      f: () => kQ,
      j: () => DQ
    });
    var LQ = wQ(37123),
      qQ = wQ(37134);
    let oQ = 0;

    function DQ(QQ, FQ) {
      const wQ = QQ;
      wQ._noaFaceGroups = null !== FQ && void 0 !== FQ ? FQ : null, wQ._noaFaceEpoch = -1, wQ._noaFaceMask = -1, wQ._noaFaceCount = -1, wQ._noaFaceMaterial = null;
      const LQ = QQ.lC;
      LQ && 1 === LQ.length && (LQ[0].indexStart = 0, LQ[0].indexCount = QQ.getTotalIndices())
    }

    function kQ(QQ, FQ) {
      if (FQ) {
        oQ++;
        for (const FQ of QQ) {
          const QQ = FQ._noaFaceGroups;
          QQ && DQ(FQ, QQ)
        }
      } else oQ = Math.max(0, oQ - 1)
    }

    function vQ(QQ, FQ, wQ) {
      let qQ = -1,
        oQ = 0;
      for (let DQ = 0; DQ < LQ.d; DQ++) {
        const wQ = QQ[DQ],
          kQ = QQ[DQ + 1];
        kQ > wQ && FQ & 1 << LQ.b[DQ] && (qQ < 0 && (qQ = wQ), oQ = kQ)
      }
      return qQ < 0 ? (wQ[0] = 0, wQ[1] = 0, 0) : (wQ[0] = qQ, wQ[1] = oQ - qQ, oQ - qQ)
    }
    class mQ {
      constructor(QQ, FQ) {
        this.tx = QQ, this.engine = FQ, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(QQ, FQ) {
        if (!FQ) return;
        const wQ = FQ.getProjectionMatrix().m,
          DQ = 0 === oQ && 0 === wQ[15],
          kQ = FQ.globalPosition,
          {
            engine: mQ
          } = this,
          uQ = DQ ? (0, qQ.c)(wQ, mQ.getRenderWidth(), mQ.getRenderHeight()) : 0;
        kQ.x === this.eyeX && kQ.y === this.eyeY && kQ.z === this.eyeZ && uQ === this.focalPx && DQ === this.culling || (this.epoch++, this.eyeX = kQ.x, this.eyeY = kQ.y, this.eyeZ = kQ.z, this.focalPx = uQ, this.culling = DQ);
        const {
          epoch: HQ,
          range: bQ
        } = this, YQ = this.tx / 2, xQ = YQ * Math.sqrt(3), AQ = QQ.data, tQ = QQ.length;
        let eQ = 0;
        for (let oQ = 0; oQ < tQ; oQ++) {
          const QQ = AQ[oQ],
            FQ = QQ._noaFaceGroups;
          if (FQ && (QQ._noaFaceEpoch !== HQ || QQ._noaFaceMaterial !== QQ.material)) {
            QQ._noaFaceEpoch = HQ, QQ._noaFaceMaterial = QQ.material;
            const wQ = QQ.lC,
              oQ = wQ && 1 === wQ.length ? wQ[0] : null;
            let mQ = -1;
            if (DQ && oQ && (0, LQ.p)(QQ.material)) {
              const wQ = QQ.position,
                LQ = kQ.x - wQ.x,
                oQ = kQ.y - wQ.y,
                DQ = kQ.z - wQ.z,
                vQ = LQ - YQ,
                HQ = oQ - YQ,
                bQ = DQ - YQ,
                AQ = Math.sqrt(vQ * vQ + HQ * HQ + bQ * bQ) + xQ;
              mQ = (0, qQ.l)(FQ, LQ, oQ, DQ, (0, qQ.f)(AQ, uQ))
            }
            if (oQ && mQ !== QQ._noaFaceMask) {
              QQ._noaFaceMask = mQ;
              let wQ = 0,
                qQ = FQ[LQ.d]; - 1 !== mQ && (qQ = vQ(FQ, mQ, bQ), wQ = bQ[0]), QQ._noaFaceCount = qQ, oQ.indexStart = 6 * wQ, oQ.indexCount = 6 * qQ, oQ.setBoundingInfo(QQ.sK())
            }
          }
          FQ && 0 === QQ._noaFaceCount || (AQ[eQ++] = QQ)
        }
        QQ.length = eQ
      }
    }
  },
  37118: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => vQ,
      d: () => kQ
    });
    const LQ = new WeakSet;
    let qQ = 0;
    const oQ = new Set;

    function DQ(QQ, FQ) {
      QQ._data = FQ
    }

    function kQ(QQ) {
      var FQ, wQ;
      (null !== (FQ = null === (wQ = QQ.getBuffer()) || void 0 === wQ ? void 0 : wQ.MH) && void 0 !== FQ ? FQ : 0) > 0 && (LQ.add(QQ), 0 === qQ ? DQ(QQ, null) : oQ.add(QQ))
    }

    function vQ(QQ) {
      qQ++;
      for (const wQ of function(QQ) {
          const FQ = new Set;
          for (const qQ of QQ) {
            const QQ = qQ.geometry;
            for (const qQ of Object.values(null !== (wQ = null === QQ || void 0 === QQ ? void 0 : QQ.getVertexBuffers()) && void 0 !== wQ ? wQ : {})) {
              var wQ;
              const QQ = qQ.getWrapperBuffer();
              LQ.has(QQ) && FQ.add(QQ)
            }
          }
          return FQ
        }(QQ)) wQ.getData() || mQ(wQ), oQ.add(wQ);
      let FQ = !0;
      return () => {
        if (FQ && (FQ = !1, qQ--, 0 === qQ)) {
          for (const QQ of oQ) DQ(QQ, null);
          oQ.clear()
        }
      }
    }

    function mQ(QQ) {
      const FQ = QQ.getBuffer();
      if (!FQ || !(FQ.MH > 0)) return;
      const wQ = QQ._engine,
        LQ = new Uint8Array(FQ.MH);
      wQ.bindArrayBuffer(FQ), wQ._gl.getBufferSubData(wQ._gl.ARRAY_BUFFER, 0, LQ), wQ._resetVertexBufferBinding(), DQ(QQ, LQ)
    }
  },
  37123: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ,
      d: () => oQ,
      g: () => vQ,
      k: () => LQ,
      l: () => kQ,
      n: () => qQ,
      p: () => mQ
    });
    const LQ = 6,
      qQ = [0, 2, 4, 1, 3, 5, 0, 2],
      oQ = 6,
      DQ = [1, 0, 3, 2, 5, 4];
    for (let uQ = oQ; uQ < qQ.length; uQ++)
      if (qQ[uQ] !== qQ[uQ - oQ]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const kQ = qQ.length + 1,
      vQ = (() => {
        const QQ = [];
        for (let FQ = 0; FQ < oQ; FQ++) QQ[qQ[FQ]] = FQ;
        return QQ
      })();

    function mQ(QQ) {
      return !!QQ && QQ.backFaceCulling && (0 === QQ.transparencyMode || 1 === QQ.transparencyMode)
    }
  },
  37134: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => kQ,
      f: () => vQ,
      j: () => uQ,
      l: () => mQ,
      p: () => xQ
    });
    var LQ = wQ(37123);
    const qQ = 1 / 16,
      oQ = 1 / 64,
      DQ = 2048;
    LQ.k;

    function kQ(QQ, FQ, wQ) {
      return Math.min(Math.abs(QQ[0] * FQ), Math.abs(QQ[5] * wQ)) / 2
    }

    function vQ(QQ, FQ) {
      return qQ + oQ * QQ * QQ / FQ
    }

    function mQ(QQ, FQ, wQ, qQ, oQ) {
      const DQ = LQ.l;
      return uQ(QQ[DQ], QQ[DQ + 1], QQ[DQ + 2], QQ[DQ + 3], QQ[DQ + 4], QQ[DQ + 5], FQ, wQ, qQ, oQ)
    }

    function uQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ) {
      return (DQ <= QQ - mQ ? 0 : 1) | (DQ >= FQ + mQ ? 0 : 2) | (kQ <= wQ - mQ ? 0 : 4) | (kQ >= LQ + mQ ? 0 : 8) | (vQ <= qQ - mQ ? 0 : 16) | (vQ >= oQ + mQ ? 0 : 32)
    }
    const HQ = (() => {
        const QQ = [];
        for (let FQ = 0; FQ < LQ.n.length; FQ++) {
          let wQ = 0;
          for (let qQ = FQ + 1; qQ <= LQ.n.length; qQ++) {
            const oQ = 1 << LQ.n[qQ - 1];
            if (wQ & oQ) break;
            wQ |= oQ, QQ.push({
              start: FQ,
              end: qQ,
              tF: wQ
            })
          }
        }
        return QQ
      })(),
      bQ = [];

    function YQ(QQ, FQ) {
      const wQ = LQ.g[FQ];
      return QQ[wQ + 1] - QQ[wQ]
    }

    function xQ(QQ, FQ, wQ) {
      let qQ = 0;
      for (let DQ = 0; DQ < LQ.k; DQ++) YQ(QQ, DQ) > 0 && (qQ |= 1 << DQ);
      if (0 === (FQ &= qQ)) return 0;
      if (FQ === qQ) return wQ[0] = 0, wQ[1] = QQ[LQ.d], 1;
      let oQ = null,
        kQ = 1 / 0;
      for (const mQ of function(QQ) {
          let FQ = bQ[QQ];
          if (FQ) return FQ;
          const wQ = new Map,
            LQ = (QQ, FQ) => {
              const LQ = 4 * QQ + FQ.length / 2;
              wQ.has(LQ) || wQ.set(LQ, {
                tF: QQ,
                windows: FQ
              })
            };
          for (const oQ of HQ)
            if ((oQ.tF & QQ) === QQ && LQ(oQ.tF, [oQ.start, oQ.end]), 0 !== (oQ.tF & QQ))
              for (const FQ of HQ) FQ.start < oQ.end || 0 !== (oQ.tF & FQ.tF) || 0 === (FQ.tF & QQ) || ((oQ.tF | FQ.tF) & QQ) !== QQ || LQ(oQ.tF | FQ.tF, [oQ.start, oQ.end, FQ.start, FQ.end]);
          const qQ = [...wQ.values()];
          return FQ = qQ.filter((QQ => !qQ.some((FQ => FQ !== QQ && (FQ.tF & QQ.tF) === FQ.tF && FQ.windows.length <= QQ.windows.length)))), bQ[QQ] = FQ, FQ
        }(FQ)) {
        let wQ = (mQ.windows.length / 2 - 1) * DQ;
        const vQ = mQ.tF & ~FQ & qQ;
        for (let FQ = 0; FQ < LQ.k; FQ++) vQ & 1 << FQ && (wQ += YQ(QQ, FQ));
        wQ < kQ && (oQ = mQ, kQ = wQ)
      }
      const vQ = oQ.windows;
      for (let LQ = 0; LQ < vQ.length; LQ += 2) {
        const FQ = QQ[vQ[LQ]];
        wQ[LQ] = FQ, wQ[LQ + 1] = QQ[vQ[LQ + 1]] - FQ
      }
      return vQ.length / 2
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);