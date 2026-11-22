export const id = 234;
export const ids = [234];
export const modules = {
  40655: (kk, ek, ik) => {
    ik.d(ek, {
      noaDevTools: () => Kk
    });
    var Dk = ik(37160),
      fk = ik(37135),
      Sk = ik(2704),
      bk = ik(1688);

    function rk(kk) {
      const {
        yH: ek
      } = kk, ik = ek.engine, Dk = {
        width: ik.getRenderWidth(),
        height: ik.getRenderHeight()
      };
      return {
        canvas: ik.getRenderingCanvas(),
        maxTextureSize: ik.getCaps().maxTextureSize,
        drawing: () => !kk.FY,
        resize: (kk, ek) => {
          ik.setSize(kk, ek)
        },
        restoreSize: () => {
          ik.setSize(Dk.width, Dk.height), ek.resize()
        },
        onFrameDrawn: ek => (kk.on("afterRender", ek), () => {
          kk.off("afterRender", ek)
        })
      }
    }
    var Pk = ik(40569),
      mk = ik(33664);

    function Mk(kk, ek) {
      let {
        width: mk,
        height: Mk,
        colouring: Kk
      } = ek;
      const xk = "normals" === Kk,
        nk = "depth" === Kk;
      return new Promise((ek => {
        try {
          const Uk = (0, Sk.e)();
          if (Uk.yH.YH) return "screenshot" !== kk || null !== Kk ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void ek()) : void(0, Pk.d)(rk(Uk), mk, Mk).finally(ek);
          const Hk = Uk.yH.engine,
            wk = Uk.yH.XF(),
            lk = mk,
            pk = Mk;
          Promise.all([Promise.all([ik.e(250), ik.e(251), ik.e(231)]).then((() => ik(60655))), Promise.all([ik.e(230), ik.e(229), ik.e(250), ik.e(251), ik.e(248), ik.e(252), ik.e(255), ik.e(310), ik.e(235)]).then((() => ik(60658))), Promise.all([ik.e(230), ik.e(229), ik.e(250), ik.e(251), ik.e(248), ik.e(258), ik.e(252), ik.e(260), ik.e(237)]).then((() => ik(60665))), ik.e(351).then((() => ik(60672))), Promise.all([ik.e(229), ik.e(225)]).then((() => ik(36690))), ik.e(249).then((() => ik(60674))), ik.e(232).then((() => ik(60682)))]).then((Sk => {
            const {
              CreateScreenshotUsingRenderTarget: rk
            } = Sk[1], {
              ShaderMaterial: Pk
            } = Sk[2], {
              ShaderLanguage: mk
            } = Sk[3], {
              eH: Mk
            } = Sk[4], {
              registerDevtoolsShader: Kk
            } = Sk[6], Uk = mk.GLSL, yk = new Map, Yk = wk.meshes.filter((kk => kk.material));
            let Lk = !1,
              Ck = null;

            function Ak() {
              var kk;
              Lk && (Lk = !1, (0, Dk.d)(wk.meshes, !1)), null === (kk = Ck) || void 0 === kk || kk(), Ck = null, Yk.forEach((kk => {
                const ek = yk.get(kk);
                ek && (kk.material = ek)
              }))
            }
            if (xk) {
              const kk = [],
                ek = [];
              Yk.forEach((ik => {
                const Dk = ik.name.toLowerCase(),
                  fk = ik.hq().boundingBox.center,
                  Sk = wk.activeCamera.position.subtract(fk).length();
                Dk.includes("sky") || Dk.includes("background") || Dk.includes("environment") || Sk > 1e3 ? ek.push(ik) : kk.push(ik)
              })), Kk("devtoolsNormal", Uk);
              const ik = new Pk("normalMaterial", wk, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: Uk
              });
              Kk("devtoolsWhite", Uk);
              const Dk = new Pk("whiteMaterial", wk, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: Uk
              });
              kk.forEach((kk => {
                yk.set(kk, kk.material), kk.material = ik
              })), ek.forEach((kk => {
                yk.set(kk, kk.material), kk.material = Dk
              }))
            } else if (nk) {
              Kk("devtoolsDepth", Uk);
              const kk = wk.activeCamera.position;
              let ek = 0,
                ik = 1 / 0;
              Yk.forEach((Dk => {
                const fk = Dk.name.toLowerCase();
                if (fk.includes("sky") || fk.includes("background") || fk.includes("environment")) return;
                const Sk = Dk.hq().boundingBox.center,
                  bk = Mk.TransformCoordinates(Sk, Dk.getWorldMatrix()),
                  rk = kk.subtract(bk).length();
                rk > 1e3 || (ek = Math.max(ek, rk), ik = Math.min(ik, rk))
              }));
              const Dk = ek - ik;
              ek += .1 * Dk, ik = Math.max(0, ik - .1 * Dk), console.log(`Depth range: min=${ik.toFixed(2)}, max=${ek.toFixed(2)}, range=${Dk.toFixed(2)}`), Dk < 1 && (ek = ik + 10);
              const fk = new Pk("depthMaterial", wk, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: Uk
              });
              fk.setVector3("cameraPosition", kk), fk.setFloat("maxDepth", ek), fk.setFloat("minDepth", ik), Yk.forEach((kk => {
                yk.set(kk, kk.material), kk.material = fk
              }))
            }
            if ((0, Dk.d)(wk.meshes, !0), Lk = !0, "glb" === kk && (Ck = (0, fk.c)(wk.meshes)), "screenshot" === kk) {
              let kk = `bloxd-screenshot-${lk}x${pk}-${Date.now()}.png`;
              xk ? kk = `bloxd-screenshot-normals-${lk}x${pk}-${Date.now()}.png` : nk && (kk = `bloxd-screenshot-depth-${lk}x${pk}-${Date.now()}.png`), rk(Hk, wk.activeCamera, {
                width: lk,
                height: pk
              }, (function(ik) {
                Ak(), fetch(ik).then((function(kk) {
                  return kk.blob()
                })).then((function(ik) {
                  (0, bk.downloadBlob)(ik, kk), ek()
                })).catch((function(kk) {
                  console.error("Error processing screenshot:", kk), ek()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), Ak(), ek()
              }))
            } else {
              let kk = "bw";
              xk ? kk = "scene-normals" : nk && (kk = "scene-depth"), xk || nk ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: kk
                  } = await Promise.all([ik.e(230), ik.e(229), ik.e(250), ik.e(251), ik.e(248), ik.e(258), ik.e(257), ik.e(236)]).then((() => ik(39829))), {
                    Color3: ek
                  } = await Promise.all([ik.e(230), ik.e(233)]).then((() => ik(36868))), Dk = [], fk = [];
                  if (Yk.forEach((kk => {
                      const ek = kk.name.toLowerCase(),
                        ik = kk.hq().boundingBox.center,
                        Sk = wk.activeCamera.position.subtract(ik).length();
                      ek.includes("sky") || ek.includes("background") || ek.includes("environment") || Sk > 1e3 ? fk.push(kk) : Dk.push(kk)
                    })), xk) Dk.forEach(((ik, Dk) => {
                    const fk = ik.getVerticesData("normal");
                    if (fk) {
                      const Sk = [];
                      for (let kk = 0; kk < fk.length; kk += 3) {
                        const ek = Math.abs(fk[kk]),
                          ik = Math.abs(fk[kk + 1]),
                          Dk = Math.abs(fk[kk + 2]);
                        Sk.push(ek, ik, Dk, 1)
                      }
                      ik.setVerticesData("color", Sk);
                      const bk = new kk(`vertexColorMat_${Dk}`, wk);
                      bk.disableLighting = !0, bk.emissiveColor = new ek(1, 1, 1), bk.specularColor = new ek(0, 0, 0), ik.material = bk
                    }
                  })), fk.forEach(((ik, Dk) => {
                    const fk = ik.getVerticesData("position");
                    if (fk) {
                      const Sk = [],
                        bk = fk.length / 3;
                      for (let kk = 0; kk < bk; kk++) Sk.push(1, 1, 1, 1);
                      ik.setVerticesData("color", Sk);
                      const rk = new kk(`whiteMat_${Dk}`, wk);
                      rk.disableLighting = !0, rk.emissiveColor = new ek(1, 1, 1), rk.specularColor = new ek(0, 0, 0), ik.material = rk
                    }
                  }));
                  else if (nk) {
                    const ik = wk.activeCamera.position;
                    let fk = 0,
                      Sk = 1 / 0;
                    Dk.forEach((kk => {
                      const ek = kk.hq().boundingBox.center,
                        Dk = Mk.TransformCoordinates(ek, kk.getWorldMatrix()),
                        bk = ik.subtract(Dk).length();
                      fk = Math.max(fk, bk), Sk = Math.min(Sk, bk)
                    }));
                    const bk = fk - Sk;
                    fk += .1 * bk, Sk = Math.max(0, Sk - .1 * bk), bk < 1 && (fk = Sk + 10), Yk.forEach(((Dk, bk) => {
                      const rk = Dk.name.toLowerCase(),
                        Pk = Dk.hq().boundingBox.center,
                        mk = Mk.TransformCoordinates(Pk, Dk.getWorldMatrix()),
                        Kk = ik.subtract(mk).length();
                      if (!(rk.includes("sky") || rk.includes("background") || rk.includes("environment") || Kk > 1e3)) {
                        const ik = 1 - Math.min(Math.max((Kk - Sk) / (fk - Sk), 0), 1),
                          rk = new kk(`depthMat_${bk}`, wk);
                        rk.diffuseColor = new ek(ik, ik, ik), rk.specularColor = new ek(0, 0, 0), Dk.material = rk
                      }
                    }))
                  }
                })().then((() => Promise.all([ik.e(230), ik.e(229), ik.e(250), ik.e(251), ik.e(248), ik.e(258), ik.e(252), ik.e(257), ik.e(255), ik.e(247), ik.e(260), ik.e(272), ik.e(310), ik.e(242), ik.e(259), ik.e(228)]).then((() => ik(60689))))).then((ek => ek.GLTF2Export.GLBAsync(wk, kk))).then((kk => {
                  Ak(), kk.downloadFiles(), ek()
                })).catch((kk => {
                  console.error("Error exporting GLB:", kk), Ak(), ek()
                }))
              }), 100) : Promise.all([ik.e(230), ik.e(229), ik.e(250), ik.e(251), ik.e(248), ik.e(258), ik.e(252), ik.e(257), ik.e(255), ik.e(247), ik.e(260), ik.e(272), ik.e(310), ik.e(242), ik.e(259), ik.e(228)]).then((() => ik(60689))).then((ik => {
                ik.GLTF2Export.GLBAsync(wk, kk).then((kk => {
                  Ak(), kk.downloadFiles(), ek()
                })).catch((kk => {
                  console.error("Error exporting GLB:", kk), Ak(), ek()
                }))
              })).catch((kk => {
                console.error("Error importing serializers:", kk), Ak(), ek()
              }))
            }
          })).catch((kk => {
            console.error("Error downloading the scene:", kk), ek()
          }))
        } catch (Uk) {
          console.error("Error taking screenshot:", Uk), ek()
        }
      }))
    }
    const Kk = new class {
      constructor() {
        this.tools = mk.ALL_DEV_TOOLS
      }
      downloadScene(kk, ek) {
        return Mk(kk, ek)
      }
      async setAmbientLightIntensity(kk) {
        const {
          Color3: ek
        } = await Promise.all([ik.e(230), ik.e(233)]).then((() => ik(36868)));
        (0, Sk.e)().yH.XF().ambientColor = ek.FromArray([kk, kk, kk])
      }
    }
  },
  40569: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Pk
    });
    var Dk = ik(1706);
    const fk = 33177600,
      Sk = 3e4;
    let bk = !1;

    function rk(kk, ek, ik) {
      if (!kk.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (bk) return Promise.reject(new Error("A screenshot is already being taken"));
      bk = !0;
      const Dk = function(kk, ek, ik) {
        const Dk = Math.max(1, kk),
          Sk = Math.max(1, ek),
          bk = Math.min(1, ik / Math.max(Dk, Sk), Math.sqrt(fk / (Dk * Sk)));
        return {
          width: Math.max(1, Math.floor(Dk * bk)),
          height: Math.max(1, Math.floor(Sk * bk))
        }
      }(ek, ik, kk.maxTextureSize);
      return kk.resize(Dk.width, Dk.height), new Promise(((ek, ik) => {
        let Dk, fk = 2,
          rk = null;
        const Pk = () => {
          var ek;
          bk = !1, null === (ek = rk) || void 0 === ek || ek(), clearTimeout(Dk), kk.restoreSize()
        };
        Dk = setTimeout((() => {
          Pk(), ik(new Error("No frame was drawn to capture"))
        }), Sk), rk = kk.onFrameDrawn((() => {
          if (fk--, fk > 0) return;
          const {
            canvas: Dk
          } = kk, Sk = {
            width: Dk.width,
            height: Dk.height
          };
          try {
            Dk.toBlob((kk => {
              kk ? ek({
                blob: kk,
                ...Sk
              }) : ik(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (bk) {
            ik(bk)
          } finally {
            Pk()
          }
        }))
      }))
    }
    async function Pk(kk, ek, ik) {
      try {
        const fk = await rk(kk, ek, ik);
        (0, Dk.c)(fk.blob, `bloxd-screenshot-${fk.width}x${fk.height}-${Date.now()}.png`)
      } catch (fk) {
        console.error("Error taking screenshot:", fk)
      }
    }
  },
  37160: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => mk,
      d: () => rk,
      g: () => bk
    });
    var Dk = ik(37152),
      fk = ik(37164);
    let Sk = 0;

    function bk(kk, ek) {
      const ik = kk;
      ik._noaFaceGroups = null !== ek && void 0 !== ek ? ek : null, ik._noaFaceEpoch = -1, ik._noaFaceMask = -1, ik._noaFaceCount = -1, ik._noaFaceMaterial = null;
      const Dk = kk.TY;
      Dk && 1 === Dk.length && (Dk[0].indexStart = 0, Dk[0].indexCount = kk.getTotalIndices())
    }

    function rk(kk, ek) {
      if (ek) {
        Sk++;
        for (const ek of kk) {
          const kk = ek._noaFaceGroups;
          kk && bk(ek, kk)
        }
      } else Sk = Math.max(0, Sk - 1)
    }

    function Pk(kk, ek, ik) {
      let fk = -1,
        Sk = 0;
      for (let bk = 0; bk < Dk.f; bk++) {
        const ik = kk[bk],
          rk = kk[bk + 1];
        rk > ik && ek & 1 << Dk.d[bk] && (fk < 0 && (fk = ik), Sk = rk)
      }
      return fk < 0 ? (ik[0] = 0, ik[1] = 0, 0) : (ik[0] = fk, ik[1] = Sk - fk, Sk - fk)
    }
    class mk {
      constructor(kk, ek) {
        this.oU = kk, this.engine = ek, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(kk, ek) {
        if (!ek) return;
        const ik = ek.getProjectionMatrix().m,
          bk = 0 === Sk && 0 === ik[15],
          rk = ek.globalPosition,
          {
            engine: mk
          } = this,
          Mk = bk ? (0, fk.d)(ik, mk.getRenderWidth(), mk.getRenderHeight()) : 0;
        rk.x === this.eyeX && rk.y === this.eyeY && rk.z === this.eyeZ && Mk === this.focalPx && bk === this.culling || (this.epoch++, this.eyeX = rk.x, this.eyeY = rk.y, this.eyeZ = rk.z, this.focalPx = Mk, this.culling = bk);
        const {
          epoch: Kk,
          range: xk
        } = this, nk = this.oU / 2, Uk = nk * Math.sqrt(3), Hk = kk.data, wk = kk.length;
        let lk = 0;
        for (let Sk = 0; Sk < wk; Sk++) {
          const kk = Hk[Sk],
            ek = kk._noaFaceGroups;
          if (ek && (kk._noaFaceEpoch !== Kk || kk._noaFaceMaterial !== kk.material)) {
            kk._noaFaceEpoch = Kk, kk._noaFaceMaterial = kk.material;
            const ik = kk.TY,
              Sk = ik && 1 === ik.length ? ik[0] : null;
            let mk = -1;
            if (bk && Sk && (0, Dk.s)(kk.material)) {
              const ik = kk.position,
                Dk = rk.x - ik.x,
                Sk = rk.y - ik.y,
                bk = rk.z - ik.z,
                Pk = Dk - nk,
                Kk = Sk - nk,
                xk = bk - nk,
                Hk = Math.sqrt(Pk * Pk + Kk * Kk + xk * xk) + Uk;
              mk = (0, fk.n)(ek, Dk, Sk, bk, (0, fk.h)(Hk, Mk))
            }
            if (Sk && mk !== kk._noaFaceMask) {
              kk._noaFaceMask = mk;
              let ik = 0,
                fk = ek[Dk.f]; - 1 !== mk && (fk = Pk(ek, mk, xk), ik = xk[0]), kk._noaFaceCount = fk, Sk.indexStart = 6 * ik, Sk.indexCount = 6 * fk, Sk.setBoundingInfo(kk.hq())
            }
          }
          ek && 0 === kk._noaFaceCount || (Hk[lk++] = kk)
        }
        kk.length = lk
      }
    }
  },
  37135: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Pk,
      e: () => rk
    });
    const Dk = new WeakSet;
    let fk = 0;
    const Sk = new Set;

    function bk(kk, ek) {
      kk._data = ek
    }

    function rk(kk) {
      var ek, ik;
      (null !== (ek = null === (ik = kk.getBuffer()) || void 0 === ik ? void 0 : ik.vK) && void 0 !== ek ? ek : 0) > 0 && (Dk.add(kk), 0 === fk ? bk(kk, null) : Sk.add(kk))
    }

    function Pk(kk) {
      fk++;
      for (const ik of function(kk) {
          const ek = new Set;
          for (const fk of kk) {
            const kk = fk.geometry;
            for (const fk of Object.values(null !== (ik = null === kk || void 0 === kk ? void 0 : kk.getVertexBuffers()) && void 0 !== ik ? ik : {})) {
              var ik;
              const kk = fk.getWrapperBuffer();
              Dk.has(kk) && ek.add(kk)
            }
          }
          return ek
        }(kk)) ik.getData() || mk(ik), Sk.add(ik);
      let ek = !0;
      return () => {
        if (ek && (ek = !1, fk--, 0 === fk)) {
          for (const kk of Sk) bk(kk, null);
          Sk.clear()
        }
      }
    }

    function mk(kk) {
      const ek = kk.getBuffer();
      if (!ek || !(ek.vK > 0)) return;
      const ik = kk._engine,
        Dk = new Uint8Array(ek.vK);
      ik.bindArrayBuffer(ek), ik._gl.getBufferSubData(ik._gl.ARRAY_BUFFER, 0, Dk), ik._resetVertexBufferBinding(), bk(kk, Dk)
    }
  },
  37152: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => bk,
      f: () => Sk,
      i: () => Pk,
      l: () => Dk,
      o: () => rk,
      q: () => fk,
      s: () => mk
    });
    const Dk = 6,
      fk = [0, 2, 4, 1, 3, 5, 0, 2],
      Sk = 6,
      bk = [1, 0, 3, 2, 5, 4];
    for (let Mk = Sk; Mk < fk.length; Mk++)
      if (fk[Mk] !== fk[Mk - Sk]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const rk = fk.length + 1,
      Pk = (() => {
        const kk = [];
        for (let ek = 0; ek < Sk; ek++) kk[fk[ek]] = ek;
        return kk
      })();

    function mk(kk) {
      return !!kk && kk.backFaceCulling && (0 === kk.transparencyMode || 1 === kk.transparencyMode)
    }
  },
  37164: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => rk,
      h: () => Pk,
      l: () => Mk,
      n: () => mk,
      p: () => Uk
    });
    var Dk = ik(37152);
    const fk = 1 / 16,
      Sk = 1 / 64,
      bk = 2048;
    Dk.l;

    function rk(kk, ek, ik) {
      return Math.min(Math.abs(kk[0] * ek), Math.abs(kk[5] * ik)) / 2
    }

    function Pk(kk, ek) {
      return fk + Sk * kk * kk / ek
    }

    function mk(kk, ek, ik, fk, Sk) {
      const bk = Dk.o;
      return Mk(kk[bk], kk[bk + 1], kk[bk + 2], kk[bk + 3], kk[bk + 4], kk[bk + 5], ek, ik, fk, Sk)
    }

    function Mk(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk) {
      return (bk <= kk - mk ? 0 : 1) | (bk >= ek + mk ? 0 : 2) | (rk <= ik - mk ? 0 : 4) | (rk >= Dk + mk ? 0 : 8) | (Pk <= fk - mk ? 0 : 16) | (Pk >= Sk + mk ? 0 : 32)
    }
    const Kk = (() => {
        const kk = [];
        for (let ek = 0; ek < Dk.q.length; ek++) {
          let ik = 0;
          for (let fk = ek + 1; fk <= Dk.q.length; fk++) {
            const Sk = 1 << Dk.q[fk - 1];
            if (ik & Sk) break;
            ik |= Sk, kk.push({
              start: ek,
              end: fk,
              Qf: ik
            })
          }
        }
        return kk
      })(),
      xk = [];

    function nk(kk, ek) {
      const ik = Dk.i[ek];
      return kk[ik + 1] - kk[ik]
    }

    function Uk(kk, ek, ik) {
      let fk = 0;
      for (let bk = 0; bk < Dk.l; bk++) nk(kk, bk) > 0 && (fk |= 1 << bk);
      if (0 === (ek &= fk)) return 0;
      if (ek === fk) return ik[0] = 0, ik[1] = kk[Dk.f], 1;
      let Sk = null,
        rk = 1 / 0;
      for (const mk of function(kk) {
          let ek = xk[kk];
          if (ek) return ek;
          const ik = new Map,
            Dk = (kk, ek) => {
              const Dk = 4 * kk + ek.length / 2;
              ik.has(Dk) || ik.set(Dk, {
                Qf: kk,
                windows: ek
              })
            };
          for (const Sk of Kk)
            if ((Sk.Qf & kk) === kk && Dk(Sk.Qf, [Sk.start, Sk.end]), 0 !== (Sk.Qf & kk))
              for (const ek of Kk) ek.start < Sk.end || 0 !== (Sk.Qf & ek.Qf) || 0 === (ek.Qf & kk) || ((Sk.Qf | ek.Qf) & kk) !== kk || Dk(Sk.Qf | ek.Qf, [Sk.start, Sk.end, ek.start, ek.end]);
          const fk = [...ik.values()];
          return ek = fk.filter((kk => !fk.some((ek => ek !== kk && (ek.Qf & kk.Qf) === ek.Qf && ek.windows.length <= kk.windows.length)))), xk[kk] = ek, ek
        }(ek)) {
        let ik = (mk.windows.length / 2 - 1) * bk;
        const Pk = mk.Qf & ~ek & fk;
        for (let ek = 0; ek < Dk.l; ek++) Pk & 1 << ek && (ik += nk(kk, ek));
        ik < rk && (Sk = mk, rk = ik)
      }
      const Pk = Sk.windows;
      for (let Dk = 0; Dk < Pk.length; Dk += 2) {
        const ek = kk[Pk[Dk]];
        ik[Dk] = ek, ik[Dk + 1] = kk[Pk[Dk + 1]] - ek
      }
      return Pk.length / 2
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);