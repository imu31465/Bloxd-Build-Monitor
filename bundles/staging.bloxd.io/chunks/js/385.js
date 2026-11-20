export const id = 385;
export const ids = [385];
export const modules = {
  61259: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      rebuildScenePbrPipelines: () => TU,
      rebuildSceneRenderables: () => qU
    });
    var tU = gU(41090),
      pU = (UU, RU) => UU.order - RU.order,
      EU = 8,
      PU = UU => qU(UU);
    async function TU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await KU(UU, "pbr", RU)
    }
    async function qU(UU) {
      await KU(UU, void 0, !1)
    }
    async function KU(UU, RU, TU) {
      const qU = UU;
      if (!qU._built && !TU) return;
      const KU = qU._lightListVersion ?? 0,
        cU = qU.surface.engine,
        GU = UU => {
          qU._z ? UU.forEach((UU => UU())) : (0, tU.c)(cU, (() => UU.forEach((UU => UU()))))
        };
      let jU = !1,
        uU = !1,
        CU = !1,
        hU = !1;
      try {
        for (let UU = 1;; UU++) {
          if (void 0 !== RU) {
            await QU();
            break
          }
          if (WU(qU), await QU(), !eU(qU)) break;
          if (UU >= EU) {
            qU._rebuildHook = PU, hU = !0, uU = !0;
            break
          }
        }
        CU = !0
      } finally {
        if (jU && (qU._renderables.sort(pU), qU._renderableVersion++, qU._materialEpoch++, qU._built && qU._frameGraph.build()), void 0 === RU && CU && !uU && (qU._lightListVersion ?? 0) === KU) {
          const UU = qU._pendingTopologyRetirements?.splice(0);
          UU?.length && GU(UU), hU || (qU._rebuildHook = void 0)
        }
      }
      async function QU() {
        for (const [UU, tU] of qU._groups) {
          if (void 0 !== RU && UU._materialFamily !== RU) continue;
          if (0 === tU.length) {
            (tU.o || tU.r) && (fU(UU, tU), jU = !0);
            continue
          }
          const pU = qU._runtimeBuilds;
          await (pU?.wait(tU));
          let EU = !1;
          const TU = async () => {
            const RU = qU._runtimeBuilds,
              gU = [...tU].filter((RU => qU.meshes.includes(RU) && RU.material?._buildGroup === UU));
            if (0 === gU.length) return void fU(UU, tU);
            const PU = !!tU.r,
              TU = qU._disposables.length,
              KU = new Map,
              cU = new Map(gU.map((UU => [UU, UU.material])));
            for (const UU of gU) {
              const gU = qU._meshDisposables.get(UU);
              gU && (KU.set(UU, gU), qU._meshDisposables.delete(UU), RU?.holdPendingDisposers(UU, gU))
            }
            let jU, uU;
            qU._p = UU => (uU = UU, !0);
            try {
              jU = await UU(qU, gU)
            } catch (IU) {
              uU?.[1]();
              for (const pU of gU) {
                const gU = KU.get(pU),
                  EU = qU._meshDisposables.get(pU);
                if (EU && EU !== gU)
                  for (const UU of EU) UU();
                const PU = qU.meshes.includes(pU) && pU.material === cU.get(pU) && pU.material?._buildGroup === UU && tU.includes(pU);
                gU && PU ? qU._meshDisposables.set(pU, gU) : (qU._meshDisposables.delete(pU), gU && GU(gU)), gU && RU?.releasePendingDisposers(pU, gU)
              }
              throw IU
            } finally {
              delete qU._p
            }
            if (qU._z || pU?._d()) {
              uU?.[1]();
              for (const RU of gU) {
                const UU = qU._meshDisposables.get(RU),
                  gU = KU.get(RU);
                if (UU && UU !== gU)
                  for (const RU of UU) RU();
                qU._meshDisposables.delete(RU)
              }
              for (const RU of qU._disposables.splice(0)) RU();
              const UU = [...KU.values()].flat();
              GU(UU);
              for (const [gU, tU] of KU) RU?.releasePendingDisposers(gU, tU);
              return
            }
            uU?.[0](), UU._rebuildSingle = jU.rebuildSingle, tU.r = qU._runtimeBuilds?.base(UU, jU.rebuildSingle) ?? jU.rebuildSingle, "pbr" === UU._materialFamily && jU._G && (tU._w = null), PU && xU(qU, TU);
            const CU = new Set(gU.filter((RU => qU.meshes.includes(RU) && RU.material === cU.get(RU) && RU.material?._buildGroup === UU && tU.includes(RU))));
            if (CU.size !== gU.length && jU.renderables.some((UU => !UU.mesh))) {
              for (const UU of gU) {
                const gU = qU._meshDisposables.get(UU),
                  tU = KU.get(UU);
                if (gU && gU !== tU)
                  for (const UU of gU) UU();
                tU && qU.meshes.includes(UU) ? qU._meshDisposables.set(UU, tU) : (qU._meshDisposables.delete(UU), tU && GU(tU)), tU && RU?.releasePendingDisposers(UU, tU)
              }
              return void(EU = !0)
            }
            const hU = new Set;
            for (const UU of gU)
              if (CU.has(UU)) hU.add(UU.material), qU._runtimeBuilds?.reset(UU);
              else {
                const gU = KU.get(UU),
                  tU = qU._meshDisposables.get(UU);
                if (tU && tU !== gU)
                  for (const UU of tU) UU();
                gU && qU.meshes.includes(UU) ? (qU._meshDisposables.set(UU, gU), KU.delete(UU), RU?.releasePendingDisposers(UU, gU)) : qU._meshDisposables.delete(UU)
              } for (const UU of hU) UU._csmGen = (UU._csmGen ?? 0) + 1;
            const QU = tU.o,
              eU = QU?.length ? new Set(QU) : null;
            for (let UU = qU._renderables.length - 1; UU >= 0; UU--) {
              const RU = qU._renderables[UU];
              (CU.has(RU.mesh) || eU?.has(RU)) && qU._renderables.splice(UU, 1)
            }
            const WU = jU.renderables.filter((UU => !UU.mesh || CU.has(UU.mesh)));
            qU._renderables.push(...WU), tU.o = WU;
            const mU = [...KU.values()].flat();
            GU(mU);
            for (const [UU, tU] of KU) RU?.releasePendingDisposers(UU, tU)
          }, {
            X: KU
          } = await Promise.resolve().then((() => gU(60644))), cU = 3;
          for (let RU = 1;; RU++) {
            if (EU = !1, await KU(qU, UU, TU), qU._z || pU?._d()) return void(uU = !0);
            if (!EU) break;
            if (RU >= cU) {
              fU(UU, tU), qU._rebuildHook = PU, hU = !0, uU = !0;
              break
            }
          }
          EU ? jU = !0 : jU = !0
        }
      }

      function eU(UU) {
        for (const RU of UU.meshes) {
          const gU = RU.material?._buildGroup;
          if (gU && !UU._groups.get(gU)?.includes(RU)) return !0
        }
        return !1
      }

      function WU(UU) {
        const RU = new Map;
        for (const gU of UU.meshes) {
          const UU = gU.material?._buildGroup;
          if (!UU) continue;
          const tU = RU.get(UU);
          tU ? tU.push(gU) : RU.set(UU, [gU])
        }
        for (const [gU, tU] of UU._groups) {
          const UU = RU.get(gU) ?? [];
          (tU.length !== UU.length || UU.some(((UU, RU) => tU[RU] !== UU))) && (tU.length = 0, tU.push(...UU)), RU.delete(gU)
        }
        for (const [gU, tU] of RU) {
          const RU = tU;
          UU._groups.set(gU, RU)
        }
      }

      function fU(UU, RU) {
        const gU = RU.o;
        if (gU?.length) {
          const UU = new Set(gU);
          for (let RU = qU._renderables.length - 1; RU >= 0; RU--) UU.has(qU._renderables[RU]) && qU._renderables.splice(RU, 1)
        }
        RU.o = void 0, RU.r = void 0, qU._runtimeBuilds?.dropBase(UU), qU._rebuildHook = PU, hU = !0
      }

      function xU(UU, RU) {
        const gU = new Set(UU._disposables.slice(0, RU));
        for (let tU = UU._disposables.length - 1; tU >= RU; tU--) gU.has(UU._disposables[tU]) && UU._disposables.splice(tU, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);