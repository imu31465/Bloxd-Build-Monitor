export const id = 286;
export const ids = [286];
export const modules = {
  41717: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => br
    });
    Qr(7402);
    var Zr = Qr(72),
      Wr = Qr(41725),
      ar = Qr(41934),
      jr = Qr(42047),
      Ir = Qr(42085),
      fr = Qr(42100),
      Er = Qr(38679),
      pr = Qr(38555),
      xr = Qr(42236),
      mr = Qr(42295),
      Nr = (Qr(42318), Qr(1279)),
      Ur = Qr(208),
      tr = Qr(1251),
      hr = Qr(26),
      zr = Qr(3855),
      Yr = Qr(1576),
      nr = Qr(1448),
      er = Qr(7395),
      Kr = Qr(7411),
      yr = Qr(5187),
      Br = Qr(1338);
    const Tr = 1.2,
      vr = .2,
      Or = .0066 * Math.PI / 180,
      Lr = new Set(["Escape", "KeyG"]),
      lr = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      Xr = "ArrowUp",
      Pr = new Set([...Object.keys(lr), Xr, "ArrowDown"]),
      Hr = 32,
      qr = 1,
      Rr = 10,
      gr = "F4",
      Cr = "Period",
      Mr = Math.PI / 2 - .001,
      Gr = Math.PI / 6,
      kr = Math.PI / 6,
      Ar = 1.08,
      Vr = [{
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
      ir = 24,
      wr = 7,
      cr = 4,
      Fr = .01,
      or = 4;

    function br(rr) {
      let {
        heatmap: Sr,
        scale: Qr,
        fullyOpaqueFrom: qr,
        bounds: Gr,
        fitBounds: kr,
        schematic: Ar,
        controls: Vr,
        onStepTime: ir,
        onShowAllTime: wr,
        onTogglePlaying: cr,
        getReadout: or = null
      } = rr;
      const {
        t: br
      } = (0, tr.E)(), {
        clientEscMenuOptions: aS
      } = (0, hr.n)(["clientEscMenuOptions"]), fS = (0, Zr.useRef)(null), ES = (0, Zr.useRef)(null), pS = (0, Zr.useRef)(null), xS = (0, zr.b)(fS), [mS, NS] = (0, Zr.useState)(!1), [US, tS] = (0, Zr.useState)(!1), [hS, zS] = (0, Zr.useState)(!0), YS = (0, Zr.useRef)(!1), [nS, eS] = (0, Zr.useState)(!1), KS = US || !hS && nS, [yS, BS] = (0, Zr.useState)(!1), [TS, vS] = (0, Zr.useState)(!0), [OS, LS] = (0, Zr.useState)(null), lS = Gr.min, [XS, PS] = (0, Zr.useState)(lS);
      XS[0] === lS[0] && XS[1] === lS[1] && XS[2] === lS[2] || (PS(lS), null !== OS && LS({
        ...OS,
        position: jS(OS.position, jS(XS, IS(lS, -1)))
      }));
      const HS = (0, Zr.useMemo)((() => function(rr) {
          return [rr.max[0] - rr.min[0] + 1, rr.max[1] - rr.min[1] + 1, rr.max[2] - rr.min[2] + 1]
        }(Gr)), [Gr]),
        qS = (0, Zr.useMemo)((() => function(rr, Sr) {
          const Qr = [],
            Zr = [];
          for (const [Wr, ar] of Object.entries(rr.frequencies)) {
            const rr = Number(Wr);
            for (const [Wr, jr] of Object.entries(ar)) {
              const ar = Number(Wr);
              for (const [Wr, Ir] of Object.entries(jr)) Ir <= 0 || (Qr.push(rr - Sr[0], ar - Sr[1], Number(Wr) - Sr[2]), Zr.push(Ir))
            }
          }
          return {
            positions: Int32Array.from(Qr),
            values: Float64Array.from(Zr),
            count: Zr.length
          }
        }(Sr, lS)), [Sr, lS]),
        RS = Tr * aS.cameraFOV / 100,
        gS = xS.height > 0 ? xS.width / xS.height : 1,
        CS = (0, Zr.useMemo)((() => function(rr, Sr) {
          return {
            min: [rr.min[0] - Sr[0], rr.min[1] - Sr[1], rr.min[2] - Sr[2]],
            max: [rr.max[0] - Sr[0] + 1, rr.max[1] - Sr[1] + 1, rr.max[2] - Sr[2] + 1]
          }
        }(kr, lS)), [kr, lS]),
        MS = QS(CS, gS, RS),
        GS = null !== OS && void 0 !== OS ? OS : MS,
        kS = (0, Zr.useRef)({
          fittedView: MS,
          fieldOfView: RS,
          mouseSensitivity: aS.mouseSensitivity,
          canLock: hS
        });
      kS.current = {
        fittedView: MS,
        fieldOfView: RS,
        mouseSensitivity: aS.mouseSensitivity,
        canLock: hS
      };
      const AS = (0, Zr.useMemo)((() => {
          if (!KS) return null;
          const rr = (rr, Qr, Zr) => {
              var Wr, ar, jr;
              return null !== (Wr = null === (ar = Sr.frequencies[rr + lS[0]]) || void 0 === ar || null === (jr = ar[Qr + lS[1]]) || void 0 === jr ? void 0 : jr[Zr + lS[2]]) && void 0 !== Wr ? Wr : 0
            },
            Zr = function(rr, Sr, Qr, Zr) {
              let Wr = 0,
                ar = 1 / 0;
              for (const xr of [0, 1, 2]) {
                if (0 === Sr[xr]) {
                  if (rr[xr] < 0 || rr[xr] > Qr[xr]) return null;
                  continue
                }
                const Zr = (0 - rr[xr]) / Sr[xr],
                  jr = (Qr[xr] - rr[xr]) / Sr[xr];
                Wr = Math.max(Wr, Math.min(Zr, jr)), ar = Math.min(ar, Math.max(Zr, jr))
              }
              if (Wr > ar) return null;
              const jr = [0, 1, 2].map((Zr => Math.min(Qr[Zr] - 1, Math.max(0, Math.floor(rr[Zr] + Sr[Zr] * Wr))))),
                Ir = [0, 1, 2].map((rr => Math.sign(Sr[rr]))),
                fr = [0, 1, 2].map((Qr => {
                  if (0 === Ir[Qr]) return 1 / 0;
                  return ((Ir[Qr] > 0 ? jr[Qr] + 1 : jr[Qr]) - rr[Qr]) / Sr[Qr]
                })),
                Er = [0, 1, 2].map((rr => 0 === Ir[rr] ? 1 / 0 : Math.abs(1 / Sr[rr])));
              let pr = null;
              for (;;) {
                const rr = Zr(jr[0], jr[1], jr[2]);
                if (rr >= 1) return jr;
                rr > 0 && (pr = [jr[0], jr[1], jr[2]]);
                const Sr = fr[0] < fr[1] ? fr[0] < fr[2] ? 0 : 2 : fr[1] < fr[2] ? 1 : 2;
                if (fr[Sr] > ar) return pr;
                if (jr[Sr] += Ir[Sr], fr[Sr] += Er[Sr], jr[Sr] < 0 || jr[Sr] >= Qr[Sr]) return pr
              }
            }(GS.position, rS(GS), HS, ((Sr, Zr, Wr) => (0, er.t)(rr(Sr, Zr, Wr), Qr, qr)));
          return null === Zr ? null : {
            x: Zr[0] + lS[0],
            y: Zr[1] + lS[1],
            z: Zr[2] + lS[2],
            value: rr(Zr[0], Zr[1], Zr[2])
          }
        }), [KS, Sr, lS, GS, HS, Qr, qr]),
        {
          keyHandlers: VS
        } = (0, Kr.g)({
          isEnabled: KS,
          claimedKeyCodes: Pr,
          im: rr => {
            LS((Sr => function(rr, Sr) {
              const Qr = [Math.sin(rr.heading), 0, Math.cos(rr.heading)],
                Zr = jS(jS(IS(Qr, Sr.forward), IS(SS(rr.heading), Sr.right)), [0, Sr.up, 0]);
              return {
                ...rr,
                position: jS(rr.position, Zr)
              }
            }(null !== Sr && void 0 !== Sr ? Sr : kS.current.fittedView, rr)))
          },
          onZoomChange: BS
        });
      (0, Zr.useEffect)((() => {
        const rr = ES.current;
        if (!rr) return;
        let Sr;
        try {
          Sr = function(rr, Sr) {
            const Qr = new Wr.d(rr, !0, {
                stencil: !1
              }, !0),
              Zr = new ar.c(Qr),
              [Nr, Ur, tr] = er.O;
            Zr.clearColor = new Er.d(Nr / 255, Ur / 255, tr / 255, 1);
            const hr = new jr.b("Heatmap3DCamera", pr.kU.Zero(), Zr);
            hr.fov = Sr, hr.minZ = .05;
            const zr = new Ir.b("Heatmap3DLight", new pr.kU(.4, 1, -.6), Zr);
            zr.diffuse = Er.Color3.White(), zr.groundColor = Er.Color3.Black(), zr.specular = Er.Color3.Black();
            const Yr = new fr.StandardMaterial("Heatmap3DCellMaterial", Zr);
            Yr.diffuseColor = new Er.Color3(.4, .4, .4), Yr.emissiveColor = new Er.Color3(.62, .62, .62), Yr.specularColor = Er.Color3.Black();
            const nr = (0, xr.e)("Heatmap3DCells", {
              size: 1
            }, Zr);
            nr.material = Yr, nr.ut = !1, nr.GU = !0, nr.isVisible = !1;
            const Kr = (0, xr.e)("Heatmap3DTranslucentCells", {
              size: 1
            }, Zr);
            Kr.material = Yr, Kr.hasVertexAlpha = !0, Kr.ut = !1, Kr.GU = !0, Kr.isVisible = !1;
            const yr = new fr.StandardMaterial("Heatmap3DSchematicMaterial", Zr);
            yr.diffuseColor = new Er.Color3(.6, .6, .6), yr.emissiveColor = new Er.Color3(.4, .4, .4), yr.specularColor = Er.Color3.Black();
            const Br = (0, xr.e)("Heatmap3DSchematicBlocks", {
              size: 1
            }, Zr);
            Br.material = yr, Br.ut = !1, Br.GU = !0, Br.isVisible = !1;
            const Tr = (0, mr.e)("Heatmap3DTarget", {
              lines: ur([-.52, -.52, -.52], [.52, .52, .52])
            }, Zr);
            return Tr.color = new Er.Color3(.06, .14, .23), Tr.renderingGroupId = 1, Tr.ut = !1, Tr.isVisible = !1, {
              engine: Qr,
              Dt: Zr,
              camera: hr,
              cells: nr,
              translucentCells: Kr,
              translucent: {
                Uh: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: Br,
              targetOutline: Tr,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: Sr,
              needsRender: !0
            }
          }(rr, kS.current.fieldOfView)
        } catch (Qr) {
          return console.error("Failed to start the 3D heatmap", Qr), void NS(!0)
        }
        return pS.current = Sr, Sr.engine.runRenderLoop((() => {
          const rr = Sr.camera;
          rr.fov !== Sr.targetFieldOfView && (rr.fov += (Sr.targetFieldOfView - rr.fov) * (rr.fov > Sr.targetFieldOfView ? .3 : .2), Math.abs(Sr.targetFieldOfView - rr.fov) < 5e-4 && (rr.fov = Sr.targetFieldOfView), Sr.needsRender = !0), Sr.needsRender && (Sr.Dt.render(), Sr.needsRender = !Sr.Dt.isReady() || !Sr.engine.areAllEffectsReady())
        })), () => {
          pS.current = null, Sr.engine.dispose()
        }
      }), []), (0, Zr.useEffect)((() => {
        const rr = ES.current;
        if (!rr) return;
        const Sr = () => {
            YS.current = !1, tS(document.pointerLockElement === rr)
          },
          Qr = () => {
            YS.current && (YS.current = !1, zS(!1))
          },
          Zr = Sr => {
            const Qr = !kS.current.canLock && document.activeElement === rr && 0 !== (1 & Sr.buttons);
            if (document.pointerLockElement !== rr && !Qr) return;
            const Zr = kS.current.mouseSensitivity * Or;
            LS((rr => function(rr, Sr, Qr) {
              const Zr = 2 * Math.PI;
              return {
                ...rr,
                heading: ((rr.heading + Sr) % Zr + Zr) % Zr,
                pitch: Math.max(-Mr, Math.min(Mr, rr.pitch + Qr))
              }
            }(null !== rr && void 0 !== rr ? rr : kS.current.fittedView, Sr.movementX * Zr, Sr.movementY * Zr)))
          };
        return document.addEventListener("pointerlockchange", Sr), document.addEventListener("pointerlockerror", Qr), document.addEventListener("pointermove", Zr), () => {
          document.removeEventListener("pointerlockchange", Sr), document.removeEventListener("pointerlockerror", Qr), document.removeEventListener("pointermove", Zr), document.pointerLockElement === rr && (0, yr.d)()
        }
      }), []), (0, Zr.useEffect)((() => {
        const rr = pS.current;
        null !== rr && 0 !== xS.width && 0 !== xS.height && (rr.engine.resize(), rr.needsRender = !0)
      }), [xS.width, xS.height]), (0, Zr.useEffect)((() => {
        const rr = pS.current;
        null !== rr && (rr.targetFieldOfView = RS * (yS ? vr : 1))
      }), [RS, yS]), (0, Zr.useEffect)((() => {
        const rr = pS.current;
        null !== rr && function(rr, Sr, Qr, Zr) {
          const Wr = [],
            ar = [],
            jr = [],
            Ir = [];
          for (let fr = 0; fr < Sr.count; fr++) {
            const rr = Sr.values[fr],
              Er = (0, er.t)(rr, Qr, Zr);
            if (Er <= 0) continue;
            const [pr, xr, mr] = (0, er.n)((0, er.D)(rr, Qr)), Nr = Er >= 1;
            (Nr ? Wr : jr).push(Sr.positions[3 * fr] + .5, Sr.positions[3 * fr + 1] + .5, Sr.positions[3 * fr + 2] + .5), (Nr ? ar : Ir).push(pr / 255, xr / 255, mr / 255, Er)
          }
          dr(rr.cells, Float32Array.from(Wr), Float32Array.from(ar), ar.length / 4), rr.translucent = {
            Uh: Float32Array.from(jr),
            colours: Float32Array.from(Ir),
            count: Ir.length / 4
          }, rr.translucentSortedFrom = null, sr(rr), rr.needsRender = !0
        }(rr, qS, Qr, qr)
      }), [qS, Qr, qr]), (0, Zr.useEffect)((() => {
        const rr = pS.current;
        null !== rr && function(rr, Sr) {
          rr.chunkGridOrigin = Sr, rr.chunkGridCentre = null, Dr(rr)
        }(rr, Gr.min)
      }), [Gr]), (0, Zr.useEffect)((() => {
        const rr = pS.current;
        null !== rr && function(rr, Sr, Qr) {
          const Zr = [],
            Wr = [];
          if (null !== Sr) {
            const {
              positions: rr,
              colours: ar,
              count: jr
            } = Sr.surface;
            for (let Sr = 0; Sr < jr; Sr++) {
              const jr = [rr[3 * Sr], rr[3 * Sr + 1], rr[3 * Sr + 2]];
              [0, 1, 2].every((rr => jr[rr] >= Qr.min[rr] - Hr && jr[rr] <= Qr.max[rr] + Hr)) && (Zr.push(jr[0] - Qr.min[0] + .5, jr[1] - Qr.min[1] + .5, jr[2] - Qr.min[2] + .5), Wr.push(ar[3 * Sr] / 255, ar[3 * Sr + 1] / 255, ar[3 * Sr + 2] / 255, 1))
            }
          }
          dr(rr.schematicBlocks, Float32Array.from(Zr), Float32Array.from(Wr), Wr.length / 4), rr.needsRender = !0
        }(rr, Ar, Gr)
      }), [Ar, Gr]), (0, Zr.useEffect)((() => {
        const rr = pS.current;
        null !== rr && null !== rr.chunkGrid && (rr.chunkGrid.isVisible = TS, rr.needsRender = !0)
      }), [TS, Gr]), (0, Zr.useEffect)((() => {
        const rr = pS.current;
        null !== rr && function(rr, Sr, Qr) {
          const {
            camera: Zr
          } = rr;
          Zr.position.set(Sr.position[0], Sr.position[1], Sr.position[2]), Zr.rotation.set(Sr.pitch, Sr.heading, 0);
          const Wr = (Rr + 1) * Ur.i.hx * Math.sqrt(3);
          Zr.maxZ = Math.max(Wr, Math.hypot(...jS(Sr.position, IS(WS({
            min: [0, 0, 0],
            max: Qr
          }), -1))) + 2 * Math.hypot(...Qr)), Dr(rr), sr(rr), rr.needsRender = !0
        }(rr, GS, HS)
      }), [GS, HS]), (0, Zr.useEffect)((() => {
        const rr = pS.current;
        null !== rr && (rr.targetOutline.isVisible = null !== AS, null !== AS && rr.targetOutline.position.set(AS.x - lS[0] + .5, AS.y - lS[1] + .5, AS.z - lS[2] + .5), rr.needsRender = !0)
      }), [AS, lS]);
      return (0, Br.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: fS,
        children: [(0, Br.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: ES,
          style: {
            width: `${xS.width}px`,
            height: `${xS.height}px`
          },
          tabIndex: 0,
          "aria-label": br("3D heatmap"),
          onClick: () => {
            const rr = ES.current;
            if (null === rr) return;
            if (rr.focus({
                preventScroll: !0
              }), US || !hS) return;
            const Sr = rr.requestPointerLock();
            Sr instanceof Promise ? Sr.catch((rr => {
              rr instanceof DOMException && ("WrongDocumentError" === rr.name || "NotSupportedError" === rr.name) && zS(!1)
            })) : YS.current = !0
          },
          ...VS,
          onKeyDown: rr => {
            if (KS && Lr.has(rr.code)) return rr.preventDefault(), void(() => {
              const rr = ES.current;
              null !== rr && document.pointerLockElement === rr ? (0, yr.d)() : null === rr || void 0 === rr || rr.blur()
            })();
            const Sr = lr[rr.code];
            return KS && void 0 !== Sr ? (rr.preventDefault(), void ir(Sr)) : KS && (0, Kr.d)("replayPlayPause", rr.code) && !(0, Kr.d)("Zoom", rr.code) ? (rr.preventDefault(), void(rr.repeat || cr())) : KS && rr.code === Xr ? (rr.preventDefault(), void wr()) : KS && rr.code === Cr ? (rr.preventDefault(), void LS(null)) : KS && rr.code === gr ? (rr.preventDefault(), void vS((rr => !rr))) : void VS.onKeyDown(rr)
          },
          onFocus: () => {
            eS(!0)
          },
          onBlur: () => {
            eS(!1), VS.onBlur()
          }
        }), mS && (0, Br.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: br("3D view isn't available in this browser.")
        }), KS && (0, Br.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, Br.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: GS.position.map(((rr, Sr) => (rr + lS[Sr]).toFixed(2))).join(" ")
        }), TS && (0, Br.jsx)(Jr, {
          heading: GS.heading,
          pitch: GS.pitch,
          onViewFrom: rr => {
            const Sr = IS(rr, -1),
              Qr = 0 === Sr[1] ? {
                heading: Math.atan2(Sr[0], Sr[2]),
                pitch: 0
              } : {
                heading: GS.heading,
                pitch: Sr[1] < 0 ? Mr : -Mr
              };
            LS(QS(CS, gS, RS, Qr))
          },
          onTurn: (rr, Sr) => {
            LS((Qr => function(rr, Sr, Qr, Zr) {
              return ZS(rr, Sr, {
                heading: rr.heading + Qr * Fr,
                pitch: Math.max(-Mr, Math.min(Mr, rr.pitch + Zr * Fr))
              })
            }(null !== Qr && void 0 !== Qr ? Qr : kS.current.fittedView, WS(CS), rr, Sr)))
          },
          onFlip: () => {
            LS((rr => function(rr, Sr) {
              return ZS(rr, Sr, {
                heading: rr.heading + Math.PI,
                pitch: -rr.pitch
              })
            }(null !== rr && void 0 !== rr ? rr : kS.current.fittedView, WS(CS))))
          }
        }), null !== AS && (0, Br.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === or ? br("studio:heatmapBlockReadout", {
            x: AS.x,
            y: AS.y,
            z: AS.z,
            count: (0, Nr.S)(AS.value)
          }) : or(AS.x, AS.y, AS.z, AS.value)
        }), (0, Br.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [Vr, (0, Br.jsx)(Yr.U, {
            active: null === OS,
            onClick: () => {
              LS(null)
            },
            children: (0, Br.jsx)(nr.c, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function Jr(rr) {
      let {
        heading: Sr,
        pitch: Qr,
        onViewFrom: Wr,
        onTurn: ar,
        onFlip: jr
      } = rr;
      const {
        t: Ir
      } = (0, tr.E)(), fr = (0, Zr.useRef)(null), Er = rS({
        heading: Sr,
        pitch: Qr
      }), pr = SS(Sr), xr = ES(Er, pr), mr = ir + wr + 2, Nr = Vr.flatMap((rr => [1, -1].map((Sr => {
        const Qr = IS(rr.direction, Sr);
        return {
          ...rr,
          sign: Sr,
          direction: Qr,
          endX: mr + fS(Qr, pr) * ir,
          endY: mr - fS(Qr, xr) * ir,
          depth: fS(Qr, Er)
        }
      })))).sort(((rr, Sr) => Sr.depth - rr.depth));
      return (0, Br.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * mr,
        height: 2 * mr,
        "aria-hidden": !0,
        onPointerDown: rr => {
          var Sr, Qr;
          rr.currentTarget.setPointerCapture(rr.pointerId);
          const Zr = rr.target,
            Wr = Zr.getAttribute("data-end");
          fr.current = {
            pointerId: rr.pointerId,
            x: rr.clientX,
            y: rr.clientY,
            travel: 0,
            side: null === Wr ? null : null !== (Sr = null === (Qr = Nr[Number(Wr)]) || void 0 === Qr ? void 0 : Qr.direction) && void 0 !== Sr ? Sr : null,
            isOnMiddle: Zr.hasAttribute("data-middle")
          }
        },
        onPointerMove: rr => {
          const Sr = fr.current;
          if (null === Sr || Sr.pointerId !== rr.pointerId) return;
          const Qr = rr.clientX - Sr.x,
            Zr = rr.clientY - Sr.y;
          Sr.x = rr.clientX, Sr.y = rr.clientY, Sr.travel += Math.abs(Qr) + Math.abs(Zr), Sr.travel >= or && ar(Qr, Zr)
        },
        onPointerUp: rr => {
          const Sr = fr.current;
          fr.current = null, null === Sr || Sr.pointerId !== rr.pointerId || Sr.travel >= or || (null !== Sr.side ? Wr(Sr.side) : Sr.isOnMiddle && jr())
        },
        onPointerCancel: () => {
          fr.current = null
        },
        children: [Nr.map(((rr, Sr) => {
          const Qr = rr.sign > 0;
          return (0, Br.jsxs)("g", {
            children: [(0, Br.jsx)("line", {
              x1: mr,
              y1: mr,
              x2: rr.endX,
              y2: rr.endY,
              stroke: rr.colour,
              strokeOpacity: Qr ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, Br.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": Sr,
              cx: rr.endX,
              cy: rr.endY,
              r: Qr ? wr : wr - 1,
              fill: rr.colour,
              fillOpacity: Qr ? 1 : .3,
              stroke: rr.colour,
              strokeWidth: Qr ? 0 : 1.5,
              children: (0, Br.jsx)("title", {
                children: `${Ir("View from")} ${Qr?"+":"\u2212"}${rr.name}`
              })
            }), Qr && (0, Br.jsx)("text", {
              pointerEvents: "none",
              x: rr.endX,
              y: rr.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: rr.name
            })]
          }, `${Qr?"+":"-"}${rr.name}`)
        })), (0, Br.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: mr,
          cy: mr,
          r: cr,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, Br.jsx)("title", {
            children: Ir("View from the opposite side")
          })
        })]
      })
    }

    function Dr(rr) {
      var Sr, Qr, Zr;
      const {
        chunkGridOrigin: Wr,
        camera: ar
      } = rr;
      if (null === Wr) return;
      const jr = [ar.position.x, ar.position.y, ar.position.z],
        Ir = [0, 2].map((rr => Math.floor((jr[rr] + Wr[rr]) / Ur.i.hx))),
        fr = rr.chunkGridCentre;
      if (null !== fr && fr.every(((rr, Sr) => rr === Ir[Sr]))) return;
      const xr = null === (Sr = null === (Qr = rr.chunkGrid) || void 0 === Qr ? void 0 : Qr.isVisible) || void 0 === Sr || Sr;
      null === (Zr = rr.chunkGrid) || void 0 === Zr || Zr.dispose();
      const [Nr, tr] = [0, 2].map(((rr, Sr) => {
        const Qr = [];
        for (let Zr = Ir[Sr] - Rr; Zr <= Ir[Sr] + Rr + 1; Zr++) Qr.push(Zr * Ur.i.hx - Wr[rr]);
        return Qr
      })), hr = -Wr[1], zr = [];
      for (const Er of tr) zr.push([new pr.kU(Nr[0], hr, Er), new pr.kU(Nr[Nr.length - 1], hr, Er)]);
      for (const Er of Nr) zr.push([new pr.kU(Er, hr, tr[0]), new pr.kU(Er, hr, tr[tr.length - 1])]);
      const Yr = (0, mr.e)("Heatmap3DChunkGrid", {
        lines: zr
      }, rr.Dt);
      Yr.color = new Er.Color3(.45, .6, .78), Yr.ut = !1, Yr.isVisible = xr, rr.chunkGrid = Yr, rr.chunkGridCentre = Ir, rr.needsRender = !0
    }

    function dr(rr, Sr, Qr, Zr) {
      rr.vrr("matrix", function(rr, Sr) {
        const Qr = new Float32Array(16 * Sr);
        for (let Zr = 0; Zr < Sr; Zr++) {
          const Sr = 16 * Zr;
          Qr[Sr] = 1, Qr[Sr + 5] = 1, Qr[Sr + 10] = 1, Qr[Sr + 12] = rr[3 * Zr], Qr[Sr + 13] = rr[3 * Zr + 1], Qr[Sr + 14] = rr[3 * Zr + 2], Qr[Sr + 15] = 1
        }
        return Qr
      }(Sr, Zr), 16, !0), rr.vrr("color", Qr, 4, !0), rr.isVisible = Zr > 0
    }

    function sr(rr) {
      const {
        camera: Sr,
        translucent: Qr
      } = rr, Zr = [Sr.position.x, Sr.position.y, Sr.position.z], Wr = rr.translucentSortedFrom;
      if (null !== Wr && Math.hypot(Zr[0] - Wr[0], Zr[1] - Wr[1], Zr[2] - Wr[2]) < qr) return;
      rr.translucentSortedFrom = Zr;
      const ar = new Float64Array(Qr.count),
        jr = new Uint32Array(Qr.count);
      for (let Er = 0; Er < Qr.count; Er++) {
        const rr = Qr.Uh[3 * Er] - Zr[0],
          Sr = Qr.Uh[3 * Er + 1] - Zr[1],
          Wr = Qr.Uh[3 * Er + 2] - Zr[2];
        ar[Er] = rr * rr + Sr * Sr + Wr * Wr, jr[Er] = Er
      }
      jr.sort(((rr, Sr) => ar[Sr] - ar[rr]));
      const Ir = new Float32Array(3 * Qr.count),
        fr = new Float32Array(4 * Qr.count);
      jr.forEach(((rr, Sr) => {
        Ir.set(Qr.Uh.subarray(3 * rr, 3 * rr + 3), 3 * Sr), fr.set(Qr.colours.subarray(4 * rr, 4 * rr + 4), 4 * Sr)
      })), dr(rr.translucentCells, Ir, fr, Qr.count), rr.needsRender = !0
    }

    function ur(rr, Sr) {
      const Qr = (Qr, Zr, Wr) => new pr.kU(0 === Qr ? rr[0] : Sr[0], 0 === Zr ? rr[1] : Sr[1], 0 === Wr ? rr[2] : Sr[2]),
        Zr = [];
      for (const Wr of [0, 1])
        for (const rr of [0, 1]) Zr.push([Qr(0, Wr, rr), Qr(1, Wr, rr)], [Qr(Wr, 0, rr), Qr(Wr, 1, rr)], [Qr(Wr, rr, 0), Qr(Wr, rr, 1)]);
      return Zr
    }

    function rS(rr) {
      return [Math.sin(rr.heading) * Math.cos(rr.pitch), -Math.sin(rr.pitch), Math.cos(rr.heading) * Math.cos(rr.pitch)]
    }

    function SS(rr) {
      return [Math.cos(rr), 0, -Math.sin(rr)]
    }

    function QS(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: Gr,
        pitch: kr
      };
      const Wr = [rr.max[0] - rr.min[0], rr.max[1] - rr.min[1], rr.max[2] - rr.min[2]],
        ar = rS(Zr),
        jr = SS(Zr.heading),
        Ir = ES(ar, jr),
        fr = Math.tan(Qr / 2),
        Er = fr * Sr;
      let pr = 1;
      for (const xr of [-Wr[0] / 2, Wr[0] / 2])
        for (const rr of [-Wr[1] / 2, Wr[1] / 2])
          for (const Sr of [-Wr[2] / 2, Wr[2] / 2]) {
            const Qr = [xr, rr, Sr],
              Zr = fS(Qr, ar);
            pr = Math.max(pr, Math.abs(fS(Qr, jr)) / Er - Zr, Math.abs(fS(Qr, Ir)) / fr - Zr)
          }
      return {
        position: jS([rr.min[0] + Wr[0] / 2, rr.min[1] + Wr[1] / 2, rr.min[2] + Wr[2] / 2], IS(ar, -pr * Ar)),
        heading: Zr.heading,
        pitch: Zr.pitch
      }
    }

    function ZS(rr, Sr, Qr) {
      const Zr = aS(rr),
        Wr = aS(Qr),
        ar = jS(rr.position, IS(Sr, -1)),
        jr = [0, 1, 2].reduce(((rr, Sr) => jS(rr, IS(Wr[Sr], fS(ar, Zr[Sr])))), [0, 0, 0]);
      return {
        position: jS(Sr, jr),
        heading: Qr.heading,
        pitch: Qr.pitch
      }
    }

    function WS(rr) {
      return IS(jS(rr.min, rr.max), .5)
    }

    function aS(rr) {
      const Sr = rS(rr),
        Qr = SS(rr.heading);
      return [Sr, Qr, ES(Sr, Qr)]
    }

    function jS(rr, Sr) {
      return [rr[0] + Sr[0], rr[1] + Sr[1], rr[2] + Sr[2]]
    }

    function IS(rr, Sr) {
      return [rr[0] * Sr, rr[1] * Sr, rr[2] * Sr]
    }

    function fS(rr, Sr) {
      return rr[0] * Sr[0] + rr[1] * Sr[1] + rr[2] * Sr[2]
    }

    function ES(rr, Sr) {
      return [rr[1] * Sr[2] - rr[2] * Sr[1], rr[2] * Sr[0] - rr[0] * Sr[2], rr[0] * Sr[1] - rr[1] * Sr[0]]
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);