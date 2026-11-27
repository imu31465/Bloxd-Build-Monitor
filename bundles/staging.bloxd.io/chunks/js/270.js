export const id = 270;
export const ids = [270];
export const modules = {
  42923: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      noaDevTools: () => xr
    });
    var Zr = Qr(38963),
      Wr = Qr(38938),
      ar = Qr(2383),
      jr = Qr(1885),
      Ir = Qr(42836);

    function fr(rr) {
      const {
        Ox: Sr
      } = rr, Qr = Sr.engine, Zr = {
        width: Qr.getRenderWidth(),
        height: Qr.getRenderHeight()
      };
      return {
        canvas: Qr.getRenderingCanvas(),
        maxTextureSize: Qr.getCaps().maxTextureSize,
        yx: () => !rr.Lx,
        resize: (rr, Sr) => {
          Qr.setSize(rr, Sr)
        },
        restoreSize: () => {
          Qr.setSize(Zr.width, Zr.height), Sr.resize()
        },
        onFrameDrawn: Qr => {
          const Zr = () => {
            Sr.uB && Qr()
          };
          return rr.on("afterRender", Zr), () => {
            rr.off("afterRender", Zr)
          }
        }
      }
    }
    var Er = Qr(35335);

    function pr(rr, Sr) {
      let {
        width: Er,
        height: pr,
        colouring: xr
      } = Sr;
      const mr = "normals" === xr,
        Nr = "depth" === xr;
      return new Promise((Sr => {
        try {
          const Ur = (0, ar.e)();
          if (Ur.Ox.Wt) return "screenshot" !== rr || null !== xr ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void Sr()) : void(0, Ir.f)(fr(Ur), Er, pr).finally(Sr);
          const tr = Ur.Ox.engine,
            hr = Ur.Ox.eC(),
            zr = Er,
            Yr = pr;
          Promise.all([Promise.all([Qr.e(290), Qr.e(291), Qr.e(266)]).then((() => Qr(64590))), Promise.all([Qr.e(265), Qr.e(264), Qr.e(290), Qr.e(291), Qr.e(288), Qr.e(292), Qr.e(295), Qr.e(630), Qr.e(272)]).then((() => Qr(64598))), Promise.all([Qr.e(265), Qr.e(264), Qr.e(290), Qr.e(291), Qr.e(288), Qr.e(298), Qr.e(292), Qr.e(300), Qr.e(274)]).then((() => Qr(64605))), Qr.e(671).then((() => Qr(64609))), Promise.all([Qr.e(264), Qr.e(260)]).then((() => Qr(38555))), Qr.e(289).then((() => Qr(64611))), Qr.e(269).then((() => Qr(64619)))]).then((ar => {
            const {
              CreateScreenshotUsingRenderTarget: Ir
            } = ar[1], {
              ShaderMaterial: fr
            } = ar[2], {
              ShaderLanguage: Er
            } = ar[3], {
              kU: pr
            } = ar[4], {
              registerDevtoolsShader: xr
            } = ar[6], Ur = Er.GLSL, nr = new Map, er = hr.meshes.filter((rr => rr.material));
            let Kr = !1,
              yr = null;

            function Br() {
              var rr;
              Kr && (Kr = !1, (0, Zr.d)(hr.meshes, !1)), null === (rr = yr) || void 0 === rr || rr(), yr = null, er.forEach((rr => {
                const Sr = nr.get(rr);
                Sr && (rr.material = Sr)
              }))
            }
            if (mr) {
              const rr = [],
                Sr = [];
              er.forEach((Qr => {
                const Zr = Qr.name.toLowerCase(),
                  Wr = Qr.mG().boundingBox.center,
                  ar = hr.activeCamera.position.subtract(Wr).length();
                Zr.includes("sky") || Zr.includes("background") || Zr.includes("environment") || ar > 1e3 ? Sr.push(Qr) : rr.push(Qr)
              })), xr("devtoolsNormal", Ur);
              const Qr = new fr("normalMaterial", hr, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: Ur
              });
              xr("devtoolsWhite", Ur);
              const Zr = new fr("whiteMaterial", hr, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: Ur
              });
              rr.forEach((rr => {
                nr.set(rr, rr.material), rr.material = Qr
              })), Sr.forEach((rr => {
                nr.set(rr, rr.material), rr.material = Zr
              }))
            } else if (Nr) {
              xr("devtoolsDepth", Ur);
              const rr = hr.activeCamera.position;
              let Sr = 0,
                Qr = 1 / 0;
              er.forEach((Zr => {
                const Wr = Zr.name.toLowerCase();
                if (Wr.includes("sky") || Wr.includes("background") || Wr.includes("environment")) return;
                const ar = Zr.mG().boundingBox.center,
                  jr = pr.TransformCoordinates(ar, Zr.getWorldMatrix()),
                  Ir = rr.subtract(jr).length();
                Ir > 1e3 || (Sr = Math.max(Sr, Ir), Qr = Math.min(Qr, Ir))
              }));
              const Zr = Sr - Qr;
              Sr += .1 * Zr, Qr = Math.max(0, Qr - .1 * Zr), console.log(`Depth range: min=${Qr.toFixed(2)}, max=${Sr.toFixed(2)}, range=${Zr.toFixed(2)}`), Zr < 1 && (Sr = Qr + 10);
              const Wr = new fr("depthMaterial", hr, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: Ur
              });
              Wr.setVector3("cameraPosition", rr), Wr.setFloat("maxDepth", Sr), Wr.setFloat("minDepth", Qr), er.forEach((rr => {
                nr.set(rr, rr.material), rr.material = Wr
              }))
            }
            if ((0, Zr.d)(hr.meshes, !0), Kr = !0, "glb" === rr && (yr = (0, Wr.c)(hr.meshes)), "screenshot" === rr) {
              let rr = `bloxd-screenshot-${zr}x${Yr}-${Date.now()}.png`;
              mr ? rr = `bloxd-screenshot-normals-${zr}x${Yr}-${Date.now()}.png` : Nr && (rr = `bloxd-screenshot-depth-${zr}x${Yr}-${Date.now()}.png`), Ir(tr, hr.activeCamera, {
                width: zr,
                height: Yr
              }, (function(Qr) {
                Br(), fetch(Qr).then((function(rr) {
                  return rr.blob()
                })).then((function(Qr) {
                  (0, jr.downloadBlob)(Qr, rr), Sr()
                })).catch((function(rr) {
                  console.error("Error processing screenshot:", rr), Sr()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), Br(), Sr()
              }))
            } else {
              let rr = "Dt";
              mr ? rr = "scene-normals" : Nr && (rr = "scene-depth"), mr || Nr ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: rr
                  } = await Promise.all([Qr.e(265), Qr.e(264), Qr.e(290), Qr.e(291), Qr.e(288), Qr.e(298), Qr.e(297), Qr.e(273)]).then((() => Qr(42100))), {
                    Color3: Sr
                  } = await Promise.all([Qr.e(265), Qr.e(268)]).then((() => Qr(38679))), Zr = [], Wr = [];
                  if (er.forEach((rr => {
                      const Sr = rr.name.toLowerCase(),
                        Qr = rr.mG().boundingBox.center,
                        ar = hr.activeCamera.position.subtract(Qr).length();
                      Sr.includes("sky") || Sr.includes("background") || Sr.includes("environment") || ar > 1e3 ? Wr.push(rr) : Zr.push(rr)
                    })), mr) Zr.forEach(((Qr, Zr) => {
                    const Wr = Qr.getVerticesData("normal");
                    if (Wr) {
                      const ar = [];
                      for (let rr = 0; rr < Wr.length; rr += 3) {
                        const Sr = Math.abs(Wr[rr]),
                          Qr = Math.abs(Wr[rr + 1]),
                          Zr = Math.abs(Wr[rr + 2]);
                        ar.push(Sr, Qr, Zr, 1)
                      }
                      Qr.setVerticesData("color", ar);
                      const jr = new rr(`vertexColorMat_${Zr}`, hr);
                      jr.disableLighting = !0, jr.emissiveColor = new Sr(1, 1, 1), jr.specularColor = new Sr(0, 0, 0), Qr.material = jr
                    }
                  })), Wr.forEach(((Qr, Zr) => {
                    const Wr = Qr.getVerticesData("position");
                    if (Wr) {
                      const ar = [],
                        jr = Wr.length / 3;
                      for (let rr = 0; rr < jr; rr++) ar.push(1, 1, 1, 1);
                      Qr.setVerticesData("color", ar);
                      const Ir = new rr(`whiteMat_${Zr}`, hr);
                      Ir.disableLighting = !0, Ir.emissiveColor = new Sr(1, 1, 1), Ir.specularColor = new Sr(0, 0, 0), Qr.material = Ir
                    }
                  }));
                  else if (Nr) {
                    const Qr = hr.activeCamera.position;
                    let Wr = 0,
                      ar = 1 / 0;
                    Zr.forEach((rr => {
                      const Sr = rr.mG().boundingBox.center,
                        Zr = pr.TransformCoordinates(Sr, rr.getWorldMatrix()),
                        jr = Qr.subtract(Zr).length();
                      Wr = Math.max(Wr, jr), ar = Math.min(ar, jr)
                    }));
                    const jr = Wr - ar;
                    Wr += .1 * jr, ar = Math.max(0, ar - .1 * jr), jr < 1 && (Wr = ar + 10), er.forEach(((Zr, jr) => {
                      const Ir = Zr.name.toLowerCase(),
                        fr = Zr.mG().boundingBox.center,
                        Er = pr.TransformCoordinates(fr, Zr.getWorldMatrix()),
                        xr = Qr.subtract(Er).length();
                      if (!(Ir.includes("sky") || Ir.includes("background") || Ir.includes("environment") || xr > 1e3)) {
                        const Qr = 1 - Math.min(Math.max((xr - ar) / (Wr - ar), 0), 1),
                          Ir = new rr(`depthMat_${jr}`, hr);
                        Ir.diffuseColor = new Sr(Qr, Qr, Qr), Ir.specularColor = new Sr(0, 0, 0), Zr.material = Ir
                      }
                    }))
                  }
                })().then((() => Promise.all([Qr.e(265), Qr.e(264), Qr.e(290), Qr.e(291), Qr.e(288), Qr.e(298), Qr.e(292), Qr.e(297), Qr.e(295), Qr.e(287), Qr.e(300), Qr.e(312), Qr.e(630), Qr.e(279), Qr.e(299), Qr.e(263)]).then((() => Qr(64623))))).then((Sr => Sr.GLTF2Export.GLBAsync(hr, rr))).then((rr => {
                  Br(), rr.downloadFiles(), Sr()
                })).catch((rr => {
                  console.error("Error exporting GLB:", rr), Br(), Sr()
                }))
              }), 100) : Promise.all([Qr.e(265), Qr.e(264), Qr.e(290), Qr.e(291), Qr.e(288), Qr.e(298), Qr.e(292), Qr.e(297), Qr.e(295), Qr.e(287), Qr.e(300), Qr.e(312), Qr.e(630), Qr.e(279), Qr.e(299), Qr.e(263)]).then((() => Qr(64623))).then((Qr => {
                Qr.GLTF2Export.GLBAsync(hr, rr).then((rr => {
                  Br(), rr.downloadFiles(), Sr()
                })).catch((rr => {
                  console.error("Error exporting GLB:", rr), Br(), Sr()
                }))
              })).catch((rr => {
                console.error("Error importing serializers:", rr), Br(), Sr()
              }))
            }
          })).catch((rr => {
            console.error("Error downloading the scene:", rr), Sr()
          }))
        } catch (Ur) {
          console.error("Error taking screenshot:", Ur), Sr()
        }
      }))
    }
    const xr = new class {
      constructor() {
        this.tools = Er.ALL_DEV_TOOLS
      }
      downloadScene(rr, Sr) {
        return pr(rr, Sr)
      }
      async setAmbientLightIntensity(rr) {
        const {
          Color3: Sr
        } = await Promise.all([Qr.e(265), Qr.e(268)]).then((() => Qr(38679)));
        (0, ar.e)().Ox.eC().ambientColor = Sr.FromArray([rr, rr, rr])
      }
      capturePhoto(rr, Sr, Qr) {
        return function(rr, Sr, Qr, Zr) {
          return (0, Ir.b)(fr(rr), Sr, Qr, Zr)
        }((0, ar.e)(), rr, Sr, Qr)
      }
      snapshotNextFrame() {
        return (0, Ir.i)(fr((0, ar.e)()))
      }
    }
  },
  42836: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ir,
      f: () => Er,
      i: () => fr
    });
    var Zr = Qr(1904);
    const Wr = 33177600,
      ar = 3e4;
    let jr = !1;

    function Ir(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: Ir = 1,
        type: fr = "image/png",
        quality: Er
      } = Zr;
      return rr.yx() ? jr ? Promise.reject(new Error("A screenshot is already being taken")) : (jr = !0, new Promise(((Zr, pr) => {
        let xr, mr = 2,
          Nr = null;
        const Ur = () => {
          var Sr;
          jr = !1, null === (Sr = Nr) || void 0 === Sr || Sr(), clearTimeout(xr);
          try {
            rr.restoreSize()
          } catch (Qr) {
            console.error("A screenshot couldn't size the canvas back", Qr)
          }
        };
        xr = setTimeout((() => {
          Ur(), pr(new Error("No frame was drawn to capture"))
        }), ar);
        try {
          const Zr = function(rr, Sr, Qr) {
            const Zr = Math.max(1, rr),
              ar = Math.max(1, Sr),
              jr = Math.min(1, Qr / Math.max(Zr, ar), Math.sqrt(Wr / (Zr * ar)));
            return {
              width: Math.max(1, Math.floor(Zr * jr)),
              height: Math.max(1, Math.floor(ar * jr))
            }
          }(Sr, Qr, rr.maxTextureSize);
          rr.resize(Zr.width, Zr.height, Ir * Zr.width / Math.max(1, Sr))
        } catch (tr) {
          return Ur(), void pr(tr)
        }
        Nr = rr.onFrameDrawn((() => {
          if (mr--, mr > 0) return;
          const {
            canvas: Sr
          } = rr, Qr = {
            width: Sr.width,
            height: Sr.height
          };
          try {
            Sr.toBlob((rr => {
              rr ? Zr({
                blob: rr,
                ...Qr
              }) : pr(new Error("The canvas gave no image"))
            }), fr, Er)
          } catch (tr) {
            pr(tr)
          } finally {
            Ur()
          }
        }))
      }))) : Promise.reject(new Error("Screenshots need a game to be running"))
    }

    function fr(rr) {
      return rr.yx() ? new Promise(((Sr, Qr) => {
        let Zr;
        const Wr = rr.onFrameDrawn((() => {
          Wr(), clearTimeout(Zr), createImageBitmap(rr.canvas).then(Sr, Qr)
        }));
        Zr = setTimeout((() => {
          Wr(), Qr(new Error("No frame was drawn to take"))
        }), ar)
      })) : Promise.reject(new Error("No game is drawing"))
    }
    async function Er(rr, Sr, Qr) {
      try {
        const Wr = await Ir(rr, Sr, Qr);
        (0, Zr.c)(Wr.blob, `bloxd-screenshot-${Wr.width}x${Wr.height}-${Date.now()}.png`)
      } catch (Wr) {
        console.error("Error taking screenshot:", Wr)
      }
    }
  },
  38963: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Er,
      d: () => Ir,
      e: () => jr
    });
    var Zr = Qr(38956),
      Wr = Qr(38972);
    let ar = 0;

    function jr(rr, Sr) {
      const Qr = rr;
      Qr._noaFaceGroups = null !== Sr && void 0 !== Sr ? Sr : null, Qr._noaFaceEpoch = -1, Qr._noaFaceMask = -1, Qr._noaFaceCount = -1, Qr._noaFaceMaterial = null;
      const Zr = rr.jT;
      Zr && 1 === Zr.length && (Zr[0].indexStart = 0, Zr[0].indexCount = rr.getTotalIndices())
    }

    function Ir(rr, Sr) {
      if (Sr) {
        ar++;
        for (const Sr of rr) {
          const rr = Sr._noaFaceGroups;
          rr && jr(Sr, rr)
        }
      } else ar = Math.max(0, ar - 1)
    }

    function fr(rr, Sr, Qr) {
      let Wr = -1,
        ar = 0;
      for (let jr = 0; jr < Zr.f; jr++) {
        const Qr = rr[jr],
          Ir = rr[jr + 1];
        Ir > Qr && Sr & 1 << Zr.e[jr] && (Wr < 0 && (Wr = Qr), ar = Ir)
      }
      return Wr < 0 ? (Qr[0] = 0, Qr[1] = 0, 0) : (Qr[0] = Wr, Qr[1] = ar - Wr, ar - Wr)
    }
    class Er {
      constructor(rr, Sr) {
        this.hx = rr, this.engine = Sr, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(rr, Sr) {
        if (!Sr) return;
        const Qr = Sr.getProjectionMatrix().m,
          jr = 0 === ar && 0 === Qr[15],
          Ir = Sr.globalPosition,
          {
            engine: Er
          } = this,
          pr = jr ? (0, Wr.c)(Qr, Er.getRenderWidth(), Er.getRenderHeight()) : 0;
        Ir.x === this.eyeX && Ir.y === this.eyeY && Ir.z === this.eyeZ && pr === this.focalPx && jr === this.culling || (this.epoch++, this.eyeX = Ir.x, this.eyeY = Ir.y, this.eyeZ = Ir.z, this.focalPx = pr, this.culling = jr);
        const {
          epoch: xr,
          range: mr
        } = this, Nr = this.hx / 2, Ur = Nr * Math.sqrt(3), tr = rr.data, hr = rr.length;
        let zr = 0;
        for (let ar = 0; ar < hr; ar++) {
          const rr = tr[ar],
            Sr = rr._noaFaceGroups;
          if (Sr && (rr._noaFaceEpoch !== xr || rr._noaFaceMaterial !== rr.material)) {
            rr._noaFaceEpoch = xr, rr._noaFaceMaterial = rr.material;
            const Qr = rr.jT,
              ar = Qr && 1 === Qr.length ? Qr[0] : null;
            let Er = -1;
            if (jr && ar && (0, Zr.s)(rr.material)) {
              const Qr = rr.position,
                Zr = Ir.x - Qr.x,
                ar = Ir.y - Qr.y,
                jr = Ir.z - Qr.z,
                fr = Zr - Nr,
                xr = ar - Nr,
                mr = jr - Nr,
                tr = Math.sqrt(fr * fr + xr * xr + mr * mr) + Ur;
              Er = (0, Wr.g)(Sr, Zr, ar, jr, (0, Wr.d)(tr, pr))
            }
            if (ar && Er !== rr._noaFaceMask) {
              rr._noaFaceMask = Er;
              let Qr = 0,
                Wr = Sr[Zr.f]; - 1 !== Er && (Wr = fr(Sr, Er, mr), Qr = mr[0]), rr._noaFaceCount = Wr, ar.indexStart = 6 * Qr, ar.indexCount = 6 * Wr, ar.setBoundingInfo(rr.mG())
            }
          }
          Sr && 0 === rr._noaFaceCount || (tr[zr++] = rr)
        }
        rr.length = zr
      }
    }
  },
  38938: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => fr,
      f: () => Ir
    });
    const Zr = new WeakSet;
    let Wr = 0;
    const ar = new Set;

    function jr(rr, Sr) {
      rr._data = Sr
    }

    function Ir(rr) {
      var Sr, Qr;
      (null !== (Sr = null === (Qr = rr.getBuffer()) || void 0 === Qr ? void 0 : Qr.sx) && void 0 !== Sr ? Sr : 0) > 0 && (Zr.add(rr), 0 === Wr ? jr(rr, null) : ar.add(rr))
    }

    function fr(rr) {
      Wr++;
      for (const Qr of function(rr) {
          const Sr = new Set;
          for (const Wr of rr) {
            const rr = Wr.geometry;
            for (const Wr of Object.values(null !== (Qr = null === rr || void 0 === rr ? void 0 : rr.getVertexBuffers()) && void 0 !== Qr ? Qr : {})) {
              var Qr;
              const rr = Wr.getWrapperBuffer();
              Zr.has(rr) && Sr.add(rr)
            }
          }
          return Sr
        }(rr)) Qr.getData() || Er(Qr), ar.add(Qr);
      let Sr = !0;
      return () => {
        if (Sr && (Sr = !1, Wr--, 0 === Wr)) {
          for (const rr of ar) jr(rr, null);
          ar.clear()
        }
      }
    }

    function Er(rr) {
      const Sr = rr.getBuffer();
      if (!Sr || !(Sr.sx > 0)) return;
      const Qr = rr._engine,
        Zr = new Uint8Array(Sr.sx);
      Qr.bindArrayBuffer(Sr), Qr._gl.getBufferSubData(Qr._gl.ARRAY_BUFFER, 0, Zr), Qr._resetVertexBufferBinding(), jr(rr, Zr)
    }
  },
  38956: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => jr,
      f: () => ar,
      i: () => fr,
      j: () => Zr,
      n: () => Ir,
      q: () => Wr,
      s: () => Er
    });
    const Zr = 6,
      Wr = [0, 2, 4, 1, 3, 5, 0, 2],
      ar = 6,
      jr = [1, 0, 3, 2, 5, 4];
    for (let pr = ar; pr < Wr.length; pr++)
      if (Wr[pr] !== Wr[pr - ar]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const Ir = Wr.length + 1,
      fr = (() => {
        const rr = [];
        for (let Sr = 0; Sr < ar; Sr++) rr[Wr[Sr]] = Sr;
        return rr
      })();

    function Er(rr) {
      return !!rr && rr.backFaceCulling && (0 === rr.transparencyMode || 1 === rr.transparencyMode)
    }
  },
  38972: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Ir,
      d: () => fr,
      e: () => pr,
      g: () => Er,
      h: () => Ur
    });
    var Zr = Qr(38956);
    const Wr = 1 / 16,
      ar = 1 / 64,
      jr = 2048;
    Zr.j;

    function Ir(rr, Sr, Qr) {
      return Math.min(Math.abs(rr[0] * Sr), Math.abs(rr[5] * Qr)) / 2
    }

    function fr(rr, Sr) {
      return Wr + ar * rr * rr / Sr
    }

    function Er(rr, Sr, Qr, Wr, ar) {
      const jr = Zr.n;
      return pr(rr[jr], rr[jr + 1], rr[jr + 2], rr[jr + 3], rr[jr + 4], rr[jr + 5], Sr, Qr, Wr, ar)
    }

    function pr(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er) {
      return (jr <= rr - Er ? 0 : 1) | (jr >= Sr + Er ? 0 : 2) | (Ir <= Qr - Er ? 0 : 4) | (Ir >= Zr + Er ? 0 : 8) | (fr <= Wr - Er ? 0 : 16) | (fr >= ar + Er ? 0 : 32)
    }
    const xr = (() => {
        const rr = [];
        for (let Sr = 0; Sr < Zr.q.length; Sr++) {
          let Qr = 0;
          for (let Wr = Sr + 1; Wr <= Zr.q.length; Wr++) {
            const ar = 1 << Zr.q[Wr - 1];
            if (Qr & ar) break;
            Qr |= ar, rr.push({
              start: Sr,
              end: Wr,
              Sr: Qr
            })
          }
        }
        return rr
      })(),
      mr = [];

    function Nr(rr, Sr) {
      const Qr = Zr.i[Sr];
      return rr[Qr + 1] - rr[Qr]
    }

    function Ur(rr, Sr, Qr) {
      let Wr = 0;
      for (let jr = 0; jr < Zr.j; jr++) Nr(rr, jr) > 0 && (Wr |= 1 << jr);
      if (0 === (Sr &= Wr)) return 0;
      if (Sr === Wr) return Qr[0] = 0, Qr[1] = rr[Zr.f], 1;
      let ar = null,
        Ir = 1 / 0;
      for (const Er of function(rr) {
          let Sr = mr[rr];
          if (Sr) return Sr;
          const Qr = new Map,
            Zr = (rr, Sr) => {
              const Zr = 4 * rr + Sr.length / 2;
              Qr.has(Zr) || Qr.set(Zr, {
                Sr: rr,
                windows: Sr
              })
            };
          for (const ar of xr)
            if ((ar.Sr & rr) === rr && Zr(ar.Sr, [ar.start, ar.end]), 0 !== (ar.Sr & rr))
              for (const Sr of xr) Sr.start < ar.end || 0 !== (ar.Sr & Sr.Sr) || 0 === (Sr.Sr & rr) || ((ar.Sr | Sr.Sr) & rr) !== rr || Zr(ar.Sr | Sr.Sr, [ar.start, ar.end, Sr.start, Sr.end]);
          const Wr = [...Qr.values()];
          return Sr = Wr.filter((rr => !Wr.some((Sr => Sr !== rr && (Sr.Sr & rr.Sr) === Sr.Sr && Sr.windows.length <= rr.windows.length)))), mr[rr] = Sr, Sr
        }(Sr)) {
        let Qr = (Er.windows.length / 2 - 1) * jr;
        const fr = Er.Sr & ~Sr & Wr;
        for (let Sr = 0; Sr < Zr.j; Sr++) fr & 1 << Sr && (Qr += Nr(rr, Sr));
        Qr < Ir && (ar = Er, Ir = Qr)
      }
      const fr = ar.windows;
      for (let Zr = 0; Zr < fr.length; Zr += 2) {
        const Sr = rr[fr[Zr]];
        Qr[Zr] = Sr, Qr[Zr + 1] = rr[fr[Zr + 1]] - Sr
      }
      return fr.length / 2
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);