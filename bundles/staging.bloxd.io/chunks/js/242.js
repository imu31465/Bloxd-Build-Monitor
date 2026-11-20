export const id = 242;
export const ids = [242];
export const modules = {
  39271: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => fb
    });
    hb(6194);
    var Bb = hb(49),
      Ob = hb(39277),
      Gb = hb(39544),
      Ub = hb(39661),
      Lb = hb(39689),
      Yb = hb(39705),
      Sb = hb(36889),
      ab = hb(36720),
      Hb = hb(39846),
      wb = hb(39908),
      Zb = (hb(39940), hb(1124)),
      Xb = hb(191),
      pb = hb(1095),
      ob = hb(13),
      Ab = hb(2548),
      lb = hb(1357),
      Kb = hb(966),
      Wb = hb(6189),
      Cb = hb(6202),
      db = hb(4206),
      rb = hb(1007);
    const jb = 1.2,
      nb = .2,
      Db = .0066 * Math.PI / 180,
      xb = new Set(["Escape", "KeyG"]),
      zb = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      gb = "ArrowUp",
      ib = new Set([...Object.keys(zb), gb, "ArrowDown"]),
      vb = 32,
      tb = 1,
      Jb = 10,
      eb = "F4",
      Nb = "Period",
      sb = Math.PI / 2 - .001,
      Mb = Math.PI / 6,
      mb = Math.PI / 6,
      Ib = 1.08,
      Pb = [{
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
      Eb = 7,
      yb = 4,
      Vb = .01,
      Fb = 4;

    function fb(bb) {
      let {
        heatmap: ub,
        scale: hb,
        fullyOpaqueFrom: tb,
        bounds: Mb,
        fitBounds: mb,
        schematic: Ib,
        controls: Pb,
        onStepTime: qb,
        onShowAllTime: Eb,
        onTogglePlaying: yb,
        getReadout: Fb = null
      } = bb;
      const {
        t: fb
      } = (0, pb.K)(), {
        clientEscMenuOptions: Gu
      } = (0, ob.j)(["clientEscMenuOptions"]), Yu = (0, Bb.useRef)(null), Su = (0, Bb.useRef)(null), au = (0, Bb.useRef)(null), Hu = (0, Ab.b)(Yu), [wu, Zu] = (0, Bb.useState)(!1), [Xu, pu] = (0, Bb.useState)(!1), [ou, Au] = (0, Bb.useState)(!0), lu = (0, Bb.useRef)(!1), [Ku, Wu] = (0, Bb.useState)(!1), Cu = Xu || !ou && Ku, [du, ru] = (0, Bb.useState)(!1), [ju, nu] = (0, Bb.useState)(!0), [Du, xu] = (0, Bb.useState)(null), zu = Mb.min, [gu, iu] = (0, Bb.useState)(zu);
      gu[0] === zu[0] && gu[1] === zu[1] && gu[2] === zu[2] || (iu(zu), null !== Du && xu({
        ...Du,
        position: Uu(Du.position, Uu(gu, Lu(zu, -1)))
      }));
      const vu = (0, Bb.useMemo)((() => function(bb) {
          return [bb.max[0] - bb.min[0] + 1, bb.max[1] - bb.min[1] + 1, bb.max[2] - bb.min[2] + 1]
        }(Mb)), [Mb]),
        tu = (0, Bb.useMemo)((() => function(bb, ub) {
          const hb = [],
            Bb = [];
          for (const [Ob, Gb] of Object.entries(bb.frequencies)) {
            const bb = Number(Ob);
            for (const [Ob, Ub] of Object.entries(Gb)) {
              const Gb = Number(Ob);
              for (const [Ob, Lb] of Object.entries(Ub)) Lb <= 0 || (hb.push(bb - ub[0], Gb - ub[1], Number(Ob) - ub[2]), Bb.push(Lb))
            }
          }
          return {
            positions: Int32Array.from(hb),
            values: Float64Array.from(Bb),
            count: Bb.length
          }
        }(ub, zu)), [ub, zu]),
        Ju = jb * Gu.cameraFOV / 100,
        eu = Hu.height > 0 ? Hu.width / Hu.height : 1,
        Nu = (0, Bb.useMemo)((() => function(bb, ub) {
          return {
            min: [bb.min[0] - ub[0], bb.min[1] - ub[1], bb.min[2] - ub[2]],
            max: [bb.max[0] - ub[0] + 1, bb.max[1] - ub[1] + 1, bb.max[2] - ub[2] + 1]
          }
        }(mb, zu)), [mb, zu]),
        su = hu(Nu, eu, Ju),
        Mu = null !== Du && void 0 !== Du ? Du : su,
        mu = (0, Bb.useRef)({
          fittedView: su,
          fieldOfView: Ju,
          mouseSensitivity: Gu.mouseSensitivity,
          canLock: ou
        });
      mu.current = {
        fittedView: su,
        fieldOfView: Ju,
        mouseSensitivity: Gu.mouseSensitivity,
        canLock: ou
      };
      const Iu = (0, Bb.useMemo)((() => {
          if (!Cu) return null;
          const bb = (bb, hb, Bb) => {
              var Ob, Gb, Ub;
              return null !== (Ob = null === (Gb = ub.frequencies[bb + zu[0]]) || void 0 === Gb || null === (Ub = Gb[hb + zu[1]]) || void 0 === Ub ? void 0 : Ub[Bb + zu[2]]) && void 0 !== Ob ? Ob : 0
            },
            Bb = function(bb, ub, hb, Bb) {
              let Ob = 0,
                Gb = 1 / 0;
              for (const Hb of [0, 1, 2]) {
                if (0 === ub[Hb]) {
                  if (bb[Hb] < 0 || bb[Hb] > hb[Hb]) return null;
                  continue
                }
                const Bb = (0 - bb[Hb]) / ub[Hb],
                  Ub = (hb[Hb] - bb[Hb]) / ub[Hb];
                Ob = Math.max(Ob, Math.min(Bb, Ub)), Gb = Math.min(Gb, Math.max(Bb, Ub))
              }
              if (Ob > Gb) return null;
              const Ub = [0, 1, 2].map((Bb => Math.min(hb[Bb] - 1, Math.max(0, Math.floor(bb[Bb] + ub[Bb] * Ob))))),
                Lb = [0, 1, 2].map((bb => Math.sign(ub[bb]))),
                Yb = [0, 1, 2].map((hb => {
                  if (0 === Lb[hb]) return 1 / 0;
                  return ((Lb[hb] > 0 ? Ub[hb] + 1 : Ub[hb]) - bb[hb]) / ub[hb]
                })),
                Sb = [0, 1, 2].map((bb => 0 === Lb[bb] ? 1 / 0 : Math.abs(1 / ub[bb])));
              let ab = null;
              for (;;) {
                const bb = Bb(Ub[0], Ub[1], Ub[2]);
                if (bb >= 1) return Ub;
                bb > 0 && (ab = [Ub[0], Ub[1], Ub[2]]);
                const ub = Yb[0] < Yb[1] ? Yb[0] < Yb[2] ? 0 : 2 : Yb[1] < Yb[2] ? 1 : 2;
                if (Yb[ub] > Gb) return ab;
                if (Ub[ub] += Lb[ub], Yb[ub] += Sb[ub], Ub[ub] < 0 || Ub[ub] >= hb[ub]) return ab
              }
            }(Mu.position, bu(Mu), vu, ((ub, Bb, Ob) => (0, Wb.n)(bb(ub, Bb, Ob), hb, tb)));
          return null === Bb ? null : {
            x: Bb[0] + zu[0],
            y: Bb[1] + zu[1],
            z: Bb[2] + zu[2],
            value: bb(Bb[0], Bb[1], Bb[2])
          }
        }), [Cu, ub, zu, Mu, vu, hb, tb]),
        {
          keyHandlers: Pu
        } = (0, Cb.i)({
          isEnabled: Cu,
          claimedKeyCodes: ib,
          kH: bb => {
            xu((ub => function(bb, ub) {
              const hb = [Math.sin(bb.heading), 0, Math.cos(bb.heading)],
                Bb = Uu(Uu(Lu(hb, ub.forward), Lu(uu(bb.heading), ub.right)), [0, ub.up, 0]);
              return {
                ...bb,
                position: Uu(bb.position, Bb)
              }
            }(null !== ub && void 0 !== ub ? ub : mu.current.fittedView, bb)))
          },
          onZoomChange: ru
        });
      (0, Bb.useEffect)((() => {
        const bb = Su.current;
        if (!bb) return;
        let ub;
        try {
          ub = function(bb, ub) {
            const hb = new Ob.c(bb, !0, {
                stencil: !1
              }, !0),
              Bb = new Gb.e(hb),
              [Zb, Xb, pb] = Wb.A;
            Bb.clearColor = new Sb.b(Zb / 255, Xb / 255, pb / 255, 1);
            const ob = new Ub.e("Heatmap3DCamera", ab.YX.Zero(), Bb);
            ob.fov = ub, ob.minZ = .05;
            const Ab = new Lb.b("Heatmap3DLight", new ab.YX(.4, 1, -.6), Bb);
            Ab.diffuse = Sb.Color3.White(), Ab.groundColor = Sb.Color3.Black(), Ab.specular = Sb.Color3.Black();
            const lb = new Yb.StandardMaterial("Heatmap3DCellMaterial", Bb);
            lb.diffuseColor = new Sb.Color3(.4, .4, .4), lb.emissiveColor = new Sb.Color3(.62, .62, .62), lb.specularColor = Sb.Color3.Black();
            const Kb = (0, Hb.d)("Heatmap3DCells", {
              size: 1
            }, Bb);
            Kb.material = lb, Kb.lp = !1, Kb.LX = !0, Kb.isVisible = !1;
            const Cb = (0, Hb.d)("Heatmap3DTranslucentCells", {
              size: 1
            }, Bb);
            Cb.material = lb, Cb.hasVertexAlpha = !0, Cb.lp = !1, Cb.LX = !0, Cb.isVisible = !1;
            const db = new Yb.StandardMaterial("Heatmap3DSchematicMaterial", Bb);
            db.diffuseColor = new Sb.Color3(.6, .6, .6), db.emissiveColor = new Sb.Color3(.4, .4, .4), db.specularColor = Sb.Color3.Black();
            const rb = (0, Hb.d)("Heatmap3DSchematicBlocks", {
              size: 1
            }, Bb);
            rb.material = db, rb.lp = !1, rb.LX = !0, rb.isVisible = !1;
            const jb = (0, wb.d)("Heatmap3DTarget", {
              lines: Rb([-.52, -.52, -.52], [.52, .52, .52])
            }, Bb);
            return jb.color = new Sb.Color3(.06, .14, .23), jb.renderingGroupId = 1, jb.lp = !1, jb.isVisible = !1, {
              engine: hb,
              Xp: Bb,
              camera: ob,
              cells: Kb,
              translucentCells: Cb,
              translucent: {
                nZ: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: rb,
              targetOutline: jb,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: ub,
              needsRender: !0
            }
          }(bb, mu.current.fieldOfView)
        } catch (hb) {
          return console.error("Failed to start the 3D heatmap", hb), void Zu(!0)
        }
        return au.current = ub, ub.engine.runRenderLoop((() => {
          const bb = ub.camera;
          bb.fov !== ub.targetFieldOfView && (bb.fov += (ub.targetFieldOfView - bb.fov) * (bb.fov > ub.targetFieldOfView ? .3 : .2), Math.abs(ub.targetFieldOfView - bb.fov) < 5e-4 && (bb.fov = ub.targetFieldOfView), ub.needsRender = !0), ub.needsRender && (ub.Xp.render(), ub.needsRender = !ub.Xp.isReady() || !ub.engine.areAllEffectsReady())
        })), () => {
          au.current = null, ub.engine.dispose()
        }
      }), []), (0, Bb.useEffect)((() => {
        const bb = Su.current;
        if (!bb) return;
        const ub = () => {
            lu.current = !1, pu(document.pointerLockElement === bb)
          },
          hb = () => {
            lu.current && (lu.current = !1, Au(!1))
          },
          Bb = ub => {
            const hb = !mu.current.canLock && document.activeElement === bb && 0 !== (1 & ub.buttons);
            if (document.pointerLockElement !== bb && !hb) return;
            const Bb = mu.current.mouseSensitivity * Db;
            xu((bb => function(bb, ub, hb) {
              const Bb = 2 * Math.PI;
              return {
                ...bb,
                heading: ((bb.heading + ub) % Bb + Bb) % Bb,
                pitch: Math.max(-sb, Math.min(sb, bb.pitch + hb))
              }
            }(null !== bb && void 0 !== bb ? bb : mu.current.fittedView, ub.movementX * Bb, ub.movementY * Bb)))
          };
        return document.addEventListener("pointerlockchange", ub), document.addEventListener("pointerlockerror", hb), document.addEventListener("pointermove", Bb), () => {
          document.removeEventListener("pointerlockchange", ub), document.removeEventListener("pointerlockerror", hb), document.removeEventListener("pointermove", Bb), document.pointerLockElement === bb && (0, db.c)()
        }
      }), []), (0, Bb.useEffect)((() => {
        const bb = au.current;
        null !== bb && 0 !== Hu.width && 0 !== Hu.height && (bb.engine.resize(), bb.needsRender = !0)
      }), [Hu.width, Hu.height]), (0, Bb.useEffect)((() => {
        const bb = au.current;
        null !== bb && (bb.targetFieldOfView = Ju * (du ? nb : 1))
      }), [Ju, du]), (0, Bb.useEffect)((() => {
        const bb = au.current;
        null !== bb && function(bb, ub, hb, Bb) {
          const Ob = [],
            Gb = [],
            Ub = [],
            Lb = [];
          for (let Yb = 0; Yb < ub.count; Yb++) {
            const bb = ub.values[Yb],
              Sb = (0, Wb.n)(bb, hb, Bb);
            if (Sb <= 0) continue;
            const [ab, Hb, wb] = (0, Wb.k)((0, Wb.r)(bb, hb)), Zb = Sb >= 1;
            (Zb ? Ob : Ub).push(ub.positions[3 * Yb] + .5, ub.positions[3 * Yb + 1] + .5, ub.positions[3 * Yb + 2] + .5), (Zb ? Gb : Lb).push(ab / 255, Hb / 255, wb / 255, Sb)
          }
          cb(bb.cells, Float32Array.from(Ob), Float32Array.from(Gb), Gb.length / 4), bb.translucent = {
            nZ: Float32Array.from(Ub),
            colours: Float32Array.from(Lb),
            count: Lb.length / 4
          }, bb.translucentSortedFrom = null, Qb(bb), bb.needsRender = !0
        }(bb, tu, hb, tb)
      }), [tu, hb, tb]), (0, Bb.useEffect)((() => {
        const bb = au.current;
        null !== bb && function(bb, ub) {
          bb.chunkGridOrigin = ub, bb.chunkGridCentre = null, Tb(bb)
        }(bb, Mb.min)
      }), [Mb]), (0, Bb.useEffect)((() => {
        const bb = au.current;
        null !== bb && function(bb, ub, hb) {
          const Bb = [],
            Ob = [];
          if (null !== ub) {
            const {
              positions: bb,
              colours: Gb,
              count: Ub
            } = ub.surface;
            for (let ub = 0; ub < Ub; ub++) {
              const Ub = [bb[3 * ub], bb[3 * ub + 1], bb[3 * ub + 2]];
              [0, 1, 2].every((bb => Ub[bb] >= hb.min[bb] - vb && Ub[bb] <= hb.max[bb] + vb)) && (Bb.push(Ub[0] - hb.min[0] + .5, Ub[1] - hb.min[1] + .5, Ub[2] - hb.min[2] + .5), Ob.push(Gb[3 * ub] / 255, Gb[3 * ub + 1] / 255, Gb[3 * ub + 2] / 255, 1))
            }
          }
          cb(bb.schematicBlocks, Float32Array.from(Bb), Float32Array.from(Ob), Ob.length / 4), bb.needsRender = !0
        }(bb, Ib, Mb)
      }), [Ib, Mb]), (0, Bb.useEffect)((() => {
        const bb = au.current;
        null !== bb && null !== bb.chunkGrid && (bb.chunkGrid.isVisible = ju, bb.needsRender = !0)
      }), [ju, Mb]), (0, Bb.useEffect)((() => {
        const bb = au.current;
        null !== bb && function(bb, ub, hb) {
          const {
            camera: Bb
          } = bb;
          Bb.position.set(ub.position[0], ub.position[1], ub.position[2]), Bb.rotation.set(ub.pitch, ub.heading, 0);
          const Ob = (Jb + 1) * Xb.e.bX * Math.sqrt(3);
          Bb.maxZ = Math.max(Ob, Math.hypot(...Uu(ub.position, Lu(Ou({
            min: [0, 0, 0],
            max: hb
          }), -1))) + 2 * Math.hypot(...hb)), Tb(bb), Qb(bb), bb.needsRender = !0
        }(bb, Mu, vu)
      }), [Mu, vu]), (0, Bb.useEffect)((() => {
        const bb = au.current;
        null !== bb && (bb.targetOutline.isVisible = null !== Iu, null !== Iu && bb.targetOutline.position.set(Iu.x - zu[0] + .5, Iu.y - zu[1] + .5, Iu.z - zu[2] + .5), bb.needsRender = !0)
      }), [Iu, zu]);
      return (0, rb.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: Yu,
        children: [(0, rb.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: Su,
          style: {
            width: `${Hu.width}px`,
            height: `${Hu.height}px`
          },
          tabIndex: 0,
          "aria-label": fb("3D heatmap"),
          onClick: () => {
            const bb = Su.current;
            if (null === bb) return;
            if (bb.focus({
                preventScroll: !0
              }), Xu || !ou) return;
            const ub = bb.requestPointerLock();
            ub instanceof Promise ? ub.catch((bb => {
              bb instanceof DOMException && ("WrongDocumentError" === bb.name || "NotSupportedError" === bb.name) && Au(!1)
            })) : lu.current = !0
          },
          ...Pu,
          onKeyDown: bb => {
            if (Cu && xb.has(bb.code)) return bb.preventDefault(), void(() => {
              const bb = Su.current;
              null !== bb && document.pointerLockElement === bb ? (0, db.c)() : null === bb || void 0 === bb || bb.blur()
            })();
            const ub = zb[bb.code];
            return Cu && void 0 !== ub ? (bb.preventDefault(), void qb(ub)) : Cu && (0, Cb.e)("replayPlayPause", bb.code) && !(0, Cb.e)("Zoom", bb.code) ? (bb.preventDefault(), void(bb.repeat || yb())) : Cu && bb.code === gb ? (bb.preventDefault(), void Eb()) : Cu && bb.code === Nb ? (bb.preventDefault(), void xu(null)) : Cu && bb.code === eb ? (bb.preventDefault(), void nu((bb => !bb))) : void Pu.onKeyDown(bb)
          },
          onFocus: () => {
            Wu(!0)
          },
          onBlur: () => {
            Wu(!1), Pu.onBlur()
          }
        }), wu && (0, rb.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: fb("3D view isn't available in this browser.")
        }), Cu && (0, rb.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, rb.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: Mu.position.map(((bb, ub) => (bb + zu[ub]).toFixed(2))).join(" ")
        }), ju && (0, rb.jsx)(kb, {
          heading: Mu.heading,
          pitch: Mu.pitch,
          onViewFrom: bb => {
            const ub = Lu(bb, -1),
              hb = 0 === ub[1] ? {
                heading: Math.atan2(ub[0], ub[2]),
                pitch: 0
              } : {
                heading: Mu.heading,
                pitch: ub[1] < 0 ? sb : -sb
              };
            xu(hu(Nu, eu, Ju, hb))
          },
          onTurn: (bb, ub) => {
            xu((hb => function(bb, ub, hb, Bb) {
              return Bu(bb, ub, {
                heading: bb.heading + hb * Vb,
                pitch: Math.max(-sb, Math.min(sb, bb.pitch + Bb * Vb))
              })
            }(null !== hb && void 0 !== hb ? hb : mu.current.fittedView, Ou(Nu), bb, ub)))
          },
          onFlip: () => {
            xu((bb => function(bb, ub) {
              return Bu(bb, ub, {
                heading: bb.heading + Math.PI,
                pitch: -bb.pitch
              })
            }(null !== bb && void 0 !== bb ? bb : mu.current.fittedView, Ou(Nu))))
          }
        }), null !== Iu && (0, rb.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === Fb ? fb("studio:heatmapBlockReadout", {
            x: Iu.x,
            y: Iu.y,
            z: Iu.z,
            count: (0, Zb._)(Iu.value)
          }) : Fb(Iu.x, Iu.y, Iu.z, Iu.value)
        }), (0, rb.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [Pb, (0, rb.jsx)(lb.O, {
            active: null === Du,
            onClick: () => {
              xu(null)
            },
            children: (0, rb.jsx)(Kb.e, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function kb(bb) {
      let {
        heading: ub,
        pitch: hb,
        onViewFrom: Ob,
        onTurn: Gb,
        onFlip: Ub
      } = bb;
      const {
        t: Lb
      } = (0, pb.K)(), Yb = (0, Bb.useRef)(null), Sb = bu({
        heading: ub,
        pitch: hb
      }), ab = uu(ub), Hb = Su(Sb, ab), wb = qb + Eb + 2, Zb = Pb.flatMap((bb => [1, -1].map((ub => {
        const hb = Lu(bb.direction, ub);
        return {
          ...bb,
          sign: ub,
          direction: hb,
          endX: wb + Yu(hb, ab) * qb,
          endY: wb - Yu(hb, Hb) * qb,
          depth: Yu(hb, Sb)
        }
      })))).sort(((bb, ub) => ub.depth - bb.depth));
      return (0, rb.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * wb,
        height: 2 * wb,
        "aria-hidden": !0,
        onPointerDown: bb => {
          var ub, hb;
          bb.currentTarget.setPointerCapture(bb.pointerId);
          const Bb = bb.target,
            Ob = Bb.getAttribute("data-end");
          Yb.current = {
            pointerId: bb.pointerId,
            x: bb.clientX,
            y: bb.clientY,
            travel: 0,
            side: null === Ob ? null : null !== (ub = null === (hb = Zb[Number(Ob)]) || void 0 === hb ? void 0 : hb.direction) && void 0 !== ub ? ub : null,
            isOnMiddle: Bb.hasAttribute("data-middle")
          }
        },
        onPointerMove: bb => {
          const ub = Yb.current;
          if (null === ub || ub.pointerId !== bb.pointerId) return;
          const hb = bb.clientX - ub.x,
            Bb = bb.clientY - ub.y;
          ub.x = bb.clientX, ub.y = bb.clientY, ub.travel += Math.abs(hb) + Math.abs(Bb), ub.travel >= Fb && Gb(hb, Bb)
        },
        onPointerUp: bb => {
          const ub = Yb.current;
          Yb.current = null, null === ub || ub.pointerId !== bb.pointerId || ub.travel >= Fb || (null !== ub.side ? Ob(ub.side) : ub.isOnMiddle && Ub())
        },
        onPointerCancel: () => {
          Yb.current = null
        },
        children: [Zb.map(((bb, ub) => {
          const hb = bb.sign > 0;
          return (0, rb.jsxs)("g", {
            children: [(0, rb.jsx)("line", {
              x1: wb,
              y1: wb,
              x2: bb.endX,
              y2: bb.endY,
              stroke: bb.colour,
              strokeOpacity: hb ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, rb.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": ub,
              cx: bb.endX,
              cy: bb.endY,
              r: hb ? Eb : Eb - 1,
              fill: bb.colour,
              fillOpacity: hb ? 1 : .3,
              stroke: bb.colour,
              strokeWidth: hb ? 0 : 1.5,
              children: (0, rb.jsx)("title", {
                children: `${Lb("View from")} ${hb?"+":"\u2212"}${bb.name}`
              })
            }), hb && (0, rb.jsx)("text", {
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
          }, `${hb?"+":"-"}${bb.name}`)
        })), (0, rb.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: wb,
          cy: wb,
          r: yb,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, rb.jsx)("title", {
            children: Lb("View from the opposite side")
          })
        })]
      })
    }

    function Tb(bb) {
      var ub, hb, Bb;
      const {
        chunkGridOrigin: Ob,
        camera: Gb
      } = bb;
      if (null === Ob) return;
      const Ub = [Gb.position.x, Gb.position.y, Gb.position.z],
        Lb = [0, 2].map((bb => Math.floor((Ub[bb] + Ob[bb]) / Xb.e.bX))),
        Yb = bb.chunkGridCentre;
      if (null !== Yb && Yb.every(((bb, ub) => bb === Lb[ub]))) return;
      const Hb = null === (ub = null === (hb = bb.chunkGrid) || void 0 === hb ? void 0 : hb.isVisible) || void 0 === ub || ub;
      null === (Bb = bb.chunkGrid) || void 0 === Bb || Bb.dispose();
      const [Zb, pb] = [0, 2].map(((bb, ub) => {
        const hb = [];
        for (let Bb = Lb[ub] - Jb; Bb <= Lb[ub] + Jb + 1; Bb++) hb.push(Bb * Xb.e.bX - Ob[bb]);
        return hb
      })), ob = -Ob[1], Ab = [];
      for (const Sb of pb) Ab.push([new ab.YX(Zb[0], ob, Sb), new ab.YX(Zb[Zb.length - 1], ob, Sb)]);
      for (const Sb of Zb) Ab.push([new ab.YX(Sb, ob, pb[0]), new ab.YX(Sb, ob, pb[pb.length - 1])]);
      const lb = (0, wb.d)("Heatmap3DChunkGrid", {
        lines: Ab
      }, bb.Xp);
      lb.color = new Sb.Color3(.45, .6, .78), lb.lp = !1, lb.isVisible = Hb, bb.chunkGrid = lb, bb.chunkGridCentre = Lb, bb.needsRender = !0
    }

    function cb(bb, ub, hb, Bb) {
      bb.x_("matrix", function(bb, ub) {
        const hb = new Float32Array(16 * ub);
        for (let Bb = 0; Bb < ub; Bb++) {
          const ub = 16 * Bb;
          hb[ub] = 1, hb[ub + 5] = 1, hb[ub + 10] = 1, hb[ub + 12] = bb[3 * Bb], hb[ub + 13] = bb[3 * Bb + 1], hb[ub + 14] = bb[3 * Bb + 2], hb[ub + 15] = 1
        }
        return hb
      }(ub, Bb), 16, !0), bb.x_("color", hb, 4, !0), bb.isVisible = Bb > 0
    }

    function Qb(bb) {
      const {
        camera: ub,
        translucent: hb
      } = bb, Bb = [ub.position.x, ub.position.y, ub.position.z], Ob = bb.translucentSortedFrom;
      if (null !== Ob && Math.hypot(Bb[0] - Ob[0], Bb[1] - Ob[1], Bb[2] - Ob[2]) < tb) return;
      bb.translucentSortedFrom = Bb;
      const Gb = new Float64Array(hb.count),
        Ub = new Uint32Array(hb.count);
      for (let Sb = 0; Sb < hb.count; Sb++) {
        const bb = hb.nZ[3 * Sb] - Bb[0],
          ub = hb.nZ[3 * Sb + 1] - Bb[1],
          Ob = hb.nZ[3 * Sb + 2] - Bb[2];
        Gb[Sb] = bb * bb + ub * ub + Ob * Ob, Ub[Sb] = Sb
      }
      Ub.sort(((bb, ub) => Gb[ub] - Gb[bb]));
      const Lb = new Float32Array(3 * hb.count),
        Yb = new Float32Array(4 * hb.count);
      Ub.forEach(((bb, ub) => {
        Lb.set(hb.nZ.subarray(3 * bb, 3 * bb + 3), 3 * ub), Yb.set(hb.colours.subarray(4 * bb, 4 * bb + 4), 4 * ub)
      })), cb(bb.translucentCells, Lb, Yb, hb.count), bb.needsRender = !0
    }

    function Rb(bb, ub) {
      const hb = (hb, Bb, Ob) => new ab.YX(0 === hb ? bb[0] : ub[0], 0 === Bb ? bb[1] : ub[1], 0 === Ob ? bb[2] : ub[2]),
        Bb = [];
      for (const Ob of [0, 1])
        for (const bb of [0, 1]) Bb.push([hb(0, Ob, bb), hb(1, Ob, bb)], [hb(Ob, 0, bb), hb(Ob, 1, bb)], [hb(Ob, bb, 0), hb(Ob, bb, 1)]);
      return Bb
    }

    function bu(bb) {
      return [Math.sin(bb.heading) * Math.cos(bb.pitch), -Math.sin(bb.pitch), Math.cos(bb.heading) * Math.cos(bb.pitch)]
    }

    function uu(bb) {
      return [Math.cos(bb), 0, -Math.sin(bb)]
    }

    function hu(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: Mb,
        pitch: mb
      };
      const Ob = [bb.max[0] - bb.min[0], bb.max[1] - bb.min[1], bb.max[2] - bb.min[2]],
        Gb = bu(Bb),
        Ub = uu(Bb.heading),
        Lb = Su(Gb, Ub),
        Yb = Math.tan(hb / 2),
        Sb = Yb * ub;
      let ab = 1;
      for (const Hb of [-Ob[0] / 2, Ob[0] / 2])
        for (const bb of [-Ob[1] / 2, Ob[1] / 2])
          for (const ub of [-Ob[2] / 2, Ob[2] / 2]) {
            const hb = [Hb, bb, ub],
              Bb = Yu(hb, Gb);
            ab = Math.max(ab, Math.abs(Yu(hb, Ub)) / Sb - Bb, Math.abs(Yu(hb, Lb)) / Yb - Bb)
          }
      return {
        position: Uu([bb.min[0] + Ob[0] / 2, bb.min[1] + Ob[1] / 2, bb.min[2] + Ob[2] / 2], Lu(Gb, -ab * Ib)),
        heading: Bb.heading,
        pitch: Bb.pitch
      }
    }

    function Bu(bb, ub, hb) {
      const Bb = Gu(bb),
        Ob = Gu(hb),
        Gb = Uu(bb.position, Lu(ub, -1)),
        Ub = [0, 1, 2].reduce(((bb, ub) => Uu(bb, Lu(Ob[ub], Yu(Gb, Bb[ub])))), [0, 0, 0]);
      return {
        position: Uu(ub, Ub),
        heading: hb.heading,
        pitch: hb.pitch
      }
    }

    function Ou(bb) {
      return Lu(Uu(bb.min, bb.max), .5)
    }

    function Gu(bb) {
      const ub = bu(bb),
        hb = uu(bb.heading);
      return [ub, hb, Su(ub, hb)]
    }

    function Uu(bb, ub) {
      return [bb[0] + ub[0], bb[1] + ub[1], bb[2] + ub[2]]
    }

    function Lu(bb, ub) {
      return [bb[0] * ub, bb[1] * ub, bb[2] * ub]
    }

    function Yu(bb, ub) {
      return bb[0] * ub[0] + bb[1] * ub[1] + bb[2] * ub[2]
    }

    function Su(bb, ub) {
      return [bb[1] * ub[2] - bb[2] * ub[1], bb[2] * ub[0] - bb[0] * ub[2], bb[0] * ub[1] - bb[1] * ub[0]]
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);