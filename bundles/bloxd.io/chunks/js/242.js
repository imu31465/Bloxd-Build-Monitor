export const id = 242;
export const ids = [242];
export const modules = {
  39787: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => Vd
    });
    kd(6326);
    var pd = kd(56),
      Nd = kd(39791),
      Wd = kd(40054),
      Pd = kd(40189),
      Zd = kd(40226),
      gd = kd(40251),
      Cd = kd(37438),
      Kd = kd(37245),
      od = kd(40388),
      ld = kd(40444),
      Qd = (kd(40475), kd(1245)),
      Ld = kd(193),
      Od = kd(1211),
      ed = kd(22),
      Rd = kd(2615),
      Id = kd(1461),
      Gd = kd(1059),
      vd = kd(6319),
      xd = kd(6331),
      qd = kd(4292),
      Bd = kd(1103);
    const sd = 1.2,
      ad = .2,
      Md = .0066 * Math.PI / 180,
      Fd = new Set(["Escape", "KeyG"]),
      Yd = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      md = "ArrowUp",
      bd = new Set([...Object.keys(Yd), md, "ArrowDown"]),
      Sd = 32,
      jd = 1,
      Xd = 10,
      fd = "F4",
      nd = "Period",
      Ud = Math.PI / 2 - .001,
      yd = Math.PI / 6,
      Dd = Math.PI / 6,
      Td = 1.08,
      Ed = [{
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
      cd = 24,
      hd = 7,
      rd = 4,
      ud = .01,
      td = 4;

    function Vd(dd) {
      let {
        heatmap: Jd,
        scale: kd,
        fullyOpaqueFrom: jd,
        bounds: yd,
        fitBounds: Dd,
        schematic: Td,
        controls: Ed,
        onStepTime: cd,
        onShowAllTime: hd,
        onTogglePlaying: rd,
        getReadout: td = null
      } = dd;
      const {
        t: Vd
      } = (0, Od.B)(), {
        clientEscMenuOptions: PJ
      } = (0, ed.j)(["clientEscMenuOptions"]), CJ = (0, pd.useRef)(null), KJ = (0, pd.useRef)(null), oJ = (0, pd.useRef)(null), lJ = (0, Rd.c)(CJ), [QJ, LJ] = (0, pd.useState)(!1), [OJ, eJ] = (0, pd.useState)(!1), [RJ, IJ] = (0, pd.useState)(!0), GJ = (0, pd.useRef)(!1), [vJ, xJ] = (0, pd.useState)(!1), qJ = OJ || !RJ && vJ, [BJ, sJ] = (0, pd.useState)(!1), [iJ, aJ] = (0, pd.useState)(!0), [MJ, FJ] = (0, pd.useState)(null), YJ = yd.min, [mJ, bJ] = (0, pd.useState)(YJ);
      mJ[0] === YJ[0] && mJ[1] === YJ[1] && mJ[2] === YJ[2] || (bJ(YJ), null !== MJ && FJ({
        ...MJ,
        position: ZJ(MJ.position, ZJ(mJ, gJ(YJ, -1)))
      }));
      const SJ = (0, pd.useMemo)((() => function(dd) {
          return [dd.max[0] - dd.min[0] + 1, dd.max[1] - dd.min[1] + 1, dd.max[2] - dd.min[2] + 1]
        }(yd)), [yd]),
        jJ = (0, pd.useMemo)((() => function(dd, Jd) {
          const kd = [],
            pd = [];
          for (const [Nd, Wd] of Object.entries(dd.frequencies)) {
            const dd = Number(Nd);
            for (const [Nd, Pd] of Object.entries(Wd)) {
              const Wd = Number(Nd);
              for (const [Nd, Zd] of Object.entries(Pd)) Zd <= 0 || (kd.push(dd - Jd[0], Wd - Jd[1], Number(Nd) - Jd[2]), pd.push(Zd))
            }
          }
          return {
            positions: Int32Array.from(kd),
            values: Float64Array.from(pd),
            count: pd.length
          }
        }(Jd, YJ)), [Jd, YJ]),
        XJ = sd * PJ.cameraFOV / 100,
        fJ = lJ.height > 0 ? lJ.width / lJ.height : 1,
        nJ = (0, pd.useMemo)((() => function(dd, Jd) {
          return {
            min: [dd.min[0] - Jd[0], dd.min[1] - Jd[1], dd.min[2] - Jd[2]],
            max: [dd.max[0] - Jd[0] + 1, dd.max[1] - Jd[1] + 1, dd.max[2] - Jd[2] + 1]
          }
        }(Dd, YJ)), [Dd, YJ]),
        UJ = pJ(nJ, fJ, XJ),
        yJ = null !== MJ && void 0 !== MJ ? MJ : UJ,
        DJ = (0, pd.useRef)({
          fittedView: UJ,
          fieldOfView: XJ,
          mouseSensitivity: PJ.mouseSensitivity,
          canLock: RJ
        });
      DJ.current = {
        fittedView: UJ,
        fieldOfView: XJ,
        mouseSensitivity: PJ.mouseSensitivity,
        canLock: RJ
      };
      const TJ = (0, pd.useMemo)((() => {
          if (!qJ) return null;
          const dd = (dd, kd, pd) => {
              var Nd, Wd, Pd;
              return null !== (Nd = null === (Wd = Jd.frequencies[dd + YJ[0]]) || void 0 === Wd || null === (Pd = Wd[kd + YJ[1]]) || void 0 === Pd ? void 0 : Pd[pd + YJ[2]]) && void 0 !== Nd ? Nd : 0
            },
            pd = function(dd, Jd, kd, pd) {
              let Nd = 0,
                Wd = 1 / 0;
              for (const od of [0, 1, 2]) {
                if (0 === Jd[od]) {
                  if (dd[od] < 0 || dd[od] > kd[od]) return null;
                  continue
                }
                const pd = (0 - dd[od]) / Jd[od],
                  Pd = (kd[od] - dd[od]) / Jd[od];
                Nd = Math.max(Nd, Math.min(pd, Pd)), Wd = Math.min(Wd, Math.max(pd, Pd))
              }
              if (Nd > Wd) return null;
              const Pd = [0, 1, 2].map((pd => Math.min(kd[pd] - 1, Math.max(0, Math.floor(dd[pd] + Jd[pd] * Nd))))),
                Zd = [0, 1, 2].map((dd => Math.sign(Jd[dd]))),
                gd = [0, 1, 2].map((kd => {
                  if (0 === Zd[kd]) return 1 / 0;
                  return ((Zd[kd] > 0 ? Pd[kd] + 1 : Pd[kd]) - dd[kd]) / Jd[kd]
                })),
                Cd = [0, 1, 2].map((dd => 0 === Zd[dd] ? 1 / 0 : Math.abs(1 / Jd[dd])));
              let Kd = null;
              for (;;) {
                const dd = pd(Pd[0], Pd[1], Pd[2]);
                if (dd >= 1) return Pd;
                dd > 0 && (Kd = [Pd[0], Pd[1], Pd[2]]);
                const Jd = gd[0] < gd[1] ? gd[0] < gd[2] ? 0 : 2 : gd[1] < gd[2] ? 1 : 2;
                if (gd[Jd] > Wd) return Kd;
                if (Pd[Jd] += Zd[Jd], gd[Jd] += Cd[Jd], Pd[Jd] < 0 || Pd[Jd] >= kd[Jd]) return Kd
              }
            }(yJ.position, JJ(yJ), SJ, ((Jd, pd, Nd) => (0, vd.u)(dd(Jd, pd, Nd), kd, jd)));
          return null === pd ? null : {
            x: pd[0] + YJ[0],
            y: pd[1] + YJ[1],
            z: pd[2] + YJ[2],
            value: dd(pd[0], pd[1], pd[2])
          }
        }), [qJ, Jd, YJ, yJ, SJ, kd, jd]),
        {
          keyHandlers: EJ
        } = (0, xd.g)({
          isEnabled: qJ,
          claimedKeyCodes: bd,
          gl: dd => {
            FJ((Jd => function(dd, Jd) {
              const kd = [Math.sin(dd.heading), 0, Math.cos(dd.heading)],
                pd = ZJ(ZJ(gJ(kd, Jd.forward), gJ(kJ(dd.heading), Jd.right)), [0, Jd.up, 0]);
              return {
                ...dd,
                position: ZJ(dd.position, pd)
              }
            }(null !== Jd && void 0 !== Jd ? Jd : DJ.current.fittedView, dd)))
          },
          onZoomChange: sJ
        });
      (0, pd.useEffect)((() => {
        const dd = KJ.current;
        if (!dd) return;
        let Jd;
        try {
          Jd = function(dd, Jd) {
            const kd = new Nd.b(dd, !0, {
                stencil: !1
              }, !0),
              pd = new Wd.e(kd),
              [Qd, Ld, Od] = vd.F;
            pd.clearColor = new Cd.c(Qd / 255, Ld / 255, Od / 255, 1);
            const ed = new Pd.e("Heatmap3DCamera", Kd.IL.Zero(), pd);
            ed.fov = Jd, ed.minZ = .05;
            const Rd = new Zd.c("Heatmap3DLight", new Kd.IL(.4, 1, -.6), pd);
            Rd.diffuse = Cd.Color3.White(), Rd.groundColor = Cd.Color3.Black(), Rd.specular = Cd.Color3.Black();
            const Id = new gd.StandardMaterial("Heatmap3DCellMaterial", pd);
            Id.diffuseColor = new Cd.Color3(.4, .4, .4), Id.emissiveColor = new Cd.Color3(.62, .62, .62), Id.specularColor = Cd.Color3.Black();
            const Gd = (0, od.e)("Heatmap3DCells", {
              size: 1
            }, pd);
            Gd.material = Id, Gd.iO = !1, Gd.RL = !0, Gd.isVisible = !1;
            const xd = (0, od.e)("Heatmap3DTranslucentCells", {
              size: 1
            }, pd);
            xd.material = Id, xd.hasVertexAlpha = !0, xd.iO = !1, xd.RL = !0, xd.isVisible = !1;
            const qd = new gd.StandardMaterial("Heatmap3DSchematicMaterial", pd);
            qd.diffuseColor = new Cd.Color3(.6, .6, .6), qd.emissiveColor = new Cd.Color3(.4, .4, .4), qd.specularColor = Cd.Color3.Black();
            const Bd = (0, od.e)("Heatmap3DSchematicBlocks", {
              size: 1
            }, pd);
            Bd.material = qd, Bd.iO = !1, Bd.RL = !0, Bd.isVisible = !1;
            const sd = (0, ld.b)("Heatmap3DTarget", {
              lines: dJ([-.52, -.52, -.52], [.52, .52, .52])
            }, pd);
            return sd.color = new Cd.Color3(.06, .14, .23), sd.renderingGroupId = 1, sd.iO = !1, sd.isVisible = !1, {
              engine: kd,
              BO: pd,
              camera: ed,
              cells: Gd,
              translucentCells: xd,
              translucent: {
                pg: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: Bd,
              targetOutline: sd,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: Jd,
              needsRender: !0
            }
          }(dd, DJ.current.fieldOfView)
        } catch (kd) {
          return console.error("Failed to start the 3D heatmap", kd), void LJ(!0)
        }
        return oJ.current = Jd, Jd.engine.runRenderLoop((() => {
          const dd = Jd.camera;
          dd.fov !== Jd.targetFieldOfView && (dd.fov += (Jd.targetFieldOfView - dd.fov) * (dd.fov > Jd.targetFieldOfView ? .3 : .2), Math.abs(Jd.targetFieldOfView - dd.fov) < 5e-4 && (dd.fov = Jd.targetFieldOfView), Jd.needsRender = !0), Jd.needsRender && (Jd.BO.render(), Jd.needsRender = !Jd.BO.isReady() || !Jd.engine.areAllEffectsReady())
        })), () => {
          oJ.current = null, Jd.engine.dispose()
        }
      }), []), (0, pd.useEffect)((() => {
        const dd = KJ.current;
        if (!dd) return;
        const Jd = () => {
            GJ.current = !1, eJ(document.pointerLockElement === dd)
          },
          kd = () => {
            GJ.current && (GJ.current = !1, IJ(!1))
          },
          pd = Jd => {
            const kd = !DJ.current.canLock && document.activeElement === dd && 0 !== (1 & Jd.buttons);
            if (document.pointerLockElement !== dd && !kd) return;
            const pd = DJ.current.mouseSensitivity * Md;
            FJ((dd => function(dd, Jd, kd) {
              const pd = 2 * Math.PI;
              return {
                ...dd,
                heading: ((dd.heading + Jd) % pd + pd) % pd,
                pitch: Math.max(-Ud, Math.min(Ud, dd.pitch + kd))
              }
            }(null !== dd && void 0 !== dd ? dd : DJ.current.fittedView, Jd.movementX * pd, Jd.movementY * pd)))
          };
        return document.addEventListener("pointerlockchange", Jd), document.addEventListener("pointerlockerror", kd), document.addEventListener("pointermove", pd), () => {
          document.removeEventListener("pointerlockchange", Jd), document.removeEventListener("pointerlockerror", kd), document.removeEventListener("pointermove", pd), document.pointerLockElement === dd && (0, qd.c)()
        }
      }), []), (0, pd.useEffect)((() => {
        const dd = oJ.current;
        null !== dd && 0 !== lJ.width && 0 !== lJ.height && (dd.engine.resize(), dd.needsRender = !0)
      }), [lJ.width, lJ.height]), (0, pd.useEffect)((() => {
        const dd = oJ.current;
        null !== dd && (dd.targetFieldOfView = XJ * (BJ ? ad : 1))
      }), [XJ, BJ]), (0, pd.useEffect)((() => {
        const dd = oJ.current;
        null !== dd && function(dd, Jd, kd, pd) {
          const Nd = [],
            Wd = [],
            Pd = [],
            Zd = [];
          for (let gd = 0; gd < Jd.count; gd++) {
            const dd = Jd.values[gd],
              Cd = (0, vd.u)(dd, kd, pd);
            if (Cd <= 0) continue;
            const [Kd, od, ld] = (0, vd.o)((0, vd.A)(dd, kd)), Qd = Cd >= 1;
            (Qd ? Nd : Pd).push(Jd.positions[3 * gd] + .5, Jd.positions[3 * gd + 1] + .5, Jd.positions[3 * gd + 2] + .5), (Qd ? Wd : Zd).push(Kd / 255, od / 255, ld / 255, Cd)
          }
          wd(dd.cells, Float32Array.from(Nd), Float32Array.from(Wd), Wd.length / 4), dd.translucent = {
            pg: Float32Array.from(Pd),
            colours: Float32Array.from(Zd),
            count: Zd.length / 4
          }, dd.translucentSortedFrom = null, Ad(dd), dd.needsRender = !0
        }(dd, jJ, kd, jd)
      }), [jJ, kd, jd]), (0, pd.useEffect)((() => {
        const dd = oJ.current;
        null !== dd && function(dd, Jd) {
          dd.chunkGridOrigin = Jd, dd.chunkGridCentre = null, Hd(dd)
        }(dd, yd.min)
      }), [yd]), (0, pd.useEffect)((() => {
        const dd = oJ.current;
        null !== dd && function(dd, Jd, kd) {
          const pd = [],
            Nd = [];
          if (null !== Jd) {
            const {
              positions: dd,
              colours: Wd,
              count: Pd
            } = Jd.surface;
            for (let Jd = 0; Jd < Pd; Jd++) {
              const Pd = [dd[3 * Jd], dd[3 * Jd + 1], dd[3 * Jd + 2]];
              [0, 1, 2].every((dd => Pd[dd] >= kd.min[dd] - Sd && Pd[dd] <= kd.max[dd] + Sd)) && (pd.push(Pd[0] - kd.min[0] + .5, Pd[1] - kd.min[1] + .5, Pd[2] - kd.min[2] + .5), Nd.push(Wd[3 * Jd] / 255, Wd[3 * Jd + 1] / 255, Wd[3 * Jd + 2] / 255, 1))
            }
          }
          wd(dd.schematicBlocks, Float32Array.from(pd), Float32Array.from(Nd), Nd.length / 4), dd.needsRender = !0
        }(dd, Td, yd)
      }), [Td, yd]), (0, pd.useEffect)((() => {
        const dd = oJ.current;
        null !== dd && null !== dd.chunkGrid && (dd.chunkGrid.isVisible = iJ, dd.needsRender = !0)
      }), [iJ, yd]), (0, pd.useEffect)((() => {
        const dd = oJ.current;
        null !== dd && function(dd, Jd, kd) {
          const {
            camera: pd
          } = dd;
          pd.position.set(Jd.position[0], Jd.position[1], Jd.position[2]), pd.rotation.set(Jd.pitch, Jd.heading, 0);
          const Nd = (Xd + 1) * Ld.g.KL * Math.sqrt(3);
          pd.maxZ = Math.max(Nd, Math.hypot(...ZJ(Jd.position, gJ(WJ({
            min: [0, 0, 0],
            max: kd
          }), -1))) + 2 * Math.hypot(...kd)), Hd(dd), Ad(dd), dd.needsRender = !0
        }(dd, yJ, SJ)
      }), [yJ, SJ]), (0, pd.useEffect)((() => {
        const dd = oJ.current;
        null !== dd && (dd.targetOutline.isVisible = null !== TJ, null !== TJ && dd.targetOutline.position.set(TJ.x - YJ[0] + .5, TJ.y - YJ[1] + .5, TJ.z - YJ[2] + .5), dd.needsRender = !0)
      }), [TJ, YJ]);
      return (0, Bd.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: CJ,
        children: [(0, Bd.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: KJ,
          style: {
            width: `${lJ.width}px`,
            height: `${lJ.height}px`
          },
          tabIndex: 0,
          "aria-label": Vd("3D heatmap"),
          onClick: () => {
            const dd = KJ.current;
            if (null === dd) return;
            if (dd.focus({
                preventScroll: !0
              }), OJ || !RJ) return;
            const Jd = dd.requestPointerLock();
            Jd instanceof Promise ? Jd.catch((dd => {
              dd instanceof DOMException && ("WrongDocumentError" === dd.name || "NotSupportedError" === dd.name) && IJ(!1)
            })) : GJ.current = !0
          },
          ...EJ,
          onKeyDown: dd => {
            if (qJ && Fd.has(dd.code)) return dd.preventDefault(), void(() => {
              const dd = KJ.current;
              null !== dd && document.pointerLockElement === dd ? (0, qd.c)() : null === dd || void 0 === dd || dd.blur()
            })();
            const Jd = Yd[dd.code];
            return qJ && void 0 !== Jd ? (dd.preventDefault(), void cd(Jd)) : qJ && (0, xd.c)("replayPlayPause", dd.code) && !(0, xd.c)("Zoom", dd.code) ? (dd.preventDefault(), void(dd.repeat || rd())) : qJ && dd.code === md ? (dd.preventDefault(), void hd()) : qJ && dd.code === nd ? (dd.preventDefault(), void FJ(null)) : qJ && dd.code === fd ? (dd.preventDefault(), void aJ((dd => !dd))) : void EJ.onKeyDown(dd)
          },
          onFocus: () => {
            xJ(!0)
          },
          onBlur: () => {
            xJ(!1), EJ.onBlur()
          }
        }), QJ && (0, Bd.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: Vd("3D view isn't available in this browser.")
        }), qJ && (0, Bd.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, Bd.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: yJ.position.map(((dd, Jd) => (dd + YJ[Jd]).toFixed(2))).join(" ")
        }), iJ && (0, Bd.jsx)(zd, {
          heading: yJ.heading,
          pitch: yJ.pitch,
          onViewFrom: dd => {
            const Jd = gJ(dd, -1),
              kd = 0 === Jd[1] ? {
                heading: Math.atan2(Jd[0], Jd[2]),
                pitch: 0
              } : {
                heading: yJ.heading,
                pitch: Jd[1] < 0 ? Ud : -Ud
              };
            FJ(pJ(nJ, fJ, XJ, kd))
          },
          onTurn: (dd, Jd) => {
            FJ((kd => function(dd, Jd, kd, pd) {
              return NJ(dd, Jd, {
                heading: dd.heading + kd * ud,
                pitch: Math.max(-Ud, Math.min(Ud, dd.pitch + pd * ud))
              })
            }(null !== kd && void 0 !== kd ? kd : DJ.current.fittedView, WJ(nJ), dd, Jd)))
          },
          onFlip: () => {
            FJ((dd => function(dd, Jd) {
              return NJ(dd, Jd, {
                heading: dd.heading + Math.PI,
                pitch: -dd.pitch
              })
            }(null !== dd && void 0 !== dd ? dd : DJ.current.fittedView, WJ(nJ))))
          }
        }), null !== TJ && (0, Bd.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === td ? Vd("studio:heatmapBlockReadout", {
            x: TJ.x,
            y: TJ.y,
            z: TJ.z,
            count: (0, Qd.Q)(TJ.value)
          }) : td(TJ.x, TJ.y, TJ.z, TJ.value)
        }), (0, Bd.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [Ed, (0, Bd.jsx)(Id.G, {
            active: null === MJ,
            onClick: () => {
              FJ(null)
            },
            children: (0, Bd.jsx)(Gd.e, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function zd(dd) {
      let {
        heading: Jd,
        pitch: kd,
        onViewFrom: Nd,
        onTurn: Wd,
        onFlip: Pd
      } = dd;
      const {
        t: Zd
      } = (0, Od.B)(), gd = (0, pd.useRef)(null), Cd = JJ({
        heading: Jd,
        pitch: kd
      }), Kd = kJ(Jd), od = KJ(Cd, Kd), ld = cd + hd + 2, Qd = Ed.flatMap((dd => [1, -1].map((Jd => {
        const kd = gJ(dd.direction, Jd);
        return {
          ...dd,
          sign: Jd,
          direction: kd,
          endX: ld + CJ(kd, Kd) * cd,
          endY: ld - CJ(kd, od) * cd,
          depth: CJ(kd, Cd)
        }
      })))).sort(((dd, Jd) => Jd.depth - dd.depth));
      return (0, Bd.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * ld,
        height: 2 * ld,
        "aria-hidden": !0,
        onPointerDown: dd => {
          var Jd, kd;
          dd.currentTarget.setPointerCapture(dd.pointerId);
          const pd = dd.target,
            Nd = pd.getAttribute("data-end");
          gd.current = {
            pointerId: dd.pointerId,
            x: dd.clientX,
            y: dd.clientY,
            travel: 0,
            side: null === Nd ? null : null !== (Jd = null === (kd = Qd[Number(Nd)]) || void 0 === kd ? void 0 : kd.direction) && void 0 !== Jd ? Jd : null,
            isOnMiddle: pd.hasAttribute("data-middle")
          }
        },
        onPointerMove: dd => {
          const Jd = gd.current;
          if (null === Jd || Jd.pointerId !== dd.pointerId) return;
          const kd = dd.clientX - Jd.x,
            pd = dd.clientY - Jd.y;
          Jd.x = dd.clientX, Jd.y = dd.clientY, Jd.travel += Math.abs(kd) + Math.abs(pd), Jd.travel >= td && Wd(kd, pd)
        },
        onPointerUp: dd => {
          const Jd = gd.current;
          gd.current = null, null === Jd || Jd.pointerId !== dd.pointerId || Jd.travel >= td || (null !== Jd.side ? Nd(Jd.side) : Jd.isOnMiddle && Pd())
        },
        onPointerCancel: () => {
          gd.current = null
        },
        children: [Qd.map(((dd, Jd) => {
          const kd = dd.sign > 0;
          return (0, Bd.jsxs)("g", {
            children: [(0, Bd.jsx)("line", {
              x1: ld,
              y1: ld,
              x2: dd.endX,
              y2: dd.endY,
              stroke: dd.colour,
              strokeOpacity: kd ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, Bd.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": Jd,
              cx: dd.endX,
              cy: dd.endY,
              r: kd ? hd : hd - 1,
              fill: dd.colour,
              fillOpacity: kd ? 1 : .3,
              stroke: dd.colour,
              strokeWidth: kd ? 0 : 1.5,
              children: (0, Bd.jsx)("title", {
                children: `${Zd("View from")} ${kd?"+":"\u2212"}${dd.name}`
              })
            }), kd && (0, Bd.jsx)("text", {
              pointerEvents: "none",
              x: dd.endX,
              y: dd.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: dd.name
            })]
          }, `${kd?"+":"-"}${dd.name}`)
        })), (0, Bd.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: ld,
          cy: ld,
          r: rd,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, Bd.jsx)("title", {
            children: Zd("View from the opposite side")
          })
        })]
      })
    }

    function Hd(dd) {
      var Jd, kd, pd;
      const {
        chunkGridOrigin: Nd,
        camera: Wd
      } = dd;
      if (null === Nd) return;
      const Pd = [Wd.position.x, Wd.position.y, Wd.position.z],
        Zd = [0, 2].map((dd => Math.floor((Pd[dd] + Nd[dd]) / Ld.g.KL))),
        gd = dd.chunkGridCentre;
      if (null !== gd && gd.every(((dd, Jd) => dd === Zd[Jd]))) return;
      const od = null === (Jd = null === (kd = dd.chunkGrid) || void 0 === kd ? void 0 : kd.isVisible) || void 0 === Jd || Jd;
      null === (pd = dd.chunkGrid) || void 0 === pd || pd.dispose();
      const [Qd, Od] = [0, 2].map(((dd, Jd) => {
        const kd = [];
        for (let pd = Zd[Jd] - Xd; pd <= Zd[Jd] + Xd + 1; pd++) kd.push(pd * Ld.g.KL - Nd[dd]);
        return kd
      })), ed = -Nd[1], Rd = [];
      for (const Cd of Od) Rd.push([new Kd.IL(Qd[0], ed, Cd), new Kd.IL(Qd[Qd.length - 1], ed, Cd)]);
      for (const Cd of Qd) Rd.push([new Kd.IL(Cd, ed, Od[0]), new Kd.IL(Cd, ed, Od[Od.length - 1])]);
      const Id = (0, ld.b)("Heatmap3DChunkGrid", {
        lines: Rd
      }, dd.BO);
      Id.color = new Cd.Color3(.45, .6, .78), Id.iO = !1, Id.isVisible = od, dd.chunkGrid = Id, dd.chunkGridCentre = Zd, dd.needsRender = !0
    }

    function wd(dd, Jd, kd, pd) {
      dd.i6("matrix", function(dd, Jd) {
        const kd = new Float32Array(16 * Jd);
        for (let pd = 0; pd < Jd; pd++) {
          const Jd = 16 * pd;
          kd[Jd] = 1, kd[Jd + 5] = 1, kd[Jd + 10] = 1, kd[Jd + 12] = dd[3 * pd], kd[Jd + 13] = dd[3 * pd + 1], kd[Jd + 14] = dd[3 * pd + 2], kd[Jd + 15] = 1
        }
        return kd
      }(Jd, pd), 16, !0), dd.i6("color", kd, 4, !0), dd.isVisible = pd > 0
    }

    function Ad(dd) {
      const {
        camera: Jd,
        translucent: kd
      } = dd, pd = [Jd.position.x, Jd.position.y, Jd.position.z], Nd = dd.translucentSortedFrom;
      if (null !== Nd && Math.hypot(pd[0] - Nd[0], pd[1] - Nd[1], pd[2] - Nd[2]) < jd) return;
      dd.translucentSortedFrom = pd;
      const Wd = new Float64Array(kd.count),
        Pd = new Uint32Array(kd.count);
      for (let Cd = 0; Cd < kd.count; Cd++) {
        const dd = kd.pg[3 * Cd] - pd[0],
          Jd = kd.pg[3 * Cd + 1] - pd[1],
          Nd = kd.pg[3 * Cd + 2] - pd[2];
        Wd[Cd] = dd * dd + Jd * Jd + Nd * Nd, Pd[Cd] = Cd
      }
      Pd.sort(((dd, Jd) => Wd[Jd] - Wd[dd]));
      const Zd = new Float32Array(3 * kd.count),
        gd = new Float32Array(4 * kd.count);
      Pd.forEach(((dd, Jd) => {
        Zd.set(kd.pg.subarray(3 * dd, 3 * dd + 3), 3 * Jd), gd.set(kd.colours.subarray(4 * dd, 4 * dd + 4), 4 * Jd)
      })), wd(dd.translucentCells, Zd, gd, kd.count), dd.needsRender = !0
    }

    function dJ(dd, Jd) {
      const kd = (kd, pd, Nd) => new Kd.IL(0 === kd ? dd[0] : Jd[0], 0 === pd ? dd[1] : Jd[1], 0 === Nd ? dd[2] : Jd[2]),
        pd = [];
      for (const Nd of [0, 1])
        for (const dd of [0, 1]) pd.push([kd(0, Nd, dd), kd(1, Nd, dd)], [kd(Nd, 0, dd), kd(Nd, 1, dd)], [kd(Nd, dd, 0), kd(Nd, dd, 1)]);
      return pd
    }

    function JJ(dd) {
      return [Math.sin(dd.heading) * Math.cos(dd.pitch), -Math.sin(dd.pitch), Math.cos(dd.heading) * Math.cos(dd.pitch)]
    }

    function kJ(dd) {
      return [Math.cos(dd), 0, -Math.sin(dd)]
    }

    function pJ(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: yd,
        pitch: Dd
      };
      const Nd = [dd.max[0] - dd.min[0], dd.max[1] - dd.min[1], dd.max[2] - dd.min[2]],
        Wd = JJ(pd),
        Pd = kJ(pd.heading),
        Zd = KJ(Wd, Pd),
        gd = Math.tan(kd / 2),
        Cd = gd * Jd;
      let Kd = 1;
      for (const od of [-Nd[0] / 2, Nd[0] / 2])
        for (const dd of [-Nd[1] / 2, Nd[1] / 2])
          for (const Jd of [-Nd[2] / 2, Nd[2] / 2]) {
            const kd = [od, dd, Jd],
              pd = CJ(kd, Wd);
            Kd = Math.max(Kd, Math.abs(CJ(kd, Pd)) / Cd - pd, Math.abs(CJ(kd, Zd)) / gd - pd)
          }
      return {
        position: ZJ([dd.min[0] + Nd[0] / 2, dd.min[1] + Nd[1] / 2, dd.min[2] + Nd[2] / 2], gJ(Wd, -Kd * Td)),
        heading: pd.heading,
        pitch: pd.pitch
      }
    }

    function NJ(dd, Jd, kd) {
      const pd = PJ(dd),
        Nd = PJ(kd),
        Wd = ZJ(dd.position, gJ(Jd, -1)),
        Pd = [0, 1, 2].reduce(((dd, Jd) => ZJ(dd, gJ(Nd[Jd], CJ(Wd, pd[Jd])))), [0, 0, 0]);
      return {
        position: ZJ(Jd, Pd),
        heading: kd.heading,
        pitch: kd.pitch
      }
    }

    function WJ(dd) {
      return gJ(ZJ(dd.min, dd.max), .5)
    }

    function PJ(dd) {
      const Jd = JJ(dd),
        kd = kJ(dd.heading);
      return [Jd, kd, KJ(Jd, kd)]
    }

    function ZJ(dd, Jd) {
      return [dd[0] + Jd[0], dd[1] + Jd[1], dd[2] + Jd[2]]
    }

    function gJ(dd, Jd) {
      return [dd[0] * Jd, dd[1] * Jd, dd[2] * Jd]
    }

    function CJ(dd, Jd) {
      return dd[0] * Jd[0] + dd[1] * Jd[1] + dd[2] * Jd[2]
    }

    function KJ(dd, Jd) {
      return [dd[1] * Jd[2] - dd[2] * Jd[1], dd[2] * Jd[0] - dd[0] * Jd[2], dd[0] * Jd[1] - dd[1] * Jd[0]]
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);