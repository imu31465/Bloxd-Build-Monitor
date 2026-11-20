export const id = 230;
export const ids = [230];
export const modules = {
  40495: (bb, cb, sb) => {
    sb.d(cb, {
      noaDevTools: () => Mb
    });
    var kb = sb(37102),
      Wb = sb(37084),
      ab = sb(2612),
      Tb = sb(1704);

    function Ub(bb) {
      const {
        Cl: cb
      } = bb, sb = cb.engine, kb = {
        width: sb.getRenderWidth(),
        height: sb.getRenderHeight()
      };
      return {
        canvas: sb.getRenderingCanvas(),
        maxTextureSize: sb.getCaps().maxTextureSize,
        drawing: () => !bb.bV,
        resize: (bb, cb) => {
          sb.setSize(bb, cb)
        },
        restoreSize: () => {
          sb.setSize(kb.width, kb.height), cb.resize()
        },
        onFrameDrawn: cb => (bb.on("afterRender", cb), () => {
          bb.off("afterRender", cb)
        })
      }
    }
    var Ib = sb(40474),
      Hb = sb(8819);

    function fb(bb, cb) {
      let {
        width: Hb,
        height: fb,
        colouring: Mb
      } = cb;
      const Xb = "normals" === Mb,
        nb = "depth" === Mb;
      return new Promise((cb => {
        try {
          const mb = (0, ab.e)();
          if (mb.Cl.Nl) return "screenshot" !== bb || null !== Mb ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void cb()) : void(0, Ib.e)(Ub(mb), Hb, fb).finally(cb);
          const lb = mb.Cl.engine,
            Qb = mb.Cl.EY(),
            eb = Hb,
            Cb = fb;
          Promise.all([Promise.all([sb.e(244), sb.e(245), sb.e(227)]).then((() => sb(60563))), Promise.all([sb.e(226), sb.e(225), sb.e(244), sb.e(245), sb.e(242), sb.e(246), sb.e(249), sb.e(301), sb.e(231)]).then((() => sb(60567))), Promise.all([sb.e(226), sb.e(225), sb.e(244), sb.e(245), sb.e(242), sb.e(252), sb.e(246), sb.e(254), sb.e(233)]).then((() => sb(60571))), sb.e(344).then((() => sb(60576))), Promise.all([sb.e(225), sb.e(221)]).then((() => sb(36654))), sb.e(243).then((() => sb(60585))), sb.e(228).then((() => sb(60594)))]).then((ab => {
            const {
              CreateScreenshotUsingRenderTarget: Ub
            } = ab[1], {
              ShaderMaterial: Ib
            } = ab[2], {
              ShaderLanguage: Hb
            } = ab[3], {
              Fm: fb
            } = ab[4], {
              registerDevtoolsShader: Mb
            } = ab[6], mb = Hb.GLSL, Nb = new Map, Vb = Qb.meshes.filter((bb => bb.material));
            let Lb = !1,
              ub = null;

            function Yb() {
              var bb;
              Lb && (Lb = !1, (0, kb.e)(Qb.meshes, !1)), null === (bb = ub) || void 0 === bb || bb(), ub = null, Vb.forEach((bb => {
                const cb = Nb.get(bb);
                cb && (bb.material = cb)
              }))
            }
            if (Xb) {
              const bb = [],
                cb = [];
              Vb.forEach((sb => {
                const kb = sb.name.toLowerCase(),
                  Wb = sb.PJ().boundingBox.center,
                  ab = Qb.activeCamera.position.subtract(Wb).length();
                kb.includes("sky") || kb.includes("background") || kb.includes("environment") || ab > 1e3 ? cb.push(sb) : bb.push(sb)
              })), Mb("devtoolsNormal", mb);
              const sb = new Ib("normalMaterial", Qb, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: mb
              });
              Mb("devtoolsWhite", mb);
              const kb = new Ib("whiteMaterial", Qb, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: mb
              });
              bb.forEach((bb => {
                Nb.set(bb, bb.material), bb.material = sb
              })), cb.forEach((bb => {
                Nb.set(bb, bb.material), bb.material = kb
              }))
            } else if (nb) {
              Mb("devtoolsDepth", mb);
              const bb = Qb.activeCamera.position;
              let cb = 0,
                sb = 1 / 0;
              Vb.forEach((kb => {
                const Wb = kb.name.toLowerCase();
                if (Wb.includes("sky") || Wb.includes("background") || Wb.includes("environment")) return;
                const ab = kb.PJ().boundingBox.center,
                  Tb = fb.TransformCoordinates(ab, kb.getWorldMatrix()),
                  Ub = bb.subtract(Tb).length();
                Ub > 1e3 || (cb = Math.max(cb, Ub), sb = Math.min(sb, Ub))
              }));
              const kb = cb - sb;
              cb += .1 * kb, sb = Math.max(0, sb - .1 * kb), console.log(`Depth range: min=${sb.toFixed(2)}, max=${cb.toFixed(2)}, range=${kb.toFixed(2)}`), kb < 1 && (cb = sb + 10);
              const Wb = new Ib("depthMaterial", Qb, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: mb
              });
              Wb.setVector3("cameraPosition", bb), Wb.setFloat("maxDepth", cb), Wb.setFloat("minDepth", sb), Vb.forEach((bb => {
                Nb.set(bb, bb.material), bb.material = Wb
              }))
            }
            if ((0, kb.e)(Qb.meshes, !0), Lb = !0, "glb" === bb && (ub = (0, Wb.d)(Qb.meshes)), "screenshot" === bb) {
              let bb = `bloxd-screenshot-${eb}x${Cb}-${Date.now()}.png`;
              Xb ? bb = `bloxd-screenshot-normals-${eb}x${Cb}-${Date.now()}.png` : nb && (bb = `bloxd-screenshot-depth-${eb}x${Cb}-${Date.now()}.png`), Ub(lb, Qb.activeCamera, {
                width: eb,
                height: Cb
              }, (function(sb) {
                Yb(), fetch(sb).then((function(bb) {
                  return bb.blob()
                })).then((function(sb) {
                  (0, Tb.downloadBlob)(sb, bb), cb()
                })).catch((function(bb) {
                  console.error("Error processing screenshot:", bb), cb()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), Yb(), cb()
              }))
            } else {
              let bb = "aQ";
              Xb ? bb = "scene-normals" : nb && (bb = "scene-depth"), Xb || nb ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: bb
                  } = await Promise.all([sb.e(226), sb.e(225), sb.e(244), sb.e(245), sb.e(242), sb.e(252), sb.e(251), sb.e(232)]).then((() => sb(39709))), {
                    Color3: cb
                  } = await Promise.all([sb.e(226), sb.e(229)]).then((() => sb(36821))), kb = [], Wb = [];
                  if (Vb.forEach((bb => {
                      const cb = bb.name.toLowerCase(),
                        sb = bb.PJ().boundingBox.center,
                        ab = Qb.activeCamera.position.subtract(sb).length();
                      cb.includes("sky") || cb.includes("background") || cb.includes("environment") || ab > 1e3 ? Wb.push(bb) : kb.push(bb)
                    })), Xb) kb.forEach(((sb, kb) => {
                    const Wb = sb.getVerticesData("normal");
                    if (Wb) {
                      const ab = [];
                      for (let bb = 0; bb < Wb.length; bb += 3) {
                        const cb = Math.abs(Wb[bb]),
                          sb = Math.abs(Wb[bb + 1]),
                          kb = Math.abs(Wb[bb + 2]);
                        ab.push(cb, sb, kb, 1)
                      }
                      sb.setVerticesData("color", ab);
                      const Tb = new bb(`vertexColorMat_${kb}`, Qb);
                      Tb.disableLighting = !0, Tb.emissiveColor = new cb(1, 1, 1), Tb.specularColor = new cb(0, 0, 0), sb.material = Tb
                    }
                  })), Wb.forEach(((sb, kb) => {
                    const Wb = sb.getVerticesData("position");
                    if (Wb) {
                      const ab = [],
                        Tb = Wb.length / 3;
                      for (let bb = 0; bb < Tb; bb++) ab.push(1, 1, 1, 1);
                      sb.setVerticesData("color", ab);
                      const Ub = new bb(`whiteMat_${kb}`, Qb);
                      Ub.disableLighting = !0, Ub.emissiveColor = new cb(1, 1, 1), Ub.specularColor = new cb(0, 0, 0), sb.material = Ub
                    }
                  }));
                  else if (nb) {
                    const sb = Qb.activeCamera.position;
                    let Wb = 0,
                      ab = 1 / 0;
                    kb.forEach((bb => {
                      const cb = bb.PJ().boundingBox.center,
                        kb = fb.TransformCoordinates(cb, bb.getWorldMatrix()),
                        Tb = sb.subtract(kb).length();
                      Wb = Math.max(Wb, Tb), ab = Math.min(ab, Tb)
                    }));
                    const Tb = Wb - ab;
                    Wb += .1 * Tb, ab = Math.max(0, ab - .1 * Tb), Tb < 1 && (Wb = ab + 10), Vb.forEach(((kb, Tb) => {
                      const Ub = kb.name.toLowerCase(),
                        Ib = kb.PJ().boundingBox.center,
                        Hb = fb.TransformCoordinates(Ib, kb.getWorldMatrix()),
                        Mb = sb.subtract(Hb).length();
                      if (!(Ub.includes("sky") || Ub.includes("background") || Ub.includes("environment") || Mb > 1e3)) {
                        const sb = 1 - Math.min(Math.max((Mb - ab) / (Wb - ab), 0), 1),
                          Ub = new bb(`depthMat_${Tb}`, Qb);
                        Ub.diffuseColor = new cb(sb, sb, sb), Ub.specularColor = new cb(0, 0, 0), kb.material = Ub
                      }
                    }))
                  }
                })().then((() => Promise.all([sb.e(226), sb.e(225), sb.e(244), sb.e(245), sb.e(242), sb.e(252), sb.e(246), sb.e(251), sb.e(249), sb.e(241), sb.e(254), sb.e(264), sb.e(301), sb.e(236), sb.e(253), sb.e(224)]).then((() => sb(60600))))).then((cb => cb.GLTF2Export.GLBAsync(Qb, bb))).then((bb => {
                  Yb(), bb.downloadFiles(), cb()
                })).catch((bb => {
                  console.error("Error exporting GLB:", bb), Yb(), cb()
                }))
              }), 100) : Promise.all([sb.e(226), sb.e(225), sb.e(244), sb.e(245), sb.e(242), sb.e(252), sb.e(246), sb.e(251), sb.e(249), sb.e(241), sb.e(254), sb.e(264), sb.e(301), sb.e(236), sb.e(253), sb.e(224)]).then((() => sb(60600))).then((sb => {
                sb.GLTF2Export.GLBAsync(Qb, bb).then((bb => {
                  Yb(), bb.downloadFiles(), cb()
                })).catch((bb => {
                  console.error("Error exporting GLB:", bb), Yb(), cb()
                }))
              })).catch((bb => {
                console.error("Error importing serializers:", bb), Yb(), cb()
              }))
            }
          })).catch((bb => {
            console.error("Error downloading the scene:", bb), cb()
          }))
        } catch (mb) {
          console.error("Error taking screenshot:", mb), cb()
        }
      }))
    }
    const Mb = new class {
      constructor() {
        this.tools = Hb.ALL_DEV_TOOLS
      }
      downloadScene(bb, cb) {
        return fb(bb, cb)
      }
      async setAmbientLightIntensity(bb) {
        const {
          Color3: cb
        } = await Promise.all([sb.e(226), sb.e(229)]).then((() => sb(36821)));
        (0, ab.e)().Cl.EY().ambientColor = cb.FromArray([bb, bb, bb])
      }
    }
  },
  40474: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Ib
    });
    var kb = sb(1721);
    const Wb = 33177600,
      ab = 3e4;
    let Tb = !1;

    function Ub(bb, cb, sb) {
      if (!bb.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (Tb) return Promise.reject(new Error("A screenshot is already being taken"));
      Tb = !0;
      const kb = function(bb, cb, sb) {
        const kb = Math.max(1, bb),
          ab = Math.max(1, cb),
          Tb = Math.min(1, sb / Math.max(kb, ab), Math.sqrt(Wb / (kb * ab)));
        return {
          width: Math.max(1, Math.floor(kb * Tb)),
          height: Math.max(1, Math.floor(ab * Tb))
        }
      }(cb, sb, bb.maxTextureSize);
      return bb.resize(kb.width, kb.height), new Promise(((cb, sb) => {
        let kb, Wb = 2,
          Ub = null;
        const Ib = () => {
          var cb;
          Tb = !1, null === (cb = Ub) || void 0 === cb || cb(), clearTimeout(kb), bb.restoreSize()
        };
        kb = setTimeout((() => {
          Ib(), sb(new Error("No frame was drawn to capture"))
        }), ab), Ub = bb.onFrameDrawn((() => {
          if (Wb--, Wb > 0) return;
          const {
            canvas: kb
          } = bb, ab = {
            width: kb.width,
            height: kb.height
          };
          try {
            kb.toBlob((bb => {
              bb ? cb({
                blob: bb,
                ...ab
              }) : sb(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (Tb) {
            sb(Tb)
          } finally {
            Ib()
          }
        }))
      }))
    }
    async function Ib(bb, cb, sb) {
      try {
        const Wb = await Ub(bb, cb, sb);
        (0, kb.c)(Wb.blob, `bloxd-screenshot-${Wb.width}x${Wb.height}-${Date.now()}.png`)
      } catch (Wb) {
        console.error("Error taking screenshot:", Wb)
      }
    }
  },
  37102: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Hb,
      e: () => Ub,
      f: () => Tb
    });
    var kb = sb(37100),
      Wb = sb(37104);
    let ab = 0;

    function Tb(bb, cb) {
      const sb = bb;
      sb._noaFaceGroups = null !== cb && void 0 !== cb ? cb : null, sb._noaFaceEpoch = -1, sb._noaFaceMask = -1, sb._noaFaceCount = -1, sb._noaFaceMaterial = null;
      const kb = bb.XV;
      kb && 1 === kb.length && (kb[0].indexStart = 0, kb[0].indexCount = bb.getTotalIndices())
    }

    function Ub(bb, cb) {
      if (cb) {
        ab++;
        for (const cb of bb) {
          const bb = cb._noaFaceGroups;
          bb && Tb(cb, bb)
        }
      } else ab = Math.max(0, ab - 1)
    }

    function Ib(bb, cb, sb) {
      let Wb = -1,
        ab = 0;
      for (let Tb = 0; Tb < kb.e; Tb++) {
        const sb = bb[Tb],
          Ub = bb[Tb + 1];
        Ub > sb && cb & 1 << kb.d[Tb] && (Wb < 0 && (Wb = sb), ab = Ub)
      }
      return Wb < 0 ? (sb[0] = 0, sb[1] = 0, 0) : (sb[0] = Wb, sb[1] = ab - Wb, ab - Wb)
    }
    class Hb {
      constructor(bb, cb) {
        this.qm = bb, this.engine = cb, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(bb, cb) {
        if (!cb) return;
        const sb = cb.getProjectionMatrix().m,
          Tb = 0 === ab && 0 === sb[15],
          Ub = cb.globalPosition,
          {
            engine: Hb
          } = this,
          fb = Tb ? (0, Wb.d)(sb, Hb.getRenderWidth(), Hb.getRenderHeight()) : 0;
        Ub.x === this.eyeX && Ub.y === this.eyeY && Ub.z === this.eyeZ && fb === this.focalPx && Tb === this.culling || (this.epoch++, this.eyeX = Ub.x, this.eyeY = Ub.y, this.eyeZ = Ub.z, this.focalPx = fb, this.culling = Tb);
        const {
          epoch: Mb,
          range: Xb
        } = this, nb = this.qm / 2, mb = nb * Math.sqrt(3), lb = bb.data, Qb = bb.length;
        let eb = 0;
        for (let ab = 0; ab < Qb; ab++) {
          const bb = lb[ab],
            cb = bb._noaFaceGroups;
          if (cb && (bb._noaFaceEpoch !== Mb || bb._noaFaceMaterial !== bb.material)) {
            bb._noaFaceEpoch = Mb, bb._noaFaceMaterial = bb.material;
            const sb = bb.XV,
              ab = sb && 1 === sb.length ? sb[0] : null;
            let Hb = -1;
            if (Tb && ab && (0, kb.n)(bb.material)) {
              const sb = bb.position,
                kb = Ub.x - sb.x,
                ab = Ub.y - sb.y,
                Tb = Ub.z - sb.z,
                Ib = kb - nb,
                Mb = ab - nb,
                Xb = Tb - nb,
                lb = Math.sqrt(Ib * Ib + Mb * Mb + Xb * Xb) + mb;
              Hb = (0, Wb.k)(cb, kb, ab, Tb, (0, Wb.f)(lb, fb))
            }
            if (ab && Hb !== bb._noaFaceMask) {
              bb._noaFaceMask = Hb;
              let sb = 0,
                Wb = cb[kb.e]; - 1 !== Hb && (Wb = Ib(cb, Hb, Xb), sb = Xb[0]), bb._noaFaceCount = Wb, ab.indexStart = 6 * sb, ab.indexCount = 6 * Wb, ab.setBoundingInfo(bb.PJ())
            }
          }
          cb && 0 === bb._noaFaceCount || (lb[eb++] = bb)
        }
        bb.length = eb
      }
    }
  },
  37084: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Ib,
      g: () => Ub
    });
    const kb = new WeakSet;
    let Wb = 0;
    const ab = new Set;

    function Tb(bb, cb) {
      bb._data = cb
    }

    function Ub(bb) {
      var cb, sb;
      (null !== (cb = null === (sb = bb.getBuffer()) || void 0 === sb ? void 0 : sb.GM) && void 0 !== cb ? cb : 0) > 0 && (kb.add(bb), 0 === Wb ? Tb(bb, null) : ab.add(bb))
    }

    function Ib(bb) {
      Wb++;
      for (const sb of function(bb) {
          const cb = new Set;
          for (const Wb of bb) {
            const bb = Wb.geometry;
            for (const Wb of Object.values(null !== (sb = null === bb || void 0 === bb ? void 0 : bb.getVertexBuffers()) && void 0 !== sb ? sb : {})) {
              var sb;
              const bb = Wb.getWrapperBuffer();
              kb.has(bb) && cb.add(bb)
            }
          }
          return cb
        }(bb)) sb.getData() || Hb(sb), ab.add(sb);
      let cb = !0;
      return () => {
        if (cb && (cb = !1, Wb--, 0 === Wb)) {
          for (const bb of ab) Tb(bb, null);
          ab.clear()
        }
      }
    }

    function Hb(bb) {
      const cb = bb.getBuffer();
      if (!cb || !(cb.GM > 0)) return;
      const sb = bb._engine,
        kb = new Uint8Array(cb.GM);
      sb.bindArrayBuffer(cb), sb._gl.getBufferSubData(sb._gl.ARRAY_BUFFER, 0, kb), sb._resetVertexBufferBinding(), Tb(bb, kb)
    }
  },
  37100: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb,
      e: () => ab,
      f: () => Ib,
      h: () => kb,
      i: () => Ub,
      j: () => Wb,
      n: () => Hb
    });
    const kb = 6,
      Wb = [0, 2, 4, 1, 3, 5, 0, 2],
      ab = 6,
      Tb = [1, 0, 3, 2, 5, 4];
    for (let fb = ab; fb < Wb.length; fb++)
      if (Wb[fb] !== Wb[fb - ab]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const Ub = Wb.length + 1,
      Ib = (() => {
        const bb = [];
        for (let cb = 0; cb < ab; cb++) bb[Wb[cb]] = cb;
        return bb
      })();

    function Hb(bb) {
      return !!bb && bb.backFaceCulling && (0 === bb.transparencyMode || 1 === bb.transparencyMode)
    }
  },
  37104: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Ub,
      f: () => Ib,
      j: () => fb,
      k: () => Hb,
      m: () => mb
    });
    var kb = sb(37100);
    const Wb = 1 / 16,
      ab = 1 / 64,
      Tb = 2048;
    kb.h;

    function Ub(bb, cb, sb) {
      return Math.min(Math.abs(bb[0] * cb), Math.abs(bb[5] * sb)) / 2
    }

    function Ib(bb, cb) {
      return Wb + ab * bb * bb / cb
    }

    function Hb(bb, cb, sb, Wb, ab) {
      const Tb = kb.i;
      return fb(bb[Tb], bb[Tb + 1], bb[Tb + 2], bb[Tb + 3], bb[Tb + 4], bb[Tb + 5], cb, sb, Wb, ab)
    }

    function fb(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb) {
      return (Tb <= bb - Hb ? 0 : 1) | (Tb >= cb + Hb ? 0 : 2) | (Ub <= sb - Hb ? 0 : 4) | (Ub >= kb + Hb ? 0 : 8) | (Ib <= Wb - Hb ? 0 : 16) | (Ib >= ab + Hb ? 0 : 32)
    }
    const Mb = (() => {
        const bb = [];
        for (let cb = 0; cb < kb.j.length; cb++) {
          let sb = 0;
          for (let Wb = cb + 1; Wb <= kb.j.length; Wb++) {
            const ab = 1 << kb.j[Wb - 1];
            if (sb & ab) break;
            sb |= ab, bb.push({
              start: cb,
              end: Wb,
              Ja: sb
            })
          }
        }
        return bb
      })(),
      Xb = [];

    function nb(bb, cb) {
      const sb = kb.f[cb];
      return bb[sb + 1] - bb[sb]
    }

    function mb(bb, cb, sb) {
      let Wb = 0;
      for (let Tb = 0; Tb < kb.h; Tb++) nb(bb, Tb) > 0 && (Wb |= 1 << Tb);
      if (0 === (cb &= Wb)) return 0;
      if (cb === Wb) return sb[0] = 0, sb[1] = bb[kb.e], 1;
      let ab = null,
        Ub = 1 / 0;
      for (const Hb of function(bb) {
          let cb = Xb[bb];
          if (cb) return cb;
          const sb = new Map,
            kb = (bb, cb) => {
              const kb = 4 * bb + cb.length / 2;
              sb.has(kb) || sb.set(kb, {
                Ja: bb,
                windows: cb
              })
            };
          for (const ab of Mb)
            if ((ab.Ja & bb) === bb && kb(ab.Ja, [ab.start, ab.end]), 0 !== (ab.Ja & bb))
              for (const cb of Mb) cb.start < ab.end || 0 !== (ab.Ja & cb.Ja) || 0 === (cb.Ja & bb) || ((ab.Ja | cb.Ja) & bb) !== bb || kb(ab.Ja | cb.Ja, [ab.start, ab.end, cb.start, cb.end]);
          const Wb = [...sb.values()];
          return cb = Wb.filter((bb => !Wb.some((cb => cb !== bb && (cb.Ja & bb.Ja) === cb.Ja && cb.windows.length <= bb.windows.length)))), Xb[bb] = cb, cb
        }(cb)) {
        let sb = (Hb.windows.length / 2 - 1) * Tb;
        const Ib = Hb.Ja & ~cb & Wb;
        for (let cb = 0; cb < kb.h; cb++) Ib & 1 << cb && (sb += nb(bb, cb));
        sb < Ub && (ab = Hb, Ub = sb)
      }
      const Ib = ab.windows;
      for (let kb = 0; kb < Ib.length; kb += 2) {
        const cb = bb[Ib[kb]];
        sb[kb] = cb, sb[kb + 1] = bb[Ib[kb + 1]] - cb
      }
      return Ib.length / 2
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);