export const id = 370;
export const ids = [370];
export const modules = {
  59796: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      rebuildScenePbrPipelines: () => sc,
      rebuildSceneRenderables: () => Mc
    });
    var Vc = nc(39682),
      Ic = (cB, Bc) => cB.order - Bc.order,
      rB = 8,
      uc = cB => Mc(cB);
    async function sc(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await Pc(cB, "pbr", Bc)
    }
    async function Mc(cB) {
      await Pc(cB, void 0, !1)
    }
    async function Pc(cB, Bc, sc) {
      const Mc = cB;
      if (!Mc._built && !sc) return;
      const Pc = Mc._lightListVersion ?? 0,
        qB = Mc.surface.engine,
        Oc = cB => {
          Mc._z ? cB.forEach((cB => cB())) : (0, Vc.d)(qB, (() => cB.forEach((cB => cB()))))
        };
      let Tc = !1,
        fc = !1,
        mB = !1,
        ec = !1;
      try {
        for (let cB = 1;; cB++) {
          if (void 0 !== Bc) {
            await tB();
            break
          }
          if (yB(Mc), await tB(), !Sc(Mc)) break;
          if (cB >= rB) {
            Mc._rebuildHook = uc, ec = !0, fc = !0;
            break
          }
        }
        mB = !0
      } finally {
        if (Tc && (Mc._renderables.sort(Ic), Mc._renderableVersion++, Mc._materialEpoch++, Mc._built && Mc._frameGraph.build()), void 0 === Bc && mB && !fc && (Mc._lightListVersion ?? 0) === Pc) {
          const cB = Mc._pendingTopologyRetirements?.splice(0);
          cB?.length && Oc(cB), ec || (Mc._rebuildHook = void 0)
        }
      }
      async function tB() {
        for (const [cB, Vc] of Mc._groups) {
          if (void 0 !== Bc && cB._materialFamily !== Bc) continue;
          if (0 === Vc.length) {
            (Vc.o || Vc.r) && (zB(cB, Vc), Tc = !0);
            continue
          }
          const Ic = Mc._runtimeBuilds;
          await (Ic?.wait(Vc));
          let rB = !1;
          const sc = async () => {
            const Bc = Mc._runtimeBuilds,
              nc = [...Vc].filter((Bc => Mc.meshes.includes(Bc) && Bc.material?._buildGroup === cB));
            if (0 === nc.length) return void zB(cB, Vc);
            const uc = !!Vc.r,
              sc = Mc._disposables.length,
              Pc = new Map,
              qB = new Map(nc.map((cB => [cB, cB.material])));
            for (const cB of nc) {
              const nc = Mc._meshDisposables.get(cB);
              nc && (Pc.set(cB, nc), Mc._meshDisposables.delete(cB), Bc?.holdPendingDisposers(cB, nc))
            }
            let Tc, fc;
            Mc._p = cB => (fc = cB, !0);
            try {
              Tc = await cB(Mc, nc)
            } catch (aB) {
              fc?.[1]();
              for (const Ic of nc) {
                const nc = Pc.get(Ic),
                  rB = Mc._meshDisposables.get(Ic);
                if (rB && rB !== nc)
                  for (const cB of rB) cB();
                const uc = Mc.meshes.includes(Ic) && Ic.material === qB.get(Ic) && Ic.material?._buildGroup === cB && Vc.includes(Ic);
                nc && uc ? Mc._meshDisposables.set(Ic, nc) : (Mc._meshDisposables.delete(Ic), nc && Oc(nc)), nc && Bc?.releasePendingDisposers(Ic, nc)
              }
              throw aB
            } finally {
              delete Mc._p
            }
            if (Mc._z || Ic?._d()) {
              fc?.[1]();
              for (const Bc of nc) {
                const cB = Mc._meshDisposables.get(Bc),
                  nc = Pc.get(Bc);
                if (cB && cB !== nc)
                  for (const Bc of cB) Bc();
                Mc._meshDisposables.delete(Bc)
              }
              for (const Bc of Mc._disposables.splice(0)) Bc();
              const cB = [...Pc.values()].flat();
              Oc(cB);
              for (const [nc, Vc] of Pc) Bc?.releasePendingDisposers(nc, Vc);
              return
            }
            fc?.[0](), cB._rebuildSingle = Tc.rebuildSingle, Vc.r = Mc._runtimeBuilds?.base(cB, Tc.rebuildSingle) ?? Tc.rebuildSingle, "pbr" === cB._materialFamily && Tc._G && (Vc._w = null), uc && pc(Mc, sc);
            const mB = new Set(nc.filter((Bc => Mc.meshes.includes(Bc) && Bc.material === qB.get(Bc) && Bc.material?._buildGroup === cB && Vc.includes(Bc))));
            if (mB.size !== nc.length && Tc.renderables.some((cB => !cB.mesh))) {
              for (const cB of nc) {
                const nc = Mc._meshDisposables.get(cB),
                  Vc = Pc.get(cB);
                if (nc && nc !== Vc)
                  for (const cB of nc) cB();
                Vc && Mc.meshes.includes(cB) ? Mc._meshDisposables.set(cB, Vc) : (Mc._meshDisposables.delete(cB), Vc && Oc(Vc)), Vc && Bc?.releasePendingDisposers(cB, Vc)
              }
              return void(rB = !0)
            }
            const ec = new Set;
            for (const cB of nc)
              if (mB.has(cB)) ec.add(cB.material), Mc._runtimeBuilds?.reset(cB);
              else {
                const nc = Pc.get(cB),
                  Vc = Mc._meshDisposables.get(cB);
                if (Vc && Vc !== nc)
                  for (const cB of Vc) cB();
                nc && Mc.meshes.includes(cB) ? (Mc._meshDisposables.set(cB, nc), Pc.delete(cB), Bc?.releasePendingDisposers(cB, nc)) : Mc._meshDisposables.delete(cB)
              } for (const cB of ec) cB._csmGen = (cB._csmGen ?? 0) + 1;
            const tB = Vc.o,
              Sc = tB?.length ? new Set(tB) : null;
            for (let cB = Mc._renderables.length - 1; cB >= 0; cB--) {
              const Bc = Mc._renderables[cB];
              (mB.has(Bc.mesh) || Sc?.has(Bc)) && Mc._renderables.splice(cB, 1)
            }
            const yB = Tc.renderables.filter((cB => !cB.mesh || mB.has(cB.mesh)));
            Mc._renderables.push(...yB), Vc.o = yB;
            const hc = [...Pc.values()].flat();
            Oc(hc);
            for (const [cB, Vc] of Pc) Bc?.releasePendingDisposers(cB, Vc)
          }, {
            X: Pc
          } = await Promise.resolve().then((() => nc(59200))), qB = 3;
          for (let Bc = 1;; Bc++) {
            if (rB = !1, await Pc(Mc, cB, sc), Mc._z || Ic?._d()) return void(fc = !0);
            if (!rB) break;
            if (Bc >= qB) {
              zB(cB, Vc), Mc._rebuildHook = uc, ec = !0, fc = !0;
              break
            }
          }
          rB ? Tc = !0 : Tc = !0
        }
      }

      function Sc(cB) {
        for (const Bc of cB.meshes) {
          const nc = Bc.material?._buildGroup;
          if (nc && !cB._groups.get(nc)?.includes(Bc)) return !0
        }
        return !1
      }

      function yB(cB) {
        const Bc = new Map;
        for (const nc of cB.meshes) {
          const cB = nc.material?._buildGroup;
          if (!cB) continue;
          const Vc = Bc.get(cB);
          Vc ? Vc.push(nc) : Bc.set(cB, [nc])
        }
        for (const [nc, Vc] of cB._groups) {
          const cB = Bc.get(nc) ?? [];
          (Vc.length !== cB.length || cB.some(((cB, Bc) => Vc[Bc] !== cB))) && (Vc.length = 0, Vc.push(...cB)), Bc.delete(nc)
        }
        for (const [nc, Vc] of Bc) {
          const Bc = Vc;
          cB._groups.set(nc, Bc)
        }
      }

      function zB(cB, Bc) {
        const nc = Bc.o;
        if (nc?.length) {
          const cB = new Set(nc);
          for (let Bc = Mc._renderables.length - 1; Bc >= 0; Bc--) cB.has(Mc._renderables[Bc]) && Mc._renderables.splice(Bc, 1)
        }
        Bc.o = void 0, Bc.r = void 0, Mc._runtimeBuilds?.dropBase(cB), Mc._rebuildHook = uc, ec = !0
      }

      function pc(cB, Bc) {
        const nc = new Set(cB._disposables.slice(0, Bc));
        for (let Vc = cB._disposables.length - 1; Vc >= Bc; Vc--) nc.has(cB._disposables[Vc]) && cB._disposables.splice(Vc, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);