export const id = 230;
export const ids = [230];
export const modules = {
  40492: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      noaDevTools: () => Vk
    });
    var Rk = Bk(37206),
      tk = Bk(37192),
      ak = Bk(2626),
      Xk = Bk(1650);

    function bk(kk) {
      const {
        Ly: Fk
      } = kk, Bk = Fk.engine, Rk = {
        width: Bk.getRenderWidth(),
        height: Bk.getRenderHeight()
      };
      return {
        canvas: Bk.getRenderingCanvas(),
        maxTextureSize: Bk.getCaps().maxTextureSize,
        drawing: () => !kk.RY,
        resize: (kk, Fk) => {
          Bk.setSize(kk, Fk)
        },
        restoreSize: () => {
          Bk.setSize(Rk.width, Rk.height), Fk.resize()
        },
        onFrameDrawn: Fk => (kk.on("afterRender", Fk), () => {
          kk.off("afterRender", Fk)
        })
      }
    }
    var wk = Bk(40467),
      dk = Bk(8891);

    function sk(kk, Fk) {
      let {
        width: dk,
        height: sk,
        colouring: Vk
      } = Fk;
      const Jk = "normals" === Vk,
        Ak = "depth" === Vk;
      return new Promise((Fk => {
        try {
          const ek = (0, ak.d)();
          if (ek.Ly.Oy) return "screenshot" !== kk || null !== Vk ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void Fk()) : void(0, wk.b)(bk(ek), dk, sk).finally(Fk);
          const yk = ek.Ly.engine,
            fk = ek.Ly.XN(),
            mk = dk,
            Wk = sk;
          Promise.all([Promise.all([Bk.e(244), Bk.e(245), Bk.e(227)]).then((() => Bk(60903))), Promise.all([Bk.e(226), Bk.e(225), Bk.e(244), Bk.e(245), Bk.e(242), Bk.e(246), Bk.e(249), Bk.e(301), Bk.e(231)]).then((() => Bk(60912))), Promise.all([Bk.e(226), Bk.e(225), Bk.e(244), Bk.e(245), Bk.e(242), Bk.e(252), Bk.e(246), Bk.e(254), Bk.e(233)]).then((() => Bk(60917))), Bk.e(344).then((() => Bk(60921))), Promise.all([Bk.e(225), Bk.e(221)]).then((() => Bk(36754))), Bk.e(243).then((() => Bk(60923))), Bk.e(228).then((() => Bk(60932)))]).then((ak => {
            const {
              CreateScreenshotUsingRenderTarget: bk
            } = ak[1], {
              ShaderMaterial: wk
            } = ak[2], {
              ShaderLanguage: dk
            } = ak[3], {
              Qe: sk
            } = ak[4], {
              registerDevtoolsShader: Vk
            } = ak[6], ek = dk.GLSL, vk = new Map, ik = fk.meshes.filter((kk => kk.material));
            let Yk = !1,
              Lk = null;

            function Ok() {
              var kk;
              Yk && (Yk = !1, (0, Rk.g)(fk.meshes, !1)), null === (kk = Lk) || void 0 === kk || kk(), Lk = null, ik.forEach((kk => {
                const Fk = vk.get(kk);
                Fk && (kk.material = Fk)
              }))
            }
            if (Jk) {
              const kk = [],
                Fk = [];
              ik.forEach((Bk => {
                const Rk = Bk.name.toLowerCase(),
                  tk = Bk.ZH().boundingBox.center,
                  ak = fk.activeCamera.position.subtract(tk).length();
                Rk.includes("sky") || Rk.includes("background") || Rk.includes("environment") || ak > 1e3 ? Fk.push(Bk) : kk.push(Bk)
              })), Vk("devtoolsNormal", ek);
              const Bk = new wk("normalMaterial", fk, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: ek
              });
              Vk("devtoolsWhite", ek);
              const Rk = new wk("whiteMaterial", fk, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: ek
              });
              kk.forEach((kk => {
                vk.set(kk, kk.material), kk.material = Bk
              })), Fk.forEach((kk => {
                vk.set(kk, kk.material), kk.material = Rk
              }))
            } else if (Ak) {
              Vk("devtoolsDepth", ek);
              const kk = fk.activeCamera.position;
              let Fk = 0,
                Bk = 1 / 0;
              ik.forEach((Rk => {
                const tk = Rk.name.toLowerCase();
                if (tk.includes("sky") || tk.includes("background") || tk.includes("environment")) return;
                const ak = Rk.ZH().boundingBox.center,
                  Xk = sk.TransformCoordinates(ak, Rk.getWorldMatrix()),
                  bk = kk.subtract(Xk).length();
                bk > 1e3 || (Fk = Math.max(Fk, bk), Bk = Math.min(Bk, bk))
              }));
              const Rk = Fk - Bk;
              Fk += .1 * Rk, Bk = Math.max(0, Bk - .1 * Rk), console.log(`Depth range: min=${Bk.toFixed(2)}, max=${Fk.toFixed(2)}, range=${Rk.toFixed(2)}`), Rk < 1 && (Fk = Bk + 10);
              const tk = new wk("depthMaterial", fk, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: ek
              });
              tk.setVector3("cameraPosition", kk), tk.setFloat("maxDepth", Fk), tk.setFloat("minDepth", Bk), ik.forEach((kk => {
                vk.set(kk, kk.material), kk.material = tk
              }))
            }
            if ((0, Rk.g)(fk.meshes, !0), Yk = !0, "glb" === kk && (Lk = (0, tk.e)(fk.meshes)), "screenshot" === kk) {
              let kk = `bloxd-screenshot-${mk}x${Wk}-${Date.now()}.png`;
              Jk ? kk = `bloxd-screenshot-normals-${mk}x${Wk}-${Date.now()}.png` : Ak && (kk = `bloxd-screenshot-depth-${mk}x${Wk}-${Date.now()}.png`), bk(yk, fk.activeCamera, {
                width: mk,
                height: Wk
              }, (function(Bk) {
                Ok(), fetch(Bk).then((function(kk) {
                  return kk.blob()
                })).then((function(Bk) {
                  (0, Xk.downloadBlob)(Bk, kk), Fk()
                })).catch((function(kk) {
                  console.error("Error processing screenshot:", kk), Fk()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), Ok(), Fk()
              }))
            } else {
              let kk = "ef";
              Jk ? kk = "scene-normals" : Ak && (kk = "scene-depth"), Jk || Ak ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: kk
                  } = await Promise.all([Bk.e(226), Bk.e(225), Bk.e(244), Bk.e(245), Bk.e(242), Bk.e(252), Bk.e(251), Bk.e(232)]).then((() => Bk(39674))), {
                    Color3: Fk
                  } = await Promise.all([Bk.e(226), Bk.e(229)]).then((() => Bk(36911))), Rk = [], tk = [];
                  if (ik.forEach((kk => {
                      const Fk = kk.name.toLowerCase(),
                        Bk = kk.ZH().boundingBox.center,
                        ak = fk.activeCamera.position.subtract(Bk).length();
                      Fk.includes("sky") || Fk.includes("background") || Fk.includes("environment") || ak > 1e3 ? tk.push(kk) : Rk.push(kk)
                    })), Jk) Rk.forEach(((Bk, Rk) => {
                    const tk = Bk.getVerticesData("normal");
                    if (tk) {
                      const ak = [];
                      for (let kk = 0; kk < tk.length; kk += 3) {
                        const Fk = Math.abs(tk[kk]),
                          Bk = Math.abs(tk[kk + 1]),
                          Rk = Math.abs(tk[kk + 2]);
                        ak.push(Fk, Bk, Rk, 1)
                      }
                      Bk.setVerticesData("color", ak);
                      const Xk = new kk(`vertexColorMat_${Rk}`, fk);
                      Xk.disableLighting = !0, Xk.emissiveColor = new Fk(1, 1, 1), Xk.specularColor = new Fk(0, 0, 0), Bk.material = Xk
                    }
                  })), tk.forEach(((Bk, Rk) => {
                    const tk = Bk.getVerticesData("position");
                    if (tk) {
                      const ak = [],
                        Xk = tk.length / 3;
                      for (let kk = 0; kk < Xk; kk++) ak.push(1, 1, 1, 1);
                      Bk.setVerticesData("color", ak);
                      const bk = new kk(`whiteMat_${Rk}`, fk);
                      bk.disableLighting = !0, bk.emissiveColor = new Fk(1, 1, 1), bk.specularColor = new Fk(0, 0, 0), Bk.material = bk
                    }
                  }));
                  else if (Ak) {
                    const Bk = fk.activeCamera.position;
                    let tk = 0,
                      ak = 1 / 0;
                    Rk.forEach((kk => {
                      const Fk = kk.ZH().boundingBox.center,
                        Rk = sk.TransformCoordinates(Fk, kk.getWorldMatrix()),
                        Xk = Bk.subtract(Rk).length();
                      tk = Math.max(tk, Xk), ak = Math.min(ak, Xk)
                    }));
                    const Xk = tk - ak;
                    tk += .1 * Xk, ak = Math.max(0, ak - .1 * Xk), Xk < 1 && (tk = ak + 10), ik.forEach(((Rk, Xk) => {
                      const bk = Rk.name.toLowerCase(),
                        wk = Rk.ZH().boundingBox.center,
                        dk = sk.TransformCoordinates(wk, Rk.getWorldMatrix()),
                        Vk = Bk.subtract(dk).length();
                      if (!(bk.includes("sky") || bk.includes("background") || bk.includes("environment") || Vk > 1e3)) {
                        const Bk = 1 - Math.min(Math.max((Vk - ak) / (tk - ak), 0), 1),
                          bk = new kk(`depthMat_${Xk}`, fk);
                        bk.diffuseColor = new Fk(Bk, Bk, Bk), bk.specularColor = new Fk(0, 0, 0), Rk.material = bk
                      }
                    }))
                  }
                })().then((() => Promise.all([Bk.e(226), Bk.e(225), Bk.e(244), Bk.e(245), Bk.e(242), Bk.e(252), Bk.e(246), Bk.e(251), Bk.e(249), Bk.e(241), Bk.e(254), Bk.e(264), Bk.e(301), Bk.e(236), Bk.e(253), Bk.e(224)]).then((() => Bk(60934))))).then((Fk => Fk.GLTF2Export.GLBAsync(fk, kk))).then((kk => {
                  Ok(), kk.downloadFiles(), Fk()
                })).catch((kk => {
                  console.error("Error exporting GLB:", kk), Ok(), Fk()
                }))
              }), 100) : Promise.all([Bk.e(226), Bk.e(225), Bk.e(244), Bk.e(245), Bk.e(242), Bk.e(252), Bk.e(246), Bk.e(251), Bk.e(249), Bk.e(241), Bk.e(254), Bk.e(264), Bk.e(301), Bk.e(236), Bk.e(253), Bk.e(224)]).then((() => Bk(60934))).then((Bk => {
                Bk.GLTF2Export.GLBAsync(fk, kk).then((kk => {
                  Ok(), kk.downloadFiles(), Fk()
                })).catch((kk => {
                  console.error("Error exporting GLB:", kk), Ok(), Fk()
                }))
              })).catch((kk => {
                console.error("Error importing serializers:", kk), Ok(), Fk()
              }))
            }
          })).catch((kk => {
            console.error("Error downloading the scene:", kk), Fk()
          }))
        } catch (ek) {
          console.error("Error taking screenshot:", ek), Fk()
        }
      }))
    }
    const Vk = new class {
      constructor() {
        this.tools = dk.ALL_DEV_TOOLS
      }
      downloadScene(kk, Fk) {
        return sk(kk, Fk)
      }
      async setAmbientLightIntensity(kk) {
        const {
          Color3: Fk
        } = await Promise.all([Bk.e(226), Bk.e(229)]).then((() => Bk(36911)));
        (0, ak.d)().Ly.XN().ambientColor = Fk.FromArray([kk, kk, kk])
      }
    }
  },
  40467: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => wk
    });
    var Rk = Bk(1663);
    const tk = 33177600,
      ak = 3e4;
    let Xk = !1;

    function bk(kk, Fk, Bk) {
      if (!kk.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (Xk) return Promise.reject(new Error("A screenshot is already being taken"));
      Xk = !0;
      const Rk = function(kk, Fk, Bk) {
        const Rk = Math.max(1, kk),
          ak = Math.max(1, Fk),
          Xk = Math.min(1, Bk / Math.max(Rk, ak), Math.sqrt(tk / (Rk * ak)));
        return {
          width: Math.max(1, Math.floor(Rk * Xk)),
          height: Math.max(1, Math.floor(ak * Xk))
        }
      }(Fk, Bk, kk.maxTextureSize);
      return kk.resize(Rk.width, Rk.height), new Promise(((Fk, Bk) => {
        let Rk, tk = 2,
          bk = null;
        const wk = () => {
          var Fk;
          Xk = !1, null === (Fk = bk) || void 0 === Fk || Fk(), clearTimeout(Rk), kk.restoreSize()
        };
        Rk = setTimeout((() => {
          wk(), Bk(new Error("No frame was drawn to capture"))
        }), ak), bk = kk.onFrameDrawn((() => {
          if (tk--, tk > 0) return;
          const {
            canvas: Rk
          } = kk, ak = {
            width: Rk.width,
            height: Rk.height
          };
          try {
            Rk.toBlob((kk => {
              kk ? Fk({
                blob: kk,
                ...ak
              }) : Bk(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (Xk) {
            Bk(Xk)
          } finally {
            wk()
          }
        }))
      }))
    }
    async function wk(kk, Fk, Bk) {
      try {
        const tk = await bk(kk, Fk, Bk);
        (0, Rk.e)(tk.blob, `bloxd-screenshot-${tk.width}x${tk.height}-${Date.now()}.png`)
      } catch (tk) {
        console.error("Error taking screenshot:", tk)
      }
    }
  },
  37206: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => dk,
      g: () => bk,
      h: () => Xk
    });
    var Rk = Bk(37200),
      tk = Bk(37214);
    let ak = 0;

    function Xk(kk, Fk) {
      const Bk = kk;
      Bk._noaFaceGroups = null !== Fk && void 0 !== Fk ? Fk : null, Bk._noaFaceEpoch = -1, Bk._noaFaceMask = -1, Bk._noaFaceCount = -1, Bk._noaFaceMaterial = null;
      const Rk = kk.AY;
      Rk && 1 === Rk.length && (Rk[0].indexStart = 0, Rk[0].indexCount = kk.getTotalIndices())
    }

    function bk(kk, Fk) {
      if (Fk) {
        ak++;
        for (const Fk of kk) {
          const kk = Fk._noaFaceGroups;
          kk && Xk(Fk, kk)
        }
      } else ak = Math.max(0, ak - 1)
    }

    function wk(kk, Fk, Bk) {
      let tk = -1,
        ak = 0;
      for (let Xk = 0; Xk < Rk.d; Xk++) {
        const Bk = kk[Xk],
          bk = kk[Xk + 1];
        bk > Bk && Fk & 1 << Rk.c[Xk] && (tk < 0 && (tk = Bk), ak = bk)
      }
      return tk < 0 ? (Bk[0] = 0, Bk[1] = 0, 0) : (Bk[0] = tk, Bk[1] = ak - tk, ak - tk)
    }
    class dk {
      constructor(kk, Fk) {
        this.Ze = kk, this.engine = Fk, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(kk, Fk) {
        if (!Fk) return;
        const Bk = Fk.getProjectionMatrix().m,
          Xk = 0 === ak && 0 === Bk[15],
          bk = Fk.globalPosition,
          {
            engine: dk
          } = this,
          sk = Xk ? (0, tk.b)(Bk, dk.getRenderWidth(), dk.getRenderHeight()) : 0;
        bk.x === this.eyeX && bk.y === this.eyeY && bk.z === this.eyeZ && sk === this.focalPx && Xk === this.culling || (this.epoch++, this.eyeX = bk.x, this.eyeY = bk.y, this.eyeZ = bk.z, this.focalPx = sk, this.culling = Xk);
        const {
          epoch: Vk,
          range: Jk
        } = this, Ak = this.Ze / 2, ek = Ak * Math.sqrt(3), yk = kk.data, fk = kk.length;
        let mk = 0;
        for (let ak = 0; ak < fk; ak++) {
          const kk = yk[ak],
            Fk = kk._noaFaceGroups;
          if (Fk && (kk._noaFaceEpoch !== Vk || kk._noaFaceMaterial !== kk.material)) {
            kk._noaFaceEpoch = Vk, kk._noaFaceMaterial = kk.material;
            const Bk = kk.AY,
              ak = Bk && 1 === Bk.length ? Bk[0] : null;
            let dk = -1;
            if (Xk && ak && (0, Rk.u)(kk.material)) {
              const Bk = kk.position,
                Rk = bk.x - Bk.x,
                ak = bk.y - Bk.y,
                Xk = bk.z - Bk.z,
                wk = Rk - Ak,
                Vk = ak - Ak,
                Jk = Xk - Ak,
                yk = Math.sqrt(wk * wk + Vk * Vk + Jk * Jk) + ek;
              dk = (0, tk.l)(Fk, Rk, ak, Xk, (0, tk.e)(yk, sk))
            }
            if (ak && dk !== kk._noaFaceMask) {
              kk._noaFaceMask = dk;
              let Bk = 0,
                tk = Fk[Rk.d]; - 1 !== dk && (tk = wk(Fk, dk, Jk), Bk = Jk[0]), kk._noaFaceCount = tk, ak.indexStart = 6 * Bk, ak.indexCount = 6 * tk, ak.setBoundingInfo(kk.ZH())
            }
          }
          Fk && 0 === kk._noaFaceCount || (yk[mk++] = kk)
        }
        kk.length = mk
      }
    }
  },
  37192: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => wk,
      i: () => bk
    });
    const Rk = new WeakSet;
    let tk = 0;
    const ak = new Set;

    function Xk(kk, Fk) {
      kk._data = Fk
    }

    function bk(kk) {
      var Fk, Bk;
      (null !== (Fk = null === (Bk = kk.getBuffer()) || void 0 === Bk ? void 0 : Bk.KV) && void 0 !== Fk ? Fk : 0) > 0 && (Rk.add(kk), 0 === tk ? Xk(kk, null) : ak.add(kk))
    }

    function wk(kk) {
      tk++;
      for (const Bk of function(kk) {
          const Fk = new Set;
          for (const tk of kk) {
            const kk = tk.geometry;
            for (const tk of Object.values(null !== (Bk = null === kk || void 0 === kk ? void 0 : kk.getVertexBuffers()) && void 0 !== Bk ? Bk : {})) {
              var Bk;
              const kk = tk.getWrapperBuffer();
              Rk.has(kk) && Fk.add(kk)
            }
          }
          return Fk
        }(kk)) Bk.getData() || dk(Bk), ak.add(Bk);
      let Fk = !0;
      return () => {
        if (Fk && (Fk = !1, tk--, 0 === tk)) {
          for (const kk of ak) Xk(kk, null);
          ak.clear()
        }
      }
    }

    function dk(kk) {
      const Fk = kk.getBuffer();
      if (!Fk || !(Fk.KV > 0)) return;
      const Bk = kk._engine,
        Rk = new Uint8Array(Fk.KV);
      Bk.bindArrayBuffer(Fk), Bk._gl.getBufferSubData(Bk._gl.ARRAY_BUFFER, 0, Rk), Bk._resetVertexBufferBinding(), Xk(kk, Rk)
    }
  },
  37200: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Xk,
      d: () => ak,
      h: () => wk,
      k: () => Rk,
      o: () => bk,
      q: () => tk,
      u: () => dk
    });
    const Rk = 6,
      tk = [0, 2, 4, 1, 3, 5, 0, 2],
      ak = 6,
      Xk = [1, 0, 3, 2, 5, 4];
    for (let sk = ak; sk < tk.length; sk++)
      if (tk[sk] !== tk[sk - ak]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const bk = tk.length + 1,
      wk = (() => {
        const kk = [];
        for (let Fk = 0; Fk < ak; Fk++) kk[tk[Fk]] = Fk;
        return kk
      })();

    function dk(kk) {
      return !!kk && kk.backFaceCulling && (0 === kk.transparencyMode || 1 === kk.transparencyMode)
    }
  },
  37214: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => bk,
      e: () => wk,
      h: () => sk,
      l: () => dk,
      p: () => ek
    });
    var Rk = Bk(37200);
    const tk = 1 / 16,
      ak = 1 / 64,
      Xk = 2048;
    Rk.k;

    function bk(kk, Fk, Bk) {
      return Math.min(Math.abs(kk[0] * Fk), Math.abs(kk[5] * Bk)) / 2
    }

    function wk(kk, Fk) {
      return tk + ak * kk * kk / Fk
    }

    function dk(kk, Fk, Bk, tk, ak) {
      const Xk = Rk.o;
      return sk(kk[Xk], kk[Xk + 1], kk[Xk + 2], kk[Xk + 3], kk[Xk + 4], kk[Xk + 5], Fk, Bk, tk, ak)
    }

    function sk(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk) {
      return (Xk <= kk - dk ? 0 : 1) | (Xk >= Fk + dk ? 0 : 2) | (bk <= Bk - dk ? 0 : 4) | (bk >= Rk + dk ? 0 : 8) | (wk <= tk - dk ? 0 : 16) | (wk >= ak + dk ? 0 : 32)
    }
    const Vk = (() => {
        const kk = [];
        for (let Fk = 0; Fk < Rk.q.length; Fk++) {
          let Bk = 0;
          for (let tk = Fk + 1; tk <= Rk.q.length; tk++) {
            const ak = 1 << Rk.q[tk - 1];
            if (Bk & ak) break;
            Bk |= ak, kk.push({
              start: Fk,
              end: tk,
              da: Bk
            })
          }
        }
        return kk
      })(),
      Jk = [];

    function Ak(kk, Fk) {
      const Bk = Rk.h[Fk];
      return kk[Bk + 1] - kk[Bk]
    }

    function ek(kk, Fk, Bk) {
      let tk = 0;
      for (let Xk = 0; Xk < Rk.k; Xk++) Ak(kk, Xk) > 0 && (tk |= 1 << Xk);
      if (0 === (Fk &= tk)) return 0;
      if (Fk === tk) return Bk[0] = 0, Bk[1] = kk[Rk.d], 1;
      let ak = null,
        bk = 1 / 0;
      for (const dk of function(kk) {
          let Fk = Jk[kk];
          if (Fk) return Fk;
          const Bk = new Map,
            Rk = (kk, Fk) => {
              const Rk = 4 * kk + Fk.length / 2;
              Bk.has(Rk) || Bk.set(Rk, {
                da: kk,
                windows: Fk
              })
            };
          for (const ak of Vk)
            if ((ak.da & kk) === kk && Rk(ak.da, [ak.start, ak.end]), 0 !== (ak.da & kk))
              for (const Fk of Vk) Fk.start < ak.end || 0 !== (ak.da & Fk.da) || 0 === (Fk.da & kk) || ((ak.da | Fk.da) & kk) !== kk || Rk(ak.da | Fk.da, [ak.start, ak.end, Fk.start, Fk.end]);
          const tk = [...Bk.values()];
          return Fk = tk.filter((kk => !tk.some((Fk => Fk !== kk && (Fk.da & kk.da) === Fk.da && Fk.windows.length <= kk.windows.length)))), Jk[kk] = Fk, Fk
        }(Fk)) {
        let Bk = (dk.windows.length / 2 - 1) * Xk;
        const wk = dk.da & ~Fk & tk;
        for (let Fk = 0; Fk < Rk.k; Fk++) wk & 1 << Fk && (Bk += Ak(kk, Fk));
        Bk < bk && (ak = dk, bk = Bk)
      }
      const wk = ak.windows;
      for (let Rk = 0; Rk < wk.length; Rk += 2) {
        const Fk = kk[wk[Rk]];
        Bk[Rk] = Fk, Bk[Rk + 1] = kk[wk[Rk + 1]] - Fk
      }
      return wk.length / 2
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);