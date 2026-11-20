export const id = 385;
export const ids = [385];
export const modules = {
  61044: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      rebuildScenePbrPipelines: () => Yb,
      rebuildSceneRenderables: () => Bb
    });
    var Ab = Ub(40849),
      Mb = (bb, ab) => bb.order - ab.order,
      Tb = 8,
      Eb = bb => Bb(bb);
    async function Yb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await eb(bb, "pbr", ab)
    }
    async function Bb(bb) {
      await eb(bb, void 0, !1)
    }
    async function eb(bb, ab, Yb) {
      const Bb = bb;
      if (!Bb._built && !Yb) return;
      const eb = Bb._lightListVersion ?? 0,
        vb = Bb.surface.engine,
        Lb = bb => {
          Bb._z ? bb.forEach((bb => bb())) : (0, Ab.b)(vb, (() => bb.forEach((bb => bb()))))
        };
      let Pb = !1,
        Xb = !1,
        jb = !1,
        Rb = !1;
      try {
        for (let bb = 1;; bb++) {
          if (void 0 !== ab) {
            await kb();
            break
          }
          if (Zb(Bb), await kb(), !yb(Bb)) break;
          if (bb >= Tb) {
            Bb._rebuildHook = Eb, Rb = !0, Xb = !0;
            break
          }
        }
        jb = !0
      } finally {
        if (Pb && (Bb._renderables.sort(Mb), Bb._renderableVersion++, Bb._materialEpoch++, Bb._built && Bb._frameGraph.build()), void 0 === ab && jb && !Xb && (Bb._lightListVersion ?? 0) === eb) {
          const bb = Bb._pendingTopologyRetirements?.splice(0);
          bb?.length && Lb(bb), Rb || (Bb._rebuildHook = void 0)
        }
      }
      async function kb() {
        for (const [bb, Ab] of Bb._groups) {
          if (void 0 !== ab && bb._materialFamily !== ab) continue;
          if (0 === Ab.length) {
            (Ab.o || Ab.r) && (Db(bb, Ab), Pb = !0);
            continue
          }
          const Mb = Bb._runtimeBuilds;
          await (Mb?.wait(Ab));
          let Tb = !1;
          const Yb = async () => {
            const ab = Bb._runtimeBuilds,
              Ub = [...Ab].filter((ab => Bb.meshes.includes(ab) && ab.material?._buildGroup === bb));
            if (0 === Ub.length) return void Db(bb, Ab);
            const Eb = !!Ab.r,
              Yb = Bb._disposables.length,
              eb = new Map,
              vb = new Map(Ub.map((bb => [bb, bb.material])));
            for (const bb of Ub) {
              const Ub = Bb._meshDisposables.get(bb);
              Ub && (eb.set(bb, Ub), Bb._meshDisposables.delete(bb), ab?.holdPendingDisposers(bb, Ub))
            }
            let Pb, Xb;
            Bb._p = bb => (Xb = bb, !0);
            try {
              Pb = await bb(Bb, Ub)
            } catch (ib) {
              Xb?.[1]();
              for (const Mb of Ub) {
                const Ub = eb.get(Mb),
                  Tb = Bb._meshDisposables.get(Mb);
                if (Tb && Tb !== Ub)
                  for (const bb of Tb) bb();
                const Eb = Bb.meshes.includes(Mb) && Mb.material === vb.get(Mb) && Mb.material?._buildGroup === bb && Ab.includes(Mb);
                Ub && Eb ? Bb._meshDisposables.set(Mb, Ub) : (Bb._meshDisposables.delete(Mb), Ub && Lb(Ub)), Ub && ab?.releasePendingDisposers(Mb, Ub)
              }
              throw ib
            } finally {
              delete Bb._p
            }
            if (Bb._z || Mb?._d()) {
              Xb?.[1]();
              for (const ab of Ub) {
                const bb = Bb._meshDisposables.get(ab),
                  Ub = eb.get(ab);
                if (bb && bb !== Ub)
                  for (const ab of bb) ab();
                Bb._meshDisposables.delete(ab)
              }
              for (const ab of Bb._disposables.splice(0)) ab();
              const bb = [...eb.values()].flat();
              Lb(bb);
              for (const [Ub, Ab] of eb) ab?.releasePendingDisposers(Ub, Ab);
              return
            }
            Xb?.[0](), bb._rebuildSingle = Pb.rebuildSingle, Ab.r = Bb._runtimeBuilds?.base(bb, Pb.rebuildSingle) ?? Pb.rebuildSingle, "pbr" === bb._materialFamily && Pb._G && (Ab._w = null), Eb && zb(Bb, Yb);
            const jb = new Set(Ub.filter((ab => Bb.meshes.includes(ab) && ab.material === vb.get(ab) && ab.material?._buildGroup === bb && Ab.includes(ab))));
            if (jb.size !== Ub.length && Pb.renderables.some((bb => !bb.mesh))) {
              for (const bb of Ub) {
                const Ub = Bb._meshDisposables.get(bb),
                  Ab = eb.get(bb);
                if (Ub && Ub !== Ab)
                  for (const bb of Ub) bb();
                Ab && Bb.meshes.includes(bb) ? Bb._meshDisposables.set(bb, Ab) : (Bb._meshDisposables.delete(bb), Ab && Lb(Ab)), Ab && ab?.releasePendingDisposers(bb, Ab)
              }
              return void(Tb = !0)
            }
            const Rb = new Set;
            for (const bb of Ub)
              if (jb.has(bb)) Rb.add(bb.material), Bb._runtimeBuilds?.reset(bb);
              else {
                const Ub = eb.get(bb),
                  Ab = Bb._meshDisposables.get(bb);
                if (Ab && Ab !== Ub)
                  for (const bb of Ab) bb();
                Ub && Bb.meshes.includes(bb) ? (Bb._meshDisposables.set(bb, Ub), eb.delete(bb), ab?.releasePendingDisposers(bb, Ub)) : Bb._meshDisposables.delete(bb)
              } for (const bb of Rb) bb._csmGen = (bb._csmGen ?? 0) + 1;
            const kb = Ab.o,
              yb = kb?.length ? new Set(kb) : null;
            for (let bb = Bb._renderables.length - 1; bb >= 0; bb--) {
              const ab = Bb._renderables[bb];
              (jb.has(ab.mesh) || yb?.has(ab)) && Bb._renderables.splice(bb, 1)
            }
            const Zb = Pb.renderables.filter((bb => !bb.mesh || jb.has(bb.mesh)));
            Bb._renderables.push(...Zb), Ab.o = Zb;
            const xb = [...eb.values()].flat();
            Lb(xb);
            for (const [bb, Ab] of eb) ab?.releasePendingDisposers(bb, Ab)
          }, {
            X: eb
          } = await Promise.resolve().then((() => Ub(60359))), vb = 3;
          for (let ab = 1;; ab++) {
            if (Tb = !1, await eb(Bb, bb, Yb), Bb._z || Mb?._d()) return void(Xb = !0);
            if (!Tb) break;
            if (ab >= vb) {
              Db(bb, Ab), Bb._rebuildHook = Eb, Rb = !0, Xb = !0;
              break
            }
          }
          Tb ? Pb = !0 : Pb = !0
        }
      }

      function yb(bb) {
        for (const ab of bb.meshes) {
          const Ub = ab.material?._buildGroup;
          if (Ub && !bb._groups.get(Ub)?.includes(ab)) return !0
        }
        return !1
      }

      function Zb(bb) {
        const ab = new Map;
        for (const Ub of bb.meshes) {
          const bb = Ub.material?._buildGroup;
          if (!bb) continue;
          const Ab = ab.get(bb);
          Ab ? Ab.push(Ub) : ab.set(bb, [Ub])
        }
        for (const [Ub, Ab] of bb._groups) {
          const bb = ab.get(Ub) ?? [];
          (Ab.length !== bb.length || bb.some(((bb, ab) => Ab[ab] !== bb))) && (Ab.length = 0, Ab.push(...bb)), ab.delete(Ub)
        }
        for (const [Ub, Ab] of ab) {
          const ab = Ab;
          bb._groups.set(Ub, ab)
        }
      }

      function Db(bb, ab) {
        const Ub = ab.o;
        if (Ub?.length) {
          const bb = new Set(Ub);
          for (let ab = Bb._renderables.length - 1; ab >= 0; ab--) bb.has(Bb._renderables[ab]) && Bb._renderables.splice(ab, 1)
        }
        ab.o = void 0, ab.r = void 0, Bb._runtimeBuilds?.dropBase(bb), Bb._rebuildHook = Eb, Rb = !0
      }

      function zb(bb, ab) {
        const Ub = new Set(bb._disposables.slice(0, ab));
        for (let Ab = bb._disposables.length - 1; Ab >= ab; Ab--) Ub.has(bb._disposables[Ab]) && bb._disposables.splice(Ab, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);