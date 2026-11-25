export const id = 40;
export const ids = [40];
export const modules = {
  4886: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      startMemoryDebug: () => Cu
    });
    var su = ju(3017),
      Uu = ju(2943);
    const Zu = 6e4,
      Xu = 5,
      lu = ["wasmMainMiB", "wasmWorkersMiB", "jsHeapMiB", "gpuMiB", "footprintMiB", "footprintBudgetMiB", "decodedAudioMiB", "storedChunks", "knownChunks", "liveParticleSystems", "renderDistance", "sheds", "gcFull60s", "gcHighS"];
    var qu = ju(687);
    const fu = [];

    function Cu() {
      (0, Uu.r)() && (0, Uu.v)(cu), bu(), setInterval(bu, Zu)
    }

    function bu() {
      var uu;
      const {
        client: Eu,
        playedS: ju,
        snapshot: Zu
      } = (0, qu.m)(), Cu = null !== (uu = Zu.wasmMainMiB) && void 0 !== uu ? uu : function() {
        try {
          return (0, qu.A)((0, su.z)().buffer.byteLength)
        } catch {
          return null
        }
      }(), bu = function(uu) {
        let {
          client: Eu,
          playedS: ju,
          hidden: su,
          snapshot: Uu
        } = uu;
        const Zu = [`client=${null!==Eu&&void 0!==Eu?Eu:"none"}`];
        null !== ju && Zu.push(`playedS=${ju}`);
        const Xu = Uu.pageAgeS;
        "number" === typeof Xu && Zu.push(`pageAgeS=${Xu}`), Zu.push("hidden=" + (su ? 1 : 0));
        for (const qu of lu) {
          const uu = Uu[qu];
          "number" === typeof uu && Number.isFinite(uu) && Zu.push(`${qu}=${uu}`)
        }
        return Zu.join(" ")
      }({
        client: Eu,
        playedS: ju,
        hidden: document.hidden,
        snapshot: {
          ...Zu,
          wasmMainMiB: Cu
        }
      });
      (0, Uu.r)() ? (fu.push(bu), fu.length >= Xu && cu()) : (0, Uu.k)("memory", bu)
    }

    function cu() {
      for (const uu of fu.splice(0))(0, Uu.k)("memory", uu)
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);