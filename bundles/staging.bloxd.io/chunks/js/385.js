export const id = 385;
export const ids = [385];
export const modules = {
  60768: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      rebuildScenePbrPipelines: () => XT,
      rebuildSceneRenderables: () => BT
    });
    var iT = IT(40561),
      zT = (TT, oT) => TT.order - oT.order,
      kT = 8,
      WT = TT => BT(TT);
    async function XT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await FT(TT, "pbr", oT)
    }
    async function BT(TT) {
      await FT(TT, void 0, !1)
    }
    async function FT(TT, oT, XT) {
      const BT = TT;
      if (!BT._built && !XT) return;
      const FT = BT._lightListVersion ?? 0,
        ST = BT.surface.engine,
        DT = TT => {
          BT._z ? TT.forEach((TT => TT())) : (0, iT.c)(ST, (() => TT.forEach((TT => TT()))))
        };
      let LT = !1,
        xT = !1,
        cT = !1,
        KT = !1;
      try {
        for (let TT = 1;; TT++) {
          if (void 0 !== oT) {
            await MT();
            break
          }
          if (AT(BT), await MT(), !rT(BT)) break;
          if (TT >= kT) {
            BT._rebuildHook = WT, KT = !0, xT = !0;
            break
          }
        }
        cT = !0
      } finally {
        if (LT && (BT._renderables.sort(zT), BT._renderableVersion++, BT._materialEpoch++, BT._built && BT._frameGraph.build()), void 0 === oT && cT && !xT && (BT._lightListVersion ?? 0) === FT) {
          const TT = BT._pendingTopologyRetirements?.splice(0);
          TT?.length && DT(TT), KT || (BT._rebuildHook = void 0)
        }
      }
      async function MT() {
        for (const [TT, iT] of BT._groups) {
          if (void 0 !== oT && TT._materialFamily !== oT) continue;
          if (0 === iT.length) {
            (iT.o || iT.r) && (gT(TT, iT), LT = !0);
            continue
          }
          const zT = BT._runtimeBuilds;
          await (zT?.wait(iT));
          let kT = !1;
          const XT = async () => {
            const oT = BT._runtimeBuilds,
              IT = [...iT].filter((oT => BT.meshes.includes(oT) && oT.material?._buildGroup === TT));
            if (0 === IT.length) return void gT(TT, iT);
            const WT = !!iT.r,
              XT = BT._disposables.length,
              FT = new Map,
              ST = new Map(IT.map((TT => [TT, TT.material])));
            for (const TT of IT) {
              const IT = BT._meshDisposables.get(TT);
              IT && (FT.set(TT, IT), BT._meshDisposables.delete(TT), oT?.holdPendingDisposers(TT, IT))
            }
            let LT, xT;
            BT._p = TT => (xT = TT, !0);
            try {
              LT = await TT(BT, IT)
            } catch (mT) {
              xT?.[1]();
              for (const zT of IT) {
                const IT = FT.get(zT),
                  kT = BT._meshDisposables.get(zT);
                if (kT && kT !== IT)
                  for (const TT of kT) TT();
                const WT = BT.meshes.includes(zT) && zT.material === ST.get(zT) && zT.material?._buildGroup === TT && iT.includes(zT);
                IT && WT ? BT._meshDisposables.set(zT, IT) : (BT._meshDisposables.delete(zT), IT && DT(IT)), IT && oT?.releasePendingDisposers(zT, IT)
              }
              throw mT
            } finally {
              delete BT._p
            }
            if (BT._z || zT?._d()) {
              xT?.[1]();
              for (const oT of IT) {
                const TT = BT._meshDisposables.get(oT),
                  IT = FT.get(oT);
                if (TT && TT !== IT)
                  for (const oT of TT) oT();
                BT._meshDisposables.delete(oT)
              }
              for (const oT of BT._disposables.splice(0)) oT();
              const TT = [...FT.values()].flat();
              DT(TT);
              for (const [IT, iT] of FT) oT?.releasePendingDisposers(IT, iT);
              return
            }
            xT?.[0](), TT._rebuildSingle = LT.rebuildSingle, iT.r = BT._runtimeBuilds?.base(TT, LT.rebuildSingle) ?? LT.rebuildSingle, "pbr" === TT._materialFamily && LT._G && (iT._w = null), WT && hT(BT, XT);
            const cT = new Set(IT.filter((oT => BT.meshes.includes(oT) && oT.material === ST.get(oT) && oT.material?._buildGroup === TT && iT.includes(oT))));
            if (cT.size !== IT.length && LT.renderables.some((TT => !TT.mesh))) {
              for (const TT of IT) {
                const IT = BT._meshDisposables.get(TT),
                  iT = FT.get(TT);
                if (IT && IT !== iT)
                  for (const TT of IT) TT();
                iT && BT.meshes.includes(TT) ? BT._meshDisposables.set(TT, iT) : (BT._meshDisposables.delete(TT), iT && DT(iT)), iT && oT?.releasePendingDisposers(TT, iT)
              }
              return void(kT = !0)
            }
            const KT = new Set;
            for (const TT of IT)
              if (cT.has(TT)) KT.add(TT.material), BT._runtimeBuilds?.reset(TT);
              else {
                const IT = FT.get(TT),
                  iT = BT._meshDisposables.get(TT);
                if (iT && iT !== IT)
                  for (const TT of iT) TT();
                IT && BT.meshes.includes(TT) ? (BT._meshDisposables.set(TT, IT), FT.delete(TT), oT?.releasePendingDisposers(TT, IT)) : BT._meshDisposables.delete(TT)
              } for (const TT of KT) TT._csmGen = (TT._csmGen ?? 0) + 1;
            const MT = iT.o,
              rT = MT?.length ? new Set(MT) : null;
            for (let TT = BT._renderables.length - 1; TT >= 0; TT--) {
              const oT = BT._renderables[TT];
              (cT.has(oT.mesh) || rT?.has(oT)) && BT._renderables.splice(TT, 1)
            }
            const AT = LT.renderables.filter((TT => !TT.mesh || cT.has(TT.mesh)));
            BT._renderables.push(...AT), iT.o = AT;
            const wT = [...FT.values()].flat();
            DT(wT);
            for (const [TT, iT] of FT) oT?.releasePendingDisposers(TT, iT)
          }, {
            X: FT
          } = await Promise.resolve().then((() => IT(60125))), ST = 3;
          for (let oT = 1;; oT++) {
            if (kT = !1, await FT(BT, TT, XT), BT._z || zT?._d()) return void(xT = !0);
            if (!kT) break;
            if (oT >= ST) {
              gT(TT, iT), BT._rebuildHook = WT, KT = !0, xT = !0;
              break
            }
          }
          kT ? LT = !0 : LT = !0
        }
      }

      function rT(TT) {
        for (const oT of TT.meshes) {
          const IT = oT.material?._buildGroup;
          if (IT && !TT._groups.get(IT)?.includes(oT)) return !0
        }
        return !1
      }

      function AT(TT) {
        const oT = new Map;
        for (const IT of TT.meshes) {
          const TT = IT.material?._buildGroup;
          if (!TT) continue;
          const iT = oT.get(TT);
          iT ? iT.push(IT) : oT.set(TT, [IT])
        }
        for (const [IT, iT] of TT._groups) {
          const TT = oT.get(IT) ?? [];
          (iT.length !== TT.length || TT.some(((TT, oT) => iT[oT] !== TT))) && (iT.length = 0, iT.push(...TT)), oT.delete(IT)
        }
        for (const [IT, iT] of oT) {
          const oT = iT;
          TT._groups.set(IT, oT)
        }
      }

      function gT(TT, oT) {
        const IT = oT.o;
        if (IT?.length) {
          const TT = new Set(IT);
          for (let oT = BT._renderables.length - 1; oT >= 0; oT--) TT.has(BT._renderables[oT]) && BT._renderables.splice(oT, 1)
        }
        oT.o = void 0, oT.r = void 0, BT._runtimeBuilds?.dropBase(TT), BT._rebuildHook = WT, KT = !0
      }

      function hT(TT, oT) {
        const IT = new Set(TT._disposables.slice(0, oT));
        for (let iT = TT._disposables.length - 1; iT >= oT; iT--) IT.has(TT._disposables[iT]) && TT._disposables.splice(iT, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);