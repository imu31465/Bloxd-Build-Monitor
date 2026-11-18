export const id = 375;
export const ids = [375];
export const modules = {
  60154: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      rebuildScenePbrPipelines: () => AJ,
      rebuildSceneRenderables: () => qJ
    });
    var FJ = ZJ(40448),
      UJ = (JJ, cJ) => JJ.order - cJ.order,
      eJ = 8,
      XJ = JJ => qJ(JJ);
    async function AJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await jJ(JJ, "pbr", cJ)
    }
    async function qJ(JJ) {
      await jJ(JJ, void 0, !1)
    }
    async function jJ(JJ, cJ, AJ) {
      const qJ = JJ;
      if (!qJ._built && !AJ) return;
      const jJ = qJ._lightListVersion ?? 0,
        YJ = qJ.surface.engine,
        hJ = JJ => {
          qJ._z ? JJ.forEach((JJ => JJ())) : (0, FJ.b)(YJ, (() => JJ.forEach((JJ => JJ()))))
        };
      let DJ = !1,
        sJ = !1,
        nJ = !1,
        GJ = !1;
      try {
        for (let JJ = 1;; JJ++) {
          if (void 0 !== cJ) {
            await fJ();
            break
          }
          if (rJ(qJ), await fJ(), !xJ(qJ)) break;
          if (JJ >= eJ) {
            qJ._rebuildHook = XJ, GJ = !0, sJ = !0;
            break
          }
        }
        nJ = !0
      } finally {
        if (DJ && (qJ._renderables.sort(UJ), qJ._renderableVersion++, qJ._materialEpoch++, qJ._built && qJ._frameGraph.build()), void 0 === cJ && nJ && !sJ && (qJ._lightListVersion ?? 0) === jJ) {
          const JJ = qJ._pendingTopologyRetirements?.splice(0);
          JJ?.length && hJ(JJ), GJ || (qJ._rebuildHook = void 0)
        }
      }
      async function fJ() {
        for (const [JJ, FJ] of qJ._groups) {
          if (void 0 !== cJ && JJ._materialFamily !== cJ) continue;
          if (0 === FJ.length) {
            (FJ.o || FJ.r) && (vJ(JJ, FJ), DJ = !0);
            continue
          }
          const UJ = qJ._runtimeBuilds;
          await (UJ?.wait(FJ));
          let eJ = !1;
          const AJ = async () => {
            const cJ = qJ._runtimeBuilds,
              ZJ = [...FJ].filter((cJ => qJ.meshes.includes(cJ) && cJ.material?._buildGroup === JJ));
            if (0 === ZJ.length) return void vJ(JJ, FJ);
            const XJ = !!FJ.r,
              AJ = qJ._disposables.length,
              jJ = new Map,
              YJ = new Map(ZJ.map((JJ => [JJ, JJ.material])));
            for (const JJ of ZJ) {
              const ZJ = qJ._meshDisposables.get(JJ);
              ZJ && (jJ.set(JJ, ZJ), qJ._meshDisposables.delete(JJ), cJ?.holdPendingDisposers(JJ, ZJ))
            }
            let DJ, sJ;
            qJ._p = JJ => (sJ = JJ, !0);
            try {
              DJ = await JJ(qJ, ZJ)
            } catch (EJ) {
              sJ?.[1]();
              for (const UJ of ZJ) {
                const ZJ = jJ.get(UJ),
                  eJ = qJ._meshDisposables.get(UJ);
                if (eJ && eJ !== ZJ)
                  for (const JJ of eJ) JJ();
                const XJ = qJ.meshes.includes(UJ) && UJ.material === YJ.get(UJ) && UJ.material?._buildGroup === JJ && FJ.includes(UJ);
                ZJ && XJ ? qJ._meshDisposables.set(UJ, ZJ) : (qJ._meshDisposables.delete(UJ), ZJ && hJ(ZJ)), ZJ && cJ?.releasePendingDisposers(UJ, ZJ)
              }
              throw EJ
            } finally {
              delete qJ._p
            }
            if (qJ._z || UJ?._d()) {
              sJ?.[1]();
              for (const cJ of ZJ) {
                const JJ = qJ._meshDisposables.get(cJ),
                  ZJ = jJ.get(cJ);
                if (JJ && JJ !== ZJ)
                  for (const cJ of JJ) cJ();
                qJ._meshDisposables.delete(cJ)
              }
              for (const cJ of qJ._disposables.splice(0)) cJ();
              const JJ = [...jJ.values()].flat();
              hJ(JJ);
              for (const [ZJ, FJ] of jJ) cJ?.releasePendingDisposers(ZJ, FJ);
              return
            }
            sJ?.[0](), JJ._rebuildSingle = DJ.rebuildSingle, FJ.r = qJ._runtimeBuilds?.base(JJ, DJ.rebuildSingle) ?? DJ.rebuildSingle, "pbr" === JJ._materialFamily && DJ._G && (FJ._w = null), XJ && mJ(qJ, AJ);
            const nJ = new Set(ZJ.filter((cJ => qJ.meshes.includes(cJ) && cJ.material === YJ.get(cJ) && cJ.material?._buildGroup === JJ && FJ.includes(cJ))));
            if (nJ.size !== ZJ.length && DJ.renderables.some((JJ => !JJ.mesh))) {
              for (const JJ of ZJ) {
                const ZJ = qJ._meshDisposables.get(JJ),
                  FJ = jJ.get(JJ);
                if (ZJ && ZJ !== FJ)
                  for (const JJ of ZJ) JJ();
                FJ && qJ.meshes.includes(JJ) ? qJ._meshDisposables.set(JJ, FJ) : (qJ._meshDisposables.delete(JJ), FJ && hJ(FJ)), FJ && cJ?.releasePendingDisposers(JJ, FJ)
              }
              return void(eJ = !0)
            }
            const GJ = new Set;
            for (const JJ of ZJ)
              if (nJ.has(JJ)) GJ.add(JJ.material), qJ._runtimeBuilds?.reset(JJ);
              else {
                const ZJ = jJ.get(JJ),
                  FJ = qJ._meshDisposables.get(JJ);
                if (FJ && FJ !== ZJ)
                  for (const JJ of FJ) JJ();
                ZJ && qJ.meshes.includes(JJ) ? (qJ._meshDisposables.set(JJ, ZJ), jJ.delete(JJ), cJ?.releasePendingDisposers(JJ, ZJ)) : qJ._meshDisposables.delete(JJ)
              } for (const JJ of GJ) JJ._csmGen = (JJ._csmGen ?? 0) + 1;
            const fJ = FJ.o,
              xJ = fJ?.length ? new Set(fJ) : null;
            for (let JJ = qJ._renderables.length - 1; JJ >= 0; JJ--) {
              const cJ = qJ._renderables[JJ];
              (nJ.has(cJ.mesh) || xJ?.has(cJ)) && qJ._renderables.splice(JJ, 1)
            }
            const rJ = DJ.renderables.filter((JJ => !JJ.mesh || nJ.has(JJ.mesh)));
            qJ._renderables.push(...rJ), FJ.o = rJ;
            const QJ = [...jJ.values()].flat();
            hJ(QJ);
            for (const [JJ, FJ] of jJ) cJ?.releasePendingDisposers(JJ, FJ)
          }, {
            X: jJ
          } = await Promise.resolve().then((() => ZJ(59514))), YJ = 3;
          for (let cJ = 1;; cJ++) {
            if (eJ = !1, await jJ(qJ, JJ, AJ), qJ._z || UJ?._d()) return void(sJ = !0);
            if (!eJ) break;
            if (cJ >= YJ) {
              vJ(JJ, FJ), qJ._rebuildHook = XJ, GJ = !0, sJ = !0;
              break
            }
          }
          eJ ? DJ = !0 : DJ = !0
        }
      }

      function xJ(JJ) {
        for (const cJ of JJ.meshes) {
          const ZJ = cJ.material?._buildGroup;
          if (ZJ && !JJ._groups.get(ZJ)?.includes(cJ)) return !0
        }
        return !1
      }

      function rJ(JJ) {
        const cJ = new Map;
        for (const ZJ of JJ.meshes) {
          const JJ = ZJ.material?._buildGroup;
          if (!JJ) continue;
          const FJ = cJ.get(JJ);
          FJ ? FJ.push(ZJ) : cJ.set(JJ, [ZJ])
        }
        for (const [ZJ, FJ] of JJ._groups) {
          const JJ = cJ.get(ZJ) ?? [];
          (FJ.length !== JJ.length || JJ.some(((JJ, cJ) => FJ[cJ] !== JJ))) && (FJ.length = 0, FJ.push(...JJ)), cJ.delete(ZJ)
        }
        for (const [ZJ, FJ] of cJ) {
          const cJ = FJ;
          JJ._groups.set(ZJ, cJ)
        }
      }

      function vJ(JJ, cJ) {
        const ZJ = cJ.o;
        if (ZJ?.length) {
          const JJ = new Set(ZJ);
          for (let cJ = qJ._renderables.length - 1; cJ >= 0; cJ--) JJ.has(qJ._renderables[cJ]) && qJ._renderables.splice(cJ, 1)
        }
        cJ.o = void 0, cJ.r = void 0, qJ._runtimeBuilds?.dropBase(JJ), qJ._rebuildHook = XJ, GJ = !0
      }

      function mJ(JJ, cJ) {
        const ZJ = new Set(JJ._disposables.slice(0, cJ));
        for (let FJ = JJ._disposables.length - 1; FJ >= cJ; FJ--) ZJ.has(JJ._disposables[FJ]) && JJ._disposables.splice(FJ, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);