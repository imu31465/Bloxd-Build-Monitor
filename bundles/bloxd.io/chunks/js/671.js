export const id = 671;
export const ids = [671];
export const modules = {
  64216: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      A: () => CH,
      B: () => XH,
      C: () => EH,
      X: () => GH
    });
    var AH = LH(45204),
      rH = (HH, BH) => HH.order - BH.order;

    function SH(HH, BH, LH) {
      HH.pendingDisposers.set(BH, LH)
    }

    function hH(HH, BH, LH) {
      LH && HH.pendingDisposers.get(BH) === LH && HH.pendingDisposers.delete(BH)
    }
    var tH = null,
      zH = null;

    function CH(HH, BH, LH, AH) {
      if (!BH || LH.material !== BH) return AH ?? Promise.resolve();
      const rH = XH(HH, BH._buildGroup, LH);
      return AH ? Promise.all([AH, rH]).then((() => {})) : rH
    }

    function EH(HH, BH, LH) {
      let AH = LH;
      for (const rH of BH) {
        const BH = Array.isArray(rH),
          LH = BH ? rH[0] : rH;
        AH = CH(HH, BH ? rH[1] : LH.material, LH, AH)
      }
      return (AH ?? Promise.resolve()).catch((BH => {
        HH._runtimeBuilds?._x(BH)
      }))
    }

    function XH(HH, BH, AH) {
      if (HH._z || !HH.meshes.includes(AH)) return HH._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(HH, BH, LH) {
          for (const [rH, SH] of HH._groups)
            if (rH !== BH) {
              const HH = SH.indexOf(LH);
              HH >= 0 && SH.splice(HH, 1)
            } let AH = HH._groups.get(BH);
          AH || (AH = [], HH._groups.set(BH, AH));
          AH.includes(LH) || AH.push(LH)
        }(HH, BH, AH), "pbr" === BH._materialFamily && (HH._built || HH._groups.get(BH)?.r)) {
        const BH = HH._runtimeBuilds ?? YH(HH),
          AH = LH.e(701).then((() => LH(64748))).then((BH => {
            let {
              rebuildScenePbrPipelines: LH
            } = BH;
            return HH._z ? void 0 : LH(HH, !0)
          })).catch((BH => {
            HH._runtimeBuilds?._x(BH)
          }));
        return BH.track(AH)
      }
      return (HH._runtimeBuilds ?? YH(HH)).queue(BH, AH).catch((() => {}))
    }

    function GH(HH, BH, LH) {
      return HH._z ? Promise.resolve(void 0) : (HH._runtimeBuilds ?? YH(HH)).exclusive(BH, LH)
    }

    function YH(HH) {
      const BH = {
          Mu: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        LH = HH,
        CH = {
          queue: (LH, EH) => {
            const XH = (BH.generations.get(EH) ?? 0) + 1,
              GH = EH.material;
            BH.generations.set(EH, XH);
            const YH = BH.chains.get(EH),
              uH = [BH.tail, tH?.get(LH)].filter((HH => !!HH));
            let QH = () => {};
            const vH = new Promise((HH => {
              QH = HH
            }));
            BH.tail = vH, (tH ??= new WeakMap).set(LH, vH);
            const PH = (YH ? YH.catch((() => {})) : Promise.resolve()).then((() => Promise.all(uH))).then((() => async function(HH, BH, LH, tH, CH, EH) {
              if (!WH(HH, BH, LH, tH, CH, EH)) return;
              const XH = HH._meshDisposables.get(tH);
              XH && (HH._meshDisposables.delete(tH), SH(BH, tH, XH));
              const GH = LH._rebuildSingle,
                YH = zH?.get(LH)?.cHH.get(HH) ?? HH._groups.get(LH)?.r,
                uH = !!HH._groups.get(LH)?.r,
                QH = HH._disposables.length,
                vH = HH,
                PH = vH._pbrGeomContext;
              let TH, UH;
              try {
                UH = await LH(HH, [tH]), TH = vH._pbrGeomContext
              } catch (bH) {
                if (MH(HH, BH, tH, XH), xH(HH, BH), !WH(HH, BH, LH, tH, CH, EH)) return;
                throw bH
              } finally {
                LH._rebuildSingle = GH, "pbr" === LH._materialFamily && uH && (vH._pbrGeomContext = PH)
              }
              if (!WH(HH, BH, LH, tH, CH, EH)) return MH(HH, BH, tH, XH), void xH(HH, BH);
              for (let AH = HH._renderables.length - 1; AH >= 0; AH--) HH._renderables[AH].mesh === tH && HH._renderables.splice(AH, 1);
              if (XH) {
                for (const BH of XH) {
                  const LH = HH._disposables.indexOf(BH);
                  LH >= 0 && HH._disposables.splice(LH, 1);
                  const AH = BH.p;
                  if (AH) {
                    AH._disposed = !0;
                    const HH = AH._owner;
                    if (HH) {
                      const BH = HH.indexOf(AH);
                      BH >= 0 && HH.splice(BH, 1), AH._owner = void 0, 0 === HH.length && AH._onOwnerEmpty?.()
                    } else AH._onOwnerEmpty?.();
                    AH._onOwnerEmpty && (AH._onOwnerEmpty = void 0)
                  }
                }(0, AH.f)(HH.surface.engine, (() => {
                  for (const HH of XH) HH()
                }))
              }
              hH(BH, tH, XH), HH._renderables.push(...UH.renderables);
              const VH = HH._groups.get(LH);
              VH && (VH.o = [...(VH.o ?? []).filter((HH => HH.mesh !== tH)), ...UH.renderables]);
              UH.updater && HH._uniformUpdaters.push(UH.updater);
              uH && function(HH, BH) {
                const LH = new Set(HH._disposables.slice(0, BH));
                for (let AH = HH._disposables.length - 1; AH >= BH; AH--) LH.has(HH._disposables[AH]) && HH._disposables.splice(AH, 1)
              }(HH, QH);
              "pbr" === LH._materialFamily && uH && TH && (vH._pbrMeshGeomContexts ??= new WeakMap).set(tH, TH);
              (function(HH, BH, LH, AH, rH, SH) {
                let hH = zH?.get(LH);
                if (!hH) {
                  const HH = new WeakMap,
                    BH = new WeakMap,
                    AH = (AH, rH, SH, hH) => {
                      const tH = HH.get(AH)?.get(rH);
                      if (tH) return tH(AH, rH, SH, hH);
                      const zH = BH.get(AH) ?? AH._groups.get(LH)?.r;
                      if (zH) return zH(AH, rH, SH, hH);
                      throw new Error("Material group has not completed its initial build")
                    };
                  hH = {
                    cHH: BH,
                    dispatch: AH,
                    scenes: HH
                  }, (zH ??= new WeakMap).set(LH, hH)
                }
                let tH = hH.scenes.get(HH);
                tH || (tH = new WeakMap, hH.scenes.set(HH, tH));
                tH.set(AH, rH), hH.cHH.has(HH) || hH.cHH.set(HH, SH ?? rH);
                const CH = HH._groups.get(LH);
                CH && (CH.r = hH.dispatch);
                let EH = BH.installed.get(AH);
                EH || (EH = new Set, BH.installed.set(AH, EH));
                EH.add(LH), BH.installedMeshes.add(AH)
              })(HH, BH, LH, tH, UH.rebuildSingle, uH ? YH : UH.rebuildSingle), tH.material._csmGen = (tH.material._csmGen ?? 0) + 1;
              const OH = HH._groups.get(LH);
              OH && !uH && (OH.r = UH.rebuildSingle);
              HH._renderables.sort(rH), HH._renderableVersion++, HH._materialEpoch++
            }(HH, BH, LH, EH, GH, XH))).catch((AH => {
              throw WH(HH, BH, LH, EH, GH, XH) && (BH.error = AH instanceof Error ? AH : new Error("Runtime mesh build failed", {
                cause: AH
              })), AH
            })).finally((() => {
              QH(), BH.tail === vH && (BH.tail = null), tH?.get(LH) === vH && tH.delete(LH)
            })).finally((() => {
              BH.chains.get(EH) === PH && BH.chains.delete(EH)
            }));
            return BH.chains.set(EH, PH), CH.track(PH)
          },
          all: () => Promise.all(BH.active).then((() => {})),
          track: HH => {
            const LH = HH.finally((() => BH.active.delete(LH)));
            return BH.active.add(LH), Promise.all(BH.active).then((() => {}))
          },
          base: (BH, LH) => {
            const AH = zH?.get(BH);
            return AH && AH.cHH.set(HH, LH), AH?.dispatch ?? LH
          },
          get w() {
            return !!BH.tail
          },
          pendingDisposers: HH => BH.pendingDisposers.get(HH),
          holdPendingDisposers: (HH, LH) => SH(BH, HH, LH),
          releasePendingDisposers: (HH, LH) => hH(BH, HH, LH),
          reset: AH => {
            QH(HH, BH, AH), LH._pbrMeshGeomContexts?.delete(AH)
          },
          remove: AH => {
            BH.generations.set(AH, (BH.generations.get(AH) ?? 0) + 1), BH.chains.delete(AH), uH(HH, BH, AH), LH._pbrMeshGeomContexts?.delete(AH)
          },
          dropBase: BH => {
            const LH = zH?.get(BH);
            LH && (LH.cHH.delete(HH), LH.scenes.delete(HH))
          },
          wait: async HH => {
            const LH = new Set;
            for (const AH of HH) {
              const HH = BH.chains.get(AH);
              HH && LH.add(HH)
            }
            await Promise.all(LH)
          },
          _e: function() {
            let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (BH.error) {
              const LH = BH.error;
              throw HH && (BH.error = null), LH
            }
          },
          _x: HH => {
            BH.error = HH instanceof Error ? HH : new Error("Runtime mesh build failed", {
              cause: HH
            })
          },
          _d: () => BH.Mu,
          exclusive: (HH, LH) => {
            const AH = [];
            BH.tail && AH.push(BH.tail);
            const rH = tH?.get(HH);
            rH && AH.push(rH);
            const SH = Promise.all(AH).then(LH),
              hH = SH.then((() => {}), (() => {}));
            return BH.tail = hH, (tH ??= new WeakMap).set(HH, hH), hH.then((() => {
              BH.tail === hH && (BH.tail = null), tH?.get(HH) === hH && tH.delete(HH)
            })), SH
          }
        };
      return HH._runtimeBuilds = CH, (HH._beforeRender ??= []).push((() => {
        CH._e()
      })), HH._disposables.push((() => {
        BH.Mu = !0, BH.active.clear();
        for (const LH of BH.installedMeshes) QH(HH, BH, LH);
        for (const BH of HH._groups.keys()) zH?.get(BH)?.cHH.delete(HH);
        HH._runtimeBuilds = void 0, LH._pbrMeshGeomContexts = void 0
      })), CH
    }

    function uH(HH, BH, LH) {
      const AH = BH.installed.get(LH);
      if (AH) {
        for (const BH of AH) zH?.get(BH)?.scenes.get(HH)?.delete(LH);
        BH.installed.delete(LH), BH.installedMeshes.delete(LH)
      }
    }

    function QH(HH, BH, LH) {
      uH(HH, BH, LH)
    }

    function WH(HH, BH, LH, AH, rH, SH) {
      return !BH.Mu && BH.generations.get(AH) === SH && HH.meshes.includes(AH) && AH.material === rH && rH._buildGroup === LH
    }

    function MH(HH, BH, LH, rH) {
      const SH = HH._meshDisposables.get(LH);
      if (SH && SH !== rH) {
        HH._meshDisposables.delete(LH);
        for (const HH of SH) HH()
      }
      if (rH)
        if (HH.meshes.includes(LH)) HH._meshDisposables.set(LH, rH);
        else if (BH.Mu)
        for (const AH of rH) AH();
      else(0, AH.f)(HH.surface.engine, (() => {
        for (const HH of rH) HH()
      }));
      hH(BH, LH, rH)
    }

    function xH(HH, BH) {
      if (!BH.Mu) return;
      const LH = HH._disposables.splice(0);
      for (const AH of LH) AH()
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);