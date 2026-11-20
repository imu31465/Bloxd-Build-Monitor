export const id = 230;
export const ids = [230];
export const modules = {
  40636: (uu, Ru, yu) => {
    yu.d(Ru, {
      noaDevTools: () => ru
    });
    var Eu = yu(37277),
      Ku = yu(37259),
      Qu = yu(2632),
      mu = yu(1661);

    function Ju(uu) {
      const {
        oS: Ru
      } = uu, yu = Ru.engine, Eu = {
        width: yu.getRenderWidth(),
        height: yu.getRenderHeight()
      };
      return {
        canvas: yu.getRenderingCanvas(),
        maxTextureSize: yu.getCaps().maxTextureSize,
        drawing: () => !uu.iH,
        resize: (uu, Ru) => {
          yu.setSize(uu, Ru)
        },
        restoreSize: () => {
          yu.setSize(Eu.width, Eu.height), Ru.resize()
        },
        onFrameDrawn: Ru => (uu.on("afterRender", Ru), () => {
          uu.off("afterRender", Ru)
        })
      }
    }
    var Nu = yu(40616),
      Xu = yu(8946);

    function Vu(uu, Ru) {
      let {
        width: Xu,
        height: Vu,
        colouring: ru
      } = Ru;
      const Bu = "normals" === ru,
        xu = "depth" === ru;
      return new Promise((Ru => {
        try {
          const Su = (0, Qu.h)();
          if (Su.oS.qS) return "screenshot" !== uu || null !== ru ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void Ru()) : void(0, Nu.b)(Ju(Su), Xu, Vu).finally(Ru);
          const pu = Su.oS.engine,
            Tu = Su.oS.lD(),
            Wu = Xu,
            ju = Vu;
          Promise.all([Promise.all([yu.e(244), yu.e(245), yu.e(227)]).then((() => yu(60982))), Promise.all([yu.e(226), yu.e(225), yu.e(244), yu.e(245), yu.e(242), yu.e(246), yu.e(249), yu.e(301), yu.e(231)]).then((() => yu(60989))), Promise.all([yu.e(226), yu.e(225), yu.e(244), yu.e(245), yu.e(242), yu.e(252), yu.e(246), yu.e(254), yu.e(233)]).then((() => yu(60995))), yu.e(344).then((() => yu(60997))), Promise.all([yu.e(225), yu.e(221)]).then((() => yu(36828))), yu.e(243).then((() => yu(61006))), yu.e(228).then((() => yu(61014)))]).then((Qu => {
            const {
              CreateScreenshotUsingRenderTarget: Ju
            } = Qu[1], {
              ShaderMaterial: Nu
            } = Qu[2], {
              ShaderLanguage: Xu
            } = Qu[3], {
              MS: Vu
            } = Qu[4], {
              registerDevtoolsShader: ru
            } = Qu[6], Su = Xu.GLSL, Hu = new Map, du = Tu.meshes.filter((uu => uu.material));
            let bu = !1,
              Cu = null;

            function ku() {
              var uu;
              bu && (bu = !1, (0, Eu.h)(Tu.meshes, !1)), null === (uu = Cu) || void 0 === uu || uu(), Cu = null, du.forEach((uu => {
                const Ru = Hu.get(uu);
                Ru && (uu.material = Ru)
              }))
            }
            if (Bu) {
              const uu = [],
                Ru = [];
              du.forEach((yu => {
                const Eu = yu.name.toLowerCase(),
                  Ku = yu.vI().boundingBox.center,
                  Qu = Tu.activeCamera.position.subtract(Ku).length();
                Eu.includes("sky") || Eu.includes("background") || Eu.includes("environment") || Qu > 1e3 ? Ru.push(yu) : uu.push(yu)
              })), ru("devtoolsNormal", Su);
              const yu = new Nu("normalMaterial", Tu, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: Su
              });
              ru("devtoolsWhite", Su);
              const Eu = new Nu("whiteMaterial", Tu, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: Su
              });
              uu.forEach((uu => {
                Hu.set(uu, uu.material), uu.material = yu
              })), Ru.forEach((uu => {
                Hu.set(uu, uu.material), uu.material = Eu
              }))
            } else if (xu) {
              ru("devtoolsDepth", Su);
              const uu = Tu.activeCamera.position;
              let Ru = 0,
                yu = 1 / 0;
              du.forEach((Eu => {
                const Ku = Eu.name.toLowerCase();
                if (Ku.includes("sky") || Ku.includes("background") || Ku.includes("environment")) return;
                const Qu = Eu.vI().boundingBox.center,
                  mu = Vu.TransformCoordinates(Qu, Eu.getWorldMatrix()),
                  Ju = uu.subtract(mu).length();
                Ju > 1e3 || (Ru = Math.max(Ru, Ju), yu = Math.min(yu, Ju))
              }));
              const Eu = Ru - yu;
              Ru += .1 * Eu, yu = Math.max(0, yu - .1 * Eu), console.log(`Depth range: min=${yu.toFixed(2)}, max=${Ru.toFixed(2)}, range=${Eu.toFixed(2)}`), Eu < 1 && (Ru = yu + 10);
              const Ku = new Nu("depthMaterial", Tu, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: Su
              });
              Ku.setVector3("cameraPosition", uu), Ku.setFloat("maxDepth", Ru), Ku.setFloat("minDepth", yu), du.forEach((uu => {
                Hu.set(uu, uu.material), uu.material = Ku
              }))
            }
            if ((0, Eu.h)(Tu.meshes, !0), bu = !0, "glb" === uu && (Cu = (0, Ku.d)(Tu.meshes)), "screenshot" === uu) {
              let uu = `bloxd-screenshot-${Wu}x${ju}-${Date.now()}.png`;
              Bu ? uu = `bloxd-screenshot-normals-${Wu}x${ju}-${Date.now()}.png` : xu && (uu = `bloxd-screenshot-depth-${Wu}x${ju}-${Date.now()}.png`), Ju(pu, Tu.activeCamera, {
                width: Wu,
                height: ju
              }, (function(yu) {
                ku(), fetch(yu).then((function(uu) {
                  return uu.blob()
                })).then((function(yu) {
                  (0, mu.downloadBlob)(yu, uu), Ru()
                })).catch((function(uu) {
                  console.error("Error processing screenshot:", uu), Ru()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), ku(), Ru()
              }))
            } else {
              let uu = "cp";
              Bu ? uu = "scene-normals" : xu && (uu = "scene-depth"), Bu || xu ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: uu
                  } = await Promise.all([yu.e(226), yu.e(225), yu.e(244), yu.e(245), yu.e(242), yu.e(252), yu.e(251), yu.e(232)]).then((() => yu(39827))), {
                    Color3: Ru
                  } = await Promise.all([yu.e(226), yu.e(229)]).then((() => yu(36986))), Eu = [], Ku = [];
                  if (du.forEach((uu => {
                      const Ru = uu.name.toLowerCase(),
                        yu = uu.vI().boundingBox.center,
                        Qu = Tu.activeCamera.position.subtract(yu).length();
                      Ru.includes("sky") || Ru.includes("background") || Ru.includes("environment") || Qu > 1e3 ? Ku.push(uu) : Eu.push(uu)
                    })), Bu) Eu.forEach(((yu, Eu) => {
                    const Ku = yu.getVerticesData("normal");
                    if (Ku) {
                      const Qu = [];
                      for (let uu = 0; uu < Ku.length; uu += 3) {
                        const Ru = Math.abs(Ku[uu]),
                          yu = Math.abs(Ku[uu + 1]),
                          Eu = Math.abs(Ku[uu + 2]);
                        Qu.push(Ru, yu, Eu, 1)
                      }
                      yu.setVerticesData("color", Qu);
                      const mu = new uu(`vertexColorMat_${Eu}`, Tu);
                      mu.disableLighting = !0, mu.emissiveColor = new Ru(1, 1, 1), mu.specularColor = new Ru(0, 0, 0), yu.material = mu
                    }
                  })), Ku.forEach(((yu, Eu) => {
                    const Ku = yu.getVerticesData("position");
                    if (Ku) {
                      const Qu = [],
                        mu = Ku.length / 3;
                      for (let uu = 0; uu < mu; uu++) Qu.push(1, 1, 1, 1);
                      yu.setVerticesData("color", Qu);
                      const Ju = new uu(`whiteMat_${Eu}`, Tu);
                      Ju.disableLighting = !0, Ju.emissiveColor = new Ru(1, 1, 1), Ju.specularColor = new Ru(0, 0, 0), yu.material = Ju
                    }
                  }));
                  else if (xu) {
                    const yu = Tu.activeCamera.position;
                    let Ku = 0,
                      Qu = 1 / 0;
                    Eu.forEach((uu => {
                      const Ru = uu.vI().boundingBox.center,
                        Eu = Vu.TransformCoordinates(Ru, uu.getWorldMatrix()),
                        mu = yu.subtract(Eu).length();
                      Ku = Math.max(Ku, mu), Qu = Math.min(Qu, mu)
                    }));
                    const mu = Ku - Qu;
                    Ku += .1 * mu, Qu = Math.max(0, Qu - .1 * mu), mu < 1 && (Ku = Qu + 10), du.forEach(((Eu, mu) => {
                      const Ju = Eu.name.toLowerCase(),
                        Nu = Eu.vI().boundingBox.center,
                        Xu = Vu.TransformCoordinates(Nu, Eu.getWorldMatrix()),
                        ru = yu.subtract(Xu).length();
                      if (!(Ju.includes("sky") || Ju.includes("background") || Ju.includes("environment") || ru > 1e3)) {
                        const yu = 1 - Math.min(Math.max((ru - Qu) / (Ku - Qu), 0), 1),
                          Ju = new uu(`depthMat_${mu}`, Tu);
                        Ju.diffuseColor = new Ru(yu, yu, yu), Ju.specularColor = new Ru(0, 0, 0), Eu.material = Ju
                      }
                    }))
                  }
                })().then((() => Promise.all([yu.e(226), yu.e(225), yu.e(244), yu.e(245), yu.e(242), yu.e(252), yu.e(246), yu.e(251), yu.e(249), yu.e(241), yu.e(254), yu.e(264), yu.e(301), yu.e(236), yu.e(253), yu.e(224)]).then((() => yu(61020))))).then((Ru => Ru.GLTF2Export.GLBAsync(Tu, uu))).then((uu => {
                  ku(), uu.downloadFiles(), Ru()
                })).catch((uu => {
                  console.error("Error exporting GLB:", uu), ku(), Ru()
                }))
              }), 100) : Promise.all([yu.e(226), yu.e(225), yu.e(244), yu.e(245), yu.e(242), yu.e(252), yu.e(246), yu.e(251), yu.e(249), yu.e(241), yu.e(254), yu.e(264), yu.e(301), yu.e(236), yu.e(253), yu.e(224)]).then((() => yu(61020))).then((yu => {
                yu.GLTF2Export.GLBAsync(Tu, uu).then((uu => {
                  ku(), uu.downloadFiles(), Ru()
                })).catch((uu => {
                  console.error("Error exporting GLB:", uu), ku(), Ru()
                }))
              })).catch((uu => {
                console.error("Error importing serializers:", uu), ku(), Ru()
              }))
            }
          })).catch((uu => {
            console.error("Error downloading the scene:", uu), Ru()
          }))
        } catch (Su) {
          console.error("Error taking screenshot:", Su), Ru()
        }
      }))
    }
    const ru = new class {
      constructor() {
        this.tools = Xu.ALL_DEV_TOOLS
      }
      downloadScene(uu, Ru) {
        return Vu(uu, Ru)
      }
      async setAmbientLightIntensity(uu) {
        const {
          Color3: Ru
        } = await Promise.all([yu.e(226), yu.e(229)]).then((() => yu(36986)));
        (0, Qu.h)().oS.lD().ambientColor = Ru.FromArray([uu, uu, uu])
      }
    }
  },
  40616: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Nu
    });
    var Eu = yu(1670);
    const Ku = 33177600,
      Qu = 3e4;
    let mu = !1;

    function Ju(uu, Ru, yu) {
      if (!uu.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (mu) return Promise.reject(new Error("A screenshot is already being taken"));
      mu = !0;
      const Eu = function(uu, Ru, yu) {
        const Eu = Math.max(1, uu),
          Qu = Math.max(1, Ru),
          mu = Math.min(1, yu / Math.max(Eu, Qu), Math.sqrt(Ku / (Eu * Qu)));
        return {
          width: Math.max(1, Math.floor(Eu * mu)),
          height: Math.max(1, Math.floor(Qu * mu))
        }
      }(Ru, yu, uu.maxTextureSize);
      return uu.resize(Eu.width, Eu.height), new Promise(((Ru, yu) => {
        let Eu, Ku = 2,
          Ju = null;
        const Nu = () => {
          var Ru;
          mu = !1, null === (Ru = Ju) || void 0 === Ru || Ru(), clearTimeout(Eu), uu.restoreSize()
        };
        Eu = setTimeout((() => {
          Nu(), yu(new Error("No frame was drawn to capture"))
        }), Qu), Ju = uu.onFrameDrawn((() => {
          if (Ku--, Ku > 0) return;
          const {
            canvas: Eu
          } = uu, Qu = {
            width: Eu.width,
            height: Eu.height
          };
          try {
            Eu.toBlob((uu => {
              uu ? Ru({
                blob: uu,
                ...Qu
              }) : yu(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (mu) {
            yu(mu)
          } finally {
            Nu()
          }
        }))
      }))
    }
    async function Nu(uu, Ru, yu) {
      try {
        const Ku = await Ju(uu, Ru, yu);
        (0, Eu.c)(Ku.blob, `bloxd-screenshot-${Ku.width}x${Ku.height}-${Date.now()}.png`)
      } catch (Ku) {
        console.error("Error taking screenshot:", Ku)
      }
    }
  },
  37277: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Xu,
      h: () => Ju,
      k: () => mu
    });
    var Eu = yu(37272),
      Ku = yu(37280);
    let Qu = 0;

    function mu(uu, Ru) {
      const yu = uu;
      yu._noaFaceGroups = null !== Ru && void 0 !== Ru ? Ru : null, yu._noaFaceEpoch = -1, yu._noaFaceMask = -1, yu._noaFaceCount = -1, yu._noaFaceMaterial = null;
      const Eu = uu.mC;
      Eu && 1 === Eu.length && (Eu[0].indexStart = 0, Eu[0].indexCount = uu.getTotalIndices())
    }

    function Ju(uu, Ru) {
      if (Ru) {
        Qu++;
        for (const Ru of uu) {
          const uu = Ru._noaFaceGroups;
          uu && mu(Ru, uu)
        }
      } else Qu = Math.max(0, Qu - 1)
    }

    function Nu(uu, Ru, yu) {
      let Ku = -1,
        Qu = 0;
      for (let mu = 0; mu < Eu.f; mu++) {
        const yu = uu[mu],
          Ju = uu[mu + 1];
        Ju > yu && Ru & 1 << Eu.d[mu] && (Ku < 0 && (Ku = yu), Qu = Ju)
      }
      return Ku < 0 ? (yu[0] = 0, yu[1] = 0, 0) : (yu[0] = Ku, yu[1] = Qu - Ku, Qu - Ku)
    }
    class Xu {
      constructor(uu, Ru) {
        this.jS = uu, this.engine = Ru, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(uu, Ru) {
        if (!Ru) return;
        const yu = Ru.getProjectionMatrix().m,
          mu = 0 === Qu && 0 === yu[15],
          Ju = Ru.globalPosition,
          {
            engine: Xu
          } = this,
          Vu = mu ? (0, Ku.c)(yu, Xu.getRenderWidth(), Xu.getRenderHeight()) : 0;
        Ju.x === this.eyeX && Ju.y === this.eyeY && Ju.z === this.eyeZ && Vu === this.focalPx && mu === this.culling || (this.epoch++, this.eyeX = Ju.x, this.eyeY = Ju.y, this.eyeZ = Ju.z, this.focalPx = Vu, this.culling = mu);
        const {
          epoch: ru,
          range: Bu
        } = this, xu = this.jS / 2, Su = xu * Math.sqrt(3), pu = uu.data, Tu = uu.length;
        let Wu = 0;
        for (let Qu = 0; Qu < Tu; Qu++) {
          const uu = pu[Qu],
            Ru = uu._noaFaceGroups;
          if (Ru && (uu._noaFaceEpoch !== ru || uu._noaFaceMaterial !== uu.material)) {
            uu._noaFaceEpoch = ru, uu._noaFaceMaterial = uu.material;
            const yu = uu.mC,
              Qu = yu && 1 === yu.length ? yu[0] : null;
            let Xu = -1;
            if (mu && Qu && (0, Eu.n)(uu.material)) {
              const yu = uu.position,
                Eu = Ju.x - yu.x,
                Qu = Ju.y - yu.y,
                mu = Ju.z - yu.z,
                Nu = Eu - xu,
                ru = Qu - xu,
                Bu = mu - xu,
                pu = Math.sqrt(Nu * Nu + ru * ru + Bu * Bu) + Su;
              Xu = (0, Ku.m)(Ru, Eu, Qu, mu, (0, Ku.f)(pu, Vu))
            }
            if (Qu && Xu !== uu._noaFaceMask) {
              uu._noaFaceMask = Xu;
              let yu = 0,
                Ku = Ru[Eu.f]; - 1 !== Xu && (Ku = Nu(Ru, Xu, Bu), yu = Bu[0]), uu._noaFaceCount = Ku, Qu.indexStart = 6 * yu, Qu.indexCount = 6 * Ku, Qu.setBoundingInfo(uu.vI())
            }
          }
          Ru && 0 === uu._noaFaceCount || (pu[Wu++] = uu)
        }
        uu.length = Wu
      }
    }
  },
  37259: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Nu,
      e: () => Ju
    });
    const Eu = new WeakSet;
    let Ku = 0;
    const Qu = new Set;

    function mu(uu, Ru) {
      uu._data = Ru
    }

    function Ju(uu) {
      var Ru, yu;
      (null !== (Ru = null === (yu = uu.getBuffer()) || void 0 === yu ? void 0 : yu.Nr) && void 0 !== Ru ? Ru : 0) > 0 && (Eu.add(uu), 0 === Ku ? mu(uu, null) : Qu.add(uu))
    }

    function Nu(uu) {
      Ku++;
      for (const yu of function(uu) {
          const Ru = new Set;
          for (const Ku of uu) {
            const uu = Ku.geometry;
            for (const Ku of Object.values(null !== (yu = null === uu || void 0 === uu ? void 0 : uu.getVertexBuffers()) && void 0 !== yu ? yu : {})) {
              var yu;
              const uu = Ku.getWrapperBuffer();
              Eu.has(uu) && Ru.add(uu)
            }
          }
          return Ru
        }(uu)) yu.getData() || Xu(yu), Qu.add(yu);
      let Ru = !0;
      return () => {
        if (Ru && (Ru = !1, Ku--, 0 === Ku)) {
          for (const uu of Qu) mu(uu, null);
          Qu.clear()
        }
      }
    }

    function Xu(uu) {
      const Ru = uu.getBuffer();
      if (!Ru || !(Ru.Nr > 0)) return;
      const yu = uu._engine,
        Eu = new Uint8Array(Ru.Nr);
      yu.bindArrayBuffer(Ru), yu._gl.getBufferSubData(yu._gl.ARRAY_BUFFER, 0, Eu), yu._resetVertexBufferBinding(), mu(uu, Eu)
    }
  },
  37272: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => mu,
      f: () => Qu,
      g: () => Nu,
      j: () => Eu,
      k: () => Ju,
      l: () => Ku,
      n: () => Xu
    });
    const Eu = 6,
      Ku = [0, 2, 4, 1, 3, 5, 0, 2],
      Qu = 6,
      mu = [1, 0, 3, 2, 5, 4];
    for (let Vu = Qu; Vu < Ku.length; Vu++)
      if (Ku[Vu] !== Ku[Vu - Qu]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const Ju = Ku.length + 1,
      Nu = (() => {
        const uu = [];
        for (let Ru = 0; Ru < Qu; Ru++) uu[Ku[Ru]] = Ru;
        return uu
      })();

    function Xu(uu) {
      return !!uu && uu.backFaceCulling && (0 === uu.transparencyMode || 1 === uu.transparencyMode)
    }
  },
  37280: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ju,
      f: () => Nu,
      j: () => Vu,
      m: () => Xu,
      q: () => Su
    });
    var Eu = yu(37272);
    const Ku = 1 / 16,
      Qu = 1 / 64,
      mu = 2048;
    Eu.j;

    function Ju(uu, Ru, yu) {
      return Math.min(Math.abs(uu[0] * Ru), Math.abs(uu[5] * yu)) / 2
    }

    function Nu(uu, Ru) {
      return Ku + Qu * uu * uu / Ru
    }

    function Xu(uu, Ru, yu, Ku, Qu) {
      const mu = Eu.k;
      return Vu(uu[mu], uu[mu + 1], uu[mu + 2], uu[mu + 3], uu[mu + 4], uu[mu + 5], Ru, yu, Ku, Qu)
    }

    function Vu(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu) {
      return (mu <= uu - Xu ? 0 : 1) | (mu >= Ru + Xu ? 0 : 2) | (Ju <= yu - Xu ? 0 : 4) | (Ju >= Eu + Xu ? 0 : 8) | (Nu <= Ku - Xu ? 0 : 16) | (Nu >= Qu + Xu ? 0 : 32)
    }
    const ru = (() => {
        const uu = [];
        for (let Ru = 0; Ru < Eu.l.length; Ru++) {
          let yu = 0;
          for (let Ku = Ru + 1; Ku <= Eu.l.length; Ku++) {
            const Qu = 1 << Eu.l[Ku - 1];
            if (yu & Qu) break;
            yu |= Qu, uu.push({
              start: Ru,
              end: Ku,
              yQ: yu
            })
          }
        }
        return uu
      })(),
      Bu = [];

    function xu(uu, Ru) {
      const yu = Eu.g[Ru];
      return uu[yu + 1] - uu[yu]
    }

    function Su(uu, Ru, yu) {
      let Ku = 0;
      for (let mu = 0; mu < Eu.j; mu++) xu(uu, mu) > 0 && (Ku |= 1 << mu);
      if (0 === (Ru &= Ku)) return 0;
      if (Ru === Ku) return yu[0] = 0, yu[1] = uu[Eu.f], 1;
      let Qu = null,
        Ju = 1 / 0;
      for (const Xu of function(uu) {
          let Ru = Bu[uu];
          if (Ru) return Ru;
          const yu = new Map,
            Eu = (uu, Ru) => {
              const Eu = 4 * uu + Ru.length / 2;
              yu.has(Eu) || yu.set(Eu, {
                yQ: uu,
                windows: Ru
              })
            };
          for (const Qu of ru)
            if ((Qu.yQ & uu) === uu && Eu(Qu.yQ, [Qu.start, Qu.end]), 0 !== (Qu.yQ & uu))
              for (const Ru of ru) Ru.start < Qu.end || 0 !== (Qu.yQ & Ru.yQ) || 0 === (Ru.yQ & uu) || ((Qu.yQ | Ru.yQ) & uu) !== uu || Eu(Qu.yQ | Ru.yQ, [Qu.start, Qu.end, Ru.start, Ru.end]);
          const Ku = [...yu.values()];
          return Ru = Ku.filter((uu => !Ku.some((Ru => Ru !== uu && (Ru.yQ & uu.yQ) === Ru.yQ && Ru.windows.length <= uu.windows.length)))), Bu[uu] = Ru, Ru
        }(Ru)) {
        let yu = (Xu.windows.length / 2 - 1) * mu;
        const Nu = Xu.yQ & ~Ru & Ku;
        for (let Ru = 0; Ru < Eu.j; Ru++) Nu & 1 << Ru && (yu += xu(uu, Ru));
        yu < Ju && (Qu = Xu, Ju = yu)
      }
      const Nu = Qu.windows;
      for (let Eu = 0; Eu < Nu.length; Eu += 2) {
        const Ru = uu[Nu[Eu]];
        yu[Eu] = Ru, yu[Eu + 1] = uu[Nu[Eu + 1]] - Ru
      }
      return Nu.length / 2
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);