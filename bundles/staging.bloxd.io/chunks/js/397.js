export const id = 397;
export const ids = [397];
export const modules = {
  61771: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      rebuildScenePbrPipelines: () => nT,
      rebuildSceneRenderables: () => HT
    });
    var WT = mT(41850),
      zT = (TT, UT) => TT.order - UT.order,
      MT = 8,
      gT = TT => HT(TT);
    async function nT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await kT(TT, "pbr", UT)
    }
    async function HT(TT) {
      await kT(TT, void 0, !1)
    }
    async function kT(TT, UT, nT) {
      const HT = TT;
      if (!HT._built && !nT) return;
      const kT = HT._lightListVersion ?? 0,
        jT = HT.surface.engine,
        lT = TT => {
          HT._z ? TT.forEach((TT => TT())) : (0, WT.f)(jT, (() => TT.forEach((TT => TT()))))
        };
      let LT = !1,
        pT = !1,
        BT = !1,
        ZT = !1;
      try {
        for (let TT = 1;; TT++) {
          if (void 0 !== UT) {
            await cT();
            break
          }
          if (fT(HT), await cT(), !vT(HT)) break;
          if (TT >= MT) {
            HT._rebuildHook = gT, ZT = !0, pT = !0;
            break
          }
        }
        BT = !0
      } finally {
        if (LT && (HT._renderables.sort(zT), HT._renderableVersion++, HT._materialEpoch++, HT._built && HT._frameGraph.build()), void 0 === UT && BT && !pT && (HT._lightListVersion ?? 0) === kT) {
          const TT = HT._pendingTopologyRetirements?.splice(0);
          TT?.length && lT(TT), ZT || (HT._rebuildHook = void 0)
        }
      }
      async function cT() {
        for (const [TT, WT] of HT._groups) {
          if (void 0 !== UT && TT._materialFamily !== UT) continue;
          if (0 === WT.length) {
            (WT.o || WT.r) && (qT(TT, WT), LT = !0);
            continue
          }
          const zT = HT._runtimeBuilds;
          await (zT?.wait(WT));
          let MT = !1;
          const nT = async () => {
            const UT = HT._runtimeBuilds,
              mT = [...WT].filter((UT => HT.meshes.includes(UT) && UT.material?._buildGroup === TT));
            if (0 === mT.length) return void qT(TT, WT);
            const gT = !!WT.r,
              nT = HT._disposables.length,
              kT = new Map,
              jT = new Map(mT.map((TT => [TT, TT.material])));
            for (const TT of mT) {
              const mT = HT._meshDisposables.get(TT);
              mT && (kT.set(TT, mT), HT._meshDisposables.delete(TT), UT?.holdPendingDisposers(TT, mT))
            }
            let LT, pT;
            HT._p = TT => (pT = TT, !0);
            try {
              LT = await TT(HT, mT)
            } catch (OT) {
              pT?.[1]();
              for (const zT of mT) {
                const mT = kT.get(zT),
                  MT = HT._meshDisposables.get(zT);
                if (MT && MT !== mT)
                  for (const TT of MT) TT();
                const gT = HT.meshes.includes(zT) && zT.material === jT.get(zT) && zT.material?._buildGroup === TT && WT.includes(zT);
                mT && gT ? HT._meshDisposables.set(zT, mT) : (HT._meshDisposables.delete(zT), mT && lT(mT)), mT && UT?.releasePendingDisposers(zT, mT)
              }
              throw OT
            } finally {
              delete HT._p
            }
            if (HT._z || zT?._d()) {
              pT?.[1]();
              for (const UT of mT) {
                const TT = HT._meshDisposables.get(UT),
                  mT = kT.get(UT);
                if (TT && TT !== mT)
                  for (const UT of TT) UT();
                HT._meshDisposables.delete(UT)
              }
              for (const UT of HT._disposables.splice(0)) UT();
              const TT = [...kT.values()].flat();
              lT(TT);
              for (const [mT, WT] of kT) UT?.releasePendingDisposers(mT, WT);
              return
            }
            pT?.[0](), TT._rebuildSingle = LT.rebuildSingle, WT.r = HT._runtimeBuilds?.base(TT, LT.rebuildSingle) ?? LT.rebuildSingle, "pbr" === TT._materialFamily && LT._G && (WT._w = null), gT && iT(HT, nT);
            const BT = new Set(mT.filter((UT => HT.meshes.includes(UT) && UT.material === jT.get(UT) && UT.material?._buildGroup === TT && WT.includes(UT))));
            if (BT.size !== mT.length && LT.renderables.some((TT => !TT.mesh))) {
              for (const TT of mT) {
                const mT = HT._meshDisposables.get(TT),
                  WT = kT.get(TT);
                if (mT && mT !== WT)
                  for (const TT of mT) TT();
                WT && HT.meshes.includes(TT) ? HT._meshDisposables.set(TT, WT) : (HT._meshDisposables.delete(TT), WT && lT(WT)), WT && UT?.releasePendingDisposers(TT, WT)
              }
              return void(MT = !0)
            }
            const ZT = new Set;
            for (const TT of mT)
              if (BT.has(TT)) ZT.add(TT.material), HT._runtimeBuilds?.reset(TT);
              else {
                const mT = kT.get(TT),
                  WT = HT._meshDisposables.get(TT);
                if (WT && WT !== mT)
                  for (const TT of WT) TT();
                mT && HT.meshes.includes(TT) ? (HT._meshDisposables.set(TT, mT), kT.delete(TT), UT?.releasePendingDisposers(TT, mT)) : HT._meshDisposables.delete(TT)
              } for (const TT of ZT) TT._csmGen = (TT._csmGen ?? 0) + 1;
            const cT = WT.o,
              vT = cT?.length ? new Set(cT) : null;
            for (let TT = HT._renderables.length - 1; TT >= 0; TT--) {
              const UT = HT._renderables[TT];
              (BT.has(UT.mesh) || vT?.has(UT)) && HT._renderables.splice(TT, 1)
            }
            const fT = LT.renderables.filter((TT => !TT.mesh || BT.has(TT.mesh)));
            HT._renderables.push(...fT), WT.o = fT;
            const bT = [...kT.values()].flat();
            lT(bT);
            for (const [TT, WT] of kT) UT?.releasePendingDisposers(TT, WT)
          }, {
            X: kT
          } = await Promise.resolve().then((() => mT(61251))), jT = 3;
          for (let UT = 1;; UT++) {
            if (MT = !1, await kT(HT, TT, nT), HT._z || zT?._d()) return void(pT = !0);
            if (!MT) break;
            if (UT >= jT) {
              qT(TT, WT), HT._rebuildHook = gT, ZT = !0, pT = !0;
              break
            }
          }
          MT ? LT = !0 : LT = !0
        }
      }

      function vT(TT) {
        for (const UT of TT.meshes) {
          const mT = UT.material?._buildGroup;
          if (mT && !TT._groups.get(mT)?.includes(UT)) return !0
        }
        return !1
      }

      function fT(TT) {
        const UT = new Map;
        for (const mT of TT.meshes) {
          const TT = mT.material?._buildGroup;
          if (!TT) continue;
          const WT = UT.get(TT);
          WT ? WT.push(mT) : UT.set(TT, [mT])
        }
        for (const [mT, WT] of TT._groups) {
          const TT = UT.get(mT) ?? [];
          (WT.length !== TT.length || TT.some(((TT, UT) => WT[UT] !== TT))) && (WT.length = 0, WT.push(...TT)), UT.delete(mT)
        }
        for (const [mT, WT] of UT) {
          const UT = WT;
          TT._groups.set(mT, UT)
        }
      }

      function qT(TT, UT) {
        const mT = UT.o;
        if (mT?.length) {
          const TT = new Set(mT);
          for (let UT = HT._renderables.length - 1; UT >= 0; UT--) TT.has(HT._renderables[UT]) && HT._renderables.splice(UT, 1)
        }
        UT.o = void 0, UT.r = void 0, HT._runtimeBuilds?.dropBase(TT), HT._rebuildHook = gT, ZT = !0
      }

      function iT(TT, UT) {
        const mT = new Set(TT._disposables.slice(0, UT));
        for (let WT = TT._disposables.length - 1; WT >= UT; WT--) mT.has(TT._disposables[WT]) && TT._disposables.splice(WT, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);