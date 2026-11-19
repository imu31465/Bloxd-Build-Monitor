export const id = 86;
export const ids = [86];
export const modules = {
  37747: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT,
      i: () => BT,
      m: () => FT,
      p: () => XT,
      s: () => WT
    });
    const iT = "A valid external Instance reference no longer exists.",
      zT = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ];
    const kT = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function WT(TT, oT) {
      return TT ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(TT) {
        var oT;
        const IT = null !== (oT = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(TT)) && void 0 !== oT ? oT : /failed with ([A-Z][A-Z0-9_]+)/.exec(TT);
        return IT ? IT[1] : TT.includes(iT) ? "gpu_process_lost" : "other"
      }(oT)
    }

    function XT(TT) {
      return `${(null===TT||void 0===TT?void 0:TT.vendor)||"unknown vendor"} ${(null===TT||void 0===TT?void 0:TT.architecture)||"unknown architecture"}`
    }

    function BT(TT) {
      return ST(TT)[1]
    }

    function FT(TT) {
      return ST(TT)[2]
    }

    function ST(TT) {
      var oT;
      return null !== (oT = zT.find((oT => {
        let [IT] = oT;
        return TT < IT
      }))) && void 0 !== oT ? oT : zT[zT.length - 1]
    }
  },
  38038: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT,
      f: () => zT
    });
    const iT = 45e3;
    class zT extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  35488: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => iT,
      f: () => zT,
      h: () => kT
    });
    const iT = 1024,
      zT = 1024 * iT;

    function kT(TT) {
      return (TT / zT).toFixed(1)
    }
  },
  35479: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT,
      f: () => XT,
      g: () => WT,
      h: () => BT,
      i: () => FT
    });
    var iT = IT(193);
    const zT = 32 * IT(35488).f,
      kT = 6144,
      WT = 4608,
      XT = 512;

    function BT(TT) {
      return Math.floor(zT * TT / kT)
    }

    function FT(TT) {
      const oT = TT - Math.floor(TT / 6);
      let IT = iT.c.maxChunkHorizAddDistance,
        zT = iT.c.maxChunkVertAddDistance;
      if (ST(IT + 1, zT + 1) <= oT) return null;
      for (; ST(IT + 1, zT + 1) > oT && (IT > 0 || zT > 0);) IT > zT ? IT-- : zT--;
      return {
        horizontal: IT,
        vertical: zT
      }
    }

    function ST(TT, oT) {
      const IT = Math.max(TT, oT);
      let iT = 0;
      for (let zT = -IT; zT <= IT; zT++)
        for (let kT = -IT; kT <= IT; kT++)
          for (let WT = -IT; WT <= IT; WT++) DT(TT, oT, zT, kT, WT) && iT++;
      return iT
    }

    function DT(TT, oT, IT, iT, zT) {
      const kT = IT * IT + zT * zT;
      return TT === oT ? kT + iT * iT <= TT * TT : TT > oT ? Math.abs(iT) <= oT && kT + iT * iT <= TT * TT : kT <= TT * TT && kT + iT * iT <= oT * oT
    }
  },
  39656: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => zT,
      e: () => kT,
      h: () => XT,
      k: () => ST,
      n: () => BT,
      q: () => WT
    });
    var iT = IT(193);
    const zT = 3e3,
      kT = 15e3;

    function WT(TT) {
      const oT = TT.endsWith(iT.k);
      return {
        text: (oT ? TT.slice(0, -iT.k.length) : TT) || null,
        dropsCache: oT
      }
    }
    const XT = "Either your internet isn't working or this is a bug.";

    function BT(TT, oT) {
      const IT = ST(TT);
      return null !== IT.name && "" === iT.b[IT.name].text && null !== oT ? oT : IT.reason
    }
    const FT = "You were removed from the game.";

    function ST(TT) {
      var oT;
      let IT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const zT = null !== (oT = Object.keys(iT.b).find((oT => iT.b[oT].code === TT))) && void 0 !== oT ? oT : null;
      if (null === zT) return {
        code: TT,
        name: zT,
        reason: null !== IT && void 0 !== IT ? IT : `${XT}\nCode: ${TT}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: kT,
        canReconnect: WT = !1
      } = iT.b[zT], BT = TT === iT.b.outdatedVersion.code || TT === iT.b.loadRecaptchaError.code;
      return {
        code: TT,
        name: zT,
        reason: "" !== kT ? kT : null !== IT && void 0 !== IT ? IT : TT === iT.b.gameOrPluginKick.code ? FT : `Code: ${TT}`,
        canReconnect: WT,
        automaticallyReconnect: TT === iT.b.customGameUpdated.code || TT === iT.b.duplicateLobbyNameError.code,
        requiresRefresh: BT
      }
    }
  },
  4276: (TT, oT, IT) => {
    IT.d(oT, {
      $c: () => dT,
      B: () => WT,
      Bb: () => VT,
      Cb: () => oo,
      Cc: () => iT.hb,
      D: () => JT,
      Dc: () => iT.qb,
      Dd: () => kT,
      Eb: () => zT.f,
      F: () => Lo,
      G: () => PT,
      Gb: () => RT,
      Hc: () => xo,
      Hd: () => MT,
      I: () => iT.d,
      J: () => FT,
      Jb: () => OT,
      Jd: () => Xo,
      K: () => iT.f,
      Kc: () => Fo,
      M: () => iT.j,
      Nb: () => CT,
      Nd: () => nT,
      Oc: () => io,
      Od: () => ZT,
      P: () => yT,
      Qb: () => ET,
      Qc: () => iT.ub,
      R: () => iT.o,
      Rb: () => iT.N,
      Rd: () => HT,
      Sb: () => jT,
      Uc: () => iT.vb,
      V: () => iT.r,
      Vb: () => wT,
      Vd: () => tT,
      Xc: () => iT.xb,
      Z: () => iT.u,
      Zb: () => ko,
      ab: () => DT,
      ae: () => lT,
      bb: () => AT,
      bc: () => gT,
      be: () => pT,
      ce: () => GT,
      dd: () => iT.Bb,
      e: () => To,
      eb: () => iT.y,
      ed: () => iT.Fb,
      ee: () => Wo,
      fc: () => So,
      g: () => KT,
      gb: () => iT.A,
      gd: () => iT.Gb,
      h: () => cT,
      he: () => co,
      ic: () => zT.m,
      ie: () => hT,
      je: () => bT,
      kb: () => qT,
      kd: () => iT.Kb,
      l: () => Bo,
      lc: () => rT,
      ld: () => iT.Nb,
      le: () => YT,
      m: () => uT,
      ne: () => aT,
      ob: () => zo,
      pc: () => Io,
      pd: () => iT.Pb,
      pe: () => UT,
      q: () => eT,
      qe: () => BT,
      rd: () => vT,
      sb: () => ST,
      se: () => QT,
      t: () => iT.c,
      tc: () => iT._,
      te: () => Ko,
      ud: () => iT.Rb,
      vb: () => iT.C,
      wb: () => sT,
      wd: () => iT.Tb,
      we: () => xT,
      x: () => Do,
      xb: () => NT,
      xc: () => iT.bb,
      y: () => fT,
      yc: () => iT.eb,
      zc: () => iT.gb,
      zd: () => iT.Yb
    });
    var iT = IT(4285),
      zT = IT(2201);
    const kT = Math.round(1e3 / iT.Yb),
      WT = 4,
      XT = 2;

    function BT() {
      return crypto.getRandomValues(new Uint32Array(XT))
    }
    const FT = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      ST = 16,
      DT = {
        Draws: 1,
        NetAll: 2
      },
      LT = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function xT(TT) {
      return (TT.nametagsHidden ? mT.NametagsHidden : 0) | (TT.crouchToggle ? mT.CrouchToggle : 0) | (TT.bhopDisabled ? mT.BhopDisabled : 0) | (TT.disableBobbing ? mT.DisableBobbing : 0) | (TT.ezTowering ? mT.EzTowering : 0) | (TT.ezBridging ? mT.EzBridging : 0) | (TT.showChunkBorders ? mT.ShowChunkBorders : 0)
    }
    const cT = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      KT = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      MT = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      rT = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      AT = 5,
      gT = 4294967295;

    function hT(TT) {
      return (TT.showFog ? LT.ShowFog : 0) | (TT.lighting ? LT.Lighting : 0) | (TT.chunkFade ? LT.ChunkFade : 0)
    }
    const wT = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      mT = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      eT = {
        Release: 1,
        KeepTouches: 2
      },
      RT = {
        Point: 1,
        Stamped: 2
      },
      uT = {
        Add: 1,
        Clear: 2
      },
      vT = 1,
      ET = 8,
      fT = 16777215,
      CT = 4,
      jT = {
        Resume: 1
      },
      JT = {
        Held: 1
      };

    function UT(TT, oT) {
      return (TT | oT << 8) >>> 0
    }

    function aT(TT) {
      return 255 & TT
    }

    function YT(TT) {
      return TT >>> 8
    }

    function QT(TT) {
      return TT + 3 & -4
    }
    const OT = 16777216,
      HT = 20;
    const nT = 8,
      qT = 8,
      ZT = 16777216,
      lT = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      sT = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      tT = 16,
      GT = {
        Lost: 0,
        Gone: 1
      },
      pT = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function bT(TT) {
      return TT === pT.WorldgenSeed || TT === pT.Generate
    }
    const yT = 4,
      NT = 99,
      PT = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      dT = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      VT = 12,
      To = 16,
      oo = 4,
      Io = 12,
      io = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      zo = 4,
      ko = 8,
      Wo = 8,
      Xo = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      Bo = {
        Crit: 1,
        HitSelf: 2
      },
      Fo = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      So = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      Do = 12,
      Lo = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      xo = 67108864;

    function co(TT) {
      for (const [oT, IT] of Object.entries(iT.d))
        if (IT === TT) return oT;
      return `Unknown${TT}`
    }

    function Ko(TT) {
      return {
        status: TT[iT.A.Status],
        lastError: TT[iT.A.LastError],
        lastErrorDetail: TT[iT.A.LastErrorDetail],
        errorCount: TT[iT.A.ErrorCount],
        frameIndex: TT[iT.A.FrameIndex],
        tickIndex: TT[iT.A.TickIndex],
        renderPending: TT[iT.A.RenderPending],
        firstView: TT[iT.A.FirstView],
        chunksCancelled: TT[iT.A.ChunksCancelled]
      }
    }
  },
  39420: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT,
      c: () => DT,
      f: () => XT,
      i: () => kT,
      j: () => zT,
      m: () => BT,
      q: () => ST
    });
    class iT extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function zT(TT) {
      return TT instanceof RangeError && /call stack/i.test(TT.message) || TT instanceof Error && "InternalError" === TT.name && /recursion/i.test(TT.message)
    }

    function kT(TT) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(TT))
    }
    const WT = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function XT(TT) {
      var oT;
      return TT instanceof WebAssembly.RuntimeError || TT instanceof iT || zT(TT) && WT.test(null !== (oT = TT.stack) && void 0 !== oT ? oT : "")
    }

    function BT(TT, oT) {
      if (XT(TT)) throw TT;
      console.error(oT, TT)
    }

    function FT(TT, oT, IT, zT, kT) {
      if (oT % zT !== 0 || oT + IT > TT.byteLength) throw new iT(`${kT}: ${IT} bytes at ${oT}, ${zT}-aligned, outside ${TT.byteLength} bytes of memory`)
    }

    function ST(TT, oT, IT, iT, zT) {
      return 0 === IT ? null : (FT(oT, IT, iT * TT.BYTES_PER_ELEMENT, TT.BYTES_PER_ELEMENT, zT), new TT(oT, IT, iT))
    }

    function DT(TT, oT, IT, iT, zT) {
      return 0 === oT ? null : (FT(TT, oT, IT, iT, zT), new DataView(TT, oT, IT))
    }
  },
  39783: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT
    });
    const iT = {
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
  39747: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => cT,
      e: () => KT,
      i: () => LT,
      m: () => DT
    });
    const iT = 2e3,
      zT = "unavailable";
    let kT = () => Promise.resolve().then((() => IT(2791))),
      WT = null,
      XT = null,
      BT = FT();

    function FT() {
      let TT = () => {};
      return {
        promise: new Promise((oT => {
          TT = () => {
            oT(null)
          }
        })),
        resolve: TT
      }
    }

    function ST() {
      if (null === WT) {
        const TT = kT();
        WT = TT, TT.then((oT => {
          WT === TT && (XT = oT)
        }), (() => {
          WT === TT && (WT = null)
        }))
      }
      return WT
    }

    function DT() {
      ST().catch((() => {}))
    }

    function LT() {
      BT.resolve()
    }

    function xT(TT, oT, IT, iT) {
      if (null === TT) return {
        errorKind: oT,
        fingerprint: zT,
        dedupe: `${oT}|${iT}`
      };
      const {
        fingerprint: kT
      } = TT.clientErrorKey(oT, IT, iT);
      return {
        errorKind: oT,
        fingerprint: kT,
        dedupe: kT
      }
    }

    function cT(TT, oT, IT, iT) {
      return null === XT ? iT ? (DT(), xT(null, TT, oT, IT)) : null : xT(XT, TT, oT, IT)
    }
    async function KT(TT, oT, IT) {
      let zT;
      const kT = new Promise((TT => {
        zT = setTimeout((() => {
          TT(null)
        }), iT)
      }));
      try {
        return xT(await Promise.race([ST(), kT, BT.promise]), TT, oT, IT)
      } catch {
        return xT(null, TT, oT, IT)
      } finally {
        clearTimeout(zT)
      }
    }
  },
  39745: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      BUILT_IN_ANIMATIONS_SITE: () => tT,
      CORE_ERRORS_SITE: () => aT,
      EVENT_OVERFLOW_SITE: () => sT,
      FIRST_VIEW_SITE: () => pT,
      JOIN_SITE: () => QT,
      LEAVE_SITE: () => OT,
      MODEL_FEED_SITE: () => HT,
      MODEL_POOL_SITE: () => nT,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => yT,
      NON_FATAL_REPORTS_PER_SESSION: () => So,
      PREVIEW_ANIMATIONS_SITE: () => lT,
      RENDER_RELOAD_SITE: () => ZT,
      TEXTURE_NAMES_SITE: () => qT,
      TEXTURE_PACK_FEED_SITE: () => GT,
      TurnstilePageError: () => Ho,
      WASM_LOAD_SITE: () => YT,
      crashError: () => Ko,
      crashReportsSettled: () => wo,
      flushCrashReports: () => go,
      joinFailureCode: () => no,
      lokiTransport: () => dT,
      modelFailureCode: () => bo,
      readTrap: () => Ro,
      renderLossDetail: () => xI,
      renderReloadMessage: () => DI,
      reportCoreErrors: () => eo,
      reportCountedLoadFallback: () => Qo,
      reportCrash: () => Mo,
      reportDataLoadFailure: () => AI,
      reportDisconnect: () => Go,
      reportDracoDecoderFailure: () => Vo,
      reportEventOverflow: () => II,
      reportFirstViewNoTerrain: () => XI,
      reportGpuFallback: () => ao,
      reportGpuWasmPopulation: () => Yo,
      reportLightFault: () => zI,
      reportMemoryShed: () => WI,
      reportModelFailure: () => yo,
      reportModelPoolFailure: () => No,
      reportModelsModuleRetry: () => Po,
      reportPageJoinFailure: () => Zo,
      reportReconnectGaveUp: () => po,
      reportRenderReload: () => KI,
      reportReplayFault: () => FI,
      reportStaleBuildReload: () => hI,
      reportStoppedCore: () => fo,
      reportTerrainTextureFailure: () => MI,
      reportTexturePackFeedLoadFailure: () => oI,
      reportUnstreamedCoreLoad: () => Oo,
      reportUnsupportedFallback: () => Jo,
      reportUnusedSeat: () => to,
      reportWorkerLost: () => iI,
      reportWorkerStartTimeout: () => BI,
      reportWorldgenGaveUp: () => kI,
      reportWorldgenLoadFailure: () => TI,
      resetCrashReports: () => mo,
      setCrashBackend: () => ko,
      setCrashScreen: () => io,
      setCrashTransport: () => oo,
      showCrash: () => Eo,
      showJoinFailure: () => qo,
      showUnsupported: () => jo
    });
    var iT = IT(1071),
      zT = IT(270),
      kT = IT(2795),
      WT = IT(39747),
      XT = IT(4276),
      BT = IT(39749),
      FT = IT(3022),
      ST = IT(37747),
      DT = IT(139),
      LT = IT(681),
      xT = IT(134),
      cT = IT(3028),
      KT = IT(38038),
      MT = IT(1693),
      rT = IT(39717),
      AT = IT(39371),
      gT = IT(39662),
      hT = IT(39667),
      wT = IT(39753),
      mT = IT(3276),
      eT = IT(3280),
      RT = IT(39760),
      uT = IT(39775),
      vT = IT(39779),
      ET = IT(39786),
      fT = IT(2801),
      CT = IT(39710),
      jT = IT(39577),
      JT = IT(39579);
    const UT = "[bloxd-wasm-client]",
      aT = "coreErrors",
      YT = "wasmLoad",
      QT = "join",
      OT = "leave",
      HT = "modelFeed",
      nT = "modelWorkerPool",
      qT = "textureNames",
      ZT = "renderReload",
      lT = "previewAnimations",
      sT = "eventOverflow",
      tT = "builtInAnimations",
      GT = "texturePackFeed",
      pT = "firstView",
      bT = 300,
      yT = 8;
    let NT = 0;
    const PT = new Set,
      dT = (TT, oT) => {
        const IT = Wo[TT.kind];
        if (null === IT) return void VT(TT, oT, zo, null);
        const iT = (0, WT.d)(IT, TT.message, TT.code, TT.fatal);
        if (null !== iT) return void VT(TT, oT, zo, iT);
        const zT = zo;
        Ao("Loki", (async () => {
          VT(TT, oT, zT, await (0, WT.e)(IT, TT.message, TT.code))
        }))
      };

    function VT(TT, oT, IT, zT) {
      const {
        kind: WT,
        code: XT,
        site: BT,
        fatal: FT,
        details: ST
      } = TT;
      if (!FT)
        if (null === zT || (0, kT.c)(zT.errorKind) || PT.has(zT.dedupe)) {
          if (NT >= yT) return;
          NT++
        } else PT.add(zT.dedupe);
      const DT = {
        ...ST,
        kind: WT,
        code: XT,
        site: BT,
        fatal: String(FT),
        backend: IT
      };
      null !== zT && (DT.errorKind = zT.errorKind, DT.fingerprint = zT.fingerprint), oT instanceof Error && "string" === typeof oT.stack && (DT.causeStack = oT.stack.slice(0, 2e3)), (0, iT.JK)(Ko(TT, oT), DT)
    }
    let To = dT;

    function oo(TT) {
      const oT = To;
      return To = TT, oT
    }
    let Io = () => {};

    function io(TT) {
      const oT = Io;
      return Io = TT, oT
    }
    let zo = "unpicked";

    function ko(TT) {
      zo = TT
    }
    const Wo = {
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
      Xo = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        gpuFallback: "wasm_load"
      },
      Bo = new Set(["unstreamedLoad"]);
    let Fo = !1;
    const So = 20,
      Do = new Map;
    let Lo = 0,
      xo = 0;
    const co = new Set;

    function Ko(TT, oT) {
      const IT = Object.assign(new Error(`${TT.code}: ${TT.message}`), {
        name: "WasmClientCrash",
        cause: null !== oT && void 0 !== oT ? oT : void 0
      });
      return oT instanceof Error && oT.stack && (IT.stack = oT.stack), IT
    }

    function Mo(TT) {
      var oT, iT;
      const {
        kind: zT,
        code: kT,
        site: WT,
        fatal: XT,
        message: BT,
        error: FT
      } = TT, ST = !1 !== TT.toTransport && !Bo.has(zT), DT = !XT && ST, LT = {
        kind: zT,
        code: kT,
        site: WT,
        fatal: XT,
        message: BT,
        details: null !== (oT = TT.details) && void 0 !== oT ? oT : {}
      }, xT = `${kT}@${WT}${void 0===TT.instance?"":`#${TT.instance}`}${XT?"!":""}`, cT = (null !== (iT = Do.get(xT)) && void 0 !== iT ? iT : 0) + 1;
      if (Do.set(xT, cT), cT > 1 ? 0 === (cT & cT - 1) && ro((() => {
          console.warn(`${UT} ${kT} at ${WT} reported ${cT} times`)
        })) : DT && Lo >= So ? ro((() => {
          console.warn(`${UT} ${zT} ${kT} at ${WT}: ${BT} (not sent: the session's ${So} went)`, LT.details, null !== FT && void 0 !== FT ? FT : "")
        })) : (DT && Lo++, function(TT, oT, iT) {
          var zT, kT;
          const {
            kind: WT,
            code: XT,
            site: BT,
            fatal: FT,
            message: ST,
            details: DT
          } = TT;
          ro((() => {
            (FT ? console.error : console.warn)(`${UT} ${WT} ${XT} at ${BT}: ${ST}`, DT, null !== oT && void 0 !== oT ? oT : "")
          }));
          const LT = Xo[WT],
            xT = null !== (zT = null !== (kT = Wo[WT]) && void 0 !== kT ? kT : LT) && void 0 !== zT ? zT : null;
          null !== xT && Ao("counts", (async () => {
            const {
              peekVisitSessionId: TT
            } = await Promise.resolve().then((() => IT(648)));
            if (null !== TT()) {
              const {
                reportCappedWasmFailure: TT,
                reportWasmFailure: oT
              } = await IT.e(202).then((() => IT(35316)));
              (void 0 === LT ? oT : TT)(xT, ST, XT), Fo = !0
            }
          }));
          iT && ro((() => {
            To(TT, oT)
          }))
        }(LT, FT, ST)), XT) {
        var KT;
        const oT = null !== (KT = TT.screen) && void 0 !== KT ? KT : {
          text: (0, ET.f)(LT, !0),
          reload: !0
        };
        ro((() => {
          Io(oT)
        }))
      }
      return LT
    }

    function ro(TT) {
      try {
        TT()
      } catch (oT) {
        try {
          console.warn(`${UT} could not send a report`, oT)
        } catch {}
      }
    }

    function Ao(TT, oT) {
      try {
        const IT = oT().catch((oT => {
          console.warn(`${UT} could not send the report to ${TT}`, oT)
        })).finally((() => {
          co.delete(IT)
        }));
        co.add(IT)
      } catch (IT) {
        console.warn(`${UT} could not send the report to ${TT}`, IT)
      }
    }
    async function go(TT) {
      let oT;
      (0, WT.i)();
      const IT = new Promise((IT => {
        oT = setTimeout(IT, TT)
      }));
      await Promise.race([ho(), IT]), clearTimeout(oT)
    }
    async function ho() {
      if (await Promise.allSettled([...co]), Fo) try {
        const {
          flushClientAnalyticsEvents: TT
        } = await Promise.resolve().then((() => IT(1444)));
        await TT()
      } catch (TT) {
        console.warn(`${UT} could not send the counts`, TT)
      }
    }
    async function wo() {
      for (; co.size > 0;) await Promise.allSettled([...co])
    }

    function mo() {
      Do.clear(), Lo = 0, Fo = !1, NT = 0, PT.clear(), xo = 0, (0, BT.n)()
    }

    function eo(TT, oT, IT, iT) {
      xo += oT;
      for (const {
          code: WT,
          detail: FT
        }
        of TT) {
        var zT, kT;
        const TT = (0, XT.he)(WT),
          oT = (0, BT.c)(WT, FT),
          ST = null === iT || void 0 === iT ? void 0 : iT(WT, FT),
          DT = void 0 !== (null === oT || void 0 === oT ? void 0 : oT.gpuDetails),
          LT = DT ? null === (zT = (0, xT.m)()) || void 0 === zT ? void 0 : zT.renderer : void 0,
          cT = DT ? ` ${(0,BT.e)()}` : "",
          KT = Array.from([LT && `gpu ${(0,BT.p)(LT)}`, ST].filter(Boolean).join("; ")).slice(0, bT).join(""),
          MT = `core error ${TT}${null!==(kT=null===oT||void 0===oT?void 0:oT.words)&&void 0!==kT?kT:""}${cT}${KT?`: ${KT}`:""}`,
          rT = {
            errorCode: String(WT),
            detail: String(FT),
            droppedBefore: String(xo),
            wasmBuild: IT.wasm,
            clientVersion: IT.client,
            ...null === oT || void 0 === oT ? void 0 : oT.gpuDetails
          };
        null !== oT && (0, BT.l)(oT) ? ro((() => {
          console.warn(`${UT} coreError CORE-${TT}: ${MT} (not sent: the session's render warnings of its kind went)`, rT)
        })) : Mo({
          kind: WT === XT.I.JobsHeapGaveUp ? "meshHeap" : "coreError",
          code: `CORE-${TT}`,
          site: aT,
          fatal: !1,
          message: MT,
          details: rT,
          instance: null === oT || void 0 === oT ? void 0 : oT.instance
        })
      }
    }

    function Ro(TT) {
      return (0, CT.i)(TT instanceof jT.d ? TT.trap : TT, mT.C, mT.Y)
    }
    const uo = "declined=js";

    function vo(TT) {
      return TT ? {
        labels: [uo],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function Eo(TT, oT, IT) {
      return Co(TT, oT, IT, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function fo(TT, oT, IT) {
      return Co(TT, oT, IT, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function Co(TT, oT, IT, iT, zT) {
      let {
        memoryDetails: kT = {},
        declined: WT = !1
      } = iT;
      const {
        code: XT,
        details: BT,
        message: FT
      } = (0, rT.G)(TT, oT), ST = [];
      null !== IT && (BT.trapKind = IT.kind, null !== IT.panic && (BT.panic = (0, CT.g)(IT.panic)), IT.refusedBytes > 0 && (BT.refusedAllocation = String(IT.refusedBytes)), ST.push((0, CT.k)(IT.kind, IT.refusedBytes)));
      const DT = vo(WT);
      return Mo({
        kind: "crash",
        code: XT,
        site: TT.site,
        fatal: zT,
        message: [...ST, ...DT.labels, FT].join("; "),
        details: {
          ...BT,
          ...DT.details,
          ...kT
        },
        error: TT.error
      })
    }

    function jo(TT, oT, IT) {
      return Mo({
        kind: "unsupported",
        code: oT,
        site: YT,
        fatal: !0,
        message: IT,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: TT,
          status: oT
        },
        screen: {
          text: (0, ET.l)(TT),
          reload: "download" === TT
        }
      })
    }

    function Jo(TT, oT, IT) {
      return Mo({
        kind: "unsupportedFallback",
        code: "blockedAfterLoss" === oT ? "blocked_after_loss" : "unsupported_js_fallback",
        site: YT,
        fatal: !1,
        message: IT,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: TT,
          status: "unsupported",
          decline: oT,
          fallback: "js"
        }
      })
    }
    const Uo = "misdrawn_gpu_js_fallback";

    function ao(TT, oT) {
      return Mo({
        kind: "gpuFallback",
        code: Uo,
        site: YT,
        fatal: !1,
        message: `the renderer plays ${TT} on ${oT} worse than the JS client`,
        details: {
          gpuFamily: TT,
          backend: oT,
          fallback: "js"
        }
      })
    }

    function Yo(TT) {
      Ao("counts", (async () => {
        await (0, LT.d)(TT), Fo = !0
      }))
    }

    function Qo(TT, oT, IT, iT) {
      const zT = vo(iT);
      return Mo({
        kind: "unsupported",
        code: oT,
        site: YT,
        fatal: !1,
        message: [...zT.labels, IT].join("; "),
        details: {
          cause: TT,
          status: oT,
          fallback: "js",
          ...zT.details
        }
      })
    }

    function Oo() {
      const {
        code: TT,
        message: oT
      } = fT.e;
      return Mo({
        kind: "unstreamedLoad",
        code: TT,
        site: YT,
        fatal: !1,
        message: oT
      })
    }
    class Ho extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function no(TT) {
      return TT instanceof gT.r ? 0 === TT.code ? "JOIN-matchmake" : `JOIN-${TT.code}` : TT instanceof gT.e ? 0 === TT.code ? `JOIN-${TT.stage}` : `JOIN-${TT.stage}-${TT.code}` : TT instanceof AT.b ? "JOIN-gameCode" : TT instanceof Ho ? "JOIN-turnstilePage" : TT instanceof gT.B ? "JOIN-trafficCheck" : TT instanceof KT.f ? "JOIN-timeout" : "JOIN-network"
    }

    function qo(TT, oT) {
      const IT = (0, JT.h)(TT),
        iT = {
          wasmBuild: oT.wasm,
          clientVersion: oT.client
        },
        zT = TT instanceof Ho ? {
          text: (0, ET.j)(),
          reload: !1
        } : void 0,
        kT = (0, hT.g)(TT),
        WT = "expected" !== kT;
      return Mo({
        kind: "join",
        code: no(TT),
        site: QT,
        fatal: !0,
        message: IT,
        details: iT,
        error: TT,
        screen: zT,
        toTransport: WT,
        instance: kT
      })
    }

    function Zo(TT, oT, IT) {
      var iT;
      const zT = (0, hT.g)(TT),
        kT = {
          cause: (TT instanceof gT.e || TT instanceof gT.r) && null !== (iT = TT.serverText) && void 0 !== iT ? iT : "",
          sinceJoinStart: (0, cT.b)(IT.sinceJoinStartMs),
          game: IT.game,
          ...(0, cT.k)(),
          wasmBuild: oT.wasm,
          clientVersion: oT.client
        };
      return Mo({
        kind: "pageJoin",
        code: no(TT),
        site: QT,
        fatal: !1,
        message: (0, JT.h)(TT),
        details: kT,
        error: TT,
        toTransport: "unrecognised" === zT,
        instance: zT
      })
    }
    const so = {
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

    function to(TT, oT) {
      let {
        unused: IT,
        answered: iT,
        heldMs: zT
      } = TT;
      const {
        code: kT,
        message: WT
      } = so[IT], XT = {
        unused: IT,
        answered: String(iT),
        heldMs: String(zT),
        wasmBuild: oT.wasm,
        clientVersion: oT.client
      };
      return Mo({
        kind: "seat",
        code: kT,
        site: QT,
        fatal: !1,
        message: WT,
        details: XT
      })
    }

    function Go(TT, oT, IT) {
      var iT;
      let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (iT = TT.name) && void 0 !== iT ? iT : String(TT.code);
      const kT = {
          closeCode: String(TT.code),
          recognised: String(null !== TT.name),
          closeReason: IT.closeReason,
          sinceJoined: (0, cT.b)(IT.sinceJoinedMs),
          game: IT.game,
          ...(0, cT.k)(),
          wasmBuild: oT.wasm,
          clientVersion: oT.client
        },
        WT = null === TT.name && !(0, cT.e)(TT.code);
      return Mo({
        kind: "disconnect",
        code: zT,
        site: OT,
        fatal: !1,
        message: "Left room",
        details: kT,
        toTransport: WT
      })
    }

    function po(TT, oT) {
      const IT = {
        ...(0, FT.j)(TT),
        wasmBuild: oT.wasm,
        clientVersion: oT.client
      };
      return Mo({
        kind: "disconnect",
        code: `reconnect-${TT.reason}`,
        site: QT,
        fatal: !1,
        message: "Reconnect failed",
        details: IT
      })
    }

    function bo(TT) {
      return TT.error instanceof eT.g ? `MODEL-${TT.error.status}` : TT.error instanceof RT.i ? "MODEL-ring" : "MODEL-network"
    }

    function yo(TT, oT) {
      const IT = bo(TT),
        iT = `model file ${TT.file} ${TT.startup?"(startup) ":""}could not load`,
        zT = {
          file: String(TT.file),
          url: TT.url,
          wasmBuild: oT.wasm,
          clientVersion: oT.client
        };
      return Mo({
        kind: TT.startup ? "model" : "modelLate",
        code: IT,
        site: HT,
        fatal: TT.startup,
        message: iT,
        details: zT,
        error: TT.error
      })
    }

    function No(TT, oT) {
      const IT = {
        wasmBuild: oT.wasm,
        clientVersion: oT.client
      };
      return Mo({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: nT,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: IT,
        error: TT
      })
    }

    function Po(TT, oT, IT) {
      const iT = {
        delayMs: String(oT),
        wasmBuild: IT.wasm,
        clientVersion: IT.client
      };
      TT instanceof eT.g && (iT.status = String(TT.status));
      return Mo({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: nT,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: iT,
        error: TT
      })
    }

    function Vo(TT, oT) {
      const IT = {
        wasmBuild: oT.wasm,
        clientVersion: oT.client
      };
      return Mo({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: nT,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: IT,
        error: TT
      })
    }

    function TI(TT, oT) {
      const IT = {
        wasmBuild: oT.wasm,
        clientVersion: oT.client
      };
      return Mo({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: rT.A,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: IT,
        error: TT
      })
    }

    function oI(TT, oT) {
      const IT = {
        wasmBuild: oT.wasm,
        clientVersion: oT.client
      };
      return Mo({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: GT,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: IT,
        error: TT
      })
    }

    function II(TT, oT) {
      const {
        frames: IT,
        acks: iT,
        mask: zT,
        outcome: kT
      } = TT, WT = {
        frames: String(IT),
        acks: String(iT),
        mask: String(zT),
        outcome: null !== kT && void 0 !== kT ? kT : "resynced",
        wasmBuild: oT.wasm,
        clientVersion: oT.client
      };
      return Mo({
        kind: "recovered",
        code: "rejoined" === kT ? "CORE-eventOverflowRejoin" : "failed" === kT ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: sT,
        fatal: !1,
        message: `the event buffer refused records in ${IT} frames`,
        details: WT
      })
    }

    function iI(TT, oT, IT) {
      return Mo({
        kind: "recovered",
        code: "CORE-workerLost",
        site: TT,
        fatal: !1,
        message: `a ${TT} worker was lost`,
        details: {
          reason: oT,
          wasmBuild: IT.wasm,
          clientVersion: IT.client
        }
      })
    }

    function zI(TT, oT, IT) {
      const iT = {
        wasmBuild: IT.wasm,
        clientVersion: IT.client
      };
      return Mo({
        kind: "recovered",
        code: TT,
        site: rT.m,
        fatal: !1,
        message: oT,
        details: iT
      })
    }

    function kI(TT, oT) {
      const IT = {
        lastReason: TT,
        wasmBuild: oT.wasm,
        clientVersion: oT.client
      };
      return Mo({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: rT.A,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: IT
      })
    }

    function WI(TT, oT, IT) {
      return Mo({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: rT.l,
        fatal: !1,
        message: (0, wT.g)(TT) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: TT,
          ...oT,
          wasmBuild: IT.wasm,
          clientVersion: IT.client
        }
      })
    }

    function XI(TT, oT) {
      const IT = (0, BT.h)(),
        iT = {
          game: TT,
          renderWarned: String(IT),
          browser: (0, BT.e)(),
          wasmBuild: oT.wasm,
          clientVersion: oT.client
        },
        zT = `first view drew no whole terrain in ${uT.f/1e3} s${IT?", render warned":""}`;
      return Mo({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: pT,
        fatal: !1,
        message: zT,
        details: iT
      })
    }

    function BI(TT, oT, IT) {
      return Mo({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: TT,
        fatal: !1,
        message: `a ${TT} worker did not start`,
        details: {
          waitedMs: String(Math.round(oT)),
          wasmBuild: IT.wasm,
          clientVersion: IT.client
        }
      })
    }

    function FI(TT, oT, IT) {
      return Mo({
        kind: "recovered",
        code: "CORE-replayFault",
        site: TT,
        fatal: !1,
        message: `the replay's ${TT} failed`,
        details: {
          wasmBuild: IT.wasm,
          clientVersion: IT.client
        },
        error: oT
      })
    }
    const SI = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function DI(TT, oT, IT) {
      const iT = "lost" === oT && void 0 !== IT ? ` (${IT})` : "";
      return `the ${TT} ${SI[oT]}${iT}`
    }
    const LI = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };

    function xI(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now();
      const zT = null === IT.boundAtMs ? "unbound" : `up${(0,ST.i)(iT-IT.boundAtMs)}`,
        kT = null === IT.adapter ? "no adapter" : (0, ST.p)(IT.adapter),
        WT = `${(0,MT.g)()?"hidden":"visible"} ${zT} ${kT}${!0===IT.indirectHangs?" ih":""}`;
      if ("pipeline_failed" === TT) return `${TT} ${WT}`;
      const XT = null === oT || void 0 === oT ? void 0 : oT.message;
      return `${oT instanceof MT.e?"timeout":(0,ST.s)("frames_refused"===TT,"string"===typeof XT?XT:"")} ${WT}`
    }
    const cI = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function KI(TT, oT, iT) {
      var kT, WT, XT, FT, LT;
      let {
        cause: xT = "lost",
        error: cT,
        context: KT = LI,
        session: MT = cI
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const rT = xI(xT, cT, KT),
        AT = {
          losses: String(oT),
          cause: xT,
          detail: rT,
          vendor: null !== (kT = null === (WT = KT.adapter) || void 0 === WT ? void 0 : WT.vendor) && void 0 !== kT ? kT : "",
          architecture: null !== (XT = null === (FT = KT.adapter) || void 0 === FT ? void 0 : FT.architecture) && void 0 !== XT ? XT : "",
          indirectHangs: String(KT.indirectHangs),
          samples: String(MT.samples),
          sunShadows: String(MT.sunShadows),
          renderDistance: String(MT.renderDistance),
          gpuFamily: null !== (LT = (0, zT.c)()) && void 0 !== LT ? LT : "",
          browser: (0, BT.e)(),
          siteUsed: DT.p,
          wasmBuild: iT.wasm,
          clientVersion: iT.client
        },
        gT = DI(TT, xT),
        hT = Mo({
          kind: "recovered",
          code: "CORE-renderLost",
          site: ZT,
          fatal: !1,
          message: gT,
          details: AT,
          error: cT
        });
      return Ao("ga", (async () => {
        const {
          logError: oT
        } = await Promise.resolve().then((() => IT(2556))), iT = `${ST.e["webgpu"===TT?"WebGPU":"WebGL2"]}\n Error: ${rT}`;
        oT("warning", iT), oT("error", iT)
      })), hT
    }

    function MI(TT, oT) {
      var IT, iT;
      const zT = null === TT.name ? "TEXTURE-sources" : null === TT.url ? "TEXTURE-nourl" : TT.error instanceof vT.c ? `TEXTURE-${TT.error.status}` : "TEXTURE-network",
        kT = null === TT.name ? "terrain textures could not load" : `terrain texture ${TT.name} could not load`,
        WT = {
          texture: null !== (IT = TT.name) && void 0 !== IT ? IT : "",
          url: null !== (iT = TT.url) && void 0 !== iT ? iT : "",
          wasmBuild: oT.wasm,
          clientVersion: oT.client
        };
      return Mo({
        kind: "terrainTexture",
        code: zT,
        site: rT.x,
        fatal: !1,
        message: kT,
        details: WT,
        error: TT.error
      })
    }
    const rI = {
      previewAnimations: {
        site: lT,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: tT,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function AI(TT, oT, IT, iT) {
      const {
        site: zT,
        prefix: kT,
        name: WT
      } = rI[TT], {
        stage: XT,
        error: BT
      } = IT;
      return Mo({
        kind: TT,
        code: "decode" === XT ? null === BT ? `${kT}-decode` : `${kT}-trap` : BT instanceof eT.g ? `${kT}-${BT.status}` : `${kT}-network`,
        site: zT,
        fatal: !1,
        message: "decode" === XT ? `${WT} did not decode` : `${WT} could not load`,
        details: {
          url: oT,
          wasmBuild: iT.wasm,
          clientVersion: iT.client
        },
        error: BT
      })
    }
    const gI = "staleBuild";

    function hI(TT, oT, IT) {
      const iT = {
          failedSite: TT.site,
          url: TT.url,
          from: TT.from,
          sameBuild: String(TT.from === oT),
          reloadMs: String(Math.max(0, Date.now() - TT.at)),
          wasmBuild: IT.wasm,
          clientVersion: IT.client
        },
        zT = `reloaded into a newer build after ${TT.site} failed to load: ${TT.error}`;
      return Mo({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: gI,
        fatal: !1,
        message: zT,
        details: iT
      })
    }
  },
  39775: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => zT,
      f: () => iT
    });
    const iT = 3e4;
    class zT {
      constructor(TT) {
        this.Bc = TT, this.waitedMs = 0, this.lastMs = null
      }
      frame(TT, oT) {
        if (oT) return !0;
        const IT = null === this.lastMs ? 0 : TT - this.lastMs;
        return this.lastMs = TT, IT <= 900 && (this.waitedMs += IT), !(this.waitedMs < iT) && (this.Bc(), !0)
      }
    }
  },
  4274: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => WT,
      h: () => kT,
      j: () => zT
    });
    var iT = IT(4276);

    function zT(TT) {
      return "none" !== TT
    }

    function kT(TT, oT) {
      if (!TT) return "none";
      switch (oT) {
        case iT.Z.Drawn:
          return "drawn";
        case iT.Z.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function WT(TT) {
      return "drawn" === TT
    }
  },
  39371: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT,
      e: () => rT,
      i: () => KT,
      k: () => MT,
      l: () => LT,
      n: () => xT,
      p: () => ST,
      s: () => DT,
      w: () => cT
    });
    class iT extends Error {
      constructor(TT) {
        super(`the join's code did not load: ${TT instanceof Error?TT.message:String(TT)}`, {
          cause: TT
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === TT || void 0 === TT ? void 0 : TT.request
      }
    }
    let zT = null,
      kT = null,
      WT = null;
    const XT = [];
    let BT = null;

    function FT(TT, oT) {
      try {
        TT(oT)
      } catch (IT) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", IT)
      }
    }

    function ST() {
      return BT
    }

    function DT(TT) {
      XT.push(TT), null !== BT && FT(TT, BT)
    }

    function LT(TT) {
      return zT ??= Promise.all([IT.e(69), IT.e(95), IT.e(209), IT.e(74), IT.e(186), IT.e(230), IT.e(210), IT.e(258), IT.e(92), IT.e(261), IT.e(237), IT.e(185), IT.e(195), IT.e(137), IT.e(85), IT.e(115), IT.e(235), IT.e(53)]).then((() => IT(41382))).then((oT => {
        oT.loadAudio(TT), BT = oT;
        for (const TT of XT) FT(TT, oT);
        return oT
      })).catch((TT => {
        throw zT = null, TT
      })), zT
    }
    async function xT(TT, oT) {
      try {
        const IT = await LT(TT);
        await IT.loadClientGame(oT)
      } catch (IT) {
        throw new iT(IT)
      }
    }

    function cT(TT, oT) {
      kT = {
        running: TT,
        shell: oT
      }
    }

    function KT() {
      return WT
    }
    async function MT(TT) {
      const oT = kT;
      if ((null === oT || void 0 === oT ? void 0 : oT.running) !== TT) throw new Error("the core's session has ended");
      const IT = await LT(oT.shell.audio).catch((TT => {
        throw new iT(TT)
      }));
      if (null !== WT) return WT;
      if (kT !== oT || TT.isStopped) throw new Error("the core stopped while the game code loaded");
      if (WT = IT.startGameHost(TT, oT.shell), null === WT) throw new Error("the core's shared tables didn't read, so the game can't start");
      return WT
    }

    function rT() {
      null !== WT && (null !== BT ? BT.endGameHost(WT) : WT.closeGame()), WT = null, kT = null
    }
  },
  39662: (TT, oT, IT) => {
    IT.d(oT, {
      B: () => DT,
      E: () => XT,
      e: () => FT,
      h: () => kT,
      l: () => WT,
      o: () => zT,
      r: () => xT,
      t: () => ST,
      u: () => BT,
      x: () => LT
    });
    var iT = IT(1695);
    const zT = new Uint8Array([12]),
      kT = 2e3,
      WT = 257;

    function XT(TT) {
      const oT = new Uint8Array(4);
      return new DataView(oT.buffer).setUint32(0, TT, !0), oT
    }
    class BT extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class FT extends Error {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(TT), this.stage = oT, this.code = IT, this.serverText = iT, this.name = "JoinError"
      }
    }
    class ST extends Error {
      constructor(TT) {
        super(TT), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class DT extends Error {
      constructor(TT) {
        super((0, iT.i)(TT), {
          cause: TT
        }), this.name = "TrafficCheckError"
      }
    }
    class LT extends Error {
      constructor(TT, oT, IT) {
        super(TT, {
          cause: IT
        }), this.networkLost = oT, this.name = "SeatRequestError"
      }
    }
    class xT extends Error {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(TT), this.code = oT, this.serverText = IT, this.name = "MatchmakeError"
      }
    }
  },
  39667: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => LT,
      g: () => DT
    });
    var iT = IT(2327),
      zT = IT(3028),
      kT = IT(38038),
      WT = IT(39656),
      XT = IT(39662),
      BT = IT(39674);
    const FT = "seat reservation expired.",
      ST = "early_leave";

    function DT(TT) {
      if (TT instanceof kT.f) return "expected";
      if (TT instanceof XT.x) return TT.networkLost ? "expected" : "unrecognised";
      if (TT instanceof XT.e) {
        if ("closed" === TT.stage && (0 === TT.code || (0, zT.e)(TT.code))) return "expected";
        if ("roomError" === TT.stage && (TT.serverText === FT || TT.serverText === ST)) return "expected"
      }
      return TT instanceof XT.e || TT instanceof XT.r ? null === (0, WT.k)(TT.code).name ? "unrecognised" : "known" : (0, iT.g)(TT) ? "expected" : TT instanceof XT.B || TT instanceof BT.e ? "known" : "unrecognised"
    }

    function LT(TT) {
      return TT instanceof kT.f ? "timedOut" : "expected" !== DT(TT) || (0, iT.g)(TT) || TT instanceof XT.e && 1001 === TT.code ? void 0 : "failed"
    }
  },
  39753: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => uT,
      g: () => DT,
      j: () => wT,
      n: () => rT,
      o: () => eT
    });
    var iT = IT(35488),
      zT = IT(35479);
    const kT = 64 * iT.e,
      WT = 40 * iT.f,
      XT = 36 * iT.f,
      BT = 20 * iT.f,
      FT = 2 * iT.f,
      ST = 5 * iT.f;

    function DT(TT) {
      return "footprint" !== TT
    }
    const LT = 2 * iT.f,
      xT = 4 * iT.f,
      cT = 35 * iT.f + LT + xT,
      KT = 6.5 * iT.f,
      MT = 132.5 * iT.e;

    function rT(TT) {
      const oT = KT + (0, zT.h)(TT) + TT * MT;
      return Math.ceil((2 * cT + oT) / kT) * kT
    }
    const AT = rT(zT.c),
      gT = (iT.f, iT.f, iT.f, {
        targetBytes: WT,
        leastBytes: BT
      }),
      hT = {
        targetBytes: XT,
        leastBytes: BT
      };

    function wT(TT) {
      return TT >= zT.c ? gT : hT
    }
    const mT = 2 * kT;

    function eT(TT, oT, IT) {
      return TT + oT + mT > (null !== IT && void 0 !== IT ? IT : AT)
    }
    const RT = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? TT => {
        requestIdleCallback(TT)
      } : null
    };
    class uT {
      constructor(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : RT;
        this.memory = TT, this.readPeakStoredChunks = oT, this.onError = IT, this.clock = iT, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(TT, oT, IT) {
        this.shedding = {
          shed: TT,
          Bc: oT,
          readDistanceInUse: IT
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(TT) {
        this.footprint = TT
      }
      setCeiling(TT) {
        this.ceilingBytes = TT, this.call((() => {
          this.memory.setCeiling(TT)
        }), void 0)
      }
      ceilingMayRefuse(TT) {
        return eT(this.memory.memoryBytes(), TT, this.ceilingBytes)
      }
      reserveAtJoin(TT) {
        let {
          targetBytes: oT,
          leastBytes: IT
        } = TT;
        const iT = this.memory.memoryBytes(),
          zT = iT + IT,
          kT = Math.max(oT + (this.ballastOn() ? ST : 0), zT),
          WT = this.call((() => this.memory.reserveUpFront(kT) ? "target" : kT > zT && this.memory.reserveUpFront(zT) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== WT) {
          const TT = "least" === WT ? `took ${zT} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${kT} bytes was refused at ${iT} bytes; ${TT}`)
        }
        return this.joinReserveTaken = WT, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== WT && this.shedFor("joinReserve"), "none" !== WT
      }
      afterFrame() {
        if (this.stopped) return;
        const TT = this.clock.now(),
          oT = null !== this.stepsHeldUntil && TT >= this.stepsHeldUntil;
        if (oT && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && TT >= this.ballastCheckAt && (this.takeBallast(TT), this.stopped)) return;
        const IT = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          iT = oT && "now" === IT ? "none" : IT,
          {
            requestIdle: zT
          } = this.clock;
        "now" === iT || null !== this.pendingSince && TT - this.pendingSince >= 500 ? this.step() : "idle" === iT && null === this.pendingSince && (null === zT ? this.step() : (this.pendingSince = TT, zT((() => {
          null !== this.pendingSince && this.step()
        })))), TT - this.statsAt >= 1e3 && (this.statsAt = TT, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var TT, oT;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (oT = this.shedding.readDistanceInUse()) && void 0 !== oT ? oT : this.distanceInUse);
          null === (TT = this.footprint) || void 0 === TT || TT.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(TT, oT) {
        this.noteWorker(`Mesh${TT}`, oT)
      }
      meshWorkerGone(TT) {
        this.workerGone(`Mesh${TT}`)
      }
      noteWorldgen(TT) {
        this.noteWorker("Worldgen", TT)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(TT, oT) {
        const IT = this.workers.get(TT);
        null !== IT && void 0 !== IT && IT.gone && (this.replacedRefusals.reserves += IT.stats.reservesRefused, this.replacedRefusals.allocations += IT.stats.allocationsRefused), this.workers.set(TT, {
          stats: oT,
          gone: !1
        })
      }
      workerGone(TT) {
        const oT = this.workers.get(TT);
        oT && (oT.gone = !0)
      }
      details() {
        var TT, oT;
        const IT = {
          wasmMemoryNow: `${(0,iT.h)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (IT.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (IT.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const zT = this.main;
        if (zT) {
          IT.wasmMemoryMain = vT(zT);
          const TT = Math.max(0, zT.peakLiveBytes - this.ballastPeakBytes),
            oT = 0 === this.peakStoredChunks ? "-" : (TT / this.peakStoredChunks / iT.e).toFixed(1);
          IT.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${oT} KiB`
        }
        for (const [iT, {
            stats: WT,
            gone: XT
          }] of this.workers) IT[`wasmMemory${iT}`] = vT(WT) + (XT ? " (gone)" : "");
        const kT = null !== (TT = null === (oT = this.footprint) || void 0 === oT ? void 0 : oT.describe()) && void 0 !== TT ? TT : null;
        return null !== kT && (IT.wasmMemoryFootprint = kT), IT
      }
      pageKillSnapshot() {
        var TT, oT, IT, zT, kT;
        let WT = (null !== (TT = null === (oT = this.main) || void 0 === oT ? void 0 : oT.reservesRefused) && void 0 !== TT ? TT : 0) + this.replacedRefusals.reserves,
          XT = (null !== (IT = null === (zT = this.main) || void 0 === zT ? void 0 : zT.allocationsRefused) && void 0 !== IT ? IT : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: iT
          }
          of this.workers.values()) WT += iT.reservesRefused, XT += iT.allocationsRefused;
        return {
          wasmMainMiB: Number((0, iT.h)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, iT.h)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: WT,
          refusedAllocations: XT,
          sheds: this.sheds,
          ...null === (kT = this.footprint) || void 0 === kT ? void 0 : kT.snapshot()
        }
      }
      workersMemoryBytes() {
        let TT = 0;
        for (const {
            stats: oT,
            gone: IT
          }
          of this.workers.values()) TT += IT ? 0 : oT.memoryBytes;
        return TT
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(FT)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(TT) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = TT + 1e3;
        const oT = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, oT)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(TT) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${TT}: frames grow on demand from here`)
      }
      shedFor(TT) {
        const {
          shedding: oT
        } = this;
        if (null === oT) return;
        this.pendingSince = null;
        const IT = this.call((() => oT.shed(TT)), null);
        this.stopped || (null !== IT ? (this.sheds++, this.shedCap = IT, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), oT.Bc(TT, this.sheds, this.details())) : DT(TT) && this.stopSteps("nothing is left to shed"))
      }
      call(TT, oT) {
        if (this.stopped) return oT;
        try {
          return TT()
        } catch (IT) {
          return this.stop(), this.onError(IT), oT
        }
      }
    }

    function vT(TT) {
      const oT = (TT, oT) => `${TT}/${(0,iT.h)(oT)}`;
      return `memory ${(0,iT.h)(TT.memoryBytes)} live ${(0,iT.h)(TT.liveBytes)} peak ${(0,iT.h)(TT.peakLiveBytes)} unused ${(0,iT.h)(TT.unusedBytes)} ceiling ${(0,iT.h)(TT.ceilingBytes)} MiB; grows upFront ${oT(TT.grows.upFront,TT.grownBytes.upFront)} ahead ${oT(TT.grows.ahead,TT.grownBytes.ahead)} inFrame ${oT(TT.grows.onDemandInFrame,TT.grownBytes.onDemandInFrame)} other ${oT(TT.grows.onDemand,TT.grownBytes.onDemand)}; refused reserves ${TT.reservesRefused} allocations ${TT.allocationsRefused}`
    }
  },
  39760: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => BT,
      e: () => FT,
      g: () => xT,
      i: () => DT
    });
    var iT = IT(3280),
      zT = IT(4276),
      kT = IT(39762),
      WT = IT(39768),
      XT = IT(39579);
    const BT = 395,
      FT = 2147483648,
      ST = new Uint8Array(0);
    class DT extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class LT extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class xT {
      constructor(TT, oT, IT) {
        var iT, zT, WT, XT;
        let BT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = TT, this.build = oT, this.onFailure = IT, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.qx = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (iT = BT.fetchFile) && void 0 !== iT ? iT : TT => (0, kT.j)(TT), this.onWritten = null !== (zT = BT.onWritten) && void 0 !== zT ? zT : null, this.onTaken = null !== (WT = BT.onTaken) && void 0 !== WT ? WT : null, this.onPackFileFailed = null !== (XT = BT.onPackFileFailed) && void 0 !== XT ? XT : null, this.startupLeft = new Set(TT.startup);
        for (const kT of TT.startup) this.request(kT)
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
      drawnUrl(TT) {
        return this.drawn.get(TT)
      }
      request(TT) {
        const oT = this.pending.get(TT);
        if (!0 === (null === oT || void 0 === oT ? void 0 : oT.ask)) return;
        const IT = this.hx(TT, !0);
        IT.recheck = void 0 !== oT;
        const iT = this.drawn.get(TT);
        if (void 0 !== iT) return IT.kS = !0, IT.recheck = !0, void this.fetch(TT, IT, iT);
        this.fetchWanted(TT, IT)
      }
      async refresh() {
        const TT = ++this.refreshes,
          oT = new Set;
        for (const WT of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const TT of WT) 0 === (TT & kT.h) && oT.add(TT);
        const IT = [...oT];
        let iT;
        try {
          iT = await Promise.all(IT.map((TT => this.wanted(TT))))
        } catch {
          return null
        }
        if (TT !== this.refreshes) return null;
        const zT = {
          resent: 0,
          refetched: 0,
          delivered: IT.filter((TT => this.drawn.has(TT))).length
        };
        return IT.forEach(((TT, oT) => {
          const {
            url: IT,
            inPlaceOf: kT
          } = iT[oT], WT = this.pending.get(TT);
          if (void 0 !== WT) {
            if (WT.kS || void 0 === WT.url) return void(WT.recheck = !0);
            if (WT.url === IT) return;
            zT.refetched++;
            const oT = this.hx(TT, WT.ask);
            return oT.recheck = WT.recheck, void this.fetch(TT, oT, IT, kT)
          }
          const XT = this.written.get(TT);
          void 0 === XT ? this.drawn.get(TT) !== (null !== IT && void 0 !== IT ? IT : void 0) && (zT.resent++, this.fetch(TT, this.hx(TT, !1), IT, kT)) : XT.url !== (null !== IT && void 0 !== IT ? IT : "") && (XT.attempt.recheck = !0)
        })), zT
      }
      taken(TT, oT) {
        const IT = new Set,
          iT = new Set;
        for (const zT of Array.from(oT)) 0 === (zT & FT) ? IT.add(zT) : iT.add((zT & ~FT) >>> 0);
        for (const [zT, kT] of this.written) kT.seq > TT || (this.written.delete(zT), IT.has(kT.seq) ? this.refusedFile(zT, kT) : this.takenFile(zT, kT, !kT.empty && !iT.has(kT.seq)))
      }
      takenFile(TT, oT, IT) {
        const {
          attempt: iT
        } = oT;
        if (IT) {
          var zT;
          this.drawn.set(TT, oT.url), this.undrawn.delete(TT), void 0 !== iT.inPlaceOf ? this.refusedPack.set(TT, iT.inPlaceOf) : iT.kS || this.refusedPack.delete(TT), null === (zT = this.onTaken) || void 0 === zT || zT.call(this, TT, !0);
          const IT = this.pending.get(TT);
          if (!0 === (null === IT || void 0 === IT ? void 0 : IT.kS) && IT.url !== oT.url) {
            const IT = this.hx(TT, !0);
            IT.kS = !0, IT.recheck = !0, this.fetch(TT, IT, oT.url)
          }
        } else {
          var kT;
          this.drawn.has(TT) || this.undrawn.add(TT), null === (kT = this.onTaken) || void 0 === kT || kT.call(this, TT, !1)
        }
        iT.recheck && this.resendIfChanged(TT)
      }
      refusedFile(TT, oT) {
        var IT, iT;
        if (null === (IT = this.onTaken) || void 0 === IT || IT.call(this, TT, !1), this.refusedPack.set(TT, oT.url), this.pending.has(TT)) return void(null === (iT = this.onPackFileFailed) || void 0 === iT || iT.call(this, TT, cT(oT.url)));
        const zT = this.hx(TT, oT.attempt.ask);
        zT.recheck = oT.attempt.recheck, this.afterRefusal(TT, zT, oT.url)
      }
      async afterRefusal(TT, oT, IT) {
        var iT;
        let zT;
        try {
          zT = await this.wanted(TT)
        } catch (kT) {
          return void(this.pending.get(TT) === oT && this.giveUp(TT, oT, IT, kT))
        }
        this.pending.get(TT) === oT && (zT.inPlaceOf !== IT ? oT.ask || (null !== (iT = zT.url) && void 0 !== iT ? iT : void 0) !== this.drawn.get(TT) ? this.fetch(TT, oT, zT.url, zT.inPlaceOf) : this.pending.delete(TT) : this.fallBack(TT, oT, IT, cT(IT)))
      }
      hx(TT, oT) {
        const IT = {
          url: void 0,
          ask: oT,
          kS: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(TT, IT);
        for (let iT = this.ready.length - 1; iT >= 0; iT--) this.ready[iT].file === TT && this.ready.splice(iT, 1);
        return IT
      }
      async wanted(TT) {
        const oT = await this.files.url(TT);
        return null !== oT && this.refusedPack.get(TT) === oT ? {
          url: await this.files.shippedUrl(TT),
          inPlaceOf: oT
        } : {
          url: oT,
          inPlaceOf: void 0
        }
      }
      fetchWanted(TT, oT) {
        const IT = this.files.url(TT);
        IT instanceof Promise ? IT.then((IT => {
          this.fetchFound(TT, oT, IT)
        }), (IT => {
          this.pending.get(TT) === oT && this.giveUp(TT, oT, "", IT)
        })) : this.fetchFound(TT, oT, IT)
      }
      fetchFound(TT, oT, IT) {
        null !== IT && this.refusedPack.get(TT) === IT ? Promise.resolve(this.files.shippedUrl(TT)).then((iT => {
          this.fetch(TT, oT, iT, IT)
        }), (iT => {
          this.pending.get(TT) === oT && this.giveUp(TT, oT, IT, iT)
        })) : this.fetch(TT, oT, IT)
      }
      fetch(TT, oT, IT, iT) {
        this.pending.get(TT) === oT && (oT.url = IT, oT.inPlaceOf = iT, null !== IT ? this.load(TT, oT, IT) : this.buildFile(TT, oT, "", ST))
      }
      load(TT, oT, IT) {
        const iT = this.qx.get(TT);
        (null === iT || void 0 === iT ? void 0 : iT.url) !== IT ? this.fetchFile(IT).then((iT => {
          var zT, kT;
          this.pending.get(TT) === oT && (this.keptTotal += iT.byteLength - (null !== (zT = null === (kT = this.qx.get(TT)) || void 0 === kT ? void 0 : kT.glb.byteLength) && void 0 !== zT ? zT : 0), this.qx.set(TT, {
            url: IT,
            glb: iT
          }), this.buildFile(TT, oT, IT, iT))
        }), (iT => {
          this.pending.get(TT) === oT && this.fallBack(TT, oT, IT, iT)
        })) : this.buildFile(TT, oT, IT, iT.glb)
      }
      buildFile(TT, oT, IT, iT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const WT = iT.byteLength > 0 && (0, kT.n)(IT) ? (TT | kT.d) >>> 0 : TT;
        this.queueRecord(TT, oT, IT, iT, this.build(WT, iT), zT)
      }
      queueRecord(TT, oT, IT, iT, kT, XT) {
        kT.then((kT => {
          if (this.pending.get(TT) !== oT) return;
          if (zT.t + (0, zT.se)(kT.byteLength) > zT.Hc) return void this.ringRefused(TT, oT, IT, new DT(`${KT(IT)}'s record is ${kT.byteLength-WT.e} bytes, past the cmd ring's ${zT.Hc}`), XT);
          const BT = {
            file: TT,
            url: IT,
            payload: kT,
            glb: iT,
            attempt: oT
          };
          XT ? this.ready.unshift(BT) : this.ready.push(BT)
        }))
      }
      async fallBack(TT, oT, IT, iT) {
        var zT;
        let kT = null,
          WT = iT;
        try {
          kT = await this.files.shippedUrl(TT)
        } catch (XT) {
          WT = XT
        }
        this.pending.get(TT) === oT && (null !== kT && kT !== IT ? (null === (zT = this.onPackFileFailed) || void 0 === zT || zT.call(this, TT, iT), oT.ask || this.drawn.get(TT) !== kT ? (oT.url = kT, oT.inPlaceOf = IT, this.load(TT, oT, kT)) : this.pending.delete(TT)) : this.giveUp(TT, oT, IT, WT))
      }
      ringRefused(TT, oT, IT, iT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, kT.n)(IT) ? this.fallBack(TT, oT, IT, iT): this.giveUp(TT, oT, IT, iT, zT)
      }
      giveUp(TT, oT, IT, zT) {
        let kT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: TT,
          url: KT(IT),
          error: zT,
          startup: this.startupLeft.has(TT)
        }), oT.ask || !this.drawn.has(TT) ? (0, iT.Y)(zT) ? this.queueRecord(TT, oT, IT, ST, Promise.resolve((0, WT.p)(TT, (0, XT.h)(zT))), kT) : this.buildFile(TT, oT, IT, ST, kT) : this.pending.delete(TT)
      }
      async resendIfChanged(TT) {
        var oT;
        if (0 !== (TT & kT.h)) return;
        let IT;
        try {
          IT = await this.wanted(TT)
        } catch {
          return
        }(null !== (oT = IT.url) && void 0 !== oT ? oT : void 0) === this.drawn.get(TT) || this.pending.has(TT) || this.written.has(TT) || this.fetch(TT, this.hx(TT, !1), IT.url, IT.inPlaceOf)
      }
      drain(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === TT) return;
        let IT = 0,
          iT = 0;
        for (; iT < this.ready.length && IT < 262144;) {
          const XT = this.ready[iT];
          if (this.written.has(XT.file)) {
            iT++;
            continue
          }
          const ST = this.nextSeq;
          new DataView(XT.payload.buffer, XT.payload.byteOffset, XT.payload.byteLength).setUint32(WT.h, ST, !0);
          const LT = XT.attempt.kS && XT.glb.byteLength > 0 && this.drawn.get(XT.file) === XT.url;
          if (TT(BT, LT ? 1 : 0, XT.payload)) {
            if (this.nextSeq = ST >= FT - 1 ? 1 : ST + 1, this.ready.splice(iT, 1), IT += XT.payload.byteLength, this.pending.delete(XT.file), this.startupLeft.delete(XT.file), this.written.set(XT.file, {
                seq: ST,
                url: XT.url,
                empty: 0 === XT.glb.byteLength,
                attempt: XT.attempt
              }), XT.glb.byteLength > 0) try {
              var zT;
              null === (zT = this.onWritten) || void 0 === zT || zT.call(this, XT.file, XT.glb)
            } catch (kT) {
              console.warn("ModelFeed: reading the file's images failed", kT)
            }
          } else {
            if (null === oT || 0 === XT.glb.byteLength || oT(XT.payload.byteLength)) return;
            this.ready.splice(iT, 1);
            const TT = new DT(`${KT(XT.url)}'s record is ${XT.payload.byteLength-WT.e} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(XT.file, XT.attempt, XT.url, TT, !0)
          }
        }
      }
    }

    function cT(TT) {
      return new LT(`presentation refused ${KT(TT)}`)
    }

    function KT(TT) {
      return TT.startsWith("data:") ? `${TT.slice(0,Math.min(Math.max(TT.indexOf(","),5),64))},...` : TT
    }
  },
  39762: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => WT,
      h: () => kT,
      j: () => ST,
      n: () => XT,
      p: () => FT,
      t: () => BT
    });
    var iT = IT(3280),
      zT = IT(2765);
    const kT = 2147483648,
      WT = 1073741824;

    function XT(TT) {
      return TT.startsWith("data:")
    }

    function BT(TT) {
      let {
        onTableFailed: oT,
        packUrl: IT
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const iT = FT();
      iT.catch((TT => {
        null === oT || void 0 === oT || oT(TT)
      }));
      const zT = async oT => (await iT).fileUrl((oT & ~kT) >>> 0, TT);
      return {
        startup: [],
        url: async TT => {
          if (IT && 0 === (TT & kT)) {
            const oT = await iT,
              zT = oT.filePackName(TT),
              kT = null === zT || "lifeform" === oT.fileSource(TT) ? null : IT(zT);
            if (null !== kT) return kT
          }
          return zT(TT)
        },
        shippedUrl: zT
      }
    }

    function FT() {
      return IT.e(41).then((() => IT(42170)))
    }
    async function ST(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return TT.startsWith("data:") ? (0, zT.e)(TT.slice(TT.indexOf(",") + 1), oT) : (0, iT.K)(TT, {
        spare: oT
      })
    }
  },
  39768: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => FT,
      h: () => ST,
      i: () => xT,
      l: () => MT,
      p: () => cT,
      t: () => LT,
      w: () => KT
    });
    const iT = 826427981,
      zT = 1,
      kT = 2,
      WT = 44,
      XT = 46,
      BT = 58,
      FT = 8,
      ST = 4;

    function DT(TT, oT, IT) {
      const zT = (new TextEncoder).encode(IT),
        kT = FT + 4 * (oT.length + 2),
        WT = new Uint8Array(kT + (zT.byteLength + 3 & -4)),
        XT = new DataView(WT.buffer);
      return XT.setUint32(0, TT, !0), XT.setUint32(FT, iT, !0), oT.forEach(((TT, oT) => {
        XT.setUint32(FT + 4 * (oT + 1), TT, !0)
      })), XT.setUint32(kT - 4, zT.byteLength, !0), WT.set(zT, kT), WT
    }

    function LT(TT, oT) {
      return DT(TT, [kT], oT)
    }

    function xT(TT, oT) {
      return DT(TT, [zT, XT], oT)
    }

    function cT(TT, oT) {
      return DT(TT, [zT, BT], oT)
    }

    function KT(TT, oT) {
      return DT(TT, [zT, WT], oT)
    }

    function MT(TT) {
      const oT = FT;
      if (TT.byteLength < oT + 12) return !1;
      const IT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength);
      return IT.getUint32(oT, !0) === iT && IT.getUint32(oT + 4, !0) === zT && IT.getUint32(oT + 8, !0) === WT
    }
  },
  39749: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => AT,
      e: () => rT,
      h: () => mT,
      l: () => wT,
      n: () => eT,
      p: () => KT
    });
    var iT = IT(4285),
      zT = IT(39615);
    const kT = 18,
      WT = 19,
      XT = 20,
      BT = {
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
        [kT]: "retry linked",
        [WT]: "fallback linked",
        [XT]: "fallback failed",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function FT(TT, oT) {
      return TT === kT ? "program retry" : TT === WT || TT === XT ? `program fallback ${oT}` : "program"
    }
    const ST = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      DT = {
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
      LT = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      xT = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld"
      },
      cT = {
        1280: "invalid enum",
        1281: "invalid value",
        1282: "invalid operation",
        1285: "out of memory",
        1286: "invalid framebuffer operation",
        37442: "context lost"
      };

    function KT(TT) {
      return String(TT).replace(/\d/g, (TT => String.fromCharCode(97 + Number(TT))))
    }

    function MT(TT, oT) {
      var IT;
      return null !== (IT = TT[oT]) && void 0 !== IT ? IT : KT(oT)
    }

    function rT() {
      return KT((0, zT.c)())
    }

    function AT(TT, oT) {
      switch (TT) {
        case iT.d.RenderSceneRowNotDrawn:
          return {
            words: ` ${MT(DT,oT)}`, instance: String(oT), group: String(TT)
          };
        case iT.d.RenderChunkMeshNotDrawn: {
          const IT = 0 === (128 & oT) ? "" : " shortage",
            iT = oT >>> 8;
          return {
            words: ` ${MT(LT,127&oT)}${IT}${0===iT?"":` kind ${KT(iT)}`}`,
            instance: String(oT),
            group: String(TT)
          }
        }
        case iT.d.RenderInternal: {
          const IT = MT(ST, 255 & oT),
            iT = oT >>> 8 & 255;
          if (0 === iT) return {
            words: ` ${IT}`,
            instance: String(oT),
            group: String(TT)
          };
          const zT = MT(BT, iT),
            kT = oT >>> 16;
          return {
            words: ` ${IT} ${zT} program ${KT(kT)}`,
            instance: `${IT} ${zT}`,
            group: FT(iT, IT),
            gpuDetails: {
              programFailure: zT,
              program: String(kT)
            }
          }
        }
        case iT.d.RenderSerialLinks: {
          const IT = MT(xT, oT);
          return {
            words: ` ${IT}`,
            instance: String(oT),
            group: String(TT),
            gpuDetails: {
              serialLinks: IT
            }
          }
        }
        case iT.d.RenderGlErrorAfterRestore: {
          const IT = MT(cT, 65535 & oT),
            iT = oT >>> 16,
            zT = 65535 !== iT;
          return {
            words: ` ${IT}${zT?` program ${KT(iT)}`:""}`,
            instance: String(oT),
            group: String(TT),
            gpuDetails: zT ? {
              glError: IT,
              program: String(iT)
            } : {
              glError: IT
            }
          }
        }
        default:
          return null
      }
    }
    const gT = 2,
      hT = new Map;

    function wT(TT) {
      let {
        group: oT,
        instance: IT
      } = TT, iT = hT.get(oT);
      return void 0 === iT && (iT = [], hT.set(oT, iT)), !iT.includes(IT) && (iT.length >= gT || (iT.push(IT), !1))
    }

    function mT() {
      return hT.size > 0
    }

    function eT() {
      hT.clear()
    }
  },
  39674: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => rT,
      e: () => AT,
      f: () => MT,
      g: () => mT
    });
    var iT = IT(6143),
      zT = IT(16),
      kT = IT(3862),
      WT = IT(4285),
      XT = IT(6141),
      BT = IT(39679);

    function FT(TT, oT) {
      const IT = (0, XT.c)(oT.variants);
      return TT.setShaderPack(IT.variantFlags, IT.hooks, IT.moduleCodes, (0, BT.z)(oT.layers), BT.l[oT.QF], oT.keepCircleShadows)
    }
    const ST = 0,
      DT = 1,
      LT = 2,
      xT = "shaderPack:failedToCompile",
      cT = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      KT = new Set(["not_requested", "off_after_loss", "gpu_class_webgl"]);

    function MT(TT, oT) {
      var IT;
      const iT = null !== (IT = null === TT || void 0 === TT ? void 0 : TT.reason) && void 0 !== IT ? IT : "none";
      return cT.has(iT) ? {
        messageKey: oT ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === iT && "override" === (null === TT || void 0 === TT ? void 0 : TT.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: KT.has(iT) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    const rT = {
      messageKey: "shaderPack:failedDeviceGraphics",
      noAdapter: !1
    };
    class AT extends Error {
      constructor(TT) {
        super(`the shader pack can't run in this game: ${TT}`), this.messageKey = TT, this.name = "ShaderPackJoinError"
      }
    }
    const gT = "strict";
    class hT {
      constructor(TT) {
        this.deps = TT, this.pagePack = void 0, this.loaded = null, this.QF = gT, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = TT.load().catch((oT => (TT.warn("the shader pack could not load: the game draws without it", oT), {
          status: "none"
        }))).then((TT => (this.loaded = TT, "active" === TT.status && (this.handOverToPreviews(TT), null !== TT.harnessPolicy && (this.QF = TT.harnessPolicy, this.handOver())), TT)))
      }
      async join(TT) {
        this.leave();
        const oT = this.game,
          [IT, zT] = await Promise.all([this.pagePack, this.policyOf(TT)]);
        if (oT !== this.game || "none" === IT.status) return null;
        const kT = "active" === IT.status ? IT.pack.variants : IT.variants,
          WT = (0, iT.h)(kT, zT);
        if (WT && "active" === IT.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (WT) {
          const TT = this.cantRun(IT, zT);
          if (null !== TT) return TT
        } else if ("blocked" === IT.status || null === this.deps.core) return null;
        return this.QF = zT, this.handOver(), WT && this.refused ? xT : (this.joined = !0, this.offInThisGame = !WT, null)
      }
      async replay(TT) {
        const oT = await this.join(TT);
        null === oT ? this.playable() : this.deps.failInGame(oT)
      }
      cantRun(TT, oT) {
        const {
          core: IT,
          noWebGpu: iT
        } = this.deps;
        if ("blocked" === TT.status) {
          return "shaderPack:failedUnchecked" === TT.messageKey && null === IT && iT.noAdapter ? iT.messageKey : TT.messageKey
        }
        return this.refused || this.failedPolicies.has(oT) ? xT : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(xT) : (null !== this.couldntRun ? this.notify(kT.e, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.QF) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(TT) {
        for (const {
            code: oT,
            detail: IT
          }
          of TT)
          if (oT === WT.d.RenderShaderPackNotRun) switch (255 & IT) {
            case ST:
              this.refused = !0, this.failed();
              break;
            case DT:
              this.failedPolicies.add(this.QF), this.failed();
              break;
            case LT:
              this.failedModelPolicies.add(this.QF), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(xT) : this.failedWhileJoining = !0)
      }
      fail(TT) {
        this.leave(), this.deps.failInGame(TT)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(TT, oT) {
        const IT = this.game;
        this.deps.notify(TT, (() => IT === this.game && this.joined), oT)
      }
      handOver() {
        var TT;
        const {
          core: oT
        } = this.deps;
        null !== oT && "active" === (null === (TT = this.loaded) || void 0 === TT ? void 0 : TT.status) && (FT(oT, {
          ...this.loaded.pack,
          QF: this.QF
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(TT) {
        let {
          pack: oT,
          harnessPolicy: IT
        } = TT;
        const {
          previews: iT
        } = this.deps;
        null !== iT && FT(iT, {
          ...oT,
          QF: null !== IT && void 0 !== IT ? IT : gT
        })
      }
      policyOf(TT) {
        return this.deps.policyOf(TT).catch((TT => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", TT), gT)))
      }
    }
    const wT = "wasmShaderPackNotice";

    function mT(TT, oT, IT, iT) {
      return zT.h.subscribe(wT, (TT => {
        let {
          translationKey: oT,
          stillCurrent: IT,
          reasonKey: iT
        } = TT;
        IT() && zT.h.XM("chat", (0, kT.j)(oT, iT))
      })), new hT({
        load: eT,
        policyOf: RT,
        core: TT,
        previews: oT,
        noWebGpu: IT,
        notify: (TT, oT, IT) => {
          const iT = {
            translationKey: TT,
            stillCurrent: oT,
            reasonKey: IT
          };
          zT.h.XM(wT, iT, !0)
        },
        failInGame: TT => {
          zT.h.XM(kT.h, TT)
        },
        warn: iT
      })
    }
    async function eT() {
      const [{
        shaderPackPage: TT,
        harnessShaderPackMode: oT
      }, {
        shaderPackTextures: iT
      }] = await Promise.all([IT.e(130).then((() => IT(38159))), IT.e(131).then((() => IT(6138)))]), zT = await TT.load();
      return "active" !== zT.status ? zT : {
        status: "active",
        pack: {
          variants: zT.pack.variants,
          layers: iT().layers,
          keepCircleShadows: zT.pack.keepCircleShadows
        },
        harnessPolicy: oT()
      }
    }
    async function RT(TT) {
      var oT;
      const [{
        harnessShaderPackMode: iT
      }, {
        getShaderPackPolicy: zT
      }] = await Promise.all([IT.e(130).then((() => IT(38159))), IT.e(89).then((() => IT(39953)))]);
      return null !== (oT = iT()) && void 0 !== oT ? oT : zT(TT)
    }
  },
  39779: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => XT,
      d: () => MT,
      h: () => BT,
      l: () => FT,
      o: () => ST,
      s: () => LT
    });
    var iT = IT(39781),
      zT = IT(39783);
    const kT = "atlas:",
      WT = 3e4;
    class XT extends Error {
      constructor(TT, oT) {
        super(`fetching ${TT} answered HTTP ${oT}`), this.url = TT, this.status = oT, this.name = "TerrainTextureFetchError"
      }
    }

    function BT(TT) {
      if (!TT.startsWith(kT)) return null;
      const oT = Number(TT.slice(kT.length));
      return Number.isInteger(oT) && oT >= 0 ? oT : null
    }
    async function FT() {
      const TT = await IT.e(196).then((() => IT(33287)));
      return {
        atlasSheets: TT.blockAtlasUrls,
        texture: oT => {
          var IT, iT, kT;
          return null !== (IT = null !== (iT = null !== (kT = TT.animatedBlockTextures[oT]) && void 0 !== kT ? kT : TT.rotatedBlockTextures[oT]) && void 0 !== iT ? iT : zT.b[oT]) && void 0 !== IT ? IT : null
        }
      }
    }
    async function ST(TT) {
      const oT = new AbortController,
        IT = setTimeout((() => {
          oT.abort(new DOMException(`${TT} took over ${WT} ms`, "TimeoutError"))
        }), WT);
      let iT;
      try {
        const IT = await fetch(TT, {
          signal: oT.signal
        });
        if (!IT.ok) throw new XT(TT, IT.status);
        iT = await IT.blob()
      } finally {
        clearTimeout(IT)
      }
      const zT = await createImageBitmap(iT, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return LT(zT)
      } finally {
        zT.close()
      }
    }
    const DT = 8192;

    function LT(TT) {
      const {
        width: oT,
        height: IT
      } = TT, zT = Math.max(1, Math.min(IT, DT)), kT = (0, iT.i)(oT, zT, {
        willReadFrequently: !0
      });
      if (!kT) throw new Error("no 2D context to read the texture back");
      kT.globalCompositeOperation = "copy";
      const WT = new Uint8Array(oT * IT * 4);
      for (let iT = 0; iT < IT; iT += zT) {
        const XT = Math.min(zT, IT - iT);
        kT.drawImage(TT, 0, iT, oT, XT, 0, 0, oT, XT), WT.set(kT.getImageData(0, 0, oT, XT).data, iT * oT * 4)
      }
      return {
        width: oT,
        height: IT,
        pixels: WT
      }
    }
    async function xT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ST;
      const iT = [],
        zT = await Promise.all(TT.map((async TT => {
          var zT, WT;
          const XT = null !== (zT = null === (WT = oT.decoded) || void 0 === WT ? void 0 : WT.call(oT, TT)) && void 0 !== zT ? zT : null,
            FT = null === XT ? function(TT, oT) {
              if (TT.startsWith(kT)) {
                var IT;
                const iT = BT(TT);
                return null === iT ? null : null !== (IT = oT.atlasSheets[iT]) && void 0 !== IT ? IT : null
              }
              return oT.texture(TT)
            }(TT, oT) : null,
            ST = null !== XT && void 0 !== XT ? XT : null === FT ? null : IT(FT);
          if (null === ST) return iT.push({
            name: TT,
            url: FT,
            error: new Error(`no URL for terrain texture ${TT}`)
          }), null;
          try {
            const oT = await ST;
            if (oT.pixels.byteLength !== oT.width * oT.height * 4) throw new Error(`decoded ${oT.pixels.byteLength} bytes for ${oT.width}x${oT.height} texels`);
            return {
              name: TT,
              texture: oT
            }
          } catch (DT) {
            return iT.push({
              name: TT,
              url: FT,
              error: DT
            }), null
          }
        }))),
        WT = zT.filter((TT => null !== TT)),
        XT = new Uint32Array(2 * WT.length);
      WT.forEach(((TT, oT) => {
        let {
          texture: IT
        } = TT;
        XT[2 * oT] = IT.width, XT[2 * oT + 1] = IT.height
      }));
      return {
        handOver: {
          names: WT.map((TT => {
            let {
              name: oT
            } = TT;
            return oT
          })),
          textures: WT.map((TT => {
            let {
              texture: oT
            } = TT;
            return oT.pixels
          })),
          sizes: XT
        },
        failures: iT
      }
    }
    const cT = [2e3, 1e4, 3e4, 6e4, 12e4];

    function KT() {}
    class MT {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cT,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = TT, this.retryMs = oT, this.keepBelow = IT, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FT,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const iT = ++this.started,
          zT = {
            decode: IT.decode,
            wholeAtlas: IT.wholeAtlas
          };
        return this.loadAndHandOver(oT, zT, TT, (() => {
          var TT;
          return iT < this.landed || !1 === (null === (TT = IT.wanted) || void 0 === TT ? void 0 : TT.call(IT))
        }), {
          onTaken: (TT, IT) => {
            this.landed = iT, this.current = {
              mine: iT,
              sources: oT,
              load: zT,
              qx: TT,
              failed: IT
            }
          }
        })
      }
      restore(TT) {
        var oT;
        const IT = this.current;
        if (null === IT) return Promise.resolve(null);
        if ((null === (oT = this.restoring) || void 0 === oT ? void 0 : oT.mine) === IT.mine) return this.restoring.done;
        const iT = {
          mine: IT.mine,
          done: this.restoreLanded(IT, TT).finally((() => {
            this.restoring === iT && (this.restoring = null)
          }))
        };
        return this.restoring = iT, iT.done
      }
      async restoreLanded(TT, oT) {
        const IT = () => this.landed !== TT.mine,
          {
            qx: iT
          } = TT;
        if (null !== iT) return this.stopped() ? null : this.core.setTerrainTextures(iT.names, iT.textures, iT.sizes);
        let zT = oT;
        for (let kT = 0;; kT++) {
          const oT = this.retryMs.at(kT),
            iT = {
              allOrNothingExcept: void 0 === oT ? void 0 : TT.failed
            },
            WT = await this.loadAndHandOver(TT.sources, TT.load, zT, IT, iT);
          if (!1 !== WT || void 0 === oT || this.stopped()) return WT;
          if (zT = KT, await new Promise((TT => {
              setTimeout(TT, oT)
            })), IT()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(TT, oT, IT, iT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const kT = this.core.terrainTextureNames();
        var WT;
        if (0 === kT.length) return null === (WT = zT.onTaken) || void 0 === WT || WT.call(zT, null, new Set), !0;
        let XT, FT;
        try {
          XT = await TT(), FT = await xT(kT, XT, oT.decode)
        } catch (MT) {
          return iT() ? null : (IT({
            name: null,
            url: null,
            error: MT
          }), !1)
        }
        if (iT() || this.stopped()) return null;
        for (const BT of FT.failures) IT(BT);
        const ST = zT.allOrNothingExcept;
        if (void 0 !== ST && FT.failures.some((TT => {
            let {
              name: oT
            } = TT;
            return null === oT || !ST.has(oT)
          })) || !0 === oT.wholeAtlas && FT.failures.some((TT => {
            let {
              name: oT
            } = TT;
            return null === oT || null !== BT(oT)
          }))) return !1;
        const {
          handOver: DT
        } = FT, LT = function(TT) {
          return TT.textures.reduce(((TT, oT) => TT + oT.byteLength), 0)
        }(DT) < this.keepBelow, cT = this.core.setTerrainTextures(DT.names, DT.textures, DT.sizes, LT ? void 0 : () => {
          !async function(TT, oT) {
            await oT;
            for (const {
                buffer: iT
              }
              of TT) {
              const TT = iT;
              var IT;
              if (!TT.detached) null === (IT = TT.transfer) || void 0 === IT || IT.call(TT, 0)
            }
          }(DT.textures, XT.heldUntil)
        });
        if (cT) {
          var KT;
          const TT = new Set(FT.failures.flatMap((TT => {
            let {
              name: oT
            } = TT;
            return null === oT ? [] : [oT]
          })));
          null === (KT = zT.onTaken) || void 0 === KT || KT.call(zT, LT ? DT : null, TT)
        }
        return cT
      }
    }
  },
  39786: (TT, oT, IT) => {
    function iT(TT) {
      return "fetch" === TT || "timeout" === TT || "integrity" === TT ? "download" : "browser"
    }
    IT.d(oT, {
      c: () => zT,
      f: () => WT,
      g: () => BT,
      j: () => XT,
      k: () => iT,
      l: () => kT
    });
    const zT = "https://discord.gg/playbloxd";

    function kT(TT) {
      return "download" === TT ? {
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

    function WT(TT, oT) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: oT ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: TT.code
        },
        discordLink: oT,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function XT() {
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

    function BT(TT, oT, IT) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: IT ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: TT.reason
        },
        discordLink: null === TT.name,
        confirm: oT ? "general:reconnect" : TT.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  6141: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => hT,
      g: () => wT,
      j: () => AT,
      n: () => rT
    });
    var iT = IT(6143);
    const zT = 6,
      kT = 3,
      WT = 1,
      XT = 2,
      BT = 4,
      FT = 8,
      ST = 16,
      DT = 32,
      LT = 64,
      xT = 128,
      cT = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function KT(TT) {
      if (!TT) return 0;
      const oT = cT.indexOf(TT);
      if (oT <= 0) throw new Error(`"${TT}" is not a shader pack hook function`);
      return oT
    }

    function MT(TT) {
      if (0 === TT) return null;
      const oT = cT[TT];
      if (void 0 === oT) throw new Error(`${TT} is not a shader pack hook function id`);
      return oT
    }

    function rT(TT) {
      const oT = iT.d.length;
      return {
        strict: TT >= oT,
        program: iT.d[TT % oT]
      }
    }

    function AT(TT) {
      return Number(TT.strict) * iT.d.length + iT.d.indexOf(TT.program)
    }

    function gT(TT) {
      return "" === TT ? [] : TT.split(" ")
    }

    function hT(TT) {
      const oT = {
        variantFlags: new Uint8Array(zT),
        hooks: new Uint8Array(zT * kT),
        moduleCodes: Array(zT).fill(""),
        reads: Array(2 * zT).fill("")
      };
      for (const IT of TT) {
        const TT = AT(IT.key),
          iT = (TT, oT) => null === IT.hooks.surface || IT.reads.fragment.includes(TT) ? 0 : oT;
        oT.variantFlags[TT] = (IT.sceneDepth ? WT : 0) | (IT.movesVertices ? XT : 0) | (IT.sunShadow ? BT : 0) | (IT.airShadow ? FT : 0) | (IT.discards ? ST : 0) | iT("localPosition", DT) | iT("enchantSpeed", LT) | iT("enchantTier", xT), oT.hooks[TT * kT] = KT(IT.hooks.vertex), oT.hooks[TT * kT + 1] = KT(IT.hooks.surface), oT.hooks[TT * kT + 2] = KT(IT.hooks.light), oT.moduleCodes[TT] = IT.moduleCode, oT.reads[2 * TT] = IT.reads.vertex.join(" "), oT.reads[2 * TT + 1] = IT.reads.fragment.join(" ")
      }
      return oT
    }

    function wT(TT) {
      const {
        hooks: oT,
        moduleCodes: IT,
        reads: iT
      } = TT;
      return Array.from(TT.variantFlags, ((TT, zT) => {
        const DT = zT * kT;
        return {
          key: rT(zT),
          hooks: {
            vertex: MT(oT[DT]),
            surface: MT(oT[DT + 1]),
            light: MT(oT[DT + 2])
          },
          moduleCode: IT[zT],
          sceneDepth: 0 !== (TT & WT),
          sunShadow: 0 !== (TT & BT),
          airShadow: 0 !== (TT & FT),
          movesVertices: 0 !== (TT & XT),
          discards: 0 !== (TT & ST),
          reads: {
            vertex: gT(iT[2 * zT]),
            fragment: gT(iT[2 * zT + 1])
          }
        }
      }))
    }
  },
  39679: (TT, oT, IT) => {
    IT.d(oT, {
      A: () => xT,
      B: () => cT,
      c: () => zT,
      d: () => iT,
      e: () => LT,
      h: () => ST,
      l: () => MT,
      n: () => kT,
      q: () => XT,
      r: () => BT,
      v: () => WT,
      z: () => KT
    });
    const iT = 3,
      zT = 0,
      kT = 1,
      WT = 2,
      XT = {
        uniform: 3,
        jL: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      BT = 10,
      FT = "BloxdPackInputs",
      ST = "bloxdPackInputs",
      DT = [{
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
      LT = 80;

    function xT() {
      const TT = DT.map((TT => {
        let {
          name: oT,
          type: IT
        } = TT;
        return `    ${oT}: ${IT},\n`
      })).join("");
      return `struct ${FT} {\n${TT}}\n@group(${iT}) @binding(${zT}) var<uniform> ${ST}: ${FT};\n`
    }

    function cT(TT, oT) {
      const IT = new DataView(TT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, LT),
        [iT, zT, kT, WT, XT, BT] = DT;
      IT.setFloat32(iT.offset, oT.seconds, !0), IT.setUint32(zT.offset, oT.lit ? 1 : 0, !0);
      for (let FT = 0; FT < 3; FT++) IT.setInt32(kT.offset + 4 * FT, oT.renderOffset[FT], !0), IT.setFloat32(WT.offset + 4 * FT, oT.f_[FT], !0), IT.setFloat32(XT.offset + 4 * FT, oT.eyePosition[FT], !0), IT.setFloat32(BT.offset + 4 * FT, oT.shadowDirection[FT], !0)
    }

    function KT(TT) {
      const oT = new Uint32Array(Math.max(1, TT.length));
      return TT.forEach(((TT, IT) => {
        let {
          id: iT,
          rotation: zT
        } = TT;
        oT[IT] = 65535 & iT | (3 & zT) << 16
      })), oT
    }
    const MT = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6143: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT,
      g: () => WT,
      h: () => XT,
      k: () => zT,
      l: () => kT
    });
    const iT = ["terrain", "liquid", "model"];

    function zT() {
      const TT = [];
      for (const oT of [!1, !0])
        for (const IT of iT) TT.push({
          strict: oT,
          program: IT
        });
      return TT
    }

    function kT(TT) {
      return `${TT.strict?"strict":"allow"}.${TT.program}`
    }

    function WT(TT) {
      return !TT.hooks.vertex && !TT.hooks.surface && !TT.hooks.light
    }

    function XT(TT, oT) {
      return "off" !== oT && (null === TT || TT.some((TT => TT.key.strict === ("strict" === oT) && !WT(TT))))
    }
  },
  39710: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT,
      f: () => kT,
      g: () => BT,
      i: () => WT,
      k: () => zT
    });
    const iT = /^alloc_failed (\d+) bytes$/;

    function zT(TT, oT) {
      return kT(TT, oT) ? `trap=alloc_failed ${oT} bytes` : `trap=${TT}`
    }

    function kT(TT, oT) {
      return "unreachable" === TT && oT > 0
    }

    function WT(TT, oT, IT) {
      const iT = function(TT) {
        return TT instanceof WebAssembly.RuntimeError ? /unreachable/i.test(TT.message) ? "unreachable" : /out of bounds/i.test(TT.message) ? "out_of_bounds" : "runtime_error" : (TT instanceof RangeError || TT instanceof Error && "InternalError" === TT.name) && /call stack|recursion/i.test(TT.message) ? "stack_overflow" : "js_error"
      }(TT);
      if ("unreachable" !== iT) return {
        kind: iT,
        panic: null,
        refusedBytes: 0
      };
      const zT = oT(),
        kT = IT();
      return {
        kind: iT,
        panic: kT > 0 ? null : zT,
        refusedBytes: kT
      }
    }
    const XT = 300;

    function BT(TT) {
      return TT.replace(/\s*\n\s*/g, " / ").slice(0, XT)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);