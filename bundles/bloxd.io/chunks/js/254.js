export const id = 254;
export const ids = [254];
export const modules = {
  40085: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => Hu
    });
    ju(6664);
    var su = ju(58),
      Uu = ju(40092),
      Zu = ju(40346),
      Xu = ju(40456),
      lu = ju(40503),
      qu = ju(40514),
      fu = ju(37671),
      Cu = ju(37488),
      bu = ju(40659),
      cu = ju(40720),
      Nu = (ju(40742), ju(1278)),
      Ou = ju(202),
      Yu = ju(1244),
      hu = ju(22),
      Du = ju(2876),
      gu = ju(1506),
      Mu = ju(1116),
      eu = ju(6656),
      Gu = ju(6667),
      pu = ju(4626),
      wu = ju(1154);
    const Ju = 1.2,
      du = .2,
      au = .0066 * Math.PI / 180,
      Pu = new Set(["Escape", "KeyG"]),
      ou = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      ku = "ArrowUp",
      mu = new Set([...Object.keys(ou), ku, "ArrowDown"]),
      vu = 32,
      Ku = 1,
      Vu = 10,
      ru = "F4",
      Qu = "Period",
      iu = Math.PI / 2 - .001,
      Wu = Math.PI / 6,
      Su = Math.PI / 6,
      Iu = 1.08,
      Fu = [{
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
      Bu = 24,
      Lu = 7,
      tu = 4,
      xu = .01,
      Tu = 4;

    function Hu(uu) {
      let {
        heatmap: Eu,
        scale: ju,
        fullyOpaqueFrom: Ku,
        bounds: Wu,
        fitBounds: Su,
        schematic: Iu,
        controls: Fu,
        onStepTime: Bu,
        onShowAllTime: Lu,
        onTogglePlaying: tu,
        getReadout: Tu = null
      } = uu;
      const {
        t: Hu
      } = (0, Yu.A)(), {
        clientEscMenuOptions: ZE
      } = (0, hu.l)(["clientEscMenuOptions"]), qE = (0, su.useRef)(null), fE = (0, su.useRef)(null), CE = (0, su.useRef)(null), bE = (0, Du.d)(qE), [cE, NE] = (0, su.useState)(!1), [OE, YE] = (0, su.useState)(!1), [hE, DE] = (0, su.useState)(!0), gE = (0, su.useRef)(!1), [ME, eE] = (0, su.useState)(!1), GE = OE || !hE && ME, [pE, wE] = (0, su.useState)(!1), [JE, dE] = (0, su.useState)(!0), [aE, PE] = (0, su.useState)(null), oE = Wu.min, [kE, mE] = (0, su.useState)(oE);
      kE[0] === oE[0] && kE[1] === oE[1] && kE[2] === oE[2] || (mE(oE), null !== aE && PE({
        ...aE,
        position: XE(aE.position, XE(kE, lE(oE, -1)))
      }));
      const vE = (0, su.useMemo)((() => function(uu) {
          return [uu.max[0] - uu.min[0] + 1, uu.max[1] - uu.min[1] + 1, uu.max[2] - uu.min[2] + 1]
        }(Wu)), [Wu]),
        KE = (0, su.useMemo)((() => function(uu, Eu) {
          const ju = [],
            su = [];
          for (const [Uu, Zu] of Object.entries(uu.frequencies)) {
            const uu = Number(Uu);
            for (const [Uu, Xu] of Object.entries(Zu)) {
              const Zu = Number(Uu);
              for (const [Uu, lu] of Object.entries(Xu)) lu <= 0 || (ju.push(uu - Eu[0], Zu - Eu[1], Number(Uu) - Eu[2]), su.push(lu))
            }
          }
          return {
            positions: Int32Array.from(ju),
            values: Float64Array.from(su),
            count: su.length
          }
        }(Eu, oE)), [Eu, oE]),
        VE = Ju * ZE.cameraFOV / 100,
        rE = bE.height > 0 ? bE.width / bE.height : 1,
        QE = (0, su.useMemo)((() => function(uu, Eu) {
          return {
            min: [uu.min[0] - Eu[0], uu.min[1] - Eu[1], uu.min[2] - Eu[2]],
            max: [uu.max[0] - Eu[0] + 1, uu.max[1] - Eu[1] + 1, uu.max[2] - Eu[2] + 1]
          }
        }(Su, oE)), [Su, oE]),
        iE = jE(QE, rE, VE),
        WE = null !== aE && void 0 !== aE ? aE : iE,
        SE = (0, su.useRef)({
          fittedView: iE,
          fieldOfView: VE,
          mouseSensitivity: ZE.mouseSensitivity,
          canLock: hE
        });
      SE.current = {
        fittedView: iE,
        fieldOfView: VE,
        mouseSensitivity: ZE.mouseSensitivity,
        canLock: hE
      };
      const IE = (0, su.useMemo)((() => {
          if (!GE) return null;
          const uu = (uu, ju, su) => {
              var Uu, Zu, Xu;
              return null !== (Uu = null === (Zu = Eu.frequencies[uu + oE[0]]) || void 0 === Zu || null === (Xu = Zu[ju + oE[1]]) || void 0 === Xu ? void 0 : Xu[su + oE[2]]) && void 0 !== Uu ? Uu : 0
            },
            su = function(uu, Eu, ju, su) {
              let Uu = 0,
                Zu = 1 / 0;
              for (const bu of [0, 1, 2]) {
                if (0 === Eu[bu]) {
                  if (uu[bu] < 0 || uu[bu] > ju[bu]) return null;
                  continue
                }
                const su = (0 - uu[bu]) / Eu[bu],
                  Xu = (ju[bu] - uu[bu]) / Eu[bu];
                Uu = Math.max(Uu, Math.min(su, Xu)), Zu = Math.min(Zu, Math.max(su, Xu))
              }
              if (Uu > Zu) return null;
              const Xu = [0, 1, 2].map((su => Math.min(ju[su] - 1, Math.max(0, Math.floor(uu[su] + Eu[su] * Uu))))),
                lu = [0, 1, 2].map((uu => Math.sign(Eu[uu]))),
                qu = [0, 1, 2].map((ju => {
                  if (0 === lu[ju]) return 1 / 0;
                  return ((lu[ju] > 0 ? Xu[ju] + 1 : Xu[ju]) - uu[ju]) / Eu[ju]
                })),
                fu = [0, 1, 2].map((uu => 0 === lu[uu] ? 1 / 0 : Math.abs(1 / Eu[uu])));
              let Cu = null;
              for (;;) {
                const uu = su(Xu[0], Xu[1], Xu[2]);
                if (uu >= 1) return Xu;
                uu > 0 && (Cu = [Xu[0], Xu[1], Xu[2]]);
                const Eu = qu[0] < qu[1] ? qu[0] < qu[2] ? 0 : 2 : qu[1] < qu[2] ? 1 : 2;
                if (qu[Eu] > Zu) return Cu;
                if (Xu[Eu] += lu[Eu], qu[Eu] += fu[Eu], Xu[Eu] < 0 || Xu[Eu] >= ju[Eu]) return Cu
              }
            }(WE.position, uE(WE), vE, ((Eu, su, Uu) => (0, eu.A)(uu(Eu, su, Uu), ju, Ku)));
          return null === su ? null : {
            x: su[0] + oE[0],
            y: su[1] + oE[1],
            z: su[2] + oE[2],
            value: uu(su[0], su[1], su[2])
          }
        }), [GE, Eu, oE, WE, vE, ju, Ku]),
        {
          keyHandlers: FE
        } = (0, Gu.f)({
          isEnabled: GE,
          claimedKeyCodes: mu,
          bc: uu => {
            PE((Eu => function(uu, Eu) {
              const ju = [Math.sin(uu.heading), 0, Math.cos(uu.heading)],
                su = XE(XE(lE(ju, Eu.forward), lE(EE(uu.heading), Eu.right)), [0, Eu.up, 0]);
              return {
                ...uu,
                position: XE(uu.position, su)
              }
            }(null !== Eu && void 0 !== Eu ? Eu : SE.current.fittedView, uu)))
          },
          onZoomChange: wE
        });
      (0, su.useEffect)((() => {
        const uu = fE.current;
        if (!uu) return;
        let Eu;
        try {
          Eu = function(uu, Eu) {
            const ju = new Uu.c(uu, !0, {
                stencil: !1
              }, !0),
              su = new Zu.b(ju),
              [Nu, Ou, Yu] = eu.Q;
            su.clearColor = new fu.b(Nu / 255, Ou / 255, Yu / 255, 1);
            const hu = new Xu.d("Heatmap3DCamera", Cu.dO.Zero(), su);
            hu.fov = Eu, hu.minZ = .05;
            const Du = new lu.c("Heatmap3DLight", new Cu.dO(.4, 1, -.6), su);
            Du.diffuse = fu.Color3.White(), Du.groundColor = fu.Color3.Black(), Du.specular = fu.Color3.Black();
            const gu = new qu.StandardMaterial("Heatmap3DCellMaterial", su);
            gu.diffuseColor = new fu.Color3(.4, .4, .4), gu.emissiveColor = new fu.Color3(.62, .62, .62), gu.specularColor = fu.Color3.Black();
            const Mu = (0, bu.c)("Heatmap3DCells", {
              size: 1
            }, su);
            Mu.material = gu, Mu.VY = !1, Mu.JO = !0, Mu.isVisible = !1;
            const Gu = (0, bu.c)("Heatmap3DTranslucentCells", {
              size: 1
            }, su);
            Gu.material = gu, Gu.hasVertexAlpha = !0, Gu.VY = !1, Gu.JO = !0, Gu.isVisible = !1;
            const pu = new qu.StandardMaterial("Heatmap3DSchematicMaterial", su);
            pu.diffuseColor = new fu.Color3(.6, .6, .6), pu.emissiveColor = new fu.Color3(.4, .4, .4), pu.specularColor = fu.Color3.Black();
            const wu = (0, bu.c)("Heatmap3DSchematicBlocks", {
              size: 1
            }, su);
            wu.material = pu, wu.VY = !1, wu.JO = !0, wu.isVisible = !1;
            const Ju = (0, cu.e)("Heatmap3DTarget", {
              lines: Ru([-.52, -.52, -.52], [.52, .52, .52])
            }, su);
            return Ju.color = new fu.Color3(.06, .14, .23), Ju.renderingGroupId = 1, Ju.VY = !1, Ju.isVisible = !1, {
              engine: ju,
              vY: su,
              camera: hu,
              cells: Mu,
              translucentCells: Gu,
              translucent: {
                wb: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: wu,
              targetOutline: Ju,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: Eu,
              needsRender: !0
            }
          }(uu, SE.current.fieldOfView)
        } catch (ju) {
          return console.error("Failed to start the 3D heatmap", ju), void NE(!0)
        }
        return CE.current = Eu, Eu.engine.runRenderLoop((() => {
          const uu = Eu.camera;
          uu.fov !== Eu.targetFieldOfView && (uu.fov += (Eu.targetFieldOfView - uu.fov) * (uu.fov > Eu.targetFieldOfView ? .3 : .2), Math.abs(Eu.targetFieldOfView - uu.fov) < 5e-4 && (uu.fov = Eu.targetFieldOfView), Eu.needsRender = !0), Eu.needsRender && (Eu.vY.render(), Eu.needsRender = !Eu.vY.isReady() || !Eu.engine.areAllEffectsReady())
        })), () => {
          CE.current = null, Eu.engine.dispose()
        }
      }), []), (0, su.useEffect)((() => {
        const uu = fE.current;
        if (!uu) return;
        const Eu = () => {
            gE.current = !1, YE(document.pointerLockElement === uu)
          },
          ju = () => {
            gE.current && (gE.current = !1, DE(!1))
          },
          su = Eu => {
            const ju = !SE.current.canLock && document.activeElement === uu && 0 !== (1 & Eu.buttons);
            if (document.pointerLockElement !== uu && !ju) return;
            const su = SE.current.mouseSensitivity * au;
            PE((uu => function(uu, Eu, ju) {
              const su = 2 * Math.PI;
              return {
                ...uu,
                heading: ((uu.heading + Eu) % su + su) % su,
                pitch: Math.max(-iu, Math.min(iu, uu.pitch + ju))
              }
            }(null !== uu && void 0 !== uu ? uu : SE.current.fittedView, Eu.movementX * su, Eu.movementY * su)))
          };
        return document.addEventListener("pointerlockchange", Eu), document.addEventListener("pointerlockerror", ju), document.addEventListener("pointermove", su), () => {
          document.removeEventListener("pointerlockchange", Eu), document.removeEventListener("pointerlockerror", ju), document.removeEventListener("pointermove", su), document.pointerLockElement === uu && (0, pu.d)()
        }
      }), []), (0, su.useEffect)((() => {
        const uu = CE.current;
        null !== uu && 0 !== bE.width && 0 !== bE.height && (uu.engine.resize(), uu.needsRender = !0)
      }), [bE.width, bE.height]), (0, su.useEffect)((() => {
        const uu = CE.current;
        null !== uu && (uu.targetFieldOfView = VE * (pE ? du : 1))
      }), [VE, pE]), (0, su.useEffect)((() => {
        const uu = CE.current;
        null !== uu && function(uu, Eu, ju, su) {
          const Uu = [],
            Zu = [],
            Xu = [],
            lu = [];
          for (let qu = 0; qu < Eu.count; qu++) {
            const uu = Eu.values[qu],
              fu = (0, eu.A)(uu, ju, su);
            if (fu <= 0) continue;
            const [Cu, bu, cu] = (0, eu.s)((0, eu.J)(uu, ju)), Nu = fu >= 1;
            (Nu ? Uu : Xu).push(Eu.positions[3 * qu] + .5, Eu.positions[3 * qu + 1] + .5, Eu.positions[3 * qu + 2] + .5), (Nu ? Zu : lu).push(Cu / 255, bu / 255, cu / 255, fu)
          }
          yu(uu.cells, Float32Array.from(Uu), Float32Array.from(Zu), Zu.length / 4), uu.translucent = {
            wb: Float32Array.from(Xu),
            colours: Float32Array.from(lu),
            count: lu.length / 4
          }, uu.translucentSortedFrom = null, zu(uu), uu.needsRender = !0
        }(uu, KE, ju, Ku)
      }), [KE, ju, Ku]), (0, su.useEffect)((() => {
        const uu = CE.current;
        null !== uu && function(uu, Eu) {
          uu.chunkGridOrigin = Eu, uu.chunkGridCentre = null, nu(uu)
        }(uu, Wu.min)
      }), [Wu]), (0, su.useEffect)((() => {
        const uu = CE.current;
        null !== uu && function(uu, Eu, ju) {
          const su = [],
            Uu = [];
          if (null !== Eu) {
            const {
              positions: uu,
              colours: Zu,
              count: Xu
            } = Eu.surface;
            for (let Eu = 0; Eu < Xu; Eu++) {
              const Xu = [uu[3 * Eu], uu[3 * Eu + 1], uu[3 * Eu + 2]];
              [0, 1, 2].every((uu => Xu[uu] >= ju.min[uu] - vu && Xu[uu] <= ju.max[uu] + vu)) && (su.push(Xu[0] - ju.min[0] + .5, Xu[1] - ju.min[1] + .5, Xu[2] - ju.min[2] + .5), Uu.push(Zu[3 * Eu] / 255, Zu[3 * Eu + 1] / 255, Zu[3 * Eu + 2] / 255, 1))
            }
          }
          yu(uu.schematicBlocks, Float32Array.from(su), Float32Array.from(Uu), Uu.length / 4), uu.needsRender = !0
        }(uu, Iu, Wu)
      }), [Iu, Wu]), (0, su.useEffect)((() => {
        const uu = CE.current;
        null !== uu && null !== uu.chunkGrid && (uu.chunkGrid.isVisible = JE, uu.needsRender = !0)
      }), [JE, Wu]), (0, su.useEffect)((() => {
        const uu = CE.current;
        null !== uu && function(uu, Eu, ju) {
          const {
            camera: su
          } = uu;
          su.position.set(Eu.position[0], Eu.position[1], Eu.position[2]), su.rotation.set(Eu.pitch, Eu.heading, 0);
          const Uu = (Vu + 1) * Ou.e.hO * Math.sqrt(3);
          su.maxZ = Math.max(Uu, Math.hypot(...XE(Eu.position, lE(UE({
            min: [0, 0, 0],
            max: ju
          }), -1))) + 2 * Math.hypot(...ju)), nu(uu), zu(uu), uu.needsRender = !0
        }(uu, WE, vE)
      }), [WE, vE]), (0, su.useEffect)((() => {
        const uu = CE.current;
        null !== uu && (uu.targetOutline.isVisible = null !== IE, null !== IE && uu.targetOutline.position.set(IE.x - oE[0] + .5, IE.y - oE[1] + .5, IE.z - oE[2] + .5), uu.needsRender = !0)
      }), [IE, oE]);
      return (0, wu.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: qE,
        children: [(0, wu.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: fE,
          style: {
            width: `${bE.width}px`,
            height: `${bE.height}px`
          },
          tabIndex: 0,
          "aria-label": Hu("3D heatmap"),
          onClick: () => {
            const uu = fE.current;
            if (null === uu) return;
            if (uu.focus({
                preventScroll: !0
              }), OE || !hE) return;
            const Eu = uu.requestPointerLock();
            Eu instanceof Promise ? Eu.catch((uu => {
              uu instanceof DOMException && ("WrongDocumentError" === uu.name || "NotSupportedError" === uu.name) && DE(!1)
            })) : gE.current = !0
          },
          ...FE,
          onKeyDown: uu => {
            if (GE && Pu.has(uu.code)) return uu.preventDefault(), void(() => {
              const uu = fE.current;
              null !== uu && document.pointerLockElement === uu ? (0, pu.d)() : null === uu || void 0 === uu || uu.blur()
            })();
            const Eu = ou[uu.code];
            return GE && void 0 !== Eu ? (uu.preventDefault(), void Bu(Eu)) : GE && (0, Gu.b)("replayPlayPause", uu.code) && !(0, Gu.b)("Zoom", uu.code) ? (uu.preventDefault(), void(uu.repeat || tu())) : GE && uu.code === ku ? (uu.preventDefault(), void Lu()) : GE && uu.code === Qu ? (uu.preventDefault(), void PE(null)) : GE && uu.code === ru ? (uu.preventDefault(), void dE((uu => !uu))) : void FE.onKeyDown(uu)
          },
          onFocus: () => {
            eE(!0)
          },
          onBlur: () => {
            eE(!1), FE.onBlur()
          }
        }), cE && (0, wu.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: Hu("3D view isn't available in this browser.")
        }), GE && (0, wu.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, wu.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: WE.position.map(((uu, Eu) => (uu + oE[Eu]).toFixed(2))).join(" ")
        }), JE && (0, wu.jsx)(Au, {
          heading: WE.heading,
          pitch: WE.pitch,
          onViewFrom: uu => {
            const Eu = lE(uu, -1),
              ju = 0 === Eu[1] ? {
                heading: Math.atan2(Eu[0], Eu[2]),
                pitch: 0
              } : {
                heading: WE.heading,
                pitch: Eu[1] < 0 ? iu : -iu
              };
            PE(jE(QE, rE, VE, ju))
          },
          onTurn: (uu, Eu) => {
            PE((ju => function(uu, Eu, ju, su) {
              return sE(uu, Eu, {
                heading: uu.heading + ju * xu,
                pitch: Math.max(-iu, Math.min(iu, uu.pitch + su * xu))
              })
            }(null !== ju && void 0 !== ju ? ju : SE.current.fittedView, UE(QE), uu, Eu)))
          },
          onFlip: () => {
            PE((uu => function(uu, Eu) {
              return sE(uu, Eu, {
                heading: uu.heading + Math.PI,
                pitch: -uu.pitch
              })
            }(null !== uu && void 0 !== uu ? uu : SE.current.fittedView, UE(QE))))
          }
        }), null !== IE && (0, wu.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === Tu ? Hu("studio:heatmapBlockReadout", {
            x: IE.x,
            y: IE.y,
            z: IE.z,
            count: (0, Nu.S)(IE.value)
          }) : Tu(IE.x, IE.y, IE.z, IE.value)
        }), (0, wu.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [Fu, (0, wu.jsx)(gu.$, {
            active: null === aE,
            onClick: () => {
              PE(null)
            },
            children: (0, wu.jsx)(Mu.e, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function Au(uu) {
      let {
        heading: Eu,
        pitch: ju,
        onViewFrom: Uu,
        onTurn: Zu,
        onFlip: Xu
      } = uu;
      const {
        t: lu
      } = (0, Yu.A)(), qu = (0, su.useRef)(null), fu = uE({
        heading: Eu,
        pitch: ju
      }), Cu = EE(Eu), bu = fE(fu, Cu), cu = Bu + Lu + 2, Nu = Fu.flatMap((uu => [1, -1].map((Eu => {
        const ju = lE(uu.direction, Eu);
        return {
          ...uu,
          sign: Eu,
          direction: ju,
          endX: cu + qE(ju, Cu) * Bu,
          endY: cu - qE(ju, bu) * Bu,
          depth: qE(ju, fu)
        }
      })))).sort(((uu, Eu) => Eu.depth - uu.depth));
      return (0, wu.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * cu,
        height: 2 * cu,
        "aria-hidden": !0,
        onPointerDown: uu => {
          var Eu, ju;
          uu.currentTarget.setPointerCapture(uu.pointerId);
          const su = uu.target,
            Uu = su.getAttribute("data-end");
          qu.current = {
            pointerId: uu.pointerId,
            x: uu.clientX,
            y: uu.clientY,
            travel: 0,
            side: null === Uu ? null : null !== (Eu = null === (ju = Nu[Number(Uu)]) || void 0 === ju ? void 0 : ju.direction) && void 0 !== Eu ? Eu : null,
            isOnMiddle: su.hasAttribute("data-middle")
          }
        },
        onPointerMove: uu => {
          const Eu = qu.current;
          if (null === Eu || Eu.pointerId !== uu.pointerId) return;
          const ju = uu.clientX - Eu.x,
            su = uu.clientY - Eu.y;
          Eu.x = uu.clientX, Eu.y = uu.clientY, Eu.travel += Math.abs(ju) + Math.abs(su), Eu.travel >= Tu && Zu(ju, su)
        },
        onPointerUp: uu => {
          const Eu = qu.current;
          qu.current = null, null === Eu || Eu.pointerId !== uu.pointerId || Eu.travel >= Tu || (null !== Eu.side ? Uu(Eu.side) : Eu.isOnMiddle && Xu())
        },
        onPointerCancel: () => {
          qu.current = null
        },
        children: [Nu.map(((uu, Eu) => {
          const ju = uu.sign > 0;
          return (0, wu.jsxs)("g", {
            children: [(0, wu.jsx)("line", {
              x1: cu,
              y1: cu,
              x2: uu.endX,
              y2: uu.endY,
              stroke: uu.colour,
              strokeOpacity: ju ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, wu.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": Eu,
              cx: uu.endX,
              cy: uu.endY,
              r: ju ? Lu : Lu - 1,
              fill: uu.colour,
              fillOpacity: ju ? 1 : .3,
              stroke: uu.colour,
              strokeWidth: ju ? 0 : 1.5,
              children: (0, wu.jsx)("title", {
                children: `${lu("View from")} ${ju?"+":"\u2212"}${uu.name}`
              })
            }), ju && (0, wu.jsx)("text", {
              pointerEvents: "none",
              x: uu.endX,
              y: uu.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: uu.name
            })]
          }, `${ju?"+":"-"}${uu.name}`)
        })), (0, wu.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: cu,
          cy: cu,
          r: tu,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, wu.jsx)("title", {
            children: lu("View from the opposite side")
          })
        })]
      })
    }

    function nu(uu) {
      var Eu, ju, su;
      const {
        chunkGridOrigin: Uu,
        camera: Zu
      } = uu;
      if (null === Uu) return;
      const Xu = [Zu.position.x, Zu.position.y, Zu.position.z],
        lu = [0, 2].map((uu => Math.floor((Xu[uu] + Uu[uu]) / Ou.e.hO))),
        qu = uu.chunkGridCentre;
      if (null !== qu && qu.every(((uu, Eu) => uu === lu[Eu]))) return;
      const bu = null === (Eu = null === (ju = uu.chunkGrid) || void 0 === ju ? void 0 : ju.isVisible) || void 0 === Eu || Eu;
      null === (su = uu.chunkGrid) || void 0 === su || su.dispose();
      const [Nu, Yu] = [0, 2].map(((uu, Eu) => {
        const ju = [];
        for (let su = lu[Eu] - Vu; su <= lu[Eu] + Vu + 1; su++) ju.push(su * Ou.e.hO - Uu[uu]);
        return ju
      })), hu = -Uu[1], Du = [];
      for (const fu of Yu) Du.push([new Cu.dO(Nu[0], hu, fu), new Cu.dO(Nu[Nu.length - 1], hu, fu)]);
      for (const fu of Nu) Du.push([new Cu.dO(fu, hu, Yu[0]), new Cu.dO(fu, hu, Yu[Yu.length - 1])]);
      const gu = (0, cu.e)("Heatmap3DChunkGrid", {
        lines: Du
      }, uu.vY);
      gu.color = new fu.Color3(.45, .6, .78), gu.VY = !1, gu.isVisible = bu, uu.chunkGrid = gu, uu.chunkGridCentre = lu, uu.needsRender = !0
    }

    function yu(uu, Eu, ju, su) {
      uu.Z6("matrix", function(uu, Eu) {
        const ju = new Float32Array(16 * Eu);
        for (let su = 0; su < Eu; su++) {
          const Eu = 16 * su;
          ju[Eu] = 1, ju[Eu + 5] = 1, ju[Eu + 10] = 1, ju[Eu + 12] = uu[3 * su], ju[Eu + 13] = uu[3 * su + 1], ju[Eu + 14] = uu[3 * su + 2], ju[Eu + 15] = 1
        }
        return ju
      }(Eu, su), 16, !0), uu.Z6("color", ju, 4, !0), uu.isVisible = su > 0
    }

    function zu(uu) {
      const {
        camera: Eu,
        translucent: ju
      } = uu, su = [Eu.position.x, Eu.position.y, Eu.position.z], Uu = uu.translucentSortedFrom;
      if (null !== Uu && Math.hypot(su[0] - Uu[0], su[1] - Uu[1], su[2] - Uu[2]) < Ku) return;
      uu.translucentSortedFrom = su;
      const Zu = new Float64Array(ju.count),
        Xu = new Uint32Array(ju.count);
      for (let fu = 0; fu < ju.count; fu++) {
        const uu = ju.wb[3 * fu] - su[0],
          Eu = ju.wb[3 * fu + 1] - su[1],
          Uu = ju.wb[3 * fu + 2] - su[2];
        Zu[fu] = uu * uu + Eu * Eu + Uu * Uu, Xu[fu] = fu
      }
      Xu.sort(((uu, Eu) => Zu[Eu] - Zu[uu]));
      const lu = new Float32Array(3 * ju.count),
        qu = new Float32Array(4 * ju.count);
      Xu.forEach(((uu, Eu) => {
        lu.set(ju.wb.subarray(3 * uu, 3 * uu + 3), 3 * Eu), qu.set(ju.colours.subarray(4 * uu, 4 * uu + 4), 4 * Eu)
      })), yu(uu.translucentCells, lu, qu, ju.count), uu.needsRender = !0
    }

    function Ru(uu, Eu) {
      const ju = (ju, su, Uu) => new Cu.dO(0 === ju ? uu[0] : Eu[0], 0 === su ? uu[1] : Eu[1], 0 === Uu ? uu[2] : Eu[2]),
        su = [];
      for (const Uu of [0, 1])
        for (const uu of [0, 1]) su.push([ju(0, Uu, uu), ju(1, Uu, uu)], [ju(Uu, 0, uu), ju(Uu, 1, uu)], [ju(Uu, uu, 0), ju(Uu, uu, 1)]);
      return su
    }

    function uE(uu) {
      return [Math.sin(uu.heading) * Math.cos(uu.pitch), -Math.sin(uu.pitch), Math.cos(uu.heading) * Math.cos(uu.pitch)]
    }

    function EE(uu) {
      return [Math.cos(uu), 0, -Math.sin(uu)]
    }

    function jE(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: Wu,
        pitch: Su
      };
      const Uu = [uu.max[0] - uu.min[0], uu.max[1] - uu.min[1], uu.max[2] - uu.min[2]],
        Zu = uE(su),
        Xu = EE(su.heading),
        lu = fE(Zu, Xu),
        qu = Math.tan(ju / 2),
        fu = qu * Eu;
      let Cu = 1;
      for (const bu of [-Uu[0] / 2, Uu[0] / 2])
        for (const uu of [-Uu[1] / 2, Uu[1] / 2])
          for (const Eu of [-Uu[2] / 2, Uu[2] / 2]) {
            const ju = [bu, uu, Eu],
              su = qE(ju, Zu);
            Cu = Math.max(Cu, Math.abs(qE(ju, Xu)) / fu - su, Math.abs(qE(ju, lu)) / qu - su)
          }
      return {
        position: XE([uu.min[0] + Uu[0] / 2, uu.min[1] + Uu[1] / 2, uu.min[2] + Uu[2] / 2], lE(Zu, -Cu * Iu)),
        heading: su.heading,
        pitch: su.pitch
      }
    }

    function sE(uu, Eu, ju) {
      const su = ZE(uu),
        Uu = ZE(ju),
        Zu = XE(uu.position, lE(Eu, -1)),
        Xu = [0, 1, 2].reduce(((uu, Eu) => XE(uu, lE(Uu[Eu], qE(Zu, su[Eu])))), [0, 0, 0]);
      return {
        position: XE(Eu, Xu),
        heading: ju.heading,
        pitch: ju.pitch
      }
    }

    function UE(uu) {
      return lE(XE(uu.min, uu.max), .5)
    }

    function ZE(uu) {
      const Eu = uE(uu),
        ju = EE(uu.heading);
      return [Eu, ju, fE(Eu, ju)]
    }

    function XE(uu, Eu) {
      return [uu[0] + Eu[0], uu[1] + Eu[1], uu[2] + Eu[2]]
    }

    function lE(uu, Eu) {
      return [uu[0] * Eu, uu[1] * Eu, uu[2] * Eu]
    }

    function qE(uu, Eu) {
      return uu[0] * Eu[0] + uu[1] * Eu[1] + uu[2] * Eu[2]
    }

    function fE(uu, Eu) {
      return [uu[1] * Eu[2] - uu[2] * Eu[1], uu[2] * Eu[0] - uu[0] * Eu[2], uu[0] * Eu[1] - uu[1] * Eu[0]]
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);