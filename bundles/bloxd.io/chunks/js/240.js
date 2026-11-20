export const id = 240;
export const ids = [240];
export const modules = {
  39002: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => Sz
    });
    sz(6042);
    var Fz = sz(65),
      Wz = sz(39010),
      Xz = sz(39252),
      Oz = sz(39353),
      oz = sz(39408),
      vz = sz(39427),
      Uz = sz(36652),
      Kz = sz(36473),
      uz = sz(39552),
      Nz = sz(39597),
      bz = (sz(39623), sz(1213)),
      wz = sz(201),
      Dz = sz(1173),
      gz = sz(30),
      Hz = sz(2537),
      Bz = sz(1419),
      Pz = sz(1036),
      rz = sz(6037),
      Yz = sz(6048),
      xz = sz(4086),
      mz = sz(1087);
    const Jz = 1.2,
      Iz = .2,
      Cz = .0066 * Math.PI / 180,
      ez = new Set(["Escape", "KeyG"]),
      Zz = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      Gz = "ArrowUp",
      Tz = new Set([...Object.keys(Zz), Gz, "ArrowDown"]),
      cz = 32,
      jz = 1,
      Az = 10,
      yz = "F4",
      Mz = "Period",
      dz = Math.PI / 2 - .001,
      hz = Math.PI / 6,
      Qz = Math.PI / 6,
      kz = 1.08,
      iz = [{
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
      Lz = 24,
      lz = 7,
      nz = 4,
      az = .01,
      qz = 4;

    function Sz(zz) {
      let {
        heatmap: tz,
        scale: sz,
        fullyOpaqueFrom: jz,
        bounds: hz,
        fitBounds: Qz,
        schematic: kz,
        controls: iz,
        onStepTime: Lz,
        onShowAllTime: lz,
        onTogglePlaying: nz,
        getReadout: qz = null
      } = zz;
      const {
        t: Sz
      } = (0, Dz.B)(), {
        clientEscMenuOptions: Xt
      } = (0, gz.h)(["clientEscMenuOptions"]), vt = (0, Fz.useRef)(null), Ut = (0, Fz.useRef)(null), Kt = (0, Fz.useRef)(null), ut = (0, Hz.d)(vt), [Nt, bt] = (0, Fz.useState)(!1), [wt, Dt] = (0, Fz.useState)(!1), [gt, Ht] = (0, Fz.useState)(!0), Bt = (0, Fz.useRef)(!1), [Pt, rt] = (0, Fz.useState)(!1), Yt = wt || !gt && Pt, [xt, mt] = (0, Fz.useState)(!1), [Jt, It] = (0, Fz.useState)(!0), [Ct, et] = (0, Fz.useState)(null), Zt = hz.min, [Gt, Tt] = (0, Fz.useState)(Zt);
      Gt[0] === Zt[0] && Gt[1] === Zt[1] && Gt[2] === Zt[2] || (Tt(Zt), null !== Ct && et({
        ...Ct,
        position: Ot(Ct.position, Ot(Gt, ot(Zt, -1)))
      }));
      const ct = (0, Fz.useMemo)((() => function(zz) {
          return [zz.max[0] - zz.min[0] + 1, zz.max[1] - zz.min[1] + 1, zz.max[2] - zz.min[2] + 1]
        }(hz)), [hz]),
        jt = (0, Fz.useMemo)((() => function(zz, tz) {
          const sz = [],
            Fz = [];
          for (const [Wz, Xz] of Object.entries(zz.frequencies)) {
            const zz = Number(Wz);
            for (const [Wz, Oz] of Object.entries(Xz)) {
              const Xz = Number(Wz);
              for (const [Wz, oz] of Object.entries(Oz)) oz <= 0 || (sz.push(zz - tz[0], Xz - tz[1], Number(Wz) - tz[2]), Fz.push(oz))
            }
          }
          return {
            positions: Int32Array.from(sz),
            values: Float64Array.from(Fz),
            count: Fz.length
          }
        }(tz, Zt)), [tz, Zt]),
        At = Jz * Xt.cameraFOV / 100,
        yt = ut.height > 0 ? ut.width / ut.height : 1,
        Mt = (0, Fz.useMemo)((() => function(zz, tz) {
          return {
            min: [zz.min[0] - tz[0], zz.min[1] - tz[1], zz.min[2] - tz[2]],
            max: [zz.max[0] - tz[0] + 1, zz.max[1] - tz[1] + 1, zz.max[2] - tz[2] + 1]
          }
        }(Qz, Zt)), [Qz, Zt]),
        dt = st(Mt, yt, At),
        ht = null !== Ct && void 0 !== Ct ? Ct : dt,
        Qt = (0, Fz.useRef)({
          fittedView: dt,
          fieldOfView: At,
          mouseSensitivity: Xt.mouseSensitivity,
          canLock: gt
        });
      Qt.current = {
        fittedView: dt,
        fieldOfView: At,
        mouseSensitivity: Xt.mouseSensitivity,
        canLock: gt
      };
      const kt = (0, Fz.useMemo)((() => {
          if (!Yt) return null;
          const zz = (zz, sz, Fz) => {
              var Wz, Xz, Oz;
              return null !== (Wz = null === (Xz = tz.frequencies[zz + Zt[0]]) || void 0 === Xz || null === (Oz = Xz[sz + Zt[1]]) || void 0 === Oz ? void 0 : Oz[Fz + Zt[2]]) && void 0 !== Wz ? Wz : 0
            },
            Fz = function(zz, tz, sz, Fz) {
              let Wz = 0,
                Xz = 1 / 0;
              for (const uz of [0, 1, 2]) {
                if (0 === tz[uz]) {
                  if (zz[uz] < 0 || zz[uz] > sz[uz]) return null;
                  continue
                }
                const Fz = (0 - zz[uz]) / tz[uz],
                  Oz = (sz[uz] - zz[uz]) / tz[uz];
                Wz = Math.max(Wz, Math.min(Fz, Oz)), Xz = Math.min(Xz, Math.max(Fz, Oz))
              }
              if (Wz > Xz) return null;
              const Oz = [0, 1, 2].map((Fz => Math.min(sz[Fz] - 1, Math.max(0, Math.floor(zz[Fz] + tz[Fz] * Wz))))),
                oz = [0, 1, 2].map((zz => Math.sign(tz[zz]))),
                vz = [0, 1, 2].map((sz => {
                  if (0 === oz[sz]) return 1 / 0;
                  return ((oz[sz] > 0 ? Oz[sz] + 1 : Oz[sz]) - zz[sz]) / tz[sz]
                })),
                Uz = [0, 1, 2].map((zz => 0 === oz[zz] ? 1 / 0 : Math.abs(1 / tz[zz])));
              let Kz = null;
              for (;;) {
                const zz = Fz(Oz[0], Oz[1], Oz[2]);
                if (zz >= 1) return Oz;
                zz > 0 && (Kz = [Oz[0], Oz[1], Oz[2]]);
                const tz = vz[0] < vz[1] ? vz[0] < vz[2] ? 0 : 2 : vz[1] < vz[2] ? 1 : 2;
                if (vz[tz] > Xz) return Kz;
                if (Oz[tz] += oz[tz], vz[tz] += Uz[tz], Oz[tz] < 0 || Oz[tz] >= sz[tz]) return Kz
              }
            }(ht.position, zt(ht), ct, ((tz, Fz, Wz) => (0, rz.D)(zz(tz, Fz, Wz), sz, jz)));
          return null === Fz ? null : {
            x: Fz[0] + Zt[0],
            y: Fz[1] + Zt[1],
            z: Fz[2] + Zt[2],
            value: zz(Fz[0], Fz[1], Fz[2])
          }
        }), [Yt, tz, Zt, ht, ct, sz, jz]),
        {
          keyHandlers: it
        } = (0, Yz.f)({
          isEnabled: Yt,
          claimedKeyCodes: Tz,
          yN: zz => {
            et((tz => function(zz, tz) {
              const sz = [Math.sin(zz.heading), 0, Math.cos(zz.heading)],
                Fz = Ot(Ot(ot(sz, tz.forward), ot(tt(zz.heading), tz.right)), [0, tz.up, 0]);
              return {
                ...zz,
                position: Ot(zz.position, Fz)
              }
            }(null !== tz && void 0 !== tz ? tz : Qt.current.fittedView, zz)))
          },
          onZoomChange: mt
        });
      (0, Fz.useEffect)((() => {
        const zz = Ut.current;
        if (!zz) return;
        let tz;
        try {
          tz = function(zz, tz) {
            const sz = new Wz.b(zz, !0, {
                stencil: !1
              }, !0),
              Fz = new Xz.b(sz),
              [bz, wz, Dz] = rz.V;
            Fz.clearColor = new Uz.c(bz / 255, wz / 255, Dz / 255, 1);
            const gz = new Oz.d("Heatmap3DCamera", Kz.XD.Zero(), Fz);
            gz.fov = tz, gz.minZ = .05;
            const Hz = new oz.b("Heatmap3DLight", new Kz.XD(.4, 1, -.6), Fz);
            Hz.diffuse = Uz.Color3.White(), Hz.groundColor = Uz.Color3.Black(), Hz.specular = Uz.Color3.Black();
            const Bz = new vz.StandardMaterial("Heatmap3DCellMaterial", Fz);
            Bz.diffuseColor = new Uz.Color3(.4, .4, .4), Bz.emissiveColor = new Uz.Color3(.62, .62, .62), Bz.specularColor = Uz.Color3.Black();
            const Pz = (0, uz.e)("Heatmap3DCells", {
              size: 1
            }, Fz);
            Pz.material = Bz, Pz.Ng = !1, Pz.WD = !0, Pz.isVisible = !1;
            const Yz = (0, uz.e)("Heatmap3DTranslucentCells", {
              size: 1
            }, Fz);
            Yz.material = Bz, Yz.hasVertexAlpha = !0, Yz.Ng = !1, Yz.WD = !0, Yz.isVisible = !1;
            const xz = new vz.StandardMaterial("Heatmap3DSchematicMaterial", Fz);
            xz.diffuseColor = new Uz.Color3(.6, .6, .6), xz.emissiveColor = new Uz.Color3(.4, .4, .4), xz.specularColor = Uz.Color3.Black();
            const mz = (0, uz.e)("Heatmap3DSchematicBlocks", {
              size: 1
            }, Fz);
            mz.material = xz, mz.Ng = !1, mz.WD = !0, mz.isVisible = !1;
            const Jz = (0, Nz.d)("Heatmap3DTarget", {
              lines: Ez([-.52, -.52, -.52], [.52, .52, .52])
            }, Fz);
            return Jz.color = new Uz.Color3(.06, .14, .23), Jz.renderingGroupId = 1, Jz.Ng = !1, Jz.isVisible = !1, {
              engine: sz,
              Kg: Fz,
              camera: gz,
              cells: Pz,
              translucentCells: Yz,
              translucent: {
                mo: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: mz,
              targetOutline: Jz,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: tz,
              needsRender: !0
            }
          }(zz, Qt.current.fieldOfView)
        } catch (sz) {
          return console.error("Failed to start the 3D heatmap", sz), void bt(!0)
        }
        return Kt.current = tz, tz.engine.runRenderLoop((() => {
          const zz = tz.camera;
          zz.fov !== tz.targetFieldOfView && (zz.fov += (tz.targetFieldOfView - zz.fov) * (zz.fov > tz.targetFieldOfView ? .3 : .2), Math.abs(tz.targetFieldOfView - zz.fov) < 5e-4 && (zz.fov = tz.targetFieldOfView), tz.needsRender = !0), tz.needsRender && (tz.Kg.render(), tz.needsRender = !tz.Kg.isReady() || !tz.engine.areAllEffectsReady())
        })), () => {
          Kt.current = null, tz.engine.dispose()
        }
      }), []), (0, Fz.useEffect)((() => {
        const zz = Ut.current;
        if (!zz) return;
        const tz = () => {
            Bt.current = !1, Dt(document.pointerLockElement === zz)
          },
          sz = () => {
            Bt.current && (Bt.current = !1, Ht(!1))
          },
          Fz = tz => {
            const sz = !Qt.current.canLock && document.activeElement === zz && 0 !== (1 & tz.buttons);
            if (document.pointerLockElement !== zz && !sz) return;
            const Fz = Qt.current.mouseSensitivity * Cz;
            et((zz => function(zz, tz, sz) {
              const Fz = 2 * Math.PI;
              return {
                ...zz,
                heading: ((zz.heading + tz) % Fz + Fz) % Fz,
                pitch: Math.max(-dz, Math.min(dz, zz.pitch + sz))
              }
            }(null !== zz && void 0 !== zz ? zz : Qt.current.fittedView, tz.movementX * Fz, tz.movementY * Fz)))
          };
        return document.addEventListener("pointerlockchange", tz), document.addEventListener("pointerlockerror", sz), document.addEventListener("pointermove", Fz), () => {
          document.removeEventListener("pointerlockchange", tz), document.removeEventListener("pointerlockerror", sz), document.removeEventListener("pointermove", Fz), document.pointerLockElement === zz && (0, xz.e)()
        }
      }), []), (0, Fz.useEffect)((() => {
        const zz = Kt.current;
        null !== zz && 0 !== ut.width && 0 !== ut.height && (zz.engine.resize(), zz.needsRender = !0)
      }), [ut.width, ut.height]), (0, Fz.useEffect)((() => {
        const zz = Kt.current;
        null !== zz && (zz.targetFieldOfView = At * (xt ? Iz : 1))
      }), [At, xt]), (0, Fz.useEffect)((() => {
        const zz = Kt.current;
        null !== zz && function(zz, tz, sz, Fz) {
          const Wz = [],
            Xz = [],
            Oz = [],
            oz = [];
          for (let vz = 0; vz < tz.count; vz++) {
            const zz = tz.values[vz],
              Uz = (0, rz.D)(zz, sz, Fz);
            if (Uz <= 0) continue;
            const [Kz, uz, Nz] = (0, rz.w)((0, rz.N)(zz, sz)), bz = Uz >= 1;
            (bz ? Wz : Oz).push(tz.positions[3 * vz] + .5, tz.positions[3 * vz + 1] + .5, tz.positions[3 * vz + 2] + .5), (bz ? Xz : oz).push(Kz / 255, uz / 255, Nz / 255, Uz)
          }
          pz(zz.cells, Float32Array.from(Wz), Float32Array.from(Xz), Xz.length / 4), zz.translucent = {
            mo: Float32Array.from(Oz),
            colours: Float32Array.from(oz),
            count: oz.length / 4
          }, zz.translucentSortedFrom = null, fz(zz), zz.needsRender = !0
        }(zz, jt, sz, jz)
      }), [jt, sz, jz]), (0, Fz.useEffect)((() => {
        const zz = Kt.current;
        null !== zz && function(zz, tz) {
          zz.chunkGridOrigin = tz, zz.chunkGridCentre = null, Rz(zz)
        }(zz, hz.min)
      }), [hz]), (0, Fz.useEffect)((() => {
        const zz = Kt.current;
        null !== zz && function(zz, tz, sz) {
          const Fz = [],
            Wz = [];
          if (null !== tz) {
            const {
              positions: zz,
              colours: Xz,
              count: Oz
            } = tz.surface;
            for (let tz = 0; tz < Oz; tz++) {
              const Oz = [zz[3 * tz], zz[3 * tz + 1], zz[3 * tz + 2]];
              [0, 1, 2].every((zz => Oz[zz] >= sz.min[zz] - cz && Oz[zz] <= sz.max[zz] + cz)) && (Fz.push(Oz[0] - sz.min[0] + .5, Oz[1] - sz.min[1] + .5, Oz[2] - sz.min[2] + .5), Wz.push(Xz[3 * tz] / 255, Xz[3 * tz + 1] / 255, Xz[3 * tz + 2] / 255, 1))
            }
          }
          pz(zz.schematicBlocks, Float32Array.from(Fz), Float32Array.from(Wz), Wz.length / 4), zz.needsRender = !0
        }(zz, kz, hz)
      }), [kz, hz]), (0, Fz.useEffect)((() => {
        const zz = Kt.current;
        null !== zz && null !== zz.chunkGrid && (zz.chunkGrid.isVisible = Jt, zz.needsRender = !0)
      }), [Jt, hz]), (0, Fz.useEffect)((() => {
        const zz = Kt.current;
        null !== zz && function(zz, tz, sz) {
          const {
            camera: Fz
          } = zz;
          Fz.position.set(tz.position[0], tz.position[1], tz.position[2]), Fz.rotation.set(tz.pitch, tz.heading, 0);
          const Wz = (Az + 1) * wz.d.pw * Math.sqrt(3);
          Fz.maxZ = Math.max(Wz, Math.hypot(...Ot(tz.position, ot(Wt({
            min: [0, 0, 0],
            max: sz
          }), -1))) + 2 * Math.hypot(...sz)), Rz(zz), fz(zz), zz.needsRender = !0
        }(zz, ht, ct)
      }), [ht, ct]), (0, Fz.useEffect)((() => {
        const zz = Kt.current;
        null !== zz && (zz.targetOutline.isVisible = null !== kt, null !== kt && zz.targetOutline.position.set(kt.x - Zt[0] + .5, kt.y - Zt[1] + .5, kt.z - Zt[2] + .5), zz.needsRender = !0)
      }), [kt, Zt]);
      return (0, mz.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: vt,
        children: [(0, mz.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: Ut,
          style: {
            width: `${ut.width}px`,
            height: `${ut.height}px`
          },
          tabIndex: 0,
          "aria-label": Sz("3D heatmap"),
          onClick: () => {
            const zz = Ut.current;
            if (null === zz) return;
            if (zz.focus({
                preventScroll: !0
              }), wt || !gt) return;
            const tz = zz.requestPointerLock();
            tz instanceof Promise ? tz.catch((zz => {
              zz instanceof DOMException && ("WrongDocumentError" === zz.name || "NotSupportedError" === zz.name) && Ht(!1)
            })) : Bt.current = !0
          },
          ...it,
          onKeyDown: zz => {
            if (Yt && ez.has(zz.code)) return zz.preventDefault(), void(() => {
              const zz = Ut.current;
              null !== zz && document.pointerLockElement === zz ? (0, xz.e)() : null === zz || void 0 === zz || zz.blur()
            })();
            const tz = Zz[zz.code];
            return Yt && void 0 !== tz ? (zz.preventDefault(), void Lz(tz)) : Yt && (0, Yz.d)("replayPlayPause", zz.code) && !(0, Yz.d)("Zoom", zz.code) ? (zz.preventDefault(), void(zz.repeat || nz())) : Yt && zz.code === Gz ? (zz.preventDefault(), void lz()) : Yt && zz.code === Mz ? (zz.preventDefault(), void et(null)) : Yt && zz.code === yz ? (zz.preventDefault(), void It((zz => !zz))) : void it.onKeyDown(zz)
          },
          onFocus: () => {
            rt(!0)
          },
          onBlur: () => {
            rt(!1), it.onBlur()
          }
        }), Nt && (0, mz.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: Sz("3D view isn't available in this browser.")
        }), Yt && (0, mz.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, mz.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: ht.position.map(((zz, tz) => (zz + Zt[tz]).toFixed(2))).join(" ")
        }), Jt && (0, mz.jsx)(Vz, {
          heading: ht.heading,
          pitch: ht.pitch,
          onViewFrom: zz => {
            const tz = ot(zz, -1),
              sz = 0 === tz[1] ? {
                heading: Math.atan2(tz[0], tz[2]),
                pitch: 0
              } : {
                heading: ht.heading,
                pitch: tz[1] < 0 ? dz : -dz
              };
            et(st(Mt, yt, At, sz))
          },
          onTurn: (zz, tz) => {
            et((sz => function(zz, tz, sz, Fz) {
              return Ft(zz, tz, {
                heading: zz.heading + sz * az,
                pitch: Math.max(-dz, Math.min(dz, zz.pitch + Fz * az))
              })
            }(null !== sz && void 0 !== sz ? sz : Qt.current.fittedView, Wt(Mt), zz, tz)))
          },
          onFlip: () => {
            et((zz => function(zz, tz) {
              return Ft(zz, tz, {
                heading: zz.heading + Math.PI,
                pitch: -zz.pitch
              })
            }(null !== zz && void 0 !== zz ? zz : Qt.current.fittedView, Wt(Mt))))
          }
        }), null !== kt && (0, mz.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === qz ? Sz("studio:heatmapBlockReadout", {
            x: kt.x,
            y: kt.y,
            z: kt.z,
            count: (0, bz.R)(kt.value)
          }) : qz(kt.x, kt.y, kt.z, kt.value)
        }), (0, mz.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [iz, (0, mz.jsx)(Bz.Q, {
            active: null === Ct,
            onClick: () => {
              et(null)
            },
            children: (0, mz.jsx)(Pz.c, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function Vz(zz) {
      let {
        heading: tz,
        pitch: sz,
        onViewFrom: Wz,
        onTurn: Xz,
        onFlip: Oz
      } = zz;
      const {
        t: oz
      } = (0, Dz.B)(), vz = (0, Fz.useRef)(null), Uz = zt({
        heading: tz,
        pitch: sz
      }), Kz = tt(tz), uz = Ut(Uz, Kz), Nz = Lz + lz + 2, bz = iz.flatMap((zz => [1, -1].map((tz => {
        const sz = ot(zz.direction, tz);
        return {
          ...zz,
          sign: tz,
          direction: sz,
          endX: Nz + vt(sz, Kz) * Lz,
          endY: Nz - vt(sz, uz) * Lz,
          depth: vt(sz, Uz)
        }
      })))).sort(((zz, tz) => tz.depth - zz.depth));
      return (0, mz.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * Nz,
        height: 2 * Nz,
        "aria-hidden": !0,
        onPointerDown: zz => {
          var tz, sz;
          zz.currentTarget.setPointerCapture(zz.pointerId);
          const Fz = zz.target,
            Wz = Fz.getAttribute("data-end");
          vz.current = {
            pointerId: zz.pointerId,
            x: zz.clientX,
            y: zz.clientY,
            travel: 0,
            side: null === Wz ? null : null !== (tz = null === (sz = bz[Number(Wz)]) || void 0 === sz ? void 0 : sz.direction) && void 0 !== tz ? tz : null,
            isOnMiddle: Fz.hasAttribute("data-middle")
          }
        },
        onPointerMove: zz => {
          const tz = vz.current;
          if (null === tz || tz.pointerId !== zz.pointerId) return;
          const sz = zz.clientX - tz.x,
            Fz = zz.clientY - tz.y;
          tz.x = zz.clientX, tz.y = zz.clientY, tz.travel += Math.abs(sz) + Math.abs(Fz), tz.travel >= qz && Xz(sz, Fz)
        },
        onPointerUp: zz => {
          const tz = vz.current;
          vz.current = null, null === tz || tz.pointerId !== zz.pointerId || tz.travel >= qz || (null !== tz.side ? Wz(tz.side) : tz.isOnMiddle && Oz())
        },
        onPointerCancel: () => {
          vz.current = null
        },
        children: [bz.map(((zz, tz) => {
          const sz = zz.sign > 0;
          return (0, mz.jsxs)("g", {
            children: [(0, mz.jsx)("line", {
              x1: Nz,
              y1: Nz,
              x2: zz.endX,
              y2: zz.endY,
              stroke: zz.colour,
              strokeOpacity: sz ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, mz.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": tz,
              cx: zz.endX,
              cy: zz.endY,
              r: sz ? lz : lz - 1,
              fill: zz.colour,
              fillOpacity: sz ? 1 : .3,
              stroke: zz.colour,
              strokeWidth: sz ? 0 : 1.5,
              children: (0, mz.jsx)("title", {
                children: `${oz("View from")} ${sz?"+":"\u2212"}${zz.name}`
              })
            }), sz && (0, mz.jsx)("text", {
              pointerEvents: "none",
              x: zz.endX,
              y: zz.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: zz.name
            })]
          }, `${sz?"+":"-"}${zz.name}`)
        })), (0, mz.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: Nz,
          cy: Nz,
          r: nz,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, mz.jsx)("title", {
            children: oz("View from the opposite side")
          })
        })]
      })
    }

    function Rz(zz) {
      var tz, sz, Fz;
      const {
        chunkGridOrigin: Wz,
        camera: Xz
      } = zz;
      if (null === Wz) return;
      const Oz = [Xz.position.x, Xz.position.y, Xz.position.z],
        oz = [0, 2].map((zz => Math.floor((Oz[zz] + Wz[zz]) / wz.d.pw))),
        vz = zz.chunkGridCentre;
      if (null !== vz && vz.every(((zz, tz) => zz === oz[tz]))) return;
      const uz = null === (tz = null === (sz = zz.chunkGrid) || void 0 === sz ? void 0 : sz.isVisible) || void 0 === tz || tz;
      null === (Fz = zz.chunkGrid) || void 0 === Fz || Fz.dispose();
      const [bz, Dz] = [0, 2].map(((zz, tz) => {
        const sz = [];
        for (let Fz = oz[tz] - Az; Fz <= oz[tz] + Az + 1; Fz++) sz.push(Fz * wz.d.pw - Wz[zz]);
        return sz
      })), gz = -Wz[1], Hz = [];
      for (const Uz of Dz) Hz.push([new Kz.XD(bz[0], gz, Uz), new Kz.XD(bz[bz.length - 1], gz, Uz)]);
      for (const Uz of bz) Hz.push([new Kz.XD(Uz, gz, Dz[0]), new Kz.XD(Uz, gz, Dz[Dz.length - 1])]);
      const Bz = (0, Nz.d)("Heatmap3DChunkGrid", {
        lines: Hz
      }, zz.Kg);
      Bz.color = new Uz.Color3(.45, .6, .78), Bz.Ng = !1, Bz.isVisible = uz, zz.chunkGrid = Bz, zz.chunkGridCentre = oz, zz.needsRender = !0
    }

    function pz(zz, tz, sz, Fz) {
      zz.b_("matrix", function(zz, tz) {
        const sz = new Float32Array(16 * tz);
        for (let Fz = 0; Fz < tz; Fz++) {
          const tz = 16 * Fz;
          sz[tz] = 1, sz[tz + 5] = 1, sz[tz + 10] = 1, sz[tz + 12] = zz[3 * Fz], sz[tz + 13] = zz[3 * Fz + 1], sz[tz + 14] = zz[3 * Fz + 2], sz[tz + 15] = 1
        }
        return sz
      }(tz, Fz), 16, !0), zz.b_("color", sz, 4, !0), zz.isVisible = Fz > 0
    }

    function fz(zz) {
      const {
        camera: tz,
        translucent: sz
      } = zz, Fz = [tz.position.x, tz.position.y, tz.position.z], Wz = zz.translucentSortedFrom;
      if (null !== Wz && Math.hypot(Fz[0] - Wz[0], Fz[1] - Wz[1], Fz[2] - Wz[2]) < jz) return;
      zz.translucentSortedFrom = Fz;
      const Xz = new Float64Array(sz.count),
        Oz = new Uint32Array(sz.count);
      for (let Uz = 0; Uz < sz.count; Uz++) {
        const zz = sz.mo[3 * Uz] - Fz[0],
          tz = sz.mo[3 * Uz + 1] - Fz[1],
          Wz = sz.mo[3 * Uz + 2] - Fz[2];
        Xz[Uz] = zz * zz + tz * tz + Wz * Wz, Oz[Uz] = Uz
      }
      Oz.sort(((zz, tz) => Xz[tz] - Xz[zz]));
      const oz = new Float32Array(3 * sz.count),
        vz = new Float32Array(4 * sz.count);
      Oz.forEach(((zz, tz) => {
        oz.set(sz.mo.subarray(3 * zz, 3 * zz + 3), 3 * tz), vz.set(sz.colours.subarray(4 * zz, 4 * zz + 4), 4 * tz)
      })), pz(zz.translucentCells, oz, vz, sz.count), zz.needsRender = !0
    }

    function Ez(zz, tz) {
      const sz = (sz, Fz, Wz) => new Kz.XD(0 === sz ? zz[0] : tz[0], 0 === Fz ? zz[1] : tz[1], 0 === Wz ? zz[2] : tz[2]),
        Fz = [];
      for (const Wz of [0, 1])
        for (const zz of [0, 1]) Fz.push([sz(0, Wz, zz), sz(1, Wz, zz)], [sz(Wz, 0, zz), sz(Wz, 1, zz)], [sz(Wz, zz, 0), sz(Wz, zz, 1)]);
      return Fz
    }

    function zt(zz) {
      return [Math.sin(zz.heading) * Math.cos(zz.pitch), -Math.sin(zz.pitch), Math.cos(zz.heading) * Math.cos(zz.pitch)]
    }

    function tt(zz) {
      return [Math.cos(zz), 0, -Math.sin(zz)]
    }

    function st(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: hz,
        pitch: Qz
      };
      const Wz = [zz.max[0] - zz.min[0], zz.max[1] - zz.min[1], zz.max[2] - zz.min[2]],
        Xz = zt(Fz),
        Oz = tt(Fz.heading),
        oz = Ut(Xz, Oz),
        vz = Math.tan(sz / 2),
        Uz = vz * tz;
      let Kz = 1;
      for (const uz of [-Wz[0] / 2, Wz[0] / 2])
        for (const zz of [-Wz[1] / 2, Wz[1] / 2])
          for (const tz of [-Wz[2] / 2, Wz[2] / 2]) {
            const sz = [uz, zz, tz],
              Fz = vt(sz, Xz);
            Kz = Math.max(Kz, Math.abs(vt(sz, Oz)) / Uz - Fz, Math.abs(vt(sz, oz)) / vz - Fz)
          }
      return {
        position: Ot([zz.min[0] + Wz[0] / 2, zz.min[1] + Wz[1] / 2, zz.min[2] + Wz[2] / 2], ot(Xz, -Kz * kz)),
        heading: Fz.heading,
        pitch: Fz.pitch
      }
    }

    function Ft(zz, tz, sz) {
      const Fz = Xt(zz),
        Wz = Xt(sz),
        Xz = Ot(zz.position, ot(tz, -1)),
        Oz = [0, 1, 2].reduce(((zz, tz) => Ot(zz, ot(Wz[tz], vt(Xz, Fz[tz])))), [0, 0, 0]);
      return {
        position: Ot(tz, Oz),
        heading: sz.heading,
        pitch: sz.pitch
      }
    }

    function Wt(zz) {
      return ot(Ot(zz.min, zz.max), .5)
    }

    function Xt(zz) {
      const tz = zt(zz),
        sz = tt(zz.heading);
      return [tz, sz, Ut(tz, sz)]
    }

    function Ot(zz, tz) {
      return [zz[0] + tz[0], zz[1] + tz[1], zz[2] + tz[2]]
    }

    function ot(zz, tz) {
      return [zz[0] * tz, zz[1] * tz, zz[2] * tz]
    }

    function vt(zz, tz) {
      return zz[0] * tz[0] + zz[1] * tz[1] + zz[2] * tz[2]
    }

    function Ut(zz, tz) {
      return [zz[1] * tz[2] - zz[2] * tz[1], zz[2] * tz[0] - zz[0] * tz[2], zz[0] * tz[1] - zz[1] * tz[0]]
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);