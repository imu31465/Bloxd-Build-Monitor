export const id = 264;
export const ids = [264];
export const modules = {
  42066: (BB, OB, GB) => {
    GB.d(OB, {
      noaDevTools: () => PB
    });
    var YB = GB(38146),
      DB = GB(38133),
      QB = GB(3088),
      oB = GB(1822),
      jB = GB(41990);

    function yB(BB) {
      const {
        UP: OB
      } = BB, GB = OB.engine, YB = {
        width: GB.getRenderWidth(),
        height: GB.getRenderHeight()
      };
      return {
        canvas: GB.getRenderingCanvas(),
        maxTextureSize: GB.getCaps().maxTextureSize,
        WP: () => !BB.fP,
        resize: (BB, OB) => {
          GB.setSize(BB, OB)
        },
        restoreSize: () => {
          GB.setSize(YB.width, YB.height), OB.resize()
        },
        onFrameDrawn: GB => {
          const YB = () => {
            OB.fW && GB()
          };
          return BB.on("afterRender", YB), () => {
            BB.off("afterRender", YB)
          }
        }
      }
    }
    var JB = GB(34668);

    function MB(BB, OB) {
      let {
        width: JB,
        height: MB,
        colouring: PB
      } = OB;
      const zB = "normals" === PB,
        lB = "depth" === PB;
      return new Promise((OB => {
        try {
          const pB = (0, QB.g)();
          if (pB.UP.Dq) return "screenshot" !== BB || null !== PB ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void OB()) : void(0, jB.h)(yB(pB), JB, MB).finally(OB);
          const qB = pB.UP.engine,
            ZB = pB.UP.JF(),
            NB = JB,
            RB = MB;
          Promise.all([Promise.all([GB.e(283), GB.e(284), GB.e(260)]).then((() => GB(63864))), Promise.all([GB.e(259), GB.e(258), GB.e(283), GB.e(284), GB.e(281), GB.e(285), GB.e(288), GB.e(620), GB.e(265)]).then((() => GB(63871))), Promise.all([GB.e(259), GB.e(258), GB.e(283), GB.e(284), GB.e(281), GB.e(291), GB.e(285), GB.e(293), GB.e(267)]).then((() => GB(63878))), GB.e(661).then((() => GB(63880))), Promise.all([GB.e(258), GB.e(254)]).then((() => GB(37771))), GB.e(282).then((() => GB(63889))), GB.e(263).then((() => GB(63894)))]).then((QB => {
            const {
              CreateScreenshotUsingRenderTarget: jB
            } = QB[1], {
              ShaderMaterial: yB
            } = QB[2], {
              ShaderLanguage: JB
            } = QB[3], {
              Xp: MB
            } = QB[4], {
              registerDevtoolsShader: PB
            } = QB[6], pB = JB.GLSL, WB = new Map, AB = ZB.meshes.filter((BB => BB.material));
            let VB = !1,
              SB = null;

            function nB() {
              var BB;
              VB && (VB = !1, (0, YB.f)(ZB.meshes, !1)), null === (BB = SB) || void 0 === BB || BB(), SB = null, AB.forEach((BB => {
                const OB = WB.get(BB);
                OB && (BB.material = OB)
              }))
            }
            if (zB) {
              const BB = [],
                OB = [];
              AB.forEach((GB => {
                const YB = GB.name.toLowerCase(),
                  DB = GB.Gw().boundingBox.center,
                  QB = ZB.activeCamera.position.subtract(DB).length();
                YB.includes("sky") || YB.includes("background") || YB.includes("environment") || QB > 1e3 ? OB.push(GB) : BB.push(GB)
              })), PB("devtoolsNormal", pB);
              const GB = new yB("normalMaterial", ZB, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: pB
              });
              PB("devtoolsWhite", pB);
              const YB = new yB("whiteMaterial", ZB, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: pB
              });
              BB.forEach((BB => {
                WB.set(BB, BB.material), BB.material = GB
              })), OB.forEach((BB => {
                WB.set(BB, BB.material), BB.material = YB
              }))
            } else if (lB) {
              PB("devtoolsDepth", pB);
              const BB = ZB.activeCamera.position;
              let OB = 0,
                GB = 1 / 0;
              AB.forEach((YB => {
                const DB = YB.name.toLowerCase();
                if (DB.includes("sky") || DB.includes("background") || DB.includes("environment")) return;
                const QB = YB.Gw().boundingBox.center,
                  oB = MB.TransformCoordinates(QB, YB.getWorldMatrix()),
                  jB = BB.subtract(oB).length();
                jB > 1e3 || (OB = Math.max(OB, jB), GB = Math.min(GB, jB))
              }));
              const YB = OB - GB;
              OB += .1 * YB, GB = Math.max(0, GB - .1 * YB), console.log(`Depth range: min=${GB.toFixed(2)}, max=${OB.toFixed(2)}, range=${YB.toFixed(2)}`), YB < 1 && (OB = GB + 10);
              const DB = new yB("depthMaterial", ZB, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: pB
              });
              DB.setVector3("cameraPosition", BB), DB.setFloat("maxDepth", OB), DB.setFloat("minDepth", GB), AB.forEach((BB => {
                WB.set(BB, BB.material), BB.material = DB
              }))
            }
            if ((0, YB.f)(ZB.meshes, !0), VB = !0, "glb" === BB && (SB = (0, DB.e)(ZB.meshes)), "screenshot" === BB) {
              let BB = `bloxd-screenshot-${NB}x${RB}-${Date.now()}.png`;
              zB ? BB = `bloxd-screenshot-normals-${NB}x${RB}-${Date.now()}.png` : lB && (BB = `bloxd-screenshot-depth-${NB}x${RB}-${Date.now()}.png`), jB(qB, ZB.activeCamera, {
                width: NB,
                height: RB
              }, (function(GB) {
                nB(), fetch(GB).then((function(BB) {
                  return BB.blob()
                })).then((function(GB) {
                  (0, oB.downloadBlob)(GB, BB), OB()
                })).catch((function(BB) {
                  console.error("Error processing screenshot:", BB), OB()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), nB(), OB()
              }))
            } else {
              let BB = "eq";
              zB ? BB = "scene-normals" : lB && (BB = "scene-depth"), zB || lB ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: BB
                  } = await Promise.all([GB.e(259), GB.e(258), GB.e(283), GB.e(284), GB.e(281), GB.e(291), GB.e(290), GB.e(266)]).then((() => GB(41258))), {
                    Color3: OB
                  } = await Promise.all([GB.e(259), GB.e(262)]).then((() => GB(37885))), YB = [], DB = [];
                  if (AB.forEach((BB => {
                      const OB = BB.name.toLowerCase(),
                        GB = BB.Gw().boundingBox.center,
                        QB = ZB.activeCamera.position.subtract(GB).length();
                      OB.includes("sky") || OB.includes("background") || OB.includes("environment") || QB > 1e3 ? DB.push(BB) : YB.push(BB)
                    })), zB) YB.forEach(((GB, YB) => {
                    const DB = GB.getVerticesData("normal");
                    if (DB) {
                      const QB = [];
                      for (let BB = 0; BB < DB.length; BB += 3) {
                        const OB = Math.abs(DB[BB]),
                          GB = Math.abs(DB[BB + 1]),
                          YB = Math.abs(DB[BB + 2]);
                        QB.push(OB, GB, YB, 1)
                      }
                      GB.setVerticesData("color", QB);
                      const oB = new BB(`vertexColorMat_${YB}`, ZB);
                      oB.disableLighting = !0, oB.emissiveColor = new OB(1, 1, 1), oB.specularColor = new OB(0, 0, 0), GB.material = oB
                    }
                  })), DB.forEach(((GB, YB) => {
                    const DB = GB.getVerticesData("position");
                    if (DB) {
                      const QB = [],
                        oB = DB.length / 3;
                      for (let BB = 0; BB < oB; BB++) QB.push(1, 1, 1, 1);
                      GB.setVerticesData("color", QB);
                      const jB = new BB(`whiteMat_${YB}`, ZB);
                      jB.disableLighting = !0, jB.emissiveColor = new OB(1, 1, 1), jB.specularColor = new OB(0, 0, 0), GB.material = jB
                    }
                  }));
                  else if (lB) {
                    const GB = ZB.activeCamera.position;
                    let DB = 0,
                      QB = 1 / 0;
                    YB.forEach((BB => {
                      const OB = BB.Gw().boundingBox.center,
                        YB = MB.TransformCoordinates(OB, BB.getWorldMatrix()),
                        oB = GB.subtract(YB).length();
                      DB = Math.max(DB, oB), QB = Math.min(QB, oB)
                    }));
                    const oB = DB - QB;
                    DB += .1 * oB, QB = Math.max(0, QB - .1 * oB), oB < 1 && (DB = QB + 10), AB.forEach(((YB, oB) => {
                      const jB = YB.name.toLowerCase(),
                        yB = YB.Gw().boundingBox.center,
                        JB = MB.TransformCoordinates(yB, YB.getWorldMatrix()),
                        PB = GB.subtract(JB).length();
                      if (!(jB.includes("sky") || jB.includes("background") || jB.includes("environment") || PB > 1e3)) {
                        const GB = 1 - Math.min(Math.max((PB - QB) / (DB - QB), 0), 1),
                          jB = new BB(`depthMat_${oB}`, ZB);
                        jB.diffuseColor = new OB(GB, GB, GB), jB.specularColor = new OB(0, 0, 0), YB.material = jB
                      }
                    }))
                  }
                })().then((() => Promise.all([GB.e(259), GB.e(258), GB.e(283), GB.e(284), GB.e(281), GB.e(291), GB.e(285), GB.e(290), GB.e(288), GB.e(280), GB.e(293), GB.e(303), GB.e(620), GB.e(272), GB.e(292), GB.e(257)]).then((() => GB(63902))))).then((OB => OB.GLTF2Export.GLBAsync(ZB, BB))).then((BB => {
                  nB(), BB.downloadFiles(), OB()
                })).catch((BB => {
                  console.error("Error exporting GLB:", BB), nB(), OB()
                }))
              }), 100) : Promise.all([GB.e(259), GB.e(258), GB.e(283), GB.e(284), GB.e(281), GB.e(291), GB.e(285), GB.e(290), GB.e(288), GB.e(280), GB.e(293), GB.e(303), GB.e(620), GB.e(272), GB.e(292), GB.e(257)]).then((() => GB(63902))).then((GB => {
                GB.GLTF2Export.GLBAsync(ZB, BB).then((BB => {
                  nB(), BB.downloadFiles(), OB()
                })).catch((BB => {
                  console.error("Error exporting GLB:", BB), nB(), OB()
                }))
              })).catch((BB => {
                console.error("Error importing serializers:", BB), nB(), OB()
              }))
            }
          })).catch((BB => {
            console.error("Error downloading the scene:", BB), OB()
          }))
        } catch (pB) {
          console.error("Error taking screenshot:", pB), OB()
        }
      }))
    }
    const PB = new class {
      constructor() {
        this.tools = JB.ALL_DEV_TOOLS
      }
      downloadScene(BB, OB) {
        return MB(BB, OB)
      }
      async setAmbientLightIntensity(BB) {
        const {
          Color3: OB
        } = await Promise.all([GB.e(259), GB.e(262)]).then((() => GB(37885)));
        (0, QB.g)().UP.JF().ambientColor = OB.FromArray([BB, BB, BB])
      }
      capturePhoto(BB, OB, GB) {
        return function(BB, OB, GB, YB) {
          return (0, jB.e)(yB(BB), OB, GB, YB)
        }((0, QB.g)(), BB, OB, GB)
      }
    }
  },
  41990: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => jB,
      h: () => yB
    });
    var YB = GB(1834);
    const DB = 33177600,
      QB = 3e4;
    let oB = !1;

    function jB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: jB = 1,
        type: yB = "image/png",
        quality: JB
      } = YB;
      return BB.WP() ? oB ? Promise.reject(new Error("A screenshot is already being taken")) : (oB = !0, new Promise(((YB, MB) => {
        let PB, zB = 2,
          lB = null;
        const pB = () => {
          var OB;
          oB = !1, null === (OB = lB) || void 0 === OB || OB(), clearTimeout(PB);
          try {
            BB.restoreSize()
          } catch (GB) {
            console.error("A screenshot couldn't size the canvas back", GB)
          }
        };
        PB = setTimeout((() => {
          pB(), MB(new Error("No frame was drawn to capture"))
        }), QB);
        try {
          const YB = function(BB, OB, GB) {
            const YB = Math.max(1, BB),
              QB = Math.max(1, OB),
              oB = Math.min(1, GB / Math.max(YB, QB), Math.sqrt(DB / (YB * QB)));
            return {
              width: Math.max(1, Math.floor(YB * oB)),
              height: Math.max(1, Math.floor(QB * oB))
            }
          }(OB, GB, BB.maxTextureSize);
          BB.resize(YB.width, YB.height, jB * YB.width / Math.max(1, OB))
        } catch (qB) {
          return pB(), void MB(qB)
        }
        lB = BB.onFrameDrawn((() => {
          if (zB--, zB > 0) return;
          const {
            canvas: OB
          } = BB, GB = {
            width: OB.width,
            height: OB.height
          };
          try {
            OB.toBlob((BB => {
              BB ? YB({
                blob: BB,
                ...GB
              }) : MB(new Error("The canvas gave no image"))
            }), yB, JB)
          } catch (qB) {
            MB(qB)
          } finally {
            pB()
          }
        }))
      }))) : Promise.reject(new Error("Screenshots need a game to be running"))
    }
    async function yB(BB, OB, GB) {
      try {
        const DB = await jB(BB, OB, GB);
        (0, YB.c)(DB.blob, `bloxd-screenshot-${DB.width}x${DB.height}-${Date.now()}.png`)
      } catch (DB) {
        console.error("Error taking screenshot:", DB)
      }
    }
  },
  38146: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => JB,
      f: () => jB,
      i: () => oB
    });
    var YB = GB(38140),
      DB = GB(38151);
    let QB = 0;

    function oB(BB, OB) {
      const GB = BB;
      GB._noaFaceGroups = null !== OB && void 0 !== OB ? OB : null, GB._noaFaceEpoch = -1, GB._noaFaceMask = -1, GB._noaFaceCount = -1, GB._noaFaceMaterial = null;
      const YB = BB.iW;
      YB && 1 === YB.length && (YB[0].indexStart = 0, YB[0].indexCount = BB.getTotalIndices())
    }

    function jB(BB, OB) {
      if (OB) {
        QB++;
        for (const OB of BB) {
          const BB = OB._noaFaceGroups;
          BB && oB(OB, BB)
        }
      } else QB = Math.max(0, QB - 1)
    }

    function yB(BB, OB, GB) {
      let DB = -1,
        QB = 0;
      for (let oB = 0; oB < YB.f; oB++) {
        const GB = BB[oB],
          jB = BB[oB + 1];
        jB > GB && OB & 1 << YB.e[oB] && (DB < 0 && (DB = GB), QB = jB)
      }
      return DB < 0 ? (GB[0] = 0, GB[1] = 0, 0) : (GB[0] = DB, GB[1] = QB - DB, QB - DB)
    }
    class JB {
      constructor(BB, OB) {
        this.pP = BB, this.engine = OB, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(BB, OB) {
        if (!OB) return;
        const GB = OB.getProjectionMatrix().m,
          oB = 0 === QB && 0 === GB[15],
          jB = OB.globalPosition,
          {
            engine: JB
          } = this,
          MB = oB ? (0, DB.b)(GB, JB.getRenderWidth(), JB.getRenderHeight()) : 0;
        jB.x === this.eyeX && jB.y === this.eyeY && jB.z === this.eyeZ && MB === this.focalPx && oB === this.culling || (this.epoch++, this.eyeX = jB.x, this.eyeY = jB.y, this.eyeZ = jB.z, this.focalPx = MB, this.culling = oB);
        const {
          epoch: PB,
          range: zB
        } = this, lB = this.pP / 2, pB = lB * Math.sqrt(3), qB = BB.data, ZB = BB.length;
        let NB = 0;
        for (let QB = 0; QB < ZB; QB++) {
          const BB = qB[QB],
            OB = BB._noaFaceGroups;
          if (OB && (BB._noaFaceEpoch !== PB || BB._noaFaceMaterial !== BB.material)) {
            BB._noaFaceEpoch = PB, BB._noaFaceMaterial = BB.material;
            const GB = BB.iW,
              QB = GB && 1 === GB.length ? GB[0] : null;
            let JB = -1;
            if (oB && QB && (0, YB.n)(BB.material)) {
              const GB = BB.position,
                YB = jB.x - GB.x,
                QB = jB.y - GB.y,
                oB = jB.z - GB.z,
                yB = YB - lB,
                PB = QB - lB,
                zB = oB - lB,
                qB = Math.sqrt(yB * yB + PB * PB + zB * zB) + pB;
              JB = (0, DB.k)(OB, YB, QB, oB, (0, DB.f)(qB, MB))
            }
            if (QB && JB !== BB._noaFaceMask) {
              BB._noaFaceMask = JB;
              let GB = 0,
                DB = OB[YB.f]; - 1 !== JB && (DB = yB(OB, JB, zB), GB = zB[0]), BB._noaFaceCount = DB, QB.indexStart = 6 * GB, QB.indexCount = 6 * DB, QB.setBoundingInfo(BB.Gw())
            }
          }
          OB && 0 === BB._noaFaceCount || (qB[NB++] = BB)
        }
        BB.length = NB
      }
    }
  },
  38133: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => yB,
      g: () => jB
    });
    const YB = new WeakSet;
    let DB = 0;
    const QB = new Set;

    function oB(BB, OB) {
      BB._data = OB
    }

    function jB(BB) {
      var OB, GB;
      (null !== (OB = null === (GB = BB.getBuffer()) || void 0 === GB ? void 0 : GB.CP) && void 0 !== OB ? OB : 0) > 0 && (YB.add(BB), 0 === DB ? oB(BB, null) : QB.add(BB))
    }

    function yB(BB) {
      DB++;
      for (const GB of function(BB) {
          const OB = new Set;
          for (const DB of BB) {
            const BB = DB.geometry;
            for (const DB of Object.values(null !== (GB = null === BB || void 0 === BB ? void 0 : BB.getVertexBuffers()) && void 0 !== GB ? GB : {})) {
              var GB;
              const BB = DB.getWrapperBuffer();
              YB.has(BB) && OB.add(BB)
            }
          }
          return OB
        }(BB)) GB.getData() || JB(GB), QB.add(GB);
      let OB = !0;
      return () => {
        if (OB && (OB = !1, DB--, 0 === DB)) {
          for (const BB of QB) oB(BB, null);
          QB.clear()
        }
      }
    }

    function JB(BB) {
      const OB = BB.getBuffer();
      if (!OB || !(OB.CP > 0)) return;
      const GB = BB._engine,
        YB = new Uint8Array(OB.CP);
      GB.bindArrayBuffer(OB), GB._gl.getBufferSubData(GB._gl.ARRAY_BUFFER, 0, YB), GB._resetVertexBufferBinding(), oB(BB, YB)
    }
  },
  38140: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => oB,
      f: () => QB,
      g: () => yB,
      h: () => YB,
      k: () => jB,
      m: () => DB,
      n: () => JB
    });
    const YB = 6,
      DB = [0, 2, 4, 1, 3, 5, 0, 2],
      QB = 6,
      oB = [1, 0, 3, 2, 5, 4];
    for (let MB = QB; MB < DB.length; MB++)
      if (DB[MB] !== DB[MB - QB]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const jB = DB.length + 1,
      yB = (() => {
        const BB = [];
        for (let OB = 0; OB < QB; OB++) BB[DB[OB]] = OB;
        return BB
      })();

    function JB(BB) {
      return !!BB && BB.backFaceCulling && (0 === BB.transparencyMode || 1 === BB.transparencyMode)
    }
  },
  38151: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => jB,
      f: () => yB,
      h: () => MB,
      k: () => JB,
      o: () => pB
    });
    var YB = GB(38140);
    const DB = 1 / 16,
      QB = 1 / 64,
      oB = 2048;
    YB.h;

    function jB(BB, OB, GB) {
      return Math.min(Math.abs(BB[0] * OB), Math.abs(BB[5] * GB)) / 2
    }

    function yB(BB, OB) {
      return DB + QB * BB * BB / OB
    }

    function JB(BB, OB, GB, DB, QB) {
      const oB = YB.k;
      return MB(BB[oB], BB[oB + 1], BB[oB + 2], BB[oB + 3], BB[oB + 4], BB[oB + 5], OB, GB, DB, QB)
    }

    function MB(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB) {
      return (oB <= BB - JB ? 0 : 1) | (oB >= OB + JB ? 0 : 2) | (jB <= GB - JB ? 0 : 4) | (jB >= YB + JB ? 0 : 8) | (yB <= DB - JB ? 0 : 16) | (yB >= QB + JB ? 0 : 32)
    }
    const PB = (() => {
        const BB = [];
        for (let OB = 0; OB < YB.m.length; OB++) {
          let GB = 0;
          for (let DB = OB + 1; DB <= YB.m.length; DB++) {
            const QB = 1 << YB.m[DB - 1];
            if (GB & QB) break;
            GB |= QB, BB.push({
              start: OB,
              end: DB,
              dB: GB
            })
          }
        }
        return BB
      })(),
      zB = [];

    function lB(BB, OB) {
      const GB = YB.g[OB];
      return BB[GB + 1] - BB[GB]
    }

    function pB(BB, OB, GB) {
      let DB = 0;
      for (let oB = 0; oB < YB.h; oB++) lB(BB, oB) > 0 && (DB |= 1 << oB);
      if (0 === (OB &= DB)) return 0;
      if (OB === DB) return GB[0] = 0, GB[1] = BB[YB.f], 1;
      let QB = null,
        jB = 1 / 0;
      for (const JB of function(BB) {
          let OB = zB[BB];
          if (OB) return OB;
          const GB = new Map,
            YB = (BB, OB) => {
              const YB = 4 * BB + OB.length / 2;
              GB.has(YB) || GB.set(YB, {
                dB: BB,
                windows: OB
              })
            };
          for (const QB of PB)
            if ((QB.dB & BB) === BB && YB(QB.dB, [QB.start, QB.end]), 0 !== (QB.dB & BB))
              for (const OB of PB) OB.start < QB.end || 0 !== (QB.dB & OB.dB) || 0 === (OB.dB & BB) || ((QB.dB | OB.dB) & BB) !== BB || YB(QB.dB | OB.dB, [QB.start, QB.end, OB.start, OB.end]);
          const DB = [...GB.values()];
          return OB = DB.filter((BB => !DB.some((OB => OB !== BB && (OB.dB & BB.dB) === OB.dB && OB.windows.length <= BB.windows.length)))), zB[BB] = OB, OB
        }(OB)) {
        let GB = (JB.windows.length / 2 - 1) * oB;
        const yB = JB.dB & ~OB & DB;
        for (let OB = 0; OB < YB.h; OB++) yB & 1 << OB && (GB += lB(BB, OB));
        GB < jB && (QB = JB, jB = GB)
      }
      const yB = QB.windows;
      for (let YB = 0; YB < yB.length; YB += 2) {
        const OB = BB[yB[YB]];
        GB[YB] = OB, GB[YB + 1] = BB[yB[YB + 1]] - OB
      }
      return yB.length / 2
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);