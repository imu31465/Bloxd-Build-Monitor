export const id = 231;
export const ids = [231];
export const modules = {
  40506: (bb, ub, hb) => {
    hb.d(ub, {
      noaDevTools: () => Hb
    });
    var Bb = hb(37192),
      Ob = hb(37180),
      Gb = hb(2560),
      Ub = hb(1622);

    function Lb(bb) {
      const {
        xX: ub
      } = bb, hb = ub.engine, Bb = {
        width: hb.getRenderWidth(),
        height: hb.getRenderHeight()
      };
      return {
        canvas: hb.getRenderingCanvas(),
        maxTextureSize: hb.getCaps().maxTextureSize,
        drawing: () => !bb.DW,
        resize: (bb, ub) => {
          hb.setSize(bb, ub)
        },
        restoreSize: () => {
          hb.setSize(Bb.width, Bb.height), ub.resize()
        },
        onFrameDrawn: ub => (bb.on("afterRender", ub), () => {
          bb.off("afterRender", ub)
        })
      }
    }
    var Yb = hb(40474),
      Sb = hb(8972);

    function ab(bb, ub) {
      let {
        width: Sb,
        height: ab,
        colouring: Hb
      } = ub;
      const wb = "normals" === Hb,
        Zb = "depth" === Hb;
      return new Promise((ub => {
        try {
          const Xb = (0, Gb.g)();
          if (Xb.xX.zX) return "screenshot" !== bb || null !== Hb ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void ub()) : void(0, Yb.b)(Lb(Xb), Sb, ab).finally(ub);
          const pb = Xb.xX.engine,
            ob = Xb.xX.ZN(),
            Ab = Sb,
            lb = ab;
          Promise.all([Promise.all([hb.e(246), hb.e(247), hb.e(228)]).then((() => hb(60578))), Promise.all([hb.e(227), hb.e(226), hb.e(246), hb.e(247), hb.e(244), hb.e(248), hb.e(251), hb.e(302), hb.e(232)]).then((() => hb(60585))), Promise.all([hb.e(227), hb.e(226), hb.e(246), hb.e(247), hb.e(244), hb.e(254), hb.e(248), hb.e(256), hb.e(234)]).then((() => hb(60594))), hb.e(345).then((() => hb(60600))), Promise.all([hb.e(226), hb.e(222)]).then((() => hb(36720))), hb.e(245).then((() => hb(60605))), hb.e(229).then((() => hb(60608)))]).then((Gb => {
            const {
              CreateScreenshotUsingRenderTarget: Lb
            } = Gb[1], {
              ShaderMaterial: Yb
            } = Gb[2], {
              ShaderLanguage: Sb
            } = Gb[3], {
              YX: ab
            } = Gb[4], {
              registerDevtoolsShader: Hb
            } = Gb[6], Xb = Sb.GLSL, Kb = new Map, Wb = ob.meshes.filter((bb => bb.material));
            let Cb = !1,
              db = null;

            function rb() {
              var bb;
              Cb && (Cb = !1, (0, Bb.g)(ob.meshes, !1)), null === (bb = db) || void 0 === bb || bb(), db = null, Wb.forEach((bb => {
                const ub = Kb.get(bb);
                ub && (bb.material = ub)
              }))
            }
            if (wb) {
              const bb = [],
                ub = [];
              Wb.forEach((hb => {
                const Bb = hb.name.toLowerCase(),
                  Ob = hb.XM().boundingBox.center,
                  Gb = ob.activeCamera.position.subtract(Ob).length();
                Bb.includes("sky") || Bb.includes("background") || Bb.includes("environment") || Gb > 1e3 ? ub.push(hb) : bb.push(hb)
              })), Hb("devtoolsNormal", Xb);
              const hb = new Yb("normalMaterial", ob, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: Xb
              });
              Hb("devtoolsWhite", Xb);
              const Bb = new Yb("whiteMaterial", ob, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: Xb
              });
              bb.forEach((bb => {
                Kb.set(bb, bb.material), bb.material = hb
              })), ub.forEach((bb => {
                Kb.set(bb, bb.material), bb.material = Bb
              }))
            } else if (Zb) {
              Hb("devtoolsDepth", Xb);
              const bb = ob.activeCamera.position;
              let ub = 0,
                hb = 1 / 0;
              Wb.forEach((Bb => {
                const Ob = Bb.name.toLowerCase();
                if (Ob.includes("sky") || Ob.includes("background") || Ob.includes("environment")) return;
                const Gb = Bb.XM().boundingBox.center,
                  Ub = ab.TransformCoordinates(Gb, Bb.getWorldMatrix()),
                  Lb = bb.subtract(Ub).length();
                Lb > 1e3 || (ub = Math.max(ub, Lb), hb = Math.min(hb, Lb))
              }));
              const Bb = ub - hb;
              ub += .1 * Bb, hb = Math.max(0, hb - .1 * Bb), console.log(`Depth range: min=${hb.toFixed(2)}, max=${ub.toFixed(2)}, range=${Bb.toFixed(2)}`), Bb < 1 && (ub = hb + 10);
              const Ob = new Yb("depthMaterial", ob, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: Xb
              });
              Ob.setVector3("cameraPosition", bb), Ob.setFloat("maxDepth", ub), Ob.setFloat("minDepth", hb), Wb.forEach((bb => {
                Kb.set(bb, bb.material), bb.material = Ob
              }))
            }
            if ((0, Bb.g)(ob.meshes, !0), Cb = !0, "glb" === bb && (db = (0, Ob.c)(ob.meshes)), "screenshot" === bb) {
              let bb = `bloxd-screenshot-${Ab}x${lb}-${Date.now()}.png`;
              wb ? bb = `bloxd-screenshot-normals-${Ab}x${lb}-${Date.now()}.png` : Zb && (bb = `bloxd-screenshot-depth-${Ab}x${lb}-${Date.now()}.png`), Lb(pb, ob.activeCamera, {
                width: Ab,
                height: lb
              }, (function(hb) {
                rb(), fetch(hb).then((function(bb) {
                  return bb.blob()
                })).then((function(hb) {
                  (0, Ub.downloadBlob)(hb, bb), ub()
                })).catch((function(bb) {
                  console.error("Error processing screenshot:", bb), ub()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), rb(), ub()
              }))
            } else {
              let bb = "Xp";
              wb ? bb = "scene-normals" : Zb && (bb = "scene-depth"), wb || Zb ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: bb
                  } = await Promise.all([hb.e(227), hb.e(226), hb.e(246), hb.e(247), hb.e(244), hb.e(254), hb.e(253), hb.e(233)]).then((() => hb(39705))), {
                    Color3: ub
                  } = await Promise.all([hb.e(227), hb.e(230)]).then((() => hb(36889))), Bb = [], Ob = [];
                  if (Wb.forEach((bb => {
                      const ub = bb.name.toLowerCase(),
                        hb = bb.XM().boundingBox.center,
                        Gb = ob.activeCamera.position.subtract(hb).length();
                      ub.includes("sky") || ub.includes("background") || ub.includes("environment") || Gb > 1e3 ? Ob.push(bb) : Bb.push(bb)
                    })), wb) Bb.forEach(((hb, Bb) => {
                    const Ob = hb.getVerticesData("normal");
                    if (Ob) {
                      const Gb = [];
                      for (let bb = 0; bb < Ob.length; bb += 3) {
                        const ub = Math.abs(Ob[bb]),
                          hb = Math.abs(Ob[bb + 1]),
                          Bb = Math.abs(Ob[bb + 2]);
                        Gb.push(ub, hb, Bb, 1)
                      }
                      hb.setVerticesData("color", Gb);
                      const Ub = new bb(`vertexColorMat_${Bb}`, ob);
                      Ub.disableLighting = !0, Ub.emissiveColor = new ub(1, 1, 1), Ub.specularColor = new ub(0, 0, 0), hb.material = Ub
                    }
                  })), Ob.forEach(((hb, Bb) => {
                    const Ob = hb.getVerticesData("position");
                    if (Ob) {
                      const Gb = [],
                        Ub = Ob.length / 3;
                      for (let bb = 0; bb < Ub; bb++) Gb.push(1, 1, 1, 1);
                      hb.setVerticesData("color", Gb);
                      const Lb = new bb(`whiteMat_${Bb}`, ob);
                      Lb.disableLighting = !0, Lb.emissiveColor = new ub(1, 1, 1), Lb.specularColor = new ub(0, 0, 0), hb.material = Lb
                    }
                  }));
                  else if (Zb) {
                    const hb = ob.activeCamera.position;
                    let Ob = 0,
                      Gb = 1 / 0;
                    Bb.forEach((bb => {
                      const ub = bb.XM().boundingBox.center,
                        Bb = ab.TransformCoordinates(ub, bb.getWorldMatrix()),
                        Ub = hb.subtract(Bb).length();
                      Ob = Math.max(Ob, Ub), Gb = Math.min(Gb, Ub)
                    }));
                    const Ub = Ob - Gb;
                    Ob += .1 * Ub, Gb = Math.max(0, Gb - .1 * Ub), Ub < 1 && (Ob = Gb + 10), Wb.forEach(((Bb, Ub) => {
                      const Lb = Bb.name.toLowerCase(),
                        Yb = Bb.XM().boundingBox.center,
                        Sb = ab.TransformCoordinates(Yb, Bb.getWorldMatrix()),
                        Hb = hb.subtract(Sb).length();
                      if (!(Lb.includes("sky") || Lb.includes("background") || Lb.includes("environment") || Hb > 1e3)) {
                        const hb = 1 - Math.min(Math.max((Hb - Gb) / (Ob - Gb), 0), 1),
                          Lb = new bb(`depthMat_${Ub}`, ob);
                        Lb.diffuseColor = new ub(hb, hb, hb), Lb.specularColor = new ub(0, 0, 0), Bb.material = Lb
                      }
                    }))
                  }
                })().then((() => Promise.all([hb.e(227), hb.e(226), hb.e(246), hb.e(247), hb.e(244), hb.e(254), hb.e(248), hb.e(253), hb.e(251), hb.e(243), hb.e(256), hb.e(265), hb.e(302), hb.e(238), hb.e(255), hb.e(225)]).then((() => hb(60612))))).then((ub => ub.GLTF2Export.GLBAsync(ob, bb))).then((bb => {
                  rb(), bb.downloadFiles(), ub()
                })).catch((bb => {
                  console.error("Error exporting GLB:", bb), rb(), ub()
                }))
              }), 100) : Promise.all([hb.e(227), hb.e(226), hb.e(246), hb.e(247), hb.e(244), hb.e(254), hb.e(248), hb.e(253), hb.e(251), hb.e(243), hb.e(256), hb.e(265), hb.e(302), hb.e(238), hb.e(255), hb.e(225)]).then((() => hb(60612))).then((hb => {
                hb.GLTF2Export.GLBAsync(ob, bb).then((bb => {
                  rb(), bb.downloadFiles(), ub()
                })).catch((bb => {
                  console.error("Error exporting GLB:", bb), rb(), ub()
                }))
              })).catch((bb => {
                console.error("Error importing serializers:", bb), rb(), ub()
              }))
            }
          })).catch((bb => {
            console.error("Error downloading the scene:", bb), ub()
          }))
        } catch (Xb) {
          console.error("Error taking screenshot:", Xb), ub()
        }
      }))
    }
    const Hb = new class {
      constructor() {
        this.tools = Sb.ALL_DEV_TOOLS
      }
      downloadScene(bb, ub) {
        return ab(bb, ub)
      }
      async setAmbientLightIntensity(bb) {
        const {
          Color3: ub
        } = await Promise.all([hb.e(227), hb.e(230)]).then((() => hb(36889)));
        (0, Gb.g)().xX.ZN().ambientColor = ub.FromArray([bb, bb, bb])
      }
    }
  },
  40474: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Yb
    });
    var Bb = hb(1636);
    const Ob = 33177600,
      Gb = 3e4;
    let Ub = !1;

    function Lb(bb, ub, hb) {
      if (!bb.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (Ub) return Promise.reject(new Error("A screenshot is already being taken"));
      Ub = !0;
      const Bb = function(bb, ub, hb) {
        const Bb = Math.max(1, bb),
          Gb = Math.max(1, ub),
          Ub = Math.min(1, hb / Math.max(Bb, Gb), Math.sqrt(Ob / (Bb * Gb)));
        return {
          width: Math.max(1, Math.floor(Bb * Ub)),
          height: Math.max(1, Math.floor(Gb * Ub))
        }
      }(ub, hb, bb.maxTextureSize);
      return bb.resize(Bb.width, Bb.height), new Promise(((ub, hb) => {
        let Bb, Ob = 2,
          Lb = null;
        const Yb = () => {
          var ub;
          Ub = !1, null === (ub = Lb) || void 0 === ub || ub(), clearTimeout(Bb), bb.restoreSize()
        };
        Bb = setTimeout((() => {
          Yb(), hb(new Error("No frame was drawn to capture"))
        }), Gb), Lb = bb.onFrameDrawn((() => {
          if (Ob--, Ob > 0) return;
          const {
            canvas: Bb
          } = bb, Gb = {
            width: Bb.width,
            height: Bb.height
          };
          try {
            Bb.toBlob((bb => {
              bb ? ub({
                blob: bb,
                ...Gb
              }) : hb(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (Ub) {
            hb(Ub)
          } finally {
            Yb()
          }
        }))
      }))
    }
    async function Yb(bb, ub, hb) {
      try {
        const Ob = await Lb(bb, ub, hb);
        (0, Bb.e)(Ob.blob, `bloxd-screenshot-${Ob.width}x${Ob.height}-${Date.now()}.png`)
      } catch (Ob) {
        console.error("Error taking screenshot:", Ob)
      }
    }
  },
  37192: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Sb,
      g: () => Lb,
      k: () => Ub
    });
    var Bb = hb(37189),
      Ob = hb(37197);
    let Gb = 0;

    function Ub(bb, ub) {
      const hb = bb;
      hb._noaFaceGroups = null !== ub && void 0 !== ub ? ub : null, hb._noaFaceEpoch = -1, hb._noaFaceMask = -1, hb._noaFaceCount = -1, hb._noaFaceMaterial = null;
      const Bb = bb.FW;
      Bb && 1 === Bb.length && (Bb[0].indexStart = 0, Bb[0].indexCount = bb.getTotalIndices())
    }

    function Lb(bb, ub) {
      if (ub) {
        Gb++;
        for (const ub of bb) {
          const bb = ub._noaFaceGroups;
          bb && Ub(ub, bb)
        }
      } else Gb = Math.max(0, Gb - 1)
    }

    function Yb(bb, ub, hb) {
      let Ob = -1,
        Gb = 0;
      for (let Ub = 0; Ub < Bb.f; Ub++) {
        const hb = bb[Ub],
          Lb = bb[Ub + 1];
        Lb > hb && ub & 1 << Bb.c[Ub] && (Ob < 0 && (Ob = hb), Gb = Lb)
      }
      return Ob < 0 ? (hb[0] = 0, hb[1] = 0, 0) : (hb[0] = Ob, hb[1] = Gb - Ob, Gb - Ob)
    }
    class Sb {
      constructor(bb, ub) {
        this.bX = bb, this.engine = ub, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(bb, ub) {
        if (!ub) return;
        const hb = ub.getProjectionMatrix().m,
          Ub = 0 === Gb && 0 === hb[15],
          Lb = ub.globalPosition,
          {
            engine: Sb
          } = this,
          ab = Ub ? (0, Ob.b)(hb, Sb.getRenderWidth(), Sb.getRenderHeight()) : 0;
        Lb.x === this.eyeX && Lb.y === this.eyeY && Lb.z === this.eyeZ && ab === this.focalPx && Ub === this.culling || (this.epoch++, this.eyeX = Lb.x, this.eyeY = Lb.y, this.eyeZ = Lb.z, this.focalPx = ab, this.culling = Ub);
        const {
          epoch: Hb,
          range: wb
        } = this, Zb = this.bX / 2, Xb = Zb * Math.sqrt(3), pb = bb.data, ob = bb.length;
        let Ab = 0;
        for (let Gb = 0; Gb < ob; Gb++) {
          const bb = pb[Gb],
            ub = bb._noaFaceGroups;
          if (ub && (bb._noaFaceEpoch !== Hb || bb._noaFaceMaterial !== bb.material)) {
            bb._noaFaceEpoch = Hb, bb._noaFaceMaterial = bb.material;
            const hb = bb.FW,
              Gb = hb && 1 === hb.length ? hb[0] : null;
            let Sb = -1;
            if (Ub && Gb && (0, Bb.p)(bb.material)) {
              const hb = bb.position,
                Bb = Lb.x - hb.x,
                Gb = Lb.y - hb.y,
                Ub = Lb.z - hb.z,
                Yb = Bb - Zb,
                Hb = Gb - Zb,
                wb = Ub - Zb,
                pb = Math.sqrt(Yb * Yb + Hb * Hb + wb * wb) + Xb;
              Sb = (0, Ob.i)(ub, Bb, Gb, Ub, (0, Ob.e)(pb, ab))
            }
            if (Gb && Sb !== bb._noaFaceMask) {
              bb._noaFaceMask = Sb;
              let hb = 0,
                Ob = ub[Bb.f]; - 1 !== Sb && (Ob = Yb(ub, Sb, wb), hb = wb[0]), bb._noaFaceCount = Ob, Gb.indexStart = 6 * hb, Gb.indexCount = 6 * Ob, Gb.setBoundingInfo(bb.XM())
            }
          }
          ub && 0 === bb._noaFaceCount || (pb[Ab++] = bb)
        }
        bb.length = Ab
      }
    }
  },
  37180: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Yb,
      d: () => Lb
    });
    const Bb = new WeakSet;
    let Ob = 0;
    const Gb = new Set;

    function Ub(bb, ub) {
      bb._data = ub
    }

    function Lb(bb) {
      var ub, hb;
      (null !== (ub = null === (hb = bb.getBuffer()) || void 0 === hb ? void 0 : hb.LH) && void 0 !== ub ? ub : 0) > 0 && (Bb.add(bb), 0 === Ob ? Ub(bb, null) : Gb.add(bb))
    }

    function Yb(bb) {
      Ob++;
      for (const hb of function(bb) {
          const ub = new Set;
          for (const Ob of bb) {
            const bb = Ob.geometry;
            for (const Ob of Object.values(null !== (hb = null === bb || void 0 === bb ? void 0 : bb.getVertexBuffers()) && void 0 !== hb ? hb : {})) {
              var hb;
              const bb = Ob.getWrapperBuffer();
              Bb.has(bb) && ub.add(bb)
            }
          }
          return ub
        }(bb)) hb.getData() || Sb(hb), Gb.add(hb);
      let ub = !0;
      return () => {
        if (ub && (ub = !1, Ob--, 0 === Ob)) {
          for (const bb of Gb) Ub(bb, null);
          Gb.clear()
        }
      }
    }

    function Sb(bb) {
      const ub = bb.getBuffer();
      if (!ub || !(ub.LH > 0)) return;
      const hb = bb._engine,
        Bb = new Uint8Array(ub.LH);
      hb.bindArrayBuffer(ub), hb._gl.getBufferSubData(hb._gl.ARRAY_BUFFER, 0, Bb), hb._resetVertexBufferBinding(), Ub(bb, Bb)
    }
  },
  37189: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ub,
      f: () => Gb,
      h: () => Yb,
      i: () => Bb,
      l: () => Lb,
      m: () => Ob,
      p: () => Sb
    });
    const Bb = 6,
      Ob = [0, 2, 4, 1, 3, 5, 0, 2],
      Gb = 6,
      Ub = [1, 0, 3, 2, 5, 4];
    for (let ab = Gb; ab < Ob.length; ab++)
      if (Ob[ab] !== Ob[ab - Gb]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const Lb = Ob.length + 1,
      Yb = (() => {
        const bb = [];
        for (let ub = 0; ub < Gb; ub++) bb[Ob[ub]] = ub;
        return bb
      })();

    function Sb(bb) {
      return !!bb && bb.backFaceCulling && (0 === bb.transparencyMode || 1 === bb.transparencyMode)
    }
  },
  37197: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Lb,
      e: () => Yb,
      h: () => ab,
      i: () => Sb,
      m: () => Xb
    });
    var Bb = hb(37189);
    const Ob = 1 / 16,
      Gb = 1 / 64,
      Ub = 2048;
    Bb.i;

    function Lb(bb, ub, hb) {
      return Math.min(Math.abs(bb[0] * ub), Math.abs(bb[5] * hb)) / 2
    }

    function Yb(bb, ub) {
      return Ob + Gb * bb * bb / ub
    }

    function Sb(bb, ub, hb, Ob, Gb) {
      const Ub = Bb.l;
      return ab(bb[Ub], bb[Ub + 1], bb[Ub + 2], bb[Ub + 3], bb[Ub + 4], bb[Ub + 5], ub, hb, Ob, Gb)
    }

    function ab(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb) {
      return (Ub <= bb - Sb ? 0 : 1) | (Ub >= ub + Sb ? 0 : 2) | (Lb <= hb - Sb ? 0 : 4) | (Lb >= Bb + Sb ? 0 : 8) | (Yb <= Ob - Sb ? 0 : 16) | (Yb >= Gb + Sb ? 0 : 32)
    }
    const Hb = (() => {
        const bb = [];
        for (let ub = 0; ub < Bb.m.length; ub++) {
          let hb = 0;
          for (let Ob = ub + 1; Ob <= Bb.m.length; Ob++) {
            const Gb = 1 << Bb.m[Ob - 1];
            if (hb & Gb) break;
            hb |= Gb, bb.push({
              start: ub,
              end: Ob,
              Wu: hb
            })
          }
        }
        return bb
      })(),
      wb = [];

    function Zb(bb, ub) {
      const hb = Bb.h[ub];
      return bb[hb + 1] - bb[hb]
    }

    function Xb(bb, ub, hb) {
      let Ob = 0;
      for (let Ub = 0; Ub < Bb.i; Ub++) Zb(bb, Ub) > 0 && (Ob |= 1 << Ub);
      if (0 === (ub &= Ob)) return 0;
      if (ub === Ob) return hb[0] = 0, hb[1] = bb[Bb.f], 1;
      let Gb = null,
        Lb = 1 / 0;
      for (const Sb of function(bb) {
          let ub = wb[bb];
          if (ub) return ub;
          const hb = new Map,
            Bb = (bb, ub) => {
              const Bb = 4 * bb + ub.length / 2;
              hb.has(Bb) || hb.set(Bb, {
                Wu: bb,
                windows: ub
              })
            };
          for (const Gb of Hb)
            if ((Gb.Wu & bb) === bb && Bb(Gb.Wu, [Gb.start, Gb.end]), 0 !== (Gb.Wu & bb))
              for (const ub of Hb) ub.start < Gb.end || 0 !== (Gb.Wu & ub.Wu) || 0 === (ub.Wu & bb) || ((Gb.Wu | ub.Wu) & bb) !== bb || Bb(Gb.Wu | ub.Wu, [Gb.start, Gb.end, ub.start, ub.end]);
          const Ob = [...hb.values()];
          return ub = Ob.filter((bb => !Ob.some((ub => ub !== bb && (ub.Wu & bb.Wu) === ub.Wu && ub.windows.length <= bb.windows.length)))), wb[bb] = ub, ub
        }(ub)) {
        let hb = (Sb.windows.length / 2 - 1) * Ub;
        const Yb = Sb.Wu & ~ub & Ob;
        for (let ub = 0; ub < Bb.i; ub++) Yb & 1 << ub && (hb += Zb(bb, ub));
        hb < Lb && (Gb = Sb, Lb = hb)
      }
      const Yb = Gb.windows;
      for (let Bb = 0; Bb < Yb.length; Bb += 2) {
        const ub = bb[Yb[Bb]];
        hb[Bb] = ub, hb[Bb + 1] = bb[Yb[Bb + 1]] - ub
      }
      return Yb.length / 2
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);