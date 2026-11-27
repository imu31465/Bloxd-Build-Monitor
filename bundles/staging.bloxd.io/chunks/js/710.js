export const id = 710;
export const ids = [710];
export const modules = {
  64790: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      rebuildScenePbrPipelines: () => qR,
      rebuildSceneRenderables: () => iR
    });
    var yR = GR(53735),
      tR = (RR, JR) => RR.order - JR.order,
      uR = 8,
      ZR = RR => iR(RR);
    async function qR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await fR(RR, "pbr", JR)
    }
    async function iR(RR) {
      await fR(RR, void 0, !1)
    }
    async function fR(RR, JR, qR) {
      const iR = RR;
      if (!iR._built && !qR) return;
      const fR = iR._lightListVersion ?? 0,
        VR = iR.surface.engine,
        KR = RR => {
          iR._z ? RR.forEach((RR => RR())) : (0, yR.e)(VR, (() => RR.forEach((RR => RR()))))
        };
      let wR = !1,
        rR = !1,
        eR = !1,
        aR = !1;
      try {
        for (let RR = 1;; RR++) {
          if (void 0 !== JR) {
            await LR();
            break
          }
          if (UR(iR), await LR(), !nR(iR)) break;
          if (RR >= uR) {
            iR._rebuildHook = ZR, aR = !0, rR = !0;
            break
          }
        }
        eR = !0
      } finally {
        if (wR && (iR._renderables.sort(tR), iR._renderableVersion++, iR._materialEpoch++, iR._built && iR._frameGraph.build()), void 0 === JR && eR && !rR && (iR._lightListVersion ?? 0) === fR) {
          const RR = iR._pendingTopologyRetirements?.splice(0);
          RR?.length && KR(RR), aR || (iR._rebuildHook = void 0)
        }
      }
      async function LR() {
        for (const [RR, yR] of iR._groups) {
          if (void 0 !== JR && RR._materialFamily !== JR) continue;
          if (0 === yR.length) {
            (yR.o || yR.r) && (WR(RR, yR), wR = !0);
            continue
          }
          const tR = iR._runtimeBuilds;
          await (tR?.wait(yR));
          let uR = !1;
          const qR = async () => {
            const JR = iR._runtimeBuilds,
              GR = [...yR].filter((JR => iR.meshes.includes(JR) && JR.material?._buildGroup === RR));
            if (0 === GR.length) return void WR(RR, yR);
            const ZR = !!yR.r,
              qR = iR._disposables.length,
              fR = new Map,
              VR = new Map(GR.map((RR => [RR, RR.material])));
            for (const RR of GR) {
              const GR = iR._meshDisposables.get(RR);
              GR && (fR.set(RR, GR), iR._meshDisposables.delete(RR), JR?.holdPendingDisposers(RR, GR))
            }
            let wR, rR;
            iR._p = RR => (rR = RR, !0);
            try {
              wR = await RR(iR, GR)
            } catch (XR) {
              rR?.[1]();
              for (const tR of GR) {
                const GR = fR.get(tR),
                  uR = iR._meshDisposables.get(tR);
                if (uR && uR !== GR)
                  for (const RR of uR) RR();
                const ZR = iR.meshes.includes(tR) && tR.material === VR.get(tR) && tR.material?._buildGroup === RR && yR.includes(tR);
                GR && ZR ? iR._meshDisposables.set(tR, GR) : (iR._meshDisposables.delete(tR), GR && KR(GR)), GR && JR?.releasePendingDisposers(tR, GR)
              }
              throw XR
            } finally {
              delete iR._p
            }
            if (iR._z || tR?._d()) {
              rR?.[1]();
              for (const JR of GR) {
                const RR = iR._meshDisposables.get(JR),
                  GR = fR.get(JR);
                if (RR && RR !== GR)
                  for (const JR of RR) JR();
                iR._meshDisposables.delete(JR)
              }
              for (const JR of iR._disposables.splice(0)) JR();
              const RR = [...fR.values()].flat();
              KR(RR);
              for (const [GR, yR] of fR) JR?.releasePendingDisposers(GR, yR);
              return
            }
            rR?.[0](), RR._rebuildSingle = wR.rebuildSingle, yR.r = iR._runtimeBuilds?.base(RR, wR.rebuildSingle) ?? wR.rebuildSingle, "pbr" === RR._materialFamily && wR._G && (yR._w = null), ZR && AR(iR, qR);
            const eR = new Set(GR.filter((JR => iR.meshes.includes(JR) && JR.material === VR.get(JR) && JR.material?._buildGroup === RR && yR.includes(JR))));
            if (eR.size !== GR.length && wR.renderables.some((RR => !RR.mesh))) {
              for (const RR of GR) {
                const GR = iR._meshDisposables.get(RR),
                  yR = fR.get(RR);
                if (GR && GR !== yR)
                  for (const RR of GR) RR();
                yR && iR.meshes.includes(RR) ? iR._meshDisposables.set(RR, yR) : (iR._meshDisposables.delete(RR), yR && KR(yR)), yR && JR?.releasePendingDisposers(RR, yR)
              }
              return void(uR = !0)
            }
            const aR = new Set;
            for (const RR of GR)
              if (eR.has(RR)) aR.add(RR.material), iR._runtimeBuilds?.reset(RR);
              else {
                const GR = fR.get(RR),
                  yR = iR._meshDisposables.get(RR);
                if (yR && yR !== GR)
                  for (const RR of yR) RR();
                GR && iR.meshes.includes(RR) ? (iR._meshDisposables.set(RR, GR), fR.delete(RR), JR?.releasePendingDisposers(RR, GR)) : iR._meshDisposables.delete(RR)
              } for (const RR of aR) RR._csmGen = (RR._csmGen ?? 0) + 1;
            const LR = yR.o,
              nR = LR?.length ? new Set(LR) : null;
            for (let RR = iR._renderables.length - 1; RR >= 0; RR--) {
              const JR = iR._renderables[RR];
              (eR.has(JR.mesh) || nR?.has(JR)) && iR._renderables.splice(RR, 1)
            }
            const UR = wR.renderables.filter((RR => !RR.mesh || eR.has(RR.mesh)));
            iR._renderables.push(...UR), yR.o = UR;
            const CR = [...fR.values()].flat();
            KR(CR);
            for (const [RR, yR] of fR) JR?.releasePendingDisposers(RR, yR)
          }, {
            X: fR
          } = await Promise.resolve().then((() => GR(64244))), VR = 3;
          for (let JR = 1;; JR++) {
            if (uR = !1, await fR(iR, RR, qR), iR._z || tR?._d()) return void(rR = !0);
            if (!uR) break;
            if (JR >= VR) {
              WR(RR, yR), iR._rebuildHook = ZR, aR = !0, rR = !0;
              break
            }
          }
          uR ? wR = !0 : wR = !0
        }
      }

      function nR(RR) {
        for (const JR of RR.meshes) {
          const GR = JR.material?._buildGroup;
          if (GR && !RR._groups.get(GR)?.includes(JR)) return !0
        }
        return !1
      }

      function UR(RR) {
        const JR = new Map;
        for (const GR of RR.meshes) {
          const RR = GR.material?._buildGroup;
          if (!RR) continue;
          const yR = JR.get(RR);
          yR ? yR.push(GR) : JR.set(RR, [GR])
        }
        for (const [GR, yR] of RR._groups) {
          const RR = JR.get(GR) ?? [];
          (yR.length !== RR.length || RR.some(((RR, JR) => yR[JR] !== RR))) && (yR.length = 0, yR.push(...RR)), JR.delete(GR)
        }
        for (const [GR, yR] of JR) {
          const JR = yR;
          RR._groups.set(GR, JR)
        }
      }

      function WR(RR, JR) {
        const GR = JR.o;
        if (GR?.length) {
          const RR = new Set(GR);
          for (let JR = iR._renderables.length - 1; JR >= 0; JR--) RR.has(iR._renderables[JR]) && iR._renderables.splice(JR, 1)
        }
        JR.o = void 0, JR.r = void 0, iR._runtimeBuilds?.dropBase(RR), iR._rebuildHook = ZR, aR = !0
      }

      function AR(RR, JR) {
        const GR = new Set(RR._disposables.slice(0, JR));
        for (let yR = RR._disposables.length - 1; yR >= JR; yR--) GR.has(RR._disposables[yR]) && RR._disposables.splice(yR, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);