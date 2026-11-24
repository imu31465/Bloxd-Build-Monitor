export const id = 242;
export const ids = [242];
export const modules = {
  41280: (pp, ip, cp) => {
    cp.d(ip, {
      noaDevTools: () => Ap
    });
    var Op = cp(37769),
      op = cp(37760),
      Ip = cp(2849),
      Sp = cp(1765),
      xp = cp(41182);

    function Lp(pp) {
      const {
        WU: ip
      } = pp, cp = ip.engine, Op = {
        width: cp.getRenderWidth(),
        height: cp.getRenderHeight()
      };
      return {
        canvas: cp.getRenderingCanvas(),
        maxTextureSize: cp.getCaps().maxTextureSize,
        drawing: () => !pp.Fk,
        resize: (pp, ip) => {
          cp.setSize(pp, ip)
        },
        restoreSize: () => {
          cp.setSize(Op.width, Op.height), ip.resize()
        },
        onFrameDrawn: ip => (pp.on("afterRender", ip), () => {
          pp.off("afterRender", ip)
        })
      }
    }
    var Yp = cp(34306);

    function Dp(pp, ip) {
      let {
        width: Yp,
        height: Dp,
        colouring: Ap
      } = ip;
      const Pp = "normals" === Ap,
        Wp = "depth" === Ap;
      return new Promise((ip => {
        try {
          const yp = (0, Ip.g)();
          if (yp.WU.yU) return "screenshot" !== pp || null !== Ap ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void ip()) : void(0, xp.g)(Lp(yp), Yp, Dp).finally(ip);
          const Up = yp.WU.engine,
            wp = yp.WU.Gl(),
            vp = Yp,
            tp = Dp;
          Promise.all([Promise.all([cp.e(258), cp.e(259), cp.e(238)]).then((() => cp(61368))), Promise.all([cp.e(237), cp.e(236), cp.e(258), cp.e(259), cp.e(256), cp.e(260), cp.e(263), cp.e(316), cp.e(243)]).then((() => cp(61372))), Promise.all([cp.e(237), cp.e(236), cp.e(258), cp.e(259), cp.e(256), cp.e(266), cp.e(260), cp.e(268), cp.e(245)]).then((() => cp(61380))), cp.e(357).then((() => cp(61383))), Promise.all([cp.e(236), cp.e(232)]).then((() => cp(37313))), cp.e(257).then((() => cp(61392))), cp.e(240).then((() => cp(61395)))]).then((Ip => {
            const {
              CreateScreenshotUsingRenderTarget: xp
            } = Ip[1], {
              ShaderMaterial: Lp
            } = Ip[2], {
              ShaderLanguage: Yp
            } = Ip[3], {
              Zy: Dp
            } = Ip[4], {
              registerDevtoolsShader: Ap
            } = Ip[6], yp = Yp.GLSL, Hp = new Map, dp = wp.meshes.filter((pp => pp.material));
            let ep = !1,
              jp = null;

            function kp() {
              var pp;
              ep && (ep = !1, (0, Op.f)(wp.meshes, !1)), null === (pp = jp) || void 0 === pp || pp(), jp = null, dp.forEach((pp => {
                const ip = Hp.get(pp);
                ip && (pp.material = ip)
              }))
            }
            if (Pp) {
              const pp = [],
                ip = [];
              dp.forEach((cp => {
                const Op = cp.name.toLowerCase(),
                  op = cp.bJ().boundingBox.center,
                  Ip = wp.activeCamera.position.subtract(op).length();
                Op.includes("sky") || Op.includes("background") || Op.includes("environment") || Ip > 1e3 ? ip.push(cp) : pp.push(cp)
              })), Ap("devtoolsNormal", yp);
              const cp = new Lp("normalMaterial", wp, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: yp
              });
              Ap("devtoolsWhite", yp);
              const Op = new Lp("whiteMaterial", wp, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: yp
              });
              pp.forEach((pp => {
                Hp.set(pp, pp.material), pp.material = cp
              })), ip.forEach((pp => {
                Hp.set(pp, pp.material), pp.material = Op
              }))
            } else if (Wp) {
              Ap("devtoolsDepth", yp);
              const pp = wp.activeCamera.position;
              let ip = 0,
                cp = 1 / 0;
              dp.forEach((Op => {
                const op = Op.name.toLowerCase();
                if (op.includes("sky") || op.includes("background") || op.includes("environment")) return;
                const Ip = Op.bJ().boundingBox.center,
                  Sp = Dp.TransformCoordinates(Ip, Op.getWorldMatrix()),
                  xp = pp.subtract(Sp).length();
                xp > 1e3 || (ip = Math.max(ip, xp), cp = Math.min(cp, xp))
              }));
              const Op = ip - cp;
              ip += .1 * Op, cp = Math.max(0, cp - .1 * Op), console.log(`Depth range: min=${cp.toFixed(2)}, max=${ip.toFixed(2)}, range=${Op.toFixed(2)}`), Op < 1 && (ip = cp + 10);
              const op = new Lp("depthMaterial", wp, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: yp
              });
              op.setVector3("cameraPosition", pp), op.setFloat("maxDepth", ip), op.setFloat("minDepth", cp), dp.forEach((pp => {
                Hp.set(pp, pp.material), pp.material = op
              }))
            }
            if ((0, Op.f)(wp.meshes, !0), ep = !0, "glb" === pp && (jp = (0, op.d)(wp.meshes)), "screenshot" === pp) {
              let pp = `bloxd-screenshot-${vp}x${tp}-${Date.now()}.png`;
              Pp ? pp = `bloxd-screenshot-normals-${vp}x${tp}-${Date.now()}.png` : Wp && (pp = `bloxd-screenshot-depth-${vp}x${tp}-${Date.now()}.png`), xp(Up, wp.activeCamera, {
                width: vp,
                height: tp
              }, (function(cp) {
                kp(), fetch(cp).then((function(pp) {
                  return pp.blob()
                })).then((function(cp) {
                  (0, Sp.downloadBlob)(cp, pp), ip()
                })).catch((function(pp) {
                  console.error("Error processing screenshot:", pp), ip()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), kp(), ip()
              }))
            } else {
              let pp = "pw";
              Pp ? pp = "scene-normals" : Wp && (pp = "scene-depth"), Pp || Wp ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: pp
                  } = await Promise.all([cp.e(237), cp.e(236), cp.e(258), cp.e(259), cp.e(256), cp.e(266), cp.e(265), cp.e(244)]).then((() => cp(40459))), {
                    Color3: ip
                  } = await Promise.all([cp.e(237), cp.e(241)]).then((() => cp(37479))), Op = [], op = [];
                  if (dp.forEach((pp => {
                      const ip = pp.name.toLowerCase(),
                        cp = pp.bJ().boundingBox.center,
                        Ip = wp.activeCamera.position.subtract(cp).length();
                      ip.includes("sky") || ip.includes("background") || ip.includes("environment") || Ip > 1e3 ? op.push(pp) : Op.push(pp)
                    })), Pp) Op.forEach(((cp, Op) => {
                    const op = cp.getVerticesData("normal");
                    if (op) {
                      const Ip = [];
                      for (let pp = 0; pp < op.length; pp += 3) {
                        const ip = Math.abs(op[pp]),
                          cp = Math.abs(op[pp + 1]),
                          Op = Math.abs(op[pp + 2]);
                        Ip.push(ip, cp, Op, 1)
                      }
                      cp.setVerticesData("color", Ip);
                      const Sp = new pp(`vertexColorMat_${Op}`, wp);
                      Sp.disableLighting = !0, Sp.emissiveColor = new ip(1, 1, 1), Sp.specularColor = new ip(0, 0, 0), cp.material = Sp
                    }
                  })), op.forEach(((cp, Op) => {
                    const op = cp.getVerticesData("position");
                    if (op) {
                      const Ip = [],
                        Sp = op.length / 3;
                      for (let pp = 0; pp < Sp; pp++) Ip.push(1, 1, 1, 1);
                      cp.setVerticesData("color", Ip);
                      const xp = new pp(`whiteMat_${Op}`, wp);
                      xp.disableLighting = !0, xp.emissiveColor = new ip(1, 1, 1), xp.specularColor = new ip(0, 0, 0), cp.material = xp
                    }
                  }));
                  else if (Wp) {
                    const cp = wp.activeCamera.position;
                    let op = 0,
                      Ip = 1 / 0;
                    Op.forEach((pp => {
                      const ip = pp.bJ().boundingBox.center,
                        Op = Dp.TransformCoordinates(ip, pp.getWorldMatrix()),
                        Sp = cp.subtract(Op).length();
                      op = Math.max(op, Sp), Ip = Math.min(Ip, Sp)
                    }));
                    const Sp = op - Ip;
                    op += .1 * Sp, Ip = Math.max(0, Ip - .1 * Sp), Sp < 1 && (op = Ip + 10), dp.forEach(((Op, Sp) => {
                      const xp = Op.name.toLowerCase(),
                        Lp = Op.bJ().boundingBox.center,
                        Yp = Dp.TransformCoordinates(Lp, Op.getWorldMatrix()),
                        Ap = cp.subtract(Yp).length();
                      if (!(xp.includes("sky") || xp.includes("background") || xp.includes("environment") || Ap > 1e3)) {
                        const cp = 1 - Math.min(Math.max((Ap - Ip) / (op - Ip), 0), 1),
                          xp = new pp(`depthMat_${Sp}`, wp);
                        xp.diffuseColor = new ip(cp, cp, cp), xp.specularColor = new ip(0, 0, 0), Op.material = xp
                      }
                    }))
                  }
                })().then((() => Promise.all([cp.e(237), cp.e(236), cp.e(258), cp.e(259), cp.e(256), cp.e(266), cp.e(260), cp.e(265), cp.e(263), cp.e(255), cp.e(268), cp.e(279), cp.e(316), cp.e(249), cp.e(267), cp.e(235)]).then((() => cp(61397))))).then((ip => ip.GLTF2Export.GLBAsync(wp, pp))).then((pp => {
                  kp(), pp.downloadFiles(), ip()
                })).catch((pp => {
                  console.error("Error exporting GLB:", pp), kp(), ip()
                }))
              }), 100) : Promise.all([cp.e(237), cp.e(236), cp.e(258), cp.e(259), cp.e(256), cp.e(266), cp.e(260), cp.e(265), cp.e(263), cp.e(255), cp.e(268), cp.e(279), cp.e(316), cp.e(249), cp.e(267), cp.e(235)]).then((() => cp(61397))).then((cp => {
                cp.GLTF2Export.GLBAsync(wp, pp).then((pp => {
                  kp(), pp.downloadFiles(), ip()
                })).catch((pp => {
                  console.error("Error exporting GLB:", pp), kp(), ip()
                }))
              })).catch((pp => {
                console.error("Error importing serializers:", pp), kp(), ip()
              }))
            }
          })).catch((pp => {
            console.error("Error downloading the scene:", pp), ip()
          }))
        } catch (yp) {
          console.error("Error taking screenshot:", yp), ip()
        }
      }))
    }
    const Ap = new class {
      constructor() {
        this.tools = Yp.ALL_DEV_TOOLS
      }
      downloadScene(pp, ip) {
        return Dp(pp, ip)
      }
      async setAmbientLightIntensity(pp) {
        const {
          Color3: ip
        } = await Promise.all([cp.e(237), cp.e(241)]).then((() => cp(37479)));
        (0, Ip.g)().WU.Gl().ambientColor = ip.FromArray([pp, pp, pp])
      }
      capturePhoto(pp, ip, cp) {
        return function(pp, ip, cp, Op) {
          return (0, xp.c)(Lp(pp), ip, cp, Op)
        }((0, Ip.g)(), pp, ip, cp)
      }
    }
  },
  41182: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => xp,
      g: () => Lp
    });
    var Op = cp(1779);
    const op = 33177600,
      Ip = 3e4;
    let Sp = !1;

    function xp(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: xp = 1,
        type: Lp = "image/png",
        quality: Yp
      } = Op;
      if (!pp.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (Sp) return Promise.reject(new Error("A screenshot is already being taken"));
      Sp = !0;
      const Dp = function(pp, ip, cp) {
        const Op = Math.max(1, pp),
          Ip = Math.max(1, ip),
          Sp = Math.min(1, cp / Math.max(Op, Ip), Math.sqrt(op / (Op * Ip)));
        return {
          width: Math.max(1, Math.floor(Op * Sp)),
          height: Math.max(1, Math.floor(Ip * Sp))
        }
      }(ip, cp, pp.maxTextureSize);
      return pp.resize(Dp.width, Dp.height, xp * Dp.width / Math.max(1, ip)), new Promise(((ip, cp) => {
        let Op, op = 2,
          xp = null;
        const Dp = () => {
          var ip;
          Sp = !1, null === (ip = xp) || void 0 === ip || ip(), clearTimeout(Op), pp.restoreSize()
        };
        Op = setTimeout((() => {
          Dp(), cp(new Error("No frame was drawn to capture"))
        }), Ip), xp = pp.onFrameDrawn((() => {
          if (op--, op > 0) return;
          const {
            canvas: Op
          } = pp, Ip = {
            width: Op.width,
            height: Op.height
          };
          try {
            Op.toBlob((pp => {
              pp ? ip({
                blob: pp,
                ...Ip
              }) : cp(new Error("The canvas gave no image"))
            }), Lp, Yp)
          } catch (Sp) {
            cp(Sp)
          } finally {
            Dp()
          }
        }))
      }))
    }
    async function Lp(pp, ip, cp) {
      try {
        const op = await xp(pp, ip, cp);
        (0, Op.c)(op.blob, `bloxd-screenshot-${op.width}x${op.height}-${Date.now()}.png`)
      } catch (op) {
        console.error("Error taking screenshot:", op)
      }
    }
  },
  37769: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Yp,
      f: () => xp,
      g: () => Sp
    });
    var Op = cp(37767),
      op = cp(37772);
    let Ip = 0;

    function Sp(pp, ip) {
      const cp = pp;
      cp._noaFaceGroups = null !== ip && void 0 !== ip ? ip : null, cp._noaFaceEpoch = -1, cp._noaFaceMask = -1, cp._noaFaceCount = -1, cp._noaFaceMaterial = null;
      const Op = pp.Am;
      Op && 1 === Op.length && (Op[0].indexStart = 0, Op[0].indexCount = pp.getTotalIndices())
    }

    function xp(pp, ip) {
      if (ip) {
        Ip++;
        for (const ip of pp) {
          const pp = ip._noaFaceGroups;
          pp && Sp(ip, pp)
        }
      } else Ip = Math.max(0, Ip - 1)
    }

    function Lp(pp, ip, cp) {
      let op = -1,
        Ip = 0;
      for (let Sp = 0; Sp < Op.f; Sp++) {
        const cp = pp[Sp],
          xp = pp[Sp + 1];
        xp > cp && ip & 1 << Op.e[Sp] && (op < 0 && (op = cp), Ip = xp)
      }
      return op < 0 ? (cp[0] = 0, cp[1] = 0, 0) : (cp[0] = op, cp[1] = Ip - op, Ip - op)
    }
    class Yp {
      constructor(pp, ip) {
        this.Qy = pp, this.engine = ip, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(pp, ip) {
        if (!ip) return;
        const cp = ip.getProjectionMatrix().m,
          Sp = 0 === Ip && 0 === cp[15],
          xp = ip.globalPosition,
          {
            engine: Yp
          } = this,
          Dp = Sp ? (0, op.c)(cp, Yp.getRenderWidth(), Yp.getRenderHeight()) : 0;
        xp.x === this.eyeX && xp.y === this.eyeY && xp.z === this.eyeZ && Dp === this.focalPx && Sp === this.culling || (this.epoch++, this.eyeX = xp.x, this.eyeY = xp.y, this.eyeZ = xp.z, this.focalPx = Dp, this.culling = Sp);
        const {
          epoch: Ap,
          range: Pp
        } = this, Wp = this.Qy / 2, yp = Wp * Math.sqrt(3), Up = pp.data, wp = pp.length;
        let vp = 0;
        for (let Ip = 0; Ip < wp; Ip++) {
          const pp = Up[Ip],
            ip = pp._noaFaceGroups;
          if (ip && (pp._noaFaceEpoch !== Ap || pp._noaFaceMaterial !== pp.material)) {
            pp._noaFaceEpoch = Ap, pp._noaFaceMaterial = pp.material;
            const cp = pp.Am,
              Ip = cp && 1 === cp.length ? cp[0] : null;
            let Yp = -1;
            if (Sp && Ip && (0, Op.v)(pp.material)) {
              const cp = pp.position,
                Op = xp.x - cp.x,
                Ip = xp.y - cp.y,
                Sp = xp.z - cp.z,
                Lp = Op - Wp,
                Ap = Ip - Wp,
                Pp = Sp - Wp,
                Up = Math.sqrt(Lp * Lp + Ap * Ap + Pp * Pp) + yp;
              Yp = (0, op.j)(ip, Op, Ip, Sp, (0, op.d)(Up, Dp))
            }
            if (Ip && Yp !== pp._noaFaceMask) {
              pp._noaFaceMask = Yp;
              let cp = 0,
                op = ip[Op.f]; - 1 !== Yp && (op = Lp(ip, Yp, Pp), cp = Pp[0]), pp._noaFaceCount = op, Ip.indexStart = 6 * cp, Ip.indexCount = 6 * op, Ip.setBoundingInfo(pp.bJ())
            }
          }
          ip && 0 === pp._noaFaceCount || (Up[vp++] = pp)
        }
        pp.length = vp
      }
    }
  },
  37760: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Lp,
      g: () => xp
    });
    const Op = new WeakSet;
    let op = 0;
    const Ip = new Set;

    function Sp(pp, ip) {
      pp._data = ip
    }

    function xp(pp) {
      var ip, cp;
      (null !== (ip = null === (cp = pp.getBuffer()) || void 0 === cp ? void 0 : cp.TA) && void 0 !== ip ? ip : 0) > 0 && (Op.add(pp), 0 === op ? Sp(pp, null) : Ip.add(pp))
    }

    function Lp(pp) {
      op++;
      for (const cp of function(pp) {
          const ip = new Set;
          for (const op of pp) {
            const pp = op.geometry;
            for (const op of Object.values(null !== (cp = null === pp || void 0 === pp ? void 0 : pp.getVertexBuffers()) && void 0 !== cp ? cp : {})) {
              var cp;
              const pp = op.getWrapperBuffer();
              Op.has(pp) && ip.add(pp)
            }
          }
          return ip
        }(pp)) cp.getData() || Yp(cp), Ip.add(cp);
      let ip = !0;
      return () => {
        if (ip && (ip = !1, op--, 0 === op)) {
          for (const pp of Ip) Sp(pp, null);
          Ip.clear()
        }
      }
    }

    function Yp(pp) {
      const ip = pp.getBuffer();
      if (!ip || !(ip.TA > 0)) return;
      const cp = pp._engine,
        Op = new Uint8Array(ip.TA);
      cp.bindArrayBuffer(ip), cp._gl.getBufferSubData(cp._gl.ARRAY_BUFFER, 0, Op), cp._resetVertexBufferBinding(), Sp(pp, Op)
    }
  },
  37767: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Sp,
      f: () => Ip,
      g: () => Lp,
      j: () => Op,
      n: () => xp,
      r: () => op,
      v: () => Yp
    });
    const Op = 6,
      op = [0, 2, 4, 1, 3, 5, 0, 2],
      Ip = 6,
      Sp = [1, 0, 3, 2, 5, 4];
    for (let Dp = Ip; Dp < op.length; Dp++)
      if (op[Dp] !== op[Dp - Ip]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const xp = op.length + 1,
      Lp = (() => {
        const pp = [];
        for (let ip = 0; ip < Ip; ip++) pp[op[ip]] = ip;
        return pp
      })();

    function Yp(pp) {
      return !!pp && pp.backFaceCulling && (0 === pp.transparencyMode || 1 === pp.transparencyMode)
    }
  },
  37772: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => xp,
      d: () => Lp,
      g: () => Dp,
      j: () => Yp,
      m: () => yp
    });
    var Op = cp(37767);
    const op = 1 / 16,
      Ip = 1 / 64,
      Sp = 2048;
    Op.j;

    function xp(pp, ip, cp) {
      return Math.min(Math.abs(pp[0] * ip), Math.abs(pp[5] * cp)) / 2
    }

    function Lp(pp, ip) {
      return op + Ip * pp * pp / ip
    }

    function Yp(pp, ip, cp, op, Ip) {
      const Sp = Op.n;
      return Dp(pp[Sp], pp[Sp + 1], pp[Sp + 2], pp[Sp + 3], pp[Sp + 4], pp[Sp + 5], ip, cp, op, Ip)
    }

    function Dp(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp) {
      return (Sp <= pp - Yp ? 0 : 1) | (Sp >= ip + Yp ? 0 : 2) | (xp <= cp - Yp ? 0 : 4) | (xp >= Op + Yp ? 0 : 8) | (Lp <= op - Yp ? 0 : 16) | (Lp >= Ip + Yp ? 0 : 32)
    }
    const Ap = (() => {
        const pp = [];
        for (let ip = 0; ip < Op.r.length; ip++) {
          let cp = 0;
          for (let op = ip + 1; op <= Op.r.length; op++) {
            const Ip = 1 << Op.r[op - 1];
            if (cp & Ip) break;
            cp |= Ip, pp.push({
              start: ip,
              end: op,
              Bc: cp
            })
          }
        }
        return pp
      })(),
      Pp = [];

    function Wp(pp, ip) {
      const cp = Op.g[ip];
      return pp[cp + 1] - pp[cp]
    }

    function yp(pp, ip, cp) {
      let op = 0;
      for (let Sp = 0; Sp < Op.j; Sp++) Wp(pp, Sp) > 0 && (op |= 1 << Sp);
      if (0 === (ip &= op)) return 0;
      if (ip === op) return cp[0] = 0, cp[1] = pp[Op.f], 1;
      let Ip = null,
        xp = 1 / 0;
      for (const Yp of function(pp) {
          let ip = Pp[pp];
          if (ip) return ip;
          const cp = new Map,
            Op = (pp, ip) => {
              const Op = 4 * pp + ip.length / 2;
              cp.has(Op) || cp.set(Op, {
                Bc: pp,
                windows: ip
              })
            };
          for (const Ip of Ap)
            if ((Ip.Bc & pp) === pp && Op(Ip.Bc, [Ip.start, Ip.end]), 0 !== (Ip.Bc & pp))
              for (const ip of Ap) ip.start < Ip.end || 0 !== (Ip.Bc & ip.Bc) || 0 === (ip.Bc & pp) || ((Ip.Bc | ip.Bc) & pp) !== pp || Op(Ip.Bc | ip.Bc, [Ip.start, Ip.end, ip.start, ip.end]);
          const op = [...cp.values()];
          return ip = op.filter((pp => !op.some((ip => ip !== pp && (ip.Bc & pp.Bc) === ip.Bc && ip.windows.length <= pp.windows.length)))), Pp[pp] = ip, ip
        }(ip)) {
        let cp = (Yp.windows.length / 2 - 1) * Sp;
        const Lp = Yp.Bc & ~ip & op;
        for (let ip = 0; ip < Op.j; ip++) Lp & 1 << ip && (cp += Wp(pp, ip));
        cp < xp && (Ip = Yp, xp = cp)
      }
      const Lp = Ip.windows;
      for (let Op = 0; Op < Lp.length; Op += 2) {
        const ip = pp[Lp[Op]];
        cp[Op] = ip, cp[Op + 1] = pp[Lp[Op + 1]] - ip
      }
      return Lp.length / 2
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);