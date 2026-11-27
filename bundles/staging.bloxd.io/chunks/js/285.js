export const id = 285;
export const ids = [285];
export const modules = {
  41345: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => kR
    });
    GR(7570);
    var yR = GR(66),
      tR = GR(41352),
      uR = GR(41610),
      ZR = GR(41719),
      qR = GR(41768),
      iR = GR(41781),
      fR = GR(38329),
      VR = GR(38195),
      KR = GR(41932),
      wR = GR(41987),
      rR = (GR(42014), GR(1317)),
      eR = GR(203),
      aR = GR(1270),
      LR = GR(25),
      nR = GR(3909),
      UR = GR(1590),
      WR = GR(1468),
      AR = GR(7562),
      CR = GR(7572),
      XR = GR(5250),
      MR = GR(1378);
    const BR = 1.2,
      lR = .2,
      pR = .0066 * Math.PI / 180,
      gR = new Set(["Escape", "KeyG"]),
      bR = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      vR = "ArrowUp",
      OR = new Set([...Object.keys(bR), vR, "ArrowDown"]),
      xR = 32,
      NR = 1,
      DR = 10,
      HR = "F4",
      oR = "Period",
      cR = Math.PI / 2 - .001,
      PR = Math.PI / 6,
      IR = Math.PI / 6,
      mR = 1.08,
      zR = [{
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
      SR = 24,
      jR = 7,
      dR = 4,
      ER = .01,
      YR = 4;

    function kR(RR) {
      let {
        heatmap: JR,
        scale: GR,
        fullyOpaqueFrom: NR,
        bounds: PR,
        fitBounds: IR,
        schematic: mR,
        controls: zR,
        onStepTime: SR,
        onShowAllTime: jR,
        onTogglePlaying: dR,
        getReadout: YR = null
      } = RR;
      const {
        t: kR
      } = (0, aR.A)(), {
        clientEscMenuOptions: uJ
      } = (0, LR.o)(["clientEscMenuOptions"]), iJ = (0, yR.useRef)(null), fJ = (0, yR.useRef)(null), VJ = (0, yR.useRef)(null), KJ = (0, nR.b)(iJ), [wJ, rJ] = (0, yR.useState)(!1), [eJ, aJ] = (0, yR.useState)(!1), [LJ, nJ] = (0, yR.useState)(!0), UJ = (0, yR.useRef)(!1), [WJ, AJ] = (0, yR.useState)(!1), CJ = eJ || !LJ && WJ, [XJ, MJ] = (0, yR.useState)(!1), [BJ, lJ] = (0, yR.useState)(!0), [pJ, gJ] = (0, yR.useState)(null), bJ = PR.min, [vJ, OJ] = (0, yR.useState)(bJ);
      vJ[0] === bJ[0] && vJ[1] === bJ[1] && vJ[2] === bJ[2] || (OJ(bJ), null !== pJ && gJ({
        ...pJ,
        position: ZJ(pJ.position, ZJ(vJ, qJ(bJ, -1)))
      }));
      const xJ = (0, yR.useMemo)((() => function(RR) {
          return [RR.max[0] - RR.min[0] + 1, RR.max[1] - RR.min[1] + 1, RR.max[2] - RR.min[2] + 1]
        }(PR)), [PR]),
        NJ = (0, yR.useMemo)((() => function(RR, JR) {
          const GR = [],
            yR = [];
          for (const [tR, uR] of Object.entries(RR.frequencies)) {
            const RR = Number(tR);
            for (const [tR, ZR] of Object.entries(uR)) {
              const uR = Number(tR);
              for (const [tR, qR] of Object.entries(ZR)) qR <= 0 || (GR.push(RR - JR[0], uR - JR[1], Number(tR) - JR[2]), yR.push(qR))
            }
          }
          return {
            positions: Int32Array.from(GR),
            values: Float64Array.from(yR),
            count: yR.length
          }
        }(JR, bJ)), [JR, bJ]),
        DJ = BR * uJ.cameraFOV / 100,
        HJ = KJ.height > 0 ? KJ.width / KJ.height : 1,
        oJ = (0, yR.useMemo)((() => function(RR, JR) {
          return {
            min: [RR.min[0] - JR[0], RR.min[1] - JR[1], RR.min[2] - JR[2]],
            max: [RR.max[0] - JR[0] + 1, RR.max[1] - JR[1] + 1, RR.max[2] - JR[2] + 1]
          }
        }(IR, bJ)), [IR, bJ]),
        cJ = GJ(oJ, HJ, DJ),
        PJ = null !== pJ && void 0 !== pJ ? pJ : cJ,
        IJ = (0, yR.useRef)({
          fittedView: cJ,
          fieldOfView: DJ,
          mouseSensitivity: uJ.mouseSensitivity,
          canLock: LJ
        });
      IJ.current = {
        fittedView: cJ,
        fieldOfView: DJ,
        mouseSensitivity: uJ.mouseSensitivity,
        canLock: LJ
      };
      const mJ = (0, yR.useMemo)((() => {
          if (!CJ) return null;
          const RR = (RR, GR, yR) => {
              var tR, uR, ZR;
              return null !== (tR = null === (uR = JR.frequencies[RR + bJ[0]]) || void 0 === uR || null === (ZR = uR[GR + bJ[1]]) || void 0 === ZR ? void 0 : ZR[yR + bJ[2]]) && void 0 !== tR ? tR : 0
            },
            yR = function(RR, JR, GR, yR) {
              let tR = 0,
                uR = 1 / 0;
              for (const KR of [0, 1, 2]) {
                if (0 === JR[KR]) {
                  if (RR[KR] < 0 || RR[KR] > GR[KR]) return null;
                  continue
                }
                const yR = (0 - RR[KR]) / JR[KR],
                  ZR = (GR[KR] - RR[KR]) / JR[KR];
                tR = Math.max(tR, Math.min(yR, ZR)), uR = Math.min(uR, Math.max(yR, ZR))
              }
              if (tR > uR) return null;
              const ZR = [0, 1, 2].map((yR => Math.min(GR[yR] - 1, Math.max(0, Math.floor(RR[yR] + JR[yR] * tR))))),
                qR = [0, 1, 2].map((RR => Math.sign(JR[RR]))),
                iR = [0, 1, 2].map((GR => {
                  if (0 === qR[GR]) return 1 / 0;
                  return ((qR[GR] > 0 ? ZR[GR] + 1 : ZR[GR]) - RR[GR]) / JR[GR]
                })),
                fR = [0, 1, 2].map((RR => 0 === qR[RR] ? 1 / 0 : Math.abs(1 / JR[RR])));
              let VR = null;
              for (;;) {
                const RR = yR(ZR[0], ZR[1], ZR[2]);
                if (RR >= 1) return ZR;
                RR > 0 && (VR = [ZR[0], ZR[1], ZR[2]]);
                const JR = iR[0] < iR[1] ? iR[0] < iR[2] ? 0 : 2 : iR[1] < iR[2] ? 1 : 2;
                if (iR[JR] > uR) return VR;
                if (ZR[JR] += qR[JR], iR[JR] += fR[JR], ZR[JR] < 0 || ZR[JR] >= GR[JR]) return VR
              }
            }(PJ.position, RJ(PJ), xJ, ((JR, yR, tR) => (0, AR.t)(RR(JR, yR, tR), GR, NR)));
          return null === yR ? null : {
            x: yR[0] + bJ[0],
            y: yR[1] + bJ[1],
            z: yR[2] + bJ[2],
            value: RR(yR[0], yR[1], yR[2])
          }
        }), [CJ, JR, bJ, PJ, xJ, GR, NR]),
        {
          keyHandlers: zJ
        } = (0, CR.g)({
          isEnabled: CJ,
          claimedKeyCodes: OR,
          mw: RR => {
            gJ((JR => function(RR, JR) {
              const GR = [Math.sin(RR.heading), 0, Math.cos(RR.heading)],
                yR = ZJ(ZJ(qJ(GR, JR.forward), qJ(JJ(RR.heading), JR.right)), [0, JR.up, 0]);
              return {
                ...RR,
                position: ZJ(RR.position, yR)
              }
            }(null !== JR && void 0 !== JR ? JR : IJ.current.fittedView, RR)))
          },
          onZoomChange: MJ
        });
      (0, yR.useEffect)((() => {
        const RR = fJ.current;
        if (!RR) return;
        let JR;
        try {
          JR = function(RR, JR) {
            const GR = new tR.c(RR, !0, {
                stencil: !1
              }, !0),
              yR = new uR.c(GR),
              [rR, eR, aR] = AR.L;
            yR.clearColor = new fR.e(rR / 255, eR / 255, aR / 255, 1);
            const LR = new ZR.e("Heatmap3DCamera", VR.Fe.Zero(), yR);
            LR.fov = JR, LR.minZ = .05;
            const nR = new qR.b("Heatmap3DLight", new VR.Fe(.4, 1, -.6), yR);
            nR.diffuse = fR.Color3.White(), nR.groundColor = fR.Color3.Black(), nR.specular = fR.Color3.Black();
            const UR = new iR.StandardMaterial("Heatmap3DCellMaterial", yR);
            UR.diffuseColor = new fR.Color3(.4, .4, .4), UR.emissiveColor = new fR.Color3(.62, .62, .62), UR.specularColor = fR.Color3.Black();
            const WR = (0, KR.e)("Heatmap3DCells", {
              size: 1
            }, yR);
            WR.material = UR, WR.ZL = !1, WR.Qe = !0, WR.isVisible = !1;
            const CR = (0, KR.e)("Heatmap3DTranslucentCells", {
              size: 1
            }, yR);
            CR.material = UR, CR.hasVertexAlpha = !0, CR.ZL = !1, CR.Qe = !0, CR.isVisible = !1;
            const XR = new iR.StandardMaterial("Heatmap3DSchematicMaterial", yR);
            XR.diffuseColor = new fR.Color3(.6, .6, .6), XR.emissiveColor = new fR.Color3(.4, .4, .4), XR.specularColor = fR.Color3.Black();
            const MR = (0, KR.e)("Heatmap3DSchematicBlocks", {
              size: 1
            }, yR);
            MR.material = XR, MR.ZL = !1, MR.Qe = !0, MR.isVisible = !1;
            const BR = (0, wR.e)("Heatmap3DTarget", {
              lines: hR([-.52, -.52, -.52], [.52, .52, .52])
            }, yR);
            return BR.color = new fR.Color3(.06, .14, .23), BR.renderingGroupId = 1, BR.ZL = !1, BR.isVisible = !1, {
              engine: GR,
              tL: yR,
              camera: LR,
              cells: WR,
              translucentCells: CR,
              translucent: {
                pa: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: MR,
              targetOutline: BR,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: JR,
              needsRender: !0
            }
          }(RR, IJ.current.fieldOfView)
        } catch (GR) {
          return console.error("Failed to start the 3D heatmap", GR), void rJ(!0)
        }
        return VJ.current = JR, JR.engine.runRenderLoop((() => {
          const RR = JR.camera;
          RR.fov !== JR.targetFieldOfView && (RR.fov += (JR.targetFieldOfView - RR.fov) * (RR.fov > JR.targetFieldOfView ? .3 : .2), Math.abs(JR.targetFieldOfView - RR.fov) < 5e-4 && (RR.fov = JR.targetFieldOfView), JR.needsRender = !0), JR.needsRender && (JR.tL.render(), JR.needsRender = !JR.tL.isReady() || !JR.engine.areAllEffectsReady())
        })), () => {
          VJ.current = null, JR.engine.dispose()
        }
      }), []), (0, yR.useEffect)((() => {
        const RR = fJ.current;
        if (!RR) return;
        const JR = () => {
            UJ.current = !1, aJ(document.pointerLockElement === RR)
          },
          GR = () => {
            UJ.current && (UJ.current = !1, nJ(!1))
          },
          yR = JR => {
            const GR = !IJ.current.canLock && document.activeElement === RR && 0 !== (1 & JR.buttons);
            if (document.pointerLockElement !== RR && !GR) return;
            const yR = IJ.current.mouseSensitivity * pR;
            gJ((RR => function(RR, JR, GR) {
              const yR = 2 * Math.PI;
              return {
                ...RR,
                heading: ((RR.heading + JR) % yR + yR) % yR,
                pitch: Math.max(-cR, Math.min(cR, RR.pitch + GR))
              }
            }(null !== RR && void 0 !== RR ? RR : IJ.current.fittedView, JR.movementX * yR, JR.movementY * yR)))
          };
        return document.addEventListener("pointerlockchange", JR), document.addEventListener("pointerlockerror", GR), document.addEventListener("pointermove", yR), () => {
          document.removeEventListener("pointerlockchange", JR), document.removeEventListener("pointerlockerror", GR), document.removeEventListener("pointermove", yR), document.pointerLockElement === RR && (0, XR.c)()
        }
      }), []), (0, yR.useEffect)((() => {
        const RR = VJ.current;
        null !== RR && 0 !== KJ.width && 0 !== KJ.height && (RR.engine.resize(), RR.needsRender = !0)
      }), [KJ.width, KJ.height]), (0, yR.useEffect)((() => {
        const RR = VJ.current;
        null !== RR && (RR.targetFieldOfView = DJ * (XJ ? lR : 1))
      }), [DJ, XJ]), (0, yR.useEffect)((() => {
        const RR = VJ.current;
        null !== RR && function(RR, JR, GR, yR) {
          const tR = [],
            uR = [],
            ZR = [],
            qR = [];
          for (let iR = 0; iR < JR.count; iR++) {
            const RR = JR.values[iR],
              fR = (0, AR.t)(RR, GR, yR);
            if (fR <= 0) continue;
            const [VR, KR, wR] = (0, AR.m)((0, AR.C)(RR, GR)), rR = fR >= 1;
            (rR ? tR : ZR).push(JR.positions[3 * iR] + .5, JR.positions[3 * iR + 1] + .5, JR.positions[3 * iR + 2] + .5), (rR ? uR : qR).push(VR / 255, KR / 255, wR / 255, fR)
          }
          TR(RR.cells, Float32Array.from(tR), Float32Array.from(uR), uR.length / 4), RR.translucent = {
            pa: Float32Array.from(ZR),
            colours: Float32Array.from(qR),
            count: qR.length / 4
          }, RR.translucentSortedFrom = null, sR(RR), RR.needsRender = !0
        }(RR, NJ, GR, NR)
      }), [NJ, GR, NR]), (0, yR.useEffect)((() => {
        const RR = VJ.current;
        null !== RR && function(RR, JR) {
          RR.chunkGridOrigin = JR, RR.chunkGridCentre = null, FR(RR)
        }(RR, PR.min)
      }), [PR]), (0, yR.useEffect)((() => {
        const RR = VJ.current;
        null !== RR && function(RR, JR, GR) {
          const yR = [],
            tR = [];
          if (null !== JR) {
            const {
              positions: RR,
              colours: uR,
              count: ZR
            } = JR.surface;
            for (let JR = 0; JR < ZR; JR++) {
              const ZR = [RR[3 * JR], RR[3 * JR + 1], RR[3 * JR + 2]];
              [0, 1, 2].every((RR => ZR[RR] >= GR.min[RR] - xR && ZR[RR] <= GR.max[RR] + xR)) && (yR.push(ZR[0] - GR.min[0] + .5, ZR[1] - GR.min[1] + .5, ZR[2] - GR.min[2] + .5), tR.push(uR[3 * JR] / 255, uR[3 * JR + 1] / 255, uR[3 * JR + 2] / 255, 1))
            }
          }
          TR(RR.schematicBlocks, Float32Array.from(yR), Float32Array.from(tR), tR.length / 4), RR.needsRender = !0
        }(RR, mR, PR)
      }), [mR, PR]), (0, yR.useEffect)((() => {
        const RR = VJ.current;
        null !== RR && null !== RR.chunkGrid && (RR.chunkGrid.isVisible = BJ, RR.needsRender = !0)
      }), [BJ, PR]), (0, yR.useEffect)((() => {
        const RR = VJ.current;
        null !== RR && function(RR, JR, GR) {
          const {
            camera: yR
          } = RR;
          yR.position.set(JR.position[0], JR.position[1], JR.position[2]), yR.rotation.set(JR.pitch, JR.heading, 0);
          const tR = (DR + 1) * eR.g.LK * Math.sqrt(3);
          yR.maxZ = Math.max(tR, Math.hypot(...ZJ(JR.position, qJ(tJ({
            min: [0, 0, 0],
            max: GR
          }), -1))) + 2 * Math.hypot(...GR)), FR(RR), sR(RR), RR.needsRender = !0
        }(RR, PJ, xJ)
      }), [PJ, xJ]), (0, yR.useEffect)((() => {
        const RR = VJ.current;
        null !== RR && (RR.targetOutline.isVisible = null !== mJ, null !== mJ && RR.targetOutline.position.set(mJ.x - bJ[0] + .5, mJ.y - bJ[1] + .5, mJ.z - bJ[2] + .5), RR.needsRender = !0)
      }), [mJ, bJ]);
      return (0, MR.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: iJ,
        children: [(0, MR.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: fJ,
          style: {
            width: `${KJ.width}px`,
            height: `${KJ.height}px`
          },
          tabIndex: 0,
          "aria-label": kR("3D heatmap"),
          onClick: () => {
            const RR = fJ.current;
            if (null === RR) return;
            if (RR.focus({
                preventScroll: !0
              }), eJ || !LJ) return;
            const JR = RR.requestPointerLock();
            JR instanceof Promise ? JR.catch((RR => {
              RR instanceof DOMException && ("WrongDocumentError" === RR.name || "NotSupportedError" === RR.name) && nJ(!1)
            })) : UJ.current = !0
          },
          ...zJ,
          onKeyDown: RR => {
            if (CJ && gR.has(RR.code)) return RR.preventDefault(), void(() => {
              const RR = fJ.current;
              null !== RR && document.pointerLockElement === RR ? (0, XR.c)() : null === RR || void 0 === RR || RR.blur()
            })();
            const JR = bR[RR.code];
            return CJ && void 0 !== JR ? (RR.preventDefault(), void SR(JR)) : CJ && (0, CR.c)("replayPlayPause", RR.code) && !(0, CR.c)("Zoom", RR.code) ? (RR.preventDefault(), void(RR.repeat || dR())) : CJ && RR.code === vR ? (RR.preventDefault(), void jR()) : CJ && RR.code === oR ? (RR.preventDefault(), void gJ(null)) : CJ && RR.code === HR ? (RR.preventDefault(), void lJ((RR => !RR))) : void zJ.onKeyDown(RR)
          },
          onFocus: () => {
            AJ(!0)
          },
          onBlur: () => {
            AJ(!1), zJ.onBlur()
          }
        }), wJ && (0, MR.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: kR("3D view isn't available in this browser.")
        }), CJ && (0, MR.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, MR.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: PJ.position.map(((RR, JR) => (RR + bJ[JR]).toFixed(2))).join(" ")
        }), BJ && (0, MR.jsx)(QR, {
          heading: PJ.heading,
          pitch: PJ.pitch,
          onViewFrom: RR => {
            const JR = qJ(RR, -1),
              GR = 0 === JR[1] ? {
                heading: Math.atan2(JR[0], JR[2]),
                pitch: 0
              } : {
                heading: PJ.heading,
                pitch: JR[1] < 0 ? cR : -cR
              };
            gJ(GJ(oJ, HJ, DJ, GR))
          },
          onTurn: (RR, JR) => {
            gJ((GR => function(RR, JR, GR, yR) {
              return yJ(RR, JR, {
                heading: RR.heading + GR * ER,
                pitch: Math.max(-cR, Math.min(cR, RR.pitch + yR * ER))
              })
            }(null !== GR && void 0 !== GR ? GR : IJ.current.fittedView, tJ(oJ), RR, JR)))
          },
          onFlip: () => {
            gJ((RR => function(RR, JR) {
              return yJ(RR, JR, {
                heading: RR.heading + Math.PI,
                pitch: -RR.pitch
              })
            }(null !== RR && void 0 !== RR ? RR : IJ.current.fittedView, tJ(oJ))))
          }
        }), null !== mJ && (0, MR.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === YR ? kR("studio:heatmapBlockReadout", {
            x: mJ.x,
            y: mJ.y,
            z: mJ.z,
            count: (0, rR.J)(mJ.value)
          }) : YR(mJ.x, mJ.y, mJ.z, mJ.value)
        }), (0, MR.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [zR, (0, MR.jsx)(UR.U, {
            active: null === pJ,
            onClick: () => {
              gJ(null)
            },
            children: (0, MR.jsx)(WR.d, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function QR(RR) {
      let {
        heading: JR,
        pitch: GR,
        onViewFrom: tR,
        onTurn: uR,
        onFlip: ZR
      } = RR;
      const {
        t: qR
      } = (0, aR.A)(), iR = (0, yR.useRef)(null), fR = RJ({
        heading: JR,
        pitch: GR
      }), VR = JJ(JR), KR = fJ(fR, VR), wR = SR + jR + 2, rR = zR.flatMap((RR => [1, -1].map((JR => {
        const GR = qJ(RR.direction, JR);
        return {
          ...RR,
          sign: JR,
          direction: GR,
          endX: wR + iJ(GR, VR) * SR,
          endY: wR - iJ(GR, KR) * SR,
          depth: iJ(GR, fR)
        }
      })))).sort(((RR, JR) => JR.depth - RR.depth));
      return (0, MR.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * wR,
        height: 2 * wR,
        "aria-hidden": !0,
        onPointerDown: RR => {
          var JR, GR;
          RR.currentTarget.setPointerCapture(RR.pointerId);
          const yR = RR.target,
            tR = yR.getAttribute("data-end");
          iR.current = {
            pointerId: RR.pointerId,
            x: RR.clientX,
            y: RR.clientY,
            travel: 0,
            side: null === tR ? null : null !== (JR = null === (GR = rR[Number(tR)]) || void 0 === GR ? void 0 : GR.direction) && void 0 !== JR ? JR : null,
            isOnMiddle: yR.hasAttribute("data-middle")
          }
        },
        onPointerMove: RR => {
          const JR = iR.current;
          if (null === JR || JR.pointerId !== RR.pointerId) return;
          const GR = RR.clientX - JR.x,
            yR = RR.clientY - JR.y;
          JR.x = RR.clientX, JR.y = RR.clientY, JR.travel += Math.abs(GR) + Math.abs(yR), JR.travel >= YR && uR(GR, yR)
        },
        onPointerUp: RR => {
          const JR = iR.current;
          iR.current = null, null === JR || JR.pointerId !== RR.pointerId || JR.travel >= YR || (null !== JR.side ? tR(JR.side) : JR.isOnMiddle && ZR())
        },
        onPointerCancel: () => {
          iR.current = null
        },
        children: [rR.map(((RR, JR) => {
          const GR = RR.sign > 0;
          return (0, MR.jsxs)("g", {
            children: [(0, MR.jsx)("line", {
              x1: wR,
              y1: wR,
              x2: RR.endX,
              y2: RR.endY,
              stroke: RR.colour,
              strokeOpacity: GR ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, MR.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": JR,
              cx: RR.endX,
              cy: RR.endY,
              r: GR ? jR : jR - 1,
              fill: RR.colour,
              fillOpacity: GR ? 1 : .3,
              stroke: RR.colour,
              strokeWidth: GR ? 0 : 1.5,
              children: (0, MR.jsx)("title", {
                children: `${qR("View from")} ${GR?"+":"\u2212"}${RR.name}`
              })
            }), GR && (0, MR.jsx)("text", {
              pointerEvents: "none",
              x: RR.endX,
              y: RR.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: RR.name
            })]
          }, `${GR?"+":"-"}${RR.name}`)
        })), (0, MR.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: wR,
          cy: wR,
          r: dR,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, MR.jsx)("title", {
            children: qR("View from the opposite side")
          })
        })]
      })
    }

    function FR(RR) {
      var JR, GR, yR;
      const {
        chunkGridOrigin: tR,
        camera: uR
      } = RR;
      if (null === tR) return;
      const ZR = [uR.position.x, uR.position.y, uR.position.z],
        qR = [0, 2].map((RR => Math.floor((ZR[RR] + tR[RR]) / eR.g.LK))),
        iR = RR.chunkGridCentre;
      if (null !== iR && iR.every(((RR, JR) => RR === qR[JR]))) return;
      const KR = null === (JR = null === (GR = RR.chunkGrid) || void 0 === GR ? void 0 : GR.isVisible) || void 0 === JR || JR;
      null === (yR = RR.chunkGrid) || void 0 === yR || yR.dispose();
      const [rR, aR] = [0, 2].map(((RR, JR) => {
        const GR = [];
        for (let yR = qR[JR] - DR; yR <= qR[JR] + DR + 1; yR++) GR.push(yR * eR.g.LK - tR[RR]);
        return GR
      })), LR = -tR[1], nR = [];
      for (const fR of aR) nR.push([new VR.Fe(rR[0], LR, fR), new VR.Fe(rR[rR.length - 1], LR, fR)]);
      for (const fR of rR) nR.push([new VR.Fe(fR, LR, aR[0]), new VR.Fe(fR, LR, aR[aR.length - 1])]);
      const UR = (0, wR.e)("Heatmap3DChunkGrid", {
        lines: nR
      }, RR.tL);
      UR.color = new fR.Color3(.45, .6, .78), UR.ZL = !1, UR.isVisible = KR, RR.chunkGrid = UR, RR.chunkGridCentre = qR, RR.needsRender = !0
    }

    function TR(RR, JR, GR, yR) {
      RR.tJR("matrix", function(RR, JR) {
        const GR = new Float32Array(16 * JR);
        for (let yR = 0; yR < JR; yR++) {
          const JR = 16 * yR;
          GR[JR] = 1, GR[JR + 5] = 1, GR[JR + 10] = 1, GR[JR + 12] = RR[3 * yR], GR[JR + 13] = RR[3 * yR + 1], GR[JR + 14] = RR[3 * yR + 2], GR[JR + 15] = 1
        }
        return GR
      }(JR, yR), 16, !0), RR.tJR("color", GR, 4, !0), RR.isVisible = yR > 0
    }

    function sR(RR) {
      const {
        camera: JR,
        translucent: GR
      } = RR, yR = [JR.position.x, JR.position.y, JR.position.z], tR = RR.translucentSortedFrom;
      if (null !== tR && Math.hypot(yR[0] - tR[0], yR[1] - tR[1], yR[2] - tR[2]) < NR) return;
      RR.translucentSortedFrom = yR;
      const uR = new Float64Array(GR.count),
        ZR = new Uint32Array(GR.count);
      for (let fR = 0; fR < GR.count; fR++) {
        const RR = GR.pa[3 * fR] - yR[0],
          JR = GR.pa[3 * fR + 1] - yR[1],
          tR = GR.pa[3 * fR + 2] - yR[2];
        uR[fR] = RR * RR + JR * JR + tR * tR, ZR[fR] = fR
      }
      ZR.sort(((RR, JR) => uR[JR] - uR[RR]));
      const qR = new Float32Array(3 * GR.count),
        iR = new Float32Array(4 * GR.count);
      ZR.forEach(((RR, JR) => {
        qR.set(GR.pa.subarray(3 * RR, 3 * RR + 3), 3 * JR), iR.set(GR.colours.subarray(4 * RR, 4 * RR + 4), 4 * JR)
      })), TR(RR.translucentCells, qR, iR, GR.count), RR.needsRender = !0
    }

    function hR(RR, JR) {
      const GR = (GR, yR, tR) => new VR.Fe(0 === GR ? RR[0] : JR[0], 0 === yR ? RR[1] : JR[1], 0 === tR ? RR[2] : JR[2]),
        yR = [];
      for (const tR of [0, 1])
        for (const RR of [0, 1]) yR.push([GR(0, tR, RR), GR(1, tR, RR)], [GR(tR, 0, RR), GR(tR, 1, RR)], [GR(tR, RR, 0), GR(tR, RR, 1)]);
      return yR
    }

    function RJ(RR) {
      return [Math.sin(RR.heading) * Math.cos(RR.pitch), -Math.sin(RR.pitch), Math.cos(RR.heading) * Math.cos(RR.pitch)]
    }

    function JJ(RR) {
      return [Math.cos(RR), 0, -Math.sin(RR)]
    }

    function GJ(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: PR,
        pitch: IR
      };
      const tR = [RR.max[0] - RR.min[0], RR.max[1] - RR.min[1], RR.max[2] - RR.min[2]],
        uR = RJ(yR),
        ZR = JJ(yR.heading),
        qR = fJ(uR, ZR),
        iR = Math.tan(GR / 2),
        fR = iR * JR;
      let VR = 1;
      for (const KR of [-tR[0] / 2, tR[0] / 2])
        for (const RR of [-tR[1] / 2, tR[1] / 2])
          for (const JR of [-tR[2] / 2, tR[2] / 2]) {
            const GR = [KR, RR, JR],
              yR = iJ(GR, uR);
            VR = Math.max(VR, Math.abs(iJ(GR, ZR)) / fR - yR, Math.abs(iJ(GR, qR)) / iR - yR)
          }
      return {
        position: ZJ([RR.min[0] + tR[0] / 2, RR.min[1] + tR[1] / 2, RR.min[2] + tR[2] / 2], qJ(uR, -VR * mR)),
        heading: yR.heading,
        pitch: yR.pitch
      }
    }

    function yJ(RR, JR, GR) {
      const yR = uJ(RR),
        tR = uJ(GR),
        uR = ZJ(RR.position, qJ(JR, -1)),
        ZR = [0, 1, 2].reduce(((RR, JR) => ZJ(RR, qJ(tR[JR], iJ(uR, yR[JR])))), [0, 0, 0]);
      return {
        position: ZJ(JR, ZR),
        heading: GR.heading,
        pitch: GR.pitch
      }
    }

    function tJ(RR) {
      return qJ(ZJ(RR.min, RR.max), .5)
    }

    function uJ(RR) {
      const JR = RJ(RR),
        GR = JJ(RR.heading);
      return [JR, GR, fJ(JR, GR)]
    }

    function ZJ(RR, JR) {
      return [RR[0] + JR[0], RR[1] + JR[1], RR[2] + JR[2]]
    }

    function qJ(RR, JR) {
      return [RR[0] * JR, RR[1] * JR, RR[2] * JR]
    }

    function iJ(RR, JR) {
      return RR[0] * JR[0] + RR[1] * JR[1] + RR[2] * JR[2]
    }

    function fJ(RR, JR) {
      return [RR[1] * JR[2] - RR[2] * JR[1], RR[2] * JR[0] - RR[0] * JR[2], RR[0] * JR[1] - RR[1] * JR[0]]
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);