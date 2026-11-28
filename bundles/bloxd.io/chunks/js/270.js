export const id = 270;
export const ids = [270];
export const modules = {
  42733: (bb, wb, Mb) => {
    Mb.d(wb, {
      noaDevTools: () => Ob
    });
    var eb = Mb(38675),
      Hb = Mb(38657),
      pb = Mb(2451),
      Vb = Mb(1965),
      gb = Mb(42654);

    function lb(bb) {
      const {
        FO: wb
      } = bb, Mb = wb.engine, eb = {
        width: Mb.getRenderWidth(),
        height: Mb.getRenderHeight()
      };
      return {
        canvas: Mb.getRenderingCanvas(),
        maxTextureSize: Mb.getCaps().maxTextureSize,
        UO: () => !bb.BO,
        resize: (bb, wb) => {
          Mb.setSize(bb, wb)
        },
        restoreSize: () => {
          Mb.setSize(eb.width, eb.height), wb.resize()
        },
        onFrameDrawn: Mb => {
          const eb = () => {
            wb.uR && Mb()
          };
          return bb.on("afterRender", eb), () => {
            bb.off("afterRender", eb)
          }
        }
      }
    }
    var Lb = Mb(35213);

    function Ib(bb, wb) {
      let {
        width: Lb,
        height: Ib,
        colouring: Ob
      } = wb;
      const Ub = "normals" === Ob,
        tb = "depth" === Ob;
      return new Promise((wb => {
        try {
          const Cb = (0, pb.h)();
          if (Cb.FO.oC) return "screenshot" !== bb || null !== Ob ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void wb()) : void(0, gb.f)(lb(Cb), Lb, Ib).finally(wb);
          const Eb = Cb.FO.engine,
            Fb = Cb.FO.RJ(),
            Bb = Lb,
            sb = Ib;
          Promise.all([Promise.all([Mb.e(290), Mb.e(291), Mb.e(266)]).then((() => Mb(64405))), Promise.all([Mb.e(265), Mb.e(264), Mb.e(290), Mb.e(291), Mb.e(288), Mb.e(292), Mb.e(295), Mb.e(630), Mb.e(272)]).then((() => Mb(64409))), Promise.all([Mb.e(265), Mb.e(264), Mb.e(290), Mb.e(291), Mb.e(288), Mb.e(298), Mb.e(292), Mb.e(300), Mb.e(274)]).then((() => Mb(64415))), Mb.e(671).then((() => Mb(64418))), Promise.all([Mb.e(264), Mb.e(260)]).then((() => Mb(38281))), Mb.e(289).then((() => Mb(64421))), Mb.e(269).then((() => Mb(64428)))]).then((pb => {
            const {
              CreateScreenshotUsingRenderTarget: gb
            } = pb[1], {
              ShaderMaterial: lb
            } = pb[2], {
              ShaderLanguage: Lb
            } = pb[3], {
              YC: Ib
            } = pb[4], {
              registerDevtoolsShader: Ob
            } = pb[6], Cb = Lb.GLSL, mb = new Map, hb = Fb.meshes.filter((bb => bb.material));
            let zb = !1,
              Xb = null;

            function xb() {
              var bb;
              zb && (zb = !1, (0, eb.g)(Fb.meshes, !1)), null === (bb = Xb) || void 0 === bb || bb(), Xb = null, hb.forEach((bb => {
                const wb = mb.get(bb);
                wb && (bb.material = wb)
              }))
            }
            if (Ub) {
              const bb = [],
                wb = [];
              hb.forEach((Mb => {
                const eb = Mb.name.toLowerCase(),
                  Hb = Mb.XN().boundingBox.center,
                  pb = Fb.activeCamera.position.subtract(Hb).length();
                eb.includes("sky") || eb.includes("background") || eb.includes("environment") || pb > 1e3 ? wb.push(Mb) : bb.push(Mb)
              })), Ob("devtoolsNormal", Cb);
              const Mb = new lb("normalMaterial", Fb, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: Cb
              });
              Ob("devtoolsWhite", Cb);
              const eb = new lb("whiteMaterial", Fb, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: Cb
              });
              bb.forEach((bb => {
                mb.set(bb, bb.material), bb.material = Mb
              })), wb.forEach((bb => {
                mb.set(bb, bb.material), bb.material = eb
              }))
            } else if (tb) {
              Ob("devtoolsDepth", Cb);
              const bb = Fb.activeCamera.position;
              let wb = 0,
                Mb = 1 / 0;
              hb.forEach((eb => {
                const Hb = eb.name.toLowerCase();
                if (Hb.includes("sky") || Hb.includes("background") || Hb.includes("environment")) return;
                const pb = eb.XN().boundingBox.center,
                  Vb = Ib.TransformCoordinates(pb, eb.getWorldMatrix()),
                  gb = bb.subtract(Vb).length();
                gb > 1e3 || (wb = Math.max(wb, gb), Mb = Math.min(Mb, gb))
              }));
              const eb = wb - Mb;
              wb += .1 * eb, Mb = Math.max(0, Mb - .1 * eb), console.log(`Depth range: min=${Mb.toFixed(2)}, max=${wb.toFixed(2)}, range=${eb.toFixed(2)}`), eb < 1 && (wb = Mb + 10);
              const Hb = new lb("depthMaterial", Fb, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: Cb
              });
              Hb.setVector3("cameraPosition", bb), Hb.setFloat("maxDepth", wb), Hb.setFloat("minDepth", Mb), hb.forEach((bb => {
                mb.set(bb, bb.material), bb.material = Hb
              }))
            }
            if ((0, eb.g)(Fb.meshes, !0), zb = !0, "glb" === bb && (Xb = (0, Hb.b)(Fb.meshes)), "screenshot" === bb) {
              let bb = `bloxd-screenshot-${Bb}x${sb}-${Date.now()}.png`;
              Ub ? bb = `bloxd-screenshot-normals-${Bb}x${sb}-${Date.now()}.png` : tb && (bb = `bloxd-screenshot-depth-${Bb}x${sb}-${Date.now()}.png`), gb(Eb, Fb.activeCamera, {
                width: Bb,
                height: sb
              }, (function(Mb) {
                xb(), fetch(Mb).then((function(bb) {
                  return bb.blob()
                })).then((function(Mb) {
                  (0, Vb.downloadBlob)(Mb, bb), wb()
                })).catch((function(bb) {
                  console.error("Error processing screenshot:", bb), wb()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), xb(), wb()
              }))
            } else {
              let bb = "JE";
              Ub ? bb = "scene-normals" : tb && (bb = "scene-depth"), Ub || tb ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: bb
                  } = await Promise.all([Mb.e(265), Mb.e(264), Mb.e(290), Mb.e(291), Mb.e(288), Mb.e(298), Mb.e(297), Mb.e(273)]).then((() => Mb(41933))), {
                    Color3: wb
                  } = await Promise.all([Mb.e(265), Mb.e(268)]).then((() => Mb(38401))), eb = [], Hb = [];
                  if (hb.forEach((bb => {
                      const wb = bb.name.toLowerCase(),
                        Mb = bb.XN().boundingBox.center,
                        pb = Fb.activeCamera.position.subtract(Mb).length();
                      wb.includes("sky") || wb.includes("background") || wb.includes("environment") || pb > 1e3 ? Hb.push(bb) : eb.push(bb)
                    })), Ub) eb.forEach(((Mb, eb) => {
                    const Hb = Mb.getVerticesData("normal");
                    if (Hb) {
                      const pb = [];
                      for (let bb = 0; bb < Hb.length; bb += 3) {
                        const wb = Math.abs(Hb[bb]),
                          Mb = Math.abs(Hb[bb + 1]),
                          eb = Math.abs(Hb[bb + 2]);
                        pb.push(wb, Mb, eb, 1)
                      }
                      Mb.setVerticesData("color", pb);
                      const Vb = new bb(`vertexColorMat_${eb}`, Fb);
                      Vb.disableLighting = !0, Vb.emissiveColor = new wb(1, 1, 1), Vb.specularColor = new wb(0, 0, 0), Mb.material = Vb
                    }
                  })), Hb.forEach(((Mb, eb) => {
                    const Hb = Mb.getVerticesData("position");
                    if (Hb) {
                      const pb = [],
                        Vb = Hb.length / 3;
                      for (let bb = 0; bb < Vb; bb++) pb.push(1, 1, 1, 1);
                      Mb.setVerticesData("color", pb);
                      const gb = new bb(`whiteMat_${eb}`, Fb);
                      gb.disableLighting = !0, gb.emissiveColor = new wb(1, 1, 1), gb.specularColor = new wb(0, 0, 0), Mb.material = gb
                    }
                  }));
                  else if (tb) {
                    const Mb = Fb.activeCamera.position;
                    let Hb = 0,
                      pb = 1 / 0;
                    eb.forEach((bb => {
                      const wb = bb.XN().boundingBox.center,
                        eb = Ib.TransformCoordinates(wb, bb.getWorldMatrix()),
                        Vb = Mb.subtract(eb).length();
                      Hb = Math.max(Hb, Vb), pb = Math.min(pb, Vb)
                    }));
                    const Vb = Hb - pb;
                    Hb += .1 * Vb, pb = Math.max(0, pb - .1 * Vb), Vb < 1 && (Hb = pb + 10), hb.forEach(((eb, Vb) => {
                      const gb = eb.name.toLowerCase(),
                        lb = eb.XN().boundingBox.center,
                        Lb = Ib.TransformCoordinates(lb, eb.getWorldMatrix()),
                        Ob = Mb.subtract(Lb).length();
                      if (!(gb.includes("sky") || gb.includes("background") || gb.includes("environment") || Ob > 1e3)) {
                        const Mb = 1 - Math.min(Math.max((Ob - pb) / (Hb - pb), 0), 1),
                          gb = new bb(`depthMat_${Vb}`, Fb);
                        gb.diffuseColor = new wb(Mb, Mb, Mb), gb.specularColor = new wb(0, 0, 0), eb.material = gb
                      }
                    }))
                  }
                })().then((() => Promise.all([Mb.e(265), Mb.e(264), Mb.e(290), Mb.e(291), Mb.e(288), Mb.e(298), Mb.e(292), Mb.e(297), Mb.e(295), Mb.e(287), Mb.e(300), Mb.e(312), Mb.e(630), Mb.e(279), Mb.e(299), Mb.e(263)]).then((() => Mb(64430))))).then((wb => wb.GLTF2Export.GLBAsync(Fb, bb))).then((bb => {
                  xb(), bb.downloadFiles(), wb()
                })).catch((bb => {
                  console.error("Error exporting GLB:", bb), xb(), wb()
                }))
              }), 100) : Promise.all([Mb.e(265), Mb.e(264), Mb.e(290), Mb.e(291), Mb.e(288), Mb.e(298), Mb.e(292), Mb.e(297), Mb.e(295), Mb.e(287), Mb.e(300), Mb.e(312), Mb.e(630), Mb.e(279), Mb.e(299), Mb.e(263)]).then((() => Mb(64430))).then((Mb => {
                Mb.GLTF2Export.GLBAsync(Fb, bb).then((bb => {
                  xb(), bb.downloadFiles(), wb()
                })).catch((bb => {
                  console.error("Error exporting GLB:", bb), xb(), wb()
                }))
              })).catch((bb => {
                console.error("Error importing serializers:", bb), xb(), wb()
              }))
            }
          })).catch((bb => {
            console.error("Error downloading the scene:", bb), wb()
          }))
        } catch (Cb) {
          console.error("Error taking screenshot:", Cb), wb()
        }
      }))
    }
    const Ob = new class {
      constructor() {
        this.tools = Lb.ALL_DEV_TOOLS
      }
      downloadScene(bb, wb) {
        return Ib(bb, wb)
      }
      async setAmbientLightIntensity(bb) {
        const {
          Color3: wb
        } = await Promise.all([Mb.e(265), Mb.e(268)]).then((() => Mb(38401)));
        (0, pb.h)().FO.RJ().ambientColor = wb.FromArray([bb, bb, bb])
      }
      capturePhoto(bb, wb, Mb) {
        return function(bb, wb, Mb, eb) {
          return (0, gb.e)(lb(bb), wb, Mb, eb)
        }((0, pb.h)(), bb, wb, Mb)
      }
      snapshotNextFrame() {
        return (0, gb.i)(lb((0, pb.h)()))
      }
    }
  },
  42654: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => gb,
      f: () => Lb,
      i: () => lb
    });
    var eb = Mb(1980);
    const Hb = 33177600,
      pb = 3e4;
    let Vb = !1;

    function gb(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: gb = 1,
        type: lb = "image/png",
        quality: Lb
      } = eb;
      return bb.UO() ? Vb ? Promise.reject(new Error("A screenshot is already being taken")) : (Vb = !0, new Promise(((eb, Ib) => {
        let Ob, Ub = 2,
          tb = null;
        const Cb = () => {
          var wb;
          Vb = !1, null === (wb = tb) || void 0 === wb || wb(), clearTimeout(Ob);
          try {
            bb.restoreSize()
          } catch (Mb) {
            console.error("A screenshot couldn't size the canvas back", Mb)
          }
        };
        Ob = setTimeout((() => {
          Cb(), Ib(new Error("No frame was drawn to capture"))
        }), pb);
        try {
          const eb = function(bb, wb, Mb) {
            const eb = Math.max(1, bb),
              pb = Math.max(1, wb),
              Vb = Math.min(1, Mb / Math.max(eb, pb), Math.sqrt(Hb / (eb * pb)));
            return {
              width: Math.max(1, Math.floor(eb * Vb)),
              height: Math.max(1, Math.floor(pb * Vb))
            }
          }(wb, Mb, bb.maxTextureSize);
          bb.resize(eb.width, eb.height, gb * eb.width / Math.max(1, wb))
        } catch (Eb) {
          return Cb(), void Ib(Eb)
        }
        tb = bb.onFrameDrawn((() => {
          if (Ub--, Ub > 0) return;
          const {
            canvas: wb
          } = bb, Mb = {
            width: wb.width,
            height: wb.height
          };
          try {
            wb.toBlob((bb => {
              bb ? eb({
                blob: bb,
                ...Mb
              }) : Ib(new Error("The canvas gave no image"))
            }), lb, Lb)
          } catch (Eb) {
            Ib(Eb)
          } finally {
            Cb()
          }
        }))
      }))) : Promise.reject(new Error("Screenshots need a game to be running"))
    }

    function lb(bb) {
      return bb.UO() ? new Promise(((wb, Mb) => {
        let eb;
        const Hb = bb.onFrameDrawn((() => {
          Hb(), clearTimeout(eb), createImageBitmap(bb.canvas).then(wb, Mb)
        }));
        eb = setTimeout((() => {
          Hb(), Mb(new Error("No frame was drawn to take"))
        }), pb)
      })) : Promise.reject(new Error("No game is drawing"))
    }
    async function Lb(bb, wb, Mb) {
      try {
        const Hb = await gb(bb, wb, Mb);
        (0, eb.d)(Hb.blob, `bloxd-screenshot-${Hb.width}x${Hb.height}-${Date.now()}.png`)
      } catch (Hb) {
        console.error("Error taking screenshot:", Hb)
      }
    }
  },
  38675: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Lb,
      g: () => gb,
      k: () => Vb
    });
    var eb = Mb(38668),
      Hb = Mb(38678);
    let pb = 0;

    function Vb(bb, wb) {
      const Mb = bb;
      Mb._noaFaceGroups = null !== wb && void 0 !== wb ? wb : null, Mb._noaFaceEpoch = -1, Mb._noaFaceMask = -1, Mb._noaFaceCount = -1, Mb._noaFaceMaterial = null;
      const eb = bb.oR;
      eb && 1 === eb.length && (eb[0].indexStart = 0, eb[0].indexCount = bb.getTotalIndices())
    }

    function gb(bb, wb) {
      if (wb) {
        pb++;
        for (const wb of bb) {
          const bb = wb._noaFaceGroups;
          bb && Vb(wb, bb)
        }
      } else pb = Math.max(0, pb - 1)
    }

    function lb(bb, wb, Mb) {
      let Hb = -1,
        pb = 0;
      for (let Vb = 0; Vb < eb.c; Vb++) {
        const Mb = bb[Vb],
          gb = bb[Vb + 1];
        gb > Mb && wb & 1 << eb.b[Vb] && (Hb < 0 && (Hb = Mb), pb = gb)
      }
      return Hb < 0 ? (Mb[0] = 0, Mb[1] = 0, 0) : (Mb[0] = Hb, Mb[1] = pb - Hb, pb - Hb)
    }
    class Lb {
      constructor(bb, wb) {
        this.gO = bb, this.engine = wb, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(bb, wb) {
        if (!wb) return;
        const Mb = wb.getProjectionMatrix().m,
          Vb = 0 === pb && 0 === Mb[15],
          gb = wb.globalPosition,
          {
            engine: Lb
          } = this,
          Ib = Vb ? (0, Hb.c)(Mb, Lb.getRenderWidth(), Lb.getRenderHeight()) : 0;
        gb.x === this.eyeX && gb.y === this.eyeY && gb.z === this.eyeZ && Ib === this.focalPx && Vb === this.culling || (this.epoch++, this.eyeX = gb.x, this.eyeY = gb.y, this.eyeZ = gb.z, this.focalPx = Ib, this.culling = Vb);
        const {
          epoch: Ob,
          range: Ub
        } = this, tb = this.gO / 2, Cb = tb * Math.sqrt(3), Eb = bb.data, Fb = bb.length;
        let Bb = 0;
        for (let pb = 0; pb < Fb; pb++) {
          const bb = Eb[pb],
            wb = bb._noaFaceGroups;
          if (wb && (bb._noaFaceEpoch !== Ob || bb._noaFaceMaterial !== bb.material)) {
            bb._noaFaceEpoch = Ob, bb._noaFaceMaterial = bb.material;
            const Mb = bb.oR,
              pb = Mb && 1 === Mb.length ? Mb[0] : null;
            let Lb = -1;
            if (Vb && pb && (0, eb.o)(bb.material)) {
              const Mb = bb.position,
                eb = gb.x - Mb.x,
                pb = gb.y - Mb.y,
                Vb = gb.z - Mb.z,
                lb = eb - tb,
                Ob = pb - tb,
                Ub = Vb - tb,
                Eb = Math.sqrt(lb * lb + Ob * Ob + Ub * Ub) + Cb;
              Lb = (0, Hb.l)(wb, eb, pb, Vb, (0, Hb.g)(Eb, Ib))
            }
            if (pb && Lb !== bb._noaFaceMask) {
              bb._noaFaceMask = Lb;
              let Mb = 0,
                Hb = wb[eb.c]; - 1 !== Lb && (Hb = lb(wb, Lb, Ub), Mb = Ub[0]), bb._noaFaceCount = Hb, pb.indexStart = 6 * Mb, pb.indexCount = 6 * Hb, pb.setBoundingInfo(bb.XN())
            }
          }
          wb && 0 === bb._noaFaceCount || (Eb[Bb++] = bb)
        }
        bb.length = Bb
      }
    }
  },
  38657: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => lb,
      d: () => gb
    });
    const eb = new WeakSet;
    let Hb = 0;
    const pb = new Set;

    function Vb(bb, wb) {
      bb._data = wb
    }

    function gb(bb) {
      var wb, Mb;
      (null !== (wb = null === (Mb = bb.getBuffer()) || void 0 === Mb ? void 0 : Mb.qO) && void 0 !== wb ? wb : 0) > 0 && (eb.add(bb), 0 === Hb ? Vb(bb, null) : pb.add(bb))
    }

    function lb(bb) {
      Hb++;
      for (const Mb of function(bb) {
          const wb = new Set;
          for (const Hb of bb) {
            const bb = Hb.geometry;
            for (const Hb of Object.values(null !== (Mb = null === bb || void 0 === bb ? void 0 : bb.getVertexBuffers()) && void 0 !== Mb ? Mb : {})) {
              var Mb;
              const bb = Hb.getWrapperBuffer();
              eb.has(bb) && wb.add(bb)
            }
          }
          return wb
        }(bb)) Mb.getData() || Lb(Mb), pb.add(Mb);
      let wb = !0;
      return () => {
        if (wb && (wb = !1, Hb--, 0 === Hb)) {
          for (const bb of pb) Vb(bb, null);
          pb.clear()
        }
      }
    }

    function Lb(bb) {
      const wb = bb.getBuffer();
      if (!wb || !(wb.qO > 0)) return;
      const Mb = bb._engine,
        eb = new Uint8Array(wb.qO);
      Mb.bindArrayBuffer(wb), Mb._gl.getBufferSubData(Mb._gl.ARRAY_BUFFER, 0, eb), Mb._resetVertexBufferBinding(), Vb(bb, eb)
    }
  },
  38668: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb,
      c: () => pb,
      d: () => lb,
      h: () => eb,
      l: () => gb,
      m: () => Hb,
      o: () => Lb
    });
    const eb = 6,
      Hb = [0, 2, 4, 1, 3, 5, 0, 2],
      pb = 6,
      Vb = [1, 0, 3, 2, 5, 4];
    for (let Ib = pb; Ib < Hb.length; Ib++)
      if (Hb[Ib] !== Hb[Ib - pb]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const gb = Hb.length + 1,
      lb = (() => {
        const bb = [];
        for (let wb = 0; wb < pb; wb++) bb[Hb[wb]] = wb;
        return bb
      })();

    function Lb(bb) {
      return !!bb && bb.backFaceCulling && (0 === bb.transparencyMode || 1 === bb.transparencyMode)
    }
  },
  38678: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => gb,
      g: () => lb,
      j: () => Ib,
      l: () => Lb,
      m: () => Cb
    });
    var eb = Mb(38668);
    const Hb = 1 / 16,
      pb = 1 / 64,
      Vb = 2048;
    eb.h;

    function gb(bb, wb, Mb) {
      return Math.min(Math.abs(bb[0] * wb), Math.abs(bb[5] * Mb)) / 2
    }

    function lb(bb, wb) {
      return Hb + pb * bb * bb / wb
    }

    function Lb(bb, wb, Mb, Hb, pb) {
      const Vb = eb.l;
      return Ib(bb[Vb], bb[Vb + 1], bb[Vb + 2], bb[Vb + 3], bb[Vb + 4], bb[Vb + 5], wb, Mb, Hb, pb)
    }

    function Ib(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb) {
      return (Vb <= bb - Lb ? 0 : 1) | (Vb >= wb + Lb ? 0 : 2) | (gb <= Mb - Lb ? 0 : 4) | (gb >= eb + Lb ? 0 : 8) | (lb <= Hb - Lb ? 0 : 16) | (lb >= pb + Lb ? 0 : 32)
    }
    const Ob = (() => {
        const bb = [];
        for (let wb = 0; wb < eb.m.length; wb++) {
          let Mb = 0;
          for (let Hb = wb + 1; Hb <= eb.m.length; Hb++) {
            const pb = 1 << eb.m[Hb - 1];
            if (Mb & pb) break;
            Mb |= pb, bb.push({
              start: wb,
              end: Hb,
              wb: Mb
            })
          }
        }
        return bb
      })(),
      Ub = [];

    function tb(bb, wb) {
      const Mb = eb.d[wb];
      return bb[Mb + 1] - bb[Mb]
    }

    function Cb(bb, wb, Mb) {
      let Hb = 0;
      for (let Vb = 0; Vb < eb.h; Vb++) tb(bb, Vb) > 0 && (Hb |= 1 << Vb);
      if (0 === (wb &= Hb)) return 0;
      if (wb === Hb) return Mb[0] = 0, Mb[1] = bb[eb.c], 1;
      let pb = null,
        gb = 1 / 0;
      for (const Lb of function(bb) {
          let wb = Ub[bb];
          if (wb) return wb;
          const Mb = new Map,
            eb = (bb, wb) => {
              const eb = 4 * bb + wb.length / 2;
              Mb.has(eb) || Mb.set(eb, {
                wb: bb,
                windows: wb
              })
            };
          for (const pb of Ob)
            if ((pb.wb & bb) === bb && eb(pb.wb, [pb.start, pb.end]), 0 !== (pb.wb & bb))
              for (const wb of Ob) wb.start < pb.end || 0 !== (pb.wb & wb.wb) || 0 === (wb.wb & bb) || ((pb.wb | wb.wb) & bb) !== bb || eb(pb.wb | wb.wb, [pb.start, pb.end, wb.start, wb.end]);
          const Hb = [...Mb.values()];
          return wb = Hb.filter((bb => !Hb.some((wb => wb !== bb && (wb.wb & bb.wb) === wb.wb && wb.windows.length <= bb.windows.length)))), Ub[bb] = wb, wb
        }(wb)) {
        let Mb = (Lb.windows.length / 2 - 1) * Vb;
        const lb = Lb.wb & ~wb & Hb;
        for (let wb = 0; wb < eb.h; wb++) lb & 1 << wb && (Mb += tb(bb, wb));
        Mb < gb && (pb = Lb, gb = Mb)
      }
      const lb = pb.windows;
      for (let eb = 0; eb < lb.length; eb += 2) {
        const wb = bb[lb[eb]];
        Mb[eb] = wb, Mb[eb + 1] = bb[lb[eb + 1]] - wb
      }
      return lb.length / 2
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);