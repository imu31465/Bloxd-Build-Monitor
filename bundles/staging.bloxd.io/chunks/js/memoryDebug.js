export const id = 40;
export const ids = [40];
export const modules = {
  4811: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      startMemoryDebug: () => Dp
    });
    var Op = cp(2963),
      op = cp(2908);
    const Ip = 6e4,
      Sp = 5,
      xp = ["wasmMainMiB", "wasmWorkersMiB", "jsHeapMiB", "gpuMiB", "footprintMiB", "footprintBudgetMiB", "decodedAudioMiB", "storedChunks", "knownChunks", "liveParticleSystems", "renderDistance", "sheds", "gcFull60s", "gcHighS"];
    var Lp = cp(659);
    const Yp = [];

    function Dp() {
      (0, op.v)() && (0, op.C)(Pp), Ap(), setInterval(Ap, Ip)
    }

    function Ap() {
      var pp;
      const {
        client: ip,
        playedS: cp,
        snapshot: Ip
      } = (0, Lp.q)(), Dp = null !== (pp = Ip.wasmMainMiB) && void 0 !== pp ? pp : function() {
        try {
          return (0, Lp.O)((0, Op.z)().buffer.byteLength)
        } catch {
          return null
        }
      }(), Ap = function(pp) {
        let {
          client: ip,
          playedS: cp,
          hidden: Op,
          snapshot: op
        } = pp;
        const Ip = [`client=${null!==ip&&void 0!==ip?ip:"none"}`];
        null !== cp && Ip.push(`playedS=${cp}`);
        const Sp = op.pageAgeS;
        "number" === typeof Sp && Ip.push(`pageAgeS=${Sp}`), Ip.push("hidden=" + (Op ? 1 : 0));
        for (const Lp of xp) {
          const pp = op[Lp];
          "number" === typeof pp && Number.isFinite(pp) && Ip.push(`${Lp}=${pp}`)
        }
        return Ip.join(" ")
      }({
        client: ip,
        playedS: cp,
        hidden: document.hidden,
        snapshot: {
          ...Ip,
          wasmMainMiB: Dp
        }
      });
      (0, op.v)() ? (Yp.push(Ap), Yp.length >= Sp && Pp()) : (0, op.n)("memory", Ap)
    }

    function Pp() {
      for (const pp of Yp.splice(0))(0, op.n)("memory", pp)
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);