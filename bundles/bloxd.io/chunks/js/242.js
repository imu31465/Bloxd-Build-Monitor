export const id = 242;
export const ids = [242];
export const modules = {
  39119: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => ov
    });
    Pv(6185);
    var hv = Pv(52),
      Sv = Pv(39127),
      ev = Pv(39387),
      gv = Pv(39506),
      pv = Pv(39537),
      dv = Pv(39560),
      Nv = Pv(36745),
      lv = Pv(36591),
      Tv = Pv(39710),
      Wv = Pv(39774),
      wv = (Pv(39800), Pv(1209)),
      av = Pv(185),
      sv = Pv(1175),
      Cv = Pv(22),
      iv = Pv(2584),
      cv = Pv(1442),
      Gv = Pv(1042),
      mv = Pv(6177),
      jv = Pv(6187),
      fv = Pv(4198),
      Fv = Pv(1082);
    const Yv = 1.2,
      nv = .2,
      Ov = .0066 * Math.PI / 180,
      Dv = new Set(["Escape", "KeyG"]),
      Kv = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      Vv = "ArrowUp",
      Uv = new Set([...Object.keys(Kv), Vv, "ArrowDown"]),
      Rv = 32,
      xv = 1,
      tv = 10,
      qv = "F4",
      Iv = "Period",
      Qv = Math.PI / 2 - .001,
      Zv = Math.PI / 6,
      Av = Math.PI / 6,
      Lv = 1.08,
      Hv = [{
        name: "X",
        direction: [1, 0, 0],
        colour: "#e5534b"
      }, {
        name: "Y",
        direction: [0, 1, 0],
        colour: "#57ab5a"
      }, {
        name: "Z",
        direction: [0, 0, 1],
        colour: "#539bf5"
      }],
      Mv = 24,
      yv = 7,
      Bv = 4,
      Jv = .01,
      Ev = 4;

    function ov(vv) {
      let {
        heatmap: zv,
        scale: Pv,
        fullyOpaqueFrom: xv,
        bounds: Zv,
        fitBounds: Av,
        schematic: Lv,
        controls: Hv,
        onStepTime: Mv,
        onShowAllTime: yv,
        onTogglePlaying: Bv,
        getReadout: Ev = null
      } = vv;
      const {
        t: ov
      } = (0, sv.x)(), {
        clientEscMenuOptions: ez
      } = (0, Cv.i)(["clientEscMenuOptions"]), dz = (0, hv.useRef)(null), Nz = (0, hv.useRef)(null), lz = (0, hv.useRef)(null), Tz = (0, iv.d)(dz), [Wz, wz] = (0, hv.useState)(!1), [az, sz] = (0, hv.useState)(!1), [Cz, iz] = (0, hv.useState)(!0), cz = (0, hv.useRef)(!1), [Gz, mz] = (0, hv.useState)(!1), jz = az || !Cz && Gz, [fz, Fz] = (0, hv.useState)(!1), [Yz, nz] = (0, hv.useState)(!0), [Oz, Dz] = (0, hv.useState)(null), Kz = Zv.min, [Vz, Uz] = (0, hv.useState)(Kz);
      Vz[0] === Kz[0] && Vz[1] === Kz[1] && Vz[2] === Kz[2] || (Uz(Kz), null !== Oz && Dz({
        ...Oz,
        position: gz(Oz.position, gz(Vz, pz(Kz, -1)))
      }));
      const Rz = (0, hv.useMemo)((() => function(vv) {
          return [vv.max[0] - vv.min[0] + 1, vv.max[1] - vv.min[1] + 1, vv.max[2] - vv.min[2] + 1]
        }(Zv)), [Zv]),
        xz = (0, hv.useMemo)((() => function(vv, zv) {
          const Pv = [],
            hv = [];
          for (const [Sv, ev] of Object.entries(vv.frequencies)) {
            const vv = Number(Sv);
            for (const [Sv, gv] of Object.entries(ev)) {
              const ev = Number(Sv);
              for (const [Sv, pv] of Object.entries(gv)) pv <= 0 || (Pv.push(vv - zv[0], ev - zv[1], Number(Sv) - zv[2]), hv.push(pv))
            }
          }
          return {
            positions: Int32Array.from(Pv),
            values: Float64Array.from(hv),
            count: hv.length
          }
        }(zv, Kz)), [zv, Kz]),
        tz = Yv * ez.cameraFOV / 100,
        qz = Tz.height > 0 ? Tz.width / Tz.height : 1,
        Iz = (0, hv.useMemo)((() => function(vv, zv) {
          return {
            min: [vv.min[0] - zv[0], vv.min[1] - zv[1], vv.min[2] - zv[2]],
            max: [vv.max[0] - zv[0] + 1, vv.max[1] - zv[1] + 1, vv.max[2] - zv[2] + 1]
          }
        }(Av, Kz)), [Av, Kz]),
        Qz = Pz(Iz, qz, tz),
        Zz = null !== Oz && void 0 !== Oz ? Oz : Qz,
        Az = (0, hv.useRef)({
          fittedView: Qz,
          fieldOfView: tz,
          mouseSensitivity: ez.mouseSensitivity,
          canLock: Cz
        });
      Az.current = {
        fittedView: Qz,
        fieldOfView: tz,
        mouseSensitivity: ez.mouseSensitivity,
        canLock: Cz
      };
      const Lz = (0, hv.useMemo)((() => {
          if (!jz) return null;
          const vv = (vv, Pv, hv) => {
              var Sv, ev, gv;
              return null !== (Sv = null === (ev = zv.frequencies[vv + Kz[0]]) || void 0 === ev || null === (gv = ev[Pv + Kz[1]]) || void 0 === gv ? void 0 : gv[hv + Kz[2]]) && void 0 !== Sv ? Sv : 0
            },
            hv = function(vv, zv, Pv, hv) {
              let Sv = 0,
                ev = 1 / 0;
              for (const Tv of [0, 1, 2]) {
                if (0 === zv[Tv]) {
                  if (vv[Tv] < 0 || vv[Tv] > Pv[Tv]) return null;
                  continue
                }
                const hv = (0 - vv[Tv]) / zv[Tv],
                  gv = (Pv[Tv] - vv[Tv]) / zv[Tv];
                Sv = Math.max(Sv, Math.min(hv, gv)), ev = Math.min(ev, Math.max(hv, gv))
              }
              if (Sv > ev) return null;
              const gv = [0, 1, 2].map((hv => Math.min(Pv[hv] - 1, Math.max(0, Math.floor(vv[hv] + zv[hv] * Sv))))),
                pv = [0, 1, 2].map((vv => Math.sign(zv[vv]))),
                dv = [0, 1, 2].map((Pv => {
                  if (0 === pv[Pv]) return 1 / 0;
                  return ((pv[Pv] > 0 ? gv[Pv] + 1 : gv[Pv]) - vv[Pv]) / zv[Pv]
                })),
                Nv = [0, 1, 2].map((vv => 0 === pv[vv] ? 1 / 0 : Math.abs(1 / zv[vv])));
              let lv = null;
              for (;;) {
                const vv = hv(gv[0], gv[1], gv[2]);
                if (vv >= 1) return gv;
                vv > 0 && (lv = [gv[0], gv[1], gv[2]]);
                const zv = dv[0] < dv[1] ? dv[0] < dv[2] ? 0 : 2 : dv[1] < dv[2] ? 1 : 2;
                if (dv[zv] > ev) return lv;
                if (gv[zv] += pv[zv], dv[zv] += Nv[zv], gv[zv] < 0 || gv[zv] >= Pv[zv]) return lv
              }
            }(Zz.position, vz(Zz), Rz, ((zv, hv, Sv) => (0, mv.u)(vv(zv, hv, Sv), Pv, xv)));
          return null === hv ? null : {
            x: hv[0] + Kz[0],
            y: hv[1] + Kz[1],
            z: hv[2] + Kz[2],
            value: vv(hv[0], hv[1], hv[2])
          }
        }), [jz, zv, Kz, Zz, Rz, Pv, xv]),
        {
          keyHandlers: Hz
        } = (0, jv.e)({
          isEnabled: jz,
          claimedKeyCodes: Uv,
          pW: vv => {
            Dz((zv => function(vv, zv) {
              const Pv = [Math.sin(vv.heading), 0, Math.cos(vv.heading)],
                hv = gz(gz(pz(Pv, zv.forward), pz(zz(vv.heading), zv.right)), [0, zv.up, 0]);
              return {
                ...vv,
                position: gz(vv.position, hv)
              }
            }(null !== zv && void 0 !== zv ? zv : Az.current.fittedView, vv)))
          },
          onZoomChange: Fz
        });
      (0, hv.useEffect)((() => {
        const vv = Nz.current;
        if (!vv) return;
        let zv;
        try {
          zv = function(vv, zv) {
            const Pv = new Sv.d(vv, !0, {
                stencil: !1
              }, !0),
              hv = new ev.b(Pv),
              [wv, av, sv] = mv.N;
            hv.clearColor = new Nv.d(wv / 255, av / 255, sv / 255, 1);
            const Cv = new gv.e("Heatmap3DCamera", lv.fa.Zero(), hv);
            Cv.fov = zv, Cv.minZ = .05;
            const iv = new pv.e("Heatmap3DLight", new lv.fa(.4, 1, -.6), hv);
            iv.diffuse = Nv.Color3.White(), iv.groundColor = Nv.Color3.Black(), iv.specular = Nv.Color3.Black();
            const cv = new dv.StandardMaterial("Heatmap3DCellMaterial", hv);
            cv.diffuseColor = new Nv.Color3(.4, .4, .4), cv.emissiveColor = new Nv.Color3(.62, .62, .62), cv.specularColor = Nv.Color3.Black();
            const Gv = (0, Tv.c)("Heatmap3DCells", {
              size: 1
            }, hv);
            Gv.material = cv, Gv.Zs = !1, Gv.ja = !0, Gv.isVisible = !1;
            const jv = (0, Tv.c)("Heatmap3DTranslucentCells", {
              size: 1
            }, hv);
            jv.material = cv, jv.hasVertexAlpha = !0, jv.Zs = !1, jv.ja = !0, jv.isVisible = !1;
            const fv = new dv.StandardMaterial("Heatmap3DSchematicMaterial", hv);
            fv.diffuseColor = new Nv.Color3(.6, .6, .6), fv.emissiveColor = new Nv.Color3(.4, .4, .4), fv.specularColor = Nv.Color3.Black();
            const Fv = (0, Tv.c)("Heatmap3DSchematicBlocks", {
              size: 1
            }, hv);
            Fv.material = fv, Fv.Zs = !1, Fv.ja = !0, Fv.isVisible = !1;
            const Yv = (0, Wv.c)("Heatmap3DTarget", {
              lines: uv([-.52, -.52, -.52], [.52, .52, .52])
            }, hv);
            return Yv.color = new Nv.Color3(.06, .14, .23), Yv.renderingGroupId = 1, Yv.Zs = !1, Yv.isVisible = !1, {
              engine: Pv,
              Is: hv,
              camera: Cv,
              cells: Gv,
              translucentCells: jv,
              translucent: {
                gd: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: Fv,
              targetOutline: Yv,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: zv,
              needsRender: !0
            }
          }(vv, Az.current.fieldOfView)
        } catch (Pv) {
          return console.error("Failed to start the 3D heatmap", Pv), void wz(!0)
        }
        return lz.current = zv, zv.engine.runRenderLoop((() => {
          const vv = zv.camera;
          vv.fov !== zv.targetFieldOfView && (vv.fov += (zv.targetFieldOfView - vv.fov) * (vv.fov > zv.targetFieldOfView ? .3 : .2), Math.abs(zv.targetFieldOfView - vv.fov) < 5e-4 && (vv.fov = zv.targetFieldOfView), zv.needsRender = !0), zv.needsRender && (zv.Is.render(), zv.needsRender = !zv.Is.isReady() || !zv.engine.areAllEffectsReady())
        })), () => {
          lz.current = null, zv.engine.dispose()
        }
      }), []), (0, hv.useEffect)((() => {
        const vv = Nz.current;
        if (!vv) return;
        const zv = () => {
            cz.current = !1, sz(document.pointerLockElement === vv)
          },
          Pv = () => {
            cz.current && (cz.current = !1, iz(!1))
          },
          hv = zv => {
            const Pv = !Az.current.canLock && document.activeElement === vv && 0 !== (1 & zv.buttons);
            if (document.pointerLockElement !== vv && !Pv) return;
            const hv = Az.current.mouseSensitivity * Ov;
            Dz((vv => function(vv, zv, Pv) {
              const hv = 2 * Math.PI;
              return {
                ...vv,
                heading: ((vv.heading + zv) % hv + hv) % hv,
                pitch: Math.max(-Qv, Math.min(Qv, vv.pitch + Pv))
              }
            }(null !== vv && void 0 !== vv ? vv : Az.current.fittedView, zv.movementX * hv, zv.movementY * hv)))
          };
        return document.addEventListener("pointerlockchange", zv), document.addEventListener("pointerlockerror", Pv), document.addEventListener("pointermove", hv), () => {
          document.removeEventListener("pointerlockchange", zv), document.removeEventListener("pointerlockerror", Pv), document.removeEventListener("pointermove", hv), document.pointerLockElement === vv && (0, fv.e)()
        }
      }), []), (0, hv.useEffect)((() => {
        const vv = lz.current;
        null !== vv && 0 !== Tz.width && 0 !== Tz.height && (vv.engine.resize(), vv.needsRender = !0)
      }), [Tz.width, Tz.height]), (0, hv.useEffect)((() => {
        const vv = lz.current;
        null !== vv && (vv.targetFieldOfView = tz * (fz ? nv : 1))
      }), [tz, fz]), (0, hv.useEffect)((() => {
        const vv = lz.current;
        null !== vv && function(vv, zv, Pv, hv) {
          const Sv = [],
            ev = [],
            gv = [],
            pv = [];
          for (let dv = 0; dv < zv.count; dv++) {
            const vv = zv.values[dv],
              Nv = (0, mv.u)(vv, Pv, hv);
            if (Nv <= 0) continue;
            const [lv, Tv, Wv] = (0, mv.m)((0, mv.F)(vv, Pv)), wv = Nv >= 1;
            (wv ? Sv : gv).push(zv.positions[3 * dv] + .5, zv.positions[3 * dv + 1] + .5, zv.positions[3 * dv + 2] + .5), (wv ? ev : pv).push(lv / 255, Tv / 255, Wv / 255, Nv)
          }
          kv(vv.cells, Float32Array.from(Sv), Float32Array.from(ev), ev.length / 4), vv.translucent = {
            gd: Float32Array.from(gv),
            colours: Float32Array.from(pv),
            count: pv.length / 4
          }, vv.translucentSortedFrom = null, Xv(vv), vv.needsRender = !0
        }(vv, xz, Pv, xv)
      }), [xz, Pv, xv]), (0, hv.useEffect)((() => {
        const vv = lz.current;
        null !== vv && function(vv, zv) {
          vv.chunkGridOrigin = zv, vv.chunkGridCentre = null, rv(vv)
        }(vv, Zv.min)
      }), [Zv]), (0, hv.useEffect)((() => {
        const vv = lz.current;
        null !== vv && function(vv, zv, Pv) {
          const hv = [],
            Sv = [];
          if (null !== zv) {
            const {
              positions: vv,
              colours: ev,
              count: gv
            } = zv.surface;
            for (let zv = 0; zv < gv; zv++) {
              const gv = [vv[3 * zv], vv[3 * zv + 1], vv[3 * zv + 2]];
              [0, 1, 2].every((vv => gv[vv] >= Pv.min[vv] - Rv && gv[vv] <= Pv.max[vv] + Rv)) && (hv.push(gv[0] - Pv.min[0] + .5, gv[1] - Pv.min[1] + .5, gv[2] - Pv.min[2] + .5), Sv.push(ev[3 * zv] / 255, ev[3 * zv + 1] / 255, ev[3 * zv + 2] / 255, 1))
            }
          }
          kv(vv.schematicBlocks, Float32Array.from(hv), Float32Array.from(Sv), Sv.length / 4), vv.needsRender = !0
        }(vv, Lv, Zv)
      }), [Lv, Zv]), (0, hv.useEffect)((() => {
        const vv = lz.current;
        null !== vv && null !== vv.chunkGrid && (vv.chunkGrid.isVisible = Yz, vv.needsRender = !0)
      }), [Yz, Zv]), (0, hv.useEffect)((() => {
        const vv = lz.current;
        null !== vv && function(vv, zv, Pv) {
          const {
            camera: hv
          } = vv;
          hv.position.set(zv.position[0], zv.position[1], zv.position[2]), hv.rotation.set(zv.pitch, zv.heading, 0);
          const Sv = (tv + 1) * av.f.aa * Math.sqrt(3);
          hv.maxZ = Math.max(Sv, Math.hypot(...gz(zv.position, pz(Sz({
            min: [0, 0, 0],
            max: Pv
          }), -1))) + 2 * Math.hypot(...Pv)), rv(vv), Xv(vv), vv.needsRender = !0
        }(vv, Zz, Rz)
      }), [Zz, Rz]), (0, hv.useEffect)((() => {
        const vv = lz.current;
        null !== vv && (vv.targetOutline.isVisible = null !== Lz, null !== Lz && vv.targetOutline.position.set(Lz.x - Kz[0] + .5, Lz.y - Kz[1] + .5, Lz.z - Kz[2] + .5), vv.needsRender = !0)
      }), [Lz, Kz]);
      return (0, Fv.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: dz,
        children: [(0, Fv.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: Nz,
          style: {
            width: `${Tz.width}px`,
            height: `${Tz.height}px`
          },
          tabIndex: 0,
          "aria-label": ov("3D heatmap"),
          onClick: () => {
            const vv = Nz.current;
            if (null === vv) return;
            if (vv.focus({
                preventScroll: !0
              }), az || !Cz) return;
            const zv = vv.requestPointerLock();
            zv instanceof Promise ? zv.catch((vv => {
              vv instanceof DOMException && ("WrongDocumentError" === vv.name || "NotSupportedError" === vv.name) && iz(!1)
            })) : cz.current = !0
          },
          ...Hz,
          onKeyDown: vv => {
            if (jz && Dv.has(vv.code)) return vv.preventDefault(), void(() => {
              const vv = Nz.current;
              null !== vv && document.pointerLockElement === vv ? (0, fv.e)() : null === vv || void 0 === vv || vv.blur()
            })();
            const zv = Kv[vv.code];
            return jz && void 0 !== zv ? (vv.preventDefault(), void Mv(zv)) : jz && (0, jv.d)("replayPlayPause", vv.code) && !(0, jv.d)("Zoom", vv.code) ? (vv.preventDefault(), void(vv.repeat || Bv())) : jz && vv.code === Vv ? (vv.preventDefault(), void yv()) : jz && vv.code === Iv ? (vv.preventDefault(), void Dz(null)) : jz && vv.code === qv ? (vv.preventDefault(), void nz((vv => !vv))) : void Hz.onKeyDown(vv)
          },
          onFocus: () => {
            mz(!0)
          },
          onBlur: () => {
            mz(!1), Hz.onBlur()
          }
        }), Wz && (0, Fv.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: ov("3D view isn't available in this browser.")
        }), jz && (0, Fv.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, Fv.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: Zz.position.map(((vv, zv) => (vv + Kz[zv]).toFixed(2))).join(" ")
        }), Yz && (0, Fv.jsx)(bv, {
          heading: Zz.heading,
          pitch: Zz.pitch,
          onViewFrom: vv => {
            const zv = pz(vv, -1),
              Pv = 0 === zv[1] ? {
                heading: Math.atan2(zv[0], zv[2]),
                pitch: 0
              } : {
                heading: Zz.heading,
                pitch: zv[1] < 0 ? Qv : -Qv
              };
            Dz(Pz(Iz, qz, tz, Pv))
          },
          onTurn: (vv, zv) => {
            Dz((Pv => function(vv, zv, Pv, hv) {
              return hz(vv, zv, {
                heading: vv.heading + Pv * Jv,
                pitch: Math.max(-Qv, Math.min(Qv, vv.pitch + hv * Jv))
              })
            }(null !== Pv && void 0 !== Pv ? Pv : Az.current.fittedView, Sz(Iz), vv, zv)))
          },
          onFlip: () => {
            Dz((vv => function(vv, zv) {
              return hz(vv, zv, {
                heading: vv.heading + Math.PI,
                pitch: -vv.pitch
              })
            }(null !== vv && void 0 !== vv ? vv : Az.current.fittedView, Sz(Iz))))
          }
        }), null !== Lz && (0, Fv.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === Ev ? ov("studio:heatmapBlockReadout", {
            x: Lz.x,
            y: Lz.y,
            z: Lz.z,
            count: (0, wv.X)(Lz.value)
          }) : Ev(Lz.x, Lz.y, Lz.z, Lz.value)
        }), (0, Fv.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [Hv, (0, Fv.jsx)(cv.K, {
            active: null === Oz,
            onClick: () => {
              Dz(null)
            },
            children: (0, Fv.jsx)(Gv.b, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function bv(vv) {
      let {
        heading: zv,
        pitch: Pv,
        onViewFrom: Sv,
        onTurn: ev,
        onFlip: gv
      } = vv;
      const {
        t: pv
      } = (0, sv.x)(), dv = (0, hv.useRef)(null), Nv = vz({
        heading: zv,
        pitch: Pv
      }), lv = zz(zv), Tv = Nz(Nv, lv), Wv = Mv + yv + 2, wv = Hv.flatMap((vv => [1, -1].map((zv => {
        const Pv = pz(vv.direction, zv);
        return {
          ...vv,
          sign: zv,
          direction: Pv,
          endX: Wv + dz(Pv, lv) * Mv,
          endY: Wv - dz(Pv, Tv) * Mv,
          depth: dz(Pv, Nv)
        }
      })))).sort(((vv, zv) => zv.depth - vv.depth));
      return (0, Fv.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * Wv,
        height: 2 * Wv,
        "aria-hidden": !0,
        onPointerDown: vv => {
          var zv, Pv;
          vv.currentTarget.setPointerCapture(vv.pointerId);
          const hv = vv.target,
            Sv = hv.getAttribute("data-end");
          dv.current = {
            pointerId: vv.pointerId,
            x: vv.clientX,
            y: vv.clientY,
            travel: 0,
            side: null === Sv ? null : null !== (zv = null === (Pv = wv[Number(Sv)]) || void 0 === Pv ? void 0 : Pv.direction) && void 0 !== zv ? zv : null,
            isOnMiddle: hv.hasAttribute("data-middle")
          }
        },
        onPointerMove: vv => {
          const zv = dv.current;
          if (null === zv || zv.pointerId !== vv.pointerId) return;
          const Pv = vv.clientX - zv.x,
            hv = vv.clientY - zv.y;
          zv.x = vv.clientX, zv.y = vv.clientY, zv.travel += Math.abs(Pv) + Math.abs(hv), zv.travel >= Ev && ev(Pv, hv)
        },
        onPointerUp: vv => {
          const zv = dv.current;
          dv.current = null, null === zv || zv.pointerId !== vv.pointerId || zv.travel >= Ev || (null !== zv.side ? Sv(zv.side) : zv.isOnMiddle && gv())
        },
        onPointerCancel: () => {
          dv.current = null
        },
        children: [wv.map(((vv, zv) => {
          const Pv = vv.sign > 0;
          return (0, Fv.jsxs)("g", {
            children: [(0, Fv.jsx)("line", {
              x1: Wv,
              y1: Wv,
              x2: vv.endX,
              y2: vv.endY,
              stroke: vv.colour,
              strokeOpacity: Pv ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, Fv.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": zv,
              cx: vv.endX,
              cy: vv.endY,
              r: Pv ? yv : yv - 1,
              fill: vv.colour,
              fillOpacity: Pv ? 1 : .3,
              stroke: vv.colour,
              strokeWidth: Pv ? 0 : 1.5,
              children: (0, Fv.jsx)("title", {
                children: `${pv("View from")} ${Pv?"+":"\u2212"}${vv.name}`
              })
            }), Pv && (0, Fv.jsx)("text", {
              pointerEvents: "none",
              x: vv.endX,
              y: vv.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: vv.name
            })]
          }, `${Pv?"+":"-"}${vv.name}`)
        })), (0, Fv.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: Wv,
          cy: Wv,
          r: Bv,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, Fv.jsx)("title", {
            children: pv("View from the opposite side")
          })
        })]
      })
    }

    function rv(vv) {
      var zv, Pv, hv;
      const {
        chunkGridOrigin: Sv,
        camera: ev
      } = vv;
      if (null === Sv) return;
      const gv = [ev.position.x, ev.position.y, ev.position.z],
        pv = [0, 2].map((vv => Math.floor((gv[vv] + Sv[vv]) / av.f.aa))),
        dv = vv.chunkGridCentre;
      if (null !== dv && dv.every(((vv, zv) => vv === pv[zv]))) return;
      const Tv = null === (zv = null === (Pv = vv.chunkGrid) || void 0 === Pv ? void 0 : Pv.isVisible) || void 0 === zv || zv;
      null === (hv = vv.chunkGrid) || void 0 === hv || hv.dispose();
      const [wv, sv] = [0, 2].map(((vv, zv) => {
        const Pv = [];
        for (let hv = pv[zv] - tv; hv <= pv[zv] + tv + 1; hv++) Pv.push(hv * av.f.aa - Sv[vv]);
        return Pv
      })), Cv = -Sv[1], iv = [];
      for (const Nv of sv) iv.push([new lv.fa(wv[0], Cv, Nv), new lv.fa(wv[wv.length - 1], Cv, Nv)]);
      for (const Nv of wv) iv.push([new lv.fa(Nv, Cv, sv[0]), new lv.fa(Nv, Cv, sv[sv.length - 1])]);
      const cv = (0, Wv.c)("Heatmap3DChunkGrid", {
        lines: iv
      }, vv.Is);
      cv.color = new Nv.Color3(.45, .6, .78), cv.Zs = !1, cv.isVisible = Tv, vv.chunkGrid = cv, vv.chunkGridCentre = pv, vv.needsRender = !0
    }

    function kv(vv, zv, Pv, hv) {
      vv.N_("matrix", function(vv, zv) {
        const Pv = new Float32Array(16 * zv);
        for (let hv = 0; hv < zv; hv++) {
          const zv = 16 * hv;
          Pv[zv] = 1, Pv[zv + 5] = 1, Pv[zv + 10] = 1, Pv[zv + 12] = vv[3 * hv], Pv[zv + 13] = vv[3 * hv + 1], Pv[zv + 14] = vv[3 * hv + 2], Pv[zv + 15] = 1
        }
        return Pv
      }(zv, hv), 16, !0), vv.N_("color", Pv, 4, !0), vv.isVisible = hv > 0
    }

    function Xv(vv) {
      const {
        camera: zv,
        translucent: Pv
      } = vv, hv = [zv.position.x, zv.position.y, zv.position.z], Sv = vv.translucentSortedFrom;
      if (null !== Sv && Math.hypot(hv[0] - Sv[0], hv[1] - Sv[1], hv[2] - Sv[2]) < xv) return;
      vv.translucentSortedFrom = hv;
      const ev = new Float64Array(Pv.count),
        gv = new Uint32Array(Pv.count);
      for (let Nv = 0; Nv < Pv.count; Nv++) {
        const vv = Pv.gd[3 * Nv] - hv[0],
          zv = Pv.gd[3 * Nv + 1] - hv[1],
          Sv = Pv.gd[3 * Nv + 2] - hv[2];
        ev[Nv] = vv * vv + zv * zv + Sv * Sv, gv[Nv] = Nv
      }
      gv.sort(((vv, zv) => ev[zv] - ev[vv]));
      const pv = new Float32Array(3 * Pv.count),
        dv = new Float32Array(4 * Pv.count);
      gv.forEach(((vv, zv) => {
        pv.set(Pv.gd.subarray(3 * vv, 3 * vv + 3), 3 * zv), dv.set(Pv.colours.subarray(4 * vv, 4 * vv + 4), 4 * zv)
      })), kv(vv.translucentCells, pv, dv, Pv.count), vv.needsRender = !0
    }

    function uv(vv, zv) {
      const Pv = (Pv, hv, Sv) => new lv.fa(0 === Pv ? vv[0] : zv[0], 0 === hv ? vv[1] : zv[1], 0 === Sv ? vv[2] : zv[2]),
        hv = [];
      for (const Sv of [0, 1])
        for (const vv of [0, 1]) hv.push([Pv(0, Sv, vv), Pv(1, Sv, vv)], [Pv(Sv, 0, vv), Pv(Sv, 1, vv)], [Pv(Sv, vv, 0), Pv(Sv, vv, 1)]);
      return hv
    }

    function vz(vv) {
      return [Math.sin(vv.heading) * Math.cos(vv.pitch), -Math.sin(vv.pitch), Math.cos(vv.heading) * Math.cos(vv.pitch)]
    }

    function zz(vv) {
      return [Math.cos(vv), 0, -Math.sin(vv)]
    }

    function Pz(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: Zv,
        pitch: Av
      };
      const Sv = [vv.max[0] - vv.min[0], vv.max[1] - vv.min[1], vv.max[2] - vv.min[2]],
        ev = vz(hv),
        gv = zz(hv.heading),
        pv = Nz(ev, gv),
        dv = Math.tan(Pv / 2),
        Nv = dv * zv;
      let lv = 1;
      for (const Tv of [-Sv[0] / 2, Sv[0] / 2])
        for (const vv of [-Sv[1] / 2, Sv[1] / 2])
          for (const zv of [-Sv[2] / 2, Sv[2] / 2]) {
            const Pv = [Tv, vv, zv],
              hv = dz(Pv, ev);
            lv = Math.max(lv, Math.abs(dz(Pv, gv)) / Nv - hv, Math.abs(dz(Pv, pv)) / dv - hv)
          }
      return {
        position: gz([vv.min[0] + Sv[0] / 2, vv.min[1] + Sv[1] / 2, vv.min[2] + Sv[2] / 2], pz(ev, -lv * Lv)),
        heading: hv.heading,
        pitch: hv.pitch
      }
    }

    function hz(vv, zv, Pv) {
      const hv = ez(vv),
        Sv = ez(Pv),
        ev = gz(vv.position, pz(zv, -1)),
        gv = [0, 1, 2].reduce(((vv, zv) => gz(vv, pz(Sv[zv], dz(ev, hv[zv])))), [0, 0, 0]);
      return {
        position: gz(zv, gv),
        heading: Pv.heading,
        pitch: Pv.pitch
      }
    }

    function Sz(vv) {
      return pz(gz(vv.min, vv.max), .5)
    }

    function ez(vv) {
      const zv = vz(vv),
        Pv = zz(vv.heading);
      return [zv, Pv, Nz(zv, Pv)]
    }

    function gz(vv, zv) {
      return [vv[0] + zv[0], vv[1] + zv[1], vv[2] + zv[2]]
    }

    function pz(vv, zv) {
      return [vv[0] * zv, vv[1] * zv, vv[2] * zv]
    }

    function dz(vv, zv) {
      return vv[0] * zv[0] + vv[1] * zv[1] + vv[2] * zv[2]
    }

    function Nz(vv, zv) {
      return [vv[1] * zv[2] - vv[2] * zv[1], vv[2] * zv[0] - vv[0] * zv[2], vv[0] * zv[1] - vv[1] * zv[0]]
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);