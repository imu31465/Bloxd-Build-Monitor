export const id = 226;
export const ids = [226];
export const modules = {
  37880: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      default: () => iB
    });
    nc(5436);
    var Vc = nc(73),
      Ic = nc(37884),
      rB = nc(38137),
      uc = nc(38237),
      sc = nc(38282),
      Mc = nc(38294),
      Pc = nc(35808),
      qB = nc(35753),
      Oc = nc(38418),
      Tc = nc(38467),
      fc = (nc(38497), nc(1090)),
      mB = nc(174),
      ec = nc(1051),
      tB = nc(27),
      Sc = nc(2175),
      yB = nc(1255),
      zB = nc(926),
      pc = nc(5431),
      hc = nc(5440),
      aB = nc(3571),
      lc = nc(957);
    const Yc = 1.2,
      Lc = .2,
      gB = .0066 * Math.PI / 180,
      Uc = new Set(["Escape", "KeyG"]),
      bB = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      Zc = "ArrowUp",
      Qc = new Set([...Object.keys(bB), Zc, "ArrowDown"]),
      Cc = 32,
      vB = 1,
      Dc = 10,
      Nc = "F4",
      Ec = "Period",
      oc = Math.PI / 2 - .001,
      Wc = Math.PI / 6,
      wc = Math.PI / 6,
      kB = 1.08,
      Xc = [{
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
      Hc = 24,
      Fc = 7,
      Jc = 4,
      jB = .01,
      Rc = 4;

    function iB(cB) {
      let {
        heatmap: Bc,
        scale: nc,
        fullyOpaqueFrom: vB,
        bounds: Wc,
        fitBounds: wc,
        schematic: kB,
        controls: Xc,
        onStepTime: Hc,
        onShowAllTime: Fc,
        onTogglePlaying: Jc,
        getReadout: Rc = null
      } = cB;
      const {
        t: iB
      } = (0, ec.x)(), {
        clientEscMenuOptions: rn
      } = (0, tB.j)(["clientEscMenuOptions"]), MB = (0, Vc.useRef)(null), PB = (0, Vc.useRef)(null), qn = (0, Vc.useRef)(null), OB = (0, Sc.c)(MB), [TB, fB] = (0, Vc.useState)(!1), [mn, eB] = (0, Vc.useState)(!1), [tn, SB] = (0, Vc.useState)(!0), yn = (0, Vc.useRef)(!1), [zn, pB] = (0, Vc.useState)(!1), hB = mn || !tn && zn, [an, lB] = (0, Vc.useState)(!1), [YB, LB] = (0, Vc.useState)(!0), [gn, UB] = (0, Vc.useState)(null), bn = Wc.min, [ZB, QB] = (0, Vc.useState)(bn);
      ZB[0] === bn[0] && ZB[1] === bn[1] && ZB[2] === bn[2] || (QB(bn), null !== gn && UB({
        ...gn,
        position: uB(gn.position, uB(ZB, sB(bn, -1)))
      }));
      const CB = (0, Vc.useMemo)((() => function(cB) {
          return [cB.max[0] - cB.min[0] + 1, cB.max[1] - cB.min[1] + 1, cB.max[2] - cB.min[2] + 1]
        }(Wc)), [Wc]),
        vn = (0, Vc.useMemo)((() => function(cB, Bc) {
          const nc = [],
            Vc = [];
          for (const [Ic, rB] of Object.entries(cB.frequencies)) {
            const cB = Number(Ic);
            for (const [Ic, uc] of Object.entries(rB)) {
              const rB = Number(Ic);
              for (const [Ic, sc] of Object.entries(uc)) sc <= 0 || (nc.push(cB - Bc[0], rB - Bc[1], Number(Ic) - Bc[2]), Vc.push(sc))
            }
          }
          return {
            positions: Int32Array.from(nc),
            values: Float64Array.from(Vc),
            count: Vc.length
          }
        }(Bc, bn)), [Bc, bn]),
        DB = Yc * rn.cameraFOV / 100,
        NB = OB.height > 0 ? OB.width / OB.height : 1,
        EB = (0, Vc.useMemo)((() => function(cB, Bc) {
          return {
            min: [cB.min[0] - Bc[0], cB.min[1] - Bc[1], cB.min[2] - Bc[2]],
            max: [cB.max[0] - Bc[0] + 1, cB.max[1] - Bc[1] + 1, cB.max[2] - Bc[2] + 1]
          }
        }(wc, bn)), [wc, bn]),
        oB = nB(EB, NB, DB),
        WB = null !== gn && void 0 !== gn ? gn : oB,
        wB = (0, Vc.useRef)({
          fittedView: oB,
          fieldOfView: DB,
          mouseSensitivity: rn.mouseSensitivity,
          canLock: tn
        });
      wB.current = {
        fittedView: oB,
        fieldOfView: DB,
        mouseSensitivity: rn.mouseSensitivity,
        canLock: tn
      };
      const kn = (0, Vc.useMemo)((() => {
          if (!hB) return null;
          const cB = (cB, nc, Vc) => {
              var Ic, rB, uc;
              return null !== (Ic = null === (rB = Bc.frequencies[cB + bn[0]]) || void 0 === rB || null === (uc = rB[nc + bn[1]]) || void 0 === uc ? void 0 : uc[Vc + bn[2]]) && void 0 !== Ic ? Ic : 0
            },
            Vc = function(cB, Bc, nc, Vc) {
              let Ic = 0,
                rB = 1 / 0;
              for (const Oc of [0, 1, 2]) {
                if (0 === Bc[Oc]) {
                  if (cB[Oc] < 0 || cB[Oc] > nc[Oc]) return null;
                  continue
                }
                const Vc = (0 - cB[Oc]) / Bc[Oc],
                  uc = (nc[Oc] - cB[Oc]) / Bc[Oc];
                Ic = Math.max(Ic, Math.min(Vc, uc)), rB = Math.min(rB, Math.max(Vc, uc))
              }
              if (Ic > rB) return null;
              const uc = [0, 1, 2].map((Vc => Math.min(nc[Vc] - 1, Math.max(0, Math.floor(cB[Vc] + Bc[Vc] * Ic))))),
                sc = [0, 1, 2].map((cB => Math.sign(Bc[cB]))),
                Mc = [0, 1, 2].map((nc => {
                  if (0 === sc[nc]) return 1 / 0;
                  return ((sc[nc] > 0 ? uc[nc] + 1 : uc[nc]) - cB[nc]) / Bc[nc]
                })),
                Pc = [0, 1, 2].map((cB => 0 === sc[cB] ? 1 / 0 : Math.abs(1 / Bc[cB])));
              let qB = null;
              for (;;) {
                const cB = Vc(uc[0], uc[1], uc[2]);
                if (cB >= 1) return uc;
                cB > 0 && (qB = [uc[0], uc[1], uc[2]]);
                const Bc = Mc[0] < Mc[1] ? Mc[0] < Mc[2] ? 0 : 2 : Mc[1] < Mc[2] ? 1 : 2;
                if (Mc[Bc] > rB) return qB;
                if (uc[Bc] += sc[Bc], Mc[Bc] += Pc[Bc], uc[Bc] < 0 || uc[Bc] >= nc[Bc]) return qB
              }
            }(WB.position, cn(WB), CB, ((Bc, Vc, Ic) => (0, pc.s)(cB(Bc, Vc, Ic), nc, vB)));
          return null === Vc ? null : {
            x: Vc[0] + bn[0],
            y: Vc[1] + bn[1],
            z: Vc[2] + bn[2],
            value: cB(Vc[0], Vc[1], Vc[2])
          }
        }), [hB, Bc, bn, WB, CB, nc, vB]),
        {
          keyHandlers: XB
        } = (0, hc.h)({
          isEnabled: hB,
          claimedKeyCodes: Qc,
          zn: cB => {
            UB((Bc => function(cB, Bc) {
              const nc = [Math.sin(cB.heading), 0, Math.cos(cB.heading)],
                Vc = uB(uB(sB(nc, Bc.forward), sB(BB(cB.heading), Bc.right)), [0, Bc.up, 0]);
              return {
                ...cB,
                position: uB(cB.position, Vc)
              }
            }(null !== Bc && void 0 !== Bc ? Bc : wB.current.fittedView, cB)))
          },
          onZoomChange: lB
        });
      (0, Vc.useEffect)((() => {
        const cB = PB.current;
        if (!cB) return;
        let Bc;
        try {
          Bc = function(cB, Bc) {
            const nc = new Ic.e(cB, !0, {
                stencil: !1
              }, !0),
              Vc = new rB.e(nc),
              [fc, mB, ec] = pc.L;
            Vc.clearColor = new Pc.c(fc / 255, mB / 255, ec / 255, 1);
            const tB = new uc.c("Heatmap3DCamera", qB.KV.Zero(), Vc);
            tB.fov = Bc, tB.minZ = .05;
            const Sc = new sc.c("Heatmap3DLight", new qB.KV(.4, 1, -.6), Vc);
            Sc.diffuse = Pc.Color3.White(), Sc.groundColor = Pc.Color3.Black(), Sc.specular = Pc.Color3.Black();
            const yB = new Mc.StandardMaterial("Heatmap3DCellMaterial", Vc);
            yB.diffuseColor = new Pc.Color3(.4, .4, .4), yB.emissiveColor = new Pc.Color3(.62, .62, .62), yB.specularColor = Pc.Color3.Black();
            const zB = (0, Oc.e)("Heatmap3DCells", {
              size: 1
            }, Vc);
            zB.material = yB, zB.ur = !1, zB.iI = !0, zB.isVisible = !1;
            const hc = (0, Oc.e)("Heatmap3DTranslucentCells", {
              size: 1
            }, Vc);
            hc.material = yB, hc.hasVertexAlpha = !0, hc.ur = !1, hc.iI = !0, hc.isVisible = !1;
            const aB = new Mc.StandardMaterial("Heatmap3DSchematicMaterial", Vc);
            aB.diffuseColor = new Pc.Color3(.6, .6, .6), aB.emissiveColor = new Pc.Color3(.4, .4, .4), aB.specularColor = Pc.Color3.Black();
            const lc = (0, Oc.e)("Heatmap3DSchematicBlocks", {
              size: 1
            }, Vc);
            lc.material = aB, lc.ur = !1, lc.iI = !0, lc.isVisible = !1;
            const Yc = (0, Tc.b)("Heatmap3DTarget", {
              lines: Gc([-.52, -.52, -.52], [.52, .52, .52])
            }, Vc);
            return Yc.color = new Pc.Color3(.06, .14, .23), Yc.renderingGroupId = 1, Yc.ur = !1, Yc.isVisible = !1, {
              engine: nc,
              Ir: Vc,
              camera: tB,
              cells: zB,
              translucentCells: hc,
              translucent: {
                Sr: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: lc,
              targetOutline: Yc,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: Bc,
              needsRender: !0
            }
          }(cB, wB.current.fieldOfView)
        } catch (nc) {
          return console.error("Failed to start the 3D heatmap", nc), void fB(!0)
        }
        return qn.current = Bc, Bc.engine.runRenderLoop((() => {
          const cB = Bc.camera;
          cB.fov !== Bc.targetFieldOfView && (cB.fov += (Bc.targetFieldOfView - cB.fov) * (cB.fov > Bc.targetFieldOfView ? .3 : .2), Math.abs(Bc.targetFieldOfView - cB.fov) < 5e-4 && (cB.fov = Bc.targetFieldOfView), Bc.needsRender = !0), Bc.needsRender && (Bc.Ir.render(), Bc.needsRender = !Bc.Ir.isReady() || !Bc.engine.areAllEffectsReady())
        })), () => {
          qn.current = null, Bc.engine.dispose()
        }
      }), []), (0, Vc.useEffect)((() => {
        const cB = PB.current;
        if (!cB) return;
        const Bc = () => {
            yn.current = !1, eB(document.pointerLockElement === cB)
          },
          nc = () => {
            yn.current && (yn.current = !1, SB(!1))
          },
          Vc = Bc => {
            const nc = !wB.current.canLock && document.activeElement === cB && 0 !== (1 & Bc.buttons);
            if (document.pointerLockElement !== cB && !nc) return;
            const Vc = wB.current.mouseSensitivity * gB;
            UB((cB => function(cB, Bc, nc) {
              const Vc = 2 * Math.PI;
              return {
                ...cB,
                heading: ((cB.heading + Bc) % Vc + Vc) % Vc,
                pitch: Math.max(-oc, Math.min(oc, cB.pitch + nc))
              }
            }(null !== cB && void 0 !== cB ? cB : wB.current.fittedView, Bc.movementX * Vc, Bc.movementY * Vc)))
          };
        return document.addEventListener("pointerlockchange", Bc), document.addEventListener("pointerlockerror", nc), document.addEventListener("pointermove", Vc), () => {
          document.removeEventListener("pointerlockchange", Bc), document.removeEventListener("pointerlockerror", nc), document.removeEventListener("pointermove", Vc), document.pointerLockElement === cB && (0, aB.e)()
        }
      }), []), (0, Vc.useEffect)((() => {
        const cB = qn.current;
        null !== cB && 0 !== OB.width && 0 !== OB.height && (cB.engine.resize(), cB.needsRender = !0)
      }), [OB.width, OB.height]), (0, Vc.useEffect)((() => {
        const cB = qn.current;
        null !== cB && (cB.targetFieldOfView = DB * (an ? Lc : 1))
      }), [DB, an]), (0, Vc.useEffect)((() => {
        const cB = qn.current;
        null !== cB && function(cB, Bc, nc, Vc) {
          const Ic = [],
            rB = [],
            uc = [],
            sc = [];
          for (let Mc = 0; Mc < Bc.count; Mc++) {
            const cB = Bc.values[Mc],
              Pc = (0, pc.s)(cB, nc, Vc);
            if (Pc <= 0) continue;
            const [qB, Oc, Tc] = (0, pc.m)((0, pc.C)(cB, nc)), fc = Pc >= 1;
            (fc ? Ic : uc).push(Bc.positions[3 * Mc] + .5, Bc.positions[3 * Mc + 1] + .5, Bc.positions[3 * Mc + 2] + .5), (fc ? rB : sc).push(qB / 255, Oc / 255, Tc / 255, Pc)
          }
          dc(cB.cells, Float32Array.from(Ic), Float32Array.from(rB), rB.length / 4), cB.translucent = {
            Sr: Float32Array.from(uc),
            colours: Float32Array.from(sc),
            count: sc.length / 4
          }, cB.translucentSortedFrom = null, Ac(cB), cB.needsRender = !0
        }(cB, vn, nc, vB)
      }), [vn, nc, vB]), (0, Vc.useEffect)((() => {
        const cB = qn.current;
        null !== cB && function(cB, Bc) {
          cB.chunkGridOrigin = Bc, cB.chunkGridCentre = null, xB(cB)
        }(cB, Wc.min)
      }), [Wc]), (0, Vc.useEffect)((() => {
        const cB = qn.current;
        null !== cB && function(cB, Bc, nc) {
          const Vc = [],
            Ic = [];
          if (null !== Bc) {
            const {
              positions: cB,
              colours: rB,
              count: uc
            } = Bc.surface;
            for (let Bc = 0; Bc < uc; Bc++) {
              const uc = [cB[3 * Bc], cB[3 * Bc + 1], cB[3 * Bc + 2]];
              [0, 1, 2].every((cB => uc[cB] >= nc.min[cB] - Cc && uc[cB] <= nc.max[cB] + Cc)) && (Vc.push(uc[0] - nc.min[0] + .5, uc[1] - nc.min[1] + .5, uc[2] - nc.min[2] + .5), Ic.push(rB[3 * Bc] / 255, rB[3 * Bc + 1] / 255, rB[3 * Bc + 2] / 255, 1))
            }
          }
          dc(cB.schematicBlocks, Float32Array.from(Vc), Float32Array.from(Ic), Ic.length / 4), cB.needsRender = !0
        }(cB, kB, Wc)
      }), [kB, Wc]), (0, Vc.useEffect)((() => {
        const cB = qn.current;
        null !== cB && null !== cB.chunkGrid && (cB.chunkGrid.isVisible = YB, cB.needsRender = !0)
      }), [YB, Wc]), (0, Vc.useEffect)((() => {
        const cB = qn.current;
        null !== cB && function(cB, Bc, nc) {
          const {
            camera: Vc
          } = cB;
          Vc.position.set(Bc.position[0], Bc.position[1], Bc.position[2]), Vc.rotation.set(Bc.pitch, Bc.heading, 0);
          const Ic = (Dc + 1) * mB.e.kI * Math.sqrt(3);
          Vc.maxZ = Math.max(Ic, Math.hypot(...uB(Bc.position, sB(IB({
            min: [0, 0, 0],
            max: nc
          }), -1))) + 2 * Math.hypot(...nc)), xB(cB), Ac(cB), cB.needsRender = !0
        }(cB, WB, CB)
      }), [WB, CB]), (0, Vc.useEffect)((() => {
        const cB = qn.current;
        null !== cB && (cB.targetOutline.isVisible = null !== kn, null !== kn && cB.targetOutline.position.set(kn.x - bn[0] + .5, kn.y - bn[1] + .5, kn.z - bn[2] + .5), cB.needsRender = !0)
      }), [kn, bn]);
      return (0, lc.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: MB,
        children: [(0, lc.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: PB,
          style: {
            width: `${OB.width}px`,
            height: `${OB.height}px`
          },
          tabIndex: 0,
          "aria-label": iB("3D heatmap"),
          onClick: () => {
            const cB = PB.current;
            if (null === cB) return;
            if (cB.focus({
                preventScroll: !0
              }), mn || !tn) return;
            const Bc = cB.requestPointerLock();
            Bc instanceof Promise ? Bc.catch((cB => {
              cB instanceof DOMException && ("WrongDocumentError" === cB.name || "NotSupportedError" === cB.name) && SB(!1)
            })) : yn.current = !0
          },
          ...XB,
          onKeyDown: cB => {
            if (hB && Uc.has(cB.code)) return cB.preventDefault(), void(() => {
              const cB = PB.current;
              null !== cB && document.pointerLockElement === cB ? (0, aB.e)() : null === cB || void 0 === cB || cB.blur()
            })();
            const Bc = bB[cB.code];
            return hB && void 0 !== Bc ? (cB.preventDefault(), void Hc(Bc)) : hB && (0, hc.d)("replayPlayPause", cB.code) && !(0, hc.d)("Zoom", cB.code) ? (cB.preventDefault(), void(cB.repeat || Jc())) : hB && cB.code === Zc ? (cB.preventDefault(), void Fc()) : hB && cB.code === Ec ? (cB.preventDefault(), void UB(null)) : hB && cB.code === Nc ? (cB.preventDefault(), void LB((cB => !cB))) : void XB.onKeyDown(cB)
          },
          onFocus: () => {
            pB(!0)
          },
          onBlur: () => {
            pB(!1), XB.onBlur()
          }
        }), TB && (0, lc.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: iB("3D view isn't available in this browser.")
        }), hB && (0, lc.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, lc.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: WB.position.map(((cB, Bc) => (cB + bn[Bc]).toFixed(2))).join(" ")
        }), YB && (0, lc.jsx)(Kc, {
          heading: WB.heading,
          pitch: WB.pitch,
          onViewFrom: cB => {
            const Bc = sB(cB, -1),
              nc = 0 === Bc[1] ? {
                heading: Math.atan2(Bc[0], Bc[2]),
                pitch: 0
              } : {
                heading: WB.heading,
                pitch: Bc[1] < 0 ? oc : -oc
              };
            UB(nB(EB, NB, DB, nc))
          },
          onTurn: (cB, Bc) => {
            UB((nc => function(cB, Bc, nc, Vc) {
              return VB(cB, Bc, {
                heading: cB.heading + nc * jB,
                pitch: Math.max(-oc, Math.min(oc, cB.pitch + Vc * jB))
              })
            }(null !== nc && void 0 !== nc ? nc : wB.current.fittedView, IB(EB), cB, Bc)))
          },
          onFlip: () => {
            UB((cB => function(cB, Bc) {
              return VB(cB, Bc, {
                heading: cB.heading + Math.PI,
                pitch: -cB.pitch
              })
            }(null !== cB && void 0 !== cB ? cB : wB.current.fittedView, IB(EB))))
          }
        }), null !== kn && (0, lc.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === Rc ? iB("studio:heatmapBlockReadout", {
            x: kn.x,
            y: kn.y,
            z: kn.z,
            count: (0, fc.M)(kn.value)
          }) : Rc(kn.x, kn.y, kn.z, kn.value)
        }), (0, lc.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [Xc, (0, lc.jsx)(yB.Q, {
            active: null === gn,
            onClick: () => {
              UB(null)
            },
            children: (0, lc.jsx)(zB.e, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function Kc(cB) {
      let {
        heading: Bc,
        pitch: nc,
        onViewFrom: Ic,
        onTurn: rB,
        onFlip: uc
      } = cB;
      const {
        t: sc
      } = (0, ec.x)(), Mc = (0, Vc.useRef)(null), Pc = cn({
        heading: Bc,
        pitch: nc
      }), qB = BB(Bc), Oc = PB(Pc, qB), Tc = Hc + Fc + 2, fc = Xc.flatMap((cB => [1, -1].map((Bc => {
        const nc = sB(cB.direction, Bc);
        return {
          ...cB,
          sign: Bc,
          direction: nc,
          endX: Tc + MB(nc, qB) * Hc,
          endY: Tc - MB(nc, Oc) * Hc,
          depth: MB(nc, Pc)
        }
      })))).sort(((cB, Bc) => Bc.depth - cB.depth));
      return (0, lc.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * Tc,
        height: 2 * Tc,
        "aria-hidden": !0,
        onPointerDown: cB => {
          var Bc, nc;
          cB.currentTarget.setPointerCapture(cB.pointerId);
          const Vc = cB.target,
            Ic = Vc.getAttribute("data-end");
          Mc.current = {
            pointerId: cB.pointerId,
            x: cB.clientX,
            y: cB.clientY,
            travel: 0,
            side: null === Ic ? null : null !== (Bc = null === (nc = fc[Number(Ic)]) || void 0 === nc ? void 0 : nc.direction) && void 0 !== Bc ? Bc : null,
            isOnMiddle: Vc.hasAttribute("data-middle")
          }
        },
        onPointerMove: cB => {
          const Bc = Mc.current;
          if (null === Bc || Bc.pointerId !== cB.pointerId) return;
          const nc = cB.clientX - Bc.x,
            Vc = cB.clientY - Bc.y;
          Bc.x = cB.clientX, Bc.y = cB.clientY, Bc.travel += Math.abs(nc) + Math.abs(Vc), Bc.travel >= Rc && rB(nc, Vc)
        },
        onPointerUp: cB => {
          const Bc = Mc.current;
          Mc.current = null, null === Bc || Bc.pointerId !== cB.pointerId || Bc.travel >= Rc || (null !== Bc.side ? Ic(Bc.side) : Bc.isOnMiddle && uc())
        },
        onPointerCancel: () => {
          Mc.current = null
        },
        children: [fc.map(((cB, Bc) => {
          const nc = cB.sign > 0;
          return (0, lc.jsxs)("g", {
            children: [(0, lc.jsx)("line", {
              x1: Tc,
              y1: Tc,
              x2: cB.endX,
              y2: cB.endY,
              stroke: cB.colour,
              strokeOpacity: nc ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, lc.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": Bc,
              cx: cB.endX,
              cy: cB.endY,
              r: nc ? Fc : Fc - 1,
              fill: cB.colour,
              fillOpacity: nc ? 1 : .3,
              stroke: cB.colour,
              strokeWidth: nc ? 0 : 1.5,
              children: (0, lc.jsx)("title", {
                children: `${sc("View from")} ${nc?"+":"\u2212"}${cB.name}`
              })
            }), nc && (0, lc.jsx)("text", {
              pointerEvents: "none",
              x: cB.endX,
              y: cB.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: cB.name
            })]
          }, `${nc?"+":"-"}${cB.name}`)
        })), (0, lc.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: Tc,
          cy: Tc,
          r: Jc,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, lc.jsx)("title", {
            children: sc("View from the opposite side")
          })
        })]
      })
    }

    function xB(cB) {
      var Bc, nc, Vc;
      const {
        chunkGridOrigin: Ic,
        camera: rB
      } = cB;
      if (null === Ic) return;
      const uc = [rB.position.x, rB.position.y, rB.position.z],
        sc = [0, 2].map((cB => Math.floor((uc[cB] + Ic[cB]) / mB.e.kI))),
        Mc = cB.chunkGridCentre;
      if (null !== Mc && Mc.every(((cB, Bc) => cB === sc[Bc]))) return;
      const Oc = null === (Bc = null === (nc = cB.chunkGrid) || void 0 === nc ? void 0 : nc.isVisible) || void 0 === Bc || Bc;
      null === (Vc = cB.chunkGrid) || void 0 === Vc || Vc.dispose();
      const [fc, ec] = [0, 2].map(((cB, Bc) => {
        const nc = [];
        for (let Vc = sc[Bc] - Dc; Vc <= sc[Bc] + Dc + 1; Vc++) nc.push(Vc * mB.e.kI - Ic[cB]);
        return nc
      })), tB = -Ic[1], Sc = [];
      for (const Pc of ec) Sc.push([new qB.KV(fc[0], tB, Pc), new qB.KV(fc[fc.length - 1], tB, Pc)]);
      for (const Pc of fc) Sc.push([new qB.KV(Pc, tB, ec[0]), new qB.KV(Pc, tB, ec[ec.length - 1])]);
      const yB = (0, Tc.b)("Heatmap3DChunkGrid", {
        lines: Sc
      }, cB.Ir);
      yB.color = new Pc.Color3(.45, .6, .78), yB.ur = !1, yB.isVisible = Oc, cB.chunkGrid = yB, cB.chunkGridCentre = sc, cB.needsRender = !0
    }

    function dc(cB, Bc, nc, Vc) {
      cB.Ouc("matrix", function(cB, Bc) {
        const nc = new Float32Array(16 * Bc);
        for (let Vc = 0; Vc < Bc; Vc++) {
          const Bc = 16 * Vc;
          nc[Bc] = 1, nc[Bc + 5] = 1, nc[Bc + 10] = 1, nc[Bc + 12] = cB[3 * Vc], nc[Bc + 13] = cB[3 * Vc + 1], nc[Bc + 14] = cB[3 * Vc + 2], nc[Bc + 15] = 1
        }
        return nc
      }(Bc, Vc), 16, !0), cB.Ouc("color", nc, 4, !0), cB.isVisible = Vc > 0
    }

    function Ac(cB) {
      const {
        camera: Bc,
        translucent: nc
      } = cB, Vc = [Bc.position.x, Bc.position.y, Bc.position.z], Ic = cB.translucentSortedFrom;
      if (null !== Ic && Math.hypot(Vc[0] - Ic[0], Vc[1] - Ic[1], Vc[2] - Ic[2]) < vB) return;
      cB.translucentSortedFrom = Vc;
      const rB = new Float64Array(nc.count),
        uc = new Uint32Array(nc.count);
      for (let Pc = 0; Pc < nc.count; Pc++) {
        const cB = nc.Sr[3 * Pc] - Vc[0],
          Bc = nc.Sr[3 * Pc + 1] - Vc[1],
          Ic = nc.Sr[3 * Pc + 2] - Vc[2];
        rB[Pc] = cB * cB + Bc * Bc + Ic * Ic, uc[Pc] = Pc
      }
      uc.sort(((cB, Bc) => rB[Bc] - rB[cB]));
      const sc = new Float32Array(3 * nc.count),
        Mc = new Float32Array(4 * nc.count);
      uc.forEach(((cB, Bc) => {
        sc.set(nc.Sr.subarray(3 * cB, 3 * cB + 3), 3 * Bc), Mc.set(nc.colours.subarray(4 * cB, 4 * cB + 4), 4 * Bc)
      })), dc(cB.translucentCells, sc, Mc, nc.count), cB.needsRender = !0
    }

    function Gc(cB, Bc) {
      const nc = (nc, Vc, Ic) => new qB.KV(0 === nc ? cB[0] : Bc[0], 0 === Vc ? cB[1] : Bc[1], 0 === Ic ? cB[2] : Bc[2]),
        Vc = [];
      for (const Ic of [0, 1])
        for (const cB of [0, 1]) Vc.push([nc(0, Ic, cB), nc(1, Ic, cB)], [nc(Ic, 0, cB), nc(Ic, 1, cB)], [nc(Ic, cB, 0), nc(Ic, cB, 1)]);
      return Vc
    }

    function cn(cB) {
      return [Math.sin(cB.heading) * Math.cos(cB.pitch), -Math.sin(cB.pitch), Math.cos(cB.heading) * Math.cos(cB.pitch)]
    }

    function BB(cB) {
      return [Math.cos(cB), 0, -Math.sin(cB)]
    }

    function nB(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: Wc,
        pitch: wc
      };
      const Ic = [cB.max[0] - cB.min[0], cB.max[1] - cB.min[1], cB.max[2] - cB.min[2]],
        rB = cn(Vc),
        uc = BB(Vc.heading),
        sc = PB(rB, uc),
        Mc = Math.tan(nc / 2),
        Pc = Mc * Bc;
      let qB = 1;
      for (const Oc of [-Ic[0] / 2, Ic[0] / 2])
        for (const cB of [-Ic[1] / 2, Ic[1] / 2])
          for (const Bc of [-Ic[2] / 2, Ic[2] / 2]) {
            const nc = [Oc, cB, Bc],
              Vc = MB(nc, rB);
            qB = Math.max(qB, Math.abs(MB(nc, uc)) / Pc - Vc, Math.abs(MB(nc, sc)) / Mc - Vc)
          }
      return {
        position: uB([cB.min[0] + Ic[0] / 2, cB.min[1] + Ic[1] / 2, cB.min[2] + Ic[2] / 2], sB(rB, -qB * kB)),
        heading: Vc.heading,
        pitch: Vc.pitch
      }
    }

    function VB(cB, Bc, nc) {
      const Vc = rn(cB),
        Ic = rn(nc),
        rB = uB(cB.position, sB(Bc, -1)),
        uc = [0, 1, 2].reduce(((cB, Bc) => uB(cB, sB(Ic[Bc], MB(rB, Vc[Bc])))), [0, 0, 0]);
      return {
        position: uB(Bc, uc),
        heading: nc.heading,
        pitch: nc.pitch
      }
    }

    function IB(cB) {
      return sB(uB(cB.min, cB.max), .5)
    }

    function rn(cB) {
      const Bc = cn(cB),
        nc = BB(cB.heading);
      return [Bc, nc, PB(Bc, nc)]
    }

    function uB(cB, Bc) {
      return [cB[0] + Bc[0], cB[1] + Bc[1], cB[2] + Bc[2]]
    }

    function sB(cB, Bc) {
      return [cB[0] * Bc, cB[1] * Bc, cB[2] * Bc]
    }

    function MB(cB, Bc) {
      return cB[0] * Bc[0] + cB[1] * Bc[1] + cB[2] * Bc[2]
    }

    function PB(cB, Bc) {
      return [cB[1] * Bc[2] - cB[2] * Bc[1], cB[2] * Bc[0] - cB[0] * Bc[2], cB[0] * Bc[1] - cB[1] * Bc[0]]
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);