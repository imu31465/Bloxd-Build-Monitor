export const id = 397;
export const ids = [397];
export const modules = {
  61907: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      rebuildScenePbrPipelines: () => vB,
      rebuildSceneRenderables: () => kB
    });
    var TB = ZB(41742),
      JB = (BB, IB) => BB.order - IB.order,
      oB = 8,
      GB = BB => kB(BB);
    async function vB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await cB(BB, "pbr", IB)
    }
    async function kB(BB) {
      await cB(BB, void 0, !1)
    }
    async function cB(BB, IB, vB) {
      const kB = BB;
      if (!kB._built && !vB) return;
      const cB = kB._lightListVersion ?? 0,
        nB = kB.surface.engine,
        hB = BB => {
          kB._z ? BB.forEach((BB => BB())) : (0, TB.f)(nB, (() => BB.forEach((BB => BB()))))
        };
      let zB = !1,
        FB = !1,
        NB = !1,
        gB = !1;
      try {
        for (let BB = 1;; BB++) {
          if (void 0 !== IB) {
            await qB();
            break
          }
          if (UB(kB), await qB(), !yB(kB)) break;
          if (BB >= oB) {
            kB._rebuildHook = GB, gB = !0, FB = !0;
            break
          }
        }
        NB = !0
      } finally {
        if (zB && (kB._renderables.sort(JB), kB._renderableVersion++, kB._materialEpoch++, kB._built && kB._frameGraph.build()), void 0 === IB && NB && !FB && (kB._lightListVersion ?? 0) === cB) {
          const BB = kB._pendingTopologyRetirements?.splice(0);
          BB?.length && hB(BB), gB || (kB._rebuildHook = void 0)
        }
      }
      async function qB() {
        for (const [BB, TB] of kB._groups) {
          if (void 0 !== IB && BB._materialFamily !== IB) continue;
          if (0 === TB.length) {
            (TB.o || TB.r) && (WB(BB, TB), zB = !0);
            continue
          }
          const JB = kB._runtimeBuilds;
          await (JB?.wait(TB));
          let oB = !1;
          const vB = async () => {
            const IB = kB._runtimeBuilds,
              ZB = [...TB].filter((IB => kB.meshes.includes(IB) && IB.material?._buildGroup === BB));
            if (0 === ZB.length) return void WB(BB, TB);
            const GB = !!TB.r,
              vB = kB._disposables.length,
              cB = new Map,
              nB = new Map(ZB.map((BB => [BB, BB.material])));
            for (const BB of ZB) {
              const ZB = kB._meshDisposables.get(BB);
              ZB && (cB.set(BB, ZB), kB._meshDisposables.delete(BB), IB?.holdPendingDisposers(BB, ZB))
            }
            let zB, FB;
            kB._p = BB => (FB = BB, !0);
            try {
              zB = await BB(kB, ZB)
            } catch (QB) {
              FB?.[1]();
              for (const JB of ZB) {
                const ZB = cB.get(JB),
                  oB = kB._meshDisposables.get(JB);
                if (oB && oB !== ZB)
                  for (const BB of oB) BB();
                const GB = kB.meshes.includes(JB) && JB.material === nB.get(JB) && JB.material?._buildGroup === BB && TB.includes(JB);
                ZB && GB ? kB._meshDisposables.set(JB, ZB) : (kB._meshDisposables.delete(JB), ZB && hB(ZB)), ZB && IB?.releasePendingDisposers(JB, ZB)
              }
              throw QB
            } finally {
              delete kB._p
            }
            if (kB._z || JB?._d()) {
              FB?.[1]();
              for (const IB of ZB) {
                const BB = kB._meshDisposables.get(IB),
                  ZB = cB.get(IB);
                if (BB && BB !== ZB)
                  for (const IB of BB) IB();
                kB._meshDisposables.delete(IB)
              }
              for (const IB of kB._disposables.splice(0)) IB();
              const BB = [...cB.values()].flat();
              hB(BB);
              for (const [ZB, TB] of cB) IB?.releasePendingDisposers(ZB, TB);
              return
            }
            FB?.[0](), BB._rebuildSingle = zB.rebuildSingle, TB.r = kB._runtimeBuilds?.base(BB, zB.rebuildSingle) ?? zB.rebuildSingle, "pbr" === BB._materialFamily && zB._G && (TB._w = null), GB && dB(kB, vB);
            const NB = new Set(ZB.filter((IB => kB.meshes.includes(IB) && IB.material === nB.get(IB) && IB.material?._buildGroup === BB && TB.includes(IB))));
            if (NB.size !== ZB.length && zB.renderables.some((BB => !BB.mesh))) {
              for (const BB of ZB) {
                const ZB = kB._meshDisposables.get(BB),
                  TB = cB.get(BB);
                if (ZB && ZB !== TB)
                  for (const BB of ZB) BB();
                TB && kB.meshes.includes(BB) ? kB._meshDisposables.set(BB, TB) : (kB._meshDisposables.delete(BB), TB && hB(TB)), TB && IB?.releasePendingDisposers(BB, TB)
              }
              return void(oB = !0)
            }
            const gB = new Set;
            for (const BB of ZB)
              if (NB.has(BB)) gB.add(BB.material), kB._runtimeBuilds?.reset(BB);
              else {
                const ZB = cB.get(BB),
                  TB = kB._meshDisposables.get(BB);
                if (TB && TB !== ZB)
                  for (const BB of TB) BB();
                ZB && kB.meshes.includes(BB) ? (kB._meshDisposables.set(BB, ZB), cB.delete(BB), IB?.releasePendingDisposers(BB, ZB)) : kB._meshDisposables.delete(BB)
              } for (const BB of gB) BB._csmGen = (BB._csmGen ?? 0) + 1;
            const qB = TB.o,
              yB = qB?.length ? new Set(qB) : null;
            for (let BB = kB._renderables.length - 1; BB >= 0; BB--) {
              const IB = kB._renderables[BB];
              (NB.has(IB.mesh) || yB?.has(IB)) && kB._renderables.splice(BB, 1)
            }
            const UB = zB.renderables.filter((BB => !BB.mesh || NB.has(BB.mesh)));
            kB._renderables.push(...UB), TB.o = UB;
            const CB = [...cB.values()].flat();
            hB(CB);
            for (const [BB, TB] of cB) IB?.releasePendingDisposers(BB, TB)
          }, {
            X: cB
          } = await Promise.resolve().then((() => ZB(61420))), nB = 3;
          for (let IB = 1;; IB++) {
            if (oB = !1, await cB(kB, BB, vB), kB._z || JB?._d()) return void(FB = !0);
            if (!oB) break;
            if (IB >= nB) {
              WB(BB, TB), kB._rebuildHook = GB, gB = !0, FB = !0;
              break
            }
          }
          oB ? zB = !0 : zB = !0
        }
      }

      function yB(BB) {
        for (const IB of BB.meshes) {
          const ZB = IB.material?._buildGroup;
          if (ZB && !BB._groups.get(ZB)?.includes(IB)) return !0
        }
        return !1
      }

      function UB(BB) {
        const IB = new Map;
        for (const ZB of BB.meshes) {
          const BB = ZB.material?._buildGroup;
          if (!BB) continue;
          const TB = IB.get(BB);
          TB ? TB.push(ZB) : IB.set(BB, [ZB])
        }
        for (const [ZB, TB] of BB._groups) {
          const BB = IB.get(ZB) ?? [];
          (TB.length !== BB.length || BB.some(((BB, IB) => TB[IB] !== BB))) && (TB.length = 0, TB.push(...BB)), IB.delete(ZB)
        }
        for (const [ZB, TB] of IB) {
          const IB = TB;
          BB._groups.set(ZB, IB)
        }
      }

      function WB(BB, IB) {
        const ZB = IB.o;
        if (ZB?.length) {
          const BB = new Set(ZB);
          for (let IB = kB._renderables.length - 1; IB >= 0; IB--) BB.has(kB._renderables[IB]) && kB._renderables.splice(IB, 1)
        }
        IB.o = void 0, IB.r = void 0, kB._runtimeBuilds?.dropBase(BB), kB._rebuildHook = GB, gB = !0
      }

      function dB(BB, IB) {
        const ZB = new Set(BB._disposables.slice(0, IB));
        for (let TB = BB._disposables.length - 1; TB >= IB; TB--) ZB.has(BB._disposables[TB]) && BB._disposables.splice(TB, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);