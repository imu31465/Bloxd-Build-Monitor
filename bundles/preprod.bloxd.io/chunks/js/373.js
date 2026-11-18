export const id = 373;
export const ids = [373];
export const modules = {
  60493: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      rebuildScenePbrPipelines: () => cb,
      rebuildSceneRenderables: () => Py
    });
    var Uy = Wy(40204),
      hy = (yb, bb) => yb.order - bb.order,
      fy = 8,
      Zy = yb => Py(yb);
    async function cb(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await oy(yb, "pbr", bb)
    }
    async function Py(yb) {
      await oy(yb, void 0, !1)
    }
    async function oy(yb, bb, cb) {
      const Py = yb;
      if (!Py._built && !cb) return;
      const oy = Py._lightListVersion ?? 0,
        By = Py.surface.engine,
        Ky = yb => {
          Py._z ? yb.forEach((yb => yb())) : (0, Uy.b)(By, (() => yb.forEach((yb => yb()))))
        };
      let ey = !1,
        qb = !1,
        sy = !1,
        Sy = !1;
      try {
        for (let yb = 1;; yb++) {
          if (void 0 !== bb) {
            await Ey();
            break
          }
          if (mb(Py), await Ey(), !ly(Py)) break;
          if (yb >= fy) {
            Py._rebuildHook = Zy, Sy = !0, qb = !0;
            break
          }
        }
        sy = !0
      } finally {
        if (ey && (Py._renderables.sort(hy), Py._renderableVersion++, Py._materialEpoch++, Py._built && Py._frameGraph.build()), void 0 === bb && sy && !qb && (Py._lightListVersion ?? 0) === oy) {
          const yb = Py._pendingTopologyRetirements?.splice(0);
          yb?.length && Ky(yb), Sy || (Py._rebuildHook = void 0)
        }
      }
      async function Ey() {
        for (const [yb, Uy] of Py._groups) {
          if (void 0 !== bb && yb._materialFamily !== bb) continue;
          if (0 === Uy.length) {
            (Uy.o || Uy.r) && (Cy(yb, Uy), ey = !0);
            continue
          }
          const hy = Py._runtimeBuilds;
          await (hy?.wait(Uy));
          let fy = !1;
          const cb = async () => {
            const bb = Py._runtimeBuilds,
              Wy = [...Uy].filter((bb => Py.meshes.includes(bb) && bb.material?._buildGroup === yb));
            if (0 === Wy.length) return void Cy(yb, Uy);
            const Zy = !!Uy.r,
              cb = Py._disposables.length,
              oy = new Map,
              By = new Map(Wy.map((yb => [yb, yb.material])));
            for (const yb of Wy) {
              const Wy = Py._meshDisposables.get(yb);
              Wy && (oy.set(yb, Wy), Py._meshDisposables.delete(yb), bb?.holdPendingDisposers(yb, Wy))
            }
            let ey, qb;
            Py._p = yb => (qb = yb, !0);
            try {
              ey = await yb(Py, Wy)
            } catch (Jy) {
              qb?.[1]();
              for (const hy of Wy) {
                const Wy = oy.get(hy),
                  fy = Py._meshDisposables.get(hy);
                if (fy && fy !== Wy)
                  for (const yb of fy) yb();
                const Zy = Py.meshes.includes(hy) && hy.material === By.get(hy) && hy.material?._buildGroup === yb && Uy.includes(hy);
                Wy && Zy ? Py._meshDisposables.set(hy, Wy) : (Py._meshDisposables.delete(hy), Wy && Ky(Wy)), Wy && bb?.releasePendingDisposers(hy, Wy)
              }
              throw Jy
            } finally {
              delete Py._p
            }
            if (Py._z || hy?._d()) {
              qb?.[1]();
              for (const bb of Wy) {
                const yb = Py._meshDisposables.get(bb),
                  Wy = oy.get(bb);
                if (yb && yb !== Wy)
                  for (const bb of yb) bb();
                Py._meshDisposables.delete(bb)
              }
              for (const bb of Py._disposables.splice(0)) bb();
              const yb = [...oy.values()].flat();
              Ky(yb);
              for (const [Wy, Uy] of oy) bb?.releasePendingDisposers(Wy, Uy);
              return
            }
            qb?.[0](), yb._rebuildSingle = ey.rebuildSingle, Uy.r = Py._runtimeBuilds?.base(yb, ey.rebuildSingle) ?? ey.rebuildSingle, "pbr" === yb._materialFamily && ey._G && (Uy._w = null), Zy && Ty(Py, cb);
            const sy = new Set(Wy.filter((bb => Py.meshes.includes(bb) && bb.material === By.get(bb) && bb.material?._buildGroup === yb && Uy.includes(bb))));
            if (sy.size !== Wy.length && ey.renderables.some((yb => !yb.mesh))) {
              for (const yb of Wy) {
                const Wy = Py._meshDisposables.get(yb),
                  Uy = oy.get(yb);
                if (Wy && Wy !== Uy)
                  for (const yb of Wy) yb();
                Uy && Py.meshes.includes(yb) ? Py._meshDisposables.set(yb, Uy) : (Py._meshDisposables.delete(yb), Uy && Ky(Uy)), Uy && bb?.releasePendingDisposers(yb, Uy)
              }
              return void(fy = !0)
            }
            const Sy = new Set;
            for (const yb of Wy)
              if (sy.has(yb)) Sy.add(yb.material), Py._runtimeBuilds?.reset(yb);
              else {
                const Wy = oy.get(yb),
                  Uy = Py._meshDisposables.get(yb);
                if (Uy && Uy !== Wy)
                  for (const yb of Uy) yb();
                Wy && Py.meshes.includes(yb) ? (Py._meshDisposables.set(yb, Wy), oy.delete(yb), bb?.releasePendingDisposers(yb, Wy)) : Py._meshDisposables.delete(yb)
              } for (const yb of Sy) yb._csmGen = (yb._csmGen ?? 0) + 1;
            const Ey = Uy.o,
              ly = Ey?.length ? new Set(Ey) : null;
            for (let yb = Py._renderables.length - 1; yb >= 0; yb--) {
              const bb = Py._renderables[yb];
              (sy.has(bb.mesh) || ly?.has(bb)) && Py._renderables.splice(yb, 1)
            }
            const mb = ey.renderables.filter((yb => !yb.mesh || sy.has(yb.mesh)));
            Py._renderables.push(...mb), Uy.o = mb;
            const Vy = [...oy.values()].flat();
            Ky(Vy);
            for (const [yb, Uy] of oy) bb?.releasePendingDisposers(yb, Uy)
          }, {
            X: oy
          } = await Promise.resolve().then((() => Wy(59806))), By = 3;
          for (let bb = 1;; bb++) {
            if (fy = !1, await oy(Py, yb, cb), Py._z || hy?._d()) return void(qb = !0);
            if (!fy) break;
            if (bb >= By) {
              Cy(yb, Uy), Py._rebuildHook = Zy, Sy = !0, qb = !0;
              break
            }
          }
          fy ? ey = !0 : ey = !0
        }
      }

      function ly(yb) {
        for (const bb of yb.meshes) {
          const Wy = bb.material?._buildGroup;
          if (Wy && !yb._groups.get(Wy)?.includes(bb)) return !0
        }
        return !1
      }

      function mb(yb) {
        const bb = new Map;
        for (const Wy of yb.meshes) {
          const yb = Wy.material?._buildGroup;
          if (!yb) continue;
          const Uy = bb.get(yb);
          Uy ? Uy.push(Wy) : bb.set(yb, [Wy])
        }
        for (const [Wy, Uy] of yb._groups) {
          const yb = bb.get(Wy) ?? [];
          (Uy.length !== yb.length || yb.some(((yb, bb) => Uy[bb] !== yb))) && (Uy.length = 0, Uy.push(...yb)), bb.delete(Wy)
        }
        for (const [Wy, Uy] of bb) {
          const bb = Uy;
          yb._groups.set(Wy, bb)
        }
      }

      function Cy(yb, bb) {
        const Wy = bb.o;
        if (Wy?.length) {
          const yb = new Set(Wy);
          for (let bb = Py._renderables.length - 1; bb >= 0; bb--) yb.has(Py._renderables[bb]) && Py._renderables.splice(bb, 1)
        }
        bb.o = void 0, bb.r = void 0, Py._runtimeBuilds?.dropBase(yb), Py._rebuildHook = Zy, Sy = !0
      }

      function Ty(yb, bb) {
        const Wy = new Set(yb._disposables.slice(0, bb));
        for (let Uy = yb._disposables.length - 1; Uy >= bb; Uy--) Wy.has(yb._disposables[Uy]) && yb._disposables.splice(Uy, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);