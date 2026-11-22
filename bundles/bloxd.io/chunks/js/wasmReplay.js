export const id = 65;
export const ids = [65];
export const modules = {
  60877: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/bloxd_wasm_replay_bg.1e8b541555095944fea4.wasm"
  },
  6459: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => bk
    });
    var Dk = ik(2823);
    const fk = {
      bloxd_wasm: () => "295c5cd2cc27f19595e8622c000a7c41e60e485a07dbba504442890cbd24a8aa",
      bloxd_wasm_client: () => "416b91d2a16ae728bbeca95bbffddabc8a3a7b4a34aa66d1fe6f3b3eaf78245d",
      bloxd_wasm_workers: () => "1d7067ca0a5537d6f71a4946b88fe0f1c972f70665e18d64e4adb5d5285f18e2",
      bloxd_wasm_models: () => "867866320707b9f1ca78d6925955f07814ec1ca44420a0c7cde5311c04365e33",
      bloxd_wasm_webgpu: () => "9867480be13b90b64fe4abafb562dec31eaac1bd6f0fcc19b9bb76500d4fdc10",
      bloxd_wasm_webgl: () => "9f4c0bbaef65b13dad73d1ed314d3c8b192b18cfc30179c3542f3ca03efb48fd",
      bloxd_wasm_webgl1: () => "014507591fe08d6df7d489a19d8df0b9f54e5fadda2418f355e9f2ae9280bb00",
      bloxd_wasm_replay: () => "03359aae307812a1ddfe49365a61deb594b3a7b4fb670fa4cb1f3ee68976c741",
      bloxd_wasm_recorder: () => "0b07d8728842a235c0e7a2c268ef34837026080bff9775bbc59cb6b2df75da11",
      bloxd_wasm_anim: () => "39f782ac95bb53f159aa901360aa630676baa5e6c493e3edb2871e65cc6a978c",
      bloxd_wasm_textures: () => "ef551c40e5bb3fca12998cd42e0e4317f1aad8584357c16a578ec219fc254bcb",
      bloxd_wasm_shader_pack: () => "9f488776af56b7975c23b43dfcad2bdc3764d5025ab085512a39009b8882a5ef"
    };
    var Sk = ik(4629);

    function bk(kk) {
      const ek = Object.prototype.hasOwnProperty.call(fk, kk) ? fk[kk]() : void 0;
      if (void 0 !== ek) return {
        sha256: ek,
        onMismatch: Sk.s
      };
      throw new Dk.l(`${kk} has no release digest, so this build refuses it`)
    }
  },
  60873: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      BloxdReplayWasmError: () => Qk,
      loadReplayModule: () => Xk,
      markReplayTrapped: () => Tk,
      replayMemoryBytes: () => ck,
      unloadReplayModule: () => Bk
    });
    var Dk = {};
    ik.r(Dk), ik.d(Dk, {
      Ffk: () => fk,
      wbk: () => qk,
      lK: () => Sk,
      default: () => uk,
      initSync: () => Fk,
      pK: () => bk,
      jfk: () => rk,
      ufk: () => Pk
    });
    class fk {
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Mk.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        sk.P8yO(kk, 0)
      }
      Qfk(kk, ek, ik, Dk, fk, Sk) {
        sk.avZm(this.__wbg_ptr, kk, ek, ik, Dk, fk, Sk)
      }
      close() {
        sk.WVSP(this.__wbg_ptr)
      }
      crop(kk, ek) {
        sk.uO6T(this.__wbg_ptr, kk, ek)
      }
      hfk(kk, ek) {
        sk.jESp(this.__wbg_ptr, kk, ek)
      }
      tfk() {
        return sk.ekDG(this.__wbg_ptr) >>> 0
      }
      Wfk() {
        return sk.GMoQ(this.__wbg_ptr) >>> 0
      }
      Xfk() {
        return sk.AwiW(this.__wbg_ptr) >>> 0
      }
      Bfk() {
        return sk.XkvA(this.__wbg_ptr) >>> 0
      }
      Efk(kk, ek) {
        sk.j4fZ(this.__wbg_ptr, kk, ek)
      }
      constructor() {
        const kk = sk.VmYm();
        return this.__wbg_ptr = kk, Mk.register(this, this.__wbg_ptr, this), this
      }
      open() {
        sk.b6Oe(this.__wbg_ptr)
      }
      Yfk() {
        return sk.vCcZ(this.__wbg_ptr) >>> 0
      }
      pause() {
        sk.G4m8(this.__wbg_ptr)
      }
      play() {
        sk.o3mb(this.__wbg_ptr)
      }
      save() {
        return sk.nmFi(this.__wbg_ptr) >>> 0
      }
      cfk() {
        sk.x8Jn(this.__wbg_ptr)
      }
      seek(kk, ek) {
        sk.X2On(this.__wbg_ptr, kk, ek)
      }
      ofk(kk) {
        sk.Go0F(this.__wbg_ptr, kk)
      }
      vfk(kk, ek) {
        const ik = function(kk, ek) {
            const ik = ek(8 * kk.length, 8) >>> 0;
            return function() {
              null !== xk && 0 !== xk.byteLength || (xk = new Float64Array(sk.memory.buffer));
              return xk
            }().set(kk, ik / 8), dk = kk.length, ik
          }(ek, sk.kRSN),
          Dk = dk;
        sk.JVi6(this.__wbg_ptr, kk, ik, Dk)
      }
      zfk(kk, ek) {
        sk.SxB7(this.__wbg_ptr, kk, ek)
      }
      Tfk(kk) {
        sk.Edzh(this.__wbg_ptr, kk)
      }
      stage(kk) {
        return sk.gLTF(this.__wbg_ptr, kk) >>> 0
      }
      step(kk, ek) {
        return sk.cFf0(this.__wbg_ptr, kk, ek) >>> 0
      }
    }

    function Sk(kk, ek) {
      const ik = function(kk, ek, ik) {
          if (void 0 === ik) {
            const ik = Ck.encode(kk),
              Dk = ek(ik.length, 1) >>> 0;
            return Hk().subarray(Dk, Dk + ik.length).set(ik), dk = ik.length, Dk
          }
          let Dk = kk.length,
            fk = ek(Dk, 1) >>> 0;
          const Sk = Hk();
          let bk = 0;
          for (; bk < Dk; bk++) {
            const ek = kk.charCodeAt(bk);
            if (ek > 127) break;
            Sk[fk + bk] = ek
          }
          if (bk !== Dk) {
            0 !== bk && (kk = kk.slice(bk)), fk = ik(fk, Dk, Dk = bk + 3 * kk.length, 1) >>> 0;
            const ek = Hk().subarray(fk + bk, fk + Dk);
            bk += Ck.encodeInto(kk, ek).written, fk = ik(fk, Dk, bk, 1) >>> 0
          }
          return dk = bk, fk
        }(kk, sk.kRSN, sk.TNXt),
        Dk = dk,
        fk = sk.FOen(ik, Dk, ek);
      if (fk[1]) throw pk(fk[0])
    }

    function bk() {
      sk.q5JU()
    }

    function rk() {
      return sk.LIME() >>> 0
    }

    function Pk() {
      return pk(sk.pZIE())
    }

    function mk() {
      return {
        __proto__: null,
        g0gk: {
          __proto__: null,
          K0AA: function(kk, ek) {
            return Kk(Error(nk(kk, ek)))
          },
          bP3m: function() {
            return Kk(sk.memory)
          },
          rlxa: function(kk, ek) {
            throw new Error(nk(kk, ek))
          },
          S83Q: function(kk, ek) {
            console.error(nk(kk, ek))
          },
          CNnl: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (fk.prototype[Symbol.dispose] = fk.prototype.free);
    const Mk = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((kk => sk?.__wbg_replaymodule_free(kk, 1)));

    function Kk(kk) {
      lk === wk.length && wk.push(wk.length + 1);
      const ek = lk;
      return lk = wk[ek], wk[ek] = kk, ek
    }
    let xk = null;

    function nk(kk, ek) {
      return function(kk, ek) {
        Lk += ek, Lk >= Yk && (yk = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), yk.decode(), Lk = ek);
        return yk.decode(Hk().subarray(kk, kk + ek))
      }(kk >>> 0, ek)
    }
    let Uk = null;

    function Hk() {
      return null !== Uk && 0 !== Uk.byteLength || (Uk = new Uint8Array(sk.memory.buffer)), Uk
    }
    let wk = new Array(1024).fill(void 0);
    wk.push(void 0, null, !0, !1);
    let lk = wk.length;

    function pk(kk) {
      const ek = function(kk) {
        return wk[kk]
      }(kk);
      return function(kk) {
        kk < 1028 || (wk[kk] = lk, lk = kk)
      }(kk), ek
    }
    let yk = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    yk.decode();
    const Yk = 2146435072;
    let Lk = 0;
    const Ck = new TextEncoder;
    "encodeInto" in Ck || (Ck.encodeInto = function(kk, ek) {
      const ik = Ck.encode(kk);
      return ek.set(ik), {
        read: kk.length,
        written: ik.length
      }
    });
    let Ak, jk, sk, dk = 0;

    function Vk(kk, ek) {
      return jk = kk, sk = kk.exports, Ak = ek, xk = null, Uk = null, sk.tph4(), sk
    }

    function Fk(kk) {
      if (void 0 !== sk) return sk;
      void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
        module: kk
      } = kk) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const ek = mk();
      kk instanceof WebAssembly.Module || (kk = new WebAssembly.Module(kk));
      return Vk(new WebAssembly.Instance(kk, ek), kk)
    }
    async function uk(kk) {
      if (void 0 !== sk) return sk;
      void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
        module_or_path: kk
      } = kk) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const ek = mk();
      ("string" === typeof kk || "function" === typeof Request && kk instanceof Request || "function" === typeof URL && kk instanceof URL) && (kk = fetch(kk));
      const {
        instance: ik,
        module: Dk
      } = await async function(kk, ek) {
        if ("function" === typeof Response && kk instanceof Response) {
          if (!kk.ok) throw new Error(`failed to fetch Wasm: ${kk.status} ${kk.statusText} fetching '${kk.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(kk, ek)
          } catch (ik) {
            if (! function(kk) {
                switch (kk) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(kk.type) || "application/wasm" === kk.headers.get("Content-Type")) throw ik;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", ik)
          }
          const Dk = await kk.arrayBuffer();
          return await WebAssembly.instantiate(Dk, ek)
        } {
          const ik = await WebAssembly.instantiate(kk, ek);
          return ik instanceof WebAssembly.Instance ? {
            instance: ik,
            module: kk
          } : ik
        }
      }(await kk, ek);
      return Vk(ik, Dk)
    }

    function qk() {
      sk = void 0, jk = void 0, xk = null, Uk = null, wk = new Array(1024).fill(void 0), wk.push(void 0, null, !0, !1), lk = wk.length
    }
    var Ik = ik(2823),
      zk = ik(6459);
    class Qk extends Error {
      stage;
      constructor(kk, ek) {
        super((0, Ik.E)(kk, ek), {
          cause: ek
        }), this.name = "BloxdReplayWasmError", this.stage = kk
      }
    }
    let vk = null,
      Ek = null,
      hk = Promise.resolve(),
      ak = 0,
      Wk = null,
      tk = null;

    function Xk() {
      if (tk) return Promise.reject(tk);
      if (Ek) return Ek;
      const kk = ak,
        ek = hk,
        fk = (async () => {
          let fk;
          await ek, vk ??= (0, Ik.I)(new ik.U(ik(60877)), (0, zk.d)("bloxd_wasm_replay"));
          try {
            fk = await vk
          } catch (Sk) {
            throw vk = null, new Qk((0, Ik.N)(Sk), Sk)
          }
          if (kk !== ak) throw new Qk("instantiate", new Error("unloaded while loading"));
          try {
            await uk({
              module_or_path: fk
            })
          } catch (Sk) {
            throw qk(), new Qk("instantiate", Sk)
          }
          if (kk !== ak) throw qk(), new Qk("instantiate", new Error("unloaded while loading"));
          return Wk = Pk(), Dk
        })();
      return Ek = fk, hk = fk.catch((() => {})), fk.catch((() => {
        Ek === fk && (Ek = null)
      })), fk
    }

    function Bk() {
      tk || Zk()
    }

    function ck() {
      return Wk?.buffer.byteLength ?? 0
    }

    function Tk(kk) {
      return tk || (tk = new Qk("call", kk), Zk()), tk
    }

    function Zk() {
      ak++, qk(), Ek = null, Wk = null
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);