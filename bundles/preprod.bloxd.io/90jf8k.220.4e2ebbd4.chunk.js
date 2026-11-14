export const id = 220;
export const ids = [220];
export const modules = {
  37778: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      default: () => BF
    });
    SF(5430);
    var CF = SF(46),
      AF = SF(37783),
      uF = SF(38053),
      hF = SF(38171),
      bW = SF(38214),
      dF = SF(38233),
      PF = SF(35671),
      RF = SF(35617),
      iW = SF(38384),
      eF = SF(38424),
      EF = (SF(38456), SF(1085)),
      QF = SF(161),
      rW = SF(1046),
      gW = SF(11),
      tW = SF(2161),
      TF = SF(1266),
      aW = SF(929),
      kW = SF(5422),
      qW = SF(5436),
      VF = SF(3541),
      NF = SF(971);
    const DF = 1.2,
      LF = .2,
      mW = .0066 * Math.PI / 180,
      OF = new Set(["Escape", "KeyG"]),
      xW = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      ZF = "ArrowUp",
      oF = new Set([...Object.keys(xW), ZF, "ArrowDown"]),
      YF = 32,
      MF = 1,
      cW = 10,
      GF = "F4",
      zW = "Period",
      IF = Math.PI / 2 - .001,
      fF = Math.PI / 6,
      yW = Math.PI / 6,
      sF = 1.08,
      nF = [{
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
      HF = 24,
      KF = 7,
      wF = 4,
      XF = .01,
      UF = 4;

    function BF(FF) {
      let {
        heatmap: WF,
        scale: SF,
        fullyOpaqueFrom: MF,
        bounds: fF,
        fitBounds: yW,
        schematic: sF,
        controls: nF,
        onStepTime: HF,
        onShowAllTime: KF,
        onTogglePlaying: wF,
        getReadout: UF = null
      } = FF;
      const {
        t: BF
      } = (0, rW.B)(), {
        clientEscMenuOptions: uW
      } = (0, gW.d)(["clientEscMenuOptions"]), dW = (0, CF.useRef)(null), PW = (0, CF.useRef)(null), RW = (0, CF.useRef)(null), iS = (0, tW.c)(dW), [eW, EW] = (0, CF.useState)(!1), [QW, rS] = (0, CF.useState)(!1), [gS, tS] = (0, CF.useState)(!0), TW = (0, CF.useRef)(!1), [aS, kS] = (0, CF.useState)(!1), qS = QW || !gS && aS, [VW, NW] = (0, CF.useState)(!1), [DW, LW] = (0, CF.useState)(!0), [mS, OW] = (0, CF.useState)(null), xS = fF.min, [ZW, oW] = (0, CF.useState)(xS);
      ZW[0] === xS[0] && ZW[1] === xS[1] && ZW[2] === xS[2] || (oW(xS), null !== mS && OW({
        ...mS,
        position: hW(mS.position, hW(ZW, bS(xS, -1)))
      }));
      const YW = (0, CF.useMemo)((() => function(FF) {
          return [FF.max[0] - FF.min[0] + 1, FF.max[1] - FF.min[1] + 1, FF.max[2] - FF.min[2] + 1]
        }(fF)), [fF]),
        MW = (0, CF.useMemo)((() => function(FF, WF) {
          const SF = [],
            CF = [];
          for (const [AF, uF] of Object.entries(FF.frequencies)) {
            const FF = Number(AF);
            for (const [AF, hF] of Object.entries(uF)) {
              const uF = Number(AF);
              for (const [AF, bW] of Object.entries(hF)) bW <= 0 || (SF.push(FF - WF[0], uF - WF[1], Number(AF) - WF[2]), CF.push(bW))
            }
          }
          return {
            positions: Int32Array.from(SF),
            values: Float64Array.from(CF),
            count: CF.length
          }
        }(WF, xS)), [WF, xS]),
        cS = DF * uW.cameraFOV / 100,
        GW = iS.height > 0 ? iS.width / iS.height : 1,
        zS = (0, CF.useMemo)((() => function(FF, WF) {
          return {
            min: [FF.min[0] - WF[0], FF.min[1] - WF[1], FF.min[2] - WF[2]],
            max: [FF.max[0] - WF[0] + 1, FF.max[1] - WF[1] + 1, FF.max[2] - WF[2] + 1]
          }
        }(yW, xS)), [yW, xS]),
        IW = SW(zS, GW, cS),
        fW = null !== mS && void 0 !== mS ? mS : IW,
        yS = (0, CF.useRef)({
          fittedView: IW,
          fieldOfView: cS,
          mouseSensitivity: uW.mouseSensitivity,
          canLock: gS
        });
      yS.current = {
        fittedView: IW,
        fieldOfView: cS,
        mouseSensitivity: uW.mouseSensitivity,
        canLock: gS
      };
      const sW = (0, CF.useMemo)((() => {
          if (!qS) return null;
          const FF = (FF, SF, CF) => {
              var AF, uF, hF;
              return null !== (AF = null === (uF = WF.frequencies[FF + xS[0]]) || void 0 === uF || null === (hF = uF[SF + xS[1]]) || void 0 === hF ? void 0 : hF[CF + xS[2]]) && void 0 !== AF ? AF : 0
            },
            CF = function(FF, WF, SF, CF) {
              let AF = 0,
                uF = 1 / 0;
              for (const iW of [0, 1, 2]) {
                if (0 === WF[iW]) {
                  if (FF[iW] < 0 || FF[iW] > SF[iW]) return null;
                  continue
                }
                const CF = (0 - FF[iW]) / WF[iW],
                  hF = (SF[iW] - FF[iW]) / WF[iW];
                AF = Math.max(AF, Math.min(CF, hF)), uF = Math.min(uF, Math.max(CF, hF))
              }
              if (AF > uF) return null;
              const hF = [0, 1, 2].map((CF => Math.min(SF[CF] - 1, Math.max(0, Math.floor(FF[CF] + WF[CF] * AF))))),
                bW = [0, 1, 2].map((FF => Math.sign(WF[FF]))),
                dF = [0, 1, 2].map((SF => {
                  if (0 === bW[SF]) return 1 / 0;
                  return ((bW[SF] > 0 ? hF[SF] + 1 : hF[SF]) - FF[SF]) / WF[SF]
                })),
                PF = [0, 1, 2].map((FF => 0 === bW[FF] ? 1 / 0 : Math.abs(1 / WF[FF])));
              let RF = null;
              for (;;) {
                const FF = CF(hF[0], hF[1], hF[2]);
                if (FF >= 1) return hF;
                FF > 0 && (RF = [hF[0], hF[1], hF[2]]);
                const WF = dF[0] < dF[1] ? dF[0] < dF[2] ? 0 : 2 : dF[1] < dF[2] ? 1 : 2;
                if (dF[WF] > uF) return RF;
                if (hF[WF] += bW[WF], dF[WF] += PF[WF], hF[WF] < 0 || hF[WF] >= SF[WF]) return RF
              }
            }(fW.position, FW(fW), YW, ((WF, CF, AF) => (0, kW.A)(FF(WF, CF, AF), SF, MF)));
          return null === CF ? null : {
            x: CF[0] + xS[0],
            y: CF[1] + xS[1],
            z: CF[2] + xS[2],
            value: FF(CF[0], CF[1], CF[2])
          }
        }), [qS, WF, xS, fW, YW, SF, MF]),
        {
          keyHandlers: nW
        } = (0, qW.g)({
          isEnabled: qS,
          claimedKeyCodes: oF,
          TW: FF => {
            OW((WF => function(FF, WF) {
              const SF = [Math.sin(FF.heading), 0, Math.cos(FF.heading)],
                CF = hW(hW(bS(SF, WF.forward), bS(WW(FF.heading), WF.right)), [0, WF.up, 0]);
              return {
                ...FF,
                position: hW(FF.position, CF)
              }
            }(null !== WF && void 0 !== WF ? WF : yS.current.fittedView, FF)))
          },
          onZoomChange: NW
        });
      (0, CF.useEffect)((() => {
        const FF = PW.current;
        if (!FF) return;
        let WF;
        try {
          WF = function(FF, WF) {
            const SF = new AF.d(FF, !0, {
                stencil: !1
              }, !0),
              CF = new uF.e(SF),
              [EF, QF, rW] = kW.P;
            CF.clearColor = new PF.d(EF / 255, QF / 255, rW / 255, 1);
            const gW = new hF.e("Heatmap3DCamera", RF.HC.Zero(), CF);
            gW.fov = WF, gW.minZ = .05;
            const tW = new bW.d("Heatmap3DLight", new RF.HC(.4, 1, -.6), CF);
            tW.diffuse = PF.Color3.White(), tW.groundColor = PF.Color3.Black(), tW.specular = PF.Color3.Black();
            const TF = new dF.StandardMaterial("Heatmap3DCellMaterial", CF);
            TF.diffuseColor = new PF.Color3(.4, .4, .4), TF.emissiveColor = new PF.Color3(.62, .62, .62), TF.specularColor = PF.Color3.Black();
            const aW = (0, iW.c)("Heatmap3DCells", {
              size: 1
            }, CF);
            aW.material = TF, aW.JA = !1, aW.nC = !0, aW.isVisible = !1;
            const qW = (0, iW.c)("Heatmap3DTranslucentCells", {
              size: 1
            }, CF);
            qW.material = TF, qW.hasVertexAlpha = !0, qW.JA = !1, qW.nC = !0, qW.isVisible = !1;
            const VF = new dF.StandardMaterial("Heatmap3DSchematicMaterial", CF);
            VF.diffuseColor = new PF.Color3(.6, .6, .6), VF.emissiveColor = new PF.Color3(.4, .4, .4), VF.specularColor = PF.Color3.Black();
            const NF = (0, iW.c)("Heatmap3DSchematicBlocks", {
              size: 1
            }, CF);
            NF.material = VF, NF.JA = !1, NF.nC = !0, NF.isVisible = !1;
            const DF = (0, eF.b)("Heatmap3DTarget", {
              lines: lF([-.52, -.52, -.52], [.52, .52, .52])
            }, CF);
            return DF.color = new PF.Color3(.06, .14, .23), DF.renderingGroupId = 1, DF.JA = !1, DF.isVisible = !1, {
              engine: SF,
              ju: CF,
              camera: gW,
              cells: aW,
              translucentCells: qW,
              translucent: {
                GA: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: NF,
              targetOutline: DF,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: WF,
              needsRender: !0
            }
          }(FF, yS.current.fieldOfView)
        } catch (SF) {
          return console.error("Failed to start the 3D heatmap", SF), void EW(!0)
        }
        return RW.current = WF, WF.engine.runRenderLoop((() => {
          const FF = WF.camera;
          FF.fov !== WF.targetFieldOfView && (FF.fov += (WF.targetFieldOfView - FF.fov) * (FF.fov > WF.targetFieldOfView ? .3 : .2), Math.abs(WF.targetFieldOfView - FF.fov) < 5e-4 && (FF.fov = WF.targetFieldOfView), WF.needsRender = !0), WF.needsRender && (WF.ju.render(), WF.needsRender = !WF.ju.isReady() || !WF.engine.areAllEffectsReady())
        })), () => {
          RW.current = null, WF.engine.dispose()
        }
      }), []), (0, CF.useEffect)((() => {
        const FF = PW.current;
        if (!FF) return;
        const WF = () => {
            TW.current = !1, rS(document.pointerLockElement === FF)
          },
          SF = () => {
            TW.current && (TW.current = !1, tS(!1))
          },
          CF = WF => {
            const SF = !yS.current.canLock && document.activeElement === FF && 0 !== (1 & WF.buttons);
            if (document.pointerLockElement !== FF && !SF) return;
            const CF = yS.current.mouseSensitivity * mW;
            OW((FF => function(FF, WF, SF) {
              const CF = 2 * Math.PI;
              return {
                ...FF,
                heading: ((FF.heading + WF) % CF + CF) % CF,
                pitch: Math.max(-IF, Math.min(IF, FF.pitch + SF))
              }
            }(null !== FF && void 0 !== FF ? FF : yS.current.fittedView, WF.movementX * CF, WF.movementY * CF)))
          };
        return document.addEventListener("pointerlockchange", WF), document.addEventListener("pointerlockerror", SF), document.addEventListener("pointermove", CF), () => {
          document.removeEventListener("pointerlockchange", WF), document.removeEventListener("pointerlockerror", SF), document.removeEventListener("pointermove", CF), document.pointerLockElement === FF && (0, VF.b)()
        }
      }), []), (0, CF.useEffect)((() => {
        const FF = RW.current;
        null !== FF && 0 !== iS.width && 0 !== iS.height && (FF.engine.resize(), FF.needsRender = !0)
      }), [iS.width, iS.height]), (0, CF.useEffect)((() => {
        const FF = RW.current;
        null !== FF && (FF.targetFieldOfView = cS * (VW ? LF : 1))
      }), [cS, VW]), (0, CF.useEffect)((() => {
        const FF = RW.current;
        null !== FF && function(FF, WF, SF, CF) {
          const AF = [],
            uF = [],
            hF = [],
            bW = [];
          for (let dF = 0; dF < WF.count; dF++) {
            const FF = WF.values[dF],
              PF = (0, kW.A)(FF, SF, CF);
            if (PF <= 0) continue;
            const [RF, iW, eF] = (0, kW.t)((0, kW.G)(FF, SF)), EF = PF >= 1;
            (EF ? AF : hF).push(WF.positions[3 * dF] + .5, WF.positions[3 * dF + 1] + .5, WF.positions[3 * dF + 2] + .5), (EF ? uF : bW).push(RF / 255, iW / 255, eF / 255, PF)
          }
          JF(FF.cells, Float32Array.from(AF), Float32Array.from(uF), uF.length / 4), FF.translucent = {
            GA: Float32Array.from(hF),
            colours: Float32Array.from(bW),
            count: bW.length / 4
          }, FF.translucentSortedFrom = null, pF(FF), FF.needsRender = !0
        }(FF, MW, SF, MF)
      }), [MW, SF, MF]), (0, CF.useEffect)((() => {
        const FF = RW.current;
        null !== FF && function(FF, WF) {
          FF.chunkGridOrigin = WF, FF.chunkGridCentre = null, vW(FF)
        }(FF, fF.min)
      }), [fF]), (0, CF.useEffect)((() => {
        const FF = RW.current;
        null !== FF && function(FF, WF, SF) {
          const CF = [],
            AF = [];
          if (null !== WF) {
            const {
              positions: FF,
              colours: uF,
              count: hF
            } = WF.surface;
            for (let WF = 0; WF < hF; WF++) {
              const hF = [FF[3 * WF], FF[3 * WF + 1], FF[3 * WF + 2]];
              [0, 1, 2].every((FF => hF[FF] >= SF.min[FF] - YF && hF[FF] <= SF.max[FF] + YF)) && (CF.push(hF[0] - SF.min[0] + .5, hF[1] - SF.min[1] + .5, hF[2] - SF.min[2] + .5), AF.push(uF[3 * WF] / 255, uF[3 * WF + 1] / 255, uF[3 * WF + 2] / 255, 1))
            }
          }
          JF(FF.schematicBlocks, Float32Array.from(CF), Float32Array.from(AF), AF.length / 4), FF.needsRender = !0
        }(FF, sF, fF)
      }), [sF, fF]), (0, CF.useEffect)((() => {
        const FF = RW.current;
        null !== FF && null !== FF.chunkGrid && (FF.chunkGrid.isVisible = DW, FF.needsRender = !0)
      }), [DW, fF]), (0, CF.useEffect)((() => {
        const FF = RW.current;
        null !== FF && function(FF, WF, SF) {
          const {
            camera: CF
          } = FF;
          CF.position.set(WF.position[0], WF.position[1], WF.position[2]), CF.rotation.set(WF.pitch, WF.heading, 0);
          const AF = (cW + 1) * QF.h.MC * Math.sqrt(3);
          CF.maxZ = Math.max(AF, Math.hypot(...hW(WF.position, bS(AW({
            min: [0, 0, 0],
            max: SF
          }), -1))) + 2 * Math.hypot(...SF)), vW(FF), pF(FF), FF.needsRender = !0
        }(FF, fW, YW)
      }), [fW, YW]), (0, CF.useEffect)((() => {
        const FF = RW.current;
        null !== FF && (FF.targetOutline.isVisible = null !== sW, null !== sW && FF.targetOutline.position.set(sW.x - xS[0] + .5, sW.y - xS[1] + .5, sW.z - xS[2] + .5), FF.needsRender = !0)
      }), [sW, xS]);
      return (0, NF.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: dW,
        children: [(0, NF.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: PW,
          style: {
            width: `${iS.width}px`,
            height: `${iS.height}px`
          },
          tabIndex: 0,
          "aria-label": BF("3D heatmap"),
          onClick: () => {
            const FF = PW.current;
            if (null === FF) return;
            if (FF.focus({
                preventScroll: !0
              }), QW || !gS) return;
            const WF = FF.requestPointerLock();
            WF instanceof Promise ? WF.catch((FF => {
              FF instanceof DOMException && ("WrongDocumentError" === FF.name || "NotSupportedError" === FF.name) && tS(!1)
            })) : TW.current = !0
          },
          ...nW,
          onKeyDown: FF => {
            if (qS && OF.has(FF.code)) return FF.preventDefault(), void(() => {
              const FF = PW.current;
              null !== FF && document.pointerLockElement === FF ? (0, VF.b)() : null === FF || void 0 === FF || FF.blur()
            })();
            const WF = xW[FF.code];
            return qS && void 0 !== WF ? (FF.preventDefault(), void HF(WF)) : qS && (0, qW.e)("replayPlayPause", FF.code) && !(0, qW.e)("Zoom", FF.code) ? (FF.preventDefault(), void(FF.repeat || wF())) : qS && FF.code === ZF ? (FF.preventDefault(), void KF()) : qS && FF.code === zW ? (FF.preventDefault(), void OW(null)) : qS && FF.code === GF ? (FF.preventDefault(), void LW((FF => !FF))) : void nW.onKeyDown(FF)
          },
          onFocus: () => {
            kS(!0)
          },
          onBlur: () => {
            kS(!1), nW.onBlur()
          }
        }), eW && (0, NF.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: BF("3D view isn't available in this browser.")
        }), qS && (0, NF.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, NF.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: fW.position.map(((FF, WF) => (FF + xS[WF]).toFixed(2))).join(" ")
        }), DW && (0, NF.jsx)(jW, {
          heading: fW.heading,
          pitch: fW.pitch,
          onViewFrom: FF => {
            const WF = bS(FF, -1),
              SF = 0 === WF[1] ? {
                heading: Math.atan2(WF[0], WF[2]),
                pitch: 0
              } : {
                heading: fW.heading,
                pitch: WF[1] < 0 ? IF : -IF
              };
            OW(SW(zS, GW, cS, SF))
          },
          onTurn: (FF, WF) => {
            OW((SF => function(FF, WF, SF, CF) {
              return CW(FF, WF, {
                heading: FF.heading + SF * XF,
                pitch: Math.max(-IF, Math.min(IF, FF.pitch + CF * XF))
              })
            }(null !== SF && void 0 !== SF ? SF : yS.current.fittedView, AW(zS), FF, WF)))
          },
          onFlip: () => {
            OW((FF => function(FF, WF) {
              return CW(FF, WF, {
                heading: FF.heading + Math.PI,
                pitch: -FF.pitch
              })
            }(null !== FF && void 0 !== FF ? FF : yS.current.fittedView, AW(zS))))
          }
        }), null !== sW && (0, NF.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === UF ? BF("studio:heatmapBlockReadout", {
            x: sW.x,
            y: sW.y,
            z: sW.z,
            count: (0, EF.R)(sW.value)
          }) : UF(sW.x, sW.y, sW.z, sW.value)
        }), (0, NF.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [nF, (0, NF.jsx)(TF.N, {
            active: null === mS,
            onClick: () => {
              OW(null)
            },
            children: (0, NF.jsx)(aW.e, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function jW(FF) {
      let {
        heading: WF,
        pitch: SF,
        onViewFrom: AF,
        onTurn: uF,
        onFlip: hF
      } = FF;
      const {
        t: bW
      } = (0, rW.B)(), dF = (0, CF.useRef)(null), PF = FW({
        heading: WF,
        pitch: SF
      }), RF = WW(WF), iW = PW(PF, RF), eF = HF + KF + 2, EF = nF.flatMap((FF => [1, -1].map((WF => {
        const SF = bS(FF.direction, WF);
        return {
          ...FF,
          sign: WF,
          direction: SF,
          endX: eF + dW(SF, RF) * HF,
          endY: eF - dW(SF, iW) * HF,
          depth: dW(SF, PF)
        }
      })))).sort(((FF, WF) => WF.depth - FF.depth));
      return (0, NF.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * eF,
        height: 2 * eF,
        "aria-hidden": !0,
        onPointerDown: FF => {
          var WF, SF;
          FF.currentTarget.setPointerCapture(FF.pointerId);
          const CF = FF.target,
            AF = CF.getAttribute("data-end");
          dF.current = {
            pointerId: FF.pointerId,
            x: FF.clientX,
            y: FF.clientY,
            travel: 0,
            side: null === AF ? null : null !== (WF = null === (SF = EF[Number(AF)]) || void 0 === SF ? void 0 : SF.direction) && void 0 !== WF ? WF : null,
            isOnMiddle: CF.hasAttribute("data-middle")
          }
        },
        onPointerMove: FF => {
          const WF = dF.current;
          if (null === WF || WF.pointerId !== FF.pointerId) return;
          const SF = FF.clientX - WF.x,
            CF = FF.clientY - WF.y;
          WF.x = FF.clientX, WF.y = FF.clientY, WF.travel += Math.abs(SF) + Math.abs(CF), WF.travel >= UF && uF(SF, CF)
        },
        onPointerUp: FF => {
          const WF = dF.current;
          dF.current = null, null === WF || WF.pointerId !== FF.pointerId || WF.travel >= UF || (null !== WF.side ? AF(WF.side) : WF.isOnMiddle && hF())
        },
        onPointerCancel: () => {
          dF.current = null
        },
        children: [EF.map(((FF, WF) => {
          const SF = FF.sign > 0;
          return (0, NF.jsxs)("g", {
            children: [(0, NF.jsx)("line", {
              x1: eF,
              y1: eF,
              x2: FF.endX,
              y2: FF.endY,
              stroke: FF.colour,
              strokeOpacity: SF ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, NF.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": WF,
              cx: FF.endX,
              cy: FF.endY,
              r: SF ? KF : KF - 1,
              fill: FF.colour,
              fillOpacity: SF ? 1 : .3,
              stroke: FF.colour,
              strokeWidth: SF ? 0 : 1.5,
              children: (0, NF.jsx)("title", {
                children: `${bW("View from")} ${SF?"+":"\u2212"}${FF.name}`
              })
            }), SF && (0, NF.jsx)("text", {
              pointerEvents: "none",
              x: FF.endX,
              y: FF.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: FF.name
            })]
          }, `${SF?"+":"-"}${FF.name}`)
        })), (0, NF.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: eF,
          cy: eF,
          r: wF,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, NF.jsx)("title", {
            children: bW("View from the opposite side")
          })
        })]
      })
    }

    function vW(FF) {
      var WF, SF, CF;
      const {
        chunkGridOrigin: AF,
        camera: uF
      } = FF;
      if (null === AF) return;
      const hF = [uF.position.x, uF.position.y, uF.position.z],
        bW = [0, 2].map((FF => Math.floor((hF[FF] + AF[FF]) / QF.h.MC))),
        dF = FF.chunkGridCentre;
      if (null !== dF && dF.every(((FF, WF) => FF === bW[WF]))) return;
      const iW = null === (WF = null === (SF = FF.chunkGrid) || void 0 === SF ? void 0 : SF.isVisible) || void 0 === WF || WF;
      null === (CF = FF.chunkGrid) || void 0 === CF || CF.dispose();
      const [EF, rW] = [0, 2].map(((FF, WF) => {
        const SF = [];
        for (let CF = bW[WF] - cW; CF <= bW[WF] + cW + 1; CF++) SF.push(CF * QF.h.MC - AF[FF]);
        return SF
      })), gW = -AF[1], tW = [];
      for (const PF of rW) tW.push([new RF.HC(EF[0], gW, PF), new RF.HC(EF[EF.length - 1], gW, PF)]);
      for (const PF of EF) tW.push([new RF.HC(PF, gW, rW[0]), new RF.HC(PF, gW, rW[rW.length - 1])]);
      const TF = (0, eF.b)("Heatmap3DChunkGrid", {
        lines: tW
      }, FF.ju);
      TF.color = new PF.Color3(.45, .6, .78), TF.JA = !1, TF.isVisible = iW, FF.chunkGrid = TF, FF.chunkGridCentre = bW, FF.needsRender = !0
    }

    function JF(FF, WF, SF, CF) {
      FF.BuF("matrix", function(FF, WF) {
        const SF = new Float32Array(16 * WF);
        for (let CF = 0; CF < WF; CF++) {
          const WF = 16 * CF;
          SF[WF] = 1, SF[WF + 5] = 1, SF[WF + 10] = 1, SF[WF + 12] = FF[3 * CF], SF[WF + 13] = FF[3 * CF + 1], SF[WF + 14] = FF[3 * CF + 2], SF[WF + 15] = 1
        }
        return SF
      }(WF, CF), 16, !0), FF.BuF("color", SF, 4, !0), FF.isVisible = CF > 0
    }

    function pF(FF) {
      const {
        camera: WF,
        translucent: SF
      } = FF, CF = [WF.position.x, WF.position.y, WF.position.z], AF = FF.translucentSortedFrom;
      if (null !== AF && Math.hypot(CF[0] - AF[0], CF[1] - AF[1], CF[2] - AF[2]) < MF) return;
      FF.translucentSortedFrom = CF;
      const uF = new Float64Array(SF.count),
        hF = new Uint32Array(SF.count);
      for (let PF = 0; PF < SF.count; PF++) {
        const FF = SF.GA[3 * PF] - CF[0],
          WF = SF.GA[3 * PF + 1] - CF[1],
          AF = SF.GA[3 * PF + 2] - CF[2];
        uF[PF] = FF * FF + WF * WF + AF * AF, hF[PF] = PF
      }
      hF.sort(((FF, WF) => uF[WF] - uF[FF]));
      const bW = new Float32Array(3 * SF.count),
        dF = new Float32Array(4 * SF.count);
      hF.forEach(((FF, WF) => {
        bW.set(SF.GA.subarray(3 * FF, 3 * FF + 3), 3 * WF), dF.set(SF.colours.subarray(4 * FF, 4 * FF + 4), 4 * WF)
      })), JF(FF.translucentCells, bW, dF, SF.count), FF.needsRender = !0
    }

    function lF(FF, WF) {
      const SF = (SF, CF, AF) => new RF.HC(0 === SF ? FF[0] : WF[0], 0 === CF ? FF[1] : WF[1], 0 === AF ? FF[2] : WF[2]),
        CF = [];
      for (const AF of [0, 1])
        for (const FF of [0, 1]) CF.push([SF(0, AF, FF), SF(1, AF, FF)], [SF(AF, 0, FF), SF(AF, 1, FF)], [SF(AF, FF, 0), SF(AF, FF, 1)]);
      return CF
    }

    function FW(FF) {
      return [Math.sin(FF.heading) * Math.cos(FF.pitch), -Math.sin(FF.pitch), Math.cos(FF.heading) * Math.cos(FF.pitch)]
    }

    function WW(FF) {
      return [Math.cos(FF), 0, -Math.sin(FF)]
    }

    function SW(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: fF,
        pitch: yW
      };
      const AF = [FF.max[0] - FF.min[0], FF.max[1] - FF.min[1], FF.max[2] - FF.min[2]],
        uF = FW(CF),
        hF = WW(CF.heading),
        bW = PW(uF, hF),
        dF = Math.tan(SF / 2),
        PF = dF * WF;
      let RF = 1;
      for (const iW of [-AF[0] / 2, AF[0] / 2])
        for (const FF of [-AF[1] / 2, AF[1] / 2])
          for (const WF of [-AF[2] / 2, AF[2] / 2]) {
            const SF = [iW, FF, WF],
              CF = dW(SF, uF);
            RF = Math.max(RF, Math.abs(dW(SF, hF)) / PF - CF, Math.abs(dW(SF, bW)) / dF - CF)
          }
      return {
        position: hW([FF.min[0] + AF[0] / 2, FF.min[1] + AF[1] / 2, FF.min[2] + AF[2] / 2], bS(uF, -RF * sF)),
        heading: CF.heading,
        pitch: CF.pitch
      }
    }

    function CW(FF, WF, SF) {
      const CF = uW(FF),
        AF = uW(SF),
        uF = hW(FF.position, bS(WF, -1)),
        hF = [0, 1, 2].reduce(((FF, WF) => hW(FF, bS(AF[WF], dW(uF, CF[WF])))), [0, 0, 0]);
      return {
        position: hW(WF, hF),
        heading: SF.heading,
        pitch: SF.pitch
      }
    }

    function AW(FF) {
      return bS(hW(FF.min, FF.max), .5)
    }

    function uW(FF) {
      const WF = FW(FF),
        SF = WW(FF.heading);
      return [WF, SF, PW(WF, SF)]
    }

    function hW(FF, WF) {
      return [FF[0] + WF[0], FF[1] + WF[1], FF[2] + WF[2]]
    }

    function bS(FF, WF) {
      return [FF[0] * WF, FF[1] * WF, FF[2] * WF]
    }

    function dW(FF, WF) {
      return FF[0] * WF[0] + FF[1] * WF[1] + FF[2] * WF[2]
    }

    function PW(FF, WF) {
      return [FF[1] * WF[2] - FF[2] * WF[1], FF[2] * WF[0] - FF[0] * WF[2], FF[0] * WF[1] - FF[1] * WF[0]]
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);