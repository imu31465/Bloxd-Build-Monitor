export const id = 215;
export const ids = [215];
export const modules = {
  39049: (cB, Bc, nc) => {
    nc.d(Bc, {
      noaDevTools: () => qB
    });
    var Vc = nc(36051),
      Ic = nc(2187),
      rB = nc(1495);

    function uc(cB) {
      const {
        tr: Bc
      } = cB, nc = Bc.engine, Vc = {
        width: nc.getRenderWidth(),
        height: nc.getRenderHeight()
      };
      return {
        canvas: nc.getRenderingCanvas(),
        maxTextureSize: nc.getCaps().maxTextureSize,
        drawing: () => !cB.eC,
        resize: (cB, Bc) => {
          nc.setSize(cB, Bc)
        },
        restoreSize: () => {
          nc.setSize(Vc.width, Vc.height), Bc.resize()
        },
        onFrameDrawn: Bc => (cB.on("afterRender", Bc), () => {
          cB.off("afterRender", Bc)
        })
      }
    }
    var sc = nc(39024),
      Mc = nc(8120);

    function Pc(cB, Bc) {
      let {
        width: Mc,
        height: Pc,
        colouring: qB
      } = Bc;
      const Oc = "normals" === qB,
        Tc = "depth" === qB;
      return new Promise((Bc => {
        try {
          const fc = (0, Ic.g)();
          if (fc.tr.SI) return "screenshot" !== cB || null !== qB ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void Bc()) : void(0, sc.e)(uc(fc), Mc, Pc).finally(Bc);
          const mB = fc.tr.engine,
            ec = fc.tr.knc(),
            tB = Mc,
            Sc = Pc;
          Promise.all([Promise.all([nc.e(230), nc.e(231), nc.e(213)]).then((() => nc(59077))), Promise.all([nc.e(212), nc.e(211), nc.e(230), nc.e(231), nc.e(228), nc.e(232), nc.e(235), nc.e(286), nc.e(216)]).then((() => nc(59082))), Promise.all([nc.e(212), nc.e(211), nc.e(230), nc.e(231), nc.e(228), nc.e(238), nc.e(232), nc.e(240), nc.e(218)]).then((() => nc(59086))), nc.e(329).then((() => nc(59090))), Promise.all([nc.e(211), nc.e(207)]).then((() => nc(35753))), nc.e(229).then((() => nc(59093))), nc.e(206).then((() => nc(59095)))]).then((Ic => {
            const {
              CreateScreenshotUsingRenderTarget: uc
            } = Ic[1], {
              ShaderMaterial: sc
            } = Ic[2], {
              ShaderLanguage: Mc
            } = Ic[3], {
              KV: Pc
            } = Ic[4], {
              registerDevtoolsShader: qB
            } = Ic[6], fc = Mc.GLSL, yB = new Map, zB = ec.meshes.filter((cB => cB.material));
            let pc = !1;

            function hc() {
              pc && (pc = !1, (0, Vc.e)(ec.meshes, !1)), zB.forEach((cB => {
                const Bc = yB.get(cB);
                Bc && (cB.material = Bc)
              }))
            }
            if (Oc) {
              const cB = [],
                Bc = [];
              zB.forEach((nc => {
                const Vc = nc.name.toLowerCase(),
                  Ic = nc.qVc().boundingBox.center,
                  rB = ec.activeCamera.position.subtract(Ic).length();
                Vc.includes("sky") || Vc.includes("background") || Vc.includes("environment") || rB > 1e3 ? Bc.push(nc) : cB.push(nc)
              })), qB("devtoolsNormal", fc);
              const nc = new sc("normalMaterial", ec, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: fc
              });
              qB("devtoolsWhite", fc);
              const Vc = new sc("whiteMaterial", ec, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: fc
              });
              cB.forEach((cB => {
                yB.set(cB, cB.material), cB.material = nc
              })), Bc.forEach((cB => {
                yB.set(cB, cB.material), cB.material = Vc
              }))
            } else if (Tc) {
              qB("devtoolsDepth", fc);
              const cB = ec.activeCamera.position;
              let Bc = 0,
                nc = 1 / 0;
              zB.forEach((Vc => {
                const Ic = Vc.name.toLowerCase();
                if (Ic.includes("sky") || Ic.includes("background") || Ic.includes("environment")) return;
                const rB = Vc.qVc().boundingBox.center,
                  uc = Pc.TransformCoordinates(rB, Vc.getWorldMatrix()),
                  sc = cB.subtract(uc).length();
                sc > 1e3 || (Bc = Math.max(Bc, sc), nc = Math.min(nc, sc))
              }));
              const Vc = Bc - nc;
              Bc += .1 * Vc, nc = Math.max(0, nc - .1 * Vc), console.log(`Depth range: min=${nc.toFixed(2)}, max=${Bc.toFixed(2)}, range=${Vc.toFixed(2)}`), Vc < 1 && (Bc = nc + 10);
              const Ic = new sc("depthMaterial", ec, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: fc
              });
              Ic.setVector3("cameraPosition", cB), Ic.setFloat("maxDepth", Bc), Ic.setFloat("minDepth", nc), zB.forEach((cB => {
                yB.set(cB, cB.material), cB.material = Ic
              }))
            }
            if ((0, Vc.e)(ec.meshes, !0), pc = !0, "screenshot" === cB) {
              let cB = `bloxd-screenshot-${tB}x${Sc}-${Date.now()}.png`;
              Oc ? cB = `bloxd-screenshot-normals-${tB}x${Sc}-${Date.now()}.png` : Tc && (cB = `bloxd-screenshot-depth-${tB}x${Sc}-${Date.now()}.png`), uc(mB, ec.activeCamera, {
                width: tB,
                height: Sc
              }, (function(nc) {
                hc(), fetch(nc).then((function(cB) {
                  return cB.blob()
                })).then((function(nc) {
                  (0, rB.downloadBlob)(nc, cB), Bc()
                })).catch((function(cB) {
                  console.error("Error processing screenshot:", cB), Bc()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), hc(), Bc()
              }))
            } else {
              let cB = "Ir";
              Oc ? cB = "scene-normals" : Tc && (cB = "scene-depth"), Oc || Tc ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: cB
                  } = await Promise.all([nc.e(212), nc.e(211), nc.e(230), nc.e(231), nc.e(228), nc.e(238), nc.e(237), nc.e(217)]).then((() => nc(38294))), {
                    Color3: Bc
                  } = await Promise.all([nc.e(212), nc.e(214)]).then((() => nc(35808))), Vc = [], Ic = [];
                  if (zB.forEach((cB => {
                      const Bc = cB.name.toLowerCase(),
                        nc = cB.qVc().boundingBox.center,
                        rB = ec.activeCamera.position.subtract(nc).length();
                      Bc.includes("sky") || Bc.includes("background") || Bc.includes("environment") || rB > 1e3 ? Ic.push(cB) : Vc.push(cB)
                    })), Oc) Vc.forEach(((nc, Vc) => {
                    const Ic = nc.getVerticesData("normal");
                    if (Ic) {
                      const rB = [];
                      for (let cB = 0; cB < Ic.length; cB += 3) {
                        const Bc = Math.abs(Ic[cB]),
                          nc = Math.abs(Ic[cB + 1]),
                          Vc = Math.abs(Ic[cB + 2]);
                        rB.push(Bc, nc, Vc, 1)
                      }
                      nc.setVerticesData("color", rB);
                      const uc = new cB(`vertexColorMat_${Vc}`, ec);
                      uc.disableLighting = !0, uc.emissiveColor = new Bc(1, 1, 1), uc.specularColor = new Bc(0, 0, 0), nc.material = uc
                    }
                  })), Ic.forEach(((nc, Vc) => {
                    const Ic = nc.getVerticesData("position");
                    if (Ic) {
                      const rB = [],
                        uc = Ic.length / 3;
                      for (let cB = 0; cB < uc; cB++) rB.push(1, 1, 1, 1);
                      nc.setVerticesData("color", rB);
                      const sc = new cB(`whiteMat_${Vc}`, ec);
                      sc.disableLighting = !0, sc.emissiveColor = new Bc(1, 1, 1), sc.specularColor = new Bc(0, 0, 0), nc.material = sc
                    }
                  }));
                  else if (Tc) {
                    const nc = ec.activeCamera.position;
                    let Ic = 0,
                      rB = 1 / 0;
                    Vc.forEach((cB => {
                      const Bc = cB.qVc().boundingBox.center,
                        Vc = Pc.TransformCoordinates(Bc, cB.getWorldMatrix()),
                        uc = nc.subtract(Vc).length();
                      Ic = Math.max(Ic, uc), rB = Math.min(rB, uc)
                    }));
                    const uc = Ic - rB;
                    Ic += .1 * uc, rB = Math.max(0, rB - .1 * uc), uc < 1 && (Ic = rB + 10), zB.forEach(((Vc, uc) => {
                      const sc = Vc.name.toLowerCase(),
                        Mc = Vc.qVc().boundingBox.center,
                        qB = Pc.TransformCoordinates(Mc, Vc.getWorldMatrix()),
                        Oc = nc.subtract(qB).length();
                      if (!(sc.includes("sky") || sc.includes("background") || sc.includes("environment") || Oc > 1e3)) {
                        const nc = 1 - Math.min(Math.max((Oc - rB) / (Ic - rB), 0), 1),
                          sc = new cB(`depthMat_${uc}`, ec);
                        sc.diffuseColor = new Bc(nc, nc, nc), sc.specularColor = new Bc(0, 0, 0), Vc.material = sc
                      }
                    }))
                  }
                })().then((() => Promise.all([nc.e(212), nc.e(211), nc.e(230), nc.e(231), nc.e(228), nc.e(238), nc.e(232), nc.e(237), nc.e(235), nc.e(227), nc.e(240), nc.e(266), nc.e(286), nc.e(221), nc.e(239), nc.e(210)]).then((() => nc(59103))))).then((Bc => Bc.GLTF2Export.GLBAsync(ec, cB))).then((cB => {
                  hc(), cB.downloadFiles(), Bc()
                })).catch((cB => {
                  console.error("Error exporting GLB:", cB), hc(), Bc()
                }))
              }), 100) : Promise.all([nc.e(212), nc.e(211), nc.e(230), nc.e(231), nc.e(228), nc.e(238), nc.e(232), nc.e(237), nc.e(235), nc.e(227), nc.e(240), nc.e(266), nc.e(286), nc.e(221), nc.e(239), nc.e(210)]).then((() => nc(59103))).then((nc => {
                nc.GLTF2Export.GLBAsync(ec, cB).then((cB => {
                  hc(), cB.downloadFiles(), Bc()
                })).catch((cB => {
                  console.error("Error exporting GLB:", cB), hc(), Bc()
                }))
              })).catch((cB => {
                console.error("Error importing serializers:", cB), hc(), Bc()
              }))
            }
          })).catch((cB => {
            console.error("Error downloading the scene:", cB), Bc()
          }))
        } catch (fc) {
          console.error("Error taking screenshot:", fc), Bc()
        }
      }))
    }
    const qB = new class {
      constructor() {
        this.tools = Mc.ALL_DEV_TOOLS
      }
      downloadScene(cB, Bc) {
        return Pc(cB, Bc)
      }
      async setAmbientLightIntensity(cB) {
        const {
          Color3: Bc
        } = await Promise.all([nc.e(212), nc.e(214)]).then((() => nc(35808)));
        (0, Ic.g)().tr.knc().ambientColor = Bc.FromArray([cB, cB, cB])
      }
    }
  },
  39024: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Mc
    });
    var Vc = nc(1517);
    const Ic = 33177600,
      rB = 3e4;
    let uc = !1;

    function sc(cB, Bc, nc) {
      if (!cB.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (uc) return Promise.reject(new Error("A screenshot is already being taken"));
      uc = !0;
      const Vc = function(cB, Bc, nc) {
        const Vc = Math.max(1, cB),
          rB = Math.max(1, Bc),
          uc = Math.min(1, nc / Math.max(Vc, rB), Math.sqrt(Ic / (Vc * rB)));
        return {
          width: Math.max(1, Math.floor(Vc * uc)),
          height: Math.max(1, Math.floor(rB * uc))
        }
      }(Bc, nc, cB.maxTextureSize);
      return cB.resize(Vc.width, Vc.height), new Promise(((Bc, nc) => {
        let Vc, Ic = 2,
          sc = null;
        const Mc = () => {
          var Bc;
          uc = !1, null === (Bc = sc) || void 0 === Bc || Bc(), clearTimeout(Vc), cB.restoreSize()
        };
        Vc = setTimeout((() => {
          Mc(), nc(new Error("No frame was drawn to capture"))
        }), rB), sc = cB.onFrameDrawn((() => {
          if (Ic--, Ic > 0) return;
          const {
            canvas: Vc
          } = cB, rB = {
            width: Vc.width,
            height: Vc.height
          };
          try {
            Vc.toBlob((cB => {
              cB ? Bc({
                blob: cB,
                ...rB
              }) : nc(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (uc) {
            nc(uc)
          } finally {
            Mc()
          }
        }))
      }))
    }
    async function Mc(cB, Bc, nc) {
      try {
        const Ic = await sc(cB, Bc, nc);
        (0, Vc.c)(Ic.blob, `bloxd-screenshot-${Ic.width}x${Ic.height}-${Date.now()}.png`)
      } catch (Ic) {
        console.error("Error taking screenshot:", Ic)
      }
    }
  },
  36051: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Pc,
      e: () => sc,
      f: () => uc
    });
    var Vc = nc(36043),
      Ic = nc(36060);
    let rB = 0;

    function uc(cB, Bc) {
      const nc = cB;
      nc._noaFaceGroups = null !== Bc && void 0 !== Bc ? Bc : null, nc._noaFaceEpoch = -1, nc._noaFaceMask = -1, nc._noaFaceCount = -1, nc._noaFaceMaterial = null;
      const Vc = cB.rD;
      Vc && 1 === Vc.length && (Vc[0].indexStart = 0, Vc[0].indexCount = cB.getTotalIndices())
    }

    function sc(cB, Bc) {
      if (Bc) {
        rB++;
        for (const Bc of cB) {
          const cB = Bc._noaFaceGroups;
          cB && uc(Bc, cB)
        }
      } else rB = Math.max(0, rB - 1)
    }

    function Mc(cB, Bc, nc) {
      let Ic = -1,
        rB = 0;
      for (let uc = 0; uc < Vc.e; uc++) {
        const nc = cB[uc],
          sc = cB[uc + 1];
        sc > nc && Bc & 1 << Vc.d[uc] && (Ic < 0 && (Ic = nc), rB = sc)
      }
      return Ic < 0 ? (nc[0] = 0, nc[1] = 0, 0) : (nc[0] = Ic, nc[1] = rB - Ic, rB - Ic)
    }
    class Pc {
      constructor(cB, Bc) {
        this.kI = cB, this.engine = Bc, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(cB, Bc) {
        if (!Bc) return;
        const nc = Bc.getProjectionMatrix().m,
          uc = 0 === rB && 0 === nc[15],
          sc = Bc.globalPosition,
          {
            engine: Pc
          } = this,
          qB = uc ? (0, Ic.b)(nc, Pc.getRenderWidth(), Pc.getRenderHeight()) : 0;
        sc.x === this.eyeX && sc.y === this.eyeY && sc.z === this.eyeZ && qB === this.focalPx && uc === this.culling || (this.epoch++, this.eyeX = sc.x, this.eyeY = sc.y, this.eyeZ = sc.z, this.focalPx = qB, this.culling = uc);
        const {
          epoch: Oc,
          range: Tc
        } = this, fc = this.kI / 2, mB = fc * Math.sqrt(3), ec = cB.data, tB = cB.length;
        let Sc = 0;
        for (let rB = 0; rB < tB; rB++) {
          const cB = ec[rB],
            Bc = cB._noaFaceGroups;
          if (Bc && (cB._noaFaceEpoch !== Oc || cB._noaFaceMaterial !== cB.material)) {
            cB._noaFaceEpoch = Oc, cB._noaFaceMaterial = cB.material;
            const nc = cB.rD,
              rB = nc && 1 === nc.length ? nc[0] : null;
            let Pc = -1;
            if (uc && rB && (0, Vc.o)(cB.material)) {
              const nc = cB.position,
                Vc = sc.x - nc.x,
                rB = sc.y - nc.y,
                uc = sc.z - nc.z,
                Mc = Vc - fc,
                Oc = rB - fc,
                Tc = uc - fc,
                ec = Math.sqrt(Mc * Mc + Oc * Oc + Tc * Tc) + mB;
              Pc = (0, Ic.i)(Bc, Vc, rB, uc, (0, Ic.f)(ec, qB))
            }
            if (rB && Pc !== cB._noaFaceMask) {
              cB._noaFaceMask = Pc;
              let nc = 0,
                Ic = Bc[Vc.e]; - 1 !== Pc && (Ic = Mc(Bc, Pc, Tc), nc = Tc[0]), cB._noaFaceCount = Ic, rB.indexStart = 6 * nc, rB.indexCount = 6 * Ic, rB.setBoundingInfo(cB.qVc())
            }
          }
          Bc && 0 === cB._noaFaceCount || (ec[Sc++] = cB)
        }
        cB.length = Sc
      }
    }
  },
  36043: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => uc,
      e: () => rB,
      f: () => Mc,
      i: () => Vc,
      l: () => sc,
      m: () => Ic,
      o: () => Pc
    });
    const Vc = 6,
      Ic = [0, 2, 4, 1, 3, 5, 0, 2],
      rB = 6,
      uc = [1, 0, 3, 2, 5, 4];
    for (let qB = rB; qB < Ic.length; qB++)
      if (Ic[qB] !== Ic[qB - rB]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const sc = Ic.length + 1,
      Mc = (() => {
        const cB = [];
        for (let Bc = 0; Bc < rB; Bc++) cB[Ic[Bc]] = Bc;
        return cB
      })();

    function Pc(cB) {
      return !!cB && cB.backFaceCulling && (0 === cB.transparencyMode || 1 === cB.transparencyMode)
    }
  },
  36060: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => sc,
      f: () => Mc,
      g: () => qB,
      i: () => Pc,
      j: () => mB
    });
    var Vc = nc(36043);
    const Ic = 1 / 16,
      rB = 1 / 64,
      uc = 2048;
    Vc.i;

    function sc(cB, Bc, nc) {
      return Math.min(Math.abs(cB[0] * Bc), Math.abs(cB[5] * nc)) / 2
    }

    function Mc(cB, Bc) {
      return Ic + rB * cB * cB / Bc
    }

    function Pc(cB, Bc, nc, Ic, rB) {
      const uc = Vc.l;
      return qB(cB[uc], cB[uc + 1], cB[uc + 2], cB[uc + 3], cB[uc + 4], cB[uc + 5], Bc, nc, Ic, rB)
    }

    function qB(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc) {
      return (uc <= cB - Pc ? 0 : 1) | (uc >= Bc + Pc ? 0 : 2) | (sc <= nc - Pc ? 0 : 4) | (sc >= Vc + Pc ? 0 : 8) | (Mc <= Ic - Pc ? 0 : 16) | (Mc >= rB + Pc ? 0 : 32)
    }
    const Oc = (() => {
        const cB = [];
        for (let Bc = 0; Bc < Vc.m.length; Bc++) {
          let nc = 0;
          for (let Ic = Bc + 1; Ic <= Vc.m.length; Ic++) {
            const rB = 1 << Vc.m[Ic - 1];
            if (nc & rB) break;
            nc |= rB, cB.push({
              start: Bc,
              end: Ic,
              iV: nc
            })
          }
        }
        return cB
      })(),
      Tc = [];

    function fc(cB, Bc) {
      const nc = Vc.f[Bc];
      return cB[nc + 1] - cB[nc]
    }

    function mB(cB, Bc, nc) {
      let Ic = 0;
      for (let uc = 0; uc < Vc.i; uc++) fc(cB, uc) > 0 && (Ic |= 1 << uc);
      if (0 === (Bc &= Ic)) return 0;
      if (Bc === Ic) return nc[0] = 0, nc[1] = cB[Vc.e], 1;
      let rB = null,
        sc = 1 / 0;
      for (const Pc of function(cB) {
          let Bc = Tc[cB];
          if (Bc) return Bc;
          const nc = new Map,
            Vc = (cB, Bc) => {
              const Vc = 4 * cB + Bc.length / 2;
              nc.has(Vc) || nc.set(Vc, {
                iV: cB,
                windows: Bc
              })
            };
          for (const rB of Oc)
            if ((rB.iV & cB) === cB && Vc(rB.iV, [rB.start, rB.end]), 0 !== (rB.iV & cB))
              for (const Bc of Oc) Bc.start < rB.end || 0 !== (rB.iV & Bc.iV) || 0 === (Bc.iV & cB) || ((rB.iV | Bc.iV) & cB) !== cB || Vc(rB.iV | Bc.iV, [rB.start, rB.end, Bc.start, Bc.end]);
          const Ic = [...nc.values()];
          return Bc = Ic.filter((cB => !Ic.some((Bc => Bc !== cB && (Bc.iV & cB.iV) === Bc.iV && Bc.windows.length <= cB.windows.length)))), Tc[cB] = Bc, Bc
        }(Bc)) {
        let nc = (Pc.windows.length / 2 - 1) * uc;
        const Mc = Pc.iV & ~Bc & Ic;
        for (let Bc = 0; Bc < Vc.i; Bc++) Mc & 1 << Bc && (nc += fc(cB, Bc));
        nc < sc && (rB = Pc, sc = nc)
      }
      const Mc = rB.windows;
      for (let Vc = 0; Vc < Mc.length; Vc += 2) {
        const Bc = cB[Mc[Vc]];
        nc[Vc] = Bc, nc[Vc + 1] = cB[Mc[Vc + 1]] - Bc
      }
      return Mc.length / 2
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);