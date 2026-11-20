export const id = 242;
export const ids = [242];
export const modules = {
  39578: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => wq
    });
    gq(6328);
    var Yq = gq(57),
      lq = gq(39585),
      Oq = gq(39833),
      mq = gq(39941),
      xq = gq(39988),
      Aq = gq(40003),
      cq = gq(37286),
      uq = gq(37131),
      Bq = gq(40155),
      Wq = gq(40205),
      Nq = (gq(40236), gq(1214)),
      aq = gq(190),
      Vq = gq(1183),
      dq = gq(24),
      jq = gq(2660),
      Hq = gq(1422),
      oq = gq(1025),
      Pq = gq(6320),
      Qq = gq(6336),
      yq = gq(4272),
      tq = gq(1070);
    const rq = 1.2,
      vq = .2,
      hq = .0066 * Math.PI / 180,
      nq = new Set(["Escape", "KeyG"]),
      bq = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      iq = "ArrowUp",
      Zq = new Set([...Object.keys(bq), iq, "ArrowDown"]),
      fq = 32,
      Mq = 1,
      Tq = 10,
      zq = "F4",
      Sq = "Period",
      pq = Math.PI / 2 - .001,
      Gq = Math.PI / 6,
      Lq = Math.PI / 6,
      Jq = 1.08,
      kq = [{
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
      Rq = 24,
      Uq = 7,
      Fq = 4,
      sq = .01,
      Xq = 4;

    function wq(qq) {
      let {
        heatmap: Eq,
        scale: gq,
        fullyOpaqueFrom: Mq,
        bounds: Gq,
        fitBounds: Lq,
        schematic: Jq,
        controls: kq,
        onStepTime: Rq,
        onShowAllTime: Uq,
        onTogglePlaying: Fq,
        getReadout: Xq = null
      } = qq;
      const {
        t: wq
      } = (0, Vq.v)(), {
        clientEscMenuOptions: OE
      } = (0, dq.j)(["clientEscMenuOptions"]), AE = (0, Yq.useRef)(null), cE = (0, Yq.useRef)(null), uE = (0, Yq.useRef)(null), BE = (0, jq.e)(AE), [WE, NE] = (0, Yq.useState)(!1), [aE, VE] = (0, Yq.useState)(!1), [dE, jE] = (0, Yq.useState)(!0), HE = (0, Yq.useRef)(!1), [oE, PE] = (0, Yq.useState)(!1), QE = aE || !dE && oE, [yE, tE] = (0, Yq.useState)(!1), [rE, vE] = (0, Yq.useState)(!0), [hE, nE] = (0, Yq.useState)(null), bE = Gq.min, [iE, ZE] = (0, Yq.useState)(bE);
      iE[0] === bE[0] && iE[1] === bE[1] && iE[2] === bE[2] || (ZE(bE), null !== hE && nE({
        ...hE,
        position: mE(hE.position, mE(iE, xE(bE, -1)))
      }));
      const fE = (0, Yq.useMemo)((() => function(qq) {
          return [qq.max[0] - qq.min[0] + 1, qq.max[1] - qq.min[1] + 1, qq.max[2] - qq.min[2] + 1]
        }(Gq)), [Gq]),
        ME = (0, Yq.useMemo)((() => function(qq, Eq) {
          const gq = [],
            Yq = [];
          for (const [lq, Oq] of Object.entries(qq.frequencies)) {
            const qq = Number(lq);
            for (const [lq, mq] of Object.entries(Oq)) {
              const Oq = Number(lq);
              for (const [lq, xq] of Object.entries(mq)) xq <= 0 || (gq.push(qq - Eq[0], Oq - Eq[1], Number(lq) - Eq[2]), Yq.push(xq))
            }
          }
          return {
            positions: Int32Array.from(gq),
            values: Float64Array.from(Yq),
            count: Yq.length
          }
        }(Eq, bE)), [Eq, bE]),
        TE = rq * OE.cameraFOV / 100,
        zE = BE.height > 0 ? BE.width / BE.height : 1,
        SE = (0, Yq.useMemo)((() => function(qq, Eq) {
          return {
            min: [qq.min[0] - Eq[0], qq.min[1] - Eq[1], qq.min[2] - Eq[2]],
            max: [qq.max[0] - Eq[0] + 1, qq.max[1] - Eq[1] + 1, qq.max[2] - Eq[2] + 1]
          }
        }(Lq, bE)), [Lq, bE]),
        pE = gE(SE, zE, TE),
        GE = null !== hE && void 0 !== hE ? hE : pE,
        LE = (0, Yq.useRef)({
          fittedView: pE,
          fieldOfView: TE,
          mouseSensitivity: OE.mouseSensitivity,
          canLock: dE
        });
      LE.current = {
        fittedView: pE,
        fieldOfView: TE,
        mouseSensitivity: OE.mouseSensitivity,
        canLock: dE
      };
      const JE = (0, Yq.useMemo)((() => {
          if (!QE) return null;
          const qq = (qq, gq, Yq) => {
              var lq, Oq, mq;
              return null !== (lq = null === (Oq = Eq.frequencies[qq + bE[0]]) || void 0 === Oq || null === (mq = Oq[gq + bE[1]]) || void 0 === mq ? void 0 : mq[Yq + bE[2]]) && void 0 !== lq ? lq : 0
            },
            Yq = function(qq, Eq, gq, Yq) {
              let lq = 0,
                Oq = 1 / 0;
              for (const Bq of [0, 1, 2]) {
                if (0 === Eq[Bq]) {
                  if (qq[Bq] < 0 || qq[Bq] > gq[Bq]) return null;
                  continue
                }
                const Yq = (0 - qq[Bq]) / Eq[Bq],
                  mq = (gq[Bq] - qq[Bq]) / Eq[Bq];
                lq = Math.max(lq, Math.min(Yq, mq)), Oq = Math.min(Oq, Math.max(Yq, mq))
              }
              if (lq > Oq) return null;
              const mq = [0, 1, 2].map((Yq => Math.min(gq[Yq] - 1, Math.max(0, Math.floor(qq[Yq] + Eq[Yq] * lq))))),
                xq = [0, 1, 2].map((qq => Math.sign(Eq[qq]))),
                Aq = [0, 1, 2].map((gq => {
                  if (0 === xq[gq]) return 1 / 0;
                  return ((xq[gq] > 0 ? mq[gq] + 1 : mq[gq]) - qq[gq]) / Eq[gq]
                })),
                cq = [0, 1, 2].map((qq => 0 === xq[qq] ? 1 / 0 : Math.abs(1 / Eq[qq])));
              let uq = null;
              for (;;) {
                const qq = Yq(mq[0], mq[1], mq[2]);
                if (qq >= 1) return mq;
                qq > 0 && (uq = [mq[0], mq[1], mq[2]]);
                const Eq = Aq[0] < Aq[1] ? Aq[0] < Aq[2] ? 0 : 2 : Aq[1] < Aq[2] ? 1 : 2;
                if (Aq[Eq] > Oq) return uq;
                if (mq[Eq] += xq[Eq], Aq[Eq] += cq[Eq], mq[Eq] < 0 || mq[Eq] >= gq[Eq]) return uq
              }
            }(GE.position, qE(GE), fE, ((Eq, Yq, lq) => (0, Pq.x)(qq(Eq, Yq, lq), gq, Mq)));
          return null === Yq ? null : {
            x: Yq[0] + bE[0],
            y: Yq[1] + bE[1],
            z: Yq[2] + bE[2],
            value: qq(Yq[0], Yq[1], Yq[2])
          }
        }), [QE, Eq, bE, GE, fE, gq, Mq]),
        {
          keyHandlers: kE
        } = (0, Qq.d)({
          isEnabled: QE,
          claimedKeyCodes: Zq,
          gW: qq => {
            nE((Eq => function(qq, Eq) {
              const gq = [Math.sin(qq.heading), 0, Math.cos(qq.heading)],
                Yq = mE(mE(xE(gq, Eq.forward), xE(EE(qq.heading), Eq.right)), [0, Eq.up, 0]);
              return {
                ...qq,
                position: mE(qq.position, Yq)
              }
            }(null !== Eq && void 0 !== Eq ? Eq : LE.current.fittedView, qq)))
          },
          onZoomChange: tE
        });
      (0, Yq.useEffect)((() => {
        const qq = cE.current;
        if (!qq) return;
        let Eq;
        try {
          Eq = function(qq, Eq) {
            const gq = new lq.b(qq, !0, {
                stencil: !1
              }, !0),
              Yq = new Oq.e(gq),
              [Nq, aq, Vq] = Pq.Q;
            Yq.clearColor = new cq.e(Nq / 255, aq / 255, Vq / 255, 1);
            const dq = new mq.c("Heatmap3DCamera", uq.Na.Zero(), Yq);
            dq.fov = Eq, dq.minZ = .05;
            const jq = new xq.d("Heatmap3DLight", new uq.Na(.4, 1, -.6), Yq);
            jq.diffuse = cq.Color3.White(), jq.groundColor = cq.Color3.Black(), jq.specular = cq.Color3.Black();
            const Hq = new Aq.StandardMaterial("Heatmap3DCellMaterial", Yq);
            Hq.diffuseColor = new cq.Color3(.4, .4, .4), Hq.emissiveColor = new cq.Color3(.62, .62, .62), Hq.specularColor = cq.Color3.Black();
            const oq = (0, Bq.d)("Heatmap3DCells", {
              size: 1
            }, Yq);
            oq.material = Hq, oq.yV = !1, oq.Wa = !0, oq.isVisible = !1;
            const Qq = (0, Bq.d)("Heatmap3DTranslucentCells", {
              size: 1
            }, Yq);
            Qq.material = Hq, Qq.hasVertexAlpha = !0, Qq.yV = !1, Qq.Wa = !0, Qq.isVisible = !1;
            const yq = new Aq.StandardMaterial("Heatmap3DSchematicMaterial", Yq);
            yq.diffuseColor = new cq.Color3(.6, .6, .6), yq.emissiveColor = new cq.Color3(.4, .4, .4), yq.specularColor = cq.Color3.Black();
            const tq = (0, Bq.d)("Heatmap3DSchematicBlocks", {
              size: 1
            }, Yq);
            tq.material = yq, tq.yV = !1, tq.Wa = !0, tq.isVisible = !1;
            const rq = (0, Wq.b)("Heatmap3DTarget", {
              lines: Dq([-.52, -.52, -.52], [.52, .52, .52])
            }, Yq);
            return rq.color = new cq.Color3(.06, .14, .23), rq.renderingGroupId = 1, rq.yV = !1, rq.isVisible = !1, {
              engine: gq,
              PV: Yq,
              camera: dq,
              cells: oq,
              translucentCells: Qq,
              translucent: {
                bu: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: tq,
              targetOutline: rq,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: Eq,
              needsRender: !0
            }
          }(qq, LE.current.fieldOfView)
        } catch (gq) {
          return console.error("Failed to start the 3D heatmap", gq), void NE(!0)
        }
        return uE.current = Eq, Eq.engine.runRenderLoop((() => {
          const qq = Eq.camera;
          qq.fov !== Eq.targetFieldOfView && (qq.fov += (Eq.targetFieldOfView - qq.fov) * (qq.fov > Eq.targetFieldOfView ? .3 : .2), Math.abs(Eq.targetFieldOfView - qq.fov) < 5e-4 && (qq.fov = Eq.targetFieldOfView), Eq.needsRender = !0), Eq.needsRender && (Eq.PV.render(), Eq.needsRender = !Eq.PV.isReady() || !Eq.engine.areAllEffectsReady())
        })), () => {
          uE.current = null, Eq.engine.dispose()
        }
      }), []), (0, Yq.useEffect)((() => {
        const qq = cE.current;
        if (!qq) return;
        const Eq = () => {
            HE.current = !1, VE(document.pointerLockElement === qq)
          },
          gq = () => {
            HE.current && (HE.current = !1, jE(!1))
          },
          Yq = Eq => {
            const gq = !LE.current.canLock && document.activeElement === qq && 0 !== (1 & Eq.buttons);
            if (document.pointerLockElement !== qq && !gq) return;
            const Yq = LE.current.mouseSensitivity * hq;
            nE((qq => function(qq, Eq, gq) {
              const Yq = 2 * Math.PI;
              return {
                ...qq,
                heading: ((qq.heading + Eq) % Yq + Yq) % Yq,
                pitch: Math.max(-pq, Math.min(pq, qq.pitch + gq))
              }
            }(null !== qq && void 0 !== qq ? qq : LE.current.fittedView, Eq.movementX * Yq, Eq.movementY * Yq)))
          };
        return document.addEventListener("pointerlockchange", Eq), document.addEventListener("pointerlockerror", gq), document.addEventListener("pointermove", Yq), () => {
          document.removeEventListener("pointerlockchange", Eq), document.removeEventListener("pointerlockerror", gq), document.removeEventListener("pointermove", Yq), document.pointerLockElement === qq && (0, yq.e)()
        }
      }), []), (0, Yq.useEffect)((() => {
        const qq = uE.current;
        null !== qq && 0 !== BE.width && 0 !== BE.height && (qq.engine.resize(), qq.needsRender = !0)
      }), [BE.width, BE.height]), (0, Yq.useEffect)((() => {
        const qq = uE.current;
        null !== qq && (qq.targetFieldOfView = TE * (yE ? vq : 1))
      }), [TE, yE]), (0, Yq.useEffect)((() => {
        const qq = uE.current;
        null !== qq && function(qq, Eq, gq, Yq) {
          const lq = [],
            Oq = [],
            mq = [],
            xq = [];
          for (let Aq = 0; Aq < Eq.count; Aq++) {
            const qq = Eq.values[Aq],
              cq = (0, Pq.x)(qq, gq, Yq);
            if (cq <= 0) continue;
            const [uq, Bq, Wq] = (0, Pq.q)((0, Pq.K)(qq, gq)), Nq = cq >= 1;
            (Nq ? lq : mq).push(Eq.positions[3 * Aq] + .5, Eq.positions[3 * Aq + 1] + .5, Eq.positions[3 * Aq + 2] + .5), (Nq ? Oq : xq).push(uq / 255, Bq / 255, Wq / 255, cq)
          }
          Iq(qq.cells, Float32Array.from(lq), Float32Array.from(Oq), Oq.length / 4), qq.translucent = {
            bu: Float32Array.from(mq),
            colours: Float32Array.from(xq),
            count: xq.length / 4
          }, qq.translucentSortedFrom = null, eq(qq), qq.needsRender = !0
        }(qq, ME, gq, Mq)
      }), [ME, gq, Mq]), (0, Yq.useEffect)((() => {
        const qq = uE.current;
        null !== qq && function(qq, Eq) {
          qq.chunkGridOrigin = Eq, qq.chunkGridCentre = null, Cq(qq)
        }(qq, Gq.min)
      }), [Gq]), (0, Yq.useEffect)((() => {
        const qq = uE.current;
        null !== qq && function(qq, Eq, gq) {
          const Yq = [],
            lq = [];
          if (null !== Eq) {
            const {
              positions: qq,
              colours: Oq,
              count: mq
            } = Eq.surface;
            for (let Eq = 0; Eq < mq; Eq++) {
              const mq = [qq[3 * Eq], qq[3 * Eq + 1], qq[3 * Eq + 2]];
              [0, 1, 2].every((qq => mq[qq] >= gq.min[qq] - fq && mq[qq] <= gq.max[qq] + fq)) && (Yq.push(mq[0] - gq.min[0] + .5, mq[1] - gq.min[1] + .5, mq[2] - gq.min[2] + .5), lq.push(Oq[3 * Eq] / 255, Oq[3 * Eq + 1] / 255, Oq[3 * Eq + 2] / 255, 1))
            }
          }
          Iq(qq.schematicBlocks, Float32Array.from(Yq), Float32Array.from(lq), lq.length / 4), qq.needsRender = !0
        }(qq, Jq, Gq)
      }), [Jq, Gq]), (0, Yq.useEffect)((() => {
        const qq = uE.current;
        null !== qq && null !== qq.chunkGrid && (qq.chunkGrid.isVisible = rE, qq.needsRender = !0)
      }), [rE, Gq]), (0, Yq.useEffect)((() => {
        const qq = uE.current;
        null !== qq && function(qq, Eq, gq) {
          const {
            camera: Yq
          } = qq;
          Yq.position.set(Eq.position[0], Eq.position[1], Eq.position[2]), Yq.rotation.set(Eq.pitch, Eq.heading, 0);
          const lq = (Tq + 1) * aq.c.Oa * Math.sqrt(3);
          Yq.maxZ = Math.max(lq, Math.hypot(...mE(Eq.position, xE(lE({
            min: [0, 0, 0],
            max: gq
          }), -1))) + 2 * Math.hypot(...gq)), Cq(qq), eq(qq), qq.needsRender = !0
        }(qq, GE, fE)
      }), [GE, fE]), (0, Yq.useEffect)((() => {
        const qq = uE.current;
        null !== qq && (qq.targetOutline.isVisible = null !== JE, null !== JE && qq.targetOutline.position.set(JE.x - bE[0] + .5, JE.y - bE[1] + .5, JE.z - bE[2] + .5), qq.needsRender = !0)
      }), [JE, bE]);
      return (0, tq.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: AE,
        children: [(0, tq.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: cE,
          style: {
            width: `${BE.width}px`,
            height: `${BE.height}px`
          },
          tabIndex: 0,
          "aria-label": wq("3D heatmap"),
          onClick: () => {
            const qq = cE.current;
            if (null === qq) return;
            if (qq.focus({
                preventScroll: !0
              }), aE || !dE) return;
            const Eq = qq.requestPointerLock();
            Eq instanceof Promise ? Eq.catch((qq => {
              qq instanceof DOMException && ("WrongDocumentError" === qq.name || "NotSupportedError" === qq.name) && jE(!1)
            })) : HE.current = !0
          },
          ...kE,
          onKeyDown: qq => {
            if (QE && nq.has(qq.code)) return qq.preventDefault(), void(() => {
              const qq = cE.current;
              null !== qq && document.pointerLockElement === qq ? (0, yq.e)() : null === qq || void 0 === qq || qq.blur()
            })();
            const Eq = bq[qq.code];
            return QE && void 0 !== Eq ? (qq.preventDefault(), void Rq(Eq)) : QE && (0, Qq.b)("replayPlayPause", qq.code) && !(0, Qq.b)("Zoom", qq.code) ? (qq.preventDefault(), void(qq.repeat || Fq())) : QE && qq.code === iq ? (qq.preventDefault(), void Uq()) : QE && qq.code === Sq ? (qq.preventDefault(), void nE(null)) : QE && qq.code === zq ? (qq.preventDefault(), void vE((qq => !qq))) : void kE.onKeyDown(qq)
          },
          onFocus: () => {
            PE(!0)
          },
          onBlur: () => {
            PE(!1), kE.onBlur()
          }
        }), WE && (0, tq.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: wq("3D view isn't available in this browser.")
        }), QE && (0, tq.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, tq.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: GE.position.map(((qq, Eq) => (qq + bE[Eq]).toFixed(2))).join(" ")
        }), rE && (0, tq.jsx)(Kq, {
          heading: GE.heading,
          pitch: GE.pitch,
          onViewFrom: qq => {
            const Eq = xE(qq, -1),
              gq = 0 === Eq[1] ? {
                heading: Math.atan2(Eq[0], Eq[2]),
                pitch: 0
              } : {
                heading: GE.heading,
                pitch: Eq[1] < 0 ? pq : -pq
              };
            nE(gE(SE, zE, TE, gq))
          },
          onTurn: (qq, Eq) => {
            nE((gq => function(qq, Eq, gq, Yq) {
              return YE(qq, Eq, {
                heading: qq.heading + gq * sq,
                pitch: Math.max(-pq, Math.min(pq, qq.pitch + Yq * sq))
              })
            }(null !== gq && void 0 !== gq ? gq : LE.current.fittedView, lE(SE), qq, Eq)))
          },
          onFlip: () => {
            nE((qq => function(qq, Eq) {
              return YE(qq, Eq, {
                heading: qq.heading + Math.PI,
                pitch: -qq.pitch
              })
            }(null !== qq && void 0 !== qq ? qq : LE.current.fittedView, lE(SE))))
          }
        }), null !== JE && (0, tq.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === Xq ? wq("studio:heatmapBlockReadout", {
            x: JE.x,
            y: JE.y,
            z: JE.z,
            count: (0, Nq.S)(JE.value)
          }) : Xq(JE.x, JE.y, JE.z, JE.value)
        }), (0, tq.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [kq, (0, tq.jsx)(Hq.Q, {
            active: null === hE,
            onClick: () => {
              nE(null)
            },
            children: (0, tq.jsx)(oq.d, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function Kq(qq) {
      let {
        heading: Eq,
        pitch: gq,
        onViewFrom: lq,
        onTurn: Oq,
        onFlip: mq
      } = qq;
      const {
        t: xq
      } = (0, Vq.v)(), Aq = (0, Yq.useRef)(null), cq = qE({
        heading: Eq,
        pitch: gq
      }), uq = EE(Eq), Bq = cE(cq, uq), Wq = Rq + Uq + 2, Nq = kq.flatMap((qq => [1, -1].map((Eq => {
        const gq = xE(qq.direction, Eq);
        return {
          ...qq,
          sign: Eq,
          direction: gq,
          endX: Wq + AE(gq, uq) * Rq,
          endY: Wq - AE(gq, Bq) * Rq,
          depth: AE(gq, cq)
        }
      })))).sort(((qq, Eq) => Eq.depth - qq.depth));
      return (0, tq.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * Wq,
        height: 2 * Wq,
        "aria-hidden": !0,
        onPointerDown: qq => {
          var Eq, gq;
          qq.currentTarget.setPointerCapture(qq.pointerId);
          const Yq = qq.target,
            lq = Yq.getAttribute("data-end");
          Aq.current = {
            pointerId: qq.pointerId,
            x: qq.clientX,
            y: qq.clientY,
            travel: 0,
            side: null === lq ? null : null !== (Eq = null === (gq = Nq[Number(lq)]) || void 0 === gq ? void 0 : gq.direction) && void 0 !== Eq ? Eq : null,
            isOnMiddle: Yq.hasAttribute("data-middle")
          }
        },
        onPointerMove: qq => {
          const Eq = Aq.current;
          if (null === Eq || Eq.pointerId !== qq.pointerId) return;
          const gq = qq.clientX - Eq.x,
            Yq = qq.clientY - Eq.y;
          Eq.x = qq.clientX, Eq.y = qq.clientY, Eq.travel += Math.abs(gq) + Math.abs(Yq), Eq.travel >= Xq && Oq(gq, Yq)
        },
        onPointerUp: qq => {
          const Eq = Aq.current;
          Aq.current = null, null === Eq || Eq.pointerId !== qq.pointerId || Eq.travel >= Xq || (null !== Eq.side ? lq(Eq.side) : Eq.isOnMiddle && mq())
        },
        onPointerCancel: () => {
          Aq.current = null
        },
        children: [Nq.map(((qq, Eq) => {
          const gq = qq.sign > 0;
          return (0, tq.jsxs)("g", {
            children: [(0, tq.jsx)("line", {
              x1: Wq,
              y1: Wq,
              x2: qq.endX,
              y2: qq.endY,
              stroke: qq.colour,
              strokeOpacity: gq ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, tq.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": Eq,
              cx: qq.endX,
              cy: qq.endY,
              r: gq ? Uq : Uq - 1,
              fill: qq.colour,
              fillOpacity: gq ? 1 : .3,
              stroke: qq.colour,
              strokeWidth: gq ? 0 : 1.5,
              children: (0, tq.jsx)("title", {
                children: `${xq("View from")} ${gq?"+":"\u2212"}${qq.name}`
              })
            }), gq && (0, tq.jsx)("text", {
              pointerEvents: "none",
              x: qq.endX,
              y: qq.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: qq.name
            })]
          }, `${gq?"+":"-"}${qq.name}`)
        })), (0, tq.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: Wq,
          cy: Wq,
          r: Fq,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, tq.jsx)("title", {
            children: xq("View from the opposite side")
          })
        })]
      })
    }

    function Cq(qq) {
      var Eq, gq, Yq;
      const {
        chunkGridOrigin: lq,
        camera: Oq
      } = qq;
      if (null === lq) return;
      const mq = [Oq.position.x, Oq.position.y, Oq.position.z],
        xq = [0, 2].map((qq => Math.floor((mq[qq] + lq[qq]) / aq.c.Oa))),
        Aq = qq.chunkGridCentre;
      if (null !== Aq && Aq.every(((qq, Eq) => qq === xq[Eq]))) return;
      const Bq = null === (Eq = null === (gq = qq.chunkGrid) || void 0 === gq ? void 0 : gq.isVisible) || void 0 === Eq || Eq;
      null === (Yq = qq.chunkGrid) || void 0 === Yq || Yq.dispose();
      const [Nq, Vq] = [0, 2].map(((qq, Eq) => {
        const gq = [];
        for (let Yq = xq[Eq] - Tq; Yq <= xq[Eq] + Tq + 1; Yq++) gq.push(Yq * aq.c.Oa - lq[qq]);
        return gq
      })), dq = -lq[1], jq = [];
      for (const cq of Vq) jq.push([new uq.Na(Nq[0], dq, cq), new uq.Na(Nq[Nq.length - 1], dq, cq)]);
      for (const cq of Nq) jq.push([new uq.Na(cq, dq, Vq[0]), new uq.Na(cq, dq, Vq[Vq.length - 1])]);
      const Hq = (0, Wq.b)("Heatmap3DChunkGrid", {
        lines: jq
      }, qq.PV);
      Hq.color = new cq.Color3(.45, .6, .78), Hq.yV = !1, Hq.isVisible = Bq, qq.chunkGrid = Hq, qq.chunkGridCentre = xq, qq.needsRender = !0
    }

    function Iq(qq, Eq, gq, Yq) {
      qq.cqq("matrix", function(qq, Eq) {
        const gq = new Float32Array(16 * Eq);
        for (let Yq = 0; Yq < Eq; Yq++) {
          const Eq = 16 * Yq;
          gq[Eq] = 1, gq[Eq + 5] = 1, gq[Eq + 10] = 1, gq[Eq + 12] = qq[3 * Yq], gq[Eq + 13] = qq[3 * Yq + 1], gq[Eq + 14] = qq[3 * Yq + 2], gq[Eq + 15] = 1
        }
        return gq
      }(Eq, Yq), 16, !0), qq.cqq("color", gq, 4, !0), qq.isVisible = Yq > 0
    }

    function eq(qq) {
      const {
        camera: Eq,
        translucent: gq
      } = qq, Yq = [Eq.position.x, Eq.position.y, Eq.position.z], lq = qq.translucentSortedFrom;
      if (null !== lq && Math.hypot(Yq[0] - lq[0], Yq[1] - lq[1], Yq[2] - lq[2]) < Mq) return;
      qq.translucentSortedFrom = Yq;
      const Oq = new Float64Array(gq.count),
        mq = new Uint32Array(gq.count);
      for (let cq = 0; cq < gq.count; cq++) {
        const qq = gq.bu[3 * cq] - Yq[0],
          Eq = gq.bu[3 * cq + 1] - Yq[1],
          lq = gq.bu[3 * cq + 2] - Yq[2];
        Oq[cq] = qq * qq + Eq * Eq + lq * lq, mq[cq] = cq
      }
      mq.sort(((qq, Eq) => Oq[Eq] - Oq[qq]));
      const xq = new Float32Array(3 * gq.count),
        Aq = new Float32Array(4 * gq.count);
      mq.forEach(((qq, Eq) => {
        xq.set(gq.bu.subarray(3 * qq, 3 * qq + 3), 3 * Eq), Aq.set(gq.colours.subarray(4 * qq, 4 * qq + 4), 4 * Eq)
      })), Iq(qq.translucentCells, xq, Aq, gq.count), qq.needsRender = !0
    }

    function Dq(qq, Eq) {
      const gq = (gq, Yq, lq) => new uq.Na(0 === gq ? qq[0] : Eq[0], 0 === Yq ? qq[1] : Eq[1], 0 === lq ? qq[2] : Eq[2]),
        Yq = [];
      for (const lq of [0, 1])
        for (const qq of [0, 1]) Yq.push([gq(0, lq, qq), gq(1, lq, qq)], [gq(lq, 0, qq), gq(lq, 1, qq)], [gq(lq, qq, 0), gq(lq, qq, 1)]);
      return Yq
    }

    function qE(qq) {
      return [Math.sin(qq.heading) * Math.cos(qq.pitch), -Math.sin(qq.pitch), Math.cos(qq.heading) * Math.cos(qq.pitch)]
    }

    function EE(qq) {
      return [Math.cos(qq), 0, -Math.sin(qq)]
    }

    function gE(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: Gq,
        pitch: Lq
      };
      const lq = [qq.max[0] - qq.min[0], qq.max[1] - qq.min[1], qq.max[2] - qq.min[2]],
        Oq = qE(Yq),
        mq = EE(Yq.heading),
        xq = cE(Oq, mq),
        Aq = Math.tan(gq / 2),
        cq = Aq * Eq;
      let uq = 1;
      for (const Bq of [-lq[0] / 2, lq[0] / 2])
        for (const qq of [-lq[1] / 2, lq[1] / 2])
          for (const Eq of [-lq[2] / 2, lq[2] / 2]) {
            const gq = [Bq, qq, Eq],
              Yq = AE(gq, Oq);
            uq = Math.max(uq, Math.abs(AE(gq, mq)) / cq - Yq, Math.abs(AE(gq, xq)) / Aq - Yq)
          }
      return {
        position: mE([qq.min[0] + lq[0] / 2, qq.min[1] + lq[1] / 2, qq.min[2] + lq[2] / 2], xE(Oq, -uq * Jq)),
        heading: Yq.heading,
        pitch: Yq.pitch
      }
    }

    function YE(qq, Eq, gq) {
      const Yq = OE(qq),
        lq = OE(gq),
        Oq = mE(qq.position, xE(Eq, -1)),
        mq = [0, 1, 2].reduce(((qq, Eq) => mE(qq, xE(lq[Eq], AE(Oq, Yq[Eq])))), [0, 0, 0]);
      return {
        position: mE(Eq, mq),
        heading: gq.heading,
        pitch: gq.pitch
      }
    }

    function lE(qq) {
      return xE(mE(qq.min, qq.max), .5)
    }

    function OE(qq) {
      const Eq = qE(qq),
        gq = EE(qq.heading);
      return [Eq, gq, cE(Eq, gq)]
    }

    function mE(qq, Eq) {
      return [qq[0] + Eq[0], qq[1] + Eq[1], qq[2] + Eq[2]]
    }

    function xE(qq, Eq) {
      return [qq[0] * Eq, qq[1] * Eq, qq[2] * Eq]
    }

    function AE(qq, Eq) {
      return qq[0] * Eq[0] + qq[1] * Eq[1] + qq[2] * Eq[2]
    }

    function cE(qq, Eq) {
      return [qq[1] * Eq[2] - qq[2] * Eq[1], qq[2] * Eq[0] - qq[0] * Eq[2], qq[0] * Eq[1] - qq[1] * Eq[0]]
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);