export const id = 386;
export const ids = [386];
export const modules = {
  61312: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      rebuildScenePbrPipelines: () => Lb,
      rebuildSceneRenderables: () => Yb
    });
    var Bb = hb(41188),
      Ob = (bb, ub) => bb.order - ub.order,
      Gb = 8,
      Ub = bb => Yb(bb);
    async function Lb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await Sb(bb, "pbr", ub)
    }
    async function Yb(bb) {
      await Sb(bb, void 0, !1)
    }
    async function Sb(bb, ub, Lb) {
      const Yb = bb;
      if (!Yb._built && !Lb) return;
      const Sb = Yb._lightListVersion ?? 0,
        ab = Yb.surface.engine,
        Hb = bb => {
          Yb._z ? bb.forEach((bb => bb())) : (0, Bb.d)(ab, (() => bb.forEach((bb => bb()))))
        };
      let wb = !1,
        Zb = !1,
        Xb = !1,
        pb = !1;
      try {
        for (let bb = 1;; bb++) {
          if (void 0 !== ub) {
            await ob();
            break
          }
          if (lb(Yb), await ob(), !Ab(Yb)) break;
          if (bb >= Gb) {
            Yb._rebuildHook = Ub, pb = !0, Zb = !0;
            break
          }
        }
        Xb = !0
      } finally {
        if (wb && (Yb._renderables.sort(Ob), Yb._renderableVersion++, Yb._materialEpoch++, Yb._built && Yb._frameGraph.build()), void 0 === ub && Xb && !Zb && (Yb._lightListVersion ?? 0) === Sb) {
          const bb = Yb._pendingTopologyRetirements?.splice(0);
          bb?.length && Hb(bb), pb || (Yb._rebuildHook = void 0)
        }
      }
      async function ob() {
        for (const [bb, Bb] of Yb._groups) {
          if (void 0 !== ub && bb._materialFamily !== ub) continue;
          if (0 === Bb.length) {
            (Bb.o || Bb.r) && (Kb(bb, Bb), wb = !0);
            continue
          }
          const Ob = Yb._runtimeBuilds;
          await (Ob?.wait(Bb));
          let Gb = !1;
          const Lb = async () => {
            const ub = Yb._runtimeBuilds,
              hb = [...Bb].filter((ub => Yb.meshes.includes(ub) && ub.material?._buildGroup === bb));
            if (0 === hb.length) return void Kb(bb, Bb);
            const Ub = !!Bb.r,
              Lb = Yb._disposables.length,
              Sb = new Map,
              ab = new Map(hb.map((bb => [bb, bb.material])));
            for (const bb of hb) {
              const hb = Yb._meshDisposables.get(bb);
              hb && (Sb.set(bb, hb), Yb._meshDisposables.delete(bb), ub?.holdPendingDisposers(bb, hb))
            }
            let wb, Zb;
            Yb._p = bb => (Zb = bb, !0);
            try {
              wb = await bb(Yb, hb)
            } catch (db) {
              Zb?.[1]();
              for (const Ob of hb) {
                const hb = Sb.get(Ob),
                  Gb = Yb._meshDisposables.get(Ob);
                if (Gb && Gb !== hb)
                  for (const bb of Gb) bb();
                const Ub = Yb.meshes.includes(Ob) && Ob.material === ab.get(Ob) && Ob.material?._buildGroup === bb && Bb.includes(Ob);
                hb && Ub ? Yb._meshDisposables.set(Ob, hb) : (Yb._meshDisposables.delete(Ob), hb && Hb(hb)), hb && ub?.releasePendingDisposers(Ob, hb)
              }
              throw db
            } finally {
              delete Yb._p
            }
            if (Yb._z || Ob?._d()) {
              Zb?.[1]();
              for (const ub of hb) {
                const bb = Yb._meshDisposables.get(ub),
                  hb = Sb.get(ub);
                if (bb && bb !== hb)
                  for (const ub of bb) ub();
                Yb._meshDisposables.delete(ub)
              }
              for (const ub of Yb._disposables.splice(0)) ub();
              const bb = [...Sb.values()].flat();
              Hb(bb);
              for (const [hb, Bb] of Sb) ub?.releasePendingDisposers(hb, Bb);
              return
            }
            Zb?.[0](), bb._rebuildSingle = wb.rebuildSingle, Bb.r = Yb._runtimeBuilds?.base(bb, wb.rebuildSingle) ?? wb.rebuildSingle, "pbr" === bb._materialFamily && wb._G && (Bb._w = null), Ub && Wb(Yb, Lb);
            const Xb = new Set(hb.filter((ub => Yb.meshes.includes(ub) && ub.material === ab.get(ub) && ub.material?._buildGroup === bb && Bb.includes(ub))));
            if (Xb.size !== hb.length && wb.renderables.some((bb => !bb.mesh))) {
              for (const bb of hb) {
                const hb = Yb._meshDisposables.get(bb),
                  Bb = Sb.get(bb);
                if (hb && hb !== Bb)
                  for (const bb of hb) bb();
                Bb && Yb.meshes.includes(bb) ? Yb._meshDisposables.set(bb, Bb) : (Yb._meshDisposables.delete(bb), Bb && Hb(Bb)), Bb && ub?.releasePendingDisposers(bb, Bb)
              }
              return void(Gb = !0)
            }
            const pb = new Set;
            for (const bb of hb)
              if (Xb.has(bb)) pb.add(bb.material), Yb._runtimeBuilds?.reset(bb);
              else {
                const hb = Sb.get(bb),
                  Bb = Yb._meshDisposables.get(bb);
                if (Bb && Bb !== hb)
                  for (const bb of Bb) bb();
                hb && Yb.meshes.includes(bb) ? (Yb._meshDisposables.set(bb, hb), Sb.delete(bb), ub?.releasePendingDisposers(bb, hb)) : Yb._meshDisposables.delete(bb)
              } for (const bb of pb) bb._csmGen = (bb._csmGen ?? 0) + 1;
            const ob = Bb.o,
              Ab = ob?.length ? new Set(ob) : null;
            for (let bb = Yb._renderables.length - 1; bb >= 0; bb--) {
              const ub = Yb._renderables[bb];
              (Xb.has(ub.mesh) || Ab?.has(ub)) && Yb._renderables.splice(bb, 1)
            }
            const lb = wb.renderables.filter((bb => !bb.mesh || Xb.has(bb.mesh)));
            Yb._renderables.push(...lb), Bb.o = lb;
            const Cb = [...Sb.values()].flat();
            Hb(Cb);
            for (const [bb, Bb] of Sb) ub?.releasePendingDisposers(bb, Bb)
          }, {
            X: Sb
          } = await Promise.resolve().then((() => hb(60704))), ab = 3;
          for (let ub = 1;; ub++) {
            if (Gb = !1, await Sb(Yb, bb, Lb), Yb._z || Ob?._d()) return void(Zb = !0);
            if (!Gb) break;
            if (ub >= ab) {
              Kb(bb, Bb), Yb._rebuildHook = Ub, pb = !0, Zb = !0;
              break
            }
          }
          Gb ? wb = !0 : wb = !0
        }
      }

      function Ab(bb) {
        for (const ub of bb.meshes) {
          const hb = ub.material?._buildGroup;
          if (hb && !bb._groups.get(hb)?.includes(ub)) return !0
        }
        return !1
      }

      function lb(bb) {
        const ub = new Map;
        for (const hb of bb.meshes) {
          const bb = hb.material?._buildGroup;
          if (!bb) continue;
          const Bb = ub.get(bb);
          Bb ? Bb.push(hb) : ub.set(bb, [hb])
        }
        for (const [hb, Bb] of bb._groups) {
          const bb = ub.get(hb) ?? [];
          (Bb.length !== bb.length || bb.some(((bb, ub) => Bb[ub] !== bb))) && (Bb.length = 0, Bb.push(...bb)), ub.delete(hb)
        }
        for (const [hb, Bb] of ub) {
          const ub = Bb;
          bb._groups.set(hb, ub)
        }
      }

      function Kb(bb, ub) {
        const hb = ub.o;
        if (hb?.length) {
          const bb = new Set(hb);
          for (let ub = Yb._renderables.length - 1; ub >= 0; ub--) bb.has(Yb._renderables[ub]) && Yb._renderables.splice(ub, 1)
        }
        ub.o = void 0, ub.r = void 0, Yb._runtimeBuilds?.dropBase(bb), Yb._rebuildHook = Ub, pb = !0
      }

      function Wb(bb, ub) {
        const hb = new Set(bb._disposables.slice(0, ub));
        for (let Bb = bb._disposables.length - 1; Bb >= ub; Bb--) hb.has(bb._disposables[Bb]) && bb._disposables.splice(Bb, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);