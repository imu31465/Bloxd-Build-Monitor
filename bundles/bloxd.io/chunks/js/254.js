export const id = 254;
export const ids = [254];
export const modules = {
  39870: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => xB
    });
    ZB(6619);
    var TB = ZB(63),
      JB = ZB(39872),
      oB = ZB(40143),
      GB = ZB(40253),
      vB = ZB(40297),
      kB = ZB(40318),
      cB = ZB(37304),
      nB = ZB(37113),
      hB = ZB(40446),
      zB = ZB(40501),
      FB = (ZB(40528), ZB(1281)),
      NB = ZB(201),
      gB = ZB(1248),
      qB = ZB(20),
      yB = ZB(2896),
      UB = ZB(1516),
      WB = ZB(1102),
      dB = ZB(6610),
      CB = ZB(6624),
      QB = ZB(4632),
      sB = ZB(1153);
    const wB = 1.2,
      OB = .2,
      YB = .0066 * Math.PI / 180,
      iB = new Set(["Escape", "KeyG"]),
      pB = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      aB = "ArrowUp",
      HB = new Set([...Object.keys(pB), aB, "ArrowDown"]),
      MB = 32,
      jB = 1,
      PB = 10,
      RB = "F4",
      rB = "Period",
      mB = Math.PI / 2 - .001,
      XB = Math.PI / 6,
      LB = Math.PI / 6,
      eB = 1.08,
      uB = [{
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
      fB = 24,
      lB = 7,
      AB = 4,
      tB = .01,
      bB = 4;

    function xB(BB) {
      let {
        heatmap: IB,
        scale: ZB,
        fullyOpaqueFrom: jB,
        bounds: XB,
        fitBounds: LB,
        schematic: eB,
        controls: uB,
        onStepTime: fB,
        onShowAllTime: lB,
        onTogglePlaying: AB,
        getReadout: bB = null
      } = BB;
      const {
        t: xB
      } = (0, gB.G)(), {
        clientEscMenuOptions: oI
      } = (0, qB.o)(["clientEscMenuOptions"]), kI = (0, TB.useRef)(null), cI = (0, TB.useRef)(null), nI = (0, TB.useRef)(null), hI = (0, yB.e)(kI), [zI, FI] = (0, TB.useState)(!1), [NI, gI] = (0, TB.useState)(!1), [qI, yI] = (0, TB.useState)(!0), UI = (0, TB.useRef)(!1), [WI, dI] = (0, TB.useState)(!1), CI = NI || !qI && WI, [QI, sI] = (0, TB.useState)(!1), [wI, OI] = (0, TB.useState)(!0), [YI, iI] = (0, TB.useState)(null), pI = XB.min, [aI, HI] = (0, TB.useState)(pI);
      aI[0] === pI[0] && aI[1] === pI[1] && aI[2] === pI[2] || (HI(pI), null !== YI && iI({
        ...YI,
        position: GI(YI.position, GI(aI, vI(pI, -1)))
      }));
      const MI = (0, TB.useMemo)((() => function(BB) {
          return [BB.max[0] - BB.min[0] + 1, BB.max[1] - BB.min[1] + 1, BB.max[2] - BB.min[2] + 1]
        }(XB)), [XB]),
        jI = (0, TB.useMemo)((() => function(BB, IB) {
          const ZB = [],
            TB = [];
          for (const [JB, oB] of Object.entries(BB.frequencies)) {
            const BB = Number(JB);
            for (const [JB, GB] of Object.entries(oB)) {
              const oB = Number(JB);
              for (const [JB, vB] of Object.entries(GB)) vB <= 0 || (ZB.push(BB - IB[0], oB - IB[1], Number(JB) - IB[2]), TB.push(vB))
            }
          }
          return {
            positions: Int32Array.from(ZB),
            values: Float64Array.from(TB),
            count: TB.length
          }
        }(IB, pI)), [IB, pI]),
        PI = wB * oI.cameraFOV / 100,
        RI = hI.height > 0 ? hI.width / hI.height : 1,
        rI = (0, TB.useMemo)((() => function(BB, IB) {
          return {
            min: [BB.min[0] - IB[0], BB.min[1] - IB[1], BB.min[2] - IB[2]],
            max: [BB.max[0] - IB[0] + 1, BB.max[1] - IB[1] + 1, BB.max[2] - IB[2] + 1]
          }
        }(LB, pI)), [LB, pI]),
        mI = ZI(rI, RI, PI),
        XI = null !== YI && void 0 !== YI ? YI : mI,
        LI = (0, TB.useRef)({
          fittedView: mI,
          fieldOfView: PI,
          mouseSensitivity: oI.mouseSensitivity,
          canLock: qI
        });
      LI.current = {
        fittedView: mI,
        fieldOfView: PI,
        mouseSensitivity: oI.mouseSensitivity,
        canLock: qI
      };
      const eI = (0, TB.useMemo)((() => {
          if (!CI) return null;
          const BB = (BB, ZB, TB) => {
              var JB, oB, GB;
              return null !== (JB = null === (oB = IB.frequencies[BB + pI[0]]) || void 0 === oB || null === (GB = oB[ZB + pI[1]]) || void 0 === GB ? void 0 : GB[TB + pI[2]]) && void 0 !== JB ? JB : 0
            },
            TB = function(BB, IB, ZB, TB) {
              let JB = 0,
                oB = 1 / 0;
              for (const hB of [0, 1, 2]) {
                if (0 === IB[hB]) {
                  if (BB[hB] < 0 || BB[hB] > ZB[hB]) return null;
                  continue
                }
                const TB = (0 - BB[hB]) / IB[hB],
                  GB = (ZB[hB] - BB[hB]) / IB[hB];
                JB = Math.max(JB, Math.min(TB, GB)), oB = Math.min(oB, Math.max(TB, GB))
              }
              if (JB > oB) return null;
              const GB = [0, 1, 2].map((TB => Math.min(ZB[TB] - 1, Math.max(0, Math.floor(BB[TB] + IB[TB] * JB))))),
                vB = [0, 1, 2].map((BB => Math.sign(IB[BB]))),
                kB = [0, 1, 2].map((ZB => {
                  if (0 === vB[ZB]) return 1 / 0;
                  return ((vB[ZB] > 0 ? GB[ZB] + 1 : GB[ZB]) - BB[ZB]) / IB[ZB]
                })),
                cB = [0, 1, 2].map((BB => 0 === vB[BB] ? 1 / 0 : Math.abs(1 / IB[BB])));
              let nB = null;
              for (;;) {
                const BB = TB(GB[0], GB[1], GB[2]);
                if (BB >= 1) return GB;
                BB > 0 && (nB = [GB[0], GB[1], GB[2]]);
                const IB = kB[0] < kB[1] ? kB[0] < kB[2] ? 0 : 2 : kB[1] < kB[2] ? 1 : 2;
                if (kB[IB] > oB) return nB;
                if (GB[IB] += vB[IB], kB[IB] += cB[IB], GB[IB] < 0 || GB[IB] >= ZB[IB]) return nB
              }
            }(XI.position, BI(XI), MI, ((IB, TB, JB) => (0, dB.t)(BB(IB, TB, JB), ZB, jB)));
          return null === TB ? null : {
            x: TB[0] + pI[0],
            y: TB[1] + pI[1],
            z: TB[2] + pI[2],
            value: BB(TB[0], TB[1], TB[2])
          }
        }), [CI, IB, pI, XI, MI, ZB, jB]),
        {
          keyHandlers: uI
        } = (0, CB.f)({
          isEnabled: CI,
          claimedKeyCodes: HB,
          Cz: BB => {
            iI((IB => function(BB, IB) {
              const ZB = [Math.sin(BB.heading), 0, Math.cos(BB.heading)],
                TB = GI(GI(vI(ZB, IB.forward), vI(II(BB.heading), IB.right)), [0, IB.up, 0]);
              return {
                ...BB,
                position: GI(BB.position, TB)
              }
            }(null !== IB && void 0 !== IB ? IB : LI.current.fittedView, BB)))
          },
          onZoomChange: sI
        });
      (0, TB.useEffect)((() => {
        const BB = cI.current;
        if (!BB) return;
        let IB;
        try {
          IB = function(BB, IB) {
            const ZB = new JB.e(BB, !0, {
                stencil: !1
              }, !0),
              TB = new oB.b(ZB),
              [FB, NB, gB] = dB.M;
            TB.clearColor = new cB.e(FB / 255, NB / 255, gB / 255, 1);
            const qB = new GB.e("Heatmap3DCamera", nB.rN.Zero(), TB);
            qB.fov = IB, qB.minZ = .05;
            const yB = new vB.d("Heatmap3DLight", new nB.rN(.4, 1, -.6), TB);
            yB.diffuse = cB.Color3.White(), yB.groundColor = cB.Color3.Black(), yB.specular = cB.Color3.Black();
            const UB = new kB.StandardMaterial("Heatmap3DCellMaterial", TB);
            UB.diffuseColor = new cB.Color3(.4, .4, .4), UB.emissiveColor = new cB.Color3(.62, .62, .62), UB.specularColor = cB.Color3.Black();
            const WB = (0, hB.c)("Heatmap3DCells", {
              size: 1
            }, TB);
            WB.material = UB, WB.tg = !1, WB.RN = !0, WB.isVisible = !1;
            const CB = (0, hB.c)("Heatmap3DTranslucentCells", {
              size: 1
            }, TB);
            CB.material = UB, CB.hasVertexAlpha = !0, CB.tg = !1, CB.RN = !0, CB.isVisible = !1;
            const QB = new kB.StandardMaterial("Heatmap3DSchematicMaterial", TB);
            QB.diffuseColor = new cB.Color3(.6, .6, .6), QB.emissiveColor = new cB.Color3(.4, .4, .4), QB.specularColor = cB.Color3.Black();
            const sB = (0, hB.c)("Heatmap3DSchematicBlocks", {
              size: 1
            }, TB);
            sB.material = QB, sB.tg = !1, sB.RN = !0, sB.isVisible = !1;
            const wB = (0, zB.e)("Heatmap3DTarget", {
              lines: SB([-.52, -.52, -.52], [.52, .52, .52])
            }, TB);
            return wB.color = new cB.Color3(.06, .14, .23), wB.renderingGroupId = 1, wB.tg = !1, wB.isVisible = !1, {
              engine: ZB,
              lg: TB,
              camera: qB,
              cells: WB,
              translucentCells: CB,
              translucent: {
                pg: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: sB,
              targetOutline: wB,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: IB,
              needsRender: !0
            }
          }(BB, LI.current.fieldOfView)
        } catch (ZB) {
          return console.error("Failed to start the 3D heatmap", ZB), void FI(!0)
        }
        return nI.current = IB, IB.engine.runRenderLoop((() => {
          const BB = IB.camera;
          BB.fov !== IB.targetFieldOfView && (BB.fov += (IB.targetFieldOfView - BB.fov) * (BB.fov > IB.targetFieldOfView ? .3 : .2), Math.abs(IB.targetFieldOfView - BB.fov) < 5e-4 && (BB.fov = IB.targetFieldOfView), IB.needsRender = !0), IB.needsRender && (IB.lg.render(), IB.needsRender = !IB.lg.isReady() || !IB.engine.areAllEffectsReady())
        })), () => {
          nI.current = null, IB.engine.dispose()
        }
      }), []), (0, TB.useEffect)((() => {
        const BB = cI.current;
        if (!BB) return;
        const IB = () => {
            UI.current = !1, gI(document.pointerLockElement === BB)
          },
          ZB = () => {
            UI.current && (UI.current = !1, yI(!1))
          },
          TB = IB => {
            const ZB = !LI.current.canLock && document.activeElement === BB && 0 !== (1 & IB.buttons);
            if (document.pointerLockElement !== BB && !ZB) return;
            const TB = LI.current.mouseSensitivity * YB;
            iI((BB => function(BB, IB, ZB) {
              const TB = 2 * Math.PI;
              return {
                ...BB,
                heading: ((BB.heading + IB) % TB + TB) % TB,
                pitch: Math.max(-mB, Math.min(mB, BB.pitch + ZB))
              }
            }(null !== BB && void 0 !== BB ? BB : LI.current.fittedView, IB.movementX * TB, IB.movementY * TB)))
          };
        return document.addEventListener("pointerlockchange", IB), document.addEventListener("pointerlockerror", ZB), document.addEventListener("pointermove", TB), () => {
          document.removeEventListener("pointerlockchange", IB), document.removeEventListener("pointerlockerror", ZB), document.removeEventListener("pointermove", TB), document.pointerLockElement === BB && (0, QB.c)()
        }
      }), []), (0, TB.useEffect)((() => {
        const BB = nI.current;
        null !== BB && 0 !== hI.width && 0 !== hI.height && (BB.engine.resize(), BB.needsRender = !0)
      }), [hI.width, hI.height]), (0, TB.useEffect)((() => {
        const BB = nI.current;
        null !== BB && (BB.targetFieldOfView = PI * (QI ? OB : 1))
      }), [PI, QI]), (0, TB.useEffect)((() => {
        const BB = nI.current;
        null !== BB && function(BB, IB, ZB, TB) {
          const JB = [],
            oB = [],
            GB = [],
            vB = [];
          for (let kB = 0; kB < IB.count; kB++) {
            const BB = IB.values[kB],
              cB = (0, dB.t)(BB, ZB, TB);
            if (cB <= 0) continue;
            const [nB, hB, zB] = (0, dB.m)((0, dB.F)(BB, ZB)), FB = cB >= 1;
            (FB ? JB : GB).push(IB.positions[3 * kB] + .5, IB.positions[3 * kB + 1] + .5, IB.positions[3 * kB + 2] + .5), (FB ? oB : vB).push(nB / 255, hB / 255, zB / 255, cB)
          }
          KB(BB.cells, Float32Array.from(JB), Float32Array.from(oB), oB.length / 4), BB.translucent = {
            pg: Float32Array.from(GB),
            colours: Float32Array.from(vB),
            count: vB.length / 4
          }, BB.translucentSortedFrom = null, VB(BB), BB.needsRender = !0
        }(BB, jI, ZB, jB)
      }), [jI, ZB, jB]), (0, TB.useEffect)((() => {
        const BB = nI.current;
        null !== BB && function(BB, IB) {
          BB.chunkGridOrigin = IB, BB.chunkGridCentre = null, DB(BB)
        }(BB, XB.min)
      }), [XB]), (0, TB.useEffect)((() => {
        const BB = nI.current;
        null !== BB && function(BB, IB, ZB) {
          const TB = [],
            JB = [];
          if (null !== IB) {
            const {
              positions: BB,
              colours: oB,
              count: GB
            } = IB.surface;
            for (let IB = 0; IB < GB; IB++) {
              const GB = [BB[3 * IB], BB[3 * IB + 1], BB[3 * IB + 2]];
              [0, 1, 2].every((BB => GB[BB] >= ZB.min[BB] - MB && GB[BB] <= ZB.max[BB] + MB)) && (TB.push(GB[0] - ZB.min[0] + .5, GB[1] - ZB.min[1] + .5, GB[2] - ZB.min[2] + .5), JB.push(oB[3 * IB] / 255, oB[3 * IB + 1] / 255, oB[3 * IB + 2] / 255, 1))
            }
          }
          KB(BB.schematicBlocks, Float32Array.from(TB), Float32Array.from(JB), JB.length / 4), BB.needsRender = !0
        }(BB, eB, XB)
      }), [eB, XB]), (0, TB.useEffect)((() => {
        const BB = nI.current;
        null !== BB && null !== BB.chunkGrid && (BB.chunkGrid.isVisible = wI, BB.needsRender = !0)
      }), [wI, XB]), (0, TB.useEffect)((() => {
        const BB = nI.current;
        null !== BB && function(BB, IB, ZB) {
          const {
            camera: TB
          } = BB;
          TB.position.set(IB.position[0], IB.position[1], IB.position[2]), TB.rotation.set(IB.pitch, IB.heading, 0);
          const JB = (PB + 1) * NB.f.YN * Math.sqrt(3);
          TB.maxZ = Math.max(JB, Math.hypot(...GI(IB.position, vI(JI({
            min: [0, 0, 0],
            max: ZB
          }), -1))) + 2 * Math.hypot(...ZB)), DB(BB), VB(BB), BB.needsRender = !0
        }(BB, XI, MI)
      }), [XI, MI]), (0, TB.useEffect)((() => {
        const BB = nI.current;
        null !== BB && (BB.targetOutline.isVisible = null !== eI, null !== eI && BB.targetOutline.position.set(eI.x - pI[0] + .5, eI.y - pI[1] + .5, eI.z - pI[2] + .5), BB.needsRender = !0)
      }), [eI, pI]);
      return (0, sB.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: kI,
        children: [(0, sB.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: cI,
          style: {
            width: `${hI.width}px`,
            height: `${hI.height}px`
          },
          tabIndex: 0,
          "aria-label": xB("3D heatmap"),
          onClick: () => {
            const BB = cI.current;
            if (null === BB) return;
            if (BB.focus({
                preventScroll: !0
              }), NI || !qI) return;
            const IB = BB.requestPointerLock();
            IB instanceof Promise ? IB.catch((BB => {
              BB instanceof DOMException && ("WrongDocumentError" === BB.name || "NotSupportedError" === BB.name) && yI(!1)
            })) : UI.current = !0
          },
          ...uI,
          onKeyDown: BB => {
            if (CI && iB.has(BB.code)) return BB.preventDefault(), void(() => {
              const BB = cI.current;
              null !== BB && document.pointerLockElement === BB ? (0, QB.c)() : null === BB || void 0 === BB || BB.blur()
            })();
            const IB = pB[BB.code];
            return CI && void 0 !== IB ? (BB.preventDefault(), void fB(IB)) : CI && (0, CB.b)("replayPlayPause", BB.code) && !(0, CB.b)("Zoom", BB.code) ? (BB.preventDefault(), void(BB.repeat || AB())) : CI && BB.code === aB ? (BB.preventDefault(), void lB()) : CI && BB.code === rB ? (BB.preventDefault(), void iI(null)) : CI && BB.code === RB ? (BB.preventDefault(), void OI((BB => !BB))) : void uI.onKeyDown(BB)
          },
          onFocus: () => {
            dI(!0)
          },
          onBlur: () => {
            dI(!1), uI.onBlur()
          }
        }), zI && (0, sB.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: xB("3D view isn't available in this browser.")
        }), CI && (0, sB.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, sB.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: XI.position.map(((BB, IB) => (BB + pI[IB]).toFixed(2))).join(" ")
        }), wI && (0, sB.jsx)(EB, {
          heading: XI.heading,
          pitch: XI.pitch,
          onViewFrom: BB => {
            const IB = vI(BB, -1),
              ZB = 0 === IB[1] ? {
                heading: Math.atan2(IB[0], IB[2]),
                pitch: 0
              } : {
                heading: XI.heading,
                pitch: IB[1] < 0 ? mB : -mB
              };
            iI(ZI(rI, RI, PI, ZB))
          },
          onTurn: (BB, IB) => {
            iI((ZB => function(BB, IB, ZB, TB) {
              return TI(BB, IB, {
                heading: BB.heading + ZB * tB,
                pitch: Math.max(-mB, Math.min(mB, BB.pitch + TB * tB))
              })
            }(null !== ZB && void 0 !== ZB ? ZB : LI.current.fittedView, JI(rI), BB, IB)))
          },
          onFlip: () => {
            iI((BB => function(BB, IB) {
              return TI(BB, IB, {
                heading: BB.heading + Math.PI,
                pitch: -BB.pitch
              })
            }(null !== BB && void 0 !== BB ? BB : LI.current.fittedView, JI(rI))))
          }
        }), null !== eI && (0, sB.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === bB ? xB("studio:heatmapBlockReadout", {
            x: eI.x,
            y: eI.y,
            z: eI.z,
            count: (0, FB.J)(eI.value)
          }) : bB(eI.x, eI.y, eI.z, eI.value)
        }), (0, sB.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [uB, (0, sB.jsx)(UB.V, {
            active: null === YI,
            onClick: () => {
              iI(null)
            },
            children: (0, sB.jsx)(WB.d, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function EB(BB) {
      let {
        heading: IB,
        pitch: ZB,
        onViewFrom: JB,
        onTurn: oB,
        onFlip: GB
      } = BB;
      const {
        t: vB
      } = (0, gB.G)(), kB = (0, TB.useRef)(null), cB = BI({
        heading: IB,
        pitch: ZB
      }), nB = II(IB), hB = cI(cB, nB), zB = fB + lB + 2, FB = uB.flatMap((BB => [1, -1].map((IB => {
        const ZB = vI(BB.direction, IB);
        return {
          ...BB,
          sign: IB,
          direction: ZB,
          endX: zB + kI(ZB, nB) * fB,
          endY: zB - kI(ZB, hB) * fB,
          depth: kI(ZB, cB)
        }
      })))).sort(((BB, IB) => IB.depth - BB.depth));
      return (0, sB.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * zB,
        height: 2 * zB,
        "aria-hidden": !0,
        onPointerDown: BB => {
          var IB, ZB;
          BB.currentTarget.setPointerCapture(BB.pointerId);
          const TB = BB.target,
            JB = TB.getAttribute("data-end");
          kB.current = {
            pointerId: BB.pointerId,
            x: BB.clientX,
            y: BB.clientY,
            travel: 0,
            side: null === JB ? null : null !== (IB = null === (ZB = FB[Number(JB)]) || void 0 === ZB ? void 0 : ZB.direction) && void 0 !== IB ? IB : null,
            isOnMiddle: TB.hasAttribute("data-middle")
          }
        },
        onPointerMove: BB => {
          const IB = kB.current;
          if (null === IB || IB.pointerId !== BB.pointerId) return;
          const ZB = BB.clientX - IB.x,
            TB = BB.clientY - IB.y;
          IB.x = BB.clientX, IB.y = BB.clientY, IB.travel += Math.abs(ZB) + Math.abs(TB), IB.travel >= bB && oB(ZB, TB)
        },
        onPointerUp: BB => {
          const IB = kB.current;
          kB.current = null, null === IB || IB.pointerId !== BB.pointerId || IB.travel >= bB || (null !== IB.side ? JB(IB.side) : IB.isOnMiddle && GB())
        },
        onPointerCancel: () => {
          kB.current = null
        },
        children: [FB.map(((BB, IB) => {
          const ZB = BB.sign > 0;
          return (0, sB.jsxs)("g", {
            children: [(0, sB.jsx)("line", {
              x1: zB,
              y1: zB,
              x2: BB.endX,
              y2: BB.endY,
              stroke: BB.colour,
              strokeOpacity: ZB ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, sB.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": IB,
              cx: BB.endX,
              cy: BB.endY,
              r: ZB ? lB : lB - 1,
              fill: BB.colour,
              fillOpacity: ZB ? 1 : .3,
              stroke: BB.colour,
              strokeWidth: ZB ? 0 : 1.5,
              children: (0, sB.jsx)("title", {
                children: `${vB("View from")} ${ZB?"+":"\u2212"}${BB.name}`
              })
            }), ZB && (0, sB.jsx)("text", {
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
          }, `${ZB?"+":"-"}${BB.name}`)
        })), (0, sB.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: zB,
          cy: zB,
          r: AB,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, sB.jsx)("title", {
            children: vB("View from the opposite side")
          })
        })]
      })
    }

    function DB(BB) {
      var IB, ZB, TB;
      const {
        chunkGridOrigin: JB,
        camera: oB
      } = BB;
      if (null === JB) return;
      const GB = [oB.position.x, oB.position.y, oB.position.z],
        vB = [0, 2].map((BB => Math.floor((GB[BB] + JB[BB]) / NB.f.YN))),
        kB = BB.chunkGridCentre;
      if (null !== kB && kB.every(((BB, IB) => BB === vB[IB]))) return;
      const hB = null === (IB = null === (ZB = BB.chunkGrid) || void 0 === ZB ? void 0 : ZB.isVisible) || void 0 === IB || IB;
      null === (TB = BB.chunkGrid) || void 0 === TB || TB.dispose();
      const [FB, gB] = [0, 2].map(((BB, IB) => {
        const ZB = [];
        for (let TB = vB[IB] - PB; TB <= vB[IB] + PB + 1; TB++) ZB.push(TB * NB.f.YN - JB[BB]);
        return ZB
      })), qB = -JB[1], yB = [];
      for (const cB of gB) yB.push([new nB.rN(FB[0], qB, cB), new nB.rN(FB[FB.length - 1], qB, cB)]);
      for (const cB of FB) yB.push([new nB.rN(cB, qB, gB[0]), new nB.rN(cB, qB, gB[gB.length - 1])]);
      const UB = (0, zB.e)("Heatmap3DChunkGrid", {
        lines: yB
      }, BB.lg);
      UB.color = new cB.Color3(.45, .6, .78), UB.tg = !1, UB.isVisible = hB, BB.chunkGrid = UB, BB.chunkGridCentre = vB, BB.needsRender = !0
    }

    function KB(BB, IB, ZB, TB) {
      BB.ZBB("matrix", function(BB, IB) {
        const ZB = new Float32Array(16 * IB);
        for (let TB = 0; TB < IB; TB++) {
          const IB = 16 * TB;
          ZB[IB] = 1, ZB[IB + 5] = 1, ZB[IB + 10] = 1, ZB[IB + 12] = BB[3 * TB], ZB[IB + 13] = BB[3 * TB + 1], ZB[IB + 14] = BB[3 * TB + 2], ZB[IB + 15] = 1
        }
        return ZB
      }(IB, TB), 16, !0), BB.ZBB("color", ZB, 4, !0), BB.isVisible = TB > 0
    }

    function VB(BB) {
      const {
        camera: IB,
        translucent: ZB
      } = BB, TB = [IB.position.x, IB.position.y, IB.position.z], JB = BB.translucentSortedFrom;
      if (null !== JB && Math.hypot(TB[0] - JB[0], TB[1] - JB[1], TB[2] - JB[2]) < jB) return;
      BB.translucentSortedFrom = TB;
      const oB = new Float64Array(ZB.count),
        GB = new Uint32Array(ZB.count);
      for (let cB = 0; cB < ZB.count; cB++) {
        const BB = ZB.pg[3 * cB] - TB[0],
          IB = ZB.pg[3 * cB + 1] - TB[1],
          JB = ZB.pg[3 * cB + 2] - TB[2];
        oB[cB] = BB * BB + IB * IB + JB * JB, GB[cB] = cB
      }
      GB.sort(((BB, IB) => oB[IB] - oB[BB]));
      const vB = new Float32Array(3 * ZB.count),
        kB = new Float32Array(4 * ZB.count);
      GB.forEach(((BB, IB) => {
        vB.set(ZB.pg.subarray(3 * BB, 3 * BB + 3), 3 * IB), kB.set(ZB.colours.subarray(4 * BB, 4 * BB + 4), 4 * IB)
      })), KB(BB.translucentCells, vB, kB, ZB.count), BB.needsRender = !0
    }

    function SB(BB, IB) {
      const ZB = (ZB, TB, JB) => new nB.rN(0 === ZB ? BB[0] : IB[0], 0 === TB ? BB[1] : IB[1], 0 === JB ? BB[2] : IB[2]),
        TB = [];
      for (const JB of [0, 1])
        for (const BB of [0, 1]) TB.push([ZB(0, JB, BB), ZB(1, JB, BB)], [ZB(JB, 0, BB), ZB(JB, 1, BB)], [ZB(JB, BB, 0), ZB(JB, BB, 1)]);
      return TB
    }

    function BI(BB) {
      return [Math.sin(BB.heading) * Math.cos(BB.pitch), -Math.sin(BB.pitch), Math.cos(BB.heading) * Math.cos(BB.pitch)]
    }

    function II(BB) {
      return [Math.cos(BB), 0, -Math.sin(BB)]
    }

    function ZI(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: XB,
        pitch: LB
      };
      const JB = [BB.max[0] - BB.min[0], BB.max[1] - BB.min[1], BB.max[2] - BB.min[2]],
        oB = BI(TB),
        GB = II(TB.heading),
        vB = cI(oB, GB),
        kB = Math.tan(ZB / 2),
        cB = kB * IB;
      let nB = 1;
      for (const hB of [-JB[0] / 2, JB[0] / 2])
        for (const BB of [-JB[1] / 2, JB[1] / 2])
          for (const IB of [-JB[2] / 2, JB[2] / 2]) {
            const ZB = [hB, BB, IB],
              TB = kI(ZB, oB);
            nB = Math.max(nB, Math.abs(kI(ZB, GB)) / cB - TB, Math.abs(kI(ZB, vB)) / kB - TB)
          }
      return {
        position: GI([BB.min[0] + JB[0] / 2, BB.min[1] + JB[1] / 2, BB.min[2] + JB[2] / 2], vI(oB, -nB * eB)),
        heading: TB.heading,
        pitch: TB.pitch
      }
    }

    function TI(BB, IB, ZB) {
      const TB = oI(BB),
        JB = oI(ZB),
        oB = GI(BB.position, vI(IB, -1)),
        GB = [0, 1, 2].reduce(((BB, IB) => GI(BB, vI(JB[IB], kI(oB, TB[IB])))), [0, 0, 0]);
      return {
        position: GI(IB, GB),
        heading: ZB.heading,
        pitch: ZB.pitch
      }
    }

    function JI(BB) {
      return vI(GI(BB.min, BB.max), .5)
    }

    function oI(BB) {
      const IB = BI(BB),
        ZB = II(BB.heading);
      return [IB, ZB, cI(IB, ZB)]
    }

    function GI(BB, IB) {
      return [BB[0] + IB[0], BB[1] + IB[1], BB[2] + IB[2]]
    }

    function vI(BB, IB) {
      return [BB[0] * IB, BB[1] * IB, BB[2] * IB]
    }

    function kI(BB, IB) {
      return BB[0] * IB[0] + BB[1] * IB[1] + BB[2] * IB[2]
    }

    function cI(BB, IB) {
      return [BB[1] * IB[2] - BB[2] * IB[1], BB[2] * IB[0] - BB[0] * IB[2], BB[0] * IB[1] - BB[1] * IB[0]]
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);