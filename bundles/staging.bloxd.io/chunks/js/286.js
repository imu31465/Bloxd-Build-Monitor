export const id = 286;
export const ids = [286];
export const modules = {
  41491: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => Pb
    });
    Mb(7624);
    var eb = Mb(64),
      Hb = Mb(41496),
      pb = Mb(41759),
      Vb = Mb(41864),
      gb = Mb(41920),
      lb = Mb(41933),
      Lb = Mb(38401),
      Ib = Mb(38281),
      Ob = Mb(42074),
      Ub = Mb(42132),
      tb = (Mb(42161), Mb(1301)),
      Cb = Mb(225),
      Eb = Mb(1259),
      Fb = Mb(26),
      Bb = Mb(4005),
      sb = Mb(1616),
      mb = Mb(1475),
      hb = Mb(7616),
      zb = Mb(7627),
      Xb = Mb(5294),
      xb = Mb(1364);
    const jb = 1.2,
      Kb = .2,
      rb = .0066 * Math.PI / 180,
      Rb = new Set(["Escape", "KeyG"]),
      Db = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      cb = "ArrowUp",
      Yb = new Set([...Object.keys(Db), cb, "ArrowDown"]),
      Zb = 32,
      fb = 1,
      Ab = 10,
      Wb = "F4",
      Jb = "Period",
      Sb = Math.PI / 2 - .001,
      Nb = Math.PI / 6,
      vb = Math.PI / 6,
      Qb = 1.08,
      Gb = [{
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
      qb = 24,
      ab = 7,
      ib = 4,
      ub = .01,
      db = 4;

    function Pb(bb) {
      let {
        heatmap: wb,
        scale: Mb,
        fullyOpaqueFrom: fb,
        bounds: Nb,
        fitBounds: vb,
        schematic: Qb,
        controls: Gb,
        onStepTime: qb,
        onShowAllTime: ab,
        onTogglePlaying: ib,
        getReadout: db = null
      } = bb;
      const {
        t: Pb
      } = (0, Eb.C)(), {
        clientEscMenuOptions: pw
      } = (0, Fb.o)(["clientEscMenuOptions"]), lw = (0, eb.useRef)(null), Lw = (0, eb.useRef)(null), Iw = (0, eb.useRef)(null), Ow = (0, Bb.b)(lw), [Uw, tw] = (0, eb.useState)(!1), [Cw, Ew] = (0, eb.useState)(!1), [Fw, Bw] = (0, eb.useState)(!0), sw = (0, eb.useRef)(!1), [mw, hw] = (0, eb.useState)(!1), zw = Cw || !Fw && mw, [Xw, xw] = (0, eb.useState)(!1), [jw, Kw] = (0, eb.useState)(!0), [rw, Rw] = (0, eb.useState)(null), Dw = Nb.min, [Yw, Zw] = (0, eb.useState)(Dw);
      Yw[0] === Dw[0] && Yw[1] === Dw[1] && Yw[2] === Dw[2] || (Zw(Dw), null !== rw && Rw({
        ...rw,
        position: Vw(rw.position, Vw(Yw, gw(Dw, -1)))
      }));
      const fw = (0, eb.useMemo)((() => function(bb) {
          return [bb.max[0] - bb.min[0] + 1, bb.max[1] - bb.min[1] + 1, bb.max[2] - bb.min[2] + 1]
        }(Nb)), [Nb]),
        Aw = (0, eb.useMemo)((() => function(bb, wb) {
          const Mb = [],
            eb = [];
          for (const [Hb, pb] of Object.entries(bb.frequencies)) {
            const bb = Number(Hb);
            for (const [Hb, Vb] of Object.entries(pb)) {
              const pb = Number(Hb);
              for (const [Hb, gb] of Object.entries(Vb)) gb <= 0 || (Mb.push(bb - wb[0], pb - wb[1], Number(Hb) - wb[2]), eb.push(gb))
            }
          }
          return {
            positions: Int32Array.from(Mb),
            values: Float64Array.from(eb),
            count: eb.length
          }
        }(wb, Dw)), [wb, Dw]),
        Ww = jb * pw.cameraFOV / 100,
        Jw = Ow.height > 0 ? Ow.width / Ow.height : 1,
        Sw = (0, eb.useMemo)((() => function(bb, wb) {
          return {
            min: [bb.min[0] - wb[0], bb.min[1] - wb[1], bb.min[2] - wb[2]],
            max: [bb.max[0] - wb[0] + 1, bb.max[1] - wb[1] + 1, bb.max[2] - wb[2] + 1]
          }
        }(vb, Dw)), [vb, Dw]),
        Nw = Mw(Sw, Jw, Ww),
        vw = null !== rw && void 0 !== rw ? rw : Nw,
        Qw = (0, eb.useRef)({
          fittedView: Nw,
          fieldOfView: Ww,
          mouseSensitivity: pw.mouseSensitivity,
          canLock: Fw
        });
      Qw.current = {
        fittedView: Nw,
        fieldOfView: Ww,
        mouseSensitivity: pw.mouseSensitivity,
        canLock: Fw
      };
      const Gw = (0, eb.useMemo)((() => {
          if (!zw) return null;
          const bb = (bb, Mb, eb) => {
              var Hb, pb, Vb;
              return null !== (Hb = null === (pb = wb.frequencies[bb + Dw[0]]) || void 0 === pb || null === (Vb = pb[Mb + Dw[1]]) || void 0 === Vb ? void 0 : Vb[eb + Dw[2]]) && void 0 !== Hb ? Hb : 0
            },
            eb = function(bb, wb, Mb, eb) {
              let Hb = 0,
                pb = 1 / 0;
              for (const Ob of [0, 1, 2]) {
                if (0 === wb[Ob]) {
                  if (bb[Ob] < 0 || bb[Ob] > Mb[Ob]) return null;
                  continue
                }
                const eb = (0 - bb[Ob]) / wb[Ob],
                  Vb = (Mb[Ob] - bb[Ob]) / wb[Ob];
                Hb = Math.max(Hb, Math.min(eb, Vb)), pb = Math.min(pb, Math.max(eb, Vb))
              }
              if (Hb > pb) return null;
              const Vb = [0, 1, 2].map((eb => Math.min(Mb[eb] - 1, Math.max(0, Math.floor(bb[eb] + wb[eb] * Hb))))),
                gb = [0, 1, 2].map((bb => Math.sign(wb[bb]))),
                lb = [0, 1, 2].map((Mb => {
                  if (0 === gb[Mb]) return 1 / 0;
                  return ((gb[Mb] > 0 ? Vb[Mb] + 1 : Vb[Mb]) - bb[Mb]) / wb[Mb]
                })),
                Lb = [0, 1, 2].map((bb => 0 === gb[bb] ? 1 / 0 : Math.abs(1 / wb[bb])));
              let Ib = null;
              for (;;) {
                const bb = eb(Vb[0], Vb[1], Vb[2]);
                if (bb >= 1) return Vb;
                bb > 0 && (Ib = [Vb[0], Vb[1], Vb[2]]);
                const wb = lb[0] < lb[1] ? lb[0] < lb[2] ? 0 : 2 : lb[1] < lb[2] ? 1 : 2;
                if (lb[wb] > pb) return Ib;
                if (Vb[wb] += gb[wb], lb[wb] += Lb[wb], Vb[wb] < 0 || Vb[wb] >= Mb[wb]) return Ib
              }
            }(vw.position, bw(vw), fw, ((wb, eb, Hb) => (0, hb.z)(bb(wb, eb, Hb), Mb, fb)));
          return null === eb ? null : {
            x: eb[0] + Dw[0],
            y: eb[1] + Dw[1],
            z: eb[2] + Dw[2],
            value: bb(eb[0], eb[1], eb[2])
          }
        }), [zw, wb, Dw, vw, fw, Mb, fb]),
        {
          keyHandlers: qw
        } = (0, zb.e)({
          isEnabled: zw,
          claimedKeyCodes: Yb,
          RU: bb => {
            Rw((wb => function(bb, wb) {
              const Mb = [Math.sin(bb.heading), 0, Math.cos(bb.heading)],
                eb = Vw(Vw(gw(Mb, wb.forward), gw(ww(bb.heading), wb.right)), [0, wb.up, 0]);
              return {
                ...bb,
                position: Vw(bb.position, eb)
              }
            }(null !== wb && void 0 !== wb ? wb : Qw.current.fittedView, bb)))
          },
          onZoomChange: xw
        });
      (0, eb.useEffect)((() => {
        const bb = Lw.current;
        if (!bb) return;
        let wb;
        try {
          wb = function(bb, wb) {
            const Mb = new Hb.e(bb, !0, {
                stencil: !1
              }, !0),
              eb = new pb.b(Mb),
              [tb, Cb, Eb] = hb.Q;
            eb.clearColor = new Lb.c(tb / 255, Cb / 255, Eb / 255, 1);
            const Fb = new Vb.d("Heatmap3DCamera", Ib.YC.Zero(), eb);
            Fb.fov = wb, Fb.minZ = .05;
            const Bb = new gb.c("Heatmap3DLight", new Ib.YC(.4, 1, -.6), eb);
            Bb.diffuse = Lb.Color3.White(), Bb.groundColor = Lb.Color3.Black(), Bb.specular = Lb.Color3.Black();
            const sb = new lb.StandardMaterial("Heatmap3DCellMaterial", eb);
            sb.diffuseColor = new Lb.Color3(.4, .4, .4), sb.emissiveColor = new Lb.Color3(.62, .62, .62), sb.specularColor = Lb.Color3.Black();
            const mb = (0, Ob.b)("Heatmap3DCells", {
              size: 1
            }, eb);
            mb.material = sb, mb.NE = !1, mb.cC = !0, mb.isVisible = !1;
            const zb = (0, Ob.b)("Heatmap3DTranslucentCells", {
              size: 1
            }, eb);
            zb.material = sb, zb.hasVertexAlpha = !0, zb.NE = !1, zb.cC = !0, zb.isVisible = !1;
            const Xb = new lb.StandardMaterial("Heatmap3DSchematicMaterial", eb);
            Xb.diffuseColor = new Lb.Color3(.6, .6, .6), Xb.emissiveColor = new Lb.Color3(.4, .4, .4), Xb.specularColor = Lb.Color3.Black();
            const xb = (0, Ob.b)("Heatmap3DSchematicBlocks", {
              size: 1
            }, eb);
            xb.material = Xb, xb.NE = !1, xb.cC = !0, xb.isVisible = !1;
            const jb = (0, Ub.d)("Heatmap3DTarget", {
              lines: kb([-.52, -.52, -.52], [.52, .52, .52])
            }, eb);
            return jb.color = new Lb.Color3(.06, .14, .23), jb.renderingGroupId = 1, jb.NE = !1, jb.isVisible = !1, {
              engine: Mb,
              JE: eb,
              camera: Fb,
              cells: mb,
              translucentCells: zb,
              translucent: {
                wF: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: xb,
              targetOutline: jb,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: wb,
              needsRender: !0
            }
          }(bb, Qw.current.fieldOfView)
        } catch (Mb) {
          return console.error("Failed to start the 3D heatmap", Mb), void tw(!0)
        }
        return Iw.current = wb, wb.engine.runRenderLoop((() => {
          const bb = wb.camera;
          bb.fov !== wb.targetFieldOfView && (bb.fov += (wb.targetFieldOfView - bb.fov) * (bb.fov > wb.targetFieldOfView ? .3 : .2), Math.abs(wb.targetFieldOfView - bb.fov) < 5e-4 && (bb.fov = wb.targetFieldOfView), wb.needsRender = !0), wb.needsRender && (wb.JE.render(), wb.needsRender = !wb.JE.isReady() || !wb.engine.areAllEffectsReady())
        })), () => {
          Iw.current = null, wb.engine.dispose()
        }
      }), []), (0, eb.useEffect)((() => {
        const bb = Lw.current;
        if (!bb) return;
        const wb = () => {
            sw.current = !1, Ew(document.pointerLockElement === bb)
          },
          Mb = () => {
            sw.current && (sw.current = !1, Bw(!1))
          },
          eb = wb => {
            const Mb = !Qw.current.canLock && document.activeElement === bb && 0 !== (1 & wb.buttons);
            if (document.pointerLockElement !== bb && !Mb) return;
            const eb = Qw.current.mouseSensitivity * rb;
            Rw((bb => function(bb, wb, Mb) {
              const eb = 2 * Math.PI;
              return {
                ...bb,
                heading: ((bb.heading + wb) % eb + eb) % eb,
                pitch: Math.max(-Sb, Math.min(Sb, bb.pitch + Mb))
              }
            }(null !== bb && void 0 !== bb ? bb : Qw.current.fittedView, wb.movementX * eb, wb.movementY * eb)))
          };
        return document.addEventListener("pointerlockchange", wb), document.addEventListener("pointerlockerror", Mb), document.addEventListener("pointermove", eb), () => {
          document.removeEventListener("pointerlockchange", wb), document.removeEventListener("pointerlockerror", Mb), document.removeEventListener("pointermove", eb), document.pointerLockElement === bb && (0, Xb.c)()
        }
      }), []), (0, eb.useEffect)((() => {
        const bb = Iw.current;
        null !== bb && 0 !== Ow.width && 0 !== Ow.height && (bb.engine.resize(), bb.needsRender = !0)
      }), [Ow.width, Ow.height]), (0, eb.useEffect)((() => {
        const bb = Iw.current;
        null !== bb && (bb.targetFieldOfView = Ww * (Xw ? Kb : 1))
      }), [Ww, Xw]), (0, eb.useEffect)((() => {
        const bb = Iw.current;
        null !== bb && function(bb, wb, Mb, eb) {
          const Hb = [],
            pb = [],
            Vb = [],
            gb = [];
          for (let lb = 0; lb < wb.count; lb++) {
            const bb = wb.values[lb],
              Lb = (0, hb.z)(bb, Mb, eb);
            if (Lb <= 0) continue;
            const [Ib, Ob, Ub] = (0, hb.r)((0, hb.K)(bb, Mb)), tb = Lb >= 1;
            (tb ? Hb : Vb).push(wb.positions[3 * lb] + .5, wb.positions[3 * lb + 1] + .5, wb.positions[3 * lb + 2] + .5), (tb ? pb : gb).push(Ib / 255, Ob / 255, Ub / 255, Lb)
          }
          ob(bb.cells, Float32Array.from(Hb), Float32Array.from(pb), pb.length / 4), bb.translucent = {
            wF: Float32Array.from(Vb),
            colours: Float32Array.from(gb),
            count: gb.length / 4
          }, bb.translucentSortedFrom = null, Tb(bb), bb.needsRender = !0
        }(bb, Aw, Mb, fb)
      }), [Aw, Mb, fb]), (0, eb.useEffect)((() => {
        const bb = Iw.current;
        null !== bb && function(bb, wb) {
          bb.chunkGridOrigin = wb, bb.chunkGridCentre = null, yb(bb)
        }(bb, Nb.min)
      }), [Nb]), (0, eb.useEffect)((() => {
        const bb = Iw.current;
        null !== bb && function(bb, wb, Mb) {
          const eb = [],
            Hb = [];
          if (null !== wb) {
            const {
              positions: bb,
              colours: pb,
              count: Vb
            } = wb.surface;
            for (let wb = 0; wb < Vb; wb++) {
              const Vb = [bb[3 * wb], bb[3 * wb + 1], bb[3 * wb + 2]];
              [0, 1, 2].every((bb => Vb[bb] >= Mb.min[bb] - Zb && Vb[bb] <= Mb.max[bb] + Zb)) && (eb.push(Vb[0] - Mb.min[0] + .5, Vb[1] - Mb.min[1] + .5, Vb[2] - Mb.min[2] + .5), Hb.push(pb[3 * wb] / 255, pb[3 * wb + 1] / 255, pb[3 * wb + 2] / 255, 1))
            }
          }
          ob(bb.schematicBlocks, Float32Array.from(eb), Float32Array.from(Hb), Hb.length / 4), bb.needsRender = !0
        }(bb, Qb, Nb)
      }), [Qb, Nb]), (0, eb.useEffect)((() => {
        const bb = Iw.current;
        null !== bb && null !== bb.chunkGrid && (bb.chunkGrid.isVisible = jw, bb.needsRender = !0)
      }), [jw, Nb]), (0, eb.useEffect)((() => {
        const bb = Iw.current;
        null !== bb && function(bb, wb, Mb) {
          const {
            camera: eb
          } = bb;
          eb.position.set(wb.position[0], wb.position[1], wb.position[2]), eb.rotation.set(wb.pitch, wb.heading, 0);
          const Hb = (Ab + 1) * Cb.e.gO * Math.sqrt(3);
          eb.maxZ = Math.max(Hb, Math.hypot(...Vw(wb.position, gw(Hw({
            min: [0, 0, 0],
            max: Mb
          }), -1))) + 2 * Math.hypot(...Mb)), yb(bb), Tb(bb), bb.needsRender = !0
        }(bb, vw, fw)
      }), [vw, fw]), (0, eb.useEffect)((() => {
        const bb = Iw.current;
        null !== bb && (bb.targetOutline.isVisible = null !== Gw, null !== Gw && bb.targetOutline.position.set(Gw.x - Dw[0] + .5, Gw.y - Dw[1] + .5, Gw.z - Dw[2] + .5), bb.needsRender = !0)
      }), [Gw, Dw]);
      return (0, xb.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: lw,
        children: [(0, xb.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: Lw,
          style: {
            width: `${Ow.width}px`,
            height: `${Ow.height}px`
          },
          tabIndex: 0,
          "aria-label": Pb("3D heatmap"),
          onClick: () => {
            const bb = Lw.current;
            if (null === bb) return;
            if (bb.focus({
                preventScroll: !0
              }), Cw || !Fw) return;
            const wb = bb.requestPointerLock();
            wb instanceof Promise ? wb.catch((bb => {
              bb instanceof DOMException && ("WrongDocumentError" === bb.name || "NotSupportedError" === bb.name) && Bw(!1)
            })) : sw.current = !0
          },
          ...qw,
          onKeyDown: bb => {
            if (zw && Rb.has(bb.code)) return bb.preventDefault(), void(() => {
              const bb = Lw.current;
              null !== bb && document.pointerLockElement === bb ? (0, Xb.c)() : null === bb || void 0 === bb || bb.blur()
            })();
            const wb = Db[bb.code];
            return zw && void 0 !== wb ? (bb.preventDefault(), void qb(wb)) : zw && (0, zb.d)("replayPlayPause", bb.code) && !(0, zb.d)("Zoom", bb.code) ? (bb.preventDefault(), void(bb.repeat || ib())) : zw && bb.code === cb ? (bb.preventDefault(), void ab()) : zw && bb.code === Jb ? (bb.preventDefault(), void Rw(null)) : zw && bb.code === Wb ? (bb.preventDefault(), void Kw((bb => !bb))) : void qw.onKeyDown(bb)
          },
          onFocus: () => {
            hw(!0)
          },
          onBlur: () => {
            hw(!1), qw.onBlur()
          }
        }), Uw && (0, xb.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: Pb("3D view isn't available in this browser.")
        }), zw && (0, xb.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, xb.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: vw.position.map(((bb, wb) => (bb + Dw[wb]).toFixed(2))).join(" ")
        }), jw && (0, xb.jsx)(nb, {
          heading: vw.heading,
          pitch: vw.pitch,
          onViewFrom: bb => {
            const wb = gw(bb, -1),
              Mb = 0 === wb[1] ? {
                heading: Math.atan2(wb[0], wb[2]),
                pitch: 0
              } : {
                heading: vw.heading,
                pitch: wb[1] < 0 ? Sb : -Sb
              };
            Rw(Mw(Sw, Jw, Ww, Mb))
          },
          onTurn: (bb, wb) => {
            Rw((Mb => function(bb, wb, Mb, eb) {
              return ew(bb, wb, {
                heading: bb.heading + Mb * ub,
                pitch: Math.max(-Sb, Math.min(Sb, bb.pitch + eb * ub))
              })
            }(null !== Mb && void 0 !== Mb ? Mb : Qw.current.fittedView, Hw(Sw), bb, wb)))
          },
          onFlip: () => {
            Rw((bb => function(bb, wb) {
              return ew(bb, wb, {
                heading: bb.heading + Math.PI,
                pitch: -bb.pitch
              })
            }(null !== bb && void 0 !== bb ? bb : Qw.current.fittedView, Hw(Sw))))
          }
        }), null !== Gw && (0, xb.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === db ? Pb("studio:heatmapBlockReadout", {
            x: Gw.x,
            y: Gw.y,
            z: Gw.z,
            count: (0, tb.L)(Gw.value)
          }) : db(Gw.x, Gw.y, Gw.z, Gw.value)
        }), (0, xb.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [Gb, (0, xb.jsx)(sb.Y, {
            active: null === rw,
            onClick: () => {
              Rw(null)
            },
            children: (0, xb.jsx)(mb.b, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function nb(bb) {
      let {
        heading: wb,
        pitch: Mb,
        onViewFrom: Hb,
        onTurn: pb,
        onFlip: Vb
      } = bb;
      const {
        t: gb
      } = (0, Eb.C)(), lb = (0, eb.useRef)(null), Lb = bw({
        heading: wb,
        pitch: Mb
      }), Ib = ww(wb), Ob = Lw(Lb, Ib), Ub = qb + ab + 2, tb = Gb.flatMap((bb => [1, -1].map((wb => {
        const Mb = gw(bb.direction, wb);
        return {
          ...bb,
          sign: wb,
          direction: Mb,
          endX: Ub + lw(Mb, Ib) * qb,
          endY: Ub - lw(Mb, Ob) * qb,
          depth: lw(Mb, Lb)
        }
      })))).sort(((bb, wb) => wb.depth - bb.depth));
      return (0, xb.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * Ub,
        height: 2 * Ub,
        "aria-hidden": !0,
        onPointerDown: bb => {
          var wb, Mb;
          bb.currentTarget.setPointerCapture(bb.pointerId);
          const eb = bb.target,
            Hb = eb.getAttribute("data-end");
          lb.current = {
            pointerId: bb.pointerId,
            x: bb.clientX,
            y: bb.clientY,
            travel: 0,
            side: null === Hb ? null : null !== (wb = null === (Mb = tb[Number(Hb)]) || void 0 === Mb ? void 0 : Mb.direction) && void 0 !== wb ? wb : null,
            isOnMiddle: eb.hasAttribute("data-middle")
          }
        },
        onPointerMove: bb => {
          const wb = lb.current;
          if (null === wb || wb.pointerId !== bb.pointerId) return;
          const Mb = bb.clientX - wb.x,
            eb = bb.clientY - wb.y;
          wb.x = bb.clientX, wb.y = bb.clientY, wb.travel += Math.abs(Mb) + Math.abs(eb), wb.travel >= db && pb(Mb, eb)
        },
        onPointerUp: bb => {
          const wb = lb.current;
          lb.current = null, null === wb || wb.pointerId !== bb.pointerId || wb.travel >= db || (null !== wb.side ? Hb(wb.side) : wb.isOnMiddle && Vb())
        },
        onPointerCancel: () => {
          lb.current = null
        },
        children: [tb.map(((bb, wb) => {
          const Mb = bb.sign > 0;
          return (0, xb.jsxs)("g", {
            children: [(0, xb.jsx)("line", {
              x1: Ub,
              y1: Ub,
              x2: bb.endX,
              y2: bb.endY,
              stroke: bb.colour,
              strokeOpacity: Mb ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, xb.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": wb,
              cx: bb.endX,
              cy: bb.endY,
              r: Mb ? ab : ab - 1,
              fill: bb.colour,
              fillOpacity: Mb ? 1 : .3,
              stroke: bb.colour,
              strokeWidth: Mb ? 0 : 1.5,
              children: (0, xb.jsx)("title", {
                children: `${gb("View from")} ${Mb?"+":"\u2212"}${bb.name}`
              })
            }), Mb && (0, xb.jsx)("text", {
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
          }, `${Mb?"+":"-"}${bb.name}`)
        })), (0, xb.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: Ub,
          cy: Ub,
          r: ib,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, xb.jsx)("title", {
            children: gb("View from the opposite side")
          })
        })]
      })
    }

    function yb(bb) {
      var wb, Mb, eb;
      const {
        chunkGridOrigin: Hb,
        camera: pb
      } = bb;
      if (null === Hb) return;
      const Vb = [pb.position.x, pb.position.y, pb.position.z],
        gb = [0, 2].map((bb => Math.floor((Vb[bb] + Hb[bb]) / Cb.e.gO))),
        lb = bb.chunkGridCentre;
      if (null !== lb && lb.every(((bb, wb) => bb === gb[wb]))) return;
      const Ob = null === (wb = null === (Mb = bb.chunkGrid) || void 0 === Mb ? void 0 : Mb.isVisible) || void 0 === wb || wb;
      null === (eb = bb.chunkGrid) || void 0 === eb || eb.dispose();
      const [tb, Eb] = [0, 2].map(((bb, wb) => {
        const Mb = [];
        for (let eb = gb[wb] - Ab; eb <= gb[wb] + Ab + 1; eb++) Mb.push(eb * Cb.e.gO - Hb[bb]);
        return Mb
      })), Fb = -Hb[1], Bb = [];
      for (const Lb of Eb) Bb.push([new Ib.YC(tb[0], Fb, Lb), new Ib.YC(tb[tb.length - 1], Fb, Lb)]);
      for (const Lb of tb) Bb.push([new Ib.YC(Lb, Fb, Eb[0]), new Ib.YC(Lb, Fb, Eb[Eb.length - 1])]);
      const sb = (0, Ub.d)("Heatmap3DChunkGrid", {
        lines: Bb
      }, bb.JE);
      sb.color = new Lb.Color3(.45, .6, .78), sb.NE = !1, sb.isVisible = Ob, bb.chunkGrid = sb, bb.chunkGridCentre = gb, bb.needsRender = !0
    }

    function ob(bb, wb, Mb, eb) {
      bb.gwb("matrix", function(bb, wb) {
        const Mb = new Float32Array(16 * wb);
        for (let eb = 0; eb < wb; eb++) {
          const wb = 16 * eb;
          Mb[wb] = 1, Mb[wb + 5] = 1, Mb[wb + 10] = 1, Mb[wb + 12] = bb[3 * eb], Mb[wb + 13] = bb[3 * eb + 1], Mb[wb + 14] = bb[3 * eb + 2], Mb[wb + 15] = 1
        }
        return Mb
      }(wb, eb), 16, !0), bb.gwb("color", Mb, 4, !0), bb.isVisible = eb > 0
    }

    function Tb(bb) {
      const {
        camera: wb,
        translucent: Mb
      } = bb, eb = [wb.position.x, wb.position.y, wb.position.z], Hb = bb.translucentSortedFrom;
      if (null !== Hb && Math.hypot(eb[0] - Hb[0], eb[1] - Hb[1], eb[2] - Hb[2]) < fb) return;
      bb.translucentSortedFrom = eb;
      const pb = new Float64Array(Mb.count),
        Vb = new Uint32Array(Mb.count);
      for (let Lb = 0; Lb < Mb.count; Lb++) {
        const bb = Mb.wF[3 * Lb] - eb[0],
          wb = Mb.wF[3 * Lb + 1] - eb[1],
          Hb = Mb.wF[3 * Lb + 2] - eb[2];
        pb[Lb] = bb * bb + wb * wb + Hb * Hb, Vb[Lb] = Lb
      }
      Vb.sort(((bb, wb) => pb[wb] - pb[bb]));
      const gb = new Float32Array(3 * Mb.count),
        lb = new Float32Array(4 * Mb.count);
      Vb.forEach(((bb, wb) => {
        gb.set(Mb.wF.subarray(3 * bb, 3 * bb + 3), 3 * wb), lb.set(Mb.colours.subarray(4 * bb, 4 * bb + 4), 4 * wb)
      })), ob(bb.translucentCells, gb, lb, Mb.count), bb.needsRender = !0
    }

    function kb(bb, wb) {
      const Mb = (Mb, eb, Hb) => new Ib.YC(0 === Mb ? bb[0] : wb[0], 0 === eb ? bb[1] : wb[1], 0 === Hb ? bb[2] : wb[2]),
        eb = [];
      for (const Hb of [0, 1])
        for (const bb of [0, 1]) eb.push([Mb(0, Hb, bb), Mb(1, Hb, bb)], [Mb(Hb, 0, bb), Mb(Hb, 1, bb)], [Mb(Hb, bb, 0), Mb(Hb, bb, 1)]);
      return eb
    }

    function bw(bb) {
      return [Math.sin(bb.heading) * Math.cos(bb.pitch), -Math.sin(bb.pitch), Math.cos(bb.heading) * Math.cos(bb.pitch)]
    }

    function ww(bb) {
      return [Math.cos(bb), 0, -Math.sin(bb)]
    }

    function Mw(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: Nb,
        pitch: vb
      };
      const Hb = [bb.max[0] - bb.min[0], bb.max[1] - bb.min[1], bb.max[2] - bb.min[2]],
        pb = bw(eb),
        Vb = ww(eb.heading),
        gb = Lw(pb, Vb),
        lb = Math.tan(Mb / 2),
        Lb = lb * wb;
      let Ib = 1;
      for (const Ob of [-Hb[0] / 2, Hb[0] / 2])
        for (const bb of [-Hb[1] / 2, Hb[1] / 2])
          for (const wb of [-Hb[2] / 2, Hb[2] / 2]) {
            const Mb = [Ob, bb, wb],
              eb = lw(Mb, pb);
            Ib = Math.max(Ib, Math.abs(lw(Mb, Vb)) / Lb - eb, Math.abs(lw(Mb, gb)) / lb - eb)
          }
      return {
        position: Vw([bb.min[0] + Hb[0] / 2, bb.min[1] + Hb[1] / 2, bb.min[2] + Hb[2] / 2], gw(pb, -Ib * Qb)),
        heading: eb.heading,
        pitch: eb.pitch
      }
    }

    function ew(bb, wb, Mb) {
      const eb = pw(bb),
        Hb = pw(Mb),
        pb = Vw(bb.position, gw(wb, -1)),
        Vb = [0, 1, 2].reduce(((bb, wb) => Vw(bb, gw(Hb[wb], lw(pb, eb[wb])))), [0, 0, 0]);
      return {
        position: Vw(wb, Vb),
        heading: Mb.heading,
        pitch: Mb.pitch
      }
    }

    function Hw(bb) {
      return gw(Vw(bb.min, bb.max), .5)
    }

    function pw(bb) {
      const wb = bw(bb),
        Mb = ww(bb.heading);
      return [wb, Mb, Lw(wb, Mb)]
    }

    function Vw(bb, wb) {
      return [bb[0] + wb[0], bb[1] + wb[1], bb[2] + wb[2]]
    }

    function gw(bb, wb) {
      return [bb[0] * wb, bb[1] * wb, bb[2] * wb]
    }

    function lw(bb, wb) {
      return bb[0] * wb[0] + bb[1] * wb[1] + bb[2] * wb[2]
    }

    function Lw(bb, wb) {
      return [bb[1] * wb[2] - bb[2] * wb[1], bb[2] * wb[0] - bb[0] * wb[2], bb[0] * wb[1] - bb[1] * wb[0]]
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);