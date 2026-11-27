export const id = 279;
export const ids = [279];
export const modules = {
  40909: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => Ie
    });
    He(7060);
    var ye = He(59),
      be = He(40913),
      Me = He(41195),
      Ke = He(41306),
      Ue = He(41357),
      Fe = He(41380),
      Je = He(38020),
      oe = He(37913),
      Re = He(41520),
      ke = He(41573),
      qe = (He(41601), He(1169)),
      fe = He(186),
      Te = He(1127),
      pe = He(18),
      Xe = He(2957),
      ze = He(1438),
      Be = He(1323),
      Ee = He(7056),
      ge = He(7069),
      Oe = He(4836),
      de = He(1228);
    const We = 1.2,
      te = .2,
      Ze = .0066 * Math.PI / 180,
      we = new Set(["Escape", "KeyG"]),
      De = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      Pe = "ArrowUp",
      Ae = new Set([...Object.keys(De), Pe, "ArrowDown"]),
      Ye = 32,
      Ve = 1,
      ae = 10,
      ce = "F4",
      xe = "Period",
      Le = Math.PI / 2 - .001,
      Ce = Math.PI / 6,
      ve = Math.PI / 6,
      ue = 1.08,
      me = [{
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
      le = 24,
      Se = 7,
      ne = 4,
      je = .01,
      se = 4;

    function Ie(ee) {
      let {
        heatmap: ie,
        scale: He,
        fullyOpaqueFrom: Ve,
        bounds: Ce,
        fitBounds: ve,
        schematic: ue,
        controls: me,
        onStepTime: le,
        onShowAllTime: Se,
        onTogglePlaying: ne,
        getReadout: se = null
      } = ee;
      const {
        t: Ie
      } = (0, Te.v)(), {
        clientEscMenuOptions: Mi
      } = (0, pe.m)(["clientEscMenuOptions"]), Fi = (0, ye.useRef)(null), Ji = (0, ye.useRef)(null), oi = (0, ye.useRef)(null), Ri = (0, Xe.e)(Fi), [ki, qi] = (0, ye.useState)(!1), [fi, Ti] = (0, ye.useState)(!1), [Xi, zi] = (0, ye.useState)(!0), Bi = (0, ye.useRef)(!1), [Ei, gi] = (0, ye.useState)(!1), Oi = fi || !Xi && Ei, [di, Wi] = (0, ye.useState)(!1), [ti, Zi] = (0, ye.useState)(!0), [wi, Di] = (0, ye.useState)(null), Pi = Ce.min, [Ai, Yi] = (0, ye.useState)(Pi);
      Ai[0] === Pi[0] && Ai[1] === Pi[1] && Ai[2] === Pi[2] || (Yi(Pi), null !== wi && Di({
        ...wi,
        position: Ki(wi.position, Ki(Ai, Ui(Pi, -1)))
      }));
      const Vi = (0, ye.useMemo)((() => function(ee) {
          return [ee.max[0] - ee.min[0] + 1, ee.max[1] - ee.min[1] + 1, ee.max[2] - ee.min[2] + 1]
        }(Ce)), [Ce]),
        ai = (0, ye.useMemo)((() => function(ee, ie) {
          const He = [],
            ye = [];
          for (const [be, Me] of Object.entries(ee.frequencies)) {
            const ee = Number(be);
            for (const [be, Ke] of Object.entries(Me)) {
              const Me = Number(be);
              for (const [be, Ue] of Object.entries(Ke)) Ue <= 0 || (He.push(ee - ie[0], Me - ie[1], Number(be) - ie[2]), ye.push(Ue))
            }
          }
          return {
            positions: Int32Array.from(He),
            values: Float64Array.from(ye),
            count: ye.length
          }
        }(ie, Pi)), [ie, Pi]),
        ci = We * Mi.cameraFOV / 100,
        xi = Ri.height > 0 ? Ri.width / Ri.height : 1,
        Li = (0, ye.useMemo)((() => function(ee, ie) {
          return {
            min: [ee.min[0] - ie[0], ee.min[1] - ie[1], ee.min[2] - ie[2]],
            max: [ee.max[0] - ie[0] + 1, ee.max[1] - ie[1] + 1, ee.max[2] - ie[2] + 1]
          }
        }(ve, Pi)), [ve, Pi]),
        Ci = Hi(Li, xi, ci),
        vi = null !== wi && void 0 !== wi ? wi : Ci,
        ui = (0, ye.useRef)({
          fittedView: Ci,
          fieldOfView: ci,
          mouseSensitivity: Mi.mouseSensitivity,
          canLock: Xi
        });
      ui.current = {
        fittedView: Ci,
        fieldOfView: ci,
        mouseSensitivity: Mi.mouseSensitivity,
        canLock: Xi
      };
      const mi = (0, ye.useMemo)((() => {
          if (!Oi) return null;
          const ee = (ee, He, ye) => {
              var be, Me, Ke;
              return null !== (be = null === (Me = ie.frequencies[ee + Pi[0]]) || void 0 === Me || null === (Ke = Me[He + Pi[1]]) || void 0 === Ke ? void 0 : Ke[ye + Pi[2]]) && void 0 !== be ? be : 0
            },
            ye = function(ee, ie, He, ye) {
              let be = 0,
                Me = 1 / 0;
              for (const Re of [0, 1, 2]) {
                if (0 === ie[Re]) {
                  if (ee[Re] < 0 || ee[Re] > He[Re]) return null;
                  continue
                }
                const ye = (0 - ee[Re]) / ie[Re],
                  Ke = (He[Re] - ee[Re]) / ie[Re];
                be = Math.max(be, Math.min(ye, Ke)), Me = Math.min(Me, Math.max(ye, Ke))
              }
              if (be > Me) return null;
              const Ke = [0, 1, 2].map((ye => Math.min(He[ye] - 1, Math.max(0, Math.floor(ee[ye] + ie[ye] * be))))),
                Ue = [0, 1, 2].map((ee => Math.sign(ie[ee]))),
                Fe = [0, 1, 2].map((He => {
                  if (0 === Ue[He]) return 1 / 0;
                  return ((Ue[He] > 0 ? Ke[He] + 1 : Ke[He]) - ee[He]) / ie[He]
                })),
                Je = [0, 1, 2].map((ee => 0 === Ue[ee] ? 1 / 0 : Math.abs(1 / ie[ee])));
              let oe = null;
              for (;;) {
                const ee = ye(Ke[0], Ke[1], Ke[2]);
                if (ee >= 1) return Ke;
                ee > 0 && (oe = [Ke[0], Ke[1], Ke[2]]);
                const ie = Fe[0] < Fe[1] ? Fe[0] < Fe[2] ? 0 : 2 : Fe[1] < Fe[2] ? 1 : 2;
                if (Fe[ie] > Me) return oe;
                if (Ke[ie] += Ue[ie], Fe[ie] += Je[ie], Ke[ie] < 0 || Ke[ie] >= He[ie]) return oe
              }
            }(vi.position, ei(vi), Vi, ((ie, ye, be) => (0, Ee.w)(ee(ie, ye, be), He, Ve)));
          return null === ye ? null : {
            x: ye[0] + Pi[0],
            y: ye[1] + Pi[1],
            z: ye[2] + Pi[2],
            value: ee(ye[0], ye[1], ye[2])
          }
        }), [Oi, ie, Pi, vi, Vi, He, Ve]),
        {
          keyHandlers: li
        } = (0, ge.e)({
          isEnabled: Oi,
          claimedKeyCodes: Ae,
          Ik: ee => {
            Di((ie => function(ee, ie) {
              const He = [Math.sin(ee.heading), 0, Math.cos(ee.heading)],
                ye = Ki(Ki(Ui(He, ie.forward), Ui(ii(ee.heading), ie.right)), [0, ie.up, 0]);
              return {
                ...ee,
                position: Ki(ee.position, ye)
              }
            }(null !== ie && void 0 !== ie ? ie : ui.current.fittedView, ee)))
          },
          onZoomChange: Wi
        });
      (0, ye.useEffect)((() => {
        const ee = Ji.current;
        if (!ee) return;
        let ie;
        try {
          ie = function(ee, ie) {
            const He = new be.b(ee, !0, {
                stencil: !1
              }, !0),
              ye = new Me.b(He),
              [qe, fe, Te] = Ee.O;
            ye.clearColor = new Je.e(qe / 255, fe / 255, Te / 255, 1);
            const pe = new Ke.e("Heatmap3DCamera", oe.rf.Zero(), ye);
            pe.fov = ie, pe.minZ = .05;
            const Xe = new Ue.c("Heatmap3DLight", new oe.rf(.4, 1, -.6), ye);
            Xe.diffuse = Je.Color3.White(), Xe.groundColor = Je.Color3.Black(), Xe.specular = Je.Color3.Black();
            const ze = new Fe.StandardMaterial("Heatmap3DCellMaterial", ye);
            ze.diffuseColor = new Je.Color3(.4, .4, .4), ze.emissiveColor = new Je.Color3(.62, .62, .62), ze.specularColor = Je.Color3.Black();
            const Be = (0, Re.e)("Heatmap3DCells", {
              size: 1
            }, ye);
            Be.material = ze, Be.Mp = !1, Be.Gf = !0, Be.isVisible = !1;
            const ge = (0, Re.e)("Heatmap3DTranslucentCells", {
              size: 1
            }, ye);
            ge.material = ze, ge.hasVertexAlpha = !0, ge.Mp = !1, ge.Gf = !0, ge.isVisible = !1;
            const Oe = new Fe.StandardMaterial("Heatmap3DSchematicMaterial", ye);
            Oe.diffuseColor = new Je.Color3(.6, .6, .6), Oe.emissiveColor = new Je.Color3(.4, .4, .4), Oe.specularColor = Je.Color3.Black();
            const de = (0, Re.e)("Heatmap3DSchematicBlocks", {
              size: 1
            }, ye);
            de.material = Oe, de.Mp = !1, de.Gf = !0, de.isVisible = !1;
            const We = (0, ke.c)("Heatmap3DTarget", {
              lines: Qe([-.52, -.52, -.52], [.52, .52, .52])
            }, ye);
            return We.color = new Je.Color3(.06, .14, .23), We.renderingGroupId = 1, We.Mp = !1, We.isVisible = !1, {
              engine: He,
              yp: ye,
              camera: pe,
              cells: Be,
              translucentCells: ge,
              translucent: {
                nf: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: de,
              targetOutline: We,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: ie,
              needsRender: !0
            }
          }(ee, ui.current.fieldOfView)
        } catch (He) {
          return console.error("Failed to start the 3D heatmap", He), void qi(!0)
        }
        return oi.current = ie, ie.engine.runRenderLoop((() => {
          const ee = ie.camera;
          ee.fov !== ie.targetFieldOfView && (ee.fov += (ie.targetFieldOfView - ee.fov) * (ee.fov > ie.targetFieldOfView ? .3 : .2), Math.abs(ie.targetFieldOfView - ee.fov) < 5e-4 && (ee.fov = ie.targetFieldOfView), ie.needsRender = !0), ie.needsRender && (ie.yp.render(), ie.needsRender = !ie.yp.isReady() || !ie.engine.areAllEffectsReady())
        })), () => {
          oi.current = null, ie.engine.dispose()
        }
      }), []), (0, ye.useEffect)((() => {
        const ee = Ji.current;
        if (!ee) return;
        const ie = () => {
            Bi.current = !1, Ti(document.pointerLockElement === ee)
          },
          He = () => {
            Bi.current && (Bi.current = !1, zi(!1))
          },
          ye = ie => {
            const He = !ui.current.canLock && document.activeElement === ee && 0 !== (1 & ie.buttons);
            if (document.pointerLockElement !== ee && !He) return;
            const ye = ui.current.mouseSensitivity * Ze;
            Di((ee => function(ee, ie, He) {
              const ye = 2 * Math.PI;
              return {
                ...ee,
                heading: ((ee.heading + ie) % ye + ye) % ye,
                pitch: Math.max(-Le, Math.min(Le, ee.pitch + He))
              }
            }(null !== ee && void 0 !== ee ? ee : ui.current.fittedView, ie.movementX * ye, ie.movementY * ye)))
          };
        return document.addEventListener("pointerlockchange", ie), document.addEventListener("pointerlockerror", He), document.addEventListener("pointermove", ye), () => {
          document.removeEventListener("pointerlockchange", ie), document.removeEventListener("pointerlockerror", He), document.removeEventListener("pointermove", ye), document.pointerLockElement === ee && (0, Oe.e)()
        }
      }), []), (0, ye.useEffect)((() => {
        const ee = oi.current;
        null !== ee && 0 !== Ri.width && 0 !== Ri.height && (ee.engine.resize(), ee.needsRender = !0)
      }), [Ri.width, Ri.height]), (0, ye.useEffect)((() => {
        const ee = oi.current;
        null !== ee && (ee.targetFieldOfView = ci * (di ? te : 1))
      }), [ci, di]), (0, ye.useEffect)((() => {
        const ee = oi.current;
        null !== ee && function(ee, ie, He, ye) {
          const be = [],
            Me = [],
            Ke = [],
            Ue = [];
          for (let Fe = 0; Fe < ie.count; Fe++) {
            const ee = ie.values[Fe],
              Je = (0, Ee.w)(ee, He, ye);
            if (Je <= 0) continue;
            const [oe, Re, ke] = (0, Ee.q)((0, Ee.H)(ee, He)), qe = Je >= 1;
            (qe ? be : Ke).push(ie.positions[3 * Fe] + .5, ie.positions[3 * Fe + 1] + .5, ie.positions[3 * Fe + 2] + .5), (qe ? Me : Ue).push(oe / 255, Re / 255, ke / 255, Je)
          }
          Ge(ee.cells, Float32Array.from(be), Float32Array.from(Me), Me.length / 4), ee.translucent = {
            nf: Float32Array.from(Ke),
            colours: Float32Array.from(Ue),
            count: Ue.length / 4
          }, ee.translucentSortedFrom = null, re(ee), ee.needsRender = !0
        }(ee, ai, He, Ve)
      }), [ai, He, Ve]), (0, ye.useEffect)((() => {
        const ee = oi.current;
        null !== ee && function(ee, ie) {
          ee.chunkGridOrigin = ie, ee.chunkGridCentre = null, Ne(ee)
        }(ee, Ce.min)
      }), [Ce]), (0, ye.useEffect)((() => {
        const ee = oi.current;
        null !== ee && function(ee, ie, He) {
          const ye = [],
            be = [];
          if (null !== ie) {
            const {
              positions: ee,
              colours: Me,
              count: Ke
            } = ie.surface;
            for (let ie = 0; ie < Ke; ie++) {
              const Ke = [ee[3 * ie], ee[3 * ie + 1], ee[3 * ie + 2]];
              [0, 1, 2].every((ee => Ke[ee] >= He.min[ee] - Ye && Ke[ee] <= He.max[ee] + Ye)) && (ye.push(Ke[0] - He.min[0] + .5, Ke[1] - He.min[1] + .5, Ke[2] - He.min[2] + .5), be.push(Me[3 * ie] / 255, Me[3 * ie + 1] / 255, Me[3 * ie + 2] / 255, 1))
            }
          }
          Ge(ee.schematicBlocks, Float32Array.from(ye), Float32Array.from(be), be.length / 4), ee.needsRender = !0
        }(ee, ue, Ce)
      }), [ue, Ce]), (0, ye.useEffect)((() => {
        const ee = oi.current;
        null !== ee && null !== ee.chunkGrid && (ee.chunkGrid.isVisible = ti, ee.needsRender = !0)
      }), [ti, Ce]), (0, ye.useEffect)((() => {
        const ee = oi.current;
        null !== ee && function(ee, ie, He) {
          const {
            camera: ye
          } = ee;
          ye.position.set(ie.position[0], ie.position[1], ie.position[2]), ye.rotation.set(ie.pitch, ie.heading, 0);
          const be = (ae + 1) * fe.g.BR * Math.sqrt(3);
          ye.maxZ = Math.max(be, Math.hypot(...Ki(ie.position, Ui(bi({
            min: [0, 0, 0],
            max: He
          }), -1))) + 2 * Math.hypot(...He)), Ne(ee), re(ee), ee.needsRender = !0
        }(ee, vi, Vi)
      }), [vi, Vi]), (0, ye.useEffect)((() => {
        const ee = oi.current;
        null !== ee && (ee.targetOutline.isVisible = null !== mi, null !== mi && ee.targetOutline.position.set(mi.x - Pi[0] + .5, mi.y - Pi[1] + .5, mi.z - Pi[2] + .5), ee.needsRender = !0)
      }), [mi, Pi]);
      return (0, de.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: Fi,
        children: [(0, de.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: Ji,
          style: {
            width: `${Ri.width}px`,
            height: `${Ri.height}px`
          },
          tabIndex: 0,
          "aria-label": Ie("3D heatmap"),
          onClick: () => {
            const ee = Ji.current;
            if (null === ee) return;
            if (ee.focus({
                preventScroll: !0
              }), fi || !Xi) return;
            const ie = ee.requestPointerLock();
            ie instanceof Promise ? ie.catch((ee => {
              ee instanceof DOMException && ("WrongDocumentError" === ee.name || "NotSupportedError" === ee.name) && zi(!1)
            })) : Bi.current = !0
          },
          ...li,
          onKeyDown: ee => {
            if (Oi && we.has(ee.code)) return ee.preventDefault(), void(() => {
              const ee = Ji.current;
              null !== ee && document.pointerLockElement === ee ? (0, Oe.e)() : null === ee || void 0 === ee || ee.blur()
            })();
            const ie = De[ee.code];
            return Oi && void 0 !== ie ? (ee.preventDefault(), void le(ie)) : Oi && (0, ge.b)("replayPlayPause", ee.code) && !(0, ge.b)("Zoom", ee.code) ? (ee.preventDefault(), void(ee.repeat || ne())) : Oi && ee.code === Pe ? (ee.preventDefault(), void Se()) : Oi && ee.code === xe ? (ee.preventDefault(), void Di(null)) : Oi && ee.code === ce ? (ee.preventDefault(), void Zi((ee => !ee))) : void li.onKeyDown(ee)
          },
          onFocus: () => {
            gi(!0)
          },
          onBlur: () => {
            gi(!1), li.onBlur()
          }
        }), ki && (0, de.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: Ie("3D view isn't available in this browser.")
        }), Oi && (0, de.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, de.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: vi.position.map(((ee, ie) => (ee + Pi[ie]).toFixed(2))).join(" ")
        }), ti && (0, de.jsx)(he, {
          heading: vi.heading,
          pitch: vi.pitch,
          onViewFrom: ee => {
            const ie = Ui(ee, -1),
              He = 0 === ie[1] ? {
                heading: Math.atan2(ie[0], ie[2]),
                pitch: 0
              } : {
                heading: vi.heading,
                pitch: ie[1] < 0 ? Le : -Le
              };
            Di(Hi(Li, xi, ci, He))
          },
          onTurn: (ee, ie) => {
            Di((He => function(ee, ie, He, ye) {
              return yi(ee, ie, {
                heading: ee.heading + He * je,
                pitch: Math.max(-Le, Math.min(Le, ee.pitch + ye * je))
              })
            }(null !== He && void 0 !== He ? He : ui.current.fittedView, bi(Li), ee, ie)))
          },
          onFlip: () => {
            Di((ee => function(ee, ie) {
              return yi(ee, ie, {
                heading: ee.heading + Math.PI,
                pitch: -ee.pitch
              })
            }(null !== ee && void 0 !== ee ? ee : ui.current.fittedView, bi(Li))))
          }
        }), null !== mi && (0, de.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === se ? Ie("studio:heatmapBlockReadout", {
            x: mi.x,
            y: mi.y,
            z: mi.z,
            count: (0, qe.P)(mi.value)
          }) : se(mi.x, mi.y, mi.z, mi.value)
        }), (0, de.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [me, (0, de.jsx)(ze.M, {
            active: null === wi,
            onClick: () => {
              Di(null)
            },
            children: (0, de.jsx)(Be.e, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function he(ee) {
      let {
        heading: ie,
        pitch: He,
        onViewFrom: be,
        onTurn: Me,
        onFlip: Ke
      } = ee;
      const {
        t: Ue
      } = (0, Te.v)(), Fe = (0, ye.useRef)(null), Je = ei({
        heading: ie,
        pitch: He
      }), oe = ii(ie), Re = Ji(Je, oe), ke = le + Se + 2, qe = me.flatMap((ee => [1, -1].map((ie => {
        const He = Ui(ee.direction, ie);
        return {
          ...ee,
          sign: ie,
          direction: He,
          endX: ke + Fi(He, oe) * le,
          endY: ke - Fi(He, Re) * le,
          depth: Fi(He, Je)
        }
      })))).sort(((ee, ie) => ie.depth - ee.depth));
      return (0, de.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * ke,
        height: 2 * ke,
        "aria-hidden": !0,
        onPointerDown: ee => {
          var ie, He;
          ee.currentTarget.setPointerCapture(ee.pointerId);
          const ye = ee.target,
            be = ye.getAttribute("data-end");
          Fe.current = {
            pointerId: ee.pointerId,
            x: ee.clientX,
            y: ee.clientY,
            travel: 0,
            side: null === be ? null : null !== (ie = null === (He = qe[Number(be)]) || void 0 === He ? void 0 : He.direction) && void 0 !== ie ? ie : null,
            isOnMiddle: ye.hasAttribute("data-middle")
          }
        },
        onPointerMove: ee => {
          const ie = Fe.current;
          if (null === ie || ie.pointerId !== ee.pointerId) return;
          const He = ee.clientX - ie.x,
            ye = ee.clientY - ie.y;
          ie.x = ee.clientX, ie.y = ee.clientY, ie.travel += Math.abs(He) + Math.abs(ye), ie.travel >= se && Me(He, ye)
        },
        onPointerUp: ee => {
          const ie = Fe.current;
          Fe.current = null, null === ie || ie.pointerId !== ee.pointerId || ie.travel >= se || (null !== ie.side ? be(ie.side) : ie.isOnMiddle && Ke())
        },
        onPointerCancel: () => {
          Fe.current = null
        },
        children: [qe.map(((ee, ie) => {
          const He = ee.sign > 0;
          return (0, de.jsxs)("g", {
            children: [(0, de.jsx)("line", {
              x1: ke,
              y1: ke,
              x2: ee.endX,
              y2: ee.endY,
              stroke: ee.colour,
              strokeOpacity: He ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, de.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": ie,
              cx: ee.endX,
              cy: ee.endY,
              r: He ? Se : Se - 1,
              fill: ee.colour,
              fillOpacity: He ? 1 : .3,
              stroke: ee.colour,
              strokeWidth: He ? 0 : 1.5,
              children: (0, de.jsx)("title", {
                children: `${Ue("View from")} ${He?"+":"\u2212"}${ee.name}`
              })
            }), He && (0, de.jsx)("text", {
              pointerEvents: "none",
              x: ee.endX,
              y: ee.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: ee.name
            })]
          }, `${He?"+":"-"}${ee.name}`)
        })), (0, de.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: ke,
          cy: ke,
          r: ne,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, de.jsx)("title", {
            children: Ue("View from the opposite side")
          })
        })]
      })
    }

    function Ne(ee) {
      var ie, He, ye;
      const {
        chunkGridOrigin: be,
        camera: Me
      } = ee;
      if (null === be) return;
      const Ke = [Me.position.x, Me.position.y, Me.position.z],
        Ue = [0, 2].map((ee => Math.floor((Ke[ee] + be[ee]) / fe.g.BR))),
        Fe = ee.chunkGridCentre;
      if (null !== Fe && Fe.every(((ee, ie) => ee === Ue[ie]))) return;
      const Re = null === (ie = null === (He = ee.chunkGrid) || void 0 === He ? void 0 : He.isVisible) || void 0 === ie || ie;
      null === (ye = ee.chunkGrid) || void 0 === ye || ye.dispose();
      const [qe, Te] = [0, 2].map(((ee, ie) => {
        const He = [];
        for (let ye = Ue[ie] - ae; ye <= Ue[ie] + ae + 1; ye++) He.push(ye * fe.g.BR - be[ee]);
        return He
      })), pe = -be[1], Xe = [];
      for (const Je of Te) Xe.push([new oe.rf(qe[0], pe, Je), new oe.rf(qe[qe.length - 1], pe, Je)]);
      for (const Je of qe) Xe.push([new oe.rf(Je, pe, Te[0]), new oe.rf(Je, pe, Te[Te.length - 1])]);
      const ze = (0, ke.c)("Heatmap3DChunkGrid", {
        lines: Xe
      }, ee.yp);
      ze.color = new Je.Color3(.45, .6, .78), ze.Mp = !1, ze.isVisible = Re, ee.chunkGrid = ze, ee.chunkGridCentre = Ue, ee.needsRender = !0
    }

    function Ge(ee, ie, He, ye) {
      ee.Bie("matrix", function(ee, ie) {
        const He = new Float32Array(16 * ie);
        for (let ye = 0; ye < ie; ye++) {
          const ie = 16 * ye;
          He[ie] = 1, He[ie + 5] = 1, He[ie + 10] = 1, He[ie + 12] = ee[3 * ye], He[ie + 13] = ee[3 * ye + 1], He[ie + 14] = ee[3 * ye + 2], He[ie + 15] = 1
        }
        return He
      }(ie, ye), 16, !0), ee.Bie("color", He, 4, !0), ee.isVisible = ye > 0
    }

    function re(ee) {
      const {
        camera: ie,
        translucent: He
      } = ee, ye = [ie.position.x, ie.position.y, ie.position.z], be = ee.translucentSortedFrom;
      if (null !== be && Math.hypot(ye[0] - be[0], ye[1] - be[1], ye[2] - be[2]) < Ve) return;
      ee.translucentSortedFrom = ye;
      const Me = new Float64Array(He.count),
        Ke = new Uint32Array(He.count);
      for (let Je = 0; Je < He.count; Je++) {
        const ee = He.nf[3 * Je] - ye[0],
          ie = He.nf[3 * Je + 1] - ye[1],
          be = He.nf[3 * Je + 2] - ye[2];
        Me[Je] = ee * ee + ie * ie + be * be, Ke[Je] = Je
      }
      Ke.sort(((ee, ie) => Me[ie] - Me[ee]));
      const Ue = new Float32Array(3 * He.count),
        Fe = new Float32Array(4 * He.count);
      Ke.forEach(((ee, ie) => {
        Ue.set(He.nf.subarray(3 * ee, 3 * ee + 3), 3 * ie), Fe.set(He.colours.subarray(4 * ee, 4 * ee + 4), 4 * ie)
      })), Ge(ee.translucentCells, Ue, Fe, He.count), ee.needsRender = !0
    }

    function Qe(ee, ie) {
      const He = (He, ye, be) => new oe.rf(0 === He ? ee[0] : ie[0], 0 === ye ? ee[1] : ie[1], 0 === be ? ee[2] : ie[2]),
        ye = [];
      for (const be of [0, 1])
        for (const ee of [0, 1]) ye.push([He(0, be, ee), He(1, be, ee)], [He(be, 0, ee), He(be, 1, ee)], [He(be, ee, 0), He(be, ee, 1)]);
      return ye
    }

    function ei(ee) {
      return [Math.sin(ee.heading) * Math.cos(ee.pitch), -Math.sin(ee.pitch), Math.cos(ee.heading) * Math.cos(ee.pitch)]
    }

    function ii(ee) {
      return [Math.cos(ee), 0, -Math.sin(ee)]
    }

    function Hi(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: Ce,
        pitch: ve
      };
      const be = [ee.max[0] - ee.min[0], ee.max[1] - ee.min[1], ee.max[2] - ee.min[2]],
        Me = ei(ye),
        Ke = ii(ye.heading),
        Ue = Ji(Me, Ke),
        Fe = Math.tan(He / 2),
        Je = Fe * ie;
      let oe = 1;
      for (const Re of [-be[0] / 2, be[0] / 2])
        for (const ee of [-be[1] / 2, be[1] / 2])
          for (const ie of [-be[2] / 2, be[2] / 2]) {
            const He = [Re, ee, ie],
              ye = Fi(He, Me);
            oe = Math.max(oe, Math.abs(Fi(He, Ke)) / Je - ye, Math.abs(Fi(He, Ue)) / Fe - ye)
          }
      return {
        position: Ki([ee.min[0] + be[0] / 2, ee.min[1] + be[1] / 2, ee.min[2] + be[2] / 2], Ui(Me, -oe * ue)),
        heading: ye.heading,
        pitch: ye.pitch
      }
    }

    function yi(ee, ie, He) {
      const ye = Mi(ee),
        be = Mi(He),
        Me = Ki(ee.position, Ui(ie, -1)),
        Ke = [0, 1, 2].reduce(((ee, ie) => Ki(ee, Ui(be[ie], Fi(Me, ye[ie])))), [0, 0, 0]);
      return {
        position: Ki(ie, Ke),
        heading: He.heading,
        pitch: He.pitch
      }
    }

    function bi(ee) {
      return Ui(Ki(ee.min, ee.max), .5)
    }

    function Mi(ee) {
      const ie = ei(ee),
        He = ii(ee.heading);
      return [ie, He, Ji(ie, He)]
    }

    function Ki(ee, ie) {
      return [ee[0] + ie[0], ee[1] + ie[1], ee[2] + ie[2]]
    }

    function Ui(ee, ie) {
      return [ee[0] * ie, ee[1] * ie, ee[2] * ie]
    }

    function Fi(ee, ie) {
      return ee[0] * ie[0] + ee[1] * ie[1] + ee[2] * ie[2]
    }

    function Ji(ee, ie) {
      return [ee[1] * ie[2] - ee[2] * ie[1], ee[2] * ie[0] - ee[0] * ie[2], ee[0] * ie[1] - ee[1] * ie[0]]
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);