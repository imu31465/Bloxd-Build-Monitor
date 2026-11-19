export const id = 240;
export const ids = [240];
export const modules = {
  38992: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => jz
    });
    bz(6189);
    var Ez = bz(56),
      nz = bz(38998),
      iz = bz(39250),
      lz = bz(39365),
      Mz = bz(39406),
      tz = bz(39425),
      Hz = bz(36709),
      Oz = bz(36514),
      pz = bz(39582),
      dz = bz(39624),
      Fz = (bz(39642), bz(1212)),
      Zz = bz(195),
      Rz = bz(1181),
      Kz = bz(20),
      wz = bz(2602),
      Xz = bz(1419),
      fz = bz(1047),
      sz = bz(6181),
      rz = bz(6195),
      oz = bz(4215),
      Nz = bz(1089);
    const vz = 1.2,
      xz = .2,
      Jz = .0066 * Math.PI / 180,
      Az = new Set(["Escape", "KeyG"]),
      Tz = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      Lz = "ArrowUp",
      Pz = new Set([...Object.keys(Tz), Lz, "ArrowDown"]),
      Gz = 32,
      az = 1,
      Vz = 10,
      mz = "F4",
      qz = "Period",
      hz = Math.PI / 2 - .001,
      Uz = Math.PI / 6,
      cz = Math.PI / 6,
      gz = 1.08,
      Sz = [{
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
      yz = 24,
      Dz = 7,
      Qz = 4,
      Wz = .01,
      ez = 4;

    function jz(zz) {
      let {
        heatmap: uz,
        scale: bz,
        fullyOpaqueFrom: az,
        bounds: Uz,
        fitBounds: cz,
        schematic: gz,
        controls: Sz,
        onStepTime: yz,
        onShowAllTime: Dz,
        onTogglePlaying: Qz,
        getReadout: ez = null
      } = zz;
      const {
        t: jz
      } = (0, Rz.F)(), {
        clientEscMenuOptions: iu
      } = (0, Kz.m)(["clientEscMenuOptions"]), tu = (0, Ez.useRef)(null), Hu = (0, Ez.useRef)(null), Ou = (0, Ez.useRef)(null), pu = (0, wz.e)(tu), [du, Fu] = (0, Ez.useState)(!1), [Zu, Ru] = (0, Ez.useState)(!1), [Ku, wu] = (0, Ez.useState)(!0), Xu = (0, Ez.useRef)(!1), [fu, su] = (0, Ez.useState)(!1), ru = Zu || !Ku && fu, [ou, Nu] = (0, Ez.useState)(!1), [vu, xu] = (0, Ez.useState)(!0), [Ju, Au] = (0, Ez.useState)(null), Tu = Uz.min, [Lu, Pu] = (0, Ez.useState)(Tu);
      Lu[0] === Tu[0] && Lu[1] === Tu[1] && Lu[2] === Tu[2] || (Pu(Tu), null !== Ju && Au({
        ...Ju,
        position: lu(Ju.position, lu(Lu, Mu(Tu, -1)))
      }));
      const Gu = (0, Ez.useMemo)((() => function(zz) {
          return [zz.max[0] - zz.min[0] + 1, zz.max[1] - zz.min[1] + 1, zz.max[2] - zz.min[2] + 1]
        }(Uz)), [Uz]),
        au = (0, Ez.useMemo)((() => function(zz, uz) {
          const bz = [],
            Ez = [];
          for (const [nz, iz] of Object.entries(zz.frequencies)) {
            const zz = Number(nz);
            for (const [nz, lz] of Object.entries(iz)) {
              const iz = Number(nz);
              for (const [nz, Mz] of Object.entries(lz)) Mz <= 0 || (bz.push(zz - uz[0], iz - uz[1], Number(nz) - uz[2]), Ez.push(Mz))
            }
          }
          return {
            positions: Int32Array.from(bz),
            values: Float64Array.from(Ez),
            count: Ez.length
          }
        }(uz, Tu)), [uz, Tu]),
        Vu = vz * iu.cameraFOV / 100,
        mu = pu.height > 0 ? pu.width / pu.height : 1,
        qu = (0, Ez.useMemo)((() => function(zz, uz) {
          return {
            min: [zz.min[0] - uz[0], zz.min[1] - uz[1], zz.min[2] - uz[2]],
            max: [zz.max[0] - uz[0] + 1, zz.max[1] - uz[1] + 1, zz.max[2] - uz[2] + 1]
          }
        }(cz, Tu)), [cz, Tu]),
        hu = bu(qu, mu, Vu),
        Uu = null !== Ju && void 0 !== Ju ? Ju : hu,
        cu = (0, Ez.useRef)({
          fittedView: hu,
          fieldOfView: Vu,
          mouseSensitivity: iu.mouseSensitivity,
          canLock: Ku
        });
      cu.current = {
        fittedView: hu,
        fieldOfView: Vu,
        mouseSensitivity: iu.mouseSensitivity,
        canLock: Ku
      };
      const gu = (0, Ez.useMemo)((() => {
          if (!ru) return null;
          const zz = (zz, bz, Ez) => {
              var nz, iz, lz;
              return null !== (nz = null === (iz = uz.frequencies[zz + Tu[0]]) || void 0 === iz || null === (lz = iz[bz + Tu[1]]) || void 0 === lz ? void 0 : lz[Ez + Tu[2]]) && void 0 !== nz ? nz : 0
            },
            Ez = function(zz, uz, bz, Ez) {
              let nz = 0,
                iz = 1 / 0;
              for (const pz of [0, 1, 2]) {
                if (0 === uz[pz]) {
                  if (zz[pz] < 0 || zz[pz] > bz[pz]) return null;
                  continue
                }
                const Ez = (0 - zz[pz]) / uz[pz],
                  lz = (bz[pz] - zz[pz]) / uz[pz];
                nz = Math.max(nz, Math.min(Ez, lz)), iz = Math.min(iz, Math.max(Ez, lz))
              }
              if (nz > iz) return null;
              const lz = [0, 1, 2].map((Ez => Math.min(bz[Ez] - 1, Math.max(0, Math.floor(zz[Ez] + uz[Ez] * nz))))),
                Mz = [0, 1, 2].map((zz => Math.sign(uz[zz]))),
                tz = [0, 1, 2].map((bz => {
                  if (0 === Mz[bz]) return 1 / 0;
                  return ((Mz[bz] > 0 ? lz[bz] + 1 : lz[bz]) - zz[bz]) / uz[bz]
                })),
                Hz = [0, 1, 2].map((zz => 0 === Mz[zz] ? 1 / 0 : Math.abs(1 / uz[zz])));
              let Oz = null;
              for (;;) {
                const zz = Ez(lz[0], lz[1], lz[2]);
                if (zz >= 1) return lz;
                zz > 0 && (Oz = [lz[0], lz[1], lz[2]]);
                const uz = tz[0] < tz[1] ? tz[0] < tz[2] ? 0 : 2 : tz[1] < tz[2] ? 1 : 2;
                if (tz[uz] > iz) return Oz;
                if (lz[uz] += Mz[uz], tz[uz] += Hz[uz], lz[uz] < 0 || lz[uz] >= bz[uz]) return Oz
              }
            }(Uu.position, zu(Uu), Gu, ((uz, Ez, nz) => (0, sz.y)(zz(uz, Ez, nz), bz, az)));
          return null === Ez ? null : {
            x: Ez[0] + Tu[0],
            y: Ez[1] + Tu[1],
            z: Ez[2] + Tu[2],
            value: zz(Ez[0], Ez[1], Ez[2])
          }
        }), [ru, uz, Tu, Uu, Gu, bz, az]),
        {
          keyHandlers: Su
        } = (0, rz.i)({
          isEnabled: ru,
          claimedKeyCodes: Pz,
          yd: zz => {
            Au((uz => function(zz, uz) {
              const bz = [Math.sin(zz.heading), 0, Math.cos(zz.heading)],
                Ez = lu(lu(Mu(bz, uz.forward), Mu(uu(zz.heading), uz.right)), [0, uz.up, 0]);
              return {
                ...zz,
                position: lu(zz.position, Ez)
              }
            }(null !== uz && void 0 !== uz ? uz : cu.current.fittedView, zz)))
          },
          onZoomChange: Nu
        });
      (0, Ez.useEffect)((() => {
        const zz = Hu.current;
        if (!zz) return;
        let uz;
        try {
          uz = function(zz, uz) {
            const bz = new nz.c(zz, !0, {
                stencil: !1
              }, !0),
              Ez = new iz.e(bz),
              [Fz, Zz, Rz] = sz.L;
            Ez.clearColor = new Hz.d(Fz / 255, Zz / 255, Rz / 255, 1);
            const Kz = new lz.d("Heatmap3DCamera", Oz.ER.Zero(), Ez);
            Kz.fov = uz, Kz.minZ = .05;
            const wz = new Mz.c("Heatmap3DLight", new Oz.ER(.4, 1, -.6), Ez);
            wz.diffuse = Hz.Color3.White(), wz.groundColor = Hz.Color3.Black(), wz.specular = Hz.Color3.Black();
            const Xz = new tz.StandardMaterial("Heatmap3DCellMaterial", Ez);
            Xz.diffuseColor = new Hz.Color3(.4, .4, .4), Xz.emissiveColor = new Hz.Color3(.62, .62, .62), Xz.specularColor = Hz.Color3.Black();
            const fz = (0, pz.d)("Heatmap3DCells", {
              size: 1
            }, Ez);
            fz.material = Xz, fz.pK = !1, fz.bR = !0, fz.isVisible = !1;
            const rz = (0, pz.d)("Heatmap3DTranslucentCells", {
              size: 1
            }, Ez);
            rz.material = Xz, rz.hasVertexAlpha = !0, rz.pK = !1, rz.bR = !0, rz.isVisible = !1;
            const oz = new tz.StandardMaterial("Heatmap3DSchematicMaterial", Ez);
            oz.diffuseColor = new Hz.Color3(.6, .6, .6), oz.emissiveColor = new Hz.Color3(.4, .4, .4), oz.specularColor = Hz.Color3.Black();
            const Nz = (0, pz.d)("Heatmap3DSchematicBlocks", {
              size: 1
            }, Ez);
            Nz.material = oz, Nz.pK = !1, Nz.bR = !0, Nz.isVisible = !1;
            const vz = (0, dz.e)("Heatmap3DTarget", {
              lines: kz([-.52, -.52, -.52], [.52, .52, .52])
            }, Ez);
            return vz.color = new Hz.Color3(.06, .14, .23), vz.renderingGroupId = 1, vz.pK = !1, vz.isVisible = !1, {
              engine: bz,
              tK: Ez,
              camera: Kz,
              cells: fz,
              translucentCells: rz,
              translucent: {
                fi: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: Nz,
              targetOutline: vz,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: uz,
              needsRender: !0
            }
          }(zz, cu.current.fieldOfView)
        } catch (bz) {
          return console.error("Failed to start the 3D heatmap", bz), void Fu(!0)
        }
        return Ou.current = uz, uz.engine.runRenderLoop((() => {
          const zz = uz.camera;
          zz.fov !== uz.targetFieldOfView && (zz.fov += (uz.targetFieldOfView - zz.fov) * (zz.fov > uz.targetFieldOfView ? .3 : .2), Math.abs(uz.targetFieldOfView - zz.fov) < 5e-4 && (zz.fov = uz.targetFieldOfView), uz.needsRender = !0), uz.needsRender && (uz.tK.render(), uz.needsRender = !uz.tK.isReady() || !uz.engine.areAllEffectsReady())
        })), () => {
          Ou.current = null, uz.engine.dispose()
        }
      }), []), (0, Ez.useEffect)((() => {
        const zz = Hu.current;
        if (!zz) return;
        const uz = () => {
            Xu.current = !1, Ru(document.pointerLockElement === zz)
          },
          bz = () => {
            Xu.current && (Xu.current = !1, wu(!1))
          },
          Ez = uz => {
            const bz = !cu.current.canLock && document.activeElement === zz && 0 !== (1 & uz.buttons);
            if (document.pointerLockElement !== zz && !bz) return;
            const Ez = cu.current.mouseSensitivity * Jz;
            Au((zz => function(zz, uz, bz) {
              const Ez = 2 * Math.PI;
              return {
                ...zz,
                heading: ((zz.heading + uz) % Ez + Ez) % Ez,
                pitch: Math.max(-hz, Math.min(hz, zz.pitch + bz))
              }
            }(null !== zz && void 0 !== zz ? zz : cu.current.fittedView, uz.movementX * Ez, uz.movementY * Ez)))
          };
        return document.addEventListener("pointerlockchange", uz), document.addEventListener("pointerlockerror", bz), document.addEventListener("pointermove", Ez), () => {
          document.removeEventListener("pointerlockchange", uz), document.removeEventListener("pointerlockerror", bz), document.removeEventListener("pointermove", Ez), document.pointerLockElement === zz && (0, oz.b)()
        }
      }), []), (0, Ez.useEffect)((() => {
        const zz = Ou.current;
        null !== zz && 0 !== pu.width && 0 !== pu.height && (zz.engine.resize(), zz.needsRender = !0)
      }), [pu.width, pu.height]), (0, Ez.useEffect)((() => {
        const zz = Ou.current;
        null !== zz && (zz.targetFieldOfView = Vu * (ou ? xz : 1))
      }), [Vu, ou]), (0, Ez.useEffect)((() => {
        const zz = Ou.current;
        null !== zz && function(zz, uz, bz, Ez) {
          const nz = [],
            iz = [],
            lz = [],
            Mz = [];
          for (let tz = 0; tz < uz.count; tz++) {
            const zz = uz.values[tz],
              Hz = (0, sz.y)(zz, bz, Ez);
            if (Hz <= 0) continue;
            const [Oz, pz, dz] = (0, sz.q)((0, sz.G)(zz, bz)), Fz = Hz >= 1;
            (Fz ? nz : lz).push(uz.positions[3 * tz] + .5, uz.positions[3 * tz + 1] + .5, uz.positions[3 * tz + 2] + .5), (Fz ? iz : Mz).push(Oz / 255, pz / 255, dz / 255, Hz)
          }
          Cz(zz.cells, Float32Array.from(nz), Float32Array.from(iz), iz.length / 4), zz.translucent = {
            fi: Float32Array.from(lz),
            colours: Float32Array.from(Mz),
            count: Mz.length / 4
          }, zz.translucentSortedFrom = null, Yz(zz), zz.needsRender = !0
        }(zz, au, bz, az)
      }), [au, bz, az]), (0, Ez.useEffect)((() => {
        const zz = Ou.current;
        null !== zz && function(zz, uz) {
          zz.chunkGridOrigin = uz, zz.chunkGridCentre = null, Bz(zz)
        }(zz, Uz.min)
      }), [Uz]), (0, Ez.useEffect)((() => {
        const zz = Ou.current;
        null !== zz && function(zz, uz, bz) {
          const Ez = [],
            nz = [];
          if (null !== uz) {
            const {
              positions: zz,
              colours: iz,
              count: lz
            } = uz.surface;
            for (let uz = 0; uz < lz; uz++) {
              const lz = [zz[3 * uz], zz[3 * uz + 1], zz[3 * uz + 2]];
              [0, 1, 2].every((zz => lz[zz] >= bz.min[zz] - Gz && lz[zz] <= bz.max[zz] + Gz)) && (Ez.push(lz[0] - bz.min[0] + .5, lz[1] - bz.min[1] + .5, lz[2] - bz.min[2] + .5), nz.push(iz[3 * uz] / 255, iz[3 * uz + 1] / 255, iz[3 * uz + 2] / 255, 1))
            }
          }
          Cz(zz.schematicBlocks, Float32Array.from(Ez), Float32Array.from(nz), nz.length / 4), zz.needsRender = !0
        }(zz, gz, Uz)
      }), [gz, Uz]), (0, Ez.useEffect)((() => {
        const zz = Ou.current;
        null !== zz && null !== zz.chunkGrid && (zz.chunkGrid.isVisible = vu, zz.needsRender = !0)
      }), [vu, Uz]), (0, Ez.useEffect)((() => {
        const zz = Ou.current;
        null !== zz && function(zz, uz, bz) {
          const {
            camera: Ez
          } = zz;
          Ez.position.set(uz.position[0], uz.position[1], uz.position[2]), Ez.rotation.set(uz.pitch, uz.heading, 0);
          const nz = (Vz + 1) * Zz.e.IZ * Math.sqrt(3);
          Ez.maxZ = Math.max(nz, Math.hypot(...lu(uz.position, Mu(nu({
            min: [0, 0, 0],
            max: bz
          }), -1))) + 2 * Math.hypot(...bz)), Bz(zz), Yz(zz), zz.needsRender = !0
        }(zz, Uu, Gu)
      }), [Uu, Gu]), (0, Ez.useEffect)((() => {
        const zz = Ou.current;
        null !== zz && (zz.targetOutline.isVisible = null !== gu, null !== gu && zz.targetOutline.position.set(gu.x - Tu[0] + .5, gu.y - Tu[1] + .5, gu.z - Tu[2] + .5), zz.needsRender = !0)
      }), [gu, Tu]);
      return (0, Nz.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: tu,
        children: [(0, Nz.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: Hu,
          style: {
            width: `${pu.width}px`,
            height: `${pu.height}px`
          },
          tabIndex: 0,
          "aria-label": jz("3D heatmap"),
          onClick: () => {
            const zz = Hu.current;
            if (null === zz) return;
            if (zz.focus({
                preventScroll: !0
              }), Zu || !Ku) return;
            const uz = zz.requestPointerLock();
            uz instanceof Promise ? uz.catch((zz => {
              zz instanceof DOMException && ("WrongDocumentError" === zz.name || "NotSupportedError" === zz.name) && wu(!1)
            })) : Xu.current = !0
          },
          ...Su,
          onKeyDown: zz => {
            if (ru && Az.has(zz.code)) return zz.preventDefault(), void(() => {
              const zz = Hu.current;
              null !== zz && document.pointerLockElement === zz ? (0, oz.b)() : null === zz || void 0 === zz || zz.blur()
            })();
            const uz = Tz[zz.code];
            return ru && void 0 !== uz ? (zz.preventDefault(), void yz(uz)) : ru && (0, rz.e)("replayPlayPause", zz.code) && !(0, rz.e)("Zoom", zz.code) ? (zz.preventDefault(), void(zz.repeat || Qz())) : ru && zz.code === Lz ? (zz.preventDefault(), void Dz()) : ru && zz.code === qz ? (zz.preventDefault(), void Au(null)) : ru && zz.code === mz ? (zz.preventDefault(), void xu((zz => !zz))) : void Su.onKeyDown(zz)
          },
          onFocus: () => {
            su(!0)
          },
          onBlur: () => {
            su(!1), Su.onBlur()
          }
        }), du && (0, Nz.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: jz("3D view isn't available in this browser.")
        }), ru && (0, Nz.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, Nz.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: Uu.position.map(((zz, uz) => (zz + Tu[uz]).toFixed(2))).join(" ")
        }), vu && (0, Nz.jsx)(Iz, {
          heading: Uu.heading,
          pitch: Uu.pitch,
          onViewFrom: zz => {
            const uz = Mu(zz, -1),
              bz = 0 === uz[1] ? {
                heading: Math.atan2(uz[0], uz[2]),
                pitch: 0
              } : {
                heading: Uu.heading,
                pitch: uz[1] < 0 ? hz : -hz
              };
            Au(bu(qu, mu, Vu, bz))
          },
          onTurn: (zz, uz) => {
            Au((bz => function(zz, uz, bz, Ez) {
              return Eu(zz, uz, {
                heading: zz.heading + bz * Wz,
                pitch: Math.max(-hz, Math.min(hz, zz.pitch + Ez * Wz))
              })
            }(null !== bz && void 0 !== bz ? bz : cu.current.fittedView, nu(qu), zz, uz)))
          },
          onFlip: () => {
            Au((zz => function(zz, uz) {
              return Eu(zz, uz, {
                heading: zz.heading + Math.PI,
                pitch: -zz.pitch
              })
            }(null !== zz && void 0 !== zz ? zz : cu.current.fittedView, nu(qu))))
          }
        }), null !== gu && (0, Nz.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === ez ? jz("studio:heatmapBlockReadout", {
            x: gu.x,
            y: gu.y,
            z: gu.z,
            count: (0, Fz.T)(gu.value)
          }) : ez(gu.x, gu.y, gu.z, gu.value)
        }), (0, Nz.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [Sz, (0, Nz.jsx)(Xz.V, {
            active: null === Ju,
            onClick: () => {
              Au(null)
            },
            children: (0, Nz.jsx)(fz.c, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function Iz(zz) {
      let {
        heading: uz,
        pitch: bz,
        onViewFrom: nz,
        onTurn: iz,
        onFlip: lz
      } = zz;
      const {
        t: Mz
      } = (0, Rz.F)(), tz = (0, Ez.useRef)(null), Hz = zu({
        heading: uz,
        pitch: bz
      }), Oz = uu(uz), pz = Hu(Hz, Oz), dz = yz + Dz + 2, Fz = Sz.flatMap((zz => [1, -1].map((uz => {
        const bz = Mu(zz.direction, uz);
        return {
          ...zz,
          sign: uz,
          direction: bz,
          endX: dz + tu(bz, Oz) * yz,
          endY: dz - tu(bz, pz) * yz,
          depth: tu(bz, Hz)
        }
      })))).sort(((zz, uz) => uz.depth - zz.depth));
      return (0, Nz.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * dz,
        height: 2 * dz,
        "aria-hidden": !0,
        onPointerDown: zz => {
          var uz, bz;
          zz.currentTarget.setPointerCapture(zz.pointerId);
          const Ez = zz.target,
            nz = Ez.getAttribute("data-end");
          tz.current = {
            pointerId: zz.pointerId,
            x: zz.clientX,
            y: zz.clientY,
            travel: 0,
            side: null === nz ? null : null !== (uz = null === (bz = Fz[Number(nz)]) || void 0 === bz ? void 0 : bz.direction) && void 0 !== uz ? uz : null,
            isOnMiddle: Ez.hasAttribute("data-middle")
          }
        },
        onPointerMove: zz => {
          const uz = tz.current;
          if (null === uz || uz.pointerId !== zz.pointerId) return;
          const bz = zz.clientX - uz.x,
            Ez = zz.clientY - uz.y;
          uz.x = zz.clientX, uz.y = zz.clientY, uz.travel += Math.abs(bz) + Math.abs(Ez), uz.travel >= ez && iz(bz, Ez)
        },
        onPointerUp: zz => {
          const uz = tz.current;
          tz.current = null, null === uz || uz.pointerId !== zz.pointerId || uz.travel >= ez || (null !== uz.side ? nz(uz.side) : uz.isOnMiddle && lz())
        },
        onPointerCancel: () => {
          tz.current = null
        },
        children: [Fz.map(((zz, uz) => {
          const bz = zz.sign > 0;
          return (0, Nz.jsxs)("g", {
            children: [(0, Nz.jsx)("line", {
              x1: dz,
              y1: dz,
              x2: zz.endX,
              y2: zz.endY,
              stroke: zz.colour,
              strokeOpacity: bz ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, Nz.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": uz,
              cx: zz.endX,
              cy: zz.endY,
              r: bz ? Dz : Dz - 1,
              fill: zz.colour,
              fillOpacity: bz ? 1 : .3,
              stroke: zz.colour,
              strokeWidth: bz ? 0 : 1.5,
              children: (0, Nz.jsx)("title", {
                children: `${Mz("View from")} ${bz?"+":"\u2212"}${zz.name}`
              })
            }), bz && (0, Nz.jsx)("text", {
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
          }, `${bz?"+":"-"}${zz.name}`)
        })), (0, Nz.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: dz,
          cy: dz,
          r: Qz,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, Nz.jsx)("title", {
            children: Mz("View from the opposite side")
          })
        })]
      })
    }

    function Bz(zz) {
      var uz, bz, Ez;
      const {
        chunkGridOrigin: nz,
        camera: iz
      } = zz;
      if (null === nz) return;
      const lz = [iz.position.x, iz.position.y, iz.position.z],
        Mz = [0, 2].map((zz => Math.floor((lz[zz] + nz[zz]) / Zz.e.IZ))),
        tz = zz.chunkGridCentre;
      if (null !== tz && tz.every(((zz, uz) => zz === Mz[uz]))) return;
      const pz = null === (uz = null === (bz = zz.chunkGrid) || void 0 === bz ? void 0 : bz.isVisible) || void 0 === uz || uz;
      null === (Ez = zz.chunkGrid) || void 0 === Ez || Ez.dispose();
      const [Fz, Rz] = [0, 2].map(((zz, uz) => {
        const bz = [];
        for (let Ez = Mz[uz] - Vz; Ez <= Mz[uz] + Vz + 1; Ez++) bz.push(Ez * Zz.e.IZ - nz[zz]);
        return bz
      })), Kz = -nz[1], wz = [];
      for (const Hz of Rz) wz.push([new Oz.ER(Fz[0], Kz, Hz), new Oz.ER(Fz[Fz.length - 1], Kz, Hz)]);
      for (const Hz of Fz) wz.push([new Oz.ER(Hz, Kz, Rz[0]), new Oz.ER(Hz, Kz, Rz[Rz.length - 1])]);
      const Xz = (0, dz.e)("Heatmap3DChunkGrid", {
        lines: wz
      }, zz.tK);
      Xz.color = new Hz.Color3(.45, .6, .78), Xz.pK = !1, Xz.isVisible = pz, zz.chunkGrid = Xz, zz.chunkGridCentre = Mz, zz.needsRender = !0
    }

    function Cz(zz, uz, bz, Ez) {
      zz.v_("matrix", function(zz, uz) {
        const bz = new Float32Array(16 * uz);
        for (let Ez = 0; Ez < uz; Ez++) {
          const uz = 16 * Ez;
          bz[uz] = 1, bz[uz + 5] = 1, bz[uz + 10] = 1, bz[uz + 12] = zz[3 * Ez], bz[uz + 13] = zz[3 * Ez + 1], bz[uz + 14] = zz[3 * Ez + 2], bz[uz + 15] = 1
        }
        return bz
      }(uz, Ez), 16, !0), zz.v_("color", bz, 4, !0), zz.isVisible = Ez > 0
    }

    function Yz(zz) {
      const {
        camera: uz,
        translucent: bz
      } = zz, Ez = [uz.position.x, uz.position.y, uz.position.z], nz = zz.translucentSortedFrom;
      if (null !== nz && Math.hypot(Ez[0] - nz[0], Ez[1] - nz[1], Ez[2] - nz[2]) < az) return;
      zz.translucentSortedFrom = Ez;
      const iz = new Float64Array(bz.count),
        lz = new Uint32Array(bz.count);
      for (let Hz = 0; Hz < bz.count; Hz++) {
        const zz = bz.fi[3 * Hz] - Ez[0],
          uz = bz.fi[3 * Hz + 1] - Ez[1],
          nz = bz.fi[3 * Hz + 2] - Ez[2];
        iz[Hz] = zz * zz + uz * uz + nz * nz, lz[Hz] = Hz
      }
      lz.sort(((zz, uz) => iz[uz] - iz[zz]));
      const Mz = new Float32Array(3 * bz.count),
        tz = new Float32Array(4 * bz.count);
      lz.forEach(((zz, uz) => {
        Mz.set(bz.fi.subarray(3 * zz, 3 * zz + 3), 3 * uz), tz.set(bz.colours.subarray(4 * zz, 4 * zz + 4), 4 * uz)
      })), Cz(zz.translucentCells, Mz, tz, bz.count), zz.needsRender = !0
    }

    function kz(zz, uz) {
      const bz = (bz, Ez, nz) => new Oz.ER(0 === bz ? zz[0] : uz[0], 0 === Ez ? zz[1] : uz[1], 0 === nz ? zz[2] : uz[2]),
        Ez = [];
      for (const nz of [0, 1])
        for (const zz of [0, 1]) Ez.push([bz(0, nz, zz), bz(1, nz, zz)], [bz(nz, 0, zz), bz(nz, 1, zz)], [bz(nz, zz, 0), bz(nz, zz, 1)]);
      return Ez
    }

    function zu(zz) {
      return [Math.sin(zz.heading) * Math.cos(zz.pitch), -Math.sin(zz.pitch), Math.cos(zz.heading) * Math.cos(zz.pitch)]
    }

    function uu(zz) {
      return [Math.cos(zz), 0, -Math.sin(zz)]
    }

    function bu(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: Uz,
        pitch: cz
      };
      const nz = [zz.max[0] - zz.min[0], zz.max[1] - zz.min[1], zz.max[2] - zz.min[2]],
        iz = zu(Ez),
        lz = uu(Ez.heading),
        Mz = Hu(iz, lz),
        tz = Math.tan(bz / 2),
        Hz = tz * uz;
      let Oz = 1;
      for (const pz of [-nz[0] / 2, nz[0] / 2])
        for (const zz of [-nz[1] / 2, nz[1] / 2])
          for (const uz of [-nz[2] / 2, nz[2] / 2]) {
            const bz = [pz, zz, uz],
              Ez = tu(bz, iz);
            Oz = Math.max(Oz, Math.abs(tu(bz, lz)) / Hz - Ez, Math.abs(tu(bz, Mz)) / tz - Ez)
          }
      return {
        position: lu([zz.min[0] + nz[0] / 2, zz.min[1] + nz[1] / 2, zz.min[2] + nz[2] / 2], Mu(iz, -Oz * gz)),
        heading: Ez.heading,
        pitch: Ez.pitch
      }
    }

    function Eu(zz, uz, bz) {
      const Ez = iu(zz),
        nz = iu(bz),
        iz = lu(zz.position, Mu(uz, -1)),
        lz = [0, 1, 2].reduce(((zz, uz) => lu(zz, Mu(nz[uz], tu(iz, Ez[uz])))), [0, 0, 0]);
      return {
        position: lu(uz, lz),
        heading: bz.heading,
        pitch: bz.pitch
      }
    }

    function nu(zz) {
      return Mu(lu(zz.min, zz.max), .5)
    }

    function iu(zz) {
      const uz = zu(zz),
        bz = uu(zz.heading);
      return [uz, bz, Hu(uz, bz)]
    }

    function lu(zz, uz) {
      return [zz[0] + uz[0], zz[1] + uz[1], zz[2] + uz[2]]
    }

    function Mu(zz, uz) {
      return [zz[0] * uz, zz[1] * uz, zz[2] * uz]
    }

    function tu(zz, uz) {
      return zz[0] * uz[0] + zz[1] * uz[1] + zz[2] * uz[2]
    }

    function Hu(zz, uz) {
      return [zz[1] * uz[2] - zz[2] * uz[1], zz[2] * uz[0] - zz[0] * uz[2], zz[0] * uz[1] - zz[1] * uz[0]]
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);