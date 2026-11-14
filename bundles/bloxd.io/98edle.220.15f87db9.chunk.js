export const id = 220;
export const ids = [220];
export const modules = {
  37409: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      default: () => LW
    });
    MW(5451);
    var wW = MW(75),
      CW = MW(37418),
      zR = MW(37670),
      AW = MW(37781),
      bR = MW(37821),
      yR = MW(37844),
      NW = MW(35373),
      eW = MW(35317),
      BW = MW(37985),
      tR = MW(38045),
      TW = (MW(38074), MW(1053)),
      gR = MW(173),
      iR = MW(1027),
      YW = MW(27),
      JW = MW(2135),
      PW = MW(1255),
      IW = MW(904),
      oW = MW(5448),
      lW = MW(5459),
      FW = MW(3486),
      fW = MW(940);
    const QW = 1.2,
      rR = .2,
      cR = .0066 * Math.PI / 180,
      XW = new Set(["Escape", "KeyG"]),
      jR = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      kR = "ArrowUp",
      aR = new Set([...Object.keys(jR), kR, "ArrowDown"]),
      sW = 32,
      dW = 1,
      pW = 10,
      hW = "F4",
      UW = "Period",
      EW = Math.PI / 2 - .001,
      VW = Math.PI / 6,
      mR = Math.PI / 6,
      xR = 1.08,
      vR = [{
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
      KW = 24,
      uW = 7,
      OW = 4,
      nW = .01,
      GW = 4;

    function LW(WW) {
      let {
        heatmap: RW,
        scale: MW,
        fullyOpaqueFrom: dW,
        bounds: VW,
        fitBounds: mR,
        schematic: xR,
        controls: vR,
        onStepTime: KW,
        onShowAllTime: uW,
        onTogglePlaying: OW,
        getReadout: GW = null
      } = WW;
      const {
        t: LW
      } = (0, iR.C)(), {
        clientEscMenuOptions: zM
      } = (0, YW.i)(["clientEscMenuOptions"]), yM = (0, wW.useRef)(null), NR = (0, wW.useRef)(null), eR = (0, wW.useRef)(null), BR = (0, JW.c)(yM), [tM, TR] = (0, wW.useState)(!1), [gM, iM] = (0, wW.useState)(!1), [YR, JR] = (0, wW.useState)(!0), PR = (0, wW.useRef)(!1), [IR, oR] = (0, wW.useState)(!1), lR = gM || !YR && IR, [FR, fR] = (0, wW.useState)(!1), [QR, rM] = (0, wW.useState)(!0), [cM, XR] = (0, wW.useState)(null), jM = VW.min, [kM, aM] = (0, wW.useState)(jM);
      kM[0] === jM[0] && kM[1] === jM[1] && kM[2] === jM[2] || (aM(jM), null !== cM && XR({
        ...cM,
        position: AR(cM.position, AR(kM, bM(jM, -1)))
      }));
      const sR = (0, wW.useMemo)((() => function(WW) {
          return [WW.max[0] - WW.min[0] + 1, WW.max[1] - WW.min[1] + 1, WW.max[2] - WW.min[2] + 1]
        }(VW)), [VW]),
        dR = (0, wW.useMemo)((() => function(WW, RW) {
          const MW = [],
            wW = [];
          for (const [CW, zR] of Object.entries(WW.frequencies)) {
            const WW = Number(CW);
            for (const [CW, AW] of Object.entries(zR)) {
              const zR = Number(CW);
              for (const [CW, bR] of Object.entries(AW)) bR <= 0 || (MW.push(WW - RW[0], zR - RW[1], Number(CW) - RW[2]), wW.push(bR))
            }
          }
          return {
            positions: Int32Array.from(MW),
            values: Float64Array.from(wW),
            count: wW.length
          }
        }(RW, jM)), [RW, jM]),
        pR = QW * zM.cameraFOV / 100,
        hR = BR.height > 0 ? BR.width / BR.height : 1,
        UR = (0, wW.useMemo)((() => function(WW, RW) {
          return {
            min: [WW.min[0] - RW[0], WW.min[1] - RW[1], WW.min[2] - RW[2]],
            max: [WW.max[0] - RW[0] + 1, WW.max[1] - RW[1] + 1, WW.max[2] - RW[2] + 1]
          }
        }(mR, jM)), [mR, jM]),
        ER = MR(UR, hR, pR),
        VR = null !== cM && void 0 !== cM ? cM : ER,
        mM = (0, wW.useRef)({
          fittedView: ER,
          fieldOfView: pR,
          mouseSensitivity: zM.mouseSensitivity,
          canLock: YR
        });
      mM.current = {
        fittedView: ER,
        fieldOfView: pR,
        mouseSensitivity: zM.mouseSensitivity,
        canLock: YR
      };
      const xM = (0, wW.useMemo)((() => {
          if (!lR) return null;
          const WW = (WW, MW, wW) => {
              var CW, zR, AW;
              return null !== (CW = null === (zR = RW.frequencies[WW + jM[0]]) || void 0 === zR || null === (AW = zR[MW + jM[1]]) || void 0 === AW ? void 0 : AW[wW + jM[2]]) && void 0 !== CW ? CW : 0
            },
            wW = function(WW, RW, MW, wW) {
              let CW = 0,
                zR = 1 / 0;
              for (const BW of [0, 1, 2]) {
                if (0 === RW[BW]) {
                  if (WW[BW] < 0 || WW[BW] > MW[BW]) return null;
                  continue
                }
                const wW = (0 - WW[BW]) / RW[BW],
                  AW = (MW[BW] - WW[BW]) / RW[BW];
                CW = Math.max(CW, Math.min(wW, AW)), zR = Math.min(zR, Math.max(wW, AW))
              }
              if (CW > zR) return null;
              const AW = [0, 1, 2].map((wW => Math.min(MW[wW] - 1, Math.max(0, Math.floor(WW[wW] + RW[wW] * CW))))),
                bR = [0, 1, 2].map((WW => Math.sign(RW[WW]))),
                yR = [0, 1, 2].map((MW => {
                  if (0 === bR[MW]) return 1 / 0;
                  return ((bR[MW] > 0 ? AW[MW] + 1 : AW[MW]) - WW[MW]) / RW[MW]
                })),
                NW = [0, 1, 2].map((WW => 0 === bR[WW] ? 1 / 0 : Math.abs(1 / RW[WW])));
              let eW = null;
              for (;;) {
                const WW = wW(AW[0], AW[1], AW[2]);
                if (WW >= 1) return AW;
                WW > 0 && (eW = [AW[0], AW[1], AW[2]]);
                const RW = yR[0] < yR[1] ? yR[0] < yR[2] ? 0 : 2 : yR[1] < yR[2] ? 1 : 2;
                if (yR[RW] > zR) return eW;
                if (AW[RW] += bR[RW], yR[RW] += NW[RW], AW[RW] < 0 || AW[RW] >= MW[RW]) return eW
              }
            }(VR.position, WR(VR), sR, ((RW, wW, CW) => (0, oW.x)(WW(RW, wW, CW), MW, dW)));
          return null === wW ? null : {
            x: wW[0] + jM[0],
            y: wW[1] + jM[1],
            z: wW[2] + jM[2],
            value: WW(wW[0], wW[1], wW[2])
          }
        }), [lR, RW, jM, VR, sR, MW, dW]),
        {
          keyHandlers: vM
        } = (0, lW.e)({
          isEnabled: lR,
          claimedKeyCodes: aR,
          PR: WW => {
            XR((RW => function(WW, RW) {
              const MW = [Math.sin(WW.heading), 0, Math.cos(WW.heading)],
                wW = AR(AR(bM(MW, RW.forward), bM(RR(WW.heading), RW.right)), [0, RW.up, 0]);
              return {
                ...WW,
                position: AR(WW.position, wW)
              }
            }(null !== RW && void 0 !== RW ? RW : mM.current.fittedView, WW)))
          },
          onZoomChange: fR
        });
      (0, wW.useEffect)((() => {
        const WW = NR.current;
        if (!WW) return;
        let RW;
        try {
          RW = function(WW, RW) {
            const MW = new CW.b(WW, !0, {
                stencil: !1
              }, !0),
              wW = new zR.b(MW),
              [TW, gR, iR] = oW.I;
            wW.clearColor = new NW.d(TW / 255, gR / 255, iR / 255, 1);
            const YW = new AW.d("Heatmap3DCamera", eW.vC.Zero(), wW);
            YW.fov = RW, YW.minZ = .05;
            const JW = new bR.b("Heatmap3DLight", new eW.vC(.4, 1, -.6), wW);
            JW.diffuse = NW.Color3.White(), JW.groundColor = NW.Color3.Black(), JW.specular = NW.Color3.Black();
            const PW = new yR.StandardMaterial("Heatmap3DCellMaterial", wW);
            PW.diffuseColor = new NW.Color3(.4, .4, .4), PW.emissiveColor = new NW.Color3(.62, .62, .62), PW.specularColor = NW.Color3.Black();
            const IW = (0, BW.b)("Heatmap3DCells", {
              size: 1
            }, wW);
            IW.material = PW, IW.DC = !1, IW.xC = !0, IW.isVisible = !1;
            const lW = (0, BW.b)("Heatmap3DTranslucentCells", {
              size: 1
            }, wW);
            lW.material = PW, lW.hasVertexAlpha = !0, lW.DC = !1, lW.xC = !0, lW.isVisible = !1;
            const FW = new yR.StandardMaterial("Heatmap3DSchematicMaterial", wW);
            FW.diffuseColor = new NW.Color3(.6, .6, .6), FW.emissiveColor = new NW.Color3(.4, .4, .4), FW.specularColor = NW.Color3.Black();
            const fW = (0, BW.b)("Heatmap3DSchematicBlocks", {
              size: 1
            }, wW);
            fW.material = FW, fW.DC = !1, fW.xC = !0, fW.isVisible = !1;
            const QW = (0, tR.b)("Heatmap3DTarget", {
              lines: SW([-.52, -.52, -.52], [.52, .52, .52])
            }, wW);
            return QW.color = new NW.Color3(.06, .14, .23), QW.renderingGroupId = 1, QW.DC = !1, QW.isVisible = !1, {
              engine: MW,
              LC: wW,
              camera: YW,
              cells: IW,
              translucentCells: lW,
              translucent: {
                bA: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: fW,
              targetOutline: QW,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: RW,
              needsRender: !0
            }
          }(WW, mM.current.fieldOfView)
        } catch (MW) {
          return console.error("Failed to start the 3D heatmap", MW), void TR(!0)
        }
        return eR.current = RW, RW.engine.runRenderLoop((() => {
          const WW = RW.camera;
          WW.fov !== RW.targetFieldOfView && (WW.fov += (RW.targetFieldOfView - WW.fov) * (WW.fov > RW.targetFieldOfView ? .3 : .2), Math.abs(RW.targetFieldOfView - WW.fov) < 5e-4 && (WW.fov = RW.targetFieldOfView), RW.needsRender = !0), RW.needsRender && (RW.LC.render(), RW.needsRender = !RW.LC.isReady() || !RW.engine.areAllEffectsReady())
        })), () => {
          eR.current = null, RW.engine.dispose()
        }
      }), []), (0, wW.useEffect)((() => {
        const WW = NR.current;
        if (!WW) return;
        const RW = () => {
            PR.current = !1, iM(document.pointerLockElement === WW)
          },
          MW = () => {
            PR.current && (PR.current = !1, JR(!1))
          },
          wW = RW => {
            const MW = !mM.current.canLock && document.activeElement === WW && 0 !== (1 & RW.buttons);
            if (document.pointerLockElement !== WW && !MW) return;
            const wW = mM.current.mouseSensitivity * cR;
            XR((WW => function(WW, RW, MW) {
              const wW = 2 * Math.PI;
              return {
                ...WW,
                heading: ((WW.heading + RW) % wW + wW) % wW,
                pitch: Math.max(-EW, Math.min(EW, WW.pitch + MW))
              }
            }(null !== WW && void 0 !== WW ? WW : mM.current.fittedView, RW.movementX * wW, RW.movementY * wW)))
          };
        return document.addEventListener("pointerlockchange", RW), document.addEventListener("pointerlockerror", MW), document.addEventListener("pointermove", wW), () => {
          document.removeEventListener("pointerlockchange", RW), document.removeEventListener("pointerlockerror", MW), document.removeEventListener("pointermove", wW), document.pointerLockElement === WW && (0, FW.d)()
        }
      }), []), (0, wW.useEffect)((() => {
        const WW = eR.current;
        null !== WW && 0 !== BR.width && 0 !== BR.height && (WW.engine.resize(), WW.needsRender = !0)
      }), [BR.width, BR.height]), (0, wW.useEffect)((() => {
        const WW = eR.current;
        null !== WW && (WW.targetFieldOfView = pR * (FR ? rR : 1))
      }), [pR, FR]), (0, wW.useEffect)((() => {
        const WW = eR.current;
        null !== WW && function(WW, RW, MW, wW) {
          const CW = [],
            zR = [],
            AW = [],
            bR = [];
          for (let yR = 0; yR < RW.count; yR++) {
            const WW = RW.values[yR],
              NW = (0, oW.x)(WW, MW, wW);
            if (NW <= 0) continue;
            const [eW, BW, tR] = (0, oW.s)((0, oW.D)(WW, MW)), TW = NW >= 1;
            (TW ? CW : AW).push(RW.positions[3 * yR] + .5, RW.positions[3 * yR + 1] + .5, RW.positions[3 * yR + 2] + .5), (TW ? zR : bR).push(eW / 255, BW / 255, tR / 255, NW)
          }
          qR(WW.cells, Float32Array.from(CW), Float32Array.from(zR), zR.length / 4), WW.translucent = {
            bA: Float32Array.from(AW),
            colours: Float32Array.from(bR),
            count: bR.length / 4
          }, WW.translucentSortedFrom = null, ZW(WW), WW.needsRender = !0
        }(WW, dR, MW, dW)
      }), [dR, MW, dW]), (0, wW.useEffect)((() => {
        const WW = eR.current;
        null !== WW && function(WW, RW) {
          WW.chunkGridOrigin = RW, WW.chunkGridCentre = null, DW(WW)
        }(WW, VW.min)
      }), [VW]), (0, wW.useEffect)((() => {
        const WW = eR.current;
        null !== WW && function(WW, RW, MW) {
          const wW = [],
            CW = [];
          if (null !== RW) {
            const {
              positions: WW,
              colours: zR,
              count: AW
            } = RW.surface;
            for (let RW = 0; RW < AW; RW++) {
              const AW = [WW[3 * RW], WW[3 * RW + 1], WW[3 * RW + 2]];
              [0, 1, 2].every((WW => AW[WW] >= MW.min[WW] - sW && AW[WW] <= MW.max[WW] + sW)) && (wW.push(AW[0] - MW.min[0] + .5, AW[1] - MW.min[1] + .5, AW[2] - MW.min[2] + .5), CW.push(zR[3 * RW] / 255, zR[3 * RW + 1] / 255, zR[3 * RW + 2] / 255, 1))
            }
          }
          qR(WW.schematicBlocks, Float32Array.from(wW), Float32Array.from(CW), CW.length / 4), WW.needsRender = !0
        }(WW, xR, VW)
      }), [xR, VW]), (0, wW.useEffect)((() => {
        const WW = eR.current;
        null !== WW && null !== WW.chunkGrid && (WW.chunkGrid.isVisible = QR, WW.needsRender = !0)
      }), [QR, VW]), (0, wW.useEffect)((() => {
        const WW = eR.current;
        null !== WW && function(WW, RW, MW) {
          const {
            camera: wW
          } = WW;
          wW.position.set(RW.position[0], RW.position[1], RW.position[2]), wW.rotation.set(RW.pitch, RW.heading, 0);
          const CW = (pW + 1) * gR.c.dw * Math.sqrt(3);
          wW.maxZ = Math.max(CW, Math.hypot(...AR(RW.position, bM(CR({
            min: [0, 0, 0],
            max: MW
          }), -1))) + 2 * Math.hypot(...MW)), DW(WW), ZW(WW), WW.needsRender = !0
        }(WW, VR, sR)
      }), [VR, sR]), (0, wW.useEffect)((() => {
        const WW = eR.current;
        null !== WW && (WW.targetOutline.isVisible = null !== xM, null !== xM && WW.targetOutline.position.set(xM.x - jM[0] + .5, xM.y - jM[1] + .5, xM.z - jM[2] + .5), WW.needsRender = !0)
      }), [xM, jM]);
      return (0, fW.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: yM,
        children: [(0, fW.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: NR,
          style: {
            width: `${BR.width}px`,
            height: `${BR.height}px`
          },
          tabIndex: 0,
          "aria-label": LW("3D heatmap"),
          onClick: () => {
            const WW = NR.current;
            if (null === WW) return;
            if (WW.focus({
                preventScroll: !0
              }), gM || !YR) return;
            const RW = WW.requestPointerLock();
            RW instanceof Promise ? RW.catch((WW => {
              WW instanceof DOMException && ("WrongDocumentError" === WW.name || "NotSupportedError" === WW.name) && JR(!1)
            })) : PR.current = !0
          },
          ...vM,
          onKeyDown: WW => {
            if (lR && XW.has(WW.code)) return WW.preventDefault(), void(() => {
              const WW = NR.current;
              null !== WW && document.pointerLockElement === WW ? (0, FW.d)() : null === WW || void 0 === WW || WW.blur()
            })();
            const RW = jR[WW.code];
            return lR && void 0 !== RW ? (WW.preventDefault(), void KW(RW)) : lR && (0, lW.c)("replayPlayPause", WW.code) && !(0, lW.c)("Zoom", WW.code) ? (WW.preventDefault(), void(WW.repeat || OW())) : lR && WW.code === kR ? (WW.preventDefault(), void uW()) : lR && WW.code === UW ? (WW.preventDefault(), void XR(null)) : lR && WW.code === hW ? (WW.preventDefault(), void rM((WW => !WW))) : void vM.onKeyDown(WW)
          },
          onFocus: () => {
            oR(!0)
          },
          onBlur: () => {
            oR(!1), vM.onBlur()
          }
        }), tM && (0, fW.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: LW("3D view isn't available in this browser.")
        }), lR && (0, fW.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, fW.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: VR.position.map(((WW, RW) => (WW + jM[RW]).toFixed(2))).join(" ")
        }), QR && (0, fW.jsx)(HW, {
          heading: VR.heading,
          pitch: VR.pitch,
          onViewFrom: WW => {
            const RW = bM(WW, -1),
              MW = 0 === RW[1] ? {
                heading: Math.atan2(RW[0], RW[2]),
                pitch: 0
              } : {
                heading: VR.heading,
                pitch: RW[1] < 0 ? EW : -EW
              };
            XR(MR(UR, hR, pR, MW))
          },
          onTurn: (WW, RW) => {
            XR((MW => function(WW, RW, MW, wW) {
              return wR(WW, RW, {
                heading: WW.heading + MW * nW,
                pitch: Math.max(-EW, Math.min(EW, WW.pitch + wW * nW))
              })
            }(null !== MW && void 0 !== MW ? MW : mM.current.fittedView, CR(UR), WW, RW)))
          },
          onFlip: () => {
            XR((WW => function(WW, RW) {
              return wR(WW, RW, {
                heading: WW.heading + Math.PI,
                pitch: -WW.pitch
              })
            }(null !== WW && void 0 !== WW ? WW : mM.current.fittedView, CR(UR))))
          }
        }), null !== xM && (0, fW.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === GW ? LW("studio:heatmapBlockReadout", {
            x: xM.x,
            y: xM.y,
            z: xM.z,
            count: (0, TW.I)(xM.value)
          }) : GW(xM.x, xM.y, xM.z, xM.value)
        }), (0, fW.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [vR, (0, fW.jsx)(PW.O, {
            active: null === cM,
            onClick: () => {
              XR(null)
            },
            children: (0, fW.jsx)(IW.e, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function HW(WW) {
      let {
        heading: RW,
        pitch: MW,
        onViewFrom: CW,
        onTurn: zR,
        onFlip: AW
      } = WW;
      const {
        t: bR
      } = (0, iR.C)(), yR = (0, wW.useRef)(null), NW = WR({
        heading: RW,
        pitch: MW
      }), eW = RR(RW), BW = NR(NW, eW), tR = KW + uW + 2, TW = vR.flatMap((WW => [1, -1].map((RW => {
        const MW = bM(WW.direction, RW);
        return {
          ...WW,
          sign: RW,
          direction: MW,
          endX: tR + yM(MW, eW) * KW,
          endY: tR - yM(MW, BW) * KW,
          depth: yM(MW, NW)
        }
      })))).sort(((WW, RW) => RW.depth - WW.depth));
      return (0, fW.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * tR,
        height: 2 * tR,
        "aria-hidden": !0,
        onPointerDown: WW => {
          var RW, MW;
          WW.currentTarget.setPointerCapture(WW.pointerId);
          const wW = WW.target,
            CW = wW.getAttribute("data-end");
          yR.current = {
            pointerId: WW.pointerId,
            x: WW.clientX,
            y: WW.clientY,
            travel: 0,
            side: null === CW ? null : null !== (RW = null === (MW = TW[Number(CW)]) || void 0 === MW ? void 0 : MW.direction) && void 0 !== RW ? RW : null,
            isOnMiddle: wW.hasAttribute("data-middle")
          }
        },
        onPointerMove: WW => {
          const RW = yR.current;
          if (null === RW || RW.pointerId !== WW.pointerId) return;
          const MW = WW.clientX - RW.x,
            wW = WW.clientY - RW.y;
          RW.x = WW.clientX, RW.y = WW.clientY, RW.travel += Math.abs(MW) + Math.abs(wW), RW.travel >= GW && zR(MW, wW)
        },
        onPointerUp: WW => {
          const RW = yR.current;
          yR.current = null, null === RW || RW.pointerId !== WW.pointerId || RW.travel >= GW || (null !== RW.side ? CW(RW.side) : RW.isOnMiddle && AW())
        },
        onPointerCancel: () => {
          yR.current = null
        },
        children: [TW.map(((WW, RW) => {
          const MW = WW.sign > 0;
          return (0, fW.jsxs)("g", {
            children: [(0, fW.jsx)("line", {
              x1: tR,
              y1: tR,
              x2: WW.endX,
              y2: WW.endY,
              stroke: WW.colour,
              strokeOpacity: MW ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, fW.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": RW,
              cx: WW.endX,
              cy: WW.endY,
              r: MW ? uW : uW - 1,
              fill: WW.colour,
              fillOpacity: MW ? 1 : .3,
              stroke: WW.colour,
              strokeWidth: MW ? 0 : 1.5,
              children: (0, fW.jsx)("title", {
                children: `${bR("View from")} ${MW?"+":"\u2212"}${WW.name}`
              })
            }), MW && (0, fW.jsx)("text", {
              pointerEvents: "none",
              x: WW.endX,
              y: WW.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: WW.name
            })]
          }, `${MW?"+":"-"}${WW.name}`)
        })), (0, fW.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: tR,
          cy: tR,
          r: OW,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, fW.jsx)("title", {
            children: bR("View from the opposite side")
          })
        })]
      })
    }

    function DW(WW) {
      var RW, MW, wW;
      const {
        chunkGridOrigin: CW,
        camera: zR
      } = WW;
      if (null === CW) return;
      const AW = [zR.position.x, zR.position.y, zR.position.z],
        bR = [0, 2].map((WW => Math.floor((AW[WW] + CW[WW]) / gR.c.dw))),
        yR = WW.chunkGridCentre;
      if (null !== yR && yR.every(((WW, RW) => WW === bR[RW]))) return;
      const BW = null === (RW = null === (MW = WW.chunkGrid) || void 0 === MW ? void 0 : MW.isVisible) || void 0 === RW || RW;
      null === (wW = WW.chunkGrid) || void 0 === wW || wW.dispose();
      const [TW, iR] = [0, 2].map(((WW, RW) => {
        const MW = [];
        for (let wW = bR[RW] - pW; wW <= bR[RW] + pW + 1; wW++) MW.push(wW * gR.c.dw - CW[WW]);
        return MW
      })), YW = -CW[1], JW = [];
      for (const NW of iR) JW.push([new eW.vC(TW[0], YW, NW), new eW.vC(TW[TW.length - 1], YW, NW)]);
      for (const NW of TW) JW.push([new eW.vC(NW, YW, iR[0]), new eW.vC(NW, YW, iR[iR.length - 1])]);
      const PW = (0, tR.b)("Heatmap3DChunkGrid", {
        lines: JW
      }, WW.LC);
      PW.color = new NW.Color3(.45, .6, .78), PW.DC = !1, PW.isVisible = BW, WW.chunkGrid = PW, WW.chunkGridCentre = bR, WW.needsRender = !0
    }

    function qR(WW, RW, MW, wW) {
      WW.mAW("matrix", function(WW, RW) {
        const MW = new Float32Array(16 * RW);
        for (let wW = 0; wW < RW; wW++) {
          const RW = 16 * wW;
          MW[RW] = 1, MW[RW + 5] = 1, MW[RW + 10] = 1, MW[RW + 12] = WW[3 * wW], MW[RW + 13] = WW[3 * wW + 1], MW[RW + 14] = WW[3 * wW + 2], MW[RW + 15] = 1
        }
        return MW
      }(RW, wW), 16, !0), WW.mAW("color", MW, 4, !0), WW.isVisible = wW > 0
    }

    function ZW(WW) {
      const {
        camera: RW,
        translucent: MW
      } = WW, wW = [RW.position.x, RW.position.y, RW.position.z], CW = WW.translucentSortedFrom;
      if (null !== CW && Math.hypot(wW[0] - CW[0], wW[1] - CW[1], wW[2] - CW[2]) < dW) return;
      WW.translucentSortedFrom = wW;
      const zR = new Float64Array(MW.count),
        AW = new Uint32Array(MW.count);
      for (let NW = 0; NW < MW.count; NW++) {
        const WW = MW.bA[3 * NW] - wW[0],
          RW = MW.bA[3 * NW + 1] - wW[1],
          CW = MW.bA[3 * NW + 2] - wW[2];
        zR[NW] = WW * WW + RW * RW + CW * CW, AW[NW] = NW
      }
      AW.sort(((WW, RW) => zR[RW] - zR[WW]));
      const bR = new Float32Array(3 * MW.count),
        yR = new Float32Array(4 * MW.count);
      AW.forEach(((WW, RW) => {
        bR.set(MW.bA.subarray(3 * WW, 3 * WW + 3), 3 * RW), yR.set(MW.colours.subarray(4 * WW, 4 * WW + 4), 4 * RW)
      })), qR(WW.translucentCells, bR, yR, MW.count), WW.needsRender = !0
    }

    function SW(WW, RW) {
      const MW = (MW, wW, CW) => new eW.vC(0 === MW ? WW[0] : RW[0], 0 === wW ? WW[1] : RW[1], 0 === CW ? WW[2] : RW[2]),
        wW = [];
      for (const CW of [0, 1])
        for (const WW of [0, 1]) wW.push([MW(0, CW, WW), MW(1, CW, WW)], [MW(CW, 0, WW), MW(CW, 1, WW)], [MW(CW, WW, 0), MW(CW, WW, 1)]);
      return wW
    }

    function WR(WW) {
      return [Math.sin(WW.heading) * Math.cos(WW.pitch), -Math.sin(WW.pitch), Math.cos(WW.heading) * Math.cos(WW.pitch)]
    }

    function RR(WW) {
      return [Math.cos(WW), 0, -Math.sin(WW)]
    }

    function MR(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: VW,
        pitch: mR
      };
      const CW = [WW.max[0] - WW.min[0], WW.max[1] - WW.min[1], WW.max[2] - WW.min[2]],
        zR = WR(wW),
        AW = RR(wW.heading),
        bR = NR(zR, AW),
        yR = Math.tan(MW / 2),
        NW = yR * RW;
      let eW = 1;
      for (const BW of [-CW[0] / 2, CW[0] / 2])
        for (const WW of [-CW[1] / 2, CW[1] / 2])
          for (const RW of [-CW[2] / 2, CW[2] / 2]) {
            const MW = [BW, WW, RW],
              wW = yM(MW, zR);
            eW = Math.max(eW, Math.abs(yM(MW, AW)) / NW - wW, Math.abs(yM(MW, bR)) / yR - wW)
          }
      return {
        position: AR([WW.min[0] + CW[0] / 2, WW.min[1] + CW[1] / 2, WW.min[2] + CW[2] / 2], bM(zR, -eW * xR)),
        heading: wW.heading,
        pitch: wW.pitch
      }
    }

    function wR(WW, RW, MW) {
      const wW = zM(WW),
        CW = zM(MW),
        zR = AR(WW.position, bM(RW, -1)),
        AW = [0, 1, 2].reduce(((WW, RW) => AR(WW, bM(CW[RW], yM(zR, wW[RW])))), [0, 0, 0]);
      return {
        position: AR(RW, AW),
        heading: MW.heading,
        pitch: MW.pitch
      }
    }

    function CR(WW) {
      return bM(AR(WW.min, WW.max), .5)
    }

    function zM(WW) {
      const RW = WR(WW),
        MW = RR(WW.heading);
      return [RW, MW, NR(RW, MW)]
    }

    function AR(WW, RW) {
      return [WW[0] + RW[0], WW[1] + RW[1], WW[2] + RW[2]]
    }

    function bM(WW, RW) {
      return [WW[0] * RW, WW[1] * RW, WW[2] * RW]
    }

    function yM(WW, RW) {
      return WW[0] * RW[0] + WW[1] * RW[1] + WW[2] * RW[2]
    }

    function NR(WW, RW) {
      return [WW[1] * RW[2] - WW[2] * RW[1], WW[2] * RW[0] - WW[0] * RW[2], WW[0] * RW[1] - WW[1] * RW[0]]
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);