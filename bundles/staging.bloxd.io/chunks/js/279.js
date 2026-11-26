export const id = 279;
export const ids = [279];
export const modules = {
  41097: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => aH
    });
    LH(7e3);
    var AH = LH(45),
      rH = LH(41106),
      SH = LH(41374),
      hH = LH(41478),
      tH = LH(41525),
      zH = LH(41538),
      CH = LH(38071),
      EH = LH(37961),
      XH = LH(41685),
      GH = LH(41749),
      YH = (LH(41784), LH(1168)),
      uH = LH(176),
      QH = LH(1123),
      WH = LH(15),
      MH = LH(3018),
      xH = LH(1455),
      vH = LH(1315),
      PH = LH(6995),
      TH = LH(7002),
      UH = LH(4858),
      VH = LH(1225);
    const OH = 1.2,
      bH = .2,
      kH = .0066 * Math.PI / 180,
      mH = new Set(["Escape", "KeyG"]),
      oH = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      IH = "ArrowUp",
      fH = new Set([...Object.keys(oH), IH, "ArrowDown"]),
      lH = 32,
      KH = 1,
      cH = 10,
      eH = "F4",
      qH = "Period",
      gH = Math.PI / 2 - .001,
      NH = Math.PI / 6,
      RH = Math.PI / 6,
      jH = 1.08,
      nH = [{
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
      FH = 24,
      DH = 7,
      wH = 4,
      ZH = .01,
      dH = 4;

    function aH(HH) {
      let {
        heatmap: BH,
        scale: LH,
        fullyOpaqueFrom: KH,
        bounds: NH,
        fitBounds: RH,
        schematic: jH,
        controls: nH,
        onStepTime: FH,
        onShowAllTime: DH,
        onTogglePlaying: wH,
        getReadout: dH = null
      } = HH;
      const {
        t: aH
      } = (0, QH.B)(), {
        clientEscMenuOptions: SB
      } = (0, WH.m)(["clientEscMenuOptions"]), zB = (0, AH.useRef)(null), CB = (0, AH.useRef)(null), EB = (0, AH.useRef)(null), XB = (0, MH.c)(zB), [GB, YB] = (0, AH.useState)(!1), [uB, QB] = (0, AH.useState)(!1), [WB, MB] = (0, AH.useState)(!0), xB = (0, AH.useRef)(!1), [vB, PB] = (0, AH.useState)(!1), TB = uB || !WB && vB, [UB, VB] = (0, AH.useState)(!1), [OB, bB] = (0, AH.useState)(!0), [kB, mB] = (0, AH.useState)(null), oB = NH.min, [IB, fB] = (0, AH.useState)(oB);
      IB[0] === oB[0] && IB[1] === oB[1] && IB[2] === oB[2] || (fB(oB), null !== kB && mB({
        ...kB,
        position: hB(kB.position, hB(IB, tB(oB, -1)))
      }));
      const lB = (0, AH.useMemo)((() => function(HH) {
          return [HH.max[0] - HH.min[0] + 1, HH.max[1] - HH.min[1] + 1, HH.max[2] - HH.min[2] + 1]
        }(NH)), [NH]),
        KB = (0, AH.useMemo)((() => function(HH, BH) {
          const LH = [],
            AH = [];
          for (const [rH, SH] of Object.entries(HH.frequencies)) {
            const HH = Number(rH);
            for (const [rH, hH] of Object.entries(SH)) {
              const SH = Number(rH);
              for (const [rH, tH] of Object.entries(hH)) tH <= 0 || (LH.push(HH - BH[0], SH - BH[1], Number(rH) - BH[2]), AH.push(tH))
            }
          }
          return {
            positions: Int32Array.from(LH),
            values: Float64Array.from(AH),
            count: AH.length
          }
        }(BH, oB)), [BH, oB]),
        cB = OH * SB.cameraFOV / 100,
        eB = XB.height > 0 ? XB.width / XB.height : 1,
        qB = (0, AH.useMemo)((() => function(HH, BH) {
          return {
            min: [HH.min[0] - BH[0], HH.min[1] - BH[1], HH.min[2] - BH[2]],
            max: [HH.max[0] - BH[0] + 1, HH.max[1] - BH[1] + 1, HH.max[2] - BH[2] + 1]
          }
        }(RH, oB)), [RH, oB]),
        gB = LB(qB, eB, cB),
        NB = null !== kB && void 0 !== kB ? kB : gB,
        RB = (0, AH.useRef)({
          fittedView: gB,
          fieldOfView: cB,
          mouseSensitivity: SB.mouseSensitivity,
          canLock: WB
        });
      RB.current = {
        fittedView: gB,
        fieldOfView: cB,
        mouseSensitivity: SB.mouseSensitivity,
        canLock: WB
      };
      const jB = (0, AH.useMemo)((() => {
          if (!TB) return null;
          const HH = (HH, LH, AH) => {
              var rH, SH, hH;
              return null !== (rH = null === (SH = BH.frequencies[HH + oB[0]]) || void 0 === SH || null === (hH = SH[LH + oB[1]]) || void 0 === hH ? void 0 : hH[AH + oB[2]]) && void 0 !== rH ? rH : 0
            },
            AH = function(HH, BH, LH, AH) {
              let rH = 0,
                SH = 1 / 0;
              for (const XH of [0, 1, 2]) {
                if (0 === BH[XH]) {
                  if (HH[XH] < 0 || HH[XH] > LH[XH]) return null;
                  continue
                }
                const AH = (0 - HH[XH]) / BH[XH],
                  hH = (LH[XH] - HH[XH]) / BH[XH];
                rH = Math.max(rH, Math.min(AH, hH)), SH = Math.min(SH, Math.max(AH, hH))
              }
              if (rH > SH) return null;
              const hH = [0, 1, 2].map((AH => Math.min(LH[AH] - 1, Math.max(0, Math.floor(HH[AH] + BH[AH] * rH))))),
                tH = [0, 1, 2].map((HH => Math.sign(BH[HH]))),
                zH = [0, 1, 2].map((LH => {
                  if (0 === tH[LH]) return 1 / 0;
                  return ((tH[LH] > 0 ? hH[LH] + 1 : hH[LH]) - HH[LH]) / BH[LH]
                })),
                CH = [0, 1, 2].map((HH => 0 === tH[HH] ? 1 / 0 : Math.abs(1 / BH[HH])));
              let EH = null;
              for (;;) {
                const HH = AH(hH[0], hH[1], hH[2]);
                if (HH >= 1) return hH;
                HH > 0 && (EH = [hH[0], hH[1], hH[2]]);
                const BH = zH[0] < zH[1] ? zH[0] < zH[2] ? 0 : 2 : zH[1] < zH[2] ? 1 : 2;
                if (zH[BH] > SH) return EH;
                if (hH[BH] += tH[BH], zH[BH] += CH[BH], hH[BH] < 0 || hH[BH] >= LH[BH]) return EH
              }
            }(NB.position, HB(NB), lB, ((BH, AH, rH) => (0, PH.z)(HH(BH, AH, rH), LH, KH)));
          return null === AH ? null : {
            x: AH[0] + oB[0],
            y: AH[1] + oB[1],
            z: AH[2] + oB[2],
            value: HH(AH[0], AH[1], AH[2])
          }
        }), [TB, BH, oB, NB, lB, LH, KH]),
        {
          keyHandlers: nB
        } = (0, TH.g)({
          isEnabled: TB,
          claimedKeyCodes: fH,
          KG: HH => {
            mB((BH => function(HH, BH) {
              const LH = [Math.sin(HH.heading), 0, Math.cos(HH.heading)],
                AH = hB(hB(tB(LH, BH.forward), tB(BB(HH.heading), BH.right)), [0, BH.up, 0]);
              return {
                ...HH,
                position: hB(HH.position, AH)
              }
            }(null !== BH && void 0 !== BH ? BH : RB.current.fittedView, HH)))
          },
          onZoomChange: VB
        });
      (0, AH.useEffect)((() => {
        const HH = CB.current;
        if (!HH) return;
        let BH;
        try {
          BH = function(HH, BH) {
            const LH = new rH.b(HH, !0, {
                stencil: !1
              }, !0),
              AH = new SH.e(LH),
              [YH, uH, QH] = PH.Q;
            AH.clearColor = new CH.d(YH / 255, uH / 255, QH / 255, 1);
            const WH = new hH.b("Heatmap3DCamera", EH.lu.Zero(), AH);
            WH.fov = BH, WH.minZ = .05;
            const MH = new tH.d("Heatmap3DLight", new EH.lu(.4, 1, -.6), AH);
            MH.diffuse = CH.Color3.White(), MH.groundColor = CH.Color3.Black(), MH.specular = CH.Color3.Black();
            const xH = new zH.StandardMaterial("Heatmap3DCellMaterial", AH);
            xH.diffuseColor = new CH.Color3(.4, .4, .4), xH.emissiveColor = new CH.Color3(.62, .62, .62), xH.specularColor = CH.Color3.Black();
            const vH = (0, XH.b)("Heatmap3DCells", {
              size: 1
            }, AH);
            vH.material = xH, vH.jQ = !1, vH.fu = !0, vH.isVisible = !1;
            const TH = (0, XH.b)("Heatmap3DTranslucentCells", {
              size: 1
            }, AH);
            TH.material = xH, TH.hasVertexAlpha = !0, TH.jQ = !1, TH.fu = !0, TH.isVisible = !1;
            const UH = new zH.StandardMaterial("Heatmap3DSchematicMaterial", AH);
            UH.diffuseColor = new CH.Color3(.6, .6, .6), UH.emissiveColor = new CH.Color3(.4, .4, .4), UH.specularColor = CH.Color3.Black();
            const VH = (0, XH.b)("Heatmap3DSchematicBlocks", {
              size: 1
            }, AH);
            VH.material = UH, VH.jQ = !1, VH.fu = !0, VH.isVisible = !1;
            const OH = (0, GH.e)("Heatmap3DTarget", {
              lines: yH([-.52, -.52, -.52], [.52, .52, .52])
            }, AH);
            return OH.color = new CH.Color3(.06, .14, .23), OH.renderingGroupId = 1, OH.jQ = !1, OH.isVisible = !1, {
              engine: LH,
              NQ: AH,
              camera: WH,
              cells: vH,
              translucentCells: TH,
              translucent: {
                yQ: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: VH,
              targetOutline: OH,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: BH,
              needsRender: !0
            }
          }(HH, RB.current.fieldOfView)
        } catch (LH) {
          return console.error("Failed to start the 3D heatmap", LH), void YB(!0)
        }
        return EB.current = BH, BH.engine.runRenderLoop((() => {
          const HH = BH.camera;
          HH.fov !== BH.targetFieldOfView && (HH.fov += (BH.targetFieldOfView - HH.fov) * (HH.fov > BH.targetFieldOfView ? .3 : .2), Math.abs(BH.targetFieldOfView - HH.fov) < 5e-4 && (HH.fov = BH.targetFieldOfView), BH.needsRender = !0), BH.needsRender && (BH.NQ.render(), BH.needsRender = !BH.NQ.isReady() || !BH.engine.areAllEffectsReady())
        })), () => {
          EB.current = null, BH.engine.dispose()
        }
      }), []), (0, AH.useEffect)((() => {
        const HH = CB.current;
        if (!HH) return;
        const BH = () => {
            xB.current = !1, QB(document.pointerLockElement === HH)
          },
          LH = () => {
            xB.current && (xB.current = !1, MB(!1))
          },
          AH = BH => {
            const LH = !RB.current.canLock && document.activeElement === HH && 0 !== (1 & BH.buttons);
            if (document.pointerLockElement !== HH && !LH) return;
            const AH = RB.current.mouseSensitivity * kH;
            mB((HH => function(HH, BH, LH) {
              const AH = 2 * Math.PI;
              return {
                ...HH,
                heading: ((HH.heading + BH) % AH + AH) % AH,
                pitch: Math.max(-gH, Math.min(gH, HH.pitch + LH))
              }
            }(null !== HH && void 0 !== HH ? HH : RB.current.fittedView, BH.movementX * AH, BH.movementY * AH)))
          };
        return document.addEventListener("pointerlockchange", BH), document.addEventListener("pointerlockerror", LH), document.addEventListener("pointermove", AH), () => {
          document.removeEventListener("pointerlockchange", BH), document.removeEventListener("pointerlockerror", LH), document.removeEventListener("pointermove", AH), document.pointerLockElement === HH && (0, UH.e)()
        }
      }), []), (0, AH.useEffect)((() => {
        const HH = EB.current;
        null !== HH && 0 !== XB.width && 0 !== XB.height && (HH.engine.resize(), HH.needsRender = !0)
      }), [XB.width, XB.height]), (0, AH.useEffect)((() => {
        const HH = EB.current;
        null !== HH && (HH.targetFieldOfView = cB * (UB ? bH : 1))
      }), [cB, UB]), (0, AH.useEffect)((() => {
        const HH = EB.current;
        null !== HH && function(HH, BH, LH, AH) {
          const rH = [],
            SH = [],
            hH = [],
            tH = [];
          for (let zH = 0; zH < BH.count; zH++) {
            const HH = BH.values[zH],
              CH = (0, PH.z)(HH, LH, AH);
            if (CH <= 0) continue;
            const [EH, XH, GH] = (0, PH.o)((0, PH.J)(HH, LH)), YH = CH >= 1;
            (YH ? rH : hH).push(BH.positions[3 * zH] + .5, BH.positions[3 * zH + 1] + .5, BH.positions[3 * zH + 2] + .5), (YH ? SH : tH).push(EH / 255, XH / 255, GH / 255, CH)
          }
          iH(HH.cells, Float32Array.from(rH), Float32Array.from(SH), SH.length / 4), HH.translucent = {
            yQ: Float32Array.from(hH),
            colours: Float32Array.from(tH),
            count: tH.length / 4
          }, HH.translucentSortedFrom = null, pH(HH), HH.needsRender = !0
        }(HH, KB, LH, KH)
      }), [KB, LH, KH]), (0, AH.useEffect)((() => {
        const HH = EB.current;
        null !== HH && function(HH, BH) {
          HH.chunkGridOrigin = BH, HH.chunkGridCentre = null, JH(HH)
        }(HH, NH.min)
      }), [NH]), (0, AH.useEffect)((() => {
        const HH = EB.current;
        null !== HH && function(HH, BH, LH) {
          const AH = [],
            rH = [];
          if (null !== BH) {
            const {
              positions: HH,
              colours: SH,
              count: hH
            } = BH.surface;
            for (let BH = 0; BH < hH; BH++) {
              const hH = [HH[3 * BH], HH[3 * BH + 1], HH[3 * BH + 2]];
              [0, 1, 2].every((HH => hH[HH] >= LH.min[HH] - lH && hH[HH] <= LH.max[HH] + lH)) && (AH.push(hH[0] - LH.min[0] + .5, hH[1] - LH.min[1] + .5, hH[2] - LH.min[2] + .5), rH.push(SH[3 * BH] / 255, SH[3 * BH + 1] / 255, SH[3 * BH + 2] / 255, 1))
            }
          }
          iH(HH.schematicBlocks, Float32Array.from(AH), Float32Array.from(rH), rH.length / 4), HH.needsRender = !0
        }(HH, jH, NH)
      }), [jH, NH]), (0, AH.useEffect)((() => {
        const HH = EB.current;
        null !== HH && null !== HH.chunkGrid && (HH.chunkGrid.isVisible = OB, HH.needsRender = !0)
      }), [OB, NH]), (0, AH.useEffect)((() => {
        const HH = EB.current;
        null !== HH && function(HH, BH, LH) {
          const {
            camera: AH
          } = HH;
          AH.position.set(BH.position[0], BH.position[1], BH.position[2]), AH.rotation.set(BH.pitch, BH.heading, 0);
          const rH = (cH + 1) * uH.g.xX * Math.sqrt(3);
          AH.maxZ = Math.max(rH, Math.hypot(...hB(BH.position, tB(rB({
            min: [0, 0, 0],
            max: LH
          }), -1))) + 2 * Math.hypot(...LH)), JH(HH), pH(HH), HH.needsRender = !0
        }(HH, NB, lB)
      }), [NB, lB]), (0, AH.useEffect)((() => {
        const HH = EB.current;
        null !== HH && (HH.targetOutline.isVisible = null !== jB, null !== jB && HH.targetOutline.position.set(jB.x - oB[0] + .5, jB.y - oB[1] + .5, jB.z - oB[2] + .5), HH.needsRender = !0)
      }), [jB, oB]);
      return (0, VH.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: zB,
        children: [(0, VH.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: CB,
          style: {
            width: `${XB.width}px`,
            height: `${XB.height}px`
          },
          tabIndex: 0,
          "aria-label": aH("3D heatmap"),
          onClick: () => {
            const HH = CB.current;
            if (null === HH) return;
            if (HH.focus({
                preventScroll: !0
              }), uB || !WB) return;
            const BH = HH.requestPointerLock();
            BH instanceof Promise ? BH.catch((HH => {
              HH instanceof DOMException && ("WrongDocumentError" === HH.name || "NotSupportedError" === HH.name) && MB(!1)
            })) : xB.current = !0
          },
          ...nB,
          onKeyDown: HH => {
            if (TB && mH.has(HH.code)) return HH.preventDefault(), void(() => {
              const HH = CB.current;
              null !== HH && document.pointerLockElement === HH ? (0, UH.e)() : null === HH || void 0 === HH || HH.blur()
            })();
            const BH = oH[HH.code];
            return TB && void 0 !== BH ? (HH.preventDefault(), void FH(BH)) : TB && (0, TH.e)("replayPlayPause", HH.code) && !(0, TH.e)("Zoom", HH.code) ? (HH.preventDefault(), void(HH.repeat || wH())) : TB && HH.code === IH ? (HH.preventDefault(), void DH()) : TB && HH.code === qH ? (HH.preventDefault(), void mB(null)) : TB && HH.code === eH ? (HH.preventDefault(), void bB((HH => !HH))) : void nB.onKeyDown(HH)
          },
          onFocus: () => {
            PB(!0)
          },
          onBlur: () => {
            PB(!1), nB.onBlur()
          }
        }), GB && (0, VH.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: aH("3D view isn't available in this browser.")
        }), TB && (0, VH.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, VH.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: NB.position.map(((HH, BH) => (HH + oB[BH]).toFixed(2))).join(" ")
        }), OB && (0, VH.jsx)(sH, {
          heading: NB.heading,
          pitch: NB.pitch,
          onViewFrom: HH => {
            const BH = tB(HH, -1),
              LH = 0 === BH[1] ? {
                heading: Math.atan2(BH[0], BH[2]),
                pitch: 0
              } : {
                heading: NB.heading,
                pitch: BH[1] < 0 ? gH : -gH
              };
            mB(LB(qB, eB, cB, LH))
          },
          onTurn: (HH, BH) => {
            mB((LH => function(HH, BH, LH, AH) {
              return AB(HH, BH, {
                heading: HH.heading + LH * ZH,
                pitch: Math.max(-gH, Math.min(gH, HH.pitch + AH * ZH))
              })
            }(null !== LH && void 0 !== LH ? LH : RB.current.fittedView, rB(qB), HH, BH)))
          },
          onFlip: () => {
            mB((HH => function(HH, BH) {
              return AB(HH, BH, {
                heading: HH.heading + Math.PI,
                pitch: -HH.pitch
              })
            }(null !== HH && void 0 !== HH ? HH : RB.current.fittedView, rB(qB))))
          }
        }), null !== jB && (0, VH.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === dH ? aH("studio:heatmapBlockReadout", {
            x: jB.x,
            y: jB.y,
            z: jB.z,
            count: (0, YH.T)(jB.value)
          }) : dH(jB.x, jB.y, jB.z, jB.value)
        }), (0, VH.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [nH, (0, VH.jsx)(xH.W, {
            active: null === kB,
            onClick: () => {
              mB(null)
            },
            children: (0, VH.jsx)(vH.c, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function sH(HH) {
      let {
        heading: BH,
        pitch: LH,
        onViewFrom: rH,
        onTurn: SH,
        onFlip: hH
      } = HH;
      const {
        t: tH
      } = (0, QH.B)(), zH = (0, AH.useRef)(null), CH = HB({
        heading: BH,
        pitch: LH
      }), EH = BB(BH), XH = CB(CH, EH), GH = FH + DH + 2, YH = nH.flatMap((HH => [1, -1].map((BH => {
        const LH = tB(HH.direction, BH);
        return {
          ...HH,
          sign: BH,
          direction: LH,
          endX: GH + zB(LH, EH) * FH,
          endY: GH - zB(LH, XH) * FH,
          depth: zB(LH, CH)
        }
      })))).sort(((HH, BH) => BH.depth - HH.depth));
      return (0, VH.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * GH,
        height: 2 * GH,
        "aria-hidden": !0,
        onPointerDown: HH => {
          var BH, LH;
          HH.currentTarget.setPointerCapture(HH.pointerId);
          const AH = HH.target,
            rH = AH.getAttribute("data-end");
          zH.current = {
            pointerId: HH.pointerId,
            x: HH.clientX,
            y: HH.clientY,
            travel: 0,
            side: null === rH ? null : null !== (BH = null === (LH = YH[Number(rH)]) || void 0 === LH ? void 0 : LH.direction) && void 0 !== BH ? BH : null,
            isOnMiddle: AH.hasAttribute("data-middle")
          }
        },
        onPointerMove: HH => {
          const BH = zH.current;
          if (null === BH || BH.pointerId !== HH.pointerId) return;
          const LH = HH.clientX - BH.x,
            AH = HH.clientY - BH.y;
          BH.x = HH.clientX, BH.y = HH.clientY, BH.travel += Math.abs(LH) + Math.abs(AH), BH.travel >= dH && SH(LH, AH)
        },
        onPointerUp: HH => {
          const BH = zH.current;
          zH.current = null, null === BH || BH.pointerId !== HH.pointerId || BH.travel >= dH || (null !== BH.side ? rH(BH.side) : BH.isOnMiddle && hH())
        },
        onPointerCancel: () => {
          zH.current = null
        },
        children: [YH.map(((HH, BH) => {
          const LH = HH.sign > 0;
          return (0, VH.jsxs)("g", {
            children: [(0, VH.jsx)("line", {
              x1: GH,
              y1: GH,
              x2: HH.endX,
              y2: HH.endY,
              stroke: HH.colour,
              strokeOpacity: LH ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, VH.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": BH,
              cx: HH.endX,
              cy: HH.endY,
              r: LH ? DH : DH - 1,
              fill: HH.colour,
              fillOpacity: LH ? 1 : .3,
              stroke: HH.colour,
              strokeWidth: LH ? 0 : 1.5,
              children: (0, VH.jsx)("title", {
                children: `${tH("View from")} ${LH?"+":"\u2212"}${HH.name}`
              })
            }), LH && (0, VH.jsx)("text", {
              pointerEvents: "none",
              x: HH.endX,
              y: HH.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: HH.name
            })]
          }, `${LH?"+":"-"}${HH.name}`)
        })), (0, VH.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: GH,
          cy: GH,
          r: wH,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, VH.jsx)("title", {
            children: tH("View from the opposite side")
          })
        })]
      })
    }

    function JH(HH) {
      var BH, LH, AH;
      const {
        chunkGridOrigin: rH,
        camera: SH
      } = HH;
      if (null === rH) return;
      const hH = [SH.position.x, SH.position.y, SH.position.z],
        tH = [0, 2].map((HH => Math.floor((hH[HH] + rH[HH]) / uH.g.xX))),
        zH = HH.chunkGridCentre;
      if (null !== zH && zH.every(((HH, BH) => HH === tH[BH]))) return;
      const XH = null === (BH = null === (LH = HH.chunkGrid) || void 0 === LH ? void 0 : LH.isVisible) || void 0 === BH || BH;
      null === (AH = HH.chunkGrid) || void 0 === AH || AH.dispose();
      const [YH, QH] = [0, 2].map(((HH, BH) => {
        const LH = [];
        for (let AH = tH[BH] - cH; AH <= tH[BH] + cH + 1; AH++) LH.push(AH * uH.g.xX - rH[HH]);
        return LH
      })), WH = -rH[1], MH = [];
      for (const CH of QH) MH.push([new EH.lu(YH[0], WH, CH), new EH.lu(YH[YH.length - 1], WH, CH)]);
      for (const CH of YH) MH.push([new EH.lu(CH, WH, QH[0]), new EH.lu(CH, WH, QH[QH.length - 1])]);
      const xH = (0, GH.e)("Heatmap3DChunkGrid", {
        lines: MH
      }, HH.NQ);
      xH.color = new CH.Color3(.45, .6, .78), xH.jQ = !1, xH.isVisible = XH, HH.chunkGrid = xH, HH.chunkGridCentre = tH, HH.needsRender = !0
    }

    function iH(HH, BH, LH, AH) {
      HH.yHH("matrix", function(HH, BH) {
        const LH = new Float32Array(16 * BH);
        for (let AH = 0; AH < BH; AH++) {
          const BH = 16 * AH;
          LH[BH] = 1, LH[BH + 5] = 1, LH[BH + 10] = 1, LH[BH + 12] = HH[3 * AH], LH[BH + 13] = HH[3 * AH + 1], LH[BH + 14] = HH[3 * AH + 2], LH[BH + 15] = 1
        }
        return LH
      }(BH, AH), 16, !0), HH.yHH("color", LH, 4, !0), HH.isVisible = AH > 0
    }

    function pH(HH) {
      const {
        camera: BH,
        translucent: LH
      } = HH, AH = [BH.position.x, BH.position.y, BH.position.z], rH = HH.translucentSortedFrom;
      if (null !== rH && Math.hypot(AH[0] - rH[0], AH[1] - rH[1], AH[2] - rH[2]) < KH) return;
      HH.translucentSortedFrom = AH;
      const SH = new Float64Array(LH.count),
        hH = new Uint32Array(LH.count);
      for (let CH = 0; CH < LH.count; CH++) {
        const HH = LH.yQ[3 * CH] - AH[0],
          BH = LH.yQ[3 * CH + 1] - AH[1],
          rH = LH.yQ[3 * CH + 2] - AH[2];
        SH[CH] = HH * HH + BH * BH + rH * rH, hH[CH] = CH
      }
      hH.sort(((HH, BH) => SH[BH] - SH[HH]));
      const tH = new Float32Array(3 * LH.count),
        zH = new Float32Array(4 * LH.count);
      hH.forEach(((HH, BH) => {
        tH.set(LH.yQ.subarray(3 * HH, 3 * HH + 3), 3 * BH), zH.set(LH.colours.subarray(4 * HH, 4 * HH + 4), 4 * BH)
      })), iH(HH.translucentCells, tH, zH, LH.count), HH.needsRender = !0
    }

    function yH(HH, BH) {
      const LH = (LH, AH, rH) => new EH.lu(0 === LH ? HH[0] : BH[0], 0 === AH ? HH[1] : BH[1], 0 === rH ? HH[2] : BH[2]),
        AH = [];
      for (const rH of [0, 1])
        for (const HH of [0, 1]) AH.push([LH(0, rH, HH), LH(1, rH, HH)], [LH(rH, 0, HH), LH(rH, 1, HH)], [LH(rH, HH, 0), LH(rH, HH, 1)]);
      return AH
    }

    function HB(HH) {
      return [Math.sin(HH.heading) * Math.cos(HH.pitch), -Math.sin(HH.pitch), Math.cos(HH.heading) * Math.cos(HH.pitch)]
    }

    function BB(HH) {
      return [Math.cos(HH), 0, -Math.sin(HH)]
    }

    function LB(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: NH,
        pitch: RH
      };
      const rH = [HH.max[0] - HH.min[0], HH.max[1] - HH.min[1], HH.max[2] - HH.min[2]],
        SH = HB(AH),
        hH = BB(AH.heading),
        tH = CB(SH, hH),
        zH = Math.tan(LH / 2),
        CH = zH * BH;
      let EH = 1;
      for (const XH of [-rH[0] / 2, rH[0] / 2])
        for (const HH of [-rH[1] / 2, rH[1] / 2])
          for (const BH of [-rH[2] / 2, rH[2] / 2]) {
            const LH = [XH, HH, BH],
              AH = zB(LH, SH);
            EH = Math.max(EH, Math.abs(zB(LH, hH)) / CH - AH, Math.abs(zB(LH, tH)) / zH - AH)
          }
      return {
        position: hB([HH.min[0] + rH[0] / 2, HH.min[1] + rH[1] / 2, HH.min[2] + rH[2] / 2], tB(SH, -EH * jH)),
        heading: AH.heading,
        pitch: AH.pitch
      }
    }

    function AB(HH, BH, LH) {
      const AH = SB(HH),
        rH = SB(LH),
        SH = hB(HH.position, tB(BH, -1)),
        hH = [0, 1, 2].reduce(((HH, BH) => hB(HH, tB(rH[BH], zB(SH, AH[BH])))), [0, 0, 0]);
      return {
        position: hB(BH, hH),
        heading: LH.heading,
        pitch: LH.pitch
      }
    }

    function rB(HH) {
      return tB(hB(HH.min, HH.max), .5)
    }

    function SB(HH) {
      const BH = HB(HH),
        LH = BB(HH.heading);
      return [BH, LH, CB(BH, LH)]
    }

    function hB(HH, BH) {
      return [HH[0] + BH[0], HH[1] + BH[1], HH[2] + BH[2]]
    }

    function tB(HH, BH) {
      return [HH[0] * BH, HH[1] * BH, HH[2] * BH]
    }

    function zB(HH, BH) {
      return HH[0] * BH[0] + HH[1] * BH[1] + HH[2] * BH[2]
    }

    function CB(HH, BH) {
      return [HH[1] * BH[2] - HH[2] * BH[1], HH[2] * BH[0] - HH[0] * BH[2], HH[0] * BH[1] - HH[1] * BH[0]]
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);