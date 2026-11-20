export const id = 240;
export const ids = [240];
export const modules = {
  39229: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => jk
    });
    Bk(6150);
    var Rk = Bk(61),
      tk = Bk(39236),
      ak = Bk(39486),
      Xk = Bk(39615),
      bk = Bk(39659),
      wk = Bk(39674),
      dk = Bk(36911),
      sk = Bk(36754),
      Vk = Bk(39811),
      Jk = Bk(39865),
      Ak = (Bk(39897), Bk(1173)),
      ek = Bk(182),
      yk = Bk(1149),
      fk = Bk(22),
      mk = Bk(2607),
      Wk = Bk(1389),
      vk = Bk(1028),
      ik = Bk(6144),
      Yk = Bk(6159),
      Lk = Bk(4179),
      Ok = Bk(1069);
    const Ek = 1.2,
      Sk = .2,
      Nk = .0066 * Math.PI / 180,
      Hk = new Set(["Escape", "KeyG"]),
      uk = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      Mk = "ArrowUp",
      gk = new Set([...Object.keys(uk), Mk, "ArrowDown"]),
      Uk = 32,
      ck = 1,
      Gk = 10,
      Tk = "F4",
      rk = "Period",
      Dk = Math.PI / 2 - .001,
      zk = Math.PI / 6,
      Pk = Math.PI / 6,
      hk = 1.08,
      qk = [{
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
      Ck = 24,
      Zk = 7,
      pk = 4,
      Kk = .01,
      xk = 4;

    function jk(kk) {
      let {
        heatmap: Fk,
        scale: Bk,
        fullyOpaqueFrom: ck,
        bounds: zk,
        fitBounds: Pk,
        schematic: hk,
        controls: qk,
        onStepTime: Ck,
        onShowAllTime: Zk,
        onTogglePlaying: pk,
        getReadout: xk = null
      } = kk;
      const {
        t: jk
      } = (0, yk.x)(), {
        clientEscMenuOptions: XF
      } = (0, fk.h)(["clientEscMenuOptions"]), dF = (0, Rk.useRef)(null), sF = (0, Rk.useRef)(null), VF = (0, Rk.useRef)(null), JF = (0, mk.e)(dF), [AF, eF] = (0, Rk.useState)(!1), [yF, fF] = (0, Rk.useState)(!1), [mF, WF] = (0, Rk.useState)(!0), vF = (0, Rk.useRef)(!1), [iF, YF] = (0, Rk.useState)(!1), oF = yF || !mF && iF, [LF, OF] = (0, Rk.useState)(!1), [EF, SF] = (0, Rk.useState)(!0), [NF, HF] = (0, Rk.useState)(null), uF = zk.min, [MF, gF] = (0, Rk.useState)(uF);
      MF[0] === uF[0] && MF[1] === uF[1] && MF[2] === uF[2] || (gF(uF), null !== NF && HF({
        ...NF,
        position: bF(NF.position, bF(MF, wF(uF, -1)))
      }));
      const UF = (0, Rk.useMemo)((() => function(kk) {
          return [kk.max[0] - kk.min[0] + 1, kk.max[1] - kk.min[1] + 1, kk.max[2] - kk.min[2] + 1]
        }(zk)), [zk]),
        cF = (0, Rk.useMemo)((() => function(kk, Fk) {
          const Bk = [],
            Rk = [];
          for (const [tk, ak] of Object.entries(kk.frequencies)) {
            const kk = Number(tk);
            for (const [tk, Xk] of Object.entries(ak)) {
              const ak = Number(tk);
              for (const [tk, bk] of Object.entries(Xk)) bk <= 0 || (Bk.push(kk - Fk[0], ak - Fk[1], Number(tk) - Fk[2]), Rk.push(bk))
            }
          }
          return {
            positions: Int32Array.from(Bk),
            values: Float64Array.from(Rk),
            count: Rk.length
          }
        }(Fk, uF)), [Fk, uF]),
        GF = Ek * XF.cameraFOV / 100,
        TF = JF.height > 0 ? JF.width / JF.height : 1,
        rF = (0, Rk.useMemo)((() => function(kk, Fk) {
          return {
            min: [kk.min[0] - Fk[0], kk.min[1] - Fk[1], kk.min[2] - Fk[2]],
            max: [kk.max[0] - Fk[0] + 1, kk.max[1] - Fk[1] + 1, kk.max[2] - Fk[2] + 1]
          }
        }(Pk, uF)), [Pk, uF]),
        DF = RF(rF, TF, GF),
        zF = null !== NF && void 0 !== NF ? NF : DF,
        PF = (0, Rk.useRef)({
          fittedView: DF,
          fieldOfView: GF,
          mouseSensitivity: XF.mouseSensitivity,
          canLock: mF
        });
      PF.current = {
        fittedView: DF,
        fieldOfView: GF,
        mouseSensitivity: XF.mouseSensitivity,
        canLock: mF
      };
      const hF = (0, Rk.useMemo)((() => {
          if (!oF) return null;
          const kk = (kk, Bk, Rk) => {
              var tk, ak, Xk;
              return null !== (tk = null === (ak = Fk.frequencies[kk + uF[0]]) || void 0 === ak || null === (Xk = ak[Bk + uF[1]]) || void 0 === Xk ? void 0 : Xk[Rk + uF[2]]) && void 0 !== tk ? tk : 0
            },
            Rk = function(kk, Fk, Bk, Rk) {
              let tk = 0,
                ak = 1 / 0;
              for (const Vk of [0, 1, 2]) {
                if (0 === Fk[Vk]) {
                  if (kk[Vk] < 0 || kk[Vk] > Bk[Vk]) return null;
                  continue
                }
                const Rk = (0 - kk[Vk]) / Fk[Vk],
                  Xk = (Bk[Vk] - kk[Vk]) / Fk[Vk];
                tk = Math.max(tk, Math.min(Rk, Xk)), ak = Math.min(ak, Math.max(Rk, Xk))
              }
              if (tk > ak) return null;
              const Xk = [0, 1, 2].map((Rk => Math.min(Bk[Rk] - 1, Math.max(0, Math.floor(kk[Rk] + Fk[Rk] * tk))))),
                bk = [0, 1, 2].map((kk => Math.sign(Fk[kk]))),
                wk = [0, 1, 2].map((Bk => {
                  if (0 === bk[Bk]) return 1 / 0;
                  return ((bk[Bk] > 0 ? Xk[Bk] + 1 : Xk[Bk]) - kk[Bk]) / Fk[Bk]
                })),
                dk = [0, 1, 2].map((kk => 0 === bk[kk] ? 1 / 0 : Math.abs(1 / Fk[kk])));
              let sk = null;
              for (;;) {
                const kk = Rk(Xk[0], Xk[1], Xk[2]);
                if (kk >= 1) return Xk;
                kk > 0 && (sk = [Xk[0], Xk[1], Xk[2]]);
                const Fk = wk[0] < wk[1] ? wk[0] < wk[2] ? 0 : 2 : wk[1] < wk[2] ? 1 : 2;
                if (wk[Fk] > ak) return sk;
                if (Xk[Fk] += bk[Fk], wk[Fk] += dk[Fk], Xk[Fk] < 0 || Xk[Fk] >= Bk[Fk]) return sk
              }
            }(zF.position, FF(zF), UF, ((Fk, Rk, tk) => (0, ik.B)(kk(Fk, Rk, tk), Bk, ck)));
          return null === Rk ? null : {
            x: Rk[0] + uF[0],
            y: Rk[1] + uF[1],
            z: Rk[2] + uF[2],
            value: kk(Rk[0], Rk[1], Rk[2])
          }
        }), [oF, Fk, uF, zF, UF, Bk, ck]),
        {
          keyHandlers: qF
        } = (0, Yk.c)({
          isEnabled: oF,
          claimedKeyCodes: gk,
          cJ: kk => {
            HF((Fk => function(kk, Fk) {
              const Bk = [Math.sin(kk.heading), 0, Math.cos(kk.heading)],
                Rk = bF(bF(wF(Bk, Fk.forward), wF(BF(kk.heading), Fk.right)), [0, Fk.up, 0]);
              return {
                ...kk,
                position: bF(kk.position, Rk)
              }
            }(null !== Fk && void 0 !== Fk ? Fk : PF.current.fittedView, kk)))
          },
          onZoomChange: OF
        });
      (0, Rk.useEffect)((() => {
        const kk = sF.current;
        if (!kk) return;
        let Fk;
        try {
          Fk = function(kk, Fk) {
            const Bk = new tk.e(kk, !0, {
                stencil: !1
              }, !0),
              Rk = new ak.c(Bk),
              [Ak, ek, yk] = ik.Q;
            Rk.clearColor = new dk.c(Ak / 255, ek / 255, yk / 255, 1);
            const fk = new Xk.e("Heatmap3DCamera", sk.Qe.Zero(), Rk);
            fk.fov = Fk, fk.minZ = .05;
            const mk = new bk.e("Heatmap3DLight", new sk.Qe(.4, 1, -.6), Rk);
            mk.diffuse = dk.Color3.White(), mk.groundColor = dk.Color3.Black(), mk.specular = dk.Color3.Black();
            const Wk = new wk.StandardMaterial("Heatmap3DCellMaterial", Rk);
            Wk.diffuseColor = new dk.Color3(.4, .4, .4), Wk.emissiveColor = new dk.Color3(.62, .62, .62), Wk.specularColor = dk.Color3.Black();
            const vk = (0, Vk.c)("Heatmap3DCells", {
              size: 1
            }, Rk);
            vk.material = Wk, vk.ff = !1, vk.Ie = !0, vk.isVisible = !1;
            const Yk = (0, Vk.c)("Heatmap3DTranslucentCells", {
              size: 1
            }, Rk);
            Yk.material = Wk, Yk.hasVertexAlpha = !0, Yk.ff = !1, Yk.Ie = !0, Yk.isVisible = !1;
            const Lk = new wk.StandardMaterial("Heatmap3DSchematicMaterial", Rk);
            Lk.diffuseColor = new dk.Color3(.6, .6, .6), Lk.emissiveColor = new dk.Color3(.4, .4, .4), Lk.specularColor = dk.Color3.Black();
            const Ok = (0, Vk.c)("Heatmap3DSchematicBlocks", {
              size: 1
            }, Rk);
            Ok.material = Lk, Ok.ff = !1, Ok.Ie = !0, Ok.isVisible = !1;
            const Ek = (0, Jk.d)("Heatmap3DTarget", {
              lines: kF([-.52, -.52, -.52], [.52, .52, .52])
            }, Rk);
            return Ek.color = new dk.Color3(.06, .14, .23), Ek.renderingGroupId = 1, Ek.ff = !1, Ek.isVisible = !1, {
              engine: Bk,
              ef: Rk,
              camera: fk,
              cells: vk,
              translucentCells: Yk,
              translucent: {
                pa: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: Ok,
              targetOutline: Ek,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: Fk,
              needsRender: !0
            }
          }(kk, PF.current.fieldOfView)
        } catch (Bk) {
          return console.error("Failed to start the 3D heatmap", Bk), void eF(!0)
        }
        return VF.current = Fk, Fk.engine.runRenderLoop((() => {
          const kk = Fk.camera;
          kk.fov !== Fk.targetFieldOfView && (kk.fov += (Fk.targetFieldOfView - kk.fov) * (kk.fov > Fk.targetFieldOfView ? .3 : .2), Math.abs(Fk.targetFieldOfView - kk.fov) < 5e-4 && (kk.fov = Fk.targetFieldOfView), Fk.needsRender = !0), Fk.needsRender && (Fk.ef.render(), Fk.needsRender = !Fk.ef.isReady() || !Fk.engine.areAllEffectsReady())
        })), () => {
          VF.current = null, Fk.engine.dispose()
        }
      }), []), (0, Rk.useEffect)((() => {
        const kk = sF.current;
        if (!kk) return;
        const Fk = () => {
            vF.current = !1, fF(document.pointerLockElement === kk)
          },
          Bk = () => {
            vF.current && (vF.current = !1, WF(!1))
          },
          Rk = Fk => {
            const Bk = !PF.current.canLock && document.activeElement === kk && 0 !== (1 & Fk.buttons);
            if (document.pointerLockElement !== kk && !Bk) return;
            const Rk = PF.current.mouseSensitivity * Nk;
            HF((kk => function(kk, Fk, Bk) {
              const Rk = 2 * Math.PI;
              return {
                ...kk,
                heading: ((kk.heading + Fk) % Rk + Rk) % Rk,
                pitch: Math.max(-Dk, Math.min(Dk, kk.pitch + Bk))
              }
            }(null !== kk && void 0 !== kk ? kk : PF.current.fittedView, Fk.movementX * Rk, Fk.movementY * Rk)))
          };
        return document.addEventListener("pointerlockchange", Fk), document.addEventListener("pointerlockerror", Bk), document.addEventListener("pointermove", Rk), () => {
          document.removeEventListener("pointerlockchange", Fk), document.removeEventListener("pointerlockerror", Bk), document.removeEventListener("pointermove", Rk), document.pointerLockElement === kk && (0, Lk.d)()
        }
      }), []), (0, Rk.useEffect)((() => {
        const kk = VF.current;
        null !== kk && 0 !== JF.width && 0 !== JF.height && (kk.engine.resize(), kk.needsRender = !0)
      }), [JF.width, JF.height]), (0, Rk.useEffect)((() => {
        const kk = VF.current;
        null !== kk && (kk.targetFieldOfView = GF * (LF ? Sk : 1))
      }), [GF, LF]), (0, Rk.useEffect)((() => {
        const kk = VF.current;
        null !== kk && function(kk, Fk, Bk, Rk) {
          const tk = [],
            ak = [],
            Xk = [],
            bk = [];
          for (let wk = 0; wk < Fk.count; wk++) {
            const kk = Fk.values[wk],
              dk = (0, ik.B)(kk, Bk, Rk);
            if (dk <= 0) continue;
            const [sk, Vk, Jk] = (0, ik.s)((0, ik.K)(kk, Bk)), Ak = dk >= 1;
            (Ak ? tk : Xk).push(Fk.positions[3 * wk] + .5, Fk.positions[3 * wk + 1] + .5, Fk.positions[3 * wk + 2] + .5), (Ak ? ak : bk).push(sk / 255, Vk / 255, Jk / 255, dk)
          }
          Ik(kk.cells, Float32Array.from(tk), Float32Array.from(ak), ak.length / 4), kk.translucent = {
            pa: Float32Array.from(Xk),
            colours: Float32Array.from(bk),
            count: bk.length / 4
          }, kk.translucentSortedFrom = null, Qk(kk), kk.needsRender = !0
        }(kk, cF, Bk, ck)
      }), [cF, Bk, ck]), (0, Rk.useEffect)((() => {
        const kk = VF.current;
        null !== kk && function(kk, Fk) {
          kk.chunkGridOrigin = Fk, kk.chunkGridCentre = null, nk(kk)
        }(kk, zk.min)
      }), [zk]), (0, Rk.useEffect)((() => {
        const kk = VF.current;
        null !== kk && function(kk, Fk, Bk) {
          const Rk = [],
            tk = [];
          if (null !== Fk) {
            const {
              positions: kk,
              colours: ak,
              count: Xk
            } = Fk.surface;
            for (let Fk = 0; Fk < Xk; Fk++) {
              const Xk = [kk[3 * Fk], kk[3 * Fk + 1], kk[3 * Fk + 2]];
              [0, 1, 2].every((kk => Xk[kk] >= Bk.min[kk] - Uk && Xk[kk] <= Bk.max[kk] + Uk)) && (Rk.push(Xk[0] - Bk.min[0] + .5, Xk[1] - Bk.min[1] + .5, Xk[2] - Bk.min[2] + .5), tk.push(ak[3 * Fk] / 255, ak[3 * Fk + 1] / 255, ak[3 * Fk + 2] / 255, 1))
            }
          }
          Ik(kk.schematicBlocks, Float32Array.from(Rk), Float32Array.from(tk), tk.length / 4), kk.needsRender = !0
        }(kk, hk, zk)
      }), [hk, zk]), (0, Rk.useEffect)((() => {
        const kk = VF.current;
        null !== kk && null !== kk.chunkGrid && (kk.chunkGrid.isVisible = EF, kk.needsRender = !0)
      }), [EF, zk]), (0, Rk.useEffect)((() => {
        const kk = VF.current;
        null !== kk && function(kk, Fk, Bk) {
          const {
            camera: Rk
          } = kk;
          Rk.position.set(Fk.position[0], Fk.position[1], Fk.position[2]), Rk.rotation.set(Fk.pitch, Fk.heading, 0);
          const tk = (Gk + 1) * ek.h.Ze * Math.sqrt(3);
          Rk.maxZ = Math.max(tk, Math.hypot(...bF(Fk.position, wF(aF({
            min: [0, 0, 0],
            max: Bk
          }), -1))) + 2 * Math.hypot(...Bk)), nk(kk), Qk(kk), kk.needsRender = !0
        }(kk, zF, UF)
      }), [zF, UF]), (0, Rk.useEffect)((() => {
        const kk = VF.current;
        null !== kk && (kk.targetOutline.isVisible = null !== hF, null !== hF && kk.targetOutline.position.set(hF.x - uF[0] + .5, hF.y - uF[1] + .5, hF.z - uF[2] + .5), kk.needsRender = !0)
      }), [hF, uF]);
      return (0, Ok.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: dF,
        children: [(0, Ok.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: sF,
          style: {
            width: `${JF.width}px`,
            height: `${JF.height}px`
          },
          tabIndex: 0,
          "aria-label": jk("3D heatmap"),
          onClick: () => {
            const kk = sF.current;
            if (null === kk) return;
            if (kk.focus({
                preventScroll: !0
              }), yF || !mF) return;
            const Fk = kk.requestPointerLock();
            Fk instanceof Promise ? Fk.catch((kk => {
              kk instanceof DOMException && ("WrongDocumentError" === kk.name || "NotSupportedError" === kk.name) && WF(!1)
            })) : vF.current = !0
          },
          ...qF,
          onKeyDown: kk => {
            if (oF && Hk.has(kk.code)) return kk.preventDefault(), void(() => {
              const kk = sF.current;
              null !== kk && document.pointerLockElement === kk ? (0, Lk.d)() : null === kk || void 0 === kk || kk.blur()
            })();
            const Fk = uk[kk.code];
            return oF && void 0 !== Fk ? (kk.preventDefault(), void Ck(Fk)) : oF && (0, Yk.b)("replayPlayPause", kk.code) && !(0, Yk.b)("Zoom", kk.code) ? (kk.preventDefault(), void(kk.repeat || pk())) : oF && kk.code === Mk ? (kk.preventDefault(), void Zk()) : oF && kk.code === rk ? (kk.preventDefault(), void HF(null)) : oF && kk.code === Tk ? (kk.preventDefault(), void SF((kk => !kk))) : void qF.onKeyDown(kk)
          },
          onFocus: () => {
            YF(!0)
          },
          onBlur: () => {
            YF(!1), qF.onBlur()
          }
        }), AF && (0, Ok.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: jk("3D view isn't available in this browser.")
        }), oF && (0, Ok.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, Ok.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: zF.position.map(((kk, Fk) => (kk + uF[Fk]).toFixed(2))).join(" ")
        }), EF && (0, Ok.jsx)(lk, {
          heading: zF.heading,
          pitch: zF.pitch,
          onViewFrom: kk => {
            const Fk = wF(kk, -1),
              Bk = 0 === Fk[1] ? {
                heading: Math.atan2(Fk[0], Fk[2]),
                pitch: 0
              } : {
                heading: zF.heading,
                pitch: Fk[1] < 0 ? Dk : -Dk
              };
            HF(RF(rF, TF, GF, Bk))
          },
          onTurn: (kk, Fk) => {
            HF((Bk => function(kk, Fk, Bk, Rk) {
              return tF(kk, Fk, {
                heading: kk.heading + Bk * Kk,
                pitch: Math.max(-Dk, Math.min(Dk, kk.pitch + Rk * Kk))
              })
            }(null !== Bk && void 0 !== Bk ? Bk : PF.current.fittedView, aF(rF), kk, Fk)))
          },
          onFlip: () => {
            HF((kk => function(kk, Fk) {
              return tF(kk, Fk, {
                heading: kk.heading + Math.PI,
                pitch: -kk.pitch
              })
            }(null !== kk && void 0 !== kk ? kk : PF.current.fittedView, aF(rF))))
          }
        }), null !== hF && (0, Ok.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === xk ? jk("studio:heatmapBlockReadout", {
            x: hF.x,
            y: hF.y,
            z: hF.z,
            count: (0, Ak.R)(hF.value)
          }) : xk(hF.x, hF.y, hF.z, hF.value)
        }), (0, Ok.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [qk, (0, Ok.jsx)(Wk.O, {
            active: null === NF,
            onClick: () => {
              HF(null)
            },
            children: (0, Ok.jsx)(vk.d, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function lk(kk) {
      let {
        heading: Fk,
        pitch: Bk,
        onViewFrom: tk,
        onTurn: ak,
        onFlip: Xk
      } = kk;
      const {
        t: bk
      } = (0, yk.x)(), wk = (0, Rk.useRef)(null), dk = FF({
        heading: Fk,
        pitch: Bk
      }), sk = BF(Fk), Vk = sF(dk, sk), Jk = Ck + Zk + 2, Ak = qk.flatMap((kk => [1, -1].map((Fk => {
        const Bk = wF(kk.direction, Fk);
        return {
          ...kk,
          sign: Fk,
          direction: Bk,
          endX: Jk + dF(Bk, sk) * Ck,
          endY: Jk - dF(Bk, Vk) * Ck,
          depth: dF(Bk, dk)
        }
      })))).sort(((kk, Fk) => Fk.depth - kk.depth));
      return (0, Ok.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * Jk,
        height: 2 * Jk,
        "aria-hidden": !0,
        onPointerDown: kk => {
          var Fk, Bk;
          kk.currentTarget.setPointerCapture(kk.pointerId);
          const Rk = kk.target,
            tk = Rk.getAttribute("data-end");
          wk.current = {
            pointerId: kk.pointerId,
            x: kk.clientX,
            y: kk.clientY,
            travel: 0,
            side: null === tk ? null : null !== (Fk = null === (Bk = Ak[Number(tk)]) || void 0 === Bk ? void 0 : Bk.direction) && void 0 !== Fk ? Fk : null,
            isOnMiddle: Rk.hasAttribute("data-middle")
          }
        },
        onPointerMove: kk => {
          const Fk = wk.current;
          if (null === Fk || Fk.pointerId !== kk.pointerId) return;
          const Bk = kk.clientX - Fk.x,
            Rk = kk.clientY - Fk.y;
          Fk.x = kk.clientX, Fk.y = kk.clientY, Fk.travel += Math.abs(Bk) + Math.abs(Rk), Fk.travel >= xk && ak(Bk, Rk)
        },
        onPointerUp: kk => {
          const Fk = wk.current;
          wk.current = null, null === Fk || Fk.pointerId !== kk.pointerId || Fk.travel >= xk || (null !== Fk.side ? tk(Fk.side) : Fk.isOnMiddle && Xk())
        },
        onPointerCancel: () => {
          wk.current = null
        },
        children: [Ak.map(((kk, Fk) => {
          const Bk = kk.sign > 0;
          return (0, Ok.jsxs)("g", {
            children: [(0, Ok.jsx)("line", {
              x1: Jk,
              y1: Jk,
              x2: kk.endX,
              y2: kk.endY,
              stroke: kk.colour,
              strokeOpacity: Bk ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, Ok.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": Fk,
              cx: kk.endX,
              cy: kk.endY,
              r: Bk ? Zk : Zk - 1,
              fill: kk.colour,
              fillOpacity: Bk ? 1 : .3,
              stroke: kk.colour,
              strokeWidth: Bk ? 0 : 1.5,
              children: (0, Ok.jsx)("title", {
                children: `${bk("View from")} ${Bk?"+":"\u2212"}${kk.name}`
              })
            }), Bk && (0, Ok.jsx)("text", {
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
          }, `${Bk?"+":"-"}${kk.name}`)
        })), (0, Ok.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: Jk,
          cy: Jk,
          r: pk,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, Ok.jsx)("title", {
            children: bk("View from the opposite side")
          })
        })]
      })
    }

    function nk(kk) {
      var Fk, Bk, Rk;
      const {
        chunkGridOrigin: tk,
        camera: ak
      } = kk;
      if (null === tk) return;
      const Xk = [ak.position.x, ak.position.y, ak.position.z],
        bk = [0, 2].map((kk => Math.floor((Xk[kk] + tk[kk]) / ek.h.Ze))),
        wk = kk.chunkGridCentre;
      if (null !== wk && wk.every(((kk, Fk) => kk === bk[Fk]))) return;
      const Vk = null === (Fk = null === (Bk = kk.chunkGrid) || void 0 === Bk ? void 0 : Bk.isVisible) || void 0 === Fk || Fk;
      null === (Rk = kk.chunkGrid) || void 0 === Rk || Rk.dispose();
      const [Ak, yk] = [0, 2].map(((kk, Fk) => {
        const Bk = [];
        for (let Rk = bk[Fk] - Gk; Rk <= bk[Fk] + Gk + 1; Rk++) Bk.push(Rk * ek.h.Ze - tk[kk]);
        return Bk
      })), fk = -tk[1], mk = [];
      for (const dk of yk) mk.push([new sk.Qe(Ak[0], fk, dk), new sk.Qe(Ak[Ak.length - 1], fk, dk)]);
      for (const dk of Ak) mk.push([new sk.Qe(dk, fk, yk[0]), new sk.Qe(dk, fk, yk[yk.length - 1])]);
      const Wk = (0, Jk.d)("Heatmap3DChunkGrid", {
        lines: mk
      }, kk.ef);
      Wk.color = new dk.Color3(.45, .6, .78), Wk.ff = !1, Wk.isVisible = Vk, kk.chunkGrid = Wk, kk.chunkGridCentre = bk, kk.needsRender = !0
    }

    function Ik(kk, Fk, Bk, Rk) {
      kk.x_("matrix", function(kk, Fk) {
        const Bk = new Float32Array(16 * Fk);
        for (let Rk = 0; Rk < Fk; Rk++) {
          const Fk = 16 * Rk;
          Bk[Fk] = 1, Bk[Fk + 5] = 1, Bk[Fk + 10] = 1, Bk[Fk + 12] = kk[3 * Rk], Bk[Fk + 13] = kk[3 * Rk + 1], Bk[Fk + 14] = kk[3 * Rk + 2], Bk[Fk + 15] = 1
        }
        return Bk
      }(Fk, Rk), 16, !0), kk.x_("color", Bk, 4, !0), kk.isVisible = Rk > 0
    }

    function Qk(kk) {
      const {
        camera: Fk,
        translucent: Bk
      } = kk, Rk = [Fk.position.x, Fk.position.y, Fk.position.z], tk = kk.translucentSortedFrom;
      if (null !== tk && Math.hypot(Rk[0] - tk[0], Rk[1] - tk[1], Rk[2] - tk[2]) < ck) return;
      kk.translucentSortedFrom = Rk;
      const ak = new Float64Array(Bk.count),
        Xk = new Uint32Array(Bk.count);
      for (let dk = 0; dk < Bk.count; dk++) {
        const kk = Bk.pa[3 * dk] - Rk[0],
          Fk = Bk.pa[3 * dk + 1] - Rk[1],
          tk = Bk.pa[3 * dk + 2] - Rk[2];
        ak[dk] = kk * kk + Fk * Fk + tk * tk, Xk[dk] = dk
      }
      Xk.sort(((kk, Fk) => ak[Fk] - ak[kk]));
      const bk = new Float32Array(3 * Bk.count),
        wk = new Float32Array(4 * Bk.count);
      Xk.forEach(((kk, Fk) => {
        bk.set(Bk.pa.subarray(3 * kk, 3 * kk + 3), 3 * Fk), wk.set(Bk.colours.subarray(4 * kk, 4 * kk + 4), 4 * Fk)
      })), Ik(kk.translucentCells, bk, wk, Bk.count), kk.needsRender = !0
    }

    function kF(kk, Fk) {
      const Bk = (Bk, Rk, tk) => new sk.Qe(0 === Bk ? kk[0] : Fk[0], 0 === Rk ? kk[1] : Fk[1], 0 === tk ? kk[2] : Fk[2]),
        Rk = [];
      for (const tk of [0, 1])
        for (const kk of [0, 1]) Rk.push([Bk(0, tk, kk), Bk(1, tk, kk)], [Bk(tk, 0, kk), Bk(tk, 1, kk)], [Bk(tk, kk, 0), Bk(tk, kk, 1)]);
      return Rk
    }

    function FF(kk) {
      return [Math.sin(kk.heading) * Math.cos(kk.pitch), -Math.sin(kk.pitch), Math.cos(kk.heading) * Math.cos(kk.pitch)]
    }

    function BF(kk) {
      return [Math.cos(kk), 0, -Math.sin(kk)]
    }

    function RF(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: zk,
        pitch: Pk
      };
      const tk = [kk.max[0] - kk.min[0], kk.max[1] - kk.min[1], kk.max[2] - kk.min[2]],
        ak = FF(Rk),
        Xk = BF(Rk.heading),
        bk = sF(ak, Xk),
        wk = Math.tan(Bk / 2),
        dk = wk * Fk;
      let sk = 1;
      for (const Vk of [-tk[0] / 2, tk[0] / 2])
        for (const kk of [-tk[1] / 2, tk[1] / 2])
          for (const Fk of [-tk[2] / 2, tk[2] / 2]) {
            const Bk = [Vk, kk, Fk],
              Rk = dF(Bk, ak);
            sk = Math.max(sk, Math.abs(dF(Bk, Xk)) / dk - Rk, Math.abs(dF(Bk, bk)) / wk - Rk)
          }
      return {
        position: bF([kk.min[0] + tk[0] / 2, kk.min[1] + tk[1] / 2, kk.min[2] + tk[2] / 2], wF(ak, -sk * hk)),
        heading: Rk.heading,
        pitch: Rk.pitch
      }
    }

    function tF(kk, Fk, Bk) {
      const Rk = XF(kk),
        tk = XF(Bk),
        ak = bF(kk.position, wF(Fk, -1)),
        Xk = [0, 1, 2].reduce(((kk, Fk) => bF(kk, wF(tk[Fk], dF(ak, Rk[Fk])))), [0, 0, 0]);
      return {
        position: bF(Fk, Xk),
        heading: Bk.heading,
        pitch: Bk.pitch
      }
    }

    function aF(kk) {
      return wF(bF(kk.min, kk.max), .5)
    }

    function XF(kk) {
      const Fk = FF(kk),
        Bk = BF(kk.heading);
      return [Fk, Bk, sF(Fk, Bk)]
    }

    function bF(kk, Fk) {
      return [kk[0] + Fk[0], kk[1] + Fk[1], kk[2] + Fk[2]]
    }

    function wF(kk, Fk) {
      return [kk[0] * Fk, kk[1] * Fk, kk[2] * Fk]
    }

    function dF(kk, Fk) {
      return kk[0] * Fk[0] + kk[1] * Fk[1] + kk[2] * Fk[2]
    }

    function sF(kk, Fk) {
      return [kk[1] * Fk[2] - kk[2] * Fk[1], kk[2] * Fk[0] - kk[0] * Fk[2], kk[0] * Fk[1] - kk[1] * Fk[0]]
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);