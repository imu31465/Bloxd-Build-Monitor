export const id = 285;
export const ids = [285];
export const modules = {
  41350: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => IW
    });
    OW(7436);
    var mW = OW(62),
      EW = OW(41359),
      NW = OW(41604),
      PW = OW(41715),
      LW = OW(41760),
      cW = OW(41782),
      wW = OW(38369),
      tW = OW(38235),
      ZW = OW(41916),
      xW = OW(41966),
      lW = (OW(41997), OW(1217)),
      AW = OW(182),
      bW = OW(1172),
      jW = OW(25),
      UW = OW(3809),
      kW = OW(1532),
      sW = OW(1391),
      MW = OW(7432),
      KW = OW(7442),
      SW = OW(5153),
      YW = OW(1283);
    const yW = 1.2,
      TW = .2,
      JW = .0066 * Math.PI / 180,
      hW = new Set(["Escape", "KeyG"]),
      HW = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      nW = "ArrowUp",
      uW = new Set([...Object.keys(HW), nW, "ArrowDown"]),
      oW = 32,
      dW = 1,
      eW = 10,
      vW = "F4",
      gW = "Period",
      DW = Math.PI / 2 - .001,
      VW = Math.PI / 6,
      pW = Math.PI / 6,
      fW = 1.08,
      CW = [{
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
      XW = 24,
      BW = 7,
      qW = 4,
      RW = .01,
      GW = 4;

    function IW(WW) {
      let {
        heatmap: iW,
        scale: OW,
        fullyOpaqueFrom: dW,
        bounds: VW,
        fitBounds: pW,
        schematic: fW,
        controls: CW,
        onStepTime: XW,
        onShowAllTime: BW,
        onTogglePlaying: qW,
        getReadout: GW = null
      } = WW;
      const {
        t: IW
      } = (0, bW.B)(), {
        clientEscMenuOptions: Ni
      } = (0, jW.p)(["clientEscMenuOptions"]), ci = (0, mW.useRef)(null), wi = (0, mW.useRef)(null), ti = (0, mW.useRef)(null), Zi = (0, UW.d)(ci), [xi, li] = (0, mW.useState)(!1), [Ai, bi] = (0, mW.useState)(!1), [ji, Ui] = (0, mW.useState)(!0), ki = (0, mW.useRef)(!1), [si, Mi] = (0, mW.useState)(!1), Ki = Ai || !ji && si, [Si, Yi] = (0, mW.useState)(!1), [yi, Ti] = (0, mW.useState)(!0), [Ji, Hi] = (0, mW.useState)(null), ni = VW.min, [ui, oi] = (0, mW.useState)(ni);
      ui[0] === ni[0] && ui[1] === ni[1] && ui[2] === ni[2] || (oi(ni), null !== Ji && Hi({
        ...Ji,
        position: Pi(Ji.position, Pi(ui, Li(ni, -1)))
      }));
      const di = (0, mW.useMemo)((() => function(WW) {
          return [WW.max[0] - WW.min[0] + 1, WW.max[1] - WW.min[1] + 1, WW.max[2] - WW.min[2] + 1]
        }(VW)), [VW]),
        ei = (0, mW.useMemo)((() => function(WW, iW) {
          const OW = [],
            mW = [];
          for (const [EW, NW] of Object.entries(WW.frequencies)) {
            const WW = Number(EW);
            for (const [EW, PW] of Object.entries(NW)) {
              const NW = Number(EW);
              for (const [EW, LW] of Object.entries(PW)) LW <= 0 || (OW.push(WW - iW[0], NW - iW[1], Number(EW) - iW[2]), mW.push(LW))
            }
          }
          return {
            positions: Int32Array.from(OW),
            values: Float64Array.from(mW),
            count: mW.length
          }
        }(iW, ni)), [iW, ni]),
        vi = yW * Ni.cameraFOV / 100,
        gi = Zi.height > 0 ? Zi.width / Zi.height : 1,
        Di = (0, mW.useMemo)((() => function(WW, iW) {
          return {
            min: [WW.min[0] - iW[0], WW.min[1] - iW[1], WW.min[2] - iW[2]],
            max: [WW.max[0] - iW[0] + 1, WW.max[1] - iW[1] + 1, WW.max[2] - iW[2] + 1]
          }
        }(pW, ni)), [pW, ni]),
        Vi = Oi(Di, gi, vi),
        fi = null !== Ji && void 0 !== Ji ? Ji : Vi,
        Ci = (0, mW.useRef)({
          fittedView: Vi,
          fieldOfView: vi,
          mouseSensitivity: Ni.mouseSensitivity,
          canLock: ji
        });
      Ci.current = {
        fittedView: Vi,
        fieldOfView: vi,
        mouseSensitivity: Ni.mouseSensitivity,
        canLock: ji
      };
      const Xi = (0, mW.useMemo)((() => {
          if (!Ki) return null;
          const WW = (WW, OW, mW) => {
              var EW, NW, PW;
              return null !== (EW = null === (NW = iW.frequencies[WW + ni[0]]) || void 0 === NW || null === (PW = NW[OW + ni[1]]) || void 0 === PW ? void 0 : PW[mW + ni[2]]) && void 0 !== EW ? EW : 0
            },
            mW = function(WW, iW, OW, mW) {
              let EW = 0,
                NW = 1 / 0;
              for (const ZW of [0, 1, 2]) {
                if (0 === iW[ZW]) {
                  if (WW[ZW] < 0 || WW[ZW] > OW[ZW]) return null;
                  continue
                }
                const mW = (0 - WW[ZW]) / iW[ZW],
                  PW = (OW[ZW] - WW[ZW]) / iW[ZW];
                EW = Math.max(EW, Math.min(mW, PW)), NW = Math.min(NW, Math.max(mW, PW))
              }
              if (EW > NW) return null;
              const PW = [0, 1, 2].map((mW => Math.min(OW[mW] - 1, Math.max(0, Math.floor(WW[mW] + iW[mW] * EW))))),
                LW = [0, 1, 2].map((WW => Math.sign(iW[WW]))),
                cW = [0, 1, 2].map((OW => {
                  if (0 === LW[OW]) return 1 / 0;
                  return ((LW[OW] > 0 ? PW[OW] + 1 : PW[OW]) - WW[OW]) / iW[OW]
                })),
                wW = [0, 1, 2].map((WW => 0 === LW[WW] ? 1 / 0 : Math.abs(1 / iW[WW])));
              let tW = null;
              for (;;) {
                const WW = mW(PW[0], PW[1], PW[2]);
                if (WW >= 1) return PW;
                WW > 0 && (tW = [PW[0], PW[1], PW[2]]);
                const iW = cW[0] < cW[1] ? cW[0] < cW[2] ? 0 : 2 : cW[1] < cW[2] ? 1 : 2;
                if (cW[iW] > NW) return tW;
                if (PW[iW] += LW[iW], cW[iW] += wW[iW], PW[iW] < 0 || PW[iW] >= OW[iW]) return tW
              }
            }(fi.position, Wi(fi), di, ((iW, mW, EW) => (0, MW.z)(WW(iW, mW, EW), OW, dW)));
          return null === mW ? null : {
            x: mW[0] + ni[0],
            y: mW[1] + ni[1],
            z: mW[2] + ni[2],
            value: WW(mW[0], mW[1], mW[2])
          }
        }), [Ki, iW, ni, fi, di, OW, dW]),
        {
          keyHandlers: Bi
        } = (0, KW.d)({
          isEnabled: Ki,
          claimedKeyCodes: uW,
          Xx: WW => {
            Hi((iW => function(WW, iW) {
              const OW = [Math.sin(WW.heading), 0, Math.cos(WW.heading)],
                mW = Pi(Pi(Li(OW, iW.forward), Li(ii(WW.heading), iW.right)), [0, iW.up, 0]);
              return {
                ...WW,
                position: Pi(WW.position, mW)
              }
            }(null !== iW && void 0 !== iW ? iW : Ci.current.fittedView, WW)))
          },
          onZoomChange: Yi
        });
      (0, mW.useEffect)((() => {
        const WW = wi.current;
        if (!WW) return;
        let iW;
        try {
          iW = function(WW, iW) {
            const OW = new EW.c(WW, !0, {
                stencil: !1
              }, !0),
              mW = new NW.c(OW),
              [lW, AW, bW] = MW.O;
            mW.clearColor = new wW.c(lW / 255, AW / 255, bW / 255, 1);
            const jW = new PW.b("Heatmap3DCamera", tW.fA.Zero(), mW);
            jW.fov = iW, jW.minZ = .05;
            const UW = new LW.b("Heatmap3DLight", new tW.fA(.4, 1, -.6), mW);
            UW.diffuse = wW.Color3.White(), UW.groundColor = wW.Color3.Black(), UW.specular = wW.Color3.Black();
            const kW = new cW.StandardMaterial("Heatmap3DCellMaterial", mW);
            kW.diffuseColor = new wW.Color3(.4, .4, .4), kW.emissiveColor = new wW.Color3(.62, .62, .62), kW.specularColor = wW.Color3.Black();
            const sW = (0, ZW.c)("Heatmap3DCells", {
              size: 1
            }, mW);
            sW.material = kW, sW.Fb = !1, sW.pA = !0, sW.isVisible = !1;
            const KW = (0, ZW.c)("Heatmap3DTranslucentCells", {
              size: 1
            }, mW);
            KW.material = kW, KW.hasVertexAlpha = !0, KW.Fb = !1, KW.pA = !0, KW.isVisible = !1;
            const SW = new cW.StandardMaterial("Heatmap3DSchematicMaterial", mW);
            SW.diffuseColor = new wW.Color3(.6, .6, .6), SW.emissiveColor = new wW.Color3(.4, .4, .4), SW.specularColor = wW.Color3.Black();
            const YW = (0, ZW.c)("Heatmap3DSchematicBlocks", {
              size: 1
            }, mW);
            YW.material = SW, YW.Fb = !1, YW.pA = !0, YW.isVisible = !1;
            const yW = (0, xW.e)("Heatmap3DTarget", {
              lines: QW([-.52, -.52, -.52], [.52, .52, .52])
            }, mW);
            return yW.color = new wW.Color3(.06, .14, .23), yW.renderingGroupId = 1, yW.Fb = !1, yW.isVisible = !1, {
              engine: OW,
              rb: mW,
              camera: jW,
              cells: sW,
              translucentCells: KW,
              translucent: {
                Zj: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: YW,
              targetOutline: yW,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: iW,
              needsRender: !0
            }
          }(WW, Ci.current.fieldOfView)
        } catch (OW) {
          return console.error("Failed to start the 3D heatmap", OW), void li(!0)
        }
        return ti.current = iW, iW.engine.runRenderLoop((() => {
          const WW = iW.camera;
          WW.fov !== iW.targetFieldOfView && (WW.fov += (iW.targetFieldOfView - WW.fov) * (WW.fov > iW.targetFieldOfView ? .3 : .2), Math.abs(iW.targetFieldOfView - WW.fov) < 5e-4 && (WW.fov = iW.targetFieldOfView), iW.needsRender = !0), iW.needsRender && (iW.rb.render(), iW.needsRender = !iW.rb.isReady() || !iW.engine.areAllEffectsReady())
        })), () => {
          ti.current = null, iW.engine.dispose()
        }
      }), []), (0, mW.useEffect)((() => {
        const WW = wi.current;
        if (!WW) return;
        const iW = () => {
            ki.current = !1, bi(document.pointerLockElement === WW)
          },
          OW = () => {
            ki.current && (ki.current = !1, Ui(!1))
          },
          mW = iW => {
            const OW = !Ci.current.canLock && document.activeElement === WW && 0 !== (1 & iW.buttons);
            if (document.pointerLockElement !== WW && !OW) return;
            const mW = Ci.current.mouseSensitivity * JW;
            Hi((WW => function(WW, iW, OW) {
              const mW = 2 * Math.PI;
              return {
                ...WW,
                heading: ((WW.heading + iW) % mW + mW) % mW,
                pitch: Math.max(-DW, Math.min(DW, WW.pitch + OW))
              }
            }(null !== WW && void 0 !== WW ? WW : Ci.current.fittedView, iW.movementX * mW, iW.movementY * mW)))
          };
        return document.addEventListener("pointerlockchange", iW), document.addEventListener("pointerlockerror", OW), document.addEventListener("pointermove", mW), () => {
          document.removeEventListener("pointerlockchange", iW), document.removeEventListener("pointerlockerror", OW), document.removeEventListener("pointermove", mW), document.pointerLockElement === WW && (0, SW.e)()
        }
      }), []), (0, mW.useEffect)((() => {
        const WW = ti.current;
        null !== WW && 0 !== Zi.width && 0 !== Zi.height && (WW.engine.resize(), WW.needsRender = !0)
      }), [Zi.width, Zi.height]), (0, mW.useEffect)((() => {
        const WW = ti.current;
        null !== WW && (WW.targetFieldOfView = vi * (Si ? TW : 1))
      }), [vi, Si]), (0, mW.useEffect)((() => {
        const WW = ti.current;
        null !== WW && function(WW, iW, OW, mW) {
          const EW = [],
            NW = [],
            PW = [],
            LW = [];
          for (let cW = 0; cW < iW.count; cW++) {
            const WW = iW.values[cW],
              wW = (0, MW.z)(WW, OW, mW);
            if (wW <= 0) continue;
            const [tW, ZW, xW] = (0, MW.p)((0, MW.G)(WW, OW)), lW = wW >= 1;
            (lW ? EW : PW).push(iW.positions[3 * cW] + .5, iW.positions[3 * cW + 1] + .5, iW.positions[3 * cW + 2] + .5), (lW ? NW : LW).push(tW / 255, ZW / 255, xW / 255, wW)
          }
          zW(WW.cells, Float32Array.from(EW), Float32Array.from(NW), NW.length / 4), WW.translucent = {
            Zj: Float32Array.from(PW),
            colours: Float32Array.from(LW),
            count: LW.length / 4
          }, WW.translucentSortedFrom = null, FW(WW), WW.needsRender = !0
        }(WW, ei, OW, dW)
      }), [ei, OW, dW]), (0, mW.useEffect)((() => {
        const WW = ti.current;
        null !== WW && function(WW, iW) {
          WW.chunkGridOrigin = iW, WW.chunkGridCentre = null, rW(WW)
        }(WW, VW.min)
      }), [VW]), (0, mW.useEffect)((() => {
        const WW = ti.current;
        null !== WW && function(WW, iW, OW) {
          const mW = [],
            EW = [];
          if (null !== iW) {
            const {
              positions: WW,
              colours: NW,
              count: PW
            } = iW.surface;
            for (let iW = 0; iW < PW; iW++) {
              const PW = [WW[3 * iW], WW[3 * iW + 1], WW[3 * iW + 2]];
              [0, 1, 2].every((WW => PW[WW] >= OW.min[WW] - oW && PW[WW] <= OW.max[WW] + oW)) && (mW.push(PW[0] - OW.min[0] + .5, PW[1] - OW.min[1] + .5, PW[2] - OW.min[2] + .5), EW.push(NW[3 * iW] / 255, NW[3 * iW + 1] / 255, NW[3 * iW + 2] / 255, 1))
            }
          }
          zW(WW.schematicBlocks, Float32Array.from(mW), Float32Array.from(EW), EW.length / 4), WW.needsRender = !0
        }(WW, fW, VW)
      }), [fW, VW]), (0, mW.useEffect)((() => {
        const WW = ti.current;
        null !== WW && null !== WW.chunkGrid && (WW.chunkGrid.isVisible = yi, WW.needsRender = !0)
      }), [yi, VW]), (0, mW.useEffect)((() => {
        const WW = ti.current;
        null !== WW && function(WW, iW, OW) {
          const {
            camera: mW
          } = WW;
          mW.position.set(iW.position[0], iW.position[1], iW.position[2]), mW.rotation.set(iW.pitch, iW.heading, 0);
          const EW = (eW + 1) * AW.f.jZ * Math.sqrt(3);
          mW.maxZ = Math.max(EW, Math.hypot(...Pi(iW.position, Li(Ei({
            min: [0, 0, 0],
            max: OW
          }), -1))) + 2 * Math.hypot(...OW)), rW(WW), FW(WW), WW.needsRender = !0
        }(WW, fi, di)
      }), [fi, di]), (0, mW.useEffect)((() => {
        const WW = ti.current;
        null !== WW && (WW.targetOutline.isVisible = null !== Xi, null !== Xi && WW.targetOutline.position.set(Xi.x - ni[0] + .5, Xi.y - ni[1] + .5, Xi.z - ni[2] + .5), WW.needsRender = !0)
      }), [Xi, ni]);
      return (0, YW.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: ci,
        children: [(0, YW.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: wi,
          style: {
            width: `${Zi.width}px`,
            height: `${Zi.height}px`
          },
          tabIndex: 0,
          "aria-label": IW("3D heatmap"),
          onClick: () => {
            const WW = wi.current;
            if (null === WW) return;
            if (WW.focus({
                preventScroll: !0
              }), Ai || !ji) return;
            const iW = WW.requestPointerLock();
            iW instanceof Promise ? iW.catch((WW => {
              WW instanceof DOMException && ("WrongDocumentError" === WW.name || "NotSupportedError" === WW.name) && Ui(!1)
            })) : ki.current = !0
          },
          ...Bi,
          onKeyDown: WW => {
            if (Ki && hW.has(WW.code)) return WW.preventDefault(), void(() => {
              const WW = wi.current;
              null !== WW && document.pointerLockElement === WW ? (0, SW.e)() : null === WW || void 0 === WW || WW.blur()
            })();
            const iW = HW[WW.code];
            return Ki && void 0 !== iW ? (WW.preventDefault(), void XW(iW)) : Ki && (0, KW.c)("replayPlayPause", WW.code) && !(0, KW.c)("Zoom", WW.code) ? (WW.preventDefault(), void(WW.repeat || qW())) : Ki && WW.code === nW ? (WW.preventDefault(), void BW()) : Ki && WW.code === gW ? (WW.preventDefault(), void Hi(null)) : Ki && WW.code === vW ? (WW.preventDefault(), void Ti((WW => !WW))) : void Bi.onKeyDown(WW)
          },
          onFocus: () => {
            Mi(!0)
          },
          onBlur: () => {
            Mi(!1), Bi.onBlur()
          }
        }), xi && (0, YW.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: IW("3D view isn't available in this browser.")
        }), Ki && (0, YW.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, YW.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: fi.position.map(((WW, iW) => (WW + ni[iW]).toFixed(2))).join(" ")
        }), yi && (0, YW.jsx)(aW, {
          heading: fi.heading,
          pitch: fi.pitch,
          onViewFrom: WW => {
            const iW = Li(WW, -1),
              OW = 0 === iW[1] ? {
                heading: Math.atan2(iW[0], iW[2]),
                pitch: 0
              } : {
                heading: fi.heading,
                pitch: iW[1] < 0 ? DW : -DW
              };
            Hi(Oi(Di, gi, vi, OW))
          },
          onTurn: (WW, iW) => {
            Hi((OW => function(WW, iW, OW, mW) {
              return mi(WW, iW, {
                heading: WW.heading + OW * RW,
                pitch: Math.max(-DW, Math.min(DW, WW.pitch + mW * RW))
              })
            }(null !== OW && void 0 !== OW ? OW : Ci.current.fittedView, Ei(Di), WW, iW)))
          },
          onFlip: () => {
            Hi((WW => function(WW, iW) {
              return mi(WW, iW, {
                heading: WW.heading + Math.PI,
                pitch: -WW.pitch
              })
            }(null !== WW && void 0 !== WW ? WW : Ci.current.fittedView, Ei(Di))))
          }
        }), null !== Xi && (0, YW.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === GW ? IW("studio:heatmapBlockReadout", {
            x: Xi.x,
            y: Xi.y,
            z: Xi.z,
            count: (0, lW.V)(Xi.value)
          }) : GW(Xi.x, Xi.y, Xi.z, Xi.value)
        }), (0, YW.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [CW, (0, YW.jsx)(kW.Z, {
            active: null === Ji,
            onClick: () => {
              Hi(null)
            },
            children: (0, YW.jsx)(sW.c, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function aW(WW) {
      let {
        heading: iW,
        pitch: OW,
        onViewFrom: EW,
        onTurn: NW,
        onFlip: PW
      } = WW;
      const {
        t: LW
      } = (0, bW.B)(), cW = (0, mW.useRef)(null), wW = Wi({
        heading: iW,
        pitch: OW
      }), tW = ii(iW), ZW = wi(wW, tW), xW = XW + BW + 2, lW = CW.flatMap((WW => [1, -1].map((iW => {
        const OW = Li(WW.direction, iW);
        return {
          ...WW,
          sign: iW,
          direction: OW,
          endX: xW + ci(OW, tW) * XW,
          endY: xW - ci(OW, ZW) * XW,
          depth: ci(OW, wW)
        }
      })))).sort(((WW, iW) => iW.depth - WW.depth));
      return (0, YW.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * xW,
        height: 2 * xW,
        "aria-hidden": !0,
        onPointerDown: WW => {
          var iW, OW;
          WW.currentTarget.setPointerCapture(WW.pointerId);
          const mW = WW.target,
            EW = mW.getAttribute("data-end");
          cW.current = {
            pointerId: WW.pointerId,
            x: WW.clientX,
            y: WW.clientY,
            travel: 0,
            side: null === EW ? null : null !== (iW = null === (OW = lW[Number(EW)]) || void 0 === OW ? void 0 : OW.direction) && void 0 !== iW ? iW : null,
            isOnMiddle: mW.hasAttribute("data-middle")
          }
        },
        onPointerMove: WW => {
          const iW = cW.current;
          if (null === iW || iW.pointerId !== WW.pointerId) return;
          const OW = WW.clientX - iW.x,
            mW = WW.clientY - iW.y;
          iW.x = WW.clientX, iW.y = WW.clientY, iW.travel += Math.abs(OW) + Math.abs(mW), iW.travel >= GW && NW(OW, mW)
        },
        onPointerUp: WW => {
          const iW = cW.current;
          cW.current = null, null === iW || iW.pointerId !== WW.pointerId || iW.travel >= GW || (null !== iW.side ? EW(iW.side) : iW.isOnMiddle && PW())
        },
        onPointerCancel: () => {
          cW.current = null
        },
        children: [lW.map(((WW, iW) => {
          const OW = WW.sign > 0;
          return (0, YW.jsxs)("g", {
            children: [(0, YW.jsx)("line", {
              x1: xW,
              y1: xW,
              x2: WW.endX,
              y2: WW.endY,
              stroke: WW.colour,
              strokeOpacity: OW ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, YW.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": iW,
              cx: WW.endX,
              cy: WW.endY,
              r: OW ? BW : BW - 1,
              fill: WW.colour,
              fillOpacity: OW ? 1 : .3,
              stroke: WW.colour,
              strokeWidth: OW ? 0 : 1.5,
              children: (0, YW.jsx)("title", {
                children: `${LW("View from")} ${OW?"+":"\u2212"}${WW.name}`
              })
            }), OW && (0, YW.jsx)("text", {
              pointerEvents: "none",
              x: WW.endX,
              y: WW.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: WW.name
            })]
          }, `${OW?"+":"-"}${WW.name}`)
        })), (0, YW.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: xW,
          cy: xW,
          r: qW,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, YW.jsx)("title", {
            children: LW("View from the opposite side")
          })
        })]
      })
    }

    function rW(WW) {
      var iW, OW, mW;
      const {
        chunkGridOrigin: EW,
        camera: NW
      } = WW;
      if (null === EW) return;
      const PW = [NW.position.x, NW.position.y, NW.position.z],
        LW = [0, 2].map((WW => Math.floor((PW[WW] + EW[WW]) / AW.f.jZ))),
        cW = WW.chunkGridCentre;
      if (null !== cW && cW.every(((WW, iW) => WW === LW[iW]))) return;
      const ZW = null === (iW = null === (OW = WW.chunkGrid) || void 0 === OW ? void 0 : OW.isVisible) || void 0 === iW || iW;
      null === (mW = WW.chunkGrid) || void 0 === mW || mW.dispose();
      const [lW, bW] = [0, 2].map(((WW, iW) => {
        const OW = [];
        for (let mW = LW[iW] - eW; mW <= LW[iW] + eW + 1; mW++) OW.push(mW * AW.f.jZ - EW[WW]);
        return OW
      })), jW = -EW[1], UW = [];
      for (const wW of bW) UW.push([new tW.fA(lW[0], jW, wW), new tW.fA(lW[lW.length - 1], jW, wW)]);
      for (const wW of lW) UW.push([new tW.fA(wW, jW, bW[0]), new tW.fA(wW, jW, bW[bW.length - 1])]);
      const kW = (0, xW.e)("Heatmap3DChunkGrid", {
        lines: UW
      }, WW.rb);
      kW.color = new wW.Color3(.45, .6, .78), kW.Fb = !1, kW.isVisible = ZW, WW.chunkGrid = kW, WW.chunkGridCentre = LW, WW.needsRender = !0
    }

    function zW(WW, iW, OW, mW) {
      WW.kWW("matrix", function(WW, iW) {
        const OW = new Float32Array(16 * iW);
        for (let mW = 0; mW < iW; mW++) {
          const iW = 16 * mW;
          OW[iW] = 1, OW[iW + 5] = 1, OW[iW + 10] = 1, OW[iW + 12] = WW[3 * mW], OW[iW + 13] = WW[3 * mW + 1], OW[iW + 14] = WW[3 * mW + 2], OW[iW + 15] = 1
        }
        return OW
      }(iW, mW), 16, !0), WW.kWW("color", OW, 4, !0), WW.isVisible = mW > 0
    }

    function FW(WW) {
      const {
        camera: iW,
        translucent: OW
      } = WW, mW = [iW.position.x, iW.position.y, iW.position.z], EW = WW.translucentSortedFrom;
      if (null !== EW && Math.hypot(mW[0] - EW[0], mW[1] - EW[1], mW[2] - EW[2]) < dW) return;
      WW.translucentSortedFrom = mW;
      const NW = new Float64Array(OW.count),
        PW = new Uint32Array(OW.count);
      for (let wW = 0; wW < OW.count; wW++) {
        const WW = OW.Zj[3 * wW] - mW[0],
          iW = OW.Zj[3 * wW + 1] - mW[1],
          EW = OW.Zj[3 * wW + 2] - mW[2];
        NW[wW] = WW * WW + iW * iW + EW * EW, PW[wW] = wW
      }
      PW.sort(((WW, iW) => NW[iW] - NW[WW]));
      const LW = new Float32Array(3 * OW.count),
        cW = new Float32Array(4 * OW.count);
      PW.forEach(((WW, iW) => {
        LW.set(OW.Zj.subarray(3 * WW, 3 * WW + 3), 3 * iW), cW.set(OW.colours.subarray(4 * WW, 4 * WW + 4), 4 * iW)
      })), zW(WW.translucentCells, LW, cW, OW.count), WW.needsRender = !0
    }

    function QW(WW, iW) {
      const OW = (OW, mW, EW) => new tW.fA(0 === OW ? WW[0] : iW[0], 0 === mW ? WW[1] : iW[1], 0 === EW ? WW[2] : iW[2]),
        mW = [];
      for (const EW of [0, 1])
        for (const WW of [0, 1]) mW.push([OW(0, EW, WW), OW(1, EW, WW)], [OW(EW, 0, WW), OW(EW, 1, WW)], [OW(EW, WW, 0), OW(EW, WW, 1)]);
      return mW
    }

    function Wi(WW) {
      return [Math.sin(WW.heading) * Math.cos(WW.pitch), -Math.sin(WW.pitch), Math.cos(WW.heading) * Math.cos(WW.pitch)]
    }

    function ii(WW) {
      return [Math.cos(WW), 0, -Math.sin(WW)]
    }

    function Oi(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: VW,
        pitch: pW
      };
      const EW = [WW.max[0] - WW.min[0], WW.max[1] - WW.min[1], WW.max[2] - WW.min[2]],
        NW = Wi(mW),
        PW = ii(mW.heading),
        LW = wi(NW, PW),
        cW = Math.tan(OW / 2),
        wW = cW * iW;
      let tW = 1;
      for (const ZW of [-EW[0] / 2, EW[0] / 2])
        for (const WW of [-EW[1] / 2, EW[1] / 2])
          for (const iW of [-EW[2] / 2, EW[2] / 2]) {
            const OW = [ZW, WW, iW],
              mW = ci(OW, NW);
            tW = Math.max(tW, Math.abs(ci(OW, PW)) / wW - mW, Math.abs(ci(OW, LW)) / cW - mW)
          }
      return {
        position: Pi([WW.min[0] + EW[0] / 2, WW.min[1] + EW[1] / 2, WW.min[2] + EW[2] / 2], Li(NW, -tW * fW)),
        heading: mW.heading,
        pitch: mW.pitch
      }
    }

    function mi(WW, iW, OW) {
      const mW = Ni(WW),
        EW = Ni(OW),
        NW = Pi(WW.position, Li(iW, -1)),
        PW = [0, 1, 2].reduce(((WW, iW) => Pi(WW, Li(EW[iW], ci(NW, mW[iW])))), [0, 0, 0]);
      return {
        position: Pi(iW, PW),
        heading: OW.heading,
        pitch: OW.pitch
      }
    }

    function Ei(WW) {
      return Li(Pi(WW.min, WW.max), .5)
    }

    function Ni(WW) {
      const iW = Wi(WW),
        OW = ii(WW.heading);
      return [iW, OW, wi(iW, OW)]
    }

    function Pi(WW, iW) {
      return [WW[0] + iW[0], WW[1] + iW[1], WW[2] + iW[2]]
    }

    function Li(WW, iW) {
      return [WW[0] * iW, WW[1] * iW, WW[2] * iW]
    }

    function ci(WW, iW) {
      return WW[0] * iW[0] + WW[1] * iW[1] + WW[2] * iW[2]
    }

    function wi(WW, iW) {
      return [WW[1] * iW[2] - WW[2] * iW[1], WW[2] * iW[0] - WW[0] * iW[2], WW[0] * iW[1] - WW[1] * iW[0]]
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);