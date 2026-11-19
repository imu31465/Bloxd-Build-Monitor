export const id = 55;
export const ids = [55];
export const modules = {
  39931: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      prefetchWasmClient: () => oz,
      startJoinLoad: () => Xz,
      startLoadAheadOfJoin: () => sz
    });
    var Ez = bz(3468),
      nz = bz(35811),
      iz = bz(39940),
      lz = bz(1068),
      Mz = bz(606),
      tz = bz(39965),
      Hz = (bz(39987), bz(39997)),
      Oz = bz(40002),
      pz = bz(40025);
    const dz = "[bloxd-wasm-client]";
    let Fz = null,
      Zz = null,
      Rz = null,
      Kz = null,
      wz = null;

    function Xz() {
      return Kz ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const zz = await (0, Oz.I)();
        if (null === zz) return;
        if ((0, tz.m)(zz)) return (0, Oz.M)("none"), void fz("none");
        if ("wasm" !== (0, Mz.h)(window.location.search) && null !== (0, Hz.d)(zz, (0, Hz.f)(zz, !0))) return (0, Oz.M)("none"), void fz("none");
        (0, Oz.M)(zz.backend);
        const uz = await zz.load();
        fz(uz.name), "unloaded" === (0, Ez.E)() && (0, Oz.o)(), await (0, nz.g)(uz, iz.h) || console.warn(`${dz} the join's early wasm load failed: the boot loads the client itself`)
      })().catch((zz => {
        console.warn(`${dz} the join's early wasm load did not start: the boot loads the client itself`, zz)
      })), Kz
    }

    function fz(zz) {
      null !== wz && (0, lz.logClientMeasurement)("wasm_compile_ahead", {
        hit: wz === zz ? 1 : 0
      }, {
        guessed: wz,
        loaded: zz
      })
    }

    function sz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === Rz) {
        var uz;
        const bz = null !== (uz = zz.joinStarted) && void 0 !== uz ? uz : () => !1;
        Rz = Promise.all([oz(zz), rz(bz)]).then((() => {}))
      }
      return Rz
    }

    function rz(zz) {
      return Zz ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const uz = await (0, Oz.j)();
        null === uz || zz() || "unloaded" !== (0, Ez.E)() || (wz = uz.name, await (0, nz.d)([uz, iz.h], "low"))
      })().catch((zz => {
        console.warn(`${dz} the compile ahead of the join did not start: the join loads the client itself`, zz)
      })), Zz
    }

    function oz() {
      let {
        joinStarted: zz = () => !1,
        language: uz = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Fz ??= async function(zz, uz) {
        if (!await async function(zz) {
            if (zz()) return !1;
            let uz;
            try {
              var Ez;
              const zz = await fetch(`${bz.p}static/js/ad2avs.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!zz.ok) throw new Error(`HTTP ${zz.status}`);
              if (/\bno-store\b/.test(null !== (Ez = zz.headers.get("Cache-Control")) && void 0 !== Ez ? Ez : "")) return !1;
              const nz = await zz.json();
              if (!Array.isArray(nz)) throw new Error("not a list");
              uz = nz
            } catch (iz) {
              return console.warn(`${dz} the join's chunk list did not load: the join downloads its chunks itself`, iz), !zz()
            }
            if (zz()) return !1;
            const nz = document.createElement("link").relList.supports("prefetch");
            for (const lz of uz) {
              const zz = `${bz.p}${lz}`;
              nz ? Nz(zz) : vz(zz).catch((uz => {
                console.warn(`${dz} prefetching ${zz} failed`, uz)
              }))
            }
            return !0
          }(zz)) return;
        const Ez = [vz((0, pz.i)())];
        (0, pz.e)(uz) && Ez.push(vz((0, pz.m)()));
        await Promise.all(Ez)
      }(zz, uz).catch((zz => {
        console.warn(`${dz} the prefetch failed: the join downloads the client itself`, zz)
      })), Fz
    }

    function Nz(zz) {
      const uz = document.createElement("link");
      uz.rel = "prefetch", uz.href = zz, zz.endsWith(".js") && (uz.crossOrigin = "anonymous"), document.head.appendChild(uz)
    }
    async function vz(zz) {
      const uz = await fetch(zz, {
        priority: "low"
      });
      if (!uz.ok) throw new Error(`Fetching ${zz} failed: HTTP ${uz.status}`);
      const bz = uz.body.getReader();
      for (; !(await bz.read()).done;);
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);