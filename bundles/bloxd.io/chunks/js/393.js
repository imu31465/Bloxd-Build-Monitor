export const id = 393;
export const ids = [393];
export const modules = {
  61874: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      rebuildScenePbrPipelines: () => lk,
      rebuildSceneRenderables: () => ak
    });
    var Xk = Ik(41723),
      Tk = (kk, Fk) => kk.order - Fk.order,
      ik = 8,
      yk = kk => ak(kk);
    async function lk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await qk(kk, "pbr", Fk)
    }
    async function ak(kk) {
      await qk(kk, void 0, !1)
    }
    async function qk(kk, Fk, lk) {
      const ak = kk;
      if (!ak._built && !lk) return;
      const qk = ak._lightListVersion ?? 0,
        Lk = ak.surface.engine,
        tk = kk => {
          ak._z ? kk.forEach((kk => kk())) : (0, Xk.b)(Lk, (() => kk.forEach((kk => kk()))))
        };
      let Zk = !1,
        jk = !1,
        ek = !1,
        wk = !1;
      try {
        for (let kk = 1;; kk++) {
          if (void 0 !== Fk) {
            await Hk();
            break
          }
          if (xk(ak), await Hk(), !Jk(ak)) break;
          if (kk >= ik) {
            ak._rebuildHook = yk, wk = !0, jk = !0;
            break
          }
        }
        ek = !0
      } finally {
        if (Zk && (ak._renderables.sort(Tk), ak._renderableVersion++, ak._materialEpoch++, ak._built && ak._frameGraph.build()), void 0 === Fk && ek && !jk && (ak._lightListVersion ?? 0) === qk) {
          const kk = ak._pendingTopologyRetirements?.splice(0);
          kk?.length && tk(kk), wk || (ak._rebuildHook = void 0)
        }
      }
      async function Hk() {
        for (const [kk, Xk] of ak._groups) {
          if (void 0 !== Fk && kk._materialFamily !== Fk) continue;
          if (0 === Xk.length) {
            (Xk.o || Xk.r) && (Pk(kk, Xk), Zk = !0);
            continue
          }
          const Tk = ak._runtimeBuilds;
          await (Tk?.wait(Xk));
          let ik = !1;
          const lk = async () => {
            const Fk = ak._runtimeBuilds,
              Ik = [...Xk].filter((Fk => ak.meshes.includes(Fk) && Fk.material?._buildGroup === kk));
            if (0 === Ik.length) return void Pk(kk, Xk);
            const yk = !!Xk.r,
              lk = ak._disposables.length,
              qk = new Map,
              Lk = new Map(Ik.map((kk => [kk, kk.material])));
            for (const kk of Ik) {
              const Ik = ak._meshDisposables.get(kk);
              Ik && (qk.set(kk, Ik), ak._meshDisposables.delete(kk), Fk?.holdPendingDisposers(kk, Ik))
            }
            let Zk, jk;
            ak._p = kk => (jk = kk, !0);
            try {
              Zk = await kk(ak, Ik)
            } catch (sk) {
              jk?.[1]();
              for (const Tk of Ik) {
                const Ik = qk.get(Tk),
                  ik = ak._meshDisposables.get(Tk);
                if (ik && ik !== Ik)
                  for (const kk of ik) kk();
                const yk = ak.meshes.includes(Tk) && Tk.material === Lk.get(Tk) && Tk.material?._buildGroup === kk && Xk.includes(Tk);
                Ik && yk ? ak._meshDisposables.set(Tk, Ik) : (ak._meshDisposables.delete(Tk), Ik && tk(Ik)), Ik && Fk?.releasePendingDisposers(Tk, Ik)
              }
              throw sk
            } finally {
              delete ak._p
            }
            if (ak._z || Tk?._d()) {
              jk?.[1]();
              for (const Fk of Ik) {
                const kk = ak._meshDisposables.get(Fk),
                  Ik = qk.get(Fk);
                if (kk && kk !== Ik)
                  for (const Fk of kk) Fk();
                ak._meshDisposables.delete(Fk)
              }
              for (const Fk of ak._disposables.splice(0)) Fk();
              const kk = [...qk.values()].flat();
              tk(kk);
              for (const [Ik, Xk] of qk) Fk?.releasePendingDisposers(Ik, Xk);
              return
            }
            jk?.[0](), kk._rebuildSingle = Zk.rebuildSingle, Xk.r = ak._runtimeBuilds?.base(kk, Zk.rebuildSingle) ?? Zk.rebuildSingle, "pbr" === kk._materialFamily && Zk._G && (Xk._w = null), yk && Kk(ak, lk);
            const ek = new Set(Ik.filter((Fk => ak.meshes.includes(Fk) && Fk.material === Lk.get(Fk) && Fk.material?._buildGroup === kk && Xk.includes(Fk))));
            if (ek.size !== Ik.length && Zk.renderables.some((kk => !kk.mesh))) {
              for (const kk of Ik) {
                const Ik = ak._meshDisposables.get(kk),
                  Xk = qk.get(kk);
                if (Ik && Ik !== Xk)
                  for (const kk of Ik) kk();
                Xk && ak.meshes.includes(kk) ? ak._meshDisposables.set(kk, Xk) : (ak._meshDisposables.delete(kk), Xk && tk(Xk)), Xk && Fk?.releasePendingDisposers(kk, Xk)
              }
              return void(ik = !0)
            }
            const wk = new Set;
            for (const kk of Ik)
              if (ek.has(kk)) wk.add(kk.material), ak._runtimeBuilds?.reset(kk);
              else {
                const Ik = qk.get(kk),
                  Xk = ak._meshDisposables.get(kk);
                if (Xk && Xk !== Ik)
                  for (const kk of Xk) kk();
                Ik && ak.meshes.includes(kk) ? (ak._meshDisposables.set(kk, Ik), qk.delete(kk), Fk?.releasePendingDisposers(kk, Ik)) : ak._meshDisposables.delete(kk)
              } for (const kk of wk) kk._csmGen = (kk._csmGen ?? 0) + 1;
            const Hk = Xk.o,
              Jk = Hk?.length ? new Set(Hk) : null;
            for (let kk = ak._renderables.length - 1; kk >= 0; kk--) {
              const Fk = ak._renderables[kk];
              (ek.has(Fk.mesh) || Jk?.has(Fk)) && ak._renderables.splice(kk, 1)
            }
            const xk = Zk.renderables.filter((kk => !kk.mesh || ek.has(kk.mesh)));
            ak._renderables.push(...xk), Xk.o = xk;
            const Qk = [...qk.values()].flat();
            tk(Qk);
            for (const [kk, Xk] of qk) Fk?.releasePendingDisposers(kk, Xk)
          }, {
            X: qk
          } = await Promise.resolve().then((() => Ik(61371))), Lk = 3;
          for (let Fk = 1;; Fk++) {
            if (ik = !1, await qk(ak, kk, lk), ak._z || Tk?._d()) return void(jk = !0);
            if (!ik) break;
            if (Fk >= Lk) {
              Pk(kk, Xk), ak._rebuildHook = yk, wk = !0, jk = !0;
              break
            }
          }
          ik ? Zk = !0 : Zk = !0
        }
      }

      function Jk(kk) {
        for (const Fk of kk.meshes) {
          const Ik = Fk.material?._buildGroup;
          if (Ik && !kk._groups.get(Ik)?.includes(Fk)) return !0
        }
        return !1
      }

      function xk(kk) {
        const Fk = new Map;
        for (const Ik of kk.meshes) {
          const kk = Ik.material?._buildGroup;
          if (!kk) continue;
          const Xk = Fk.get(kk);
          Xk ? Xk.push(Ik) : Fk.set(kk, [Ik])
        }
        for (const [Ik, Xk] of kk._groups) {
          const kk = Fk.get(Ik) ?? [];
          (Xk.length !== kk.length || kk.some(((kk, Fk) => Xk[Fk] !== kk))) && (Xk.length = 0, Xk.push(...kk)), Fk.delete(Ik)
        }
        for (const [Ik, Xk] of Fk) {
          const Fk = Xk;
          kk._groups.set(Ik, Fk)
        }
      }

      function Pk(kk, Fk) {
        const Ik = Fk.o;
        if (Ik?.length) {
          const kk = new Set(Ik);
          for (let Fk = ak._renderables.length - 1; Fk >= 0; Fk--) kk.has(ak._renderables[Fk]) && ak._renderables.splice(Fk, 1)
        }
        Fk.o = void 0, Fk.r = void 0, ak._runtimeBuilds?.dropBase(kk), ak._rebuildHook = yk, wk = !0
      }

      function Kk(kk, Fk) {
        const Ik = new Set(kk._disposables.slice(0, Fk));
        for (let Xk = kk._disposables.length - 1; Xk >= Fk; Xk--) Ik.has(kk._disposables[Xk]) && kk._disposables.splice(Xk, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);