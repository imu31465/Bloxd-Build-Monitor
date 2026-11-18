export const id = 230;
export const ids = [230];
export const modules = {
  38615: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => LJ
    });
    ZJ(5802);
    var FJ = ZJ(47),
      UJ = ZJ(38624),
      eJ = ZJ(38872),
      XJ = ZJ(38976),
      AJ = ZJ(39009),
      qJ = ZJ(39029),
      jJ = ZJ(36229),
      YJ = ZJ(36165),
      hJ = ZJ(39156),
      DJ = ZJ(39219),
      sJ = (ZJ(39250), ZJ(1122)),
      nJ = ZJ(157),
      GJ = ZJ(1086),
      fJ = ZJ(13),
      xJ = ZJ(2383),
      rJ = ZJ(1329),
      vJ = ZJ(942),
      mJ = ZJ(5798),
      QJ = ZJ(5807),
      EJ = ZJ(3853),
      VJ = ZJ(990);
    const KJ = 1.2,
      yJ = .2,
      SJ = .0066 * Math.PI / 180,
      IJ = new Set(["Escape", "KeyG"]),
      MJ = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      bJ = "ArrowUp",
      wJ = new Set([...Object.keys(MJ), bJ, "ArrowDown"]),
      WJ = 32,
      gJ = 1,
      HJ = 10,
      PJ = "F4",
      kJ = "Period",
      pJ = Math.PI / 2 - .001,
      dJ = Math.PI / 6,
      zJ = Math.PI / 6,
      NJ = 1.08,
      OJ = [{
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
      TJ = 24,
      CJ = 7,
      uJ = 4,
      iJ = .01,
      RJ = 4;

    function LJ(JJ) {
      let {
        heatmap: cJ,
        scale: ZJ,
        fullyOpaqueFrom: gJ,
        bounds: dJ,
        fitBounds: zJ,
        schematic: NJ,
        controls: OJ,
        onStepTime: TJ,
        onShowAllTime: CJ,
        onTogglePlaying: uJ,
        getReadout: RJ = null
      } = JJ;
      const {
        t: LJ
      } = (0, GJ.F)(), {
        clientEscMenuOptions: ec
      } = (0, fJ.j)(["clientEscMenuOptions"]), qc = (0, FJ.useRef)(null), jc = (0, FJ.useRef)(null), Yc = (0, FJ.useRef)(null), hc = (0, xJ.d)(qc), [Dc, sc] = (0, FJ.useState)(!1), [nc, Gc] = (0, FJ.useState)(!1), [fc, xc] = (0, FJ.useState)(!0), rc = (0, FJ.useRef)(!1), [vc, mc] = (0, FJ.useState)(!1), Qc = nc || !fc && vc, [Ec, Vc] = (0, FJ.useState)(!1), [Kc, yc] = (0, FJ.useState)(!0), [Sc, Ic] = (0, FJ.useState)(null), Mc = dJ.min, [bc, wc] = (0, FJ.useState)(Mc);
      bc[0] === Mc[0] && bc[1] === Mc[1] && bc[2] === Mc[2] || (wc(Mc), null !== Sc && Ic({
        ...Sc,
        position: Xc(Sc.position, Xc(bc, Ac(Mc, -1)))
      }));
      const Wc = (0, FJ.useMemo)((() => function(JJ) {
          return [JJ.max[0] - JJ.min[0] + 1, JJ.max[1] - JJ.min[1] + 1, JJ.max[2] - JJ.min[2] + 1]
        }(dJ)), [dJ]),
        gc = (0, FJ.useMemo)((() => function(JJ, cJ) {
          const ZJ = [],
            FJ = [];
          for (const [UJ, eJ] of Object.entries(JJ.frequencies)) {
            const JJ = Number(UJ);
            for (const [UJ, XJ] of Object.entries(eJ)) {
              const eJ = Number(UJ);
              for (const [UJ, AJ] of Object.entries(XJ)) AJ <= 0 || (ZJ.push(JJ - cJ[0], eJ - cJ[1], Number(UJ) - cJ[2]), FJ.push(AJ))
            }
          }
          return {
            positions: Int32Array.from(ZJ),
            values: Float64Array.from(FJ),
            count: FJ.length
          }
        }(cJ, Mc)), [cJ, Mc]),
        Hc = KJ * ec.cameraFOV / 100,
        Pc = hc.height > 0 ? hc.width / hc.height : 1,
        kc = (0, FJ.useMemo)((() => function(JJ, cJ) {
          return {
            min: [JJ.min[0] - cJ[0], JJ.min[1] - cJ[1], JJ.min[2] - cJ[2]],
            max: [JJ.max[0] - cJ[0] + 1, JJ.max[1] - cJ[1] + 1, JJ.max[2] - cJ[2] + 1]
          }
        }(zJ, Mc)), [zJ, Mc]),
        pc = Zc(kc, Pc, Hc),
        dc = null !== Sc && void 0 !== Sc ? Sc : pc,
        zc = (0, FJ.useRef)({
          fittedView: pc,
          fieldOfView: Hc,
          mouseSensitivity: ec.mouseSensitivity,
          canLock: fc
        });
      zc.current = {
        fittedView: pc,
        fieldOfView: Hc,
        mouseSensitivity: ec.mouseSensitivity,
        canLock: fc
      };
      const Nc = (0, FJ.useMemo)((() => {
          if (!Qc) return null;
          const JJ = (JJ, ZJ, FJ) => {
              var UJ, eJ, XJ;
              return null !== (UJ = null === (eJ = cJ.frequencies[JJ + Mc[0]]) || void 0 === eJ || null === (XJ = eJ[ZJ + Mc[1]]) || void 0 === XJ ? void 0 : XJ[FJ + Mc[2]]) && void 0 !== UJ ? UJ : 0
            },
            FJ = function(JJ, cJ, ZJ, FJ) {
              let UJ = 0,
                eJ = 1 / 0;
              for (const hJ of [0, 1, 2]) {
                if (0 === cJ[hJ]) {
                  if (JJ[hJ] < 0 || JJ[hJ] > ZJ[hJ]) return null;
                  continue
                }
                const FJ = (0 - JJ[hJ]) / cJ[hJ],
                  XJ = (ZJ[hJ] - JJ[hJ]) / cJ[hJ];
                UJ = Math.max(UJ, Math.min(FJ, XJ)), eJ = Math.min(eJ, Math.max(FJ, XJ))
              }
              if (UJ > eJ) return null;
              const XJ = [0, 1, 2].map((FJ => Math.min(ZJ[FJ] - 1, Math.max(0, Math.floor(JJ[FJ] + cJ[FJ] * UJ))))),
                AJ = [0, 1, 2].map((JJ => Math.sign(cJ[JJ]))),
                qJ = [0, 1, 2].map((ZJ => {
                  if (0 === AJ[ZJ]) return 1 / 0;
                  return ((AJ[ZJ] > 0 ? XJ[ZJ] + 1 : XJ[ZJ]) - JJ[ZJ]) / cJ[ZJ]
                })),
                jJ = [0, 1, 2].map((JJ => 0 === AJ[JJ] ? 1 / 0 : Math.abs(1 / cJ[JJ])));
              let YJ = null;
              for (;;) {
                const JJ = FJ(XJ[0], XJ[1], XJ[2]);
                if (JJ >= 1) return XJ;
                JJ > 0 && (YJ = [XJ[0], XJ[1], XJ[2]]);
                const cJ = qJ[0] < qJ[1] ? qJ[0] < qJ[2] ? 0 : 2 : qJ[1] < qJ[2] ? 1 : 2;
                if (qJ[cJ] > eJ) return YJ;
                if (XJ[cJ] += AJ[cJ], qJ[cJ] += jJ[cJ], XJ[cJ] < 0 || XJ[cJ] >= ZJ[cJ]) return YJ
              }
            }(dc.position, Jc(dc), Wc, ((cJ, FJ, UJ) => (0, mJ.B)(JJ(cJ, FJ, UJ), ZJ, gJ)));
          return null === FJ ? null : {
            x: FJ[0] + Mc[0],
            y: FJ[1] + Mc[1],
            z: FJ[2] + Mc[2],
            value: JJ(FJ[0], FJ[1], FJ[2])
          }
        }), [Qc, cJ, Mc, dc, Wc, ZJ, gJ]),
        {
          keyHandlers: Oc
        } = (0, QJ.d)({
          isEnabled: Qc,
          claimedKeyCodes: wJ,
          cD: JJ => {
            Ic((cJ => function(JJ, cJ) {
              const ZJ = [Math.sin(JJ.heading), 0, Math.cos(JJ.heading)],
                FJ = Xc(Xc(Ac(ZJ, cJ.forward), Ac(cc(JJ.heading), cJ.right)), [0, cJ.up, 0]);
              return {
                ...JJ,
                position: Xc(JJ.position, FJ)
              }
            }(null !== cJ && void 0 !== cJ ? cJ : zc.current.fittedView, JJ)))
          },
          onZoomChange: Vc
        });
      (0, FJ.useEffect)((() => {
        const JJ = jc.current;
        if (!JJ) return;
        let cJ;
        try {
          cJ = function(JJ, cJ) {
            const ZJ = new UJ.e(JJ, !0, {
                stencil: !1
              }, !0),
              FJ = new eJ.b(ZJ),
              [sJ, nJ, GJ] = mJ.V;
            FJ.clearColor = new jJ.e(sJ / 255, nJ / 255, GJ / 255, 1);
            const fJ = new XJ.e("Heatmap3DCamera", YJ.Pn.Zero(), FJ);
            fJ.fov = cJ, fJ.minZ = .05;
            const xJ = new AJ.b("Heatmap3DLight", new YJ.Pn(.4, 1, -.6), FJ);
            xJ.diffuse = jJ.Color3.White(), xJ.groundColor = jJ.Color3.Black(), xJ.specular = jJ.Color3.Black();
            const rJ = new qJ.StandardMaterial("Heatmap3DCellMaterial", FJ);
            rJ.diffuseColor = new jJ.Color3(.4, .4, .4), rJ.emissiveColor = new jJ.Color3(.62, .62, .62), rJ.specularColor = jJ.Color3.Black();
            const vJ = (0, hJ.c)("Heatmap3DCells", {
              size: 1
            }, FJ);
            vJ.material = rJ, vJ.aG = !1, vJ.Hn = !0, vJ.isVisible = !1;
            const QJ = (0, hJ.c)("Heatmap3DTranslucentCells", {
              size: 1
            }, FJ);
            QJ.material = rJ, QJ.hasVertexAlpha = !0, QJ.aG = !1, QJ.Hn = !0, QJ.isVisible = !1;
            const EJ = new qJ.StandardMaterial("Heatmap3DSchematicMaterial", FJ);
            EJ.diffuseColor = new jJ.Color3(.6, .6, .6), EJ.emissiveColor = new jJ.Color3(.4, .4, .4), EJ.specularColor = jJ.Color3.Black();
            const VJ = (0, hJ.c)("Heatmap3DSchematicBlocks", {
              size: 1
            }, FJ);
            VJ.material = EJ, VJ.aG = !1, VJ.Hn = !0, VJ.isVisible = !1;
            const KJ = (0, DJ.e)("Heatmap3DTarget", {
              lines: lJ([-.52, -.52, -.52], [.52, .52, .52])
            }, FJ);
            return KJ.color = new jJ.Color3(.06, .14, .23), KJ.renderingGroupId = 1, KJ.aG = !1, KJ.isVisible = !1, {
              engine: ZJ,
              iG: FJ,
              camera: fJ,
              cells: vJ,
              translucentCells: QJ,
              translucent: {
                gq: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: VJ,
              targetOutline: KJ,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: cJ,
              needsRender: !0
            }
          }(JJ, zc.current.fieldOfView)
        } catch (ZJ) {
          return console.error("Failed to start the 3D heatmap", ZJ), void sc(!0)
        }
        return Yc.current = cJ, cJ.engine.runRenderLoop((() => {
          const JJ = cJ.camera;
          JJ.fov !== cJ.targetFieldOfView && (JJ.fov += (cJ.targetFieldOfView - JJ.fov) * (JJ.fov > cJ.targetFieldOfView ? .3 : .2), Math.abs(cJ.targetFieldOfView - JJ.fov) < 5e-4 && (JJ.fov = cJ.targetFieldOfView), cJ.needsRender = !0), cJ.needsRender && (cJ.iG.render(), cJ.needsRender = !cJ.iG.isReady() || !cJ.engine.areAllEffectsReady())
        })), () => {
          Yc.current = null, cJ.engine.dispose()
        }
      }), []), (0, FJ.useEffect)((() => {
        const JJ = jc.current;
        if (!JJ) return;
        const cJ = () => {
            rc.current = !1, Gc(document.pointerLockElement === JJ)
          },
          ZJ = () => {
            rc.current && (rc.current = !1, xc(!1))
          },
          FJ = cJ => {
            const ZJ = !zc.current.canLock && document.activeElement === JJ && 0 !== (1 & cJ.buttons);
            if (document.pointerLockElement !== JJ && !ZJ) return;
            const FJ = zc.current.mouseSensitivity * SJ;
            Ic((JJ => function(JJ, cJ, ZJ) {
              const FJ = 2 * Math.PI;
              return {
                ...JJ,
                heading: ((JJ.heading + cJ) % FJ + FJ) % FJ,
                pitch: Math.max(-pJ, Math.min(pJ, JJ.pitch + ZJ))
              }
            }(null !== JJ && void 0 !== JJ ? JJ : zc.current.fittedView, cJ.movementX * FJ, cJ.movementY * FJ)))
          };
        return document.addEventListener("pointerlockchange", cJ), document.addEventListener("pointerlockerror", ZJ), document.addEventListener("pointermove", FJ), () => {
          document.removeEventListener("pointerlockchange", cJ), document.removeEventListener("pointerlockerror", ZJ), document.removeEventListener("pointermove", FJ), document.pointerLockElement === JJ && (0, EJ.c)()
        }
      }), []), (0, FJ.useEffect)((() => {
        const JJ = Yc.current;
        null !== JJ && 0 !== hc.width && 0 !== hc.height && (JJ.engine.resize(), JJ.needsRender = !0)
      }), [hc.width, hc.height]), (0, FJ.useEffect)((() => {
        const JJ = Yc.current;
        null !== JJ && (JJ.targetFieldOfView = Hc * (Ec ? yJ : 1))
      }), [Hc, Ec]), (0, FJ.useEffect)((() => {
        const JJ = Yc.current;
        null !== JJ && function(JJ, cJ, ZJ, FJ) {
          const UJ = [],
            eJ = [],
            XJ = [],
            AJ = [];
          for (let qJ = 0; qJ < cJ.count; qJ++) {
            const JJ = cJ.values[qJ],
              jJ = (0, mJ.B)(JJ, ZJ, FJ);
            if (jJ <= 0) continue;
            const [YJ, hJ, DJ] = (0, mJ.r)((0, mJ.N)(JJ, ZJ)), sJ = jJ >= 1;
            (sJ ? UJ : XJ).push(cJ.positions[3 * qJ] + .5, cJ.positions[3 * qJ + 1] + .5, cJ.positions[3 * qJ + 2] + .5), (sJ ? eJ : AJ).push(YJ / 255, hJ / 255, DJ / 255, jJ)
          }
          tJ(JJ.cells, Float32Array.from(UJ), Float32Array.from(eJ), eJ.length / 4), JJ.translucent = {
            gq: Float32Array.from(XJ),
            colours: Float32Array.from(AJ),
            count: AJ.length / 4
          }, JJ.translucentSortedFrom = null, oJ(JJ), JJ.needsRender = !0
        }(JJ, gc, ZJ, gJ)
      }), [gc, ZJ, gJ]), (0, FJ.useEffect)((() => {
        const JJ = Yc.current;
        null !== JJ && function(JJ, cJ) {
          JJ.chunkGridOrigin = cJ, JJ.chunkGridCentre = null, BJ(JJ)
        }(JJ, dJ.min)
      }), [dJ]), (0, FJ.useEffect)((() => {
        const JJ = Yc.current;
        null !== JJ && function(JJ, cJ, ZJ) {
          const FJ = [],
            UJ = [];
          if (null !== cJ) {
            const {
              positions: JJ,
              colours: eJ,
              count: XJ
            } = cJ.surface;
            for (let cJ = 0; cJ < XJ; cJ++) {
              const XJ = [JJ[3 * cJ], JJ[3 * cJ + 1], JJ[3 * cJ + 2]];
              [0, 1, 2].every((JJ => XJ[JJ] >= ZJ.min[JJ] - WJ && XJ[JJ] <= ZJ.max[JJ] + WJ)) && (FJ.push(XJ[0] - ZJ.min[0] + .5, XJ[1] - ZJ.min[1] + .5, XJ[2] - ZJ.min[2] + .5), UJ.push(eJ[3 * cJ] / 255, eJ[3 * cJ + 1] / 255, eJ[3 * cJ + 2] / 255, 1))
            }
          }
          tJ(JJ.schematicBlocks, Float32Array.from(FJ), Float32Array.from(UJ), UJ.length / 4), JJ.needsRender = !0
        }(JJ, NJ, dJ)
      }), [NJ, dJ]), (0, FJ.useEffect)((() => {
        const JJ = Yc.current;
        null !== JJ && null !== JJ.chunkGrid && (JJ.chunkGrid.isVisible = Kc, JJ.needsRender = !0)
      }), [Kc, dJ]), (0, FJ.useEffect)((() => {
        const JJ = Yc.current;
        null !== JJ && function(JJ, cJ, ZJ) {
          const {
            camera: FJ
          } = JJ;
          FJ.position.set(cJ.position[0], cJ.position[1], cJ.position[2]), FJ.rotation.set(cJ.pitch, cJ.heading, 0);
          const UJ = (HJ + 1) * nJ.c.Kn * Math.sqrt(3);
          FJ.maxZ = Math.max(UJ, Math.hypot(...Xc(cJ.position, Ac(Uc({
            min: [0, 0, 0],
            max: ZJ
          }), -1))) + 2 * Math.hypot(...ZJ)), BJ(JJ), oJ(JJ), JJ.needsRender = !0
        }(JJ, dc, Wc)
      }), [dc, Wc]), (0, FJ.useEffect)((() => {
        const JJ = Yc.current;
        null !== JJ && (JJ.targetOutline.isVisible = null !== Nc, null !== Nc && JJ.targetOutline.position.set(Nc.x - Mc[0] + .5, Nc.y - Mc[1] + .5, Nc.z - Mc[2] + .5), JJ.needsRender = !0)
      }), [Nc, Mc]);
      return (0, VJ.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: qc,
        children: [(0, VJ.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: jc,
          style: {
            width: `${hc.width}px`,
            height: `${hc.height}px`
          },
          tabIndex: 0,
          "aria-label": LJ("3D heatmap"),
          onClick: () => {
            const JJ = jc.current;
            if (null === JJ) return;
            if (JJ.focus({
                preventScroll: !0
              }), nc || !fc) return;
            const cJ = JJ.requestPointerLock();
            cJ instanceof Promise ? cJ.catch((JJ => {
              JJ instanceof DOMException && ("WrongDocumentError" === JJ.name || "NotSupportedError" === JJ.name) && xc(!1)
            })) : rc.current = !0
          },
          ...Oc,
          onKeyDown: JJ => {
            if (Qc && IJ.has(JJ.code)) return JJ.preventDefault(), void(() => {
              const JJ = jc.current;
              null !== JJ && document.pointerLockElement === JJ ? (0, EJ.c)() : null === JJ || void 0 === JJ || JJ.blur()
            })();
            const cJ = MJ[JJ.code];
            return Qc && void 0 !== cJ ? (JJ.preventDefault(), void TJ(cJ)) : Qc && (0, QJ.c)("replayPlayPause", JJ.code) && !(0, QJ.c)("Zoom", JJ.code) ? (JJ.preventDefault(), void(JJ.repeat || uJ())) : Qc && JJ.code === bJ ? (JJ.preventDefault(), void CJ()) : Qc && JJ.code === kJ ? (JJ.preventDefault(), void Ic(null)) : Qc && JJ.code === PJ ? (JJ.preventDefault(), void yc((JJ => !JJ))) : void Oc.onKeyDown(JJ)
          },
          onFocus: () => {
            mc(!0)
          },
          onBlur: () => {
            mc(!1), Oc.onBlur()
          }
        }), Dc && (0, VJ.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: LJ("3D view isn't available in this browser.")
        }), Qc && (0, VJ.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, VJ.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: dc.position.map(((JJ, cJ) => (JJ + Mc[cJ]).toFixed(2))).join(" ")
        }), Kc && (0, VJ.jsx)(aJ, {
          heading: dc.heading,
          pitch: dc.pitch,
          onViewFrom: JJ => {
            const cJ = Ac(JJ, -1),
              ZJ = 0 === cJ[1] ? {
                heading: Math.atan2(cJ[0], cJ[2]),
                pitch: 0
              } : {
                heading: dc.heading,
                pitch: cJ[1] < 0 ? pJ : -pJ
              };
            Ic(Zc(kc, Pc, Hc, ZJ))
          },
          onTurn: (JJ, cJ) => {
            Ic((ZJ => function(JJ, cJ, ZJ, FJ) {
              return Fc(JJ, cJ, {
                heading: JJ.heading + ZJ * iJ,
                pitch: Math.max(-pJ, Math.min(pJ, JJ.pitch + FJ * iJ))
              })
            }(null !== ZJ && void 0 !== ZJ ? ZJ : zc.current.fittedView, Uc(kc), JJ, cJ)))
          },
          onFlip: () => {
            Ic((JJ => function(JJ, cJ) {
              return Fc(JJ, cJ, {
                heading: JJ.heading + Math.PI,
                pitch: -JJ.pitch
              })
            }(null !== JJ && void 0 !== JJ ? JJ : zc.current.fittedView, Uc(kc))))
          }
        }), null !== Nc && (0, VJ.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === RJ ? LJ("studio:heatmapBlockReadout", {
            x: Nc.x,
            y: Nc.y,
            z: Nc.z,
            count: (0, sJ.S)(Nc.value)
          }) : RJ(Nc.x, Nc.y, Nc.z, Nc.value)
        }), (0, VJ.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [OJ, (0, VJ.jsx)(rJ.O, {
            active: null === Sc,
            onClick: () => {
              Ic(null)
            },
            children: (0, VJ.jsx)(vJ.c, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function aJ(JJ) {
      let {
        heading: cJ,
        pitch: ZJ,
        onViewFrom: UJ,
        onTurn: eJ,
        onFlip: XJ
      } = JJ;
      const {
        t: AJ
      } = (0, GJ.F)(), qJ = (0, FJ.useRef)(null), jJ = Jc({
        heading: cJ,
        pitch: ZJ
      }), YJ = cc(cJ), hJ = jc(jJ, YJ), DJ = TJ + CJ + 2, sJ = OJ.flatMap((JJ => [1, -1].map((cJ => {
        const ZJ = Ac(JJ.direction, cJ);
        return {
          ...JJ,
          sign: cJ,
          direction: ZJ,
          endX: DJ + qc(ZJ, YJ) * TJ,
          endY: DJ - qc(ZJ, hJ) * TJ,
          depth: qc(ZJ, jJ)
        }
      })))).sort(((JJ, cJ) => cJ.depth - JJ.depth));
      return (0, VJ.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * DJ,
        height: 2 * DJ,
        "aria-hidden": !0,
        onPointerDown: JJ => {
          var cJ, ZJ;
          JJ.currentTarget.setPointerCapture(JJ.pointerId);
          const FJ = JJ.target,
            UJ = FJ.getAttribute("data-end");
          qJ.current = {
            pointerId: JJ.pointerId,
            x: JJ.clientX,
            y: JJ.clientY,
            travel: 0,
            side: null === UJ ? null : null !== (cJ = null === (ZJ = sJ[Number(UJ)]) || void 0 === ZJ ? void 0 : ZJ.direction) && void 0 !== cJ ? cJ : null,
            isOnMiddle: FJ.hasAttribute("data-middle")
          }
        },
        onPointerMove: JJ => {
          const cJ = qJ.current;
          if (null === cJ || cJ.pointerId !== JJ.pointerId) return;
          const ZJ = JJ.clientX - cJ.x,
            FJ = JJ.clientY - cJ.y;
          cJ.x = JJ.clientX, cJ.y = JJ.clientY, cJ.travel += Math.abs(ZJ) + Math.abs(FJ), cJ.travel >= RJ && eJ(ZJ, FJ)
        },
        onPointerUp: JJ => {
          const cJ = qJ.current;
          qJ.current = null, null === cJ || cJ.pointerId !== JJ.pointerId || cJ.travel >= RJ || (null !== cJ.side ? UJ(cJ.side) : cJ.isOnMiddle && XJ())
        },
        onPointerCancel: () => {
          qJ.current = null
        },
        children: [sJ.map(((JJ, cJ) => {
          const ZJ = JJ.sign > 0;
          return (0, VJ.jsxs)("g", {
            children: [(0, VJ.jsx)("line", {
              x1: DJ,
              y1: DJ,
              x2: JJ.endX,
              y2: JJ.endY,
              stroke: JJ.colour,
              strokeOpacity: ZJ ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, VJ.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": cJ,
              cx: JJ.endX,
              cy: JJ.endY,
              r: ZJ ? CJ : CJ - 1,
              fill: JJ.colour,
              fillOpacity: ZJ ? 1 : .3,
              stroke: JJ.colour,
              strokeWidth: ZJ ? 0 : 1.5,
              children: (0, VJ.jsx)("title", {
                children: `${AJ("View from")} ${ZJ?"+":"\u2212"}${JJ.name}`
              })
            }), ZJ && (0, VJ.jsx)("text", {
              pointerEvents: "none",
              x: JJ.endX,
              y: JJ.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: JJ.name
            })]
          }, `${ZJ?"+":"-"}${JJ.name}`)
        })), (0, VJ.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: DJ,
          cy: DJ,
          r: uJ,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, VJ.jsx)("title", {
            children: AJ("View from the opposite side")
          })
        })]
      })
    }

    function BJ(JJ) {
      var cJ, ZJ, FJ;
      const {
        chunkGridOrigin: UJ,
        camera: eJ
      } = JJ;
      if (null === UJ) return;
      const XJ = [eJ.position.x, eJ.position.y, eJ.position.z],
        AJ = [0, 2].map((JJ => Math.floor((XJ[JJ] + UJ[JJ]) / nJ.c.Kn))),
        qJ = JJ.chunkGridCentre;
      if (null !== qJ && qJ.every(((JJ, cJ) => JJ === AJ[cJ]))) return;
      const hJ = null === (cJ = null === (ZJ = JJ.chunkGrid) || void 0 === ZJ ? void 0 : ZJ.isVisible) || void 0 === cJ || cJ;
      null === (FJ = JJ.chunkGrid) || void 0 === FJ || FJ.dispose();
      const [sJ, GJ] = [0, 2].map(((JJ, cJ) => {
        const ZJ = [];
        for (let FJ = AJ[cJ] - HJ; FJ <= AJ[cJ] + HJ + 1; FJ++) ZJ.push(FJ * nJ.c.Kn - UJ[JJ]);
        return ZJ
      })), fJ = -UJ[1], xJ = [];
      for (const jJ of GJ) xJ.push([new YJ.Pn(sJ[0], fJ, jJ), new YJ.Pn(sJ[sJ.length - 1], fJ, jJ)]);
      for (const jJ of sJ) xJ.push([new YJ.Pn(jJ, fJ, GJ[0]), new YJ.Pn(jJ, fJ, GJ[GJ.length - 1])]);
      const rJ = (0, DJ.e)("Heatmap3DChunkGrid", {
        lines: xJ
      }, JJ.iG);
      rJ.color = new jJ.Color3(.45, .6, .78), rJ.aG = !1, rJ.isVisible = hJ, JJ.chunkGrid = rJ, JJ.chunkGridCentre = AJ, JJ.needsRender = !0
    }

    function tJ(JJ, cJ, ZJ, FJ) {
      JJ.o2("matrix", function(JJ, cJ) {
        const ZJ = new Float32Array(16 * cJ);
        for (let FJ = 0; FJ < cJ; FJ++) {
          const cJ = 16 * FJ;
          ZJ[cJ] = 1, ZJ[cJ + 5] = 1, ZJ[cJ + 10] = 1, ZJ[cJ + 12] = JJ[3 * FJ], ZJ[cJ + 13] = JJ[3 * FJ + 1], ZJ[cJ + 14] = JJ[3 * FJ + 2], ZJ[cJ + 15] = 1
        }
        return ZJ
      }(cJ, FJ), 16, !0), JJ.o2("color", ZJ, 4, !0), JJ.isVisible = FJ > 0
    }

    function oJ(JJ) {
      const {
        camera: cJ,
        translucent: ZJ
      } = JJ, FJ = [cJ.position.x, cJ.position.y, cJ.position.z], UJ = JJ.translucentSortedFrom;
      if (null !== UJ && Math.hypot(FJ[0] - UJ[0], FJ[1] - UJ[1], FJ[2] - UJ[2]) < gJ) return;
      JJ.translucentSortedFrom = FJ;
      const eJ = new Float64Array(ZJ.count),
        XJ = new Uint32Array(ZJ.count);
      for (let jJ = 0; jJ < ZJ.count; jJ++) {
        const JJ = ZJ.gq[3 * jJ] - FJ[0],
          cJ = ZJ.gq[3 * jJ + 1] - FJ[1],
          UJ = ZJ.gq[3 * jJ + 2] - FJ[2];
        eJ[jJ] = JJ * JJ + cJ * cJ + UJ * UJ, XJ[jJ] = jJ
      }
      XJ.sort(((JJ, cJ) => eJ[cJ] - eJ[JJ]));
      const AJ = new Float32Array(3 * ZJ.count),
        qJ = new Float32Array(4 * ZJ.count);
      XJ.forEach(((JJ, cJ) => {
        AJ.set(ZJ.gq.subarray(3 * JJ, 3 * JJ + 3), 3 * cJ), qJ.set(ZJ.colours.subarray(4 * JJ, 4 * JJ + 4), 4 * cJ)
      })), tJ(JJ.translucentCells, AJ, qJ, ZJ.count), JJ.needsRender = !0
    }

    function lJ(JJ, cJ) {
      const ZJ = (ZJ, FJ, UJ) => new YJ.Pn(0 === ZJ ? JJ[0] : cJ[0], 0 === FJ ? JJ[1] : cJ[1], 0 === UJ ? JJ[2] : cJ[2]),
        FJ = [];
      for (const UJ of [0, 1])
        for (const JJ of [0, 1]) FJ.push([ZJ(0, UJ, JJ), ZJ(1, UJ, JJ)], [ZJ(UJ, 0, JJ), ZJ(UJ, 1, JJ)], [ZJ(UJ, JJ, 0), ZJ(UJ, JJ, 1)]);
      return FJ
    }

    function Jc(JJ) {
      return [Math.sin(JJ.heading) * Math.cos(JJ.pitch), -Math.sin(JJ.pitch), Math.cos(JJ.heading) * Math.cos(JJ.pitch)]
    }

    function cc(JJ) {
      return [Math.cos(JJ), 0, -Math.sin(JJ)]
    }

    function Zc(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: dJ,
        pitch: zJ
      };
      const UJ = [JJ.max[0] - JJ.min[0], JJ.max[1] - JJ.min[1], JJ.max[2] - JJ.min[2]],
        eJ = Jc(FJ),
        XJ = cc(FJ.heading),
        AJ = jc(eJ, XJ),
        qJ = Math.tan(ZJ / 2),
        jJ = qJ * cJ;
      let YJ = 1;
      for (const hJ of [-UJ[0] / 2, UJ[0] / 2])
        for (const JJ of [-UJ[1] / 2, UJ[1] / 2])
          for (const cJ of [-UJ[2] / 2, UJ[2] / 2]) {
            const ZJ = [hJ, JJ, cJ],
              FJ = qc(ZJ, eJ);
            YJ = Math.max(YJ, Math.abs(qc(ZJ, XJ)) / jJ - FJ, Math.abs(qc(ZJ, AJ)) / qJ - FJ)
          }
      return {
        position: Xc([JJ.min[0] + UJ[0] / 2, JJ.min[1] + UJ[1] / 2, JJ.min[2] + UJ[2] / 2], Ac(eJ, -YJ * NJ)),
        heading: FJ.heading,
        pitch: FJ.pitch
      }
    }

    function Fc(JJ, cJ, ZJ) {
      const FJ = ec(JJ),
        UJ = ec(ZJ),
        eJ = Xc(JJ.position, Ac(cJ, -1)),
        XJ = [0, 1, 2].reduce(((JJ, cJ) => Xc(JJ, Ac(UJ[cJ], qc(eJ, FJ[cJ])))), [0, 0, 0]);
      return {
        position: Xc(cJ, XJ),
        heading: ZJ.heading,
        pitch: ZJ.pitch
      }
    }

    function Uc(JJ) {
      return Ac(Xc(JJ.min, JJ.max), .5)
    }

    function ec(JJ) {
      const cJ = Jc(JJ),
        ZJ = cc(JJ.heading);
      return [cJ, ZJ, jc(cJ, ZJ)]
    }

    function Xc(JJ, cJ) {
      return [JJ[0] + cJ[0], JJ[1] + cJ[1], JJ[2] + cJ[2]]
    }

    function Ac(JJ, cJ) {
      return [JJ[0] * cJ, JJ[1] * cJ, JJ[2] * cJ]
    }

    function qc(JJ, cJ) {
      return JJ[0] * cJ[0] + JJ[1] * cJ[1] + JJ[2] * cJ[2]
    }

    function jc(JJ, cJ) {
      return [JJ[1] * cJ[2] - JJ[2] * cJ[1], JJ[2] * cJ[0] - JJ[0] * cJ[2], JJ[0] * cJ[1] - JJ[1] * cJ[0]]
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);