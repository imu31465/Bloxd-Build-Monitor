export const id = 86;
export const ids = [86];
export const modules = {
  38354: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab,
      g: () => Ib,
      i: () => Hb,
      k: () => Ub,
      l: () => Tb
    });
    const kb = "A valid external Instance reference no longer exists.",
      Wb = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ];
    const ab = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function Tb(bb, cb) {
      return bb ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(bb) {
        var cb;
        const sb = null !== (cb = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(bb)) && void 0 !== cb ? cb : /failed with ([A-Z][A-Z0-9_]+)/.exec(bb);
        return sb ? sb[1] : bb.includes(kb) ? "gpu_process_lost" : "other"
      }(cb)
    }

    function Ub(bb) {
      return `${(null===bb||void 0===bb?void 0:bb.vendor)||"unknown vendor"} ${(null===bb||void 0===bb?void 0:bb.architecture)||"unknown architecture"}`
    }

    function Ib(bb) {
      return fb(bb)[1]
    }

    function Hb(bb) {
      return fb(bb)[2]
    }

    function fb(bb) {
      var cb;
      return null !== (cb = Wb.find((cb => {
        let [sb] = cb;
        return bb < sb
      }))) && void 0 !== cb ? cb : Wb[Wb.length - 1]
    }
  },
  38639: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => kb,
      i: () => Wb
    });
    const kb = 45e3;
    class Wb extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  36139: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => kb,
      h: () => Wb,
      k: () => ab
    });
    const kb = 1024,
      Wb = 1024 * kb;

    function ab(bb) {
      return (bb / Wb).toFixed(1)
    }
  },
  36134: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab,
      d: () => Ub,
      e: () => Tb,
      g: () => Ib,
      h: () => Hb
    });
    var kb = sb(223);
    const Wb = 32 * sb(36139).h,
      ab = 6144,
      Tb = 4608,
      Ub = 512;

    function Ib(bb) {
      return Math.floor(Wb * bb / ab)
    }

    function Hb(bb) {
      const cb = bb - Math.floor(bb / 6);
      let sb = kb.e.maxChunkHorizAddDistance,
        Wb = kb.e.maxChunkVertAddDistance;
      if (fb(sb + 1, Wb + 1) <= cb) return null;
      for (; fb(sb + 1, Wb + 1) > cb && (sb > 0 || Wb > 0);) sb > Wb ? sb-- : Wb--;
      return {
        horizontal: sb,
        vertical: Wb
      }
    }

    function fb(bb, cb) {
      const sb = Math.max(bb, cb);
      let kb = 0;
      for (let Wb = -sb; Wb <= sb; Wb++)
        for (let ab = -sb; ab <= sb; ab++)
          for (let Tb = -sb; Tb <= sb; Tb++) Mb(bb, cb, Wb, ab, Tb) && kb++;
      return kb
    }

    function Mb(bb, cb, sb, kb, Wb) {
      const ab = sb * sb + Wb * Wb;
      return bb === cb ? ab + kb * kb <= bb * bb : bb > cb ? Math.abs(kb) <= cb && ab + kb * kb <= bb * bb : ab <= bb * bb && ab + kb * kb <= cb * cb
    }
  },
  40282: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb,
      f: () => ab,
      j: () => Ub,
      m: () => fb,
      p: () => Ib,
      t: () => Tb
    });
    var kb = sb(223);
    const Wb = 3e3,
      ab = 15e3;

    function Tb(bb) {
      const cb = bb.endsWith(kb.j);
      return {
        text: (cb ? bb.slice(0, -kb.j.length) : bb) || null,
        dropsCache: cb
      }
    }
    const Ub = "Either your internet isn't working or this is a bug.";

    function Ib(bb, cb) {
      const sb = fb(bb);
      return null !== sb.name && "" === kb.d[sb.name].text && null !== cb ? cb : sb.reason
    }
    const Hb = "You were removed from the game.";

    function fb(bb) {
      var cb;
      let sb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Wb = null !== (cb = Object.keys(kb.d).find((cb => kb.d[cb].code === bb))) && void 0 !== cb ? cb : null;
      if (null === Wb) return {
        code: bb,
        name: Wb,
        reason: null !== sb && void 0 !== sb ? sb : `${Ub}\nCode: ${bb}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: ab,
        canReconnect: Tb = !1
      } = kb.d[Wb], Ib = bb === kb.d.outdatedVersion.code || bb === kb.d.loadRecaptchaError.code;
      return {
        code: bb,
        name: Wb,
        reason: "" !== ab ? ab : null !== sb && void 0 !== sb ? sb : bb === kb.d.gameOrPluginKick.code ? Hb : `Code: ${bb}`,
        canReconnect: Tb,
        automaticallyReconnect: bb === kb.d.customGameUpdated.code || bb === kb.d.duplicateLobbyNameError.code,
        requiresRefresh: Ib
      }
    }
  },
  4512: (bb, cb, sb) => {
    sb.d(cb, {
      $c: () => kb.sb,
      $d: () => Sb,
      Bb: () => cc,
      Bc: () => kb._,
      Bd: () => kb.Nb,
      C: () => kb.f,
      Cd: () => kb.Rb,
      Ce: () => lc,
      F: () => Hb,
      Fb: () => Wb.e,
      Fc: () => kb.ab,
      Fe: () => nb,
      Gd: () => kb.Xb,
      Hc: () => kb.db,
      Hd: () => ab,
      I: () => kb.h,
      Ib: () => hb,
      K: () => kb.i,
      Kd: () => Qb,
      Lc: () => kb.jb,
      Ld: () => Uc,
      M: () => vb,
      Mb: () => Kb,
      Nc: () => nc,
      Od: () => zb,
      P: () => kb.n,
      Pb: () => yb,
      Pc: () => Hc,
      Qd: () => db,
      Sd: () => Zb,
      T: () => kb.p,
      Tb: () => Bb,
      Tc: () => kc,
      Vc: () => kb.nb,
      Vd: () => rb,
      W: () => kb.t,
      Xb: () => kb.I,
      Xc: () => kb.rb,
      Zd: () => Ab,
      _: () => Mb,
      _b: () => Pb,
      bb: () => Cb,
      c: () => bc,
      cb: () => kb.v,
      cc: () => Lb,
      cd: () => jb,
      ce: () => ob,
      f: () => lb,
      fc: () => ac,
      fd: () => kb.xb,
      fe: () => Tc,
      g: () => mb,
      gb: () => kb.y,
      ge: () => mc,
      he: () => Vb,
      i: () => Ic,
      ib: () => qb,
      id: () => kb.Ab,
      jb: () => Wc,
      jc: () => Nb,
      ke: () => Rb,
      lc: () => fc,
      m: () => Jb,
      mb: () => fb,
      md: () => kb.Db,
      n: () => Yb,
      oe: () => Ob,
      pc: () => Wb.i,
      pd: () => kb.Gb,
      q: () => kb.d,
      qb: () => kb.B,
      r: () => Mc,
      rc: () => eb,
      sc: () => sc,
      se: () => ib,
      t: () => tb,
      tb: () => wb,
      td: () => kb.Ib,
      u: () => Tb,
      ud: () => kb.Lb,
      v: () => Db,
      vb: () => Fb,
      ve: () => Eb,
      wc: () => kb.U,
      x: () => Xc,
      xd: () => gb,
      xe: () => Ib,
      yb: () => pb,
      yc: () => kb.X,
      z: () => xb,
      ze: () => Gb
    });
    var kb = sb(4517),
      Wb = sb(2305);
    const ab = Math.round(1e3 / kb.Xb),
      Tb = 4,
      Ub = 2;

    function Ib() {
      return crypto.getRandomValues(new Uint32Array(Ub))
    }
    const Hb = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      fb = 16,
      Mb = {
        Draws: 1,
        NetAll: 2
      },
      Xb = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function nb(bb) {
      return (bb.nametagsHidden ? ub.NametagsHidden : 0) | (bb.crouchToggle ? ub.CrouchToggle : 0) | (bb.bhopDisabled ? ub.BhopDisabled : 0) | (bb.disableBobbing ? ub.DisableBobbing : 0) | (bb.ezTowering ? ub.EzTowering : 0) | (bb.ezBridging ? ub.EzBridging : 0) | (bb.showChunkBorders ? ub.ShowChunkBorders : 0)
    }
    const mb = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      lb = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      Qb = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      eb = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      Cb = 5,
      Nb = 4294967295;

    function Vb(bb) {
      return (bb.showFog ? Xb.ShowFog : 0) | (bb.lighting ? Xb.Lighting : 0) | (bb.chunkFade ? Xb.ChunkFade : 0)
    }
    const Lb = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      ub = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      Yb = {
        Release: 1,
        KeepTouches: 2
      },
      hb = {
        Point: 1,
        Stamped: 2
      },
      Jb = {
        Add: 1,
        Clear: 2
      },
      gb = 1,
      Bb = 8,
      tb = 16777215,
      yb = 4,
      Pb = {
        Resume: 1
      },
      Db = {
        Held: 1
      };

    function Eb(bb, cb) {
      return (bb | cb << 8) >>> 0
    }

    function ib(bb) {
      return 255 & bb
    }

    function Ob(bb) {
      return bb >>> 8
    }

    function Gb(bb) {
      return bb + 3 & -4
    }
    const Kb = 16777216,
      Zb = 20;
    const zb = 8,
      qb = 8,
      db = 16777216,
      Ab = {
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
      rb = 16,
      ob = {
        Lost: 0,
        Gone: 1
      },
      Sb = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function Rb(bb) {
      return bb === Sb.WorldgenSeed || bb === Sb.Generate
    }
    const vb = 4,
      Fb = 99,
      xb = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      jb = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      pb = 12,
      bc = 16,
      cc = 4,
      sc = 12,
      kc = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      Wc = 4,
      ac = 8,
      Tc = 8,
      Uc = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      Ic = {
        Crit: 1,
        HitSelf: 2
      },
      Hc = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      fc = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      Mc = 12,
      Xc = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      nc = 67108864;

    function mc(bb) {
      for (const [cb, sb] of Object.entries(kb.f))
        if (sb === bb) return cb;
      return `Unknown${bb}`
    }

    function lc(bb) {
      return {
        status: bb[kb.y.Status],
        lastError: bb[kb.y.LastError],
        lastErrorDetail: bb[kb.y.LastErrorDetail],
        errorCount: bb[kb.y.ErrorCount],
        frameIndex: bb[kb.y.FrameIndex],
        tickIndex: bb[kb.y.TickIndex],
        renderPending: bb[kb.y.RenderPending],
        firstView: bb[kb.y.FirstView],
        chunksCancelled: bb[kb.y.ChunksCancelled]
      }
    }
  },
  40070: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => kb,
      g: () => Mb,
      i: () => Ub,
      l: () => ab,
      p: () => Wb,
      t: () => Ib,
      u: () => fb
    });
    class kb extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function Wb(bb) {
      return bb instanceof RangeError && /call stack/i.test(bb.message) || bb instanceof Error && "InternalError" === bb.name && /recursion/i.test(bb.message)
    }

    function ab(bb) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(bb))
    }
    const Tb = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function Ub(bb) {
      var cb;
      return bb instanceof WebAssembly.RuntimeError || bb instanceof kb || Wb(bb) && Tb.test(null !== (cb = bb.stack) && void 0 !== cb ? cb : "")
    }

    function Ib(bb, cb) {
      if (Ub(bb)) throw bb;
      console.error(cb, bb)
    }

    function Hb(bb, cb, sb, Wb, ab) {
      if (cb % Wb !== 0 || cb + sb > bb.byteLength) throw new kb(`${ab}: ${sb} bytes at ${cb}, ${Wb}-aligned, outside ${bb.byteLength} bytes of memory`)
    }

    function fb(bb, cb, sb, kb, Wb) {
      return 0 === sb ? null : (Hb(cb, sb, kb * bb.BYTES_PER_ELEMENT, bb.BYTES_PER_ELEMENT, Wb), new bb(cb, sb, kb))
    }

    function Mb(bb, cb, sb, kb, Wb) {
      return 0 === cb ? null : (Hb(bb, cb, sb, kb, Wb), new DataView(bb, cb, sb))
    }
  },
  40415: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => kb
    });
    const kb = {
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
  40375: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => mb,
      c: () => lb,
      d: () => Xb,
      f: () => Mb
    });
    const kb = 2e3,
      Wb = "unavailable";
    let ab = () => Promise.resolve().then((() => sb(2989))),
      Tb = null,
      Ub = null,
      Ib = Hb();

    function Hb() {
      let bb = () => {};
      return {
        promise: new Promise((cb => {
          bb = () => {
            cb(null)
          }
        })),
        resolve: bb
      }
    }

    function fb() {
      if (null === Tb) {
        const bb = ab();
        Tb = bb, bb.then((cb => {
          Tb === bb && (Ub = cb)
        }), (() => {
          Tb === bb && (Tb = null)
        }))
      }
      return Tb
    }

    function Mb() {
      fb().catch((() => {}))
    }

    function Xb() {
      Ib.resolve()
    }

    function nb(bb, cb, sb, kb) {
      if (null === bb) return {
        errorKind: cb,
        fingerprint: Wb,
        dedupe: `${cb}|${kb}`
      };
      const {
        fingerprint: ab
      } = bb.clientErrorKey(cb, sb, kb);
      return {
        errorKind: cb,
        fingerprint: ab,
        dedupe: ab
      }
    }

    function mb(bb, cb, sb, kb) {
      return null === Ub ? kb ? (Mb(), nb(null, bb, cb, sb)) : null : nb(Ub, bb, cb, sb)
    }
    async function lb(bb, cb, sb) {
      let Wb;
      const ab = new Promise((bb => {
        Wb = setTimeout((() => {
          bb(null)
        }), kb)
      }));
      try {
        return nb(await Promise.race([fb(), ab, Ib.promise]), bb, cb, sb)
      } catch {
        return nb(null, bb, cb, sb)
      } finally {
        clearTimeout(Wb)
      }
    }
  },
  40373: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      BUILT_IN_ANIMATIONS_SITE: () => rb,
      CORE_ERRORS_SITE: () => ib,
      EVENT_OVERFLOW_SITE: () => wb,
      FIRST_VIEW_SITE: () => Sb,
      JOIN_SITE: () => Gb,
      LEAVE_SITE: () => Kb,
      MODEL_FEED_SITE: () => Zb,
      MODEL_POOL_SITE: () => zb,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => vb,
      NON_FATAL_REPORTS_PER_SESSION: () => fc,
      PREVIEW_ANIMATIONS_SITE: () => Ab,
      RENDER_RELOAD_SITE: () => db,
      TEXTURE_NAMES_SITE: () => qb,
      TEXTURE_PACK_FEED_SITE: () => ob,
      TurnstilePageError: () => Zc,
      WASM_LOAD_SITE: () => Ob,
      crashError: () => lc,
      crashReportsSettled: () => Lc,
      flushCrashReports: () => Nc,
      joinFailureCode: () => zc,
      lokiTransport: () => jb,
      modelFailureCode: () => Sc,
      readTrap: () => hc,
      renderLossDetail: () => Ms,
      renderReloadMessage: () => Hs,
      reportCoreErrors: () => Yc,
      reportCountedLoadFallback: () => Gc,
      reportCrash: () => Qc,
      reportDataLoadFailure: () => Qs,
      reportDisconnect: () => rc,
      reportDracoDecoderFailure: () => xc,
      reportEventOverflow: () => bs,
      reportFirstViewNoTerrain: () => as,
      reportGpuFallback: () => ic,
      reportGpuWasmPopulation: () => Oc,
      reportLightFault: () => ss,
      reportMemoryShed: () => Ws,
      reportModelFailure: () => Rc,
      reportModelPoolFailure: () => vc,
      reportModelsModuleRetry: () => Fc,
      reportPageJoinFailure: () => dc,
      reportReconnectGaveUp: () => oc,
      reportRenderReload: () => ns,
      reportReplayFault: () => Us,
      reportStaleBuildReload: () => Cs,
      reportStoppedCore: () => tc,
      reportTerrainTextureFailure: () => ms,
      reportTexturePackFeedLoadFailure: () => pc,
      reportUnstreamedCoreLoad: () => Kc,
      reportUnsupportedFallback: () => Dc,
      reportUnusedSeat: () => wc,
      reportWorkerLost: () => cs,
      reportWorkerStartTimeout: () => Ts,
      reportWorldgenGaveUp: () => ks,
      reportWorldgenLoadFailure: () => jc,
      resetCrashReports: () => uc,
      setCrashBackend: () => ac,
      setCrashScreen: () => kc,
      setCrashTransport: () => cc,
      showCrash: () => Bc,
      showJoinFailure: () => qc,
      showUnsupported: () => Pc
    });
    var kb = sb(1058),
      Wb = sb(301),
      ab = sb(2998),
      Tb = sb(40375),
      Ub = sb(4512),
      Ib = sb(40378),
      Hb = sb(3243),
      fb = sb(38354),
      Mb = sb(167),
      Xb = sb(701),
      nb = sb(160),
      mb = sb(3251),
      lb = sb(38639),
      Qb = sb(1753),
      eb = sb(40350),
      Cb = sb(40014),
      Nb = sb(40291),
      Vb = sb(40294),
      Lb = sb(40383),
      ub = sb(3500),
      Yb = sb(3505),
      hb = sb(40388),
      Jb = sb(40402),
      gb = sb(40406),
      Bb = sb(36423),
      tb = sb(3007),
      yb = sb(35941),
      Pb = sb(40221),
      Db = sb(35945);
    const Eb = "[bloxd-wasm-client]",
      ib = "coreErrors",
      Ob = "wasmLoad",
      Gb = "join",
      Kb = "leave",
      Zb = "modelFeed",
      zb = "modelWorkerPool",
      qb = "textureNames",
      db = "renderReload",
      Ab = "previewAnimations",
      wb = "eventOverflow",
      rb = "builtInAnimations",
      ob = "texturePackFeed",
      Sb = "firstView",
      Rb = 300,
      vb = 8;
    let Fb = 0;
    const xb = new Set,
      jb = (bb, cb) => {
        const sb = Tc[bb.kind];
        if (null === sb) return void pb(bb, cb, Wc, null);
        const kb = (0, Tb.b)(sb, bb.message, bb.code, bb.fatal);
        if (null !== kb) return void pb(bb, cb, Wc, kb);
        const Wb = Wc;
        Cc("Loki", (async () => {
          pb(bb, cb, Wb, await (0, Tb.c)(sb, bb.message, bb.code))
        }))
      };

    function pb(bb, cb, sb, Wb) {
      const {
        kind: Tb,
        code: Ub,
        site: Ib,
        fatal: Hb,
        details: fb
      } = bb;
      if (!Hb)
        if (null === Wb || (0, ab.e)(Wb.errorKind) || xb.has(Wb.dedupe)) {
          if (Fb >= vb) return;
          Fb++
        } else xb.add(Wb.dedupe);
      const Mb = {
        ...fb,
        kind: Tb,
        code: Ub,
        site: Ib,
        fatal: String(Hb),
        backend: sb
      };
      null !== Wb && (Mb.errorKind = Wb.errorKind, Mb.fingerprint = Wb.fingerprint), cb instanceof Error && "string" === typeof cb.stack && (Mb.causeStack = cb.stack.slice(0, 2e3)), (0, kb.dl)(lc(bb, cb), Mb)
    }
    let bc = jb;

    function cc(bb) {
      const cb = bc;
      return bc = bb, cb
    }
    let sc = () => {};

    function kc(bb) {
      const cb = sc;
      return sc = bb, cb
    }
    let Wc = "unpicked";

    function ac(bb) {
      Wc = bb
    }
    const Tc = {
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
      Uc = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        gpuFallback: "wasm_load"
      },
      Ic = new Set(["unstreamedLoad"]);
    let Hc = !1;
    const fc = 20,
      Mc = new Map;
    let Xc = 0,
      nc = 0;
    const mc = new Set;

    function lc(bb, cb) {
      const sb = Object.assign(new Error(`${bb.code}: ${bb.message}`), {
        name: "WasmClientCrash",
        cause: null !== cb && void 0 !== cb ? cb : void 0
      });
      return cb instanceof Error && cb.stack && (sb.stack = cb.stack), sb
    }

    function Qc(bb) {
      var cb, kb;
      const {
        kind: Wb,
        code: ab,
        site: Tb,
        fatal: Ub,
        message: Ib,
        error: Hb
      } = bb, fb = !1 !== bb.toTransport && !Ic.has(Wb), Mb = !Ub && fb, Xb = {
        kind: Wb,
        code: ab,
        site: Tb,
        fatal: Ub,
        message: Ib,
        details: null !== (cb = bb.details) && void 0 !== cb ? cb : {}
      }, nb = `${ab}@${Tb}${void 0===bb.instance?"":`#${bb.instance}`}${Ub?"!":""}`, mb = (null !== (kb = Mc.get(nb)) && void 0 !== kb ? kb : 0) + 1;
      if (Mc.set(nb, mb), mb > 1 ? 0 === (mb & mb - 1) && ec((() => {
          console.warn(`${Eb} ${ab} at ${Tb} reported ${mb} times`)
        })) : Mb && Xc >= fc ? ec((() => {
          console.warn(`${Eb} ${Wb} ${ab} at ${Tb}: ${Ib} (not sent: the session's ${fc} went)`, Xb.details, null !== Hb && void 0 !== Hb ? Hb : "")
        })) : (Mb && Xc++, function(bb, cb, kb) {
          var Wb, ab;
          const {
            kind: Tb,
            code: Ub,
            site: Ib,
            fatal: Hb,
            message: fb,
            details: Mb
          } = bb;
          ec((() => {
            (Hb ? console.error : console.warn)(`${Eb} ${Tb} ${Ub} at ${Ib}: ${fb}`, Mb, null !== cb && void 0 !== cb ? cb : "")
          }));
          const Xb = Uc[Tb],
            nb = null !== (Wb = null !== (ab = Tc[Tb]) && void 0 !== ab ? ab : Xb) && void 0 !== Wb ? Wb : null;
          null !== nb && Cc("counts", (async () => {
            const {
              peekVisitSessionId: bb
            } = await Promise.resolve().then((() => sb(667)));
            if (null !== bb()) {
              const {
                reportCappedWasmFailure: bb,
                reportWasmFailure: cb
              } = await sb.e(207).then((() => sb(35937)));
              (void 0 === Xb ? cb : bb)(nb, fb, Ub), Hc = !0
            }
          }));
          kb && ec((() => {
            bc(bb, cb)
          }))
        }(Xb, Hb, fb)), Ub) {
        var lb;
        const cb = null !== (lb = bb.screen) && void 0 !== lb ? lb : {
          text: (0, Bb.e)(Xb, !0),
          reload: !0
        };
        ec((() => {
          sc(cb)
        }))
      }
      return Xb
    }

    function ec(bb) {
      try {
        bb()
      } catch (cb) {
        try {
          console.warn(`${Eb} could not send a report`, cb)
        } catch {}
      }
    }

    function Cc(bb, cb) {
      try {
        const sb = cb().catch((cb => {
          console.warn(`${Eb} could not send the report to ${bb}`, cb)
        })).finally((() => {
          mc.delete(sb)
        }));
        mc.add(sb)
      } catch (sb) {
        console.warn(`${Eb} could not send the report to ${bb}`, sb)
      }
    }
    async function Nc(bb) {
      let cb;
      (0, Tb.d)();
      const sb = new Promise((sb => {
        cb = setTimeout(sb, bb)
      }));
      await Promise.race([Vc(), sb]), clearTimeout(cb)
    }
    async function Vc() {
      if (await Promise.allSettled([...mc]), Hc) try {
        const {
          flushClientAnalyticsEvents: bb
        } = await Promise.resolve().then((() => sb(1471)));
        await bb()
      } catch (bb) {
        console.warn(`${Eb} could not send the counts`, bb)
      }
    }
    async function Lc() {
      for (; mc.size > 0;) await Promise.allSettled([...mc])
    }

    function uc() {
      Mc.clear(), Xc = 0, Hc = !1, Fb = 0, xb.clear(), nc = 0, (0, Ib.n)()
    }

    function Yc(bb, cb, sb, kb) {
      nc += cb;
      for (const {
          code: Tb,
          detail: Hb
        }
        of bb) {
        var Wb, ab;
        const bb = (0, Ub.ge)(Tb),
          cb = (0, Ib.d)(Tb, Hb),
          fb = null === kb || void 0 === kb ? void 0 : kb(Tb, Hb),
          Mb = void 0 !== (null === cb || void 0 === cb ? void 0 : cb.gpuDetails),
          Xb = Mb ? null === (Wb = (0, nb.l)()) || void 0 === Wb ? void 0 : Wb.renderer : void 0,
          mb = Mb ? ` ${(0,Ib.e)()}` : "",
          lb = Array.from([Xb && `gpu ${(0,Ib.p)(Xb)}`, fb].filter(Boolean).join("; ")).slice(0, Rb).join(""),
          Qb = `core error ${bb}${null!==(ab=null===cb||void 0===cb?void 0:cb.words)&&void 0!==ab?ab:""}${mb}${lb?`: ${lb}`:""}`,
          eb = {
            errorCode: String(Tb),
            detail: String(Hb),
            droppedBefore: String(nc),
            wasmBuild: sb.wasm,
            clientVersion: sb.client,
            ...null === cb || void 0 === cb ? void 0 : cb.gpuDetails
          };
        null !== cb && (0, Ib.j)(cb) ? ec((() => {
          console.warn(`${Eb} coreError CORE-${bb}: ${Qb} (not sent: the session's render warnings of its kind went)`, eb)
        })) : Qc({
          kind: Tb === Ub.C.JobsHeapGaveUp ? "meshHeap" : "coreError",
          code: `CORE-${bb}`,
          site: ib,
          fatal: !1,
          message: Qb,
          details: eb,
          instance: null === cb || void 0 === cb ? void 0 : cb.instance
        })
      }
    }

    function hc(bb) {
      return (0, yb.m)(bb instanceof Pb.e ? bb.trap : bb, ub.I, ub.Y)
    }
    const Jc = "declined=js";

    function gc(bb) {
      return bb ? {
        labels: [Jc],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function Bc(bb, cb, sb) {
      return yc(bb, cb, sb, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function tc(bb, cb, sb) {
      return yc(bb, cb, sb, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function yc(bb, cb, sb, kb, Wb) {
      let {
        memoryDetails: ab = {},
        declined: Tb = !1
      } = kb;
      const {
        code: Ub,
        details: Ib,
        message: Hb
      } = (0, eb.L)(bb, cb), fb = [];
      null !== sb && (Ib.trapKind = sb.kind, null !== sb.panic && (Ib.panic = (0, yb.k)(sb.panic)), sb.refusedBytes > 0 && (Ib.refusedAllocation = String(sb.refusedBytes)), fb.push((0, yb.p)(sb.kind, sb.refusedBytes)));
      const Mb = gc(Tb);
      return Qc({
        kind: "crash",
        code: Ub,
        site: bb.site,
        fatal: Wb,
        message: [...fb, ...Mb.labels, Hb].join("; "),
        details: {
          ...Ib,
          ...Mb.details,
          ...ab
        },
        error: bb.error
      })
    }

    function Pc(bb, cb, sb) {
      return Qc({
        kind: "unsupported",
        code: cb,
        site: Ob,
        fatal: !0,
        message: sb,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: bb,
          status: cb
        },
        screen: {
          text: (0, Bb.o)(bb),
          reload: "download" === bb
        }
      })
    }

    function Dc(bb, cb, sb) {
      return Qc({
        kind: "unsupportedFallback",
        code: "blockedAfterLoss" === cb ? "blocked_after_loss" : "unsupported_js_fallback",
        site: Ob,
        fatal: !1,
        message: sb,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: bb,
          status: "unsupported",
          decline: cb,
          fallback: "js"
        }
      })
    }
    const Ec = "misdrawn_gpu_js_fallback";

    function ic(bb, cb) {
      return Qc({
        kind: "gpuFallback",
        code: Ec,
        site: Ob,
        fatal: !1,
        message: `the renderer plays ${bb} on ${cb} worse than the JS client`,
        details: {
          gpuFamily: bb,
          backend: cb,
          fallback: "js"
        }
      })
    }

    function Oc(bb) {
      Cc("counts", (async () => {
        await (0, Xb.c)(bb), Hc = !0
      }))
    }

    function Gc(bb, cb, sb, kb) {
      const Wb = gc(kb);
      return Qc({
        kind: "unsupported",
        code: cb,
        site: Ob,
        fatal: !1,
        message: [...Wb.labels, sb].join("; "),
        details: {
          cause: bb,
          status: cb,
          fallback: "js",
          ...Wb.details
        }
      })
    }

    function Kc() {
      const {
        code: bb,
        message: cb
      } = tb.b;
      return Qc({
        kind: "unstreamedLoad",
        code: bb,
        site: Ob,
        fatal: !1,
        message: cb
      })
    }
    class Zc extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function zc(bb) {
      return bb instanceof Nb.k ? 0 === bb.code ? "JOIN-matchmake" : `JOIN-${bb.code}` : bb instanceof Nb.d ? 0 === bb.code ? `JOIN-${bb.stage}` : `JOIN-${bb.stage}-${bb.code}` : bb instanceof Cb.b ? "JOIN-gameCode" : bb instanceof Zc ? "JOIN-turnstilePage" : bb instanceof Nb.w ? "JOIN-trafficCheck" : bb instanceof lb.i ? "JOIN-timeout" : "JOIN-network"
    }

    function qc(bb, cb) {
      const sb = (0, Db.h)(bb),
        kb = {
          wasmBuild: cb.wasm,
          clientVersion: cb.client
        },
        Wb = bb instanceof Zc ? {
          text: (0, Bb.j)(),
          reload: !1
        } : void 0,
        ab = (0, Vb.c)(bb),
        Tb = "expected" !== ab;
      return Qc({
        kind: "join",
        code: zc(bb),
        site: Gb,
        fatal: !0,
        message: sb,
        details: kb,
        error: bb,
        screen: Wb,
        toTransport: Tb,
        instance: ab
      })
    }

    function dc(bb, cb, sb) {
      var kb;
      const Wb = (0, Vb.c)(bb),
        ab = {
          cause: (bb instanceof Nb.d || bb instanceof Nb.k) && null !== (kb = bb.serverText) && void 0 !== kb ? kb : "",
          sinceJoinStart: (0, mb.e)(sb.sinceJoinStartMs),
          game: sb.game,
          ...(0, mb.i)(),
          wasmBuild: cb.wasm,
          clientVersion: cb.client
        };
      return Qc({
        kind: "pageJoin",
        code: zc(bb),
        site: Gb,
        fatal: !1,
        message: (0, Db.h)(bb),
        details: ab,
        error: bb,
        toTransport: "unrecognised" === Wb,
        instance: Wb
      })
    }
    const Ac = {
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

    function wc(bb, cb) {
      let {
        unused: sb,
        answered: kb,
        heldMs: Wb
      } = bb;
      const {
        code: ab,
        message: Tb
      } = Ac[sb], Ub = {
        unused: sb,
        answered: String(kb),
        heldMs: String(Wb),
        wasmBuild: cb.wasm,
        clientVersion: cb.client
      };
      return Qc({
        kind: "seat",
        code: ab,
        site: Gb,
        fatal: !1,
        message: Tb,
        details: Ub
      })
    }

    function rc(bb, cb, sb) {
      var kb;
      let Wb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (kb = bb.name) && void 0 !== kb ? kb : String(bb.code);
      const ab = {
          closeCode: String(bb.code),
          recognised: String(null !== bb.name),
          closeReason: sb.closeReason,
          sinceJoined: (0, mb.e)(sb.sinceJoinedMs),
          game: sb.game,
          ...(0, mb.i)(),
          wasmBuild: cb.wasm,
          clientVersion: cb.client
        },
        Tb = null === bb.name && !(0, mb.g)(bb.code);
      return Qc({
        kind: "disconnect",
        code: Wb,
        site: Kb,
        fatal: !1,
        message: "Left room",
        details: ab,
        toTransport: Tb
      })
    }

    function oc(bb, cb) {
      const sb = {
        ...(0, Hb.k)(bb),
        wasmBuild: cb.wasm,
        clientVersion: cb.client
      };
      return Qc({
        kind: "disconnect",
        code: `reconnect-${bb.reason}`,
        site: Gb,
        fatal: !1,
        message: "Reconnect failed",
        details: sb
      })
    }

    function Sc(bb) {
      return bb.error instanceof Yb.i ? `MODEL-${bb.error.status}` : bb.error instanceof hb.l ? "MODEL-ring" : "MODEL-network"
    }

    function Rc(bb, cb) {
      const sb = Sc(bb),
        kb = `model file ${bb.file} ${bb.startup?"(startup) ":""}could not load`,
        Wb = {
          file: String(bb.file),
          url: bb.url,
          wasmBuild: cb.wasm,
          clientVersion: cb.client
        };
      return Qc({
        kind: bb.startup ? "model" : "modelLate",
        code: sb,
        site: Zb,
        fatal: bb.startup,
        message: kb,
        details: Wb,
        error: bb.error
      })
    }

    function vc(bb, cb) {
      const sb = {
        wasmBuild: cb.wasm,
        clientVersion: cb.client
      };
      return Qc({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: zb,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: sb,
        error: bb
      })
    }

    function Fc(bb, cb, sb) {
      const kb = {
        delayMs: String(cb),
        wasmBuild: sb.wasm,
        clientVersion: sb.client
      };
      bb instanceof Yb.i && (kb.status = String(bb.status));
      return Qc({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: zb,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: kb,
        error: bb
      })
    }

    function xc(bb, cb) {
      const sb = {
        wasmBuild: cb.wasm,
        clientVersion: cb.client
      };
      return Qc({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: zb,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: sb,
        error: bb
      })
    }

    function jc(bb, cb) {
      const sb = {
        wasmBuild: cb.wasm,
        clientVersion: cb.client
      };
      return Qc({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: eb.E,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: sb,
        error: bb
      })
    }

    function pc(bb, cb) {
      const sb = {
        wasmBuild: cb.wasm,
        clientVersion: cb.client
      };
      return Qc({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: ob,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: sb,
        error: bb
      })
    }

    function bs(bb, cb) {
      const {
        frames: sb,
        acks: kb,
        mask: Wb,
        outcome: ab
      } = bb, Tb = {
        frames: String(sb),
        acks: String(kb),
        mask: String(Wb),
        outcome: null !== ab && void 0 !== ab ? ab : "resynced",
        wasmBuild: cb.wasm,
        clientVersion: cb.client
      };
      return Qc({
        kind: "recovered",
        code: "rejoined" === ab ? "CORE-eventOverflowRejoin" : "failed" === ab ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: wb,
        fatal: !1,
        message: `the event buffer refused records in ${sb} frames`,
        details: Tb
      })
    }

    function cs(bb, cb, sb) {
      return Qc({
        kind: "recovered",
        code: "CORE-workerLost",
        site: bb,
        fatal: !1,
        message: `a ${bb} worker was lost`,
        details: {
          reason: cb,
          wasmBuild: sb.wasm,
          clientVersion: sb.client
        }
      })
    }

    function ss(bb, cb, sb) {
      const kb = {
        wasmBuild: sb.wasm,
        clientVersion: sb.client
      };
      return Qc({
        kind: "recovered",
        code: bb,
        site: eb.n,
        fatal: !1,
        message: cb,
        details: kb
      })
    }

    function ks(bb, cb) {
      const sb = {
        lastReason: bb,
        wasmBuild: cb.wasm,
        clientVersion: cb.client
      };
      return Qc({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: eb.E,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: sb
      })
    }

    function Ws(bb, cb, sb) {
      return Qc({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: eb.k,
        fatal: !1,
        message: (0, Lb.h)(bb) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: bb,
          ...cb,
          wasmBuild: sb.wasm,
          clientVersion: sb.client
        }
      })
    }

    function as(bb, cb) {
      const sb = (0, Ib.i)(),
        kb = {
          game: bb,
          renderWarned: String(sb),
          browser: (0, Ib.e)(),
          wasmBuild: cb.wasm,
          clientVersion: cb.client
        },
        Wb = `first view drew no whole terrain in ${Jb.e/1e3} s${sb?", render warned":""}`;
      return Qc({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: Sb,
        fatal: !1,
        message: Wb,
        details: kb
      })
    }

    function Ts(bb, cb, sb) {
      return Qc({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: bb,
        fatal: !1,
        message: `a ${bb} worker did not start`,
        details: {
          waitedMs: String(Math.round(cb)),
          wasmBuild: sb.wasm,
          clientVersion: sb.client
        }
      })
    }

    function Us(bb, cb, sb) {
      return Qc({
        kind: "recovered",
        code: "CORE-replayFault",
        site: bb,
        fatal: !1,
        message: `the replay's ${bb} failed`,
        details: {
          wasmBuild: sb.wasm,
          clientVersion: sb.client
        },
        error: cb
      })
    }
    const Is = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function Hs(bb, cb, sb) {
      const kb = "lost" === cb && void 0 !== sb ? ` (${sb})` : "";
      return `the ${bb} ${Is[cb]}${kb}`
    }
    const fs = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };

    function Ms(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now();
      const Wb = null === sb.boundAtMs ? "unbound" : `up${(0,fb.g)(kb-sb.boundAtMs)}`,
        ab = null === sb.adapter ? "no adapter" : (0, fb.k)(sb.adapter),
        Tb = `${(0,Qb.k)()?"hidden":"visible"} ${Wb} ${ab}${!0===sb.indirectHangs?" ih":""}`;
      if ("pipeline_failed" === bb) return `${bb} ${Tb}`;
      const Ub = null === cb || void 0 === cb ? void 0 : cb.message;
      return `${cb instanceof Qb.g?"timeout":(0,fb.l)("frames_refused"===bb,"string"===typeof Ub?Ub:"")} ${Tb}`
    }
    const Xs = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function ns(bb, cb, kb) {
      var ab, Tb, Ub, Hb, Xb;
      let {
        cause: nb = "lost",
        error: mb,
        context: lb = fs,
        session: Qb = Xs
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const eb = Ms(nb, mb, lb),
        Cb = {
          losses: String(cb),
          cause: nb,
          detail: eb,
          vendor: null !== (ab = null === (Tb = lb.adapter) || void 0 === Tb ? void 0 : Tb.vendor) && void 0 !== ab ? ab : "",
          architecture: null !== (Ub = null === (Hb = lb.adapter) || void 0 === Hb ? void 0 : Hb.architecture) && void 0 !== Ub ? Ub : "",
          indirectHangs: String(lb.indirectHangs),
          samples: String(Qb.samples),
          sunShadows: String(Qb.sunShadows),
          renderDistance: String(Qb.renderDistance),
          gpuFamily: null !== (Xb = (0, Wb.b)()) && void 0 !== Xb ? Xb : "",
          browser: (0, Ib.e)(),
          siteUsed: Mb.r,
          wasmBuild: kb.wasm,
          clientVersion: kb.client
        },
        Nb = Hs(bb, nb),
        Vb = Qc({
          kind: "recovered",
          code: "CORE-renderLost",
          site: db,
          fatal: !1,
          message: Nb,
          details: Cb,
          error: mb
        });
      return Cc("ga", (async () => {
        const {
          logError: cb
        } = await Promise.resolve().then((() => sb(2697))), kb = `${fb.e["webgpu"===bb?"WebGPU":"WebGL2"]}\n Error: ${eb}`;
        cb("warning", kb), cb("error", kb)
      })), Vb
    }

    function ms(bb, cb) {
      var sb, kb;
      const Wb = null === bb.name ? "TEXTURE-sources" : null === bb.url ? "TEXTURE-nourl" : bb.error instanceof gb.b ? `TEXTURE-${bb.error.status}` : "TEXTURE-network",
        ab = null === bb.name ? "terrain textures could not load" : `terrain texture ${bb.name} could not load`,
        Tb = {
          texture: null !== (sb = bb.name) && void 0 !== sb ? sb : "",
          url: null !== (kb = bb.url) && void 0 !== kb ? kb : "",
          wasmBuild: cb.wasm,
          clientVersion: cb.client
        };
      return Qc({
        kind: "terrainTexture",
        code: Wb,
        site: eb.C,
        fatal: !1,
        message: ab,
        details: Tb,
        error: bb.error
      })
    }
    const ls = {
      previewAnimations: {
        site: Ab,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: rb,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function Qs(bb, cb, sb, kb) {
      const {
        site: Wb,
        prefix: ab,
        name: Tb
      } = ls[bb], {
        stage: Ub,
        error: Ib
      } = sb;
      return Qc({
        kind: bb,
        code: "decode" === Ub ? null === Ib ? `${ab}-decode` : `${ab}-trap` : Ib instanceof Yb.i ? `${ab}-${Ib.status}` : `${ab}-network`,
        site: Wb,
        fatal: !1,
        message: "decode" === Ub ? `${Tb} did not decode` : `${Tb} could not load`,
        details: {
          url: cb,
          wasmBuild: kb.wasm,
          clientVersion: kb.client
        },
        error: Ib
      })
    }
    const es = "staleBuild";

    function Cs(bb, cb, sb) {
      const kb = {
          failedSite: bb.site,
          url: bb.url,
          from: bb.from,
          sameBuild: String(bb.from === cb),
          reloadMs: String(Math.max(0, Date.now() - bb.at)),
          wasmBuild: sb.wasm,
          clientVersion: sb.client
        },
        Wb = `reloaded into a newer build after ${bb.site} failed to load: ${bb.error}`;
      return Qc({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: es,
        fatal: !1,
        message: Wb,
        details: kb
      })
    }
  },
  40402: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb,
      e: () => kb
    });
    const kb = 3e4;
    class Wb {
      constructor(bb) {
        this.lm = bb, this.waitedMs = 0, this.lastMs = null
      }
      frame(bb, cb) {
        if (cb) return !0;
        const sb = null === this.lastMs ? 0 : bb - this.lastMs;
        return this.lastMs = bb, sb <= 900 && (this.waitedMs += sb), !(this.waitedMs < kb) && (this.lm(), !0)
      }
    }
  },
  4507: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb,
      g: () => ab,
      h: () => Wb
    });
    var kb = sb(4512);

    function Wb(bb) {
      return "none" !== bb
    }

    function ab(bb, cb) {
      if (!bb) return "none";
      switch (cb) {
        case kb.W.Drawn:
          return "drawn";
        case kb.W.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function Tb(bb) {
      return "drawn" === bb
    }
  },
  40014: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => kb,
      e: () => eb,
      h: () => lb,
      l: () => Qb,
      p: () => Xb,
      q: () => nb,
      s: () => fb,
      w: () => Mb,
      y: () => mb
    });
    class kb extends Error {
      constructor(bb) {
        super(`the join's code did not load: ${bb instanceof Error?bb.message:String(bb)}`, {
          cause: bb
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === bb || void 0 === bb ? void 0 : bb.request
      }
    }
    let Wb = null,
      ab = null,
      Tb = null;
    const Ub = [];
    let Ib = null;

    function Hb(bb, cb) {
      try {
        bb(cb)
      } catch (sb) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", sb)
      }
    }

    function fb() {
      return Ib
    }

    function Mb(bb) {
      Ub.push(bb), null !== Ib && Hb(bb, Ib)
    }

    function Xb(bb) {
      return Wb ??= Promise.all([sb.e(69), sb.e(94), sb.e(214), sb.e(74), sb.e(215), sb.e(189), sb.e(93), sb.e(259), sb.e(187), sb.e(262), sb.e(199), sb.e(186), sb.e(200), sb.e(136), sb.e(85), sb.e(114), sb.e(237), sb.e(53)]).then((() => sb(41933))).then((cb => {
        cb.loadAudio(bb), Ib = cb;
        for (const bb of Ub) Hb(bb, cb);
        return cb
      })).catch((bb => {
        throw Wb = null, bb
      })), Wb
    }
    async function nb(bb, cb) {
      try {
        const sb = await Xb(bb);
        await sb.loadClientGame(cb)
      } catch (sb) {
        throw new kb(sb)
      }
    }

    function mb(bb, cb) {
      ab = {
        running: bb,
        shell: cb
      }
    }

    function lb() {
      return Tb
    }
    async function Qb(bb) {
      const cb = ab;
      if ((null === cb || void 0 === cb ? void 0 : cb.running) !== bb) throw new Error("the core's session has ended");
      const sb = await Xb(cb.shell.audio).catch((bb => {
        throw new kb(bb)
      }));
      if (null !== Tb) return Tb;
      if (ab !== cb || bb.isStopped) throw new Error("the core stopped while the game code loaded");
      if (Tb = sb.startGameHost(bb, cb.shell), null === Tb) throw new Error("the core's shared tables didn't read, so the game can't start");
      return Tb
    }

    function eb() {
      null !== Tb && (null !== Ib ? Ib.endGameHost(Tb) : Tb.closeGame()), Tb = null, ab = null
    }
  },
  40291: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Hb,
      e: () => ab,
      g: () => Tb,
      h: () => Wb,
      k: () => nb,
      o: () => fb,
      r: () => Ib,
      u: () => Xb,
      w: () => Mb,
      x: () => Ub
    });
    var kb = sb(1758);
    const Wb = new Uint8Array([12]),
      ab = 2e3,
      Tb = 257;

    function Ub(bb) {
      const cb = new Uint8Array(4);
      return new DataView(cb.buffer).setUint32(0, bb, !0), cb
    }
    class Ib extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class Hb extends Error {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(bb), this.stage = cb, this.code = sb, this.serverText = kb, this.name = "JoinError"
      }
    }
    class fb extends Error {
      constructor(bb) {
        super(bb), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class Mb extends Error {
      constructor(bb) {
        super((0, kb.e)(bb), {
          cause: bb
        }), this.name = "TrafficCheckError"
      }
    }
    class Xb extends Error {
      constructor(bb, cb, sb) {
        super(bb, {
          cause: sb
        }), this.networkLost = cb, this.name = "SeatRequestError"
      }
    }
    class nb extends Error {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(bb), this.code = cb, this.serverText = sb, this.name = "MatchmakeError"
      }
    }
  },
  40294: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Xb,
      c: () => Mb
    });
    var kb = sb(2459),
      Wb = sb(3251),
      ab = sb(38639),
      Tb = sb(40282),
      Ub = sb(40291),
      Ib = sb(40301);
    const Hb = "seat reservation expired.",
      fb = "early_leave";

    function Mb(bb) {
      if (bb instanceof ab.i) return "expected";
      if (bb instanceof Ub.u) return bb.networkLost ? "expected" : "unrecognised";
      if (bb instanceof Ub.d) {
        if ("closed" === bb.stage && (0 === bb.code || (0, Wb.g)(bb.code))) return "expected";
        if ("roomError" === bb.stage && (bb.serverText === Hb || bb.serverText === fb)) return "expected"
      }
      return bb instanceof Ub.d || bb instanceof Ub.k ? null === (0, Tb.m)(bb.code).name ? "unrecognised" : "known" : (0, kb.e)(bb) ? "expected" : bb instanceof Ub.w || bb instanceof Ib.f ? "known" : "unrecognised"
    }

    function Xb(bb) {
      return bb instanceof ab.i ? "timedOut" : "expected" !== Mb(bb) || (0, kb.e)(bb) || bb instanceof Ub.d && 1001 === bb.code ? void 0 : "failed"
    }
  },
  40383: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Jb,
      h: () => Mb,
      i: () => Lb,
      k: () => eb,
      l: () => Yb
    });
    var kb = sb(36139),
      Wb = sb(36134);
    const ab = 64 * kb.d,
      Tb = 40 * kb.h,
      Ub = 36 * kb.h,
      Ib = 20 * kb.h,
      Hb = 2 * kb.h,
      fb = 5 * kb.h;

    function Mb(bb) {
      return "footprint" !== bb
    }
    const Xb = 2 * kb.h,
      nb = 4 * kb.h,
      mb = 35 * kb.h + Xb + nb,
      lb = 6.5 * kb.h,
      Qb = 132.5 * kb.d;

    function eb(bb) {
      const cb = lb + (0, Wb.g)(bb) + bb * Qb;
      return Math.ceil((2 * mb + cb) / ab) * ab
    }
    const Cb = eb(Wb.c),
      Nb = (kb.h, kb.h, kb.h, {
        targetBytes: Tb,
        leastBytes: Ib
      }),
      Vb = {
        targetBytes: Ub,
        leastBytes: Ib
      };

    function Lb(bb) {
      return bb >= Wb.c ? Nb : Vb
    }
    const ub = 2 * ab;

    function Yb(bb, cb, sb) {
      return bb + cb + ub > (null !== sb && void 0 !== sb ? sb : Cb)
    }
    const hb = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? bb => {
        requestIdleCallback(bb)
      } : null
    };
    class Jb {
      constructor(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : hb;
        this.memory = bb, this.readPeakStoredChunks = cb, this.onError = sb, this.clock = kb, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(bb, cb, sb) {
        this.shedding = {
          shed: bb,
          lm: cb,
          readDistanceInUse: sb
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
        return Yb(this.memory.memoryBytes(), bb, this.ceilingBytes)
      }
      reserveAtJoin(bb) {
        let {
          targetBytes: cb,
          leastBytes: sb
        } = bb;
        const kb = this.memory.memoryBytes(),
          Wb = kb + sb,
          ab = Math.max(cb + (this.ballastOn() ? fb : 0), Wb),
          Tb = this.call((() => this.memory.reserveUpFront(ab) ? "target" : ab > Wb && this.memory.reserveUpFront(Wb) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== Tb) {
          const bb = "least" === Tb ? `took ${Wb} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${ab} bytes was refused at ${kb} bytes; ${bb}`)
        }
        return this.joinReserveTaken = Tb, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== Tb && this.shedFor("joinReserve"), "none" !== Tb
      }
      afterFrame() {
        if (this.stopped) return;
        const bb = this.clock.now(),
          cb = null !== this.stepsHeldUntil && bb >= this.stepsHeldUntil;
        if (cb && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && bb >= this.ballastCheckAt && (this.takeBallast(bb), this.stopped)) return;
        const sb = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          kb = cb && "now" === sb ? "none" : sb,
          {
            requestIdle: Wb
          } = this.clock;
        "now" === kb || null !== this.pendingSince && bb - this.pendingSince >= 500 ? this.step() : "idle" === kb && null === this.pendingSince && (null === Wb ? this.step() : (this.pendingSince = bb, Wb((() => {
          null !== this.pendingSince && this.step()
        })))), bb - this.statsAt >= 1e3 && (this.statsAt = bb, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var bb, cb;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (cb = this.shedding.readDistanceInUse()) && void 0 !== cb ? cb : this.distanceInUse);
          null === (bb = this.footprint) || void 0 === bb || bb.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(bb, cb) {
        this.noteWorker(`Mesh${bb}`, cb)
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
      noteWorker(bb, cb) {
        const sb = this.workers.get(bb);
        null !== sb && void 0 !== sb && sb.gone && (this.replacedRefusals.reserves += sb.stats.reservesRefused, this.replacedRefusals.allocations += sb.stats.allocationsRefused), this.workers.set(bb, {
          stats: cb,
          gone: !1
        })
      }
      workerGone(bb) {
        const cb = this.workers.get(bb);
        cb && (cb.gone = !0)
      }
      details() {
        var bb, cb;
        const sb = {
          wasmMemoryNow: `${(0,kb.k)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (sb.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (sb.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const Wb = this.main;
        if (Wb) {
          sb.wasmMemoryMain = gb(Wb);
          const bb = Math.max(0, Wb.peakLiveBytes - this.ballastPeakBytes),
            cb = 0 === this.peakStoredChunks ? "-" : (bb / this.peakStoredChunks / kb.d).toFixed(1);
          sb.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${cb} KiB`
        }
        for (const [kb, {
            stats: Tb,
            gone: Ub
          }] of this.workers) sb[`wasmMemory${kb}`] = gb(Tb) + (Ub ? " (gone)" : "");
        const ab = null !== (bb = null === (cb = this.footprint) || void 0 === cb ? void 0 : cb.describe()) && void 0 !== bb ? bb : null;
        return null !== ab && (sb.wasmMemoryFootprint = ab), sb
      }
      pageKillSnapshot() {
        var bb, cb, sb, Wb, ab;
        let Tb = (null !== (bb = null === (cb = this.main) || void 0 === cb ? void 0 : cb.reservesRefused) && void 0 !== bb ? bb : 0) + this.replacedRefusals.reserves,
          Ub = (null !== (sb = null === (Wb = this.main) || void 0 === Wb ? void 0 : Wb.allocationsRefused) && void 0 !== sb ? sb : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: kb
          }
          of this.workers.values()) Tb += kb.reservesRefused, Ub += kb.allocationsRefused;
        return {
          wasmMainMiB: Number((0, kb.k)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, kb.k)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: Tb,
          refusedAllocations: Ub,
          sheds: this.sheds,
          ...null === (ab = this.footprint) || void 0 === ab ? void 0 : ab.snapshot()
        }
      }
      workersMemoryBytes() {
        let bb = 0;
        for (const {
            stats: cb,
            gone: sb
          }
          of this.workers.values()) bb += sb ? 0 : cb.memoryBytes;
        return bb
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(Hb)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(bb) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = bb + 1e3;
        const cb = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, cb)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(bb) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${bb}: frames grow on demand from here`)
      }
      shedFor(bb) {
        const {
          shedding: cb
        } = this;
        if (null === cb) return;
        this.pendingSince = null;
        const sb = this.call((() => cb.shed(bb)), null);
        this.stopped || (null !== sb ? (this.sheds++, this.shedCap = sb, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), cb.lm(bb, this.sheds, this.details())) : Mb(bb) && this.stopSteps("nothing is left to shed"))
      }
      call(bb, cb) {
        if (this.stopped) return cb;
        try {
          return bb()
        } catch (sb) {
          return this.stop(), this.onError(sb), cb
        }
      }
    }

    function gb(bb) {
      const cb = (bb, cb) => `${bb}/${(0,kb.k)(cb)}`;
      return `memory ${(0,kb.k)(bb.memoryBytes)} live ${(0,kb.k)(bb.liveBytes)} peak ${(0,kb.k)(bb.peakLiveBytes)} unused ${(0,kb.k)(bb.unusedBytes)} ceiling ${(0,kb.k)(bb.ceilingBytes)} MiB; grows upFront ${cb(bb.grows.upFront,bb.grownBytes.upFront)} ahead ${cb(bb.grows.ahead,bb.grownBytes.ahead)} inFrame ${cb(bb.grows.onDemandInFrame,bb.grownBytes.onDemandInFrame)} other ${cb(bb.grows.onDemand,bb.grownBytes.onDemand)}; refused reserves ${bb.reservesRefused} allocations ${bb.allocationsRefused}`
    }
  },
  40388: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Ib,
      f: () => Hb,
      i: () => nb,
      l: () => Mb
    });
    var kb = sb(3505),
      Wb = sb(4512),
      ab = sb(40391),
      Tb = sb(40396),
      Ub = sb(35945);
    const Ib = 395,
      Hb = 2147483648,
      fb = new Uint8Array(0);
    class Mb extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class Xb extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class nb {
      constructor(bb, cb, sb) {
        var kb, Wb, Tb, Ub;
        let Ib = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = bb, this.build = cb, this.onFailure = sb, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.vn = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (kb = Ib.fetchFile) && void 0 !== kb ? kb : bb => (0, ab.j)(bb), this.onWritten = null !== (Wb = Ib.onWritten) && void 0 !== Wb ? Wb : null, this.onTaken = null !== (Tb = Ib.onTaken) && void 0 !== Tb ? Tb : null, this.onPackFileFailed = null !== (Ub = Ib.onPackFileFailed) && void 0 !== Ub ? Ub : null, this.startupLeft = new Set(bb.startup);
        for (const ab of bb.startup) this.request(ab)
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
        const cb = this.pending.get(bb);
        if (!0 === (null === cb || void 0 === cb ? void 0 : cb.ask)) return;
        const sb = this.Bn(bb, !0);
        sb.recheck = void 0 !== cb;
        const kb = this.drawn.get(bb);
        if (void 0 !== kb) return sb.qU = !0, sb.recheck = !0, void this.fetch(bb, sb, kb);
        this.fetchWanted(bb, sb)
      }
      async refresh() {
        const bb = ++this.refreshes,
          cb = new Set;
        for (const Tb of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const bb of Tb) 0 === (bb & ab.i) && cb.add(bb);
        const sb = [...cb];
        let kb;
        try {
          kb = await Promise.all(sb.map((bb => this.wanted(bb))))
        } catch {
          return null
        }
        if (bb !== this.refreshes) return null;
        const Wb = {
          resent: 0,
          refetched: 0,
          delivered: sb.filter((bb => this.drawn.has(bb))).length
        };
        return sb.forEach(((bb, cb) => {
          const {
            url: sb,
            inPlaceOf: ab
          } = kb[cb], Tb = this.pending.get(bb);
          if (void 0 !== Tb) {
            if (Tb.qU || void 0 === Tb.url) return void(Tb.recheck = !0);
            if (Tb.url === sb) return;
            Wb.refetched++;
            const cb = this.Bn(bb, Tb.ask);
            return cb.recheck = Tb.recheck, void this.fetch(bb, cb, sb, ab)
          }
          const Ub = this.written.get(bb);
          void 0 === Ub ? this.drawn.get(bb) !== (null !== sb && void 0 !== sb ? sb : void 0) && (Wb.resent++, this.fetch(bb, this.Bn(bb, !1), sb, ab)) : Ub.url !== (null !== sb && void 0 !== sb ? sb : "") && (Ub.attempt.recheck = !0)
        })), Wb
      }
      taken(bb, cb) {
        const sb = new Set,
          kb = new Set;
        for (const Wb of Array.from(cb)) 0 === (Wb & Hb) ? sb.add(Wb) : kb.add((Wb & ~Hb) >>> 0);
        for (const [Wb, ab] of this.written) ab.seq > bb || (this.written.delete(Wb), sb.has(ab.seq) ? this.refusedFile(Wb, ab) : this.takenFile(Wb, ab, !ab.empty && !kb.has(ab.seq)))
      }
      takenFile(bb, cb, sb) {
        const {
          attempt: kb
        } = cb;
        if (sb) {
          var Wb;
          this.drawn.set(bb, cb.url), this.undrawn.delete(bb), void 0 !== kb.inPlaceOf ? this.refusedPack.set(bb, kb.inPlaceOf) : kb.qU || this.refusedPack.delete(bb), null === (Wb = this.onTaken) || void 0 === Wb || Wb.call(this, bb, !0);
          const sb = this.pending.get(bb);
          if (!0 === (null === sb || void 0 === sb ? void 0 : sb.qU) && sb.url !== cb.url) {
            const sb = this.Bn(bb, !0);
            sb.qU = !0, sb.recheck = !0, this.fetch(bb, sb, cb.url)
          }
        } else {
          var ab;
          this.drawn.has(bb) || this.undrawn.add(bb), null === (ab = this.onTaken) || void 0 === ab || ab.call(this, bb, !1)
        }
        kb.recheck && this.resendIfChanged(bb)
      }
      refusedFile(bb, cb) {
        var sb, kb;
        if (null === (sb = this.onTaken) || void 0 === sb || sb.call(this, bb, !1), this.refusedPack.set(bb, cb.url), this.pending.has(bb)) return void(null === (kb = this.onPackFileFailed) || void 0 === kb || kb.call(this, bb, mb(cb.url)));
        const Wb = this.Bn(bb, cb.attempt.ask);
        Wb.recheck = cb.attempt.recheck, this.afterRefusal(bb, Wb, cb.url)
      }
      async afterRefusal(bb, cb, sb) {
        var kb;
        let Wb;
        try {
          Wb = await this.wanted(bb)
        } catch (ab) {
          return void(this.pending.get(bb) === cb && this.giveUp(bb, cb, sb, ab))
        }
        this.pending.get(bb) === cb && (Wb.inPlaceOf !== sb ? cb.ask || (null !== (kb = Wb.url) && void 0 !== kb ? kb : void 0) !== this.drawn.get(bb) ? this.fetch(bb, cb, Wb.url, Wb.inPlaceOf) : this.pending.delete(bb) : this.fallBack(bb, cb, sb, mb(sb)))
      }
      Bn(bb, cb) {
        const sb = {
          url: void 0,
          ask: cb,
          qU: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(bb, sb);
        for (let kb = this.ready.length - 1; kb >= 0; kb--) this.ready[kb].file === bb && this.ready.splice(kb, 1);
        return sb
      }
      async wanted(bb) {
        const cb = await this.files.url(bb);
        return null !== cb && this.refusedPack.get(bb) === cb ? {
          url: await this.files.shippedUrl(bb),
          inPlaceOf: cb
        } : {
          url: cb,
          inPlaceOf: void 0
        }
      }
      fetchWanted(bb, cb) {
        const sb = this.files.url(bb);
        sb instanceof Promise ? sb.then((sb => {
          this.fetchFound(bb, cb, sb)
        }), (sb => {
          this.pending.get(bb) === cb && this.giveUp(bb, cb, "", sb)
        })) : this.fetchFound(bb, cb, sb)
      }
      fetchFound(bb, cb, sb) {
        null !== sb && this.refusedPack.get(bb) === sb ? Promise.resolve(this.files.shippedUrl(bb)).then((kb => {
          this.fetch(bb, cb, kb, sb)
        }), (kb => {
          this.pending.get(bb) === cb && this.giveUp(bb, cb, sb, kb)
        })) : this.fetch(bb, cb, sb)
      }
      fetch(bb, cb, sb, kb) {
        this.pending.get(bb) === cb && (cb.url = sb, cb.inPlaceOf = kb, null !== sb ? this.load(bb, cb, sb) : this.buildFile(bb, cb, "", fb))
      }
      load(bb, cb, sb) {
        const kb = this.vn.get(bb);
        (null === kb || void 0 === kb ? void 0 : kb.url) !== sb ? this.fetchFile(sb).then((kb => {
          var Wb, ab;
          this.pending.get(bb) === cb && (this.keptTotal += kb.byteLength - (null !== (Wb = null === (ab = this.vn.get(bb)) || void 0 === ab ? void 0 : ab.glb.byteLength) && void 0 !== Wb ? Wb : 0), this.vn.set(bb, {
            url: sb,
            glb: kb
          }), this.buildFile(bb, cb, sb, kb))
        }), (kb => {
          this.pending.get(bb) === cb && this.fallBack(bb, cb, sb, kb)
        })) : this.buildFile(bb, cb, sb, kb.glb)
      }
      buildFile(bb, cb, sb, kb) {
        let Wb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Tb = kb.byteLength > 0 && (0, ab.l)(sb) ? (bb | ab.e) >>> 0 : bb;
        this.queueRecord(bb, cb, sb, kb, this.build(Tb, kb), Wb)
      }
      queueRecord(bb, cb, sb, kb, ab, Ub) {
        ab.then((ab => {
          if (this.pending.get(bb) !== cb) return;
          if (Wb.q + (0, Wb.ze)(ab.byteLength) > Wb.Nc) return void this.ringRefused(bb, cb, sb, new Mb(`${lb(sb)}'s record is ${ab.byteLength-Tb.c} bytes, past the cmd ring's ${Wb.Nc}`), Ub);
          const Ib = {
            file: bb,
            url: sb,
            payload: ab,
            glb: kb,
            attempt: cb
          };
          Ub ? this.ready.unshift(Ib) : this.ready.push(Ib)
        }))
      }
      async fallBack(bb, cb, sb, kb) {
        var Wb;
        let ab = null,
          Tb = kb;
        try {
          ab = await this.files.shippedUrl(bb)
        } catch (Ub) {
          Tb = Ub
        }
        this.pending.get(bb) === cb && (null !== ab && ab !== sb ? (null === (Wb = this.onPackFileFailed) || void 0 === Wb || Wb.call(this, bb, kb), cb.ask || this.drawn.get(bb) !== ab ? (cb.url = ab, cb.inPlaceOf = sb, this.load(bb, cb, ab)) : this.pending.delete(bb)) : this.giveUp(bb, cb, sb, Tb))
      }
      ringRefused(bb, cb, sb, kb) {
        let Wb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, ab.l)(sb) ? this.fallBack(bb, cb, sb, kb): this.giveUp(bb, cb, sb, kb, Wb)
      }
      giveUp(bb, cb, sb, Wb) {
        let ab = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: bb,
          url: lb(sb),
          error: Wb,
          startup: this.startupLeft.has(bb)
        }), cb.ask || !this.drawn.has(bb) ? (0, kb.J)(Wb) ? this.queueRecord(bb, cb, sb, fb, Promise.resolve((0, Tb.m)(bb, (0, Ub.h)(Wb))), ab) : this.buildFile(bb, cb, sb, fb, ab) : this.pending.delete(bb)
      }
      async resendIfChanged(bb) {
        var cb;
        if (0 !== (bb & ab.i)) return;
        let sb;
        try {
          sb = await this.wanted(bb)
        } catch {
          return
        }(null !== (cb = sb.url) && void 0 !== cb ? cb : void 0) === this.drawn.get(bb) || this.pending.has(bb) || this.written.has(bb) || this.fetch(bb, this.Bn(bb, !1), sb.url, sb.inPlaceOf)
      }
      drain(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === bb) return;
        let sb = 0,
          kb = 0;
        for (; kb < this.ready.length && sb < 262144;) {
          const Ub = this.ready[kb];
          if (this.written.has(Ub.file)) {
            kb++;
            continue
          }
          const fb = this.nextSeq;
          new DataView(Ub.payload.buffer, Ub.payload.byteOffset, Ub.payload.byteLength).setUint32(Tb.e, fb, !0);
          const Xb = Ub.attempt.qU && Ub.glb.byteLength > 0 && this.drawn.get(Ub.file) === Ub.url;
          if (bb(Ib, Xb ? 1 : 0, Ub.payload)) {
            if (this.nextSeq = fb >= Hb - 1 ? 1 : fb + 1, this.ready.splice(kb, 1), sb += Ub.payload.byteLength, this.pending.delete(Ub.file), this.startupLeft.delete(Ub.file), this.written.set(Ub.file, {
                seq: fb,
                url: Ub.url,
                empty: 0 === Ub.glb.byteLength,
                attempt: Ub.attempt
              }), Ub.glb.byteLength > 0) try {
              var Wb;
              null === (Wb = this.onWritten) || void 0 === Wb || Wb.call(this, Ub.file, Ub.glb)
            } catch (ab) {
              console.warn("ModelFeed: reading the file's images failed", ab)
            }
          } else {
            if (null === cb || 0 === Ub.glb.byteLength || cb(Ub.payload.byteLength)) return;
            this.ready.splice(kb, 1);
            const bb = new Mb(`${lb(Ub.url)}'s record is ${Ub.payload.byteLength-Tb.c} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(Ub.file, Ub.attempt, Ub.url, bb, !0)
          }
        }
      }
    }

    function mb(bb) {
      return new Xb(`presentation refused ${lb(bb)}`)
    }

    function lb(bb) {
      return bb.startsWith("data:") ? `${bb.slice(0,Math.min(Math.max(bb.indexOf(","),5),64))},...` : bb
    }
  },
  40391: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb,
      i: () => ab,
      j: () => fb,
      l: () => Ub,
      m: () => Hb,
      n: () => Ib
    });
    var kb = sb(3505),
      Wb = sb(2959);
    const ab = 2147483648,
      Tb = 1073741824;

    function Ub(bb) {
      return bb.startsWith("data:")
    }

    function Ib(bb) {
      let {
        onTableFailed: cb,
        packUrl: sb
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const kb = Hb();
      kb.catch((bb => {
        null === cb || void 0 === cb || cb(bb)
      }));
      const Wb = async cb => (await kb).fileUrl((cb & ~ab) >>> 0, bb);
      return {
        startup: [],
        url: async bb => {
          if (sb && 0 === (bb & ab)) {
            const cb = await kb,
              Wb = cb.filePackName(bb),
              ab = null === Wb || "lifeform" === cb.fileSource(bb) ? null : sb(Wb);
            if (null !== ab) return ab
          }
          return Wb(bb)
        },
        shippedUrl: Wb
      }
    }

    function Hb() {
      return sb.e(41).then((() => sb(42734)))
    }
    async function fb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return bb.startsWith("data:") ? (0, Wb.b)(bb.slice(bb.indexOf(",") + 1), cb) : (0, kb.C)(bb, {
        spare: cb
      })
    }
  },
  40396: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Hb,
      e: () => fb,
      h: () => nb,
      k: () => Qb,
      m: () => mb,
      q: () => Xb,
      t: () => lb
    });
    const kb = 826427981,
      Wb = 1,
      ab = 2,
      Tb = 44,
      Ub = 46,
      Ib = 58,
      Hb = 8,
      fb = 4;

    function Mb(bb, cb, sb) {
      const Wb = (new TextEncoder).encode(sb),
        ab = Hb + 4 * (cb.length + 2),
        Tb = new Uint8Array(ab + (Wb.byteLength + 3 & -4)),
        Ub = new DataView(Tb.buffer);
      return Ub.setUint32(0, bb, !0), Ub.setUint32(Hb, kb, !0), cb.forEach(((bb, cb) => {
        Ub.setUint32(Hb + 4 * (cb + 1), bb, !0)
      })), Ub.setUint32(ab - 4, Wb.byteLength, !0), Tb.set(Wb, ab), Tb
    }

    function Xb(bb, cb) {
      return Mb(bb, [ab], cb)
    }

    function nb(bb, cb) {
      return Mb(bb, [Wb, Ub], cb)
    }

    function mb(bb, cb) {
      return Mb(bb, [Wb, Ib], cb)
    }

    function lb(bb, cb) {
      return Mb(bb, [Wb, Tb], cb)
    }

    function Qb(bb) {
      const cb = Hb;
      if (bb.byteLength < cb + 12) return !1;
      const sb = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
      return sb.getUint32(cb, !0) === kb && sb.getUint32(cb + 4, !0) === Wb && sb.getUint32(cb + 8, !0) === Tb
    }
  },
  40378: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Cb,
      e: () => eb,
      i: () => ub,
      j: () => Lb,
      n: () => Yb,
      p: () => lb
    });
    var kb = sb(4517),
      Wb = sb(40256);
    const ab = 18,
      Tb = 19,
      Ub = 20,
      Ib = {
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
        [ab]: "retry linked",
        [Tb]: "fallback linked",
        [Ub]: "fallback failed",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function Hb(bb, cb) {
      return bb === ab ? "program retry" : bb === Tb || bb === Ub ? `program fallback ${cb}` : "program"
    }
    const fb = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      Mb = {
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
      Xb = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      nb = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld"
      },
      mb = {
        1280: "invalid enum",
        1281: "invalid value",
        1282: "invalid operation",
        1285: "out of memory",
        1286: "invalid framebuffer operation",
        37442: "context lost"
      };

    function lb(bb) {
      return String(bb).replace(/\d/g, (bb => String.fromCharCode(97 + Number(bb))))
    }

    function Qb(bb, cb) {
      var sb;
      return null !== (sb = bb[cb]) && void 0 !== sb ? sb : lb(cb)
    }

    function eb() {
      return lb((0, Wb.c)())
    }

    function Cb(bb, cb) {
      switch (bb) {
        case kb.f.RenderSceneRowNotDrawn:
          return {
            words: ` ${Qb(Mb,cb)}`, instance: String(cb), group: String(bb)
          };
        case kb.f.RenderChunkMeshNotDrawn: {
          const sb = 0 === (128 & cb) ? "" : " shortage",
            kb = cb >>> 8;
          return {
            words: ` ${Qb(Xb,127&cb)}${sb}${0===kb?"":` kind ${lb(kb)}`}`,
            instance: String(cb),
            group: String(bb)
          }
        }
        case kb.f.RenderInternal: {
          const sb = Qb(fb, 255 & cb),
            kb = cb >>> 8 & 255;
          if (0 === kb) return {
            words: ` ${sb}`,
            instance: String(cb),
            group: String(bb)
          };
          const Wb = Qb(Ib, kb),
            ab = cb >>> 16;
          return {
            words: ` ${sb} ${Wb} program ${lb(ab)}`,
            instance: `${sb} ${Wb}`,
            group: Hb(kb, sb),
            gpuDetails: {
              programFailure: Wb,
              program: String(ab)
            }
          }
        }
        case kb.f.RenderSerialLinks: {
          const sb = Qb(nb, cb);
          return {
            words: ` ${sb}`,
            instance: String(cb),
            group: String(bb),
            gpuDetails: {
              serialLinks: sb
            }
          }
        }
        case kb.f.RenderGlErrorAfterRestore: {
          const sb = Qb(mb, 65535 & cb),
            kb = cb >>> 16,
            Wb = 65535 !== kb;
          return {
            words: ` ${sb}${Wb?` program ${lb(kb)}`:""}`,
            instance: String(cb),
            group: String(bb),
            gpuDetails: Wb ? {
              glError: sb,
              program: String(kb)
            } : {
              glError: sb
            }
          }
        }
        default:
          return null
      }
    }
    const Nb = 2,
      Vb = new Map;

    function Lb(bb) {
      let {
        group: cb,
        instance: sb
      } = bb, kb = Vb.get(cb);
      return void 0 === kb && (kb = [], Vb.set(cb, kb)), !kb.includes(sb) && (kb.length >= Nb || (kb.push(sb), !1))
    }

    function ub() {
      return Vb.size > 0
    }

    function Yb() {
      Vb.clear()
    }
  },
  40301: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => eb,
      f: () => Cb,
      i: () => Qb,
      m: () => ub
    });
    var kb = sb(6312),
      Wb = sb(26),
      ab = sb(4087),
      Tb = sb(4517),
      Ub = sb(6309),
      Ib = sb(40308);

    function Hb(bb, cb) {
      const sb = (0, Ub.b)(cb.variants);
      return bb.setShaderPack(sb.variantFlags, sb.hooks, sb.moduleCodes, (0, Ib.C)(cb.layers), Ib.l[cb.YT], cb.keepCircleShadows)
    }
    const fb = 0,
      Mb = 1,
      Xb = 2,
      nb = "shaderPack:failedToCompile",
      mb = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      lb = new Set(["not_requested", "off_after_loss", "gpu_class_webgl"]);

    function Qb(bb, cb) {
      var sb;
      const kb = null !== (sb = null === bb || void 0 === bb ? void 0 : bb.reason) && void 0 !== sb ? sb : "none";
      return mb.has(kb) ? {
        messageKey: cb ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === kb && "override" === (null === bb || void 0 === bb ? void 0 : bb.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: lb.has(kb) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    const eb = {
      messageKey: "shaderPack:failedDeviceGraphics",
      noAdapter: !1
    };
    class Cb extends Error {
      constructor(bb) {
        super(`the shader pack can't run in this game: ${bb}`), this.messageKey = bb, this.name = "ShaderPackJoinError"
      }
    }
    const Nb = "strict";
    class Vb {
      constructor(bb) {
        this.deps = bb, this.pagePack = void 0, this.loaded = null, this.YT = Nb, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = bb.load().catch((cb => (bb.warn("the shader pack could not load: the game draws without it", cb), {
          status: "none"
        }))).then((bb => (this.loaded = bb, "active" === bb.status && (this.handOverToPreviews(bb), null !== bb.harnessPolicy && (this.YT = bb.harnessPolicy, this.handOver())), bb)))
      }
      async join(bb) {
        this.leave();
        const cb = this.game,
          [sb, Wb] = await Promise.all([this.pagePack, this.policyOf(bb)]);
        if (cb !== this.game || "none" === sb.status) return null;
        const ab = "active" === sb.status ? sb.pack.variants : sb.variants,
          Tb = (0, kb.f)(ab, Wb);
        if (Tb && "active" === sb.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (Tb) {
          const bb = this.cantRun(sb, Wb);
          if (null !== bb) return bb
        } else if ("blocked" === sb.status || null === this.deps.core) return null;
        return this.YT = Wb, this.handOver(), Tb && this.refused ? nb : (this.joined = !0, this.offInThisGame = !Tb, null)
      }
      async replay(bb) {
        const cb = await this.join(bb);
        null === cb ? this.playable() : this.deps.failInGame(cb)
      }
      cantRun(bb, cb) {
        const {
          core: sb,
          noWebGpu: kb
        } = this.deps;
        if ("blocked" === bb.status) {
          return "shaderPack:failedUnchecked" === bb.messageKey && null === sb && kb.noAdapter ? kb.messageKey : bb.messageKey
        }
        return this.refused || this.failedPolicies.has(cb) ? nb : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var bb;
        return this.runsInJoinedGame() && "active" === (null === (bb = this.loaded) || void 0 === bb ? void 0 : bb.status) ? function(bb, cb) {
          const sb = bb.filter((bb => (0, kb.f)([bb], cb))),
            Wb = bb => sb.some((cb => cb[bb]));
          return {
            sceneDepth: Wb("sceneDepth"),
            sunShadow: Wb("sunShadow"),
            airShadow: Wb("airShadow")
          }
        }(this.loaded.pack.variants, this.YT) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(nb) : (null !== this.couldntRun ? this.notify(ab.d, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.YT) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(bb) {
        for (const {
            code: cb,
            detail: sb
          }
          of bb)
          if (cb === Tb.f.RenderShaderPackNotRun) switch (255 & sb) {
            case fb:
              this.refused = !0, this.failed();
              break;
            case Mb:
              this.failedPolicies.add(this.YT), this.failed();
              break;
            case Xb:
              this.failedModelPolicies.add(this.YT), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(nb) : this.failedWhileJoining = !0)
      }
      fail(bb) {
        this.leave(), this.deps.failInGame(bb)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(bb, cb) {
        const sb = this.game;
        this.deps.notify(bb, (() => sb === this.game && this.joined), cb)
      }
      handOver() {
        var bb;
        const {
          core: cb
        } = this.deps;
        null !== cb && "active" === (null === (bb = this.loaded) || void 0 === bb ? void 0 : bb.status) && (Hb(cb, {
          ...this.loaded.pack,
          YT: this.YT
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(bb) {
        let {
          pack: cb,
          harnessPolicy: sb
        } = bb;
        const {
          previews: kb
        } = this.deps;
        null !== kb && Hb(kb, {
          ...cb,
          YT: null !== sb && void 0 !== sb ? sb : Nb
        })
      }
      policyOf(bb) {
        return this.deps.policyOf(bb).catch((bb => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", bb), Nb)))
      }
    }
    const Lb = "wasmShaderPackNotice";

    function ub(bb, cb, sb, kb) {
      return Wb.j.subscribe(Lb, (bb => {
        let {
          translationKey: cb,
          stillCurrent: sb,
          reasonKey: kb
        } = bb;
        sb() && Wb.j.QQ("chat", (0, ab.i)(cb, kb))
      })), new Vb({
        load: Yb,
        policyOf: hb,
        core: bb,
        previews: cb,
        noWebGpu: sb,
        notify: (bb, cb, sb) => {
          const kb = {
            translationKey: bb,
            stillCurrent: cb,
            reasonKey: sb
          };
          Wb.j.QQ(Lb, kb, !0)
        },
        failInGame: bb => {
          Wb.j.QQ(ab.g, bb)
        },
        warn: kb
      })
    }
    async function Yb() {
      const [{
        shaderPackPage: bb,
        harnessShaderPackMode: cb
      }, {
        shaderPackTextures: kb
      }] = await Promise.all([sb.e(129).then((() => sb(38787))), sb.e(130).then((() => sb(6301)))]), Wb = await bb.load();
      return "active" !== Wb.status ? Wb : {
        status: "active",
        pack: {
          variants: Wb.pack.variants,
          layers: kb().layers,
          keepCircleShadows: Wb.pack.keepCircleShadows
        },
        harnessPolicy: cb()
      }
    }
    async function hb(bb) {
      var cb;
      const [{
        harnessShaderPackMode: kb
      }, {
        getShaderPackPolicy: Wb
      }] = await Promise.all([sb.e(129).then((() => sb(38787))), sb.e(89).then((() => sb(40700)))]);
      return null !== (cb = kb()) && void 0 !== cb ? cb : Wb(bb)
    }
  },
  40406: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Ub,
      c: () => Qb,
      e: () => Ib,
      h: () => Hb,
      j: () => fb,
      m: () => Xb
    });
    var kb = sb(40411),
      Wb = sb(40415);
    const ab = "atlas:",
      Tb = 3e4;
    class Ub extends Error {
      constructor(bb, cb) {
        super(`fetching ${bb} answered HTTP ${cb}`), this.url = bb, this.status = cb, this.name = "TerrainTextureFetchError"
      }
    }

    function Ib(bb) {
      if (!bb.startsWith(ab)) return null;
      const cb = Number(bb.slice(ab.length));
      return Number.isInteger(cb) && cb >= 0 ? cb : null
    }
    async function Hb() {
      const bb = await sb.e(201).then((() => sb(33944)));
      return {
        atlasSheets: bb.blockAtlasUrls,
        texture: cb => {
          var sb, kb, ab;
          return null !== (sb = null !== (kb = null !== (ab = bb.animatedBlockTextures[cb]) && void 0 !== ab ? ab : bb.rotatedBlockTextures[cb]) && void 0 !== kb ? kb : Wb.d[cb]) && void 0 !== sb ? sb : null
        }
      }
    }
    async function fb(bb) {
      const cb = new AbortController,
        sb = setTimeout((() => {
          cb.abort(new DOMException(`${bb} took over ${Tb} ms`, "TimeoutError"))
        }), Tb);
      let kb;
      try {
        const sb = await fetch(bb, {
          signal: cb.signal
        });
        if (!sb.ok) throw new Ub(bb, sb.status);
        kb = await sb.blob()
      } finally {
        clearTimeout(sb)
      }
      const Wb = await createImageBitmap(kb, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return Xb(Wb)
      } finally {
        Wb.close()
      }
    }
    const Mb = 8192;

    function Xb(bb) {
      const {
        width: cb,
        height: sb
      } = bb, Wb = Math.max(1, Math.min(sb, Mb)), ab = (0, kb.d)(cb, Wb, {
        willReadFrequently: !0
      });
      if (!ab) throw new Error("no 2D context to read the texture back");
      ab.globalCompositeOperation = "copy";
      const Tb = new Uint8Array(cb * sb * 4);
      for (let kb = 0; kb < sb; kb += Wb) {
        const Ub = Math.min(Wb, sb - kb);
        ab.drawImage(bb, 0, kb, cb, Ub, 0, 0, cb, Ub), Tb.set(ab.getImageData(0, 0, cb, Ub).data, kb * cb * 4)
      }
      return {
        width: cb,
        height: sb,
        pixels: Tb
      }
    }
    async function nb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fb;
      const kb = [],
        Wb = await Promise.all(bb.map((async bb => {
          var Wb, Tb;
          const Ub = null !== (Wb = null === (Tb = cb.decoded) || void 0 === Tb ? void 0 : Tb.call(cb, bb)) && void 0 !== Wb ? Wb : null,
            Hb = null === Ub ? function(bb, cb) {
              if (bb.startsWith(ab)) {
                var sb;
                const kb = Ib(bb);
                return null === kb ? null : null !== (sb = cb.atlasSheets[kb]) && void 0 !== sb ? sb : null
              }
              return cb.texture(bb)
            }(bb, cb) : null,
            fb = null !== Ub && void 0 !== Ub ? Ub : null === Hb ? null : sb(Hb);
          if (null === fb) return kb.push({
            name: bb,
            url: Hb,
            error: new Error(`no URL for terrain texture ${bb}`)
          }), null;
          try {
            const cb = await fb;
            if (cb.pixels.byteLength !== cb.width * cb.height * 4) throw new Error(`decoded ${cb.pixels.byteLength} bytes for ${cb.width}x${cb.height} texels`);
            return {
              name: bb,
              texture: cb
            }
          } catch (Mb) {
            return kb.push({
              name: bb,
              url: Hb,
              error: Mb
            }), null
          }
        }))),
        Tb = Wb.filter((bb => null !== bb)),
        Ub = new Uint32Array(2 * Tb.length);
      Tb.forEach(((bb, cb) => {
        let {
          texture: sb
        } = bb;
        Ub[2 * cb] = sb.width, Ub[2 * cb + 1] = sb.height
      }));
      return {
        handOver: {
          names: Tb.map((bb => {
            let {
              name: cb
            } = bb;
            return cb
          })),
          textures: Tb.map((bb => {
            let {
              texture: cb
            } = bb;
            return cb.pixels
          })),
          sizes: Ub
        },
        failures: kb
      }
    }
    const mb = [2e3, 1e4, 3e4, 6e4, 12e4];

    function lb() {}
    class Qb {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mb,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = bb, this.retryMs = cb, this.keepBelow = sb, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Hb,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const kb = ++this.started,
          Wb = {
            decode: sb.decode,
            wholeAtlas: sb.wholeAtlas
          };
        return this.loadAndHandOver(cb, Wb, bb, (() => {
          var bb;
          return kb < this.landed || !1 === (null === (bb = sb.wanted) || void 0 === bb ? void 0 : bb.call(sb))
        }), {
          onTaken: (bb, sb) => {
            this.landed = kb, this.current = {
              mine: kb,
              sources: cb,
              load: Wb,
              vn: bb,
              failed: sb
            }
          }
        })
      }
      restore(bb) {
        var cb;
        const sb = this.current;
        if (null === sb) return Promise.resolve(null);
        if ((null === (cb = this.restoring) || void 0 === cb ? void 0 : cb.mine) === sb.mine) return this.restoring.done;
        const kb = {
          mine: sb.mine,
          done: this.restoreLanded(sb, bb).finally((() => {
            this.restoring === kb && (this.restoring = null)
          }))
        };
        return this.restoring = kb, kb.done
      }
      async restoreLanded(bb, cb) {
        const sb = () => this.landed !== bb.mine,
          {
            vn: kb
          } = bb;
        if (null !== kb) return this.stopped() ? null : this.core.setTerrainTextures(kb.names, kb.textures, kb.sizes);
        let Wb = cb;
        for (let ab = 0;; ab++) {
          const cb = this.retryMs.at(ab),
            kb = {
              allOrNothingExcept: void 0 === cb ? void 0 : bb.failed
            },
            Tb = await this.loadAndHandOver(bb.sources, bb.load, Wb, sb, kb);
          if (!1 !== Tb || void 0 === cb || this.stopped()) return Tb;
          if (Wb = lb, await new Promise((bb => {
              setTimeout(bb, cb)
            })), sb()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(bb, cb, sb, kb) {
        let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const ab = this.core.terrainTextureNames();
        var Tb;
        if (0 === ab.length) return null === (Tb = Wb.onTaken) || void 0 === Tb || Tb.call(Wb, null, new Set), !0;
        let Ub, Hb;
        try {
          Ub = await bb(), Hb = await nb(ab, Ub, cb.decode)
        } catch (Qb) {
          return kb() ? null : (sb({
            name: null,
            url: null,
            error: Qb
          }), !1)
        }
        if (kb() || this.stopped()) return null;
        for (const Ib of Hb.failures) sb(Ib);
        const fb = Wb.allOrNothingExcept;
        if (void 0 !== fb && Hb.failures.some((bb => {
            let {
              name: cb
            } = bb;
            return null === cb || !fb.has(cb)
          })) || !0 === cb.wholeAtlas && Hb.failures.some((bb => {
            let {
              name: cb
            } = bb;
            return null === cb || null !== Ib(cb)
          }))) return !1;
        const {
          handOver: Mb
        } = Hb, Xb = function(bb) {
          return bb.textures.reduce(((bb, cb) => bb + cb.byteLength), 0)
        }(Mb) < this.keepBelow, mb = this.core.setTerrainTextures(Mb.names, Mb.textures, Mb.sizes, Xb ? void 0 : () => {
          !async function(bb, cb) {
            await cb;
            for (const {
                buffer: kb
              }
              of bb) {
              const bb = kb;
              var sb;
              if (!bb.detached) null === (sb = bb.transfer) || void 0 === sb || sb.call(bb, 0)
            }
          }(Mb.textures, Ub.heldUntil)
        });
        if (mb) {
          var lb;
          const bb = new Set(Hb.failures.flatMap((bb => {
            let {
              name: cb
            } = bb;
            return null === cb ? [] : [cb]
          })));
          null === (lb = Wb.onTaken) || void 0 === lb || lb.call(Wb, Xb ? Mb : null, bb)
        }
        return mb
      }
    }
  },
  36423: (bb, cb, sb) => {
    function kb(bb) {
      return "fetch" === bb || "timeout" === bb || "integrity" === bb ? "download" : "browser"
    }
    sb.d(cb, {
      b: () => Wb,
      e: () => Tb,
      h: () => Ib,
      j: () => Ub,
      m: () => kb,
      o: () => ab
    });
    const Wb = "https://discord.gg/playbloxd";

    function ab(bb) {
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

    function Tb(bb, cb) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: cb ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: bb.code
        },
        discordLink: cb,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function Ub() {
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

    function Ib(bb, cb, sb) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: sb ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: bb.reason
        },
        discordLink: null === bb.name,
        confirm: cb ? "general:reconnect" : bb.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  6309: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Vb,
      c: () => Lb,
      d: () => Cb,
      e: () => eb
    });
    var kb = sb(6312);
    const Wb = 6,
      ab = 3,
      Tb = 1,
      Ub = 2,
      Ib = 4,
      Hb = 8,
      fb = 16,
      Mb = 32,
      Xb = 64,
      nb = 128,
      mb = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function lb(bb) {
      if (!bb) return 0;
      const cb = mb.indexOf(bb);
      if (cb <= 0) throw new Error(`"${bb}" is not a shader pack hook function`);
      return cb
    }

    function Qb(bb) {
      if (0 === bb) return null;
      const cb = mb[bb];
      if (void 0 === cb) throw new Error(`${bb} is not a shader pack hook function id`);
      return cb
    }

    function eb(bb) {
      const cb = kb.b.length;
      return {
        strict: bb >= cb,
        program: kb.b[bb % cb]
      }
    }

    function Cb(bb) {
      return Number(bb.strict) * kb.b.length + kb.b.indexOf(bb.program)
    }

    function Nb(bb) {
      return "" === bb ? [] : bb.split(" ")
    }

    function Vb(bb) {
      const cb = {
        variantFlags: new Uint8Array(Wb),
        hooks: new Uint8Array(Wb * ab),
        moduleCodes: Array(Wb).fill(""),
        reads: Array(2 * Wb).fill("")
      };
      for (const sb of bb) {
        const bb = Cb(sb.key),
          kb = (bb, cb) => null === sb.hooks.surface || sb.reads.fragment.includes(bb) ? 0 : cb;
        cb.variantFlags[bb] = (sb.sceneDepth ? Tb : 0) | (sb.movesVertices ? Ub : 0) | (sb.sunShadow ? Ib : 0) | (sb.airShadow ? Hb : 0) | (sb.discards ? fb : 0) | kb("localPosition", Mb) | kb("enchantSpeed", Xb) | kb("enchantTier", nb), cb.hooks[bb * ab] = lb(sb.hooks.vertex), cb.hooks[bb * ab + 1] = lb(sb.hooks.surface), cb.hooks[bb * ab + 2] = lb(sb.hooks.light), cb.moduleCodes[bb] = sb.moduleCode, cb.reads[2 * bb] = sb.reads.vertex.join(" "), cb.reads[2 * bb + 1] = sb.reads.fragment.join(" ")
      }
      return cb
    }

    function Lb(bb) {
      const {
        hooks: cb,
        moduleCodes: sb,
        reads: kb
      } = bb;
      return Array.from(bb.variantFlags, ((bb, Wb) => {
        const Mb = Wb * ab;
        return {
          key: eb(Wb),
          hooks: {
            vertex: Qb(cb[Mb]),
            surface: Qb(cb[Mb + 1]),
            light: Qb(cb[Mb + 2])
          },
          moduleCode: sb[Wb],
          sceneDepth: 0 !== (bb & Tb),
          sunShadow: 0 !== (bb & Ib),
          airShadow: 0 !== (bb & Hb),
          movesVertices: 0 !== (bb & Ub),
          discards: 0 !== (bb & fb),
          reads: {
            vertex: Nb(kb[2 * Wb]),
            fragment: Nb(kb[2 * Wb + 1])
          }
        }
      }))
    }
  },
  40308: (bb, cb, sb) => {
    sb.d(cb, {
      A: () => Tb,
      C: () => lb,
      G: () => nb,
      H: () => mb,
      b: () => Wb,
      d: () => kb,
      h: () => Xb,
      i: () => fb,
      l: () => Qb,
      p: () => ab,
      s: () => Ub,
      w: () => Ib
    });
    const kb = 3,
      Wb = 0,
      ab = 1,
      Tb = 2,
      Ub = {
        uniform: 3,
        zX: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Ib = 10,
      Hb = "BloxdPackInputs",
      fb = "bloxdPackInputs",
      Mb = [{
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
      Xb = 80;

    function nb() {
      const bb = Mb.map((bb => {
        let {
          name: cb,
          type: sb
        } = bb;
        return `    ${cb}: ${sb},\n`
      })).join("");
      return `struct ${Hb} {\n${bb}}\n@group(${kb}) @binding(${Wb}) var<uniform> ${fb}: ${Hb};\n`
    }

    function mb(bb, cb) {
      const sb = new DataView(bb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Xb),
        [kb, Wb, ab, Tb, Ub, Ib] = Mb;
      sb.setFloat32(kb.offset, cb.seconds, !0), sb.setUint32(Wb.offset, cb.lit ? 1 : 0, !0);
      for (let Hb = 0; Hb < 3; Hb++) sb.setInt32(ab.offset + 4 * Hb, cb.renderOffset[Hb], !0), sb.setFloat32(Tb.offset + 4 * Hb, cb.J9[Hb], !0), sb.setFloat32(Ub.offset + 4 * Hb, cb.eyePosition[Hb], !0), sb.setFloat32(Ib.offset + 4 * Hb, cb.shadowDirection[Hb], !0)
    }

    function lb(bb) {
      const cb = new Uint32Array(Math.max(1, bb.length));
      return bb.forEach(((bb, sb) => {
        let {
          id: kb,
          rotation: Wb
        } = bb;
        cb[sb] = 65535 & kb | (3 & Wb) << 16
      })), cb
    }
    const Qb = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6312: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => kb,
      e: () => Tb,
      f: () => Ub,
      g: () => Wb,
      k: () => ab
    });
    const kb = ["terrain", "liquid", "model"];

    function Wb() {
      const bb = [];
      for (const cb of [!1, !0])
        for (const sb of kb) bb.push({
          strict: cb,
          program: sb
        });
      return bb
    }

    function ab(bb) {
      return `${bb.strict?"strict":"allow"}.${bb.program}`
    }

    function Tb(bb) {
      return !bb.hooks.vertex && !bb.hooks.surface && !bb.hooks.light
    }

    function Ub(bb, cb) {
      return "off" !== cb && (null === bb || bb.some((bb => bb.key.strict === ("strict" === cb) && !Tb(bb))))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);