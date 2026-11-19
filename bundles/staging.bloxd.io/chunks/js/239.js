export const id = 239;
export const ids = [239];
export const modules = {
  38584: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => bT
    });
    IT(5950);
    var iT = IT(46),
      zT = IT(38589),
      kT = IT(38874),
      WT = IT(38979),
      XT = IT(39021),
      BT = IT(39038),
      FT = IT(36175),
      ST = IT(36114),
      DT = IT(39187),
      LT = IT(39242),
      xT = (IT(39273), IT(1193)),
      cT = IT(193),
      KT = IT(1171),
      MT = IT(12),
      rT = IT(2451),
      AT = IT(1408),
      gT = IT(1055),
      hT = IT(5942),
      wT = IT(5958),
      mT = IT(3966),
      eT = IT(1083);
    const RT = 1.2,
      uT = .2,
      vT = .0066 * Math.PI / 180,
      ET = new Set(["Escape", "KeyG"]),
      fT = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      CT = "ArrowUp",
      jT = new Set([...Object.keys(fT), CT, "ArrowDown"]),
      JT = 32,
      UT = 1,
      aT = 10,
      YT = "F4",
      QT = "Period",
      OT = Math.PI / 2 - .001,
      HT = Math.PI / 6,
      nT = Math.PI / 6,
      qT = 1.08,
      ZT = [{
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
      lT = 24,
      sT = 7,
      tT = 4,
      GT = .01,
      pT = 4;

    function bT(TT) {
      let {
        heatmap: oT,
        scale: IT,
        fullyOpaqueFrom: UT,
        bounds: HT,
        fitBounds: nT,
        schematic: qT,
        controls: ZT,
        onStepTime: lT,
        onShowAllTime: sT,
        onTogglePlaying: tT,
        getReadout: pT = null
      } = TT;
      const {
        t: bT
      } = (0, KT.t)(), {
        clientEscMenuOptions: ko
      } = (0, MT.k)(["clientEscMenuOptions"]), Bo = (0, iT.useRef)(null), Fo = (0, iT.useRef)(null), So = (0, iT.useRef)(null), Do = (0, rT.d)(Bo), [Lo, xo] = (0, iT.useState)(!1), [co, Ko] = (0, iT.useState)(!1), [Mo, ro] = (0, iT.useState)(!0), Ao = (0, iT.useRef)(!1), [go, ho] = (0, iT.useState)(!1), wo = co || !Mo && go, [mo, eo] = (0, iT.useState)(!1), [Ro, uo] = (0, iT.useState)(!0), [vo, Eo] = (0, iT.useState)(null), fo = HT.min, [Co, jo] = (0, iT.useState)(fo);
      Co[0] === fo[0] && Co[1] === fo[1] && Co[2] === fo[2] || (jo(fo), null !== vo && Eo({
        ...vo,
        position: Wo(vo.position, Wo(Co, Xo(fo, -1)))
      }));
      const Jo = (0, iT.useMemo)((() => function(TT) {
          return [TT.max[0] - TT.min[0] + 1, TT.max[1] - TT.min[1] + 1, TT.max[2] - TT.min[2] + 1]
        }(HT)), [HT]),
        Uo = (0, iT.useMemo)((() => function(TT, oT) {
          const IT = [],
            iT = [];
          for (const [zT, kT] of Object.entries(TT.frequencies)) {
            const TT = Number(zT);
            for (const [zT, WT] of Object.entries(kT)) {
              const kT = Number(zT);
              for (const [zT, XT] of Object.entries(WT)) XT <= 0 || (IT.push(TT - oT[0], kT - oT[1], Number(zT) - oT[2]), iT.push(XT))
            }
          }
          return {
            positions: Int32Array.from(IT),
            values: Float64Array.from(iT),
            count: iT.length
          }
        }(oT, fo)), [oT, fo]),
        ao = RT * ko.cameraFOV / 100,
        Yo = Do.height > 0 ? Do.width / Do.height : 1,
        Qo = (0, iT.useMemo)((() => function(TT, oT) {
          return {
            min: [TT.min[0] - oT[0], TT.min[1] - oT[1], TT.min[2] - oT[2]],
            max: [TT.max[0] - oT[0] + 1, TT.max[1] - oT[1] + 1, TT.max[2] - oT[2] + 1]
          }
        }(nT, fo)), [nT, fo]),
        Oo = Io(Qo, Yo, ao),
        Ho = null !== vo && void 0 !== vo ? vo : Oo,
        no = (0, iT.useRef)({
          fittedView: Oo,
          fieldOfView: ao,
          mouseSensitivity: ko.mouseSensitivity,
          canLock: Mo
        });
      no.current = {
        fittedView: Oo,
        fieldOfView: ao,
        mouseSensitivity: ko.mouseSensitivity,
        canLock: Mo
      };
      const qo = (0, iT.useMemo)((() => {
          if (!wo) return null;
          const TT = (TT, IT, iT) => {
              var zT, kT, WT;
              return null !== (zT = null === (kT = oT.frequencies[TT + fo[0]]) || void 0 === kT || null === (WT = kT[IT + fo[1]]) || void 0 === WT ? void 0 : WT[iT + fo[2]]) && void 0 !== zT ? zT : 0
            },
            iT = function(TT, oT, IT, iT) {
              let zT = 0,
                kT = 1 / 0;
              for (const DT of [0, 1, 2]) {
                if (0 === oT[DT]) {
                  if (TT[DT] < 0 || TT[DT] > IT[DT]) return null;
                  continue
                }
                const iT = (0 - TT[DT]) / oT[DT],
                  WT = (IT[DT] - TT[DT]) / oT[DT];
                zT = Math.max(zT, Math.min(iT, WT)), kT = Math.min(kT, Math.max(iT, WT))
              }
              if (zT > kT) return null;
              const WT = [0, 1, 2].map((iT => Math.min(IT[iT] - 1, Math.max(0, Math.floor(TT[iT] + oT[iT] * zT))))),
                XT = [0, 1, 2].map((TT => Math.sign(oT[TT]))),
                BT = [0, 1, 2].map((IT => {
                  if (0 === XT[IT]) return 1 / 0;
                  return ((XT[IT] > 0 ? WT[IT] + 1 : WT[IT]) - TT[IT]) / oT[IT]
                })),
                FT = [0, 1, 2].map((TT => 0 === XT[TT] ? 1 / 0 : Math.abs(1 / oT[TT])));
              let ST = null;
              for (;;) {
                const TT = iT(WT[0], WT[1], WT[2]);
                if (TT >= 1) return WT;
                TT > 0 && (ST = [WT[0], WT[1], WT[2]]);
                const oT = BT[0] < BT[1] ? BT[0] < BT[2] ? 0 : 2 : BT[1] < BT[2] ? 1 : 2;
                if (BT[oT] > kT) return ST;
                if (WT[oT] += XT[oT], BT[oT] += FT[oT], WT[oT] < 0 || WT[oT] >= IT[oT]) return ST
              }
            }(Ho.position, To(Ho), Jo, ((oT, iT, zT) => (0, hT.q)(TT(oT, iT, zT), IT, UT)));
          return null === iT ? null : {
            x: iT[0] + fo[0],
            y: iT[1] + fo[1],
            z: iT[2] + fo[2],
            value: TT(iT[0], iT[1], iT[2])
          }
        }), [wo, oT, fo, Ho, Jo, IT, UT]),
        {
          keyHandlers: Zo
        } = (0, wT.f)({
          isEnabled: wo,
          claimedKeyCodes: jT,
          ML: TT => {
            Eo((oT => function(TT, oT) {
              const IT = [Math.sin(TT.heading), 0, Math.cos(TT.heading)],
                iT = Wo(Wo(Xo(IT, oT.forward), Xo(oo(TT.heading), oT.right)), [0, oT.up, 0]);
              return {
                ...TT,
                position: Wo(TT.position, iT)
              }
            }(null !== oT && void 0 !== oT ? oT : no.current.fittedView, TT)))
          },
          onZoomChange: eo
        });
      (0, iT.useEffect)((() => {
        const TT = Fo.current;
        if (!TT) return;
        let oT;
        try {
          oT = function(TT, oT) {
            const IT = new zT.c(TT, !0, {
                stencil: !1
              }, !0),
              iT = new kT.d(IT),
              [xT, cT, KT] = hT.J;
            iT.clearColor = new FT.b(xT / 255, cT / 255, KT / 255, 1);
            const MT = new WT.e("Heatmap3DCamera", ST.sc.Zero(), iT);
            MT.fov = oT, MT.minZ = .05;
            const rT = new XT.d("Heatmap3DLight", new ST.sc(.4, 1, -.6), iT);
            rT.diffuse = FT.Color3.White(), rT.groundColor = FT.Color3.Black(), rT.specular = FT.Color3.Black();
            const AT = new BT.StandardMaterial("Heatmap3DCellMaterial", iT);
            AT.diffuseColor = new FT.Color3(.4, .4, .4), AT.emissiveColor = new FT.Color3(.62, .62, .62), AT.specularColor = FT.Color3.Black();
            const gT = (0, DT.d)("Heatmap3DCells", {
              size: 1
            }, iT);
            gT.material = AT, gT.dK = !1, gT.lc = !0, gT.isVisible = !1;
            const wT = (0, DT.d)("Heatmap3DTranslucentCells", {
              size: 1
            }, iT);
            wT.material = AT, wT.hasVertexAlpha = !0, wT.dK = !1, wT.lc = !0, wT.isVisible = !1;
            const mT = new BT.StandardMaterial("Heatmap3DSchematicMaterial", iT);
            mT.diffuseColor = new FT.Color3(.6, .6, .6), mT.emissiveColor = new FT.Color3(.4, .4, .4), mT.specularColor = FT.Color3.Black();
            const eT = (0, DT.d)("Heatmap3DSchematicBlocks", {
              size: 1
            }, iT);
            eT.material = mT, eT.dK = !1, eT.lc = !0, eT.isVisible = !1;
            const RT = (0, LT.b)("Heatmap3DTarget", {
              lines: VT([-.52, -.52, -.52], [.52, .52, .52])
            }, iT);
            return RT.color = new FT.Color3(.06, .14, .23), RT.renderingGroupId = 1, RT.dK = !1, RT.isVisible = !1, {
              engine: IT,
              NK: iT,
              camera: MT,
              cells: gT,
              translucentCells: wT,
              translucent: {
                ek: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: eT,
              targetOutline: RT,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: oT,
              needsRender: !0
            }
          }(TT, no.current.fieldOfView)
        } catch (IT) {
          return console.error("Failed to start the 3D heatmap", IT), void xo(!0)
        }
        return So.current = oT, oT.engine.runRenderLoop((() => {
          const TT = oT.camera;
          TT.fov !== oT.targetFieldOfView && (TT.fov += (oT.targetFieldOfView - TT.fov) * (TT.fov > oT.targetFieldOfView ? .3 : .2), Math.abs(oT.targetFieldOfView - TT.fov) < 5e-4 && (TT.fov = oT.targetFieldOfView), oT.needsRender = !0), oT.needsRender && (oT.NK.render(), oT.needsRender = !oT.NK.isReady() || !oT.engine.areAllEffectsReady())
        })), () => {
          So.current = null, oT.engine.dispose()
        }
      }), []), (0, iT.useEffect)((() => {
        const TT = Fo.current;
        if (!TT) return;
        const oT = () => {
            Ao.current = !1, Ko(document.pointerLockElement === TT)
          },
          IT = () => {
            Ao.current && (Ao.current = !1, ro(!1))
          },
          iT = oT => {
            const IT = !no.current.canLock && document.activeElement === TT && 0 !== (1 & oT.buttons);
            if (document.pointerLockElement !== TT && !IT) return;
            const iT = no.current.mouseSensitivity * vT;
            Eo((TT => function(TT, oT, IT) {
              const iT = 2 * Math.PI;
              return {
                ...TT,
                heading: ((TT.heading + oT) % iT + iT) % iT,
                pitch: Math.max(-OT, Math.min(OT, TT.pitch + IT))
              }
            }(null !== TT && void 0 !== TT ? TT : no.current.fittedView, oT.movementX * iT, oT.movementY * iT)))
          };
        return document.addEventListener("pointerlockchange", oT), document.addEventListener("pointerlockerror", IT), document.addEventListener("pointermove", iT), () => {
          document.removeEventListener("pointerlockchange", oT), document.removeEventListener("pointerlockerror", IT), document.removeEventListener("pointermove", iT), document.pointerLockElement === TT && (0, mT.b)()
        }
      }), []), (0, iT.useEffect)((() => {
        const TT = So.current;
        null !== TT && 0 !== Do.width && 0 !== Do.height && (TT.engine.resize(), TT.needsRender = !0)
      }), [Do.width, Do.height]), (0, iT.useEffect)((() => {
        const TT = So.current;
        null !== TT && (TT.targetFieldOfView = ao * (mo ? uT : 1))
      }), [ao, mo]), (0, iT.useEffect)((() => {
        const TT = So.current;
        null !== TT && function(TT, oT, IT, iT) {
          const zT = [],
            kT = [],
            WT = [],
            XT = [];
          for (let BT = 0; BT < oT.count; BT++) {
            const TT = oT.values[BT],
              FT = (0, hT.q)(TT, IT, iT);
            if (FT <= 0) continue;
            const [ST, DT, LT] = (0, hT.l)((0, hT.B)(TT, IT)), xT = FT >= 1;
            (xT ? zT : WT).push(oT.positions[3 * BT] + .5, oT.positions[3 * BT + 1] + .5, oT.positions[3 * BT + 2] + .5), (xT ? kT : XT).push(ST / 255, DT / 255, LT / 255, FT)
          }
          PT(TT.cells, Float32Array.from(zT), Float32Array.from(kT), kT.length / 4), TT.translucent = {
            ek: Float32Array.from(WT),
            colours: Float32Array.from(XT),
            count: XT.length / 4
          }, TT.translucentSortedFrom = null, dT(TT), TT.needsRender = !0
        }(TT, Uo, IT, UT)
      }), [Uo, IT, UT]), (0, iT.useEffect)((() => {
        const TT = So.current;
        null !== TT && function(TT, oT) {
          TT.chunkGridOrigin = oT, TT.chunkGridCentre = null, NT(TT)
        }(TT, HT.min)
      }), [HT]), (0, iT.useEffect)((() => {
        const TT = So.current;
        null !== TT && function(TT, oT, IT) {
          const iT = [],
            zT = [];
          if (null !== oT) {
            const {
              positions: TT,
              colours: kT,
              count: WT
            } = oT.surface;
            for (let oT = 0; oT < WT; oT++) {
              const WT = [TT[3 * oT], TT[3 * oT + 1], TT[3 * oT + 2]];
              [0, 1, 2].every((TT => WT[TT] >= IT.min[TT] - JT && WT[TT] <= IT.max[TT] + JT)) && (iT.push(WT[0] - IT.min[0] + .5, WT[1] - IT.min[1] + .5, WT[2] - IT.min[2] + .5), zT.push(kT[3 * oT] / 255, kT[3 * oT + 1] / 255, kT[3 * oT + 2] / 255, 1))
            }
          }
          PT(TT.schematicBlocks, Float32Array.from(iT), Float32Array.from(zT), zT.length / 4), TT.needsRender = !0
        }(TT, qT, HT)
      }), [qT, HT]), (0, iT.useEffect)((() => {
        const TT = So.current;
        null !== TT && null !== TT.chunkGrid && (TT.chunkGrid.isVisible = Ro, TT.needsRender = !0)
      }), [Ro, HT]), (0, iT.useEffect)((() => {
        const TT = So.current;
        null !== TT && function(TT, oT, IT) {
          const {
            camera: iT
          } = TT;
          iT.position.set(oT.position[0], oT.position[1], oT.position[2]), iT.rotation.set(oT.pitch, oT.heading, 0);
          const zT = (aT + 1) * cT.c.Yc * Math.sqrt(3);
          iT.maxZ = Math.max(zT, Math.hypot(...Wo(oT.position, Xo(zo({
            min: [0, 0, 0],
            max: IT
          }), -1))) + 2 * Math.hypot(...IT)), NT(TT), dT(TT), TT.needsRender = !0
        }(TT, Ho, Jo)
      }), [Ho, Jo]), (0, iT.useEffect)((() => {
        const TT = So.current;
        null !== TT && (TT.targetOutline.isVisible = null !== qo, null !== qo && TT.targetOutline.position.set(qo.x - fo[0] + .5, qo.y - fo[1] + .5, qo.z - fo[2] + .5), TT.needsRender = !0)
      }), [qo, fo]);
      return (0, eT.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: Bo,
        children: [(0, eT.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: Fo,
          style: {
            width: `${Do.width}px`,
            height: `${Do.height}px`
          },
          tabIndex: 0,
          "aria-label": bT("3D heatmap"),
          onClick: () => {
            const TT = Fo.current;
            if (null === TT) return;
            if (TT.focus({
                preventScroll: !0
              }), co || !Mo) return;
            const oT = TT.requestPointerLock();
            oT instanceof Promise ? oT.catch((TT => {
              TT instanceof DOMException && ("WrongDocumentError" === TT.name || "NotSupportedError" === TT.name) && ro(!1)
            })) : Ao.current = !0
          },
          ...Zo,
          onKeyDown: TT => {
            if (wo && ET.has(TT.code)) return TT.preventDefault(), void(() => {
              const TT = Fo.current;
              null !== TT && document.pointerLockElement === TT ? (0, mT.b)() : null === TT || void 0 === TT || TT.blur()
            })();
            const oT = fT[TT.code];
            return wo && void 0 !== oT ? (TT.preventDefault(), void lT(oT)) : wo && (0, wT.b)("replayPlayPause", TT.code) && !(0, wT.b)("Zoom", TT.code) ? (TT.preventDefault(), void(TT.repeat || tT())) : wo && TT.code === CT ? (TT.preventDefault(), void sT()) : wo && TT.code === QT ? (TT.preventDefault(), void Eo(null)) : wo && TT.code === YT ? (TT.preventDefault(), void uo((TT => !TT))) : void Zo.onKeyDown(TT)
          },
          onFocus: () => {
            ho(!0)
          },
          onBlur: () => {
            ho(!1), Zo.onBlur()
          }
        }), Lo && (0, eT.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: bT("3D view isn't available in this browser.")
        }), wo && (0, eT.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, eT.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: Ho.position.map(((TT, oT) => (TT + fo[oT]).toFixed(2))).join(" ")
        }), Ro && (0, eT.jsx)(yT, {
          heading: Ho.heading,
          pitch: Ho.pitch,
          onViewFrom: TT => {
            const oT = Xo(TT, -1),
              IT = 0 === oT[1] ? {
                heading: Math.atan2(oT[0], oT[2]),
                pitch: 0
              } : {
                heading: Ho.heading,
                pitch: oT[1] < 0 ? OT : -OT
              };
            Eo(Io(Qo, Yo, ao, IT))
          },
          onTurn: (TT, oT) => {
            Eo((IT => function(TT, oT, IT, iT) {
              return io(TT, oT, {
                heading: TT.heading + IT * GT,
                pitch: Math.max(-OT, Math.min(OT, TT.pitch + iT * GT))
              })
            }(null !== IT && void 0 !== IT ? IT : no.current.fittedView, zo(Qo), TT, oT)))
          },
          onFlip: () => {
            Eo((TT => function(TT, oT) {
              return io(TT, oT, {
                heading: TT.heading + Math.PI,
                pitch: -TT.pitch
              })
            }(null !== TT && void 0 !== TT ? TT : no.current.fittedView, zo(Qo))))
          }
        }), null !== qo && (0, eT.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === pT ? bT("studio:heatmapBlockReadout", {
            x: qo.x,
            y: qo.y,
            z: qo.z,
            count: (0, xT.S)(qo.value)
          }) : pT(qo.x, qo.y, qo.z, qo.value)
        }), (0, eT.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [ZT, (0, eT.jsx)(AT.J, {
            active: null === vo,
            onClick: () => {
              Eo(null)
            },
            children: (0, eT.jsx)(gT.e, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function yT(TT) {
      let {
        heading: oT,
        pitch: IT,
        onViewFrom: zT,
        onTurn: kT,
        onFlip: WT
      } = TT;
      const {
        t: XT
      } = (0, KT.t)(), BT = (0, iT.useRef)(null), FT = To({
        heading: oT,
        pitch: IT
      }), ST = oo(oT), DT = Fo(FT, ST), LT = lT + sT + 2, xT = ZT.flatMap((TT => [1, -1].map((oT => {
        const IT = Xo(TT.direction, oT);
        return {
          ...TT,
          sign: oT,
          direction: IT,
          endX: LT + Bo(IT, ST) * lT,
          endY: LT - Bo(IT, DT) * lT,
          depth: Bo(IT, FT)
        }
      })))).sort(((TT, oT) => oT.depth - TT.depth));
      return (0, eT.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * LT,
        height: 2 * LT,
        "aria-hidden": !0,
        onPointerDown: TT => {
          var oT, IT;
          TT.currentTarget.setPointerCapture(TT.pointerId);
          const iT = TT.target,
            zT = iT.getAttribute("data-end");
          BT.current = {
            pointerId: TT.pointerId,
            x: TT.clientX,
            y: TT.clientY,
            travel: 0,
            side: null === zT ? null : null !== (oT = null === (IT = xT[Number(zT)]) || void 0 === IT ? void 0 : IT.direction) && void 0 !== oT ? oT : null,
            isOnMiddle: iT.hasAttribute("data-middle")
          }
        },
        onPointerMove: TT => {
          const oT = BT.current;
          if (null === oT || oT.pointerId !== TT.pointerId) return;
          const IT = TT.clientX - oT.x,
            iT = TT.clientY - oT.y;
          oT.x = TT.clientX, oT.y = TT.clientY, oT.travel += Math.abs(IT) + Math.abs(iT), oT.travel >= pT && kT(IT, iT)
        },
        onPointerUp: TT => {
          const oT = BT.current;
          BT.current = null, null === oT || oT.pointerId !== TT.pointerId || oT.travel >= pT || (null !== oT.side ? zT(oT.side) : oT.isOnMiddle && WT())
        },
        onPointerCancel: () => {
          BT.current = null
        },
        children: [xT.map(((TT, oT) => {
          const IT = TT.sign > 0;
          return (0, eT.jsxs)("g", {
            children: [(0, eT.jsx)("line", {
              x1: LT,
              y1: LT,
              x2: TT.endX,
              y2: TT.endY,
              stroke: TT.colour,
              strokeOpacity: IT ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, eT.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": oT,
              cx: TT.endX,
              cy: TT.endY,
              r: IT ? sT : sT - 1,
              fill: TT.colour,
              fillOpacity: IT ? 1 : .3,
              stroke: TT.colour,
              strokeWidth: IT ? 0 : 1.5,
              children: (0, eT.jsx)("title", {
                children: `${XT("View from")} ${IT?"+":"\u2212"}${TT.name}`
              })
            }), IT && (0, eT.jsx)("text", {
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
          }, `${IT?"+":"-"}${TT.name}`)
        })), (0, eT.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: LT,
          cy: LT,
          r: tT,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, eT.jsx)("title", {
            children: XT("View from the opposite side")
          })
        })]
      })
    }

    function NT(TT) {
      var oT, IT, iT;
      const {
        chunkGridOrigin: zT,
        camera: kT
      } = TT;
      if (null === zT) return;
      const WT = [kT.position.x, kT.position.y, kT.position.z],
        XT = [0, 2].map((TT => Math.floor((WT[TT] + zT[TT]) / cT.c.Yc))),
        BT = TT.chunkGridCentre;
      if (null !== BT && BT.every(((TT, oT) => TT === XT[oT]))) return;
      const DT = null === (oT = null === (IT = TT.chunkGrid) || void 0 === IT ? void 0 : IT.isVisible) || void 0 === oT || oT;
      null === (iT = TT.chunkGrid) || void 0 === iT || iT.dispose();
      const [xT, KT] = [0, 2].map(((TT, oT) => {
        const IT = [];
        for (let iT = XT[oT] - aT; iT <= XT[oT] + aT + 1; iT++) IT.push(iT * cT.c.Yc - zT[TT]);
        return IT
      })), MT = -zT[1], rT = [];
      for (const FT of KT) rT.push([new ST.sc(xT[0], MT, FT), new ST.sc(xT[xT.length - 1], MT, FT)]);
      for (const FT of xT) rT.push([new ST.sc(FT, MT, KT[0]), new ST.sc(FT, MT, KT[KT.length - 1])]);
      const AT = (0, LT.b)("Heatmap3DChunkGrid", {
        lines: rT
      }, TT.NK);
      AT.color = new FT.Color3(.45, .6, .78), AT.dK = !1, AT.isVisible = DT, TT.chunkGrid = AT, TT.chunkGridCentre = XT, TT.needsRender = !0
    }

    function PT(TT, oT, IT, iT) {
      TT.T_("matrix", function(TT, oT) {
        const IT = new Float32Array(16 * oT);
        for (let iT = 0; iT < oT; iT++) {
          const oT = 16 * iT;
          IT[oT] = 1, IT[oT + 5] = 1, IT[oT + 10] = 1, IT[oT + 12] = TT[3 * iT], IT[oT + 13] = TT[3 * iT + 1], IT[oT + 14] = TT[3 * iT + 2], IT[oT + 15] = 1
        }
        return IT
      }(oT, iT), 16, !0), TT.T_("color", IT, 4, !0), TT.isVisible = iT > 0
    }

    function dT(TT) {
      const {
        camera: oT,
        translucent: IT
      } = TT, iT = [oT.position.x, oT.position.y, oT.position.z], zT = TT.translucentSortedFrom;
      if (null !== zT && Math.hypot(iT[0] - zT[0], iT[1] - zT[1], iT[2] - zT[2]) < UT) return;
      TT.translucentSortedFrom = iT;
      const kT = new Float64Array(IT.count),
        WT = new Uint32Array(IT.count);
      for (let FT = 0; FT < IT.count; FT++) {
        const TT = IT.ek[3 * FT] - iT[0],
          oT = IT.ek[3 * FT + 1] - iT[1],
          zT = IT.ek[3 * FT + 2] - iT[2];
        kT[FT] = TT * TT + oT * oT + zT * zT, WT[FT] = FT
      }
      WT.sort(((TT, oT) => kT[oT] - kT[TT]));
      const XT = new Float32Array(3 * IT.count),
        BT = new Float32Array(4 * IT.count);
      WT.forEach(((TT, oT) => {
        XT.set(IT.ek.subarray(3 * TT, 3 * TT + 3), 3 * oT), BT.set(IT.colours.subarray(4 * TT, 4 * TT + 4), 4 * oT)
      })), PT(TT.translucentCells, XT, BT, IT.count), TT.needsRender = !0
    }

    function VT(TT, oT) {
      const IT = (IT, iT, zT) => new ST.sc(0 === IT ? TT[0] : oT[0], 0 === iT ? TT[1] : oT[1], 0 === zT ? TT[2] : oT[2]),
        iT = [];
      for (const zT of [0, 1])
        for (const TT of [0, 1]) iT.push([IT(0, zT, TT), IT(1, zT, TT)], [IT(zT, 0, TT), IT(zT, 1, TT)], [IT(zT, TT, 0), IT(zT, TT, 1)]);
      return iT
    }

    function To(TT) {
      return [Math.sin(TT.heading) * Math.cos(TT.pitch), -Math.sin(TT.pitch), Math.cos(TT.heading) * Math.cos(TT.pitch)]
    }

    function oo(TT) {
      return [Math.cos(TT), 0, -Math.sin(TT)]
    }

    function Io(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: HT,
        pitch: nT
      };
      const zT = [TT.max[0] - TT.min[0], TT.max[1] - TT.min[1], TT.max[2] - TT.min[2]],
        kT = To(iT),
        WT = oo(iT.heading),
        XT = Fo(kT, WT),
        BT = Math.tan(IT / 2),
        FT = BT * oT;
      let ST = 1;
      for (const DT of [-zT[0] / 2, zT[0] / 2])
        for (const TT of [-zT[1] / 2, zT[1] / 2])
          for (const oT of [-zT[2] / 2, zT[2] / 2]) {
            const IT = [DT, TT, oT],
              iT = Bo(IT, kT);
            ST = Math.max(ST, Math.abs(Bo(IT, WT)) / FT - iT, Math.abs(Bo(IT, XT)) / BT - iT)
          }
      return {
        position: Wo([TT.min[0] + zT[0] / 2, TT.min[1] + zT[1] / 2, TT.min[2] + zT[2] / 2], Xo(kT, -ST * qT)),
        heading: iT.heading,
        pitch: iT.pitch
      }
    }

    function io(TT, oT, IT) {
      const iT = ko(TT),
        zT = ko(IT),
        kT = Wo(TT.position, Xo(oT, -1)),
        WT = [0, 1, 2].reduce(((TT, oT) => Wo(TT, Xo(zT[oT], Bo(kT, iT[oT])))), [0, 0, 0]);
      return {
        position: Wo(oT, WT),
        heading: IT.heading,
        pitch: IT.pitch
      }
    }

    function zo(TT) {
      return Xo(Wo(TT.min, TT.max), .5)
    }

    function ko(TT) {
      const oT = To(TT),
        IT = oo(TT.heading);
      return [oT, IT, Fo(oT, IT)]
    }

    function Wo(TT, oT) {
      return [TT[0] + oT[0], TT[1] + oT[1], TT[2] + oT[2]]
    }

    function Xo(TT, oT) {
      return [TT[0] * oT, TT[1] * oT, TT[2] * oT]
    }

    function Bo(TT, oT) {
      return TT[0] * oT[0] + TT[1] * oT[1] + TT[2] * oT[2]
    }

    function Fo(TT, oT) {
      return [TT[1] * oT[2] - TT[2] * oT[1], TT[2] * oT[0] - TT[0] * oT[2], TT[0] * oT[1] - TT[1] * oT[0]]
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);