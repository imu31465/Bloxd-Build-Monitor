export const id = 385;
export const ids = [385];
export const modules = {
  61097: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      rebuildScenePbrPipelines: () => bD,
      rebuildSceneRenderables: () => QD
    });
    var ID = cD(40823),
      pD = (DD, CD) => DD.order - CD.order,
      iD = 8,
      fD = DD => QD(DD);
    async function bD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await wD(DD, "pbr", CD)
    }
    async function QD(DD) {
      await wD(DD, void 0, !1)
    }
    async function wD(DD, CD, bD) {
      const QD = DD;
      if (!QD._built && !bD) return;
      const wD = QD._lightListVersion ?? 0,
        SD = QD.surface.engine,
        BD = DD => {
          QD._z ? DD.forEach((DD => DD())) : (0, ID.e)(SD, (() => DD.forEach((DD => DD()))))
        };
      let yD = !1,
        MD = !1,
        tD = !1,
        ZD = !1;
      try {
        for (let DD = 1;; DD++) {
          if (void 0 !== CD) {
            await oD();
            break
          }
          if (ND(QD), await oD(), !vD(QD)) break;
          if (DD >= iD) {
            QD._rebuildHook = fD, ZD = !0, MD = !0;
            break
          }
        }
        tD = !0
      } finally {
        if (yD && (QD._renderables.sort(pD), QD._renderableVersion++, QD._materialEpoch++, QD._built && QD._frameGraph.build()), void 0 === CD && tD && !MD && (QD._lightListVersion ?? 0) === wD) {
          const DD = QD._pendingTopologyRetirements?.splice(0);
          DD?.length && BD(DD), ZD || (QD._rebuildHook = void 0)
        }
      }
      async function oD() {
        for (const [DD, ID] of QD._groups) {
          if (void 0 !== CD && DD._materialFamily !== CD) continue;
          if (0 === ID.length) {
            (ID.o || ID.r) && (gD(DD, ID), yD = !0);
            continue
          }
          const pD = QD._runtimeBuilds;
          await (pD?.wait(ID));
          let iD = !1;
          const bD = async () => {
            const CD = QD._runtimeBuilds,
              cD = [...ID].filter((CD => QD.meshes.includes(CD) && CD.material?._buildGroup === DD));
            if (0 === cD.length) return void gD(DD, ID);
            const fD = !!ID.r,
              bD = QD._disposables.length,
              wD = new Map,
              SD = new Map(cD.map((DD => [DD, DD.material])));
            for (const DD of cD) {
              const cD = QD._meshDisposables.get(DD);
              cD && (wD.set(DD, cD), QD._meshDisposables.delete(DD), CD?.holdPendingDisposers(DD, cD))
            }
            let yD, MD;
            QD._p = DD => (MD = DD, !0);
            try {
              yD = await DD(QD, cD)
            } catch (nD) {
              MD?.[1]();
              for (const pD of cD) {
                const cD = wD.get(pD),
                  iD = QD._meshDisposables.get(pD);
                if (iD && iD !== cD)
                  for (const DD of iD) DD();
                const fD = QD.meshes.includes(pD) && pD.material === SD.get(pD) && pD.material?._buildGroup === DD && ID.includes(pD);
                cD && fD ? QD._meshDisposables.set(pD, cD) : (QD._meshDisposables.delete(pD), cD && BD(cD)), cD && CD?.releasePendingDisposers(pD, cD)
              }
              throw nD
            } finally {
              delete QD._p
            }
            if (QD._z || pD?._d()) {
              MD?.[1]();
              for (const CD of cD) {
                const DD = QD._meshDisposables.get(CD),
                  cD = wD.get(CD);
                if (DD && DD !== cD)
                  for (const CD of DD) CD();
                QD._meshDisposables.delete(CD)
              }
              for (const CD of QD._disposables.splice(0)) CD();
              const DD = [...wD.values()].flat();
              BD(DD);
              for (const [cD, ID] of wD) CD?.releasePendingDisposers(cD, ID);
              return
            }
            MD?.[0](), DD._rebuildSingle = yD.rebuildSingle, ID.r = QD._runtimeBuilds?.base(DD, yD.rebuildSingle) ?? yD.rebuildSingle, "pbr" === DD._materialFamily && yD._G && (ID._w = null), fD && XD(QD, bD);
            const tD = new Set(cD.filter((CD => QD.meshes.includes(CD) && CD.material === SD.get(CD) && CD.material?._buildGroup === DD && ID.includes(CD))));
            if (tD.size !== cD.length && yD.renderables.some((DD => !DD.mesh))) {
              for (const DD of cD) {
                const cD = QD._meshDisposables.get(DD),
                  ID = wD.get(DD);
                if (cD && cD !== ID)
                  for (const DD of cD) DD();
                ID && QD.meshes.includes(DD) ? QD._meshDisposables.set(DD, ID) : (QD._meshDisposables.delete(DD), ID && BD(ID)), ID && CD?.releasePendingDisposers(DD, ID)
              }
              return void(iD = !0)
            }
            const ZD = new Set;
            for (const DD of cD)
              if (tD.has(DD)) ZD.add(DD.material), QD._runtimeBuilds?.reset(DD);
              else {
                const cD = wD.get(DD),
                  ID = QD._meshDisposables.get(DD);
                if (ID && ID !== cD)
                  for (const DD of ID) DD();
                cD && QD.meshes.includes(DD) ? (QD._meshDisposables.set(DD, cD), wD.delete(DD), CD?.releasePendingDisposers(DD, cD)) : QD._meshDisposables.delete(DD)
              } for (const DD of ZD) DD._csmGen = (DD._csmGen ?? 0) + 1;
            const oD = ID.o,
              vD = oD?.length ? new Set(oD) : null;
            for (let DD = QD._renderables.length - 1; DD >= 0; DD--) {
              const CD = QD._renderables[DD];
              (tD.has(CD.mesh) || vD?.has(CD)) && QD._renderables.splice(DD, 1)
            }
            const ND = yD.renderables.filter((DD => !DD.mesh || tD.has(DD.mesh)));
            QD._renderables.push(...ND), ID.o = ND;
            const mD = [...wD.values()].flat();
            BD(mD);
            for (const [DD, ID] of wD) CD?.releasePendingDisposers(DD, ID)
          }, {
            X: wD
          } = await Promise.resolve().then((() => cD(60508))), SD = 3;
          for (let CD = 1;; CD++) {
            if (iD = !1, await wD(QD, DD, bD), QD._z || pD?._d()) return void(MD = !0);
            if (!iD) break;
            if (CD >= SD) {
              gD(DD, ID), QD._rebuildHook = fD, ZD = !0, MD = !0;
              break
            }
          }
          iD ? yD = !0 : yD = !0
        }
      }

      function vD(DD) {
        for (const CD of DD.meshes) {
          const cD = CD.material?._buildGroup;
          if (cD && !DD._groups.get(cD)?.includes(CD)) return !0
        }
        return !1
      }

      function ND(DD) {
        const CD = new Map;
        for (const cD of DD.meshes) {
          const DD = cD.material?._buildGroup;
          if (!DD) continue;
          const ID = CD.get(DD);
          ID ? ID.push(cD) : CD.set(DD, [cD])
        }
        for (const [cD, ID] of DD._groups) {
          const DD = CD.get(cD) ?? [];
          (ID.length !== DD.length || DD.some(((DD, CD) => ID[CD] !== DD))) && (ID.length = 0, ID.push(...DD)), CD.delete(cD)
        }
        for (const [cD, ID] of CD) {
          const CD = ID;
          DD._groups.set(cD, CD)
        }
      }

      function gD(DD, CD) {
        const cD = CD.o;
        if (cD?.length) {
          const DD = new Set(cD);
          for (let CD = QD._renderables.length - 1; CD >= 0; CD--) DD.has(QD._renderables[CD]) && QD._renderables.splice(CD, 1)
        }
        CD.o = void 0, CD.r = void 0, QD._runtimeBuilds?.dropBase(DD), QD._rebuildHook = fD, ZD = !0
      }

      function XD(DD, CD) {
        const cD = new Set(DD._disposables.slice(0, CD));
        for (let ID = DD._disposables.length - 1; ID >= CD; ID--) cD.has(DD._disposables[ID]) && DD._disposables.splice(ID, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);