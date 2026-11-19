export const id = 385;
export const ids = [385];
export const modules = {
  60975: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      rebuildScenePbrPipelines: () => OY,
      rebuildSceneRenderables: () => gY
    });
    var FY = DY(40791),
      AY = (YY, rY) => YY.order - rY.order,
      IY = 8,
      RY = YY => gY(YY);
    async function OY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await aY(YY, "pbr", rY)
    }
    async function gY(YY) {
      await aY(YY, void 0, !1)
    }
    async function aY(YY, rY, OY) {
      const gY = YY;
      if (!gY._built && !OY) return;
      const aY = gY._lightListVersion ?? 0,
        vY = gY.surface.engine,
        uY = YY => {
          gY._z ? YY.forEach((YY => YY())) : (0, FY.e)(vY, (() => YY.forEach((YY => YY()))))
        };
      let sY = !1,
        iY = !1,
        yY = !1,
        QY = !1;
      try {
        for (let YY = 1;; YY++) {
          if (void 0 !== rY) {
            await oY();
            break
          }
          if (EY(gY), await oY(), !WY(gY)) break;
          if (YY >= IY) {
            gY._rebuildHook = RY, QY = !0, iY = !0;
            break
          }
        }
        yY = !0
      } finally {
        if (sY && (gY._renderables.sort(AY), gY._renderableVersion++, gY._materialEpoch++, gY._built && gY._frameGraph.build()), void 0 === rY && yY && !iY && (gY._lightListVersion ?? 0) === aY) {
          const YY = gY._pendingTopologyRetirements?.splice(0);
          YY?.length && uY(YY), QY || (gY._rebuildHook = void 0)
        }
      }
      async function oY() {
        for (const [YY, FY] of gY._groups) {
          if (void 0 !== rY && YY._materialFamily !== rY) continue;
          if (0 === FY.length) {
            (FY.o || FY.r) && (mY(YY, FY), sY = !0);
            continue
          }
          const AY = gY._runtimeBuilds;
          await (AY?.wait(FY));
          let IY = !1;
          const OY = async () => {
            const rY = gY._runtimeBuilds,
              DY = [...FY].filter((rY => gY.meshes.includes(rY) && rY.material?._buildGroup === YY));
            if (0 === DY.length) return void mY(YY, FY);
            const RY = !!FY.r,
              OY = gY._disposables.length,
              aY = new Map,
              vY = new Map(DY.map((YY => [YY, YY.material])));
            for (const YY of DY) {
              const DY = gY._meshDisposables.get(YY);
              DY && (aY.set(YY, DY), gY._meshDisposables.delete(YY), rY?.holdPendingDisposers(YY, DY))
            }
            let sY, iY;
            gY._p = YY => (iY = YY, !0);
            try {
              sY = await YY(gY, DY)
            } catch (lY) {
              iY?.[1]();
              for (const AY of DY) {
                const DY = aY.get(AY),
                  IY = gY._meshDisposables.get(AY);
                if (IY && IY !== DY)
                  for (const YY of IY) YY();
                const RY = gY.meshes.includes(AY) && AY.material === vY.get(AY) && AY.material?._buildGroup === YY && FY.includes(AY);
                DY && RY ? gY._meshDisposables.set(AY, DY) : (gY._meshDisposables.delete(AY), DY && uY(DY)), DY && rY?.releasePendingDisposers(AY, DY)
              }
              throw lY
            } finally {
              delete gY._p
            }
            if (gY._z || AY?._d()) {
              iY?.[1]();
              for (const rY of DY) {
                const YY = gY._meshDisposables.get(rY),
                  DY = aY.get(rY);
                if (YY && YY !== DY)
                  for (const rY of YY) rY();
                gY._meshDisposables.delete(rY)
              }
              for (const rY of gY._disposables.splice(0)) rY();
              const YY = [...aY.values()].flat();
              uY(YY);
              for (const [DY, FY] of aY) rY?.releasePendingDisposers(DY, FY);
              return
            }
            iY?.[0](), YY._rebuildSingle = sY.rebuildSingle, FY.r = gY._runtimeBuilds?.base(YY, sY.rebuildSingle) ?? sY.rebuildSingle, "pbr" === YY._materialFamily && sY._G && (FY._w = null), RY && VY(gY, OY);
            const yY = new Set(DY.filter((rY => gY.meshes.includes(rY) && rY.material === vY.get(rY) && rY.material?._buildGroup === YY && FY.includes(rY))));
            if (yY.size !== DY.length && sY.renderables.some((YY => !YY.mesh))) {
              for (const YY of DY) {
                const DY = gY._meshDisposables.get(YY),
                  FY = aY.get(YY);
                if (DY && DY !== FY)
                  for (const YY of DY) YY();
                FY && gY.meshes.includes(YY) ? gY._meshDisposables.set(YY, FY) : (gY._meshDisposables.delete(YY), FY && uY(FY)), FY && rY?.releasePendingDisposers(YY, FY)
              }
              return void(IY = !0)
            }
            const QY = new Set;
            for (const YY of DY)
              if (yY.has(YY)) QY.add(YY.material), gY._runtimeBuilds?.reset(YY);
              else {
                const DY = aY.get(YY),
                  FY = gY._meshDisposables.get(YY);
                if (FY && FY !== DY)
                  for (const YY of FY) YY();
                DY && gY.meshes.includes(YY) ? (gY._meshDisposables.set(YY, DY), aY.delete(YY), rY?.releasePendingDisposers(YY, DY)) : gY._meshDisposables.delete(YY)
              } for (const YY of QY) YY._csmGen = (YY._csmGen ?? 0) + 1;
            const oY = FY.o,
              WY = oY?.length ? new Set(oY) : null;
            for (let YY = gY._renderables.length - 1; YY >= 0; YY--) {
              const rY = gY._renderables[YY];
              (yY.has(rY.mesh) || WY?.has(rY)) && gY._renderables.splice(YY, 1)
            }
            const EY = sY.renderables.filter((YY => !YY.mesh || yY.has(YY.mesh)));
            gY._renderables.push(...EY), FY.o = EY;
            const SY = [...aY.values()].flat();
            uY(SY);
            for (const [YY, FY] of aY) rY?.releasePendingDisposers(YY, FY)
          }, {
            X: aY
          } = await Promise.resolve().then((() => DY(60320))), vY = 3;
          for (let rY = 1;; rY++) {
            if (IY = !1, await aY(gY, YY, OY), gY._z || AY?._d()) return void(iY = !0);
            if (!IY) break;
            if (rY >= vY) {
              mY(YY, FY), gY._rebuildHook = RY, QY = !0, iY = !0;
              break
            }
          }
          IY ? sY = !0 : sY = !0
        }
      }

      function WY(YY) {
        for (const rY of YY.meshes) {
          const DY = rY.material?._buildGroup;
          if (DY && !YY._groups.get(DY)?.includes(rY)) return !0
        }
        return !1
      }

      function EY(YY) {
        const rY = new Map;
        for (const DY of YY.meshes) {
          const YY = DY.material?._buildGroup;
          if (!YY) continue;
          const FY = rY.get(YY);
          FY ? FY.push(DY) : rY.set(YY, [DY])
        }
        for (const [DY, FY] of YY._groups) {
          const YY = rY.get(DY) ?? [];
          (FY.length !== YY.length || YY.some(((YY, rY) => FY[rY] !== YY))) && (FY.length = 0, FY.push(...YY)), rY.delete(DY)
        }
        for (const [DY, FY] of rY) {
          const rY = FY;
          YY._groups.set(DY, rY)
        }
      }

      function mY(YY, rY) {
        const DY = rY.o;
        if (DY?.length) {
          const YY = new Set(DY);
          for (let rY = gY._renderables.length - 1; rY >= 0; rY--) YY.has(gY._renderables[rY]) && gY._renderables.splice(rY, 1)
        }
        rY.o = void 0, rY.r = void 0, gY._runtimeBuilds?.dropBase(YY), gY._rebuildHook = RY, QY = !0
      }

      function VY(YY, rY) {
        const DY = new Set(YY._disposables.slice(0, rY));
        for (let FY = YY._disposables.length - 1; FY >= rY; FY--) DY.has(YY._disposables[FY]) && YY._disposables.splice(FY, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);