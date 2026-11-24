export const id = 393;
export const ids = [393];
export const modules = {
  61643: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      rebuildScenePbrPipelines: () => LD,
      rebuildSceneRenderables: () => cD
    });
    var pD = wD(41625),
      sD = (DD, zD) => DD.order - zD.order,
      KD = 8,
      rD = DD => cD(DD);
    async function LD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await gD(DD, "pbr", zD)
    }
    async function cD(DD) {
      await gD(DD, void 0, !1)
    }
    async function gD(DD, zD, LD) {
      const cD = DD;
      if (!cD._built && !LD) return;
      const gD = cD._lightListVersion ?? 0,
        RD = cD.surface.engine,
        AD = DD => {
          cD._z ? DD.forEach((DD => DD())) : (0, pD.c)(RD, (() => DD.forEach((DD => DD()))))
        };
      let UD = !1,
        fD = !1,
        ID = !1,
        BD = !1;
      try {
        for (let DD = 1;; DD++) {
          if (void 0 !== zD) {
            await GD();
            break
          }
          if (nD(cD), await GD(), !hD(cD)) break;
          if (DD >= KD) {
            cD._rebuildHook = rD, BD = !0, fD = !0;
            break
          }
        }
        ID = !0
      } finally {
        if (UD && (cD._renderables.sort(sD), cD._renderableVersion++, cD._materialEpoch++, cD._built && cD._frameGraph.build()), void 0 === zD && ID && !fD && (cD._lightListVersion ?? 0) === gD) {
          const DD = cD._pendingTopologyRetirements?.splice(0);
          DD?.length && AD(DD), BD || (cD._rebuildHook = void 0)
        }
      }
      async function GD() {
        for (const [DD, pD] of cD._groups) {
          if (void 0 !== zD && DD._materialFamily !== zD) continue;
          if (0 === pD.length) {
            (pD.o || pD.r) && (MD(DD, pD), UD = !0);
            continue
          }
          const sD = cD._runtimeBuilds;
          await (sD?.wait(pD));
          let KD = !1;
          const LD = async () => {
            const zD = cD._runtimeBuilds,
              wD = [...pD].filter((zD => cD.meshes.includes(zD) && zD.material?._buildGroup === DD));
            if (0 === wD.length) return void MD(DD, pD);
            const rD = !!pD.r,
              LD = cD._disposables.length,
              gD = new Map,
              RD = new Map(wD.map((DD => [DD, DD.material])));
            for (const DD of wD) {
              const wD = cD._meshDisposables.get(DD);
              wD && (gD.set(DD, wD), cD._meshDisposables.delete(DD), zD?.holdPendingDisposers(DD, wD))
            }
            let UD, fD;
            cD._p = DD => (fD = DD, !0);
            try {
              UD = await DD(cD, wD)
            } catch (ED) {
              fD?.[1]();
              for (const sD of wD) {
                const wD = gD.get(sD),
                  KD = cD._meshDisposables.get(sD);
                if (KD && KD !== wD)
                  for (const DD of KD) DD();
                const rD = cD.meshes.includes(sD) && sD.material === RD.get(sD) && sD.material?._buildGroup === DD && pD.includes(sD);
                wD && rD ? cD._meshDisposables.set(sD, wD) : (cD._meshDisposables.delete(sD), wD && AD(wD)), wD && zD?.releasePendingDisposers(sD, wD)
              }
              throw ED
            } finally {
              delete cD._p
            }
            if (cD._z || sD?._d()) {
              fD?.[1]();
              for (const zD of wD) {
                const DD = cD._meshDisposables.get(zD),
                  wD = gD.get(zD);
                if (DD && DD !== wD)
                  for (const zD of DD) zD();
                cD._meshDisposables.delete(zD)
              }
              for (const zD of cD._disposables.splice(0)) zD();
              const DD = [...gD.values()].flat();
              AD(DD);
              for (const [wD, pD] of gD) zD?.releasePendingDisposers(wD, pD);
              return
            }
            fD?.[0](), DD._rebuildSingle = UD.rebuildSingle, pD.r = cD._runtimeBuilds?.base(DD, UD.rebuildSingle) ?? UD.rebuildSingle, "pbr" === DD._materialFamily && UD._G && (pD._w = null), rD && OD(cD, LD);
            const ID = new Set(wD.filter((zD => cD.meshes.includes(zD) && zD.material === RD.get(zD) && zD.material?._buildGroup === DD && pD.includes(zD))));
            if (ID.size !== wD.length && UD.renderables.some((DD => !DD.mesh))) {
              for (const DD of wD) {
                const wD = cD._meshDisposables.get(DD),
                  pD = gD.get(DD);
                if (wD && wD !== pD)
                  for (const DD of wD) DD();
                pD && cD.meshes.includes(DD) ? cD._meshDisposables.set(DD, pD) : (cD._meshDisposables.delete(DD), pD && AD(pD)), pD && zD?.releasePendingDisposers(DD, pD)
              }
              return void(KD = !0)
            }
            const BD = new Set;
            for (const DD of wD)
              if (ID.has(DD)) BD.add(DD.material), cD._runtimeBuilds?.reset(DD);
              else {
                const wD = gD.get(DD),
                  pD = cD._meshDisposables.get(DD);
                if (pD && pD !== wD)
                  for (const DD of pD) DD();
                wD && cD.meshes.includes(DD) ? (cD._meshDisposables.set(DD, wD), gD.delete(DD), zD?.releasePendingDisposers(DD, wD)) : cD._meshDisposables.delete(DD)
              } for (const DD of BD) DD._csmGen = (DD._csmGen ?? 0) + 1;
            const GD = pD.o,
              hD = GD?.length ? new Set(GD) : null;
            for (let DD = cD._renderables.length - 1; DD >= 0; DD--) {
              const zD = cD._renderables[DD];
              (ID.has(zD.mesh) || hD?.has(zD)) && cD._renderables.splice(DD, 1)
            }
            const nD = UD.renderables.filter((DD => !DD.mesh || ID.has(DD.mesh)));
            cD._renderables.push(...nD), pD.o = nD;
            const JD = [...gD.values()].flat();
            AD(JD);
            for (const [DD, pD] of gD) zD?.releasePendingDisposers(DD, pD)
          }, {
            X: gD
          } = await Promise.resolve().then((() => wD(61140))), RD = 3;
          for (let zD = 1;; zD++) {
            if (KD = !1, await gD(cD, DD, LD), cD._z || sD?._d()) return void(fD = !0);
            if (!KD) break;
            if (zD >= RD) {
              MD(DD, pD), cD._rebuildHook = rD, BD = !0, fD = !0;
              break
            }
          }
          KD ? UD = !0 : UD = !0
        }
      }

      function hD(DD) {
        for (const zD of DD.meshes) {
          const wD = zD.material?._buildGroup;
          if (wD && !DD._groups.get(wD)?.includes(zD)) return !0
        }
        return !1
      }

      function nD(DD) {
        const zD = new Map;
        for (const wD of DD.meshes) {
          const DD = wD.material?._buildGroup;
          if (!DD) continue;
          const pD = zD.get(DD);
          pD ? pD.push(wD) : zD.set(DD, [wD])
        }
        for (const [wD, pD] of DD._groups) {
          const DD = zD.get(wD) ?? [];
          (pD.length !== DD.length || DD.some(((DD, zD) => pD[zD] !== DD))) && (pD.length = 0, pD.push(...DD)), zD.delete(wD)
        }
        for (const [wD, pD] of zD) {
          const zD = pD;
          DD._groups.set(wD, zD)
        }
      }

      function MD(DD, zD) {
        const wD = zD.o;
        if (wD?.length) {
          const DD = new Set(wD);
          for (let zD = cD._renderables.length - 1; zD >= 0; zD--) DD.has(cD._renderables[zD]) && cD._renderables.splice(zD, 1)
        }
        zD.o = void 0, zD.r = void 0, cD._runtimeBuilds?.dropBase(DD), cD._rebuildHook = rD, BD = !0
      }

      function OD(DD, zD) {
        const wD = new Set(DD._disposables.slice(0, zD));
        for (let pD = DD._disposables.length - 1; pD >= zD; pD--) wD.has(DD._disposables[pD]) && DD._disposables.splice(pD, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);