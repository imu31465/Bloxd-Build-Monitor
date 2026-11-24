export const id = 254;
export const ids = [254];
export const modules = {
  39900: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => ET
    });
    mT(6530);
    var WT = mT(63),
      zT = mT(39907),
      MT = mT(40192),
      gT = mT(40316),
      nT = mT(40362),
      HT = mT(40379),
      kT = mT(37364),
      jT = mT(37185),
      lT = mT(40526),
      LT = mT(40574),
      pT = (mT(40611), mT(1321)),
      BT = mT(208),
      ZT = mT(1288),
      cT = mT(25),
      vT = mT(2856),
      fT = mT(1569),
      qT = mT(1135),
      iT = mT(6524),
      bT = mT(6534),
      OT = mT(4560),
      eT = mT(1188);
    const YT = 1.2,
      JT = .2,
      xT = .0066 * Math.PI / 180,
      dT = new Set(["Escape", "KeyG"]),
      wT = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      tT = "ArrowUp",
      aT = new Set([...Object.keys(wT), tT, "ArrowDown"]),
      yT = 32,
      XT = 1,
      IT = 10,
      QT = "F4",
      sT = "Period",
      FT = Math.PI / 2 - .001,
      PT = Math.PI / 6,
      VT = Math.PI / 6,
      uT = 1.08,
      CT = [{
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
      rT = 24,
      KT = 7,
      ST = 4,
      GT = .01,
      NT = 4;

    function ET(TT) {
      let {
        heatmap: UT,
        scale: mT,
        fullyOpaqueFrom: XT,
        bounds: PT,
        fitBounds: VT,
        schematic: uT,
        controls: CT,
        onStepTime: rT,
        onShowAllTime: KT,
        onTogglePlaying: ST,
        getReadout: NT = null
      } = TT;
      const {
        t: ET
      } = (0, ZT.z)(), {
        clientEscMenuOptions: MU
      } = (0, cT.h)(["clientEscMenuOptions"]), HU = (0, WT.useRef)(null), kU = (0, WT.useRef)(null), jU = (0, WT.useRef)(null), lU = (0, vT.b)(HU), [LU, pU] = (0, WT.useState)(!1), [BU, ZU] = (0, WT.useState)(!1), [cU, vU] = (0, WT.useState)(!0), fU = (0, WT.useRef)(!1), [qU, iU] = (0, WT.useState)(!1), bU = BU || !cU && qU, [OU, eU] = (0, WT.useState)(!1), [YU, JU] = (0, WT.useState)(!0), [xU, dU] = (0, WT.useState)(null), wU = PT.min, [tU, aU] = (0, WT.useState)(wU);
      tU[0] === wU[0] && tU[1] === wU[1] && tU[2] === wU[2] || (aU(wU), null !== xU && dU({
        ...xU,
        position: gU(xU.position, gU(tU, nU(wU, -1)))
      }));
      const yU = (0, WT.useMemo)((() => function(TT) {
          return [TT.max[0] - TT.min[0] + 1, TT.max[1] - TT.min[1] + 1, TT.max[2] - TT.min[2] + 1]
        }(PT)), [PT]),
        XU = (0, WT.useMemo)((() => function(TT, UT) {
          const mT = [],
            WT = [];
          for (const [zT, MT] of Object.entries(TT.frequencies)) {
            const TT = Number(zT);
            for (const [zT, gT] of Object.entries(MT)) {
              const MT = Number(zT);
              for (const [zT, nT] of Object.entries(gT)) nT <= 0 || (mT.push(TT - UT[0], MT - UT[1], Number(zT) - UT[2]), WT.push(nT))
            }
          }
          return {
            positions: Int32Array.from(mT),
            values: Float64Array.from(WT),
            count: WT.length
          }
        }(UT, wU)), [UT, wU]),
        IU = YT * MU.cameraFOV / 100,
        QU = lU.height > 0 ? lU.width / lU.height : 1,
        sU = (0, WT.useMemo)((() => function(TT, UT) {
          return {
            min: [TT.min[0] - UT[0], TT.min[1] - UT[1], TT.min[2] - UT[2]],
            max: [TT.max[0] - UT[0] + 1, TT.max[1] - UT[1] + 1, TT.max[2] - UT[2] + 1]
          }
        }(VT, wU)), [VT, wU]),
        FU = mU(sU, QU, IU),
        PU = null !== xU && void 0 !== xU ? xU : FU,
        VU = (0, WT.useRef)({
          fittedView: FU,
          fieldOfView: IU,
          mouseSensitivity: MU.mouseSensitivity,
          canLock: cU
        });
      VU.current = {
        fittedView: FU,
        fieldOfView: IU,
        mouseSensitivity: MU.mouseSensitivity,
        canLock: cU
      };
      const uU = (0, WT.useMemo)((() => {
          if (!bU) return null;
          const TT = (TT, mT, WT) => {
              var zT, MT, gT;
              return null !== (zT = null === (MT = UT.frequencies[TT + wU[0]]) || void 0 === MT || null === (gT = MT[mT + wU[1]]) || void 0 === gT ? void 0 : gT[WT + wU[2]]) && void 0 !== zT ? zT : 0
            },
            WT = function(TT, UT, mT, WT) {
              let zT = 0,
                MT = 1 / 0;
              for (const lT of [0, 1, 2]) {
                if (0 === UT[lT]) {
                  if (TT[lT] < 0 || TT[lT] > mT[lT]) return null;
                  continue
                }
                const WT = (0 - TT[lT]) / UT[lT],
                  gT = (mT[lT] - TT[lT]) / UT[lT];
                zT = Math.max(zT, Math.min(WT, gT)), MT = Math.min(MT, Math.max(WT, gT))
              }
              if (zT > MT) return null;
              const gT = [0, 1, 2].map((WT => Math.min(mT[WT] - 1, Math.max(0, Math.floor(TT[WT] + UT[WT] * zT))))),
                nT = [0, 1, 2].map((TT => Math.sign(UT[TT]))),
                HT = [0, 1, 2].map((mT => {
                  if (0 === nT[mT]) return 1 / 0;
                  return ((nT[mT] > 0 ? gT[mT] + 1 : gT[mT]) - TT[mT]) / UT[mT]
                })),
                kT = [0, 1, 2].map((TT => 0 === nT[TT] ? 1 / 0 : Math.abs(1 / UT[TT])));
              let jT = null;
              for (;;) {
                const TT = WT(gT[0], gT[1], gT[2]);
                if (TT >= 1) return gT;
                TT > 0 && (jT = [gT[0], gT[1], gT[2]]);
                const UT = HT[0] < HT[1] ? HT[0] < HT[2] ? 0 : 2 : HT[1] < HT[2] ? 1 : 2;
                if (HT[UT] > MT) return jT;
                if (gT[UT] += nT[UT], HT[UT] += kT[UT], gT[UT] < 0 || gT[UT] >= mT[UT]) return jT
              }
            }(PU.position, TU(PU), yU, ((UT, WT, zT) => (0, iT.v)(TT(UT, WT, zT), mT, XT)));
          return null === WT ? null : {
            x: WT[0] + wU[0],
            y: WT[1] + wU[1],
            z: WT[2] + wU[2],
            value: TT(WT[0], WT[1], WT[2])
          }
        }), [bU, UT, wU, PU, yU, mT, XT]),
        {
          keyHandlers: CU
        } = (0, bT.e)({
          isEnabled: bU,
          claimedKeyCodes: aT,
          gL: TT => {
            dU((UT => function(TT, UT) {
              const mT = [Math.sin(TT.heading), 0, Math.cos(TT.heading)],
                WT = gU(gU(nU(mT, UT.forward), nU(UU(TT.heading), UT.right)), [0, UT.up, 0]);
              return {
                ...TT,
                position: gU(TT.position, WT)
              }
            }(null !== UT && void 0 !== UT ? UT : VU.current.fittedView, TT)))
          },
          onZoomChange: eU
        });
      (0, WT.useEffect)((() => {
        const TT = kU.current;
        if (!TT) return;
        let UT;
        try {
          UT = function(TT, UT) {
            const mT = new zT.b(TT, !0, {
                stencil: !1
              }, !0),
              WT = new MT.b(mT),
              [pT, BT, ZT] = iT.P;
            WT.clearColor = new kT.e(pT / 255, BT / 255, ZT / 255, 1);
            const cT = new gT.b("Heatmap3DCamera", jT.JB.Zero(), WT);
            cT.fov = UT, cT.minZ = .05;
            const vT = new nT.b("Heatmap3DLight", new jT.JB(.4, 1, -.6), WT);
            vT.diffuse = kT.Color3.White(), vT.groundColor = kT.Color3.Black(), vT.specular = kT.Color3.Black();
            const fT = new HT.StandardMaterial("Heatmap3DCellMaterial", WT);
            fT.diffuseColor = new kT.Color3(.4, .4, .4), fT.emissiveColor = new kT.Color3(.62, .62, .62), fT.specularColor = kT.Color3.Black();
            const qT = (0, lT.d)("Heatmap3DCells", {
              size: 1
            }, WT);
            qT.material = fT, qT.QZ = !1, qT.YB = !0, qT.isVisible = !1;
            const bT = (0, lT.d)("Heatmap3DTranslucentCells", {
              size: 1
            }, WT);
            bT.material = fT, bT.hasVertexAlpha = !0, bT.QZ = !1, bT.YB = !0, bT.isVisible = !1;
            const OT = new HT.StandardMaterial("Heatmap3DSchematicMaterial", WT);
            OT.diffuseColor = new kT.Color3(.6, .6, .6), OT.emissiveColor = new kT.Color3(.4, .4, .4), OT.specularColor = kT.Color3.Black();
            const eT = (0, lT.d)("Heatmap3DSchematicBlocks", {
              size: 1
            }, WT);
            eT.material = OT, eT.QZ = !1, eT.YB = !0, eT.isVisible = !1;
            const YT = (0, LT.b)("Heatmap3DTarget", {
              lines: RT([-.52, -.52, -.52], [.52, .52, .52])
            }, WT);
            return YT.color = new kT.Color3(.06, .14, .23), YT.renderingGroupId = 1, YT.QZ = !1, YT.isVisible = !1, {
              engine: mT,
              XZ: WT,
              camera: cT,
              cells: qT,
              translucentCells: bT,
              translucent: {
                fp: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: eT,
              targetOutline: YT,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: UT,
              needsRender: !0
            }
          }(TT, VU.current.fieldOfView)
        } catch (mT) {
          return console.error("Failed to start the 3D heatmap", mT), void pU(!0)
        }
        return jU.current = UT, UT.engine.runRenderLoop((() => {
          const TT = UT.camera;
          TT.fov !== UT.targetFieldOfView && (TT.fov += (UT.targetFieldOfView - TT.fov) * (TT.fov > UT.targetFieldOfView ? .3 : .2), Math.abs(UT.targetFieldOfView - TT.fov) < 5e-4 && (TT.fov = UT.targetFieldOfView), UT.needsRender = !0), UT.needsRender && (UT.XZ.render(), UT.needsRender = !UT.XZ.isReady() || !UT.engine.areAllEffectsReady())
        })), () => {
          jU.current = null, UT.engine.dispose()
        }
      }), []), (0, WT.useEffect)((() => {
        const TT = kU.current;
        if (!TT) return;
        const UT = () => {
            fU.current = !1, ZU(document.pointerLockElement === TT)
          },
          mT = () => {
            fU.current && (fU.current = !1, vU(!1))
          },
          WT = UT => {
            const mT = !VU.current.canLock && document.activeElement === TT && 0 !== (1 & UT.buttons);
            if (document.pointerLockElement !== TT && !mT) return;
            const WT = VU.current.mouseSensitivity * xT;
            dU((TT => function(TT, UT, mT) {
              const WT = 2 * Math.PI;
              return {
                ...TT,
                heading: ((TT.heading + UT) % WT + WT) % WT,
                pitch: Math.max(-FT, Math.min(FT, TT.pitch + mT))
              }
            }(null !== TT && void 0 !== TT ? TT : VU.current.fittedView, UT.movementX * WT, UT.movementY * WT)))
          };
        return document.addEventListener("pointerlockchange", UT), document.addEventListener("pointerlockerror", mT), document.addEventListener("pointermove", WT), () => {
          document.removeEventListener("pointerlockchange", UT), document.removeEventListener("pointerlockerror", mT), document.removeEventListener("pointermove", WT), document.pointerLockElement === TT && (0, OT.d)()
        }
      }), []), (0, WT.useEffect)((() => {
        const TT = jU.current;
        null !== TT && 0 !== lU.width && 0 !== lU.height && (TT.engine.resize(), TT.needsRender = !0)
      }), [lU.width, lU.height]), (0, WT.useEffect)((() => {
        const TT = jU.current;
        null !== TT && (TT.targetFieldOfView = IU * (OU ? JT : 1))
      }), [IU, OU]), (0, WT.useEffect)((() => {
        const TT = jU.current;
        null !== TT && function(TT, UT, mT, WT) {
          const zT = [],
            MT = [],
            gT = [],
            nT = [];
          for (let HT = 0; HT < UT.count; HT++) {
            const TT = UT.values[HT],
              kT = (0, iT.v)(TT, mT, WT);
            if (kT <= 0) continue;
            const [jT, lT, LT] = (0, iT.n)((0, iT.F)(TT, mT)), pT = kT >= 1;
            (pT ? zT : gT).push(UT.positions[3 * HT] + .5, UT.positions[3 * HT + 1] + .5, UT.positions[3 * HT + 2] + .5), (pT ? MT : nT).push(jT / 255, lT / 255, LT / 255, kT)
          }
          oT(TT.cells, Float32Array.from(zT), Float32Array.from(MT), MT.length / 4), TT.translucent = {
            fp: Float32Array.from(gT),
            colours: Float32Array.from(nT),
            count: nT.length / 4
          }, TT.translucentSortedFrom = null, AT(TT), TT.needsRender = !0
        }(TT, XU, mT, XT)
      }), [XU, mT, XT]), (0, WT.useEffect)((() => {
        const TT = jU.current;
        null !== TT && function(TT, UT) {
          TT.chunkGridOrigin = UT, TT.chunkGridCentre = null, DT(TT)
        }(TT, PT.min)
      }), [PT]), (0, WT.useEffect)((() => {
        const TT = jU.current;
        null !== TT && function(TT, UT, mT) {
          const WT = [],
            zT = [];
          if (null !== UT) {
            const {
              positions: TT,
              colours: MT,
              count: gT
            } = UT.surface;
            for (let UT = 0; UT < gT; UT++) {
              const gT = [TT[3 * UT], TT[3 * UT + 1], TT[3 * UT + 2]];
              [0, 1, 2].every((TT => gT[TT] >= mT.min[TT] - yT && gT[TT] <= mT.max[TT] + yT)) && (WT.push(gT[0] - mT.min[0] + .5, gT[1] - mT.min[1] + .5, gT[2] - mT.min[2] + .5), zT.push(MT[3 * UT] / 255, MT[3 * UT + 1] / 255, MT[3 * UT + 2] / 255, 1))
            }
          }
          oT(TT.schematicBlocks, Float32Array.from(WT), Float32Array.from(zT), zT.length / 4), TT.needsRender = !0
        }(TT, uT, PT)
      }), [uT, PT]), (0, WT.useEffect)((() => {
        const TT = jU.current;
        null !== TT && null !== TT.chunkGrid && (TT.chunkGrid.isVisible = YU, TT.needsRender = !0)
      }), [YU, PT]), (0, WT.useEffect)((() => {
        const TT = jU.current;
        null !== TT && function(TT, UT, mT) {
          const {
            camera: WT
          } = TT;
          WT.position.set(UT.position[0], UT.position[1], UT.position[2]), WT.rotation.set(UT.pitch, UT.heading, 0);
          const zT = (IT + 1) * BT.f.cB * Math.sqrt(3);
          WT.maxZ = Math.max(zT, Math.hypot(...gU(UT.position, nU(zU({
            min: [0, 0, 0],
            max: mT
          }), -1))) + 2 * Math.hypot(...mT)), DT(TT), AT(TT), TT.needsRender = !0
        }(TT, PU, yU)
      }), [PU, yU]), (0, WT.useEffect)((() => {
        const TT = jU.current;
        null !== TT && (TT.targetOutline.isVisible = null !== uU, null !== uU && TT.targetOutline.position.set(uU.x - wU[0] + .5, uU.y - wU[1] + .5, uU.z - wU[2] + .5), TT.needsRender = !0)
      }), [uU, wU]);
      return (0, eT.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: HU,
        children: [(0, eT.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: kU,
          style: {
            width: `${lU.width}px`,
            height: `${lU.height}px`
          },
          tabIndex: 0,
          "aria-label": ET("3D heatmap"),
          onClick: () => {
            const TT = kU.current;
            if (null === TT) return;
            if (TT.focus({
                preventScroll: !0
              }), BU || !cU) return;
            const UT = TT.requestPointerLock();
            UT instanceof Promise ? UT.catch((TT => {
              TT instanceof DOMException && ("WrongDocumentError" === TT.name || "NotSupportedError" === TT.name) && vU(!1)
            })) : fU.current = !0
          },
          ...CU,
          onKeyDown: TT => {
            if (bU && dT.has(TT.code)) return TT.preventDefault(), void(() => {
              const TT = kU.current;
              null !== TT && document.pointerLockElement === TT ? (0, OT.d)() : null === TT || void 0 === TT || TT.blur()
            })();
            const UT = wT[TT.code];
            return bU && void 0 !== UT ? (TT.preventDefault(), void rT(UT)) : bU && (0, bT.d)("replayPlayPause", TT.code) && !(0, bT.d)("Zoom", TT.code) ? (TT.preventDefault(), void(TT.repeat || ST())) : bU && TT.code === tT ? (TT.preventDefault(), void KT()) : bU && TT.code === sT ? (TT.preventDefault(), void dU(null)) : bU && TT.code === QT ? (TT.preventDefault(), void JU((TT => !TT))) : void CU.onKeyDown(TT)
          },
          onFocus: () => {
            iU(!0)
          },
          onBlur: () => {
            iU(!1), CU.onBlur()
          }
        }), LU && (0, eT.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: ET("3D view isn't available in this browser.")
        }), bU && (0, eT.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, eT.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: PU.position.map(((TT, UT) => (TT + wU[UT]).toFixed(2))).join(" ")
        }), YU && (0, eT.jsx)(hT, {
          heading: PU.heading,
          pitch: PU.pitch,
          onViewFrom: TT => {
            const UT = nU(TT, -1),
              mT = 0 === UT[1] ? {
                heading: Math.atan2(UT[0], UT[2]),
                pitch: 0
              } : {
                heading: PU.heading,
                pitch: UT[1] < 0 ? FT : -FT
              };
            dU(mU(sU, QU, IU, mT))
          },
          onTurn: (TT, UT) => {
            dU((mT => function(TT, UT, mT, WT) {
              return WU(TT, UT, {
                heading: TT.heading + mT * GT,
                pitch: Math.max(-FT, Math.min(FT, TT.pitch + WT * GT))
              })
            }(null !== mT && void 0 !== mT ? mT : VU.current.fittedView, zU(sU), TT, UT)))
          },
          onFlip: () => {
            dU((TT => function(TT, UT) {
              return WU(TT, UT, {
                heading: TT.heading + Math.PI,
                pitch: -TT.pitch
              })
            }(null !== TT && void 0 !== TT ? TT : VU.current.fittedView, zU(sU))))
          }
        }), null !== uU && (0, eT.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === NT ? ET("studio:heatmapBlockReadout", {
            x: uU.x,
            y: uU.y,
            z: uU.z,
            count: (0, pT.V)(uU.value)
          }) : NT(uU.x, uU.y, uU.z, uU.value)
        }), (0, eT.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [CT, (0, eT.jsx)(fT.L, {
            active: null === xU,
            onClick: () => {
              dU(null)
            },
            children: (0, eT.jsx)(qT.c, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function hT(TT) {
      let {
        heading: UT,
        pitch: mT,
        onViewFrom: zT,
        onTurn: MT,
        onFlip: gT
      } = TT;
      const {
        t: nT
      } = (0, ZT.z)(), HT = (0, WT.useRef)(null), kT = TU({
        heading: UT,
        pitch: mT
      }), jT = UU(UT), lT = kU(kT, jT), LT = rT + KT + 2, pT = CT.flatMap((TT => [1, -1].map((UT => {
        const mT = nU(TT.direction, UT);
        return {
          ...TT,
          sign: UT,
          direction: mT,
          endX: LT + HU(mT, jT) * rT,
          endY: LT - HU(mT, lT) * rT,
          depth: HU(mT, kT)
        }
      })))).sort(((TT, UT) => UT.depth - TT.depth));
      return (0, eT.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * LT,
        height: 2 * LT,
        "aria-hidden": !0,
        onPointerDown: TT => {
          var UT, mT;
          TT.currentTarget.setPointerCapture(TT.pointerId);
          const WT = TT.target,
            zT = WT.getAttribute("data-end");
          HT.current = {
            pointerId: TT.pointerId,
            x: TT.clientX,
            y: TT.clientY,
            travel: 0,
            side: null === zT ? null : null !== (UT = null === (mT = pT[Number(zT)]) || void 0 === mT ? void 0 : mT.direction) && void 0 !== UT ? UT : null,
            isOnMiddle: WT.hasAttribute("data-middle")
          }
        },
        onPointerMove: TT => {
          const UT = HT.current;
          if (null === UT || UT.pointerId !== TT.pointerId) return;
          const mT = TT.clientX - UT.x,
            WT = TT.clientY - UT.y;
          UT.x = TT.clientX, UT.y = TT.clientY, UT.travel += Math.abs(mT) + Math.abs(WT), UT.travel >= NT && MT(mT, WT)
        },
        onPointerUp: TT => {
          const UT = HT.current;
          HT.current = null, null === UT || UT.pointerId !== TT.pointerId || UT.travel >= NT || (null !== UT.side ? zT(UT.side) : UT.isOnMiddle && gT())
        },
        onPointerCancel: () => {
          HT.current = null
        },
        children: [pT.map(((TT, UT) => {
          const mT = TT.sign > 0;
          return (0, eT.jsxs)("g", {
            children: [(0, eT.jsx)("line", {
              x1: LT,
              y1: LT,
              x2: TT.endX,
              y2: TT.endY,
              stroke: TT.colour,
              strokeOpacity: mT ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, eT.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": UT,
              cx: TT.endX,
              cy: TT.endY,
              r: mT ? KT : KT - 1,
              fill: TT.colour,
              fillOpacity: mT ? 1 : .3,
              stroke: TT.colour,
              strokeWidth: mT ? 0 : 1.5,
              children: (0, eT.jsx)("title", {
                children: `${nT("View from")} ${mT?"+":"\u2212"}${TT.name}`
              })
            }), mT && (0, eT.jsx)("text", {
              pointerEvents: "none",
              x: TT.endX,
              y: TT.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: TT.name
            })]
          }, `${mT?"+":"-"}${TT.name}`)
        })), (0, eT.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: LT,
          cy: LT,
          r: ST,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, eT.jsx)("title", {
            children: nT("View from the opposite side")
          })
        })]
      })
    }

    function DT(TT) {
      var UT, mT, WT;
      const {
        chunkGridOrigin: zT,
        camera: MT
      } = TT;
      if (null === zT) return;
      const gT = [MT.position.x, MT.position.y, MT.position.z],
        nT = [0, 2].map((TT => Math.floor((gT[TT] + zT[TT]) / BT.f.cB))),
        HT = TT.chunkGridCentre;
      if (null !== HT && HT.every(((TT, UT) => TT === nT[UT]))) return;
      const lT = null === (UT = null === (mT = TT.chunkGrid) || void 0 === mT ? void 0 : mT.isVisible) || void 0 === UT || UT;
      null === (WT = TT.chunkGrid) || void 0 === WT || WT.dispose();
      const [pT, ZT] = [0, 2].map(((TT, UT) => {
        const mT = [];
        for (let WT = nT[UT] - IT; WT <= nT[UT] + IT + 1; WT++) mT.push(WT * BT.f.cB - zT[TT]);
        return mT
      })), cT = -zT[1], vT = [];
      for (const kT of ZT) vT.push([new jT.JB(pT[0], cT, kT), new jT.JB(pT[pT.length - 1], cT, kT)]);
      for (const kT of pT) vT.push([new jT.JB(kT, cT, ZT[0]), new jT.JB(kT, cT, ZT[ZT.length - 1])]);
      const fT = (0, LT.b)("Heatmap3DChunkGrid", {
        lines: vT
      }, TT.XZ);
      fT.color = new kT.Color3(.45, .6, .78), fT.QZ = !1, fT.isVisible = lT, TT.chunkGrid = fT, TT.chunkGridCentre = nT, TT.needsRender = !0
    }

    function oT(TT, UT, mT, WT) {
      TT.f6("matrix", function(TT, UT) {
        const mT = new Float32Array(16 * UT);
        for (let WT = 0; WT < UT; WT++) {
          const UT = 16 * WT;
          mT[UT] = 1, mT[UT + 5] = 1, mT[UT + 10] = 1, mT[UT + 12] = TT[3 * WT], mT[UT + 13] = TT[3 * WT + 1], mT[UT + 14] = TT[3 * WT + 2], mT[UT + 15] = 1
        }
        return mT
      }(UT, WT), 16, !0), TT.f6("color", mT, 4, !0), TT.isVisible = WT > 0
    }

    function AT(TT) {
      const {
        camera: UT,
        translucent: mT
      } = TT, WT = [UT.position.x, UT.position.y, UT.position.z], zT = TT.translucentSortedFrom;
      if (null !== zT && Math.hypot(WT[0] - zT[0], WT[1] - zT[1], WT[2] - zT[2]) < XT) return;
      TT.translucentSortedFrom = WT;
      const MT = new Float64Array(mT.count),
        gT = new Uint32Array(mT.count);
      for (let kT = 0; kT < mT.count; kT++) {
        const TT = mT.fp[3 * kT] - WT[0],
          UT = mT.fp[3 * kT + 1] - WT[1],
          zT = mT.fp[3 * kT + 2] - WT[2];
        MT[kT] = TT * TT + UT * UT + zT * zT, gT[kT] = kT
      }
      gT.sort(((TT, UT) => MT[UT] - MT[TT]));
      const nT = new Float32Array(3 * mT.count),
        HT = new Float32Array(4 * mT.count);
      gT.forEach(((TT, UT) => {
        nT.set(mT.fp.subarray(3 * TT, 3 * TT + 3), 3 * UT), HT.set(mT.colours.subarray(4 * TT, 4 * TT + 4), 4 * UT)
      })), oT(TT.translucentCells, nT, HT, mT.count), TT.needsRender = !0
    }

    function RT(TT, UT) {
      const mT = (mT, WT, zT) => new jT.JB(0 === mT ? TT[0] : UT[0], 0 === WT ? TT[1] : UT[1], 0 === zT ? TT[2] : UT[2]),
        WT = [];
      for (const zT of [0, 1])
        for (const TT of [0, 1]) WT.push([mT(0, zT, TT), mT(1, zT, TT)], [mT(zT, 0, TT), mT(zT, 1, TT)], [mT(zT, TT, 0), mT(zT, TT, 1)]);
      return WT
    }

    function TU(TT) {
      return [Math.sin(TT.heading) * Math.cos(TT.pitch), -Math.sin(TT.pitch), Math.cos(TT.heading) * Math.cos(TT.pitch)]
    }

    function UU(TT) {
      return [Math.cos(TT), 0, -Math.sin(TT)]
    }

    function mU(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: PT,
        pitch: VT
      };
      const zT = [TT.max[0] - TT.min[0], TT.max[1] - TT.min[1], TT.max[2] - TT.min[2]],
        MT = TU(WT),
        gT = UU(WT.heading),
        nT = kU(MT, gT),
        HT = Math.tan(mT / 2),
        kT = HT * UT;
      let jT = 1;
      for (const lT of [-zT[0] / 2, zT[0] / 2])
        for (const TT of [-zT[1] / 2, zT[1] / 2])
          for (const UT of [-zT[2] / 2, zT[2] / 2]) {
            const mT = [lT, TT, UT],
              WT = HU(mT, MT);
            jT = Math.max(jT, Math.abs(HU(mT, gT)) / kT - WT, Math.abs(HU(mT, nT)) / HT - WT)
          }
      return {
        position: gU([TT.min[0] + zT[0] / 2, TT.min[1] + zT[1] / 2, TT.min[2] + zT[2] / 2], nU(MT, -jT * uT)),
        heading: WT.heading,
        pitch: WT.pitch
      }
    }

    function WU(TT, UT, mT) {
      const WT = MU(TT),
        zT = MU(mT),
        MT = gU(TT.position, nU(UT, -1)),
        gT = [0, 1, 2].reduce(((TT, UT) => gU(TT, nU(zT[UT], HU(MT, WT[UT])))), [0, 0, 0]);
      return {
        position: gU(UT, gT),
        heading: mT.heading,
        pitch: mT.pitch
      }
    }

    function zU(TT) {
      return nU(gU(TT.min, TT.max), .5)
    }

    function MU(TT) {
      const UT = TU(TT),
        mT = UU(TT.heading);
      return [UT, mT, kU(UT, mT)]
    }

    function gU(TT, UT) {
      return [TT[0] + UT[0], TT[1] + UT[1], TT[2] + UT[2]]
    }

    function nU(TT, UT) {
      return [TT[0] * UT, TT[1] * UT, TT[2] * UT]
    }

    function HU(TT, UT) {
      return TT[0] * UT[0] + TT[1] * UT[1] + TT[2] * UT[2]
    }

    function kU(TT, UT) {
      return [TT[1] * UT[2] - TT[2] * UT[1], TT[2] * UT[0] - TT[0] * UT[2], TT[0] * UT[1] - TT[1] * UT[0]]
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);