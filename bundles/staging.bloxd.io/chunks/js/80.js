export const id = 80;
export const ids = [80];
export const modules = {
  37725: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => eJ,
      h: () => qJ,
      j: () => AJ,
      n: () => XJ
    });
    const FJ = "A valid external Instance reference no longer exists.",
      UJ = [
        [1e4, "<10s"],
        [6e4, "<1m"],
        [3e5, "<5m"],
        [18e5, "<30m"]
      ];
    const eJ = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function XJ(JJ, cJ) {
      return JJ ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(JJ) {
        var cJ;
        const ZJ = null !== (cJ = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(JJ)) && void 0 !== cJ ? cJ : /failed with ([A-Z][A-Z0-9_]+)/.exec(JJ);
        return ZJ ? ZJ[1] : JJ.includes(FJ) ? "gpu_process_lost" : "other"
      }(cJ)
    }

    function AJ(JJ) {
      return `${(null===JJ||void 0===JJ?void 0:JJ.vendor)||"unknown vendor"} ${(null===JJ||void 0===JJ?void 0:JJ.architecture)||"unknown architecture"}`
    }

    function qJ(JJ) {
      var cJ;
      const ZJ = UJ.find((cJ => {
        let [ZJ] = cJ;
        return JJ < ZJ
      }));
      return null !== (cJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ[1]) && void 0 !== cJ ? cJ : "30m+"
    }
  },
  38019: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => FJ,
      h: () => UJ
    });
    const FJ = 45e3;
    class UJ extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  38205: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ
    });
    const FJ = "Traffic checks failed! Please use Chrome, disable extensions and refresh your page. Report on Discord if this persists."
  },
  39644: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ,
      e: () => UJ,
      g: () => eJ
    });
    const FJ = 1024,
      UJ = 1024 * FJ;

    function eJ(JJ) {
      return (JJ / UJ).toFixed(1)
    }
  },
  39642: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => eJ,
      d: () => AJ,
      g: () => XJ,
      i: () => qJ,
      m: () => jJ
    });
    var FJ = ZJ(157);
    const UJ = 32 * ZJ(39644).e,
      eJ = 6144,
      XJ = 4608,
      AJ = 512;

    function qJ(JJ) {
      return Math.floor(UJ * JJ / eJ)
    }

    function jJ(JJ) {
      const cJ = JJ - Math.floor(JJ / 6);
      let ZJ = FJ.c.maxChunkHorizAddDistance,
        UJ = FJ.c.maxChunkVertAddDistance;
      if (YJ(ZJ + 1, UJ + 1) <= cJ) return null;
      for (; YJ(ZJ + 1, UJ + 1) > cJ && (ZJ > 0 || UJ > 0);) ZJ > UJ ? ZJ-- : UJ--;
      return {
        horizontal: ZJ,
        vertical: UJ
      }
    }

    function YJ(JJ, cJ) {
      const ZJ = Math.max(JJ, cJ);
      let FJ = 0;
      for (let UJ = -ZJ; UJ <= ZJ; UJ++)
        for (let eJ = -ZJ; eJ <= ZJ; eJ++)
          for (let XJ = -ZJ; XJ <= ZJ; XJ++) hJ(JJ, cJ, UJ, eJ, XJ) && FJ++;
      return FJ
    }

    function hJ(JJ, cJ, ZJ, FJ, UJ) {
      const eJ = ZJ * ZJ + UJ * UJ;
      return JJ === cJ ? eJ + FJ * FJ <= JJ * JJ : JJ > cJ ? Math.abs(FJ) <= cJ && eJ + FJ * FJ <= JJ * JJ : eJ <= JJ * JJ && eJ + FJ * FJ <= cJ * cJ
    }
  },
  39597: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => UJ,
      f: () => eJ,
      h: () => AJ,
      j: () => YJ,
      m: () => qJ,
      o: () => XJ
    });
    var FJ = ZJ(157);
    const UJ = 3e3,
      eJ = 15e3;

    function XJ(JJ) {
      const cJ = JJ.endsWith(FJ.i);
      return {
        text: (cJ ? JJ.slice(0, -FJ.i.length) : JJ) || null,
        dropsCache: cJ
      }
    }
    const AJ = "Either your internet isn't working or this is a bug.";

    function qJ(JJ, cJ) {
      const ZJ = YJ(JJ);
      return null !== ZJ.name && "" === FJ.b[ZJ.name].text && null !== cJ ? cJ : ZJ.reason
    }
    const jJ = "You were removed from the game.";

    function YJ(JJ) {
      var cJ;
      let ZJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const UJ = null !== (cJ = Object.keys(FJ.b).find((cJ => FJ.b[cJ].code === JJ))) && void 0 !== cJ ? cJ : null;
      if (null === UJ) return {
        code: JJ,
        name: UJ,
        reason: null !== ZJ && void 0 !== ZJ ? ZJ : `${AJ}\nCode: ${JJ}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: eJ,
        canReconnect: XJ = !1
      } = FJ.b[UJ], qJ = JJ === FJ.b.outdatedVersion.code || JJ === FJ.b.loadRecaptchaError.code;
      return {
        code: JJ,
        name: UJ,
        reason: "" !== eJ ? eJ : null !== ZJ && void 0 !== ZJ ? ZJ : JJ === FJ.b.gameOrPluginKick.code ? jJ : `Code: ${JJ}`,
        canReconnect: XJ,
        automaticallyReconnect: JJ === FJ.b.customGameUpdated.code || JJ === FJ.b.duplicateLobbyNameError.code,
        requiresRefresh: qJ
      }
    }
  },
  4189: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      Ac: () => jc,
      Bb: () => UJ.i,
      Bd: () => dJ,
      C: () => WJ,
      Cb: () => KJ,
      Dc: () => Fc,
      Ec: () => FJ.cb,
      Ed: () => uJ,
      Fb: () => pJ,
      G: () => Dc,
      I: () => tJ,
      Ib: () => bJ,
      Ic: () => FJ.fb,
      Jb: () => IJ,
      Jd: () => TJ,
      Lc: () => FJ.ib,
      Ld: () => RJ,
      M: () => FJ.g,
      Mc: () => oJ,
      Md: () => iJ,
      N: () => jJ,
      Nb: () => FJ.J,
      O: () => FJ.k,
      Oc: () => FJ.jb,
      Pd: () => Xc,
      Qb: () => wJ,
      R: () => aJ,
      Sc: () => FJ.mb,
      Sd: () => nc,
      T: () => FJ.p,
      Tb: () => QJ,
      Uc: () => FJ.nb,
      Ud: () => mJ,
      Vb: () => ec,
      Vd: () => LJ,
      W: () => FJ.t,
      Yc: () => FJ.rb,
      Yd: () => PJ,
      Z: () => FJ.w,
      Zb: () => vJ,
      ad: () => FJ.tb,
      ae: () => HJ,
      b: () => Jc,
      bb: () => hJ,
      bc: () => Yc,
      cc: () => UJ.p,
      cd: () => FJ.wb,
      d: () => GJ,
      eb: () => rJ,
      ec: () => xJ,
      ee: () => gJ,
      f: () => nJ,
      fd: () => SJ,
      fe: () => qJ,
      hc: () => Zc,
      he: () => kJ,
      ib: () => FJ.A,
      ic: () => FJ.N,
      id: () => FJ.yb,
      ie: () => Gc,
      j: () => qc,
      kc: () => FJ.P,
      kd: () => FJ.Cb,
      lb: () => FJ.D,
      lc: () => FJ.S,
      me: () => sJ,
      n: () => yJ,
      nc: () => FJ.U,
      nd: () => FJ.Hb,
      ob: () => NJ,
      pb: () => Uc,
      q: () => VJ,
      r: () => FJ.e,
      rb: () => YJ,
      rc: () => FJ.W,
      rd: () => eJ,
      s: () => hc,
      sb: () => FJ.E,
      ub: () => CJ,
      ud: () => fJ,
      vb: () => BJ,
      vc: () => FJ.$,
      vd: () => Ac,
      w: () => MJ,
      wb: () => lJ,
      wd: () => zJ,
      xc: () => sc,
      z: () => XJ,
      zb: () => cc,
      zd: () => OJ
    });
    var FJ = ZJ(4198),
      UJ = ZJ(2146);
    const eJ = Math.round(1e3 / FJ.Hb),
      XJ = 4,
      AJ = 2;

    function qJ() {
      return crypto.getRandomValues(new Uint32Array(AJ))
    }
    const jJ = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      YJ = 16,
      hJ = {
        Draws: 1,
        NetAll: 2
      },
      DJ = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function sJ(JJ) {
      return (JJ.nametagsHidden ? EJ.NametagsHidden : 0) | (JJ.crouchToggle ? EJ.CrouchToggle : 0) | (JJ.bhopDisabled ? EJ.BhopDisabled : 0) | (JJ.disableBobbing ? EJ.DisableBobbing : 0) | (JJ.ezTowering ? EJ.EzTowering : 0) | (JJ.ezBridging ? EJ.EzBridging : 0) | (JJ.showChunkBorders ? EJ.ShowChunkBorders : 0) | (JJ.edgeGuard ? EJ.EdgeGuard : 0)
    }
    const nJ = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      GJ = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      fJ = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      xJ = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      rJ = 5,
      vJ = 4294967295;

    function mJ(JJ) {
      return (JJ.showFog ? DJ.ShowFog : 0) | (JJ.lighting ? DJ.Lighting : 0) | (JJ.chunkFade ? DJ.ChunkFade : 0)
    }
    const QJ = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      EJ = {
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
      VJ = {
        Release: 1,
        KeepTouches: 2
      },
      KJ = {
        Point: 1,
        Stamped: 2
      },
      yJ = {
        Add: 1,
        Clear: 2
      },
      SJ = 1,
      IJ = 8,
      MJ = 16777215,
      bJ = 4,
      wJ = {
        Resume: 1
      },
      WJ = {
        Held: 1
      };

    function gJ(JJ, cJ) {
      return (JJ | cJ << 8) >>> 0
    }

    function HJ(JJ) {
      return 255 & JJ
    }

    function PJ(JJ) {
      return JJ >>> 8
    }

    function kJ(JJ) {
      return JJ + 3 & -4
    }
    const pJ = 16777216,
      dJ = 16,
      zJ = 8,
      NJ = 8,
      OJ = 16777216,
      TJ = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      CJ = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      uJ = 16,
      iJ = {
        Lost: 0,
        Gone: 1
      },
      RJ = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function LJ(JJ) {
      return JJ === RJ.WorldgenSeed || JJ === RJ.Generate
    }
    const aJ = 4,
      BJ = 99,
      tJ = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      oJ = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      lJ = 12,
      Jc = 16,
      cc = 4,
      Zc = 12,
      Fc = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      Uc = 4,
      ec = 8,
      Xc = 8,
      Ac = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      qc = {
        Crit: 1,
        HitSelf: 2
      },
      jc = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      Yc = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      hc = 12,
      Dc = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      sc = 67108864;

    function nc(JJ) {
      for (const [cJ, ZJ] of Object.entries(FJ.g))
        if (ZJ === JJ) return cJ;
      return `Unknown${JJ}`
    }

    function Gc(JJ) {
      return {
        status: JJ[FJ.D.Status],
        lastError: JJ[FJ.D.LastError],
        lastErrorDetail: JJ[FJ.D.LastErrorDetail],
        errorCount: JJ[FJ.D.ErrorCount],
        frameIndex: JJ[FJ.D.FrameIndex],
        tickIndex: JJ[FJ.D.TickIndex],
        renderPending: JJ[FJ.D.RenderPending],
        firstView: JJ[FJ.D.FirstView],
        chunksCancelled: JJ[FJ.D.ChunksCancelled]
      }
    }
  },
  39417: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => FJ,
      i: () => hJ,
      l: () => AJ,
      p: () => eJ,
      s: () => UJ,
      u: () => qJ,
      v: () => YJ
    });
    class FJ extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function UJ(JJ) {
      return JJ instanceof RangeError && /call stack/i.test(JJ.message) || JJ instanceof Error && "InternalError" === JJ.name && /recursion/i.test(JJ.message)
    }

    function eJ(JJ) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(JJ))
    }
    const XJ = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function AJ(JJ) {
      var cJ;
      return JJ instanceof WebAssembly.RuntimeError || JJ instanceof FJ || UJ(JJ) && XJ.test(null !== (cJ = JJ.stack) && void 0 !== cJ ? cJ : "")
    }

    function qJ(JJ, cJ) {
      if (AJ(JJ)) throw JJ;
      console.error(cJ, JJ)
    }

    function jJ(JJ, cJ, ZJ, UJ, eJ) {
      if (cJ % UJ !== 0 || cJ + ZJ > JJ.byteLength) throw new FJ(`${eJ}: ${ZJ} bytes at ${cJ}, ${UJ}-aligned, outside ${JJ.byteLength} bytes of memory`)
    }

    function YJ(JJ, cJ, ZJ, FJ, UJ) {
      return 0 === ZJ ? null : (jJ(cJ, ZJ, FJ * JJ.BYTES_PER_ELEMENT, JJ.BYTES_PER_ELEMENT, UJ), new JJ(cJ, ZJ, FJ))
    }

    function hJ(JJ, cJ, ZJ, FJ, UJ) {
      return 0 === cJ ? null : (jJ(JJ, cJ, ZJ, FJ, UJ), new DataView(JJ, cJ, ZJ))
    }
  },
  39759: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ
    });
    const FJ = {
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
  39714: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => nJ,
      d: () => GJ,
      e: () => DJ,
      f: () => hJ
    });
    const FJ = 2e3,
      UJ = "unavailable";
    let eJ = () => Promise.resolve().then((() => ZJ(2719))),
      XJ = null,
      AJ = null,
      qJ = jJ();

    function jJ() {
      let JJ = () => {};
      return {
        promise: new Promise((cJ => {
          JJ = () => {
            cJ(null)
          }
        })),
        resolve: JJ
      }
    }

    function YJ() {
      if (null === XJ) {
        const JJ = eJ();
        XJ = JJ, JJ.then((cJ => {
          XJ === JJ && (AJ = cJ)
        }), (() => {
          XJ === JJ && (XJ = null)
        }))
      }
      return XJ
    }

    function hJ() {
      YJ().catch((() => {}))
    }

    function DJ() {
      qJ.resolve()
    }

    function sJ(JJ, cJ, ZJ, FJ) {
      if (null === JJ) return {
        errorKind: cJ,
        fingerprint: UJ,
        dedupe: `${cJ}|${FJ}`
      };
      const {
        fingerprint: eJ
      } = JJ.clientErrorKey(cJ, ZJ, FJ);
      return {
        errorKind: cJ,
        fingerprint: eJ,
        dedupe: eJ
      }
    }

    function nJ(JJ, cJ, ZJ, FJ) {
      return null === AJ ? FJ ? (hJ(), sJ(null, JJ, cJ, ZJ)) : null : sJ(AJ, JJ, cJ, ZJ)
    }
    async function GJ(JJ, cJ, ZJ) {
      let UJ;
      const eJ = new Promise((JJ => {
        UJ = setTimeout((() => {
          JJ(null)
        }), FJ)
      }));
      try {
        return sJ(await Promise.race([YJ(), eJ, qJ.promise]), JJ, cJ, ZJ)
      } catch {
        return sJ(null, JJ, cJ, ZJ)
      } finally {
        clearTimeout(UJ)
      }
    }
  },
  39705: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      BUILT_IN_ANIMATIONS_SITE: () => lJ,
      CORE_ERRORS_SITE: () => TJ,
      EVENT_OVERFLOW_SITE: () => oJ,
      JOIN_SITE: () => uJ,
      LEAVE_SITE: () => iJ,
      MODEL_FEED_SITE: () => RJ,
      MODEL_POOL_SITE: () => LJ,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => Zc,
      NON_FATAL_REPORTS_PER_SESSION: () => xc,
      PREVIEW_ANIMATIONS_SITE: () => tJ,
      RENDER_RELOAD_SITE: () => BJ,
      TEXTURE_NAMES_SITE: () => aJ,
      TEXTURE_PACK_FEED_SITE: () => Jc,
      TurnstilePageError: () => uc,
      WASM_LOAD_SITE: () => CJ,
      crashError: () => Ec,
      crashReportsSettled: () => Mc,
      flushCrashReports: () => Sc,
      joinFailureCode: () => ic,
      lokiTransport: () => ec,
      modelFailureCode: () => lc,
      readTrap: () => Wc,
      renderLossDetail: () => nZ,
      renderReloadMessage: () => DZ,
      reportCoreErrors: () => wc,
      reportCountedLoadFallback: () => Tc,
      reportCrash: () => Vc,
      reportDataLoadFailure: () => rZ,
      reportDisconnect: () => tc,
      reportDracoDecoderFailure: () => ZZ,
      reportEventOverflow: () => eZ,
      reportGpuFallback: () => Oc,
      reportMemoryShed: () => qZ,
      reportModelFailure: () => JZ,
      reportModelPoolFailure: () => cZ,
      reportPageJoinFailure: () => Lc,
      reportReconnectGaveUp: () => oc,
      reportRenderReload: () => GZ,
      reportReplayFault: () => YZ,
      reportStaleBuildReload: () => mZ,
      reportStoppedCore: () => kc,
      reportTerrainTextureFailure: () => fZ,
      reportTexturePackFeedLoadFailure: () => UZ,
      reportUnstreamedCoreLoad: () => Cc,
      reportUnsupportedFallback: () => zc,
      reportUnusedSeat: () => Bc,
      reportWorkerLost: () => XZ,
      reportWorkerStartTimeout: () => jZ,
      reportWorldgenGaveUp: () => AZ,
      reportWorldgenLoadFailure: () => FZ,
      resetCrashReports: () => bc,
      setCrashBackend: () => Dc,
      setCrashScreen: () => Yc,
      setCrashTransport: () => qc,
      showCrash: () => Pc,
      showJoinFailure: () => Rc,
      showUnsupported: () => dc
    });
    var FJ = ZJ(957),
      UJ = ZJ(2726),
      eJ = ZJ(39714),
      XJ = ZJ(4189),
      AJ = ZJ(4198),
      qJ = ZJ(39572);
    const jJ = 18,
      YJ = {
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
        [jJ]: "retry linked",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      },
      hJ = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      DJ = {
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
      sJ = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      };

    function nJ(JJ) {
      return String(JJ).replace(/\d/g, (JJ => String.fromCharCode(97 + Number(JJ))))
    }

    function GJ(JJ, cJ) {
      var ZJ;
      return null !== (ZJ = JJ[cJ]) && void 0 !== ZJ ? ZJ : nJ(cJ)
    }

    function fJ(JJ, cJ) {
      switch (JJ) {
        case AJ.g.RenderSceneRowNotDrawn:
          return {
            words: ` ${GJ(DJ,cJ)}`, instance: String(cJ), group: String(JJ)
          };
        case AJ.g.RenderChunkMeshNotDrawn: {
          const ZJ = 0 === (128 & cJ) ? "" : " shortage",
            FJ = cJ >>> 8;
          return {
            words: ` ${GJ(sJ,127&cJ)}${ZJ}${0===FJ?"":` kind ${nJ(FJ)}`}`,
            instance: String(cJ),
            group: String(JJ)
          }
        }
        case AJ.g.RenderInternal: {
          const ZJ = GJ(hJ, 255 & cJ),
            FJ = cJ >>> 8 & 255;
          if (0 === FJ) return {
            words: ` ${ZJ}`,
            instance: String(cJ),
            group: String(JJ)
          };
          const UJ = GJ(YJ, FJ),
            eJ = cJ >>> 16;
          return {
            words: ` ${ZJ} ${UJ} program ${nJ(eJ)}`,
            instance: `${ZJ} ${UJ}`,
            group: FJ === jJ ? "program retry" : "program",
            program: {
              programFailure: UJ,
              program: String(eJ)
            }
          }
        }
        default:
          return null
      }
    }
    const xJ = 2,
      rJ = new Map;

    function vJ(JJ) {
      let {
        group: cJ,
        instance: ZJ
      } = JJ, FJ = rJ.get(cJ);
      return void 0 === FJ && (FJ = [], rJ.set(cJ, FJ)), !FJ.includes(ZJ) && (FJ.length >= xJ || (FJ.push(ZJ), !1))
    }
    var mJ = ZJ(2951),
      QJ = ZJ(37725),
      EJ = ZJ(101),
      VJ = ZJ(2958),
      KJ = ZJ(38019),
      yJ = ZJ(2538),
      SJ = ZJ(39672),
      IJ = ZJ(39360),
      MJ = ZJ(39602),
      bJ = ZJ(39607),
      wJ = ZJ(39721),
      WJ = ZJ(3178),
      gJ = ZJ(3183),
      HJ = ZJ(39730),
      PJ = ZJ(39747),
      kJ = ZJ(39764),
      pJ = ZJ(2731),
      dJ = ZJ(39665),
      zJ = ZJ(39537),
      NJ = ZJ(39543);
    const OJ = "[bloxd-wasm-client]",
      TJ = "coreErrors",
      CJ = "wasmLoad",
      uJ = "join",
      iJ = "cn",
      RJ = "modelFeed",
      LJ = "modelWorkerPool",
      aJ = "textureNames",
      BJ = "renderReload",
      tJ = "previewAnimations",
      oJ = "eventOverflow",
      lJ = "builtInAnimations",
      Jc = "texturePackFeed",
      cc = 300,
      Zc = 8;
    let Fc = 0;
    const Uc = new Set,
      ec = (JJ, cJ) => {
        const ZJ = sc[JJ.kind];
        if (null === ZJ) return void Xc(JJ, cJ, hc, null);
        const FJ = (0, eJ.c)(ZJ, JJ.message, JJ.code, JJ.fatal);
        if (null !== FJ) return void Xc(JJ, cJ, hc, FJ);
        const UJ = hc;
        yc("Loki", (async () => {
          Xc(JJ, cJ, UJ, await (0, eJ.d)(ZJ, JJ.message, JJ.code))
        }))
      };

    function Xc(JJ, cJ, ZJ, eJ) {
      const {
        kind: XJ,
        code: AJ,
        site: qJ,
        fatal: jJ,
        details: YJ
      } = JJ;
      if (!jJ)
        if (null === eJ || (0, UJ.c)(eJ.errorKind) || Uc.has(eJ.dedupe)) {
          if (Fc >= Zc) return;
          Fc++
        } else Uc.add(eJ.dedupe);
      const hJ = {
        ...YJ,
        kind: XJ,
        code: AJ,
        site: qJ,
        fatal: String(jJ),
        backend: ZJ
      };
      null !== eJ && (hJ.errorKind = eJ.errorKind, hJ.fingerprint = eJ.fingerprint), cJ instanceof Error && "string" === typeof cJ.stack && (hJ.causeStack = cJ.stack.slice(0, 2e3)), (0, FJ.MG)(Ec(JJ, cJ), hJ)
    }
    let Ac = ec;

    function qc(JJ) {
      const cJ = Ac;
      return Ac = JJ, cJ
    }
    let jc = () => {};

    function Yc(JJ) {
      const cJ = jc;
      return jc = JJ, cJ
    }
    let hc = "unpicked";

    function Dc(JJ) {
      hc = JJ
    }
    const sc = {
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
      nc = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        gpuFallback: "wasm_load"
      },
      Gc = new Set(["unstreamedLoad"]);
    let fc = !1;
    const xc = 20,
      rc = new Map;
    let vc = 0,
      mc = 0;
    const Qc = new Set;

    function Ec(JJ, cJ) {
      const ZJ = Object.assign(new Error(`${JJ.code}: ${JJ.message}`), {
        name: "WasmClientCrash",
        cause: null !== cJ && void 0 !== cJ ? cJ : void 0
      });
      return cJ instanceof Error && cJ.stack && (ZJ.stack = cJ.stack), ZJ
    }

    function Vc(JJ) {
      var cJ, FJ;
      const {
        kind: UJ,
        code: eJ,
        site: XJ,
        fatal: AJ,
        message: qJ,
        error: jJ
      } = JJ, YJ = !1 !== JJ.toTransport && !Gc.has(UJ), hJ = !AJ && YJ, DJ = {
        kind: UJ,
        code: eJ,
        site: XJ,
        fatal: AJ,
        message: qJ,
        details: null !== (cJ = JJ.details) && void 0 !== cJ ? cJ : {}
      }, sJ = `${eJ}@${XJ}${void 0===JJ.instance?"":`#${JJ.instance}`}${AJ?"!":""}`, nJ = (null !== (FJ = rc.get(sJ)) && void 0 !== FJ ? FJ : 0) + 1;
      if (rc.set(sJ, nJ), nJ > 1 ? 0 === (nJ & nJ - 1) && Kc((() => {
          console.warn(`${OJ} ${eJ} at ${XJ} reported ${nJ} times`)
        })) : hJ && vc >= xc ? Kc((() => {
          console.warn(`${OJ} ${UJ} ${eJ} at ${XJ}: ${qJ} (not sent: the session's ${xc} went)`, DJ.details, null !== jJ && void 0 !== jJ ? jJ : "")
        })) : (hJ && vc++, function(JJ, cJ, FJ) {
          var UJ, eJ;
          const {
            kind: XJ,
            code: AJ,
            site: qJ,
            fatal: jJ,
            message: YJ,
            details: hJ
          } = JJ;
          Kc((() => {
            (jJ ? console.error : console.warn)(`${OJ} ${XJ} ${AJ} at ${qJ}: ${YJ}`, hJ, null !== cJ && void 0 !== cJ ? cJ : "")
          }));
          const DJ = nc[XJ],
            sJ = null !== (UJ = null !== (eJ = sc[XJ]) && void 0 !== eJ ? eJ : DJ) && void 0 !== UJ ? UJ : null;
          null !== sJ && yc("counts", (async () => {
            const {
              peekVisitSessionId: JJ
            } = await Promise.resolve().then((() => ZJ(969)));
            if (null !== JJ()) {
              const {
                reportCappedWasmFailure: JJ,
                reportWasmFailure: cJ
              } = await ZJ.e(192).then((() => ZJ(35414)));
              (void 0 === DJ ? cJ : JJ)(sJ, YJ, AJ), fc = !0
            }
          }));
          FJ && Kc((() => {
            Ac(JJ, cJ)
          }))
        }(DJ, jJ, YJ)), AJ) {
        var GJ;
        const cJ = null !== (GJ = JJ.screen) && void 0 !== GJ ? GJ : {
          text: (0, kJ.h)(DJ, !0),
          reload: !0
        };
        Kc((() => {
          jc(cJ)
        }))
      }
      return DJ
    }

    function Kc(JJ) {
      try {
        JJ()
      } catch (cJ) {
        try {
          console.warn(`${OJ} could not send a report`, cJ)
        } catch {}
      }
    }

    function yc(JJ, cJ) {
      try {
        const ZJ = cJ().catch((cJ => {
          console.warn(`${OJ} could not send the report to ${JJ}`, cJ)
        })).finally((() => {
          Qc.delete(ZJ)
        }));
        Qc.add(ZJ)
      } catch (ZJ) {
        console.warn(`${OJ} could not send the report to ${JJ}`, ZJ)
      }
    }
    async function Sc(JJ) {
      let cJ;
      (0, eJ.e)();
      const ZJ = new Promise((ZJ => {
        cJ = setTimeout(ZJ, JJ)
      }));
      await Promise.race([Ic(), ZJ]), clearTimeout(cJ)
    }
    async function Ic() {
      if (await Promise.allSettled([...Qc]), fc) try {
        const {
          flushClientAnalyticsEvents: JJ
        } = await Promise.resolve().then((() => ZJ(1387)));
        await JJ()
      } catch (JJ) {
        console.warn(`${OJ} could not send the counts`, JJ)
      }
    }
    async function Mc() {
      for (; Qc.size > 0;) await Promise.allSettled([...Qc])
    }

    function bc() {
      rc.clear(), vc = 0, fc = !1, Fc = 0, Uc.clear(), mc = 0, rJ.clear()
    }

    function wc(JJ, cJ, ZJ, FJ) {
      mc += cJ;
      for (const {
          code: AJ,
          detail: jJ
        }
        of JJ) {
        var UJ, eJ;
        const JJ = (0, XJ.Sd)(AJ),
          cJ = fJ(AJ, jJ),
          YJ = null === FJ || void 0 === FJ ? void 0 : FJ(AJ, jJ),
          hJ = void 0 !== (null === cJ || void 0 === cJ ? void 0 : cJ.program),
          DJ = hJ ? null === (UJ = (0, EJ.n)()) || void 0 === UJ ? void 0 : UJ.renderer : void 0,
          sJ = hJ ? ` ${nJ((0,qJ.b)())}` : "",
          GJ = Array.from([DJ && `gpu ${DJ}`, YJ].filter(Boolean).join("; ")).slice(0, cc).join(""),
          xJ = `core error ${JJ}${null!==(eJ=null===cJ||void 0===cJ?void 0:cJ.words)&&void 0!==eJ?eJ:""}${sJ}${GJ?`: ${GJ}`:""}`,
          rJ = {
            errorCode: String(AJ),
            detail: String(jJ),
            droppedBefore: String(mc),
            wasmBuild: ZJ.wasm,
            clientVersion: ZJ.client,
            ...null === cJ || void 0 === cJ ? void 0 : cJ.program
          };
        null !== cJ && vJ(cJ) ? Kc((() => {
          console.warn(`${OJ} coreError CORE-${JJ}: ${xJ} (not sent: the session's render warnings of its kind went)`, rJ)
        })) : Vc({
          kind: AJ === XJ.M.JobsHeapGaveUp ? "meshHeap" : "coreError",
          code: `CORE-${JJ}`,
          site: TJ,
          fatal: !1,
          message: xJ,
          details: rJ,
          instance: null === cJ || void 0 === cJ ? void 0 : cJ.instance
        })
      }
    }

    function Wc(JJ) {
      return (0, dJ.n)(JJ instanceof zJ.d ? JJ.trap : JJ, WJ.F, WJ.Y)
    }
    const gc = "declined=js";

    function Hc(JJ) {
      return JJ ? {
        labels: [gc],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function Pc(JJ, cJ, ZJ) {
      return pc(JJ, cJ, ZJ, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function kc(JJ, cJ, ZJ) {
      return pc(JJ, cJ, ZJ, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function pc(JJ, cJ, ZJ, FJ, UJ) {
      let {
        memoryDetails: eJ = {},
        declined: XJ = !1
      } = FJ;
      const {
        code: AJ,
        details: qJ,
        message: jJ
      } = (0, SJ.G)(JJ, cJ), YJ = [];
      null !== ZJ && (qJ.trapKind = ZJ.kind, null !== ZJ.panic && (qJ.panic = (0, dJ.k)(ZJ.panic)), ZJ.refusedBytes > 0 && (qJ.refusedAllocation = String(ZJ.refusedBytes)), YJ.push((0, dJ.p)(ZJ.kind, ZJ.refusedBytes)));
      const hJ = Hc(XJ);
      return Vc({
        kind: "crash",
        code: AJ,
        site: JJ.site,
        fatal: UJ,
        message: [...YJ, ...hJ.labels, jJ].join("; "),
        details: {
          ...qJ,
          ...hJ.details,
          ...eJ
        },
        error: JJ.error
      })
    }

    function dc(JJ, cJ, ZJ) {
      return Vc({
        kind: "unsupported",
        code: cJ,
        site: CJ,
        fatal: !0,
        message: ZJ,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: JJ,
          status: cJ
        },
        screen: {
          text: (0, kJ.s)(JJ),
          reload: "download" === JJ
        }
      })
    }

    function zc(JJ, cJ, ZJ) {
      return Vc({
        kind: "unsupportedFallback",
        code: "blockedAfterLoss" === cJ ? "blocked_after_loss" : "unsupported_js_fallback",
        site: CJ,
        fatal: !1,
        message: ZJ,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: JJ,
          status: "unsupported",
          decline: cJ,
          fallback: "js"
        }
      })
    }
    const Nc = "misdrawn_gpu_js_fallback";

    function Oc(JJ, cJ) {
      return Vc({
        kind: "gpuFallback",
        code: Nc,
        site: CJ,
        fatal: !1,
        message: `the renderer plays ${JJ} on ${cJ} worse than the JS client`,
        details: {
          gpuFamily: JJ,
          backend: cJ,
          fallback: "js"
        }
      })
    }

    function Tc(JJ, cJ, ZJ, FJ) {
      const UJ = Hc(FJ);
      return Vc({
        kind: "unsupported",
        code: cJ,
        site: CJ,
        fatal: !1,
        message: [...UJ.labels, ZJ].join("; "),
        details: {
          cause: JJ,
          status: cJ,
          fallback: "js",
          ...UJ.details
        }
      })
    }

    function Cc() {
      const {
        code: JJ,
        message: cJ
      } = pJ.e;
      return Vc({
        kind: "unstreamedLoad",
        code: JJ,
        site: CJ,
        fatal: !1,
        message: cJ
      })
    }
    class uc extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function ic(JJ) {
      return JJ instanceof MJ.i ? 0 === JJ.code ? "JOIN-matchmake" : `JOIN-${JJ.code}` : JJ instanceof MJ.b ? 0 === JJ.code ? `JOIN-${JJ.stage}` : `JOIN-${JJ.stage}-${JJ.code}` : JJ instanceof IJ.d ? "JOIN-gameCode" : JJ instanceof uc ? "JOIN-turnstilePage" : JJ instanceof MJ.o ? "JOIN-trafficCheck" : JJ instanceof KJ.h ? "JOIN-timeout" : "JOIN-network"
    }

    function Rc(JJ, cJ) {
      const ZJ = (0, NJ.d)(JJ),
        FJ = {
          wasmBuild: cJ.wasm,
          clientVersion: cJ.client
        },
        UJ = JJ instanceof uc ? {
          text: (0, kJ.n)(),
          reload: !1
        } : void 0,
        eJ = (0, bJ.e)(JJ),
        XJ = "expected" !== eJ;
      return Vc({
        kind: "join",
        code: ic(JJ),
        site: uJ,
        fatal: !0,
        message: ZJ,
        details: FJ,
        error: JJ,
        screen: UJ,
        toTransport: XJ,
        instance: eJ
      })
    }

    function Lc(JJ, cJ, ZJ) {
      var FJ;
      const UJ = (0, bJ.e)(JJ),
        eJ = {
          cause: (JJ instanceof MJ.b || JJ instanceof MJ.i) && null !== (FJ = JJ.serverText) && void 0 !== FJ ? FJ : "",
          sinceJoinStart: (0, VJ.c)(ZJ.sinceJoinStartMs),
          game: ZJ.game,
          ...(0, VJ.h)(),
          wasmBuild: cJ.wasm,
          clientVersion: cJ.client
        };
      return Vc({
        kind: "pageJoin",
        code: ic(JJ),
        site: uJ,
        fatal: !1,
        message: (0, NJ.d)(JJ),
        details: eJ,
        error: JJ,
        toTransport: "unrecognised" === UJ,
        instance: UJ
      })
    }
    const ac = {
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

    function Bc(JJ, cJ) {
      let {
        unused: ZJ,
        answered: FJ,
        heldMs: UJ
      } = JJ;
      const {
        code: eJ,
        message: XJ
      } = ac[ZJ], AJ = {
        unused: ZJ,
        answered: String(FJ),
        heldMs: String(UJ),
        wasmBuild: cJ.wasm,
        clientVersion: cJ.client
      };
      return Vc({
        kind: "seat",
        code: eJ,
        site: uJ,
        fatal: !1,
        message: XJ,
        details: AJ
      })
    }

    function tc(JJ, cJ, ZJ) {
      var FJ;
      let UJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (FJ = JJ.name) && void 0 !== FJ ? FJ : String(JJ.code);
      const eJ = {
          closeCode: String(JJ.code),
          recognised: String(null !== JJ.name),
          closeReason: ZJ.closeReason,
          sinceJoined: (0, VJ.c)(ZJ.sinceJoinedMs),
          game: ZJ.game,
          ...(0, VJ.h)(),
          wasmBuild: cJ.wasm,
          clientVersion: cJ.client
        },
        XJ = null === JJ.name && !(0, VJ.e)(JJ.code);
      return Vc({
        kind: "disconnect",
        code: UJ,
        site: iJ,
        fatal: !1,
        message: "Left room",
        details: eJ,
        toTransport: XJ
      })
    }

    function oc(JJ, cJ) {
      const ZJ = {
        ...(0, mJ.m)(JJ),
        wasmBuild: cJ.wasm,
        clientVersion: cJ.client
      };
      return Vc({
        kind: "disconnect",
        code: `reconnect-${JJ.reason}`,
        site: uJ,
        fatal: !1,
        message: "Reconnect failed",
        details: ZJ
      })
    }

    function lc(JJ) {
      return JJ.error instanceof gJ.g ? `MODEL-${JJ.error.status}` : JJ.error instanceof HJ.k ? "MODEL-ring" : "MODEL-network"
    }

    function JZ(JJ, cJ) {
      const ZJ = lc(JJ),
        FJ = `model file ${JJ.file} ${JJ.startup?"(startup) ":""}could not load`,
        UJ = {
          file: String(JJ.file),
          url: JJ.url,
          wasmBuild: cJ.wasm,
          clientVersion: cJ.client
        };
      return Vc({
        kind: JJ.startup ? "model" : "modelLate",
        code: ZJ,
        site: RJ,
        fatal: JJ.startup,
        message: FJ,
        details: UJ,
        error: JJ.error
      })
    }

    function cZ(JJ, cJ) {
      const ZJ = {
        wasmBuild: cJ.wasm,
        clientVersion: cJ.client
      };
      return Vc({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: LJ,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: ZJ,
        error: JJ
      })
    }

    function ZZ(JJ, cJ) {
      const ZJ = {
        wasmBuild: cJ.wasm,
        clientVersion: cJ.client
      };
      return Vc({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: LJ,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: ZJ,
        error: JJ
      })
    }

    function FZ(JJ, cJ) {
      const ZJ = {
        wasmBuild: cJ.wasm,
        clientVersion: cJ.client
      };
      return Vc({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: SJ.z,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: ZJ,
        error: JJ
      })
    }

    function UZ(JJ, cJ) {
      const ZJ = {
        wasmBuild: cJ.wasm,
        clientVersion: cJ.client
      };
      return Vc({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: Jc,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: ZJ,
        error: JJ
      })
    }

    function eZ(JJ, cJ) {
      const {
        frames: ZJ,
        acks: FJ,
        mask: UJ,
        outcome: eJ
      } = JJ, XJ = {
        frames: String(ZJ),
        acks: String(FJ),
        mask: String(UJ),
        outcome: null !== eJ && void 0 !== eJ ? eJ : "resynced",
        wasmBuild: cJ.wasm,
        clientVersion: cJ.client
      };
      return Vc({
        kind: "recovered",
        code: "rejoined" === eJ ? "CORE-eventOverflowRejoin" : "failed" === eJ ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: oJ,
        fatal: !1,
        message: `the event buffer refused records in ${ZJ} frames`,
        details: XJ
      })
    }

    function XZ(JJ, cJ, ZJ) {
      return Vc({
        kind: "recovered",
        code: "CORE-workerLost",
        site: JJ,
        fatal: !1,
        message: `a ${JJ} worker was lost`,
        details: {
          reason: cJ,
          wasmBuild: ZJ.wasm,
          clientVersion: ZJ.client
        }
      })
    }

    function AZ(JJ, cJ) {
      const ZJ = {
        lastReason: JJ,
        wasmBuild: cJ.wasm,
        clientVersion: cJ.client
      };
      return Vc({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: SJ.z,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: ZJ
      })
    }

    function qZ(JJ, cJ, ZJ) {
      return Vc({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: SJ.l,
        fatal: !1,
        message: (0, wJ.g)(JJ) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: JJ,
          ...cJ,
          wasmBuild: ZJ.wasm,
          clientVersion: ZJ.client
        }
      })
    }

    function jZ(JJ, cJ, ZJ) {
      return Vc({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: JJ,
        fatal: !1,
        message: `a ${JJ} worker did not start`,
        details: {
          waitedMs: String(Math.round(cJ)),
          wasmBuild: ZJ.wasm,
          clientVersion: ZJ.client
        }
      })
    }

    function YZ(JJ, cJ, ZJ) {
      return Vc({
        kind: "recovered",
        code: "CORE-replayFault",
        site: JJ,
        fatal: !1,
        message: `the replay's ${JJ} failed`,
        details: {
          wasmBuild: ZJ.wasm,
          clientVersion: ZJ.client
        },
        error: cJ
      })
    }
    const hZ = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's terrain pipeline failed"
    };

    function DZ(JJ, cJ, ZJ) {
      const FJ = "lost" === cJ && void 0 !== ZJ ? ` (${ZJ})` : "";
      return `the ${JJ} ${hZ[cJ]}${FJ}`
    }
    const sZ = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };

    function nZ(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now();
      const UJ = null === ZJ.boundAtMs ? "unbound" : `up${(0,QJ.h)(FJ-ZJ.boundAtMs)}`,
        eJ = null === ZJ.adapter ? "no adapter" : (0, QJ.j)(ZJ.adapter),
        XJ = `${(0,yJ.j)()?"hidden":"visible"} ${UJ} ${eJ}${!0===ZJ.indirectHangs?" ih":""}`;
      if ("pipeline_failed" === JJ) return `${JJ} ${XJ}`;
      const AJ = null === cJ || void 0 === cJ ? void 0 : cJ.message;
      return `${cJ instanceof yJ.g?"timeout":(0,QJ.n)("frames_refused"===JJ,"string"===typeof AJ?AJ:"")} ${XJ}`
    }

    function GZ(JJ, cJ, FJ) {
      var UJ, eJ, XJ, AJ;
      let {
        cause: qJ = "lost",
        error: jJ,
        context: YJ = sZ
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const hJ = nZ(qJ, jJ, YJ),
        DJ = {
          losses: String(cJ),
          cause: qJ,
          detail: hJ,
          vendor: null !== (UJ = null === (eJ = YJ.adapter) || void 0 === eJ ? void 0 : eJ.vendor) && void 0 !== UJ ? UJ : "",
          architecture: null !== (XJ = null === (AJ = YJ.adapter) || void 0 === AJ ? void 0 : AJ.architecture) && void 0 !== XJ ? XJ : "",
          indirectHangs: String(YJ.indirectHangs),
          wasmBuild: FJ.wasm,
          clientVersion: FJ.client
        },
        sJ = DZ(JJ, qJ),
        nJ = Vc({
          kind: "recovered",
          code: "CORE-renderLost",
          site: BJ,
          fatal: !1,
          message: sJ,
          details: DJ,
          error: jJ
        });
      return yc("ga", (async () => {
        const {
          logError: cJ
        } = await Promise.resolve().then((() => ZJ(2473))), FJ = `${QJ.d["webgpu"===JJ?"WebGPU":"WebGL2"]}\n Error: ${hJ}`;
        cJ("warning", FJ), cJ("error", FJ)
      })), nJ
    }

    function fZ(JJ, cJ) {
      var ZJ, FJ;
      const UJ = null === JJ.name ? "TEXTURE-sources" : null === JJ.url ? "TEXTURE-nourl" : JJ.error instanceof PJ.d ? `TEXTURE-${JJ.error.status}` : "TEXTURE-network",
        eJ = null === JJ.name ? "terrain textures could not load" : `terrain texture ${JJ.name} could not load`,
        XJ = {
          texture: null !== (ZJ = JJ.name) && void 0 !== ZJ ? ZJ : "",
          url: null !== (FJ = JJ.url) && void 0 !== FJ ? FJ : "",
          wasmBuild: cJ.wasm,
          clientVersion: cJ.client
        };
      return Vc({
        kind: "terrainTexture",
        code: UJ,
        site: SJ.y,
        fatal: !1,
        message: eJ,
        details: XJ,
        error: JJ.error
      })
    }
    const xZ = {
      previewAnimations: {
        site: tJ,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: lJ,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function rZ(JJ, cJ, ZJ, FJ) {
      const {
        site: UJ,
        prefix: eJ,
        name: XJ
      } = xZ[JJ], {
        stage: AJ,
        error: qJ
      } = ZJ;
      return Vc({
        kind: JJ,
        code: "decode" === AJ ? null === qJ ? `${eJ}-decode` : `${eJ}-trap` : qJ instanceof gJ.g ? `${eJ}-${qJ.status}` : `${eJ}-network`,
        site: UJ,
        fatal: !1,
        message: "decode" === AJ ? `${XJ} did not decode` : `${XJ} could not load`,
        details: {
          url: cJ,
          wasmBuild: FJ.wasm,
          clientVersion: FJ.client
        },
        error: qJ
      })
    }
    const vZ = "staleBuild";

    function mZ(JJ, cJ, ZJ) {
      const FJ = {
          failedSite: JJ.site,
          url: JJ.url,
          from: JJ.from,
          sameBuild: String(JJ.from === cJ),
          reloadMs: String(Math.max(0, Date.now() - JJ.at)),
          wasmBuild: ZJ.wasm,
          clientVersion: ZJ.client
        },
        UJ = `reloaded into a newer build after ${JJ.site} failed to load: ${JJ.error}`;
      return Vc({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: vZ,
        fatal: !1,
        message: UJ,
        details: FJ
      })
    }
  },
  4182: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => XJ,
      e: () => eJ,
      g: () => UJ
    });
    var FJ = ZJ(4189);

    function UJ(JJ) {
      return "none" !== JJ
    }

    function eJ(JJ, cJ) {
      if (!JJ) return "none";
      switch (cJ) {
        case FJ.Z.Drawn:
          return "drawn";
        case FJ.Z.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function XJ(JJ) {
      return "drawn" === JJ
    }
  },
  39360: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => FJ,
      g: () => xJ,
      j: () => GJ,
      l: () => fJ,
      o: () => DJ,
      s: () => sJ,
      u: () => YJ,
      x: () => hJ,
      y: () => nJ
    });
    class FJ extends Error {
      constructor(JJ) {
        super(`the join's code did not load: ${JJ instanceof Error?JJ.message:String(JJ)}`, {
          cause: JJ
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === JJ || void 0 === JJ ? void 0 : JJ.request
      }
    }
    let UJ = null,
      eJ = null,
      XJ = null;
    const AJ = [];
    let qJ = null;

    function jJ(JJ, cJ) {
      try {
        JJ(cJ)
      } catch (ZJ) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", ZJ)
      }
    }

    function YJ() {
      return qJ
    }

    function hJ(JJ) {
      AJ.push(JJ), null !== qJ && jJ(JJ, qJ)
    }

    function DJ(JJ) {
      return UJ ??= Promise.all([ZJ.e(64), ZJ.e(88), ZJ.e(199), ZJ.e(126), ZJ.e(222), ZJ.e(200), ZJ.e(201), ZJ.e(86), ZJ.e(228), ZJ.e(251), ZJ.e(177), ZJ.e(186), ZJ.e(129), ZJ.e(79), ZJ.e(107), ZJ.e(226), ZJ.e(49)]).then((() => ZJ(41236))).then((cJ => {
        cJ.loadAudio(JJ), qJ = cJ;
        for (const JJ of AJ) jJ(JJ, cJ);
        return cJ
      })).catch((JJ => {
        throw UJ = null, JJ
      })), UJ
    }
    async function sJ(JJ, cJ) {
      try {
        const ZJ = await DJ(JJ);
        await ZJ.loadClientGame(cJ)
      } catch (ZJ) {
        throw new FJ(ZJ)
      }
    }

    function nJ(JJ, cJ) {
      eJ = {
        running: JJ,
        shell: cJ
      }
    }

    function GJ() {
      return XJ
    }
    async function fJ(JJ) {
      const cJ = eJ;
      if ((null === cJ || void 0 === cJ ? void 0 : cJ.running) !== JJ) throw new Error("the core's session has ended");
      const ZJ = await DJ(cJ.shell.audio).catch((JJ => {
        throw new FJ(JJ)
      }));
      if (null !== XJ) return XJ;
      if (eJ !== cJ || JJ.isStopped) throw new Error("the core stopped while the game code loaded");
      if (XJ = ZJ.startGameHost(JJ, cJ.shell), null === XJ) throw new Error("the core's shared tables didn't read, so the game can't start");
      return XJ
    }

    function xJ() {
      null !== XJ && (null !== qJ ? qJ.endGameHost(XJ) : XJ.closeGame()), XJ = null, eJ = null
    }
  },
  39602: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => jJ,
      d: () => eJ,
      f: () => XJ,
      g: () => UJ,
      i: () => sJ,
      l: () => YJ,
      m: () => qJ,
      n: () => DJ,
      o: () => hJ,
      s: () => AJ
    });
    var FJ = ZJ(38205);
    const UJ = new Uint8Array([12]),
      eJ = 2e3,
      XJ = 257;

    function AJ(JJ) {
      const cJ = new Uint8Array(4);
      return new DataView(cJ.buffer).setUint32(0, JJ, !0), cJ
    }
    class qJ extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class jJ extends Error {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(JJ), this.stage = cJ, this.code = ZJ, this.serverText = FJ, this.name = "JoinError"
      }
    }
    class YJ extends Error {
      constructor(JJ) {
        super(JJ), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class hJ extends Error {
      constructor() {
        super(FJ.b), this.name = "TrafficCheckError"
      }
    }
    class DJ extends Error {
      constructor(JJ, cJ, ZJ) {
        super(JJ, {
          cause: ZJ
        }), this.networkLost = cJ, this.name = "SeatRequestError"
      }
    }
    class sJ extends Error {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(JJ), this.code = cJ, this.serverText = ZJ, this.name = "MatchmakeError"
      }
    }
  },
  39607: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => DJ,
      e: () => hJ
    });
    var FJ = ZJ(2260),
      UJ = ZJ(2958),
      eJ = ZJ(38019),
      XJ = ZJ(39597),
      AJ = ZJ(39602),
      qJ = ZJ(39615);
    const jJ = "seat reservation expired.",
      YJ = "early_leave";

    function hJ(JJ) {
      if (JJ instanceof eJ.h) return "expected";
      if (JJ instanceof AJ.n) return JJ.networkLost ? "expected" : "unrecognised";
      if (JJ instanceof AJ.b) {
        if ("closed" === JJ.stage && (0 === JJ.code || (0, UJ.e)(JJ.code))) return "expected";
        if ("roomError" === JJ.stage && (JJ.serverText === jJ || JJ.serverText === YJ)) return "expected"
      }
      return JJ instanceof AJ.b || JJ instanceof AJ.i ? null === (0, XJ.j)(JJ.code).name ? "unrecognised" : "known" : (0, FJ.h)(JJ) ? "expected" : JJ instanceof AJ.o || JJ instanceof qJ.f ? "known" : "unrecognised"
    }

    function DJ(JJ) {
      return JJ instanceof eJ.h ? "timedOut" : "expected" !== hJ(JJ) || (0, FJ.h)(JJ) || JJ instanceof AJ.b && 1001 === JJ.code ? void 0 : "failed"
    }
  },
  39721: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => yJ,
      g: () => hJ,
      j: () => QJ,
      k: () => xJ,
      n: () => VJ
    });
    var FJ = ZJ(39644),
      UJ = ZJ(39642);
    const eJ = 64 * FJ.b,
      XJ = 40 * FJ.e,
      AJ = 36 * FJ.e,
      qJ = 20 * FJ.e,
      jJ = 2 * FJ.e,
      YJ = 5 * FJ.e;

    function hJ(JJ) {
      return "footprint" !== JJ
    }
    const DJ = 2 * FJ.e,
      sJ = 4 * FJ.e,
      nJ = 35 * FJ.e + DJ + sJ,
      GJ = 6.5 * FJ.e,
      fJ = 132.5 * FJ.b;

    function xJ(JJ) {
      const cJ = GJ + (0, UJ.i)(JJ) + JJ * fJ;
      return Math.ceil((2 * nJ + cJ) / eJ) * eJ
    }
    const rJ = xJ(UJ.c),
      vJ = (FJ.e, FJ.e, FJ.e, {
        targetBytes: XJ,
        leastBytes: qJ
      }),
      mJ = {
        targetBytes: AJ,
        leastBytes: qJ
      };

    function QJ(JJ) {
      return JJ >= UJ.c ? vJ : mJ
    }
    const EJ = 2 * eJ;

    function VJ(JJ, cJ, ZJ) {
      return JJ + cJ + EJ > (null !== ZJ && void 0 !== ZJ ? ZJ : rJ)
    }
    const KJ = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? JJ => {
        requestIdleCallback(JJ)
      } : null
    };
    class yJ {
      constructor(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : KJ;
        this.memory = JJ, this.readPeakStoredChunks = cJ, this.onError = ZJ, this.clock = FJ, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(JJ, cJ, ZJ) {
        this.shedding = {
          shed: JJ,
          ls: cJ,
          readDistanceInUse: ZJ
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(JJ) {
        this.footprint = JJ
      }
      setCeiling(JJ) {
        this.ceilingBytes = JJ, this.call((() => {
          this.memory.setCeiling(JJ)
        }), void 0)
      }
      ceilingMayRefuse(JJ) {
        return VJ(this.memory.memoryBytes(), JJ, this.ceilingBytes)
      }
      reserveAtJoin(JJ) {
        let {
          targetBytes: cJ,
          leastBytes: ZJ
        } = JJ;
        const FJ = this.memory.memoryBytes(),
          UJ = FJ + ZJ,
          eJ = Math.max(cJ + (this.ballastOn() ? YJ : 0), UJ),
          XJ = this.call((() => this.memory.reserveUpFront(eJ) ? "target" : eJ > UJ && this.memory.reserveUpFront(UJ) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== XJ) {
          const JJ = "least" === XJ ? `took ${UJ} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${eJ} bytes was refused at ${FJ} bytes; ${JJ}`)
        }
        return this.joinReserveTaken = XJ, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== XJ && this.shedFor("joinReserve"), "none" !== XJ
      }
      afterFrame() {
        if (this.stopped) return;
        const JJ = this.clock.now(),
          cJ = null !== this.stepsHeldUntil && JJ >= this.stepsHeldUntil;
        if (cJ && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && JJ >= this.ballastCheckAt && (this.takeBallast(JJ), this.stopped)) return;
        const ZJ = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          FJ = cJ && "now" === ZJ ? "none" : ZJ,
          {
            requestIdle: UJ
          } = this.clock;
        "now" === FJ || null !== this.pendingSince && JJ - this.pendingSince >= 500 ? this.step() : "idle" === FJ && null === this.pendingSince && (null === UJ ? this.step() : (this.pendingSince = JJ, UJ((() => {
          null !== this.pendingSince && this.step()
        })))), JJ - this.statsAt >= 1e3 && (this.statsAt = JJ, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var JJ, cJ;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (cJ = this.shedding.readDistanceInUse()) && void 0 !== cJ ? cJ : this.distanceInUse);
          null === (JJ = this.footprint) || void 0 === JJ || JJ.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(JJ, cJ) {
        this.noteWorker(`Mesh${JJ}`, cJ)
      }
      meshWorkerGone(JJ) {
        this.workerGone(`Mesh${JJ}`)
      }
      noteWorldgen(JJ) {
        this.noteWorker("Worldgen", JJ)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(JJ, cJ) {
        const ZJ = this.workers.get(JJ);
        null !== ZJ && void 0 !== ZJ && ZJ.gone && (this.replacedRefusals.reserves += ZJ.stats.reservesRefused, this.replacedRefusals.allocations += ZJ.stats.allocationsRefused), this.workers.set(JJ, {
          stats: cJ,
          gone: !1
        })
      }
      workerGone(JJ) {
        const cJ = this.workers.get(JJ);
        cJ && (cJ.gone = !0)
      }
      details() {
        var JJ, cJ;
        const ZJ = {
          wasmMemoryNow: `${(0,FJ.g)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (ZJ.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (ZJ.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const UJ = this.main;
        if (UJ) {
          ZJ.wasmMemoryMain = SJ(UJ);
          const JJ = Math.max(0, UJ.peakLiveBytes - this.ballastPeakBytes),
            cJ = 0 === this.peakStoredChunks ? "-" : (JJ / this.peakStoredChunks / FJ.b).toFixed(1);
          ZJ.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${cJ} KiB`
        }
        for (const [FJ, {
            stats: XJ,
            gone: AJ
          }] of this.workers) ZJ[`wasmMemory${FJ}`] = SJ(XJ) + (AJ ? " (gone)" : "");
        const eJ = null !== (JJ = null === (cJ = this.footprint) || void 0 === cJ ? void 0 : cJ.describe()) && void 0 !== JJ ? JJ : null;
        return null !== eJ && (ZJ.wasmMemoryFootprint = eJ), ZJ
      }
      pageKillSnapshot() {
        var JJ, cJ, ZJ, UJ, eJ;
        let XJ = (null !== (JJ = null === (cJ = this.main) || void 0 === cJ ? void 0 : cJ.reservesRefused) && void 0 !== JJ ? JJ : 0) + this.replacedRefusals.reserves,
          AJ = (null !== (ZJ = null === (UJ = this.main) || void 0 === UJ ? void 0 : UJ.allocationsRefused) && void 0 !== ZJ ? ZJ : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: FJ
          }
          of this.workers.values()) XJ += FJ.reservesRefused, AJ += FJ.allocationsRefused;
        return {
          wasmMainMiB: Number((0, FJ.g)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, FJ.g)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: XJ,
          refusedAllocations: AJ,
          sheds: this.sheds,
          ...null === (eJ = this.footprint) || void 0 === eJ ? void 0 : eJ.snapshot()
        }
      }
      workersMemoryBytes() {
        let JJ = 0;
        for (const {
            stats: cJ,
            gone: ZJ
          }
          of this.workers.values()) JJ += ZJ ? 0 : cJ.memoryBytes;
        return JJ
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(jJ)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(JJ) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = JJ + 1e3;
        const cJ = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, cJ)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(JJ) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${JJ}: frames grow on demand from here`)
      }
      shedFor(JJ) {
        const {
          shedding: cJ
        } = this;
        if (null === cJ) return;
        this.pendingSince = null;
        const ZJ = this.call((() => cJ.shed(JJ)), null);
        this.stopped || (null !== ZJ ? (this.sheds++, this.shedCap = ZJ, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), cJ.ls(JJ, this.sheds, this.details())) : hJ(JJ) && this.stopSteps("nothing is left to shed"))
      }
      call(JJ, cJ) {
        if (this.stopped) return cJ;
        try {
          return JJ()
        } catch (ZJ) {
          return this.stop(), this.onError(ZJ), cJ
        }
      }
    }

    function SJ(JJ) {
      const cJ = (JJ, cJ) => `${JJ}/${(0,FJ.g)(cJ)}`;
      return `memory ${(0,FJ.g)(JJ.memoryBytes)} live ${(0,FJ.g)(JJ.liveBytes)} peak ${(0,FJ.g)(JJ.peakLiveBytes)} unused ${(0,FJ.g)(JJ.unusedBytes)} ceiling ${(0,FJ.g)(JJ.ceilingBytes)} MiB; grows upFront ${cJ(JJ.grows.upFront,JJ.grownBytes.upFront)} ahead ${cJ(JJ.grows.ahead,JJ.grownBytes.ahead)} inFrame ${cJ(JJ.grows.onDemandInFrame,JJ.grownBytes.onDemandInFrame)} other ${cJ(JJ.grows.onDemand,JJ.grownBytes.onDemand)}; refused reserves ${JJ.reservesRefused} allocations ${JJ.allocationsRefused}`
    }
  },
  39730: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ,
      g: () => AJ,
      i: () => hJ,
      k: () => jJ
    });
    var FJ = ZJ(4189),
      UJ = ZJ(39732),
      eJ = ZJ(39741);
    const XJ = 395,
      AJ = 2147483648,
      qJ = new Uint8Array(0);
    class jJ extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class YJ extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class hJ {
      constructor(JJ, cJ, ZJ) {
        var FJ, eJ, XJ, AJ;
        let qJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = JJ, this.build = cJ, this.onFailure = ZJ, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.ys = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (FJ = qJ.fetchFile) && void 0 !== FJ ? FJ : JJ => (0, UJ.d)(JJ), this.onWritten = null !== (eJ = qJ.onWritten) && void 0 !== eJ ? eJ : null, this.onTaken = null !== (XJ = qJ.onTaken) && void 0 !== XJ ? XJ : null, this.onPackFileFailed = null !== (AJ = qJ.onPackFileFailed) && void 0 !== AJ ? AJ : null, this.startupLeft = new Set(JJ.startup);
        for (const UJ of JJ.startup) this.request(UJ)
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
      drawnUrl(JJ) {
        return this.drawn.get(JJ)
      }
      request(JJ) {
        const cJ = this.pending.get(JJ);
        if (!0 === (null === cJ || void 0 === cJ ? void 0 : cJ.ask)) return;
        const ZJ = this.Fs(JJ, !0);
        ZJ.recheck = void 0 !== cJ;
        const FJ = this.drawn.get(JJ);
        if (void 0 !== FJ) return ZJ.hj = !0, ZJ.recheck = !0, void this.fetch(JJ, ZJ, FJ);
        this.fetchWanted(JJ, ZJ)
      }
      async refresh() {
        const JJ = ++this.refreshes,
          cJ = new Set;
        for (const XJ of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const JJ of XJ) 0 === (JJ & UJ.c) && cJ.add(JJ);
        const ZJ = [...cJ];
        let FJ;
        try {
          FJ = await Promise.all(ZJ.map((JJ => this.wanted(JJ))))
        } catch {
          return null
        }
        if (JJ !== this.refreshes) return null;
        const eJ = {
          resent: 0,
          refetched: 0,
          delivered: ZJ.filter((JJ => this.drawn.has(JJ))).length
        };
        return ZJ.forEach(((JJ, cJ) => {
          const {
            url: ZJ,
            inPlaceOf: UJ
          } = FJ[cJ], XJ = this.pending.get(JJ);
          if (void 0 !== XJ) {
            if (XJ.hj || void 0 === XJ.url) return void(XJ.recheck = !0);
            if (XJ.url === ZJ) return;
            eJ.refetched++;
            const cJ = this.Fs(JJ, XJ.ask);
            return cJ.recheck = XJ.recheck, void this.fetch(JJ, cJ, ZJ, UJ)
          }
          const AJ = this.written.get(JJ);
          void 0 === AJ ? this.drawn.get(JJ) !== (null !== ZJ && void 0 !== ZJ ? ZJ : void 0) && (eJ.resent++, this.fetch(JJ, this.Fs(JJ, !1), ZJ, UJ)) : AJ.url !== (null !== ZJ && void 0 !== ZJ ? ZJ : "") && (AJ.attempt.recheck = !0)
        })), eJ
      }
      taken(JJ, cJ) {
        const ZJ = new Set,
          FJ = new Set;
        for (const UJ of Array.from(cJ)) 0 === (UJ & AJ) ? ZJ.add(UJ) : FJ.add((UJ & ~AJ) >>> 0);
        for (const [UJ, eJ] of this.written) eJ.seq > JJ || (this.written.delete(UJ), ZJ.has(eJ.seq) ? this.refusedFile(UJ, eJ) : this.takenFile(UJ, eJ, !eJ.empty && !FJ.has(eJ.seq)))
      }
      takenFile(JJ, cJ, ZJ) {
        const {
          attempt: FJ
        } = cJ;
        if (ZJ) {
          var UJ;
          this.drawn.set(JJ, cJ.url), this.undrawn.delete(JJ), void 0 !== FJ.inPlaceOf ? this.refusedPack.set(JJ, FJ.inPlaceOf) : FJ.hj || this.refusedPack.delete(JJ), null === (UJ = this.onTaken) || void 0 === UJ || UJ.call(this, JJ, !0);
          const ZJ = this.pending.get(JJ);
          if (!0 === (null === ZJ || void 0 === ZJ ? void 0 : ZJ.hj) && ZJ.url !== cJ.url) {
            const ZJ = this.Fs(JJ, !0);
            ZJ.hj = !0, ZJ.recheck = !0, this.fetch(JJ, ZJ, cJ.url)
          }
        } else {
          var eJ;
          this.drawn.has(JJ) || this.undrawn.add(JJ), null === (eJ = this.onTaken) || void 0 === eJ || eJ.call(this, JJ, !1)
        }
        FJ.recheck && this.resendIfChanged(JJ)
      }
      refusedFile(JJ, cJ) {
        var ZJ, FJ;
        if (null === (ZJ = this.onTaken) || void 0 === ZJ || ZJ.call(this, JJ, !1), this.refusedPack.set(JJ, cJ.url), this.pending.has(JJ)) return void(null === (FJ = this.onPackFileFailed) || void 0 === FJ || FJ.call(this, JJ, DJ(cJ.url)));
        const UJ = this.Fs(JJ, cJ.attempt.ask);
        UJ.recheck = cJ.attempt.recheck, this.afterRefusal(JJ, UJ, cJ.url)
      }
      async afterRefusal(JJ, cJ, ZJ) {
        var FJ;
        let UJ;
        try {
          UJ = await this.wanted(JJ)
        } catch (eJ) {
          return void(this.pending.get(JJ) === cJ && this.giveUp(JJ, cJ, ZJ, eJ))
        }
        this.pending.get(JJ) === cJ && (UJ.inPlaceOf !== ZJ ? cJ.ask || (null !== (FJ = UJ.url) && void 0 !== FJ ? FJ : void 0) !== this.drawn.get(JJ) ? this.fetch(JJ, cJ, UJ.url, UJ.inPlaceOf) : this.pending.delete(JJ) : this.fallBack(JJ, cJ, ZJ, DJ(ZJ)))
      }
      Fs(JJ, cJ) {
        const ZJ = {
          url: void 0,
          ask: cJ,
          hj: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(JJ, ZJ);
        for (let FJ = this.ready.length - 1; FJ >= 0; FJ--) this.ready[FJ].file === JJ && this.ready.splice(FJ, 1);
        return ZJ
      }
      async wanted(JJ) {
        const cJ = await this.files.url(JJ);
        return null !== cJ && this.refusedPack.get(JJ) === cJ ? {
          url: await this.files.shippedUrl(JJ),
          inPlaceOf: cJ
        } : {
          url: cJ,
          inPlaceOf: void 0
        }
      }
      fetchWanted(JJ, cJ) {
        const ZJ = this.files.url(JJ);
        ZJ instanceof Promise ? ZJ.then((ZJ => {
          this.fetchFound(JJ, cJ, ZJ)
        }), (ZJ => {
          this.pending.get(JJ) === cJ && this.giveUp(JJ, cJ, "", ZJ)
        })) : this.fetchFound(JJ, cJ, ZJ)
      }
      fetchFound(JJ, cJ, ZJ) {
        null !== ZJ && this.refusedPack.get(JJ) === ZJ ? Promise.resolve(this.files.shippedUrl(JJ)).then((FJ => {
          this.fetch(JJ, cJ, FJ, ZJ)
        }), (FJ => {
          this.pending.get(JJ) === cJ && this.giveUp(JJ, cJ, ZJ, FJ)
        })) : this.fetch(JJ, cJ, ZJ)
      }
      fetch(JJ, cJ, ZJ, FJ) {
        this.pending.get(JJ) === cJ && (cJ.url = ZJ, cJ.inPlaceOf = FJ, null !== ZJ ? this.load(JJ, cJ, ZJ) : this.buildFile(JJ, cJ, "", qJ))
      }
      load(JJ, cJ, ZJ) {
        const FJ = this.ys.get(JJ);
        (null === FJ || void 0 === FJ ? void 0 : FJ.url) !== ZJ ? this.fetchFile(ZJ).then((FJ => {
          var UJ, eJ;
          this.pending.get(JJ) === cJ && (this.keptTotal += FJ.byteLength - (null !== (UJ = null === (eJ = this.ys.get(JJ)) || void 0 === eJ ? void 0 : eJ.glb.byteLength) && void 0 !== UJ ? UJ : 0), this.ys.set(JJ, {
            url: ZJ,
            glb: FJ
          }), this.buildFile(JJ, cJ, ZJ, FJ))
        }), (FJ => {
          this.pending.get(JJ) === cJ && this.fallBack(JJ, cJ, ZJ, FJ)
        })) : this.buildFile(JJ, cJ, ZJ, FJ.glb)
      }
      buildFile(JJ, cJ, ZJ, XJ) {
        let AJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const qJ = XJ.byteLength > 0 && (0, UJ.h)(ZJ) ? (JJ | UJ.b) >>> 0 : JJ;
        this.build(qJ, XJ).then((UJ => {
          if (this.pending.get(JJ) !== cJ) return;
          if (FJ.r + (0, FJ.he)(UJ.byteLength) > FJ.xc) return void this.ringRefused(JJ, cJ, ZJ, new jJ(`${sJ(ZJ)}'s record is ${UJ.byteLength-eJ.b} bytes, past the cmd ring's ${FJ.xc}`), AJ);
          const qJ = {
            file: JJ,
            url: ZJ,
            payload: UJ,
            glb: XJ,
            attempt: cJ
          };
          AJ ? this.ready.unshift(qJ) : this.ready.push(qJ)
        }))
      }
      async fallBack(JJ, cJ, ZJ, FJ) {
        var UJ;
        let eJ = null,
          XJ = FJ;
        try {
          eJ = await this.files.shippedUrl(JJ)
        } catch (AJ) {
          XJ = AJ
        }
        this.pending.get(JJ) === cJ && (null !== eJ && eJ !== ZJ ? (null === (UJ = this.onPackFileFailed) || void 0 === UJ || UJ.call(this, JJ, FJ), cJ.ask || this.drawn.get(JJ) !== eJ ? (cJ.url = eJ, cJ.inPlaceOf = ZJ, this.load(JJ, cJ, eJ)) : this.pending.delete(JJ)) : this.giveUp(JJ, cJ, ZJ, XJ))
      }
      ringRefused(JJ, cJ, ZJ, FJ) {
        let eJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, UJ.h)(ZJ) ? this.fallBack(JJ, cJ, ZJ, FJ): this.giveUp(JJ, cJ, ZJ, FJ, eJ)
      }
      giveUp(JJ, cJ, ZJ, FJ) {
        let UJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: JJ,
          url: sJ(ZJ),
          error: FJ,
          startup: this.startupLeft.has(JJ)
        }), cJ.ask || !this.drawn.has(JJ) ? this.buildFile(JJ, cJ, ZJ, qJ, UJ) : this.pending.delete(JJ)
      }
      async resendIfChanged(JJ) {
        var cJ;
        if (0 !== (JJ & UJ.c)) return;
        let ZJ;
        try {
          ZJ = await this.wanted(JJ)
        } catch {
          return
        }(null !== (cJ = ZJ.url) && void 0 !== cJ ? cJ : void 0) === this.drawn.get(JJ) || this.pending.has(JJ) || this.written.has(JJ) || this.fetch(JJ, this.Fs(JJ, !1), ZJ.url, ZJ.inPlaceOf)
      }
      drain(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === JJ) return;
        let ZJ = 0,
          FJ = 0;
        for (; FJ < this.ready.length && ZJ < 262144;) {
          const YJ = this.ready[FJ];
          if (this.written.has(YJ.file)) {
            FJ++;
            continue
          }
          const hJ = this.nextSeq;
          new DataView(YJ.payload.buffer, YJ.payload.byteOffset, YJ.payload.byteLength).setUint32(eJ.e, hJ, !0);
          const DJ = YJ.attempt.hj && YJ.glb.byteLength > 0 && this.drawn.get(YJ.file) === YJ.url;
          if (JJ(XJ, DJ ? 1 : 0, YJ.payload)) {
            if (this.nextSeq = hJ >= AJ - 1 ? 1 : hJ + 1, this.ready.splice(FJ, 1), ZJ += YJ.payload.byteLength, this.pending.delete(YJ.file), this.startupLeft.delete(YJ.file), this.written.set(YJ.file, {
                seq: hJ,
                url: YJ.url,
                empty: 0 === YJ.glb.byteLength,
                attempt: YJ.attempt
              }), YJ.glb.byteLength > 0) try {
              var UJ;
              null === (UJ = this.onWritten) || void 0 === UJ || UJ.call(this, YJ.file, YJ.glb)
            } catch (qJ) {
              console.warn("ModelFeed: reading the file's images failed", qJ)
            }
          } else {
            if (null === cJ || 0 === YJ.glb.byteLength || cJ(YJ.payload.byteLength)) return;
            this.ready.splice(FJ, 1);
            const JJ = new jJ(`${sJ(YJ.url)}'s record is ${YJ.payload.byteLength-eJ.b} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(YJ.file, YJ.attempt, YJ.url, JJ, !0)
          }
        }
      }
    }

    function DJ(JJ) {
      return new YJ(`presentation refused ${sJ(JJ)}`)
    }

    function sJ(JJ) {
      return JJ.startsWith("data:") ? `${JJ.slice(0,Math.min(Math.max(JJ.indexOf(","),5),64))},...` : JJ
    }
  },
  39732: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => XJ,
      c: () => eJ,
      d: () => YJ,
      h: () => AJ,
      j: () => jJ,
      m: () => qJ
    });
    var FJ = ZJ(3183),
      UJ = ZJ(2685);
    const eJ = 2147483648,
      XJ = 1073741824;

    function AJ(JJ) {
      return JJ.startsWith("data:")
    }

    function qJ(JJ) {
      let {
        onTableFailed: cJ,
        packUrl: ZJ
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const FJ = jJ();
      FJ.catch((JJ => {
        null === cJ || void 0 === cJ || cJ(JJ)
      }));
      const UJ = async cJ => (await FJ).fileUrl((cJ & ~eJ) >>> 0, JJ);
      return {
        startup: [],
        url: async JJ => {
          if (ZJ && 0 === (JJ & eJ)) {
            const cJ = await FJ,
              UJ = cJ.filePackName(JJ),
              eJ = null === UJ || "lifeform" === cJ.fileSource(JJ) ? null : ZJ(UJ);
            if (null !== eJ) return eJ
          }
          return UJ(JJ)
        },
        shippedUrl: UJ
      }
    }

    function jJ() {
      return ZJ.e(38).then((() => ZJ(42032)))
    }
    async function YJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return JJ.startsWith("data:") ? (0, UJ.d)(JJ.slice(JJ.indexOf(",") + 1), cJ) : (0, FJ.L)(JJ, {
        spare: cJ
      })
    }
  },
  39741: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => qJ,
      e: () => jJ,
      f: () => DJ,
      h: () => nJ,
      j: () => hJ,
      k: () => sJ
    });
    const FJ = 826427981,
      UJ = 1,
      eJ = 2,
      XJ = 44,
      AJ = 46,
      qJ = 8,
      jJ = 4;

    function YJ(JJ, cJ, ZJ) {
      const UJ = (new TextEncoder).encode(ZJ),
        eJ = qJ + 4 * (cJ.length + 2),
        XJ = new Uint8Array(eJ + (UJ.byteLength + 3 & -4)),
        AJ = new DataView(XJ.buffer);
      return AJ.setUint32(0, JJ, !0), AJ.setUint32(qJ, FJ, !0), cJ.forEach(((JJ, cJ) => {
        AJ.setUint32(qJ + 4 * (cJ + 1), JJ, !0)
      })), AJ.setUint32(eJ - 4, UJ.byteLength, !0), XJ.set(UJ, eJ), XJ
    }

    function hJ(JJ, cJ) {
      return YJ(JJ, [eJ], cJ)
    }

    function DJ(JJ, cJ) {
      return YJ(JJ, [UJ, AJ], cJ)
    }

    function sJ(JJ, cJ) {
      return YJ(JJ, [UJ, XJ], cJ)
    }

    function nJ(JJ) {
      const cJ = qJ;
      if (JJ.byteLength < cJ + 12) return !1;
      const ZJ = new DataView(JJ.buffer, JJ.byteOffset, JJ.byteLength);
      return ZJ.getUint32(cJ, !0) === FJ && ZJ.getUint32(cJ + 4, !0) === UJ && ZJ.getUint32(cJ + 8, !0) === XJ
    }
  },
  39615: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => xJ,
      f: () => rJ,
      j: () => fJ,
      l: () => EJ
    });
    var FJ = ZJ(5986),
      UJ = ZJ(17),
      eJ = ZJ(3779),
      XJ = ZJ(4198),
      AJ = ZJ(5982),
      qJ = ZJ(39623);

    function jJ(JJ, cJ) {
      const ZJ = (0, AJ.c)(cJ.variants);
      return JJ.setShaderPack(ZJ.variantFlags, ZJ.hooks, ZJ.moduleCodes, (0, qJ.B)(cJ.layers), qJ.o[cJ.XY], cJ.keepCircleShadows)
    }
    const YJ = 0,
      hJ = 1,
      DJ = 2,
      sJ = "shaderPack:failedToCompile",
      nJ = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      GJ = new Set(["not_requested", "off_after_loss", "gpu_class_webgl"]);

    function fJ(JJ, cJ) {
      var ZJ;
      const FJ = null !== (ZJ = null === JJ || void 0 === JJ ? void 0 : JJ.reason) && void 0 !== ZJ ? ZJ : "none";
      return nJ.has(FJ) ? {
        messageKey: cJ ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === FJ && "override" === (null === JJ || void 0 === JJ ? void 0 : JJ.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : "gpu_class_webgl" === FJ && "default" !== (null === JJ || void 0 === JJ ? void 0 : JJ.source) ? {
        messageKey: "shaderPack:failedNoWebGpu",
        noAdapter: !1
      } : {
        messageKey: GJ.has(FJ) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    const xJ = {
      messageKey: "shaderPack:failedDeviceGraphics",
      noAdapter: !1
    };
    class rJ extends Error {
      constructor(JJ) {
        super(`the shader pack can't run in this game: ${JJ}`), this.messageKey = JJ, this.name = "ShaderPackJoinError"
      }
    }
    const vJ = "strict";
    class mJ {
      constructor(JJ) {
        this.deps = JJ, this.pagePack = void 0, this.loaded = null, this.XY = vJ, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = JJ.load().catch((cJ => (JJ.warn("the shader pack could not load: the game draws without it", cJ), {
          status: "none"
        }))).then((JJ => (this.loaded = JJ, "active" === JJ.status && (this.handOverToPreviews(JJ), null !== JJ.harnessPolicy && (this.XY = JJ.harnessPolicy, this.handOver())), JJ)))
      }
      async join(JJ) {
        this.cn();
        const cJ = this.game,
          [ZJ, UJ] = await Promise.all([this.pagePack, this.policyOf(JJ)]);
        if (cJ !== this.game || "none" === ZJ.status) return null;
        const eJ = "active" === ZJ.status ? ZJ.pack.variants : ZJ.variants,
          XJ = (0, FJ.j)(eJ, UJ);
        if (XJ && "active" === ZJ.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (XJ) {
          const JJ = this.cantRun(ZJ, UJ);
          if (null !== JJ) return JJ
        } else if ("blocked" === ZJ.status || null === this.deps.core) return null;
        return this.XY = UJ, this.handOver(), XJ && this.refused ? sJ : (this.joined = !0, this.offInThisGame = !XJ, null)
      }
      async replay(JJ) {
        const cJ = await this.join(JJ);
        null === cJ ? this.playable() : this.deps.failInGame(cJ)
      }
      cantRun(JJ, cJ) {
        const {
          core: ZJ,
          noWebGpu: FJ
        } = this.deps;
        if ("blocked" === JJ.status) {
          return "shaderPack:failedUnchecked" === JJ.messageKey && null === ZJ && FJ.noAdapter ? FJ.messageKey : JJ.messageKey
        }
        return this.refused || this.failedPolicies.has(cJ) ? sJ : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(sJ) : (null !== this.couldntRun ? this.notify(eJ.e, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.XY) && this.notifyModelFallback()))
      }
      cn() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(JJ) {
        for (const {
            code: cJ,
            detail: ZJ
          }
          of JJ)
          if (cJ === XJ.g.RenderShaderPackNotRun) switch (255 & ZJ) {
            case YJ:
              this.refused = !0, this.failed();
              break;
            case hJ:
              this.failedPolicies.add(this.XY), this.failed();
              break;
            case DJ:
              this.failedModelPolicies.add(this.XY), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(sJ) : this.failedWhileJoining = !0)
      }
      fail(JJ) {
        this.cn(), this.deps.failInGame(JJ)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(JJ, cJ) {
        const ZJ = this.game;
        this.deps.notify(JJ, (() => ZJ === this.game && this.joined), cJ)
      }
      handOver() {
        var JJ;
        const {
          core: cJ
        } = this.deps;
        null !== cJ && "active" === (null === (JJ = this.loaded) || void 0 === JJ ? void 0 : JJ.status) && (jJ(cJ, {
          ...this.loaded.pack,
          XY: this.XY
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(JJ) {
        let {
          pack: cJ,
          harnessPolicy: ZJ
        } = JJ;
        const {
          previews: FJ
        } = this.deps;
        null !== FJ && jJ(FJ, {
          ...cJ,
          XY: null !== ZJ && void 0 !== ZJ ? ZJ : vJ
        })
      }
      policyOf(JJ) {
        return this.deps.policyOf(JJ).catch((JJ => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", JJ), vJ)))
      }
    }
    const QJ = "wasmShaderPackNotice";

    function EJ(JJ, cJ, ZJ, FJ) {
      return UJ.i.subscribe(QJ, (JJ => {
        let {
          translationKey: cJ,
          stillCurrent: ZJ,
          reasonKey: FJ
        } = JJ;
        ZJ() && UJ.i.Uf("chat", (0, eJ.h)(cJ, FJ))
      })), new mJ({
        load: VJ,
        policyOf: KJ,
        core: JJ,
        previews: cJ,
        noWebGpu: ZJ,
        notify: (JJ, cJ, ZJ) => {
          const FJ = {
            translationKey: JJ,
            stillCurrent: cJ,
            reasonKey: ZJ
          };
          UJ.i.Uf(QJ, FJ, !0)
        },
        failInGame: JJ => {
          UJ.i.Uf(eJ.f, JJ)
        },
        warn: FJ
      })
    }
    async function VJ() {
      const [{
        shaderPackPage: JJ,
        harnessShaderPackMode: cJ
      }, {
        shaderPackTextures: FJ
      }] = await Promise.all([ZJ.e(122).then((() => ZJ(38169))), ZJ.e(123).then((() => ZJ(5977)))]), UJ = await JJ.load();
      return "active" !== UJ.status ? UJ : {
        status: "active",
        pack: {
          variants: UJ.pack.variants,
          layers: FJ().layers,
          keepCircleShadows: UJ.pack.keepCircleShadows
        },
        harnessPolicy: cJ()
      }
    }
    async function KJ(JJ) {
      var cJ;
      const [{
        harnessShaderPackMode: FJ
      }, {
        getShaderPackPolicy: UJ
      }] = await Promise.all([ZJ.e(122).then((() => ZJ(38169))), ZJ.e(83).then((() => ZJ(41944)))]);
      return null !== (cJ = FJ()) && void 0 !== cJ ? cJ : UJ(JJ)
    }
  },
  39747: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => AJ,
      g: () => fJ,
      j: () => qJ,
      k: () => jJ,
      m: () => YJ,
      o: () => DJ
    });
    var FJ = ZJ(39750),
      UJ = ZJ(39759);
    const eJ = "atlas:",
      XJ = 3e4;
    class AJ extends Error {
      constructor(JJ, cJ) {
        super(`fetching ${JJ} answered HTTP ${cJ}`), this.url = JJ, this.status = cJ, this.name = "TerrainTextureFetchError"
      }
    }

    function qJ(JJ) {
      if (!JJ.startsWith(eJ)) return null;
      const cJ = Number(JJ.slice(eJ.length));
      return Number.isInteger(cJ) && cJ >= 0 ? cJ : null
    }
    async function jJ() {
      const JJ = await ZJ.e(187).then((() => ZJ(33439)));
      return {
        atlasSheets: JJ.blockAtlasUrls,
        texture: cJ => {
          var ZJ, FJ, eJ;
          return null !== (ZJ = null !== (FJ = null !== (eJ = JJ.animatedBlockTextures[cJ]) && void 0 !== eJ ? eJ : JJ.rotatedBlockTextures[cJ]) && void 0 !== FJ ? FJ : UJ.c[cJ]) && void 0 !== ZJ ? ZJ : null
        }
      }
    }
    async function YJ(JJ) {
      const cJ = new AbortController,
        ZJ = setTimeout((() => {
          cJ.abort(new DOMException(`${JJ} took over ${XJ} ms`, "TimeoutError"))
        }), XJ);
      let FJ;
      try {
        const ZJ = await fetch(JJ, {
          signal: cJ.signal
        });
        if (!ZJ.ok) throw new AJ(JJ, ZJ.status);
        FJ = await ZJ.blob()
      } finally {
        clearTimeout(ZJ)
      }
      const UJ = await createImageBitmap(FJ, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return DJ(UJ)
      } finally {
        UJ.close()
      }
    }
    const hJ = 8192;

    function DJ(JJ) {
      const {
        width: cJ,
        height: ZJ
      } = JJ, UJ = Math.max(1, Math.min(ZJ, hJ)), eJ = (0, FJ.e)(cJ, UJ, {
        willReadFrequently: !0
      });
      if (!eJ) throw new Error("no 2D context to read the texture back");
      eJ.globalCompositeOperation = "copy";
      const XJ = new Uint8Array(cJ * ZJ * 4);
      for (let FJ = 0; FJ < ZJ; FJ += UJ) {
        const AJ = Math.min(UJ, ZJ - FJ);
        eJ.drawImage(JJ, 0, FJ, cJ, AJ, 0, 0, cJ, AJ), XJ.set(eJ.getImageData(0, 0, cJ, AJ).data, FJ * cJ * 4)
      }
      return {
        width: cJ,
        height: ZJ,
        pixels: XJ
      }
    }
    async function sJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : YJ;
      const FJ = [],
        UJ = await Promise.all(JJ.map((async JJ => {
          var UJ, XJ;
          const AJ = null !== (UJ = null === (XJ = cJ.decoded) || void 0 === XJ ? void 0 : XJ.call(cJ, JJ)) && void 0 !== UJ ? UJ : null,
            jJ = null === AJ ? function(JJ, cJ) {
              if (JJ.startsWith(eJ)) {
                var ZJ;
                const FJ = qJ(JJ);
                return null === FJ ? null : null !== (ZJ = cJ.atlasSheets[FJ]) && void 0 !== ZJ ? ZJ : null
              }
              return cJ.texture(JJ)
            }(JJ, cJ) : null,
            YJ = null !== AJ && void 0 !== AJ ? AJ : null === jJ ? null : ZJ(jJ);
          if (null === YJ) return FJ.push({
            name: JJ,
            url: jJ,
            error: new Error(`no URL for terrain texture ${JJ}`)
          }), null;
          try {
            const cJ = await YJ;
            if (cJ.pixels.byteLength !== cJ.width * cJ.height * 4) throw new Error(`decoded ${cJ.pixels.byteLength} bytes for ${cJ.width}x${cJ.height} texels`);
            return {
              name: JJ,
              texture: cJ
            }
          } catch (hJ) {
            return FJ.push({
              name: JJ,
              url: jJ,
              error: hJ
            }), null
          }
        }))),
        XJ = UJ.filter((JJ => null !== JJ)),
        AJ = new Uint32Array(2 * XJ.length);
      XJ.forEach(((JJ, cJ) => {
        let {
          texture: ZJ
        } = JJ;
        AJ[2 * cJ] = ZJ.width, AJ[2 * cJ + 1] = ZJ.height
      }));
      return {
        handOver: {
          names: XJ.map((JJ => {
            let {
              name: cJ
            } = JJ;
            return cJ
          })),
          textures: XJ.map((JJ => {
            let {
              texture: cJ
            } = JJ;
            return cJ.pixels
          })),
          sizes: AJ
        },
        failures: FJ
      }
    }
    const nJ = [2e3, 1e4, 3e4, 6e4, 12e4];

    function GJ() {}
    class fJ {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nJ,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = JJ, this.retryMs = cJ, this.keepBelow = ZJ, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jJ,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const FJ = ++this.started,
          UJ = {
            decode: ZJ.decode,
            wholeAtlas: ZJ.wholeAtlas
          };
        return this.loadAndHandOver(cJ, UJ, JJ, (() => {
          var JJ;
          return FJ < this.landed || !1 === (null === (JJ = ZJ.wanted) || void 0 === JJ ? void 0 : JJ.call(ZJ))
        }), {
          onTaken: (JJ, ZJ) => {
            this.landed = FJ, this.current = {
              mine: FJ,
              sources: cJ,
              load: UJ,
              ys: JJ,
              failed: ZJ
            }
          }
        })
      }
      restore(JJ) {
        var cJ;
        const ZJ = this.current;
        if (null === ZJ) return Promise.resolve(null);
        if ((null === (cJ = this.restoring) || void 0 === cJ ? void 0 : cJ.mine) === ZJ.mine) return this.restoring.done;
        const FJ = {
          mine: ZJ.mine,
          done: this.restoreLanded(ZJ, JJ).finally((() => {
            this.restoring === FJ && (this.restoring = null)
          }))
        };
        return this.restoring = FJ, FJ.done
      }
      async restoreLanded(JJ, cJ) {
        const ZJ = () => this.landed !== JJ.mine,
          {
            ys: FJ
          } = JJ;
        if (null !== FJ) return this.stopped() ? null : this.core.setTerrainTextures(FJ.names, FJ.textures, FJ.sizes);
        let UJ = cJ;
        for (let eJ = 0;; eJ++) {
          const cJ = this.retryMs.at(eJ),
            FJ = {
              allOrNothingExcept: void 0 === cJ ? void 0 : JJ.failed
            },
            XJ = await this.loadAndHandOver(JJ.sources, JJ.load, UJ, ZJ, FJ);
          if (!1 !== XJ || void 0 === cJ || this.stopped()) return XJ;
          if (UJ = GJ, await new Promise((JJ => {
              setTimeout(JJ, cJ)
            })), ZJ()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(JJ, cJ, ZJ, FJ) {
        let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const eJ = this.core.terrainTextureNames();
        var XJ;
        if (0 === eJ.length) return null === (XJ = UJ.onTaken) || void 0 === XJ || XJ.call(UJ, null, new Set), !0;
        let AJ, jJ;
        try {
          AJ = await JJ(), jJ = await sJ(eJ, AJ, cJ.decode)
        } catch (fJ) {
          return FJ() ? null : (ZJ({
            name: null,
            url: null,
            error: fJ
          }), !1)
        }
        if (FJ() || this.stopped()) return null;
        for (const qJ of jJ.failures) ZJ(qJ);
        const YJ = UJ.allOrNothingExcept;
        if (void 0 !== YJ && jJ.failures.some((JJ => {
            let {
              name: cJ
            } = JJ;
            return null === cJ || !YJ.has(cJ)
          })) || !0 === cJ.wholeAtlas && jJ.failures.some((JJ => {
            let {
              name: cJ
            } = JJ;
            return null === cJ || null !== qJ(cJ)
          }))) return !1;
        const {
          handOver: hJ
        } = jJ, DJ = function(JJ) {
          return JJ.textures.reduce(((JJ, cJ) => JJ + cJ.byteLength), 0)
        }(hJ) < this.keepBelow, nJ = this.core.setTerrainTextures(hJ.names, hJ.textures, hJ.sizes, DJ ? void 0 : () => {
          !async function(JJ, cJ) {
            await cJ;
            for (const {
                buffer: FJ
              }
              of JJ) {
              const JJ = FJ;
              var ZJ;
              if (!JJ.detached) null === (ZJ = JJ.transfer) || void 0 === ZJ || ZJ.call(JJ, 0)
            }
          }(hJ.textures, AJ.heldUntil)
        });
        if (nJ) {
          var GJ;
          const JJ = new Set(jJ.failures.flatMap((JJ => {
            let {
              name: cJ
            } = JJ;
            return null === cJ ? [] : [cJ]
          })));
          null === (GJ = UJ.onTaken) || void 0 === GJ || GJ.call(UJ, DJ ? hJ : null, JJ)
        }
        return nJ
      }
    }
  },
  39764: (JJ, cJ, ZJ) => {
    function FJ(JJ) {
      return "fetch" === JJ || "timeout" === JJ || "integrity" === JJ ? "download" : "browser"
    }
    ZJ.d(cJ, {
      d: () => UJ,
      h: () => XJ,
      k: () => qJ,
      n: () => AJ,
      r: () => FJ,
      s: () => eJ
    });
    const UJ = "https://discord.gg/playbloxd";

    function eJ(JJ) {
      return "download" === JJ ? {
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

    function XJ(JJ, cJ) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: cJ ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: JJ.code
        },
        discordLink: cJ,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function AJ() {
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

    function qJ(JJ, cJ, ZJ) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: ZJ ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: JJ.reason
        },
        discordLink: null === JJ.name,
        confirm: cJ ? "general:reconnect" : JJ.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  5982: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => mJ,
      d: () => QJ,
      h: () => rJ,
      k: () => xJ
    });
    var FJ = ZJ(5986);
    const UJ = 6,
      eJ = 3,
      XJ = 1,
      AJ = 2,
      qJ = 4,
      jJ = 8,
      YJ = 16,
      hJ = 32,
      DJ = 64,
      sJ = 128,
      nJ = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function GJ(JJ) {
      if (!JJ) return 0;
      const cJ = nJ.indexOf(JJ);
      if (cJ <= 0) throw new Error(`"${JJ}" is not a shader pack hook function`);
      return cJ
    }

    function fJ(JJ) {
      if (0 === JJ) return null;
      const cJ = nJ[JJ];
      if (void 0 === cJ) throw new Error(`${JJ} is not a shader pack hook function id`);
      return cJ
    }

    function xJ(JJ) {
      const cJ = FJ.c.length;
      return {
        strict: JJ >= cJ,
        program: FJ.c[JJ % cJ]
      }
    }

    function rJ(JJ) {
      return Number(JJ.strict) * FJ.c.length + FJ.c.indexOf(JJ.program)
    }

    function vJ(JJ) {
      return "" === JJ ? [] : JJ.split(" ")
    }

    function mJ(JJ) {
      const cJ = {
        variantFlags: new Uint8Array(UJ),
        hooks: new Uint8Array(UJ * eJ),
        moduleCodes: Array(UJ).fill(""),
        reads: Array(2 * UJ).fill("")
      };
      for (const ZJ of JJ) {
        const JJ = rJ(ZJ.key),
          FJ = (JJ, cJ) => null === ZJ.hooks.surface || ZJ.reads.fragment.includes(JJ) ? 0 : cJ;
        cJ.variantFlags[JJ] = (ZJ.sceneDepth ? XJ : 0) | (ZJ.movesVertices ? AJ : 0) | (ZJ.sunShadow ? qJ : 0) | (ZJ.airShadow ? jJ : 0) | (ZJ.discards ? YJ : 0) | FJ("localPosition", hJ) | FJ("enchantSpeed", DJ) | FJ("enchantTier", sJ), cJ.hooks[JJ * eJ] = GJ(ZJ.hooks.vertex), cJ.hooks[JJ * eJ + 1] = GJ(ZJ.hooks.surface), cJ.hooks[JJ * eJ + 2] = GJ(ZJ.hooks.light), cJ.moduleCodes[JJ] = ZJ.moduleCode, cJ.reads[2 * JJ] = ZJ.reads.vertex.join(" "), cJ.reads[2 * JJ + 1] = ZJ.reads.fragment.join(" ")
      }
      return cJ
    }

    function QJ(JJ) {
      const {
        hooks: cJ,
        moduleCodes: ZJ,
        reads: FJ
      } = JJ;
      return Array.from(JJ.variantFlags, ((JJ, UJ) => {
        const hJ = UJ * eJ;
        return {
          key: xJ(UJ),
          hooks: {
            vertex: fJ(cJ[hJ]),
            surface: fJ(cJ[hJ + 1]),
            light: fJ(cJ[hJ + 2])
          },
          moduleCode: ZJ[UJ],
          sceneDepth: 0 !== (JJ & XJ),
          sunShadow: 0 !== (JJ & qJ),
          airShadow: 0 !== (JJ & jJ),
          movesVertices: 0 !== (JJ & AJ),
          discards: 0 !== (JJ & YJ),
          reads: {
            vertex: vJ(FJ[2 * UJ]),
            fragment: vJ(FJ[2 * UJ + 1])
          }
        }
      }))
    }
  },
  39623: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      B: () => GJ,
      E: () => sJ,
      H: () => nJ,
      c: () => UJ,
      f: () => FJ,
      h: () => DJ,
      k: () => YJ,
      o: () => fJ,
      q: () => eJ,
      r: () => AJ,
      u: () => qJ,
      y: () => XJ
    });
    const FJ = 3,
      UJ = 0,
      eJ = 1,
      XJ = 2,
      AJ = {
        uniform: 3,
        GD: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      qJ = 10,
      jJ = "BloxdPackInputs",
      YJ = "bloxdPackInputs",
      hJ = [{
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
      DJ = 80;

    function sJ() {
      const JJ = hJ.map((JJ => {
        let {
          name: cJ,
          type: ZJ
        } = JJ;
        return `    ${cJ}: ${ZJ},\n`
      })).join("");
      return `struct ${jJ} {\n${JJ}}\n@group(${FJ}) @binding(${UJ}) var<uniform> ${YJ}: ${jJ};\n`
    }

    function nJ(JJ, cJ) {
      const ZJ = new DataView(JJ, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, DJ),
        [FJ, UJ, eJ, XJ, AJ, qJ] = hJ;
      ZJ.setFloat32(FJ.offset, cJ.seconds, !0), ZJ.setUint32(UJ.offset, cJ.lit ? 1 : 0, !0);
      for (let jJ = 0; jJ < 3; jJ++) ZJ.setInt32(eJ.offset + 4 * jJ, cJ.renderOffset[jJ], !0), ZJ.setFloat32(XJ.offset + 4 * jJ, cJ.i4[jJ], !0), ZJ.setFloat32(AJ.offset + 4 * jJ, cJ.eyePosition[jJ], !0), ZJ.setFloat32(qJ.offset + 4 * jJ, cJ.shadowDirection[jJ], !0)
    }

    function GJ(JJ) {
      const cJ = new Uint32Array(Math.max(1, JJ.length));
      return JJ.forEach(((JJ, ZJ) => {
        let {
          id: FJ,
          rotation: UJ
        } = JJ;
        cJ[ZJ] = 65535 & FJ | (3 & UJ) << 16
      })), cJ
    }
    const fJ = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  5986: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ,
      f: () => UJ,
      j: () => eJ
    });
    const FJ = ["terrain", "liquid", "model"];

    function UJ(JJ) {
      return !JJ.hooks.vertex && !JJ.hooks.surface && !JJ.hooks.light
    }

    function eJ(JJ, cJ) {
      return "off" !== cJ && (null === JJ || JJ.some((JJ => JJ.key.strict === ("strict" === cJ) && !UJ(JJ))))
    }
  },
  39665: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => FJ,
      h: () => eJ,
      k: () => qJ,
      n: () => XJ,
      p: () => UJ
    });
    const FJ = /^alloc_failed (\d+) bytes$/;

    function UJ(JJ, cJ) {
      return eJ(JJ, cJ) ? `trap=alloc_failed ${cJ} bytes` : `trap=${JJ}`
    }

    function eJ(JJ, cJ) {
      return "unreachable" === JJ && cJ > 0
    }

    function XJ(JJ, cJ, ZJ) {
      const FJ = function(JJ) {
        return JJ instanceof WebAssembly.RuntimeError ? /unreachable/i.test(JJ.message) ? "unreachable" : /out of bounds/i.test(JJ.message) ? "out_of_bounds" : "runtime_error" : (JJ instanceof RangeError || JJ instanceof Error && "InternalError" === JJ.name) && /call stack|recursion/i.test(JJ.message) ? "stack_overflow" : "js_error"
      }(JJ);
      if ("unreachable" !== FJ) return {
        kind: FJ,
        panic: null,
        refusedBytes: 0
      };
      const UJ = cJ(),
        eJ = ZJ();
      return {
        kind: FJ,
        panic: eJ > 0 ? null : UJ,
        refusedBytes: eJ
      }
    }
    const AJ = 300;

    function qJ(JJ) {
      return JJ.replace(/\s*\n\s*/g, " / ").slice(0, AJ)
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);