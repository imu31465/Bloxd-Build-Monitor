export const id = 375;
export const ids = [375];
export const modules = {
  60439: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      rebuildScenePbrPipelines: () => JB,
      rebuildSceneRenderables: () => YB
    });
    var VB = dB(40438),
      yB = (BB, TB) => BB.order - TB.order,
      pB = 8,
      lB = BB => YB(BB);
    async function JB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await gB(BB, "pbr", TB)
    }
    async function YB(BB) {
      await gB(BB, void 0, !1)
    }
    async function gB(BB, TB, JB) {
      const YB = BB;
      if (!YB._built && !JB) return;
      const gB = YB._lightListVersion ?? 0,
        oB = YB.surface.engine,
        kB = BB => {
          YB._z ? BB.forEach((BB => BB())) : (0, VB.b)(oB, (() => BB.forEach((BB => BB()))))
        };
      let LB = !1,
        OB = !1,
        DB = !1,
        uB = !1;
      try {
        for (let BB = 1;; BB++) {
          if (void 0 !== TB) {
            await HB();
            break
          }
          if (vB(YB), await HB(), !EB(YB)) break;
          if (BB >= pB) {
            YB._rebuildHook = lB, uB = !0, OB = !0;
            break
          }
        }
        DB = !0
      } finally {
        if (LB && (YB._renderables.sort(yB), YB._renderableVersion++, YB._materialEpoch++, YB._built && YB._frameGraph.build()), void 0 === TB && DB && !OB && (YB._lightListVersion ?? 0) === gB) {
          const BB = YB._pendingTopologyRetirements?.splice(0);
          BB?.length && kB(BB), uB || (YB._rebuildHook = void 0)
        }
      }
      async function HB() {
        for (const [BB, VB] of YB._groups) {
          if (void 0 !== TB && BB._materialFamily !== TB) continue;
          if (0 === VB.length) {
            (VB.o || VB.r) && (mB(BB, VB), LB = !0);
            continue
          }
          const yB = YB._runtimeBuilds;
          await (yB?.wait(VB));
          let pB = !1;
          const JB = async () => {
            const TB = YB._runtimeBuilds,
              dB = [...VB].filter((TB => YB.meshes.includes(TB) && TB.material?._buildGroup === BB));
            if (0 === dB.length) return void mB(BB, VB);
            const lB = !!VB.r,
              JB = YB._disposables.length,
              gB = new Map,
              oB = new Map(dB.map((BB => [BB, BB.material])));
            for (const BB of dB) {
              const dB = YB._meshDisposables.get(BB);
              dB && (gB.set(BB, dB), YB._meshDisposables.delete(BB), TB?.holdPendingDisposers(BB, dB))
            }
            let LB, OB;
            YB._p = BB => (OB = BB, !0);
            try {
              LB = await BB(YB, dB)
            } catch (tB) {
              OB?.[1]();
              for (const yB of dB) {
                const dB = gB.get(yB),
                  pB = YB._meshDisposables.get(yB);
                if (pB && pB !== dB)
                  for (const BB of pB) BB();
                const lB = YB.meshes.includes(yB) && yB.material === oB.get(yB) && yB.material?._buildGroup === BB && VB.includes(yB);
                dB && lB ? YB._meshDisposables.set(yB, dB) : (YB._meshDisposables.delete(yB), dB && kB(dB)), dB && TB?.releasePendingDisposers(yB, dB)
              }
              throw tB
            } finally {
              delete YB._p
            }
            if (YB._z || yB?._d()) {
              OB?.[1]();
              for (const TB of dB) {
                const BB = YB._meshDisposables.get(TB),
                  dB = gB.get(TB);
                if (BB && BB !== dB)
                  for (const TB of BB) TB();
                YB._meshDisposables.delete(TB)
              }
              for (const TB of YB._disposables.splice(0)) TB();
              const BB = [...gB.values()].flat();
              kB(BB);
              for (const [dB, VB] of gB) TB?.releasePendingDisposers(dB, VB);
              return
            }
            OB?.[0](), BB._rebuildSingle = LB.rebuildSingle, VB.r = YB._runtimeBuilds?.base(BB, LB.rebuildSingle) ?? LB.rebuildSingle, "pbr" === BB._materialFamily && LB._G && (VB._w = null), lB && iB(YB, JB);
            const DB = new Set(dB.filter((TB => YB.meshes.includes(TB) && TB.material === oB.get(TB) && TB.material?._buildGroup === BB && VB.includes(TB))));
            if (DB.size !== dB.length && LB.renderables.some((BB => !BB.mesh))) {
              for (const BB of dB) {
                const dB = YB._meshDisposables.get(BB),
                  VB = gB.get(BB);
                if (dB && dB !== VB)
                  for (const BB of dB) BB();
                VB && YB.meshes.includes(BB) ? YB._meshDisposables.set(BB, VB) : (YB._meshDisposables.delete(BB), VB && kB(VB)), VB && TB?.releasePendingDisposers(BB, VB)
              }
              return void(pB = !0)
            }
            const uB = new Set;
            for (const BB of dB)
              if (DB.has(BB)) uB.add(BB.material), YB._runtimeBuilds?.reset(BB);
              else {
                const dB = gB.get(BB),
                  VB = YB._meshDisposables.get(BB);
                if (VB && VB !== dB)
                  for (const BB of VB) BB();
                dB && YB.meshes.includes(BB) ? (YB._meshDisposables.set(BB, dB), gB.delete(BB), TB?.releasePendingDisposers(BB, dB)) : YB._meshDisposables.delete(BB)
              } for (const BB of uB) BB._csmGen = (BB._csmGen ?? 0) + 1;
            const HB = VB.o,
              EB = HB?.length ? new Set(HB) : null;
            for (let BB = YB._renderables.length - 1; BB >= 0; BB--) {
              const TB = YB._renderables[BB];
              (DB.has(TB.mesh) || EB?.has(TB)) && YB._renderables.splice(BB, 1)
            }
            const vB = LB.renderables.filter((BB => !BB.mesh || DB.has(BB.mesh)));
            YB._renderables.push(...vB), VB.o = vB;
            const NB = [...gB.values()].flat();
            kB(NB);
            for (const [BB, VB] of gB) TB?.releasePendingDisposers(BB, VB)
          }, {
            X: gB
          } = await Promise.resolve().then((() => dB(59823))), oB = 3;
          for (let TB = 1;; TB++) {
            if (pB = !1, await gB(YB, BB, JB), YB._z || yB?._d()) return void(OB = !0);
            if (!pB) break;
            if (TB >= oB) {
              mB(BB, VB), YB._rebuildHook = lB, uB = !0, OB = !0;
              break
            }
          }
          pB ? LB = !0 : LB = !0
        }
      }

      function EB(BB) {
        for (const TB of BB.meshes) {
          const dB = TB.material?._buildGroup;
          if (dB && !BB._groups.get(dB)?.includes(TB)) return !0
        }
        return !1
      }

      function vB(BB) {
        const TB = new Map;
        for (const dB of BB.meshes) {
          const BB = dB.material?._buildGroup;
          if (!BB) continue;
          const VB = TB.get(BB);
          VB ? VB.push(dB) : TB.set(BB, [dB])
        }
        for (const [dB, VB] of BB._groups) {
          const BB = TB.get(dB) ?? [];
          (VB.length !== BB.length || BB.some(((BB, TB) => VB[TB] !== BB))) && (VB.length = 0, VB.push(...BB)), TB.delete(dB)
        }
        for (const [dB, VB] of TB) {
          const TB = VB;
          BB._groups.set(dB, TB)
        }
      }

      function mB(BB, TB) {
        const dB = TB.o;
        if (dB?.length) {
          const BB = new Set(dB);
          for (let TB = YB._renderables.length - 1; TB >= 0; TB--) BB.has(YB._renderables[TB]) && YB._renderables.splice(TB, 1)
        }
        TB.o = void 0, TB.r = void 0, YB._runtimeBuilds?.dropBase(BB), YB._rebuildHook = lB, uB = !0
      }

      function iB(BB, TB) {
        const dB = new Set(BB._disposables.slice(0, TB));
        for (let VB = BB._disposables.length - 1; VB >= TB; VB--) dB.has(BB._disposables[VB]) && BB._disposables.splice(VB, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);