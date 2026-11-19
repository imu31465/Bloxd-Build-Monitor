export const id = 385;
export const ids = [385];
export const modules = {
  61065: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      rebuildScenePbrPipelines: () => Mz,
      rebuildSceneRenderables: () => tz
    });
    var Ez = bz(40944),
      nz = (zz, uz) => zz.order - uz.order,
      iz = 8,
      lz = zz => tz(zz);
    async function Mz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await Hz(zz, "pbr", uz)
    }
    async function tz(zz) {
      await Hz(zz, void 0, !1)
    }
    async function Hz(zz, uz, Mz) {
      const tz = zz;
      if (!tz._built && !Mz) return;
      const Hz = tz._lightListVersion ?? 0,
        Oz = tz.surface.engine,
        pz = zz => {
          tz._z ? zz.forEach((zz => zz())) : (0, Ez.c)(Oz, (() => zz.forEach((zz => zz()))))
        };
      let dz = !1,
        Fz = !1,
        Zz = !1,
        Rz = !1;
      try {
        for (let zz = 1;; zz++) {
          if (void 0 !== uz) {
            await Kz();
            break
          }
          if (Xz(tz), await Kz(), !wz(tz)) break;
          if (zz >= iz) {
            tz._rebuildHook = lz, Rz = !0, Fz = !0;
            break
          }
        }
        Zz = !0
      } finally {
        if (dz && (tz._renderables.sort(nz), tz._renderableVersion++, tz._materialEpoch++, tz._built && tz._frameGraph.build()), void 0 === uz && Zz && !Fz && (tz._lightListVersion ?? 0) === Hz) {
          const zz = tz._pendingTopologyRetirements?.splice(0);
          zz?.length && pz(zz), Rz || (tz._rebuildHook = void 0)
        }
      }
      async function Kz() {
        for (const [zz, Ez] of tz._groups) {
          if (void 0 !== uz && zz._materialFamily !== uz) continue;
          if (0 === Ez.length) {
            (Ez.o || Ez.r) && (fz(zz, Ez), dz = !0);
            continue
          }
          const nz = tz._runtimeBuilds;
          await (nz?.wait(Ez));
          let iz = !1;
          const Mz = async () => {
            const uz = tz._runtimeBuilds,
              bz = [...Ez].filter((uz => tz.meshes.includes(uz) && uz.material?._buildGroup === zz));
            if (0 === bz.length) return void fz(zz, Ez);
            const lz = !!Ez.r,
              Mz = tz._disposables.length,
              Hz = new Map,
              Oz = new Map(bz.map((zz => [zz, zz.material])));
            for (const zz of bz) {
              const bz = tz._meshDisposables.get(zz);
              bz && (Hz.set(zz, bz), tz._meshDisposables.delete(zz), uz?.holdPendingDisposers(zz, bz))
            }
            let dz, Fz;
            tz._p = zz => (Fz = zz, !0);
            try {
              dz = await zz(tz, bz)
            } catch (oz) {
              Fz?.[1]();
              for (const nz of bz) {
                const bz = Hz.get(nz),
                  iz = tz._meshDisposables.get(nz);
                if (iz && iz !== bz)
                  for (const zz of iz) zz();
                const lz = tz.meshes.includes(nz) && nz.material === Oz.get(nz) && nz.material?._buildGroup === zz && Ez.includes(nz);
                bz && lz ? tz._meshDisposables.set(nz, bz) : (tz._meshDisposables.delete(nz), bz && pz(bz)), bz && uz?.releasePendingDisposers(nz, bz)
              }
              throw oz
            } finally {
              delete tz._p
            }
            if (tz._z || nz?._d()) {
              Fz?.[1]();
              for (const uz of bz) {
                const zz = tz._meshDisposables.get(uz),
                  bz = Hz.get(uz);
                if (zz && zz !== bz)
                  for (const uz of zz) uz();
                tz._meshDisposables.delete(uz)
              }
              for (const uz of tz._disposables.splice(0)) uz();
              const zz = [...Hz.values()].flat();
              pz(zz);
              for (const [bz, Ez] of Hz) uz?.releasePendingDisposers(bz, Ez);
              return
            }
            Fz?.[0](), zz._rebuildSingle = dz.rebuildSingle, Ez.r = tz._runtimeBuilds?.base(zz, dz.rebuildSingle) ?? dz.rebuildSingle, "pbr" === zz._materialFamily && dz._G && (Ez._w = null), lz && sz(tz, Mz);
            const Zz = new Set(bz.filter((uz => tz.meshes.includes(uz) && uz.material === Oz.get(uz) && uz.material?._buildGroup === zz && Ez.includes(uz))));
            if (Zz.size !== bz.length && dz.renderables.some((zz => !zz.mesh))) {
              for (const zz of bz) {
                const bz = tz._meshDisposables.get(zz),
                  Ez = Hz.get(zz);
                if (bz && bz !== Ez)
                  for (const zz of bz) zz();
                Ez && tz.meshes.includes(zz) ? tz._meshDisposables.set(zz, Ez) : (tz._meshDisposables.delete(zz), Ez && pz(Ez)), Ez && uz?.releasePendingDisposers(zz, Ez)
              }
              return void(iz = !0)
            }
            const Rz = new Set;
            for (const zz of bz)
              if (Zz.has(zz)) Rz.add(zz.material), tz._runtimeBuilds?.reset(zz);
              else {
                const bz = Hz.get(zz),
                  Ez = tz._meshDisposables.get(zz);
                if (Ez && Ez !== bz)
                  for (const zz of Ez) zz();
                bz && tz.meshes.includes(zz) ? (tz._meshDisposables.set(zz, bz), Hz.delete(zz), uz?.releasePendingDisposers(zz, bz)) : tz._meshDisposables.delete(zz)
              } for (const zz of Rz) zz._csmGen = (zz._csmGen ?? 0) + 1;
            const Kz = Ez.o,
              wz = Kz?.length ? new Set(Kz) : null;
            for (let zz = tz._renderables.length - 1; zz >= 0; zz--) {
              const uz = tz._renderables[zz];
              (Zz.has(uz.mesh) || wz?.has(uz)) && tz._renderables.splice(zz, 1)
            }
            const Xz = dz.renderables.filter((zz => !zz.mesh || Zz.has(zz.mesh)));
            tz._renderables.push(...Xz), Ez.o = Xz;
            const rz = [...Hz.values()].flat();
            pz(rz);
            for (const [zz, Ez] of Hz) uz?.releasePendingDisposers(zz, Ez)
          }, {
            X: Hz
          } = await Promise.resolve().then((() => bz(60425))), Oz = 3;
          for (let uz = 1;; uz++) {
            if (iz = !1, await Hz(tz, zz, Mz), tz._z || nz?._d()) return void(Fz = !0);
            if (!iz) break;
            if (uz >= Oz) {
              fz(zz, Ez), tz._rebuildHook = lz, Rz = !0, Fz = !0;
              break
            }
          }
          iz ? dz = !0 : dz = !0
        }
      }

      function wz(zz) {
        for (const uz of zz.meshes) {
          const bz = uz.material?._buildGroup;
          if (bz && !zz._groups.get(bz)?.includes(uz)) return !0
        }
        return !1
      }

      function Xz(zz) {
        const uz = new Map;
        for (const bz of zz.meshes) {
          const zz = bz.material?._buildGroup;
          if (!zz) continue;
          const Ez = uz.get(zz);
          Ez ? Ez.push(bz) : uz.set(zz, [bz])
        }
        for (const [bz, Ez] of zz._groups) {
          const zz = uz.get(bz) ?? [];
          (Ez.length !== zz.length || zz.some(((zz, uz) => Ez[uz] !== zz))) && (Ez.length = 0, Ez.push(...zz)), uz.delete(bz)
        }
        for (const [bz, Ez] of uz) {
          const uz = Ez;
          zz._groups.set(bz, uz)
        }
      }

      function fz(zz, uz) {
        const bz = uz.o;
        if (bz?.length) {
          const zz = new Set(bz);
          for (let uz = tz._renderables.length - 1; uz >= 0; uz--) zz.has(tz._renderables[uz]) && tz._renderables.splice(uz, 1)
        }
        uz.o = void 0, uz.r = void 0, tz._runtimeBuilds?.dropBase(zz), tz._rebuildHook = lz, Rz = !0
      }

      function sz(zz, uz) {
        const bz = new Set(zz._disposables.slice(0, uz));
        for (let Ez = zz._disposables.length - 1; Ez >= uz; Ez--) bz.has(zz._disposables[Ez]) && zz._disposables.splice(Ez, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);