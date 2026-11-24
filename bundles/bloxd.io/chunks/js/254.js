export const id = 254;
export const ids = [254];
export const modules = {
  39889: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => CB
    });
    zB(6420);
    var QB = zB(62),
      nB = zB(39895),
      dB = zB(40154),
      IB = zB(40287),
      NB = zB(40335),
      uB = zB(40350),
      UB = zB(37372),
      aB = zB(37166),
      pB = zB(40496),
      rB = zB(40557),
      sB = (zB(40584), zB(1263)),
      JB = zB(214),
      mB = zB(1240),
      yB = zB(28),
      kB = zB(2853),
      GB = zB(1478),
      LB = zB(1108),
      gB = zB(6413),
      tB = zB(6422),
      SB = zB(4569),
      MB = zB(1148);
    const EB = 1.2,
      iB = .2,
      qB = .0066 * Math.PI / 180,
      fB = new Set(["Escape", "KeyG"]),
      oB = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      HB = "ArrowUp",
      DB = new Set([...Object.keys(oB), HB, "ArrowDown"]),
      FB = 32,
      YB = 1,
      VB = 10,
      hB = "F4",
      XB = "Period",
      ZB = Math.PI / 2 - .001,
      AB = Math.PI / 6,
      TB = Math.PI / 6,
      PB = 1.08,
      WB = [{
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
      eB = 24,
      lB = 7,
      wB = 4,
      xB = .01,
      KB = 4;

    function CB(BB) {
      let {
        heatmap: jB,
        scale: zB,
        fullyOpaqueFrom: YB,
        bounds: AB,
        fitBounds: TB,
        schematic: PB,
        controls: WB,
        onStepTime: eB,
        onShowAllTime: lB,
        onTogglePlaying: wB,
        getReadout: KB = null
      } = BB;
      const {
        t: CB
      } = (0, mB.D)(), {
        clientEscMenuOptions: dj
      } = (0, yB.m)(["clientEscMenuOptions"]), uj = (0, QB.useRef)(null), Uj = (0, QB.useRef)(null), aj = (0, QB.useRef)(null), pj = (0, kB.b)(uj), [rj, sj] = (0, QB.useState)(!1), [Jj, mj] = (0, QB.useState)(!1), [yj, kj] = (0, QB.useState)(!0), Gj = (0, QB.useRef)(!1), [Lj, gj] = (0, QB.useState)(!1), tj = Jj || !yj && Lj, [Sj, Mj] = (0, QB.useState)(!1), [Ej, ij] = (0, QB.useState)(!0), [qj, fj] = (0, QB.useState)(null), oj = AB.min, [Hj, Dj] = (0, QB.useState)(oj);
      Hj[0] === oj[0] && Hj[1] === oj[1] && Hj[2] === oj[2] || (Dj(oj), null !== qj && fj({
        ...qj,
        position: Ij(qj.position, Ij(Hj, Nj(oj, -1)))
      }));
      const Fj = (0, QB.useMemo)((() => function(BB) {
          return [BB.max[0] - BB.min[0] + 1, BB.max[1] - BB.min[1] + 1, BB.max[2] - BB.min[2] + 1]
        }(AB)), [AB]),
        Yj = (0, QB.useMemo)((() => function(BB, jB) {
          const zB = [],
            QB = [];
          for (const [nB, dB] of Object.entries(BB.frequencies)) {
            const BB = Number(nB);
            for (const [nB, IB] of Object.entries(dB)) {
              const dB = Number(nB);
              for (const [nB, NB] of Object.entries(IB)) NB <= 0 || (zB.push(BB - jB[0], dB - jB[1], Number(nB) - jB[2]), QB.push(NB))
            }
          }
          return {
            positions: Int32Array.from(zB),
            values: Float64Array.from(QB),
            count: QB.length
          }
        }(jB, oj)), [jB, oj]),
        Vj = EB * dj.cameraFOV / 100,
        hj = pj.height > 0 ? pj.width / pj.height : 1,
        Xj = (0, QB.useMemo)((() => function(BB, jB) {
          return {
            min: [BB.min[0] - jB[0], BB.min[1] - jB[1], BB.min[2] - jB[2]],
            max: [BB.max[0] - jB[0] + 1, BB.max[1] - jB[1] + 1, BB.max[2] - jB[2] + 1]
          }
        }(TB, oj)), [TB, oj]),
        Zj = zj(Xj, hj, Vj),
        Aj = null !== qj && void 0 !== qj ? qj : Zj,
        Tj = (0, QB.useRef)({
          fittedView: Zj,
          fieldOfView: Vj,
          mouseSensitivity: dj.mouseSensitivity,
          canLock: yj
        });
      Tj.current = {
        fittedView: Zj,
        fieldOfView: Vj,
        mouseSensitivity: dj.mouseSensitivity,
        canLock: yj
      };
      const Pj = (0, QB.useMemo)((() => {
          if (!tj) return null;
          const BB = (BB, zB, QB) => {
              var nB, dB, IB;
              return null !== (nB = null === (dB = jB.frequencies[BB + oj[0]]) || void 0 === dB || null === (IB = dB[zB + oj[1]]) || void 0 === IB ? void 0 : IB[QB + oj[2]]) && void 0 !== nB ? nB : 0
            },
            QB = function(BB, jB, zB, QB) {
              let nB = 0,
                dB = 1 / 0;
              for (const pB of [0, 1, 2]) {
                if (0 === jB[pB]) {
                  if (BB[pB] < 0 || BB[pB] > zB[pB]) return null;
                  continue
                }
                const QB = (0 - BB[pB]) / jB[pB],
                  IB = (zB[pB] - BB[pB]) / jB[pB];
                nB = Math.max(nB, Math.min(QB, IB)), dB = Math.min(dB, Math.max(QB, IB))
              }
              if (nB > dB) return null;
              const IB = [0, 1, 2].map((QB => Math.min(zB[QB] - 1, Math.max(0, Math.floor(BB[QB] + jB[QB] * nB))))),
                NB = [0, 1, 2].map((BB => Math.sign(jB[BB]))),
                uB = [0, 1, 2].map((zB => {
                  if (0 === NB[zB]) return 1 / 0;
                  return ((NB[zB] > 0 ? IB[zB] + 1 : IB[zB]) - BB[zB]) / jB[zB]
                })),
                UB = [0, 1, 2].map((BB => 0 === NB[BB] ? 1 / 0 : Math.abs(1 / jB[BB])));
              let aB = null;
              for (;;) {
                const BB = QB(IB[0], IB[1], IB[2]);
                if (BB >= 1) return IB;
                BB > 0 && (aB = [IB[0], IB[1], IB[2]]);
                const jB = uB[0] < uB[1] ? uB[0] < uB[2] ? 0 : 2 : uB[1] < uB[2] ? 1 : 2;
                if (uB[jB] > dB) return aB;
                if (IB[jB] += NB[jB], uB[jB] += UB[jB], IB[jB] < 0 || IB[jB] >= zB[jB]) return aB
              }
            }(Aj.position, Bj(Aj), Fj, ((jB, QB, nB) => (0, gB.z)(BB(jB, QB, nB), zB, YB)));
          return null === QB ? null : {
            x: QB[0] + oj[0],
            y: QB[1] + oj[1],
            z: QB[2] + oj[2],
            value: BB(QB[0], QB[1], QB[2])
          }
        }), [tj, jB, oj, Aj, Fj, zB, YB]),
        {
          keyHandlers: Wj
        } = (0, tB.f)({
          isEnabled: tj,
          claimedKeyCodes: DB,
          yr: BB => {
            fj((jB => function(BB, jB) {
              const zB = [Math.sin(BB.heading), 0, Math.cos(BB.heading)],
                QB = Ij(Ij(Nj(zB, jB.forward), Nj(jj(BB.heading), jB.right)), [0, jB.up, 0]);
              return {
                ...BB,
                position: Ij(BB.position, QB)
              }
            }(null !== jB && void 0 !== jB ? jB : Tj.current.fittedView, BB)))
          },
          onZoomChange: Mj
        });
      (0, QB.useEffect)((() => {
        const BB = Uj.current;
        if (!BB) return;
        let jB;
        try {
          jB = function(BB, jB) {
            const zB = new nB.b(BB, !0, {
                stencil: !1
              }, !0),
              QB = new dB.d(zB),
              [sB, JB, mB] = gB.Q;
            QB.clearColor = new UB.c(sB / 255, JB / 255, mB / 255, 1);
            const yB = new IB.d("Heatmap3DCamera", aB.KJ.Zero(), QB);
            yB.fov = jB, yB.minZ = .05;
            const kB = new NB.e("Heatmap3DLight", new aB.KJ(.4, 1, -.6), QB);
            kB.diffuse = UB.Color3.White(), kB.groundColor = UB.Color3.Black(), kB.specular = UB.Color3.Black();
            const GB = new uB.StandardMaterial("Heatmap3DCellMaterial", QB);
            GB.diffuseColor = new UB.Color3(.4, .4, .4), GB.emissiveColor = new UB.Color3(.62, .62, .62), GB.specularColor = UB.Color3.Black();
            const LB = (0, pB.e)("Heatmap3DCells", {
              size: 1
            }, QB);
            LB.material = GB, LB.Ny = !1, LB.xJ = !0, LB.isVisible = !1;
            const tB = (0, pB.e)("Heatmap3DTranslucentCells", {
              size: 1
            }, QB);
            tB.material = GB, tB.hasVertexAlpha = !0, tB.Ny = !1, tB.xJ = !0, tB.isVisible = !1;
            const SB = new uB.StandardMaterial("Heatmap3DSchematicMaterial", QB);
            SB.diffuseColor = new UB.Color3(.6, .6, .6), SB.emissiveColor = new UB.Color3(.4, .4, .4), SB.specularColor = UB.Color3.Black();
            const MB = (0, pB.e)("Heatmap3DSchematicBlocks", {
              size: 1
            }, QB);
            MB.material = SB, MB.Ny = !1, MB.xJ = !0, MB.isVisible = !1;
            const EB = (0, rB.c)("Heatmap3DTarget", {
              lines: OB([-.52, -.52, -.52], [.52, .52, .52])
            }, QB);
            return EB.color = new UB.Color3(.06, .14, .23), EB.renderingGroupId = 1, EB.Ny = !1, EB.isVisible = !1, {
              engine: zB,
              ny: QB,
              camera: yB,
              cells: LB,
              translucentCells: tB,
              translucent: {
                fp: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: MB,
              targetOutline: EB,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: jB,
              needsRender: !0
            }
          }(BB, Tj.current.fieldOfView)
        } catch (zB) {
          return console.error("Failed to start the 3D heatmap", zB), void sj(!0)
        }
        return aj.current = jB, jB.engine.runRenderLoop((() => {
          const BB = jB.camera;
          BB.fov !== jB.targetFieldOfView && (BB.fov += (jB.targetFieldOfView - BB.fov) * (BB.fov > jB.targetFieldOfView ? .3 : .2), Math.abs(jB.targetFieldOfView - BB.fov) < 5e-4 && (BB.fov = jB.targetFieldOfView), jB.needsRender = !0), jB.needsRender && (jB.ny.render(), jB.needsRender = !jB.ny.isReady() || !jB.engine.areAllEffectsReady())
        })), () => {
          aj.current = null, jB.engine.dispose()
        }
      }), []), (0, QB.useEffect)((() => {
        const BB = Uj.current;
        if (!BB) return;
        const jB = () => {
            Gj.current = !1, mj(document.pointerLockElement === BB)
          },
          zB = () => {
            Gj.current && (Gj.current = !1, kj(!1))
          },
          QB = jB => {
            const zB = !Tj.current.canLock && document.activeElement === BB && 0 !== (1 & jB.buttons);
            if (document.pointerLockElement !== BB && !zB) return;
            const QB = Tj.current.mouseSensitivity * qB;
            fj((BB => function(BB, jB, zB) {
              const QB = 2 * Math.PI;
              return {
                ...BB,
                heading: ((BB.heading + jB) % QB + QB) % QB,
                pitch: Math.max(-ZB, Math.min(ZB, BB.pitch + zB))
              }
            }(null !== BB && void 0 !== BB ? BB : Tj.current.fittedView, jB.movementX * QB, jB.movementY * QB)))
          };
        return document.addEventListener("pointerlockchange", jB), document.addEventListener("pointerlockerror", zB), document.addEventListener("pointermove", QB), () => {
          document.removeEventListener("pointerlockchange", jB), document.removeEventListener("pointerlockerror", zB), document.removeEventListener("pointermove", QB), document.pointerLockElement === BB && (0, SB.e)()
        }
      }), []), (0, QB.useEffect)((() => {
        const BB = aj.current;
        null !== BB && 0 !== pj.width && 0 !== pj.height && (BB.engine.resize(), BB.needsRender = !0)
      }), [pj.width, pj.height]), (0, QB.useEffect)((() => {
        const BB = aj.current;
        null !== BB && (BB.targetFieldOfView = Vj * (Sj ? iB : 1))
      }), [Vj, Sj]), (0, QB.useEffect)((() => {
        const BB = aj.current;
        null !== BB && function(BB, jB, zB, QB) {
          const nB = [],
            dB = [],
            IB = [],
            NB = [];
          for (let uB = 0; uB < jB.count; uB++) {
            const BB = jB.values[uB],
              UB = (0, gB.z)(BB, zB, QB);
            if (UB <= 0) continue;
            const [aB, pB, rB] = (0, gB.p)((0, gB.I)(BB, zB)), sB = UB >= 1;
            (sB ? nB : IB).push(jB.positions[3 * uB] + .5, jB.positions[3 * uB + 1] + .5, jB.positions[3 * uB + 2] + .5), (sB ? dB : NB).push(aB / 255, pB / 255, rB / 255, UB)
          }
          vB(BB.cells, Float32Array.from(nB), Float32Array.from(dB), dB.length / 4), BB.translucent = {
            fp: Float32Array.from(IB),
            colours: Float32Array.from(NB),
            count: NB.length / 4
          }, BB.translucentSortedFrom = null, RB(BB), BB.needsRender = !0
        }(BB, Yj, zB, YB)
      }), [Yj, zB, YB]), (0, QB.useEffect)((() => {
        const BB = aj.current;
        null !== BB && function(BB, jB) {
          BB.chunkGridOrigin = jB, BB.chunkGridCentre = null, bB(BB)
        }(BB, AB.min)
      }), [AB]), (0, QB.useEffect)((() => {
        const BB = aj.current;
        null !== BB && function(BB, jB, zB) {
          const QB = [],
            nB = [];
          if (null !== jB) {
            const {
              positions: BB,
              colours: dB,
              count: IB
            } = jB.surface;
            for (let jB = 0; jB < IB; jB++) {
              const IB = [BB[3 * jB], BB[3 * jB + 1], BB[3 * jB + 2]];
              [0, 1, 2].every((BB => IB[BB] >= zB.min[BB] - FB && IB[BB] <= zB.max[BB] + FB)) && (QB.push(IB[0] - zB.min[0] + .5, IB[1] - zB.min[1] + .5, IB[2] - zB.min[2] + .5), nB.push(dB[3 * jB] / 255, dB[3 * jB + 1] / 255, dB[3 * jB + 2] / 255, 1))
            }
          }
          vB(BB.schematicBlocks, Float32Array.from(QB), Float32Array.from(nB), nB.length / 4), BB.needsRender = !0
        }(BB, PB, AB)
      }), [PB, AB]), (0, QB.useEffect)((() => {
        const BB = aj.current;
        null !== BB && null !== BB.chunkGrid && (BB.chunkGrid.isVisible = Ej, BB.needsRender = !0)
      }), [Ej, AB]), (0, QB.useEffect)((() => {
        const BB = aj.current;
        null !== BB && function(BB, jB, zB) {
          const {
            camera: QB
          } = BB;
          QB.position.set(jB.position[0], jB.position[1], jB.position[2]), QB.rotation.set(jB.pitch, jB.heading, 0);
          const nB = (VB + 1) * JB.e.ZJ * Math.sqrt(3);
          QB.maxZ = Math.max(nB, Math.hypot(...Ij(jB.position, Nj(nj({
            min: [0, 0, 0],
            max: zB
          }), -1))) + 2 * Math.hypot(...zB)), bB(BB), RB(BB), BB.needsRender = !0
        }(BB, Aj, Fj)
      }), [Aj, Fj]), (0, QB.useEffect)((() => {
        const BB = aj.current;
        null !== BB && (BB.targetOutline.isVisible = null !== Pj, null !== Pj && BB.targetOutline.position.set(Pj.x - oj[0] + .5, Pj.y - oj[1] + .5, Pj.z - oj[2] + .5), BB.needsRender = !0)
      }), [Pj, oj]);
      return (0, MB.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: uj,
        children: [(0, MB.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: Uj,
          style: {
            width: `${pj.width}px`,
            height: `${pj.height}px`
          },
          tabIndex: 0,
          "aria-label": CB("3D heatmap"),
          onClick: () => {
            const BB = Uj.current;
            if (null === BB) return;
            if (BB.focus({
                preventScroll: !0
              }), Jj || !yj) return;
            const jB = BB.requestPointerLock();
            jB instanceof Promise ? jB.catch((BB => {
              BB instanceof DOMException && ("WrongDocumentError" === BB.name || "NotSupportedError" === BB.name) && kj(!1)
            })) : Gj.current = !0
          },
          ...Wj,
          onKeyDown: BB => {
            if (tj && fB.has(BB.code)) return BB.preventDefault(), void(() => {
              const BB = Uj.current;
              null !== BB && document.pointerLockElement === BB ? (0, SB.e)() : null === BB || void 0 === BB || BB.blur()
            })();
            const jB = oB[BB.code];
            return tj && void 0 !== jB ? (BB.preventDefault(), void eB(jB)) : tj && (0, tB.e)("replayPlayPause", BB.code) && !(0, tB.e)("Zoom", BB.code) ? (BB.preventDefault(), void(BB.repeat || wB())) : tj && BB.code === HB ? (BB.preventDefault(), void lB()) : tj && BB.code === XB ? (BB.preventDefault(), void fj(null)) : tj && BB.code === hB ? (BB.preventDefault(), void ij((BB => !BB))) : void Wj.onKeyDown(BB)
          },
          onFocus: () => {
            gj(!0)
          },
          onBlur: () => {
            gj(!1), Wj.onBlur()
          }
        }), rj && (0, MB.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: CB("3D view isn't available in this browser.")
        }), tj && (0, MB.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, MB.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: Aj.position.map(((BB, jB) => (BB + oj[jB]).toFixed(2))).join(" ")
        }), Ej && (0, MB.jsx)(cB, {
          heading: Aj.heading,
          pitch: Aj.pitch,
          onViewFrom: BB => {
            const jB = Nj(BB, -1),
              zB = 0 === jB[1] ? {
                heading: Math.atan2(jB[0], jB[2]),
                pitch: 0
              } : {
                heading: Aj.heading,
                pitch: jB[1] < 0 ? ZB : -ZB
              };
            fj(zj(Xj, hj, Vj, zB))
          },
          onTurn: (BB, jB) => {
            fj((zB => function(BB, jB, zB, QB) {
              return Qj(BB, jB, {
                heading: BB.heading + zB * xB,
                pitch: Math.max(-ZB, Math.min(ZB, BB.pitch + QB * xB))
              })
            }(null !== zB && void 0 !== zB ? zB : Tj.current.fittedView, nj(Xj), BB, jB)))
          },
          onFlip: () => {
            fj((BB => function(BB, jB) {
              return Qj(BB, jB, {
                heading: BB.heading + Math.PI,
                pitch: -BB.pitch
              })
            }(null !== BB && void 0 !== BB ? BB : Tj.current.fittedView, nj(Xj))))
          }
        }), null !== Pj && (0, MB.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === KB ? CB("studio:heatmapBlockReadout", {
            x: Pj.x,
            y: Pj.y,
            z: Pj.z,
            count: (0, sB.J)(Pj.value)
          }) : KB(Pj.x, Pj.y, Pj.z, Pj.value)
        }), (0, MB.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [WB, (0, MB.jsx)(GB.M, {
            active: null === qj,
            onClick: () => {
              fj(null)
            },
            children: (0, MB.jsx)(LB.c, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function cB(BB) {
      let {
        heading: jB,
        pitch: zB,
        onViewFrom: nB,
        onTurn: dB,
        onFlip: IB
      } = BB;
      const {
        t: NB
      } = (0, mB.D)(), uB = (0, QB.useRef)(null), UB = Bj({
        heading: jB,
        pitch: zB
      }), aB = jj(jB), pB = Uj(UB, aB), rB = eB + lB + 2, sB = WB.flatMap((BB => [1, -1].map((jB => {
        const zB = Nj(BB.direction, jB);
        return {
          ...BB,
          sign: jB,
          direction: zB,
          endX: rB + uj(zB, aB) * eB,
          endY: rB - uj(zB, pB) * eB,
          depth: uj(zB, UB)
        }
      })))).sort(((BB, jB) => jB.depth - BB.depth));
      return (0, MB.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * rB,
        height: 2 * rB,
        "aria-hidden": !0,
        onPointerDown: BB => {
          var jB, zB;
          BB.currentTarget.setPointerCapture(BB.pointerId);
          const QB = BB.target,
            nB = QB.getAttribute("data-end");
          uB.current = {
            pointerId: BB.pointerId,
            x: BB.clientX,
            y: BB.clientY,
            travel: 0,
            side: null === nB ? null : null !== (jB = null === (zB = sB[Number(nB)]) || void 0 === zB ? void 0 : zB.direction) && void 0 !== jB ? jB : null,
            isOnMiddle: QB.hasAttribute("data-middle")
          }
        },
        onPointerMove: BB => {
          const jB = uB.current;
          if (null === jB || jB.pointerId !== BB.pointerId) return;
          const zB = BB.clientX - jB.x,
            QB = BB.clientY - jB.y;
          jB.x = BB.clientX, jB.y = BB.clientY, jB.travel += Math.abs(zB) + Math.abs(QB), jB.travel >= KB && dB(zB, QB)
        },
        onPointerUp: BB => {
          const jB = uB.current;
          uB.current = null, null === jB || jB.pointerId !== BB.pointerId || jB.travel >= KB || (null !== jB.side ? nB(jB.side) : jB.isOnMiddle && IB())
        },
        onPointerCancel: () => {
          uB.current = null
        },
        children: [sB.map(((BB, jB) => {
          const zB = BB.sign > 0;
          return (0, MB.jsxs)("g", {
            children: [(0, MB.jsx)("line", {
              x1: rB,
              y1: rB,
              x2: BB.endX,
              y2: BB.endY,
              stroke: BB.colour,
              strokeOpacity: zB ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, MB.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": jB,
              cx: BB.endX,
              cy: BB.endY,
              r: zB ? lB : lB - 1,
              fill: BB.colour,
              fillOpacity: zB ? 1 : .3,
              stroke: BB.colour,
              strokeWidth: zB ? 0 : 1.5,
              children: (0, MB.jsx)("title", {
                children: `${NB("View from")} ${zB?"+":"\u2212"}${BB.name}`
              })
            }), zB && (0, MB.jsx)("text", {
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
          }, `${zB?"+":"-"}${BB.name}`)
        })), (0, MB.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: rB,
          cy: rB,
          r: wB,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, MB.jsx)("title", {
            children: NB("View from the opposite side")
          })
        })]
      })
    }

    function bB(BB) {
      var jB, zB, QB;
      const {
        chunkGridOrigin: nB,
        camera: dB
      } = BB;
      if (null === nB) return;
      const IB = [dB.position.x, dB.position.y, dB.position.z],
        NB = [0, 2].map((BB => Math.floor((IB[BB] + nB[BB]) / JB.e.ZJ))),
        uB = BB.chunkGridCentre;
      if (null !== uB && uB.every(((BB, jB) => BB === NB[jB]))) return;
      const pB = null === (jB = null === (zB = BB.chunkGrid) || void 0 === zB ? void 0 : zB.isVisible) || void 0 === jB || jB;
      null === (QB = BB.chunkGrid) || void 0 === QB || QB.dispose();
      const [sB, mB] = [0, 2].map(((BB, jB) => {
        const zB = [];
        for (let QB = NB[jB] - VB; QB <= NB[jB] + VB + 1; QB++) zB.push(QB * JB.e.ZJ - nB[BB]);
        return zB
      })), yB = -nB[1], kB = [];
      for (const UB of mB) kB.push([new aB.KJ(sB[0], yB, UB), new aB.KJ(sB[sB.length - 1], yB, UB)]);
      for (const UB of sB) kB.push([new aB.KJ(UB, yB, mB[0]), new aB.KJ(UB, yB, mB[mB.length - 1])]);
      const GB = (0, rB.c)("Heatmap3DChunkGrid", {
        lines: kB
      }, BB.ny);
      GB.color = new UB.Color3(.45, .6, .78), GB.Ny = !1, GB.isVisible = pB, BB.chunkGrid = GB, BB.chunkGridCentre = NB, BB.needsRender = !0
    }

    function vB(BB, jB, zB, QB) {
      BB.i5("matrix", function(BB, jB) {
        const zB = new Float32Array(16 * jB);
        for (let QB = 0; QB < jB; QB++) {
          const jB = 16 * QB;
          zB[jB] = 1, zB[jB + 5] = 1, zB[jB + 10] = 1, zB[jB + 12] = BB[3 * QB], zB[jB + 13] = BB[3 * QB + 1], zB[jB + 14] = BB[3 * QB + 2], zB[jB + 15] = 1
        }
        return zB
      }(jB, QB), 16, !0), BB.i5("color", zB, 4, !0), BB.isVisible = QB > 0
    }

    function RB(BB) {
      const {
        camera: jB,
        translucent: zB
      } = BB, QB = [jB.position.x, jB.position.y, jB.position.z], nB = BB.translucentSortedFrom;
      if (null !== nB && Math.hypot(QB[0] - nB[0], QB[1] - nB[1], QB[2] - nB[2]) < YB) return;
      BB.translucentSortedFrom = QB;
      const dB = new Float64Array(zB.count),
        IB = new Uint32Array(zB.count);
      for (let UB = 0; UB < zB.count; UB++) {
        const BB = zB.fp[3 * UB] - QB[0],
          jB = zB.fp[3 * UB + 1] - QB[1],
          nB = zB.fp[3 * UB + 2] - QB[2];
        dB[UB] = BB * BB + jB * jB + nB * nB, IB[UB] = UB
      }
      IB.sort(((BB, jB) => dB[jB] - dB[BB]));
      const NB = new Float32Array(3 * zB.count),
        uB = new Float32Array(4 * zB.count);
      IB.forEach(((BB, jB) => {
        NB.set(zB.fp.subarray(3 * BB, 3 * BB + 3), 3 * jB), uB.set(zB.colours.subarray(4 * BB, 4 * BB + 4), 4 * jB)
      })), vB(BB.translucentCells, NB, uB, zB.count), BB.needsRender = !0
    }

    function OB(BB, jB) {
      const zB = (zB, QB, nB) => new aB.KJ(0 === zB ? BB[0] : jB[0], 0 === QB ? BB[1] : jB[1], 0 === nB ? BB[2] : jB[2]),
        QB = [];
      for (const nB of [0, 1])
        for (const BB of [0, 1]) QB.push([zB(0, nB, BB), zB(1, nB, BB)], [zB(nB, 0, BB), zB(nB, 1, BB)], [zB(nB, BB, 0), zB(nB, BB, 1)]);
      return QB
    }

    function Bj(BB) {
      return [Math.sin(BB.heading) * Math.cos(BB.pitch), -Math.sin(BB.pitch), Math.cos(BB.heading) * Math.cos(BB.pitch)]
    }

    function jj(BB) {
      return [Math.cos(BB), 0, -Math.sin(BB)]
    }

    function zj(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: AB,
        pitch: TB
      };
      const nB = [BB.max[0] - BB.min[0], BB.max[1] - BB.min[1], BB.max[2] - BB.min[2]],
        dB = Bj(QB),
        IB = jj(QB.heading),
        NB = Uj(dB, IB),
        uB = Math.tan(zB / 2),
        UB = uB * jB;
      let aB = 1;
      for (const pB of [-nB[0] / 2, nB[0] / 2])
        for (const BB of [-nB[1] / 2, nB[1] / 2])
          for (const jB of [-nB[2] / 2, nB[2] / 2]) {
            const zB = [pB, BB, jB],
              QB = uj(zB, dB);
            aB = Math.max(aB, Math.abs(uj(zB, IB)) / UB - QB, Math.abs(uj(zB, NB)) / uB - QB)
          }
      return {
        position: Ij([BB.min[0] + nB[0] / 2, BB.min[1] + nB[1] / 2, BB.min[2] + nB[2] / 2], Nj(dB, -aB * PB)),
        heading: QB.heading,
        pitch: QB.pitch
      }
    }

    function Qj(BB, jB, zB) {
      const QB = dj(BB),
        nB = dj(zB),
        dB = Ij(BB.position, Nj(jB, -1)),
        IB = [0, 1, 2].reduce(((BB, jB) => Ij(BB, Nj(nB[jB], uj(dB, QB[jB])))), [0, 0, 0]);
      return {
        position: Ij(jB, IB),
        heading: zB.heading,
        pitch: zB.pitch
      }
    }

    function nj(BB) {
      return Nj(Ij(BB.min, BB.max), .5)
    }

    function dj(BB) {
      const jB = Bj(BB),
        zB = jj(BB.heading);
      return [jB, zB, Uj(jB, zB)]
    }

    function Ij(BB, jB) {
      return [BB[0] + jB[0], BB[1] + jB[1], BB[2] + jB[2]]
    }

    function Nj(BB, jB) {
      return [BB[0] * jB, BB[1] * jB, BB[2] * jB]
    }

    function uj(BB, jB) {
      return BB[0] * jB[0] + BB[1] * jB[1] + BB[2] * jB[2]
    }

    function Uj(BB, jB) {
      return [BB[1] * jB[2] - BB[2] * jB[1], BB[2] * jB[0] - BB[0] * jB[2], BB[0] * jB[1] - BB[1] * jB[0]]
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);