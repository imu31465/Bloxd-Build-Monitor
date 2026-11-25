export const id = 254;
export const ids = [254];
export const modules = {
  40193: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => tG
    });
    ZG(6467);
    var wG = ZG(51),
      SG = ZG(40197),
      LG = ZG(40467),
      yG = ZG(40582),
      kG = ZG(40629),
      UG = ZG(40644),
      YG = ZG(37618),
      VG = ZG(37432),
      pG = ZG(40776),
      fG = ZG(40831),
      QG = (ZG(40865), ZG(1177)),
      KG = ZG(188),
      hG = ZG(1151),
      dG = ZG(17),
      JG = ZG(2732),
      rG = ZG(1393),
      zG = ZG(1016),
      EG = ZG(6462),
      oG = ZG(6473),
      XG = ZG(4458),
      uG = ZG(1067);
    const iG = 1.2,
      CG = .2,
      WG = .0066 * Math.PI / 180,
      mG = new Set(["Escape", "KeyG"]),
      IG = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      FG = "ArrowUp",
      vG = new Set([...Object.keys(IG), FG, "ArrowDown"]),
      aG = 32,
      cG = 1,
      lG = 10,
      jG = "F4",
      PG = "Period",
      MG = Math.PI / 2 - .001,
      AG = Math.PI / 6,
      sG = Math.PI / 6,
      qG = 1.08,
      nG = [{
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
      gG = 24,
      eG = 7,
      RG = 4,
      TG = .01,
      HG = 4;

    function tG(GG) {
      let {
        heatmap: bG,
        scale: ZG,
        fullyOpaqueFrom: cG,
        bounds: AG,
        fitBounds: sG,
        schematic: qG,
        controls: nG,
        onStepTime: gG,
        onShowAllTime: eG,
        onTogglePlaying: RG,
        getReadout: HG = null
      } = GG;
      const {
        t: tG
      } = (0, hG.w)(), {
        clientEscMenuOptions: Lb
      } = (0, dG.o)(["clientEscMenuOptions"]), Ub = (0, wG.useRef)(null), Yb = (0, wG.useRef)(null), Vb = (0, wG.useRef)(null), pb = (0, JG.d)(Ub), [fb, Qb] = (0, wG.useState)(!1), [Kb, hb] = (0, wG.useState)(!1), [db, Jb] = (0, wG.useState)(!0), rb = (0, wG.useRef)(!1), [zb, Eb] = (0, wG.useState)(!1), ob = Kb || !db && zb, [Xb, ub] = (0, wG.useState)(!1), [ib, Cb] = (0, wG.useState)(!0), [Wb, mb] = (0, wG.useState)(null), Ib = AG.min, [Fb, vb] = (0, wG.useState)(Ib);
      Fb[0] === Ib[0] && Fb[1] === Ib[1] && Fb[2] === Ib[2] || (vb(Ib), null !== Wb && mb({
        ...Wb,
        position: yb(Wb.position, yb(Fb, kb(Ib, -1)))
      }));
      const ab = (0, wG.useMemo)((() => function(GG) {
          return [GG.max[0] - GG.min[0] + 1, GG.max[1] - GG.min[1] + 1, GG.max[2] - GG.min[2] + 1]
        }(AG)), [AG]),
        cb = (0, wG.useMemo)((() => function(GG, bG) {
          const ZG = [],
            wG = [];
          for (const [SG, LG] of Object.entries(GG.frequencies)) {
            const GG = Number(SG);
            for (const [SG, yG] of Object.entries(LG)) {
              const LG = Number(SG);
              for (const [SG, kG] of Object.entries(yG)) kG <= 0 || (ZG.push(GG - bG[0], LG - bG[1], Number(SG) - bG[2]), wG.push(kG))
            }
          }
          return {
            positions: Int32Array.from(ZG),
            values: Float64Array.from(wG),
            count: wG.length
          }
        }(bG, Ib)), [bG, Ib]),
        lb = iG * Lb.cameraFOV / 100,
        jb = pb.height > 0 ? pb.width / pb.height : 1,
        Pb = (0, wG.useMemo)((() => function(GG, bG) {
          return {
            min: [GG.min[0] - bG[0], GG.min[1] - bG[1], GG.min[2] - bG[2]],
            max: [GG.max[0] - bG[0] + 1, GG.max[1] - bG[1] + 1, GG.max[2] - bG[2] + 1]
          }
        }(sG, Ib)), [sG, Ib]),
        Mb = Zb(Pb, jb, lb),
        Ab = null !== Wb && void 0 !== Wb ? Wb : Mb,
        sb = (0, wG.useRef)({
          fittedView: Mb,
          fieldOfView: lb,
          mouseSensitivity: Lb.mouseSensitivity,
          canLock: db
        });
      sb.current = {
        fittedView: Mb,
        fieldOfView: lb,
        mouseSensitivity: Lb.mouseSensitivity,
        canLock: db
      };
      const qb = (0, wG.useMemo)((() => {
          if (!ob) return null;
          const GG = (GG, ZG, wG) => {
              var SG, LG, yG;
              return null !== (SG = null === (LG = bG.frequencies[GG + Ib[0]]) || void 0 === LG || null === (yG = LG[ZG + Ib[1]]) || void 0 === yG ? void 0 : yG[wG + Ib[2]]) && void 0 !== SG ? SG : 0
            },
            wG = function(GG, bG, ZG, wG) {
              let SG = 0,
                LG = 1 / 0;
              for (const pG of [0, 1, 2]) {
                if (0 === bG[pG]) {
                  if (GG[pG] < 0 || GG[pG] > ZG[pG]) return null;
                  continue
                }
                const wG = (0 - GG[pG]) / bG[pG],
                  yG = (ZG[pG] - GG[pG]) / bG[pG];
                SG = Math.max(SG, Math.min(wG, yG)), LG = Math.min(LG, Math.max(wG, yG))
              }
              if (SG > LG) return null;
              const yG = [0, 1, 2].map((wG => Math.min(ZG[wG] - 1, Math.max(0, Math.floor(GG[wG] + bG[wG] * SG))))),
                kG = [0, 1, 2].map((GG => Math.sign(bG[GG]))),
                UG = [0, 1, 2].map((ZG => {
                  if (0 === kG[ZG]) return 1 / 0;
                  return ((kG[ZG] > 0 ? yG[ZG] + 1 : yG[ZG]) - GG[ZG]) / bG[ZG]
                })),
                YG = [0, 1, 2].map((GG => 0 === kG[GG] ? 1 / 0 : Math.abs(1 / bG[GG])));
              let VG = null;
              for (;;) {
                const GG = wG(yG[0], yG[1], yG[2]);
                if (GG >= 1) return yG;
                GG > 0 && (VG = [yG[0], yG[1], yG[2]]);
                const bG = UG[0] < UG[1] ? UG[0] < UG[2] ? 0 : 2 : UG[1] < UG[2] ? 1 : 2;
                if (UG[bG] > LG) return VG;
                if (yG[bG] += kG[bG], UG[bG] += YG[bG], yG[bG] < 0 || yG[bG] >= ZG[bG]) return VG
              }
            }(Ab.position, Gb(Ab), ab, ((bG, wG, SG) => (0, EG.A)(GG(bG, wG, SG), ZG, cG)));
          return null === wG ? null : {
            x: wG[0] + Ib[0],
            y: wG[1] + Ib[1],
            z: wG[2] + Ib[2],
            value: GG(wG[0], wG[1], wG[2])
          }
        }), [ob, bG, Ib, Ab, ab, ZG, cG]),
        {
          keyHandlers: nb
        } = (0, oG.h)({
          isEnabled: ob,
          claimedKeyCodes: vG,
          Vf: GG => {
            mb((bG => function(GG, bG) {
              const ZG = [Math.sin(GG.heading), 0, Math.cos(GG.heading)],
                wG = yb(yb(kb(ZG, bG.forward), kb(bb(GG.heading), bG.right)), [0, bG.up, 0]);
              return {
                ...GG,
                position: yb(GG.position, wG)
              }
            }(null !== bG && void 0 !== bG ? bG : sb.current.fittedView, GG)))
          },
          onZoomChange: ub
        });
      (0, wG.useEffect)((() => {
        const GG = Yb.current;
        if (!GG) return;
        let bG;
        try {
          bG = function(GG, bG) {
            const ZG = new SG.b(GG, !0, {
                stencil: !1
              }, !0),
              wG = new LG.d(ZG),
              [QG, KG, hG] = EG.U;
            wG.clearColor = new YG.e(QG / 255, KG / 255, hG / 255, 1);
            const dG = new yG.c("Heatmap3DCamera", VG.mK.Zero(), wG);
            dG.fov = bG, dG.minZ = .05;
            const JG = new kG.d("Heatmap3DLight", new VG.mK(.4, 1, -.6), wG);
            JG.diffuse = YG.Color3.White(), JG.groundColor = YG.Color3.Black(), JG.specular = YG.Color3.Black();
            const rG = new UG.StandardMaterial("Heatmap3DCellMaterial", wG);
            rG.diffuseColor = new YG.Color3(.4, .4, .4), rG.emissiveColor = new YG.Color3(.62, .62, .62), rG.specularColor = YG.Color3.Black();
            const zG = (0, pG.e)("Heatmap3DCells", {
              size: 1
            }, wG);
            zG.material = rG, zG.qh = !1, zG.WK = !0, zG.isVisible = !1;
            const oG = (0, pG.e)("Heatmap3DTranslucentCells", {
              size: 1
            }, wG);
            oG.material = rG, oG.hasVertexAlpha = !0, oG.qh = !1, oG.WK = !0, oG.isVisible = !1;
            const XG = new UG.StandardMaterial("Heatmap3DSchematicMaterial", wG);
            XG.diffuseColor = new YG.Color3(.6, .6, .6), XG.emissiveColor = new YG.Color3(.4, .4, .4), XG.specularColor = YG.Color3.Black();
            const uG = (0, pG.e)("Heatmap3DSchematicBlocks", {
              size: 1
            }, wG);
            uG.material = XG, uG.qh = !1, uG.WK = !0, uG.isVisible = !1;
            const iG = (0, fG.e)("Heatmap3DTarget", {
              lines: BG([-.52, -.52, -.52], [.52, .52, .52])
            }, wG);
            return iG.color = new YG.Color3(.06, .14, .23), iG.renderingGroupId = 1, iG.qh = !1, iG.isVisible = !1, {
              engine: ZG,
              Ah: wG,
              camera: dG,
              cells: zG,
              translucentCells: oG,
              translucent: {
                fp: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: uG,
              targetOutline: iG,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: bG,
              needsRender: !0
            }
          }(GG, sb.current.fieldOfView)
        } catch (ZG) {
          return console.error("Failed to start the 3D heatmap", ZG), void Qb(!0)
        }
        return Vb.current = bG, bG.engine.runRenderLoop((() => {
          const GG = bG.camera;
          GG.fov !== bG.targetFieldOfView && (GG.fov += (bG.targetFieldOfView - GG.fov) * (GG.fov > bG.targetFieldOfView ? .3 : .2), Math.abs(bG.targetFieldOfView - GG.fov) < 5e-4 && (GG.fov = bG.targetFieldOfView), bG.needsRender = !0), bG.needsRender && (bG.Ah.render(), bG.needsRender = !bG.Ah.isReady() || !bG.engine.areAllEffectsReady())
        })), () => {
          Vb.current = null, bG.engine.dispose()
        }
      }), []), (0, wG.useEffect)((() => {
        const GG = Yb.current;
        if (!GG) return;
        const bG = () => {
            rb.current = !1, hb(document.pointerLockElement === GG)
          },
          ZG = () => {
            rb.current && (rb.current = !1, Jb(!1))
          },
          wG = bG => {
            const ZG = !sb.current.canLock && document.activeElement === GG && 0 !== (1 & bG.buttons);
            if (document.pointerLockElement !== GG && !ZG) return;
            const wG = sb.current.mouseSensitivity * WG;
            mb((GG => function(GG, bG, ZG) {
              const wG = 2 * Math.PI;
              return {
                ...GG,
                heading: ((GG.heading + bG) % wG + wG) % wG,
                pitch: Math.max(-MG, Math.min(MG, GG.pitch + ZG))
              }
            }(null !== GG && void 0 !== GG ? GG : sb.current.fittedView, bG.movementX * wG, bG.movementY * wG)))
          };
        return document.addEventListener("pointerlockchange", bG), document.addEventListener("pointerlockerror", ZG), document.addEventListener("pointermove", wG), () => {
          document.removeEventListener("pointerlockchange", bG), document.removeEventListener("pointerlockerror", ZG), document.removeEventListener("pointermove", wG), document.pointerLockElement === GG && (0, XG.d)()
        }
      }), []), (0, wG.useEffect)((() => {
        const GG = Vb.current;
        null !== GG && 0 !== pb.width && 0 !== pb.height && (GG.engine.resize(), GG.needsRender = !0)
      }), [pb.width, pb.height]), (0, wG.useEffect)((() => {
        const GG = Vb.current;
        null !== GG && (GG.targetFieldOfView = lb * (Xb ? CG : 1))
      }), [lb, Xb]), (0, wG.useEffect)((() => {
        const GG = Vb.current;
        null !== GG && function(GG, bG, ZG, wG) {
          const SG = [],
            LG = [],
            yG = [],
            kG = [];
          for (let UG = 0; UG < bG.count; UG++) {
            const GG = bG.values[UG],
              YG = (0, EG.A)(GG, ZG, wG);
            if (YG <= 0) continue;
            const [VG, pG, fG] = (0, EG.p)((0, EG.M)(GG, ZG)), QG = YG >= 1;
            (QG ? SG : yG).push(bG.positions[3 * UG] + .5, bG.positions[3 * UG + 1] + .5, bG.positions[3 * UG + 2] + .5), (QG ? LG : kG).push(VG / 255, pG / 255, fG / 255, YG)
          }
          OG(GG.cells, Float32Array.from(SG), Float32Array.from(LG), LG.length / 4), GG.translucent = {
            fp: Float32Array.from(yG),
            colours: Float32Array.from(kG),
            count: kG.length / 4
          }, GG.translucentSortedFrom = null, xG(GG), GG.needsRender = !0
        }(GG, cb, ZG, cG)
      }), [cb, ZG, cG]), (0, wG.useEffect)((() => {
        const GG = Vb.current;
        null !== GG && function(GG, bG) {
          GG.chunkGridOrigin = bG, GG.chunkGridCentre = null, NG(GG)
        }(GG, AG.min)
      }), [AG]), (0, wG.useEffect)((() => {
        const GG = Vb.current;
        null !== GG && function(GG, bG, ZG) {
          const wG = [],
            SG = [];
          if (null !== bG) {
            const {
              positions: GG,
              colours: LG,
              count: yG
            } = bG.surface;
            for (let bG = 0; bG < yG; bG++) {
              const yG = [GG[3 * bG], GG[3 * bG + 1], GG[3 * bG + 2]];
              [0, 1, 2].every((GG => yG[GG] >= ZG.min[GG] - aG && yG[GG] <= ZG.max[GG] + aG)) && (wG.push(yG[0] - ZG.min[0] + .5, yG[1] - ZG.min[1] + .5, yG[2] - ZG.min[2] + .5), SG.push(LG[3 * bG] / 255, LG[3 * bG + 1] / 255, LG[3 * bG + 2] / 255, 1))
            }
          }
          OG(GG.schematicBlocks, Float32Array.from(wG), Float32Array.from(SG), SG.length / 4), GG.needsRender = !0
        }(GG, qG, AG)
      }), [qG, AG]), (0, wG.useEffect)((() => {
        const GG = Vb.current;
        null !== GG && null !== GG.chunkGrid && (GG.chunkGrid.isVisible = ib, GG.needsRender = !0)
      }), [ib, AG]), (0, wG.useEffect)((() => {
        const GG = Vb.current;
        null !== GG && function(GG, bG, ZG) {
          const {
            camera: wG
          } = GG;
          wG.position.set(bG.position[0], bG.position[1], bG.position[2]), wG.rotation.set(bG.pitch, bG.heading, 0);
          const SG = (lG + 1) * KG.d.rK * Math.sqrt(3);
          wG.maxZ = Math.max(SG, Math.hypot(...yb(bG.position, kb(Sb({
            min: [0, 0, 0],
            max: ZG
          }), -1))) + 2 * Math.hypot(...ZG)), NG(GG), xG(GG), GG.needsRender = !0
        }(GG, Ab, ab)
      }), [Ab, ab]), (0, wG.useEffect)((() => {
        const GG = Vb.current;
        null !== GG && (GG.targetOutline.isVisible = null !== qb, null !== qb && GG.targetOutline.position.set(qb.x - Ib[0] + .5, qb.y - Ib[1] + .5, qb.z - Ib[2] + .5), GG.needsRender = !0)
      }), [qb, Ib]);
      return (0, uG.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: Ub,
        children: [(0, uG.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: Yb,
          style: {
            width: `${pb.width}px`,
            height: `${pb.height}px`
          },
          tabIndex: 0,
          "aria-label": tG("3D heatmap"),
          onClick: () => {
            const GG = Yb.current;
            if (null === GG) return;
            if (GG.focus({
                preventScroll: !0
              }), Kb || !db) return;
            const bG = GG.requestPointerLock();
            bG instanceof Promise ? bG.catch((GG => {
              GG instanceof DOMException && ("WrongDocumentError" === GG.name || "NotSupportedError" === GG.name) && Jb(!1)
            })) : rb.current = !0
          },
          ...nb,
          onKeyDown: GG => {
            if (ob && mG.has(GG.code)) return GG.preventDefault(), void(() => {
              const GG = Yb.current;
              null !== GG && document.pointerLockElement === GG ? (0, XG.d)() : null === GG || void 0 === GG || GG.blur()
            })();
            const bG = IG[GG.code];
            return ob && void 0 !== bG ? (GG.preventDefault(), void gG(bG)) : ob && (0, oG.d)("replayPlayPause", GG.code) && !(0, oG.d)("Zoom", GG.code) ? (GG.preventDefault(), void(GG.repeat || RG())) : ob && GG.code === FG ? (GG.preventDefault(), void eG()) : ob && GG.code === PG ? (GG.preventDefault(), void mb(null)) : ob && GG.code === jG ? (GG.preventDefault(), void Cb((GG => !GG))) : void nb.onKeyDown(GG)
          },
          onFocus: () => {
            Eb(!0)
          },
          onBlur: () => {
            Eb(!1), nb.onBlur()
          }
        }), fb && (0, uG.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: tG("3D view isn't available in this browser.")
        }), ob && (0, uG.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, uG.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: Ab.position.map(((GG, bG) => (GG + Ib[bG]).toFixed(2))).join(" ")
        }), ib && (0, uG.jsx)(DG, {
          heading: Ab.heading,
          pitch: Ab.pitch,
          onViewFrom: GG => {
            const bG = kb(GG, -1),
              ZG = 0 === bG[1] ? {
                heading: Math.atan2(bG[0], bG[2]),
                pitch: 0
              } : {
                heading: Ab.heading,
                pitch: bG[1] < 0 ? MG : -MG
              };
            mb(Zb(Pb, jb, lb, ZG))
          },
          onTurn: (GG, bG) => {
            mb((ZG => function(GG, bG, ZG, wG) {
              return wb(GG, bG, {
                heading: GG.heading + ZG * TG,
                pitch: Math.max(-MG, Math.min(MG, GG.pitch + wG * TG))
              })
            }(null !== ZG && void 0 !== ZG ? ZG : sb.current.fittedView, Sb(Pb), GG, bG)))
          },
          onFlip: () => {
            mb((GG => function(GG, bG) {
              return wb(GG, bG, {
                heading: GG.heading + Math.PI,
                pitch: -GG.pitch
              })
            }(null !== GG && void 0 !== GG ? GG : sb.current.fittedView, Sb(Pb))))
          }
        }), null !== qb && (0, uG.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === HG ? tG("studio:heatmapBlockReadout", {
            x: qb.x,
            y: qb.y,
            z: qb.z,
            count: (0, QG.O)(qb.value)
          }) : HG(qb.x, qb.y, qb.z, qb.value)
        }), (0, uG.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [nG, (0, uG.jsx)(rG.K, {
            active: null === Wb,
            onClick: () => {
              mb(null)
            },
            children: (0, uG.jsx)(zG.c, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function DG(GG) {
      let {
        heading: bG,
        pitch: ZG,
        onViewFrom: SG,
        onTurn: LG,
        onFlip: yG
      } = GG;
      const {
        t: kG
      } = (0, hG.w)(), UG = (0, wG.useRef)(null), YG = Gb({
        heading: bG,
        pitch: ZG
      }), VG = bb(bG), pG = Yb(YG, VG), fG = gG + eG + 2, QG = nG.flatMap((GG => [1, -1].map((bG => {
        const ZG = kb(GG.direction, bG);
        return {
          ...GG,
          sign: bG,
          direction: ZG,
          endX: fG + Ub(ZG, VG) * gG,
          endY: fG - Ub(ZG, pG) * gG,
          depth: Ub(ZG, YG)
        }
      })))).sort(((GG, bG) => bG.depth - GG.depth));
      return (0, uG.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * fG,
        height: 2 * fG,
        "aria-hidden": !0,
        onPointerDown: GG => {
          var bG, ZG;
          GG.currentTarget.setPointerCapture(GG.pointerId);
          const wG = GG.target,
            SG = wG.getAttribute("data-end");
          UG.current = {
            pointerId: GG.pointerId,
            x: GG.clientX,
            y: GG.clientY,
            travel: 0,
            side: null === SG ? null : null !== (bG = null === (ZG = QG[Number(SG)]) || void 0 === ZG ? void 0 : ZG.direction) && void 0 !== bG ? bG : null,
            isOnMiddle: wG.hasAttribute("data-middle")
          }
        },
        onPointerMove: GG => {
          const bG = UG.current;
          if (null === bG || bG.pointerId !== GG.pointerId) return;
          const ZG = GG.clientX - bG.x,
            wG = GG.clientY - bG.y;
          bG.x = GG.clientX, bG.y = GG.clientY, bG.travel += Math.abs(ZG) + Math.abs(wG), bG.travel >= HG && LG(ZG, wG)
        },
        onPointerUp: GG => {
          const bG = UG.current;
          UG.current = null, null === bG || bG.pointerId !== GG.pointerId || bG.travel >= HG || (null !== bG.side ? SG(bG.side) : bG.isOnMiddle && yG())
        },
        onPointerCancel: () => {
          UG.current = null
        },
        children: [QG.map(((GG, bG) => {
          const ZG = GG.sign > 0;
          return (0, uG.jsxs)("g", {
            children: [(0, uG.jsx)("line", {
              x1: fG,
              y1: fG,
              x2: GG.endX,
              y2: GG.endY,
              stroke: GG.colour,
              strokeOpacity: ZG ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, uG.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": bG,
              cx: GG.endX,
              cy: GG.endY,
              r: ZG ? eG : eG - 1,
              fill: GG.colour,
              fillOpacity: ZG ? 1 : .3,
              stroke: GG.colour,
              strokeWidth: ZG ? 0 : 1.5,
              children: (0, uG.jsx)("title", {
                children: `${kG("View from")} ${ZG?"+":"\u2212"}${GG.name}`
              })
            }), ZG && (0, uG.jsx)("text", {
              pointerEvents: "none",
              x: GG.endX,
              y: GG.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: GG.name
            })]
          }, `${ZG?"+":"-"}${GG.name}`)
        })), (0, uG.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: fG,
          cy: fG,
          r: RG,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, uG.jsx)("title", {
            children: kG("View from the opposite side")
          })
        })]
      })
    }

    function NG(GG) {
      var bG, ZG, wG;
      const {
        chunkGridOrigin: SG,
        camera: LG
      } = GG;
      if (null === SG) return;
      const yG = [LG.position.x, LG.position.y, LG.position.z],
        kG = [0, 2].map((GG => Math.floor((yG[GG] + SG[GG]) / KG.d.rK))),
        UG = GG.chunkGridCentre;
      if (null !== UG && UG.every(((GG, bG) => GG === kG[bG]))) return;
      const pG = null === (bG = null === (ZG = GG.chunkGrid) || void 0 === ZG ? void 0 : ZG.isVisible) || void 0 === bG || bG;
      null === (wG = GG.chunkGrid) || void 0 === wG || wG.dispose();
      const [QG, hG] = [0, 2].map(((GG, bG) => {
        const ZG = [];
        for (let wG = kG[bG] - lG; wG <= kG[bG] + lG + 1; wG++) ZG.push(wG * KG.d.rK - SG[GG]);
        return ZG
      })), dG = -SG[1], JG = [];
      for (const YG of hG) JG.push([new VG.mK(QG[0], dG, YG), new VG.mK(QG[QG.length - 1], dG, YG)]);
      for (const YG of QG) JG.push([new VG.mK(YG, dG, hG[0]), new VG.mK(YG, dG, hG[hG.length - 1])]);
      const rG = (0, fG.e)("Heatmap3DChunkGrid", {
        lines: JG
      }, GG.Ah);
      rG.color = new YG.Color3(.45, .6, .78), rG.qh = !1, rG.isVisible = pG, GG.chunkGrid = rG, GG.chunkGridCentre = kG, GG.needsRender = !0
    }

    function OG(GG, bG, ZG, wG) {
      GG.yGG("matrix", function(GG, bG) {
        const ZG = new Float32Array(16 * bG);
        for (let wG = 0; wG < bG; wG++) {
          const bG = 16 * wG;
          ZG[bG] = 1, ZG[bG + 5] = 1, ZG[bG + 10] = 1, ZG[bG + 12] = GG[3 * wG], ZG[bG + 13] = GG[3 * wG + 1], ZG[bG + 14] = GG[3 * wG + 2], ZG[bG + 15] = 1
        }
        return ZG
      }(bG, wG), 16, !0), GG.yGG("color", ZG, 4, !0), GG.isVisible = wG > 0
    }

    function xG(GG) {
      const {
        camera: bG,
        translucent: ZG
      } = GG, wG = [bG.position.x, bG.position.y, bG.position.z], SG = GG.translucentSortedFrom;
      if (null !== SG && Math.hypot(wG[0] - SG[0], wG[1] - SG[1], wG[2] - SG[2]) < cG) return;
      GG.translucentSortedFrom = wG;
      const LG = new Float64Array(ZG.count),
        yG = new Uint32Array(ZG.count);
      for (let YG = 0; YG < ZG.count; YG++) {
        const GG = ZG.fp[3 * YG] - wG[0],
          bG = ZG.fp[3 * YG + 1] - wG[1],
          SG = ZG.fp[3 * YG + 2] - wG[2];
        LG[YG] = GG * GG + bG * bG + SG * SG, yG[YG] = YG
      }
      yG.sort(((GG, bG) => LG[bG] - LG[GG]));
      const kG = new Float32Array(3 * ZG.count),
        UG = new Float32Array(4 * ZG.count);
      yG.forEach(((GG, bG) => {
        kG.set(ZG.fp.subarray(3 * GG, 3 * GG + 3), 3 * bG), UG.set(ZG.colours.subarray(4 * GG, 4 * GG + 4), 4 * bG)
      })), OG(GG.translucentCells, kG, UG, ZG.count), GG.needsRender = !0
    }

    function BG(GG, bG) {
      const ZG = (ZG, wG, SG) => new VG.mK(0 === ZG ? GG[0] : bG[0], 0 === wG ? GG[1] : bG[1], 0 === SG ? GG[2] : bG[2]),
        wG = [];
      for (const SG of [0, 1])
        for (const GG of [0, 1]) wG.push([ZG(0, SG, GG), ZG(1, SG, GG)], [ZG(SG, 0, GG), ZG(SG, 1, GG)], [ZG(SG, GG, 0), ZG(SG, GG, 1)]);
      return wG
    }

    function Gb(GG) {
      return [Math.sin(GG.heading) * Math.cos(GG.pitch), -Math.sin(GG.pitch), Math.cos(GG.heading) * Math.cos(GG.pitch)]
    }

    function bb(GG) {
      return [Math.cos(GG), 0, -Math.sin(GG)]
    }

    function Zb(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: AG,
        pitch: sG
      };
      const SG = [GG.max[0] - GG.min[0], GG.max[1] - GG.min[1], GG.max[2] - GG.min[2]],
        LG = Gb(wG),
        yG = bb(wG.heading),
        kG = Yb(LG, yG),
        UG = Math.tan(ZG / 2),
        YG = UG * bG;
      let VG = 1;
      for (const pG of [-SG[0] / 2, SG[0] / 2])
        for (const GG of [-SG[1] / 2, SG[1] / 2])
          for (const bG of [-SG[2] / 2, SG[2] / 2]) {
            const ZG = [pG, GG, bG],
              wG = Ub(ZG, LG);
            VG = Math.max(VG, Math.abs(Ub(ZG, yG)) / YG - wG, Math.abs(Ub(ZG, kG)) / UG - wG)
          }
      return {
        position: yb([GG.min[0] + SG[0] / 2, GG.min[1] + SG[1] / 2, GG.min[2] + SG[2] / 2], kb(LG, -VG * qG)),
        heading: wG.heading,
        pitch: wG.pitch
      }
    }

    function wb(GG, bG, ZG) {
      const wG = Lb(GG),
        SG = Lb(ZG),
        LG = yb(GG.position, kb(bG, -1)),
        yG = [0, 1, 2].reduce(((GG, bG) => yb(GG, kb(SG[bG], Ub(LG, wG[bG])))), [0, 0, 0]);
      return {
        position: yb(bG, yG),
        heading: ZG.heading,
        pitch: ZG.pitch
      }
    }

    function Sb(GG) {
      return kb(yb(GG.min, GG.max), .5)
    }

    function Lb(GG) {
      const bG = Gb(GG),
        ZG = bb(GG.heading);
      return [bG, ZG, Yb(bG, ZG)]
    }

    function yb(GG, bG) {
      return [GG[0] + bG[0], GG[1] + bG[1], GG[2] + bG[2]]
    }

    function kb(GG, bG) {
      return [GG[0] * bG, GG[1] * bG, GG[2] * bG]
    }

    function Ub(GG, bG) {
      return GG[0] * bG[0] + GG[1] * bG[1] + GG[2] * bG[2]
    }

    function Yb(GG, bG) {
      return [GG[1] * bG[2] - GG[2] * bG[1], GG[2] * bG[0] - GG[0] * bG[2], GG[0] * bG[1] - GG[1] * bG[0]]
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);