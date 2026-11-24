export const id = 254;
export const ids = [254];
export const modules = {
  40016: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => Zp
    });
    cp(6592);
    var Op = cp(62),
      op = cp(40024),
      Ip = cp(40289),
      Sp = cp(40405),
      xp = cp(40443),
      Lp = cp(40459),
      Yp = cp(37479),
      Dp = cp(37313),
      Ap = cp(40568),
      Pp = cp(40626),
      Wp = (cp(40663), cp(1234)),
      yp = cp(195),
      Up = cp(1201),
      wp = cp(25),
      vp = cp(2835),
      tp = cp(1480),
      Hp = cp(1060),
      dp = cp(6583),
      ep = cp(6598),
      jp = cp(4534),
      kp = cp(1112);
    const mp = 1.2,
      Rp = .2,
      qp = .0066 * Math.PI / 180,
      Mp = new Set(["Escape", "KeyG"]),
      Cp = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      Ep = "ArrowUp",
      Xp = new Set([...Object.keys(Cp), Ep, "ArrowDown"]),
      lp = 32,
      Qp = 1,
      Jp = 10,
      Bp = "F4",
      Np = "Period",
      Tp = Math.PI / 2 - .001,
      fp = Math.PI / 6,
      bp = Math.PI / 6,
      hp = 1.08,
      ap = [{
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
      np = 24,
      Fp = 7,
      gp = 4,
      Gp = .01,
      rp = 4;

    function Zp(pp) {
      let {
        heatmap: ip,
        scale: cp,
        fullyOpaqueFrom: Qp,
        bounds: fp,
        fitBounds: bp,
        schematic: hp,
        controls: ap,
        onStepTime: np,
        onShowAllTime: Fp,
        onTogglePlaying: gp,
        getReadout: rp = null
      } = pp;
      const {
        t: Zp
      } = (0, Up.H)(), {
        clientEscMenuOptions: xi
      } = (0, wp.o)(["clientEscMenuOptions"]), Di = (0, Op.useRef)(null), Ai = (0, Op.useRef)(null), Pi = (0, Op.useRef)(null), Wi = (0, vp.d)(Di), [yi, Ui] = (0, Op.useState)(!1), [wi, vi] = (0, Op.useState)(!1), [ti, Hi] = (0, Op.useState)(!0), di = (0, Op.useRef)(!1), [ei, ui] = (0, Op.useState)(!1), ji = wi || !ti && ei, [ki, mi] = (0, Op.useState)(!1), [Ri, qi] = (0, Op.useState)(!0), [Mi, Ci] = (0, Op.useState)(null), Ei = fp.min, [Xi, li] = (0, Op.useState)(Ei);
      Xi[0] === Ei[0] && Xi[1] === Ei[1] && Xi[2] === Ei[2] || (li(Ei), null !== Mi && Ci({
        ...Mi,
        position: Li(Mi.position, Li(Xi, Yi(Ei, -1)))
      }));
      const Qi = (0, Op.useMemo)((() => function(pp) {
          return [pp.max[0] - pp.min[0] + 1, pp.max[1] - pp.min[1] + 1, pp.max[2] - pp.min[2] + 1]
        }(fp)), [fp]),
        Ji = (0, Op.useMemo)((() => function(pp, ip) {
          const cp = [],
            Op = [];
          for (const [op, Ip] of Object.entries(pp.frequencies)) {
            const pp = Number(op);
            for (const [op, Sp] of Object.entries(Ip)) {
              const Ip = Number(op);
              for (const [op, xp] of Object.entries(Sp)) xp <= 0 || (cp.push(pp - ip[0], Ip - ip[1], Number(op) - ip[2]), Op.push(xp))
            }
          }
          return {
            positions: Int32Array.from(cp),
            values: Float64Array.from(Op),
            count: Op.length
          }
        }(ip, Ei)), [ip, Ei]),
        Bi = mp * xi.cameraFOV / 100,
        Ni = Wi.height > 0 ? Wi.width / Wi.height : 1,
        Ti = (0, Op.useMemo)((() => function(pp, ip) {
          return {
            min: [pp.min[0] - ip[0], pp.min[1] - ip[1], pp.min[2] - ip[2]],
            max: [pp.max[0] - ip[0] + 1, pp.max[1] - ip[1] + 1, pp.max[2] - ip[2] + 1]
          }
        }(bp, Ei)), [bp, Ei]),
        fi = oi(Ti, Ni, Bi),
        bi = null !== Mi && void 0 !== Mi ? Mi : fi,
        ai = (0, Op.useRef)({
          fittedView: fi,
          fieldOfView: Bi,
          mouseSensitivity: xi.mouseSensitivity,
          canLock: ti
        });
      ai.current = {
        fittedView: fi,
        fieldOfView: Bi,
        mouseSensitivity: xi.mouseSensitivity,
        canLock: ti
      };
      const ni = (0, Op.useMemo)((() => {
          if (!ji) return null;
          const pp = (pp, cp, Op) => {
              var op, Ip, Sp;
              return null !== (op = null === (Ip = ip.frequencies[pp + Ei[0]]) || void 0 === Ip || null === (Sp = Ip[cp + Ei[1]]) || void 0 === Sp ? void 0 : Sp[Op + Ei[2]]) && void 0 !== op ? op : 0
            },
            Op = function(pp, ip, cp, Op) {
              let op = 0,
                Ip = 1 / 0;
              for (const Ap of [0, 1, 2]) {
                if (0 === ip[Ap]) {
                  if (pp[Ap] < 0 || pp[Ap] > cp[Ap]) return null;
                  continue
                }
                const Op = (0 - pp[Ap]) / ip[Ap],
                  Sp = (cp[Ap] - pp[Ap]) / ip[Ap];
                op = Math.max(op, Math.min(Op, Sp)), Ip = Math.min(Ip, Math.max(Op, Sp))
              }
              if (op > Ip) return null;
              const Sp = [0, 1, 2].map((Op => Math.min(cp[Op] - 1, Math.max(0, Math.floor(pp[Op] + ip[Op] * op))))),
                xp = [0, 1, 2].map((pp => Math.sign(ip[pp]))),
                Lp = [0, 1, 2].map((cp => {
                  if (0 === xp[cp]) return 1 / 0;
                  return ((xp[cp] > 0 ? Sp[cp] + 1 : Sp[cp]) - pp[cp]) / ip[cp]
                })),
                Yp = [0, 1, 2].map((pp => 0 === xp[pp] ? 1 / 0 : Math.abs(1 / ip[pp])));
              let Dp = null;
              for (;;) {
                const pp = Op(Sp[0], Sp[1], Sp[2]);
                if (pp >= 1) return Sp;
                pp > 0 && (Dp = [Sp[0], Sp[1], Sp[2]]);
                const ip = Lp[0] < Lp[1] ? Lp[0] < Lp[2] ? 0 : 2 : Lp[1] < Lp[2] ? 1 : 2;
                if (Lp[ip] > Ip) return Dp;
                if (Sp[ip] += xp[ip], Lp[ip] += Yp[ip], Sp[ip] < 0 || Sp[ip] >= cp[ip]) return Dp
              }
            }(bi.position, ci(bi), Qi, ((ip, Op, op) => (0, dp.u)(pp(ip, Op, op), cp, Qp)));
          return null === Op ? null : {
            x: Op[0] + Ei[0],
            y: Op[1] + Ei[1],
            z: Op[2] + Ei[2],
            value: pp(Op[0], Op[1], Op[2])
          }
        }), [ji, ip, Ei, bi, Qi, cp, Qp]),
        {
          keyHandlers: Fi
        } = (0, ep.f)({
          isEnabled: ji,
          claimedKeyCodes: Xp,
          RP: pp => {
            Ci((ip => function(pp, ip) {
              const cp = [Math.sin(pp.heading), 0, Math.cos(pp.heading)],
                Op = Li(Li(Yi(cp, ip.forward), Yi(Oi(pp.heading), ip.right)), [0, ip.up, 0]);
              return {
                ...pp,
                position: Li(pp.position, Op)
              }
            }(null !== ip && void 0 !== ip ? ip : ai.current.fittedView, pp)))
          },
          onZoomChange: mi
        });
      (0, Op.useEffect)((() => {
        const pp = Ai.current;
        if (!pp) return;
        let ip;
        try {
          ip = function(pp, ip) {
            const cp = new op.d(pp, !0, {
                stencil: !1
              }, !0),
              Op = new Ip.c(cp),
              [Wp, yp, Up] = dp.J;
            Op.clearColor = new Yp.b(Wp / 255, yp / 255, Up / 255, 1);
            const wp = new Sp.b("Heatmap3DCamera", Dp.Zy.Zero(), Op);
            wp.fov = ip, wp.minZ = .05;
            const vp = new xp.d("Heatmap3DLight", new Dp.Zy(.4, 1, -.6), Op);
            vp.diffuse = Yp.Color3.White(), vp.groundColor = Yp.Color3.Black(), vp.specular = Yp.Color3.Black();
            const tp = new Lp.StandardMaterial("Heatmap3DCellMaterial", Op);
            tp.diffuseColor = new Yp.Color3(.4, .4, .4), tp.emissiveColor = new Yp.Color3(.62, .62, .62), tp.specularColor = Yp.Color3.Black();
            const Hp = (0, Ap.e)("Heatmap3DCells", {
              size: 1
            }, Op);
            Hp.material = tp, Hp.Ow = !1, Hp.Gy = !0, Hp.isVisible = !1;
            const ep = (0, Ap.e)("Heatmap3DTranslucentCells", {
              size: 1
            }, Op);
            ep.material = tp, ep.hasVertexAlpha = !0, ep.Ow = !1, ep.Gy = !0, ep.isVisible = !1;
            const jp = new Lp.StandardMaterial("Heatmap3DSchematicMaterial", Op);
            jp.diffuseColor = new Yp.Color3(.6, .6, .6), jp.emissiveColor = new Yp.Color3(.4, .4, .4), jp.specularColor = Yp.Color3.Black();
            const kp = (0, Ap.e)("Heatmap3DSchematicBlocks", {
              size: 1
            }, Op);
            kp.material = jp, kp.Ow = !1, kp.Gy = !0, kp.isVisible = !1;
            const mp = (0, Pp.b)("Heatmap3DTarget", {
              lines: ii([-.52, -.52, -.52], [.52, .52, .52])
            }, Op);
            return mp.color = new Yp.Color3(.06, .14, .23), mp.renderingGroupId = 1, mp.Ow = !1, mp.isVisible = !1, {
              engine: cp,
              pw: Op,
              camera: wp,
              cells: Hp,
              translucentCells: ep,
              translucent: {
                rc: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: kp,
              targetOutline: mp,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: ip,
              needsRender: !0
            }
          }(pp, ai.current.fieldOfView)
        } catch (cp) {
          return console.error("Failed to start the 3D heatmap", cp), void Ui(!0)
        }
        return Pi.current = ip, ip.engine.runRenderLoop((() => {
          const pp = ip.camera;
          pp.fov !== ip.targetFieldOfView && (pp.fov += (ip.targetFieldOfView - pp.fov) * (pp.fov > ip.targetFieldOfView ? .3 : .2), Math.abs(ip.targetFieldOfView - pp.fov) < 5e-4 && (pp.fov = ip.targetFieldOfView), ip.needsRender = !0), ip.needsRender && (ip.pw.render(), ip.needsRender = !ip.pw.isReady() || !ip.engine.areAllEffectsReady())
        })), () => {
          Pi.current = null, ip.engine.dispose()
        }
      }), []), (0, Op.useEffect)((() => {
        const pp = Ai.current;
        if (!pp) return;
        const ip = () => {
            di.current = !1, vi(document.pointerLockElement === pp)
          },
          cp = () => {
            di.current && (di.current = !1, Hi(!1))
          },
          Op = ip => {
            const cp = !ai.current.canLock && document.activeElement === pp && 0 !== (1 & ip.buttons);
            if (document.pointerLockElement !== pp && !cp) return;
            const Op = ai.current.mouseSensitivity * qp;
            Ci((pp => function(pp, ip, cp) {
              const Op = 2 * Math.PI;
              return {
                ...pp,
                heading: ((pp.heading + ip) % Op + Op) % Op,
                pitch: Math.max(-Tp, Math.min(Tp, pp.pitch + cp))
              }
            }(null !== pp && void 0 !== pp ? pp : ai.current.fittedView, ip.movementX * Op, ip.movementY * Op)))
          };
        return document.addEventListener("pointerlockchange", ip), document.addEventListener("pointerlockerror", cp), document.addEventListener("pointermove", Op), () => {
          document.removeEventListener("pointerlockchange", ip), document.removeEventListener("pointerlockerror", cp), document.removeEventListener("pointermove", Op), document.pointerLockElement === pp && (0, jp.c)()
        }
      }), []), (0, Op.useEffect)((() => {
        const pp = Pi.current;
        null !== pp && 0 !== Wi.width && 0 !== Wi.height && (pp.engine.resize(), pp.needsRender = !0)
      }), [Wi.width, Wi.height]), (0, Op.useEffect)((() => {
        const pp = Pi.current;
        null !== pp && (pp.targetFieldOfView = Bi * (ki ? Rp : 1))
      }), [Bi, ki]), (0, Op.useEffect)((() => {
        const pp = Pi.current;
        null !== pp && function(pp, ip, cp, Op) {
          const op = [],
            Ip = [],
            Sp = [],
            xp = [];
          for (let Lp = 0; Lp < ip.count; Lp++) {
            const pp = ip.values[Lp],
              Yp = (0, dp.u)(pp, cp, Op);
            if (Yp <= 0) continue;
            const [Dp, Ap, Pp] = (0, dp.n)((0, dp.F)(pp, cp)), Wp = Yp >= 1;
            (Wp ? op : Sp).push(ip.positions[3 * Lp] + .5, ip.positions[3 * Lp + 1] + .5, ip.positions[3 * Lp + 2] + .5), (Wp ? Ip : xp).push(Dp / 255, Ap / 255, Pp / 255, Yp)
          }
          Kp(pp.cells, Float32Array.from(op), Float32Array.from(Ip), Ip.length / 4), pp.translucent = {
            rc: Float32Array.from(Sp),
            colours: Float32Array.from(xp),
            count: xp.length / 4
          }, pp.translucentSortedFrom = null, Vp(pp), pp.needsRender = !0
        }(pp, Ji, cp, Qp)
      }), [Ji, cp, Qp]), (0, Op.useEffect)((() => {
        const pp = Pi.current;
        null !== pp && function(pp, ip) {
          pp.chunkGridOrigin = ip, pp.chunkGridCentre = null, sp(pp)
        }(pp, fp.min)
      }), [fp]), (0, Op.useEffect)((() => {
        const pp = Pi.current;
        null !== pp && function(pp, ip, cp) {
          const Op = [],
            op = [];
          if (null !== ip) {
            const {
              positions: pp,
              colours: Ip,
              count: Sp
            } = ip.surface;
            for (let ip = 0; ip < Sp; ip++) {
              const Sp = [pp[3 * ip], pp[3 * ip + 1], pp[3 * ip + 2]];
              [0, 1, 2].every((pp => Sp[pp] >= cp.min[pp] - lp && Sp[pp] <= cp.max[pp] + lp)) && (Op.push(Sp[0] - cp.min[0] + .5, Sp[1] - cp.min[1] + .5, Sp[2] - cp.min[2] + .5), op.push(Ip[3 * ip] / 255, Ip[3 * ip + 1] / 255, Ip[3 * ip + 2] / 255, 1))
            }
          }
          Kp(pp.schematicBlocks, Float32Array.from(Op), Float32Array.from(op), op.length / 4), pp.needsRender = !0
        }(pp, hp, fp)
      }), [hp, fp]), (0, Op.useEffect)((() => {
        const pp = Pi.current;
        null !== pp && null !== pp.chunkGrid && (pp.chunkGrid.isVisible = Ri, pp.needsRender = !0)
      }), [Ri, fp]), (0, Op.useEffect)((() => {
        const pp = Pi.current;
        null !== pp && function(pp, ip, cp) {
          const {
            camera: Op
          } = pp;
          Op.position.set(ip.position[0], ip.position[1], ip.position[2]), Op.rotation.set(ip.pitch, ip.heading, 0);
          const op = (Jp + 1) * yp.g.Qy * Math.sqrt(3);
          Op.maxZ = Math.max(op, Math.hypot(...Li(ip.position, Yi(Si({
            min: [0, 0, 0],
            max: cp
          }), -1))) + 2 * Math.hypot(...cp)), sp(pp), Vp(pp), pp.needsRender = !0
        }(pp, bi, Qi)
      }), [bi, Qi]), (0, Op.useEffect)((() => {
        const pp = Pi.current;
        null !== pp && (pp.targetOutline.isVisible = null !== ni, null !== ni && pp.targetOutline.position.set(ni.x - Ei[0] + .5, ni.y - Ei[1] + .5, ni.z - Ei[2] + .5), pp.needsRender = !0)
      }), [ni, Ei]);
      return (0, kp.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: Di,
        children: [(0, kp.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: Ai,
          style: {
            width: `${Wi.width}px`,
            height: `${Wi.height}px`
          },
          tabIndex: 0,
          "aria-label": Zp("3D heatmap"),
          onClick: () => {
            const pp = Ai.current;
            if (null === pp) return;
            if (pp.focus({
                preventScroll: !0
              }), wi || !ti) return;
            const ip = pp.requestPointerLock();
            ip instanceof Promise ? ip.catch((pp => {
              pp instanceof DOMException && ("WrongDocumentError" === pp.name || "NotSupportedError" === pp.name) && Hi(!1)
            })) : di.current = !0
          },
          ...Fi,
          onKeyDown: pp => {
            if (ji && Mp.has(pp.code)) return pp.preventDefault(), void(() => {
              const pp = Ai.current;
              null !== pp && document.pointerLockElement === pp ? (0, jp.c)() : null === pp || void 0 === pp || pp.blur()
            })();
            const ip = Cp[pp.code];
            return ji && void 0 !== ip ? (pp.preventDefault(), void np(ip)) : ji && (0, ep.b)("replayPlayPause", pp.code) && !(0, ep.b)("Zoom", pp.code) ? (pp.preventDefault(), void(pp.repeat || gp())) : ji && pp.code === Ep ? (pp.preventDefault(), void Fp()) : ji && pp.code === Np ? (pp.preventDefault(), void Ci(null)) : ji && pp.code === Bp ? (pp.preventDefault(), void qi((pp => !pp))) : void Fi.onKeyDown(pp)
          },
          onFocus: () => {
            ui(!0)
          },
          onBlur: () => {
            ui(!1), Fi.onBlur()
          }
        }), yi && (0, kp.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: Zp("3D view isn't available in this browser.")
        }), ji && (0, kp.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, kp.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: bi.position.map(((pp, ip) => (pp + Ei[ip]).toFixed(2))).join(" ")
        }), Ri && (0, kp.jsx)(zp, {
          heading: bi.heading,
          pitch: bi.pitch,
          onViewFrom: pp => {
            const ip = Yi(pp, -1),
              cp = 0 === ip[1] ? {
                heading: Math.atan2(ip[0], ip[2]),
                pitch: 0
              } : {
                heading: bi.heading,
                pitch: ip[1] < 0 ? Tp : -Tp
              };
            Ci(oi(Ti, Ni, Bi, cp))
          },
          onTurn: (pp, ip) => {
            Ci((cp => function(pp, ip, cp, Op) {
              return Ii(pp, ip, {
                heading: pp.heading + cp * Gp,
                pitch: Math.max(-Tp, Math.min(Tp, pp.pitch + Op * Gp))
              })
            }(null !== cp && void 0 !== cp ? cp : ai.current.fittedView, Si(Ti), pp, ip)))
          },
          onFlip: () => {
            Ci((pp => function(pp, ip) {
              return Ii(pp, ip, {
                heading: pp.heading + Math.PI,
                pitch: -pp.pitch
              })
            }(null !== pp && void 0 !== pp ? pp : ai.current.fittedView, Si(Ti))))
          }
        }), null !== ni && (0, kp.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === rp ? Zp("studio:heatmapBlockReadout", {
            x: ni.x,
            y: ni.y,
            z: ni.z,
            count: (0, Wp.O)(ni.value)
          }) : rp(ni.x, ni.y, ni.z, ni.value)
        }), (0, kp.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [ap, (0, kp.jsx)(tp.S, {
            active: null === Mi,
            onClick: () => {
              Ci(null)
            },
            children: (0, kp.jsx)(Hp.d, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function zp(pp) {
      let {
        heading: ip,
        pitch: cp,
        onViewFrom: op,
        onTurn: Ip,
        onFlip: Sp
      } = pp;
      const {
        t: xp
      } = (0, Up.H)(), Lp = (0, Op.useRef)(null), Yp = ci({
        heading: ip,
        pitch: cp
      }), Dp = Oi(ip), Ap = Ai(Yp, Dp), Pp = np + Fp + 2, Wp = ap.flatMap((pp => [1, -1].map((ip => {
        const cp = Yi(pp.direction, ip);
        return {
          ...pp,
          sign: ip,
          direction: cp,
          endX: Pp + Di(cp, Dp) * np,
          endY: Pp - Di(cp, Ap) * np,
          depth: Di(cp, Yp)
        }
      })))).sort(((pp, ip) => ip.depth - pp.depth));
      return (0, kp.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * Pp,
        height: 2 * Pp,
        "aria-hidden": !0,
        onPointerDown: pp => {
          var ip, cp;
          pp.currentTarget.setPointerCapture(pp.pointerId);
          const Op = pp.target,
            op = Op.getAttribute("data-end");
          Lp.current = {
            pointerId: pp.pointerId,
            x: pp.clientX,
            y: pp.clientY,
            travel: 0,
            side: null === op ? null : null !== (ip = null === (cp = Wp[Number(op)]) || void 0 === cp ? void 0 : cp.direction) && void 0 !== ip ? ip : null,
            isOnMiddle: Op.hasAttribute("data-middle")
          }
        },
        onPointerMove: pp => {
          const ip = Lp.current;
          if (null === ip || ip.pointerId !== pp.pointerId) return;
          const cp = pp.clientX - ip.x,
            Op = pp.clientY - ip.y;
          ip.x = pp.clientX, ip.y = pp.clientY, ip.travel += Math.abs(cp) + Math.abs(Op), ip.travel >= rp && Ip(cp, Op)
        },
        onPointerUp: pp => {
          const ip = Lp.current;
          Lp.current = null, null === ip || ip.pointerId !== pp.pointerId || ip.travel >= rp || (null !== ip.side ? op(ip.side) : ip.isOnMiddle && Sp())
        },
        onPointerCancel: () => {
          Lp.current = null
        },
        children: [Wp.map(((pp, ip) => {
          const cp = pp.sign > 0;
          return (0, kp.jsxs)("g", {
            children: [(0, kp.jsx)("line", {
              x1: Pp,
              y1: Pp,
              x2: pp.endX,
              y2: pp.endY,
              stroke: pp.colour,
              strokeOpacity: cp ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, kp.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": ip,
              cx: pp.endX,
              cy: pp.endY,
              r: cp ? Fp : Fp - 1,
              fill: pp.colour,
              fillOpacity: cp ? 1 : .3,
              stroke: pp.colour,
              strokeWidth: cp ? 0 : 1.5,
              children: (0, kp.jsx)("title", {
                children: `${xp("View from")} ${cp?"+":"\u2212"}${pp.name}`
              })
            }), cp && (0, kp.jsx)("text", {
              pointerEvents: "none",
              x: pp.endX,
              y: pp.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: pp.name
            })]
          }, `${cp?"+":"-"}${pp.name}`)
        })), (0, kp.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: Pp,
          cy: Pp,
          r: gp,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, kp.jsx)("title", {
            children: xp("View from the opposite side")
          })
        })]
      })
    }

    function sp(pp) {
      var ip, cp, Op;
      const {
        chunkGridOrigin: op,
        camera: Ip
      } = pp;
      if (null === op) return;
      const Sp = [Ip.position.x, Ip.position.y, Ip.position.z],
        xp = [0, 2].map((pp => Math.floor((Sp[pp] + op[pp]) / yp.g.Qy))),
        Lp = pp.chunkGridCentre;
      if (null !== Lp && Lp.every(((pp, ip) => pp === xp[ip]))) return;
      const Ap = null === (ip = null === (cp = pp.chunkGrid) || void 0 === cp ? void 0 : cp.isVisible) || void 0 === ip || ip;
      null === (Op = pp.chunkGrid) || void 0 === Op || Op.dispose();
      const [Wp, Up] = [0, 2].map(((pp, ip) => {
        const cp = [];
        for (let Op = xp[ip] - Jp; Op <= xp[ip] + Jp + 1; Op++) cp.push(Op * yp.g.Qy - op[pp]);
        return cp
      })), wp = -op[1], vp = [];
      for (const Yp of Up) vp.push([new Dp.Zy(Wp[0], wp, Yp), new Dp.Zy(Wp[Wp.length - 1], wp, Yp)]);
      for (const Yp of Wp) vp.push([new Dp.Zy(Yp, wp, Up[0]), new Dp.Zy(Yp, wp, Up[Up.length - 1])]);
      const tp = (0, Pp.b)("Heatmap3DChunkGrid", {
        lines: vp
      }, pp.pw);
      tp.color = new Yp.Color3(.45, .6, .78), tp.Ow = !1, tp.isVisible = Ap, pp.chunkGrid = tp, pp.chunkGridCentre = xp, pp.needsRender = !0
    }

    function Kp(pp, ip, cp, Op) {
      pp.I9("matrix", function(pp, ip) {
        const cp = new Float32Array(16 * ip);
        for (let Op = 0; Op < ip; Op++) {
          const ip = 16 * Op;
          cp[ip] = 1, cp[ip + 5] = 1, cp[ip + 10] = 1, cp[ip + 12] = pp[3 * Op], cp[ip + 13] = pp[3 * Op + 1], cp[ip + 14] = pp[3 * Op + 2], cp[ip + 15] = 1
        }
        return cp
      }(ip, Op), 16, !0), pp.I9("color", cp, 4, !0), pp.isVisible = Op > 0
    }

    function Vp(pp) {
      const {
        camera: ip,
        translucent: cp
      } = pp, Op = [ip.position.x, ip.position.y, ip.position.z], op = pp.translucentSortedFrom;
      if (null !== op && Math.hypot(Op[0] - op[0], Op[1] - op[1], Op[2] - op[2]) < Qp) return;
      pp.translucentSortedFrom = Op;
      const Ip = new Float64Array(cp.count),
        Sp = new Uint32Array(cp.count);
      for (let Yp = 0; Yp < cp.count; Yp++) {
        const pp = cp.rc[3 * Yp] - Op[0],
          ip = cp.rc[3 * Yp + 1] - Op[1],
          op = cp.rc[3 * Yp + 2] - Op[2];
        Ip[Yp] = pp * pp + ip * ip + op * op, Sp[Yp] = Yp
      }
      Sp.sort(((pp, ip) => Ip[ip] - Ip[pp]));
      const xp = new Float32Array(3 * cp.count),
        Lp = new Float32Array(4 * cp.count);
      Sp.forEach(((pp, ip) => {
        xp.set(cp.rc.subarray(3 * pp, 3 * pp + 3), 3 * ip), Lp.set(cp.colours.subarray(4 * pp, 4 * pp + 4), 4 * ip)
      })), Kp(pp.translucentCells, xp, Lp, cp.count), pp.needsRender = !0
    }

    function ii(pp, ip) {
      const cp = (cp, Op, op) => new Dp.Zy(0 === cp ? pp[0] : ip[0], 0 === Op ? pp[1] : ip[1], 0 === op ? pp[2] : ip[2]),
        Op = [];
      for (const op of [0, 1])
        for (const pp of [0, 1]) Op.push([cp(0, op, pp), cp(1, op, pp)], [cp(op, 0, pp), cp(op, 1, pp)], [cp(op, pp, 0), cp(op, pp, 1)]);
      return Op
    }

    function ci(pp) {
      return [Math.sin(pp.heading) * Math.cos(pp.pitch), -Math.sin(pp.pitch), Math.cos(pp.heading) * Math.cos(pp.pitch)]
    }

    function Oi(pp) {
      return [Math.cos(pp), 0, -Math.sin(pp)]
    }

    function oi(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: fp,
        pitch: bp
      };
      const op = [pp.max[0] - pp.min[0], pp.max[1] - pp.min[1], pp.max[2] - pp.min[2]],
        Ip = ci(Op),
        Sp = Oi(Op.heading),
        xp = Ai(Ip, Sp),
        Lp = Math.tan(cp / 2),
        Yp = Lp * ip;
      let Dp = 1;
      for (const Ap of [-op[0] / 2, op[0] / 2])
        for (const pp of [-op[1] / 2, op[1] / 2])
          for (const ip of [-op[2] / 2, op[2] / 2]) {
            const cp = [Ap, pp, ip],
              Op = Di(cp, Ip);
            Dp = Math.max(Dp, Math.abs(Di(cp, Sp)) / Yp - Op, Math.abs(Di(cp, xp)) / Lp - Op)
          }
      return {
        position: Li([pp.min[0] + op[0] / 2, pp.min[1] + op[1] / 2, pp.min[2] + op[2] / 2], Yi(Ip, -Dp * hp)),
        heading: Op.heading,
        pitch: Op.pitch
      }
    }

    function Ii(pp, ip, cp) {
      const Op = xi(pp),
        op = xi(cp),
        Ip = Li(pp.position, Yi(ip, -1)),
        Sp = [0, 1, 2].reduce(((pp, ip) => Li(pp, Yi(op[ip], Di(Ip, Op[ip])))), [0, 0, 0]);
      return {
        position: Li(ip, Sp),
        heading: cp.heading,
        pitch: cp.pitch
      }
    }

    function Si(pp) {
      return Yi(Li(pp.min, pp.max), .5)
    }

    function xi(pp) {
      const ip = ci(pp),
        cp = Oi(pp.heading);
      return [ip, cp, Ai(ip, cp)]
    }

    function Li(pp, ip) {
      return [pp[0] + ip[0], pp[1] + ip[1], pp[2] + ip[2]]
    }

    function Yi(pp, ip) {
      return [pp[0] * ip, pp[1] * ip, pp[2] * ip]
    }

    function Di(pp, ip) {
      return pp[0] * ip[0] + pp[1] * ip[1] + pp[2] * ip[2]
    }

    function Ai(pp, ip) {
      return [pp[1] * ip[2] - pp[2] * ip[1], pp[2] * ip[0] - pp[0] * ip[2], pp[0] * ip[1] - pp[1] * ip[0]]
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);