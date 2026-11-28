export const id = 711;
export const ids = [711];
export const modules = {
  65048: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      rebuildScenePbrPipelines: () => gb,
      rebuildSceneRenderables: () => lb
    });
    var eb = Mb(53939),
      Hb = (bb, wb) => bb.order - wb.order,
      pb = 8,
      Vb = bb => lb(bb);
    async function gb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await Lb(bb, "pbr", wb)
    }
    async function lb(bb) {
      await Lb(bb, void 0, !1)
    }
    async function Lb(bb, wb, gb) {
      const lb = bb;
      if (!lb._built && !gb) return;
      const Lb = lb._lightListVersion ?? 0,
        Ib = lb.surface.engine,
        Ob = bb => {
          lb._z ? bb.forEach((bb => bb())) : (0, eb.f)(Ib, (() => bb.forEach((bb => bb()))))
        };
      let Ub = !1,
        tb = !1,
        Cb = !1,
        Eb = !1;
      try {
        for (let bb = 1;; bb++) {
          if (void 0 !== wb) {
            await Fb();
            break
          }
          if (sb(lb), await Fb(), !Bb(lb)) break;
          if (bb >= pb) {
            lb._rebuildHook = Vb, Eb = !0, tb = !0;
            break
          }
        }
        Cb = !0
      } finally {
        if (Ub && (lb._renderables.sort(Hb), lb._renderableVersion++, lb._materialEpoch++, lb._built && lb._frameGraph.build()), void 0 === wb && Cb && !tb && (lb._lightListVersion ?? 0) === Lb) {
          const bb = lb._pendingTopologyRetirements?.splice(0);
          bb?.length && Ob(bb), Eb || (lb._rebuildHook = void 0)
        }
      }
      async function Fb() {
        for (const [bb, eb] of lb._groups) {
          if (void 0 !== wb && bb._materialFamily !== wb) continue;
          if (0 === eb.length) {
            (eb.o || eb.r) && (mb(bb, eb), Ub = !0);
            continue
          }
          const Hb = lb._runtimeBuilds;
          await (Hb?.wait(eb));
          let pb = !1;
          const gb = async () => {
            const wb = lb._runtimeBuilds,
              Mb = [...eb].filter((wb => lb.meshes.includes(wb) && wb.material?._buildGroup === bb));
            if (0 === Mb.length) return void mb(bb, eb);
            const Vb = !!eb.r,
              gb = lb._disposables.length,
              Lb = new Map,
              Ib = new Map(Mb.map((bb => [bb, bb.material])));
            for (const bb of Mb) {
              const Mb = lb._meshDisposables.get(bb);
              Mb && (Lb.set(bb, Mb), lb._meshDisposables.delete(bb), wb?.holdPendingDisposers(bb, Mb))
            }
            let Ub, tb;
            lb._p = bb => (tb = bb, !0);
            try {
              Ub = await bb(lb, Mb)
            } catch (Xb) {
              tb?.[1]();
              for (const Hb of Mb) {
                const Mb = Lb.get(Hb),
                  pb = lb._meshDisposables.get(Hb);
                if (pb && pb !== Mb)
                  for (const bb of pb) bb();
                const Vb = lb.meshes.includes(Hb) && Hb.material === Ib.get(Hb) && Hb.material?._buildGroup === bb && eb.includes(Hb);
                Mb && Vb ? lb._meshDisposables.set(Hb, Mb) : (lb._meshDisposables.delete(Hb), Mb && Ob(Mb)), Mb && wb?.releasePendingDisposers(Hb, Mb)
              }
              throw Xb
            } finally {
              delete lb._p
            }
            if (lb._z || Hb?._d()) {
              tb?.[1]();
              for (const wb of Mb) {
                const bb = lb._meshDisposables.get(wb),
                  Mb = Lb.get(wb);
                if (bb && bb !== Mb)
                  for (const wb of bb) wb();
                lb._meshDisposables.delete(wb)
              }
              for (const wb of lb._disposables.splice(0)) wb();
              const bb = [...Lb.values()].flat();
              Ob(bb);
              for (const [Mb, eb] of Lb) wb?.releasePendingDisposers(Mb, eb);
              return
            }
            tb?.[0](), bb._rebuildSingle = Ub.rebuildSingle, eb.r = lb._runtimeBuilds?.base(bb, Ub.rebuildSingle) ?? Ub.rebuildSingle, "pbr" === bb._materialFamily && Ub._G && (eb._w = null), Vb && hb(lb, gb);
            const Cb = new Set(Mb.filter((wb => lb.meshes.includes(wb) && wb.material === Ib.get(wb) && wb.material?._buildGroup === bb && eb.includes(wb))));
            if (Cb.size !== Mb.length && Ub.renderables.some((bb => !bb.mesh))) {
              for (const bb of Mb) {
                const Mb = lb._meshDisposables.get(bb),
                  eb = Lb.get(bb);
                if (Mb && Mb !== eb)
                  for (const bb of Mb) bb();
                eb && lb.meshes.includes(bb) ? lb._meshDisposables.set(bb, eb) : (lb._meshDisposables.delete(bb), eb && Ob(eb)), eb && wb?.releasePendingDisposers(bb, eb)
              }
              return void(pb = !0)
            }
            const Eb = new Set;
            for (const bb of Mb)
              if (Cb.has(bb)) Eb.add(bb.material), lb._runtimeBuilds?.reset(bb);
              else {
                const Mb = Lb.get(bb),
                  eb = lb._meshDisposables.get(bb);
                if (eb && eb !== Mb)
                  for (const bb of eb) bb();
                Mb && lb.meshes.includes(bb) ? (lb._meshDisposables.set(bb, Mb), Lb.delete(bb), wb?.releasePendingDisposers(bb, Mb)) : lb._meshDisposables.delete(bb)
              } for (const bb of Eb) bb._csmGen = (bb._csmGen ?? 0) + 1;
            const Fb = eb.o,
              Bb = Fb?.length ? new Set(Fb) : null;
            for (let bb = lb._renderables.length - 1; bb >= 0; bb--) {
              const wb = lb._renderables[bb];
              (Cb.has(wb.mesh) || Bb?.has(wb)) && lb._renderables.splice(bb, 1)
            }
            const sb = Ub.renderables.filter((bb => !bb.mesh || Cb.has(bb.mesh)));
            lb._renderables.push(...sb), eb.o = sb;
            const zb = [...Lb.values()].flat();
            Ob(zb);
            for (const [bb, eb] of Lb) wb?.releasePendingDisposers(bb, eb)
          }, {
            X: Lb
          } = await Promise.resolve().then((() => Mb(64519))), Ib = 3;
          for (let wb = 1;; wb++) {
            if (pb = !1, await Lb(lb, bb, gb), lb._z || Hb?._d()) return void(tb = !0);
            if (!pb) break;
            if (wb >= Ib) {
              mb(bb, eb), lb._rebuildHook = Vb, Eb = !0, tb = !0;
              break
            }
          }
          pb ? Ub = !0 : Ub = !0
        }
      }

      function Bb(bb) {
        for (const wb of bb.meshes) {
          const Mb = wb.material?._buildGroup;
          if (Mb && !bb._groups.get(Mb)?.includes(wb)) return !0
        }
        return !1
      }

      function sb(bb) {
        const wb = new Map;
        for (const Mb of bb.meshes) {
          const bb = Mb.material?._buildGroup;
          if (!bb) continue;
          const eb = wb.get(bb);
          eb ? eb.push(Mb) : wb.set(bb, [Mb])
        }
        for (const [Mb, eb] of bb._groups) {
          const bb = wb.get(Mb) ?? [];
          (eb.length !== bb.length || bb.some(((bb, wb) => eb[wb] !== bb))) && (eb.length = 0, eb.push(...bb)), wb.delete(Mb)
        }
        for (const [Mb, eb] of wb) {
          const wb = eb;
          bb._groups.set(Mb, wb)
        }
      }

      function mb(bb, wb) {
        const Mb = wb.o;
        if (Mb?.length) {
          const bb = new Set(Mb);
          for (let wb = lb._renderables.length - 1; wb >= 0; wb--) bb.has(lb._renderables[wb]) && lb._renderables.splice(wb, 1)
        }
        wb.o = void 0, wb.r = void 0, lb._runtimeBuilds?.dropBase(bb), lb._rebuildHook = Vb, Eb = !0
      }

      function hb(bb, wb) {
        const Mb = new Set(bb._disposables.slice(0, wb));
        for (let eb = bb._disposables.length - 1; eb >= wb; eb--) Mb.has(bb._disposables[eb]) && bb._disposables.splice(eb, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);