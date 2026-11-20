export const id = 86;
export const ids = [86];
export const modules = {
  38524: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu,
      d: () => Nu,
      e: () => Xu,
      f: () => Ju,
      j: () => mu
    });
    const Eu = "A valid external Instance reference no longer exists.",
      Ku = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ];
    const Qu = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function mu(uu, Ru) {
      return uu ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(uu) {
        var Ru;
        const yu = null !== (Ru = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(uu)) && void 0 !== Ru ? Ru : /failed with ([A-Z][A-Z0-9_]+)/.exec(uu);
        return yu ? yu[1] : uu.includes(Eu) ? "gpu_process_lost" : "other"
      }(Ru)
    }

    function Ju(uu) {
      return `${(null===uu||void 0===uu?void 0:uu.vendor)||"unknown vendor"} ${(null===uu||void 0===uu?void 0:uu.architecture)||"unknown architecture"}`
    }

    function Nu(uu) {
      return Vu(uu)[1]
    }

    function Xu(uu) {
      return Vu(uu)[2]
    }

    function Vu(uu) {
      var Ru;
      return null !== (Ru = Ku.find((Ru => {
        let [yu] = Ru;
        return uu < yu
      }))) && void 0 !== Ru ? Ru : Ku[Ku.length - 1]
    }
  },
  38818: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu,
      i: () => Ku
    });
    const Eu = 45e3;
    class Ku extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  36330: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Eu,
      g: () => Ku,
      h: () => Qu
    });
    const Eu = 1024,
      Ku = 1024 * Eu;

    function Qu(uu) {
      return (uu / Ku).toFixed(1)
    }
  },
  36328: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Qu,
      g: () => Ju,
      i: () => mu,
      j: () => Nu,
      l: () => Xu
    });
    var Eu = yu(212);
    const Ku = 32 * yu(36330).g,
      Qu = 6144,
      mu = 4608,
      Ju = 512;

    function Nu(uu) {
      return Math.floor(Ku * uu / Qu)
    }

    function Xu(uu) {
      const Ru = uu - Math.floor(uu / 6);
      let yu = Eu.f.maxChunkHorizAddDistance,
        Ku = Eu.f.maxChunkVertAddDistance;
      if (Vu(yu + 1, Ku + 1) <= Ru) return null;
      for (; Vu(yu + 1, Ku + 1) > Ru && (yu > 0 || Ku > 0);) yu > Ku ? yu-- : Ku--;
      return {
        horizontal: yu,
        vertical: Ku
      }
    }

    function Vu(uu, Ru) {
      const yu = Math.max(uu, Ru);
      let Eu = 0;
      for (let Ku = -yu; Ku <= yu; Ku++)
        for (let Qu = -yu; Qu <= yu; Qu++)
          for (let mu = -yu; mu <= yu; mu++) ru(uu, Ru, Ku, Qu, mu) && Eu++;
      return Eu
    }

    function ru(uu, Ru, yu, Eu, Ku) {
      const Qu = yu * yu + Ku * Ku;
      return uu === Ru ? Qu + Eu * Eu <= uu * uu : uu > Ru ? Math.abs(Eu) <= Ru && Qu + Eu * Eu <= uu * uu : Qu <= uu * uu && Qu + Eu * Eu <= Ru * Ru
    }
  },
  40424: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku,
      i: () => Qu,
      j: () => Ju,
      m: () => Vu,
      p: () => Nu,
      r: () => mu
    });
    var Eu = yu(212);
    const Ku = 3e3,
      Qu = 15e3;

    function mu(uu) {
      const Ru = uu.endsWith(Eu.j);
      return {
        text: (Ru ? uu.slice(0, -Eu.j.length) : uu) || null,
        dropsCache: Ru
      }
    }
    const Ju = "Either your internet isn't working or this is a bug.";

    function Nu(uu, Ru) {
      const yu = Vu(uu);
      return null !== yu.name && "" === Eu.c[yu.name].text && null !== Ru ? Ru : yu.reason
    }
    const Xu = "You were removed from the game.";

    function Vu(uu) {
      var Ru;
      let yu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Ku = null !== (Ru = Object.keys(Eu.c).find((Ru => Eu.c[Ru].code === uu))) && void 0 !== Ru ? Ru : null;
      if (null === Ku) return {
        code: uu,
        name: Ku,
        reason: null !== yu && void 0 !== yu ? yu : `${Ju}\nCode: ${uu}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: Qu,
        canReconnect: mu = !1
      } = Eu.c[Ku], Nu = uu === Eu.c.outdatedVersion.code || uu === Eu.c.loadRecaptchaError.code;
      return {
        code: uu,
        name: Ku,
        reason: "" !== Qu ? Qu : null !== yu && void 0 !== yu ? yu : uu === Eu.c.gameOrPluginKick.code ? Xu : `Code: ${uu}`,
        canReconnect: mu,
        automaticallyReconnect: uu === Eu.c.customGameUpdated.code || uu === Eu.c.duplicateLobbyNameError.code,
        requiresRefresh: Nu
      }
    }
  },
  4562: (uu, Ru, yu) => {
    yu.d(Ru, {
      B: () => Iu,
      Bb: () => hu,
      Cb: () => Ou,
      Cc: () => Eu.rb,
      Db: () => fu,
      Dd: () => Pu,
      E: () => mu,
      F: () => nu,
      Fb: () => RR,
      Gc: () => xR,
      Ib: () => Ku.d,
      Ic: () => XR,
      Id: () => Zu,
      J: () => BR,
      Jd: () => Yu,
      K: () => vu,
      Kb: () => eu,
      Mb: () => cu,
      Mc: () => ER,
      Nc: () => Eu.ub,
      Nd: () => iu,
      O: () => Eu.g,
      Pb: () => Gu,
      Q: () => Xu,
      Qc: () => Eu.xb,
      R: () => Eu.i,
      Rd: () => mR,
      Sb: () => Mu,
      Sc: () => Eu.yb,
      Tb: () => Eu.N,
      U: () => Eu.j,
      Uc: () => au,
      Ud: () => SR,
      Vb: () => Uu,
      Vd: () => du,
      Wb: () => bu,
      Wc: () => Eu.Db,
      Wd: () => ou,
      Xb: () => QR,
      Xc: () => Eu.Hb,
      Y: () => qu,
      Yc: () => Eu.Ib,
      Yd: () => lu,
      Zc: () => Eu.Pb,
      Zd: () => tu,
      _b: () => Hu,
      _c: () => Eu.Rb,
      ab: () => Eu.s,
      ac: () => VR,
      bb: () => Eu.w,
      bc: () => Ku.h,
      bd: () => Eu.Sb,
      be: () => su,
      cc: () => Wu,
      d: () => uR,
      ee: () => Nu,
      fb: () => Eu.x,
      fc: () => yR,
      fd: () => Du,
      g: () => pu,
      he: () => gu,
      jb: () => ru,
      jc: () => Eu.W,
      jd: () => Eu.Tb,
      k: () => Su,
      ke: () => pR,
      m: () => NR,
      mb: () => ju,
      md: () => Eu.Vb,
      nb: () => Eu.B,
      nc: () => Eu.X,
      nd: () => Eu.Zb,
      od: () => Qu,
      oe: () => xu,
      p: () => Au,
      qb: () => Eu.E,
      rc: () => Eu.$,
      rd: () => Tu,
      sb: () => Fu,
      t: () => ku,
      ub: () => KR,
      uc: () => Eu.db,
      ud: () => JR,
      vb: () => Vu,
      w: () => Eu.c,
      xd: () => zu,
      yb: () => Eu.G,
      yc: () => Eu.hb,
      yd: () => wu,
      z: () => rR,
      zd: () => Lu
    });
    var Eu = yu(4564),
      Ku = yu(2306);
    const Qu = Math.round(1e3 / Eu.Zb),
      mu = 4,
      Ju = 2;

    function Nu() {
      return crypto.getRandomValues(new Uint32Array(Ju))
    }
    const Xu = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      Vu = 16,
      ru = {
        Draws: 1,
        NetAll: 2
      },
      Bu = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function xu(uu) {
      return (uu.nametagsHidden ? Cu.NametagsHidden : 0) | (uu.crouchToggle ? Cu.CrouchToggle : 0) | (uu.bhopDisabled ? Cu.BhopDisabled : 0) | (uu.disableBobbing ? Cu.DisableBobbing : 0) | (uu.ezTowering ? Cu.EzTowering : 0) | (uu.ezBridging ? Cu.EzBridging : 0) | (uu.showChunkBorders ? Cu.ShowChunkBorders : 0)
    }
    const Su = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      pu = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      Tu = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      Wu = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      ju = 5,
      Hu = 4294967295;

    function du(uu) {
      return (uu.showFog ? Bu.ShowFog : 0) | (uu.lighting ? Bu.Lighting : 0) | (uu.chunkFade ? Bu.ChunkFade : 0)
    }
    const bu = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      Cu = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      ku = {
        Release: 1,
        KeepTouches: 2
      },
      eu = {
        Point: 1,
        Stamped: 2
      },
      Au = {
        Add: 1,
        Clear: 2
      },
      Du = 1,
      Mu = 8,
      Iu = 16777215,
      Gu = 4,
      Uu = {
        Resume: 1
      },
      nu = {
        Held: 1
      };

    function su(uu, Ru) {
      return (uu | Ru << 8) >>> 0
    }

    function tu(uu) {
      return 255 & uu
    }

    function lu(uu) {
      return uu >>> 8
    }

    function gu(uu) {
      return uu + 3 & -4
    }
    const cu = 16777216,
      Lu = 20;
    const zu = 8,
      Fu = 8,
      wu = 16777216,
      Zu = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      hu = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      Pu = 16,
      iu = {
        Lost: 0,
        Gone: 1
      },
      Yu = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function ou(uu) {
      return uu === Yu.WorldgenSeed || uu === Yu.Generate
    }
    const qu = 4,
      Ou = 99,
      vu = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      au = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      fu = 12,
      uR = 16,
      RR = 4,
      yR = 12,
      ER = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      KR = 4,
      QR = 8,
      mR = 8,
      JR = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      NR = {
        Crit: 1,
        HitSelf: 2
      },
      XR = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      VR = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      rR = 12,
      BR = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      xR = 67108864;

    function SR(uu) {
      for (const [Ru, yu] of Object.entries(Eu.g))
        if (yu === uu) return Ru;
      return `Unknown${uu}`
    }

    function pR(uu) {
      return {
        status: uu[Eu.E.Status],
        lastError: uu[Eu.E.LastError],
        lastErrorDetail: uu[Eu.E.LastErrorDetail],
        errorCount: uu[Eu.E.ErrorCount],
        frameIndex: uu[Eu.E.FrameIndex],
        tickIndex: uu[Eu.E.TickIndex],
        renderPending: uu[Eu.E.RenderPending],
        firstView: uu[Eu.E.FirstView],
        chunksCancelled: uu[Eu.E.ChunksCancelled]
      }
    }
  },
  40223: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Eu,
      f: () => ru,
      g: () => Ju,
      j: () => Qu,
      k: () => Ku,
      m: () => Nu,
      p: () => Vu
    });
    class Eu extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function Ku(uu) {
      return uu instanceof RangeError && /call stack/i.test(uu.message) || uu instanceof Error && "InternalError" === uu.name && /recursion/i.test(uu.message)
    }

    function Qu(uu) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(uu))
    }
    const mu = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function Ju(uu) {
      var Ru;
      return uu instanceof WebAssembly.RuntimeError || uu instanceof Eu || Ku(uu) && mu.test(null !== (Ru = uu.stack) && void 0 !== Ru ? Ru : "")
    }

    function Nu(uu, Ru) {
      if (Ju(uu)) throw uu;
      console.error(Ru, uu)
    }

    function Xu(uu, Ru, yu, Ku, Qu) {
      if (Ru % Ku !== 0 || Ru + yu > uu.byteLength) throw new Eu(`${Qu}: ${yu} bytes at ${Ru}, ${Ku}-aligned, outside ${uu.byteLength} bytes of memory`)
    }

    function Vu(uu, Ru, yu, Eu, Ku) {
      return 0 === yu ? null : (Xu(Ru, yu, Eu * uu.BYTES_PER_ELEMENT, uu.BYTES_PER_ELEMENT, Ku), new uu(Ru, yu, Eu))
    }

    function ru(uu, Ru, yu, Eu, Ku) {
      return 0 === Ru ? null : (Xu(uu, Ru, yu, Eu, Ku), new DataView(uu, Ru, yu))
    }
  },
  40573: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Eu
    });
    const Eu = {
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
  40520: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Su,
      f: () => pu,
      h: () => Bu,
      i: () => ru
    });
    const Eu = 2e3,
      Ku = "unavailable";
    let Qu = () => Promise.resolve().then((() => yu(3036))),
      mu = null,
      Ju = null,
      Nu = Xu();

    function Xu() {
      let uu = () => {};
      return {
        promise: new Promise((Ru => {
          uu = () => {
            Ru(null)
          }
        })),
        resolve: uu
      }
    }

    function Vu() {
      if (null === mu) {
        const uu = Qu();
        mu = uu, uu.then((Ru => {
          mu === uu && (Ju = Ru)
        }), (() => {
          mu === uu && (mu = null)
        }))
      }
      return mu
    }

    function ru() {
      Vu().catch((() => {}))
    }

    function Bu() {
      Nu.resolve()
    }

    function xu(uu, Ru, yu, Eu) {
      if (null === uu) return {
        errorKind: Ru,
        fingerprint: Ku,
        dedupe: `${Ru}|${Eu}`
      };
      const {
        fingerprint: Qu
      } = uu.clientErrorKey(Ru, yu, Eu);
      return {
        errorKind: Ru,
        fingerprint: Qu,
        dedupe: Qu
      }
    }

    function Su(uu, Ru, yu, Eu) {
      return null === Ju ? Eu ? (ru(), xu(null, uu, Ru, yu)) : null : xu(Ju, uu, Ru, yu)
    }
    async function pu(uu, Ru, yu) {
      let Ku;
      const Qu = new Promise((uu => {
        Ku = setTimeout((() => {
          uu(null)
        }), Eu)
      }));
      try {
        return xu(await Promise.race([Vu(), Qu, Nu.promise]), uu, Ru, yu)
      } catch {
        return xu(null, uu, Ru, yu)
      } finally {
        clearTimeout(Ku)
      }
    }
  },
  40513: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      BUILT_IN_ANIMATIONS_SITE: () => Pu,
      CORE_ERRORS_SITE: () => tu,
      EVENT_OVERFLOW_SITE: () => hu,
      FIRST_VIEW_SITE: () => Yu,
      JOIN_SITE: () => gu,
      LEAVE_SITE: () => cu,
      MODEL_FEED_SITE: () => Lu,
      MODEL_POOL_SITE: () => zu,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => qu,
      NON_FATAL_REPORTS_PER_SESSION: () => VR,
      PREVIEW_ANIMATIONS_SITE: () => Zu,
      RENDER_RELOAD_SITE: () => wu,
      TEXTURE_NAMES_SITE: () => Fu,
      TEXTURE_PACK_FEED_SITE: () => iu,
      TurnstilePageError: () => LR,
      WASM_LOAD_SITE: () => lu,
      crashError: () => pR,
      crashReportsSettled: () => bR,
      flushCrashReports: () => HR,
      joinFailureCode: () => zR,
      lokiTransport: () => au,
      modelFailureCode: () => YR,
      readTrap: () => eR,
      renderLossDetail: () => ry,
      renderReloadMessage: () => Xy,
      reportCoreErrors: () => kR,
      reportCountedLoadFallback: () => gR,
      reportCrash: () => TR,
      reportDataLoadFailure: () => Ty,
      reportDisconnect: () => PR,
      reportDracoDecoderFailure: () => vR,
      reportEventOverflow: () => uy,
      reportFirstViewNoTerrain: () => Qy,
      reportGpuFallback: () => tR,
      reportGpuWasmPopulation: () => lR,
      reportLightFault: () => yy,
      reportMemoryShed: () => Ky,
      reportModelFailure: () => oR,
      reportModelPoolFailure: () => qR,
      reportModelsModuleRetry: () => OR,
      reportPageJoinFailure: () => wR,
      reportReconnectGaveUp: () => iR,
      reportRenderReload: () => xy,
      reportReplayFault: () => Jy,
      reportStaleBuildReload: () => jy,
      reportStoppedCore: () => IR,
      reportTerrainTextureFailure: () => Sy,
      reportTexturePackFeedLoadFailure: () => fR,
      reportUnstreamedCoreLoad: () => cR,
      reportUnsupportedFallback: () => nR,
      reportUnusedSeat: () => hR,
      reportWorkerLost: () => Ry,
      reportWorkerStartTimeout: () => my,
      reportWorldgenGaveUp: () => Ey,
      reportWorldgenLoadFailure: () => aR,
      resetCrashReports: () => CR,
      setCrashBackend: () => QR,
      setCrashScreen: () => ER,
      setCrashTransport: () => RR,
      showCrash: () => MR,
      showJoinFailure: () => FR,
      showUnsupported: () => UR
    });
    var Eu = yu(1056),
      Ku = yu(293),
      Qu = yu(3040),
      mu = yu(40520),
      Ju = yu(4562),
      Nu = yu(40523),
      Xu = yu(3273),
      Vu = yu(38524),
      ru = yu(145),
      Bu = yu(680),
      xu = yu(143),
      Su = yu(3282),
      pu = yu(38818),
      Tu = yu(1699),
      Wu = yu(40480),
      ju = yu(40173),
      Hu = yu(40433),
      du = yu(40440),
      bu = yu(40525),
      Cu = yu(3510),
      ku = yu(3514),
      eu = yu(40528),
      Au = yu(40553),
      Du = yu(40559),
      Mu = yu(36615),
      Iu = yu(3044),
      Gu = yu(36170),
      Uu = yu(40371),
      nu = yu(36176);
    const su = "[bloxd-wasm-client]",
      tu = "coreErrors",
      lu = "wasmLoad",
      gu = "join",
      cu = "leave",
      Lu = "modelFeed",
      zu = "modelWorkerPool",
      Fu = "textureNames",
      wu = "renderReload",
      Zu = "previewAnimations",
      hu = "eventOverflow",
      Pu = "builtInAnimations",
      iu = "texturePackFeed",
      Yu = "firstView",
      ou = 300,
      qu = 8;
    let Ou = 0;
    const vu = new Set,
      au = (uu, Ru) => {
        const yu = mR[uu.kind];
        if (null === yu) return void fu(uu, Ru, KR, null);
        const Eu = (0, mu.e)(yu, uu.message, uu.code, uu.fatal);
        if (null !== Eu) return void fu(uu, Ru, KR, Eu);
        const Ku = KR;
        jR("Loki", (async () => {
          fu(uu, Ru, Ku, await (0, mu.f)(yu, uu.message, uu.code))
        }))
      };

    function fu(uu, Ru, yu, Ku) {
      const {
        kind: mu,
        code: Ju,
        site: Nu,
        fatal: Xu,
        details: Vu
      } = uu;
      if (!Xu)
        if (null === Ku || (0, Qu.b)(Ku.errorKind) || vu.has(Ku.dedupe)) {
          if (Ou >= qu) return;
          Ou++
        } else vu.add(Ku.dedupe);
      const ru = {
        ...Vu,
        kind: mu,
        code: Ju,
        site: Nu,
        fatal: String(Xu),
        backend: yu
      };
      null !== Ku && (ru.errorKind = Ku.errorKind, ru.fingerprint = Ku.fingerprint), Ru instanceof Error && "string" === typeof Ru.stack && (ru.causeStack = Ru.stack.slice(0, 2e3)), (0, Eu.jp)(pR(uu, Ru), ru)
    }
    let uR = au;

    function RR(uu) {
      const Ru = uR;
      return uR = uu, Ru
    }
    let yR = () => {};

    function ER(uu) {
      const Ru = yR;
      return yR = uu, Ru
    }
    let KR = "unpicked";

    function QR(uu) {
      KR = uu
    }
    const mR = {
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
      JR = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        gpuFallback: "wasm_load"
      },
      NR = new Set(["unstreamedLoad"]);
    let XR = !1;
    const VR = 20,
      rR = new Map;
    let BR = 0,
      xR = 0;
    const SR = new Set;

    function pR(uu, Ru) {
      const yu = Object.assign(new Error(`${uu.code}: ${uu.message}`), {
        name: "WasmClientCrash",
        cause: null !== Ru && void 0 !== Ru ? Ru : void 0
      });
      return Ru instanceof Error && Ru.stack && (yu.stack = Ru.stack), yu
    }

    function TR(uu) {
      var Ru, Eu;
      const {
        kind: Ku,
        code: Qu,
        site: mu,
        fatal: Ju,
        message: Nu,
        error: Xu
      } = uu, Vu = !1 !== uu.toTransport && !NR.has(Ku), ru = !Ju && Vu, Bu = {
        kind: Ku,
        code: Qu,
        site: mu,
        fatal: Ju,
        message: Nu,
        details: null !== (Ru = uu.details) && void 0 !== Ru ? Ru : {}
      }, xu = `${Qu}@${mu}${void 0===uu.instance?"":`#${uu.instance}`}${Ju?"!":""}`, Su = (null !== (Eu = rR.get(xu)) && void 0 !== Eu ? Eu : 0) + 1;
      if (rR.set(xu, Su), Su > 1 ? 0 === (Su & Su - 1) && WR((() => {
          console.warn(`${su} ${Qu} at ${mu} reported ${Su} times`)
        })) : ru && BR >= VR ? WR((() => {
          console.warn(`${su} ${Ku} ${Qu} at ${mu}: ${Nu} (not sent: the session's ${VR} went)`, Bu.details, null !== Xu && void 0 !== Xu ? Xu : "")
        })) : (ru && BR++, function(uu, Ru, Eu) {
          var Ku, Qu;
          const {
            kind: mu,
            code: Ju,
            site: Nu,
            fatal: Xu,
            message: Vu,
            details: ru
          } = uu;
          WR((() => {
            (Xu ? console.error : console.warn)(`${su} ${mu} ${Ju} at ${Nu}: ${Vu}`, ru, null !== Ru && void 0 !== Ru ? Ru : "")
          }));
          const Bu = JR[mu],
            xu = null !== (Ku = null !== (Qu = mR[mu]) && void 0 !== Qu ? Qu : Bu) && void 0 !== Ku ? Ku : null;
          null !== xu && jR("counts", (async () => {
            const {
              peekVisitSessionId: uu
            } = await Promise.resolve().then((() => yu(640)));
            if (null !== uu()) {
              const {
                reportCappedWasmFailure: uu,
                reportWasmFailure: Ru
              } = await yu.e(207).then((() => yu(36163)));
              (void 0 === Bu ? Ru : uu)(xu, Vu, Ju), XR = !0
            }
          }));
          Eu && WR((() => {
            uR(uu, Ru)
          }))
        }(Bu, Xu, Vu)), Ju) {
        var pu;
        const Ru = null !== (pu = uu.screen) && void 0 !== pu ? pu : {
          text: (0, Mu.g)(Bu, !0),
          reload: !0
        };
        WR((() => {
          yR(Ru)
        }))
      }
      return Bu
    }

    function WR(uu) {
      try {
        uu()
      } catch (Ru) {
        try {
          console.warn(`${su} could not send a report`, Ru)
        } catch {}
      }
    }

    function jR(uu, Ru) {
      try {
        const yu = Ru().catch((Ru => {
          console.warn(`${su} could not send the report to ${uu}`, Ru)
        })).finally((() => {
          SR.delete(yu)
        }));
        SR.add(yu)
      } catch (yu) {
        console.warn(`${su} could not send the report to ${uu}`, yu)
      }
    }
    async function HR(uu) {
      let Ru;
      (0, mu.h)();
      const yu = new Promise((yu => {
        Ru = setTimeout(yu, uu)
      }));
      await Promise.race([dR(), yu]), clearTimeout(Ru)
    }
    async function dR() {
      if (await Promise.allSettled([...SR]), XR) try {
        const {
          flushClientAnalyticsEvents: uu
        } = await Promise.resolve().then((() => yu(1442)));
        await uu()
      } catch (uu) {
        console.warn(`${su} could not send the counts`, uu)
      }
    }
    async function bR() {
      for (; SR.size > 0;) await Promise.allSettled([...SR])
    }

    function CR() {
      rR.clear(), BR = 0, XR = !1, Ou = 0, vu.clear(), xR = 0, (0, Nu.o)()
    }

    function kR(uu, Ru, yu, Eu) {
      xR += Ru;
      for (const {
          code: mu,
          detail: Xu
        }
        of uu) {
        var Ku, Qu;
        const uu = (0, Ju.Ud)(mu),
          Ru = (0, Nu.b)(mu, Xu),
          Vu = null === Eu || void 0 === Eu ? void 0 : Eu(mu, Xu),
          ru = void 0 !== (null === Ru || void 0 === Ru ? void 0 : Ru.gpuDetails),
          Bu = ru ? null === (Ku = (0, xu.j)()) || void 0 === Ku ? void 0 : Ku.renderer : void 0,
          Su = ru ? ` ${(0,Nu.f)()}` : "",
          pu = Array.from([Bu && `gpu ${(0,Nu.q)(Bu)}`, Vu].filter(Boolean).join("; ")).slice(0, ou).join(""),
          Tu = `core error ${uu}${null!==(Qu=null===Ru||void 0===Ru?void 0:Ru.words)&&void 0!==Qu?Qu:""}${Su}${pu?`: ${pu}`:""}`,
          Wu = {
            errorCode: String(mu),
            detail: String(Xu),
            droppedBefore: String(xR),
            wasmBuild: yu.wasm,
            clientVersion: yu.client,
            ...null === Ru || void 0 === Ru ? void 0 : Ru.gpuDetails
          };
        null !== Ru && (0, Nu.l)(Ru) ? WR((() => {
          console.warn(`${su} coreError CORE-${uu}: ${Tu} (not sent: the session's render warnings of its kind went)`, Wu)
        })) : TR({
          kind: mu === Ju.O.JobsHeapGaveUp ? "meshHeap" : "coreError",
          code: `CORE-${uu}`,
          site: tu,
          fatal: !1,
          message: Tu,
          details: Wu,
          instance: null === Ru || void 0 === Ru ? void 0 : Ru.instance
        })
      }
    }

    function eR(uu) {
      return (0, Gu.m)(uu instanceof Uu.b ? uu.trap : uu, Cu.y, Cu.bb)
    }
    const AR = "declined=js";

    function DR(uu) {
      return uu ? {
        labels: [AR],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function MR(uu, Ru, yu) {
      return GR(uu, Ru, yu, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function IR(uu, Ru, yu) {
      return GR(uu, Ru, yu, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function GR(uu, Ru, yu, Eu, Ku) {
      let {
        memoryDetails: Qu = {},
        declined: mu = !1
      } = Eu;
      const {
        code: Ju,
        details: Nu,
        message: Xu
      } = (0, Wu.B)(uu, Ru), Vu = [];
      null !== yu && (Nu.trapKind = yu.kind, null !== yu.panic && (Nu.panic = (0, Gu.i)(yu.panic)), yu.refusedBytes > 0 && (Nu.refusedAllocation = String(yu.refusedBytes)), Vu.push((0, Gu.o)(yu.kind, yu.refusedBytes)));
      const ru = DR(mu);
      return TR({
        kind: "crash",
        code: Ju,
        site: uu.site,
        fatal: Ku,
        message: [...Vu, ...ru.labels, Xu].join("; "),
        details: {
          ...Nu,
          ...ru.details,
          ...Qu
        },
        error: uu.error
      })
    }

    function UR(uu, Ru, yu) {
      return TR({
        kind: "unsupported",
        code: Ru,
        site: lu,
        fatal: !0,
        message: yu,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: uu,
          status: Ru
        },
        screen: {
          text: (0, Mu.r)(uu),
          reload: "download" === uu
        }
      })
    }

    function nR(uu, Ru, yu) {
      return TR({
        kind: "unsupportedFallback",
        code: "blockedAfterLoss" === Ru ? "blocked_after_loss" : "unsupported_js_fallback",
        site: lu,
        fatal: !1,
        message: yu,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: uu,
          status: "unsupported",
          decline: Ru,
          fallback: "js"
        }
      })
    }
    const sR = "misdrawn_gpu_js_fallback";

    function tR(uu, Ru) {
      return TR({
        kind: "gpuFallback",
        code: sR,
        site: lu,
        fatal: !1,
        message: `the renderer plays ${uu} on ${Ru} worse than the JS client`,
        details: {
          gpuFamily: uu,
          backend: Ru,
          fallback: "js"
        }
      })
    }

    function lR(uu) {
      jR("counts", (async () => {
        await (0, Bu.d)(uu), XR = !0
      }))
    }

    function gR(uu, Ru, yu, Eu) {
      const Ku = DR(Eu);
      return TR({
        kind: "unsupported",
        code: Ru,
        site: lu,
        fatal: !1,
        message: [...Ku.labels, yu].join("; "),
        details: {
          cause: uu,
          status: Ru,
          fallback: "js",
          ...Ku.details
        }
      })
    }

    function cR() {
      const {
        code: uu,
        message: Ru
      } = Iu.e;
      return TR({
        kind: "unstreamedLoad",
        code: uu,
        site: lu,
        fatal: !1,
        message: Ru
      })
    }
    class LR extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function zR(uu) {
      return uu instanceof Hu.l ? 0 === uu.code ? "JOIN-matchmake" : `JOIN-${uu.code}` : uu instanceof Hu.b ? 0 === uu.code ? `JOIN-${uu.stage}` : `JOIN-${uu.stage}-${uu.code}` : uu instanceof ju.e ? "JOIN-gameCode" : uu instanceof LR ? "JOIN-turnstilePage" : uu instanceof Hu.v ? "JOIN-trafficCheck" : uu instanceof pu.i ? "JOIN-timeout" : "JOIN-network"
    }

    function FR(uu, Ru) {
      const yu = (0, nu.k)(uu),
        Eu = {
          wasmBuild: Ru.wasm,
          clientVersion: Ru.client
        },
        Ku = uu instanceof LR ? {
          text: (0, Mu.k)(),
          reload: !1
        } : void 0,
        Qu = (0, du.f)(uu),
        mu = "expected" !== Qu;
      return TR({
        kind: "join",
        code: zR(uu),
        site: gu,
        fatal: !0,
        message: yu,
        details: Eu,
        error: uu,
        screen: Ku,
        toTransport: mu,
        instance: Qu
      })
    }

    function wR(uu, Ru, yu) {
      var Eu;
      const Ku = (0, du.f)(uu),
        Qu = {
          cause: (uu instanceof Hu.b || uu instanceof Hu.l) && null !== (Eu = uu.serverText) && void 0 !== Eu ? Eu : "",
          sinceJoinStart: (0, Su.d)(yu.sinceJoinStartMs),
          game: yu.game,
          ...(0, Su.k)(),
          wasmBuild: Ru.wasm,
          clientVersion: Ru.client
        };
      return TR({
        kind: "pageJoin",
        code: zR(uu),
        site: gu,
        fatal: !1,
        message: (0, nu.k)(uu),
        details: Qu,
        error: uu,
        toTransport: "unrecognised" === Ku,
        instance: Ku
      })
    }
    const ZR = {
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

    function hR(uu, Ru) {
      let {
        unused: yu,
        answered: Eu,
        heldMs: Ku
      } = uu;
      const {
        code: Qu,
        message: mu
      } = ZR[yu], Ju = {
        unused: yu,
        answered: String(Eu),
        heldMs: String(Ku),
        wasmBuild: Ru.wasm,
        clientVersion: Ru.client
      };
      return TR({
        kind: "seat",
        code: Qu,
        site: gu,
        fatal: !1,
        message: mu,
        details: Ju
      })
    }

    function PR(uu, Ru, yu) {
      var Eu;
      let Ku = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (Eu = uu.name) && void 0 !== Eu ? Eu : String(uu.code);
      const Qu = {
          closeCode: String(uu.code),
          recognised: String(null !== uu.name),
          closeReason: yu.closeReason,
          sinceJoined: (0, Su.d)(yu.sinceJoinedMs),
          game: yu.game,
          ...(0, Su.k)(),
          wasmBuild: Ru.wasm,
          clientVersion: Ru.client
        },
        mu = null === uu.name && !(0, Su.g)(uu.code);
      return TR({
        kind: "disconnect",
        code: Ku,
        site: cu,
        fatal: !1,
        message: "Left room",
        details: Qu,
        toTransport: mu
      })
    }

    function iR(uu, Ru) {
      const yu = {
        ...(0, Xu.m)(uu),
        wasmBuild: Ru.wasm,
        clientVersion: Ru.client
      };
      return TR({
        kind: "disconnect",
        code: `reconnect-${uu.reason}`,
        site: gu,
        fatal: !1,
        message: "Reconnect failed",
        details: yu
      })
    }

    function YR(uu) {
      return uu.error instanceof ku.e ? `MODEL-${uu.error.status}` : uu.error instanceof eu.j ? "MODEL-ring" : "MODEL-network"
    }

    function oR(uu, Ru) {
      const yu = YR(uu),
        Eu = `model file ${uu.file} ${uu.startup?"(startup) ":""}could not load`,
        Ku = {
          file: String(uu.file),
          url: uu.url,
          wasmBuild: Ru.wasm,
          clientVersion: Ru.client
        };
      return TR({
        kind: uu.startup ? "model" : "modelLate",
        code: yu,
        site: Lu,
        fatal: uu.startup,
        message: Eu,
        details: Ku,
        error: uu.error
      })
    }

    function qR(uu, Ru) {
      const yu = {
        wasmBuild: Ru.wasm,
        clientVersion: Ru.client
      };
      return TR({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: zu,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: yu,
        error: uu
      })
    }

    function OR(uu, Ru, yu) {
      const Eu = {
        delayMs: String(Ru),
        wasmBuild: yu.wasm,
        clientVersion: yu.client
      };
      uu instanceof ku.e && (Eu.status = String(uu.status));
      return TR({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: zu,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: Eu,
        error: uu
      })
    }

    function vR(uu, Ru) {
      const yu = {
        wasmBuild: Ru.wasm,
        clientVersion: Ru.client
      };
      return TR({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: zu,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: yu,
        error: uu
      })
    }

    function aR(uu, Ru) {
      const yu = {
        wasmBuild: Ru.wasm,
        clientVersion: Ru.client
      };
      return TR({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: Wu.x,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: yu,
        error: uu
      })
    }

    function fR(uu, Ru) {
      const yu = {
        wasmBuild: Ru.wasm,
        clientVersion: Ru.client
      };
      return TR({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: iu,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: yu,
        error: uu
      })
    }

    function uy(uu, Ru) {
      const {
        frames: yu,
        acks: Eu,
        mask: Ku,
        outcome: Qu
      } = uu, mu = {
        frames: String(yu),
        acks: String(Eu),
        mask: String(Ku),
        outcome: null !== Qu && void 0 !== Qu ? Qu : "resynced",
        wasmBuild: Ru.wasm,
        clientVersion: Ru.client
      };
      return TR({
        kind: "recovered",
        code: "rejoined" === Qu ? "CORE-eventOverflowRejoin" : "failed" === Qu ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: hu,
        fatal: !1,
        message: `the event buffer refused records in ${yu} frames`,
        details: mu
      })
    }

    function Ry(uu, Ru, yu) {
      return TR({
        kind: "recovered",
        code: "CORE-workerLost",
        site: uu,
        fatal: !1,
        message: `a ${uu} worker was lost`,
        details: {
          reason: Ru,
          wasmBuild: yu.wasm,
          clientVersion: yu.client
        }
      })
    }

    function yy(uu, Ru, yu) {
      const Eu = {
        wasmBuild: yu.wasm,
        clientVersion: yu.client
      };
      return TR({
        kind: "recovered",
        code: uu,
        site: Wu.l,
        fatal: !1,
        message: Ru,
        details: Eu
      })
    }

    function Ey(uu, Ru) {
      const yu = {
        lastReason: uu,
        wasmBuild: Ru.wasm,
        clientVersion: Ru.client
      };
      return TR({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: Wu.x,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: yu
      })
    }

    function Ky(uu, Ru, yu) {
      return TR({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: Wu.j,
        fatal: !1,
        message: (0, bu.j)(uu) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: uu,
          ...Ru,
          wasmBuild: yu.wasm,
          clientVersion: yu.client
        }
      })
    }

    function Qy(uu, Ru) {
      const yu = (0, Nu.j)(),
        Eu = {
          game: uu,
          renderWarned: String(yu),
          browser: (0, Nu.f)(),
          wasmBuild: Ru.wasm,
          clientVersion: Ru.client
        },
        Ku = `first view drew no whole terrain in ${Au.i/1e3} s${yu?", render warned":""}`;
      return TR({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: Yu,
        fatal: !1,
        message: Ku,
        details: Eu
      })
    }

    function my(uu, Ru, yu) {
      return TR({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: uu,
        fatal: !1,
        message: `a ${uu} worker did not start`,
        details: {
          waitedMs: String(Math.round(Ru)),
          wasmBuild: yu.wasm,
          clientVersion: yu.client
        }
      })
    }

    function Jy(uu, Ru, yu) {
      return TR({
        kind: "recovered",
        code: "CORE-replayFault",
        site: uu,
        fatal: !1,
        message: `the replay's ${uu} failed`,
        details: {
          wasmBuild: yu.wasm,
          clientVersion: yu.client
        },
        error: Ru
      })
    }
    const Ny = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function Xy(uu, Ru, yu) {
      const Eu = "lost" === Ru && void 0 !== yu ? ` (${yu})` : "";
      return `the ${uu} ${Ny[Ru]}${Eu}`
    }
    const Vy = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };

    function ry(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now();
      const Ku = null === yu.boundAtMs ? "unbound" : `up${(0,Vu.d)(Eu-yu.boundAtMs)}`,
        Qu = null === yu.adapter ? "no adapter" : (0, Vu.f)(yu.adapter),
        mu = `${(0,Tu.g)()?"hidden":"visible"} ${Ku} ${Qu}${!0===yu.indirectHangs?" ih":""}`;
      if ("pipeline_failed" === uu) return `${uu} ${mu}`;
      const Ju = null === Ru || void 0 === Ru ? void 0 : Ru.message;
      return `${Ru instanceof Tu.d?"timeout":(0,Vu.j)("frames_refused"===uu,"string"===typeof Ju?Ju:"")} ${mu}`
    }
    const By = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function xy(uu, Ru, Eu) {
      var Qu, mu, Ju, Xu, Bu;
      let {
        cause: xu = "lost",
        error: Su,
        context: pu = Vy,
        session: Tu = By
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Wu = ry(xu, Su, pu),
        ju = {
          losses: String(Ru),
          cause: xu,
          detail: Wu,
          vendor: null !== (Qu = null === (mu = pu.adapter) || void 0 === mu ? void 0 : mu.vendor) && void 0 !== Qu ? Qu : "",
          architecture: null !== (Ju = null === (Xu = pu.adapter) || void 0 === Xu ? void 0 : Xu.architecture) && void 0 !== Ju ? Ju : "",
          indirectHangs: String(pu.indirectHangs),
          samples: String(Tu.samples),
          sunShadows: String(Tu.sunShadows),
          renderDistance: String(Tu.renderDistance),
          gpuFamily: null !== (Bu = (0, Ku.c)()) && void 0 !== Bu ? Bu : "",
          browser: (0, Nu.f)(),
          siteUsed: ru.v,
          wasmBuild: Eu.wasm,
          clientVersion: Eu.client
        },
        Hu = Xy(uu, xu),
        du = TR({
          kind: "recovered",
          code: "CORE-renderLost",
          site: wu,
          fatal: !1,
          message: Hu,
          details: ju,
          error: Su
        });
      return jR("ga", (async () => {
        const {
          logError: Ru
        } = await Promise.resolve().then((() => yu(2719))), Eu = `${Vu.c["webgpu"===uu?"WebGPU":"WebGL2"]}\n Error: ${Wu}`;
        Ru("warning", Eu), Ru("error", Eu)
      })), du
    }

    function Sy(uu, Ru) {
      var yu, Eu;
      const Ku = null === uu.name ? "TEXTURE-sources" : null === uu.url ? "TEXTURE-nourl" : uu.error instanceof Du.c ? `TEXTURE-${uu.error.status}` : "TEXTURE-network",
        Qu = null === uu.name ? "terrain textures could not load" : `terrain texture ${uu.name} could not load`,
        mu = {
          texture: null !== (yu = uu.name) && void 0 !== yu ? yu : "",
          url: null !== (Eu = uu.url) && void 0 !== Eu ? Eu : "",
          wasmBuild: Ru.wasm,
          clientVersion: Ru.client
        };
      return TR({
        kind: "terrainTexture",
        code: Ku,
        site: Wu.u,
        fatal: !1,
        message: Qu,
        details: mu,
        error: uu.error
      })
    }
    const py = {
      previewAnimations: {
        site: Zu,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: Pu,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function Ty(uu, Ru, yu, Eu) {
      const {
        site: Ku,
        prefix: Qu,
        name: mu
      } = py[uu], {
        stage: Ju,
        error: Nu
      } = yu;
      return TR({
        kind: uu,
        code: "decode" === Ju ? null === Nu ? `${Qu}-decode` : `${Qu}-trap` : Nu instanceof ku.e ? `${Qu}-${Nu.status}` : `${Qu}-network`,
        site: Ku,
        fatal: !1,
        message: "decode" === Ju ? `${mu} did not decode` : `${mu} could not load`,
        details: {
          url: Ru,
          wasmBuild: Eu.wasm,
          clientVersion: Eu.client
        },
        error: Nu
      })
    }
    const Wy = "staleBuild";

    function jy(uu, Ru, yu) {
      const Eu = {
          failedSite: uu.site,
          url: uu.url,
          from: uu.from,
          sameBuild: String(uu.from === Ru),
          reloadMs: String(Math.max(0, Date.now() - uu.at)),
          wasmBuild: yu.wasm,
          clientVersion: yu.client
        },
        Ku = `reloaded into a newer build after ${uu.site} failed to load: ${uu.error}`;
      return TR({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: Wy,
        fatal: !1,
        message: Ku,
        details: Eu
      })
    }
  },
  40553: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku,
      i: () => Eu
    });
    const Eu = 3e4;
    class Ku {
      constructor(uu) {
        this.Px = uu, this.waitedMs = 0, this.lastMs = null
      }
      frame(uu, Ru) {
        if (Ru) return !0;
        const yu = null === this.lastMs ? 0 : uu - this.lastMs;
        return this.lastMs = uu, yu <= 900 && (this.waitedMs += yu), !(this.waitedMs < Eu) && (this.Px(), !0)
      }
    }
  },
  4558: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu,
      d: () => Qu,
      g: () => Ku
    });
    var Eu = yu(4562);

    function Ku(uu) {
      return "none" !== uu
    }

    function Qu(uu, Ru) {
      if (!uu) return "none";
      switch (Ru) {
        case Eu.fb.Drawn:
          return "drawn";
        case Eu.fb.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function mu(uu) {
      return "drawn" === uu
    }
  },
  40173: (uu, Ru, yu) => {
    yu.d(Ru, {
      B: () => Su,
      e: () => Eu,
      g: () => Wu,
      i: () => pu,
      m: () => Tu,
      p: () => Bu,
      t: () => xu,
      v: () => Vu,
      z: () => ru
    });
    class Eu extends Error {
      constructor(uu) {
        super(`the join's code did not load: ${uu instanceof Error?uu.message:String(uu)}`, {
          cause: uu
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === uu || void 0 === uu ? void 0 : uu.request
      }
    }
    let Ku = null,
      Qu = null,
      mu = null;
    const Ju = [];
    let Nu = null;

    function Xu(uu, Ru) {
      try {
        uu(Ru)
      } catch (yu) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", yu)
      }
    }

    function Vu() {
      return Nu
    }

    function ru(uu) {
      Ju.push(uu), null !== Nu && Xu(uu, Nu)
    }

    function Bu(uu) {
      return Ku ??= Promise.all([yu.e(69), yu.e(94), yu.e(214), yu.e(74), yu.e(215), yu.e(189), yu.e(93), yu.e(259), yu.e(187), yu.e(262), yu.e(199), yu.e(186), yu.e(200), yu.e(136), yu.e(85), yu.e(114), yu.e(237), yu.e(53)]).then((() => yu(42130))).then((Ru => {
        Ru.loadAudio(uu), Nu = Ru;
        for (const uu of Ju) Xu(uu, Ru);
        return Ru
      })).catch((uu => {
        throw Ku = null, uu
      })), Ku
    }
    async function xu(uu, Ru) {
      try {
        const yu = await Bu(uu);
        await yu.loadClientGame(Ru)
      } catch (yu) {
        throw new Eu(yu)
      }
    }

    function Su(uu, Ru) {
      Qu = {
        running: uu,
        shell: Ru
      }
    }

    function pu() {
      return mu
    }
    async function Tu(uu) {
      const Ru = Qu;
      if ((null === Ru || void 0 === Ru ? void 0 : Ru.running) !== uu) throw new Error("the core's session has ended");
      const yu = await Bu(Ru.shell.audio).catch((uu => {
        throw new Eu(uu)
      }));
      if (null !== mu) return mu;
      if (Qu !== Ru || uu.isStopped) throw new Error("the core stopped while the game code loaded");
      if (mu = yu.startGameHost(uu, Ru.shell), null === mu) throw new Error("the core's shared tables didn't read, so the game can't start");
      return mu
    }

    function Wu() {
      null !== mu && (null !== Nu ? Nu.endGameHost(mu) : mu.closeGame()), mu = null, Qu = null
    }
  },
  40433: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Xu,
      c: () => Qu,
      e: () => mu,
      h: () => Ku,
      l: () => xu,
      n: () => Vu,
      o: () => Nu,
      s: () => Bu,
      v: () => ru,
      w: () => Ju
    });
    var Eu = yu(1707);
    const Ku = new Uint8Array([12]),
      Qu = 2e3,
      mu = 257;

    function Ju(uu) {
      const Ru = new Uint8Array(4);
      return new DataView(Ru.buffer).setUint32(0, uu, !0), Ru
    }
    class Nu extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class Xu extends Error {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(uu), this.stage = Ru, this.code = yu, this.serverText = Eu, this.name = "JoinError"
      }
    }
    class Vu extends Error {
      constructor(uu) {
        super(uu), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class ru extends Error {
      constructor(uu) {
        super((0, Eu.e)(uu), {
          cause: uu
        }), this.name = "TrafficCheckError"
      }
    }
    class Bu extends Error {
      constructor(uu, Ru, yu) {
        super(uu, {
          cause: yu
        }), this.networkLost = Ru, this.name = "SeatRequestError"
      }
    }
    class xu extends Error {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(uu), this.code = Ru, this.serverText = yu, this.name = "MatchmakeError"
      }
    }
  },
  40440: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Bu,
      f: () => ru
    });
    var Eu = yu(2481),
      Ku = yu(3282),
      Qu = yu(38818),
      mu = yu(40424),
      Ju = yu(40433),
      Nu = yu(40442);
    const Xu = "seat reservation expired.",
      Vu = "early_leave";

    function ru(uu) {
      if (uu instanceof Qu.i) return "expected";
      if (uu instanceof Ju.s) return uu.networkLost ? "expected" : "unrecognised";
      if (uu instanceof Ju.b) {
        if ("closed" === uu.stage && (0 === uu.code || (0, Ku.g)(uu.code))) return "expected";
        if ("roomError" === uu.stage && (uu.serverText === Xu || uu.serverText === Vu)) return "expected"
      }
      return uu instanceof Ju.b || uu instanceof Ju.l ? null === (0, mu.m)(uu.code).name ? "unrecognised" : "known" : (0, Eu.f)(uu) ? "expected" : uu instanceof Ju.v || uu instanceof Nu.i ? "known" : "unrecognised"
    }

    function Bu(uu) {
      return uu instanceof Qu.i ? "timedOut" : "expected" !== ru(uu) || (0, Eu.f)(uu) || uu instanceof Ju.b && 1001 === uu.code ? void 0 : "failed"
    }
  },
  40525: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Au,
      j: () => ru,
      k: () => bu,
      n: () => Wu,
      o: () => ku
    });
    var Eu = yu(36330),
      Ku = yu(36328);
    const Qu = 64 * Eu.d,
      mu = 40 * Eu.g,
      Ju = 36 * Eu.g,
      Nu = 20 * Eu.g,
      Xu = 2 * Eu.g,
      Vu = 5 * Eu.g;

    function ru(uu) {
      return "footprint" !== uu
    }
    const Bu = 2 * Eu.g,
      xu = 4 * Eu.g,
      Su = 35 * Eu.g + Bu + xu,
      pu = 6.5 * Eu.g,
      Tu = 132.5 * Eu.d;

    function Wu(uu) {
      const Ru = pu + (0, Ku.j)(uu) + uu * Tu;
      return Math.ceil((2 * Su + Ru) / Qu) * Qu
    }
    const ju = Wu(Ku.e),
      Hu = (Eu.g, Eu.g, Eu.g, {
        targetBytes: mu,
        leastBytes: Nu
      }),
      du = {
        targetBytes: Ju,
        leastBytes: Nu
      };

    function bu(uu) {
      return uu >= Ku.e ? Hu : du
    }
    const Cu = 2 * Qu;

    function ku(uu, Ru, yu) {
      return uu + Ru + Cu > (null !== yu && void 0 !== yu ? yu : ju)
    }
    const eu = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? uu => {
        requestIdleCallback(uu)
      } : null
    };
    class Au {
      constructor(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eu;
        this.memory = uu, this.readPeakStoredChunks = Ru, this.onError = yu, this.clock = Eu, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(uu, Ru, yu) {
        this.shedding = {
          shed: uu,
          Px: Ru,
          readDistanceInUse: yu
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(uu) {
        this.footprint = uu
      }
      setCeiling(uu) {
        this.ceilingBytes = uu, this.call((() => {
          this.memory.setCeiling(uu)
        }), void 0)
      }
      ceilingMayRefuse(uu) {
        return ku(this.memory.memoryBytes(), uu, this.ceilingBytes)
      }
      reserveAtJoin(uu) {
        let {
          targetBytes: Ru,
          leastBytes: yu
        } = uu;
        const Eu = this.memory.memoryBytes(),
          Ku = Eu + yu,
          Qu = Math.max(Ru + (this.ballastOn() ? Vu : 0), Ku),
          mu = this.call((() => this.memory.reserveUpFront(Qu) ? "target" : Qu > Ku && this.memory.reserveUpFront(Ku) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== mu) {
          const uu = "least" === mu ? `took ${Ku} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${Qu} bytes was refused at ${Eu} bytes; ${uu}`)
        }
        return this.joinReserveTaken = mu, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== mu && this.shedFor("joinReserve"), "none" !== mu
      }
      afterFrame() {
        if (this.stopped) return;
        const uu = this.clock.now(),
          Ru = null !== this.stepsHeldUntil && uu >= this.stepsHeldUntil;
        if (Ru && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && uu >= this.ballastCheckAt && (this.takeBallast(uu), this.stopped)) return;
        const yu = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          Eu = Ru && "now" === yu ? "none" : yu,
          {
            requestIdle: Ku
          } = this.clock;
        "now" === Eu || null !== this.pendingSince && uu - this.pendingSince >= 500 ? this.step() : "idle" === Eu && null === this.pendingSince && (null === Ku ? this.step() : (this.pendingSince = uu, Ku((() => {
          null !== this.pendingSince && this.step()
        })))), uu - this.statsAt >= 1e3 && (this.statsAt = uu, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var uu, Ru;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (Ru = this.shedding.readDistanceInUse()) && void 0 !== Ru ? Ru : this.distanceInUse);
          null === (uu = this.footprint) || void 0 === uu || uu.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(uu, Ru) {
        this.noteWorker(`Mesh${uu}`, Ru)
      }
      meshWorkerGone(uu) {
        this.workerGone(`Mesh${uu}`)
      }
      noteWorldgen(uu) {
        this.noteWorker("Worldgen", uu)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(uu, Ru) {
        const yu = this.workers.get(uu);
        null !== yu && void 0 !== yu && yu.gone && (this.replacedRefusals.reserves += yu.stats.reservesRefused, this.replacedRefusals.allocations += yu.stats.allocationsRefused), this.workers.set(uu, {
          stats: Ru,
          gone: !1
        })
      }
      workerGone(uu) {
        const Ru = this.workers.get(uu);
        Ru && (Ru.gone = !0)
      }
      details() {
        var uu, Ru;
        const yu = {
          wasmMemoryNow: `${(0,Eu.h)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (yu.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (yu.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const Ku = this.main;
        if (Ku) {
          yu.wasmMemoryMain = Du(Ku);
          const uu = Math.max(0, Ku.peakLiveBytes - this.ballastPeakBytes),
            Ru = 0 === this.peakStoredChunks ? "-" : (uu / this.peakStoredChunks / Eu.d).toFixed(1);
          yu.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${Ru} KiB`
        }
        for (const [Eu, {
            stats: mu,
            gone: Ju
          }] of this.workers) yu[`wasmMemory${Eu}`] = Du(mu) + (Ju ? " (gone)" : "");
        const Qu = null !== (uu = null === (Ru = this.footprint) || void 0 === Ru ? void 0 : Ru.describe()) && void 0 !== uu ? uu : null;
        return null !== Qu && (yu.wasmMemoryFootprint = Qu), yu
      }
      pageKillSnapshot() {
        var uu, Ru, yu, Ku, Qu;
        let mu = (null !== (uu = null === (Ru = this.main) || void 0 === Ru ? void 0 : Ru.reservesRefused) && void 0 !== uu ? uu : 0) + this.replacedRefusals.reserves,
          Ju = (null !== (yu = null === (Ku = this.main) || void 0 === Ku ? void 0 : Ku.allocationsRefused) && void 0 !== yu ? yu : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: Eu
          }
          of this.workers.values()) mu += Eu.reservesRefused, Ju += Eu.allocationsRefused;
        return {
          wasmMainMiB: Number((0, Eu.h)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, Eu.h)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: mu,
          refusedAllocations: Ju,
          sheds: this.sheds,
          ...null === (Qu = this.footprint) || void 0 === Qu ? void 0 : Qu.snapshot()
        }
      }
      workersMemoryBytes() {
        let uu = 0;
        for (const {
            stats: Ru,
            gone: yu
          }
          of this.workers.values()) uu += yu ? 0 : Ru.memoryBytes;
        return uu
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(Xu)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(uu) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = uu + 1e3;
        const Ru = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, Ru)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(uu) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${uu}: frames grow on demand from here`)
      }
      shedFor(uu) {
        const {
          shedding: Ru
        } = this;
        if (null === Ru) return;
        this.pendingSince = null;
        const yu = this.call((() => Ru.shed(uu)), null);
        this.stopped || (null !== yu ? (this.sheds++, this.shedCap = yu, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), Ru.Px(uu, this.sheds, this.details())) : ru(uu) && this.stopSteps("nothing is left to shed"))
      }
      call(uu, Ru) {
        if (this.stopped) return Ru;
        try {
          return uu()
        } catch (yu) {
          return this.stop(), this.onError(yu), Ru
        }
      }
    }

    function Du(uu) {
      const Ru = (uu, Ru) => `${uu}/${(0,Eu.h)(Ru)}`;
      return `memory ${(0,Eu.h)(uu.memoryBytes)} live ${(0,Eu.h)(uu.liveBytes)} peak ${(0,Eu.h)(uu.peakLiveBytes)} unused ${(0,Eu.h)(uu.unusedBytes)} ceiling ${(0,Eu.h)(uu.ceilingBytes)} MiB; grows upFront ${Ru(uu.grows.upFront,uu.grownBytes.upFront)} ahead ${Ru(uu.grows.ahead,uu.grownBytes.ahead)} inFrame ${Ru(uu.grows.onDemandInFrame,uu.grownBytes.onDemandInFrame)} other ${Ru(uu.grows.onDemand,uu.grownBytes.onDemand)}; refused reserves ${uu.reservesRefused} allocations ${uu.allocationsRefused}`
    }
  },
  40528: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Nu,
      e: () => Xu,
      f: () => xu,
      j: () => ru
    });
    var Eu = yu(3514),
      Ku = yu(4562),
      Qu = yu(40535),
      mu = yu(40544),
      Ju = yu(36176);
    const Nu = 395,
      Xu = 2147483648,
      Vu = new Uint8Array(0);
    class ru extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class Bu extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class xu {
      constructor(uu, Ru, yu) {
        var Eu, Ku, mu, Ju;
        let Nu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = uu, this.build = Ru, this.onFailure = yu, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.kx = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (Eu = Nu.fetchFile) && void 0 !== Eu ? Eu : uu => (0, Qu.i)(uu), this.onWritten = null !== (Ku = Nu.onWritten) && void 0 !== Ku ? Ku : null, this.onTaken = null !== (mu = Nu.onTaken) && void 0 !== mu ? mu : null, this.onPackFileFailed = null !== (Ju = Nu.onPackFileFailed) && void 0 !== Ju ? Ju : null, this.startupLeft = new Set(uu.startup);
        for (const Qu of uu.startup) this.request(Qu)
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
      drawnUrl(uu) {
        return this.drawn.get(uu)
      }
      request(uu) {
        const Ru = this.pending.get(uu);
        if (!0 === (null === Ru || void 0 === Ru ? void 0 : Ru.ask)) return;
        const yu = this.Kx(uu, !0);
        yu.recheck = void 0 !== Ru;
        const Eu = this.drawn.get(uu);
        if (void 0 !== Eu) return yu.jJ = !0, yu.recheck = !0, void this.fetch(uu, yu, Eu);
        this.fetchWanted(uu, yu)
      }
      async refresh() {
        const uu = ++this.refreshes,
          Ru = new Set;
        for (const mu of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const uu of mu) 0 === (uu & Qu.g) && Ru.add(uu);
        const yu = [...Ru];
        let Eu;
        try {
          Eu = await Promise.all(yu.map((uu => this.wanted(uu))))
        } catch {
          return null
        }
        if (uu !== this.refreshes) return null;
        const Ku = {
          resent: 0,
          refetched: 0,
          delivered: yu.filter((uu => this.drawn.has(uu))).length
        };
        return yu.forEach(((uu, Ru) => {
          const {
            url: yu,
            inPlaceOf: Qu
          } = Eu[Ru], mu = this.pending.get(uu);
          if (void 0 !== mu) {
            if (mu.jJ || void 0 === mu.url) return void(mu.recheck = !0);
            if (mu.url === yu) return;
            Ku.refetched++;
            const Ru = this.Kx(uu, mu.ask);
            return Ru.recheck = mu.recheck, void this.fetch(uu, Ru, yu, Qu)
          }
          const Ju = this.written.get(uu);
          void 0 === Ju ? this.drawn.get(uu) !== (null !== yu && void 0 !== yu ? yu : void 0) && (Ku.resent++, this.fetch(uu, this.Kx(uu, !1), yu, Qu)) : Ju.url !== (null !== yu && void 0 !== yu ? yu : "") && (Ju.attempt.recheck = !0)
        })), Ku
      }
      taken(uu, Ru) {
        const yu = new Set,
          Eu = new Set;
        for (const Ku of Array.from(Ru)) 0 === (Ku & Xu) ? yu.add(Ku) : Eu.add((Ku & ~Xu) >>> 0);
        for (const [Ku, Qu] of this.written) Qu.seq > uu || (this.written.delete(Ku), yu.has(Qu.seq) ? this.refusedFile(Ku, Qu) : this.takenFile(Ku, Qu, !Qu.empty && !Eu.has(Qu.seq)))
      }
      takenFile(uu, Ru, yu) {
        const {
          attempt: Eu
        } = Ru;
        if (yu) {
          var Ku;
          this.drawn.set(uu, Ru.url), this.undrawn.delete(uu), void 0 !== Eu.inPlaceOf ? this.refusedPack.set(uu, Eu.inPlaceOf) : Eu.jJ || this.refusedPack.delete(uu), null === (Ku = this.onTaken) || void 0 === Ku || Ku.call(this, uu, !0);
          const yu = this.pending.get(uu);
          if (!0 === (null === yu || void 0 === yu ? void 0 : yu.jJ) && yu.url !== Ru.url) {
            const yu = this.Kx(uu, !0);
            yu.jJ = !0, yu.recheck = !0, this.fetch(uu, yu, Ru.url)
          }
        } else {
          var Qu;
          this.drawn.has(uu) || this.undrawn.add(uu), null === (Qu = this.onTaken) || void 0 === Qu || Qu.call(this, uu, !1)
        }
        Eu.recheck && this.resendIfChanged(uu)
      }
      refusedFile(uu, Ru) {
        var yu, Eu;
        if (null === (yu = this.onTaken) || void 0 === yu || yu.call(this, uu, !1), this.refusedPack.set(uu, Ru.url), this.pending.has(uu)) return void(null === (Eu = this.onPackFileFailed) || void 0 === Eu || Eu.call(this, uu, Su(Ru.url)));
        const Ku = this.Kx(uu, Ru.attempt.ask);
        Ku.recheck = Ru.attempt.recheck, this.afterRefusal(uu, Ku, Ru.url)
      }
      async afterRefusal(uu, Ru, yu) {
        var Eu;
        let Ku;
        try {
          Ku = await this.wanted(uu)
        } catch (Qu) {
          return void(this.pending.get(uu) === Ru && this.giveUp(uu, Ru, yu, Qu))
        }
        this.pending.get(uu) === Ru && (Ku.inPlaceOf !== yu ? Ru.ask || (null !== (Eu = Ku.url) && void 0 !== Eu ? Eu : void 0) !== this.drawn.get(uu) ? this.fetch(uu, Ru, Ku.url, Ku.inPlaceOf) : this.pending.delete(uu) : this.fallBack(uu, Ru, yu, Su(yu)))
      }
      Kx(uu, Ru) {
        const yu = {
          url: void 0,
          ask: Ru,
          jJ: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(uu, yu);
        for (let Eu = this.ready.length - 1; Eu >= 0; Eu--) this.ready[Eu].file === uu && this.ready.splice(Eu, 1);
        return yu
      }
      async wanted(uu) {
        const Ru = await this.files.url(uu);
        return null !== Ru && this.refusedPack.get(uu) === Ru ? {
          url: await this.files.shippedUrl(uu),
          inPlaceOf: Ru
        } : {
          url: Ru,
          inPlaceOf: void 0
        }
      }
      fetchWanted(uu, Ru) {
        const yu = this.files.url(uu);
        yu instanceof Promise ? yu.then((yu => {
          this.fetchFound(uu, Ru, yu)
        }), (yu => {
          this.pending.get(uu) === Ru && this.giveUp(uu, Ru, "", yu)
        })) : this.fetchFound(uu, Ru, yu)
      }
      fetchFound(uu, Ru, yu) {
        null !== yu && this.refusedPack.get(uu) === yu ? Promise.resolve(this.files.shippedUrl(uu)).then((Eu => {
          this.fetch(uu, Ru, Eu, yu)
        }), (Eu => {
          this.pending.get(uu) === Ru && this.giveUp(uu, Ru, yu, Eu)
        })) : this.fetch(uu, Ru, yu)
      }
      fetch(uu, Ru, yu, Eu) {
        this.pending.get(uu) === Ru && (Ru.url = yu, Ru.inPlaceOf = Eu, null !== yu ? this.load(uu, Ru, yu) : this.buildFile(uu, Ru, "", Vu))
      }
      load(uu, Ru, yu) {
        const Eu = this.kx.get(uu);
        (null === Eu || void 0 === Eu ? void 0 : Eu.url) !== yu ? this.fetchFile(yu).then((Eu => {
          var Ku, Qu;
          this.pending.get(uu) === Ru && (this.keptTotal += Eu.byteLength - (null !== (Ku = null === (Qu = this.kx.get(uu)) || void 0 === Qu ? void 0 : Qu.glb.byteLength) && void 0 !== Ku ? Ku : 0), this.kx.set(uu, {
            url: yu,
            glb: Eu
          }), this.buildFile(uu, Ru, yu, Eu))
        }), (Eu => {
          this.pending.get(uu) === Ru && this.fallBack(uu, Ru, yu, Eu)
        })) : this.buildFile(uu, Ru, yu, Eu.glb)
      }
      buildFile(uu, Ru, yu, Eu) {
        let Ku = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const mu = Eu.byteLength > 0 && (0, Qu.l)(yu) ? (uu | Qu.e) >>> 0 : uu;
        this.queueRecord(uu, Ru, yu, Eu, this.build(mu, Eu), Ku)
      }
      queueRecord(uu, Ru, yu, Eu, Qu, Ju) {
        Qu.then((Qu => {
          if (this.pending.get(uu) !== Ru) return;
          if (Ku.w + (0, Ku.he)(Qu.byteLength) > Ku.Gc) return void this.ringRefused(uu, Ru, yu, new ru(`${pu(yu)}'s record is ${Qu.byteLength-mu.b} bytes, past the cmd ring's ${Ku.Gc}`), Ju);
          const Nu = {
            file: uu,
            url: yu,
            payload: Qu,
            glb: Eu,
            attempt: Ru
          };
          Ju ? this.ready.unshift(Nu) : this.ready.push(Nu)
        }))
      }
      async fallBack(uu, Ru, yu, Eu) {
        var Ku;
        let Qu = null,
          mu = Eu;
        try {
          Qu = await this.files.shippedUrl(uu)
        } catch (Ju) {
          mu = Ju
        }
        this.pending.get(uu) === Ru && (null !== Qu && Qu !== yu ? (null === (Ku = this.onPackFileFailed) || void 0 === Ku || Ku.call(this, uu, Eu), Ru.ask || this.drawn.get(uu) !== Qu ? (Ru.url = Qu, Ru.inPlaceOf = yu, this.load(uu, Ru, Qu)) : this.pending.delete(uu)) : this.giveUp(uu, Ru, yu, mu))
      }
      ringRefused(uu, Ru, yu, Eu) {
        let Ku = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, Qu.l)(yu) ? this.fallBack(uu, Ru, yu, Eu): this.giveUp(uu, Ru, yu, Eu, Ku)
      }
      giveUp(uu, Ru, yu, Ku) {
        let Qu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: uu,
          url: pu(yu),
          error: Ku,
          startup: this.startupLeft.has(uu)
        }), Ru.ask || !this.drawn.has(uu) ? (0, Eu.R)(Ku) ? this.queueRecord(uu, Ru, yu, Vu, Promise.resolve((0, mu.j)(uu, (0, Ju.k)(Ku))), Qu) : this.buildFile(uu, Ru, yu, Vu, Qu) : this.pending.delete(uu)
      }
      async resendIfChanged(uu) {
        var Ru;
        if (0 !== (uu & Qu.g)) return;
        let yu;
        try {
          yu = await this.wanted(uu)
        } catch {
          return
        }(null !== (Ru = yu.url) && void 0 !== Ru ? Ru : void 0) === this.drawn.get(uu) || this.pending.has(uu) || this.written.has(uu) || this.fetch(uu, this.Kx(uu, !1), yu.url, yu.inPlaceOf)
      }
      drain(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === uu) return;
        let yu = 0,
          Eu = 0;
        for (; Eu < this.ready.length && yu < 262144;) {
          const Ju = this.ready[Eu];
          if (this.written.has(Ju.file)) {
            Eu++;
            continue
          }
          const Vu = this.nextSeq;
          new DataView(Ju.payload.buffer, Ju.payload.byteOffset, Ju.payload.byteLength).setUint32(mu.d, Vu, !0);
          const Bu = Ju.attempt.jJ && Ju.glb.byteLength > 0 && this.drawn.get(Ju.file) === Ju.url;
          if (uu(Nu, Bu ? 1 : 0, Ju.payload)) {
            if (this.nextSeq = Vu >= Xu - 1 ? 1 : Vu + 1, this.ready.splice(Eu, 1), yu += Ju.payload.byteLength, this.pending.delete(Ju.file), this.startupLeft.delete(Ju.file), this.written.set(Ju.file, {
                seq: Vu,
                url: Ju.url,
                empty: 0 === Ju.glb.byteLength,
                attempt: Ju.attempt
              }), Ju.glb.byteLength > 0) try {
              var Ku;
              null === (Ku = this.onWritten) || void 0 === Ku || Ku.call(this, Ju.file, Ju.glb)
            } catch (Qu) {
              console.warn("ModelFeed: reading the file's images failed", Qu)
            }
          } else {
            if (null === Ru || 0 === Ju.glb.byteLength || Ru(Ju.payload.byteLength)) return;
            this.ready.splice(Eu, 1);
            const uu = new ru(`${pu(Ju.url)}'s record is ${Ju.payload.byteLength-mu.b} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(Ju.file, Ju.attempt, Ju.url, uu, !0)
          }
        }
      }
    }

    function Su(uu) {
      return new Bu(`presentation refused ${pu(uu)}`)
    }

    function pu(uu) {
      return uu.startsWith("data:") ? `${uu.slice(0,Math.min(Math.max(uu.indexOf(","),5),64))},...` : uu
    }
  },
  40535: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu,
      g: () => Qu,
      i: () => Vu,
      l: () => Ju,
      p: () => Xu,
      t: () => Nu
    });
    var Eu = yu(3514),
      Ku = yu(3005);
    const Qu = 2147483648,
      mu = 1073741824;

    function Ju(uu) {
      return uu.startsWith("data:")
    }

    function Nu(uu) {
      let {
        onTableFailed: Ru,
        packUrl: yu
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Eu = Xu();
      Eu.catch((uu => {
        null === Ru || void 0 === Ru || Ru(uu)
      }));
      const Ku = async Ru => (await Eu).fileUrl((Ru & ~Qu) >>> 0, uu);
      return {
        startup: [],
        url: async uu => {
          if (yu && 0 === (uu & Qu)) {
            const Ru = await Eu,
              Ku = Ru.filePackName(uu),
              Qu = null === Ku || "lifeform" === Ru.fileSource(uu) ? null : yu(Ku);
            if (null !== Qu) return Qu
          }
          return Ku(uu)
        },
        shippedUrl: Ku
      }
    }

    function Xu() {
      return yu.e(41).then((() => yu(42944)))
    }
    async function Vu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return uu.startsWith("data:") ? (0, Ku.d)(uu.slice(uu.indexOf(",") + 1), Ru) : (0, Eu.E)(uu, {
        spare: Ru
      })
    }
  },
  40544: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Xu,
      d: () => Vu,
      e: () => xu,
      i: () => Tu,
      j: () => Su,
      k: () => Bu,
      o: () => pu
    });
    const Eu = 826427981,
      Ku = 1,
      Qu = 2,
      mu = 44,
      Ju = 46,
      Nu = 58,
      Xu = 8,
      Vu = 4;

    function ru(uu, Ru, yu) {
      const Ku = (new TextEncoder).encode(yu),
        Qu = Xu + 4 * (Ru.length + 2),
        mu = new Uint8Array(Qu + (Ku.byteLength + 3 & -4)),
        Ju = new DataView(mu.buffer);
      return Ju.setUint32(0, uu, !0), Ju.setUint32(Xu, Eu, !0), Ru.forEach(((uu, Ru) => {
        Ju.setUint32(Xu + 4 * (Ru + 1), uu, !0)
      })), Ju.setUint32(Qu - 4, Ku.byteLength, !0), mu.set(Ku, Qu), mu
    }

    function Bu(uu, Ru) {
      return ru(uu, [Qu], Ru)
    }

    function xu(uu, Ru) {
      return ru(uu, [Ku, Ju], Ru)
    }

    function Su(uu, Ru) {
      return ru(uu, [Ku, Nu], Ru)
    }

    function pu(uu, Ru) {
      return ru(uu, [Ku, mu], Ru)
    }

    function Tu(uu) {
      const Ru = Xu;
      if (uu.byteLength < Ru + 12) return !1;
      const yu = new DataView(uu.buffer, uu.byteOffset, uu.byteLength);
      return yu.getUint32(Ru, !0) === Eu && yu.getUint32(Ru + 4, !0) === Ku && yu.getUint32(Ru + 8, !0) === mu
    }
  },
  40523: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => ju,
      f: () => Wu,
      j: () => Cu,
      l: () => bu,
      o: () => ku,
      q: () => pu
    });
    var Eu = yu(4564),
      Ku = yu(40405);
    const Qu = 18,
      mu = 19,
      Ju = 20,
      Nu = {
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
        [Qu]: "retry linked",
        [mu]: "fallback linked",
        [Ju]: "fallback failed",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function Xu(uu, Ru) {
      return uu === Qu ? "program retry" : uu === mu || uu === Ju ? `program fallback ${Ru}` : "program"
    }
    const Vu = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      ru = {
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
      Bu = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      xu = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld"
      },
      Su = {
        1280: "invalid enum",
        1281: "invalid value",
        1282: "invalid operation",
        1285: "out of memory",
        1286: "invalid framebuffer operation",
        37442: "context lost"
      };

    function pu(uu) {
      return String(uu).replace(/\d/g, (uu => String.fromCharCode(97 + Number(uu))))
    }

    function Tu(uu, Ru) {
      var yu;
      return null !== (yu = uu[Ru]) && void 0 !== yu ? yu : pu(Ru)
    }

    function Wu() {
      return pu((0, Ku.d)())
    }

    function ju(uu, Ru) {
      switch (uu) {
        case Eu.g.RenderSceneRowNotDrawn:
          return {
            words: ` ${Tu(ru,Ru)}`, instance: String(Ru), group: String(uu)
          };
        case Eu.g.RenderChunkMeshNotDrawn: {
          const yu = 0 === (128 & Ru) ? "" : " shortage",
            Eu = Ru >>> 8;
          return {
            words: ` ${Tu(Bu,127&Ru)}${yu}${0===Eu?"":` kind ${pu(Eu)}`}`,
            instance: String(Ru),
            group: String(uu)
          }
        }
        case Eu.g.RenderInternal: {
          const yu = Tu(Vu, 255 & Ru),
            Eu = Ru >>> 8 & 255;
          if (0 === Eu) return {
            words: ` ${yu}`,
            instance: String(Ru),
            group: String(uu)
          };
          const Ku = Tu(Nu, Eu),
            Qu = Ru >>> 16;
          return {
            words: ` ${yu} ${Ku} program ${pu(Qu)}`,
            instance: `${yu} ${Ku}`,
            group: Xu(Eu, yu),
            gpuDetails: {
              programFailure: Ku,
              program: String(Qu)
            }
          }
        }
        case Eu.g.RenderSerialLinks: {
          const yu = Tu(xu, Ru);
          return {
            words: ` ${yu}`,
            instance: String(Ru),
            group: String(uu),
            gpuDetails: {
              serialLinks: yu
            }
          }
        }
        case Eu.g.RenderGlErrorAfterRestore: {
          const yu = Tu(Su, 65535 & Ru),
            Eu = Ru >>> 16,
            Ku = 65535 !== Eu;
          return {
            words: ` ${yu}${Ku?` program ${pu(Eu)}`:""}`,
            instance: String(Ru),
            group: String(uu),
            gpuDetails: Ku ? {
              glError: yu,
              program: String(Eu)
            } : {
              glError: yu
            }
          }
        }
        default:
          return null
      }
    }
    const Hu = 2,
      du = new Map;

    function bu(uu) {
      let {
        group: Ru,
        instance: yu
      } = uu, Eu = du.get(Ru);
      return void 0 === Eu && (Eu = [], du.set(Ru, Eu)), !Eu.includes(yu) && (Eu.length >= Hu || (Eu.push(yu), !1))
    }

    function Cu() {
      return du.size > 0
    }

    function ku() {
      du.clear()
    }
  },
  40442: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Wu,
      i: () => ju,
      m: () => Tu,
      n: () => Cu
    });
    var Eu = yu(6418),
      Ku = yu(34),
      Qu = yu(4110),
      mu = yu(4564),
      Ju = yu(6412),
      Nu = yu(40444);

    function Xu(uu, Ru) {
      const yu = (0, Ju.d)(Ru.variants);
      return uu.setShaderPack(yu.variantFlags, yu.hooks, yu.moduleCodes, (0, Nu.B)(Ru.layers), Nu.p[Ru.vQ], Ru.keepCircleShadows)
    }
    const Vu = 0,
      ru = 1,
      Bu = 2,
      xu = "shaderPack:failedToCompile",
      Su = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      pu = new Set(["not_requested", "off_after_loss", "gpu_class_webgl"]);

    function Tu(uu, Ru) {
      var yu;
      const Eu = null !== (yu = null === uu || void 0 === uu ? void 0 : uu.reason) && void 0 !== yu ? yu : "none";
      return Su.has(Eu) ? {
        messageKey: Ru ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === Eu && "override" === (null === uu || void 0 === uu ? void 0 : uu.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: pu.has(Eu) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    const Wu = {
      messageKey: "shaderPack:failedDeviceGraphics",
      noAdapter: !1
    };
    class ju extends Error {
      constructor(uu) {
        super(`the shader pack can't run in this game: ${uu}`), this.messageKey = uu, this.name = "ShaderPackJoinError"
      }
    }
    const Hu = "strict";
    class du {
      constructor(uu) {
        this.deps = uu, this.pagePack = void 0, this.loaded = null, this.vQ = Hu, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = uu.load().catch((Ru => (uu.warn("the shader pack could not load: the game draws without it", Ru), {
          status: "none"
        }))).then((uu => (this.loaded = uu, "active" === uu.status && (this.handOverToPreviews(uu), null !== uu.harnessPolicy && (this.vQ = uu.harnessPolicy, this.handOver())), uu)))
      }
      async join(uu) {
        this.leave();
        const Ru = this.game,
          [yu, Ku] = await Promise.all([this.pagePack, this.policyOf(uu)]);
        if (Ru !== this.game || "none" === yu.status) return null;
        const Qu = "active" === yu.status ? yu.pack.variants : yu.variants,
          mu = (0, Eu.h)(Qu, Ku);
        if (mu && "active" === yu.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (mu) {
          const uu = this.cantRun(yu, Ku);
          if (null !== uu) return uu
        } else if ("blocked" === yu.status || null === this.deps.core) return null;
        return this.vQ = Ku, this.handOver(), mu && this.refused ? xu : (this.joined = !0, this.offInThisGame = !mu, null)
      }
      async replay(uu) {
        const Ru = await this.join(uu);
        null === Ru ? this.playable() : this.deps.failInGame(Ru)
      }
      cantRun(uu, Ru) {
        const {
          core: yu,
          noWebGpu: Eu
        } = this.deps;
        if ("blocked" === uu.status) {
          return "shaderPack:failedUnchecked" === uu.messageKey && null === yu && Eu.noAdapter ? Eu.messageKey : uu.messageKey
        }
        return this.refused || this.failedPolicies.has(Ru) ? xu : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var uu;
        return this.runsInJoinedGame() && "active" === (null === (uu = this.loaded) || void 0 === uu ? void 0 : uu.status) ? function(uu, Ru) {
          const yu = uu.filter((uu => (0, Eu.h)([uu], Ru))),
            Ku = uu => yu.some((Ru => Ru[uu]));
          return {
            sceneDepth: Ku("sceneDepth"),
            sunShadow: Ku("sunShadow"),
            airShadow: Ku("airShadow")
          }
        }(this.loaded.pack.variants, this.vQ) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(xu) : (null !== this.couldntRun ? this.notify(Qu.b, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.vQ) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(uu) {
        for (const {
            code: Ru,
            detail: yu
          }
          of uu)
          if (Ru === mu.g.RenderShaderPackNotRun) switch (255 & yu) {
            case Vu:
              this.refused = !0, this.failed();
              break;
            case ru:
              this.failedPolicies.add(this.vQ), this.failed();
              break;
            case Bu:
              this.failedModelPolicies.add(this.vQ), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(xu) : this.failedWhileJoining = !0)
      }
      fail(uu) {
        this.leave(), this.deps.failInGame(uu)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(uu, Ru) {
        const yu = this.game;
        this.deps.notify(uu, (() => yu === this.game && this.joined), Ru)
      }
      handOver() {
        var uu;
        const {
          core: Ru
        } = this.deps;
        null !== Ru && "active" === (null === (uu = this.loaded) || void 0 === uu ? void 0 : uu.status) && (Xu(Ru, {
          ...this.loaded.pack,
          vQ: this.vQ
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(uu) {
        let {
          pack: Ru,
          harnessPolicy: yu
        } = uu;
        const {
          previews: Eu
        } = this.deps;
        null !== Eu && Xu(Eu, {
          ...Ru,
          vQ: null !== yu && void 0 !== yu ? yu : Hu
        })
      }
      policyOf(uu) {
        return this.deps.policyOf(uu).catch((uu => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", uu), Hu)))
      }
    }
    const bu = "wasmShaderPackNotice";

    function Cu(uu, Ru, yu, Eu) {
      return Ku.k.subscribe(bu, (uu => {
        let {
          translationKey: Ru,
          stillCurrent: yu,
          reasonKey: Eu
        } = uu;
        yu() && Ku.k.Op("chat", (0, Qu.g)(Ru, Eu))
      })), new du({
        load: ku,
        policyOf: eu,
        core: uu,
        previews: Ru,
        noWebGpu: yu,
        notify: (uu, Ru, yu) => {
          const Eu = {
            translationKey: uu,
            stillCurrent: Ru,
            reasonKey: yu
          };
          Ku.k.Op(bu, Eu, !0)
        },
        failInGame: uu => {
          Ku.k.Op(Qu.c, uu)
        },
        warn: Eu
      })
    }
    async function ku() {
      const [{
        shaderPackPage: uu,
        harnessShaderPackMode: Ru
      }, {
        shaderPackTextures: Eu
      }] = await Promise.all([yu.e(129).then((() => yu(38963))), yu.e(130).then((() => yu(6407)))]), Ku = await uu.load();
      return "active" !== Ku.status ? Ku : {
        status: "active",
        pack: {
          variants: Ku.pack.variants,
          layers: Eu().layers,
          keepCircleShadows: Ku.pack.keepCircleShadows
        },
        harnessPolicy: Ru()
      }
    }
    async function eu(uu) {
      var Ru;
      const [{
        harnessShaderPackMode: Eu
      }, {
        getShaderPackPolicy: Ku
      }] = await Promise.all([yu.e(129).then((() => yu(38963))), yu.e(89).then((() => yu(40860)))]);
      return null !== (Ru = Eu()) && void 0 !== Ru ? Ru : Ku(uu)
    }
  },
  40559: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ju,
      e: () => Tu,
      f: () => Nu,
      g: () => Xu,
      j: () => Vu,
      k: () => Bu
    });
    var Eu = yu(40564),
      Ku = yu(40573);
    const Qu = "atlas:",
      mu = 3e4;
    class Ju extends Error {
      constructor(uu, Ru) {
        super(`fetching ${uu} answered HTTP ${Ru}`), this.url = uu, this.status = Ru, this.name = "TerrainTextureFetchError"
      }
    }

    function Nu(uu) {
      if (!uu.startsWith(Qu)) return null;
      const Ru = Number(uu.slice(Qu.length));
      return Number.isInteger(Ru) && Ru >= 0 ? Ru : null
    }
    async function Xu() {
      const uu = await yu.e(201).then((() => yu(34131)));
      return {
        atlasSheets: uu.blockAtlasUrls,
        texture: Ru => {
          var yu, Eu, Qu;
          return null !== (yu = null !== (Eu = null !== (Qu = uu.animatedBlockTextures[Ru]) && void 0 !== Qu ? Qu : uu.rotatedBlockTextures[Ru]) && void 0 !== Eu ? Eu : Ku.d[Ru]) && void 0 !== yu ? yu : null
        }
      }
    }
    async function Vu(uu) {
      const Ru = new AbortController,
        yu = setTimeout((() => {
          Ru.abort(new DOMException(`${uu} took over ${mu} ms`, "TimeoutError"))
        }), mu);
      let Eu;
      try {
        const yu = await fetch(uu, {
          signal: Ru.signal
        });
        if (!yu.ok) throw new Ju(uu, yu.status);
        Eu = await yu.blob()
      } finally {
        clearTimeout(yu)
      }
      const Ku = await createImageBitmap(Eu, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return Bu(Ku)
      } finally {
        Ku.close()
      }
    }
    const ru = 8192;

    function Bu(uu) {
      const {
        width: Ru,
        height: yu
      } = uu, Ku = Math.max(1, Math.min(yu, ru)), Qu = (0, Eu.f)(Ru, Ku, {
        willReadFrequently: !0
      });
      if (!Qu) throw new Error("no 2D context to read the texture back");
      Qu.globalCompositeOperation = "copy";
      const mu = new Uint8Array(Ru * yu * 4);
      for (let Eu = 0; Eu < yu; Eu += Ku) {
        const Ju = Math.min(Ku, yu - Eu);
        Qu.drawImage(uu, 0, Eu, Ru, Ju, 0, 0, Ru, Ju), mu.set(Qu.getImageData(0, 0, Ru, Ju).data, Eu * Ru * 4)
      }
      return {
        width: Ru,
        height: yu,
        pixels: mu
      }
    }
    async function xu(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Vu;
      const Eu = [],
        Ku = await Promise.all(uu.map((async uu => {
          var Ku, mu;
          const Ju = null !== (Ku = null === (mu = Ru.decoded) || void 0 === mu ? void 0 : mu.call(Ru, uu)) && void 0 !== Ku ? Ku : null,
            Xu = null === Ju ? function(uu, Ru) {
              if (uu.startsWith(Qu)) {
                var yu;
                const Eu = Nu(uu);
                return null === Eu ? null : null !== (yu = Ru.atlasSheets[Eu]) && void 0 !== yu ? yu : null
              }
              return Ru.texture(uu)
            }(uu, Ru) : null,
            Vu = null !== Ju && void 0 !== Ju ? Ju : null === Xu ? null : yu(Xu);
          if (null === Vu) return Eu.push({
            name: uu,
            url: Xu,
            error: new Error(`no URL for terrain texture ${uu}`)
          }), null;
          try {
            const Ru = await Vu;
            if (Ru.pixels.byteLength !== Ru.width * Ru.height * 4) throw new Error(`decoded ${Ru.pixels.byteLength} bytes for ${Ru.width}x${Ru.height} texels`);
            return {
              name: uu,
              texture: Ru
            }
          } catch (ru) {
            return Eu.push({
              name: uu,
              url: Xu,
              error: ru
            }), null
          }
        }))),
        mu = Ku.filter((uu => null !== uu)),
        Ju = new Uint32Array(2 * mu.length);
      mu.forEach(((uu, Ru) => {
        let {
          texture: yu
        } = uu;
        Ju[2 * Ru] = yu.width, Ju[2 * Ru + 1] = yu.height
      }));
      return {
        handOver: {
          names: mu.map((uu => {
            let {
              name: Ru
            } = uu;
            return Ru
          })),
          textures: mu.map((uu => {
            let {
              texture: Ru
            } = uu;
            return Ru.pixels
          })),
          sizes: Ju
        },
        failures: Eu
      }
    }
    const Su = [2e3, 1e4, 3e4, 6e4, 12e4];

    function pu() {}
    class Tu {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Su,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = uu, this.retryMs = Ru, this.keepBelow = yu, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xu,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Eu = ++this.started,
          Ku = {
            decode: yu.decode,
            wholeAtlas: yu.wholeAtlas
          };
        return this.loadAndHandOver(Ru, Ku, uu, (() => {
          var uu;
          return Eu < this.landed || !1 === (null === (uu = yu.wanted) || void 0 === uu ? void 0 : uu.call(yu))
        }), {
          onTaken: (uu, yu) => {
            this.landed = Eu, this.current = {
              mine: Eu,
              sources: Ru,
              load: Ku,
              kx: uu,
              failed: yu
            }
          }
        })
      }
      restore(uu) {
        var Ru;
        const yu = this.current;
        if (null === yu) return Promise.resolve(null);
        if ((null === (Ru = this.restoring) || void 0 === Ru ? void 0 : Ru.mine) === yu.mine) return this.restoring.done;
        const Eu = {
          mine: yu.mine,
          done: this.restoreLanded(yu, uu).finally((() => {
            this.restoring === Eu && (this.restoring = null)
          }))
        };
        return this.restoring = Eu, Eu.done
      }
      async restoreLanded(uu, Ru) {
        const yu = () => this.landed !== uu.mine,
          {
            kx: Eu
          } = uu;
        if (null !== Eu) return this.stopped() ? null : this.core.setTerrainTextures(Eu.names, Eu.textures, Eu.sizes);
        let Ku = Ru;
        for (let Qu = 0;; Qu++) {
          const Ru = this.retryMs.at(Qu),
            Eu = {
              allOrNothingExcept: void 0 === Ru ? void 0 : uu.failed
            },
            mu = await this.loadAndHandOver(uu.sources, uu.load, Ku, yu, Eu);
          if (!1 !== mu || void 0 === Ru || this.stopped()) return mu;
          if (Ku = pu, await new Promise((uu => {
              setTimeout(uu, Ru)
            })), yu()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(uu, Ru, yu, Eu) {
        let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const Qu = this.core.terrainTextureNames();
        var mu;
        if (0 === Qu.length) return null === (mu = Ku.onTaken) || void 0 === mu || mu.call(Ku, null, new Set), !0;
        let Ju, Xu;
        try {
          Ju = await uu(), Xu = await xu(Qu, Ju, Ru.decode)
        } catch (Tu) {
          return Eu() ? null : (yu({
            name: null,
            url: null,
            error: Tu
          }), !1)
        }
        if (Eu() || this.stopped()) return null;
        for (const Nu of Xu.failures) yu(Nu);
        const Vu = Ku.allOrNothingExcept;
        if (void 0 !== Vu && Xu.failures.some((uu => {
            let {
              name: Ru
            } = uu;
            return null === Ru || !Vu.has(Ru)
          })) || !0 === Ru.wholeAtlas && Xu.failures.some((uu => {
            let {
              name: Ru
            } = uu;
            return null === Ru || null !== Nu(Ru)
          }))) return !1;
        const {
          handOver: ru
        } = Xu, Bu = function(uu) {
          return uu.textures.reduce(((uu, Ru) => uu + Ru.byteLength), 0)
        }(ru) < this.keepBelow, Su = this.core.setTerrainTextures(ru.names, ru.textures, ru.sizes, Bu ? void 0 : () => {
          !async function(uu, Ru) {
            await Ru;
            for (const {
                buffer: Eu
              }
              of uu) {
              const uu = Eu;
              var yu;
              if (!uu.detached) null === (yu = uu.transfer) || void 0 === yu || yu.call(uu, 0)
            }
          }(ru.textures, Ju.heldUntil)
        });
        if (Su) {
          var pu;
          const uu = new Set(Xu.failures.flatMap((uu => {
            let {
              name: Ru
            } = uu;
            return null === Ru ? [] : [Ru]
          })));
          null === (pu = Ku.onTaken) || void 0 === pu || pu.call(Ku, Bu ? ru : null, uu)
        }
        return Su
      }
    }
  },
  36615: (uu, Ru, yu) => {
    function Eu(uu) {
      return "fetch" === uu || "timeout" === uu || "integrity" === uu ? "download" : "browser"
    }
    yu.d(Ru, {
      c: () => Ku,
      g: () => mu,
      i: () => Nu,
      k: () => Ju,
      o: () => Eu,
      r: () => Qu
    });
    const Ku = "https://discord.gg/playbloxd";

    function Qu(uu) {
      return "download" === uu ? {
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

    function mu(uu, Ru) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: Ru ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: uu.code
        },
        discordLink: Ru,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function Ju() {
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

    function Nu(uu, Ru, yu) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: yu ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: uu.reason
        },
        discordLink: null === uu.name,
        confirm: Ru ? "general:reconnect" : uu.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  6412: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => du,
      h: () => bu,
      l: () => ju,
      o: () => Wu
    });
    var Eu = yu(6418);
    const Ku = 6,
      Qu = 3,
      mu = 1,
      Ju = 2,
      Nu = 4,
      Xu = 8,
      Vu = 16,
      ru = 32,
      Bu = 64,
      xu = 128,
      Su = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function pu(uu) {
      if (!uu) return 0;
      const Ru = Su.indexOf(uu);
      if (Ru <= 0) throw new Error(`"${uu}" is not a shader pack hook function`);
      return Ru
    }

    function Tu(uu) {
      if (0 === uu) return null;
      const Ru = Su[uu];
      if (void 0 === Ru) throw new Error(`${uu} is not a shader pack hook function id`);
      return Ru
    }

    function Wu(uu) {
      const Ru = Eu.c.length;
      return {
        strict: uu >= Ru,
        program: Eu.c[uu % Ru]
      }
    }

    function ju(uu) {
      return Number(uu.strict) * Eu.c.length + Eu.c.indexOf(uu.program)
    }

    function Hu(uu) {
      return "" === uu ? [] : uu.split(" ")
    }

    function du(uu) {
      const Ru = {
        variantFlags: new Uint8Array(Ku),
        hooks: new Uint8Array(Ku * Qu),
        moduleCodes: Array(Ku).fill(""),
        reads: Array(2 * Ku).fill("")
      };
      for (const yu of uu) {
        const uu = ju(yu.key),
          Eu = (uu, Ru) => null === yu.hooks.surface || yu.reads.fragment.includes(uu) ? 0 : Ru;
        Ru.variantFlags[uu] = (yu.sceneDepth ? mu : 0) | (yu.movesVertices ? Ju : 0) | (yu.sunShadow ? Nu : 0) | (yu.airShadow ? Xu : 0) | (yu.discards ? Vu : 0) | Eu("localPosition", ru) | Eu("enchantSpeed", Bu) | Eu("enchantTier", xu), Ru.hooks[uu * Qu] = pu(yu.hooks.vertex), Ru.hooks[uu * Qu + 1] = pu(yu.hooks.surface), Ru.hooks[uu * Qu + 2] = pu(yu.hooks.light), Ru.moduleCodes[uu] = yu.moduleCode, Ru.reads[2 * uu] = yu.reads.vertex.join(" "), Ru.reads[2 * uu + 1] = yu.reads.fragment.join(" ")
      }
      return Ru
    }

    function bu(uu) {
      const {
        hooks: Ru,
        moduleCodes: yu,
        reads: Eu
      } = uu;
      return Array.from(uu.variantFlags, ((uu, Ku) => {
        const ru = Ku * Qu;
        return {
          key: Wu(Ku),
          hooks: {
            vertex: Tu(Ru[ru]),
            surface: Tu(Ru[ru + 1]),
            light: Tu(Ru[ru + 2])
          },
          moduleCode: yu[Ku],
          sceneDepth: 0 !== (uu & mu),
          sunShadow: 0 !== (uu & Nu),
          airShadow: 0 !== (uu & Xu),
          movesVertices: 0 !== (uu & Ju),
          discards: 0 !== (uu & Vu),
          reads: {
            vertex: Hu(Eu[2 * Ku]),
            fragment: Hu(Eu[2 * Ku + 1])
          }
        }
      }))
    }
  },
  40444: (uu, Ru, yu) => {
    yu.d(Ru, {
      B: () => pu,
      D: () => xu,
      F: () => Su,
      e: () => Ku,
      g: () => Eu,
      k: () => Bu,
      m: () => Vu,
      p: () => Tu,
      s: () => Qu,
      u: () => Ju,
      w: () => Nu,
      y: () => mu
    });
    const Eu = 3,
      Ku = 0,
      Qu = 1,
      mu = 2,
      Ju = {
        uniform: 3,
        WB: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Nu = 10,
      Xu = "BloxdPackInputs",
      Vu = "bloxdPackInputs",
      ru = [{
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
      Bu = 80;

    function xu() {
      const uu = ru.map((uu => {
        let {
          name: Ru,
          type: yu
        } = uu;
        return `    ${Ru}: ${yu},\n`
      })).join("");
      return `struct ${Xu} {\n${uu}}\n@group(${Eu}) @binding(${Ku}) var<uniform> ${Vu}: ${Xu};\n`
    }

    function Su(uu, Ru) {
      const yu = new DataView(uu, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Bu),
        [Eu, Ku, Qu, mu, Ju, Nu] = ru;
      yu.setFloat32(Eu.offset, Ru.seconds, !0), yu.setUint32(Ku.offset, Ru.lit ? 1 : 0, !0);
      for (let Xu = 0; Xu < 3; Xu++) yu.setInt32(Qu.offset + 4 * Xu, Ru.renderOffset[Xu], !0), yu.setFloat32(mu.offset + 4 * Xu, Ru.duu[Xu], !0), yu.setFloat32(Ju.offset + 4 * Xu, Ru.eyePosition[Xu], !0), yu.setFloat32(Nu.offset + 4 * Xu, Ru.shadowDirection[Xu], !0)
    }

    function pu(uu) {
      const Ru = new Uint32Array(Math.max(1, uu.length));
      return uu.forEach(((uu, yu) => {
        let {
          id: Eu,
          rotation: Ku
        } = uu;
        Ru[yu] = 65535 & Eu | (3 & Ku) << 16
      })), Ru
    }
    const Tu = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6418: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Eu,
      g: () => mu,
      h: () => Ju,
      i: () => Ku,
      j: () => Qu
    });
    const Eu = ["terrain", "liquid", "model"];

    function Ku() {
      const uu = [];
      for (const Ru of [!1, !0])
        for (const yu of Eu) uu.push({
          strict: Ru,
          program: yu
        });
      return uu
    }

    function Qu(uu) {
      return `${uu.strict?"strict":"allow"}.${uu.program}`
    }

    function mu(uu) {
      return !uu.hooks.vertex && !uu.hooks.surface && !uu.hooks.light
    }

    function Ju(uu, Ru) {
      return "off" !== Ru && (null === uu || uu.some((uu => uu.key.strict === ("strict" === Ru) && !mu(uu))))
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);