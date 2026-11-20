export const id = 230;
export const ids = [230];
export const modules = {
  40174: (bb, ab, Ub) => {
    Ub.d(ab, {
      noaDevTools: () => Lb
    });
    var Ab = Ub(36883),
      Mb = Ub(36867),
      Tb = Ub(2549),
      Eb = Ub(1639);

    function Yb(bb) {
      const {
        Fj: ab
      } = bb, Ub = ab.engine, Ab = {
        width: Ub.getRenderWidth(),
        height: Ub.getRenderHeight()
      };
      return {
        canvas: Ub.getRenderingCanvas(),
        maxTextureSize: Ub.getCaps().maxTextureSize,
        drawing: () => !bb.jD,
        resize: (bb, ab) => {
          Ub.setSize(bb, ab)
        },
        restoreSize: () => {
          Ub.setSize(Ab.width, Ab.height), ab.resize()
        },
        onFrameDrawn: ab => (bb.on("afterRender", ab), () => {
          bb.off("afterRender", ab)
        })
      }
    }
    var Bb = Ub(40153),
      eb = Ub(8794);

    function vb(bb, ab) {
      let {
        width: eb,
        height: vb,
        colouring: Lb
      } = ab;
      const Pb = "normals" === Lb,
        Xb = "depth" === Lb;
      return new Promise((ab => {
        try {
          const jb = (0, Tb.h)();
          if (jb.Fj.hj) return "screenshot" !== bb || null !== Lb ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void ab()) : void(0, Bb.e)(Yb(jb), eb, vb).finally(ab);
          const Rb = jb.Fj.engine,
            kb = jb.Fj.oN(),
            yb = eb,
            Zb = vb;
          Promise.all([Promise.all([Ub.e(244), Ub.e(245), Ub.e(227)]).then((() => Ub(60240))), Promise.all([Ub.e(226), Ub.e(225), Ub.e(244), Ub.e(245), Ub.e(242), Ub.e(246), Ub.e(249), Ub.e(301), Ub.e(231)]).then((() => Ub(60243))), Promise.all([Ub.e(226), Ub.e(225), Ub.e(244), Ub.e(245), Ub.e(242), Ub.e(252), Ub.e(246), Ub.e(254), Ub.e(233)]).then((() => Ub(60245))), Ub.e(344).then((() => Ub(60247))), Promise.all([Ub.e(225), Ub.e(221)]).then((() => Ub(36392))), Ub.e(243).then((() => Ub(60252))), Ub.e(228).then((() => Ub(60255)))]).then((Tb => {
            const {
              CreateScreenshotUsingRenderTarget: Yb
            } = Tb[1], {
              ShaderMaterial: Bb
            } = Tb[2], {
              ShaderLanguage: eb
            } = Tb[3], {
              Pj: vb
            } = Tb[4], {
              registerDevtoolsShader: Lb
            } = Tb[6], jb = eb.GLSL, Db = new Map, zb = kb.meshes.filter((bb => bb.material));
            let xb = !1,
              ib = null;

            function fb() {
              var bb;
              xb && (xb = !1, (0, Ab.e)(kb.meshes, !1)), null === (bb = ib) || void 0 === bb || bb(), ib = null, zb.forEach((bb => {
                const ab = Db.get(bb);
                ab && (bb.material = ab)
              }))
            }
            if (Pb) {
              const bb = [],
                ab = [];
              zb.forEach((Ub => {
                const Ab = Ub.name.toLowerCase(),
                  Mb = Ub.DH().boundingBox.center,
                  Tb = kb.activeCamera.position.subtract(Mb).length();
                Ab.includes("sky") || Ab.includes("background") || Ab.includes("environment") || Tb > 1e3 ? ab.push(Ub) : bb.push(Ub)
              })), Lb("devtoolsNormal", jb);
              const Ub = new Bb("normalMaterial", kb, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: jb
              });
              Lb("devtoolsWhite", jb);
              const Ab = new Bb("whiteMaterial", kb, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: jb
              });
              bb.forEach((bb => {
                Db.set(bb, bb.material), bb.material = Ub
              })), ab.forEach((bb => {
                Db.set(bb, bb.material), bb.material = Ab
              }))
            } else if (Xb) {
              Lb("devtoolsDepth", jb);
              const bb = kb.activeCamera.position;
              let ab = 0,
                Ub = 1 / 0;
              zb.forEach((Ab => {
                const Mb = Ab.name.toLowerCase();
                if (Mb.includes("sky") || Mb.includes("background") || Mb.includes("environment")) return;
                const Tb = Ab.DH().boundingBox.center,
                  Eb = vb.TransformCoordinates(Tb, Ab.getWorldMatrix()),
                  Yb = bb.subtract(Eb).length();
                Yb > 1e3 || (ab = Math.max(ab, Yb), Ub = Math.min(Ub, Yb))
              }));
              const Ab = ab - Ub;
              ab += .1 * Ab, Ub = Math.max(0, Ub - .1 * Ab), console.log(`Depth range: min=${Ub.toFixed(2)}, max=${ab.toFixed(2)}, range=${Ab.toFixed(2)}`), Ab < 1 && (ab = Ub + 10);
              const Mb = new Bb("depthMaterial", kb, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: jb
              });
              Mb.setVector3("cameraPosition", bb), Mb.setFloat("maxDepth", ab), Mb.setFloat("minDepth", Ub), zb.forEach((bb => {
                Db.set(bb, bb.material), bb.material = Mb
              }))
            }
            if ((0, Ab.e)(kb.meshes, !0), xb = !0, "glb" === bb && (ib = (0, Mb.b)(kb.meshes)), "screenshot" === bb) {
              let bb = `bloxd-screenshot-${yb}x${Zb}-${Date.now()}.png`;
              Pb ? bb = `bloxd-screenshot-normals-${yb}x${Zb}-${Date.now()}.png` : Xb && (bb = `bloxd-screenshot-depth-${yb}x${Zb}-${Date.now()}.png`), Yb(Rb, kb.activeCamera, {
                width: yb,
                height: Zb
              }, (function(Ub) {
                fb(), fetch(Ub).then((function(bb) {
                  return bb.blob()
                })).then((function(Ub) {
                  (0, Eb.downloadBlob)(Ub, bb), ab()
                })).catch((function(bb) {
                  console.error("Error processing screenshot:", bb), ab()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), fb(), ab()
              }))
            } else {
              let bb = "ZR";
              Pb ? bb = "scene-normals" : Xb && (bb = "scene-depth"), Pb || Xb ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: bb
                  } = await Promise.all([Ub.e(226), Ub.e(225), Ub.e(244), Ub.e(245), Ub.e(242), Ub.e(252), Ub.e(251), Ub.e(232)]).then((() => Ub(39361))), {
                    Color3: ab
                  } = await Promise.all([Ub.e(226), Ub.e(229)]).then((() => Ub(36587))), Ab = [], Mb = [];
                  if (zb.forEach((bb => {
                      const ab = bb.name.toLowerCase(),
                        Ub = bb.DH().boundingBox.center,
                        Tb = kb.activeCamera.position.subtract(Ub).length();
                      ab.includes("sky") || ab.includes("background") || ab.includes("environment") || Tb > 1e3 ? Mb.push(bb) : Ab.push(bb)
                    })), Pb) Ab.forEach(((Ub, Ab) => {
                    const Mb = Ub.getVerticesData("normal");
                    if (Mb) {
                      const Tb = [];
                      for (let bb = 0; bb < Mb.length; bb += 3) {
                        const ab = Math.abs(Mb[bb]),
                          Ub = Math.abs(Mb[bb + 1]),
                          Ab = Math.abs(Mb[bb + 2]);
                        Tb.push(ab, Ub, Ab, 1)
                      }
                      Ub.setVerticesData("color", Tb);
                      const Eb = new bb(`vertexColorMat_${Ab}`, kb);
                      Eb.disableLighting = !0, Eb.emissiveColor = new ab(1, 1, 1), Eb.specularColor = new ab(0, 0, 0), Ub.material = Eb
                    }
                  })), Mb.forEach(((Ub, Ab) => {
                    const Mb = Ub.getVerticesData("position");
                    if (Mb) {
                      const Tb = [],
                        Eb = Mb.length / 3;
                      for (let bb = 0; bb < Eb; bb++) Tb.push(1, 1, 1, 1);
                      Ub.setVerticesData("color", Tb);
                      const Yb = new bb(`whiteMat_${Ab}`, kb);
                      Yb.disableLighting = !0, Yb.emissiveColor = new ab(1, 1, 1), Yb.specularColor = new ab(0, 0, 0), Ub.material = Yb
                    }
                  }));
                  else if (Xb) {
                    const Ub = kb.activeCamera.position;
                    let Mb = 0,
                      Tb = 1 / 0;
                    Ab.forEach((bb => {
                      const ab = bb.DH().boundingBox.center,
                        Ab = vb.TransformCoordinates(ab, bb.getWorldMatrix()),
                        Eb = Ub.subtract(Ab).length();
                      Mb = Math.max(Mb, Eb), Tb = Math.min(Tb, Eb)
                    }));
                    const Eb = Mb - Tb;
                    Mb += .1 * Eb, Tb = Math.max(0, Tb - .1 * Eb), Eb < 1 && (Mb = Tb + 10), zb.forEach(((Ab, Eb) => {
                      const Yb = Ab.name.toLowerCase(),
                        Bb = Ab.DH().boundingBox.center,
                        eb = vb.TransformCoordinates(Bb, Ab.getWorldMatrix()),
                        Lb = Ub.subtract(eb).length();
                      if (!(Yb.includes("sky") || Yb.includes("background") || Yb.includes("environment") || Lb > 1e3)) {
                        const Ub = 1 - Math.min(Math.max((Lb - Tb) / (Mb - Tb), 0), 1),
                          Yb = new bb(`depthMat_${Eb}`, kb);
                        Yb.diffuseColor = new ab(Ub, Ub, Ub), Yb.specularColor = new ab(0, 0, 0), Ab.material = Yb
                      }
                    }))
                  }
                })().then((() => Promise.all([Ub.e(226), Ub.e(225), Ub.e(244), Ub.e(245), Ub.e(242), Ub.e(252), Ub.e(246), Ub.e(251), Ub.e(249), Ub.e(241), Ub.e(254), Ub.e(264), Ub.e(301), Ub.e(236), Ub.e(253), Ub.e(224)]).then((() => Ub(60263))))).then((ab => ab.GLTF2Export.GLBAsync(kb, bb))).then((bb => {
                  fb(), bb.downloadFiles(), ab()
                })).catch((bb => {
                  console.error("Error exporting GLB:", bb), fb(), ab()
                }))
              }), 100) : Promise.all([Ub.e(226), Ub.e(225), Ub.e(244), Ub.e(245), Ub.e(242), Ub.e(252), Ub.e(246), Ub.e(251), Ub.e(249), Ub.e(241), Ub.e(254), Ub.e(264), Ub.e(301), Ub.e(236), Ub.e(253), Ub.e(224)]).then((() => Ub(60263))).then((Ub => {
                Ub.GLTF2Export.GLBAsync(kb, bb).then((bb => {
                  fb(), bb.downloadFiles(), ab()
                })).catch((bb => {
                  console.error("Error exporting GLB:", bb), fb(), ab()
                }))
              })).catch((bb => {
                console.error("Error importing serializers:", bb), fb(), ab()
              }))
            }
          })).catch((bb => {
            console.error("Error downloading the scene:", bb), ab()
          }))
        } catch (jb) {
          console.error("Error taking screenshot:", jb), ab()
        }
      }))
    }
    const Lb = new class {
      constructor() {
        this.tools = eb.ALL_DEV_TOOLS
      }
      downloadScene(bb, ab) {
        return vb(bb, ab)
      }
      async setAmbientLightIntensity(bb) {
        const {
          Color3: ab
        } = await Promise.all([Ub.e(226), Ub.e(229)]).then((() => Ub(36587)));
        (0, Tb.h)().Fj.oN().ambientColor = ab.FromArray([bb, bb, bb])
      }
    }
  },
  40153: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Bb
    });
    var Ab = Ub(1655);
    const Mb = 33177600,
      Tb = 3e4;
    let Eb = !1;

    function Yb(bb, ab, Ub) {
      if (!bb.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (Eb) return Promise.reject(new Error("A screenshot is already being taken"));
      Eb = !0;
      const Ab = function(bb, ab, Ub) {
        const Ab = Math.max(1, bb),
          Tb = Math.max(1, ab),
          Eb = Math.min(1, Ub / Math.max(Ab, Tb), Math.sqrt(Mb / (Ab * Tb)));
        return {
          width: Math.max(1, Math.floor(Ab * Eb)),
          height: Math.max(1, Math.floor(Tb * Eb))
        }
      }(ab, Ub, bb.maxTextureSize);
      return bb.resize(Ab.width, Ab.height), new Promise(((ab, Ub) => {
        let Ab, Mb = 2,
          Yb = null;
        const Bb = () => {
          var ab;
          Eb = !1, null === (ab = Yb) || void 0 === ab || ab(), clearTimeout(Ab), bb.restoreSize()
        };
        Ab = setTimeout((() => {
          Bb(), Ub(new Error("No frame was drawn to capture"))
        }), Tb), Yb = bb.onFrameDrawn((() => {
          if (Mb--, Mb > 0) return;
          const {
            canvas: Ab
          } = bb, Tb = {
            width: Ab.width,
            height: Ab.height
          };
          try {
            Ab.toBlob((bb => {
              bb ? ab({
                blob: bb,
                ...Tb
              }) : Ub(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (Eb) {
            Ub(Eb)
          } finally {
            Bb()
          }
        }))
      }))
    }
    async function Bb(bb, ab, Ub) {
      try {
        const Mb = await Yb(bb, ab, Ub);
        (0, Ab.c)(Mb.blob, `bloxd-screenshot-${Mb.width}x${Mb.height}-${Date.now()}.png`)
      } catch (Mb) {
        console.error("Error taking screenshot:", Mb)
      }
    }
  },
  36883: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => eb,
      e: () => Yb,
      i: () => Eb
    });
    var Ab = Ub(36881),
      Mb = Ub(36887);
    let Tb = 0;

    function Eb(bb, ab) {
      const Ub = bb;
      Ub._noaFaceGroups = null !== ab && void 0 !== ab ? ab : null, Ub._noaFaceEpoch = -1, Ub._noaFaceMask = -1, Ub._noaFaceCount = -1, Ub._noaFaceMaterial = null;
      const Ab = bb.mD;
      Ab && 1 === Ab.length && (Ab[0].indexStart = 0, Ab[0].indexCount = bb.getTotalIndices())
    }

    function Yb(bb, ab) {
      if (ab) {
        Tb++;
        for (const ab of bb) {
          const bb = ab._noaFaceGroups;
          bb && Eb(ab, bb)
        }
      } else Tb = Math.max(0, Tb - 1)
    }

    function Bb(bb, ab, Ub) {
      let Mb = -1,
        Tb = 0;
      for (let Eb = 0; Eb < Ab.e; Eb++) {
        const Ub = bb[Eb],
          Yb = bb[Eb + 1];
        Yb > Ub && ab & 1 << Ab.d[Eb] && (Mb < 0 && (Mb = Ub), Tb = Yb)
      }
      return Mb < 0 ? (Ub[0] = 0, Ub[1] = 0, 0) : (Ub[0] = Mb, Ub[1] = Tb - Mb, Tb - Mb)
    }
    class eb {
      constructor(bb, ab) {
        this.Mj = bb, this.engine = ab, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(bb, ab) {
        if (!ab) return;
        const Ub = ab.getProjectionMatrix().m,
          Eb = 0 === Tb && 0 === Ub[15],
          Yb = ab.globalPosition,
          {
            engine: eb
          } = this,
          vb = Eb ? (0, Mb.d)(Ub, eb.getRenderWidth(), eb.getRenderHeight()) : 0;
        Yb.x === this.eyeX && Yb.y === this.eyeY && Yb.z === this.eyeZ && vb === this.focalPx && Eb === this.culling || (this.epoch++, this.eyeX = Yb.x, this.eyeY = Yb.y, this.eyeZ = Yb.z, this.focalPx = vb, this.culling = Eb);
        const {
          epoch: Lb,
          range: Pb
        } = this, Xb = this.Mj / 2, jb = Xb * Math.sqrt(3), Rb = bb.data, kb = bb.length;
        let yb = 0;
        for (let Tb = 0; Tb < kb; Tb++) {
          const bb = Rb[Tb],
            ab = bb._noaFaceGroups;
          if (ab && (bb._noaFaceEpoch !== Lb || bb._noaFaceMaterial !== bb.material)) {
            bb._noaFaceEpoch = Lb, bb._noaFaceMaterial = bb.material;
            const Ub = bb.mD,
              Tb = Ub && 1 === Ub.length ? Ub[0] : null;
            let eb = -1;
            if (Eb && Tb && (0, Ab.l)(bb.material)) {
              const Ub = bb.position,
                Ab = Yb.x - Ub.x,
                Tb = Yb.y - Ub.y,
                Eb = Yb.z - Ub.z,
                Bb = Ab - Xb,
                Lb = Tb - Xb,
                Pb = Eb - Xb,
                Rb = Math.sqrt(Bb * Bb + Lb * Lb + Pb * Pb) + jb;
              eb = (0, Mb.m)(ab, Ab, Tb, Eb, (0, Mb.h)(Rb, vb))
            }
            if (Tb && eb !== bb._noaFaceMask) {
              bb._noaFaceMask = eb;
              let Ub = 0,
                Mb = ab[Ab.e]; - 1 !== eb && (Mb = Bb(ab, eb, Pb), Ub = Pb[0]), bb._noaFaceCount = Mb, Tb.indexStart = 6 * Ub, Tb.indexCount = 6 * Mb, Tb.setBoundingInfo(bb.DH())
            }
          }
          ab && 0 === bb._noaFaceCount || (Rb[yb++] = bb)
        }
        bb.length = yb
      }
    }
  },
  36867: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Bb,
      f: () => Yb
    });
    const Ab = new WeakSet;
    let Mb = 0;
    const Tb = new Set;

    function Eb(bb, ab) {
      bb._data = ab
    }

    function Yb(bb) {
      var ab, Ub;
      (null !== (ab = null === (Ub = bb.getBuffer()) || void 0 === Ub ? void 0 : Ub.PL) && void 0 !== ab ? ab : 0) > 0 && (Ab.add(bb), 0 === Mb ? Eb(bb, null) : Tb.add(bb))
    }

    function Bb(bb) {
      Mb++;
      for (const Ub of function(bb) {
          const ab = new Set;
          for (const Mb of bb) {
            const bb = Mb.geometry;
            for (const Mb of Object.values(null !== (Ub = null === bb || void 0 === bb ? void 0 : bb.getVertexBuffers()) && void 0 !== Ub ? Ub : {})) {
              var Ub;
              const bb = Mb.getWrapperBuffer();
              Ab.has(bb) && ab.add(bb)
            }
          }
          return ab
        }(bb)) Ub.getData() || eb(Ub), Tb.add(Ub);
      let ab = !0;
      return () => {
        if (ab && (ab = !1, Mb--, 0 === Mb)) {
          for (const bb of Tb) Eb(bb, null);
          Tb.clear()
        }
      }
    }

    function eb(bb) {
      const ab = bb.getBuffer();
      if (!ab || !(ab.PL > 0)) return;
      const Ub = bb._engine,
        Ab = new Uint8Array(ab.PL);
      Ub.bindArrayBuffer(ab), Ub._gl.getBufferSubData(Ub._gl.ARRAY_BUFFER, 0, Ab), Ub._resetVertexBufferBinding(), Eb(bb, Ab)
    }
  },
  36881: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Eb,
      e: () => Tb,
      g: () => Bb,
      h: () => Ab,
      i: () => Yb,
      k: () => Mb,
      l: () => eb
    });
    const Ab = 6,
      Mb = [0, 2, 4, 1, 3, 5, 0, 2],
      Tb = 6,
      Eb = [1, 0, 3, 2, 5, 4];
    for (let vb = Tb; vb < Mb.length; vb++)
      if (Mb[vb] !== Mb[vb - Tb]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const Yb = Mb.length + 1,
      Bb = (() => {
        const bb = [];
        for (let ab = 0; ab < Tb; ab++) bb[Mb[ab]] = ab;
        return bb
      })();

    function eb(bb) {
      return !!bb && bb.backFaceCulling && (0 === bb.transparencyMode || 1 === bb.transparencyMode)
    }
  },
  36887: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Yb,
      h: () => Bb,
      i: () => vb,
      m: () => eb,
      n: () => jb
    });
    var Ab = Ub(36881);
    const Mb = 1 / 16,
      Tb = 1 / 64,
      Eb = 2048;
    Ab.h;

    function Yb(bb, ab, Ub) {
      return Math.min(Math.abs(bb[0] * ab), Math.abs(bb[5] * Ub)) / 2
    }

    function Bb(bb, ab) {
      return Mb + Tb * bb * bb / ab
    }

    function eb(bb, ab, Ub, Mb, Tb) {
      const Eb = Ab.i;
      return vb(bb[Eb], bb[Eb + 1], bb[Eb + 2], bb[Eb + 3], bb[Eb + 4], bb[Eb + 5], ab, Ub, Mb, Tb)
    }

    function vb(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb) {
      return (Eb <= bb - eb ? 0 : 1) | (Eb >= ab + eb ? 0 : 2) | (Yb <= Ub - eb ? 0 : 4) | (Yb >= Ab + eb ? 0 : 8) | (Bb <= Mb - eb ? 0 : 16) | (Bb >= Tb + eb ? 0 : 32)
    }
    const Lb = (() => {
        const bb = [];
        for (let ab = 0; ab < Ab.k.length; ab++) {
          let Ub = 0;
          for (let Mb = ab + 1; Mb <= Ab.k.length; Mb++) {
            const Tb = 1 << Ab.k[Mb - 1];
            if (Ub & Tb) break;
            Ub |= Tb, bb.push({
              start: ab,
              end: Mb,
              bT: Ub
            })
          }
        }
        return bb
      })(),
      Pb = [];

    function Xb(bb, ab) {
      const Ub = Ab.g[ab];
      return bb[Ub + 1] - bb[Ub]
    }

    function jb(bb, ab, Ub) {
      let Mb = 0;
      for (let Eb = 0; Eb < Ab.h; Eb++) Xb(bb, Eb) > 0 && (Mb |= 1 << Eb);
      if (0 === (ab &= Mb)) return 0;
      if (ab === Mb) return Ub[0] = 0, Ub[1] = bb[Ab.e], 1;
      let Tb = null,
        Yb = 1 / 0;
      for (const eb of function(bb) {
          let ab = Pb[bb];
          if (ab) return ab;
          const Ub = new Map,
            Ab = (bb, ab) => {
              const Ab = 4 * bb + ab.length / 2;
              Ub.has(Ab) || Ub.set(Ab, {
                bT: bb,
                windows: ab
              })
            };
          for (const Tb of Lb)
            if ((Tb.bT & bb) === bb && Ab(Tb.bT, [Tb.start, Tb.end]), 0 !== (Tb.bT & bb))
              for (const ab of Lb) ab.start < Tb.end || 0 !== (Tb.bT & ab.bT) || 0 === (ab.bT & bb) || ((Tb.bT | ab.bT) & bb) !== bb || Ab(Tb.bT | ab.bT, [Tb.start, Tb.end, ab.start, ab.end]);
          const Mb = [...Ub.values()];
          return ab = Mb.filter((bb => !Mb.some((ab => ab !== bb && (ab.bT & bb.bT) === ab.bT && ab.windows.length <= bb.windows.length)))), Pb[bb] = ab, ab
        }(ab)) {
        let Ub = (eb.windows.length / 2 - 1) * Eb;
        const Bb = eb.bT & ~ab & Mb;
        for (let ab = 0; ab < Ab.h; ab++) Bb & 1 << ab && (Ub += Xb(bb, ab));
        Ub < Yb && (Tb = eb, Yb = Ub)
      }
      const Bb = Tb.windows;
      for (let Ab = 0; Ab < Bb.length; Ab += 2) {
        const ab = bb[Bb[Ab]];
        Ub[Ab] = ab, Ub[Ab + 1] = bb[Bb[Ab + 1]] - ab
      }
      return Bb.length / 2
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);