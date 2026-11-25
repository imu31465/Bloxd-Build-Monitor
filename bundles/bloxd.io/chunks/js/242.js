export const id = 242;
export const ids = [242];
export const modules = {
  41290: (uu, Eu, ju) => {
    ju.d(Eu, {
      noaDevTools: () => bu
    });
    var su = ju(37938),
      Uu = ju(37916),
      Zu = ju(2893),
      Xu = ju(1779),
      lu = ju(41194);

    function qu(uu) {
      const {
        tO: Eu
      } = uu, ju = Eu.engine, su = {
        width: ju.getRenderWidth(),
        height: ju.getRenderHeight()
      };
      return {
        canvas: ju.getRenderingCanvas(),
        maxTextureSize: ju.getCaps().maxTextureSize,
        drawing: () => !uu.aG,
        resize: (uu, Eu) => {
          ju.setSize(uu, Eu)
        },
        restoreSize: () => {
          ju.setSize(su.width, su.height), Eu.resize()
        },
        onFrameDrawn: Eu => (uu.on("afterRender", Eu), () => {
          uu.off("afterRender", Eu)
        })
      }
    }
    var fu = ju(34444);

    function Cu(uu, Eu) {
      let {
        width: fu,
        height: Cu,
        colouring: bu
      } = Eu;
      const cu = "normals" === bu,
        Nu = "depth" === bu;
      return new Promise((Eu => {
        try {
          const Ou = (0, Zu.c)();
          if (Ou.tO.xO) return "screenshot" !== uu || null !== bu ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void Eu()) : void(0, lu.c)(qu(Ou), fu, Cu).finally(Eu);
          const Yu = Ou.tO.engine,
            hu = Ou.tO.hV(),
            Du = fu,
            gu = Cu;
          Promise.all([Promise.all([ju.e(258), ju.e(259), ju.e(238)]).then((() => ju(61478))), Promise.all([ju.e(237), ju.e(236), ju.e(258), ju.e(259), ju.e(256), ju.e(260), ju.e(263), ju.e(316), ju.e(243)]).then((() => ju(61483))), Promise.all([ju.e(237), ju.e(236), ju.e(258), ju.e(259), ju.e(256), ju.e(266), ju.e(260), ju.e(268), ju.e(245)]).then((() => ju(61489))), ju.e(357).then((() => ju(61492))), Promise.all([ju.e(236), ju.e(232)]).then((() => ju(37488))), ju.e(257).then((() => ju(61501))), ju.e(240).then((() => ju(61510)))]).then((Zu => {
            const {
              CreateScreenshotUsingRenderTarget: lu
            } = Zu[1], {
              ShaderMaterial: qu
            } = Zu[2], {
              ShaderLanguage: fu
            } = Zu[3], {
              dO: Cu
            } = Zu[4], {
              registerDevtoolsShader: bu
            } = Zu[6], Ou = fu.GLSL, Mu = new Map, eu = hu.meshes.filter((uu => uu.material));
            let Gu = !1,
              pu = null;

            function wu() {
              var uu;
              Gu && (Gu = !1, (0, su.f)(hu.meshes, !1)), null === (uu = pu) || void 0 === uu || uu(), pu = null, eu.forEach((uu => {
                const Eu = Mu.get(uu);
                Eu && (uu.material = Eu)
              }))
            }
            if (cu) {
              const uu = [],
                Eu = [];
              eu.forEach((ju => {
                const su = ju.name.toLowerCase(),
                  Uu = ju.EW().boundingBox.center,
                  Zu = hu.activeCamera.position.subtract(Uu).length();
                su.includes("sky") || su.includes("background") || su.includes("environment") || Zu > 1e3 ? Eu.push(ju) : uu.push(ju)
              })), bu("devtoolsNormal", Ou);
              const ju = new qu("normalMaterial", hu, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: Ou
              });
              bu("devtoolsWhite", Ou);
              const su = new qu("whiteMaterial", hu, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: Ou
              });
              uu.forEach((uu => {
                Mu.set(uu, uu.material), uu.material = ju
              })), Eu.forEach((uu => {
                Mu.set(uu, uu.material), uu.material = su
              }))
            } else if (Nu) {
              bu("devtoolsDepth", Ou);
              const uu = hu.activeCamera.position;
              let Eu = 0,
                ju = 1 / 0;
              eu.forEach((su => {
                const Uu = su.name.toLowerCase();
                if (Uu.includes("sky") || Uu.includes("background") || Uu.includes("environment")) return;
                const Zu = su.EW().boundingBox.center,
                  Xu = Cu.TransformCoordinates(Zu, su.getWorldMatrix()),
                  lu = uu.subtract(Xu).length();
                lu > 1e3 || (Eu = Math.max(Eu, lu), ju = Math.min(ju, lu))
              }));
              const su = Eu - ju;
              Eu += .1 * su, ju = Math.max(0, ju - .1 * su), console.log(`Depth range: min=${ju.toFixed(2)}, max=${Eu.toFixed(2)}, range=${su.toFixed(2)}`), su < 1 && (Eu = ju + 10);
              const Uu = new qu("depthMaterial", hu, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: Ou
              });
              Uu.setVector3("cameraPosition", uu), Uu.setFloat("maxDepth", Eu), Uu.setFloat("minDepth", ju), eu.forEach((uu => {
                Mu.set(uu, uu.material), uu.material = Uu
              }))
            }
            if ((0, su.f)(hu.meshes, !0), Gu = !0, "glb" === uu && (pu = (0, Uu.e)(hu.meshes)), "screenshot" === uu) {
              let uu = `bloxd-screenshot-${Du}x${gu}-${Date.now()}.png`;
              cu ? uu = `bloxd-screenshot-normals-${Du}x${gu}-${Date.now()}.png` : Nu && (uu = `bloxd-screenshot-depth-${Du}x${gu}-${Date.now()}.png`), lu(Yu, hu.activeCamera, {
                width: Du,
                height: gu
              }, (function(ju) {
                wu(), fetch(ju).then((function(uu) {
                  return uu.blob()
                })).then((function(ju) {
                  (0, Xu.downloadBlob)(ju, uu), Eu()
                })).catch((function(uu) {
                  console.error("Error processing screenshot:", uu), Eu()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), wu(), Eu()
              }))
            } else {
              let uu = "vY";
              cu ? uu = "scene-normals" : Nu && (uu = "scene-depth"), cu || Nu ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: uu
                  } = await Promise.all([ju.e(237), ju.e(236), ju.e(258), ju.e(259), ju.e(256), ju.e(266), ju.e(265), ju.e(244)]).then((() => ju(40514))), {
                    Color3: Eu
                  } = await Promise.all([ju.e(237), ju.e(241)]).then((() => ju(37671))), su = [], Uu = [];
                  if (eu.forEach((uu => {
                      const Eu = uu.name.toLowerCase(),
                        ju = uu.EW().boundingBox.center,
                        Zu = hu.activeCamera.position.subtract(ju).length();
                      Eu.includes("sky") || Eu.includes("background") || Eu.includes("environment") || Zu > 1e3 ? Uu.push(uu) : su.push(uu)
                    })), cu) su.forEach(((ju, su) => {
                    const Uu = ju.getVerticesData("normal");
                    if (Uu) {
                      const Zu = [];
                      for (let uu = 0; uu < Uu.length; uu += 3) {
                        const Eu = Math.abs(Uu[uu]),
                          ju = Math.abs(Uu[uu + 1]),
                          su = Math.abs(Uu[uu + 2]);
                        Zu.push(Eu, ju, su, 1)
                      }
                      ju.setVerticesData("color", Zu);
                      const Xu = new uu(`vertexColorMat_${su}`, hu);
                      Xu.disableLighting = !0, Xu.emissiveColor = new Eu(1, 1, 1), Xu.specularColor = new Eu(0, 0, 0), ju.material = Xu
                    }
                  })), Uu.forEach(((ju, su) => {
                    const Uu = ju.getVerticesData("position");
                    if (Uu) {
                      const Zu = [],
                        Xu = Uu.length / 3;
                      for (let uu = 0; uu < Xu; uu++) Zu.push(1, 1, 1, 1);
                      ju.setVerticesData("color", Zu);
                      const lu = new uu(`whiteMat_${su}`, hu);
                      lu.disableLighting = !0, lu.emissiveColor = new Eu(1, 1, 1), lu.specularColor = new Eu(0, 0, 0), ju.material = lu
                    }
                  }));
                  else if (Nu) {
                    const ju = hu.activeCamera.position;
                    let Uu = 0,
                      Zu = 1 / 0;
                    su.forEach((uu => {
                      const Eu = uu.EW().boundingBox.center,
                        su = Cu.TransformCoordinates(Eu, uu.getWorldMatrix()),
                        Xu = ju.subtract(su).length();
                      Uu = Math.max(Uu, Xu), Zu = Math.min(Zu, Xu)
                    }));
                    const Xu = Uu - Zu;
                    Uu += .1 * Xu, Zu = Math.max(0, Zu - .1 * Xu), Xu < 1 && (Uu = Zu + 10), eu.forEach(((su, Xu) => {
                      const lu = su.name.toLowerCase(),
                        qu = su.EW().boundingBox.center,
                        fu = Cu.TransformCoordinates(qu, su.getWorldMatrix()),
                        bu = ju.subtract(fu).length();
                      if (!(lu.includes("sky") || lu.includes("background") || lu.includes("environment") || bu > 1e3)) {
                        const ju = 1 - Math.min(Math.max((bu - Zu) / (Uu - Zu), 0), 1),
                          lu = new uu(`depthMat_${Xu}`, hu);
                        lu.diffuseColor = new Eu(ju, ju, ju), lu.specularColor = new Eu(0, 0, 0), su.material = lu
                      }
                    }))
                  }
                })().then((() => Promise.all([ju.e(237), ju.e(236), ju.e(258), ju.e(259), ju.e(256), ju.e(266), ju.e(260), ju.e(265), ju.e(263), ju.e(255), ju.e(268), ju.e(279), ju.e(316), ju.e(249), ju.e(267), ju.e(235)]).then((() => ju(61518))))).then((Eu => Eu.GLTF2Export.GLBAsync(hu, uu))).then((uu => {
                  wu(), uu.downloadFiles(), Eu()
                })).catch((uu => {
                  console.error("Error exporting GLB:", uu), wu(), Eu()
                }))
              }), 100) : Promise.all([ju.e(237), ju.e(236), ju.e(258), ju.e(259), ju.e(256), ju.e(266), ju.e(260), ju.e(265), ju.e(263), ju.e(255), ju.e(268), ju.e(279), ju.e(316), ju.e(249), ju.e(267), ju.e(235)]).then((() => ju(61518))).then((ju => {
                ju.GLTF2Export.GLBAsync(hu, uu).then((uu => {
                  wu(), uu.downloadFiles(), Eu()
                })).catch((uu => {
                  console.error("Error exporting GLB:", uu), wu(), Eu()
                }))
              })).catch((uu => {
                console.error("Error importing serializers:", uu), wu(), Eu()
              }))
            }
          })).catch((uu => {
            console.error("Error downloading the scene:", uu), Eu()
          }))
        } catch (Ou) {
          console.error("Error taking screenshot:", Ou), Eu()
        }
      }))
    }
    const bu = new class {
      constructor() {
        this.tools = fu.ALL_DEV_TOOLS
      }
      downloadScene(uu, Eu) {
        return Cu(uu, Eu)
      }
      async setAmbientLightIntensity(uu) {
        const {
          Color3: Eu
        } = await Promise.all([ju.e(237), ju.e(241)]).then((() => ju(37671)));
        (0, Zu.c)().tO.hV().ambientColor = Eu.FromArray([uu, uu, uu])
      }
      capturePhoto(uu, Eu, ju) {
        return function(uu, Eu, ju, su) {
          return (0, lu.b)(qu(uu), Eu, ju, su)
        }((0, Zu.c)(), uu, Eu, ju)
      }
    }
  },
  41194: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => lu,
      c: () => qu
    });
    var su = ju(1802);
    const Uu = 33177600,
      Zu = 3e4;
    let Xu = !1;

    function lu(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: lu = 1,
        type: qu = "image/png",
        quality: fu
      } = su;
      if (!uu.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (Xu) return Promise.reject(new Error("A screenshot is already being taken"));
      Xu = !0;
      const Cu = function(uu, Eu, ju) {
        const su = Math.max(1, uu),
          Zu = Math.max(1, Eu),
          Xu = Math.min(1, ju / Math.max(su, Zu), Math.sqrt(Uu / (su * Zu)));
        return {
          width: Math.max(1, Math.floor(su * Xu)),
          height: Math.max(1, Math.floor(Zu * Xu))
        }
      }(Eu, ju, uu.maxTextureSize);
      return uu.resize(Cu.width, Cu.height, lu * Cu.width / Math.max(1, Eu)), new Promise(((Eu, ju) => {
        let su, Uu = 2,
          lu = null;
        const Cu = () => {
          var Eu;
          Xu = !1, null === (Eu = lu) || void 0 === Eu || Eu(), clearTimeout(su), uu.restoreSize()
        };
        su = setTimeout((() => {
          Cu(), ju(new Error("No frame was drawn to capture"))
        }), Zu), lu = uu.onFrameDrawn((() => {
          if (Uu--, Uu > 0) return;
          const {
            canvas: su
          } = uu, Zu = {
            width: su.width,
            height: su.height
          };
          try {
            su.toBlob((uu => {
              uu ? Eu({
                blob: uu,
                ...Zu
              }) : ju(new Error("The canvas gave no image"))
            }), qu, fu)
          } catch (Xu) {
            ju(Xu)
          } finally {
            Cu()
          }
        }))
      }))
    }
    async function qu(uu, Eu, ju) {
      try {
        const Uu = await lu(uu, Eu, ju);
        (0, su.d)(Uu.blob, `bloxd-screenshot-${Uu.width}x${Uu.height}-${Date.now()}.png`)
      } catch (Uu) {
        console.error("Error taking screenshot:", Uu)
      }
    }
  },
  37938: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => fu,
      f: () => lu,
      g: () => Xu
    });
    var su = ju(37931),
      Uu = ju(37941);
    let Zu = 0;

    function Xu(uu, Eu) {
      const ju = uu;
      ju._noaFaceGroups = null !== Eu && void 0 !== Eu ? Eu : null, ju._noaFaceEpoch = -1, ju._noaFaceMask = -1, ju._noaFaceCount = -1, ju._noaFaceMaterial = null;
      const su = uu.iG;
      su && 1 === su.length && (su[0].indexStart = 0, su[0].indexCount = uu.getTotalIndices())
    }

    function lu(uu, Eu) {
      if (Eu) {
        Zu++;
        for (const Eu of uu) {
          const uu = Eu._noaFaceGroups;
          uu && Xu(Eu, uu)
        }
      } else Zu = Math.max(0, Zu - 1)
    }

    function qu(uu, Eu, ju) {
      let Uu = -1,
        Zu = 0;
      for (let Xu = 0; Xu < su.e; Xu++) {
        const ju = uu[Xu],
          lu = uu[Xu + 1];
        lu > ju && Eu & 1 << su.d[Xu] && (Uu < 0 && (Uu = ju), Zu = lu)
      }
      return Uu < 0 ? (ju[0] = 0, ju[1] = 0, 0) : (ju[0] = Uu, ju[1] = Zu - Uu, Zu - Uu)
    }
    class fu {
      constructor(uu, Eu) {
        this.hO = uu, this.engine = Eu, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(uu, Eu) {
        if (!Eu) return;
        const ju = Eu.getProjectionMatrix().m,
          Xu = 0 === Zu && 0 === ju[15],
          lu = Eu.globalPosition,
          {
            engine: fu
          } = this,
          Cu = Xu ? (0, Uu.b)(ju, fu.getRenderWidth(), fu.getRenderHeight()) : 0;
        lu.x === this.eyeX && lu.y === this.eyeY && lu.z === this.eyeZ && Cu === this.focalPx && Xu === this.culling || (this.epoch++, this.eyeX = lu.x, this.eyeY = lu.y, this.eyeZ = lu.z, this.focalPx = Cu, this.culling = Xu);
        const {
          epoch: bu,
          range: cu
        } = this, Nu = this.hO / 2, Ou = Nu * Math.sqrt(3), Yu = uu.data, hu = uu.length;
        let Du = 0;
        for (let Zu = 0; Zu < hu; Zu++) {
          const uu = Yu[Zu],
            Eu = uu._noaFaceGroups;
          if (Eu && (uu._noaFaceEpoch !== bu || uu._noaFaceMaterial !== uu.material)) {
            uu._noaFaceEpoch = bu, uu._noaFaceMaterial = uu.material;
            const ju = uu.iG,
              Zu = ju && 1 === ju.length ? ju[0] : null;
            let fu = -1;
            if (Xu && Zu && (0, su.o)(uu.material)) {
              const ju = uu.position,
                su = lu.x - ju.x,
                Zu = lu.y - ju.y,
                Xu = lu.z - ju.z,
                qu = su - Nu,
                bu = Zu - Nu,
                cu = Xu - Nu,
                Yu = Math.sqrt(qu * qu + bu * bu + cu * cu) + Ou;
              fu = (0, Uu.i)(Eu, su, Zu, Xu, (0, Uu.d)(Yu, Cu))
            }
            if (Zu && fu !== uu._noaFaceMask) {
              uu._noaFaceMask = fu;
              let ju = 0,
                Uu = Eu[su.e]; - 1 !== fu && (Uu = qu(Eu, fu, cu), ju = cu[0]), uu._noaFaceCount = Uu, Zu.indexStart = 6 * ju, Zu.indexCount = 6 * Uu, Zu.setBoundingInfo(uu.EW())
            }
          }
          Eu && 0 === uu._noaFaceCount || (Yu[Du++] = uu)
        }
        uu.length = Du
      }
    }
  },
  37916: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => qu,
      h: () => lu
    });
    const su = new WeakSet;
    let Uu = 0;
    const Zu = new Set;

    function Xu(uu, Eu) {
      uu._data = Eu
    }

    function lu(uu) {
      var Eu, ju;
      (null !== (Eu = null === (ju = uu.getBuffer()) || void 0 === ju ? void 0 : ju.Mb) && void 0 !== Eu ? Eu : 0) > 0 && (su.add(uu), 0 === Uu ? Xu(uu, null) : Zu.add(uu))
    }

    function qu(uu) {
      Uu++;
      for (const ju of function(uu) {
          const Eu = new Set;
          for (const Uu of uu) {
            const uu = Uu.geometry;
            for (const Uu of Object.values(null !== (ju = null === uu || void 0 === uu ? void 0 : uu.getVertexBuffers()) && void 0 !== ju ? ju : {})) {
              var ju;
              const uu = Uu.getWrapperBuffer();
              su.has(uu) && Eu.add(uu)
            }
          }
          return Eu
        }(uu)) ju.getData() || fu(ju), Zu.add(ju);
      let Eu = !0;
      return () => {
        if (Eu && (Eu = !1, Uu--, 0 === Uu)) {
          for (const uu of Zu) Xu(uu, null);
          Zu.clear()
        }
      }
    }

    function fu(uu) {
      const Eu = uu.getBuffer();
      if (!Eu || !(Eu.Mb > 0)) return;
      const ju = uu._engine,
        su = new Uint8Array(Eu.Mb);
      ju.bindArrayBuffer(Eu), ju._gl.getBufferSubData(ju._gl.ARRAY_BUFFER, 0, su), ju._resetVertexBufferBinding(), Xu(uu, su)
    }
  },
  37931: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Xu,
      e: () => Zu,
      f: () => qu,
      j: () => su,
      k: () => lu,
      m: () => Uu,
      o: () => fu
    });
    const su = 6,
      Uu = [0, 2, 4, 1, 3, 5, 0, 2],
      Zu = 6,
      Xu = [1, 0, 3, 2, 5, 4];
    for (let Cu = Zu; Cu < Uu.length; Cu++)
      if (Uu[Cu] !== Uu[Cu - Zu]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const lu = Uu.length + 1,
      qu = (() => {
        const uu = [];
        for (let Eu = 0; Eu < Zu; Eu++) uu[Uu[Eu]] = Eu;
        return uu
      })();

    function fu(uu) {
      return !!uu && uu.backFaceCulling && (0 === uu.transparencyMode || 1 === uu.transparencyMode)
    }
  },
  37941: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => lu,
      d: () => qu,
      g: () => Cu,
      i: () => fu,
      j: () => Ou
    });
    var su = ju(37931);
    const Uu = 1 / 16,
      Zu = 1 / 64,
      Xu = 2048;
    su.j;

    function lu(uu, Eu, ju) {
      return Math.min(Math.abs(uu[0] * Eu), Math.abs(uu[5] * ju)) / 2
    }

    function qu(uu, Eu) {
      return Uu + Zu * uu * uu / Eu
    }

    function fu(uu, Eu, ju, Uu, Zu) {
      const Xu = su.k;
      return Cu(uu[Xu], uu[Xu + 1], uu[Xu + 2], uu[Xu + 3], uu[Xu + 4], uu[Xu + 5], Eu, ju, Uu, Zu)
    }

    function Cu(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu) {
      return (Xu <= uu - fu ? 0 : 1) | (Xu >= Eu + fu ? 0 : 2) | (lu <= ju - fu ? 0 : 4) | (lu >= su + fu ? 0 : 8) | (qu <= Uu - fu ? 0 : 16) | (qu >= Zu + fu ? 0 : 32)
    }
    const bu = (() => {
        const uu = [];
        for (let Eu = 0; Eu < su.m.length; Eu++) {
          let ju = 0;
          for (let Uu = Eu + 1; Uu <= su.m.length; Uu++) {
            const Zu = 1 << su.m[Uu - 1];
            if (ju & Zu) break;
            ju |= Zu, uu.push({
              start: Eu,
              end: Uu,
              pj: ju
            })
          }
        }
        return uu
      })(),
      cu = [];

    function Nu(uu, Eu) {
      const ju = su.f[Eu];
      return uu[ju + 1] - uu[ju]
    }

    function Ou(uu, Eu, ju) {
      let Uu = 0;
      for (let Xu = 0; Xu < su.j; Xu++) Nu(uu, Xu) > 0 && (Uu |= 1 << Xu);
      if (0 === (Eu &= Uu)) return 0;
      if (Eu === Uu) return ju[0] = 0, ju[1] = uu[su.e], 1;
      let Zu = null,
        lu = 1 / 0;
      for (const fu of function(uu) {
          let Eu = cu[uu];
          if (Eu) return Eu;
          const ju = new Map,
            su = (uu, Eu) => {
              const su = 4 * uu + Eu.length / 2;
              ju.has(su) || ju.set(su, {
                pj: uu,
                windows: Eu
              })
            };
          for (const Zu of bu)
            if ((Zu.pj & uu) === uu && su(Zu.pj, [Zu.start, Zu.end]), 0 !== (Zu.pj & uu))
              for (const Eu of bu) Eu.start < Zu.end || 0 !== (Zu.pj & Eu.pj) || 0 === (Eu.pj & uu) || ((Zu.pj | Eu.pj) & uu) !== uu || su(Zu.pj | Eu.pj, [Zu.start, Zu.end, Eu.start, Eu.end]);
          const Uu = [...ju.values()];
          return Eu = Uu.filter((uu => !Uu.some((Eu => Eu !== uu && (Eu.pj & uu.pj) === Eu.pj && Eu.windows.length <= uu.windows.length)))), cu[uu] = Eu, Eu
        }(Eu)) {
        let ju = (fu.windows.length / 2 - 1) * Xu;
        const qu = fu.pj & ~Eu & Uu;
        for (let Eu = 0; Eu < su.j; Eu++) qu & 1 << Eu && (ju += Nu(uu, Eu));
        ju < lu && (Zu = fu, lu = ju)
      }
      const qu = Zu.windows;
      for (let su = 0; su < qu.length; su += 2) {
        const Eu = uu[qu[su]];
        ju[su] = Eu, ju[su + 1] = uu[qu[su + 1]] - Eu
      }
      return qu.length / 2
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);