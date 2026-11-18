export const id = 229;
export const ids = [229];
export const modules = {
  38267: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => Ny
    });
    Wy(5713);
    var Uy = Wy(55),
      hy = Wy(38272),
      fy = Wy(38564),
      Zy = Wy(38682),
      cb = Wy(38731),
      Py = Wy(38746),
      oy = Wy(35917),
      By = Wy(35856),
      Ky = Wy(38900),
      ey = Wy(38962),
      qb = (Wy(38991), Wy(1080)),
      sy = Wy(167),
      Sy = Wy(1042),
      Ey = Wy(19),
      ly = Wy(2214),
      mb = Wy(1273),
      Cy = Wy(910),
      Ty = Wy(5707),
      Vy = Wy(5721),
      Jy = Wy(3666),
      gb = Wy(952);
    const Gy = 1.2,
      Oy = .2,
      Ry = .0066 * Math.PI / 180,
      vb = new Set(["Escape", "KeyG"]),
      ib = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      My = "ArrowUp",
      Yy = new Set([...Object.keys(ib), My, "ArrowDown"]),
      Xy = 32,
      ny = 1,
      uy = 10,
      rb = "F4",
      Hy = "Period",
      ab = Math.PI / 2 - .001,
      Fy = Math.PI / 6,
      py = Math.PI / 6,
      Ly = 1.08,
      Qy = [{
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
      jb = 24,
      Dy = 7,
      tb = 4,
      wy = .01,
      kb = 4;

    function Ny(yb) {
      let {
        heatmap: bb,
        scale: Wy,
        fullyOpaqueFrom: ny,
        bounds: Fy,
        fitBounds: py,
        schematic: Ly,
        controls: Qy,
        onStepTime: jb,
        onShowAllTime: Dy,
        onTogglePlaying: tb,
        getReadout: kb = null
      } = yb;
      const {
        t: Ny
      } = (0, Sy.D)(), {
        clientEscMenuOptions: fb
      } = (0, Ey.h)(["clientEscMenuOptions"]), Pb = (0, Uy.useRef)(null), ob = (0, Uy.useRef)(null), Bb = (0, Uy.useRef)(null), Kb = (0, ly.e)(Pb), [eb, qW] = (0, Uy.useState)(!1), [sb, Sb] = (0, Uy.useState)(!1), [Eb, lb] = (0, Uy.useState)(!0), mW = (0, Uy.useRef)(!1), [Cb, Tb] = (0, Uy.useState)(!1), Vb = sb || !Eb && Cb, [Jb, gW] = (0, Uy.useState)(!1), [Gb, Ob] = (0, Uy.useState)(!0), [Rb, vW] = (0, Uy.useState)(null), iW = Fy.min, [Mb, Yb] = (0, Uy.useState)(iW);
      Mb[0] === iW[0] && Mb[1] === iW[1] && Mb[2] === iW[2] || (Yb(iW), null !== Rb && vW({
        ...Rb,
        position: Zb(Rb.position, Zb(Mb, cW(iW, -1)))
      }));
      const Xb = (0, Uy.useMemo)((() => function(yb) {
          return [yb.max[0] - yb.min[0] + 1, yb.max[1] - yb.min[1] + 1, yb.max[2] - yb.min[2] + 1]
        }(Fy)), [Fy]),
        nb = (0, Uy.useMemo)((() => function(yb, bb) {
          const Wy = [],
            Uy = [];
          for (const [hy, fy] of Object.entries(yb.frequencies)) {
            const yb = Number(hy);
            for (const [hy, Zy] of Object.entries(fy)) {
              const fy = Number(hy);
              for (const [hy, cb] of Object.entries(Zy)) cb <= 0 || (Wy.push(yb - bb[0], fy - bb[1], Number(hy) - bb[2]), Uy.push(cb))
            }
          }
          return {
            positions: Int32Array.from(Wy),
            values: Float64Array.from(Uy),
            count: Uy.length
          }
        }(bb, iW)), [bb, iW]),
        ub = Gy * fb.cameraFOV / 100,
        rW = Kb.height > 0 ? Kb.width / Kb.height : 1,
        Hb = (0, Uy.useMemo)((() => function(yb, bb) {
          return {
            min: [yb.min[0] - bb[0], yb.min[1] - bb[1], yb.min[2] - bb[2]],
            max: [yb.max[0] - bb[0] + 1, yb.max[1] - bb[1] + 1, yb.max[2] - bb[2] + 1]
          }
        }(py, iW)), [py, iW]),
        aW = Wb(Hb, rW, ub),
        Fb = null !== Rb && void 0 !== Rb ? Rb : aW,
        pb = (0, Uy.useRef)({
          fittedView: aW,
          fieldOfView: ub,
          mouseSensitivity: fb.mouseSensitivity,
          canLock: Eb
        });
      pb.current = {
        fittedView: aW,
        fieldOfView: ub,
        mouseSensitivity: fb.mouseSensitivity,
        canLock: Eb
      };
      const Lb = (0, Uy.useMemo)((() => {
          if (!Vb) return null;
          const yb = (yb, Wy, Uy) => {
              var hy, fy, Zy;
              return null !== (hy = null === (fy = bb.frequencies[yb + iW[0]]) || void 0 === fy || null === (Zy = fy[Wy + iW[1]]) || void 0 === Zy ? void 0 : Zy[Uy + iW[2]]) && void 0 !== hy ? hy : 0
            },
            Uy = function(yb, bb, Wy, Uy) {
              let hy = 0,
                fy = 1 / 0;
              for (const Ky of [0, 1, 2]) {
                if (0 === bb[Ky]) {
                  if (yb[Ky] < 0 || yb[Ky] > Wy[Ky]) return null;
                  continue
                }
                const Uy = (0 - yb[Ky]) / bb[Ky],
                  Zy = (Wy[Ky] - yb[Ky]) / bb[Ky];
                hy = Math.max(hy, Math.min(Uy, Zy)), fy = Math.min(fy, Math.max(Uy, Zy))
              }
              if (hy > fy) return null;
              const Zy = [0, 1, 2].map((Uy => Math.min(Wy[Uy] - 1, Math.max(0, Math.floor(yb[Uy] + bb[Uy] * hy))))),
                cb = [0, 1, 2].map((yb => Math.sign(bb[yb]))),
                Py = [0, 1, 2].map((Wy => {
                  if (0 === cb[Wy]) return 1 / 0;
                  return ((cb[Wy] > 0 ? Zy[Wy] + 1 : Zy[Wy]) - yb[Wy]) / bb[Wy]
                })),
                oy = [0, 1, 2].map((yb => 0 === cb[yb] ? 1 / 0 : Math.abs(1 / bb[yb])));
              let By = null;
              for (;;) {
                const yb = Uy(Zy[0], Zy[1], Zy[2]);
                if (yb >= 1) return Zy;
                yb > 0 && (By = [Zy[0], Zy[1], Zy[2]]);
                const bb = Py[0] < Py[1] ? Py[0] < Py[2] ? 0 : 2 : Py[1] < Py[2] ? 1 : 2;
                if (Py[bb] > fy) return By;
                if (Zy[bb] += cb[bb], Py[bb] += oy[bb], Zy[bb] < 0 || Zy[bb] >= Wy[bb]) return By
              }
            }(Fb.position, yW(Fb), Xb, ((bb, Uy, hy) => (0, Ty.A)(yb(bb, Uy, hy), Wy, ny)));
          return null === Uy ? null : {
            x: Uy[0] + iW[0],
            y: Uy[1] + iW[1],
            z: Uy[2] + iW[2],
            value: yb(Uy[0], Uy[1], Uy[2])
          }
        }), [Vb, bb, iW, Fb, Xb, Wy, ny]),
        {
          keyHandlers: Qb
        } = (0, Vy.d)({
          isEnabled: Vb,
          claimedKeyCodes: Yy,
          Gb: yb => {
            vW((bb => function(yb, bb) {
              const Wy = [Math.sin(yb.heading), 0, Math.cos(yb.heading)],
                Uy = Zb(Zb(cW(Wy, bb.forward), cW(bW(yb.heading), bb.right)), [0, bb.up, 0]);
              return {
                ...yb,
                position: Zb(yb.position, Uy)
              }
            }(null !== bb && void 0 !== bb ? bb : pb.current.fittedView, yb)))
          },
          onZoomChange: gW
        });
      (0, Uy.useEffect)((() => {
        const yb = ob.current;
        if (!yb) return;
        let bb;
        try {
          bb = function(yb, bb) {
            const Wy = new hy.b(yb, !0, {
                stencil: !1
              }, !0),
              Uy = new fy.b(Wy),
              [qb, sy, Sy] = Ty.V;
            Uy.clearColor = new oy.e(qb / 255, sy / 255, Sy / 255, 1);
            const Ey = new Zy.b("Heatmap3DCamera", By.dU.Zero(), Uy);
            Ey.fov = bb, Ey.minZ = .05;
            const ly = new cb.d("Heatmap3DLight", new By.dU(.4, 1, -.6), Uy);
            ly.diffuse = oy.Color3.White(), ly.groundColor = oy.Color3.Black(), ly.specular = oy.Color3.Black();
            const mb = new Py.StandardMaterial("Heatmap3DCellMaterial", Uy);
            mb.diffuseColor = new oy.Color3(.4, .4, .4), mb.emissiveColor = new oy.Color3(.62, .62, .62), mb.specularColor = oy.Color3.Black();
            const Cy = (0, Ky.e)("Heatmap3DCells", {
              size: 1
            }, Uy);
            Cy.material = mb, Cy.Kf = !1, Cy.AU = !0, Cy.isVisible = !1;
            const Vy = (0, Ky.e)("Heatmap3DTranslucentCells", {
              size: 1
            }, Uy);
            Vy.material = mb, Vy.hasVertexAlpha = !0, Vy.Kf = !1, Vy.AU = !0, Vy.isVisible = !1;
            const Jy = new Py.StandardMaterial("Heatmap3DSchematicMaterial", Uy);
            Jy.diffuseColor = new oy.Color3(.6, .6, .6), Jy.emissiveColor = new oy.Color3(.4, .4, .4), Jy.specularColor = oy.Color3.Black();
            const gb = (0, Ky.e)("Heatmap3DSchematicBlocks", {
              size: 1
            }, Uy);
            gb.material = Jy, gb.Kf = !1, gb.AU = !0, gb.isVisible = !1;
            const Gy = (0, ey.b)("Heatmap3DTarget", {
              lines: dy([-.52, -.52, -.52], [.52, .52, .52])
            }, Uy);
            return Gy.color = new oy.Color3(.06, .14, .23), Gy.renderingGroupId = 1, Gy.Kf = !1, Gy.isVisible = !1, {
              engine: Wy,
              Pf: Uy,
              camera: Ey,
              cells: Cy,
              translucentCells: Vy,
              translucent: {
                Yf: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: gb,
              targetOutline: Gy,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: bb,
              needsRender: !0
            }
          }(yb, pb.current.fieldOfView)
        } catch (Wy) {
          return console.error("Failed to start the 3D heatmap", Wy), void qW(!0)
        }
        return Bb.current = bb, bb.engine.runRenderLoop((() => {
          const yb = bb.camera;
          yb.fov !== bb.targetFieldOfView && (yb.fov += (bb.targetFieldOfView - yb.fov) * (yb.fov > bb.targetFieldOfView ? .3 : .2), Math.abs(bb.targetFieldOfView - yb.fov) < 5e-4 && (yb.fov = bb.targetFieldOfView), bb.needsRender = !0), bb.needsRender && (bb.Pf.render(), bb.needsRender = !bb.Pf.isReady() || !bb.engine.areAllEffectsReady())
        })), () => {
          Bb.current = null, bb.engine.dispose()
        }
      }), []), (0, Uy.useEffect)((() => {
        const yb = ob.current;
        if (!yb) return;
        const bb = () => {
            mW.current = !1, Sb(document.pointerLockElement === yb)
          },
          Wy = () => {
            mW.current && (mW.current = !1, lb(!1))
          },
          Uy = bb => {
            const Wy = !pb.current.canLock && document.activeElement === yb && 0 !== (1 & bb.buttons);
            if (document.pointerLockElement !== yb && !Wy) return;
            const Uy = pb.current.mouseSensitivity * Ry;
            vW((yb => function(yb, bb, Wy) {
              const Uy = 2 * Math.PI;
              return {
                ...yb,
                heading: ((yb.heading + bb) % Uy + Uy) % Uy,
                pitch: Math.max(-ab, Math.min(ab, yb.pitch + Wy))
              }
            }(null !== yb && void 0 !== yb ? yb : pb.current.fittedView, bb.movementX * Uy, bb.movementY * Uy)))
          };
        return document.addEventListener("pointerlockchange", bb), document.addEventListener("pointerlockerror", Wy), document.addEventListener("pointermove", Uy), () => {
          document.removeEventListener("pointerlockchange", bb), document.removeEventListener("pointerlockerror", Wy), document.removeEventListener("pointermove", Uy), document.pointerLockElement === yb && (0, Jy.c)()
        }
      }), []), (0, Uy.useEffect)((() => {
        const yb = Bb.current;
        null !== yb && 0 !== Kb.width && 0 !== Kb.height && (yb.engine.resize(), yb.needsRender = !0)
      }), [Kb.width, Kb.height]), (0, Uy.useEffect)((() => {
        const yb = Bb.current;
        null !== yb && (yb.targetFieldOfView = ub * (Jb ? Oy : 1))
      }), [ub, Jb]), (0, Uy.useEffect)((() => {
        const yb = Bb.current;
        null !== yb && function(yb, bb, Wy, Uy) {
          const hy = [],
            fy = [],
            Zy = [],
            cb = [];
          for (let Py = 0; Py < bb.count; Py++) {
            const yb = bb.values[Py],
              oy = (0, Ty.A)(yb, Wy, Uy);
            if (oy <= 0) continue;
            const [By, Ky, ey] = (0, Ty.u)((0, Ty.M)(yb, Wy)), qb = oy >= 1;
            (qb ? hy : Zy).push(bb.positions[3 * Py] + .5, bb.positions[3 * Py + 1] + .5, bb.positions[3 * Py + 2] + .5), (qb ? fy : cb).push(By / 255, Ky / 255, ey / 255, oy)
          }
          xb(yb.cells, Float32Array.from(hy), Float32Array.from(fy), fy.length / 4), yb.translucent = {
            Yf: Float32Array.from(Zy),
            colours: Float32Array.from(cb),
            count: cb.length / 4
          }, yb.translucentSortedFrom = null, Ay(yb), yb.needsRender = !0
        }(yb, nb, Wy, ny)
      }), [nb, Wy, ny]), (0, Uy.useEffect)((() => {
        const yb = Bb.current;
        null !== yb && function(yb, bb) {
          yb.chunkGridOrigin = bb, yb.chunkGridCentre = null, Iy(yb)
        }(yb, Fy.min)
      }), [Fy]), (0, Uy.useEffect)((() => {
        const yb = Bb.current;
        null !== yb && function(yb, bb, Wy) {
          const Uy = [],
            hy = [];
          if (null !== bb) {
            const {
              positions: yb,
              colours: fy,
              count: Zy
            } = bb.surface;
            for (let bb = 0; bb < Zy; bb++) {
              const Zy = [yb[3 * bb], yb[3 * bb + 1], yb[3 * bb + 2]];
              [0, 1, 2].every((yb => Zy[yb] >= Wy.min[yb] - Xy && Zy[yb] <= Wy.max[yb] + Xy)) && (Uy.push(Zy[0] - Wy.min[0] + .5, Zy[1] - Wy.min[1] + .5, Zy[2] - Wy.min[2] + .5), hy.push(fy[3 * bb] / 255, fy[3 * bb + 1] / 255, fy[3 * bb + 2] / 255, 1))
            }
          }
          xb(yb.schematicBlocks, Float32Array.from(Uy), Float32Array.from(hy), hy.length / 4), yb.needsRender = !0
        }(yb, Ly, Fy)
      }), [Ly, Fy]), (0, Uy.useEffect)((() => {
        const yb = Bb.current;
        null !== yb && null !== yb.chunkGrid && (yb.chunkGrid.isVisible = Gb, yb.needsRender = !0)
      }), [Gb, Fy]), (0, Uy.useEffect)((() => {
        const yb = Bb.current;
        null !== yb && function(yb, bb, Wy) {
          const {
            camera: Uy
          } = yb;
          Uy.position.set(bb.position[0], bb.position[1], bb.position[2]), Uy.rotation.set(bb.pitch, bb.heading, 0);
          const hy = (uy + 1) * sy.c.DU * Math.sqrt(3);
          Uy.maxZ = Math.max(hy, Math.hypot(...Zb(bb.position, cW(hb({
            min: [0, 0, 0],
            max: Wy
          }), -1))) + 2 * Math.hypot(...Wy)), Iy(yb), Ay(yb), yb.needsRender = !0
        }(yb, Fb, Xb)
      }), [Fb, Xb]), (0, Uy.useEffect)((() => {
        const yb = Bb.current;
        null !== yb && (yb.targetOutline.isVisible = null !== Lb, null !== Lb && yb.targetOutline.position.set(Lb.x - iW[0] + .5, Lb.y - iW[1] + .5, Lb.z - iW[2] + .5), yb.needsRender = !0)
      }), [Lb, iW]);
      return (0, gb.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: Pb,
        children: [(0, gb.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: ob,
          style: {
            width: `${Kb.width}px`,
            height: `${Kb.height}px`
          },
          tabIndex: 0,
          "aria-label": Ny("3D heatmap"),
          onClick: () => {
            const yb = ob.current;
            if (null === yb) return;
            if (yb.focus({
                preventScroll: !0
              }), sb || !Eb) return;
            const bb = yb.requestPointerLock();
            bb instanceof Promise ? bb.catch((yb => {
              yb instanceof DOMException && ("WrongDocumentError" === yb.name || "NotSupportedError" === yb.name) && lb(!1)
            })) : mW.current = !0
          },
          ...Qb,
          onKeyDown: yb => {
            if (Vb && vb.has(yb.code)) return yb.preventDefault(), void(() => {
              const yb = ob.current;
              null !== yb && document.pointerLockElement === yb ? (0, Jy.c)() : null === yb || void 0 === yb || yb.blur()
            })();
            const bb = ib[yb.code];
            return Vb && void 0 !== bb ? (yb.preventDefault(), void jb(bb)) : Vb && (0, Vy.b)("replayPlayPause", yb.code) && !(0, Vy.b)("Zoom", yb.code) ? (yb.preventDefault(), void(yb.repeat || tb())) : Vb && yb.code === My ? (yb.preventDefault(), void Dy()) : Vb && yb.code === Hy ? (yb.preventDefault(), void vW(null)) : Vb && yb.code === rb ? (yb.preventDefault(), void Ob((yb => !yb))) : void Qb.onKeyDown(yb)
          },
          onFocus: () => {
            Tb(!0)
          },
          onBlur: () => {
            Tb(!1), Qb.onBlur()
          }
        }), eb && (0, gb.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: Ny("3D view isn't available in this browser.")
        }), Vb && (0, gb.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, gb.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: Fb.position.map(((yb, bb) => (yb + iW[bb]).toFixed(2))).join(" ")
        }), Gb && (0, gb.jsx)(zb, {
          heading: Fb.heading,
          pitch: Fb.pitch,
          onViewFrom: yb => {
            const bb = cW(yb, -1),
              Wy = 0 === bb[1] ? {
                heading: Math.atan2(bb[0], bb[2]),
                pitch: 0
              } : {
                heading: Fb.heading,
                pitch: bb[1] < 0 ? ab : -ab
              };
            vW(Wb(Hb, rW, ub, Wy))
          },
          onTurn: (yb, bb) => {
            vW((Wy => function(yb, bb, Wy, Uy) {
              return Ub(yb, bb, {
                heading: yb.heading + Wy * wy,
                pitch: Math.max(-ab, Math.min(ab, yb.pitch + Uy * wy))
              })
            }(null !== Wy && void 0 !== Wy ? Wy : pb.current.fittedView, hb(Hb), yb, bb)))
          },
          onFlip: () => {
            vW((yb => function(yb, bb) {
              return Ub(yb, bb, {
                heading: yb.heading + Math.PI,
                pitch: -yb.pitch
              })
            }(null !== yb && void 0 !== yb ? yb : pb.current.fittedView, hb(Hb))))
          }
        }), null !== Lb && (0, gb.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === kb ? Ny("studio:heatmapBlockReadout", {
            x: Lb.x,
            y: Lb.y,
            z: Lb.z,
            count: (0, qb.S)(Lb.value)
          }) : kb(Lb.x, Lb.y, Lb.z, Lb.value)
        }), (0, gb.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [Qy, (0, gb.jsx)(mb.M, {
            active: null === Rb,
            onClick: () => {
              vW(null)
            },
            children: (0, gb.jsx)(Cy.e, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function zb(yb) {
      let {
        heading: bb,
        pitch: Wy,
        onViewFrom: hy,
        onTurn: fy,
        onFlip: Zy
      } = yb;
      const {
        t: cb
      } = (0, Sy.D)(), Py = (0, Uy.useRef)(null), oy = yW({
        heading: bb,
        pitch: Wy
      }), By = bW(bb), Ky = ob(oy, By), ey = jb + Dy + 2, qb = Qy.flatMap((yb => [1, -1].map((bb => {
        const Wy = cW(yb.direction, bb);
        return {
          ...yb,
          sign: bb,
          direction: Wy,
          endX: ey + Pb(Wy, By) * jb,
          endY: ey - Pb(Wy, Ky) * jb,
          depth: Pb(Wy, oy)
        }
      })))).sort(((yb, bb) => bb.depth - yb.depth));
      return (0, gb.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * ey,
        height: 2 * ey,
        "aria-hidden": !0,
        onPointerDown: yb => {
          var bb, Wy;
          yb.currentTarget.setPointerCapture(yb.pointerId);
          const Uy = yb.target,
            hy = Uy.getAttribute("data-end");
          Py.current = {
            pointerId: yb.pointerId,
            x: yb.clientX,
            y: yb.clientY,
            travel: 0,
            side: null === hy ? null : null !== (bb = null === (Wy = qb[Number(hy)]) || void 0 === Wy ? void 0 : Wy.direction) && void 0 !== bb ? bb : null,
            isOnMiddle: Uy.hasAttribute("data-middle")
          }
        },
        onPointerMove: yb => {
          const bb = Py.current;
          if (null === bb || bb.pointerId !== yb.pointerId) return;
          const Wy = yb.clientX - bb.x,
            Uy = yb.clientY - bb.y;
          bb.x = yb.clientX, bb.y = yb.clientY, bb.travel += Math.abs(Wy) + Math.abs(Uy), bb.travel >= kb && fy(Wy, Uy)
        },
        onPointerUp: yb => {
          const bb = Py.current;
          Py.current = null, null === bb || bb.pointerId !== yb.pointerId || bb.travel >= kb || (null !== bb.side ? hy(bb.side) : bb.isOnMiddle && Zy())
        },
        onPointerCancel: () => {
          Py.current = null
        },
        children: [qb.map(((yb, bb) => {
          const Wy = yb.sign > 0;
          return (0, gb.jsxs)("g", {
            children: [(0, gb.jsx)("line", {
              x1: ey,
              y1: ey,
              x2: yb.endX,
              y2: yb.endY,
              stroke: yb.colour,
              strokeOpacity: Wy ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, gb.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": bb,
              cx: yb.endX,
              cy: yb.endY,
              r: Wy ? Dy : Dy - 1,
              fill: yb.colour,
              fillOpacity: Wy ? 1 : .3,
              stroke: yb.colour,
              strokeWidth: Wy ? 0 : 1.5,
              children: (0, gb.jsx)("title", {
                children: `${cb("View from")} ${Wy?"+":"\u2212"}${yb.name}`
              })
            }), Wy && (0, gb.jsx)("text", {
              pointerEvents: "none",
              x: yb.endX,
              y: yb.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: yb.name
            })]
          }, `${Wy?"+":"-"}${yb.name}`)
        })), (0, gb.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: ey,
          cy: ey,
          r: tb,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, gb.jsx)("title", {
            children: cb("View from the opposite side")
          })
        })]
      })
    }

    function Iy(yb) {
      var bb, Wy, Uy;
      const {
        chunkGridOrigin: hy,
        camera: fy
      } = yb;
      if (null === hy) return;
      const Zy = [fy.position.x, fy.position.y, fy.position.z],
        cb = [0, 2].map((yb => Math.floor((Zy[yb] + hy[yb]) / sy.c.DU))),
        Py = yb.chunkGridCentre;
      if (null !== Py && Py.every(((yb, bb) => yb === cb[bb]))) return;
      const Ky = null === (bb = null === (Wy = yb.chunkGrid) || void 0 === Wy ? void 0 : Wy.isVisible) || void 0 === bb || bb;
      null === (Uy = yb.chunkGrid) || void 0 === Uy || Uy.dispose();
      const [qb, Sy] = [0, 2].map(((yb, bb) => {
        const Wy = [];
        for (let Uy = cb[bb] - uy; Uy <= cb[bb] + uy + 1; Uy++) Wy.push(Uy * sy.c.DU - hy[yb]);
        return Wy
      })), Ey = -hy[1], ly = [];
      for (const oy of Sy) ly.push([new By.dU(qb[0], Ey, oy), new By.dU(qb[qb.length - 1], Ey, oy)]);
      for (const oy of qb) ly.push([new By.dU(oy, Ey, Sy[0]), new By.dU(oy, Ey, Sy[Sy.length - 1])]);
      const mb = (0, ey.b)("Heatmap3DChunkGrid", {
        lines: ly
      }, yb.Pf);
      mb.color = new oy.Color3(.45, .6, .78), mb.Kf = !1, mb.isVisible = Ky, yb.chunkGrid = mb, yb.chunkGridCentre = cb, yb.needsRender = !0
    }

    function xb(yb, bb, Wy, Uy) {
      yb.VZy("matrix", function(yb, bb) {
        const Wy = new Float32Array(16 * bb);
        for (let Uy = 0; Uy < bb; Uy++) {
          const bb = 16 * Uy;
          Wy[bb] = 1, Wy[bb + 5] = 1, Wy[bb + 10] = 1, Wy[bb + 12] = yb[3 * Uy], Wy[bb + 13] = yb[3 * Uy + 1], Wy[bb + 14] = yb[3 * Uy + 2], Wy[bb + 15] = 1
        }
        return Wy
      }(bb, Uy), 16, !0), yb.VZy("color", Wy, 4, !0), yb.isVisible = Uy > 0
    }

    function Ay(yb) {
      const {
        camera: bb,
        translucent: Wy
      } = yb, Uy = [bb.position.x, bb.position.y, bb.position.z], hy = yb.translucentSortedFrom;
      if (null !== hy && Math.hypot(Uy[0] - hy[0], Uy[1] - hy[1], Uy[2] - hy[2]) < ny) return;
      yb.translucentSortedFrom = Uy;
      const fy = new Float64Array(Wy.count),
        Zy = new Uint32Array(Wy.count);
      for (let oy = 0; oy < Wy.count; oy++) {
        const yb = Wy.Yf[3 * oy] - Uy[0],
          bb = Wy.Yf[3 * oy + 1] - Uy[1],
          hy = Wy.Yf[3 * oy + 2] - Uy[2];
        fy[oy] = yb * yb + bb * bb + hy * hy, Zy[oy] = oy
      }
      Zy.sort(((yb, bb) => fy[bb] - fy[yb]));
      const cb = new Float32Array(3 * Wy.count),
        Py = new Float32Array(4 * Wy.count);
      Zy.forEach(((yb, bb) => {
        cb.set(Wy.Yf.subarray(3 * yb, 3 * yb + 3), 3 * bb), Py.set(Wy.colours.subarray(4 * yb, 4 * yb + 4), 4 * bb)
      })), xb(yb.translucentCells, cb, Py, Wy.count), yb.needsRender = !0
    }

    function dy(yb, bb) {
      const Wy = (Wy, Uy, hy) => new By.dU(0 === Wy ? yb[0] : bb[0], 0 === Uy ? yb[1] : bb[1], 0 === hy ? yb[2] : bb[2]),
        Uy = [];
      for (const hy of [0, 1])
        for (const yb of [0, 1]) Uy.push([Wy(0, hy, yb), Wy(1, hy, yb)], [Wy(hy, 0, yb), Wy(hy, 1, yb)], [Wy(hy, yb, 0), Wy(hy, yb, 1)]);
      return Uy
    }

    function yW(yb) {
      return [Math.sin(yb.heading) * Math.cos(yb.pitch), -Math.sin(yb.pitch), Math.cos(yb.heading) * Math.cos(yb.pitch)]
    }

    function bW(yb) {
      return [Math.cos(yb), 0, -Math.sin(yb)]
    }

    function Wb(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: Fy,
        pitch: py
      };
      const hy = [yb.max[0] - yb.min[0], yb.max[1] - yb.min[1], yb.max[2] - yb.min[2]],
        fy = yW(Uy),
        Zy = bW(Uy.heading),
        cb = ob(fy, Zy),
        Py = Math.tan(Wy / 2),
        oy = Py * bb;
      let By = 1;
      for (const Ky of [-hy[0] / 2, hy[0] / 2])
        for (const yb of [-hy[1] / 2, hy[1] / 2])
          for (const bb of [-hy[2] / 2, hy[2] / 2]) {
            const Wy = [Ky, yb, bb],
              Uy = Pb(Wy, fy);
            By = Math.max(By, Math.abs(Pb(Wy, Zy)) / oy - Uy, Math.abs(Pb(Wy, cb)) / Py - Uy)
          }
      return {
        position: Zb([yb.min[0] + hy[0] / 2, yb.min[1] + hy[1] / 2, yb.min[2] + hy[2] / 2], cW(fy, -By * Ly)),
        heading: Uy.heading,
        pitch: Uy.pitch
      }
    }

    function Ub(yb, bb, Wy) {
      const Uy = fb(yb),
        hy = fb(Wy),
        fy = Zb(yb.position, cW(bb, -1)),
        Zy = [0, 1, 2].reduce(((yb, bb) => Zb(yb, cW(hy[bb], Pb(fy, Uy[bb])))), [0, 0, 0]);
      return {
        position: Zb(bb, Zy),
        heading: Wy.heading,
        pitch: Wy.pitch
      }
    }

    function hb(yb) {
      return cW(Zb(yb.min, yb.max), .5)
    }

    function fb(yb) {
      const bb = yW(yb),
        Wy = bW(yb.heading);
      return [bb, Wy, ob(bb, Wy)]
    }

    function Zb(yb, bb) {
      return [yb[0] + bb[0], yb[1] + bb[1], yb[2] + bb[2]]
    }

    function cW(yb, bb) {
      return [yb[0] * bb, yb[1] * bb, yb[2] * bb]
    }

    function Pb(yb, bb) {
      return yb[0] * bb[0] + yb[1] * bb[1] + yb[2] * bb[2]
    }

    function ob(yb, bb) {
      return [yb[1] * bb[2] - yb[2] * bb[1], yb[2] * bb[0] - yb[0] * bb[2], yb[0] * bb[1] - yb[1] * bb[0]]
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);