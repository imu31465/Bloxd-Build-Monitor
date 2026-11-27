export const id = 670;
export const ids = [670];
export const modules = {
  63917: (ee, ie, He) => {
    He.d(ie, {
      createShadowTask: () => Me
    });
    var ye = null;

    function be(ee) {
      return ye?.get(ee)
    }

    function Me(ee, ie) {
      const He = new Set;
      0;
      const ye = {
        name: "aR",
        engine: ee,
        yp: ie,
        _passes: [],
        async _preload() {
          const ee = [];
          for (const He of ie.lights) {
            const ie = He.shadowGenerator,
              ye = ie ? be(ie) : null;
            ie?._preloadShadowTask && ye && ee.push(Ke(ie, ye))
          }
          await Promise.all(ee)
        },
        record() {
          ye._passes.length = 0;
          for (const ye of ie.lights) {
            const Me = ye.shadowGenerator,
              Ke = Me ? be(Me) : null;
            if (Me?._ensureShadowTaskState && Ke && !Me._preloadPending) {
              He.add(Me);
              const ye = Me._ensureShadowTaskState(ee, ie, Ke),
                be = ie._renderableVersion;
              ye._task.record(), ye._recordedVersion = be
            }
          }
        },
        execute() {
          let ye = 0;
          for (const Me of ie.lights) {
            const Ke = Me.shadowGenerator,
              Ue = Ke ? be(Ke) : null;
            if (Ke?._ensureShadowTaskState && Ke._renderShadowMap && Ue && !Ke._preloadPending) {
              He.add(Ke);
              const be = Ke._shadowTaskState ?? null,
                Me = Ke._ensureShadowTaskState(ee, ie, Ue);
              if (Me !== be || Me._recordedVersion !== ie._renderableVersion) {
                const ee = ie._renderableVersion;
                Me._task.record(), Me._recordedVersion = ee
              }
              ye += Ke._renderShadowMap(ee, Me)
            }
          }
          return ye
        },
        dispose() {
          ye._passes.length = 0;
          for (const ee of He) {
            const ie = ee._shadowTaskState;
            ie && (ie._task.dispose(), ee._shadowTaskState = void 0)
          }
          He.clear()
        }
      };
      return ye
    }
    async function Ke(ee, ie) {
      ee._preloadPending = ie, await (ee._preloadShadowTask?.(ie)), ee._preloadPending === ie && (ee._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);