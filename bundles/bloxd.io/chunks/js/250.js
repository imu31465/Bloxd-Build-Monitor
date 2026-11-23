export const id = 250;
export const ids = [250];
export const modules = {
  39626: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => LC
    });
    ZC(6473);
    var QC = ZC(48),
      wC = ZC(39635),
      bC = ZC(39902),
      nC = ZC(40031),
      fC = ZC(40076),
      oC = ZC(40092),
      qC = ZC(37138),
      FC = ZC(36961),
      WC = ZC(40219),
      NC = ZC(40281),
      MC = (ZC(40308), ZC(1169)),
      gC = ZC(184),
      SC = ZC(1143),
      pC = ZC(20),
      PC = ZC(2734),
      GC = ZC(1388),
      RC = ZC(1013),
      AC = ZC(6466),
      xC = ZC(6475),
      JC = ZC(4369),
      IC = ZC(1056);
    const iC = 1.2,
      vC = .2,
      eC = .0066 * Math.PI / 180,
      hC = new Set(["Escape", "KeyG"]),
      KC = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      YC = "ArrowUp",
      dC = new Set([...Object.keys(KC), YC, "ArrowDown"]),
      mC = 32,
      HC = 1,
      EC = 10,
      lC = "F4",
      XC = "Period",
      cC = Math.PI / 2 - .001,
      uC = Math.PI / 6,
      rC = Math.PI / 6,
      sC = 1.08,
      TC = [{
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
      aC = 24,
      tC = 7,
      DC = 4,
      jC = .01,
      yC = 4;

    function LC(CC) {
      let {
        heatmap: zC,
        scale: ZC,
        fullyOpaqueFrom: HC,
        bounds: uC,
        fitBounds: rC,
        schematic: sC,
        controls: TC,
        onStepTime: aC,
        onShowAllTime: tC,
        onTogglePlaying: DC,
        getReadout: yC = null
      } = CC;
      const {
        t: LC
      } = (0, SC.y)(), {
        clientEscMenuOptions: bz
      } = (0, pC.k)(["clientEscMenuOptions"]), oz = (0, QC.useRef)(null), qz = (0, QC.useRef)(null), Fz = (0, QC.useRef)(null), Wz = (0, PC.e)(oz), [Nz, Mz] = (0, QC.useState)(!1), [gz, Sz] = (0, QC.useState)(!1), [pz, Pz] = (0, QC.useState)(!0), Gz = (0, QC.useRef)(!1), [Rz, Az] = (0, QC.useState)(!1), xz = gz || !pz && Rz, [Jz, Iz] = (0, QC.useState)(!1), [iz, vz] = (0, QC.useState)(!0), [ez, hz] = (0, QC.useState)(null), Kz = uC.min, [Yz, dz] = (0, QC.useState)(Kz);
      Yz[0] === Kz[0] && Yz[1] === Kz[1] && Yz[2] === Kz[2] || (dz(Kz), null !== ez && hz({
        ...ez,
        position: nz(ez.position, nz(Yz, fz(Kz, -1)))
      }));
      const mz = (0, QC.useMemo)((() => function(CC) {
          return [CC.max[0] - CC.min[0] + 1, CC.max[1] - CC.min[1] + 1, CC.max[2] - CC.min[2] + 1]
        }(uC)), [uC]),
        Hz = (0, QC.useMemo)((() => function(CC, zC) {
          const ZC = [],
            QC = [];
          for (const [wC, bC] of Object.entries(CC.frequencies)) {
            const CC = Number(wC);
            for (const [wC, nC] of Object.entries(bC)) {
              const bC = Number(wC);
              for (const [wC, fC] of Object.entries(nC)) fC <= 0 || (ZC.push(CC - zC[0], bC - zC[1], Number(wC) - zC[2]), QC.push(fC))
            }
          }
          return {
            positions: Int32Array.from(ZC),
            values: Float64Array.from(QC),
            count: QC.length
          }
        }(zC, Kz)), [zC, Kz]),
        Ez = iC * bz.cameraFOV / 100,
        lz = Wz.height > 0 ? Wz.width / Wz.height : 1,
        Xz = (0, QC.useMemo)((() => function(CC, zC) {
          return {
            min: [CC.min[0] - zC[0], CC.min[1] - zC[1], CC.min[2] - zC[2]],
            max: [CC.max[0] - zC[0] + 1, CC.max[1] - zC[1] + 1, CC.max[2] - zC[2] + 1]
          }
        }(rC, Kz)), [rC, Kz]),
        cz = Zz(Xz, lz, Ez),
        uz = null !== ez && void 0 !== ez ? ez : cz,
        rz = (0, QC.useRef)({
          fittedView: cz,
          fieldOfView: Ez,
          mouseSensitivity: bz.mouseSensitivity,
          canLock: pz
        });
      rz.current = {
        fittedView: cz,
        fieldOfView: Ez,
        mouseSensitivity: bz.mouseSensitivity,
        canLock: pz
      };
      const sz = (0, QC.useMemo)((() => {
          if (!xz) return null;
          const CC = (CC, ZC, QC) => {
              var wC, bC, nC;
              return null !== (wC = null === (bC = zC.frequencies[CC + Kz[0]]) || void 0 === bC || null === (nC = bC[ZC + Kz[1]]) || void 0 === nC ? void 0 : nC[QC + Kz[2]]) && void 0 !== wC ? wC : 0
            },
            QC = function(CC, zC, ZC, QC) {
              let wC = 0,
                bC = 1 / 0;
              for (const WC of [0, 1, 2]) {
                if (0 === zC[WC]) {
                  if (CC[WC] < 0 || CC[WC] > ZC[WC]) return null;
                  continue
                }
                const QC = (0 - CC[WC]) / zC[WC],
                  nC = (ZC[WC] - CC[WC]) / zC[WC];
                wC = Math.max(wC, Math.min(QC, nC)), bC = Math.min(bC, Math.max(QC, nC))
              }
              if (wC > bC) return null;
              const nC = [0, 1, 2].map((QC => Math.min(ZC[QC] - 1, Math.max(0, Math.floor(CC[QC] + zC[QC] * wC))))),
                fC = [0, 1, 2].map((CC => Math.sign(zC[CC]))),
                oC = [0, 1, 2].map((ZC => {
                  if (0 === fC[ZC]) return 1 / 0;
                  return ((fC[ZC] > 0 ? nC[ZC] + 1 : nC[ZC]) - CC[ZC]) / zC[ZC]
                })),
                qC = [0, 1, 2].map((CC => 0 === fC[CC] ? 1 / 0 : Math.abs(1 / zC[CC])));
              let FC = null;
              for (;;) {
                const CC = QC(nC[0], nC[1], nC[2]);
                if (CC >= 1) return nC;
                CC > 0 && (FC = [nC[0], nC[1], nC[2]]);
                const zC = oC[0] < oC[1] ? oC[0] < oC[2] ? 0 : 2 : oC[1] < oC[2] ? 1 : 2;
                if (oC[zC] > bC) return FC;
                if (nC[zC] += fC[zC], oC[zC] += qC[zC], nC[zC] < 0 || nC[zC] >= ZC[zC]) return FC
              }
            }(uz.position, Cz(uz), mz, ((zC, QC, wC) => (0, AC.y)(CC(zC, QC, wC), ZC, HC)));
          return null === QC ? null : {
            x: QC[0] + Kz[0],
            y: QC[1] + Kz[1],
            z: QC[2] + Kz[2],
            value: CC(QC[0], QC[1], QC[2])
          }
        }), [xz, zC, Kz, uz, mz, ZC, HC]),
        {
          keyHandlers: Tz
        } = (0, xC.g)({
          isEnabled: xz,
          claimedKeyCodes: dC,
          AN: CC => {
            hz((zC => function(CC, zC) {
              const ZC = [Math.sin(CC.heading), 0, Math.cos(CC.heading)],
                QC = nz(nz(fz(ZC, zC.forward), fz(zz(CC.heading), zC.right)), [0, zC.up, 0]);
              return {
                ...CC,
                position: nz(CC.position, QC)
              }
            }(null !== zC && void 0 !== zC ? zC : rz.current.fittedView, CC)))
          },
          onZoomChange: Iz
        });
      (0, QC.useEffect)((() => {
        const CC = qz.current;
        if (!CC) return;
        let zC;
        try {
          zC = function(CC, zC) {
            const ZC = new wC.d(CC, !0, {
                stencil: !1
              }, !0),
              QC = new bC.e(ZC),
              [MC, gC, SC] = AC.L;
            QC.clearColor = new qC.e(MC / 255, gC / 255, SC / 255, 1);
            const pC = new nC.d("Heatmap3DCamera", FC.Eg.Zero(), QC);
            pC.fov = zC, pC.minZ = .05;
            const PC = new fC.e("Heatmap3DLight", new FC.Eg(.4, 1, -.6), QC);
            PC.diffuse = qC.Color3.White(), PC.groundColor = qC.Color3.Black(), PC.specular = qC.Color3.Black();
            const GC = new oC.StandardMaterial("Heatmap3DCellMaterial", QC);
            GC.diffuseColor = new qC.Color3(.4, .4, .4), GC.emissiveColor = new qC.Color3(.62, .62, .62), GC.specularColor = qC.Color3.Black();
            const RC = (0, WC.b)("Heatmap3DCells", {
              size: 1
            }, QC);
            RC.material = GC, RC.tS = !1, RC.Hg = !0, RC.isVisible = !1;
            const xC = (0, WC.b)("Heatmap3DTranslucentCells", {
              size: 1
            }, QC);
            xC.material = GC, xC.hasVertexAlpha = !0, xC.tS = !1, xC.Hg = !0, xC.isVisible = !1;
            const JC = new oC.StandardMaterial("Heatmap3DSchematicMaterial", QC);
            JC.diffuseColor = new qC.Color3(.6, .6, .6), JC.emissiveColor = new qC.Color3(.4, .4, .4), JC.specularColor = qC.Color3.Black();
            const IC = (0, WC.b)("Heatmap3DSchematicBlocks", {
              size: 1
            }, QC);
            IC.material = JC, IC.tS = !1, IC.Hg = !0, IC.isVisible = !1;
            const iC = (0, NC.b)("Heatmap3DTarget", {
              lines: VC([-.52, -.52, -.52], [.52, .52, .52])
            }, QC);
            return iC.color = new qC.Color3(.06, .14, .23), iC.renderingGroupId = 1, iC.tS = !1, iC.isVisible = !1, {
              engine: ZC,
              sS: QC,
              camera: pC,
              cells: RC,
              translucentCells: xC,
              translucent: {
                VS: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: IC,
              targetOutline: iC,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: zC,
              needsRender: !0
            }
          }(CC, rz.current.fieldOfView)
        } catch (ZC) {
          return console.error("Failed to start the 3D heatmap", ZC), void Mz(!0)
        }
        return Fz.current = zC, zC.engine.runRenderLoop((() => {
          const CC = zC.camera;
          CC.fov !== zC.targetFieldOfView && (CC.fov += (zC.targetFieldOfView - CC.fov) * (CC.fov > zC.targetFieldOfView ? .3 : .2), Math.abs(zC.targetFieldOfView - CC.fov) < 5e-4 && (CC.fov = zC.targetFieldOfView), zC.needsRender = !0), zC.needsRender && (zC.sS.render(), zC.needsRender = !zC.sS.isReady() || !zC.engine.areAllEffectsReady())
        })), () => {
          Fz.current = null, zC.engine.dispose()
        }
      }), []), (0, QC.useEffect)((() => {
        const CC = qz.current;
        if (!CC) return;
        const zC = () => {
            Gz.current = !1, Sz(document.pointerLockElement === CC)
          },
          ZC = () => {
            Gz.current && (Gz.current = !1, Pz(!1))
          },
          QC = zC => {
            const ZC = !rz.current.canLock && document.activeElement === CC && 0 !== (1 & zC.buttons);
            if (document.pointerLockElement !== CC && !ZC) return;
            const QC = rz.current.mouseSensitivity * eC;
            hz((CC => function(CC, zC, ZC) {
              const QC = 2 * Math.PI;
              return {
                ...CC,
                heading: ((CC.heading + zC) % QC + QC) % QC,
                pitch: Math.max(-cC, Math.min(cC, CC.pitch + ZC))
              }
            }(null !== CC && void 0 !== CC ? CC : rz.current.fittedView, zC.movementX * QC, zC.movementY * QC)))
          };
        return document.addEventListener("pointerlockchange", zC), document.addEventListener("pointerlockerror", ZC), document.addEventListener("pointermove", QC), () => {
          document.removeEventListener("pointerlockchange", zC), document.removeEventListener("pointerlockerror", ZC), document.removeEventListener("pointermove", QC), document.pointerLockElement === CC && (0, JC.e)()
        }
      }), []), (0, QC.useEffect)((() => {
        const CC = Fz.current;
        null !== CC && 0 !== Wz.width && 0 !== Wz.height && (CC.engine.resize(), CC.needsRender = !0)
      }), [Wz.width, Wz.height]), (0, QC.useEffect)((() => {
        const CC = Fz.current;
        null !== CC && (CC.targetFieldOfView = Ez * (Jz ? vC : 1))
      }), [Ez, Jz]), (0, QC.useEffect)((() => {
        const CC = Fz.current;
        null !== CC && function(CC, zC, ZC, QC) {
          const wC = [],
            bC = [],
            nC = [],
            fC = [];
          for (let oC = 0; oC < zC.count; oC++) {
            const CC = zC.values[oC],
              qC = (0, AC.y)(CC, ZC, QC);
            if (qC <= 0) continue;
            const [FC, WC, NC] = (0, AC.q)((0, AC.E)(CC, ZC)), MC = qC >= 1;
            (MC ? wC : nC).push(zC.positions[3 * oC] + .5, zC.positions[3 * oC + 1] + .5, zC.positions[3 * oC + 2] + .5), (MC ? bC : fC).push(FC / 255, WC / 255, NC / 255, qC)
          }
          OC(CC.cells, Float32Array.from(wC), Float32Array.from(bC), bC.length / 4), CC.translucent = {
            VS: Float32Array.from(nC),
            colours: Float32Array.from(fC),
            count: fC.length / 4
          }, CC.translucentSortedFrom = null, kC(CC), CC.needsRender = !0
        }(CC, Hz, ZC, HC)
      }), [Hz, ZC, HC]), (0, QC.useEffect)((() => {
        const CC = Fz.current;
        null !== CC && function(CC, zC) {
          CC.chunkGridOrigin = zC, CC.chunkGridCentre = null, BC(CC)
        }(CC, uC.min)
      }), [uC]), (0, QC.useEffect)((() => {
        const CC = Fz.current;
        null !== CC && function(CC, zC, ZC) {
          const QC = [],
            wC = [];
          if (null !== zC) {
            const {
              positions: CC,
              colours: bC,
              count: nC
            } = zC.surface;
            for (let zC = 0; zC < nC; zC++) {
              const nC = [CC[3 * zC], CC[3 * zC + 1], CC[3 * zC + 2]];
              [0, 1, 2].every((CC => nC[CC] >= ZC.min[CC] - mC && nC[CC] <= ZC.max[CC] + mC)) && (QC.push(nC[0] - ZC.min[0] + .5, nC[1] - ZC.min[1] + .5, nC[2] - ZC.min[2] + .5), wC.push(bC[3 * zC] / 255, bC[3 * zC + 1] / 255, bC[3 * zC + 2] / 255, 1))
            }
          }
          OC(CC.schematicBlocks, Float32Array.from(QC), Float32Array.from(wC), wC.length / 4), CC.needsRender = !0
        }(CC, sC, uC)
      }), [sC, uC]), (0, QC.useEffect)((() => {
        const CC = Fz.current;
        null !== CC && null !== CC.chunkGrid && (CC.chunkGrid.isVisible = iz, CC.needsRender = !0)
      }), [iz, uC]), (0, QC.useEffect)((() => {
        const CC = Fz.current;
        null !== CC && function(CC, zC, ZC) {
          const {
            camera: QC
          } = CC;
          QC.position.set(zC.position[0], zC.position[1], zC.position[2]), QC.rotation.set(zC.pitch, zC.heading, 0);
          const wC = (EC + 1) * gC.f.Ig * Math.sqrt(3);
          QC.maxZ = Math.max(wC, Math.hypot(...nz(zC.position, fz(wz({
            min: [0, 0, 0],
            max: ZC
          }), -1))) + 2 * Math.hypot(...ZC)), BC(CC), kC(CC), CC.needsRender = !0
        }(CC, uz, mz)
      }), [uz, mz]), (0, QC.useEffect)((() => {
        const CC = Fz.current;
        null !== CC && (CC.targetOutline.isVisible = null !== sz, null !== sz && CC.targetOutline.position.set(sz.x - Kz[0] + .5, sz.y - Kz[1] + .5, sz.z - Kz[2] + .5), CC.needsRender = !0)
      }), [sz, Kz]);
      return (0, IC.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: oz,
        children: [(0, IC.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: qz,
          style: {
            width: `${Wz.width}px`,
            height: `${Wz.height}px`
          },
          tabIndex: 0,
          "aria-label": LC("3D heatmap"),
          onClick: () => {
            const CC = qz.current;
            if (null === CC) return;
            if (CC.focus({
                preventScroll: !0
              }), gz || !pz) return;
            const zC = CC.requestPointerLock();
            zC instanceof Promise ? zC.catch((CC => {
              CC instanceof DOMException && ("WrongDocumentError" === CC.name || "NotSupportedError" === CC.name) && Pz(!1)
            })) : Gz.current = !0
          },
          ...Tz,
          onKeyDown: CC => {
            if (xz && hC.has(CC.code)) return CC.preventDefault(), void(() => {
              const CC = qz.current;
              null !== CC && document.pointerLockElement === CC ? (0, JC.e)() : null === CC || void 0 === CC || CC.blur()
            })();
            const zC = KC[CC.code];
            return xz && void 0 !== zC ? (CC.preventDefault(), void aC(zC)) : xz && (0, xC.d)("replayPlayPause", CC.code) && !(0, xC.d)("Zoom", CC.code) ? (CC.preventDefault(), void(CC.repeat || DC())) : xz && CC.code === YC ? (CC.preventDefault(), void tC()) : xz && CC.code === XC ? (CC.preventDefault(), void hz(null)) : xz && CC.code === lC ? (CC.preventDefault(), void vz((CC => !CC))) : void Tz.onKeyDown(CC)
          },
          onFocus: () => {
            Az(!0)
          },
          onBlur: () => {
            Az(!1), Tz.onBlur()
          }
        }), Nz && (0, IC.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: LC("3D view isn't available in this browser.")
        }), xz && (0, IC.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, IC.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: uz.position.map(((CC, zC) => (CC + Kz[zC]).toFixed(2))).join(" ")
        }), iz && (0, IC.jsx)(UC, {
          heading: uz.heading,
          pitch: uz.pitch,
          onViewFrom: CC => {
            const zC = fz(CC, -1),
              ZC = 0 === zC[1] ? {
                heading: Math.atan2(zC[0], zC[2]),
                pitch: 0
              } : {
                heading: uz.heading,
                pitch: zC[1] < 0 ? cC : -cC
              };
            hz(Zz(Xz, lz, Ez, ZC))
          },
          onTurn: (CC, zC) => {
            hz((ZC => function(CC, zC, ZC, QC) {
              return Qz(CC, zC, {
                heading: CC.heading + ZC * jC,
                pitch: Math.max(-cC, Math.min(cC, CC.pitch + QC * jC))
              })
            }(null !== ZC && void 0 !== ZC ? ZC : rz.current.fittedView, wz(Xz), CC, zC)))
          },
          onFlip: () => {
            hz((CC => function(CC, zC) {
              return Qz(CC, zC, {
                heading: CC.heading + Math.PI,
                pitch: -CC.pitch
              })
            }(null !== CC && void 0 !== CC ? CC : rz.current.fittedView, wz(Xz))))
          }
        }), null !== sz && (0, IC.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === yC ? LC("studio:heatmapBlockReadout", {
            x: sz.x,
            y: sz.y,
            z: sz.z,
            count: (0, MC.Z)(sz.value)
          }) : yC(sz.x, sz.y, sz.z, sz.value)
        }), (0, IC.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [TC, (0, IC.jsx)(GC.O, {
            active: null === ez,
            onClick: () => {
              hz(null)
            },
            children: (0, IC.jsx)(RC.c, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function UC(CC) {
      let {
        heading: zC,
        pitch: ZC,
        onViewFrom: wC,
        onTurn: bC,
        onFlip: nC
      } = CC;
      const {
        t: fC
      } = (0, SC.y)(), oC = (0, QC.useRef)(null), qC = Cz({
        heading: zC,
        pitch: ZC
      }), FC = zz(zC), WC = qz(qC, FC), NC = aC + tC + 2, MC = TC.flatMap((CC => [1, -1].map((zC => {
        const ZC = fz(CC.direction, zC);
        return {
          ...CC,
          sign: zC,
          direction: ZC,
          endX: NC + oz(ZC, FC) * aC,
          endY: NC - oz(ZC, WC) * aC,
          depth: oz(ZC, qC)
        }
      })))).sort(((CC, zC) => zC.depth - CC.depth));
      return (0, IC.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * NC,
        height: 2 * NC,
        "aria-hidden": !0,
        onPointerDown: CC => {
          var zC, ZC;
          CC.currentTarget.setPointerCapture(CC.pointerId);
          const QC = CC.target,
            wC = QC.getAttribute("data-end");
          oC.current = {
            pointerId: CC.pointerId,
            x: CC.clientX,
            y: CC.clientY,
            travel: 0,
            side: null === wC ? null : null !== (zC = null === (ZC = MC[Number(wC)]) || void 0 === ZC ? void 0 : ZC.direction) && void 0 !== zC ? zC : null,
            isOnMiddle: QC.hasAttribute("data-middle")
          }
        },
        onPointerMove: CC => {
          const zC = oC.current;
          if (null === zC || zC.pointerId !== CC.pointerId) return;
          const ZC = CC.clientX - zC.x,
            QC = CC.clientY - zC.y;
          zC.x = CC.clientX, zC.y = CC.clientY, zC.travel += Math.abs(ZC) + Math.abs(QC), zC.travel >= yC && bC(ZC, QC)
        },
        onPointerUp: CC => {
          const zC = oC.current;
          oC.current = null, null === zC || zC.pointerId !== CC.pointerId || zC.travel >= yC || (null !== zC.side ? wC(zC.side) : zC.isOnMiddle && nC())
        },
        onPointerCancel: () => {
          oC.current = null
        },
        children: [MC.map(((CC, zC) => {
          const ZC = CC.sign > 0;
          return (0, IC.jsxs)("g", {
            children: [(0, IC.jsx)("line", {
              x1: NC,
              y1: NC,
              x2: CC.endX,
              y2: CC.endY,
              stroke: CC.colour,
              strokeOpacity: ZC ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, IC.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": zC,
              cx: CC.endX,
              cy: CC.endY,
              r: ZC ? tC : tC - 1,
              fill: CC.colour,
              fillOpacity: ZC ? 1 : .3,
              stroke: CC.colour,
              strokeWidth: ZC ? 0 : 1.5,
              children: (0, IC.jsx)("title", {
                children: `${fC("View from")} ${ZC?"+":"\u2212"}${CC.name}`
              })
            }), ZC && (0, IC.jsx)("text", {
              pointerEvents: "none",
              x: CC.endX,
              y: CC.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: CC.name
            })]
          }, `${ZC?"+":"-"}${CC.name}`)
        })), (0, IC.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: NC,
          cy: NC,
          r: DC,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, IC.jsx)("title", {
            children: fC("View from the opposite side")
          })
        })]
      })
    }

    function BC(CC) {
      var zC, ZC, QC;
      const {
        chunkGridOrigin: wC,
        camera: bC
      } = CC;
      if (null === wC) return;
      const nC = [bC.position.x, bC.position.y, bC.position.z],
        fC = [0, 2].map((CC => Math.floor((nC[CC] + wC[CC]) / gC.f.Ig))),
        oC = CC.chunkGridCentre;
      if (null !== oC && oC.every(((CC, zC) => CC === fC[zC]))) return;
      const WC = null === (zC = null === (ZC = CC.chunkGrid) || void 0 === ZC ? void 0 : ZC.isVisible) || void 0 === zC || zC;
      null === (QC = CC.chunkGrid) || void 0 === QC || QC.dispose();
      const [MC, SC] = [0, 2].map(((CC, zC) => {
        const ZC = [];
        for (let QC = fC[zC] - EC; QC <= fC[zC] + EC + 1; QC++) ZC.push(QC * gC.f.Ig - wC[CC]);
        return ZC
      })), pC = -wC[1], PC = [];
      for (const qC of SC) PC.push([new FC.Eg(MC[0], pC, qC), new FC.Eg(MC[MC.length - 1], pC, qC)]);
      for (const qC of MC) PC.push([new FC.Eg(qC, pC, SC[0]), new FC.Eg(qC, pC, SC[SC.length - 1])]);
      const GC = (0, NC.b)("Heatmap3DChunkGrid", {
        lines: PC
      }, CC.sS);
      GC.color = new qC.Color3(.45, .6, .78), GC.tS = !1, GC.isVisible = WC, CC.chunkGrid = GC, CC.chunkGridCentre = fC, CC.needsRender = !0
    }

    function OC(CC, zC, ZC, QC) {
      CC.E_("matrix", function(CC, zC) {
        const ZC = new Float32Array(16 * zC);
        for (let QC = 0; QC < zC; QC++) {
          const zC = 16 * QC;
          ZC[zC] = 1, ZC[zC + 5] = 1, ZC[zC + 10] = 1, ZC[zC + 12] = CC[3 * QC], ZC[zC + 13] = CC[3 * QC + 1], ZC[zC + 14] = CC[3 * QC + 2], ZC[zC + 15] = 1
        }
        return ZC
      }(zC, QC), 16, !0), CC.E_("color", ZC, 4, !0), CC.isVisible = QC > 0
    }

    function kC(CC) {
      const {
        camera: zC,
        translucent: ZC
      } = CC, QC = [zC.position.x, zC.position.y, zC.position.z], wC = CC.translucentSortedFrom;
      if (null !== wC && Math.hypot(QC[0] - wC[0], QC[1] - wC[1], QC[2] - wC[2]) < HC) return;
      CC.translucentSortedFrom = QC;
      const bC = new Float64Array(ZC.count),
        nC = new Uint32Array(ZC.count);
      for (let qC = 0; qC < ZC.count; qC++) {
        const CC = ZC.VS[3 * qC] - QC[0],
          zC = ZC.VS[3 * qC + 1] - QC[1],
          wC = ZC.VS[3 * qC + 2] - QC[2];
        bC[qC] = CC * CC + zC * zC + wC * wC, nC[qC] = qC
      }
      nC.sort(((CC, zC) => bC[zC] - bC[CC]));
      const fC = new Float32Array(3 * ZC.count),
        oC = new Float32Array(4 * ZC.count);
      nC.forEach(((CC, zC) => {
        fC.set(ZC.VS.subarray(3 * CC, 3 * CC + 3), 3 * zC), oC.set(ZC.colours.subarray(4 * CC, 4 * CC + 4), 4 * zC)
      })), OC(CC.translucentCells, fC, oC, ZC.count), CC.needsRender = !0
    }

    function VC(CC, zC) {
      const ZC = (ZC, QC, wC) => new FC.Eg(0 === ZC ? CC[0] : zC[0], 0 === QC ? CC[1] : zC[1], 0 === wC ? CC[2] : zC[2]),
        QC = [];
      for (const wC of [0, 1])
        for (const CC of [0, 1]) QC.push([ZC(0, wC, CC), ZC(1, wC, CC)], [ZC(wC, 0, CC), ZC(wC, 1, CC)], [ZC(wC, CC, 0), ZC(wC, CC, 1)]);
      return QC
    }

    function Cz(CC) {
      return [Math.sin(CC.heading) * Math.cos(CC.pitch), -Math.sin(CC.pitch), Math.cos(CC.heading) * Math.cos(CC.pitch)]
    }

    function zz(CC) {
      return [Math.cos(CC), 0, -Math.sin(CC)]
    }

    function Zz(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: uC,
        pitch: rC
      };
      const wC = [CC.max[0] - CC.min[0], CC.max[1] - CC.min[1], CC.max[2] - CC.min[2]],
        bC = Cz(QC),
        nC = zz(QC.heading),
        fC = qz(bC, nC),
        oC = Math.tan(ZC / 2),
        qC = oC * zC;
      let FC = 1;
      for (const WC of [-wC[0] / 2, wC[0] / 2])
        for (const CC of [-wC[1] / 2, wC[1] / 2])
          for (const zC of [-wC[2] / 2, wC[2] / 2]) {
            const ZC = [WC, CC, zC],
              QC = oz(ZC, bC);
            FC = Math.max(FC, Math.abs(oz(ZC, nC)) / qC - QC, Math.abs(oz(ZC, fC)) / oC - QC)
          }
      return {
        position: nz([CC.min[0] + wC[0] / 2, CC.min[1] + wC[1] / 2, CC.min[2] + wC[2] / 2], fz(bC, -FC * sC)),
        heading: QC.heading,
        pitch: QC.pitch
      }
    }

    function Qz(CC, zC, ZC) {
      const QC = bz(CC),
        wC = bz(ZC),
        bC = nz(CC.position, fz(zC, -1)),
        nC = [0, 1, 2].reduce(((CC, zC) => nz(CC, fz(wC[zC], oz(bC, QC[zC])))), [0, 0, 0]);
      return {
        position: nz(zC, nC),
        heading: ZC.heading,
        pitch: ZC.pitch
      }
    }

    function wz(CC) {
      return fz(nz(CC.min, CC.max), .5)
    }

    function bz(CC) {
      const zC = Cz(CC),
        ZC = zz(CC.heading);
      return [zC, ZC, qz(zC, ZC)]
    }

    function nz(CC, zC) {
      return [CC[0] + zC[0], CC[1] + zC[1], CC[2] + zC[2]]
    }

    function fz(CC, zC) {
      return [CC[0] * zC, CC[1] * zC, CC[2] * zC]
    }

    function oz(CC, zC) {
      return CC[0] * zC[0] + CC[1] * zC[1] + CC[2] * zC[2]
    }

    function qz(CC, zC) {
      return [CC[1] * zC[2] - CC[2] * zC[1], CC[2] * zC[0] - CC[0] * zC[2], CC[0] * zC[1] - CC[1] * zC[0]]
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);