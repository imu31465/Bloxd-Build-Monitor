export const id = 246;
export const ids = [246];
export const modules = {
  39374: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      default: () => gk
    });
    ik(6310);
    var Dk = ik(60),
      fk = ik(39377),
      Sk = ik(39651),
      bk = ik(39774),
      rk = ik(39813),
      Pk = ik(39829),
      mk = ik(36868),
      Mk = ik(36690),
      Kk = ik(39995),
      xk = ik(40029),
      nk = (ik(40055), ik(1207)),
      Uk = ik(189),
      Hk = ik(1172),
      wk = ik(22),
      lk = ik(2683),
      pk = ik(1410),
      yk = ik(1033),
      Yk = ik(6306),
      Lk = ik(6316),
      Ck = ik(4394),
      Ak = ik(1066);
    const jk = 1.2,
      sk = .2,
      dk = .0066 * Math.PI / 180,
      Vk = new Set(["Escape", "KeyG"]),
      Fk = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      uk = "ArrowUp",
      qk = new Set([...Object.keys(Fk), uk, "ArrowDown"]),
      Ik = 32,
      zk = 1,
      Qk = 10,
      vk = "F4",
      Ek = "Period",
      hk = Math.PI / 2 - .001,
      ak = Math.PI / 6,
      Wk = Math.PI / 6,
      tk = 1.08,
      Xk = [{
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
      Bk = 24,
      ck = 7,
      Tk = 4,
      Zk = .01,
      Ok = 4;

    function gk(kk) {
      let {
        heatmap: ek,
        scale: ik,
        fullyOpaqueFrom: zk,
        bounds: ak,
        fitBounds: Wk,
        schematic: tk,
        controls: Xk,
        onStepTime: Bk,
        onShowAllTime: ck,
        onTogglePlaying: Tk,
        getReadout: Ok = null
      } = kk;
      const {
        t: gk
      } = (0, Hk.D)(), {
        clientEscMenuOptions: be
      } = (0, wk.n)(["clientEscMenuOptions"]), me = (0, Dk.useRef)(null), Me = (0, Dk.useRef)(null), Ke = (0, Dk.useRef)(null), xe = (0, lk.c)(me), [ne, Ue] = (0, Dk.useState)(!1), [He, we] = (0, Dk.useState)(!1), [le, pe] = (0, Dk.useState)(!0), ye = (0, Dk.useRef)(!1), [Ye, Le] = (0, Dk.useState)(!1), Ce = He || !le && Ye, [Ae, je] = (0, Dk.useState)(!1), [se, de] = (0, Dk.useState)(!0), [Ve, Fe] = (0, Dk.useState)(null), ue = ak.min, [qe, Ie] = (0, Dk.useState)(ue);
      qe[0] === ue[0] && qe[1] === ue[1] && qe[2] === ue[2] || (Ie(ue), null !== Ve && Fe({
        ...Ve,
        position: re(Ve.position, re(qe, Pe(ue, -1)))
      }));
      const ze = (0, Dk.useMemo)((() => function(kk) {
          return [kk.max[0] - kk.min[0] + 1, kk.max[1] - kk.min[1] + 1, kk.max[2] - kk.min[2] + 1]
        }(ak)), [ak]),
        Qe = (0, Dk.useMemo)((() => function(kk, ek) {
          const ik = [],
            Dk = [];
          for (const [fk, Sk] of Object.entries(kk.frequencies)) {
            const kk = Number(fk);
            for (const [fk, bk] of Object.entries(Sk)) {
              const Sk = Number(fk);
              for (const [fk, rk] of Object.entries(bk)) rk <= 0 || (ik.push(kk - ek[0], Sk - ek[1], Number(fk) - ek[2]), Dk.push(rk))
            }
          }
          return {
            positions: Int32Array.from(ik),
            values: Float64Array.from(Dk),
            count: Dk.length
          }
        }(ek, ue)), [ek, ue]),
        ve = jk * be.cameraFOV / 100,
        Ee = xe.height > 0 ? xe.width / xe.height : 1,
        he = (0, Dk.useMemo)((() => function(kk, ek) {
          return {
            min: [kk.min[0] - ek[0], kk.min[1] - ek[1], kk.min[2] - ek[2]],
            max: [kk.max[0] - ek[0] + 1, kk.max[1] - ek[1] + 1, kk.max[2] - ek[2] + 1]
          }
        }(Wk, ue)), [Wk, ue]),
        ae = De(he, Ee, ve),
        We = null !== Ve && void 0 !== Ve ? Ve : ae,
        te = (0, Dk.useRef)({
          fittedView: ae,
          fieldOfView: ve,
          mouseSensitivity: be.mouseSensitivity,
          canLock: le
        });
      te.current = {
        fittedView: ae,
        fieldOfView: ve,
        mouseSensitivity: be.mouseSensitivity,
        canLock: le
      };
      const Xe = (0, Dk.useMemo)((() => {
          if (!Ce) return null;
          const kk = (kk, ik, Dk) => {
              var fk, Sk, bk;
              return null !== (fk = null === (Sk = ek.frequencies[kk + ue[0]]) || void 0 === Sk || null === (bk = Sk[ik + ue[1]]) || void 0 === bk ? void 0 : bk[Dk + ue[2]]) && void 0 !== fk ? fk : 0
            },
            Dk = function(kk, ek, ik, Dk) {
              let fk = 0,
                Sk = 1 / 0;
              for (const Kk of [0, 1, 2]) {
                if (0 === ek[Kk]) {
                  if (kk[Kk] < 0 || kk[Kk] > ik[Kk]) return null;
                  continue
                }
                const Dk = (0 - kk[Kk]) / ek[Kk],
                  bk = (ik[Kk] - kk[Kk]) / ek[Kk];
                fk = Math.max(fk, Math.min(Dk, bk)), Sk = Math.min(Sk, Math.max(Dk, bk))
              }
              if (fk > Sk) return null;
              const bk = [0, 1, 2].map((Dk => Math.min(ik[Dk] - 1, Math.max(0, Math.floor(kk[Dk] + ek[Dk] * fk))))),
                rk = [0, 1, 2].map((kk => Math.sign(ek[kk]))),
                Pk = [0, 1, 2].map((ik => {
                  if (0 === rk[ik]) return 1 / 0;
                  return ((rk[ik] > 0 ? bk[ik] + 1 : bk[ik]) - kk[ik]) / ek[ik]
                })),
                mk = [0, 1, 2].map((kk => 0 === rk[kk] ? 1 / 0 : Math.abs(1 / ek[kk])));
              let Mk = null;
              for (;;) {
                const kk = Dk(bk[0], bk[1], bk[2]);
                if (kk >= 1) return bk;
                kk > 0 && (Mk = [bk[0], bk[1], bk[2]]);
                const ek = Pk[0] < Pk[1] ? Pk[0] < Pk[2] ? 0 : 2 : Pk[1] < Pk[2] ? 1 : 2;
                if (Pk[ek] > Sk) return Mk;
                if (bk[ek] += rk[ek], Pk[ek] += mk[ek], bk[ek] < 0 || bk[ek] >= ik[ek]) return Mk
              }
            }(We.position, ee(We), ze, ((ek, Dk, fk) => (0, Yk.z)(kk(ek, Dk, fk), ik, zk)));
          return null === Dk ? null : {
            x: Dk[0] + ue[0],
            y: Dk[1] + ue[1],
            z: Dk[2] + ue[2],
            value: kk(Dk[0], Dk[1], Dk[2])
          }
        }), [Ce, ek, ue, We, ze, ik, zk]),
        {
          keyHandlers: Be
        } = (0, Lk.e)({
          isEnabled: Ce,
          claimedKeyCodes: qk,
          qx: kk => {
            Fe((ek => function(kk, ek) {
              const ik = [Math.sin(kk.heading), 0, Math.cos(kk.heading)],
                Dk = re(re(Pe(ik, ek.forward), Pe(ie(kk.heading), ek.right)), [0, ek.up, 0]);
              return {
                ...kk,
                position: re(kk.position, Dk)
              }
            }(null !== ek && void 0 !== ek ? ek : te.current.fittedView, kk)))
          },
          onZoomChange: je
        });
      (0, Dk.useEffect)((() => {
        const kk = Me.current;
        if (!kk) return;
        let ek;
        try {
          ek = function(kk, ek) {
            const ik = new fk.d(kk, !0, {
                stencil: !1
              }, !0),
              Dk = new Sk.d(ik),
              [nk, Uk, Hk] = Yk.R;
            Dk.clearColor = new mk.e(nk / 255, Uk / 255, Hk / 255, 1);
            const wk = new bk.d("Heatmap3DCamera", Mk.eH.Zero(), Dk);
            wk.fov = ek, wk.minZ = .05;
            const lk = new rk.c("Heatmap3DLight", new Mk.eH(.4, 1, -.6), Dk);
            lk.diffuse = mk.Color3.White(), lk.groundColor = mk.Color3.Black(), lk.specular = mk.Color3.Black();
            const pk = new Pk.StandardMaterial("Heatmap3DCellMaterial", Dk);
            pk.diffuseColor = new mk.Color3(.4, .4, .4), pk.emissiveColor = new mk.Color3(.62, .62, .62), pk.specularColor = mk.Color3.Black();
            const yk = (0, Kk.e)("Heatmap3DCells", {
              size: 1
            }, Dk);
            yk.material = pk, yk.Pw = !1, yk.kH = !0, yk.isVisible = !1;
            const Lk = (0, Kk.e)("Heatmap3DTranslucentCells", {
              size: 1
            }, Dk);
            Lk.material = pk, Lk.hasVertexAlpha = !0, Lk.Pw = !1, Lk.kH = !0, Lk.isVisible = !1;
            const Ck = new Pk.StandardMaterial("Heatmap3DSchematicMaterial", Dk);
            Ck.diffuseColor = new mk.Color3(.6, .6, .6), Ck.emissiveColor = new mk.Color3(.4, .4, .4), Ck.specularColor = mk.Color3.Black();
            const Ak = (0, Kk.e)("Heatmap3DSchematicBlocks", {
              size: 1
            }, Dk);
            Ak.material = Ck, Ak.Pw = !1, Ak.kH = !0, Ak.isVisible = !1;
            const jk = (0, xk.b)("Heatmap3DTarget", {
              lines: ke([-.52, -.52, -.52], [.52, .52, .52])
            }, Dk);
            return jk.color = new mk.Color3(.06, .14, .23), jk.renderingGroupId = 1, jk.Pw = !1, jk.isVisible = !1, {
              engine: ik,
              bw: Dk,
              camera: wk,
              cells: yk,
              translucentCells: Lk,
              translucent: {
                ci: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: Ak,
              targetOutline: jk,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: ek,
              needsRender: !0
            }
          }(kk, te.current.fieldOfView)
        } catch (ik) {
          return console.error("Failed to start the 3D heatmap", ik), void Ue(!0)
        }
        return Ke.current = ek, ek.engine.runRenderLoop((() => {
          const kk = ek.camera;
          kk.fov !== ek.targetFieldOfView && (kk.fov += (ek.targetFieldOfView - kk.fov) * (kk.fov > ek.targetFieldOfView ? .3 : .2), Math.abs(ek.targetFieldOfView - kk.fov) < 5e-4 && (kk.fov = ek.targetFieldOfView), ek.needsRender = !0), ek.needsRender && (ek.bw.render(), ek.needsRender = !ek.bw.isReady() || !ek.engine.areAllEffectsReady())
        })), () => {
          Ke.current = null, ek.engine.dispose()
        }
      }), []), (0, Dk.useEffect)((() => {
        const kk = Me.current;
        if (!kk) return;
        const ek = () => {
            ye.current = !1, we(document.pointerLockElement === kk)
          },
          ik = () => {
            ye.current && (ye.current = !1, pe(!1))
          },
          Dk = ek => {
            const ik = !te.current.canLock && document.activeElement === kk && 0 !== (1 & ek.buttons);
            if (document.pointerLockElement !== kk && !ik) return;
            const Dk = te.current.mouseSensitivity * dk;
            Fe((kk => function(kk, ek, ik) {
              const Dk = 2 * Math.PI;
              return {
                ...kk,
                heading: ((kk.heading + ek) % Dk + Dk) % Dk,
                pitch: Math.max(-hk, Math.min(hk, kk.pitch + ik))
              }
            }(null !== kk && void 0 !== kk ? kk : te.current.fittedView, ek.movementX * Dk, ek.movementY * Dk)))
          };
        return document.addEventListener("pointerlockchange", ek), document.addEventListener("pointerlockerror", ik), document.addEventListener("pointermove", Dk), () => {
          document.removeEventListener("pointerlockchange", ek), document.removeEventListener("pointerlockerror", ik), document.removeEventListener("pointermove", Dk), document.pointerLockElement === kk && (0, Ck.d)()
        }
      }), []), (0, Dk.useEffect)((() => {
        const kk = Ke.current;
        null !== kk && 0 !== xe.width && 0 !== xe.height && (kk.engine.resize(), kk.needsRender = !0)
      }), [xe.width, xe.height]), (0, Dk.useEffect)((() => {
        const kk = Ke.current;
        null !== kk && (kk.targetFieldOfView = ve * (Ae ? sk : 1))
      }), [ve, Ae]), (0, Dk.useEffect)((() => {
        const kk = Ke.current;
        null !== kk && function(kk, ek, ik, Dk) {
          const fk = [],
            Sk = [],
            bk = [],
            rk = [];
          for (let Pk = 0; Pk < ek.count; Pk++) {
            const kk = ek.values[Pk],
              mk = (0, Yk.z)(kk, ik, Dk);
            if (mk <= 0) continue;
            const [Mk, Kk, xk] = (0, Yk.r)((0, Yk.K)(kk, ik)), nk = mk >= 1;
            (nk ? fk : bk).push(ek.positions[3 * Pk] + .5, ek.positions[3 * Pk + 1] + .5, ek.positions[3 * Pk + 2] + .5), (nk ? Sk : rk).push(Mk / 255, Kk / 255, xk / 255, mk)
          }
          Rk(kk.cells, Float32Array.from(fk), Float32Array.from(Sk), Sk.length / 4), kk.translucent = {
            ci: Float32Array.from(bk),
            colours: Float32Array.from(rk),
            count: rk.length / 4
          }, kk.translucentSortedFrom = null, Jk(kk), kk.needsRender = !0
        }(kk, Qe, ik, zk)
      }), [Qe, ik, zk]), (0, Dk.useEffect)((() => {
        const kk = Ke.current;
        null !== kk && function(kk, ek) {
          kk.chunkGridOrigin = ek, kk.chunkGridCentre = null, Nk(kk)
        }(kk, ak.min)
      }), [ak]), (0, Dk.useEffect)((() => {
        const kk = Ke.current;
        null !== kk && function(kk, ek, ik) {
          const Dk = [],
            fk = [];
          if (null !== ek) {
            const {
              positions: kk,
              colours: Sk,
              count: bk
            } = ek.surface;
            for (let ek = 0; ek < bk; ek++) {
              const bk = [kk[3 * ek], kk[3 * ek + 1], kk[3 * ek + 2]];
              [0, 1, 2].every((kk => bk[kk] >= ik.min[kk] - Ik && bk[kk] <= ik.max[kk] + Ik)) && (Dk.push(bk[0] - ik.min[0] + .5, bk[1] - ik.min[1] + .5, bk[2] - ik.min[2] + .5), fk.push(Sk[3 * ek] / 255, Sk[3 * ek + 1] / 255, Sk[3 * ek + 2] / 255, 1))
            }
          }
          Rk(kk.schematicBlocks, Float32Array.from(Dk), Float32Array.from(fk), fk.length / 4), kk.needsRender = !0
        }(kk, tk, ak)
      }), [tk, ak]), (0, Dk.useEffect)((() => {
        const kk = Ke.current;
        null !== kk && null !== kk.chunkGrid && (kk.chunkGrid.isVisible = se, kk.needsRender = !0)
      }), [se, ak]), (0, Dk.useEffect)((() => {
        const kk = Ke.current;
        null !== kk && function(kk, ek, ik) {
          const {
            camera: Dk
          } = kk;
          Dk.position.set(ek.position[0], ek.position[1], ek.position[2]), Dk.rotation.set(ek.pitch, ek.heading, 0);
          const fk = (Qk + 1) * Uk.g.oU * Math.sqrt(3);
          Dk.maxZ = Math.max(fk, Math.hypot(...re(ek.position, Pe(Se({
            min: [0, 0, 0],
            max: ik
          }), -1))) + 2 * Math.hypot(...ik)), Nk(kk), Jk(kk), kk.needsRender = !0
        }(kk, We, ze)
      }), [We, ze]), (0, Dk.useEffect)((() => {
        const kk = Ke.current;
        null !== kk && (kk.targetOutline.isVisible = null !== Xe, null !== Xe && kk.targetOutline.position.set(Xe.x - ue[0] + .5, Xe.y - ue[1] + .5, Xe.z - ue[2] + .5), kk.needsRender = !0)
      }), [Xe, ue]);
      return (0, Ak.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: me,
        children: [(0, Ak.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: Me,
          style: {
            width: `${xe.width}px`,
            height: `${xe.height}px`
          },
          tabIndex: 0,
          "aria-label": gk("3D heatmap"),
          onClick: () => {
            const kk = Me.current;
            if (null === kk) return;
            if (kk.focus({
                preventScroll: !0
              }), He || !le) return;
            const ek = kk.requestPointerLock();
            ek instanceof Promise ? ek.catch((kk => {
              kk instanceof DOMException && ("WrongDocumentError" === kk.name || "NotSupportedError" === kk.name) && pe(!1)
            })) : ye.current = !0
          },
          ...Be,
          onKeyDown: kk => {
            if (Ce && Vk.has(kk.code)) return kk.preventDefault(), void(() => {
              const kk = Me.current;
              null !== kk && document.pointerLockElement === kk ? (0, Ck.d)() : null === kk || void 0 === kk || kk.blur()
            })();
            const ek = Fk[kk.code];
            return Ce && void 0 !== ek ? (kk.preventDefault(), void Bk(ek)) : Ce && (0, Lk.b)("replayPlayPause", kk.code) && !(0, Lk.b)("Zoom", kk.code) ? (kk.preventDefault(), void(kk.repeat || Tk())) : Ce && kk.code === uk ? (kk.preventDefault(), void ck()) : Ce && kk.code === Ek ? (kk.preventDefault(), void Fe(null)) : Ce && kk.code === vk ? (kk.preventDefault(), void de((kk => !kk))) : void Be.onKeyDown(kk)
          },
          onFocus: () => {
            Le(!0)
          },
          onBlur: () => {
            Le(!1), Be.onBlur()
          }
        }), ne && (0, Ak.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: gk("3D view isn't available in this browser.")
        }), Ce && (0, Ak.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, Ak.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: We.position.map(((kk, ek) => (kk + ue[ek]).toFixed(2))).join(" ")
        }), se && (0, Ak.jsx)(Gk, {
          heading: We.heading,
          pitch: We.pitch,
          onViewFrom: kk => {
            const ek = Pe(kk, -1),
              ik = 0 === ek[1] ? {
                heading: Math.atan2(ek[0], ek[2]),
                pitch: 0
              } : {
                heading: We.heading,
                pitch: ek[1] < 0 ? hk : -hk
              };
            Fe(De(he, Ee, ve, ik))
          },
          onTurn: (kk, ek) => {
            Fe((ik => function(kk, ek, ik, Dk) {
              return fe(kk, ek, {
                heading: kk.heading + ik * Zk,
                pitch: Math.max(-hk, Math.min(hk, kk.pitch + Dk * Zk))
              })
            }(null !== ik && void 0 !== ik ? ik : te.current.fittedView, Se(he), kk, ek)))
          },
          onFlip: () => {
            Fe((kk => function(kk, ek) {
              return fe(kk, ek, {
                heading: kk.heading + Math.PI,
                pitch: -kk.pitch
              })
            }(null !== kk && void 0 !== kk ? kk : te.current.fittedView, Se(he))))
          }
        }), null !== Xe && (0, Ak.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === Ok ? gk("studio:heatmapBlockReadout", {
            x: Xe.x,
            y: Xe.y,
            z: Xe.z,
            count: (0, nk.Q)(Xe.value)
          }) : Ok(Xe.x, Xe.y, Xe.z, Xe.value)
        }), (0, Ak.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [Xk, (0, Ak.jsx)(pk.X, {
            active: null === Ve,
            onClick: () => {
              Fe(null)
            },
            children: (0, Ak.jsx)(yk.d, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function Gk(kk) {
      let {
        heading: ek,
        pitch: ik,
        onViewFrom: fk,
        onTurn: Sk,
        onFlip: bk
      } = kk;
      const {
        t: rk
      } = (0, Hk.D)(), Pk = (0, Dk.useRef)(null), mk = ee({
        heading: ek,
        pitch: ik
      }), Mk = ie(ek), Kk = Me(mk, Mk), xk = Bk + ck + 2, nk = Xk.flatMap((kk => [1, -1].map((ek => {
        const ik = Pe(kk.direction, ek);
        return {
          ...kk,
          sign: ek,
          direction: ik,
          endX: xk + me(ik, Mk) * Bk,
          endY: xk - me(ik, Kk) * Bk,
          depth: me(ik, mk)
        }
      })))).sort(((kk, ek) => ek.depth - kk.depth));
      return (0, Ak.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * xk,
        height: 2 * xk,
        "aria-hidden": !0,
        onPointerDown: kk => {
          var ek, ik;
          kk.currentTarget.setPointerCapture(kk.pointerId);
          const Dk = kk.target,
            fk = Dk.getAttribute("data-end");
          Pk.current = {
            pointerId: kk.pointerId,
            x: kk.clientX,
            y: kk.clientY,
            travel: 0,
            side: null === fk ? null : null !== (ek = null === (ik = nk[Number(fk)]) || void 0 === ik ? void 0 : ik.direction) && void 0 !== ek ? ek : null,
            isOnMiddle: Dk.hasAttribute("data-middle")
          }
        },
        onPointerMove: kk => {
          const ek = Pk.current;
          if (null === ek || ek.pointerId !== kk.pointerId) return;
          const ik = kk.clientX - ek.x,
            Dk = kk.clientY - ek.y;
          ek.x = kk.clientX, ek.y = kk.clientY, ek.travel += Math.abs(ik) + Math.abs(Dk), ek.travel >= Ok && Sk(ik, Dk)
        },
        onPointerUp: kk => {
          const ek = Pk.current;
          Pk.current = null, null === ek || ek.pointerId !== kk.pointerId || ek.travel >= Ok || (null !== ek.side ? fk(ek.side) : ek.isOnMiddle && bk())
        },
        onPointerCancel: () => {
          Pk.current = null
        },
        children: [nk.map(((kk, ek) => {
          const ik = kk.sign > 0;
          return (0, Ak.jsxs)("g", {
            children: [(0, Ak.jsx)("line", {
              x1: xk,
              y1: xk,
              x2: kk.endX,
              y2: kk.endY,
              stroke: kk.colour,
              strokeOpacity: ik ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, Ak.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": ek,
              cx: kk.endX,
              cy: kk.endY,
              r: ik ? ck : ck - 1,
              fill: kk.colour,
              fillOpacity: ik ? 1 : .3,
              stroke: kk.colour,
              strokeWidth: ik ? 0 : 1.5,
              children: (0, Ak.jsx)("title", {
                children: `${rk("View from")} ${ik?"+":"\u2212"}${kk.name}`
              })
            }), ik && (0, Ak.jsx)("text", {
              pointerEvents: "none",
              x: kk.endX,
              y: kk.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: kk.name
            })]
          }, `${ik?"+":"-"}${kk.name}`)
        })), (0, Ak.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: xk,
          cy: xk,
          r: Tk,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, Ak.jsx)("title", {
            children: rk("View from the opposite side")
          })
        })]
      })
    }

    function Nk(kk) {
      var ek, ik, Dk;
      const {
        chunkGridOrigin: fk,
        camera: Sk
      } = kk;
      if (null === fk) return;
      const bk = [Sk.position.x, Sk.position.y, Sk.position.z],
        rk = [0, 2].map((kk => Math.floor((bk[kk] + fk[kk]) / Uk.g.oU))),
        Pk = kk.chunkGridCentre;
      if (null !== Pk && Pk.every(((kk, ek) => kk === rk[ek]))) return;
      const Kk = null === (ek = null === (ik = kk.chunkGrid) || void 0 === ik ? void 0 : ik.isVisible) || void 0 === ek || ek;
      null === (Dk = kk.chunkGrid) || void 0 === Dk || Dk.dispose();
      const [nk, Hk] = [0, 2].map(((kk, ek) => {
        const ik = [];
        for (let Dk = rk[ek] - Qk; Dk <= rk[ek] + Qk + 1; Dk++) ik.push(Dk * Uk.g.oU - fk[kk]);
        return ik
      })), wk = -fk[1], lk = [];
      for (const mk of Hk) lk.push([new Mk.eH(nk[0], wk, mk), new Mk.eH(nk[nk.length - 1], wk, mk)]);
      for (const mk of nk) lk.push([new Mk.eH(mk, wk, Hk[0]), new Mk.eH(mk, wk, Hk[Hk.length - 1])]);
      const pk = (0, xk.b)("Heatmap3DChunkGrid", {
        lines: lk
      }, kk.bw);
      pk.color = new mk.Color3(.45, .6, .78), pk.Pw = !1, pk.isVisible = Kk, kk.chunkGrid = pk, kk.chunkGridCentre = rk, kk.needsRender = !0
    }

    function Rk(kk, ek, ik, Dk) {
      kk.i6("matrix", function(kk, ek) {
        const ik = new Float32Array(16 * ek);
        for (let Dk = 0; Dk < ek; Dk++) {
          const ek = 16 * Dk;
          ik[ek] = 1, ik[ek + 5] = 1, ik[ek + 10] = 1, ik[ek + 12] = kk[3 * Dk], ik[ek + 13] = kk[3 * Dk + 1], ik[ek + 14] = kk[3 * Dk + 2], ik[ek + 15] = 1
        }
        return ik
      }(ek, Dk), 16, !0), kk.i6("color", ik, 4, !0), kk.isVisible = Dk > 0
    }

    function Jk(kk) {
      const {
        camera: ek,
        translucent: ik
      } = kk, Dk = [ek.position.x, ek.position.y, ek.position.z], fk = kk.translucentSortedFrom;
      if (null !== fk && Math.hypot(Dk[0] - fk[0], Dk[1] - fk[1], Dk[2] - fk[2]) < zk) return;
      kk.translucentSortedFrom = Dk;
      const Sk = new Float64Array(ik.count),
        bk = new Uint32Array(ik.count);
      for (let mk = 0; mk < ik.count; mk++) {
        const kk = ik.ci[3 * mk] - Dk[0],
          ek = ik.ci[3 * mk + 1] - Dk[1],
          fk = ik.ci[3 * mk + 2] - Dk[2];
        Sk[mk] = kk * kk + ek * ek + fk * fk, bk[mk] = mk
      }
      bk.sort(((kk, ek) => Sk[ek] - Sk[kk]));
      const rk = new Float32Array(3 * ik.count),
        Pk = new Float32Array(4 * ik.count);
      bk.forEach(((kk, ek) => {
        rk.set(ik.ci.subarray(3 * kk, 3 * kk + 3), 3 * ek), Pk.set(ik.colours.subarray(4 * kk, 4 * kk + 4), 4 * ek)
      })), Rk(kk.translucentCells, rk, Pk, ik.count), kk.needsRender = !0
    }

    function ke(kk, ek) {
      const ik = (ik, Dk, fk) => new Mk.eH(0 === ik ? kk[0] : ek[0], 0 === Dk ? kk[1] : ek[1], 0 === fk ? kk[2] : ek[2]),
        Dk = [];
      for (const fk of [0, 1])
        for (const kk of [0, 1]) Dk.push([ik(0, fk, kk), ik(1, fk, kk)], [ik(fk, 0, kk), ik(fk, 1, kk)], [ik(fk, kk, 0), ik(fk, kk, 1)]);
      return Dk
    }

    function ee(kk) {
      return [Math.sin(kk.heading) * Math.cos(kk.pitch), -Math.sin(kk.pitch), Math.cos(kk.heading) * Math.cos(kk.pitch)]
    }

    function ie(kk) {
      return [Math.cos(kk), 0, -Math.sin(kk)]
    }

    function De(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: ak,
        pitch: Wk
      };
      const fk = [kk.max[0] - kk.min[0], kk.max[1] - kk.min[1], kk.max[2] - kk.min[2]],
        Sk = ee(Dk),
        bk = ie(Dk.heading),
        rk = Me(Sk, bk),
        Pk = Math.tan(ik / 2),
        mk = Pk * ek;
      let Mk = 1;
      for (const Kk of [-fk[0] / 2, fk[0] / 2])
        for (const kk of [-fk[1] / 2, fk[1] / 2])
          for (const ek of [-fk[2] / 2, fk[2] / 2]) {
            const ik = [Kk, kk, ek],
              Dk = me(ik, Sk);
            Mk = Math.max(Mk, Math.abs(me(ik, bk)) / mk - Dk, Math.abs(me(ik, rk)) / Pk - Dk)
          }
      return {
        position: re([kk.min[0] + fk[0] / 2, kk.min[1] + fk[1] / 2, kk.min[2] + fk[2] / 2], Pe(Sk, -Mk * tk)),
        heading: Dk.heading,
        pitch: Dk.pitch
      }
    }

    function fe(kk, ek, ik) {
      const Dk = be(kk),
        fk = be(ik),
        Sk = re(kk.position, Pe(ek, -1)),
        bk = [0, 1, 2].reduce(((kk, ek) => re(kk, Pe(fk[ek], me(Sk, Dk[ek])))), [0, 0, 0]);
      return {
        position: re(ek, bk),
        heading: ik.heading,
        pitch: ik.pitch
      }
    }

    function Se(kk) {
      return Pe(re(kk.min, kk.max), .5)
    }

    function be(kk) {
      const ek = ee(kk),
        ik = ie(kk.heading);
      return [ek, ik, Me(ek, ik)]
    }

    function re(kk, ek) {
      return [kk[0] + ek[0], kk[1] + ek[1], kk[2] + ek[2]]
    }

    function Pe(kk, ek) {
      return [kk[0] * ek, kk[1] * ek, kk[2] * ek]
    }

    function me(kk, ek) {
      return kk[0] * ek[0] + kk[1] * ek[1] + kk[2] * ek[2]
    }

    function Me(kk, ek) {
      return [kk[1] * ek[2] - kk[2] * ek[1], kk[2] * ek[0] - kk[0] * ek[2], kk[0] * ek[1] - kk[1] * ek[0]]
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);