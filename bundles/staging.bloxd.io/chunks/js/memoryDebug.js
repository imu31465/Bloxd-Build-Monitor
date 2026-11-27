export const id = 47;
export const ids = [47];
export const modules = {
  5179: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      startMemoryDebug: () => oe
    });
    var ye = He(3094),
      be = He(3037);
    const Me = 6e4,
      Ke = 5,
      Ue = ["wasmMainMiB", "wasmWorkersMiB", "jsHeapMiB", "gpuMiB", "footprintMiB", "footprintBudgetMiB", "decodedAudioMiB", "storedChunks", "knownChunks", "liveParticleSystems", "renderDistance", "sheds", "gcFull60s", "gcHighS"];
    var Fe = He(649);
    const Je = [];

    function oe() {
      (0, be.r)() && (0, be.x)(ke), Re(), setInterval(Re, Me)
    }

    function Re() {
      var ee;
      const {
        client: ie,
        playedS: He,
        snapshot: Me
      } = (0, Fe.n)(), oe = null !== (ee = Me.wasmMainMiB) && void 0 !== ee ? ee : function() {
        try {
          return (0, Fe.P)((0, ye.t)().buffer.byteLength)
        } catch {
          return null
        }
      }(), Re = function(ee) {
        let {
          client: ie,
          playedS: He,
          hidden: ye,
          snapshot: be
        } = ee;
        const Me = [`client=${null!==ie&&void 0!==ie?ie:"none"}`];
        null !== He && Me.push(`playedS=${He}`);
        const Ke = be.pageAgeS;
        "number" === typeof Ke && Me.push(`pageAgeS=${Ke}`), Me.push("hidden=" + (ye ? 1 : 0));
        for (const Fe of Ue) {
          const ee = be[Fe];
          "number" === typeof ee && Number.isFinite(ee) && Me.push(`${Fe}=${ee}`)
        }
        return Me.join(" ")
      }({
        client: ie,
        playedS: He,
        hidden: document.hidden,
        snapshot: {
          ...Me,
          wasmMainMiB: oe
        }
      });
      (0, be.r)() ? (Je.push(Re), Je.length >= Ke && ke()) : (0, be.m)("memory", Re)
    }

    function ke() {
      for (const ee of Je.splice(0))(0, be.m)("memory", ee)
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);