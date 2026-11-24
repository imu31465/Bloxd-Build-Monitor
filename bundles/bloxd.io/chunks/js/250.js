export const id = 250;
export const ids = [250];
export const modules = {
  39742: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => vD
    });
    wD(6507);
    var pD = wD(58),
      sD = wD(39744),
      KD = wD(40015),
      rD = wD(40137),
      LD = wD(40183),
      cD = wD(40192),
      gD = wD(37267),
      RD = wD(37070),
      AD = wD(40331),
      UD = wD(40382),
      fD = (wD(40408), wD(1232)),
      ID = wD(197),
      BD = wD(1200),
      GD = wD(20),
      hD = wD(2750),
      nD = wD(1447),
      MD = wD(1057),
      OD = wD(6504),
      JD = wD(6509),
      ED = wD(4472),
      QD = wD(1096);
    const XD = 1.2,
      VD = .2,
      PD = .0066 * Math.PI / 180,
      CD = new Set(["Escape", "KeyG"]),
      xD = {
        ArrowLeft: -1,
        ArrowRight: 1
      },
      TD = "ArrowUp",
      bD = new Set([...Object.keys(xD), TD, "ArrowDown"]),
      jD = 32,
      dD = 1,
      SD = 10,
      iD = "F4",
      lD = "Period",
      WD = Math.PI / 2 - .001,
      ND = Math.PI / 6,
      ZD = Math.PI / 6,
      yD = 1.08,
      kD = [{
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
      mD = 24,
      eD = 7,
      oD = 4,
      aD = .01,
      uD = 4;

    function vD(DD) {
      let {
        heatmap: zD,
        scale: wD,
        fullyOpaqueFrom: dD,
        bounds: ND,
        fitBounds: ZD,
        schematic: yD,
        controls: kD,
        onStepTime: mD,
        onShowAllTime: eD,
        onTogglePlaying: oD,
        getReadout: uD = null
      } = DD;
      const {
        t: vD
      } = (0, BD.E)(), {
        clientEscMenuOptions: Kz
      } = (0, GD.n)(["clientEscMenuOptions"]), cz = (0, pD.useRef)(null), gz = (0, pD.useRef)(null), Rz = (0, pD.useRef)(null), Az = (0, hD.d)(cz), [Uz, fz] = (0, pD.useState)(!1), [Iz, Bz] = (0, pD.useState)(!1), [Gz, hz] = (0, pD.useState)(!0), nz = (0, pD.useRef)(!1), [Mz, Oz] = (0, pD.useState)(!1), Jz = Iz || !Gz && Mz, [Ez, Qz] = (0, pD.useState)(!1), [Xz, Vz] = (0, pD.useState)(!0), [Pz, Cz] = (0, pD.useState)(null), xz = ND.min, [Tz, bz] = (0, pD.useState)(xz);
      Tz[0] === xz[0] && Tz[1] === xz[1] && Tz[2] === xz[2] || (bz(xz), null !== Pz && Cz({
        ...Pz,
        position: rz(Pz.position, rz(Tz, Lz(xz, -1)))
      }));
      const jz = (0, pD.useMemo)((() => function(DD) {
          return [DD.max[0] - DD.min[0] + 1, DD.max[1] - DD.min[1] + 1, DD.max[2] - DD.min[2] + 1]
        }(ND)), [ND]),
        dz = (0, pD.useMemo)((() => function(DD, zD) {
          const wD = [],
            pD = [];
          for (const [sD, KD] of Object.entries(DD.frequencies)) {
            const DD = Number(sD);
            for (const [sD, rD] of Object.entries(KD)) {
              const KD = Number(sD);
              for (const [sD, LD] of Object.entries(rD)) LD <= 0 || (wD.push(DD - zD[0], KD - zD[1], Number(sD) - zD[2]), pD.push(LD))
            }
          }
          return {
            positions: Int32Array.from(wD),
            values: Float64Array.from(pD),
            count: pD.length
          }
        }(zD, xz)), [zD, xz]),
        Sz = XD * Kz.cameraFOV / 100,
        iz = Az.height > 0 ? Az.width / Az.height : 1,
        lz = (0, pD.useMemo)((() => function(DD, zD) {
          return {
            min: [DD.min[0] - zD[0], DD.min[1] - zD[1], DD.min[2] - zD[2]],
            max: [DD.max[0] - zD[0] + 1, DD.max[1] - zD[1] + 1, DD.max[2] - zD[2] + 1]
          }
        }(ZD, xz)), [ZD, xz]),
        Wz = wz(lz, iz, Sz),
        Nz = null !== Pz && void 0 !== Pz ? Pz : Wz,
        Zz = (0, pD.useRef)({
          fittedView: Wz,
          fieldOfView: Sz,
          mouseSensitivity: Kz.mouseSensitivity,
          canLock: Gz
        });
      Zz.current = {
        fittedView: Wz,
        fieldOfView: Sz,
        mouseSensitivity: Kz.mouseSensitivity,
        canLock: Gz
      };
      const yz = (0, pD.useMemo)((() => {
          if (!Jz) return null;
          const DD = (DD, wD, pD) => {
              var sD, KD, rD;
              return null !== (sD = null === (KD = zD.frequencies[DD + xz[0]]) || void 0 === KD || null === (rD = KD[wD + xz[1]]) || void 0 === rD ? void 0 : rD[pD + xz[2]]) && void 0 !== sD ? sD : 0
            },
            pD = function(DD, zD, wD, pD) {
              let sD = 0,
                KD = 1 / 0;
              for (const AD of [0, 1, 2]) {
                if (0 === zD[AD]) {
                  if (DD[AD] < 0 || DD[AD] > wD[AD]) return null;
                  continue
                }
                const pD = (0 - DD[AD]) / zD[AD],
                  rD = (wD[AD] - DD[AD]) / zD[AD];
                sD = Math.max(sD, Math.min(pD, rD)), KD = Math.min(KD, Math.max(pD, rD))
              }
              if (sD > KD) return null;
              const rD = [0, 1, 2].map((pD => Math.min(wD[pD] - 1, Math.max(0, Math.floor(DD[pD] + zD[pD] * sD))))),
                LD = [0, 1, 2].map((DD => Math.sign(zD[DD]))),
                cD = [0, 1, 2].map((wD => {
                  if (0 === LD[wD]) return 1 / 0;
                  return ((LD[wD] > 0 ? rD[wD] + 1 : rD[wD]) - DD[wD]) / zD[wD]
                })),
                gD = [0, 1, 2].map((DD => 0 === LD[DD] ? 1 / 0 : Math.abs(1 / zD[DD])));
              let RD = null;
              for (;;) {
                const DD = pD(rD[0], rD[1], rD[2]);
                if (DD >= 1) return rD;
                DD > 0 && (RD = [rD[0], rD[1], rD[2]]);
                const zD = cD[0] < cD[1] ? cD[0] < cD[2] ? 0 : 2 : cD[1] < cD[2] ? 1 : 2;
                if (cD[zD] > KD) return RD;
                if (rD[zD] += LD[zD], cD[zD] += gD[zD], rD[zD] < 0 || rD[zD] >= wD[zD]) return RD
              }
            }(Nz.position, Dz(Nz), jz, ((zD, pD, sD) => (0, OD.v)(DD(zD, pD, sD), wD, dD)));
          return null === pD ? null : {
            x: pD[0] + xz[0],
            y: pD[1] + xz[1],
            z: pD[2] + xz[2],
            value: DD(pD[0], pD[1], pD[2])
          }
        }), [Jz, zD, xz, Nz, jz, wD, dD]),
        {
          keyHandlers: kz
        } = (0, JD.f)({
          isEnabled: Jz,
          claimedKeyCodes: bD,
          nU: DD => {
            Cz((zD => function(DD, zD) {
              const wD = [Math.sin(DD.heading), 0, Math.cos(DD.heading)],
                pD = rz(rz(Lz(wD, zD.forward), Lz(zz(DD.heading), zD.right)), [0, zD.up, 0]);
              return {
                ...DD,
                position: rz(DD.position, pD)
              }
            }(null !== zD && void 0 !== zD ? zD : Zz.current.fittedView, DD)))
          },
          onZoomChange: Qz
        });
      (0, pD.useEffect)((() => {
        const DD = gz.current;
        if (!DD) return;
        let zD;
        try {
          zD = function(DD, zD) {
            const wD = new sD.b(DD, !0, {
                stencil: !1
              }, !0),
              pD = new KD.b(wD),
              [fD, ID, BD] = OD.Q;
            pD.clearColor = new gD.e(fD / 255, ID / 255, BD / 255, 1);
            const GD = new rD.c("Heatmap3DCamera", RD.WI.Zero(), pD);
            GD.fov = zD, GD.minZ = .05;
            const hD = new LD.e("Heatmap3DLight", new RD.WI(.4, 1, -.6), pD);
            hD.diffuse = gD.Color3.White(), hD.groundColor = gD.Color3.Black(), hD.specular = gD.Color3.Black();
            const nD = new cD.StandardMaterial("Heatmap3DCellMaterial", pD);
            nD.diffuseColor = new gD.Color3(.4, .4, .4), nD.emissiveColor = new gD.Color3(.62, .62, .62), nD.specularColor = gD.Color3.Black();
            const MD = (0, AD.c)("Heatmap3DCells", {
              size: 1
            }, pD);
            MD.material = nD, MD.uB = !1, MD.lI = !0, MD.isVisible = !1;
            const JD = (0, AD.c)("Heatmap3DTranslucentCells", {
              size: 1
            }, pD);
            JD.material = nD, JD.hasVertexAlpha = !0, JD.uB = !1, JD.lI = !0, JD.isVisible = !1;
            const ED = new cD.StandardMaterial("Heatmap3DSchematicMaterial", pD);
            ED.diffuseColor = new gD.Color3(.6, .6, .6), ED.emissiveColor = new gD.Color3(.4, .4, .4), ED.specularColor = gD.Color3.Black();
            const QD = (0, AD.c)("Heatmap3DSchematicBlocks", {
              size: 1
            }, pD);
            QD.material = ED, QD.uB = !1, QD.lI = !0, QD.isVisible = !1;
            const XD = (0, UD.b)("Heatmap3DTarget", {
              lines: qD([-.52, -.52, -.52], [.52, .52, .52])
            }, pD);
            return XD.color = new gD.Color3(.06, .14, .23), XD.renderingGroupId = 1, XD.uB = !1, XD.isVisible = !1, {
              engine: wD,
              oB: pD,
              camera: GD,
              cells: MD,
              translucentCells: JD,
              translucent: {
                GA: new Float32Array(0),
                colours: new Float32Array(0),
                count: 0
              },
              translucentSortedFrom: null,
              schematicBlocks: QD,
              targetOutline: XD,
              chunkGrid: null,
              chunkGridCentre: null,
              chunkGridOrigin: null,
              targetFieldOfView: zD,
              needsRender: !0
            }
          }(DD, Zz.current.fieldOfView)
        } catch (wD) {
          return console.error("Failed to start the 3D heatmap", wD), void fz(!0)
        }
        return Rz.current = zD, zD.engine.runRenderLoop((() => {
          const DD = zD.camera;
          DD.fov !== zD.targetFieldOfView && (DD.fov += (zD.targetFieldOfView - DD.fov) * (DD.fov > zD.targetFieldOfView ? .3 : .2), Math.abs(zD.targetFieldOfView - DD.fov) < 5e-4 && (DD.fov = zD.targetFieldOfView), zD.needsRender = !0), zD.needsRender && (zD.oB.render(), zD.needsRender = !zD.oB.isReady() || !zD.engine.areAllEffectsReady())
        })), () => {
          Rz.current = null, zD.engine.dispose()
        }
      }), []), (0, pD.useEffect)((() => {
        const DD = gz.current;
        if (!DD) return;
        const zD = () => {
            nz.current = !1, Bz(document.pointerLockElement === DD)
          },
          wD = () => {
            nz.current && (nz.current = !1, hz(!1))
          },
          pD = zD => {
            const wD = !Zz.current.canLock && document.activeElement === DD && 0 !== (1 & zD.buttons);
            if (document.pointerLockElement !== DD && !wD) return;
            const pD = Zz.current.mouseSensitivity * PD;
            Cz((DD => function(DD, zD, wD) {
              const pD = 2 * Math.PI;
              return {
                ...DD,
                heading: ((DD.heading + zD) % pD + pD) % pD,
                pitch: Math.max(-WD, Math.min(WD, DD.pitch + wD))
              }
            }(null !== DD && void 0 !== DD ? DD : Zz.current.fittedView, zD.movementX * pD, zD.movementY * pD)))
          };
        return document.addEventListener("pointerlockchange", zD), document.addEventListener("pointerlockerror", wD), document.addEventListener("pointermove", pD), () => {
          document.removeEventListener("pointerlockchange", zD), document.removeEventListener("pointerlockerror", wD), document.removeEventListener("pointermove", pD), document.pointerLockElement === DD && (0, ED.c)()
        }
      }), []), (0, pD.useEffect)((() => {
        const DD = Rz.current;
        null !== DD && 0 !== Az.width && 0 !== Az.height && (DD.engine.resize(), DD.needsRender = !0)
      }), [Az.width, Az.height]), (0, pD.useEffect)((() => {
        const DD = Rz.current;
        null !== DD && (DD.targetFieldOfView = Sz * (Ez ? VD : 1))
      }), [Sz, Ez]), (0, pD.useEffect)((() => {
        const DD = Rz.current;
        null !== DD && function(DD, zD, wD, pD) {
          const sD = [],
            KD = [],
            rD = [],
            LD = [];
          for (let cD = 0; cD < zD.count; cD++) {
            const DD = zD.values[cD],
              gD = (0, OD.v)(DD, wD, pD);
            if (gD <= 0) continue;
            const [RD, AD, UD] = (0, OD.o)((0, OD.H)(DD, wD)), fD = gD >= 1;
            (fD ? sD : rD).push(zD.positions[3 * cD] + .5, zD.positions[3 * cD + 1] + .5, zD.positions[3 * cD + 2] + .5), (fD ? KD : LD).push(RD / 255, AD / 255, UD / 255, gD)
          }
          YD(DD.cells, Float32Array.from(sD), Float32Array.from(KD), KD.length / 4), DD.translucent = {
            GA: Float32Array.from(rD),
            colours: Float32Array.from(LD),
            count: LD.length / 4
          }, DD.translucentSortedFrom = null, HD(DD), DD.needsRender = !0
        }(DD, dz, wD, dD)
      }), [dz, wD, dD]), (0, pD.useEffect)((() => {
        const DD = Rz.current;
        null !== DD && function(DD, zD) {
          DD.chunkGridOrigin = zD, DD.chunkGridCentre = null, FD(DD)
        }(DD, ND.min)
      }), [ND]), (0, pD.useEffect)((() => {
        const DD = Rz.current;
        null !== DD && function(DD, zD, wD) {
          const pD = [],
            sD = [];
          if (null !== zD) {
            const {
              positions: DD,
              colours: KD,
              count: rD
            } = zD.surface;
            for (let zD = 0; zD < rD; zD++) {
              const rD = [DD[3 * zD], DD[3 * zD + 1], DD[3 * zD + 2]];
              [0, 1, 2].every((DD => rD[DD] >= wD.min[DD] - jD && rD[DD] <= wD.max[DD] + jD)) && (pD.push(rD[0] - wD.min[0] + .5, rD[1] - wD.min[1] + .5, rD[2] - wD.min[2] + .5), sD.push(KD[3 * zD] / 255, KD[3 * zD + 1] / 255, KD[3 * zD + 2] / 255, 1))
            }
          }
          YD(DD.schematicBlocks, Float32Array.from(pD), Float32Array.from(sD), sD.length / 4), DD.needsRender = !0
        }(DD, yD, ND)
      }), [yD, ND]), (0, pD.useEffect)((() => {
        const DD = Rz.current;
        null !== DD && null !== DD.chunkGrid && (DD.chunkGrid.isVisible = Xz, DD.needsRender = !0)
      }), [Xz, ND]), (0, pD.useEffect)((() => {
        const DD = Rz.current;
        null !== DD && function(DD, zD, wD) {
          const {
            camera: pD
          } = DD;
          pD.position.set(zD.position[0], zD.position[1], zD.position[2]), pD.rotation.set(zD.pitch, zD.heading, 0);
          const sD = (SD + 1) * ID.f.CI * Math.sqrt(3);
          pD.maxZ = Math.max(sD, Math.hypot(...rz(zD.position, Lz(sz({
            min: [0, 0, 0],
            max: wD
          }), -1))) + 2 * Math.hypot(...wD)), FD(DD), HD(DD), DD.needsRender = !0
        }(DD, Nz, jz)
      }), [Nz, jz]), (0, pD.useEffect)((() => {
        const DD = Rz.current;
        null !== DD && (DD.targetOutline.isVisible = null !== yz, null !== yz && DD.targetOutline.position.set(yz.x - xz[0] + .5, yz.y - xz[1] + .5, yz.z - xz[2] + .5), DD.needsRender = !0)
      }), [yz, xz]);
      return (0, QD.jsxs)("div", {
        className: "StudioHeatmapMap StudioHeatmap3D",
        ref: cz,
        children: [(0, QD.jsx)("canvas", {
          className: "StudioHeatmapMapCanvas",
          ref: gz,
          style: {
            width: `${Az.width}px`,
            height: `${Az.height}px`
          },
          tabIndex: 0,
          "aria-label": vD("3D heatmap"),
          onClick: () => {
            const DD = gz.current;
            if (null === DD) return;
            if (DD.focus({
                preventScroll: !0
              }), Iz || !Gz) return;
            const zD = DD.requestPointerLock();
            zD instanceof Promise ? zD.catch((DD => {
              DD instanceof DOMException && ("WrongDocumentError" === DD.name || "NotSupportedError" === DD.name) && hz(!1)
            })) : nz.current = !0
          },
          ...kz,
          onKeyDown: DD => {
            if (Jz && CD.has(DD.code)) return DD.preventDefault(), void(() => {
              const DD = gz.current;
              null !== DD && document.pointerLockElement === DD ? (0, ED.c)() : null === DD || void 0 === DD || DD.blur()
            })();
            const zD = xD[DD.code];
            return Jz && void 0 !== zD ? (DD.preventDefault(), void mD(zD)) : Jz && (0, JD.e)("replayPlayPause", DD.code) && !(0, JD.e)("Zoom", DD.code) ? (DD.preventDefault(), void(DD.repeat || oD())) : Jz && DD.code === TD ? (DD.preventDefault(), void eD()) : Jz && DD.code === lD ? (DD.preventDefault(), void Cz(null)) : Jz && DD.code === iD ? (DD.preventDefault(), void Vz((DD => !DD))) : void kz.onKeyDown(DD)
          },
          onFocus: () => {
            Oz(!0)
          },
          onBlur: () => {
            Oz(!1), kz.onBlur()
          }
        }), Uz && (0, QD.jsx)("div", {
          className: "StudioHeatmap3DUnavailable SmallTextLight",
          children: vD("3D view isn't available in this browser.")
        }), Jz && (0, QD.jsx)("div", {
          className: "StudioHeatmap3DCrosshair"
        }), (0, QD.jsx)("div", {
          className: "StudioHeatmap3DCoordinates SmallTextLight",
          children: Nz.position.map(((DD, zD) => (DD + xz[zD]).toFixed(2))).join(" ")
        }), Xz && (0, QD.jsx)(tD, {
          heading: Nz.heading,
          pitch: Nz.pitch,
          onViewFrom: DD => {
            const zD = Lz(DD, -1),
              wD = 0 === zD[1] ? {
                heading: Math.atan2(zD[0], zD[2]),
                pitch: 0
              } : {
                heading: Nz.heading,
                pitch: zD[1] < 0 ? WD : -WD
              };
            Cz(wz(lz, iz, Sz, wD))
          },
          onTurn: (DD, zD) => {
            Cz((wD => function(DD, zD, wD, pD) {
              return pz(DD, zD, {
                heading: DD.heading + wD * aD,
                pitch: Math.max(-WD, Math.min(WD, DD.pitch + pD * aD))
              })
            }(null !== wD && void 0 !== wD ? wD : Zz.current.fittedView, sz(lz), DD, zD)))
          },
          onFlip: () => {
            Cz((DD => function(DD, zD) {
              return pz(DD, zD, {
                heading: DD.heading + Math.PI,
                pitch: -DD.pitch
              })
            }(null !== DD && void 0 !== DD ? DD : Zz.current.fittedView, sz(lz))))
          }
        }), null !== yz && (0, QD.jsx)("div", {
          className: "StudioHeatmapMapReadout SmallTextLight",
          children: null === uD ? vD("studio:heatmapBlockReadout", {
            x: yz.x,
            y: yz.y,
            z: yz.z,
            count: (0, fD.N)(yz.value)
          }) : uD(yz.x, yz.y, yz.z, yz.value)
        }), (0, QD.jsxs)("div", {
          className: "StudioHeatmapMapControls",
          children: [kD, (0, QD.jsx)(nD.Y, {
            active: null === Pz,
            onClick: () => {
              Cz(null)
            },
            children: (0, QD.jsx)(MD.e, {
              name: "eye"
            })
          })]
        })]
      })
    }

    function tD(DD) {
      let {
        heading: zD,
        pitch: wD,
        onViewFrom: sD,
        onTurn: KD,
        onFlip: rD
      } = DD;
      const {
        t: LD
      } = (0, BD.E)(), cD = (0, pD.useRef)(null), gD = Dz({
        heading: zD,
        pitch: wD
      }), RD = zz(zD), AD = gz(gD, RD), UD = mD + eD + 2, fD = kD.flatMap((DD => [1, -1].map((zD => {
        const wD = Lz(DD.direction, zD);
        return {
          ...DD,
          sign: zD,
          direction: wD,
          endX: UD + cz(wD, RD) * mD,
          endY: UD - cz(wD, AD) * mD,
          depth: cz(wD, gD)
        }
      })))).sort(((DD, zD) => zD.depth - DD.depth));
      return (0, QD.jsxs)("svg", {
        className: "StudioHeatmap3DGizmo",
        width: 2 * UD,
        height: 2 * UD,
        "aria-hidden": !0,
        onPointerDown: DD => {
          var zD, wD;
          DD.currentTarget.setPointerCapture(DD.pointerId);
          const pD = DD.target,
            sD = pD.getAttribute("data-end");
          cD.current = {
            pointerId: DD.pointerId,
            x: DD.clientX,
            y: DD.clientY,
            travel: 0,
            side: null === sD ? null : null !== (zD = null === (wD = fD[Number(sD)]) || void 0 === wD ? void 0 : wD.direction) && void 0 !== zD ? zD : null,
            isOnMiddle: pD.hasAttribute("data-middle")
          }
        },
        onPointerMove: DD => {
          const zD = cD.current;
          if (null === zD || zD.pointerId !== DD.pointerId) return;
          const wD = DD.clientX - zD.x,
            pD = DD.clientY - zD.y;
          zD.x = DD.clientX, zD.y = DD.clientY, zD.travel += Math.abs(wD) + Math.abs(pD), zD.travel >= uD && KD(wD, pD)
        },
        onPointerUp: DD => {
          const zD = cD.current;
          cD.current = null, null === zD || zD.pointerId !== DD.pointerId || zD.travel >= uD || (null !== zD.side ? sD(zD.side) : zD.isOnMiddle && rD())
        },
        onPointerCancel: () => {
          cD.current = null
        },
        children: [fD.map(((DD, zD) => {
          const wD = DD.sign > 0;
          return (0, QD.jsxs)("g", {
            children: [(0, QD.jsx)("line", {
              x1: UD,
              y1: UD,
              x2: DD.endX,
              y2: DD.endY,
              stroke: DD.colour,
              strokeOpacity: wD ? 1 : .5,
              strokeWidth: 2,
              strokeLinecap: "round"
            }), (0, QD.jsx)("circle", {
              className: "StudioHeatmap3DGizmoEnd",
              "data-end": zD,
              cx: DD.endX,
              cy: DD.endY,
              r: wD ? eD : eD - 1,
              fill: DD.colour,
              fillOpacity: wD ? 1 : .3,
              stroke: DD.colour,
              strokeWidth: wD ? 0 : 1.5,
              children: (0, QD.jsx)("title", {
                children: `${LD("View from")} ${wD?"+":"\u2212"}${DD.name}`
              })
            }), wD && (0, QD.jsx)("text", {
              pointerEvents: "none",
              x: DD.endX,
              y: DD.endY,
              fill: "#151515",
              fontSize: 9,
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: DD.name
            })]
          }, `${wD?"+":"-"}${DD.name}`)
        })), (0, QD.jsx)("circle", {
          className: "StudioHeatmap3DGizmoEnd",
          "data-middle": !0,
          cx: UD,
          cy: UD,
          r: oD,
          fill: "#d0d0d0",
          fillOpacity: .85,
          children: (0, QD.jsx)("title", {
            children: LD("View from the opposite side")
          })
        })]
      })
    }

    function FD(DD) {
      var zD, wD, pD;
      const {
        chunkGridOrigin: sD,
        camera: KD
      } = DD;
      if (null === sD) return;
      const rD = [KD.position.x, KD.position.y, KD.position.z],
        LD = [0, 2].map((DD => Math.floor((rD[DD] + sD[DD]) / ID.f.CI))),
        cD = DD.chunkGridCentre;
      if (null !== cD && cD.every(((DD, zD) => DD === LD[zD]))) return;
      const AD = null === (zD = null === (wD = DD.chunkGrid) || void 0 === wD ? void 0 : wD.isVisible) || void 0 === zD || zD;
      null === (pD = DD.chunkGrid) || void 0 === pD || pD.dispose();
      const [fD, BD] = [0, 2].map(((DD, zD) => {
        const wD = [];
        for (let pD = LD[zD] - SD; pD <= LD[zD] + SD + 1; pD++) wD.push(pD * ID.f.CI - sD[DD]);
        return wD
      })), GD = -sD[1], hD = [];
      for (const gD of BD) hD.push([new RD.WI(fD[0], GD, gD), new RD.WI(fD[fD.length - 1], GD, gD)]);
      for (const gD of fD) hD.push([new RD.WI(gD, GD, BD[0]), new RD.WI(gD, GD, BD[BD.length - 1])]);
      const nD = (0, UD.b)("Heatmap3DChunkGrid", {
        lines: hD
      }, DD.oB);
      nD.color = new gD.Color3(.45, .6, .78), nD.uB = !1, nD.isVisible = AD, DD.chunkGrid = nD, DD.chunkGridCentre = LD, DD.needsRender = !0
    }

    function YD(DD, zD, wD, pD) {
      DD.f6("matrix", function(DD, zD) {
        const wD = new Float32Array(16 * zD);
        for (let pD = 0; pD < zD; pD++) {
          const zD = 16 * pD;
          wD[zD] = 1, wD[zD + 5] = 1, wD[zD + 10] = 1, wD[zD + 12] = DD[3 * pD], wD[zD + 13] = DD[3 * pD + 1], wD[zD + 14] = DD[3 * pD + 2], wD[zD + 15] = 1
        }
        return wD
      }(zD, pD), 16, !0), DD.f6("color", wD, 4, !0), DD.isVisible = pD > 0
    }

    function HD(DD) {
      const {
        camera: zD,
        translucent: wD
      } = DD, pD = [zD.position.x, zD.position.y, zD.position.z], sD = DD.translucentSortedFrom;
      if (null !== sD && Math.hypot(pD[0] - sD[0], pD[1] - sD[1], pD[2] - sD[2]) < dD) return;
      DD.translucentSortedFrom = pD;
      const KD = new Float64Array(wD.count),
        rD = new Uint32Array(wD.count);
      for (let gD = 0; gD < wD.count; gD++) {
        const DD = wD.GA[3 * gD] - pD[0],
          zD = wD.GA[3 * gD + 1] - pD[1],
          sD = wD.GA[3 * gD + 2] - pD[2];
        KD[gD] = DD * DD + zD * zD + sD * sD, rD[gD] = gD
      }
      rD.sort(((DD, zD) => KD[zD] - KD[DD]));
      const LD = new Float32Array(3 * wD.count),
        cD = new Float32Array(4 * wD.count);
      rD.forEach(((DD, zD) => {
        LD.set(wD.GA.subarray(3 * DD, 3 * DD + 3), 3 * zD), cD.set(wD.colours.subarray(4 * DD, 4 * DD + 4), 4 * zD)
      })), YD(DD.translucentCells, LD, cD, wD.count), DD.needsRender = !0
    }

    function qD(DD, zD) {
      const wD = (wD, pD, sD) => new RD.WI(0 === wD ? DD[0] : zD[0], 0 === pD ? DD[1] : zD[1], 0 === sD ? DD[2] : zD[2]),
        pD = [];
      for (const sD of [0, 1])
        for (const DD of [0, 1]) pD.push([wD(0, sD, DD), wD(1, sD, DD)], [wD(sD, 0, DD), wD(sD, 1, DD)], [wD(sD, DD, 0), wD(sD, DD, 1)]);
      return pD
    }

    function Dz(DD) {
      return [Math.sin(DD.heading) * Math.cos(DD.pitch), -Math.sin(DD.pitch), Math.cos(DD.heading) * Math.cos(DD.pitch)]
    }

    function zz(DD) {
      return [Math.cos(DD), 0, -Math.sin(DD)]
    }

    function wz(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        heading: ND,
        pitch: ZD
      };
      const sD = [DD.max[0] - DD.min[0], DD.max[1] - DD.min[1], DD.max[2] - DD.min[2]],
        KD = Dz(pD),
        rD = zz(pD.heading),
        LD = gz(KD, rD),
        cD = Math.tan(wD / 2),
        gD = cD * zD;
      let RD = 1;
      for (const AD of [-sD[0] / 2, sD[0] / 2])
        for (const DD of [-sD[1] / 2, sD[1] / 2])
          for (const zD of [-sD[2] / 2, sD[2] / 2]) {
            const wD = [AD, DD, zD],
              pD = cz(wD, KD);
            RD = Math.max(RD, Math.abs(cz(wD, rD)) / gD - pD, Math.abs(cz(wD, LD)) / cD - pD)
          }
      return {
        position: rz([DD.min[0] + sD[0] / 2, DD.min[1] + sD[1] / 2, DD.min[2] + sD[2] / 2], Lz(KD, -RD * yD)),
        heading: pD.heading,
        pitch: pD.pitch
      }
    }

    function pz(DD, zD, wD) {
      const pD = Kz(DD),
        sD = Kz(wD),
        KD = rz(DD.position, Lz(zD, -1)),
        rD = [0, 1, 2].reduce(((DD, zD) => rz(DD, Lz(sD[zD], cz(KD, pD[zD])))), [0, 0, 0]);
      return {
        position: rz(zD, rD),
        heading: wD.heading,
        pitch: wD.pitch
      }
    }

    function sz(DD) {
      return Lz(rz(DD.min, DD.max), .5)
    }

    function Kz(DD) {
      const zD = Dz(DD),
        wD = zz(DD.heading);
      return [zD, wD, gz(zD, wD)]
    }

    function rz(DD, zD) {
      return [DD[0] + zD[0], DD[1] + zD[1], DD[2] + zD[2]]
    }

    function Lz(DD, zD) {
      return [DD[0] * zD, DD[1] * zD, DD[2] * zD]
    }

    function cz(DD, zD) {
      return DD[0] * zD[0] + DD[1] * zD[1] + DD[2] * zD[2]
    }

    function gz(DD, zD) {
      return [DD[1] * zD[2] - DD[2] * zD[1], DD[2] * zD[0] - DD[0] * zD[2], DD[0] * zD[1] - DD[1] * zD[0]]
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);