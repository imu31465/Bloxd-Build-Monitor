export const id = 86;
export const ids = [86];
export const modules = {
  38317: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU,
      f: () => qU,
      h: () => KU,
      k: () => TU,
      l: () => PU
    });
    const tU = "A valid external Instance reference no longer exists.",
      pU = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ];
    const EU = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function PU(UU, RU) {
      return UU ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(UU) {
        var RU;
        const gU = null !== (RU = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(UU)) && void 0 !== RU ? RU : /failed with ([A-Z][A-Z0-9_]+)/.exec(UU);
        return gU ? gU[1] : UU.includes(tU) ? "gpu_process_lost" : "other"
      }(RU)
    }

    function TU(UU) {
      return `${(null===UU||void 0===UU?void 0:UU.vendor)||"unknown vendor"} ${(null===UU||void 0===UU?void 0:UU.architecture)||"unknown architecture"}`
    }

    function qU(UU) {
      return cU(UU)[1]
    }

    function KU(UU) {
      return cU(UU)[2]
    }

    function cU(UU) {
      var RU;
      return null !== (RU = pU.find((RU => {
        let [gU] = RU;
        return UU < gU
      }))) && void 0 !== RU ? RU : pU[pU.length - 1]
    }
  },
  38621: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU,
      e: () => pU
    });
    const tU = 45e3;
    class pU extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  36058: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU,
      e: () => pU,
      h: () => EU
    });
    const tU = 1024,
      pU = 1024 * tU;

    function EU(UU) {
      return (UU / pU).toFixed(1)
    }
  },
  36050: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => EU,
      h: () => TU,
      j: () => PU,
      n: () => qU,
      p: () => KU
    });
    var tU = gU(189);
    const pU = 32 * gU(36058).e,
      EU = 6144,
      PU = 4608,
      TU = 512;

    function qU(UU) {
      return Math.floor(pU * UU / EU)
    }

    function KU(UU) {
      const RU = UU - Math.floor(UU / 6);
      let gU = tU.e.maxChunkHorizAddDistance,
        pU = tU.e.maxChunkVertAddDistance;
      if (cU(gU + 1, pU + 1) <= RU) return null;
      for (; cU(gU + 1, pU + 1) > RU && (gU > 0 || pU > 0);) gU > pU ? gU-- : pU--;
      return {
        horizontal: gU,
        vertical: pU
      }
    }

    function cU(UU, RU) {
      const gU = Math.max(UU, RU);
      let tU = 0;
      for (let pU = -gU; pU <= gU; pU++)
        for (let EU = -gU; EU <= gU; EU++)
          for (let PU = -gU; PU <= gU; PU++) GU(UU, RU, pU, EU, PU) && tU++;
      return tU
    }

    function GU(UU, RU, gU, tU, pU) {
      const EU = gU * gU + pU * pU;
      return UU === RU ? EU + tU * tU <= UU * UU : UU > RU ? Math.abs(tU) <= RU && EU + tU * tU <= UU * UU : EU <= UU * UU && EU + tU * tU <= RU * RU
    }
  },
  40244: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => pU,
      d: () => EU,
      g: () => TU,
      i: () => cU,
      j: () => qU,
      n: () => PU
    });
    var tU = gU(189);
    const pU = 3e3,
      EU = 15e3;

    function PU(UU) {
      const RU = UU.endsWith(tU.k);
      return {
        text: (RU ? UU.slice(0, -tU.k.length) : UU) || null,
        dropsCache: RU
      }
    }
    const TU = "Either your internet isn't working or this is a bug.";

    function qU(UU, RU) {
      const gU = cU(UU);
      return null !== gU.name && "" === tU.d[gU.name].text && null !== RU ? RU : gU.reason
    }
    const KU = "You were removed from the game.";

    function cU(UU) {
      var RU;
      let gU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const pU = null !== (RU = Object.keys(tU.d).find((RU => tU.d[RU].code === UU))) && void 0 !== RU ? RU : null;
      if (null === pU) return {
        code: UU,
        name: pU,
        reason: null !== gU && void 0 !== gU ? gU : `${TU}\nCode: ${UU}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: EU,
        canReconnect: PU = !1
      } = tU.d[pU], qU = UU === tU.d.outdatedVersion.code || UU === tU.d.loadRecaptchaError.code;
      return {
        code: UU,
        name: pU,
        reason: "" !== EU ? EU : null !== gU && void 0 !== gU ? gU : UU === tU.d.gameOrPluginKick.code ? KU : `Code: ${UU}`,
        canReconnect: PU,
        automaticallyReconnect: UU === tU.d.customGameUpdated.code || UU === tU.d.duplicateLobbyNameError.code,
        requiresRefresh: qU
      }
    }
  },
  4449: (UU, RU, gU) => {
    gU.d(RU, {
      B: () => BU,
      Bc: () => tU.V,
      Bd: () => QU,
      Cc: () => tU.X,
      Db: () => LU,
      Ec: () => tU.$,
      F: () => jR,
      Fd: () => TR,
      Gb: () => OU,
      Hc: () => tU.kb,
      Id: () => SU,
      J: () => NU,
      Jc: () => uR,
      Kb: () => RR,
      L: () => tU.e,
      Lb: () => pU.d,
      Ld: () => yU,
      Mb: () => wU,
      Nc: () => KR,
      Ob: () => dU,
      Oc: () => tR,
      Od: () => HU,
      P: () => KU,
      Pb: () => aU,
      Pc: () => tU.nb,
      Pd: () => iU,
      R: () => tU.g,
      Rc: () => tU.pb,
      Sc: () => tU.tb,
      Tb: () => oU,
      U: () => tU.j,
      Uc: () => lU,
      V: () => DU,
      Vd: () => kU,
      Wb: () => tU.J,
      Wc: () => tU.zb,
      Xd: () => zU,
      Z: () => tU.s,
      Zb: () => YU,
      Zc: () => tU.Db,
      _: () => tU.v,
      _d: () => AU,
      ab: () => tU.w,
      ac: () => mU,
      ae: () => PR,
      b: () => UR,
      bd: () => tU.Gb,
      c: () => hU,
      cb: () => GU,
      de: () => CR,
      ec: () => ER,
      ee: () => xU,
      f: () => CU,
      fb: () => WU,
      fd: () => tU.Lb,
      fe: () => MU,
      g: () => qR,
      gc: () => fU,
      hd: () => tU.Ob,
      ib: () => tU.x,
      ie: () => XU,
      j: () => nU,
      jb: () => tU.A,
      kb: () => sU,
      kc: () => cR,
      kd: () => tU.Rb,
      ke: () => rU,
      ld: () => bU,
      m: () => JU,
      md: () => tU.Tb,
      me: () => VU,
      ob: () => pR,
      oc: () => pU.i,
      p: () => tU.b,
      pe: () => qU,
      qc: () => eU,
      qd: () => tU.Xb,
      s: () => GR,
      sb: () => cU,
      te: () => vU,
      uc: () => gR,
      ud: () => tU.bc,
      vb: () => tU.B,
      w: () => ZU,
      wc: () => tU.R,
      we: () => hR,
      x: () => PU,
      xd: () => EU,
      zb: () => FU,
      zc: () => tU.S,
      ze: () => uU
    });
    var tU = gU(4456),
      pU = gU(2233);
    const EU = Math.round(1e3 / tU.bc),
      PU = 4,
      TU = 2;

    function qU() {
      return crypto.getRandomValues(new Uint32Array(TU))
    }
    const KU = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      cU = 16,
      GU = {
        Draws: 1,
        NetAll: 2
      },
      jU = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function uU(UU) {
      return (UU.nametagsHidden ? IU.NametagsHidden : 0) | (UU.crouchToggle ? IU.CrouchToggle : 0) | (UU.bhopDisabled ? IU.BhopDisabled : 0) | (UU.disableBobbing ? IU.DisableBobbing : 0) | (UU.ezTowering ? IU.EzTowering : 0) | (UU.ezBridging ? IU.EzBridging : 0) | (UU.showChunkBorders ? IU.ShowChunkBorders : 0)
    }
    const CU = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      hU = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      QU = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      eU = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      WU = 5,
      fU = 4294967295;

    function xU(UU) {
      return (UU.showFog ? jU.ShowFog : 0) | (UU.lighting ? jU.Lighting : 0) | (UU.chunkFade ? jU.ChunkFade : 0)
    }
    const mU = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      IU = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      JU = {
        Release: 1,
        KeepTouches: 2
      },
      wU = {
        Point: 1,
        Stamped: 2
      },
      nU = {
        Add: 1,
        Clear: 2
      },
      bU = 1,
      oU = 8,
      ZU = 16777215,
      aU = 4,
      YU = {
        Resume: 1
      },
      BU = {
        Held: 1
      };

    function VU(UU, RU) {
      return (UU | RU << 8) >>> 0
    }

    function rU(UU) {
      return 255 & UU
    }

    function XU(UU) {
      return UU >>> 8
    }

    function vU(UU) {
      return UU + 3 & -4
    }
    const dU = 16777216,
      HU = 20;
    const SU = 8,
      sU = 8,
      yU = 16777216,
      kU = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      FU = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      iU = 16,
      AU = {
        Lost: 0,
        Gone: 1
      },
      zU = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function MU(UU) {
      return UU === zU.WorldgenSeed || UU === zU.Generate
    }
    const DU = 4,
      LU = 99,
      NU = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      lU = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      OU = 12,
      UR = 16,
      RR = 4,
      gR = 12,
      tR = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      pR = 4,
      ER = 8,
      PR = 8,
      TR = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      qR = {
        Crit: 1,
        HitSelf: 2
      },
      KR = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      cR = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      GR = 12,
      jR = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      uR = 67108864;

    function CR(UU) {
      for (const [RU, gU] of Object.entries(tU.e))
        if (gU === UU) return RU;
      return `Unknown${UU}`
    }

    function hR(UU) {
      return {
        status: UU[tU.A.Status],
        lastError: UU[tU.A.LastError],
        lastErrorDetail: UU[tU.A.LastErrorDetail],
        errorCount: UU[tU.A.ErrorCount],
        frameIndex: UU[tU.A.FrameIndex],
        tickIndex: UU[tU.A.TickIndex],
        renderPending: UU[tU.A.RenderPending],
        firstView: UU[tU.A.FirstView],
        chunksCancelled: UU[tU.A.ChunksCancelled]
      }
    }
  },
  40022: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU,
      f: () => GU,
      g: () => TU,
      h: () => EU,
      k: () => pU,
      o: () => qU,
      r: () => cU
    });
    class tU extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function pU(UU) {
      return UU instanceof RangeError && /call stack/i.test(UU.message) || UU instanceof Error && "InternalError" === UU.name && /recursion/i.test(UU.message)
    }

    function EU(UU) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(UU))
    }
    const PU = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function TU(UU) {
      var RU;
      return UU instanceof WebAssembly.RuntimeError || UU instanceof tU || pU(UU) && PU.test(null !== (RU = UU.stack) && void 0 !== RU ? RU : "")
    }

    function qU(UU, RU) {
      if (TU(UU)) throw UU;
      console.error(RU, UU)
    }

    function KU(UU, RU, gU, pU, EU) {
      if (RU % pU !== 0 || RU + gU > UU.byteLength) throw new tU(`${EU}: ${gU} bytes at ${RU}, ${pU}-aligned, outside ${UU.byteLength} bytes of memory`)
    }

    function cU(UU, RU, gU, tU, pU) {
      return 0 === gU ? null : (KU(RU, gU, tU * UU.BYTES_PER_ELEMENT, UU.BYTES_PER_ELEMENT, pU), new UU(RU, gU, tU))
    }

    function GU(UU, RU, gU, tU, pU) {
      return 0 === RU ? null : (KU(UU, RU, gU, tU, pU), new DataView(UU, RU, gU))
    }
  },
  40382: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => tU
    });
    const tU = {
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
  40328: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => CU,
      f: () => hU,
      j: () => jU,
      l: () => GU
    });
    const tU = 2e3,
      pU = "unavailable";
    let EU = () => Promise.resolve().then((() => gU(2930))),
      PU = null,
      TU = null,
      qU = KU();

    function KU() {
      let UU = () => {};
      return {
        promise: new Promise((RU => {
          UU = () => {
            RU(null)
          }
        })),
        resolve: UU
      }
    }

    function cU() {
      if (null === PU) {
        const UU = EU();
        PU = UU, UU.then((RU => {
          PU === UU && (TU = RU)
        }), (() => {
          PU === UU && (PU = null)
        }))
      }
      return PU
    }

    function GU() {
      cU().catch((() => {}))
    }

    function jU() {
      qU.resolve()
    }

    function uU(UU, RU, gU, tU) {
      if (null === UU) return {
        errorKind: RU,
        fingerprint: pU,
        dedupe: `${RU}|${tU}`
      };
      const {
        fingerprint: EU
      } = UU.clientErrorKey(RU, gU, tU);
      return {
        errorKind: RU,
        fingerprint: EU,
        dedupe: EU
      }
    }

    function CU(UU, RU, gU, tU) {
      return null === TU ? tU ? (GU(), uU(null, UU, RU, gU)) : null : uU(TU, UU, RU, gU)
    }
    async function hU(UU, RU, gU) {
      let pU;
      const EU = new Promise((UU => {
        pU = setTimeout((() => {
          UU(null)
        }), tU)
      }));
      try {
        return uU(await Promise.race([cU(), EU, qU.promise]), UU, RU, gU)
      } catch {
        return uU(null, UU, RU, gU)
      } finally {
        clearTimeout(pU)
      }
    }
  },
  40319: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      BUILT_IN_ANIMATIONS_SITE: () => iU,
      CORE_ERRORS_SITE: () => rU,
      EVENT_OVERFLOW_SITE: () => FU,
      FIRST_VIEW_SITE: () => zU,
      JOIN_SITE: () => vU,
      LEAVE_SITE: () => dU,
      MODEL_FEED_SITE: () => HU,
      MODEL_POOL_SITE: () => SU,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => DU,
      NON_FATAL_REPORTS_PER_SESSION: () => cR,
      PREVIEW_ANIMATIONS_SITE: () => kU,
      RENDER_RELOAD_SITE: () => yU,
      TEXTURE_NAMES_SITE: () => sU,
      TEXTURE_PACK_FEED_SITE: () => AU,
      TurnstilePageError: () => HR,
      WASM_LOAD_SITE: () => XU,
      crashError: () => hR,
      crashReportsSettled: () => mR,
      flushCrashReports: () => fR,
      joinFailureCode: () => SR,
      lokiTransport: () => lU,
      modelFailureCode: () => zR,
      readTrap: () => wR,
      renderLossDetail: () => Gg,
      renderReloadMessage: () => Kg,
      reportCoreErrors: () => JR,
      reportCountedLoadFallback: () => vR,
      reportCrash: () => QR,
      reportDataLoadFailure: () => Qg,
      reportDisconnect: () => iR,
      reportDracoDecoderFailure: () => NR,
      reportEventOverflow: () => Ug,
      reportFirstViewNoTerrain: () => Eg,
      reportGpuFallback: () => rR,
      reportGpuWasmPopulation: () => XR,
      reportLightFault: () => gg,
      reportMemoryShed: () => pg,
      reportModelFailure: () => MR,
      reportModelPoolFailure: () => DR,
      reportModelsModuleRetry: () => LR,
      reportPageJoinFailure: () => yR,
      reportReconnectGaveUp: () => AR,
      reportRenderReload: () => ug,
      reportReplayFault: () => Tg,
      reportStaleBuildReload: () => Wg,
      reportStoppedCore: () => ZR,
      reportTerrainTextureFailure: () => Cg,
      reportTexturePackFeedLoadFailure: () => OR,
      reportUnstreamedCoreLoad: () => dR,
      reportUnsupportedFallback: () => BR,
      reportUnusedSeat: () => FR,
      reportWorkerLost: () => Rg,
      reportWorkerStartTimeout: () => Pg,
      reportWorldgenGaveUp: () => tg,
      reportWorldgenLoadFailure: () => lR,
      resetCrashReports: () => IR,
      setCrashBackend: () => ER,
      setCrashScreen: () => tR,
      setCrashTransport: () => RR,
      showCrash: () => oR,
      showJoinFailure: () => sR,
      showUnsupported: () => YR
    });
    var tU = gU(1064),
      pU = gU(263),
      EU = gU(2933),
      PU = gU(40328),
      TU = gU(4449),
      qU = gU(40331),
      KU = gU(3165),
      cU = gU(38317),
      GU = gU(135),
      jU = gU(663),
      uU = gU(131),
      CU = gU(3167),
      hU = gU(38621),
      QU = gU(1675),
      eU = gU(40295),
      WU = gU(39971),
      fU = gU(40253),
      xU = gU(40262),
      mU = gU(40340),
      IU = gU(3372),
      JU = gU(3377),
      wU = gU(40345),
      nU = gU(40365),
      bU = gU(40369),
      oU = gU(36392),
      ZU = gU(2942),
      aU = gU(35886),
      YU = gU(40177),
      BU = gU(35889);
    const VU = "[bloxd-wasm-client]",
      rU = "coreErrors",
      XU = "wasmLoad",
      vU = "join",
      dU = "leave",
      HU = "modelFeed",
      SU = "modelWorkerPool",
      sU = "textureNames",
      yU = "renderReload",
      kU = "previewAnimations",
      FU = "eventOverflow",
      iU = "builtInAnimations",
      AU = "texturePackFeed",
      zU = "firstView",
      MU = 300,
      DU = 8;
    let LU = 0;
    const NU = new Set,
      lU = (UU, RU) => {
        const gU = PR[UU.kind];
        if (null === gU) return void OU(UU, RU, pR, null);
        const tU = (0, PU.b)(gU, UU.message, UU.code, UU.fatal);
        if (null !== tU) return void OU(UU, RU, pR, tU);
        const pU = pR;
        WR("Loki", (async () => {
          OU(UU, RU, pU, await (0, PU.f)(gU, UU.message, UU.code))
        }))
      };

    function OU(UU, RU, gU, pU) {
      const {
        kind: PU,
        code: TU,
        site: qU,
        fatal: KU,
        details: cU
      } = UU;
      if (!KU)
        if (null === pU || (0, EU.e)(pU.errorKind) || NU.has(pU.dedupe)) {
          if (LU >= DU) return;
          LU++
        } else NU.add(pU.dedupe);
      const GU = {
        ...cU,
        kind: PU,
        code: TU,
        site: qU,
        fatal: String(KU),
        backend: gU
      };
      null !== pU && (GU.errorKind = pU.errorKind, GU.fingerprint = pU.fingerprint), RU instanceof Error && "string" === typeof RU.stack && (GU.causeStack = RU.stack.slice(0, 2e3)), (0, tU.Kh)(hR(UU, RU), GU)
    }
    let UR = lU;

    function RR(UU) {
      const RU = UR;
      return UR = UU, RU
    }
    let gR = () => {};

    function tR(UU) {
      const RU = gR;
      return gR = UU, RU
    }
    let pR = "unpicked";

    function ER(UU) {
      pR = UU
    }
    const PR = {
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
      TR = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        gpuFallback: "wasm_load"
      },
      qR = new Set(["unstreamedLoad"]);
    let KR = !1;
    const cR = 20,
      GR = new Map;
    let jR = 0,
      uR = 0;
    const CR = new Set;

    function hR(UU, RU) {
      const gU = Object.assign(new Error(`${UU.code}: ${UU.message}`), {
        name: "WasmClientCrash",
        cause: null !== RU && void 0 !== RU ? RU : void 0
      });
      return RU instanceof Error && RU.stack && (gU.stack = RU.stack), gU
    }

    function QR(UU) {
      var RU, tU;
      const {
        kind: pU,
        code: EU,
        site: PU,
        fatal: TU,
        message: qU,
        error: KU
      } = UU, cU = !1 !== UU.toTransport && !qR.has(pU), GU = !TU && cU, jU = {
        kind: pU,
        code: EU,
        site: PU,
        fatal: TU,
        message: qU,
        details: null !== (RU = UU.details) && void 0 !== RU ? RU : {}
      }, uU = `${EU}@${PU}${void 0===UU.instance?"":`#${UU.instance}`}${TU?"!":""}`, CU = (null !== (tU = GR.get(uU)) && void 0 !== tU ? tU : 0) + 1;
      if (GR.set(uU, CU), CU > 1 ? 0 === (CU & CU - 1) && eR((() => {
          console.warn(`${VU} ${EU} at ${PU} reported ${CU} times`)
        })) : GU && jR >= cR ? eR((() => {
          console.warn(`${VU} ${pU} ${EU} at ${PU}: ${qU} (not sent: the session's ${cR} went)`, jU.details, null !== KU && void 0 !== KU ? KU : "")
        })) : (GU && jR++, function(UU, RU, tU) {
          var pU, EU;
          const {
            kind: PU,
            code: TU,
            site: qU,
            fatal: KU,
            message: cU,
            details: GU
          } = UU;
          eR((() => {
            (KU ? console.error : console.warn)(`${VU} ${PU} ${TU} at ${qU}: ${cU}`, GU, null !== RU && void 0 !== RU ? RU : "")
          }));
          const jU = TR[PU],
            uU = null !== (pU = null !== (EU = PR[PU]) && void 0 !== EU ? EU : jU) && void 0 !== pU ? pU : null;
          null !== uU && WR("counts", (async () => {
            const {
              peekVisitSessionId: UU
            } = await Promise.resolve().then((() => gU(623)));
            if (null !== UU()) {
              const {
                reportCappedWasmFailure: UU,
                reportWasmFailure: RU
              } = await gU.e(207).then((() => gU(35883)));
              (void 0 === jU ? RU : UU)(uU, cU, TU), KR = !0
            }
          }));
          tU && eR((() => {
            UR(UU, RU)
          }))
        }(jU, KU, cU)), TU) {
        var hU;
        const RU = null !== (hU = UU.screen) && void 0 !== hU ? hU : {
          text: (0, oU.e)(jU, !0),
          reload: !0
        };
        eR((() => {
          gR(RU)
        }))
      }
      return jU
    }

    function eR(UU) {
      try {
        UU()
      } catch (RU) {
        try {
          console.warn(`${VU} could not send a report`, RU)
        } catch {}
      }
    }

    function WR(UU, RU) {
      try {
        const gU = RU().catch((RU => {
          console.warn(`${VU} could not send the report to ${UU}`, RU)
        })).finally((() => {
          CR.delete(gU)
        }));
        CR.add(gU)
      } catch (gU) {
        console.warn(`${VU} could not send the report to ${UU}`, gU)
      }
    }
    async function fR(UU) {
      let RU;
      (0, PU.j)();
      const gU = new Promise((gU => {
        RU = setTimeout(gU, UU)
      }));
      await Promise.race([xR(), gU]), clearTimeout(RU)
    }
    async function xR() {
      if (await Promise.allSettled([...CR]), KR) try {
        const {
          flushClientAnalyticsEvents: UU
        } = await Promise.resolve().then((() => gU(1457)));
        await UU()
      } catch (UU) {
        console.warn(`${VU} could not send the counts`, UU)
      }
    }
    async function mR() {
      for (; CR.size > 0;) await Promise.allSettled([...CR])
    }

    function IR() {
      GR.clear(), jR = 0, KR = !1, LU = 0, NU.clear(), uR = 0, (0, qU.m)()
    }

    function JR(UU, RU, gU, tU) {
      uR += RU;
      for (const {
          code: PU,
          detail: KU
        }
        of UU) {
        var pU, EU;
        const UU = (0, TU.de)(PU),
          RU = (0, qU.d)(PU, KU),
          cU = null === tU || void 0 === tU ? void 0 : tU(PU, KU),
          GU = void 0 !== (null === RU || void 0 === RU ? void 0 : RU.gpuDetails),
          jU = GU ? null === (pU = (0, uU.n)()) || void 0 === pU ? void 0 : pU.renderer : void 0,
          CU = GU ? ` ${(0,qU.e)()}` : "",
          hU = Array.from([jU && `gpu ${(0,qU.n)(jU)}`, cU].filter(Boolean).join("; ")).slice(0, MU).join(""),
          QU = `core error ${UU}${null!==(EU=null===RU||void 0===RU?void 0:RU.words)&&void 0!==EU?EU:""}${CU}${hU?`: ${hU}`:""}`,
          eU = {
            errorCode: String(PU),
            detail: String(KU),
            droppedBefore: String(uR),
            wasmBuild: gU.wasm,
            clientVersion: gU.client,
            ...null === RU || void 0 === RU ? void 0 : RU.gpuDetails
          };
        null !== RU && (0, qU.l)(RU) ? eR((() => {
          console.warn(`${VU} coreError CORE-${UU}: ${QU} (not sent: the session's render warnings of its kind went)`, eU)
        })) : QR({
          kind: PU === TU.L.JobsHeapGaveUp ? "meshHeap" : "coreError",
          code: `CORE-${UU}`,
          site: rU,
          fatal: !1,
          message: QU,
          details: eU,
          instance: null === RU || void 0 === RU ? void 0 : RU.instance
        })
      }
    }

    function wR(UU) {
      return (0, aU.m)(UU instanceof YU.d ? UU.trap : UU, IU.C, IU.X)
    }
    const nR = "declined=js";

    function bR(UU) {
      return UU ? {
        labels: [nR],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function oR(UU, RU, gU) {
      return aR(UU, RU, gU, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function ZR(UU, RU, gU) {
      return aR(UU, RU, gU, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function aR(UU, RU, gU, tU, pU) {
      let {
        memoryDetails: EU = {},
        declined: PU = !1
      } = tU;
      const {
        code: TU,
        details: qU,
        message: KU
      } = (0, eU.K)(UU, RU), cU = [];
      null !== gU && (qU.trapKind = gU.kind, null !== gU.panic && (qU.panic = (0, aU.j)(gU.panic)), gU.refusedBytes > 0 && (qU.refusedAllocation = String(gU.refusedBytes)), cU.push((0, aU.n)(gU.kind, gU.refusedBytes)));
      const GU = bR(PU);
      return QR({
        kind: "crash",
        code: TU,
        site: UU.site,
        fatal: pU,
        message: [...cU, ...GU.labels, KU].join("; "),
        details: {
          ...qU,
          ...GU.details,
          ...EU
        },
        error: UU.error
      })
    }

    function YR(UU, RU, gU) {
      return QR({
        kind: "unsupported",
        code: RU,
        site: XU,
        fatal: !0,
        message: gU,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: UU,
          status: RU
        },
        screen: {
          text: (0, oU.l)(UU),
          reload: "download" === UU
        }
      })
    }

    function BR(UU, RU, gU) {
      return QR({
        kind: "unsupportedFallback",
        code: "blockedAfterLoss" === RU ? "blocked_after_loss" : "unsupported_js_fallback",
        site: XU,
        fatal: !1,
        message: gU,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: UU,
          status: "unsupported",
          decline: RU,
          fallback: "js"
        }
      })
    }
    const VR = "misdrawn_gpu_js_fallback";

    function rR(UU, RU) {
      return QR({
        kind: "gpuFallback",
        code: VR,
        site: XU,
        fatal: !1,
        message: `the renderer plays ${UU} on ${RU} worse than the JS client`,
        details: {
          gpuFamily: UU,
          backend: RU,
          fallback: "js"
        }
      })
    }

    function XR(UU) {
      WR("counts", (async () => {
        await (0, jU.e)(UU), KR = !0
      }))
    }

    function vR(UU, RU, gU, tU) {
      const pU = bR(tU);
      return QR({
        kind: "unsupported",
        code: RU,
        site: XU,
        fatal: !1,
        message: [...pU.labels, gU].join("; "),
        details: {
          cause: UU,
          status: RU,
          fallback: "js",
          ...pU.details
        }
      })
    }

    function dR() {
      const {
        code: UU,
        message: RU
      } = ZU.c;
      return QR({
        kind: "unstreamedLoad",
        code: UU,
        site: XU,
        fatal: !1,
        message: RU
      })
    }
    class HR extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function SR(UU) {
      return UU instanceof fU.j ? 0 === UU.code ? "JOIN-matchmake" : `JOIN-${UU.code}` : UU instanceof fU.b ? 0 === UU.code ? `JOIN-${UU.stage}` : `JOIN-${UU.stage}-${UU.code}` : UU instanceof WU.d ? "JOIN-gameCode" : UU instanceof HR ? "JOIN-turnstilePage" : UU instanceof fU.w ? "JOIN-trafficCheck" : UU instanceof hU.e ? "JOIN-timeout" : "JOIN-network"
    }

    function sR(UU, RU) {
      const gU = (0, BU.j)(UU),
        tU = {
          wasmBuild: RU.wasm,
          clientVersion: RU.client
        },
        pU = UU instanceof HR ? {
          text: (0, oU.g)(),
          reload: !1
        } : void 0,
        EU = (0, xU.c)(UU),
        PU = "expected" !== EU;
      return QR({
        kind: "join",
        code: SR(UU),
        site: vU,
        fatal: !0,
        message: gU,
        details: tU,
        error: UU,
        screen: pU,
        toTransport: PU,
        instance: EU
      })
    }

    function yR(UU, RU, gU) {
      var tU;
      const pU = (0, xU.c)(UU),
        EU = {
          cause: (UU instanceof fU.b || UU instanceof fU.j) && null !== (tU = UU.serverText) && void 0 !== tU ? tU : "",
          sinceJoinStart: (0, CU.c)(gU.sinceJoinStartMs),
          game: gU.game,
          ...(0, CU.k)(),
          wasmBuild: RU.wasm,
          clientVersion: RU.client
        };
      return QR({
        kind: "pageJoin",
        code: SR(UU),
        site: vU,
        fatal: !1,
        message: (0, BU.j)(UU),
        details: EU,
        error: UU,
        toTransport: "unrecognised" === pU,
        instance: pU
      })
    }
    const kR = {
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

    function FR(UU, RU) {
      let {
        unused: gU,
        answered: tU,
        heldMs: pU
      } = UU;
      const {
        code: EU,
        message: PU
      } = kR[gU], TU = {
        unused: gU,
        answered: String(tU),
        heldMs: String(pU),
        wasmBuild: RU.wasm,
        clientVersion: RU.client
      };
      return QR({
        kind: "seat",
        code: EU,
        site: vU,
        fatal: !1,
        message: PU,
        details: TU
      })
    }

    function iR(UU, RU, gU) {
      var tU;
      let pU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (tU = UU.name) && void 0 !== tU ? tU : String(UU.code);
      const EU = {
          closeCode: String(UU.code),
          recognised: String(null !== UU.name),
          closeReason: gU.closeReason,
          sinceJoined: (0, CU.c)(gU.sinceJoinedMs),
          game: gU.game,
          ...(0, CU.k)(),
          wasmBuild: RU.wasm,
          clientVersion: RU.client
        },
        PU = null === UU.name && !(0, CU.d)(UU.code);
      return QR({
        kind: "disconnect",
        code: pU,
        site: dU,
        fatal: !1,
        message: "Left room",
        details: EU,
        toTransport: PU
      })
    }

    function AR(UU, RU) {
      const gU = {
        ...(0, KU.n)(UU),
        wasmBuild: RU.wasm,
        clientVersion: RU.client
      };
      return QR({
        kind: "disconnect",
        code: `reconnect-${UU.reason}`,
        site: vU,
        fatal: !1,
        message: "Reconnect failed",
        details: gU
      })
    }

    function zR(UU) {
      return UU.error instanceof JU.i ? `MODEL-${UU.error.status}` : UU.error instanceof wU.k ? "MODEL-ring" : "MODEL-network"
    }

    function MR(UU, RU) {
      const gU = zR(UU),
        tU = `model file ${UU.file} ${UU.startup?"(startup) ":""}could not load`,
        pU = {
          file: String(UU.file),
          url: UU.url,
          wasmBuild: RU.wasm,
          clientVersion: RU.client
        };
      return QR({
        kind: UU.startup ? "model" : "modelLate",
        code: gU,
        site: HU,
        fatal: UU.startup,
        message: tU,
        details: pU,
        error: UU.error
      })
    }

    function DR(UU, RU) {
      const gU = {
        wasmBuild: RU.wasm,
        clientVersion: RU.client
      };
      return QR({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: SU,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: gU,
        error: UU
      })
    }

    function LR(UU, RU, gU) {
      const tU = {
        delayMs: String(RU),
        wasmBuild: gU.wasm,
        clientVersion: gU.client
      };
      UU instanceof JU.i && (tU.status = String(UU.status));
      return QR({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: SU,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: tU,
        error: UU
      })
    }

    function NR(UU, RU) {
      const gU = {
        wasmBuild: RU.wasm,
        clientVersion: RU.client
      };
      return QR({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: SU,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: gU,
        error: UU
      })
    }

    function lR(UU, RU) {
      const gU = {
        wasmBuild: RU.wasm,
        clientVersion: RU.client
      };
      return QR({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: eU.F,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: gU,
        error: UU
      })
    }

    function OR(UU, RU) {
      const gU = {
        wasmBuild: RU.wasm,
        clientVersion: RU.client
      };
      return QR({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: AU,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: gU,
        error: UU
      })
    }

    function Ug(UU, RU) {
      const {
        frames: gU,
        acks: tU,
        mask: pU,
        outcome: EU
      } = UU, PU = {
        frames: String(gU),
        acks: String(tU),
        mask: String(pU),
        outcome: null !== EU && void 0 !== EU ? EU : "resynced",
        wasmBuild: RU.wasm,
        clientVersion: RU.client
      };
      return QR({
        kind: "recovered",
        code: "rejoined" === EU ? "CORE-eventOverflowRejoin" : "failed" === EU ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: FU,
        fatal: !1,
        message: `the event buffer refused records in ${gU} frames`,
        details: PU
      })
    }

    function Rg(UU, RU, gU) {
      return QR({
        kind: "recovered",
        code: "CORE-workerLost",
        site: UU,
        fatal: !1,
        message: `a ${UU} worker was lost`,
        details: {
          reason: RU,
          wasmBuild: gU.wasm,
          clientVersion: gU.client
        }
      })
    }

    function gg(UU, RU, gU) {
      const tU = {
        wasmBuild: gU.wasm,
        clientVersion: gU.client
      };
      return QR({
        kind: "recovered",
        code: UU,
        site: eU.r,
        fatal: !1,
        message: RU,
        details: tU
      })
    }

    function tg(UU, RU) {
      const gU = {
        lastReason: UU,
        wasmBuild: RU.wasm,
        clientVersion: RU.client
      };
      return QR({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: eU.F,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: gU
      })
    }

    function pg(UU, RU, gU) {
      return QR({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: eU.o,
        fatal: !1,
        message: (0, mU.j)(UU) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: UU,
          ...RU,
          wasmBuild: gU.wasm,
          clientVersion: gU.client
        }
      })
    }

    function Eg(UU, RU) {
      const gU = (0, qU.i)(),
        tU = {
          game: UU,
          renderWarned: String(gU),
          browser: (0, qU.e)(),
          wasmBuild: RU.wasm,
          clientVersion: RU.client
        },
        pU = `first view drew no whole terrain in ${nU.h/1e3} s${gU?", render warned":""}`;
      return QR({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: zU,
        fatal: !1,
        message: pU,
        details: tU
      })
    }

    function Pg(UU, RU, gU) {
      return QR({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: UU,
        fatal: !1,
        message: `a ${UU} worker did not start`,
        details: {
          waitedMs: String(Math.round(RU)),
          wasmBuild: gU.wasm,
          clientVersion: gU.client
        }
      })
    }

    function Tg(UU, RU, gU) {
      return QR({
        kind: "recovered",
        code: "CORE-replayFault",
        site: UU,
        fatal: !1,
        message: `the replay's ${UU} failed`,
        details: {
          wasmBuild: gU.wasm,
          clientVersion: gU.client
        },
        error: RU
      })
    }
    const qg = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function Kg(UU, RU, gU) {
      const tU = "lost" === RU && void 0 !== gU ? ` (${gU})` : "";
      return `the ${UU} ${qg[RU]}${tU}`
    }
    const cg = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };

    function Gg(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now();
      const pU = null === gU.boundAtMs ? "unbound" : `up${(0,cU.f)(tU-gU.boundAtMs)}`,
        EU = null === gU.adapter ? "no adapter" : (0, cU.k)(gU.adapter),
        PU = `${(0,QU.h)()?"hidden":"visible"} ${pU} ${EU}${!0===gU.indirectHangs?" ih":""}`;
      if ("pipeline_failed" === UU) return `${UU} ${PU}`;
      const TU = null === RU || void 0 === RU ? void 0 : RU.message;
      return `${RU instanceof QU.f?"timeout":(0,cU.l)("frames_refused"===UU,"string"===typeof TU?TU:"")} ${PU}`
    }
    const jg = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function ug(UU, RU, tU) {
      var EU, PU, TU, KU, jU;
      let {
        cause: uU = "lost",
        error: CU,
        context: hU = cg,
        session: QU = jg
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const eU = Gg(uU, CU, hU),
        WU = {
          losses: String(RU),
          cause: uU,
          detail: eU,
          vendor: null !== (EU = null === (PU = hU.adapter) || void 0 === PU ? void 0 : PU.vendor) && void 0 !== EU ? EU : "",
          architecture: null !== (TU = null === (KU = hU.adapter) || void 0 === KU ? void 0 : KU.architecture) && void 0 !== TU ? TU : "",
          indirectHangs: String(hU.indirectHangs),
          samples: String(QU.samples),
          sunShadows: String(QU.sunShadows),
          renderDistance: String(QU.renderDistance),
          gpuFamily: null !== (jU = (0, pU.c)()) && void 0 !== jU ? jU : "",
          browser: (0, qU.e)(),
          siteUsed: GU.t,
          wasmBuild: tU.wasm,
          clientVersion: tU.client
        },
        fU = Kg(UU, uU),
        xU = QR({
          kind: "recovered",
          code: "CORE-renderLost",
          site: yU,
          fatal: !1,
          message: fU,
          details: WU,
          error: CU
        });
      return WR("ga", (async () => {
        const {
          logError: RU
        } = await Promise.resolve().then((() => gU(2644))), tU = `${cU.c["webgpu"===UU?"WebGPU":"WebGL2"]}\n Error: ${eU}`;
        RU("warning", tU), RU("error", tU)
      })), xU
    }

    function Cg(UU, RU) {
      var gU, tU;
      const pU = null === UU.name ? "TEXTURE-sources" : null === UU.url ? "TEXTURE-nourl" : UU.error instanceof bU.c ? `TEXTURE-${UU.error.status}` : "TEXTURE-network",
        EU = null === UU.name ? "terrain textures could not load" : `terrain texture ${UU.name} could not load`,
        PU = {
          texture: null !== (gU = UU.name) && void 0 !== gU ? gU : "",
          url: null !== (tU = UU.url) && void 0 !== tU ? tU : "",
          wasmBuild: RU.wasm,
          clientVersion: RU.client
        };
      return QR({
        kind: "terrainTexture",
        code: pU,
        site: eU.C,
        fatal: !1,
        message: EU,
        details: PU,
        error: UU.error
      })
    }
    const hg = {
      previewAnimations: {
        site: kU,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: iU,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function Qg(UU, RU, gU, tU) {
      const {
        site: pU,
        prefix: EU,
        name: PU
      } = hg[UU], {
        stage: TU,
        error: qU
      } = gU;
      return QR({
        kind: UU,
        code: "decode" === TU ? null === qU ? `${EU}-decode` : `${EU}-trap` : qU instanceof JU.i ? `${EU}-${qU.status}` : `${EU}-network`,
        site: pU,
        fatal: !1,
        message: "decode" === TU ? `${PU} did not decode` : `${PU} could not load`,
        details: {
          url: RU,
          wasmBuild: tU.wasm,
          clientVersion: tU.client
        },
        error: qU
      })
    }
    const eg = "staleBuild";

    function Wg(UU, RU, gU) {
      const tU = {
          failedSite: UU.site,
          url: UU.url,
          from: UU.from,
          sameBuild: String(UU.from === RU),
          reloadMs: String(Math.max(0, Date.now() - UU.at)),
          wasmBuild: gU.wasm,
          clientVersion: gU.client
        },
        pU = `reloaded into a newer build after ${UU.site} failed to load: ${UU.error}`;
      return QR({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: eg,
        fatal: !1,
        message: pU,
        details: tU
      })
    }
  },
  40365: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => pU,
      h: () => tU
    });
    const tU = 3e4;
    class pU {
      constructor(UU) {
        this.ku = UU, this.waitedMs = 0, this.lastMs = null
      }
      frame(UU, RU) {
        if (RU) return !0;
        const gU = null === this.lastMs ? 0 : UU - this.lastMs;
        return this.lastMs = UU, gU <= 900 && (this.waitedMs += gU), !(this.waitedMs < tU) && (this.ku(), !0)
      }
    }
  },
  4446: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU,
      f: () => EU,
      j: () => pU
    });
    var tU = gU(4449);

    function pU(UU) {
      return "none" !== UU
    }

    function EU(UU, RU) {
      if (!UU) return "none";
      switch (RU) {
        case tU.ab.Drawn:
          return "drawn";
        case tU.ab.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function PU(UU) {
      return "drawn" === UU
    }
  },
  39971: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU,
      e: () => eU,
      i: () => hU,
      j: () => QU,
      m: () => jU,
      p: () => uU,
      q: () => cU,
      r: () => GU,
      s: () => CU
    });
    class tU extends Error {
      constructor(UU) {
        super(`the join's code did not load: ${UU instanceof Error?UU.message:String(UU)}`, {
          cause: UU
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === UU || void 0 === UU ? void 0 : UU.request
      }
    }
    let pU = null,
      EU = null,
      PU = null;
    const TU = [];
    let qU = null;

    function KU(UU, RU) {
      try {
        UU(RU)
      } catch (gU) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", gU)
      }
    }

    function cU() {
      return qU
    }

    function GU(UU) {
      TU.push(UU), null !== qU && KU(UU, qU)
    }

    function jU(UU) {
      return pU ??= Promise.all([gU.e(69), gU.e(94), gU.e(214), gU.e(74), gU.e(215), gU.e(189), gU.e(93), gU.e(259), gU.e(187), gU.e(262), gU.e(199), gU.e(186), gU.e(200), gU.e(136), gU.e(85), gU.e(114), gU.e(237), gU.e(53)]).then((() => gU(41917))).then((RU => {
        RU.loadAudio(UU), qU = RU;
        for (const UU of TU) KU(UU, RU);
        return RU
      })).catch((UU => {
        throw pU = null, UU
      })), pU
    }
    async function uU(UU, RU) {
      try {
        const gU = await jU(UU);
        await gU.loadClientGame(RU)
      } catch (gU) {
        throw new tU(gU)
      }
    }

    function CU(UU, RU) {
      EU = {
        running: UU,
        shell: RU
      }
    }

    function hU() {
      return PU
    }
    async function QU(UU) {
      const RU = EU;
      if ((null === RU || void 0 === RU ? void 0 : RU.running) !== UU) throw new Error("the core's session has ended");
      const gU = await jU(RU.shell.audio).catch((UU => {
        throw new tU(UU)
      }));
      if (null !== PU) return PU;
      if (EU !== RU || UU.isStopped) throw new Error("the core stopped while the game code loaded");
      if (PU = gU.startGameHost(UU, RU.shell), null === PU) throw new Error("the core's shared tables didn't read, so the game can't start");
      return PU
    }

    function eU() {
      null !== PU && (null !== qU ? qU.endGameHost(PU) : PU.closeGame()), PU = null, EU = null
    }
  },
  40253: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => KU,
      d: () => EU,
      e: () => PU,
      f: () => pU,
      j: () => uU,
      m: () => cU,
      p: () => qU,
      t: () => jU,
      w: () => GU,
      y: () => TU
    });
    var tU = gU(1681);
    const pU = new Uint8Array([12]),
      EU = 2e3,
      PU = 257;

    function TU(UU) {
      const RU = new Uint8Array(4);
      return new DataView(RU.buffer).setUint32(0, UU, !0), RU
    }
    class qU extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class KU extends Error {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(UU), this.stage = RU, this.code = gU, this.serverText = tU, this.name = "JoinError"
      }
    }
    class cU extends Error {
      constructor(UU) {
        super(UU), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class GU extends Error {
      constructor(UU) {
        super((0, tU.g)(UU), {
          cause: UU
        }), this.name = "TrafficCheckError"
      }
    }
    class jU extends Error {
      constructor(UU, RU, gU) {
        super(UU, {
          cause: gU
        }), this.networkLost = RU, this.name = "SeatRequestError"
      }
    }
    class uU extends Error {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(UU), this.code = RU, this.serverText = gU, this.name = "MatchmakeError"
      }
    }
  },
  40262: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => jU,
      c: () => GU
    });
    var tU = gU(2401),
      pU = gU(3167),
      EU = gU(38621),
      PU = gU(40244),
      TU = gU(40253),
      qU = gU(40265);
    const KU = "seat reservation expired.",
      cU = "early_leave";

    function GU(UU) {
      if (UU instanceof EU.e) return "expected";
      if (UU instanceof TU.t) return UU.networkLost ? "expected" : "unrecognised";
      if (UU instanceof TU.b) {
        if ("closed" === UU.stage && (0 === UU.code || (0, pU.d)(UU.code))) return "expected";
        if ("roomError" === UU.stage && (UU.serverText === KU || UU.serverText === cU)) return "expected"
      }
      return UU instanceof TU.b || UU instanceof TU.j ? null === (0, PU.i)(UU.code).name ? "unrecognised" : "known" : (0, tU.h)(UU) ? "expected" : UU instanceof TU.w || UU instanceof qU.c ? "known" : "unrecognised"
    }

    function jU(UU) {
      return UU instanceof EU.e ? "timedOut" : "expected" !== GU(UU) || (0, tU.h)(UU) || UU instanceof TU.b && 1001 === UU.code ? void 0 : "failed"
    }
  },
  40340: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => nU,
      j: () => GU,
      n: () => mU,
      r: () => eU,
      u: () => JU
    });
    var tU = gU(36058),
      pU = gU(36050);
    const EU = 64 * tU.d,
      PU = 40 * tU.e,
      TU = 36 * tU.e,
      qU = 20 * tU.e,
      KU = 2 * tU.e,
      cU = 5 * tU.e;

    function GU(UU) {
      return "footprint" !== UU
    }
    const jU = 2 * tU.e,
      uU = 4 * tU.e,
      CU = 35 * tU.e + jU + uU,
      hU = 6.5 * tU.e,
      QU = 132.5 * tU.d;

    function eU(UU) {
      const RU = hU + (0, pU.n)(UU) + UU * QU;
      return Math.ceil((2 * CU + RU) / EU) * EU
    }
    const WU = eU(pU.e),
      fU = (tU.e, tU.e, tU.e, {
        targetBytes: PU,
        leastBytes: qU
      }),
      xU = {
        targetBytes: TU,
        leastBytes: qU
      };

    function mU(UU) {
      return UU >= pU.e ? fU : xU
    }
    const IU = 2 * EU;

    function JU(UU, RU, gU) {
      return UU + RU + IU > (null !== gU && void 0 !== gU ? gU : WU)
    }
    const wU = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? UU => {
        requestIdleCallback(UU)
      } : null
    };
    class nU {
      constructor(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wU;
        this.memory = UU, this.readPeakStoredChunks = RU, this.onError = gU, this.clock = tU, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(UU, RU, gU) {
        this.shedding = {
          shed: UU,
          ku: RU,
          readDistanceInUse: gU
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(UU) {
        this.footprint = UU
      }
      setCeiling(UU) {
        this.ceilingBytes = UU, this.call((() => {
          this.memory.setCeiling(UU)
        }), void 0)
      }
      ceilingMayRefuse(UU) {
        return JU(this.memory.memoryBytes(), UU, this.ceilingBytes)
      }
      reserveAtJoin(UU) {
        let {
          targetBytes: RU,
          leastBytes: gU
        } = UU;
        const tU = this.memory.memoryBytes(),
          pU = tU + gU,
          EU = Math.max(RU + (this.ballastOn() ? cU : 0), pU),
          PU = this.call((() => this.memory.reserveUpFront(EU) ? "target" : EU > pU && this.memory.reserveUpFront(pU) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== PU) {
          const UU = "least" === PU ? `took ${pU} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${EU} bytes was refused at ${tU} bytes; ${UU}`)
        }
        return this.joinReserveTaken = PU, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== PU && this.shedFor("joinReserve"), "none" !== PU
      }
      afterFrame() {
        if (this.stopped) return;
        const UU = this.clock.now(),
          RU = null !== this.stepsHeldUntil && UU >= this.stepsHeldUntil;
        if (RU && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && UU >= this.ballastCheckAt && (this.takeBallast(UU), this.stopped)) return;
        const gU = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          tU = RU && "now" === gU ? "none" : gU,
          {
            requestIdle: pU
          } = this.clock;
        "now" === tU || null !== this.pendingSince && UU - this.pendingSince >= 500 ? this.step() : "idle" === tU && null === this.pendingSince && (null === pU ? this.step() : (this.pendingSince = UU, pU((() => {
          null !== this.pendingSince && this.step()
        })))), UU - this.statsAt >= 1e3 && (this.statsAt = UU, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var UU, RU;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (RU = this.shedding.readDistanceInUse()) && void 0 !== RU ? RU : this.distanceInUse);
          null === (UU = this.footprint) || void 0 === UU || UU.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(UU, RU) {
        this.noteWorker(`Mesh${UU}`, RU)
      }
      meshWorkerGone(UU) {
        this.workerGone(`Mesh${UU}`)
      }
      noteWorldgen(UU) {
        this.noteWorker("Worldgen", UU)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(UU, RU) {
        const gU = this.workers.get(UU);
        null !== gU && void 0 !== gU && gU.gone && (this.replacedRefusals.reserves += gU.stats.reservesRefused, this.replacedRefusals.allocations += gU.stats.allocationsRefused), this.workers.set(UU, {
          stats: RU,
          gone: !1
        })
      }
      workerGone(UU) {
        const RU = this.workers.get(UU);
        RU && (RU.gone = !0)
      }
      details() {
        var UU, RU;
        const gU = {
          wasmMemoryNow: `${(0,tU.h)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (gU.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (gU.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const pU = this.main;
        if (pU) {
          gU.wasmMemoryMain = bU(pU);
          const UU = Math.max(0, pU.peakLiveBytes - this.ballastPeakBytes),
            RU = 0 === this.peakStoredChunks ? "-" : (UU / this.peakStoredChunks / tU.d).toFixed(1);
          gU.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${RU} KiB`
        }
        for (const [tU, {
            stats: PU,
            gone: TU
          }] of this.workers) gU[`wasmMemory${tU}`] = bU(PU) + (TU ? " (gone)" : "");
        const EU = null !== (UU = null === (RU = this.footprint) || void 0 === RU ? void 0 : RU.describe()) && void 0 !== UU ? UU : null;
        return null !== EU && (gU.wasmMemoryFootprint = EU), gU
      }
      pageKillSnapshot() {
        var UU, RU, gU, pU, EU;
        let PU = (null !== (UU = null === (RU = this.main) || void 0 === RU ? void 0 : RU.reservesRefused) && void 0 !== UU ? UU : 0) + this.replacedRefusals.reserves,
          TU = (null !== (gU = null === (pU = this.main) || void 0 === pU ? void 0 : pU.allocationsRefused) && void 0 !== gU ? gU : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: tU
          }
          of this.workers.values()) PU += tU.reservesRefused, TU += tU.allocationsRefused;
        return {
          wasmMainMiB: Number((0, tU.h)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, tU.h)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: PU,
          refusedAllocations: TU,
          sheds: this.sheds,
          ...null === (EU = this.footprint) || void 0 === EU ? void 0 : EU.snapshot()
        }
      }
      workersMemoryBytes() {
        let UU = 0;
        for (const {
            stats: RU,
            gone: gU
          }
          of this.workers.values()) UU += gU ? 0 : RU.memoryBytes;
        return UU
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(KU)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(UU) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = UU + 1e3;
        const RU = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, RU)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(UU) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${UU}: frames grow on demand from here`)
      }
      shedFor(UU) {
        const {
          shedding: RU
        } = this;
        if (null === RU) return;
        this.pendingSince = null;
        const gU = this.call((() => RU.shed(UU)), null);
        this.stopped || (null !== gU ? (this.sheds++, this.shedCap = gU, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), RU.ku(UU, this.sheds, this.details())) : GU(UU) && this.stopSteps("nothing is left to shed"))
      }
      call(UU, RU) {
        if (this.stopped) return RU;
        try {
          return UU()
        } catch (gU) {
          return this.stop(), this.onError(gU), RU
        }
      }
    }

    function bU(UU) {
      const RU = (UU, RU) => `${UU}/${(0,tU.h)(RU)}`;
      return `memory ${(0,tU.h)(UU.memoryBytes)} live ${(0,tU.h)(UU.liveBytes)} peak ${(0,tU.h)(UU.peakLiveBytes)} unused ${(0,tU.h)(UU.unusedBytes)} ceiling ${(0,tU.h)(UU.ceilingBytes)} MiB; grows upFront ${RU(UU.grows.upFront,UU.grownBytes.upFront)} ahead ${RU(UU.grows.ahead,UU.grownBytes.ahead)} inFrame ${RU(UU.grows.onDemandInFrame,UU.grownBytes.onDemandInFrame)} other ${RU(UU.grows.onDemand,UU.grownBytes.onDemand)}; refused reserves ${UU.reservesRefused} allocations ${UU.allocationsRefused}`
    }
  },
  40345: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => qU,
      g: () => KU,
      h: () => uU,
      k: () => GU
    });
    var tU = gU(3377),
      pU = gU(4449),
      EU = gU(40352),
      PU = gU(40358),
      TU = gU(35889);
    const qU = 395,
      KU = 2147483648,
      cU = new Uint8Array(0);
    class GU extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class jU extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class uU {
      constructor(UU, RU, gU) {
        var tU, pU, PU, TU;
        let qU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = UU, this.build = RU, this.onFailure = gU, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.xu = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (tU = qU.fetchFile) && void 0 !== tU ? tU : UU => (0, EU.h)(UU), this.onWritten = null !== (pU = qU.onWritten) && void 0 !== pU ? pU : null, this.onTaken = null !== (PU = qU.onTaken) && void 0 !== PU ? PU : null, this.onPackFileFailed = null !== (TU = qU.onPackFileFailed) && void 0 !== TU ? TU : null, this.startupLeft = new Set(UU.startup);
        for (const EU of UU.startup) this.request(EU)
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
      drawnUrl(UU) {
        return this.drawn.get(UU)
      }
      request(UU) {
        const RU = this.pending.get(UU);
        if (!0 === (null === RU || void 0 === RU ? void 0 : RU.ask)) return;
        const gU = this.pu(UU, !0);
        gU.recheck = void 0 !== RU;
        const tU = this.drawn.get(UU);
        if (void 0 !== tU) return gU.WT = !0, gU.recheck = !0, void this.fetch(UU, gU, tU);
        this.fetchWanted(UU, gU)
      }
      async refresh() {
        const UU = ++this.refreshes,
          RU = new Set;
        for (const PU of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const UU of PU) 0 === (UU & EU.e) && RU.add(UU);
        const gU = [...RU];
        let tU;
        try {
          tU = await Promise.all(gU.map((UU => this.wanted(UU))))
        } catch {
          return null
        }
        if (UU !== this.refreshes) return null;
        const pU = {
          resent: 0,
          refetched: 0,
          delivered: gU.filter((UU => this.drawn.has(UU))).length
        };
        return gU.forEach(((UU, RU) => {
          const {
            url: gU,
            inPlaceOf: EU
          } = tU[RU], PU = this.pending.get(UU);
          if (void 0 !== PU) {
            if (PU.WT || void 0 === PU.url) return void(PU.recheck = !0);
            if (PU.url === gU) return;
            pU.refetched++;
            const RU = this.pu(UU, PU.ask);
            return RU.recheck = PU.recheck, void this.fetch(UU, RU, gU, EU)
          }
          const TU = this.written.get(UU);
          void 0 === TU ? this.drawn.get(UU) !== (null !== gU && void 0 !== gU ? gU : void 0) && (pU.resent++, this.fetch(UU, this.pu(UU, !1), gU, EU)) : TU.url !== (null !== gU && void 0 !== gU ? gU : "") && (TU.attempt.recheck = !0)
        })), pU
      }
      taken(UU, RU) {
        const gU = new Set,
          tU = new Set;
        for (const pU of Array.from(RU)) 0 === (pU & KU) ? gU.add(pU) : tU.add((pU & ~KU) >>> 0);
        for (const [pU, EU] of this.written) EU.seq > UU || (this.written.delete(pU), gU.has(EU.seq) ? this.refusedFile(pU, EU) : this.takenFile(pU, EU, !EU.empty && !tU.has(EU.seq)))
      }
      takenFile(UU, RU, gU) {
        const {
          attempt: tU
        } = RU;
        if (gU) {
          var pU;
          this.drawn.set(UU, RU.url), this.undrawn.delete(UU), void 0 !== tU.inPlaceOf ? this.refusedPack.set(UU, tU.inPlaceOf) : tU.WT || this.refusedPack.delete(UU), null === (pU = this.onTaken) || void 0 === pU || pU.call(this, UU, !0);
          const gU = this.pending.get(UU);
          if (!0 === (null === gU || void 0 === gU ? void 0 : gU.WT) && gU.url !== RU.url) {
            const gU = this.pu(UU, !0);
            gU.WT = !0, gU.recheck = !0, this.fetch(UU, gU, RU.url)
          }
        } else {
          var EU;
          this.drawn.has(UU) || this.undrawn.add(UU), null === (EU = this.onTaken) || void 0 === EU || EU.call(this, UU, !1)
        }
        tU.recheck && this.resendIfChanged(UU)
      }
      refusedFile(UU, RU) {
        var gU, tU;
        if (null === (gU = this.onTaken) || void 0 === gU || gU.call(this, UU, !1), this.refusedPack.set(UU, RU.url), this.pending.has(UU)) return void(null === (tU = this.onPackFileFailed) || void 0 === tU || tU.call(this, UU, CU(RU.url)));
        const pU = this.pu(UU, RU.attempt.ask);
        pU.recheck = RU.attempt.recheck, this.afterRefusal(UU, pU, RU.url)
      }
      async afterRefusal(UU, RU, gU) {
        var tU;
        let pU;
        try {
          pU = await this.wanted(UU)
        } catch (EU) {
          return void(this.pending.get(UU) === RU && this.giveUp(UU, RU, gU, EU))
        }
        this.pending.get(UU) === RU && (pU.inPlaceOf !== gU ? RU.ask || (null !== (tU = pU.url) && void 0 !== tU ? tU : void 0) !== this.drawn.get(UU) ? this.fetch(UU, RU, pU.url, pU.inPlaceOf) : this.pending.delete(UU) : this.fallBack(UU, RU, gU, CU(gU)))
      }
      pu(UU, RU) {
        const gU = {
          url: void 0,
          ask: RU,
          WT: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(UU, gU);
        for (let tU = this.ready.length - 1; tU >= 0; tU--) this.ready[tU].file === UU && this.ready.splice(tU, 1);
        return gU
      }
      async wanted(UU) {
        const RU = await this.files.url(UU);
        return null !== RU && this.refusedPack.get(UU) === RU ? {
          url: await this.files.shippedUrl(UU),
          inPlaceOf: RU
        } : {
          url: RU,
          inPlaceOf: void 0
        }
      }
      fetchWanted(UU, RU) {
        const gU = this.files.url(UU);
        gU instanceof Promise ? gU.then((gU => {
          this.fetchFound(UU, RU, gU)
        }), (gU => {
          this.pending.get(UU) === RU && this.giveUp(UU, RU, "", gU)
        })) : this.fetchFound(UU, RU, gU)
      }
      fetchFound(UU, RU, gU) {
        null !== gU && this.refusedPack.get(UU) === gU ? Promise.resolve(this.files.shippedUrl(UU)).then((tU => {
          this.fetch(UU, RU, tU, gU)
        }), (tU => {
          this.pending.get(UU) === RU && this.giveUp(UU, RU, gU, tU)
        })) : this.fetch(UU, RU, gU)
      }
      fetch(UU, RU, gU, tU) {
        this.pending.get(UU) === RU && (RU.url = gU, RU.inPlaceOf = tU, null !== gU ? this.load(UU, RU, gU) : this.buildFile(UU, RU, "", cU))
      }
      load(UU, RU, gU) {
        const tU = this.xu.get(UU);
        (null === tU || void 0 === tU ? void 0 : tU.url) !== gU ? this.fetchFile(gU).then((tU => {
          var pU, EU;
          this.pending.get(UU) === RU && (this.keptTotal += tU.byteLength - (null !== (pU = null === (EU = this.xu.get(UU)) || void 0 === EU ? void 0 : EU.glb.byteLength) && void 0 !== pU ? pU : 0), this.xu.set(UU, {
            url: gU,
            glb: tU
          }), this.buildFile(UU, RU, gU, tU))
        }), (tU => {
          this.pending.get(UU) === RU && this.fallBack(UU, RU, gU, tU)
        })) : this.buildFile(UU, RU, gU, tU.glb)
      }
      buildFile(UU, RU, gU, tU) {
        let pU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const PU = tU.byteLength > 0 && (0, EU.j)(gU) ? (UU | EU.d) >>> 0 : UU;
        this.queueRecord(UU, RU, gU, tU, this.build(PU, tU), pU)
      }
      queueRecord(UU, RU, gU, tU, EU, TU) {
        EU.then((EU => {
          if (this.pending.get(UU) !== RU) return;
          if (pU.p + (0, pU.te)(EU.byteLength) > pU.Jc) return void this.ringRefused(UU, RU, gU, new GU(`${hU(gU)}'s record is ${EU.byteLength-PU.e} bytes, past the cmd ring's ${pU.Jc}`), TU);
          const qU = {
            file: UU,
            url: gU,
            payload: EU,
            glb: tU,
            attempt: RU
          };
          TU ? this.ready.unshift(qU) : this.ready.push(qU)
        }))
      }
      async fallBack(UU, RU, gU, tU) {
        var pU;
        let EU = null,
          PU = tU;
        try {
          EU = await this.files.shippedUrl(UU)
        } catch (TU) {
          PU = TU
        }
        this.pending.get(UU) === RU && (null !== EU && EU !== gU ? (null === (pU = this.onPackFileFailed) || void 0 === pU || pU.call(this, UU, tU), RU.ask || this.drawn.get(UU) !== EU ? (RU.url = EU, RU.inPlaceOf = gU, this.load(UU, RU, EU)) : this.pending.delete(UU)) : this.giveUp(UU, RU, gU, PU))
      }
      ringRefused(UU, RU, gU, tU) {
        let pU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, EU.j)(gU) ? this.fallBack(UU, RU, gU, tU): this.giveUp(UU, RU, gU, tU, pU)
      }
      giveUp(UU, RU, gU, pU) {
        let EU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: UU,
          url: hU(gU),
          error: pU,
          startup: this.startupLeft.has(UU)
        }), RU.ask || !this.drawn.has(UU) ? (0, tU.Q)(pU) ? this.queueRecord(UU, RU, gU, cU, Promise.resolve((0, PU.n)(UU, (0, TU.j)(pU))), EU) : this.buildFile(UU, RU, gU, cU, EU) : this.pending.delete(UU)
      }
      async resendIfChanged(UU) {
        var RU;
        if (0 !== (UU & EU.e)) return;
        let gU;
        try {
          gU = await this.wanted(UU)
        } catch {
          return
        }(null !== (RU = gU.url) && void 0 !== RU ? RU : void 0) === this.drawn.get(UU) || this.pending.has(UU) || this.written.has(UU) || this.fetch(UU, this.pu(UU, !1), gU.url, gU.inPlaceOf)
      }
      drain(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === UU) return;
        let gU = 0,
          tU = 0;
        for (; tU < this.ready.length && gU < 262144;) {
          const TU = this.ready[tU];
          if (this.written.has(TU.file)) {
            tU++;
            continue
          }
          const cU = this.nextSeq;
          new DataView(TU.payload.buffer, TU.payload.byteOffset, TU.payload.byteLength).setUint32(PU.g, cU, !0);
          const jU = TU.attempt.WT && TU.glb.byteLength > 0 && this.drawn.get(TU.file) === TU.url;
          if (UU(qU, jU ? 1 : 0, TU.payload)) {
            if (this.nextSeq = cU >= KU - 1 ? 1 : cU + 1, this.ready.splice(tU, 1), gU += TU.payload.byteLength, this.pending.delete(TU.file), this.startupLeft.delete(TU.file), this.written.set(TU.file, {
                seq: cU,
                url: TU.url,
                empty: 0 === TU.glb.byteLength,
                attempt: TU.attempt
              }), TU.glb.byteLength > 0) try {
              var pU;
              null === (pU = this.onWritten) || void 0 === pU || pU.call(this, TU.file, TU.glb)
            } catch (EU) {
              console.warn("ModelFeed: reading the file's images failed", EU)
            }
          } else {
            if (null === RU || 0 === TU.glb.byteLength || RU(TU.payload.byteLength)) return;
            this.ready.splice(tU, 1);
            const UU = new GU(`${hU(TU.url)}'s record is ${TU.payload.byteLength-PU.e} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(TU.file, TU.attempt, TU.url, UU, !0)
          }
        }
      }
    }

    function CU(UU) {
      return new jU(`presentation refused ${hU(UU)}`)
    }

    function hU(UU) {
      return UU.startsWith("data:") ? `${UU.slice(0,Math.min(Math.max(UU.indexOf(","),5),64))},...` : UU
    }
  },
  40352: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU,
      e: () => EU,
      h: () => cU,
      j: () => TU,
      l: () => KU,
      o: () => qU
    });
    var tU = gU(3377),
      pU = gU(2902);
    const EU = 2147483648,
      PU = 1073741824;

    function TU(UU) {
      return UU.startsWith("data:")
    }

    function qU(UU) {
      let {
        onTableFailed: RU,
        packUrl: gU
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const tU = KU();
      tU.catch((UU => {
        null === RU || void 0 === RU || RU(UU)
      }));
      const pU = async RU => (await tU).fileUrl((RU & ~EU) >>> 0, UU);
      return {
        startup: [],
        url: async UU => {
          if (gU && 0 === (UU & EU)) {
            const RU = await tU,
              pU = RU.filePackName(UU),
              EU = null === pU || "lifeform" === RU.fileSource(UU) ? null : gU(pU);
            if (null !== EU) return EU
          }
          return pU(UU)
        },
        shippedUrl: pU
      }
    }

    function KU() {
      return gU.e(41).then((() => gU(42691)))
    }
    async function cU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return UU.startsWith("data:") ? (0, pU.e)(UU.slice(UU.indexOf(",") + 1), RU) : (0, tU.H)(UU, {
        spare: RU
      })
    }
  },
  40358: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => KU,
      g: () => cU,
      j: () => uU,
      k: () => QU,
      n: () => CU,
      p: () => jU,
      t: () => hU
    });
    const tU = 826427981,
      pU = 1,
      EU = 2,
      PU = 44,
      TU = 46,
      qU = 58,
      KU = 8,
      cU = 4;

    function GU(UU, RU, gU) {
      const pU = (new TextEncoder).encode(gU),
        EU = KU + 4 * (RU.length + 2),
        PU = new Uint8Array(EU + (pU.byteLength + 3 & -4)),
        TU = new DataView(PU.buffer);
      return TU.setUint32(0, UU, !0), TU.setUint32(KU, tU, !0), RU.forEach(((UU, RU) => {
        TU.setUint32(KU + 4 * (RU + 1), UU, !0)
      })), TU.setUint32(EU - 4, pU.byteLength, !0), PU.set(pU, EU), PU
    }

    function jU(UU, RU) {
      return GU(UU, [EU], RU)
    }

    function uU(UU, RU) {
      return GU(UU, [pU, TU], RU)
    }

    function CU(UU, RU) {
      return GU(UU, [pU, qU], RU)
    }

    function hU(UU, RU) {
      return GU(UU, [pU, PU], RU)
    }

    function QU(UU) {
      const RU = KU;
      if (UU.byteLength < RU + 12) return !1;
      const gU = new DataView(UU.buffer, UU.byteOffset, UU.byteLength);
      return gU.getUint32(RU, !0) === tU && gU.getUint32(RU + 4, !0) === pU && gU.getUint32(RU + 8, !0) === PU
    }
  },
  40331: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => WU,
      e: () => eU,
      i: () => IU,
      l: () => mU,
      m: () => JU,
      n: () => hU
    });
    var tU = gU(4456),
      pU = gU(40210);
    const EU = 18,
      PU = 19,
      TU = 20,
      qU = {
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
        [EU]: "retry linked",
        [PU]: "fallback linked",
        [TU]: "fallback failed",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function KU(UU, RU) {
      return UU === EU ? "program retry" : UU === PU || UU === TU ? `program fallback ${RU}` : "program"
    }
    const cU = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      GU = {
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
      jU = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      uU = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld"
      },
      CU = {
        1280: "invalid enum",
        1281: "invalid value",
        1282: "invalid operation",
        1285: "out of memory",
        1286: "invalid framebuffer operation",
        37442: "context lost"
      };

    function hU(UU) {
      return String(UU).replace(/\d/g, (UU => String.fromCharCode(97 + Number(UU))))
    }

    function QU(UU, RU) {
      var gU;
      return null !== (gU = UU[RU]) && void 0 !== gU ? gU : hU(RU)
    }

    function eU() {
      return hU((0, pU.d)())
    }

    function WU(UU, RU) {
      switch (UU) {
        case tU.e.RenderSceneRowNotDrawn:
          return {
            words: ` ${QU(GU,RU)}`, instance: String(RU), group: String(UU)
          };
        case tU.e.RenderChunkMeshNotDrawn: {
          const gU = 0 === (128 & RU) ? "" : " shortage",
            tU = RU >>> 8;
          return {
            words: ` ${QU(jU,127&RU)}${gU}${0===tU?"":` kind ${hU(tU)}`}`,
            instance: String(RU),
            group: String(UU)
          }
        }
        case tU.e.RenderInternal: {
          const gU = QU(cU, 255 & RU),
            tU = RU >>> 8 & 255;
          if (0 === tU) return {
            words: ` ${gU}`,
            instance: String(RU),
            group: String(UU)
          };
          const pU = QU(qU, tU),
            EU = RU >>> 16;
          return {
            words: ` ${gU} ${pU} program ${hU(EU)}`,
            instance: `${gU} ${pU}`,
            group: KU(tU, gU),
            gpuDetails: {
              programFailure: pU,
              program: String(EU)
            }
          }
        }
        case tU.e.RenderSerialLinks: {
          const gU = QU(uU, RU);
          return {
            words: ` ${gU}`,
            instance: String(RU),
            group: String(UU),
            gpuDetails: {
              serialLinks: gU
            }
          }
        }
        case tU.e.RenderGlErrorAfterRestore: {
          const gU = QU(CU, 65535 & RU),
            tU = RU >>> 16,
            pU = 65535 !== tU;
          return {
            words: ` ${gU}${pU?` program ${hU(tU)}`:""}`,
            instance: String(RU),
            group: String(UU),
            gpuDetails: pU ? {
              glError: gU,
              program: String(tU)
            } : {
              glError: gU
            }
          }
        }
        default:
          return null
      }
    }
    const fU = 2,
      xU = new Map;

    function mU(UU) {
      let {
        group: RU,
        instance: gU
      } = UU, tU = xU.get(RU);
      return void 0 === tU && (tU = [], xU.set(RU, tU)), !tU.includes(gU) && (tU.length >= fU || (tU.push(gU), !1))
    }

    function IU() {
      return xU.size > 0
    }

    function JU() {
      xU.clear()
    }
  },
  40265: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => eU,
      c: () => WU,
      d: () => QU,
      g: () => IU
    });
    var tU = gU(6316),
      pU = gU(24),
      EU = gU(3996),
      PU = gU(4456),
      TU = gU(6311),
      qU = gU(40270);

    function KU(UU, RU) {
      const gU = (0, TU.e)(RU.variants);
      return UU.setShaderPack(gU.variantFlags, gU.hooks, gU.moduleCodes, (0, qU.v)(RU.layers), qU.m[RU.gP], RU.keepCircleShadows)
    }
    const cU = 0,
      GU = 1,
      jU = 2,
      uU = "shaderPack:failedToCompile",
      CU = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      hU = new Set(["not_requested", "off_after_loss", "gpu_class_webgl"]);

    function QU(UU, RU) {
      var gU;
      const tU = null !== (gU = null === UU || void 0 === UU ? void 0 : UU.reason) && void 0 !== gU ? gU : "none";
      return CU.has(tU) ? {
        messageKey: RU ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === tU && "override" === (null === UU || void 0 === UU ? void 0 : UU.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: hU.has(tU) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    const eU = {
      messageKey: "shaderPack:failedDeviceGraphics",
      noAdapter: !1
    };
    class WU extends Error {
      constructor(UU) {
        super(`the shader pack can't run in this game: ${UU}`), this.messageKey = UU, this.name = "ShaderPackJoinError"
      }
    }
    const fU = "strict";
    class xU {
      constructor(UU) {
        this.deps = UU, this.pagePack = void 0, this.loaded = null, this.gP = fU, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = UU.load().catch((RU => (UU.warn("the shader pack could not load: the game draws without it", RU), {
          status: "none"
        }))).then((UU => (this.loaded = UU, "active" === UU.status && (this.handOverToPreviews(UU), null !== UU.harnessPolicy && (this.gP = UU.harnessPolicy, this.handOver())), UU)))
      }
      async join(UU) {
        this.leave();
        const RU = this.game,
          [gU, pU] = await Promise.all([this.pagePack, this.policyOf(UU)]);
        if (RU !== this.game || "none" === gU.status) return null;
        const EU = "active" === gU.status ? gU.pack.variants : gU.variants,
          PU = (0, tU.i)(EU, pU);
        if (PU && "active" === gU.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (PU) {
          const UU = this.cantRun(gU, pU);
          if (null !== UU) return UU
        } else if ("blocked" === gU.status || null === this.deps.core) return null;
        return this.gP = pU, this.handOver(), PU && this.refused ? uU : (this.joined = !0, this.offInThisGame = !PU, null)
      }
      async replay(UU) {
        const RU = await this.join(UU);
        null === RU ? this.playable() : this.deps.failInGame(RU)
      }
      cantRun(UU, RU) {
        const {
          core: gU,
          noWebGpu: tU
        } = this.deps;
        if ("blocked" === UU.status) {
          return "shaderPack:failedUnchecked" === UU.messageKey && null === gU && tU.noAdapter ? tU.messageKey : UU.messageKey
        }
        return this.refused || this.failedPolicies.has(RU) ? uU : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var UU;
        return this.runsInJoinedGame() && "active" === (null === (UU = this.loaded) || void 0 === UU ? void 0 : UU.status) ? function(UU, RU) {
          const gU = UU.filter((UU => (0, tU.i)([UU], RU))),
            pU = UU => gU.some((RU => RU[UU]));
          return {
            sceneDepth: pU("sceneDepth"),
            sunShadow: pU("sunShadow"),
            airShadow: pU("airShadow")
          }
        }(this.loaded.pack.variants, this.gP) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(uU) : (null !== this.couldntRun ? this.notify(EU.e, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.gP) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(UU) {
        for (const {
            code: RU,
            detail: gU
          }
          of UU)
          if (RU === PU.e.RenderShaderPackNotRun) switch (255 & gU) {
            case cU:
              this.refused = !0, this.failed();
              break;
            case GU:
              this.failedPolicies.add(this.gP), this.failed();
              break;
            case jU:
              this.failedModelPolicies.add(this.gP), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(uU) : this.failedWhileJoining = !0)
      }
      fail(UU) {
        this.leave(), this.deps.failInGame(UU)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(UU, RU) {
        const gU = this.game;
        this.deps.notify(UU, (() => gU === this.game && this.joined), RU)
      }
      handOver() {
        var UU;
        const {
          core: RU
        } = this.deps;
        null !== RU && "active" === (null === (UU = this.loaded) || void 0 === UU ? void 0 : UU.status) && (KU(RU, {
          ...this.loaded.pack,
          gP: this.gP
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(UU) {
        let {
          pack: RU,
          harnessPolicy: gU
        } = UU;
        const {
          previews: tU
        } = this.deps;
        null !== tU && KU(tU, {
          ...RU,
          gP: null !== gU && void 0 !== gU ? gU : fU
        })
      }
      policyOf(UU) {
        return this.deps.policyOf(UU).catch((UU => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", UU), fU)))
      }
    }
    const mU = "wasmShaderPackNotice";

    function IU(UU, RU, gU, tU) {
      return pU.p.subscribe(mU, (UU => {
        let {
          translationKey: RU,
          stillCurrent: gU,
          reasonKey: tU
        } = UU;
        gU() && pU.p.yh("chat", (0, EU.k)(RU, tU))
      })), new xU({
        load: JU,
        policyOf: wU,
        core: UU,
        previews: RU,
        noWebGpu: gU,
        notify: (UU, RU, gU) => {
          const tU = {
            translationKey: UU,
            stillCurrent: RU,
            reasonKey: gU
          };
          pU.p.yh(mU, tU, !0)
        },
        failInGame: UU => {
          pU.p.yh(EU.g, UU)
        },
        warn: tU
      })
    }
    async function JU() {
      const [{
        shaderPackPage: UU,
        harnessShaderPackMode: RU
      }, {
        shaderPackTextures: tU
      }] = await Promise.all([gU.e(129).then((() => gU(38747))), gU.e(130).then((() => gU(6306)))]), pU = await UU.load();
      return "active" !== pU.status ? pU : {
        status: "active",
        pack: {
          variants: pU.pack.variants,
          layers: tU().layers,
          keepCircleShadows: pU.pack.keepCircleShadows
        },
        harnessPolicy: RU()
      }
    }
    async function wU(UU) {
      var RU;
      const [{
        harnessShaderPackMode: tU
      }, {
        getShaderPackPolicy: pU
      }] = await Promise.all([gU.e(129).then((() => gU(38747))), gU.e(89).then((() => gU(40658)))]);
      return null !== (RU = tU()) && void 0 !== RU ? RU : pU(UU)
    }
  },
  40369: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => TU,
      f: () => QU,
      j: () => qU,
      l: () => KU,
      m: () => cU,
      p: () => jU
    });
    var tU = gU(40376),
      pU = gU(40382);
    const EU = "atlas:",
      PU = 3e4;
    class TU extends Error {
      constructor(UU, RU) {
        super(`fetching ${UU} answered HTTP ${RU}`), this.url = UU, this.status = RU, this.name = "TerrainTextureFetchError"
      }
    }

    function qU(UU) {
      if (!UU.startsWith(EU)) return null;
      const RU = Number(UU.slice(EU.length));
      return Number.isInteger(RU) && RU >= 0 ? RU : null
    }
    async function KU() {
      const UU = await gU.e(201).then((() => gU(33915)));
      return {
        atlasSheets: UU.blockAtlasUrls,
        texture: RU => {
          var gU, tU, EU;
          return null !== (gU = null !== (tU = null !== (EU = UU.animatedBlockTextures[RU]) && void 0 !== EU ? EU : UU.rotatedBlockTextures[RU]) && void 0 !== tU ? tU : pU.c[RU]) && void 0 !== gU ? gU : null
        }
      }
    }
    async function cU(UU) {
      const RU = new AbortController,
        gU = setTimeout((() => {
          RU.abort(new DOMException(`${UU} took over ${PU} ms`, "TimeoutError"))
        }), PU);
      let tU;
      try {
        const gU = await fetch(UU, {
          signal: RU.signal
        });
        if (!gU.ok) throw new TU(UU, gU.status);
        tU = await gU.blob()
      } finally {
        clearTimeout(gU)
      }
      const pU = await createImageBitmap(tU, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return jU(pU)
      } finally {
        pU.close()
      }
    }
    const GU = 8192;

    function jU(UU) {
      const {
        width: RU,
        height: gU
      } = UU, pU = Math.max(1, Math.min(gU, GU)), EU = (0, tU.g)(RU, pU, {
        willReadFrequently: !0
      });
      if (!EU) throw new Error("no 2D context to read the texture back");
      EU.globalCompositeOperation = "copy";
      const PU = new Uint8Array(RU * gU * 4);
      for (let tU = 0; tU < gU; tU += pU) {
        const TU = Math.min(pU, gU - tU);
        EU.drawImage(UU, 0, tU, RU, TU, 0, 0, RU, TU), PU.set(EU.getImageData(0, 0, RU, TU).data, tU * RU * 4)
      }
      return {
        width: RU,
        height: gU,
        pixels: PU
      }
    }
    async function uU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cU;
      const tU = [],
        pU = await Promise.all(UU.map((async UU => {
          var pU, PU;
          const TU = null !== (pU = null === (PU = RU.decoded) || void 0 === PU ? void 0 : PU.call(RU, UU)) && void 0 !== pU ? pU : null,
            KU = null === TU ? function(UU, RU) {
              if (UU.startsWith(EU)) {
                var gU;
                const tU = qU(UU);
                return null === tU ? null : null !== (gU = RU.atlasSheets[tU]) && void 0 !== gU ? gU : null
              }
              return RU.texture(UU)
            }(UU, RU) : null,
            cU = null !== TU && void 0 !== TU ? TU : null === KU ? null : gU(KU);
          if (null === cU) return tU.push({
            name: UU,
            url: KU,
            error: new Error(`no URL for terrain texture ${UU}`)
          }), null;
          try {
            const RU = await cU;
            if (RU.pixels.byteLength !== RU.width * RU.height * 4) throw new Error(`decoded ${RU.pixels.byteLength} bytes for ${RU.width}x${RU.height} texels`);
            return {
              name: UU,
              texture: RU
            }
          } catch (GU) {
            return tU.push({
              name: UU,
              url: KU,
              error: GU
            }), null
          }
        }))),
        PU = pU.filter((UU => null !== UU)),
        TU = new Uint32Array(2 * PU.length);
      PU.forEach(((UU, RU) => {
        let {
          texture: gU
        } = UU;
        TU[2 * RU] = gU.width, TU[2 * RU + 1] = gU.height
      }));
      return {
        handOver: {
          names: PU.map((UU => {
            let {
              name: RU
            } = UU;
            return RU
          })),
          textures: PU.map((UU => {
            let {
              texture: RU
            } = UU;
            return RU.pixels
          })),
          sizes: TU
        },
        failures: tU
      }
    }
    const CU = [2e3, 1e4, 3e4, 6e4, 12e4];

    function hU() {}
    class QU {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CU,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = UU, this.retryMs = RU, this.keepBelow = gU, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : KU,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const tU = ++this.started,
          pU = {
            decode: gU.decode,
            wholeAtlas: gU.wholeAtlas
          };
        return this.loadAndHandOver(RU, pU, UU, (() => {
          var UU;
          return tU < this.landed || !1 === (null === (UU = gU.wanted) || void 0 === UU ? void 0 : UU.call(gU))
        }), {
          onTaken: (UU, gU) => {
            this.landed = tU, this.current = {
              mine: tU,
              sources: RU,
              load: pU,
              xu: UU,
              failed: gU
            }
          }
        })
      }
      restore(UU) {
        var RU;
        const gU = this.current;
        if (null === gU) return Promise.resolve(null);
        if ((null === (RU = this.restoring) || void 0 === RU ? void 0 : RU.mine) === gU.mine) return this.restoring.done;
        const tU = {
          mine: gU.mine,
          done: this.restoreLanded(gU, UU).finally((() => {
            this.restoring === tU && (this.restoring = null)
          }))
        };
        return this.restoring = tU, tU.done
      }
      async restoreLanded(UU, RU) {
        const gU = () => this.landed !== UU.mine,
          {
            xu: tU
          } = UU;
        if (null !== tU) return this.stopped() ? null : this.core.setTerrainTextures(tU.names, tU.textures, tU.sizes);
        let pU = RU;
        for (let EU = 0;; EU++) {
          const RU = this.retryMs.at(EU),
            tU = {
              allOrNothingExcept: void 0 === RU ? void 0 : UU.failed
            },
            PU = await this.loadAndHandOver(UU.sources, UU.load, pU, gU, tU);
          if (!1 !== PU || void 0 === RU || this.stopped()) return PU;
          if (pU = hU, await new Promise((UU => {
              setTimeout(UU, RU)
            })), gU()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(UU, RU, gU, tU) {
        let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const EU = this.core.terrainTextureNames();
        var PU;
        if (0 === EU.length) return null === (PU = pU.onTaken) || void 0 === PU || PU.call(pU, null, new Set), !0;
        let TU, KU;
        try {
          TU = await UU(), KU = await uU(EU, TU, RU.decode)
        } catch (QU) {
          return tU() ? null : (gU({
            name: null,
            url: null,
            error: QU
          }), !1)
        }
        if (tU() || this.stopped()) return null;
        for (const qU of KU.failures) gU(qU);
        const cU = pU.allOrNothingExcept;
        if (void 0 !== cU && KU.failures.some((UU => {
            let {
              name: RU
            } = UU;
            return null === RU || !cU.has(RU)
          })) || !0 === RU.wholeAtlas && KU.failures.some((UU => {
            let {
              name: RU
            } = UU;
            return null === RU || null !== qU(RU)
          }))) return !1;
        const {
          handOver: GU
        } = KU, jU = function(UU) {
          return UU.textures.reduce(((UU, RU) => UU + RU.byteLength), 0)
        }(GU) < this.keepBelow, CU = this.core.setTerrainTextures(GU.names, GU.textures, GU.sizes, jU ? void 0 : () => {
          !async function(UU, RU) {
            await RU;
            for (const {
                buffer: tU
              }
              of UU) {
              const UU = tU;
              var gU;
              if (!UU.detached) null === (gU = UU.transfer) || void 0 === gU || gU.call(UU, 0)
            }
          }(GU.textures, TU.heldUntil)
        });
        if (CU) {
          var hU;
          const UU = new Set(KU.failures.flatMap((UU => {
            let {
              name: RU
            } = UU;
            return null === RU ? [] : [RU]
          })));
          null === (hU = pU.onTaken) || void 0 === hU || hU.call(pU, jU ? GU : null, UU)
        }
        return CU
      }
    }
  },
  36392: (UU, RU, gU) => {
    function tU(UU) {
      return "fetch" === UU || "timeout" === UU || "integrity" === UU ? "download" : "browser"
    }
    gU.d(RU, {
      b: () => pU,
      e: () => PU,
      f: () => qU,
      g: () => TU,
      k: () => tU,
      l: () => EU
    });
    const pU = "https://discord.gg/playbloxd";

    function EU(UU) {
      return "download" === UU ? {
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

    function PU(UU, RU) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: RU ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: UU.code
        },
        discordLink: RU,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function TU() {
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

    function qU(UU, RU, gU) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: gU ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: UU.reason
        },
        discordLink: null === UU.name,
        confirm: RU ? "general:reconnect" : UU.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  6311: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => xU,
      f: () => mU,
      h: () => WU,
      j: () => eU
    });
    var tU = gU(6316);
    const pU = 6,
      EU = 3,
      PU = 1,
      TU = 2,
      qU = 4,
      KU = 8,
      cU = 16,
      GU = 32,
      jU = 64,
      uU = 128,
      CU = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function hU(UU) {
      if (!UU) return 0;
      const RU = CU.indexOf(UU);
      if (RU <= 0) throw new Error(`"${UU}" is not a shader pack hook function`);
      return RU
    }

    function QU(UU) {
      if (0 === UU) return null;
      const RU = CU[UU];
      if (void 0 === RU) throw new Error(`${UU} is not a shader pack hook function id`);
      return RU
    }

    function eU(UU) {
      const RU = tU.b.length;
      return {
        strict: UU >= RU,
        program: tU.b[UU % RU]
      }
    }

    function WU(UU) {
      return Number(UU.strict) * tU.b.length + tU.b.indexOf(UU.program)
    }

    function fU(UU) {
      return "" === UU ? [] : UU.split(" ")
    }

    function xU(UU) {
      const RU = {
        variantFlags: new Uint8Array(pU),
        hooks: new Uint8Array(pU * EU),
        moduleCodes: Array(pU).fill(""),
        reads: Array(2 * pU).fill("")
      };
      for (const gU of UU) {
        const UU = WU(gU.key),
          tU = (UU, RU) => null === gU.hooks.surface || gU.reads.fragment.includes(UU) ? 0 : RU;
        RU.variantFlags[UU] = (gU.sceneDepth ? PU : 0) | (gU.movesVertices ? TU : 0) | (gU.sunShadow ? qU : 0) | (gU.airShadow ? KU : 0) | (gU.discards ? cU : 0) | tU("localPosition", GU) | tU("enchantSpeed", jU) | tU("enchantTier", uU), RU.hooks[UU * EU] = hU(gU.hooks.vertex), RU.hooks[UU * EU + 1] = hU(gU.hooks.surface), RU.hooks[UU * EU + 2] = hU(gU.hooks.light), RU.moduleCodes[UU] = gU.moduleCode, RU.reads[2 * UU] = gU.reads.vertex.join(" "), RU.reads[2 * UU + 1] = gU.reads.fragment.join(" ")
      }
      return RU
    }

    function mU(UU) {
      const {
        hooks: RU,
        moduleCodes: gU,
        reads: tU
      } = UU;
      return Array.from(UU.variantFlags, ((UU, pU) => {
        const GU = pU * EU;
        return {
          key: eU(pU),
          hooks: {
            vertex: QU(RU[GU]),
            surface: QU(RU[GU + 1]),
            light: QU(RU[GU + 2])
          },
          moduleCode: gU[pU],
          sceneDepth: 0 !== (UU & PU),
          sunShadow: 0 !== (UU & qU),
          airShadow: 0 !== (UU & KU),
          movesVertices: 0 !== (UU & TU),
          discards: 0 !== (UU & cU),
          reads: {
            vertex: fU(tU[2 * pU]),
            fragment: fU(tU[2 * pU + 1])
          }
        }
      }))
    }
  },
  40270: (UU, RU, gU) => {
    gU.d(RU, {
      B: () => CU,
      c: () => pU,
      d: () => tU,
      h: () => jU,
      i: () => cU,
      m: () => QU,
      n: () => EU,
      o: () => TU,
      r: () => qU,
      s: () => PU,
      v: () => hU,
      x: () => uU
    });
    const tU = 3,
      pU = 0,
      EU = 1,
      PU = 2,
      TU = {
        uniform: 3,
        Wj: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      qU = 10,
      KU = "BloxdPackInputs",
      cU = "bloxdPackInputs",
      GU = [{
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
      jU = 80;

    function uU() {
      const UU = GU.map((UU => {
        let {
          name: RU,
          type: gU
        } = UU;
        return `    ${RU}: ${gU},\n`
      })).join("");
      return `struct ${KU} {\n${UU}}\n@group(${tU}) @binding(${pU}) var<uniform> ${cU}: ${KU};\n`
    }

    function CU(UU, RU) {
      const gU = new DataView(UU, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, jU),
        [tU, pU, EU, PU, TU, qU] = GU;
      gU.setFloat32(tU.offset, RU.seconds, !0), gU.setUint32(pU.offset, RU.lit ? 1 : 0, !0);
      for (let KU = 0; KU < 3; KU++) gU.setInt32(EU.offset + 4 * KU, RU.renderOffset[KU], !0), gU.setFloat32(PU.offset + 4 * KU, RU.M_[KU], !0), gU.setFloat32(TU.offset + 4 * KU, RU.eyePosition[KU], !0), gU.setFloat32(qU.offset + 4 * KU, RU.shadowDirection[KU], !0)
    }

    function hU(UU) {
      const RU = new Uint32Array(Math.max(1, UU.length));
      return UU.forEach(((UU, gU) => {
        let {
          id: tU,
          rotation: pU
        } = UU;
        RU[gU] = 65535 & tU | (3 & pU) << 16
      })), RU
    }
    const QU = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6316: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU,
      f: () => PU,
      i: () => TU,
      j: () => pU,
      k: () => EU
    });
    const tU = ["terrain", "liquid", "model"];

    function pU() {
      const UU = [];
      for (const RU of [!1, !0])
        for (const gU of tU) UU.push({
          strict: RU,
          program: gU
        });
      return UU
    }

    function EU(UU) {
      return `${UU.strict?"strict":"allow"}.${UU.program}`
    }

    function PU(UU) {
      return !UU.hooks.vertex && !UU.hooks.surface && !UU.hooks.light
    }

    function TU(UU, RU) {
      return "off" !== RU && (null === UU || UU.some((UU => UU.key.strict === ("strict" === RU) && !PU(UU))))
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);