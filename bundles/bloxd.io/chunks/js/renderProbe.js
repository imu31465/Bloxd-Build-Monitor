export const id = 58;
export const ids = [58];
export const modules = {
  54277: (ee, ie, He) => {
    He.d(ie, {
      startRenderProbe: () => Re
    });
    var ye = He(618),
      be = He(4756),
      Me = He(3037),
      Ke = He(4896);
    const Ue = 1e3,
      Fe = 36e5,
      Je = [{
        field: "decodeProbe",
        name: "decode probe"
      }, {
        field: "particleProbe",
        name: "particle probe"
      }];

    function oe(ee, ie, He) {
      var be, Me;
      return `${ee}; ${He?`os ${He.os}, gpu ${null!==(be=He.gpuFamily)&&void 0!==be?be:"unknown"} ${null!==(Me=He.gpuModel)&&void 0!==Me?Me:"unknown"}`:"device unknown"}, version ${ye.b}; ${ie}`
    }

    function Re(ee) {
      var ie;
      const He = null !== (ie = null === ee || void 0 === ee ? void 0 : ee.backend) && void 0 !== ie ? ie : "none";
      if ("webgl" !== He) {
        const ee = (0, Ke.e)();
        for (const {
            field: ie
          }
          of Je) delete ee[ie];
        return void(0, Me.m)("renderprobe", `decode and particle probes not run: the renderer is ${He}, and they read WebGL2's draws`)
      }
      const ye = (0, Ke.e)();
      for (const {
          field: Re,
          name: ke
        }
        of Je)(0, Ke.f)(ye, Re, ["1", "pending"], Fe, Ue).then((ee => {
        void 0 !== ee && (0, Me.m)("renderprobe", oe(ke, ee, (0, be.b)(!1)))
      }))
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);