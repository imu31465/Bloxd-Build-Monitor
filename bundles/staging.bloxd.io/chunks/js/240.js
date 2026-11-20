export const id = 240;
export const ids = [240];
export const modules = {
  38894: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => Vb
    });
    Ub(6065);
    var Ab = Ub(52),
      Mb = Ub(38898),
      Tb = Ub(39185),
      Eb = Ub(39302),
      Yb = Ub(39347),
      Bb = Ub(39361),
      eb = Ub(36587),
      vb = Ub(36392),
      Lb = Ub(39520),
      Pb = Ub(39575),
      Xb = (Ub(39611), Ub(1162)),
      jb = Ub(205),
      Rb = Ub(1134),
      kb = Ub(19),
      yb = Ub(2531),
      Zb = Ub(1352),
      Db = Ub(990),
      zb = Ub(6061),
      xb = Ub(6074),
      ib = Ub(4119),
      fb = Ub(1023);
    const mb = 1.2,
      pb = .2,
      Nb = .0066 * Math.PI / 180,
      Wb = new Set(["Escape", "KeyG"]),
      Hb = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      Ib = "ArrowUp",
      db = new Set([...Object.keys(Hb), Ib, "ArrowDown"]),
      Fb = 32,
      hb = 1,
      Gb = 10,
      Qb = "F4",
      qb = "Period",
      ub = Math.PI / 2 - .001,
      rb = Math.PI / 6,
      Kb = Math.PI / 6,
      ob = 1.08,
      lb = [{
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
      tb = 24,
      wb = 7,
      sb = 4,
      gb = .01,
      Cb = 4;

    function Vb(bb) {
      let {
        heatmap: ab,
        scale: Ub,
        fullyOpaqueFrom: hb,
        bounds: rb,
        fitBounds: Kb,
        schematic: ob,
        controls: lb,
        onStepTime: tb,
        onShowAllTime: wb,
        onTogglePlaying: sb,
        getReadout: Cb = null
      } = bb;
      const {
        t: Vb
      } = (0, Rb.A)(), {
        clientEscMenuOptions: Ta
      } = (0, kb.n)(["clientEscMenuOptions"]), Ba = (0, Ab.useRef)(null), ea = (0, Ab.useRef)(null), va = (0, Ab.useRef)(null), La = (0, yb.e)(Ba), [Pa, Xa] = (0, Ab.useState)(!1), [ja, Ra] = (0, Ab.useState)(!1), [ka, ya] = (0, Ab.useState)(!0), Za = (0, Ab.useRef)(!1), [Da, za] = (0, Ab.useState)(!1), xa = ja || !ka && Da, [ia, fa] = (0, Ab.useState)(!1), [ma, pa] = (0, Ab.useState)(!0), [Na, Wa] = (0, Ab.useState)(null), Ha = rb.min, [Ia, da] = (0, Ab.useState)(Ha);
      Ia[0] === Ha[0] && Ia[1] === Ha[1] && Ia[2] === Ha[2] || (da(Ha), null !== Na && Wa({
        ...Na,
        position: Ea(Na.position, Ea(Ia, Ya(Ha, -1)))
      }));
      const Fa = (0, Ab.useMemo)((() => function(bb) {
          return [bb.max[0] - bb.min[0] + 1, bb.max[1] - bb.min[1] + 1, bb.max[2] - bb.min[2] + 1]
        }(rb)), [rb]),
        ha = (0, Ab.useMemo)((() => function(bb, ab) {
          const Ub = [],
            Ab = [];
          for (const [Mb, Tb] of Object.entries(bb.frequencies)) {
            const bb = Number(Mb);
            for (const [Mb, Eb] of Object.entries(Tb)) {
              const Tb = Number(Mb);
              for (const [Mb, Yb] of Object.entries(Eb)) Yb <= 0 || (Ub.push(bb - ab[0], Tb - ab[1], Number(Mb) - ab[2]), Ab.push(Yb))
            }
          }
          return {
            positions: Int32Array.from(Ub),
            values: Float64Array.from(Ab),
            count: Ab.length
          }
        }(ab, Ha)), [ab, Ha]),
        Ga = mb * Ta.cameraFOV / 100,
        Qa = La.height > 0 ? La.width / La.height : 1,
        qa = (0, Ab.useMemo)((() => function(bb, ab) {
          return {
            min: [bb.min[0] - ab[0], bb.min[1] - ab[1], bb.min[2] - ab[2]],
            max: [bb.max[0] - ab[0] + 1, bb.max[1] - ab[1] + 1, bb.max[2] - ab[2] + 1]
          }
        }(Kb, Ha)), [Kb, Ha]),
        ua = Ua(qa, Qa, Ga),
        ra = null !== Na && void 0 !== Na ? Na : ua,
        Ka = (0, Ab.useRef)({
          fittedView: ua,
          fieldOfView: Ga,
          mouseSensitivity: Ta.mouseSensitivity,
          canLock: ka
        });
      Ka.current = {
        fittedView: ua,
        fieldOfView: Ga,
        mouseSensitivity: Ta.mouseSensitivity,
        canLock: ka
      };
      const oa = (0, Ab.useMemo)((() => {
          if (!xa) return null;
          const bb = (bb, Ub, Ab) => {
              var Mb, Tb, Eb;
              return null !== (Mb = null === (Tb = ab.frequencies[bb + Ha[0]]) || void 0 === Tb || null === (Eb = Tb[Ub + Ha[1]]) || void 0 === Eb ? void 0 : Eb[Ab + Ha[2]]) && void 0 !== Mb ? Mb : 0
            },
            Ab = function(bb, ab, Ub, Ab) {
              let Mb = 0,
                Tb = 1 / 0;
              for (const Lb of [0, 1, 2]) {
                if (0 === ab[Lb]) {
                  if (bb[Lb] < 0 || bb[Lb] > Ub[Lb]) return null;
                  continue
                }
                const Ab = (0 - bb[Lb]) / ab[Lb],
                  Eb = (Ub[Lb] - bb[Lb]) / ab[Lb];
                Mb = Math.max(Mb, Math.min(Ab, Eb)), Tb = Math.min(Tb, Math.max(Ab, Eb))
              }
              if (Mb > Tb) return null;
              const Eb = [0, 1, 2].map((Ab => Math.min(Ub[Ab] - 1, Math.max(0, Math.floor(bb[Ab] + ab[Ab] * Mb))))),
                Yb = [0, 1, 2].map((bb => Math.sign(ab[bb]))),
                Bb = [0, 1, 2].map((Ub => {
                  if (0 === Yb[Ub]) return 1 / 0;
                  return ((Yb[Ub] > 0 ? Eb[Ub] + 1 : Eb[Ub]) - bb[Ub]) / ab[Ub]
                })),
                eb = [0, 1, 2].map((bb => 0 === Yb[bb] ? 1 / 0 : Math.abs(1 / ab[bb])));
              let vb = null;
              for (;;) {
                const bb = Ab(Eb[0], Eb[1], Eb[2]);
                if (bb >= 1) return Eb;
                bb > 0 && (vb = [Eb[0], Eb[1], Eb[2]]);
                const ab = Bb[0] < Bb[1] ? Bb[0] < Bb[2] ? 0 : 2 : Bb[1] < Bb[2] ? 1 : 2;
                if (Bb[ab] > Tb) return vb;
                if (Eb[ab] += Yb[ab], Bb[ab] += eb[ab], Eb[ab] < 0 || Eb[ab] >= Ub[ab]) return vb
              }
            }(ra.position, ba(ra), Fa, ((ab, Ab, Mb) => (0, zb.A)(bb(ab, Ab, Mb), Ub, hb)));
          return null === Ab ? null : {
            x: Ab[0] + Ha[0],
            y: Ab[1] + Ha[1],
            z: Ab[2] + Ha[2],
            value: bb(Ab[0], Ab[1], Ab[2])
          }
        }), [xa, ab, Ha, ra, Fa, Ub, hb]),
        {
          keyHandlers: la
        } = (0, xb.f)({
          isEnabled: xa,
          claimedKeyCodes: db,
          aP: bb => {
            Wa((ab => function(bb, ab) {
              const Ub = [Math.sin(bb.heading), 0, Math.cos(bb.heading)],
                Ab = Ea(Ea(Ya(Ub, ab.forward), Ya(aa(bb.heading), ab.right)), [0, ab.up, 0]);
              return {
                ...bb,
                position: Ea(bb.position, Ab)
              }
            }(null !== ab && void 0 !== ab ? ab : Ka.current.fittedView, bb)))
          },
          onZoomChange: fa
        });
      (0, Ab.useEffect)((() => {
        const bb = ea.current;
        if (!bb) return;
        let ab;
        try {
          ab = function(bb, ab) {
            const Ub = new Mb.d(bb, !0, {
                stencil: !1
              }, !0),
              Ab = new Tb.c(Ub),
              [Xb, jb, Rb] = zb.V;
            Ab.clearColor = new eb.b(Xb / 255, jb / 255, Rb / 255, 1);
            const kb = new Eb.e("Heatmap3DCamera", vb.Pj.Zero(), Ab);
            kb.fov = ab, kb.minZ = .05;
            const yb = new Yb.d("Heatmap3DLight", new vb.Pj(.4, 1, -.6), Ab);
            yb.diffuse = eb.Color3.White(), yb.groundColor = eb.Color3.Black(), yb.specular = eb.Color3.Black();
            const Zb = new Bb.StandardMaterial("Heatmap3DCellMaterial", Ab);
            Zb.diffuseColor = new eb.Color3(.4, .4, .4), Zb.emissiveColor = new eb.Color3(.62, .62, .62), Zb.specularColor = eb.Color3.Black();
            const Db = (0, Lb.d)("Heatmap3DCells", {
              size: 1
            }, Ab);
            Db.material = Zb, Db.zR = !1, Db.Lj = !0, Db.isVisible = !1;
            const xb = (0, Lb.d)("Heatmap3DTranslucentCells", {
              size: 1
            }, Ab);
            xb.material = Zb, xb.hasVertexAlpha = !0, xb.zR = !1, xb.Lj = !0, xb.isVisible = !1;
            const ib = new Bb.StandardMaterial("Heatmap3DSchematicMaterial", Ab);
            ib.diffuseColor = new eb.Color3(.6, .6, .6), ib.emissiveColor = new eb.Color3(.4, .4, .4), ib.specularColor = eb.Color3.Black();
            const fb = (0, Lb.d)("Heatmap3DSchematicBlocks", {
              size: 1
            }, Ab);
            fb.material = ib, fb.zR = !1, fb.Lj = !0, fb.isVisible = !1;
            const mb = (0, Pb.e)("Heatmap3DTarget", {
              lines: Sb([-.52, -.52, -.52], [.52, .52, .52])
            }, Ab);
            return mb.color = new eb.Color3(.06, .14, .23), mb.renderingGroupId = 1, mb.zR = !1, mb.isVisible = !1, {
              engine: Ub,
              ZR: Ab,
              camera: kb,
              cells: Db,
              translucentCells: xb,
              translucent: {
                ge: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: fb,
              targetOutline: mb,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: ab,
              needsRender: !0
            }
          }(bb, Ka.current.fieldOfView)
        } catch (Ub) {
          return console.error("Failed to start the 3D heatmap", Ub), void Xa(!0)
        }
        return va.current = ab, ab.engine.runRenderLoop((() => {
          const bb = ab.camera;
          bb.fov !== ab.targetFieldOfView && (bb.fov += (ab.targetFieldOfView - bb.fov) * (bb.fov > ab.targetFieldOfView ? .3 : .2), Math.abs(ab.targetFieldOfView - bb.fov) < 5e-4 && (bb.fov = ab.targetFieldOfView), ab.needsRender = !0), ab.needsRender && (ab.ZR.render(), ab.needsRender = !ab.ZR.isReady() || !ab.engine.areAllEffectsReady())
        })), () => {
          va.current = null, ab.engine.dispose()
        }
      }), []), (0, Ab.useEffect)((() => {
        const bb = ea.current;
        if (!bb) return;
        const ab = () => {
            Za.current = !1, Ra(document.pointerLockElement === bb)
          },
          Ub = () => {
            Za.current && (Za.current = !1, ya(!1))
          },
          Ab = ab => {
            const Ub = !Ka.current.canLock && document.activeElement === bb && 0 !== (1 & ab.buttons);
            if (document.pointerLockElement !== bb && !Ub) return;
            const Ab = Ka.current.mouseSensitivity * Nb;
            Wa((bb => function(bb, ab, Ub) {
              const Ab = 2 * Math.PI;
              return {
                ...bb,
                heading: ((bb.heading + ab) % Ab + Ab) % Ab,
                pitch: Math.max(-ub, Math.min(ub, bb.pitch + Ub))
              }
            }(null !== bb && void 0 !== bb ? bb : Ka.current.fittedView, ab.movementX * Ab, ab.movementY * Ab)))
          };
        return document.addEventListener("pointerlockchange", ab), document.addEventListener("pointerlockerror", Ub), document.addEventListener("pointermove", Ab), () => {
          document.removeEventListener("pointerlockchange", ab), document.removeEventListener("pointerlockerror", Ub), document.removeEventListener("pointermove", Ab), document.pointerLockElement === bb && (0, ib.d)()
        }
      }), []), (0, Ab.useEffect)((() => {
        const bb = va.current;
        null !== bb && 0 !== La.width && 0 !== La.height && (bb.engine.resize(), bb.needsRender = !0)
      }), [La.width, La.height]), (0, Ab.useEffect)((() => {
        const bb = va.current;
        null !== bb && (bb.targetFieldOfView = Ga * (ia ? pb : 1))
      }), [Ga, ia]), (0, Ab.useEffect)((() => {
        const bb = va.current;
        null !== bb && function(bb, ab, Ub, Ab) {
          const Mb = [],
            Tb = [],
            Eb = [],
            Yb = [];
          for (let Bb = 0; Bb < ab.count; Bb++) {
            const bb = ab.values[Bb],
              eb = (0, zb.A)(bb, Ub, Ab);
            if (eb <= 0) continue;
            const [vb, Lb, Pb] = (0, zb.t)((0, zb.L)(bb, Ub)), Xb = eb >= 1;
            (Xb ? Mb : Eb).push(ab.positions[3 * Bb] + .5, ab.positions[3 * Bb + 1] + .5, ab.positions[3 * Bb + 2] + .5), (Xb ? Tb : Yb).push(vb / 255, Lb / 255, Pb / 255, eb)
          }
          Jb(bb.cells, Float32Array.from(Mb), Float32Array.from(Tb), Tb.length / 4), bb.translucent = {
            ge: Float32Array.from(Eb),
            colours: Float32Array.from(Yb),
            count: Yb.length / 4
          }, bb.translucentSortedFrom = null, nb(bb), bb.needsRender = !0
        }(bb, ha, Ub, hb)
      }), [ha, Ub, hb]), (0, Ab.useEffect)((() => {
        const bb = va.current;
        null !== bb && function(bb, ab) {
          bb.chunkGridOrigin = ab, bb.chunkGridCentre = null, cb(bb)
        }(bb, rb.min)
      }), [rb]), (0, Ab.useEffect)((() => {
        const bb = va.current;
        null !== bb && function(bb, ab, Ub) {
          const Ab = [],
            Mb = [];
          if (null !== ab) {
            const {
              positions: bb,
              colours: Tb,
              count: Eb
            } = ab.surface;
            for (let ab = 0; ab < Eb; ab++) {
              const Eb = [bb[3 * ab], bb[3 * ab + 1], bb[3 * ab + 2]];
              [0, 1, 2].every((bb => Eb[bb] >= Ub.min[bb] - Fb && Eb[bb] <= Ub.max[bb] + Fb)) && (Ab.push(Eb[0] - Ub.min[0] + .5, Eb[1] - Ub.min[1] + .5, Eb[2] - Ub.min[2] + .5), Mb.push(Tb[3 * ab] / 255, Tb[3 * ab + 1] / 255, Tb[3 * ab + 2] / 255, 1))
            }
          }
          Jb(bb.schematicBlocks, Float32Array.from(Ab), Float32Array.from(Mb), Mb.length / 4), bb.needsRender = !0
        }(bb, ob, rb)
      }), [ob, rb]), (0, Ab.useEffect)((() => {
        const bb = va.current;
        null !== bb && null !== bb.chunkGrid && (bb.chunkGrid.isVisible = ma, bb.needsRender = !0)
      }), [ma, rb]), (0, Ab.useEffect)((() => {
        const bb = va.current;
        null !== bb && function(bb, ab, Ub) {
          const {
            camera: Ab
          } = bb;
          Ab.position.set(ab.position[0], ab.position[1], ab.position[2]), Ab.rotation.set(ab.pitch, ab.heading, 0);
          const Mb = (Gb + 1) * jb.c.Mj * Math.sqrt(3);
          Ab.maxZ = Math.max(Mb, Math.hypot(...Ea(ab.position, Ya(Ma({
            min: [0, 0, 0],
            max: Ub
          }), -1))) + 2 * Math.hypot(...Ub)), cb(bb), nb(bb), bb.needsRender = !0
        }(bb, ra, Fa)
      }), [ra, Fa]), (0, Ab.useEffect)((() => {
        const bb = va.current;
        null !== bb && (bb.targetOutline.isVisible = null !== oa, null !== oa && bb.targetOutline.position.set(oa.x - Ha[0] + .5, oa.y - Ha[1] + .5, oa.z - Ha[2] + .5), bb.needsRender = !0)
      }), [oa, Ha]);
      return (0, fb.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: Ba,
        children: [(0, fb.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: ea,
          style: {
            width: `${La.width}px`,
            height: `${La.height}px`
          },
          tabIndex: 0,
          "aria-label": Vb("3D heatmap"),
          onClick: () => {
            const bb = ea.current;
            if (null === bb) return;
            if (bb.focus({
                preventScroll: !0
              }), ja || !ka) return;
            const ab = bb.requestPointerLock();
            ab instanceof Promise ? ab.catch((bb => {
              bb instanceof DOMException && ("WrongDocumentError" === bb.name || "NotSupportedError" === bb.name) && ya(!1)
            })) : Za.current = !0
          },
          ...la,
          onKeyDown: bb => {
            if (xa && Wb.has(bb.code)) return bb.preventDefault(), void(() => {
              const bb = ea.current;
              null !== bb && document.pointerLockElement === bb ? (0, ib.d)() : null === bb || void 0 === bb || bb.blur()
            })();
            const ab = Hb[bb.code];
            return xa && void 0 !== ab ? (bb.preventDefault(), void tb(ab)) : xa && (0, xb.e)("replayPlayPause", bb.code) && !(0, xb.e)("Zoom", bb.code) ? (bb.preventDefault(), void(bb.repeat || sb())) : xa && bb.code === Ib ? (bb.preventDefault(), void wb()) : xa && bb.code === qb ? (bb.preventDefault(), void Wa(null)) : xa && bb.code === Qb ? (bb.preventDefault(), void pa((bb => !bb))) : void la.onKeyDown(bb)
          },
          onFocus: () => {
            za(!0)
          },
          onBlur: () => {
            za(!1), la.onBlur()
          }
        }), Pa && (0, fb.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: Vb("3D view isn't available in this browser.")
        }), xa && (0, fb.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, fb.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: ra.position.map(((bb, ab) => (bb + Ha[ab]).toFixed(2))).join(" ")
        }), ma && (0, fb.jsx)(Ob, {
          heading: ra.heading,
          pitch: ra.pitch,
          onViewFrom: bb => {
            const ab = Ya(bb, -1),
              Ub = 0 === ab[1] ? {
                heading: Math.atan2(ab[0], ab[2]),
                pitch: 0
              } : {
                heading: ra.heading,
                pitch: ab[1] < 0 ? ub : -ub
              };
            Wa(Ua(qa, Qa, Ga, Ub))
          },
          onTurn: (bb, ab) => {
            Wa((Ub => function(bb, ab, Ub, Ab) {
              return Aa(bb, ab, {
                heading: bb.heading + Ub * gb,
                pitch: Math.max(-ub, Math.min(ub, bb.pitch + Ab * gb))
              })
            }(null !== Ub && void 0 !== Ub ? Ub : Ka.current.fittedView, Ma(qa), bb, ab)))
          },
          onFlip: () => {
            Wa((bb => function(bb, ab) {
              return Aa(bb, ab, {
                heading: bb.heading + Math.PI,
                pitch: -bb.pitch
              })
            }(null !== bb && void 0 !== bb ? bb : Ka.current.fittedView, Ma(qa))))
          }
        }), null !== oa && (0, fb.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === Cb ? Vb("studio:heatmapBlockReadout", {
            x: oa.x,
            y: oa.y,
            z: oa.z,
            count: (0, Xb.T)(oa.value)
          }) : Cb(oa.x, oa.y, oa.z, oa.value)
        }), (0, fb.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [lb, (0, fb.jsx)(Zb.M, {
            active: null === Na,
            onClick: () => {
              Wa(null)
            },
            children: (0, fb.jsx)(Db.e, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function Ob(bb) {
      let {
        heading: ab,
        pitch: Ub,
        onViewFrom: Mb,
        onTurn: Tb,
        onFlip: Eb
      } = bb;
      const {
        t: Yb
      } = (0, Rb.A)(), Bb = (0, Ab.useRef)(null), eb = ba({
        heading: ab,
        pitch: Ub
      }), vb = aa(ab), Lb = ea(eb, vb), Pb = tb + wb + 2, Xb = lb.flatMap((bb => [1, -1].map((ab => {
        const Ub = Ya(bb.direction, ab);
        return {
          ...bb,
          sign: ab,
          direction: Ub,
          endX: Pb + Ba(Ub, vb) * tb,
          endY: Pb - Ba(Ub, Lb) * tb,
          depth: Ba(Ub, eb)
        }
      })))).sort(((bb, ab) => ab.depth - bb.depth));
      return (0, fb.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * Pb,
        height: 2 * Pb,
        "aria-hidden": !0,
        onPointerDown: bb => {
          var ab, Ub;
          bb.currentTarget.setPointerCapture(bb.pointerId);
          const Ab = bb.target,
            Mb = Ab.getAttribute("data-end");
          Bb.current = {
            pointerId: bb.pointerId,
            x: bb.clientX,
            y: bb.clientY,
            travel: 0,
            side: null === Mb ? null : null !== (ab = null === (Ub = Xb[Number(Mb)]) || void 0 === Ub ? void 0 : Ub.direction) && void 0 !== ab ? ab : null,
            isOnMiddle: Ab.hasAttribute("data-middle")
          }
        },
        onPointerMove: bb => {
          const ab = Bb.current;
          if (null === ab || ab.pointerId !== bb.pointerId) return;
          const Ub = bb.clientX - ab.x,
            Ab = bb.clientY - ab.y;
          ab.x = bb.clientX, ab.y = bb.clientY, ab.travel += Math.abs(Ub) + Math.abs(Ab), ab.travel >= Cb && Tb(Ub, Ab)
        },
        onPointerUp: bb => {
          const ab = Bb.current;
          Bb.current = null, null === ab || ab.pointerId !== bb.pointerId || ab.travel >= Cb || (null !== ab.side ? Mb(ab.side) : ab.isOnMiddle && Eb())
        },
        onPointerCancel: () => {
          Bb.current = null
        },
        children: [Xb.map(((bb, ab) => {
          const Ub = bb.sign > 0;
          return (0, fb.jsxs)("g", {
            children: [(0, fb.jsx)("line", {
              x1: Pb,
              y1: Pb,
              x2: bb.endX,
              y2: bb.endY,
              stroke: bb.colour,
              strokeOpacity: Ub ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, fb.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": ab,
              cx: bb.endX,
              cy: bb.endY,
              r: Ub ? wb : wb - 1,
              fill: bb.colour,
              fillOpacity: Ub ? 1 : .3,
              stroke: bb.colour,
              strokeWidth: Ub ? 0 : 1.5,
              children: (0, fb.jsx)("title", {
                children: `${Yb("View from")} ${Ub?"+":"\u2212"}${bb.name}`
              })
            }), Ub && (0, fb.jsx)("text", {
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
          }, `${Ub?"+":"-"}${bb.name}`)
        })), (0, fb.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: Pb,
          cy: Pb,
          r: sb,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, fb.jsx)("title", {
            children: Yb("View from the opposite side")
          })
        })]
      })
    }

    function cb(bb) {
      var ab, Ub, Ab;
      const {
        chunkGridOrigin: Mb,
        camera: Tb
      } = bb;
      if (null === Mb) return;
      const Eb = [Tb.position.x, Tb.position.y, Tb.position.z],
        Yb = [0, 2].map((bb => Math.floor((Eb[bb] + Mb[bb]) / jb.c.Mj))),
        Bb = bb.chunkGridCentre;
      if (null !== Bb && Bb.every(((bb, ab) => bb === Yb[ab]))) return;
      const Lb = null === (ab = null === (Ub = bb.chunkGrid) || void 0 === Ub ? void 0 : Ub.isVisible) || void 0 === ab || ab;
      null === (Ab = bb.chunkGrid) || void 0 === Ab || Ab.dispose();
      const [Xb, Rb] = [0, 2].map(((bb, ab) => {
        const Ub = [];
        for (let Ab = Yb[ab] - Gb; Ab <= Yb[ab] + Gb + 1; Ab++) Ub.push(Ab * jb.c.Mj - Mb[bb]);
        return Ub
      })), kb = -Mb[1], yb = [];
      for (const eb of Rb) yb.push([new vb.Pj(Xb[0], kb, eb), new vb.Pj(Xb[Xb.length - 1], kb, eb)]);
      for (const eb of Xb) yb.push([new vb.Pj(eb, kb, Rb[0]), new vb.Pj(eb, kb, Rb[Rb.length - 1])]);
      const Zb = (0, Pb.e)("Heatmap3DChunkGrid", {
        lines: yb
      }, bb.ZR);
      Zb.color = new eb.Color3(.45, .6, .78), Zb.zR = !1, Zb.isVisible = Lb, bb.chunkGrid = Zb, bb.chunkGridCentre = Yb, bb.needsRender = !0
    }

    function Jb(bb, ab, Ub, Ab) {
      bb.o4("matrix", function(bb, ab) {
        const Ub = new Float32Array(16 * ab);
        for (let Ab = 0; Ab < ab; Ab++) {
          const ab = 16 * Ab;
          Ub[ab] = 1, Ub[ab + 5] = 1, Ub[ab + 10] = 1, Ub[ab + 12] = bb[3 * Ab], Ub[ab + 13] = bb[3 * Ab + 1], Ub[ab + 14] = bb[3 * Ab + 2], Ub[ab + 15] = 1
        }
        return Ub
      }(ab, Ab), 16, !0), bb.o4("color", Ub, 4, !0), bb.isVisible = Ab > 0
    }

    function nb(bb) {
      const {
        camera: ab,
        translucent: Ub
      } = bb, Ab = [ab.position.x, ab.position.y, ab.position.z], Mb = bb.translucentSortedFrom;
      if (null !== Mb && Math.hypot(Ab[0] - Mb[0], Ab[1] - Mb[1], Ab[2] - Mb[2]) < hb) return;
      bb.translucentSortedFrom = Ab;
      const Tb = new Float64Array(Ub.count),
        Eb = new Uint32Array(Ub.count);
      for (let eb = 0; eb < Ub.count; eb++) {
        const bb = Ub.ge[3 * eb] - Ab[0],
          ab = Ub.ge[3 * eb + 1] - Ab[1],
          Mb = Ub.ge[3 * eb + 2] - Ab[2];
        Tb[eb] = bb * bb + ab * ab + Mb * Mb, Eb[eb] = eb
      }
      Eb.sort(((bb, ab) => Tb[ab] - Tb[bb]));
      const Yb = new Float32Array(3 * Ub.count),
        Bb = new Float32Array(4 * Ub.count);
      Eb.forEach(((bb, ab) => {
        Yb.set(Ub.ge.subarray(3 * bb, 3 * bb + 3), 3 * ab), Bb.set(Ub.colours.subarray(4 * bb, 4 * bb + 4), 4 * ab)
      })), Jb(bb.translucentCells, Yb, Bb, Ub.count), bb.needsRender = !0
    }

    function Sb(bb, ab) {
      const Ub = (Ub, Ab, Mb) => new vb.Pj(0 === Ub ? bb[0] : ab[0], 0 === Ab ? bb[1] : ab[1], 0 === Mb ? bb[2] : ab[2]),
        Ab = [];
      for (const Mb of [0, 1])
        for (const bb of [0, 1]) Ab.push([Ub(0, Mb, bb), Ub(1, Mb, bb)], [Ub(Mb, 0, bb), Ub(Mb, 1, bb)], [Ub(Mb, bb, 0), Ub(Mb, bb, 1)]);
      return Ab
    }

    function ba(bb) {
      return [Math.sin(bb.heading) * Math.cos(bb.pitch), -Math.sin(bb.pitch), Math.cos(bb.heading) * Math.cos(bb.pitch)]
    }

    function aa(bb) {
      return [Math.cos(bb), 0, -Math.sin(bb)]
    }

    function Ua(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: rb,
        pitch: Kb
      };
      const Mb = [bb.max[0] - bb.min[0], bb.max[1] - bb.min[1], bb.max[2] - bb.min[2]],
        Tb = ba(Ab),
        Eb = aa(Ab.heading),
        Yb = ea(Tb, Eb),
        Bb = Math.tan(Ub / 2),
        eb = Bb * ab;
      let vb = 1;
      for (const Lb of [-Mb[0] / 2, Mb[0] / 2])
        for (const bb of [-Mb[1] / 2, Mb[1] / 2])
          for (const ab of [-Mb[2] / 2, Mb[2] / 2]) {
            const Ub = [Lb, bb, ab],
              Ab = Ba(Ub, Tb);
            vb = Math.max(vb, Math.abs(Ba(Ub, Eb)) / eb - Ab, Math.abs(Ba(Ub, Yb)) / Bb - Ab)
          }
      return {
        position: Ea([bb.min[0] + Mb[0] / 2, bb.min[1] + Mb[1] / 2, bb.min[2] + Mb[2] / 2], Ya(Tb, -vb * ob)),
        heading: Ab.heading,
        pitch: Ab.pitch
      }
    }

    function Aa(bb, ab, Ub) {
      const Ab = Ta(bb),
        Mb = Ta(Ub),
        Tb = Ea(bb.position, Ya(ab, -1)),
        Eb = [0, 1, 2].reduce(((bb, ab) => Ea(bb, Ya(Mb[ab], Ba(Tb, Ab[ab])))), [0, 0, 0]);
      return {
        position: Ea(ab, Eb),
        heading: Ub.heading,
        pitch: Ub.pitch
      }
    }

    function Ma(bb) {
      return Ya(Ea(bb.min, bb.max), .5)
    }

    function Ta(bb) {
      const ab = ba(bb),
        Ub = aa(bb.heading);
      return [ab, Ub, ea(ab, Ub)]
    }

    function Ea(bb, ab) {
      return [bb[0] + ab[0], bb[1] + ab[1], bb[2] + ab[2]]
    }

    function Ya(bb, ab) {
      return [bb[0] * ab, bb[1] * ab, bb[2] * ab]
    }

    function Ba(bb, ab) {
      return bb[0] * ab[0] + bb[1] * ab[1] + bb[2] * ab[2]
    }

    function ea(bb, ab) {
      return [bb[1] * ab[2] - bb[2] * ab[1], bb[2] * ab[0] - bb[0] * ab[2], bb[0] * ab[1] - bb[1] * ab[0]]
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);