export const id = 701;
export const ids = [701];
export const modules = {
  64517: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      rebuildScenePbrPipelines: () => PM,
      rebuildSceneRenderables: () => nM
    });
    var OM = iM(44368),
      SM = (MM, rM) => MM.order - rM.order,
      jM = 8,
      aM = MM => nM(MM);
    async function PM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await QM(MM, "pbr", rM)
    }
    async function nM(MM) {
      await QM(MM, void 0, !1)
    }
    async function QM(MM, rM, PM) {
      const nM = MM;
      if (!nM._built && !PM) return;
      const QM = nM._lightListVersion ?? 0,
        zM = nM.surface.engine,
        LM = MM => {
          nM._z ? MM.forEach((MM => MM())) : (0, OM.g)(zM, (() => MM.forEach((MM => MM()))))
        };
      let mM = !1,
        HM = !1,
        hM = !1,
        JM = !1;
      try {
        for (let MM = 1;; MM++) {
          if (void 0 !== rM) {
            await dM();
            break
          }
          if (lM(nM), await dM(), !yM(nM)) break;
          if (MM >= jM) {
            nM._rebuildHook = aM, JM = !0, HM = !0;
            break
          }
        }
        hM = !0
      } finally {
        if (mM && (nM._renderables.sort(SM), nM._renderableVersion++, nM._materialEpoch++, nM._built && nM._frameGraph.build()), void 0 === rM && hM && !HM && (nM._lightListVersion ?? 0) === QM) {
          const MM = nM._pendingTopologyRetirements?.splice(0);
          MM?.length && LM(MM), JM || (nM._rebuildHook = void 0)
        }
      }
      async function dM() {
        for (const [MM, OM] of nM._groups) {
          if (void 0 !== rM && MM._materialFamily !== rM) continue;
          if (0 === OM.length) {
            (OM.o || OM.r) && (EM(MM, OM), mM = !0);
            continue
          }
          const SM = nM._runtimeBuilds;
          await (SM?.wait(OM));
          let jM = !1;
          const PM = async () => {
            const rM = nM._runtimeBuilds,
              iM = [...OM].filter((rM => nM.meshes.includes(rM) && rM.material?._buildGroup === MM));
            if (0 === iM.length) return void EM(MM, OM);
            const aM = !!OM.r,
              PM = nM._disposables.length,
              QM = new Map,
              zM = new Map(iM.map((MM => [MM, MM.material])));
            for (const MM of iM) {
              const iM = nM._meshDisposables.get(MM);
              iM && (QM.set(MM, iM), nM._meshDisposables.delete(MM), rM?.holdPendingDisposers(MM, iM))
            }
            let mM, HM;
            nM._p = MM => (HM = MM, !0);
            try {
              mM = await MM(nM, iM)
            } catch (CM) {
              HM?.[1]();
              for (const SM of iM) {
                const iM = QM.get(SM),
                  jM = nM._meshDisposables.get(SM);
                if (jM && jM !== iM)
                  for (const MM of jM) MM();
                const aM = nM.meshes.includes(SM) && SM.material === zM.get(SM) && SM.material?._buildGroup === MM && OM.includes(SM);
                iM && aM ? nM._meshDisposables.set(SM, iM) : (nM._meshDisposables.delete(SM), iM && LM(iM)), iM && rM?.releasePendingDisposers(SM, iM)
              }
              throw CM
            } finally {
              delete nM._p
            }
            if (nM._z || SM?._d()) {
              HM?.[1]();
              for (const rM of iM) {
                const MM = nM._meshDisposables.get(rM),
                  iM = QM.get(rM);
                if (MM && MM !== iM)
                  for (const rM of MM) rM();
                nM._meshDisposables.delete(rM)
              }
              for (const rM of nM._disposables.splice(0)) rM();
              const MM = [...QM.values()].flat();
              LM(MM);
              for (const [iM, OM] of QM) rM?.releasePendingDisposers(iM, OM);
              return
            }
            HM?.[0](), MM._rebuildSingle = mM.rebuildSingle, OM.r = nM._runtimeBuilds?.base(MM, mM.rebuildSingle) ?? mM.rebuildSingle, "pbr" === MM._materialFamily && mM._G && (OM._w = null), aM && UM(nM, PM);
            const hM = new Set(iM.filter((rM => nM.meshes.includes(rM) && rM.material === zM.get(rM) && rM.material?._buildGroup === MM && OM.includes(rM))));
            if (hM.size !== iM.length && mM.renderables.some((MM => !MM.mesh))) {
              for (const MM of iM) {
                const iM = nM._meshDisposables.get(MM),
                  OM = QM.get(MM);
                if (iM && iM !== OM)
                  for (const MM of iM) MM();
                OM && nM.meshes.includes(MM) ? nM._meshDisposables.set(MM, OM) : (nM._meshDisposables.delete(MM), OM && LM(OM)), OM && rM?.releasePendingDisposers(MM, OM)
              }
              return void(jM = !0)
            }
            const JM = new Set;
            for (const MM of iM)
              if (hM.has(MM)) JM.add(MM.material), nM._runtimeBuilds?.reset(MM);
              else {
                const iM = QM.get(MM),
                  OM = nM._meshDisposables.get(MM);
                if (OM && OM !== iM)
                  for (const MM of OM) MM();
                iM && nM.meshes.includes(MM) ? (nM._meshDisposables.set(MM, iM), QM.delete(MM), rM?.releasePendingDisposers(MM, iM)) : nM._meshDisposables.delete(MM)
              } for (const MM of JM) MM._csmGen = (MM._csmGen ?? 0) + 1;
            const dM = OM.o,
              yM = dM?.length ? new Set(dM) : null;
            for (let MM = nM._renderables.length - 1; MM >= 0; MM--) {
              const rM = nM._renderables[MM];
              (hM.has(rM.mesh) || yM?.has(rM)) && nM._renderables.splice(MM, 1)
            }
            const lM = mM.renderables.filter((MM => !MM.mesh || hM.has(MM.mesh)));
            nM._renderables.push(...lM), OM.o = lM;
            const GM = [...QM.values()].flat();
            LM(GM);
            for (const [MM, OM] of QM) rM?.releasePendingDisposers(MM, OM)
          }, {
            X: QM
          } = await Promise.resolve().then((() => iM(64015))), zM = 3;
          for (let rM = 1;; rM++) {
            if (jM = !1, await QM(nM, MM, PM), nM._z || SM?._d()) return void(HM = !0);
            if (!jM) break;
            if (rM >= zM) {
              EM(MM, OM), nM._rebuildHook = aM, JM = !0, HM = !0;
              break
            }
          }
          jM ? mM = !0 : mM = !0
        }
      }

      function yM(MM) {
        for (const rM of MM.meshes) {
          const iM = rM.material?._buildGroup;
          if (iM && !MM._groups.get(iM)?.includes(rM)) return !0
        }
        return !1
      }

      function lM(MM) {
        const rM = new Map;
        for (const iM of MM.meshes) {
          const MM = iM.material?._buildGroup;
          if (!MM) continue;
          const OM = rM.get(MM);
          OM ? OM.push(iM) : rM.set(MM, [iM])
        }
        for (const [iM, OM] of MM._groups) {
          const MM = rM.get(iM) ?? [];
          (OM.length !== MM.length || MM.some(((MM, rM) => OM[rM] !== MM))) && (OM.length = 0, OM.push(...MM)), rM.delete(iM)
        }
        for (const [iM, OM] of rM) {
          const rM = OM;
          MM._groups.set(iM, rM)
        }
      }

      function EM(MM, rM) {
        const iM = rM.o;
        if (iM?.length) {
          const MM = new Set(iM);
          for (let rM = nM._renderables.length - 1; rM >= 0; rM--) MM.has(nM._renderables[rM]) && nM._renderables.splice(rM, 1)
        }
        rM.o = void 0, rM.r = void 0, nM._runtimeBuilds?.dropBase(MM), nM._rebuildHook = aM, JM = !0
      }

      function UM(MM, rM) {
        const iM = new Set(MM._disposables.slice(0, rM));
        for (let OM = MM._disposables.length - 1; OM >= rM; OM--) iM.has(MM._disposables[OM]) && MM._disposables.splice(OM, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);