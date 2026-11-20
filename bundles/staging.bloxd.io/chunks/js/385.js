export const id = 385;
export const ids = [385];
export const modules = {
  61036: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      rebuildScenePbrPipelines: () => oz,
      rebuildSceneRenderables: () => vz
    });
    var Fz = sz(40840),
      Wz = (zz, tz) => zz.order - tz.order,
      Xz = 8,
      Oz = zz => vz(zz);
    async function oz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await Uz(zz, "pbr", tz)
    }
    async function vz(zz) {
      await Uz(zz, void 0, !1)
    }
    async function Uz(zz, tz, oz) {
      const vz = zz;
      if (!vz._built && !oz) return;
      const Uz = vz._lightListVersion ?? 0,
        Kz = vz.surface.engine,
        uz = zz => {
          vz._z ? zz.forEach((zz => zz())) : (0, Fz.c)(Kz, (() => zz.forEach((zz => zz()))))
        };
      let Nz = !1,
        bz = !1,
        wz = !1,
        Dz = !1;
      try {
        for (let zz = 1;; zz++) {
          if (void 0 !== tz) {
            await gz();
            break
          }
          if (Bz(vz), await gz(), !Hz(vz)) break;
          if (zz >= Xz) {
            vz._rebuildHook = Oz, Dz = !0, bz = !0;
            break
          }
        }
        wz = !0
      } finally {
        if (Nz && (vz._renderables.sort(Wz), vz._renderableVersion++, vz._materialEpoch++, vz._built && vz._frameGraph.build()), void 0 === tz && wz && !bz && (vz._lightListVersion ?? 0) === Uz) {
          const zz = vz._pendingTopologyRetirements?.splice(0);
          zz?.length && uz(zz), Dz || (vz._rebuildHook = void 0)
        }
      }
      async function gz() {
        for (const [zz, Fz] of vz._groups) {
          if (void 0 !== tz && zz._materialFamily !== tz) continue;
          if (0 === Fz.length) {
            (Fz.o || Fz.r) && (Pz(zz, Fz), Nz = !0);
            continue
          }
          const Wz = vz._runtimeBuilds;
          await (Wz?.wait(Fz));
          let Xz = !1;
          const oz = async () => {
            const tz = vz._runtimeBuilds,
              sz = [...Fz].filter((tz => vz.meshes.includes(tz) && tz.material?._buildGroup === zz));
            if (0 === sz.length) return void Pz(zz, Fz);
            const Oz = !!Fz.r,
              oz = vz._disposables.length,
              Uz = new Map,
              Kz = new Map(sz.map((zz => [zz, zz.material])));
            for (const zz of sz) {
              const sz = vz._meshDisposables.get(zz);
              sz && (Uz.set(zz, sz), vz._meshDisposables.delete(zz), tz?.holdPendingDisposers(zz, sz))
            }
            let Nz, bz;
            vz._p = zz => (bz = zz, !0);
            try {
              Nz = await zz(vz, sz)
            } catch (xz) {
              bz?.[1]();
              for (const Wz of sz) {
                const sz = Uz.get(Wz),
                  Xz = vz._meshDisposables.get(Wz);
                if (Xz && Xz !== sz)
                  for (const zz of Xz) zz();
                const Oz = vz.meshes.includes(Wz) && Wz.material === Kz.get(Wz) && Wz.material?._buildGroup === zz && Fz.includes(Wz);
                sz && Oz ? vz._meshDisposables.set(Wz, sz) : (vz._meshDisposables.delete(Wz), sz && uz(sz)), sz && tz?.releasePendingDisposers(Wz, sz)
              }
              throw xz
            } finally {
              delete vz._p
            }
            if (vz._z || Wz?._d()) {
              bz?.[1]();
              for (const tz of sz) {
                const zz = vz._meshDisposables.get(tz),
                  sz = Uz.get(tz);
                if (zz && zz !== sz)
                  for (const tz of zz) tz();
                vz._meshDisposables.delete(tz)
              }
              for (const tz of vz._disposables.splice(0)) tz();
              const zz = [...Uz.values()].flat();
              uz(zz);
              for (const [sz, Fz] of Uz) tz?.releasePendingDisposers(sz, Fz);
              return
            }
            bz?.[0](), zz._rebuildSingle = Nz.rebuildSingle, Fz.r = vz._runtimeBuilds?.base(zz, Nz.rebuildSingle) ?? Nz.rebuildSingle, "pbr" === zz._materialFamily && Nz._G && (Fz._w = null), Oz && rz(vz, oz);
            const wz = new Set(sz.filter((tz => vz.meshes.includes(tz) && tz.material === Kz.get(tz) && tz.material?._buildGroup === zz && Fz.includes(tz))));
            if (wz.size !== sz.length && Nz.renderables.some((zz => !zz.mesh))) {
              for (const zz of sz) {
                const sz = vz._meshDisposables.get(zz),
                  Fz = Uz.get(zz);
                if (sz && sz !== Fz)
                  for (const zz of sz) zz();
                Fz && vz.meshes.includes(zz) ? vz._meshDisposables.set(zz, Fz) : (vz._meshDisposables.delete(zz), Fz && uz(Fz)), Fz && tz?.releasePendingDisposers(zz, Fz)
              }
              return void(Xz = !0)
            }
            const Dz = new Set;
            for (const zz of sz)
              if (wz.has(zz)) Dz.add(zz.material), vz._runtimeBuilds?.reset(zz);
              else {
                const sz = Uz.get(zz),
                  Fz = vz._meshDisposables.get(zz);
                if (Fz && Fz !== sz)
                  for (const zz of Fz) zz();
                sz && vz.meshes.includes(zz) ? (vz._meshDisposables.set(zz, sz), Uz.delete(zz), tz?.releasePendingDisposers(zz, sz)) : vz._meshDisposables.delete(zz)
              } for (const zz of Dz) zz._csmGen = (zz._csmGen ?? 0) + 1;
            const gz = Fz.o,
              Hz = gz?.length ? new Set(gz) : null;
            for (let zz = vz._renderables.length - 1; zz >= 0; zz--) {
              const tz = vz._renderables[zz];
              (wz.has(tz.mesh) || Hz?.has(tz)) && vz._renderables.splice(zz, 1)
            }
            const Bz = Nz.renderables.filter((zz => !zz.mesh || wz.has(zz.mesh)));
            vz._renderables.push(...Bz), Fz.o = Bz;
            const Yz = [...Uz.values()].flat();
            uz(Yz);
            for (const [zz, Fz] of Uz) tz?.releasePendingDisposers(zz, Fz)
          }, {
            X: Uz
          } = await Promise.resolve().then((() => sz(60430))), Kz = 3;
          for (let tz = 1;; tz++) {
            if (Xz = !1, await Uz(vz, zz, oz), vz._z || Wz?._d()) return void(bz = !0);
            if (!Xz) break;
            if (tz >= Kz) {
              Pz(zz, Fz), vz._rebuildHook = Oz, Dz = !0, bz = !0;
              break
            }
          }
          Xz ? Nz = !0 : Nz = !0
        }
      }

      function Hz(zz) {
        for (const tz of zz.meshes) {
          const sz = tz.material?._buildGroup;
          if (sz && !zz._groups.get(sz)?.includes(tz)) return !0
        }
        return !1
      }

      function Bz(zz) {
        const tz = new Map;
        for (const sz of zz.meshes) {
          const zz = sz.material?._buildGroup;
          if (!zz) continue;
          const Fz = tz.get(zz);
          Fz ? Fz.push(sz) : tz.set(zz, [sz])
        }
        for (const [sz, Fz] of zz._groups) {
          const zz = tz.get(sz) ?? [];
          (Fz.length !== zz.length || zz.some(((zz, tz) => Fz[tz] !== zz))) && (Fz.length = 0, Fz.push(...zz)), tz.delete(sz)
        }
        for (const [sz, Fz] of tz) {
          const tz = Fz;
          zz._groups.set(sz, tz)
        }
      }

      function Pz(zz, tz) {
        const sz = tz.o;
        if (sz?.length) {
          const zz = new Set(sz);
          for (let tz = vz._renderables.length - 1; tz >= 0; tz--) zz.has(vz._renderables[tz]) && vz._renderables.splice(tz, 1)
        }
        tz.o = void 0, tz.r = void 0, vz._runtimeBuilds?.dropBase(zz), vz._rebuildHook = Oz, Dz = !0
      }

      function rz(zz, tz) {
        const sz = new Set(zz._disposables.slice(0, tz));
        for (let Fz = zz._disposables.length - 1; Fz >= tz; Fz--) sz.has(zz._disposables[Fz]) && zz._disposables.splice(Fz, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);