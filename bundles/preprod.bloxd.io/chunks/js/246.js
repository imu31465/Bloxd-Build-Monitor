export const id = 246;
export const ids = [246];
export const modules = {
  41280: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      noaDevTools: () => JQ
    });
    var wQ = XQ(37820),
      qQ = XQ(37804),
      TQ = XQ(2997),
      zQ = XQ(1802),
      sQ = XQ(41184);

    function FQ(QQ) {
      const {
        nj: WQ
      } = QQ, XQ = WQ.engine, wQ = {
        width: XQ.getRenderWidth(),
        height: XQ.getRenderHeight()
      };
      return {
        canvas: XQ.getRenderingCanvas(),
        maxTextureSize: XQ.getCaps().maxTextureSize,
        pj: () => !QQ.lD,
        resize: (QQ, WQ) => {
          XQ.setSize(QQ, WQ)
        },
        restoreSize: () => {
          XQ.setSize(wQ.width, wQ.height), WQ.resize()
        },
        onFrameDrawn: XQ => {
          const wQ = () => {
            WQ.eD && XQ()
          };
          return QQ.on("afterRender", wQ), () => {
            QQ.off("afterRender", wQ)
          }
        }
      }
    }
    var PQ = XQ(34393);

    function gQ(QQ, WQ) {
      let {
        width: PQ,
        height: gQ,
        colouring: JQ
      } = WQ;
      const rQ = "normals" === JQ,
        IQ = "depth" === JQ;
      return new Promise((WQ => {
        try {
          const jQ = (0, TQ.f)();
          if (jQ.nj.xj) return "screenshot" !== QQ || null !== JQ ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void WQ()) : void(0, sQ.g)(FQ(jQ), PQ, gQ).finally(WQ);
          const BQ = jQ.nj.engine,
            yQ = jQ.nj.sE(),
            VQ = PQ,
            DQ = gQ;
          Promise.all([Promise.all([XQ.e(262), XQ.e(263), XQ.e(242)]).then((() => XQ(61523))), Promise.all([XQ.e(241), XQ.e(240), XQ.e(262), XQ.e(263), XQ.e(260), XQ.e(264), XQ.e(267), XQ.e(320), XQ.e(247)]).then((() => XQ(61526))), Promise.all([XQ.e(241), XQ.e(240), XQ.e(262), XQ.e(263), XQ.e(260), XQ.e(270), XQ.e(264), XQ.e(272), XQ.e(249)]).then((() => XQ(61529))), XQ.e(361).then((() => XQ(61534))), Promise.all([XQ.e(240), XQ.e(236)]).then((() => XQ(37367))), XQ.e(261).then((() => XQ(61542))), XQ.e(244).then((() => XQ(61549)))]).then((TQ => {
            const {
              CreateScreenshotUsingRenderTarget: sQ
            } = TQ[1], {
              ShaderMaterial: FQ
            } = TQ[2], {
              ShaderLanguage: PQ
            } = TQ[3], {
              vj: gQ
            } = TQ[4], {
              registerDevtoolsShader: JQ
            } = TQ[6], jQ = PQ.GLSL, pQ = new Map, GQ = yQ.meshes.filter((QQ => QQ.material));
            let UQ = !1,
              bQ = null;

            function vQ() {
              var QQ;
              UQ && (UQ = !1, (0, wQ.e)(yQ.meshes, !1)), null === (QQ = bQ) || void 0 === QQ || QQ(), bQ = null, GQ.forEach((QQ => {
                const WQ = pQ.get(QQ);
                WQ && (QQ.material = WQ)
              }))
            }
            if (rQ) {
              const QQ = [],
                WQ = [];
              GQ.forEach((XQ => {
                const wQ = XQ.name.toLowerCase(),
                  qQ = XQ.uC().boundingBox.center,
                  TQ = yQ.activeCamera.position.subtract(qQ).length();
                wQ.includes("sky") || wQ.includes("background") || wQ.includes("environment") || TQ > 1e3 ? WQ.push(XQ) : QQ.push(XQ)
              })), JQ("devtoolsNormal", jQ);
              const XQ = new FQ("normalMaterial", yQ, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: jQ
              });
              JQ("devtoolsWhite", jQ);
              const wQ = new FQ("whiteMaterial", yQ, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: jQ
              });
              QQ.forEach((QQ => {
                pQ.set(QQ, QQ.material), QQ.material = XQ
              })), WQ.forEach((QQ => {
                pQ.set(QQ, QQ.material), QQ.material = wQ
              }))
            } else if (IQ) {
              JQ("devtoolsDepth", jQ);
              const QQ = yQ.activeCamera.position;
              let WQ = 0,
                XQ = 1 / 0;
              GQ.forEach((wQ => {
                const qQ = wQ.name.toLowerCase();
                if (qQ.includes("sky") || qQ.includes("background") || qQ.includes("environment")) return;
                const TQ = wQ.uC().boundingBox.center,
                  zQ = gQ.TransformCoordinates(TQ, wQ.getWorldMatrix()),
                  sQ = QQ.subtract(zQ).length();
                sQ > 1e3 || (WQ = Math.max(WQ, sQ), XQ = Math.min(XQ, sQ))
              }));
              const wQ = WQ - XQ;
              WQ += .1 * wQ, XQ = Math.max(0, XQ - .1 * wQ), console.log(`Depth range: min=${XQ.toFixed(2)}, max=${WQ.toFixed(2)}, range=${wQ.toFixed(2)}`), wQ < 1 && (WQ = XQ + 10);
              const qQ = new FQ("depthMaterial", yQ, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: jQ
              });
              qQ.setVector3("cameraPosition", QQ), qQ.setFloat("maxDepth", WQ), qQ.setFloat("minDepth", XQ), GQ.forEach((QQ => {
                pQ.set(QQ, QQ.material), QQ.material = qQ
              }))
            }
            if ((0, wQ.e)(yQ.meshes, !0), UQ = !0, "glb" === QQ && (bQ = (0, qQ.d)(yQ.meshes)), "screenshot" === QQ) {
              let QQ = `bloxd-screenshot-${VQ}x${DQ}-${Date.now()}.png`;
              rQ ? QQ = `bloxd-screenshot-normals-${VQ}x${DQ}-${Date.now()}.png` : IQ && (QQ = `bloxd-screenshot-depth-${VQ}x${DQ}-${Date.now()}.png`), sQ(BQ, yQ.activeCamera, {
                width: VQ,
                height: DQ
              }, (function(XQ) {
                vQ(), fetch(XQ).then((function(QQ) {
                  return QQ.blob()
                })).then((function(XQ) {
                  (0, zQ.downloadBlob)(XQ, QQ), WQ()
                })).catch((function(QQ) {
                  console.error("Error processing screenshot:", QQ), WQ()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), vQ(), WQ()
              }))
            } else {
              let QQ = "cB";
              rQ ? QQ = "scene-normals" : IQ && (QQ = "scene-depth"), rQ || IQ ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: QQ
                  } = await Promise.all([XQ.e(241), XQ.e(240), XQ.e(262), XQ.e(263), XQ.e(260), XQ.e(270), XQ.e(269), XQ.e(248)]).then((() => XQ(40530))), {
                    Color3: WQ
                  } = await Promise.all([XQ.e(241), XQ.e(245)]).then((() => XQ(37539))), wQ = [], qQ = [];
                  if (GQ.forEach((QQ => {
                      const WQ = QQ.name.toLowerCase(),
                        XQ = QQ.uC().boundingBox.center,
                        TQ = yQ.activeCamera.position.subtract(XQ).length();
                      WQ.includes("sky") || WQ.includes("background") || WQ.includes("environment") || TQ > 1e3 ? qQ.push(QQ) : wQ.push(QQ)
                    })), rQ) wQ.forEach(((XQ, wQ) => {
                    const qQ = XQ.getVerticesData("normal");
                    if (qQ) {
                      const TQ = [];
                      for (let QQ = 0; QQ < qQ.length; QQ += 3) {
                        const WQ = Math.abs(qQ[QQ]),
                          XQ = Math.abs(qQ[QQ + 1]),
                          wQ = Math.abs(qQ[QQ + 2]);
                        TQ.push(WQ, XQ, wQ, 1)
                      }
                      XQ.setVerticesData("color", TQ);
                      const zQ = new QQ(`vertexColorMat_${wQ}`, yQ);
                      zQ.disableLighting = !0, zQ.emissiveColor = new WQ(1, 1, 1), zQ.specularColor = new WQ(0, 0, 0), XQ.material = zQ
                    }
                  })), qQ.forEach(((XQ, wQ) => {
                    const qQ = XQ.getVerticesData("position");
                    if (qQ) {
                      const TQ = [],
                        zQ = qQ.length / 3;
                      for (let QQ = 0; QQ < zQ; QQ++) TQ.push(1, 1, 1, 1);
                      XQ.setVerticesData("color", TQ);
                      const sQ = new QQ(`whiteMat_${wQ}`, yQ);
                      sQ.disableLighting = !0, sQ.emissiveColor = new WQ(1, 1, 1), sQ.specularColor = new WQ(0, 0, 0), XQ.material = sQ
                    }
                  }));
                  else if (IQ) {
                    const XQ = yQ.activeCamera.position;
                    let qQ = 0,
                      TQ = 1 / 0;
                    wQ.forEach((QQ => {
                      const WQ = QQ.uC().boundingBox.center,
                        wQ = gQ.TransformCoordinates(WQ, QQ.getWorldMatrix()),
                        zQ = XQ.subtract(wQ).length();
                      qQ = Math.max(qQ, zQ), TQ = Math.min(TQ, zQ)
                    }));
                    const zQ = qQ - TQ;
                    qQ += .1 * zQ, TQ = Math.max(0, TQ - .1 * zQ), zQ < 1 && (qQ = TQ + 10), GQ.forEach(((wQ, zQ) => {
                      const sQ = wQ.name.toLowerCase(),
                        FQ = wQ.uC().boundingBox.center,
                        PQ = gQ.TransformCoordinates(FQ, wQ.getWorldMatrix()),
                        JQ = XQ.subtract(PQ).length();
                      if (!(sQ.includes("sky") || sQ.includes("background") || sQ.includes("environment") || JQ > 1e3)) {
                        const XQ = 1 - Math.min(Math.max((JQ - TQ) / (qQ - TQ), 0), 1),
                          sQ = new QQ(`depthMat_${zQ}`, yQ);
                        sQ.diffuseColor = new WQ(XQ, XQ, XQ), sQ.specularColor = new WQ(0, 0, 0), wQ.material = sQ
                      }
                    }))
                  }
                })().then((() => Promise.all([XQ.e(241), XQ.e(240), XQ.e(262), XQ.e(263), XQ.e(260), XQ.e(270), XQ.e(264), XQ.e(269), XQ.e(267), XQ.e(259), XQ.e(272), XQ.e(283), XQ.e(320), XQ.e(253), XQ.e(271), XQ.e(239)]).then((() => XQ(61554))))).then((WQ => WQ.GLTF2Export.GLBAsync(yQ, QQ))).then((QQ => {
                  vQ(), QQ.downloadFiles(), WQ()
                })).catch((QQ => {
                  console.error("Error exporting GLB:", QQ), vQ(), WQ()
                }))
              }), 100) : Promise.all([XQ.e(241), XQ.e(240), XQ.e(262), XQ.e(263), XQ.e(260), XQ.e(270), XQ.e(264), XQ.e(269), XQ.e(267), XQ.e(259), XQ.e(272), XQ.e(283), XQ.e(320), XQ.e(253), XQ.e(271), XQ.e(239)]).then((() => XQ(61554))).then((XQ => {
                XQ.GLTF2Export.GLBAsync(yQ, QQ).then((QQ => {
                  vQ(), QQ.downloadFiles(), WQ()
                })).catch((QQ => {
                  console.error("Error exporting GLB:", QQ), vQ(), WQ()
                }))
              })).catch((QQ => {
                console.error("Error importing serializers:", QQ), vQ(), WQ()
              }))
            }
          })).catch((QQ => {
            console.error("Error downloading the scene:", QQ), WQ()
          }))
        } catch (jQ) {
          console.error("Error taking screenshot:", jQ), WQ()
        }
      }))
    }
    const JQ = new class {
      constructor() {
        this.tools = PQ.ALL_DEV_TOOLS
      }
      downloadScene(QQ, WQ) {
        return gQ(QQ, WQ)
      }
      async setAmbientLightIntensity(QQ) {
        const {
          Color3: WQ
        } = await Promise.all([XQ.e(241), XQ.e(245)]).then((() => XQ(37539)));
        (0, TQ.f)().nj.sE().ambientColor = WQ.FromArray([QQ, QQ, QQ])
      }
      capturePhoto(QQ, WQ, XQ) {
        return function(QQ, WQ, XQ, wQ) {
          return (0, sQ.e)(FQ(QQ), WQ, XQ, wQ)
        }((0, TQ.f)(), QQ, WQ, XQ)
      }
    }
  },
  41184: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => sQ,
      g: () => FQ
    });
    var wQ = XQ(1812);
    const qQ = 33177600,
      TQ = 3e4;
    let zQ = !1;

    function sQ(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: sQ = 1,
        type: FQ = "image/png",
        quality: PQ
      } = wQ;
      return QQ.pj() ? zQ ? Promise.reject(new Error("A screenshot is already being taken")) : (zQ = !0, new Promise(((wQ, gQ) => {
        let JQ, rQ = 2,
          IQ = null;
        const jQ = () => {
          var WQ;
          zQ = !1, null === (WQ = IQ) || void 0 === WQ || WQ(), clearTimeout(JQ);
          try {
            QQ.restoreSize()
          } catch (XQ) {
            console.error("A screenshot couldn't size the canvas back", XQ)
          }
        };
        JQ = setTimeout((() => {
          jQ(), gQ(new Error("No frame was drawn to capture"))
        }), TQ);
        try {
          const wQ = function(QQ, WQ, XQ) {
            const wQ = Math.max(1, QQ),
              TQ = Math.max(1, WQ),
              zQ = Math.min(1, XQ / Math.max(wQ, TQ), Math.sqrt(qQ / (wQ * TQ)));
            return {
              width: Math.max(1, Math.floor(wQ * zQ)),
              height: Math.max(1, Math.floor(TQ * zQ))
            }
          }(WQ, XQ, QQ.maxTextureSize);
          QQ.resize(wQ.width, wQ.height, sQ * wQ.width / Math.max(1, WQ))
        } catch (BQ) {
          return jQ(), void gQ(BQ)
        }
        IQ = QQ.onFrameDrawn((() => {
          if (rQ--, rQ > 0) return;
          const {
            canvas: WQ
          } = QQ, XQ = {
            width: WQ.width,
            height: WQ.height
          };
          try {
            WQ.toBlob((QQ => {
              QQ ? wQ({
                blob: QQ,
                ...XQ
              }) : gQ(new Error("The canvas gave no image"))
            }), FQ, PQ)
          } catch (BQ) {
            gQ(BQ)
          } finally {
            jQ()
          }
        }))
      }))) : Promise.reject(new Error("Screenshots need a game to be running"))
    }
    async function FQ(QQ, WQ, XQ) {
      try {
        const qQ = await sQ(QQ, WQ, XQ);
        (0, wQ.e)(qQ.blob, `bloxd-screenshot-${qQ.width}x${qQ.height}-${Date.now()}.png`)
      } catch (qQ) {
        console.error("Error taking screenshot:", qQ)
      }
    }
  },
  37820: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => PQ,
      e: () => sQ,
      i: () => zQ
    });
    var wQ = XQ(37816),
      qQ = XQ(37829);
    let TQ = 0;

    function zQ(QQ, WQ) {
      const XQ = QQ;
      XQ._noaFaceGroups = null !== WQ && void 0 !== WQ ? WQ : null, XQ._noaFaceEpoch = -1, XQ._noaFaceMask = -1, XQ._noaFaceCount = -1, XQ._noaFaceMaterial = null;
      const wQ = QQ.ZD;
      wQ && 1 === wQ.length && (wQ[0].indexStart = 0, wQ[0].indexCount = QQ.getTotalIndices())
    }

    function sQ(QQ, WQ) {
      if (WQ) {
        TQ++;
        for (const WQ of QQ) {
          const QQ = WQ._noaFaceGroups;
          QQ && zQ(WQ, QQ)
        }
      } else TQ = Math.max(0, TQ - 1)
    }

    function FQ(QQ, WQ, XQ) {
      let qQ = -1,
        TQ = 0;
      for (let zQ = 0; zQ < wQ.d; zQ++) {
        const XQ = QQ[zQ],
          sQ = QQ[zQ + 1];
        sQ > XQ && WQ & 1 << wQ.b[zQ] && (qQ < 0 && (qQ = XQ), TQ = sQ)
      }
      return qQ < 0 ? (XQ[0] = 0, XQ[1] = 0, 0) : (XQ[0] = qQ, XQ[1] = TQ - qQ, TQ - qQ)
    }
    class PQ {
      constructor(QQ, WQ) {
        this.Ij = QQ, this.engine = WQ, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(QQ, WQ) {
        if (!WQ) return;
        const XQ = WQ.getProjectionMatrix().m,
          zQ = 0 === TQ && 0 === XQ[15],
          sQ = WQ.globalPosition,
          {
            engine: PQ
          } = this,
          gQ = zQ ? (0, qQ.e)(XQ, PQ.getRenderWidth(), PQ.getRenderHeight()) : 0;
        sQ.x === this.eyeX && sQ.y === this.eyeY && sQ.z === this.eyeZ && gQ === this.focalPx && zQ === this.culling || (this.epoch++, this.eyeX = sQ.x, this.eyeY = sQ.y, this.eyeZ = sQ.z, this.focalPx = gQ, this.culling = zQ);
        const {
          epoch: JQ,
          range: rQ
        } = this, IQ = this.Ij / 2, jQ = IQ * Math.sqrt(3), BQ = QQ.data, yQ = QQ.length;
        let VQ = 0;
        for (let TQ = 0; TQ < yQ; TQ++) {
          const QQ = BQ[TQ],
            WQ = QQ._noaFaceGroups;
          if (WQ && (QQ._noaFaceEpoch !== JQ || QQ._noaFaceMaterial !== QQ.material)) {
            QQ._noaFaceEpoch = JQ, QQ._noaFaceMaterial = QQ.material;
            const XQ = QQ.ZD,
              TQ = XQ && 1 === XQ.length ? XQ[0] : null;
            let PQ = -1;
            if (zQ && TQ && (0, wQ.w)(QQ.material)) {
              const XQ = QQ.position,
                wQ = sQ.x - XQ.x,
                TQ = sQ.y - XQ.y,
                zQ = sQ.z - XQ.z,
                FQ = wQ - IQ,
                JQ = TQ - IQ,
                rQ = zQ - IQ,
                BQ = Math.sqrt(FQ * FQ + JQ * JQ + rQ * rQ) + jQ;
              PQ = (0, qQ.o)(WQ, wQ, TQ, zQ, (0, qQ.h)(BQ, gQ))
            }
            if (TQ && PQ !== QQ._noaFaceMask) {
              QQ._noaFaceMask = PQ;
              let XQ = 0,
                qQ = WQ[wQ.d]; - 1 !== PQ && (qQ = FQ(WQ, PQ, rQ), XQ = rQ[0]), QQ._noaFaceCount = qQ, TQ.indexStart = 6 * XQ, TQ.indexCount = 6 * qQ, TQ.setBoundingInfo(QQ.uC())
            }
          }
          WQ && 0 === QQ._noaFaceCount || (BQ[VQ++] = QQ)
        }
        QQ.length = VQ
      }
    }
  },
  37804: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => FQ,
      e: () => sQ
    });
    const wQ = new WeakSet;
    let qQ = 0;
    const TQ = new Set;

    function zQ(QQ, WQ) {
      QQ._data = WQ
    }

    function sQ(QQ) {
      var WQ, XQ;
      (null !== (WQ = null === (XQ = QQ.getBuffer()) || void 0 === XQ ? void 0 : XQ.yJ) && void 0 !== WQ ? WQ : 0) > 0 && (wQ.add(QQ), 0 === qQ ? zQ(QQ, null) : TQ.add(QQ))
    }

    function FQ(QQ) {
      qQ++;
      for (const XQ of function(QQ) {
          const WQ = new Set;
          for (const qQ of QQ) {
            const QQ = qQ.geometry;
            for (const qQ of Object.values(null !== (XQ = null === QQ || void 0 === QQ ? void 0 : QQ.getVertexBuffers()) && void 0 !== XQ ? XQ : {})) {
              var XQ;
              const QQ = qQ.getWrapperBuffer();
              wQ.has(QQ) && WQ.add(QQ)
            }
          }
          return WQ
        }(QQ)) XQ.getData() || PQ(XQ), TQ.add(XQ);
      let WQ = !0;
      return () => {
        if (WQ && (WQ = !1, qQ--, 0 === qQ)) {
          for (const QQ of TQ) zQ(QQ, null);
          TQ.clear()
        }
      }
    }

    function PQ(QQ) {
      const WQ = QQ.getBuffer();
      if (!WQ || !(WQ.yJ > 0)) return;
      const XQ = QQ._engine,
        wQ = new Uint8Array(WQ.yJ);
      XQ.bindArrayBuffer(WQ), XQ._gl.getBufferSubData(XQ._gl.ARRAY_BUFFER, 0, wQ), XQ._resetVertexBufferBinding(), zQ(QQ, wQ)
    }
  },
  37816: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ,
      d: () => TQ,
      h: () => FQ,
      l: () => wQ,
      o: () => sQ,
      s: () => qQ,
      w: () => PQ
    });
    const wQ = 6,
      qQ = [0, 2, 4, 1, 3, 5, 0, 2],
      TQ = 6,
      zQ = [1, 0, 3, 2, 5, 4];
    for (let gQ = TQ; gQ < qQ.length; gQ++)
      if (qQ[gQ] !== qQ[gQ - TQ]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const sQ = qQ.length + 1,
      FQ = (() => {
        const QQ = [];
        for (let WQ = 0; WQ < TQ; WQ++) QQ[qQ[WQ]] = WQ;
        return QQ
      })();

    function PQ(QQ) {
      return !!QQ && QQ.backFaceCulling && (0 === QQ.transparencyMode || 1 === QQ.transparencyMode)
    }
  },
  37829: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => sQ,
      h: () => FQ,
      k: () => gQ,
      o: () => PQ,
      r: () => jQ
    });
    var wQ = XQ(37816);
    const qQ = 1 / 16,
      TQ = 1 / 64,
      zQ = 2048;
    wQ.l;

    function sQ(QQ, WQ, XQ) {
      return Math.min(Math.abs(QQ[0] * WQ), Math.abs(QQ[5] * XQ)) / 2
    }

    function FQ(QQ, WQ) {
      return qQ + TQ * QQ * QQ / WQ
    }

    function PQ(QQ, WQ, XQ, qQ, TQ) {
      const zQ = wQ.o;
      return gQ(QQ[zQ], QQ[zQ + 1], QQ[zQ + 2], QQ[zQ + 3], QQ[zQ + 4], QQ[zQ + 5], WQ, XQ, qQ, TQ)
    }

    function gQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ) {
      return (zQ <= QQ - PQ ? 0 : 1) | (zQ >= WQ + PQ ? 0 : 2) | (sQ <= XQ - PQ ? 0 : 4) | (sQ >= wQ + PQ ? 0 : 8) | (FQ <= qQ - PQ ? 0 : 16) | (FQ >= TQ + PQ ? 0 : 32)
    }
    const JQ = (() => {
        const QQ = [];
        for (let WQ = 0; WQ < wQ.s.length; WQ++) {
          let XQ = 0;
          for (let qQ = WQ + 1; qQ <= wQ.s.length; qQ++) {
            const TQ = 1 << wQ.s[qQ - 1];
            if (XQ & TQ) break;
            XQ |= TQ, QQ.push({
              start: WQ,
              end: qQ,
              pX: XQ
            })
          }
        }
        return QQ
      })(),
      rQ = [];

    function IQ(QQ, WQ) {
      const XQ = wQ.h[WQ];
      return QQ[XQ + 1] - QQ[XQ]
    }

    function jQ(QQ, WQ, XQ) {
      let qQ = 0;
      for (let zQ = 0; zQ < wQ.l; zQ++) IQ(QQ, zQ) > 0 && (qQ |= 1 << zQ);
      if (0 === (WQ &= qQ)) return 0;
      if (WQ === qQ) return XQ[0] = 0, XQ[1] = QQ[wQ.d], 1;
      let TQ = null,
        sQ = 1 / 0;
      for (const PQ of function(QQ) {
          let WQ = rQ[QQ];
          if (WQ) return WQ;
          const XQ = new Map,
            wQ = (QQ, WQ) => {
              const wQ = 4 * QQ + WQ.length / 2;
              XQ.has(wQ) || XQ.set(wQ, {
                pX: QQ,
                windows: WQ
              })
            };
          for (const TQ of JQ)
            if ((TQ.pX & QQ) === QQ && wQ(TQ.pX, [TQ.start, TQ.end]), 0 !== (TQ.pX & QQ))
              for (const WQ of JQ) WQ.start < TQ.end || 0 !== (TQ.pX & WQ.pX) || 0 === (WQ.pX & QQ) || ((TQ.pX | WQ.pX) & QQ) !== QQ || wQ(TQ.pX | WQ.pX, [TQ.start, TQ.end, WQ.start, WQ.end]);
          const qQ = [...XQ.values()];
          return WQ = qQ.filter((QQ => !qQ.some((WQ => WQ !== QQ && (WQ.pX & QQ.pX) === WQ.pX && WQ.windows.length <= QQ.windows.length)))), rQ[QQ] = WQ, WQ
        }(WQ)) {
        let XQ = (PQ.windows.length / 2 - 1) * zQ;
        const FQ = PQ.pX & ~WQ & qQ;
        for (let WQ = 0; WQ < wQ.l; WQ++) FQ & 1 << WQ && (XQ += IQ(QQ, WQ));
        XQ < sQ && (TQ = PQ, sQ = XQ)
      }
      const FQ = TQ.windows;
      for (let wQ = 0; wQ < FQ.length; wQ += 2) {
        const WQ = QQ[FQ[wQ]];
        XQ[wQ] = WQ, XQ[wQ + 1] = QQ[FQ[wQ + 1]] - WQ
      }
      return FQ.length / 2
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);