export const id = 231;
export const ids = [231];
export const modules = {
  40806: (qq, Eq, gq) => {
    gq.d(Eq, {
      noaDevTools: () => Bq
    });
    var Yq = gq(37560),
      lq = gq(37541),
      Oq = gq(2668),
      mq = gq(1710);

    function xq(qq) {
      const {
        Ma: Eq
      } = qq, gq = Eq.engine, Yq = {
        width: gq.getRenderWidth(),
        height: gq.getRenderHeight()
      };
      return {
        canvas: gq.getRenderingCanvas(),
        maxTextureSize: gq.getCaps().maxTextureSize,
        drawing: () => !qq.Av,
        resize: (qq, Eq) => {
          gq.setSize(qq, Eq)
        },
        restoreSize: () => {
          gq.setSize(Yq.width, Yq.height), Eq.resize()
        },
        onFrameDrawn: Eq => (qq.on("afterRender", Eq), () => {
          qq.off("afterRender", Eq)
        })
      }
    }
    var Aq = gq(40778),
      cq = gq(9160);

    function uq(qq, Eq) {
      let {
        width: cq,
        height: uq,
        colouring: Bq
      } = Eq;
      const Wq = "normals" === Bq,
        Nq = "depth" === Bq;
      return new Promise((Eq => {
        try {
          const aq = (0, Oq.e)();
          if (aq.Ma.Ta) return "screenshot" !== qq || null !== Bq ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void Eq()) : void(0, Aq.e)(xq(aq), cq, uq).finally(Eq);
          const Vq = aq.Ma.engine,
            dq = aq.Ma.ZJ(),
            jq = cq,
            Hq = uq;
          Promise.all([Promise.all([gq.e(246), gq.e(247), gq.e(228)]).then((() => gq(61112))), Promise.all([gq.e(227), gq.e(226), gq.e(246), gq.e(247), gq.e(244), gq.e(248), gq.e(251), gq.e(302), gq.e(232)]).then((() => gq(61121))), Promise.all([gq.e(227), gq.e(226), gq.e(246), gq.e(247), gq.e(244), gq.e(254), gq.e(248), gq.e(256), gq.e(234)]).then((() => gq(61127))), gq.e(345).then((() => gq(61130))), Promise.all([gq.e(226), gq.e(222)]).then((() => gq(37131))), gq.e(245).then((() => gq(61138))), gq.e(229).then((() => gq(61144)))]).then((Oq => {
            const {
              CreateScreenshotUsingRenderTarget: xq
            } = Oq[1], {
              ShaderMaterial: Aq
            } = Oq[2], {
              ShaderLanguage: cq
            } = Oq[3], {
              Na: uq
            } = Oq[4], {
              registerDevtoolsShader: Bq
            } = Oq[6], aq = cq.GLSL, oq = new Map, Pq = dq.meshes.filter((qq => qq.material));
            let Qq = !1,
              yq = null;

            function tq() {
              var qq;
              Qq && (Qq = !1, (0, Yq.e)(dq.meshes, !1)), null === (qq = yq) || void 0 === qq || qq(), yq = null, Pq.forEach((qq => {
                const Eq = oq.get(qq);
                Eq && (qq.material = Eq)
              }))
            }
            if (Wq) {
              const qq = [],
                Eq = [];
              Pq.forEach((gq => {
                const Yq = gq.name.toLowerCase(),
                  lq = gq.yR().boundingBox.center,
                  Oq = dq.activeCamera.position.subtract(lq).length();
                Yq.includes("sky") || Yq.includes("background") || Yq.includes("environment") || Oq > 1e3 ? Eq.push(gq) : qq.push(gq)
              })), Bq("devtoolsNormal", aq);
              const gq = new Aq("normalMaterial", dq, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: aq
              });
              Bq("devtoolsWhite", aq);
              const Yq = new Aq("whiteMaterial", dq, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: aq
              });
              qq.forEach((qq => {
                oq.set(qq, qq.material), qq.material = gq
              })), Eq.forEach((qq => {
                oq.set(qq, qq.material), qq.material = Yq
              }))
            } else if (Nq) {
              Bq("devtoolsDepth", aq);
              const qq = dq.activeCamera.position;
              let Eq = 0,
                gq = 1 / 0;
              Pq.forEach((Yq => {
                const lq = Yq.name.toLowerCase();
                if (lq.includes("sky") || lq.includes("background") || lq.includes("environment")) return;
                const Oq = Yq.yR().boundingBox.center,
                  mq = uq.TransformCoordinates(Oq, Yq.getWorldMatrix()),
                  xq = qq.subtract(mq).length();
                xq > 1e3 || (Eq = Math.max(Eq, xq), gq = Math.min(gq, xq))
              }));
              const Yq = Eq - gq;
              Eq += .1 * Yq, gq = Math.max(0, gq - .1 * Yq), console.log(`Depth range: min=${gq.toFixed(2)}, max=${Eq.toFixed(2)}, range=${Yq.toFixed(2)}`), Yq < 1 && (Eq = gq + 10);
              const lq = new Aq("depthMaterial", dq, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: aq
              });
              lq.setVector3("cameraPosition", qq), lq.setFloat("maxDepth", Eq), lq.setFloat("minDepth", gq), Pq.forEach((qq => {
                oq.set(qq, qq.material), qq.material = lq
              }))
            }
            if ((0, Yq.e)(dq.meshes, !0), Qq = !0, "glb" === qq && (yq = (0, lq.e)(dq.meshes)), "screenshot" === qq) {
              let qq = `bloxd-screenshot-${jq}x${Hq}-${Date.now()}.png`;
              Wq ? qq = `bloxd-screenshot-normals-${jq}x${Hq}-${Date.now()}.png` : Nq && (qq = `bloxd-screenshot-depth-${jq}x${Hq}-${Date.now()}.png`), xq(Vq, dq.activeCamera, {
                width: jq,
                height: Hq
              }, (function(gq) {
                tq(), fetch(gq).then((function(qq) {
                  return qq.blob()
                })).then((function(gq) {
                  (0, mq.downloadBlob)(gq, qq), Eq()
                })).catch((function(qq) {
                  console.error("Error processing screenshot:", qq), Eq()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), tq(), Eq()
              }))
            } else {
              let qq = "PV";
              Wq ? qq = "scene-normals" : Nq && (qq = "scene-depth"), Wq || Nq ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: qq
                  } = await Promise.all([gq.e(227), gq.e(226), gq.e(246), gq.e(247), gq.e(244), gq.e(254), gq.e(253), gq.e(233)]).then((() => gq(40003))), {
                    Color3: Eq
                  } = await Promise.all([gq.e(227), gq.e(230)]).then((() => gq(37286))), Yq = [], lq = [];
                  if (Pq.forEach((qq => {
                      const Eq = qq.name.toLowerCase(),
                        gq = qq.yR().boundingBox.center,
                        Oq = dq.activeCamera.position.subtract(gq).length();
                      Eq.includes("sky") || Eq.includes("background") || Eq.includes("environment") || Oq > 1e3 ? lq.push(qq) : Yq.push(qq)
                    })), Wq) Yq.forEach(((gq, Yq) => {
                    const lq = gq.getVerticesData("normal");
                    if (lq) {
                      const Oq = [];
                      for (let qq = 0; qq < lq.length; qq += 3) {
                        const Eq = Math.abs(lq[qq]),
                          gq = Math.abs(lq[qq + 1]),
                          Yq = Math.abs(lq[qq + 2]);
                        Oq.push(Eq, gq, Yq, 1)
                      }
                      gq.setVerticesData("color", Oq);
                      const mq = new qq(`vertexColorMat_${Yq}`, dq);
                      mq.disableLighting = !0, mq.emissiveColor = new Eq(1, 1, 1), mq.specularColor = new Eq(0, 0, 0), gq.material = mq
                    }
                  })), lq.forEach(((gq, Yq) => {
                    const lq = gq.getVerticesData("position");
                    if (lq) {
                      const Oq = [],
                        mq = lq.length / 3;
                      for (let qq = 0; qq < mq; qq++) Oq.push(1, 1, 1, 1);
                      gq.setVerticesData("color", Oq);
                      const xq = new qq(`whiteMat_${Yq}`, dq);
                      xq.disableLighting = !0, xq.emissiveColor = new Eq(1, 1, 1), xq.specularColor = new Eq(0, 0, 0), gq.material = xq
                    }
                  }));
                  else if (Nq) {
                    const gq = dq.activeCamera.position;
                    let lq = 0,
                      Oq = 1 / 0;
                    Yq.forEach((qq => {
                      const Eq = qq.yR().boundingBox.center,
                        Yq = uq.TransformCoordinates(Eq, qq.getWorldMatrix()),
                        mq = gq.subtract(Yq).length();
                      lq = Math.max(lq, mq), Oq = Math.min(Oq, mq)
                    }));
                    const mq = lq - Oq;
                    lq += .1 * mq, Oq = Math.max(0, Oq - .1 * mq), mq < 1 && (lq = Oq + 10), Pq.forEach(((Yq, mq) => {
                      const xq = Yq.name.toLowerCase(),
                        Aq = Yq.yR().boundingBox.center,
                        cq = uq.TransformCoordinates(Aq, Yq.getWorldMatrix()),
                        Bq = gq.subtract(cq).length();
                      if (!(xq.includes("sky") || xq.includes("background") || xq.includes("environment") || Bq > 1e3)) {
                        const gq = 1 - Math.min(Math.max((Bq - Oq) / (lq - Oq), 0), 1),
                          xq = new qq(`depthMat_${mq}`, dq);
                        xq.diffuseColor = new Eq(gq, gq, gq), xq.specularColor = new Eq(0, 0, 0), Yq.material = xq
                      }
                    }))
                  }
                })().then((() => Promise.all([gq.e(227), gq.e(226), gq.e(246), gq.e(247), gq.e(244), gq.e(254), gq.e(248), gq.e(253), gq.e(251), gq.e(243), gq.e(256), gq.e(265), gq.e(302), gq.e(238), gq.e(255), gq.e(225)]).then((() => gq(61146))))).then((Eq => Eq.GLTF2Export.GLBAsync(dq, qq))).then((qq => {
                  tq(), qq.downloadFiles(), Eq()
                })).catch((qq => {
                  console.error("Error exporting GLB:", qq), tq(), Eq()
                }))
              }), 100) : Promise.all([gq.e(227), gq.e(226), gq.e(246), gq.e(247), gq.e(244), gq.e(254), gq.e(248), gq.e(253), gq.e(251), gq.e(243), gq.e(256), gq.e(265), gq.e(302), gq.e(238), gq.e(255), gq.e(225)]).then((() => gq(61146))).then((gq => {
                gq.GLTF2Export.GLBAsync(dq, qq).then((qq => {
                  tq(), qq.downloadFiles(), Eq()
                })).catch((qq => {
                  console.error("Error exporting GLB:", qq), tq(), Eq()
                }))
              })).catch((qq => {
                console.error("Error importing serializers:", qq), tq(), Eq()
              }))
            }
          })).catch((qq => {
            console.error("Error downloading the scene:", qq), Eq()
          }))
        } catch (aq) {
          console.error("Error taking screenshot:", aq), Eq()
        }
      }))
    }
    const Bq = new class {
      constructor() {
        this.tools = cq.ALL_DEV_TOOLS
      }
      downloadScene(qq, Eq) {
        return uq(qq, Eq)
      }
      async setAmbientLightIntensity(qq) {
        const {
          Color3: Eq
        } = await Promise.all([gq.e(227), gq.e(230)]).then((() => gq(37286)));
        (0, Oq.e)().Ma.ZJ().ambientColor = Eq.FromArray([qq, qq, qq])
      }
    }
  },
  40778: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Aq
    });
    var Yq = gq(1725);
    const lq = 33177600,
      Oq = 3e4;
    let mq = !1;

    function xq(qq, Eq, gq) {
      if (!qq.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (mq) return Promise.reject(new Error("A screenshot is already being taken"));
      mq = !0;
      const Yq = function(qq, Eq, gq) {
        const Yq = Math.max(1, qq),
          Oq = Math.max(1, Eq),
          mq = Math.min(1, gq / Math.max(Yq, Oq), Math.sqrt(lq / (Yq * Oq)));
        return {
          width: Math.max(1, Math.floor(Yq * mq)),
          height: Math.max(1, Math.floor(Oq * mq))
        }
      }(Eq, gq, qq.maxTextureSize);
      return qq.resize(Yq.width, Yq.height), new Promise(((Eq, gq) => {
        let Yq, lq = 2,
          xq = null;
        const Aq = () => {
          var Eq;
          mq = !1, null === (Eq = xq) || void 0 === Eq || Eq(), clearTimeout(Yq), qq.restoreSize()
        };
        Yq = setTimeout((() => {
          Aq(), gq(new Error("No frame was drawn to capture"))
        }), Oq), xq = qq.onFrameDrawn((() => {
          if (lq--, lq > 0) return;
          const {
            canvas: Yq
          } = qq, Oq = {
            width: Yq.width,
            height: Yq.height
          };
          try {
            Yq.toBlob((qq => {
              qq ? Eq({
                blob: qq,
                ...Oq
              }) : gq(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (mq) {
            gq(mq)
          } finally {
            Aq()
          }
        }))
      }))
    }
    async function Aq(qq, Eq, gq) {
      try {
        const lq = await xq(qq, Eq, gq);
        (0, Yq.e)(lq.blob, `bloxd-screenshot-${lq.width}x${lq.height}-${Date.now()}.png`)
      } catch (lq) {
        console.error("Error taking screenshot:", lq)
      }
    }
  },
  37560: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => cq,
      e: () => xq,
      f: () => mq
    });
    var Yq = gq(37557),
      lq = gq(37562);
    let Oq = 0;

    function mq(qq, Eq) {
      const gq = qq;
      gq._noaFaceGroups = null !== Eq && void 0 !== Eq ? Eq : null, gq._noaFaceEpoch = -1, gq._noaFaceMask = -1, gq._noaFaceCount = -1, gq._noaFaceMaterial = null;
      const Yq = qq.fn;
      Yq && 1 === Yq.length && (Yq[0].indexStart = 0, Yq[0].indexCount = qq.getTotalIndices())
    }

    function xq(qq, Eq) {
      if (Eq) {
        Oq++;
        for (const Eq of qq) {
          const qq = Eq._noaFaceGroups;
          qq && mq(Eq, qq)
        }
      } else Oq = Math.max(0, Oq - 1)
    }

    function Aq(qq, Eq, gq) {
      let lq = -1,
        Oq = 0;
      for (let mq = 0; mq < Yq.e; mq++) {
        const gq = qq[mq],
          xq = qq[mq + 1];
        xq > gq && Eq & 1 << Yq.b[mq] && (lq < 0 && (lq = gq), Oq = xq)
      }
      return lq < 0 ? (gq[0] = 0, gq[1] = 0, 0) : (gq[0] = lq, gq[1] = Oq - lq, Oq - lq)
    }
    class cq {
      constructor(qq, Eq) {
        this.Oa = qq, this.engine = Eq, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(qq, Eq) {
        if (!Eq) return;
        const gq = Eq.getProjectionMatrix().m,
          mq = 0 === Oq && 0 === gq[15],
          xq = Eq.globalPosition,
          {
            engine: cq
          } = this,
          uq = mq ? (0, lq.d)(gq, cq.getRenderWidth(), cq.getRenderHeight()) : 0;
        xq.x === this.eyeX && xq.y === this.eyeY && xq.z === this.eyeZ && uq === this.focalPx && mq === this.culling || (this.epoch++, this.eyeX = xq.x, this.eyeY = xq.y, this.eyeZ = xq.z, this.focalPx = uq, this.culling = mq);
        const {
          epoch: Bq,
          range: Wq
        } = this, Nq = this.Oa / 2, aq = Nq * Math.sqrt(3), Vq = qq.data, dq = qq.length;
        let jq = 0;
        for (let Oq = 0; Oq < dq; Oq++) {
          const qq = Vq[Oq],
            Eq = qq._noaFaceGroups;
          if (Eq && (qq._noaFaceEpoch !== Bq || qq._noaFaceMaterial !== qq.material)) {
            qq._noaFaceEpoch = Bq, qq._noaFaceMaterial = qq.material;
            const gq = qq.fn,
              Oq = gq && 1 === gq.length ? gq[0] : null;
            let cq = -1;
            if (mq && Oq && (0, Yq.v)(qq.material)) {
              const gq = qq.position,
                Yq = xq.x - gq.x,
                Oq = xq.y - gq.y,
                mq = xq.z - gq.z,
                Aq = Yq - Nq,
                Bq = Oq - Nq,
                Wq = mq - Nq,
                Vq = Math.sqrt(Aq * Aq + Bq * Bq + Wq * Wq) + aq;
              cq = (0, lq.h)(Eq, Yq, Oq, mq, (0, lq.e)(Vq, uq))
            }
            if (Oq && cq !== qq._noaFaceMask) {
              qq._noaFaceMask = cq;
              let gq = 0,
                lq = Eq[Yq.e]; - 1 !== cq && (lq = Aq(Eq, cq, Wq), gq = Wq[0]), qq._noaFaceCount = lq, Oq.indexStart = 6 * gq, Oq.indexCount = 6 * lq, Oq.setBoundingInfo(qq.yR())
            }
          }
          Eq && 0 === qq._noaFaceCount || (Vq[jq++] = qq)
        }
        qq.length = jq
      }
    }
  },
  37541: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Aq,
      i: () => xq
    });
    const Yq = new WeakSet;
    let lq = 0;
    const Oq = new Set;

    function mq(qq, Eq) {
      qq._data = Eq
    }

    function xq(qq) {
      var Eq, gq;
      (null !== (Eq = null === (gq = qq.getBuffer()) || void 0 === gq ? void 0 : gq.WB) && void 0 !== Eq ? Eq : 0) > 0 && (Yq.add(qq), 0 === lq ? mq(qq, null) : Oq.add(qq))
    }

    function Aq(qq) {
      lq++;
      for (const gq of function(qq) {
          const Eq = new Set;
          for (const lq of qq) {
            const qq = lq.geometry;
            for (const lq of Object.values(null !== (gq = null === qq || void 0 === qq ? void 0 : qq.getVertexBuffers()) && void 0 !== gq ? gq : {})) {
              var gq;
              const qq = lq.getWrapperBuffer();
              Yq.has(qq) && Eq.add(qq)
            }
          }
          return Eq
        }(qq)) gq.getData() || cq(gq), Oq.add(gq);
      let Eq = !0;
      return () => {
        if (Eq && (Eq = !1, lq--, 0 === lq)) {
          for (const qq of Oq) mq(qq, null);
          Oq.clear()
        }
      }
    }

    function cq(qq) {
      const Eq = qq.getBuffer();
      if (!Eq || !(Eq.WB > 0)) return;
      const gq = qq._engine,
        Yq = new Uint8Array(Eq.WB);
      gq.bindArrayBuffer(Eq), gq._gl.getBufferSubData(gq._gl.ARRAY_BUFFER, 0, Yq), gq._resetVertexBufferBinding(), mq(qq, Yq)
    }
  },
  37557: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => mq,
      e: () => Oq,
      i: () => Aq,
      m: () => Yq,
      p: () => xq,
      s: () => lq,
      v: () => cq
    });
    const Yq = 6,
      lq = [0, 2, 4, 1, 3, 5, 0, 2],
      Oq = 6,
      mq = [1, 0, 3, 2, 5, 4];
    for (let uq = Oq; uq < lq.length; uq++)
      if (lq[uq] !== lq[uq - Oq]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const xq = lq.length + 1,
      Aq = (() => {
        const qq = [];
        for (let Eq = 0; Eq < Oq; Eq++) qq[lq[Eq]] = Eq;
        return qq
      })();

    function cq(qq) {
      return !!qq && qq.backFaceCulling && (0 === qq.transparencyMode || 1 === qq.transparencyMode)
    }
  },
  37562: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => xq,
      e: () => Aq,
      g: () => uq,
      h: () => cq,
      k: () => aq
    });
    var Yq = gq(37557);
    const lq = 1 / 16,
      Oq = 1 / 64,
      mq = 2048;
    Yq.m;

    function xq(qq, Eq, gq) {
      return Math.min(Math.abs(qq[0] * Eq), Math.abs(qq[5] * gq)) / 2
    }

    function Aq(qq, Eq) {
      return lq + Oq * qq * qq / Eq
    }

    function cq(qq, Eq, gq, lq, Oq) {
      const mq = Yq.p;
      return uq(qq[mq], qq[mq + 1], qq[mq + 2], qq[mq + 3], qq[mq + 4], qq[mq + 5], Eq, gq, lq, Oq)
    }

    function uq(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq) {
      return (mq <= qq - cq ? 0 : 1) | (mq >= Eq + cq ? 0 : 2) | (xq <= gq - cq ? 0 : 4) | (xq >= Yq + cq ? 0 : 8) | (Aq <= lq - cq ? 0 : 16) | (Aq >= Oq + cq ? 0 : 32)
    }
    const Bq = (() => {
        const qq = [];
        for (let Eq = 0; Eq < Yq.s.length; Eq++) {
          let gq = 0;
          for (let lq = Eq + 1; lq <= Yq.s.length; lq++) {
            const Oq = 1 << Yq.s[lq - 1];
            if (gq & Oq) break;
            gq |= Oq, qq.push({
              start: Eq,
              end: lq,
              jE: gq
            })
          }
        }
        return qq
      })(),
      Wq = [];

    function Nq(qq, Eq) {
      const gq = Yq.i[Eq];
      return qq[gq + 1] - qq[gq]
    }

    function aq(qq, Eq, gq) {
      let lq = 0;
      for (let mq = 0; mq < Yq.m; mq++) Nq(qq, mq) > 0 && (lq |= 1 << mq);
      if (0 === (Eq &= lq)) return 0;
      if (Eq === lq) return gq[0] = 0, gq[1] = qq[Yq.e], 1;
      let Oq = null,
        xq = 1 / 0;
      for (const cq of function(qq) {
          let Eq = Wq[qq];
          if (Eq) return Eq;
          const gq = new Map,
            Yq = (qq, Eq) => {
              const Yq = 4 * qq + Eq.length / 2;
              gq.has(Yq) || gq.set(Yq, {
                jE: qq,
                windows: Eq
              })
            };
          for (const Oq of Bq)
            if ((Oq.jE & qq) === qq && Yq(Oq.jE, [Oq.start, Oq.end]), 0 !== (Oq.jE & qq))
              for (const Eq of Bq) Eq.start < Oq.end || 0 !== (Oq.jE & Eq.jE) || 0 === (Eq.jE & qq) || ((Oq.jE | Eq.jE) & qq) !== qq || Yq(Oq.jE | Eq.jE, [Oq.start, Oq.end, Eq.start, Eq.end]);
          const lq = [...gq.values()];
          return Eq = lq.filter((qq => !lq.some((Eq => Eq !== qq && (Eq.jE & qq.jE) === Eq.jE && Eq.windows.length <= qq.windows.length)))), Wq[qq] = Eq, Eq
        }(Eq)) {
        let gq = (cq.windows.length / 2 - 1) * mq;
        const Aq = cq.jE & ~Eq & lq;
        for (let Eq = 0; Eq < Yq.m; Eq++) Aq & 1 << Eq && (gq += Nq(qq, Eq));
        gq < xq && (Oq = cq, xq = gq)
      }
      const Aq = Oq.windows;
      for (let Yq = 0; Yq < Aq.length; Yq += 2) {
        const Eq = qq[Aq[Yq]];
        gq[Yq] = Eq, gq[Yq + 1] = qq[Aq[Yq + 1]] - Eq
      }
      return Aq.length / 2
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);