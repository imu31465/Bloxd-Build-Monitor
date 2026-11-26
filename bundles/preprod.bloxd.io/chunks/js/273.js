export const id = 273;
export const ids = [273];
export const modules = {
  40922: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => JU
    });
    zU(7044);
    var cU = zU(61),
      yU = zU(40929),
      QU = zU(41199),
      AU = zU(41295),
      FU = zU(41331),
      oU = zU(41348),
      DU = zU(37919),
      EU = zU(37814),
      YU = zU(41473),
      NU = zU(41532),
      IU = (zU(41563), zU(1236)),
      pU = zU(212),
      aU = zU(1193),
      tU = zU(27),
      gU = zU(3021),
      kU = zU(1494),
      GU = zU(1390),
      BU = zU(7036),
      ZU = zU(7047),
      RU = zU(4880),
      PU = zU(1305);
    const WU = 1.2,
      dU = .2,
      LU = .0066 * Math.PI / 180,
      eU = new Set(["Escape", "KeyG"]),
      CU = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      wU = "ArrowUp",
      qU = new Set([...Object.keys(CU), wU, "ArrowDown"]),
      OU = 32,
      SU = 1,
      rU = 10,
      uU = "F4",
      fU = "Period",
      iU = Math.PI / 2 - .001,
      HU = Math.PI / 6,
      MU = Math.PI / 6,
      vU = 1.08,
      VU = [{
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
      sU = 24,
      nU = 7,
      mU = 4,
      lU = .01,
      xU = 4;

    function JU(UU) {
      let {
        heatmap: XU,
        scale: zU,
        fullyOpaqueFrom: SU,
        bounds: HU,
        fitBounds: MU,
        schematic: vU,
        controls: VU,
        onStepTime: sU,
        onShowAllTime: nU,
        onTogglePlaying: mU,
        getReadout: xU = null
      } = UU;
      const {
        t: JU
      } = (0, aU.I)(), {
        clientEscMenuOptions: QX
      } = (0, tU.q)(["clientEscMenuOptions"]), oX = (0, cU.useRef)(null), DX = (0, cU.useRef)(null), EX = (0, cU.useRef)(null), YX = (0, gU.d)(oX), [NX, IX] = (0, cU.useState)(!1), [pX, aX] = (0, cU.useState)(!1), [tX, gX] = (0, cU.useState)(!0), kX = (0, cU.useRef)(!1), [GX, BX] = (0, cU.useState)(!1), ZX = pX || !tX && GX, [RX, PX] = (0, cU.useState)(!1), [WX, dX] = (0, cU.useState)(!0), [LX, eX] = (0, cU.useState)(null), CX = HU.min, [wX, qX] = (0, cU.useState)(CX);
      wX[0] === CX[0] && wX[1] === CX[1] && wX[2] === CX[2] || (qX(CX), null !== LX && eX({
        ...LX,
        position: AX(LX.position, AX(wX, FX(CX, -1)))
      }));
      const OX = (0, cU.useMemo)((() => function(UU) {
          return [UU.max[0] - UU.min[0] + 1, UU.max[1] - UU.min[1] + 1, UU.max[2] - UU.min[2] + 1]
        }(HU)), [HU]),
        SX = (0, cU.useMemo)((() => function(UU, XU) {
          const zU = [],
            cU = [];
          for (const [yU, QU] of Object.entries(UU.frequencies)) {
            const UU = Number(yU);
            for (const [yU, AU] of Object.entries(QU)) {
              const QU = Number(yU);
              for (const [yU, FU] of Object.entries(AU)) FU <= 0 || (zU.push(UU - XU[0], QU - XU[1], Number(yU) - XU[2]), cU.push(FU))
            }
          }
          return {
            positions: Int32Array.from(zU),
            values: Float64Array.from(cU),
            count: cU.length
          }
        }(XU, CX)), [XU, CX]),
        rX = WU * QX.cameraFOV / 100,
        uX = YX.height > 0 ? YX.width / YX.height : 1,
        fX = (0, cU.useMemo)((() => function(UU, XU) {
          return {
            min: [UU.min[0] - XU[0], UU.min[1] - XU[1], UU.min[2] - XU[2]],
            max: [UU.max[0] - XU[0] + 1, UU.max[1] - XU[1] + 1, UU.max[2] - XU[2] + 1]
          }
        }(MU, CX)), [MU, CX]),
        iX = zX(fX, uX, rX),
        HX = null !== LX && void 0 !== LX ? LX : iX,
        MX = (0, cU.useRef)({
          fittedView: iX,
          fieldOfView: rX,
          mouseSensitivity: QX.mouseSensitivity,
          canLock: tX
        });
      MX.current = {
        fittedView: iX,
        fieldOfView: rX,
        mouseSensitivity: QX.mouseSensitivity,
        canLock: tX
      };
      const vX = (0, cU.useMemo)((() => {
          if (!ZX) return null;
          const UU = (UU, zU, cU) => {
              var yU, QU, AU;
              return null !== (yU = null === (QU = XU.frequencies[UU + CX[0]]) || void 0 === QU || null === (AU = QU[zU + CX[1]]) || void 0 === AU ? void 0 : AU[cU + CX[2]]) && void 0 !== yU ? yU : 0
            },
            cU = function(UU, XU, zU, cU) {
              let yU = 0,
                QU = 1 / 0;
              for (const YU of [0, 1, 2]) {
                if (0 === XU[YU]) {
                  if (UU[YU] < 0 || UU[YU] > zU[YU]) return null;
                  continue
                }
                const cU = (0 - UU[YU]) / XU[YU],
                  AU = (zU[YU] - UU[YU]) / XU[YU];
                yU = Math.max(yU, Math.min(cU, AU)), QU = Math.min(QU, Math.max(cU, AU))
              }
              if (yU > QU) return null;
              const AU = [0, 1, 2].map((cU => Math.min(zU[cU] - 1, Math.max(0, Math.floor(UU[cU] + XU[cU] * yU))))),
                FU = [0, 1, 2].map((UU => Math.sign(XU[UU]))),
                oU = [0, 1, 2].map((zU => {
                  if (0 === FU[zU]) return 1 / 0;
                  return ((FU[zU] > 0 ? AU[zU] + 1 : AU[zU]) - UU[zU]) / XU[zU]
                })),
                DU = [0, 1, 2].map((UU => 0 === FU[UU] ? 1 / 0 : Math.abs(1 / XU[UU])));
              let EU = null;
              for (;;) {
                const UU = cU(AU[0], AU[1], AU[2]);
                if (UU >= 1) return AU;
                UU > 0 && (EU = [AU[0], AU[1], AU[2]]);
                const XU = oU[0] < oU[1] ? oU[0] < oU[2] ? 0 : 2 : oU[1] < oU[2] ? 1 : 2;
                if (oU[XU] > QU) return EU;
                if (AU[XU] += FU[XU], oU[XU] += DU[XU], AU[XU] < 0 || AU[XU] >= zU[XU]) return EU
              }
            }(HX.position, UX(HX), OX, ((XU, cU, yU) => (0, BU.w)(UU(XU, cU, yU), zU, SU)));
          return null === cU ? null : {
            x: cU[0] + CX[0],
            y: cU[1] + CX[1],
            z: cU[2] + CX[2],
            value: UU(cU[0], cU[1], cU[2])
          }
        }), [ZX, XU, CX, HX, OX, zU, SU]),
        {
          keyHandlers: VX
        } = (0, ZU.g)({
          isEnabled: ZX,
          claimedKeyCodes: qU,
          ON: UU => {
            eX((XU => function(UU, XU) {
              const zU = [Math.sin(UU.heading), 0, Math.cos(UU.heading)],
                cU = AX(AX(FX(zU, XU.forward), FX(XX(UU.heading), XU.right)), [0, XU.up, 0]);
              return {
                ...UU,
                position: AX(UU.position, cU)
              }
            }(null !== XU && void 0 !== XU ? XU : MX.current.fittedView, UU)))
          },
          onZoomChange: PX
        });
      (0, cU.useEffect)((() => {
        const UU = DX.current;
        if (!UU) return;
        let XU;
        try {
          XU = function(UU, XU) {
            const zU = new yU.c(UU, !0, {
                stencil: !1
              }, !0),
              cU = new QU.e(zU),
              [IU, pU, aU] = BU.N;
            cU.clearColor = new DU.e(IU / 255, pU / 255, aU / 255, 1);
            const tU = new AU.b("Heatmap3DCamera", EU.Sp.Zero(), cU);
            tU.fov = XU, tU.minZ = .05;
            const gU = new FU.d("Heatmap3DLight", new EU.Sp(.4, 1, -.6), cU);
            gU.diffuse = DU.Color3.White(), gU.groundColor = DU.Color3.Black(), gU.specular = DU.Color3.Black();
            const kU = new oU.StandardMaterial("Heatmap3DCellMaterial", cU);
            kU.diffuseColor = new DU.Color3(.4, .4, .4), kU.emissiveColor = new DU.Color3(.62, .62, .62), kU.specularColor = DU.Color3.Black();
            const GU = (0, YU.e)("Heatmap3DCells", {
              size: 1
            }, cU);
            GU.material = kU, GU.ma = !1, GU.Op = !0, GU.isVisible = !1;
            const ZU = (0, YU.e)("Heatmap3DTranslucentCells", {
              size: 1
            }, cU);
            ZU.material = kU, ZU.hasVertexAlpha = !0, ZU.ma = !1, ZU.Op = !0, ZU.isVisible = !1;
            const RU = new oU.StandardMaterial("Heatmap3DSchematicMaterial", cU);
            RU.diffuseColor = new DU.Color3(.6, .6, .6), RU.emissiveColor = new DU.Color3(.4, .4, .4), RU.specularColor = DU.Color3.Black();
            const PU = (0, YU.e)("Heatmap3DSchematicBlocks", {
              size: 1
            }, cU);
            PU.material = RU, PU.ma = !1, PU.Op = !0, PU.isVisible = !1;
            const WU = (0, NU.b)("Heatmap3DTarget", {
              lines: hU([-.52, -.52, -.52], [.52, .52, .52])
            }, cU);
            return WU.color = new DU.Color3(.06, .14, .23), WU.renderingGroupId = 1, WU.ma = !1, WU.isVisible = !1, {
              engine: zU,
              sa: cU,
              camera: tU,
              cells: GU,
              translucentCells: ZU,
              translucent: {
                Ut: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: PU,
              targetOutline: WU,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: XU,
              needsRender: !0
            }
          }(UU, MX.current.fieldOfView)
        } catch (zU) {
          return console.error("Failed to start the 3D heatmap", zU), void IX(!0)
        }
        return EX.current = XU, XU.engine.runRenderLoop((() => {
          const UU = XU.camera;
          UU.fov !== XU.targetFieldOfView && (UU.fov += (XU.targetFieldOfView - UU.fov) * (UU.fov > XU.targetFieldOfView ? .3 : .2), Math.abs(XU.targetFieldOfView - UU.fov) < 5e-4 && (UU.fov = XU.targetFieldOfView), XU.needsRender = !0), XU.needsRender && (XU.sa.render(), XU.needsRender = !XU.sa.isReady() || !XU.engine.areAllEffectsReady())
        })), () => {
          EX.current = null, XU.engine.dispose()
        }
      }), []), (0, cU.useEffect)((() => {
        const UU = DX.current;
        if (!UU) return;
        const XU = () => {
            kX.current = !1, aX(document.pointerLockElement === UU)
          },
          zU = () => {
            kX.current && (kX.current = !1, gX(!1))
          },
          cU = XU => {
            const zU = !MX.current.canLock && document.activeElement === UU && 0 !== (1 & XU.buttons);
            if (document.pointerLockElement !== UU && !zU) return;
            const cU = MX.current.mouseSensitivity * LU;
            eX((UU => function(UU, XU, zU) {
              const cU = 2 * Math.PI;
              return {
                ...UU,
                heading: ((UU.heading + XU) % cU + cU) % cU,
                pitch: Math.max(-iU, Math.min(iU, UU.pitch + zU))
              }
            }(null !== UU && void 0 !== UU ? UU : MX.current.fittedView, XU.movementX * cU, XU.movementY * cU)))
          };
        return document.addEventListener("pointerlockchange", XU), document.addEventListener("pointerlockerror", zU), document.addEventListener("pointermove", cU), () => {
          document.removeEventListener("pointerlockchange", XU), document.removeEventListener("pointerlockerror", zU), document.removeEventListener("pointermove", cU), document.pointerLockElement === UU && (0, RU.c)()
        }
      }), []), (0, cU.useEffect)((() => {
        const UU = EX.current;
        null !== UU && 0 !== YX.width && 0 !== YX.height && (UU.engine.resize(), UU.needsRender = !0)
      }), [YX.width, YX.height]), (0, cU.useEffect)((() => {
        const UU = EX.current;
        null !== UU && (UU.targetFieldOfView = rX * (RX ? dU : 1))
      }), [rX, RX]), (0, cU.useEffect)((() => {
        const UU = EX.current;
        null !== UU && function(UU, XU, zU, cU) {
          const yU = [],
            QU = [],
            AU = [],
            FU = [];
          for (let oU = 0; oU < XU.count; oU++) {
            const UU = XU.values[oU],
              DU = (0, BU.w)(UU, zU, cU);
            if (DU <= 0) continue;
            const [EU, YU, NU] = (0, BU.m)((0, BU.E)(UU, zU)), IU = DU >= 1;
            (IU ? yU : AU).push(XU.positions[3 * oU] + .5, XU.positions[3 * oU + 1] + .5, XU.positions[3 * oU + 2] + .5), (IU ? QU : FU).push(EU / 255, YU / 255, NU / 255, DU)
          }
          bU(UU.cells, Float32Array.from(yU), Float32Array.from(QU), QU.length / 4), UU.translucent = {
            Ut: Float32Array.from(AU),
            colours: Float32Array.from(FU),
            count: FU.length / 4
          }, UU.translucentSortedFrom = null, TU(UU), UU.needsRender = !0
        }(UU, SX, zU, SU)
      }), [SX, zU, SU]), (0, cU.useEffect)((() => {
        const UU = EX.current;
        null !== UU && function(UU, XU) {
          UU.chunkGridOrigin = XU, UU.chunkGridCentre = null, KU(UU)
        }(UU, HU.min)
      }), [HU]), (0, cU.useEffect)((() => {
        const UU = EX.current;
        null !== UU && function(UU, XU, zU) {
          const cU = [],
            yU = [];
          if (null !== XU) {
            const {
              positions: UU,
              colours: QU,
              count: AU
            } = XU.surface;
            for (let XU = 0; XU < AU; XU++) {
              const AU = [UU[3 * XU], UU[3 * XU + 1], UU[3 * XU + 2]];
              [0, 1, 2].every((UU => AU[UU] >= zU.min[UU] - OU && AU[UU] <= zU.max[UU] + OU)) && (cU.push(AU[0] - zU.min[0] + .5, AU[1] - zU.min[1] + .5, AU[2] - zU.min[2] + .5), yU.push(QU[3 * XU] / 255, QU[3 * XU + 1] / 255, QU[3 * XU + 2] / 255, 1))
            }
          }
          bU(UU.schematicBlocks, Float32Array.from(cU), Float32Array.from(yU), yU.length / 4), UU.needsRender = !0
        }(UU, vU, HU)
      }), [vU, HU]), (0, cU.useEffect)((() => {
        const UU = EX.current;
        null !== UU && null !== UU.chunkGrid && (UU.chunkGrid.isVisible = WX, UU.needsRender = !0)
      }), [WX, HU]), (0, cU.useEffect)((() => {
        const UU = EX.current;
        null !== UU && function(UU, XU, zU) {
          const {
            camera: cU
          } = UU;
          cU.position.set(XU.position[0], XU.position[1], XU.position[2]), cU.rotation.set(XU.pitch, XU.heading, 0);
          const yU = (rU + 1) * pU.f.aY * Math.sqrt(3);
          cU.maxZ = Math.max(yU, Math.hypot(...AX(XU.position, FX(yX({
            min: [0, 0, 0],
            max: zU
          }), -1))) + 2 * Math.hypot(...zU)), KU(UU), TU(UU), UU.needsRender = !0
        }(UU, HX, OX)
      }), [HX, OX]), (0, cU.useEffect)((() => {
        const UU = EX.current;
        null !== UU && (UU.targetOutline.isVisible = null !== vX, null !== vX && UU.targetOutline.position.set(vX.x - CX[0] + .5, vX.y - CX[1] + .5, vX.z - CX[2] + .5), UU.needsRender = !0)
      }), [vX, CX]);
      return (0, PU.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: oX,
        children: [(0, PU.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: DX,
          style: {
            width: `${YX.width}px`,
            height: `${YX.height}px`
          },
          tabIndex: 0,
          "aria-label": JU("3D heatmap"),
          onClick: () => {
            const UU = DX.current;
            if (null === UU) return;
            if (UU.focus({
                preventScroll: !0
              }), pX || !tX) return;
            const XU = UU.requestPointerLock();
            XU instanceof Promise ? XU.catch((UU => {
              UU instanceof DOMException && ("WrongDocumentError" === UU.name || "NotSupportedError" === UU.name) && gX(!1)
            })) : kX.current = !0
          },
          ...VX,
          onKeyDown: UU => {
            if (ZX && eU.has(UU.code)) return UU.preventDefault(), void(() => {
              const UU = DX.current;
              null !== UU && document.pointerLockElement === UU ? (0, RU.c)() : null === UU || void 0 === UU || UU.blur()
            })();
            const XU = CU[UU.code];
            return ZX && void 0 !== XU ? (UU.preventDefault(), void sU(XU)) : ZX && (0, ZU.d)("replayPlayPause", UU.code) && !(0, ZU.d)("Zoom", UU.code) ? (UU.preventDefault(), void(UU.repeat || mU())) : ZX && UU.code === wU ? (UU.preventDefault(), void nU()) : ZX && UU.code === fU ? (UU.preventDefault(), void eX(null)) : ZX && UU.code === uU ? (UU.preventDefault(), void dX((UU => !UU))) : void VX.onKeyDown(UU)
          },
          onFocus: () => {
            BX(!0)
          },
          onBlur: () => {
            BX(!1), VX.onBlur()
          }
        }), NX && (0, PU.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: JU("3D view isn't available in this browser.")
        }), ZX && (0, PU.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, PU.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: HX.position.map(((UU, XU) => (UU + CX[XU]).toFixed(2))).join(" ")
        }), WX && (0, PU.jsx)(jU, {
          heading: HX.heading,
          pitch: HX.pitch,
          onViewFrom: UU => {
            const XU = FX(UU, -1),
              zU = 0 === XU[1] ? {
                heading: Math.atan2(XU[0], XU[2]),
                pitch: 0
              } : {
                heading: HX.heading,
                pitch: XU[1] < 0 ? iU : -iU
              };
            eX(zX(fX, uX, rX, zU))
          },
          onTurn: (UU, XU) => {
            eX((zU => function(UU, XU, zU, cU) {
              return cX(UU, XU, {
                heading: UU.heading + zU * lU,
                pitch: Math.max(-iU, Math.min(iU, UU.pitch + cU * lU))
              })
            }(null !== zU && void 0 !== zU ? zU : MX.current.fittedView, yX(fX), UU, XU)))
          },
          onFlip: () => {
            eX((UU => function(UU, XU) {
              return cX(UU, XU, {
                heading: UU.heading + Math.PI,
                pitch: -UU.pitch
              })
            }(null !== UU && void 0 !== UU ? UU : MX.current.fittedView, yX(fX))))
          }
        }), null !== vX && (0, PU.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === xU ? JU("studio:heatmapBlockReadout", {
            x: vX.x,
            y: vX.y,
            z: vX.z,
            count: (0, IU.I)(vX.value)
          }) : xU(vX.x, vX.y, vX.z, vX.value)
        }), (0, PU.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [VU, (0, PU.jsx)(kU.O, {
            active: null === LX,
            onClick: () => {
              eX(null)
            },
            children: (0, PU.jsx)(GU.d, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function jU(UU) {
      let {
        heading: XU,
        pitch: zU,
        onViewFrom: yU,
        onTurn: QU,
        onFlip: AU
      } = UU;
      const {
        t: FU
      } = (0, aU.I)(), oU = (0, cU.useRef)(null), DU = UX({
        heading: XU,
        pitch: zU
      }), EU = XX(XU), YU = DX(DU, EU), NU = sU + nU + 2, IU = VU.flatMap((UU => [1, -1].map((XU => {
        const zU = FX(UU.direction, XU);
        return {
          ...UU,
          sign: XU,
          direction: zU,
          endX: NU + oX(zU, EU) * sU,
          endY: NU - oX(zU, YU) * sU,
          depth: oX(zU, DU)
        }
      })))).sort(((UU, XU) => XU.depth - UU.depth));
      return (0, PU.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * NU,
        height: 2 * NU,
        "aria-hidden": !0,
        onPointerDown: UU => {
          var XU, zU;
          UU.currentTarget.setPointerCapture(UU.pointerId);
          const cU = UU.target,
            yU = cU.getAttribute("data-end");
          oU.current = {
            pointerId: UU.pointerId,
            x: UU.clientX,
            y: UU.clientY,
            travel: 0,
            side: null === yU ? null : null !== (XU = null === (zU = IU[Number(yU)]) || void 0 === zU ? void 0 : zU.direction) && void 0 !== XU ? XU : null,
            isOnMiddle: cU.hasAttribute("data-middle")
          }
        },
        onPointerMove: UU => {
          const XU = oU.current;
          if (null === XU || XU.pointerId !== UU.pointerId) return;
          const zU = UU.clientX - XU.x,
            cU = UU.clientY - XU.y;
          XU.x = UU.clientX, XU.y = UU.clientY, XU.travel += Math.abs(zU) + Math.abs(cU), XU.travel >= xU && QU(zU, cU)
        },
        onPointerUp: UU => {
          const XU = oU.current;
          oU.current = null, null === XU || XU.pointerId !== UU.pointerId || XU.travel >= xU || (null !== XU.side ? yU(XU.side) : XU.isOnMiddle && AU())
        },
        onPointerCancel: () => {
          oU.current = null
        },
        children: [IU.map(((UU, XU) => {
          const zU = UU.sign > 0;
          return (0, PU.jsxs)("g", {
            children: [(0, PU.jsx)("line", {
              x1: NU,
              y1: NU,
              x2: UU.endX,
              y2: UU.endY,
              stroke: UU.colour,
              strokeOpacity: zU ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, PU.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": XU,
              cx: UU.endX,
              cy: UU.endY,
              r: zU ? nU : nU - 1,
              fill: UU.colour,
              fillOpacity: zU ? 1 : .3,
              stroke: UU.colour,
              strokeWidth: zU ? 0 : 1.5,
              children: (0, PU.jsx)("title", {
                children: `${FU("View from")} ${zU?"+":"\u2212"}${UU.name}`
              })
            }), zU && (0, PU.jsx)("text", {
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
          }, `${zU?"+":"-"}${UU.name}`)
        })), (0, PU.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: NU,
          cy: NU,
          r: mU,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, PU.jsx)("title", {
            children: FU("View from the opposite side")
          })
        })]
      })
    }

    function KU(UU) {
      var XU, zU, cU;
      const {
        chunkGridOrigin: yU,
        camera: QU
      } = UU;
      if (null === yU) return;
      const AU = [QU.position.x, QU.position.y, QU.position.z],
        FU = [0, 2].map((UU => Math.floor((AU[UU] + yU[UU]) / pU.f.aY))),
        oU = UU.chunkGridCentre;
      if (null !== oU && oU.every(((UU, XU) => UU === FU[XU]))) return;
      const YU = null === (XU = null === (zU = UU.chunkGrid) || void 0 === zU ? void 0 : zU.isVisible) || void 0 === XU || XU;
      null === (cU = UU.chunkGrid) || void 0 === cU || cU.dispose();
      const [IU, aU] = [0, 2].map(((UU, XU) => {
        const zU = [];
        for (let cU = FU[XU] - rU; cU <= FU[XU] + rU + 1; cU++) zU.push(cU * pU.f.aY - yU[UU]);
        return zU
      })), tU = -yU[1], gU = [];
      for (const DU of aU) gU.push([new EU.Sp(IU[0], tU, DU), new EU.Sp(IU[IU.length - 1], tU, DU)]);
      for (const DU of IU) gU.push([new EU.Sp(DU, tU, aU[0]), new EU.Sp(DU, tU, aU[aU.length - 1])]);
      const kU = (0, NU.b)("Heatmap3DChunkGrid", {
        lines: gU
      }, UU.sa);
      kU.color = new DU.Color3(.45, .6, .78), kU.ma = !1, kU.isVisible = YU, UU.chunkGrid = kU, UU.chunkGridCentre = FU, UU.needsRender = !0
    }

    function bU(UU, XU, zU, cU) {
      UU.fUU("matrix", function(UU, XU) {
        const zU = new Float32Array(16 * XU);
        for (let cU = 0; cU < XU; cU++) {
          const XU = 16 * cU;
          zU[XU] = 1, zU[XU + 5] = 1, zU[XU + 10] = 1, zU[XU + 12] = UU[3 * cU], zU[XU + 13] = UU[3 * cU + 1], zU[XU + 14] = UU[3 * cU + 2], zU[XU + 15] = 1
        }
        return zU
      }(XU, cU), 16, !0), UU.fUU("color", zU, 4, !0), UU.isVisible = cU > 0
    }

    function TU(UU) {
      const {
        camera: XU,
        translucent: zU
      } = UU, cU = [XU.position.x, XU.position.y, XU.position.z], yU = UU.translucentSortedFrom;
      if (null !== yU && Math.hypot(cU[0] - yU[0], cU[1] - yU[1], cU[2] - yU[2]) < SU) return;
      UU.translucentSortedFrom = cU;
      const QU = new Float64Array(zU.count),
        AU = new Uint32Array(zU.count);
      for (let DU = 0; DU < zU.count; DU++) {
        const UU = zU.Ut[3 * DU] - cU[0],
          XU = zU.Ut[3 * DU + 1] - cU[1],
          yU = zU.Ut[3 * DU + 2] - cU[2];
        QU[DU] = UU * UU + XU * XU + yU * yU, AU[DU] = DU
      }
      AU.sort(((UU, XU) => QU[XU] - QU[UU]));
      const FU = new Float32Array(3 * zU.count),
        oU = new Float32Array(4 * zU.count);
      AU.forEach(((UU, XU) => {
        FU.set(zU.Ut.subarray(3 * UU, 3 * UU + 3), 3 * XU), oU.set(zU.colours.subarray(4 * UU, 4 * UU + 4), 4 * XU)
      })), bU(UU.translucentCells, FU, oU, zU.count), UU.needsRender = !0
    }

    function hU(UU, XU) {
      const zU = (zU, cU, yU) => new EU.Sp(0 === zU ? UU[0] : XU[0], 0 === cU ? UU[1] : XU[1], 0 === yU ? UU[2] : XU[2]),
        cU = [];
      for (const yU of [0, 1])
        for (const UU of [0, 1]) cU.push([zU(0, yU, UU), zU(1, yU, UU)], [zU(yU, 0, UU), zU(yU, 1, UU)], [zU(yU, UU, 0), zU(yU, UU, 1)]);
      return cU
    }

    function UX(UU) {
      return [Math.sin(UU.heading) * Math.cos(UU.pitch), -Math.sin(UU.pitch), Math.cos(UU.heading) * Math.cos(UU.pitch)]
    }

    function XX(UU) {
      return [Math.cos(UU), 0, -Math.sin(UU)]
    }

    function zX(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: HU,
        pitch: MU
      };
      const yU = [UU.max[0] - UU.min[0], UU.max[1] - UU.min[1], UU.max[2] - UU.min[2]],
        QU = UX(cU),
        AU = XX(cU.heading),
        FU = DX(QU, AU),
        oU = Math.tan(zU / 2),
        DU = oU * XU;
      let EU = 1;
      for (const YU of [-yU[0] / 2, yU[0] / 2])
        for (const UU of [-yU[1] / 2, yU[1] / 2])
          for (const XU of [-yU[2] / 2, yU[2] / 2]) {
            const zU = [YU, UU, XU],
              cU = oX(zU, QU);
            EU = Math.max(EU, Math.abs(oX(zU, AU)) / DU - cU, Math.abs(oX(zU, FU)) / oU - cU)
          }
      return {
        position: AX([UU.min[0] + yU[0] / 2, UU.min[1] + yU[1] / 2, UU.min[2] + yU[2] / 2], FX(QU, -EU * vU)),
        heading: cU.heading,
        pitch: cU.pitch
      }
    }

    function cX(UU, XU, zU) {
      const cU = QX(UU),
        yU = QX(zU),
        QU = AX(UU.position, FX(XU, -1)),
        AU = [0, 1, 2].reduce(((UU, XU) => AX(UU, FX(yU[XU], oX(QU, cU[XU])))), [0, 0, 0]);
      return {
        position: AX(XU, AU),
        heading: zU.heading,
        pitch: zU.pitch
      }
    }

    function yX(UU) {
      return FX(AX(UU.min, UU.max), .5)
    }

    function QX(UU) {
      const XU = UX(UU),
        zU = XX(UU.heading);
      return [XU, zU, DX(XU, zU)]
    }

    function AX(UU, XU) {
      return [UU[0] + XU[0], UU[1] + XU[1], UU[2] + XU[2]]
    }

    function FX(UU, XU) {
      return [UU[0] * XU, UU[1] * XU, UU[2] * XU]
    }

    function oX(UU, XU) {
      return UU[0] * XU[0] + UU[1] * XU[1] + UU[2] * XU[2]
    }

    function DX(UU, XU) {
      return [UU[1] * XU[2] - UU[2] * XU[1], UU[2] * XU[0] - UU[0] * XU[2], UU[0] * XU[1] - UU[1] * XU[0]]
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);