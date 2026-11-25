export const id = 397;
export const ids = [397];
export const modules = {
  62457: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      rebuildScenePbrPipelines: () => kG,
      rebuildSceneRenderables: () => UG
    });
    var wG = ZG(42155),
      SG = (GG, bG) => GG.order - bG.order,
      LG = 8,
      yG = GG => UG(GG);
    async function kG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await YG(GG, "pbr", bG)
    }
    async function UG(GG) {
      await YG(GG, void 0, !1)
    }
    async function YG(GG, bG, kG) {
      const UG = GG;
      if (!UG._built && !kG) return;
      const YG = UG._lightListVersion ?? 0,
        VG = UG.surface.engine,
        pG = GG => {
          UG._z ? GG.forEach((GG => GG())) : (0, wG.d)(VG, (() => GG.forEach((GG => GG()))))
        };
      let fG = !1,
        QG = !1,
        KG = !1,
        hG = !1;
      try {
        for (let GG = 1;; GG++) {
          if (void 0 !== bG) {
            await dG();
            break
          }
          if (rG(UG), await dG(), !JG(UG)) break;
          if (GG >= LG) {
            UG._rebuildHook = yG, hG = !0, QG = !0;
            break
          }
        }
        KG = !0
      } finally {
        if (fG && (UG._renderables.sort(SG), UG._renderableVersion++, UG._materialEpoch++, UG._built && UG._frameGraph.build()), void 0 === bG && KG && !QG && (UG._lightListVersion ?? 0) === YG) {
          const GG = UG._pendingTopologyRetirements?.splice(0);
          GG?.length && pG(GG), hG || (UG._rebuildHook = void 0)
        }
      }
      async function dG() {
        for (const [GG, wG] of UG._groups) {
          if (void 0 !== bG && GG._materialFamily !== bG) continue;
          if (0 === wG.length) {
            (wG.o || wG.r) && (zG(GG, wG), fG = !0);
            continue
          }
          const SG = UG._runtimeBuilds;
          await (SG?.wait(wG));
          let LG = !1;
          const kG = async () => {
            const bG = UG._runtimeBuilds,
              ZG = [...wG].filter((bG => UG.meshes.includes(bG) && bG.material?._buildGroup === GG));
            if (0 === ZG.length) return void zG(GG, wG);
            const yG = !!wG.r,
              kG = UG._disposables.length,
              YG = new Map,
              VG = new Map(ZG.map((GG => [GG, GG.material])));
            for (const GG of ZG) {
              const ZG = UG._meshDisposables.get(GG);
              ZG && (YG.set(GG, ZG), UG._meshDisposables.delete(GG), bG?.holdPendingDisposers(GG, ZG))
            }
            let fG, QG;
            UG._p = GG => (QG = GG, !0);
            try {
              fG = await GG(UG, ZG)
            } catch (XG) {
              QG?.[1]();
              for (const SG of ZG) {
                const ZG = YG.get(SG),
                  LG = UG._meshDisposables.get(SG);
                if (LG && LG !== ZG)
                  for (const GG of LG) GG();
                const yG = UG.meshes.includes(SG) && SG.material === VG.get(SG) && SG.material?._buildGroup === GG && wG.includes(SG);
                ZG && yG ? UG._meshDisposables.set(SG, ZG) : (UG._meshDisposables.delete(SG), ZG && pG(ZG)), ZG && bG?.releasePendingDisposers(SG, ZG)
              }
              throw XG
            } finally {
              delete UG._p
            }
            if (UG._z || SG?._d()) {
              QG?.[1]();
              for (const bG of ZG) {
                const GG = UG._meshDisposables.get(bG),
                  ZG = YG.get(bG);
                if (GG && GG !== ZG)
                  for (const bG of GG) bG();
                UG._meshDisposables.delete(bG)
              }
              for (const bG of UG._disposables.splice(0)) bG();
              const GG = [...YG.values()].flat();
              pG(GG);
              for (const [ZG, wG] of YG) bG?.releasePendingDisposers(ZG, wG);
              return
            }
            QG?.[0](), GG._rebuildSingle = fG.rebuildSingle, wG.r = UG._runtimeBuilds?.base(GG, fG.rebuildSingle) ?? fG.rebuildSingle, "pbr" === GG._materialFamily && fG._G && (wG._w = null), yG && EG(UG, kG);
            const KG = new Set(ZG.filter((bG => UG.meshes.includes(bG) && bG.material === VG.get(bG) && bG.material?._buildGroup === GG && wG.includes(bG))));
            if (KG.size !== ZG.length && fG.renderables.some((GG => !GG.mesh))) {
              for (const GG of ZG) {
                const ZG = UG._meshDisposables.get(GG),
                  wG = YG.get(GG);
                if (ZG && ZG !== wG)
                  for (const GG of ZG) GG();
                wG && UG.meshes.includes(GG) ? UG._meshDisposables.set(GG, wG) : (UG._meshDisposables.delete(GG), wG && pG(wG)), wG && bG?.releasePendingDisposers(GG, wG)
              }
              return void(LG = !0)
            }
            const hG = new Set;
            for (const GG of ZG)
              if (KG.has(GG)) hG.add(GG.material), UG._runtimeBuilds?.reset(GG);
              else {
                const ZG = YG.get(GG),
                  wG = UG._meshDisposables.get(GG);
                if (wG && wG !== ZG)
                  for (const GG of wG) GG();
                ZG && UG.meshes.includes(GG) ? (UG._meshDisposables.set(GG, ZG), YG.delete(GG), bG?.releasePendingDisposers(GG, ZG)) : UG._meshDisposables.delete(GG)
              } for (const GG of hG) GG._csmGen = (GG._csmGen ?? 0) + 1;
            const dG = wG.o,
              JG = dG?.length ? new Set(dG) : null;
            for (let GG = UG._renderables.length - 1; GG >= 0; GG--) {
              const bG = UG._renderables[GG];
              (KG.has(bG.mesh) || JG?.has(bG)) && UG._renderables.splice(GG, 1)
            }
            const rG = fG.renderables.filter((GG => !GG.mesh || KG.has(GG.mesh)));
            UG._renderables.push(...rG), wG.o = rG;
            const oG = [...YG.values()].flat();
            pG(oG);
            for (const [GG, wG] of YG) bG?.releasePendingDisposers(GG, wG)
          }, {
            X: YG
          } = await Promise.resolve().then((() => ZG(61920))), VG = 3;
          for (let bG = 1;; bG++) {
            if (LG = !1, await YG(UG, GG, kG), UG._z || SG?._d()) return void(QG = !0);
            if (!LG) break;
            if (bG >= VG) {
              zG(GG, wG), UG._rebuildHook = yG, hG = !0, QG = !0;
              break
            }
          }
          LG ? fG = !0 : fG = !0
        }
      }

      function JG(GG) {
        for (const bG of GG.meshes) {
          const ZG = bG.material?._buildGroup;
          if (ZG && !GG._groups.get(ZG)?.includes(bG)) return !0
        }
        return !1
      }

      function rG(GG) {
        const bG = new Map;
        for (const ZG of GG.meshes) {
          const GG = ZG.material?._buildGroup;
          if (!GG) continue;
          const wG = bG.get(GG);
          wG ? wG.push(ZG) : bG.set(GG, [ZG])
        }
        for (const [ZG, wG] of GG._groups) {
          const GG = bG.get(ZG) ?? [];
          (wG.length !== GG.length || GG.some(((GG, bG) => wG[bG] !== GG))) && (wG.length = 0, wG.push(...GG)), bG.delete(ZG)
        }
        for (const [ZG, wG] of bG) {
          const bG = wG;
          GG._groups.set(ZG, bG)
        }
      }

      function zG(GG, bG) {
        const ZG = bG.o;
        if (ZG?.length) {
          const GG = new Set(ZG);
          for (let bG = UG._renderables.length - 1; bG >= 0; bG--) GG.has(UG._renderables[bG]) && UG._renderables.splice(bG, 1)
        }
        bG.o = void 0, bG.r = void 0, UG._runtimeBuilds?.dropBase(GG), UG._rebuildHook = yG, hG = !0
      }

      function EG(GG, bG) {
        const ZG = new Set(GG._disposables.slice(0, bG));
        for (let wG = GG._disposables.length - 1; wG >= bG; wG--) ZG.has(GG._disposables[wG]) && GG._disposables.splice(wG, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);