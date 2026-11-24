export const id = 250;
export const ids = [250];
export const modules = {
  39801: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => mk
    });
    Ik(6462);
    var Xk = Ik(58),
      Tk = Ik(39806),
      ik = Ik(40082),
      yk = Ik(40201),
      lk = Ik(40252),
      ak = Ik(40269),
      qk = Ik(37327),
      Lk = Ik(37144),
      tk = Ik(40411),
      Zk = Ik(40458),
      jk = (Ik(40498), Ik(1217)),
      ek = Ik(187),
      wk = Ik(1179),
      Hk = Ik(25),
      Jk = Ik(2679),
      xk = Ik(1406),
      Pk = Ik(1066),
      Kk = Ik(6459),
      Qk = Ik(6471),
      sk = Ik(4430),
      Vk = Ik(1096);
    const zk = 1.2,
      Sk = .2,
      vk = .0066 * Math.PI / 180,
      Ek = new Set(["Escape", "KeyG"]),
      Ok = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      nk = "ArrowUp",
      Gk = new Set([...Object.keys(Ok), nk, "ArrowDown"]),
      pk = 32,
      uk = 1,
      bk = 10,
      Rk = "F4",
      Uk = "Period",
      Ck = Math.PI / 2 - .001,
      Nk = Math.PI / 6,
      ck = Math.PI / 6,
      Wk = 1.08,
      fk = [{
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
      dk = 7,
      Yk = 4,
      Ak = .01,
      gk = 4;

    function mk(kk) {
      let {
        heatmap: Fk,
        scale: Ik,
        fullyOpaqueFrom: uk,
        bounds: Nk,
        fitBounds: ck,
        schematic: Wk,
        controls: fk,
        onStepTime: Bk,
        onShowAllTime: dk,
        onTogglePlaying: Yk,
        getReadout: gk = null
      } = kk;
      const {
        t: mk
      } = (0, wk.y)(), {
        clientEscMenuOptions: yF
      } = (0, Hk.j)(["clientEscMenuOptions"]), qF = (0, Xk.useRef)(null), LF = (0, Xk.useRef)(null), tF = (0, Xk.useRef)(null), ZF = (0, Jk.b)(qF), [jF, eF] = (0, Xk.useState)(!1), [wF, HF] = (0, Xk.useState)(!1), [JF, xF] = (0, Xk.useState)(!0), PF = (0, Xk.useRef)(!1), [KF, QF] = (0, Xk.useState)(!1), sF = wF || !JF && KF, [VF, zF] = (0, Xk.useState)(!1), [SF, oF] = (0, Xk.useState)(!0), [vF, EF] = (0, Xk.useState)(null), OF = Nk.min, [nF, GF] = (0, Xk.useState)(OF);
      nF[0] === OF[0] && nF[1] === OF[1] && nF[2] === OF[2] || (GF(OF), null !== vF && EF({
        ...vF,
        position: lF(vF.position, lF(nF, aF(OF, -1)))
      }));
      const pF = (0, Xk.useMemo)((() => function(kk) {
          return [kk.max[0] - kk.min[0] + 1, kk.max[1] - kk.min[1] + 1, kk.max[2] - kk.min[2] + 1]
        }(Nk)), [Nk]),
        uF = (0, Xk.useMemo)((() => function(kk, Fk) {
          const Ik = [],
            Xk = [];
          for (const [Tk, ik] of Object.entries(kk.frequencies)) {
            const kk = Number(Tk);
            for (const [Tk, yk] of Object.entries(ik)) {
              const ik = Number(Tk);
              for (const [Tk, lk] of Object.entries(yk)) lk <= 0 || (Ik.push(kk - Fk[0], ik - Fk[1], Number(Tk) - Fk[2]), Xk.push(lk))
            }
          }
          return {
            positions: Int32Array.from(Ik),
            values: Float64Array.from(Xk),
            count: Xk.length
          }
        }(Fk, OF)), [Fk, OF]),
        bF = zk * yF.cameraFOV / 100,
        RF = ZF.height > 0 ? ZF.width / ZF.height : 1,
        UF = (0, Xk.useMemo)((() => function(kk, Fk) {
          return {
            min: [kk.min[0] - Fk[0], kk.min[1] - Fk[1], kk.min[2] - Fk[2]],
            max: [kk.max[0] - Fk[0] + 1, kk.max[1] - Fk[1] + 1, kk.max[2] - Fk[2] + 1]
          }
        }(ck, OF)), [ck, OF]),
        CF = XF(UF, RF, bF),
        NF = null !== vF && void 0 !== vF ? vF : CF,
        cF = (0, Xk.useRef)({
          fittedView: CF,
          fieldOfView: bF,
          mouseSensitivity: yF.mouseSensitivity,
          canLock: JF
        });
      cF.current = {
        fittedView: CF,
        fieldOfView: bF,
        mouseSensitivity: yF.mouseSensitivity,
        canLock: JF
      };
      const WF = (0, Xk.useMemo)((() => {
          if (!sF) return null;
          const kk = (kk, Ik, Xk) => {
              var Tk, ik, yk;
              return null !== (Tk = null === (ik = Fk.frequencies[kk + OF[0]]) || void 0 === ik || null === (yk = ik[Ik + OF[1]]) || void 0 === yk ? void 0 : yk[Xk + OF[2]]) && void 0 !== Tk ? Tk : 0
            },
            Xk = function(kk, Fk, Ik, Xk) {
              let Tk = 0,
                ik = 1 / 0;
              for (const tk of [0, 1, 2]) {
                if (0 === Fk[tk]) {
                  if (kk[tk] < 0 || kk[tk] > Ik[tk]) return null;
                  continue
                }
                const Xk = (0 - kk[tk]) / Fk[tk],
                  yk = (Ik[tk] - kk[tk]) / Fk[tk];
                Tk = Math.max(Tk, Math.min(Xk, yk)), ik = Math.min(ik, Math.max(Xk, yk))
              }
              if (Tk > ik) return null;
              const yk = [0, 1, 2].map((Xk => Math.min(Ik[Xk] - 1, Math.max(0, Math.floor(kk[Xk] + Fk[Xk] * Tk))))),
                lk = [0, 1, 2].map((kk => Math.sign(Fk[kk]))),
                ak = [0, 1, 2].map((Ik => {
                  if (0 === lk[Ik]) return 1 / 0;
                  return ((lk[Ik] > 0 ? yk[Ik] + 1 : yk[Ik]) - kk[Ik]) / Fk[Ik]
                })),
                qk = [0, 1, 2].map((kk => 0 === lk[kk] ? 1 / 0 : Math.abs(1 / Fk[kk])));
              let Lk = null;
              for (;;) {
                const kk = Xk(yk[0], yk[1], yk[2]);
                if (kk >= 1) return yk;
                kk > 0 && (Lk = [yk[0], yk[1], yk[2]]);
                const Fk = ak[0] < ak[1] ? ak[0] < ak[2] ? 0 : 2 : ak[1] < ak[2] ? 1 : 2;
                if (ak[Fk] > ik) return Lk;
                if (yk[Fk] += lk[Fk], ak[Fk] += qk[Fk], yk[Fk] < 0 || yk[Fk] >= Ik[Fk]) return Lk
              }
            }(NF.position, FF(NF), pF, ((Fk, Xk, Tk) => (0, Kk.x)(kk(Fk, Xk, Tk), Ik, uk)));
          return null === Xk ? null : {
            x: Xk[0] + OF[0],
            y: Xk[1] + OF[1],
            z: Xk[2] + OF[2],
            value: kk(Xk[0], Xk[1], Xk[2])
          }
        }), [sF, Fk, OF, NF, pF, Ik, uk]),
        {
          keyHandlers: fF
        } = (0, Qk.e)({
          isEnabled: sF,
          claimedKeyCodes: Gk,
          HZ: kk => {
            EF((Fk => function(kk, Fk) {
              const Ik = [Math.sin(kk.heading), 0, Math.cos(kk.heading)],
                Xk = lF(lF(aF(Ik, Fk.forward), aF(IF(kk.heading), Fk.right)), [0, Fk.up, 0]);
              return {
                ...kk,
                position: lF(kk.position, Xk)
              }
            }(null !== Fk && void 0 !== Fk ? Fk : cF.current.fittedView, kk)))
          },
          onZoomChange: zF
        });
      (0, Xk.useEffect)((() => {
        const kk = LF.current;
        if (!kk) return;
        let Fk;
        try {
          Fk = function(kk, Fk) {
            const Ik = new Tk.c(kk, !0, {
                stencil: !1
              }, !0),
              Xk = new ik.c(Ik),
              [jk, ek, wk] = Kk.S;
            Xk.clearColor = new qk.b(jk / 255, ek / 255, wk / 255, 1);
            const Hk = new yk.e("Heatmap3DCamera", Lk.Ge.Zero(), Xk);
            Hk.fov = Fk, Hk.minZ = .05;
            const Jk = new lk.d("Heatmap3DLight", new Lk.Ge(.4, 1, -.6), Xk);
            Jk.diffuse = qk.Color3.White(), Jk.groundColor = qk.Color3.Black(), Jk.specular = qk.Color3.Black();
            const xk = new ak.StandardMaterial("Heatmap3DCellMaterial", Xk);
            xk.diffuseColor = new qk.Color3(.4, .4, .4), xk.emissiveColor = new qk.Color3(.62, .62, .62), xk.specularColor = qk.Color3.Black();
            const Pk = (0, tk.d)("Heatmap3DCells", {
              size: 1
            }, Xk);
            Pk.material = xk, Pk.gw = !1, Pk.ne = !0, Pk.isVisible = !1;
            const Qk = (0, tk.d)("Heatmap3DTranslucentCells", {
              size: 1
            }, Xk);
            Qk.material = xk, Qk.hasVertexAlpha = !0, Qk.gw = !1, Qk.ne = !0, Qk.isVisible = !1;
            const sk = new ak.StandardMaterial("Heatmap3DSchematicMaterial", Xk);
            sk.diffuseColor = new qk.Color3(.6, .6, .6), sk.emissiveColor = new qk.Color3(.4, .4, .4), sk.specularColor = qk.Color3.Black();
            const Vk = (0, tk.d)("Heatmap3DSchematicBlocks", {
              size: 1
            }, Xk);
            Vk.material = sk, Vk.gw = !1, Vk.ne = !0, Vk.isVisible = !1;
            const zk = (0, Zk.c)("Heatmap3DTarget", {
              lines: kF([-.52, -.52, -.52], [.52, .52, .52])
            }, Xk);
            return zk.color = new qk.Color3(.06, .14, .23), zk.renderingGroupId = 1, zk.gw = !1, zk.isVisible = !1, {
              engine: Ik,
              Yw: Xk,
              camera: Hk,
              cells: Pk,
              translucentCells: Qk,
              translucent: {
                By: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: Vk,
              targetOutline: zk,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: Fk,
              needsRender: !0
            }
          }(kk, cF.current.fieldOfView)
        } catch (Ik) {
          return console.error("Failed to start the 3D heatmap", Ik), void eF(!0)
        }
        return tF.current = Fk, Fk.engine.runRenderLoop((() => {
          const kk = Fk.camera;
          kk.fov !== Fk.targetFieldOfView && (kk.fov += (Fk.targetFieldOfView - kk.fov) * (kk.fov > Fk.targetFieldOfView ? .3 : .2), Math.abs(Fk.targetFieldOfView - kk.fov) < 5e-4 && (kk.fov = Fk.targetFieldOfView), Fk.needsRender = !0), Fk.needsRender && (Fk.Yw.render(), Fk.needsRender = !Fk.Yw.isReady() || !Fk.engine.areAllEffectsReady())
        })), () => {
          tF.current = null, Fk.engine.dispose()
        }
      }), []), (0, Xk.useEffect)((() => {
        const kk = LF.current;
        if (!kk) return;
        const Fk = () => {
            PF.current = !1, HF(document.pointerLockElement === kk)
          },
          Ik = () => {
            PF.current && (PF.current = !1, xF(!1))
          },
          Xk = Fk => {
            const Ik = !cF.current.canLock && document.activeElement === kk && 0 !== (1 & Fk.buttons);
            if (document.pointerLockElement !== kk && !Ik) return;
            const Xk = cF.current.mouseSensitivity * vk;
            EF((kk => function(kk, Fk, Ik) {
              const Xk = 2 * Math.PI;
              return {
                ...kk,
                heading: ((kk.heading + Fk) % Xk + Xk) % Xk,
                pitch: Math.max(-Ck, Math.min(Ck, kk.pitch + Ik))
              }
            }(null !== kk && void 0 !== kk ? kk : cF.current.fittedView, Fk.movementX * Xk, Fk.movementY * Xk)))
          };
        return document.addEventListener("pointerlockchange", Fk), document.addEventListener("pointerlockerror", Ik), document.addEventListener("pointermove", Xk), () => {
          document.removeEventListener("pointerlockchange", Fk), document.removeEventListener("pointerlockerror", Ik), document.removeEventListener("pointermove", Xk), document.pointerLockElement === kk && (0, sk.d)()
        }
      }), []), (0, Xk.useEffect)((() => {
        const kk = tF.current;
        null !== kk && 0 !== ZF.width && 0 !== ZF.height && (kk.engine.resize(), kk.needsRender = !0)
      }), [ZF.width, ZF.height]), (0, Xk.useEffect)((() => {
        const kk = tF.current;
        null !== kk && (kk.targetFieldOfView = bF * (VF ? Sk : 1))
      }), [bF, VF]), (0, Xk.useEffect)((() => {
        const kk = tF.current;
        null !== kk && function(kk, Fk, Ik, Xk) {
          const Tk = [],
            ik = [],
            yk = [],
            lk = [];
          for (let ak = 0; ak < Fk.count; ak++) {
            const kk = Fk.values[ak],
              qk = (0, Kk.x)(kk, Ik, Xk);
            if (qk <= 0) continue;
            const [Lk, tk, Zk] = (0, Kk.p)((0, Kk.H)(kk, Ik)), jk = qk >= 1;
            (jk ? Tk : yk).push(Fk.positions[3 * ak] + .5, Fk.positions[3 * ak + 1] + .5, Fk.positions[3 * ak + 2] + .5), (jk ? ik : lk).push(Lk / 255, tk / 255, Zk / 255, qk)
          }
          Dk(kk.cells, Float32Array.from(Tk), Float32Array.from(ik), ik.length / 4), kk.translucent = {
            By: Float32Array.from(yk),
            colours: Float32Array.from(lk),
            count: lk.length / 4
          }, kk.translucentSortedFrom = null, Mk(kk), kk.needsRender = !0
        }(kk, uF, Ik, uk)
      }), [uF, Ik, uk]), (0, Xk.useEffect)((() => {
        const kk = tF.current;
        null !== kk && function(kk, Fk) {
          kk.chunkGridOrigin = Fk, kk.chunkGridCentre = null, rk(kk)
        }(kk, Nk.min)
      }), [Nk]), (0, Xk.useEffect)((() => {
        const kk = tF.current;
        null !== kk && function(kk, Fk, Ik) {
          const Xk = [],
            Tk = [];
          if (null !== Fk) {
            const {
              positions: kk,
              colours: ik,
              count: yk
            } = Fk.surface;
            for (let Fk = 0; Fk < yk; Fk++) {
              const yk = [kk[3 * Fk], kk[3 * Fk + 1], kk[3 * Fk + 2]];
              [0, 1, 2].every((kk => yk[kk] >= Ik.min[kk] - pk && yk[kk] <= Ik.max[kk] + pk)) && (Xk.push(yk[0] - Ik.min[0] + .5, yk[1] - Ik.min[1] + .5, yk[2] - Ik.min[2] + .5), Tk.push(ik[3 * Fk] / 255, ik[3 * Fk + 1] / 255, ik[3 * Fk + 2] / 255, 1))
            }
          }
          Dk(kk.schematicBlocks, Float32Array.from(Xk), Float32Array.from(Tk), Tk.length / 4), kk.needsRender = !0
        }(kk, Wk, Nk)
      }), [Wk, Nk]), (0, Xk.useEffect)((() => {
        const kk = tF.current;
        null !== kk && null !== kk.chunkGrid && (kk.chunkGrid.isVisible = SF, kk.needsRender = !0)
      }), [SF, Nk]), (0, Xk.useEffect)((() => {
        const kk = tF.current;
        null !== kk && function(kk, Fk, Ik) {
          const {
            camera: Xk
          } = kk;
          Xk.position.set(Fk.position[0], Fk.position[1], Fk.position[2]), Xk.rotation.set(Fk.pitch, Fk.heading, 0);
          const Tk = (bk + 1) * ek.f.se * Math.sqrt(3);
          Xk.maxZ = Math.max(Tk, Math.hypot(...lF(Fk.position, aF(iF({
            min: [0, 0, 0],
            max: Ik
          }), -1))) + 2 * Math.hypot(...Ik)), rk(kk), Mk(kk), kk.needsRender = !0
        }(kk, NF, pF)
      }), [NF, pF]), (0, Xk.useEffect)((() => {
        const kk = tF.current;
        null !== kk && (kk.targetOutline.isVisible = null !== WF, null !== WF && kk.targetOutline.position.set(WF.x - OF[0] + .5, WF.y - OF[1] + .5, WF.z - OF[2] + .5), kk.needsRender = !0)
      }), [WF, OF]);
      return (0, Vk.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: qF,
        children: [(0, Vk.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: LF,
          style: {
            width: `${ZF.width}px`,
            height: `${ZF.height}px`
          },
          tabIndex: 0,
          "aria-label": mk("3D heatmap"),
          onClick: () => {
            const kk = LF.current;
            if (null === kk) return;
            if (kk.focus({
                preventScroll: !0
              }), wF || !JF) return;
            const Fk = kk.requestPointerLock();
            Fk instanceof Promise ? Fk.catch((kk => {
              kk instanceof DOMException && ("WrongDocumentError" === kk.name || "NotSupportedError" === kk.name) && xF(!1)
            })) : PF.current = !0
          },
          ...fF,
          onKeyDown: kk => {
            if (sF && Ek.has(kk.code)) return kk.preventDefault(), void(() => {
              const kk = LF.current;
              null !== kk && document.pointerLockElement === kk ? (0, sk.d)() : null === kk || void 0 === kk || kk.blur()
            })();
            const Fk = Ok[kk.code];
            return sF && void 0 !== Fk ? (kk.preventDefault(), void Bk(Fk)) : sF && (0, Qk.b)("replayPlayPause", kk.code) && !(0, Qk.b)("Zoom", kk.code) ? (kk.preventDefault(), void(kk.repeat || Yk())) : sF && kk.code === nk ? (kk.preventDefault(), void dk()) : sF && kk.code === Uk ? (kk.preventDefault(), void EF(null)) : sF && kk.code === Rk ? (kk.preventDefault(), void oF((kk => !kk))) : void fF.onKeyDown(kk)
          },
          onFocus: () => {
            QF(!0)
          },
          onBlur: () => {
            QF(!1), fF.onBlur()
          }
        }), jF && (0, Vk.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: mk("3D view isn't available in this browser.")
        }), sF && (0, Vk.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, Vk.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: NF.position.map(((kk, Fk) => (kk + OF[Fk]).toFixed(2))).join(" ")
        }), SF && (0, Vk.jsx)(hk, {
          heading: NF.heading,
          pitch: NF.pitch,
          onViewFrom: kk => {
            const Fk = aF(kk, -1),
              Ik = 0 === Fk[1] ? {
                heading: Math.atan2(Fk[0], Fk[2]),
                pitch: 0
              } : {
                heading: NF.heading,
                pitch: Fk[1] < 0 ? Ck : -Ck
              };
            EF(XF(UF, RF, bF, Ik))
          },
          onTurn: (kk, Fk) => {
            EF((Ik => function(kk, Fk, Ik, Xk) {
              return TF(kk, Fk, {
                heading: kk.heading + Ik * Ak,
                pitch: Math.max(-Ck, Math.min(Ck, kk.pitch + Xk * Ak))
              })
            }(null !== Ik && void 0 !== Ik ? Ik : cF.current.fittedView, iF(UF), kk, Fk)))
          },
          onFlip: () => {
            EF((kk => function(kk, Fk) {
              return TF(kk, Fk, {
                heading: kk.heading + Math.PI,
                pitch: -kk.pitch
              })
            }(null !== kk && void 0 !== kk ? kk : cF.current.fittedView, iF(UF))))
          }
        }), null !== WF && (0, Vk.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === gk ? mk("studio:heatmapBlockReadout", {
            x: WF.x,
            y: WF.y,
            z: WF.z,
            count: (0, jk.Q)(WF.value)
          }) : gk(WF.x, WF.y, WF.z, WF.value)
        }), (0, Vk.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [fk, (0, Vk.jsx)(xk.Q, {
            active: null === vF,
            onClick: () => {
              EF(null)
            },
            children: (0, Vk.jsx)(Pk.e, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function hk(kk) {
      let {
        heading: Fk,
        pitch: Ik,
        onViewFrom: Tk,
        onTurn: ik,
        onFlip: yk
      } = kk;
      const {
        t: lk
      } = (0, wk.y)(), ak = (0, Xk.useRef)(null), qk = FF({
        heading: Fk,
        pitch: Ik
      }), Lk = IF(Fk), tk = LF(qk, Lk), Zk = Bk + dk + 2, jk = fk.flatMap((kk => [1, -1].map((Fk => {
        const Ik = aF(kk.direction, Fk);
        return {
          ...kk,
          sign: Fk,
          direction: Ik,
          endX: Zk + qF(Ik, Lk) * Bk,
          endY: Zk - qF(Ik, tk) * Bk,
          depth: qF(Ik, qk)
        }
      })))).sort(((kk, Fk) => Fk.depth - kk.depth));
      return (0, Vk.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * Zk,
        height: 2 * Zk,
        "aria-hidden": !0,
        onPointerDown: kk => {
          var Fk, Ik;
          kk.currentTarget.setPointerCapture(kk.pointerId);
          const Xk = kk.target,
            Tk = Xk.getAttribute("data-end");
          ak.current = {
            pointerId: kk.pointerId,
            x: kk.clientX,
            y: kk.clientY,
            travel: 0,
            side: null === Tk ? null : null !== (Fk = null === (Ik = jk[Number(Tk)]) || void 0 === Ik ? void 0 : Ik.direction) && void 0 !== Fk ? Fk : null,
            isOnMiddle: Xk.hasAttribute("data-middle")
          }
        },
        onPointerMove: kk => {
          const Fk = ak.current;
          if (null === Fk || Fk.pointerId !== kk.pointerId) return;
          const Ik = kk.clientX - Fk.x,
            Xk = kk.clientY - Fk.y;
          Fk.x = kk.clientX, Fk.y = kk.clientY, Fk.travel += Math.abs(Ik) + Math.abs(Xk), Fk.travel >= gk && ik(Ik, Xk)
        },
        onPointerUp: kk => {
          const Fk = ak.current;
          ak.current = null, null === Fk || Fk.pointerId !== kk.pointerId || Fk.travel >= gk || (null !== Fk.side ? Tk(Fk.side) : Fk.isOnMiddle && yk())
        },
        onPointerCancel: () => {
          ak.current = null
        },
        children: [jk.map(((kk, Fk) => {
          const Ik = kk.sign > 0;
          return (0, Vk.jsxs)("g", {
            children: [(0, Vk.jsx)("line", {
              x1: Zk,
              y1: Zk,
              x2: kk.endX,
              y2: kk.endY,
              stroke: kk.colour,
              strokeOpacity: Ik ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, Vk.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": Fk,
              cx: kk.endX,
              cy: kk.endY,
              r: Ik ? dk : dk - 1,
              fill: kk.colour,
              fillOpacity: Ik ? 1 : .3,
              stroke: kk.colour,
              strokeWidth: Ik ? 0 : 1.5,
              children: (0, Vk.jsx)("title", {
                children: `${lk("View from")} ${Ik?"+":"\u2212"}${kk.name}`
              })
            }), Ik && (0, Vk.jsx)("text", {
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
          }, `${Ik?"+":"-"}${kk.name}`)
        })), (0, Vk.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: Zk,
          cy: Zk,
          r: Yk,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, Vk.jsx)("title", {
            children: lk("View from the opposite side")
          })
        })]
      })
    }

    function rk(kk) {
      var Fk, Ik, Xk;
      const {
        chunkGridOrigin: Tk,
        camera: ik
      } = kk;
      if (null === Tk) return;
      const yk = [ik.position.x, ik.position.y, ik.position.z],
        lk = [0, 2].map((kk => Math.floor((yk[kk] + Tk[kk]) / ek.f.se))),
        ak = kk.chunkGridCentre;
      if (null !== ak && ak.every(((kk, Fk) => kk === lk[Fk]))) return;
      const tk = null === (Fk = null === (Ik = kk.chunkGrid) || void 0 === Ik ? void 0 : Ik.isVisible) || void 0 === Fk || Fk;
      null === (Xk = kk.chunkGrid) || void 0 === Xk || Xk.dispose();
      const [jk, wk] = [0, 2].map(((kk, Fk) => {
        const Ik = [];
        for (let Xk = lk[Fk] - bk; Xk <= lk[Fk] + bk + 1; Xk++) Ik.push(Xk * ek.f.se - Tk[kk]);
        return Ik
      })), Hk = -Tk[1], Jk = [];
      for (const qk of wk) Jk.push([new Lk.Ge(jk[0], Hk, qk), new Lk.Ge(jk[jk.length - 1], Hk, qk)]);
      for (const qk of jk) Jk.push([new Lk.Ge(qk, Hk, wk[0]), new Lk.Ge(qk, Hk, wk[wk.length - 1])]);
      const xk = (0, Zk.c)("Heatmap3DChunkGrid", {
        lines: Jk
      }, kk.Yw);
      xk.color = new qk.Color3(.45, .6, .78), xk.gw = !1, xk.isVisible = tk, kk.chunkGrid = xk, kk.chunkGridCentre = lk, kk.needsRender = !0
    }

    function Dk(kk, Fk, Ik, Xk) {
      kk.K8("matrix", function(kk, Fk) {
        const Ik = new Float32Array(16 * Fk);
        for (let Xk = 0; Xk < Fk; Xk++) {
          const Fk = 16 * Xk;
          Ik[Fk] = 1, Ik[Fk + 5] = 1, Ik[Fk + 10] = 1, Ik[Fk + 12] = kk[3 * Xk], Ik[Fk + 13] = kk[3 * Xk + 1], Ik[Fk + 14] = kk[3 * Xk + 2], Ik[Fk + 15] = 1
        }
        return Ik
      }(Fk, Xk), 16, !0), kk.K8("color", Ik, 4, !0), kk.isVisible = Xk > 0
    }

    function Mk(kk) {
      const {
        camera: Fk,
        translucent: Ik
      } = kk, Xk = [Fk.position.x, Fk.position.y, Fk.position.z], Tk = kk.translucentSortedFrom;
      if (null !== Tk && Math.hypot(Xk[0] - Tk[0], Xk[1] - Tk[1], Xk[2] - Tk[2]) < uk) return;
      kk.translucentSortedFrom = Xk;
      const ik = new Float64Array(Ik.count),
        yk = new Uint32Array(Ik.count);
      for (let qk = 0; qk < Ik.count; qk++) {
        const kk = Ik.By[3 * qk] - Xk[0],
          Fk = Ik.By[3 * qk + 1] - Xk[1],
          Tk = Ik.By[3 * qk + 2] - Xk[2];
        ik[qk] = kk * kk + Fk * Fk + Tk * Tk, yk[qk] = qk
      }
      yk.sort(((kk, Fk) => ik[Fk] - ik[kk]));
      const lk = new Float32Array(3 * Ik.count),
        ak = new Float32Array(4 * Ik.count);
      yk.forEach(((kk, Fk) => {
        lk.set(Ik.By.subarray(3 * kk, 3 * kk + 3), 3 * Fk), ak.set(Ik.colours.subarray(4 * kk, 4 * kk + 4), 4 * Fk)
      })), Dk(kk.translucentCells, lk, ak, Ik.count), kk.needsRender = !0
    }

    function kF(kk, Fk) {
      const Ik = (Ik, Xk, Tk) => new Lk.Ge(0 === Ik ? kk[0] : Fk[0], 0 === Xk ? kk[1] : Fk[1], 0 === Tk ? kk[2] : Fk[2]),
        Xk = [];
      for (const Tk of [0, 1])
        for (const kk of [0, 1]) Xk.push([Ik(0, Tk, kk), Ik(1, Tk, kk)], [Ik(Tk, 0, kk), Ik(Tk, 1, kk)], [Ik(Tk, kk, 0), Ik(Tk, kk, 1)]);
      return Xk
    }

    function FF(kk) {
      return [Math.sin(kk.heading) * Math.cos(kk.pitch), -Math.sin(kk.pitch), Math.cos(kk.heading) * Math.cos(kk.pitch)]
    }

    function IF(kk) {
      return [Math.cos(kk), 0, -Math.sin(kk)]
    }

    function XF(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: Nk,
        pitch: ck
      };
      const Tk = [kk.max[0] - kk.min[0], kk.max[1] - kk.min[1], kk.max[2] - kk.min[2]],
        ik = FF(Xk),
        yk = IF(Xk.heading),
        lk = LF(ik, yk),
        ak = Math.tan(Ik / 2),
        qk = ak * Fk;
      let Lk = 1;
      for (const tk of [-Tk[0] / 2, Tk[0] / 2])
        for (const kk of [-Tk[1] / 2, Tk[1] / 2])
          for (const Fk of [-Tk[2] / 2, Tk[2] / 2]) {
            const Ik = [tk, kk, Fk],
              Xk = qF(Ik, ik);
            Lk = Math.max(Lk, Math.abs(qF(Ik, yk)) / qk - Xk, Math.abs(qF(Ik, lk)) / ak - Xk)
          }
      return {
        position: lF([kk.min[0] + Tk[0] / 2, kk.min[1] + Tk[1] / 2, kk.min[2] + Tk[2] / 2], aF(ik, -Lk * Wk)),
        heading: Xk.heading,
        pitch: Xk.pitch
      }
    }

    function TF(kk, Fk, Ik) {
      const Xk = yF(kk),
        Tk = yF(Ik),
        ik = lF(kk.position, aF(Fk, -1)),
        yk = [0, 1, 2].reduce(((kk, Fk) => lF(kk, aF(Tk[Fk], qF(ik, Xk[Fk])))), [0, 0, 0]);
      return {
        position: lF(Fk, yk),
        heading: Ik.heading,
        pitch: Ik.pitch
      }
    }

    function iF(kk) {
      return aF(lF(kk.min, kk.max), .5)
    }

    function yF(kk) {
      const Fk = FF(kk),
        Ik = IF(kk.heading);
      return [Fk, Ik, LF(Fk, Ik)]
    }

    function lF(kk, Fk) {
      return [kk[0] + Fk[0], kk[1] + Fk[1], kk[2] + Fk[2]]
    }

    function aF(kk, Fk) {
      return [kk[0] * Fk, kk[1] * Fk, kk[2] * Fk]
    }

    function qF(kk, Fk) {
      return kk[0] * Fk[0] + kk[1] * Fk[1] + kk[2] * Fk[2]
    }

    function LF(kk, Fk) {
      return [kk[1] * Fk[2] - kk[2] * Fk[1], kk[2] * Fk[0] - kk[0] * Fk[2], kk[0] * Fk[1] - kk[1] * Fk[0]]
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);