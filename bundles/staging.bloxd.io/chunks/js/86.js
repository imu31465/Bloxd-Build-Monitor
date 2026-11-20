export const id = 86;
export const ids = [86];
export const modules = {
  38401: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak,
      f: () => wk,
      j: () => dk,
      l: () => bk,
      n: () => Xk
    });
    const Rk = "A valid external Instance reference no longer exists.",
      tk = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ];
    const ak = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function Xk(kk, Fk) {
      return kk ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(kk) {
        var Fk;
        const Bk = null !== (Fk = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(kk)) && void 0 !== Fk ? Fk : /failed with ([A-Z][A-Z0-9_]+)/.exec(kk);
        return Bk ? Bk[1] : kk.includes(Rk) ? "gpu_process_lost" : "other"
      }(Fk)
    }

    function bk(kk) {
      return `${(null===kk||void 0===kk?void 0:kk.vendor)||"unknown vendor"} ${(null===kk||void 0===kk?void 0:kk.architecture)||"unknown architecture"}`
    }

    function wk(kk) {
      return sk(kk)[1]
    }

    function dk(kk) {
      return sk(kk)[2]
    }

    function sk(kk) {
      var Fk;
      return null !== (Fk = tk.find((Fk => {
        let [Bk] = Fk;
        return kk < Bk
      }))) && void 0 !== Fk ? Fk : tk[tk.length - 1]
    }
  },
  38708: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk,
      e: () => tk
    });
    const Rk = 45e3;
    class tk extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  36217: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Rk,
      e: () => tk,
      f: () => ak
    });
    const Rk = 1024,
      tk = 1024 * Rk;

    function ak(kk) {
      return (kk / tk).toFixed(1)
    }
  },
  36209: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => ak,
      e: () => bk,
      f: () => Xk,
      i: () => wk,
      l: () => dk
    });
    var Rk = Bk(182);
    const tk = 32 * Bk(36217).e,
      ak = 6144,
      Xk = 4608,
      bk = 512;

    function wk(kk) {
      return Math.floor(tk * kk / ak)
    }

    function dk(kk) {
      const Fk = kk - Math.floor(kk / 6);
      let Bk = Rk.h.maxChunkHorizAddDistance,
        tk = Rk.h.maxChunkVertAddDistance;
      if (sk(Bk + 1, tk + 1) <= Fk) return null;
      for (; sk(Bk + 1, tk + 1) > Fk && (Bk > 0 || tk > 0);) Bk > tk ? Bk-- : tk--;
      return {
        horizontal: Bk,
        vertical: tk
      }
    }

    function sk(kk, Fk) {
      const Bk = Math.max(kk, Fk);
      let Rk = 0;
      for (let tk = -Bk; tk <= Bk; tk++)
        for (let ak = -Bk; ak <= Bk; ak++)
          for (let Xk = -Bk; Xk <= Bk; Xk++) Vk(kk, Fk, tk, ak, Xk) && Rk++;
      return Rk
    }

    function Vk(kk, Fk, Bk, Rk, tk) {
      const ak = Bk * Bk + tk * tk;
      return kk === Fk ? ak + Rk * Rk <= kk * kk : kk > Fk ? Math.abs(Rk) <= Fk && ak + Rk * Rk <= kk * kk : ak <= kk * kk && ak + Rk * Rk <= Fk * Fk
    }
  },
  40280: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => tk,
      e: () => ak,
      f: () => bk,
      g: () => sk,
      j: () => wk,
      l: () => Xk
    });
    var Rk = Bk(182);
    const tk = 3e3,
      ak = 15e3;

    function Xk(kk) {
      const Fk = kk.endsWith(Rk.p);
      return {
        text: (Fk ? kk.slice(0, -Rk.p.length) : kk) || null,
        dropsCache: Fk
      }
    }
    const bk = "Either your internet isn't working or this is a bug.";

    function wk(kk, Fk) {
      const Bk = sk(kk);
      return null !== Bk.name && "" === Rk.e[Bk.name].text && null !== Fk ? Fk : Bk.reason
    }
    const dk = "You were removed from the game.";

    function sk(kk) {
      var Fk;
      let Bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const tk = null !== (Fk = Object.keys(Rk.e).find((Fk => Rk.e[Fk].code === kk))) && void 0 !== Fk ? Fk : null;
      if (null === tk) return {
        code: kk,
        name: tk,
        reason: null !== Bk && void 0 !== Bk ? Bk : `${bk}\nCode: ${kk}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: ak,
        canReconnect: Xk = !1
      } = Rk.e[tk], wk = kk === Rk.e.outdatedVersion.code || kk === Rk.e.loadRecaptchaError.code;
      return {
        code: kk,
        name: tk,
        reason: "" !== ak ? ak : null !== Bk && void 0 !== Bk ? Bk : kk === Rk.e.gameOrPluginKick.code ? dk : `Code: ${kk}`,
        canReconnect: Xk,
        automaticallyReconnect: kk === Rk.e.customGameUpdated.code || kk === Rk.e.duplicateLobbyNameError.code,
        requiresRefresh: wk
      }
    }
  },
  4524: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      A: () => Ik,
      Ab: () => Hk,
      B: () => Rk.g,
      Bc: () => Rk.Fb,
      C: () => dk,
      Cb: () => Rk.G,
      Cc: () => Rk.Jb,
      Eb: () => gk,
      Ec: () => Nk,
      G: () => Rk.h,
      Gc: () => Rk.Kb,
      Hb: () => Yk,
      I: () => Rk.i,
      Ib: () => XF,
      Jb: () => vk,
      K: () => lk,
      Kc: () => Rk.Lb,
      Lc: () => Rk.Rb,
      M: () => Rk.q,
      Nb: () => VF,
      Ob: () => tk.n,
      P: () => Rk.t,
      Pb: () => mk,
      Pc: () => ak,
      Qc: () => fk,
      Rb: () => RF,
      S: () => Rk.u,
      Sb: () => Rk.O,
      Sc: () => wF,
      T: () => Vk,
      Tc: () => Pk,
      Ub: () => Rk.R,
      Uc: () => qk,
      V: () => Wk,
      Wc: () => zk,
      Xc: () => pk,
      Yb: () => Rk.T,
      Z: () => Rk.y,
      Zb: () => Rk.X,
      _b: () => Rk.$,
      ab: () => Rk.z,
      bb: () => hk,
      cc: () => Rk.jb,
      db: () => aF,
      dc: () => eF,
      dd: () => Ck,
      e: () => FF,
      ec: () => sF,
      ed: () => xk,
      fd: () => Kk,
      g: () => yk,
      gb: () => sk,
      gd: () => bF,
      hb: () => Rk.A,
      hc: () => tF,
      hd: () => yF,
      i: () => ek,
      ib: () => Zk,
      ic: () => Rk.kb,
      jb: () => nk,
      jc: () => Rk.ob,
      jd: () => ik,
      k: () => dF,
      kd: () => jk,
      l: () => Sk,
      m: () => Ok,
      mb: () => kF,
      mc: () => Rk.pb,
      md: () => Tk,
      nc: () => Qk,
      o: () => Rk.d,
      ob: () => BF,
      od: () => Gk,
      p: () => JF,
      q: () => uk,
      qb: () => tk.g,
      qd: () => ck,
      rb: () => Ek,
      rc: () => Rk.tb,
      rd: () => wk,
      s: () => Xk,
      sc: () => Rk.vb,
      td: () => rk,
      u: () => Uk,
      ub: () => Dk,
      wb: () => Mk,
      wc: () => Rk.yb,
      wd: () => fF,
      xc: () => Rk.Db,
      xd: () => Ak,
      y: () => AF
    });
    var Rk = Bk(4531),
      tk = Bk(2303);
    const ak = Math.round(1e3 / Rk.Rb),
      Xk = 4,
      bk = 2;

    function wk() {
      return crypto.getRandomValues(new Uint32Array(bk))
    }
    const dk = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      sk = 16,
      Vk = {
        Draws: 1,
        NetAll: 2
      },
      Jk = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function Ak(kk) {
      return (kk.nametagsHidden ? Lk.NametagsHidden : 0) | (kk.crouchToggle ? Lk.CrouchToggle : 0) | (kk.bhopDisabled ? Lk.BhopDisabled : 0) | (kk.disableBobbing ? Lk.DisableBobbing : 0) | (kk.ezTowering ? Lk.EzTowering : 0) | (kk.ezBridging ? Lk.EzBridging : 0) | (kk.showChunkBorders ? Lk.ShowChunkBorders : 0)
    }
    const ek = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      yk = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      fk = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      mk = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      Wk = 5,
      vk = 4294967295;

    function ik(kk) {
      return (kk.showFog ? Jk.ShowFog : 0) | (kk.lighting ? Jk.Lighting : 0) | (kk.chunkFade ? Jk.ChunkFade : 0)
    }
    const Yk = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      Lk = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      Ok = {
        Release: 1,
        KeepTouches: 2
      },
      Ek = {
        Point: 1,
        Stamped: 2
      },
      Sk = {
        Add: 1,
        Clear: 2
      },
      Nk = 1,
      Hk = 8,
      uk = 16777215,
      Mk = 4,
      gk = {
        Resume: 1
      },
      Uk = {
        Held: 1
      };

    function ck(kk, Fk) {
      return (kk | Fk << 8) >>> 0
    }

    function Gk(kk) {
      return 255 & kk
    }

    function Tk(kk) {
      return kk >>> 8
    }

    function rk(kk) {
      return kk + 3 & -4
    }
    const Dk = 16777216,
      zk = 20;
    const Pk = 8,
      hk = 8,
      qk = 16777216,
      Ck = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      Zk = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      pk = 16,
      Kk = {
        Lost: 0,
        Gone: 1
      },
      xk = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function jk(kk) {
      return kk === xk.WorldgenSeed || kk === xk.Generate
    }
    const lk = 4,
      nk = 99,
      Ik = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      Qk = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      kF = 12,
      FF = 16,
      BF = 4,
      RF = 12,
      tF = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      aF = 4,
      XF = 8,
      bF = 8,
      wF = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      dF = {
        Crit: 1,
        HitSelf: 2
      },
      sF = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      VF = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      JF = 12,
      AF = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      eF = 67108864;

    function yF(kk) {
      for (const [Fk, Bk] of Object.entries(Rk.g))
        if (Bk === kk) return Fk;
      return `Unknown${kk}`
    }

    function fF(kk) {
      return {
        status: kk[Rk.z.Status],
        lastError: kk[Rk.z.LastError],
        lastErrorDetail: kk[Rk.z.LastErrorDetail],
        errorCount: kk[Rk.z.ErrorCount],
        frameIndex: kk[Rk.z.FrameIndex],
        tickIndex: kk[Rk.z.TickIndex],
        renderPending: kk[Rk.z.RenderPending],
        firstView: kk[Rk.z.FirstView],
        chunksCancelled: kk[Rk.z.ChunksCancelled]
      }
    }
  },
  40065: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Rk,
      f: () => Vk,
      h: () => bk,
      k: () => ak,
      n: () => tk,
      r: () => wk,
      t: () => sk
    });
    class Rk extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function tk(kk) {
      return kk instanceof RangeError && /call stack/i.test(kk.message) || kk instanceof Error && "InternalError" === kk.name && /recursion/i.test(kk.message)
    }

    function ak(kk) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(kk))
    }
    const Xk = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function bk(kk) {
      var Fk;
      return kk instanceof WebAssembly.RuntimeError || kk instanceof Rk || tk(kk) && Xk.test(null !== (Fk = kk.stack) && void 0 !== Fk ? Fk : "")
    }

    function wk(kk, Fk) {
      if (bk(kk)) throw kk;
      console.error(Fk, kk)
    }

    function dk(kk, Fk, Bk, tk, ak) {
      if (Fk % tk !== 0 || Fk + Bk > kk.byteLength) throw new Rk(`${ak}: ${Bk} bytes at ${Fk}, ${tk}-aligned, outside ${kk.byteLength} bytes of memory`)
    }

    function sk(kk, Fk, Bk, Rk, tk) {
      return 0 === Bk ? null : (dk(Fk, Bk, Rk * kk.BYTES_PER_ELEMENT, kk.BYTES_PER_ELEMENT, tk), new kk(Fk, Bk, Rk))
    }

    function Vk(kk, Fk, Bk, Rk, tk) {
      return 0 === Fk ? null : (dk(kk, Fk, Bk, Rk, tk), new DataView(kk, Fk, Bk))
    }
  },
  40421: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Rk
    });
    const Rk = {
      destroy_stage_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAK0lEQVQYlWP8//8/IwMewIRPknQFjIyM/wmaYGdn9w9FE7IjYSagiFHsCwCM7A/Ccc+NjAAAAABJRU5ErkJggg==",
      destroy_stage_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAQklEQVQYlYWPMQ4AIAgDOeO7+v9XWScMOGinpjmgYJt4aKQB/ASqKtwASeuGZxrbAEhyRJxe1JJ1debtRIZt6PfmBqYNG36KBWHbAAAAAElFTkSuQmCC",
      destroy_stage_2: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAARUlEQVQYlYWPwQnAMAwDdaVr2ftPVfWVIBJC9DI6LMvYRpIAjzn1rMaq9wQAbwnd/SWUJNkmb1eVkx07zPK5PaLTu37xA3+wH3UI6vmHAAAAAElFTkSuQmCC",
      destroy_stage_3: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAASUlEQVQYlW2PwQ3AMAjEfFXXYv+x3A+pSNqT+IBPMlEDkEQ6awdwMaJGzYTfVJUL4GydUFW5AbM5j2o+DrMEcE+g5dKzf/FrDjw47TfQdOS/BAAAAABJRU5ErkJggg==",
      destroy_stage_4: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAATklEQVQYlYWPsRHDQAzDQF/W4u8/lZEmn5PtwuwkETwqagCSyE97B3AwpEbNNH8A1lpn2wvwN824tqpp6yN2G+dRzaPDhLgPm56peXvzC7EqSTSAXQcxAAAAAElFTkSuQmCC",
      destroy_stage_5: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAATElEQVQYlW2PwREAMQgCIX1p/1Xd3idmNBN/iotowJJkG+2q2WkARwRD2LUkKTO/m44I7mWVyxDrxIsEvCqg7ZOhAyNx0d3Vrzc7+AM+lEvjLYgPSwAAAABJRU5ErkJggg==",
      destroy_stage_6: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAT0lEQVQYlW2PyQ2AQAwDx9tXtv+qGD4ERQt+RY7lI2oAksiD5gBWH1WlGjUtTuIC2HtfHHi5qvJ0mRxt27nzqWZ1VhJnuU/Js8u77m/mFNyVEDqzHRw/iwAAAABJRU5ErkJggg==",
      destroy_stage_7: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAJklEQVQYlWNgQAK2trb/GXABXJIsuCThYsiSMDZBq7AqoEw3Pp0AAAYX+aJ4oVQAAAAASUVORK5CYII=",
      destroy_stage_8: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAUUlEQVQYlV2PwQ3AMAwCoepazvDJXr1+apWEl40BYQHWh6pCAcACDLiq6DlFtySNMZ4kt6RcOiW5LdI2eZxzXmpBurPLVqjda60/Ob84uwB+AVXlTrnZ3+XVAAAAAElFTkSuQmCC",
      destroy_stage_9: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAUElEQVQYlW2OyQ3AMAgEhyhtQfF2X9m8IKvIvBDMHkgKSQGQmcJGUtBAZsr3hm6Aqnr4zUBOt4vfJh8gIuTPtdZFK1ztXUbtcXvvz/nU3F1eyBpW2eqlL9QAAAAASUVORK5CYII="
    }
  },
  40362: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => ek,
      e: () => yk,
      g: () => Jk,
      k: () => Vk
    });
    const Rk = 2e3,
      tk = "unavailable";
    let ak = () => Promise.resolve().then((() => Bk(3039))),
      Xk = null,
      bk = null,
      wk = dk();

    function dk() {
      let kk = () => {};
      return {
        promise: new Promise((Fk => {
          kk = () => {
            Fk(null)
          }
        })),
        resolve: kk
      }
    }

    function sk() {
      if (null === Xk) {
        const kk = ak();
        Xk = kk, kk.then((Fk => {
          Xk === kk && (bk = Fk)
        }), (() => {
          Xk === kk && (Xk = null)
        }))
      }
      return Xk
    }

    function Vk() {
      sk().catch((() => {}))
    }

    function Jk() {
      wk.resolve()
    }

    function Ak(kk, Fk, Bk, Rk) {
      if (null === kk) return {
        errorKind: Fk,
        fingerprint: tk,
        dedupe: `${Fk}|${Rk}`
      };
      const {
        fingerprint: ak
      } = kk.clientErrorKey(Fk, Bk, Rk);
      return {
        errorKind: Fk,
        fingerprint: ak,
        dedupe: ak
      }
    }

    function ek(kk, Fk, Bk, Rk) {
      return null === bk ? Rk ? (Vk(), Ak(null, kk, Fk, Bk)) : null : Ak(bk, kk, Fk, Bk)
    }
    async function yk(kk, Fk, Bk) {
      let tk;
      const ak = new Promise((kk => {
        tk = setTimeout((() => {
          kk(null)
        }), Rk)
      }));
      try {
        return Ak(await Promise.race([sk(), ak, wk.promise]), kk, Fk, Bk)
      } catch {
        return Ak(null, kk, Fk, Bk)
      } finally {
        clearTimeout(tk)
      }
    }
  },
  40355: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      BUILT_IN_ANIMATIONS_SITE: () => pk,
      CORE_ERRORS_SITE: () => Gk,
      EVENT_OVERFLOW_SITE: () => Zk,
      FIRST_VIEW_SITE: () => xk,
      JOIN_SITE: () => rk,
      LEAVE_SITE: () => Dk,
      MODEL_FEED_SITE: () => zk,
      MODEL_POOL_SITE: () => Pk,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => lk,
      NON_FATAL_REPORTS_PER_SESSION: () => VF,
      PREVIEW_ANIMATIONS_SITE: () => Ck,
      RENDER_RELOAD_SITE: () => qk,
      TEXTURE_NAMES_SITE: () => hk,
      TEXTURE_PACK_FEED_SITE: () => Kk,
      TurnstilePageError: () => zF,
      WASM_LOAD_SITE: () => Tk,
      crashError: () => fF,
      crashReportsSettled: () => oF,
      flushCrashReports: () => iF,
      joinFailureCode: () => PF,
      lokiTransport: () => Qk,
      modelFailureCode: () => xF,
      readTrap: () => EF,
      renderLossDetail: () => JB,
      renderReloadMessage: () => sB,
      reportCoreErrors: () => OF,
      reportCountedLoadFallback: () => rF,
      reportCrash: () => mF,
      reportDataLoadFailure: () => mB,
      reportDisconnect: () => pF,
      reportDracoDecoderFailure: () => IF,
      reportEventOverflow: () => FB,
      reportFirstViewNoTerrain: () => XB,
      reportGpuFallback: () => GF,
      reportGpuWasmPopulation: () => TF,
      reportLightFault: () => RB,
      reportMemoryShed: () => aB,
      reportModelFailure: () => jF,
      reportModelPoolFailure: () => lF,
      reportModelsModuleRetry: () => nF,
      reportPageJoinFailure: () => qF,
      reportReconnectGaveUp: () => KF,
      reportRenderReload: () => eB,
      reportReplayFault: () => wB,
      reportStaleBuildReload: () => vB,
      reportStoppedCore: () => uF,
      reportTerrainTextureFailure: () => yB,
      reportTexturePackFeedLoadFailure: () => kB,
      reportUnstreamedCoreLoad: () => DF,
      reportUnsupportedFallback: () => UF,
      reportUnusedSeat: () => ZF,
      reportWorkerLost: () => BB,
      reportWorkerStartTimeout: () => bB,
      reportWorldgenGaveUp: () => tB,
      reportWorldgenLoadFailure: () => QF,
      resetCrashReports: () => LF,
      setCrashBackend: () => XF,
      setCrashScreen: () => tF,
      setCrashTransport: () => BF,
      showCrash: () => HF,
      showJoinFailure: () => hF,
      showUnsupported: () => gF
    });
    var Rk = Bk(1047),
      tk = Bk(252),
      ak = Bk(3044),
      Xk = Bk(40362),
      bk = Bk(4524),
      wk = Bk(40364),
      dk = Bk(3272),
      sk = Bk(38401),
      Vk = Bk(132),
      Jk = Bk(670),
      Ak = Bk(130),
      ek = Bk(3276),
      yk = Bk(38708),
      fk = Bk(1698),
      mk = Bk(40330),
      Wk = Bk(40015),
      vk = Bk(40284),
      ik = Bk(40288),
      Yk = Bk(40370),
      Lk = Bk(3502),
      Ok = Bk(3506),
      Ek = Bk(40379),
      Sk = Bk(40401),
      Nk = Bk(40407),
      Hk = Bk(36522),
      uk = Bk(3052),
      Mk = Bk(36011),
      gk = Bk(40200),
      Uk = Bk(36019);
    const ck = "[bloxd-wasm-client]",
      Gk = "coreErrors",
      Tk = "wasmLoad",
      rk = "join",
      Dk = "leave",
      zk = "modelFeed",
      Pk = "modelWorkerPool",
      hk = "textureNames",
      qk = "renderReload",
      Ck = "previewAnimations",
      Zk = "eventOverflow",
      pk = "builtInAnimations",
      Kk = "texturePackFeed",
      xk = "firstView",
      jk = 300,
      lk = 8;
    let nk = 0;
    const Ik = new Set,
      Qk = (kk, Fk) => {
        const Bk = bF[kk.kind];
        if (null === Bk) return void kF(kk, Fk, aF, null);
        const Rk = (0, Xk.d)(Bk, kk.message, kk.code, kk.fatal);
        if (null !== Rk) return void kF(kk, Fk, aF, Rk);
        const tk = aF;
        vF("Loki", (async () => {
          kF(kk, Fk, tk, await (0, Xk.e)(Bk, kk.message, kk.code))
        }))
      };

    function kF(kk, Fk, Bk, tk) {
      const {
        kind: Xk,
        code: bk,
        site: wk,
        fatal: dk,
        details: sk
      } = kk;
      if (!dk)
        if (null === tk || (0, ak.b)(tk.errorKind) || Ik.has(tk.dedupe)) {
          if (nk >= lk) return;
          nk++
        } else Ik.add(tk.dedupe);
      const Vk = {
        ...sk,
        kind: Xk,
        code: bk,
        site: wk,
        fatal: String(dk),
        backend: Bk
      };
      null !== tk && (Vk.errorKind = tk.errorKind, Vk.fingerprint = tk.fingerprint), Fk instanceof Error && "string" === typeof Fk.stack && (Vk.causeStack = Fk.stack.slice(0, 2e3)), (0, Rk.ly)(fF(kk, Fk), Vk)
    }
    let FF = Qk;

    function BF(kk) {
      const Fk = FF;
      return FF = kk, Fk
    }
    let RF = () => {};

    function tF(kk) {
      const Fk = RF;
      return RF = kk, Fk
    }
    let aF = "unpicked";

    function XF(kk) {
      aF = kk
    }
    const bF = {
        crash: "wasm_load",
        unsupported: "wasm_load",
        model: "wasm_load",
        join: "matchmake_failed",
        pageJoin: null,
        unsupportedFallback: "wasm_load",
        gpuFallback: null,
        coreError: null,
        meshHeap: null,
        recovered: null,
        unstreamedLoad: null,
        modelLate: null,
        worldgenLoad: null,
        texturePackLoad: null,
        terrainTexture: null,
        previewAnimations: null,
        builtInAnimations: null,
        seat: null,
        noTerrain: null,
        staleBuild: "wasm_load",
        disconnect: "disconnect"
      },
      wF = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        gpuFallback: "wasm_load"
      },
      dF = new Set(["unstreamedLoad"]);
    let sF = !1;
    const VF = 20,
      JF = new Map;
    let AF = 0,
      eF = 0;
    const yF = new Set;

    function fF(kk, Fk) {
      const Bk = Object.assign(new Error(`${kk.code}: ${kk.message}`), {
        name: "WasmClientCrash",
        cause: null !== Fk && void 0 !== Fk ? Fk : void 0
      });
      return Fk instanceof Error && Fk.stack && (Bk.stack = Fk.stack), Bk
    }

    function mF(kk) {
      var Fk, Rk;
      const {
        kind: tk,
        code: ak,
        site: Xk,
        fatal: bk,
        message: wk,
        error: dk
      } = kk, sk = !1 !== kk.toTransport && !dF.has(tk), Vk = !bk && sk, Jk = {
        kind: tk,
        code: ak,
        site: Xk,
        fatal: bk,
        message: wk,
        details: null !== (Fk = kk.details) && void 0 !== Fk ? Fk : {}
      }, Ak = `${ak}@${Xk}${void 0===kk.instance?"":`#${kk.instance}`}${bk?"!":""}`, ek = (null !== (Rk = JF.get(Ak)) && void 0 !== Rk ? Rk : 0) + 1;
      if (JF.set(Ak, ek), ek > 1 ? 0 === (ek & ek - 1) && WF((() => {
          console.warn(`${ck} ${ak} at ${Xk} reported ${ek} times`)
        })) : Vk && AF >= VF ? WF((() => {
          console.warn(`${ck} ${tk} ${ak} at ${Xk}: ${wk} (not sent: the session's ${VF} went)`, Jk.details, null !== dk && void 0 !== dk ? dk : "")
        })) : (Vk && AF++, function(kk, Fk, Rk) {
          var tk, ak;
          const {
            kind: Xk,
            code: bk,
            site: wk,
            fatal: dk,
            message: sk,
            details: Vk
          } = kk;
          WF((() => {
            (dk ? console.error : console.warn)(`${ck} ${Xk} ${bk} at ${wk}: ${sk}`, Vk, null !== Fk && void 0 !== Fk ? Fk : "")
          }));
          const Jk = wF[Xk],
            Ak = null !== (tk = null !== (ak = bF[Xk]) && void 0 !== ak ? ak : Jk) && void 0 !== tk ? tk : null;
          null !== Ak && vF("counts", (async () => {
            const {
              peekVisitSessionId: kk
            } = await Promise.resolve().then((() => Bk(633)));
            if (null !== kk()) {
              const {
                reportCappedWasmFailure: kk,
                reportWasmFailure: Fk
              } = await Bk.e(207).then((() => Bk(36003)));
              (void 0 === Jk ? Fk : kk)(Ak, sk, bk), sF = !0
            }
          }));
          Rk && WF((() => {
            FF(kk, Fk)
          }))
        }(Jk, dk, sk)), bk) {
        var yk;
        const Fk = null !== (yk = kk.screen) && void 0 !== yk ? yk : {
          text: (0, Hk.f)(Jk, !0),
          reload: !0
        };
        WF((() => {
          RF(Fk)
        }))
      }
      return Jk
    }

    function WF(kk) {
      try {
        kk()
      } catch (Fk) {
        try {
          console.warn(`${ck} could not send a report`, Fk)
        } catch {}
      }
    }

    function vF(kk, Fk) {
      try {
        const Bk = Fk().catch((Fk => {
          console.warn(`${ck} could not send the report to ${kk}`, Fk)
        })).finally((() => {
          yF.delete(Bk)
        }));
        yF.add(Bk)
      } catch (Bk) {
        console.warn(`${ck} could not send the report to ${kk}`, Bk)
      }
    }
    async function iF(kk) {
      let Fk;
      (0, Xk.g)();
      const Bk = new Promise((Bk => {
        Fk = setTimeout(Bk, kk)
      }));
      await Promise.race([YF(), Bk]), clearTimeout(Fk)
    }
    async function YF() {
      if (await Promise.allSettled([...yF]), sF) try {
        const {
          flushClientAnalyticsEvents: kk
        } = await Promise.resolve().then((() => Bk(1437)));
        await kk()
      } catch (kk) {
        console.warn(`${ck} could not send the counts`, kk)
      }
    }
    async function oF() {
      for (; yF.size > 0;) await Promise.allSettled([...yF])
    }

    function LF() {
      JF.clear(), AF = 0, sF = !1, nk = 0, Ik.clear(), eF = 0, (0, wk.l)()
    }

    function OF(kk, Fk, Bk, Rk) {
      eF += Fk;
      for (const {
          code: Xk,
          detail: dk
        }
        of kk) {
        var tk, ak;
        const kk = (0, bk.hd)(Xk),
          Fk = (0, wk.e)(Xk, dk),
          sk = null === Rk || void 0 === Rk ? void 0 : Rk(Xk, dk),
          Vk = void 0 !== (null === Fk || void 0 === Fk ? void 0 : Fk.gpuDetails),
          Jk = Vk ? null === (tk = (0, Ak.o)()) || void 0 === tk ? void 0 : tk.renderer : void 0,
          ek = Vk ? ` ${(0,wk.h)()}` : "",
          yk = Array.from([Jk && `gpu ${(0,wk.m)(Jk)}`, sk].filter(Boolean).join("; ")).slice(0, jk).join(""),
          fk = `core error ${kk}${null!==(ak=null===Fk||void 0===Fk?void 0:Fk.words)&&void 0!==ak?ak:""}${ek}${yk?`: ${yk}`:""}`,
          mk = {
            errorCode: String(Xk),
            detail: String(dk),
            droppedBefore: String(eF),
            wasmBuild: Bk.wasm,
            clientVersion: Bk.client,
            ...null === Fk || void 0 === Fk ? void 0 : Fk.gpuDetails
          };
        null !== Fk && (0, wk.k)(Fk) ? WF((() => {
          console.warn(`${ck} coreError CORE-${kk}: ${fk} (not sent: the session's render warnings of its kind went)`, mk)
        })) : mF({
          kind: Xk === bk.B.JobsHeapGaveUp ? "meshHeap" : "coreError",
          code: `CORE-${kk}`,
          site: Gk,
          fatal: !1,
          message: fk,
          details: mk,
          instance: null === Fk || void 0 === Fk ? void 0 : Fk.instance
        })
      }
    }

    function EF(kk) {
      return (0, Mk.j)(kk instanceof gk.d ? kk.trap : kk, Lk.C, Lk.Z)
    }
    const SF = "declined=js";

    function NF(kk) {
      return kk ? {
        labels: [SF],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function HF(kk, Fk, Bk) {
      return MF(kk, Fk, Bk, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function uF(kk, Fk, Bk) {
      return MF(kk, Fk, Bk, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function MF(kk, Fk, Bk, Rk, tk) {
      let {
        memoryDetails: ak = {},
        declined: Xk = !1
      } = Rk;
      const {
        code: bk,
        details: wk,
        message: dk
      } = (0, mk.H)(kk, Fk), sk = [];
      null !== Bk && (wk.trapKind = Bk.kind, null !== Bk.panic && (wk.panic = (0, Mk.g)(Bk.panic)), Bk.refusedBytes > 0 && (wk.refusedAllocation = String(Bk.refusedBytes)), sk.push((0, Mk.n)(Bk.kind, Bk.refusedBytes)));
      const Vk = NF(Xk);
      return mF({
        kind: "crash",
        code: bk,
        site: kk.site,
        fatal: tk,
        message: [...sk, ...Vk.labels, dk].join("; "),
        details: {
          ...wk,
          ...Vk.details,
          ...ak
        },
        error: kk.error
      })
    }

    function gF(kk, Fk, Bk) {
      return mF({
        kind: "unsupported",
        code: Fk,
        site: Tk,
        fatal: !0,
        message: Bk,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: kk,
          status: Fk
        },
        screen: {
          text: (0, Hk.s)(kk),
          reload: "download" === kk
        }
      })
    }

    function UF(kk, Fk, Bk) {
      return mF({
        kind: "unsupportedFallback",
        code: "blockedAfterLoss" === Fk ? "blocked_after_loss" : "unsupported_js_fallback",
        site: Tk,
        fatal: !1,
        message: Bk,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: kk,
          status: "unsupported",
          decline: Fk,
          fallback: "js"
        }
      })
    }
    const cF = "misdrawn_gpu_js_fallback";

    function GF(kk, Fk) {
      return mF({
        kind: "gpuFallback",
        code: cF,
        site: Tk,
        fatal: !1,
        message: `the renderer plays ${kk} on ${Fk} worse than the JS client`,
        details: {
          gpuFamily: kk,
          backend: Fk,
          fallback: "js"
        }
      })
    }

    function TF(kk) {
      vF("counts", (async () => {
        await (0, Jk.b)(kk), sF = !0
      }))
    }

    function rF(kk, Fk, Bk, Rk) {
      const tk = NF(Rk);
      return mF({
        kind: "unsupported",
        code: Fk,
        site: Tk,
        fatal: !1,
        message: [...tk.labels, Bk].join("; "),
        details: {
          cause: kk,
          status: Fk,
          fallback: "js",
          ...tk.details
        }
      })
    }

    function DF() {
      const {
        code: kk,
        message: Fk
      } = uk.b;
      return mF({
        kind: "unstreamedLoad",
        code: kk,
        site: Tk,
        fatal: !1,
        message: Fk
      })
    }
    class zF extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function PF(kk) {
      return kk instanceof vk.n ? 0 === kk.code ? "JOIN-matchmake" : `JOIN-${kk.code}` : kk instanceof vk.e ? 0 === kk.code ? `JOIN-${kk.stage}` : `JOIN-${kk.stage}-${kk.code}` : kk instanceof Wk.c ? "JOIN-gameCode" : kk instanceof zF ? "JOIN-turnstilePage" : kk instanceof vk.y ? "JOIN-trafficCheck" : kk instanceof yk.e ? "JOIN-timeout" : "JOIN-network"
    }

    function hF(kk, Fk) {
      const Bk = (0, Uk.j)(kk),
        Rk = {
          wasmBuild: Fk.wasm,
          clientVersion: Fk.client
        },
        tk = kk instanceof zF ? {
          text: (0, Hk.l)(),
          reload: !1
        } : void 0,
        ak = (0, ik.h)(kk),
        Xk = "expected" !== ak;
      return mF({
        kind: "join",
        code: PF(kk),
        site: rk,
        fatal: !0,
        message: Bk,
        details: Rk,
        error: kk,
        screen: tk,
        toTransport: Xk,
        instance: ak
      })
    }

    function qF(kk, Fk, Bk) {
      var Rk;
      const tk = (0, ik.h)(kk),
        ak = {
          cause: (kk instanceof vk.e || kk instanceof vk.n) && null !== (Rk = kk.serverText) && void 0 !== Rk ? Rk : "",
          sinceJoinStart: (0, ek.d)(Bk.sinceJoinStartMs),
          game: Bk.game,
          ...(0, ek.l)(),
          wasmBuild: Fk.wasm,
          clientVersion: Fk.client
        };
      return mF({
        kind: "pageJoin",
        code: PF(kk),
        site: rk,
        fatal: !1,
        message: (0, Uk.j)(kk),
        details: ak,
        error: kk,
        toTransport: "unrecognised" === tk,
        instance: tk
      })
    }
    const CF = {
      renewed: {
        code: "CORE-seatRenewed",
        message: "the early seat outlasted the room's hold, so the join reserved another"
      },
      lost: {
        code: "CORE-seatAbandoned",
        message: "the early seat's request failed before the join, so the join reserved another"
      },
      rematched: {
        code: "CORE-seatAbandoned",
        message: "the early seat was for a place matchmaking replaced"
      },
      abandoned: {
        code: "CORE-seatAbandoned",
        message: "the early seat was abandoned by a leave or a failed boot or join"
      }
    };

    function ZF(kk, Fk) {
      let {
        unused: Bk,
        answered: Rk,
        heldMs: tk
      } = kk;
      const {
        code: ak,
        message: Xk
      } = CF[Bk], bk = {
        unused: Bk,
        answered: String(Rk),
        heldMs: String(tk),
        wasmBuild: Fk.wasm,
        clientVersion: Fk.client
      };
      return mF({
        kind: "seat",
        code: ak,
        site: rk,
        fatal: !1,
        message: Xk,
        details: bk
      })
    }

    function pF(kk, Fk, Bk) {
      var Rk;
      let tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (Rk = kk.name) && void 0 !== Rk ? Rk : String(kk.code);
      const ak = {
          closeCode: String(kk.code),
          recognised: String(null !== kk.name),
          closeReason: Bk.closeReason,
          sinceJoined: (0, ek.d)(Bk.sinceJoinedMs),
          game: Bk.game,
          ...(0, ek.l)(),
          wasmBuild: Fk.wasm,
          clientVersion: Fk.client
        },
        Xk = null === kk.name && !(0, ek.h)(kk.code);
      return mF({
        kind: "disconnect",
        code: tk,
        site: Dk,
        fatal: !1,
        message: "Left room",
        details: ak,
        toTransport: Xk
      })
    }

    function KF(kk, Fk) {
      const Bk = {
        ...(0, dk.k)(kk),
        wasmBuild: Fk.wasm,
        clientVersion: Fk.client
      };
      return mF({
        kind: "disconnect",
        code: `reconnect-${kk.reason}`,
        site: rk,
        fatal: !1,
        message: "Reconnect failed",
        details: Bk
      })
    }

    function xF(kk) {
      return kk.error instanceof Ok.g ? `MODEL-${kk.error.status}` : kk.error instanceof Ek.k ? "MODEL-ring" : "MODEL-network"
    }

    function jF(kk, Fk) {
      const Bk = xF(kk),
        Rk = `model file ${kk.file} ${kk.startup?"(startup) ":""}could not load`,
        tk = {
          file: String(kk.file),
          url: kk.url,
          wasmBuild: Fk.wasm,
          clientVersion: Fk.client
        };
      return mF({
        kind: kk.startup ? "model" : "modelLate",
        code: Bk,
        site: zk,
        fatal: kk.startup,
        message: Rk,
        details: tk,
        error: kk.error
      })
    }

    function lF(kk, Fk) {
      const Bk = {
        wasmBuild: Fk.wasm,
        clientVersion: Fk.client
      };
      return mF({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: Pk,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: Bk,
        error: kk
      })
    }

    function nF(kk, Fk, Bk) {
      const Rk = {
        delayMs: String(Fk),
        wasmBuild: Bk.wasm,
        clientVersion: Bk.client
      };
      kk instanceof Ok.g && (Rk.status = String(kk.status));
      return mF({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: Pk,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: Rk,
        error: kk
      })
    }

    function IF(kk, Fk) {
      const Bk = {
        wasmBuild: Fk.wasm,
        clientVersion: Fk.client
      };
      return mF({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: Pk,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: Bk,
        error: kk
      })
    }

    function QF(kk, Fk) {
      const Bk = {
        wasmBuild: Fk.wasm,
        clientVersion: Fk.client
      };
      return mF({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: mk.C,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: Bk,
        error: kk
      })
    }

    function kB(kk, Fk) {
      const Bk = {
        wasmBuild: Fk.wasm,
        clientVersion: Fk.client
      };
      return mF({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: Kk,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: Bk,
        error: kk
      })
    }

    function FB(kk, Fk) {
      const {
        frames: Bk,
        acks: Rk,
        mask: tk,
        outcome: ak
      } = kk, Xk = {
        frames: String(Bk),
        acks: String(Rk),
        mask: String(tk),
        outcome: null !== ak && void 0 !== ak ? ak : "resynced",
        wasmBuild: Fk.wasm,
        clientVersion: Fk.client
      };
      return mF({
        kind: "recovered",
        code: "rejoined" === ak ? "CORE-eventOverflowRejoin" : "failed" === ak ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: Zk,
        fatal: !1,
        message: `the event buffer refused records in ${Bk} frames`,
        details: Xk
      })
    }

    function BB(kk, Fk, Bk) {
      return mF({
        kind: "recovered",
        code: "CORE-workerLost",
        site: kk,
        fatal: !1,
        message: `a ${kk} worker was lost`,
        details: {
          reason: Fk,
          wasmBuild: Bk.wasm,
          clientVersion: Bk.client
        }
      })
    }

    function RB(kk, Fk, Bk) {
      const Rk = {
        wasmBuild: Bk.wasm,
        clientVersion: Bk.client
      };
      return mF({
        kind: "recovered",
        code: kk,
        site: mk.m,
        fatal: !1,
        message: Fk,
        details: Rk
      })
    }

    function tB(kk, Fk) {
      const Bk = {
        lastReason: kk,
        wasmBuild: Fk.wasm,
        clientVersion: Fk.client
      };
      return mF({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: mk.C,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: Bk
      })
    }

    function aB(kk, Fk, Bk) {
      return mF({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: mk.k,
        fatal: !1,
        message: (0, Yk.i)(kk) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: kk,
          ...Fk,
          wasmBuild: Bk.wasm,
          clientVersion: Bk.client
        }
      })
    }

    function XB(kk, Fk) {
      const Bk = (0, wk.j)(),
        Rk = {
          game: kk,
          renderWarned: String(Bk),
          browser: (0, wk.h)(),
          wasmBuild: Fk.wasm,
          clientVersion: Fk.client
        },
        tk = `first view drew no whole terrain in ${Sk.g/1e3} s${Bk?", render warned":""}`;
      return mF({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: xk,
        fatal: !1,
        message: tk,
        details: Rk
      })
    }

    function bB(kk, Fk, Bk) {
      return mF({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: kk,
        fatal: !1,
        message: `a ${kk} worker did not start`,
        details: {
          waitedMs: String(Math.round(Fk)),
          wasmBuild: Bk.wasm,
          clientVersion: Bk.client
        }
      })
    }

    function wB(kk, Fk, Bk) {
      return mF({
        kind: "recovered",
        code: "CORE-replayFault",
        site: kk,
        fatal: !1,
        message: `the replay's ${kk} failed`,
        details: {
          wasmBuild: Bk.wasm,
          clientVersion: Bk.client
        },
        error: Fk
      })
    }
    const dB = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function sB(kk, Fk, Bk) {
      const Rk = "lost" === Fk && void 0 !== Bk ? ` (${Bk})` : "";
      return `the ${kk} ${dB[Fk]}${Rk}`
    }
    const VB = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };

    function JB(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now();
      const tk = null === Bk.boundAtMs ? "unbound" : `up${(0,sk.f)(Rk-Bk.boundAtMs)}`,
        ak = null === Bk.adapter ? "no adapter" : (0, sk.l)(Bk.adapter),
        Xk = `${(0,fk.j)()?"hidden":"visible"} ${tk} ${ak}${!0===Bk.indirectHangs?" ih":""}`;
      if ("pipeline_failed" === kk) return `${kk} ${Xk}`;
      const bk = null === Fk || void 0 === Fk ? void 0 : Fk.message;
      return `${Fk instanceof fk.h?"timeout":(0,sk.n)("frames_refused"===kk,"string"===typeof bk?bk:"")} ${Xk}`
    }
    const AB = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function eB(kk, Fk, Rk) {
      var ak, Xk, bk, dk, Jk;
      let {
        cause: Ak = "lost",
        error: ek,
        context: yk = VB,
        session: fk = AB
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const mk = JB(Ak, ek, yk),
        Wk = {
          losses: String(Fk),
          cause: Ak,
          detail: mk,
          vendor: null !== (ak = null === (Xk = yk.adapter) || void 0 === Xk ? void 0 : Xk.vendor) && void 0 !== ak ? ak : "",
          architecture: null !== (bk = null === (dk = yk.adapter) || void 0 === dk ? void 0 : dk.architecture) && void 0 !== bk ? bk : "",
          indirectHangs: String(yk.indirectHangs),
          samples: String(fk.samples),
          sunShadows: String(fk.sunShadows),
          renderDistance: String(fk.renderDistance),
          gpuFamily: null !== (Jk = (0, tk.c)()) && void 0 !== Jk ? Jk : "",
          browser: (0, wk.h)(),
          siteUsed: Vk.q,
          wasmBuild: Rk.wasm,
          clientVersion: Rk.client
        },
        vk = sB(kk, Ak),
        ik = mF({
          kind: "recovered",
          code: "CORE-renderLost",
          site: qk,
          fatal: !1,
          message: vk,
          details: Wk,
          error: ek
        });
      return vF("ga", (async () => {
        const {
          logError: Fk
        } = await Promise.resolve().then((() => Bk(2728))), Rk = `${sk.c["webgpu"===kk?"WebGPU":"WebGL2"]}\n Error: ${mk}`;
        Fk("warning", Rk), Fk("error", Rk)
      })), ik
    }

    function yB(kk, Fk) {
      var Bk, Rk;
      const tk = null === kk.name ? "TEXTURE-sources" : null === kk.url ? "TEXTURE-nourl" : kk.error instanceof Nk.d ? `TEXTURE-${kk.error.status}` : "TEXTURE-network",
        ak = null === kk.name ? "terrain textures could not load" : `terrain texture ${kk.name} could not load`,
        Xk = {
          texture: null !== (Bk = kk.name) && void 0 !== Bk ? Bk : "",
          url: null !== (Rk = kk.url) && void 0 !== Rk ? Rk : "",
          wasmBuild: Fk.wasm,
          clientVersion: Fk.client
        };
      return mF({
        kind: "terrainTexture",
        code: tk,
        site: mk.y,
        fatal: !1,
        message: ak,
        details: Xk,
        error: kk.error
      })
    }
    const fB = {
      previewAnimations: {
        site: Ck,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: pk,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function mB(kk, Fk, Bk, Rk) {
      const {
        site: tk,
        prefix: ak,
        name: Xk
      } = fB[kk], {
        stage: bk,
        error: wk
      } = Bk;
      return mF({
        kind: kk,
        code: "decode" === bk ? null === wk ? `${ak}-decode` : `${ak}-trap` : wk instanceof Ok.g ? `${ak}-${wk.status}` : `${ak}-network`,
        site: tk,
        fatal: !1,
        message: "decode" === bk ? `${Xk} did not decode` : `${Xk} could not load`,
        details: {
          url: Fk,
          wasmBuild: Rk.wasm,
          clientVersion: Rk.client
        },
        error: wk
      })
    }
    const WB = "staleBuild";

    function vB(kk, Fk, Bk) {
      const Rk = {
          failedSite: kk.site,
          url: kk.url,
          from: kk.from,
          sameBuild: String(kk.from === Fk),
          reloadMs: String(Math.max(0, Date.now() - kk.at)),
          wasmBuild: Bk.wasm,
          clientVersion: Bk.client
        },
        tk = `reloaded into a newer build after ${kk.site} failed to load: ${kk.error}`;
      return mF({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: WB,
        fatal: !1,
        message: tk,
        details: Rk
      })
    }
  },
  40401: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk,
      g: () => Rk
    });
    const Rk = 3e4;
    class tk {
      constructor(kk) {
        this.ve = kk, this.waitedMs = 0, this.lastMs = null
      }
      frame(kk, Fk) {
        if (Fk) return !0;
        const Bk = null === this.lastMs ? 0 : kk - this.lastMs;
        return this.lastMs = kk, Bk <= 900 && (this.waitedMs += Bk), !(this.waitedMs < Rk) && (this.ve(), !0)
      }
    }
  },
  4517: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Xk,
      g: () => ak,
      i: () => tk
    });
    var Rk = Bk(4524);

    function tk(kk) {
      return "none" !== kk
    }

    function ak(kk, Fk) {
      if (!kk) return "none";
      switch (Fk) {
        case Rk.S.Drawn:
          return "drawn";
        case Rk.S.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function Xk(kk) {
      return "drawn" === kk
    }
  },
  40015: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Rk,
      d: () => mk,
      g: () => yk,
      h: () => fk,
      k: () => Jk,
      l: () => Ak,
      n: () => sk,
      o: () => Vk,
      r: () => ek
    });
    class Rk extends Error {
      constructor(kk) {
        super(`the join's code did not load: ${kk instanceof Error?kk.message:String(kk)}`, {
          cause: kk
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === kk || void 0 === kk ? void 0 : kk.request
      }
    }
    let tk = null,
      ak = null,
      Xk = null;
    const bk = [];
    let wk = null;

    function dk(kk, Fk) {
      try {
        kk(Fk)
      } catch (Bk) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", Bk)
      }
    }

    function sk() {
      return wk
    }

    function Vk(kk) {
      bk.push(kk), null !== wk && dk(kk, wk)
    }

    function Jk(kk) {
      return tk ??= Promise.all([Bk.e(69), Bk.e(94), Bk.e(214), Bk.e(74), Bk.e(215), Bk.e(189), Bk.e(93), Bk.e(259), Bk.e(187), Bk.e(262), Bk.e(199), Bk.e(186), Bk.e(200), Bk.e(136), Bk.e(85), Bk.e(114), Bk.e(237), Bk.e(53)]).then((() => Bk(41991))).then((Fk => {
        Fk.loadAudio(kk), wk = Fk;
        for (const kk of bk) dk(kk, Fk);
        return Fk
      })).catch((kk => {
        throw tk = null, kk
      })), tk
    }
    async function Ak(kk, Fk) {
      try {
        const Bk = await Jk(kk);
        await Bk.loadClientGame(Fk)
      } catch (Bk) {
        throw new Rk(Bk)
      }
    }

    function ek(kk, Fk) {
      ak = {
        running: kk,
        shell: Fk
      }
    }

    function yk() {
      return Xk
    }
    async function fk(kk) {
      const Fk = ak;
      if ((null === Fk || void 0 === Fk ? void 0 : Fk.running) !== kk) throw new Error("the core's session has ended");
      const Bk = await Jk(Fk.shell.audio).catch((kk => {
        throw new Rk(kk)
      }));
      if (null !== Xk) return Xk;
      if (ak !== Fk || kk.isStopped) throw new Error("the core stopped while the game code loaded");
      if (Xk = Bk.startGameHost(kk, Fk.shell), null === Xk) throw new Error("the core's shared tables didn't read, so the game can't start");
      return Xk
    }

    function mk() {
      null !== Xk && (null !== wk ? wk.endGameHost(Xk) : Xk.closeGame()), Xk = null, ak = null
    }
  },
  40284: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => dk,
      i: () => ak,
      j: () => Xk,
      k: () => tk,
      n: () => Ak,
      r: () => sk,
      t: () => wk,
      u: () => Jk,
      y: () => Vk,
      z: () => bk
    });
    var Rk = Bk(1705);
    const tk = new Uint8Array([12]),
      ak = 2e3,
      Xk = 257;

    function bk(kk) {
      const Fk = new Uint8Array(4);
      return new DataView(Fk.buffer).setUint32(0, kk, !0), Fk
    }
    class wk extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class dk extends Error {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(kk), this.stage = Fk, this.code = Bk, this.serverText = Rk, this.name = "JoinError"
      }
    }
    class sk extends Error {
      constructor(kk) {
        super(kk), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class Vk extends Error {
      constructor(kk) {
        super((0, Rk.g)(kk), {
          cause: kk
        }), this.name = "TrafficCheckError"
      }
    }
    class Jk extends Error {
      constructor(kk, Fk, Bk) {
        super(kk, {
          cause: Bk
        }), this.networkLost = Fk, this.name = "SeatRequestError"
      }
    }
    class Ak extends Error {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(kk), this.code = Fk, this.serverText = Bk, this.name = "MatchmakeError"
      }
    }
  },
  40288: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Jk,
      h: () => Vk
    });
    var Rk = Bk(2466),
      tk = Bk(3276),
      ak = Bk(38708),
      Xk = Bk(40280),
      bk = Bk(40284),
      wk = Bk(40290);
    const dk = "seat reservation expired.",
      sk = "early_leave";

    function Vk(kk) {
      if (kk instanceof ak.e) return "expected";
      if (kk instanceof bk.u) return kk.networkLost ? "expected" : "unrecognised";
      if (kk instanceof bk.e) {
        if ("closed" === kk.stage && (0 === kk.code || (0, tk.h)(kk.code))) return "expected";
        if ("roomError" === kk.stage && (kk.serverText === dk || kk.serverText === sk)) return "expected"
      }
      return kk instanceof bk.e || kk instanceof bk.n ? null === (0, Xk.g)(kk.code).name ? "unrecognised" : "known" : (0, Rk.f)(kk) ? "expected" : kk instanceof bk.y || kk instanceof wk.e ? "known" : "unrecognised"
    }

    function Jk(kk) {
      return kk instanceof ak.e ? "timedOut" : "expected" !== Vk(kk) || (0, Rk.f)(kk) || kk instanceof bk.e && 1001 === kk.code ? void 0 : "failed"
    }
  },
  40370: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Sk,
      i: () => Vk,
      j: () => Yk,
      l: () => mk,
      p: () => Ok
    });
    var Rk = Bk(36217),
      tk = Bk(36209);
    const ak = 64 * Rk.c,
      Xk = 40 * Rk.e,
      bk = 36 * Rk.e,
      wk = 20 * Rk.e,
      dk = 2 * Rk.e,
      sk = 5 * Rk.e;

    function Vk(kk) {
      return "footprint" !== kk
    }
    const Jk = 2 * Rk.e,
      Ak = 4 * Rk.e,
      ek = 35 * Rk.e + Jk + Ak,
      yk = 6.5 * Rk.e,
      fk = 132.5 * Rk.c;

    function mk(kk) {
      const Fk = yk + (0, tk.i)(kk) + kk * fk;
      return Math.ceil((2 * ek + Fk) / ak) * ak
    }
    const Wk = mk(tk.b),
      vk = (Rk.e, Rk.e, Rk.e, {
        targetBytes: Xk,
        leastBytes: wk
      }),
      ik = {
        targetBytes: bk,
        leastBytes: wk
      };

    function Yk(kk) {
      return kk >= tk.b ? vk : ik
    }
    const Lk = 2 * ak;

    function Ok(kk, Fk, Bk) {
      return kk + Fk + Lk > (null !== Bk && void 0 !== Bk ? Bk : Wk)
    }
    const Ek = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? kk => {
        requestIdleCallback(kk)
      } : null
    };
    class Sk {
      constructor(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ek;
        this.memory = kk, this.readPeakStoredChunks = Fk, this.onError = Bk, this.clock = Rk, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(kk, Fk, Bk) {
        this.shedding = {
          shed: kk,
          ve: Fk,
          readDistanceInUse: Bk
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(kk) {
        this.footprint = kk
      }
      setCeiling(kk) {
        this.ceilingBytes = kk, this.call((() => {
          this.memory.setCeiling(kk)
        }), void 0)
      }
      ceilingMayRefuse(kk) {
        return Ok(this.memory.memoryBytes(), kk, this.ceilingBytes)
      }
      reserveAtJoin(kk) {
        let {
          targetBytes: Fk,
          leastBytes: Bk
        } = kk;
        const Rk = this.memory.memoryBytes(),
          tk = Rk + Bk,
          ak = Math.max(Fk + (this.ballastOn() ? sk : 0), tk),
          Xk = this.call((() => this.memory.reserveUpFront(ak) ? "target" : ak > tk && this.memory.reserveUpFront(tk) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== Xk) {
          const kk = "least" === Xk ? `took ${tk} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${ak} bytes was refused at ${Rk} bytes; ${kk}`)
        }
        return this.joinReserveTaken = Xk, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== Xk && this.shedFor("joinReserve"), "none" !== Xk
      }
      afterFrame() {
        if (this.stopped) return;
        const kk = this.clock.now(),
          Fk = null !== this.stepsHeldUntil && kk >= this.stepsHeldUntil;
        if (Fk && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && kk >= this.ballastCheckAt && (this.takeBallast(kk), this.stopped)) return;
        const Bk = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          Rk = Fk && "now" === Bk ? "none" : Bk,
          {
            requestIdle: tk
          } = this.clock;
        "now" === Rk || null !== this.pendingSince && kk - this.pendingSince >= 500 ? this.step() : "idle" === Rk && null === this.pendingSince && (null === tk ? this.step() : (this.pendingSince = kk, tk((() => {
          null !== this.pendingSince && this.step()
        })))), kk - this.statsAt >= 1e3 && (this.statsAt = kk, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var kk, Fk;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (Fk = this.shedding.readDistanceInUse()) && void 0 !== Fk ? Fk : this.distanceInUse);
          null === (kk = this.footprint) || void 0 === kk || kk.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(kk, Fk) {
        this.noteWorker(`Mesh${kk}`, Fk)
      }
      meshWorkerGone(kk) {
        this.workerGone(`Mesh${kk}`)
      }
      noteWorldgen(kk) {
        this.noteWorker("Worldgen", kk)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(kk, Fk) {
        const Bk = this.workers.get(kk);
        null !== Bk && void 0 !== Bk && Bk.gone && (this.replacedRefusals.reserves += Bk.stats.reservesRefused, this.replacedRefusals.allocations += Bk.stats.allocationsRefused), this.workers.set(kk, {
          stats: Fk,
          gone: !1
        })
      }
      workerGone(kk) {
        const Fk = this.workers.get(kk);
        Fk && (Fk.gone = !0)
      }
      details() {
        var kk, Fk;
        const Bk = {
          wasmMemoryNow: `${(0,Rk.f)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (Bk.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (Bk.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const tk = this.main;
        if (tk) {
          Bk.wasmMemoryMain = Nk(tk);
          const kk = Math.max(0, tk.peakLiveBytes - this.ballastPeakBytes),
            Fk = 0 === this.peakStoredChunks ? "-" : (kk / this.peakStoredChunks / Rk.c).toFixed(1);
          Bk.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${Fk} KiB`
        }
        for (const [Rk, {
            stats: Xk,
            gone: bk
          }] of this.workers) Bk[`wasmMemory${Rk}`] = Nk(Xk) + (bk ? " (gone)" : "");
        const ak = null !== (kk = null === (Fk = this.footprint) || void 0 === Fk ? void 0 : Fk.describe()) && void 0 !== kk ? kk : null;
        return null !== ak && (Bk.wasmMemoryFootprint = ak), Bk
      }
      pageKillSnapshot() {
        var kk, Fk, Bk, tk, ak;
        let Xk = (null !== (kk = null === (Fk = this.main) || void 0 === Fk ? void 0 : Fk.reservesRefused) && void 0 !== kk ? kk : 0) + this.replacedRefusals.reserves,
          bk = (null !== (Bk = null === (tk = this.main) || void 0 === tk ? void 0 : tk.allocationsRefused) && void 0 !== Bk ? Bk : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: Rk
          }
          of this.workers.values()) Xk += Rk.reservesRefused, bk += Rk.allocationsRefused;
        return {
          wasmMainMiB: Number((0, Rk.f)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, Rk.f)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: Xk,
          refusedAllocations: bk,
          sheds: this.sheds,
          ...null === (ak = this.footprint) || void 0 === ak ? void 0 : ak.snapshot()
        }
      }
      workersMemoryBytes() {
        let kk = 0;
        for (const {
            stats: Fk,
            gone: Bk
          }
          of this.workers.values()) kk += Bk ? 0 : Fk.memoryBytes;
        return kk
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(dk)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(kk) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = kk + 1e3;
        const Fk = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, Fk)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(kk) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${kk}: frames grow on demand from here`)
      }
      shedFor(kk) {
        const {
          shedding: Fk
        } = this;
        if (null === Fk) return;
        this.pendingSince = null;
        const Bk = this.call((() => Fk.shed(kk)), null);
        this.stopped || (null !== Bk ? (this.sheds++, this.shedCap = Bk, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), Fk.ve(kk, this.sheds, this.details())) : Vk(kk) && this.stopSteps("nothing is left to shed"))
      }
      call(kk, Fk) {
        if (this.stopped) return Fk;
        try {
          return kk()
        } catch (Bk) {
          return this.stop(), this.onError(Bk), Fk
        }
      }
    }

    function Nk(kk) {
      const Fk = (kk, Fk) => `${kk}/${(0,Rk.f)(Fk)}`;
      return `memory ${(0,Rk.f)(kk.memoryBytes)} live ${(0,Rk.f)(kk.liveBytes)} peak ${(0,Rk.f)(kk.peakLiveBytes)} unused ${(0,Rk.f)(kk.unusedBytes)} ceiling ${(0,Rk.f)(kk.ceilingBytes)} MiB; grows upFront ${Fk(kk.grows.upFront,kk.grownBytes.upFront)} ahead ${Fk(kk.grows.ahead,kk.grownBytes.ahead)} inFrame ${Fk(kk.grows.onDemandInFrame,kk.grownBytes.onDemandInFrame)} other ${Fk(kk.grows.onDemand,kk.grownBytes.onDemand)}; refused reserves ${kk.reservesRefused} allocations ${kk.allocationsRefused}`
    }
  },
  40379: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => wk,
      f: () => dk,
      i: () => Ak,
      k: () => Vk
    });
    var Rk = Bk(3506),
      tk = Bk(4524),
      ak = Bk(40387),
      Xk = Bk(40393),
      bk = Bk(36019);
    const wk = 395,
      dk = 2147483648,
      sk = new Uint8Array(0);
    class Vk extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class Jk extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class Ak {
      constructor(kk, Fk, Bk) {
        var Rk, tk, Xk, bk;
        let wk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = kk, this.build = Fk, this.onFailure = Bk, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.lA = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (Rk = wk.fetchFile) && void 0 !== Rk ? Rk : kk => (0, ak.j)(kk), this.onWritten = null !== (tk = wk.onWritten) && void 0 !== tk ? tk : null, this.onTaken = null !== (Xk = wk.onTaken) && void 0 !== Xk ? Xk : null, this.onPackFileFailed = null !== (bk = wk.onPackFileFailed) && void 0 !== bk ? bk : null, this.startupLeft = new Set(kk.startup);
        for (const ak of kk.startup) this.request(ak)
      }
      get startupDone() {
        return 0 === this.startupLeft.size
      }
      get waiting() {
        return this.ready.length
      }
      get asking() {
        return this.pending.size
      }
      get inFlight() {
        return this.pending.size - this.ready.length
      }
      get unanswered() {
        return this.written.size
      }
      get keptBytes() {
        return this.keptTotal
      }
      drawnUrl(kk) {
        return this.drawn.get(kk)
      }
      request(kk) {
        const Fk = this.pending.get(kk);
        if (!0 === (null === Fk || void 0 === Fk ? void 0 : Fk.ask)) return;
        const Bk = this.UA(kk, !0);
        Bk.recheck = void 0 !== Fk;
        const Rk = this.drawn.get(kk);
        if (void 0 !== Rk) return Bk.Hb = !0, Bk.recheck = !0, void this.fetch(kk, Bk, Rk);
        this.fetchWanted(kk, Bk)
      }
      async refresh() {
        const kk = ++this.refreshes,
          Fk = new Set;
        for (const Xk of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const kk of Xk) 0 === (kk & ak.h) && Fk.add(kk);
        const Bk = [...Fk];
        let Rk;
        try {
          Rk = await Promise.all(Bk.map((kk => this.wanted(kk))))
        } catch {
          return null
        }
        if (kk !== this.refreshes) return null;
        const tk = {
          resent: 0,
          refetched: 0,
          delivered: Bk.filter((kk => this.drawn.has(kk))).length
        };
        return Bk.forEach(((kk, Fk) => {
          const {
            url: Bk,
            inPlaceOf: ak
          } = Rk[Fk], Xk = this.pending.get(kk);
          if (void 0 !== Xk) {
            if (Xk.Hb || void 0 === Xk.url) return void(Xk.recheck = !0);
            if (Xk.url === Bk) return;
            tk.refetched++;
            const Fk = this.UA(kk, Xk.ask);
            return Fk.recheck = Xk.recheck, void this.fetch(kk, Fk, Bk, ak)
          }
          const bk = this.written.get(kk);
          void 0 === bk ? this.drawn.get(kk) !== (null !== Bk && void 0 !== Bk ? Bk : void 0) && (tk.resent++, this.fetch(kk, this.UA(kk, !1), Bk, ak)) : bk.url !== (null !== Bk && void 0 !== Bk ? Bk : "") && (bk.attempt.recheck = !0)
        })), tk
      }
      taken(kk, Fk) {
        const Bk = new Set,
          Rk = new Set;
        for (const tk of Array.from(Fk)) 0 === (tk & dk) ? Bk.add(tk) : Rk.add((tk & ~dk) >>> 0);
        for (const [tk, ak] of this.written) ak.seq > kk || (this.written.delete(tk), Bk.has(ak.seq) ? this.refusedFile(tk, ak) : this.takenFile(tk, ak, !ak.empty && !Rk.has(ak.seq)))
      }
      takenFile(kk, Fk, Bk) {
        const {
          attempt: Rk
        } = Fk;
        if (Bk) {
          var tk;
          this.drawn.set(kk, Fk.url), this.undrawn.delete(kk), void 0 !== Rk.inPlaceOf ? this.refusedPack.set(kk, Rk.inPlaceOf) : Rk.Hb || this.refusedPack.delete(kk), null === (tk = this.onTaken) || void 0 === tk || tk.call(this, kk, !0);
          const Bk = this.pending.get(kk);
          if (!0 === (null === Bk || void 0 === Bk ? void 0 : Bk.Hb) && Bk.url !== Fk.url) {
            const Bk = this.UA(kk, !0);
            Bk.Hb = !0, Bk.recheck = !0, this.fetch(kk, Bk, Fk.url)
          }
        } else {
          var ak;
          this.drawn.has(kk) || this.undrawn.add(kk), null === (ak = this.onTaken) || void 0 === ak || ak.call(this, kk, !1)
        }
        Rk.recheck && this.resendIfChanged(kk)
      }
      refusedFile(kk, Fk) {
        var Bk, Rk;
        if (null === (Bk = this.onTaken) || void 0 === Bk || Bk.call(this, kk, !1), this.refusedPack.set(kk, Fk.url), this.pending.has(kk)) return void(null === (Rk = this.onPackFileFailed) || void 0 === Rk || Rk.call(this, kk, ek(Fk.url)));
        const tk = this.UA(kk, Fk.attempt.ask);
        tk.recheck = Fk.attempt.recheck, this.afterRefusal(kk, tk, Fk.url)
      }
      async afterRefusal(kk, Fk, Bk) {
        var Rk;
        let tk;
        try {
          tk = await this.wanted(kk)
        } catch (ak) {
          return void(this.pending.get(kk) === Fk && this.giveUp(kk, Fk, Bk, ak))
        }
        this.pending.get(kk) === Fk && (tk.inPlaceOf !== Bk ? Fk.ask || (null !== (Rk = tk.url) && void 0 !== Rk ? Rk : void 0) !== this.drawn.get(kk) ? this.fetch(kk, Fk, tk.url, tk.inPlaceOf) : this.pending.delete(kk) : this.fallBack(kk, Fk, Bk, ek(Bk)))
      }
      UA(kk, Fk) {
        const Bk = {
          url: void 0,
          ask: Fk,
          Hb: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(kk, Bk);
        for (let Rk = this.ready.length - 1; Rk >= 0; Rk--) this.ready[Rk].file === kk && this.ready.splice(Rk, 1);
        return Bk
      }
      async wanted(kk) {
        const Fk = await this.files.url(kk);
        return null !== Fk && this.refusedPack.get(kk) === Fk ? {
          url: await this.files.shippedUrl(kk),
          inPlaceOf: Fk
        } : {
          url: Fk,
          inPlaceOf: void 0
        }
      }
      fetchWanted(kk, Fk) {
        const Bk = this.files.url(kk);
        Bk instanceof Promise ? Bk.then((Bk => {
          this.fetchFound(kk, Fk, Bk)
        }), (Bk => {
          this.pending.get(kk) === Fk && this.giveUp(kk, Fk, "", Bk)
        })) : this.fetchFound(kk, Fk, Bk)
      }
      fetchFound(kk, Fk, Bk) {
        null !== Bk && this.refusedPack.get(kk) === Bk ? Promise.resolve(this.files.shippedUrl(kk)).then((Rk => {
          this.fetch(kk, Fk, Rk, Bk)
        }), (Rk => {
          this.pending.get(kk) === Fk && this.giveUp(kk, Fk, Bk, Rk)
        })) : this.fetch(kk, Fk, Bk)
      }
      fetch(kk, Fk, Bk, Rk) {
        this.pending.get(kk) === Fk && (Fk.url = Bk, Fk.inPlaceOf = Rk, null !== Bk ? this.load(kk, Fk, Bk) : this.buildFile(kk, Fk, "", sk))
      }
      load(kk, Fk, Bk) {
        const Rk = this.lA.get(kk);
        (null === Rk || void 0 === Rk ? void 0 : Rk.url) !== Bk ? this.fetchFile(Bk).then((Rk => {
          var tk, ak;
          this.pending.get(kk) === Fk && (this.keptTotal += Rk.byteLength - (null !== (tk = null === (ak = this.lA.get(kk)) || void 0 === ak ? void 0 : ak.glb.byteLength) && void 0 !== tk ? tk : 0), this.lA.set(kk, {
            url: Bk,
            glb: Rk
          }), this.buildFile(kk, Fk, Bk, Rk))
        }), (Rk => {
          this.pending.get(kk) === Fk && this.fallBack(kk, Fk, Bk, Rk)
        })) : this.buildFile(kk, Fk, Bk, Rk.glb)
      }
      buildFile(kk, Fk, Bk, Rk) {
        let tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Xk = Rk.byteLength > 0 && (0, ak.l)(Bk) ? (kk | ak.e) >>> 0 : kk;
        this.queueRecord(kk, Fk, Bk, Rk, this.build(Xk, Rk), tk)
      }
      queueRecord(kk, Fk, Bk, Rk, ak, bk) {
        ak.then((ak => {
          if (this.pending.get(kk) !== Fk) return;
          if (tk.o + (0, tk.td)(ak.byteLength) > tk.dc) return void this.ringRefused(kk, Fk, Bk, new Vk(`${yk(Bk)}'s record is ${ak.byteLength-Xk.c} bytes, past the cmd ring's ${tk.dc}`), bk);
          const wk = {
            file: kk,
            url: Bk,
            payload: ak,
            glb: Rk,
            attempt: Fk
          };
          bk ? this.ready.unshift(wk) : this.ready.push(wk)
        }))
      }
      async fallBack(kk, Fk, Bk, Rk) {
        var tk;
        let ak = null,
          Xk = Rk;
        try {
          ak = await this.files.shippedUrl(kk)
        } catch (bk) {
          Xk = bk
        }
        this.pending.get(kk) === Fk && (null !== ak && ak !== Bk ? (null === (tk = this.onPackFileFailed) || void 0 === tk || tk.call(this, kk, Rk), Fk.ask || this.drawn.get(kk) !== ak ? (Fk.url = ak, Fk.inPlaceOf = Bk, this.load(kk, Fk, ak)) : this.pending.delete(kk)) : this.giveUp(kk, Fk, Bk, Xk))
      }
      ringRefused(kk, Fk, Bk, Rk) {
        let tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, ak.l)(Bk) ? this.fallBack(kk, Fk, Bk, Rk): this.giveUp(kk, Fk, Bk, Rk, tk)
      }
      giveUp(kk, Fk, Bk, tk) {
        let ak = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: kk,
          url: yk(Bk),
          error: tk,
          startup: this.startupLeft.has(kk)
        }), Fk.ask || !this.drawn.has(kk) ? (0, Rk.U)(tk) ? this.queueRecord(kk, Fk, Bk, sk, Promise.resolve((0, Xk.m)(kk, (0, bk.j)(tk))), ak) : this.buildFile(kk, Fk, Bk, sk, ak) : this.pending.delete(kk)
      }
      async resendIfChanged(kk) {
        var Fk;
        if (0 !== (kk & ak.h)) return;
        let Bk;
        try {
          Bk = await this.wanted(kk)
        } catch {
          return
        }(null !== (Fk = Bk.url) && void 0 !== Fk ? Fk : void 0) === this.drawn.get(kk) || this.pending.has(kk) || this.written.has(kk) || this.fetch(kk, this.UA(kk, !1), Bk.url, Bk.inPlaceOf)
      }
      drain(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === kk) return;
        let Bk = 0,
          Rk = 0;
        for (; Rk < this.ready.length && Bk < 262144;) {
          const bk = this.ready[Rk];
          if (this.written.has(bk.file)) {
            Rk++;
            continue
          }
          const sk = this.nextSeq;
          new DataView(bk.payload.buffer, bk.payload.byteOffset, bk.payload.byteLength).setUint32(Xk.f, sk, !0);
          const Jk = bk.attempt.Hb && bk.glb.byteLength > 0 && this.drawn.get(bk.file) === bk.url;
          if (kk(wk, Jk ? 1 : 0, bk.payload)) {
            if (this.nextSeq = sk >= dk - 1 ? 1 : sk + 1, this.ready.splice(Rk, 1), Bk += bk.payload.byteLength, this.pending.delete(bk.file), this.startupLeft.delete(bk.file), this.written.set(bk.file, {
                seq: sk,
                url: bk.url,
                empty: 0 === bk.glb.byteLength,
                attempt: bk.attempt
              }), bk.glb.byteLength > 0) try {
              var tk;
              null === (tk = this.onWritten) || void 0 === tk || tk.call(this, bk.file, bk.glb)
            } catch (ak) {
              console.warn("ModelFeed: reading the file's images failed", ak)
            }
          } else {
            if (null === Fk || 0 === bk.glb.byteLength || Fk(bk.payload.byteLength)) return;
            this.ready.splice(Rk, 1);
            const kk = new Vk(`${yk(bk.url)}'s record is ${bk.payload.byteLength-Xk.c} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(bk.file, bk.attempt, bk.url, kk, !0)
          }
        }
      }
    }

    function ek(kk) {
      return new Jk(`presentation refused ${yk(kk)}`)
    }

    function yk(kk) {
      return kk.startsWith("data:") ? `${kk.slice(0,Math.min(Math.max(kk.indexOf(","),5),64))},...` : kk
    }
  },
  40387: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Xk,
      h: () => ak,
      j: () => sk,
      l: () => bk,
      o: () => dk,
      r: () => wk
    });
    var Rk = Bk(3506),
      tk = Bk(3007);
    const ak = 2147483648,
      Xk = 1073741824;

    function bk(kk) {
      return kk.startsWith("data:")
    }

    function wk(kk) {
      let {
        onTableFailed: Fk,
        packUrl: Bk
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Rk = dk();
      Rk.catch((kk => {
        null === Fk || void 0 === Fk || Fk(kk)
      }));
      const tk = async Fk => (await Rk).fileUrl((Fk & ~ak) >>> 0, kk);
      return {
        startup: [],
        url: async kk => {
          if (Bk && 0 === (kk & ak)) {
            const Fk = await Rk,
              tk = Fk.filePackName(kk),
              ak = null === tk || "lifeform" === Fk.fileSource(kk) ? null : Bk(tk);
            if (null !== ak) return ak
          }
          return tk(kk)
        },
        shippedUrl: tk
      }
    }

    function dk() {
      return Bk.e(41).then((() => Bk(42829)))
    }
    async function sk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return kk.startsWith("data:") ? (0, tk.e)(kk.slice(kk.indexOf(",") + 1), Fk) : (0, Rk.N)(kk, {
        spare: Fk
      })
    }
  },
  40393: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => dk,
      f: () => sk,
      i: () => Ak,
      k: () => fk,
      m: () => ek,
      o: () => Jk,
      p: () => yk
    });
    const Rk = 826427981,
      tk = 1,
      ak = 2,
      Xk = 44,
      bk = 46,
      wk = 58,
      dk = 8,
      sk = 4;

    function Vk(kk, Fk, Bk) {
      const tk = (new TextEncoder).encode(Bk),
        ak = dk + 4 * (Fk.length + 2),
        Xk = new Uint8Array(ak + (tk.byteLength + 3 & -4)),
        bk = new DataView(Xk.buffer);
      return bk.setUint32(0, kk, !0), bk.setUint32(dk, Rk, !0), Fk.forEach(((kk, Fk) => {
        bk.setUint32(dk + 4 * (Fk + 1), kk, !0)
      })), bk.setUint32(ak - 4, tk.byteLength, !0), Xk.set(tk, ak), Xk
    }

    function Jk(kk, Fk) {
      return Vk(kk, [ak], Fk)
    }

    function Ak(kk, Fk) {
      return Vk(kk, [tk, bk], Fk)
    }

    function ek(kk, Fk) {
      return Vk(kk, [tk, wk], Fk)
    }

    function yk(kk, Fk) {
      return Vk(kk, [tk, Xk], Fk)
    }

    function fk(kk) {
      const Fk = dk;
      if (kk.byteLength < Fk + 12) return !1;
      const Bk = new DataView(kk.buffer, kk.byteOffset, kk.byteLength);
      return Bk.getUint32(Fk, !0) === Rk && Bk.getUint32(Fk + 4, !0) === tk && Bk.getUint32(Fk + 8, !0) === Xk
    }
  },
  40364: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Wk,
      h: () => mk,
      j: () => Lk,
      k: () => Yk,
      l: () => Ok,
      m: () => yk
    });
    var Rk = Bk(4531),
      tk = Bk(40252);
    const ak = 18,
      Xk = 19,
      bk = 20,
      wk = {
        1: "link",
        2: "draw",
        3: "draw base vertex",
        4: "draw no index buffer",
        7: "draw missing block",
        8: "draw small binding",
        9: "draw missing texture",
        10: "draw no texture storage",
        11: "draw missing sampler",
        12: "draw missing vertex buffer",
        13: "draw short constant",
        15: "draw no zero buffer",
        16: "draw feedback loop",
        [ak]: "retry linked",
        [Xk]: "fallback linked",
        [bk]: "fallback failed",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function dk(kk, Fk) {
      return kk === ak ? "program retry" : kk === Xk || kk === bk ? `program fallback ${Fk}` : "program"
    }
    const sk = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      Vk = {
        0: "transform",
        1: "object",
        2: "instance batch",
        3: "material",
        4: "terrain part",
        5: "particle system",
        6: "geometry",
        7: "texture",
        9: "shader pack",
        10: "text plane",
        11: "object chunk"
      },
      Jk = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      Ak = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld"
      },
      ek = {
        1280: "invalid enum",
        1281: "invalid value",
        1282: "invalid operation",
        1285: "out of memory",
        1286: "invalid framebuffer operation",
        37442: "context lost"
      };

    function yk(kk) {
      return String(kk).replace(/\d/g, (kk => String.fromCharCode(97 + Number(kk))))
    }

    function fk(kk, Fk) {
      var Bk;
      return null !== (Bk = kk[Fk]) && void 0 !== Bk ? Bk : yk(Fk)
    }

    function mk() {
      return yk((0, tk.e)())
    }

    function Wk(kk, Fk) {
      switch (kk) {
        case Rk.g.RenderSceneRowNotDrawn:
          return {
            words: ` ${fk(Vk,Fk)}`, instance: String(Fk), group: String(kk)
          };
        case Rk.g.RenderChunkMeshNotDrawn: {
          const Bk = 0 === (128 & Fk) ? "" : " shortage",
            Rk = Fk >>> 8;
          return {
            words: ` ${fk(Jk,127&Fk)}${Bk}${0===Rk?"":` kind ${yk(Rk)}`}`,
            instance: String(Fk),
            group: String(kk)
          }
        }
        case Rk.g.RenderInternal: {
          const Bk = fk(sk, 255 & Fk),
            Rk = Fk >>> 8 & 255;
          if (0 === Rk) return {
            words: ` ${Bk}`,
            instance: String(Fk),
            group: String(kk)
          };
          const tk = fk(wk, Rk),
            ak = Fk >>> 16;
          return {
            words: ` ${Bk} ${tk} program ${yk(ak)}`,
            instance: `${Bk} ${tk}`,
            group: dk(Rk, Bk),
            gpuDetails: {
              programFailure: tk,
              program: String(ak)
            }
          }
        }
        case Rk.g.RenderSerialLinks: {
          const Bk = fk(Ak, Fk);
          return {
            words: ` ${Bk}`,
            instance: String(Fk),
            group: String(kk),
            gpuDetails: {
              serialLinks: Bk
            }
          }
        }
        case Rk.g.RenderGlErrorAfterRestore: {
          const Bk = fk(ek, 65535 & Fk),
            Rk = Fk >>> 16,
            tk = 65535 !== Rk;
          return {
            words: ` ${Bk}${tk?` program ${yk(Rk)}`:""}`,
            instance: String(Fk),
            group: String(kk),
            gpuDetails: tk ? {
              glError: Bk,
              program: String(Rk)
            } : {
              glError: Bk
            }
          }
        }
        default:
          return null
      }
    }
    const vk = 2,
      ik = new Map;

    function Yk(kk) {
      let {
        group: Fk,
        instance: Bk
      } = kk, Rk = ik.get(Fk);
      return void 0 === Rk && (Rk = [], ik.set(Fk, Rk)), !Rk.includes(Bk) && (Rk.length >= vk || (Rk.push(Bk), !1))
    }

    function Lk() {
      return ik.size > 0
    }

    function Ok() {
      ik.clear()
    }
  },
  40290: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => mk,
      e: () => Wk,
      g: () => fk,
      h: () => Lk
    });
    var Rk = Bk(6349),
      tk = Bk(29),
      ak = Bk(4072),
      Xk = Bk(4531),
      bk = Bk(6343),
      wk = Bk(40292);

    function dk(kk, Fk) {
      const Bk = (0, bk.b)(Fk.variants);
      return kk.setShaderPack(Bk.variantFlags, Bk.hooks, Bk.moduleCodes, (0, wk.v)(Fk.layers), wk.m[Fk.aX], Fk.keepCircleShadows)
    }
    const sk = 0,
      Vk = 1,
      Jk = 2,
      Ak = "shaderPack:failedToCompile",
      ek = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      yk = new Set(["not_requested", "off_after_loss", "gpu_class_webgl"]);

    function fk(kk, Fk) {
      var Bk;
      const Rk = null !== (Bk = null === kk || void 0 === kk ? void 0 : kk.reason) && void 0 !== Bk ? Bk : "none";
      return ek.has(Rk) ? {
        messageKey: Fk ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === Rk && "override" === (null === kk || void 0 === kk ? void 0 : kk.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: yk.has(Rk) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    const mk = {
      messageKey: "shaderPack:failedDeviceGraphics",
      noAdapter: !1
    };
    class Wk extends Error {
      constructor(kk) {
        super(`the shader pack can't run in this game: ${kk}`), this.messageKey = kk, this.name = "ShaderPackJoinError"
      }
    }
    const vk = "strict";
    class ik {
      constructor(kk) {
        this.deps = kk, this.pagePack = void 0, this.loaded = null, this.aX = vk, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = kk.load().catch((Fk => (kk.warn("the shader pack could not load: the game draws without it", Fk), {
          status: "none"
        }))).then((kk => (this.loaded = kk, "active" === kk.status && (this.handOverToPreviews(kk), null !== kk.harnessPolicy && (this.aX = kk.harnessPolicy, this.handOver())), kk)))
      }
      async join(kk) {
        this.leave();
        const Fk = this.game,
          [Bk, tk] = await Promise.all([this.pagePack, this.policyOf(kk)]);
        if (Fk !== this.game || "none" === Bk.status) return null;
        const ak = "active" === Bk.status ? Bk.pack.variants : Bk.variants,
          Xk = (0, Rk.h)(ak, tk);
        if (Xk && "active" === Bk.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (Xk) {
          const kk = this.cantRun(Bk, tk);
          if (null !== kk) return kk
        } else if ("blocked" === Bk.status || null === this.deps.core) return null;
        return this.aX = tk, this.handOver(), Xk && this.refused ? Ak : (this.joined = !0, this.offInThisGame = !Xk, null)
      }
      async replay(kk) {
        const Fk = await this.join(kk);
        null === Fk ? this.playable() : this.deps.failInGame(Fk)
      }
      cantRun(kk, Fk) {
        const {
          core: Bk,
          noWebGpu: Rk
        } = this.deps;
        if ("blocked" === kk.status) {
          return "shaderPack:failedUnchecked" === kk.messageKey && null === Bk && Rk.noAdapter ? Rk.messageKey : kk.messageKey
        }
        return this.refused || this.failedPolicies.has(Fk) ? Ak : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var kk;
        return this.runsInJoinedGame() && "active" === (null === (kk = this.loaded) || void 0 === kk ? void 0 : kk.status) ? function(kk, Fk) {
          const Bk = kk.filter((kk => (0, Rk.h)([kk], Fk))),
            tk = kk => Bk.some((Fk => Fk[kk]));
          return {
            sceneDepth: tk("sceneDepth"),
            sunShadow: tk("sunShadow"),
            airShadow: tk("airShadow")
          }
        }(this.loaded.pack.variants, this.aX) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(Ak) : (null !== this.couldntRun ? this.notify(ak.d, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.aX) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(kk) {
        for (const {
            code: Fk,
            detail: Bk
          }
          of kk)
          if (Fk === Xk.g.RenderShaderPackNotRun) switch (255 & Bk) {
            case sk:
              this.refused = !0, this.failed();
              break;
            case Vk:
              this.failedPolicies.add(this.aX), this.failed();
              break;
            case Jk:
              this.failedModelPolicies.add(this.aX), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(Ak) : this.failedWhileJoining = !0)
      }
      fail(kk) {
        this.leave(), this.deps.failInGame(kk)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(kk, Fk) {
        const Bk = this.game;
        this.deps.notify(kk, (() => Bk === this.game && this.joined), Fk)
      }
      handOver() {
        var kk;
        const {
          core: Fk
        } = this.deps;
        null !== Fk && "active" === (null === (kk = this.loaded) || void 0 === kk ? void 0 : kk.status) && (dk(Fk, {
          ...this.loaded.pack,
          aX: this.aX
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(kk) {
        let {
          pack: Fk,
          harnessPolicy: Bk
        } = kk;
        const {
          previews: Rk
        } = this.deps;
        null !== Rk && dk(Rk, {
          ...Fk,
          aX: null !== Bk && void 0 !== Bk ? Bk : vk
        })
      }
      policyOf(kk) {
        return this.deps.policyOf(kk).catch((kk => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", kk), vk)))
      }
    }
    const Yk = "wasmShaderPackNotice";

    function Lk(kk, Fk, Bk, Rk) {
      return tk.o.subscribe(Yk, (kk => {
        let {
          translationKey: Fk,
          stillCurrent: Bk,
          reasonKey: Rk
        } = kk;
        Bk() && tk.o.Hf("chat", (0, ak.k)(Fk, Rk))
      })), new ik({
        load: Ok,
        policyOf: Ek,
        core: kk,
        previews: Fk,
        noWebGpu: Bk,
        notify: (kk, Fk, Bk) => {
          const Rk = {
            translationKey: kk,
            stillCurrent: Fk,
            reasonKey: Bk
          };
          tk.o.Hf(Yk, Rk, !0)
        },
        failInGame: kk => {
          tk.o.Hf(ak.h, kk)
        },
        warn: Rk
      })
    }
    async function Ok() {
      const [{
        shaderPackPage: kk,
        harnessShaderPackMode: Fk
      }, {
        shaderPackTextures: Rk
      }] = await Promise.all([Bk.e(129).then((() => Bk(38817))), Bk.e(130).then((() => Bk(6340)))]), tk = await kk.load();
      return "active" !== tk.status ? tk : {
        status: "active",
        pack: {
          variants: tk.pack.variants,
          layers: Rk().layers,
          keepCircleShadows: tk.pack.keepCircleShadows
        },
        harnessPolicy: Fk()
      }
    }
    async function Ek(kk) {
      var Fk;
      const [{
        harnessShaderPackMode: Rk
      }, {
        getShaderPackPolicy: tk
      }] = await Promise.all([Bk.e(129).then((() => Bk(38817))), Bk.e(89).then((() => Bk(40709)))]);
      return null !== (Fk = Rk()) && void 0 !== Fk ? Fk : tk(kk)
    }
  },
  40407: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => bk,
      g: () => fk,
      k: () => wk,
      n: () => dk,
      q: () => sk,
      s: () => Jk
    });
    var Rk = Bk(40413),
      tk = Bk(40421);
    const ak = "atlas:",
      Xk = 3e4;
    class bk extends Error {
      constructor(kk, Fk) {
        super(`fetching ${kk} answered HTTP ${Fk}`), this.url = kk, this.status = Fk, this.name = "TerrainTextureFetchError"
      }
    }

    function wk(kk) {
      if (!kk.startsWith(ak)) return null;
      const Fk = Number(kk.slice(ak.length));
      return Number.isInteger(Fk) && Fk >= 0 ? Fk : null
    }
    async function dk() {
      const kk = await Bk.e(201).then((() => Bk(34024)));
      return {
        atlasSheets: kk.blockAtlasUrls,
        texture: Fk => {
          var Bk, Rk, ak;
          return null !== (Bk = null !== (Rk = null !== (ak = kk.animatedBlockTextures[Fk]) && void 0 !== ak ? ak : kk.rotatedBlockTextures[Fk]) && void 0 !== Rk ? Rk : tk.b[Fk]) && void 0 !== Bk ? Bk : null
        }
      }
    }
    async function sk(kk) {
      const Fk = new AbortController,
        Bk = setTimeout((() => {
          Fk.abort(new DOMException(`${kk} took over ${Xk} ms`, "TimeoutError"))
        }), Xk);
      let Rk;
      try {
        const Bk = await fetch(kk, {
          signal: Fk.signal
        });
        if (!Bk.ok) throw new bk(kk, Bk.status);
        Rk = await Bk.blob()
      } finally {
        clearTimeout(Bk)
      }
      const tk = await createImageBitmap(Rk, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return Jk(tk)
      } finally {
        tk.close()
      }
    }
    const Vk = 8192;

    function Jk(kk) {
      const {
        width: Fk,
        height: Bk
      } = kk, tk = Math.max(1, Math.min(Bk, Vk)), ak = (0, Rk.f)(Fk, tk, {
        willReadFrequently: !0
      });
      if (!ak) throw new Error("no 2D context to read the texture back");
      ak.globalCompositeOperation = "copy";
      const Xk = new Uint8Array(Fk * Bk * 4);
      for (let Rk = 0; Rk < Bk; Rk += tk) {
        const bk = Math.min(tk, Bk - Rk);
        ak.drawImage(kk, 0, Rk, Fk, bk, 0, 0, Fk, bk), Xk.set(ak.getImageData(0, 0, Fk, bk).data, Rk * Fk * 4)
      }
      return {
        width: Fk,
        height: Bk,
        pixels: Xk
      }
    }
    async function Ak(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : sk;
      const Rk = [],
        tk = await Promise.all(kk.map((async kk => {
          var tk, Xk;
          const bk = null !== (tk = null === (Xk = Fk.decoded) || void 0 === Xk ? void 0 : Xk.call(Fk, kk)) && void 0 !== tk ? tk : null,
            dk = null === bk ? function(kk, Fk) {
              if (kk.startsWith(ak)) {
                var Bk;
                const Rk = wk(kk);
                return null === Rk ? null : null !== (Bk = Fk.atlasSheets[Rk]) && void 0 !== Bk ? Bk : null
              }
              return Fk.texture(kk)
            }(kk, Fk) : null,
            sk = null !== bk && void 0 !== bk ? bk : null === dk ? null : Bk(dk);
          if (null === sk) return Rk.push({
            name: kk,
            url: dk,
            error: new Error(`no URL for terrain texture ${kk}`)
          }), null;
          try {
            const Fk = await sk;
            if (Fk.pixels.byteLength !== Fk.width * Fk.height * 4) throw new Error(`decoded ${Fk.pixels.byteLength} bytes for ${Fk.width}x${Fk.height} texels`);
            return {
              name: kk,
              texture: Fk
            }
          } catch (Vk) {
            return Rk.push({
              name: kk,
              url: dk,
              error: Vk
            }), null
          }
        }))),
        Xk = tk.filter((kk => null !== kk)),
        bk = new Uint32Array(2 * Xk.length);
      Xk.forEach(((kk, Fk) => {
        let {
          texture: Bk
        } = kk;
        bk[2 * Fk] = Bk.width, bk[2 * Fk + 1] = Bk.height
      }));
      return {
        handOver: {
          names: Xk.map((kk => {
            let {
              name: Fk
            } = kk;
            return Fk
          })),
          textures: Xk.map((kk => {
            let {
              texture: Fk
            } = kk;
            return Fk.pixels
          })),
          sizes: bk
        },
        failures: Rk
      }
    }
    const ek = [2e3, 1e4, 3e4, 6e4, 12e4];

    function yk() {}
    class fk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ek,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = kk, this.retryMs = Fk, this.keepBelow = Bk, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dk,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Rk = ++this.started,
          tk = {
            decode: Bk.decode,
            wholeAtlas: Bk.wholeAtlas
          };
        return this.loadAndHandOver(Fk, tk, kk, (() => {
          var kk;
          return Rk < this.landed || !1 === (null === (kk = Bk.wanted) || void 0 === kk ? void 0 : kk.call(Bk))
        }), {
          onTaken: (kk, Bk) => {
            this.landed = Rk, this.current = {
              mine: Rk,
              sources: Fk,
              load: tk,
              lA: kk,
              failed: Bk
            }
          }
        })
      }
      restore(kk) {
        var Fk;
        const Bk = this.current;
        if (null === Bk) return Promise.resolve(null);
        if ((null === (Fk = this.restoring) || void 0 === Fk ? void 0 : Fk.mine) === Bk.mine) return this.restoring.done;
        const Rk = {
          mine: Bk.mine,
          done: this.restoreLanded(Bk, kk).finally((() => {
            this.restoring === Rk && (this.restoring = null)
          }))
        };
        return this.restoring = Rk, Rk.done
      }
      async restoreLanded(kk, Fk) {
        const Bk = () => this.landed !== kk.mine,
          {
            lA: Rk
          } = kk;
        if (null !== Rk) return this.stopped() ? null : this.core.setTerrainTextures(Rk.names, Rk.textures, Rk.sizes);
        let tk = Fk;
        for (let ak = 0;; ak++) {
          const Fk = this.retryMs.at(ak),
            Rk = {
              allOrNothingExcept: void 0 === Fk ? void 0 : kk.failed
            },
            Xk = await this.loadAndHandOver(kk.sources, kk.load, tk, Bk, Rk);
          if (!1 !== Xk || void 0 === Fk || this.stopped()) return Xk;
          if (tk = yk, await new Promise((kk => {
              setTimeout(kk, Fk)
            })), Bk()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(kk, Fk, Bk, Rk) {
        let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const ak = this.core.terrainTextureNames();
        var Xk;
        if (0 === ak.length) return null === (Xk = tk.onTaken) || void 0 === Xk || Xk.call(tk, null, new Set), !0;
        let bk, dk;
        try {
          bk = await kk(), dk = await Ak(ak, bk, Fk.decode)
        } catch (fk) {
          return Rk() ? null : (Bk({
            name: null,
            url: null,
            error: fk
          }), !1)
        }
        if (Rk() || this.stopped()) return null;
        for (const wk of dk.failures) Bk(wk);
        const sk = tk.allOrNothingExcept;
        if (void 0 !== sk && dk.failures.some((kk => {
            let {
              name: Fk
            } = kk;
            return null === Fk || !sk.has(Fk)
          })) || !0 === Fk.wholeAtlas && dk.failures.some((kk => {
            let {
              name: Fk
            } = kk;
            return null === Fk || null !== wk(Fk)
          }))) return !1;
        const {
          handOver: Vk
        } = dk, Jk = function(kk) {
          return kk.textures.reduce(((kk, Fk) => kk + Fk.byteLength), 0)
        }(Vk) < this.keepBelow, ek = this.core.setTerrainTextures(Vk.names, Vk.textures, Vk.sizes, Jk ? void 0 : () => {
          !async function(kk, Fk) {
            await Fk;
            for (const {
                buffer: Rk
              }
              of kk) {
              const kk = Rk;
              var Bk;
              if (!kk.detached) null === (Bk = kk.transfer) || void 0 === Bk || Bk.call(kk, 0)
            }
          }(Vk.textures, bk.heldUntil)
        });
        if (ek) {
          var yk;
          const kk = new Set(dk.failures.flatMap((kk => {
            let {
              name: Fk
            } = kk;
            return null === Fk ? [] : [Fk]
          })));
          null === (yk = tk.onTaken) || void 0 === yk || yk.call(tk, Jk ? Vk : null, kk)
        }
        return ek
      }
    }
  },
  36522: (kk, Fk, Bk) => {
    function Rk(kk) {
      return "fetch" === kk || "timeout" === kk || "integrity" === kk ? "download" : "browser"
    }
    Bk.d(Fk, {
      d: () => tk,
      f: () => Xk,
      h: () => wk,
      l: () => bk,
      o: () => Rk,
      s: () => ak
    });
    const tk = "https://discord.gg/playbloxd";

    function ak(kk) {
      return "download" === kk ? {
        icon: "wifi",
        title: "wasmScreens:downloadFailedTitle",
        help: "wasmScreens:downloadFailedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : {
        icon: "face-dizzy",
        title: "wasmScreens:unsupportedTitle",
        help: "wasmScreens:unsupportedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function Xk(kk, Fk) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: Fk ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: kk.code
        },
        discordLink: Fk,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function bk() {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:turnstilePageTitle",
        help: "wasmScreens:turnstilePageHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function wk(kk, Fk, Bk) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: Bk ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: kk.reason
        },
        discordLink: null === kk.name,
        confirm: Fk ? "general:reconnect" : kk.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  6343: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => ik,
      e: () => Yk,
      f: () => Wk,
      g: () => mk
    });
    var Rk = Bk(6349);
    const tk = 6,
      ak = 3,
      Xk = 1,
      bk = 2,
      wk = 4,
      dk = 8,
      sk = 16,
      Vk = 32,
      Jk = 64,
      Ak = 128,
      ek = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function yk(kk) {
      if (!kk) return 0;
      const Fk = ek.indexOf(kk);
      if (Fk <= 0) throw new Error(`"${kk}" is not a shader pack hook function`);
      return Fk
    }

    function fk(kk) {
      if (0 === kk) return null;
      const Fk = ek[kk];
      if (void 0 === Fk) throw new Error(`${kk} is not a shader pack hook function id`);
      return Fk
    }

    function mk(kk) {
      const Fk = Rk.d.length;
      return {
        strict: kk >= Fk,
        program: Rk.d[kk % Fk]
      }
    }

    function Wk(kk) {
      return Number(kk.strict) * Rk.d.length + Rk.d.indexOf(kk.program)
    }

    function vk(kk) {
      return "" === kk ? [] : kk.split(" ")
    }

    function ik(kk) {
      const Fk = {
        variantFlags: new Uint8Array(tk),
        hooks: new Uint8Array(tk * ak),
        moduleCodes: Array(tk).fill(""),
        reads: Array(2 * tk).fill("")
      };
      for (const Bk of kk) {
        const kk = Wk(Bk.key),
          Rk = (kk, Fk) => null === Bk.hooks.surface || Bk.reads.fragment.includes(kk) ? 0 : Fk;
        Fk.variantFlags[kk] = (Bk.sceneDepth ? Xk : 0) | (Bk.movesVertices ? bk : 0) | (Bk.sunShadow ? wk : 0) | (Bk.airShadow ? dk : 0) | (Bk.discards ? sk : 0) | Rk("localPosition", Vk) | Rk("enchantSpeed", Jk) | Rk("enchantTier", Ak), Fk.hooks[kk * ak] = yk(Bk.hooks.vertex), Fk.hooks[kk * ak + 1] = yk(Bk.hooks.surface), Fk.hooks[kk * ak + 2] = yk(Bk.hooks.light), Fk.moduleCodes[kk] = Bk.moduleCode, Fk.reads[2 * kk] = Bk.reads.vertex.join(" "), Fk.reads[2 * kk + 1] = Bk.reads.fragment.join(" ")
      }
      return Fk
    }

    function Yk(kk) {
      const {
        hooks: Fk,
        moduleCodes: Bk,
        reads: Rk
      } = kk;
      return Array.from(kk.variantFlags, ((kk, tk) => {
        const Vk = tk * ak;
        return {
          key: mk(tk),
          hooks: {
            vertex: fk(Fk[Vk]),
            surface: fk(Fk[Vk + 1]),
            light: fk(Fk[Vk + 2])
          },
          moduleCode: Bk[tk],
          sceneDepth: 0 !== (kk & Xk),
          sunShadow: 0 !== (kk & wk),
          airShadow: 0 !== (kk & dk),
          movesVertices: 0 !== (kk & bk),
          discards: 0 !== (kk & sk),
          reads: {
            vertex: vk(Rk[2 * tk]),
            fragment: vk(Rk[2 * tk + 1])
          }
        }
      }))
    }
  },
  40292: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      D: () => ek,
      e: () => tk,
      g: () => Rk,
      h: () => Jk,
      j: () => sk,
      m: () => fk,
      p: () => ak,
      r: () => bk,
      s: () => wk,
      u: () => Xk,
      v: () => yk,
      z: () => Ak
    });
    const Rk = 3,
      tk = 0,
      ak = 1,
      Xk = 2,
      bk = {
        uniform: 3,
        jJ: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      wk = 10,
      dk = "BloxdPackInputs",
      sk = "bloxdPackInputs",
      Vk = [{
        name: "seconds",
        type: "f32",
        offset: 0
      }, {
        name: "lit",
        type: "u32",
        offset: 4
      }, {
        name: "renderOffset",
        type: "vec3i",
        offset: 16
      }, {
        name: "sunDirection",
        type: "vec3f",
        offset: 32
      }, {
        name: "eyePosition",
        type: "vec3f",
        offset: 48
      }, {
        name: "shadowDirection",
        type: "vec3f",
        offset: 64
      }],
      Jk = 80;

    function Ak() {
      const kk = Vk.map((kk => {
        let {
          name: Fk,
          type: Bk
        } = kk;
        return `    ${Fk}: ${Bk},\n`
      })).join("");
      return `struct ${dk} {\n${kk}}\n@group(${Rk}) @binding(${tk}) var<uniform> ${sk}: ${dk};\n`
    }

    function ek(kk, Fk) {
      const Bk = new DataView(kk, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Jk),
        [Rk, tk, ak, Xk, bk, wk] = Vk;
      Bk.setFloat32(Rk.offset, Fk.seconds, !0), Bk.setUint32(tk.offset, Fk.lit ? 1 : 0, !0);
      for (let dk = 0; dk < 3; dk++) Bk.setInt32(ak.offset + 4 * dk, Fk.renderOffset[dk], !0), Bk.setFloat32(Xk.offset + 4 * dk, Fk.w6[dk], !0), Bk.setFloat32(bk.offset + 4 * dk, Fk.eyePosition[dk], !0), Bk.setFloat32(wk.offset + 4 * dk, Fk.shadowDirection[dk], !0)
    }

    function yk(kk) {
      const Fk = new Uint32Array(Math.max(1, kk.length));
      return kk.forEach(((kk, Bk) => {
        let {
          id: Rk,
          rotation: tk
        } = kk;
        Fk[Bk] = 65535 & Rk | (3 & tk) << 16
      })), Fk
    }
    const fk = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6349: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk,
      g: () => Xk,
      h: () => bk,
      l: () => tk,
      m: () => ak
    });
    const Rk = ["terrain", "liquid", "model"];

    function tk() {
      const kk = [];
      for (const Fk of [!1, !0])
        for (const Bk of Rk) kk.push({
          strict: Fk,
          program: Bk
        });
      return kk
    }

    function ak(kk) {
      return `${kk.strict?"strict":"allow"}.${kk.program}`
    }

    function Xk(kk) {
      return !kk.hooks.vertex && !kk.hooks.surface && !kk.hooks.light
    }

    function bk(kk, Fk) {
      return "off" !== Fk && (null === kk || kk.some((kk => kk.key.strict === ("strict" === Fk) && !Xk(kk))))
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);