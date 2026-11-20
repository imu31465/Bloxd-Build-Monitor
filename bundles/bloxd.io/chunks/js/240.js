export const id = 240;
export const ids = [240];
export const modules = {
  39193: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => MU
    });
    gU(6140);
    var tU = gU(56),
      pU = gU(39196),
      EU = gU(39460),
      PU = gU(39590),
      TU = gU(39636),
      qU = gU(39648),
      KU = gU(36754),
      cU = gU(36593),
      GU = gU(39780),
      jU = gU(39833),
      uU = (gU(39864), gU(1217)),
      CU = gU(189),
      hU = gU(1181),
      QU = gU(21),
      eU = gU(2533),
      WU = gU(1412),
      fU = gU(1049),
      xU = gU(6136),
      mU = gU(6144),
      IU = gU(4105),
      JU = gU(1090);
    const wU = 1.2,
      nU = .2,
      bU = .0066 * Math.PI / 180,
      oU = new Set(["Escape", "KeyG"]),
      ZU = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      aU = "ArrowUp",
      YU = new Set([...Object.keys(ZU), aU, "ArrowDown"]),
      BU = 32,
      VU = 1,
      rU = 10,
      XU = "F4",
      vU = "Period",
      dU = Math.PI / 2 - .001,
      HU = Math.PI / 6,
      SU = Math.PI / 6,
      sU = 1.08,
      yU = [{
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
      kU = 24,
      FU = 7,
      iU = 4,
      AU = .01,
      zU = 4;

    function MU(UU) {
      let {
        heatmap: RU,
        scale: gU,
        fullyOpaqueFrom: VU,
        bounds: HU,
        fitBounds: SU,
        schematic: sU,
        controls: yU,
        onStepTime: kU,
        onShowAllTime: FU,
        onTogglePlaying: iU,
        getReadout: zU = null
      } = UU;
      const {
        t: MU
      } = (0, hU.B)(), {
        clientEscMenuOptions: ER
      } = (0, QU.l)(["clientEscMenuOptions"]), qR = (0, tU.useRef)(null), KR = (0, tU.useRef)(null), cR = (0, tU.useRef)(null), GR = (0, eU.d)(qR), [jR, uR] = (0, tU.useState)(!1), [CR, hR] = (0, tU.useState)(!1), [QR, eR] = (0, tU.useState)(!0), WR = (0, tU.useRef)(!1), [fR, xR] = (0, tU.useState)(!1), mR = CR || !QR && fR, [IR, JR] = (0, tU.useState)(!1), [wR, nR] = (0, tU.useState)(!0), [bR, oR] = (0, tU.useState)(null), ZR = HU.min, [aR, YR] = (0, tU.useState)(ZR);
      aR[0] === ZR[0] && aR[1] === ZR[1] && aR[2] === ZR[2] || (YR(ZR), null !== bR && oR({
        ...bR,
        position: PR(bR.position, PR(aR, TR(ZR, -1)))
      }));
      const BR = (0, tU.useMemo)((() => function(UU) {
          return [UU.max[0] - UU.min[0] + 1, UU.max[1] - UU.min[1] + 1, UU.max[2] - UU.min[2] + 1]
        }(HU)), [HU]),
        VR = (0, tU.useMemo)((() => function(UU, RU) {
          const gU = [],
            tU = [];
          for (const [pU, EU] of Object.entries(UU.frequencies)) {
            const UU = Number(pU);
            for (const [pU, PU] of Object.entries(EU)) {
              const EU = Number(pU);
              for (const [pU, TU] of Object.entries(PU)) TU <= 0 || (gU.push(UU - RU[0], EU - RU[1], Number(pU) - RU[2]), tU.push(TU))
            }
          }
          return {
            positions: Int32Array.from(gU),
            values: Float64Array.from(tU),
            count: tU.length
          }
        }(RU, ZR)), [RU, ZR]),
        rR = wU * ER.cameraFOV / 100,
        XR = GR.height > 0 ? GR.width / GR.height : 1,
        vR = (0, tU.useMemo)((() => function(UU, RU) {
          return {
            min: [UU.min[0] - RU[0], UU.min[1] - RU[1], UU.min[2] - RU[2]],
            max: [UU.max[0] - RU[0] + 1, UU.max[1] - RU[1] + 1, UU.max[2] - RU[2] + 1]
          }
        }(SU, ZR)), [SU, ZR]),
        dR = gR(vR, XR, rR),
        HR = null !== bR && void 0 !== bR ? bR : dR,
        SR = (0, tU.useRef)({
          fittedView: dR,
          fieldOfView: rR,
          mouseSensitivity: ER.mouseSensitivity,
          canLock: QR
        });
      SR.current = {
        fittedView: dR,
        fieldOfView: rR,
        mouseSensitivity: ER.mouseSensitivity,
        canLock: QR
      };
      const sR = (0, tU.useMemo)((() => {
          if (!mR) return null;
          const UU = (UU, gU, tU) => {
              var pU, EU, PU;
              return null !== (pU = null === (EU = RU.frequencies[UU + ZR[0]]) || void 0 === EU || null === (PU = EU[gU + ZR[1]]) || void 0 === PU ? void 0 : PU[tU + ZR[2]]) && void 0 !== pU ? pU : 0
            },
            tU = function(UU, RU, gU, tU) {
              let pU = 0,
                EU = 1 / 0;
              for (const GU of [0, 1, 2]) {
                if (0 === RU[GU]) {
                  if (UU[GU] < 0 || UU[GU] > gU[GU]) return null;
                  continue
                }
                const tU = (0 - UU[GU]) / RU[GU],
                  PU = (gU[GU] - UU[GU]) / RU[GU];
                pU = Math.max(pU, Math.min(tU, PU)), EU = Math.min(EU, Math.max(tU, PU))
              }
              if (pU > EU) return null;
              const PU = [0, 1, 2].map((tU => Math.min(gU[tU] - 1, Math.max(0, Math.floor(UU[tU] + RU[tU] * pU))))),
                TU = [0, 1, 2].map((UU => Math.sign(RU[UU]))),
                qU = [0, 1, 2].map((gU => {
                  if (0 === TU[gU]) return 1 / 0;
                  return ((TU[gU] > 0 ? PU[gU] + 1 : PU[gU]) - UU[gU]) / RU[gU]
                })),
                KU = [0, 1, 2].map((UU => 0 === TU[UU] ? 1 / 0 : Math.abs(1 / RU[UU])));
              let cU = null;
              for (;;) {
                const UU = tU(PU[0], PU[1], PU[2]);
                if (UU >= 1) return PU;
                UU > 0 && (cU = [PU[0], PU[1], PU[2]]);
                const RU = qU[0] < qU[1] ? qU[0] < qU[2] ? 0 : 2 : qU[1] < qU[2] ? 1 : 2;
                if (qU[RU] > EU) return cU;
                if (PU[RU] += TU[RU], qU[RU] += KU[RU], PU[RU] < 0 || PU[RU] >= gU[RU]) return cU
              }
            }(HR.position, UR(HR), BR, ((RU, tU, pU) => (0, xU.r)(UU(RU, tU, pU), gU, VU)));
          return null === tU ? null : {
            x: tU[0] + ZR[0],
            y: tU[1] + ZR[1],
            z: tU[2] + ZR[2],
            value: UU(tU[0], tU[1], tU[2])
          }
        }), [mR, RU, ZR, HR, BR, gU, VU]),
        {
          keyHandlers: yR
        } = (0, mU.g)({
          isEnabled: mR,
          claimedKeyCodes: YU,
          tj: UU => {
            oR((RU => function(UU, RU) {
              const gU = [Math.sin(UU.heading), 0, Math.cos(UU.heading)],
                tU = PR(PR(TR(gU, RU.forward), TR(RR(UU.heading), RU.right)), [0, RU.up, 0]);
              return {
                ...UU,
                position: PR(UU.position, tU)
              }
            }(null !== RU && void 0 !== RU ? RU : SR.current.fittedView, UU)))
          },
          onZoomChange: JR
        });
      (0, tU.useEffect)((() => {
        const UU = KR.current;
        if (!UU) return;
        let RU;
        try {
          RU = function(UU, RU) {
            const gU = new pU.d(UU, !0, {
                stencil: !1
              }, !0),
              tU = new EU.b(gU),
              [uU, CU, hU] = xU.E;
            tU.clearColor = new KU.c(uU / 255, CU / 255, hU / 255, 1);
            const QU = new PU.d("Heatmap3DCamera", cU.xC.Zero(), tU);
            QU.fov = RU, QU.minZ = .05;
            const eU = new TU.e("Heatmap3DLight", new cU.xC(.4, 1, -.6), tU);
            eU.diffuse = KU.Color3.White(), eU.groundColor = KU.Color3.Black(), eU.specular = KU.Color3.Black();
            const WU = new qU.StandardMaterial("Heatmap3DCellMaterial", tU);
            WU.diffuseColor = new KU.Color3(.4, .4, .4), WU.emissiveColor = new KU.Color3(.62, .62, .62), WU.specularColor = KU.Color3.Black();
            const fU = (0, GU.b)("Heatmap3DCells", {
              size: 1
            }, tU);
            fU.material = WU, fU.Yh = !1, fU.fC = !0, fU.isVisible = !1;
            const mU = (0, GU.b)("Heatmap3DTranslucentCells", {
              size: 1
            }, tU);
            mU.material = WU, mU.hasVertexAlpha = !0, mU.Yh = !1, mU.fC = !0, mU.isVisible = !1;
            const IU = new qU.StandardMaterial("Heatmap3DSchematicMaterial", tU);
            IU.diffuseColor = new KU.Color3(.6, .6, .6), IU.emissiveColor = new KU.Color3(.4, .4, .4), IU.specularColor = KU.Color3.Black();
            const JU = (0, GU.b)("Heatmap3DSchematicBlocks", {
              size: 1
            }, tU);
            JU.material = IU, JU.Yh = !1, JU.fC = !0, JU.isVisible = !1;
            const wU = (0, jU.c)("Heatmap3DTarget", {
              lines: OU([-.52, -.52, -.52], [.52, .52, .52])
            }, tU);
            return wU.color = new KU.Color3(.06, .14, .23), wU.renderingGroupId = 1, wU.Yh = !1, wU.isVisible = !1, {
              engine: gU,
              Zh: tU,
              camera: QU,
              cells: fU,
              translucentCells: mU,
              translucent: {
                gq: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: JU,
              targetOutline: wU,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: RU,
              needsRender: !0
            }
          }(UU, SR.current.fieldOfView)
        } catch (gU) {
          return console.error("Failed to start the 3D heatmap", gU), void uR(!0)
        }
        return cR.current = RU, RU.engine.runRenderLoop((() => {
          const UU = RU.camera;
          UU.fov !== RU.targetFieldOfView && (UU.fov += (RU.targetFieldOfView - UU.fov) * (UU.fov > RU.targetFieldOfView ? .3 : .2), Math.abs(RU.targetFieldOfView - UU.fov) < 5e-4 && (UU.fov = RU.targetFieldOfView), RU.needsRender = !0), RU.needsRender && (RU.Zh.render(), RU.needsRender = !RU.Zh.isReady() || !RU.engine.areAllEffectsReady())
        })), () => {
          cR.current = null, RU.engine.dispose()
        }
      }), []), (0, tU.useEffect)((() => {
        const UU = KR.current;
        if (!UU) return;
        const RU = () => {
            WR.current = !1, hR(document.pointerLockElement === UU)
          },
          gU = () => {
            WR.current && (WR.current = !1, eR(!1))
          },
          tU = RU => {
            const gU = !SR.current.canLock && document.activeElement === UU && 0 !== (1 & RU.buttons);
            if (document.pointerLockElement !== UU && !gU) return;
            const tU = SR.current.mouseSensitivity * bU;
            oR((UU => function(UU, RU, gU) {
              const tU = 2 * Math.PI;
              return {
                ...UU,
                heading: ((UU.heading + RU) % tU + tU) % tU,
                pitch: Math.max(-dU, Math.min(dU, UU.pitch + gU))
              }
            }(null !== UU && void 0 !== UU ? UU : SR.current.fittedView, RU.movementX * tU, RU.movementY * tU)))
          };
        return document.addEventListener("pointerlockchange", RU), document.addEventListener("pointerlockerror", gU), document.addEventListener("pointermove", tU), () => {
          document.removeEventListener("pointerlockchange", RU), document.removeEventListener("pointerlockerror", gU), document.removeEventListener("pointermove", tU), document.pointerLockElement === UU && (0, IU.d)()
        }
      }), []), (0, tU.useEffect)((() => {
        const UU = cR.current;
        null !== UU && 0 !== GR.width && 0 !== GR.height && (UU.engine.resize(), UU.needsRender = !0)
      }), [GR.width, GR.height]), (0, tU.useEffect)((() => {
        const UU = cR.current;
        null !== UU && (UU.targetFieldOfView = rR * (IR ? nU : 1))
      }), [rR, IR]), (0, tU.useEffect)((() => {
        const UU = cR.current;
        null !== UU && function(UU, RU, gU, tU) {
          const pU = [],
            EU = [],
            PU = [],
            TU = [];
          for (let qU = 0; qU < RU.count; qU++) {
            const UU = RU.values[qU],
              KU = (0, xU.r)(UU, gU, tU);
            if (KU <= 0) continue;
            const [cU, GU, jU] = (0, xU.l)((0, xU.z)(UU, gU)), uU = KU >= 1;
            (uU ? pU : PU).push(RU.positions[3 * qU] + .5, RU.positions[3 * qU + 1] + .5, RU.positions[3 * qU + 2] + .5), (uU ? EU : TU).push(cU / 255, GU / 255, jU / 255, KU)
          }
          NU(UU.cells, Float32Array.from(pU), Float32Array.from(EU), EU.length / 4), UU.translucent = {
            gq: Float32Array.from(PU),
            colours: Float32Array.from(TU),
            count: TU.length / 4
          }, UU.translucentSortedFrom = null, lU(UU), UU.needsRender = !0
        }(UU, VR, gU, VU)
      }), [VR, gU, VU]), (0, tU.useEffect)((() => {
        const UU = cR.current;
        null !== UU && function(UU, RU) {
          UU.chunkGridOrigin = RU, UU.chunkGridCentre = null, LU(UU)
        }(UU, HU.min)
      }), [HU]), (0, tU.useEffect)((() => {
        const UU = cR.current;
        null !== UU && function(UU, RU, gU) {
          const tU = [],
            pU = [];
          if (null !== RU) {
            const {
              positions: UU,
              colours: EU,
              count: PU
            } = RU.surface;
            for (let RU = 0; RU < PU; RU++) {
              const PU = [UU[3 * RU], UU[3 * RU + 1], UU[3 * RU + 2]];
              [0, 1, 2].every((UU => PU[UU] >= gU.min[UU] - BU && PU[UU] <= gU.max[UU] + BU)) && (tU.push(PU[0] - gU.min[0] + .5, PU[1] - gU.min[1] + .5, PU[2] - gU.min[2] + .5), pU.push(EU[3 * RU] / 255, EU[3 * RU + 1] / 255, EU[3 * RU + 2] / 255, 1))
            }
          }
          NU(UU.schematicBlocks, Float32Array.from(tU), Float32Array.from(pU), pU.length / 4), UU.needsRender = !0
        }(UU, sU, HU)
      }), [sU, HU]), (0, tU.useEffect)((() => {
        const UU = cR.current;
        null !== UU && null !== UU.chunkGrid && (UU.chunkGrid.isVisible = wR, UU.needsRender = !0)
      }), [wR, HU]), (0, tU.useEffect)((() => {
        const UU = cR.current;
        null !== UU && function(UU, RU, gU) {
          const {
            camera: tU
          } = UU;
          tU.position.set(RU.position[0], RU.position[1], RU.position[2]), tU.rotation.set(RU.pitch, RU.heading, 0);
          const pU = (rU + 1) * CU.e.jC * Math.sqrt(3);
          tU.maxZ = Math.max(pU, Math.hypot(...PR(RU.position, TR(pR({
            min: [0, 0, 0],
            max: gU
          }), -1))) + 2 * Math.hypot(...gU)), LU(UU), lU(UU), UU.needsRender = !0
        }(UU, HR, BR)
      }), [HR, BR]), (0, tU.useEffect)((() => {
        const UU = cR.current;
        null !== UU && (UU.targetOutline.isVisible = null !== sR, null !== sR && UU.targetOutline.position.set(sR.x - ZR[0] + .5, sR.y - ZR[1] + .5, sR.z - ZR[2] + .5), UU.needsRender = !0)
      }), [sR, ZR]);
      return (0, JU.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: qR,
        children: [(0, JU.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: KR,
          style: {
            width: `${GR.width}px`,
            height: `${GR.height}px`
          },
          tabIndex: 0,
          "aria-label": MU("3D heatmap"),
          onClick: () => {
            const UU = KR.current;
            if (null === UU) return;
            if (UU.focus({
                preventScroll: !0
              }), CR || !QR) return;
            const RU = UU.requestPointerLock();
            RU instanceof Promise ? RU.catch((UU => {
              UU instanceof DOMException && ("WrongDocumentError" === UU.name || "NotSupportedError" === UU.name) && eR(!1)
            })) : WR.current = !0
          },
          ...yR,
          onKeyDown: UU => {
            if (mR && oU.has(UU.code)) return UU.preventDefault(), void(() => {
              const UU = KR.current;
              null !== UU && document.pointerLockElement === UU ? (0, IU.d)() : null === UU || void 0 === UU || UU.blur()
            })();
            const RU = ZU[UU.code];
            return mR && void 0 !== RU ? (UU.preventDefault(), void kU(RU)) : mR && (0, mU.c)("replayPlayPause", UU.code) && !(0, mU.c)("Zoom", UU.code) ? (UU.preventDefault(), void(UU.repeat || iU())) : mR && UU.code === aU ? (UU.preventDefault(), void FU()) : mR && UU.code === vU ? (UU.preventDefault(), void oR(null)) : mR && UU.code === XU ? (UU.preventDefault(), void nR((UU => !UU))) : void yR.onKeyDown(UU)
          },
          onFocus: () => {
            xR(!0)
          },
          onBlur: () => {
            xR(!1), yR.onBlur()
          }
        }), jR && (0, JU.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: MU("3D view isn't available in this browser.")
        }), mR && (0, JU.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, JU.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: HR.position.map(((UU, RU) => (UU + ZR[RU]).toFixed(2))).join(" ")
        }), wR && (0, JU.jsx)(DU, {
          heading: HR.heading,
          pitch: HR.pitch,
          onViewFrom: UU => {
            const RU = TR(UU, -1),
              gU = 0 === RU[1] ? {
                heading: Math.atan2(RU[0], RU[2]),
                pitch: 0
              } : {
                heading: HR.heading,
                pitch: RU[1] < 0 ? dU : -dU
              };
            oR(gR(vR, XR, rR, gU))
          },
          onTurn: (UU, RU) => {
            oR((gU => function(UU, RU, gU, tU) {
              return tR(UU, RU, {
                heading: UU.heading + gU * AU,
                pitch: Math.max(-dU, Math.min(dU, UU.pitch + tU * AU))
              })
            }(null !== gU && void 0 !== gU ? gU : SR.current.fittedView, pR(vR), UU, RU)))
          },
          onFlip: () => {
            oR((UU => function(UU, RU) {
              return tR(UU, RU, {
                heading: UU.heading + Math.PI,
                pitch: -UU.pitch
              })
            }(null !== UU && void 0 !== UU ? UU : SR.current.fittedView, pR(vR))))
          }
        }), null !== sR && (0, JU.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === zU ? MU("studio:heatmapBlockReadout", {
            x: sR.x,
            y: sR.y,
            z: sR.z,
            count: (0, uU.R)(sR.value)
          }) : zU(sR.x, sR.y, sR.z, sR.value)
        }), (0, JU.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [yU, (0, JU.jsx)(WU.M, {
            active: null === bR,
            onClick: () => {
              oR(null)
            },
            children: (0, JU.jsx)(fU.c, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function DU(UU) {
      let {
        heading: RU,
        pitch: gU,
        onViewFrom: pU,
        onTurn: EU,
        onFlip: PU
      } = UU;
      const {
        t: TU
      } = (0, hU.B)(), qU = (0, tU.useRef)(null), KU = UR({
        heading: RU,
        pitch: gU
      }), cU = RR(RU), GU = KR(KU, cU), jU = kU + FU + 2, uU = yU.flatMap((UU => [1, -1].map((RU => {
        const gU = TR(UU.direction, RU);
        return {
          ...UU,
          sign: RU,
          direction: gU,
          endX: jU + qR(gU, cU) * kU,
          endY: jU - qR(gU, GU) * kU,
          depth: qR(gU, KU)
        }
      })))).sort(((UU, RU) => RU.depth - UU.depth));
      return (0, JU.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * jU,
        height: 2 * jU,
        "aria-hidden": !0,
        onPointerDown: UU => {
          var RU, gU;
          UU.currentTarget.setPointerCapture(UU.pointerId);
          const tU = UU.target,
            pU = tU.getAttribute("data-end");
          qU.current = {
            pointerId: UU.pointerId,
            x: UU.clientX,
            y: UU.clientY,
            travel: 0,
            side: null === pU ? null : null !== (RU = null === (gU = uU[Number(pU)]) || void 0 === gU ? void 0 : gU.direction) && void 0 !== RU ? RU : null,
            isOnMiddle: tU.hasAttribute("data-middle")
          }
        },
        onPointerMove: UU => {
          const RU = qU.current;
          if (null === RU || RU.pointerId !== UU.pointerId) return;
          const gU = UU.clientX - RU.x,
            tU = UU.clientY - RU.y;
          RU.x = UU.clientX, RU.y = UU.clientY, RU.travel += Math.abs(gU) + Math.abs(tU), RU.travel >= zU && EU(gU, tU)
        },
        onPointerUp: UU => {
          const RU = qU.current;
          qU.current = null, null === RU || RU.pointerId !== UU.pointerId || RU.travel >= zU || (null !== RU.side ? pU(RU.side) : RU.isOnMiddle && PU())
        },
        onPointerCancel: () => {
          qU.current = null
        },
        children: [uU.map(((UU, RU) => {
          const gU = UU.sign > 0;
          return (0, JU.jsxs)("g", {
            children: [(0, JU.jsx)("line", {
              x1: jU,
              y1: jU,
              x2: UU.endX,
              y2: UU.endY,
              stroke: UU.colour,
              strokeOpacity: gU ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, JU.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": RU,
              cx: UU.endX,
              cy: UU.endY,
              r: gU ? FU : FU - 1,
              fill: UU.colour,
              fillOpacity: gU ? 1 : .3,
              stroke: UU.colour,
              strokeWidth: gU ? 0 : 1.5,
              children: (0, JU.jsx)("title", {
                children: `${TU("View from")} ${gU?"+":"\u2212"}${UU.name}`
              })
            }), gU && (0, JU.jsx)("text", {
              pointerEvents: "none",
              x: UU.endX,
              y: UU.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: UU.name
            })]
          }, `${gU?"+":"-"}${UU.name}`)
        })), (0, JU.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: jU,
          cy: jU,
          r: iU,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, JU.jsx)("title", {
            children: TU("View from the opposite side")
          })
        })]
      })
    }

    function LU(UU) {
      var RU, gU, tU;
      const {
        chunkGridOrigin: pU,
        camera: EU
      } = UU;
      if (null === pU) return;
      const PU = [EU.position.x, EU.position.y, EU.position.z],
        TU = [0, 2].map((UU => Math.floor((PU[UU] + pU[UU]) / CU.e.jC))),
        qU = UU.chunkGridCentre;
      if (null !== qU && qU.every(((UU, RU) => UU === TU[RU]))) return;
      const GU = null === (RU = null === (gU = UU.chunkGrid) || void 0 === gU ? void 0 : gU.isVisible) || void 0 === RU || RU;
      null === (tU = UU.chunkGrid) || void 0 === tU || tU.dispose();
      const [uU, hU] = [0, 2].map(((UU, RU) => {
        const gU = [];
        for (let tU = TU[RU] - rU; tU <= TU[RU] + rU + 1; tU++) gU.push(tU * CU.e.jC - pU[UU]);
        return gU
      })), QU = -pU[1], eU = [];
      for (const KU of hU) eU.push([new cU.xC(uU[0], QU, KU), new cU.xC(uU[uU.length - 1], QU, KU)]);
      for (const KU of uU) eU.push([new cU.xC(KU, QU, hU[0]), new cU.xC(KU, QU, hU[hU.length - 1])]);
      const WU = (0, jU.c)("Heatmap3DChunkGrid", {
        lines: eU
      }, UU.Zh);
      WU.color = new KU.Color3(.45, .6, .78), WU.Yh = !1, WU.isVisible = GU, UU.chunkGrid = WU, UU.chunkGridCentre = TU, UU.needsRender = !0
    }

    function NU(UU, RU, gU, tU) {
      UU.e_("matrix", function(UU, RU) {
        const gU = new Float32Array(16 * RU);
        for (let tU = 0; tU < RU; tU++) {
          const RU = 16 * tU;
          gU[RU] = 1, gU[RU + 5] = 1, gU[RU + 10] = 1, gU[RU + 12] = UU[3 * tU], gU[RU + 13] = UU[3 * tU + 1], gU[RU + 14] = UU[3 * tU + 2], gU[RU + 15] = 1
        }
        return gU
      }(RU, tU), 16, !0), UU.e_("color", gU, 4, !0), UU.isVisible = tU > 0
    }

    function lU(UU) {
      const {
        camera: RU,
        translucent: gU
      } = UU, tU = [RU.position.x, RU.position.y, RU.position.z], pU = UU.translucentSortedFrom;
      if (null !== pU && Math.hypot(tU[0] - pU[0], tU[1] - pU[1], tU[2] - pU[2]) < VU) return;
      UU.translucentSortedFrom = tU;
      const EU = new Float64Array(gU.count),
        PU = new Uint32Array(gU.count);
      for (let KU = 0; KU < gU.count; KU++) {
        const UU = gU.gq[3 * KU] - tU[0],
          RU = gU.gq[3 * KU + 1] - tU[1],
          pU = gU.gq[3 * KU + 2] - tU[2];
        EU[KU] = UU * UU + RU * RU + pU * pU, PU[KU] = KU
      }
      PU.sort(((UU, RU) => EU[RU] - EU[UU]));
      const TU = new Float32Array(3 * gU.count),
        qU = new Float32Array(4 * gU.count);
      PU.forEach(((UU, RU) => {
        TU.set(gU.gq.subarray(3 * UU, 3 * UU + 3), 3 * RU), qU.set(gU.colours.subarray(4 * UU, 4 * UU + 4), 4 * RU)
      })), NU(UU.translucentCells, TU, qU, gU.count), UU.needsRender = !0
    }

    function OU(UU, RU) {
      const gU = (gU, tU, pU) => new cU.xC(0 === gU ? UU[0] : RU[0], 0 === tU ? UU[1] : RU[1], 0 === pU ? UU[2] : RU[2]),
        tU = [];
      for (const pU of [0, 1])
        for (const UU of [0, 1]) tU.push([gU(0, pU, UU), gU(1, pU, UU)], [gU(pU, 0, UU), gU(pU, 1, UU)], [gU(pU, UU, 0), gU(pU, UU, 1)]);
      return tU
    }

    function UR(UU) {
      return [Math.sin(UU.heading) * Math.cos(UU.pitch), -Math.sin(UU.pitch), Math.cos(UU.heading) * Math.cos(UU.pitch)]
    }

    function RR(UU) {
      return [Math.cos(UU), 0, -Math.sin(UU)]
    }

    function gR(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: HU,
        pitch: SU
      };
      const pU = [UU.max[0] - UU.min[0], UU.max[1] - UU.min[1], UU.max[2] - UU.min[2]],
        EU = UR(tU),
        PU = RR(tU.heading),
        TU = KR(EU, PU),
        qU = Math.tan(gU / 2),
        KU = qU * RU;
      let cU = 1;
      for (const GU of [-pU[0] / 2, pU[0] / 2])
        for (const UU of [-pU[1] / 2, pU[1] / 2])
          for (const RU of [-pU[2] / 2, pU[2] / 2]) {
            const gU = [GU, UU, RU],
              tU = qR(gU, EU);
            cU = Math.max(cU, Math.abs(qR(gU, PU)) / KU - tU, Math.abs(qR(gU, TU)) / qU - tU)
          }
      return {
        position: PR([UU.min[0] + pU[0] / 2, UU.min[1] + pU[1] / 2, UU.min[2] + pU[2] / 2], TR(EU, -cU * sU)),
        heading: tU.heading,
        pitch: tU.pitch
      }
    }

    function tR(UU, RU, gU) {
      const tU = ER(UU),
        pU = ER(gU),
        EU = PR(UU.position, TR(RU, -1)),
        PU = [0, 1, 2].reduce(((UU, RU) => PR(UU, TR(pU[RU], qR(EU, tU[RU])))), [0, 0, 0]);
      return {
        position: PR(RU, PU),
        heading: gU.heading,
        pitch: gU.pitch
      }
    }

    function pR(UU) {
      return TR(PR(UU.min, UU.max), .5)
    }

    function ER(UU) {
      const RU = UR(UU),
        gU = RR(UU.heading);
      return [RU, gU, KR(RU, gU)]
    }

    function PR(UU, RU) {
      return [UU[0] + RU[0], UU[1] + RU[1], UU[2] + RU[2]]
    }

    function TR(UU, RU) {
      return [UU[0] * RU, UU[1] * RU, UU[2] * RU]
    }

    function qR(UU, RU) {
      return UU[0] * RU[0] + UU[1] * RU[1] + UU[2] * RU[2]
    }

    function KR(UU, RU) {
      return [UU[1] * RU[2] - UU[2] * RU[1], UU[2] * RU[0] - UU[0] * RU[2], UU[0] * RU[1] - UU[1] * RU[0]]
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);