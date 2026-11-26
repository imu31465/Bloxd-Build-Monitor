export const id = 698;
export const ids = [698];
export const modules = {
  64572: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      rebuildScenePbrPipelines: () => FU,
      rebuildSceneRenderables: () => oU
    });
    var cU = zU(44400),
      yU = (UU, XU) => UU.order - XU.order,
      QU = 8,
      AU = UU => oU(UU);
    async function FU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await DU(UU, "pbr", XU)
    }
    async function oU(UU) {
      await DU(UU, void 0, !1)
    }
    async function DU(UU, XU, FU) {
      const oU = UU;
      if (!oU._built && !FU) return;
      const DU = oU._lightListVersion ?? 0,
        EU = oU.surface.engine,
        YU = UU => {
          oU._z ? UU.forEach((UU => UU())) : (0, cU.h)(EU, (() => UU.forEach((UU => UU()))))
        };
      let NU = !1,
        IU = !1,
        pU = !1,
        aU = !1;
      try {
        for (let UU = 1;; UU++) {
          if (void 0 !== XU) {
            await tU();
            break
          }
          if (kU(oU), await tU(), !gU(oU)) break;
          if (UU >= QU) {
            oU._rebuildHook = AU, aU = !0, IU = !0;
            break
          }
        }
        pU = !0
      } finally {
        if (NU && (oU._renderables.sort(yU), oU._renderableVersion++, oU._materialEpoch++, oU._built && oU._frameGraph.build()), void 0 === XU && pU && !IU && (oU._lightListVersion ?? 0) === DU) {
          const UU = oU._pendingTopologyRetirements?.splice(0);
          UU?.length && YU(UU), aU || (oU._rebuildHook = void 0)
        }
      }
      async function tU() {
        for (const [UU, cU] of oU._groups) {
          if (void 0 !== XU && UU._materialFamily !== XU) continue;
          if (0 === cU.length) {
            (cU.o || cU.r) && (GU(UU, cU), NU = !0);
            continue
          }
          const yU = oU._runtimeBuilds;
          await (yU?.wait(cU));
          let QU = !1;
          const FU = async () => {
            const XU = oU._runtimeBuilds,
              zU = [...cU].filter((XU => oU.meshes.includes(XU) && XU.material?._buildGroup === UU));
            if (0 === zU.length) return void GU(UU, cU);
            const AU = !!cU.r,
              FU = oU._disposables.length,
              DU = new Map,
              EU = new Map(zU.map((UU => [UU, UU.material])));
            for (const UU of zU) {
              const zU = oU._meshDisposables.get(UU);
              zU && (DU.set(UU, zU), oU._meshDisposables.delete(UU), XU?.holdPendingDisposers(UU, zU))
            }
            let NU, IU;
            oU._p = UU => (IU = UU, !0);
            try {
              NU = await UU(oU, zU)
            } catch (RU) {
              IU?.[1]();
              for (const yU of zU) {
                const zU = DU.get(yU),
                  QU = oU._meshDisposables.get(yU);
                if (QU && QU !== zU)
                  for (const UU of QU) UU();
                const AU = oU.meshes.includes(yU) && yU.material === EU.get(yU) && yU.material?._buildGroup === UU && cU.includes(yU);
                zU && AU ? oU._meshDisposables.set(yU, zU) : (oU._meshDisposables.delete(yU), zU && YU(zU)), zU && XU?.releasePendingDisposers(yU, zU)
              }
              throw RU
            } finally {
              delete oU._p
            }
            if (oU._z || yU?._d()) {
              IU?.[1]();
              for (const XU of zU) {
                const UU = oU._meshDisposables.get(XU),
                  zU = DU.get(XU);
                if (UU && UU !== zU)
                  for (const XU of UU) XU();
                oU._meshDisposables.delete(XU)
              }
              for (const XU of oU._disposables.splice(0)) XU();
              const UU = [...DU.values()].flat();
              YU(UU);
              for (const [zU, cU] of DU) XU?.releasePendingDisposers(zU, cU);
              return
            }
            IU?.[0](), UU._rebuildSingle = NU.rebuildSingle, cU.r = oU._runtimeBuilds?.base(UU, NU.rebuildSingle) ?? NU.rebuildSingle, "pbr" === UU._materialFamily && NU._G && (cU._w = null), AU && BU(oU, FU);
            const pU = new Set(zU.filter((XU => oU.meshes.includes(XU) && XU.material === EU.get(XU) && XU.material?._buildGroup === UU && cU.includes(XU))));
            if (pU.size !== zU.length && NU.renderables.some((UU => !UU.mesh))) {
              for (const UU of zU) {
                const zU = oU._meshDisposables.get(UU),
                  cU = DU.get(UU);
                if (zU && zU !== cU)
                  for (const UU of zU) UU();
                cU && oU.meshes.includes(UU) ? oU._meshDisposables.set(UU, cU) : (oU._meshDisposables.delete(UU), cU && YU(cU)), cU && XU?.releasePendingDisposers(UU, cU)
              }
              return void(QU = !0)
            }
            const aU = new Set;
            for (const UU of zU)
              if (pU.has(UU)) aU.add(UU.material), oU._runtimeBuilds?.reset(UU);
              else {
                const zU = DU.get(UU),
                  cU = oU._meshDisposables.get(UU);
                if (cU && cU !== zU)
                  for (const UU of cU) UU();
                zU && oU.meshes.includes(UU) ? (oU._meshDisposables.set(UU, zU), DU.delete(UU), XU?.releasePendingDisposers(UU, zU)) : oU._meshDisposables.delete(UU)
              } for (const UU of aU) UU._csmGen = (UU._csmGen ?? 0) + 1;
            const tU = cU.o,
              gU = tU?.length ? new Set(tU) : null;
            for (let UU = oU._renderables.length - 1; UU >= 0; UU--) {
              const XU = oU._renderables[UU];
              (pU.has(XU.mesh) || gU?.has(XU)) && oU._renderables.splice(UU, 1)
            }
            const kU = NU.renderables.filter((UU => !UU.mesh || pU.has(UU.mesh)));
            oU._renderables.push(...kU), cU.o = kU;
            const ZU = [...DU.values()].flat();
            YU(ZU);
            for (const [UU, cU] of DU) XU?.releasePendingDisposers(UU, cU)
          }, {
            X: DU
          } = await Promise.resolve().then((() => zU(64045))), EU = 3;
          for (let XU = 1;; XU++) {
            if (QU = !1, await DU(oU, UU, FU), oU._z || yU?._d()) return void(IU = !0);
            if (!QU) break;
            if (XU >= EU) {
              GU(UU, cU), oU._rebuildHook = AU, aU = !0, IU = !0;
              break
            }
          }
          QU ? NU = !0 : NU = !0
        }
      }

      function gU(UU) {
        for (const XU of UU.meshes) {
          const zU = XU.material?._buildGroup;
          if (zU && !UU._groups.get(zU)?.includes(XU)) return !0
        }
        return !1
      }

      function kU(UU) {
        const XU = new Map;
        for (const zU of UU.meshes) {
          const UU = zU.material?._buildGroup;
          if (!UU) continue;
          const cU = XU.get(UU);
          cU ? cU.push(zU) : XU.set(UU, [zU])
        }
        for (const [zU, cU] of UU._groups) {
          const UU = XU.get(zU) ?? [];
          (cU.length !== UU.length || UU.some(((UU, XU) => cU[XU] !== UU))) && (cU.length = 0, cU.push(...UU)), XU.delete(zU)
        }
        for (const [zU, cU] of XU) {
          const XU = cU;
          UU._groups.set(zU, XU)
        }
      }

      function GU(UU, XU) {
        const zU = XU.o;
        if (zU?.length) {
          const UU = new Set(zU);
          for (let XU = oU._renderables.length - 1; XU >= 0; XU--) UU.has(oU._renderables[XU]) && oU._renderables.splice(XU, 1)
        }
        XU.o = void 0, XU.r = void 0, oU._runtimeBuilds?.dropBase(UU), oU._rebuildHook = AU, aU = !0
      }

      function BU(UU, XU) {
        const zU = new Set(UU._disposables.slice(0, XU));
        for (let cU = UU._disposables.length - 1; cU >= XU; cU--) zU.has(UU._disposables[cU]) && UU._disposables.splice(cU, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);