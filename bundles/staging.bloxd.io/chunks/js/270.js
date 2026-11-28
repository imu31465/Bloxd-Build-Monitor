export const id = 270;
export const ids = [270];
export const modules = {
  43004: (dd, Od, md) => {
    md.d(Od, {
      noaDevTools: () => td
    });
    var Wd = md(38993),
      Fd = md(38982),
      Rd = md(2402),
      Xd = md(1890),
      Kd = md(42959);

    function hd(dd) {
      const {
        gt: Od
      } = dd, md = Od.engine, Wd = {
        width: md.getRenderWidth(),
        height: md.getRenderHeight()
      };
      return {
        canvas: md.getRenderingCanvas(),
        maxTextureSize: md.getCaps().maxTextureSize,
        yt: () => !dd.wt,
        resize: (dd, Od) => {
          md.setSize(dd, Od)
        },
        restoreSize: () => {
          md.setSize(Wd.width, Wd.height), Od.resize()
        },
        onFrameDrawn: md => {
          const Wd = () => {
            Od.uE && md()
          };
          return dd.on("afterRender", Wd), () => {
            dd.off("afterRender", Wd)
          }
        }
      }
    }
    var vd = md(35422);

    function Qd(dd, Od) {
      let {
        width: vd,
        height: Qd,
        colouring: td
      } = Od;
      const od = "normals" === td,
        Nd = "depth" === td;
      return new Promise((Od => {
        try {
          const qd = (0, Rd.c)();
          if (qd.gt.NH) return "screenshot" !== dd || null !== td ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void Od()) : void(0, Kd.h)(hd(qd), vd, Qd).finally(Od);
          const Hd = qd.gt.engine,
            yd = qd.gt.zV(),
            bd = vd,
            Td = Qd;
          Promise.all([Promise.all([md.e(290), md.e(291), md.e(266)]).then((() => md(64761))), Promise.all([md.e(265), md.e(264), md.e(290), md.e(291), md.e(288), md.e(292), md.e(295), md.e(630), md.e(272)]).then((() => md(64768))), Promise.all([md.e(265), md.e(264), md.e(290), md.e(291), md.e(288), md.e(298), md.e(292), md.e(300), md.e(274)]).then((() => md(64770))), md.e(671).then((() => md(64778))), Promise.all([md.e(264), md.e(260)]).then((() => md(38627))), md.e(289).then((() => md(64783))), md.e(269).then((() => md(64786)))]).then((Rd => {
            const {
              CreateScreenshotUsingRenderTarget: Kd
            } = Rd[1], {
              ShaderMaterial: hd
            } = Rd[2], {
              ShaderLanguage: vd
            } = Rd[3], {
              Cq: Qd
            } = Rd[4], {
              registerDevtoolsShader: td
            } = Rd[6], qd = vd.GLSL, pd = new Map, Yd = yd.meshes.filter((dd => dd.material));
            let gd = !1,
              wd = null;

            function Ed() {
              var dd;
              gd && (gd = !1, (0, Wd.h)(yd.meshes, !1)), null === (dd = wd) || void 0 === dd || dd(), wd = null, Yd.forEach((dd => {
                const Od = pd.get(dd);
                Od && (dd.material = Od)
              }))
            }
            if (od) {
              const dd = [],
                Od = [];
              Yd.forEach((md => {
                const Wd = md.name.toLowerCase(),
                  Fd = md.iG().boundingBox.center,
                  Rd = yd.activeCamera.position.subtract(Fd).length();
                Wd.includes("sky") || Wd.includes("background") || Wd.includes("environment") || Rd > 1e3 ? Od.push(md) : dd.push(md)
              })), td("devtoolsNormal", qd);
              const md = new hd("normalMaterial", yd, "devtoolsNormal", {
                attributes: ["position", "normal"],
                uniforms: ["worldViewProjection", "world"],
                shaderLanguage: qd
              });
              td("devtoolsWhite", qd);
              const Wd = new hd("whiteMaterial", yd, "devtoolsWhite", {
                attributes: ["position"],
                uniforms: ["worldViewProjection"],
                shaderLanguage: qd
              });
              dd.forEach((dd => {
                pd.set(dd, dd.material), dd.material = md
              })), Od.forEach((dd => {
                pd.set(dd, dd.material), dd.material = Wd
              }))
            } else if (Nd) {
              td("devtoolsDepth", qd);
              const dd = yd.activeCamera.position;
              let Od = 0,
                md = 1 / 0;
              Yd.forEach((Wd => {
                const Fd = Wd.name.toLowerCase();
                if (Fd.includes("sky") || Fd.includes("background") || Fd.includes("environment")) return;
                const Rd = Wd.iG().boundingBox.center,
                  Xd = Qd.TransformCoordinates(Rd, Wd.getWorldMatrix()),
                  Kd = dd.subtract(Xd).length();
                Kd > 1e3 || (Od = Math.max(Od, Kd), md = Math.min(md, Kd))
              }));
              const Wd = Od - md;
              Od += .1 * Wd, md = Math.max(0, md - .1 * Wd), console.log(`Depth range: min=${md.toFixed(2)}, max=${Od.toFixed(2)}, range=${Wd.toFixed(2)}`), Wd < 1 && (Od = md + 10);
              const Fd = new hd("depthMaterial", yd, "devtoolsDepth", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "world", "cameraPosition", "maxDepth", "minDepth"],
                shaderLanguage: qd
              });
              Fd.setVector3("cameraPosition", dd), Fd.setFloat("maxDepth", Od), Fd.setFloat("minDepth", md), Yd.forEach((dd => {
                pd.set(dd, dd.material), dd.material = Fd
              }))
            }
            if ((0, Wd.h)(yd.meshes, !0), gd = !0, "glb" === dd && (wd = (0, Fd.b)(yd.meshes)), "screenshot" === dd) {
              let dd = `bloxd-screenshot-${bd}x${Td}-${Date.now()}.png`;
              od ? dd = `bloxd-screenshot-normals-${bd}x${Td}-${Date.now()}.png` : Nd && (dd = `bloxd-screenshot-depth-${bd}x${Td}-${Date.now()}.png`), Kd(Hd, yd.activeCamera, {
                width: bd,
                height: Td
              }, (function(md) {
                Ed(), fetch(md).then((function(dd) {
                  return dd.blob()
                })).then((function(md) {
                  (0, Xd.downloadBlob)(md, dd), Od()
                })).catch((function(dd) {
                  console.error("Error processing screenshot:", dd), Od()
                }))
              }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
                console.error("Screenshot timed out"), Ed(), Od()
              }))
            } else {
              let dd = "MH";
              od ? dd = "scene-normals" : Nd && (dd = "scene-depth"), od || Nd ? setTimeout((() => {
                (async function() {
                  const {
                    StandardMaterial: dd
                  } = await Promise.all([md.e(265), md.e(264), md.e(290), md.e(291), md.e(288), md.e(298), md.e(297), md.e(273)]).then((() => md(42179))), {
                    Color3: Od
                  } = await Promise.all([md.e(265), md.e(268)]).then((() => md(38736))), Wd = [], Fd = [];
                  if (Yd.forEach((dd => {
                      const Od = dd.name.toLowerCase(),
                        md = dd.iG().boundingBox.center,
                        Rd = yd.activeCamera.position.subtract(md).length();
                      Od.includes("sky") || Od.includes("background") || Od.includes("environment") || Rd > 1e3 ? Fd.push(dd) : Wd.push(dd)
                    })), od) Wd.forEach(((md, Wd) => {
                    const Fd = md.getVerticesData("normal");
                    if (Fd) {
                      const Rd = [];
                      for (let dd = 0; dd < Fd.length; dd += 3) {
                        const Od = Math.abs(Fd[dd]),
                          md = Math.abs(Fd[dd + 1]),
                          Wd = Math.abs(Fd[dd + 2]);
                        Rd.push(Od, md, Wd, 1)
                      }
                      md.setVerticesData("color", Rd);
                      const Xd = new dd(`vertexColorMat_${Wd}`, yd);
                      Xd.disableLighting = !0, Xd.emissiveColor = new Od(1, 1, 1), Xd.specularColor = new Od(0, 0, 0), md.material = Xd
                    }
                  })), Fd.forEach(((md, Wd) => {
                    const Fd = md.getVerticesData("position");
                    if (Fd) {
                      const Rd = [],
                        Xd = Fd.length / 3;
                      for (let dd = 0; dd < Xd; dd++) Rd.push(1, 1, 1, 1);
                      md.setVerticesData("color", Rd);
                      const Kd = new dd(`whiteMat_${Wd}`, yd);
                      Kd.disableLighting = !0, Kd.emissiveColor = new Od(1, 1, 1), Kd.specularColor = new Od(0, 0, 0), md.material = Kd
                    }
                  }));
                  else if (Nd) {
                    const md = yd.activeCamera.position;
                    let Fd = 0,
                      Rd = 1 / 0;
                    Wd.forEach((dd => {
                      const Od = dd.iG().boundingBox.center,
                        Wd = Qd.TransformCoordinates(Od, dd.getWorldMatrix()),
                        Xd = md.subtract(Wd).length();
                      Fd = Math.max(Fd, Xd), Rd = Math.min(Rd, Xd)
                    }));
                    const Xd = Fd - Rd;
                    Fd += .1 * Xd, Rd = Math.max(0, Rd - .1 * Xd), Xd < 1 && (Fd = Rd + 10), Yd.forEach(((Wd, Xd) => {
                      const Kd = Wd.name.toLowerCase(),
                        hd = Wd.iG().boundingBox.center,
                        vd = Qd.TransformCoordinates(hd, Wd.getWorldMatrix()),
                        td = md.subtract(vd).length();
                      if (!(Kd.includes("sky") || Kd.includes("background") || Kd.includes("environment") || td > 1e3)) {
                        const md = 1 - Math.min(Math.max((td - Rd) / (Fd - Rd), 0), 1),
                          Kd = new dd(`depthMat_${Xd}`, yd);
                        Kd.diffuseColor = new Od(md, md, md), Kd.specularColor = new Od(0, 0, 0), Wd.material = Kd
                      }
                    }))
                  }
                })().then((() => Promise.all([md.e(265), md.e(264), md.e(290), md.e(291), md.e(288), md.e(298), md.e(292), md.e(297), md.e(295), md.e(287), md.e(300), md.e(312), md.e(630), md.e(279), md.e(299), md.e(263)]).then((() => md(64791))))).then((Od => Od.GLTF2Export.GLBAsync(yd, dd))).then((dd => {
                  Ed(), dd.downloadFiles(), Od()
                })).catch((dd => {
                  console.error("Error exporting GLB:", dd), Ed(), Od()
                }))
              }), 100) : Promise.all([md.e(265), md.e(264), md.e(290), md.e(291), md.e(288), md.e(298), md.e(292), md.e(297), md.e(295), md.e(287), md.e(300), md.e(312), md.e(630), md.e(279), md.e(299), md.e(263)]).then((() => md(64791))).then((md => {
                md.GLTF2Export.GLBAsync(yd, dd).then((dd => {
                  Ed(), dd.downloadFiles(), Od()
                })).catch((dd => {
                  console.error("Error exporting GLB:", dd), Ed(), Od()
                }))
              })).catch((dd => {
                console.error("Error importing serializers:", dd), Ed(), Od()
              }))
            }
          })).catch((dd => {
            console.error("Error downloading the scene:", dd), Od()
          }))
        } catch (qd) {
          console.error("Error taking screenshot:", qd), Od()
        }
      }))
    }
    const td = new class {
      constructor() {
        this.tools = vd.ALL_DEV_TOOLS
      }
      downloadScene(dd, Od) {
        return Qd(dd, Od)
      }
      async setAmbientLightIntensity(dd) {
        const {
          Color3: Od
        } = await Promise.all([md.e(265), md.e(268)]).then((() => md(38736)));
        (0, Rd.c)().gt.zV().ambientColor = Od.FromArray([dd, dd, dd])
      }
      capturePhoto(dd, Od, md) {
        return function(dd, Od, md, Wd) {
          return (0, Kd.d)(hd(dd), Od, md, Wd)
        }((0, Rd.c)(), dd, Od, md)
      }
      snapshotNextFrame() {
        return (0, Kd.j)(hd((0, Rd.c)()))
      }
    }
  },
  42959: (dd, Od, md) => {
    md.d(Od, {
      d: () => Kd,
      h: () => vd,
      j: () => hd
    });
    var Wd = md(1906);
    const Fd = 33177600,
      Rd = 3e4;
    let Xd = !1;

    function Kd(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: Kd = 1,
        type: hd = "image/png",
        quality: vd
      } = Wd;
      return dd.yt() ? Xd ? Promise.reject(new Error("A screenshot is already being taken")) : (Xd = !0, new Promise(((Wd, Qd) => {
        let td, od = 2,
          Nd = null;
        const qd = () => {
          var Od;
          Xd = !1, null === (Od = Nd) || void 0 === Od || Od(), clearTimeout(td);
          try {
            dd.restoreSize()
          } catch (md) {
            console.error("A screenshot couldn't size the canvas back", md)
          }
        };
        td = setTimeout((() => {
          qd(), Qd(new Error("No frame was drawn to capture"))
        }), Rd);
        try {
          const Wd = function(dd, Od, md) {
            const Wd = Math.max(1, dd),
              Rd = Math.max(1, Od),
              Xd = Math.min(1, md / Math.max(Wd, Rd), Math.sqrt(Fd / (Wd * Rd)));
            return {
              width: Math.max(1, Math.floor(Wd * Xd)),
              height: Math.max(1, Math.floor(Rd * Xd))
            }
          }(Od, md, dd.maxTextureSize);
          dd.resize(Wd.width, Wd.height, Kd * Wd.width / Math.max(1, Od))
        } catch (Hd) {
          return qd(), void Qd(Hd)
        }
        Nd = dd.onFrameDrawn((() => {
          if (od--, od > 0) return;
          const {
            canvas: Od
          } = dd, md = {
            width: Od.width,
            height: Od.height
          };
          try {
            Od.toBlob((dd => {
              dd ? Wd({
                blob: dd,
                ...md
              }) : Qd(new Error("The canvas gave no image"))
            }), hd, vd)
          } catch (Hd) {
            Qd(Hd)
          } finally {
            qd()
          }
        }))
      }))) : Promise.reject(new Error("Screenshots need a game to be running"))
    }

    function hd(dd) {
      return dd.yt() ? new Promise(((Od, md) => {
        let Wd;
        const Fd = dd.onFrameDrawn((() => {
          Fd(), clearTimeout(Wd), createImageBitmap(dd.canvas).then(Od, md)
        }));
        Wd = setTimeout((() => {
          Fd(), md(new Error("No frame was drawn to take"))
        }), Rd)
      })) : Promise.reject(new Error("No game is drawing"))
    }
    async function vd(dd, Od, md) {
      try {
        const Fd = await Kd(dd, Od, md);
        (0, Wd.e)(Fd.blob, `bloxd-screenshot-${Fd.width}x${Fd.height}-${Date.now()}.png`)
      } catch (Fd) {
        console.error("Error taking screenshot:", Fd)
      }
    }
  },
  38993: (dd, Od, md) => {
    md.d(Od, {
      e: () => vd,
      h: () => Kd,
      k: () => Xd
    });
    var Wd = md(38987),
      Fd = md(39002);
    let Rd = 0;

    function Xd(dd, Od) {
      const md = dd;
      md._noaFaceGroups = null !== Od && void 0 !== Od ? Od : null, md._noaFaceEpoch = -1, md._noaFaceMask = -1, md._noaFaceCount = -1, md._noaFaceMaterial = null;
      const Wd = dd.ZE;
      Wd && 1 === Wd.length && (Wd[0].indexStart = 0, Wd[0].indexCount = dd.getTotalIndices())
    }

    function Kd(dd, Od) {
      if (Od) {
        Rd++;
        for (const Od of dd) {
          const dd = Od._noaFaceGroups;
          dd && Xd(Od, dd)
        }
      } else Rd = Math.max(0, Rd - 1)
    }

    function hd(dd, Od, md) {
      let Fd = -1,
        Rd = 0;
      for (let Xd = 0; Xd < Wd.d; Xd++) {
        const md = dd[Xd],
          Kd = dd[Xd + 1];
        Kd > md && Od & 1 << Wd.b[Xd] && (Fd < 0 && (Fd = md), Rd = Kd)
      }
      return Fd < 0 ? (md[0] = 0, md[1] = 0, 0) : (md[0] = Fd, md[1] = Rd - Fd, Rd - Fd)
    }
    class vd {
      constructor(dd, Od) {
        this.Qt = dd, this.engine = Od, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
      }
      apply(dd, Od) {
        if (!Od) return;
        const md = Od.getProjectionMatrix().m,
          Xd = 0 === Rd && 0 === md[15],
          Kd = Od.globalPosition,
          {
            engine: vd
          } = this,
          Qd = Xd ? (0, Fd.e)(md, vd.getRenderWidth(), vd.getRenderHeight()) : 0;
        Kd.x === this.eyeX && Kd.y === this.eyeY && Kd.z === this.eyeZ && Qd === this.focalPx && Xd === this.culling || (this.epoch++, this.eyeX = Kd.x, this.eyeY = Kd.y, this.eyeZ = Kd.z, this.focalPx = Qd, this.culling = Xd);
        const {
          epoch: td,
          range: od
        } = this, Nd = this.Qt / 2, qd = Nd * Math.sqrt(3), Hd = dd.data, yd = dd.length;
        let bd = 0;
        for (let Rd = 0; Rd < yd; Rd++) {
          const dd = Hd[Rd],
            Od = dd._noaFaceGroups;
          if (Od && (dd._noaFaceEpoch !== td || dd._noaFaceMaterial !== dd.material)) {
            dd._noaFaceEpoch = td, dd._noaFaceMaterial = dd.material;
            const md = dd.ZE,
              Rd = md && 1 === md.length ? md[0] : null;
            let vd = -1;
            if (Xd && Rd && (0, Wd.r)(dd.material)) {
              const md = dd.position,
                Wd = Kd.x - md.x,
                Rd = Kd.y - md.y,
                Xd = Kd.z - md.z,
                hd = Wd - Nd,
                td = Rd - Nd,
                od = Xd - Nd,
                Hd = Math.sqrt(hd * hd + td * td + od * od) + qd;
              vd = (0, Fd.l)(Od, Wd, Rd, Xd, (0, Fd.h)(Hd, Qd))
            }
            if (Rd && vd !== dd._noaFaceMask) {
              dd._noaFaceMask = vd;
              let md = 0,
                Fd = Od[Wd.d]; - 1 !== vd && (Fd = hd(Od, vd, od), md = od[0]), dd._noaFaceCount = Fd, Rd.indexStart = 6 * md, Rd.indexCount = 6 * Fd, Rd.setBoundingInfo(dd.iG())
            }
          }
          Od && 0 === dd._noaFaceCount || (Hd[bd++] = dd)
        }
        dd.length = bd
      }
    }
  },
  38982: (dd, Od, md) => {
    md.d(Od, {
      b: () => hd,
      f: () => Kd
    });
    const Wd = new WeakSet;
    let Fd = 0;
    const Rd = new Set;

    function Xd(dd, Od) {
      dd._data = Od
    }

    function Kd(dd) {
      var Od, md;
      (null !== (Od = null === (md = dd.getBuffer()) || void 0 === md ? void 0 : md.Mt) && void 0 !== Od ? Od : 0) > 0 && (Wd.add(dd), 0 === Fd ? Xd(dd, null) : Rd.add(dd))
    }

    function hd(dd) {
      Fd++;
      for (const md of function(dd) {
          const Od = new Set;
          for (const Fd of dd) {
            const dd = Fd.geometry;
            for (const Fd of Object.values(null !== (md = null === dd || void 0 === dd ? void 0 : dd.getVertexBuffers()) && void 0 !== md ? md : {})) {
              var md;
              const dd = Fd.getWrapperBuffer();
              Wd.has(dd) && Od.add(dd)
            }
          }
          return Od
        }(dd)) md.getData() || vd(md), Rd.add(md);
      let Od = !0;
      return () => {
        if (Od && (Od = !1, Fd--, 0 === Fd)) {
          for (const dd of Rd) Xd(dd, null);
          Rd.clear()
        }
      }
    }

    function vd(dd) {
      const Od = dd.getBuffer();
      if (!Od || !(Od.Mt > 0)) return;
      const md = dd._engine,
        Wd = new Uint8Array(Od.Mt);
      md.bindArrayBuffer(Od), md._gl.getBufferSubData(md._gl.ARRAY_BUFFER, 0, Wd), md._resetVertexBufferBinding(), Xd(dd, Wd)
    }
  },
  38987: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd,
      d: () => Rd,
      h: () => hd,
      k: () => Wd,
      n: () => Kd,
      p: () => Fd,
      r: () => vd
    });
    const Wd = 6,
      Fd = [0, 2, 4, 1, 3, 5, 0, 2],
      Rd = 6,
      Xd = [1, 0, 3, 2, 5, 4];
    for (let Qd = Rd; Qd < Fd.length; Qd++)
      if (Fd[Qd] !== Fd[Qd - Rd]) throw new Error("FACE_LAYOUT must repeat a prefix of its base groups");
    const Kd = Fd.length + 1,
      hd = (() => {
        const dd = [];
        for (let Od = 0; Od < Rd; Od++) dd[Fd[Od]] = Od;
        return dd
      })();

    function vd(dd) {
      return !!dd && dd.backFaceCulling && (0 === dd.transparencyMode || 1 === dd.transparencyMode)
    }
  },
  39002: (dd, Od, md) => {
    md.d(Od, {
      e: () => Kd,
      h: () => hd,
      k: () => Qd,
      l: () => vd,
      n: () => qd
    });
    var Wd = md(38987);
    const Fd = 1 / 16,
      Rd = 1 / 64,
      Xd = 2048;
    Wd.k;

    function Kd(dd, Od, md) {
      return Math.min(Math.abs(dd[0] * Od), Math.abs(dd[5] * md)) / 2
    }

    function hd(dd, Od) {
      return Fd + Rd * dd * dd / Od
    }

    function vd(dd, Od, md, Fd, Rd) {
      const Xd = Wd.n;
      return Qd(dd[Xd], dd[Xd + 1], dd[Xd + 2], dd[Xd + 3], dd[Xd + 4], dd[Xd + 5], Od, md, Fd, Rd)
    }

    function Qd(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd) {
      return (Xd <= dd - vd ? 0 : 1) | (Xd >= Od + vd ? 0 : 2) | (Kd <= md - vd ? 0 : 4) | (Kd >= Wd + vd ? 0 : 8) | (hd <= Fd - vd ? 0 : 16) | (hd >= Rd + vd ? 0 : 32)
    }
    const td = (() => {
        const dd = [];
        for (let Od = 0; Od < Wd.p.length; Od++) {
          let md = 0;
          for (let Fd = Od + 1; Fd <= Wd.p.length; Fd++) {
            const Rd = 1 << Wd.p[Fd - 1];
            if (md & Rd) break;
            md |= Rd, dd.push({
              start: Od,
              end: Fd,
              Od: md
            })
          }
        }
        return dd
      })(),
      od = [];

    function Nd(dd, Od) {
      const md = Wd.h[Od];
      return dd[md + 1] - dd[md]
    }

    function qd(dd, Od, md) {
      let Fd = 0;
      for (let Xd = 0; Xd < Wd.k; Xd++) Nd(dd, Xd) > 0 && (Fd |= 1 << Xd);
      if (0 === (Od &= Fd)) return 0;
      if (Od === Fd) return md[0] = 0, md[1] = dd[Wd.d], 1;
      let Rd = null,
        Kd = 1 / 0;
      for (const vd of function(dd) {
          let Od = od[dd];
          if (Od) return Od;
          const md = new Map,
            Wd = (dd, Od) => {
              const Wd = 4 * dd + Od.length / 2;
              md.has(Wd) || md.set(Wd, {
                Od: dd,
                windows: Od
              })
            };
          for (const Rd of td)
            if ((Rd.Od & dd) === dd && Wd(Rd.Od, [Rd.start, Rd.end]), 0 !== (Rd.Od & dd))
              for (const Od of td) Od.start < Rd.end || 0 !== (Rd.Od & Od.Od) || 0 === (Od.Od & dd) || ((Rd.Od | Od.Od) & dd) !== dd || Wd(Rd.Od | Od.Od, [Rd.start, Rd.end, Od.start, Od.end]);
          const Fd = [...md.values()];
          return Od = Fd.filter((dd => !Fd.some((Od => Od !== dd && (Od.Od & dd.Od) === Od.Od && Od.windows.length <= dd.windows.length)))), od[dd] = Od, Od
        }(Od)) {
        let md = (vd.windows.length / 2 - 1) * Xd;
        const hd = vd.Od & ~Od & Fd;
        for (let Od = 0; Od < Wd.k; Od++) hd & 1 << Od && (md += Nd(dd, Od));
        md < Kd && (Rd = vd, Kd = md)
      }
      const hd = Rd.windows;
      for (let Wd = 0; Wd < hd.length; Wd += 2) {
        const Od = dd[hd[Wd]];
        md[Wd] = Od, md[Wd + 1] = dd[hd[Wd + 1]] - Od
      }
      return hd.length / 2
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);