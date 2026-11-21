export const id = 386;
export const ids = [386];
export const modules = {
  61402: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      rebuildScenePbrPipelines: () => kQ,
      rebuildSceneRenderables: () => vQ
    });
    var LQ = wQ(41129),
      qQ = (QQ, FQ) => QQ.order - FQ.order,
      oQ = 8,
      DQ = QQ => vQ(QQ);
    async function kQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await mQ(QQ, "pbr", FQ)
    }
    async function vQ(QQ) {
      await mQ(QQ, void 0, !1)
    }
    async function mQ(QQ, FQ, kQ) {
      const vQ = QQ;
      if (!vQ._built && !kQ) return;
      const mQ = vQ._lightListVersion ?? 0,
        uQ = vQ.surface.engine,
        HQ = QQ => {
          vQ._z ? QQ.forEach((QQ => QQ())) : (0, LQ.e)(uQ, (() => QQ.forEach((QQ => QQ()))))
        };
      let bQ = !1,
        YQ = !1,
        xQ = !1,
        AQ = !1;
      try {
        for (let QQ = 1;; QQ++) {
          if (void 0 !== FQ) {
            await tQ();
            break
          }
          if (MQ(vQ), await tQ(), !eQ(vQ)) break;
          if (QQ >= oQ) {
            vQ._rebuildHook = DQ, AQ = !0, YQ = !0;
            break
          }
        }
        xQ = !0
      } finally {
        if (bQ && (vQ._renderables.sort(qQ), vQ._renderableVersion++, vQ._materialEpoch++, vQ._built && vQ._frameGraph.build()), void 0 === FQ && xQ && !YQ && (vQ._lightListVersion ?? 0) === mQ) {
          const QQ = vQ._pendingTopologyRetirements?.splice(0);
          QQ?.length && HQ(QQ), AQ || (vQ._rebuildHook = void 0)
        }
      }
      async function tQ() {
        for (const [QQ, LQ] of vQ._groups) {
          if (void 0 !== FQ && QQ._materialFamily !== FQ) continue;
          if (0 === LQ.length) {
            (LQ.o || LQ.r) && (GQ(QQ, LQ), bQ = !0);
            continue
          }
          const qQ = vQ._runtimeBuilds;
          await (qQ?.wait(LQ));
          let oQ = !1;
          const kQ = async () => {
            const FQ = vQ._runtimeBuilds,
              wQ = [...LQ].filter((FQ => vQ.meshes.includes(FQ) && FQ.material?._buildGroup === QQ));
            if (0 === wQ.length) return void GQ(QQ, LQ);
            const DQ = !!LQ.r,
              kQ = vQ._disposables.length,
              mQ = new Map,
              uQ = new Map(wQ.map((QQ => [QQ, QQ.material])));
            for (const QQ of wQ) {
              const wQ = vQ._meshDisposables.get(QQ);
              wQ && (mQ.set(QQ, wQ), vQ._meshDisposables.delete(QQ), FQ?.holdPendingDisposers(QQ, wQ))
            }
            let bQ, YQ;
            vQ._p = QQ => (YQ = QQ, !0);
            try {
              bQ = await QQ(vQ, wQ)
            } catch (CQ) {
              YQ?.[1]();
              for (const qQ of wQ) {
                const wQ = mQ.get(qQ),
                  oQ = vQ._meshDisposables.get(qQ);
                if (oQ && oQ !== wQ)
                  for (const QQ of oQ) QQ();
                const DQ = vQ.meshes.includes(qQ) && qQ.material === uQ.get(qQ) && qQ.material?._buildGroup === QQ && LQ.includes(qQ);
                wQ && DQ ? vQ._meshDisposables.set(qQ, wQ) : (vQ._meshDisposables.delete(qQ), wQ && HQ(wQ)), wQ && FQ?.releasePendingDisposers(qQ, wQ)
              }
              throw CQ
            } finally {
              delete vQ._p
            }
            if (vQ._z || qQ?._d()) {
              YQ?.[1]();
              for (const FQ of wQ) {
                const QQ = vQ._meshDisposables.get(FQ),
                  wQ = mQ.get(FQ);
                if (QQ && QQ !== wQ)
                  for (const FQ of QQ) FQ();
                vQ._meshDisposables.delete(FQ)
              }
              for (const FQ of vQ._disposables.splice(0)) FQ();
              const QQ = [...mQ.values()].flat();
              HQ(QQ);
              for (const [wQ, LQ] of mQ) FQ?.releasePendingDisposers(wQ, LQ);
              return
            }
            YQ?.[0](), QQ._rebuildSingle = bQ.rebuildSingle, LQ.r = vQ._runtimeBuilds?.base(QQ, bQ.rebuildSingle) ?? bQ.rebuildSingle, "pbr" === QQ._materialFamily && bQ._G && (LQ._w = null), DQ && pQ(vQ, kQ);
            const xQ = new Set(wQ.filter((FQ => vQ.meshes.includes(FQ) && FQ.material === uQ.get(FQ) && FQ.material?._buildGroup === QQ && LQ.includes(FQ))));
            if (xQ.size !== wQ.length && bQ.renderables.some((QQ => !QQ.mesh))) {
              for (const QQ of wQ) {
                const wQ = vQ._meshDisposables.get(QQ),
                  LQ = mQ.get(QQ);
                if (wQ && wQ !== LQ)
                  for (const QQ of wQ) QQ();
                LQ && vQ.meshes.includes(QQ) ? vQ._meshDisposables.set(QQ, LQ) : (vQ._meshDisposables.delete(QQ), LQ && HQ(LQ)), LQ && FQ?.releasePendingDisposers(QQ, LQ)
              }
              return void(oQ = !0)
            }
            const AQ = new Set;
            for (const QQ of wQ)
              if (xQ.has(QQ)) AQ.add(QQ.material), vQ._runtimeBuilds?.reset(QQ);
              else {
                const wQ = mQ.get(QQ),
                  LQ = vQ._meshDisposables.get(QQ);
                if (LQ && LQ !== wQ)
                  for (const QQ of LQ) QQ();
                wQ && vQ.meshes.includes(QQ) ? (vQ._meshDisposables.set(QQ, wQ), mQ.delete(QQ), FQ?.releasePendingDisposers(QQ, wQ)) : vQ._meshDisposables.delete(QQ)
              } for (const QQ of AQ) QQ._csmGen = (QQ._csmGen ?? 0) + 1;
            const tQ = LQ.o,
              eQ = tQ?.length ? new Set(tQ) : null;
            for (let QQ = vQ._renderables.length - 1; QQ >= 0; QQ--) {
              const FQ = vQ._renderables[QQ];
              (xQ.has(FQ.mesh) || eQ?.has(FQ)) && vQ._renderables.splice(QQ, 1)
            }
            const MQ = bQ.renderables.filter((QQ => !QQ.mesh || xQ.has(QQ.mesh)));
            vQ._renderables.push(...MQ), LQ.o = MQ;
            const cQ = [...mQ.values()].flat();
            HQ(cQ);
            for (const [QQ, LQ] of mQ) FQ?.releasePendingDisposers(QQ, LQ)
          }, {
            X: mQ
          } = await Promise.resolve().then((() => wQ(60749))), uQ = 3;
          for (let FQ = 1;; FQ++) {
            if (oQ = !1, await mQ(vQ, QQ, kQ), vQ._z || qQ?._d()) return void(YQ = !0);
            if (!oQ) break;
            if (FQ >= uQ) {
              GQ(QQ, LQ), vQ._rebuildHook = DQ, AQ = !0, YQ = !0;
              break
            }
          }
          oQ ? bQ = !0 : bQ = !0
        }
      }

      function eQ(QQ) {
        for (const FQ of QQ.meshes) {
          const wQ = FQ.material?._buildGroup;
          if (wQ && !QQ._groups.get(wQ)?.includes(FQ)) return !0
        }
        return !1
      }

      function MQ(QQ) {
        const FQ = new Map;
        for (const wQ of QQ.meshes) {
          const QQ = wQ.material?._buildGroup;
          if (!QQ) continue;
          const LQ = FQ.get(QQ);
          LQ ? LQ.push(wQ) : FQ.set(QQ, [wQ])
        }
        for (const [wQ, LQ] of QQ._groups) {
          const QQ = FQ.get(wQ) ?? [];
          (LQ.length !== QQ.length || QQ.some(((QQ, FQ) => LQ[FQ] !== QQ))) && (LQ.length = 0, LQ.push(...QQ)), FQ.delete(wQ)
        }
        for (const [wQ, LQ] of FQ) {
          const FQ = LQ;
          QQ._groups.set(wQ, FQ)
        }
      }

      function GQ(QQ, FQ) {
        const wQ = FQ.o;
        if (wQ?.length) {
          const QQ = new Set(wQ);
          for (let FQ = vQ._renderables.length - 1; FQ >= 0; FQ--) QQ.has(vQ._renderables[FQ]) && vQ._renderables.splice(FQ, 1)
        }
        FQ.o = void 0, FQ.r = void 0, vQ._runtimeBuilds?.dropBase(QQ), vQ._rebuildHook = DQ, AQ = !0
      }

      function pQ(QQ, FQ) {
        const wQ = new Set(QQ._disposables.slice(0, FQ));
        for (let LQ = QQ._disposables.length - 1; LQ >= FQ; LQ--) wQ.has(QQ._disposables[LQ]) && QQ._disposables.splice(LQ, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);