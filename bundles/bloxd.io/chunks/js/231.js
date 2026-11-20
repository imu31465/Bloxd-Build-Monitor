export const id = 231;
export const ids = [231];
export const modules = {
  40363: (vv, zv, Pv) => {
    Pv.d(zv, {
      noaDevTools: () => Tv
    });
    var hv = Pv(37053),
      Sv = Pv(37030),
      ev = Pv(2599),
      gv = Pv(1692);

    function pv(vv) {
      const {
        Ma: zv
      } = vv, Pv = zv.engine, hv = {
        width: Pv.getRenderWidth(),
        height: Pv.getRenderHeight()
      };
      return {
        canvas: Pv.getRenderingCanvas(),
        maxTextureSize: Pv.getCaps().maxTextureSize,
        drawing: () => !vv.Am,
        resize: (vv, zv) => {
          Pv.setSize(vv, zv)
        },
        restoreSize: () => {
          Pv.setSize(hv.width, hv.height), zv.resize()
        },
        onFrameDrawn: zv => (vv.on("afterRender", zv), () => {
          vv.off("afterRender", zv)
        })
      }
    }
    var dv = Pv(40339),
      Nv = Pv(8882);

    function lv(vv, zv) {
      let {
        width: Nv,
        height: lv,
        colouring: Tv
      } = zv;
      const Wv = "normals" === Tv,
        wv = "depth" === Tv;
      return new Promise((zv => {
        try {
          const av = (0, ev.g)();
          if (av.Ma.ya) return "screenshot" !== vv || null !== Tv ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void zv()) : void(0, dv.c)(pv(av), Nv, lv).finally(zv);
          const sv = av.Ma.engine,
            Cv = av.Ma.rD(),
            iv = Nv,
            cv = lv;
          Promise.all([Promise.all([Pv.e(246), Pv.e(247), Pv.e(228)]).then((() => Pv(60565))), Promise.all([Pv.e(227), Pv.e(226), Pv.e(246), Pv.e(247), Pv.e(244), Pv.e(248), Pv.e(251), Pv.e(302), Pv.e(232)]).then((() => Pv(60567))), Promise.all([Pv.e(227), Pv.e(226), Pv.e(246), Pv.e(247), Pv.e(244), Pv.e(254), Pv.e(248), Pv.e(256), Pv.e(234)]).then((() => Pv(60574))), Pv.e(345).then((() => Pv(60579))), Promise.all([Pv.e(226), Pv.e(222)]).then((() => Pv(36591))), Pv.e(245).then((() => Pv(60587))), Pv.e(229).then((() => Pv(60592)))]).then((ev => {
            const {
              CreateScreenshotUsingRenderTarget: pv
            } = ev[1], {
              ShaderMaterial: dv
            } = ev[2], {
              ShaderLanguage: Nv
            } = ev[3], {
              fa: lv
            } = ev[4], {
              registerDevtoolsShader: Tv
            } = ev[6], av = Nv.GLSL, Gv = new Map, mv = Cv.meshes.filter((vv => vv.material));
            let jv = !1,
              fv = null;

            function Fv() {
              var vv;
              jv && (jv = !1, (0, hv.i)(Cv.meshes, !1)), null === (vv = fv) || void 0 === vv || vv(), fv = null, mv.forEach((vv => {
                const zv = Gv.get(vv);
                zv && (vv.material = zv)
              }))
            }
            if (Wv) {
              const vv = [],
                zv = [];
              mv.forEach((Pv => {
                const hv = Pv.name.toLowerCase(),
                  Sv = Pv.cV().boundingBox.center,
                  ev = Cv.activeCamera.position.subtract(Sv).length();
                hv.includes("sky") || hv.includes("background") || hv.includes("environment") || ev > 1e3 ? zv.push(Pv) : vv.push(Pv)
              })), Tv("devtoolsNormal", av);
              const Pv = new dv("normalMaterial", Cv, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: av
              });
              Tv("devtoolsWhite", av);
              const hv = new dv("whiteMaterial", Cv, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: av
              });
              vv.forEach((vv => {
                Gv.set(vv, vv.material), vv.material = Pv
              })), zv.forEach((vv => {
                Gv.set(vv, vv.material), vv.material = hv
              }))
            } else if (wv) {
              Tv("devtoolsDepth", av);
              const vv = Cv.activeCamera.position;
              let zv = 0,
                Pv = 1 / 0;
              mv.forEach((hv => {
                const Sv = hv.name.toLowerCase();
                if (Sv.includes("sky") || Sv.includes("background") || Sv.includes("environment")) return;
                const ev = hv.cV().boundingBox.center,
                  gv = lv.TransformCoordinates(ev, hv.getWorldMatrix()),
                  pv = vv.subtract(gv).length();
                pv > 1e3 || (zv = Math.max(zv, pv), Pv = Math.min(Pv, pv))
              }));
              const hv = zv - Pv;
              zv += .1 * hv, Pv = Math.max(0, Pv - .1 * hv), console.log(`Depth range: min=${Pv.toFixed(2)}, max=${zv.toFixed(2)}, range=${hv.toFixed(2)}`), hv < 1 && (zv = Pv + 10);
              const Sv = new dv("depthMaterial", Cv, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: av
              });
              Sv.setVector3("cameraPosition", vv), Sv.setFloat("maxDepth", zv), Sv.setFloat("minDepth", Pv), mv.forEach((vv => {
                Gv.set(vv, vv.material), vv.material = Sv
              }))
            }
            if ((0, hv.i)(Cv.meshes, !0), jv = !0, "glb" === vv && (fv = (0, Sv.c)(Cv.meshes)), "screenshot" === vv) {
              let vv = `bloxd-screenshot-${iv}x${cv}-${Date.now()}.png`;
              Wv ? vv = `bloxd-screenshot-normals-${iv}x${cv}-${Date.now()}.png` : wv && (vv = `bloxd-screenshot-depth-${iv}x${cv}-${Date.now()}.png`), pv(sv, Cv.activeCamera, {
                width: iv,
                height: cv
              }, (function(Pv) {
                Fv(), fetch(Pv).then((function(vv) {
                  return vv.blob()
                })).then((function(Pv) {
                  (0, gv.downloadBlob)(Pv, vv), zv()
                })).catch((function(vv) {
                  console.error("Error processing screenshot:", vv), zv()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), Fv(), zv()
              }))
            } else {
              let vv = "Is";
              Wv ? vv = "scene-normals" : wv && (vv = "scene-depth"), Wv || wv ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: vv
                  } = await Promise.all([Pv.e(227), Pv.e(226), Pv.e(246), Pv.e(247), Pv.e(244), Pv.e(254), Pv.e(253), Pv.e(233)]).then((() => Pv(39560))), {
                    Color3: zv
                  } = await Promise.all([Pv.e(227), Pv.e(230)]).then((() => Pv(36745))), hv = [], Sv = [];
                  if (mv.forEach((vv => {
                      const zv = vv.name.toLowerCase(),
                        Pv = vv.cV().boundingBox.center,
                        ev = Cv.activeCamera.position.subtract(Pv).length();
                      zv.includes("sky") || zv.includes("background") || zv.includes("environment") || ev > 1e3 ? Sv.push(vv) : hv.push(vv)
                    })), Wv) hv.forEach(((Pv, hv) => {
                    const Sv = Pv.getVerticesData("normal");
                    if (Sv) {
                      const ev = [];
                      for (let vv = 0; vv < Sv.length; vv += 3) {
                        const zv = Math.abs(Sv[vv]),
                          Pv = Math.abs(Sv[vv + 1]),
                          hv = Math.abs(Sv[vv + 2]);
                        ev.push(zv, Pv, hv, 1)
                      }
                      Pv.setVerticesData("color", ev);
                      const gv = new vv(`vertexColorMat_${hv}`, Cv);
                      gv.disableLighting = !0, gv.emissiveColor = new zv(1, 1, 1), gv.specularColor = new zv(0, 0, 0), Pv.material = gv
                    }
                  })), Sv.forEach(((Pv, hv) => {
                    const Sv = Pv.getVerticesData("position");
                    if (Sv) {
                      const ev = [],
                        gv = Sv.length / 3;
                      for (let vv = 0; vv < gv; vv++) ev.push(1, 1, 1, 1);
                      Pv.setVerticesData("color", ev);
                      const pv = new vv(`whiteMat_${hv}`, Cv);
                      pv.disableLighting = !0, pv.emissiveColor = new zv(1, 1, 1), pv.specularColor = new zv(0, 0, 0), Pv.material = pv
                    }
                  }));
                  else if (wv) {
                    const Pv = Cv.activeCamera.position;
                    let Sv = 0,
                      ev = 1 / 0;
                    hv.forEach((vv => {
                      const zv = vv.cV().boundingBox.center,
                        hv = lv.TransformCoordinates(zv, vv.getWorldMatrix()),
                        gv = Pv.subtract(hv).length();
                      Sv = Math.max(Sv, gv), ev = Math.min(ev, gv)
                    }));
                    const gv = Sv - ev;
                    Sv += .1 * gv, ev = Math.max(0, ev - .1 * gv), gv < 1 && (Sv = ev + 10), mv.forEach(((hv, gv) => {
                      const pv = hv.name.toLowerCase(),
                        dv = hv.cV().boundingBox.center,
                        Nv = lv.TransformCoordinates(dv, hv.getWorldMatrix()),
                        Tv = Pv.subtract(Nv).length();
                      if (!(pv.includes("sky") || pv.includes("background") || pv.includes("environment") || Tv > 1e3)) {
                        const Pv = 1 - Math.min(Math.max((Tv - ev) / (Sv - ev), 0), 1),
                          pv = new vv(`depthMat_${gv}`, Cv);
                        pv.diffuseColor = new zv(Pv, Pv, Pv), pv.specularColor = new zv(0, 0, 0), hv.material = pv
                      }
                    }))
                  }
                })().then((() => Promise.all([Pv.e(227), Pv.e(226), Pv.e(246), Pv.e(247), Pv.e(244), Pv.e(254), Pv.e(248), Pv.e(253), Pv.e(251), Pv.e(243), Pv.e(256), Pv.e(265), Pv.e(302), Pv.e(238), Pv.e(255), Pv.e(225)]).then((() => Pv(60598))))).then((zv => zv.GLTF2Export.GLBAsync(Cv, vv))).then((vv => {
                  Fv(), vv.downloadFiles(), zv()
                })).catch((vv => {
                  console.error("Error exporting GLB:", vv), Fv(), zv()
                }))
              }), 100) : Promise.all([Pv.e(227), Pv.e(226), Pv.e(246), Pv.e(247), Pv.e(244), Pv.e(254), Pv.e(248), Pv.e(253), Pv.e(251), Pv.e(243), Pv.e(256), Pv.e(265), Pv.e(302), Pv.e(238), Pv.e(255), Pv.e(225)]).then((() => Pv(60598))).then((Pv => {
                Pv.GLTF2Export.GLBAsync(Cv, vv).then((vv => {
                  Fv(), vv.downloadFiles(), zv()
                })).catch((vv => {
                  console.error("Error exporting GLB:", vv), Fv(), zv()
                }))
              })).catch((vv => {
                console.error("Error importing serializers:", vv), Fv(), zv()
              }))
            }
          })).catch((vv => {
            console.error("Error downloading the scene:", vv), zv()
          }))
        } catch (av) {
          console.error("Error taking screenshot:", av), zv()
        }
      }))
    }
    const Tv = new class {
      constructor() {
        this.tools = Nv.ALL_DEV_TOOLS
      }
      downloadScene(vv, zv) {
        return lv(vv, zv)
      }
      async setAmbientLightIntensity(vv) {
        const {
          Color3: zv
        } = await Promise.all([Pv.e(227), Pv.e(230)]).then((() => Pv(36745)));
        (0, ev.g)().Ma.rD().ambientColor = zv.FromArray([vv, vv, vv])
      }
    }
  },
  40339: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => dv
    });
    var hv = Pv(1711);
    const Sv = 33177600,
      ev = 3e4;
    let gv = !1;

    function pv(vv, zv, Pv) {
      if (!vv.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (gv) return Promise.reject(new Error("A screenshot is already being taken"));
      gv = !0;
      const hv = function(vv, zv, Pv) {
        const hv = Math.max(1, vv),
          ev = Math.max(1, zv),
          gv = Math.min(1, Pv / Math.max(hv, ev), Math.sqrt(Sv / (hv * ev)));
        return {
          width: Math.max(1, Math.floor(hv * gv)),
          height: Math.max(1, Math.floor(ev * gv))
        }
      }(zv, Pv, vv.maxTextureSize);
      return vv.resize(hv.width, hv.height), new Promise(((zv, Pv) => {
        let hv, Sv = 2,
          pv = null;
        const dv = () => {
          var zv;
          gv = !1, null === (zv = pv) || void 0 === zv || zv(), clearTimeout(hv), vv.restoreSize()
        };
        hv = setTimeout((() => {
          dv(), Pv(new Error("No frame was drawn to capture"))
        }), ev), pv = vv.onFrameDrawn((() => {
          if (Sv--, Sv > 0) return;
          const {
            canvas: hv
          } = vv, ev = {
            width: hv.width,
            height: hv.height
          };
          try {
            hv.toBlob((vv => {
              vv ? zv({
                blob: vv,
                ...ev
              }) : Pv(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (gv) {
            Pv(gv)
          } finally {
            dv()
          }
        }))
      }))
    }
    async function dv(vv, zv, Pv) {
      try {
        const Sv = await pv(vv, zv, Pv);
        (0, hv.d)(Sv.blob, `bloxd-screenshot-${Sv.width}x${Sv.height}-${Date.now()}.png`)
      } catch (Sv) {
        console.error("Error taking screenshot:", Sv)
      }
    }
  },
  37053: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Nv,
      i: () => pv,
      k: () => gv
    });
    var hv = Pv(37044),
      Sv = Pv(37055);
    let ev = 0;

    function gv(vv, zv) {
      const Pv = vv;
      Pv._noaFaceGroups = null !== zv && void 0 !== zv ? zv : null, Pv._noaFaceEpoch = -1, Pv._noaFaceMask = -1, Pv._noaFaceCount = -1, Pv._noaFaceMaterial = null;
      const hv = vv.sF;
      hv && 1 === hv.length && (hv[0].indexStart = 0, hv[0].indexCount = vv.getTotalIndices())
    }

    function pv(vv, zv) {
      if (zv) {
        ev++;
        for (const zv of vv) {
          const vv = zv._noaFaceGroups;
          vv && gv(zv, vv)
        }
      } else ev = Math.max(0, ev - 1)
    }

    function dv(vv, zv, Pv) {
      let Sv = -1,
        ev = 0;
      for (let gv = 0; gv < hv.e; gv++) {
        const Pv = vv[gv],
          pv = vv[gv + 1];
        pv > Pv && zv & 1 << hv.c[gv] && (Sv < 0 && (Sv = Pv), ev = pv)
      }
      return Sv < 0 ? (Pv[0] = 0, Pv[1] = 0, 0) : (Pv[0] = Sv, Pv[1] = ev - Sv, ev - Sv)
    }
    class Nv {
      constructor(vv, zv) {
        this.aa = vv, this.engine = zv, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(vv, zv) {
        if (!zv) return;
        const Pv = zv.getProjectionMatrix().m,
          gv = 0 === ev && 0 === Pv[15],
          pv = zv.globalPosition,
          {
            engine: Nv
          } = this,
          lv = gv ? (0, Sv.e)(Pv, Nv.getRenderWidth(), Nv.getRenderHeight()) : 0;
        pv.x === this.eyeX && pv.y === this.eyeY && pv.z === this.eyeZ && lv === this.focalPx && gv === this.culling || (this.epoch++, this.eyeX = pv.x, this.eyeY = pv.y, this.eyeZ = pv.z, this.focalPx = lv, this.culling = gv);
        const {
          epoch: Tv,
          range: Wv
        } = this, wv = this.aa / 2, av = wv * Math.sqrt(3), sv = vv.data, Cv = vv.length;
        let iv = 0;
        for (let ev = 0; ev < Cv; ev++) {
          const vv = sv[ev],
            zv = vv._noaFaceGroups;
          if (zv && (vv._noaFaceEpoch !== Tv || vv._noaFaceMaterial !== vv.material)) {
            vv._noaFaceEpoch = Tv, vv._noaFaceMaterial = vv.material;
            const Pv = vv.sF,
              ev = Pv && 1 === Pv.length ? Pv[0] : null;
            let Nv = -1;
            if (gv && ev && (0, hv.r)(vv.material)) {
              const Pv = vv.position,
                hv = pv.x - Pv.x,
                ev = pv.y - Pv.y,
                gv = pv.z - Pv.z,
                dv = hv - wv,
                Tv = ev - wv,
                Wv = gv - wv,
                sv = Math.sqrt(dv * dv + Tv * Tv + Wv * Wv) + av;
              Nv = (0, Sv.k)(zv, hv, ev, gv, (0, Sv.f)(sv, lv))
            }
            if (ev && Nv !== vv._noaFaceMask) {
              vv._noaFaceMask = Nv;
              let Pv = 0,
                Sv = zv[hv.e]; - 1 !== Nv && (Sv = dv(zv, Nv, Wv), Pv = Wv[0]), vv._noaFaceCount = Sv, ev.indexStart = 6 * Pv, ev.indexCount = 6 * Sv, ev.setBoundingInfo(vv.cV())
            }
          }
          zv && 0 === vv._noaFaceCount || (sv[iv++] = vv)
        }
        vv.length = iv
      }
    }
  },
  37030: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => dv,
      e: () => pv
    });
    const hv = new WeakSet;
    let Sv = 0;
    const ev = new Set;

    function gv(vv, zv) {
      vv._data = zv
    }

    function pv(vv) {
      var zv, Pv;
      (null !== (zv = null === (Pv = vv.getBuffer()) || void 0 === Pv ? void 0 : Pv.GT) && void 0 !== zv ? zv : 0) > 0 && (hv.add(vv), 0 === Sv ? gv(vv, null) : ev.add(vv))
    }

    function dv(vv) {
      Sv++;
      for (const Pv of function(vv) {
          const zv = new Set;
          for (const Sv of vv) {
            const vv = Sv.geometry;
            for (const Sv of Object.values(null !== (Pv = null === vv || void 0 === vv ? void 0 : vv.getVertexBuffers()) && void 0 !== Pv ? Pv : {})) {
              var Pv;
              const vv = Sv.getWrapperBuffer();
              hv.has(vv) && zv.add(vv)
            }
          }
          return zv
        }(vv)) Pv.getData() || Nv(Pv), ev.add(Pv);
      let zv = !0;
      return () => {
        if (zv && (zv = !1, Sv--, 0 === Sv)) {
          for (const vv of ev) gv(vv, null);
          ev.clear()
        }
      }
    }

    function Nv(vv) {
      const zv = vv.getBuffer();
      if (!zv || !(zv.GT > 0)) return;
      const Pv = vv._engine,
        hv = new Uint8Array(zv.GT);
      Pv.bindArrayBuffer(zv), Pv._gl.getBufferSubData(Pv._gl.ARRAY_BUFFER, 0, hv), Pv._resetVertexBufferBinding(), gv(vv, hv)
    }
  },
  37044: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => gv,
      e: () => ev,
      h: () => dv,
      l: () => hv,
      n: () => pv,
      o: () => Sv,
      r: () => Nv
    });
    const hv = 6,
      Sv = [0, 2, 4, 1, 3, 5, 0, 2],
      ev = 6,
      gv = [1, 0, 3, 2, 5, 4];
    for (let lv = ev; lv < Sv.length; lv++)
      if (Sv[lv] !== Sv[lv - ev]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const pv = Sv.length + 1,
      dv = (() => {
        const vv = [];
        for (let zv = 0; zv < ev; zv++) vv[Sv[zv]] = zv;
        return vv
      })();

    function Nv(vv) {
      return !!vv && vv.backFaceCulling && (0 === vv.transparencyMode || 1 === vv.transparencyMode)
    }
  },
  37055: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => pv,
      f: () => dv,
      h: () => lv,
      k: () => Nv,
      m: () => av
    });
    var hv = Pv(37044);
    const Sv = 1 / 16,
      ev = 1 / 64,
      gv = 2048;
    hv.l;

    function pv(vv, zv, Pv) {
      return Math.min(Math.abs(vv[0] * zv), Math.abs(vv[5] * Pv)) / 2
    }

    function dv(vv, zv) {
      return Sv + ev * vv * vv / zv
    }

    function Nv(vv, zv, Pv, Sv, ev) {
      const gv = hv.n;
      return lv(vv[gv], vv[gv + 1], vv[gv + 2], vv[gv + 3], vv[gv + 4], vv[gv + 5], zv, Pv, Sv, ev)
    }

    function lv(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv) {
      return (gv <= vv - Nv ? 0 : 1) | (gv >= zv + Nv ? 0 : 2) | (pv <= Pv - Nv ? 0 : 4) | (pv >= hv + Nv ? 0 : 8) | (dv <= Sv - Nv ? 0 : 16) | (dv >= ev + Nv ? 0 : 32)
    }
    const Tv = (() => {
        const vv = [];
        for (let zv = 0; zv < hv.o.length; zv++) {
          let Pv = 0;
          for (let Sv = zv + 1; Sv <= hv.o.length; Sv++) {
            const ev = 1 << hv.o[Sv - 1];
            if (Pv & ev) break;
            Pv |= ev, vv.push({
              start: zv,
              end: Sv,
              tz: Pv
            })
          }
        }
        return vv
      })(),
      Wv = [];

    function wv(vv, zv) {
      const Pv = hv.h[zv];
      return vv[Pv + 1] - vv[Pv]
    }

    function av(vv, zv, Pv) {
      let Sv = 0;
      for (let gv = 0; gv < hv.l; gv++) wv(vv, gv) > 0 && (Sv |= 1 << gv);
      if (0 === (zv &= Sv)) return 0;
      if (zv === Sv) return Pv[0] = 0, Pv[1] = vv[hv.e], 1;
      let ev = null,
        pv = 1 / 0;
      for (const Nv of function(vv) {
          let zv = Wv[vv];
          if (zv) return zv;
          const Pv = new Map,
            hv = (vv, zv) => {
              const hv = 4 * vv + zv.length / 2;
              Pv.has(hv) || Pv.set(hv, {
                tz: vv,
                windows: zv
              })
            };
          for (const ev of Tv)
            if ((ev.tz & vv) === vv && hv(ev.tz, [ev.start, ev.end]), 0 !== (ev.tz & vv))
              for (const zv of Tv) zv.start < ev.end || 0 !== (ev.tz & zv.tz) || 0 === (zv.tz & vv) || ((ev.tz | zv.tz) & vv) !== vv || hv(ev.tz | zv.tz, [ev.start, ev.end, zv.start, zv.end]);
          const Sv = [...Pv.values()];
          return zv = Sv.filter((vv => !Sv.some((zv => zv !== vv && (zv.tz & vv.tz) === zv.tz && zv.windows.length <= vv.windows.length)))), Wv[vv] = zv, zv
        }(zv)) {
        let Pv = (Nv.windows.length / 2 - 1) * gv;
        const dv = Nv.tz & ~zv & Sv;
        for (let zv = 0; zv < hv.l; zv++) dv & 1 << zv && (Pv += wv(vv, zv));
        Pv < pv && (ev = Nv, pv = Pv)
      }
      const dv = ev.windows;
      for (let hv = 0; hv < dv.length; hv += 2) {
        const zv = vv[dv[hv]];
        Pv[hv] = zv, Pv[hv + 1] = vv[dv[hv + 1]] - zv
      }
      return dv.length / 2
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);