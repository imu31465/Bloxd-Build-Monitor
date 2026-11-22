export const id = 392;
export const ids = [392];
export const modules = {
  61323: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      rebuildScenePbrPipelines: () => rk,
      rebuildSceneRenderables: () => Pk
    });
    var Dk = ik(41307),
      fk = (kk, ek) => kk.order - ek.order,
      Sk = 8,
      bk = kk => Pk(kk);
    async function rk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await mk(kk, "pbr", ek)
    }
    async function Pk(kk) {
      await mk(kk, void 0, !1)
    }
    async function mk(kk, ek, rk) {
      const Pk = kk;
      if (!Pk._built && !rk) return;
      const mk = Pk._lightListVersion ?? 0,
        Mk = Pk.surface.engine,
        Kk = kk => {
          Pk._z ? kk.forEach((kk => kk())) : (0, Dk.e)(Mk, (() => kk.forEach((kk => kk()))))
        };
      let xk = !1,
        nk = !1,
        Uk = !1,
        Hk = !1;
      try {
        for (let kk = 1;; kk++) {
          if (void 0 !== ek) {
            await wk();
            break
          }
          if (pk(Pk), await wk(), !lk(Pk)) break;
          if (kk >= Sk) {
            Pk._rebuildHook = bk, Hk = !0, nk = !0;
            break
          }
        }
        Uk = !0
      } finally {
        if (xk && (Pk._renderables.sort(fk), Pk._renderableVersion++, Pk._materialEpoch++, Pk._built && Pk._frameGraph.build()), void 0 === ek && Uk && !nk && (Pk._lightListVersion ?? 0) === mk) {
          const kk = Pk._pendingTopologyRetirements?.splice(0);
          kk?.length && Kk(kk), Hk || (Pk._rebuildHook = void 0)
        }
      }
      async function wk() {
        for (const [kk, Dk] of Pk._groups) {
          if (void 0 !== ek && kk._materialFamily !== ek) continue;
          if (0 === Dk.length) {
            (Dk.o || Dk.r) && (yk(kk, Dk), xk = !0);
            continue
          }
          const fk = Pk._runtimeBuilds;
          await (fk?.wait(Dk));
          let Sk = !1;
          const rk = async () => {
            const ek = Pk._runtimeBuilds,
              ik = [...Dk].filter((ek => Pk.meshes.includes(ek) && ek.material?._buildGroup === kk));
            if (0 === ik.length) return void yk(kk, Dk);
            const bk = !!Dk.r,
              rk = Pk._disposables.length,
              mk = new Map,
              Mk = new Map(ik.map((kk => [kk, kk.material])));
            for (const kk of ik) {
              const ik = Pk._meshDisposables.get(kk);
              ik && (mk.set(kk, ik), Pk._meshDisposables.delete(kk), ek?.holdPendingDisposers(kk, ik))
            }
            let xk, nk;
            Pk._p = kk => (nk = kk, !0);
            try {
              xk = await kk(Pk, ik)
            } catch (Ck) {
              nk?.[1]();
              for (const fk of ik) {
                const ik = mk.get(fk),
                  Sk = Pk._meshDisposables.get(fk);
                if (Sk && Sk !== ik)
                  for (const kk of Sk) kk();
                const bk = Pk.meshes.includes(fk) && fk.material === Mk.get(fk) && fk.material?._buildGroup === kk && Dk.includes(fk);
                ik && bk ? Pk._meshDisposables.set(fk, ik) : (Pk._meshDisposables.delete(fk), ik && Kk(ik)), ik && ek?.releasePendingDisposers(fk, ik)
              }
              throw Ck
            } finally {
              delete Pk._p
            }
            if (Pk._z || fk?._d()) {
              nk?.[1]();
              for (const ek of ik) {
                const kk = Pk._meshDisposables.get(ek),
                  ik = mk.get(ek);
                if (kk && kk !== ik)
                  for (const ek of kk) ek();
                Pk._meshDisposables.delete(ek)
              }
              for (const ek of Pk._disposables.splice(0)) ek();
              const kk = [...mk.values()].flat();
              Kk(kk);
              for (const [ik, Dk] of mk) ek?.releasePendingDisposers(ik, Dk);
              return
            }
            nk?.[0](), kk._rebuildSingle = xk.rebuildSingle, Dk.r = Pk._runtimeBuilds?.base(kk, xk.rebuildSingle) ?? xk.rebuildSingle, "pbr" === kk._materialFamily && xk._G && (Dk._w = null), bk && Yk(Pk, rk);
            const Uk = new Set(ik.filter((ek => Pk.meshes.includes(ek) && ek.material === Mk.get(ek) && ek.material?._buildGroup === kk && Dk.includes(ek))));
            if (Uk.size !== ik.length && xk.renderables.some((kk => !kk.mesh))) {
              for (const kk of ik) {
                const ik = Pk._meshDisposables.get(kk),
                  Dk = mk.get(kk);
                if (ik && ik !== Dk)
                  for (const kk of ik) kk();
                Dk && Pk.meshes.includes(kk) ? Pk._meshDisposables.set(kk, Dk) : (Pk._meshDisposables.delete(kk), Dk && Kk(Dk)), Dk && ek?.releasePendingDisposers(kk, Dk)
              }
              return void(Sk = !0)
            }
            const Hk = new Set;
            for (const kk of ik)
              if (Uk.has(kk)) Hk.add(kk.material), Pk._runtimeBuilds?.reset(kk);
              else {
                const ik = mk.get(kk),
                  Dk = Pk._meshDisposables.get(kk);
                if (Dk && Dk !== ik)
                  for (const kk of Dk) kk();
                ik && Pk.meshes.includes(kk) ? (Pk._meshDisposables.set(kk, ik), mk.delete(kk), ek?.releasePendingDisposers(kk, ik)) : Pk._meshDisposables.delete(kk)
              } for (const kk of Hk) kk._csmGen = (kk._csmGen ?? 0) + 1;
            const wk = Dk.o,
              lk = wk?.length ? new Set(wk) : null;
            for (let kk = Pk._renderables.length - 1; kk >= 0; kk--) {
              const ek = Pk._renderables[kk];
              (Uk.has(ek.mesh) || lk?.has(ek)) && Pk._renderables.splice(kk, 1)
            }
            const pk = xk.renderables.filter((kk => !kk.mesh || Uk.has(kk.mesh)));
            Pk._renderables.push(...pk), Dk.o = pk;
            const Lk = [...mk.values()].flat();
            Kk(Lk);
            for (const [kk, Dk] of mk) ek?.releasePendingDisposers(kk, Dk)
          }, {
            X: mk
          } = await Promise.resolve().then((() => ik(60780))), Mk = 3;
          for (let ek = 1;; ek++) {
            if (Sk = !1, await mk(Pk, kk, rk), Pk._z || fk?._d()) return void(nk = !0);
            if (!Sk) break;
            if (ek >= Mk) {
              yk(kk, Dk), Pk._rebuildHook = bk, Hk = !0, nk = !0;
              break
            }
          }
          Sk ? xk = !0 : xk = !0
        }
      }

      function lk(kk) {
        for (const ek of kk.meshes) {
          const ik = ek.material?._buildGroup;
          if (ik && !kk._groups.get(ik)?.includes(ek)) return !0
        }
        return !1
      }

      function pk(kk) {
        const ek = new Map;
        for (const ik of kk.meshes) {
          const kk = ik.material?._buildGroup;
          if (!kk) continue;
          const Dk = ek.get(kk);
          Dk ? Dk.push(ik) : ek.set(kk, [ik])
        }
        for (const [ik, Dk] of kk._groups) {
          const kk = ek.get(ik) ?? [];
          (Dk.length !== kk.length || kk.some(((kk, ek) => Dk[ek] !== kk))) && (Dk.length = 0, Dk.push(...kk)), ek.delete(ik)
        }
        for (const [ik, Dk] of ek) {
          const ek = Dk;
          kk._groups.set(ik, ek)
        }
      }

      function yk(kk, ek) {
        const ik = ek.o;
        if (ik?.length) {
          const kk = new Set(ik);
          for (let ek = Pk._renderables.length - 1; ek >= 0; ek--) kk.has(Pk._renderables[ek]) && Pk._renderables.splice(ek, 1)
        }
        ek.o = void 0, ek.r = void 0, Pk._runtimeBuilds?.dropBase(kk), Pk._rebuildHook = bk, Hk = !0
      }

      function Yk(kk, ek) {
        const ik = new Set(kk._disposables.slice(0, ek));
        for (let Dk = kk._disposables.length - 1; Dk >= ek; Dk--) ik.has(kk._disposables[Dk]) && kk._disposables.splice(Dk, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);