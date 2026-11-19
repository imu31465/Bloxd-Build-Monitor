export const id = 239;
export const ids = [239];
export const modules = {
  38962: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => xY
    });
    DY(6023);
    var FY = DY(61),
      AY = DY(38965),
      IY = DY(39209),
      RY = DY(39328),
      OY = DY(39375),
      gY = DY(39391),
      aY = DY(36586),
      vY = DY(36518),
      uY = DY(39512),
      sY = DY(39574),
      iY = (DY(39602), DY(1231)),
      yY = DY(213),
      QY = DY(1211),
      oY = DY(19),
      WY = DY(2486),
      EY = DY(1437),
      mY = DY(1098),
      VY = DY(6018),
      SY = DY(6030),
      lY = DY(3983),
      TY = DY(1125);
    const eY = 1.2,
      NY = .2,
      BY = .0066 * Math.PI / 180,
      cY = new Set(["Escape", "KeyG"]),
      KY = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      HY = "ArrowUp",
      zY = new Set([...Object.keys(KY), HY, "ArrowDown"]),
      ZY = 32,
      CY = 1,
      fY = 10,
      jY = "F4",
      hY = "Period",
      dY = Math.PI / 2 - .001,
      JY = Math.PI / 6,
      MY = Math.PI / 6,
      wY = 1.08,
      bY = [{
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
      XY = 24,
      qY = 7,
      pY = 4,
      kY = .01,
      GY = 4;

    function xY(YY) {
      let {
        heatmap: rY,
        scale: DY,
        fullyOpaqueFrom: CY,
        bounds: JY,
        fitBounds: MY,
        schematic: wY,
        controls: bY,
        onStepTime: XY,
        onShowAllTime: qY,
        onTogglePlaying: pY,
        getReadout: GY = null
      } = YY;
      const {
        t: xY
      } = (0, QY.C)(), {
        clientEscMenuOptions: Ir
      } = (0, oY.j)(["clientEscMenuOptions"]), gr = (0, FY.useRef)(null), ar = (0, FY.useRef)(null), vr = (0, FY.useRef)(null), ur = (0, WY.d)(gr), [sr, ir] = (0, FY.useState)(!1), [yr, Qr] = (0, FY.useState)(!1), [or, Wr] = (0, FY.useState)(!0), Er = (0, FY.useRef)(!1), [mr, Vr] = (0, FY.useState)(!1), Sr = yr || !or && mr, [lr, Tr] = (0, FY.useState)(!1), [er, Nr] = (0, FY.useState)(!0), [Br, cr] = (0, FY.useState)(null), Kr = JY.min, [Hr, zr] = (0, FY.useState)(Kr);
      Hr[0] === Kr[0] && Hr[1] === Kr[1] && Hr[2] === Kr[2] || (zr(Kr), null !== Br && cr({
        ...Br,
        position: Rr(Br.position, Rr(Hr, Or(Kr, -1)))
      }));
      const Zr = (0, FY.useMemo)((() => function(YY) {
          return [YY.max[0] - YY.min[0] + 1, YY.max[1] - YY.min[1] + 1, YY.max[2] - YY.min[2] + 1]
        }(JY)), [JY]),
        Cr = (0, FY.useMemo)((() => function(YY, rY) {
          const DY = [],
            FY = [];
          for (const [AY, IY] of Object.entries(YY.frequencies)) {
            const YY = Number(AY);
            for (const [AY, RY] of Object.entries(IY)) {
              const IY = Number(AY);
              for (const [AY, OY] of Object.entries(RY)) OY <= 0 || (DY.push(YY - rY[0], IY - rY[1], Number(AY) - rY[2]), FY.push(OY))
            }
          }
          return {
            positions: Int32Array.from(DY),
            values: Float64Array.from(FY),
            count: FY.length
          }
        }(rY, Kr)), [rY, Kr]),
        fr = eY * Ir.cameraFOV / 100,
        jr = ur.height > 0 ? ur.width / ur.height : 1,
        hr = (0, FY.useMemo)((() => function(YY, rY) {
          return {
            min: [YY.min[0] - rY[0], YY.min[1] - rY[1], YY.min[2] - rY[2]],
            max: [YY.max[0] - rY[0] + 1, YY.max[1] - rY[1] + 1, YY.max[2] - rY[2] + 1]
          }
        }(MY, Kr)), [MY, Kr]),
        dr = Dr(hr, jr, fr),
        Jr = null !== Br && void 0 !== Br ? Br : dr,
        Mr = (0, FY.useRef)({
          fittedView: dr,
          fieldOfView: fr,
          mouseSensitivity: Ir.mouseSensitivity,
          canLock: or
        });
      Mr.current = {
        fittedView: dr,
        fieldOfView: fr,
        mouseSensitivity: Ir.mouseSensitivity,
        canLock: or
      };
      const wr = (0, FY.useMemo)((() => {
          if (!Sr) return null;
          const YY = (YY, DY, FY) => {
              var AY, IY, RY;
              return null !== (AY = null === (IY = rY.frequencies[YY + Kr[0]]) || void 0 === IY || null === (RY = IY[DY + Kr[1]]) || void 0 === RY ? void 0 : RY[FY + Kr[2]]) && void 0 !== AY ? AY : 0
            },
            FY = function(YY, rY, DY, FY) {
              let AY = 0,
                IY = 1 / 0;
              for (const uY of [0, 1, 2]) {
                if (0 === rY[uY]) {
                  if (YY[uY] < 0 || YY[uY] > DY[uY]) return null;
                  continue
                }
                const FY = (0 - YY[uY]) / rY[uY],
                  RY = (DY[uY] - YY[uY]) / rY[uY];
                AY = Math.max(AY, Math.min(FY, RY)), IY = Math.min(IY, Math.max(FY, RY))
              }
              if (AY > IY) return null;
              const RY = [0, 1, 2].map((FY => Math.min(DY[FY] - 1, Math.max(0, Math.floor(YY[FY] + rY[FY] * AY))))),
                OY = [0, 1, 2].map((YY => Math.sign(rY[YY]))),
                gY = [0, 1, 2].map((DY => {
                  if (0 === OY[DY]) return 1 / 0;
                  return ((OY[DY] > 0 ? RY[DY] + 1 : RY[DY]) - YY[DY]) / rY[DY]
                })),
                aY = [0, 1, 2].map((YY => 0 === OY[YY] ? 1 / 0 : Math.abs(1 / rY[YY])));
              let vY = null;
              for (;;) {
                const YY = FY(RY[0], RY[1], RY[2]);
                if (YY >= 1) return RY;
                YY > 0 && (vY = [RY[0], RY[1], RY[2]]);
                const rY = gY[0] < gY[1] ? gY[0] < gY[2] ? 0 : 2 : gY[1] < gY[2] ? 1 : 2;
                if (gY[rY] > IY) return vY;
                if (RY[rY] += OY[rY], gY[rY] += aY[rY], RY[rY] < 0 || RY[rY] >= DY[rY]) return vY
              }
            }(Jr.position, Yr(Jr), Zr, ((rY, FY, AY) => (0, VY.E)(YY(rY, FY, AY), DY, CY)));
          return null === FY ? null : {
            x: FY[0] + Kr[0],
            y: FY[1] + Kr[1],
            z: FY[2] + Kr[2],
            value: YY(FY[0], FY[1], FY[2])
          }
        }), [Sr, rY, Kr, Jr, Zr, DY, CY]),
        {
          keyHandlers: br
        } = (0, SY.i)({
          isEnabled: Sr,
          claimedKeyCodes: zY,
          Ys: YY => {
            cr((rY => function(YY, rY) {
              const DY = [Math.sin(YY.heading), 0, Math.cos(YY.heading)],
                FY = Rr(Rr(Or(DY, rY.forward), Or(rr(YY.heading), rY.right)), [0, rY.up, 0]);
              return {
                ...YY,
                position: Rr(YY.position, FY)
              }
            }(null !== rY && void 0 !== rY ? rY : Mr.current.fittedView, YY)))
          },
          onZoomChange: Tr
        });
      (0, FY.useEffect)((() => {
        const YY = ar.current;
        if (!YY) return;
        let rY;
        try {
          rY = function(YY, rY) {
            const DY = new AY.c(YY, !0, {
                stencil: !1
              }, !0),
              FY = new IY.c(DY),
              [iY, yY, QY] = VY.W;
            FY.clearColor = new aY.c(iY / 255, yY / 255, QY / 255, 1);
            const oY = new RY.c("Heatmap3DCamera", vY.xy.Zero(), FY);
            oY.fov = rY, oY.minZ = .05;
            const WY = new OY.e("Heatmap3DLight", new vY.xy(.4, 1, -.6), FY);
            WY.diffuse = aY.Color3.White(), WY.groundColor = aY.Color3.Black(), WY.specular = aY.Color3.Black();
            const EY = new gY.StandardMaterial("Heatmap3DCellMaterial", FY);
            EY.diffuseColor = new aY.Color3(.4, .4, .4), EY.emissiveColor = new aY.Color3(.62, .62, .62), EY.specularColor = aY.Color3.Black();
            const mY = (0, uY.b)("Heatmap3DCells", {
              size: 1
            }, FY);
            mY.material = EY, mY.Yo = !1, mY.Gy = !0, mY.isVisible = !1;
            const SY = (0, uY.b)("Heatmap3DTranslucentCells", {
              size: 1
            }, FY);
            SY.material = EY, SY.hasVertexAlpha = !0, SY.Yo = !1, SY.Gy = !0, SY.isVisible = !1;
            const lY = new gY.StandardMaterial("Heatmap3DSchematicMaterial", FY);
            lY.diffuseColor = new aY.Color3(.6, .6, .6), lY.emissiveColor = new aY.Color3(.4, .4, .4), lY.specularColor = aY.Color3.Black();
            const TY = (0, uY.b)("Heatmap3DSchematicBlocks", {
              size: 1
            }, FY);
            TY.material = lY, TY.Yo = !1, TY.Gy = !0, TY.isVisible = !1;
            const eY = (0, sY.b)("Heatmap3DTarget", {
              lines: tY([-.52, -.52, -.52], [.52, .52, .52])
            }, FY);
            return eY.color = new aY.Color3(.06, .14, .23), eY.renderingGroupId = 1, eY.Yo = !1, eY.isVisible = !1, {
              engine: DY,
              LQ: FY,
              camera: oY,
              cells: mY,
              translucentCells: SY,
              translucent: {
                uv: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: TY,
              targetOutline: eY,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: rY,
              needsRender: !0
            }
          }(YY, Mr.current.fieldOfView)
        } catch (DY) {
          return console.error("Failed to start the 3D heatmap", DY), void ir(!0)
        }
        return vr.current = rY, rY.engine.runRenderLoop((() => {
          const YY = rY.camera;
          YY.fov !== rY.targetFieldOfView && (YY.fov += (rY.targetFieldOfView - YY.fov) * (YY.fov > rY.targetFieldOfView ? .3 : .2), Math.abs(rY.targetFieldOfView - YY.fov) < 5e-4 && (YY.fov = rY.targetFieldOfView), rY.needsRender = !0), rY.needsRender && (rY.LQ.render(), rY.needsRender = !rY.LQ.isReady() || !rY.engine.areAllEffectsReady())
        })), () => {
          vr.current = null, rY.engine.dispose()
        }
      }), []), (0, FY.useEffect)((() => {
        const YY = ar.current;
        if (!YY) return;
        const rY = () => {
            Er.current = !1, Qr(document.pointerLockElement === YY)
          },
          DY = () => {
            Er.current && (Er.current = !1, Wr(!1))
          },
          FY = rY => {
            const DY = !Mr.current.canLock && document.activeElement === YY && 0 !== (1 & rY.buttons);
            if (document.pointerLockElement !== YY && !DY) return;
            const FY = Mr.current.mouseSensitivity * BY;
            cr((YY => function(YY, rY, DY) {
              const FY = 2 * Math.PI;
              return {
                ...YY,
                heading: ((YY.heading + rY) % FY + FY) % FY,
                pitch: Math.max(-dY, Math.min(dY, YY.pitch + DY))
              }
            }(null !== YY && void 0 !== YY ? YY : Mr.current.fittedView, rY.movementX * FY, rY.movementY * FY)))
          };
        return document.addEventListener("pointerlockchange", rY), document.addEventListener("pointerlockerror", DY), document.addEventListener("pointermove", FY), () => {
          document.removeEventListener("pointerlockchange", rY), document.removeEventListener("pointerlockerror", DY), document.removeEventListener("pointermove", FY), document.pointerLockElement === YY && (0, lY.c)()
        }
      }), []), (0, FY.useEffect)((() => {
        const YY = vr.current;
        null !== YY && 0 !== ur.width && 0 !== ur.height && (YY.engine.resize(), YY.needsRender = !0)
      }), [ur.width, ur.height]), (0, FY.useEffect)((() => {
        const YY = vr.current;
        null !== YY && (YY.targetFieldOfView = fr * (lr ? NY : 1))
      }), [fr, lr]), (0, FY.useEffect)((() => {
        const YY = vr.current;
        null !== YY && function(YY, rY, DY, FY) {
          const AY = [],
            IY = [],
            RY = [],
            OY = [];
          for (let gY = 0; gY < rY.count; gY++) {
            const YY = rY.values[gY],
              aY = (0, VY.E)(YY, DY, FY);
            if (aY <= 0) continue;
            const [vY, uY, sY] = (0, VY.v)((0, VY.P)(YY, DY)), iY = aY >= 1;
            (iY ? AY : RY).push(rY.positions[3 * gY] + .5, rY.positions[3 * gY + 1] + .5, rY.positions[3 * gY + 2] + .5), (iY ? IY : OY).push(vY / 255, uY / 255, sY / 255, aY)
          }
          UY(YY.cells, Float32Array.from(AY), Float32Array.from(IY), IY.length / 4), YY.translucent = {
            uv: Float32Array.from(RY),
            colours: Float32Array.from(OY),
            count: OY.length / 4
          }, YY.translucentSortedFrom = null, LY(YY), YY.needsRender = !0
        }(YY, Cr, DY, CY)
      }), [Cr, DY, CY]), (0, FY.useEffect)((() => {
        const YY = vr.current;
        null !== YY && function(YY, rY) {
          YY.chunkGridOrigin = rY, YY.chunkGridCentre = null, PY(YY)
        }(YY, JY.min)
      }), [JY]), (0, FY.useEffect)((() => {
        const YY = vr.current;
        null !== YY && function(YY, rY, DY) {
          const FY = [],
            AY = [];
          if (null !== rY) {
            const {
              positions: YY,
              colours: IY,
              count: RY
            } = rY.surface;
            for (let rY = 0; rY < RY; rY++) {
              const RY = [YY[3 * rY], YY[3 * rY + 1], YY[3 * rY + 2]];
              [0, 1, 2].every((YY => RY[YY] >= DY.min[YY] - ZY && RY[YY] <= DY.max[YY] + ZY)) && (FY.push(RY[0] - DY.min[0] + .5, RY[1] - DY.min[1] + .5, RY[2] - DY.min[2] + .5), AY.push(IY[3 * rY] / 255, IY[3 * rY + 1] / 255, IY[3 * rY + 2] / 255, 1))
            }
          }
          UY(YY.schematicBlocks, Float32Array.from(FY), Float32Array.from(AY), AY.length / 4), YY.needsRender = !0
        }(YY, wY, JY)
      }), [wY, JY]), (0, FY.useEffect)((() => {
        const YY = vr.current;
        null !== YY && null !== YY.chunkGrid && (YY.chunkGrid.isVisible = er, YY.needsRender = !0)
      }), [er, JY]), (0, FY.useEffect)((() => {
        const YY = vr.current;
        null !== YY && function(YY, rY, DY) {
          const {
            camera: FY
          } = YY;
          FY.position.set(rY.position[0], rY.position[1], rY.position[2]), FY.rotation.set(rY.pitch, rY.heading, 0);
          const AY = (fY + 1) * yY.d.Jy * Math.sqrt(3);
          FY.maxZ = Math.max(AY, Math.hypot(...Rr(rY.position, Or(Ar({
            min: [0, 0, 0],
            max: DY
          }), -1))) + 2 * Math.hypot(...DY)), PY(YY), LY(YY), YY.needsRender = !0
        }(YY, Jr, Zr)
      }), [Jr, Zr]), (0, FY.useEffect)((() => {
        const YY = vr.current;
        null !== YY && (YY.targetOutline.isVisible = null !== wr, null !== wr && YY.targetOutline.position.set(wr.x - Kr[0] + .5, wr.y - Kr[1] + .5, wr.z - Kr[2] + .5), YY.needsRender = !0)
      }), [wr, Kr]);
      return (0, TY.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: gr,
        children: [(0, TY.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: ar,
          style: {
            width: `${ur.width}px`,
            height: `${ur.height}px`
          },
          tabIndex: 0,
          "aria-label": xY("3D heatmap"),
          onClick: () => {
            const YY = ar.current;
            if (null === YY) return;
            if (YY.focus({
                preventScroll: !0
              }), yr || !or) return;
            const rY = YY.requestPointerLock();
            rY instanceof Promise ? rY.catch((YY => {
              YY instanceof DOMException && ("WrongDocumentError" === YY.name || "NotSupportedError" === YY.name) && Wr(!1)
            })) : Er.current = !0
          },
          ...br,
          onKeyDown: YY => {
            if (Sr && cY.has(YY.code)) return YY.preventDefault(), void(() => {
              const YY = ar.current;
              null !== YY && document.pointerLockElement === YY ? (0, lY.c)() : null === YY || void 0 === YY || YY.blur()
            })();
            const rY = KY[YY.code];
            return Sr && void 0 !== rY ? (YY.preventDefault(), void XY(rY)) : Sr && (0, SY.e)("replayPlayPause", YY.code) && !(0, SY.e)("Zoom", YY.code) ? (YY.preventDefault(), void(YY.repeat || pY())) : Sr && YY.code === HY ? (YY.preventDefault(), void qY()) : Sr && YY.code === hY ? (YY.preventDefault(), void cr(null)) : Sr && YY.code === jY ? (YY.preventDefault(), void Nr((YY => !YY))) : void br.onKeyDown(YY)
          },
          onFocus: () => {
            Vr(!0)
          },
          onBlur: () => {
            Vr(!1), br.onBlur()
          }
        }), sr && (0, TY.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: xY("3D view isn't available in this browser.")
        }), Sr && (0, TY.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, TY.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: Jr.position.map(((YY, rY) => (YY + Kr[rY]).toFixed(2))).join(" ")
        }), er && (0, TY.jsx)(nY, {
          heading: Jr.heading,
          pitch: Jr.pitch,
          onViewFrom: YY => {
            const rY = Or(YY, -1),
              DY = 0 === rY[1] ? {
                heading: Math.atan2(rY[0], rY[2]),
                pitch: 0
              } : {
                heading: Jr.heading,
                pitch: rY[1] < 0 ? dY : -dY
              };
            cr(Dr(hr, jr, fr, DY))
          },
          onTurn: (YY, rY) => {
            cr((DY => function(YY, rY, DY, FY) {
              return Fr(YY, rY, {
                heading: YY.heading + DY * kY,
                pitch: Math.max(-dY, Math.min(dY, YY.pitch + FY * kY))
              })
            }(null !== DY && void 0 !== DY ? DY : Mr.current.fittedView, Ar(hr), YY, rY)))
          },
          onFlip: () => {
            cr((YY => function(YY, rY) {
              return Fr(YY, rY, {
                heading: YY.heading + Math.PI,
                pitch: -YY.pitch
              })
            }(null !== YY && void 0 !== YY ? YY : Mr.current.fittedView, Ar(hr))))
          }
        }), null !== wr && (0, TY.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === GY ? xY("studio:heatmapBlockReadout", {
            x: wr.x,
            y: wr.y,
            z: wr.z,
            count: (0, iY.S)(wr.value)
          }) : GY(wr.x, wr.y, wr.z, wr.value)
        }), (0, TY.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [bY, (0, TY.jsx)(EY.J, {
            active: null === Br,
            onClick: () => {
              cr(null)
            },
            children: (0, TY.jsx)(mY.e, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function nY(YY) {
      let {
        heading: rY,
        pitch: DY,
        onViewFrom: AY,
        onTurn: IY,
        onFlip: RY
      } = YY;
      const {
        t: OY
      } = (0, QY.C)(), gY = (0, FY.useRef)(null), aY = Yr({
        heading: rY,
        pitch: DY
      }), vY = rr(rY), uY = ar(aY, vY), sY = XY + qY + 2, iY = bY.flatMap((YY => [1, -1].map((rY => {
        const DY = Or(YY.direction, rY);
        return {
          ...YY,
          sign: rY,
          direction: DY,
          endX: sY + gr(DY, vY) * XY,
          endY: sY - gr(DY, uY) * XY,
          depth: gr(DY, aY)
        }
      })))).sort(((YY, rY) => rY.depth - YY.depth));
      return (0, TY.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * sY,
        height: 2 * sY,
        "aria-hidden": !0,
        onPointerDown: YY => {
          var rY, DY;
          YY.currentTarget.setPointerCapture(YY.pointerId);
          const FY = YY.target,
            AY = FY.getAttribute("data-end");
          gY.current = {
            pointerId: YY.pointerId,
            x: YY.clientX,
            y: YY.clientY,
            travel: 0,
            side: null === AY ? null : null !== (rY = null === (DY = iY[Number(AY)]) || void 0 === DY ? void 0 : DY.direction) && void 0 !== rY ? rY : null,
            isOnMiddle: FY.hasAttribute("data-middle")
          }
        },
        onPointerMove: YY => {
          const rY = gY.current;
          if (null === rY || rY.pointerId !== YY.pointerId) return;
          const DY = YY.clientX - rY.x,
            FY = YY.clientY - rY.y;
          rY.x = YY.clientX, rY.y = YY.clientY, rY.travel += Math.abs(DY) + Math.abs(FY), rY.travel >= GY && IY(DY, FY)
        },
        onPointerUp: YY => {
          const rY = gY.current;
          gY.current = null, null === rY || rY.pointerId !== YY.pointerId || rY.travel >= GY || (null !== rY.side ? AY(rY.side) : rY.isOnMiddle && RY())
        },
        onPointerCancel: () => {
          gY.current = null
        },
        children: [iY.map(((YY, rY) => {
          const DY = YY.sign > 0;
          return (0, TY.jsxs)("g", {
            children: [(0, TY.jsx)("line", {
              x1: sY,
              y1: sY,
              x2: YY.endX,
              y2: YY.endY,
              stroke: YY.colour,
              strokeOpacity: DY ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, TY.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": rY,
              cx: YY.endX,
              cy: YY.endY,
              r: DY ? qY : qY - 1,
              fill: YY.colour,
              fillOpacity: DY ? 1 : .3,
              stroke: YY.colour,
              strokeWidth: DY ? 0 : 1.5,
              children: (0, TY.jsx)("title", {
                children: `${OY("View from")} ${DY?"+":"\u2212"}${YY.name}`
              })
            }), DY && (0, TY.jsx)("text", {
              pointerEvents: "none",
              x: YY.endX,
              y: YY.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: YY.name
            })]
          }, `${DY?"+":"-"}${YY.name}`)
        })), (0, TY.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: sY,
          cy: sY,
          r: pY,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, TY.jsx)("title", {
            children: OY("View from the opposite side")
          })
        })]
      })
    }

    function PY(YY) {
      var rY, DY, FY;
      const {
        chunkGridOrigin: AY,
        camera: IY
      } = YY;
      if (null === AY) return;
      const RY = [IY.position.x, IY.position.y, IY.position.z],
        OY = [0, 2].map((YY => Math.floor((RY[YY] + AY[YY]) / yY.d.Jy))),
        gY = YY.chunkGridCentre;
      if (null !== gY && gY.every(((YY, rY) => YY === OY[rY]))) return;
      const uY = null === (rY = null === (DY = YY.chunkGrid) || void 0 === DY ? void 0 : DY.isVisible) || void 0 === rY || rY;
      null === (FY = YY.chunkGrid) || void 0 === FY || FY.dispose();
      const [iY, QY] = [0, 2].map(((YY, rY) => {
        const DY = [];
        for (let FY = OY[rY] - fY; FY <= OY[rY] + fY + 1; FY++) DY.push(FY * yY.d.Jy - AY[YY]);
        return DY
      })), oY = -AY[1], WY = [];
      for (const aY of QY) WY.push([new vY.xy(iY[0], oY, aY), new vY.xy(iY[iY.length - 1], oY, aY)]);
      for (const aY of iY) WY.push([new vY.xy(aY, oY, QY[0]), new vY.xy(aY, oY, QY[QY.length - 1])]);
      const EY = (0, sY.b)("Heatmap3DChunkGrid", {
        lines: WY
      }, YY.LQ);
      EY.color = new aY.Color3(.45, .6, .78), EY.Yo = !1, EY.isVisible = uY, YY.chunkGrid = EY, YY.chunkGridCentre = OY, YY.needsRender = !0
    }

    function UY(YY, rY, DY, FY) {
      YY.j_("matrix", function(YY, rY) {
        const DY = new Float32Array(16 * rY);
        for (let FY = 0; FY < rY; FY++) {
          const rY = 16 * FY;
          DY[rY] = 1, DY[rY + 5] = 1, DY[rY + 10] = 1, DY[rY + 12] = YY[3 * FY], DY[rY + 13] = YY[3 * FY + 1], DY[rY + 14] = YY[3 * FY + 2], DY[rY + 15] = 1
        }
        return DY
      }(rY, FY), 16, !0), YY.j_("color", DY, 4, !0), YY.isVisible = FY > 0
    }

    function LY(YY) {
      const {
        camera: rY,
        translucent: DY
      } = YY, FY = [rY.position.x, rY.position.y, rY.position.z], AY = YY.translucentSortedFrom;
      if (null !== AY && Math.hypot(FY[0] - AY[0], FY[1] - AY[1], FY[2] - AY[2]) < CY) return;
      YY.translucentSortedFrom = FY;
      const IY = new Float64Array(DY.count),
        RY = new Uint32Array(DY.count);
      for (let aY = 0; aY < DY.count; aY++) {
        const YY = DY.uv[3 * aY] - FY[0],
          rY = DY.uv[3 * aY + 1] - FY[1],
          AY = DY.uv[3 * aY + 2] - FY[2];
        IY[aY] = YY * YY + rY * rY + AY * AY, RY[aY] = aY
      }
      RY.sort(((YY, rY) => IY[rY] - IY[YY]));
      const OY = new Float32Array(3 * DY.count),
        gY = new Float32Array(4 * DY.count);
      RY.forEach(((YY, rY) => {
        OY.set(DY.uv.subarray(3 * YY, 3 * YY + 3), 3 * rY), gY.set(DY.colours.subarray(4 * YY, 4 * YY + 4), 4 * rY)
      })), UY(YY.translucentCells, OY, gY, DY.count), YY.needsRender = !0
    }

    function tY(YY, rY) {
      const DY = (DY, FY, AY) => new vY.xy(0 === DY ? YY[0] : rY[0], 0 === FY ? YY[1] : rY[1], 0 === AY ? YY[2] : rY[2]),
        FY = [];
      for (const AY of [0, 1])
        for (const YY of [0, 1]) FY.push([DY(0, AY, YY), DY(1, AY, YY)], [DY(AY, 0, YY), DY(AY, 1, YY)], [DY(AY, YY, 0), DY(AY, YY, 1)]);
      return FY
    }

    function Yr(YY) {
      return [Math.sin(YY.heading) * Math.cos(YY.pitch), -Math.sin(YY.pitch), Math.cos(YY.heading) * Math.cos(YY.pitch)]
    }

    function rr(YY) {
      return [Math.cos(YY), 0, -Math.sin(YY)]
    }

    function Dr(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: JY,
        pitch: MY
      };
      const AY = [YY.max[0] - YY.min[0], YY.max[1] - YY.min[1], YY.max[2] - YY.min[2]],
        IY = Yr(FY),
        RY = rr(FY.heading),
        OY = ar(IY, RY),
        gY = Math.tan(DY / 2),
        aY = gY * rY;
      let vY = 1;
      for (const uY of [-AY[0] / 2, AY[0] / 2])
        for (const YY of [-AY[1] / 2, AY[1] / 2])
          for (const rY of [-AY[2] / 2, AY[2] / 2]) {
            const DY = [uY, YY, rY],
              FY = gr(DY, IY);
            vY = Math.max(vY, Math.abs(gr(DY, RY)) / aY - FY, Math.abs(gr(DY, OY)) / gY - FY)
          }
      return {
        position: Rr([YY.min[0] + AY[0] / 2, YY.min[1] + AY[1] / 2, YY.min[2] + AY[2] / 2], Or(IY, -vY * wY)),
        heading: FY.heading,
        pitch: FY.pitch
      }
    }

    function Fr(YY, rY, DY) {
      const FY = Ir(YY),
        AY = Ir(DY),
        IY = Rr(YY.position, Or(rY, -1)),
        RY = [0, 1, 2].reduce(((YY, rY) => Rr(YY, Or(AY[rY], gr(IY, FY[rY])))), [0, 0, 0]);
      return {
        position: Rr(rY, RY),
        heading: DY.heading,
        pitch: DY.pitch
      }
    }

    function Ar(YY) {
      return Or(Rr(YY.min, YY.max), .5)
    }

    function Ir(YY) {
      const rY = Yr(YY),
        DY = rr(YY.heading);
      return [rY, DY, ar(rY, DY)]
    }

    function Rr(YY, rY) {
      return [YY[0] + rY[0], YY[1] + rY[1], YY[2] + rY[2]]
    }

    function Or(YY, rY) {
      return [YY[0] * rY, YY[1] * rY, YY[2] * rY]
    }

    function gr(YY, rY) {
      return YY[0] * rY[0] + YY[1] * rY[1] + YY[2] * rY[2]
    }

    function ar(YY, rY) {
      return [YY[1] * rY[2] - YY[2] * rY[1], YY[2] * rY[0] - YY[0] * rY[2], YY[0] * rY[1] - YY[1] * rY[0]]
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);