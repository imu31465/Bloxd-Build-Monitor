export const id = 86;
export const ids = [86];
export const modules = {
  38072: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Tb,
      g: () => Bb,
      j: () => eb,
      k: () => Yb,
      o: () => Eb
    });
    const Ab = "A valid external Instance reference no longer exists.",
      Mb = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ];
    const Tb = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function Eb(bb, ab) {
      return bb ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(bb) {
        var ab;
        const Ub = null !== (ab = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(bb)) && void 0 !== ab ? ab : /failed with ([A-Z][A-Z0-9_]+)/.exec(bb);
        return Ub ? Ub[1] : bb.includes(Ab) ? "gpu_process_lost" : "other"
      }(ab)
    }

    function Yb(bb) {
      return `${(null===bb||void 0===bb?void 0:bb.vendor)||"unknown vendor"} ${(null===bb||void 0===bb?void 0:bb.architecture)||"unknown architecture"}`
    }

    function Bb(bb) {
      return vb(bb)[1]
    }

    function eb(bb) {
      return vb(bb)[2]
    }

    function vb(bb) {
      var ab;
      return null !== (ab = Mb.find((ab => {
        let [Ub] = ab;
        return bb < Ub
      }))) && void 0 !== ab ? ab : Mb[Mb.length - 1]
    }
  },
  38357: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab,
      i: () => Mb
    });
    const Ab = 45e3;
    class Mb extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  35921: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab,
      g: () => Mb,
      j: () => Tb
    });
    const Ab = 1024,
      Mb = 1024 * Ab;

    function Tb(bb) {
      return (bb / Mb).toFixed(1)
    }
  },
  35913: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb,
      g: () => Yb,
      h: () => Eb,
      l: () => Bb,
      n: () => eb
    });
    var Ab = Ub(205);
    const Mb = 32 * Ub(35921).g,
      Tb = 6144,
      Eb = 4608,
      Yb = 512;

    function Bb(bb) {
      return Math.floor(Mb * bb / Tb)
    }

    function eb(bb) {
      const ab = bb - Math.floor(bb / 6);
      let Ub = Ab.c.maxChunkHorizAddDistance,
        Mb = Ab.c.maxChunkVertAddDistance;
      if (vb(Ub + 1, Mb + 1) <= ab) return null;
      for (; vb(Ub + 1, Mb + 1) > ab && (Ub > 0 || Mb > 0);) Ub > Mb ? Ub-- : Mb--;
      return {
        horizontal: Ub,
        vertical: Mb
      }
    }

    function vb(bb, ab) {
      const Ub = Math.max(bb, ab);
      let Ab = 0;
      for (let Mb = -Ub; Mb <= Ub; Mb++)
        for (let Tb = -Ub; Tb <= Ub; Tb++)
          for (let Eb = -Ub; Eb <= Ub; Eb++) Lb(bb, ab, Mb, Tb, Eb) && Ab++;
      return Ab
    }

    function Lb(bb, ab, Ub, Ab, Mb) {
      const Tb = Ub * Ub + Mb * Mb;
      return bb === ab ? Tb + Ab * Ab <= bb * bb : bb > ab ? Math.abs(Ab) <= ab && Tb + Ab * Ab <= bb * bb : Tb <= bb * bb && Tb + Ab * Ab <= ab * ab
    }
  },
  39985: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Mb,
      e: () => Tb,
      h: () => Yb,
      j: () => vb,
      n: () => Bb,
      r: () => Eb
    });
    var Ab = Ub(205);
    const Mb = 3e3,
      Tb = 15e3;

    function Eb(bb) {
      const ab = bb.endsWith(Ab.h);
      return {
        text: (ab ? bb.slice(0, -Ab.h.length) : bb) || null,
        dropsCache: ab
      }
    }
    const Yb = "Either your internet isn't working or this is a bug.";

    function Bb(bb, ab) {
      const Ub = vb(bb);
      return null !== Ub.name && "" === Ab.b[Ub.name].text && null !== ab ? ab : Ub.reason
    }
    const eb = "You were removed from the game.";

    function vb(bb) {
      var ab;
      let Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Mb = null !== (ab = Object.keys(Ab.b).find((ab => Ab.b[ab].code === bb))) && void 0 !== ab ? ab : null;
      if (null === Mb) return {
        code: bb,
        name: Mb,
        reason: null !== Ub && void 0 !== Ub ? Ub : `${Yb}\nCode: ${bb}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: Tb,
        canReconnect: Eb = !1
      } = Ab.b[Mb], Bb = bb === Ab.b.outdatedVersion.code || bb === Ab.b.loadRecaptchaError.code;
      return {
        code: bb,
        name: Mb,
        reason: "" !== Tb ? Tb : null !== Ub && void 0 !== Ub ? Ub : bb === Ab.b.gameOrPluginKick.code ? eb : `Code: ${bb}`,
        canReconnect: Eb,
        automaticallyReconnect: bb === Ab.b.customGameUpdated.code || bb === Ab.b.duplicateLobbyNameError.code,
        requiresRefresh: Bb
      }
    }
  },
  4479: (bb, ab, Ub) => {
    Ub.d(ab, {
      $c: () => Ab.Jb,
      Ab: () => Mb.c,
      B: () => Fb,
      C: () => Pa,
      Cd: () => tb,
      Dc: () => Aa,
      Dd: () => Cb,
      Eb: () => mb,
      Ed: () => gb,
      Fc: () => Ab.nb,
      G: () => Jb,
      Gd: () => Ea,
      H: () => Ab.h,
      Hb: () => ub,
      I: () => eb,
      Ic: () => Ab.qb,
      Jd: () => ja,
      Kb: () => Ib,
      Lb: () => Wb,
      M: () => Ab.l,
      Mb: () => Ab.N,
      Mc: () => Ab.tb,
      Md: () => zb,
      Ob: () => db,
      P: () => Ab.m,
      Pc: () => nb,
      Qb: () => xb,
      Qd: () => Vb,
      R: () => Ob,
      Rc: () => Ab.xb,
      Rd: () => Qb,
      Sc: () => Ab.yb,
      Tb: () => Ta,
      Td: () => Gb,
      V: () => Ab.u,
      Vc: () => Ab.Cb,
      Vd: () => hb,
      W: () => Ab.x,
      Wb: () => Db,
      Wc: () => Ab.Fb,
      X: () => Ab.B,
      Yd: () => Bb,
      _: () => Lb,
      _b: () => va,
      _c: () => Ab.Gb,
      ab: () => Zb,
      ac: () => Mb.h,
      ae: () => qb,
      bd: () => Nb,
      be: () => Ra,
      c: () => ba,
      cb: () => Ab.E,
      cd: () => Ab.Lb,
      ce: () => Xb,
      dc: () => yb,
      e: () => Rb,
      ed: () => Ab.Mb,
      fc: () => Ua,
      gb: () => Ab.F,
      gd: () => Ab.Rb,
      h: () => jb,
      ib: () => ob,
      ic: () => Ab.V,
      id: () => Tb,
      j: () => Ba,
      kc: () => Ab.Z,
      kd: () => kb,
      lb: () => Ma,
      m: () => pb,
      nd: () => Ya,
      o: () => fb,
      ob: () => vb,
      oc: () => Ab._,
      od: () => Kb,
      p: () => Ab.e,
      qc: () => Ab.$,
      rb: () => Ab.J,
      sb: () => wb,
      sc: () => Ab.db,
      sd: () => lb,
      t: () => La,
      td: () => rb,
      vb: () => cb,
      vc: () => Ab.lb,
      wb: () => Sb,
      x: () => Hb,
      xb: () => aa,
      xc: () => Xa,
      xd: () => sb,
      z: () => Eb,
      zc: () => ea
    });
    var Ab = Ub(4485),
      Mb = Ub(2254);
    const Tb = Math.round(1e3 / Ab.Rb),
      Eb = 4,
      Yb = 2;

    function Bb() {
      return crypto.getRandomValues(new Uint32Array(Yb))
    }
    const eb = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      vb = 16,
      Lb = {
        Draws: 1,
        NetAll: 2
      },
      Pb = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function Xb(bb) {
      return (bb.nametagsHidden ? ib.NametagsHidden : 0) | (bb.crouchToggle ? ib.CrouchToggle : 0) | (bb.bhopDisabled ? ib.BhopDisabled : 0) | (bb.disableBobbing ? ib.DisableBobbing : 0) | (bb.ezTowering ? ib.EzTowering : 0) | (bb.ezBridging ? ib.EzBridging : 0) | (bb.showChunkBorders ? ib.ShowChunkBorders : 0)
    }
    const jb = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      Rb = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      kb = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      yb = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      Zb = 5,
      Db = 4294967295;

    function zb(bb) {
      return (bb.showFog ? Pb.ShowFog : 0) | (bb.lighting ? Pb.Lighting : 0) | (bb.chunkFade ? Pb.ChunkFade : 0)
    }
    const xb = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      ib = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      fb = {
        Release: 1,
        KeepTouches: 2
      },
      mb = {
        Point: 1,
        Stamped: 2
      },
      pb = {
        Add: 1,
        Clear: 2
      },
      Nb = 1,
      Wb = 8,
      Hb = 16777215,
      Ib = 4,
      db = {
        Resume: 1
      },
      Fb = {
        Held: 1
      };

    function hb(bb, ab) {
      return (bb | ab << 8) >>> 0
    }

    function Gb(bb) {
      return 255 & bb
    }

    function Qb(bb) {
      return bb >>> 8
    }

    function qb(bb) {
      return bb + 3 & -4
    }
    const ub = 16777216,
      rb = 20;
    const Kb = 8,
      ob = 8,
      lb = 16777216,
      tb = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      wb = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      sb = 16,
      gb = {
        Lost: 0,
        Gone: 1
      },
      Cb = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function Vb(bb) {
      return bb === Cb.WorldgenSeed || bb === Cb.Generate
    }
    const Ob = 4,
      cb = 99,
      Jb = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      nb = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      Sb = 12,
      ba = 16,
      aa = 4,
      Ua = 12,
      Aa = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      Ma = 4,
      Ta = 8,
      Ea = 8,
      Ya = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      Ba = {
        Crit: 1,
        HitSelf: 2
      },
      ea = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      va = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      La = 12,
      Pa = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      Xa = 67108864;

    function ja(bb) {
      for (const [ab, Ub] of Object.entries(Ab.h))
        if (Ub === bb) return ab;
      return `Unknown${bb}`
    }

    function Ra(bb) {
      return {
        status: bb[Ab.F.Status],
        lastError: bb[Ab.F.LastError],
        lastErrorDetail: bb[Ab.F.LastErrorDetail],
        errorCount: bb[Ab.F.ErrorCount],
        frameIndex: bb[Ab.F.FrameIndex],
        tickIndex: bb[Ab.F.TickIndex],
        renderPending: bb[Ab.F.RenderPending],
        firstView: bb[Ab.F.FirstView],
        chunksCancelled: bb[Ab.F.ChunksCancelled]
      }
    }
  },
  39764: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab,
      f: () => Lb,
      g: () => Yb,
      h: () => Tb,
      k: () => Mb,
      o: () => Bb,
      p: () => vb
    });
    class Ab extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function Mb(bb) {
      return bb instanceof RangeError && /call stack/i.test(bb.message) || bb instanceof Error && "InternalError" === bb.name && /recursion/i.test(bb.message)
    }

    function Tb(bb) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(bb))
    }
    const Eb = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function Yb(bb) {
      var ab;
      return bb instanceof WebAssembly.RuntimeError || bb instanceof Ab || Mb(bb) && Eb.test(null !== (ab = bb.stack) && void 0 !== ab ? ab : "")
    }

    function Bb(bb, ab) {
      if (Yb(bb)) throw bb;
      console.error(ab, bb)
    }

    function eb(bb, ab, Ub, Mb, Tb) {
      if (ab % Mb !== 0 || ab + Ub > bb.byteLength) throw new Ab(`${Tb}: ${Ub} bytes at ${ab}, ${Mb}-aligned, outside ${bb.byteLength} bytes of memory`)
    }

    function vb(bb, ab, Ub, Ab, Mb) {
      return 0 === Ub ? null : (eb(ab, Ub, Ab * bb.BYTES_PER_ELEMENT, bb.BYTES_PER_ELEMENT, Mb), new bb(ab, Ub, Ab))
    }

    function Lb(bb, ab, Ub, Ab, Mb) {
      return 0 === ab ? null : (eb(bb, ab, Ub, Ab, Mb), new DataView(bb, ab, Ub))
    }
  },
  40103: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab
    });
    const Ab = {
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
  40054: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => jb,
      g: () => Rb,
      k: () => Pb,
      m: () => Lb
    });
    const Ab = 2e3,
      Mb = "unavailable";
    let Tb = () => Promise.resolve().then((() => Ub(2659))),
      Eb = null,
      Yb = null,
      Bb = eb();

    function eb() {
      let bb = () => {};
      return {
        promise: new Promise((ab => {
          bb = () => {
            ab(null)
          }
        })),
        resolve: bb
      }
    }

    function vb() {
      if (null === Eb) {
        const bb = Tb();
        Eb = bb, bb.then((ab => {
          Eb === bb && (Yb = ab)
        }), (() => {
          Eb === bb && (Eb = null)
        }))
      }
      return Eb
    }

    function Lb() {
      vb().catch((() => {}))
    }

    function Pb() {
      Bb.resolve()
    }

    function Xb(bb, ab, Ub, Ab) {
      if (null === bb) return {
        errorKind: ab,
        fingerprint: Mb,
        dedupe: `${ab}|${Ab}`
      };
      const {
        fingerprint: Tb
      } = bb.clientErrorKey(ab, Ub, Ab);
      return {
        errorKind: ab,
        fingerprint: Tb,
        dedupe: Tb
      }
    }

    function jb(bb, ab, Ub, Ab) {
      return null === Yb ? Ab ? (Lb(), Xb(null, bb, ab, Ub)) : null : Xb(Yb, bb, ab, Ub)
    }
    async function Rb(bb, ab, Ub) {
      let Mb;
      const Tb = new Promise((bb => {
        Mb = setTimeout((() => {
          bb(null)
        }), Ab)
      }));
      try {
        return Xb(await Promise.race([vb(), Tb, Bb.promise]), bb, ab, Ub)
      } catch {
        return Xb(null, bb, ab, Ub)
      } finally {
        clearTimeout(Mb)
      }
    }
  },
  40052: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      BUILT_IN_ANIMATIONS_SITE: () => sb,
      CORE_ERRORS_SITE: () => Gb,
      EVENT_OVERFLOW_SITE: () => wb,
      FIRST_VIEW_SITE: () => Cb,
      JOIN_SITE: () => qb,
      LEAVE_SITE: () => ub,
      MODEL_FEED_SITE: () => rb,
      MODEL_POOL_SITE: () => Kb,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => Ob,
      NON_FATAL_REPORTS_PER_SESSION: () => va,
      PREVIEW_ANIMATIONS_SITE: () => tb,
      RENDER_RELOAD_SITE: () => lb,
      TEXTURE_NAMES_SITE: () => ob,
      TEXTURE_PACK_FEED_SITE: () => gb,
      TurnstilePageError: () => ra,
      WASM_LOAD_SITE: () => Qb,
      crashError: () => Ra,
      crashReportsSettled: () => xa,
      flushCrashReports: () => Da,
      joinFailureCode: () => Ka,
      lokiTransport: () => nb,
      modelFailureCode: () => Ca,
      readTrap: () => ma,
      renderLossDetail: () => LU,
      renderReloadMessage: () => eU,
      reportCoreErrors: () => fa,
      reportCountedLoadFallback: () => qa,
      reportCrash: () => ka,
      reportDataLoadFailure: () => kU,
      reportDisconnect: () => sa,
      reportDracoDecoderFailure: () => Ja,
      reportEventOverflow: () => bU,
      reportFirstViewNoTerrain: () => TU,
      reportGpuFallback: () => Ga,
      reportGpuWasmPopulation: () => Qa,
      reportLightFault: () => UU,
      reportMemoryShed: () => MU,
      reportModelFailure: () => Va,
      reportModelPoolFailure: () => Oa,
      reportModelsModuleRetry: () => ca,
      reportPageJoinFailure: () => la,
      reportReconnectGaveUp: () => ga,
      reportRenderReload: () => XU,
      reportReplayFault: () => YU,
      reportStaleBuildReload: () => ZU,
      reportStoppedCore: () => Ha,
      reportTerrainTextureFailure: () => jU,
      reportTexturePackFeedLoadFailure: () => Sa,
      reportUnstreamedCoreLoad: () => ua,
      reportUnsupportedFallback: () => Fa,
      reportUnusedSeat: () => wa,
      reportWorkerLost: () => aU,
      reportWorkerStartTimeout: () => EU,
      reportWorldgenGaveUp: () => AU,
      reportWorldgenLoadFailure: () => na,
      resetCrashReports: () => ia,
      setCrashBackend: () => Ta,
      setCrashScreen: () => Aa,
      setCrashTransport: () => aa,
      showCrash: () => Wa,
      showJoinFailure: () => oa,
      showUnsupported: () => da
    });
    var Ab = Ub(1003),
      Mb = Ub(283),
      Tb = Ub(2661),
      Eb = Ub(40054),
      Yb = Ub(4479),
      Bb = Ub(40056),
      eb = Ub(3144),
      vb = Ub(38072),
      Lb = Ub(137),
      Pb = Ub(660),
      Xb = Ub(131),
      jb = Ub(3148),
      Rb = Ub(38357),
      kb = Ub(1687),
      yb = Ub(40032),
      Zb = Ub(39714),
      Db = Ub(39992),
      zb = Ub(39998),
      xb = Ub(40062),
      ib = Ub(3376),
      fb = Ub(3382),
      mb = Ub(40066),
      pb = Ub(40084),
      Nb = Ub(40092),
      Wb = Ub(36186),
      Hb = Ub(2956),
      Ib = Ub(35739),
      db = Ub(39916),
      Fb = Ub(35745);
    const hb = "[bloxd-wasm-client]",
      Gb = "coreErrors",
      Qb = "wasmLoad",
      qb = "join",
      ub = "leave",
      rb = "modelFeed",
      Kb = "modelWorkerPool",
      ob = "textureNames",
      lb = "renderReload",
      tb = "previewAnimations",
      wb = "eventOverflow",
      sb = "builtInAnimations",
      gb = "texturePackFeed",
      Cb = "firstView",
      Vb = 300,
      Ob = 8;
    let cb = 0;
    const Jb = new Set,
      nb = (bb, ab) => {
        const Ub = Ea[bb.kind];
        if (null === Ub) return void Sb(bb, ab, Ma, null);
        const Ab = (0, Eb.c)(Ub, bb.message, bb.code, bb.fatal);
        if (null !== Ab) return void Sb(bb, ab, Ma, Ab);
        const Mb = Ma;
        Za("Loki", (async () => {
          Sb(bb, ab, Mb, await (0, Eb.g)(Ub, bb.message, bb.code))
        }))
      };

    function Sb(bb, ab, Ub, Mb) {
      const {
        kind: Eb,
        code: Yb,
        site: Bb,
        fatal: eb,
        details: vb
      } = bb;
      if (!eb)
        if (null === Mb || (0, Tb.c)(Mb.errorKind) || Jb.has(Mb.dedupe)) {
          if (cb >= Ob) return;
          cb++
        } else Jb.add(Mb.dedupe);
      const Lb = {
        ...vb,
        kind: Eb,
        code: Yb,
        site: Bb,
        fatal: String(eb),
        backend: Ub
      };
      null !== Mb && (Lb.errorKind = Mb.errorKind, Lb.fingerprint = Mb.fingerprint), ab instanceof Error && "string" === typeof ab.stack && (Lb.causeStack = ab.stack.slice(0, 2e3)), (0, Ab.UR)(Ra(bb, ab), Lb)
    }
    let ba = nb;

    function aa(bb) {
      const ab = ba;
      return ba = bb, ab
    }
    let Ua = () => {};

    function Aa(bb) {
      const ab = Ua;
      return Ua = bb, ab
    }
    let Ma = "unpicked";

    function Ta(bb) {
      Ma = bb
    }
    const Ea = {
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
      Ya = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        gpuFallback: "wasm_load"
      },
      Ba = new Set(["unstreamedLoad"]);
    let ea = !1;
    const va = 20,
      La = new Map;
    let Pa = 0,
      Xa = 0;
    const ja = new Set;

    function Ra(bb, ab) {
      const Ub = Object.assign(new Error(`${bb.code}: ${bb.message}`), {
        name: "WasmClientCrash",
        cause: null !== ab && void 0 !== ab ? ab : void 0
      });
      return ab instanceof Error && ab.stack && (Ub.stack = ab.stack), Ub
    }

    function ka(bb) {
      var ab, Ab;
      const {
        kind: Mb,
        code: Tb,
        site: Eb,
        fatal: Yb,
        message: Bb,
        error: eb
      } = bb, vb = !1 !== bb.toTransport && !Ba.has(Mb), Lb = !Yb && vb, Pb = {
        kind: Mb,
        code: Tb,
        site: Eb,
        fatal: Yb,
        message: Bb,
        details: null !== (ab = bb.details) && void 0 !== ab ? ab : {}
      }, Xb = `${Tb}@${Eb}${void 0===bb.instance?"":`#${bb.instance}`}${Yb?"!":""}`, jb = (null !== (Ab = La.get(Xb)) && void 0 !== Ab ? Ab : 0) + 1;
      if (La.set(Xb, jb), jb > 1 ? 0 === (jb & jb - 1) && ya((() => {
          console.warn(`${hb} ${Tb} at ${Eb} reported ${jb} times`)
        })) : Lb && Pa >= va ? ya((() => {
          console.warn(`${hb} ${Mb} ${Tb} at ${Eb}: ${Bb} (not sent: the session's ${va} went)`, Pb.details, null !== eb && void 0 !== eb ? eb : "")
        })) : (Lb && Pa++, function(bb, ab, Ab) {
          var Mb, Tb;
          const {
            kind: Eb,
            code: Yb,
            site: Bb,
            fatal: eb,
            message: vb,
            details: Lb
          } = bb;
          ya((() => {
            (eb ? console.error : console.warn)(`${hb} ${Eb} ${Yb} at ${Bb}: ${vb}`, Lb, null !== ab && void 0 !== ab ? ab : "")
          }));
          const Pb = Ya[Eb],
            Xb = null !== (Mb = null !== (Tb = Ea[Eb]) && void 0 !== Tb ? Tb : Pb) && void 0 !== Mb ? Mb : null;
          null !== Xb && Za("counts", (async () => {
            const {
              peekVisitSessionId: bb
            } = await Promise.resolve().then((() => Ub(622)));
            if (null !== bb()) {
              const {
                reportCappedWasmFailure: bb,
                reportWasmFailure: ab
              } = await Ub.e(207).then((() => Ub(35732)));
              (void 0 === Pb ? ab : bb)(Xb, vb, Yb), ea = !0
            }
          }));
          Ab && ya((() => {
            ba(bb, ab)
          }))
        }(Pb, eb, vb)), Yb) {
        var Rb;
        const ab = null !== (Rb = bb.screen) && void 0 !== Rb ? Rb : {
          text: (0, Wb.f)(Pb, !0),
          reload: !0
        };
        ya((() => {
          Ua(ab)
        }))
      }
      return Pb
    }

    function ya(bb) {
      try {
        bb()
      } catch (ab) {
        try {
          console.warn(`${hb} could not send a report`, ab)
        } catch {}
      }
    }

    function Za(bb, ab) {
      try {
        const Ub = ab().catch((ab => {
          console.warn(`${hb} could not send the report to ${bb}`, ab)
        })).finally((() => {
          ja.delete(Ub)
        }));
        ja.add(Ub)
      } catch (Ub) {
        console.warn(`${hb} could not send the report to ${bb}`, Ub)
      }
    }
    async function Da(bb) {
      let ab;
      (0, Eb.k)();
      const Ub = new Promise((Ub => {
        ab = setTimeout(Ub, bb)
      }));
      await Promise.race([za(), Ub]), clearTimeout(ab)
    }
    async function za() {
      if (await Promise.allSettled([...ja]), ea) try {
        const {
          flushClientAnalyticsEvents: bb
        } = await Promise.resolve().then((() => Ub(1405)));
        await bb()
      } catch (bb) {
        console.warn(`${hb} could not send the counts`, bb)
      }
    }
    async function xa() {
      for (; ja.size > 0;) await Promise.allSettled([...ja])
    }

    function ia() {
      La.clear(), Pa = 0, ea = !1, cb = 0, Jb.clear(), Xa = 0, (0, Bb.n)()
    }

    function fa(bb, ab, Ub, Ab) {
      Xa += ab;
      for (const {
          code: Eb,
          detail: eb
        }
        of bb) {
        var Mb, Tb;
        const bb = (0, Yb.Jd)(Eb),
          ab = (0, Bb.c)(Eb, eb),
          vb = null === Ab || void 0 === Ab ? void 0 : Ab(Eb, eb),
          Lb = void 0 !== (null === ab || void 0 === ab ? void 0 : ab.gpuDetails),
          Pb = Lb ? null === (Mb = (0, Xb.j)()) || void 0 === Mb ? void 0 : Mb.renderer : void 0,
          jb = Lb ? ` ${(0,Bb.f)()}` : "",
          Rb = Array.from([Pb && `gpu ${(0,Bb.p)(Pb)}`, vb].filter(Boolean).join("; ")).slice(0, Vb).join(""),
          kb = `core error ${bb}${null!==(Tb=null===ab||void 0===ab?void 0:ab.words)&&void 0!==Tb?Tb:""}${jb}${Rb?`: ${Rb}`:""}`,
          yb = {
            errorCode: String(Eb),
            detail: String(eb),
            droppedBefore: String(Xa),
            wasmBuild: Ub.wasm,
            clientVersion: Ub.client,
            ...null === ab || void 0 === ab ? void 0 : ab.gpuDetails
          };
        null !== ab && (0, Bb.k)(ab) ? ya((() => {
          console.warn(`${hb} coreError CORE-${bb}: ${kb} (not sent: the session's render warnings of its kind went)`, yb)
        })) : ka({
          kind: Eb === Yb.H.JobsHeapGaveUp ? "meshHeap" : "coreError",
          code: `CORE-${bb}`,
          site: Gb,
          fatal: !1,
          message: kb,
          details: yb,
          instance: null === ab || void 0 === ab ? void 0 : ab.instance
        })
      }
    }

    function ma(bb) {
      return (0, Ib.h)(bb instanceof db.d ? bb.trap : bb, ib.A, ib.T)
    }
    const pa = "declined=js";

    function Na(bb) {
      return bb ? {
        labels: [pa],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function Wa(bb, ab, Ub) {
      return Ia(bb, ab, Ub, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function Ha(bb, ab, Ub) {
      return Ia(bb, ab, Ub, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function Ia(bb, ab, Ub, Ab, Mb) {
      let {
        memoryDetails: Tb = {},
        declined: Eb = !1
      } = Ab;
      const {
        code: Yb,
        details: Bb,
        message: eb
      } = (0, yb.A)(bb, ab), vb = [];
      null !== Ub && (Bb.trapKind = Ub.kind, null !== Ub.panic && (Bb.panic = (0, Ib.f)(Ub.panic)), Ub.refusedBytes > 0 && (Bb.refusedAllocation = String(Ub.refusedBytes)), vb.push((0, Ib.i)(Ub.kind, Ub.refusedBytes)));
      const Lb = Na(Eb);
      return ka({
        kind: "crash",
        code: Yb,
        site: bb.site,
        fatal: Mb,
        message: [...vb, ...Lb.labels, eb].join("; "),
        details: {
          ...Bb,
          ...Lb.details,
          ...Tb
        },
        error: bb.error
      })
    }

    function da(bb, ab, Ub) {
      return ka({
        kind: "unsupported",
        code: ab,
        site: Qb,
        fatal: !0,
        message: Ub,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: bb,
          status: ab
        },
        screen: {
          text: (0, Wb.r)(bb),
          reload: "download" === bb
        }
      })
    }

    function Fa(bb, ab, Ub) {
      return ka({
        kind: "unsupportedFallback",
        code: "blockedAfterLoss" === ab ? "blocked_after_loss" : "unsupported_js_fallback",
        site: Qb,
        fatal: !1,
        message: Ub,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: bb,
          status: "unsupported",
          decline: ab,
          fallback: "js"
        }
      })
    }
    const ha = "misdrawn_gpu_js_fallback";

    function Ga(bb, ab) {
      return ka({
        kind: "gpuFallback",
        code: ha,
        site: Qb,
        fatal: !1,
        message: `the renderer plays ${bb} on ${ab} worse than the JS client`,
        details: {
          gpuFamily: bb,
          backend: ab,
          fallback: "js"
        }
      })
    }

    function Qa(bb) {
      Za("counts", (async () => {
        await (0, Pb.e)(bb), ea = !0
      }))
    }

    function qa(bb, ab, Ub, Ab) {
      const Mb = Na(Ab);
      return ka({
        kind: "unsupported",
        code: ab,
        site: Qb,
        fatal: !1,
        message: [...Mb.labels, Ub].join("; "),
        details: {
          cause: bb,
          status: ab,
          fallback: "js",
          ...Mb.details
        }
      })
    }

    function ua() {
      const {
        code: bb,
        message: ab
      } = Hb.d;
      return ka({
        kind: "unstreamedLoad",
        code: bb,
        site: Qb,
        fatal: !1,
        message: ab
      })
    }
    class ra extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function Ka(bb) {
      return bb instanceof Db.n ? 0 === bb.code ? "JOIN-matchmake" : `JOIN-${bb.code}` : bb instanceof Db.b ? 0 === bb.code ? `JOIN-${bb.stage}` : `JOIN-${bb.stage}-${bb.code}` : bb instanceof Zb.e ? "JOIN-gameCode" : bb instanceof ra ? "JOIN-turnstilePage" : bb instanceof Db.A ? "JOIN-trafficCheck" : bb instanceof Rb.i ? "JOIN-timeout" : "JOIN-network"
    }

    function oa(bb, ab) {
      const Ub = (0, Fb.e)(bb),
        Ab = {
          wasmBuild: ab.wasm,
          clientVersion: ab.client
        },
        Mb = bb instanceof ra ? {
          text: (0, Wb.k)(),
          reload: !1
        } : void 0,
        Tb = (0, zb.c)(bb),
        Eb = "expected" !== Tb;
      return ka({
        kind: "join",
        code: Ka(bb),
        site: qb,
        fatal: !0,
        message: Ub,
        details: Ab,
        error: bb,
        screen: Mb,
        toTransport: Eb,
        instance: Tb
      })
    }

    function la(bb, ab, Ub) {
      var Ab;
      const Mb = (0, zb.c)(bb),
        Tb = {
          cause: (bb instanceof Db.b || bb instanceof Db.n) && null !== (Ab = bb.serverText) && void 0 !== Ab ? Ab : "",
          sinceJoinStart: (0, jb.d)(Ub.sinceJoinStartMs),
          game: Ub.game,
          ...(0, jb.l)(),
          wasmBuild: ab.wasm,
          clientVersion: ab.client
        };
      return ka({
        kind: "pageJoin",
        code: Ka(bb),
        site: qb,
        fatal: !1,
        message: (0, Fb.e)(bb),
        details: Tb,
        error: bb,
        toTransport: "unrecognised" === Mb,
        instance: Mb
      })
    }
    const ta = {
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

    function wa(bb, ab) {
      let {
        unused: Ub,
        answered: Ab,
        heldMs: Mb
      } = bb;
      const {
        code: Tb,
        message: Eb
      } = ta[Ub], Yb = {
        unused: Ub,
        answered: String(Ab),
        heldMs: String(Mb),
        wasmBuild: ab.wasm,
        clientVersion: ab.client
      };
      return ka({
        kind: "seat",
        code: Tb,
        site: qb,
        fatal: !1,
        message: Eb,
        details: Yb
      })
    }

    function sa(bb, ab, Ub) {
      var Ab;
      let Mb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (Ab = bb.name) && void 0 !== Ab ? Ab : String(bb.code);
      const Tb = {
          closeCode: String(bb.code),
          recognised: String(null !== bb.name),
          closeReason: Ub.closeReason,
          sinceJoined: (0, jb.d)(Ub.sinceJoinedMs),
          game: Ub.game,
          ...(0, jb.l)(),
          wasmBuild: ab.wasm,
          clientVersion: ab.client
        },
        Eb = null === bb.name && !(0, jb.g)(bb.code);
      return ka({
        kind: "disconnect",
        code: Mb,
        site: ub,
        fatal: !1,
        message: "Left room",
        details: Tb,
        toTransport: Eb
      })
    }

    function ga(bb, ab) {
      const Ub = {
        ...(0, eb.h)(bb),
        wasmBuild: ab.wasm,
        clientVersion: ab.client
      };
      return ka({
        kind: "disconnect",
        code: `reconnect-${bb.reason}`,
        site: qb,
        fatal: !1,
        message: "Reconnect failed",
        details: Ub
      })
    }

    function Ca(bb) {
      return bb.error instanceof fb.d ? `MODEL-${bb.error.status}` : bb.error instanceof mb.m ? "MODEL-ring" : "MODEL-network"
    }

    function Va(bb, ab) {
      const Ub = Ca(bb),
        Ab = `model file ${bb.file} ${bb.startup?"(startup) ":""}could not load`,
        Mb = {
          file: String(bb.file),
          url: bb.url,
          wasmBuild: ab.wasm,
          clientVersion: ab.client
        };
      return ka({
        kind: bb.startup ? "model" : "modelLate",
        code: Ub,
        site: rb,
        fatal: bb.startup,
        message: Ab,
        details: Mb,
        error: bb.error
      })
    }

    function Oa(bb, ab) {
      const Ub = {
        wasmBuild: ab.wasm,
        clientVersion: ab.client
      };
      return ka({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: Kb,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: Ub,
        error: bb
      })
    }

    function ca(bb, ab, Ub) {
      const Ab = {
        delayMs: String(ab),
        wasmBuild: Ub.wasm,
        clientVersion: Ub.client
      };
      bb instanceof fb.d && (Ab.status = String(bb.status));
      return ka({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: Kb,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: Ab,
        error: bb
      })
    }

    function Ja(bb, ab) {
      const Ub = {
        wasmBuild: ab.wasm,
        clientVersion: ab.client
      };
      return ka({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: Kb,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: Ub,
        error: bb
      })
    }

    function na(bb, ab) {
      const Ub = {
        wasmBuild: ab.wasm,
        clientVersion: ab.client
      };
      return ka({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: yb.x,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: Ub,
        error: bb
      })
    }

    function Sa(bb, ab) {
      const Ub = {
        wasmBuild: ab.wasm,
        clientVersion: ab.client
      };
      return ka({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: gb,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: Ub,
        error: bb
      })
    }

    function bU(bb, ab) {
      const {
        frames: Ub,
        acks: Ab,
        mask: Mb,
        outcome: Tb
      } = bb, Eb = {
        frames: String(Ub),
        acks: String(Ab),
        mask: String(Mb),
        outcome: null !== Tb && void 0 !== Tb ? Tb : "resynced",
        wasmBuild: ab.wasm,
        clientVersion: ab.client
      };
      return ka({
        kind: "recovered",
        code: "rejoined" === Tb ? "CORE-eventOverflowRejoin" : "failed" === Tb ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: wb,
        fatal: !1,
        message: `the event buffer refused records in ${Ub} frames`,
        details: Eb
      })
    }

    function aU(bb, ab, Ub) {
      return ka({
        kind: "recovered",
        code: "CORE-workerLost",
        site: bb,
        fatal: !1,
        message: `a ${bb} worker was lost`,
        details: {
          reason: ab,
          wasmBuild: Ub.wasm,
          clientVersion: Ub.client
        }
      })
    }

    function UU(bb, ab, Ub) {
      const Ab = {
        wasmBuild: Ub.wasm,
        clientVersion: Ub.client
      };
      return ka({
        kind: "recovered",
        code: bb,
        site: yb.m,
        fatal: !1,
        message: ab,
        details: Ab
      })
    }

    function AU(bb, ab) {
      const Ub = {
        lastReason: bb,
        wasmBuild: ab.wasm,
        clientVersion: ab.client
      };
      return ka({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: yb.x,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: Ub
      })
    }

    function MU(bb, ab, Ub) {
      return ka({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: yb.l,
        fatal: !1,
        message: (0, xb.g)(bb) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: bb,
          ...ab,
          wasmBuild: Ub.wasm,
          clientVersion: Ub.client
        }
      })
    }

    function TU(bb, ab) {
      const Ub = (0, Bb.i)(),
        Ab = {
          game: bb,
          renderWarned: String(Ub),
          browser: (0, Bb.f)(),
          wasmBuild: ab.wasm,
          clientVersion: ab.client
        },
        Mb = `first view drew no whole terrain in ${pb.f/1e3} s${Ub?", render warned":""}`;
      return ka({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: Cb,
        fatal: !1,
        message: Mb,
        details: Ab
      })
    }

    function EU(bb, ab, Ub) {
      return ka({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: bb,
        fatal: !1,
        message: `a ${bb} worker did not start`,
        details: {
          waitedMs: String(Math.round(ab)),
          wasmBuild: Ub.wasm,
          clientVersion: Ub.client
        }
      })
    }

    function YU(bb, ab, Ub) {
      return ka({
        kind: "recovered",
        code: "CORE-replayFault",
        site: bb,
        fatal: !1,
        message: `the replay's ${bb} failed`,
        details: {
          wasmBuild: Ub.wasm,
          clientVersion: Ub.client
        },
        error: ab
      })
    }
    const BU = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function eU(bb, ab, Ub) {
      const Ab = "lost" === ab && void 0 !== Ub ? ` (${Ub})` : "";
      return `the ${bb} ${BU[ab]}${Ab}`
    }
    const vU = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };

    function LU(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now();
      const Mb = null === Ub.boundAtMs ? "unbound" : `up${(0,vb.g)(Ab-Ub.boundAtMs)}`,
        Tb = null === Ub.adapter ? "no adapter" : (0, vb.k)(Ub.adapter),
        Eb = `${(0,kb.l)()?"hidden":"visible"} ${Mb} ${Tb}${!0===Ub.indirectHangs?" ih":""}`;
      if ("pipeline_failed" === bb) return `${bb} ${Eb}`;
      const Yb = null === ab || void 0 === ab ? void 0 : ab.message;
      return `${ab instanceof kb.h?"timeout":(0,vb.o)("frames_refused"===bb,"string"===typeof Yb?Yb:"")} ${Eb}`
    }
    const PU = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function XU(bb, ab, Ab) {
      var Tb, Eb, Yb, eb, Pb;
      let {
        cause: Xb = "lost",
        error: jb,
        context: Rb = vU,
        session: kb = PU
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const yb = LU(Xb, jb, Rb),
        Zb = {
          losses: String(ab),
          cause: Xb,
          detail: yb,
          vendor: null !== (Tb = null === (Eb = Rb.adapter) || void 0 === Eb ? void 0 : Eb.vendor) && void 0 !== Tb ? Tb : "",
          architecture: null !== (Yb = null === (eb = Rb.adapter) || void 0 === eb ? void 0 : eb.architecture) && void 0 !== Yb ? Yb : "",
          indirectHangs: String(Rb.indirectHangs),
          samples: String(kb.samples),
          sunShadows: String(kb.sunShadows),
          renderDistance: String(kb.renderDistance),
          gpuFamily: null !== (Pb = (0, Mb.c)()) && void 0 !== Pb ? Pb : "",
          browser: (0, Bb.f)(),
          siteUsed: Lb.p,
          wasmBuild: Ab.wasm,
          clientVersion: Ab.client
        },
        Db = eU(bb, Xb),
        zb = ka({
          kind: "recovered",
          code: "CORE-renderLost",
          site: lb,
          fatal: !1,
          message: Db,
          details: Zb,
          error: jb
        });
      return Za("ga", (async () => {
        const {
          logError: ab
        } = await Promise.resolve().then((() => Ub(2636))), Ab = `${vb.c["webgpu"===bb?"WebGPU":"WebGL2"]}\n Error: ${yb}`;
        ab("warning", Ab), ab("error", Ab)
      })), zb
    }

    function jU(bb, ab) {
      var Ub, Ab;
      const Mb = null === bb.name ? "TEXTURE-sources" : null === bb.url ? "TEXTURE-nourl" : bb.error instanceof Nb.c ? `TEXTURE-${bb.error.status}` : "TEXTURE-network",
        Tb = null === bb.name ? "terrain textures could not load" : `terrain texture ${bb.name} could not load`,
        Eb = {
          texture: null !== (Ub = bb.name) && void 0 !== Ub ? Ub : "",
          url: null !== (Ab = bb.url) && void 0 !== Ab ? Ab : "",
          wasmBuild: ab.wasm,
          clientVersion: ab.client
        };
      return ka({
        kind: "terrainTexture",
        code: Mb,
        site: yb.v,
        fatal: !1,
        message: Tb,
        details: Eb,
        error: bb.error
      })
    }
    const RU = {
      previewAnimations: {
        site: tb,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: sb,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function kU(bb, ab, Ub, Ab) {
      const {
        site: Mb,
        prefix: Tb,
        name: Eb
      } = RU[bb], {
        stage: Yb,
        error: Bb
      } = Ub;
      return ka({
        kind: bb,
        code: "decode" === Yb ? null === Bb ? `${Tb}-decode` : `${Tb}-trap` : Bb instanceof fb.d ? `${Tb}-${Bb.status}` : `${Tb}-network`,
        site: Mb,
        fatal: !1,
        message: "decode" === Yb ? `${Eb} did not decode` : `${Eb} could not load`,
        details: {
          url: ab,
          wasmBuild: Ab.wasm,
          clientVersion: Ab.client
        },
        error: Bb
      })
    }
    const yU = "staleBuild";

    function ZU(bb, ab, Ub) {
      const Ab = {
          failedSite: bb.site,
          url: bb.url,
          from: bb.from,
          sameBuild: String(bb.from === ab),
          reloadMs: String(Math.max(0, Date.now() - bb.at)),
          wasmBuild: Ub.wasm,
          clientVersion: Ub.client
        },
        Mb = `reloaded into a newer build after ${bb.site} failed to load: ${bb.error}`;
      return ka({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: yU,
        fatal: !1,
        message: Mb,
        details: Ab
      })
    }
  },
  40084: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Mb,
      f: () => Ab
    });
    const Ab = 3e4;
    class Mb {
      constructor(bb) {
        this.GX = bb, this.waitedMs = 0, this.lastMs = null
      }
      frame(bb, ab) {
        if (ab) return !0;
        const Ub = null === this.lastMs ? 0 : bb - this.lastMs;
        return this.lastMs = bb, Ub <= 900 && (this.waitedMs += Ub), !(this.waitedMs < Ab) && (this.GX(), !0)
      }
    }
  },
  4477: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Eb,
      f: () => Tb,
      g: () => Mb
    });
    var Ab = Ub(4479);

    function Mb(bb) {
      return "none" !== bb
    }

    function Tb(bb, ab) {
      if (!bb) return "none";
      switch (ab) {
        case Ab.X.Drawn:
          return "drawn";
        case Ab.X.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function Eb(bb) {
      return "drawn" === bb
    }
  },
  39714: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab,
      f: () => yb,
      i: () => Rb,
      j: () => kb,
      m: () => Pb,
      p: () => Xb,
      r: () => vb,
      u: () => Lb,
      v: () => jb
    });
    class Ab extends Error {
      constructor(bb) {
        super(`the join's code did not load: ${bb instanceof Error?bb.message:String(bb)}`, {
          cause: bb
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === bb || void 0 === bb ? void 0 : bb.request
      }
    }
    let Mb = null,
      Tb = null,
      Eb = null;
    const Yb = [];
    let Bb = null;

    function eb(bb, ab) {
      try {
        bb(ab)
      } catch (Ub) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", Ub)
      }
    }

    function vb() {
      return Bb
    }

    function Lb(bb) {
      Yb.push(bb), null !== Bb && eb(bb, Bb)
    }

    function Pb(bb) {
      return Mb ??= Promise.all([Ub.e(69), Ub.e(94), Ub.e(214), Ub.e(74), Ub.e(215), Ub.e(189), Ub.e(93), Ub.e(259), Ub.e(187), Ub.e(262), Ub.e(199), Ub.e(186), Ub.e(200), Ub.e(136), Ub.e(85), Ub.e(114), Ub.e(237), Ub.e(53)]).then((() => Ub(41666))).then((ab => {
        ab.loadAudio(bb), Bb = ab;
        for (const bb of Yb) eb(bb, ab);
        return ab
      })).catch((bb => {
        throw Mb = null, bb
      })), Mb
    }
    async function Xb(bb, ab) {
      try {
        const Ub = await Pb(bb);
        await Ub.loadClientGame(ab)
      } catch (Ub) {
        throw new Ab(Ub)
      }
    }

    function jb(bb, ab) {
      Tb = {
        running: bb,
        shell: ab
      }
    }

    function Rb() {
      return Eb
    }
    async function kb(bb) {
      const ab = Tb;
      if ((null === ab || void 0 === ab ? void 0 : ab.running) !== bb) throw new Error("the core's session has ended");
      const Ub = await Pb(ab.shell.audio).catch((bb => {
        throw new Ab(bb)
      }));
      if (null !== Eb) return Eb;
      if (Tb !== ab || bb.isStopped) throw new Error("the core stopped while the game code loaded");
      if (Eb = Ub.startGameHost(bb, ab.shell), null === Eb) throw new Error("the core's shared tables didn't read, so the game can't start");
      return Eb
    }

    function yb() {
      null !== Eb && (null !== Bb ? Bb.endGameHost(Eb) : Eb.closeGame()), Eb = null, Tb = null
    }
  },
  39992: (bb, ab, Ub) => {
    Ub.d(ab, {
      A: () => Lb,
      C: () => Yb,
      b: () => eb,
      f: () => Tb,
      i: () => Eb,
      m: () => Mb,
      n: () => Xb,
      p: () => vb,
      t: () => Bb,
      x: () => Pb
    });
    var Ab = Ub(1690);
    const Mb = new Uint8Array([12]),
      Tb = 2e3,
      Eb = 257;

    function Yb(bb) {
      const ab = new Uint8Array(4);
      return new DataView(ab.buffer).setUint32(0, bb, !0), ab
    }
    class Bb extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class eb extends Error {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(bb), this.stage = ab, this.code = Ub, this.serverText = Ab, this.name = "JoinError"
      }
    }
    class vb extends Error {
      constructor(bb) {
        super(bb), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class Lb extends Error {
      constructor(bb) {
        super((0, Ab.g)(bb), {
          cause: bb
        }), this.name = "TrafficCheckError"
      }
    }
    class Pb extends Error {
      constructor(bb, ab, Ub) {
        super(bb, {
          cause: Ub
        }), this.networkLost = ab, this.name = "SeatRequestError"
      }
    }
    class Xb extends Error {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(bb), this.code = ab, this.serverText = Ub, this.name = "MatchmakeError"
      }
    }
  },
  39998: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Pb,
      c: () => Lb
    });
    var Ab = Ub(2424),
      Mb = Ub(3148),
      Tb = Ub(38357),
      Eb = Ub(39985),
      Yb = Ub(39992),
      Bb = Ub(40001);
    const eb = "seat reservation expired.",
      vb = "early_leave";

    function Lb(bb) {
      if (bb instanceof Tb.i) return "expected";
      if (bb instanceof Yb.x) return bb.networkLost ? "expected" : "unrecognised";
      if (bb instanceof Yb.b) {
        if ("closed" === bb.stage && (0 === bb.code || (0, Mb.g)(bb.code))) return "expected";
        if ("roomError" === bb.stage && (bb.serverText === eb || bb.serverText === vb)) return "expected"
      }
      return bb instanceof Yb.b || bb instanceof Yb.n ? null === (0, Eb.j)(bb.code).name ? "unrecognised" : "known" : (0, Ab.h)(bb) ? "expected" : bb instanceof Yb.A || bb instanceof Bb.g ? "known" : "unrecognised"
    }

    function Pb(bb) {
      return bb instanceof Tb.i ? "timedOut" : "expected" !== Lb(bb) || (0, Ab.h)(bb) || bb instanceof Yb.b && 1001 === bb.code ? void 0 : "failed"
    }
  },
  40062: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => pb,
      g: () => Lb,
      j: () => xb,
      k: () => yb,
      m: () => fb
    });
    var Ab = Ub(35921),
      Mb = Ub(35913);
    const Tb = 64 * Ab.e,
      Eb = 40 * Ab.g,
      Yb = 36 * Ab.g,
      Bb = 20 * Ab.g,
      eb = 2 * Ab.g,
      vb = 5 * Ab.g;

    function Lb(bb) {
      return "footprint" !== bb
    }
    const Pb = 2 * Ab.g,
      Xb = 4 * Ab.g,
      jb = 35 * Ab.g + Pb + Xb,
      Rb = 6.5 * Ab.g,
      kb = 132.5 * Ab.e;

    function yb(bb) {
      const ab = Rb + (0, Mb.l)(bb) + bb * kb;
      return Math.ceil((2 * jb + ab) / Tb) * Tb
    }
    const Zb = yb(Mb.e),
      Db = (Ab.g, Ab.g, Ab.g, {
        targetBytes: Eb,
        leastBytes: Bb
      }),
      zb = {
        targetBytes: Yb,
        leastBytes: Bb
      };

    function xb(bb) {
      return bb >= Mb.e ? Db : zb
    }
    const ib = 2 * Tb;

    function fb(bb, ab, Ub) {
      return bb + ab + ib > (null !== Ub && void 0 !== Ub ? Ub : Zb)
    }
    const mb = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? bb => {
        requestIdleCallback(bb)
      } : null
    };
    class pb {
      constructor(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : mb;
        this.memory = bb, this.readPeakStoredChunks = ab, this.onError = Ub, this.clock = Ab, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(bb, ab, Ub) {
        this.shedding = {
          shed: bb,
          GX: ab,
          readDistanceInUse: Ub
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(bb) {
        this.footprint = bb
      }
      setCeiling(bb) {
        this.ceilingBytes = bb, this.call((() => {
          this.memory.setCeiling(bb)
        }), void 0)
      }
      ceilingMayRefuse(bb) {
        return fb(this.memory.memoryBytes(), bb, this.ceilingBytes)
      }
      reserveAtJoin(bb) {
        let {
          targetBytes: ab,
          leastBytes: Ub
        } = bb;
        const Ab = this.memory.memoryBytes(),
          Mb = Ab + Ub,
          Tb = Math.max(ab + (this.ballastOn() ? vb : 0), Mb),
          Eb = this.call((() => this.memory.reserveUpFront(Tb) ? "target" : Tb > Mb && this.memory.reserveUpFront(Mb) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== Eb) {
          const bb = "least" === Eb ? `took ${Mb} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${Tb} bytes was refused at ${Ab} bytes; ${bb}`)
        }
        return this.joinReserveTaken = Eb, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== Eb && this.shedFor("joinReserve"), "none" !== Eb
      }
      afterFrame() {
        if (this.stopped) return;
        const bb = this.clock.now(),
          ab = null !== this.stepsHeldUntil && bb >= this.stepsHeldUntil;
        if (ab && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && bb >= this.ballastCheckAt && (this.takeBallast(bb), this.stopped)) return;
        const Ub = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          Ab = ab && "now" === Ub ? "none" : Ub,
          {
            requestIdle: Mb
          } = this.clock;
        "now" === Ab || null !== this.pendingSince && bb - this.pendingSince >= 500 ? this.step() : "idle" === Ab && null === this.pendingSince && (null === Mb ? this.step() : (this.pendingSince = bb, Mb((() => {
          null !== this.pendingSince && this.step()
        })))), bb - this.statsAt >= 1e3 && (this.statsAt = bb, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var bb, ab;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (ab = this.shedding.readDistanceInUse()) && void 0 !== ab ? ab : this.distanceInUse);
          null === (bb = this.footprint) || void 0 === bb || bb.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(bb, ab) {
        this.noteWorker(`Mesh${bb}`, ab)
      }
      meshWorkerGone(bb) {
        this.workerGone(`Mesh${bb}`)
      }
      noteWorldgen(bb) {
        this.noteWorker("Worldgen", bb)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(bb, ab) {
        const Ub = this.workers.get(bb);
        null !== Ub && void 0 !== Ub && Ub.gone && (this.replacedRefusals.reserves += Ub.stats.reservesRefused, this.replacedRefusals.allocations += Ub.stats.allocationsRefused), this.workers.set(bb, {
          stats: ab,
          gone: !1
        })
      }
      workerGone(bb) {
        const ab = this.workers.get(bb);
        ab && (ab.gone = !0)
      }
      details() {
        var bb, ab;
        const Ub = {
          wasmMemoryNow: `${(0,Ab.j)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (Ub.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (Ub.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const Mb = this.main;
        if (Mb) {
          Ub.wasmMemoryMain = Nb(Mb);
          const bb = Math.max(0, Mb.peakLiveBytes - this.ballastPeakBytes),
            ab = 0 === this.peakStoredChunks ? "-" : (bb / this.peakStoredChunks / Ab.e).toFixed(1);
          Ub.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${ab} KiB`
        }
        for (const [Ab, {
            stats: Eb,
            gone: Yb
          }] of this.workers) Ub[`wasmMemory${Ab}`] = Nb(Eb) + (Yb ? " (gone)" : "");
        const Tb = null !== (bb = null === (ab = this.footprint) || void 0 === ab ? void 0 : ab.describe()) && void 0 !== bb ? bb : null;
        return null !== Tb && (Ub.wasmMemoryFootprint = Tb), Ub
      }
      pageKillSnapshot() {
        var bb, ab, Ub, Mb, Tb;
        let Eb = (null !== (bb = null === (ab = this.main) || void 0 === ab ? void 0 : ab.reservesRefused) && void 0 !== bb ? bb : 0) + this.replacedRefusals.reserves,
          Yb = (null !== (Ub = null === (Mb = this.main) || void 0 === Mb ? void 0 : Mb.allocationsRefused) && void 0 !== Ub ? Ub : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: Ab
          }
          of this.workers.values()) Eb += Ab.reservesRefused, Yb += Ab.allocationsRefused;
        return {
          wasmMainMiB: Number((0, Ab.j)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, Ab.j)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: Eb,
          refusedAllocations: Yb,
          sheds: this.sheds,
          ...null === (Tb = this.footprint) || void 0 === Tb ? void 0 : Tb.snapshot()
        }
      }
      workersMemoryBytes() {
        let bb = 0;
        for (const {
            stats: ab,
            gone: Ub
          }
          of this.workers.values()) bb += Ub ? 0 : ab.memoryBytes;
        return bb
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(eb)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(bb) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = bb + 1e3;
        const ab = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, ab)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(bb) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${bb}: frames grow on demand from here`)
      }
      shedFor(bb) {
        const {
          shedding: ab
        } = this;
        if (null === ab) return;
        this.pendingSince = null;
        const Ub = this.call((() => ab.shed(bb)), null);
        this.stopped || (null !== Ub ? (this.sheds++, this.shedCap = Ub, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), ab.GX(bb, this.sheds, this.details())) : Lb(bb) && this.stopSteps("nothing is left to shed"))
      }
      call(bb, ab) {
        if (this.stopped) return ab;
        try {
          return bb()
        } catch (Ub) {
          return this.stop(), this.onError(Ub), ab
        }
      }
    }

    function Nb(bb) {
      const ab = (bb, ab) => `${bb}/${(0,Ab.j)(ab)}`;
      return `memory ${(0,Ab.j)(bb.memoryBytes)} live ${(0,Ab.j)(bb.liveBytes)} peak ${(0,Ab.j)(bb.peakLiveBytes)} unused ${(0,Ab.j)(bb.unusedBytes)} ceiling ${(0,Ab.j)(bb.ceilingBytes)} MiB; grows upFront ${ab(bb.grows.upFront,bb.grownBytes.upFront)} ahead ${ab(bb.grows.ahead,bb.grownBytes.ahead)} inFrame ${ab(bb.grows.onDemandInFrame,bb.grownBytes.onDemandInFrame)} other ${ab(bb.grows.onDemand,bb.grownBytes.onDemand)}; refused reserves ${bb.reservesRefused} allocations ${bb.allocationsRefused}`
    }
  },
  40066: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Bb,
      h: () => eb,
      i: () => Xb,
      m: () => Lb
    });
    var Ab = Ub(3382),
      Mb = Ub(4479),
      Tb = Ub(40073),
      Eb = Ub(40076),
      Yb = Ub(35745);
    const Bb = 395,
      eb = 2147483648,
      vb = new Uint8Array(0);
    class Lb extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class Pb extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class Xb {
      constructor(bb, ab, Ub) {
        var Ab, Mb, Eb, Yb;
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = bb, this.build = ab, this.onFailure = Ub, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.RX = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (Ab = Bb.fetchFile) && void 0 !== Ab ? Ab : bb => (0, Tb.i)(bb), this.onWritten = null !== (Mb = Bb.onWritten) && void 0 !== Mb ? Mb : null, this.onTaken = null !== (Eb = Bb.onTaken) && void 0 !== Eb ? Eb : null, this.onPackFileFailed = null !== (Yb = Bb.onPackFileFailed) && void 0 !== Yb ? Yb : null, this.startupLeft = new Set(bb.startup);
        for (const Tb of bb.startup) this.request(Tb)
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
      drawnUrl(bb) {
        return this.drawn.get(bb)
      }
      request(bb) {
        const ab = this.pending.get(bb);
        if (!0 === (null === ab || void 0 === ab ? void 0 : ab.ask)) return;
        const Ub = this.bX(bb, !0);
        Ub.recheck = void 0 !== ab;
        const Ab = this.drawn.get(bb);
        if (void 0 !== Ab) return Ub.PY = !0, Ub.recheck = !0, void this.fetch(bb, Ub, Ab);
        this.fetchWanted(bb, Ub)
      }
      async refresh() {
        const bb = ++this.refreshes,
          ab = new Set;
        for (const Eb of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const bb of Eb) 0 === (bb & Tb.f) && ab.add(bb);
        const Ub = [...ab];
        let Ab;
        try {
          Ab = await Promise.all(Ub.map((bb => this.wanted(bb))))
        } catch {
          return null
        }
        if (bb !== this.refreshes) return null;
        const Mb = {
          resent: 0,
          refetched: 0,
          delivered: Ub.filter((bb => this.drawn.has(bb))).length
        };
        return Ub.forEach(((bb, ab) => {
          const {
            url: Ub,
            inPlaceOf: Tb
          } = Ab[ab], Eb = this.pending.get(bb);
          if (void 0 !== Eb) {
            if (Eb.PY || void 0 === Eb.url) return void(Eb.recheck = !0);
            if (Eb.url === Ub) return;
            Mb.refetched++;
            const ab = this.bX(bb, Eb.ask);
            return ab.recheck = Eb.recheck, void this.fetch(bb, ab, Ub, Tb)
          }
          const Yb = this.written.get(bb);
          void 0 === Yb ? this.drawn.get(bb) !== (null !== Ub && void 0 !== Ub ? Ub : void 0) && (Mb.resent++, this.fetch(bb, this.bX(bb, !1), Ub, Tb)) : Yb.url !== (null !== Ub && void 0 !== Ub ? Ub : "") && (Yb.attempt.recheck = !0)
        })), Mb
      }
      taken(bb, ab) {
        const Ub = new Set,
          Ab = new Set;
        for (const Mb of Array.from(ab)) 0 === (Mb & eb) ? Ub.add(Mb) : Ab.add((Mb & ~eb) >>> 0);
        for (const [Mb, Tb] of this.written) Tb.seq > bb || (this.written.delete(Mb), Ub.has(Tb.seq) ? this.refusedFile(Mb, Tb) : this.takenFile(Mb, Tb, !Tb.empty && !Ab.has(Tb.seq)))
      }
      takenFile(bb, ab, Ub) {
        const {
          attempt: Ab
        } = ab;
        if (Ub) {
          var Mb;
          this.drawn.set(bb, ab.url), this.undrawn.delete(bb), void 0 !== Ab.inPlaceOf ? this.refusedPack.set(bb, Ab.inPlaceOf) : Ab.PY || this.refusedPack.delete(bb), null === (Mb = this.onTaken) || void 0 === Mb || Mb.call(this, bb, !0);
          const Ub = this.pending.get(bb);
          if (!0 === (null === Ub || void 0 === Ub ? void 0 : Ub.PY) && Ub.url !== ab.url) {
            const Ub = this.bX(bb, !0);
            Ub.PY = !0, Ub.recheck = !0, this.fetch(bb, Ub, ab.url)
          }
        } else {
          var Tb;
          this.drawn.has(bb) || this.undrawn.add(bb), null === (Tb = this.onTaken) || void 0 === Tb || Tb.call(this, bb, !1)
        }
        Ab.recheck && this.resendIfChanged(bb)
      }
      refusedFile(bb, ab) {
        var Ub, Ab;
        if (null === (Ub = this.onTaken) || void 0 === Ub || Ub.call(this, bb, !1), this.refusedPack.set(bb, ab.url), this.pending.has(bb)) return void(null === (Ab = this.onPackFileFailed) || void 0 === Ab || Ab.call(this, bb, jb(ab.url)));
        const Mb = this.bX(bb, ab.attempt.ask);
        Mb.recheck = ab.attempt.recheck, this.afterRefusal(bb, Mb, ab.url)
      }
      async afterRefusal(bb, ab, Ub) {
        var Ab;
        let Mb;
        try {
          Mb = await this.wanted(bb)
        } catch (Tb) {
          return void(this.pending.get(bb) === ab && this.giveUp(bb, ab, Ub, Tb))
        }
        this.pending.get(bb) === ab && (Mb.inPlaceOf !== Ub ? ab.ask || (null !== (Ab = Mb.url) && void 0 !== Ab ? Ab : void 0) !== this.drawn.get(bb) ? this.fetch(bb, ab, Mb.url, Mb.inPlaceOf) : this.pending.delete(bb) : this.fallBack(bb, ab, Ub, jb(Ub)))
      }
      bX(bb, ab) {
        const Ub = {
          url: void 0,
          ask: ab,
          PY: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(bb, Ub);
        for (let Ab = this.ready.length - 1; Ab >= 0; Ab--) this.ready[Ab].file === bb && this.ready.splice(Ab, 1);
        return Ub
      }
      async wanted(bb) {
        const ab = await this.files.url(bb);
        return null !== ab && this.refusedPack.get(bb) === ab ? {
          url: await this.files.shippedUrl(bb),
          inPlaceOf: ab
        } : {
          url: ab,
          inPlaceOf: void 0
        }
      }
      fetchWanted(bb, ab) {
        const Ub = this.files.url(bb);
        Ub instanceof Promise ? Ub.then((Ub => {
          this.fetchFound(bb, ab, Ub)
        }), (Ub => {
          this.pending.get(bb) === ab && this.giveUp(bb, ab, "", Ub)
        })) : this.fetchFound(bb, ab, Ub)
      }
      fetchFound(bb, ab, Ub) {
        null !== Ub && this.refusedPack.get(bb) === Ub ? Promise.resolve(this.files.shippedUrl(bb)).then((Ab => {
          this.fetch(bb, ab, Ab, Ub)
        }), (Ab => {
          this.pending.get(bb) === ab && this.giveUp(bb, ab, Ub, Ab)
        })) : this.fetch(bb, ab, Ub)
      }
      fetch(bb, ab, Ub, Ab) {
        this.pending.get(bb) === ab && (ab.url = Ub, ab.inPlaceOf = Ab, null !== Ub ? this.load(bb, ab, Ub) : this.buildFile(bb, ab, "", vb))
      }
      load(bb, ab, Ub) {
        const Ab = this.RX.get(bb);
        (null === Ab || void 0 === Ab ? void 0 : Ab.url) !== Ub ? this.fetchFile(Ub).then((Ab => {
          var Mb, Tb;
          this.pending.get(bb) === ab && (this.keptTotal += Ab.byteLength - (null !== (Mb = null === (Tb = this.RX.get(bb)) || void 0 === Tb ? void 0 : Tb.glb.byteLength) && void 0 !== Mb ? Mb : 0), this.RX.set(bb, {
            url: Ub,
            glb: Ab
          }), this.buildFile(bb, ab, Ub, Ab))
        }), (Ab => {
          this.pending.get(bb) === ab && this.fallBack(bb, ab, Ub, Ab)
        })) : this.buildFile(bb, ab, Ub, Ab.glb)
      }
      buildFile(bb, ab, Ub, Ab) {
        let Mb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Eb = Ab.byteLength > 0 && (0, Tb.m)(Ub) ? (bb | Tb.b) >>> 0 : bb;
        this.queueRecord(bb, ab, Ub, Ab, this.build(Eb, Ab), Mb)
      }
      queueRecord(bb, ab, Ub, Ab, Tb, Yb) {
        Tb.then((Tb => {
          if (this.pending.get(bb) !== ab) return;
          if (Mb.p + (0, Mb.ae)(Tb.byteLength) > Mb.xc) return void this.ringRefused(bb, ab, Ub, new Lb(`${Rb(Ub)}'s record is ${Tb.byteLength-Eb.c} bytes, past the cmd ring's ${Mb.xc}`), Yb);
          const Bb = {
            file: bb,
            url: Ub,
            payload: Tb,
            glb: Ab,
            attempt: ab
          };
          Yb ? this.ready.unshift(Bb) : this.ready.push(Bb)
        }))
      }
      async fallBack(bb, ab, Ub, Ab) {
        var Mb;
        let Tb = null,
          Eb = Ab;
        try {
          Tb = await this.files.shippedUrl(bb)
        } catch (Yb) {
          Eb = Yb
        }
        this.pending.get(bb) === ab && (null !== Tb && Tb !== Ub ? (null === (Mb = this.onPackFileFailed) || void 0 === Mb || Mb.call(this, bb, Ab), ab.ask || this.drawn.get(bb) !== Tb ? (ab.url = Tb, ab.inPlaceOf = Ub, this.load(bb, ab, Tb)) : this.pending.delete(bb)) : this.giveUp(bb, ab, Ub, Eb))
      }
      ringRefused(bb, ab, Ub, Ab) {
        let Mb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, Tb.m)(Ub) ? this.fallBack(bb, ab, Ub, Ab): this.giveUp(bb, ab, Ub, Ab, Mb)
      }
      giveUp(bb, ab, Ub, Mb) {
        let Tb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: bb,
          url: Rb(Ub),
          error: Mb,
          startup: this.startupLeft.has(bb)
        }), ab.ask || !this.drawn.has(bb) ? (0, Ab.Q)(Mb) ? this.queueRecord(bb, ab, Ub, vb, Promise.resolve((0, Eb.o)(bb, (0, Yb.e)(Mb))), Tb) : this.buildFile(bb, ab, Ub, vb, Tb) : this.pending.delete(bb)
      }
      async resendIfChanged(bb) {
        var ab;
        if (0 !== (bb & Tb.f)) return;
        let Ub;
        try {
          Ub = await this.wanted(bb)
        } catch {
          return
        }(null !== (ab = Ub.url) && void 0 !== ab ? ab : void 0) === this.drawn.get(bb) || this.pending.has(bb) || this.written.has(bb) || this.fetch(bb, this.bX(bb, !1), Ub.url, Ub.inPlaceOf)
      }
      drain(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === bb) return;
        let Ub = 0,
          Ab = 0;
        for (; Ab < this.ready.length && Ub < 262144;) {
          const Yb = this.ready[Ab];
          if (this.written.has(Yb.file)) {
            Ab++;
            continue
          }
          const vb = this.nextSeq;
          new DataView(Yb.payload.buffer, Yb.payload.byteOffset, Yb.payload.byteLength).setUint32(Eb.f, vb, !0);
          const Pb = Yb.attempt.PY && Yb.glb.byteLength > 0 && this.drawn.get(Yb.file) === Yb.url;
          if (bb(Bb, Pb ? 1 : 0, Yb.payload)) {
            if (this.nextSeq = vb >= eb - 1 ? 1 : vb + 1, this.ready.splice(Ab, 1), Ub += Yb.payload.byteLength, this.pending.delete(Yb.file), this.startupLeft.delete(Yb.file), this.written.set(Yb.file, {
                seq: vb,
                url: Yb.url,
                empty: 0 === Yb.glb.byteLength,
                attempt: Yb.attempt
              }), Yb.glb.byteLength > 0) try {
              var Mb;
              null === (Mb = this.onWritten) || void 0 === Mb || Mb.call(this, Yb.file, Yb.glb)
            } catch (Tb) {
              console.warn("ModelFeed: reading the file's images failed", Tb)
            }
          } else {
            if (null === ab || 0 === Yb.glb.byteLength || ab(Yb.payload.byteLength)) return;
            this.ready.splice(Ab, 1);
            const bb = new Lb(`${Rb(Yb.url)}'s record is ${Yb.payload.byteLength-Eb.c} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(Yb.file, Yb.attempt, Yb.url, bb, !0)
          }
        }
      }
    }

    function jb(bb) {
      return new Pb(`presentation refused ${Rb(bb)}`)
    }

    function Rb(bb) {
      return bb.startsWith("data:") ? `${bb.slice(0,Math.min(Math.max(bb.indexOf(","),5),64))},...` : bb
    }
  },
  40073: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Eb,
      f: () => Tb,
      i: () => vb,
      m: () => Yb,
      o: () => eb,
      q: () => Bb
    });
    var Ab = Ub(3382),
      Mb = Ub(2939);
    const Tb = 2147483648,
      Eb = 1073741824;

    function Yb(bb) {
      return bb.startsWith("data:")
    }

    function Bb(bb) {
      let {
        onTableFailed: ab,
        packUrl: Ub
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Ab = eb();
      Ab.catch((bb => {
        null === ab || void 0 === ab || ab(bb)
      }));
      const Mb = async ab => (await Ab).fileUrl((ab & ~Tb) >>> 0, bb);
      return {
        startup: [],
        url: async bb => {
          if (Ub && 0 === (bb & Tb)) {
            const ab = await Ab,
              Mb = ab.filePackName(bb),
              Tb = null === Mb || "lifeform" === ab.fileSource(bb) ? null : Ub(Mb);
            if (null !== Tb) return Tb
          }
          return Mb(bb)
        },
        shippedUrl: Mb
      }
    }

    function eb() {
      return Ub.e(41).then((() => Ub(42484)))
    }
    async function vb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return bb.startsWith("data:") ? (0, Mb.b)(bb.slice(bb.indexOf(",") + 1), ab) : (0, Ab.E)(bb, {
        spare: ab
      })
    }
  },
  40076: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => eb,
      f: () => vb,
      h: () => Xb,
      k: () => kb,
      o: () => jb,
      s: () => Pb,
      w: () => Rb
    });
    const Ab = 826427981,
      Mb = 1,
      Tb = 2,
      Eb = 44,
      Yb = 46,
      Bb = 58,
      eb = 8,
      vb = 4;

    function Lb(bb, ab, Ub) {
      const Mb = (new TextEncoder).encode(Ub),
        Tb = eb + 4 * (ab.length + 2),
        Eb = new Uint8Array(Tb + (Mb.byteLength + 3 & -4)),
        Yb = new DataView(Eb.buffer);
      return Yb.setUint32(0, bb, !0), Yb.setUint32(eb, Ab, !0), ab.forEach(((bb, ab) => {
        Yb.setUint32(eb + 4 * (ab + 1), bb, !0)
      })), Yb.setUint32(Tb - 4, Mb.byteLength, !0), Eb.set(Mb, Tb), Eb
    }

    function Pb(bb, ab) {
      return Lb(bb, [Tb], ab)
    }

    function Xb(bb, ab) {
      return Lb(bb, [Mb, Yb], ab)
    }

    function jb(bb, ab) {
      return Lb(bb, [Mb, Bb], ab)
    }

    function Rb(bb, ab) {
      return Lb(bb, [Mb, Eb], ab)
    }

    function kb(bb) {
      const ab = eb;
      if (bb.byteLength < ab + 12) return !1;
      const Ub = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
      return Ub.getUint32(ab, !0) === Ab && Ub.getUint32(ab + 4, !0) === Mb && Ub.getUint32(ab + 8, !0) === Eb
    }
  },
  40056: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Zb,
      f: () => yb,
      i: () => ib,
      k: () => xb,
      n: () => fb,
      p: () => Rb
    });
    var Ab = Ub(4485),
      Mb = Ub(39955);
    const Tb = 18,
      Eb = 19,
      Yb = 20,
      Bb = {
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
        [Tb]: "retry linked",
        [Eb]: "fallback linked",
        [Yb]: "fallback failed",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function eb(bb, ab) {
      return bb === Tb ? "program retry" : bb === Eb || bb === Yb ? `program fallback ${ab}` : "program"
    }
    const vb = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      Lb = {
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
      Pb = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      Xb = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld"
      },
      jb = {
        1280: "invalid enum",
        1281: "invalid value",
        1282: "invalid operation",
        1285: "out of memory",
        1286: "invalid framebuffer operation",
        37442: "context lost"
      };

    function Rb(bb) {
      return String(bb).replace(/\d/g, (bb => String.fromCharCode(97 + Number(bb))))
    }

    function kb(bb, ab) {
      var Ub;
      return null !== (Ub = bb[ab]) && void 0 !== Ub ? Ub : Rb(ab)
    }

    function yb() {
      return Rb((0, Mb.b)())
    }

    function Zb(bb, ab) {
      switch (bb) {
        case Ab.h.RenderSceneRowNotDrawn:
          return {
            words: ` ${kb(Lb,ab)}`, instance: String(ab), group: String(bb)
          };
        case Ab.h.RenderChunkMeshNotDrawn: {
          const Ub = 0 === (128 & ab) ? "" : " shortage",
            Ab = ab >>> 8;
          return {
            words: ` ${kb(Pb,127&ab)}${Ub}${0===Ab?"":` kind ${Rb(Ab)}`}`,
            instance: String(ab),
            group: String(bb)
          }
        }
        case Ab.h.RenderInternal: {
          const Ub = kb(vb, 255 & ab),
            Ab = ab >>> 8 & 255;
          if (0 === Ab) return {
            words: ` ${Ub}`,
            instance: String(ab),
            group: String(bb)
          };
          const Mb = kb(Bb, Ab),
            Tb = ab >>> 16;
          return {
            words: ` ${Ub} ${Mb} program ${Rb(Tb)}`,
            instance: `${Ub} ${Mb}`,
            group: eb(Ab, Ub),
            gpuDetails: {
              programFailure: Mb,
              program: String(Tb)
            }
          }
        }
        case Ab.h.RenderSerialLinks: {
          const Ub = kb(Xb, ab);
          return {
            words: ` ${Ub}`,
            instance: String(ab),
            group: String(bb),
            gpuDetails: {
              serialLinks: Ub
            }
          }
        }
        case Ab.h.RenderGlErrorAfterRestore: {
          const Ub = kb(jb, 65535 & ab),
            Ab = ab >>> 16,
            Mb = 65535 !== Ab;
          return {
            words: ` ${Ub}${Mb?` program ${Rb(Ab)}`:""}`,
            instance: String(ab),
            group: String(bb),
            gpuDetails: Mb ? {
              glError: Ub,
              program: String(Ab)
            } : {
              glError: Ub
            }
          }
        }
        default:
          return null
      }
    }
    const Db = 2,
      zb = new Map;

    function xb(bb) {
      let {
        group: ab,
        instance: Ub
      } = bb, Ab = zb.get(ab);
      return void 0 === Ab && (Ab = [], zb.set(ab, Ab)), !Ab.includes(Ub) && (Ab.length >= Db || (Ab.push(Ub), !1))
    }

    function ib() {
      return zb.size > 0
    }

    function fb() {
      zb.clear()
    }
  },
  40001: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => yb,
      g: () => Zb,
      i: () => kb,
      l: () => ib
    });
    var Ab = Ub(6273),
      Mb = Ub(22),
      Tb = Ub(4019),
      Eb = Ub(4485),
      Yb = Ub(6271),
      Bb = Ub(40003);

    function eb(bb, ab) {
      const Ub = (0, Yb.d)(ab.variants);
      return bb.setShaderPack(Ub.variantFlags, Ub.hooks, Ub.moduleCodes, (0, Bb.v)(ab.layers), Bb.l[ab.OT], ab.keepCircleShadows)
    }
    const vb = 0,
      Lb = 1,
      Pb = 2,
      Xb = "shaderPack:failedToCompile",
      jb = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      Rb = new Set(["not_requested", "off_after_loss", "gpu_class_webgl"]);

    function kb(bb, ab) {
      var Ub;
      const Ab = null !== (Ub = null === bb || void 0 === bb ? void 0 : bb.reason) && void 0 !== Ub ? Ub : "none";
      return jb.has(Ab) ? {
        messageKey: ab ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === Ab && "override" === (null === bb || void 0 === bb ? void 0 : bb.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: Rb.has(Ab) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    const yb = {
      messageKey: "shaderPack:failedDeviceGraphics",
      noAdapter: !1
    };
    class Zb extends Error {
      constructor(bb) {
        super(`the shader pack can't run in this game: ${bb}`), this.messageKey = bb, this.name = "ShaderPackJoinError"
      }
    }
    const Db = "strict";
    class zb {
      constructor(bb) {
        this.deps = bb, this.pagePack = void 0, this.loaded = null, this.OT = Db, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = bb.load().catch((ab => (bb.warn("the shader pack could not load: the game draws without it", ab), {
          status: "none"
        }))).then((bb => (this.loaded = bb, "active" === bb.status && (this.handOverToPreviews(bb), null !== bb.harnessPolicy && (this.OT = bb.harnessPolicy, this.handOver())), bb)))
      }
      async join(bb) {
        this.leave();
        const ab = this.game,
          [Ub, Mb] = await Promise.all([this.pagePack, this.policyOf(bb)]);
        if (ab !== this.game || "none" === Ub.status) return null;
        const Tb = "active" === Ub.status ? Ub.pack.variants : Ub.variants,
          Eb = (0, Ab.i)(Tb, Mb);
        if (Eb && "active" === Ub.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (Eb) {
          const bb = this.cantRun(Ub, Mb);
          if (null !== bb) return bb
        } else if ("blocked" === Ub.status || null === this.deps.core) return null;
        return this.OT = Mb, this.handOver(), Eb && this.refused ? Xb : (this.joined = !0, this.offInThisGame = !Eb, null)
      }
      async replay(bb) {
        const ab = await this.join(bb);
        null === ab ? this.playable() : this.deps.failInGame(ab)
      }
      cantRun(bb, ab) {
        const {
          core: Ub,
          noWebGpu: Ab
        } = this.deps;
        if ("blocked" === bb.status) {
          return "shaderPack:failedUnchecked" === bb.messageKey && null === Ub && Ab.noAdapter ? Ab.messageKey : bb.messageKey
        }
        return this.refused || this.failedPolicies.has(ab) ? Xb : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var bb;
        return this.runsInJoinedGame() && "active" === (null === (bb = this.loaded) || void 0 === bb ? void 0 : bb.status) ? function(bb, ab) {
          const Ub = bb.filter((bb => (0, Ab.i)([bb], ab))),
            Mb = bb => Ub.some((ab => ab[bb]));
          return {
            sceneDepth: Mb("sceneDepth"),
            sunShadow: Mb("sunShadow"),
            airShadow: Mb("airShadow")
          }
        }(this.loaded.pack.variants, this.OT) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(Xb) : (null !== this.couldntRun ? this.notify(Tb.e, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.OT) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(bb) {
        for (const {
            code: ab,
            detail: Ub
          }
          of bb)
          if (ab === Eb.h.RenderShaderPackNotRun) switch (255 & Ub) {
            case vb:
              this.refused = !0, this.failed();
              break;
            case Lb:
              this.failedPolicies.add(this.OT), this.failed();
              break;
            case Pb:
              this.failedModelPolicies.add(this.OT), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(Xb) : this.failedWhileJoining = !0)
      }
      fail(bb) {
        this.leave(), this.deps.failInGame(bb)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(bb, ab) {
        const Ub = this.game;
        this.deps.notify(bb, (() => Ub === this.game && this.joined), ab)
      }
      handOver() {
        var bb;
        const {
          core: ab
        } = this.deps;
        null !== ab && "active" === (null === (bb = this.loaded) || void 0 === bb ? void 0 : bb.status) && (eb(ab, {
          ...this.loaded.pack,
          OT: this.OT
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(bb) {
        let {
          pack: ab,
          harnessPolicy: Ub
        } = bb;
        const {
          previews: Ab
        } = this.deps;
        null !== Ab && eb(Ab, {
          ...ab,
          OT: null !== Ub && void 0 !== Ub ? Ub : Db
        })
      }
      policyOf(bb) {
        return this.deps.policyOf(bb).catch((bb => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", bb), Db)))
      }
    }
    const xb = "wasmShaderPackNotice";

    function ib(bb, ab, Ub, Ab) {
      return Mb.m.subscribe(xb, (bb => {
        let {
          translationKey: ab,
          stillCurrent: Ub,
          reasonKey: Ab
        } = bb;
        Ub() && Mb.m.IR("chat", (0, Tb.l)(ab, Ab))
      })), new zb({
        load: fb,
        policyOf: mb,
        core: bb,
        previews: ab,
        noWebGpu: Ub,
        notify: (bb, ab, Ub) => {
          const Ab = {
            translationKey: bb,
            stillCurrent: ab,
            reasonKey: Ub
          };
          Mb.m.IR(xb, Ab, !0)
        },
        failInGame: bb => {
          Mb.m.IR(Tb.i, bb)
        },
        warn: Ab
      })
    }
    async function fb() {
      const [{
        shaderPackPage: bb,
        harnessShaderPackMode: ab
      }, {
        shaderPackTextures: Ab
      }] = await Promise.all([Ub.e(129).then((() => Ub(38489))), Ub.e(130).then((() => Ub(6262)))]), Mb = await bb.load();
      return "active" !== Mb.status ? Mb : {
        status: "active",
        pack: {
          variants: Mb.pack.variants,
          layers: Ab().layers,
          keepCircleShadows: Mb.pack.keepCircleShadows
        },
        harnessPolicy: ab()
      }
    }
    async function mb(bb) {
      var ab;
      const [{
        harnessShaderPackMode: Ab
      }, {
        getShaderPackPolicy: Mb
      }] = await Promise.all([Ub.e(129).then((() => Ub(38489))), Ub.e(89).then((() => Ub(40370)))]);
      return null !== (ab = Ab()) && void 0 !== ab ? ab : Mb(bb)
    }
  },
  40092: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Yb,
      d: () => kb,
      h: () => Bb,
      j: () => eb,
      m: () => vb,
      q: () => Pb
    });
    var Ab = Ub(40101),
      Mb = Ub(40103);
    const Tb = "atlas:",
      Eb = 3e4;
    class Yb extends Error {
      constructor(bb, ab) {
        super(`fetching ${bb} answered HTTP ${ab}`), this.url = bb, this.status = ab, this.name = "TerrainTextureFetchError"
      }
    }

    function Bb(bb) {
      if (!bb.startsWith(Tb)) return null;
      const ab = Number(bb.slice(Tb.length));
      return Number.isInteger(ab) && ab >= 0 ? ab : null
    }
    async function eb() {
      const bb = await Ub.e(201).then((() => Ub(33702)));
      return {
        atlasSheets: bb.blockAtlasUrls,
        texture: ab => {
          var Ub, Ab, Tb;
          return null !== (Ub = null !== (Ab = null !== (Tb = bb.animatedBlockTextures[ab]) && void 0 !== Tb ? Tb : bb.rotatedBlockTextures[ab]) && void 0 !== Ab ? Ab : Mb.b[ab]) && void 0 !== Ub ? Ub : null
        }
      }
    }
    async function vb(bb) {
      const ab = new AbortController,
        Ub = setTimeout((() => {
          ab.abort(new DOMException(`${bb} took over ${Eb} ms`, "TimeoutError"))
        }), Eb);
      let Ab;
      try {
        const Ub = await fetch(bb, {
          signal: ab.signal
        });
        if (!Ub.ok) throw new Yb(bb, Ub.status);
        Ab = await Ub.blob()
      } finally {
        clearTimeout(Ub)
      }
      const Mb = await createImageBitmap(Ab, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return Pb(Mb)
      } finally {
        Mb.close()
      }
    }
    const Lb = 8192;

    function Pb(bb) {
      const {
        width: ab,
        height: Ub
      } = bb, Mb = Math.max(1, Math.min(Ub, Lb)), Tb = (0, Ab.f)(ab, Mb, {
        willReadFrequently: !0
      });
      if (!Tb) throw new Error("no 2D context to read the texture back");
      Tb.globalCompositeOperation = "copy";
      const Eb = new Uint8Array(ab * Ub * 4);
      for (let Ab = 0; Ab < Ub; Ab += Mb) {
        const Yb = Math.min(Mb, Ub - Ab);
        Tb.drawImage(bb, 0, Ab, ab, Yb, 0, 0, ab, Yb), Eb.set(Tb.getImageData(0, 0, ab, Yb).data, Ab * ab * 4)
      }
      return {
        width: ab,
        height: Ub,
        pixels: Eb
      }
    }
    async function Xb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : vb;
      const Ab = [],
        Mb = await Promise.all(bb.map((async bb => {
          var Mb, Eb;
          const Yb = null !== (Mb = null === (Eb = ab.decoded) || void 0 === Eb ? void 0 : Eb.call(ab, bb)) && void 0 !== Mb ? Mb : null,
            eb = null === Yb ? function(bb, ab) {
              if (bb.startsWith(Tb)) {
                var Ub;
                const Ab = Bb(bb);
                return null === Ab ? null : null !== (Ub = ab.atlasSheets[Ab]) && void 0 !== Ub ? Ub : null
              }
              return ab.texture(bb)
            }(bb, ab) : null,
            vb = null !== Yb && void 0 !== Yb ? Yb : null === eb ? null : Ub(eb);
          if (null === vb) return Ab.push({
            name: bb,
            url: eb,
            error: new Error(`no URL for terrain texture ${bb}`)
          }), null;
          try {
            const ab = await vb;
            if (ab.pixels.byteLength !== ab.width * ab.height * 4) throw new Error(`decoded ${ab.pixels.byteLength} bytes for ${ab.width}x${ab.height} texels`);
            return {
              name: bb,
              texture: ab
            }
          } catch (Lb) {
            return Ab.push({
              name: bb,
              url: eb,
              error: Lb
            }), null
          }
        }))),
        Eb = Mb.filter((bb => null !== bb)),
        Yb = new Uint32Array(2 * Eb.length);
      Eb.forEach(((bb, ab) => {
        let {
          texture: Ub
        } = bb;
        Yb[2 * ab] = Ub.width, Yb[2 * ab + 1] = Ub.height
      }));
      return {
        handOver: {
          names: Eb.map((bb => {
            let {
              name: ab
            } = bb;
            return ab
          })),
          textures: Eb.map((bb => {
            let {
              texture: ab
            } = bb;
            return ab.pixels
          })),
          sizes: Yb
        },
        failures: Ab
      }
    }
    const jb = [2e3, 1e4, 3e4, 6e4, 12e4];

    function Rb() {}
    class kb {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jb,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = bb, this.retryMs = ab, this.keepBelow = Ub, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eb,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Ab = ++this.started,
          Mb = {
            decode: Ub.decode,
            wholeAtlas: Ub.wholeAtlas
          };
        return this.loadAndHandOver(ab, Mb, bb, (() => {
          var bb;
          return Ab < this.landed || !1 === (null === (bb = Ub.wanted) || void 0 === bb ? void 0 : bb.call(Ub))
        }), {
          onTaken: (bb, Ub) => {
            this.landed = Ab, this.current = {
              mine: Ab,
              sources: ab,
              load: Mb,
              RX: bb,
              failed: Ub
            }
          }
        })
      }
      restore(bb) {
        var ab;
        const Ub = this.current;
        if (null === Ub) return Promise.resolve(null);
        if ((null === (ab = this.restoring) || void 0 === ab ? void 0 : ab.mine) === Ub.mine) return this.restoring.done;
        const Ab = {
          mine: Ub.mine,
          done: this.restoreLanded(Ub, bb).finally((() => {
            this.restoring === Ab && (this.restoring = null)
          }))
        };
        return this.restoring = Ab, Ab.done
      }
      async restoreLanded(bb, ab) {
        const Ub = () => this.landed !== bb.mine,
          {
            RX: Ab
          } = bb;
        if (null !== Ab) return this.stopped() ? null : this.core.setTerrainTextures(Ab.names, Ab.textures, Ab.sizes);
        let Mb = ab;
        for (let Tb = 0;; Tb++) {
          const ab = this.retryMs.at(Tb),
            Ab = {
              allOrNothingExcept: void 0 === ab ? void 0 : bb.failed
            },
            Eb = await this.loadAndHandOver(bb.sources, bb.load, Mb, Ub, Ab);
          if (!1 !== Eb || void 0 === ab || this.stopped()) return Eb;
          if (Mb = Rb, await new Promise((bb => {
              setTimeout(bb, ab)
            })), Ub()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(bb, ab, Ub, Ab) {
        let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const Tb = this.core.terrainTextureNames();
        var Eb;
        if (0 === Tb.length) return null === (Eb = Mb.onTaken) || void 0 === Eb || Eb.call(Mb, null, new Set), !0;
        let Yb, eb;
        try {
          Yb = await bb(), eb = await Xb(Tb, Yb, ab.decode)
        } catch (kb) {
          return Ab() ? null : (Ub({
            name: null,
            url: null,
            error: kb
          }), !1)
        }
        if (Ab() || this.stopped()) return null;
        for (const Bb of eb.failures) Ub(Bb);
        const vb = Mb.allOrNothingExcept;
        if (void 0 !== vb && eb.failures.some((bb => {
            let {
              name: ab
            } = bb;
            return null === ab || !vb.has(ab)
          })) || !0 === ab.wholeAtlas && eb.failures.some((bb => {
            let {
              name: ab
            } = bb;
            return null === ab || null !== Bb(ab)
          }))) return !1;
        const {
          handOver: Lb
        } = eb, Pb = function(bb) {
          return bb.textures.reduce(((bb, ab) => bb + ab.byteLength), 0)
        }(Lb) < this.keepBelow, jb = this.core.setTerrainTextures(Lb.names, Lb.textures, Lb.sizes, Pb ? void 0 : () => {
          !async function(bb, ab) {
            await ab;
            for (const {
                buffer: Ab
              }
              of bb) {
              const bb = Ab;
              var Ub;
              if (!bb.detached) null === (Ub = bb.transfer) || void 0 === Ub || Ub.call(bb, 0)
            }
          }(Lb.textures, Yb.heldUntil)
        });
        if (jb) {
          var Rb;
          const bb = new Set(eb.failures.flatMap((bb => {
            let {
              name: ab
            } = bb;
            return null === ab ? [] : [ab]
          })));
          null === (Rb = Mb.onTaken) || void 0 === Rb || Rb.call(Mb, Pb ? Lb : null, bb)
        }
        return jb
      }
    }
  },
  36186: (bb, ab, Ub) => {
    function Ab(bb) {
      return "fetch" === bb || "timeout" === bb || "integrity" === bb ? "download" : "browser"
    }
    Ub.d(ab, {
      b: () => Mb,
      f: () => Eb,
      j: () => Bb,
      k: () => Yb,
      o: () => Ab,
      r: () => Tb
    });
    const Mb = "https://discord.gg/playbloxd";

    function Tb(bb) {
      return "download" === bb ? {
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

    function Eb(bb, ab) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: ab ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: bb.code
        },
        discordLink: ab,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function Yb() {
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

    function Bb(bb, ab, Ub) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: Ub ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: bb.reason
        },
        discordLink: null === bb.name,
        confirm: ab ? "general:reconnect" : bb.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  6271: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => zb,
      h: () => xb,
      l: () => Zb,
      n: () => yb
    });
    var Ab = Ub(6273);
    const Mb = 6,
      Tb = 3,
      Eb = 1,
      Yb = 2,
      Bb = 4,
      eb = 8,
      vb = 16,
      Lb = 32,
      Pb = 64,
      Xb = 128,
      jb = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Rb(bb) {
      if (!bb) return 0;
      const ab = jb.indexOf(bb);
      if (ab <= 0) throw new Error(`"${bb}" is not a shader pack hook function`);
      return ab
    }

    function kb(bb) {
      if (0 === bb) return null;
      const ab = jb[bb];
      if (void 0 === ab) throw new Error(`${bb} is not a shader pack hook function id`);
      return ab
    }

    function yb(bb) {
      const ab = Ab.b.length;
      return {
        strict: bb >= ab,
        program: Ab.b[bb % ab]
      }
    }

    function Zb(bb) {
      return Number(bb.strict) * Ab.b.length + Ab.b.indexOf(bb.program)
    }

    function Db(bb) {
      return "" === bb ? [] : bb.split(" ")
    }

    function zb(bb) {
      const ab = {
        variantFlags: new Uint8Array(Mb),
        hooks: new Uint8Array(Mb * Tb),
        moduleCodes: Array(Mb).fill(""),
        reads: Array(2 * Mb).fill("")
      };
      for (const Ub of bb) {
        const bb = Zb(Ub.key),
          Ab = (bb, ab) => null === Ub.hooks.surface || Ub.reads.fragment.includes(bb) ? 0 : ab;
        ab.variantFlags[bb] = (Ub.sceneDepth ? Eb : 0) | (Ub.movesVertices ? Yb : 0) | (Ub.sunShadow ? Bb : 0) | (Ub.airShadow ? eb : 0) | (Ub.discards ? vb : 0) | Ab("localPosition", Lb) | Ab("enchantSpeed", Pb) | Ab("enchantTier", Xb), ab.hooks[bb * Tb] = Rb(Ub.hooks.vertex), ab.hooks[bb * Tb + 1] = Rb(Ub.hooks.surface), ab.hooks[bb * Tb + 2] = Rb(Ub.hooks.light), ab.moduleCodes[bb] = Ub.moduleCode, ab.reads[2 * bb] = Ub.reads.vertex.join(" "), ab.reads[2 * bb + 1] = Ub.reads.fragment.join(" ")
      }
      return ab
    }

    function xb(bb) {
      const {
        hooks: ab,
        moduleCodes: Ub,
        reads: Ab
      } = bb;
      return Array.from(bb.variantFlags, ((bb, Mb) => {
        const Lb = Mb * Tb;
        return {
          key: yb(Mb),
          hooks: {
            vertex: kb(ab[Lb]),
            surface: kb(ab[Lb + 1]),
            light: kb(ab[Lb + 2])
          },
          moduleCode: Ub[Mb],
          sceneDepth: 0 !== (bb & Eb),
          sunShadow: 0 !== (bb & Bb),
          airShadow: 0 !== (bb & eb),
          movesVertices: 0 !== (bb & Yb),
          discards: 0 !== (bb & vb),
          reads: {
            vertex: Db(Ab[2 * Mb]),
            fragment: Db(Ab[2 * Mb + 1])
          }
        }
      }))
    }
  },
  40003: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Mb,
      g: () => Ab,
      i: () => Pb,
      k: () => vb,
      l: () => kb,
      m: () => Tb,
      n: () => Yb,
      q: () => Bb,
      t: () => Eb,
      v: () => Rb,
      x: () => Xb,
      y: () => jb
    });
    const Ab = 3,
      Mb = 0,
      Tb = 1,
      Eb = 2,
      Yb = {
        uniform: 3,
        RP: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Bb = 10,
      eb = "BloxdPackInputs",
      vb = "bloxdPackInputs",
      Lb = [{
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
      Pb = 80;

    function Xb() {
      const bb = Lb.map((bb => {
        let {
          name: ab,
          type: Ub
        } = bb;
        return `    ${ab}: ${Ub},\n`
      })).join("");
      return `struct ${eb} {\n${bb}}\n@group(${Ab}) @binding(${Mb}) var<uniform> ${vb}: ${eb};\n`
    }

    function jb(bb, ab) {
      const Ub = new DataView(bb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Pb),
        [Ab, Mb, Tb, Eb, Yb, Bb] = Lb;
      Ub.setFloat32(Ab.offset, ab.seconds, !0), Ub.setUint32(Mb.offset, ab.lit ? 1 : 0, !0);
      for (let eb = 0; eb < 3; eb++) Ub.setInt32(Tb.offset + 4 * eb, ab.renderOffset[eb], !0), Ub.setFloat32(Eb.offset + 4 * eb, ab.I6[eb], !0), Ub.setFloat32(Yb.offset + 4 * eb, ab.eyePosition[eb], !0), Ub.setFloat32(Bb.offset + 4 * eb, ab.shadowDirection[eb], !0)
    }

    function Rb(bb) {
      const ab = new Uint32Array(Math.max(1, bb.length));
      return bb.forEach(((bb, Ub) => {
        let {
          id: Ab,
          rotation: Mb
        } = bb;
        ab[Ub] = 65535 & Ab | (3 & Mb) << 16
      })), ab
    }
    const kb = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6273: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab,
      f: () => Eb,
      i: () => Yb,
      l: () => Mb,
      m: () => Tb
    });
    const Ab = ["terrain", "liquid", "model"];

    function Mb() {
      const bb = [];
      for (const ab of [!1, !0])
        for (const Ub of Ab) bb.push({
          strict: ab,
          program: Ub
        });
      return bb
    }

    function Tb(bb) {
      return `${bb.strict?"strict":"allow"}.${bb.program}`
    }

    function Eb(bb) {
      return !bb.hooks.vertex && !bb.hooks.surface && !bb.hooks.light
    }

    function Yb(bb, ab) {
      return "off" !== ab && (null === bb || bb.some((bb => bb.key.strict === ("strict" === ab) && !Eb(bb))))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);