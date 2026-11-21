export const id = 242;
export const ids = [242];
export const modules = {
  39203: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => gQ
    });
    wQ(6300);
    var LQ = wQ(53),
      qQ = wQ(39211),
      oQ = wQ(39491),
      DQ = wQ(39625),
      kQ = wQ(39678),
      vQ = wQ(39692),
      mQ = wQ(36870),
      uQ = wQ(36688),
      HQ = wQ(39822),
      bQ = wQ(39872),
      YQ = (wQ(39906), wQ(1237)),
      xQ = wQ(201),
      AQ = wQ(1207),
      tQ = wQ(17),
      eQ = wQ(2657),
      MQ = wQ(1451),
      GQ = wQ(1079),
      pQ = wQ(6294),
      cQ = wQ(6307),
      CQ = wQ(4292),
      SQ = wQ(1107);
    const iQ = 1.2,
      WQ = .2,
      RQ = .0066 * Math.PI / 180,
      OQ = new Set(["Escape", "KeyG"]),
      sQ = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      rQ = "ArrowUp",
      IQ = new Set([...Object.keys(sQ), rQ, "ArrowDown"]),
      UQ = 32,
      NQ = 1,
      TQ = 10,
      KQ = "F4",
      zQ = "Period",
      lQ = Math.PI / 2 - .001,
      jQ = Math.PI / 6,
      aQ = Math.PI / 6,
      XQ = 1.08,
      fQ = [{
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
      VQ = 24,
      hQ = 7,
      JQ = 4,
      EQ = .01,
      nQ = 4;

    function gQ(QQ) {
      let {
        heatmap: FQ,
        scale: wQ,
        fullyOpaqueFrom: NQ,
        bounds: jQ,
        fitBounds: aQ,
        schematic: XQ,
        controls: fQ,
        onStepTime: VQ,
        onShowAllTime: hQ,
        onTogglePlaying: JQ,
        getReadout: nQ = null
      } = QQ;
      const {
        t: gQ
      } = (0, AQ.y)(), {
        clientEscMenuOptions: oF
      } = (0, tQ.l)(["clientEscMenuOptions"]), vF = (0, LQ.useRef)(null), mF = (0, LQ.useRef)(null), uF = (0, LQ.useRef)(null), HF = (0, eQ.c)(vF), [bF, YF] = (0, LQ.useState)(!1), [xF, AF] = (0, LQ.useState)(!1), [tF, eF] = (0, LQ.useState)(!0), MF = (0, LQ.useRef)(!1), [GF, pF] = (0, LQ.useState)(!1), cF = xF || !tF && GF, [CF, SF] = (0, LQ.useState)(!1), [iF, WF] = (0, LQ.useState)(!0), [RF, OF] = (0, LQ.useState)(null), sF = jQ.min, [rF, IF] = (0, LQ.useState)(sF);
      rF[0] === sF[0] && rF[1] === sF[1] && rF[2] === sF[2] || (IF(sF), null !== RF && OF({
        ...RF,
        position: DF(RF.position, DF(rF, kF(sF, -1)))
      }));
      const UF = (0, LQ.useMemo)((() => function(QQ) {
          return [QQ.max[0] - QQ.min[0] + 1, QQ.max[1] - QQ.min[1] + 1, QQ.max[2] - QQ.min[2] + 1]
        }(jQ)), [jQ]),
        NF = (0, LQ.useMemo)((() => function(QQ, FQ) {
          const wQ = [],
            LQ = [];
          for (const [qQ, oQ] of Object.entries(QQ.frequencies)) {
            const QQ = Number(qQ);
            for (const [qQ, DQ] of Object.entries(oQ)) {
              const oQ = Number(qQ);
              for (const [qQ, kQ] of Object.entries(DQ)) kQ <= 0 || (wQ.push(QQ - FQ[0], oQ - FQ[1], Number(qQ) - FQ[2]), LQ.push(kQ))
            }
          }
          return {
            positions: Int32Array.from(wQ),
            values: Float64Array.from(LQ),
            count: LQ.length
          }
        }(FQ, sF)), [FQ, sF]),
        TF = iQ * oF.cameraFOV / 100,
        KF = HF.height > 0 ? HF.width / HF.height : 1,
        zF = (0, LQ.useMemo)((() => function(QQ, FQ) {
          return {
            min: [QQ.min[0] - FQ[0], QQ.min[1] - FQ[1], QQ.min[2] - FQ[2]],
            max: [QQ.max[0] - FQ[0] + 1, QQ.max[1] - FQ[1] + 1, QQ.max[2] - FQ[2] + 1]
          }
        }(aQ, sF)), [aQ, sF]),
        lF = wF(zF, KF, TF),
        jF = null !== RF && void 0 !== RF ? RF : lF,
        aF = (0, LQ.useRef)({
          fittedView: lF,
          fieldOfView: TF,
          mouseSensitivity: oF.mouseSensitivity,
          canLock: tF
        });
      aF.current = {
        fittedView: lF,
        fieldOfView: TF,
        mouseSensitivity: oF.mouseSensitivity,
        canLock: tF
      };
      const XF = (0, LQ.useMemo)((() => {
          if (!cF) return null;
          const QQ = (QQ, wQ, LQ) => {
              var qQ, oQ, DQ;
              return null !== (qQ = null === (oQ = FQ.frequencies[QQ + sF[0]]) || void 0 === oQ || null === (DQ = oQ[wQ + sF[1]]) || void 0 === DQ ? void 0 : DQ[LQ + sF[2]]) && void 0 !== qQ ? qQ : 0
            },
            LQ = function(QQ, FQ, wQ, LQ) {
              let qQ = 0,
                oQ = 1 / 0;
              for (const HQ of [0, 1, 2]) {
                if (0 === FQ[HQ]) {
                  if (QQ[HQ] < 0 || QQ[HQ] > wQ[HQ]) return null;
                  continue
                }
                const LQ = (0 - QQ[HQ]) / FQ[HQ],
                  DQ = (wQ[HQ] - QQ[HQ]) / FQ[HQ];
                qQ = Math.max(qQ, Math.min(LQ, DQ)), oQ = Math.min(oQ, Math.max(LQ, DQ))
              }
              if (qQ > oQ) return null;
              const DQ = [0, 1, 2].map((LQ => Math.min(wQ[LQ] - 1, Math.max(0, Math.floor(QQ[LQ] + FQ[LQ] * qQ))))),
                kQ = [0, 1, 2].map((QQ => Math.sign(FQ[QQ]))),
                vQ = [0, 1, 2].map((wQ => {
                  if (0 === kQ[wQ]) return 1 / 0;
                  return ((kQ[wQ] > 0 ? DQ[wQ] + 1 : DQ[wQ]) - QQ[wQ]) / FQ[wQ]
                })),
                mQ = [0, 1, 2].map((QQ => 0 === kQ[QQ] ? 1 / 0 : Math.abs(1 / FQ[QQ])));
              let uQ = null;
              for (;;) {
                const QQ = LQ(DQ[0], DQ[1], DQ[2]);
                if (QQ >= 1) return DQ;
                QQ > 0 && (uQ = [DQ[0], DQ[1], DQ[2]]);
                const FQ = vQ[0] < vQ[1] ? vQ[0] < vQ[2] ? 0 : 2 : vQ[1] < vQ[2] ? 1 : 2;
                if (vQ[FQ] > oQ) return uQ;
                if (DQ[FQ] += kQ[FQ], vQ[FQ] += mQ[FQ], DQ[FQ] < 0 || DQ[FQ] >= wQ[FQ]) return uQ
              }
            }(jF.position, QF(jF), UF, ((FQ, LQ, qQ) => (0, pQ.x)(QQ(FQ, LQ, qQ), wQ, NQ)));
          return null === LQ ? null : {
            x: LQ[0] + sF[0],
            y: LQ[1] + sF[1],
            z: LQ[2] + sF[2],
            value: QQ(LQ[0], LQ[1], LQ[2])
          }
        }), [cF, FQ, sF, jF, UF, wQ, NQ]),
        {
          keyHandlers: fF
        } = (0, cQ.g)({
          isEnabled: cF,
          claimedKeyCodes: IQ,
          kb: QQ => {
            OF((FQ => function(QQ, FQ) {
              const wQ = [Math.sin(QQ.heading), 0, Math.cos(QQ.heading)],
                LQ = DF(DF(kF(wQ, FQ.forward), kF(FF(QQ.heading), FQ.right)), [0, FQ.up, 0]);
              return {
                ...QQ,
                position: DF(QQ.position, LQ)
              }
            }(null !== FQ && void 0 !== FQ ? FQ : aF.current.fittedView, QQ)))
          },
          onZoomChange: SF
        });
      (0, LQ.useEffect)((() => {
        const QQ = mF.current;
        if (!QQ) return;
        let FQ;
        try {
          FQ = function(QQ, FQ) {
            const wQ = new qQ.b(QQ, !0, {
                stencil: !1
              }, !0),
              LQ = new oQ.d(wQ),
              [YQ, xQ, AQ] = pQ.S;
            LQ.clearColor = new mQ.b(YQ / 255, xQ / 255, AQ / 255, 1);
            const tQ = new DQ.b("Heatmap3DCamera", uQ.Ox.Zero(), LQ);
            tQ.fov = FQ, tQ.minZ = .05;
            const eQ = new kQ.b("Heatmap3DLight", new uQ.Ox(.4, 1, -.6), LQ);
            eQ.diffuse = mQ.Color3.White(), eQ.groundColor = mQ.Color3.Black(), eQ.specular = mQ.Color3.Black();
            const MQ = new vQ.StandardMaterial("Heatmap3DCellMaterial", LQ);
            MQ.diffuseColor = new mQ.Color3(.4, .4, .4), MQ.emissiveColor = new mQ.Color3(.62, .62, .62), MQ.specularColor = mQ.Color3.Black();
            const GQ = (0, HQ.c)("Heatmap3DCells", {
              size: 1
            }, LQ);
            GQ.material = MQ, GQ.aA = !1, GQ.Rx = !0, GQ.isVisible = !1;
            const cQ = (0, HQ.c)("Heatmap3DTranslucentCells", {
              size: 1
            }, LQ);
            cQ.material = MQ, cQ.hasVertexAlpha = !0, cQ.aA = !1, cQ.Rx = !0, cQ.isVisible = !1;
            const CQ = new vQ.StandardMaterial("Heatmap3DSchematicMaterial", LQ);
            CQ.diffuseColor = new mQ.Color3(.6, .6, .6), CQ.emissiveColor = new mQ.Color3(.4, .4, .4), CQ.specularColor = mQ.Color3.Black();
            const SQ = (0, HQ.c)("Heatmap3DSchematicBlocks", {
              size: 1
            }, LQ);
            SQ.material = CQ, SQ.aA = !1, SQ.Rx = !0, SQ.isVisible = !1;
            const iQ = (0, bQ.e)("Heatmap3DTarget", {
              lines: dQ([-.52, -.52, -.52], [.52, .52, .52])
            }, LQ);
            return iQ.color = new mQ.Color3(.06, .14, .23), iQ.renderingGroupId = 1, iQ.aA = !1, iQ.isVisible = !1, {
              engine: wQ,
              lA: LQ,
              camera: tQ,
              cells: GQ,
              translucentCells: cQ,
              translucent: {
                dv: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: SQ,
              targetOutline: iQ,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: FQ,
              needsRender: !0
            }
          }(QQ, aF.current.fieldOfView)
        } catch (wQ) {
          return console.error("Failed to start the 3D heatmap", wQ), void YF(!0)
        }
        return uF.current = FQ, FQ.engine.runRenderLoop((() => {
          const QQ = FQ.camera;
          QQ.fov !== FQ.targetFieldOfView && (QQ.fov += (FQ.targetFieldOfView - QQ.fov) * (QQ.fov > FQ.targetFieldOfView ? .3 : .2), Math.abs(FQ.targetFieldOfView - QQ.fov) < 5e-4 && (QQ.fov = FQ.targetFieldOfView), FQ.needsRender = !0), FQ.needsRender && (FQ.lA.render(), FQ.needsRender = !FQ.lA.isReady() || !FQ.engine.areAllEffectsReady())
        })), () => {
          uF.current = null, FQ.engine.dispose()
        }
      }), []), (0, LQ.useEffect)((() => {
        const QQ = mF.current;
        if (!QQ) return;
        const FQ = () => {
            MF.current = !1, AF(document.pointerLockElement === QQ)
          },
          wQ = () => {
            MF.current && (MF.current = !1, eF(!1))
          },
          LQ = FQ => {
            const wQ = !aF.current.canLock && document.activeElement === QQ && 0 !== (1 & FQ.buttons);
            if (document.pointerLockElement !== QQ && !wQ) return;
            const LQ = aF.current.mouseSensitivity * RQ;
            OF((QQ => function(QQ, FQ, wQ) {
              const LQ = 2 * Math.PI;
              return {
                ...QQ,
                heading: ((QQ.heading + FQ) % LQ + LQ) % LQ,
                pitch: Math.max(-lQ, Math.min(lQ, QQ.pitch + wQ))
              }
            }(null !== QQ && void 0 !== QQ ? QQ : aF.current.fittedView, FQ.movementX * LQ, FQ.movementY * LQ)))
          };
        return document.addEventListener("pointerlockchange", FQ), document.addEventListener("pointerlockerror", wQ), document.addEventListener("pointermove", LQ), () => {
          document.removeEventListener("pointerlockchange", FQ), document.removeEventListener("pointerlockerror", wQ), document.removeEventListener("pointermove", LQ), document.pointerLockElement === QQ && (0, CQ.d)()
        }
      }), []), (0, LQ.useEffect)((() => {
        const QQ = uF.current;
        null !== QQ && 0 !== HF.width && 0 !== HF.height && (QQ.engine.resize(), QQ.needsRender = !0)
      }), [HF.width, HF.height]), (0, LQ.useEffect)((() => {
        const QQ = uF.current;
        null !== QQ && (QQ.targetFieldOfView = TF * (CF ? WQ : 1))
      }), [TF, CF]), (0, LQ.useEffect)((() => {
        const QQ = uF.current;
        null !== QQ && function(QQ, FQ, wQ, LQ) {
          const qQ = [],
            oQ = [],
            DQ = [],
            kQ = [];
          for (let vQ = 0; vQ < FQ.count; vQ++) {
            const QQ = FQ.values[vQ],
              mQ = (0, pQ.x)(QQ, wQ, LQ);
            if (mQ <= 0) continue;
            const [uQ, HQ, bQ] = (0, pQ.r)((0, pQ.I)(QQ, wQ)), YQ = mQ >= 1;
            (YQ ? qQ : DQ).push(FQ.positions[3 * vQ] + .5, FQ.positions[3 * vQ + 1] + .5, FQ.positions[3 * vQ + 2] + .5), (YQ ? oQ : kQ).push(uQ / 255, HQ / 255, bQ / 255, mQ)
          }
          yQ(QQ.cells, Float32Array.from(qQ), Float32Array.from(oQ), oQ.length / 4), QQ.translucent = {
            dv: Float32Array.from(DQ),
            colours: Float32Array.from(kQ),
            count: kQ.length / 4
          }, QQ.translucentSortedFrom = null, BQ(QQ), QQ.needsRender = !0
        }(QQ, NF, wQ, NQ)
      }), [NF, wQ, NQ]), (0, LQ.useEffect)((() => {
        const QQ = uF.current;
        null !== QQ && function(QQ, FQ) {
          QQ.chunkGridOrigin = FQ, QQ.chunkGridCentre = null, ZQ(QQ)
        }(QQ, jQ.min)
      }), [jQ]), (0, LQ.useEffect)((() => {
        const QQ = uF.current;
        null !== QQ && function(QQ, FQ, wQ) {
          const LQ = [],
            qQ = [];
          if (null !== FQ) {
            const {
              positions: QQ,
              colours: oQ,
              count: DQ
            } = FQ.surface;
            for (let FQ = 0; FQ < DQ; FQ++) {
              const DQ = [QQ[3 * FQ], QQ[3 * FQ + 1], QQ[3 * FQ + 2]];
              [0, 1, 2].every((QQ => DQ[QQ] >= wQ.min[QQ] - UQ && DQ[QQ] <= wQ.max[QQ] + UQ)) && (LQ.push(DQ[0] - wQ.min[0] + .5, DQ[1] - wQ.min[1] + .5, DQ[2] - wQ.min[2] + .5), qQ.push(oQ[3 * FQ] / 255, oQ[3 * FQ + 1] / 255, oQ[3 * FQ + 2] / 255, 1))
            }
          }
          yQ(QQ.schematicBlocks, Float32Array.from(LQ), Float32Array.from(qQ), qQ.length / 4), QQ.needsRender = !0
        }(QQ, XQ, jQ)
      }), [XQ, jQ]), (0, LQ.useEffect)((() => {
        const QQ = uF.current;
        null !== QQ && null !== QQ.chunkGrid && (QQ.chunkGrid.isVisible = iF, QQ.needsRender = !0)
      }), [iF, jQ]), (0, LQ.useEffect)((() => {
        const QQ = uF.current;
        null !== QQ && function(QQ, FQ, wQ) {
          const {
            camera: LQ
          } = QQ;
          LQ.position.set(FQ.position[0], FQ.position[1], FQ.position[2]), LQ.rotation.set(FQ.pitch, FQ.heading, 0);
          const qQ = (TQ + 1) * xQ.e.tx * Math.sqrt(3);
          LQ.maxZ = Math.max(qQ, Math.hypot(...DF(FQ.position, kF(qF({
            min: [0, 0, 0],
            max: wQ
          }), -1))) + 2 * Math.hypot(...wQ)), ZQ(QQ), BQ(QQ), QQ.needsRender = !0
        }(QQ, jF, UF)
      }), [jF, UF]), (0, LQ.useEffect)((() => {
        const QQ = uF.current;
        null !== QQ && (QQ.targetOutline.isVisible = null !== XF, null !== XF && QQ.targetOutline.position.set(XF.x - sF[0] + .5, XF.y - sF[1] + .5, XF.z - sF[2] + .5), QQ.needsRender = !0)
      }), [XF, sF]);
      return (0, SQ.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: vF,
        children: [(0, SQ.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: mF,
          style: {
            width: `${HF.width}px`,
            height: `${HF.height}px`
          },
          tabIndex: 0,
          "aria-label": gQ("3D heatmap"),
          onClick: () => {
            const QQ = mF.current;
            if (null === QQ) return;
            if (QQ.focus({
                preventScroll: !0
              }), xF || !tF) return;
            const FQ = QQ.requestPointerLock();
            FQ instanceof Promise ? FQ.catch((QQ => {
              QQ instanceof DOMException && ("WrongDocumentError" === QQ.name || "NotSupportedError" === QQ.name) && eF(!1)
            })) : MF.current = !0
          },
          ...fF,
          onKeyDown: QQ => {
            if (cF && OQ.has(QQ.code)) return QQ.preventDefault(), void(() => {
              const QQ = mF.current;
              null !== QQ && document.pointerLockElement === QQ ? (0, CQ.d)() : null === QQ || void 0 === QQ || QQ.blur()
            })();
            const FQ = sQ[QQ.code];
            return cF && void 0 !== FQ ? (QQ.preventDefault(), void VQ(FQ)) : cF && (0, cQ.d)("replayPlayPause", QQ.code) && !(0, cQ.d)("Zoom", QQ.code) ? (QQ.preventDefault(), void(QQ.repeat || JQ())) : cF && QQ.code === rQ ? (QQ.preventDefault(), void hQ()) : cF && QQ.code === zQ ? (QQ.preventDefault(), void OF(null)) : cF && QQ.code === KQ ? (QQ.preventDefault(), void WF((QQ => !QQ))) : void fF.onKeyDown(QQ)
          },
          onFocus: () => {
            pF(!0)
          },
          onBlur: () => {
            pF(!1), fF.onBlur()
          }
        }), bF && (0, SQ.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: gQ("3D view isn't available in this browser.")
        }), cF && (0, SQ.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, SQ.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: jF.position.map(((QQ, FQ) => (QQ + sF[FQ]).toFixed(2))).join(" ")
        }), iF && (0, SQ.jsx)(PQ, {
          heading: jF.heading,
          pitch: jF.pitch,
          onViewFrom: QQ => {
            const FQ = kF(QQ, -1),
              wQ = 0 === FQ[1] ? {
                heading: Math.atan2(FQ[0], FQ[2]),
                pitch: 0
              } : {
                heading: jF.heading,
                pitch: FQ[1] < 0 ? lQ : -lQ
              };
            OF(wF(zF, KF, TF, wQ))
          },
          onTurn: (QQ, FQ) => {
            OF((wQ => function(QQ, FQ, wQ, LQ) {
              return LF(QQ, FQ, {
                heading: QQ.heading + wQ * EQ,
                pitch: Math.max(-lQ, Math.min(lQ, QQ.pitch + LQ * EQ))
              })
            }(null !== wQ && void 0 !== wQ ? wQ : aF.current.fittedView, qF(zF), QQ, FQ)))
          },
          onFlip: () => {
            OF((QQ => function(QQ, FQ) {
              return LF(QQ, FQ, {
                heading: QQ.heading + Math.PI,
                pitch: -QQ.pitch
              })
            }(null !== QQ && void 0 !== QQ ? QQ : aF.current.fittedView, qF(zF))))
          }
        }), null !== XF && (0, SQ.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === nQ ? gQ("studio:heatmapBlockReadout", {
            x: XF.x,
            y: XF.y,
            z: XF.z,
            count: (0, YQ.W)(XF.value)
          }) : nQ(XF.x, XF.y, XF.z, XF.value)
        }), (0, SQ.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [fQ, (0, SQ.jsx)(MQ.L, {
            active: null === RF,
            onClick: () => {
              OF(null)
            },
            children: (0, SQ.jsx)(GQ.c, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function PQ(QQ) {
      let {
        heading: FQ,
        pitch: wQ,
        onViewFrom: qQ,
        onTurn: oQ,
        onFlip: DQ
      } = QQ;
      const {
        t: kQ
      } = (0, AQ.y)(), vQ = (0, LQ.useRef)(null), mQ = QF({
        heading: FQ,
        pitch: wQ
      }), uQ = FF(FQ), HQ = mF(mQ, uQ), bQ = VQ + hQ + 2, YQ = fQ.flatMap((QQ => [1, -1].map((FQ => {
        const wQ = kF(QQ.direction, FQ);
        return {
          ...QQ,
          sign: FQ,
          direction: wQ,
          endX: bQ + vF(wQ, uQ) * VQ,
          endY: bQ - vF(wQ, HQ) * VQ,
          depth: vF(wQ, mQ)
        }
      })))).sort(((QQ, FQ) => FQ.depth - QQ.depth));
      return (0, SQ.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * bQ,
        height: 2 * bQ,
        "aria-hidden": !0,
        onPointerDown: QQ => {
          var FQ, wQ;
          QQ.currentTarget.setPointerCapture(QQ.pointerId);
          const LQ = QQ.target,
            qQ = LQ.getAttribute("data-end");
          vQ.current = {
            pointerId: QQ.pointerId,
            x: QQ.clientX,
            y: QQ.clientY,
            travel: 0,
            side: null === qQ ? null : null !== (FQ = null === (wQ = YQ[Number(qQ)]) || void 0 === wQ ? void 0 : wQ.direction) && void 0 !== FQ ? FQ : null,
            isOnMiddle: LQ.hasAttribute("data-middle")
          }
        },
        onPointerMove: QQ => {
          const FQ = vQ.current;
          if (null === FQ || FQ.pointerId !== QQ.pointerId) return;
          const wQ = QQ.clientX - FQ.x,
            LQ = QQ.clientY - FQ.y;
          FQ.x = QQ.clientX, FQ.y = QQ.clientY, FQ.travel += Math.abs(wQ) + Math.abs(LQ), FQ.travel >= nQ && oQ(wQ, LQ)
        },
        onPointerUp: QQ => {
          const FQ = vQ.current;
          vQ.current = null, null === FQ || FQ.pointerId !== QQ.pointerId || FQ.travel >= nQ || (null !== FQ.side ? qQ(FQ.side) : FQ.isOnMiddle && DQ())
        },
        onPointerCancel: () => {
          vQ.current = null
        },
        children: [YQ.map(((QQ, FQ) => {
          const wQ = QQ.sign > 0;
          return (0, SQ.jsxs)("g", {
            children: [(0, SQ.jsx)("line", {
              x1: bQ,
              y1: bQ,
              x2: QQ.endX,
              y2: QQ.endY,
              stroke: QQ.colour,
              strokeOpacity: wQ ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, SQ.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": FQ,
              cx: QQ.endX,
              cy: QQ.endY,
              r: wQ ? hQ : hQ - 1,
              fill: QQ.colour,
              fillOpacity: wQ ? 1 : .3,
              stroke: QQ.colour,
              strokeWidth: wQ ? 0 : 1.5,
              children: (0, SQ.jsx)("title", {
                children: `${kQ("View from")} ${wQ?"+":"\u2212"}${QQ.name}`
              })
            }), wQ && (0, SQ.jsx)("text", {
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
          }, `${wQ?"+":"-"}${QQ.name}`)
        })), (0, SQ.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: bQ,
          cy: bQ,
          r: JQ,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, SQ.jsx)("title", {
            children: kQ("View from the opposite side")
          })
        })]
      })
    }

    function ZQ(QQ) {
      var FQ, wQ, LQ;
      const {
        chunkGridOrigin: qQ,
        camera: oQ
      } = QQ;
      if (null === qQ) return;
      const DQ = [oQ.position.x, oQ.position.y, oQ.position.z],
        kQ = [0, 2].map((QQ => Math.floor((DQ[QQ] + qQ[QQ]) / xQ.e.tx))),
        vQ = QQ.chunkGridCentre;
      if (null !== vQ && vQ.every(((QQ, FQ) => QQ === kQ[FQ]))) return;
      const HQ = null === (FQ = null === (wQ = QQ.chunkGrid) || void 0 === wQ ? void 0 : wQ.isVisible) || void 0 === FQ || FQ;
      null === (LQ = QQ.chunkGrid) || void 0 === LQ || LQ.dispose();
      const [YQ, AQ] = [0, 2].map(((QQ, FQ) => {
        const wQ = [];
        for (let LQ = kQ[FQ] - TQ; LQ <= kQ[FQ] + TQ + 1; LQ++) wQ.push(LQ * xQ.e.tx - qQ[QQ]);
        return wQ
      })), tQ = -qQ[1], eQ = [];
      for (const mQ of AQ) eQ.push([new uQ.Ox(YQ[0], tQ, mQ), new uQ.Ox(YQ[YQ.length - 1], tQ, mQ)]);
      for (const mQ of YQ) eQ.push([new uQ.Ox(mQ, tQ, AQ[0]), new uQ.Ox(mQ, tQ, AQ[AQ.length - 1])]);
      const MQ = (0, bQ.e)("Heatmap3DChunkGrid", {
        lines: eQ
      }, QQ.lA);
      MQ.color = new mQ.Color3(.45, .6, .78), MQ.aA = !1, MQ.isVisible = HQ, QQ.chunkGrid = MQ, QQ.chunkGridCentre = kQ, QQ.needsRender = !0
    }

    function yQ(QQ, FQ, wQ, LQ) {
      QQ.FQQ("matrix", function(QQ, FQ) {
        const wQ = new Float32Array(16 * FQ);
        for (let LQ = 0; LQ < FQ; LQ++) {
          const FQ = 16 * LQ;
          wQ[FQ] = 1, wQ[FQ + 5] = 1, wQ[FQ + 10] = 1, wQ[FQ + 12] = QQ[3 * LQ], wQ[FQ + 13] = QQ[3 * LQ + 1], wQ[FQ + 14] = QQ[3 * LQ + 2], wQ[FQ + 15] = 1
        }
        return wQ
      }(FQ, LQ), 16, !0), QQ.FQQ("color", wQ, 4, !0), QQ.isVisible = LQ > 0
    }

    function BQ(QQ) {
      const {
        camera: FQ,
        translucent: wQ
      } = QQ, LQ = [FQ.position.x, FQ.position.y, FQ.position.z], qQ = QQ.translucentSortedFrom;
      if (null !== qQ && Math.hypot(LQ[0] - qQ[0], LQ[1] - qQ[1], LQ[2] - qQ[2]) < NQ) return;
      QQ.translucentSortedFrom = LQ;
      const oQ = new Float64Array(wQ.count),
        DQ = new Uint32Array(wQ.count);
      for (let mQ = 0; mQ < wQ.count; mQ++) {
        const QQ = wQ.dv[3 * mQ] - LQ[0],
          FQ = wQ.dv[3 * mQ + 1] - LQ[1],
          qQ = wQ.dv[3 * mQ + 2] - LQ[2];
        oQ[mQ] = QQ * QQ + FQ * FQ + qQ * qQ, DQ[mQ] = mQ
      }
      DQ.sort(((QQ, FQ) => oQ[FQ] - oQ[QQ]));
      const kQ = new Float32Array(3 * wQ.count),
        vQ = new Float32Array(4 * wQ.count);
      DQ.forEach(((QQ, FQ) => {
        kQ.set(wQ.dv.subarray(3 * QQ, 3 * QQ + 3), 3 * FQ), vQ.set(wQ.colours.subarray(4 * QQ, 4 * QQ + 4), 4 * FQ)
      })), yQ(QQ.translucentCells, kQ, vQ, wQ.count), QQ.needsRender = !0
    }

    function dQ(QQ, FQ) {
      const wQ = (wQ, LQ, qQ) => new uQ.Ox(0 === wQ ? QQ[0] : FQ[0], 0 === LQ ? QQ[1] : FQ[1], 0 === qQ ? QQ[2] : FQ[2]),
        LQ = [];
      for (const qQ of [0, 1])
        for (const QQ of [0, 1]) LQ.push([wQ(0, qQ, QQ), wQ(1, qQ, QQ)], [wQ(qQ, 0, QQ), wQ(qQ, 1, QQ)], [wQ(qQ, QQ, 0), wQ(qQ, QQ, 1)]);
      return LQ
    }

    function QF(QQ) {
      return [Math.sin(QQ.heading) * Math.cos(QQ.pitch), -Math.sin(QQ.pitch), Math.cos(QQ.heading) * Math.cos(QQ.pitch)]
    }

    function FF(QQ) {
      return [Math.cos(QQ), 0, -Math.sin(QQ)]
    }

    function wF(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: jQ,
        pitch: aQ
      };
      const qQ = [QQ.max[0] - QQ.min[0], QQ.max[1] - QQ.min[1], QQ.max[2] - QQ.min[2]],
        oQ = QF(LQ),
        DQ = FF(LQ.heading),
        kQ = mF(oQ, DQ),
        vQ = Math.tan(wQ / 2),
        mQ = vQ * FQ;
      let uQ = 1;
      for (const HQ of [-qQ[0] / 2, qQ[0] / 2])
        for (const QQ of [-qQ[1] / 2, qQ[1] / 2])
          for (const FQ of [-qQ[2] / 2, qQ[2] / 2]) {
            const wQ = [HQ, QQ, FQ],
              LQ = vF(wQ, oQ);
            uQ = Math.max(uQ, Math.abs(vF(wQ, DQ)) / mQ - LQ, Math.abs(vF(wQ, kQ)) / vQ - LQ)
          }
      return {
        position: DF([QQ.min[0] + qQ[0] / 2, QQ.min[1] + qQ[1] / 2, QQ.min[2] + qQ[2] / 2], kF(oQ, -uQ * XQ)),
        heading: LQ.heading,
        pitch: LQ.pitch
      }
    }

    function LF(QQ, FQ, wQ) {
      const LQ = oF(QQ),
        qQ = oF(wQ),
        oQ = DF(QQ.position, kF(FQ, -1)),
        DQ = [0, 1, 2].reduce(((QQ, FQ) => DF(QQ, kF(qQ[FQ], vF(oQ, LQ[FQ])))), [0, 0, 0]);
      return {
        position: DF(FQ, DQ),
        heading: wQ.heading,
        pitch: wQ.pitch
      }
    }

    function qF(QQ) {
      return kF(DF(QQ.min, QQ.max), .5)
    }

    function oF(QQ) {
      const FQ = QF(QQ),
        wQ = FF(QQ.heading);
      return [FQ, wQ, mF(FQ, wQ)]
    }

    function DF(QQ, FQ) {
      return [QQ[0] + FQ[0], QQ[1] + FQ[1], QQ[2] + FQ[2]]
    }

    function kF(QQ, FQ) {
      return [QQ[0] * FQ, QQ[1] * FQ, QQ[2] * FQ]
    }

    function vF(QQ, FQ) {
      return QQ[0] * FQ[0] + QQ[1] * FQ[1] + QQ[2] * FQ[2]
    }

    function mF(QQ, FQ) {
      return [QQ[1] * FQ[2] - QQ[2] * FQ[1], QQ[2] * FQ[0] - QQ[0] * FQ[2], QQ[0] * FQ[1] - QQ[1] * FQ[0]]
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);