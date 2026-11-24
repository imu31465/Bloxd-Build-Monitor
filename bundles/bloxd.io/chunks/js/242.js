export const id = 242;
export const ids = [242];
export const modules = {
  41207: (TT, UT, mT) => {
    mT.d(UT, {
      noaDevTools: () => lT
    });
    var WT = mT(37673),
      zT = mT(37649),
      MT = mT(2875),
      gT = mT(1863),
      nT = mT(41110);

    function HT(TT) {
      const {
        GB: UT
      } = TT, mT = UT.engine, WT = {
        width: mT.getRenderWidth(),
        height: mT.getRenderHeight()
      };
      return {
        canvas: mT.getRenderingCanvas(),
        maxTextureSize: mT.getCaps().maxTextureSize,
        drawing: () => !TT.bY,
        resize: (TT, UT) => {
          mT.setSize(TT, UT)
        },
        restoreSize: () => {
          mT.setSize(WT.width, WT.height), UT.resize()
        },
        onFrameDrawn: UT => (TT.on("afterRender", UT), () => {
          TT.off("afterRender", UT)
        })
      }
    }
    var kT = mT(34152);

    function jT(TT, UT) {
      let {
        width: kT,
        height: jT,
        colouring: lT
      } = UT;
      const LT = "normals" === lT,
        pT = "depth" === lT;
      return new Promise((UT => {
        try {
          const BT = (0, MT.h)();
          if (BT.GB.NB) return "screenshot" !== TT || null !== lT ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void UT()) : void(0, nT.g)(HT(BT), kT, jT).finally(UT);
          const ZT = BT.GB.engine,
            cT = BT.GB.KF(),
            vT = kT,
            fT = jT;
          Promise.all([Promise.all([mT.e(258), mT.e(259), mT.e(238)]).then((() => mT(61126))), Promise.all([mT.e(237), mT.e(236), mT.e(258), mT.e(259), mT.e(256), mT.e(260), mT.e(263), mT.e(316), mT.e(243)]).then((() => mT(61133))), Promise.all([mT.e(237), mT.e(236), mT.e(258), mT.e(259), mT.e(256), mT.e(266), mT.e(260), mT.e(268), mT.e(245)]).then((() => mT(61136))), mT.e(357).then((() => mT(61145))), Promise.all([mT.e(236), mT.e(232)]).then((() => mT(37185))), mT.e(257).then((() => mT(61150))), mT.e(240).then((() => mT(61157)))]).then((MT => {
            const {
              CreateScreenshotUsingRenderTarget: nT
            } = MT[1], {
              ShaderMaterial: HT
            } = MT[2], {
              ShaderLanguage: kT
            } = MT[3], {
              JB: jT
            } = MT[4], {
              registerDevtoolsShader: lT
            } = MT[6], BT = kT.GLSL, qT = new Map, iT = cT.meshes.filter((TT => TT.material));
            let bT = !1,
              OT = null;

            function eT() {
              var TT;
              bT && (bT = !1, (0, WT.i)(cT.meshes, !1)), null === (TT = OT) || void 0 === TT || TT(), OT = null, iT.forEach((TT => {
                const UT = qT.get(TT);
                UT && (TT.material = UT)
              }))
            }
            if (LT) {
              const TT = [],
                UT = [];
              iT.forEach((mT => {
                const WT = mT.name.toLowerCase(),
                  zT = mT.rV().boundingBox.center,
                  MT = cT.activeCamera.position.subtract(zT).length();
                WT.includes("sky") || WT.includes("background") || WT.includes("environment") || MT > 1e3 ? UT.push(mT) : TT.push(mT)
              })), lT("devtoolsNormal", BT);
              const mT = new HT("normalMaterial", cT, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: BT
              });
              lT("devtoolsWhite", BT);
              const WT = new HT("whiteMaterial", cT, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: BT
              });
              TT.forEach((TT => {
                qT.set(TT, TT.material), TT.material = mT
              })), UT.forEach((TT => {
                qT.set(TT, TT.material), TT.material = WT
              }))
            } else if (pT) {
              lT("devtoolsDepth", BT);
              const TT = cT.activeCamera.position;
              let UT = 0,
                mT = 1 / 0;
              iT.forEach((WT => {
                const zT = WT.name.toLowerCase();
                if (zT.includes("sky") || zT.includes("background") || zT.includes("environment")) return;
                const MT = WT.rV().boundingBox.center,
                  gT = jT.TransformCoordinates(MT, WT.getWorldMatrix()),
                  nT = TT.subtract(gT).length();
                nT > 1e3 || (UT = Math.max(UT, nT), mT = Math.min(mT, nT))
              }));
              const WT = UT - mT;
              UT += .1 * WT, mT = Math.max(0, mT - .1 * WT), console.log(`Depth range: min=${mT.toFixed(2)}, max=${UT.toFixed(2)}, range=${WT.toFixed(2)}`), WT < 1 && (UT = mT + 10);
              const zT = new HT("depthMaterial", cT, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: BT
              });
              zT.setVector3("cameraPosition", TT), zT.setFloat("maxDepth", UT), zT.setFloat("minDepth", mT), iT.forEach((TT => {
                qT.set(TT, TT.material), TT.material = zT
              }))
            }
            if ((0, WT.i)(cT.meshes, !0), bT = !0, "glb" === TT && (OT = (0, zT.c)(cT.meshes)), "screenshot" === TT) {
              let TT = `bloxd-screenshot-${vT}x${fT}-${Date.now()}.png`;
              LT ? TT = `bloxd-screenshot-normals-${vT}x${fT}-${Date.now()}.png` : pT && (TT = `bloxd-screenshot-depth-${vT}x${fT}-${Date.now()}.png`), nT(ZT, cT.activeCamera, {
                width: vT,
                height: fT
              }, (function(mT) {
                eT(), fetch(mT).then((function(TT) {
                  return TT.blob()
                })).then((function(mT) {
                  (0, gT.downloadBlob)(mT, TT), UT()
                })).catch((function(TT) {
                  console.error("Error processing screenshot:", TT), UT()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), eT(), UT()
              }))
            } else {
              let TT = "XZ";
              LT ? TT = "scene-normals" : pT && (TT = "scene-depth"), LT || pT ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: TT
                  } = await Promise.all([mT.e(237), mT.e(236), mT.e(258), mT.e(259), mT.e(256), mT.e(266), mT.e(265), mT.e(244)]).then((() => mT(40379))), {
                    Color3: UT
                  } = await Promise.all([mT.e(237), mT.e(241)]).then((() => mT(37364))), WT = [], zT = [];
                  if (iT.forEach((TT => {
                      const UT = TT.name.toLowerCase(),
                        mT = TT.rV().boundingBox.center,
                        MT = cT.activeCamera.position.subtract(mT).length();
                      UT.includes("sky") || UT.includes("background") || UT.includes("environment") || MT > 1e3 ? zT.push(TT) : WT.push(TT)
                    })), LT) WT.forEach(((mT, WT) => {
                    const zT = mT.getVerticesData("normal");
                    if (zT) {
                      const MT = [];
                      for (let TT = 0; TT < zT.length; TT += 3) {
                        const UT = Math.abs(zT[TT]),
                          mT = Math.abs(zT[TT + 1]),
                          WT = Math.abs(zT[TT + 2]);
                        MT.push(UT, mT, WT, 1)
                      }
                      mT.setVerticesData("color", MT);
                      const gT = new TT(`vertexColorMat_${WT}`, cT);
                      gT.disableLighting = !0, gT.emissiveColor = new UT(1, 1, 1), gT.specularColor = new UT(0, 0, 0), mT.material = gT
                    }
                  })), zT.forEach(((mT, WT) => {
                    const zT = mT.getVerticesData("position");
                    if (zT) {
                      const MT = [],
                        gT = zT.length / 3;
                      for (let TT = 0; TT < gT; TT++) MT.push(1, 1, 1, 1);
                      mT.setVerticesData("color", MT);
                      const nT = new TT(`whiteMat_${WT}`, cT);
                      nT.disableLighting = !0, nT.emissiveColor = new UT(1, 1, 1), nT.specularColor = new UT(0, 0, 0), mT.material = nT
                    }
                  }));
                  else if (pT) {
                    const mT = cT.activeCamera.position;
                    let zT = 0,
                      MT = 1 / 0;
                    WT.forEach((TT => {
                      const UT = TT.rV().boundingBox.center,
                        WT = jT.TransformCoordinates(UT, TT.getWorldMatrix()),
                        gT = mT.subtract(WT).length();
                      zT = Math.max(zT, gT), MT = Math.min(MT, gT)
                    }));
                    const gT = zT - MT;
                    zT += .1 * gT, MT = Math.max(0, MT - .1 * gT), gT < 1 && (zT = MT + 10), iT.forEach(((WT, gT) => {
                      const nT = WT.name.toLowerCase(),
                        HT = WT.rV().boundingBox.center,
                        kT = jT.TransformCoordinates(HT, WT.getWorldMatrix()),
                        lT = mT.subtract(kT).length();
                      if (!(nT.includes("sky") || nT.includes("background") || nT.includes("environment") || lT > 1e3)) {
                        const mT = 1 - Math.min(Math.max((lT - MT) / (zT - MT), 0), 1),
                          nT = new TT(`depthMat_${gT}`, cT);
                        nT.diffuseColor = new UT(mT, mT, mT), nT.specularColor = new UT(0, 0, 0), WT.material = nT
                      }
                    }))
                  }
                })().then((() => Promise.all([mT.e(237), mT.e(236), mT.e(258), mT.e(259), mT.e(256), mT.e(266), mT.e(260), mT.e(265), mT.e(263), mT.e(255), mT.e(268), mT.e(279), mT.e(316), mT.e(249), mT.e(267), mT.e(235)]).then((() => mT(61159))))).then((UT => UT.GLTF2Export.GLBAsync(cT, TT))).then((TT => {
                  eT(), TT.downloadFiles(), UT()
                })).catch((TT => {
                  console.error("Error exporting GLB:", TT), eT(), UT()
                }))
              }), 100) : Promise.all([mT.e(237), mT.e(236), mT.e(258), mT.e(259), mT.e(256), mT.e(266), mT.e(260), mT.e(265), mT.e(263), mT.e(255), mT.e(268), mT.e(279), mT.e(316), mT.e(249), mT.e(267), mT.e(235)]).then((() => mT(61159))).then((mT => {
                mT.GLTF2Export.GLBAsync(cT, TT).then((TT => {
                  eT(), TT.downloadFiles(), UT()
                })).catch((TT => {
                  console.error("Error exporting GLB:", TT), eT(), UT()
                }))
              })).catch((TT => {
                console.error("Error importing serializers:", TT), eT(), UT()
              }))
            }
          })).catch((TT => {
            console.error("Error downloading the scene:", TT), UT()
          }))
        } catch (BT) {
          console.error("Error taking screenshot:", BT), UT()
        }
      }))
    }
    const lT = new class {
      constructor() {
        this.tools = kT.ALL_DEV_TOOLS
      }
      downloadScene(TT, UT) {
        return jT(TT, UT)
      }
      async setAmbientLightIntensity(TT) {
        const {
          Color3: UT
        } = await Promise.all([mT.e(237), mT.e(241)]).then((() => mT(37364)));
        (0, MT.h)().GB.KF().ambientColor = UT.FromArray([TT, TT, TT])
      }
      capturePhoto(TT, UT, mT) {
        return function(TT, UT, mT, WT) {
          return (0, nT.c)(HT(TT), UT, mT, WT)
        }((0, MT.h)(), TT, UT, mT)
      }
    }
  },
  41110: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => nT,
      g: () => HT
    });
    var WT = mT(1876);
    const zT = 33177600,
      MT = 3e4;
    let gT = !1;

    function nT(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: nT = 1,
        type: HT = "image/png",
        quality: kT
      } = WT;
      if (!TT.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (gT) return Promise.reject(new Error("A screenshot is already being taken"));
      gT = !0;
      const jT = function(TT, UT, mT) {
        const WT = Math.max(1, TT),
          MT = Math.max(1, UT),
          gT = Math.min(1, mT / Math.max(WT, MT), Math.sqrt(zT / (WT * MT)));
        return {
          width: Math.max(1, Math.floor(WT * gT)),
          height: Math.max(1, Math.floor(MT * gT))
        }
      }(UT, mT, TT.maxTextureSize);
      return TT.resize(jT.width, jT.height, nT * jT.width / Math.max(1, UT)), new Promise(((UT, mT) => {
        let WT, zT = 2,
          nT = null;
        const jT = () => {
          var UT;
          gT = !1, null === (UT = nT) || void 0 === UT || UT(), clearTimeout(WT), TT.restoreSize()
        };
        WT = setTimeout((() => {
          jT(), mT(new Error("No frame was drawn to capture"))
        }), MT), nT = TT.onFrameDrawn((() => {
          if (zT--, zT > 0) return;
          const {
            canvas: WT
          } = TT, MT = {
            width: WT.width,
            height: WT.height
          };
          try {
            WT.toBlob((TT => {
              TT ? UT({
                blob: TT,
                ...MT
              }) : mT(new Error("The canvas gave no image"))
            }), HT, kT)
          } catch (gT) {
            mT(gT)
          } finally {
            jT()
          }
        }))
      }))
    }
    async function HT(TT, UT, mT) {
      try {
        const zT = await nT(TT, UT, mT);
        (0, WT.c)(zT.blob, `bloxd-screenshot-${zT.width}x${zT.height}-${Date.now()}.png`)
      } catch (zT) {
        console.error("Error taking screenshot:", zT)
      }
    }
  },
  37673: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => kT,
      i: () => nT,
      k: () => gT
    });
    var WT = mT(37666),
      zT = mT(37676);
    let MT = 0;

    function gT(TT, UT) {
      const mT = TT;
      mT._noaFaceGroups = null !== UT && void 0 !== UT ? UT : null, mT._noaFaceEpoch = -1, mT._noaFaceMask = -1, mT._noaFaceCount = -1, mT._noaFaceMaterial = null;
      const WT = TT.rY;
      WT && 1 === WT.length && (WT[0].indexStart = 0, WT[0].indexCount = TT.getTotalIndices())
    }

    function nT(TT, UT) {
      if (UT) {
        MT++;
        for (const UT of TT) {
          const TT = UT._noaFaceGroups;
          TT && gT(UT, TT)
        }
      } else MT = Math.max(0, MT - 1)
    }

    function HT(TT, UT, mT) {
      let zT = -1,
        MT = 0;
      for (let gT = 0; gT < WT.f; gT++) {
        const mT = TT[gT],
          nT = TT[gT + 1];
        nT > mT && UT & 1 << WT.c[gT] && (zT < 0 && (zT = mT), MT = nT)
      }
      return zT < 0 ? (mT[0] = 0, mT[1] = 0, 0) : (mT[0] = zT, mT[1] = MT - zT, MT - zT)
    }
    class kT {
      constructor(TT, UT) {
        this.cB = TT, this.engine = UT, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(TT, UT) {
        if (!UT) return;
        const mT = UT.getProjectionMatrix().m,
          gT = 0 === MT && 0 === mT[15],
          nT = UT.globalPosition,
          {
            engine: kT
          } = this,
          jT = gT ? (0, zT.c)(mT, kT.getRenderWidth(), kT.getRenderHeight()) : 0;
        nT.x === this.eyeX && nT.y === this.eyeY && nT.z === this.eyeZ && jT === this.focalPx && gT === this.culling || (this.epoch++, this.eyeX = nT.x, this.eyeY = nT.y, this.eyeZ = nT.z, this.focalPx = jT, this.culling = gT);
        const {
          epoch: lT,
          range: LT
        } = this, pT = this.cB / 2, BT = pT * Math.sqrt(3), ZT = TT.data, cT = TT.length;
        let vT = 0;
        for (let MT = 0; MT < cT; MT++) {
          const TT = ZT[MT],
            UT = TT._noaFaceGroups;
          if (UT && (TT._noaFaceEpoch !== lT || TT._noaFaceMaterial !== TT.material)) {
            TT._noaFaceEpoch = lT, TT._noaFaceMaterial = TT.material;
            const mT = TT.rY,
              MT = mT && 1 === mT.length ? mT[0] : null;
            let kT = -1;
            if (gT && MT && (0, WT.p)(TT.material)) {
              const mT = TT.position,
                WT = nT.x - mT.x,
                MT = nT.y - mT.y,
                gT = nT.z - mT.z,
                HT = WT - pT,
                lT = MT - pT,
                LT = gT - pT,
                ZT = Math.sqrt(HT * HT + lT * lT + LT * LT) + BT;
              kT = (0, zT.l)(UT, WT, MT, gT, (0, zT.e)(ZT, jT))
            }
            if (MT && kT !== TT._noaFaceMask) {
              TT._noaFaceMask = kT;
              let mT = 0,
                zT = UT[WT.f]; - 1 !== kT && (zT = HT(UT, kT, LT), mT = LT[0]), TT._noaFaceCount = zT, MT.indexStart = 6 * mT, MT.indexCount = 6 * zT, MT.setBoundingInfo(TT.rV())
            }
          }
          UT && 0 === TT._noaFaceCount || (ZT[vT++] = TT)
        }
        TT.length = vT
      }
    }
  },
  37649: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => HT,
      f: () => nT
    });
    const WT = new WeakSet;
    let zT = 0;
    const MT = new Set;

    function gT(TT, UT) {
      TT._data = UT
    }

    function nT(TT) {
      var UT, mT;
      (null !== (UT = null === (mT = TT.getBuffer()) || void 0 === mT ? void 0 : mT.fl) && void 0 !== UT ? UT : 0) > 0 && (WT.add(TT), 0 === zT ? gT(TT, null) : MT.add(TT))
    }

    function HT(TT) {
      zT++;
      for (const mT of function(TT) {
          const UT = new Set;
          for (const zT of TT) {
            const TT = zT.geometry;
            for (const zT of Object.values(null !== (mT = null === TT || void 0 === TT ? void 0 : TT.getVertexBuffers()) && void 0 !== mT ? mT : {})) {
              var mT;
              const TT = zT.getWrapperBuffer();
              WT.has(TT) && UT.add(TT)
            }
          }
          return UT
        }(TT)) mT.getData() || kT(mT), MT.add(mT);
      let UT = !0;
      return () => {
        if (UT && (UT = !1, zT--, 0 === zT)) {
          for (const TT of MT) gT(TT, null);
          MT.clear()
        }
      }
    }

    function kT(TT) {
      const UT = TT.getBuffer();
      if (!UT || !(UT.fl > 0)) return;
      const mT = TT._engine,
        WT = new Uint8Array(UT.fl);
      mT.bindArrayBuffer(UT), mT._gl.getBufferSubData(mT._gl.ARRAY_BUFFER, 0, WT), mT._resetVertexBufferBinding(), gT(TT, WT)
    }
  },
  37666: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => gT,
      f: () => MT,
      i: () => HT,
      l: () => WT,
      m: () => nT,
      o: () => zT,
      p: () => kT
    });
    const WT = 6,
      zT = [0, 2, 4, 1, 3, 5, 0, 2],
      MT = 6,
      gT = [1, 0, 3, 2, 5, 4];
    for (let jT = MT; jT < zT.length; jT++)
      if (zT[jT] !== zT[jT - MT]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const nT = zT.length + 1,
      HT = (() => {
        const TT = [];
        for (let UT = 0; UT < MT; UT++) TT[zT[UT]] = UT;
        return TT
      })();

    function kT(TT) {
      return !!TT && TT.backFaceCulling && (0 === TT.transparencyMode || 1 === TT.transparencyMode)
    }
  },
  37676: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => nT,
      e: () => HT,
      h: () => jT,
      l: () => kT,
      n: () => BT
    });
    var WT = mT(37666);
    const zT = 1 / 16,
      MT = 1 / 64,
      gT = 2048;
    WT.l;

    function nT(TT, UT, mT) {
      return Math.min(Math.abs(TT[0] * UT), Math.abs(TT[5] * mT)) / 2
    }

    function HT(TT, UT) {
      return zT + MT * TT * TT / UT
    }

    function kT(TT, UT, mT, zT, MT) {
      const gT = WT.m;
      return jT(TT[gT], TT[gT + 1], TT[gT + 2], TT[gT + 3], TT[gT + 4], TT[gT + 5], UT, mT, zT, MT)
    }

    function jT(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT) {
      return (gT <= TT - kT ? 0 : 1) | (gT >= UT + kT ? 0 : 2) | (nT <= mT - kT ? 0 : 4) | (nT >= WT + kT ? 0 : 8) | (HT <= zT - kT ? 0 : 16) | (HT >= MT + kT ? 0 : 32)
    }
    const lT = (() => {
        const TT = [];
        for (let UT = 0; UT < WT.o.length; UT++) {
          let mT = 0;
          for (let zT = UT + 1; zT <= WT.o.length; zT++) {
            const MT = 1 << WT.o[zT - 1];
            if (mT & MT) break;
            mT |= MT, TT.push({
              start: UT,
              end: zT,
              bm: mT
            })
          }
        }
        return TT
      })(),
      LT = [];

    function pT(TT, UT) {
      const mT = WT.i[UT];
      return TT[mT + 1] - TT[mT]
    }

    function BT(TT, UT, mT) {
      let zT = 0;
      for (let gT = 0; gT < WT.l; gT++) pT(TT, gT) > 0 && (zT |= 1 << gT);
      if (0 === (UT &= zT)) return 0;
      if (UT === zT) return mT[0] = 0, mT[1] = TT[WT.f], 1;
      let MT = null,
        nT = 1 / 0;
      for (const kT of function(TT) {
          let UT = LT[TT];
          if (UT) return UT;
          const mT = new Map,
            WT = (TT, UT) => {
              const WT = 4 * TT + UT.length / 2;
              mT.has(WT) || mT.set(WT, {
                bm: TT,
                windows: UT
              })
            };
          for (const MT of lT)
            if ((MT.bm & TT) === TT && WT(MT.bm, [MT.start, MT.end]), 0 !== (MT.bm & TT))
              for (const UT of lT) UT.start < MT.end || 0 !== (MT.bm & UT.bm) || 0 === (UT.bm & TT) || ((MT.bm | UT.bm) & TT) !== TT || WT(MT.bm | UT.bm, [MT.start, MT.end, UT.start, UT.end]);
          const zT = [...mT.values()];
          return UT = zT.filter((TT => !zT.some((UT => UT !== TT && (UT.bm & TT.bm) === UT.bm && UT.windows.length <= TT.windows.length)))), LT[TT] = UT, UT
        }(UT)) {
        let mT = (kT.windows.length / 2 - 1) * gT;
        const HT = kT.bm & ~UT & zT;
        for (let UT = 0; UT < WT.l; UT++) HT & 1 << UT && (mT += pT(TT, UT));
        mT < nT && (MT = kT, nT = mT)
      }
      const HT = MT.windows;
      for (let WT = 0; WT < HT.length; WT += 2) {
        const UT = TT[HT[WT]];
        mT[WT] = UT, mT[WT + 1] = TT[HT[WT + 1]] - UT
      }
      return HT.length / 2
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);