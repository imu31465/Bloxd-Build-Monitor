export const id = 366;
export const ids = [366];
export const modules = {
  61466: (pp, ip, cp) => {
    cp.d(ip, {
      createShadowTask: () => Ip
    });
    var Op = null;

    function op(pp) {
      return Op?.get(pp)
    }

    function Ip(pp, ip) {
      const cp = new Set;
      0;
      const Op = {
        name: "Ay",
        engine: pp,
        pw: ip,
        _passes: [],
        async _preload() {
          const pp = [];
          for (const cp of ip.lights) {
            const ip = cp.shadowGenerator,
              Op = ip ? op(ip) : null;
            ip?._preloadShadowTask && Op && pp.push(Sp(ip, Op))
          }
          await Promise.all(pp)
        },
        record() {
          Op._passes.length = 0;
          for (const Op of ip.lights) {
            const Ip = Op.shadowGenerator,
              Sp = Ip ? op(Ip) : null;
            if (Ip?._ensureShadowTaskState && Sp && !Ip._preloadPending) {
              cp.add(Ip);
              const Op = Ip._ensureShadowTaskState(pp, ip, Sp),
                op = ip._renderableVersion;
              Op._task.record(), Op._recordedVersion = op
            }
          }
        },
        execute() {
          let Op = 0;
          for (const Ip of ip.lights) {
            const Sp = Ip.shadowGenerator,
              xp = Sp ? op(Sp) : null;
            if (Sp?._ensureShadowTaskState && Sp._renderShadowMap && xp && !Sp._preloadPending) {
              cp.add(Sp);
              const op = Sp._shadowTaskState ?? null,
                Ip = Sp._ensureShadowTaskState(pp, ip, xp);
              if (Ip !== op || Ip._recordedVersion !== ip._renderableVersion) {
                const pp = ip._renderableVersion;
                Ip._task.record(), Ip._recordedVersion = pp
              }
              Op += Sp._renderShadowMap(pp, Ip)
            }
          }
          return Op
        },
        dispose() {
          Op._passes.length = 0;
          for (const pp of cp) {
            const ip = pp._shadowTaskState;
            ip && (ip._task.dispose(), pp._shadowTaskState = void 0)
          }
          cp.clear()
        }
      };
      return Op
    }
    async function Sp(pp, ip) {
      pp._preloadPending = ip, await (pp._preloadShadowTask?.(ip)), pp._preloadPending === ip && (pp._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);