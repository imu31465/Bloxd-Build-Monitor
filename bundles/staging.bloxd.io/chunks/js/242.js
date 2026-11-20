export const id = 242;
export const ids = [242];
export const modules = {
  39441: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => WT
    });
    cT(6466);
    var lT = cT(71),
      MT = cT(39448),
      KT = cT(39716),
      OT = cT(39836),
      yT = cT(39868),
      fT = cT(39889),
      xT = cT(37086),
      IT = cT(36885),
      AT = cT(40021),
      CT = cT(40084),
      jT = (cT(40120), cT(1226)),
      vT = cT(218),
      tT = cT(1195),
      hT = cT(31),
      NT = cT(2770),
      QT = cT(1470),
      ST = cT(1061),
      DT = cT(6458),
      aT = cT(6472),
      FT = cT(4432),
      rT = cT(1099);
    const PT = 1.2,
      wT = .2,
      mT = .0066 * Math.PI / 180,
      bT = new Set(["Escape", "KeyG"]),
      zT = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      JT = "ArrowUp",
      oT = new Set([...Object.keys(zT), JT, "ArrowDown"]),
      HT = 32,
      eT = 1,
      GT = 10,
      VT = "F4",
      ET = "Period",
      ZT = Math.PI / 2 - .001,
      uT = Math.PI / 6,
      XT = Math.PI / 6,
      dT = 1.08,
      LT = [{
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
      RT = 24,
      gT = 7,
      UT = 4,
      YT = .01,
      BT = 4;

    function WT(TT) {
      let {
        heatmap: kT,
        scale: cT,
        fullyOpaqueFrom: eT,
        bounds: uT,
        fitBounds: XT,
        schematic: dT,
        controls: LT,
        onStepTime: RT,
        onShowAllTime: gT,
        onTogglePlaying: UT,
        getReadout: BT = null
      } = TT;
      const {
        t: WT
      } = (0, tT.B)(), {
        clientEscMenuOptions: Kk
      } = (0, hT.n)(["clientEscMenuOptions"]), fk = (0, lT.useRef)(null), xk = (0, lT.useRef)(null), Ik = (0, lT.useRef)(null), Ak = (0, NT.e)(fk), [Ck, jk] = (0, lT.useState)(!1), [vk, tk] = (0, lT.useState)(!1), [hk, Nk] = (0, lT.useState)(!0), Qk = (0, lT.useRef)(!1), [Sk, Dk] = (0, lT.useState)(!1), ak = vk || !hk && Sk, [Fk, rk] = (0, lT.useState)(!1), [Pk, wk] = (0, lT.useState)(!0), [mk, bk] = (0, lT.useState)(null), zk = uT.min, [Jk, Hk] = (0, lT.useState)(zk);
      Jk[0] === zk[0] && Jk[1] === zk[1] && Jk[2] === zk[2] || (Hk(zk), null !== mk && bk({
        ...mk,
        position: Ok(mk.position, Ok(Jk, yk(zk, -1)))
      }));
      const ek = (0, lT.useMemo)((() => function(TT) {
          return [TT.max[0] - TT.min[0] + 1, TT.max[1] - TT.min[1] + 1, TT.max[2] - TT.min[2] + 1]
        }(uT)), [uT]),
        Gk = (0, lT.useMemo)((() => function(TT, kT) {
          const cT = [],
            lT = [];
          for (const [MT, KT] of Object.entries(TT.frequencies)) {
            const TT = Number(MT);
            for (const [MT, OT] of Object.entries(KT)) {
              const KT = Number(MT);
              for (const [MT, yT] of Object.entries(OT)) yT <= 0 || (cT.push(TT - kT[0], KT - kT[1], Number(MT) - kT[2]), lT.push(yT))
            }
          }
          return {
            positions: Int32Array.from(cT),
            values: Float64Array.from(lT),
            count: lT.length
          }
        }(kT, zk)), [kT, zk]),
        Vk = PT * Kk.cameraFOV / 100,
        Ek = Ak.height > 0 ? Ak.width / Ak.height : 1,
        Zk = (0, lT.useMemo)((() => function(TT, kT) {
          return {
            min: [TT.min[0] - kT[0], TT.min[1] - kT[1], TT.min[2] - kT[2]],
            max: [TT.max[0] - kT[0] + 1, TT.max[1] - kT[1] + 1, TT.max[2] - kT[2] + 1]
          }
        }(XT, zk)), [XT, zk]),
        uk = ck(Zk, Ek, Vk),
        Xk = null !== mk && void 0 !== mk ? mk : uk,
        dk = (0, lT.useRef)({
          fittedView: uk,
          fieldOfView: Vk,
          mouseSensitivity: Kk.mouseSensitivity,
          canLock: hk
        });
      dk.current = {
        fittedView: uk,
        fieldOfView: Vk,
        mouseSensitivity: Kk.mouseSensitivity,
        canLock: hk
      };
      const Lk = (0, lT.useMemo)((() => {
          if (!ak) return null;
          const TT = (TT, cT, lT) => {
              var MT, KT, OT;
              return null !== (MT = null === (KT = kT.frequencies[TT + zk[0]]) || void 0 === KT || null === (OT = KT[cT + zk[1]]) || void 0 === OT ? void 0 : OT[lT + zk[2]]) && void 0 !== MT ? MT : 0
            },
            lT = function(TT, kT, cT, lT) {
              let MT = 0,
                KT = 1 / 0;
              for (const AT of [0, 1, 2]) {
                if (0 === kT[AT]) {
                  if (TT[AT] < 0 || TT[AT] > cT[AT]) return null;
                  continue
                }
                const lT = (0 - TT[AT]) / kT[AT],
                  OT = (cT[AT] - TT[AT]) / kT[AT];
                MT = Math.max(MT, Math.min(lT, OT)), KT = Math.min(KT, Math.max(lT, OT))
              }
              if (MT > KT) return null;
              const OT = [0, 1, 2].map((lT => Math.min(cT[lT] - 1, Math.max(0, Math.floor(TT[lT] + kT[lT] * MT))))),
                yT = [0, 1, 2].map((TT => Math.sign(kT[TT]))),
                fT = [0, 1, 2].map((cT => {
                  if (0 === yT[cT]) return 1 / 0;
                  return ((yT[cT] > 0 ? OT[cT] + 1 : OT[cT]) - TT[cT]) / kT[cT]
                })),
                xT = [0, 1, 2].map((TT => 0 === yT[TT] ? 1 / 0 : Math.abs(1 / kT[TT])));
              let IT = null;
              for (;;) {
                const TT = lT(OT[0], OT[1], OT[2]);
                if (TT >= 1) return OT;
                TT > 0 && (IT = [OT[0], OT[1], OT[2]]);
                const kT = fT[0] < fT[1] ? fT[0] < fT[2] ? 0 : 2 : fT[1] < fT[2] ? 1 : 2;
                if (fT[kT] > KT) return IT;
                if (OT[kT] += yT[kT], fT[kT] += xT[kT], OT[kT] < 0 || OT[kT] >= cT[kT]) return IT
              }
            }(Xk.position, Tk(Xk), ek, ((kT, lT, MT) => (0, DT.D)(TT(kT, lT, MT), cT, eT)));
          return null === lT ? null : {
            x: lT[0] + zk[0],
            y: lT[1] + zk[1],
            z: lT[2] + zk[2],
            value: TT(lT[0], lT[1], lT[2])
          }
        }), [ak, kT, zk, Xk, ek, cT, eT]),
        {
          keyHandlers: Rk
        } = (0, aT.e)({
          isEnabled: ak,
          claimedKeyCodes: oT,
          xC: TT => {
            bk((kT => function(TT, kT) {
              const cT = [Math.sin(TT.heading), 0, Math.cos(TT.heading)],
                lT = Ok(Ok(yk(cT, kT.forward), yk(kk(TT.heading), kT.right)), [0, kT.up, 0]);
              return {
                ...TT,
                position: Ok(TT.position, lT)
              }
            }(null !== kT && void 0 !== kT ? kT : dk.current.fittedView, TT)))
          },
          onZoomChange: rk
        });
      (0, lT.useEffect)((() => {
        const TT = xk.current;
        if (!TT) return;
        let kT;
        try {
          kT = function(TT, kT) {
            const cT = new MT.d(TT, !0, {
                stencil: !1
              }, !0),
              lT = new KT.c(cT),
              [jT, vT, tT] = DT.Y;
            lT.clearColor = new xT.e(jT / 255, vT / 255, tT / 255, 1);
            const hT = new OT.d("Heatmap3DCamera", IT.Fv.Zero(), lT);
            hT.fov = kT, hT.minZ = .05;
            const NT = new yT.b("Heatmap3DLight", new IT.Fv(.4, 1, -.6), lT);
            NT.diffuse = xT.Color3.White(), NT.groundColor = xT.Color3.Black(), NT.specular = xT.Color3.Black();
            const QT = new fT.StandardMaterial("Heatmap3DCellMaterial", lT);
            QT.diffuseColor = new xT.Color3(.4, .4, .4), QT.emissiveColor = new xT.Color3(.62, .62, .62), QT.specularColor = xT.Color3.Black();
            const ST = (0, AT.e)("Heatmap3DCells", {
              size: 1
            }, lT);
            ST.material = QT, ST.Vt = !1, ST.av = !0, ST.isVisible = !1;
            const aT = (0, AT.e)("Heatmap3DTranslucentCells", {
              size: 1
            }, lT);
            aT.material = QT, aT.hasVertexAlpha = !0, aT.Vt = !1, aT.av = !0, aT.isVisible = !1;
            const FT = new fT.StandardMaterial("Heatmap3DSchematicMaterial", lT);
            FT.diffuseColor = new xT.Color3(.6, .6, .6), FT.emissiveColor = new xT.Color3(.4, .4, .4), FT.specularColor = xT.Color3.Black();
            const rT = (0, AT.e)("Heatmap3DSchematicBlocks", {
              size: 1
            }, lT);
            rT.material = FT, rT.Vt = !1, rT.av = !0, rT.isVisible = !1;
            const PT = (0, CT.c)("Heatmap3DTarget", {
              lines: sT([-.52, -.52, -.52], [.52, .52, .52])
            }, lT);
            return PT.color = new xT.Color3(.06, .14, .23), PT.renderingGroupId = 1, PT.Vt = !1, PT.isVisible = !1, {
              engine: cT,
              et: lT,
              camera: hT,
              cells: ST,
              translucentCells: aT,
              translucent: {
                uv: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: rT,
              targetOutline: PT,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: kT,
              needsRender: !0
            }
          }(TT, dk.current.fieldOfView)
        } catch (cT) {
          return console.error("Failed to start the 3D heatmap", cT), void jk(!0)
        }
        return Ik.current = kT, kT.engine.runRenderLoop((() => {
          const TT = kT.camera;
          TT.fov !== kT.targetFieldOfView && (TT.fov += (kT.targetFieldOfView - TT.fov) * (TT.fov > kT.targetFieldOfView ? .3 : .2), Math.abs(kT.targetFieldOfView - TT.fov) < 5e-4 && (TT.fov = kT.targetFieldOfView), kT.needsRender = !0), kT.needsRender && (kT.et.render(), kT.needsRender = !kT.et.isReady() || !kT.engine.areAllEffectsReady())
        })), () => {
          Ik.current = null, kT.engine.dispose()
        }
      }), []), (0, lT.useEffect)((() => {
        const TT = xk.current;
        if (!TT) return;
        const kT = () => {
            Qk.current = !1, tk(document.pointerLockElement === TT)
          },
          cT = () => {
            Qk.current && (Qk.current = !1, Nk(!1))
          },
          lT = kT => {
            const cT = !dk.current.canLock && document.activeElement === TT && 0 !== (1 & kT.buttons);
            if (document.pointerLockElement !== TT && !cT) return;
            const lT = dk.current.mouseSensitivity * mT;
            bk((TT => function(TT, kT, cT) {
              const lT = 2 * Math.PI;
              return {
                ...TT,
                heading: ((TT.heading + kT) % lT + lT) % lT,
                pitch: Math.max(-ZT, Math.min(ZT, TT.pitch + cT))
              }
            }(null !== TT && void 0 !== TT ? TT : dk.current.fittedView, kT.movementX * lT, kT.movementY * lT)))
          };
        return document.addEventListener("pointerlockchange", kT), document.addEventListener("pointerlockerror", cT), document.addEventListener("pointermove", lT), () => {
          document.removeEventListener("pointerlockchange", kT), document.removeEventListener("pointerlockerror", cT), document.removeEventListener("pointermove", lT), document.pointerLockElement === TT && (0, FT.d)()
        }
      }), []), (0, lT.useEffect)((() => {
        const TT = Ik.current;
        null !== TT && 0 !== Ak.width && 0 !== Ak.height && (TT.engine.resize(), TT.needsRender = !0)
      }), [Ak.width, Ak.height]), (0, lT.useEffect)((() => {
        const TT = Ik.current;
        null !== TT && (TT.targetFieldOfView = Vk * (Fk ? wT : 1))
      }), [Vk, Fk]), (0, lT.useEffect)((() => {
        const TT = Ik.current;
        null !== TT && function(TT, kT, cT, lT) {
          const MT = [],
            KT = [],
            OT = [],
            yT = [];
          for (let fT = 0; fT < kT.count; fT++) {
            const TT = kT.values[fT],
              xT = (0, DT.D)(TT, cT, lT);
            if (xT <= 0) continue;
            const [IT, AT, CT] = (0, DT.t)((0, DT.Q)(TT, cT)), jT = xT >= 1;
            (jT ? MT : OT).push(kT.positions[3 * fT] + .5, kT.positions[3 * fT + 1] + .5, kT.positions[3 * fT + 2] + .5), (jT ? KT : yT).push(IT / 255, AT / 255, CT / 255, xT)
          }
          iT(TT.cells, Float32Array.from(MT), Float32Array.from(KT), KT.length / 4), TT.translucent = {
            uv: Float32Array.from(OT),
            colours: Float32Array.from(yT),
            count: yT.length / 4
          }, TT.translucentSortedFrom = null, qT(TT), TT.needsRender = !0
        }(TT, Gk, cT, eT)
      }), [Gk, cT, eT]), (0, lT.useEffect)((() => {
        const TT = Ik.current;
        null !== TT && function(TT, kT) {
          TT.chunkGridOrigin = kT, TT.chunkGridCentre = null, pT(TT)
        }(TT, uT.min)
      }), [uT]), (0, lT.useEffect)((() => {
        const TT = Ik.current;
        null !== TT && function(TT, kT, cT) {
          const lT = [],
            MT = [];
          if (null !== kT) {
            const {
              positions: TT,
              colours: KT,
              count: OT
            } = kT.surface;
            for (let kT = 0; kT < OT; kT++) {
              const OT = [TT[3 * kT], TT[3 * kT + 1], TT[3 * kT + 2]];
              [0, 1, 2].every((TT => OT[TT] >= cT.min[TT] - HT && OT[TT] <= cT.max[TT] + HT)) && (lT.push(OT[0] - cT.min[0] + .5, OT[1] - cT.min[1] + .5, OT[2] - cT.min[2] + .5), MT.push(KT[3 * kT] / 255, KT[3 * kT + 1] / 255, KT[3 * kT + 2] / 255, 1))
            }
          }
          iT(TT.schematicBlocks, Float32Array.from(lT), Float32Array.from(MT), MT.length / 4), TT.needsRender = !0
        }(TT, dT, uT)
      }), [dT, uT]), (0, lT.useEffect)((() => {
        const TT = Ik.current;
        null !== TT && null !== TT.chunkGrid && (TT.chunkGrid.isVisible = Pk, TT.needsRender = !0)
      }), [Pk, uT]), (0, lT.useEffect)((() => {
        const TT = Ik.current;
        null !== TT && function(TT, kT, cT) {
          const {
            camera: lT
          } = TT;
          lT.position.set(kT.position[0], kT.position[1], kT.position[2]), lT.rotation.set(kT.pitch, kT.heading, 0);
          const MT = (GT + 1) * vT.f.vv * Math.sqrt(3);
          lT.maxZ = Math.max(MT, Math.hypot(...Ok(kT.position, yk(Mk({
            min: [0, 0, 0],
            max: cT
          }), -1))) + 2 * Math.hypot(...cT)), pT(TT), qT(TT), TT.needsRender = !0
        }(TT, Xk, ek)
      }), [Xk, ek]), (0, lT.useEffect)((() => {
        const TT = Ik.current;
        null !== TT && (TT.targetOutline.isVisible = null !== Lk, null !== Lk && TT.targetOutline.position.set(Lk.x - zk[0] + .5, Lk.y - zk[1] + .5, Lk.z - zk[2] + .5), TT.needsRender = !0)
      }), [Lk, zk]);
      return (0, rT.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: fk,
        children: [(0, rT.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: xk,
          style: {
            width: `${Ak.width}px`,
            height: `${Ak.height}px`
          },
          tabIndex: 0,
          "aria-label": WT("3D heatmap"),
          onClick: () => {
            const TT = xk.current;
            if (null === TT) return;
            if (TT.focus({
                preventScroll: !0
              }), vk || !hk) return;
            const kT = TT.requestPointerLock();
            kT instanceof Promise ? kT.catch((TT => {
              TT instanceof DOMException && ("WrongDocumentError" === TT.name || "NotSupportedError" === TT.name) && Nk(!1)
            })) : Qk.current = !0
          },
          ...Rk,
          onKeyDown: TT => {
            if (ak && bT.has(TT.code)) return TT.preventDefault(), void(() => {
              const TT = xk.current;
              null !== TT && document.pointerLockElement === TT ? (0, FT.d)() : null === TT || void 0 === TT || TT.blur()
            })();
            const kT = zT[TT.code];
            return ak && void 0 !== kT ? (TT.preventDefault(), void RT(kT)) : ak && (0, aT.b)("replayPlayPause", TT.code) && !(0, aT.b)("Zoom", TT.code) ? (TT.preventDefault(), void(TT.repeat || UT())) : ak && TT.code === JT ? (TT.preventDefault(), void gT()) : ak && TT.code === ET ? (TT.preventDefault(), void bk(null)) : ak && TT.code === VT ? (TT.preventDefault(), void wk((TT => !TT))) : void Rk.onKeyDown(TT)
          },
          onFocus: () => {
            Dk(!0)
          },
          onBlur: () => {
            Dk(!1), Rk.onBlur()
          }
        }), Ck && (0, rT.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: WT("3D view isn't available in this browser.")
        }), ak && (0, rT.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, rT.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: Xk.position.map(((TT, kT) => (TT + zk[kT]).toFixed(2))).join(" ")
        }), Pk && (0, rT.jsx)(nT, {
          heading: Xk.heading,
          pitch: Xk.pitch,
          onViewFrom: TT => {
            const kT = yk(TT, -1),
              cT = 0 === kT[1] ? {
                heading: Math.atan2(kT[0], kT[2]),
                pitch: 0
              } : {
                heading: Xk.heading,
                pitch: kT[1] < 0 ? ZT : -ZT
              };
            bk(ck(Zk, Ek, Vk, cT))
          },
          onTurn: (TT, kT) => {
            bk((cT => function(TT, kT, cT, lT) {
              return lk(TT, kT, {
                heading: TT.heading + cT * YT,
                pitch: Math.max(-ZT, Math.min(ZT, TT.pitch + lT * YT))
              })
            }(null !== cT && void 0 !== cT ? cT : dk.current.fittedView, Mk(Zk), TT, kT)))
          },
          onFlip: () => {
            bk((TT => function(TT, kT) {
              return lk(TT, kT, {
                heading: TT.heading + Math.PI,
                pitch: -TT.pitch
              })
            }(null !== TT && void 0 !== TT ? TT : dk.current.fittedView, Mk(Zk))))
          }
        }), null !== Lk && (0, rT.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === BT ? WT("studio:heatmapBlockReadout", {
            x: Lk.x,
            y: Lk.y,
            z: Lk.z,
            count: (0, jT.P)(Lk.value)
          }) : BT(Lk.x, Lk.y, Lk.z, Lk.value)
        }), (0, rT.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [LT, (0, rT.jsx)(QT.P, {
            active: null === mk,
            onClick: () => {
              bk(null)
            },
            children: (0, rT.jsx)(ST.e, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function nT(TT) {
      let {
        heading: kT,
        pitch: cT,
        onViewFrom: MT,
        onTurn: KT,
        onFlip: OT
      } = TT;
      const {
        t: yT
      } = (0, tT.B)(), fT = (0, lT.useRef)(null), xT = Tk({
        heading: kT,
        pitch: cT
      }), IT = kk(kT), AT = xk(xT, IT), CT = RT + gT + 2, jT = LT.flatMap((TT => [1, -1].map((kT => {
        const cT = yk(TT.direction, kT);
        return {
          ...TT,
          sign: kT,
          direction: cT,
          endX: CT + fk(cT, IT) * RT,
          endY: CT - fk(cT, AT) * RT,
          depth: fk(cT, xT)
        }
      })))).sort(((TT, kT) => kT.depth - TT.depth));
      return (0, rT.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * CT,
        height: 2 * CT,
        "aria-hidden": !0,
        onPointerDown: TT => {
          var kT, cT;
          TT.currentTarget.setPointerCapture(TT.pointerId);
          const lT = TT.target,
            MT = lT.getAttribute("data-end");
          fT.current = {
            pointerId: TT.pointerId,
            x: TT.clientX,
            y: TT.clientY,
            travel: 0,
            side: null === MT ? null : null !== (kT = null === (cT = jT[Number(MT)]) || void 0 === cT ? void 0 : cT.direction) && void 0 !== kT ? kT : null,
            isOnMiddle: lT.hasAttribute("data-middle")
          }
        },
        onPointerMove: TT => {
          const kT = fT.current;
          if (null === kT || kT.pointerId !== TT.pointerId) return;
          const cT = TT.clientX - kT.x,
            lT = TT.clientY - kT.y;
          kT.x = TT.clientX, kT.y = TT.clientY, kT.travel += Math.abs(cT) + Math.abs(lT), kT.travel >= BT && KT(cT, lT)
        },
        onPointerUp: TT => {
          const kT = fT.current;
          fT.current = null, null === kT || kT.pointerId !== TT.pointerId || kT.travel >= BT || (null !== kT.side ? MT(kT.side) : kT.isOnMiddle && OT())
        },
        onPointerCancel: () => {
          fT.current = null
        },
        children: [jT.map(((TT, kT) => {
          const cT = TT.sign > 0;
          return (0, rT.jsxs)("g", {
            children: [(0, rT.jsx)("line", {
              x1: CT,
              y1: CT,
              x2: TT.endX,
              y2: TT.endY,
              stroke: TT.colour,
              strokeOpacity: cT ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, rT.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": kT,
              cx: TT.endX,
              cy: TT.endY,
              r: cT ? gT : gT - 1,
              fill: TT.colour,
              fillOpacity: cT ? 1 : .3,
              stroke: TT.colour,
              strokeWidth: cT ? 0 : 1.5,
              children: (0, rT.jsx)("title", {
                children: `${yT("View from")} ${cT?"+":"\u2212"}${TT.name}`
              })
            }), cT && (0, rT.jsx)("text", {
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
          }, `${cT?"+":"-"}${TT.name}`)
        })), (0, rT.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: CT,
          cy: CT,
          r: UT,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, rT.jsx)("title", {
            children: yT("View from the opposite side")
          })
        })]
      })
    }

    function pT(TT) {
      var kT, cT, lT;
      const {
        chunkGridOrigin: MT,
        camera: KT
      } = TT;
      if (null === MT) return;
      const OT = [KT.position.x, KT.position.y, KT.position.z],
        yT = [0, 2].map((TT => Math.floor((OT[TT] + MT[TT]) / vT.f.vv))),
        fT = TT.chunkGridCentre;
      if (null !== fT && fT.every(((TT, kT) => TT === yT[kT]))) return;
      const AT = null === (kT = null === (cT = TT.chunkGrid) || void 0 === cT ? void 0 : cT.isVisible) || void 0 === kT || kT;
      null === (lT = TT.chunkGrid) || void 0 === lT || lT.dispose();
      const [jT, tT] = [0, 2].map(((TT, kT) => {
        const cT = [];
        for (let lT = yT[kT] - GT; lT <= yT[kT] + GT + 1; lT++) cT.push(lT * vT.f.vv - MT[TT]);
        return cT
      })), hT = -MT[1], NT = [];
      for (const xT of tT) NT.push([new IT.Fv(jT[0], hT, xT), new IT.Fv(jT[jT.length - 1], hT, xT)]);
      for (const xT of jT) NT.push([new IT.Fv(xT, hT, tT[0]), new IT.Fv(xT, hT, tT[tT.length - 1])]);
      const QT = (0, CT.c)("Heatmap3DChunkGrid", {
        lines: NT
      }, TT.et);
      QT.color = new xT.Color3(.45, .6, .78), QT.Vt = !1, QT.isVisible = AT, TT.chunkGrid = QT, TT.chunkGridCentre = yT, TT.needsRender = !0
    }

    function iT(TT, kT, cT, lT) {
      TT.O4("matrix", function(TT, kT) {
        const cT = new Float32Array(16 * kT);
        for (let lT = 0; lT < kT; lT++) {
          const kT = 16 * lT;
          cT[kT] = 1, cT[kT + 5] = 1, cT[kT + 10] = 1, cT[kT + 12] = TT[3 * lT], cT[kT + 13] = TT[3 * lT + 1], cT[kT + 14] = TT[3 * lT + 2], cT[kT + 15] = 1
        }
        return cT
      }(kT, lT), 16, !0), TT.O4("color", cT, 4, !0), TT.isVisible = lT > 0
    }

    function qT(TT) {
      const {
        camera: kT,
        translucent: cT
      } = TT, lT = [kT.position.x, kT.position.y, kT.position.z], MT = TT.translucentSortedFrom;
      if (null !== MT && Math.hypot(lT[0] - MT[0], lT[1] - MT[1], lT[2] - MT[2]) < eT) return;
      TT.translucentSortedFrom = lT;
      const KT = new Float64Array(cT.count),
        OT = new Uint32Array(cT.count);
      for (let xT = 0; xT < cT.count; xT++) {
        const TT = cT.uv[3 * xT] - lT[0],
          kT = cT.uv[3 * xT + 1] - lT[1],
          MT = cT.uv[3 * xT + 2] - lT[2];
        KT[xT] = TT * TT + kT * kT + MT * MT, OT[xT] = xT
      }
      OT.sort(((TT, kT) => KT[kT] - KT[TT]));
      const yT = new Float32Array(3 * cT.count),
        fT = new Float32Array(4 * cT.count);
      OT.forEach(((TT, kT) => {
        yT.set(cT.uv.subarray(3 * TT, 3 * TT + 3), 3 * kT), fT.set(cT.colours.subarray(4 * TT, 4 * TT + 4), 4 * kT)
      })), iT(TT.translucentCells, yT, fT, cT.count), TT.needsRender = !0
    }

    function sT(TT, kT) {
      const cT = (cT, lT, MT) => new IT.Fv(0 === cT ? TT[0] : kT[0], 0 === lT ? TT[1] : kT[1], 0 === MT ? TT[2] : kT[2]),
        lT = [];
      for (const MT of [0, 1])
        for (const TT of [0, 1]) lT.push([cT(0, MT, TT), cT(1, MT, TT)], [cT(MT, 0, TT), cT(MT, 1, TT)], [cT(MT, TT, 0), cT(MT, TT, 1)]);
      return lT
    }

    function Tk(TT) {
      return [Math.sin(TT.heading) * Math.cos(TT.pitch), -Math.sin(TT.pitch), Math.cos(TT.heading) * Math.cos(TT.pitch)]
    }

    function kk(TT) {
      return [Math.cos(TT), 0, -Math.sin(TT)]
    }

    function ck(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: uT,
        pitch: XT
      };
      const MT = [TT.max[0] - TT.min[0], TT.max[1] - TT.min[1], TT.max[2] - TT.min[2]],
        KT = Tk(lT),
        OT = kk(lT.heading),
        yT = xk(KT, OT),
        fT = Math.tan(cT / 2),
        xT = fT * kT;
      let IT = 1;
      for (const AT of [-MT[0] / 2, MT[0] / 2])
        for (const TT of [-MT[1] / 2, MT[1] / 2])
          for (const kT of [-MT[2] / 2, MT[2] / 2]) {
            const cT = [AT, TT, kT],
              lT = fk(cT, KT);
            IT = Math.max(IT, Math.abs(fk(cT, OT)) / xT - lT, Math.abs(fk(cT, yT)) / fT - lT)
          }
      return {
        position: Ok([TT.min[0] + MT[0] / 2, TT.min[1] + MT[1] / 2, TT.min[2] + MT[2] / 2], yk(KT, -IT * dT)),
        heading: lT.heading,
        pitch: lT.pitch
      }
    }

    function lk(TT, kT, cT) {
      const lT = Kk(TT),
        MT = Kk(cT),
        KT = Ok(TT.position, yk(kT, -1)),
        OT = [0, 1, 2].reduce(((TT, kT) => Ok(TT, yk(MT[kT], fk(KT, lT[kT])))), [0, 0, 0]);
      return {
        position: Ok(kT, OT),
        heading: cT.heading,
        pitch: cT.pitch
      }
    }

    function Mk(TT) {
      return yk(Ok(TT.min, TT.max), .5)
    }

    function Kk(TT) {
      const kT = Tk(TT),
        cT = kk(TT.heading);
      return [kT, cT, xk(kT, cT)]
    }

    function Ok(TT, kT) {
      return [TT[0] + kT[0], TT[1] + kT[1], TT[2] + kT[2]]
    }

    function yk(TT, kT) {
      return [TT[0] * kT, TT[1] * kT, TT[2] * kT]
    }

    function fk(TT, kT) {
      return TT[0] * kT[0] + TT[1] * kT[1] + TT[2] * kT[2]
    }

    function xk(TT, kT) {
      return [TT[1] * kT[2] - TT[2] * kT[1], TT[2] * kT[0] - TT[0] * kT[2], TT[0] * kT[1] - TT[1] * kT[0]]
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);