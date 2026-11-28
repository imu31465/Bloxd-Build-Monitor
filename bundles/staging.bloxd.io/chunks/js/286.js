export const id = 286;
export const ids = [286];
export const modules = {
  41753: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => Zd
    });
    md(7389);
    var Wd = md(66),
      Fd = md(41756),
      Rd = md(42016),
      Xd = md(42121),
      Kd = md(42162),
      hd = md(42179),
      vd = md(38736),
      Qd = md(38627),
      td = md(42321),
      od = md(42384),
      Nd = (md(42420), md(1286)),
      qd = md(218),
      Hd = md(1238),
      yd = md(29),
      bd = md(3851),
      Td = md(1572),
      pd = md(1443),
      Yd = md(7382),
      gd = md(7395),
      wd = md(5117),
      Ed = md(1341);
    const Jd = 1.2,
      Ud = .2,
      xd = .0066 * Math.PI / 180,
      Bd = new Set(["Escape", "KeyG"]),
      Sd = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      sd = "ArrowUp",
      ud = new Set([...Object.keys(Sd), sd, "ArrowDown"]),
      Vd = 32,
      Ad = 1,
      rd = 10,
      Gd = "F4",
      nd = "Period",
      Ld = Math.PI / 2 - .001,
      Pd = Math.PI / 6,
      zd = Math.PI / 6,
      cd = 1.08,
      jd = [{
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
      Dd = 24,
      ed = 7,
      Id = 4,
      ld = .01,
      Cd = 4;

    function Zd(dd) {
      let {
        heatmap: Od,
        scale: md,
        fullyOpaqueFrom: Ad,
        bounds: Pd,
        fitBounds: zd,
        schematic: cd,
        controls: jd,
        onStepTime: Dd,
        onShowAllTime: ed,
        onTogglePlaying: Id,
        getReadout: Cd = null
      } = dd;
      const {
        t: Zd
      } = (0, Hd.G)(), {
        clientEscMenuOptions: KO
      } = (0, yd.p)(["clientEscMenuOptions"]), QO = (0, Wd.useRef)(null), tO = (0, Wd.useRef)(null), oO = (0, Wd.useRef)(null), NO = (0, bd.b)(QO), [qO, HO] = (0, Wd.useState)(!1), [yO, bO] = (0, Wd.useState)(!1), [TO, pO] = (0, Wd.useState)(!0), YO = (0, Wd.useRef)(!1), [gO, wO] = (0, Wd.useState)(!1), aO = yO || !TO && gO, [EO, JO] = (0, Wd.useState)(!1), [UO, xO] = (0, Wd.useState)(!0), [BO, SO] = (0, Wd.useState)(null), sO = Pd.min, [uO, VO] = (0, Wd.useState)(sO);
      uO[0] === sO[0] && uO[1] === sO[1] && uO[2] === sO[2] || (VO(sO), null !== BO && SO({
        ...BO,
        position: hO(BO.position, hO(uO, vO(sO, -1)))
      }));
      const iO = (0, Wd.useMemo)((() => function(dd) {
          return [dd.max[0] - dd.min[0] + 1, dd.max[1] - dd.min[1] + 1, dd.max[2] - dd.min[2] + 1]
        }(Pd)), [Pd]),
        AO = (0, Wd.useMemo)((() => function(dd, Od) {
          const md = [],
            Wd = [];
          for (const [Fd, Rd] of Object.entries(dd.frequencies)) {
            const dd = Number(Fd);
            for (const [Fd, Xd] of Object.entries(Rd)) {
              const Rd = Number(Fd);
              for (const [Fd, Kd] of Object.entries(Xd)) Kd <= 0 || (md.push(dd - Od[0], Rd - Od[1], Number(Fd) - Od[2]), Wd.push(Kd))
            }
          }
          return {
            positions: Int32Array.from(md),
            values: Float64Array.from(Wd),
            count: Wd.length
          }
        }(Od, sO)), [Od, sO]),
        rO = Jd * KO.cameraFOV / 100,
        GO = NO.height > 0 ? NO.width / NO.height : 1,
        nO = (0, Wd.useMemo)((() => function(dd, Od) {
          return {
            min: [dd.min[0] - Od[0], dd.min[1] - Od[1], dd.min[2] - Od[2]],
            max: [dd.max[0] - Od[0] + 1, dd.max[1] - Od[1] + 1, dd.max[2] - Od[2] + 1]
          }
        }(zd, sO)), [zd, sO]),
        LO = FO(nO, GO, rO),
        PO = null !== BO && void 0 !== BO ? BO : LO,
        zO = (0, Wd.useRef)({
          fittedView: LO,
          fieldOfView: rO,
          mouseSensitivity: KO.mouseSensitivity,
          canLock: TO
        });
      zO.current = {
        fittedView: LO,
        fieldOfView: rO,
        mouseSensitivity: KO.mouseSensitivity,
        canLock: TO
      };
      const cO = (0, Wd.useMemo)((() => {
          if (!aO) return null;
          const dd = (dd, md, Wd) => {
              var Fd, Rd, Xd;
              return null !== (Fd = null === (Rd = Od.frequencies[dd + sO[0]]) || void 0 === Rd || null === (Xd = Rd[md + sO[1]]) || void 0 === Xd ? void 0 : Xd[Wd + sO[2]]) && void 0 !== Fd ? Fd : 0
            },
            Wd = function(dd, Od, md, Wd) {
              let Fd = 0,
                Rd = 1 / 0;
              for (const td of [0, 1, 2]) {
                if (0 === Od[td]) {
                  if (dd[td] < 0 || dd[td] > md[td]) return null;
                  continue
                }
                const Wd = (0 - dd[td]) / Od[td],
                  Xd = (md[td] - dd[td]) / Od[td];
                Fd = Math.max(Fd, Math.min(Wd, Xd)), Rd = Math.min(Rd, Math.max(Wd, Xd))
              }
              if (Fd > Rd) return null;
              const Xd = [0, 1, 2].map((Wd => Math.min(md[Wd] - 1, Math.max(0, Math.floor(dd[Wd] + Od[Wd] * Fd))))),
                Kd = [0, 1, 2].map((dd => Math.sign(Od[dd]))),
                hd = [0, 1, 2].map((md => {
                  if (0 === Kd[md]) return 1 / 0;
                  return ((Kd[md] > 0 ? Xd[md] + 1 : Xd[md]) - dd[md]) / Od[md]
                })),
                vd = [0, 1, 2].map((dd => 0 === Kd[dd] ? 1 / 0 : Math.abs(1 / Od[dd])));
              let Qd = null;
              for (;;) {
                const dd = Wd(Xd[0], Xd[1], Xd[2]);
                if (dd >= 1) return Xd;
                dd > 0 && (Qd = [Xd[0], Xd[1], Xd[2]]);
                const Od = hd[0] < hd[1] ? hd[0] < hd[2] ? 0 : 2 : hd[1] < hd[2] ? 1 : 2;
                if (hd[Od] > Rd) return Qd;
                if (Xd[Od] += Kd[Od], hd[Od] += vd[Od], Xd[Od] < 0 || Xd[Od] >= md[Od]) return Qd
              }
            }(PO.position, mO(PO), iO, ((Od, Wd, Fd) => (0, Yd.F)(dd(Od, Wd, Fd), md, Ad)));
          return null === Wd ? null : {
            x: Wd[0] + sO[0],
            y: Wd[1] + sO[1],
            z: Wd[2] + sO[2],
            value: dd(Wd[0], Wd[1], Wd[2])
          }
        }), [aO, Od, sO, PO, iO, md, Ad]),
        {
          keyHandlers: jO
        } = (0, gd.h)({
          isEnabled: aO,
          claimedKeyCodes: ud,
          ko: dd => {
            SO((Od => function(dd, Od) {
              const md = [Math.sin(dd.heading), 0, Math.cos(dd.heading)],
                Wd = hO(hO(vO(md, Od.forward), vO(WO(dd.heading), Od.right)), [0, Od.up, 0]);
              return {
                ...dd,
                position: hO(dd.position, Wd)
              }
            }(null !== Od && void 0 !== Od ? Od : zO.current.fittedView, dd)))
          },
          onZoomChange: JO
        });
      (0, Wd.useEffect)((() => {
        const dd = tO.current;
        if (!dd) return;
        let Od;
        try {
          Od = function(dd, Od) {
            const md = new Fd.d(dd, !0, {
                stencil: !1
              }, !0),
              Wd = new Rd.e(md),
              [Nd, qd, Hd] = Yd.T;
            Wd.clearColor = new vd.b(Nd / 255, qd / 255, Hd / 255, 1);
            const yd = new Xd.e("Heatmap3DCamera", Qd.Cq.Zero(), Wd);
            yd.fov = Od, yd.minZ = .05;
            const bd = new Kd.e("Heatmap3DLight", new Qd.Cq(.4, 1, -.6), Wd);
            bd.diffuse = vd.Color3.White(), bd.groundColor = vd.Color3.Black(), bd.specular = vd.Color3.Black();
            const Td = new hd.StandardMaterial("Heatmap3DCellMaterial", Wd);
            Td.diffuseColor = new vd.Color3(.4, .4, .4), Td.emissiveColor = new vd.Color3(.62, .62, .62), Td.specularColor = vd.Color3.Black();
            const pd = (0, td.e)("Heatmap3DCells", {
              size: 1
            }, Wd);
            pd.material = Td, pd.my = !1, pd.lq = !0, pd.isVisible = !1;
            const gd = (0, td.e)("Heatmap3DTranslucentCells", {
              size: 1
            }, Wd);
            gd.material = Td, gd.hasVertexAlpha = !0, gd.my = !1, gd.lq = !0, gd.isVisible = !1;
            const wd = new hd.StandardMaterial("Heatmap3DSchematicMaterial", Wd);
            wd.diffuseColor = new vd.Color3(.6, .6, .6), wd.emissiveColor = new vd.Color3(.4, .4, .4), wd.specularColor = vd.Color3.Black();
            const Ed = (0, td.e)("Heatmap3DSchematicBlocks", {
              size: 1
            }, Wd);
            Ed.material = wd, Ed.my = !1, Ed.lq = !0, Ed.isVisible = !1;
            const Jd = (0, od.e)("Heatmap3DTarget", {
              lines: OO([-.52, -.52, -.52], [.52, .52, .52])
            }, Wd);
            return Jd.color = new vd.Color3(.06, .14, .23), Jd.renderingGroupId = 1, Jd.my = !1, Jd.isVisible = !1, {
              engine: md,
              MH: Wd,
              camera: yd,
              cells: pd,
              translucentCells: gd,
              translucent: {
                Ty: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: Ed,
              targetOutline: Jd,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: Od,
              needsRender: !0
            }
          }(dd, zO.current.fieldOfView)
        } catch (md) {
          return console.error("Failed to start the 3D heatmap", md), void HO(!0)
        }
        return oO.current = Od, Od.engine.runRenderLoop((() => {
          const dd = Od.camera;
          dd.fov !== Od.targetFieldOfView && (dd.fov += (Od.targetFieldOfView - dd.fov) * (dd.fov > Od.targetFieldOfView ? .3 : .2), Math.abs(Od.targetFieldOfView - dd.fov) < 5e-4 && (dd.fov = Od.targetFieldOfView), Od.needsRender = !0), Od.needsRender && (Od.MH.render(), Od.needsRender = !Od.MH.isReady() || !Od.engine.areAllEffectsReady())
        })), () => {
          oO.current = null, Od.engine.dispose()
        }
      }), []), (0, Wd.useEffect)((() => {
        const dd = tO.current;
        if (!dd) return;
        const Od = () => {
            YO.current = !1, bO(document.pointerLockElement === dd)
          },
          md = () => {
            YO.current && (YO.current = !1, pO(!1))
          },
          Wd = Od => {
            const md = !zO.current.canLock && document.activeElement === dd && 0 !== (1 & Od.buttons);
            if (document.pointerLockElement !== dd && !md) return;
            const Wd = zO.current.mouseSensitivity * xd;
            SO((dd => function(dd, Od, md) {
              const Wd = 2 * Math.PI;
              return {
                ...dd,
                heading: ((dd.heading + Od) % Wd + Wd) % Wd,
                pitch: Math.max(-Ld, Math.min(Ld, dd.pitch + md))
              }
            }(null !== dd && void 0 !== dd ? dd : zO.current.fittedView, Od.movementX * Wd, Od.movementY * Wd)))
          };
        return document.addEventListener("pointerlockchange", Od), document.addEventListener("pointerlockerror", md), document.addEventListener("pointermove", Wd), () => {
          document.removeEventListener("pointerlockchange", Od), document.removeEventListener("pointerlockerror", md), document.removeEventListener("pointermove", Wd), document.pointerLockElement === dd && (0, wd.e)()
        }
      }), []), (0, Wd.useEffect)((() => {
        const dd = oO.current;
        null !== dd && 0 !== NO.width && 0 !== NO.height && (dd.engine.resize(), dd.needsRender = !0)
      }), [NO.width, NO.height]), (0, Wd.useEffect)((() => {
        const dd = oO.current;
        null !== dd && (dd.targetFieldOfView = rO * (EO ? Ud : 1))
      }), [rO, EO]), (0, Wd.useEffect)((() => {
        const dd = oO.current;
        null !== dd && function(dd, Od, md, Wd) {
          const Fd = [],
            Rd = [],
            Xd = [],
            Kd = [];
          for (let hd = 0; hd < Od.count; hd++) {
            const dd = Od.values[hd],
              vd = (0, Yd.F)(dd, md, Wd);
            if (vd <= 0) continue;
            const [Qd, td, od] = (0, Yd.v)((0, Yd.L)(dd, md)), Nd = vd >= 1;
            (Nd ? Fd : Xd).push(Od.positions[3 * hd] + .5, Od.positions[3 * hd + 1] + .5, Od.positions[3 * hd + 2] + .5), (Nd ? Rd : Kd).push(Qd / 255, td / 255, od / 255, vd)
          }
          Md(dd.cells, Float32Array.from(Fd), Float32Array.from(Rd), Rd.length / 4), dd.translucent = {
            Ty: Float32Array.from(Xd),
            colours: Float32Array.from(Kd),
            count: Kd.length / 4
          }, dd.translucentSortedFrom = null, dO(dd), dd.needsRender = !0
        }(dd, AO, md, Ad)
      }), [AO, md, Ad]), (0, Wd.useEffect)((() => {
        const dd = oO.current;
        null !== dd && function(dd, Od) {
          dd.chunkGridOrigin = Od, dd.chunkGridCentre = null, fd(dd)
        }(dd, Pd.min)
      }), [Pd]), (0, Wd.useEffect)((() => {
        const dd = oO.current;
        null !== dd && function(dd, Od, md) {
          const Wd = [],
            Fd = [];
          if (null !== Od) {
            const {
              positions: dd,
              colours: Rd,
              count: Xd
            } = Od.surface;
            for (let Od = 0; Od < Xd; Od++) {
              const Xd = [dd[3 * Od], dd[3 * Od + 1], dd[3 * Od + 2]];
              [0, 1, 2].every((dd => Xd[dd] >= md.min[dd] - Vd && Xd[dd] <= md.max[dd] + Vd)) && (Wd.push(Xd[0] - md.min[0] + .5, Xd[1] - md.min[1] + .5, Xd[2] - md.min[2] + .5), Fd.push(Rd[3 * Od] / 255, Rd[3 * Od + 1] / 255, Rd[3 * Od + 2] / 255, 1))
            }
          }
          Md(dd.schematicBlocks, Float32Array.from(Wd), Float32Array.from(Fd), Fd.length / 4), dd.needsRender = !0
        }(dd, cd, Pd)
      }), [cd, Pd]), (0, Wd.useEffect)((() => {
        const dd = oO.current;
        null !== dd && null !== dd.chunkGrid && (dd.chunkGrid.isVisible = UO, dd.needsRender = !0)
      }), [UO, Pd]), (0, Wd.useEffect)((() => {
        const dd = oO.current;
        null !== dd && function(dd, Od, md) {
          const {
            camera: Wd
          } = dd;
          Wd.position.set(Od.position[0], Od.position[1], Od.position[2]), Wd.rotation.set(Od.pitch, Od.heading, 0);
          const Fd = (rd + 1) * qd.i.Qt * Math.sqrt(3);
          Wd.maxZ = Math.max(Fd, Math.hypot(...hO(Od.position, vO(XO({
            min: [0, 0, 0],
            max: md
          }), -1))) + 2 * Math.hypot(...md)), fd(dd), dO(dd), dd.needsRender = !0
        }(dd, PO, iO)
      }), [PO, iO]), (0, Wd.useEffect)((() => {
        const dd = oO.current;
        null !== dd && (dd.targetOutline.isVisible = null !== cO, null !== cO && dd.targetOutline.position.set(cO.x - sO[0] + .5, cO.y - sO[1] + .5, cO.z - sO[2] + .5), dd.needsRender = !0)
      }), [cO, sO]);
      return (0, Ed.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: QO,
        children: [(0, Ed.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: tO,
          style: {
            width: `${NO.width}px`,
            height: `${NO.height}px`
          },
          tabIndex: 0,
          "aria-label": Zd("3D heatmap"),
          onClick: () => {
            const dd = tO.current;
            if (null === dd) return;
            if (dd.focus({
                preventScroll: !0
              }), yO || !TO) return;
            const Od = dd.requestPointerLock();
            Od instanceof Promise ? Od.catch((dd => {
              dd instanceof DOMException && ("WrongDocumentError" === dd.name || "NotSupportedError" === dd.name) && pO(!1)
            })) : YO.current = !0
          },
          ...jO,
          onKeyDown: dd => {
            if (aO && Bd.has(dd.code)) return dd.preventDefault(), void(() => {
              const dd = tO.current;
              null !== dd && document.pointerLockElement === dd ? (0, wd.e)() : null === dd || void 0 === dd || dd.blur()
            })();
            const Od = Sd[dd.code];
            return aO && void 0 !== Od ? (dd.preventDefault(), void Dd(Od)) : aO && (0, gd.e)("replayPlayPause", dd.code) && !(0, gd.e)("Zoom", dd.code) ? (dd.preventDefault(), void(dd.repeat || Id())) : aO && dd.code === sd ? (dd.preventDefault(), void ed()) : aO && dd.code === nd ? (dd.preventDefault(), void SO(null)) : aO && dd.code === Gd ? (dd.preventDefault(), void xO((dd => !dd))) : void jO.onKeyDown(dd)
          },
          onFocus: () => {
            wO(!0)
          },
          onBlur: () => {
            wO(!1), jO.onBlur()
          }
        }), qO && (0, Ed.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: Zd("3D view isn't available in this browser.")
        }), aO && (0, Ed.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, Ed.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: PO.position.map(((dd, Od) => (dd + sO[Od]).toFixed(2))).join(" ")
        }), UO && (0, Ed.jsx)(kd, {
          heading: PO.heading,
          pitch: PO.pitch,
          onViewFrom: dd => {
            const Od = vO(dd, -1),
              md = 0 === Od[1] ? {
                heading: Math.atan2(Od[0], Od[2]),
                pitch: 0
              } : {
                heading: PO.heading,
                pitch: Od[1] < 0 ? Ld : -Ld
              };
            SO(FO(nO, GO, rO, md))
          },
          onTurn: (dd, Od) => {
            SO((md => function(dd, Od, md, Wd) {
              return RO(dd, Od, {
                heading: dd.heading + md * ld,
                pitch: Math.max(-Ld, Math.min(Ld, dd.pitch + Wd * ld))
              })
            }(null !== md && void 0 !== md ? md : zO.current.fittedView, XO(nO), dd, Od)))
          },
          onFlip: () => {
            SO((dd => function(dd, Od) {
              return RO(dd, Od, {
                heading: dd.heading + Math.PI,
                pitch: -dd.pitch
              })
            }(null !== dd && void 0 !== dd ? dd : zO.current.fittedView, XO(nO))))
          }
        }), null !== cO && (0, Ed.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === Cd ? Zd("studio:heatmapBlockReadout", {
            x: cO.x,
            y: cO.y,
            z: cO.z,
            count: (0, Nd.M)(cO.value)
          }) : Cd(cO.x, cO.y, cO.z, cO.value)
        }), (0, Ed.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [jd, (0, Ed.jsx)(Td.S, {
            active: null === BO,
            onClick: () => {
              SO(null)
            },
            children: (0, Ed.jsx)(pd.c, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function kd(dd) {
      let {
        heading: Od,
        pitch: md,
        onViewFrom: Fd,
        onTurn: Rd,
        onFlip: Xd
      } = dd;
      const {
        t: Kd
      } = (0, Hd.G)(), hd = (0, Wd.useRef)(null), vd = mO({
        heading: Od,
        pitch: md
      }), Qd = WO(Od), td = tO(vd, Qd), od = Dd + ed + 2, Nd = jd.flatMap((dd => [1, -1].map((Od => {
        const md = vO(dd.direction, Od);
        return {
          ...dd,
          sign: Od,
          direction: md,
          endX: od + QO(md, Qd) * Dd,
          endY: od - QO(md, td) * Dd,
          depth: QO(md, vd)
        }
      })))).sort(((dd, Od) => Od.depth - dd.depth));
      return (0, Ed.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * od,
        height: 2 * od,
        "aria-hidden": !0,
        onPointerDown: dd => {
          var Od, md;
          dd.currentTarget.setPointerCapture(dd.pointerId);
          const Wd = dd.target,
            Fd = Wd.getAttribute("data-end");
          hd.current = {
            pointerId: dd.pointerId,
            x: dd.clientX,
            y: dd.clientY,
            travel: 0,
            side: null === Fd ? null : null !== (Od = null === (md = Nd[Number(Fd)]) || void 0 === md ? void 0 : md.direction) && void 0 !== Od ? Od : null,
            isOnMiddle: Wd.hasAttribute("data-middle")
          }
        },
        onPointerMove: dd => {
          const Od = hd.current;
          if (null === Od || Od.pointerId !== dd.pointerId) return;
          const md = dd.clientX - Od.x,
            Wd = dd.clientY - Od.y;
          Od.x = dd.clientX, Od.y = dd.clientY, Od.travel += Math.abs(md) + Math.abs(Wd), Od.travel >= Cd && Rd(md, Wd)
        },
        onPointerUp: dd => {
          const Od = hd.current;
          hd.current = null, null === Od || Od.pointerId !== dd.pointerId || Od.travel >= Cd || (null !== Od.side ? Fd(Od.side) : Od.isOnMiddle && Xd())
        },
        onPointerCancel: () => {
          hd.current = null
        },
        children: [Nd.map(((dd, Od) => {
          const md = dd.sign > 0;
          return (0, Ed.jsxs)("g", {
            children: [(0, Ed.jsx)("line", {
              x1: od,
              y1: od,
              x2: dd.endX,
              y2: dd.endY,
              stroke: dd.colour,
              strokeOpacity: md ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, Ed.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": Od,
              cx: dd.endX,
              cy: dd.endY,
              r: md ? ed : ed - 1,
              fill: dd.colour,
              fillOpacity: md ? 1 : .3,
              stroke: dd.colour,
              strokeWidth: md ? 0 : 1.5,
              children: (0, Ed.jsx)("title", {
                children: `${Kd("View from")} ${md?"+":"\u2212"}${dd.name}`
              })
            }), md && (0, Ed.jsx)("text", {
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
          }, `${md?"+":"-"}${dd.name}`)
        })), (0, Ed.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: od,
          cy: od,
          r: Id,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, Ed.jsx)("title", {
            children: Kd("View from the opposite side")
          })
        })]
      })
    }

    function fd(dd) {
      var Od, md, Wd;
      const {
        chunkGridOrigin: Fd,
        camera: Rd
      } = dd;
      if (null === Fd) return;
      const Xd = [Rd.position.x, Rd.position.y, Rd.position.z],
        Kd = [0, 2].map((dd => Math.floor((Xd[dd] + Fd[dd]) / qd.i.Qt))),
        hd = dd.chunkGridCentre;
      if (null !== hd && hd.every(((dd, Od) => dd === Kd[Od]))) return;
      const td = null === (Od = null === (md = dd.chunkGrid) || void 0 === md ? void 0 : md.isVisible) || void 0 === Od || Od;
      null === (Wd = dd.chunkGrid) || void 0 === Wd || Wd.dispose();
      const [Nd, Hd] = [0, 2].map(((dd, Od) => {
        const md = [];
        for (let Wd = Kd[Od] - rd; Wd <= Kd[Od] + rd + 1; Wd++) md.push(Wd * qd.i.Qt - Fd[dd]);
        return md
      })), yd = -Fd[1], bd = [];
      for (const vd of Hd) bd.push([new Qd.Cq(Nd[0], yd, vd), new Qd.Cq(Nd[Nd.length - 1], yd, vd)]);
      for (const vd of Nd) bd.push([new Qd.Cq(vd, yd, Hd[0]), new Qd.Cq(vd, yd, Hd[Hd.length - 1])]);
      const Td = (0, od.e)("Heatmap3DChunkGrid", {
        lines: bd
      }, dd.MH);
      Td.color = new vd.Color3(.45, .6, .78), Td.my = !1, Td.isVisible = td, dd.chunkGrid = Td, dd.chunkGridCentre = Kd, dd.needsRender = !0
    }

    function Md(dd, Od, md, Wd) {
      dd.OOd("matrix", function(dd, Od) {
        const md = new Float32Array(16 * Od);
        for (let Wd = 0; Wd < Od; Wd++) {
          const Od = 16 * Wd;
          md[Od] = 1, md[Od + 5] = 1, md[Od + 10] = 1, md[Od + 12] = dd[3 * Wd], md[Od + 13] = dd[3 * Wd + 1], md[Od + 14] = dd[3 * Wd + 2], md[Od + 15] = 1
        }
        return md
      }(Od, Wd), 16, !0), dd.OOd("color", md, 4, !0), dd.isVisible = Wd > 0
    }

    function dO(dd) {
      const {
        camera: Od,
        translucent: md
      } = dd, Wd = [Od.position.x, Od.position.y, Od.position.z], Fd = dd.translucentSortedFrom;
      if (null !== Fd && Math.hypot(Wd[0] - Fd[0], Wd[1] - Fd[1], Wd[2] - Fd[2]) < Ad) return;
      dd.translucentSortedFrom = Wd;
      const Rd = new Float64Array(md.count),
        Xd = new Uint32Array(md.count);
      for (let vd = 0; vd < md.count; vd++) {
        const dd = md.Ty[3 * vd] - Wd[0],
          Od = md.Ty[3 * vd + 1] - Wd[1],
          Fd = md.Ty[3 * vd + 2] - Wd[2];
        Rd[vd] = dd * dd + Od * Od + Fd * Fd, Xd[vd] = vd
      }
      Xd.sort(((dd, Od) => Rd[Od] - Rd[dd]));
      const Kd = new Float32Array(3 * md.count),
        hd = new Float32Array(4 * md.count);
      Xd.forEach(((dd, Od) => {
        Kd.set(md.Ty.subarray(3 * dd, 3 * dd + 3), 3 * Od), hd.set(md.colours.subarray(4 * dd, 4 * dd + 4), 4 * Od)
      })), Md(dd.translucentCells, Kd, hd, md.count), dd.needsRender = !0
    }

    function OO(dd, Od) {
      const md = (md, Wd, Fd) => new Qd.Cq(0 === md ? dd[0] : Od[0], 0 === Wd ? dd[1] : Od[1], 0 === Fd ? dd[2] : Od[2]),
        Wd = [];
      for (const Fd of [0, 1])
        for (const dd of [0, 1]) Wd.push([md(0, Fd, dd), md(1, Fd, dd)], [md(Fd, 0, dd), md(Fd, 1, dd)], [md(Fd, dd, 0), md(Fd, dd, 1)]);
      return Wd
    }

    function mO(dd) {
      return [Math.sin(dd.heading) * Math.cos(dd.pitch), -Math.sin(dd.pitch), Math.cos(dd.heading) * Math.cos(dd.pitch)]
    }

    function WO(dd) {
      return [Math.cos(dd), 0, -Math.sin(dd)]
    }

    function FO(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: Pd,
        pitch: zd
      };
      const Fd = [dd.max[0] - dd.min[0], dd.max[1] - dd.min[1], dd.max[2] - dd.min[2]],
        Rd = mO(Wd),
        Xd = WO(Wd.heading),
        Kd = tO(Rd, Xd),
        hd = Math.tan(md / 2),
        vd = hd * Od;
      let Qd = 1;
      for (const td of [-Fd[0] / 2, Fd[0] / 2])
        for (const dd of [-Fd[1] / 2, Fd[1] / 2])
          for (const Od of [-Fd[2] / 2, Fd[2] / 2]) {
            const md = [td, dd, Od],
              Wd = QO(md, Rd);
            Qd = Math.max(Qd, Math.abs(QO(md, Xd)) / vd - Wd, Math.abs(QO(md, Kd)) / hd - Wd)
          }
      return {
        position: hO([dd.min[0] + Fd[0] / 2, dd.min[1] + Fd[1] / 2, dd.min[2] + Fd[2] / 2], vO(Rd, -Qd * cd)),
        heading: Wd.heading,
        pitch: Wd.pitch
      }
    }

    function RO(dd, Od, md) {
      const Wd = KO(dd),
        Fd = KO(md),
        Rd = hO(dd.position, vO(Od, -1)),
        Xd = [0, 1, 2].reduce(((dd, Od) => hO(dd, vO(Fd[Od], QO(Rd, Wd[Od])))), [0, 0, 0]);
      return {
        position: hO(Od, Xd),
        heading: md.heading,
        pitch: md.pitch
      }
    }

    function XO(dd) {
      return vO(hO(dd.min, dd.max), .5)
    }

    function KO(dd) {
      const Od = mO(dd),
        md = WO(dd.heading);
      return [Od, md, tO(Od, md)]
    }

    function hO(dd, Od) {
      return [dd[0] + Od[0], dd[1] + Od[1], dd[2] + Od[2]]
    }

    function vO(dd, Od) {
      return [dd[0] * Od, dd[1] * Od, dd[2] * Od]
    }

    function QO(dd, Od) {
      return dd[0] * Od[0] + dd[1] * Od[1] + dd[2] * Od[2]
    }

    function tO(dd, Od) {
      return [dd[1] * Od[2] - dd[2] * Od[1], dd[2] * Od[0] - dd[0] * Od[2], dd[0] * Od[1] - dd[1] * Od[0]]
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);