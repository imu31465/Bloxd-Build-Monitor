export const id = 240;
export const ids = [240];
export const modules = {
  39229: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => Rb
    });
    sb(6117);
    var kb = sb(64),
      Wb = sb(39232),
      ab = sb(39522),
      Tb = sb(39651),
      Ub = sb(39695),
      Ib = sb(39709),
      Hb = sb(36821),
      fb = sb(36654),
      Mb = sb(39830),
      Xb = sb(39873),
      nb = (sb(39902), sb(1235)),
      mb = sb(223),
      lb = sb(1197),
      Qb = sb(19),
      eb = sb(2598),
      Cb = sb(1431),
      Nb = sb(1039),
      Vb = sb(6115),
      Lb = sb(6119),
      ub = sb(4189),
      Yb = sb(1087);
    const hb = 1.2,
      Jb = .2,
      gb = .0066 * Math.PI / 180,
      Bb = new Set(["Escape", "KeyG"]),
      tb = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      yb = "ArrowUp",
      Pb = new Set([...Object.keys(tb), yb, "ArrowDown"]),
      Db = 32,
      Eb = 1,
      ib = 10,
      Ob = "F4",
      Gb = "Period",
      Kb = Math.PI / 2 - .001,
      Zb = Math.PI / 6,
      zb = Math.PI / 6,
      qb = 1.08,
      db = [{
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
      Ab = 24,
      wb = 7,
      rb = 4,
      ob = .01,
      Sb = 4;

    function Rb(bb) {
      let {
        heatmap: cb,
        scale: sb,
        fullyOpaqueFrom: Eb,
        bounds: Zb,
        fitBounds: zb,
        schematic: qb,
        controls: db,
        onStepTime: Ab,
        onShowAllTime: wb,
        onTogglePlaying: rb,
        getReadout: Sb = null
      } = bb;
      const {
        t: Rb
      } = (0, lb.E)(), {
        clientEscMenuOptions: ac
      } = (0, Qb.p)(["clientEscMenuOptions"]), Ic = (0, kb.useRef)(null), Hc = (0, kb.useRef)(null), fc = (0, kb.useRef)(null), Mc = (0, eb.b)(Ic), [Xc, nc] = (0, kb.useState)(!1), [mc, lc] = (0, kb.useState)(!1), [Qc, ec] = (0, kb.useState)(!0), Cc = (0, kb.useRef)(!1), [Nc, Vc] = (0, kb.useState)(!1), Lc = mc || !Qc && Nc, [uc, Yc] = (0, kb.useState)(!1), [hc, Jc] = (0, kb.useState)(!0), [gc, Bc] = (0, kb.useState)(null), tc = Zb.min, [yc, Pc] = (0, kb.useState)(tc);
      yc[0] === tc[0] && yc[1] === tc[1] && yc[2] === tc[2] || (Pc(tc), null !== gc && Bc({
        ...gc,
        position: Tc(gc.position, Tc(yc, Uc(tc, -1)))
      }));
      const Dc = (0, kb.useMemo)((() => function(bb) {
          return [bb.max[0] - bb.min[0] + 1, bb.max[1] - bb.min[1] + 1, bb.max[2] - bb.min[2] + 1]
        }(Zb)), [Zb]),
        Ec = (0, kb.useMemo)((() => function(bb, cb) {
          const sb = [],
            kb = [];
          for (const [Wb, ab] of Object.entries(bb.frequencies)) {
            const bb = Number(Wb);
            for (const [Wb, Tb] of Object.entries(ab)) {
              const ab = Number(Wb);
              for (const [Wb, Ub] of Object.entries(Tb)) Ub <= 0 || (sb.push(bb - cb[0], ab - cb[1], Number(Wb) - cb[2]), kb.push(Ub))
            }
          }
          return {
            positions: Int32Array.from(sb),
            values: Float64Array.from(kb),
            count: kb.length
          }
        }(cb, tc)), [cb, tc]),
        ic = hb * ac.cameraFOV / 100,
        Oc = Mc.height > 0 ? Mc.width / Mc.height : 1,
        Gc = (0, kb.useMemo)((() => function(bb, cb) {
          return {
            min: [bb.min[0] - cb[0], bb.min[1] - cb[1], bb.min[2] - cb[2]],
            max: [bb.max[0] - cb[0] + 1, bb.max[1] - cb[1] + 1, bb.max[2] - cb[2] + 1]
          }
        }(zb, tc)), [zb, tc]),
        Kc = sc(Gc, Oc, ic),
        Zc = null !== gc && void 0 !== gc ? gc : Kc,
        zc = (0, kb.useRef)({
          fittedView: Kc,
          fieldOfView: ic,
          mouseSensitivity: ac.mouseSensitivity,
          canLock: Qc
        });
      zc.current = {
        fittedView: Kc,
        fieldOfView: ic,
        mouseSensitivity: ac.mouseSensitivity,
        canLock: Qc
      };
      const qc = (0, kb.useMemo)((() => {
          if (!Lc) return null;
          const bb = (bb, sb, kb) => {
              var Wb, ab, Tb;
              return null !== (Wb = null === (ab = cb.frequencies[bb + tc[0]]) || void 0 === ab || null === (Tb = ab[sb + tc[1]]) || void 0 === Tb ? void 0 : Tb[kb + tc[2]]) && void 0 !== Wb ? Wb : 0
            },
            kb = function(bb, cb, sb, kb) {
              let Wb = 0,
                ab = 1 / 0;
              for (const Mb of [0, 1, 2]) {
                if (0 === cb[Mb]) {
                  if (bb[Mb] < 0 || bb[Mb] > sb[Mb]) return null;
                  continue
                }
                const kb = (0 - bb[Mb]) / cb[Mb],
                  Tb = (sb[Mb] - bb[Mb]) / cb[Mb];
                Wb = Math.max(Wb, Math.min(kb, Tb)), ab = Math.min(ab, Math.max(kb, Tb))
              }
              if (Wb > ab) return null;
              const Tb = [0, 1, 2].map((kb => Math.min(sb[kb] - 1, Math.max(0, Math.floor(bb[kb] + cb[kb] * Wb))))),
                Ub = [0, 1, 2].map((bb => Math.sign(cb[bb]))),
                Ib = [0, 1, 2].map((sb => {
                  if (0 === Ub[sb]) return 1 / 0;
                  return ((Ub[sb] > 0 ? Tb[sb] + 1 : Tb[sb]) - bb[sb]) / cb[sb]
                })),
                Hb = [0, 1, 2].map((bb => 0 === Ub[bb] ? 1 / 0 : Math.abs(1 / cb[bb])));
              let fb = null;
              for (;;) {
                const bb = kb(Tb[0], Tb[1], Tb[2]);
                if (bb >= 1) return Tb;
                bb > 0 && (fb = [Tb[0], Tb[1], Tb[2]]);
                const cb = Ib[0] < Ib[1] ? Ib[0] < Ib[2] ? 0 : 2 : Ib[1] < Ib[2] ? 1 : 2;
                if (Ib[cb] > ab) return fb;
                if (Tb[cb] += Ub[cb], Ib[cb] += Hb[cb], Tb[cb] < 0 || Tb[cb] >= sb[cb]) return fb
              }
            }(Zc.position, bc(Zc), Dc, ((cb, kb, Wb) => (0, Vb.v)(bb(cb, kb, Wb), sb, Eb)));
          return null === kb ? null : {
            x: kb[0] + tc[0],
            y: kb[1] + tc[1],
            z: kb[2] + tc[2],
            value: bb(kb[0], kb[1], kb[2])
          }
        }), [Lc, cb, tc, Zc, Dc, sb, Eb]),
        {
          keyHandlers: dc
        } = (0, Lb.f)({
          isEnabled: Lc,
          claimedKeyCodes: Pb,
          hX: bb => {
            Bc((cb => function(bb, cb) {
              const sb = [Math.sin(bb.heading), 0, Math.cos(bb.heading)],
                kb = Tc(Tc(Uc(sb, cb.forward), Uc(cc(bb.heading), cb.right)), [0, cb.up, 0]);
              return {
                ...bb,
                position: Tc(bb.position, kb)
              }
            }(null !== cb && void 0 !== cb ? cb : zc.current.fittedView, bb)))
          },
          onZoomChange: Yc
        });
      (0, kb.useEffect)((() => {
        const bb = Hc.current;
        if (!bb) return;
        let cb;
        try {
          cb = function(bb, cb) {
            const sb = new Wb.c(bb, !0, {
                stencil: !1
              }, !0),
              kb = new ab.c(sb),
              [nb, mb, lb] = Vb.I;
            kb.clearColor = new Hb.e(nb / 255, mb / 255, lb / 255, 1);
            const Qb = new Tb.b("Heatmap3DCamera", fb.Fm.Zero(), kb);
            Qb.fov = cb, Qb.minZ = .05;
            const eb = new Ub.b("Heatmap3DLight", new fb.Fm(.4, 1, -.6), kb);
            eb.diffuse = Hb.Color3.White(), eb.groundColor = Hb.Color3.Black(), eb.specular = Hb.Color3.Black();
            const Cb = new Ib.StandardMaterial("Heatmap3DCellMaterial", kb);
            Cb.diffuseColor = new Hb.Color3(.4, .4, .4), Cb.emissiveColor = new Hb.Color3(.62, .62, .62), Cb.specularColor = Hb.Color3.Black();
            const Nb = (0, Mb.d)("Heatmap3DCells", {
              size: 1
            }, kb);
            Nb.material = Cb, Nb.UQ = !1, Nb.Rm = !0, Nb.isVisible = !1;
            const Lb = (0, Mb.d)("Heatmap3DTranslucentCells", {
              size: 1
            }, kb);
            Lb.material = Cb, Lb.hasVertexAlpha = !0, Lb.UQ = !1, Lb.Rm = !0, Lb.isVisible = !1;
            const ub = new Ib.StandardMaterial("Heatmap3DSchematicMaterial", kb);
            ub.diffuseColor = new Hb.Color3(.6, .6, .6), ub.emissiveColor = new Hb.Color3(.4, .4, .4), ub.specularColor = Hb.Color3.Black();
            const Yb = (0, Mb.d)("Heatmap3DSchematicBlocks", {
              size: 1
            }, kb);
            Yb.material = ub, Yb.UQ = !1, Yb.Rm = !0, Yb.isVisible = !1;
            const hb = (0, Xb.b)("Heatmap3DTarget", {
              lines: pb([-.52, -.52, -.52], [.52, .52, .52])
            }, kb);
            return hb.color = new Hb.Color3(.06, .14, .23), hb.renderingGroupId = 1, hb.UQ = !1, hb.isVisible = !1, {
              engine: sb,
              aQ: kb,
              camera: Qb,
              cells: Nb,
              translucentCells: Lb,
              translucent: {
                ml: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: Yb,
              targetOutline: hb,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: cb,
              needsRender: !0
            }
          }(bb, zc.current.fieldOfView)
        } catch (sb) {
          return console.error("Failed to start the 3D heatmap", sb), void nc(!0)
        }
        return fc.current = cb, cb.engine.runRenderLoop((() => {
          const bb = cb.camera;
          bb.fov !== cb.targetFieldOfView && (bb.fov += (cb.targetFieldOfView - bb.fov) * (bb.fov > cb.targetFieldOfView ? .3 : .2), Math.abs(cb.targetFieldOfView - bb.fov) < 5e-4 && (bb.fov = cb.targetFieldOfView), cb.needsRender = !0), cb.needsRender && (cb.aQ.render(), cb.needsRender = !cb.aQ.isReady() || !cb.engine.areAllEffectsReady())
        })), () => {
          fc.current = null, cb.engine.dispose()
        }
      }), []), (0, kb.useEffect)((() => {
        const bb = Hc.current;
        if (!bb) return;
        const cb = () => {
            Cc.current = !1, lc(document.pointerLockElement === bb)
          },
          sb = () => {
            Cc.current && (Cc.current = !1, ec(!1))
          },
          kb = cb => {
            const sb = !zc.current.canLock && document.activeElement === bb && 0 !== (1 & cb.buttons);
            if (document.pointerLockElement !== bb && !sb) return;
            const kb = zc.current.mouseSensitivity * gb;
            Bc((bb => function(bb, cb, sb) {
              const kb = 2 * Math.PI;
              return {
                ...bb,
                heading: ((bb.heading + cb) % kb + kb) % kb,
                pitch: Math.max(-Kb, Math.min(Kb, bb.pitch + sb))
              }
            }(null !== bb && void 0 !== bb ? bb : zc.current.fittedView, cb.movementX * kb, cb.movementY * kb)))
          };
        return document.addEventListener("pointerlockchange", cb), document.addEventListener("pointerlockerror", sb), document.addEventListener("pointermove", kb), () => {
          document.removeEventListener("pointerlockchange", cb), document.removeEventListener("pointerlockerror", sb), document.removeEventListener("pointermove", kb), document.pointerLockElement === bb && (0, ub.c)()
        }
      }), []), (0, kb.useEffect)((() => {
        const bb = fc.current;
        null !== bb && 0 !== Mc.width && 0 !== Mc.height && (bb.engine.resize(), bb.needsRender = !0)
      }), [Mc.width, Mc.height]), (0, kb.useEffect)((() => {
        const bb = fc.current;
        null !== bb && (bb.targetFieldOfView = ic * (uc ? Jb : 1))
      }), [ic, uc]), (0, kb.useEffect)((() => {
        const bb = fc.current;
        null !== bb && function(bb, cb, sb, kb) {
          const Wb = [],
            ab = [],
            Tb = [],
            Ub = [];
          for (let Ib = 0; Ib < cb.count; Ib++) {
            const bb = cb.values[Ib],
              Hb = (0, Vb.v)(bb, sb, kb);
            if (Hb <= 0) continue;
            const [fb, Mb, Xb] = (0, Vb.m)((0, Vb.B)(bb, sb)), nb = Hb >= 1;
            (nb ? Wb : Tb).push(cb.positions[3 * Ib] + .5, cb.positions[3 * Ib + 1] + .5, cb.positions[3 * Ib + 2] + .5), (nb ? ab : Ub).push(fb / 255, Mb / 255, Xb / 255, Hb)
          }
          xb(bb.cells, Float32Array.from(Wb), Float32Array.from(ab), ab.length / 4), bb.translucent = {
            ml: Float32Array.from(Tb),
            colours: Float32Array.from(Ub),
            count: Ub.length / 4
          }, bb.translucentSortedFrom = null, jb(bb), bb.needsRender = !0
        }(bb, Ec, sb, Eb)
      }), [Ec, sb, Eb]), (0, kb.useEffect)((() => {
        const bb = fc.current;
        null !== bb && function(bb, cb) {
          bb.chunkGridOrigin = cb, bb.chunkGridCentre = null, Fb(bb)
        }(bb, Zb.min)
      }), [Zb]), (0, kb.useEffect)((() => {
        const bb = fc.current;
        null !== bb && function(bb, cb, sb) {
          const kb = [],
            Wb = [];
          if (null !== cb) {
            const {
              positions: bb,
              colours: ab,
              count: Tb
            } = cb.surface;
            for (let cb = 0; cb < Tb; cb++) {
              const Tb = [bb[3 * cb], bb[3 * cb + 1], bb[3 * cb + 2]];
              [0, 1, 2].every((bb => Tb[bb] >= sb.min[bb] - Db && Tb[bb] <= sb.max[bb] + Db)) && (kb.push(Tb[0] - sb.min[0] + .5, Tb[1] - sb.min[1] + .5, Tb[2] - sb.min[2] + .5), Wb.push(ab[3 * cb] / 255, ab[3 * cb + 1] / 255, ab[3 * cb + 2] / 255, 1))
            }
          }
          xb(bb.schematicBlocks, Float32Array.from(kb), Float32Array.from(Wb), Wb.length / 4), bb.needsRender = !0
        }(bb, qb, Zb)
      }), [qb, Zb]), (0, kb.useEffect)((() => {
        const bb = fc.current;
        null !== bb && null !== bb.chunkGrid && (bb.chunkGrid.isVisible = hc, bb.needsRender = !0)
      }), [hc, Zb]), (0, kb.useEffect)((() => {
        const bb = fc.current;
        null !== bb && function(bb, cb, sb) {
          const {
            camera: kb
          } = bb;
          kb.position.set(cb.position[0], cb.position[1], cb.position[2]), kb.rotation.set(cb.pitch, cb.heading, 0);
          const Wb = (ib + 1) * mb.e.qm * Math.sqrt(3);
          kb.maxZ = Math.max(Wb, Math.hypot(...Tc(cb.position, Uc(Wc({
            min: [0, 0, 0],
            max: sb
          }), -1))) + 2 * Math.hypot(...sb)), Fb(bb), jb(bb), bb.needsRender = !0
        }(bb, Zc, Dc)
      }), [Zc, Dc]), (0, kb.useEffect)((() => {
        const bb = fc.current;
        null !== bb && (bb.targetOutline.isVisible = null !== qc, null !== qc && bb.targetOutline.position.set(qc.x - tc[0] + .5, qc.y - tc[1] + .5, qc.z - tc[2] + .5), bb.needsRender = !0)
      }), [qc, tc]);
      return (0, Yb.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: Ic,
        children: [(0, Yb.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: Hc,
          style: {
            width: `${Mc.width}px`,
            height: `${Mc.height}px`
          },
          tabIndex: 0,
          "aria-label": Rb("3D heatmap"),
          onClick: () => {
            const bb = Hc.current;
            if (null === bb) return;
            if (bb.focus({
                preventScroll: !0
              }), mc || !Qc) return;
            const cb = bb.requestPointerLock();
            cb instanceof Promise ? cb.catch((bb => {
              bb instanceof DOMException && ("WrongDocumentError" === bb.name || "NotSupportedError" === bb.name) && ec(!1)
            })) : Cc.current = !0
          },
          ...dc,
          onKeyDown: bb => {
            if (Lc && Bb.has(bb.code)) return bb.preventDefault(), void(() => {
              const bb = Hc.current;
              null !== bb && document.pointerLockElement === bb ? (0, ub.c)() : null === bb || void 0 === bb || bb.blur()
            })();
            const cb = tb[bb.code];
            return Lc && void 0 !== cb ? (bb.preventDefault(), void Ab(cb)) : Lc && (0, Lb.c)("replayPlayPause", bb.code) && !(0, Lb.c)("Zoom", bb.code) ? (bb.preventDefault(), void(bb.repeat || rb())) : Lc && bb.code === yb ? (bb.preventDefault(), void wb()) : Lc && bb.code === Gb ? (bb.preventDefault(), void Bc(null)) : Lc && bb.code === Ob ? (bb.preventDefault(), void Jc((bb => !bb))) : void dc.onKeyDown(bb)
          },
          onFocus: () => {
            Vc(!0)
          },
          onBlur: () => {
            Vc(!1), dc.onBlur()
          }
        }), Xc && (0, Yb.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: Rb("3D view isn't available in this browser.")
        }), Lc && (0, Yb.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, Yb.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: Zc.position.map(((bb, cb) => (bb + tc[cb]).toFixed(2))).join(" ")
        }), hc && (0, Yb.jsx)(vb, {
          heading: Zc.heading,
          pitch: Zc.pitch,
          onViewFrom: bb => {
            const cb = Uc(bb, -1),
              sb = 0 === cb[1] ? {
                heading: Math.atan2(cb[0], cb[2]),
                pitch: 0
              } : {
                heading: Zc.heading,
                pitch: cb[1] < 0 ? Kb : -Kb
              };
            Bc(sc(Gc, Oc, ic, sb))
          },
          onTurn: (bb, cb) => {
            Bc((sb => function(bb, cb, sb, kb) {
              return kc(bb, cb, {
                heading: bb.heading + sb * ob,
                pitch: Math.max(-Kb, Math.min(Kb, bb.pitch + kb * ob))
              })
            }(null !== sb && void 0 !== sb ? sb : zc.current.fittedView, Wc(Gc), bb, cb)))
          },
          onFlip: () => {
            Bc((bb => function(bb, cb) {
              return kc(bb, cb, {
                heading: bb.heading + Math.PI,
                pitch: -bb.pitch
              })
            }(null !== bb && void 0 !== bb ? bb : zc.current.fittedView, Wc(Gc))))
          }
        }), null !== qc && (0, Yb.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === Sb ? Rb("studio:heatmapBlockReadout", {
            x: qc.x,
            y: qc.y,
            z: qc.z,
            count: (0, nb.K)(qc.value)
          }) : Sb(qc.x, qc.y, qc.z, qc.value)
        }), (0, Yb.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [db, (0, Yb.jsx)(Cb.M, {
            active: null === gc,
            onClick: () => {
              Bc(null)
            },
            children: (0, Yb.jsx)(Nb.b, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function vb(bb) {
      let {
        heading: cb,
        pitch: sb,
        onViewFrom: Wb,
        onTurn: ab,
        onFlip: Tb
      } = bb;
      const {
        t: Ub
      } = (0, lb.E)(), Ib = (0, kb.useRef)(null), Hb = bc({
        heading: cb,
        pitch: sb
      }), fb = cc(cb), Mb = Hc(Hb, fb), Xb = Ab + wb + 2, nb = db.flatMap((bb => [1, -1].map((cb => {
        const sb = Uc(bb.direction, cb);
        return {
          ...bb,
          sign: cb,
          direction: sb,
          endX: Xb + Ic(sb, fb) * Ab,
          endY: Xb - Ic(sb, Mb) * Ab,
          depth: Ic(sb, Hb)
        }
      })))).sort(((bb, cb) => cb.depth - bb.depth));
      return (0, Yb.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * Xb,
        height: 2 * Xb,
        "aria-hidden": !0,
        onPointerDown: bb => {
          var cb, sb;
          bb.currentTarget.setPointerCapture(bb.pointerId);
          const kb = bb.target,
            Wb = kb.getAttribute("data-end");
          Ib.current = {
            pointerId: bb.pointerId,
            x: bb.clientX,
            y: bb.clientY,
            travel: 0,
            side: null === Wb ? null : null !== (cb = null === (sb = nb[Number(Wb)]) || void 0 === sb ? void 0 : sb.direction) && void 0 !== cb ? cb : null,
            isOnMiddle: kb.hasAttribute("data-middle")
          }
        },
        onPointerMove: bb => {
          const cb = Ib.current;
          if (null === cb || cb.pointerId !== bb.pointerId) return;
          const sb = bb.clientX - cb.x,
            kb = bb.clientY - cb.y;
          cb.x = bb.clientX, cb.y = bb.clientY, cb.travel += Math.abs(sb) + Math.abs(kb), cb.travel >= Sb && ab(sb, kb)
        },
        onPointerUp: bb => {
          const cb = Ib.current;
          Ib.current = null, null === cb || cb.pointerId !== bb.pointerId || cb.travel >= Sb || (null !== cb.side ? Wb(cb.side) : cb.isOnMiddle && Tb())
        },
        onPointerCancel: () => {
          Ib.current = null
        },
        children: [nb.map(((bb, cb) => {
          const sb = bb.sign > 0;
          return (0, Yb.jsxs)("g", {
            children: [(0, Yb.jsx)("line", {
              x1: Xb,
              y1: Xb,
              x2: bb.endX,
              y2: bb.endY,
              stroke: bb.colour,
              strokeOpacity: sb ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, Yb.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": cb,
              cx: bb.endX,
              cy: bb.endY,
              r: sb ? wb : wb - 1,
              fill: bb.colour,
              fillOpacity: sb ? 1 : .3,
              stroke: bb.colour,
              strokeWidth: sb ? 0 : 1.5,
              children: (0, Yb.jsx)("title", {
                children: `${Ub("View from")} ${sb?"+":"\u2212"}${bb.name}`
              })
            }), sb && (0, Yb.jsx)("text", {
              pointerEvents: "none",
              x: bb.endX,
              y: bb.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: bb.name
            })]
          }, `${sb?"+":"-"}${bb.name}`)
        })), (0, Yb.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: Xb,
          cy: Xb,
          r: rb,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, Yb.jsx)("title", {
            children: Ub("View from the opposite side")
          })
        })]
      })
    }

    function Fb(bb) {
      var cb, sb, kb;
      const {
        chunkGridOrigin: Wb,
        camera: ab
      } = bb;
      if (null === Wb) return;
      const Tb = [ab.position.x, ab.position.y, ab.position.z],
        Ub = [0, 2].map((bb => Math.floor((Tb[bb] + Wb[bb]) / mb.e.qm))),
        Ib = bb.chunkGridCentre;
      if (null !== Ib && Ib.every(((bb, cb) => bb === Ub[cb]))) return;
      const Mb = null === (cb = null === (sb = bb.chunkGrid) || void 0 === sb ? void 0 : sb.isVisible) || void 0 === cb || cb;
      null === (kb = bb.chunkGrid) || void 0 === kb || kb.dispose();
      const [nb, lb] = [0, 2].map(((bb, cb) => {
        const sb = [];
        for (let kb = Ub[cb] - ib; kb <= Ub[cb] + ib + 1; kb++) sb.push(kb * mb.e.qm - Wb[bb]);
        return sb
      })), Qb = -Wb[1], eb = [];
      for (const Hb of lb) eb.push([new fb.Fm(nb[0], Qb, Hb), new fb.Fm(nb[nb.length - 1], Qb, Hb)]);
      for (const Hb of nb) eb.push([new fb.Fm(Hb, Qb, lb[0]), new fb.Fm(Hb, Qb, lb[lb.length - 1])]);
      const Cb = (0, Xb.b)("Heatmap3DChunkGrid", {
        lines: eb
      }, bb.aQ);
      Cb.color = new Hb.Color3(.45, .6, .78), Cb.UQ = !1, Cb.isVisible = Mb, bb.chunkGrid = Cb, bb.chunkGridCentre = Ub, bb.needsRender = !0
    }

    function xb(bb, cb, sb, kb) {
      bb.U3("matrix", function(bb, cb) {
        const sb = new Float32Array(16 * cb);
        for (let kb = 0; kb < cb; kb++) {
          const cb = 16 * kb;
          sb[cb] = 1, sb[cb + 5] = 1, sb[cb + 10] = 1, sb[cb + 12] = bb[3 * kb], sb[cb + 13] = bb[3 * kb + 1], sb[cb + 14] = bb[3 * kb + 2], sb[cb + 15] = 1
        }
        return sb
      }(cb, kb), 16, !0), bb.U3("color", sb, 4, !0), bb.isVisible = kb > 0
    }

    function jb(bb) {
      const {
        camera: cb,
        translucent: sb
      } = bb, kb = [cb.position.x, cb.position.y, cb.position.z], Wb = bb.translucentSortedFrom;
      if (null !== Wb && Math.hypot(kb[0] - Wb[0], kb[1] - Wb[1], kb[2] - Wb[2]) < Eb) return;
      bb.translucentSortedFrom = kb;
      const ab = new Float64Array(sb.count),
        Tb = new Uint32Array(sb.count);
      for (let Hb = 0; Hb < sb.count; Hb++) {
        const bb = sb.ml[3 * Hb] - kb[0],
          cb = sb.ml[3 * Hb + 1] - kb[1],
          Wb = sb.ml[3 * Hb + 2] - kb[2];
        ab[Hb] = bb * bb + cb * cb + Wb * Wb, Tb[Hb] = Hb
      }
      Tb.sort(((bb, cb) => ab[cb] - ab[bb]));
      const Ub = new Float32Array(3 * sb.count),
        Ib = new Float32Array(4 * sb.count);
      Tb.forEach(((bb, cb) => {
        Ub.set(sb.ml.subarray(3 * bb, 3 * bb + 3), 3 * cb), Ib.set(sb.colours.subarray(4 * bb, 4 * bb + 4), 4 * cb)
      })), xb(bb.translucentCells, Ub, Ib, sb.count), bb.needsRender = !0
    }

    function pb(bb, cb) {
      const sb = (sb, kb, Wb) => new fb.Fm(0 === sb ? bb[0] : cb[0], 0 === kb ? bb[1] : cb[1], 0 === Wb ? bb[2] : cb[2]),
        kb = [];
      for (const Wb of [0, 1])
        for (const bb of [0, 1]) kb.push([sb(0, Wb, bb), sb(1, Wb, bb)], [sb(Wb, 0, bb), sb(Wb, 1, bb)], [sb(Wb, bb, 0), sb(Wb, bb, 1)]);
      return kb
    }

    function bc(bb) {
      return [Math.sin(bb.heading) * Math.cos(bb.pitch), -Math.sin(bb.pitch), Math.cos(bb.heading) * Math.cos(bb.pitch)]
    }

    function cc(bb) {
      return [Math.cos(bb), 0, -Math.sin(bb)]
    }

    function sc(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: Zb,
        pitch: zb
      };
      const Wb = [bb.max[0] - bb.min[0], bb.max[1] - bb.min[1], bb.max[2] - bb.min[2]],
        ab = bc(kb),
        Tb = cc(kb.heading),
        Ub = Hc(ab, Tb),
        Ib = Math.tan(sb / 2),
        Hb = Ib * cb;
      let fb = 1;
      for (const Mb of [-Wb[0] / 2, Wb[0] / 2])
        for (const bb of [-Wb[1] / 2, Wb[1] / 2])
          for (const cb of [-Wb[2] / 2, Wb[2] / 2]) {
            const sb = [Mb, bb, cb],
              kb = Ic(sb, ab);
            fb = Math.max(fb, Math.abs(Ic(sb, Tb)) / Hb - kb, Math.abs(Ic(sb, Ub)) / Ib - kb)
          }
      return {
        position: Tc([bb.min[0] + Wb[0] / 2, bb.min[1] + Wb[1] / 2, bb.min[2] + Wb[2] / 2], Uc(ab, -fb * qb)),
        heading: kb.heading,
        pitch: kb.pitch
      }
    }

    function kc(bb, cb, sb) {
      const kb = ac(bb),
        Wb = ac(sb),
        ab = Tc(bb.position, Uc(cb, -1)),
        Tb = [0, 1, 2].reduce(((bb, cb) => Tc(bb, Uc(Wb[cb], Ic(ab, kb[cb])))), [0, 0, 0]);
      return {
        position: Tc(cb, Tb),
        heading: sb.heading,
        pitch: sb.pitch
      }
    }

    function Wc(bb) {
      return Uc(Tc(bb.min, bb.max), .5)
    }

    function ac(bb) {
      const cb = bc(bb),
        sb = cc(bb.heading);
      return [cb, sb, Hc(cb, sb)]
    }

    function Tc(bb, cb) {
      return [bb[0] + cb[0], bb[1] + cb[1], bb[2] + cb[2]]
    }

    function Uc(bb, cb) {
      return [bb[0] * cb, bb[1] * cb, bb[2] * cb]
    }

    function Ic(bb, cb) {
      return bb[0] * cb[0] + bb[1] * cb[1] + bb[2] * cb[2]
    }

    function Hc(bb, cb) {
      return [bb[1] * cb[2] - bb[2] * cb[1], bb[2] * cb[0] - bb[0] * cb[2], bb[0] * cb[1] - bb[1] * cb[0]]
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);