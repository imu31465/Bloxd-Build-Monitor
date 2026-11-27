export const id = 264;
export const ids = [264];
export const modules = {
  42142: (ee, ie, He) => {
    He.d(ie, {
      noaDevTools: () => Re
    });
    var ye = He(38265),
      be = He(38247),
      Me = He(2969),
      Ke = He(1768),
      Ue = He(42065);

    function Fe(ee) {
      const {
        PR: ie
      } = ee, He = ie.engine, ye = {
        width: He.getRenderWidth(),
        height: He.getRenderHeight()
      };
      return {
        canvas: He.getRenderingCanvas(),
        maxTextureSize: He.getCaps().maxTextureSize,
        tR: () => !ee.AR,
        resize: (ee, ie) => {
          He.setSize(ee, ie)
        },
        restoreSize: () => {
          He.setSize(ye.width, ye.height), ie.resize()
        },
        onFrameDrawn: He => {
          const ye = () => {
            ie.FW && He()
          };
          return ee.on("afterRender", ye), () => {
            ee.off("afterRender", ye)
          }
        }
      }
    }
    var Je = He(34751);

    function oe(ee, ie) {
      let {
        width: Je,
        height: oe,
        colouring: Re
      } = ie;
      const ke = "normals" === Re,
        qe = "depth" === Re;
      return new Promise((ie => {
        try {
          const fe = (0, Me.h)();
          if (fe.PR.pT) return "screenshot" !== ee || null !== Re ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void ie()) : void(0, Ue.f)(Fe(fe), Je, oe).finally(ie);
          const Te = fe.PR.engine,
            pe = fe.PR.Xx(),
            Xe = Je,
            ze = oe;
          Promise.all([Promise.all([He.e(283), He.e(284), He.e(260)]).then((() => He(63809))), Promise.all([He.e(259), He.e(258), He.e(283), He.e(284), He.e(281), He.e(285), He.e(288), He.e(620), He.e(265)]).then((() => He(63814))), Promise.all([He.e(259), He.e(258), He.e(283), He.e(284), He.e(281), He.e(291), He.e(285), He.e(293), He.e(267)]).then((() => He(63819))), He.e(661).then((() => He(63827))), Promise.all([He.e(258), He.e(254)]).then((() => He(37913))), He.e(282).then((() => He(63834))), He.e(263).then((() => He(63840)))]).then((Me => {
            const {
              CreateScreenshotUsingRenderTarget: Ue
            } = Me[1], {
              ShaderMaterial: Fe
            } = Me[2], {
              ShaderLanguage: Je
            } = Me[3], {
              rf: oe
            } = Me[4], {
              registerDevtoolsShader: Re
            } = Me[6], fe = Je.GLSL, Be = new Map, Ee = pe.meshes.filter((ee => ee.material));
            let ge = !1,
              Oe = null;

            function de() {
              var ee;
              ge && (ge = !1, (0, ye.d)(pe.meshes, !1)), null === (ee = Oe) || void 0 === ee || ee(), Oe = null, Ee.forEach((ee => {
                const ie = Be.get(ee);
                ie && (ee.material = ie)
              }))
            }
            if (ke) {
              const ee = [],
                ie = [];
              Ee.forEach((He => {
                const ye = He.name.toLowerCase(),
                  be = He.WC().boundingBox.center,
                  Me = pe.activeCamera.position.subtract(be).length();
                ye.includes("sky") || ye.includes("background") || ye.includes("environment") || Me > 1e3 ? ie.push(He) : ee.push(He)
              })), Re("devtoolsNormal", fe);
              const He = new Fe("normalMaterial", pe, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: fe
              });
              Re("devtoolsWhite", fe);
              const ye = new Fe("whiteMaterial", pe, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: fe
              });
              ee.forEach((ee => {
                Be.set(ee, ee.material), ee.material = He
              })), ie.forEach((ee => {
                Be.set(ee, ee.material), ee.material = ye
              }))
            } else if (qe) {
              Re("devtoolsDepth", fe);
              const ee = pe.activeCamera.position;
              let ie = 0,
                He = 1 / 0;
              Ee.forEach((ye => {
                const be = ye.name.toLowerCase();
                if (be.includes("sky") || be.includes("background") || be.includes("environment")) return;
                const Me = ye.WC().boundingBox.center,
                  Ke = oe.TransformCoordinates(Me, ye.getWorldMatrix()),
                  Ue = ee.subtract(Ke).length();
                Ue > 1e3 || (ie = Math.max(ie, Ue), He = Math.min(He, Ue))
              }));
              const ye = ie - He;
              ie += .1 * ye, He = Math.max(0, He - .1 * ye), console.log(`Depth range: min=${He.toFixed(2)}, max=${ie.toFixed(2)}, range=${ye.toFixed(2)}`), ye < 1 && (ie = He + 10);
              const be = new Fe("depthMaterial", pe, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: fe
              });
              be.setVector3("cameraPosition", ee), be.setFloat("maxDepth", ie), be.setFloat("minDepth", He), Ee.forEach((ee => {
                Be.set(ee, ee.material), ee.material = be
              }))
            }
            if ((0, ye.d)(pe.meshes, !0), ge = !0, "glb" === ee && (Oe = (0, be.b)(pe.meshes)), "screenshot" === ee) {
              let ee = `bloxd-screenshot-${Xe}x${ze}-${Date.now()}.png`;
              ke ? ee = `bloxd-screenshot-normals-${Xe}x${ze}-${Date.now()}.png` : qe && (ee = `bloxd-screenshot-depth-${Xe}x${ze}-${Date.now()}.png`), Ue(Te, pe.activeCamera, {
                width: Xe,
                height: ze
              }, (function(He) {
                de(), fetch(He).then((function(ee) {
                  return ee.blob()
                })).then((function(He) {
                  (0, Ke.downloadBlob)(He, ee), ie()
                })).catch((function(ee) {
                  console.error("Error processing screenshot:", ee), ie()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), de(), ie()
              }))
            } else {
              let ee = "yp";
              ke ? ee = "scene-normals" : qe && (ee = "scene-depth"), ke || qe ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: ee
                  } = await Promise.all([He.e(259), He.e(258), He.e(283), He.e(284), He.e(281), He.e(291), He.e(290), He.e(266)]).then((() => He(41380))), {
                    Color3: ie
                  } = await Promise.all([He.e(259), He.e(262)]).then((() => He(38020))), ye = [], be = [];
                  if (Ee.forEach((ee => {
                      const ie = ee.name.toLowerCase(),
                        He = ee.WC().boundingBox.center,
                        Me = pe.activeCamera.position.subtract(He).length();
                      ie.includes("sky") || ie.includes("background") || ie.includes("environment") || Me > 1e3 ? be.push(ee) : ye.push(ee)
                    })), ke) ye.forEach(((He, ye) => {
                    const be = He.getVerticesData("normal");
                    if (be) {
                      const Me = [];
                      for (let ee = 0; ee < be.length; ee += 3) {
                        const ie = Math.abs(be[ee]),
                          He = Math.abs(be[ee + 1]),
                          ye = Math.abs(be[ee + 2]);
                        Me.push(ie, He, ye, 1)
                      }
                      He.setVerticesData("color", Me);
                      const Ke = new ee(`vertexColorMat_${ye}`, pe);
                      Ke.disableLighting = !0, Ke.emissiveColor = new ie(1, 1, 1), Ke.specularColor = new ie(0, 0, 0), He.material = Ke
                    }
                  })), be.forEach(((He, ye) => {
                    const be = He.getVerticesData("position");
                    if (be) {
                      const Me = [],
                        Ke = be.length / 3;
                      for (let ee = 0; ee < Ke; ee++) Me.push(1, 1, 1, 1);
                      He.setVerticesData("color", Me);
                      const Ue = new ee(`whiteMat_${ye}`, pe);
                      Ue.disableLighting = !0, Ue.emissiveColor = new ie(1, 1, 1), Ue.specularColor = new ie(0, 0, 0), He.material = Ue
                    }
                  }));
                  else if (qe) {
                    const He = pe.activeCamera.position;
                    let be = 0,
                      Me = 1 / 0;
                    ye.forEach((ee => {
                      const ie = ee.WC().boundingBox.center,
                        ye = oe.TransformCoordinates(ie, ee.getWorldMatrix()),
                        Ke = He.subtract(ye).length();
                      be = Math.max(be, Ke), Me = Math.min(Me, Ke)
                    }));
                    const Ke = be - Me;
                    be += .1 * Ke, Me = Math.max(0, Me - .1 * Ke), Ke < 1 && (be = Me + 10), Ee.forEach(((ye, Ke) => {
                      const Ue = ye.name.toLowerCase(),
                        Fe = ye.WC().boundingBox.center,
                        Je = oe.TransformCoordinates(Fe, ye.getWorldMatrix()),
                        Re = He.subtract(Je).length();
                      if (!(Ue.includes("sky") || Ue.includes("background") || Ue.includes("environment") || Re > 1e3)) {
                        const He = 1 - Math.min(Math.max((Re - Me) / (be - Me), 0), 1),
                          Ue = new ee(`depthMat_${Ke}`, pe);
                        Ue.diffuseColor = new ie(He, He, He), Ue.specularColor = new ie(0, 0, 0), ye.material = Ue
                      }
                    }))
                  }
                })().then((() => Promise.all([He.e(259), He.e(258), He.e(283), He.e(284), He.e(281), He.e(291), He.e(285), He.e(290), He.e(288), He.e(280), He.e(293), He.e(303), He.e(620), He.e(272), He.e(292), He.e(257)]).then((() => He(63844))))).then((ie => ie.GLTF2Export.GLBAsync(pe, ee))).then((ee => {
                  de(), ee.downloadFiles(), ie()
                })).catch((ee => {
                  console.error("Error exporting GLB:", ee), de(), ie()
                }))
              }), 100) : Promise.all([He.e(259), He.e(258), He.e(283), He.e(284), He.e(281), He.e(291), He.e(285), He.e(290), He.e(288), He.e(280), He.e(293), He.e(303), He.e(620), He.e(272), He.e(292), He.e(257)]).then((() => He(63844))).then((He => {
                He.GLTF2Export.GLBAsync(pe, ee).then((ee => {
                  de(), ee.downloadFiles(), ie()
                })).catch((ee => {
                  console.error("Error exporting GLB:", ee), de(), ie()
                }))
              })).catch((ee => {
                console.error("Error importing serializers:", ee), de(), ie()
              }))
            }
          })).catch((ee => {
            console.error("Error downloading the scene:", ee), ie()
          }))
        } catch (fe) {
          console.error("Error taking screenshot:", fe), ie()
        }
      }))
    }
    const Re = new class {
      constructor() {
        this.tools = Je.ALL_DEV_TOOLS
      }
      downloadScene(ee, ie) {
        return oe(ee, ie)
      }
      async setAmbientLightIntensity(ee) {
        const {
          Color3: ie
        } = await Promise.all([He.e(259), He.e(262)]).then((() => He(38020)));
        (0, Me.h)().PR.Xx().ambientColor = ie.FromArray([ee, ee, ee])
      }
      capturePhoto(ee, ie, He) {
        return function(ee, ie, He, ye) {
          return (0, Ue.d)(Fe(ee), ie, He, ye)
        }((0, Me.h)(), ee, ie, He)
      }
    }
  },
  42065: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ue,
      f: () => Fe
    });
    var ye = He(1790);
    const be = 33177600,
      Me = 3e4;
    let Ke = !1;

    function Ue(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: Ue = 1,
        type: Fe = "image/png",
        quality: Je
      } = ye;
      return ee.tR() ? Ke ? Promise.reject(new Error("A screenshot is already being taken")) : (Ke = !0, new Promise(((ye, oe) => {
        let Re, ke = 2,
          qe = null;
        const fe = () => {
          var ie;
          Ke = !1, null === (ie = qe) || void 0 === ie || ie(), clearTimeout(Re);
          try {
            ee.restoreSize()
          } catch (He) {
            console.error("A screenshot couldn't size the canvas back", He)
          }
        };
        Re = setTimeout((() => {
          fe(), oe(new Error("No frame was drawn to capture"))
        }), Me);
        try {
          const ye = function(ee, ie, He) {
            const ye = Math.max(1, ee),
              Me = Math.max(1, ie),
              Ke = Math.min(1, He / Math.max(ye, Me), Math.sqrt(be / (ye * Me)));
            return {
              width: Math.max(1, Math.floor(ye * Ke)),
              height: Math.max(1, Math.floor(Me * Ke))
            }
          }(ie, He, ee.maxTextureSize);
          ee.resize(ye.width, ye.height, Ue * ye.width / Math.max(1, ie))
        } catch (Te) {
          return fe(), void oe(Te)
        }
        qe = ee.onFrameDrawn((() => {
          if (ke--, ke > 0) return;
          const {
            canvas: ie
          } = ee, He = {
            width: ie.width,
            height: ie.height
          };
          try {
            ie.toBlob((ee => {
              ee ? ye({
                blob: ee,
                ...He
              }) : oe(new Error("The canvas gave no image"))
            }), Fe, Je)
          } catch (Te) {
            oe(Te)
          } finally {
            fe()
          }
        }))
      }))) : Promise.reject(new Error("Screenshots need a game to be running"))
    }
    async function Fe(ee, ie, He) {
      try {
        const be = await Ue(ee, ie, He);
        (0, ye.e)(be.blob, `bloxd-screenshot-${be.width}x${be.height}-${Date.now()}.png`)
      } catch (be) {
        console.error("Error taking screenshot:", be)
      }
    }
  },
  38265: (ee, ie, He) => {
    He.d(ie, {
      c: () => Je,
      d: () => Ue,
      e: () => Ke
    });
    var ye = He(38258),
      be = He(38273);
    let Me = 0;

    function Ke(ee, ie) {
      const He = ee;
      He._noaFaceGroups = null !== ie && void 0 !== ie ? ie : null, He._noaFaceEpoch = -1, He._noaFaceMask = -1, He._noaFaceCount = -1, He._noaFaceMaterial = null;
      const ye = ee.pW;
      ye && 1 === ye.length && (ye[0].indexStart = 0, ye[0].indexCount = ee.getTotalIndices())
    }

    function Ue(ee, ie) {
      if (ie) {
        Me++;
        for (const ie of ee) {
          const ee = ie._noaFaceGroups;
          ee && Ke(ie, ee)
        }
      } else Me = Math.max(0, Me - 1)
    }

    function Fe(ee, ie, He) {
      let be = -1,
        Me = 0;
      for (let Ke = 0; Ke < ye.g; Ke++) {
        const He = ee[Ke],
          Ue = ee[Ke + 1];
        Ue > He && ie & 1 << ye.c[Ke] && (be < 0 && (be = He), Me = Ue)
      }
      return be < 0 ? (He[0] = 0, He[1] = 0, 0) : (He[0] = be, He[1] = Me - be, Me - be)
    }
    class Je {
      constructor(ee, ie) {
        this.BR = ee, this.engine = ie, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(ee, ie) {
        if (!ie) return;
        const He = ie.getProjectionMatrix().m,
          Ke = 0 === Me && 0 === He[15],
          Ue = ie.globalPosition,
          {
            engine: Je
          } = this,
          oe = Ke ? (0, be.c)(He, Je.getRenderWidth(), Je.getRenderHeight()) : 0;
        Ue.x === this.eyeX && Ue.y === this.eyeY && Ue.z === this.eyeZ && oe === this.focalPx && Ke === this.culling || (this.epoch++, this.eyeX = Ue.x, this.eyeY = Ue.y, this.eyeZ = Ue.z, this.focalPx = oe, this.culling = Ke);
        const {
          epoch: Re,
          range: ke
        } = this, qe = this.BR / 2, fe = qe * Math.sqrt(3), Te = ee.data, pe = ee.length;
        let Xe = 0;
        for (let Me = 0; Me < pe; Me++) {
          const ee = Te[Me],
            ie = ee._noaFaceGroups;
          if (ie && (ee._noaFaceEpoch !== Re || ee._noaFaceMaterial !== ee.material)) {
            ee._noaFaceEpoch = Re, ee._noaFaceMaterial = ee.material;
            const He = ee.pW,
              Me = He && 1 === He.length ? He[0] : null;
            let Je = -1;
            if (Ke && Me && (0, ye.v)(ee.material)) {
              const He = ee.position,
                ye = Ue.x - He.x,
                Me = Ue.y - He.y,
                Ke = Ue.z - He.z,
                Fe = ye - qe,
                Re = Me - qe,
                ke = Ke - qe,
                Te = Math.sqrt(Fe * Fe + Re * Re + ke * ke) + fe;
              Je = (0, be.k)(ie, ye, Me, Ke, (0, be.g)(Te, oe))
            }
            if (Me && Je !== ee._noaFaceMask) {
              ee._noaFaceMask = Je;
              let He = 0,
                be = ie[ye.g]; - 1 !== Je && (be = Fe(ie, Je, ke), He = ke[0]), ee._noaFaceCount = be, Me.indexStart = 6 * He, Me.indexCount = 6 * be, Me.setBoundingInfo(ee.WC())
            }
          }
          ie && 0 === ee._noaFaceCount || (Te[Xe++] = ee)
        }
        ee.length = Xe
      }
    }
  },
  38247: (ee, ie, He) => {
    He.d(ie, {
      b: () => Fe,
      d: () => Ue
    });
    const ye = new WeakSet;
    let be = 0;
    const Me = new Set;

    function Ke(ee, ie) {
      ee._data = ie
    }

    function Ue(ee) {
      var ie, He;
      (null !== (ie = null === (He = ee.getBuffer()) || void 0 === He ? void 0 : He.bk) && void 0 !== ie ? ie : 0) > 0 && (ye.add(ee), 0 === be ? Ke(ee, null) : Me.add(ee))
    }

    function Fe(ee) {
      be++;
      for (const He of function(ee) {
          const ie = new Set;
          for (const be of ee) {
            const ee = be.geometry;
            for (const be of Object.values(null !== (He = null === ee || void 0 === ee ? void 0 : ee.getVertexBuffers()) && void 0 !== He ? He : {})) {
              var He;
              const ee = be.getWrapperBuffer();
              ye.has(ee) && ie.add(ee)
            }
          }
          return ie
        }(ee)) He.getData() || Je(He), Me.add(He);
      let ie = !0;
      return () => {
        if (ie && (ie = !1, be--, 0 === be)) {
          for (const ee of Me) Ke(ee, null);
          Me.clear()
        }
      }
    }

    function Je(ee) {
      const ie = ee.getBuffer();
      if (!ie || !(ie.bk > 0)) return;
      const He = ee._engine,
        ye = new Uint8Array(ie.bk);
      He.bindArrayBuffer(ie), He._gl.getBufferSubData(He._gl.ARRAY_BUFFER, 0, ye), He._resetVertexBufferBinding(), Ke(ee, ye)
    }
  },
  38258: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      g: () => Me,
      j: () => Fe,
      m: () => ye,
      n: () => Ue,
      r: () => be,
      v: () => Je
    });
    const ye = 6,
      be = [0, 2, 4, 1, 3, 5, 0, 2],
      Me = 6,
      Ke = [1, 0, 3, 2, 5, 4];
    for (let oe = Me; oe < be.length; oe++)
      if (be[oe] !== be[oe - Me]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const Ue = be.length + 1,
      Fe = (() => {
        const ee = [];
        for (let ie = 0; ie < Me; ie++) ee[be[ie]] = ie;
        return ee
      })();

    function Je(ee) {
      return !!ee && ee.backFaceCulling && (0 === ee.transparencyMode || 1 === ee.transparencyMode)
    }
  },
  38273: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ue,
      g: () => Fe,
      j: () => oe,
      k: () => Je,
      n: () => fe
    });
    var ye = He(38258);
    const be = 1 / 16,
      Me = 1 / 64,
      Ke = 2048;
    ye.m;

    function Ue(ee, ie, He) {
      return Math.min(Math.abs(ee[0] * ie), Math.abs(ee[5] * He)) / 2
    }

    function Fe(ee, ie) {
      return be + Me * ee * ee / ie
    }

    function Je(ee, ie, He, be, Me) {
      const Ke = ye.n;
      return oe(ee[Ke], ee[Ke + 1], ee[Ke + 2], ee[Ke + 3], ee[Ke + 4], ee[Ke + 5], ie, He, be, Me)
    }

    function oe(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je) {
      return (Ke <= ee - Je ? 0 : 1) | (Ke >= ie + Je ? 0 : 2) | (Ue <= He - Je ? 0 : 4) | (Ue >= ye + Je ? 0 : 8) | (Fe <= be - Je ? 0 : 16) | (Fe >= Me + Je ? 0 : 32)
    }
    const Re = (() => {
        const ee = [];
        for (let ie = 0; ie < ye.r.length; ie++) {
          let He = 0;
          for (let be = ie + 1; be <= ye.r.length; be++) {
            const Me = 1 << ye.r[be - 1];
            if (He & Me) break;
            He |= Me, ee.push({
              start: ie,
              end: be,
              Pe: He
            })
          }
        }
        return ee
      })(),
      ke = [];

    function qe(ee, ie) {
      const He = ye.j[ie];
      return ee[He + 1] - ee[He]
    }

    function fe(ee, ie, He) {
      let be = 0;
      for (let Ke = 0; Ke < ye.m; Ke++) qe(ee, Ke) > 0 && (be |= 1 << Ke);
      if (0 === (ie &= be)) return 0;
      if (ie === be) return He[0] = 0, He[1] = ee[ye.g], 1;
      let Me = null,
        Ue = 1 / 0;
      for (const Je of function(ee) {
          let ie = ke[ee];
          if (ie) return ie;
          const He = new Map,
            ye = (ee, ie) => {
              const ye = 4 * ee + ie.length / 2;
              He.has(ye) || He.set(ye, {
                Pe: ee,
                windows: ie
              })
            };
          for (const Me of Re)
            if ((Me.Pe & ee) === ee && ye(Me.Pe, [Me.start, Me.end]), 0 !== (Me.Pe & ee))
              for (const ie of Re) ie.start < Me.end || 0 !== (Me.Pe & ie.Pe) || 0 === (ie.Pe & ee) || ((Me.Pe | ie.Pe) & ee) !== ee || ye(Me.Pe | ie.Pe, [Me.start, Me.end, ie.start, ie.end]);
          const be = [...He.values()];
          return ie = be.filter((ee => !be.some((ie => ie !== ee && (ie.Pe & ee.Pe) === ie.Pe && ie.windows.length <= ee.windows.length)))), ke[ee] = ie, ie
        }(ie)) {
        let He = (Je.windows.length / 2 - 1) * Ke;
        const Fe = Je.Pe & ~ie & be;
        for (let ie = 0; ie < ye.m; ie++) Fe & 1 << ie && (He += qe(ee, ie));
        He < Ue && (Me = Je, Ue = He)
      }
      const Fe = Me.windows;
      for (let ye = 0; ye < Fe.length; ye += 2) {
        const ie = ee[Fe[ye]];
        He[ye] = ie, He[ye + 1] = ee[Fe[ye + 1]] - ie
      }
      return Fe.length / 2
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);