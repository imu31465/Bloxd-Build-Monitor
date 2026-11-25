export const id = 51;
export const ids = [51];
export const modules = {
  51269: (uu, Eu, ju) => {
    ju.d(Eu, {
      startRenderProbe: () => bu
    });
    var su = ju(656),
      Uu = ju(4557),
      Zu = ju(2943),
      Xu = ju(4698);
    const lu = 1e3,
      qu = 36e5,
      fu = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function Cu(uu, Eu, ju) {
      var Uu, Zu;
      return `${uu}; ${ju?`os ${ju.os}, gpu ${null!==(Uu=ju.gpuFamily)&&void 0!==Uu?Uu:"unknown"} ${null!==(Zu=ju.gpuModel)&&void 0!==Zu?Zu:"unknown"}`:"device unknown"}, version ${su.b}; ${Eu}`
    }

    function bu(uu) {
      var Eu;
      const ju = null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.backend) && void 0 !== Eu ? Eu : "none";
      if ("webgl" !== ju) {
        const uu = (0, Xu.f)();
        for (const {
            field: Eu
          }
          of fu) delete uu[Eu];
        return void(0, Zu.k)("renderprobe", `decode and particle probes not run: the renderer is ${ju}, and they read WebGL2's draws`)
      }
      const su = (0, Xu.f)();
      for (const {
          field: bu,
          name: cu
        }
        of fu)(0, Xu.i)(su, bu, ["1", "pending"], qu, lu).then((uu => {
        void 0 !== uu && (0, Zu.k)("renderprobe", Cu(cu, uu, (0, Uu.b)(!1)))
      }))
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);