export const id = 250;
export const ids = [250];
export const modules = {
  39921: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => Um
    });
    fm(6438);
    var hm = fm(59),
      Am = fm(39930),
      am = fm(40196),
      xm = fm(40309),
      wm = fm(40344),
      Dm = fm(40357),
      im = fm(37330),
      Rm = fm(37181),
      pm = fm(40505),
      Em = fm(40558),
      om = (fm(40590), fm(1235)),
      Om = fm(198),
      Ym = fm(1208),
      qm = fm(23),
      jm = fm(2743),
      Vm = fm(1454),
      Im = fm(1089),
      Km = fm(6436),
      Qm = fm(6446),
      nm = fm(4381),
      Jm = fm(1135);
    const cm = 1.2,
      zm = .2,
      Zm = .0066 * Math.PI / 180,
      km = new Set(["Escape", "KeyG"]),
      bm = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      Sm = "ArrowUp",
      em = new Set([...Object.keys(bm), Sm, "ArrowDown"]),
      Nm = 32,
      Gm = 1,
      Xm = 10,
      Pm = "F4",
      Hm = "Period",
      ym = Math.PI / 2 - .001,
      Cm = Math.PI / 6,
      rm = Math.PI / 6,
      sm = 1.08,
      lm = [{
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
      Mm = 24,
      um = 7,
      Bm = 4,
      Lm = .01,
      tm = 4;

    function Um(mm) {
      let {
        heatmap: Tm,
        scale: fm,
        fullyOpaqueFrom: Gm,
        bounds: Cm,
        fitBounds: rm,
        schematic: sm,
        controls: lm,
        onStepTime: Mm,
        onShowAllTime: um,
        onTogglePlaying: Bm,
        getReadout: tm = null
      } = mm;
      const {
        t: Um
      } = (0, Ym.A)(), {
        clientEscMenuOptions: xT
      } = (0, qm.m)(["clientEscMenuOptions"]), iT = (0, hm.useRef)(null), RT = (0, hm.useRef)(null), pT = (0, hm.useRef)(null), ET = (0, jm.d)(iT), [oT, OT] = (0, hm.useState)(!1), [YT, qT] = (0, hm.useState)(!1), [jT, VT] = (0, hm.useState)(!0), IT = (0, hm.useRef)(!1), [KT, QT] = (0, hm.useState)(!1), nT = YT || !jT && KT, [JT, cT] = (0, hm.useState)(!1), [zT, ZT] = (0, hm.useState)(!0), [kT, bT] = (0, hm.useState)(null), ST = Cm.min, [eT, NT] = (0, hm.useState)(ST);
      eT[0] === ST[0] && eT[1] === ST[1] && eT[2] === ST[2] || (NT(ST), null !== kT && bT({
        ...kT,
        position: wT(kT.position, wT(eT, DT(ST, -1)))
      }));
      const GT = (0, hm.useMemo)((() => function(mm) {
          return [mm.max[0] - mm.min[0] + 1, mm.max[1] - mm.min[1] + 1, mm.max[2] - mm.min[2] + 1]
        }(Cm)), [Cm]),
        XT = (0, hm.useMemo)((() => function(mm, Tm) {
          const fm = [],
            hm = [];
          for (const [Am, am] of Object.entries(mm.frequencies)) {
            const mm = Number(Am);
            for (const [Am, xm] of Object.entries(am)) {
              const am = Number(Am);
              for (const [Am, wm] of Object.entries(xm)) wm <= 0 || (fm.push(mm - Tm[0], am - Tm[1], Number(Am) - Tm[2]), hm.push(wm))
            }
          }
          return {
            positions: Int32Array.from(fm),
            values: Float64Array.from(hm),
            count: hm.length
          }
        }(Tm, ST)), [Tm, ST]),
        PT = cm * xT.cameraFOV / 100,
        HT = ET.height > 0 ? ET.width / ET.height : 1,
        yT = (0, hm.useMemo)((() => function(mm, Tm) {
          return {
            min: [mm.min[0] - Tm[0], mm.min[1] - Tm[1], mm.min[2] - Tm[2]],
            max: [mm.max[0] - Tm[0] + 1, mm.max[1] - Tm[1] + 1, mm.max[2] - Tm[2] + 1]
          }
        }(rm, ST)), [rm, ST]),
        CT = hT(yT, HT, PT),
        rT = null !== kT && void 0 !== kT ? kT : CT,
        sT = (0, hm.useRef)({
          fittedView: CT,
          fieldOfView: PT,
          mouseSensitivity: xT.mouseSensitivity,
          canLock: jT
        });
      sT.current = {
        fittedView: CT,
        fieldOfView: PT,
        mouseSensitivity: xT.mouseSensitivity,
        canLock: jT
      };
      const lT = (0, hm.useMemo)((() => {
          if (!nT) return null;
          const mm = (mm, fm, hm) => {
              var Am, am, xm;
              return null !== (Am = null === (am = Tm.frequencies[mm + ST[0]]) || void 0 === am || null === (xm = am[fm + ST[1]]) || void 0 === xm ? void 0 : xm[hm + ST[2]]) && void 0 !== Am ? Am : 0
            },
            hm = function(mm, Tm, fm, hm) {
              let Am = 0,
                am = 1 / 0;
              for (const pm of [0, 1, 2]) {
                if (0 === Tm[pm]) {
                  if (mm[pm] < 0 || mm[pm] > fm[pm]) return null;
                  continue
                }
                const hm = (0 - mm[pm]) / Tm[pm],
                  xm = (fm[pm] - mm[pm]) / Tm[pm];
                Am = Math.max(Am, Math.min(hm, xm)), am = Math.min(am, Math.max(hm, xm))
              }
              if (Am > am) return null;
              const xm = [0, 1, 2].map((hm => Math.min(fm[hm] - 1, Math.max(0, Math.floor(mm[hm] + Tm[hm] * Am))))),
                wm = [0, 1, 2].map((mm => Math.sign(Tm[mm]))),
                Dm = [0, 1, 2].map((fm => {
                  if (0 === wm[fm]) return 1 / 0;
                  return ((wm[fm] > 0 ? xm[fm] + 1 : xm[fm]) - mm[fm]) / Tm[fm]
                })),
                im = [0, 1, 2].map((mm => 0 === wm[mm] ? 1 / 0 : Math.abs(1 / Tm[mm])));
              let Rm = null;
              for (;;) {
                const mm = hm(xm[0], xm[1], xm[2]);
                if (mm >= 1) return xm;
                mm > 0 && (Rm = [xm[0], xm[1], xm[2]]);
                const Tm = Dm[0] < Dm[1] ? Dm[0] < Dm[2] ? 0 : 2 : Dm[1] < Dm[2] ? 1 : 2;
                if (Dm[Tm] > am) return Rm;
                if (xm[Tm] += wm[Tm], Dm[Tm] += im[Tm], xm[Tm] < 0 || xm[Tm] >= fm[Tm]) return Rm
              }
            }(rT.position, TT(rT), GT, ((Tm, hm, Am) => (0, Km.z)(mm(Tm, hm, Am), fm, Gm)));
          return null === hm ? null : {
            x: hm[0] + ST[0],
            y: hm[1] + ST[1],
            z: hm[2] + ST[2],
            value: mm(hm[0], hm[1], hm[2])
          }
        }), [nT, Tm, ST, rT, GT, fm, Gm]),
        {
          keyHandlers: MT
        } = (0, Qm.f)({
          isEnabled: nT,
          claimedKeyCodes: em,
          ZE: mm => {
            bT((Tm => function(mm, Tm) {
              const fm = [Math.sin(mm.heading), 0, Math.cos(mm.heading)],
                hm = wT(wT(DT(fm, Tm.forward), DT(fT(mm.heading), Tm.right)), [0, Tm.up, 0]);
              return {
                ...mm,
                position: wT(mm.position, hm)
              }
            }(null !== Tm && void 0 !== Tm ? Tm : sT.current.fittedView, mm)))
          },
          onZoomChange: cT
        });
      (0, hm.useEffect)((() => {
        const mm = RT.current;
        if (!mm) return;
        let Tm;
        try {
          Tm = function(mm, Tm) {
            const fm = new Am.d(mm, !0, {
                stencil: !1
              }, !0),
              hm = new am.c(fm),
              [om, Om, Ym] = Km.U;
            hm.clearColor = new im.e(om / 255, Om / 255, Ym / 255, 1);
            const qm = new xm.b("Heatmap3DCamera", Rm.WO.Zero(), hm);
            qm.fov = Tm, qm.minZ = .05;
            const jm = new wm.c("Heatmap3DLight", new Rm.WO(.4, 1, -.6), hm);
            jm.diffuse = im.Color3.White(), jm.groundColor = im.Color3.Black(), jm.specular = im.Color3.Black();
            const Vm = new Dm.StandardMaterial("Heatmap3DCellMaterial", hm);
            Vm.diffuseColor = new im.Color3(.4, .4, .4), Vm.emissiveColor = new im.Color3(.62, .62, .62), Vm.specularColor = im.Color3.Black();
            const Im = (0, pm.e)("Heatmap3DCells", {
              size: 1
            }, hm);
            Im.material = Vm, Im.xq = !1, Im.gO = !0, Im.isVisible = !1;
            const Qm = (0, pm.e)("Heatmap3DTranslucentCells", {
              size: 1
            }, hm);
            Qm.material = Vm, Qm.hasVertexAlpha = !0, Qm.xq = !1, Qm.gO = !0, Qm.isVisible = !1;
            const nm = new Dm.StandardMaterial("Heatmap3DSchematicMaterial", hm);
            nm.diffuseColor = new im.Color3(.6, .6, .6), nm.emissiveColor = new im.Color3(.4, .4, .4), nm.specularColor = im.Color3.Black();
            const Jm = (0, pm.e)("Heatmap3DSchematicBlocks", {
              size: 1
            }, hm);
            Jm.material = nm, Jm.xq = !1, Jm.gO = !0, Jm.isVisible = !1;
            const cm = (0, Em.e)("Heatmap3DTarget", {
              lines: mT([-.52, -.52, -.52], [.52, .52, .52])
            }, hm);
            return cm.color = new im.Color3(.06, .14, .23), cm.renderingGroupId = 1, cm.xq = !1, cm.isVisible = !1, {
              engine: fm,
              Aq: hm,
              camera: qm,
              cells: Im,
              translucentCells: Qm,
              translucent: {
                ci: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: Jm,
              targetOutline: cm,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: Tm,
              needsRender: !0
            }
          }(mm, sT.current.fieldOfView)
        } catch (fm) {
          return console.error("Failed to start the 3D heatmap", fm), void OT(!0)
        }
        return pT.current = Tm, Tm.engine.runRenderLoop((() => {
          const mm = Tm.camera;
          mm.fov !== Tm.targetFieldOfView && (mm.fov += (Tm.targetFieldOfView - mm.fov) * (mm.fov > Tm.targetFieldOfView ? .3 : .2), Math.abs(Tm.targetFieldOfView - mm.fov) < 5e-4 && (mm.fov = Tm.targetFieldOfView), Tm.needsRender = !0), Tm.needsRender && (Tm.Aq.render(), Tm.needsRender = !Tm.Aq.isReady() || !Tm.engine.areAllEffectsReady())
        })), () => {
          pT.current = null, Tm.engine.dispose()
        }
      }), []), (0, hm.useEffect)((() => {
        const mm = RT.current;
        if (!mm) return;
        const Tm = () => {
            IT.current = !1, qT(document.pointerLockElement === mm)
          },
          fm = () => {
            IT.current && (IT.current = !1, VT(!1))
          },
          hm = Tm => {
            const fm = !sT.current.canLock && document.activeElement === mm && 0 !== (1 & Tm.buttons);
            if (document.pointerLockElement !== mm && !fm) return;
            const hm = sT.current.mouseSensitivity * Zm;
            bT((mm => function(mm, Tm, fm) {
              const hm = 2 * Math.PI;
              return {
                ...mm,
                heading: ((mm.heading + Tm) % hm + hm) % hm,
                pitch: Math.max(-ym, Math.min(ym, mm.pitch + fm))
              }
            }(null !== mm && void 0 !== mm ? mm : sT.current.fittedView, Tm.movementX * hm, Tm.movementY * hm)))
          };
        return document.addEventListener("pointerlockchange", Tm), document.addEventListener("pointerlockerror", fm), document.addEventListener("pointermove", hm), () => {
          document.removeEventListener("pointerlockchange", Tm), document.removeEventListener("pointerlockerror", fm), document.removeEventListener("pointermove", hm), document.pointerLockElement === mm && (0, nm.c)()
        }
      }), []), (0, hm.useEffect)((() => {
        const mm = pT.current;
        null !== mm && 0 !== ET.width && 0 !== ET.height && (mm.engine.resize(), mm.needsRender = !0)
      }), [ET.width, ET.height]), (0, hm.useEffect)((() => {
        const mm = pT.current;
        null !== mm && (mm.targetFieldOfView = PT * (JT ? zm : 1))
      }), [PT, JT]), (0, hm.useEffect)((() => {
        const mm = pT.current;
        null !== mm && function(mm, Tm, fm, hm) {
          const Am = [],
            am = [],
            xm = [],
            wm = [];
          for (let Dm = 0; Dm < Tm.count; Dm++) {
            const mm = Tm.values[Dm],
              im = (0, Km.z)(mm, fm, hm);
            if (im <= 0) continue;
            const [Rm, pm, Em] = (0, Km.s)((0, Km.N)(mm, fm)), om = im >= 1;
            (om ? Am : xm).push(Tm.positions[3 * Dm] + .5, Tm.positions[3 * Dm + 1] + .5, Tm.positions[3 * Dm + 2] + .5), (om ? am : wm).push(Rm / 255, pm / 255, Em / 255, im)
          }
          Wm(mm.cells, Float32Array.from(Am), Float32Array.from(am), am.length / 4), mm.translucent = {
            ci: Float32Array.from(xm),
            colours: Float32Array.from(wm),
            count: wm.length / 4
          }, mm.translucentSortedFrom = null, Fm(mm), mm.needsRender = !0
        }(mm, XT, fm, Gm)
      }), [XT, fm, Gm]), (0, hm.useEffect)((() => {
        const mm = pT.current;
        null !== mm && function(mm, Tm) {
          mm.chunkGridOrigin = Tm, mm.chunkGridCentre = null, gm(mm)
        }(mm, Cm.min)
      }), [Cm]), (0, hm.useEffect)((() => {
        const mm = pT.current;
        null !== mm && function(mm, Tm, fm) {
          const hm = [],
            Am = [];
          if (null !== Tm) {
            const {
              positions: mm,
              colours: am,
              count: xm
            } = Tm.surface;
            for (let Tm = 0; Tm < xm; Tm++) {
              const xm = [mm[3 * Tm], mm[3 * Tm + 1], mm[3 * Tm + 2]];
              [0, 1, 2].every((mm => xm[mm] >= fm.min[mm] - Nm && xm[mm] <= fm.max[mm] + Nm)) && (hm.push(xm[0] - fm.min[0] + .5, xm[1] - fm.min[1] + .5, xm[2] - fm.min[2] + .5), Am.push(am[3 * Tm] / 255, am[3 * Tm + 1] / 255, am[3 * Tm + 2] / 255, 1))
            }
          }
          Wm(mm.schematicBlocks, Float32Array.from(hm), Float32Array.from(Am), Am.length / 4), mm.needsRender = !0
        }(mm, sm, Cm)
      }), [sm, Cm]), (0, hm.useEffect)((() => {
        const mm = pT.current;
        null !== mm && null !== mm.chunkGrid && (mm.chunkGrid.isVisible = zT, mm.needsRender = !0)
      }), [zT, Cm]), (0, hm.useEffect)((() => {
        const mm = pT.current;
        null !== mm && function(mm, Tm, fm) {
          const {
            camera: hm
          } = mm;
          hm.position.set(Tm.position[0], Tm.position[1], Tm.position[2]), hm.rotation.set(Tm.pitch, Tm.heading, 0);
          const Am = (Xm + 1) * Om.f.MO * Math.sqrt(3);
          hm.maxZ = Math.max(Am, Math.hypot(...wT(Tm.position, DT(aT({
            min: [0, 0, 0],
            max: fm
          }), -1))) + 2 * Math.hypot(...fm)), gm(mm), Fm(mm), mm.needsRender = !0
        }(mm, rT, GT)
      }), [rT, GT]), (0, hm.useEffect)((() => {
        const mm = pT.current;
        null !== mm && (mm.targetOutline.isVisible = null !== lT, null !== lT && mm.targetOutline.position.set(lT.x - ST[0] + .5, lT.y - ST[1] + .5, lT.z - ST[2] + .5), mm.needsRender = !0)
      }), [lT, ST]);
      return (0, Jm.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: iT,
        children: [(0, Jm.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: RT,
          style: {
            width: `${ET.width}px`,
            height: `${ET.height}px`
          },
          tabIndex: 0,
          "aria-label": Um("3D heatmap"),
          onClick: () => {
            const mm = RT.current;
            if (null === mm) return;
            if (mm.focus({
                preventScroll: !0
              }), YT || !jT) return;
            const Tm = mm.requestPointerLock();
            Tm instanceof Promise ? Tm.catch((mm => {
              mm instanceof DOMException && ("WrongDocumentError" === mm.name || "NotSupportedError" === mm.name) && VT(!1)
            })) : IT.current = !0
          },
          ...MT,
          onKeyDown: mm => {
            if (nT && km.has(mm.code)) return mm.preventDefault(), void(() => {
              const mm = RT.current;
              null !== mm && document.pointerLockElement === mm ? (0, nm.c)() : null === mm || void 0 === mm || mm.blur()
            })();
            const Tm = bm[mm.code];
            return nT && void 0 !== Tm ? (mm.preventDefault(), void Mm(Tm)) : nT && (0, Qm.d)("replayPlayPause", mm.code) && !(0, Qm.d)("Zoom", mm.code) ? (mm.preventDefault(), void(mm.repeat || Bm())) : nT && mm.code === Sm ? (mm.preventDefault(), void um()) : nT && mm.code === Hm ? (mm.preventDefault(), void bT(null)) : nT && mm.code === Pm ? (mm.preventDefault(), void ZT((mm => !mm))) : void MT.onKeyDown(mm)
          },
          onFocus: () => {
            QT(!0)
          },
          onBlur: () => {
            QT(!1), MT.onBlur()
          }
        }), oT && (0, Jm.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: Um("3D view isn't available in this browser.")
        }), nT && (0, Jm.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, Jm.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: rT.position.map(((mm, Tm) => (mm + ST[Tm]).toFixed(2))).join(" ")
        }), zT && (0, Jm.jsx)(dm, {
          heading: rT.heading,
          pitch: rT.pitch,
          onViewFrom: mm => {
            const Tm = DT(mm, -1),
              fm = 0 === Tm[1] ? {
                heading: Math.atan2(Tm[0], Tm[2]),
                pitch: 0
              } : {
                heading: rT.heading,
                pitch: Tm[1] < 0 ? ym : -ym
              };
            bT(hT(yT, HT, PT, fm))
          },
          onTurn: (mm, Tm) => {
            bT((fm => function(mm, Tm, fm, hm) {
              return AT(mm, Tm, {
                heading: mm.heading + fm * Lm,
                pitch: Math.max(-ym, Math.min(ym, mm.pitch + hm * Lm))
              })
            }(null !== fm && void 0 !== fm ? fm : sT.current.fittedView, aT(yT), mm, Tm)))
          },
          onFlip: () => {
            bT((mm => function(mm, Tm) {
              return AT(mm, Tm, {
                heading: mm.heading + Math.PI,
                pitch: -mm.pitch
              })
            }(null !== mm && void 0 !== mm ? mm : sT.current.fittedView, aT(yT))))
          }
        }), null !== lT && (0, Jm.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === tm ? Um("studio:heatmapBlockReadout", {
            x: lT.x,
            y: lT.y,
            z: lT.z,
            count: (0, om.J)(lT.value)
          }) : tm(lT.x, lT.y, lT.z, lT.value)
        }), (0, Jm.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [lm, (0, Jm.jsx)(Vm.V, {
            active: null === kT,
            onClick: () => {
              bT(null)
            },
            children: (0, Jm.jsx)(Im.c, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function dm(mm) {
      let {
        heading: Tm,
        pitch: fm,
        onViewFrom: Am,
        onTurn: am,
        onFlip: xm
      } = mm;
      const {
        t: wm
      } = (0, Ym.A)(), Dm = (0, hm.useRef)(null), im = TT({
        heading: Tm,
        pitch: fm
      }), Rm = fT(Tm), pm = RT(im, Rm), Em = Mm + um + 2, om = lm.flatMap((mm => [1, -1].map((Tm => {
        const fm = DT(mm.direction, Tm);
        return {
          ...mm,
          sign: Tm,
          direction: fm,
          endX: Em + iT(fm, Rm) * Mm,
          endY: Em - iT(fm, pm) * Mm,
          depth: iT(fm, im)
        }
      })))).sort(((mm, Tm) => Tm.depth - mm.depth));
      return (0, Jm.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * Em,
        height: 2 * Em,
        "aria-hidden": !0,
        onPointerDown: mm => {
          var Tm, fm;
          mm.currentTarget.setPointerCapture(mm.pointerId);
          const hm = mm.target,
            Am = hm.getAttribute("data-end");
          Dm.current = {
            pointerId: mm.pointerId,
            x: mm.clientX,
            y: mm.clientY,
            travel: 0,
            side: null === Am ? null : null !== (Tm = null === (fm = om[Number(Am)]) || void 0 === fm ? void 0 : fm.direction) && void 0 !== Tm ? Tm : null,
            isOnMiddle: hm.hasAttribute("data-middle")
          }
        },
        onPointerMove: mm => {
          const Tm = Dm.current;
          if (null === Tm || Tm.pointerId !== mm.pointerId) return;
          const fm = mm.clientX - Tm.x,
            hm = mm.clientY - Tm.y;
          Tm.x = mm.clientX, Tm.y = mm.clientY, Tm.travel += Math.abs(fm) + Math.abs(hm), Tm.travel >= tm && am(fm, hm)
        },
        onPointerUp: mm => {
          const Tm = Dm.current;
          Dm.current = null, null === Tm || Tm.pointerId !== mm.pointerId || Tm.travel >= tm || (null !== Tm.side ? Am(Tm.side) : Tm.isOnMiddle && xm())
        },
        onPointerCancel: () => {
          Dm.current = null
        },
        children: [om.map(((mm, Tm) => {
          const fm = mm.sign > 0;
          return (0, Jm.jsxs)("g", {
            children: [(0, Jm.jsx)("line", {
              x1: Em,
              y1: Em,
              x2: mm.endX,
              y2: mm.endY,
              stroke: mm.colour,
              strokeOpacity: fm ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, Jm.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": Tm,
              cx: mm.endX,
              cy: mm.endY,
              r: fm ? um : um - 1,
              fill: mm.colour,
              fillOpacity: fm ? 1 : .3,
              stroke: mm.colour,
              strokeWidth: fm ? 0 : 1.5,
              children: (0, Jm.jsx)("title", {
                children: `${wm("View from")} ${fm?"+":"\u2212"}${mm.name}`
              })
            }), fm && (0, Jm.jsx)("text", {
              pointerEvents: "none",
              x: mm.endX,
              y: mm.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: mm.name
            })]
          }, `${fm?"+":"-"}${mm.name}`)
        })), (0, Jm.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: Em,
          cy: Em,
          r: Bm,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, Jm.jsx)("title", {
            children: wm("View from the opposite side")
          })
        })]
      })
    }

    function gm(mm) {
      var Tm, fm, hm;
      const {
        chunkGridOrigin: Am,
        camera: am
      } = mm;
      if (null === Am) return;
      const xm = [am.position.x, am.position.y, am.position.z],
        wm = [0, 2].map((mm => Math.floor((xm[mm] + Am[mm]) / Om.f.MO))),
        Dm = mm.chunkGridCentre;
      if (null !== Dm && Dm.every(((mm, Tm) => mm === wm[Tm]))) return;
      const pm = null === (Tm = null === (fm = mm.chunkGrid) || void 0 === fm ? void 0 : fm.isVisible) || void 0 === Tm || Tm;
      null === (hm = mm.chunkGrid) || void 0 === hm || hm.dispose();
      const [om, Ym] = [0, 2].map(((mm, Tm) => {
        const fm = [];
        for (let hm = wm[Tm] - Xm; hm <= wm[Tm] + Xm + 1; hm++) fm.push(hm * Om.f.MO - Am[mm]);
        return fm
      })), qm = -Am[1], jm = [];
      for (const im of Ym) jm.push([new Rm.WO(om[0], qm, im), new Rm.WO(om[om.length - 1], qm, im)]);
      for (const im of om) jm.push([new Rm.WO(im, qm, Ym[0]), new Rm.WO(im, qm, Ym[Ym.length - 1])]);
      const Vm = (0, Em.e)("Heatmap3DChunkGrid", {
        lines: jm
      }, mm.Aq);
      Vm.color = new im.Color3(.45, .6, .78), Vm.xq = !1, Vm.isVisible = pm, mm.chunkGrid = Vm, mm.chunkGridCentre = wm, mm.needsRender = !0
    }

    function Wm(mm, Tm, fm, hm) {
      mm.I3("matrix", function(mm, Tm) {
        const fm = new Float32Array(16 * Tm);
        for (let hm = 0; hm < Tm; hm++) {
          const Tm = 16 * hm;
          fm[Tm] = 1, fm[Tm + 5] = 1, fm[Tm + 10] = 1, fm[Tm + 12] = mm[3 * hm], fm[Tm + 13] = mm[3 * hm + 1], fm[Tm + 14] = mm[3 * hm + 2], fm[Tm + 15] = 1
        }
        return fm
      }(Tm, hm), 16, !0), mm.I3("color", fm, 4, !0), mm.isVisible = hm > 0
    }

    function Fm(mm) {
      const {
        camera: Tm,
        translucent: fm
      } = mm, hm = [Tm.position.x, Tm.position.y, Tm.position.z], Am = mm.translucentSortedFrom;
      if (null !== Am && Math.hypot(hm[0] - Am[0], hm[1] - Am[1], hm[2] - Am[2]) < Gm) return;
      mm.translucentSortedFrom = hm;
      const am = new Float64Array(fm.count),
        xm = new Uint32Array(fm.count);
      for (let im = 0; im < fm.count; im++) {
        const mm = fm.ci[3 * im] - hm[0],
          Tm = fm.ci[3 * im + 1] - hm[1],
          Am = fm.ci[3 * im + 2] - hm[2];
        am[im] = mm * mm + Tm * Tm + Am * Am, xm[im] = im
      }
      xm.sort(((mm, Tm) => am[Tm] - am[mm]));
      const wm = new Float32Array(3 * fm.count),
        Dm = new Float32Array(4 * fm.count);
      xm.forEach(((mm, Tm) => {
        wm.set(fm.ci.subarray(3 * mm, 3 * mm + 3), 3 * Tm), Dm.set(fm.colours.subarray(4 * mm, 4 * mm + 4), 4 * Tm)
      })), Wm(mm.translucentCells, wm, Dm, fm.count), mm.needsRender = !0
    }

    function mT(mm, Tm) {
      const fm = (fm, hm, Am) => new Rm.WO(0 === fm ? mm[0] : Tm[0], 0 === hm ? mm[1] : Tm[1], 0 === Am ? mm[2] : Tm[2]),
        hm = [];
      for (const Am of [0, 1])
        for (const mm of [0, 1]) hm.push([fm(0, Am, mm), fm(1, Am, mm)], [fm(Am, 0, mm), fm(Am, 1, mm)], [fm(Am, mm, 0), fm(Am, mm, 1)]);
      return hm
    }

    function TT(mm) {
      return [Math.sin(mm.heading) * Math.cos(mm.pitch), -Math.sin(mm.pitch), Math.cos(mm.heading) * Math.cos(mm.pitch)]
    }

    function fT(mm) {
      return [Math.cos(mm), 0, -Math.sin(mm)]
    }

    function hT(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: Cm,
        pitch: rm
      };
      const Am = [mm.max[0] - mm.min[0], mm.max[1] - mm.min[1], mm.max[2] - mm.min[2]],
        am = TT(hm),
        xm = fT(hm.heading),
        wm = RT(am, xm),
        Dm = Math.tan(fm / 2),
        im = Dm * Tm;
      let Rm = 1;
      for (const pm of [-Am[0] / 2, Am[0] / 2])
        for (const mm of [-Am[1] / 2, Am[1] / 2])
          for (const Tm of [-Am[2] / 2, Am[2] / 2]) {
            const fm = [pm, mm, Tm],
              hm = iT(fm, am);
            Rm = Math.max(Rm, Math.abs(iT(fm, xm)) / im - hm, Math.abs(iT(fm, wm)) / Dm - hm)
          }
      return {
        position: wT([mm.min[0] + Am[0] / 2, mm.min[1] + Am[1] / 2, mm.min[2] + Am[2] / 2], DT(am, -Rm * sm)),
        heading: hm.heading,
        pitch: hm.pitch
      }
    }

    function AT(mm, Tm, fm) {
      const hm = xT(mm),
        Am = xT(fm),
        am = wT(mm.position, DT(Tm, -1)),
        xm = [0, 1, 2].reduce(((mm, Tm) => wT(mm, DT(Am[Tm], iT(am, hm[Tm])))), [0, 0, 0]);
      return {
        position: wT(Tm, xm),
        heading: fm.heading,
        pitch: fm.pitch
      }
    }

    function aT(mm) {
      return DT(wT(mm.min, mm.max), .5)
    }

    function xT(mm) {
      const Tm = TT(mm),
        fm = fT(mm.heading);
      return [Tm, fm, RT(Tm, fm)]
    }

    function wT(mm, Tm) {
      return [mm[0] + Tm[0], mm[1] + Tm[1], mm[2] + Tm[2]]
    }

    function DT(mm, Tm) {
      return [mm[0] * Tm, mm[1] * Tm, mm[2] * Tm]
    }

    function iT(mm, Tm) {
      return mm[0] * Tm[0] + mm[1] * Tm[1] + mm[2] * Tm[2]
    }

    function RT(mm, Tm) {
      return [mm[1] * Tm[2] - mm[2] * Tm[1], mm[2] * Tm[0] - mm[0] * Tm[2], mm[0] * Tm[1] - mm[1] * Tm[0]]
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);