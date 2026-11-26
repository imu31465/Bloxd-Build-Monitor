export const id = 279;
export const ids = [279];
export const modules = {
  40821: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => CB
    });
    GB(6976);
    var YB = GB(56),
      DB = GB(40825),
      QB = GB(41089),
      oB = GB(41213),
      jB = GB(41246),
      yB = GB(41258),
      JB = GB(37885),
      MB = GB(37771),
      PB = GB(41406),
      zB = GB(41452),
      lB = (GB(41472), GB(1217)),
      pB = GB(192),
      qB = GB(1175),
      ZB = GB(16),
      NB = GB(3072),
      RB = GB(1485),
      WB = GB(1383),
      AB = GB(6968),
      VB = GB(6980),
      SB = GB(4875),
      nB = GB(1282);
    const UB = 1.2,
      fB = .2,
      kB = .0066 * Math.PI / 180,
      dB = new Set(["Escape", "KeyG"]),
      KB = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      uB = "ArrowUp",
      mB = new Set([...Object.keys(KB), uB, "ArrowDown"]),
      IB = 32,
      FB = 1,
      iB = 10,
      LB = "F4",
      gB = "Period",
      rB = Math.PI / 2 - .001,
      XB = Math.PI / 6,
      wB = Math.PI / 6,
      EB = 1.08,
      cB = [{
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
      hB = 24,
      aB = 7,
      eB = 4,
      TB = .01,
      bB = 4;

    function CB(BB) {
      let {
        heatmap: OB,
        scale: GB,
        fullyOpaqueFrom: FB,
        bounds: XB,
        fitBounds: wB,
        schematic: EB,
        controls: cB,
        onStepTime: hB,
        onShowAllTime: aB,
        onTogglePlaying: eB,
        getReadout: bB = null
      } = BB;
      const {
        t: CB
      } = (0, qB.H)(), {
        clientEscMenuOptions: QO
      } = (0, ZB.o)(["clientEscMenuOptions"]), yO = (0, YB.useRef)(null), JO = (0, YB.useRef)(null), MO = (0, YB.useRef)(null), PO = (0, NB.e)(yO), [zO, lO] = (0, YB.useState)(!1), [pO, qO] = (0, YB.useState)(!1), [ZO, NO] = (0, YB.useState)(!0), RO = (0, YB.useRef)(!1), [WO, AO] = (0, YB.useState)(!1), VO = pO || !ZO && WO, [SO, nO] = (0, YB.useState)(!1), [UO, fO] = (0, YB.useState)(!0), [kO, dO] = (0, YB.useState)(null), KO = XB.min, [uO, mO] = (0, YB.useState)(KO);
      uO[0] === KO[0] && uO[1] === KO[1] && uO[2] === KO[2] || (mO(KO), null !== kO && dO({
        ...kO,
        position: oO(kO.position, oO(uO, jO(KO, -1)))
      }));
      const IO = (0, YB.useMemo)((() => function(BB) {
          return [BB.max[0] - BB.min[0] + 1, BB.max[1] - BB.min[1] + 1, BB.max[2] - BB.min[2] + 1]
        }(XB)), [XB]),
        FO = (0, YB.useMemo)((() => function(BB, OB) {
          const GB = [],
            YB = [];
          for (const [DB, QB] of Object.entries(BB.frequencies)) {
            const BB = Number(DB);
            for (const [DB, oB] of Object.entries(QB)) {
              const QB = Number(DB);
              for (const [DB, jB] of Object.entries(oB)) jB <= 0 || (GB.push(BB - OB[0], QB - OB[1], Number(DB) - OB[2]), YB.push(jB))
            }
          }
          return {
            positions: Int32Array.from(GB),
            values: Float64Array.from(YB),
            count: YB.length
          }
        }(OB, KO)), [OB, KO]),
        iO = UB * QO.cameraFOV / 100,
        LO = PO.height > 0 ? PO.width / PO.height : 1,
        gO = (0, YB.useMemo)((() => function(BB, OB) {
          return {
            min: [BB.min[0] - OB[0], BB.min[1] - OB[1], BB.min[2] - OB[2]],
            max: [BB.max[0] - OB[0] + 1, BB.max[1] - OB[1] + 1, BB.max[2] - OB[2] + 1]
          }
        }(wB, KO)), [wB, KO]),
        rO = GO(gO, LO, iO),
        XO = null !== kO && void 0 !== kO ? kO : rO,
        wO = (0, YB.useRef)({
          fittedView: rO,
          fieldOfView: iO,
          mouseSensitivity: QO.mouseSensitivity,
          canLock: ZO
        });
      wO.current = {
        fittedView: rO,
        fieldOfView: iO,
        mouseSensitivity: QO.mouseSensitivity,
        canLock: ZO
      };
      const EO = (0, YB.useMemo)((() => {
          if (!VO) return null;
          const BB = (BB, GB, YB) => {
              var DB, QB, oB;
              return null !== (DB = null === (QB = OB.frequencies[BB + KO[0]]) || void 0 === QB || null === (oB = QB[GB + KO[1]]) || void 0 === oB ? void 0 : oB[YB + KO[2]]) && void 0 !== DB ? DB : 0
            },
            YB = function(BB, OB, GB, YB) {
              let DB = 0,
                QB = 1 / 0;
              for (const PB of [0, 1, 2]) {
                if (0 === OB[PB]) {
                  if (BB[PB] < 0 || BB[PB] > GB[PB]) return null;
                  continue
                }
                const YB = (0 - BB[PB]) / OB[PB],
                  oB = (GB[PB] - BB[PB]) / OB[PB];
                DB = Math.max(DB, Math.min(YB, oB)), QB = Math.min(QB, Math.max(YB, oB))
              }
              if (DB > QB) return null;
              const oB = [0, 1, 2].map((YB => Math.min(GB[YB] - 1, Math.max(0, Math.floor(BB[YB] + OB[YB] * DB))))),
                jB = [0, 1, 2].map((BB => Math.sign(OB[BB]))),
                yB = [0, 1, 2].map((GB => {
                  if (0 === jB[GB]) return 1 / 0;
                  return ((jB[GB] > 0 ? oB[GB] + 1 : oB[GB]) - BB[GB]) / OB[GB]
                })),
                JB = [0, 1, 2].map((BB => 0 === jB[BB] ? 1 / 0 : Math.abs(1 / OB[BB])));
              let MB = null;
              for (;;) {
                const BB = YB(oB[0], oB[1], oB[2]);
                if (BB >= 1) return oB;
                BB > 0 && (MB = [oB[0], oB[1], oB[2]]);
                const OB = yB[0] < yB[1] ? yB[0] < yB[2] ? 0 : 2 : yB[1] < yB[2] ? 1 : 2;
                if (yB[OB] > QB) return MB;
                if (oB[OB] += jB[OB], yB[OB] += JB[OB], oB[OB] < 0 || oB[OB] >= GB[OB]) return MB
              }
            }(XO.position, BO(XO), IO, ((OB, YB, DB) => (0, AB.y)(BB(OB, YB, DB), GB, FB)));
          return null === YB ? null : {
            x: YB[0] + KO[0],
            y: YB[1] + KO[1],
            z: YB[2] + KO[2],
            value: BB(YB[0], YB[1], YB[2])
          }
        }), [VO, OB, KO, XO, IO, GB, FB]),
        {
          keyHandlers: cO
        } = (0, VB.f)({
          isEnabled: VO,
          claimedKeyCodes: mB,
          Lz: BB => {
            dO((OB => function(BB, OB) {
              const GB = [Math.sin(BB.heading), 0, Math.cos(BB.heading)],
                YB = oO(oO(jO(GB, OB.forward), jO(OO(BB.heading), OB.right)), [0, OB.up, 0]);
              return {
                ...BB,
                position: oO(BB.position, YB)
              }
            }(null !== OB && void 0 !== OB ? OB : wO.current.fittedView, BB)))
          },
          onZoomChange: nO
        });
      (0, YB.useEffect)((() => {
        const BB = JO.current;
        if (!BB) return;
        let OB;
        try {
          OB = function(BB, OB) {
            const GB = new DB.c(BB, !0, {
                stencil: !1
              }, !0),
              YB = new QB.b(GB),
              [lB, pB, qB] = AB.Q;
            YB.clearColor = new JB.e(lB / 255, pB / 255, qB / 255, 1);
            const ZB = new oB.c("Heatmap3DCamera", MB.Xp.Zero(), YB);
            ZB.fov = OB, ZB.minZ = .05;
            const NB = new jB.d("Heatmap3DLight", new MB.Xp(.4, 1, -.6), YB);
            NB.diffuse = JB.Color3.White(), NB.groundColor = JB.Color3.Black(), NB.specular = JB.Color3.Black();
            const RB = new yB.StandardMaterial("Heatmap3DCellMaterial", YB);
            RB.diffuseColor = new JB.Color3(.4, .4, .4), RB.emissiveColor = new JB.Color3(.62, .62, .62), RB.specularColor = JB.Color3.Black();
            const WB = (0, PB.d)("Heatmap3DCells", {
              size: 1
            }, YB);
            WB.material = RB, WB.bq = !1, WB.rp = !0, WB.isVisible = !1;
            const VB = (0, PB.d)("Heatmap3DTranslucentCells", {
              size: 1
            }, YB);
            VB.material = RB, VB.hasVertexAlpha = !0, VB.bq = !1, VB.rp = !0, VB.isVisible = !1;
            const SB = new yB.StandardMaterial("Heatmap3DSchematicMaterial", YB);
            SB.diffuseColor = new JB.Color3(.6, .6, .6), SB.emissiveColor = new JB.Color3(.4, .4, .4), SB.specularColor = JB.Color3.Black();
            const nB = (0, PB.d)("Heatmap3DSchematicBlocks", {
              size: 1
            }, YB);
            nB.material = SB, nB.bq = !1, nB.rp = !0, nB.isVisible = !1;
            const UB = (0, zB.d)("Heatmap3DTarget", {
              lines: tB([-.52, -.52, -.52], [.52, .52, .52])
            }, YB);
            return UB.color = new JB.Color3(.06, .14, .23), UB.renderingGroupId = 1, UB.bq = !1, UB.isVisible = !1, {
              engine: GB,
              eq: YB,
              camera: ZB,
              cells: WB,
              translucentCells: VB,
              translucent: {
                DZ: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: nB,
              targetOutline: UB,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: OB,
              needsRender: !0
            }
          }(BB, wO.current.fieldOfView)
        } catch (GB) {
          return console.error("Failed to start the 3D heatmap", GB), void lO(!0)
        }
        return MO.current = OB, OB.engine.runRenderLoop((() => {
          const BB = OB.camera;
          BB.fov !== OB.targetFieldOfView && (BB.fov += (OB.targetFieldOfView - BB.fov) * (BB.fov > OB.targetFieldOfView ? .3 : .2), Math.abs(OB.targetFieldOfView - BB.fov) < 5e-4 && (BB.fov = OB.targetFieldOfView), OB.needsRender = !0), OB.needsRender && (OB.eq.render(), OB.needsRender = !OB.eq.isReady() || !OB.engine.areAllEffectsReady())
        })), () => {
          MO.current = null, OB.engine.dispose()
        }
      }), []), (0, YB.useEffect)((() => {
        const BB = JO.current;
        if (!BB) return;
        const OB = () => {
            RO.current = !1, qO(document.pointerLockElement === BB)
          },
          GB = () => {
            RO.current && (RO.current = !1, NO(!1))
          },
          YB = OB => {
            const GB = !wO.current.canLock && document.activeElement === BB && 0 !== (1 & OB.buttons);
            if (document.pointerLockElement !== BB && !GB) return;
            const YB = wO.current.mouseSensitivity * kB;
            dO((BB => function(BB, OB, GB) {
              const YB = 2 * Math.PI;
              return {
                ...BB,
                heading: ((BB.heading + OB) % YB + YB) % YB,
                pitch: Math.max(-rB, Math.min(rB, BB.pitch + GB))
              }
            }(null !== BB && void 0 !== BB ? BB : wO.current.fittedView, OB.movementX * YB, OB.movementY * YB)))
          };
        return document.addEventListener("pointerlockchange", OB), document.addEventListener("pointerlockerror", GB), document.addEventListener("pointermove", YB), () => {
          document.removeEventListener("pointerlockchange", OB), document.removeEventListener("pointerlockerror", GB), document.removeEventListener("pointermove", YB), document.pointerLockElement === BB && (0, SB.b)()
        }
      }), []), (0, YB.useEffect)((() => {
        const BB = MO.current;
        null !== BB && 0 !== PO.width && 0 !== PO.height && (BB.engine.resize(), BB.needsRender = !0)
      }), [PO.width, PO.height]), (0, YB.useEffect)((() => {
        const BB = MO.current;
        null !== BB && (BB.targetFieldOfView = iO * (SO ? fB : 1))
      }), [iO, SO]), (0, YB.useEffect)((() => {
        const BB = MO.current;
        null !== BB && function(BB, OB, GB, YB) {
          const DB = [],
            QB = [],
            oB = [],
            jB = [];
          for (let yB = 0; yB < OB.count; yB++) {
            const BB = OB.values[yB],
              JB = (0, AB.y)(BB, GB, YB);
            if (JB <= 0) continue;
            const [MB, PB, zB] = (0, AB.q)((0, AB.I)(BB, GB)), lB = JB >= 1;
            (lB ? DB : oB).push(OB.positions[3 * yB] + .5, OB.positions[3 * yB + 1] + .5, OB.positions[3 * yB + 2] + .5), (lB ? QB : jB).push(MB / 255, PB / 255, zB / 255, JB)
          }
          sB(BB.cells, Float32Array.from(DB), Float32Array.from(QB), QB.length / 4), BB.translucent = {
            DZ: Float32Array.from(oB),
            colours: Float32Array.from(jB),
            count: jB.length / 4
          }, BB.translucentSortedFrom = null, xB(BB), BB.needsRender = !0
        }(BB, FO, GB, FB)
      }), [FO, GB, FB]), (0, YB.useEffect)((() => {
        const BB = MO.current;
        null !== BB && function(BB, OB) {
          BB.chunkGridOrigin = OB, BB.chunkGridCentre = null, vB(BB)
        }(BB, XB.min)
      }), [XB]), (0, YB.useEffect)((() => {
        const BB = MO.current;
        null !== BB && function(BB, OB, GB) {
          const YB = [],
            DB = [];
          if (null !== OB) {
            const {
              positions: BB,
              colours: QB,
              count: oB
            } = OB.surface;
            for (let OB = 0; OB < oB; OB++) {
              const oB = [BB[3 * OB], BB[3 * OB + 1], BB[3 * OB + 2]];
              [0, 1, 2].every((BB => oB[BB] >= GB.min[BB] - IB && oB[BB] <= GB.max[BB] + IB)) && (YB.push(oB[0] - GB.min[0] + .5, oB[1] - GB.min[1] + .5, oB[2] - GB.min[2] + .5), DB.push(QB[3 * OB] / 255, QB[3 * OB + 1] / 255, QB[3 * OB + 2] / 255, 1))
            }
          }
          sB(BB.schematicBlocks, Float32Array.from(YB), Float32Array.from(DB), DB.length / 4), BB.needsRender = !0
        }(BB, EB, XB)
      }), [EB, XB]), (0, YB.useEffect)((() => {
        const BB = MO.current;
        null !== BB && null !== BB.chunkGrid && (BB.chunkGrid.isVisible = UO, BB.needsRender = !0)
      }), [UO, XB]), (0, YB.useEffect)((() => {
        const BB = MO.current;
        null !== BB && function(BB, OB, GB) {
          const {
            camera: YB
          } = BB;
          YB.position.set(OB.position[0], OB.position[1], OB.position[2]), YB.rotation.set(OB.pitch, OB.heading, 0);
          const DB = (iB + 1) * pB.f.pP * Math.sqrt(3);
          YB.maxZ = Math.max(DB, Math.hypot(...oO(OB.position, jO(DO({
            min: [0, 0, 0],
            max: GB
          }), -1))) + 2 * Math.hypot(...GB)), vB(BB), xB(BB), BB.needsRender = !0
        }(BB, XO, IO)
      }), [XO, IO]), (0, YB.useEffect)((() => {
        const BB = MO.current;
        null !== BB && (BB.targetOutline.isVisible = null !== EO, null !== EO && BB.targetOutline.position.set(EO.x - KO[0] + .5, EO.y - KO[1] + .5, EO.z - KO[2] + .5), BB.needsRender = !0)
      }), [EO, KO]);
      return (0, nB.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: yO,
        children: [(0, nB.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: JO,
          style: {
            width: `${PO.width}px`,
            height: `${PO.height}px`
          },
          tabIndex: 0,
          "aria-label": CB("3D heatmap"),
          onClick: () => {
            const BB = JO.current;
            if (null === BB) return;
            if (BB.focus({
                preventScroll: !0
              }), pO || !ZO) return;
            const OB = BB.requestPointerLock();
            OB instanceof Promise ? OB.catch((BB => {
              BB instanceof DOMException && ("WrongDocumentError" === BB.name || "NotSupportedError" === BB.name) && NO(!1)
            })) : RO.current = !0
          },
          ...cO,
          onKeyDown: BB => {
            if (VO && dB.has(BB.code)) return BB.preventDefault(), void(() => {
              const BB = JO.current;
              null !== BB && document.pointerLockElement === BB ? (0, SB.b)() : null === BB || void 0 === BB || BB.blur()
            })();
            const OB = KB[BB.code];
            return VO && void 0 !== OB ? (BB.preventDefault(), void hB(OB)) : VO && (0, VB.c)("replayPlayPause", BB.code) && !(0, VB.c)("Zoom", BB.code) ? (BB.preventDefault(), void(BB.repeat || eB())) : VO && BB.code === uB ? (BB.preventDefault(), void aB()) : VO && BB.code === gB ? (BB.preventDefault(), void dO(null)) : VO && BB.code === LB ? (BB.preventDefault(), void fO((BB => !BB))) : void cO.onKeyDown(BB)
          },
          onFocus: () => {
            AO(!0)
          },
          onBlur: () => {
            AO(!1), cO.onBlur()
          }
        }), zO && (0, nB.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: CB("3D view isn't available in this browser.")
        }), VO && (0, nB.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, nB.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: XO.position.map(((BB, OB) => (BB + KO[OB]).toFixed(2))).join(" ")
        }), UO && (0, nB.jsx)(HB, {
          heading: XO.heading,
          pitch: XO.pitch,
          onViewFrom: BB => {
            const OB = jO(BB, -1),
              GB = 0 === OB[1] ? {
                heading: Math.atan2(OB[0], OB[2]),
                pitch: 0
              } : {
                heading: XO.heading,
                pitch: OB[1] < 0 ? rB : -rB
              };
            dO(GO(gO, LO, iO, GB))
          },
          onTurn: (BB, OB) => {
            dO((GB => function(BB, OB, GB, YB) {
              return YO(BB, OB, {
                heading: BB.heading + GB * TB,
                pitch: Math.max(-rB, Math.min(rB, BB.pitch + YB * TB))
              })
            }(null !== GB && void 0 !== GB ? GB : wO.current.fittedView, DO(gO), BB, OB)))
          },
          onFlip: () => {
            dO((BB => function(BB, OB) {
              return YO(BB, OB, {
                heading: BB.heading + Math.PI,
                pitch: -BB.pitch
              })
            }(null !== BB && void 0 !== BB ? BB : wO.current.fittedView, DO(gO))))
          }
        }), null !== EO && (0, nB.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === bB ? CB("studio:heatmapBlockReadout", {
            x: EO.x,
            y: EO.y,
            z: EO.z,
            count: (0, lB.U)(EO.value)
          }) : bB(EO.x, EO.y, EO.z, EO.value)
        }), (0, nB.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [cB, (0, nB.jsx)(RB.Z, {
            active: null === kO,
            onClick: () => {
              dO(null)
            },
            children: (0, nB.jsx)(WB.b, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function HB(BB) {
      let {
        heading: OB,
        pitch: GB,
        onViewFrom: DB,
        onTurn: QB,
        onFlip: oB
      } = BB;
      const {
        t: jB
      } = (0, qB.H)(), yB = (0, YB.useRef)(null), JB = BO({
        heading: OB,
        pitch: GB
      }), MB = OO(OB), PB = JO(JB, MB), zB = hB + aB + 2, lB = cB.flatMap((BB => [1, -1].map((OB => {
        const GB = jO(BB.direction, OB);
        return {
          ...BB,
          sign: OB,
          direction: GB,
          endX: zB + yO(GB, MB) * hB,
          endY: zB - yO(GB, PB) * hB,
          depth: yO(GB, JB)
        }
      })))).sort(((BB, OB) => OB.depth - BB.depth));
      return (0, nB.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * zB,
        height: 2 * zB,
        "aria-hidden": !0,
        onPointerDown: BB => {
          var OB, GB;
          BB.currentTarget.setPointerCapture(BB.pointerId);
          const YB = BB.target,
            DB = YB.getAttribute("data-end");
          yB.current = {
            pointerId: BB.pointerId,
            x: BB.clientX,
            y: BB.clientY,
            travel: 0,
            side: null === DB ? null : null !== (OB = null === (GB = lB[Number(DB)]) || void 0 === GB ? void 0 : GB.direction) && void 0 !== OB ? OB : null,
            isOnMiddle: YB.hasAttribute("data-middle")
          }
        },
        onPointerMove: BB => {
          const OB = yB.current;
          if (null === OB || OB.pointerId !== BB.pointerId) return;
          const GB = BB.clientX - OB.x,
            YB = BB.clientY - OB.y;
          OB.x = BB.clientX, OB.y = BB.clientY, OB.travel += Math.abs(GB) + Math.abs(YB), OB.travel >= bB && QB(GB, YB)
        },
        onPointerUp: BB => {
          const OB = yB.current;
          yB.current = null, null === OB || OB.pointerId !== BB.pointerId || OB.travel >= bB || (null !== OB.side ? DB(OB.side) : OB.isOnMiddle && oB())
        },
        onPointerCancel: () => {
          yB.current = null
        },
        children: [lB.map(((BB, OB) => {
          const GB = BB.sign > 0;
          return (0, nB.jsxs)("g", {
            children: [(0, nB.jsx)("line", {
              x1: zB,
              y1: zB,
              x2: BB.endX,
              y2: BB.endY,
              stroke: BB.colour,
              strokeOpacity: GB ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, nB.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": OB,
              cx: BB.endX,
              cy: BB.endY,
              r: GB ? aB : aB - 1,
              fill: BB.colour,
              fillOpacity: GB ? 1 : .3,
              stroke: BB.colour,
              strokeWidth: GB ? 0 : 1.5,
              children: (0, nB.jsx)("title", {
                children: `${jB("View from")} ${GB?"+":"\u2212"}${BB.name}`
              })
            }), GB && (0, nB.jsx)("text", {
              pointerEvents: "none",
              x: BB.endX,
              y: BB.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: BB.name
            })]
          }, `${GB?"+":"-"}${BB.name}`)
        })), (0, nB.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: zB,
          cy: zB,
          r: eB,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, nB.jsx)("title", {
            children: jB("View from the opposite side")
          })
        })]
      })
    }

    function vB(BB) {
      var OB, GB, YB;
      const {
        chunkGridOrigin: DB,
        camera: QB
      } = BB;
      if (null === DB) return;
      const oB = [QB.position.x, QB.position.y, QB.position.z],
        jB = [0, 2].map((BB => Math.floor((oB[BB] + DB[BB]) / pB.f.pP))),
        yB = BB.chunkGridCentre;
      if (null !== yB && yB.every(((BB, OB) => BB === jB[OB]))) return;
      const PB = null === (OB = null === (GB = BB.chunkGrid) || void 0 === GB ? void 0 : GB.isVisible) || void 0 === OB || OB;
      null === (YB = BB.chunkGrid) || void 0 === YB || YB.dispose();
      const [lB, qB] = [0, 2].map(((BB, OB) => {
        const GB = [];
        for (let YB = jB[OB] - iB; YB <= jB[OB] + iB + 1; YB++) GB.push(YB * pB.f.pP - DB[BB]);
        return GB
      })), ZB = -DB[1], NB = [];
      for (const JB of qB) NB.push([new MB.Xp(lB[0], ZB, JB), new MB.Xp(lB[lB.length - 1], ZB, JB)]);
      for (const JB of lB) NB.push([new MB.Xp(JB, ZB, qB[0]), new MB.Xp(JB, ZB, qB[qB.length - 1])]);
      const RB = (0, zB.d)("Heatmap3DChunkGrid", {
        lines: NB
      }, BB.eq);
      RB.color = new JB.Color3(.45, .6, .78), RB.bq = !1, RB.isVisible = PB, BB.chunkGrid = RB, BB.chunkGridCentre = jB, BB.needsRender = !0
    }

    function sB(BB, OB, GB, YB) {
      BB.DOB("matrix", function(BB, OB) {
        const GB = new Float32Array(16 * OB);
        for (let YB = 0; YB < OB; YB++) {
          const OB = 16 * YB;
          GB[OB] = 1, GB[OB + 5] = 1, GB[OB + 10] = 1, GB[OB + 12] = BB[3 * YB], GB[OB + 13] = BB[3 * YB + 1], GB[OB + 14] = BB[3 * YB + 2], GB[OB + 15] = 1
        }
        return GB
      }(OB, YB), 16, !0), BB.DOB("color", GB, 4, !0), BB.isVisible = YB > 0
    }

    function xB(BB) {
      const {
        camera: OB,
        translucent: GB
      } = BB, YB = [OB.position.x, OB.position.y, OB.position.z], DB = BB.translucentSortedFrom;
      if (null !== DB && Math.hypot(YB[0] - DB[0], YB[1] - DB[1], YB[2] - DB[2]) < FB) return;
      BB.translucentSortedFrom = YB;
      const QB = new Float64Array(GB.count),
        oB = new Uint32Array(GB.count);
      for (let JB = 0; JB < GB.count; JB++) {
        const BB = GB.DZ[3 * JB] - YB[0],
          OB = GB.DZ[3 * JB + 1] - YB[1],
          DB = GB.DZ[3 * JB + 2] - YB[2];
        QB[JB] = BB * BB + OB * OB + DB * DB, oB[JB] = JB
      }
      oB.sort(((BB, OB) => QB[OB] - QB[BB]));
      const jB = new Float32Array(3 * GB.count),
        yB = new Float32Array(4 * GB.count);
      oB.forEach(((BB, OB) => {
        jB.set(GB.DZ.subarray(3 * BB, 3 * BB + 3), 3 * OB), yB.set(GB.colours.subarray(4 * BB, 4 * BB + 4), 4 * OB)
      })), sB(BB.translucentCells, jB, yB, GB.count), BB.needsRender = !0
    }

    function tB(BB, OB) {
      const GB = (GB, YB, DB) => new MB.Xp(0 === GB ? BB[0] : OB[0], 0 === YB ? BB[1] : OB[1], 0 === DB ? BB[2] : OB[2]),
        YB = [];
      for (const DB of [0, 1])
        for (const BB of [0, 1]) YB.push([GB(0, DB, BB), GB(1, DB, BB)], [GB(DB, 0, BB), GB(DB, 1, BB)], [GB(DB, BB, 0), GB(DB, BB, 1)]);
      return YB
    }

    function BO(BB) {
      return [Math.sin(BB.heading) * Math.cos(BB.pitch), -Math.sin(BB.pitch), Math.cos(BB.heading) * Math.cos(BB.pitch)]
    }

    function OO(BB) {
      return [Math.cos(BB), 0, -Math.sin(BB)]
    }

    function GO(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: XB,
        pitch: wB
      };
      const DB = [BB.max[0] - BB.min[0], BB.max[1] - BB.min[1], BB.max[2] - BB.min[2]],
        QB = BO(YB),
        oB = OO(YB.heading),
        jB = JO(QB, oB),
        yB = Math.tan(GB / 2),
        JB = yB * OB;
      let MB = 1;
      for (const PB of [-DB[0] / 2, DB[0] / 2])
        for (const BB of [-DB[1] / 2, DB[1] / 2])
          for (const OB of [-DB[2] / 2, DB[2] / 2]) {
            const GB = [PB, BB, OB],
              YB = yO(GB, QB);
            MB = Math.max(MB, Math.abs(yO(GB, oB)) / JB - YB, Math.abs(yO(GB, jB)) / yB - YB)
          }
      return {
        position: oO([BB.min[0] + DB[0] / 2, BB.min[1] + DB[1] / 2, BB.min[2] + DB[2] / 2], jO(QB, -MB * EB)),
        heading: YB.heading,
        pitch: YB.pitch
      }
    }

    function YO(BB, OB, GB) {
      const YB = QO(BB),
        DB = QO(GB),
        QB = oO(BB.position, jO(OB, -1)),
        oB = [0, 1, 2].reduce(((BB, OB) => oO(BB, jO(DB[OB], yO(QB, YB[OB])))), [0, 0, 0]);
      return {
        position: oO(OB, oB),
        heading: GB.heading,
        pitch: GB.pitch
      }
    }

    function DO(BB) {
      return jO(oO(BB.min, BB.max), .5)
    }

    function QO(BB) {
      const OB = BO(BB),
        GB = OO(BB.heading);
      return [OB, GB, JO(OB, GB)]
    }

    function oO(BB, OB) {
      return [BB[0] + OB[0], BB[1] + OB[1], BB[2] + OB[2]]
    }

    function jO(BB, OB) {
      return [BB[0] * OB, BB[1] * OB, BB[2] * OB]
    }

    function yO(BB, OB) {
      return BB[0] * OB[0] + BB[1] * OB[1] + BB[2] * OB[2]
    }

    function JO(BB, OB) {
      return [BB[1] * OB[2] - BB[2] * OB[1], BB[2] * OB[0] - BB[0] * OB[2], BB[0] * OB[1] - BB[1] * OB[0]]
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);