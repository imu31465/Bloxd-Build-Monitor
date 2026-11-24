export const id = 397;
export const ids = [397];
export const modules = {
  62067: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      rebuildScenePbrPipelines: () => NB,
      rebuildSceneRenderables: () => uB
    });
    var QB = zB(41807),
      nB = (BB, jB) => BB.order - jB.order,
      dB = 8,
      IB = BB => uB(BB);
    async function NB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await UB(BB, "pbr", jB)
    }
    async function uB(BB) {
      await UB(BB, void 0, !1)
    }
    async function UB(BB, jB, NB) {
      const uB = BB;
      if (!uB._built && !NB) return;
      const UB = uB._lightListVersion ?? 0,
        aB = uB.surface.engine,
        pB = BB => {
          uB._z ? BB.forEach((BB => BB())) : (0, QB.f)(aB, (() => BB.forEach((BB => BB()))))
        };
      let rB = !1,
        sB = !1,
        JB = !1,
        mB = !1;
      try {
        for (let BB = 1;; BB++) {
          if (void 0 !== jB) {
            await yB();
            break
          }
          if (GB(uB), await yB(), !kB(uB)) break;
          if (BB >= dB) {
            uB._rebuildHook = IB, mB = !0, sB = !0;
            break
          }
        }
        JB = !0
      } finally {
        if (rB && (uB._renderables.sort(nB), uB._renderableVersion++, uB._materialEpoch++, uB._built && uB._frameGraph.build()), void 0 === jB && JB && !sB && (uB._lightListVersion ?? 0) === UB) {
          const BB = uB._pendingTopologyRetirements?.splice(0);
          BB?.length && pB(BB), mB || (uB._rebuildHook = void 0)
        }
      }
      async function yB() {
        for (const [BB, QB] of uB._groups) {
          if (void 0 !== jB && BB._materialFamily !== jB) continue;
          if (0 === QB.length) {
            (QB.o || QB.r) && (LB(BB, QB), rB = !0);
            continue
          }
          const nB = uB._runtimeBuilds;
          await (nB?.wait(QB));
          let dB = !1;
          const NB = async () => {
            const jB = uB._runtimeBuilds,
              zB = [...QB].filter((jB => uB.meshes.includes(jB) && jB.material?._buildGroup === BB));
            if (0 === zB.length) return void LB(BB, QB);
            const IB = !!QB.r,
              NB = uB._disposables.length,
              UB = new Map,
              aB = new Map(zB.map((BB => [BB, BB.material])));
            for (const BB of zB) {
              const zB = uB._meshDisposables.get(BB);
              zB && (UB.set(BB, zB), uB._meshDisposables.delete(BB), jB?.holdPendingDisposers(BB, zB))
            }
            let rB, sB;
            uB._p = BB => (sB = BB, !0);
            try {
              rB = await BB(uB, zB)
            } catch (SB) {
              sB?.[1]();
              for (const nB of zB) {
                const zB = UB.get(nB),
                  dB = uB._meshDisposables.get(nB);
                if (dB && dB !== zB)
                  for (const BB of dB) BB();
                const IB = uB.meshes.includes(nB) && nB.material === aB.get(nB) && nB.material?._buildGroup === BB && QB.includes(nB);
                zB && IB ? uB._meshDisposables.set(nB, zB) : (uB._meshDisposables.delete(nB), zB && pB(zB)), zB && jB?.releasePendingDisposers(nB, zB)
              }
              throw SB
            } finally {
              delete uB._p
            }
            if (uB._z || nB?._d()) {
              sB?.[1]();
              for (const jB of zB) {
                const BB = uB._meshDisposables.get(jB),
                  zB = UB.get(jB);
                if (BB && BB !== zB)
                  for (const jB of BB) jB();
                uB._meshDisposables.delete(jB)
              }
              for (const jB of uB._disposables.splice(0)) jB();
              const BB = [...UB.values()].flat();
              pB(BB);
              for (const [zB, QB] of UB) jB?.releasePendingDisposers(zB, QB);
              return
            }
            sB?.[0](), BB._rebuildSingle = rB.rebuildSingle, QB.r = uB._runtimeBuilds?.base(BB, rB.rebuildSingle) ?? rB.rebuildSingle, "pbr" === BB._materialFamily && rB._G && (QB._w = null), IB && gB(uB, NB);
            const JB = new Set(zB.filter((jB => uB.meshes.includes(jB) && jB.material === aB.get(jB) && jB.material?._buildGroup === BB && QB.includes(jB))));
            if (JB.size !== zB.length && rB.renderables.some((BB => !BB.mesh))) {
              for (const BB of zB) {
                const zB = uB._meshDisposables.get(BB),
                  QB = UB.get(BB);
                if (zB && zB !== QB)
                  for (const BB of zB) BB();
                QB && uB.meshes.includes(BB) ? uB._meshDisposables.set(BB, QB) : (uB._meshDisposables.delete(BB), QB && pB(QB)), QB && jB?.releasePendingDisposers(BB, QB)
              }
              return void(dB = !0)
            }
            const mB = new Set;
            for (const BB of zB)
              if (JB.has(BB)) mB.add(BB.material), uB._runtimeBuilds?.reset(BB);
              else {
                const zB = UB.get(BB),
                  QB = uB._meshDisposables.get(BB);
                if (QB && QB !== zB)
                  for (const BB of QB) BB();
                zB && uB.meshes.includes(BB) ? (uB._meshDisposables.set(BB, zB), UB.delete(BB), jB?.releasePendingDisposers(BB, zB)) : uB._meshDisposables.delete(BB)
              } for (const BB of mB) BB._csmGen = (BB._csmGen ?? 0) + 1;
            const yB = QB.o,
              kB = yB?.length ? new Set(yB) : null;
            for (let BB = uB._renderables.length - 1; BB >= 0; BB--) {
              const jB = uB._renderables[BB];
              (JB.has(jB.mesh) || kB?.has(jB)) && uB._renderables.splice(BB, 1)
            }
            const GB = rB.renderables.filter((BB => !BB.mesh || JB.has(BB.mesh)));
            uB._renderables.push(...GB), QB.o = GB;
            const tB = [...UB.values()].flat();
            pB(tB);
            for (const [BB, QB] of UB) jB?.releasePendingDisposers(BB, QB)
          }, {
            X: UB
          } = await Promise.resolve().then((() => zB(61536))), aB = 3;
          for (let jB = 1;; jB++) {
            if (dB = !1, await UB(uB, BB, NB), uB._z || nB?._d()) return void(sB = !0);
            if (!dB) break;
            if (jB >= aB) {
              LB(BB, QB), uB._rebuildHook = IB, mB = !0, sB = !0;
              break
            }
          }
          dB ? rB = !0 : rB = !0
        }
      }

      function kB(BB) {
        for (const jB of BB.meshes) {
          const zB = jB.material?._buildGroup;
          if (zB && !BB._groups.get(zB)?.includes(jB)) return !0
        }
        return !1
      }

      function GB(BB) {
        const jB = new Map;
        for (const zB of BB.meshes) {
          const BB = zB.material?._buildGroup;
          if (!BB) continue;
          const QB = jB.get(BB);
          QB ? QB.push(zB) : jB.set(BB, [zB])
        }
        for (const [zB, QB] of BB._groups) {
          const BB = jB.get(zB) ?? [];
          (QB.length !== BB.length || BB.some(((BB, jB) => QB[jB] !== BB))) && (QB.length = 0, QB.push(...BB)), jB.delete(zB)
        }
        for (const [zB, QB] of jB) {
          const jB = QB;
          BB._groups.set(zB, jB)
        }
      }

      function LB(BB, jB) {
        const zB = jB.o;
        if (zB?.length) {
          const BB = new Set(zB);
          for (let jB = uB._renderables.length - 1; jB >= 0; jB--) BB.has(uB._renderables[jB]) && uB._renderables.splice(jB, 1)
        }
        jB.o = void 0, jB.r = void 0, uB._runtimeBuilds?.dropBase(BB), uB._rebuildHook = IB, mB = !0
      }

      function gB(BB, jB) {
        const zB = new Set(BB._disposables.slice(0, jB));
        for (let QB = BB._disposables.length - 1; QB >= jB; QB--) zB.has(BB._disposables[QB]) && BB._disposables.splice(QB, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);