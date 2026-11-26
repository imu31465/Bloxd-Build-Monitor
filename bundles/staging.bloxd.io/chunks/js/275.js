export const id = 275;
export const ids = [275];
export const modules = {
  41069: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => uV
    });
    xV(7011);
    var JV = xV(62),
      YV = xV(41071),
      UV = xV(41331),
      yV = xV(41466),
      pV = xV(41510),
      QV = xV(41524),
      nV = xV(38387),
      wV = xV(38263),
      ZV = xV(41660),
      vV = xV(41706),
      rV = (xV(41744), xV(1252)),
      kV = xV(206),
      bV = xV(1220),
      EV = xV(27),
      BV = xV(3080),
      jV = xV(1551),
      qV = xV(1414),
      tV = xV(7005),
      FV = xV(7013),
      TV = xV(4922),
      PV = xV(1321);
    const AV = 1.2,
      NV = .2,
      XV = .0066 * Math.PI / 180,
      MV = new Set(["Escape", "KeyG"]),
      zV = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      GV = "ArrowUp",
      WV = new Set([...Object.keys(zV), GV, "ArrowDown"]),
      RV = 32,
      gV = 1,
      DV = 10,
      iV = "F4",
      CV = "Period",
      aV = Math.PI / 2 - .001,
      oV = Math.PI / 6,
      cV = Math.PI / 6,
      hV = 1.08,
      lV = [{
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
      LV = 24,
      fV = 7,
      mV = 4,
      KV = .01,
      HV = 4;

    function uV(VV) {
      let {
        heatmap: eV,
        scale: xV,
        fullyOpaqueFrom: gV,
        bounds: oV,
        fitBounds: cV,
        schematic: hV,
        controls: lV,
        onStepTime: LV,
        onShowAllTime: fV,
        onTogglePlaying: mV,
        getReadout: HV = null
      } = VV;
      const {
        t: uV
      } = (0, bV.A)(), {
        clientEscMenuOptions: Ue
      } = (0, EV.l)(["clientEscMenuOptions"]), Qe = (0, JV.useRef)(null), ne = (0, JV.useRef)(null), we = (0, JV.useRef)(null), Ze = (0, BV.d)(Qe), [ve, re] = (0, JV.useState)(!1), [ke, be] = (0, JV.useState)(!1), [Ee, Be] = (0, JV.useState)(!0), je = (0, JV.useRef)(!1), [qe, te] = (0, JV.useState)(!1), Fe = ke || !Ee && qe, [Te, Pe] = (0, JV.useState)(!1), [Ae, Ne] = (0, JV.useState)(!0), [Xe, Me] = (0, JV.useState)(null), ze = oV.min, [Ge, We] = (0, JV.useState)(ze);
      Ge[0] === ze[0] && Ge[1] === ze[1] && Ge[2] === ze[2] || (We(ze), null !== Xe && Me({
        ...Xe,
        position: ye(Xe.position, ye(Ge, pe(ze, -1)))
      }));
      const Re = (0, JV.useMemo)((() => function(VV) {
          return [VV.max[0] - VV.min[0] + 1, VV.max[1] - VV.min[1] + 1, VV.max[2] - VV.min[2] + 1]
        }(oV)), [oV]),
        ge = (0, JV.useMemo)((() => function(VV, eV) {
          const xV = [],
            JV = [];
          for (const [YV, UV] of Object.entries(VV.frequencies)) {
            const VV = Number(YV);
            for (const [YV, yV] of Object.entries(UV)) {
              const UV = Number(YV);
              for (const [YV, pV] of Object.entries(yV)) pV <= 0 || (xV.push(VV - eV[0], UV - eV[1], Number(YV) - eV[2]), JV.push(pV))
            }
          }
          return {
            positions: Int32Array.from(xV),
            values: Float64Array.from(JV),
            count: JV.length
          }
        }(eV, ze)), [eV, ze]),
        De = AV * Ue.cameraFOV / 100,
        ie = Ze.height > 0 ? Ze.width / Ze.height : 1,
        Ce = (0, JV.useMemo)((() => function(VV, eV) {
          return {
            min: [VV.min[0] - eV[0], VV.min[1] - eV[1], VV.min[2] - eV[2]],
            max: [VV.max[0] - eV[0] + 1, VV.max[1] - eV[1] + 1, VV.max[2] - eV[2] + 1]
          }
        }(cV, ze)), [cV, ze]),
        ae = xe(Ce, ie, De),
        oe = null !== Xe && void 0 !== Xe ? Xe : ae,
        ce = (0, JV.useRef)({
          fittedView: ae,
          fieldOfView: De,
          mouseSensitivity: Ue.mouseSensitivity,
          canLock: Ee
        });
      ce.current = {
        fittedView: ae,
        fieldOfView: De,
        mouseSensitivity: Ue.mouseSensitivity,
        canLock: Ee
      };
      const he = (0, JV.useMemo)((() => {
          if (!Fe) return null;
          const VV = (VV, xV, JV) => {
              var YV, UV, yV;
              return null !== (YV = null === (UV = eV.frequencies[VV + ze[0]]) || void 0 === UV || null === (yV = UV[xV + ze[1]]) || void 0 === yV ? void 0 : yV[JV + ze[2]]) && void 0 !== YV ? YV : 0
            },
            JV = function(VV, eV, xV, JV) {
              let YV = 0,
                UV = 1 / 0;
              for (const ZV of [0, 1, 2]) {
                if (0 === eV[ZV]) {
                  if (VV[ZV] < 0 || VV[ZV] > xV[ZV]) return null;
                  continue
                }
                const JV = (0 - VV[ZV]) / eV[ZV],
                  yV = (xV[ZV] - VV[ZV]) / eV[ZV];
                YV = Math.max(YV, Math.min(JV, yV)), UV = Math.min(UV, Math.max(JV, yV))
              }
              if (YV > UV) return null;
              const yV = [0, 1, 2].map((JV => Math.min(xV[JV] - 1, Math.max(0, Math.floor(VV[JV] + eV[JV] * YV))))),
                pV = [0, 1, 2].map((VV => Math.sign(eV[VV]))),
                QV = [0, 1, 2].map((xV => {
                  if (0 === pV[xV]) return 1 / 0;
                  return ((pV[xV] > 0 ? yV[xV] + 1 : yV[xV]) - VV[xV]) / eV[xV]
                })),
                nV = [0, 1, 2].map((VV => 0 === pV[VV] ? 1 / 0 : Math.abs(1 / eV[VV])));
              let wV = null;
              for (;;) {
                const VV = JV(yV[0], yV[1], yV[2]);
                if (VV >= 1) return yV;
                VV > 0 && (wV = [yV[0], yV[1], yV[2]]);
                const eV = QV[0] < QV[1] ? QV[0] < QV[2] ? 0 : 2 : QV[1] < QV[2] ? 1 : 2;
                if (QV[eV] > UV) return wV;
                if (yV[eV] += pV[eV], QV[eV] += nV[eV], yV[eV] < 0 || yV[eV] >= xV[eV]) return wV
              }
            }(oe.position, Ve(oe), Re, ((eV, JV, YV) => (0, tV.v)(VV(eV, JV, YV), xV, gV)));
          return null === JV ? null : {
            x: JV[0] + ze[0],
            y: JV[1] + ze[1],
            z: JV[2] + ze[2],
            value: VV(JV[0], JV[1], JV[2])
          }
        }), [Fe, eV, ze, oe, Re, xV, gV]),
        {
          keyHandlers: le
        } = (0, FV.d)({
          isEnabled: Fe,
          claimedKeyCodes: WV,
          Lv: VV => {
            Me((eV => function(VV, eV) {
              const xV = [Math.sin(VV.heading), 0, Math.cos(VV.heading)],
                JV = ye(ye(pe(xV, eV.forward), pe(ee(VV.heading), eV.right)), [0, eV.up, 0]);
              return {
                ...VV,
                position: ye(VV.position, JV)
              }
            }(null !== eV && void 0 !== eV ? eV : ce.current.fittedView, VV)))
          },
          onZoomChange: Pe
        });
      (0, JV.useEffect)((() => {
        const VV = ne.current;
        if (!VV) return;
        let eV;
        try {
          eV = function(VV, eV) {
            const xV = new YV.c(VV, !0, {
                stencil: !1
              }, !0),
              JV = new UV.c(xV),
              [rV, kV, bV] = tV.M;
            JV.clearColor = new nV.c(rV / 255, kV / 255, bV / 255, 1);
            const EV = new yV.d("Heatmap3DCamera", wV.Ik.Zero(), JV);
            EV.fov = eV, EV.minZ = .05;
            const BV = new pV.d("Heatmap3DLight", new wV.Ik(.4, 1, -.6), JV);
            BV.diffuse = nV.Color3.White(), BV.groundColor = nV.Color3.Black(), BV.specular = nV.Color3.Black();
            const jV = new QV.StandardMaterial("Heatmap3DCellMaterial", JV);
            jV.diffuseColor = new nV.Color3(.4, .4, .4), jV.emissiveColor = new nV.Color3(.62, .62, .62), jV.specularColor = nV.Color3.Black();
            const qV = (0, ZV.b)("Heatmap3DCells", {
              size: 1
            }, JV);
            qV.material = jV, qV.QE = !1, qV.Sk = !0, qV.isVisible = !1;
            const FV = (0, ZV.b)("Heatmap3DTranslucentCells", {
              size: 1
            }, JV);
            FV.material = jV, FV.hasVertexAlpha = !0, FV.QE = !1, FV.Sk = !0, FV.isVisible = !1;
            const TV = new QV.StandardMaterial("Heatmap3DSchematicMaterial", JV);
            TV.diffuseColor = new nV.Color3(.6, .6, .6), TV.emissiveColor = new nV.Color3(.4, .4, .4), TV.specularColor = nV.Color3.Black();
            const PV = (0, ZV.b)("Heatmap3DSchematicBlocks", {
              size: 1
            }, JV);
            PV.material = TV, PV.QE = !1, PV.Sk = !0, PV.isVisible = !1;
            const AV = (0, vV.e)("Heatmap3DTarget", {
              lines: OV([-.52, -.52, -.52], [.52, .52, .52])
            }, JV);
            return AV.color = new nV.Color3(.06, .14, .23), AV.renderingGroupId = 1, AV.QE = !1, AV.isVisible = !1, {
              engine: xV,
              yE: JV,
              camera: EV,
              cells: qV,
              translucentCells: FV,
              translucent: {
                wb: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: PV,
              targetOutline: AV,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: eV,
              needsRender: !0
            }
          }(VV, ce.current.fieldOfView)
        } catch (xV) {
          return console.error("Failed to start the 3D heatmap", xV), void re(!0)
        }
        return we.current = eV, eV.engine.runRenderLoop((() => {
          const VV = eV.camera;
          VV.fov !== eV.targetFieldOfView && (VV.fov += (eV.targetFieldOfView - VV.fov) * (VV.fov > eV.targetFieldOfView ? .3 : .2), Math.abs(eV.targetFieldOfView - VV.fov) < 5e-4 && (VV.fov = eV.targetFieldOfView), eV.needsRender = !0), eV.needsRender && (eV.yE.render(), eV.needsRender = !eV.yE.isReady() || !eV.engine.areAllEffectsReady())
        })), () => {
          we.current = null, eV.engine.dispose()
        }
      }), []), (0, JV.useEffect)((() => {
        const VV = ne.current;
        if (!VV) return;
        const eV = () => {
            je.current = !1, be(document.pointerLockElement === VV)
          },
          xV = () => {
            je.current && (je.current = !1, Be(!1))
          },
          JV = eV => {
            const xV = !ce.current.canLock && document.activeElement === VV && 0 !== (1 & eV.buttons);
            if (document.pointerLockElement !== VV && !xV) return;
            const JV = ce.current.mouseSensitivity * XV;
            Me((VV => function(VV, eV, xV) {
              const JV = 2 * Math.PI;
              return {
                ...VV,
                heading: ((VV.heading + eV) % JV + JV) % JV,
                pitch: Math.max(-aV, Math.min(aV, VV.pitch + xV))
              }
            }(null !== VV && void 0 !== VV ? VV : ce.current.fittedView, eV.movementX * JV, eV.movementY * JV)))
          };
        return document.addEventListener("pointerlockchange", eV), document.addEventListener("pointerlockerror", xV), document.addEventListener("pointermove", JV), () => {
          document.removeEventListener("pointerlockchange", eV), document.removeEventListener("pointerlockerror", xV), document.removeEventListener("pointermove", JV), document.pointerLockElement === VV && (0, TV.b)()
        }
      }), []), (0, JV.useEffect)((() => {
        const VV = we.current;
        null !== VV && 0 !== Ze.width && 0 !== Ze.height && (VV.engine.resize(), VV.needsRender = !0)
      }), [Ze.width, Ze.height]), (0, JV.useEffect)((() => {
        const VV = we.current;
        null !== VV && (VV.targetFieldOfView = De * (Te ? NV : 1))
      }), [De, Te]), (0, JV.useEffect)((() => {
        const VV = we.current;
        null !== VV && function(VV, eV, xV, JV) {
          const YV = [],
            UV = [],
            yV = [],
            pV = [];
          for (let QV = 0; QV < eV.count; QV++) {
            const VV = eV.values[QV],
              nV = (0, tV.v)(VV, xV, JV);
            if (nV <= 0) continue;
            const [wV, ZV, vV] = (0, tV.o)((0, tV.E)(VV, xV)), rV = nV >= 1;
            (rV ? YV : yV).push(eV.positions[3 * QV] + .5, eV.positions[3 * QV + 1] + .5, eV.positions[3 * QV + 2] + .5), (rV ? UV : pV).push(wV / 255, ZV / 255, vV / 255, nV)
          }
          IV(VV.cells, Float32Array.from(YV), Float32Array.from(UV), UV.length / 4), VV.translucent = {
            wb: Float32Array.from(yV),
            colours: Float32Array.from(pV),
            count: pV.length / 4
          }, VV.translucentSortedFrom = null, dV(VV), VV.needsRender = !0
        }(VV, ge, xV, gV)
      }), [ge, xV, gV]), (0, JV.useEffect)((() => {
        const VV = we.current;
        null !== VV && function(VV, eV) {
          VV.chunkGridOrigin = eV, VV.chunkGridCentre = null, SV(VV)
        }(VV, oV.min)
      }), [oV]), (0, JV.useEffect)((() => {
        const VV = we.current;
        null !== VV && function(VV, eV, xV) {
          const JV = [],
            YV = [];
          if (null !== eV) {
            const {
              positions: VV,
              colours: UV,
              count: yV
            } = eV.surface;
            for (let eV = 0; eV < yV; eV++) {
              const yV = [VV[3 * eV], VV[3 * eV + 1], VV[3 * eV + 2]];
              [0, 1, 2].every((VV => yV[VV] >= xV.min[VV] - RV && yV[VV] <= xV.max[VV] + RV)) && (JV.push(yV[0] - xV.min[0] + .5, yV[1] - xV.min[1] + .5, yV[2] - xV.min[2] + .5), YV.push(UV[3 * eV] / 255, UV[3 * eV + 1] / 255, UV[3 * eV + 2] / 255, 1))
            }
          }
          IV(VV.schematicBlocks, Float32Array.from(JV), Float32Array.from(YV), YV.length / 4), VV.needsRender = !0
        }(VV, hV, oV)
      }), [hV, oV]), (0, JV.useEffect)((() => {
        const VV = we.current;
        null !== VV && null !== VV.chunkGrid && (VV.chunkGrid.isVisible = Ae, VV.needsRender = !0)
      }), [Ae, oV]), (0, JV.useEffect)((() => {
        const VV = we.current;
        null !== VV && function(VV, eV, xV) {
          const {
            camera: JV
          } = VV;
          JV.position.set(eV.position[0], eV.position[1], eV.position[2]), JV.rotation.set(eV.pitch, eV.heading, 0);
          const YV = (DV + 1) * kV.f.PZ * Math.sqrt(3);
          JV.maxZ = Math.max(YV, Math.hypot(...ye(eV.position, pe(Ye({
            min: [0, 0, 0],
            max: xV
          }), -1))) + 2 * Math.hypot(...xV)), SV(VV), dV(VV), VV.needsRender = !0
        }(VV, oe, Re)
      }), [oe, Re]), (0, JV.useEffect)((() => {
        const VV = we.current;
        null !== VV && (VV.targetOutline.isVisible = null !== he, null !== he && VV.targetOutline.position.set(he.x - ze[0] + .5, he.y - ze[1] + .5, he.z - ze[2] + .5), VV.needsRender = !0)
      }), [he, ze]);
      return (0, PV.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: Qe,
        children: [(0, PV.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: ne,
          style: {
            width: `${Ze.width}px`,
            height: `${Ze.height}px`
          },
          tabIndex: 0,
          "aria-label": uV("3D heatmap"),
          onClick: () => {
            const VV = ne.current;
            if (null === VV) return;
            if (VV.focus({
                preventScroll: !0
              }), ke || !Ee) return;
            const eV = VV.requestPointerLock();
            eV instanceof Promise ? eV.catch((VV => {
              VV instanceof DOMException && ("WrongDocumentError" === VV.name || "NotSupportedError" === VV.name) && Be(!1)
            })) : je.current = !0
          },
          ...le,
          onKeyDown: VV => {
            if (Fe && MV.has(VV.code)) return VV.preventDefault(), void(() => {
              const VV = ne.current;
              null !== VV && document.pointerLockElement === VV ? (0, TV.b)() : null === VV || void 0 === VV || VV.blur()
            })();
            const eV = zV[VV.code];
            return Fe && void 0 !== eV ? (VV.preventDefault(), void LV(eV)) : Fe && (0, FV.c)("replayPlayPause", VV.code) && !(0, FV.c)("Zoom", VV.code) ? (VV.preventDefault(), void(VV.repeat || mV())) : Fe && VV.code === GV ? (VV.preventDefault(), void fV()) : Fe && VV.code === CV ? (VV.preventDefault(), void Me(null)) : Fe && VV.code === iV ? (VV.preventDefault(), void Ne((VV => !VV))) : void le.onKeyDown(VV)
          },
          onFocus: () => {
            te(!0)
          },
          onBlur: () => {
            te(!1), le.onBlur()
          }
        }), ve && (0, PV.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: uV("3D view isn't available in this browser.")
        }), Fe && (0, PV.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, PV.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: oe.position.map(((VV, eV) => (VV + ze[eV]).toFixed(2))).join(" ")
        }), Ae && (0, PV.jsx)(sV, {
          heading: oe.heading,
          pitch: oe.pitch,
          onViewFrom: VV => {
            const eV = pe(VV, -1),
              xV = 0 === eV[1] ? {
                heading: Math.atan2(eV[0], eV[2]),
                pitch: 0
              } : {
                heading: oe.heading,
                pitch: eV[1] < 0 ? aV : -aV
              };
            Me(xe(Ce, ie, De, xV))
          },
          onTurn: (VV, eV) => {
            Me((xV => function(VV, eV, xV, JV) {
              return Je(VV, eV, {
                heading: VV.heading + xV * KV,
                pitch: Math.max(-aV, Math.min(aV, VV.pitch + JV * KV))
              })
            }(null !== xV && void 0 !== xV ? xV : ce.current.fittedView, Ye(Ce), VV, eV)))
          },
          onFlip: () => {
            Me((VV => function(VV, eV) {
              return Je(VV, eV, {
                heading: VV.heading + Math.PI,
                pitch: -VV.pitch
              })
            }(null !== VV && void 0 !== VV ? VV : ce.current.fittedView, Ye(Ce))))
          }
        }), null !== he && (0, PV.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === HV ? uV("studio:heatmapBlockReadout", {
            x: he.x,
            y: he.y,
            z: he.z,
            count: (0, rV.N)(he.value)
          }) : HV(he.x, he.y, he.z, he.value)
        }), (0, PV.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [lV, (0, PV.jsx)(jV.M, {
            active: null === Xe,
            onClick: () => {
              Me(null)
            },
            children: (0, PV.jsx)(qV.b, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function sV(VV) {
      let {
        heading: eV,
        pitch: xV,
        onViewFrom: YV,
        onTurn: UV,
        onFlip: yV
      } = VV;
      const {
        t: pV
      } = (0, bV.A)(), QV = (0, JV.useRef)(null), nV = Ve({
        heading: eV,
        pitch: xV
      }), wV = ee(eV), ZV = ne(nV, wV), vV = LV + fV + 2, rV = lV.flatMap((VV => [1, -1].map((eV => {
        const xV = pe(VV.direction, eV);
        return {
          ...VV,
          sign: eV,
          direction: xV,
          endX: vV + Qe(xV, wV) * LV,
          endY: vV - Qe(xV, ZV) * LV,
          depth: Qe(xV, nV)
        }
      })))).sort(((VV, eV) => eV.depth - VV.depth));
      return (0, PV.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * vV,
        height: 2 * vV,
        "aria-hidden": !0,
        onPointerDown: VV => {
          var eV, xV;
          VV.currentTarget.setPointerCapture(VV.pointerId);
          const JV = VV.target,
            YV = JV.getAttribute("data-end");
          QV.current = {
            pointerId: VV.pointerId,
            x: VV.clientX,
            y: VV.clientY,
            travel: 0,
            side: null === YV ? null : null !== (eV = null === (xV = rV[Number(YV)]) || void 0 === xV ? void 0 : xV.direction) && void 0 !== eV ? eV : null,
            isOnMiddle: JV.hasAttribute("data-middle")
          }
        },
        onPointerMove: VV => {
          const eV = QV.current;
          if (null === eV || eV.pointerId !== VV.pointerId) return;
          const xV = VV.clientX - eV.x,
            JV = VV.clientY - eV.y;
          eV.x = VV.clientX, eV.y = VV.clientY, eV.travel += Math.abs(xV) + Math.abs(JV), eV.travel >= HV && UV(xV, JV)
        },
        onPointerUp: VV => {
          const eV = QV.current;
          QV.current = null, null === eV || eV.pointerId !== VV.pointerId || eV.travel >= HV || (null !== eV.side ? YV(eV.side) : eV.isOnMiddle && yV())
        },
        onPointerCancel: () => {
          QV.current = null
        },
        children: [rV.map(((VV, eV) => {
          const xV = VV.sign > 0;
          return (0, PV.jsxs)("g", {
            children: [(0, PV.jsx)("line", {
              x1: vV,
              y1: vV,
              x2: VV.endX,
              y2: VV.endY,
              stroke: VV.colour,
              strokeOpacity: xV ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, PV.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": eV,
              cx: VV.endX,
              cy: VV.endY,
              r: xV ? fV : fV - 1,
              fill: VV.colour,
              fillOpacity: xV ? 1 : .3,
              stroke: VV.colour,
              strokeWidth: xV ? 0 : 1.5,
              children: (0, PV.jsx)("title", {
                children: `${pV("View from")} ${xV?"+":"\u2212"}${VV.name}`
              })
            }), xV && (0, PV.jsx)("text", {
              pointerEvents: "none",
              x: VV.endX,
              y: VV.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: VV.name
            })]
          }, `${xV?"+":"-"}${VV.name}`)
        })), (0, PV.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: vV,
          cy: vV,
          r: mV,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, PV.jsx)("title", {
            children: pV("View from the opposite side")
          })
        })]
      })
    }

    function SV(VV) {
      var eV, xV, JV;
      const {
        chunkGridOrigin: YV,
        camera: UV
      } = VV;
      if (null === YV) return;
      const yV = [UV.position.x, UV.position.y, UV.position.z],
        pV = [0, 2].map((VV => Math.floor((yV[VV] + YV[VV]) / kV.f.PZ))),
        QV = VV.chunkGridCentre;
      if (null !== QV && QV.every(((VV, eV) => VV === pV[eV]))) return;
      const ZV = null === (eV = null === (xV = VV.chunkGrid) || void 0 === xV ? void 0 : xV.isVisible) || void 0 === eV || eV;
      null === (JV = VV.chunkGrid) || void 0 === JV || JV.dispose();
      const [rV, bV] = [0, 2].map(((VV, eV) => {
        const xV = [];
        for (let JV = pV[eV] - DV; JV <= pV[eV] + DV + 1; JV++) xV.push(JV * kV.f.PZ - YV[VV]);
        return xV
      })), EV = -YV[1], BV = [];
      for (const nV of bV) BV.push([new wV.Ik(rV[0], EV, nV), new wV.Ik(rV[rV.length - 1], EV, nV)]);
      for (const nV of rV) BV.push([new wV.Ik(nV, EV, bV[0]), new wV.Ik(nV, EV, bV[bV.length - 1])]);
      const jV = (0, vV.e)("Heatmap3DChunkGrid", {
        lines: BV
      }, VV.yE);
      jV.color = new nV.Color3(.45, .6, .78), jV.QE = !1, jV.isVisible = ZV, VV.chunkGrid = jV, VV.chunkGridCentre = pV, VV.needsRender = !0
    }

    function IV(VV, eV, xV, JV) {
      VV.beV("matrix", function(VV, eV) {
        const xV = new Float32Array(16 * eV);
        for (let JV = 0; JV < eV; JV++) {
          const eV = 16 * JV;
          xV[eV] = 1, xV[eV + 5] = 1, xV[eV + 10] = 1, xV[eV + 12] = VV[3 * JV], xV[eV + 13] = VV[3 * JV + 1], xV[eV + 14] = VV[3 * JV + 2], xV[eV + 15] = 1
        }
        return xV
      }(eV, JV), 16, !0), VV.beV("color", xV, 4, !0), VV.isVisible = JV > 0
    }

    function dV(VV) {
      const {
        camera: eV,
        translucent: xV
      } = VV, JV = [eV.position.x, eV.position.y, eV.position.z], YV = VV.translucentSortedFrom;
      if (null !== YV && Math.hypot(JV[0] - YV[0], JV[1] - YV[1], JV[2] - YV[2]) < gV) return;
      VV.translucentSortedFrom = JV;
      const UV = new Float64Array(xV.count),
        yV = new Uint32Array(xV.count);
      for (let nV = 0; nV < xV.count; nV++) {
        const VV = xV.wb[3 * nV] - JV[0],
          eV = xV.wb[3 * nV + 1] - JV[1],
          YV = xV.wb[3 * nV + 2] - JV[2];
        UV[nV] = VV * VV + eV * eV + YV * YV, yV[nV] = nV
      }
      yV.sort(((VV, eV) => UV[eV] - UV[VV]));
      const pV = new Float32Array(3 * xV.count),
        QV = new Float32Array(4 * xV.count);
      yV.forEach(((VV, eV) => {
        pV.set(xV.wb.subarray(3 * VV, 3 * VV + 3), 3 * eV), QV.set(xV.colours.subarray(4 * VV, 4 * VV + 4), 4 * eV)
      })), IV(VV.translucentCells, pV, QV, xV.count), VV.needsRender = !0
    }

    function OV(VV, eV) {
      const xV = (xV, JV, YV) => new wV.Ik(0 === xV ? VV[0] : eV[0], 0 === JV ? VV[1] : eV[1], 0 === YV ? VV[2] : eV[2]),
        JV = [];
      for (const YV of [0, 1])
        for (const VV of [0, 1]) JV.push([xV(0, YV, VV), xV(1, YV, VV)], [xV(YV, 0, VV), xV(YV, 1, VV)], [xV(YV, VV, 0), xV(YV, VV, 1)]);
      return JV
    }

    function Ve(VV) {
      return [Math.sin(VV.heading) * Math.cos(VV.pitch), -Math.sin(VV.pitch), Math.cos(VV.heading) * Math.cos(VV.pitch)]
    }

    function ee(VV) {
      return [Math.cos(VV), 0, -Math.sin(VV)]
    }

    function xe(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: oV,
        pitch: cV
      };
      const YV = [VV.max[0] - VV.min[0], VV.max[1] - VV.min[1], VV.max[2] - VV.min[2]],
        UV = Ve(JV),
        yV = ee(JV.heading),
        pV = ne(UV, yV),
        QV = Math.tan(xV / 2),
        nV = QV * eV;
      let wV = 1;
      for (const ZV of [-YV[0] / 2, YV[0] / 2])
        for (const VV of [-YV[1] / 2, YV[1] / 2])
          for (const eV of [-YV[2] / 2, YV[2] / 2]) {
            const xV = [ZV, VV, eV],
              JV = Qe(xV, UV);
            wV = Math.max(wV, Math.abs(Qe(xV, yV)) / nV - JV, Math.abs(Qe(xV, pV)) / QV - JV)
          }
      return {
        position: ye([VV.min[0] + YV[0] / 2, VV.min[1] + YV[1] / 2, VV.min[2] + YV[2] / 2], pe(UV, -wV * hV)),
        heading: JV.heading,
        pitch: JV.pitch
      }
    }

    function Je(VV, eV, xV) {
      const JV = Ue(VV),
        YV = Ue(xV),
        UV = ye(VV.position, pe(eV, -1)),
        yV = [0, 1, 2].reduce(((VV, eV) => ye(VV, pe(YV[eV], Qe(UV, JV[eV])))), [0, 0, 0]);
      return {
        position: ye(eV, yV),
        heading: xV.heading,
        pitch: xV.pitch
      }
    }

    function Ye(VV) {
      return pe(ye(VV.min, VV.max), .5)
    }

    function Ue(VV) {
      const eV = Ve(VV),
        xV = ee(VV.heading);
      return [eV, xV, ne(eV, xV)]
    }

    function ye(VV, eV) {
      return [VV[0] + eV[0], VV[1] + eV[1], VV[2] + eV[2]]
    }

    function pe(VV, eV) {
      return [VV[0] * eV, VV[1] * eV, VV[2] * eV]
    }

    function Qe(VV, eV) {
      return VV[0] * eV[0] + VV[1] * eV[1] + VV[2] * eV[2]
    }

    function ne(VV, eV) {
      return [VV[1] * eV[2] - VV[2] * eV[1], VV[2] * eV[0] - VV[0] * eV[2], VV[0] * eV[1] - VV[1] * eV[0]]
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);