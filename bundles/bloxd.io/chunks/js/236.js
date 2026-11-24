export const id = 236;
export const ids = [236];
export const modules = {
  41079: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      noaDevTools: () => tk
    });
    var Xk = Ik(37592),
      Tk = Ik(37578),
      ik = Ik(2700),
      yk = Ik(1665),
      lk = Ik(40986);

    function ak(kk) {
      const {
        Xw: Fk
      } = kk, Ik = Fk.engine, Xk = {
        width: Ik.getRenderWidth(),
        height: Ik.getRenderHeight()
      };
      return {
        canvas: Ik.getRenderingCanvas(),
        maxTextureSize: Ik.getCaps().maxTextureSize,
        drawing: () => !kk.vx,
        resize: (kk, Fk) => {
          Ik.setSize(kk, Fk)
        },
        restoreSize: () => {
          Ik.setSize(Xk.width, Xk.height), Fk.resize()
        },
        onFrameDrawn: Fk => (kk.on("afterRender", Fk), () => {
          kk.off("afterRender", Fk)
        })
      }
    }
    var qk = Ik(34044);

    function Lk(kk, Fk) {
      let {
        width: qk,
        height: Lk,
        colouring: tk
      } = Fk;
      const Zk = "normals" === tk,
        jk = "depth" === tk;
      return new Promise((Fk => {
        try {
          const ek = (0, ik.e)();
          if (ek.Xw.Tw) return "screenshot" !== kk || null !== tk ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void Fk()) : void(0, lk.f)(ak(ek), qk, Lk).finally(Fk);
          const wk = ek.Xw.engine,
            Hk = ek.Xw.mG(),
            Jk = qk,
            xk = Lk;
          Promise.all([Promise.all([Ik.e(254), Ik.e(255), Ik.e(233)]).then((() => Ik(61268))), Promise.all([Ik.e(232), Ik.e(231), Ik.e(254), Ik.e(255), Ik.e(252), Ik.e(256), Ik.e(259), Ik.e(311), Ik.e(237)]).then((() => Ik(61276))), Promise.all([Ik.e(232), Ik.e(231), Ik.e(254), Ik.e(255), Ik.e(252), Ik.e(262), Ik.e(256), Ik.e(264), Ik.e(239)]).then((() => Ik(61279))), Ik.e(352).then((() => Ik(61282))), Promise.all([Ik.e(231), Ik.e(227)]).then((() => Ik(37144))), Ik.e(253).then((() => Ik(61285))), Ik.e(234).then((() => Ik(61288)))]).then((ik => {
            const {
              CreateScreenshotUsingRenderTarget: lk
            } = ik[1], {
              ShaderMaterial: ak
            } = ik[2], {
              ShaderLanguage: qk
            } = ik[3], {
              Ge: Lk
            } = ik[4], {
              registerDevtoolsShader: tk
            } = ik[6], ek = qk.GLSL, Pk = new Map, Kk = Hk.meshes.filter((kk => kk.material));
            let Qk = !1,
              sk = null;

            function Vk() {
              var kk;
              Qk && (Qk = !1, (0, Xk.f)(Hk.meshes, !1)), null === (kk = sk) || void 0 === kk || kk(), sk = null, Kk.forEach((kk => {
                const Fk = Pk.get(kk);
                Fk && (kk.material = Fk)
              }))
            }
            if (Zk) {
              const kk = [],
                Fk = [];
              Kk.forEach((Ik => {
                const Xk = Ik.name.toLowerCase(),
                  Tk = Ik.vR().boundingBox.center,
                  ik = Hk.activeCamera.position.subtract(Tk).length();
                Xk.includes("sky") || Xk.includes("background") || Xk.includes("environment") || ik > 1e3 ? Fk.push(Ik) : kk.push(Ik)
              })), tk("devtoolsNormal", ek);
              const Ik = new ak("normalMaterial", Hk, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: ek
              });
              tk("devtoolsWhite", ek);
              const Xk = new ak("whiteMaterial", Hk, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: ek
              });
              kk.forEach((kk => {
                Pk.set(kk, kk.material), kk.material = Ik
              })), Fk.forEach((kk => {
                Pk.set(kk, kk.material), kk.material = Xk
              }))
            } else if (jk) {
              tk("devtoolsDepth", ek);
              const kk = Hk.activeCamera.position;
              let Fk = 0,
                Ik = 1 / 0;
              Kk.forEach((Xk => {
                const Tk = Xk.name.toLowerCase();
                if (Tk.includes("sky") || Tk.includes("background") || Tk.includes("environment")) return;
                const ik = Xk.vR().boundingBox.center,
                  yk = Lk.TransformCoordinates(ik, Xk.getWorldMatrix()),
                  lk = kk.subtract(yk).length();
                lk > 1e3 || (Fk = Math.max(Fk, lk), Ik = Math.min(Ik, lk))
              }));
              const Xk = Fk - Ik;
              Fk += .1 * Xk, Ik = Math.max(0, Ik - .1 * Xk), console.log(`Depth range: min=${Ik.toFixed(2)}, max=${Fk.toFixed(2)}, range=${Xk.toFixed(2)}`), Xk < 1 && (Fk = Ik + 10);
              const Tk = new ak("depthMaterial", Hk, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: ek
              });
              Tk.setVector3("cameraPosition", kk), Tk.setFloat("maxDepth", Fk), Tk.setFloat("minDepth", Ik), Kk.forEach((kk => {
                Pk.set(kk, kk.material), kk.material = Tk
              }))
            }
            if ((0, Xk.f)(Hk.meshes, !0), Qk = !0, "glb" === kk && (sk = (0, Tk.e)(Hk.meshes)), "screenshot" === kk) {
              let kk = `bloxd-screenshot-${Jk}x${xk}-${Date.now()}.png`;
              Zk ? kk = `bloxd-screenshot-normals-${Jk}x${xk}-${Date.now()}.png` : jk && (kk = `bloxd-screenshot-depth-${Jk}x${xk}-${Date.now()}.png`), lk(wk, Hk.activeCamera, {
                width: Jk,
                height: xk
              }, (function(Ik) {
                Vk(), fetch(Ik).then((function(kk) {
                  return kk.blob()
                })).then((function(Ik) {
                  (0, yk.downloadBlob)(Ik, kk), Fk()
                })).catch((function(kk) {
                  console.error("Error processing screenshot:", kk), Fk()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), Vk(), Fk()
              }))
            } else {
              let kk = "Yw";
              Zk ? kk = "scene-normals" : jk && (kk = "scene-depth"), Zk || jk ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: kk
                  } = await Promise.all([Ik.e(232), Ik.e(231), Ik.e(254), Ik.e(255), Ik.e(252), Ik.e(262), Ik.e(261), Ik.e(238)]).then((() => Ik(40269))), {
                    Color3: Fk
                  } = await Promise.all([Ik.e(232), Ik.e(235)]).then((() => Ik(37327))), Xk = [], Tk = [];
                  if (Kk.forEach((kk => {
                      const Fk = kk.name.toLowerCase(),
                        Ik = kk.vR().boundingBox.center,
                        ik = Hk.activeCamera.position.subtract(Ik).length();
                      Fk.includes("sky") || Fk.includes("background") || Fk.includes("environment") || ik > 1e3 ? Tk.push(kk) : Xk.push(kk)
                    })), Zk) Xk.forEach(((Ik, Xk) => {
                    const Tk = Ik.getVerticesData("normal");
                    if (Tk) {
                      const ik = [];
                      for (let kk = 0; kk < Tk.length; kk += 3) {
                        const Fk = Math.abs(Tk[kk]),
                          Ik = Math.abs(Tk[kk + 1]),
                          Xk = Math.abs(Tk[kk + 2]);
                        ik.push(Fk, Ik, Xk, 1)
                      }
                      Ik.setVerticesData("color", ik);
                      const yk = new kk(`vertexColorMat_${Xk}`, Hk);
                      yk.disableLighting = !0, yk.emissiveColor = new Fk(1, 1, 1), yk.specularColor = new Fk(0, 0, 0), Ik.material = yk
                    }
                  })), Tk.forEach(((Ik, Xk) => {
                    const Tk = Ik.getVerticesData("position");
                    if (Tk) {
                      const ik = [],
                        yk = Tk.length / 3;
                      for (let kk = 0; kk < yk; kk++) ik.push(1, 1, 1, 1);
                      Ik.setVerticesData("color", ik);
                      const lk = new kk(`whiteMat_${Xk}`, Hk);
                      lk.disableLighting = !0, lk.emissiveColor = new Fk(1, 1, 1), lk.specularColor = new Fk(0, 0, 0), Ik.material = lk
                    }
                  }));
                  else if (jk) {
                    const Ik = Hk.activeCamera.position;
                    let Tk = 0,
                      ik = 1 / 0;
                    Xk.forEach((kk => {
                      const Fk = kk.vR().boundingBox.center,
                        Xk = Lk.TransformCoordinates(Fk, kk.getWorldMatrix()),
                        yk = Ik.subtract(Xk).length();
                      Tk = Math.max(Tk, yk), ik = Math.min(ik, yk)
                    }));
                    const yk = Tk - ik;
                    Tk += .1 * yk, ik = Math.max(0, ik - .1 * yk), yk < 1 && (Tk = ik + 10), Kk.forEach(((Xk, yk) => {
                      const lk = Xk.name.toLowerCase(),
                        ak = Xk.vR().boundingBox.center,
                        qk = Lk.TransformCoordinates(ak, Xk.getWorldMatrix()),
                        tk = Ik.subtract(qk).length();
                      if (!(lk.includes("sky") || lk.includes("background") || lk.includes("environment") || tk > 1e3)) {
                        const Ik = 1 - Math.min(Math.max((tk - ik) / (Tk - ik), 0), 1),
                          lk = new kk(`depthMat_${yk}`, Hk);
                        lk.diffuseColor = new Fk(Ik, Ik, Ik), lk.specularColor = new Fk(0, 0, 0), Xk.material = lk
                      }
                    }))
                  }
                })().then((() => Promise.all([Ik.e(232), Ik.e(231), Ik.e(254), Ik.e(255), Ik.e(252), Ik.e(262), Ik.e(256), Ik.e(261), Ik.e(259), Ik.e(251), Ik.e(264), Ik.e(274), Ik.e(311), Ik.e(244), Ik.e(263), Ik.e(230)]).then((() => Ik(61293))))).then((Fk => Fk.GLTF2Export.GLBAsync(Hk, kk))).then((kk => {
                  Vk(), kk.downloadFiles(), Fk()
                })).catch((kk => {
                  console.error("Error exporting GLB:", kk), Vk(), Fk()
                }))
              }), 100) : Promise.all([Ik.e(232), Ik.e(231), Ik.e(254), Ik.e(255), Ik.e(252), Ik.e(262), Ik.e(256), Ik.e(261), Ik.e(259), Ik.e(251), Ik.e(264), Ik.e(274), Ik.e(311), Ik.e(244), Ik.e(263), Ik.e(230)]).then((() => Ik(61293))).then((Ik => {
                Ik.GLTF2Export.GLBAsync(Hk, kk).then((kk => {
                  Vk(), kk.downloadFiles(), Fk()
                })).catch((kk => {
                  console.error("Error exporting GLB:", kk), Vk(), Fk()
                }))
              })).catch((kk => {
                console.error("Error importing serializers:", kk), Vk(), Fk()
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
    const tk = new class {
      constructor() {
        this.tools = qk.ALL_DEV_TOOLS
      }
      downloadScene(kk, Fk) {
        return Lk(kk, Fk)
      }
      async setAmbientLightIntensity(kk) {
        const {
          Color3: Fk
        } = await Promise.all([Ik.e(232), Ik.e(235)]).then((() => Ik(37327)));
        (0, ik.e)().Xw.mG().ambientColor = Fk.FromArray([kk, kk, kk])
      }
      capturePhoto(kk, Fk, Ik) {
        return function(kk, Fk, Ik, Xk) {
          return (0, lk.c)(ak(kk), Fk, Ik, Xk)
        }((0, ik.e)(), kk, Fk, Ik)
      }
    }
  },
  40986: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => lk,
      f: () => ak
    });
    var Xk = Ik(1682);
    const Tk = 33177600,
      ik = 3e4;
    let yk = !1;

    function lk(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: lk = 1,
        type: ak = "image/png",
        quality: qk
      } = Xk;
      if (!kk.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (yk) return Promise.reject(new Error("A screenshot is already being taken"));
      yk = !0;
      const Lk = function(kk, Fk, Ik) {
        const Xk = Math.max(1, kk),
          ik = Math.max(1, Fk),
          yk = Math.min(1, Ik / Math.max(Xk, ik), Math.sqrt(Tk / (Xk * ik)));
        return {
          width: Math.max(1, Math.floor(Xk * yk)),
          height: Math.max(1, Math.floor(ik * yk))
        }
      }(Fk, Ik, kk.maxTextureSize);
      return kk.resize(Lk.width, Lk.height, lk * Lk.width / Math.max(1, Fk)), new Promise(((Fk, Ik) => {
        let Xk, Tk = 2,
          lk = null;
        const Lk = () => {
          var Fk;
          yk = !1, null === (Fk = lk) || void 0 === Fk || Fk(), clearTimeout(Xk), kk.restoreSize()
        };
        Xk = setTimeout((() => {
          Lk(), Ik(new Error("No frame was drawn to capture"))
        }), ik), lk = kk.onFrameDrawn((() => {
          if (Tk--, Tk > 0) return;
          const {
            canvas: Xk
          } = kk, ik = {
            width: Xk.width,
            height: Xk.height
          };
          try {
            Xk.toBlob((kk => {
              kk ? Fk({
                blob: kk,
                ...ik
              }) : Ik(new Error("The canvas gave no image"))
            }), ak, qk)
          } catch (yk) {
            Ik(yk)
          } finally {
            Lk()
          }
        }))
      }))
    }
    async function ak(kk, Fk, Ik) {
      try {
        const Tk = await lk(kk, Fk, Ik);
        (0, Xk.c)(Tk.blob, `bloxd-screenshot-${Tk.width}x${Tk.height}-${Date.now()}.png`)
      } catch (Tk) {
        console.error("Error taking screenshot:", Tk)
      }
    }
  },
  37592: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => qk,
      f: () => lk,
      j: () => yk
    });
    var Xk = Ik(37586),
      Tk = Ik(37600);
    let ik = 0;

    function yk(kk, Fk) {
      const Ik = kk;
      Ik._noaFaceGroups = null !== Fk && void 0 !== Fk ? Fk : null, Ik._noaFaceEpoch = -1, Ik._noaFaceMask = -1, Ik._noaFaceCount = -1, Ik._noaFaceMaterial = null;
      const Xk = kk.lK;
      Xk && 1 === Xk.length && (Xk[0].indexStart = 0, Xk[0].indexCount = kk.getTotalIndices())
    }

    function lk(kk, Fk) {
      if (Fk) {
        ik++;
        for (const Fk of kk) {
          const kk = Fk._noaFaceGroups;
          kk && yk(Fk, kk)
        }
      } else ik = Math.max(0, ik - 1)
    }

    function ak(kk, Fk, Ik) {
      let Tk = -1,
        ik = 0;
      for (let yk = 0; yk < Xk.g; yk++) {
        const Ik = kk[yk],
          lk = kk[yk + 1];
        lk > Ik && Fk & 1 << Xk.e[yk] && (Tk < 0 && (Tk = Ik), ik = lk)
      }
      return Tk < 0 ? (Ik[0] = 0, Ik[1] = 0, 0) : (Ik[0] = Tk, Ik[1] = ik - Tk, ik - Tk)
    }
    class qk {
      constructor(kk, Fk) {
        this.se = kk, this.engine = Fk, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(kk, Fk) {
        if (!Fk) return;
        const Ik = Fk.getProjectionMatrix().m,
          yk = 0 === ik && 0 === Ik[15],
          lk = Fk.globalPosition,
          {
            engine: qk
          } = this,
          Lk = yk ? (0, Tk.d)(Ik, qk.getRenderWidth(), qk.getRenderHeight()) : 0;
        lk.x === this.eyeX && lk.y === this.eyeY && lk.z === this.eyeZ && Lk === this.focalPx && yk === this.culling || (this.epoch++, this.eyeX = lk.x, this.eyeY = lk.y, this.eyeZ = lk.z, this.focalPx = Lk, this.culling = yk);
        const {
          epoch: tk,
          range: Zk
        } = this, jk = this.se / 2, ek = jk * Math.sqrt(3), wk = kk.data, Hk = kk.length;
        let Jk = 0;
        for (let ik = 0; ik < Hk; ik++) {
          const kk = wk[ik],
            Fk = kk._noaFaceGroups;
          if (Fk && (kk._noaFaceEpoch !== tk || kk._noaFaceMaterial !== kk.material)) {
            kk._noaFaceEpoch = tk, kk._noaFaceMaterial = kk.material;
            const Ik = kk.lK,
              ik = Ik && 1 === Ik.length ? Ik[0] : null;
            let qk = -1;
            if (yk && ik && (0, Xk.t)(kk.material)) {
              const Ik = kk.position,
                Xk = lk.x - Ik.x,
                ik = lk.y - Ik.y,
                yk = lk.z - Ik.z,
                ak = Xk - jk,
                tk = ik - jk,
                Zk = yk - jk,
                wk = Math.sqrt(ak * ak + tk * tk + Zk * Zk) + ek;
              qk = (0, Tk.m)(Fk, Xk, ik, yk, (0, Tk.h)(wk, Lk))
            }
            if (ik && qk !== kk._noaFaceMask) {
              kk._noaFaceMask = qk;
              let Ik = 0,
                Tk = Fk[Xk.g]; - 1 !== qk && (Tk = ak(Fk, qk, Zk), Ik = Zk[0]), kk._noaFaceCount = Tk, ik.indexStart = 6 * Ik, ik.indexCount = 6 * Tk, ik.setBoundingInfo(kk.vR())
            }
          }
          Fk && 0 === kk._noaFaceCount || (wk[Jk++] = kk)
        }
        kk.length = Jk
      }
    }
  },
  37578: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ak,
      g: () => lk
    });
    const Xk = new WeakSet;
    let Tk = 0;
    const ik = new Set;

    function yk(kk, Fk) {
      kk._data = Fk
    }

    function lk(kk) {
      var Fk, Ik;
      (null !== (Fk = null === (Ik = kk.getBuffer()) || void 0 === Ik ? void 0 : Ik.St) && void 0 !== Fk ? Fk : 0) > 0 && (Xk.add(kk), 0 === Tk ? yk(kk, null) : ik.add(kk))
    }

    function ak(kk) {
      Tk++;
      for (const Ik of function(kk) {
          const Fk = new Set;
          for (const Tk of kk) {
            const kk = Tk.geometry;
            for (const Tk of Object.values(null !== (Ik = null === kk || void 0 === kk ? void 0 : kk.getVertexBuffers()) && void 0 !== Ik ? Ik : {})) {
              var Ik;
              const kk = Tk.getWrapperBuffer();
              Xk.has(kk) && Fk.add(kk)
            }
          }
          return Fk
        }(kk)) Ik.getData() || qk(Ik), ik.add(Ik);
      let Fk = !0;
      return () => {
        if (Fk && (Fk = !1, Tk--, 0 === Tk)) {
          for (const kk of ik) yk(kk, null);
          ik.clear()
        }
      }
    }

    function qk(kk) {
      const Fk = kk.getBuffer();
      if (!Fk || !(Fk.St > 0)) return;
      const Ik = kk._engine,
        Xk = new Uint8Array(Fk.St);
      Ik.bindArrayBuffer(Fk), Ik._gl.getBufferSubData(Ik._gl.ARRAY_BUFFER, 0, Xk), Ik._resetVertexBufferBinding(), yk(kk, Xk)
    }
  },
  37586: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => yk,
      g: () => ik,
      i: () => ak,
      l: () => Xk,
      o: () => lk,
      p: () => Tk,
      t: () => qk
    });
    const Xk = 6,
      Tk = [0, 2, 4, 1, 3, 5, 0, 2],
      ik = 6,
      yk = [1, 0, 3, 2, 5, 4];
    for (let Lk = ik; Lk < Tk.length; Lk++)
      if (Tk[Lk] !== Tk[Lk - ik]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const lk = Tk.length + 1,
      ak = (() => {
        const kk = [];
        for (let Fk = 0; Fk < ik; Fk++) kk[Tk[Fk]] = Fk;
        return kk
      })();

    function qk(kk) {
      return !!kk && kk.backFaceCulling && (0 === kk.transparencyMode || 1 === kk.transparencyMode)
    }
  },
  37600: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => lk,
      h: () => ak,
      l: () => Lk,
      m: () => qk,
      n: () => ek
    });
    var Xk = Ik(37586);
    const Tk = 1 / 16,
      ik = 1 / 64,
      yk = 2048;
    Xk.l;

    function lk(kk, Fk, Ik) {
      return Math.min(Math.abs(kk[0] * Fk), Math.abs(kk[5] * Ik)) / 2
    }

    function ak(kk, Fk) {
      return Tk + ik * kk * kk / Fk
    }

    function qk(kk, Fk, Ik, Tk, ik) {
      const yk = Xk.o;
      return Lk(kk[yk], kk[yk + 1], kk[yk + 2], kk[yk + 3], kk[yk + 4], kk[yk + 5], Fk, Ik, Tk, ik)
    }

    function Lk(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk) {
      return (yk <= kk - qk ? 0 : 1) | (yk >= Fk + qk ? 0 : 2) | (lk <= Ik - qk ? 0 : 4) | (lk >= Xk + qk ? 0 : 8) | (ak <= Tk - qk ? 0 : 16) | (ak >= ik + qk ? 0 : 32)
    }
    const tk = (() => {
        const kk = [];
        for (let Fk = 0; Fk < Xk.p.length; Fk++) {
          let Ik = 0;
          for (let Tk = Fk + 1; Tk <= Xk.p.length; Tk++) {
            const ik = 1 << Xk.p[Tk - 1];
            if (Ik & ik) break;
            Ik |= ik, kk.push({
              start: Fk,
              end: Tk,
              YX: Ik
            })
          }
        }
        return kk
      })(),
      Zk = [];

    function jk(kk, Fk) {
      const Ik = Xk.i[Fk];
      return kk[Ik + 1] - kk[Ik]
    }

    function ek(kk, Fk, Ik) {
      let Tk = 0;
      for (let yk = 0; yk < Xk.l; yk++) jk(kk, yk) > 0 && (Tk |= 1 << yk);
      if (0 === (Fk &= Tk)) return 0;
      if (Fk === Tk) return Ik[0] = 0, Ik[1] = kk[Xk.g], 1;
      let ik = null,
        lk = 1 / 0;
      for (const qk of function(kk) {
          let Fk = Zk[kk];
          if (Fk) return Fk;
          const Ik = new Map,
            Xk = (kk, Fk) => {
              const Xk = 4 * kk + Fk.length / 2;
              Ik.has(Xk) || Ik.set(Xk, {
                YX: kk,
                windows: Fk
              })
            };
          for (const ik of tk)
            if ((ik.YX & kk) === kk && Xk(ik.YX, [ik.start, ik.end]), 0 !== (ik.YX & kk))
              for (const Fk of tk) Fk.start < ik.end || 0 !== (ik.YX & Fk.YX) || 0 === (Fk.YX & kk) || ((ik.YX | Fk.YX) & kk) !== kk || Xk(ik.YX | Fk.YX, [ik.start, ik.end, Fk.start, Fk.end]);
          const Tk = [...Ik.values()];
          return Fk = Tk.filter((kk => !Tk.some((Fk => Fk !== kk && (Fk.YX & kk.YX) === Fk.YX && Fk.windows.length <= kk.windows.length)))), Zk[kk] = Fk, Fk
        }(Fk)) {
        let Ik = (qk.windows.length / 2 - 1) * yk;
        const ak = qk.YX & ~Fk & Tk;
        for (let Fk = 0; Fk < Xk.l; Fk++) ak & 1 << Fk && (Ik += jk(kk, Fk));
        Ik < lk && (ik = qk, lk = Ik)
      }
      const ak = ik.windows;
      for (let Xk = 0; Xk < ak.length; Xk += 2) {
        const Fk = kk[ak[Xk]];
        Ik[Xk] = Fk, Ik[Xk + 1] = kk[ak[Xk + 1]] - Fk
      }
      return ak.length / 2
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);