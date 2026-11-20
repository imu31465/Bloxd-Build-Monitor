export const id = 240;
export const ids = [240];
export const modules = {
  39372: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => ou
    });
    yu(6254);
    var Eu = yu(64),
      Ku = yu(39380),
      Qu = yu(39643),
      mu = yu(39766),
      Ju = yu(39808),
      Nu = yu(39827),
      Xu = yu(36986),
      Vu = yu(36828),
      ru = yu(39976),
      Bu = yu(40031),
      xu = (yu(40057), yu(1199)),
      Su = yu(212),
      pu = yu(1170),
      Tu = yu(27),
      Wu = yu(2615),
      ju = yu(1408),
      Hu = yu(1043),
      du = yu(6245),
      bu = yu(6258),
      Cu = yu(4204),
      ku = yu(1079);
    const eu = 1.2,
      Au = .2,
      Du = .0066 * Math.PI / 180,
      Mu = new Set(["Escape", "KeyG"]),
      Iu = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      Gu = "ArrowUp",
      Uu = new Set([...Object.keys(Iu), Gu, "ArrowDown"]),
      nu = 32,
      su = 1,
      tu = 10,
      lu = "F4",
      gu = "Period",
      cu = Math.PI / 2 - .001,
      Lu = Math.PI / 6,
      zu = Math.PI / 6,
      Fu = 1.08,
      wu = [{
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
      Zu = 24,
      hu = 7,
      Pu = 4,
      iu = .01,
      Yu = 4;

    function ou(uu) {
      let {
        heatmap: Ru,
        scale: yu,
        fullyOpaqueFrom: su,
        bounds: Lu,
        fitBounds: zu,
        schematic: Fu,
        controls: wu,
        onStepTime: Zu,
        onShowAllTime: hu,
        onTogglePlaying: Pu,
        getReadout: Yu = null
      } = uu;
      const {
        t: ou
      } = (0, pu.E)(), {
        clientEscMenuOptions: QR
      } = (0, Tu.j)(["clientEscMenuOptions"]), NR = (0, Eu.useRef)(null), XR = (0, Eu.useRef)(null), VR = (0, Eu.useRef)(null), rR = (0, Wu.d)(NR), [BR, xR] = (0, Eu.useState)(!1), [SR, pR] = (0, Eu.useState)(!1), [TR, WR] = (0, Eu.useState)(!0), jR = (0, Eu.useRef)(!1), [HR, dR] = (0, Eu.useState)(!1), bR = SR || !TR && HR, [CR, kR] = (0, Eu.useState)(!1), [eR, AR] = (0, Eu.useState)(!0), [DR, MR] = (0, Eu.useState)(null), IR = Lu.min, [GR, UR] = (0, Eu.useState)(IR);
      GR[0] === IR[0] && GR[1] === IR[1] && GR[2] === IR[2] || (UR(IR), null !== DR && MR({
        ...DR,
        position: mR(DR.position, mR(GR, JR(IR, -1)))
      }));
      const nR = (0, Eu.useMemo)((() => function(uu) {
          return [uu.max[0] - uu.min[0] + 1, uu.max[1] - uu.min[1] + 1, uu.max[2] - uu.min[2] + 1]
        }(Lu)), [Lu]),
        sR = (0, Eu.useMemo)((() => function(uu, Ru) {
          const yu = [],
            Eu = [];
          for (const [Ku, Qu] of Object.entries(uu.frequencies)) {
            const uu = Number(Ku);
            for (const [Ku, mu] of Object.entries(Qu)) {
              const Qu = Number(Ku);
              for (const [Ku, Ju] of Object.entries(mu)) Ju <= 0 || (yu.push(uu - Ru[0], Qu - Ru[1], Number(Ku) - Ru[2]), Eu.push(Ju))
            }
          }
          return {
            positions: Int32Array.from(yu),
            values: Float64Array.from(Eu),
            count: Eu.length
          }
        }(Ru, IR)), [Ru, IR]),
        tR = eu * QR.cameraFOV / 100,
        lR = rR.height > 0 ? rR.width / rR.height : 1,
        gR = (0, Eu.useMemo)((() => function(uu, Ru) {
          return {
            min: [uu.min[0] - Ru[0], uu.min[1] - Ru[1], uu.min[2] - Ru[2]],
            max: [uu.max[0] - Ru[0] + 1, uu.max[1] - Ru[1] + 1, uu.max[2] - Ru[2] + 1]
          }
        }(zu, IR)), [zu, IR]),
        cR = yR(gR, lR, tR),
        LR = null !== DR && void 0 !== DR ? DR : cR,
        zR = (0, Eu.useRef)({
          fittedView: cR,
          fieldOfView: tR,
          mouseSensitivity: QR.mouseSensitivity,
          canLock: TR
        });
      zR.current = {
        fittedView: cR,
        fieldOfView: tR,
        mouseSensitivity: QR.mouseSensitivity,
        canLock: TR
      };
      const FR = (0, Eu.useMemo)((() => {
          if (!bR) return null;
          const uu = (uu, yu, Eu) => {
              var Ku, Qu, mu;
              return null !== (Ku = null === (Qu = Ru.frequencies[uu + IR[0]]) || void 0 === Qu || null === (mu = Qu[yu + IR[1]]) || void 0 === mu ? void 0 : mu[Eu + IR[2]]) && void 0 !== Ku ? Ku : 0
            },
            Eu = function(uu, Ru, yu, Eu) {
              let Ku = 0,
                Qu = 1 / 0;
              for (const ru of [0, 1, 2]) {
                if (0 === Ru[ru]) {
                  if (uu[ru] < 0 || uu[ru] > yu[ru]) return null;
                  continue
                }
                const Eu = (0 - uu[ru]) / Ru[ru],
                  mu = (yu[ru] - uu[ru]) / Ru[ru];
                Ku = Math.max(Ku, Math.min(Eu, mu)), Qu = Math.min(Qu, Math.max(Eu, mu))
              }
              if (Ku > Qu) return null;
              const mu = [0, 1, 2].map((Eu => Math.min(yu[Eu] - 1, Math.max(0, Math.floor(uu[Eu] + Ru[Eu] * Ku))))),
                Ju = [0, 1, 2].map((uu => Math.sign(Ru[uu]))),
                Nu = [0, 1, 2].map((yu => {
                  if (0 === Ju[yu]) return 1 / 0;
                  return ((Ju[yu] > 0 ? mu[yu] + 1 : mu[yu]) - uu[yu]) / Ru[yu]
                })),
                Xu = [0, 1, 2].map((uu => 0 === Ju[uu] ? 1 / 0 : Math.abs(1 / Ru[uu])));
              let Vu = null;
              for (;;) {
                const uu = Eu(mu[0], mu[1], mu[2]);
                if (uu >= 1) return mu;
                uu > 0 && (Vu = [mu[0], mu[1], mu[2]]);
                const Ru = Nu[0] < Nu[1] ? Nu[0] < Nu[2] ? 0 : 2 : Nu[1] < Nu[2] ? 1 : 2;
                if (Nu[Ru] > Qu) return Vu;
                if (mu[Ru] += Ju[Ru], Nu[Ru] += Xu[Ru], mu[Ru] < 0 || mu[Ru] >= yu[Ru]) return Vu
              }
            }(LR.position, uR(LR), nR, ((Ru, Eu, Ku) => (0, du.A)(uu(Ru, Eu, Ku), yu, su)));
          return null === Eu ? null : {
            x: Eu[0] + IR[0],
            y: Eu[1] + IR[1],
            z: Eu[2] + IR[2],
            value: uu(Eu[0], Eu[1], Eu[2])
          }
        }), [bR, Ru, IR, LR, nR, yu, su]),
        {
          keyHandlers: wR
        } = (0, bu.g)({
          isEnabled: bR,
          claimedKeyCodes: Uu,
          yB: uu => {
            MR((Ru => function(uu, Ru) {
              const yu = [Math.sin(uu.heading), 0, Math.cos(uu.heading)],
                Eu = mR(mR(JR(yu, Ru.forward), JR(RR(uu.heading), Ru.right)), [0, Ru.up, 0]);
              return {
                ...uu,
                position: mR(uu.position, Eu)
              }
            }(null !== Ru && void 0 !== Ru ? Ru : zR.current.fittedView, uu)))
          },
          onZoomChange: kR
        });
      (0, Eu.useEffect)((() => {
        const uu = XR.current;
        if (!uu) return;
        let Ru;
        try {
          Ru = function(uu, Ru) {
            const yu = new Ku.e(uu, !0, {
                stencil: !1
              }, !0),
              Eu = new Qu.c(yu),
              [xu, Su, pu] = du.S;
            Eu.clearColor = new Xu.c(xu / 255, Su / 255, pu / 255, 1);
            const Tu = new mu.e("Heatmap3DCamera", Vu.MS.Zero(), Eu);
            Tu.fov = Ru, Tu.minZ = .05;
            const Wu = new Ju.b("Heatmap3DLight", new Vu.MS(.4, 1, -.6), Eu);
            Wu.diffuse = Xu.Color3.White(), Wu.groundColor = Xu.Color3.Black(), Wu.specular = Xu.Color3.Black();
            const ju = new Nu.StandardMaterial("Heatmap3DCellMaterial", Eu);
            ju.diffuseColor = new Xu.Color3(.4, .4, .4), ju.emissiveColor = new Xu.Color3(.62, .62, .62), ju.specularColor = Xu.Color3.Black();
            const Hu = (0, ru.c)("Heatmap3DCells", {
              size: 1
            }, Eu);
            Hu.material = ju, Hu.zp = !1, Hu.DS = !0, Hu.isVisible = !1;
            const bu = (0, ru.c)("Heatmap3DTranslucentCells", {
              size: 1
            }, Eu);
            bu.material = ju, bu.hasVertexAlpha = !0, bu.zp = !1, bu.DS = !0, bu.isVisible = !1;
            const Cu = new Nu.StandardMaterial("Heatmap3DSchematicMaterial", Eu);
            Cu.diffuseColor = new Xu.Color3(.6, .6, .6), Cu.emissiveColor = new Xu.Color3(.4, .4, .4), Cu.specularColor = Xu.Color3.Black();
            const ku = (0, ru.c)("Heatmap3DSchematicBlocks", {
              size: 1
            }, Eu);
            ku.material = Cu, ku.zp = !1, ku.DS = !0, ku.isVisible = !1;
            const eu = (0, Bu.d)("Heatmap3DTarget", {
              lines: fu([-.52, -.52, -.52], [.52, .52, .52])
            }, Eu);
            return eu.color = new Xu.Color3(.06, .14, .23), eu.renderingGroupId = 1, eu.zp = !1, eu.isVisible = !1, {
              engine: yu,
              cp: Eu,
              camera: Tu,
              cells: Hu,
              translucentCells: bu,
              translucent: {
                gp: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: ku,
              targetOutline: eu,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: Ru,
              needsRender: !0
            }
          }(uu, zR.current.fieldOfView)
        } catch (yu) {
          return console.error("Failed to start the 3D heatmap", yu), void xR(!0)
        }
        return VR.current = Ru, Ru.engine.runRenderLoop((() => {
          const uu = Ru.camera;
          uu.fov !== Ru.targetFieldOfView && (uu.fov += (Ru.targetFieldOfView - uu.fov) * (uu.fov > Ru.targetFieldOfView ? .3 : .2), Math.abs(Ru.targetFieldOfView - uu.fov) < 5e-4 && (uu.fov = Ru.targetFieldOfView), Ru.needsRender = !0), Ru.needsRender && (Ru.cp.render(), Ru.needsRender = !Ru.cp.isReady() || !Ru.engine.areAllEffectsReady())
        })), () => {
          VR.current = null, Ru.engine.dispose()
        }
      }), []), (0, Eu.useEffect)((() => {
        const uu = XR.current;
        if (!uu) return;
        const Ru = () => {
            jR.current = !1, pR(document.pointerLockElement === uu)
          },
          yu = () => {
            jR.current && (jR.current = !1, WR(!1))
          },
          Eu = Ru => {
            const yu = !zR.current.canLock && document.activeElement === uu && 0 !== (1 & Ru.buttons);
            if (document.pointerLockElement !== uu && !yu) return;
            const Eu = zR.current.mouseSensitivity * Du;
            MR((uu => function(uu, Ru, yu) {
              const Eu = 2 * Math.PI;
              return {
                ...uu,
                heading: ((uu.heading + Ru) % Eu + Eu) % Eu,
                pitch: Math.max(-cu, Math.min(cu, uu.pitch + yu))
              }
            }(null !== uu && void 0 !== uu ? uu : zR.current.fittedView, Ru.movementX * Eu, Ru.movementY * Eu)))
          };
        return document.addEventListener("pointerlockchange", Ru), document.addEventListener("pointerlockerror", yu), document.addEventListener("pointermove", Eu), () => {
          document.removeEventListener("pointerlockchange", Ru), document.removeEventListener("pointerlockerror", yu), document.removeEventListener("pointermove", Eu), document.pointerLockElement === uu && (0, Cu.c)()
        }
      }), []), (0, Eu.useEffect)((() => {
        const uu = VR.current;
        null !== uu && 0 !== rR.width && 0 !== rR.height && (uu.engine.resize(), uu.needsRender = !0)
      }), [rR.width, rR.height]), (0, Eu.useEffect)((() => {
        const uu = VR.current;
        null !== uu && (uu.targetFieldOfView = tR * (CR ? Au : 1))
      }), [tR, CR]), (0, Eu.useEffect)((() => {
        const uu = VR.current;
        null !== uu && function(uu, Ru, yu, Eu) {
          const Ku = [],
            Qu = [],
            mu = [],
            Ju = [];
          for (let Nu = 0; Nu < Ru.count; Nu++) {
            const uu = Ru.values[Nu],
              Xu = (0, du.A)(uu, yu, Eu);
            if (Xu <= 0) continue;
            const [Vu, ru, Bu] = (0, du.r)((0, du.J)(uu, yu)), xu = Xu >= 1;
            (xu ? Ku : mu).push(Ru.positions[3 * Nu] + .5, Ru.positions[3 * Nu + 1] + .5, Ru.positions[3 * Nu + 2] + .5), (xu ? Qu : Ju).push(Vu / 255, ru / 255, Bu / 255, Xu)
          }
          vu(uu.cells, Float32Array.from(Ku), Float32Array.from(Qu), Qu.length / 4), uu.translucent = {
            gp: Float32Array.from(mu),
            colours: Float32Array.from(Ju),
            count: Ju.length / 4
          }, uu.translucentSortedFrom = null, au(uu), uu.needsRender = !0
        }(uu, sR, yu, su)
      }), [sR, yu, su]), (0, Eu.useEffect)((() => {
        const uu = VR.current;
        null !== uu && function(uu, Ru) {
          uu.chunkGridOrigin = Ru, uu.chunkGridCentre = null, Ou(uu)
        }(uu, Lu.min)
      }), [Lu]), (0, Eu.useEffect)((() => {
        const uu = VR.current;
        null !== uu && function(uu, Ru, yu) {
          const Eu = [],
            Ku = [];
          if (null !== Ru) {
            const {
              positions: uu,
              colours: Qu,
              count: mu
            } = Ru.surface;
            for (let Ru = 0; Ru < mu; Ru++) {
              const mu = [uu[3 * Ru], uu[3 * Ru + 1], uu[3 * Ru + 2]];
              [0, 1, 2].every((uu => mu[uu] >= yu.min[uu] - nu && mu[uu] <= yu.max[uu] + nu)) && (Eu.push(mu[0] - yu.min[0] + .5, mu[1] - yu.min[1] + .5, mu[2] - yu.min[2] + .5), Ku.push(Qu[3 * Ru] / 255, Qu[3 * Ru + 1] / 255, Qu[3 * Ru + 2] / 255, 1))
            }
          }
          vu(uu.schematicBlocks, Float32Array.from(Eu), Float32Array.from(Ku), Ku.length / 4), uu.needsRender = !0
        }(uu, Fu, Lu)
      }), [Fu, Lu]), (0, Eu.useEffect)((() => {
        const uu = VR.current;
        null !== uu && null !== uu.chunkGrid && (uu.chunkGrid.isVisible = eR, uu.needsRender = !0)
      }), [eR, Lu]), (0, Eu.useEffect)((() => {
        const uu = VR.current;
        null !== uu && function(uu, Ru, yu) {
          const {
            camera: Eu
          } = uu;
          Eu.position.set(Ru.position[0], Ru.position[1], Ru.position[2]), Eu.rotation.set(Ru.pitch, Ru.heading, 0);
          const Ku = (tu + 1) * Su.f.jS * Math.sqrt(3);
          Eu.maxZ = Math.max(Ku, Math.hypot(...mR(Ru.position, JR(KR({
            min: [0, 0, 0],
            max: yu
          }), -1))) + 2 * Math.hypot(...yu)), Ou(uu), au(uu), uu.needsRender = !0
        }(uu, LR, nR)
      }), [LR, nR]), (0, Eu.useEffect)((() => {
        const uu = VR.current;
        null !== uu && (uu.targetOutline.isVisible = null !== FR, null !== FR && uu.targetOutline.position.set(FR.x - IR[0] + .5, FR.y - IR[1] + .5, FR.z - IR[2] + .5), uu.needsRender = !0)
      }), [FR, IR]);
      return (0, ku.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: NR,
        children: [(0, ku.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: XR,
          style: {
            width: `${rR.width}px`,
            height: `${rR.height}px`
          },
          tabIndex: 0,
          "aria-label": ou("3D heatmap"),
          onClick: () => {
            const uu = XR.current;
            if (null === uu) return;
            if (uu.focus({
                preventScroll: !0
              }), SR || !TR) return;
            const Ru = uu.requestPointerLock();
            Ru instanceof Promise ? Ru.catch((uu => {
              uu instanceof DOMException && ("WrongDocumentError" === uu.name || "NotSupportedError" === uu.name) && WR(!1)
            })) : jR.current = !0
          },
          ...wR,
          onKeyDown: uu => {
            if (bR && Mu.has(uu.code)) return uu.preventDefault(), void(() => {
              const uu = XR.current;
              null !== uu && document.pointerLockElement === uu ? (0, Cu.c)() : null === uu || void 0 === uu || uu.blur()
            })();
            const Ru = Iu[uu.code];
            return bR && void 0 !== Ru ? (uu.preventDefault(), void Zu(Ru)) : bR && (0, bu.e)("replayPlayPause", uu.code) && !(0, bu.e)("Zoom", uu.code) ? (uu.preventDefault(), void(uu.repeat || Pu())) : bR && uu.code === Gu ? (uu.preventDefault(), void hu()) : bR && uu.code === gu ? (uu.preventDefault(), void MR(null)) : bR && uu.code === lu ? (uu.preventDefault(), void AR((uu => !uu))) : void wR.onKeyDown(uu)
          },
          onFocus: () => {
            dR(!0)
          },
          onBlur: () => {
            dR(!1), wR.onBlur()
          }
        }), BR && (0, ku.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: ou("3D view isn't available in this browser.")
        }), bR && (0, ku.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, ku.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: LR.position.map(((uu, Ru) => (uu + IR[Ru]).toFixed(2))).join(" ")
        }), eR && (0, ku.jsx)(qu, {
          heading: LR.heading,
          pitch: LR.pitch,
          onViewFrom: uu => {
            const Ru = JR(uu, -1),
              yu = 0 === Ru[1] ? {
                heading: Math.atan2(Ru[0], Ru[2]),
                pitch: 0
              } : {
                heading: LR.heading,
                pitch: Ru[1] < 0 ? cu : -cu
              };
            MR(yR(gR, lR, tR, yu))
          },
          onTurn: (uu, Ru) => {
            MR((yu => function(uu, Ru, yu, Eu) {
              return ER(uu, Ru, {
                heading: uu.heading + yu * iu,
                pitch: Math.max(-cu, Math.min(cu, uu.pitch + Eu * iu))
              })
            }(null !== yu && void 0 !== yu ? yu : zR.current.fittedView, KR(gR), uu, Ru)))
          },
          onFlip: () => {
            MR((uu => function(uu, Ru) {
              return ER(uu, Ru, {
                heading: uu.heading + Math.PI,
                pitch: -uu.pitch
              })
            }(null !== uu && void 0 !== uu ? uu : zR.current.fittedView, KR(gR))))
          }
        }), null !== FR && (0, ku.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === Yu ? ou("studio:heatmapBlockReadout", {
            x: FR.x,
            y: FR.y,
            z: FR.z,
            count: (0, xu.Q)(FR.value)
          }) : Yu(FR.x, FR.y, FR.z, FR.value)
        }), (0, ku.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [wu, (0, ku.jsx)(ju.P, {
            active: null === DR,
            onClick: () => {
              MR(null)
            },
            children: (0, ku.jsx)(Hu.c, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function qu(uu) {
      let {
        heading: Ru,
        pitch: yu,
        onViewFrom: Ku,
        onTurn: Qu,
        onFlip: mu
      } = uu;
      const {
        t: Ju
      } = (0, pu.E)(), Nu = (0, Eu.useRef)(null), Xu = uR({
        heading: Ru,
        pitch: yu
      }), Vu = RR(Ru), ru = XR(Xu, Vu), Bu = Zu + hu + 2, xu = wu.flatMap((uu => [1, -1].map((Ru => {
        const yu = JR(uu.direction, Ru);
        return {
          ...uu,
          sign: Ru,
          direction: yu,
          endX: Bu + NR(yu, Vu) * Zu,
          endY: Bu - NR(yu, ru) * Zu,
          depth: NR(yu, Xu)
        }
      })))).sort(((uu, Ru) => Ru.depth - uu.depth));
      return (0, ku.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * Bu,
        height: 2 * Bu,
        "aria-hidden": !0,
        onPointerDown: uu => {
          var Ru, yu;
          uu.currentTarget.setPointerCapture(uu.pointerId);
          const Eu = uu.target,
            Ku = Eu.getAttribute("data-end");
          Nu.current = {
            pointerId: uu.pointerId,
            x: uu.clientX,
            y: uu.clientY,
            travel: 0,
            side: null === Ku ? null : null !== (Ru = null === (yu = xu[Number(Ku)]) || void 0 === yu ? void 0 : yu.direction) && void 0 !== Ru ? Ru : null,
            isOnMiddle: Eu.hasAttribute("data-middle")
          }
        },
        onPointerMove: uu => {
          const Ru = Nu.current;
          if (null === Ru || Ru.pointerId !== uu.pointerId) return;
          const yu = uu.clientX - Ru.x,
            Eu = uu.clientY - Ru.y;
          Ru.x = uu.clientX, Ru.y = uu.clientY, Ru.travel += Math.abs(yu) + Math.abs(Eu), Ru.travel >= Yu && Qu(yu, Eu)
        },
        onPointerUp: uu => {
          const Ru = Nu.current;
          Nu.current = null, null === Ru || Ru.pointerId !== uu.pointerId || Ru.travel >= Yu || (null !== Ru.side ? Ku(Ru.side) : Ru.isOnMiddle && mu())
        },
        onPointerCancel: () => {
          Nu.current = null
        },
        children: [xu.map(((uu, Ru) => {
          const yu = uu.sign > 0;
          return (0, ku.jsxs)("g", {
            children: [(0, ku.jsx)("line", {
              x1: Bu,
              y1: Bu,
              x2: uu.endX,
              y2: uu.endY,
              stroke: uu.colour,
              strokeOpacity: yu ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, ku.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": Ru,
              cx: uu.endX,
              cy: uu.endY,
              r: yu ? hu : hu - 1,
              fill: uu.colour,
              fillOpacity: yu ? 1 : .3,
              stroke: uu.colour,
              strokeWidth: yu ? 0 : 1.5,
              children: (0, ku.jsx)("title", {
                children: `${Ju("View from")} ${yu?"+":"\u2212"}${uu.name}`
              })
            }), yu && (0, ku.jsx)("text", {
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
          }, `${yu?"+":"-"}${uu.name}`)
        })), (0, ku.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: Bu,
          cy: Bu,
          r: Pu,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, ku.jsx)("title", {
            children: Ju("View from the opposite side")
          })
        })]
      })
    }

    function Ou(uu) {
      var Ru, yu, Eu;
      const {
        chunkGridOrigin: Ku,
        camera: Qu
      } = uu;
      if (null === Ku) return;
      const mu = [Qu.position.x, Qu.position.y, Qu.position.z],
        Ju = [0, 2].map((uu => Math.floor((mu[uu] + Ku[uu]) / Su.f.jS))),
        Nu = uu.chunkGridCentre;
      if (null !== Nu && Nu.every(((uu, Ru) => uu === Ju[Ru]))) return;
      const ru = null === (Ru = null === (yu = uu.chunkGrid) || void 0 === yu ? void 0 : yu.isVisible) || void 0 === Ru || Ru;
      null === (Eu = uu.chunkGrid) || void 0 === Eu || Eu.dispose();
      const [xu, pu] = [0, 2].map(((uu, Ru) => {
        const yu = [];
        for (let Eu = Ju[Ru] - tu; Eu <= Ju[Ru] + tu + 1; Eu++) yu.push(Eu * Su.f.jS - Ku[uu]);
        return yu
      })), Tu = -Ku[1], Wu = [];
      for (const Xu of pu) Wu.push([new Vu.MS(xu[0], Tu, Xu), new Vu.MS(xu[xu.length - 1], Tu, Xu)]);
      for (const Xu of xu) Wu.push([new Vu.MS(Xu, Tu, pu[0]), new Vu.MS(Xu, Tu, pu[pu.length - 1])]);
      const ju = (0, Bu.d)("Heatmap3DChunkGrid", {
        lines: Wu
      }, uu.cp);
      ju.color = new Xu.Color3(.45, .6, .78), ju.zp = !1, ju.isVisible = ru, uu.chunkGrid = ju, uu.chunkGridCentre = Ju, uu.needsRender = !0
    }

    function vu(uu, Ru, yu, Eu) {
      uu.uuu("matrix", function(uu, Ru) {
        const yu = new Float32Array(16 * Ru);
        for (let Eu = 0; Eu < Ru; Eu++) {
          const Ru = 16 * Eu;
          yu[Ru] = 1, yu[Ru + 5] = 1, yu[Ru + 10] = 1, yu[Ru + 12] = uu[3 * Eu], yu[Ru + 13] = uu[3 * Eu + 1], yu[Ru + 14] = uu[3 * Eu + 2], yu[Ru + 15] = 1
        }
        return yu
      }(Ru, Eu), 16, !0), uu.uuu("color", yu, 4, !0), uu.isVisible = Eu > 0
    }

    function au(uu) {
      const {
        camera: Ru,
        translucent: yu
      } = uu, Eu = [Ru.position.x, Ru.position.y, Ru.position.z], Ku = uu.translucentSortedFrom;
      if (null !== Ku && Math.hypot(Eu[0] - Ku[0], Eu[1] - Ku[1], Eu[2] - Ku[2]) < su) return;
      uu.translucentSortedFrom = Eu;
      const Qu = new Float64Array(yu.count),
        mu = new Uint32Array(yu.count);
      for (let Xu = 0; Xu < yu.count; Xu++) {
        const uu = yu.gp[3 * Xu] - Eu[0],
          Ru = yu.gp[3 * Xu + 1] - Eu[1],
          Ku = yu.gp[3 * Xu + 2] - Eu[2];
        Qu[Xu] = uu * uu + Ru * Ru + Ku * Ku, mu[Xu] = Xu
      }
      mu.sort(((uu, Ru) => Qu[Ru] - Qu[uu]));
      const Ju = new Float32Array(3 * yu.count),
        Nu = new Float32Array(4 * yu.count);
      mu.forEach(((uu, Ru) => {
        Ju.set(yu.gp.subarray(3 * uu, 3 * uu + 3), 3 * Ru), Nu.set(yu.colours.subarray(4 * uu, 4 * uu + 4), 4 * Ru)
      })), vu(uu.translucentCells, Ju, Nu, yu.count), uu.needsRender = !0
    }

    function fu(uu, Ru) {
      const yu = (yu, Eu, Ku) => new Vu.MS(0 === yu ? uu[0] : Ru[0], 0 === Eu ? uu[1] : Ru[1], 0 === Ku ? uu[2] : Ru[2]),
        Eu = [];
      for (const Ku of [0, 1])
        for (const uu of [0, 1]) Eu.push([yu(0, Ku, uu), yu(1, Ku, uu)], [yu(Ku, 0, uu), yu(Ku, 1, uu)], [yu(Ku, uu, 0), yu(Ku, uu, 1)]);
      return Eu
    }

    function uR(uu) {
      return [Math.sin(uu.heading) * Math.cos(uu.pitch), -Math.sin(uu.pitch), Math.cos(uu.heading) * Math.cos(uu.pitch)]
    }

    function RR(uu) {
      return [Math.cos(uu), 0, -Math.sin(uu)]
    }

    function yR(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: Lu,
        pitch: zu
      };
      const Ku = [uu.max[0] - uu.min[0], uu.max[1] - uu.min[1], uu.max[2] - uu.min[2]],
        Qu = uR(Eu),
        mu = RR(Eu.heading),
        Ju = XR(Qu, mu),
        Nu = Math.tan(yu / 2),
        Xu = Nu * Ru;
      let Vu = 1;
      for (const ru of [-Ku[0] / 2, Ku[0] / 2])
        for (const uu of [-Ku[1] / 2, Ku[1] / 2])
          for (const Ru of [-Ku[2] / 2, Ku[2] / 2]) {
            const yu = [ru, uu, Ru],
              Eu = NR(yu, Qu);
            Vu = Math.max(Vu, Math.abs(NR(yu, mu)) / Xu - Eu, Math.abs(NR(yu, Ju)) / Nu - Eu)
          }
      return {
        position: mR([uu.min[0] + Ku[0] / 2, uu.min[1] + Ku[1] / 2, uu.min[2] + Ku[2] / 2], JR(Qu, -Vu * Fu)),
        heading: Eu.heading,
        pitch: Eu.pitch
      }
    }

    function ER(uu, Ru, yu) {
      const Eu = QR(uu),
        Ku = QR(yu),
        Qu = mR(uu.position, JR(Ru, -1)),
        mu = [0, 1, 2].reduce(((uu, Ru) => mR(uu, JR(Ku[Ru], NR(Qu, Eu[Ru])))), [0, 0, 0]);
      return {
        position: mR(Ru, mu),
        heading: yu.heading,
        pitch: yu.pitch
      }
    }

    function KR(uu) {
      return JR(mR(uu.min, uu.max), .5)
    }

    function QR(uu) {
      const Ru = uR(uu),
        yu = RR(uu.heading);
      return [Ru, yu, XR(Ru, yu)]
    }

    function mR(uu, Ru) {
      return [uu[0] + Ru[0], uu[1] + Ru[1], uu[2] + Ru[2]]
    }

    function JR(uu, Ru) {
      return [uu[0] * Ru, uu[1] * Ru, uu[2] * Ru]
    }

    function NR(uu, Ru) {
      return uu[0] * Ru[0] + uu[1] * Ru[1] + uu[2] * Ru[2]
    }

    function XR(uu, Ru) {
      return [uu[1] * Ru[2] - uu[2] * Ru[1], uu[2] * Ru[0] - uu[0] * Ru[2], uu[0] * Ru[1] - uu[1] * Ru[0]]
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);