export const id = 80;
export const ids = [80];
export const modules = {
  37733: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => pB,
      d: () => YB,
      g: () => JB,
      i: () => lB
    });
    const VB = "A valid external Instance reference no longer exists.",
      yB = [
        [1e4, "<10s"],
        [6e4, "<1m"],
        [3e5, "<5m"],
        [18e5, "<30m"]
      ];
    const pB = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function lB(BB, TB) {
      return BB ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(BB) {
        var TB;
        const dB = null !== (TB = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(BB)) && void 0 !== TB ? TB : /failed with ([A-Z][A-Z0-9_]+)/.exec(BB);
        return dB ? dB[1] : BB.includes(VB) ? "gpu_process_lost" : "other"
      }(TB)
    }

    function JB(BB) {
      return `${(null===BB||void 0===BB?void 0:BB.vendor)||"unknown vendor"} ${(null===BB||void 0===BB?void 0:BB.architecture)||"unknown architecture"}`
    }

    function YB(BB) {
      var TB;
      const dB = yB.find((TB => {
        let [dB] = TB;
        return BB < dB
      }));
      return null !== (TB = null === dB || void 0 === dB ? void 0 : dB[1]) && void 0 !== TB ? TB : "30m+"
    }
  },
  38015: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB,
      i: () => yB
    });
    const VB = 45e3;
    class yB extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  38190: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB
    });
    const VB = "Traffic checks failed! Please use Chrome, disable extensions and refresh your page. Report on Discord if this persists."
  },
  39619: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB,
      c: () => yB,
      d: () => pB
    });
    const VB = 1024,
      yB = 1024 * VB;

    function pB(BB) {
      return (BB / yB).toFixed(1)
    }
  },
  39617: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => pB,
      g: () => JB,
      h: () => lB,
      i: () => YB,
      m: () => gB
    });
    var VB = dB(184);
    const yB = 32 * dB(39619).c,
      pB = 6144,
      lB = 4608,
      JB = 512;

    function YB(BB) {
      return Math.floor(yB * BB / pB)
    }

    function gB(BB) {
      const TB = BB - Math.floor(BB / 6);
      let dB = VB.c.maxChunkHorizAddDistance,
        yB = VB.c.maxChunkVertAddDistance;
      if (oB(dB + 1, yB + 1) <= TB) return null;
      for (; oB(dB + 1, yB + 1) > TB && (dB > 0 || yB > 0);) dB > yB ? dB-- : yB--;
      return {
        horizontal: dB,
        vertical: yB
      }
    }

    function oB(BB, TB) {
      const dB = Math.max(BB, TB);
      let VB = 0;
      for (let yB = -dB; yB <= dB; yB++)
        for (let pB = -dB; pB <= dB; pB++)
          for (let lB = -dB; lB <= dB; lB++) kB(BB, TB, yB, pB, lB) && VB++;
      return VB
    }

    function kB(BB, TB, dB, VB, yB) {
      const pB = dB * dB + yB * yB;
      return BB === TB ? pB + VB * VB <= BB * BB : BB > TB ? Math.abs(VB) <= TB && pB + VB * VB <= BB * BB : pB <= BB * BB && pB + VB * VB <= TB * TB
    }
  },
  39567: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => yB,
      e: () => pB,
      h: () => JB,
      j: () => oB,
      m: () => YB,
      p: () => lB
    });
    var VB = dB(184);
    const yB = 3e3,
      pB = 15e3;

    function lB(BB) {
      const TB = BB.endsWith(VB.h);
      return {
        text: (TB ? BB.slice(0, -VB.h.length) : BB) || null,
        dropsCache: TB
      }
    }
    const JB = "Either your internet isn't working or this is a bug.";

    function YB(BB, TB) {
      const dB = oB(BB);
      return null !== dB.name && "" === VB.b[dB.name].text && null !== TB ? TB : dB.reason
    }
    const gB = "You were removed from the game.";

    function oB(BB) {
      var TB;
      let dB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const yB = null !== (TB = Object.keys(VB.b).find((TB => VB.b[TB].code === BB))) && void 0 !== TB ? TB : null;
      if (null === yB) return {
        code: BB,
        name: yB,
        reason: null !== dB && void 0 !== dB ? dB : `${JB}\nCode: ${BB}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: pB,
        canReconnect: lB = !1
      } = VB.b[yB], YB = BB === VB.b.outdatedVersion.code || BB === VB.b.loadRecaptchaError.code;
      return {
        code: BB,
        name: yB,
        reason: "" !== pB ? pB : null !== dB && void 0 !== dB ? dB : BB === VB.b.gameOrPluginKick.code ? gB : `Code: ${BB}`,
        canReconnect: lB,
        automaticallyReconnect: BB === VB.b.customGameUpdated.code || BB === VB.b.duplicateLobbyNameError.code,
        requiresRefresh: YB
      }
    }
  },
  4186: (BB, TB, dB) => {
    dB.d(TB, {
      $c: () => VB.qb,
      $d: () => cB,
      B: () => VB.f,
      Bb: () => TT,
      Bc: () => OT,
      Bd: () => aB,
      Cc: () => gT,
      Cd: () => XB,
      Db: () => yB.g,
      Dd: () => RB,
      Eb: () => sB,
      F: () => gB,
      Fb: () => QB,
      Fd: () => CB,
      G: () => VB.h,
      Gc: () => VT,
      I: () => jB,
      Jb: () => FB,
      Jd: () => WB,
      K: () => VB.m,
      Kc: () => VB.ab,
      M: () => VB.p,
      Mb: () => wB,
      Mc: () => VB.cb,
      Md: () => qB,
      Nc: () => VB.eb,
      Nd: () => GB,
      Ob: () => VB.J,
      P: () => VB.t,
      Pd: () => lT,
      Rc: () => nB,
      Rd: () => DT,
      Sb: () => KB,
      T: () => kB,
      Tc: () => VB.fb,
      Ud: () => iB,
      Wb: () => NB,
      Wc: () => VB.hb,
      Wd: () => xB,
      X: () => vB,
      Yb: () => pT,
      Yc: () => VB.lb,
      Zb: () => mB,
      _: () => VB.w,
      _d: () => SB,
      ac: () => oT,
      b: () => BT,
      cb: () => VB.A,
      cc: () => yB.o,
      ce: () => IB,
      dd: () => VB.tb,
      ec: () => EB,
      f: () => uB,
      fb: () => ZB,
      fe: () => YB,
      g: () => DB,
      hb: () => yT,
      hc: () => dT,
      hd: () => VB.wb,
      i: () => YT,
      ic: () => VB.P,
      j: () => MB,
      je: () => PB,
      kc: () => VB.Q,
      kd: () => zB,
      l: () => fB,
      lb: () => oB,
      le: () => uT,
      mc: () => VB.R,
      n: () => VB.e,
      nd: () => VB.zb,
      od: () => VB.Ab,
      pb: () => VB.C,
      pc: () => VB.S,
      pe: () => OB,
      q: () => kT,
      r: () => UB,
      s: () => lB,
      sd: () => VB.Hb,
      t: () => rB,
      tb: () => hB,
      tc: () => VB.V,
      ud: () => pB,
      v: () => LT,
      vb: () => AB,
      vd: () => HB,
      x: () => bB,
      xc: () => VB.$,
      xd: () => JT,
      yb: () => eB
    });
    var VB = dB(4192),
      yB = dB(2101);
    const pB = Math.round(1e3 / VB.Hb),
      lB = 4,
      JB = 2;

    function YB() {
      return crypto.getRandomValues(new Uint32Array(JB))
    }
    const gB = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      oB = 16,
      kB = {
        Draws: 1,
        NetAll: 2
      },
      LB = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function OB(BB) {
      return (BB.nametagsHidden ? tB.NametagsHidden : 0) | (BB.crouchToggle ? tB.CrouchToggle : 0) | (BB.bhopDisabled ? tB.BhopDisabled : 0) | (BB.disableBobbing ? tB.DisableBobbing : 0) | (BB.ezTowering ? tB.EzTowering : 0) | (BB.ezBridging ? tB.EzBridging : 0) | (BB.showChunkBorders ? tB.ShowChunkBorders : 0) | (BB.edgeGuard ? tB.EdgeGuard : 0)
    }
    const DB = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      uB = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      HB = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      EB = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      vB = 5,
      mB = 4294967295;

    function iB(BB) {
      return (BB.showFog ? LB.ShowFog : 0) | (BB.lighting ? LB.Lighting : 0) | (BB.chunkFade ? LB.ChunkFade : 0)
    }
    const NB = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      tB = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        EdgeGuard: 128,
        All: 255
      },
      fB = {
        Release: 1,
        KeepTouches: 2
      },
      sB = {
        Point: 1,
        Stamped: 2
      },
      MB = {
        Add: 1,
        Clear: 2
      },
      zB = 1,
      wB = 8,
      UB = 16777215,
      FB = 4,
      KB = {
        Resume: 1
      },
      rB = {
        Held: 1
      };

    function IB(BB, TB) {
      return (BB | TB << 8) >>> 0
    }

    function cB(BB) {
      return 255 & BB
    }

    function SB(BB) {
      return BB >>> 8
    }

    function PB(BB) {
      return BB + 3 & -4
    }
    const QB = 16777216,
      RB = 20;
    const aB = 8,
      ZB = 8,
      XB = 16777216,
      WB = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      hB = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      CB = 16,
      GB = {
        Lost: 0,
        Gone: 1
      },
      qB = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function xB(BB) {
      return BB === qB.WorldgenSeed || BB === qB.Generate
    }
    const jB = 4,
      AB = 99,
      bB = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      nB = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      eB = 12,
      BT = 16,
      TT = 4,
      dT = 12,
      VT = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      yT = 4,
      pT = 8,
      lT = 8,
      JT = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      YT = {
        Crit: 1,
        HitSelf: 2
      },
      gT = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      oT = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      kT = 12,
      LT = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      OT = 67108864;

    function DT(BB) {
      for (const [TB, dB] of Object.entries(VB.f))
        if (dB === BB) return TB;
      return `Unknown${BB}`
    }

    function uT(BB) {
      return {
        status: BB[VB.A.Status],
        lastError: BB[VB.A.LastError],
        lastErrorDetail: BB[VB.A.LastErrorDetail],
        errorCount: BB[VB.A.ErrorCount],
        frameIndex: BB[VB.A.FrameIndex],
        tickIndex: BB[VB.A.TickIndex],
        renderPending: BB[VB.A.RenderPending],
        firstView: BB[VB.A.FirstView],
        chunksCancelled: BB[VB.A.ChunksCancelled]
      }
    }
  },
  39376: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB,
      c: () => kB,
      g: () => JB,
      i: () => pB,
      j: () => yB,
      l: () => YB,
      p: () => oB
    });
    class VB extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function yB(BB) {
      return BB instanceof RangeError && /call stack/i.test(BB.message) || BB instanceof Error && "InternalError" === BB.name && /recursion/i.test(BB.message)
    }

    function pB(BB) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(BB))
    }
    const lB = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function JB(BB) {
      var TB;
      return BB instanceof WebAssembly.RuntimeError || BB instanceof VB || yB(BB) && lB.test(null !== (TB = BB.stack) && void 0 !== TB ? TB : "")
    }

    function YB(BB, TB) {
      if (JB(BB)) throw BB;
      console.error(TB, BB)
    }

    function gB(BB, TB, dB, yB, pB) {
      if (TB % yB !== 0 || TB + dB > BB.byteLength) throw new VB(`${pB}: ${dB} bytes at ${TB}, ${yB}-aligned, outside ${BB.byteLength} bytes of memory`)
    }

    function oB(BB, TB, dB, VB, yB) {
      return 0 === dB ? null : (gB(TB, dB, VB * BB.BYTES_PER_ELEMENT, BB.BYTES_PER_ELEMENT, yB), new BB(TB, dB, VB))
    }

    function kB(BB, TB, dB, VB, yB) {
      return 0 === TB ? null : (gB(BB, TB, dB, VB, yB), new DataView(BB, TB, dB))
    }
  },
  39727: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => VB
    });
    const VB = {
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
  39684: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => DB,
      e: () => uB,
      i: () => LB,
      k: () => kB
    });
    const VB = 2e3,
      yB = "unavailable";
    let pB = () => Promise.resolve().then((() => dB(2705))),
      lB = null,
      JB = null,
      YB = gB();

    function gB() {
      let BB = () => {};
      return {
        promise: new Promise((TB => {
          BB = () => {
            TB(null)
          }
        })),
        resolve: BB
      }
    }

    function oB() {
      if (null === lB) {
        const BB = pB();
        lB = BB, BB.then((TB => {
          lB === BB && (JB = TB)
        }), (() => {
          lB === BB && (lB = null)
        }))
      }
      return lB
    }

    function kB() {
      oB().catch((() => {}))
    }

    function LB() {
      YB.resolve()
    }

    function OB(BB, TB, dB, VB) {
      if (null === BB) return {
        errorKind: TB,
        fingerprint: yB,
        dedupe: `${TB}|${VB}`
      };
      const {
        fingerprint: pB
      } = BB.clientErrorKey(TB, dB, VB);
      return {
        errorKind: TB,
        fingerprint: pB,
        dedupe: pB
      }
    }

    function DB(BB, TB, dB, VB) {
      return null === JB ? VB ? (kB(), OB(null, BB, TB, dB)) : null : OB(JB, BB, TB, dB)
    }
    async function uB(BB, TB, dB) {
      let yB;
      const pB = new Promise((BB => {
        yB = setTimeout((() => {
          BB(null)
        }), VB)
      }));
      try {
        return OB(await Promise.race([oB(), pB, YB.promise]), BB, TB, dB)
      } catch {
        return OB(null, BB, TB, dB)
      } finally {
        clearTimeout(yB)
      }
    }
  },
  39676: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      BUILT_IN_ANIMATIONS_SITE: () => eB,
      CORE_ERRORS_SITE: () => WB,
      EVENT_OVERFLOW_SITE: () => nB,
      JOIN_SITE: () => CB,
      LEAVE_SITE: () => GB,
      MODEL_FEED_SITE: () => qB,
      MODEL_POOL_SITE: () => xB,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => dT,
      NON_FATAL_REPORTS_PER_SESSION: () => ET,
      PREVIEW_ANIMATIONS_SITE: () => bB,
      RENDER_RELOAD_SITE: () => AB,
      TEXTURE_NAMES_SITE: () => jB,
      TEXTURE_PACK_FEED_SITE: () => BT,
      TurnstilePageError: () => CT,
      WASM_LOAD_SITE: () => hB,
      crashError: () => tT,
      crashReportsSettled: () => UT,
      flushCrashReports: () => zT,
      joinFailureCode: () => GT,
      lokiTransport: () => pT,
      modelFailureCode: () => eT,
      readTrap: () => rT,
      renderLossDetail: () => Dd,
      renderReloadMessage: () => Ld,
      reportCoreErrors: () => KT,
      reportCountedLoadFallback: () => WT,
      reportCrash: () => fT,
      reportDataLoadFailure: () => vd,
      reportDisconnect: () => bT,
      reportDracoDecoderFailure: () => dd,
      reportEventOverflow: () => pd,
      reportGpuFallback: () => XT,
      reportMemoryShed: () => Yd,
      reportModelFailure: () => Bd,
      reportModelPoolFailure: () => Td,
      reportPageJoinFailure: () => xT,
      reportReconnectGaveUp: () => nT,
      reportRenderReload: () => ud,
      reportReplayFault: () => od,
      reportStaleBuildReload: () => Nd,
      reportStoppedCore: () => PT,
      reportTerrainTextureFailure: () => Hd,
      reportTexturePackFeedLoadFailure: () => yd,
      reportUnstreamedCoreLoad: () => hT,
      reportUnsupportedFallback: () => aT,
      reportUnusedSeat: () => AT,
      reportWorkerLost: () => ld,
      reportWorkerStartTimeout: () => gd,
      reportWorldgenGaveUp: () => Jd,
      reportWorldgenLoadFailure: () => Vd,
      resetCrashReports: () => FT,
      setCrashBackend: () => LT,
      setCrashScreen: () => oT,
      setCrashTransport: () => YT,
      showCrash: () => ST,
      showJoinFailure: () => qT,
      showUnsupported: () => RT
    });
    var VB = dB(955),
      yB = dB(2713),
      pB = dB(39684),
      lB = dB(4186),
      JB = dB(4192),
      YB = dB(39543);
    const gB = 18,
      oB = {
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
        [gB]: "retry linked",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      },
      kB = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      LB = {
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
      OB = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      };

    function DB(BB) {
      return String(BB).replace(/\d/g, (BB => String.fromCharCode(97 + Number(BB))))
    }

    function uB(BB, TB) {
      var dB;
      return null !== (dB = BB[TB]) && void 0 !== dB ? dB : DB(TB)
    }

    function HB(BB, TB) {
      switch (BB) {
        case JB.f.RenderSceneRowNotDrawn:
          return {
            words: ` ${uB(LB,TB)}`, instance: String(TB), group: String(BB)
          };
        case JB.f.RenderChunkMeshNotDrawn: {
          const dB = 0 === (128 & TB) ? "" : " shortage",
            VB = TB >>> 8;
          return {
            words: ` ${uB(OB,127&TB)}${dB}${0===VB?"":` kind ${DB(VB)}`}`,
            instance: String(TB),
            group: String(BB)
          }
        }
        case JB.f.RenderInternal: {
          const dB = uB(kB, 255 & TB),
            VB = TB >>> 8 & 255;
          if (0 === VB) return {
            words: ` ${dB}`,
            instance: String(TB),
            group: String(BB)
          };
          const yB = uB(oB, VB),
            pB = TB >>> 16;
          return {
            words: ` ${dB} ${yB} program ${DB(pB)}`,
            instance: `${dB} ${yB}`,
            group: VB === gB ? "program retry" : "program",
            program: {
              programFailure: yB,
              program: String(pB)
            }
          }
        }
        default:
          return null
      }
    }
    const EB = 2,
      vB = new Map;

    function mB(BB) {
      let {
        group: TB,
        instance: dB
      } = BB, VB = vB.get(TB);
      return void 0 === VB && (VB = [], vB.set(TB, VB)), !VB.includes(dB) && (VB.length >= EB || (VB.push(dB), !1))
    }
    var iB = dB(2951),
      NB = dB(37733),
      tB = dB(122),
      fB = dB(2956),
      sB = dB(38015),
      MB = dB(2512),
      zB = dB(39645),
      wB = dB(39322),
      UB = dB(39576),
      FB = dB(39585),
      KB = dB(39689),
      rB = dB(3211),
      IB = dB(3216),
      cB = dB(39695),
      SB = dB(39716),
      PB = dB(39731),
      QB = dB(2717),
      RB = dB(39638),
      aB = dB(39514),
      ZB = dB(39517);
    const XB = "[bloxd-wasm-client]",
      WB = "coreErrors",
      hB = "wasmLoad",
      CB = "join",
      GB = "lD",
      qB = "modelFeed",
      xB = "modelWorkerPool",
      jB = "textureNames",
      AB = "renderReload",
      bB = "previewAnimations",
      nB = "eventOverflow",
      eB = "builtInAnimations",
      BT = "texturePackFeed",
      TT = 300,
      dT = 8;
    let VT = 0;
    const yT = new Set,
      pT = (BB, TB) => {
        const dB = OT[BB.kind];
        if (null === dB) return void lT(BB, TB, kT, null);
        const VB = (0, pB.c)(dB, BB.message, BB.code, BB.fatal);
        if (null !== VB) return void lT(BB, TB, kT, VB);
        const yB = kT;
        MT("Loki", (async () => {
          lT(BB, TB, yB, await (0, pB.e)(dB, BB.message, BB.code))
        }))
      };

    function lT(BB, TB, dB, pB) {
      const {
        kind: lB,
        code: JB,
        site: YB,
        fatal: gB,
        details: oB
      } = BB;
      if (!gB)
        if (null === pB || (0, yB.e)(pB.errorKind) || yT.has(pB.dedupe)) {
          if (VT >= dT) return;
          VT++
        } else yT.add(pB.dedupe);
      const kB = {
        ...oB,
        kind: lB,
        code: JB,
        site: YB,
        fatal: String(gB),
        backend: dB
      };
      null !== pB && (kB.errorKind = pB.errorKind, kB.fingerprint = pB.fingerprint), TB instanceof Error && "string" === typeof TB.stack && (kB.causeStack = TB.stack.slice(0, 2e3)), (0, VB.wu)(tT(BB, TB), kB)
    }
    let JT = pT;

    function YT(BB) {
      const TB = JT;
      return JT = BB, TB
    }
    let gT = () => {};

    function oT(BB) {
      const TB = gT;
      return gT = BB, TB
    }
    let kT = "unpicked";

    function LT(BB) {
      kT = BB
    }
    const OT = {
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
        staleBuild: "wasm_load",
        disconnect: "disconnect"
      },
      DT = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        gpuFallback: "wasm_load"
      },
      uT = new Set(["unstreamedLoad"]);
    let HT = !1;
    const ET = 20,
      vT = new Map;
    let mT = 0,
      iT = 0;
    const NT = new Set;

    function tT(BB, TB) {
      const dB = Object.assign(new Error(`${BB.code}: ${BB.message}`), {
        name: "WasmClientCrash",
        cause: null !== TB && void 0 !== TB ? TB : void 0
      });
      return TB instanceof Error && TB.stack && (dB.stack = TB.stack), dB
    }

    function fT(BB) {
      var TB, VB;
      const {
        kind: yB,
        code: pB,
        site: lB,
        fatal: JB,
        message: YB,
        error: gB
      } = BB, oB = !1 !== BB.toTransport && !uT.has(yB), kB = !JB && oB, LB = {
        kind: yB,
        code: pB,
        site: lB,
        fatal: JB,
        message: YB,
        details: null !== (TB = BB.details) && void 0 !== TB ? TB : {}
      }, OB = `${pB}@${lB}${void 0===BB.instance?"":`#${BB.instance}`}${JB?"!":""}`, DB = (null !== (VB = vT.get(OB)) && void 0 !== VB ? VB : 0) + 1;
      if (vT.set(OB, DB), DB > 1 ? 0 === (DB & DB - 1) && sT((() => {
          console.warn(`${XB} ${pB} at ${lB} reported ${DB} times`)
        })) : kB && mT >= ET ? sT((() => {
          console.warn(`${XB} ${yB} ${pB} at ${lB}: ${YB} (not sent: the session's ${ET} went)`, LB.details, null !== gB && void 0 !== gB ? gB : "")
        })) : (kB && mT++, function(BB, TB, VB) {
          var yB, pB;
          const {
            kind: lB,
            code: JB,
            site: YB,
            fatal: gB,
            message: oB,
            details: kB
          } = BB;
          sT((() => {
            (gB ? console.error : console.warn)(`${XB} ${lB} ${JB} at ${YB}: ${oB}`, kB, null !== TB && void 0 !== TB ? TB : "")
          }));
          const LB = DT[lB],
            OB = null !== (yB = null !== (pB = OT[lB]) && void 0 !== pB ? pB : LB) && void 0 !== yB ? yB : null;
          null !== OB && MT("counts", (async () => {
            const {
              peekVisitSessionId: BB
            } = await Promise.resolve().then((() => dB(965)));
            if (null !== BB()) {
              const {
                reportCappedWasmFailure: BB,
                reportWasmFailure: TB
              } = await dB.e(192).then((() => dB(35319)));
              (void 0 === LB ? TB : BB)(OB, oB, JB), HT = !0
            }
          }));
          VB && sT((() => {
            JT(BB, TB)
          }))
        }(LB, gB, oB)), JB) {
        var uB;
        const TB = null !== (uB = BB.screen) && void 0 !== uB ? uB : {
          text: (0, PB.h)(LB, !0),
          reload: !0
        };
        sT((() => {
          gT(TB)
        }))
      }
      return LB
    }

    function sT(BB) {
      try {
        BB()
      } catch (TB) {
        try {
          console.warn(`${XB} could not send a report`, TB)
        } catch {}
      }
    }

    function MT(BB, TB) {
      try {
        const dB = TB().catch((TB => {
          console.warn(`${XB} could not send the report to ${BB}`, TB)
        })).finally((() => {
          NT.delete(dB)
        }));
        NT.add(dB)
      } catch (dB) {
        console.warn(`${XB} could not send the report to ${BB}`, dB)
      }
    }
    async function zT(BB) {
      let TB;
      (0, pB.i)();
      const dB = new Promise((dB => {
        TB = setTimeout(dB, BB)
      }));
      await Promise.race([wT(), dB]), clearTimeout(TB)
    }
    async function wT() {
      if (await Promise.allSettled([...NT]), HT) try {
        const {
          flushClientAnalyticsEvents: BB
        } = await Promise.resolve().then((() => dB(1385)));
        await BB()
      } catch (BB) {
        console.warn(`${XB} could not send the counts`, BB)
      }
    }
    async function UT() {
      for (; NT.size > 0;) await Promise.allSettled([...NT])
    }

    function FT() {
      vT.clear(), mT = 0, HT = !1, VT = 0, yT.clear(), iT = 0, vB.clear()
    }

    function KT(BB, TB, dB, VB) {
      iT += TB;
      for (const {
          code: JB,
          detail: gB
        }
        of BB) {
        var yB, pB;
        const BB = (0, lB.Rd)(JB),
          TB = HB(JB, gB),
          oB = null === VB || void 0 === VB ? void 0 : VB(JB, gB),
          kB = void 0 !== (null === TB || void 0 === TB ? void 0 : TB.program),
          LB = kB ? null === (yB = (0, tB.m)()) || void 0 === yB ? void 0 : yB.renderer : void 0,
          OB = kB ? ` ${DB((0,YB.c)())}` : "",
          uB = Array.from([LB && `gpu ${LB}`, oB].filter(Boolean).join("; ")).slice(0, TT).join(""),
          EB = `core error ${BB}${null!==(pB=null===TB||void 0===TB?void 0:TB.words)&&void 0!==pB?pB:""}${OB}${uB?`: ${uB}`:""}`,
          vB = {
            errorCode: String(JB),
            detail: String(gB),
            droppedBefore: String(iT),
            wasmBuild: dB.wasm,
            clientVersion: dB.client,
            ...null === TB || void 0 === TB ? void 0 : TB.program
          };
        null !== TB && mB(TB) ? sT((() => {
          console.warn(`${XB} coreError CORE-${BB}: ${EB} (not sent: the session's render warnings of its kind went)`, vB)
        })) : fT({
          kind: JB === lB.B.JobsHeapGaveUp ? "meshHeap" : "coreError",
          code: `CORE-${BB}`,
          site: WB,
          fatal: !1,
          message: EB,
          details: vB,
          instance: null === TB || void 0 === TB ? void 0 : TB.instance
        })
      }
    }

    function rT(BB) {
      return (0, RB.m)(BB instanceof aB.d ? BB.trap : BB, rB.H, rB.eb)
    }
    const IT = "declined=js";

    function cT(BB) {
      return BB ? {
        labels: [IT],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function ST(BB, TB, dB) {
      return QT(BB, TB, dB, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function PT(BB, TB, dB) {
      return QT(BB, TB, dB, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function QT(BB, TB, dB, VB, yB) {
      let {
        memoryDetails: pB = {},
        declined: lB = !1
      } = VB;
      const {
        code: JB,
        details: YB,
        message: gB
      } = (0, zB.L)(BB, TB), oB = [];
      null !== dB && (YB.trapKind = dB.kind, null !== dB.panic && (YB.panic = (0, RB.i)(dB.panic)), dB.refusedBytes > 0 && (YB.refusedAllocation = String(dB.refusedBytes)), oB.push((0, RB.p)(dB.kind, dB.refusedBytes)));
      const kB = cT(lB);
      return fT({
        kind: "crash",
        code: JB,
        site: BB.site,
        fatal: yB,
        message: [...oB, ...kB.labels, gB].join("; "),
        details: {
          ...YB,
          ...kB.details,
          ...pB
        },
        error: BB.error
      })
    }

    function RT(BB, TB, dB) {
      return fT({
        kind: "unsupported",
        code: TB,
        site: hB,
        fatal: !0,
        message: dB,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: BB,
          status: TB
        },
        screen: {
          text: (0, PB.n)(BB),
          reload: "download" === BB
        }
      })
    }

    function aT(BB, TB, dB) {
      return fT({
        kind: "unsupportedFallback",
        code: "blockedAfterLoss" === TB ? "blocked_after_loss" : "unsupported_js_fallback",
        site: hB,
        fatal: !1,
        message: dB,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: BB,
          status: "unsupported",
          decline: TB,
          fallback: "js"
        }
      })
    }
    const ZT = "misdrawn_gpu_js_fallback";

    function XT(BB, TB) {
      return fT({
        kind: "gpuFallback",
        code: ZT,
        site: hB,
        fatal: !1,
        message: `the renderer plays ${BB} on ${TB} worse than the JS client`,
        details: {
          gpuFamily: BB,
          backend: TB,
          fallback: "js"
        }
      })
    }

    function WT(BB, TB, dB, VB) {
      const yB = cT(VB);
      return fT({
        kind: "unsupported",
        code: TB,
        site: hB,
        fatal: !1,
        message: [...yB.labels, dB].join("; "),
        details: {
          cause: BB,
          status: TB,
          fallback: "js",
          ...yB.details
        }
      })
    }

    function hT() {
      const {
        code: BB,
        message: TB
      } = QB.d;
      return fT({
        kind: "unstreamedLoad",
        code: BB,
        site: hB,
        fatal: !1,
        message: TB
      })
    }
    class CT extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function GT(BB) {
      return BB instanceof UB.p ? 0 === BB.code ? "JOIN-matchmake" : `JOIN-${BB.code}` : BB instanceof UB.d ? 0 === BB.code ? `JOIN-${BB.stage}` : `JOIN-${BB.stage}-${BB.code}` : BB instanceof wB.c ? "JOIN-gameCode" : BB instanceof CT ? "JOIN-turnstilePage" : BB instanceof UB.A ? "JOIN-trafficCheck" : BB instanceof sB.i ? "JOIN-timeout" : "JOIN-network"
    }

    function qT(BB, TB) {
      const dB = (0, ZB.f)(BB),
        VB = {
          wasmBuild: TB.wasm,
          clientVersion: TB.client
        },
        yB = BB instanceof CT ? {
          text: (0, PB.j)(),
          reload: !1
        } : void 0,
        pB = (0, FB.h)(BB),
        lB = "expected" !== pB;
      return fT({
        kind: "join",
        code: GT(BB),
        site: CB,
        fatal: !0,
        message: dB,
        details: VB,
        error: BB,
        screen: yB,
        toTransport: lB,
        instance: pB
      })
    }

    function xT(BB, TB, dB) {
      var VB;
      const yB = (0, FB.h)(BB),
        pB = {
          cause: (BB instanceof UB.d || BB instanceof UB.p) && null !== (VB = BB.serverText) && void 0 !== VB ? VB : "",
          sinceJoinStart: (0, fB.d)(dB.sinceJoinStartMs),
          game: dB.game,
          ...(0, fB.i)(),
          wasmBuild: TB.wasm,
          clientVersion: TB.client
        };
      return fT({
        kind: "pageJoin",
        code: GT(BB),
        site: CB,
        fatal: !1,
        message: (0, ZB.f)(BB),
        details: pB,
        error: BB,
        toTransport: "unrecognised" === yB,
        instance: yB
      })
    }
    const jT = {
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

    function AT(BB, TB) {
      let {
        unused: dB,
        answered: VB,
        heldMs: yB
      } = BB;
      const {
        code: pB,
        message: lB
      } = jT[dB], JB = {
        unused: dB,
        answered: String(VB),
        heldMs: String(yB),
        wasmBuild: TB.wasm,
        clientVersion: TB.client
      };
      return fT({
        kind: "seat",
        code: pB,
        site: CB,
        fatal: !1,
        message: lB,
        details: JB
      })
    }

    function bT(BB, TB, dB) {
      var VB;
      let yB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (VB = BB.name) && void 0 !== VB ? VB : String(BB.code);
      const pB = {
          closeCode: String(BB.code),
          recognised: String(null !== BB.name),
          closeReason: dB.closeReason,
          sinceJoined: (0, fB.d)(dB.sinceJoinedMs),
          game: dB.game,
          ...(0, fB.i)(),
          wasmBuild: TB.wasm,
          clientVersion: TB.client
        },
        lB = null === BB.name && !(0, fB.e)(BB.code);
      return fT({
        kind: "disconnect",
        code: yB,
        site: GB,
        fatal: !1,
        message: "Left room",
        details: pB,
        toTransport: lB
      })
    }

    function nT(BB, TB) {
      const dB = {
        ...(0, iB.l)(BB),
        wasmBuild: TB.wasm,
        clientVersion: TB.client
      };
      return fT({
        kind: "disconnect",
        code: `reconnect-${BB.reason}`,
        site: CB,
        fatal: !1,
        message: "Reconnect failed",
        details: dB
      })
    }

    function eT(BB) {
      return BB.error instanceof IB.h ? `MODEL-${BB.error.status}` : BB.error instanceof cB.k ? "MODEL-ring" : "MODEL-network"
    }

    function Bd(BB, TB) {
      const dB = eT(BB),
        VB = `model file ${BB.file} ${BB.startup?"(startup) ":""}could not load`,
        yB = {
          file: String(BB.file),
          url: BB.url,
          wasmBuild: TB.wasm,
          clientVersion: TB.client
        };
      return fT({
        kind: BB.startup ? "model" : "modelLate",
        code: dB,
        site: qB,
        fatal: BB.startup,
        message: VB,
        details: yB,
        error: BB.error
      })
    }

    function Td(BB, TB) {
      const dB = {
        wasmBuild: TB.wasm,
        clientVersion: TB.client
      };
      return fT({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: xB,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: dB,
        error: BB
      })
    }

    function dd(BB, TB) {
      const dB = {
        wasmBuild: TB.wasm,
        clientVersion: TB.client
      };
      return fT({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: xB,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: dB,
        error: BB
      })
    }

    function Vd(BB, TB) {
      const dB = {
        wasmBuild: TB.wasm,
        clientVersion: TB.client
      };
      return fT({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: zB.F,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: dB,
        error: BB
      })
    }

    function yd(BB, TB) {
      const dB = {
        wasmBuild: TB.wasm,
        clientVersion: TB.client
      };
      return fT({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: BT,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: dB,
        error: BB
      })
    }

    function pd(BB, TB) {
      const {
        frames: dB,
        acks: VB,
        mask: yB,
        outcome: pB
      } = BB, lB = {
        frames: String(dB),
        acks: String(VB),
        mask: String(yB),
        outcome: null !== pB && void 0 !== pB ? pB : "resynced",
        wasmBuild: TB.wasm,
        clientVersion: TB.client
      };
      return fT({
        kind: "recovered",
        code: "rejoined" === pB ? "CORE-eventOverflowRejoin" : "failed" === pB ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: nB,
        fatal: !1,
        message: `the event buffer refused records in ${dB} frames`,
        details: lB
      })
    }

    function ld(BB, TB, dB) {
      return fT({
        kind: "recovered",
        code: "CORE-workerLost",
        site: BB,
        fatal: !1,
        message: `a ${BB} worker was lost`,
        details: {
          reason: TB,
          wasmBuild: dB.wasm,
          clientVersion: dB.client
        }
      })
    }

    function Jd(BB, TB) {
      const dB = {
        lastReason: BB,
        wasmBuild: TB.wasm,
        clientVersion: TB.client
      };
      return fT({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: zB.F,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: dB
      })
    }

    function Yd(BB, TB, dB) {
      return fT({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: zB.n,
        fatal: !1,
        message: (0, KB.g)(BB) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: BB,
          ...TB,
          wasmBuild: dB.wasm,
          clientVersion: dB.client
        }
      })
    }

    function gd(BB, TB, dB) {
      return fT({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: BB,
        fatal: !1,
        message: `a ${BB} worker did not start`,
        details: {
          waitedMs: String(Math.round(TB)),
          wasmBuild: dB.wasm,
          clientVersion: dB.client
        }
      })
    }

    function od(BB, TB, dB) {
      return fT({
        kind: "recovered",
        code: "CORE-replayFault",
        site: BB,
        fatal: !1,
        message: `the replay's ${BB} failed`,
        details: {
          wasmBuild: dB.wasm,
          clientVersion: dB.client
        },
        error: TB
      })
    }
    const kd = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function Ld(BB, TB, dB) {
      const VB = "lost" === TB && void 0 !== dB ? ` (${dB})` : "";
      return `the ${BB} ${kd[TB]}${VB}`
    }
    const Od = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };

    function Dd(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now();
      const yB = null === dB.boundAtMs ? "unbound" : `up${(0,NB.d)(VB-dB.boundAtMs)}`,
        pB = null === dB.adapter ? "no adapter" : (0, NB.g)(dB.adapter),
        lB = `${(0,MB.h)()?"hidden":"visible"} ${yB} ${pB}${!0===dB.indirectHangs?" ih":""}`;
      if ("pipeline_failed" === BB) return `${BB} ${lB}`;
      const JB = null === TB || void 0 === TB ? void 0 : TB.message;
      return `${TB instanceof MB.d?"timeout":(0,NB.i)("frames_refused"===BB,"string"===typeof JB?JB:"")} ${lB}`
    }

    function ud(BB, TB, VB) {
      var yB, pB, lB, JB;
      let {
        cause: YB = "lost",
        error: gB,
        context: oB = Od
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const kB = Dd(YB, gB, oB),
        LB = {
          losses: String(TB),
          cause: YB,
          detail: kB,
          vendor: null !== (yB = null === (pB = oB.adapter) || void 0 === pB ? void 0 : pB.vendor) && void 0 !== yB ? yB : "",
          architecture: null !== (lB = null === (JB = oB.adapter) || void 0 === JB ? void 0 : JB.architecture) && void 0 !== lB ? lB : "",
          indirectHangs: String(oB.indirectHangs),
          wasmBuild: VB.wasm,
          clientVersion: VB.client
        },
        OB = Ld(BB, YB),
        DB = fT({
          kind: "recovered",
          code: "CORE-renderLost",
          site: AB,
          fatal: !1,
          message: OB,
          details: LB,
          error: gB
        });
      return MT("ga", (async () => {
        const {
          logError: TB
        } = await Promise.resolve().then((() => dB(2465))), VB = `${NB.c["webgpu"===BB?"WebGPU":"WebGL2"]}\n Error: ${kB}`;
        TB("warning", VB), TB("error", VB)
      })), DB
    }

    function Hd(BB, TB) {
      var dB, VB;
      const yB = null === BB.name ? "TEXTURE-sources" : null === BB.url ? "TEXTURE-nourl" : BB.error instanceof SB.c ? `TEXTURE-${BB.error.status}` : "TEXTURE-network",
        pB = null === BB.name ? "terrain textures could not load" : `terrain texture ${BB.name} could not load`,
        lB = {
          texture: null !== (dB = BB.name) && void 0 !== dB ? dB : "",
          url: null !== (VB = BB.url) && void 0 !== VB ? VB : "",
          wasmBuild: TB.wasm,
          clientVersion: TB.client
        };
      return fT({
        kind: "terrainTexture",
        code: yB,
        site: zB.C,
        fatal: !1,
        message: pB,
        details: lB,
        error: BB.error
      })
    }
    const Ed = {
      previewAnimations: {
        site: bB,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: eB,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function vd(BB, TB, dB, VB) {
      const {
        site: yB,
        prefix: pB,
        name: lB
      } = Ed[BB], {
        stage: JB,
        error: YB
      } = dB;
      return fT({
        kind: BB,
        code: "decode" === JB ? null === YB ? `${pB}-decode` : `${pB}-trap` : YB instanceof IB.h ? `${pB}-${YB.status}` : `${pB}-network`,
        site: yB,
        fatal: !1,
        message: "decode" === JB ? `${lB} did not decode` : `${lB} could not load`,
        details: {
          url: TB,
          wasmBuild: VB.wasm,
          clientVersion: VB.client
        },
        error: YB
      })
    }
    const md = "staleBuild";

    function Nd(BB, TB, dB) {
      const VB = {
          failedSite: BB.site,
          url: BB.url,
          from: BB.from,
          sameBuild: String(BB.from === TB),
          reloadMs: String(Math.max(0, Date.now() - BB.at)),
          wasmBuild: dB.wasm,
          clientVersion: dB.client
        },
        yB = `reloaded into a newer build after ${BB.site} failed to load: ${BB.error}`;
      return fT({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: md,
        fatal: !1,
        message: yB,
        details: VB
      })
    }
  },
  4177: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => lB,
      h: () => pB,
      k: () => yB
    });
    var VB = dB(4186);

    function yB(BB) {
      return "none" !== BB
    }

    function pB(BB, TB) {
      if (!BB) return "none";
      switch (TB) {
        case VB.P.Drawn:
          return "drawn";
        case VB.P.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function lB(BB) {
      return "drawn" === BB
    }
  },
  39322: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB,
      f: () => EB,
      i: () => uB,
      k: () => HB,
      m: () => LB,
      q: () => OB,
      t: () => oB,
      w: () => kB,
      y: () => DB
    });
    class VB extends Error {
      constructor(BB) {
        super(`the join's code did not load: ${BB instanceof Error?BB.message:String(BB)}`, {
          cause: BB
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === BB || void 0 === BB ? void 0 : BB.request
      }
    }
    let yB = null,
      pB = null,
      lB = null;
    const JB = [];
    let YB = null;

    function gB(BB, TB) {
      try {
        BB(TB)
      } catch (dB) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", dB)
      }
    }

    function oB() {
      return YB
    }

    function kB(BB) {
      JB.push(BB), null !== YB && gB(BB, YB)
    }

    function LB(BB) {
      return yB ??= Promise.all([dB.e(64), dB.e(88), dB.e(199), dB.e(126), dB.e(222), dB.e(200), dB.e(201), dB.e(86), dB.e(228), dB.e(251), dB.e(177), dB.e(186), dB.e(129), dB.e(79), dB.e(107), dB.e(226), dB.e(49)]).then((() => dB(41265))).then((TB => {
        TB.loadAudio(BB), YB = TB;
        for (const BB of JB) gB(BB, TB);
        return TB
      })).catch((BB => {
        throw yB = null, BB
      })), yB
    }
    async function OB(BB, TB) {
      try {
        const dB = await LB(BB);
        await dB.loadClientGame(TB)
      } catch (dB) {
        throw new VB(dB)
      }
    }

    function DB(BB, TB) {
      pB = {
        running: BB,
        shell: TB
      }
    }

    function uB() {
      return lB
    }
    async function HB(BB) {
      const TB = pB;
      if ((null === TB || void 0 === TB ? void 0 : TB.running) !== BB) throw new Error("the core's session has ended");
      const dB = await LB(TB.shell.audio).catch((BB => {
        throw new VB(BB)
      }));
      if (null !== lB) return lB;
      if (pB !== TB || BB.isStopped) throw new Error("the core stopped while the game code loaded");
      if (lB = dB.startGameHost(BB, TB.shell), null === lB) throw new Error("the core's shared tables didn't read, so the game can't start");
      return lB
    }

    function EB() {
      null !== lB && (null !== YB ? YB.endGameHost(lB) : lB.closeGame()), lB = null, pB = null
    }
  },
  39576: (BB, TB, dB) => {
    dB.d(TB, {
      A: () => kB,
      C: () => JB,
      d: () => gB,
      f: () => pB,
      j: () => lB,
      m: () => yB,
      p: () => OB,
      s: () => oB,
      w: () => YB,
      z: () => LB
    });
    var VB = dB(38190);
    const yB = new Uint8Array([12]),
      pB = 2e3,
      lB = 257;

    function JB(BB) {
      const TB = new Uint8Array(4);
      return new DataView(TB.buffer).setUint32(0, BB, !0), TB
    }
    class YB extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class gB extends Error {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(BB), this.stage = TB, this.code = dB, this.serverText = VB, this.name = "JoinError"
      }
    }
    class oB extends Error {
      constructor(BB) {
        super(BB), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class kB extends Error {
      constructor() {
        super(VB.c), this.name = "TrafficCheckError"
      }
    }
    class LB extends Error {
      constructor(BB, TB, dB) {
        super(BB, {
          cause: dB
        }), this.networkLost = TB, this.name = "SeatRequestError"
      }
    }
    class OB extends Error {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(BB), this.code = TB, this.serverText = dB, this.name = "MatchmakeError"
      }
    }
  },
  39585: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => LB,
      h: () => kB
    });
    var VB = dB(2237),
      yB = dB(2956),
      pB = dB(38015),
      lB = dB(39567),
      JB = dB(39576),
      YB = dB(39590);
    const gB = "seat reservation expired.",
      oB = "early_leave";

    function kB(BB) {
      if (BB instanceof pB.i) return "expected";
      if (BB instanceof JB.z) return BB.networkLost ? "expected" : "unrecognised";
      if (BB instanceof JB.d) {
        if ("closed" === BB.stage && (0 === BB.code || (0, yB.e)(BB.code))) return "expected";
        if ("roomError" === BB.stage && (BB.serverText === gB || BB.serverText === oB)) return "expected"
      }
      return BB instanceof JB.d || BB instanceof JB.p ? null === (0, lB.j)(BB.code).name ? "unrecognised" : "known" : (0, VB.f)(BB) ? "expected" : BB instanceof JB.A || BB instanceof YB.d ? "known" : "unrecognised"
    }

    function LB(BB) {
      return BB instanceof pB.i ? "timedOut" : "expected" !== kB(BB) || (0, VB.f)(BB) || BB instanceof JB.d && 1001 === BB.code ? void 0 : "failed"
    }
  },
  39689: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => MB,
      g: () => kB,
      i: () => NB,
      m: () => EB,
      o: () => fB
    });
    var VB = dB(39619),
      yB = dB(39617);
    const pB = 64 * VB.b,
      lB = 40 * VB.c,
      JB = 36 * VB.c,
      YB = 20 * VB.c,
      gB = 2 * VB.c,
      oB = 5 * VB.c;

    function kB(BB) {
      return "footprint" !== BB
    }
    const LB = 2 * VB.c,
      OB = 4 * VB.c,
      DB = 35 * VB.c + LB + OB,
      uB = 6.5 * VB.c,
      HB = 132.5 * VB.b;

    function EB(BB) {
      const TB = uB + (0, yB.i)(BB) + BB * HB;
      return Math.ceil((2 * DB + TB) / pB) * pB
    }
    const vB = EB(yB.e),
      mB = (VB.c, VB.c, VB.c, {
        targetBytes: lB,
        leastBytes: YB
      }),
      iB = {
        targetBytes: JB,
        leastBytes: YB
      };

    function NB(BB) {
      return BB >= yB.e ? mB : iB
    }
    const tB = 2 * pB;

    function fB(BB, TB, dB) {
      return BB + TB + tB > (null !== dB && void 0 !== dB ? dB : vB)
    }
    const sB = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? BB => {
        requestIdleCallback(BB)
      } : null
    };
    class MB {
      constructor(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : sB;
        this.memory = BB, this.readPeakStoredChunks = TB, this.onError = dB, this.clock = VB, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(BB, TB, dB) {
        this.shedding = {
          shed: BB,
          yD: TB,
          readDistanceInUse: dB
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(BB) {
        this.footprint = BB
      }
      setCeiling(BB) {
        this.ceilingBytes = BB, this.call((() => {
          this.memory.setCeiling(BB)
        }), void 0)
      }
      ceilingMayRefuse(BB) {
        return fB(this.memory.memoryBytes(), BB, this.ceilingBytes)
      }
      reserveAtJoin(BB) {
        let {
          targetBytes: TB,
          leastBytes: dB
        } = BB;
        const VB = this.memory.memoryBytes(),
          yB = VB + dB,
          pB = Math.max(TB + (this.ballastOn() ? oB : 0), yB),
          lB = this.call((() => this.memory.reserveUpFront(pB) ? "target" : pB > yB && this.memory.reserveUpFront(yB) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== lB) {
          const BB = "least" === lB ? `took ${yB} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${pB} bytes was refused at ${VB} bytes; ${BB}`)
        }
        return this.joinReserveTaken = lB, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== lB && this.shedFor("joinReserve"), "none" !== lB
      }
      afterFrame() {
        if (this.stopped) return;
        const BB = this.clock.now(),
          TB = null !== this.stepsHeldUntil && BB >= this.stepsHeldUntil;
        if (TB && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && BB >= this.ballastCheckAt && (this.takeBallast(BB), this.stopped)) return;
        const dB = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          VB = TB && "now" === dB ? "none" : dB,
          {
            requestIdle: yB
          } = this.clock;
        "now" === VB || null !== this.pendingSince && BB - this.pendingSince >= 500 ? this.step() : "idle" === VB && null === this.pendingSince && (null === yB ? this.step() : (this.pendingSince = BB, yB((() => {
          null !== this.pendingSince && this.step()
        })))), BB - this.statsAt >= 1e3 && (this.statsAt = BB, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var BB, TB;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (TB = this.shedding.readDistanceInUse()) && void 0 !== TB ? TB : this.distanceInUse);
          null === (BB = this.footprint) || void 0 === BB || BB.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(BB, TB) {
        this.noteWorker(`Mesh${BB}`, TB)
      }
      meshWorkerGone(BB) {
        this.workerGone(`Mesh${BB}`)
      }
      noteWorldgen(BB) {
        this.noteWorker("Worldgen", BB)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(BB, TB) {
        const dB = this.workers.get(BB);
        null !== dB && void 0 !== dB && dB.gone && (this.replacedRefusals.reserves += dB.stats.reservesRefused, this.replacedRefusals.allocations += dB.stats.allocationsRefused), this.workers.set(BB, {
          stats: TB,
          gone: !1
        })
      }
      workerGone(BB) {
        const TB = this.workers.get(BB);
        TB && (TB.gone = !0)
      }
      details() {
        var BB, TB;
        const dB = {
          wasmMemoryNow: `${(0,VB.d)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (dB.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (dB.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const yB = this.main;
        if (yB) {
          dB.wasmMemoryMain = zB(yB);
          const BB = Math.max(0, yB.peakLiveBytes - this.ballastPeakBytes),
            TB = 0 === this.peakStoredChunks ? "-" : (BB / this.peakStoredChunks / VB.b).toFixed(1);
          dB.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${TB} KiB`
        }
        for (const [VB, {
            stats: lB,
            gone: JB
          }] of this.workers) dB[`wasmMemory${VB}`] = zB(lB) + (JB ? " (gone)" : "");
        const pB = null !== (BB = null === (TB = this.footprint) || void 0 === TB ? void 0 : TB.describe()) && void 0 !== BB ? BB : null;
        return null !== pB && (dB.wasmMemoryFootprint = pB), dB
      }
      pageKillSnapshot() {
        var BB, TB, dB, yB, pB;
        let lB = (null !== (BB = null === (TB = this.main) || void 0 === TB ? void 0 : TB.reservesRefused) && void 0 !== BB ? BB : 0) + this.replacedRefusals.reserves,
          JB = (null !== (dB = null === (yB = this.main) || void 0 === yB ? void 0 : yB.allocationsRefused) && void 0 !== dB ? dB : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: VB
          }
          of this.workers.values()) lB += VB.reservesRefused, JB += VB.allocationsRefused;
        return {
          wasmMainMiB: Number((0, VB.d)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, VB.d)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: lB,
          refusedAllocations: JB,
          sheds: this.sheds,
          ...null === (pB = this.footprint) || void 0 === pB ? void 0 : pB.snapshot()
        }
      }
      workersMemoryBytes() {
        let BB = 0;
        for (const {
            stats: TB,
            gone: dB
          }
          of this.workers.values()) BB += dB ? 0 : TB.memoryBytes;
        return BB
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(gB)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(BB) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = BB + 1e3;
        const TB = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, TB)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(BB) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${BB}: frames grow on demand from here`)
      }
      shedFor(BB) {
        const {
          shedding: TB
        } = this;
        if (null === TB) return;
        this.pendingSince = null;
        const dB = this.call((() => TB.shed(BB)), null);
        this.stopped || (null !== dB ? (this.sheds++, this.shedCap = dB, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), TB.yD(BB, this.sheds, this.details())) : kB(BB) && this.stopSteps("nothing is left to shed"))
      }
      call(BB, TB) {
        if (this.stopped) return TB;
        try {
          return BB()
        } catch (dB) {
          return this.stop(), this.onError(dB), TB
        }
      }
    }

    function zB(BB) {
      const TB = (BB, TB) => `${BB}/${(0,VB.d)(TB)}`;
      return `memory ${(0,VB.d)(BB.memoryBytes)} live ${(0,VB.d)(BB.liveBytes)} peak ${(0,VB.d)(BB.peakLiveBytes)} unused ${(0,VB.d)(BB.unusedBytes)} ceiling ${(0,VB.d)(BB.ceilingBytes)} MiB; grows upFront ${TB(BB.grows.upFront,BB.grownBytes.upFront)} ahead ${TB(BB.grows.ahead,BB.grownBytes.ahead)} inFrame ${TB(BB.grows.onDemandInFrame,BB.grownBytes.onDemandInFrame)} other ${TB(BB.grows.onDemand,BB.grownBytes.onDemand)}; refused reserves ${BB.reservesRefused} allocations ${BB.allocationsRefused}`
    }
  },
  39695: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => lB,
      f: () => JB,
      g: () => kB,
      k: () => gB
    });
    var VB = dB(4186),
      yB = dB(39703),
      pB = dB(39707);
    const lB = 395,
      JB = 2147483648,
      YB = new Uint8Array(0);
    class gB extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class oB extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class kB {
      constructor(BB, TB, dB) {
        var VB, pB, lB, JB;
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = BB, this.build = TB, this.onFailure = dB, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.RO = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (VB = YB.fetchFile) && void 0 !== VB ? VB : BB => (0, yB.k)(BB), this.onWritten = null !== (pB = YB.onWritten) && void 0 !== pB ? pB : null, this.onTaken = null !== (lB = YB.onTaken) && void 0 !== lB ? lB : null, this.onPackFileFailed = null !== (JB = YB.onPackFileFailed) && void 0 !== JB ? JB : null, this.startupLeft = new Set(BB.startup);
        for (const yB of BB.startup) this.request(yB)
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
      drawnUrl(BB) {
        return this.drawn.get(BB)
      }
      request(BB) {
        const TB = this.pending.get(BB);
        if (!0 === (null === TB || void 0 === TB ? void 0 : TB.ask)) return;
        const dB = this.tO(BB, !0);
        dB.recheck = void 0 !== TB;
        const VB = this.drawn.get(BB);
        if (void 0 !== VB) return dB.Dg = !0, dB.recheck = !0, void this.fetch(BB, dB, VB);
        this.fetchWanted(BB, dB)
      }
      async refresh() {
        const BB = ++this.refreshes,
          TB = new Set;
        for (const lB of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const BB of lB) 0 === (BB & yB.g) && TB.add(BB);
        const dB = [...TB];
        let VB;
        try {
          VB = await Promise.all(dB.map((BB => this.wanted(BB))))
        } catch {
          return null
        }
        if (BB !== this.refreshes) return null;
        const pB = {
          resent: 0,
          refetched: 0,
          delivered: dB.filter((BB => this.drawn.has(BB))).length
        };
        return dB.forEach(((BB, TB) => {
          const {
            url: dB,
            inPlaceOf: yB
          } = VB[TB], lB = this.pending.get(BB);
          if (void 0 !== lB) {
            if (lB.Dg || void 0 === lB.url) return void(lB.recheck = !0);
            if (lB.url === dB) return;
            pB.refetched++;
            const TB = this.tO(BB, lB.ask);
            return TB.recheck = lB.recheck, void this.fetch(BB, TB, dB, yB)
          }
          const JB = this.written.get(BB);
          void 0 === JB ? this.drawn.get(BB) !== (null !== dB && void 0 !== dB ? dB : void 0) && (pB.resent++, this.fetch(BB, this.tO(BB, !1), dB, yB)) : JB.url !== (null !== dB && void 0 !== dB ? dB : "") && (JB.attempt.recheck = !0)
        })), pB
      }
      taken(BB, TB) {
        const dB = new Set,
          VB = new Set;
        for (const yB of Array.from(TB)) 0 === (yB & JB) ? dB.add(yB) : VB.add((yB & ~JB) >>> 0);
        for (const [yB, pB] of this.written) pB.seq > BB || (this.written.delete(yB), dB.has(pB.seq) ? this.refusedFile(yB, pB) : this.takenFile(yB, pB, !pB.empty && !VB.has(pB.seq)))
      }
      takenFile(BB, TB, dB) {
        const {
          attempt: VB
        } = TB;
        if (dB) {
          var yB;
          this.drawn.set(BB, TB.url), this.undrawn.delete(BB), void 0 !== VB.inPlaceOf ? this.refusedPack.set(BB, VB.inPlaceOf) : VB.Dg || this.refusedPack.delete(BB), null === (yB = this.onTaken) || void 0 === yB || yB.call(this, BB, !0);
          const dB = this.pending.get(BB);
          if (!0 === (null === dB || void 0 === dB ? void 0 : dB.Dg) && dB.url !== TB.url) {
            const dB = this.tO(BB, !0);
            dB.Dg = !0, dB.recheck = !0, this.fetch(BB, dB, TB.url)
          }
        } else {
          var pB;
          this.drawn.has(BB) || this.undrawn.add(BB), null === (pB = this.onTaken) || void 0 === pB || pB.call(this, BB, !1)
        }
        VB.recheck && this.resendIfChanged(BB)
      }
      refusedFile(BB, TB) {
        var dB, VB;
        if (null === (dB = this.onTaken) || void 0 === dB || dB.call(this, BB, !1), this.refusedPack.set(BB, TB.url), this.pending.has(BB)) return void(null === (VB = this.onPackFileFailed) || void 0 === VB || VB.call(this, BB, LB(TB.url)));
        const yB = this.tO(BB, TB.attempt.ask);
        yB.recheck = TB.attempt.recheck, this.afterRefusal(BB, yB, TB.url)
      }
      async afterRefusal(BB, TB, dB) {
        var VB;
        let yB;
        try {
          yB = await this.wanted(BB)
        } catch (pB) {
          return void(this.pending.get(BB) === TB && this.giveUp(BB, TB, dB, pB))
        }
        this.pending.get(BB) === TB && (yB.inPlaceOf !== dB ? TB.ask || (null !== (VB = yB.url) && void 0 !== VB ? VB : void 0) !== this.drawn.get(BB) ? this.fetch(BB, TB, yB.url, yB.inPlaceOf) : this.pending.delete(BB) : this.fallBack(BB, TB, dB, LB(dB)))
      }
      tO(BB, TB) {
        const dB = {
          url: void 0,
          ask: TB,
          Dg: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(BB, dB);
        for (let VB = this.ready.length - 1; VB >= 0; VB--) this.ready[VB].file === BB && this.ready.splice(VB, 1);
        return dB
      }
      async wanted(BB) {
        const TB = await this.files.url(BB);
        return null !== TB && this.refusedPack.get(BB) === TB ? {
          url: await this.files.shippedUrl(BB),
          inPlaceOf: TB
        } : {
          url: TB,
          inPlaceOf: void 0
        }
      }
      fetchWanted(BB, TB) {
        const dB = this.files.url(BB);
        dB instanceof Promise ? dB.then((dB => {
          this.fetchFound(BB, TB, dB)
        }), (dB => {
          this.pending.get(BB) === TB && this.giveUp(BB, TB, "", dB)
        })) : this.fetchFound(BB, TB, dB)
      }
      fetchFound(BB, TB, dB) {
        null !== dB && this.refusedPack.get(BB) === dB ? Promise.resolve(this.files.shippedUrl(BB)).then((VB => {
          this.fetch(BB, TB, VB, dB)
        }), (VB => {
          this.pending.get(BB) === TB && this.giveUp(BB, TB, dB, VB)
        })) : this.fetch(BB, TB, dB)
      }
      fetch(BB, TB, dB, VB) {
        this.pending.get(BB) === TB && (TB.url = dB, TB.inPlaceOf = VB, null !== dB ? this.load(BB, TB, dB) : this.buildFile(BB, TB, "", YB))
      }
      load(BB, TB, dB) {
        const VB = this.RO.get(BB);
        (null === VB || void 0 === VB ? void 0 : VB.url) !== dB ? this.fetchFile(dB).then((VB => {
          var yB, pB;
          this.pending.get(BB) === TB && (this.keptTotal += VB.byteLength - (null !== (yB = null === (pB = this.RO.get(BB)) || void 0 === pB ? void 0 : pB.glb.byteLength) && void 0 !== yB ? yB : 0), this.RO.set(BB, {
            url: dB,
            glb: VB
          }), this.buildFile(BB, TB, dB, VB))
        }), (VB => {
          this.pending.get(BB) === TB && this.fallBack(BB, TB, dB, VB)
        })) : this.buildFile(BB, TB, dB, VB.glb)
      }
      buildFile(BB, TB, dB, lB) {
        let JB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const YB = lB.byteLength > 0 && (0, yB.m)(dB) ? (BB | yB.c) >>> 0 : BB;
        this.build(YB, lB).then((yB => {
          if (this.pending.get(BB) !== TB) return;
          if (VB.n + (0, VB.je)(yB.byteLength) > VB.Bc) return void this.ringRefused(BB, TB, dB, new gB(`${OB(dB)}'s record is ${yB.byteLength-pB.b} bytes, past the cmd ring's ${VB.Bc}`), JB);
          const YB = {
            file: BB,
            url: dB,
            payload: yB,
            glb: lB,
            attempt: TB
          };
          JB ? this.ready.unshift(YB) : this.ready.push(YB)
        }))
      }
      async fallBack(BB, TB, dB, VB) {
        var yB;
        let pB = null,
          lB = VB;
        try {
          pB = await this.files.shippedUrl(BB)
        } catch (JB) {
          lB = JB
        }
        this.pending.get(BB) === TB && (null !== pB && pB !== dB ? (null === (yB = this.onPackFileFailed) || void 0 === yB || yB.call(this, BB, VB), TB.ask || this.drawn.get(BB) !== pB ? (TB.url = pB, TB.inPlaceOf = dB, this.load(BB, TB, pB)) : this.pending.delete(BB)) : this.giveUp(BB, TB, dB, lB))
      }
      ringRefused(BB, TB, dB, VB) {
        let pB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, yB.m)(dB) ? this.fallBack(BB, TB, dB, VB): this.giveUp(BB, TB, dB, VB, pB)
      }
      giveUp(BB, TB, dB, VB) {
        let yB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: BB,
          url: OB(dB),
          error: VB,
          startup: this.startupLeft.has(BB)
        }), TB.ask || !this.drawn.has(BB) ? this.buildFile(BB, TB, dB, YB, yB) : this.pending.delete(BB)
      }
      async resendIfChanged(BB) {
        var TB;
        if (0 !== (BB & yB.g)) return;
        let dB;
        try {
          dB = await this.wanted(BB)
        } catch {
          return
        }(null !== (TB = dB.url) && void 0 !== TB ? TB : void 0) === this.drawn.get(BB) || this.pending.has(BB) || this.written.has(BB) || this.fetch(BB, this.tO(BB, !1), dB.url, dB.inPlaceOf)
      }
      drain(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === BB) return;
        let dB = 0,
          VB = 0;
        for (; VB < this.ready.length && dB < 262144;) {
          const oB = this.ready[VB];
          if (this.written.has(oB.file)) {
            VB++;
            continue
          }
          const kB = this.nextSeq;
          new DataView(oB.payload.buffer, oB.payload.byteOffset, oB.payload.byteLength).setUint32(pB.c, kB, !0);
          const LB = oB.attempt.Dg && oB.glb.byteLength > 0 && this.drawn.get(oB.file) === oB.url;
          if (BB(lB, LB ? 1 : 0, oB.payload)) {
            if (this.nextSeq = kB >= JB - 1 ? 1 : kB + 1, this.ready.splice(VB, 1), dB += oB.payload.byteLength, this.pending.delete(oB.file), this.startupLeft.delete(oB.file), this.written.set(oB.file, {
                seq: kB,
                url: oB.url,
                empty: 0 === oB.glb.byteLength,
                attempt: oB.attempt
              }), oB.glb.byteLength > 0) try {
              var yB;
              null === (yB = this.onWritten) || void 0 === yB || yB.call(this, oB.file, oB.glb)
            } catch (YB) {
              console.warn("ModelFeed: reading the file's images failed", YB)
            }
          } else {
            if (null === TB || 0 === oB.glb.byteLength || TB(oB.payload.byteLength)) return;
            this.ready.splice(VB, 1);
            const BB = new gB(`${OB(oB.url)}'s record is ${oB.payload.byteLength-pB.b} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(oB.file, oB.attempt, oB.url, BB, !0)
          }
        }
      }
    }

    function LB(BB) {
      return new oB(`presentation refused ${OB(BB)}`)
    }

    function OB(BB) {
      return BB.startsWith("data:") ? `${BB.slice(0,Math.min(Math.max(BB.indexOf(","),5),64))},...` : BB
    }
  },
  39703: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB,
      g: () => pB,
      k: () => oB,
      m: () => JB,
      n: () => gB,
      r: () => YB
    });
    var VB = dB(3216),
      yB = dB(2675);
    const pB = 2147483648,
      lB = 1073741824;

    function JB(BB) {
      return BB.startsWith("data:")
    }

    function YB(BB) {
      let {
        onTableFailed: TB,
        packUrl: dB
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const VB = gB();
      VB.catch((BB => {
        null === TB || void 0 === TB || TB(BB)
      }));
      const yB = async TB => (await VB).fileUrl((TB & ~pB) >>> 0, BB);
      return {
        startup: [],
        url: async BB => {
          if (dB && 0 === (BB & pB)) {
            const TB = await VB,
              yB = TB.filePackName(BB),
              pB = null === yB || "lifeform" === TB.fileSource(BB) ? null : dB(yB);
            if (null !== pB) return pB
          }
          return yB(BB)
        },
        shippedUrl: yB
      }
    }

    function gB() {
      return dB.e(38).then((() => dB(42085)))
    }
    async function oB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return BB.startsWith("data:") ? (0, yB.e)(BB.slice(BB.indexOf(",") + 1), TB) : (0, VB.K)(BB, {
        spare: TB
      })
    }
  },
  39707: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => YB,
      c: () => gB,
      d: () => LB,
      g: () => DB,
      h: () => kB,
      l: () => OB
    });
    const VB = 826427981,
      yB = 1,
      pB = 2,
      lB = 44,
      JB = 46,
      YB = 8,
      gB = 4;

    function oB(BB, TB, dB) {
      const yB = (new TextEncoder).encode(dB),
        pB = YB + 4 * (TB.length + 2),
        lB = new Uint8Array(pB + (yB.byteLength + 3 & -4)),
        JB = new DataView(lB.buffer);
      return JB.setUint32(0, BB, !0), JB.setUint32(YB, VB, !0), TB.forEach(((BB, TB) => {
        JB.setUint32(YB + 4 * (TB + 1), BB, !0)
      })), JB.setUint32(pB - 4, yB.byteLength, !0), lB.set(yB, pB), lB
    }

    function kB(BB, TB) {
      return oB(BB, [pB], TB)
    }

    function LB(BB, TB) {
      return oB(BB, [yB, JB], TB)
    }

    function OB(BB, TB) {
      return oB(BB, [yB, lB], TB)
    }

    function DB(BB) {
      const TB = YB;
      if (BB.byteLength < TB + 12) return !1;
      const dB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
      return dB.getUint32(TB, !0) === VB && dB.getUint32(TB + 4, !0) === yB && dB.getUint32(TB + 8, !0) === lB
    }
  },
  39590: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => EB,
      d: () => vB,
      f: () => HB,
      h: () => tB
    });
    var VB = dB(5981),
      yB = dB(24),
      pB = dB(3778),
      lB = dB(4192),
      JB = dB(5975),
      YB = dB(39598);

    function gB(BB, TB) {
      const dB = (0, JB.c)(TB.variants);
      return BB.setShaderPack(dB.variantFlags, dB.hooks, dB.moduleCodes, (0, YB.v)(TB.layers), YB.i[TB.yl], TB.keepCircleShadows)
    }
    const oB = 0,
      kB = 1,
      LB = 2,
      OB = "shaderPack:failedToCompile",
      DB = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      uB = new Set(["not_requested", "off_after_loss", "gpu_class_webgl"]);

    function HB(BB, TB) {
      var dB;
      const VB = null !== (dB = null === BB || void 0 === BB ? void 0 : BB.reason) && void 0 !== dB ? dB : "none";
      return DB.has(VB) ? {
        messageKey: TB ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === VB && "override" === (null === BB || void 0 === BB ? void 0 : BB.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: uB.has(VB) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    const EB = {
      messageKey: "shaderPack:failedDeviceGraphics",
      noAdapter: !1
    };
    class vB extends Error {
      constructor(BB) {
        super(`the shader pack can't run in this game: ${BB}`), this.messageKey = BB, this.name = "ShaderPackJoinError"
      }
    }
    const mB = "strict";
    class iB {
      constructor(BB) {
        this.deps = BB, this.pagePack = void 0, this.loaded = null, this.yl = mB, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = BB.load().catch((TB => (BB.warn("the shader pack could not load: the game draws without it", TB), {
          status: "none"
        }))).then((BB => (this.loaded = BB, "active" === BB.status && (this.handOverToPreviews(BB), null !== BB.harnessPolicy && (this.yl = BB.harnessPolicy, this.handOver())), BB)))
      }
      async join(BB) {
        this.lD();
        const TB = this.game,
          [dB, yB] = await Promise.all([this.pagePack, this.policyOf(BB)]);
        if (TB !== this.game || "none" === dB.status) return null;
        const pB = "active" === dB.status ? dB.pack.variants : dB.variants,
          lB = (0, VB.f)(pB, yB);
        if (lB && "active" === dB.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (lB) {
          const BB = this.cantRun(dB, yB);
          if (null !== BB) return BB
        } else if ("blocked" === dB.status || null === this.deps.core) return null;
        return this.yl = yB, this.handOver(), lB && this.refused ? OB : (this.joined = !0, this.offInThisGame = !lB, null)
      }
      async replay(BB) {
        const TB = await this.join(BB);
        null === TB ? this.playable() : this.deps.failInGame(TB)
      }
      cantRun(BB, TB) {
        const {
          core: dB,
          noWebGpu: VB
        } = this.deps;
        if ("blocked" === BB.status) {
          return "shaderPack:failedUnchecked" === BB.messageKey && null === dB && VB.noAdapter ? VB.messageKey : BB.messageKey
        }
        return this.refused || this.failedPolicies.has(TB) ? OB : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(OB) : (null !== this.couldntRun ? this.notify(pB.b, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.yl) && this.notifyModelFallback()))
      }
      lD() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(BB) {
        for (const {
            code: TB,
            detail: dB
          }
          of BB)
          if (TB === lB.f.RenderShaderPackNotRun) switch (255 & dB) {
            case oB:
              this.refused = !0, this.failed();
              break;
            case kB:
              this.failedPolicies.add(this.yl), this.failed();
              break;
            case LB:
              this.failedModelPolicies.add(this.yl), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(OB) : this.failedWhileJoining = !0)
      }
      fail(BB) {
        this.lD(), this.deps.failInGame(BB)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(BB, TB) {
        const dB = this.game;
        this.deps.notify(BB, (() => dB === this.game && this.joined), TB)
      }
      handOver() {
        var BB;
        const {
          core: TB
        } = this.deps;
        null !== TB && "active" === (null === (BB = this.loaded) || void 0 === BB ? void 0 : BB.status) && (gB(TB, {
          ...this.loaded.pack,
          yl: this.yl
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(BB) {
        let {
          pack: TB,
          harnessPolicy: dB
        } = BB;
        const {
          previews: VB
        } = this.deps;
        null !== VB && gB(VB, {
          ...TB,
          yl: null !== dB && void 0 !== dB ? dB : mB
        })
      }
      policyOf(BB) {
        return this.deps.policyOf(BB).catch((BB => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", BB), mB)))
      }
    }
    const NB = "wasmShaderPackNotice";

    function tB(BB, TB, dB, VB) {
      return yB.h.subscribe(NB, (BB => {
        let {
          translationKey: TB,
          stillCurrent: dB,
          reasonKey: VB
        } = BB;
        dB() && yB.h.yH("chat", (0, pB.d)(TB, VB))
      })), new iB({
        load: fB,
        policyOf: sB,
        core: BB,
        previews: TB,
        noWebGpu: dB,
        notify: (BB, TB, dB) => {
          const VB = {
            translationKey: BB,
            stillCurrent: TB,
            reasonKey: dB
          };
          yB.h.yH(NB, VB, !0)
        },
        failInGame: BB => {
          yB.h.yH(pB.c, BB)
        },
        warn: VB
      })
    }
    async function fB() {
      const [{
        shaderPackPage: BB,
        harnessShaderPackMode: TB
      }, {
        shaderPackTextures: VB
      }] = await Promise.all([dB.e(122).then((() => dB(38153))), dB.e(123).then((() => dB(5973)))]), yB = await BB.load();
      return "active" !== yB.status ? yB : {
        status: "active",
        pack: {
          variants: yB.pack.variants,
          layers: VB().layers,
          keepCircleShadows: yB.pack.keepCircleShadows
        },
        harnessPolicy: TB()
      }
    }
    async function sB(BB) {
      var TB;
      const [{
        harnessShaderPackMode: VB
      }, {
        getShaderPackPolicy: yB
      }] = await Promise.all([dB.e(122).then((() => dB(38153))), dB.e(83).then((() => dB(41997)))]);
      return null !== (TB = VB()) && void 0 !== TB ? TB : yB(BB)
    }
  },
  39716: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => JB,
      f: () => HB,
      h: () => YB,
      i: () => gB,
      m: () => oB,
      q: () => LB
    });
    var VB = dB(39722),
      yB = dB(39727);
    const pB = "atlas:",
      lB = 3e4;
    class JB extends Error {
      constructor(BB, TB) {
        super(`fetching ${BB} answered HTTP ${TB}`), this.url = BB, this.status = TB, this.name = "TerrainTextureFetchError"
      }
    }

    function YB(BB) {
      if (!BB.startsWith(pB)) return null;
      const TB = Number(BB.slice(pB.length));
      return Number.isInteger(TB) && TB >= 0 ? TB : null
    }
    async function gB() {
      const BB = await dB.e(187).then((() => dB(33444)));
      return {
        atlasSheets: BB.blockAtlasUrls,
        texture: TB => {
          var dB, VB, pB;
          return null !== (dB = null !== (VB = null !== (pB = BB.animatedBlockTextures[TB]) && void 0 !== pB ? pB : BB.rotatedBlockTextures[TB]) && void 0 !== VB ? VB : yB.d[TB]) && void 0 !== dB ? dB : null
        }
      }
    }
    async function oB(BB) {
      const TB = new AbortController,
        dB = setTimeout((() => {
          TB.abort(new DOMException(`${BB} took over ${lB} ms`, "TimeoutError"))
        }), lB);
      let VB;
      try {
        const dB = await fetch(BB, {
          signal: TB.signal
        });
        if (!dB.ok) throw new JB(BB, dB.status);
        VB = await dB.blob()
      } finally {
        clearTimeout(dB)
      }
      const yB = await createImageBitmap(VB, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return LB(yB)
      } finally {
        yB.close()
      }
    }
    const kB = 8192;

    function LB(BB) {
      const {
        width: TB,
        height: dB
      } = BB, yB = Math.max(1, Math.min(dB, kB)), pB = (0, VB.f)(TB, yB, {
        willReadFrequently: !0
      });
      if (!pB) throw new Error("no 2D context to read the texture back");
      pB.globalCompositeOperation = "copy";
      const lB = new Uint8Array(TB * dB * 4);
      for (let VB = 0; VB < dB; VB += yB) {
        const JB = Math.min(yB, dB - VB);
        pB.drawImage(BB, 0, VB, TB, JB, 0, 0, TB, JB), lB.set(pB.getImageData(0, 0, TB, JB).data, VB * TB * 4)
      }
      return {
        width: TB,
        height: dB,
        pixels: lB
      }
    }
    async function OB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : oB;
      const VB = [],
        yB = await Promise.all(BB.map((async BB => {
          var yB, lB;
          const JB = null !== (yB = null === (lB = TB.decoded) || void 0 === lB ? void 0 : lB.call(TB, BB)) && void 0 !== yB ? yB : null,
            gB = null === JB ? function(BB, TB) {
              if (BB.startsWith(pB)) {
                var dB;
                const VB = YB(BB);
                return null === VB ? null : null !== (dB = TB.atlasSheets[VB]) && void 0 !== dB ? dB : null
              }
              return TB.texture(BB)
            }(BB, TB) : null,
            oB = null !== JB && void 0 !== JB ? JB : null === gB ? null : dB(gB);
          if (null === oB) return VB.push({
            name: BB,
            url: gB,
            error: new Error(`no URL for terrain texture ${BB}`)
          }), null;
          try {
            const TB = await oB;
            if (TB.pixels.byteLength !== TB.width * TB.height * 4) throw new Error(`decoded ${TB.pixels.byteLength} bytes for ${TB.width}x${TB.height} texels`);
            return {
              name: BB,
              texture: TB
            }
          } catch (kB) {
            return VB.push({
              name: BB,
              url: gB,
              error: kB
            }), null
          }
        }))),
        lB = yB.filter((BB => null !== BB)),
        JB = new Uint32Array(2 * lB.length);
      lB.forEach(((BB, TB) => {
        let {
          texture: dB
        } = BB;
        JB[2 * TB] = dB.width, JB[2 * TB + 1] = dB.height
      }));
      return {
        handOver: {
          names: lB.map((BB => {
            let {
              name: TB
            } = BB;
            return TB
          })),
          textures: lB.map((BB => {
            let {
              texture: TB
            } = BB;
            return TB.pixels
          })),
          sizes: JB
        },
        failures: VB
      }
    }
    const DB = [2e3, 1e4, 3e4, 6e4, 12e4];

    function uB() {}
    class HB {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DB,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = BB, this.retryMs = TB, this.keepBelow = dB, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gB,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const VB = ++this.started,
          yB = {
            decode: dB.decode,
            wholeAtlas: dB.wholeAtlas
          };
        return this.loadAndHandOver(TB, yB, BB, (() => {
          var BB;
          return VB < this.landed || !1 === (null === (BB = dB.wanted) || void 0 === BB ? void 0 : BB.call(dB))
        }), {
          onTaken: (BB, dB) => {
            this.landed = VB, this.current = {
              mine: VB,
              sources: TB,
              load: yB,
              RO: BB,
              failed: dB
            }
          }
        })
      }
      restore(BB) {
        var TB;
        const dB = this.current;
        if (null === dB) return Promise.resolve(null);
        if ((null === (TB = this.restoring) || void 0 === TB ? void 0 : TB.mine) === dB.mine) return this.restoring.done;
        const VB = {
          mine: dB.mine,
          done: this.restoreLanded(dB, BB).finally((() => {
            this.restoring === VB && (this.restoring = null)
          }))
        };
        return this.restoring = VB, VB.done
      }
      async restoreLanded(BB, TB) {
        const dB = () => this.landed !== BB.mine,
          {
            RO: VB
          } = BB;
        if (null !== VB) return this.stopped() ? null : this.core.setTerrainTextures(VB.names, VB.textures, VB.sizes);
        let yB = TB;
        for (let pB = 0;; pB++) {
          const TB = this.retryMs.at(pB),
            VB = {
              allOrNothingExcept: void 0 === TB ? void 0 : BB.failed
            },
            lB = await this.loadAndHandOver(BB.sources, BB.load, yB, dB, VB);
          if (!1 !== lB || void 0 === TB || this.stopped()) return lB;
          if (yB = uB, await new Promise((BB => {
              setTimeout(BB, TB)
            })), dB()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(BB, TB, dB, VB) {
        let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const pB = this.core.terrainTextureNames();
        var lB;
        if (0 === pB.length) return null === (lB = yB.onTaken) || void 0 === lB || lB.call(yB, null, new Set), !0;
        let JB, gB;
        try {
          JB = await BB(), gB = await OB(pB, JB, TB.decode)
        } catch (HB) {
          return VB() ? null : (dB({
            name: null,
            url: null,
            error: HB
          }), !1)
        }
        if (VB() || this.stopped()) return null;
        for (const YB of gB.failures) dB(YB);
        const oB = yB.allOrNothingExcept;
        if (void 0 !== oB && gB.failures.some((BB => {
            let {
              name: TB
            } = BB;
            return null === TB || !oB.has(TB)
          })) || !0 === TB.wholeAtlas && gB.failures.some((BB => {
            let {
              name: TB
            } = BB;
            return null === TB || null !== YB(TB)
          }))) return !1;
        const {
          handOver: kB
        } = gB, LB = function(BB) {
          return BB.textures.reduce(((BB, TB) => BB + TB.byteLength), 0)
        }(kB) < this.keepBelow, DB = this.core.setTerrainTextures(kB.names, kB.textures, kB.sizes, LB ? void 0 : () => {
          !async function(BB, TB) {
            await TB;
            for (const {
                buffer: VB
              }
              of BB) {
              const BB = VB;
              var dB;
              if (!BB.detached) null === (dB = BB.transfer) || void 0 === dB || dB.call(BB, 0)
            }
          }(kB.textures, JB.heldUntil)
        });
        if (DB) {
          var uB;
          const BB = new Set(gB.failures.flatMap((BB => {
            let {
              name: TB
            } = BB;
            return null === TB ? [] : [TB]
          })));
          null === (uB = yB.onTaken) || void 0 === uB || uB.call(yB, LB ? kB : null, BB)
        }
        return DB
      }
    }
  },
  39731: (BB, TB, dB) => {
    function VB(BB) {
      return "fetch" === BB || "timeout" === BB || "integrity" === BB ? "download" : "browser"
    }
    dB.d(TB, {
      d: () => yB,
      h: () => lB,
      i: () => YB,
      j: () => JB,
      l: () => VB,
      n: () => pB
    });
    const yB = "https://discord.gg/playbloxd";

    function pB(BB) {
      return "download" === BB ? {
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

    function lB(BB, TB) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: TB ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: BB.code
        },
        discordLink: TB,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function JB() {
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

    function YB(BB, TB, dB) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: dB ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: BB.reason
        },
        discordLink: null === BB.name,
        confirm: TB ? "general:reconnect" : BB.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  5975: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => iB,
      e: () => NB,
      f: () => vB,
      h: () => EB
    });
    var VB = dB(5981);
    const yB = 6,
      pB = 3,
      lB = 1,
      JB = 2,
      YB = 4,
      gB = 8,
      oB = 16,
      kB = 32,
      LB = 64,
      OB = 128,
      DB = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function uB(BB) {
      if (!BB) return 0;
      const TB = DB.indexOf(BB);
      if (TB <= 0) throw new Error(`"${BB}" is not a shader pack hook function`);
      return TB
    }

    function HB(BB) {
      if (0 === BB) return null;
      const TB = DB[BB];
      if (void 0 === TB) throw new Error(`${BB} is not a shader pack hook function id`);
      return TB
    }

    function EB(BB) {
      const TB = VB.b.length;
      return {
        strict: BB >= TB,
        program: VB.b[BB % TB]
      }
    }

    function vB(BB) {
      return Number(BB.strict) * VB.b.length + VB.b.indexOf(BB.program)
    }

    function mB(BB) {
      return "" === BB ? [] : BB.split(" ")
    }

    function iB(BB) {
      const TB = {
        variantFlags: new Uint8Array(yB),
        hooks: new Uint8Array(yB * pB),
        moduleCodes: Array(yB).fill(""),
        reads: Array(2 * yB).fill("")
      };
      for (const dB of BB) {
        const BB = vB(dB.key),
          VB = (BB, TB) => null === dB.hooks.surface || dB.reads.fragment.includes(BB) ? 0 : TB;
        TB.variantFlags[BB] = (dB.sceneDepth ? lB : 0) | (dB.movesVertices ? JB : 0) | (dB.sunShadow ? YB : 0) | (dB.airShadow ? gB : 0) | (dB.discards ? oB : 0) | VB("localPosition", kB) | VB("enchantSpeed", LB) | VB("enchantTier", OB), TB.hooks[BB * pB] = uB(dB.hooks.vertex), TB.hooks[BB * pB + 1] = uB(dB.hooks.surface), TB.hooks[BB * pB + 2] = uB(dB.hooks.light), TB.moduleCodes[BB] = dB.moduleCode, TB.reads[2 * BB] = dB.reads.vertex.join(" "), TB.reads[2 * BB + 1] = dB.reads.fragment.join(" ")
      }
      return TB
    }

    function NB(BB) {
      const {
        hooks: TB,
        moduleCodes: dB,
        reads: VB
      } = BB;
      return Array.from(BB.variantFlags, ((BB, yB) => {
        const kB = yB * pB;
        return {
          key: EB(yB),
          hooks: {
            vertex: HB(TB[kB]),
            surface: HB(TB[kB + 1]),
            light: HB(TB[kB + 2])
          },
          moduleCode: dB[yB],
          sceneDepth: 0 !== (BB & lB),
          sunShadow: 0 !== (BB & YB),
          airShadow: 0 !== (BB & gB),
          movesVertices: 0 !== (BB & JB),
          discards: 0 !== (BB & oB),
          reads: {
            vertex: mB(VB[2 * yB]),
            fragment: mB(VB[2 * yB + 1])
          }
        }
      }))
    }
  },
  39598: (BB, TB, dB) => {
    dB.d(TB, {
      A: () => DB,
      b: () => yB,
      c: () => VB,
      e: () => LB,
      g: () => oB,
      i: () => HB,
      j: () => pB,
      m: () => JB,
      p: () => YB,
      s: () => lB,
      v: () => uB,
      y: () => OB
    });
    const VB = 3,
      yB = 0,
      pB = 1,
      lB = 2,
      JB = {
        uniform: 3,
        SL: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      YB = 10,
      gB = "BloxdPackInputs",
      oB = "bloxdPackInputs",
      kB = [{
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
      LB = 80;

    function OB() {
      const BB = kB.map((BB => {
        let {
          name: TB,
          type: dB
        } = BB;
        return `    ${TB}: ${dB},\n`
      })).join("");
      return `struct ${gB} {\n${BB}}\n@group(${VB}) @binding(${yB}) var<uniform> ${oB}: ${gB};\n`
    }

    function DB(BB, TB) {
      const dB = new DataView(BB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, LB),
        [VB, yB, pB, lB, JB, YB] = kB;
      dB.setFloat32(VB.offset, TB.seconds, !0), dB.setUint32(yB.offset, TB.lit ? 1 : 0, !0);
      for (let gB = 0; gB < 3; gB++) dB.setInt32(pB.offset + 4 * gB, TB.renderOffset[gB], !0), dB.setFloat32(lB.offset + 4 * gB, TB.tBB[gB], !0), dB.setFloat32(JB.offset + 4 * gB, TB.eyePosition[gB], !0), dB.setFloat32(YB.offset + 4 * gB, TB.shadowDirection[gB], !0)
    }

    function uB(BB) {
      const TB = new Uint32Array(Math.max(1, BB.length));
      return BB.forEach(((BB, dB) => {
        let {
          id: VB,
          rotation: yB
        } = BB;
        TB[dB] = 65535 & VB | (3 & yB) << 16
      })), TB
    }
    const HB = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  5981: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB,
      e: () => yB,
      f: () => pB
    });
    const VB = ["terrain", "liquid", "model"];

    function yB(BB) {
      return !BB.hooks.vertex && !BB.hooks.surface && !BB.hooks.light
    }

    function pB(BB, TB) {
      return "off" !== TB && (null === BB || BB.some((BB => BB.key.strict === ("strict" === TB) && !yB(BB))))
    }
  },
  39638: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB,
      g: () => pB,
      i: () => YB,
      m: () => lB,
      p: () => yB
    });
    const VB = /^alloc_failed (\d+) bytes$/;

    function yB(BB, TB) {
      return pB(BB, TB) ? `trap=alloc_failed ${TB} bytes` : `trap=${BB}`
    }

    function pB(BB, TB) {
      return "unreachable" === BB && TB > 0
    }

    function lB(BB, TB, dB) {
      const VB = function(BB) {
        return BB instanceof WebAssembly.RuntimeError ? /unreachable/i.test(BB.message) ? "unreachable" : /out of bounds/i.test(BB.message) ? "out_of_bounds" : "runtime_error" : (BB instanceof RangeError || BB instanceof Error && "InternalError" === BB.name) && /call stack|recursion/i.test(BB.message) ? "stack_overflow" : "js_error"
      }(BB);
      if ("unreachable" !== VB) return {
        kind: VB,
        panic: null,
        refusedBytes: 0
      };
      const yB = TB(),
        pB = dB();
      return {
        kind: VB,
        panic: pB > 0 ? null : yB,
        refusedBytes: pB
      }
    }
    const JB = 300;

    function YB(BB) {
      return BB.replace(/\s*\n\s*/g, " / ").slice(0, JB)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);