export const id = 401;
export const ids = [401];
export const modules = {
  62170: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      rebuildScenePbrPipelines: () => sQ,
      rebuildSceneRenderables: () => FQ
    });
    var wQ = XQ(41963),
      qQ = (QQ, WQ) => QQ.order - WQ.order,
      TQ = 8,
      zQ = QQ => FQ(QQ);
    async function sQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await PQ(QQ, "pbr", WQ)
    }
    async function FQ(QQ) {
      await PQ(QQ, void 0, !1)
    }
    async function PQ(QQ, WQ, sQ) {
      const FQ = QQ;
      if (!FQ._built && !sQ) return;
      const PQ = FQ._lightListVersion ?? 0,
        gQ = FQ.surface.engine,
        JQ = QQ => {
          FQ._z ? QQ.forEach((QQ => QQ())) : (0, wQ.g)(gQ, (() => QQ.forEach((QQ => QQ()))))
        };
      let rQ = !1,
        IQ = !1,
        jQ = !1,
        BQ = !1;
      try {
        for (let QQ = 1;; QQ++) {
          if (void 0 !== WQ) {
            await yQ();
            break
          }
          if (DQ(FQ), await yQ(), !VQ(FQ)) break;
          if (QQ >= TQ) {
            FQ._rebuildHook = zQ, BQ = !0, IQ = !0;
            break
          }
        }
        jQ = !0
      } finally {
        if (rQ && (FQ._renderables.sort(qQ), FQ._renderableVersion++, FQ._materialEpoch++, FQ._built && FQ._frameGraph.build()), void 0 === WQ && jQ && !IQ && (FQ._lightListVersion ?? 0) === PQ) {
          const QQ = FQ._pendingTopologyRetirements?.splice(0);
          QQ?.length && JQ(QQ), BQ || (FQ._rebuildHook = void 0)
        }
      }
      async function yQ() {
        for (const [QQ, wQ] of FQ._groups) {
          if (void 0 !== WQ && QQ._materialFamily !== WQ) continue;
          if (0 === wQ.length) {
            (wQ.o || wQ.r) && (pQ(QQ, wQ), rQ = !0);
            continue
          }
          const qQ = FQ._runtimeBuilds;
          await (qQ?.wait(wQ));
          let TQ = !1;
          const sQ = async () => {
            const WQ = FQ._runtimeBuilds,
              XQ = [...wQ].filter((WQ => FQ.meshes.includes(WQ) && WQ.material?._buildGroup === QQ));
            if (0 === XQ.length) return void pQ(QQ, wQ);
            const zQ = !!wQ.r,
              sQ = FQ._disposables.length,
              PQ = new Map,
              gQ = new Map(XQ.map((QQ => [QQ, QQ.material])));
            for (const QQ of XQ) {
              const XQ = FQ._meshDisposables.get(QQ);
              XQ && (PQ.set(QQ, XQ), FQ._meshDisposables.delete(QQ), WQ?.holdPendingDisposers(QQ, XQ))
            }
            let rQ, IQ;
            FQ._p = QQ => (IQ = QQ, !0);
            try {
              rQ = await QQ(FQ, XQ)
            } catch (bQ) {
              IQ?.[1]();
              for (const qQ of XQ) {
                const XQ = PQ.get(qQ),
                  TQ = FQ._meshDisposables.get(qQ);
                if (TQ && TQ !== XQ)
                  for (const QQ of TQ) QQ();
                const zQ = FQ.meshes.includes(qQ) && qQ.material === gQ.get(qQ) && qQ.material?._buildGroup === QQ && wQ.includes(qQ);
                XQ && zQ ? FQ._meshDisposables.set(qQ, XQ) : (FQ._meshDisposables.delete(qQ), XQ && JQ(XQ)), XQ && WQ?.releasePendingDisposers(qQ, XQ)
              }
              throw bQ
            } finally {
              delete FQ._p
            }
            if (FQ._z || qQ?._d()) {
              IQ?.[1]();
              for (const WQ of XQ) {
                const QQ = FQ._meshDisposables.get(WQ),
                  XQ = PQ.get(WQ);
                if (QQ && QQ !== XQ)
                  for (const WQ of QQ) WQ();
                FQ._meshDisposables.delete(WQ)
              }
              for (const WQ of FQ._disposables.splice(0)) WQ();
              const QQ = [...PQ.values()].flat();
              JQ(QQ);
              for (const [XQ, wQ] of PQ) WQ?.releasePendingDisposers(XQ, wQ);
              return
            }
            IQ?.[0](), QQ._rebuildSingle = rQ.rebuildSingle, wQ.r = FQ._runtimeBuilds?.base(QQ, rQ.rebuildSingle) ?? rQ.rebuildSingle, "pbr" === QQ._materialFamily && rQ._G && (wQ._w = null), zQ && GQ(FQ, sQ);
            const jQ = new Set(XQ.filter((WQ => FQ.meshes.includes(WQ) && WQ.material === gQ.get(WQ) && WQ.material?._buildGroup === QQ && wQ.includes(WQ))));
            if (jQ.size !== XQ.length && rQ.renderables.some((QQ => !QQ.mesh))) {
              for (const QQ of XQ) {
                const XQ = FQ._meshDisposables.get(QQ),
                  wQ = PQ.get(QQ);
                if (XQ && XQ !== wQ)
                  for (const QQ of XQ) QQ();
                wQ && FQ.meshes.includes(QQ) ? FQ._meshDisposables.set(QQ, wQ) : (FQ._meshDisposables.delete(QQ), wQ && JQ(wQ)), wQ && WQ?.releasePendingDisposers(QQ, wQ)
              }
              return void(TQ = !0)
            }
            const BQ = new Set;
            for (const QQ of XQ)
              if (jQ.has(QQ)) BQ.add(QQ.material), FQ._runtimeBuilds?.reset(QQ);
              else {
                const XQ = PQ.get(QQ),
                  wQ = FQ._meshDisposables.get(QQ);
                if (wQ && wQ !== XQ)
                  for (const QQ of wQ) QQ();
                XQ && FQ.meshes.includes(QQ) ? (FQ._meshDisposables.set(QQ, XQ), PQ.delete(QQ), WQ?.releasePendingDisposers(QQ, XQ)) : FQ._meshDisposables.delete(QQ)
              } for (const QQ of BQ) QQ._csmGen = (QQ._csmGen ?? 0) + 1;
            const yQ = wQ.o,
              VQ = yQ?.length ? new Set(yQ) : null;
            for (let QQ = FQ._renderables.length - 1; QQ >= 0; QQ--) {
              const WQ = FQ._renderables[QQ];
              (jQ.has(WQ.mesh) || VQ?.has(WQ)) && FQ._renderables.splice(QQ, 1)
            }
            const DQ = rQ.renderables.filter((QQ => !QQ.mesh || jQ.has(QQ.mesh)));
            FQ._renderables.push(...DQ), wQ.o = DQ;
            const UQ = [...PQ.values()].flat();
            JQ(UQ);
            for (const [QQ, wQ] of PQ) WQ?.releasePendingDisposers(QQ, wQ)
          }, {
            X: PQ
          } = await Promise.resolve().then((() => XQ(61644))), gQ = 3;
          for (let WQ = 1;; WQ++) {
            if (TQ = !1, await PQ(FQ, QQ, sQ), FQ._z || qQ?._d()) return void(IQ = !0);
            if (!TQ) break;
            if (WQ >= gQ) {
              pQ(QQ, wQ), FQ._rebuildHook = zQ, BQ = !0, IQ = !0;
              break
            }
          }
          TQ ? rQ = !0 : rQ = !0
        }
      }

      function VQ(QQ) {
        for (const WQ of QQ.meshes) {
          const XQ = WQ.material?._buildGroup;
          if (XQ && !QQ._groups.get(XQ)?.includes(WQ)) return !0
        }
        return !1
      }

      function DQ(QQ) {
        const WQ = new Map;
        for (const XQ of QQ.meshes) {
          const QQ = XQ.material?._buildGroup;
          if (!QQ) continue;
          const wQ = WQ.get(QQ);
          wQ ? wQ.push(XQ) : WQ.set(QQ, [XQ])
        }
        for (const [XQ, wQ] of QQ._groups) {
          const QQ = WQ.get(XQ) ?? [];
          (wQ.length !== QQ.length || QQ.some(((QQ, WQ) => wQ[WQ] !== QQ))) && (wQ.length = 0, wQ.push(...QQ)), WQ.delete(XQ)
        }
        for (const [XQ, wQ] of WQ) {
          const WQ = wQ;
          QQ._groups.set(XQ, WQ)
        }
      }

      function pQ(QQ, WQ) {
        const XQ = WQ.o;
        if (XQ?.length) {
          const QQ = new Set(XQ);
          for (let WQ = FQ._renderables.length - 1; WQ >= 0; WQ--) QQ.has(FQ._renderables[WQ]) && FQ._renderables.splice(WQ, 1)
        }
        WQ.o = void 0, WQ.r = void 0, FQ._runtimeBuilds?.dropBase(QQ), FQ._rebuildHook = zQ, BQ = !0
      }

      function GQ(QQ, WQ) {
        const XQ = new Set(QQ._disposables.slice(0, WQ));
        for (let wQ = QQ._disposables.length - 1; wQ >= WQ; wQ--) XQ.has(QQ._disposables[wQ]) && QQ._disposables.splice(wQ, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);