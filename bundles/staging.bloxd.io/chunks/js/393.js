export const id = 393;
export const ids = [393];
export const modules = {
  62008: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      rebuildScenePbrPipelines: () => wm,
      rebuildSceneRenderables: () => Dm
    });
    var hm = fm(41743),
      Am = (mm, Tm) => mm.order - Tm.order,
      am = 8,
      xm = mm => Dm(mm);
    async function wm(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await im(mm, "pbr", Tm)
    }
    async function Dm(mm) {
      await im(mm, void 0, !1)
    }
    async function im(mm, Tm, wm) {
      const Dm = mm;
      if (!Dm._built && !wm) return;
      const im = Dm._lightListVersion ?? 0,
        Rm = Dm.surface.engine,
        pm = mm => {
          Dm._z ? mm.forEach((mm => mm())) : (0, hm.c)(Rm, (() => mm.forEach((mm => mm()))))
        };
      let Em = !1,
        om = !1,
        Om = !1,
        Ym = !1;
      try {
        for (let mm = 1;; mm++) {
          if (void 0 !== Tm) {
            await qm();
            break
          }
          if (Vm(Dm), await qm(), !jm(Dm)) break;
          if (mm >= am) {
            Dm._rebuildHook = xm, Ym = !0, om = !0;
            break
          }
        }
        Om = !0
      } finally {
        if (Em && (Dm._renderables.sort(Am), Dm._renderableVersion++, Dm._materialEpoch++, Dm._built && Dm._frameGraph.build()), void 0 === Tm && Om && !om && (Dm._lightListVersion ?? 0) === im) {
          const mm = Dm._pendingTopologyRetirements?.splice(0);
          mm?.length && pm(mm), Ym || (Dm._rebuildHook = void 0)
        }
      }
      async function qm() {
        for (const [mm, hm] of Dm._groups) {
          if (void 0 !== Tm && mm._materialFamily !== Tm) continue;
          if (0 === hm.length) {
            (hm.o || hm.r) && (Im(mm, hm), Em = !0);
            continue
          }
          const Am = Dm._runtimeBuilds;
          await (Am?.wait(hm));
          let am = !1;
          const wm = async () => {
            const Tm = Dm._runtimeBuilds,
              fm = [...hm].filter((Tm => Dm.meshes.includes(Tm) && Tm.material?._buildGroup === mm));
            if (0 === fm.length) return void Im(mm, hm);
            const xm = !!hm.r,
              wm = Dm._disposables.length,
              im = new Map,
              Rm = new Map(fm.map((mm => [mm, mm.material])));
            for (const mm of fm) {
              const fm = Dm._meshDisposables.get(mm);
              fm && (im.set(mm, fm), Dm._meshDisposables.delete(mm), Tm?.holdPendingDisposers(mm, fm))
            }
            let Em, om;
            Dm._p = mm => (om = mm, !0);
            try {
              Em = await mm(Dm, fm)
            } catch (nm) {
              om?.[1]();
              for (const Am of fm) {
                const fm = im.get(Am),
                  am = Dm._meshDisposables.get(Am);
                if (am && am !== fm)
                  for (const mm of am) mm();
                const xm = Dm.meshes.includes(Am) && Am.material === Rm.get(Am) && Am.material?._buildGroup === mm && hm.includes(Am);
                fm && xm ? Dm._meshDisposables.set(Am, fm) : (Dm._meshDisposables.delete(Am), fm && pm(fm)), fm && Tm?.releasePendingDisposers(Am, fm)
              }
              throw nm
            } finally {
              delete Dm._p
            }
            if (Dm._z || Am?._d()) {
              om?.[1]();
              for (const Tm of fm) {
                const mm = Dm._meshDisposables.get(Tm),
                  fm = im.get(Tm);
                if (mm && mm !== fm)
                  for (const Tm of mm) Tm();
                Dm._meshDisposables.delete(Tm)
              }
              for (const Tm of Dm._disposables.splice(0)) Tm();
              const mm = [...im.values()].flat();
              pm(mm);
              for (const [fm, hm] of im) Tm?.releasePendingDisposers(fm, hm);
              return
            }
            om?.[0](), mm._rebuildSingle = Em.rebuildSingle, hm.r = Dm._runtimeBuilds?.base(mm, Em.rebuildSingle) ?? Em.rebuildSingle, "pbr" === mm._materialFamily && Em._G && (hm._w = null), xm && Km(Dm, wm);
            const Om = new Set(fm.filter((Tm => Dm.meshes.includes(Tm) && Tm.material === Rm.get(Tm) && Tm.material?._buildGroup === mm && hm.includes(Tm))));
            if (Om.size !== fm.length && Em.renderables.some((mm => !mm.mesh))) {
              for (const mm of fm) {
                const fm = Dm._meshDisposables.get(mm),
                  hm = im.get(mm);
                if (fm && fm !== hm)
                  for (const mm of fm) mm();
                hm && Dm.meshes.includes(mm) ? Dm._meshDisposables.set(mm, hm) : (Dm._meshDisposables.delete(mm), hm && pm(hm)), hm && Tm?.releasePendingDisposers(mm, hm)
              }
              return void(am = !0)
            }
            const Ym = new Set;
            for (const mm of fm)
              if (Om.has(mm)) Ym.add(mm.material), Dm._runtimeBuilds?.reset(mm);
              else {
                const fm = im.get(mm),
                  hm = Dm._meshDisposables.get(mm);
                if (hm && hm !== fm)
                  for (const mm of hm) mm();
                fm && Dm.meshes.includes(mm) ? (Dm._meshDisposables.set(mm, fm), im.delete(mm), Tm?.releasePendingDisposers(mm, fm)) : Dm._meshDisposables.delete(mm)
              } for (const mm of Ym) mm._csmGen = (mm._csmGen ?? 0) + 1;
            const qm = hm.o,
              jm = qm?.length ? new Set(qm) : null;
            for (let mm = Dm._renderables.length - 1; mm >= 0; mm--) {
              const Tm = Dm._renderables[mm];
              (Om.has(Tm.mesh) || jm?.has(Tm)) && Dm._renderables.splice(mm, 1)
            }
            const Vm = Em.renderables.filter((mm => !mm.mesh || Om.has(mm.mesh)));
            Dm._renderables.push(...Vm), hm.o = Vm;
            const Qm = [...im.values()].flat();
            pm(Qm);
            for (const [mm, hm] of im) Tm?.releasePendingDisposers(mm, hm)
          }, {
            X: im
          } = await Promise.resolve().then((() => fm(61450))), Rm = 3;
          for (let Tm = 1;; Tm++) {
            if (am = !1, await im(Dm, mm, wm), Dm._z || Am?._d()) return void(om = !0);
            if (!am) break;
            if (Tm >= Rm) {
              Im(mm, hm), Dm._rebuildHook = xm, Ym = !0, om = !0;
              break
            }
          }
          am ? Em = !0 : Em = !0
        }
      }

      function jm(mm) {
        for (const Tm of mm.meshes) {
          const fm = Tm.material?._buildGroup;
          if (fm && !mm._groups.get(fm)?.includes(Tm)) return !0
        }
        return !1
      }

      function Vm(mm) {
        const Tm = new Map;
        for (const fm of mm.meshes) {
          const mm = fm.material?._buildGroup;
          if (!mm) continue;
          const hm = Tm.get(mm);
          hm ? hm.push(fm) : Tm.set(mm, [fm])
        }
        for (const [fm, hm] of mm._groups) {
          const mm = Tm.get(fm) ?? [];
          (hm.length !== mm.length || mm.some(((mm, Tm) => hm[Tm] !== mm))) && (hm.length = 0, hm.push(...mm)), Tm.delete(fm)
        }
        for (const [fm, hm] of Tm) {
          const Tm = hm;
          mm._groups.set(fm, Tm)
        }
      }

      function Im(mm, Tm) {
        const fm = Tm.o;
        if (fm?.length) {
          const mm = new Set(fm);
          for (let Tm = Dm._renderables.length - 1; Tm >= 0; Tm--) mm.has(Dm._renderables[Tm]) && Dm._renderables.splice(Tm, 1)
        }
        Tm.o = void 0, Tm.r = void 0, Dm._runtimeBuilds?.dropBase(mm), Dm._rebuildHook = xm, Ym = !0
      }

      function Km(mm, Tm) {
        const fm = new Set(mm._disposables.slice(0, Tm));
        for (let hm = mm._disposables.length - 1; hm >= Tm; hm--) fm.has(mm._disposables[hm]) && mm._disposables.splice(hm, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);