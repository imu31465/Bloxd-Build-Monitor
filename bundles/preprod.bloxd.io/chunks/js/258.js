export const id = 258;
export const ids = [258];
export const modules = {
  40083: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => NQ
    });
    XQ(6858);
    var wQ = XQ(61),
      qQ = XQ(40089),
      TQ = XQ(40349),
      zQ = XQ(40479),
      sQ = XQ(40517),
      FQ = XQ(40530),
      PQ = XQ(37539),
      gQ = XQ(37367),
      JQ = XQ(40643),
      rQ = XQ(40699),
      IQ = (XQ(40732), XQ(1257)),
      jQ = XQ(231),
      BQ = XQ(1226),
      yQ = XQ(26),
      VQ = XQ(2978),
      DQ = XQ(1507),
      pQ = XQ(1094),
      GQ = XQ(6849),
      UQ = XQ(6861),
      bQ = XQ(4766),
      vQ = XQ(1145);
    const dQ = 1.2,
      HQ = .2,
      aQ = .0066 * Math.PI / 180,
      lQ = new Set(["Escape", "KeyG"]),
      hQ = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      iQ = "ArrowUp",
      cQ = new Set([...Object.keys(hQ), iQ, "ArrowDown"]),
      AQ = 32,
      RQ = 1,
      EQ = 10,
      CQ = "F4",
      uQ = "Period",
      LQ = Math.PI / 2 - .001,
      kQ = Math.PI / 6,
      fQ = Math.PI / 6,
      SQ = 1.08,
      tQ = [{
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
      oQ = 24,
      eQ = 7,
      nQ = 4,
      xQ = .01,
      YQ = 4;

    function NQ(QQ) {
      let {
        heatmap: WQ,
        scale: XQ,
        fullyOpaqueFrom: RQ,
        bounds: kQ,
        fitBounds: fQ,
        schematic: SQ,
        controls: tQ,
        onStepTime: oQ,
        onShowAllTime: eQ,
        onTogglePlaying: nQ,
        getReadout: YQ = null
      } = QQ;
      const {
        t: NQ
      } = (0, BQ.C)(), {
        clientEscMenuOptions: TW
      } = (0, yQ.n)(["clientEscMenuOptions"]), FW = (0, wQ.useRef)(null), PW = (0, wQ.useRef)(null), gW = (0, wQ.useRef)(null), JW = (0, VQ.d)(FW), [rW, IW] = (0, wQ.useState)(!1), [jW, BW] = (0, wQ.useState)(!1), [yW, VW] = (0, wQ.useState)(!0), DW = (0, wQ.useRef)(!1), [pW, GW] = (0, wQ.useState)(!1), UW = jW || !yW && pW, [bW, vW] = (0, wQ.useState)(!1), [dW, HW] = (0, wQ.useState)(!0), [aW, lW] = (0, wQ.useState)(null), hW = kQ.min, [iW, cW] = (0, wQ.useState)(hW);
      iW[0] === hW[0] && iW[1] === hW[1] && iW[2] === hW[2] || (cW(hW), null !== aW && lW({
        ...aW,
        position: zW(aW.position, zW(iW, sW(hW, -1)))
      }));
      const AW = (0, wQ.useMemo)((() => function(QQ) {
          return [QQ.max[0] - QQ.min[0] + 1, QQ.max[1] - QQ.min[1] + 1, QQ.max[2] - QQ.min[2] + 1]
        }(kQ)), [kQ]),
        RW = (0, wQ.useMemo)((() => function(QQ, WQ) {
          const XQ = [],
            wQ = [];
          for (const [qQ, TQ] of Object.entries(QQ.frequencies)) {
            const QQ = Number(qQ);
            for (const [qQ, zQ] of Object.entries(TQ)) {
              const TQ = Number(qQ);
              for (const [qQ, sQ] of Object.entries(zQ)) sQ <= 0 || (XQ.push(QQ - WQ[0], TQ - WQ[1], Number(qQ) - WQ[2]), wQ.push(sQ))
            }
          }
          return {
            positions: Int32Array.from(XQ),
            values: Float64Array.from(wQ),
            count: wQ.length
          }
        }(WQ, hW)), [WQ, hW]),
        EW = dQ * TW.cameraFOV / 100,
        CW = JW.height > 0 ? JW.width / JW.height : 1,
        uW = (0, wQ.useMemo)((() => function(QQ, WQ) {
          return {
            min: [QQ.min[0] - WQ[0], QQ.min[1] - WQ[1], QQ.min[2] - WQ[2]],
            max: [QQ.max[0] - WQ[0] + 1, QQ.max[1] - WQ[1] + 1, QQ.max[2] - WQ[2] + 1]
          }
        }(fQ, hW)), [fQ, hW]),
        LW = XW(uW, CW, EW),
        kW = null !== aW && void 0 !== aW ? aW : LW,
        fW = (0, wQ.useRef)({
          fittedView: LW,
          fieldOfView: EW,
          mouseSensitivity: TW.mouseSensitivity,
          canLock: yW
        });
      fW.current = {
        fittedView: LW,
        fieldOfView: EW,
        mouseSensitivity: TW.mouseSensitivity,
        canLock: yW
      };
      const SW = (0, wQ.useMemo)((() => {
          if (!UW) return null;
          const QQ = (QQ, XQ, wQ) => {
              var qQ, TQ, zQ;
              return null !== (qQ = null === (TQ = WQ.frequencies[QQ + hW[0]]) || void 0 === TQ || null === (zQ = TQ[XQ + hW[1]]) || void 0 === zQ ? void 0 : zQ[wQ + hW[2]]) && void 0 !== qQ ? qQ : 0
            },
            wQ = function(QQ, WQ, XQ, wQ) {
              let qQ = 0,
                TQ = 1 / 0;
              for (const JQ of [0, 1, 2]) {
                if (0 === WQ[JQ]) {
                  if (QQ[JQ] < 0 || QQ[JQ] > XQ[JQ]) return null;
                  continue
                }
                const wQ = (0 - QQ[JQ]) / WQ[JQ],
                  zQ = (XQ[JQ] - QQ[JQ]) / WQ[JQ];
                qQ = Math.max(qQ, Math.min(wQ, zQ)), TQ = Math.min(TQ, Math.max(wQ, zQ))
              }
              if (qQ > TQ) return null;
              const zQ = [0, 1, 2].map((wQ => Math.min(XQ[wQ] - 1, Math.max(0, Math.floor(QQ[wQ] + WQ[wQ] * qQ))))),
                sQ = [0, 1, 2].map((QQ => Math.sign(WQ[QQ]))),
                FQ = [0, 1, 2].map((XQ => {
                  if (0 === sQ[XQ]) return 1 / 0;
                  return ((sQ[XQ] > 0 ? zQ[XQ] + 1 : zQ[XQ]) - QQ[XQ]) / WQ[XQ]
                })),
                PQ = [0, 1, 2].map((QQ => 0 === sQ[QQ] ? 1 / 0 : Math.abs(1 / WQ[QQ])));
              let gQ = null;
              for (;;) {
                const QQ = wQ(zQ[0], zQ[1], zQ[2]);
                if (QQ >= 1) return zQ;
                QQ > 0 && (gQ = [zQ[0], zQ[1], zQ[2]]);
                const WQ = FQ[0] < FQ[1] ? FQ[0] < FQ[2] ? 0 : 2 : FQ[1] < FQ[2] ? 1 : 2;
                if (FQ[WQ] > TQ) return gQ;
                if (zQ[WQ] += sQ[WQ], FQ[WQ] += PQ[WQ], zQ[WQ] < 0 || zQ[WQ] >= XQ[WQ]) return gQ
              }
            }(kW.position, QW(kW), AW, ((WQ, wQ, qQ) => (0, GQ.y)(QQ(WQ, wQ, qQ), XQ, RQ)));
          return null === wQ ? null : {
            x: wQ[0] + hW[0],
            y: wQ[1] + hW[1],
            z: wQ[2] + hW[2],
            value: QQ(wQ[0], wQ[1], wQ[2])
          }
        }), [UW, WQ, hW, kW, AW, XQ, RQ]),
        {
          keyHandlers: tW
        } = (0, UQ.g)({
          isEnabled: UW,
          claimedKeyCodes: cQ,
          qr: QQ => {
            lW((WQ => function(QQ, WQ) {
              const XQ = [Math.sin(QQ.heading), 0, Math.cos(QQ.heading)],
                wQ = zW(zW(sW(XQ, WQ.forward), sW(WW(QQ.heading), WQ.right)), [0, WQ.up, 0]);
              return {
                ...QQ,
                position: zW(QQ.position, wQ)
              }
            }(null !== WQ && void 0 !== WQ ? WQ : fW.current.fittedView, QQ)))
          },
          onZoomChange: vW
        });
      (0, wQ.useEffect)((() => {
        const QQ = PW.current;
        if (!QQ) return;
        let WQ;
        try {
          WQ = function(QQ, WQ) {
            const XQ = new qQ.b(QQ, !0, {
                stencil: !1
              }, !0),
              wQ = new TQ.c(XQ),
              [IQ, jQ, BQ] = GQ.O;
            wQ.clearColor = new PQ.d(IQ / 255, jQ / 255, BQ / 255, 1);
            const yQ = new zQ.c("Heatmap3DCamera", gQ.vj.Zero(), wQ);
            yQ.fov = WQ, yQ.minZ = .05;
            const VQ = new sQ.c("Heatmap3DLight", new gQ.vj(.4, 1, -.6), wQ);
            VQ.diffuse = PQ.Color3.White(), VQ.groundColor = PQ.Color3.Black(), VQ.specular = PQ.Color3.Black();
            const DQ = new FQ.StandardMaterial("Heatmap3DCellMaterial", wQ);
            DQ.diffuseColor = new PQ.Color3(.4, .4, .4), DQ.emissiveColor = new PQ.Color3(.62, .62, .62), DQ.specularColor = PQ.Color3.Black();
            const pQ = (0, JQ.c)("Heatmap3DCells", {
              size: 1
            }, wQ);
            pQ.material = DQ, pQ.RB = !1, pQ.bj = !0, pQ.isVisible = !1;
            const UQ = (0, JQ.c)("Heatmap3DTranslucentCells", {
              size: 1
            }, wQ);
            UQ.material = DQ, UQ.hasVertexAlpha = !0, UQ.RB = !1, UQ.bj = !0, UQ.isVisible = !1;
            const bQ = new FQ.StandardMaterial("Heatmap3DSchematicMaterial", wQ);
            bQ.diffuseColor = new PQ.Color3(.6, .6, .6), bQ.emissiveColor = new PQ.Color3(.4, .4, .4), bQ.specularColor = PQ.Color3.Black();
            const vQ = (0, JQ.c)("Heatmap3DSchematicBlocks", {
              size: 1
            }, wQ);
            vQ.material = bQ, vQ.RB = !1, vQ.bj = !0, vQ.isVisible = !1;
            const dQ = (0, rQ.b)("Heatmap3DTarget", {
              lines: MQ([-.52, -.52, -.52], [.52, .52, .52])
            }, wQ);
            return dQ.color = new PQ.Color3(.06, .14, .23), dQ.renderingGroupId = 1, dQ.RB = !1, dQ.isVisible = !1, {
              engine: XQ,
              cB: wQ,
              camera: yQ,
              cells: pQ,
              translucentCells: UQ,
              translucent: {
                nB: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: vQ,
              targetOutline: dQ,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: WQ,
              needsRender: !0
            }
          }(QQ, fW.current.fieldOfView)
        } catch (XQ) {
          return console.error("Failed to start the 3D heatmap", XQ), void IW(!0)
        }
        return gW.current = WQ, WQ.engine.runRenderLoop((() => {
          const QQ = WQ.camera;
          QQ.fov !== WQ.targetFieldOfView && (QQ.fov += (WQ.targetFieldOfView - QQ.fov) * (QQ.fov > WQ.targetFieldOfView ? .3 : .2), Math.abs(WQ.targetFieldOfView - QQ.fov) < 5e-4 && (QQ.fov = WQ.targetFieldOfView), WQ.needsRender = !0), WQ.needsRender && (WQ.cB.render(), WQ.needsRender = !WQ.cB.isReady() || !WQ.engine.areAllEffectsReady())
        })), () => {
          gW.current = null, WQ.engine.dispose()
        }
      }), []), (0, wQ.useEffect)((() => {
        const QQ = PW.current;
        if (!QQ) return;
        const WQ = () => {
            DW.current = !1, BW(document.pointerLockElement === QQ)
          },
          XQ = () => {
            DW.current && (DW.current = !1, VW(!1))
          },
          wQ = WQ => {
            const XQ = !fW.current.canLock && document.activeElement === QQ && 0 !== (1 & WQ.buttons);
            if (document.pointerLockElement !== QQ && !XQ) return;
            const wQ = fW.current.mouseSensitivity * aQ;
            lW((QQ => function(QQ, WQ, XQ) {
              const wQ = 2 * Math.PI;
              return {
                ...QQ,
                heading: ((QQ.heading + WQ) % wQ + wQ) % wQ,
                pitch: Math.max(-LQ, Math.min(LQ, QQ.pitch + XQ))
              }
            }(null !== QQ && void 0 !== QQ ? QQ : fW.current.fittedView, WQ.movementX * wQ, WQ.movementY * wQ)))
          };
        return document.addEventListener("pointerlockchange", WQ), document.addEventListener("pointerlockerror", XQ), document.addEventListener("pointermove", wQ), () => {
          document.removeEventListener("pointerlockchange", WQ), document.removeEventListener("pointerlockerror", XQ), document.removeEventListener("pointermove", wQ), document.pointerLockElement === QQ && (0, bQ.c)()
        }
      }), []), (0, wQ.useEffect)((() => {
        const QQ = gW.current;
        null !== QQ && 0 !== JW.width && 0 !== JW.height && (QQ.engine.resize(), QQ.needsRender = !0)
      }), [JW.width, JW.height]), (0, wQ.useEffect)((() => {
        const QQ = gW.current;
        null !== QQ && (QQ.targetFieldOfView = EW * (bW ? HQ : 1))
      }), [EW, bW]), (0, wQ.useEffect)((() => {
        const QQ = gW.current;
        null !== QQ && function(QQ, WQ, XQ, wQ) {
          const qQ = [],
            TQ = [],
            zQ = [],
            sQ = [];
          for (let FQ = 0; FQ < WQ.count; FQ++) {
            const QQ = WQ.values[FQ],
              PQ = (0, GQ.y)(QQ, XQ, wQ);
            if (PQ <= 0) continue;
            const [gQ, JQ, rQ] = (0, GQ.p)((0, GQ.I)(QQ, XQ)), IQ = PQ >= 1;
            (IQ ? qQ : zQ).push(WQ.positions[3 * FQ] + .5, WQ.positions[3 * FQ + 1] + .5, WQ.positions[3 * FQ + 2] + .5), (IQ ? TQ : sQ).push(gQ / 255, JQ / 255, rQ / 255, PQ)
          }
          KQ(QQ.cells, Float32Array.from(qQ), Float32Array.from(TQ), TQ.length / 4), QQ.translucent = {
            nB: Float32Array.from(zQ),
            colours: Float32Array.from(sQ),
            count: sQ.length / 4
          }, QQ.translucentSortedFrom = null, mQ(QQ), QQ.needsRender = !0
        }(QQ, RW, XQ, RQ)
      }), [RW, XQ, RQ]), (0, wQ.useEffect)((() => {
        const QQ = gW.current;
        null !== QQ && function(QQ, WQ) {
          QQ.chunkGridOrigin = WQ, QQ.chunkGridCentre = null, OQ(QQ)
        }(QQ, kQ.min)
      }), [kQ]), (0, wQ.useEffect)((() => {
        const QQ = gW.current;
        null !== QQ && function(QQ, WQ, XQ) {
          const wQ = [],
            qQ = [];
          if (null !== WQ) {
            const {
              positions: QQ,
              colours: TQ,
              count: zQ
            } = WQ.surface;
            for (let WQ = 0; WQ < zQ; WQ++) {
              const zQ = [QQ[3 * WQ], QQ[3 * WQ + 1], QQ[3 * WQ + 2]];
              [0, 1, 2].every((QQ => zQ[QQ] >= XQ.min[QQ] - AQ && zQ[QQ] <= XQ.max[QQ] + AQ)) && (wQ.push(zQ[0] - XQ.min[0] + .5, zQ[1] - XQ.min[1] + .5, zQ[2] - XQ.min[2] + .5), qQ.push(TQ[3 * WQ] / 255, TQ[3 * WQ + 1] / 255, TQ[3 * WQ + 2] / 255, 1))
            }
          }
          KQ(QQ.schematicBlocks, Float32Array.from(wQ), Float32Array.from(qQ), qQ.length / 4), QQ.needsRender = !0
        }(QQ, SQ, kQ)
      }), [SQ, kQ]), (0, wQ.useEffect)((() => {
        const QQ = gW.current;
        null !== QQ && null !== QQ.chunkGrid && (QQ.chunkGrid.isVisible = dW, QQ.needsRender = !0)
      }), [dW, kQ]), (0, wQ.useEffect)((() => {
        const QQ = gW.current;
        null !== QQ && function(QQ, WQ, XQ) {
          const {
            camera: wQ
          } = QQ;
          wQ.position.set(WQ.position[0], WQ.position[1], WQ.position[2]), wQ.rotation.set(WQ.pitch, WQ.heading, 0);
          const qQ = (EQ + 1) * jQ.h.Ij * Math.sqrt(3);
          wQ.maxZ = Math.max(qQ, Math.hypot(...zW(WQ.position, sW(qW({
            min: [0, 0, 0],
            max: XQ
          }), -1))) + 2 * Math.hypot(...XQ)), OQ(QQ), mQ(QQ), QQ.needsRender = !0
        }(QQ, kW, AW)
      }), [kW, AW]), (0, wQ.useEffect)((() => {
        const QQ = gW.current;
        null !== QQ && (QQ.targetOutline.isVisible = null !== SW, null !== SW && QQ.targetOutline.position.set(SW.x - hW[0] + .5, SW.y - hW[1] + .5, SW.z - hW[2] + .5), QQ.needsRender = !0)
      }), [SW, hW]);
      return (0, vQ.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: FW,
        children: [(0, vQ.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: PW,
          style: {
            width: `${JW.width}px`,
            height: `${JW.height}px`
          },
          tabIndex: 0,
          "aria-label": NQ("3D heatmap"),
          onClick: () => {
            const QQ = PW.current;
            if (null === QQ) return;
            if (QQ.focus({
                preventScroll: !0
              }), jW || !yW) return;
            const WQ = QQ.requestPointerLock();
            WQ instanceof Promise ? WQ.catch((QQ => {
              QQ instanceof DOMException && ("WrongDocumentError" === QQ.name || "NotSupportedError" === QQ.name) && VW(!1)
            })) : DW.current = !0
          },
          ...tW,
          onKeyDown: QQ => {
            if (UW && lQ.has(QQ.code)) return QQ.preventDefault(), void(() => {
              const QQ = PW.current;
              null !== QQ && document.pointerLockElement === QQ ? (0, bQ.c)() : null === QQ || void 0 === QQ || QQ.blur()
            })();
            const WQ = hQ[QQ.code];
            return UW && void 0 !== WQ ? (QQ.preventDefault(), void oQ(WQ)) : UW && (0, UQ.c)("replayPlayPause", QQ.code) && !(0, UQ.c)("Zoom", QQ.code) ? (QQ.preventDefault(), void(QQ.repeat || nQ())) : UW && QQ.code === iQ ? (QQ.preventDefault(), void eQ()) : UW && QQ.code === uQ ? (QQ.preventDefault(), void lW(null)) : UW && QQ.code === CQ ? (QQ.preventDefault(), void HW((QQ => !QQ))) : void tW.onKeyDown(QQ)
          },
          onFocus: () => {
            GW(!0)
          },
          onBlur: () => {
            GW(!1), tW.onBlur()
          }
        }), rW && (0, vQ.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: NQ("3D view isn't available in this browser.")
        }), UW && (0, vQ.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, vQ.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: kW.position.map(((QQ, WQ) => (QQ + hW[WQ]).toFixed(2))).join(" ")
        }), dW && (0, vQ.jsx)(ZQ, {
          heading: kW.heading,
          pitch: kW.pitch,
          onViewFrom: QQ => {
            const WQ = sW(QQ, -1),
              XQ = 0 === WQ[1] ? {
                heading: Math.atan2(WQ[0], WQ[2]),
                pitch: 0
              } : {
                heading: kW.heading,
                pitch: WQ[1] < 0 ? LQ : -LQ
              };
            lW(XW(uW, CW, EW, XQ))
          },
          onTurn: (QQ, WQ) => {
            lW((XQ => function(QQ, WQ, XQ, wQ) {
              return wW(QQ, WQ, {
                heading: QQ.heading + XQ * xQ,
                pitch: Math.max(-LQ, Math.min(LQ, QQ.pitch + wQ * xQ))
              })
            }(null !== XQ && void 0 !== XQ ? XQ : fW.current.fittedView, qW(uW), QQ, WQ)))
          },
          onFlip: () => {
            lW((QQ => function(QQ, WQ) {
              return wW(QQ, WQ, {
                heading: QQ.heading + Math.PI,
                pitch: -QQ.pitch
              })
            }(null !== QQ && void 0 !== QQ ? QQ : fW.current.fittedView, qW(uW))))
          }
        }), null !== SW && (0, vQ.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === YQ ? NQ("studio:heatmapBlockReadout", {
            x: SW.x,
            y: SW.y,
            z: SW.z,
            count: (0, IQ.O)(SW.value)
          }) : YQ(SW.x, SW.y, SW.z, SW.value)
        }), (0, vQ.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [tQ, (0, vQ.jsx)(DQ.T, {
            active: null === aW,
            onClick: () => {
              lW(null)
            },
            children: (0, vQ.jsx)(pQ.d, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function ZQ(QQ) {
      let {
        heading: WQ,
        pitch: XQ,
        onViewFrom: qQ,
        onTurn: TQ,
        onFlip: zQ
      } = QQ;
      const {
        t: sQ
      } = (0, BQ.C)(), FQ = (0, wQ.useRef)(null), PQ = QW({
        heading: WQ,
        pitch: XQ
      }), gQ = WW(WQ), JQ = PW(PQ, gQ), rQ = oQ + eQ + 2, IQ = tQ.flatMap((QQ => [1, -1].map((WQ => {
        const XQ = sW(QQ.direction, WQ);
        return {
          ...QQ,
          sign: WQ,
          direction: XQ,
          endX: rQ + FW(XQ, gQ) * oQ,
          endY: rQ - FW(XQ, JQ) * oQ,
          depth: FW(XQ, PQ)
        }
      })))).sort(((QQ, WQ) => WQ.depth - QQ.depth));
      return (0, vQ.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * rQ,
        height: 2 * rQ,
        "aria-hidden": !0,
        onPointerDown: QQ => {
          var WQ, XQ;
          QQ.currentTarget.setPointerCapture(QQ.pointerId);
          const wQ = QQ.target,
            qQ = wQ.getAttribute("data-end");
          FQ.current = {
            pointerId: QQ.pointerId,
            x: QQ.clientX,
            y: QQ.clientY,
            travel: 0,
            side: null === qQ ? null : null !== (WQ = null === (XQ = IQ[Number(qQ)]) || void 0 === XQ ? void 0 : XQ.direction) && void 0 !== WQ ? WQ : null,
            isOnMiddle: wQ.hasAttribute("data-middle")
          }
        },
        onPointerMove: QQ => {
          const WQ = FQ.current;
          if (null === WQ || WQ.pointerId !== QQ.pointerId) return;
          const XQ = QQ.clientX - WQ.x,
            wQ = QQ.clientY - WQ.y;
          WQ.x = QQ.clientX, WQ.y = QQ.clientY, WQ.travel += Math.abs(XQ) + Math.abs(wQ), WQ.travel >= YQ && TQ(XQ, wQ)
        },
        onPointerUp: QQ => {
          const WQ = FQ.current;
          FQ.current = null, null === WQ || WQ.pointerId !== QQ.pointerId || WQ.travel >= YQ || (null !== WQ.side ? qQ(WQ.side) : WQ.isOnMiddle && zQ())
        },
        onPointerCancel: () => {
          FQ.current = null
        },
        children: [IQ.map(((QQ, WQ) => {
          const XQ = QQ.sign > 0;
          return (0, vQ.jsxs)("g", {
            children: [(0, vQ.jsx)("line", {
              x1: rQ,
              y1: rQ,
              x2: QQ.endX,
              y2: QQ.endY,
              stroke: QQ.colour,
              strokeOpacity: XQ ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, vQ.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": WQ,
              cx: QQ.endX,
              cy: QQ.endY,
              r: XQ ? eQ : eQ - 1,
              fill: QQ.colour,
              fillOpacity: XQ ? 1 : .3,
              stroke: QQ.colour,
              strokeWidth: XQ ? 0 : 1.5,
              children: (0, vQ.jsx)("title", {
                children: `${sQ("View from")} ${XQ?"+":"\u2212"}${QQ.name}`
              })
            }), XQ && (0, vQ.jsx)("text", {
              pointerEvents: "none",
              x: QQ.endX,
              y: QQ.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: QQ.name
            })]
          }, `${XQ?"+":"-"}${QQ.name}`)
        })), (0, vQ.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: rQ,
          cy: rQ,
          r: nQ,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, vQ.jsx)("title", {
            children: sQ("View from the opposite side")
          })
        })]
      })
    }

    function OQ(QQ) {
      var WQ, XQ, wQ;
      const {
        chunkGridOrigin: qQ,
        camera: TQ
      } = QQ;
      if (null === qQ) return;
      const zQ = [TQ.position.x, TQ.position.y, TQ.position.z],
        sQ = [0, 2].map((QQ => Math.floor((zQ[QQ] + qQ[QQ]) / jQ.h.Ij))),
        FQ = QQ.chunkGridCentre;
      if (null !== FQ && FQ.every(((QQ, WQ) => QQ === sQ[WQ]))) return;
      const JQ = null === (WQ = null === (XQ = QQ.chunkGrid) || void 0 === XQ ? void 0 : XQ.isVisible) || void 0 === WQ || WQ;
      null === (wQ = QQ.chunkGrid) || void 0 === wQ || wQ.dispose();
      const [IQ, BQ] = [0, 2].map(((QQ, WQ) => {
        const XQ = [];
        for (let wQ = sQ[WQ] - EQ; wQ <= sQ[WQ] + EQ + 1; wQ++) XQ.push(wQ * jQ.h.Ij - qQ[QQ]);
        return XQ
      })), yQ = -qQ[1], VQ = [];
      for (const PQ of BQ) VQ.push([new gQ.vj(IQ[0], yQ, PQ), new gQ.vj(IQ[IQ.length - 1], yQ, PQ)]);
      for (const PQ of IQ) VQ.push([new gQ.vj(PQ, yQ, BQ[0]), new gQ.vj(PQ, yQ, BQ[BQ.length - 1])]);
      const DQ = (0, rQ.b)("Heatmap3DChunkGrid", {
        lines: VQ
      }, QQ.cB);
      DQ.color = new PQ.Color3(.45, .6, .78), DQ.RB = !1, DQ.isVisible = JQ, QQ.chunkGrid = DQ, QQ.chunkGridCentre = sQ, QQ.needsRender = !0
    }

    function KQ(QQ, WQ, XQ, wQ) {
      QQ.Y5("matrix", function(QQ, WQ) {
        const XQ = new Float32Array(16 * WQ);
        for (let wQ = 0; wQ < WQ; wQ++) {
          const WQ = 16 * wQ;
          XQ[WQ] = 1, XQ[WQ + 5] = 1, XQ[WQ + 10] = 1, XQ[WQ + 12] = QQ[3 * wQ], XQ[WQ + 13] = QQ[3 * wQ + 1], XQ[WQ + 14] = QQ[3 * wQ + 2], XQ[WQ + 15] = 1
        }
        return XQ
      }(WQ, wQ), 16, !0), QQ.Y5("color", XQ, 4, !0), QQ.isVisible = wQ > 0
    }

    function mQ(QQ) {
      const {
        camera: WQ,
        translucent: XQ
      } = QQ, wQ = [WQ.position.x, WQ.position.y, WQ.position.z], qQ = QQ.translucentSortedFrom;
      if (null !== qQ && Math.hypot(wQ[0] - qQ[0], wQ[1] - qQ[1], wQ[2] - qQ[2]) < RQ) return;
      QQ.translucentSortedFrom = wQ;
      const TQ = new Float64Array(XQ.count),
        zQ = new Uint32Array(XQ.count);
      for (let PQ = 0; PQ < XQ.count; PQ++) {
        const QQ = XQ.nB[3 * PQ] - wQ[0],
          WQ = XQ.nB[3 * PQ + 1] - wQ[1],
          qQ = XQ.nB[3 * PQ + 2] - wQ[2];
        TQ[PQ] = QQ * QQ + WQ * WQ + qQ * qQ, zQ[PQ] = PQ
      }
      zQ.sort(((QQ, WQ) => TQ[WQ] - TQ[QQ]));
      const sQ = new Float32Array(3 * XQ.count),
        FQ = new Float32Array(4 * XQ.count);
      zQ.forEach(((QQ, WQ) => {
        sQ.set(XQ.nB.subarray(3 * QQ, 3 * QQ + 3), 3 * WQ), FQ.set(XQ.colours.subarray(4 * QQ, 4 * QQ + 4), 4 * WQ)
      })), KQ(QQ.translucentCells, sQ, FQ, XQ.count), QQ.needsRender = !0
    }

    function MQ(QQ, WQ) {
      const XQ = (XQ, wQ, qQ) => new gQ.vj(0 === XQ ? QQ[0] : WQ[0], 0 === wQ ? QQ[1] : WQ[1], 0 === qQ ? QQ[2] : WQ[2]),
        wQ = [];
      for (const qQ of [0, 1])
        for (const QQ of [0, 1]) wQ.push([XQ(0, qQ, QQ), XQ(1, qQ, QQ)], [XQ(qQ, 0, QQ), XQ(qQ, 1, QQ)], [XQ(qQ, QQ, 0), XQ(qQ, QQ, 1)]);
      return wQ
    }

    function QW(QQ) {
      return [Math.sin(QQ.heading) * Math.cos(QQ.pitch), -Math.sin(QQ.pitch), Math.cos(QQ.heading) * Math.cos(QQ.pitch)]
    }

    function WW(QQ) {
      return [Math.cos(QQ), 0, -Math.sin(QQ)]
    }

    function XW(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: kQ,
        pitch: fQ
      };
      const qQ = [QQ.max[0] - QQ.min[0], QQ.max[1] - QQ.min[1], QQ.max[2] - QQ.min[2]],
        TQ = QW(wQ),
        zQ = WW(wQ.heading),
        sQ = PW(TQ, zQ),
        FQ = Math.tan(XQ / 2),
        PQ = FQ * WQ;
      let gQ = 1;
      for (const JQ of [-qQ[0] / 2, qQ[0] / 2])
        for (const QQ of [-qQ[1] / 2, qQ[1] / 2])
          for (const WQ of [-qQ[2] / 2, qQ[2] / 2]) {
            const XQ = [JQ, QQ, WQ],
              wQ = FW(XQ, TQ);
            gQ = Math.max(gQ, Math.abs(FW(XQ, zQ)) / PQ - wQ, Math.abs(FW(XQ, sQ)) / FQ - wQ)
          }
      return {
        position: zW([QQ.min[0] + qQ[0] / 2, QQ.min[1] + qQ[1] / 2, QQ.min[2] + qQ[2] / 2], sW(TQ, -gQ * SQ)),
        heading: wQ.heading,
        pitch: wQ.pitch
      }
    }

    function wW(QQ, WQ, XQ) {
      const wQ = TW(QQ),
        qQ = TW(XQ),
        TQ = zW(QQ.position, sW(WQ, -1)),
        zQ = [0, 1, 2].reduce(((QQ, WQ) => zW(QQ, sW(qQ[WQ], FW(TQ, wQ[WQ])))), [0, 0, 0]);
      return {
        position: zW(WQ, zQ),
        heading: XQ.heading,
        pitch: XQ.pitch
      }
    }

    function qW(QQ) {
      return sW(zW(QQ.min, QQ.max), .5)
    }

    function TW(QQ) {
      const WQ = QW(QQ),
        XQ = WW(QQ.heading);
      return [WQ, XQ, PW(WQ, XQ)]
    }

    function zW(QQ, WQ) {
      return [QQ[0] + WQ[0], QQ[1] + WQ[1], QQ[2] + WQ[2]]
    }

    function sW(QQ, WQ) {
      return [QQ[0] * WQ, QQ[1] * WQ, QQ[2] * WQ]
    }

    function FW(QQ, WQ) {
      return QQ[0] * WQ[0] + QQ[1] * WQ[1] + QQ[2] * WQ[2]
    }

    function PW(QQ, WQ) {
      return [QQ[1] * WQ[2] - QQ[2] * WQ[1], QQ[2] * WQ[0] - QQ[0] * WQ[2], QQ[0] * WQ[1] - QQ[1] * WQ[0]]
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);