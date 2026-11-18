export const id = 230;
export const ids = [230];
export const modules = {
  38555: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => xB
    });
    dB(5818);
    var VB = dB(62),
      yB = dB(38562),
      pB = dB(38840),
      lB = dB(38963),
      JB = dB(39001),
      YB = dB(39019),
      gB = dB(36180),
      oB = dB(36119),
      kB = dB(39135),
      LB = dB(39196),
      OB = (dB(39222), dB(1105)),
      DB = dB(184),
      uB = dB(1078),
      HB = dB(21),
      EB = dB(2368),
      vB = dB(1324),
      mB = dB(946),
      iB = dB(5812),
      NB = dB(5823),
      tB = dB(3858),
      fB = dB(980);
    const sB = 1.2,
      MB = .2,
      zB = .0066 * Math.PI / 180,
      wB = new Set(["Escape", "KeyG"]),
      UB = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      FB = "ArrowUp",
      KB = new Set([...Object.keys(UB), FB, "ArrowDown"]),
      rB = 32,
      IB = 1,
      cB = 10,
      SB = "F4",
      PB = "Period",
      QB = Math.PI / 2 - .001,
      RB = Math.PI / 6,
      aB = Math.PI / 6,
      ZB = 1.08,
      XB = [{
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
      WB = 24,
      hB = 7,
      CB = 4,
      GB = .01,
      qB = 4;

    function xB(BB) {
      let {
        heatmap: TB,
        scale: dB,
        fullyOpaqueFrom: IB,
        bounds: RB,
        fitBounds: aB,
        schematic: ZB,
        controls: XB,
        onStepTime: WB,
        onShowAllTime: hB,
        onTogglePlaying: CB,
        getReadout: qB = null
      } = BB;
      const {
        t: xB
      } = (0, uB.z)(), {
        clientEscMenuOptions: pT
      } = (0, HB.m)(["clientEscMenuOptions"]), YT = (0, VB.useRef)(null), gT = (0, VB.useRef)(null), oT = (0, VB.useRef)(null), kT = (0, EB.b)(YT), [LT, OT] = (0, VB.useState)(!1), [DT, uT] = (0, VB.useState)(!1), [HT, ET] = (0, VB.useState)(!0), vT = (0, VB.useRef)(!1), [mT, iT] = (0, VB.useState)(!1), NT = DT || !HT && mT, [tT, fT] = (0, VB.useState)(!1), [sT, MT] = (0, VB.useState)(!0), [zT, wT] = (0, VB.useState)(null), UT = RB.min, [FT, KT] = (0, VB.useState)(UT);
      FT[0] === UT[0] && FT[1] === UT[1] && FT[2] === UT[2] || (KT(UT), null !== zT && wT({
        ...zT,
        position: lT(zT.position, lT(FT, JT(UT, -1)))
      }));
      const rT = (0, VB.useMemo)((() => function(BB) {
          return [BB.max[0] - BB.min[0] + 1, BB.max[1] - BB.min[1] + 1, BB.max[2] - BB.min[2] + 1]
        }(RB)), [RB]),
        IT = (0, VB.useMemo)((() => function(BB, TB) {
          const dB = [],
            VB = [];
          for (const [yB, pB] of Object.entries(BB.frequencies)) {
            const BB = Number(yB);
            for (const [yB, lB] of Object.entries(pB)) {
              const pB = Number(yB);
              for (const [yB, JB] of Object.entries(lB)) JB <= 0 || (dB.push(BB - TB[0], pB - TB[1], Number(yB) - TB[2]), VB.push(JB))
            }
          }
          return {
            positions: Int32Array.from(dB),
            values: Float64Array.from(VB),
            count: VB.length
          }
        }(TB, UT)), [TB, UT]),
        cT = sB * pT.cameraFOV / 100,
        ST = kT.height > 0 ? kT.width / kT.height : 1,
        PT = (0, VB.useMemo)((() => function(BB, TB) {
          return {
            min: [BB.min[0] - TB[0], BB.min[1] - TB[1], BB.min[2] - TB[2]],
            max: [BB.max[0] - TB[0] + 1, BB.max[1] - TB[1] + 1, BB.max[2] - TB[2] + 1]
          }
        }(aB, UT)), [aB, UT]),
        QT = dT(PT, ST, cT),
        RT = null !== zT && void 0 !== zT ? zT : QT,
        aT = (0, VB.useRef)({
          fittedView: QT,
          fieldOfView: cT,
          mouseSensitivity: pT.mouseSensitivity,
          canLock: HT
        });
      aT.current = {
        fittedView: QT,
        fieldOfView: cT,
        mouseSensitivity: pT.mouseSensitivity,
        canLock: HT
      };
      const ZT = (0, VB.useMemo)((() => {
          if (!NT) return null;
          const BB = (BB, dB, VB) => {
              var yB, pB, lB;
              return null !== (yB = null === (pB = TB.frequencies[BB + UT[0]]) || void 0 === pB || null === (lB = pB[dB + UT[1]]) || void 0 === lB ? void 0 : lB[VB + UT[2]]) && void 0 !== yB ? yB : 0
            },
            VB = function(BB, TB, dB, VB) {
              let yB = 0,
                pB = 1 / 0;
              for (const kB of [0, 1, 2]) {
                if (0 === TB[kB]) {
                  if (BB[kB] < 0 || BB[kB] > dB[kB]) return null;
                  continue
                }
                const VB = (0 - BB[kB]) / TB[kB],
                  lB = (dB[kB] - BB[kB]) / TB[kB];
                yB = Math.max(yB, Math.min(VB, lB)), pB = Math.min(pB, Math.max(VB, lB))
              }
              if (yB > pB) return null;
              const lB = [0, 1, 2].map((VB => Math.min(dB[VB] - 1, Math.max(0, Math.floor(BB[VB] + TB[VB] * yB))))),
                JB = [0, 1, 2].map((BB => Math.sign(TB[BB]))),
                YB = [0, 1, 2].map((dB => {
                  if (0 === JB[dB]) return 1 / 0;
                  return ((JB[dB] > 0 ? lB[dB] + 1 : lB[dB]) - BB[dB]) / TB[dB]
                })),
                gB = [0, 1, 2].map((BB => 0 === JB[BB] ? 1 / 0 : Math.abs(1 / TB[BB])));
              let oB = null;
              for (;;) {
                const BB = VB(lB[0], lB[1], lB[2]);
                if (BB >= 1) return lB;
                BB > 0 && (oB = [lB[0], lB[1], lB[2]]);
                const TB = YB[0] < YB[1] ? YB[0] < YB[2] ? 0 : 2 : YB[1] < YB[2] ? 1 : 2;
                if (YB[TB] > pB) return oB;
                if (lB[TB] += JB[TB], YB[TB] += gB[TB], lB[TB] < 0 || lB[TB] >= dB[TB]) return oB
              }
            }(RT.position, BT(RT), rT, ((TB, VB, yB) => (0, iB.x)(BB(TB, VB, yB), dB, IB)));
          return null === VB ? null : {
            x: VB[0] + UT[0],
            y: VB[1] + UT[1],
            z: VB[2] + UT[2],
            value: BB(VB[0], VB[1], VB[2])
          }
        }), [NT, TB, UT, RT, rT, dB, IB]),
        {
          keyHandlers: XT
        } = (0, NB.h)({
          isEnabled: NT,
          claimedKeyCodes: KB,
          iL: BB => {
            wT((TB => function(BB, TB) {
              const dB = [Math.sin(BB.heading), 0, Math.cos(BB.heading)],
                VB = lT(lT(JT(dB, TB.forward), JT(TT(BB.heading), TB.right)), [0, TB.up, 0]);
              return {
                ...BB,
                position: lT(BB.position, VB)
              }
            }(null !== TB && void 0 !== TB ? TB : aT.current.fittedView, BB)))
          },
          onZoomChange: fT
        });
      (0, VB.useEffect)((() => {
        const BB = gT.current;
        if (!BB) return;
        let TB;
        try {
          TB = function(BB, TB) {
            const dB = new yB.d(BB, !0, {
                stencil: !1
              }, !0),
              VB = new pB.c(dB),
              [OB, DB, uB] = iB.V;
            VB.clearColor = new gB.d(OB / 255, DB / 255, uB / 255, 1);
            const HB = new lB.e("Heatmap3DCamera", oB.RD.Zero(), VB);
            HB.fov = TB, HB.minZ = .05;
            const EB = new JB.c("Heatmap3DLight", new oB.RD(.4, 1, -.6), VB);
            EB.diffuse = gB.Color3.White(), EB.groundColor = gB.Color3.Black(), EB.specular = gB.Color3.Black();
            const vB = new YB.StandardMaterial("Heatmap3DCellMaterial", VB);
            vB.diffuseColor = new gB.Color3(.4, .4, .4), vB.emissiveColor = new gB.Color3(.62, .62, .62), vB.specularColor = gB.Color3.Black();
            const mB = (0, kB.b)("Heatmap3DCells", {
              size: 1
            }, VB);
            mB.material = vB, mB.xu = !1, mB.QD = !0, mB.isVisible = !1;
            const NB = (0, kB.b)("Heatmap3DTranslucentCells", {
              size: 1
            }, VB);
            NB.material = vB, NB.hasVertexAlpha = !0, NB.xu = !1, NB.QD = !0, NB.isVisible = !1;
            const tB = new YB.StandardMaterial("Heatmap3DSchematicMaterial", VB);
            tB.diffuseColor = new gB.Color3(.6, .6, .6), tB.emissiveColor = new gB.Color3(.4, .4, .4), tB.specularColor = gB.Color3.Black();
            const fB = (0, kB.b)("Heatmap3DSchematicBlocks", {
              size: 1
            }, VB);
            fB.material = tB, fB.xu = !1, fB.QD = !0, fB.isVisible = !1;
            const sB = (0, LB.c)("Heatmap3DTarget", {
              lines: eB([-.52, -.52, -.52], [.52, .52, .52])
            }, VB);
            return sB.color = new gB.Color3(.06, .14, .23), sB.renderingGroupId = 1, sB.xu = !1, sB.isVisible = !1, {
              engine: dB,
              Gu: VB,
              camera: HB,
              cells: mB,
              translucentCells: NB,
              translucent: {
                nY: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: fB,
              targetOutline: sB,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: TB,
              needsRender: !0
            }
          }(BB, aT.current.fieldOfView)
        } catch (dB) {
          return console.error("Failed to start the 3D heatmap", dB), void OT(!0)
        }
        return oT.current = TB, TB.engine.runRenderLoop((() => {
          const BB = TB.camera;
          BB.fov !== TB.targetFieldOfView && (BB.fov += (TB.targetFieldOfView - BB.fov) * (BB.fov > TB.targetFieldOfView ? .3 : .2), Math.abs(TB.targetFieldOfView - BB.fov) < 5e-4 && (BB.fov = TB.targetFieldOfView), TB.needsRender = !0), TB.needsRender && (TB.Gu.render(), TB.needsRender = !TB.Gu.isReady() || !TB.engine.areAllEffectsReady())
        })), () => {
          oT.current = null, TB.engine.dispose()
        }
      }), []), (0, VB.useEffect)((() => {
        const BB = gT.current;
        if (!BB) return;
        const TB = () => {
            vT.current = !1, uT(document.pointerLockElement === BB)
          },
          dB = () => {
            vT.current && (vT.current = !1, ET(!1))
          },
          VB = TB => {
            const dB = !aT.current.canLock && document.activeElement === BB && 0 !== (1 & TB.buttons);
            if (document.pointerLockElement !== BB && !dB) return;
            const VB = aT.current.mouseSensitivity * zB;
            wT((BB => function(BB, TB, dB) {
              const VB = 2 * Math.PI;
              return {
                ...BB,
                heading: ((BB.heading + TB) % VB + VB) % VB,
                pitch: Math.max(-QB, Math.min(QB, BB.pitch + dB))
              }
            }(null !== BB && void 0 !== BB ? BB : aT.current.fittedView, TB.movementX * VB, TB.movementY * VB)))
          };
        return document.addEventListener("pointerlockchange", TB), document.addEventListener("pointerlockerror", dB), document.addEventListener("pointermove", VB), () => {
          document.removeEventListener("pointerlockchange", TB), document.removeEventListener("pointerlockerror", dB), document.removeEventListener("pointermove", VB), document.pointerLockElement === BB && (0, tB.b)()
        }
      }), []), (0, VB.useEffect)((() => {
        const BB = oT.current;
        null !== BB && 0 !== kT.width && 0 !== kT.height && (BB.engine.resize(), BB.needsRender = !0)
      }), [kT.width, kT.height]), (0, VB.useEffect)((() => {
        const BB = oT.current;
        null !== BB && (BB.targetFieldOfView = cT * (tT ? MB : 1))
      }), [cT, tT]), (0, VB.useEffect)((() => {
        const BB = oT.current;
        null !== BB && function(BB, TB, dB, VB) {
          const yB = [],
            pB = [],
            lB = [],
            JB = [];
          for (let YB = 0; YB < TB.count; YB++) {
            const BB = TB.values[YB],
              gB = (0, iB.x)(BB, dB, VB);
            if (gB <= 0) continue;
            const [oB, kB, LB] = (0, iB.q)((0, iB.L)(BB, dB)), OB = gB >= 1;
            (OB ? yB : lB).push(TB.positions[3 * YB] + .5, TB.positions[3 * YB + 1] + .5, TB.positions[3 * YB + 2] + .5), (OB ? pB : JB).push(oB / 255, kB / 255, LB / 255, gB)
          }
          bB(BB.cells, Float32Array.from(yB), Float32Array.from(pB), pB.length / 4), BB.translucent = {
            nY: Float32Array.from(lB),
            colours: Float32Array.from(JB),
            count: JB.length / 4
          }, BB.translucentSortedFrom = null, nB(BB), BB.needsRender = !0
        }(BB, IT, dB, IB)
      }), [IT, dB, IB]), (0, VB.useEffect)((() => {
        const BB = oT.current;
        null !== BB && function(BB, TB) {
          BB.chunkGridOrigin = TB, BB.chunkGridCentre = null, AB(BB)
        }(BB, RB.min)
      }), [RB]), (0, VB.useEffect)((() => {
        const BB = oT.current;
        null !== BB && function(BB, TB, dB) {
          const VB = [],
            yB = [];
          if (null !== TB) {
            const {
              positions: BB,
              colours: pB,
              count: lB
            } = TB.surface;
            for (let TB = 0; TB < lB; TB++) {
              const lB = [BB[3 * TB], BB[3 * TB + 1], BB[3 * TB + 2]];
              [0, 1, 2].every((BB => lB[BB] >= dB.min[BB] - rB && lB[BB] <= dB.max[BB] + rB)) && (VB.push(lB[0] - dB.min[0] + .5, lB[1] - dB.min[1] + .5, lB[2] - dB.min[2] + .5), yB.push(pB[3 * TB] / 255, pB[3 * TB + 1] / 255, pB[3 * TB + 2] / 255, 1))
            }
          }
          bB(BB.schematicBlocks, Float32Array.from(VB), Float32Array.from(yB), yB.length / 4), BB.needsRender = !0
        }(BB, ZB, RB)
      }), [ZB, RB]), (0, VB.useEffect)((() => {
        const BB = oT.current;
        null !== BB && null !== BB.chunkGrid && (BB.chunkGrid.isVisible = sT, BB.needsRender = !0)
      }), [sT, RB]), (0, VB.useEffect)((() => {
        const BB = oT.current;
        null !== BB && function(BB, TB, dB) {
          const {
            camera: VB
          } = BB;
          VB.position.set(TB.position[0], TB.position[1], TB.position[2]), VB.rotation.set(TB.pitch, TB.heading, 0);
          const yB = (cB + 1) * DB.c.UD * Math.sqrt(3);
          VB.maxZ = Math.max(yB, Math.hypot(...lT(TB.position, JT(yT({
            min: [0, 0, 0],
            max: dB
          }), -1))) + 2 * Math.hypot(...dB)), AB(BB), nB(BB), BB.needsRender = !0
        }(BB, RT, rT)
      }), [RT, rT]), (0, VB.useEffect)((() => {
        const BB = oT.current;
        null !== BB && (BB.targetOutline.isVisible = null !== ZT, null !== ZT && BB.targetOutline.position.set(ZT.x - UT[0] + .5, ZT.y - UT[1] + .5, ZT.z - UT[2] + .5), BB.needsRender = !0)
      }), [ZT, UT]);
      return (0, fB.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: YT,
        children: [(0, fB.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: gT,
          style: {
            width: `${kT.width}px`,
            height: `${kT.height}px`
          },
          tabIndex: 0,
          "aria-label": xB("3D heatmap"),
          onClick: () => {
            const BB = gT.current;
            if (null === BB) return;
            if (BB.focus({
                preventScroll: !0
              }), DT || !HT) return;
            const TB = BB.requestPointerLock();
            TB instanceof Promise ? TB.catch((BB => {
              BB instanceof DOMException && ("WrongDocumentError" === BB.name || "NotSupportedError" === BB.name) && ET(!1)
            })) : vT.current = !0
          },
          ...XT,
          onKeyDown: BB => {
            if (NT && wB.has(BB.code)) return BB.preventDefault(), void(() => {
              const BB = gT.current;
              null !== BB && document.pointerLockElement === BB ? (0, tB.b)() : null === BB || void 0 === BB || BB.blur()
            })();
            const TB = UB[BB.code];
            return NT && void 0 !== TB ? (BB.preventDefault(), void WB(TB)) : NT && (0, NB.e)("replayPlayPause", BB.code) && !(0, NB.e)("Zoom", BB.code) ? (BB.preventDefault(), void(BB.repeat || CB())) : NT && BB.code === FB ? (BB.preventDefault(), void hB()) : NT && BB.code === PB ? (BB.preventDefault(), void wT(null)) : NT && BB.code === SB ? (BB.preventDefault(), void MT((BB => !BB))) : void XT.onKeyDown(BB)
          },
          onFocus: () => {
            iT(!0)
          },
          onBlur: () => {
            iT(!1), XT.onBlur()
          }
        }), LT && (0, fB.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: xB("3D view isn't available in this browser.")
        }), NT && (0, fB.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, fB.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: RT.position.map(((BB, TB) => (BB + UT[TB]).toFixed(2))).join(" ")
        }), sT && (0, fB.jsx)(jB, {
          heading: RT.heading,
          pitch: RT.pitch,
          onViewFrom: BB => {
            const TB = JT(BB, -1),
              dB = 0 === TB[1] ? {
                heading: Math.atan2(TB[0], TB[2]),
                pitch: 0
              } : {
                heading: RT.heading,
                pitch: TB[1] < 0 ? QB : -QB
              };
            wT(dT(PT, ST, cT, dB))
          },
          onTurn: (BB, TB) => {
            wT((dB => function(BB, TB, dB, VB) {
              return VT(BB, TB, {
                heading: BB.heading + dB * GB,
                pitch: Math.max(-QB, Math.min(QB, BB.pitch + VB * GB))
              })
            }(null !== dB && void 0 !== dB ? dB : aT.current.fittedView, yT(PT), BB, TB)))
          },
          onFlip: () => {
            wT((BB => function(BB, TB) {
              return VT(BB, TB, {
                heading: BB.heading + Math.PI,
                pitch: -BB.pitch
              })
            }(null !== BB && void 0 !== BB ? BB : aT.current.fittedView, yT(PT))))
          }
        }), null !== ZT && (0, fB.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === qB ? xB("studio:heatmapBlockReadout", {
            x: ZT.x,
            y: ZT.y,
            z: ZT.z,
            count: (0, OB.S)(ZT.value)
          }) : qB(ZT.x, ZT.y, ZT.z, ZT.value)
        }), (0, fB.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [XB, (0, fB.jsx)(vB.T, {
            active: null === zT,
            onClick: () => {
              wT(null)
            },
            children: (0, fB.jsx)(mB.e, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function jB(BB) {
      let {
        heading: TB,
        pitch: dB,
        onViewFrom: yB,
        onTurn: pB,
        onFlip: lB
      } = BB;
      const {
        t: JB
      } = (0, uB.z)(), YB = (0, VB.useRef)(null), gB = BT({
        heading: TB,
        pitch: dB
      }), oB = TT(TB), kB = gT(gB, oB), LB = WB + hB + 2, OB = XB.flatMap((BB => [1, -1].map((TB => {
        const dB = JT(BB.direction, TB);
        return {
          ...BB,
          sign: TB,
          direction: dB,
          endX: LB + YT(dB, oB) * WB,
          endY: LB - YT(dB, kB) * WB,
          depth: YT(dB, gB)
        }
      })))).sort(((BB, TB) => TB.depth - BB.depth));
      return (0, fB.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * LB,
        height: 2 * LB,
        "aria-hidden": !0,
        onPointerDown: BB => {
          var TB, dB;
          BB.currentTarget.setPointerCapture(BB.pointerId);
          const VB = BB.target,
            yB = VB.getAttribute("data-end");
          YB.current = {
            pointerId: BB.pointerId,
            x: BB.clientX,
            y: BB.clientY,
            travel: 0,
            side: null === yB ? null : null !== (TB = null === (dB = OB[Number(yB)]) || void 0 === dB ? void 0 : dB.direction) && void 0 !== TB ? TB : null,
            isOnMiddle: VB.hasAttribute("data-middle")
          }
        },
        onPointerMove: BB => {
          const TB = YB.current;
          if (null === TB || TB.pointerId !== BB.pointerId) return;
          const dB = BB.clientX - TB.x,
            VB = BB.clientY - TB.y;
          TB.x = BB.clientX, TB.y = BB.clientY, TB.travel += Math.abs(dB) + Math.abs(VB), TB.travel >= qB && pB(dB, VB)
        },
        onPointerUp: BB => {
          const TB = YB.current;
          YB.current = null, null === TB || TB.pointerId !== BB.pointerId || TB.travel >= qB || (null !== TB.side ? yB(TB.side) : TB.isOnMiddle && lB())
        },
        onPointerCancel: () => {
          YB.current = null
        },
        children: [OB.map(((BB, TB) => {
          const dB = BB.sign > 0;
          return (0, fB.jsxs)("g", {
            children: [(0, fB.jsx)("line", {
              x1: LB,
              y1: LB,
              x2: BB.endX,
              y2: BB.endY,
              stroke: BB.colour,
              strokeOpacity: dB ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, fB.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": TB,
              cx: BB.endX,
              cy: BB.endY,
              r: dB ? hB : hB - 1,
              fill: BB.colour,
              fillOpacity: dB ? 1 : .3,
              stroke: BB.colour,
              strokeWidth: dB ? 0 : 1.5,
              children: (0, fB.jsx)("title", {
                children: `${JB("View from")} ${dB?"+":"\u2212"}${BB.name}`
              })
            }), dB && (0, fB.jsx)("text", {
              pointerEvents: "none",
              x: BB.endX,
              y: BB.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: BB.name
            })]
          }, `${dB?"+":"-"}${BB.name}`)
        })), (0, fB.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: LB,
          cy: LB,
          r: CB,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, fB.jsx)("title", {
            children: JB("View from the opposite side")
          })
        })]
      })
    }

    function AB(BB) {
      var TB, dB, VB;
      const {
        chunkGridOrigin: yB,
        camera: pB
      } = BB;
      if (null === yB) return;
      const lB = [pB.position.x, pB.position.y, pB.position.z],
        JB = [0, 2].map((BB => Math.floor((lB[BB] + yB[BB]) / DB.c.UD))),
        YB = BB.chunkGridCentre;
      if (null !== YB && YB.every(((BB, TB) => BB === JB[TB]))) return;
      const kB = null === (TB = null === (dB = BB.chunkGrid) || void 0 === dB ? void 0 : dB.isVisible) || void 0 === TB || TB;
      null === (VB = BB.chunkGrid) || void 0 === VB || VB.dispose();
      const [OB, uB] = [0, 2].map(((BB, TB) => {
        const dB = [];
        for (let VB = JB[TB] - cB; VB <= JB[TB] + cB + 1; VB++) dB.push(VB * DB.c.UD - yB[BB]);
        return dB
      })), HB = -yB[1], EB = [];
      for (const gB of uB) EB.push([new oB.RD(OB[0], HB, gB), new oB.RD(OB[OB.length - 1], HB, gB)]);
      for (const gB of OB) EB.push([new oB.RD(gB, HB, uB[0]), new oB.RD(gB, HB, uB[uB.length - 1])]);
      const vB = (0, LB.c)("Heatmap3DChunkGrid", {
        lines: EB
      }, BB.Gu);
      vB.color = new gB.Color3(.45, .6, .78), vB.xu = !1, vB.isVisible = kB, BB.chunkGrid = vB, BB.chunkGridCentre = JB, BB.needsRender = !0
    }

    function bB(BB, TB, dB, VB) {
      BB.dBB("matrix", function(BB, TB) {
        const dB = new Float32Array(16 * TB);
        for (let VB = 0; VB < TB; VB++) {
          const TB = 16 * VB;
          dB[TB] = 1, dB[TB + 5] = 1, dB[TB + 10] = 1, dB[TB + 12] = BB[3 * VB], dB[TB + 13] = BB[3 * VB + 1], dB[TB + 14] = BB[3 * VB + 2], dB[TB + 15] = 1
        }
        return dB
      }(TB, VB), 16, !0), BB.dBB("color", dB, 4, !0), BB.isVisible = VB > 0
    }

    function nB(BB) {
      const {
        camera: TB,
        translucent: dB
      } = BB, VB = [TB.position.x, TB.position.y, TB.position.z], yB = BB.translucentSortedFrom;
      if (null !== yB && Math.hypot(VB[0] - yB[0], VB[1] - yB[1], VB[2] - yB[2]) < IB) return;
      BB.translucentSortedFrom = VB;
      const pB = new Float64Array(dB.count),
        lB = new Uint32Array(dB.count);
      for (let gB = 0; gB < dB.count; gB++) {
        const BB = dB.nY[3 * gB] - VB[0],
          TB = dB.nY[3 * gB + 1] - VB[1],
          yB = dB.nY[3 * gB + 2] - VB[2];
        pB[gB] = BB * BB + TB * TB + yB * yB, lB[gB] = gB
      }
      lB.sort(((BB, TB) => pB[TB] - pB[BB]));
      const JB = new Float32Array(3 * dB.count),
        YB = new Float32Array(4 * dB.count);
      lB.forEach(((BB, TB) => {
        JB.set(dB.nY.subarray(3 * BB, 3 * BB + 3), 3 * TB), YB.set(dB.colours.subarray(4 * BB, 4 * BB + 4), 4 * TB)
      })), bB(BB.translucentCells, JB, YB, dB.count), BB.needsRender = !0
    }

    function eB(BB, TB) {
      const dB = (dB, VB, yB) => new oB.RD(0 === dB ? BB[0] : TB[0], 0 === VB ? BB[1] : TB[1], 0 === yB ? BB[2] : TB[2]),
        VB = [];
      for (const yB of [0, 1])
        for (const BB of [0, 1]) VB.push([dB(0, yB, BB), dB(1, yB, BB)], [dB(yB, 0, BB), dB(yB, 1, BB)], [dB(yB, BB, 0), dB(yB, BB, 1)]);
      return VB
    }

    function BT(BB) {
      return [Math.sin(BB.heading) * Math.cos(BB.pitch), -Math.sin(BB.pitch), Math.cos(BB.heading) * Math.cos(BB.pitch)]
    }

    function TT(BB) {
      return [Math.cos(BB), 0, -Math.sin(BB)]
    }

    function dT(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: RB,
        pitch: aB
      };
      const yB = [BB.max[0] - BB.min[0], BB.max[1] - BB.min[1], BB.max[2] - BB.min[2]],
        pB = BT(VB),
        lB = TT(VB.heading),
        JB = gT(pB, lB),
        YB = Math.tan(dB / 2),
        gB = YB * TB;
      let oB = 1;
      for (const kB of [-yB[0] / 2, yB[0] / 2])
        for (const BB of [-yB[1] / 2, yB[1] / 2])
          for (const TB of [-yB[2] / 2, yB[2] / 2]) {
            const dB = [kB, BB, TB],
              VB = YT(dB, pB);
            oB = Math.max(oB, Math.abs(YT(dB, lB)) / gB - VB, Math.abs(YT(dB, JB)) / YB - VB)
          }
      return {
        position: lT([BB.min[0] + yB[0] / 2, BB.min[1] + yB[1] / 2, BB.min[2] + yB[2] / 2], JT(pB, -oB * ZB)),
        heading: VB.heading,
        pitch: VB.pitch
      }
    }

    function VT(BB, TB, dB) {
      const VB = pT(BB),
        yB = pT(dB),
        pB = lT(BB.position, JT(TB, -1)),
        lB = [0, 1, 2].reduce(((BB, TB) => lT(BB, JT(yB[TB], YT(pB, VB[TB])))), [0, 0, 0]);
      return {
        position: lT(TB, lB),
        heading: dB.heading,
        pitch: dB.pitch
      }
    }

    function yT(BB) {
      return JT(lT(BB.min, BB.max), .5)
    }

    function pT(BB) {
      const TB = BT(BB),
        dB = TT(BB.heading);
      return [TB, dB, gT(TB, dB)]
    }

    function lT(BB, TB) {
      return [BB[0] + TB[0], BB[1] + TB[1], BB[2] + TB[2]]
    }

    function JT(BB, TB) {
      return [BB[0] * TB, BB[1] * TB, BB[2] * TB]
    }

    function YT(BB, TB) {
      return BB[0] * TB[0] + BB[1] * TB[1] + BB[2] * TB[2]
    }

    function gT(BB, TB) {
      return [BB[1] * TB[2] - BB[2] * TB[1], BB[2] * TB[0] - BB[0] * TB[2], BB[0] * TB[1] - BB[1] * TB[0]]
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);