export const id = 385;
export const ids = [385];
export const modules = {
  61329: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      rebuildScenePbrPipelines: () => Ub,
      rebuildSceneRenderables: () => Ib
    });
    var kb = sb(41130),
      Wb = (bb, cb) => bb.order - cb.order,
      ab = 8,
      Tb = bb => Ib(bb);
    async function Ub(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await Hb(bb, "pbr", cb)
    }
    async function Ib(bb) {
      await Hb(bb, void 0, !1)
    }
    async function Hb(bb, cb, Ub) {
      const Ib = bb;
      if (!Ib._built && !Ub) return;
      const Hb = Ib._lightListVersion ?? 0,
        fb = Ib.surface.engine,
        Mb = bb => {
          Ib._z ? bb.forEach((bb => bb())) : (0, kb.b)(fb, (() => bb.forEach((bb => bb()))))
        };
      let Xb = !1,
        nb = !1,
        mb = !1,
        lb = !1;
      try {
        for (let bb = 1;; bb++) {
          if (void 0 !== cb) {
            await Qb();
            break
          }
          if (Cb(Ib), await Qb(), !eb(Ib)) break;
          if (bb >= ab) {
            Ib._rebuildHook = Tb, lb = !0, nb = !0;
            break
          }
        }
        mb = !0
      } finally {
        if (Xb && (Ib._renderables.sort(Wb), Ib._renderableVersion++, Ib._materialEpoch++, Ib._built && Ib._frameGraph.build()), void 0 === cb && mb && !nb && (Ib._lightListVersion ?? 0) === Hb) {
          const bb = Ib._pendingTopologyRetirements?.splice(0);
          bb?.length && Mb(bb), lb || (Ib._rebuildHook = void 0)
        }
      }
      async function Qb() {
        for (const [bb, kb] of Ib._groups) {
          if (void 0 !== cb && bb._materialFamily !== cb) continue;
          if (0 === kb.length) {
            (kb.o || kb.r) && (Nb(bb, kb), Xb = !0);
            continue
          }
          const Wb = Ib._runtimeBuilds;
          await (Wb?.wait(kb));
          let ab = !1;
          const Ub = async () => {
            const cb = Ib._runtimeBuilds,
              sb = [...kb].filter((cb => Ib.meshes.includes(cb) && cb.material?._buildGroup === bb));
            if (0 === sb.length) return void Nb(bb, kb);
            const Tb = !!kb.r,
              Ub = Ib._disposables.length,
              Hb = new Map,
              fb = new Map(sb.map((bb => [bb, bb.material])));
            for (const bb of sb) {
              const sb = Ib._meshDisposables.get(bb);
              sb && (Hb.set(bb, sb), Ib._meshDisposables.delete(bb), cb?.holdPendingDisposers(bb, sb))
            }
            let Xb, nb;
            Ib._p = bb => (nb = bb, !0);
            try {
              Xb = await bb(Ib, sb)
            } catch (ub) {
              nb?.[1]();
              for (const Wb of sb) {
                const sb = Hb.get(Wb),
                  ab = Ib._meshDisposables.get(Wb);
                if (ab && ab !== sb)
                  for (const bb of ab) bb();
                const Tb = Ib.meshes.includes(Wb) && Wb.material === fb.get(Wb) && Wb.material?._buildGroup === bb && kb.includes(Wb);
                sb && Tb ? Ib._meshDisposables.set(Wb, sb) : (Ib._meshDisposables.delete(Wb), sb && Mb(sb)), sb && cb?.releasePendingDisposers(Wb, sb)
              }
              throw ub
            } finally {
              delete Ib._p
            }
            if (Ib._z || Wb?._d()) {
              nb?.[1]();
              for (const cb of sb) {
                const bb = Ib._meshDisposables.get(cb),
                  sb = Hb.get(cb);
                if (bb && bb !== sb)
                  for (const cb of bb) cb();
                Ib._meshDisposables.delete(cb)
              }
              for (const cb of Ib._disposables.splice(0)) cb();
              const bb = [...Hb.values()].flat();
              Mb(bb);
              for (const [sb, kb] of Hb) cb?.releasePendingDisposers(sb, kb);
              return
            }
            nb?.[0](), bb._rebuildSingle = Xb.rebuildSingle, kb.r = Ib._runtimeBuilds?.base(bb, Xb.rebuildSingle) ?? Xb.rebuildSingle, "pbr" === bb._materialFamily && Xb._G && (kb._w = null), Tb && Vb(Ib, Ub);
            const mb = new Set(sb.filter((cb => Ib.meshes.includes(cb) && cb.material === fb.get(cb) && cb.material?._buildGroup === bb && kb.includes(cb))));
            if (mb.size !== sb.length && Xb.renderables.some((bb => !bb.mesh))) {
              for (const bb of sb) {
                const sb = Ib._meshDisposables.get(bb),
                  kb = Hb.get(bb);
                if (sb && sb !== kb)
                  for (const bb of sb) bb();
                kb && Ib.meshes.includes(bb) ? Ib._meshDisposables.set(bb, kb) : (Ib._meshDisposables.delete(bb), kb && Mb(kb)), kb && cb?.releasePendingDisposers(bb, kb)
              }
              return void(ab = !0)
            }
            const lb = new Set;
            for (const bb of sb)
              if (mb.has(bb)) lb.add(bb.material), Ib._runtimeBuilds?.reset(bb);
              else {
                const sb = Hb.get(bb),
                  kb = Ib._meshDisposables.get(bb);
                if (kb && kb !== sb)
                  for (const bb of kb) bb();
                sb && Ib.meshes.includes(bb) ? (Ib._meshDisposables.set(bb, sb), Hb.delete(bb), cb?.releasePendingDisposers(bb, sb)) : Ib._meshDisposables.delete(bb)
              } for (const bb of lb) bb._csmGen = (bb._csmGen ?? 0) + 1;
            const Qb = kb.o,
              eb = Qb?.length ? new Set(Qb) : null;
            for (let bb = Ib._renderables.length - 1; bb >= 0; bb--) {
              const cb = Ib._renderables[bb];
              (mb.has(cb.mesh) || eb?.has(cb)) && Ib._renderables.splice(bb, 1)
            }
            const Cb = Xb.renderables.filter((bb => !bb.mesh || mb.has(bb.mesh)));
            Ib._renderables.push(...Cb), kb.o = Cb;
            const Lb = [...Hb.values()].flat();
            Mb(Lb);
            for (const [bb, kb] of Hb) cb?.releasePendingDisposers(bb, kb)
          }, {
            X: Hb
          } = await Promise.resolve().then((() => sb(60691))), fb = 3;
          for (let cb = 1;; cb++) {
            if (ab = !1, await Hb(Ib, bb, Ub), Ib._z || Wb?._d()) return void(nb = !0);
            if (!ab) break;
            if (cb >= fb) {
              Nb(bb, kb), Ib._rebuildHook = Tb, lb = !0, nb = !0;
              break
            }
          }
          ab ? Xb = !0 : Xb = !0
        }
      }

      function eb(bb) {
        for (const cb of bb.meshes) {
          const sb = cb.material?._buildGroup;
          if (sb && !bb._groups.get(sb)?.includes(cb)) return !0
        }
        return !1
      }

      function Cb(bb) {
        const cb = new Map;
        for (const sb of bb.meshes) {
          const bb = sb.material?._buildGroup;
          if (!bb) continue;
          const kb = cb.get(bb);
          kb ? kb.push(sb) : cb.set(bb, [sb])
        }
        for (const [sb, kb] of bb._groups) {
          const bb = cb.get(sb) ?? [];
          (kb.length !== bb.length || bb.some(((bb, cb) => kb[cb] !== bb))) && (kb.length = 0, kb.push(...bb)), cb.delete(sb)
        }
        for (const [sb, kb] of cb) {
          const cb = kb;
          bb._groups.set(sb, cb)
        }
      }

      function Nb(bb, cb) {
        const sb = cb.o;
        if (sb?.length) {
          const bb = new Set(sb);
          for (let cb = Ib._renderables.length - 1; cb >= 0; cb--) bb.has(Ib._renderables[cb]) && Ib._renderables.splice(cb, 1)
        }
        cb.o = void 0, cb.r = void 0, Ib._runtimeBuilds?.dropBase(bb), Ib._rebuildHook = Tb, lb = !0
      }

      function Vb(bb, cb) {
        const sb = new Set(bb._disposables.slice(0, cb));
        for (let kb = bb._disposables.length - 1; kb >= cb; kb--) sb.has(bb._disposables[kb]) && bb._disposables.splice(kb, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);