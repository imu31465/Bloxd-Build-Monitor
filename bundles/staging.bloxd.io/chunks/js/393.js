export const id = 393;
export const ids = [393];
export const modules = {
  61555: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      rebuildScenePbrPipelines: () => fC,
      rebuildSceneRenderables: () => oC
    });
    var QC = ZC(41540),
      wC = (CC, zC) => CC.order - zC.order,
      bC = 8,
      nC = CC => oC(CC);
    async function fC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await qC(CC, "pbr", zC)
    }
    async function oC(CC) {
      await qC(CC, void 0, !1)
    }
    async function qC(CC, zC, fC) {
      const oC = CC;
      if (!oC._built && !fC) return;
      const qC = oC._lightListVersion ?? 0,
        FC = oC.surface.engine,
        WC = CC => {
          oC._z ? CC.forEach((CC => CC())) : (0, QC.b)(FC, (() => CC.forEach((CC => CC()))))
        };
      let NC = !1,
        MC = !1,
        gC = !1,
        SC = !1;
      try {
        for (let CC = 1;; CC++) {
          if (void 0 !== zC) {
            await pC();
            break
          }
          if (GC(oC), await pC(), !PC(oC)) break;
          if (CC >= bC) {
            oC._rebuildHook = nC, SC = !0, MC = !0;
            break
          }
        }
        gC = !0
      } finally {
        if (NC && (oC._renderables.sort(wC), oC._renderableVersion++, oC._materialEpoch++, oC._built && oC._frameGraph.build()), void 0 === zC && gC && !MC && (oC._lightListVersion ?? 0) === qC) {
          const CC = oC._pendingTopologyRetirements?.splice(0);
          CC?.length && WC(CC), SC || (oC._rebuildHook = void 0)
        }
      }
      async function pC() {
        for (const [CC, QC] of oC._groups) {
          if (void 0 !== zC && CC._materialFamily !== zC) continue;
          if (0 === QC.length) {
            (QC.o || QC.r) && (RC(CC, QC), NC = !0);
            continue
          }
          const wC = oC._runtimeBuilds;
          await (wC?.wait(QC));
          let bC = !1;
          const fC = async () => {
            const zC = oC._runtimeBuilds,
              ZC = [...QC].filter((zC => oC.meshes.includes(zC) && zC.material?._buildGroup === CC));
            if (0 === ZC.length) return void RC(CC, QC);
            const nC = !!QC.r,
              fC = oC._disposables.length,
              qC = new Map,
              FC = new Map(ZC.map((CC => [CC, CC.material])));
            for (const CC of ZC) {
              const ZC = oC._meshDisposables.get(CC);
              ZC && (qC.set(CC, ZC), oC._meshDisposables.delete(CC), zC?.holdPendingDisposers(CC, ZC))
            }
            let NC, MC;
            oC._p = CC => (MC = CC, !0);
            try {
              NC = await CC(oC, ZC)
            } catch (JC) {
              MC?.[1]();
              for (const wC of ZC) {
                const ZC = qC.get(wC),
                  bC = oC._meshDisposables.get(wC);
                if (bC && bC !== ZC)
                  for (const CC of bC) CC();
                const nC = oC.meshes.includes(wC) && wC.material === FC.get(wC) && wC.material?._buildGroup === CC && QC.includes(wC);
                ZC && nC ? oC._meshDisposables.set(wC, ZC) : (oC._meshDisposables.delete(wC), ZC && WC(ZC)), ZC && zC?.releasePendingDisposers(wC, ZC)
              }
              throw JC
            } finally {
              delete oC._p
            }
            if (oC._z || wC?._d()) {
              MC?.[1]();
              for (const zC of ZC) {
                const CC = oC._meshDisposables.get(zC),
                  ZC = qC.get(zC);
                if (CC && CC !== ZC)
                  for (const zC of CC) zC();
                oC._meshDisposables.delete(zC)
              }
              for (const zC of oC._disposables.splice(0)) zC();
              const CC = [...qC.values()].flat();
              WC(CC);
              for (const [ZC, QC] of qC) zC?.releasePendingDisposers(ZC, QC);
              return
            }
            MC?.[0](), CC._rebuildSingle = NC.rebuildSingle, QC.r = oC._runtimeBuilds?.base(CC, NC.rebuildSingle) ?? NC.rebuildSingle, "pbr" === CC._materialFamily && NC._G && (QC._w = null), nC && AC(oC, fC);
            const gC = new Set(ZC.filter((zC => oC.meshes.includes(zC) && zC.material === FC.get(zC) && zC.material?._buildGroup === CC && QC.includes(zC))));
            if (gC.size !== ZC.length && NC.renderables.some((CC => !CC.mesh))) {
              for (const CC of ZC) {
                const ZC = oC._meshDisposables.get(CC),
                  QC = qC.get(CC);
                if (ZC && ZC !== QC)
                  for (const CC of ZC) CC();
                QC && oC.meshes.includes(CC) ? oC._meshDisposables.set(CC, QC) : (oC._meshDisposables.delete(CC), QC && WC(QC)), QC && zC?.releasePendingDisposers(CC, QC)
              }
              return void(bC = !0)
            }
            const SC = new Set;
            for (const CC of ZC)
              if (gC.has(CC)) SC.add(CC.material), oC._runtimeBuilds?.reset(CC);
              else {
                const ZC = qC.get(CC),
                  QC = oC._meshDisposables.get(CC);
                if (QC && QC !== ZC)
                  for (const CC of QC) CC();
                ZC && oC.meshes.includes(CC) ? (oC._meshDisposables.set(CC, ZC), qC.delete(CC), zC?.releasePendingDisposers(CC, ZC)) : oC._meshDisposables.delete(CC)
              } for (const CC of SC) CC._csmGen = (CC._csmGen ?? 0) + 1;
            const pC = QC.o,
              PC = pC?.length ? new Set(pC) : null;
            for (let CC = oC._renderables.length - 1; CC >= 0; CC--) {
              const zC = oC._renderables[CC];
              (gC.has(zC.mesh) || PC?.has(zC)) && oC._renderables.splice(CC, 1)
            }
            const GC = NC.renderables.filter((CC => !CC.mesh || gC.has(CC.mesh)));
            oC._renderables.push(...GC), QC.o = GC;
            const xC = [...qC.values()].flat();
            WC(xC);
            for (const [CC, QC] of qC) zC?.releasePendingDisposers(CC, QC)
          }, {
            X: qC
          } = await Promise.resolve().then((() => ZC(61035))), FC = 3;
          for (let zC = 1;; zC++) {
            if (bC = !1, await qC(oC, CC, fC), oC._z || wC?._d()) return void(MC = !0);
            if (!bC) break;
            if (zC >= FC) {
              RC(CC, QC), oC._rebuildHook = nC, SC = !0, MC = !0;
              break
            }
          }
          bC ? NC = !0 : NC = !0
        }
      }

      function PC(CC) {
        for (const zC of CC.meshes) {
          const ZC = zC.material?._buildGroup;
          if (ZC && !CC._groups.get(ZC)?.includes(zC)) return !0
        }
        return !1
      }

      function GC(CC) {
        const zC = new Map;
        for (const ZC of CC.meshes) {
          const CC = ZC.material?._buildGroup;
          if (!CC) continue;
          const QC = zC.get(CC);
          QC ? QC.push(ZC) : zC.set(CC, [ZC])
        }
        for (const [ZC, QC] of CC._groups) {
          const CC = zC.get(ZC) ?? [];
          (QC.length !== CC.length || CC.some(((CC, zC) => QC[zC] !== CC))) && (QC.length = 0, QC.push(...CC)), zC.delete(ZC)
        }
        for (const [ZC, QC] of zC) {
          const zC = QC;
          CC._groups.set(ZC, zC)
        }
      }

      function RC(CC, zC) {
        const ZC = zC.o;
        if (ZC?.length) {
          const CC = new Set(ZC);
          for (let zC = oC._renderables.length - 1; zC >= 0; zC--) CC.has(oC._renderables[zC]) && oC._renderables.splice(zC, 1)
        }
        zC.o = void 0, zC.r = void 0, oC._runtimeBuilds?.dropBase(CC), oC._rebuildHook = nC, SC = !0
      }

      function AC(CC, zC) {
        const ZC = new Set(CC._disposables.slice(0, zC));
        for (let QC = CC._disposables.length - 1; QC >= zC; QC--) ZC.has(CC._disposables[QC]) && CC._disposables.splice(QC, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);