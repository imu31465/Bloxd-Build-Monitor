export const id = 236;
export const ids = [236];
export const modules = {
  41124: (mm, Tm, fm) => {
    fm.d(Tm, {
      noaDevTools: () => pm
    });
    var hm = fm(37630),
      Am = fm(37610),
      am = fm(2760),
      xm = fm(1713),
      wm = fm(41049);

    function Dm(mm) {
      const {
        qY: Tm
      } = mm, fm = Tm.engine, hm = {
        width: fm.getRenderWidth(),
        height: fm.getRenderHeight()
      };
      return {
        canvas: fm.getRenderingCanvas(),
        maxTextureSize: fm.getCaps().maxTextureSize,
        drawing: () => !mm.yI,
        resize: (mm, Tm) => {
          fm.setSize(mm, Tm)
        },
        restoreSize: () => {
          fm.setSize(hm.width, hm.height), Tm.resize()
        },
        onFrameDrawn: Tm => (mm.on("afterRender", Tm), () => {
          mm.off("afterRender", Tm)
        })
      }
    }
    var im = fm(34163);

    function Rm(mm, Tm) {
      let {
        width: im,
        height: Rm,
        colouring: pm
      } = Tm;
      const Em = "normals" === pm,
        om = "depth" === pm;
      return new Promise((Tm => {
        try {
          const Om = (0, am.d)();
          if (Om.qY.jY) return "screenshot" !== mm || null !== pm ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void Tm()) : void(0, wm.f)(Dm(Om), im, Rm).finally(Tm);
          const Ym = Om.qY.engine,
            qm = Om.qY.wG(),
            jm = im,
            Vm = Rm;
          Promise.all([Promise.all([fm.e(254), fm.e(255), fm.e(233)]).then((() => fm(61310))), Promise.all([fm.e(232), fm.e(231), fm.e(254), fm.e(255), fm.e(252), fm.e(256), fm.e(259), fm.e(311), fm.e(237)]).then((() => fm(61315))), Promise.all([fm.e(232), fm.e(231), fm.e(254), fm.e(255), fm.e(252), fm.e(262), fm.e(256), fm.e(264), fm.e(239)]).then((() => fm(61318))), fm.e(352).then((() => fm(61321))), Promise.all([fm.e(231), fm.e(227)]).then((() => fm(37181))), fm.e(253).then((() => fm(61328))), fm.e(234).then((() => fm(61335)))]).then((am => {
            const {
              CreateScreenshotUsingRenderTarget: wm
            } = am[1], {
              ShaderMaterial: Dm
            } = am[2], {
              ShaderLanguage: im
            } = am[3], {
              WO: Rm
            } = am[4], {
              registerDevtoolsShader: pm
            } = am[6], Om = im.GLSL, Im = new Map, Km = qm.meshes.filter((mm => mm.material));
            let Qm = !1,
              nm = null;

            function Jm() {
              var mm;
              Qm && (Qm = !1, (0, hm.h)(qm.meshes, !1)), null === (mm = nm) || void 0 === mm || mm(), nm = null, Km.forEach((mm => {
                const Tm = Im.get(mm);
                Tm && (mm.material = Tm)
              }))
            }
            if (Em) {
              const mm = [],
                Tm = [];
              Km.forEach((fm => {
                const hm = fm.name.toLowerCase(),
                  Am = fm.DH().boundingBox.center,
                  am = qm.activeCamera.position.subtract(Am).length();
                hm.includes("sky") || hm.includes("background") || hm.includes("environment") || am > 1e3 ? Tm.push(fm) : mm.push(fm)
              })), pm("devtoolsNormal", Om);
              const fm = new Dm("normalMaterial", qm, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: Om
              });
              pm("devtoolsWhite", Om);
              const hm = new Dm("whiteMaterial", qm, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: Om
              });
              mm.forEach((mm => {
                Im.set(mm, mm.material), mm.material = fm
              })), Tm.forEach((mm => {
                Im.set(mm, mm.material), mm.material = hm
              }))
            } else if (om) {
              pm("devtoolsDepth", Om);
              const mm = qm.activeCamera.position;
              let Tm = 0,
                fm = 1 / 0;
              Km.forEach((hm => {
                const Am = hm.name.toLowerCase();
                if (Am.includes("sky") || Am.includes("background") || Am.includes("environment")) return;
                const am = hm.DH().boundingBox.center,
                  xm = Rm.TransformCoordinates(am, hm.getWorldMatrix()),
                  wm = mm.subtract(xm).length();
                wm > 1e3 || (Tm = Math.max(Tm, wm), fm = Math.min(fm, wm))
              }));
              const hm = Tm - fm;
              Tm += .1 * hm, fm = Math.max(0, fm - .1 * hm), console.log(`Depth range: min=${fm.toFixed(2)}, max=${Tm.toFixed(2)}, range=${hm.toFixed(2)}`), hm < 1 && (Tm = fm + 10);
              const Am = new Dm("depthMaterial", qm, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: Om
              });
              Am.setVector3("cameraPosition", mm), Am.setFloat("maxDepth", Tm), Am.setFloat("minDepth", fm), Km.forEach((mm => {
                Im.set(mm, mm.material), mm.material = Am
              }))
            }
            if ((0, hm.h)(qm.meshes, !0), Qm = !0, "glb" === mm && (nm = (0, Am.c)(qm.meshes)), "screenshot" === mm) {
              let mm = `bloxd-screenshot-${jm}x${Vm}-${Date.now()}.png`;
              Em ? mm = `bloxd-screenshot-normals-${jm}x${Vm}-${Date.now()}.png` : om && (mm = `bloxd-screenshot-depth-${jm}x${Vm}-${Date.now()}.png`), wm(Ym, qm.activeCamera, {
                width: jm,
                height: Vm
              }, (function(fm) {
                Jm(), fetch(fm).then((function(mm) {
                  return mm.blob()
                })).then((function(fm) {
                  (0, xm.downloadBlob)(fm, mm), Tm()
                })).catch((function(mm) {
                  console.error("Error processing screenshot:", mm), Tm()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), Jm(), Tm()
              }))
            } else {
              let mm = "Aq";
              Em ? mm = "scene-normals" : om && (mm = "scene-depth"), Em || om ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: mm
                  } = await Promise.all([fm.e(232), fm.e(231), fm.e(254), fm.e(255), fm.e(252), fm.e(262), fm.e(261), fm.e(238)]).then((() => fm(40357))), {
                    Color3: Tm
                  } = await Promise.all([fm.e(232), fm.e(235)]).then((() => fm(37330))), hm = [], Am = [];
                  if (Km.forEach((mm => {
                      const Tm = mm.name.toLowerCase(),
                        fm = mm.DH().boundingBox.center,
                        am = qm.activeCamera.position.subtract(fm).length();
                      Tm.includes("sky") || Tm.includes("background") || Tm.includes("environment") || am > 1e3 ? Am.push(mm) : hm.push(mm)
                    })), Em) hm.forEach(((fm, hm) => {
                    const Am = fm.getVerticesData("normal");
                    if (Am) {
                      const am = [];
                      for (let mm = 0; mm < Am.length; mm += 3) {
                        const Tm = Math.abs(Am[mm]),
                          fm = Math.abs(Am[mm + 1]),
                          hm = Math.abs(Am[mm + 2]);
                        am.push(Tm, fm, hm, 1)
                      }
                      fm.setVerticesData("color", am);
                      const xm = new mm(`vertexColorMat_${hm}`, qm);
                      xm.disableLighting = !0, xm.emissiveColor = new Tm(1, 1, 1), xm.specularColor = new Tm(0, 0, 0), fm.material = xm
                    }
                  })), Am.forEach(((fm, hm) => {
                    const Am = fm.getVerticesData("position");
                    if (Am) {
                      const am = [],
                        xm = Am.length / 3;
                      for (let mm = 0; mm < xm; mm++) am.push(1, 1, 1, 1);
                      fm.setVerticesData("color", am);
                      const wm = new mm(`whiteMat_${hm}`, qm);
                      wm.disableLighting = !0, wm.emissiveColor = new Tm(1, 1, 1), wm.specularColor = new Tm(0, 0, 0), fm.material = wm
                    }
                  }));
                  else if (om) {
                    const fm = qm.activeCamera.position;
                    let Am = 0,
                      am = 1 / 0;
                    hm.forEach((mm => {
                      const Tm = mm.DH().boundingBox.center,
                        hm = Rm.TransformCoordinates(Tm, mm.getWorldMatrix()),
                        xm = fm.subtract(hm).length();
                      Am = Math.max(Am, xm), am = Math.min(am, xm)
                    }));
                    const xm = Am - am;
                    Am += .1 * xm, am = Math.max(0, am - .1 * xm), xm < 1 && (Am = am + 10), Km.forEach(((hm, xm) => {
                      const wm = hm.name.toLowerCase(),
                        Dm = hm.DH().boundingBox.center,
                        im = Rm.TransformCoordinates(Dm, hm.getWorldMatrix()),
                        pm = fm.subtract(im).length();
                      if (!(wm.includes("sky") || wm.includes("background") || wm.includes("environment") || pm > 1e3)) {
                        const fm = 1 - Math.min(Math.max((pm - am) / (Am - am), 0), 1),
                          wm = new mm(`depthMat_${xm}`, qm);
                        wm.diffuseColor = new Tm(fm, fm, fm), wm.specularColor = new Tm(0, 0, 0), hm.material = wm
                      }
                    }))
                  }
                })().then((() => Promise.all([fm.e(232), fm.e(231), fm.e(254), fm.e(255), fm.e(252), fm.e(262), fm.e(256), fm.e(261), fm.e(259), fm.e(251), fm.e(264), fm.e(274), fm.e(311), fm.e(244), fm.e(263), fm.e(230)]).then((() => fm(61344))))).then((Tm => Tm.GLTF2Export.GLBAsync(qm, mm))).then((mm => {
                  Jm(), mm.downloadFiles(), Tm()
                })).catch((mm => {
                  console.error("Error exporting GLB:", mm), Jm(), Tm()
                }))
              }), 100) : Promise.all([fm.e(232), fm.e(231), fm.e(254), fm.e(255), fm.e(252), fm.e(262), fm.e(256), fm.e(261), fm.e(259), fm.e(251), fm.e(264), fm.e(274), fm.e(311), fm.e(244), fm.e(263), fm.e(230)]).then((() => fm(61344))).then((fm => {
                fm.GLTF2Export.GLBAsync(qm, mm).then((mm => {
                  Jm(), mm.downloadFiles(), Tm()
                })).catch((mm => {
                  console.error("Error exporting GLB:", mm), Jm(), Tm()
                }))
              })).catch((mm => {
                console.error("Error importing serializers:", mm), Jm(), Tm()
              }))
            }
          })).catch((mm => {
            console.error("Error downloading the scene:", mm), Tm()
          }))
        } catch (Om) {
          console.error("Error taking screenshot:", Om), Tm()
        }
      }))
    }
    const pm = new class {
      constructor() {
        this.tools = im.ALL_DEV_TOOLS
      }
      downloadScene(mm, Tm) {
        return Rm(mm, Tm)
      }
      async setAmbientLightIntensity(mm) {
        const {
          Color3: Tm
        } = await Promise.all([fm.e(232), fm.e(235)]).then((() => fm(37330)));
        (0, am.d)().qY.wG().ambientColor = Tm.FromArray([mm, mm, mm])
      }
      capturePhoto(mm, Tm, fm) {
        return function(mm, Tm, fm, hm) {
          return (0, wm.d)(Dm(mm), Tm, fm, hm)
        }((0, am.d)(), mm, Tm, fm)
      }
    }
  },
  41049: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => wm,
      f: () => Dm
    });
    var hm = fm(1730);
    const Am = 33177600,
      am = 3e4;
    let xm = !1;

    function wm(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: wm = 1,
        type: Dm = "image/png",
        quality: im
      } = hm;
      if (!mm.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (xm) return Promise.reject(new Error("A screenshot is already being taken"));
      xm = !0;
      const Rm = function(mm, Tm, fm) {
        const hm = Math.max(1, mm),
          am = Math.max(1, Tm),
          xm = Math.min(1, fm / Math.max(hm, am), Math.sqrt(Am / (hm * am)));
        return {
          width: Math.max(1, Math.floor(hm * xm)),
          height: Math.max(1, Math.floor(am * xm))
        }
      }(Tm, fm, mm.maxTextureSize);
      return mm.resize(Rm.width, Rm.height, wm * Rm.width / Math.max(1, Tm)), new Promise(((Tm, fm) => {
        let hm, Am = 2,
          wm = null;
        const Rm = () => {
          var Tm;
          xm = !1, null === (Tm = wm) || void 0 === Tm || Tm(), clearTimeout(hm), mm.restoreSize()
        };
        hm = setTimeout((() => {
          Rm(), fm(new Error("No frame was drawn to capture"))
        }), am), wm = mm.onFrameDrawn((() => {
          if (Am--, Am > 0) return;
          const {
            canvas: hm
          } = mm, am = {
            width: hm.width,
            height: hm.height
          };
          try {
            hm.toBlob((mm => {
              mm ? Tm({
                blob: mm,
                ...am
              }) : fm(new Error("The canvas gave no image"))
            }), Dm, im)
          } catch (xm) {
            fm(xm)
          } finally {
            Rm()
          }
        }))
      }))
    }
    async function Dm(mm, Tm, fm) {
      try {
        const Am = await wm(mm, Tm, fm);
        (0, hm.c)(Am.blob, `bloxd-screenshot-${Am.width}x${Am.height}-${Date.now()}.png`)
      } catch (Am) {
        console.error("Error taking screenshot:", Am)
      }
    }
  },
  37630: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => im,
      h: () => wm,
      j: () => xm
    });
    var hm = fm(37623),
      Am = fm(37637);
    let am = 0;

    function xm(mm, Tm) {
      const fm = mm;
      fm._noaFaceGroups = null !== Tm && void 0 !== Tm ? Tm : null, fm._noaFaceEpoch = -1, fm._noaFaceMask = -1, fm._noaFaceCount = -1, fm._noaFaceMaterial = null;
      const hm = mm.jK;
      hm && 1 === hm.length && (hm[0].indexStart = 0, hm[0].indexCount = mm.getTotalIndices())
    }

    function wm(mm, Tm) {
      if (Tm) {
        am++;
        for (const Tm of mm) {
          const mm = Tm._noaFaceGroups;
          mm && xm(Tm, mm)
        }
      } else am = Math.max(0, am - 1)
    }

    function Dm(mm, Tm, fm) {
      let Am = -1,
        am = 0;
      for (let xm = 0; xm < hm.f; xm++) {
        const fm = mm[xm],
          wm = mm[xm + 1];
        wm > fm && Tm & 1 << hm.e[xm] && (Am < 0 && (Am = fm), am = wm)
      }
      return Am < 0 ? (fm[0] = 0, fm[1] = 0, 0) : (fm[0] = Am, fm[1] = am - Am, am - Am)
    }
    class im {
      constructor(mm, Tm) {
        this.MO = mm, this.engine = Tm, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(mm, Tm) {
        if (!Tm) return;
        const fm = Tm.getProjectionMatrix().m,
          xm = 0 === am && 0 === fm[15],
          wm = Tm.globalPosition,
          {
            engine: im
          } = this,
          Rm = xm ? (0, Am.b)(fm, im.getRenderWidth(), im.getRenderHeight()) : 0;
        wm.x === this.eyeX && wm.y === this.eyeY && wm.z === this.eyeZ && Rm === this.focalPx && xm === this.culling || (this.epoch++, this.eyeX = wm.x, this.eyeY = wm.y, this.eyeZ = wm.z, this.focalPx = Rm, this.culling = xm);
        const {
          epoch: pm,
          range: Em
        } = this, om = this.MO / 2, Om = om * Math.sqrt(3), Ym = mm.data, qm = mm.length;
        let jm = 0;
        for (let am = 0; am < qm; am++) {
          const mm = Ym[am],
            Tm = mm._noaFaceGroups;
          if (Tm && (mm._noaFaceEpoch !== pm || mm._noaFaceMaterial !== mm.material)) {
            mm._noaFaceEpoch = pm, mm._noaFaceMaterial = mm.material;
            const fm = mm.jK,
              am = fm && 1 === fm.length ? fm[0] : null;
            let im = -1;
            if (xm && am && (0, hm.s)(mm.material)) {
              const fm = mm.position,
                hm = wm.x - fm.x,
                am = wm.y - fm.y,
                xm = wm.z - fm.z,
                Dm = hm - om,
                pm = am - om,
                Em = xm - om,
                Ym = Math.sqrt(Dm * Dm + pm * pm + Em * Em) + Om;
              im = (0, Am.k)(Tm, hm, am, xm, (0, Am.d)(Ym, Rm))
            }
            if (am && im !== mm._noaFaceMask) {
              mm._noaFaceMask = im;
              let fm = 0,
                Am = Tm[hm.f]; - 1 !== im && (Am = Dm(Tm, im, Em), fm = Em[0]), mm._noaFaceCount = Am, am.indexStart = 6 * fm, am.indexCount = 6 * Am, am.setBoundingInfo(mm.DH())
            }
          }
          Tm && 0 === mm._noaFaceCount || (Ym[jm++] = mm)
        }
        mm.length = jm
      }
    }
  },
  37610: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Dm,
      g: () => wm
    });
    const hm = new WeakSet;
    let Am = 0;
    const am = new Set;

    function xm(mm, Tm) {
      mm._data = Tm
    }

    function wm(mm) {
      var Tm, fm;
      (null !== (Tm = null === (fm = mm.getBuffer()) || void 0 === fm ? void 0 : fm.yp) && void 0 !== Tm ? Tm : 0) > 0 && (hm.add(mm), 0 === Am ? xm(mm, null) : am.add(mm))
    }

    function Dm(mm) {
      Am++;
      for (const fm of function(mm) {
          const Tm = new Set;
          for (const Am of mm) {
            const mm = Am.geometry;
            for (const Am of Object.values(null !== (fm = null === mm || void 0 === mm ? void 0 : mm.getVertexBuffers()) && void 0 !== fm ? fm : {})) {
              var fm;
              const mm = Am.getWrapperBuffer();
              hm.has(mm) && Tm.add(mm)
            }
          }
          return Tm
        }(mm)) fm.getData() || im(fm), am.add(fm);
      let Tm = !0;
      return () => {
        if (Tm && (Tm = !1, Am--, 0 === Am)) {
          for (const mm of am) xm(mm, null);
          am.clear()
        }
      }
    }

    function im(mm) {
      const Tm = mm.getBuffer();
      if (!Tm || !(Tm.yp > 0)) return;
      const fm = mm._engine,
        hm = new Uint8Array(Tm.yp);
      fm.bindArrayBuffer(Tm), fm._gl.getBufferSubData(fm._gl.ARRAY_BUFFER, 0, hm), fm._resetVertexBufferBinding(), xm(mm, hm)
    }
  },
  37623: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => xm,
      f: () => am,
      h: () => Dm,
      l: () => hm,
      m: () => wm,
      q: () => Am,
      s: () => im
    });
    const hm = 6,
      Am = [0, 2, 4, 1, 3, 5, 0, 2],
      am = 6,
      xm = [1, 0, 3, 2, 5, 4];
    for (let Rm = am; Rm < Am.length; Rm++)
      if (Am[Rm] !== Am[Rm - am]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const wm = Am.length + 1,
      Dm = (() => {
        const mm = [];
        for (let Tm = 0; Tm < am; Tm++) mm[Am[Tm]] = Tm;
        return mm
      })();

    function im(mm) {
      return !!mm && mm.backFaceCulling && (0 === mm.transparencyMode || 1 === mm.transparencyMode)
    }
  },
  37637: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => wm,
      d: () => Dm,
      g: () => Rm,
      k: () => im,
      l: () => Om
    });
    var hm = fm(37623);
    const Am = 1 / 16,
      am = 1 / 64,
      xm = 2048;
    hm.l;

    function wm(mm, Tm, fm) {
      return Math.min(Math.abs(mm[0] * Tm), Math.abs(mm[5] * fm)) / 2
    }

    function Dm(mm, Tm) {
      return Am + am * mm * mm / Tm
    }

    function im(mm, Tm, fm, Am, am) {
      const xm = hm.m;
      return Rm(mm[xm], mm[xm + 1], mm[xm + 2], mm[xm + 3], mm[xm + 4], mm[xm + 5], Tm, fm, Am, am)
    }

    function Rm(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im) {
      return (xm <= mm - im ? 0 : 1) | (xm >= Tm + im ? 0 : 2) | (wm <= fm - im ? 0 : 4) | (wm >= hm + im ? 0 : 8) | (Dm <= Am - im ? 0 : 16) | (Dm >= am + im ? 0 : 32)
    }
    const pm = (() => {
        const mm = [];
        for (let Tm = 0; Tm < hm.q.length; Tm++) {
          let fm = 0;
          for (let Am = Tm + 1; Am <= hm.q.length; Am++) {
            const am = 1 << hm.q[Am - 1];
            if (fm & am) break;
            fm |= am, mm.push({
              start: Tm,
              end: Am,
              mA: fm
            })
          }
        }
        return mm
      })(),
      Em = [];

    function om(mm, Tm) {
      const fm = hm.h[Tm];
      return mm[fm + 1] - mm[fm]
    }

    function Om(mm, Tm, fm) {
      let Am = 0;
      for (let xm = 0; xm < hm.l; xm++) om(mm, xm) > 0 && (Am |= 1 << xm);
      if (0 === (Tm &= Am)) return 0;
      if (Tm === Am) return fm[0] = 0, fm[1] = mm[hm.f], 1;
      let am = null,
        wm = 1 / 0;
      for (const im of function(mm) {
          let Tm = Em[mm];
          if (Tm) return Tm;
          const fm = new Map,
            hm = (mm, Tm) => {
              const hm = 4 * mm + Tm.length / 2;
              fm.has(hm) || fm.set(hm, {
                mA: mm,
                windows: Tm
              })
            };
          for (const am of pm)
            if ((am.mA & mm) === mm && hm(am.mA, [am.start, am.end]), 0 !== (am.mA & mm))
              for (const Tm of pm) Tm.start < am.end || 0 !== (am.mA & Tm.mA) || 0 === (Tm.mA & mm) || ((am.mA | Tm.mA) & mm) !== mm || hm(am.mA | Tm.mA, [am.start, am.end, Tm.start, Tm.end]);
          const Am = [...fm.values()];
          return Tm = Am.filter((mm => !Am.some((Tm => Tm !== mm && (Tm.mA & mm.mA) === Tm.mA && Tm.windows.length <= mm.windows.length)))), Em[mm] = Tm, Tm
        }(Tm)) {
        let fm = (im.windows.length / 2 - 1) * xm;
        const Dm = im.mA & ~Tm & Am;
        for (let Tm = 0; Tm < hm.l; Tm++) Dm & 1 << Tm && (fm += om(mm, Tm));
        fm < wm && (am = im, wm = fm)
      }
      const Dm = am.windows;
      for (let hm = 0; hm < Dm.length; hm += 2) {
        const Tm = mm[Dm[hm]];
        fm[hm] = Tm, fm[hm + 1] = mm[Dm[hm + 1]] - Tm
      }
      return Dm.length / 2
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);