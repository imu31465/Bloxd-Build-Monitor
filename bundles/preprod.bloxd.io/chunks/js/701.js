export const id = 701;
export const ids = [701];
export const modules = {
  64471: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      rebuildScenePbrPipelines: () => jB,
      rebuildSceneRenderables: () => yB
    });
    var YB = GB(44838),
      DB = (BB, OB) => BB.order - OB.order,
      QB = 8,
      oB = BB => yB(BB);
    async function jB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await JB(BB, "pbr", OB)
    }
    async function yB(BB) {
      await JB(BB, void 0, !1)
    }
    async function JB(BB, OB, jB) {
      const yB = BB;
      if (!yB._built && !jB) return;
      const JB = yB._lightListVersion ?? 0,
        MB = yB.surface.engine,
        PB = BB => {
          yB._z ? BB.forEach((BB => BB())) : (0, YB.e)(MB, (() => BB.forEach((BB => BB()))))
        };
      let zB = !1,
        lB = !1,
        pB = !1,
        qB = !1;
      try {
        for (let BB = 1;; BB++) {
          if (void 0 !== OB) {
            await ZB();
            break
          }
          if (RB(yB), await ZB(), !NB(yB)) break;
          if (BB >= QB) {
            yB._rebuildHook = oB, qB = !0, lB = !0;
            break
          }
        }
        pB = !0
      } finally {
        if (zB && (yB._renderables.sort(DB), yB._renderableVersion++, yB._materialEpoch++, yB._built && yB._frameGraph.build()), void 0 === OB && pB && !lB && (yB._lightListVersion ?? 0) === JB) {
          const BB = yB._pendingTopologyRetirements?.splice(0);
          BB?.length && PB(BB), qB || (yB._rebuildHook = void 0)
        }
      }
      async function ZB() {
        for (const [BB, YB] of yB._groups) {
          if (void 0 !== OB && BB._materialFamily !== OB) continue;
          if (0 === YB.length) {
            (YB.o || YB.r) && (WB(BB, YB), zB = !0);
            continue
          }
          const DB = yB._runtimeBuilds;
          await (DB?.wait(YB));
          let QB = !1;
          const jB = async () => {
            const OB = yB._runtimeBuilds,
              GB = [...YB].filter((OB => yB.meshes.includes(OB) && OB.material?._buildGroup === BB));
            if (0 === GB.length) return void WB(BB, YB);
            const oB = !!YB.r,
              jB = yB._disposables.length,
              JB = new Map,
              MB = new Map(GB.map((BB => [BB, BB.material])));
            for (const BB of GB) {
              const GB = yB._meshDisposables.get(BB);
              GB && (JB.set(BB, GB), yB._meshDisposables.delete(BB), OB?.holdPendingDisposers(BB, GB))
            }
            let zB, lB;
            yB._p = BB => (lB = BB, !0);
            try {
              zB = await BB(yB, GB)
            } catch (SB) {
              lB?.[1]();
              for (const DB of GB) {
                const GB = JB.get(DB),
                  QB = yB._meshDisposables.get(DB);
                if (QB && QB !== GB)
                  for (const BB of QB) BB();
                const oB = yB.meshes.includes(DB) && DB.material === MB.get(DB) && DB.material?._buildGroup === BB && YB.includes(DB);
                GB && oB ? yB._meshDisposables.set(DB, GB) : (yB._meshDisposables.delete(DB), GB && PB(GB)), GB && OB?.releasePendingDisposers(DB, GB)
              }
              throw SB
            } finally {
              delete yB._p
            }
            if (yB._z || DB?._d()) {
              lB?.[1]();
              for (const OB of GB) {
                const BB = yB._meshDisposables.get(OB),
                  GB = JB.get(OB);
                if (BB && BB !== GB)
                  for (const OB of BB) OB();
                yB._meshDisposables.delete(OB)
              }
              for (const OB of yB._disposables.splice(0)) OB();
              const BB = [...JB.values()].flat();
              PB(BB);
              for (const [GB, YB] of JB) OB?.releasePendingDisposers(GB, YB);
              return
            }
            lB?.[0](), BB._rebuildSingle = zB.rebuildSingle, YB.r = yB._runtimeBuilds?.base(BB, zB.rebuildSingle) ?? zB.rebuildSingle, "pbr" === BB._materialFamily && zB._G && (YB._w = null), oB && AB(yB, jB);
            const pB = new Set(GB.filter((OB => yB.meshes.includes(OB) && OB.material === MB.get(OB) && OB.material?._buildGroup === BB && YB.includes(OB))));
            if (pB.size !== GB.length && zB.renderables.some((BB => !BB.mesh))) {
              for (const BB of GB) {
                const GB = yB._meshDisposables.get(BB),
                  YB = JB.get(BB);
                if (GB && GB !== YB)
                  for (const BB of GB) BB();
                YB && yB.meshes.includes(BB) ? yB._meshDisposables.set(BB, YB) : (yB._meshDisposables.delete(BB), YB && PB(YB)), YB && OB?.releasePendingDisposers(BB, YB)
              }
              return void(QB = !0)
            }
            const qB = new Set;
            for (const BB of GB)
              if (pB.has(BB)) qB.add(BB.material), yB._runtimeBuilds?.reset(BB);
              else {
                const GB = JB.get(BB),
                  YB = yB._meshDisposables.get(BB);
                if (YB && YB !== GB)
                  for (const BB of YB) BB();
                GB && yB.meshes.includes(BB) ? (yB._meshDisposables.set(BB, GB), JB.delete(BB), OB?.releasePendingDisposers(BB, GB)) : yB._meshDisposables.delete(BB)
              } for (const BB of qB) BB._csmGen = (BB._csmGen ?? 0) + 1;
            const ZB = YB.o,
              NB = ZB?.length ? new Set(ZB) : null;
            for (let BB = yB._renderables.length - 1; BB >= 0; BB--) {
              const OB = yB._renderables[BB];
              (pB.has(OB.mesh) || NB?.has(OB)) && yB._renderables.splice(BB, 1)
            }
            const RB = zB.renderables.filter((BB => !BB.mesh || pB.has(BB.mesh)));
            yB._renderables.push(...RB), YB.o = RB;
            const VB = [...JB.values()].flat();
            PB(VB);
            for (const [BB, YB] of JB) OB?.releasePendingDisposers(BB, YB)
          }, {
            X: JB
          } = await Promise.resolve().then((() => GB(63982))), MB = 3;
          for (let OB = 1;; OB++) {
            if (QB = !1, await JB(yB, BB, jB), yB._z || DB?._d()) return void(lB = !0);
            if (!QB) break;
            if (OB >= MB) {
              WB(BB, YB), yB._rebuildHook = oB, qB = !0, lB = !0;
              break
            }
          }
          QB ? zB = !0 : zB = !0
        }
      }

      function NB(BB) {
        for (const OB of BB.meshes) {
          const GB = OB.material?._buildGroup;
          if (GB && !BB._groups.get(GB)?.includes(OB)) return !0
        }
        return !1
      }

      function RB(BB) {
        const OB = new Map;
        for (const GB of BB.meshes) {
          const BB = GB.material?._buildGroup;
          if (!BB) continue;
          const YB = OB.get(BB);
          YB ? YB.push(GB) : OB.set(BB, [GB])
        }
        for (const [GB, YB] of BB._groups) {
          const BB = OB.get(GB) ?? [];
          (YB.length !== BB.length || BB.some(((BB, OB) => YB[OB] !== BB))) && (YB.length = 0, YB.push(...BB)), OB.delete(GB)
        }
        for (const [GB, YB] of OB) {
          const OB = YB;
          BB._groups.set(GB, OB)
        }
      }

      function WB(BB, OB) {
        const GB = OB.o;
        if (GB?.length) {
          const BB = new Set(GB);
          for (let OB = yB._renderables.length - 1; OB >= 0; OB--) BB.has(yB._renderables[OB]) && yB._renderables.splice(OB, 1)
        }
        OB.o = void 0, OB.r = void 0, yB._runtimeBuilds?.dropBase(BB), yB._rebuildHook = oB, qB = !0
      }

      function AB(BB, OB) {
        const GB = new Set(BB._disposables.slice(0, OB));
        for (let YB = BB._disposables.length - 1; YB >= OB; YB--) GB.has(BB._disposables[YB]) && BB._disposables.splice(YB, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);