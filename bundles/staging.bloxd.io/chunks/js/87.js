export const id = 87;
export const ids = [87];
export const modules = {
  38724: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => mq,
      h: () => cq,
      k: () => uq,
      m: () => Bq,
      p: () => Aq,
      q: () => xq
    });
    const Yq = "A valid external Instance reference no longer exists.",
      lq = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ],
      Oq = [
        [1e3, "lt1s"],
        [2e3, "lt2s"],
        [5e3, "lt5s"],
        [1e4, "lt10s"],
        [3e4, "lt30s"],
        [1 / 0, "ge30s"]
      ];
    const mq = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function xq(qq, Eq) {
      return qq ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(qq) {
        var Eq;
        const gq = null !== (Eq = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(qq)) && void 0 !== Eq ? Eq : /failed with ([A-Z][A-Z0-9_]+)/.exec(qq);
        return gq ? gq[1] : qq.includes(Yq) ? "gpu_process_lost" : "other"
      }(Eq)
    }

    function Aq(qq) {
      return `${(null===qq||void 0===qq?void 0:qq.vendor)||"unknown vendor"} ${(null===qq||void 0===qq?void 0:qq.architecture)||"unknown architecture"}`
    }

    function cq(qq) {
      return Wq(qq)[1]
    }

    function uq(qq) {
      return Wq(qq)[2]
    }

    function Bq(qq) {
      return Nq(Oq, qq)[1]
    }

    function Wq(qq) {
      return Nq(lq, qq)
    }

    function Nq(qq, Eq) {
      var gq;
      return null !== (gq = qq.find((qq => {
        let [gq] = qq;
        return Eq < gq
      }))) && void 0 !== gq ? gq : qq[qq.length - 1]
    }
  },
  39012: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Yq,
      f: () => lq
    });
    const Yq = 45e3;
    class lq extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  36350: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq,
      g: () => lq,
      j: () => Oq,
      k: () => mq
    });
    const Yq = 1024,
      lq = 1024 * Yq;

    function Oq(qq) {
      return 2 ** Math.floor(Math.log2(Math.max(1, qq / lq)))
    }

    function mq(qq) {
      return (qq / lq).toFixed(1)
    }
  },
  36528: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Oq,
      f: () => xq,
      g: () => mq,
      i: () => Aq,
      j: () => cq,
      k: () => uq
    });
    var Yq = gq(190);
    const lq = 32 * gq(36350).g,
      Oq = 6144,
      mq = 4608,
      xq = 512;

    function Aq(qq) {
      return Math.floor(lq * qq / Oq)
    }

    function cq(qq) {
      const Eq = qq - Math.floor(qq / 6);
      let gq = Yq.c.maxChunkHorizAddDistance,
        lq = Yq.c.maxChunkVertAddDistance;
      if (uq(gq + 1, lq + 1) <= Eq) return null;
      for (; uq(gq + 1, lq + 1) > Eq && (gq > 0 || lq > 0);) gq > lq ? gq-- : lq--;
      return {
        horizontal: gq,
        vertical: lq
      }
    }

    function uq(qq, Eq) {
      const gq = Math.max(qq, Eq);
      let Yq = 0;
      for (let lq = -gq; lq <= gq; lq++)
        for (let Oq = -gq; Oq <= gq; Oq++)
          for (let mq = -gq; mq <= gq; mq++) Bq(qq, Eq, lq, Oq, mq) && Yq++;
      return Yq
    }

    function Bq(qq, Eq, gq, Yq, lq) {
      const Oq = gq * gq + lq * lq;
      return qq === Eq ? Oq + Yq * Yq <= qq * qq : qq > Eq ? Math.abs(Yq) <= Eq && Oq + Yq * Yq <= qq * qq : Oq <= qq * qq && Oq + Yq * Yq <= Eq * Eq
    }
  },
  40590: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => lq,
      f: () => Oq,
      h: () => xq,
      j: () => uq,
      l: () => Aq,
      n: () => mq
    });
    var Yq = gq(190);
    const lq = 3e3,
      Oq = 15e3;

    function mq(qq) {
      const Eq = qq.endsWith(Yq.h);
      return {
        text: (Eq ? qq.slice(0, -Yq.h.length) : qq) || null,
        dropsCache: Eq
      }
    }
    const xq = "Either your internet isn't working or this is a bug.";

    function Aq(qq, Eq) {
      const gq = uq(qq);
      return null !== gq.name && "" === Yq.b[gq.name].text && null !== Eq ? Eq : gq.reason
    }
    const cq = "You were removed from the game.";

    function uq(qq) {
      var Eq;
      let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const lq = null !== (Eq = Object.keys(Yq.b).find((Eq => Yq.b[Eq].code === qq))) && void 0 !== Eq ? Eq : null;
      if (null === lq) return {
        code: qq,
        name: lq,
        reason: null !== gq && void 0 !== gq ? gq : `${xq}\nCode: ${qq}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: Oq,
        canReconnect: mq = !1
      } = Yq.b[lq], Aq = qq === Yq.b.outdatedVersion.code || qq === Yq.b.loadRecaptchaError.code;
      return {
        code: qq,
        name: lq,
        reason: "" !== Oq ? Oq : null !== gq && void 0 !== gq ? gq : qq === Yq.b.gameOrPluginKick.code ? cq : `Code: ${qq}`,
        canReconnect: mq,
        automaticallyReconnect: qq === Yq.b.customGameUpdated.code || qq === Yq.b.duplicateLobbyNameError.code,
        requiresRefresh: Aq
      }
    }
  },
  4622: (qq, Eq, gq) => {
    gq.d(Eq, {
      $c: () => eq,
      Ab: () => qE,
      Ac: () => Yq.bb,
      Bd: () => Yq.bc,
      Be: () => Aq,
      Ce: () => Sq,
      D: () => cq,
      Eb: () => gE,
      Ec: () => Yq.fb,
      Fd: () => Oq,
      Fe: () => dE,
      Gb: () => Yq.L,
      H: () => Yq.i,
      Hb: () => lq.h,
      Hd: () => dq,
      He: () => Nq,
      I: () => Dq,
      Ic: () => Yq.ib,
      Kc: () => Yq.pb,
      Kd: () => AE,
      Lb: () => rq,
      Lc: () => aE,
      M: () => Yq.m,
      Md: () => Lq,
      Nd: () => kq,
      P: () => Kq,
      Pb: () => pq,
      Pc: () => uE,
      Rc: () => lE,
      Rd: () => Gq,
      S: () => Yq.u,
      Sb: () => iq,
      Tb: () => nq,
      Ub: () => Yq.Q,
      Uc: () => Yq.sb,
      Vd: () => Fq,
      W: () => Yq.y,
      Wb: () => Zq,
      Xc: () => Yq.ub,
      Y: () => Yq.A,
      _: () => Bq,
      _b: () => Qq,
      _c: () => Yq.wb,
      ae: () => Rq,
      bb: () => Hq,
      bc: () => mE,
      c: () => EE,
      ce: () => Xq,
      d: () => Vq,
      db: () => Yq.B,
      dd: () => Yq.Ab,
      f: () => aq,
      fc: () => oq,
      g: () => cE,
      gd: () => Yq.Eb,
      ge: () => sq,
      hb: () => Yq.C,
      hc: () => BE,
      i: () => vq,
      ic: () => lq.l,
      id: () => Yq.Hb,
      je: () => xE,
      kb: () => Jq,
      l: () => tq,
      ld: () => Yq.Nb,
      m: () => Yq.e,
      mc: () => jq,
      ne: () => VE,
      o: () => WE,
      ob: () => OE,
      p: () => bq,
      pd: () => Yq.Qb,
      q: () => mq,
      qc: () => YE,
      r: () => fq,
      rb: () => uq,
      rd: () => Yq.Tb,
      re: () => Pq,
      sb: () => Yq.E,
      se: () => wq,
      u: () => NE,
      uc: () => Yq.Z,
      ue: () => zq,
      vd: () => hq,
      ve: () => Tq,
      w: () => Iq,
      wb: () => Uq,
      xb: () => Cq,
      xc: () => Yq._,
      yd: () => Yq.Vb,
      z: () => Yq.f,
      zb: () => Yq.H,
      zd: () => Yq.Wb,
      ze: () => Mq
    });
    var Yq = gq(4625),
      lq = gq(2357);
    const Oq = Math.round(1e3 / Yq.bc),
      mq = 4,
      xq = 2;

    function Aq() {
      return crypto.getRandomValues(new Uint32Array(xq))
    }
    const cq = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      uq = 16,
      Bq = {
        Draws: 1,
        NetAll: 2
      },
      Wq = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function Nq(qq) {
      return (qq.nametagsHidden ? yq.NametagsHidden : 0) | (qq.crouchToggle ? yq.CrouchToggle : 0) | (qq.bhopDisabled ? yq.BhopDisabled : 0) | (qq.disableBobbing ? yq.DisableBobbing : 0) | (qq.ezTowering ? yq.EzTowering : 0) | (qq.ezBridging ? yq.EzBridging : 0) | (qq.showChunkBorders ? yq.ShowChunkBorders : 0)
    }
    const aq = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      Vq = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      dq = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      jq = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      Hq = 5,
      oq = 4294967295;

    function Pq(qq) {
      return (qq.showFog ? Wq.ShowFog : 0) | (qq.lighting ? Wq.Lighting : 0) | (qq.chunkFade ? Wq.ChunkFade : 0)
    }
    const Qq = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      yq = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      tq = {
        Release: 1,
        KeepTouches: 2
      },
      rq = {
        Point: 1,
        Stamped: 2
      },
      vq = {
        Add: 1,
        Clear: 2
      },
      hq = 1,
      nq = 8,
      bq = 16777215,
      iq = 4,
      Zq = {
        Resume: 1
      },
      fq = {
        Held: 1
      };

    function Mq(qq, Eq) {
      return (qq | Eq << 8) >>> 0
    }

    function Tq(qq) {
      return 255 & qq
    }

    function zq(qq) {
      return qq >>> 8
    }

    function Sq(qq) {
      return qq + 3 & -4
    }
    const pq = 16777216,
      Gq = 20;
    const Lq = 8,
      Jq = 8,
      kq = 16777216,
      Rq = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      Uq = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      Fq = 16,
      sq = {
        Lost: 0,
        Gone: 1
      },
      Xq = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function wq(qq) {
      return qq === Xq.WorldgenSeed || qq === Xq.Generate
    }
    const Kq = 4,
      Cq = 99,
      Iq = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      eq = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      Dq = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      qE = 12,
      EE = 16,
      gE = 4,
      YE = 12,
      lE = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      OE = 4,
      mE = 8,
      xE = 8,
      AE = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      cE = {
        Crit: 1,
        HitSelf: 2
      },
      uE = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      BE = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      WE = 12,
      NE = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      aE = 67108864;

    function VE(qq) {
      for (const [Eq, gq] of Object.entries(Yq.f))
        if (gq === qq) return Eq;
      return `Unknown${qq}`
    }

    function dE(qq) {
      return {
        status: qq[Yq.C.Status],
        lastError: qq[Yq.C.LastError],
        lastErrorDetail: qq[Yq.C.LastErrorDetail],
        errorCount: qq[Yq.C.ErrorCount],
        frameIndex: qq[Yq.C.FrameIndex],
        tickIndex: qq[Yq.C.TickIndex],
        renderPending: qq[Yq.C.RenderPending],
        firstView: qq[Yq.C.FirstView],
        chunksCancelled: qq[Yq.C.ChunksCancelled]
      }
    }
  },
  40369: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq,
      g: () => Bq,
      k: () => xq,
      l: () => Oq,
      o: () => lq,
      r: () => Aq,
      v: () => uq
    });
    class Yq extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function lq(qq) {
      return qq instanceof RangeError && /call stack/i.test(qq.message) || qq instanceof Error && "InternalError" === qq.name && /recursion/i.test(qq.message)
    }

    function Oq(qq) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(qq))
    }
    const mq = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function xq(qq) {
      var Eq;
      return qq instanceof WebAssembly.RuntimeError || qq instanceof Yq || lq(qq) && mq.test(null !== (Eq = qq.stack) && void 0 !== Eq ? Eq : "")
    }

    function Aq(qq, Eq) {
      if (xq(qq)) throw qq;
      console.error(Eq, qq)
    }

    function cq(qq, Eq, gq, lq, Oq) {
      if (Eq % lq !== 0 || Eq + gq > qq.byteLength) throw new Yq(`${Oq}: ${gq} bytes at ${Eq}, ${lq}-aligned, outside ${qq.byteLength} bytes of memory`)
    }

    function uq(qq, Eq, gq, Yq, lq) {
      return 0 === gq ? null : (cq(Eq, gq, Yq * qq.BYTES_PER_ELEMENT, qq.BYTES_PER_ELEMENT, lq), new qq(Eq, gq, Yq))
    }

    function Bq(qq, Eq, gq, Yq, lq) {
      return 0 === Eq ? null : (cq(qq, Eq, gq, Yq, lq), new DataView(qq, Eq, gq))
    }
  },
  40735: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Yq
    });
    const Yq = {
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
  40691: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => aq,
      h: () => Vq,
      i: () => Wq,
      k: () => Bq
    });
    const Yq = 2e3,
      lq = "unavailable";
    let Oq = () => Promise.resolve().then((() => gq(2859))),
      mq = null,
      xq = null,
      Aq = cq();

    function cq() {
      let qq = () => {};
      return {
        promise: new Promise((Eq => {
          qq = () => {
            Eq(null)
          }
        })),
        resolve: qq
      }
    }

    function uq() {
      if (null === mq) {
        const qq = Oq();
        mq = qq, qq.then((Eq => {
          mq === qq && (xq = Eq)
        }), (() => {
          mq === qq && (mq = null)
        }))
      }
      return mq
    }

    function Bq() {
      uq().catch((() => {}))
    }

    function Wq() {
      Aq.resolve()
    }

    function Nq(qq, Eq, gq, Yq) {
      if (null === qq) return {
        errorKind: Eq,
        fingerprint: lq,
        dedupe: `${Eq}|${Yq}`
      };
      const {
        fingerprint: Oq
      } = qq.clientErrorKey(Eq, gq, Yq);
      return {
        errorKind: Eq,
        fingerprint: Oq,
        dedupe: Oq
      }
    }

    function aq(qq, Eq, gq, Yq) {
      return null === xq ? Yq ? (Bq(), Nq(null, qq, Eq, gq)) : null : Nq(xq, qq, Eq, gq)
    }
    async function Vq(qq, Eq, gq) {
      let lq;
      const Oq = new Promise((qq => {
        lq = setTimeout((() => {
          qq(null)
        }), Yq)
      }));
      try {
        return Nq(await Promise.race([uq(), Oq, Aq.promise]), qq, Eq, gq)
      } catch {
        return Nq(null, qq, Eq, gq)
      } finally {
        clearTimeout(lq)
      }
    }
  },
  40687: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      BUILT_IN_ANIMATIONS_SITE: () => Fq,
      CORE_ERRORS_SITE: () => Tq,
      EVENT_OVERFLOW_SITE: () => Uq,
      FIRST_VIEW_SITE: () => Xq,
      JOIN_SITE: () => Sq,
      LEAVE_SITE: () => pq,
      MAIN_THREAD_SITE: () => wq,
      MODEL_FEED_SITE: () => Gq,
      MODEL_POOL_SITE: () => Lq,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => Cq,
      NON_FATAL_REPORTS_PER_SESSION: () => WE,
      PREVIEW_ANIMATIONS_SITE: () => Rq,
      RENDER_RELOAD_SITE: () => kq,
      TEXTURE_NAMES_SITE: () => Jq,
      TEXTURE_PACK_FEED_SITE: () => sq,
      TurnstilePageError: () => RE,
      WASM_LOAD_SITE: () => zq,
      crashError: () => jE,
      crashReportsSettled: () => tE,
      flushCrashReports: () => QE,
      joinFailureCode: () => UE,
      lokiTransport: () => Dq,
      modelFailureCode: () => IE,
      readTrap: () => bE,
      renderLossDetail: () => dg,
      renderReloadMessage: () => ag,
      reportCoreErrors: () => vE,
      reportCountedLoadFallback: () => JE,
      reportCrash: () => HE,
      reportDataLoadFailure: () => Qg,
      reportDisconnect: () => KE,
      reportDracoDecoderFailure: () => Eg,
      reportEventOverflow: () => lg,
      reportFirstViewNoTerrain: () => cg,
      reportGpuFallback: () => GE,
      reportGpuWasmPopulation: () => LE,
      reportLightFault: () => mg,
      reportMainStall: () => ug,
      reportMemoryShed: () => Ag,
      reportModelFailure: () => eE,
      reportModelPoolFailure: () => DE,
      reportModelsModuleRetry: () => qg,
      reportPageJoinFailure: () => sE,
      reportReconnectGaveUp: () => CE,
      reportRenderReload: () => Hg,
      reportReplayFault: () => Wg,
      reportStaleBuildReload: () => tg,
      reportStoppedCore: () => ME,
      reportTerrainTextureFailure: () => og,
      reportTexturePackFeedLoadFailure: () => Yg,
      reportUnstreamedCoreLoad: () => kE,
      reportUnsupportedFallback: () => SE,
      reportUnusedSeat: () => wE,
      reportWorkerLost: () => Og,
      reportWorkerStartTimeout: () => Bg,
      reportWorldgenGaveUp: () => xg,
      reportWorldgenLoadFailure: () => gg,
      resetCrashReports: () => rE,
      setCrashBackend: () => mE,
      setCrashScreen: () => lE,
      setCrashTransport: () => gE,
      showCrash: () => fE,
      showJoinFailure: () => FE,
      showUnsupported: () => zE
    });
    var Yq = gq(1046),
      lq = gq(263),
      Oq = gq(2865),
      mq = gq(40691),
      xq = gq(4622),
      Aq = gq(40697),
      cq = gq(3341),
      uq = gq(38724),
      Bq = gq(136),
      Wq = gq(660),
      Nq = gq(128),
      aq = gq(3347),
      Vq = gq(39012),
      dq = gq(1758),
      jq = gq(40659),
      Hq = gq(40325),
      oq = gq(40599),
      Pq = gq(40607),
      Qq = gq(39068),
      yq = gq(2797),
      tq = gq(2805),
      rq = gq(40700),
      vq = gq(40723),
      hq = gq(40731),
      nq = gq(36896),
      bq = gq(3122),
      iq = gq(36345),
      Zq = gq(40508),
      fq = gq(36356);
    const Mq = "[bloxd-wasm-client]",
      Tq = "coreErrors",
      zq = "wasmLoad",
      Sq = "join",
      pq = "leave",
      Gq = "modelFeed",
      Lq = "modelWorkerPool",
      Jq = "textureNames",
      kq = "renderReload",
      Rq = "previewAnimations",
      Uq = "eventOverflow",
      Fq = "builtInAnimations",
      sq = "texturePackFeed",
      Xq = "firstView",
      wq = "mainThread",
      Kq = 300,
      Cq = 8;
    let Iq = 0;
    const eq = new Set,
      Dq = (qq, Eq) => {
        const gq = xE[qq.kind];
        if (null === gq) return void qE(qq, Eq, OE, null);
        const Yq = (0, mq.d)(gq, qq.message, qq.code, qq.fatal);
        if (null !== Yq) return void qE(qq, Eq, OE, Yq);
        const lq = OE;
        PE("Loki", (async () => {
          qE(qq, Eq, lq, await (0, mq.h)(gq, qq.message, qq.code))
        }))
      };

    function qE(qq, Eq, gq, lq) {
      const {
        kind: mq,
        code: xq,
        site: Aq,
        fatal: cq,
        details: uq
      } = qq;
      if (!cq)
        if (null === lq || (0, Oq.d)(lq.errorKind) || eq.has(lq.dedupe)) {
          if (Iq >= Cq) return;
          Iq++
        } else eq.add(lq.dedupe);
      const Bq = {
        ...uq,
        kind: mq,
        code: xq,
        site: Aq,
        fatal: String(cq),
        backend: gq
      };
      null !== lq && (Bq.errorKind = lq.errorKind, Bq.fingerprint = lq.fingerprint), Eq instanceof Error && "string" === typeof Eq.stack && (Bq.causeStack = Eq.stack.slice(0, 2e3)), (0, Yq.lV)(jE(qq, Eq), Bq)
    }
    let EE = Dq;

    function gE(qq) {
      const Eq = EE;
      return EE = qq, Eq
    }
    let YE = () => {};

    function lE(qq) {
      const Eq = YE;
      return YE = qq, Eq
    }
    let OE = "unpicked";

    function mE(qq) {
      OE = qq
    }
    const xE = {
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
        mainStall: null,
        staleBuild: "wasm_load",
        disconnect: "disconnect",
        linkCensus: "wasm_load"
      },
      AE = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        mainStall: "wasm_load",
        gpuFallback: "wasm_load"
      },
      cE = new Set(["unstreamedLoad"]),
      uE = new Set(["linkCensus"]);
    let BE = !1;
    const WE = 20,
      NE = new Map;
    let aE = 0,
      VE = 0;
    const dE = new Set;

    function jE(qq, Eq) {
      const gq = Object.assign(new Error(`${qq.code}: ${qq.message}`), {
        name: "WasmClientCrash",
        cause: null !== Eq && void 0 !== Eq ? Eq : void 0
      });
      return Eq instanceof Error && Eq.stack && (gq.stack = Eq.stack), gq
    }

    function HE(qq) {
      var Eq, Yq;
      const {
        kind: lq,
        code: Oq,
        site: mq,
        fatal: xq,
        message: Aq,
        error: cq
      } = qq, uq = !1 !== qq.toTransport && !cE.has(lq), Bq = !xq && uq && !uE.has(lq), Wq = {
        kind: lq,
        code: Oq,
        site: mq,
        fatal: xq,
        message: Aq,
        details: null !== (Eq = qq.details) && void 0 !== Eq ? Eq : {}
      }, Nq = `${Oq}@${mq}${void 0===qq.instance?"":`#${qq.instance}`}${xq?"!":""}`, aq = (null !== (Yq = NE.get(Nq)) && void 0 !== Yq ? Yq : 0) + 1;
      if (NE.set(Nq, aq), aq > 1 ? 0 === (aq & aq - 1) && oE((() => {
          console.warn(`${Mq} ${Oq} at ${mq} reported ${aq} times`)
        })) : Bq && aE >= WE ? oE((() => {
          console.warn(`${Mq} ${lq} ${Oq} at ${mq}: ${Aq} (not sent: the session's ${WE} went)`, Wq.details, null !== cq && void 0 !== cq ? cq : "")
        })) : (Bq && aE++, function(qq, Eq, Yq) {
          var lq, Oq;
          const {
            kind: mq,
            code: xq,
            site: Aq,
            fatal: cq,
            message: uq,
            details: Bq
          } = qq;
          oE((() => {
            (cq ? console.error : console.warn)(`${Mq} ${mq} ${xq} at ${Aq}: ${uq}`, Bq, null !== Eq && void 0 !== Eq ? Eq : "")
          }));
          const Wq = AE[mq],
            Nq = null !== (lq = null !== (Oq = xE[mq]) && void 0 !== Oq ? Oq : Wq) && void 0 !== lq ? lq : null;
          null !== Nq && PE("counts", (async () => {
            const {
              peekVisitSessionId: qq
            } = await Promise.resolve().then((() => gq(623)));
            if (null !== qq()) {
              const {
                reportCappedWasmFailure: qq,
                reportUncappedWasmFailure: Eq,
                reportWasmFailure: Yq
              } = await gq.e(208).then((() => gq(36339)));
              (uE.has(mq) ? Eq : void 0 === Wq ? Yq : qq)(Nq, uq, xq), BE = !0
            }
          }));
          Yq && oE((() => {
            EE(qq, Eq)
          }))
        }(Wq, cq, uq)), xq) {
        var Vq;
        const Eq = null !== (Vq = qq.screen) && void 0 !== Vq ? Vq : {
          text: (0, nq.d)(Wq, !0),
          reload: !0
        };
        oE((() => {
          YE(Eq)
        }))
      }
      return Wq
    }

    function oE(qq) {
      try {
        qq()
      } catch (Eq) {
        try {
          console.warn(`${Mq} could not send a report`, Eq)
        } catch {}
      }
    }

    function PE(qq, Eq) {
      try {
        const gq = Eq().catch((Eq => {
          console.warn(`${Mq} could not send the report to ${qq}`, Eq)
        })).finally((() => {
          dE.delete(gq)
        }));
        dE.add(gq)
      } catch (gq) {
        console.warn(`${Mq} could not send the report to ${qq}`, gq)
      }
    }
    async function QE(qq) {
      let Eq;
      (0, mq.i)();
      const gq = new Promise((gq => {
        Eq = setTimeout(gq, qq)
      }));
      await Promise.race([yE(), gq]), clearTimeout(Eq)
    }
    async function yE() {
      if (await Promise.allSettled([...dE]), BE) try {
        const {
          flushClientAnalyticsEvents: qq
        } = await Promise.resolve().then((() => gq(1468)));
        await qq()
      } catch (qq) {
        console.warn(`${Mq} could not send the counts`, qq)
      }
    }
    async function tE() {
      for (; dE.size > 0;) await Promise.allSettled([...dE])
    }

    function rE() {
      NE.clear(), aE = 0, BE = !1, Iq = 0, eq.clear(), VE = 0, (0, Aq.m)()
    }

    function vE(qq, Eq, gq, Yq) {
      VE += Eq;
      for (const {
          code: cq,
          detail: uq
        }
        of qq) {
        var lq, Oq, mq;
        const qq = (0, xq.ne)(cq),
          Eq = (0, Aq.b)(cq, uq),
          Bq = null === Yq || void 0 === Yq ? void 0 : Yq(cq, uq),
          Wq = void 0 !== (null === Eq || void 0 === Eq ? void 0 : Eq.gpuDetails),
          aq = Wq ? null === (lq = (0, Nq.t)()) || void 0 === lq ? void 0 : lq.renderer : void 0,
          Vq = Wq ? ` ${(0,Aq.h)()}` : "",
          dq = Array.from([aq && `gpu ${(0,Aq.p)(aq)}`, Bq].filter(Boolean).join("; ")).slice(0, Kq).join(""),
          jq = `core error ${qq}${null!==(Oq=null===Eq||void 0===Eq?void 0:Eq.words)&&void 0!==Oq?Oq:""}${Vq}${dq?`: ${dq}`:""}`,
          Hq = {
            errorCode: String(cq),
            detail: String(uq),
            droppedBefore: String(VE),
            wasmBuild: gq.wasm,
            clientVersion: gq.client,
            ...null === Eq || void 0 === Eq ? void 0 : Eq.gpuDetails
          };
        null !== Eq && (0, Aq.l)(Eq) ? oE((() => {
          console.warn(`${Mq} coreError CORE-${qq}: ${jq} (not sent: the session's render warnings of its kind went)`, Hq)
        })) : HE({
          kind: nE(cq, uq),
          code: `CORE-${qq}`,
          site: Tq,
          fatal: !1,
          message: jq,
          details: Hq,
          instance: null !== (mq = null === Eq || void 0 === Eq ? void 0 : Eq.instance) && void 0 !== mq ? mq : hE(cq, uq)
        })
      }
    }

    function hE(qq, Eq) {
      return qq === xq.z.RenderDeviceLost && 0 !== (Eq & xq.I.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function nE(qq, Eq) {
      return qq === xq.z.JobsHeapGaveUp ? "meshHeap" : (0, Aq.f)(qq, Eq) ? "linkCensus" : "coreError"
    }

    function bE(qq) {
      return (0, iq.k)(qq instanceof Zq.c ? qq.trap : qq, yq.G, yq._)
    }
    const iE = "declined=js";

    function ZE(qq) {
      return qq ? {
        labels: [iE],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function fE(qq, Eq, gq) {
      return TE(qq, Eq, gq, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function ME(qq, Eq, gq) {
      return TE(qq, Eq, gq, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function TE(qq, Eq, gq, Yq, lq) {
      let {
        memoryDetails: Oq = {},
        declined: mq = !1
      } = Yq;
      const {
        code: xq,
        details: Aq,
        message: cq
      } = (0, jq.L)(qq, Eq), uq = [];
      Object.assign(Aq, (0, fq.e)(qq.error)), null !== gq && (Aq.trapKind = gq.kind, null !== gq.panic && (Aq.panic = (0, iq.j)(gq.panic)), gq.refusedBytes > 0 && (Aq.refusedAllocation = String(gq.refusedBytes)), uq.push((0, iq.l)(gq.kind, gq.refusedBytes)));
      const Bq = ZE(mq);
      return HE({
        kind: "crash",
        code: xq,
        site: qq.site,
        fatal: lq,
        message: [...uq, ...Bq.labels, cq].join("; "),
        details: {
          ...Aq,
          ...Bq.details,
          ...Oq
        },
        error: qq.error
      })
    }

    function zE(qq, Eq, gq) {
      return HE({
        kind: "unsupported",
        code: Eq,
        site: zq,
        fatal: !0,
        message: gq,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: qq,
          status: Eq
        },
        screen: {
          text: (0, nq.n)(qq),
          reload: "download" === qq
        }
      })
    }

    function SE(qq, Eq, gq) {
      return HE({
        kind: "unsupportedFallback",
        code: "blockedAfterLoss" === Eq ? "blocked_after_loss" : "unsupported_js_fallback",
        site: zq,
        fatal: !1,
        message: gq,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: qq,
          status: "unsupported",
          decline: Eq,
          fallback: "js"
        }
      })
    }
    const pE = "misdrawn_gpu_js_fallback";

    function GE(qq, Eq) {
      return HE({
        kind: "gpuFallback",
        code: pE,
        site: zq,
        fatal: !1,
        message: `the renderer plays ${qq} on ${Eq} worse than the JS client`,
        details: {
          gpuFamily: qq,
          backend: Eq,
          fallback: "js"
        }
      })
    }

    function LE(qq) {
      PE("counts", (async () => {
        await (0, Wq.e)(qq), BE = !0
      }))
    }

    function JE(qq, Eq, gq, Yq) {
      const lq = ZE(Yq);
      return HE({
        kind: "unsupported",
        code: Eq,
        site: zq,
        fatal: !1,
        message: [...lq.labels, gq].join("; "),
        details: {
          cause: qq,
          status: Eq,
          fallback: "js",
          ...lq.details
        }
      })
    }

    function kE() {
      const {
        code: qq,
        message: Eq
      } = bq.d;
      return HE({
        kind: "unstreamedLoad",
        code: qq,
        site: zq,
        fatal: !1,
        message: Eq
      })
    }
    class RE extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function UE(qq) {
      return qq instanceof oq.l ? 0 === qq.code ? "JOIN-matchmake" : `JOIN-${qq.code}` : qq instanceof oq.e ? 0 === qq.code ? `JOIN-${qq.stage}` : `JOIN-${qq.stage}-${qq.code}` : qq instanceof Hq.b ? "JOIN-gameCode" : qq instanceof RE ? "JOIN-turnstilePage" : qq instanceof oq.u ? "JOIN-trafficCheck" : qq instanceof Vq.f ? "JOIN-timeout" : "JOIN-network"
    }

    function FE(qq, Eq) {
      const gq = (0, fq.j)(qq),
        Yq = {
          wasmBuild: Eq.wasm,
          clientVersion: Eq.client
        },
        lq = qq instanceof RE ? {
          text: (0, nq.j)(),
          reload: !1
        } : void 0,
        Oq = (0, Pq.e)(qq),
        mq = "expected" !== Oq;
      return HE({
        kind: "join",
        code: UE(qq),
        site: Sq,
        fatal: !0,
        message: gq,
        details: Yq,
        error: qq,
        screen: lq,
        toTransport: mq,
        instance: Oq
      })
    }

    function sE(qq, Eq, gq) {
      var Yq;
      const lq = (0, Pq.e)(qq),
        Oq = {
          cause: (qq instanceof oq.e || qq instanceof oq.l) && null !== (Yq = qq.serverText) && void 0 !== Yq ? Yq : "",
          sinceJoinStart: (0, aq.b)(gq.sinceJoinStartMs),
          game: gq.game,
          ...(0, aq.h)(),
          wasmBuild: Eq.wasm,
          clientVersion: Eq.client
        };
      return HE({
        kind: "pageJoin",
        code: UE(qq),
        site: Sq,
        fatal: !1,
        message: (0, fq.j)(qq),
        details: Oq,
        error: qq,
        toTransport: "unrecognised" === lq,
        instance: lq
      })
    }
    const XE = {
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

    function wE(qq, Eq) {
      let {
        unused: gq,
        answered: Yq,
        heldMs: lq
      } = qq;
      const {
        code: Oq,
        message: mq
      } = XE[gq], xq = {
        unused: gq,
        answered: String(Yq),
        heldMs: String(lq),
        wasmBuild: Eq.wasm,
        clientVersion: Eq.client
      };
      return HE({
        kind: "seat",
        code: Oq,
        site: Sq,
        fatal: !1,
        message: mq,
        details: xq
      })
    }

    function KE(qq, Eq, gq) {
      var Yq;
      let lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (Yq = qq.name) && void 0 !== Yq ? Yq : String(qq.code);
      const Oq = {
          closeCode: String(qq.code),
          recognised: String(null !== qq.name),
          closeReason: gq.closeReason,
          sinceJoined: (0, aq.b)(gq.sinceJoinedMs),
          game: gq.game,
          ...(0, aq.h)(),
          wasmBuild: Eq.wasm,
          clientVersion: Eq.client
        },
        mq = null === qq.name && !(0, aq.c)(qq.code);
      return HE({
        kind: "disconnect",
        code: lq,
        site: pq,
        fatal: !1,
        message: "Left room",
        details: Oq,
        toTransport: mq
      })
    }

    function CE(qq, Eq) {
      const gq = {
        ...(0, cq.k)(qq),
        wasmBuild: Eq.wasm,
        clientVersion: Eq.client
      };
      return HE({
        kind: "disconnect",
        code: `reconnect-${qq.reason}`,
        site: Sq,
        fatal: !1,
        message: "Reconnect failed",
        details: gq
      })
    }

    function IE(qq) {
      return qq.error instanceof tq.g ? `MODEL-${qq.error.status}` : qq.error instanceof rq.g ? "MODEL-ring" : "MODEL-network"
    }

    function eE(qq, Eq) {
      const gq = IE(qq),
        Yq = `model file ${qq.file} ${qq.startup?"(startup) ":""}could not load`,
        lq = {
          file: String(qq.file),
          url: qq.url,
          wasmBuild: Eq.wasm,
          clientVersion: Eq.client
        };
      return HE({
        kind: qq.startup ? "model" : "modelLate",
        code: gq,
        site: Gq,
        fatal: qq.startup,
        message: Yq,
        details: lq,
        error: qq.error
      })
    }

    function DE(qq, Eq) {
      const gq = {
        wasmBuild: Eq.wasm,
        clientVersion: Eq.client
      };
      return HE({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: Lq,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: gq,
        error: qq
      })
    }

    function qg(qq, Eq, gq) {
      const Yq = {
        delayMs: String(Eq),
        wasmBuild: gq.wasm,
        clientVersion: gq.client
      };
      qq instanceof tq.g && (Yq.status = String(qq.status));
      return HE({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: Lq,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: Yq,
        error: qq
      })
    }

    function Eg(qq, Eq) {
      const gq = {
        wasmBuild: Eq.wasm,
        clientVersion: Eq.client
      };
      return HE({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: Lq,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: gq,
        error: qq
      })
    }

    function gg(qq, Eq) {
      const gq = {
        wasmBuild: Eq.wasm,
        clientVersion: Eq.client
      };
      return HE({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: jq.G,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: gq,
        error: qq
      })
    }

    function Yg(qq, Eq) {
      const gq = {
        wasmBuild: Eq.wasm,
        clientVersion: Eq.client
      };
      return HE({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: sq,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: gq,
        error: qq
      })
    }

    function lg(qq, Eq) {
      const {
        frames: gq,
        acks: Yq,
        mask: lq,
        outcome: Oq
      } = qq, mq = {
        frames: String(gq),
        acks: String(Yq),
        mask: String(lq),
        outcome: null !== Oq && void 0 !== Oq ? Oq : "resynced",
        wasmBuild: Eq.wasm,
        clientVersion: Eq.client
      };
      return HE({
        kind: "recovered",
        code: "rejoined" === Oq ? "CORE-eventOverflowRejoin" : "failed" === Oq ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: Uq,
        fatal: !1,
        message: `the event buffer refused records in ${gq} frames`,
        details: mq
      })
    }

    function Og(qq, Eq, gq) {
      return HE({
        kind: "recovered",
        code: "CORE-workerLost",
        site: qq,
        fatal: !1,
        message: `a ${qq} worker was lost`,
        details: {
          reason: Eq,
          wasmBuild: gq.wasm,
          clientVersion: gq.client
        }
      })
    }

    function mg(qq, Eq, gq) {
      const Yq = {
        wasmBuild: gq.wasm,
        clientVersion: gq.client
      };
      return HE({
        kind: "recovered",
        code: qq,
        site: jq.s,
        fatal: !1,
        message: Eq,
        details: Yq
      })
    }

    function xg(qq, Eq) {
      const gq = {
        lastReason: qq,
        wasmBuild: Eq.wasm,
        clientVersion: Eq.client
      };
      return HE({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: jq.G,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: gq
      })
    }

    function Ag(qq, Eq, gq) {
      return HE({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: jq.r,
        fatal: !1,
        message: (0, Qq.k)(qq) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: qq,
          ...Eq,
          wasmBuild: gq.wasm,
          clientVersion: gq.client
        }
      })
    }

    function cg(qq, Eq, gq, Yq) {
      var lq, Oq;
      const mq = (0, Aq.j)(),
        xq = {
          game: qq,
          cause: Eq,
          census: null === gq ? "none" : JSON.stringify(gq),
          gpu: null !== (lq = null === (Oq = (0, Nq.t)()) || void 0 === Oq ? void 0 : Oq.renderer) && void 0 !== lq ? lq : "",
          renderWarned: String(mq),
          browser: (0, Aq.h)(),
          wasmBuild: Yq.wasm,
          clientVersion: Yq.client
        },
        cq = `first view drew no whole terrain in ${vq.d/1e3} s, ${Eq}${mq?", render warned":""}`;
      return HE({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: Xq,
        fatal: !1,
        message: cq,
        details: xq
      })
    }

    function ug(qq, Eq, gq) {
      var Yq, Oq, mq;
      const xq = null !== (Yq = (0, lq.f)(null !== (Oq = null === (mq = (0, Nq.n)()) || void 0 === mq ? void 0 : mq.renderer) && void 0 !== Oq ? Oq : null, (0, Nq.j)())) && void 0 !== Yq ? Yq : "unknown",
        cq = null === Eq ? "untimed" : `${Math.round(Eq)} ms`,
        uq = `frames stalled, gpu ${(0,Aq.p)(xq)}, blocking ${cq}, drawn ${Math.round(qq)} ms apart`,
        Bq = {
          gpuModel: xq,
          wasmBuild: gq.wasm,
          clientVersion: gq.client
        };
      return HE({
        kind: "mainStall",
        code: "CORE-mainStall",
        site: wq,
        fatal: !1,
        message: uq,
        details: Bq
      })
    }

    function Bg(qq, Eq, gq) {
      return HE({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: qq,
        fatal: !1,
        message: `a ${qq} worker did not start`,
        details: {
          waitedMs: String(Math.round(Eq)),
          wasmBuild: gq.wasm,
          clientVersion: gq.client
        }
      })
    }

    function Wg(qq, Eq, gq) {
      return HE({
        kind: "recovered",
        code: "CORE-replayFault",
        site: qq,
        fatal: !1,
        message: `the replay's ${qq} failed`,
        details: {
          wasmBuild: gq.wasm,
          clientVersion: gq.client
        },
        error: Eq
      })
    }
    const Ng = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function ag(qq, Eq, gq) {
      const Yq = "lost" === Eq && void 0 !== gq ? ` (${gq})` : "";
      return `the ${qq} ${Ng[Eq]}${Yq}`
    }
    const Vg = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };

    function dg(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now();
      const lq = null === gq.boundAtMs ? "unbound" : `up${(0,uq.h)(Yq-gq.boundAtMs)}`,
        Oq = null === gq.adapter ? "no adapter" : (0, uq.p)(gq.adapter),
        mq = `${(0,dq.g)()?"hidden":"visible"} ${lq} ${Oq}${!0===gq.indirectHangs?" ih":""}`;
      if ("pipeline_failed" === qq) return `${qq} ${mq}`;
      const xq = null === Eq || void 0 === Eq ? void 0 : Eq.message;
      return `${Eq instanceof dq.f?"timeout":(0,uq.q)("frames_refused"===qq,"string"===typeof xq?xq:"")} ${mq}`
    }
    const jg = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function Hg(qq, Eq, Yq) {
      var Oq, mq, xq, cq, Wq;
      let {
        cause: Nq = "lost",
        error: aq,
        context: Vq = Vg,
        session: dq = jg
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const jq = dg(Nq, aq, Vq),
        Hq = {
          losses: String(Eq),
          cause: Nq,
          detail: jq,
          vendor: null !== (Oq = null === (mq = Vq.adapter) || void 0 === mq ? void 0 : mq.vendor) && void 0 !== Oq ? Oq : "",
          architecture: null !== (xq = null === (cq = Vq.adapter) || void 0 === cq ? void 0 : cq.architecture) && void 0 !== xq ? xq : "",
          indirectHangs: String(Vq.indirectHangs),
          samples: String(dq.samples),
          sunShadows: String(dq.sunShadows),
          renderDistance: String(dq.renderDistance),
          gpuFamily: null !== (Wq = (0, lq.b)()) && void 0 !== Wq ? Wq : "",
          browser: (0, Aq.h)(),
          siteUsed: Bq.n,
          wasmBuild: Yq.wasm,
          clientVersion: Yq.client
        },
        oq = ag(qq, Nq),
        Pq = HE({
          kind: "recovered",
          code: "CORE-renderLost",
          site: kq,
          fatal: !1,
          message: oq,
          details: Hq,
          error: aq
        });
      return PE("ga", (async () => {
        const {
          logError: Eq
        } = await Promise.resolve().then((() => gq(2834))), Yq = `${uq.e["webgpu"===qq?"WebGPU":"WebGL2"]}\n Error: ${jq}`;
        Eq("warning", Yq), Eq("error", Yq)
      })), Pq
    }

    function og(qq, Eq) {
      var gq, Yq;
      const lq = null === qq.name ? "TEXTURE-sources" : null === qq.url ? "TEXTURE-nourl" : qq.error instanceof hq.d ? `TEXTURE-${qq.error.status}` : "TEXTURE-network",
        Oq = null === qq.name ? "terrain textures could not load" : `terrain texture ${qq.name} could not load`,
        mq = {
          texture: null !== (gq = qq.name) && void 0 !== gq ? gq : "",
          url: null !== (Yq = qq.url) && void 0 !== Yq ? Yq : "",
          wasmBuild: Eq.wasm,
          clientVersion: Eq.client
        };
      return HE({
        kind: "terrainTexture",
        code: lq,
        site: jq.D,
        fatal: !1,
        message: Oq,
        details: mq,
        error: qq.error
      })
    }
    const Pg = {
      previewAnimations: {
        site: Rq,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: Fq,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function Qg(qq, Eq, gq, Yq) {
      const {
        site: lq,
        prefix: Oq,
        name: mq
      } = Pg[qq], {
        stage: xq,
        error: Aq
      } = gq;
      return HE({
        kind: qq,
        code: "decode" === xq ? null === Aq ? `${Oq}-decode` : `${Oq}-trap` : Aq instanceof tq.g ? `${Oq}-${Aq.status}` : `${Oq}-network`,
        site: lq,
        fatal: !1,
        message: "decode" === xq ? `${mq} did not decode` : `${mq} could not load`,
        details: {
          url: Eq,
          wasmBuild: Yq.wasm,
          clientVersion: Yq.client
        },
        error: Aq
      })
    }
    const yg = "staleBuild";

    function tg(qq, Eq, gq) {
      const Yq = {
          failedSite: qq.site,
          url: qq.url,
          from: qq.from,
          sameBuild: String(qq.from === Eq),
          reloadMs: String(Math.max(0, Date.now() - qq.at)),
          wasmBuild: gq.wasm,
          clientVersion: gq.client
        },
        lq = `reloaded into a newer build after ${qq.site} failed to load: ${qq.error}`;
      return HE({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: yg,
        fatal: !1,
        message: lq,
        details: Yq
      })
    }
  },
  40723: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Oq,
      d: () => lq,
      g: () => mq
    });
    var Yq = gq(4625);
    const lq = 3e4;
    class Oq {
      constructor(qq) {
        this.SN = qq, this.waitedMs = 0, this.lastMs = null
      }
      frame(qq, Eq) {
        if (Eq) return !0;
        const gq = null === this.lastMs ? 0 : qq - this.lastMs;
        return this.lastMs = qq, gq <= 900 && (this.waitedMs += gq), !(this.waitedMs < lq) && (this.SN(), !0)
      }
    }

    function mq(qq, Eq) {
      return 0 === (qq & Yq.O.ChunkRequested) ? "no_chunk_request" : 0 === (qq & Yq.O.ChunkStored) ? "chunk_not_stored" : 0 === (qq & Yq.O.MeshLanded) ? "not_meshed" : null === Eq ? "no_frame_drawn" : 0 === Eq.terrainParts ? "no_terrain_parts" : Eq.terrainCompiling > 0 ? "terrain_compiling" : Eq.terrainOpaque + Eq.terrainTransparent === 0 ? "terrain_not_drawn" : "view_incomplete"
    }
  },
  4616: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => mq,
      e: () => Oq,
      g: () => lq
    });
    var Yq = gq(4622);

    function lq(qq) {
      return "none" !== qq
    }

    function Oq(qq, Eq) {
      if (!qq) return "none";
      switch (Eq) {
        case Yq.Y.Drawn:
          return "drawn";
        case Yq.Y.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function mq(qq) {
      return "drawn" === qq
    }
  },
  40325: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq,
      c: () => jq,
      e: () => Vq,
      f: () => dq,
      i: () => Wq,
      j: () => Nq,
      k: () => uq,
      n: () => Bq,
      q: () => aq
    });
    class Yq extends Error {
      constructor(qq) {
        super(`the join's code did not load: ${qq instanceof Error?qq.message:String(qq)}`, {
          cause: qq
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === qq || void 0 === qq ? void 0 : qq.request
      }
    }
    let lq = null,
      Oq = null,
      mq = null;
    const xq = [];
    let Aq = null;

    function cq(qq, Eq) {
      try {
        qq(Eq)
      } catch (gq) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", gq)
      }
    }

    function uq() {
      return Aq
    }

    function Bq(qq) {
      xq.push(qq), null !== Aq && cq(qq, Aq)
    }

    function Wq(qq) {
      return lq ??= Promise.all([gq.e(70), gq.e(95), gq.e(216), gq.e(75), gq.e(217), gq.e(190), gq.e(94), gq.e(235), gq.e(261), gq.e(188), gq.e(263), gq.e(200), gq.e(187), gq.e(201), gq.e(137), gq.e(86), gq.e(115), gq.e(239), gq.e(54)]).then((() => gq(42335))).then((Eq => {
        Eq.loadAudio(qq), Aq = Eq;
        for (const qq of xq) cq(qq, Eq);
        return Eq
      })).catch((qq => {
        throw lq = null, qq
      })), lq
    }
    async function Nq(qq, Eq) {
      try {
        const gq = await Wq(qq);
        await gq.loadClientGame(Eq)
      } catch (gq) {
        throw new Yq(gq)
      }
    }

    function aq(qq, Eq) {
      Oq = {
        running: qq,
        shell: Eq
      }
    }

    function Vq() {
      return mq
    }
    async function dq(qq) {
      const Eq = Oq;
      if ((null === Eq || void 0 === Eq ? void 0 : Eq.running) !== qq) throw new Error("the core's session has ended");
      const gq = await Wq(Eq.shell.audio).catch((qq => {
        throw new Yq(qq)
      }));
      if (null !== mq) return mq;
      if (Oq !== Eq || qq.isStopped) throw new Error("the core stopped while the game code loaded");
      if (mq = gq.startGameHost(qq, Eq.shell), null === mq) throw new Error("the core's shared tables didn't read, so the game can't start");
      return mq
    }

    function jq() {
      null !== mq && (null !== Aq ? Aq.endGameHost(mq) : mq.closeGame()), mq = null, Oq = null
    }
  },
  40599: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => cq,
      h: () => Oq,
      j: () => mq,
      k: () => lq,
      l: () => Nq,
      o: () => uq,
      p: () => Aq,
      t: () => Wq,
      u: () => Bq,
      y: () => xq
    });
    var Yq = gq(1763);
    const lq = new Uint8Array([12]),
      Oq = 2e3,
      mq = 257;

    function xq(qq) {
      const Eq = new Uint8Array(4);
      return new DataView(Eq.buffer).setUint32(0, qq, !0), Eq
    }
    class Aq extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class cq extends Error {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(qq), this.stage = Eq, this.code = gq, this.serverText = Yq, this.name = "JoinError"
      }
    }
    class uq extends Error {
      constructor(qq) {
        super(qq), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class Bq extends Error {
      constructor(qq) {
        super((0, Yq.d)(qq), {
          cause: qq
        }), this.name = "TrafficCheckError"
      }
    }
    class Wq extends Error {
      constructor(qq, Eq, gq) {
        super(qq, {
          cause: gq
        }), this.networkLost = Eq, this.name = "SeatRequestError"
      }
    }
    class Nq extends Error {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(qq), this.code = Eq, this.serverText = gq, this.name = "MatchmakeError"
      }
    }
  },
  40607: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Wq,
      e: () => Bq
    });
    var Yq = gq(2538),
      lq = gq(3347),
      Oq = gq(39012),
      mq = gq(40590),
      xq = gq(40599),
      Aq = gq(40613);
    const cq = "seat reservation expired.",
      uq = "early_leave";

    function Bq(qq) {
      if (qq instanceof Oq.f) return "expected";
      if (qq instanceof xq.t) return qq.networkLost ? "expected" : "unrecognised";
      if (qq instanceof xq.e) {
        if ("closed" === qq.stage && (0 === qq.code || (0, lq.c)(qq.code))) return "expected";
        if ("roomError" === qq.stage && (qq.serverText === cq || qq.serverText === uq)) return "expected"
      }
      return qq instanceof xq.e || qq instanceof xq.l ? null === (0, mq.j)(qq.code).name ? "unrecognised" : "known" : (0, Yq.f)(qq) ? "expected" : qq instanceof xq.u || qq instanceof Aq.g ? "known" : "unrecognised"
    }

    function Wq(qq) {
      return qq instanceof Oq.f ? "timedOut" : "expected" !== Bq(qq) || (0, Yq.f)(qq) || qq instanceof xq.e && 1001 === qq.code ? void 0 : "failed"
    }
  },
  39068: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => hq,
      g: () => Qq,
      k: () => Bq,
      l: () => yq,
      n: () => jq,
      q: () => rq,
      w: () => vq
    });
    var Yq = gq(36350),
      lq = gq(36528);
    const Oq = 64 * Yq.d,
      mq = 40 * Yq.g,
      xq = 36 * Yq.g,
      Aq = 20 * Yq.g,
      cq = 2 * Yq.g,
      uq = 5 * Yq.g;

    function Bq(qq) {
      return "footprint" !== qq
    }
    const Wq = 2 * Yq.g,
      Nq = 4 * Yq.g,
      aq = 35 * Yq.g + Wq + Nq,
      Vq = 6.5 * Yq.g,
      dq = 132.5 * Yq.d;

    function jq(qq) {
      const Eq = Vq + (0, lq.i)(qq) + qq * dq;
      return Math.ceil((2 * aq + Eq) / Oq) * Oq
    }
    const Hq = jq(lq.c),
      oq = (Yq.g, Yq.g, Yq.g, {
        targetBytes: mq,
        leastBytes: Aq
      }),
      Pq = {
        targetBytes: xq,
        leastBytes: Aq
      };

    function Qq(qq) {
      return {
        targetBytes: qq,
        leastBytes: 0
      }
    }

    function yq(qq) {
      return qq >= lq.c ? oq : Pq
    }
    const tq = 2 * Oq;

    function rq(qq, Eq, gq) {
      return qq + Eq + tq > (null !== gq && void 0 !== gq ? gq : Hq)
    }
    const vq = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? qq => {
        requestIdleCallback(qq)
      } : null
    };
    class hq {
      constructor(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : vq;
        this.memory = qq, this.readPeakStoredChunks = Eq, this.onError = gq, this.clock = Yq, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(qq, Eq, gq) {
        this.shedding = {
          shed: qq,
          SN: Eq,
          readDistanceInUse: gq
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(qq) {
        this.footprint = qq
      }
      setCeiling(qq) {
        this.ceilingBytes = qq, this.call((() => {
          this.memory.setCeiling(qq)
        }), void 0)
      }
      ceilingMayRefuse(qq) {
        return rq(this.memory.memoryBytes(), qq, this.ceilingBytes)
      }
      reserveAtJoin(qq) {
        let {
          targetBytes: Eq,
          leastBytes: gq
        } = qq;
        const Yq = this.memory.memoryBytes(),
          lq = Yq + gq,
          Oq = Math.max(Eq + (this.ballastOn() ? uq : 0), lq),
          mq = this.call((() => this.memory.reserveUpFront(Oq) ? "target" : Oq > lq && this.memory.reserveUpFront(lq) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== mq) {
          const qq = "least" === mq ? `took ${lq} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${Oq} bytes was refused at ${Yq} bytes; ${qq}`)
        }
        return this.joinReserveTaken = mq, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== mq && this.shedFor("joinReserve"), "none" !== mq
      }
      afterFrame() {
        if (this.stopped) return;
        const qq = this.clock.now(),
          Eq = null !== this.stepsHeldUntil && qq >= this.stepsHeldUntil;
        if (Eq && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && qq >= this.ballastCheckAt && (this.takeBallast(qq), this.stopped)) return;
        const gq = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          Yq = Eq && "now" === gq ? "none" : gq,
          {
            requestIdle: lq
          } = this.clock;
        "now" === Yq || null !== this.pendingSince && qq - this.pendingSince >= 500 ? this.step() : "idle" === Yq && null === this.pendingSince && (null === lq ? this.step() : (this.pendingSince = qq, lq((() => {
          null !== this.pendingSince && this.step()
        })))), qq - this.statsAt >= 1e3 && (this.statsAt = qq, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var qq, Eq;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (Eq = this.shedding.readDistanceInUse()) && void 0 !== Eq ? Eq : this.distanceInUse);
          null === (qq = this.footprint) || void 0 === qq || qq.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(qq, Eq) {
        this.noteWorker(`Mesh${qq}`, Eq)
      }
      meshWorkerGone(qq) {
        this.workerGone(`Mesh${qq}`)
      }
      noteWorldgen(qq) {
        this.noteWorker("Worldgen", qq)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(qq, Eq) {
        const gq = this.workers.get(qq);
        null !== gq && void 0 !== gq && gq.gone && (this.replacedRefusals.reserves += gq.stats.reservesRefused, this.replacedRefusals.allocations += gq.stats.allocationsRefused), this.workers.set(qq, {
          stats: Eq,
          gone: !1
        })
      }
      workerGone(qq) {
        const Eq = this.workers.get(qq);
        Eq && (Eq.gone = !0)
      }
      details() {
        var qq, Eq;
        const gq = {
          wasmMemoryNow: `${(0,Yq.k)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (gq.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (gq.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const lq = this.main;
        if (lq) {
          gq.wasmMemoryMain = nq(lq);
          const qq = Math.max(0, lq.peakLiveBytes - this.ballastPeakBytes),
            Eq = 0 === this.peakStoredChunks ? "-" : (qq / this.peakStoredChunks / Yq.d).toFixed(1);
          gq.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${Eq} KiB`
        }
        for (const [Yq, {
            stats: mq,
            gone: xq
          }] of this.workers) gq[`wasmMemory${Yq}`] = nq(mq) + (xq ? " (gone)" : "");
        const Oq = null !== (qq = null === (Eq = this.footprint) || void 0 === Eq ? void 0 : Eq.describe()) && void 0 !== qq ? qq : null;
        return null !== Oq && (gq.wasmMemoryFootprint = Oq), gq
      }
      pageKillSnapshot() {
        var qq, Eq, gq, lq, Oq;
        let mq = (null !== (qq = null === (Eq = this.main) || void 0 === Eq ? void 0 : Eq.reservesRefused) && void 0 !== qq ? qq : 0) + this.replacedRefusals.reserves,
          xq = (null !== (gq = null === (lq = this.main) || void 0 === lq ? void 0 : lq.allocationsRefused) && void 0 !== gq ? gq : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: Yq
          }
          of this.workers.values()) mq += Yq.reservesRefused, xq += Yq.allocationsRefused;
        return {
          wasmMainMiB: Number((0, Yq.k)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, Yq.k)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: mq,
          refusedAllocations: xq,
          sheds: this.sheds,
          ...null === (Oq = this.footprint) || void 0 === Oq ? void 0 : Oq.snapshot()
        }
      }
      workersMemoryBytes() {
        let qq = 0;
        for (const {
            stats: Eq,
            gone: gq
          }
          of this.workers.values()) qq += gq ? 0 : Eq.memoryBytes;
        return qq
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(cq)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(qq) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = qq + 1e3;
        const Eq = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, Eq)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(qq) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${qq}: frames grow on demand from here`)
      }
      shedFor(qq) {
        const {
          shedding: Eq
        } = this;
        if (null === Eq) return;
        this.pendingSince = null;
        const gq = this.call((() => Eq.shed(qq)), null);
        this.stopped || (null !== gq ? (this.sheds++, this.shedCap = gq, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), Eq.SN(qq, this.sheds, this.details())) : Bq(qq) && this.stopSteps("nothing is left to shed"))
      }
      call(qq, Eq) {
        if (this.stopped) return Eq;
        try {
          return qq()
        } catch (gq) {
          return this.stop(), this.onError(gq), Eq
        }
      }
    }

    function nq(qq) {
      const Eq = (qq, Eq) => `${qq}/${(0,Yq.k)(Eq)}`;
      return `memory ${(0,Yq.k)(qq.memoryBytes)} live ${(0,Yq.k)(qq.liveBytes)} peak ${(0,Yq.k)(qq.peakLiveBytes)} unused ${(0,Yq.k)(qq.unusedBytes)} ceiling ${(0,Yq.k)(qq.ceilingBytes)} MiB; grows upFront ${Eq(qq.grows.upFront,qq.grownBytes.upFront)} ahead ${Eq(qq.grows.ahead,qq.grownBytes.ahead)} inFrame ${Eq(qq.grows.onDemandInFrame,qq.grownBytes.onDemandInFrame)} other ${Eq(qq.grows.onDemand,qq.grownBytes.onDemand)}; refused reserves ${qq.reservesRefused} allocations ${qq.allocationsRefused}`
    }
  },
  40700: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Aq,
      c: () => cq,
      e: () => Nq,
      g: () => Bq
    });
    var Yq = gq(2805),
      lq = gq(4622),
      Oq = gq(40707),
      mq = gq(40714),
      xq = gq(36356);
    const Aq = 395,
      cq = 2147483648,
      uq = new Uint8Array(0);
    class Bq extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class Wq extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class Nq {
      constructor(qq, Eq, gq) {
        var Yq, lq, mq, xq;
        let Aq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = qq, this.build = Eq, this.onFailure = gq, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.jN = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (Yq = Aq.fetchFile) && void 0 !== Yq ? Yq : qq => (0, Oq.i)(qq), this.onWritten = null !== (lq = Aq.onWritten) && void 0 !== lq ? lq : null, this.onTaken = null !== (mq = Aq.onTaken) && void 0 !== mq ? mq : null, this.onPackFileFailed = null !== (xq = Aq.onPackFileFailed) && void 0 !== xq ? xq : null, this.startupLeft = new Set(qq.startup);
        for (const Oq of qq.startup) this.request(Oq)
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
      drawnUrl(qq) {
        return this.drawn.get(qq)
      }
      request(qq) {
        const Eq = this.pending.get(qq);
        if (!0 === (null === Eq || void 0 === Eq ? void 0 : Eq.ask)) return;
        const gq = this.gN(qq, !0);
        gq.recheck = void 0 !== Eq;
        const Yq = this.drawn.get(qq);
        if (void 0 !== Yq) return gq.Fc = !0, gq.recheck = !0, void this.fetch(qq, gq, Yq);
        this.fetchWanted(qq, gq)
      }
      async refresh() {
        const qq = ++this.refreshes,
          Eq = new Set;
        for (const mq of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const qq of mq) 0 === (qq & Oq.h) && Eq.add(qq);
        const gq = [...Eq];
        let Yq;
        try {
          Yq = await Promise.all(gq.map((qq => this.wanted(qq))))
        } catch {
          return null
        }
        if (qq !== this.refreshes) return null;
        const lq = {
          resent: 0,
          refetched: 0,
          delivered: gq.filter((qq => this.drawn.has(qq))).length
        };
        return gq.forEach(((qq, Eq) => {
          const {
            url: gq,
            inPlaceOf: Oq
          } = Yq[Eq], mq = this.pending.get(qq);
          if (void 0 !== mq) {
            if (mq.Fc || void 0 === mq.url) return void(mq.recheck = !0);
            if (mq.url === gq) return;
            lq.refetched++;
            const Eq = this.gN(qq, mq.ask);
            return Eq.recheck = mq.recheck, void this.fetch(qq, Eq, gq, Oq)
          }
          const xq = this.written.get(qq);
          void 0 === xq ? this.drawn.get(qq) !== (null !== gq && void 0 !== gq ? gq : void 0) && (lq.resent++, this.fetch(qq, this.gN(qq, !1), gq, Oq)) : xq.url !== (null !== gq && void 0 !== gq ? gq : "") && (xq.attempt.recheck = !0)
        })), lq
      }
      taken(qq, Eq) {
        const gq = new Set,
          Yq = new Set;
        for (const lq of Array.from(Eq)) 0 === (lq & cq) ? gq.add(lq) : Yq.add((lq & ~cq) >>> 0);
        for (const [lq, Oq] of this.written) Oq.seq > qq || (this.written.delete(lq), gq.has(Oq.seq) ? this.refusedFile(lq, Oq) : this.takenFile(lq, Oq, !Oq.empty && !Yq.has(Oq.seq)))
      }
      takenFile(qq, Eq, gq) {
        const {
          attempt: Yq
        } = Eq;
        if (gq) {
          var lq;
          this.drawn.set(qq, Eq.url), this.undrawn.delete(qq), void 0 !== Yq.inPlaceOf ? this.refusedPack.set(qq, Yq.inPlaceOf) : Yq.Fc || this.refusedPack.delete(qq), null === (lq = this.onTaken) || void 0 === lq || lq.call(this, qq, !0);
          const gq = this.pending.get(qq);
          if (!0 === (null === gq || void 0 === gq ? void 0 : gq.Fc) && gq.url !== Eq.url) {
            const gq = this.gN(qq, !0);
            gq.Fc = !0, gq.recheck = !0, this.fetch(qq, gq, Eq.url)
          }
        } else {
          var Oq;
          this.drawn.has(qq) || this.undrawn.add(qq), null === (Oq = this.onTaken) || void 0 === Oq || Oq.call(this, qq, !1)
        }
        Yq.recheck && this.resendIfChanged(qq)
      }
      refusedFile(qq, Eq) {
        var gq, Yq;
        if (null === (gq = this.onTaken) || void 0 === gq || gq.call(this, qq, !1), this.refusedPack.set(qq, Eq.url), this.pending.has(qq)) return void(null === (Yq = this.onPackFileFailed) || void 0 === Yq || Yq.call(this, qq, aq(Eq.url)));
        const lq = this.gN(qq, Eq.attempt.ask);
        lq.recheck = Eq.attempt.recheck, this.afterRefusal(qq, lq, Eq.url)
      }
      async afterRefusal(qq, Eq, gq) {
        var Yq;
        let lq;
        try {
          lq = await this.wanted(qq)
        } catch (Oq) {
          return void(this.pending.get(qq) === Eq && this.giveUp(qq, Eq, gq, Oq))
        }
        this.pending.get(qq) === Eq && (lq.inPlaceOf !== gq ? Eq.ask || (null !== (Yq = lq.url) && void 0 !== Yq ? Yq : void 0) !== this.drawn.get(qq) ? this.fetch(qq, Eq, lq.url, lq.inPlaceOf) : this.pending.delete(qq) : this.fallBack(qq, Eq, gq, aq(gq)))
      }
      gN(qq, Eq) {
        const gq = {
          url: void 0,
          ask: Eq,
          Fc: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(qq, gq);
        for (let Yq = this.ready.length - 1; Yq >= 0; Yq--) this.ready[Yq].file === qq && this.ready.splice(Yq, 1);
        return gq
      }
      async wanted(qq) {
        const Eq = await this.files.url(qq);
        return null !== Eq && this.refusedPack.get(qq) === Eq ? {
          url: await this.files.shippedUrl(qq),
          inPlaceOf: Eq
        } : {
          url: Eq,
          inPlaceOf: void 0
        }
      }
      fetchWanted(qq, Eq) {
        const gq = this.files.url(qq);
        gq instanceof Promise ? gq.then((gq => {
          this.fetchFound(qq, Eq, gq)
        }), (gq => {
          this.pending.get(qq) === Eq && this.giveUp(qq, Eq, "", gq)
        })) : this.fetchFound(qq, Eq, gq)
      }
      fetchFound(qq, Eq, gq) {
        null !== gq && this.refusedPack.get(qq) === gq ? Promise.resolve(this.files.shippedUrl(qq)).then((Yq => {
          this.fetch(qq, Eq, Yq, gq)
        }), (Yq => {
          this.pending.get(qq) === Eq && this.giveUp(qq, Eq, gq, Yq)
        })) : this.fetch(qq, Eq, gq)
      }
      fetch(qq, Eq, gq, Yq) {
        this.pending.get(qq) === Eq && (Eq.url = gq, Eq.inPlaceOf = Yq, null !== gq ? this.load(qq, Eq, gq) : this.buildFile(qq, Eq, "", uq))
      }
      load(qq, Eq, gq) {
        const Yq = this.jN.get(qq);
        (null === Yq || void 0 === Yq ? void 0 : Yq.url) !== gq ? this.fetchFile(gq).then((Yq => {
          var lq, Oq;
          this.pending.get(qq) === Eq && (this.keptTotal += Yq.byteLength - (null !== (lq = null === (Oq = this.jN.get(qq)) || void 0 === Oq ? void 0 : Oq.glb.byteLength) && void 0 !== lq ? lq : 0), this.jN.set(qq, {
            url: gq,
            glb: Yq
          }), this.buildFile(qq, Eq, gq, Yq))
        }), (Yq => {
          this.pending.get(qq) === Eq && this.fallBack(qq, Eq, gq, Yq)
        })) : this.buildFile(qq, Eq, gq, Yq.glb)
      }
      buildFile(qq, Eq, gq, Yq) {
        let lq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const mq = Yq.byteLength > 0 && (0, Oq.l)(gq) ? (qq | Oq.d) >>> 0 : qq;
        this.queueRecord(qq, Eq, gq, Yq, this.build(mq, Yq), lq)
      }
      queueRecord(qq, Eq, gq, Yq, Oq, xq) {
        Oq.then((Oq => {
          if (this.pending.get(qq) !== Eq) return;
          if (lq.m + (0, lq.Ce)(Oq.byteLength) > lq.Lc) return void this.ringRefused(qq, Eq, gq, new Bq(`${Vq(gq)}'s record is ${Oq.byteLength-mq.c} bytes, past the cmd ring's ${lq.Lc}`), xq);
          const Aq = {
            file: qq,
            url: gq,
            payload: Oq,
            glb: Yq,
            attempt: Eq
          };
          xq ? this.ready.unshift(Aq) : this.ready.push(Aq)
        }))
      }
      async fallBack(qq, Eq, gq, Yq) {
        var lq;
        let Oq = null,
          mq = Yq;
        try {
          Oq = await this.files.shippedUrl(qq)
        } catch (xq) {
          mq = xq
        }
        this.pending.get(qq) === Eq && (null !== Oq && Oq !== gq ? (null === (lq = this.onPackFileFailed) || void 0 === lq || lq.call(this, qq, Yq), Eq.ask || this.drawn.get(qq) !== Oq ? (Eq.url = Oq, Eq.inPlaceOf = gq, this.load(qq, Eq, Oq)) : this.pending.delete(qq)) : this.giveUp(qq, Eq, gq, mq))
      }
      ringRefused(qq, Eq, gq, Yq) {
        let lq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, Oq.l)(gq) ? this.fallBack(qq, Eq, gq, Yq): this.giveUp(qq, Eq, gq, Yq, lq)
      }
      giveUp(qq, Eq, gq, lq) {
        let Oq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: qq,
          url: Vq(gq),
          error: lq,
          startup: this.startupLeft.has(qq)
        }), Eq.ask || !this.drawn.has(qq) ? (0, Yq.W)(lq) ? this.queueRecord(qq, Eq, gq, uq, Promise.resolve((0, mq.l)(qq, (0, xq.j)(lq))), Oq) : this.buildFile(qq, Eq, gq, uq, Oq) : this.pending.delete(qq)
      }
      async resendIfChanged(qq) {
        var Eq;
        if (0 !== (qq & Oq.h)) return;
        let gq;
        try {
          gq = await this.wanted(qq)
        } catch {
          return
        }(null !== (Eq = gq.url) && void 0 !== Eq ? Eq : void 0) === this.drawn.get(qq) || this.pending.has(qq) || this.written.has(qq) || this.fetch(qq, this.gN(qq, !1), gq.url, gq.inPlaceOf)
      }
      drain(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === qq) return;
        let gq = 0,
          Yq = 0;
        for (; Yq < this.ready.length && gq < 262144;) {
          const xq = this.ready[Yq];
          if (this.written.has(xq.file)) {
            Yq++;
            continue
          }
          const uq = this.nextSeq;
          new DataView(xq.payload.buffer, xq.payload.byteOffset, xq.payload.byteLength).setUint32(mq.f, uq, !0);
          const Wq = xq.attempt.Fc && xq.glb.byteLength > 0 && this.drawn.get(xq.file) === xq.url;
          if (qq(Aq, Wq ? 1 : 0, xq.payload)) {
            if (this.nextSeq = uq >= cq - 1 ? 1 : uq + 1, this.ready.splice(Yq, 1), gq += xq.payload.byteLength, this.pending.delete(xq.file), this.startupLeft.delete(xq.file), this.written.set(xq.file, {
                seq: uq,
                url: xq.url,
                empty: 0 === xq.glb.byteLength,
                attempt: xq.attempt
              }), xq.glb.byteLength > 0) try {
              var lq;
              null === (lq = this.onWritten) || void 0 === lq || lq.call(this, xq.file, xq.glb)
            } catch (Oq) {
              console.warn("ModelFeed: reading the file's images failed", Oq)
            }
          } else {
            if (null === Eq || 0 === xq.glb.byteLength || Eq(xq.payload.byteLength)) return;
            this.ready.splice(Yq, 1);
            const qq = new Bq(`${Vq(xq.url)}'s record is ${xq.payload.byteLength-mq.c} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(xq.file, xq.attempt, xq.url, qq, !0)
          }
        }
      }
    }

    function aq(qq) {
      return new Wq(`presentation refused ${Vq(qq)}`)
    }

    function Vq(qq) {
      return qq.startsWith("data:") ? `${qq.slice(0,Math.min(Math.max(qq.indexOf(","),5),64))},...` : qq
    }
  },
  40707: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => mq,
      h: () => Oq,
      i: () => uq,
      l: () => xq,
      o: () => cq,
      s: () => Aq
    });
    var Yq = gq(2805),
      lq = gq(3108);
    const Oq = 2147483648,
      mq = 1073741824;

    function xq(qq) {
      return qq.startsWith("data:")
    }

    function Aq(qq) {
      let {
        onTableFailed: Eq,
        packUrl: gq
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Yq = cq();
      Yq.catch((qq => {
        null === Eq || void 0 === Eq || Eq(qq)
      }));
      const lq = async Eq => (await Yq).fileUrl((Eq & ~Oq) >>> 0, qq);
      return {
        startup: [],
        url: async qq => {
          if (gq && 0 === (qq & Oq)) {
            const Eq = await Yq,
              lq = Eq.filePackName(qq),
              Oq = null === lq || "lifeform" === Eq.fileSource(qq) ? null : gq(lq);
            if (null !== Oq) return Oq
          }
          return lq(qq)
        },
        shippedUrl: lq
      }
    }

    function cq() {
      return gq.e(41).then((() => gq(43131)))
    }
    async function uq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return qq.startsWith("data:") ? (0, lq.d)(qq.slice(qq.indexOf(",") + 1), Eq) : (0, Yq.P)(qq, {
        spare: Eq
      })
    }
  },
  40714: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => cq,
      f: () => uq,
      g: () => Nq,
      k: () => dq,
      l: () => aq,
      o: () => Wq,
      s: () => Vq
    });
    const Yq = 826427981,
      lq = 1,
      Oq = 2,
      mq = 44,
      xq = 46,
      Aq = 58,
      cq = 8,
      uq = 4;

    function Bq(qq, Eq, gq) {
      const lq = (new TextEncoder).encode(gq),
        Oq = cq + 4 * (Eq.length + 2),
        mq = new Uint8Array(Oq + (lq.byteLength + 3 & -4)),
        xq = new DataView(mq.buffer);
      return xq.setUint32(0, qq, !0), xq.setUint32(cq, Yq, !0), Eq.forEach(((qq, Eq) => {
        xq.setUint32(cq + 4 * (Eq + 1), qq, !0)
      })), xq.setUint32(Oq - 4, lq.byteLength, !0), mq.set(lq, Oq), mq
    }

    function Wq(qq, Eq) {
      return Bq(qq, [Oq], Eq)
    }

    function Nq(qq, Eq) {
      return Bq(qq, [lq, xq], Eq)
    }

    function aq(qq, Eq) {
      return Bq(qq, [lq, Aq], Eq)
    }

    function Vq(qq, Eq) {
      return Bq(qq, [lq, mq], Eq)
    }

    function dq(qq) {
      const Eq = cq;
      if (qq.byteLength < Eq + 12) return !1;
      const gq = new DataView(qq.buffer, qq.byteOffset, qq.byteLength);
      return gq.getUint32(Eq, !0) === Yq && gq.getUint32(Eq + 4, !0) === lq && gq.getUint32(Eq + 8, !0) === mq
    }
  },
  40697: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Qq,
      f: () => dq,
      h: () => Pq,
      j: () => vq,
      l: () => rq,
      m: () => hq,
      p: () => Hq
    });
    var Yq = gq(4625),
      lq = gq(40551);
    const Oq = 1,
      mq = 18,
      xq = 19,
      Aq = 20,
      cq = {
        [Oq]: "link",
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
        [mq]: "retry linked",
        [xq]: "fallback linked",
        [Aq]: "fallback failed",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function uq(qq, Eq, gq) {
      return qq === mq ? "program retry" : qq === Oq ? "program link" : qq === xq || qq === Aq ? `program ${Eq} ${gq}` : "program"
    }
    const Bq = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      Wq = {
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
      Nq = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      aq = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld"
      },
      Vq = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function dq(qq, Eq) {
      return qq === Yq.f.RenderSerialLinks && void 0 !== Vq[15 & Eq]
    }
    const jq = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function Hq(qq) {
      return String(qq).replace(/\d/g, (qq => String.fromCharCode(97 + Number(qq))))
    }

    function oq(qq, Eq) {
      var gq;
      return null !== (gq = qq[Eq]) && void 0 !== gq ? gq : Hq(Eq)
    }

    function Pq() {
      return Hq((0, lq.c)())
    }

    function Qq(qq, Eq) {
      switch (qq) {
        case Yq.f.RenderSceneRowNotDrawn:
          return {
            words: ` ${oq(Wq,Eq)}`, instance: String(Eq), group: String(qq)
          };
        case Yq.f.RenderChunkMeshNotDrawn: {
          const gq = 0 === (128 & Eq) ? "" : " shortage",
            Yq = Eq >>> 8;
          return {
            words: ` ${oq(Nq,127&Eq)}${gq}${0===Yq?"":` kind ${Hq(Yq)}`}`,
            instance: String(Eq),
            group: String(qq)
          }
        }
        case Yq.f.RenderInternal: {
          const gq = oq(Bq, 255 & Eq),
            Yq = Eq >>> 8 & 255;
          if (0 === Yq) return {
            words: ` ${gq}`,
            instance: String(Eq),
            group: String(qq)
          };
          const lq = oq(cq, Yq),
            Oq = Eq >>> 16;
          return {
            words: ` ${gq} ${lq} program ${Hq(Oq)}`,
            instance: `${gq} ${lq} ${Oq}`,
            group: uq(Yq, lq, gq),
            gpuDetails: {
              programFailure: lq,
              program: String(Oq)
            }
          }
        }
        case Yq.f.RenderSerialLinks: {
          if (dq(qq, Eq)) {
            const qq = function(qq) {
              const Eq = (Eq, gq) => Hq(qq >>> Eq & (1 << gq) - 1),
                gq = qq >>> 30 & 1 ? " restored" : "";
              return `link census ${Vq[15&qq]} linked ${Eq(22,8)} failed ${Eq(4,6)} retried ${Eq(10,6)} fallback ${Eq(16,6)}${gq}`
            }(Eq);
            return {
              words: ` ${qq}`,
              instance: String(15 & Eq),
              group: "link census",
              gpuDetails: {
                linkCensus: qq
              }
            }
          }
          const gq = oq(aq, Eq);
          return {
            words: ` ${gq}`,
            instance: String(Eq),
            group: String(qq),
            gpuDetails: {
              serialLinks: gq
            }
          }
        }
        case Yq.f.RenderGlErrorAfterRestore: {
          const gq = oq(jq, 65535 & Eq),
            Yq = Eq >>> 16,
            lq = 65535 !== Yq;
          return {
            words: ` ${gq}${lq?` program ${Hq(Yq)}`:""}`,
            instance: String(Eq),
            group: String(qq),
            gpuDetails: lq ? {
              glError: gq,
              program: String(Yq)
            } : {
              glError: gq
            }
          }
        }
        default:
          return null
      }
    }
    const yq = 2,
      tq = new Map;

    function rq(qq) {
      let {
        group: Eq,
        instance: gq
      } = qq, Yq = tq.get(Eq);
      return void 0 === Yq && (Yq = [], tq.set(Eq, Yq)), !Yq.includes(gq) && (Yq.length >= yq || (Yq.push(gq), !1))
    }

    function vq() {
      return tq.size > 0
    }

    function hq() {
      tq.clear()
    }
  },
  40613: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => jq,
      g: () => Hq,
      h: () => dq,
      k: () => yq
    });
    var Yq = gq(6521),
      lq = gq(31),
      Oq = gq(4155),
      mq = gq(4625),
      xq = gq(6517),
      Aq = gq(40622);

    function cq(qq, Eq) {
      const gq = (0, xq.b)(Eq.variants);
      return qq.setShaderPack(gq.variantFlags, gq.hooks, gq.moduleCodes, (0, Aq.x)(Eq.layers), Aq.j[Eq.Oc], Eq.keepCircleShadows)
    }
    const uq = 0,
      Bq = 1,
      Wq = 2,
      Nq = "shaderPack:failedToCompile",
      aq = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      Vq = new Set(["not_requested", "off_after_loss", "gpu_class_webgl"]);

    function dq(qq, Eq) {
      var gq;
      const Yq = null !== (gq = null === qq || void 0 === qq ? void 0 : qq.reason) && void 0 !== gq ? gq : "none";
      return aq.has(Yq) ? {
        messageKey: Eq ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === Yq && "override" === (null === qq || void 0 === qq ? void 0 : qq.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: Vq.has(Yq) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    const jq = {
      messageKey: "shaderPack:failedDeviceGraphics",
      noAdapter: !1
    };
    class Hq extends Error {
      constructor(qq) {
        super(`the shader pack can't run in this game: ${qq}`), this.messageKey = qq, this.name = "ShaderPackJoinError"
      }
    }
    const oq = "strict";
    class Pq {
      constructor(qq) {
        this.deps = qq, this.pagePack = void 0, this.loaded = null, this.Oc = oq, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = qq.load().catch((Eq => (qq.warn("the shader pack could not load: the game draws without it", Eq), {
          status: "none"
        }))).then((qq => (this.loaded = qq, "active" === qq.status && (this.handOverToPreviews(qq), null !== qq.harnessPolicy && (this.Oc = qq.harnessPolicy, this.handOver())), qq)))
      }
      async join(qq) {
        this.leave();
        const Eq = this.game,
          [gq, lq] = await Promise.all([this.pagePack, this.policyOf(qq)]);
        if (Eq !== this.game || "none" === gq.status) return null;
        const Oq = "active" === gq.status ? gq.pack.variants : gq.variants,
          mq = (0, Yq.g)(Oq, lq);
        if (mq && "active" === gq.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (mq) {
          const qq = this.cantRun(gq, lq);
          if (null !== qq) return qq
        } else if ("blocked" === gq.status || null === this.deps.core) return null;
        return this.Oc = lq, this.handOver(), mq && this.refused ? Nq : (this.joined = !0, this.offInThisGame = !mq, null)
      }
      async replay(qq) {
        const Eq = await this.join(qq);
        null === Eq ? this.playable() : this.deps.failInGame(Eq)
      }
      cantRun(qq, Eq) {
        const {
          core: gq,
          noWebGpu: Yq
        } = this.deps;
        if ("blocked" === qq.status) {
          return "shaderPack:failedUnchecked" === qq.messageKey && null === gq && Yq.noAdapter ? Yq.messageKey : qq.messageKey
        }
        return this.refused || this.failedPolicies.has(Eq) ? Nq : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var qq;
        return this.runsInJoinedGame() && "active" === (null === (qq = this.loaded) || void 0 === qq ? void 0 : qq.status) ? function(qq, Eq) {
          const gq = qq.filter((qq => (0, Yq.g)([qq], Eq))),
            lq = qq => gq.some((Eq => Eq[qq]));
          return {
            sceneDepth: lq("sceneDepth"),
            sunShadow: lq("sunShadow"),
            airShadow: lq("airShadow")
          }
        }(this.loaded.pack.variants, this.Oc) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(Nq) : (null !== this.couldntRun ? this.notify(Oq.b, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.Oc) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(qq) {
        for (const {
            code: Eq,
            detail: gq
          }
          of qq)
          if (Eq === mq.f.RenderShaderPackNotRun) switch (255 & gq) {
            case uq:
              this.refused = !0, this.failed();
              break;
            case Bq:
              this.failedPolicies.add(this.Oc), this.failed();
              break;
            case Wq:
              this.failedModelPolicies.add(this.Oc), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(Nq) : this.failedWhileJoining = !0)
      }
      fail(qq) {
        this.leave(), this.deps.failInGame(qq)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(qq, Eq) {
        const gq = this.game;
        this.deps.notify(qq, (() => gq === this.game && this.joined), Eq)
      }
      handOver() {
        var qq;
        const {
          core: Eq
        } = this.deps;
        null !== Eq && "active" === (null === (qq = this.loaded) || void 0 === qq ? void 0 : qq.status) && (cq(Eq, {
          ...this.loaded.pack,
          Oc: this.Oc
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(qq) {
        let {
          pack: Eq,
          harnessPolicy: gq
        } = qq;
        const {
          previews: Yq
        } = this.deps;
        null !== Yq && cq(Yq, {
          ...Eq,
          Oc: null !== gq && void 0 !== gq ? gq : oq
        })
      }
      policyOf(qq) {
        return this.deps.policyOf(qq).catch((qq => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", qq), oq)))
      }
    }
    const Qq = "wasmShaderPackNotice";

    function yq(qq, Eq, gq, Yq) {
      return lq.i.subscribe(Qq, (qq => {
        let {
          translationKey: Eq,
          stillCurrent: gq,
          reasonKey: Yq
        } = qq;
        gq() && lq.i.TV("chat", (0, Oq.h)(Eq, Yq))
      })), new Pq({
        load: tq,
        policyOf: rq,
        core: qq,
        previews: Eq,
        noWebGpu: gq,
        notify: (qq, Eq, gq) => {
          const Yq = {
            translationKey: qq,
            stillCurrent: Eq,
            reasonKey: gq
          };
          lq.i.TV(Qq, Yq, !0)
        },
        failInGame: qq => {
          lq.i.TV(Oq.e, qq)
        },
        warn: Yq
      })
    }
    async function tq() {
      const [{
        shaderPackPage: qq,
        harnessShaderPackMode: Eq
      }, {
        shaderPackTextures: Yq
      }] = await Promise.all([gq.e(130).then((() => gq(39158))), gq.e(131).then((() => gq(6514)))]), lq = await qq.load();
      return "active" !== lq.status ? lq : {
        status: "active",
        pack: {
          variants: lq.pack.variants,
          layers: Yq().layers,
          keepCircleShadows: lq.pack.keepCircleShadows
        },
        harnessPolicy: Eq()
      }
    }
    async function rq(qq) {
      var Eq;
      const [{
        harnessShaderPackMode: Yq
      }, {
        getShaderPackPolicy: lq
      }] = await Promise.all([gq.e(130).then((() => gq(39158))), gq.e(90).then((() => gq(40997)))]);
      return null !== (Eq = Yq()) && void 0 !== Eq ? Eq : lq(qq)
    }
  },
  40731: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => xq,
      e: () => dq,
      h: () => Aq,
      k: () => cq,
      m: () => uq,
      n: () => Wq
    });
    var Yq = gq(40733),
      lq = gq(40735);
    const Oq = "atlas:",
      mq = 3e4;
    class xq extends Error {
      constructor(qq, Eq) {
        super(`fetching ${qq} answered HTTP ${Eq}`), this.url = qq, this.status = Eq, this.name = "TerrainTextureFetchError"
      }
    }

    function Aq(qq) {
      if (!qq.startsWith(Oq)) return null;
      const Eq = Number(qq.slice(Oq.length));
      return Number.isInteger(Eq) && Eq >= 0 ? Eq : null
    }
    async function cq() {
      const qq = await gq.e(202).then((() => gq(34302)));
      return {
        atlasSheets: qq.blockAtlasUrls,
        texture: Eq => {
          var gq, Yq, Oq;
          return null !== (gq = null !== (Yq = null !== (Oq = qq.animatedBlockTextures[Eq]) && void 0 !== Oq ? Oq : qq.rotatedBlockTextures[Eq]) && void 0 !== Yq ? Yq : lq.c[Eq]) && void 0 !== gq ? gq : null
        }
      }
    }
    async function uq(qq) {
      const Eq = new AbortController,
        gq = setTimeout((() => {
          Eq.abort(new DOMException(`${qq} took over ${mq} ms`, "TimeoutError"))
        }), mq);
      let Yq;
      try {
        const gq = await fetch(qq, {
          signal: Eq.signal
        });
        if (!gq.ok) throw new xq(qq, gq.status);
        Yq = await gq.blob()
      } finally {
        clearTimeout(gq)
      }
      const lq = await createImageBitmap(Yq, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return Wq(lq)
      } finally {
        lq.close()
      }
    }
    const Bq = 8192;

    function Wq(qq) {
      const {
        width: Eq,
        height: gq
      } = qq, lq = Math.max(1, Math.min(gq, Bq)), Oq = (0, Yq.f)(Eq, lq, {
        willReadFrequently: !0
      });
      if (!Oq) throw new Error("no 2D context to read the texture back");
      Oq.globalCompositeOperation = "copy";
      const mq = new Uint8Array(Eq * gq * 4);
      for (let Yq = 0; Yq < gq; Yq += lq) {
        const xq = Math.min(lq, gq - Yq);
        Oq.drawImage(qq, 0, Yq, Eq, xq, 0, 0, Eq, xq), mq.set(Oq.getImageData(0, 0, Eq, xq).data, Yq * Eq * 4)
      }
      return {
        width: Eq,
        height: gq,
        pixels: mq
      }
    }
    async function Nq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uq;
      const Yq = [],
        lq = await Promise.all(qq.map((async qq => {
          var lq, mq;
          const xq = null !== (lq = null === (mq = Eq.decoded) || void 0 === mq ? void 0 : mq.call(Eq, qq)) && void 0 !== lq ? lq : null,
            cq = null === xq ? function(qq, Eq) {
              if (qq.startsWith(Oq)) {
                var gq;
                const Yq = Aq(qq);
                return null === Yq ? null : null !== (gq = Eq.atlasSheets[Yq]) && void 0 !== gq ? gq : null
              }
              return Eq.texture(qq)
            }(qq, Eq) : null,
            uq = null !== xq && void 0 !== xq ? xq : null === cq ? null : gq(cq);
          if (null === uq) return Yq.push({
            name: qq,
            url: cq,
            error: new Error(`no URL for terrain texture ${qq}`)
          }), null;
          try {
            const Eq = await uq;
            if (Eq.pixels.byteLength !== Eq.width * Eq.height * 4) throw new Error(`decoded ${Eq.pixels.byteLength} bytes for ${Eq.width}x${Eq.height} texels`);
            return {
              name: qq,
              texture: Eq
            }
          } catch (Bq) {
            return Yq.push({
              name: qq,
              url: cq,
              error: Bq
            }), null
          }
        }))),
        mq = lq.filter((qq => null !== qq)),
        xq = new Uint32Array(2 * mq.length);
      mq.forEach(((qq, Eq) => {
        let {
          texture: gq
        } = qq;
        xq[2 * Eq] = gq.width, xq[2 * Eq + 1] = gq.height
      }));
      return {
        handOver: {
          names: mq.map((qq => {
            let {
              name: Eq
            } = qq;
            return Eq
          })),
          textures: mq.map((qq => {
            let {
              texture: Eq
            } = qq;
            return Eq.pixels
          })),
          sizes: xq
        },
        failures: Yq
      }
    }
    const aq = [2e3, 1e4, 3e4, 6e4, 12e4];

    function Vq() {}
    class dq {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aq,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = qq, this.retryMs = Eq, this.keepBelow = gq, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cq,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Yq = ++this.started,
          lq = {
            decode: gq.decode,
            wholeAtlas: gq.wholeAtlas
          };
        return this.loadAndHandOver(Eq, lq, qq, (() => {
          var qq;
          return Yq < this.landed || !1 === (null === (qq = gq.wanted) || void 0 === qq ? void 0 : qq.call(gq))
        }), {
          onTaken: (qq, gq) => {
            this.landed = Yq, this.current = {
              mine: Yq,
              sources: Eq,
              load: lq,
              jN: qq,
              failed: gq
            }
          }
        })
      }
      restore(qq) {
        var Eq;
        const gq = this.current;
        if (null === gq) return Promise.resolve(null);
        if ((null === (Eq = this.restoring) || void 0 === Eq ? void 0 : Eq.mine) === gq.mine) return this.restoring.done;
        const Yq = {
          mine: gq.mine,
          done: this.restoreLanded(gq, qq).finally((() => {
            this.restoring === Yq && (this.restoring = null)
          }))
        };
        return this.restoring = Yq, Yq.done
      }
      async restoreLanded(qq, Eq) {
        const gq = () => this.landed !== qq.mine,
          {
            jN: Yq
          } = qq;
        if (null !== Yq) return this.stopped() ? null : this.core.setTerrainTextures(Yq.names, Yq.textures, Yq.sizes);
        let lq = Eq;
        for (let Oq = 0;; Oq++) {
          const Eq = this.retryMs.at(Oq),
            Yq = {
              allOrNothingExcept: void 0 === Eq ? void 0 : qq.failed
            },
            mq = await this.loadAndHandOver(qq.sources, qq.load, lq, gq, Yq);
          if (!1 !== mq || void 0 === Eq || this.stopped()) return mq;
          if (lq = Vq, await new Promise((qq => {
              setTimeout(qq, Eq)
            })), gq()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(qq, Eq, gq, Yq) {
        let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const Oq = this.core.terrainTextureNames();
        var mq;
        if (0 === Oq.length) return null === (mq = lq.onTaken) || void 0 === mq || mq.call(lq, null, new Set), !0;
        let xq, cq;
        try {
          xq = await qq(), cq = await Nq(Oq, xq, Eq.decode)
        } catch (dq) {
          return Yq() ? null : (gq({
            name: null,
            url: null,
            error: dq
          }), !1)
        }
        if (Yq() || this.stopped()) return null;
        for (const Aq of cq.failures) gq(Aq);
        const uq = lq.allOrNothingExcept;
        if (void 0 !== uq && cq.failures.some((qq => {
            let {
              name: Eq
            } = qq;
            return null === Eq || !uq.has(Eq)
          })) || !0 === Eq.wholeAtlas && cq.failures.some((qq => {
            let {
              name: Eq
            } = qq;
            return null === Eq || null !== Aq(Eq)
          }))) return !1;
        const {
          handOver: Bq
        } = cq, Wq = function(qq) {
          return qq.textures.reduce(((qq, Eq) => qq + Eq.byteLength), 0)
        }(Bq) < this.keepBelow, aq = this.core.setTerrainTextures(Bq.names, Bq.textures, Bq.sizes, Wq ? void 0 : () => {
          !async function(qq, Eq) {
            await Eq;
            for (const {
                buffer: Yq
              }
              of qq) {
              const qq = Yq;
              var gq;
              if (!qq.detached) null === (gq = qq.transfer) || void 0 === gq || gq.call(qq, 0)
            }
          }(Bq.textures, xq.heldUntil)
        });
        if (aq) {
          var Vq;
          const qq = new Set(cq.failures.flatMap((qq => {
            let {
              name: Eq
            } = qq;
            return null === Eq ? [] : [Eq]
          })));
          null === (Vq = lq.onTaken) || void 0 === Vq || Vq.call(lq, Wq ? Bq : null, qq)
        }
        return aq
      }
    }
  },
  36896: (qq, Eq, gq) => {
    function Yq(qq) {
      return "fetch" === qq || "timeout" === qq || "integrity" === qq ? "download" : "browser"
    }
    gq.d(Eq, {
      b: () => lq,
      d: () => mq,
      h: () => Aq,
      j: () => xq,
      m: () => Yq,
      n: () => Oq
    });
    const lq = "https://discord.gg/playbloxd";

    function Oq(qq) {
      return "download" === qq ? {
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

    function mq(qq, Eq) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: Eq ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: qq.code
        },
        discordLink: Eq,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function xq() {
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

    function Aq(qq, Eq, gq) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: gq ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: qq.reason
        },
        discordLink: null === qq.name,
        confirm: Eq ? "general:reconnect" : qq.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  6517: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Pq,
      f: () => Qq,
      j: () => Hq,
      l: () => jq
    });
    var Yq = gq(6521);
    const lq = 6,
      Oq = 3,
      mq = 1,
      xq = 2,
      Aq = 4,
      cq = 8,
      uq = 16,
      Bq = 32,
      Wq = 64,
      Nq = 128,
      aq = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Vq(qq) {
      if (!qq) return 0;
      const Eq = aq.indexOf(qq);
      if (Eq <= 0) throw new Error(`"${qq}" is not a shader pack hook function`);
      return Eq
    }

    function dq(qq) {
      if (0 === qq) return null;
      const Eq = aq[qq];
      if (void 0 === Eq) throw new Error(`${qq} is not a shader pack hook function id`);
      return Eq
    }

    function jq(qq) {
      const Eq = Yq.b.length;
      return {
        strict: qq >= Eq,
        program: Yq.b[qq % Eq]
      }
    }

    function Hq(qq) {
      return Number(qq.strict) * Yq.b.length + Yq.b.indexOf(qq.program)
    }

    function oq(qq) {
      return "" === qq ? [] : qq.split(" ")
    }

    function Pq(qq) {
      const Eq = {
        variantFlags: new Uint8Array(lq),
        hooks: new Uint8Array(lq * Oq),
        moduleCodes: Array(lq).fill(""),
        reads: Array(2 * lq).fill("")
      };
      for (const gq of qq) {
        const qq = Hq(gq.key),
          Yq = (qq, Eq) => null === gq.hooks.surface || gq.reads.fragment.includes(qq) ? 0 : Eq;
        Eq.variantFlags[qq] = (gq.sceneDepth ? mq : 0) | (gq.movesVertices ? xq : 0) | (gq.sunShadow ? Aq : 0) | (gq.airShadow ? cq : 0) | (gq.discards ? uq : 0) | Yq("localPosition", Bq) | Yq("enchantSpeed", Wq) | Yq("enchantTier", Nq), Eq.hooks[qq * Oq] = Vq(gq.hooks.vertex), Eq.hooks[qq * Oq + 1] = Vq(gq.hooks.surface), Eq.hooks[qq * Oq + 2] = Vq(gq.hooks.light), Eq.moduleCodes[qq] = gq.moduleCode, Eq.reads[2 * qq] = gq.reads.vertex.join(" "), Eq.reads[2 * qq + 1] = gq.reads.fragment.join(" ")
      }
      return Eq
    }

    function Qq(qq) {
      const {
        hooks: Eq,
        moduleCodes: gq,
        reads: Yq
      } = qq;
      return Array.from(qq.variantFlags, ((qq, lq) => {
        const Bq = lq * Oq;
        return {
          key: jq(lq),
          hooks: {
            vertex: dq(Eq[Bq]),
            surface: dq(Eq[Bq + 1]),
            light: dq(Eq[Bq + 2])
          },
          moduleCode: gq[lq],
          sceneDepth: 0 !== (qq & mq),
          sunShadow: 0 !== (qq & Aq),
          airShadow: 0 !== (qq & cq),
          movesVertices: 0 !== (qq & xq),
          discards: 0 !== (qq & uq),
          reads: {
            vertex: oq(Yq[2 * lq]),
            fragment: oq(Yq[2 * lq + 1])
          }
        }
      }))
    }
  },
  40622: (qq, Eq, gq) => {
    gq.d(Eq, {
      B: () => Nq,
      D: () => aq,
      b: () => lq,
      c: () => Yq,
      e: () => Wq,
      g: () => uq,
      j: () => dq,
      l: () => Oq,
      n: () => xq,
      r: () => Aq,
      v: () => mq,
      x: () => Vq
    });
    const Yq = 3,
      lq = 0,
      Oq = 1,
      mq = 2,
      xq = {
        uniform: 3,
        dW: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Aq = 10,
      cq = "BloxdPackInputs",
      uq = "bloxdPackInputs",
      Bq = [{
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
      Wq = 80;

    function Nq() {
      const qq = Bq.map((qq => {
        let {
          name: Eq,
          type: gq
        } = qq;
        return `    ${Eq}: ${gq},\n`
      })).join("");
      return `struct ${cq} {\n${qq}}\n@group(${Yq}) @binding(${lq}) var<uniform> ${uq}: ${cq};\n`
    }

    function aq(qq, Eq) {
      const gq = new DataView(qq, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Wq),
        [Yq, lq, Oq, mq, xq, Aq] = Bq;
      gq.setFloat32(Yq.offset, Eq.seconds, !0), gq.setUint32(lq.offset, Eq.lit ? 1 : 0, !0);
      for (let cq = 0; cq < 3; cq++) gq.setInt32(Oq.offset + 4 * cq, Eq.renderOffset[cq], !0), gq.setFloat32(mq.offset + 4 * cq, Eq.vqq[cq], !0), gq.setFloat32(xq.offset + 4 * cq, Eq.eyePosition[cq], !0), gq.setFloat32(Aq.offset + 4 * cq, Eq.shadowDirection[cq], !0)
    }

    function Vq(qq) {
      const Eq = new Uint32Array(Math.max(1, qq.length));
      return qq.forEach(((qq, gq) => {
        let {
          id: Yq,
          rotation: lq
        } = qq;
        Eq[gq] = 65535 & Yq | (3 & lq) << 16
      })), Eq
    }
    const dq = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6521: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq,
      d: () => mq,
      g: () => xq,
      j: () => lq,
      m: () => Oq
    });
    const Yq = ["terrain", "liquid", "model"];

    function lq() {
      const qq = [];
      for (const Eq of [!1, !0])
        for (const gq of Yq) qq.push({
          strict: Eq,
          program: gq
        });
      return qq
    }

    function Oq(qq) {
      return `${qq.strict?"strict":"allow"}.${qq.program}`
    }

    function mq(qq) {
      return !qq.hooks.vertex && !qq.hooks.surface && !qq.hooks.light
    }

    function xq(qq, Eq) {
      return "off" !== Eq && (null === qq || qq.some((qq => qq.key.strict === ("strict" === Eq) && !mq(qq))))
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);