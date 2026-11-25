export const id = 254;
export const ids = [254];
export const modules = {
  40019: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => xt
    });
    Vt(6648);
    var Ot = Vt(63),
      qt = Vt(40023),
      Dt = Vt(40289),
      mt = Vt(40397),
      dt = Vt(40433),
      jt = Vt(40452),
      Ht = Vt(37510),
      Xt = Vt(37331),
      Qt = Vt(40595),
      lt = Vt(40644),
      Et = (Vt(40669), Vt(1308)),
      ft = Vt(229),
      wt = Vt(1286),
      yt = Vt(26),
      Nt = Vt(2821),
      Mt = Vt(1556),
      bt = Vt(1152),
      Jt = Vt(6645),
      Ct = Vt(6656),
      ut = Vt(4584),
      Kt = Vt(1188);
    const ht = 1.2,
      vt = .2,
      Wt = .0066 * Math.PI / 180,
      St = new Set(["Escape", "KeyG"]),
      ct = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      Rt = "ArrowUp",
      It = new Set([...Object.keys(ct), Rt, "ArrowDown"]),
      Pt = 32,
      Zt = 1,
      Lt = 10,
      Ft = "F4",
      kt = "Period",
      Gt = Math.PI / 2 - .001,
      zt = Math.PI / 6,
      ot = Math.PI / 6,
      rt = 1.08,
      Ut = [{
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
      At = 24,
      it = 7,
      Yt = 4,
      Bt = .01,
      pt = 4;

    function xt(tt) {
      let {
        heatmap: et,
        scale: Vt,
        fullyOpaqueFrom: Zt,
        bounds: zt,
        fitBounds: ot,
        schematic: rt,
        controls: Ut,
        onStepTime: At,
        onShowAllTime: it,
        onTogglePlaying: Yt,
        getReadout: pt = null
      } = tt;
      const {
        t: xt
      } = (0, wt.H)(), {
        clientEscMenuOptions: me
      } = (0, yt.k)(["clientEscMenuOptions"]), He = (0, Ot.useRef)(null), Xe = (0, Ot.useRef)(null), Qe = (0, Ot.useRef)(null), le = (0, Nt.d)(He), [Ee, fe] = (0, Ot.useState)(!1), [we, ye] = (0, Ot.useState)(!1), [Ne, ae] = (0, Ot.useState)(!0), Me = (0, Ot.useRef)(!1), [be, Je] = (0, Ot.useState)(!1), Ce = we || !Ne && be, [ue, Ke] = (0, Ot.useState)(!1), [he, ve] = (0, Ot.useState)(!0), [We, Se] = (0, Ot.useState)(null), ce = zt.min, [Re, Ie] = (0, Ot.useState)(ce);
      Re[0] === ce[0] && Re[1] === ce[1] && Re[2] === ce[2] || (Ie(ce), null !== We && Se({
        ...We,
        position: de(We.position, de(Re, je(ce, -1)))
      }));
      const Pe = (0, Ot.useMemo)((() => function(tt) {
          return [tt.max[0] - tt.min[0] + 1, tt.max[1] - tt.min[1] + 1, tt.max[2] - tt.min[2] + 1]
        }(zt)), [zt]),
        Ze = (0, Ot.useMemo)((() => function(tt, et) {
          const Vt = [],
            Ot = [];
          for (const [qt, Dt] of Object.entries(tt.frequencies)) {
            const tt = Number(qt);
            for (const [qt, mt] of Object.entries(Dt)) {
              const Dt = Number(qt);
              for (const [qt, dt] of Object.entries(mt)) dt <= 0 || (Vt.push(tt - et[0], Dt - et[1], Number(qt) - et[2]), Ot.push(dt))
            }
          }
          return {
            positions: Int32Array.from(Vt),
            values: Float64Array.from(Ot),
            count: Ot.length
          }
        }(et, ce)), [et, ce]),
        Le = ht * me.cameraFOV / 100,
        Fe = le.height > 0 ? le.width / le.height : 1,
        ke = (0, Ot.useMemo)((() => function(tt, et) {
          return {
            min: [tt.min[0] - et[0], tt.min[1] - et[1], tt.min[2] - et[2]],
            max: [tt.max[0] - et[0] + 1, tt.max[1] - et[1] + 1, tt.max[2] - et[2] + 1]
          }
        }(ot, ce)), [ot, ce]),
        Ge = Oe(ke, Fe, Le),
        ze = null !== We && void 0 !== We ? We : Ge,
        oe = (0, Ot.useRef)({
          fittedView: Ge,
          fieldOfView: Le,
          mouseSensitivity: me.mouseSensitivity,
          canLock: Ne
        });
      oe.current = {
        fittedView: Ge,
        fieldOfView: Le,
        mouseSensitivity: me.mouseSensitivity,
        canLock: Ne
      };
      const re = (0, Ot.useMemo)((() => {
          if (!Ce) return null;
          const tt = (tt, Vt, Ot) => {
              var qt, Dt, mt;
              return null !== (qt = null === (Dt = et.frequencies[tt + ce[0]]) || void 0 === Dt || null === (mt = Dt[Vt + ce[1]]) || void 0 === mt ? void 0 : mt[Ot + ce[2]]) && void 0 !== qt ? qt : 0
            },
            Ot = function(tt, et, Vt, Ot) {
              let qt = 0,
                Dt = 1 / 0;
              for (const Qt of [0, 1, 2]) {
                if (0 === et[Qt]) {
                  if (tt[Qt] < 0 || tt[Qt] > Vt[Qt]) return null;
                  continue
                }
                const Ot = (0 - tt[Qt]) / et[Qt],
                  mt = (Vt[Qt] - tt[Qt]) / et[Qt];
                qt = Math.max(qt, Math.min(Ot, mt)), Dt = Math.min(Dt, Math.max(Ot, mt))
              }
              if (qt > Dt) return null;
              const mt = [0, 1, 2].map((Ot => Math.min(Vt[Ot] - 1, Math.max(0, Math.floor(tt[Ot] + et[Ot] * qt))))),
                dt = [0, 1, 2].map((tt => Math.sign(et[tt]))),
                jt = [0, 1, 2].map((Vt => {
                  if (0 === dt[Vt]) return 1 / 0;
                  return ((dt[Vt] > 0 ? mt[Vt] + 1 : mt[Vt]) - tt[Vt]) / et[Vt]
                })),
                Ht = [0, 1, 2].map((tt => 0 === dt[tt] ? 1 / 0 : Math.abs(1 / et[tt])));
              let Xt = null;
              for (;;) {
                const tt = Ot(mt[0], mt[1], mt[2]);
                if (tt >= 1) return mt;
                tt > 0 && (Xt = [mt[0], mt[1], mt[2]]);
                const et = jt[0] < jt[1] ? jt[0] < jt[2] ? 0 : 2 : jt[1] < jt[2] ? 1 : 2;
                if (jt[et] > Dt) return Xt;
                if (mt[et] += dt[et], jt[et] += Ht[et], mt[et] < 0 || mt[et] >= Vt[et]) return Xt
              }
            }(ze.position, ee(ze), Pe, ((et, Ot, qt) => (0, Jt.x)(tt(et, Ot, qt), Vt, Zt)));
          return null === Ot ? null : {
            x: Ot[0] + ce[0],
            y: Ot[1] + ce[1],
            z: Ot[2] + ce[2],
            value: tt(Ot[0], Ot[1], Ot[2])
          }
        }), [Ce, et, ce, ze, Pe, Vt, Zt]),
        {
          keyHandlers: Ue
        } = (0, Ct.f)({
          isEnabled: Ce,
          claimedKeyCodes: It,
          Ql: tt => {
            Se((et => function(tt, et) {
              const Vt = [Math.sin(tt.heading), 0, Math.cos(tt.heading)],
                Ot = de(de(je(Vt, et.forward), je(Ve(tt.heading), et.right)), [0, et.up, 0]);
              return {
                ...tt,
                position: de(tt.position, Ot)
              }
            }(null !== et && void 0 !== et ? et : oe.current.fittedView, tt)))
          },
          onZoomChange: Ke
        });
      (0, Ot.useEffect)((() => {
        const tt = Xe.current;
        if (!tt) return;
        let et;
        try {
          et = function(tt, et) {
            const Vt = new qt.e(tt, !0, {
                stencil: !1
              }, !0),
              Ot = new Dt.c(Vt),
              [Et, ft, wt] = Jt.T;
            Ot.clearColor = new Ht.e(Et / 255, ft / 255, wt / 255, 1);
            const yt = new mt.c("Heatmap3DCamera", Xt.uf.Zero(), Ot);
            yt.fov = et, yt.minZ = .05;
            const Nt = new dt.c("Heatmap3DLight", new Xt.uf(.4, 1, -.6), Ot);
            Nt.diffuse = Ht.Color3.White(), Nt.groundColor = Ht.Color3.Black(), Nt.specular = Ht.Color3.Black();
            const Mt = new jt.StandardMaterial("Heatmap3DCellMaterial", Ot);
            Mt.diffuseColor = new Ht.Color3(.4, .4, .4), Mt.emissiveColor = new Ht.Color3(.62, .62, .62), Mt.specularColor = Ht.Color3.Black();
            const bt = (0, Qt.e)("Heatmap3DCells", {
              size: 1
            }, Ot);
            bt.material = Mt, bt.Gw = !1, bt.Cf = !0, bt.isVisible = !1;
            const Ct = (0, Qt.e)("Heatmap3DTranslucentCells", {
              size: 1
            }, Ot);
            Ct.material = Mt, Ct.hasVertexAlpha = !0, Ct.Gw = !1, Ct.Cf = !0, Ct.isVisible = !1;
            const ut = new jt.StandardMaterial("Heatmap3DSchematicMaterial", Ot);
            ut.diffuseColor = new Ht.Color3(.6, .6, .6), ut.emissiveColor = new Ht.Color3(.4, .4, .4), ut.specularColor = Ht.Color3.Black();
            const Kt = (0, Qt.e)("Heatmap3DSchematicBlocks", {
              size: 1
            }, Ot);
            Kt.material = ut, Kt.Gw = !1, Kt.Cf = !0, Kt.isVisible = !1;
            const ht = (0, lt.c)("Heatmap3DTarget", {
              lines: te([-.52, -.52, -.52], [.52, .52, .52])
            }, Ot);
            return ht.color = new Ht.Color3(.06, .14, .23), ht.renderingGroupId = 1, ht.Gw = !1, ht.isVisible = !1, {
              engine: Vt,
              Fw: Ot,
              camera: yt,
              cells: bt,
              translucentCells: Ct,
              translucent: {
                Of: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: Kt,
              targetOutline: ht,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: et,
              needsRender: !0
            }
          }(tt, oe.current.fieldOfView)
        } catch (Vt) {
          return console.error("Failed to start the 3D heatmap", Vt), void fe(!0)
        }
        return Qe.current = et, et.engine.runRenderLoop((() => {
          const tt = et.camera;
          tt.fov !== et.targetFieldOfView && (tt.fov += (et.targetFieldOfView - tt.fov) * (tt.fov > et.targetFieldOfView ? .3 : .2), Math.abs(et.targetFieldOfView - tt.fov) < 5e-4 && (tt.fov = et.targetFieldOfView), et.needsRender = !0), et.needsRender && (et.Fw.render(), et.needsRender = !et.Fw.isReady() || !et.engine.areAllEffectsReady())
        })), () => {
          Qe.current = null, et.engine.dispose()
        }
      }), []), (0, Ot.useEffect)((() => {
        const tt = Xe.current;
        if (!tt) return;
        const et = () => {
            Me.current = !1, ye(document.pointerLockElement === tt)
          },
          Vt = () => {
            Me.current && (Me.current = !1, ae(!1))
          },
          Ot = et => {
            const Vt = !oe.current.canLock && document.activeElement === tt && 0 !== (1 & et.buttons);
            if (document.pointerLockElement !== tt && !Vt) return;
            const Ot = oe.current.mouseSensitivity * Wt;
            Se((tt => function(tt, et, Vt) {
              const Ot = 2 * Math.PI;
              return {
                ...tt,
                heading: ((tt.heading + et) % Ot + Ot) % Ot,
                pitch: Math.max(-Gt, Math.min(Gt, tt.pitch + Vt))
              }
            }(null !== tt && void 0 !== tt ? tt : oe.current.fittedView, et.movementX * Ot, et.movementY * Ot)))
          };
        return document.addEventListener("pointerlockchange", et), document.addEventListener("pointerlockerror", Vt), document.addEventListener("pointermove", Ot), () => {
          document.removeEventListener("pointerlockchange", et), document.removeEventListener("pointerlockerror", Vt), document.removeEventListener("pointermove", Ot), document.pointerLockElement === tt && (0, ut.c)()
        }
      }), []), (0, Ot.useEffect)((() => {
        const tt = Qe.current;
        null !== tt && 0 !== le.width && 0 !== le.height && (tt.engine.resize(), tt.needsRender = !0)
      }), [le.width, le.height]), (0, Ot.useEffect)((() => {
        const tt = Qe.current;
        null !== tt && (tt.targetFieldOfView = Le * (ue ? vt : 1))
      }), [Le, ue]), (0, Ot.useEffect)((() => {
        const tt = Qe.current;
        null !== tt && function(tt, et, Vt, Ot) {
          const qt = [],
            Dt = [],
            mt = [],
            dt = [];
          for (let jt = 0; jt < et.count; jt++) {
            const tt = et.values[jt],
              Ht = (0, Jt.x)(tt, Vt, Ot);
            if (Ht <= 0) continue;
            const [Xt, Qt, lt] = (0, Jt.m)((0, Jt.K)(tt, Vt)), Et = Ht >= 1;
            (Et ? qt : mt).push(et.positions[3 * jt] + .5, et.positions[3 * jt + 1] + .5, et.positions[3 * jt + 2] + .5), (Et ? Dt : dt).push(Xt / 255, Qt / 255, lt / 255, Ht)
          }
          st(tt.cells, Float32Array.from(qt), Float32Array.from(Dt), Dt.length / 4), tt.translucent = {
            Of: Float32Array.from(mt),
            colours: Float32Array.from(dt),
            count: dt.length / 4
          }, tt.translucentSortedFrom = null, nt(tt), tt.needsRender = !0
        }(tt, Ze, Vt, Zt)
      }), [Ze, Vt, Zt]), (0, Ot.useEffect)((() => {
        const tt = Qe.current;
        null !== tt && function(tt, et) {
          tt.chunkGridOrigin = et, tt.chunkGridCentre = null, gt(tt)
        }(tt, zt.min)
      }), [zt]), (0, Ot.useEffect)((() => {
        const tt = Qe.current;
        null !== tt && function(tt, et, Vt) {
          const Ot = [],
            qt = [];
          if (null !== et) {
            const {
              positions: tt,
              colours: Dt,
              count: mt
            } = et.surface;
            for (let et = 0; et < mt; et++) {
              const mt = [tt[3 * et], tt[3 * et + 1], tt[3 * et + 2]];
              [0, 1, 2].every((tt => mt[tt] >= Vt.min[tt] - Pt && mt[tt] <= Vt.max[tt] + Pt)) && (Ot.push(mt[0] - Vt.min[0] + .5, mt[1] - Vt.min[1] + .5, mt[2] - Vt.min[2] + .5), qt.push(Dt[3 * et] / 255, Dt[3 * et + 1] / 255, Dt[3 * et + 2] / 255, 1))
            }
          }
          st(tt.schematicBlocks, Float32Array.from(Ot), Float32Array.from(qt), qt.length / 4), tt.needsRender = !0
        }(tt, rt, zt)
      }), [rt, zt]), (0, Ot.useEffect)((() => {
        const tt = Qe.current;
        null !== tt && null !== tt.chunkGrid && (tt.chunkGrid.isVisible = he, tt.needsRender = !0)
      }), [he, zt]), (0, Ot.useEffect)((() => {
        const tt = Qe.current;
        null !== tt && function(tt, et, Vt) {
          const {
            camera: Ot
          } = tt;
          Ot.position.set(et.position[0], et.position[1], et.position[2]), Ot.rotation.set(et.pitch, et.heading, 0);
          const qt = (Lt + 1) * ft.e.ff * Math.sqrt(3);
          Ot.maxZ = Math.max(qt, Math.hypot(...de(et.position, je(De({
            min: [0, 0, 0],
            max: Vt
          }), -1))) + 2 * Math.hypot(...Vt)), gt(tt), nt(tt), tt.needsRender = !0
        }(tt, ze, Pe)
      }), [ze, Pe]), (0, Ot.useEffect)((() => {
        const tt = Qe.current;
        null !== tt && (tt.targetOutline.isVisible = null !== re, null !== re && tt.targetOutline.position.set(re.x - ce[0] + .5, re.y - ce[1] + .5, re.z - ce[2] + .5), tt.needsRender = !0)
      }), [re, ce]);
      return (0, Kt.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: He,
        children: [(0, Kt.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: Xe,
          style: {
            width: `${le.width}px`,
            height: `${le.height}px`
          },
          tabIndex: 0,
          "aria-label": xt("3D heatmap"),
          onClick: () => {
            const tt = Xe.current;
            if (null === tt) return;
            if (tt.focus({
                preventScroll: !0
              }), we || !Ne) return;
            const et = tt.requestPointerLock();
            et instanceof Promise ? et.catch((tt => {
              tt instanceof DOMException && ("WrongDocumentError" === tt.name || "NotSupportedError" === tt.name) && ae(!1)
            })) : Me.current = !0
          },
          ...Ue,
          onKeyDown: tt => {
            if (Ce && St.has(tt.code)) return tt.preventDefault(), void(() => {
              const tt = Xe.current;
              null !== tt && document.pointerLockElement === tt ? (0, ut.c)() : null === tt || void 0 === tt || tt.blur()
            })();
            const et = ct[tt.code];
            return Ce && void 0 !== et ? (tt.preventDefault(), void At(et)) : Ce && (0, Ct.b)("replayPlayPause", tt.code) && !(0, Ct.b)("Zoom", tt.code) ? (tt.preventDefault(), void(tt.repeat || Yt())) : Ce && tt.code === Rt ? (tt.preventDefault(), void it()) : Ce && tt.code === kt ? (tt.preventDefault(), void Se(null)) : Ce && tt.code === Ft ? (tt.preventDefault(), void ve((tt => !tt))) : void Ue.onKeyDown(tt)
          },
          onFocus: () => {
            Je(!0)
          },
          onBlur: () => {
            Je(!1), Ue.onBlur()
          }
        }), Ee && (0, Kt.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: xt("3D view isn't available in this browser.")
        }), Ce && (0, Kt.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, Kt.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: ze.position.map(((tt, et) => (tt + ce[et]).toFixed(2))).join(" ")
        }), he && (0, Kt.jsx)(Tt, {
          heading: ze.heading,
          pitch: ze.pitch,
          onViewFrom: tt => {
            const et = je(tt, -1),
              Vt = 0 === et[1] ? {
                heading: Math.atan2(et[0], et[2]),
                pitch: 0
              } : {
                heading: ze.heading,
                pitch: et[1] < 0 ? Gt : -Gt
              };
            Se(Oe(ke, Fe, Le, Vt))
          },
          onTurn: (tt, et) => {
            Se((Vt => function(tt, et, Vt, Ot) {
              return qe(tt, et, {
                heading: tt.heading + Vt * Bt,
                pitch: Math.max(-Gt, Math.min(Gt, tt.pitch + Ot * Bt))
              })
            }(null !== Vt && void 0 !== Vt ? Vt : oe.current.fittedView, De(ke), tt, et)))
          },
          onFlip: () => {
            Se((tt => function(tt, et) {
              return qe(tt, et, {
                heading: tt.heading + Math.PI,
                pitch: -tt.pitch
              })
            }(null !== tt && void 0 !== tt ? tt : oe.current.fittedView, De(ke))))
          }
        }), null !== re && (0, Kt.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === pt ? xt("studio:heatmapBlockReadout", {
            x: re.x,
            y: re.y,
            z: re.z,
            count: (0, Et.S)(re.value)
          }) : pt(re.x, re.y, re.z, re.value)
        }), (0, Kt.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [Ut, (0, Kt.jsx)(Mt.Q, {
            active: null === We,
            onClick: () => {
              Se(null)
            },
            children: (0, Kt.jsx)(bt.b, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function Tt(tt) {
      let {
        heading: et,
        pitch: Vt,
        onViewFrom: qt,
        onTurn: Dt,
        onFlip: mt
      } = tt;
      const {
        t: dt
      } = (0, wt.H)(), jt = (0, Ot.useRef)(null), Ht = ee({
        heading: et,
        pitch: Vt
      }), Xt = Ve(et), Qt = Xe(Ht, Xt), lt = At + it + 2, Et = Ut.flatMap((tt => [1, -1].map((et => {
        const Vt = je(tt.direction, et);
        return {
          ...tt,
          sign: et,
          direction: Vt,
          endX: lt + He(Vt, Xt) * At,
          endY: lt - He(Vt, Qt) * At,
          depth: He(Vt, Ht)
        }
      })))).sort(((tt, et) => et.depth - tt.depth));
      return (0, Kt.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * lt,
        height: 2 * lt,
        "aria-hidden": !0,
        onPointerDown: tt => {
          var et, Vt;
          tt.currentTarget.setPointerCapture(tt.pointerId);
          const Ot = tt.target,
            qt = Ot.getAttribute("data-end");
          jt.current = {
            pointerId: tt.pointerId,
            x: tt.clientX,
            y: tt.clientY,
            travel: 0,
            side: null === qt ? null : null !== (et = null === (Vt = Et[Number(qt)]) || void 0 === Vt ? void 0 : Vt.direction) && void 0 !== et ? et : null,
            isOnMiddle: Ot.hasAttribute("data-middle")
          }
        },
        onPointerMove: tt => {
          const et = jt.current;
          if (null === et || et.pointerId !== tt.pointerId) return;
          const Vt = tt.clientX - et.x,
            Ot = tt.clientY - et.y;
          et.x = tt.clientX, et.y = tt.clientY, et.travel += Math.abs(Vt) + Math.abs(Ot), et.travel >= pt && Dt(Vt, Ot)
        },
        onPointerUp: tt => {
          const et = jt.current;
          jt.current = null, null === et || et.pointerId !== tt.pointerId || et.travel >= pt || (null !== et.side ? qt(et.side) : et.isOnMiddle && mt())
        },
        onPointerCancel: () => {
          jt.current = null
        },
        children: [Et.map(((tt, et) => {
          const Vt = tt.sign > 0;
          return (0, Kt.jsxs)("g", {
            children: [(0, Kt.jsx)("line", {
              x1: lt,
              y1: lt,
              x2: tt.endX,
              y2: tt.endY,
              stroke: tt.colour,
              strokeOpacity: Vt ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, Kt.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": et,
              cx: tt.endX,
              cy: tt.endY,
              r: Vt ? it : it - 1,
              fill: tt.colour,
              fillOpacity: Vt ? 1 : .3,
              stroke: tt.colour,
              strokeWidth: Vt ? 0 : 1.5,
              children: (0, Kt.jsx)("title", {
                children: `${dt("View from")} ${Vt?"+":"\u2212"}${tt.name}`
              })
            }), Vt && (0, Kt.jsx)("text", {
              pointerEvents: "none",
              x: tt.endX,
              y: tt.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: tt.name
            })]
          }, `${Vt?"+":"-"}${tt.name}`)
        })), (0, Kt.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: lt,
          cy: lt,
          r: Yt,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, Kt.jsx)("title", {
            children: dt("View from the opposite side")
          })
        })]
      })
    }

    function gt(tt) {
      var et, Vt, Ot;
      const {
        chunkGridOrigin: qt,
        camera: Dt
      } = tt;
      if (null === qt) return;
      const mt = [Dt.position.x, Dt.position.y, Dt.position.z],
        dt = [0, 2].map((tt => Math.floor((mt[tt] + qt[tt]) / ft.e.ff))),
        jt = tt.chunkGridCentre;
      if (null !== jt && jt.every(((tt, et) => tt === dt[et]))) return;
      const Qt = null === (et = null === (Vt = tt.chunkGrid) || void 0 === Vt ? void 0 : Vt.isVisible) || void 0 === et || et;
      null === (Ot = tt.chunkGrid) || void 0 === Ot || Ot.dispose();
      const [Et, wt] = [0, 2].map(((tt, et) => {
        const Vt = [];
        for (let Ot = dt[et] - Lt; Ot <= dt[et] + Lt + 1; Ot++) Vt.push(Ot * ft.e.ff - qt[tt]);
        return Vt
      })), yt = -qt[1], Nt = [];
      for (const Ht of wt) Nt.push([new Xt.uf(Et[0], yt, Ht), new Xt.uf(Et[Et.length - 1], yt, Ht)]);
      for (const Ht of Et) Nt.push([new Xt.uf(Ht, yt, wt[0]), new Xt.uf(Ht, yt, wt[wt.length - 1])]);
      const Mt = (0, lt.c)("Heatmap3DChunkGrid", {
        lines: Nt
      }, tt.Fw);
      Mt.color = new Ht.Color3(.45, .6, .78), Mt.Gw = !1, Mt.isVisible = Qt, tt.chunkGrid = Mt, tt.chunkGridCentre = dt, tt.needsRender = !0
    }

    function st(tt, et, Vt, Ot) {
      tt.A4("matrix", function(tt, et) {
        const Vt = new Float32Array(16 * et);
        for (let Ot = 0; Ot < et; Ot++) {
          const et = 16 * Ot;
          Vt[et] = 1, Vt[et + 5] = 1, Vt[et + 10] = 1, Vt[et + 12] = tt[3 * Ot], Vt[et + 13] = tt[3 * Ot + 1], Vt[et + 14] = tt[3 * Ot + 2], Vt[et + 15] = 1
        }
        return Vt
      }(et, Ot), 16, !0), tt.A4("color", Vt, 4, !0), tt.isVisible = Ot > 0
    }

    function nt(tt) {
      const {
        camera: et,
        translucent: Vt
      } = tt, Ot = [et.position.x, et.position.y, et.position.z], qt = tt.translucentSortedFrom;
      if (null !== qt && Math.hypot(Ot[0] - qt[0], Ot[1] - qt[1], Ot[2] - qt[2]) < Zt) return;
      tt.translucentSortedFrom = Ot;
      const Dt = new Float64Array(Vt.count),
        mt = new Uint32Array(Vt.count);
      for (let Ht = 0; Ht < Vt.count; Ht++) {
        const tt = Vt.Of[3 * Ht] - Ot[0],
          et = Vt.Of[3 * Ht + 1] - Ot[1],
          qt = Vt.Of[3 * Ht + 2] - Ot[2];
        Dt[Ht] = tt * tt + et * et + qt * qt, mt[Ht] = Ht
      }
      mt.sort(((tt, et) => Dt[et] - Dt[tt]));
      const dt = new Float32Array(3 * Vt.count),
        jt = new Float32Array(4 * Vt.count);
      mt.forEach(((tt, et) => {
        dt.set(Vt.Of.subarray(3 * tt, 3 * tt + 3), 3 * et), jt.set(Vt.colours.subarray(4 * tt, 4 * tt + 4), 4 * et)
      })), st(tt.translucentCells, dt, jt, Vt.count), tt.needsRender = !0
    }

    function te(tt, et) {
      const Vt = (Vt, Ot, qt) => new Xt.uf(0 === Vt ? tt[0] : et[0], 0 === Ot ? tt[1] : et[1], 0 === qt ? tt[2] : et[2]),
        Ot = [];
      for (const qt of [0, 1])
        for (const tt of [0, 1]) Ot.push([Vt(0, qt, tt), Vt(1, qt, tt)], [Vt(qt, 0, tt), Vt(qt, 1, tt)], [Vt(qt, tt, 0), Vt(qt, tt, 1)]);
      return Ot
    }

    function ee(tt) {
      return [Math.sin(tt.heading) * Math.cos(tt.pitch), -Math.sin(tt.pitch), Math.cos(tt.heading) * Math.cos(tt.pitch)]
    }

    function Ve(tt) {
      return [Math.cos(tt), 0, -Math.sin(tt)]
    }

    function Oe(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: zt,
        pitch: ot
      };
      const qt = [tt.max[0] - tt.min[0], tt.max[1] - tt.min[1], tt.max[2] - tt.min[2]],
        Dt = ee(Ot),
        mt = Ve(Ot.heading),
        dt = Xe(Dt, mt),
        jt = Math.tan(Vt / 2),
        Ht = jt * et;
      let Xt = 1;
      for (const Qt of [-qt[0] / 2, qt[0] / 2])
        for (const tt of [-qt[1] / 2, qt[1] / 2])
          for (const et of [-qt[2] / 2, qt[2] / 2]) {
            const Vt = [Qt, tt, et],
              Ot = He(Vt, Dt);
            Xt = Math.max(Xt, Math.abs(He(Vt, mt)) / Ht - Ot, Math.abs(He(Vt, dt)) / jt - Ot)
          }
      return {
        position: de([tt.min[0] + qt[0] / 2, tt.min[1] + qt[1] / 2, tt.min[2] + qt[2] / 2], je(Dt, -Xt * rt)),
        heading: Ot.heading,
        pitch: Ot.pitch
      }
    }

    function qe(tt, et, Vt) {
      const Ot = me(tt),
        qt = me(Vt),
        Dt = de(tt.position, je(et, -1)),
        mt = [0, 1, 2].reduce(((tt, et) => de(tt, je(qt[et], He(Dt, Ot[et])))), [0, 0, 0]);
      return {
        position: de(et, mt),
        heading: Vt.heading,
        pitch: Vt.pitch
      }
    }

    function De(tt) {
      return je(de(tt.min, tt.max), .5)
    }

    function me(tt) {
      const et = ee(tt),
        Vt = Ve(tt.heading);
      return [et, Vt, Xe(et, Vt)]
    }

    function de(tt, et) {
      return [tt[0] + et[0], tt[1] + et[1], tt[2] + et[2]]
    }

    function je(tt, et) {
      return [tt[0] * et, tt[1] * et, tt[2] * et]
    }

    function He(tt, et) {
      return tt[0] * et[0] + tt[1] * et[1] + tt[2] * et[2]
    }

    function Xe(tt, et) {
      return [tt[1] * et[2] - tt[2] * et[1], tt[2] * et[0] - tt[0] * et[2], tt[0] * et[1] - tt[1] * et[0]]
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);