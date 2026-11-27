export const id = 701;
export const ids = [701];
export const modules = {
  64466: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      rebuildScenePbrPipelines: () => Ue,
      rebuildSceneRenderables: () => Fe
    });
    var ye = He(44904),
      be = (ee, ie) => ee.order - ie.order,
      Me = 8,
      Ke = ee => Fe(ee);
    async function Ue(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await Je(ee, "pbr", ie)
    }
    async function Fe(ee) {
      await Je(ee, void 0, !1)
    }
    async function Je(ee, ie, Ue) {
      const Fe = ee;
      if (!Fe._built && !Ue) return;
      const Je = Fe._lightListVersion ?? 0,
        oe = Fe.surface.engine,
        Re = ee => {
          Fe._z ? ee.forEach((ee => ee())) : (0, ye.c)(oe, (() => ee.forEach((ee => ee()))))
        };
      let ke = !1,
        qe = !1,
        fe = !1,
        Te = !1;
      try {
        for (let ee = 1;; ee++) {
          if (void 0 !== ie) {
            await pe();
            break
          }
          if (ze(Fe), await pe(), !Xe(Fe)) break;
          if (ee >= Me) {
            Fe._rebuildHook = Ke, Te = !0, qe = !0;
            break
          }
        }
        fe = !0
      } finally {
        if (ke && (Fe._renderables.sort(be), Fe._renderableVersion++, Fe._materialEpoch++, Fe._built && Fe._frameGraph.build()), void 0 === ie && fe && !qe && (Fe._lightListVersion ?? 0) === Je) {
          const ee = Fe._pendingTopologyRetirements?.splice(0);
          ee?.length && Re(ee), Te || (Fe._rebuildHook = void 0)
        }
      }
      async function pe() {
        for (const [ee, ye] of Fe._groups) {
          if (void 0 !== ie && ee._materialFamily !== ie) continue;
          if (0 === ye.length) {
            (ye.o || ye.r) && (Be(ee, ye), ke = !0);
            continue
          }
          const be = Fe._runtimeBuilds;
          await (be?.wait(ye));
          let Me = !1;
          const Ue = async () => {
            const ie = Fe._runtimeBuilds,
              He = [...ye].filter((ie => Fe.meshes.includes(ie) && ie.material?._buildGroup === ee));
            if (0 === He.length) return void Be(ee, ye);
            const Ke = !!ye.r,
              Ue = Fe._disposables.length,
              Je = new Map,
              oe = new Map(He.map((ee => [ee, ee.material])));
            for (const ee of He) {
              const He = Fe._meshDisposables.get(ee);
              He && (Je.set(ee, He), Fe._meshDisposables.delete(ee), ie?.holdPendingDisposers(ee, He))
            }
            let ke, qe;
            Fe._p = ee => (qe = ee, !0);
            try {
              ke = await ee(Fe, He)
            } catch (Oe) {
              qe?.[1]();
              for (const be of He) {
                const He = Je.get(be),
                  Me = Fe._meshDisposables.get(be);
                if (Me && Me !== He)
                  for (const ee of Me) ee();
                const Ke = Fe.meshes.includes(be) && be.material === oe.get(be) && be.material?._buildGroup === ee && ye.includes(be);
                He && Ke ? Fe._meshDisposables.set(be, He) : (Fe._meshDisposables.delete(be), He && Re(He)), He && ie?.releasePendingDisposers(be, He)
              }
              throw Oe
            } finally {
              delete Fe._p
            }
            if (Fe._z || be?._d()) {
              qe?.[1]();
              for (const ie of He) {
                const ee = Fe._meshDisposables.get(ie),
                  He = Je.get(ie);
                if (ee && ee !== He)
                  for (const ie of ee) ie();
                Fe._meshDisposables.delete(ie)
              }
              for (const ie of Fe._disposables.splice(0)) ie();
              const ee = [...Je.values()].flat();
              Re(ee);
              for (const [He, ye] of Je) ie?.releasePendingDisposers(He, ye);
              return
            }
            qe?.[0](), ee._rebuildSingle = ke.rebuildSingle, ye.r = Fe._runtimeBuilds?.base(ee, ke.rebuildSingle) ?? ke.rebuildSingle, "pbr" === ee._materialFamily && ke._G && (ye._w = null), Ke && Ee(Fe, Ue);
            const fe = new Set(He.filter((ie => Fe.meshes.includes(ie) && ie.material === oe.get(ie) && ie.material?._buildGroup === ee && ye.includes(ie))));
            if (fe.size !== He.length && ke.renderables.some((ee => !ee.mesh))) {
              for (const ee of He) {
                const He = Fe._meshDisposables.get(ee),
                  ye = Je.get(ee);
                if (He && He !== ye)
                  for (const ee of He) ee();
                ye && Fe.meshes.includes(ee) ? Fe._meshDisposables.set(ee, ye) : (Fe._meshDisposables.delete(ee), ye && Re(ye)), ye && ie?.releasePendingDisposers(ee, ye)
              }
              return void(Me = !0)
            }
            const Te = new Set;
            for (const ee of He)
              if (fe.has(ee)) Te.add(ee.material), Fe._runtimeBuilds?.reset(ee);
              else {
                const He = Je.get(ee),
                  ye = Fe._meshDisposables.get(ee);
                if (ye && ye !== He)
                  for (const ee of ye) ee();
                He && Fe.meshes.includes(ee) ? (Fe._meshDisposables.set(ee, He), Je.delete(ee), ie?.releasePendingDisposers(ee, He)) : Fe._meshDisposables.delete(ee)
              } for (const ee of Te) ee._csmGen = (ee._csmGen ?? 0) + 1;
            const pe = ye.o,
              Xe = pe?.length ? new Set(pe) : null;
            for (let ee = Fe._renderables.length - 1; ee >= 0; ee--) {
              const ie = Fe._renderables[ee];
              (fe.has(ie.mesh) || Xe?.has(ie)) && Fe._renderables.splice(ee, 1)
            }
            const ze = ke.renderables.filter((ee => !ee.mesh || fe.has(ee.mesh)));
            Fe._renderables.push(...ze), ye.o = ze;
            const ge = [...Je.values()].flat();
            Re(ge);
            for (const [ee, ye] of Je) ie?.releasePendingDisposers(ee, ye)
          }, {
            X: Je
          } = await Promise.resolve().then((() => He(63923))), oe = 3;
          for (let ie = 1;; ie++) {
            if (Me = !1, await Je(Fe, ee, Ue), Fe._z || be?._d()) return void(qe = !0);
            if (!Me) break;
            if (ie >= oe) {
              Be(ee, ye), Fe._rebuildHook = Ke, Te = !0, qe = !0;
              break
            }
          }
          Me ? ke = !0 : ke = !0
        }
      }

      function Xe(ee) {
        for (const ie of ee.meshes) {
          const He = ie.material?._buildGroup;
          if (He && !ee._groups.get(He)?.includes(ie)) return !0
        }
        return !1
      }

      function ze(ee) {
        const ie = new Map;
        for (const He of ee.meshes) {
          const ee = He.material?._buildGroup;
          if (!ee) continue;
          const ye = ie.get(ee);
          ye ? ye.push(He) : ie.set(ee, [He])
        }
        for (const [He, ye] of ee._groups) {
          const ee = ie.get(He) ?? [];
          (ye.length !== ee.length || ee.some(((ee, ie) => ye[ie] !== ee))) && (ye.length = 0, ye.push(...ee)), ie.delete(He)
        }
        for (const [He, ye] of ie) {
          const ie = ye;
          ee._groups.set(He, ie)
        }
      }

      function Be(ee, ie) {
        const He = ie.o;
        if (He?.length) {
          const ee = new Set(He);
          for (let ie = Fe._renderables.length - 1; ie >= 0; ie--) ee.has(Fe._renderables[ie]) && Fe._renderables.splice(ie, 1)
        }
        ie.o = void 0, ie.r = void 0, Fe._runtimeBuilds?.dropBase(ee), Fe._rebuildHook = Ke, Te = !0
      }

      function Ee(ee, ie) {
        const He = new Set(ee._disposables.slice(0, ie));
        for (let ye = ee._disposables.length - 1; ye >= ie; ye--) He.has(ee._disposables[ye]) && ee._disposables.splice(ye, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);