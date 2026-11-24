export const id = 250;
export const ids = [250];
export const modules = {
  39861: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      default: () => TS
    });
    gS(6655);
    var tS = gS(64),
      bS = gS(39867),
      XS = gS(40129),
      xS = gS(40236),
      NS = gS(40286),
      qS = gS(40306),
      uS = gS(37294),
      IS = gS(37113),
      fS = gS(40432),
      kS = gS(40484),
      aS = (gS(40519), gS(1309)),
      KS = gS(198),
      jS = gS(1281),
      GS = gS(24),
      CS = gS(2890),
      nS = gS(1528),
      PS = gS(1127),
      QS = gS(6646),
      DS = gS(6663),
      wS = gS(4566),
      hS = gS(1181);
    const ZS = 1.2,
      JS = .2,
      OS = .0066 * Math.PI / 180,
      dS = new Set(["Escape", "KeyG"]),
      cS = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      vS = "ArrowUp",
      ES = new Set([...Object.keys(cS), vS, "ArrowDown"]),
      LS = 32,
      YS = 1,
      AS = 10,
      yS = "F4",
      VS = "Period",
      iS = Math.PI / 2 - .001,
      WS = Math.PI / 6,
      zS = Math.PI / 6,
      US = 1.08,
      pS = [{
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
      sS = 24,
      BS = 7,
      MS = 4,
      FS = .01,
      RS = 4;

    function TS(SS) {
      let {
        heatmap: HS,
        scale: gS,
        fullyOpaqueFrom: YS,
        bounds: WS,
        fitBounds: zS,
        schematic: US,
        controls: pS,
        onStepTime: sS,
        onShowAllTime: BS,
        onTogglePlaying: MS,
        getReadout: RS = null
      } = SS;
      const {
        t: TS
      } = (0, jS.F)(), {
        clientEscMenuOptions: XH
      } = (0, GS.m)(["clientEscMenuOptions"]), qH = (0, tS.useRef)(null), uH = (0, tS.useRef)(null), IH = (0, tS.useRef)(null), fH = (0, CS.d)(qH), [kH, aH] = (0, tS.useState)(!1), [KH, jH] = (0, tS.useState)(!1), [GH, CH] = (0, tS.useState)(!0), nH = (0, tS.useRef)(!1), [PH, QH] = (0, tS.useState)(!1), DH = KH || !GH && PH, [wH, hH] = (0, tS.useState)(!1), [ZH, JH] = (0, tS.useState)(!0), [OH, dH] = (0, tS.useState)(null), cH = WS.min, [vH, EH] = (0, tS.useState)(cH);
      vH[0] === cH[0] && vH[1] === cH[1] && vH[2] === cH[2] || (EH(cH), null !== OH && dH({
        ...OH,
        position: xH(OH.position, xH(vH, NH(cH, -1)))
      }));
      const LH = (0, tS.useMemo)((() => function(SS) {
          return [SS.max[0] - SS.min[0] + 1, SS.max[1] - SS.min[1] + 1, SS.max[2] - SS.min[2] + 1]
        }(WS)), [WS]),
        YH = (0, tS.useMemo)((() => function(SS, HS) {
          const gS = [],
            tS = [];
          for (const [bS, XS] of Object.entries(SS.frequencies)) {
            const SS = Number(bS);
            for (const [bS, xS] of Object.entries(XS)) {
              const XS = Number(bS);
              for (const [bS, NS] of Object.entries(xS)) NS <= 0 || (gS.push(SS - HS[0], XS - HS[1], Number(bS) - HS[2]), tS.push(NS))
            }
          }
          return {
            positions: Int32Array.from(gS),
            values: Float64Array.from(tS),
            count: tS.length
          }
        }(HS, cH)), [HS, cH]),
        AH = ZS * XH.cameraFOV / 100,
        yH = fH.height > 0 ? fH.width / fH.height : 1,
        VH = (0, tS.useMemo)((() => function(SS, HS) {
          return {
            min: [SS.min[0] - HS[0], SS.min[1] - HS[1], SS.min[2] - HS[2]],
            max: [SS.max[0] - HS[0] + 1, SS.max[1] - HS[1] + 1, SS.max[2] - HS[2] + 1]
          }
        }(zS, cH)), [zS, cH]),
        iH = gH(VH, yH, AH),
        WH = null !== OH && void 0 !== OH ? OH : iH,
        zH = (0, tS.useRef)({
          fittedView: iH,
          fieldOfView: AH,
          mouseSensitivity: XH.mouseSensitivity,
          canLock: GH
        });
      zH.current = {
        fittedView: iH,
        fieldOfView: AH,
        mouseSensitivity: XH.mouseSensitivity,
        canLock: GH
      };
      const UH = (0, tS.useMemo)((() => {
          if (!DH) return null;
          const SS = (SS, gS, tS) => {
              var bS, XS, xS;
              return null !== (bS = null === (XS = HS.frequencies[SS + cH[0]]) || void 0 === XS || null === (xS = XS[gS + cH[1]]) || void 0 === xS ? void 0 : xS[tS + cH[2]]) && void 0 !== bS ? bS : 0
            },
            tS = function(SS, HS, gS, tS) {
              let bS = 0,
                XS = 1 / 0;
              for (const fS of [0, 1, 2]) {
                if (0 === HS[fS]) {
                  if (SS[fS] < 0 || SS[fS] > gS[fS]) return null;
                  continue
                }
                const tS = (0 - SS[fS]) / HS[fS],
                  xS = (gS[fS] - SS[fS]) / HS[fS];
                bS = Math.max(bS, Math.min(tS, xS)), XS = Math.min(XS, Math.max(tS, xS))
              }
              if (bS > XS) return null;
              const xS = [0, 1, 2].map((tS => Math.min(gS[tS] - 1, Math.max(0, Math.floor(SS[tS] + HS[tS] * bS))))),
                NS = [0, 1, 2].map((SS => Math.sign(HS[SS]))),
                qS = [0, 1, 2].map((gS => {
                  if (0 === NS[gS]) return 1 / 0;
                  return ((NS[gS] > 0 ? xS[gS] + 1 : xS[gS]) - SS[gS]) / HS[gS]
                })),
                uS = [0, 1, 2].map((SS => 0 === NS[SS] ? 1 / 0 : Math.abs(1 / HS[SS])));
              let IS = null;
              for (;;) {
                const SS = tS(xS[0], xS[1], xS[2]);
                if (SS >= 1) return xS;
                SS > 0 && (IS = [xS[0], xS[1], xS[2]]);
                const HS = qS[0] < qS[1] ? qS[0] < qS[2] ? 0 : 2 : qS[1] < qS[2] ? 1 : 2;
                if (qS[HS] > XS) return IS;
                if (xS[HS] += NS[HS], qS[HS] += uS[HS], xS[HS] < 0 || xS[HS] >= gS[HS]) return IS
              }
            }(WH.position, SH(WH), LH, ((HS, tS, bS) => (0, QS.C)(SS(HS, tS, bS), gS, YS)));
          return null === tS ? null : {
            x: tS[0] + cH[0],
            y: tS[1] + cH[1],
            z: tS[2] + cH[2],
            value: SS(tS[0], tS[1], tS[2])
          }
        }), [DH, HS, cH, WH, LH, gS, YS]),
        {
          keyHandlers: pH
        } = (0, DS.d)({
          isEnabled: DH,
          claimedKeyCodes: ES,
          jk: SS => {
            dH((HS => function(SS, HS) {
              const gS = [Math.sin(SS.heading), 0, Math.cos(SS.heading)],
                tS = xH(xH(NH(gS, HS.forward), NH(HH(SS.heading), HS.right)), [0, HS.up, 0]);
              return {
                ...SS,
                position: xH(SS.position, tS)
              }
            }(null !== HS && void 0 !== HS ? HS : zH.current.fittedView, SS)))
          },
          onZoomChange: hH
        });
      (0, tS.useEffect)((() => {
        const SS = uH.current;
        if (!SS) return;
        let HS;
        try {
          HS = function(SS, HS) {
            const gS = new bS.b(SS, !0, {
                stencil: !1
              }, !0),
              tS = new XS.b(gS),
              [aS, KS, jS] = QS.Y;
            tS.clearColor = new uS.b(aS / 255, KS / 255, jS / 255, 1);
            const GS = new xS.e("Heatmap3DCamera", IS.VK.Zero(), tS);
            GS.fov = HS, GS.minZ = .05;
            const CS = new NS.d("Heatmap3DLight", new IS.VK(.4, 1, -.6), tS);
            CS.diffuse = uS.Color3.White(), CS.groundColor = uS.Color3.Black(), CS.specular = uS.Color3.Black();
            const nS = new qS.StandardMaterial("Heatmap3DCellMaterial", tS);
            nS.diffuseColor = new uS.Color3(.4, .4, .4), nS.emissiveColor = new uS.Color3(.62, .62, .62), nS.specularColor = uS.Color3.Black();
            const PS = (0, fS.c)("Heatmap3DCells", {
              size: 1
            }, tS);
            PS.material = nS, PS.Fj = !1, PS.yK = !0, PS.isVisible = !1;
            const DS = (0, fS.c)("Heatmap3DTranslucentCells", {
              size: 1
            }, tS);
            DS.material = nS, DS.hasVertexAlpha = !0, DS.Fj = !1, DS.yK = !0, DS.isVisible = !1;
            const wS = new qS.StandardMaterial("Heatmap3DSchematicMaterial", tS);
            wS.diffuseColor = new uS.Color3(.6, .6, .6), wS.emissiveColor = new uS.Color3(.4, .4, .4), wS.specularColor = uS.Color3.Black();
            const hS = (0, fS.c)("Heatmap3DSchematicBlocks", {
              size: 1
            }, tS);
            hS.material = wS, hS.Fj = !1, hS.yK = !0, hS.isVisible = !1;
            const ZS = (0, kS.d)("Heatmap3DTarget", {
              lines: rS([-.52, -.52, -.52], [.52, .52, .52])
            }, tS);
            return ZS.color = new uS.Color3(.06, .14, .23), ZS.renderingGroupId = 1, ZS.Fj = !1, ZS.isVisible = !1, {
              engine: gS,
              Bj: tS,
              camera: GS,
              cells: PS,
              translucentCells: DS,
              translucent: {
                ck: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: hS,
              targetOutline: ZS,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: HS,
              needsRender: !0
            }
          }(SS, zH.current.fieldOfView)
        } catch (gS) {
          return console.error("Failed to start the 3D heatmap", gS), void aH(!0)
        }
        return IH.current = HS, HS.engine.runRenderLoop((() => {
          const SS = HS.camera;
          SS.fov !== HS.targetFieldOfView && (SS.fov += (HS.targetFieldOfView - SS.fov) * (SS.fov > HS.targetFieldOfView ? .3 : .2), Math.abs(HS.targetFieldOfView - SS.fov) < 5e-4 && (SS.fov = HS.targetFieldOfView), HS.needsRender = !0), HS.needsRender && (HS.Bj.render(), HS.needsRender = !HS.Bj.isReady() || !HS.engine.areAllEffectsReady())
        })), () => {
          IH.current = null, HS.engine.dispose()
        }
      }), []), (0, tS.useEffect)((() => {
        const SS = uH.current;
        if (!SS) return;
        const HS = () => {
            nH.current = !1, jH(document.pointerLockElement === SS)
          },
          gS = () => {
            nH.current && (nH.current = !1, CH(!1))
          },
          tS = HS => {
            const gS = !zH.current.canLock && document.activeElement === SS && 0 !== (1 & HS.buttons);
            if (document.pointerLockElement !== SS && !gS) return;
            const tS = zH.current.mouseSensitivity * OS;
            dH((SS => function(SS, HS, gS) {
              const tS = 2 * Math.PI;
              return {
                ...SS,
                heading: ((SS.heading + HS) % tS + tS) % tS,
                pitch: Math.max(-iS, Math.min(iS, SS.pitch + gS))
              }
            }(null !== SS && void 0 !== SS ? SS : zH.current.fittedView, HS.movementX * tS, HS.movementY * tS)))
          };
        return document.addEventListener("pointerlockchange", HS), document.addEventListener("pointerlockerror", gS), document.addEventListener("pointermove", tS), () => {
          document.removeEventListener("pointerlockchange", HS), document.removeEventListener("pointerlockerror", gS), document.removeEventListener("pointermove", tS), document.pointerLockElement === SS && (0, wS.c)()
        }
      }), []), (0, tS.useEffect)((() => {
        const SS = IH.current;
        null !== SS && 0 !== fH.width && 0 !== fH.height && (SS.engine.resize(), SS.needsRender = !0)
      }), [fH.width, fH.height]), (0, tS.useEffect)((() => {
        const SS = IH.current;
        null !== SS && (SS.targetFieldOfView = AH * (wH ? JS : 1))
      }), [AH, wH]), (0, tS.useEffect)((() => {
        const SS = IH.current;
        null !== SS && function(SS, HS, gS, tS) {
          const bS = [],
            XS = [],
            xS = [],
            NS = [];
          for (let qS = 0; qS < HS.count; qS++) {
            const SS = HS.values[qS],
              uS = (0, QS.C)(SS, gS, tS);
            if (uS <= 0) continue;
            const [IS, fS, kS] = (0, QS.t)((0, QS.O)(SS, gS)), aS = uS >= 1;
            (aS ? bS : xS).push(HS.positions[3 * qS] + .5, HS.positions[3 * qS + 1] + .5, HS.positions[3 * qS + 2] + .5), (aS ? XS : NS).push(IS / 255, fS / 255, kS / 255, uS)
          }
          mS(SS.cells, Float32Array.from(bS), Float32Array.from(XS), XS.length / 4), SS.translucent = {
            ck: Float32Array.from(xS),
            colours: Float32Array.from(NS),
            count: NS.length / 4
          }, SS.translucentSortedFrom = null, eS(SS), SS.needsRender = !0
        }(SS, YH, gS, YS)
      }), [YH, gS, YS]), (0, tS.useEffect)((() => {
        const SS = IH.current;
        null !== SS && function(SS, HS) {
          SS.chunkGridOrigin = HS, SS.chunkGridCentre = null, lS(SS)
        }(SS, WS.min)
      }), [WS]), (0, tS.useEffect)((() => {
        const SS = IH.current;
        null !== SS && function(SS, HS, gS) {
          const tS = [],
            bS = [];
          if (null !== HS) {
            const {
              positions: SS,
              colours: XS,
              count: xS
            } = HS.surface;
            for (let HS = 0; HS < xS; HS++) {
              const xS = [SS[3 * HS], SS[3 * HS + 1], SS[3 * HS + 2]];
              [0, 1, 2].every((SS => xS[SS] >= gS.min[SS] - LS && xS[SS] <= gS.max[SS] + LS)) && (tS.push(xS[0] - gS.min[0] + .5, xS[1] - gS.min[1] + .5, xS[2] - gS.min[2] + .5), bS.push(XS[3 * HS] / 255, XS[3 * HS + 1] / 255, XS[3 * HS + 2] / 255, 1))
            }
          }
          mS(SS.schematicBlocks, Float32Array.from(tS), Float32Array.from(bS), bS.length / 4), SS.needsRender = !0
        }(SS, US, WS)
      }), [US, WS]), (0, tS.useEffect)((() => {
        const SS = IH.current;
        null !== SS && null !== SS.chunkGrid && (SS.chunkGrid.isVisible = ZH, SS.needsRender = !0)
      }), [ZH, WS]), (0, tS.useEffect)((() => {
        const SS = IH.current;
        null !== SS && function(SS, HS, gS) {
          const {
            camera: tS
          } = SS;
          tS.position.set(HS.position[0], HS.position[1], HS.position[2]), tS.rotation.set(HS.pitch, HS.heading, 0);
          const bS = (AS + 1) * KS.e.JK * Math.sqrt(3);
          tS.maxZ = Math.max(bS, Math.hypot(...xH(HS.position, NH(bH({
            min: [0, 0, 0],
            max: gS
          }), -1))) + 2 * Math.hypot(...gS)), lS(SS), eS(SS), SS.needsRender = !0
        }(SS, WH, LH)
      }), [WH, LH]), (0, tS.useEffect)((() => {
        const SS = IH.current;
        null !== SS && (SS.targetOutline.isVisible = null !== UH, null !== UH && SS.targetOutline.position.set(UH.x - cH[0] + .5, UH.y - cH[1] + .5, UH.z - cH[2] + .5), SS.needsRender = !0)
      }), [UH, cH]);
      return (0, hS.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: qH,
        children: [(0, hS.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: uH,
          style: {
            width: `${fH.width}px`,
            height: `${fH.height}px`
          },
          tabIndex: 0,
          "aria-label": TS("3D heatmap"),
          onClick: () => {
            const SS = uH.current;
            if (null === SS) return;
            if (SS.focus({
                preventScroll: !0
              }), KH || !GH) return;
            const HS = SS.requestPointerLock();
            HS instanceof Promise ? HS.catch((SS => {
              SS instanceof DOMException && ("WrongDocumentError" === SS.name || "NotSupportedError" === SS.name) && CH(!1)
            })) : nH.current = !0
          },
          ...pH,
          onKeyDown: SS => {
            if (DH && dS.has(SS.code)) return SS.preventDefault(), void(() => {
              const SS = uH.current;
              null !== SS && document.pointerLockElement === SS ? (0, wS.c)() : null === SS || void 0 === SS || SS.blur()
            })();
            const HS = cS[SS.code];
            return DH && void 0 !== HS ? (SS.preventDefault(), void sS(HS)) : DH && (0, DS.b)("replayPlayPause", SS.code) && !(0, DS.b)("Zoom", SS.code) ? (SS.preventDefault(), void(SS.repeat || MS())) : DH && SS.code === vS ? (SS.preventDefault(), void BS()) : DH && SS.code === VS ? (SS.preventDefault(), void dH(null)) : DH && SS.code === yS ? (SS.preventDefault(), void JH((SS => !SS))) : void pH.onKeyDown(SS)
          },
          onFocus: () => {
            QH(!0)
          },
          onBlur: () => {
            QH(!1), pH.onBlur()
          }
        }), kH && (0, hS.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: TS("3D view isn't available in this browser.")
        }), DH && (0, hS.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, hS.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: WH.position.map(((SS, HS) => (SS + cH[HS]).toFixed(2))).join(" ")
        }), ZH && (0, hS.jsx)(oS, {
          heading: WH.heading,
          pitch: WH.pitch,
          onViewFrom: SS => {
            const HS = NH(SS, -1),
              gS = 0 === HS[1] ? {
                heading: Math.atan2(HS[0], HS[2]),
                pitch: 0
              } : {
                heading: WH.heading,
                pitch: HS[1] < 0 ? iS : -iS
              };
            dH(gH(VH, yH, AH, gS))
          },
          onTurn: (SS, HS) => {
            dH((gS => function(SS, HS, gS, tS) {
              return tH(SS, HS, {
                heading: SS.heading + gS * FS,
                pitch: Math.max(-iS, Math.min(iS, SS.pitch + tS * FS))
              })
            }(null !== gS && void 0 !== gS ? gS : zH.current.fittedView, bH(VH), SS, HS)))
          },
          onFlip: () => {
            dH((SS => function(SS, HS) {
              return tH(SS, HS, {
                heading: SS.heading + Math.PI,
                pitch: -SS.pitch
              })
            }(null !== SS && void 0 !== SS ? SS : zH.current.fittedView, bH(VH))))
          }
        }), null !== UH && (0, hS.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === RS ? TS("studio:heatmapBlockReadout", {
            x: UH.x,
            y: UH.y,
            z: UH.z,
            count: (0, aS.R)(UH.value)
          }) : RS(UH.x, UH.y, UH.z, UH.value)
        }), (0, hS.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [pS, (0, hS.jsx)(nS.P, {
            active: null === OH,
            onClick: () => {
              dH(null)
            },
            children: (0, hS.jsx)(PS.d, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function oS(SS) {
      let {
        heading: HS,
        pitch: gS,
        onViewFrom: bS,
        onTurn: XS,
        onFlip: xS
      } = SS;
      const {
        t: NS
      } = (0, jS.F)(), qS = (0, tS.useRef)(null), uS = SH({
        heading: HS,
        pitch: gS
      }), IS = HH(HS), fS = uH(uS, IS), kS = sS + BS + 2, aS = pS.flatMap((SS => [1, -1].map((HS => {
        const gS = NH(SS.direction, HS);
        return {
          ...SS,
          sign: HS,
          direction: gS,
          endX: kS + qH(gS, IS) * sS,
          endY: kS - qH(gS, fS) * sS,
          depth: qH(gS, uS)
        }
      })))).sort(((SS, HS) => HS.depth - SS.depth));
      return (0, hS.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * kS,
        height: 2 * kS,
        "aria-hidden": !0,
        onPointerDown: SS => {
          var HS, gS;
          SS.currentTarget.setPointerCapture(SS.pointerId);
          const tS = SS.target,
            bS = tS.getAttribute("data-end");
          qS.current = {
            pointerId: SS.pointerId,
            x: SS.clientX,
            y: SS.clientY,
            travel: 0,
            side: null === bS ? null : null !== (HS = null === (gS = aS[Number(bS)]) || void 0 === gS ? void 0 : gS.direction) && void 0 !== HS ? HS : null,
            isOnMiddle: tS.hasAttribute("data-middle")
          }
        },
        onPointerMove: SS => {
          const HS = qS.current;
          if (null === HS || HS.pointerId !== SS.pointerId) return;
          const gS = SS.clientX - HS.x,
            tS = SS.clientY - HS.y;
          HS.x = SS.clientX, HS.y = SS.clientY, HS.travel += Math.abs(gS) + Math.abs(tS), HS.travel >= RS && XS(gS, tS)
        },
        onPointerUp: SS => {
          const HS = qS.current;
          qS.current = null, null === HS || HS.pointerId !== SS.pointerId || HS.travel >= RS || (null !== HS.side ? bS(HS.side) : HS.isOnMiddle && xS())
        },
        onPointerCancel: () => {
          qS.current = null
        },
        children: [aS.map(((SS, HS) => {
          const gS = SS.sign > 0;
          return (0, hS.jsxs)("g", {
            children: [(0, hS.jsx)("line", {
              x1: kS,
              y1: kS,
              x2: SS.endX,
              y2: SS.endY,
              stroke: SS.colour,
              strokeOpacity: gS ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, hS.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": HS,
              cx: SS.endX,
              cy: SS.endY,
              r: gS ? BS : BS - 1,
              fill: SS.colour,
              fillOpacity: gS ? 1 : .3,
              stroke: SS.colour,
              strokeWidth: gS ? 0 : 1.5,
              children: (0, hS.jsx)("title", {
                children: `${NS("View from")} ${gS?"+":"\u2212"}${SS.name}`
              })
            }), gS && (0, hS.jsx)("text", {
              pointerEvents: "none",
              x: SS.endX,
              y: SS.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: SS.name
            })]
          }, `${gS?"+":"-"}${SS.name}`)
        })), (0, hS.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: kS,
          cy: kS,
          r: MS,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, hS.jsx)("title", {
            children: NS("View from the opposite side")
          })
        })]
      })
    }

    function lS(SS) {
      var HS, gS, tS;
      const {
        chunkGridOrigin: bS,
        camera: XS
      } = SS;
      if (null === bS) return;
      const xS = [XS.position.x, XS.position.y, XS.position.z],
        NS = [0, 2].map((SS => Math.floor((xS[SS] + bS[SS]) / KS.e.JK))),
        qS = SS.chunkGridCentre;
      if (null !== qS && qS.every(((SS, HS) => SS === NS[HS]))) return;
      const fS = null === (HS = null === (gS = SS.chunkGrid) || void 0 === gS ? void 0 : gS.isVisible) || void 0 === HS || HS;
      null === (tS = SS.chunkGrid) || void 0 === tS || tS.dispose();
      const [aS, jS] = [0, 2].map(((SS, HS) => {
        const gS = [];
        for (let tS = NS[HS] - AS; tS <= NS[HS] + AS + 1; tS++) gS.push(tS * KS.e.JK - bS[SS]);
        return gS
      })), GS = -bS[1], CS = [];
      for (const uS of jS) CS.push([new IS.VK(aS[0], GS, uS), new IS.VK(aS[aS.length - 1], GS, uS)]);
      for (const uS of aS) CS.push([new IS.VK(uS, GS, jS[0]), new IS.VK(uS, GS, jS[jS.length - 1])]);
      const nS = (0, kS.d)("Heatmap3DChunkGrid", {
        lines: CS
      }, SS.Bj);
      nS.color = new uS.Color3(.45, .6, .78), nS.Fj = !1, nS.isVisible = fS, SS.chunkGrid = nS, SS.chunkGridCentre = NS, SS.needsRender = !0
    }

    function mS(SS, HS, gS, tS) {
      SS.o9("matrix", function(SS, HS) {
        const gS = new Float32Array(16 * HS);
        for (let tS = 0; tS < HS; tS++) {
          const HS = 16 * tS;
          gS[HS] = 1, gS[HS + 5] = 1, gS[HS + 10] = 1, gS[HS + 12] = SS[3 * tS], gS[HS + 13] = SS[3 * tS + 1], gS[HS + 14] = SS[3 * tS + 2], gS[HS + 15] = 1
        }
        return gS
      }(HS, tS), 16, !0), SS.o9("color", gS, 4, !0), SS.isVisible = tS > 0
    }

    function eS(SS) {
      const {
        camera: HS,
        translucent: gS
      } = SS, tS = [HS.position.x, HS.position.y, HS.position.z], bS = SS.translucentSortedFrom;
      if (null !== bS && Math.hypot(tS[0] - bS[0], tS[1] - bS[1], tS[2] - bS[2]) < YS) return;
      SS.translucentSortedFrom = tS;
      const XS = new Float64Array(gS.count),
        xS = new Uint32Array(gS.count);
      for (let uS = 0; uS < gS.count; uS++) {
        const SS = gS.ck[3 * uS] - tS[0],
          HS = gS.ck[3 * uS + 1] - tS[1],
          bS = gS.ck[3 * uS + 2] - tS[2];
        XS[uS] = SS * SS + HS * HS + bS * bS, xS[uS] = uS
      }
      xS.sort(((SS, HS) => XS[HS] - XS[SS]));
      const NS = new Float32Array(3 * gS.count),
        qS = new Float32Array(4 * gS.count);
      xS.forEach(((SS, HS) => {
        NS.set(gS.ck.subarray(3 * SS, 3 * SS + 3), 3 * HS), qS.set(gS.colours.subarray(4 * SS, 4 * SS + 4), 4 * HS)
      })), mS(SS.translucentCells, NS, qS, gS.count), SS.needsRender = !0
    }

    function rS(SS, HS) {
      const gS = (gS, tS, bS) => new IS.VK(0 === gS ? SS[0] : HS[0], 0 === tS ? SS[1] : HS[1], 0 === bS ? SS[2] : HS[2]),
        tS = [];
      for (const bS of [0, 1])
        for (const SS of [0, 1]) tS.push([gS(0, bS, SS), gS(1, bS, SS)], [gS(bS, 0, SS), gS(bS, 1, SS)], [gS(bS, SS, 0), gS(bS, SS, 1)]);
      return tS
    }

    function SH(SS) {
      return [Math.sin(SS.heading) * Math.cos(SS.pitch), -Math.sin(SS.pitch), Math.cos(SS.heading) * Math.cos(SS.pitch)]
    }

    function HH(SS) {
      return [Math.cos(SS), 0, -Math.sin(SS)]
    }

    function gH(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: WS,
        pitch: zS
      };
      const bS = [SS.max[0] - SS.min[0], SS.max[1] - SS.min[1], SS.max[2] - SS.min[2]],
        XS = SH(tS),
        xS = HH(tS.heading),
        NS = uH(XS, xS),
        qS = Math.tan(gS / 2),
        uS = qS * HS;
      let IS = 1;
      for (const fS of [-bS[0] / 2, bS[0] / 2])
        for (const SS of [-bS[1] / 2, bS[1] / 2])
          for (const HS of [-bS[2] / 2, bS[2] / 2]) {
            const gS = [fS, SS, HS],
              tS = qH(gS, XS);
            IS = Math.max(IS, Math.abs(qH(gS, xS)) / uS - tS, Math.abs(qH(gS, NS)) / qS - tS)
          }
      return {
        position: xH([SS.min[0] + bS[0] / 2, SS.min[1] + bS[1] / 2, SS.min[2] + bS[2] / 2], NH(XS, -IS * US)),
        heading: tS.heading,
        pitch: tS.pitch
      }
    }

    function tH(SS, HS, gS) {
      const tS = XH(SS),
        bS = XH(gS),
        XS = xH(SS.position, NH(HS, -1)),
        xS = [0, 1, 2].reduce(((SS, HS) => xH(SS, NH(bS[HS], qH(XS, tS[HS])))), [0, 0, 0]);
      return {
        position: xH(HS, xS),
        heading: gS.heading,
        pitch: gS.pitch
      }
    }

    function bH(SS) {
      return NH(xH(SS.min, SS.max), .5)
    }

    function XH(SS) {
      const HS = SH(SS),
        gS = HH(SS.heading);
      return [HS, gS, uH(HS, gS)]
    }

    function xH(SS, HS) {
      return [SS[0] + HS[0], SS[1] + HS[1], SS[2] + HS[2]]
    }

    function NH(SS, HS) {
      return [SS[0] * HS, SS[1] * HS, SS[2] * HS]
    }

    function qH(SS, HS) {
      return SS[0] * HS[0] + SS[1] * HS[1] + SS[2] * HS[2]
    }

    function uH(SS, HS) {
      return [SS[1] * HS[2] - SS[2] * HS[1], SS[2] * HS[0] - SS[0] * HS[2], SS[0] * HS[1] - SS[1] * HS[0]]
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);