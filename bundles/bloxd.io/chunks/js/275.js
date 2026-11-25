export const id = 275;
export const ids = [275];
export const modules = {
  40928: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => IM
    });
    iM(6922);
    var OM = iM(44),
      SM = iM(40931),
      jM = iM(41190),
      aM = iM(41313),
      PM = iM(41358),
      nM = iM(41374),
      QM = iM(38167),
      zM = iM(38034),
      LM = iM(41495),
      mM = iM(41543),
      HM = (iM(41564), iM(1229)),
      hM = iM(181),
      JM = iM(1188),
      dM = iM(19),
      yM = iM(3047),
      lM = iM(1520),
      EM = iM(1398),
      UM = iM(6913),
      GM = iM(6930),
      CM = iM(4830),
      eM = iM(1303);
    const bM = 1.2,
      wM = .2,
      tM = .0066 * Math.PI / 180,
      gM = new Set(["Escape", "KeyG"]),
      uM = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      RM = "ArrowUp",
      pM = new Set([...Object.keys(uM), RM, "ArrowDown"]),
      WM = 32,
      sM = 1,
      DM = 10,
      kM = "F4",
      ZM = "Period",
      oM = Math.PI / 2 - .001,
      fM = Math.PI / 6,
      YM = Math.PI / 6,
      NM = 1.08,
      AM = [{
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
      xM = 24,
      vM = 7,
      FM = 4,
      BM = .01,
      XM = 4;

    function IM(MM) {
      let {
        heatmap: rM,
        scale: iM,
        fullyOpaqueFrom: sM,
        bounds: fM,
        fitBounds: YM,
        schematic: NM,
        controls: AM,
        onStepTime: xM,
        onShowAllTime: vM,
        onTogglePlaying: FM,
        getReadout: XM = null
      } = MM;
      const {
        t: IM
      } = (0, JM.A)(), {
        clientEscMenuOptions: jr
      } = (0, dM.m)(["clientEscMenuOptions"]), nr = (0, OM.useRef)(null), Qr = (0, OM.useRef)(null), zr = (0, OM.useRef)(null), Lr = (0, yM.d)(nr), [mr, Hr] = (0, OM.useState)(!1), [hr, Jr] = (0, OM.useState)(!1), [dr, yr] = (0, OM.useState)(!0), lr = (0, OM.useRef)(!1), [Er, Ur] = (0, OM.useState)(!1), Gr = hr || !dr && Er, [Cr, er] = (0, OM.useState)(!1), [br, wr] = (0, OM.useState)(!0), [tr, gr] = (0, OM.useState)(null), ur = fM.min, [Rr, pr] = (0, OM.useState)(ur);
      Rr[0] === ur[0] && Rr[1] === ur[1] && Rr[2] === ur[2] || (pr(ur), null !== tr && gr({
        ...tr,
        position: ar(tr.position, ar(Rr, Pr(ur, -1)))
      }));
      const Wr = (0, OM.useMemo)((() => function(MM) {
          return [MM.max[0] - MM.min[0] + 1, MM.max[1] - MM.min[1] + 1, MM.max[2] - MM.min[2] + 1]
        }(fM)), [fM]),
        sr = (0, OM.useMemo)((() => function(MM, rM) {
          const iM = [],
            OM = [];
          for (const [SM, jM] of Object.entries(MM.frequencies)) {
            const MM = Number(SM);
            for (const [SM, aM] of Object.entries(jM)) {
              const jM = Number(SM);
              for (const [SM, PM] of Object.entries(aM)) PM <= 0 || (iM.push(MM - rM[0], jM - rM[1], Number(SM) - rM[2]), OM.push(PM))
            }
          }
          return {
            positions: Int32Array.from(iM),
            values: Float64Array.from(OM),
            count: OM.length
          }
        }(rM, ur)), [rM, ur]),
        Dr = bM * jr.cameraFOV / 100,
        kr = Lr.height > 0 ? Lr.width / Lr.height : 1,
        Zr = (0, OM.useMemo)((() => function(MM, rM) {
          return {
            min: [MM.min[0] - rM[0], MM.min[1] - rM[1], MM.min[2] - rM[2]],
            max: [MM.max[0] - rM[0] + 1, MM.max[1] - rM[1] + 1, MM.max[2] - rM[2] + 1]
          }
        }(YM, ur)), [YM, ur]),
        or = ir(Zr, kr, Dr),
        fr = null !== tr && void 0 !== tr ? tr : or,
        Yr = (0, OM.useRef)({
          fittedView: or,
          fieldOfView: Dr,
          mouseSensitivity: jr.mouseSensitivity,
          canLock: dr
        });
      Yr.current = {
        fittedView: or,
        fieldOfView: Dr,
        mouseSensitivity: jr.mouseSensitivity,
        canLock: dr
      };
      const Nr = (0, OM.useMemo)((() => {
          if (!Gr) return null;
          const MM = (MM, iM, OM) => {
              var SM, jM, aM;
              return null !== (SM = null === (jM = rM.frequencies[MM + ur[0]]) || void 0 === jM || null === (aM = jM[iM + ur[1]]) || void 0 === aM ? void 0 : aM[OM + ur[2]]) && void 0 !== SM ? SM : 0
            },
            OM = function(MM, rM, iM, OM) {
              let SM = 0,
                jM = 1 / 0;
              for (const LM of [0, 1, 2]) {
                if (0 === rM[LM]) {
                  if (MM[LM] < 0 || MM[LM] > iM[LM]) return null;
                  continue
                }
                const OM = (0 - MM[LM]) / rM[LM],
                  aM = (iM[LM] - MM[LM]) / rM[LM];
                SM = Math.max(SM, Math.min(OM, aM)), jM = Math.min(jM, Math.max(OM, aM))
              }
              if (SM > jM) return null;
              const aM = [0, 1, 2].map((OM => Math.min(iM[OM] - 1, Math.max(0, Math.floor(MM[OM] + rM[OM] * SM))))),
                PM = [0, 1, 2].map((MM => Math.sign(rM[MM]))),
                nM = [0, 1, 2].map((iM => {
                  if (0 === PM[iM]) return 1 / 0;
                  return ((PM[iM] > 0 ? aM[iM] + 1 : aM[iM]) - MM[iM]) / rM[iM]
                })),
                QM = [0, 1, 2].map((MM => 0 === PM[MM] ? 1 / 0 : Math.abs(1 / rM[MM])));
              let zM = null;
              for (;;) {
                const MM = OM(aM[0], aM[1], aM[2]);
                if (MM >= 1) return aM;
                MM > 0 && (zM = [aM[0], aM[1], aM[2]]);
                const rM = nM[0] < nM[1] ? nM[0] < nM[2] ? 0 : 2 : nM[1] < nM[2] ? 1 : 2;
                if (nM[rM] > jM) return zM;
                if (aM[rM] += PM[rM], nM[rM] += QM[rM], aM[rM] < 0 || aM[rM] >= iM[rM]) return zM
              }
            }(fr.position, Mr(fr), Wr, ((rM, OM, SM) => (0, UM.x)(MM(rM, OM, SM), iM, sM)));
          return null === OM ? null : {
            x: OM[0] + ur[0],
            y: OM[1] + ur[1],
            z: OM[2] + ur[2],
            value: MM(OM[0], OM[1], OM[2])
          }
        }), [Gr, rM, ur, fr, Wr, iM, sM]),
        {
          keyHandlers: Ar
        } = (0, GM.h)({
          isEnabled: Gr,
          claimedKeyCodes: pM,
          Wm: MM => {
            gr((rM => function(MM, rM) {
              const iM = [Math.sin(MM.heading), 0, Math.cos(MM.heading)],
                OM = ar(ar(Pr(iM, rM.forward), Pr(rr(MM.heading), rM.right)), [0, rM.up, 0]);
              return {
                ...MM,
                position: ar(MM.position, OM)
              }
            }(null !== rM && void 0 !== rM ? rM : Yr.current.fittedView, MM)))
          },
          onZoomChange: er
        });
      (0, OM.useEffect)((() => {
        const MM = Qr.current;
        if (!MM) return;
        let rM;
        try {
          rM = function(MM, rM) {
            const iM = new SM.e(MM, !0, {
                stencil: !1
              }, !0),
              OM = new jM.b(iM),
              [HM, hM, JM] = UM.Q;
            OM.clearColor = new QM.d(HM / 255, hM / 255, JM / 255, 1);
            const dM = new aM.d("Heatmap3DCamera", zM.sh.Zero(), OM);
            dM.fov = rM, dM.minZ = .05;
            const yM = new PM.e("Heatmap3DLight", new zM.sh(.4, 1, -.6), OM);
            yM.diffuse = QM.Color3.White(), yM.groundColor = QM.Color3.Black(), yM.specular = QM.Color3.Black();
            const lM = new nM.StandardMaterial("Heatmap3DCellMaterial", OM);
            lM.diffuseColor = new QM.Color3(.4, .4, .4), lM.emissiveColor = new QM.Color3(.62, .62, .62), lM.specularColor = QM.Color3.Black();
            const EM = (0, LM.e)("Heatmap3DCells", {
              size: 1
            }, OM);
            EM.material = lM, EM.AJ = !1, EM.Wh = !0, EM.isVisible = !1;
            const GM = (0, LM.e)("Heatmap3DTranslucentCells", {
              size: 1
            }, OM);
            GM.material = lM, GM.hasVertexAlpha = !0, GM.AJ = !1, GM.Wh = !0, GM.isVisible = !1;
            const CM = new nM.StandardMaterial("Heatmap3DSchematicMaterial", OM);
            CM.diffuseColor = new QM.Color3(.6, .6, .6), CM.emissiveColor = new QM.Color3(.4, .4, .4), CM.specularColor = QM.Color3.Black();
            const eM = (0, LM.e)("Heatmap3DSchematicBlocks", {
              size: 1
            }, OM);
            eM.material = CM, eM.AJ = !1, eM.Wh = !0, eM.isVisible = !1;
            const bM = (0, mM.b)("Heatmap3DTarget", {
              lines: cM([-.52, -.52, -.52], [.52, .52, .52])
            }, OM);
            return bM.color = new QM.Color3(.06, .14, .23), bM.renderingGroupId = 1, bM.AJ = !1, bM.isVisible = !1, {
              engine: iM,
              YJ: OM,
              camera: dM,
              cells: EM,
              translucentCells: GM,
              translucent: {
                Sd: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: eM,
              targetOutline: bM,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: rM,
              needsRender: !0
            }
          }(MM, Yr.current.fieldOfView)
        } catch (iM) {
          return console.error("Failed to start the 3D heatmap", iM), void Hr(!0)
        }
        return zr.current = rM, rM.engine.runRenderLoop((() => {
          const MM = rM.camera;
          MM.fov !== rM.targetFieldOfView && (MM.fov += (rM.targetFieldOfView - MM.fov) * (MM.fov > rM.targetFieldOfView ? .3 : .2), Math.abs(rM.targetFieldOfView - MM.fov) < 5e-4 && (MM.fov = rM.targetFieldOfView), rM.needsRender = !0), rM.needsRender && (rM.YJ.render(), rM.needsRender = !rM.YJ.isReady() || !rM.engine.areAllEffectsReady())
        })), () => {
          zr.current = null, rM.engine.dispose()
        }
      }), []), (0, OM.useEffect)((() => {
        const MM = Qr.current;
        if (!MM) return;
        const rM = () => {
            lr.current = !1, Jr(document.pointerLockElement === MM)
          },
          iM = () => {
            lr.current && (lr.current = !1, yr(!1))
          },
          OM = rM => {
            const iM = !Yr.current.canLock && document.activeElement === MM && 0 !== (1 & rM.buttons);
            if (document.pointerLockElement !== MM && !iM) return;
            const OM = Yr.current.mouseSensitivity * tM;
            gr((MM => function(MM, rM, iM) {
              const OM = 2 * Math.PI;
              return {
                ...MM,
                heading: ((MM.heading + rM) % OM + OM) % OM,
                pitch: Math.max(-oM, Math.min(oM, MM.pitch + iM))
              }
            }(null !== MM && void 0 !== MM ? MM : Yr.current.fittedView, rM.movementX * OM, rM.movementY * OM)))
          };
        return document.addEventListener("pointerlockchange", rM), document.addEventListener("pointerlockerror", iM), document.addEventListener("pointermove", OM), () => {
          document.removeEventListener("pointerlockchange", rM), document.removeEventListener("pointerlockerror", iM), document.removeEventListener("pointermove", OM), document.pointerLockElement === MM && (0, CM.e)()
        }
      }), []), (0, OM.useEffect)((() => {
        const MM = zr.current;
        null !== MM && 0 !== Lr.width && 0 !== Lr.height && (MM.engine.resize(), MM.needsRender = !0)
      }), [Lr.width, Lr.height]), (0, OM.useEffect)((() => {
        const MM = zr.current;
        null !== MM && (MM.targetFieldOfView = Dr * (Cr ? wM : 1))
      }), [Dr, Cr]), (0, OM.useEffect)((() => {
        const MM = zr.current;
        null !== MM && function(MM, rM, iM, OM) {
          const SM = [],
            jM = [],
            aM = [],
            PM = [];
          for (let nM = 0; nM < rM.count; nM++) {
            const MM = rM.values[nM],
              QM = (0, UM.x)(MM, iM, OM);
            if (QM <= 0) continue;
            const [zM, LM, mM] = (0, UM.o)((0, UM.H)(MM, iM)), HM = QM >= 1;
            (HM ? SM : aM).push(rM.positions[3 * nM] + .5, rM.positions[3 * nM + 1] + .5, rM.positions[3 * nM + 2] + .5), (HM ? jM : PM).push(zM / 255, LM / 255, mM / 255, QM)
          }
          TM(MM.cells, Float32Array.from(SM), Float32Array.from(jM), jM.length / 4), MM.translucent = {
            Sd: Float32Array.from(aM),
            colours: Float32Array.from(PM),
            count: PM.length / 4
          }, MM.translucentSortedFrom = null, VM(MM), MM.needsRender = !0
        }(MM, sr, iM, sM)
      }), [sr, iM, sM]), (0, OM.useEffect)((() => {
        const MM = zr.current;
        null !== MM && function(MM, rM) {
          MM.chunkGridOrigin = rM, MM.chunkGridCentre = null, qM(MM)
        }(MM, fM.min)
      }), [fM]), (0, OM.useEffect)((() => {
        const MM = zr.current;
        null !== MM && function(MM, rM, iM) {
          const OM = [],
            SM = [];
          if (null !== rM) {
            const {
              positions: MM,
              colours: jM,
              count: aM
            } = rM.surface;
            for (let rM = 0; rM < aM; rM++) {
              const aM = [MM[3 * rM], MM[3 * rM + 1], MM[3 * rM + 2]];
              [0, 1, 2].every((MM => aM[MM] >= iM.min[MM] - WM && aM[MM] <= iM.max[MM] + WM)) && (OM.push(aM[0] - iM.min[0] + .5, aM[1] - iM.min[1] + .5, aM[2] - iM.min[2] + .5), SM.push(jM[3 * rM] / 255, jM[3 * rM + 1] / 255, jM[3 * rM + 2] / 255, 1))
            }
          }
          TM(MM.schematicBlocks, Float32Array.from(OM), Float32Array.from(SM), SM.length / 4), MM.needsRender = !0
        }(MM, NM, fM)
      }), [NM, fM]), (0, OM.useEffect)((() => {
        const MM = zr.current;
        null !== MM && null !== MM.chunkGrid && (MM.chunkGrid.isVisible = br, MM.needsRender = !0)
      }), [br, fM]), (0, OM.useEffect)((() => {
        const MM = zr.current;
        null !== MM && function(MM, rM, iM) {
          const {
            camera: OM
          } = MM;
          OM.position.set(rM.position[0], rM.position[1], rM.position[2]), OM.rotation.set(rM.pitch, rM.heading, 0);
          const SM = (DM + 1) * hM.f.HL * Math.sqrt(3);
          OM.maxZ = Math.max(SM, Math.hypot(...ar(rM.position, Pr(Sr({
            min: [0, 0, 0],
            max: iM
          }), -1))) + 2 * Math.hypot(...iM)), qM(MM), VM(MM), MM.needsRender = !0
        }(MM, fr, Wr)
      }), [fr, Wr]), (0, OM.useEffect)((() => {
        const MM = zr.current;
        null !== MM && (MM.targetOutline.isVisible = null !== Nr, null !== Nr && MM.targetOutline.position.set(Nr.x - ur[0] + .5, Nr.y - ur[1] + .5, Nr.z - ur[2] + .5), MM.needsRender = !0)
      }), [Nr, ur]);
      return (0, eM.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: nr,
        children: [(0, eM.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: Qr,
          style: {
            width: `${Lr.width}px`,
            height: `${Lr.height}px`
          },
          tabIndex: 0,
          "aria-label": IM("3D heatmap"),
          onClick: () => {
            const MM = Qr.current;
            if (null === MM) return;
            if (MM.focus({
                preventScroll: !0
              }), hr || !dr) return;
            const rM = MM.requestPointerLock();
            rM instanceof Promise ? rM.catch((MM => {
              MM instanceof DOMException && ("WrongDocumentError" === MM.name || "NotSupportedError" === MM.name) && yr(!1)
            })) : lr.current = !0
          },
          ...Ar,
          onKeyDown: MM => {
            if (Gr && gM.has(MM.code)) return MM.preventDefault(), void(() => {
              const MM = Qr.current;
              null !== MM && document.pointerLockElement === MM ? (0, CM.e)() : null === MM || void 0 === MM || MM.blur()
            })();
            const rM = uM[MM.code];
            return Gr && void 0 !== rM ? (MM.preventDefault(), void xM(rM)) : Gr && (0, GM.e)("replayPlayPause", MM.code) && !(0, GM.e)("Zoom", MM.code) ? (MM.preventDefault(), void(MM.repeat || FM())) : Gr && MM.code === RM ? (MM.preventDefault(), void vM()) : Gr && MM.code === ZM ? (MM.preventDefault(), void gr(null)) : Gr && MM.code === kM ? (MM.preventDefault(), void wr((MM => !MM))) : void Ar.onKeyDown(MM)
          },
          onFocus: () => {
            Ur(!0)
          },
          onBlur: () => {
            Ur(!1), Ar.onBlur()
          }
        }), mr && (0, eM.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: IM("3D view isn't available in this browser.")
        }), Gr && (0, eM.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, eM.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: fr.position.map(((MM, rM) => (MM + ur[rM]).toFixed(2))).join(" ")
        }), br && (0, eM.jsx)(KM, {
          heading: fr.heading,
          pitch: fr.pitch,
          onViewFrom: MM => {
            const rM = Pr(MM, -1),
              iM = 0 === rM[1] ? {
                heading: Math.atan2(rM[0], rM[2]),
                pitch: 0
              } : {
                heading: fr.heading,
                pitch: rM[1] < 0 ? oM : -oM
              };
            gr(ir(Zr, kr, Dr, iM))
          },
          onTurn: (MM, rM) => {
            gr((iM => function(MM, rM, iM, OM) {
              return Or(MM, rM, {
                heading: MM.heading + iM * BM,
                pitch: Math.max(-oM, Math.min(oM, MM.pitch + OM * BM))
              })
            }(null !== iM && void 0 !== iM ? iM : Yr.current.fittedView, Sr(Zr), MM, rM)))
          },
          onFlip: () => {
            gr((MM => function(MM, rM) {
              return Or(MM, rM, {
                heading: MM.heading + Math.PI,
                pitch: -MM.pitch
              })
            }(null !== MM && void 0 !== MM ? MM : Yr.current.fittedView, Sr(Zr))))
          }
        }), null !== Nr && (0, eM.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === XM ? IM("studio:heatmapBlockReadout", {
            x: Nr.x,
            y: Nr.y,
            z: Nr.z,
            count: (0, HM.T)(Nr.value)
          }) : XM(Nr.x, Nr.y, Nr.z, Nr.value)
        }), (0, eM.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [AM, (0, eM.jsx)(lM.V, {
            active: null === tr,
            onClick: () => {
              gr(null)
            },
            children: (0, eM.jsx)(EM.b, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function KM(MM) {
      let {
        heading: rM,
        pitch: iM,
        onViewFrom: SM,
        onTurn: jM,
        onFlip: aM
      } = MM;
      const {
        t: PM
      } = (0, JM.A)(), nM = (0, OM.useRef)(null), QM = Mr({
        heading: rM,
        pitch: iM
      }), zM = rr(rM), LM = Qr(QM, zM), mM = xM + vM + 2, HM = AM.flatMap((MM => [1, -1].map((rM => {
        const iM = Pr(MM.direction, rM);
        return {
          ...MM,
          sign: rM,
          direction: iM,
          endX: mM + nr(iM, zM) * xM,
          endY: mM - nr(iM, LM) * xM,
          depth: nr(iM, QM)
        }
      })))).sort(((MM, rM) => rM.depth - MM.depth));
      return (0, eM.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * mM,
        height: 2 * mM,
        "aria-hidden": !0,
        onPointerDown: MM => {
          var rM, iM;
          MM.currentTarget.setPointerCapture(MM.pointerId);
          const OM = MM.target,
            SM = OM.getAttribute("data-end");
          nM.current = {
            pointerId: MM.pointerId,
            x: MM.clientX,
            y: MM.clientY,
            travel: 0,
            side: null === SM ? null : null !== (rM = null === (iM = HM[Number(SM)]) || void 0 === iM ? void 0 : iM.direction) && void 0 !== rM ? rM : null,
            isOnMiddle: OM.hasAttribute("data-middle")
          }
        },
        onPointerMove: MM => {
          const rM = nM.current;
          if (null === rM || rM.pointerId !== MM.pointerId) return;
          const iM = MM.clientX - rM.x,
            OM = MM.clientY - rM.y;
          rM.x = MM.clientX, rM.y = MM.clientY, rM.travel += Math.abs(iM) + Math.abs(OM), rM.travel >= XM && jM(iM, OM)
        },
        onPointerUp: MM => {
          const rM = nM.current;
          nM.current = null, null === rM || rM.pointerId !== MM.pointerId || rM.travel >= XM || (null !== rM.side ? SM(rM.side) : rM.isOnMiddle && aM())
        },
        onPointerCancel: () => {
          nM.current = null
        },
        children: [HM.map(((MM, rM) => {
          const iM = MM.sign > 0;
          return (0, eM.jsxs)("g", {
            children: [(0, eM.jsx)("line", {
              x1: mM,
              y1: mM,
              x2: MM.endX,
              y2: MM.endY,
              stroke: MM.colour,
              strokeOpacity: iM ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, eM.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": rM,
              cx: MM.endX,
              cy: MM.endY,
              r: iM ? vM : vM - 1,
              fill: MM.colour,
              fillOpacity: iM ? 1 : .3,
              stroke: MM.colour,
              strokeWidth: iM ? 0 : 1.5,
              children: (0, eM.jsx)("title", {
                children: `${PM("View from")} ${iM?"+":"\u2212"}${MM.name}`
              })
            }), iM && (0, eM.jsx)("text", {
              pointerEvents: "none",
              x: MM.endX,
              y: MM.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: MM.name
            })]
          }, `${iM?"+":"-"}${MM.name}`)
        })), (0, eM.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: mM,
          cy: mM,
          r: FM,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, eM.jsx)("title", {
            children: PM("View from the opposite side")
          })
        })]
      })
    }

    function qM(MM) {
      var rM, iM, OM;
      const {
        chunkGridOrigin: SM,
        camera: jM
      } = MM;
      if (null === SM) return;
      const aM = [jM.position.x, jM.position.y, jM.position.z],
        PM = [0, 2].map((MM => Math.floor((aM[MM] + SM[MM]) / hM.f.HL))),
        nM = MM.chunkGridCentre;
      if (null !== nM && nM.every(((MM, rM) => MM === PM[rM]))) return;
      const LM = null === (rM = null === (iM = MM.chunkGrid) || void 0 === iM ? void 0 : iM.isVisible) || void 0 === rM || rM;
      null === (OM = MM.chunkGrid) || void 0 === OM || OM.dispose();
      const [HM, JM] = [0, 2].map(((MM, rM) => {
        const iM = [];
        for (let OM = PM[rM] - DM; OM <= PM[rM] + DM + 1; OM++) iM.push(OM * hM.f.HL - SM[MM]);
        return iM
      })), dM = -SM[1], yM = [];
      for (const QM of JM) yM.push([new zM.sh(HM[0], dM, QM), new zM.sh(HM[HM.length - 1], dM, QM)]);
      for (const QM of HM) yM.push([new zM.sh(QM, dM, JM[0]), new zM.sh(QM, dM, JM[JM.length - 1])]);
      const lM = (0, mM.b)("Heatmap3DChunkGrid", {
        lines: yM
      }, MM.YJ);
      lM.color = new QM.Color3(.45, .6, .78), lM.AJ = !1, lM.isVisible = LM, MM.chunkGrid = lM, MM.chunkGridCentre = PM, MM.needsRender = !0
    }

    function TM(MM, rM, iM, OM) {
      MM.v_("matrix", function(MM, rM) {
        const iM = new Float32Array(16 * rM);
        for (let OM = 0; OM < rM; OM++) {
          const rM = 16 * OM;
          iM[rM] = 1, iM[rM + 5] = 1, iM[rM + 10] = 1, iM[rM + 12] = MM[3 * OM], iM[rM + 13] = MM[3 * OM + 1], iM[rM + 14] = MM[3 * OM + 2], iM[rM + 15] = 1
        }
        return iM
      }(rM, OM), 16, !0), MM.v_("color", iM, 4, !0), MM.isVisible = OM > 0
    }

    function VM(MM) {
      const {
        camera: rM,
        translucent: iM
      } = MM, OM = [rM.position.x, rM.position.y, rM.position.z], SM = MM.translucentSortedFrom;
      if (null !== SM && Math.hypot(OM[0] - SM[0], OM[1] - SM[1], OM[2] - SM[2]) < sM) return;
      MM.translucentSortedFrom = OM;
      const jM = new Float64Array(iM.count),
        aM = new Uint32Array(iM.count);
      for (let QM = 0; QM < iM.count; QM++) {
        const MM = iM.Sd[3 * QM] - OM[0],
          rM = iM.Sd[3 * QM + 1] - OM[1],
          SM = iM.Sd[3 * QM + 2] - OM[2];
        jM[QM] = MM * MM + rM * rM + SM * SM, aM[QM] = QM
      }
      aM.sort(((MM, rM) => jM[rM] - jM[MM]));
      const PM = new Float32Array(3 * iM.count),
        nM = new Float32Array(4 * iM.count);
      aM.forEach(((MM, rM) => {
        PM.set(iM.Sd.subarray(3 * MM, 3 * MM + 3), 3 * rM), nM.set(iM.colours.subarray(4 * MM, 4 * MM + 4), 4 * rM)
      })), TM(MM.translucentCells, PM, nM, iM.count), MM.needsRender = !0
    }

    function cM(MM, rM) {
      const iM = (iM, OM, SM) => new zM.sh(0 === iM ? MM[0] : rM[0], 0 === OM ? MM[1] : rM[1], 0 === SM ? MM[2] : rM[2]),
        OM = [];
      for (const SM of [0, 1])
        for (const MM of [0, 1]) OM.push([iM(0, SM, MM), iM(1, SM, MM)], [iM(SM, 0, MM), iM(SM, 1, MM)], [iM(SM, MM, 0), iM(SM, MM, 1)]);
      return OM
    }

    function Mr(MM) {
      return [Math.sin(MM.heading) * Math.cos(MM.pitch), -Math.sin(MM.pitch), Math.cos(MM.heading) * Math.cos(MM.pitch)]
    }

    function rr(MM) {
      return [Math.cos(MM), 0, -Math.sin(MM)]
    }

    function ir(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: fM,
        pitch: YM
      };
      const SM = [MM.max[0] - MM.min[0], MM.max[1] - MM.min[1], MM.max[2] - MM.min[2]],
        jM = Mr(OM),
        aM = rr(OM.heading),
        PM = Qr(jM, aM),
        nM = Math.tan(iM / 2),
        QM = nM * rM;
      let zM = 1;
      for (const LM of [-SM[0] / 2, SM[0] / 2])
        for (const MM of [-SM[1] / 2, SM[1] / 2])
          for (const rM of [-SM[2] / 2, SM[2] / 2]) {
            const iM = [LM, MM, rM],
              OM = nr(iM, jM);
            zM = Math.max(zM, Math.abs(nr(iM, aM)) / QM - OM, Math.abs(nr(iM, PM)) / nM - OM)
          }
      return {
        position: ar([MM.min[0] + SM[0] / 2, MM.min[1] + SM[1] / 2, MM.min[2] + SM[2] / 2], Pr(jM, -zM * NM)),
        heading: OM.heading,
        pitch: OM.pitch
      }
    }

    function Or(MM, rM, iM) {
      const OM = jr(MM),
        SM = jr(iM),
        jM = ar(MM.position, Pr(rM, -1)),
        aM = [0, 1, 2].reduce(((MM, rM) => ar(MM, Pr(SM[rM], nr(jM, OM[rM])))), [0, 0, 0]);
      return {
        position: ar(rM, aM),
        heading: iM.heading,
        pitch: iM.pitch
      }
    }

    function Sr(MM) {
      return Pr(ar(MM.min, MM.max), .5)
    }

    function jr(MM) {
      const rM = Mr(MM),
        iM = rr(MM.heading);
      return [rM, iM, Qr(rM, iM)]
    }

    function ar(MM, rM) {
      return [MM[0] + rM[0], MM[1] + rM[1], MM[2] + rM[2]]
    }

    function Pr(MM, rM) {
      return [MM[0] * rM, MM[1] * rM, MM[2] * rM]
    }

    function nr(MM, rM) {
      return MM[0] * rM[0] + MM[1] * rM[1] + MM[2] * rM[2]
    }

    function Qr(MM, rM) {
      return [MM[1] * rM[2] - MM[2] * rM[1], MM[2] * rM[0] - MM[0] * rM[2], MM[0] * rM[1] - MM[1] * rM[0]]
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);