export const id = 48;
export const ids = [48];
export const modules = {
  5603: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      startMemoryDebug: () => Ib
    });
    var eb = Mb(2463),
      Hb = Mb(4060);
    const pb = 6e4,
      Vb = 5,
      gb = ["wasmMainMiB", "wasmWorkersMiB", "jsHeapMiB", "gpuMiB", "footprintMiB", "footprintBudgetMiB", "decodedAudioMiB", "storedChunks", "knownChunks", "liveParticleSystems", "renderDistance", "sheds", "gcFull60s", "gcHighS"];
    var lb = Mb(700);
    const Lb = [];

    function Ib() {
      (0, Hb.n)() && (0, Hb.y)(Ub), Ob(), setInterval(Ob, pb)
    }

    function Ob() {
      var bb;
      const {
        client: wb,
        playedS: Mb,
        snapshot: pb
      } = (0, lb.n)(), Ib = null !== (bb = pb.wasmMainMiB) && void 0 !== bb ? bb : function() {
        try {
          return (0, lb.U)((0, eb.t)().buffer.byteLength)
        } catch {
          return null
        }
      }(), Ob = function(bb) {
        let {
          client: wb,
          playedS: Mb,
          hidden: eb,
          snapshot: Hb
        } = bb;
        const pb = [`client=${null!==wb&&void 0!==wb?wb:"none"}`];
        null !== Mb && pb.push(`playedS=${Mb}`);
        const Vb = Hb.pageAgeS;
        "number" === typeof Vb && pb.push(`pageAgeS=${Vb}`), pb.push("hidden=" + (eb ? 1 : 0));
        for (const lb of gb) {
          const bb = Hb[lb];
          "number" === typeof bb && Number.isFinite(bb) && pb.push(`${lb}=${bb}`)
        }
        return pb.join(" ")
      }({
        client: wb,
        playedS: Mb,
        hidden: document.hidden,
        snapshot: {
          ...pb,
          wasmMainMiB: Ib
        }
      });
      (0, Hb.n)() ? (Lb.push(Ob), Lb.length >= Vb && Ub()) : (0, Hb.j)("memory", Ob)
    }

    function Ub() {
      for (const bb of Lb.splice(0))(0, Hb.j)("memory", bb)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);