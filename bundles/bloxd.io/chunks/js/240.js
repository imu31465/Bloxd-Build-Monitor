export const id = 240;
export const ids = [240];
export const modules = {
  38959: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => eD
    });
    cD(6195);
    var ID = cD(53),
      pD = cD(38968),
      iD = cD(39231),
      fD = cD(39347),
      bD = cD(39382),
      QD = cD(39396),
      wD = cD(36613),
      SD = cD(36440),
      BD = cD(39526),
      yD = cD(39576),
      MD = (cD(39602), cD(1221)),
      tD = cD(194),
      ZD = cD(1192),
      oD = cD(16),
      vD = cD(2621),
      ND = cD(1442),
      gD = cD(1064),
      XD = cD(6187),
      mD = cD(6197),
      nD = cD(4247),
      OD = cD(1093);
    const PD = 1.2,
      HD = .2,
      UD = .0066 * Math.PI / 180,
      xD = new Set(["Escape", "KeyG"]),
      qD = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      JD = "ArrowUp",
      KD = new Set([...Object.keys(qD), JD, "ArrowDown"]),
      aD = 32,
      VD = 1,
      zD = 10,
      jD = "F4",
      lD = "Period",
      LD = Math.PI / 2 - .001,
      TD = Math.PI / 6,
      GD = Math.PI / 6,
      RD = 1.08,
      kD = [{
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
      dD = 24,
      YD = 7,
      WD = 4,
      sD = .01,
      ED = 4;

    function eD(DD) {
      let {
        heatmap: CD,
        scale: cD,
        fullyOpaqueFrom: VD,
        bounds: TD,
        fitBounds: GD,
        schematic: RD,
        controls: kD,
        onStepTime: dD,
        onShowAllTime: YD,
        onTogglePlaying: WD,
        getReadout: ED = null
      } = DD;
      const {
        t: eD
      } = (0, ZD.F)(), {
        clientEscMenuOptions: iC
      } = (0, oD.o)(["clientEscMenuOptions"]), QC = (0, ID.useRef)(null), wC = (0, ID.useRef)(null), SC = (0, ID.useRef)(null), BC = (0, vD.e)(QC), [yC, MC] = (0, ID.useState)(!1), [tC, ZC] = (0, ID.useState)(!1), [oC, vC] = (0, ID.useState)(!0), NC = (0, ID.useRef)(!1), [gC, XC] = (0, ID.useState)(!1), mC = tC || !oC && gC, [nC, OC] = (0, ID.useState)(!1), [PC, HC] = (0, ID.useState)(!0), [UC, xC] = (0, ID.useState)(null), qC = TD.min, [JC, KC] = (0, ID.useState)(qC);
      JC[0] === qC[0] && JC[1] === qC[1] && JC[2] === qC[2] || (KC(qC), null !== UC && xC({
        ...UC,
        position: fC(UC.position, fC(JC, bC(qC, -1)))
      }));
      const aC = (0, ID.useMemo)((() => function(DD) {
          return [DD.max[0] - DD.min[0] + 1, DD.max[1] - DD.min[1] + 1, DD.max[2] - DD.min[2] + 1]
        }(TD)), [TD]),
        VC = (0, ID.useMemo)((() => function(DD, CD) {
          const cD = [],
            ID = [];
          for (const [pD, iD] of Object.entries(DD.frequencies)) {
            const DD = Number(pD);
            for (const [pD, fD] of Object.entries(iD)) {
              const iD = Number(pD);
              for (const [pD, bD] of Object.entries(fD)) bD <= 0 || (cD.push(DD - CD[0], iD - CD[1], Number(pD) - CD[2]), ID.push(bD))
            }
          }
          return {
            positions: Int32Array.from(cD),
            values: Float64Array.from(ID),
            count: ID.length
          }
        }(CD, qC)), [CD, qC]),
        zC = PD * iC.cameraFOV / 100,
        jC = BC.height > 0 ? BC.width / BC.height : 1,
        lC = (0, ID.useMemo)((() => function(DD, CD) {
          return {
            min: [DD.min[0] - CD[0], DD.min[1] - CD[1], DD.min[2] - CD[2]],
            max: [DD.max[0] - CD[0] + 1, DD.max[1] - CD[1] + 1, DD.max[2] - CD[2] + 1]
          }
        }(GD, qC)), [GD, qC]),
        LC = cC(lC, jC, zC),
        TC = null !== UC && void 0 !== UC ? UC : LC,
        GC = (0, ID.useRef)({
          fittedView: LC,
          fieldOfView: zC,
          mouseSensitivity: iC.mouseSensitivity,
          canLock: oC
        });
      GC.current = {
        fittedView: LC,
        fieldOfView: zC,
        mouseSensitivity: iC.mouseSensitivity,
        canLock: oC
      };
      const RC = (0, ID.useMemo)((() => {
          if (!mC) return null;
          const DD = (DD, cD, ID) => {
              var pD, iD, fD;
              return null !== (pD = null === (iD = CD.frequencies[DD + qC[0]]) || void 0 === iD || null === (fD = iD[cD + qC[1]]) || void 0 === fD ? void 0 : fD[ID + qC[2]]) && void 0 !== pD ? pD : 0
            },
            ID = function(DD, CD, cD, ID) {
              let pD = 0,
                iD = 1 / 0;
              for (const BD of [0, 1, 2]) {
                if (0 === CD[BD]) {
                  if (DD[BD] < 0 || DD[BD] > cD[BD]) return null;
                  continue
                }
                const ID = (0 - DD[BD]) / CD[BD],
                  fD = (cD[BD] - DD[BD]) / CD[BD];
                pD = Math.max(pD, Math.min(ID, fD)), iD = Math.min(iD, Math.max(ID, fD))
              }
              if (pD > iD) return null;
              const fD = [0, 1, 2].map((ID => Math.min(cD[ID] - 1, Math.max(0, Math.floor(DD[ID] + CD[ID] * pD))))),
                bD = [0, 1, 2].map((DD => Math.sign(CD[DD]))),
                QD = [0, 1, 2].map((cD => {
                  if (0 === bD[cD]) return 1 / 0;
                  return ((bD[cD] > 0 ? fD[cD] + 1 : fD[cD]) - DD[cD]) / CD[cD]
                })),
                wD = [0, 1, 2].map((DD => 0 === bD[DD] ? 1 / 0 : Math.abs(1 / CD[DD])));
              let SD = null;
              for (;;) {
                const DD = ID(fD[0], fD[1], fD[2]);
                if (DD >= 1) return fD;
                DD > 0 && (SD = [fD[0], fD[1], fD[2]]);
                const CD = QD[0] < QD[1] ? QD[0] < QD[2] ? 0 : 2 : QD[1] < QD[2] ? 1 : 2;
                if (QD[CD] > iD) return SD;
                if (fD[CD] += bD[CD], QD[CD] += wD[CD], fD[CD] < 0 || fD[CD] >= cD[CD]) return SD
              }
            }(TC.position, DC(TC), aC, ((CD, ID, pD) => (0, XD.s)(DD(CD, ID, pD), cD, VD)));
          return null === ID ? null : {
            x: ID[0] + qC[0],
            y: ID[1] + qC[1],
            z: ID[2] + qC[2],
            value: DD(ID[0], ID[1], ID[2])
          }
        }), [mC, CD, qC, TC, aC, cD, VD]),
        {
          keyHandlers: kC
        } = (0, mD.f)({
          isEnabled: mC,
          claimedKeyCodes: KD,
          Jy: DD => {
            xC((CD => function(DD, CD) {
              const cD = [Math.sin(DD.heading), 0, Math.cos(DD.heading)],
                ID = fC(fC(bC(cD, CD.forward), bC(CC(DD.heading), CD.right)), [0, CD.up, 0]);
              return {
                ...DD,
                position: fC(DD.position, ID)
              }
            }(null !== CD && void 0 !== CD ? CD : GC.current.fittedView, DD)))
          },
          onZoomChange: OC
        });
      (0, ID.useEffect)((() => {
        const DD = wC.current;
        if (!DD) return;
        let CD;
        try {
          CD = function(DD, CD) {
            const cD = new pD.e(DD, !0, {
                stencil: !1
              }, !0),
              ID = new iD.d(cD),
              [MD, tD, ZD] = XD.J;
            ID.clearColor = new wD.c(MD / 255, tD / 255, ZD / 255, 1);
            const oD = new fD.c("Heatmap3DCamera", SD.cZ.Zero(), ID);
            oD.fov = CD, oD.minZ = .05;
            const vD = new bD.c("Heatmap3DLight", new SD.cZ(.4, 1, -.6), ID);
            vD.diffuse = wD.Color3.White(), vD.groundColor = wD.Color3.Black(), vD.specular = wD.Color3.Black();
            const ND = new QD.StandardMaterial("Heatmap3DCellMaterial", ID);
            ND.diffuseColor = new wD.Color3(.4, .4, .4), ND.emissiveColor = new wD.Color3(.62, .62, .62), ND.specularColor = wD.Color3.Black();
            const gD = (0, BD.e)("Heatmap3DCells", {
              size: 1
            }, ID);
            gD.material = ND, gD.yo = !1, gD.CZ = !0, gD.isVisible = !1;
            const mD = (0, BD.e)("Heatmap3DTranslucentCells", {
              size: 1
            }, ID);
            mD.material = ND, mD.hasVertexAlpha = !0, mD.yo = !1, mD.CZ = !0, mD.isVisible = !1;
            const nD = new QD.StandardMaterial("Heatmap3DSchematicMaterial", ID);
            nD.diffuseColor = new wD.Color3(.6, .6, .6), nD.emissiveColor = new wD.Color3(.4, .4, .4), nD.specularColor = wD.Color3.Black();
            const OD = (0, BD.e)("Heatmap3DSchematicBlocks", {
              size: 1
            }, ID);
            OD.material = nD, OD.yo = !1, OD.CZ = !0, OD.isVisible = !1;
            const PD = (0, yD.c)("Heatmap3DTarget", {
              lines: FD([-.52, -.52, -.52], [.52, .52, .52])
            }, ID);
            return PD.color = new wD.Color3(.06, .14, .23), PD.renderingGroupId = 1, PD.yo = !1, PD.isVisible = !1, {
              engine: cD,
              wo: ID,
              camera: oD,
              cells: gD,
              translucentCells: mD,
              translucent: {
                wi: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: OD,
              targetOutline: PD,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: CD,
              needsRender: !0
            }
          }(DD, GC.current.fieldOfView)
        } catch (cD) {
          return console.error("Failed to start the 3D heatmap", cD), void MC(!0)
        }
        return SC.current = CD, CD.engine.runRenderLoop((() => {
          const DD = CD.camera;
          DD.fov !== CD.targetFieldOfView && (DD.fov += (CD.targetFieldOfView - DD.fov) * (DD.fov > CD.targetFieldOfView ? .3 : .2), Math.abs(CD.targetFieldOfView - DD.fov) < 5e-4 && (DD.fov = CD.targetFieldOfView), CD.needsRender = !0), CD.needsRender && (CD.wo.render(), CD.needsRender = !CD.wo.isReady() || !CD.engine.areAllEffectsReady())
        })), () => {
          SC.current = null, CD.engine.dispose()
        }
      }), []), (0, ID.useEffect)((() => {
        const DD = wC.current;
        if (!DD) return;
        const CD = () => {
            NC.current = !1, ZC(document.pointerLockElement === DD)
          },
          cD = () => {
            NC.current && (NC.current = !1, vC(!1))
          },
          ID = CD => {
            const cD = !GC.current.canLock && document.activeElement === DD && 0 !== (1 & CD.buttons);
            if (document.pointerLockElement !== DD && !cD) return;
            const ID = GC.current.mouseSensitivity * UD;
            xC((DD => function(DD, CD, cD) {
              const ID = 2 * Math.PI;
              return {
                ...DD,
                heading: ((DD.heading + CD) % ID + ID) % ID,
                pitch: Math.max(-LD, Math.min(LD, DD.pitch + cD))
              }
            }(null !== DD && void 0 !== DD ? DD : GC.current.fittedView, CD.movementX * ID, CD.movementY * ID)))
          };
        return document.addEventListener("pointerlockchange", CD), document.addEventListener("pointerlockerror", cD), document.addEventListener("pointermove", ID), () => {
          document.removeEventListener("pointerlockchange", CD), document.removeEventListener("pointerlockerror", cD), document.removeEventListener("pointermove", ID), document.pointerLockElement === DD && (0, nD.b)()
        }
      }), []), (0, ID.useEffect)((() => {
        const DD = SC.current;
        null !== DD && 0 !== BC.width && 0 !== BC.height && (DD.engine.resize(), DD.needsRender = !0)
      }), [BC.width, BC.height]), (0, ID.useEffect)((() => {
        const DD = SC.current;
        null !== DD && (DD.targetFieldOfView = zC * (nC ? HD : 1))
      }), [zC, nC]), (0, ID.useEffect)((() => {
        const DD = SC.current;
        null !== DD && function(DD, CD, cD, ID) {
          const pD = [],
            iD = [],
            fD = [],
            bD = [];
          for (let QD = 0; QD < CD.count; QD++) {
            const DD = CD.values[QD],
              wD = (0, XD.s)(DD, cD, ID);
            if (wD <= 0) continue;
            const [SD, BD, yD] = (0, XD.m)((0, XD.A)(DD, cD)), MD = wD >= 1;
            (MD ? pD : fD).push(CD.positions[3 * QD] + .5, CD.positions[3 * QD + 1] + .5, CD.positions[3 * QD + 2] + .5), (MD ? iD : bD).push(SD / 255, BD / 255, yD / 255, wD)
          }
          rD(DD.cells, Float32Array.from(pD), Float32Array.from(iD), iD.length / 4), DD.translucent = {
            wi: Float32Array.from(fD),
            colours: Float32Array.from(bD),
            count: bD.length / 4
          }, DD.translucentSortedFrom = null, AD(DD), DD.needsRender = !0
        }(DD, VC, cD, VD)
      }), [VC, cD, VD]), (0, ID.useEffect)((() => {
        const DD = SC.current;
        null !== DD && function(DD, CD) {
          DD.chunkGridOrigin = CD, DD.chunkGridCentre = null, hD(DD)
        }(DD, TD.min)
      }), [TD]), (0, ID.useEffect)((() => {
        const DD = SC.current;
        null !== DD && function(DD, CD, cD) {
          const ID = [],
            pD = [];
          if (null !== CD) {
            const {
              positions: DD,
              colours: iD,
              count: fD
            } = CD.surface;
            for (let CD = 0; CD < fD; CD++) {
              const fD = [DD[3 * CD], DD[3 * CD + 1], DD[3 * CD + 2]];
              [0, 1, 2].every((DD => fD[DD] >= cD.min[DD] - aD && fD[DD] <= cD.max[DD] + aD)) && (ID.push(fD[0] - cD.min[0] + .5, fD[1] - cD.min[1] + .5, fD[2] - cD.min[2] + .5), pD.push(iD[3 * CD] / 255, iD[3 * CD + 1] / 255, iD[3 * CD + 2] / 255, 1))
            }
          }
          rD(DD.schematicBlocks, Float32Array.from(ID), Float32Array.from(pD), pD.length / 4), DD.needsRender = !0
        }(DD, RD, TD)
      }), [RD, TD]), (0, ID.useEffect)((() => {
        const DD = SC.current;
        null !== DD && null !== DD.chunkGrid && (DD.chunkGrid.isVisible = PC, DD.needsRender = !0)
      }), [PC, TD]), (0, ID.useEffect)((() => {
        const DD = SC.current;
        null !== DD && function(DD, CD, cD) {
          const {
            camera: ID
          } = DD;
          ID.position.set(CD.position[0], CD.position[1], CD.position[2]), ID.rotation.set(CD.pitch, CD.heading, 0);
          const pD = (zD + 1) * tD.h.Wt * Math.sqrt(3);
          ID.maxZ = Math.max(pD, Math.hypot(...fC(CD.position, bC(pC({
            min: [0, 0, 0],
            max: cD
          }), -1))) + 2 * Math.hypot(...cD)), hD(DD), AD(DD), DD.needsRender = !0
        }(DD, TC, aC)
      }), [TC, aC]), (0, ID.useEffect)((() => {
        const DD = SC.current;
        null !== DD && (DD.targetOutline.isVisible = null !== RC, null !== RC && DD.targetOutline.position.set(RC.x - qC[0] + .5, RC.y - qC[1] + .5, RC.z - qC[2] + .5), DD.needsRender = !0)
      }), [RC, qC]);
      return (0, OD.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: QC,
        children: [(0, OD.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: wC,
          style: {
            width: `${BC.width}px`,
            height: `${BC.height}px`
          },
          tabIndex: 0,
          "aria-label": eD("3D heatmap"),
          onClick: () => {
            const DD = wC.current;
            if (null === DD) return;
            if (DD.focus({
                preventScroll: !0
              }), tC || !oC) return;
            const CD = DD.requestPointerLock();
            CD instanceof Promise ? CD.catch((DD => {
              DD instanceof DOMException && ("WrongDocumentError" === DD.name || "NotSupportedError" === DD.name) && vC(!1)
            })) : NC.current = !0
          },
          ...kC,
          onKeyDown: DD => {
            if (mC && xD.has(DD.code)) return DD.preventDefault(), void(() => {
              const DD = wC.current;
              null !== DD && document.pointerLockElement === DD ? (0, nD.b)() : null === DD || void 0 === DD || DD.blur()
            })();
            const CD = qD[DD.code];
            return mC && void 0 !== CD ? (DD.preventDefault(), void dD(CD)) : mC && (0, mD.e)("replayPlayPause", DD.code) && !(0, mD.e)("Zoom", DD.code) ? (DD.preventDefault(), void(DD.repeat || WD())) : mC && DD.code === JD ? (DD.preventDefault(), void YD()) : mC && DD.code === lD ? (DD.preventDefault(), void xC(null)) : mC && DD.code === jD ? (DD.preventDefault(), void HC((DD => !DD))) : void kC.onKeyDown(DD)
          },
          onFocus: () => {
            XC(!0)
          },
          onBlur: () => {
            XC(!1), kC.onBlur()
          }
        }), yC && (0, OD.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: eD("3D view isn't available in this browser.")
        }), mC && (0, OD.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, OD.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: TC.position.map(((DD, CD) => (DD + qC[CD]).toFixed(2))).join(" ")
        }), PC && (0, OD.jsx)(uD, {
          heading: TC.heading,
          pitch: TC.pitch,
          onViewFrom: DD => {
            const CD = bC(DD, -1),
              cD = 0 === CD[1] ? {
                heading: Math.atan2(CD[0], CD[2]),
                pitch: 0
              } : {
                heading: TC.heading,
                pitch: CD[1] < 0 ? LD : -LD
              };
            xC(cC(lC, jC, zC, cD))
          },
          onTurn: (DD, CD) => {
            xC((cD => function(DD, CD, cD, ID) {
              return IC(DD, CD, {
                heading: DD.heading + cD * sD,
                pitch: Math.max(-LD, Math.min(LD, DD.pitch + ID * sD))
              })
            }(null !== cD && void 0 !== cD ? cD : GC.current.fittedView, pC(lC), DD, CD)))
          },
          onFlip: () => {
            xC((DD => function(DD, CD) {
              return IC(DD, CD, {
                heading: DD.heading + Math.PI,
                pitch: -DD.pitch
              })
            }(null !== DD && void 0 !== DD ? DD : GC.current.fittedView, pC(lC))))
          }
        }), null !== RC && (0, OD.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === ED ? eD("studio:heatmapBlockReadout", {
            x: RC.x,
            y: RC.y,
            z: RC.z,
            count: (0, MD.S)(RC.value)
          }) : ED(RC.x, RC.y, RC.z, RC.value)
        }), (0, OD.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [kD, (0, OD.jsx)(ND.P, {
            active: null === UC,
            onClick: () => {
              xC(null)
            },
            children: (0, OD.jsx)(gD.c, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function uD(DD) {
      let {
        heading: CD,
        pitch: cD,
        onViewFrom: pD,
        onTurn: iD,
        onFlip: fD
      } = DD;
      const {
        t: bD
      } = (0, ZD.F)(), QD = (0, ID.useRef)(null), wD = DC({
        heading: CD,
        pitch: cD
      }), SD = CC(CD), BD = wC(wD, SD), yD = dD + YD + 2, MD = kD.flatMap((DD => [1, -1].map((CD => {
        const cD = bC(DD.direction, CD);
        return {
          ...DD,
          sign: CD,
          direction: cD,
          endX: yD + QC(cD, SD) * dD,
          endY: yD - QC(cD, BD) * dD,
          depth: QC(cD, wD)
        }
      })))).sort(((DD, CD) => CD.depth - DD.depth));
      return (0, OD.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * yD,
        height: 2 * yD,
        "aria-hidden": !0,
        onPointerDown: DD => {
          var CD, cD;
          DD.currentTarget.setPointerCapture(DD.pointerId);
          const ID = DD.target,
            pD = ID.getAttribute("data-end");
          QD.current = {
            pointerId: DD.pointerId,
            x: DD.clientX,
            y: DD.clientY,
            travel: 0,
            side: null === pD ? null : null !== (CD = null === (cD = MD[Number(pD)]) || void 0 === cD ? void 0 : cD.direction) && void 0 !== CD ? CD : null,
            isOnMiddle: ID.hasAttribute("data-middle")
          }
        },
        onPointerMove: DD => {
          const CD = QD.current;
          if (null === CD || CD.pointerId !== DD.pointerId) return;
          const cD = DD.clientX - CD.x,
            ID = DD.clientY - CD.y;
          CD.x = DD.clientX, CD.y = DD.clientY, CD.travel += Math.abs(cD) + Math.abs(ID), CD.travel >= ED && iD(cD, ID)
        },
        onPointerUp: DD => {
          const CD = QD.current;
          QD.current = null, null === CD || CD.pointerId !== DD.pointerId || CD.travel >= ED || (null !== CD.side ? pD(CD.side) : CD.isOnMiddle && fD())
        },
        onPointerCancel: () => {
          QD.current = null
        },
        children: [MD.map(((DD, CD) => {
          const cD = DD.sign > 0;
          return (0, OD.jsxs)("g", {
            children: [(0, OD.jsx)("line", {
              x1: yD,
              y1: yD,
              x2: DD.endX,
              y2: DD.endY,
              stroke: DD.colour,
              strokeOpacity: cD ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, OD.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": CD,
              cx: DD.endX,
              cy: DD.endY,
              r: cD ? YD : YD - 1,
              fill: DD.colour,
              fillOpacity: cD ? 1 : .3,
              stroke: DD.colour,
              strokeWidth: cD ? 0 : 1.5,
              children: (0, OD.jsx)("title", {
                children: `${bD("View from")} ${cD?"+":"\u2212"}${DD.name}`
              })
            }), cD && (0, OD.jsx)("text", {
              pointerEvents: "none",
              x: DD.endX,
              y: DD.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: DD.name
            })]
          }, `${cD?"+":"-"}${DD.name}`)
        })), (0, OD.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: yD,
          cy: yD,
          r: WD,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, OD.jsx)("title", {
            children: bD("View from the opposite side")
          })
        })]
      })
    }

    function hD(DD) {
      var CD, cD, ID;
      const {
        chunkGridOrigin: pD,
        camera: iD
      } = DD;
      if (null === pD) return;
      const fD = [iD.position.x, iD.position.y, iD.position.z],
        bD = [0, 2].map((DD => Math.floor((fD[DD] + pD[DD]) / tD.h.Wt))),
        QD = DD.chunkGridCentre;
      if (null !== QD && QD.every(((DD, CD) => DD === bD[CD]))) return;
      const BD = null === (CD = null === (cD = DD.chunkGrid) || void 0 === cD ? void 0 : cD.isVisible) || void 0 === CD || CD;
      null === (ID = DD.chunkGrid) || void 0 === ID || ID.dispose();
      const [MD, ZD] = [0, 2].map(((DD, CD) => {
        const cD = [];
        for (let ID = bD[CD] - zD; ID <= bD[CD] + zD + 1; ID++) cD.push(ID * tD.h.Wt - pD[DD]);
        return cD
      })), oD = -pD[1], vD = [];
      for (const wD of ZD) vD.push([new SD.cZ(MD[0], oD, wD), new SD.cZ(MD[MD.length - 1], oD, wD)]);
      for (const wD of MD) vD.push([new SD.cZ(wD, oD, ZD[0]), new SD.cZ(wD, oD, ZD[ZD.length - 1])]);
      const ND = (0, yD.c)("Heatmap3DChunkGrid", {
        lines: vD
      }, DD.wo);
      ND.color = new wD.Color3(.45, .6, .78), ND.yo = !1, ND.isVisible = BD, DD.chunkGrid = ND, DD.chunkGridCentre = bD, DD.needsRender = !0
    }

    function rD(DD, CD, cD, ID) {
      DD.U3("matrix", function(DD, CD) {
        const cD = new Float32Array(16 * CD);
        for (let ID = 0; ID < CD; ID++) {
          const CD = 16 * ID;
          cD[CD] = 1, cD[CD + 5] = 1, cD[CD + 10] = 1, cD[CD + 12] = DD[3 * ID], cD[CD + 13] = DD[3 * ID + 1], cD[CD + 14] = DD[3 * ID + 2], cD[CD + 15] = 1
        }
        return cD
      }(CD, ID), 16, !0), DD.U3("color", cD, 4, !0), DD.isVisible = ID > 0
    }

    function AD(DD) {
      const {
        camera: CD,
        translucent: cD
      } = DD, ID = [CD.position.x, CD.position.y, CD.position.z], pD = DD.translucentSortedFrom;
      if (null !== pD && Math.hypot(ID[0] - pD[0], ID[1] - pD[1], ID[2] - pD[2]) < VD) return;
      DD.translucentSortedFrom = ID;
      const iD = new Float64Array(cD.count),
        fD = new Uint32Array(cD.count);
      for (let wD = 0; wD < cD.count; wD++) {
        const DD = cD.wi[3 * wD] - ID[0],
          CD = cD.wi[3 * wD + 1] - ID[1],
          pD = cD.wi[3 * wD + 2] - ID[2];
        iD[wD] = DD * DD + CD * CD + pD * pD, fD[wD] = wD
      }
      fD.sort(((DD, CD) => iD[CD] - iD[DD]));
      const bD = new Float32Array(3 * cD.count),
        QD = new Float32Array(4 * cD.count);
      fD.forEach(((DD, CD) => {
        bD.set(cD.wi.subarray(3 * DD, 3 * DD + 3), 3 * CD), QD.set(cD.colours.subarray(4 * DD, 4 * DD + 4), 4 * CD)
      })), rD(DD.translucentCells, bD, QD, cD.count), DD.needsRender = !0
    }

    function FD(DD, CD) {
      const cD = (cD, ID, pD) => new SD.cZ(0 === cD ? DD[0] : CD[0], 0 === ID ? DD[1] : CD[1], 0 === pD ? DD[2] : CD[2]),
        ID = [];
      for (const pD of [0, 1])
        for (const DD of [0, 1]) ID.push([cD(0, pD, DD), cD(1, pD, DD)], [cD(pD, 0, DD), cD(pD, 1, DD)], [cD(pD, DD, 0), cD(pD, DD, 1)]);
      return ID
    }

    function DC(DD) {
      return [Math.sin(DD.heading) * Math.cos(DD.pitch), -Math.sin(DD.pitch), Math.cos(DD.heading) * Math.cos(DD.pitch)]
    }

    function CC(DD) {
      return [Math.cos(DD), 0, -Math.sin(DD)]
    }

    function cC(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: TD,
        pitch: GD
      };
      const pD = [DD.max[0] - DD.min[0], DD.max[1] - DD.min[1], DD.max[2] - DD.min[2]],
        iD = DC(ID),
        fD = CC(ID.heading),
        bD = wC(iD, fD),
        QD = Math.tan(cD / 2),
        wD = QD * CD;
      let SD = 1;
      for (const BD of [-pD[0] / 2, pD[0] / 2])
        for (const DD of [-pD[1] / 2, pD[1] / 2])
          for (const CD of [-pD[2] / 2, pD[2] / 2]) {
            const cD = [BD, DD, CD],
              ID = QC(cD, iD);
            SD = Math.max(SD, Math.abs(QC(cD, fD)) / wD - ID, Math.abs(QC(cD, bD)) / QD - ID)
          }
      return {
        position: fC([DD.min[0] + pD[0] / 2, DD.min[1] + pD[1] / 2, DD.min[2] + pD[2] / 2], bC(iD, -SD * RD)),
        heading: ID.heading,
        pitch: ID.pitch
      }
    }

    function IC(DD, CD, cD) {
      const ID = iC(DD),
        pD = iC(cD),
        iD = fC(DD.position, bC(CD, -1)),
        fD = [0, 1, 2].reduce(((DD, CD) => fC(DD, bC(pD[CD], QC(iD, ID[CD])))), [0, 0, 0]);
      return {
        position: fC(CD, fD),
        heading: cD.heading,
        pitch: cD.pitch
      }
    }

    function pC(DD) {
      return bC(fC(DD.min, DD.max), .5)
    }

    function iC(DD) {
      const CD = DC(DD),
        cD = CC(DD.heading);
      return [CD, cD, wC(CD, cD)]
    }

    function fC(DD, CD) {
      return [DD[0] + CD[0], DD[1] + CD[1], DD[2] + CD[2]]
    }

    function bC(DD, CD) {
      return [DD[0] * CD, DD[1] * CD, DD[2] * CD]
    }

    function QC(DD, CD) {
      return DD[0] * CD[0] + DD[1] * CD[1] + DD[2] * CD[2]
    }

    function wC(DD, CD) {
      return [DD[1] * CD[2] - DD[2] * CD[1], DD[2] * CD[0] - DD[0] * CD[2], DD[0] * CD[1] - DD[1] * CD[0]]
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);