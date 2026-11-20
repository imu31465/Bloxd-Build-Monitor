export const id = 386;
export const ids = [386];
export const modules = {
  61304: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      rebuildScenePbrPipelines: () => yT,
      rebuildSceneRenderables: () => fT
    });
    var lT = cT(41302),
      MT = (TT, kT) => TT.order - kT.order,
      KT = 8,
      OT = TT => fT(TT);
    async function yT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await xT(TT, "pbr", kT)
    }
    async function fT(TT) {
      await xT(TT, void 0, !1)
    }
    async function xT(TT, kT, yT) {
      const fT = TT;
      if (!fT._built && !yT) return;
      const xT = fT._lightListVersion ?? 0,
        IT = fT.surface.engine,
        AT = TT => {
          fT._z ? TT.forEach((TT => TT())) : (0, lT.b)(IT, (() => TT.forEach((TT => TT()))))
        };
      let CT = !1,
        jT = !1,
        vT = !1,
        tT = !1;
      try {
        for (let TT = 1;; TT++) {
          if (void 0 !== kT) {
            await hT();
            break
          }
          if (QT(fT), await hT(), !NT(fT)) break;
          if (TT >= KT) {
            fT._rebuildHook = OT, tT = !0, jT = !0;
            break
          }
        }
        vT = !0
      } finally {
        if (CT && (fT._renderables.sort(MT), fT._renderableVersion++, fT._materialEpoch++, fT._built && fT._frameGraph.build()), void 0 === kT && vT && !jT && (fT._lightListVersion ?? 0) === xT) {
          const TT = fT._pendingTopologyRetirements?.splice(0);
          TT?.length && AT(TT), tT || (fT._rebuildHook = void 0)
        }
      }
      async function hT() {
        for (const [TT, lT] of fT._groups) {
          if (void 0 !== kT && TT._materialFamily !== kT) continue;
          if (0 === lT.length) {
            (lT.o || lT.r) && (ST(TT, lT), CT = !0);
            continue
          }
          const MT = fT._runtimeBuilds;
          await (MT?.wait(lT));
          let KT = !1;
          const yT = async () => {
            const kT = fT._runtimeBuilds,
              cT = [...lT].filter((kT => fT.meshes.includes(kT) && kT.material?._buildGroup === TT));
            if (0 === cT.length) return void ST(TT, lT);
            const OT = !!lT.r,
              yT = fT._disposables.length,
              xT = new Map,
              IT = new Map(cT.map((TT => [TT, TT.material])));
            for (const TT of cT) {
              const cT = fT._meshDisposables.get(TT);
              cT && (xT.set(TT, cT), fT._meshDisposables.delete(TT), kT?.holdPendingDisposers(TT, cT))
            }
            let CT, jT;
            fT._p = TT => (jT = TT, !0);
            try {
              CT = await TT(fT, cT)
            } catch (FT) {
              jT?.[1]();
              for (const MT of cT) {
                const cT = xT.get(MT),
                  KT = fT._meshDisposables.get(MT);
                if (KT && KT !== cT)
                  for (const TT of KT) TT();
                const OT = fT.meshes.includes(MT) && MT.material === IT.get(MT) && MT.material?._buildGroup === TT && lT.includes(MT);
                cT && OT ? fT._meshDisposables.set(MT, cT) : (fT._meshDisposables.delete(MT), cT && AT(cT)), cT && kT?.releasePendingDisposers(MT, cT)
              }
              throw FT
            } finally {
              delete fT._p
            }
            if (fT._z || MT?._d()) {
              jT?.[1]();
              for (const kT of cT) {
                const TT = fT._meshDisposables.get(kT),
                  cT = xT.get(kT);
                if (TT && TT !== cT)
                  for (const kT of TT) kT();
                fT._meshDisposables.delete(kT)
              }
              for (const kT of fT._disposables.splice(0)) kT();
              const TT = [...xT.values()].flat();
              AT(TT);
              for (const [cT, lT] of xT) kT?.releasePendingDisposers(cT, lT);
              return
            }
            jT?.[0](), TT._rebuildSingle = CT.rebuildSingle, lT.r = fT._runtimeBuilds?.base(TT, CT.rebuildSingle) ?? CT.rebuildSingle, "pbr" === TT._materialFamily && CT._G && (lT._w = null), OT && DT(fT, yT);
            const vT = new Set(cT.filter((kT => fT.meshes.includes(kT) && kT.material === IT.get(kT) && kT.material?._buildGroup === TT && lT.includes(kT))));
            if (vT.size !== cT.length && CT.renderables.some((TT => !TT.mesh))) {
              for (const TT of cT) {
                const cT = fT._meshDisposables.get(TT),
                  lT = xT.get(TT);
                if (cT && cT !== lT)
                  for (const TT of cT) TT();
                lT && fT.meshes.includes(TT) ? fT._meshDisposables.set(TT, lT) : (fT._meshDisposables.delete(TT), lT && AT(lT)), lT && kT?.releasePendingDisposers(TT, lT)
              }
              return void(KT = !0)
            }
            const tT = new Set;
            for (const TT of cT)
              if (vT.has(TT)) tT.add(TT.material), fT._runtimeBuilds?.reset(TT);
              else {
                const cT = xT.get(TT),
                  lT = fT._meshDisposables.get(TT);
                if (lT && lT !== cT)
                  for (const TT of lT) TT();
                cT && fT.meshes.includes(TT) ? (fT._meshDisposables.set(TT, cT), xT.delete(TT), kT?.releasePendingDisposers(TT, cT)) : fT._meshDisposables.delete(TT)
              } for (const TT of tT) TT._csmGen = (TT._csmGen ?? 0) + 1;
            const hT = lT.o,
              NT = hT?.length ? new Set(hT) : null;
            for (let TT = fT._renderables.length - 1; TT >= 0; TT--) {
              const kT = fT._renderables[TT];
              (vT.has(kT.mesh) || NT?.has(kT)) && fT._renderables.splice(TT, 1)
            }
            const QT = CT.renderables.filter((TT => !TT.mesh || vT.has(TT.mesh)));
            fT._renderables.push(...QT), lT.o = QT;
            const aT = [...xT.values()].flat();
            AT(aT);
            for (const [TT, lT] of xT) kT?.releasePendingDisposers(TT, lT)
          }, {
            X: xT
          } = await Promise.resolve().then((() => cT(60666))), IT = 3;
          for (let kT = 1;; kT++) {
            if (KT = !1, await xT(fT, TT, yT), fT._z || MT?._d()) return void(jT = !0);
            if (!KT) break;
            if (kT >= IT) {
              ST(TT, lT), fT._rebuildHook = OT, tT = !0, jT = !0;
              break
            }
          }
          KT ? CT = !0 : CT = !0
        }
      }

      function NT(TT) {
        for (const kT of TT.meshes) {
          const cT = kT.material?._buildGroup;
          if (cT && !TT._groups.get(cT)?.includes(kT)) return !0
        }
        return !1
      }

      function QT(TT) {
        const kT = new Map;
        for (const cT of TT.meshes) {
          const TT = cT.material?._buildGroup;
          if (!TT) continue;
          const lT = kT.get(TT);
          lT ? lT.push(cT) : kT.set(TT, [cT])
        }
        for (const [cT, lT] of TT._groups) {
          const TT = kT.get(cT) ?? [];
          (lT.length !== TT.length || TT.some(((TT, kT) => lT[kT] !== TT))) && (lT.length = 0, lT.push(...TT)), kT.delete(cT)
        }
        for (const [cT, lT] of kT) {
          const kT = lT;
          TT._groups.set(cT, kT)
        }
      }

      function ST(TT, kT) {
        const cT = kT.o;
        if (cT?.length) {
          const TT = new Set(cT);
          for (let kT = fT._renderables.length - 1; kT >= 0; kT--) TT.has(fT._renderables[kT]) && fT._renderables.splice(kT, 1)
        }
        kT.o = void 0, kT.r = void 0, fT._runtimeBuilds?.dropBase(TT), fT._rebuildHook = OT, tT = !0
      }

      function DT(TT, kT) {
        const cT = new Set(TT._disposables.slice(0, kT));
        for (let lT = TT._disposables.length - 1; lT >= kT; lT--) cT.has(TT._disposables[lT]) && TT._disposables.splice(lT, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);