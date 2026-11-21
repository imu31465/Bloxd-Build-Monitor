export const id = 231;
export const ids = [231];
export const modules = {
  41062: (dd, Jd, kd) => {
    kd.d(Jd, {
      noaDevTools: () => od
    });
    var pd = kd(37760),
      Nd = kd(37743),
      Wd = kd(2634),
      Pd = kd(1753);

    function Zd(dd) {
      const {
        UL: Jd
      } = dd, kd = Jd.engine, pd = {
        width: kd.getRenderWidth(),
        height: kd.getRenderHeight()
      };
      return {
        canvas: kd.getRenderingCanvas(),
        maxTextureSize: kd.getCaps().maxTextureSize,
        drawing: () => !dd.YG,
        resize: (dd, Jd) => {
          kd.setSize(dd, Jd)
        },
        restoreSize: () => {
          kd.setSize(pd.width, pd.height), Jd.resize()
        },
        onFrameDrawn: Jd => (dd.on("afterRender", Jd), () => {
          dd.off("afterRender", Jd)
        })
      }
    }
    var gd = kd(41042),
      Cd = kd(9117);

    function Kd(dd, Jd) {
      let {
        width: Cd,
        height: Kd,
        colouring: od
      } = Jd;
      const ld = "normals" === od,
        Qd = "depth" === od;
      return new Promise((Jd => {
        try {
          const Ld = (0, Wd.e)();
          if (Ld.UL.yL) return "screenshot" !== dd || null !== od ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void Jd()) : void(0, gd.b)(Zd(Ld), Cd, Kd).finally(Jd);
          const Od = Ld.UL.engine,
            ed = Ld.UL.Wm(),
            Rd = Cd,
            Id = Kd;
          Promise.all([Promise.all([kd.e(246), kd.e(247), kd.e(228)]).then((() => kd(60859))), Promise.all([kd.e(227), kd.e(226), kd.e(246), kd.e(247), kd.e(244), kd.e(248), kd.e(251), kd.e(302), kd.e(232)]).then((() => kd(60867))), Promise.all([kd.e(227), kd.e(226), kd.e(246), kd.e(247), kd.e(244), kd.e(254), kd.e(248), kd.e(256), kd.e(234)]).then((() => kd(60873))), kd.e(345).then((() => kd(60880))), Promise.all([kd.e(226), kd.e(222)]).then((() => kd(37245))), kd.e(245).then((() => kd(60885))), kd.e(229).then((() => kd(60893)))]).then((Wd => {
            const {
              CreateScreenshotUsingRenderTarget: Zd
            } = Wd[1], {
              ShaderMaterial: gd
            } = Wd[2], {
              ShaderLanguage: Cd
            } = Wd[3], {
              IL: Kd
            } = Wd[4], {
              registerDevtoolsShader: od
            } = Wd[6], Ld = Cd.GLSL, Gd = new Map, vd = ed.meshes.filter((dd => dd.material));
            let xd = !1,
              qd = null;

            function Bd() {
              var dd;
              xd && (xd = !1, (0, pd.i)(ed.meshes, !1)), null === (dd = qd) || void 0 === dd || dd(), qd = null, vd.forEach((dd => {
                const Jd = Gd.get(dd);
                Jd && (dd.material = Jd)
              }))
            }
            if (ld) {
              const dd = [],
                Jd = [];
              vd.forEach((kd => {
                const pd = kd.name.toLowerCase(),
                  Nd = kd.pU().boundingBox.center,
                  Wd = ed.activeCamera.position.subtract(Nd).length();
                pd.includes("sky") || pd.includes("background") || pd.includes("environment") || Wd > 1e3 ? Jd.push(kd) : dd.push(kd)
              })), od("devtoolsNormal", Ld);
              const kd = new gd("normalMaterial", ed, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: Ld
              });
              od("devtoolsWhite", Ld);
              const pd = new gd("whiteMaterial", ed, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: Ld
              });
              dd.forEach((dd => {
                Gd.set(dd, dd.material), dd.material = kd
              })), Jd.forEach((dd => {
                Gd.set(dd, dd.material), dd.material = pd
              }))
            } else if (Qd) {
              od("devtoolsDepth", Ld);
              const dd = ed.activeCamera.position;
              let Jd = 0,
                kd = 1 / 0;
              vd.forEach((pd => {
                const Nd = pd.name.toLowerCase();
                if (Nd.includes("sky") || Nd.includes("background") || Nd.includes("environment")) return;
                const Wd = pd.pU().boundingBox.center,
                  Pd = Kd.TransformCoordinates(Wd, pd.getWorldMatrix()),
                  Zd = dd.subtract(Pd).length();
                Zd > 1e3 || (Jd = Math.max(Jd, Zd), kd = Math.min(kd, Zd))
              }));
              const pd = Jd - kd;
              Jd += .1 * pd, kd = Math.max(0, kd - .1 * pd), console.log(`Depth range: min=${kd.toFixed(2)}, max=${Jd.toFixed(2)}, range=${pd.toFixed(2)}`), pd < 1 && (Jd = kd + 10);
              const Nd = new gd("depthMaterial", ed, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: Ld
              });
              Nd.setVector3("cameraPosition", dd), Nd.setFloat("maxDepth", Jd), Nd.setFloat("minDepth", kd), vd.forEach((dd => {
                Gd.set(dd, dd.material), dd.material = Nd
              }))
            }
            if ((0, pd.i)(ed.meshes, !0), xd = !0, "glb" === dd && (qd = (0, Nd.b)(ed.meshes)), "screenshot" === dd) {
              let dd = `bloxd-screenshot-${Rd}x${Id}-${Date.now()}.png`;
              ld ? dd = `bloxd-screenshot-normals-${Rd}x${Id}-${Date.now()}.png` : Qd && (dd = `bloxd-screenshot-depth-${Rd}x${Id}-${Date.now()}.png`), Zd(Od, ed.activeCamera, {
                width: Rd,
                height: Id
              }, (function(kd) {
                Bd(), fetch(kd).then((function(dd) {
                  return dd.blob()
                })).then((function(kd) {
                  (0, Pd.downloadBlob)(kd, dd), Jd()
                })).catch((function(dd) {
                  console.error("Error processing screenshot:", dd), Jd()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), Bd(), Jd()
              }))
            } else {
              let dd = "BO";
              ld ? dd = "scene-normals" : Qd && (dd = "scene-depth"), ld || Qd ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: dd
                  } = await Promise.all([kd.e(227), kd.e(226), kd.e(246), kd.e(247), kd.e(244), kd.e(254), kd.e(253), kd.e(233)]).then((() => kd(40251))), {
                    Color3: Jd
                  } = await Promise.all([kd.e(227), kd.e(230)]).then((() => kd(37438))), pd = [], Nd = [];
                  if (vd.forEach((dd => {
                      const Jd = dd.name.toLowerCase(),
                        kd = dd.pU().boundingBox.center,
                        Wd = ed.activeCamera.position.subtract(kd).length();
                      Jd.includes("sky") || Jd.includes("background") || Jd.includes("environment") || Wd > 1e3 ? Nd.push(dd) : pd.push(dd)
                    })), ld) pd.forEach(((kd, pd) => {
                    const Nd = kd.getVerticesData("normal");
                    if (Nd) {
                      const Wd = [];
                      for (let dd = 0; dd < Nd.length; dd += 3) {
                        const Jd = Math.abs(Nd[dd]),
                          kd = Math.abs(Nd[dd + 1]),
                          pd = Math.abs(Nd[dd + 2]);
                        Wd.push(Jd, kd, pd, 1)
                      }
                      kd.setVerticesData("color", Wd);
                      const Pd = new dd(`vertexColorMat_${pd}`, ed);
                      Pd.disableLighting = !0, Pd.emissiveColor = new Jd(1, 1, 1), Pd.specularColor = new Jd(0, 0, 0), kd.material = Pd
                    }
                  })), Nd.forEach(((kd, pd) => {
                    const Nd = kd.getVerticesData("position");
                    if (Nd) {
                      const Wd = [],
                        Pd = Nd.length / 3;
                      for (let dd = 0; dd < Pd; dd++) Wd.push(1, 1, 1, 1);
                      kd.setVerticesData("color", Wd);
                      const Zd = new dd(`whiteMat_${pd}`, ed);
                      Zd.disableLighting = !0, Zd.emissiveColor = new Jd(1, 1, 1), Zd.specularColor = new Jd(0, 0, 0), kd.material = Zd
                    }
                  }));
                  else if (Qd) {
                    const kd = ed.activeCamera.position;
                    let Nd = 0,
                      Wd = 1 / 0;
                    pd.forEach((dd => {
                      const Jd = dd.pU().boundingBox.center,
                        pd = Kd.TransformCoordinates(Jd, dd.getWorldMatrix()),
                        Pd = kd.subtract(pd).length();
                      Nd = Math.max(Nd, Pd), Wd = Math.min(Wd, Pd)
                    }));
                    const Pd = Nd - Wd;
                    Nd += .1 * Pd, Wd = Math.max(0, Wd - .1 * Pd), Pd < 1 && (Nd = Wd + 10), vd.forEach(((pd, Pd) => {
                      const Zd = pd.name.toLowerCase(),
                        gd = pd.pU().boundingBox.center,
                        Cd = Kd.TransformCoordinates(gd, pd.getWorldMatrix()),
                        od = kd.subtract(Cd).length();
                      if (!(Zd.includes("sky") || Zd.includes("background") || Zd.includes("environment") || od > 1e3)) {
                        const kd = 1 - Math.min(Math.max((od - Wd) / (Nd - Wd), 0), 1),
                          Zd = new dd(`depthMat_${Pd}`, ed);
                        Zd.diffuseColor = new Jd(kd, kd, kd), Zd.specularColor = new Jd(0, 0, 0), pd.material = Zd
                      }
                    }))
                  }
                })().then((() => Promise.all([kd.e(227), kd.e(226), kd.e(246), kd.e(247), kd.e(244), kd.e(254), kd.e(248), kd.e(253), kd.e(251), kd.e(243), kd.e(256), kd.e(265), kd.e(302), kd.e(238), kd.e(255), kd.e(225)]).then((() => kd(60897))))).then((Jd => Jd.GLTF2Export.GLBAsync(ed, dd))).then((dd => {
                  Bd(), dd.downloadFiles(), Jd()
                })).catch((dd => {
                  console.error("Error exporting GLB:", dd), Bd(), Jd()
                }))
              }), 100) : Promise.all([kd.e(227), kd.e(226), kd.e(246), kd.e(247), kd.e(244), kd.e(254), kd.e(248), kd.e(253), kd.e(251), kd.e(243), kd.e(256), kd.e(265), kd.e(302), kd.e(238), kd.e(255), kd.e(225)]).then((() => kd(60897))).then((kd => {
                kd.GLTF2Export.GLBAsync(ed, dd).then((dd => {
                  Bd(), dd.downloadFiles(), Jd()
                })).catch((dd => {
                  console.error("Error exporting GLB:", dd), Bd(), Jd()
                }))
              })).catch((dd => {
                console.error("Error importing serializers:", dd), Bd(), Jd()
              }))
            }
          })).catch((dd => {
            console.error("Error downloading the scene:", dd), Jd()
          }))
        } catch (Ld) {
          console.error("Error taking screenshot:", Ld), Jd()
        }
      }))
    }
    const od = new class {
      constructor() {
        this.tools = Cd.ALL_DEV_TOOLS
      }
      downloadScene(dd, Jd) {
        return Kd(dd, Jd)
      }
      async setAmbientLightIntensity(dd) {
        const {
          Color3: Jd
        } = await Promise.all([kd.e(227), kd.e(230)]).then((() => kd(37438)));
        (0, Wd.e)().UL.Wm().ambientColor = Jd.FromArray([dd, dd, dd])
      }
    }
  },
  41042: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => gd
    });
    var pd = kd(1769);
    const Nd = 33177600,
      Wd = 3e4;
    let Pd = !1;

    function Zd(dd, Jd, kd) {
      if (!dd.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (Pd) return Promise.reject(new Error("A screenshot is already being taken"));
      Pd = !0;
      const pd = function(dd, Jd, kd) {
        const pd = Math.max(1, dd),
          Wd = Math.max(1, Jd),
          Pd = Math.min(1, kd / Math.max(pd, Wd), Math.sqrt(Nd / (pd * Wd)));
        return {
          width: Math.max(1, Math.floor(pd * Pd)),
          height: Math.max(1, Math.floor(Wd * Pd))
        }
      }(Jd, kd, dd.maxTextureSize);
      return dd.resize(pd.width, pd.height), new Promise(((Jd, kd) => {
        let pd, Nd = 2,
          Zd = null;
        const gd = () => {
          var Jd;
          Pd = !1, null === (Jd = Zd) || void 0 === Jd || Jd(), clearTimeout(pd), dd.restoreSize()
        };
        pd = setTimeout((() => {
          gd(), kd(new Error("No frame was drawn to capture"))
        }), Wd), Zd = dd.onFrameDrawn((() => {
          if (Nd--, Nd > 0) return;
          const {
            canvas: pd
          } = dd, Wd = {
            width: pd.width,
            height: pd.height
          };
          try {
            pd.toBlob((dd => {
              dd ? Jd({
                blob: dd,
                ...Wd
              }) : kd(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (Pd) {
            kd(Pd)
          } finally {
            gd()
          }
        }))
      }))
    }
    async function gd(dd, Jd, kd) {
      try {
        const Nd = await Zd(dd, Jd, kd);
        (0, pd.d)(Nd.blob, `bloxd-screenshot-${Nd.width}x${Nd.height}-${Date.now()}.png`)
      } catch (Nd) {
        console.error("Error taking screenshot:", Nd)
      }
    }
  },
  37760: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Cd,
      i: () => Zd,
      j: () => Pd
    });
    var pd = kd(37753),
      Nd = kd(37769);
    let Wd = 0;

    function Pd(dd, Jd) {
      const kd = dd;
      kd._noaFaceGroups = null !== Jd && void 0 !== Jd ? Jd : null, kd._noaFaceEpoch = -1, kd._noaFaceMask = -1, kd._noaFaceCount = -1, kd._noaFaceMaterial = null;
      const pd = dd.rG;
      pd && 1 === pd.length && (pd[0].indexStart = 0, pd[0].indexCount = dd.getTotalIndices())
    }

    function Zd(dd, Jd) {
      if (Jd) {
        Wd++;
        for (const Jd of dd) {
          const dd = Jd._noaFaceGroups;
          dd && Pd(Jd, dd)
        }
      } else Wd = Math.max(0, Wd - 1)
    }

    function gd(dd, Jd, kd) {
      let Nd = -1,
        Wd = 0;
      for (let Pd = 0; Pd < pd.g; Pd++) {
        const kd = dd[Pd],
          Zd = dd[Pd + 1];
        Zd > kd && Jd & 1 << pd.e[Pd] && (Nd < 0 && (Nd = kd), Wd = Zd)
      }
      return Nd < 0 ? (kd[0] = 0, kd[1] = 0, 0) : (kd[0] = Nd, kd[1] = Wd - Nd, Wd - Nd)
    }
    class Cd {
      constructor(dd, Jd) {
        this.KL = dd, this.engine = Jd, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(dd, Jd) {
        if (!Jd) return;
        const kd = Jd.getProjectionMatrix().m,
          Pd = 0 === Wd && 0 === kd[15],
          Zd = Jd.globalPosition,
          {
            engine: Cd
          } = this,
          Kd = Pd ? (0, Nd.e)(kd, Cd.getRenderWidth(), Cd.getRenderHeight()) : 0;
        Zd.x === this.eyeX && Zd.y === this.eyeY && Zd.z === this.eyeZ && Kd === this.focalPx && Pd === this.culling || (this.epoch++, this.eyeX = Zd.x, this.eyeY = Zd.y, this.eyeZ = Zd.z, this.focalPx = Kd, this.culling = Pd);
        const {
          epoch: od,
          range: ld
        } = this, Qd = this.KL / 2, Ld = Qd * Math.sqrt(3), Od = dd.data, ed = dd.length;
        let Rd = 0;
        for (let Wd = 0; Wd < ed; Wd++) {
          const dd = Od[Wd],
            Jd = dd._noaFaceGroups;
          if (Jd && (dd._noaFaceEpoch !== od || dd._noaFaceMaterial !== dd.material)) {
            dd._noaFaceEpoch = od, dd._noaFaceMaterial = dd.material;
            const kd = dd.rG,
              Wd = kd && 1 === kd.length ? kd[0] : null;
            let Cd = -1;
            if (Pd && Wd && (0, pd.u)(dd.material)) {
              const kd = dd.position,
                pd = Zd.x - kd.x,
                Wd = Zd.y - kd.y,
                Pd = Zd.z - kd.z,
                gd = pd - Qd,
                od = Wd - Qd,
                ld = Pd - Qd,
                Od = Math.sqrt(gd * gd + od * od + ld * ld) + Ld;
              Cd = (0, Nd.m)(Jd, pd, Wd, Pd, (0, Nd.i)(Od, Kd))
            }
            if (Wd && Cd !== dd._noaFaceMask) {
              dd._noaFaceMask = Cd;
              let kd = 0,
                Nd = Jd[pd.g]; - 1 !== Cd && (Nd = gd(Jd, Cd, ld), kd = ld[0]), dd._noaFaceCount = Nd, Wd.indexStart = 6 * kd, Wd.indexCount = 6 * Nd, Wd.setBoundingInfo(dd.pU())
            }
          }
          Jd && 0 === dd._noaFaceCount || (Od[Rd++] = dd)
        }
        dd.length = Rd
      }
    }
  },
  37743: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => gd,
      d: () => Zd
    });
    const pd = new WeakSet;
    let Nd = 0;
    const Wd = new Set;

    function Pd(dd, Jd) {
      dd._data = Jd
    }

    function Zd(dd) {
      var Jd, kd;
      (null !== (Jd = null === (kd = dd.getBuffer()) || void 0 === kd ? void 0 : kd.oo) && void 0 !== Jd ? Jd : 0) > 0 && (pd.add(dd), 0 === Nd ? Pd(dd, null) : Wd.add(dd))
    }

    function gd(dd) {
      Nd++;
      for (const kd of function(dd) {
          const Jd = new Set;
          for (const Nd of dd) {
            const dd = Nd.geometry;
            for (const Nd of Object.values(null !== (kd = null === dd || void 0 === dd ? void 0 : dd.getVertexBuffers()) && void 0 !== kd ? kd : {})) {
              var kd;
              const dd = Nd.getWrapperBuffer();
              pd.has(dd) && Jd.add(dd)
            }
          }
          return Jd
        }(dd)) kd.getData() || Cd(kd), Wd.add(kd);
      let Jd = !0;
      return () => {
        if (Jd && (Jd = !1, Nd--, 0 === Nd)) {
          for (const dd of Wd) Pd(dd, null);
          Wd.clear()
        }
      }
    }

    function Cd(dd) {
      const Jd = dd.getBuffer();
      if (!Jd || !(Jd.oo > 0)) return;
      const kd = dd._engine,
        pd = new Uint8Array(Jd.oo);
      kd.bindArrayBuffer(Jd), kd._gl.getBufferSubData(kd._gl.ARRAY_BUFFER, 0, pd), kd._resetVertexBufferBinding(), Pd(dd, pd)
    }
  },
  37753: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Pd,
      g: () => Wd,
      k: () => gd,
      n: () => pd,
      p: () => Zd,
      r: () => Nd,
      u: () => Cd
    });
    const pd = 6,
      Nd = [0, 2, 4, 1, 3, 5, 0, 2],
      Wd = 6,
      Pd = [1, 0, 3, 2, 5, 4];
    for (let Kd = Wd; Kd < Nd.length; Kd++)
      if (Nd[Kd] !== Nd[Kd - Wd]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const Zd = Nd.length + 1,
      gd = (() => {
        const dd = [];
        for (let Jd = 0; Jd < Wd; Jd++) dd[Nd[Jd]] = Jd;
        return dd
      })();

    function Cd(dd) {
      return !!dd && dd.backFaceCulling && (0 === dd.transparencyMode || 1 === dd.transparencyMode)
    }
  },
  37769: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Zd,
      i: () => gd,
      k: () => Kd,
      m: () => Cd,
      n: () => Ld
    });
    var pd = kd(37753);
    const Nd = 1 / 16,
      Wd = 1 / 64,
      Pd = 2048;
    pd.n;

    function Zd(dd, Jd, kd) {
      return Math.min(Math.abs(dd[0] * Jd), Math.abs(dd[5] * kd)) / 2
    }

    function gd(dd, Jd) {
      return Nd + Wd * dd * dd / Jd
    }

    function Cd(dd, Jd, kd, Nd, Wd) {
      const Pd = pd.p;
      return Kd(dd[Pd], dd[Pd + 1], dd[Pd + 2], dd[Pd + 3], dd[Pd + 4], dd[Pd + 5], Jd, kd, Nd, Wd)
    }

    function Kd(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd) {
      return (Pd <= dd - Cd ? 0 : 1) | (Pd >= Jd + Cd ? 0 : 2) | (Zd <= kd - Cd ? 0 : 4) | (Zd >= pd + Cd ? 0 : 8) | (gd <= Nd - Cd ? 0 : 16) | (gd >= Wd + Cd ? 0 : 32)
    }
    const od = (() => {
        const dd = [];
        for (let Jd = 0; Jd < pd.r.length; Jd++) {
          let kd = 0;
          for (let Nd = Jd + 1; Nd <= pd.r.length; Nd++) {
            const Wd = 1 << pd.r[Nd - 1];
            if (kd & Wd) break;
            kd |= Wd, dd.push({
              start: Jd,
              end: Nd,
              qJ: kd
            })
          }
        }
        return dd
      })(),
      ld = [];

    function Qd(dd, Jd) {
      const kd = pd.k[Jd];
      return dd[kd + 1] - dd[kd]
    }

    function Ld(dd, Jd, kd) {
      let Nd = 0;
      for (let Pd = 0; Pd < pd.n; Pd++) Qd(dd, Pd) > 0 && (Nd |= 1 << Pd);
      if (0 === (Jd &= Nd)) return 0;
      if (Jd === Nd) return kd[0] = 0, kd[1] = dd[pd.g], 1;
      let Wd = null,
        Zd = 1 / 0;
      for (const Cd of function(dd) {
          let Jd = ld[dd];
          if (Jd) return Jd;
          const kd = new Map,
            pd = (dd, Jd) => {
              const pd = 4 * dd + Jd.length / 2;
              kd.has(pd) || kd.set(pd, {
                qJ: dd,
                windows: Jd
              })
            };
          for (const Wd of od)
            if ((Wd.qJ & dd) === dd && pd(Wd.qJ, [Wd.start, Wd.end]), 0 !== (Wd.qJ & dd))
              for (const Jd of od) Jd.start < Wd.end || 0 !== (Wd.qJ & Jd.qJ) || 0 === (Jd.qJ & dd) || ((Wd.qJ | Jd.qJ) & dd) !== dd || pd(Wd.qJ | Jd.qJ, [Wd.start, Wd.end, Jd.start, Jd.end]);
          const Nd = [...kd.values()];
          return Jd = Nd.filter((dd => !Nd.some((Jd => Jd !== dd && (Jd.qJ & dd.qJ) === Jd.qJ && Jd.windows.length <= dd.windows.length)))), ld[dd] = Jd, Jd
        }(Jd)) {
        let kd = (Cd.windows.length / 2 - 1) * Pd;
        const gd = Cd.qJ & ~Jd & Nd;
        for (let Jd = 0; Jd < pd.n; Jd++) gd & 1 << Jd && (kd += Qd(dd, Jd));
        kd < Zd && (Wd = Cd, Zd = kd)
      }
      const gd = Wd.windows;
      for (let pd = 0; pd < gd.length; pd += 2) {
        const Jd = dd[gd[pd]];
        kd[pd] = Jd, kd[pd + 1] = dd[gd[pd + 1]] - Jd
      }
      return gd.length / 2
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);