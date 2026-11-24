export const id = 242;
export const ids = [242];
export const modules = {
  41267: (tt, et, Vt) => {
    Vt.d(et, {
      noaDevTools: () => Qt
    });
    var Ot = Vt(37805),
      qt = Vt(37787),
      Dt = Vt(2848),
      mt = Vt(1826),
      dt = Vt(41162);

    function jt(tt) {
      const {
        Bf: et
      } = tt, Vt = et.engine, Ot = {
        width: Vt.getRenderWidth(),
        height: Vt.getRenderHeight()
      };
      return {
        canvas: Vt.getRenderingCanvas(),
        maxTextureSize: Vt.getCaps().maxTextureSize,
        drawing: () => !tt.NJ,
        resize: (tt, et) => {
          Vt.setSize(tt, et)
        },
        restoreSize: () => {
          Vt.setSize(Ot.width, Ot.height), et.resize()
        },
        onFrameDrawn: et => (tt.on("afterRender", et), () => {
          tt.off("afterRender", et)
        })
      }
    }
    var Ht = Vt(34255);

    function Xt(tt, et) {
      let {
        width: Ht,
        height: Xt,
        colouring: Qt
      } = et;
      const lt = "normals" === Qt,
        Et = "depth" === Qt;
      return new Promise((et => {
        try {
          const ft = (0, Dt.e)();
          if (ft.Bf.pf) return "screenshot" !== tt || null !== Qt ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void et()) : void(0, dt.e)(jt(ft), Ht, Xt).finally(et);
          const wt = ft.Bf.engine,
            yt = ft.Bf.vI(),
            Nt = Ht,
            Mt = Xt;
          Promise.all([Promise.all([Vt.e(258), Vt.e(259), Vt.e(238)]).then((() => Vt(61509))), Promise.all([Vt.e(237), Vt.e(236), Vt.e(258), Vt.e(259), Vt.e(256), Vt.e(260), Vt.e(263), Vt.e(316), Vt.e(243)]).then((() => Vt(61516))), Promise.all([Vt.e(237), Vt.e(236), Vt.e(258), Vt.e(259), Vt.e(256), Vt.e(266), Vt.e(260), Vt.e(268), Vt.e(245)]).then((() => Vt(61523))), Vt.e(357).then((() => Vt(61529))), Promise.all([Vt.e(236), Vt.e(232)]).then((() => Vt(37331))), Vt.e(257).then((() => Vt(61532))), Vt.e(240).then((() => Vt(61535)))]).then((Dt => {
            const {
              CreateScreenshotUsingRenderTarget: dt
            } = Dt[1], {
              ShaderMaterial: jt
            } = Dt[2], {
              ShaderLanguage: Ht
            } = Dt[3], {
              uf: Xt
            } = Dt[4], {
              registerDevtoolsShader: Qt
            } = Dt[6], ft = Ht.GLSL, bt = new Map, Jt = yt.meshes.filter((tt => tt.material));
            let Ct = !1,
              ut = null;

            function Kt() {
              var tt;
              Ct && (Ct = !1, (0, Ot.e)(yt.meshes, !1)), null === (tt = ut) || void 0 === tt || tt(), ut = null, Jt.forEach((tt => {
                const et = bt.get(tt);
                et && (tt.material = et)
              }))
            }
            if (lt) {
              const tt = [],
                et = [];
              Jt.forEach((Vt => {
                const Ot = Vt.name.toLowerCase(),
                  qt = Vt.fL().boundingBox.center,
                  Dt = yt.activeCamera.position.subtract(qt).length();
                Ot.includes("sky") || Ot.includes("background") || Ot.includes("environment") || Dt > 1e3 ? et.push(Vt) : tt.push(Vt)
              })), Qt("devtoolsNormal", ft);
              const Vt = new jt("normalMaterial", yt, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: ft
              });
              Qt("devtoolsWhite", ft);
              const Ot = new jt("whiteMaterial", yt, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: ft
              });
              tt.forEach((tt => {
                bt.set(tt, tt.material), tt.material = Vt
              })), et.forEach((tt => {
                bt.set(tt, tt.material), tt.material = Ot
              }))
            } else if (Et) {
              Qt("devtoolsDepth", ft);
              const tt = yt.activeCamera.position;
              let et = 0,
                Vt = 1 / 0;
              Jt.forEach((Ot => {
                const qt = Ot.name.toLowerCase();
                if (qt.includes("sky") || qt.includes("background") || qt.includes("environment")) return;
                const Dt = Ot.fL().boundingBox.center,
                  mt = Xt.TransformCoordinates(Dt, Ot.getWorldMatrix()),
                  dt = tt.subtract(mt).length();
                dt > 1e3 || (et = Math.max(et, dt), Vt = Math.min(Vt, dt))
              }));
              const Ot = et - Vt;
              et += .1 * Ot, Vt = Math.max(0, Vt - .1 * Ot), console.log(`Depth range: min=${Vt.toFixed(2)}, max=${et.toFixed(2)}, range=${Ot.toFixed(2)}`), Ot < 1 && (et = Vt + 10);
              const qt = new jt("depthMaterial", yt, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: ft
              });
              qt.setVector3("cameraPosition", tt), qt.setFloat("maxDepth", et), qt.setFloat("minDepth", Vt), Jt.forEach((tt => {
                bt.set(tt, tt.material), tt.material = qt
              }))
            }
            if ((0, Ot.e)(yt.meshes, !0), Ct = !0, "glb" === tt && (ut = (0, qt.b)(yt.meshes)), "screenshot" === tt) {
              let tt = `bloxd-screenshot-${Nt}x${Mt}-${Date.now()}.png`;
              lt ? tt = `bloxd-screenshot-normals-${Nt}x${Mt}-${Date.now()}.png` : Et && (tt = `bloxd-screenshot-depth-${Nt}x${Mt}-${Date.now()}.png`), dt(wt, yt.activeCamera, {
                width: Nt,
                height: Mt
              }, (function(Vt) {
                Kt(), fetch(Vt).then((function(tt) {
                  return tt.blob()
                })).then((function(Vt) {
                  (0, mt.downloadBlob)(Vt, tt), et()
                })).catch((function(tt) {
                  console.error("Error processing screenshot:", tt), et()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), Kt(), et()
              }))
            } else {
              let tt = "Fw";
              lt ? tt = "scene-normals" : Et && (tt = "scene-depth"), lt || Et ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: tt
                  } = await Promise.all([Vt.e(237), Vt.e(236), Vt.e(258), Vt.e(259), Vt.e(256), Vt.e(266), Vt.e(265), Vt.e(244)]).then((() => Vt(40452))), {
                    Color3: et
                  } = await Promise.all([Vt.e(237), Vt.e(241)]).then((() => Vt(37510))), Ot = [], qt = [];
                  if (Jt.forEach((tt => {
                      const et = tt.name.toLowerCase(),
                        Vt = tt.fL().boundingBox.center,
                        Dt = yt.activeCamera.position.subtract(Vt).length();
                      et.includes("sky") || et.includes("background") || et.includes("environment") || Dt > 1e3 ? qt.push(tt) : Ot.push(tt)
                    })), lt) Ot.forEach(((Vt, Ot) => {
                    const qt = Vt.getVerticesData("normal");
                    if (qt) {
                      const Dt = [];
                      for (let tt = 0; tt < qt.length; tt += 3) {
                        const et = Math.abs(qt[tt]),
                          Vt = Math.abs(qt[tt + 1]),
                          Ot = Math.abs(qt[tt + 2]);
                        Dt.push(et, Vt, Ot, 1)
                      }
                      Vt.setVerticesData("color", Dt);
                      const mt = new tt(`vertexColorMat_${Ot}`, yt);
                      mt.disableLighting = !0, mt.emissiveColor = new et(1, 1, 1), mt.specularColor = new et(0, 0, 0), Vt.material = mt
                    }
                  })), qt.forEach(((Vt, Ot) => {
                    const qt = Vt.getVerticesData("position");
                    if (qt) {
                      const Dt = [],
                        mt = qt.length / 3;
                      for (let tt = 0; tt < mt; tt++) Dt.push(1, 1, 1, 1);
                      Vt.setVerticesData("color", Dt);
                      const dt = new tt(`whiteMat_${Ot}`, yt);
                      dt.disableLighting = !0, dt.emissiveColor = new et(1, 1, 1), dt.specularColor = new et(0, 0, 0), Vt.material = dt
                    }
                  }));
                  else if (Et) {
                    const Vt = yt.activeCamera.position;
                    let qt = 0,
                      Dt = 1 / 0;
                    Ot.forEach((tt => {
                      const et = tt.fL().boundingBox.center,
                        Ot = Xt.TransformCoordinates(et, tt.getWorldMatrix()),
                        mt = Vt.subtract(Ot).length();
                      qt = Math.max(qt, mt), Dt = Math.min(Dt, mt)
                    }));
                    const mt = qt - Dt;
                    qt += .1 * mt, Dt = Math.max(0, Dt - .1 * mt), mt < 1 && (qt = Dt + 10), Jt.forEach(((Ot, mt) => {
                      const dt = Ot.name.toLowerCase(),
                        jt = Ot.fL().boundingBox.center,
                        Ht = Xt.TransformCoordinates(jt, Ot.getWorldMatrix()),
                        Qt = Vt.subtract(Ht).length();
                      if (!(dt.includes("sky") || dt.includes("background") || dt.includes("environment") || Qt > 1e3)) {
                        const Vt = 1 - Math.min(Math.max((Qt - Dt) / (qt - Dt), 0), 1),
                          dt = new tt(`depthMat_${mt}`, yt);
                        dt.diffuseColor = new et(Vt, Vt, Vt), dt.specularColor = new et(0, 0, 0), Ot.material = dt
                      }
                    }))
                  }
                })().then((() => Promise.all([Vt.e(237), Vt.e(236), Vt.e(258), Vt.e(259), Vt.e(256), Vt.e(266), Vt.e(260), Vt.e(265), Vt.e(263), Vt.e(255), Vt.e(268), Vt.e(279), Vt.e(316), Vt.e(249), Vt.e(267), Vt.e(235)]).then((() => Vt(61543))))).then((et => et.GLTF2Export.GLBAsync(yt, tt))).then((tt => {
                  Kt(), tt.downloadFiles(), et()
                })).catch((tt => {
                  console.error("Error exporting GLB:", tt), Kt(), et()
                }))
              }), 100) : Promise.all([Vt.e(237), Vt.e(236), Vt.e(258), Vt.e(259), Vt.e(256), Vt.e(266), Vt.e(260), Vt.e(265), Vt.e(263), Vt.e(255), Vt.e(268), Vt.e(279), Vt.e(316), Vt.e(249), Vt.e(267), Vt.e(235)]).then((() => Vt(61543))).then((Vt => {
                Vt.GLTF2Export.GLBAsync(yt, tt).then((tt => {
                  Kt(), tt.downloadFiles(), et()
                })).catch((tt => {
                  console.error("Error exporting GLB:", tt), Kt(), et()
                }))
              })).catch((tt => {
                console.error("Error importing serializers:", tt), Kt(), et()
              }))
            }
          })).catch((tt => {
            console.error("Error downloading the scene:", tt), et()
          }))
        } catch (ft) {
          console.error("Error taking screenshot:", ft), et()
        }
      }))
    }
    const Qt = new class {
      constructor() {
        this.tools = Ht.ALL_DEV_TOOLS
      }
      downloadScene(tt, et) {
        return Xt(tt, et)
      }
      async setAmbientLightIntensity(tt) {
        const {
          Color3: et
        } = await Promise.all([Vt.e(237), Vt.e(241)]).then((() => Vt(37510)));
        (0, Dt.e)().Bf.vI().ambientColor = et.FromArray([tt, tt, tt])
      }
      capturePhoto(tt, et, Vt) {
        return function(tt, et, Vt, Ot) {
          return (0, dt.d)(jt(tt), et, Vt, Ot)
        }((0, Dt.e)(), tt, et, Vt)
      }
    }
  },
  41162: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => dt,
      e: () => jt
    });
    var Ot = Vt(1842);
    const qt = 33177600,
      Dt = 3e4;
    let mt = !1;

    function dt(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: dt = 1,
        type: jt = "image/png",
        quality: Ht
      } = Ot;
      if (!tt.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (mt) return Promise.reject(new Error("A screenshot is already being taken"));
      mt = !0;
      const Xt = function(tt, et, Vt) {
        const Ot = Math.max(1, tt),
          Dt = Math.max(1, et),
          mt = Math.min(1, Vt / Math.max(Ot, Dt), Math.sqrt(qt / (Ot * Dt)));
        return {
          width: Math.max(1, Math.floor(Ot * mt)),
          height: Math.max(1, Math.floor(Dt * mt))
        }
      }(et, Vt, tt.maxTextureSize);
      return tt.resize(Xt.width, Xt.height, dt * Xt.width / Math.max(1, et)), new Promise(((et, Vt) => {
        let Ot, qt = 2,
          dt = null;
        const Xt = () => {
          var et;
          mt = !1, null === (et = dt) || void 0 === et || et(), clearTimeout(Ot), tt.restoreSize()
        };
        Ot = setTimeout((() => {
          Xt(), Vt(new Error("No frame was drawn to capture"))
        }), Dt), dt = tt.onFrameDrawn((() => {
          if (qt--, qt > 0) return;
          const {
            canvas: Ot
          } = tt, Dt = {
            width: Ot.width,
            height: Ot.height
          };
          try {
            Ot.toBlob((tt => {
              tt ? et({
                blob: tt,
                ...Dt
              }) : Vt(new Error("The canvas gave no image"))
            }), jt, Ht)
          } catch (mt) {
            Vt(mt)
          } finally {
            Xt()
          }
        }))
      }))
    }
    async function jt(tt, et, Vt) {
      try {
        const qt = await dt(tt, et, Vt);
        (0, Ot.c)(qt.blob, `bloxd-screenshot-${qt.width}x${qt.height}-${Date.now()}.png`)
      } catch (qt) {
        console.error("Error taking screenshot:", qt)
      }
    }
  },
  37805: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ht,
      e: () => dt,
      h: () => mt
    });
    var Ot = Vt(37798),
      qt = Vt(37814);
    let Dt = 0;

    function mt(tt, et) {
      const Vt = tt;
      Vt._noaFaceGroups = null !== et && void 0 !== et ? et : null, Vt._noaFaceEpoch = -1, Vt._noaFaceMask = -1, Vt._noaFaceCount = -1, Vt._noaFaceMaterial = null;
      const Ot = tt.vJ;
      Ot && 1 === Ot.length && (Ot[0].indexStart = 0, Ot[0].indexCount = tt.getTotalIndices())
    }

    function dt(tt, et) {
      if (et) {
        Dt++;
        for (const et of tt) {
          const tt = et._noaFaceGroups;
          tt && mt(et, tt)
        }
      } else Dt = Math.max(0, Dt - 1)
    }

    function jt(tt, et, Vt) {
      let qt = -1,
        Dt = 0;
      for (let mt = 0; mt < Ot.g; mt++) {
        const Vt = tt[mt],
          dt = tt[mt + 1];
        dt > Vt && et & 1 << Ot.d[mt] && (qt < 0 && (qt = Vt), Dt = dt)
      }
      return qt < 0 ? (Vt[0] = 0, Vt[1] = 0, 0) : (Vt[0] = qt, Vt[1] = Dt - qt, Dt - qt)
    }
    class Ht {
      constructor(tt, et) {
        this.ff = tt, this.engine = et, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(tt, et) {
        if (!et) return;
        const Vt = et.getProjectionMatrix().m,
          mt = 0 === Dt && 0 === Vt[15],
          dt = et.globalPosition,
          {
            engine: Ht
          } = this,
          Xt = mt ? (0, qt.d)(Vt, Ht.getRenderWidth(), Ht.getRenderHeight()) : 0;
        dt.x === this.eyeX && dt.y === this.eyeY && dt.z === this.eyeZ && Xt === this.focalPx && mt === this.culling || (this.epoch++, this.eyeX = dt.x, this.eyeY = dt.y, this.eyeZ = dt.z, this.focalPx = Xt, this.culling = mt);
        const {
          epoch: Qt,
          range: lt
        } = this, Et = this.ff / 2, ft = Et * Math.sqrt(3), wt = tt.data, yt = tt.length;
        let Nt = 0;
        for (let Dt = 0; Dt < yt; Dt++) {
          const tt = wt[Dt],
            et = tt._noaFaceGroups;
          if (et && (tt._noaFaceEpoch !== Qt || tt._noaFaceMaterial !== tt.material)) {
            tt._noaFaceEpoch = Qt, tt._noaFaceMaterial = tt.material;
            const Vt = tt.vJ,
              Dt = Vt && 1 === Vt.length ? Vt[0] : null;
            let Ht = -1;
            if (mt && Dt && (0, Ot.t)(tt.material)) {
              const Vt = tt.position,
                Ot = dt.x - Vt.x,
                Dt = dt.y - Vt.y,
                mt = dt.z - Vt.z,
                jt = Ot - Et,
                Qt = Dt - Et,
                lt = mt - Et,
                wt = Math.sqrt(jt * jt + Qt * Qt + lt * lt) + ft;
              Ht = (0, qt.l)(et, Ot, Dt, mt, (0, qt.h)(wt, Xt))
            }
            if (Dt && Ht !== tt._noaFaceMask) {
              tt._noaFaceMask = Ht;
              let Vt = 0,
                qt = et[Ot.g]; - 1 !== Ht && (qt = jt(et, Ht, lt), Vt = lt[0]), tt._noaFaceCount = qt, Dt.indexStart = 6 * Vt, Dt.indexCount = 6 * qt, Dt.setBoundingInfo(tt.fL())
            }
          }
          et && 0 === tt._noaFaceCount || (wt[Nt++] = tt)
        }
        tt.length = Nt
      }
    }
  },
  37787: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => jt,
      c: () => dt
    });
    const Ot = new WeakSet;
    let qt = 0;
    const Dt = new Set;

    function mt(tt, et) {
      tt._data = et
    }

    function dt(tt) {
      var et, Vt;
      (null !== (et = null === (Vt = tt.getBuffer()) || void 0 === Vt ? void 0 : Vt.uQ) && void 0 !== et ? et : 0) > 0 && (Ot.add(tt), 0 === qt ? mt(tt, null) : Dt.add(tt))
    }

    function jt(tt) {
      qt++;
      for (const Vt of function(tt) {
          const et = new Set;
          for (const qt of tt) {
            const tt = qt.geometry;
            for (const qt of Object.values(null !== (Vt = null === tt || void 0 === tt ? void 0 : tt.getVertexBuffers()) && void 0 !== Vt ? Vt : {})) {
              var Vt;
              const tt = qt.getWrapperBuffer();
              Ot.has(tt) && et.add(tt)
            }
          }
          return et
        }(tt)) Vt.getData() || Ht(Vt), Dt.add(Vt);
      let et = !0;
      return () => {
        if (et && (et = !1, qt--, 0 === qt)) {
          for (const tt of Dt) mt(tt, null);
          Dt.clear()
        }
      }
    }

    function Ht(tt) {
      const et = tt.getBuffer();
      if (!et || !(et.uQ > 0)) return;
      const Vt = tt._engine,
        Ot = new Uint8Array(et.uQ);
      Vt.bindArrayBuffer(et), Vt._gl.getBufferSubData(Vt._gl.ARRAY_BUFFER, 0, Ot), Vt._resetVertexBufferBinding(), mt(tt, Ot)
    }
  },
  37798: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt,
      g: () => Dt,
      j: () => jt,
      l: () => Ot,
      p: () => dt,
      r: () => qt,
      t: () => Ht
    });
    const Ot = 6,
      qt = [0, 2, 4, 1, 3, 5, 0, 2],
      Dt = 6,
      mt = [1, 0, 3, 2, 5, 4];
    for (let Xt = Dt; Xt < qt.length; Xt++)
      if (qt[Xt] !== qt[Xt - Dt]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const dt = qt.length + 1,
      jt = (() => {
        const tt = [];
        for (let et = 0; et < Dt; et++) tt[qt[et]] = et;
        return tt
      })();

    function Ht(tt) {
      return !!tt && tt.backFaceCulling && (0 === tt.transparencyMode || 1 === tt.transparencyMode)
    }
  },
  37814: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => dt,
      h: () => jt,
      i: () => Xt,
      l: () => Ht,
      o: () => ft
    });
    var Ot = Vt(37798);
    const qt = 1 / 16,
      Dt = 1 / 64,
      mt = 2048;
    Ot.l;

    function dt(tt, et, Vt) {
      return Math.min(Math.abs(tt[0] * et), Math.abs(tt[5] * Vt)) / 2
    }

    function jt(tt, et) {
      return qt + Dt * tt * tt / et
    }

    function Ht(tt, et, Vt, qt, Dt) {
      const mt = Ot.p;
      return Xt(tt[mt], tt[mt + 1], tt[mt + 2], tt[mt + 3], tt[mt + 4], tt[mt + 5], et, Vt, qt, Dt)
    }

    function Xt(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht) {
      return (mt <= tt - Ht ? 0 : 1) | (mt >= et + Ht ? 0 : 2) | (dt <= Vt - Ht ? 0 : 4) | (dt >= Ot + Ht ? 0 : 8) | (jt <= qt - Ht ? 0 : 16) | (jt >= Dt + Ht ? 0 : 32)
    }
    const Qt = (() => {
        const tt = [];
        for (let et = 0; et < Ot.r.length; et++) {
          let Vt = 0;
          for (let qt = et + 1; qt <= Ot.r.length; qt++) {
            const Dt = 1 << Ot.r[qt - 1];
            if (Vt & Dt) break;
            Vt |= Dt, tt.push({
              start: et,
              end: qt,
              PV: Vt
            })
          }
        }
        return tt
      })(),
      lt = [];

    function Et(tt, et) {
      const Vt = Ot.j[et];
      return tt[Vt + 1] - tt[Vt]
    }

    function ft(tt, et, Vt) {
      let qt = 0;
      for (let mt = 0; mt < Ot.l; mt++) Et(tt, mt) > 0 && (qt |= 1 << mt);
      if (0 === (et &= qt)) return 0;
      if (et === qt) return Vt[0] = 0, Vt[1] = tt[Ot.g], 1;
      let Dt = null,
        dt = 1 / 0;
      for (const Ht of function(tt) {
          let et = lt[tt];
          if (et) return et;
          const Vt = new Map,
            Ot = (tt, et) => {
              const Ot = 4 * tt + et.length / 2;
              Vt.has(Ot) || Vt.set(Ot, {
                PV: tt,
                windows: et
              })
            };
          for (const Dt of Qt)
            if ((Dt.PV & tt) === tt && Ot(Dt.PV, [Dt.start, Dt.end]), 0 !== (Dt.PV & tt))
              for (const et of Qt) et.start < Dt.end || 0 !== (Dt.PV & et.PV) || 0 === (et.PV & tt) || ((Dt.PV | et.PV) & tt) !== tt || Ot(Dt.PV | et.PV, [Dt.start, Dt.end, et.start, et.end]);
          const qt = [...Vt.values()];
          return et = qt.filter((tt => !qt.some((et => et !== tt && (et.PV & tt.PV) === et.PV && et.windows.length <= tt.windows.length)))), lt[tt] = et, et
        }(et)) {
        let Vt = (Ht.windows.length / 2 - 1) * mt;
        const jt = Ht.PV & ~et & qt;
        for (let et = 0; et < Ot.l; et++) jt & 1 << et && (Vt += Et(tt, et));
        Vt < dt && (Dt = Ht, dt = Vt)
      }
      const jt = Dt.windows;
      for (let Ot = 0; Ot < jt.length; Ot += 2) {
        const et = tt[jt[Ot]];
        Vt[Ot] = et, Vt[Ot + 1] = tt[jt[Ot + 1]] - et
      }
      return jt.length / 2
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);