export const id = 701;
export const ids = [701];
export const modules = {
  64900: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      rebuildScenePbrPipelines: () => pV,
      rebuildSceneRenderables: () => QV
    });
    var JV = xV(44615),
      YV = (VV, eV) => VV.order - eV.order,
      UV = 8,
      yV = VV => QV(VV);
    async function pV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await nV(VV, "pbr", eV)
    }
    async function QV(VV) {
      await nV(VV, void 0, !1)
    }
    async function nV(VV, eV, pV) {
      const QV = VV;
      if (!QV._built && !pV) return;
      const nV = QV._lightListVersion ?? 0,
        wV = QV.surface.engine,
        ZV = VV => {
          QV._z ? VV.forEach((VV => VV())) : (0, JV.e)(wV, (() => VV.forEach((VV => VV()))))
        };
      let vV = !1,
        rV = !1,
        kV = !1,
        bV = !1;
      try {
        for (let VV = 1;; VV++) {
          if (void 0 !== eV) {
            await EV();
            break
          }
          if (jV(QV), await EV(), !BV(QV)) break;
          if (VV >= UV) {
            QV._rebuildHook = yV, bV = !0, rV = !0;
            break
          }
        }
        kV = !0
      } finally {
        if (vV && (QV._renderables.sort(YV), QV._renderableVersion++, QV._materialEpoch++, QV._built && QV._frameGraph.build()), void 0 === eV && kV && !rV && (QV._lightListVersion ?? 0) === nV) {
          const VV = QV._pendingTopologyRetirements?.splice(0);
          VV?.length && ZV(VV), bV || (QV._rebuildHook = void 0)
        }
      }
      async function EV() {
        for (const [VV, JV] of QV._groups) {
          if (void 0 !== eV && VV._materialFamily !== eV) continue;
          if (0 === JV.length) {
            (JV.o || JV.r) && (qV(VV, JV), vV = !0);
            continue
          }
          const YV = QV._runtimeBuilds;
          await (YV?.wait(JV));
          let UV = !1;
          const pV = async () => {
            const eV = QV._runtimeBuilds,
              xV = [...JV].filter((eV => QV.meshes.includes(eV) && eV.material?._buildGroup === VV));
            if (0 === xV.length) return void qV(VV, JV);
            const yV = !!JV.r,
              pV = QV._disposables.length,
              nV = new Map,
              wV = new Map(xV.map((VV => [VV, VV.material])));
            for (const VV of xV) {
              const xV = QV._meshDisposables.get(VV);
              xV && (nV.set(VV, xV), QV._meshDisposables.delete(VV), eV?.holdPendingDisposers(VV, xV))
            }
            let vV, rV;
            QV._p = VV => (rV = VV, !0);
            try {
              vV = await VV(QV, xV)
            } catch (TV) {
              rV?.[1]();
              for (const YV of xV) {
                const xV = nV.get(YV),
                  UV = QV._meshDisposables.get(YV);
                if (UV && UV !== xV)
                  for (const VV of UV) VV();
                const yV = QV.meshes.includes(YV) && YV.material === wV.get(YV) && YV.material?._buildGroup === VV && JV.includes(YV);
                xV && yV ? QV._meshDisposables.set(YV, xV) : (QV._meshDisposables.delete(YV), xV && ZV(xV)), xV && eV?.releasePendingDisposers(YV, xV)
              }
              throw TV
            } finally {
              delete QV._p
            }
            if (QV._z || YV?._d()) {
              rV?.[1]();
              for (const eV of xV) {
                const VV = QV._meshDisposables.get(eV),
                  xV = nV.get(eV);
                if (VV && VV !== xV)
                  for (const eV of VV) eV();
                QV._meshDisposables.delete(eV)
              }
              for (const eV of QV._disposables.splice(0)) eV();
              const VV = [...nV.values()].flat();
              ZV(VV);
              for (const [xV, JV] of nV) eV?.releasePendingDisposers(xV, JV);
              return
            }
            rV?.[0](), VV._rebuildSingle = vV.rebuildSingle, JV.r = QV._runtimeBuilds?.base(VV, vV.rebuildSingle) ?? vV.rebuildSingle, "pbr" === VV._materialFamily && vV._G && (JV._w = null), yV && tV(QV, pV);
            const kV = new Set(xV.filter((eV => QV.meshes.includes(eV) && eV.material === wV.get(eV) && eV.material?._buildGroup === VV && JV.includes(eV))));
            if (kV.size !== xV.length && vV.renderables.some((VV => !VV.mesh))) {
              for (const VV of xV) {
                const xV = QV._meshDisposables.get(VV),
                  JV = nV.get(VV);
                if (xV && xV !== JV)
                  for (const VV of xV) VV();
                JV && QV.meshes.includes(VV) ? QV._meshDisposables.set(VV, JV) : (QV._meshDisposables.delete(VV), JV && ZV(JV)), JV && eV?.releasePendingDisposers(VV, JV)
              }
              return void(UV = !0)
            }
            const bV = new Set;
            for (const VV of xV)
              if (kV.has(VV)) bV.add(VV.material), QV._runtimeBuilds?.reset(VV);
              else {
                const xV = nV.get(VV),
                  JV = QV._meshDisposables.get(VV);
                if (JV && JV !== xV)
                  for (const VV of JV) VV();
                xV && QV.meshes.includes(VV) ? (QV._meshDisposables.set(VV, xV), nV.delete(VV), eV?.releasePendingDisposers(VV, xV)) : QV._meshDisposables.delete(VV)
              } for (const VV of bV) VV._csmGen = (VV._csmGen ?? 0) + 1;
            const EV = JV.o,
              BV = EV?.length ? new Set(EV) : null;
            for (let VV = QV._renderables.length - 1; VV >= 0; VV--) {
              const eV = QV._renderables[VV];
              (kV.has(eV.mesh) || BV?.has(eV)) && QV._renderables.splice(VV, 1)
            }
            const jV = vV.renderables.filter((VV => !VV.mesh || kV.has(VV.mesh)));
            QV._renderables.push(...jV), JV.o = jV;
            const FV = [...nV.values()].flat();
            ZV(FV);
            for (const [VV, JV] of nV) eV?.releasePendingDisposers(VV, JV)
          }, {
            X: nV
          } = await Promise.resolve().then((() => xV(64396))), wV = 3;
          for (let eV = 1;; eV++) {
            if (UV = !1, await nV(QV, VV, pV), QV._z || YV?._d()) return void(rV = !0);
            if (!UV) break;
            if (eV >= wV) {
              qV(VV, JV), QV._rebuildHook = yV, bV = !0, rV = !0;
              break
            }
          }
          UV ? vV = !0 : vV = !0
        }
      }

      function BV(VV) {
        for (const eV of VV.meshes) {
          const xV = eV.material?._buildGroup;
          if (xV && !VV._groups.get(xV)?.includes(eV)) return !0
        }
        return !1
      }

      function jV(VV) {
        const eV = new Map;
        for (const xV of VV.meshes) {
          const VV = xV.material?._buildGroup;
          if (!VV) continue;
          const JV = eV.get(VV);
          JV ? JV.push(xV) : eV.set(VV, [xV])
        }
        for (const [xV, JV] of VV._groups) {
          const VV = eV.get(xV) ?? [];
          (JV.length !== VV.length || VV.some(((VV, eV) => JV[eV] !== VV))) && (JV.length = 0, JV.push(...VV)), eV.delete(xV)
        }
        for (const [xV, JV] of eV) {
          const eV = JV;
          VV._groups.set(xV, eV)
        }
      }

      function qV(VV, eV) {
        const xV = eV.o;
        if (xV?.length) {
          const VV = new Set(xV);
          for (let eV = QV._renderables.length - 1; eV >= 0; eV--) VV.has(QV._renderables[eV]) && QV._renderables.splice(eV, 1)
        }
        eV.o = void 0, eV.r = void 0, QV._runtimeBuilds?.dropBase(VV), QV._rebuildHook = yV, bV = !0
      }

      function tV(VV, eV) {
        const xV = new Set(VV._disposables.slice(0, eV));
        for (let JV = VV._disposables.length - 1; JV >= eV; JV--) xV.has(VV._disposables[JV]) && VV._disposables.splice(JV, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);