export const id = 87;
export const ids = [87];
export const modules = {
  38291: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ,
      c: () => mQ,
      e: () => uQ,
      g: () => HQ,
      i: () => vQ,
      j: () => kQ
    });
    const LQ = "A valid external Instance reference no longer exists.",
      qQ = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ],
      oQ = [
        [1e3, "lt1s"],
        [2e3, "lt2s"],
        [5e3, "lt5s"],
        [1e4, "lt10s"],
        [3e4, "lt30s"],
        [1 / 0, "ge30s"]
      ];
    const DQ = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function kQ(QQ, FQ) {
      return QQ ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(QQ) {
        var FQ;
        const wQ = null !== (FQ = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(QQ)) && void 0 !== FQ ? FQ : /failed with ([A-Z][A-Z0-9_]+)/.exec(QQ);
        return wQ ? wQ[1] : QQ.includes(LQ) ? "gpu_process_lost" : "other"
      }(FQ)
    }

    function vQ(QQ) {
      return `${(null===QQ||void 0===QQ?void 0:QQ.vendor)||"unknown vendor"} ${(null===QQ||void 0===QQ?void 0:QQ.architecture)||"unknown architecture"}`
    }

    function mQ(QQ) {
      return bQ(QQ)[1]
    }

    function uQ(QQ) {
      return bQ(QQ)[2]
    }

    function HQ(QQ) {
      return YQ(oQ, QQ)[1]
    }

    function bQ(QQ) {
      return YQ(qQ, QQ)
    }

    function YQ(QQ, FQ) {
      var wQ;
      return null !== (wQ = QQ.find((QQ => {
        let [wQ] = QQ;
        return FQ < wQ
      }))) && void 0 !== wQ ? wQ : QQ[QQ.length - 1]
    }
  },
  38607: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ,
      d: () => qQ
    });
    const LQ = 45e3;
    class qQ extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  35938: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => LQ,
      h: () => qQ,
      i: () => oQ,
      l: () => DQ
    });
    const LQ = 1024,
      qQ = 1024 * LQ;

    function oQ(QQ) {
      return 2 ** Math.floor(Math.log2(Math.max(1, QQ / qQ)))
    }

    function DQ(QQ) {
      return (QQ / qQ).toFixed(1)
    }
  },
  36119: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => oQ,
      e: () => kQ,
      f: () => DQ,
      h: () => vQ,
      l: () => mQ,
      o: () => uQ
    });
    var LQ = wQ(201);
    const qQ = 32 * wQ(35938).h,
      oQ = 6144,
      DQ = 4608,
      kQ = 512;

    function vQ(QQ) {
      return Math.floor(qQ * QQ / oQ)
    }

    function mQ(QQ) {
      const FQ = QQ - Math.floor(QQ / 6);
      let wQ = LQ.e.maxChunkHorizAddDistance,
        qQ = LQ.e.maxChunkVertAddDistance;
      if (uQ(wQ + 1, qQ + 1) <= FQ) return null;
      for (; uQ(wQ + 1, qQ + 1) > FQ && (wQ > 0 || qQ > 0);) wQ > qQ ? wQ-- : qQ--;
      return {
        horizontal: wQ,
        vertical: qQ
      }
    }

    function uQ(QQ, FQ) {
      const wQ = Math.max(QQ, FQ);
      let LQ = 0;
      for (let qQ = -wQ; qQ <= wQ; qQ++)
        for (let oQ = -wQ; oQ <= wQ; oQ++)
          for (let DQ = -wQ; DQ <= wQ; DQ++) HQ(QQ, FQ, qQ, oQ, DQ) && LQ++;
      return LQ
    }

    function HQ(QQ, FQ, wQ, LQ, qQ) {
      const oQ = wQ * wQ + qQ * qQ;
      return QQ === FQ ? oQ + LQ * LQ <= QQ * QQ : QQ > FQ ? Math.abs(LQ) <= FQ && oQ + LQ * LQ <= QQ * QQ : oQ <= QQ * QQ && oQ + LQ * LQ <= FQ * FQ
    }
  },
  40275: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ,
      e: () => oQ,
      f: () => kQ,
      j: () => uQ,
      n: () => vQ,
      p: () => DQ
    });
    var LQ = wQ(201);
    const qQ = 3e3,
      oQ = 15e3;

    function DQ(QQ) {
      const FQ = QQ.endsWith(LQ.l);
      return {
        text: (FQ ? QQ.slice(0, -LQ.l.length) : QQ) || null,
        dropsCache: FQ
      }
    }
    const kQ = "Either your internet isn't working or this is a bug.";

    function vQ(QQ, FQ) {
      const wQ = uQ(QQ);
      return null !== wQ.name && "" === LQ.d[wQ.name].text && null !== FQ ? FQ : wQ.reason
    }
    const mQ = "You were removed from the game.";

    function uQ(QQ) {
      var FQ;
      let wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const qQ = null !== (FQ = Object.keys(LQ.d).find((FQ => LQ.d[FQ].code === QQ))) && void 0 !== FQ ? FQ : null;
      if (null === qQ) return {
        code: QQ,
        name: qQ,
        reason: null !== wQ && void 0 !== wQ ? wQ : `${kQ}\nCode: ${QQ}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: oQ,
        canReconnect: DQ = !1
      } = LQ.d[qQ], vQ = QQ === LQ.d.outdatedVersion.code || QQ === LQ.d.loadRecaptchaError.code;
      return {
        code: QQ,
        name: qQ,
        reason: "" !== oQ ? oQ : null !== wQ && void 0 !== wQ ? wQ : QQ === LQ.d.gameOrPluginKick.code ? mQ : `Code: ${QQ}`,
        canReconnect: DQ,
        automaticallyReconnect: QQ === LQ.d.customGameUpdated.code || QQ === LQ.d.duplicateLobbyNameError.code,
        requiresRefresh: vQ
      }
    }
  },
  4632: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      $: () => XQ,
      $b: () => qQ.k,
      $c: () => LQ.fc,
      Ab: () => rQ,
      Ac: () => LQ.Eb,
      Ad: () => kF,
      B: () => yQ,
      Cc: () => LQ.Ib,
      D: () => LQ.h,
      Db: () => OQ,
      Dd: () => AF,
      G: () => mQ,
      Gc: () => LQ.Lb,
      H: () => LQ.i,
      Hb: () => LQ.Y,
      Hd: () => pQ,
      I: () => dQ,
      Ic: () => BQ,
      J: () => LQ.l,
      Kc: () => LQ.Qb,
      Kd: () => gQ,
      L: () => PQ,
      Lb: () => IQ,
      Ld: () => KQ,
      O: () => LQ.v,
      Ob: () => cQ,
      Oc: () => LQ.Ub,
      Pc: () => LQ.Vb,
      Pd: () => TQ,
      Q: () => LQ.x,
      Qc: () => LQ.bc,
      Qd: () => NQ,
      R: () => LQ.z,
      Rb: () => DF,
      S: () => HQ,
      Sc: () => LQ.cc,
      T: () => MQ,
      U: () => LQ.B,
      Uc: () => LQ.dc,
      Ud: () => vQ,
      Vb: () => GQ,
      Xc: () => RQ,
      Y: () => LQ.F,
      Yd: () => zQ,
      Zb: () => HF,
      Zd: () => tF,
      ab: () => oF,
      ad: () => LQ.jc,
      ae: () => YQ,
      b: () => FF,
      bb: () => uQ,
      bd: () => LQ.nc,
      c: () => AQ,
      cc: () => eQ,
      cd: () => oQ,
      d: () => xQ,
      dc: () => LF,
      e: () => mF,
      ed: () => tQ,
      fb: () => LQ.I,
      fc: () => LQ.hb,
      gd: () => vF,
      h: () => WQ,
      hb: () => hQ,
      hc: () => LQ.lb,
      hd: () => aQ,
      ib: () => ZQ,
      id: () => fQ,
      jb: () => LQ.O,
      jc: () => LQ.ob,
      jd: () => jQ,
      kb: () => QF,
      l: () => SQ,
      m: () => LQ.e,
      mc: () => LQ.pb,
      md: () => JQ,
      n: () => bF,
      nb: () => wF,
      oc: () => LQ.qb,
      pb: () => LQ.Q,
      q: () => sQ,
      qd: () => VQ,
      rb: () => qQ.g,
      sb: () => iQ,
      sc: () => LQ.Ab,
      t: () => DQ,
      tc: () => xF,
      td: () => nQ,
      v: () => UQ,
      vc: () => uF,
      wb: () => lQ,
      wd: () => EQ,
      xc: () => qF,
      z: () => YF
    });
    var LQ = wQ(4638),
      qQ = wQ(2313);
    const oQ = Math.round(1e3 / LQ.nc),
      DQ = 4,
      kQ = 2;

    function vQ() {
      return crypto.getRandomValues(new Uint32Array(kQ))
    }
    const mQ = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      uQ = 16,
      HQ = {
        Draws: 1,
        NetAll: 2
      },
      bQ = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function YQ(QQ) {
      return (QQ.nametagsHidden ? CQ.NametagsHidden : 0) | (QQ.crouchToggle ? CQ.CrouchToggle : 0) | (QQ.bhopDisabled ? CQ.BhopDisabled : 0) | (QQ.disableBobbing ? CQ.DisableBobbing : 0) | (QQ.ezTowering ? CQ.EzTowering : 0) | (QQ.ezBridging ? CQ.EzBridging : 0) | (QQ.showChunkBorders ? CQ.ShowChunkBorders : 0)
    }
    const xQ = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      AQ = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      tQ = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      eQ = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      MQ = 5,
      GQ = 4294967295;

    function pQ(QQ) {
      return (QQ.showFog ? bQ.ShowFog : 0) | (QQ.lighting ? bQ.Lighting : 0) | (QQ.chunkFade ? bQ.ChunkFade : 0)
    }
    const cQ = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      CQ = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      SQ = {
        Release: 1,
        KeepTouches: 2
      },
      iQ = {
        Point: 1,
        Stamped: 2
      },
      WQ = {
        Add: 1,
        Clear: 2
      },
      RQ = 1,
      OQ = 8,
      sQ = 16777215,
      rQ = 4,
      IQ = {
        Resume: 1
      },
      UQ = {
        Held: 1
      };

    function NQ(QQ, FQ) {
      return (QQ | FQ << 8) >>> 0
    }

    function TQ(QQ) {
      return 255 & QQ
    }

    function KQ(QQ) {
      return QQ >>> 8
    }

    function zQ(QQ) {
      return QQ + 3 & -4
    }
    const lQ = 16777216,
      jQ = 20;
    const aQ = 8,
      XQ = 8,
      fQ = 16777216,
      VQ = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      hQ = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      JQ = 16,
      EQ = {
        Lost: 0,
        Gone: 1
      },
      nQ = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function gQ(QQ) {
      return QQ === nQ.WorldgenSeed || QQ === nQ.Generate
    }
    const PQ = 4,
      ZQ = 99,
      yQ = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      BQ = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      dQ = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      QF = 12,
      FF = 16,
      wF = 4,
      LF = 12,
      qF = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      oF = 4,
      DF = 8,
      kF = 8,
      vF = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      mF = {
        Crit: 1,
        HitSelf: 2
      },
      uF = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      HF = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      bF = 12,
      YF = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      xF = 67108864;

    function AF(QQ) {
      for (const [FQ, wQ] of Object.entries(LQ.h))
        if (wQ === QQ) return FQ;
      return `Unknown${QQ}`
    }

    function tF(QQ) {
      return {
        status: QQ[LQ.F.Status],
        lastError: QQ[LQ.F.LastError],
        lastErrorDetail: QQ[LQ.F.LastErrorDetail],
        errorCount: QQ[LQ.F.ErrorCount],
        frameIndex: QQ[LQ.F.FrameIndex],
        tickIndex: QQ[LQ.F.TickIndex],
        renderPending: QQ[LQ.F.RenderPending],
        firstView: QQ[LQ.F.FirstView],
        chunksCancelled: QQ[LQ.F.ChunksCancelled]
      }
    }
  },
  40065: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => LQ,
      d: () => HQ,
      f: () => kQ,
      i: () => oQ,
      k: () => qQ,
      o: () => vQ,
      s: () => uQ
    });
    class LQ extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function qQ(QQ) {
      return QQ instanceof RangeError && /call stack/i.test(QQ.message) || QQ instanceof Error && "InternalError" === QQ.name && /recursion/i.test(QQ.message)
    }

    function oQ(QQ) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(QQ))
    }
    const DQ = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function kQ(QQ) {
      var FQ;
      return QQ instanceof WebAssembly.RuntimeError || QQ instanceof LQ || qQ(QQ) && DQ.test(null !== (FQ = QQ.stack) && void 0 !== FQ ? FQ : "")
    }

    function vQ(QQ, FQ) {
      if (kQ(QQ)) throw QQ;
      console.error(FQ, QQ)
    }

    function mQ(QQ, FQ, wQ, qQ, oQ) {
      if (FQ % qQ !== 0 || FQ + wQ > QQ.byteLength) throw new LQ(`${oQ}: ${wQ} bytes at ${FQ}, ${qQ}-aligned, outside ${QQ.byteLength} bytes of memory`)
    }

    function uQ(QQ, FQ, wQ, LQ, qQ) {
      return 0 === wQ ? null : (mQ(FQ, wQ, LQ * QQ.BYTES_PER_ELEMENT, QQ.BYTES_PER_ELEMENT, qQ), new QQ(FQ, wQ, LQ))
    }

    function HQ(QQ, FQ, wQ, LQ, qQ) {
      return 0 === FQ ? null : (mQ(QQ, FQ, wQ, LQ, qQ), new DataView(QQ, FQ, wQ))
    }
  },
  40411: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => LQ
    });
    const LQ = {
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
  40372: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => xQ,
      g: () => AQ,
      k: () => bQ,
      l: () => HQ
    });
    const LQ = 2e3,
      qQ = "unavailable";
    let oQ = () => Promise.resolve().then((() => wQ(2864))),
      DQ = null,
      kQ = null,
      vQ = mQ();

    function mQ() {
      let QQ = () => {};
      return {
        promise: new Promise((FQ => {
          QQ = () => {
            FQ(null)
          }
        })),
        resolve: QQ
      }
    }

    function uQ() {
      if (null === DQ) {
        const QQ = oQ();
        DQ = QQ, QQ.then((FQ => {
          DQ === QQ && (kQ = FQ)
        }), (() => {
          DQ === QQ && (DQ = null)
        }))
      }
      return DQ
    }

    function HQ() {
      uQ().catch((() => {}))
    }

    function bQ() {
      vQ.resolve()
    }

    function YQ(QQ, FQ, wQ, LQ) {
      if (null === QQ) return {
        errorKind: FQ,
        fingerprint: qQ,
        dedupe: `${FQ}|${LQ}`
      };
      const {
        fingerprint: oQ
      } = QQ.clientErrorKey(FQ, wQ, LQ);
      return {
        errorKind: FQ,
        fingerprint: oQ,
        dedupe: oQ
      }
    }

    function xQ(QQ, FQ, wQ, LQ) {
      return null === kQ ? LQ ? (HQ(), YQ(null, QQ, FQ, wQ)) : null : YQ(kQ, QQ, FQ, wQ)
    }
    async function AQ(QQ, FQ, wQ) {
      let qQ;
      const oQ = new Promise((QQ => {
        qQ = setTimeout((() => {
          QQ(null)
        }), LQ)
      }));
      try {
        return YQ(await Promise.race([uQ(), oQ, vQ.promise]), QQ, FQ, wQ)
      } catch {
        return YQ(null, QQ, FQ, wQ)
      } finally {
        clearTimeout(qQ)
      }
    }
  },
  40369: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      BUILT_IN_ANIMATIONS_SITE: () => JQ,
      CORE_ERRORS_SITE: () => TQ,
      EVENT_OVERFLOW_SITE: () => hQ,
      FIRST_VIEW_SITE: () => nQ,
      JOIN_SITE: () => zQ,
      LEAVE_SITE: () => lQ,
      MAIN_THREAD_SITE: () => gQ,
      MODEL_FEED_SITE: () => jQ,
      MODEL_POOL_SITE: () => aQ,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => ZQ,
      NON_FATAL_REPORTS_PER_SESSION: () => bF,
      PREVIEW_ANIMATIONS_SITE: () => VQ,
      RENDER_RELOAD_SITE: () => fQ,
      TEXTURE_NAMES_SITE: () => XQ,
      TEXTURE_PACK_FEED_SITE: () => EQ,
      TurnstilePageError: () => VF,
      WASM_LOAD_SITE: () => KQ,
      crashError: () => eF,
      crashReportsSettled: () => SF,
      flushCrashReports: () => cF,
      joinFailureCode: () => hF,
      lokiTransport: () => dQ,
      modelFailureCode: () => yF,
      readTrap: () => sF,
      renderLossDetail: () => tw,
      renderReloadMessage: () => xw,
      reportCoreErrors: () => WF,
      reportCountedLoadFallback: () => XF,
      reportCrash: () => MF,
      reportDataLoadFailure: () => Cw,
      reportDisconnect: () => PF,
      reportDracoDecoderFailure: () => Fw,
      reportEventOverflow: () => qw,
      reportFirstViewNoTerrain: () => mw,
      reportGpuFallback: () => jF,
      reportGpuWasmPopulation: () => aF,
      reportLightFault: () => Dw,
      reportMainStall: () => uw,
      reportMemoryShed: () => vw,
      reportModelFailure: () => BF,
      reportModelPoolFailure: () => dF,
      reportModelsModuleRetry: () => Qw,
      reportPageJoinFailure: () => EF,
      reportReconnectGaveUp: () => ZF,
      reportRenderReload: () => Mw,
      reportReplayFault: () => bw,
      reportStaleBuildReload: () => iw,
      reportStoppedCore: () => NF,
      reportTerrainTextureFailure: () => Gw,
      reportTexturePackFeedLoadFailure: () => Lw,
      reportUnstreamedCoreLoad: () => fF,
      reportUnsupportedFallback: () => zF,
      reportUnusedSeat: () => gF,
      reportWorkerLost: () => ow,
      reportWorkerStartTimeout: () => Hw,
      reportWorldgenGaveUp: () => kw,
      reportWorldgenLoadFailure: () => ww,
      resetCrashReports: () => iF,
      setCrashBackend: () => DF,
      setCrashScreen: () => qF,
      setCrashTransport: () => wF,
      showCrash: () => UF,
      showJoinFailure: () => JF,
      showUnsupported: () => KF
    });
    var LQ = wQ(1087),
      qQ = wQ(273),
      oQ = wQ(2871),
      DQ = wQ(40372),
      kQ = wQ(4632),
      vQ = wQ(40378),
      mQ = wQ(3337),
      uQ = wQ(38291),
      HQ = wQ(134),
      bQ = wQ(676),
      YQ = wQ(126),
      xQ = wQ(3345),
      AQ = wQ(38607),
      tQ = wQ(1772),
      eQ = wQ(40338),
      MQ = wQ(40009),
      GQ = wQ(40283),
      pQ = wQ(40292),
      cQ = wQ(38650),
      CQ = wQ(2809),
      SQ = wQ(2811),
      iQ = wQ(40380),
      WQ = wQ(40396),
      RQ = wQ(40399),
      OQ = wQ(36470),
      sQ = wQ(3115),
      rQ = wQ(35929),
      IQ = wQ(40226),
      UQ = wQ(35943);
    const NQ = "[bloxd-wasm-client]",
      TQ = "coreErrors",
      KQ = "wasmLoad",
      zQ = "join",
      lQ = "leave",
      jQ = "modelFeed",
      aQ = "modelWorkerPool",
      XQ = "textureNames",
      fQ = "renderReload",
      VQ = "previewAnimations",
      hQ = "eventOverflow",
      JQ = "builtInAnimations",
      EQ = "texturePackFeed",
      nQ = "firstView",
      gQ = "mainThread",
      PQ = 300,
      ZQ = 8;
    let yQ = 0;
    const BQ = new Set,
      dQ = (QQ, FQ) => {
        const wQ = kF[QQ.kind];
        if (null === wQ) return void QF(QQ, FQ, oF, null);
        const LQ = (0, DQ.c)(wQ, QQ.message, QQ.code, QQ.fatal);
        if (null !== LQ) return void QF(QQ, FQ, oF, LQ);
        const qQ = oF;
        pF("Loki", (async () => {
          QF(QQ, FQ, qQ, await (0, DQ.g)(wQ, QQ.message, QQ.code))
        }))
      };

    function QF(QQ, FQ, wQ, qQ) {
      const {
        kind: DQ,
        code: kQ,
        site: vQ,
        fatal: mQ,
        details: uQ
      } = QQ;
      if (!mQ)
        if (null === qQ || (0, oQ.b)(qQ.errorKind) || BQ.has(qQ.dedupe)) {
          if (yQ >= ZQ) return;
          yQ++
        } else BQ.add(qQ.dedupe);
      const HQ = {
        ...uQ,
        kind: DQ,
        code: kQ,
        site: vQ,
        fatal: String(mQ),
        backend: wQ
      };
      null !== qQ && (HQ.errorKind = qQ.errorKind, HQ.fingerprint = qQ.fingerprint), FQ instanceof Error && "string" === typeof FQ.stack && (HQ.causeStack = FQ.stack.slice(0, 2e3)), (0, LQ.pA)(eF(QQ, FQ), HQ)
    }
    let FF = dQ;

    function wF(QQ) {
      const FQ = FF;
      return FF = QQ, FQ
    }
    let LF = () => {};

    function qF(QQ) {
      const FQ = LF;
      return LF = QQ, FQ
    }
    let oF = "unpicked";

    function DF(QQ) {
      oF = QQ
    }
    const kF = {
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
      vF = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        mainStall: "wasm_load",
        gpuFallback: "wasm_load"
      },
      mF = new Set(["unstreamedLoad"]),
      uF = new Set(["linkCensus"]);
    let HF = !1;
    const bF = 20,
      YF = new Map;
    let xF = 0,
      AF = 0;
    const tF = new Set;

    function eF(QQ, FQ) {
      const wQ = Object.assign(new Error(`${QQ.code}: ${QQ.message}`), {
        name: "WasmClientCrash",
        cause: null !== FQ && void 0 !== FQ ? FQ : void 0
      });
      return FQ instanceof Error && FQ.stack && (wQ.stack = FQ.stack), wQ
    }

    function MF(QQ) {
      var FQ, LQ;
      const {
        kind: qQ,
        code: oQ,
        site: DQ,
        fatal: kQ,
        message: vQ,
        error: mQ
      } = QQ, uQ = !1 !== QQ.toTransport && !mF.has(qQ), HQ = !kQ && uQ && !uF.has(qQ), bQ = {
        kind: qQ,
        code: oQ,
        site: DQ,
        fatal: kQ,
        message: vQ,
        details: null !== (FQ = QQ.details) && void 0 !== FQ ? FQ : {}
      }, YQ = `${oQ}@${DQ}${void 0===QQ.instance?"":`#${QQ.instance}`}${kQ?"!":""}`, xQ = (null !== (LQ = YF.get(YQ)) && void 0 !== LQ ? LQ : 0) + 1;
      if (YF.set(YQ, xQ), xQ > 1 ? 0 === (xQ & xQ - 1) && GF((() => {
          console.warn(`${NQ} ${oQ} at ${DQ} reported ${xQ} times`)
        })) : HQ && xF >= bF ? GF((() => {
          console.warn(`${NQ} ${qQ} ${oQ} at ${DQ}: ${vQ} (not sent: the session's ${bF} went)`, bQ.details, null !== mQ && void 0 !== mQ ? mQ : "")
        })) : (HQ && xF++, function(QQ, FQ, LQ) {
          var qQ, oQ;
          const {
            kind: DQ,
            code: kQ,
            site: vQ,
            fatal: mQ,
            message: uQ,
            details: HQ
          } = QQ;
          GF((() => {
            (mQ ? console.error : console.warn)(`${NQ} ${DQ} ${kQ} at ${vQ}: ${uQ}`, HQ, null !== FQ && void 0 !== FQ ? FQ : "")
          }));
          const bQ = vF[DQ],
            YQ = null !== (qQ = null !== (oQ = kF[DQ]) && void 0 !== oQ ? oQ : bQ) && void 0 !== qQ ? qQ : null;
          null !== YQ && pF("counts", (async () => {
            const {
              peekVisitSessionId: QQ
            } = await Promise.resolve().then((() => wQ(649)));
            if (null !== QQ()) {
              const {
                reportCappedWasmFailure: QQ,
                reportUncappedWasmFailure: FQ,
                reportWasmFailure: LQ
              } = await wQ.e(208).then((() => wQ(35924)));
              (uF.has(DQ) ? FQ : void 0 === bQ ? LQ : QQ)(YQ, uQ, kQ), HF = !0
            }
          }));
          LQ && GF((() => {
            FF(QQ, FQ)
          }))
        }(bQ, mQ, uQ)), kQ) {
        var AQ;
        const FQ = null !== (AQ = QQ.screen) && void 0 !== AQ ? AQ : {
          text: (0, OQ.g)(bQ, !0),
          reload: !0
        };
        GF((() => {
          LF(FQ)
        }))
      }
      return bQ
    }

    function GF(QQ) {
      try {
        QQ()
      } catch (FQ) {
        try {
          console.warn(`${NQ} could not send a report`, FQ)
        } catch {}
      }
    }

    function pF(QQ, FQ) {
      try {
        const wQ = FQ().catch((FQ => {
          console.warn(`${NQ} could not send the report to ${QQ}`, FQ)
        })).finally((() => {
          tF.delete(wQ)
        }));
        tF.add(wQ)
      } catch (wQ) {
        console.warn(`${NQ} could not send the report to ${QQ}`, wQ)
      }
    }
    async function cF(QQ) {
      let FQ;
      (0, DQ.k)();
      const wQ = new Promise((wQ => {
        FQ = setTimeout(wQ, QQ)
      }));
      await Promise.race([CF(), wQ]), clearTimeout(FQ)
    }
    async function CF() {
      if (await Promise.allSettled([...tF]), HF) try {
        const {
          flushClientAnalyticsEvents: QQ
        } = await Promise.resolve().then((() => wQ(1485)));
        await QQ()
      } catch (QQ) {
        console.warn(`${NQ} could not send the counts`, QQ)
      }
    }
    async function SF() {
      for (; tF.size > 0;) await Promise.allSettled([...tF])
    }

    function iF() {
      YF.clear(), xF = 0, HF = !1, yQ = 0, BQ.clear(), AF = 0, (0, vQ.p)()
    }

    function WF(QQ, FQ, wQ, LQ) {
      AF += FQ;
      for (const {
          code: mQ,
          detail: uQ
        }
        of QQ) {
        var qQ, oQ, DQ;
        const QQ = (0, kQ.Dd)(mQ),
          FQ = (0, vQ.d)(mQ, uQ),
          HQ = null === LQ || void 0 === LQ ? void 0 : LQ(mQ, uQ),
          bQ = void 0 !== (null === FQ || void 0 === FQ ? void 0 : FQ.gpuDetails),
          xQ = bQ ? null === (qQ = (0, YQ.q)()) || void 0 === qQ ? void 0 : qQ.renderer : void 0,
          AQ = bQ ? ` ${(0,vQ.j)()}` : "",
          tQ = Array.from([xQ && `gpu ${(0,vQ.r)(xQ)}`, HQ].filter(Boolean).join("; ")).slice(0, PQ).join(""),
          eQ = `core error ${QQ}${null!==(oQ=null===FQ||void 0===FQ?void 0:FQ.words)&&void 0!==oQ?oQ:""}${AQ}${tQ?`: ${tQ}`:""}`,
          MQ = {
            errorCode: String(mQ),
            detail: String(uQ),
            droppedBefore: String(AF),
            wasmBuild: wQ.wasm,
            clientVersion: wQ.client,
            ...null === FQ || void 0 === FQ ? void 0 : FQ.gpuDetails
          };
        null !== FQ && (0, vQ.o)(FQ) ? GF((() => {
          console.warn(`${NQ} coreError CORE-${QQ}: ${eQ} (not sent: the session's render warnings of its kind went)`, MQ)
        })) : MF({
          kind: OF(mQ, uQ),
          code: `CORE-${QQ}`,
          site: TQ,
          fatal: !1,
          message: eQ,
          details: MQ,
          instance: null !== (DQ = null === FQ || void 0 === FQ ? void 0 : FQ.instance) && void 0 !== DQ ? DQ : RF(mQ, uQ)
        })
      }
    }

    function RF(QQ, FQ) {
      return QQ === kQ.D.RenderDeviceLost && 0 !== (FQ & kQ.I.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function OF(QQ, FQ) {
      return QQ === kQ.D.JobsHeapGaveUp ? "meshHeap" : (0, vQ.g)(QQ, FQ) ? "linkCensus" : "coreError"
    }

    function sF(QQ) {
      return (0, rQ.m)(QQ instanceof IQ.b ? QQ.trap : QQ, CQ.D, CQ.U)
    }
    const rF = "declined=js";

    function IF(QQ) {
      return QQ ? {
        labels: [rF],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function UF(QQ, FQ, wQ) {
      return TF(QQ, FQ, wQ, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function NF(QQ, FQ, wQ) {
      return TF(QQ, FQ, wQ, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function TF(QQ, FQ, wQ, LQ, qQ) {
      let {
        memoryDetails: oQ = {},
        declined: DQ = !1
      } = LQ;
      const {
        code: kQ,
        details: vQ,
        message: mQ
      } = (0, eQ.K)(QQ, FQ), uQ = [];
      Object.assign(vQ, (0, UQ.e)(QQ.error)), null !== wQ && (vQ.trapKind = wQ.kind, null !== wQ.panic && (vQ.panic = (0, rQ.k)(wQ.panic)), wQ.refusedBytes > 0 && (vQ.refusedAllocation = String(wQ.refusedBytes)), uQ.push((0, rQ.o)(wQ.kind, wQ.refusedBytes)));
      const HQ = IF(DQ);
      return MF({
        kind: "crash",
        code: kQ,
        site: QQ.site,
        fatal: qQ,
        message: [...uQ, ...HQ.labels, mQ].join("; "),
        details: {
          ...vQ,
          ...HQ.details,
          ...oQ
        },
        error: QQ.error
      })
    }

    function KF(QQ, FQ, wQ) {
      return MF({
        kind: "unsupported",
        code: FQ,
        site: KQ,
        fatal: !0,
        message: wQ,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: QQ,
          status: FQ
        },
        screen: {
          text: (0, OQ.s)(QQ),
          reload: "download" === QQ
        }
      })
    }

    function zF(QQ, FQ, wQ) {
      return MF({
        kind: "unsupportedFallback",
        code: "blockedAfterLoss" === FQ ? "blocked_after_loss" : "unsupported_js_fallback",
        site: KQ,
        fatal: !1,
        message: wQ,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: QQ,
          status: "unsupported",
          decline: FQ,
          fallback: "js"
        }
      })
    }
    const lF = "misdrawn_gpu_js_fallback";

    function jF(QQ, FQ) {
      return MF({
        kind: "gpuFallback",
        code: lF,
        site: KQ,
        fatal: !1,
        message: `the renderer plays ${QQ} on ${FQ} worse than the JS client`,
        details: {
          gpuFamily: QQ,
          backend: FQ,
          fallback: "js"
        }
      })
    }

    function aF(QQ) {
      pF("counts", (async () => {
        await (0, bQ.b)(QQ), HF = !0
      }))
    }

    function XF(QQ, FQ, wQ, LQ) {
      const qQ = IF(LQ);
      return MF({
        kind: "unsupported",
        code: FQ,
        site: KQ,
        fatal: !1,
        message: [...qQ.labels, wQ].join("; "),
        details: {
          cause: QQ,
          status: FQ,
          fallback: "js",
          ...qQ.details
        }
      })
    }

    function fF() {
      const {
        code: QQ,
        message: FQ
      } = sQ.c;
      return MF({
        kind: "unstreamedLoad",
        code: QQ,
        site: KQ,
        fatal: !1,
        message: FQ
      })
    }
    class VF extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function hF(QQ) {
      return QQ instanceof GQ.q ? 0 === QQ.code ? "JOIN-matchmake" : `JOIN-${QQ.code}` : QQ instanceof GQ.e ? 0 === QQ.code ? `JOIN-${QQ.stage}` : `JOIN-${QQ.stage}-${QQ.code}` : QQ instanceof MQ.d ? "JOIN-gameCode" : QQ instanceof VF ? "JOIN-turnstilePage" : QQ instanceof GQ.z ? "JOIN-trafficCheck" : QQ instanceof AQ.d ? "JOIN-timeout" : "JOIN-network"
    }

    function JF(QQ, FQ) {
      const wQ = (0, UQ.k)(QQ),
        LQ = {
          wasmBuild: FQ.wasm,
          clientVersion: FQ.client
        },
        qQ = QQ instanceof VF ? {
          text: (0, OQ.n)(),
          reload: !1
        } : void 0,
        oQ = (0, pQ.e)(QQ),
        DQ = "expected" !== oQ;
      return MF({
        kind: "join",
        code: hF(QQ),
        site: zQ,
        fatal: !0,
        message: wQ,
        details: LQ,
        error: QQ,
        screen: qQ,
        toTransport: DQ,
        instance: oQ
      })
    }

    function EF(QQ, FQ, wQ) {
      var LQ;
      const qQ = (0, pQ.e)(QQ),
        oQ = {
          cause: (QQ instanceof GQ.e || QQ instanceof GQ.q) && null !== (LQ = QQ.serverText) && void 0 !== LQ ? LQ : "",
          sinceJoinStart: (0, xQ.b)(wQ.sinceJoinStartMs),
          game: wQ.game,
          ...(0, xQ.g)(),
          wasmBuild: FQ.wasm,
          clientVersion: FQ.client
        };
      return MF({
        kind: "pageJoin",
        code: hF(QQ),
        site: zQ,
        fatal: !1,
        message: (0, UQ.k)(QQ),
        details: oQ,
        error: QQ,
        toTransport: "unrecognised" === qQ,
        instance: qQ
      })
    }
    const nF = {
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

    function gF(QQ, FQ) {
      let {
        unused: wQ,
        answered: LQ,
        heldMs: qQ
      } = QQ;
      const {
        code: oQ,
        message: DQ
      } = nF[wQ], kQ = {
        unused: wQ,
        answered: String(LQ),
        heldMs: String(qQ),
        wasmBuild: FQ.wasm,
        clientVersion: FQ.client
      };
      return MF({
        kind: "seat",
        code: oQ,
        site: zQ,
        fatal: !1,
        message: DQ,
        details: kQ
      })
    }

    function PF(QQ, FQ, wQ) {
      var LQ;
      let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (LQ = QQ.name) && void 0 !== LQ ? LQ : String(QQ.code);
      const oQ = {
          closeCode: String(QQ.code),
          recognised: String(null !== QQ.name),
          closeReason: wQ.closeReason,
          sinceJoined: (0, xQ.b)(wQ.sinceJoinedMs),
          game: wQ.game,
          ...(0, xQ.g)(),
          wasmBuild: FQ.wasm,
          clientVersion: FQ.client
        },
        DQ = null === QQ.name && !(0, xQ.e)(QQ.code);
      return MF({
        kind: "disconnect",
        code: qQ,
        site: lQ,
        fatal: !1,
        message: "Left room",
        details: oQ,
        toTransport: DQ
      })
    }

    function ZF(QQ, FQ) {
      const wQ = {
        ...(0, mQ.n)(QQ),
        wasmBuild: FQ.wasm,
        clientVersion: FQ.client
      };
      return MF({
        kind: "disconnect",
        code: `reconnect-${QQ.reason}`,
        site: zQ,
        fatal: !1,
        message: "Reconnect failed",
        details: wQ
      })
    }

    function yF(QQ) {
      return QQ.error instanceof SQ.i ? `MODEL-${QQ.error.status}` : QQ.error instanceof iQ.l ? "MODEL-ring" : "MODEL-network"
    }

    function BF(QQ, FQ) {
      const wQ = yF(QQ),
        LQ = `model file ${QQ.file} ${QQ.startup?"(startup) ":""}could not load`,
        qQ = {
          file: String(QQ.file),
          url: QQ.url,
          wasmBuild: FQ.wasm,
          clientVersion: FQ.client
        };
      return MF({
        kind: QQ.startup ? "model" : "modelLate",
        code: wQ,
        site: jQ,
        fatal: QQ.startup,
        message: LQ,
        details: qQ,
        error: QQ.error
      })
    }

    function dF(QQ, FQ) {
      const wQ = {
        wasmBuild: FQ.wasm,
        clientVersion: FQ.client
      };
      return MF({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: aQ,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: wQ,
        error: QQ
      })
    }

    function Qw(QQ, FQ, wQ) {
      const LQ = {
        delayMs: String(FQ),
        wasmBuild: wQ.wasm,
        clientVersion: wQ.client
      };
      QQ instanceof SQ.i && (LQ.status = String(QQ.status));
      return MF({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: aQ,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: LQ,
        error: QQ
      })
    }

    function Fw(QQ, FQ) {
      const wQ = {
        wasmBuild: FQ.wasm,
        clientVersion: FQ.client
      };
      return MF({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: aQ,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: wQ,
        error: QQ
      })
    }

    function ww(QQ, FQ) {
      const wQ = {
        wasmBuild: FQ.wasm,
        clientVersion: FQ.client
      };
      return MF({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: eQ.C,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: wQ,
        error: QQ
      })
    }

    function Lw(QQ, FQ) {
      const wQ = {
        wasmBuild: FQ.wasm,
        clientVersion: FQ.client
      };
      return MF({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: EQ,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: wQ,
        error: QQ
      })
    }

    function qw(QQ, FQ) {
      const {
        frames: wQ,
        acks: LQ,
        mask: qQ,
        outcome: oQ
      } = QQ, DQ = {
        frames: String(wQ),
        acks: String(LQ),
        mask: String(qQ),
        outcome: null !== oQ && void 0 !== oQ ? oQ : "resynced",
        wasmBuild: FQ.wasm,
        clientVersion: FQ.client
      };
      return MF({
        kind: "recovered",
        code: "rejoined" === oQ ? "CORE-eventOverflowRejoin" : "failed" === oQ ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: hQ,
        fatal: !1,
        message: `the event buffer refused records in ${wQ} frames`,
        details: DQ
      })
    }

    function ow(QQ, FQ, wQ) {
      return MF({
        kind: "recovered",
        code: "CORE-workerLost",
        site: QQ,
        fatal: !1,
        message: `a ${QQ} worker was lost`,
        details: {
          reason: FQ,
          wasmBuild: wQ.wasm,
          clientVersion: wQ.client
        }
      })
    }

    function Dw(QQ, FQ, wQ) {
      const LQ = {
        wasmBuild: wQ.wasm,
        clientVersion: wQ.client
      };
      return MF({
        kind: "recovered",
        code: QQ,
        site: eQ.r,
        fatal: !1,
        message: FQ,
        details: LQ
      })
    }

    function kw(QQ, FQ) {
      const wQ = {
        lastReason: QQ,
        wasmBuild: FQ.wasm,
        clientVersion: FQ.client
      };
      return MF({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: eQ.C,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: wQ
      })
    }

    function vw(QQ, FQ, wQ) {
      return MF({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: eQ.n,
        fatal: !1,
        message: (0, cQ.j)(QQ) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: QQ,
          ...FQ,
          wasmBuild: wQ.wasm,
          clientVersion: wQ.client
        }
      })
    }

    function mw(QQ, FQ, wQ, LQ) {
      var qQ, oQ;
      const DQ = (0, vQ.k)(),
        kQ = {
          game: QQ,
          cause: FQ,
          census: null === wQ ? "none" : JSON.stringify(wQ),
          gpu: null !== (qQ = null === (oQ = (0, YQ.q)()) || void 0 === oQ ? void 0 : oQ.renderer) && void 0 !== qQ ? qQ : "",
          renderWarned: String(DQ),
          browser: (0, vQ.j)(),
          wasmBuild: LQ.wasm,
          clientVersion: LQ.client
        },
        mQ = `first view drew no whole terrain in ${WQ.e/1e3} s, ${FQ}${DQ?", render warned":""}`;
      return MF({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: nQ,
        fatal: !1,
        message: mQ,
        details: kQ
      })
    }

    function uw(QQ, FQ, wQ) {
      var LQ, oQ, DQ;
      const kQ = null !== (LQ = (0, qQ.m)(null !== (oQ = null === (DQ = (0, YQ.k)()) || void 0 === DQ ? void 0 : DQ.renderer) && void 0 !== oQ ? oQ : null, (0, YQ.g)())) && void 0 !== LQ ? LQ : "unknown",
        mQ = null === FQ ? "untimed" : `${Math.round(FQ)} ms`,
        uQ = `frames stalled, gpu ${(0,vQ.r)(kQ)}, blocking ${mQ}, drawn ${Math.round(QQ)} ms apart`,
        HQ = {
          gpuModel: kQ,
          wasmBuild: wQ.wasm,
          clientVersion: wQ.client
        };
      return MF({
        kind: "mainStall",
        code: "CORE-mainStall",
        site: gQ,
        fatal: !1,
        message: uQ,
        details: HQ
      })
    }

    function Hw(QQ, FQ, wQ) {
      return MF({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: QQ,
        fatal: !1,
        message: `a ${QQ} worker did not start`,
        details: {
          waitedMs: String(Math.round(FQ)),
          wasmBuild: wQ.wasm,
          clientVersion: wQ.client
        }
      })
    }

    function bw(QQ, FQ, wQ) {
      return MF({
        kind: "recovered",
        code: "CORE-replayFault",
        site: QQ,
        fatal: !1,
        message: `the replay's ${QQ} failed`,
        details: {
          wasmBuild: wQ.wasm,
          clientVersion: wQ.client
        },
        error: FQ
      })
    }
    const Yw = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function xw(QQ, FQ, wQ) {
      const LQ = "lost" === FQ && void 0 !== wQ ? ` (${wQ})` : "";
      return `the ${QQ} ${Yw[FQ]}${LQ}`
    }
    const Aw = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };

    function tw(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now();
      const qQ = null === wQ.boundAtMs ? "unbound" : `up${(0,uQ.c)(LQ-wQ.boundAtMs)}`,
        oQ = null === wQ.adapter ? "no adapter" : (0, uQ.i)(wQ.adapter),
        DQ = `${(0,tQ.k)()?"hidden":"visible"} ${qQ} ${oQ}${!0===wQ.indirectHangs?" ih":""}`;
      if ("pipeline_failed" === QQ) return `${QQ} ${DQ}`;
      const kQ = null === FQ || void 0 === FQ ? void 0 : FQ.message;
      return `${FQ instanceof tQ.g?"timeout":(0,uQ.j)("frames_refused"===QQ,"string"===typeof kQ?kQ:"")} ${DQ}`
    }
    const ew = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function Mw(QQ, FQ, LQ) {
      var oQ, DQ, kQ, mQ, bQ;
      let {
        cause: YQ = "lost",
        error: xQ,
        context: AQ = Aw,
        session: tQ = ew
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const eQ = tw(YQ, xQ, AQ),
        MQ = {
          losses: String(FQ),
          cause: YQ,
          detail: eQ,
          vendor: null !== (oQ = null === (DQ = AQ.adapter) || void 0 === DQ ? void 0 : DQ.vendor) && void 0 !== oQ ? oQ : "",
          architecture: null !== (kQ = null === (mQ = AQ.adapter) || void 0 === mQ ? void 0 : mQ.architecture) && void 0 !== kQ ? kQ : "",
          indirectHangs: String(AQ.indirectHangs),
          samples: String(tQ.samples),
          sunShadows: String(tQ.sunShadows),
          renderDistance: String(tQ.renderDistance),
          gpuFamily: null !== (bQ = (0, qQ.e)()) && void 0 !== bQ ? bQ : "",
          browser: (0, vQ.j)(),
          siteUsed: HQ.r,
          wasmBuild: LQ.wasm,
          clientVersion: LQ.client
        },
        GQ = xw(QQ, YQ),
        pQ = MF({
          kind: "recovered",
          code: "CORE-renderLost",
          site: fQ,
          fatal: !1,
          message: GQ,
          details: MQ,
          error: xQ
        });
      return pF("ga", (async () => {
        const {
          logError: FQ
        } = await Promise.resolve().then((() => wQ(2845))), LQ = `${uQ.b["webgpu"===QQ?"WebGPU":"WebGL2"]}\n Error: ${eQ}`;
        FQ("warning", LQ), FQ("error", LQ)
      })), pQ
    }

    function Gw(QQ, FQ) {
      var wQ, LQ;
      const qQ = null === QQ.name ? "TEXTURE-sources" : null === QQ.url ? "TEXTURE-nourl" : QQ.error instanceof RQ.b ? `TEXTURE-${QQ.error.status}` : "TEXTURE-network",
        oQ = null === QQ.name ? "terrain textures could not load" : `terrain texture ${QQ.name} could not load`,
        DQ = {
          texture: null !== (wQ = QQ.name) && void 0 !== wQ ? wQ : "",
          url: null !== (LQ = QQ.url) && void 0 !== LQ ? LQ : "",
          wasmBuild: FQ.wasm,
          clientVersion: FQ.client
        };
      return MF({
        kind: "terrainTexture",
        code: qQ,
        site: eQ.B,
        fatal: !1,
        message: oQ,
        details: DQ,
        error: QQ.error
      })
    }
    const pw = {
      previewAnimations: {
        site: VQ,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: JQ,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function Cw(QQ, FQ, wQ, LQ) {
      const {
        site: qQ,
        prefix: oQ,
        name: DQ
      } = pw[QQ], {
        stage: kQ,
        error: vQ
      } = wQ;
      return MF({
        kind: QQ,
        code: "decode" === kQ ? null === vQ ? `${oQ}-decode` : `${oQ}-trap` : vQ instanceof SQ.i ? `${oQ}-${vQ.status}` : `${oQ}-network`,
        site: qQ,
        fatal: !1,
        message: "decode" === kQ ? `${DQ} did not decode` : `${DQ} could not load`,
        details: {
          url: FQ,
          wasmBuild: LQ.wasm,
          clientVersion: LQ.client
        },
        error: vQ
      })
    }
    const Sw = "staleBuild";

    function iw(QQ, FQ, wQ) {
      const LQ = {
          failedSite: QQ.site,
          url: QQ.url,
          from: QQ.from,
          sameBuild: String(QQ.from === FQ),
          reloadMs: String(Math.max(0, Date.now() - QQ.at)),
          wasmBuild: wQ.wasm,
          clientVersion: wQ.client
        },
        qQ = `reloaded into a newer build after ${QQ.site} failed to load: ${QQ.error}`;
      return MF({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: Sw,
        fatal: !1,
        message: qQ,
        details: LQ
      })
    }
  },
  40396: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => oQ,
      e: () => qQ,
      g: () => DQ
    });
    var LQ = wQ(4638);
    const qQ = 3e4;
    class oQ {
      constructor(QQ) {
        this.hY = QQ, this.waitedMs = 0, this.lastMs = null
      }
      frame(QQ, FQ) {
        if (FQ) return !0;
        const wQ = null === this.lastMs ? 0 : QQ - this.lastMs;
        return this.lastMs = QQ, wQ <= 900 && (this.waitedMs += wQ), !(this.waitedMs < qQ) && (this.hY(), !0)
      }
    }

    function DQ(QQ, FQ) {
      return 0 === (QQ & LQ.U.ChunkRequested) ? "no_chunk_request" : 0 === (QQ & LQ.U.ChunkStored) ? "chunk_not_stored" : 0 === (QQ & LQ.U.MeshLanded) ? "not_meshed" : null === FQ ? "no_frame_drawn" : 0 === FQ.terrainParts ? "no_terrain_parts" : FQ.terrainCompiling > 0 ? "terrain_compiling" : FQ.terrainOpaque + FQ.terrainTransparent === 0 ? "terrain_not_drawn" : "view_incomplete"
    }
  },
  4626: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ,
      e: () => oQ,
      h: () => qQ
    });
    var LQ = wQ(4632);

    function qQ(QQ) {
      return "none" !== QQ
    }

    function oQ(QQ, FQ) {
      if (!QQ) return "none";
      switch (FQ) {
        case LQ.R.Drawn:
          return "drawn";
        case LQ.R.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function DQ(QQ) {
      return "drawn" === QQ
    }
  },
  40009: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => LQ,
      h: () => eQ,
      k: () => AQ,
      o: () => tQ,
      p: () => bQ,
      r: () => YQ,
      u: () => uQ,
      y: () => HQ,
      z: () => xQ
    });
    class LQ extends Error {
      constructor(QQ) {
        super(`the join's code did not load: ${QQ instanceof Error?QQ.message:String(QQ)}`, {
          cause: QQ
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === QQ || void 0 === QQ ? void 0 : QQ.request
      }
    }
    let qQ = null,
      oQ = null,
      DQ = null;
    const kQ = [];
    let vQ = null;

    function mQ(QQ, FQ) {
      try {
        QQ(FQ)
      } catch (wQ) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", wQ)
      }
    }

    function uQ() {
      return vQ
    }

    function HQ(QQ) {
      kQ.push(QQ), null !== vQ && mQ(QQ, vQ)
    }

    function bQ(QQ) {
      return qQ ??= Promise.all([wQ.e(70), wQ.e(95), wQ.e(216), wQ.e(75), wQ.e(217), wQ.e(190), wQ.e(94), wQ.e(235), wQ.e(261), wQ.e(188), wQ.e(263), wQ.e(200), wQ.e(187), wQ.e(201), wQ.e(137), wQ.e(86), wQ.e(115), wQ.e(239), wQ.e(54)]).then((() => wQ(41954))).then((FQ => {
        FQ.loadAudio(QQ), vQ = FQ;
        for (const QQ of kQ) mQ(QQ, FQ);
        return FQ
      })).catch((QQ => {
        throw qQ = null, QQ
      })), qQ
    }
    async function YQ(QQ, FQ) {
      try {
        const wQ = await bQ(QQ);
        await wQ.loadClientGame(FQ)
      } catch (wQ) {
        throw new LQ(wQ)
      }
    }

    function xQ(QQ, FQ) {
      oQ = {
        running: QQ,
        shell: FQ
      }
    }

    function AQ() {
      return DQ
    }
    async function tQ(QQ) {
      const FQ = oQ;
      if ((null === FQ || void 0 === FQ ? void 0 : FQ.running) !== QQ) throw new Error("the core's session has ended");
      const wQ = await bQ(FQ.shell.audio).catch((QQ => {
        throw new LQ(QQ)
      }));
      if (null !== DQ) return DQ;
      if (oQ !== FQ || QQ.isStopped) throw new Error("the core stopped while the game code loaded");
      if (DQ = wQ.startGameHost(QQ, FQ.shell), null === DQ) throw new Error("the core's shared tables didn't read, so the game can't start");
      return DQ
    }

    function eQ() {
      null !== DQ && (null !== vQ ? vQ.endGameHost(DQ) : DQ.closeGame()), DQ = null, oQ = null
    }
  },
  40283: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      A: () => kQ,
      e: () => mQ,
      i: () => oQ,
      l: () => DQ,
      m: () => qQ,
      q: () => YQ,
      r: () => uQ,
      v: () => vQ,
      x: () => bQ,
      z: () => HQ
    });
    var LQ = wQ(1780);
    const qQ = new Uint8Array([12]),
      oQ = 2e3,
      DQ = 257;

    function kQ(QQ) {
      const FQ = new Uint8Array(4);
      return new DataView(FQ.buffer).setUint32(0, QQ, !0), FQ
    }
    class vQ extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class mQ extends Error {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(QQ), this.stage = FQ, this.code = wQ, this.serverText = LQ, this.name = "JoinError"
      }
    }
    class uQ extends Error {
      constructor(QQ) {
        super(QQ), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class HQ extends Error {
      constructor(QQ) {
        super((0, LQ.c)(QQ), {
          cause: QQ
        }), this.name = "TrafficCheckError"
      }
    }
    class bQ extends Error {
      constructor(QQ, FQ, wQ) {
        super(QQ, {
          cause: wQ
        }), this.networkLost = FQ, this.name = "SeatRequestError"
      }
    }
    class YQ extends Error {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(QQ), this.code = FQ, this.serverText = wQ, this.name = "MatchmakeError"
      }
    }
  },
  40292: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => bQ,
      e: () => HQ
    });
    var LQ = wQ(2511),
      qQ = wQ(3345),
      oQ = wQ(38607),
      DQ = wQ(40275),
      kQ = wQ(40283),
      vQ = wQ(40301);
    const mQ = "seat reservation expired.",
      uQ = "early_leave";

    function HQ(QQ) {
      if (QQ instanceof oQ.d) return "expected";
      if (QQ instanceof kQ.x) return QQ.networkLost ? "expected" : "unrecognised";
      if (QQ instanceof kQ.e) {
        if ("closed" === QQ.stage && (0 === QQ.code || (0, qQ.e)(QQ.code))) return "expected";
        if ("roomError" === QQ.stage && (QQ.serverText === mQ || QQ.serverText === uQ)) return "expected"
      }
      return QQ instanceof kQ.e || QQ instanceof kQ.q ? null === (0, DQ.j)(QQ.code).name ? "unrecognised" : "known" : (0, LQ.c)(QQ) ? "expected" : QQ instanceof kQ.z || QQ instanceof vQ.c ? "known" : "unrecognised"
    }

    function bQ(QQ) {
      return QQ instanceof oQ.d ? "timedOut" : "expected" !== HQ(QQ) || (0, LQ.c)(QQ) || QQ instanceof kQ.e && 1001 === QQ.code ? void 0 : "failed"
    }
  },
  38650: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => RQ,
      h: () => cQ,
      j: () => HQ,
      m: () => CQ,
      p: () => eQ,
      s: () => iQ,
      v: () => WQ
    });
    var LQ = wQ(35938),
      qQ = wQ(36119);
    const oQ = 64 * LQ.e,
      DQ = 40 * LQ.h,
      kQ = 36 * LQ.h,
      vQ = 20 * LQ.h,
      mQ = 2 * LQ.h,
      uQ = 5 * LQ.h;

    function HQ(QQ) {
      return "footprint" !== QQ
    }
    const bQ = 2 * LQ.h,
      YQ = 4 * LQ.h,
      xQ = 35 * LQ.h + bQ + YQ,
      AQ = 6.5 * LQ.h,
      tQ = 132.5 * LQ.e;

    function eQ(QQ) {
      const FQ = AQ + (0, qQ.h)(QQ) + QQ * tQ;
      return Math.ceil((2 * xQ + FQ) / oQ) * oQ
    }
    const MQ = eQ(qQ.d),
      GQ = (LQ.h, LQ.h, LQ.h, {
        targetBytes: DQ,
        leastBytes: vQ
      }),
      pQ = {
        targetBytes: kQ,
        leastBytes: vQ
      };

    function cQ(QQ) {
      return {
        targetBytes: QQ,
        leastBytes: 0
      }
    }

    function CQ(QQ) {
      return QQ >= qQ.d ? GQ : pQ
    }
    const SQ = 2 * oQ;

    function iQ(QQ, FQ, wQ) {
      return QQ + FQ + SQ > (null !== wQ && void 0 !== wQ ? wQ : MQ)
    }
    const WQ = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? QQ => {
        requestIdleCallback(QQ)
      } : null
    };
    class RQ {
      constructor(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WQ;
        this.memory = QQ, this.readPeakStoredChunks = FQ, this.onError = wQ, this.clock = LQ, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(QQ, FQ, wQ) {
        this.shedding = {
          shed: QQ,
          hY: FQ,
          readDistanceInUse: wQ
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(QQ) {
        this.footprint = QQ
      }
      setCeiling(QQ) {
        this.ceilingBytes = QQ, this.call((() => {
          this.memory.setCeiling(QQ)
        }), void 0)
      }
      ceilingMayRefuse(QQ) {
        return iQ(this.memory.memoryBytes(), QQ, this.ceilingBytes)
      }
      reserveAtJoin(QQ) {
        let {
          targetBytes: FQ,
          leastBytes: wQ
        } = QQ;
        const LQ = this.memory.memoryBytes(),
          qQ = LQ + wQ,
          oQ = Math.max(FQ + (this.ballastOn() ? uQ : 0), qQ),
          DQ = this.call((() => this.memory.reserveUpFront(oQ) ? "target" : oQ > qQ && this.memory.reserveUpFront(qQ) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== DQ) {
          const QQ = "least" === DQ ? `took ${qQ} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${oQ} bytes was refused at ${LQ} bytes; ${QQ}`)
        }
        return this.joinReserveTaken = DQ, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== DQ && this.shedFor("joinReserve"), "none" !== DQ
      }
      afterFrame() {
        if (this.stopped) return;
        const QQ = this.clock.now(),
          FQ = null !== this.stepsHeldUntil && QQ >= this.stepsHeldUntil;
        if (FQ && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && QQ >= this.ballastCheckAt && (this.takeBallast(QQ), this.stopped)) return;
        const wQ = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          LQ = FQ && "now" === wQ ? "none" : wQ,
          {
            requestIdle: qQ
          } = this.clock;
        "now" === LQ || null !== this.pendingSince && QQ - this.pendingSince >= 500 ? this.step() : "idle" === LQ && null === this.pendingSince && (null === qQ ? this.step() : (this.pendingSince = QQ, qQ((() => {
          null !== this.pendingSince && this.step()
        })))), QQ - this.statsAt >= 1e3 && (this.statsAt = QQ, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var QQ, FQ;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (FQ = this.shedding.readDistanceInUse()) && void 0 !== FQ ? FQ : this.distanceInUse);
          null === (QQ = this.footprint) || void 0 === QQ || QQ.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(QQ, FQ) {
        this.noteWorker(`Mesh${QQ}`, FQ)
      }
      meshWorkerGone(QQ) {
        this.workerGone(`Mesh${QQ}`)
      }
      noteWorldgen(QQ) {
        this.noteWorker("Worldgen", QQ)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(QQ, FQ) {
        const wQ = this.workers.get(QQ);
        null !== wQ && void 0 !== wQ && wQ.gone && (this.replacedRefusals.reserves += wQ.stats.reservesRefused, this.replacedRefusals.allocations += wQ.stats.allocationsRefused), this.workers.set(QQ, {
          stats: FQ,
          gone: !1
        })
      }
      workerGone(QQ) {
        const FQ = this.workers.get(QQ);
        FQ && (FQ.gone = !0)
      }
      details() {
        var QQ, FQ;
        const wQ = {
          wasmMemoryNow: `${(0,LQ.l)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (wQ.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (wQ.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const qQ = this.main;
        if (qQ) {
          wQ.wasmMemoryMain = OQ(qQ);
          const QQ = Math.max(0, qQ.peakLiveBytes - this.ballastPeakBytes),
            FQ = 0 === this.peakStoredChunks ? "-" : (QQ / this.peakStoredChunks / LQ.e).toFixed(1);
          wQ.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${FQ} KiB`
        }
        for (const [LQ, {
            stats: DQ,
            gone: kQ
          }] of this.workers) wQ[`wasmMemory${LQ}`] = OQ(DQ) + (kQ ? " (gone)" : "");
        const oQ = null !== (QQ = null === (FQ = this.footprint) || void 0 === FQ ? void 0 : FQ.describe()) && void 0 !== QQ ? QQ : null;
        return null !== oQ && (wQ.wasmMemoryFootprint = oQ), wQ
      }
      pageKillSnapshot() {
        var QQ, FQ, wQ, qQ, oQ;
        let DQ = (null !== (QQ = null === (FQ = this.main) || void 0 === FQ ? void 0 : FQ.reservesRefused) && void 0 !== QQ ? QQ : 0) + this.replacedRefusals.reserves,
          kQ = (null !== (wQ = null === (qQ = this.main) || void 0 === qQ ? void 0 : qQ.allocationsRefused) && void 0 !== wQ ? wQ : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: LQ
          }
          of this.workers.values()) DQ += LQ.reservesRefused, kQ += LQ.allocationsRefused;
        return {
          wasmMainMiB: Number((0, LQ.l)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, LQ.l)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: DQ,
          refusedAllocations: kQ,
          sheds: this.sheds,
          ...null === (oQ = this.footprint) || void 0 === oQ ? void 0 : oQ.snapshot()
        }
      }
      workersMemoryBytes() {
        let QQ = 0;
        for (const {
            stats: FQ,
            gone: wQ
          }
          of this.workers.values()) QQ += wQ ? 0 : FQ.memoryBytes;
        return QQ
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(mQ)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(QQ) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = QQ + 1e3;
        const FQ = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, FQ)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(QQ) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${QQ}: frames grow on demand from here`)
      }
      shedFor(QQ) {
        const {
          shedding: FQ
        } = this;
        if (null === FQ) return;
        this.pendingSince = null;
        const wQ = this.call((() => FQ.shed(QQ)), null);
        this.stopped || (null !== wQ ? (this.sheds++, this.shedCap = wQ, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), FQ.hY(QQ, this.sheds, this.details())) : HQ(QQ) && this.stopSteps("nothing is left to shed"))
      }
      call(QQ, FQ) {
        if (this.stopped) return FQ;
        try {
          return QQ()
        } catch (wQ) {
          return this.stop(), this.onError(wQ), FQ
        }
      }
    }

    function OQ(QQ) {
      const FQ = (QQ, FQ) => `${QQ}/${(0,LQ.l)(FQ)}`;
      return `memory ${(0,LQ.l)(QQ.memoryBytes)} live ${(0,LQ.l)(QQ.liveBytes)} peak ${(0,LQ.l)(QQ.peakLiveBytes)} unused ${(0,LQ.l)(QQ.unusedBytes)} ceiling ${(0,LQ.l)(QQ.ceilingBytes)} MiB; grows upFront ${FQ(QQ.grows.upFront,QQ.grownBytes.upFront)} ahead ${FQ(QQ.grows.ahead,QQ.grownBytes.ahead)} inFrame ${FQ(QQ.grows.onDemandInFrame,QQ.grownBytes.onDemandInFrame)} other ${FQ(QQ.grows.onDemand,QQ.grownBytes.onDemand)}; refused reserves ${QQ.reservesRefused} allocations ${QQ.allocationsRefused}`
    }
  },
  40380: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => vQ,
      e: () => mQ,
      h: () => YQ,
      l: () => HQ
    });
    var LQ = wQ(2811),
      qQ = wQ(4632),
      oQ = wQ(40385),
      DQ = wQ(40388),
      kQ = wQ(35943);
    const vQ = 395,
      mQ = 2147483648,
      uQ = new Uint8Array(0);
    class HQ extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class bQ extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class YQ {
      constructor(QQ, FQ, wQ) {
        var LQ, qQ, DQ, kQ;
        let vQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = QQ, this.build = FQ, this.onFailure = wQ, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.iY = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (LQ = vQ.fetchFile) && void 0 !== LQ ? LQ : QQ => (0, oQ.j)(QQ), this.onWritten = null !== (qQ = vQ.onWritten) && void 0 !== qQ ? qQ : null, this.onTaken = null !== (DQ = vQ.onTaken) && void 0 !== DQ ? DQ : null, this.onPackFileFailed = null !== (kQ = vQ.onPackFileFailed) && void 0 !== kQ ? kQ : null, this.startupLeft = new Set(QQ.startup);
        for (const oQ of QQ.startup) this.request(oQ)
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
      drawnUrl(QQ) {
        return this.drawn.get(QQ)
      }
      request(QQ) {
        const FQ = this.pending.get(QQ);
        if (!0 === (null === FQ || void 0 === FQ ? void 0 : FQ.ask)) return;
        const wQ = this.mY(QQ, !0);
        wQ.recheck = void 0 !== FQ;
        const LQ = this.drawn.get(QQ);
        if (void 0 !== LQ) return wQ.ym = !0, wQ.recheck = !0, void this.fetch(QQ, wQ, LQ);
        this.fetchWanted(QQ, wQ)
      }
      async refresh() {
        const QQ = ++this.refreshes,
          FQ = new Set;
        for (const DQ of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const QQ of DQ) 0 === (QQ & oQ.h) && FQ.add(QQ);
        const wQ = [...FQ];
        let LQ;
        try {
          LQ = await Promise.all(wQ.map((QQ => this.wanted(QQ))))
        } catch {
          return null
        }
        if (QQ !== this.refreshes) return null;
        const qQ = {
          resent: 0,
          refetched: 0,
          delivered: wQ.filter((QQ => this.drawn.has(QQ))).length
        };
        return wQ.forEach(((QQ, FQ) => {
          const {
            url: wQ,
            inPlaceOf: oQ
          } = LQ[FQ], DQ = this.pending.get(QQ);
          if (void 0 !== DQ) {
            if (DQ.ym || void 0 === DQ.url) return void(DQ.recheck = !0);
            if (DQ.url === wQ) return;
            qQ.refetched++;
            const FQ = this.mY(QQ, DQ.ask);
            return FQ.recheck = DQ.recheck, void this.fetch(QQ, FQ, wQ, oQ)
          }
          const kQ = this.written.get(QQ);
          void 0 === kQ ? this.drawn.get(QQ) !== (null !== wQ && void 0 !== wQ ? wQ : void 0) && (qQ.resent++, this.fetch(QQ, this.mY(QQ, !1), wQ, oQ)) : kQ.url !== (null !== wQ && void 0 !== wQ ? wQ : "") && (kQ.attempt.recheck = !0)
        })), qQ
      }
      taken(QQ, FQ) {
        const wQ = new Set,
          LQ = new Set;
        for (const qQ of Array.from(FQ)) 0 === (qQ & mQ) ? wQ.add(qQ) : LQ.add((qQ & ~mQ) >>> 0);
        for (const [qQ, oQ] of this.written) oQ.seq > QQ || (this.written.delete(qQ), wQ.has(oQ.seq) ? this.refusedFile(qQ, oQ) : this.takenFile(qQ, oQ, !oQ.empty && !LQ.has(oQ.seq)))
      }
      takenFile(QQ, FQ, wQ) {
        const {
          attempt: LQ
        } = FQ;
        if (wQ) {
          var qQ;
          this.drawn.set(QQ, FQ.url), this.undrawn.delete(QQ), void 0 !== LQ.inPlaceOf ? this.refusedPack.set(QQ, LQ.inPlaceOf) : LQ.ym || this.refusedPack.delete(QQ), null === (qQ = this.onTaken) || void 0 === qQ || qQ.call(this, QQ, !0);
          const wQ = this.pending.get(QQ);
          if (!0 === (null === wQ || void 0 === wQ ? void 0 : wQ.ym) && wQ.url !== FQ.url) {
            const wQ = this.mY(QQ, !0);
            wQ.ym = !0, wQ.recheck = !0, this.fetch(QQ, wQ, FQ.url)
          }
        } else {
          var oQ;
          this.drawn.has(QQ) || this.undrawn.add(QQ), null === (oQ = this.onTaken) || void 0 === oQ || oQ.call(this, QQ, !1)
        }
        LQ.recheck && this.resendIfChanged(QQ)
      }
      refusedFile(QQ, FQ) {
        var wQ, LQ;
        if (null === (wQ = this.onTaken) || void 0 === wQ || wQ.call(this, QQ, !1), this.refusedPack.set(QQ, FQ.url), this.pending.has(QQ)) return void(null === (LQ = this.onPackFileFailed) || void 0 === LQ || LQ.call(this, QQ, xQ(FQ.url)));
        const qQ = this.mY(QQ, FQ.attempt.ask);
        qQ.recheck = FQ.attempt.recheck, this.afterRefusal(QQ, qQ, FQ.url)
      }
      async afterRefusal(QQ, FQ, wQ) {
        var LQ;
        let qQ;
        try {
          qQ = await this.wanted(QQ)
        } catch (oQ) {
          return void(this.pending.get(QQ) === FQ && this.giveUp(QQ, FQ, wQ, oQ))
        }
        this.pending.get(QQ) === FQ && (qQ.inPlaceOf !== wQ ? FQ.ask || (null !== (LQ = qQ.url) && void 0 !== LQ ? LQ : void 0) !== this.drawn.get(QQ) ? this.fetch(QQ, FQ, qQ.url, qQ.inPlaceOf) : this.pending.delete(QQ) : this.fallBack(QQ, FQ, wQ, xQ(wQ)))
      }
      mY(QQ, FQ) {
        const wQ = {
          url: void 0,
          ask: FQ,
          ym: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(QQ, wQ);
        for (let LQ = this.ready.length - 1; LQ >= 0; LQ--) this.ready[LQ].file === QQ && this.ready.splice(LQ, 1);
        return wQ
      }
      async wanted(QQ) {
        const FQ = await this.files.url(QQ);
        return null !== FQ && this.refusedPack.get(QQ) === FQ ? {
          url: await this.files.shippedUrl(QQ),
          inPlaceOf: FQ
        } : {
          url: FQ,
          inPlaceOf: void 0
        }
      }
      fetchWanted(QQ, FQ) {
        const wQ = this.files.url(QQ);
        wQ instanceof Promise ? wQ.then((wQ => {
          this.fetchFound(QQ, FQ, wQ)
        }), (wQ => {
          this.pending.get(QQ) === FQ && this.giveUp(QQ, FQ, "", wQ)
        })) : this.fetchFound(QQ, FQ, wQ)
      }
      fetchFound(QQ, FQ, wQ) {
        null !== wQ && this.refusedPack.get(QQ) === wQ ? Promise.resolve(this.files.shippedUrl(QQ)).then((LQ => {
          this.fetch(QQ, FQ, LQ, wQ)
        }), (LQ => {
          this.pending.get(QQ) === FQ && this.giveUp(QQ, FQ, wQ, LQ)
        })) : this.fetch(QQ, FQ, wQ)
      }
      fetch(QQ, FQ, wQ, LQ) {
        this.pending.get(QQ) === FQ && (FQ.url = wQ, FQ.inPlaceOf = LQ, null !== wQ ? this.load(QQ, FQ, wQ) : this.buildFile(QQ, FQ, "", uQ))
      }
      load(QQ, FQ, wQ) {
        const LQ = this.iY.get(QQ);
        (null === LQ || void 0 === LQ ? void 0 : LQ.url) !== wQ ? this.fetchFile(wQ).then((LQ => {
          var qQ, oQ;
          this.pending.get(QQ) === FQ && (this.keptTotal += LQ.byteLength - (null !== (qQ = null === (oQ = this.iY.get(QQ)) || void 0 === oQ ? void 0 : oQ.glb.byteLength) && void 0 !== qQ ? qQ : 0), this.iY.set(QQ, {
            url: wQ,
            glb: LQ
          }), this.buildFile(QQ, FQ, wQ, LQ))
        }), (LQ => {
          this.pending.get(QQ) === FQ && this.fallBack(QQ, FQ, wQ, LQ)
        })) : this.buildFile(QQ, FQ, wQ, LQ.glb)
      }
      buildFile(QQ, FQ, wQ, LQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const DQ = LQ.byteLength > 0 && (0, oQ.n)(wQ) ? (QQ | oQ.d) >>> 0 : QQ;
        this.queueRecord(QQ, FQ, wQ, LQ, this.build(DQ, LQ), qQ)
      }
      queueRecord(QQ, FQ, wQ, LQ, oQ, kQ) {
        oQ.then((oQ => {
          if (this.pending.get(QQ) !== FQ) return;
          if (qQ.m + (0, qQ.Yd)(oQ.byteLength) > qQ.tc) return void this.ringRefused(QQ, FQ, wQ, new HQ(`${AQ(wQ)}'s record is ${oQ.byteLength-DQ.b} bytes, past the cmd ring's ${qQ.tc}`), kQ);
          const vQ = {
            file: QQ,
            url: wQ,
            payload: oQ,
            glb: LQ,
            attempt: FQ
          };
          kQ ? this.ready.unshift(vQ) : this.ready.push(vQ)
        }))
      }
      async fallBack(QQ, FQ, wQ, LQ) {
        var qQ;
        let oQ = null,
          DQ = LQ;
        try {
          oQ = await this.files.shippedUrl(QQ)
        } catch (kQ) {
          DQ = kQ
        }
        this.pending.get(QQ) === FQ && (null !== oQ && oQ !== wQ ? (null === (qQ = this.onPackFileFailed) || void 0 === qQ || qQ.call(this, QQ, LQ), FQ.ask || this.drawn.get(QQ) !== oQ ? (FQ.url = oQ, FQ.inPlaceOf = wQ, this.load(QQ, FQ, oQ)) : this.pending.delete(QQ)) : this.giveUp(QQ, FQ, wQ, DQ))
      }
      ringRefused(QQ, FQ, wQ, LQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, oQ.n)(wQ) ? this.fallBack(QQ, FQ, wQ, LQ): this.giveUp(QQ, FQ, wQ, LQ, qQ)
      }
      giveUp(QQ, FQ, wQ, qQ) {
        let oQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: QQ,
          url: AQ(wQ),
          error: qQ,
          startup: this.startupLeft.has(QQ)
        }), FQ.ask || !this.drawn.has(QQ) ? (0, LQ.fb)(qQ) ? this.queueRecord(QQ, FQ, wQ, uQ, Promise.resolve((0, DQ.r)(QQ, (0, kQ.k)(qQ))), oQ) : this.buildFile(QQ, FQ, wQ, uQ, oQ) : this.pending.delete(QQ)
      }
      async resendIfChanged(QQ) {
        var FQ;
        if (0 !== (QQ & oQ.h)) return;
        let wQ;
        try {
          wQ = await this.wanted(QQ)
        } catch {
          return
        }(null !== (FQ = wQ.url) && void 0 !== FQ ? FQ : void 0) === this.drawn.get(QQ) || this.pending.has(QQ) || this.written.has(QQ) || this.fetch(QQ, this.mY(QQ, !1), wQ.url, wQ.inPlaceOf)
      }
      drain(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === QQ) return;
        let wQ = 0,
          LQ = 0;
        for (; LQ < this.ready.length && wQ < 262144;) {
          const kQ = this.ready[LQ];
          if (this.written.has(kQ.file)) {
            LQ++;
            continue
          }
          const uQ = this.nextSeq;
          new DataView(kQ.payload.buffer, kQ.payload.byteOffset, kQ.payload.byteLength).setUint32(DQ.f, uQ, !0);
          const bQ = kQ.attempt.ym && kQ.glb.byteLength > 0 && this.drawn.get(kQ.file) === kQ.url;
          if (QQ(vQ, bQ ? 1 : 0, kQ.payload)) {
            if (this.nextSeq = uQ >= mQ - 1 ? 1 : uQ + 1, this.ready.splice(LQ, 1), wQ += kQ.payload.byteLength, this.pending.delete(kQ.file), this.startupLeft.delete(kQ.file), this.written.set(kQ.file, {
                seq: uQ,
                url: kQ.url,
                empty: 0 === kQ.glb.byteLength,
                attempt: kQ.attempt
              }), kQ.glb.byteLength > 0) try {
              var qQ;
              null === (qQ = this.onWritten) || void 0 === qQ || qQ.call(this, kQ.file, kQ.glb)
            } catch (oQ) {
              console.warn("ModelFeed: reading the file's images failed", oQ)
            }
          } else {
            if (null === FQ || 0 === kQ.glb.byteLength || FQ(kQ.payload.byteLength)) return;
            this.ready.splice(LQ, 1);
            const QQ = new HQ(`${AQ(kQ.url)}'s record is ${kQ.payload.byteLength-DQ.b} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(kQ.file, kQ.attempt, kQ.url, QQ, !0)
          }
        }
      }
    }

    function xQ(QQ) {
      return new bQ(`presentation refused ${AQ(QQ)}`)
    }

    function AQ(QQ) {
      return QQ.startsWith("data:") ? `${QQ.slice(0,Math.min(Math.max(QQ.indexOf(","),5),64))},...` : QQ
    }
  },
  40385: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => DQ,
      h: () => oQ,
      j: () => uQ,
      n: () => kQ,
      o: () => mQ,
      r: () => vQ
    });
    var LQ = wQ(2811),
      qQ = wQ(3091);
    const oQ = 2147483648,
      DQ = 1073741824;

    function kQ(QQ) {
      return QQ.startsWith("data:")
    }

    function vQ(QQ) {
      let {
        onTableFailed: FQ,
        packUrl: wQ
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const LQ = mQ();
      LQ.catch((QQ => {
        null === FQ || void 0 === FQ || FQ(QQ)
      }));
      const qQ = async FQ => (await LQ).fileUrl((FQ & ~oQ) >>> 0, QQ);
      return {
        startup: [],
        url: async QQ => {
          if (wQ && 0 === (QQ & oQ)) {
            const FQ = await LQ,
              qQ = FQ.filePackName(QQ),
              oQ = null === qQ || "lifeform" === FQ.fileSource(QQ) ? null : wQ(qQ);
            if (null !== oQ) return oQ
          }
          return qQ(QQ)
        },
        shippedUrl: qQ
      }
    }

    function mQ() {
      return wQ.e(41).then((() => wQ(42788)))
    }
    async function uQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return QQ.startsWith("data:") ? (0, qQ.c)(QQ.slice(QQ.indexOf(",") + 1), FQ) : (0, LQ.T)(QQ, {
        spare: FQ
      })
    }
  },
  40388: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => mQ,
      f: () => uQ,
      j: () => YQ,
      n: () => tQ,
      r: () => xQ,
      s: () => bQ,
      v: () => AQ
    });
    const LQ = 826427981,
      qQ = 1,
      oQ = 2,
      DQ = 44,
      kQ = 46,
      vQ = 58,
      mQ = 8,
      uQ = 4;

    function HQ(QQ, FQ, wQ) {
      const qQ = (new TextEncoder).encode(wQ),
        oQ = mQ + 4 * (FQ.length + 2),
        DQ = new Uint8Array(oQ + (qQ.byteLength + 3 & -4)),
        kQ = new DataView(DQ.buffer);
      return kQ.setUint32(0, QQ, !0), kQ.setUint32(mQ, LQ, !0), FQ.forEach(((QQ, FQ) => {
        kQ.setUint32(mQ + 4 * (FQ + 1), QQ, !0)
      })), kQ.setUint32(oQ - 4, qQ.byteLength, !0), DQ.set(qQ, oQ), DQ
    }

    function bQ(QQ, FQ) {
      return HQ(QQ, [oQ], FQ)
    }

    function YQ(QQ, FQ) {
      return HQ(QQ, [qQ, kQ], FQ)
    }

    function xQ(QQ, FQ) {
      return HQ(QQ, [qQ, vQ], FQ)
    }

    function AQ(QQ, FQ) {
      return HQ(QQ, [qQ, DQ], FQ)
    }

    function tQ(QQ) {
      const FQ = mQ;
      if (QQ.byteLength < FQ + 12) return !1;
      const wQ = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength);
      return wQ.getUint32(FQ, !0) === LQ && wQ.getUint32(FQ + 4, !0) === qQ && wQ.getUint32(FQ + 8, !0) === DQ
    }
  },
  40378: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => cQ,
      g: () => tQ,
      j: () => pQ,
      k: () => WQ,
      o: () => iQ,
      p: () => RQ,
      r: () => MQ
    });
    var LQ = wQ(4638),
      qQ = wQ(40259);
    const oQ = 1,
      DQ = 18,
      kQ = 19,
      vQ = 20,
      mQ = {
        [oQ]: "link",
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
        [DQ]: "retry linked",
        [kQ]: "fallback linked",
        [vQ]: "fallback failed",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function uQ(QQ, FQ, wQ) {
      return QQ === DQ ? "program retry" : QQ === oQ ? "program link" : QQ === kQ || QQ === vQ ? `program ${FQ} ${wQ}` : "program"
    }
    const HQ = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      bQ = {
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
      YQ = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      xQ = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld"
      },
      AQ = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function tQ(QQ, FQ) {
      return QQ === LQ.h.RenderSerialLinks && void 0 !== AQ[15 & FQ]
    }
    const eQ = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function MQ(QQ) {
      return String(QQ).replace(/\d/g, (QQ => String.fromCharCode(97 + Number(QQ))))
    }

    function GQ(QQ, FQ) {
      var wQ;
      return null !== (wQ = QQ[FQ]) && void 0 !== wQ ? wQ : MQ(FQ)
    }

    function pQ() {
      return MQ((0, qQ.d)())
    }

    function cQ(QQ, FQ) {
      switch (QQ) {
        case LQ.h.RenderSceneRowNotDrawn:
          return {
            words: ` ${GQ(bQ,FQ)}`, instance: String(FQ), group: String(QQ)
          };
        case LQ.h.RenderChunkMeshNotDrawn: {
          const wQ = 0 === (128 & FQ) ? "" : " shortage",
            LQ = FQ >>> 8;
          return {
            words: ` ${GQ(YQ,127&FQ)}${wQ}${0===LQ?"":` kind ${MQ(LQ)}`}`,
            instance: String(FQ),
            group: String(QQ)
          }
        }
        case LQ.h.RenderInternal: {
          const wQ = GQ(HQ, 255 & FQ),
            LQ = FQ >>> 8 & 255;
          if (0 === LQ) return {
            words: ` ${wQ}`,
            instance: String(FQ),
            group: String(QQ)
          };
          const qQ = GQ(mQ, LQ),
            oQ = FQ >>> 16;
          return {
            words: ` ${wQ} ${qQ} program ${MQ(oQ)}`,
            instance: `${wQ} ${qQ} ${oQ}`,
            group: uQ(LQ, qQ, wQ),
            gpuDetails: {
              programFailure: qQ,
              program: String(oQ)
            }
          }
        }
        case LQ.h.RenderSerialLinks: {
          if (tQ(QQ, FQ)) {
            const QQ = function(QQ) {
              const FQ = (FQ, wQ) => MQ(QQ >>> FQ & (1 << wQ) - 1),
                wQ = QQ >>> 30 & 1 ? " restored" : "";
              return `link census ${AQ[15&QQ]} linked ${FQ(22,8)} failed ${FQ(4,6)} retried ${FQ(10,6)} fallback ${FQ(16,6)}${wQ}`
            }(FQ);
            return {
              words: ` ${QQ}`,
              instance: String(15 & FQ),
              group: "link census",
              gpuDetails: {
                linkCensus: QQ
              }
            }
          }
          const wQ = GQ(xQ, FQ);
          return {
            words: ` ${wQ}`,
            instance: String(FQ),
            group: String(QQ),
            gpuDetails: {
              serialLinks: wQ
            }
          }
        }
        case LQ.h.RenderGlErrorAfterRestore: {
          const wQ = GQ(eQ, 65535 & FQ),
            LQ = FQ >>> 16,
            qQ = 65535 !== LQ;
          return {
            words: ` ${wQ}${qQ?` program ${MQ(LQ)}`:""}`,
            instance: String(FQ),
            group: String(QQ),
            gpuDetails: qQ ? {
              glError: wQ,
              program: String(LQ)
            } : {
              glError: wQ
            }
          }
        }
        default:
          return null
      }
    }
    const CQ = 2,
      SQ = new Map;

    function iQ(QQ) {
      let {
        group: FQ,
        instance: wQ
      } = QQ, LQ = SQ.get(FQ);
      return void 0 === LQ && (LQ = [], SQ.set(FQ, LQ)), !LQ.includes(wQ) && (LQ.length >= CQ || (LQ.push(wQ), !1))
    }

    function WQ() {
      return SQ.size > 0
    }

    function RQ() {
      SQ.clear()
    }
  },
  40301: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => eQ,
      c: () => MQ,
      e: () => tQ,
      h: () => CQ
    });
    var LQ = wQ(6470),
      qQ = wQ(22),
      oQ = wQ(4184),
      DQ = wQ(4638),
      kQ = wQ(6467),
      vQ = wQ(40307);

    function mQ(QQ, FQ) {
      const wQ = (0, kQ.c)(FQ.variants);
      return QQ.setShaderPack(wQ.variantFlags, wQ.hooks, wQ.moduleCodes, (0, vQ.D)(FQ.layers), vQ.n[FQ.Hm], FQ.keepCircleShadows)
    }
    const uQ = 0,
      HQ = 1,
      bQ = 2,
      YQ = "shaderPack:failedToCompile",
      xQ = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      AQ = new Set(["not_requested", "off_after_loss", "gpu_class_webgl"]);

    function tQ(QQ, FQ) {
      var wQ;
      const LQ = null !== (wQ = null === QQ || void 0 === QQ ? void 0 : QQ.reason) && void 0 !== wQ ? wQ : "none";
      return xQ.has(LQ) ? {
        messageKey: FQ ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === LQ && "override" === (null === QQ || void 0 === QQ ? void 0 : QQ.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: AQ.has(LQ) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    const eQ = {
      messageKey: "shaderPack:failedDeviceGraphics",
      noAdapter: !1
    };
    class MQ extends Error {
      constructor(QQ) {
        super(`the shader pack can't run in this game: ${QQ}`), this.messageKey = QQ, this.name = "ShaderPackJoinError"
      }
    }
    const GQ = "strict";
    class pQ {
      constructor(QQ) {
        this.deps = QQ, this.pagePack = void 0, this.loaded = null, this.Hm = GQ, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = QQ.load().catch((FQ => (QQ.warn("the shader pack could not load: the game draws without it", FQ), {
          status: "none"
        }))).then((QQ => (this.loaded = QQ, "active" === QQ.status && (this.handOverToPreviews(QQ), null !== QQ.harnessPolicy && (this.Hm = QQ.harnessPolicy, this.handOver())), QQ)))
      }
      async join(QQ) {
        this.leave();
        const FQ = this.game,
          [wQ, qQ] = await Promise.all([this.pagePack, this.policyOf(QQ)]);
        if (FQ !== this.game || "none" === wQ.status) return null;
        const oQ = "active" === wQ.status ? wQ.pack.variants : wQ.variants,
          DQ = (0, LQ.l)(oQ, qQ);
        if (DQ && "active" === wQ.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (DQ) {
          const QQ = this.cantRun(wQ, qQ);
          if (null !== QQ) return QQ
        } else if ("blocked" === wQ.status || null === this.deps.core) return null;
        return this.Hm = qQ, this.handOver(), DQ && this.refused ? YQ : (this.joined = !0, this.offInThisGame = !DQ, null)
      }
      async replay(QQ) {
        const FQ = await this.join(QQ);
        null === FQ ? this.playable() : this.deps.failInGame(FQ)
      }
      cantRun(QQ, FQ) {
        const {
          core: wQ,
          noWebGpu: LQ
        } = this.deps;
        if ("blocked" === QQ.status) {
          return "shaderPack:failedUnchecked" === QQ.messageKey && null === wQ && LQ.noAdapter ? LQ.messageKey : QQ.messageKey
        }
        return this.refused || this.failedPolicies.has(FQ) ? YQ : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var QQ;
        return this.runsInJoinedGame() && "active" === (null === (QQ = this.loaded) || void 0 === QQ ? void 0 : QQ.status) ? function(QQ, FQ) {
          const wQ = QQ.filter((QQ => (0, LQ.l)([QQ], FQ))),
            qQ = QQ => wQ.some((FQ => FQ[QQ]));
          return {
            sceneDepth: qQ("sceneDepth"),
            sunShadow: qQ("sunShadow"),
            airShadow: qQ("airShadow")
          }
        }(this.loaded.pack.variants, this.Hm) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(YQ) : (null !== this.couldntRun ? this.notify(oQ.c, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.Hm) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(QQ) {
        for (const {
            code: FQ,
            detail: wQ
          }
          of QQ)
          if (FQ === DQ.h.RenderShaderPackNotRun) switch (255 & wQ) {
            case uQ:
              this.refused = !0, this.failed();
              break;
            case HQ:
              this.failedPolicies.add(this.Hm), this.failed();
              break;
            case bQ:
              this.failedModelPolicies.add(this.Hm), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(YQ) : this.failedWhileJoining = !0)
      }
      fail(QQ) {
        this.leave(), this.deps.failInGame(QQ)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(QQ, FQ) {
        const wQ = this.game;
        this.deps.notify(QQ, (() => wQ === this.game && this.joined), FQ)
      }
      handOver() {
        var QQ;
        const {
          core: FQ
        } = this.deps;
        null !== FQ && "active" === (null === (QQ = this.loaded) || void 0 === QQ ? void 0 : QQ.status) && (mQ(FQ, {
          ...this.loaded.pack,
          Hm: this.Hm
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(QQ) {
        let {
          pack: FQ,
          harnessPolicy: wQ
        } = QQ;
        const {
          previews: LQ
        } = this.deps;
        null !== LQ && mQ(LQ, {
          ...FQ,
          Hm: null !== wQ && void 0 !== wQ ? wQ : GQ
        })
      }
      policyOf(QQ) {
        return this.deps.policyOf(QQ).catch((QQ => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", QQ), GQ)))
      }
    }
    const cQ = "wasmShaderPackNotice";

    function CQ(QQ, FQ, wQ, LQ) {
      return qQ.l.subscribe(cQ, (QQ => {
        let {
          translationKey: FQ,
          stillCurrent: wQ,
          reasonKey: LQ
        } = QQ;
        wQ() && qQ.l.GA("chat", (0, oQ.h)(FQ, LQ))
      })), new pQ({
        load: SQ,
        policyOf: iQ,
        core: QQ,
        previews: FQ,
        noWebGpu: wQ,
        notify: (QQ, FQ, wQ) => {
          const LQ = {
            translationKey: QQ,
            stillCurrent: FQ,
            reasonKey: wQ
          };
          qQ.l.GA(cQ, LQ, !0)
        },
        failInGame: QQ => {
          qQ.l.GA(oQ.e, QQ)
        },
        warn: LQ
      })
    }
    async function SQ() {
      const [{
        shaderPackPage: QQ,
        harnessShaderPackMode: FQ
      }, {
        shaderPackTextures: LQ
      }] = await Promise.all([wQ.e(130).then((() => wQ(38741))), wQ.e(131).then((() => wQ(6460)))]), qQ = await QQ.load();
      return "active" !== qQ.status ? qQ : {
        status: "active",
        pack: {
          variants: qQ.pack.variants,
          layers: LQ().layers,
          keepCircleShadows: qQ.pack.keepCircleShadows
        },
        harnessPolicy: FQ()
      }
    }
    async function iQ(QQ) {
      var FQ;
      const [{
        harnessShaderPackMode: LQ
      }, {
        getShaderPackPolicy: qQ
      }] = await Promise.all([wQ.e(130).then((() => wQ(38741))), wQ.e(90).then((() => wQ(40660)))]);
      return null !== (FQ = LQ()) && void 0 !== FQ ? FQ : qQ(QQ)
    }
  },
  40399: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => kQ,
      f: () => tQ,
      h: () => vQ,
      l: () => mQ,
      o: () => uQ,
      s: () => bQ
    });
    var LQ = wQ(40407),
      qQ = wQ(40411);
    const oQ = "atlas:",
      DQ = 3e4;
    class kQ extends Error {
      constructor(QQ, FQ) {
        super(`fetching ${QQ} answered HTTP ${FQ}`), this.url = QQ, this.status = FQ, this.name = "TerrainTextureFetchError"
      }
    }

    function vQ(QQ) {
      if (!QQ.startsWith(oQ)) return null;
      const FQ = Number(QQ.slice(oQ.length));
      return Number.isInteger(FQ) && FQ >= 0 ? FQ : null
    }
    async function mQ() {
      const QQ = await wQ.e(202).then((() => wQ(33928)));
      return {
        atlasSheets: QQ.blockAtlasUrls,
        texture: FQ => {
          var wQ, LQ, oQ;
          return null !== (wQ = null !== (LQ = null !== (oQ = QQ.animatedBlockTextures[FQ]) && void 0 !== oQ ? oQ : QQ.rotatedBlockTextures[FQ]) && void 0 !== LQ ? LQ : qQ.e[FQ]) && void 0 !== wQ ? wQ : null
        }
      }
    }
    async function uQ(QQ) {
      const FQ = new AbortController,
        wQ = setTimeout((() => {
          FQ.abort(new DOMException(`${QQ} took over ${DQ} ms`, "TimeoutError"))
        }), DQ);
      let LQ;
      try {
        const wQ = await fetch(QQ, {
          signal: FQ.signal
        });
        if (!wQ.ok) throw new kQ(QQ, wQ.status);
        LQ = await wQ.blob()
      } finally {
        clearTimeout(wQ)
      }
      const qQ = await createImageBitmap(LQ, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return bQ(qQ)
      } finally {
        qQ.close()
      }
    }
    const HQ = 8192;

    function bQ(QQ) {
      const {
        width: FQ,
        height: wQ
      } = QQ, qQ = Math.max(1, Math.min(wQ, HQ)), oQ = (0, LQ.d)(FQ, qQ, {
        willReadFrequently: !0
      });
      if (!oQ) throw new Error("no 2D context to read the texture back");
      oQ.globalCompositeOperation = "copy";
      const DQ = new Uint8Array(FQ * wQ * 4);
      for (let LQ = 0; LQ < wQ; LQ += qQ) {
        const kQ = Math.min(qQ, wQ - LQ);
        oQ.drawImage(QQ, 0, LQ, FQ, kQ, 0, 0, FQ, kQ), DQ.set(oQ.getImageData(0, 0, FQ, kQ).data, LQ * FQ * 4)
      }
      return {
        width: FQ,
        height: wQ,
        pixels: DQ
      }
    }
    async function YQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uQ;
      const LQ = [],
        qQ = await Promise.all(QQ.map((async QQ => {
          var qQ, DQ;
          const kQ = null !== (qQ = null === (DQ = FQ.decoded) || void 0 === DQ ? void 0 : DQ.call(FQ, QQ)) && void 0 !== qQ ? qQ : null,
            mQ = null === kQ ? function(QQ, FQ) {
              if (QQ.startsWith(oQ)) {
                var wQ;
                const LQ = vQ(QQ);
                return null === LQ ? null : null !== (wQ = FQ.atlasSheets[LQ]) && void 0 !== wQ ? wQ : null
              }
              return FQ.texture(QQ)
            }(QQ, FQ) : null,
            uQ = null !== kQ && void 0 !== kQ ? kQ : null === mQ ? null : wQ(mQ);
          if (null === uQ) return LQ.push({
            name: QQ,
            url: mQ,
            error: new Error(`no URL for terrain texture ${QQ}`)
          }), null;
          try {
            const FQ = await uQ;
            if (FQ.pixels.byteLength !== FQ.width * FQ.height * 4) throw new Error(`decoded ${FQ.pixels.byteLength} bytes for ${FQ.width}x${FQ.height} texels`);
            return {
              name: QQ,
              texture: FQ
            }
          } catch (HQ) {
            return LQ.push({
              name: QQ,
              url: mQ,
              error: HQ
            }), null
          }
        }))),
        DQ = qQ.filter((QQ => null !== QQ)),
        kQ = new Uint32Array(2 * DQ.length);
      DQ.forEach(((QQ, FQ) => {
        let {
          texture: wQ
        } = QQ;
        kQ[2 * FQ] = wQ.width, kQ[2 * FQ + 1] = wQ.height
      }));
      return {
        handOver: {
          names: DQ.map((QQ => {
            let {
              name: FQ
            } = QQ;
            return FQ
          })),
          textures: DQ.map((QQ => {
            let {
              texture: FQ
            } = QQ;
            return FQ.pixels
          })),
          sizes: kQ
        },
        failures: LQ
      }
    }
    const xQ = [2e3, 1e4, 3e4, 6e4, 12e4];

    function AQ() {}
    class tQ {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xQ,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = QQ, this.retryMs = FQ, this.keepBelow = wQ, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mQ,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const LQ = ++this.started,
          qQ = {
            decode: wQ.decode,
            wholeAtlas: wQ.wholeAtlas
          };
        return this.loadAndHandOver(FQ, qQ, QQ, (() => {
          var QQ;
          return LQ < this.landed || !1 === (null === (QQ = wQ.wanted) || void 0 === QQ ? void 0 : QQ.call(wQ))
        }), {
          onTaken: (QQ, wQ) => {
            this.landed = LQ, this.current = {
              mine: LQ,
              sources: FQ,
              load: qQ,
              iY: QQ,
              failed: wQ
            }
          }
        })
      }
      restore(QQ) {
        var FQ;
        const wQ = this.current;
        if (null === wQ) return Promise.resolve(null);
        if ((null === (FQ = this.restoring) || void 0 === FQ ? void 0 : FQ.mine) === wQ.mine) return this.restoring.done;
        const LQ = {
          mine: wQ.mine,
          done: this.restoreLanded(wQ, QQ).finally((() => {
            this.restoring === LQ && (this.restoring = null)
          }))
        };
        return this.restoring = LQ, LQ.done
      }
      async restoreLanded(QQ, FQ) {
        const wQ = () => this.landed !== QQ.mine,
          {
            iY: LQ
          } = QQ;
        if (null !== LQ) return this.stopped() ? null : this.core.setTerrainTextures(LQ.names, LQ.textures, LQ.sizes);
        let qQ = FQ;
        for (let oQ = 0;; oQ++) {
          const FQ = this.retryMs.at(oQ),
            LQ = {
              allOrNothingExcept: void 0 === FQ ? void 0 : QQ.failed
            },
            DQ = await this.loadAndHandOver(QQ.sources, QQ.load, qQ, wQ, LQ);
          if (!1 !== DQ || void 0 === FQ || this.stopped()) return DQ;
          if (qQ = AQ, await new Promise((QQ => {
              setTimeout(QQ, FQ)
            })), wQ()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(QQ, FQ, wQ, LQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const oQ = this.core.terrainTextureNames();
        var DQ;
        if (0 === oQ.length) return null === (DQ = qQ.onTaken) || void 0 === DQ || DQ.call(qQ, null, new Set), !0;
        let kQ, mQ;
        try {
          kQ = await QQ(), mQ = await YQ(oQ, kQ, FQ.decode)
        } catch (tQ) {
          return LQ() ? null : (wQ({
            name: null,
            url: null,
            error: tQ
          }), !1)
        }
        if (LQ() || this.stopped()) return null;
        for (const vQ of mQ.failures) wQ(vQ);
        const uQ = qQ.allOrNothingExcept;
        if (void 0 !== uQ && mQ.failures.some((QQ => {
            let {
              name: FQ
            } = QQ;
            return null === FQ || !uQ.has(FQ)
          })) || !0 === FQ.wholeAtlas && mQ.failures.some((QQ => {
            let {
              name: FQ
            } = QQ;
            return null === FQ || null !== vQ(FQ)
          }))) return !1;
        const {
          handOver: HQ
        } = mQ, bQ = function(QQ) {
          return QQ.textures.reduce(((QQ, FQ) => QQ + FQ.byteLength), 0)
        }(HQ) < this.keepBelow, xQ = this.core.setTerrainTextures(HQ.names, HQ.textures, HQ.sizes, bQ ? void 0 : () => {
          !async function(QQ, FQ) {
            await FQ;
            for (const {
                buffer: LQ
              }
              of QQ) {
              const QQ = LQ;
              var wQ;
              if (!QQ.detached) null === (wQ = QQ.transfer) || void 0 === wQ || wQ.call(QQ, 0)
            }
          }(HQ.textures, kQ.heldUntil)
        });
        if (xQ) {
          var AQ;
          const QQ = new Set(mQ.failures.flatMap((QQ => {
            let {
              name: FQ
            } = QQ;
            return null === FQ ? [] : [FQ]
          })));
          null === (AQ = qQ.onTaken) || void 0 === AQ || AQ.call(qQ, bQ ? HQ : null, QQ)
        }
        return xQ
      }
    }
  },
  36470: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      return "fetch" === QQ || "timeout" === QQ || "integrity" === QQ ? "download" : "browser"
    }
    wQ.d(FQ, {
      d: () => qQ,
      g: () => DQ,
      k: () => vQ,
      n: () => kQ,
      r: () => LQ,
      s: () => oQ
    });
    const qQ = "https://discord.gg/playbloxd";

    function oQ(QQ) {
      return "download" === QQ ? {
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

    function DQ(QQ, FQ) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: FQ ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: QQ.code
        },
        discordLink: FQ,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function kQ() {
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

    function vQ(QQ, FQ, wQ) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: wQ ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: QQ.reason
        },
        discordLink: null === QQ.name,
        confirm: FQ ? "general:reconnect" : QQ.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  6467: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => pQ,
      g: () => cQ,
      k: () => MQ,
      l: () => eQ
    });
    var LQ = wQ(6470);
    const qQ = 6,
      oQ = 3,
      DQ = 1,
      kQ = 2,
      vQ = 4,
      mQ = 8,
      uQ = 16,
      HQ = 32,
      bQ = 64,
      YQ = 128,
      xQ = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function AQ(QQ) {
      if (!QQ) return 0;
      const FQ = xQ.indexOf(QQ);
      if (FQ <= 0) throw new Error(`"${QQ}" is not a shader pack hook function`);
      return FQ
    }

    function tQ(QQ) {
      if (0 === QQ) return null;
      const FQ = xQ[QQ];
      if (void 0 === FQ) throw new Error(`${QQ} is not a shader pack hook function id`);
      return FQ
    }

    function eQ(QQ) {
      const FQ = LQ.d.length;
      return {
        strict: QQ >= FQ,
        program: LQ.d[QQ % FQ]
      }
    }

    function MQ(QQ) {
      return Number(QQ.strict) * LQ.d.length + LQ.d.indexOf(QQ.program)
    }

    function GQ(QQ) {
      return "" === QQ ? [] : QQ.split(" ")
    }

    function pQ(QQ) {
      const FQ = {
        variantFlags: new Uint8Array(qQ),
        hooks: new Uint8Array(qQ * oQ),
        moduleCodes: Array(qQ).fill(""),
        reads: Array(2 * qQ).fill("")
      };
      for (const wQ of QQ) {
        const QQ = MQ(wQ.key),
          LQ = (QQ, FQ) => null === wQ.hooks.surface || wQ.reads.fragment.includes(QQ) ? 0 : FQ;
        FQ.variantFlags[QQ] = (wQ.sceneDepth ? DQ : 0) | (wQ.movesVertices ? kQ : 0) | (wQ.sunShadow ? vQ : 0) | (wQ.airShadow ? mQ : 0) | (wQ.discards ? uQ : 0) | LQ("localPosition", HQ) | LQ("enchantSpeed", bQ) | LQ("enchantTier", YQ), FQ.hooks[QQ * oQ] = AQ(wQ.hooks.vertex), FQ.hooks[QQ * oQ + 1] = AQ(wQ.hooks.surface), FQ.hooks[QQ * oQ + 2] = AQ(wQ.hooks.light), FQ.moduleCodes[QQ] = wQ.moduleCode, FQ.reads[2 * QQ] = wQ.reads.vertex.join(" "), FQ.reads[2 * QQ + 1] = wQ.reads.fragment.join(" ")
      }
      return FQ
    }

    function cQ(QQ) {
      const {
        hooks: FQ,
        moduleCodes: wQ,
        reads: LQ
      } = QQ;
      return Array.from(QQ.variantFlags, ((QQ, qQ) => {
        const HQ = qQ * oQ;
        return {
          key: eQ(qQ),
          hooks: {
            vertex: tQ(FQ[HQ]),
            surface: tQ(FQ[HQ + 1]),
            light: tQ(FQ[HQ + 2])
          },
          moduleCode: wQ[qQ],
          sceneDepth: 0 !== (QQ & DQ),
          sunShadow: 0 !== (QQ & vQ),
          airShadow: 0 !== (QQ & mQ),
          movesVertices: 0 !== (QQ & kQ),
          discards: 0 !== (QQ & uQ),
          reads: {
            vertex: GQ(LQ[2 * qQ]),
            fragment: GQ(LQ[2 * qQ + 1])
          }
        }
      }))
    }
  },
  40307: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      A: () => DQ,
      D: () => AQ,
      F: () => YQ,
      J: () => xQ,
      e: () => qQ,
      h: () => LQ,
      i: () => bQ,
      k: () => uQ,
      n: () => tQ,
      q: () => oQ,
      u: () => kQ,
      x: () => vQ
    });
    const LQ = 3,
      qQ = 0,
      oQ = 1,
      DQ = 2,
      kQ = {
        uniform: 3,
        Sb: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      vQ = 10,
      mQ = "BloxdPackInputs",
      uQ = "bloxdPackInputs",
      HQ = [{
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
      bQ = 80;

    function YQ() {
      const QQ = HQ.map((QQ => {
        let {
          name: FQ,
          type: wQ
        } = QQ;
        return `    ${FQ}: ${wQ},\n`
      })).join("");
      return `struct ${mQ} {\n${QQ}}\n@group(${LQ}) @binding(${qQ}) var<uniform> ${uQ}: ${mQ};\n`
    }

    function xQ(QQ, FQ) {
      const wQ = new DataView(QQ, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, bQ),
        [LQ, qQ, oQ, DQ, kQ, vQ] = HQ;
      wQ.setFloat32(LQ.offset, FQ.seconds, !0), wQ.setUint32(qQ.offset, FQ.lit ? 1 : 0, !0);
      for (let mQ = 0; mQ < 3; mQ++) wQ.setInt32(oQ.offset + 4 * mQ, FQ.renderOffset[mQ], !0), wQ.setFloat32(DQ.offset + 4 * mQ, FQ.MQQ[mQ], !0), wQ.setFloat32(kQ.offset + 4 * mQ, FQ.eyePosition[mQ], !0), wQ.setFloat32(vQ.offset + 4 * mQ, FQ.shadowDirection[mQ], !0)
    }

    function AQ(QQ) {
      const FQ = new Uint32Array(Math.max(1, QQ.length));
      return QQ.forEach(((QQ, wQ) => {
        let {
          id: LQ,
          rotation: qQ
        } = QQ;
        FQ[wQ] = 65535 & LQ | (3 & qQ) << 16
      })), FQ
    }
    const tQ = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6470: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => LQ,
      h: () => DQ,
      l: () => kQ,
      m: () => qQ,
      o: () => oQ
    });
    const LQ = ["terrain", "liquid", "model"];

    function qQ() {
      const QQ = [];
      for (const FQ of [!1, !0])
        for (const wQ of LQ) QQ.push({
          strict: FQ,
          program: wQ
        });
      return QQ
    }

    function oQ(QQ) {
      return `${QQ.strict?"strict":"allow"}.${QQ.program}`
    }

    function DQ(QQ) {
      return !QQ.hooks.vertex && !QQ.hooks.surface && !QQ.hooks.light
    }

    function kQ(QQ, FQ) {
      return "off" !== FQ && (null === QQ || QQ.some((QQ => QQ.key.strict === ("strict" === FQ) && !DQ(QQ))))
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);