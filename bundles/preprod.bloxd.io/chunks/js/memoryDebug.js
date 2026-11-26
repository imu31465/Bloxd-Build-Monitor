export const id = 47;
export const ids = [47];
export const modules = {
  5213: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      startMemoryDebug: () => EU
    });
    var cU = zU(3169),
      yU = zU(3099);
    const QU = 6e4,
      AU = 5,
      FU = ["wasmMainMiB", "wasmWorkersMiB", "jsHeapMiB", "gpuMiB", "footprintMiB", "footprintBudgetMiB", "decodedAudioMiB", "storedChunks", "knownChunks", "liveParticleSystems", "renderDistance", "sheds", "gcFull60s", "gcHighS"];
    var oU = zU(691);
    const DU = [];

    function EU() {
      (0, yU.t)() && (0, yU.w)(NU), YU(), setInterval(YU, QU)
    }

    function YU() {
      var UU;
      const {
        client: XU,
        playedS: zU,
        snapshot: QU
      } = (0, oU.t)(), EU = null !== (UU = QU.wasmMainMiB) && void 0 !== UU ? UU : function() {
        try {
          return (0, oU.X)((0, cU.x)().buffer.byteLength)
        } catch {
          return null
        }
      }(), YU = function(UU) {
        let {
          client: XU,
          playedS: zU,
          hidden: cU,
          snapshot: yU
        } = UU;
        const QU = [`client=${null!==XU&&void 0!==XU?XU:"none"}`];
        null !== zU && QU.push(`playedS=${zU}`);
        const AU = yU.pageAgeS;
        "number" === typeof AU && QU.push(`pageAgeS=${AU}`), QU.push("hidden=" + (cU ? 1 : 0));
        for (const oU of FU) {
          const UU = yU[oU];
          "number" === typeof UU && Number.isFinite(UU) && QU.push(`${oU}=${UU}`)
        }
        return QU.join(" ")
      }({
        client: XU,
        playedS: zU,
        hidden: document.hidden,
        snapshot: {
          ...QU,
          wasmMainMiB: EU
        }
      });
      (0, yU.t)() ? (DU.push(YU), DU.length >= AU && NU()) : (0, yU.l)("memory", YU)
    }

    function NU() {
      for (const UU of DU.splice(0))(0, yU.l)("memory", UU)
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);