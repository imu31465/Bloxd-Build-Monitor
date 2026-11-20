export const id = 87;
export const ids = [87];
export const modules = {
  38593: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT,
      h: () => xT,
      k: () => IT,
      m: () => AT,
      n: () => fT,
      o: () => yT
    });
    const lT = "A valid external Instance reference no longer exists.",
      MT = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ],
      KT = [
        [1e3, "lt1s"],
        [2e3, "lt2s"],
        [5e3, "lt5s"],
        [1e4, "lt10s"],
        [3e4, "lt30s"],
        [1 / 0, "ge30s"]
      ];
    const OT = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function yT(TT, kT) {
      return TT ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(TT) {
        var kT;
        const cT = null !== (kT = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(TT)) && void 0 !== kT ? kT : /failed with ([A-Z][A-Z0-9_]+)/.exec(TT);
        return cT ? cT[1] : TT.includes(lT) ? "gpu_process_lost" : "other"
      }(kT)
    }

    function fT(TT) {
      return `${(null===TT||void 0===TT?void 0:TT.vendor)||"unknown vendor"} ${(null===TT||void 0===TT?void 0:TT.architecture)||"unknown architecture"}`
    }

    function xT(TT) {
      return CT(TT)[1]
    }

    function IT(TT) {
      return CT(TT)[2]
    }

    function AT(TT) {
      return jT(KT, TT)[1]
    }

    function CT(TT) {
      return jT(MT, TT)
    }

    function jT(TT, kT) {
      var cT;
      return null !== (cT = TT.find((TT => {
        let [cT] = TT;
        return kT < cT
      }))) && void 0 !== cT ? cT : TT[TT.length - 1]
    }
  },
  38879: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT,
      f: () => MT
    });
    const lT = 45e3;
    class MT extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  36085: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => lT,
      g: () => MT,
      j: () => KT,
      m: () => OT
    });
    const lT = 1024,
      MT = 1024 * lT;

    function KT(TT) {
      return 2 ** Math.floor(Math.log2(Math.max(1, TT / MT)))
    }

    function OT(TT) {
      return (TT / MT).toFixed(1)
    }
  },
  36299: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => KT,
      g: () => yT,
      k: () => OT,
      n: () => fT,
      r: () => xT,
      t: () => IT
    });
    var lT = cT(218);
    const MT = 32 * cT(36085).g,
      KT = 6144,
      OT = 4608,
      yT = 512;

    function fT(TT) {
      return Math.floor(MT * TT / KT)
    }

    function xT(TT) {
      const kT = TT - Math.floor(TT / 6);
      let cT = lT.f.maxChunkHorizAddDistance,
        MT = lT.f.maxChunkVertAddDistance;
      if (IT(cT + 1, MT + 1) <= kT) return null;
      for (; IT(cT + 1, MT + 1) > kT && (cT > 0 || MT > 0);) cT > MT ? cT-- : MT--;
      return {
        horizontal: cT,
        vertical: MT
      }
    }

    function IT(TT, kT) {
      const cT = Math.max(TT, kT);
      let lT = 0;
      for (let MT = -cT; MT <= cT; MT++)
        for (let KT = -cT; KT <= cT; KT++)
          for (let OT = -cT; OT <= cT; OT++) AT(TT, kT, MT, KT, OT) && lT++;
      return lT
    }

    function AT(TT, kT, cT, lT, MT) {
      const KT = cT * cT + MT * MT;
      return TT === kT ? KT + lT * lT <= TT * TT : TT > kT ? Math.abs(lT) <= kT && KT + lT * lT <= TT * TT : KT <= TT * TT && KT + lT * lT <= kT * kT
    }
  },
  40494: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => MT,
      f: () => KT,
      j: () => yT,
      n: () => IT,
      r: () => fT,
      t: () => OT
    });
    var lT = cT(218);
    const MT = 3e3,
      KT = 15e3;

    function OT(TT) {
      const kT = TT.endsWith(lT.k);
      return {
        text: (kT ? TT.slice(0, -lT.k.length) : TT) || null,
        dropsCache: kT
      }
    }
    const yT = "Either your internet isn't working or this is a bug.";

    function fT(TT, kT) {
      const cT = IT(TT);
      return null !== cT.name && "" === lT.c[cT.name].text && null !== kT ? kT : cT.reason
    }
    const xT = "You were removed from the game.";

    function IT(TT) {
      var kT;
      let cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const MT = null !== (kT = Object.keys(lT.c).find((kT => lT.c[kT].code === TT))) && void 0 !== kT ? kT : null;
      if (null === MT) return {
        code: TT,
        name: MT,
        reason: null !== cT && void 0 !== cT ? cT : `${yT}\nCode: ${TT}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: KT,
        canReconnect: OT = !1
      } = lT.c[MT], fT = TT === lT.c.outdatedVersion.code || TT === lT.c.loadRecaptchaError.code;
      return {
        code: TT,
        name: MT,
        reason: "" !== KT ? KT : null !== cT && void 0 !== cT ? cT : TT === lT.c.gameOrPluginKick.code ? xT : `Code: ${TT}`,
        canReconnect: OT,
        automaticallyReconnect: TT === lT.c.customGameUpdated.code || TT === lT.c.duplicateLobbyNameError.code,
        requiresRefresh: fT
      }
    }
  },
  4761: (TT, kT, cT) => {
    cT.d(kT, {
      $: () => lT.y,
      $b: () => ST,
      $c: () => lT.Ab,
      B: () => iT,
      Bb: () => Tk,
      Dc: () => Ik,
      Dd: () => LT,
      E: () => lT.e,
      Ed: () => uT,
      Fb: () => ck,
      Fd: () => UT,
      Gc: () => Mk,
      H: () => xT,
      Hb: () => MT.c,
      Id: () => RT,
      Jb: () => PT,
      Jc: () => lT.kb,
      K: () => lT.g,
      Lb: () => ZT,
      Mb: () => JT,
      Md: () => BT,
      Nc: () => lT.ob,
      O: () => sT,
      Od: () => YT,
      Pb: () => bT,
      Q: () => lT.j,
      Qb: () => lT.K,
      Rc: () => lT.sb,
      Rd: () => yk,
      U: () => nT,
      Ub: () => oT,
      Vc: () => qT,
      Vd: () => tk,
      W: () => lT.t,
      Xb: () => aT,
      Xc: () => lT.yb,
      Zb: () => Ok,
      Zd: () => DT,
      _: () => lT.x,
      ac: () => Ak,
      ae: () => WT,
      bc: () => MT.j,
      be: () => VT,
      cd: () => lT.Bb,
      d: () => kk,
      db: () => AT,
      de: () => GT,
      e: () => tT,
      eb: () => QT,
      ec: () => NT,
      fc: () => lk,
      fe: () => eT,
      gd: () => lT.Hb,
      hb: () => lT.z,
      hc: () => lT.R,
      i: () => vT,
      id: () => lT.Kb,
      j: () => xk,
      je: () => fT,
      kb: () => lT.B,
      kd: () => lT.Mb,
      ke: () => ET,
      lb: () => dT,
      lc: () => lT.V,
      ld: () => mT,
      m: () => wT,
      mb: () => Kk,
      md: () => lT.Ob,
      n: () => rT,
      nd: () => lT.Sb,
      oe: () => hk,
      p: () => lT.d,
      pb: () => IT,
      pc: () => lT.Y,
      q: () => Ck,
      qd: () => lT.Vb,
      qe: () => jT,
      r: () => zT,
      rb: () => lT.C,
      rc: () => lT._,
      sc: () => lT.$,
      sd: () => KT,
      t: () => OT,
      vb: () => gT,
      vd: () => hT,
      w: () => HT,
      wc: () => lT.gb,
      x: () => jk,
      yd: () => fk,
      zb: () => pT,
      zc: () => vk,
      zd: () => XT
    });
    var lT = cT(4769),
      MT = cT(2435);
    const KT = Math.round(1e3 / lT.Vb),
      OT = 4,
      yT = 2;

    function fT() {
      return crypto.getRandomValues(new Uint32Array(yT))
    }
    const xT = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      IT = 16,
      AT = {
        Draws: 1,
        NetAll: 2
      },
      CT = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function jT(TT) {
      return (TT.nametagsHidden ? FT.NametagsHidden : 0) | (TT.crouchToggle ? FT.CrouchToggle : 0) | (TT.bhopDisabled ? FT.BhopDisabled : 0) | (TT.disableBobbing ? FT.DisableBobbing : 0) | (TT.ezTowering ? FT.EzTowering : 0) | (TT.ezBridging ? FT.EzBridging : 0) | (TT.showChunkBorders ? FT.ShowChunkBorders : 0)
    }
    const vT = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      tT = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      hT = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      NT = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      QT = 5,
      ST = 4294967295;

    function DT(TT) {
      return (TT.showFog ? CT.ShowFog : 0) | (TT.lighting ? CT.Lighting : 0) | (TT.chunkFade ? CT.ChunkFade : 0)
    }
    const aT = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      FT = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      rT = {
        Release: 1,
        KeepTouches: 2
      },
      PT = {
        Point: 1,
        Stamped: 2
      },
      wT = {
        Add: 1,
        Clear: 2
      },
      mT = 1,
      bT = 8,
      zT = 16777215,
      JT = 4,
      oT = {
        Resume: 1
      },
      HT = {
        Held: 1
      };

    function eT(TT, kT) {
      return (TT | kT << 8) >>> 0
    }

    function GT(TT) {
      return 255 & TT
    }

    function VT(TT) {
      return TT >>> 8
    }

    function ET(TT) {
      return TT + 3 & -4
    }
    const ZT = 16777216,
      uT = 20;
    const XT = 8,
      dT = 8,
      LT = 16777216,
      RT = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      gT = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      UT = 16,
      YT = {
        Lost: 0,
        Gone: 1
      },
      BT = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function WT(TT) {
      return TT === BT.WorldgenSeed || TT === BT.Generate
    }
    const nT = 4,
      pT = 99,
      iT = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      qT = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      sT = {
        FRAMES: 65535,
        RESTORE_UNHELD: 65536,
        LINKS_RUNNING: 1 << 17
      },
      Tk = 12,
      kk = 16,
      ck = 4,
      lk = 12,
      Mk = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      Kk = 4,
      Ok = 8,
      yk = 8,
      fk = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      xk = {
        Crit: 1,
        HitSelf: 2
      },
      Ik = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      Ak = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      Ck = 12,
      jk = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      vk = 67108864;

    function tk(TT) {
      for (const [kT, cT] of Object.entries(lT.e))
        if (cT === TT) return kT;
      return `Unknown${TT}`
    }

    function hk(TT) {
      return {
        status: TT[lT.B.Status],
        lastError: TT[lT.B.LastError],
        lastErrorDetail: TT[lT.B.LastErrorDetail],
        errorCount: TT[lT.B.ErrorCount],
        frameIndex: TT[lT.B.FrameIndex],
        tickIndex: TT[lT.B.TickIndex],
        renderPending: TT[lT.B.RenderPending],
        firstView: TT[lT.B.FirstView],
        chunksCancelled: TT[lT.B.ChunksCancelled]
      }
    }
  },
  40273: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => lT,
      c: () => AT,
      g: () => yT,
      j: () => KT,
      l: () => MT,
      p: () => fT,
      s: () => IT
    });
    class lT extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function MT(TT) {
      return TT instanceof RangeError && /call stack/i.test(TT.message) || TT instanceof Error && "InternalError" === TT.name && /recursion/i.test(TT.message)
    }

    function KT(TT) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(TT))
    }
    const OT = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function yT(TT) {
      var kT;
      return TT instanceof WebAssembly.RuntimeError || TT instanceof lT || MT(TT) && OT.test(null !== (kT = TT.stack) && void 0 !== kT ? kT : "")
    }

    function fT(TT, kT) {
      if (yT(TT)) throw TT;
      console.error(kT, TT)
    }

    function xT(TT, kT, cT, MT, KT) {
      if (kT % MT !== 0 || kT + cT > TT.byteLength) throw new lT(`${KT}: ${cT} bytes at ${kT}, ${MT}-aligned, outside ${TT.byteLength} bytes of memory`)
    }

    function IT(TT, kT, cT, lT, MT) {
      return 0 === cT ? null : (xT(kT, cT, lT * TT.BYTES_PER_ELEMENT, TT.BYTES_PER_ELEMENT, MT), new TT(kT, cT, lT))
    }

    function AT(TT, kT, cT, lT, MT) {
      return 0 === kT ? null : (xT(TT, kT, cT, lT, MT), new DataView(TT, kT, cT))
    }
  },
  40615: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT
    });
    const lT = {
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
  40562: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => vT,
      g: () => tT,
      h: () => CT,
      l: () => AT
    });
    const lT = 2e3,
      MT = "unavailable";
    let KT = () => Promise.resolve().then((() => cT(2893))),
      OT = null,
      yT = null,
      fT = xT();

    function xT() {
      let TT = () => {};
      return {
        promise: new Promise((kT => {
          TT = () => {
            kT(null)
          }
        })),
        resolve: TT
      }
    }

    function IT() {
      if (null === OT) {
        const TT = KT();
        OT = TT, TT.then((kT => {
          OT === TT && (yT = kT)
        }), (() => {
          OT === TT && (OT = null)
        }))
      }
      return OT
    }

    function AT() {
      IT().catch((() => {}))
    }

    function CT() {
      fT.resolve()
    }

    function jT(TT, kT, cT, lT) {
      if (null === TT) return {
        errorKind: kT,
        fingerprint: MT,
        dedupe: `${kT}|${lT}`
      };
      const {
        fingerprint: KT
      } = TT.clientErrorKey(kT, cT, lT);
      return {
        errorKind: kT,
        fingerprint: KT,
        dedupe: KT
      }
    }

    function vT(TT, kT, cT, lT) {
      return null === yT ? lT ? (AT(), jT(null, TT, kT, cT)) : null : jT(yT, TT, kT, cT)
    }
    async function tT(TT, kT, cT) {
      let MT;
      const KT = new Promise((TT => {
        MT = setTimeout((() => {
          TT(null)
        }), lT)
      }));
      try {
        return jT(await Promise.race([IT(), KT, fT.promise]), TT, kT, cT)
      } catch {
        return jT(null, TT, kT, cT)
      } finally {
        clearTimeout(MT)
      }
    }
  },
  40557: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      BUILT_IN_ANIMATIONS_SITE: () => UT,
      CORE_ERRORS_SITE: () => GT,
      EVENT_OVERFLOW_SITE: () => gT,
      FIRST_VIEW_SITE: () => BT,
      JOIN_SITE: () => ET,
      LEAVE_SITE: () => ZT,
      MAIN_THREAD_SITE: () => WT,
      MODEL_FEED_SITE: () => uT,
      MODEL_POOL_SITE: () => XT,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => pT,
      NON_FATAL_REPORTS_PER_SESSION: () => Ck,
      PREVIEW_ANIMATIONS_SITE: () => RT,
      RENDER_RELOAD_SITE: () => LT,
      TEXTURE_NAMES_SITE: () => dT,
      TEXTURE_PACK_FEED_SITE: () => YT,
      TurnstilePageError: () => gk,
      WASM_LOAD_SITE: () => VT,
      crashError: () => Nk,
      crashReportsSettled: () => rk,
      flushCrashReports: () => ak,
      joinFailureCode: () => Uk,
      lokiTransport: () => sT,
      modelFailureCode: () => qk,
      readTrap: () => zk,
      renderLossDetail: () => Nc,
      renderReloadMessage: () => tc,
      reportCoreErrors: () => wk,
      reportCountedLoadFallback: () => Lk,
      reportCrash: () => Qk,
      reportDataLoadFailure: () => Fc,
      reportDisconnect: () => pk,
      reportDracoDecoderFailure: () => cc,
      reportEventOverflow: () => Kc,
      reportFirstViewNoTerrain: () => Ic,
      reportGpuFallback: () => Xk,
      reportGpuWasmPopulation: () => dk,
      reportLightFault: () => yc,
      reportMainStall: () => Ac,
      reportMemoryShed: () => xc,
      reportModelFailure: () => sk,
      reportModelPoolFailure: () => Tc,
      reportModelsModuleRetry: () => kc,
      reportPageJoinFailure: () => Bk,
      reportReconnectGaveUp: () => ik,
      reportRenderReload: () => Sc,
      reportReplayFault: () => jc,
      reportStaleBuildReload: () => Pc,
      reportStoppedCore: () => Gk,
      reportTerrainTextureFailure: () => Dc,
      reportTexturePackFeedLoadFailure: () => Mc,
      reportUnstreamedCoreLoad: () => Rk,
      reportUnsupportedFallback: () => Zk,
      reportUnusedSeat: () => nk,
      reportWorkerLost: () => Oc,
      reportWorkerStartTimeout: () => Cc,
      reportWorldgenGaveUp: () => fc,
      reportWorldgenLoadFailure: () => lc,
      resetCrashReports: () => Pk,
      setCrashBackend: () => Ok,
      setCrashScreen: () => Mk,
      setCrashTransport: () => ck,
      showCrash: () => ek,
      showJoinFailure: () => Yk,
      showUnsupported: () => Ek
    });
    var lT = cT(1082),
      MT = cT(298),
      KT = cT(2898),
      OT = cT(40562),
      yT = cT(4761),
      fT = cT(40569),
      xT = cT(3402),
      IT = cT(38593),
      AT = cT(159),
      CT = cT(694),
      jT = cT(150),
      vT = cT(3407),
      tT = cT(38879),
      hT = cT(1792),
      NT = cT(40542),
      QT = cT(40215),
      ST = cT(40497),
      DT = cT(40503),
      aT = cT(38928),
      FT = cT(3679),
      rT = cT(3684),
      PT = cT(40577),
      wT = cT(40599),
      mT = cT(40603),
      bT = cT(36674),
      zT = cT(3179),
      JT = cT(36077),
      oT = cT(40440),
      HT = cT(36089);
    const eT = "[bloxd-wasm-client]",
      GT = "coreErrors",
      VT = "wasmLoad",
      ET = "join",
      ZT = "leave",
      uT = "modelFeed",
      XT = "modelWorkerPool",
      dT = "textureNames",
      LT = "renderReload",
      RT = "previewAnimations",
      gT = "eventOverflow",
      UT = "builtInAnimations",
      YT = "texturePackFeed",
      BT = "firstView",
      WT = "mainThread",
      nT = 300,
      pT = 8;
    let iT = 0;
    const qT = new Set,
      sT = (TT, kT) => {
        const cT = yk[TT.kind];
        if (null === cT) return void Tk(TT, kT, Kk, null);
        const lT = (0, OT.e)(cT, TT.message, TT.code, TT.fatal);
        if (null !== lT) return void Tk(TT, kT, Kk, lT);
        const MT = Kk;
        Dk("Loki", (async () => {
          Tk(TT, kT, MT, await (0, OT.g)(cT, TT.message, TT.code))
        }))
      };

    function Tk(TT, kT, cT, MT) {
      const {
        kind: OT,
        code: yT,
        site: fT,
        fatal: xT,
        details: IT
      } = TT;
      if (!xT)
        if (null === MT || (0, KT.d)(MT.errorKind) || qT.has(MT.dedupe)) {
          if (iT >= pT) return;
          iT++
        } else qT.add(MT.dedupe);
      const AT = {
        ...IT,
        kind: OT,
        code: yT,
        site: fT,
        fatal: String(xT),
        backend: cT
      };
      null !== MT && (AT.errorKind = MT.errorKind, AT.fingerprint = MT.fingerprint), kT instanceof Error && "string" === typeof kT.stack && (AT.causeStack = kT.stack.slice(0, 2e3)), (0, lT.vt)(Nk(TT, kT), AT)
    }
    let kk = sT;

    function ck(TT) {
      const kT = kk;
      return kk = TT, kT
    }
    let lk = () => {};

    function Mk(TT) {
      const kT = lk;
      return lk = TT, kT
    }
    let Kk = "unpicked";

    function Ok(TT) {
      Kk = TT
    }
    const yk = {
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
      fk = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        mainStall: "wasm_load",
        gpuFallback: "wasm_load"
      },
      xk = new Set(["unstreamedLoad"]),
      Ik = new Set(["linkCensus"]);
    let Ak = !1;
    const Ck = 20,
      jk = new Map;
    let vk = 0,
      tk = 0;
    const hk = new Set;

    function Nk(TT, kT) {
      const cT = Object.assign(new Error(`${TT.code}: ${TT.message}`), {
        name: "WasmClientCrash",
        cause: null !== kT && void 0 !== kT ? kT : void 0
      });
      return kT instanceof Error && kT.stack && (cT.stack = kT.stack), cT
    }

    function Qk(TT) {
      var kT, lT;
      const {
        kind: MT,
        code: KT,
        site: OT,
        fatal: yT,
        message: fT,
        error: xT
      } = TT, IT = !1 !== TT.toTransport && !xk.has(MT), AT = !yT && IT && !Ik.has(MT), CT = {
        kind: MT,
        code: KT,
        site: OT,
        fatal: yT,
        message: fT,
        details: null !== (kT = TT.details) && void 0 !== kT ? kT : {}
      }, jT = `${KT}@${OT}${void 0===TT.instance?"":`#${TT.instance}`}${yT?"!":""}`, vT = (null !== (lT = jk.get(jT)) && void 0 !== lT ? lT : 0) + 1;
      if (jk.set(jT, vT), vT > 1 ? 0 === (vT & vT - 1) && Sk((() => {
          console.warn(`${eT} ${KT} at ${OT} reported ${vT} times`)
        })) : AT && vk >= Ck ? Sk((() => {
          console.warn(`${eT} ${MT} ${KT} at ${OT}: ${fT} (not sent: the session's ${Ck} went)`, CT.details, null !== xT && void 0 !== xT ? xT : "")
        })) : (AT && vk++, function(TT, kT, lT) {
          var MT, KT;
          const {
            kind: OT,
            code: yT,
            site: fT,
            fatal: xT,
            message: IT,
            details: AT
          } = TT;
          Sk((() => {
            (xT ? console.error : console.warn)(`${eT} ${OT} ${yT} at ${fT}: ${IT}`, AT, null !== kT && void 0 !== kT ? kT : "")
          }));
          const CT = fk[OT],
            jT = null !== (MT = null !== (KT = yk[OT]) && void 0 !== KT ? KT : CT) && void 0 !== MT ? MT : null;
          null !== jT && Dk("counts", (async () => {
            const {
              peekVisitSessionId: TT
            } = await Promise.resolve().then((() => cT(651)));
            if (null !== TT()) {
              const {
                reportCappedWasmFailure: TT,
                reportUncappedWasmFailure: kT,
                reportWasmFailure: lT
              } = await cT.e(207).then((() => cT(36069)));
              (Ik.has(OT) ? kT : void 0 === CT ? lT : TT)(jT, IT, yT), Ak = !0
            }
          }));
          lT && Sk((() => {
            kk(TT, kT)
          }))
        }(CT, xT, IT)), yT) {
        var tT;
        const kT = null !== (tT = TT.screen) && void 0 !== tT ? tT : {
          text: (0, bT.f)(CT, !0),
          reload: !0
        };
        Sk((() => {
          lk(kT)
        }))
      }
      return CT
    }

    function Sk(TT) {
      try {
        TT()
      } catch (kT) {
        try {
          console.warn(`${eT} could not send a report`, kT)
        } catch {}
      }
    }

    function Dk(TT, kT) {
      try {
        const cT = kT().catch((kT => {
          console.warn(`${eT} could not send the report to ${TT}`, kT)
        })).finally((() => {
          hk.delete(cT)
        }));
        hk.add(cT)
      } catch (cT) {
        console.warn(`${eT} could not send the report to ${TT}`, cT)
      }
    }
    async function ak(TT) {
      let kT;
      (0, OT.h)();
      const cT = new Promise((cT => {
        kT = setTimeout(cT, TT)
      }));
      await Promise.race([Fk(), cT]), clearTimeout(kT)
    }
    async function Fk() {
      if (await Promise.allSettled([...hk]), Ak) try {
        const {
          flushClientAnalyticsEvents: TT
        } = await Promise.resolve().then((() => cT(1514)));
        await TT()
      } catch (TT) {
        console.warn(`${eT} could not send the counts`, TT)
      }
    }
    async function rk() {
      for (; hk.size > 0;) await Promise.allSettled([...hk])
    }

    function Pk() {
      jk.clear(), vk = 0, Ak = !1, iT = 0, qT.clear(), tk = 0, (0, fT.r)()
    }

    function wk(TT, kT, cT, lT) {
      tk += kT;
      for (const {
          code: xT,
          detail: IT
        }
        of TT) {
        var MT, KT, OT;
        const TT = (0, yT.Vd)(xT),
          kT = (0, fT.c)(xT, IT),
          AT = null === lT || void 0 === lT ? void 0 : lT(xT, IT),
          CT = void 0 !== (null === kT || void 0 === kT ? void 0 : kT.gpuDetails),
          vT = CT ? null === (MT = (0, jT.q)()) || void 0 === MT ? void 0 : MT.renderer : void 0,
          tT = CT ? ` ${(0,fT.k)()}` : "",
          hT = Array.from([vT && `gpu ${(0,fT.u)(vT)}`, AT].filter(Boolean).join("; ")).slice(0, nT).join(""),
          NT = `core error ${TT}${null!==(KT=null===kT||void 0===kT?void 0:kT.words)&&void 0!==KT?KT:""}${tT}${hT?`: ${hT}`:""}`,
          QT = {
            errorCode: String(xT),
            detail: String(IT),
            droppedBefore: String(tk),
            wasmBuild: cT.wasm,
            clientVersion: cT.client,
            ...null === kT || void 0 === kT ? void 0 : kT.gpuDetails
          };
        null !== kT && (0, fT.q)(kT) ? Sk((() => {
          console.warn(`${eT} coreError CORE-${TT}: ${NT} (not sent: the session's render warnings of its kind went)`, QT)
        })) : Qk({
          kind: bk(xT, IT),
          code: `CORE-${TT}`,
          site: GT,
          fatal: !1,
          message: NT,
          details: QT,
          instance: null !== (OT = null === kT || void 0 === kT ? void 0 : kT.instance) && void 0 !== OT ? OT : mk(xT, IT)
        })
      }
    }

    function mk(TT, kT) {
      return TT === yT.E.RenderDeviceLost && 0 !== (kT & yT.O.RESTORE_UNHELD) ? "restoreUnheld" : void 0
    }

    function bk(TT, kT) {
      return TT === yT.E.JobsHeapGaveUp ? "meshHeap" : (0, fT.g)(TT, kT) ? "linkCensus" : "coreError"
    }

    function zk(TT) {
      return (0, JT.l)(TT instanceof oT.d ? TT.trap : TT, FT.z, FT.V)
    }
    const Jk = "declined=js";

    function Hk(TT) {
      return TT ? {
        labels: [Jk],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function ek(TT, kT, cT) {
      return Vk(TT, kT, cT, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function Gk(TT, kT, cT) {
      return Vk(TT, kT, cT, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function Vk(TT, kT, cT, lT, MT) {
      let {
        memoryDetails: KT = {},
        declined: OT = !1
      } = lT;
      const {
        code: yT,
        details: fT,
        message: xT
      } = (0, NT.E)(TT, kT), IT = [];
      Object.assign(fT, (0, HT.g)(TT.error)), null !== cT && (fT.trapKind = cT.kind, null !== cT.panic && (fT.panic = (0, JT.i)(cT.panic)), cT.refusedBytes > 0 && (fT.refusedAllocation = String(cT.refusedBytes)), IT.push((0, JT.m)(cT.kind, cT.refusedBytes)));
      const AT = Hk(OT);
      return Qk({
        kind: "crash",
        code: yT,
        site: TT.site,
        fatal: MT,
        message: [...IT, ...AT.labels, xT].join("; "),
        details: {
          ...fT,
          ...AT.details,
          ...KT
        },
        error: TT.error
      })
    }

    function Ek(TT, kT, cT) {
      return Qk({
        kind: "unsupported",
        code: kT,
        site: VT,
        fatal: !0,
        message: cT,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: TT,
          status: kT
        },
        screen: {
          text: (0, bT.o)(TT),
          reload: "download" === TT
        }
      })
    }

    function Zk(TT, kT, cT) {
      return Qk({
        kind: "unsupportedFallback",
        code: "blockedAfterLoss" === kT ? "blocked_after_loss" : "unsupported_js_fallback",
        site: VT,
        fatal: !1,
        message: cT,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: TT,
          status: "unsupported",
          decline: kT,
          fallback: "js"
        }
      })
    }
    const uk = "misdrawn_gpu_js_fallback";

    function Xk(TT, kT) {
      return Qk({
        kind: "gpuFallback",
        code: uk,
        site: VT,
        fatal: !1,
        message: `the renderer plays ${TT} on ${kT} worse than the JS client`,
        details: {
          gpuFamily: TT,
          backend: kT,
          fallback: "js"
        }
      })
    }

    function dk(TT) {
      Dk("counts", (async () => {
        await (0, CT.c)(TT), Ak = !0
      }))
    }

    function Lk(TT, kT, cT, lT) {
      const MT = Hk(lT);
      return Qk({
        kind: "unsupported",
        code: kT,
        site: VT,
        fatal: !1,
        message: [...MT.labels, cT].join("; "),
        details: {
          cause: TT,
          status: kT,
          fallback: "js",
          ...MT.details
        }
      })
    }

    function Rk() {
      const {
        code: TT,
        message: kT
      } = zT.d;
      return Qk({
        kind: "unstreamedLoad",
        code: TT,
        site: VT,
        fatal: !1,
        message: kT
      })
    }
    class gk extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function Uk(TT) {
      return TT instanceof ST.l ? 0 === TT.code ? "JOIN-matchmake" : `JOIN-${TT.code}` : TT instanceof ST.d ? 0 === TT.code ? `JOIN-${TT.stage}` : `JOIN-${TT.stage}-${TT.code}` : TT instanceof QT.e ? "JOIN-gameCode" : TT instanceof gk ? "JOIN-turnstilePage" : TT instanceof ST.w ? "JOIN-trafficCheck" : TT instanceof tT.f ? "JOIN-timeout" : "JOIN-network"
    }

    function Yk(TT, kT) {
      const cT = (0, HT.k)(TT),
        lT = {
          wasmBuild: kT.wasm,
          clientVersion: kT.client
        },
        MT = TT instanceof gk ? {
          text: (0, bT.k)(),
          reload: !1
        } : void 0,
        KT = (0, DT.f)(TT),
        OT = "expected" !== KT;
      return Qk({
        kind: "join",
        code: Uk(TT),
        site: ET,
        fatal: !0,
        message: cT,
        details: lT,
        error: TT,
        screen: MT,
        toTransport: OT,
        instance: KT
      })
    }

    function Bk(TT, kT, cT) {
      var lT;
      const MT = (0, DT.f)(TT),
        KT = {
          cause: (TT instanceof ST.d || TT instanceof ST.l) && null !== (lT = TT.serverText) && void 0 !== lT ? lT : "",
          sinceJoinStart: (0, vT.c)(cT.sinceJoinStartMs),
          game: cT.game,
          ...(0, vT.l)(),
          wasmBuild: kT.wasm,
          clientVersion: kT.client
        };
      return Qk({
        kind: "pageJoin",
        code: Uk(TT),
        site: ET,
        fatal: !1,
        message: (0, HT.k)(TT),
        details: KT,
        error: TT,
        toTransport: "unrecognised" === MT,
        instance: MT
      })
    }
    const Wk = {
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

    function nk(TT, kT) {
      let {
        unused: cT,
        answered: lT,
        heldMs: MT
      } = TT;
      const {
        code: KT,
        message: OT
      } = Wk[cT], yT = {
        unused: cT,
        answered: String(lT),
        heldMs: String(MT),
        wasmBuild: kT.wasm,
        clientVersion: kT.client
      };
      return Qk({
        kind: "seat",
        code: KT,
        site: ET,
        fatal: !1,
        message: OT,
        details: yT
      })
    }

    function pk(TT, kT, cT) {
      var lT;
      let MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (lT = TT.name) && void 0 !== lT ? lT : String(TT.code);
      const KT = {
          closeCode: String(TT.code),
          recognised: String(null !== TT.name),
          closeReason: cT.closeReason,
          sinceJoined: (0, vT.c)(cT.sinceJoinedMs),
          game: cT.game,
          ...(0, vT.l)(),
          wasmBuild: kT.wasm,
          clientVersion: kT.client
        },
        OT = null === TT.name && !(0, vT.g)(TT.code);
      return Qk({
        kind: "disconnect",
        code: MT,
        site: ZT,
        fatal: !1,
        message: "Left room",
        details: KT,
        toTransport: OT
      })
    }

    function ik(TT, kT) {
      const cT = {
        ...(0, xT.n)(TT),
        wasmBuild: kT.wasm,
        clientVersion: kT.client
      };
      return Qk({
        kind: "disconnect",
        code: `reconnect-${TT.reason}`,
        site: ET,
        fatal: !1,
        message: "Reconnect failed",
        details: cT
      })
    }

    function qk(TT) {
      return TT.error instanceof rT.c ? `MODEL-${TT.error.status}` : TT.error instanceof PT.k ? "MODEL-ring" : "MODEL-network"
    }

    function sk(TT, kT) {
      const cT = qk(TT),
        lT = `model file ${TT.file} ${TT.startup?"(startup) ":""}could not load`,
        MT = {
          file: String(TT.file),
          url: TT.url,
          wasmBuild: kT.wasm,
          clientVersion: kT.client
        };
      return Qk({
        kind: TT.startup ? "model" : "modelLate",
        code: cT,
        site: uT,
        fatal: TT.startup,
        message: lT,
        details: MT,
        error: TT.error
      })
    }

    function Tc(TT, kT) {
      const cT = {
        wasmBuild: kT.wasm,
        clientVersion: kT.client
      };
      return Qk({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: XT,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: cT,
        error: TT
      })
    }

    function kc(TT, kT, cT) {
      const lT = {
        delayMs: String(kT),
        wasmBuild: cT.wasm,
        clientVersion: cT.client
      };
      TT instanceof rT.c && (lT.status = String(TT.status));
      return Qk({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: XT,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: lT,
        error: TT
      })
    }

    function cc(TT, kT) {
      const cT = {
        wasmBuild: kT.wasm,
        clientVersion: kT.client
      };
      return Qk({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: XT,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: cT,
        error: TT
      })
    }

    function lc(TT, kT) {
      const cT = {
        wasmBuild: kT.wasm,
        clientVersion: kT.client
      };
      return Qk({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: NT.B,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: cT,
        error: TT
      })
    }

    function Mc(TT, kT) {
      const cT = {
        wasmBuild: kT.wasm,
        clientVersion: kT.client
      };
      return Qk({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: YT,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: cT,
        error: TT
      })
    }

    function Kc(TT, kT) {
      const {
        frames: cT,
        acks: lT,
        mask: MT,
        outcome: KT
      } = TT, OT = {
        frames: String(cT),
        acks: String(lT),
        mask: String(MT),
        outcome: null !== KT && void 0 !== KT ? KT : "resynced",
        wasmBuild: kT.wasm,
        clientVersion: kT.client
      };
      return Qk({
        kind: "recovered",
        code: "rejoined" === KT ? "CORE-eventOverflowRejoin" : "failed" === KT ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: gT,
        fatal: !1,
        message: `the event buffer refused records in ${cT} frames`,
        details: OT
      })
    }

    function Oc(TT, kT, cT) {
      return Qk({
        kind: "recovered",
        code: "CORE-workerLost",
        site: TT,
        fatal: !1,
        message: `a ${TT} worker was lost`,
        details: {
          reason: kT,
          wasmBuild: cT.wasm,
          clientVersion: cT.client
        }
      })
    }

    function yc(TT, kT, cT) {
      const lT = {
        wasmBuild: cT.wasm,
        clientVersion: cT.client
      };
      return Qk({
        kind: "recovered",
        code: TT,
        site: NT.p,
        fatal: !1,
        message: kT,
        details: lT
      })
    }

    function fc(TT, kT) {
      const cT = {
        lastReason: TT,
        wasmBuild: kT.wasm,
        clientVersion: kT.client
      };
      return Qk({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: NT.B,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: cT
      })
    }

    function xc(TT, kT, cT) {
      return Qk({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: NT.l,
        fatal: !1,
        message: (0, aT.m)(TT) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: TT,
          ...kT,
          wasmBuild: cT.wasm,
          clientVersion: cT.client
        }
      })
    }

    function Ic(TT, kT, cT, lT) {
      var MT, KT;
      const OT = (0, fT.n)(),
        yT = {
          game: TT,
          cause: kT,
          census: null === cT ? "none" : JSON.stringify(cT),
          gpu: null !== (MT = null === (KT = (0, jT.q)()) || void 0 === KT ? void 0 : KT.renderer) && void 0 !== MT ? MT : "",
          renderWarned: String(OT),
          browser: (0, fT.k)(),
          wasmBuild: lT.wasm,
          clientVersion: lT.client
        },
        xT = `first view drew no whole terrain in ${wT.f/1e3} s, ${kT}${OT?", render warned":""}`;
      return Qk({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: BT,
        fatal: !1,
        message: xT,
        details: yT
      })
    }

    function Ac(TT, kT, cT) {
      var lT, KT, OT;
      const yT = null !== (lT = (0, MT.l)(null !== (KT = null === (OT = (0, jT.m)()) || void 0 === OT ? void 0 : OT.renderer) && void 0 !== KT ? KT : null, (0, jT.j)())) && void 0 !== lT ? lT : "unknown",
        xT = null === kT ? "untimed" : `${Math.round(kT)} ms`,
        IT = `frames stalled, gpu ${(0,fT.u)(yT)}, blocking ${xT}, drawn ${Math.round(TT)} ms apart`,
        AT = {
          gpuModel: yT,
          wasmBuild: cT.wasm,
          clientVersion: cT.client
        };
      return Qk({
        kind: "mainStall",
        code: "CORE-mainStall",
        site: WT,
        fatal: !1,
        message: IT,
        details: AT
      })
    }

    function Cc(TT, kT, cT) {
      return Qk({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: TT,
        fatal: !1,
        message: `a ${TT} worker did not start`,
        details: {
          waitedMs: String(Math.round(kT)),
          wasmBuild: cT.wasm,
          clientVersion: cT.client
        }
      })
    }

    function jc(TT, kT, cT) {
      return Qk({
        kind: "recovered",
        code: "CORE-replayFault",
        site: TT,
        fatal: !1,
        message: `the replay's ${TT} failed`,
        details: {
          wasmBuild: cT.wasm,
          clientVersion: cT.client
        },
        error: kT
      })
    }
    const vc = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function tc(TT, kT, cT) {
      const lT = "lost" === kT && void 0 !== cT ? ` (${cT})` : "";
      return `the ${TT} ${vc[kT]}${lT}`
    }
    const hc = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };

    function Nc(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now();
      const MT = null === cT.boundAtMs ? "unbound" : `up${(0,IT.h)(lT-cT.boundAtMs)}`,
        KT = null === cT.adapter ? "no adapter" : (0, IT.n)(cT.adapter),
        OT = `${(0,hT.k)()?"hidden":"visible"} ${MT} ${KT}${!0===cT.indirectHangs?" ih":""}`;
      if ("pipeline_failed" === TT) return `${TT} ${OT}`;
      const yT = null === kT || void 0 === kT ? void 0 : kT.message;
      return `${kT instanceof hT.h?"timeout":(0,IT.o)("frames_refused"===TT,"string"===typeof yT?yT:"")} ${OT}`
    }
    const Qc = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function Sc(TT, kT, lT) {
      var KT, OT, yT, xT, CT;
      let {
        cause: jT = "lost",
        error: vT,
        context: tT = hc,
        session: hT = Qc
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const NT = Nc(jT, vT, tT),
        QT = {
          losses: String(kT),
          cause: jT,
          detail: NT,
          vendor: null !== (KT = null === (OT = tT.adapter) || void 0 === OT ? void 0 : OT.vendor) && void 0 !== KT ? KT : "",
          architecture: null !== (yT = null === (xT = tT.adapter) || void 0 === xT ? void 0 : xT.architecture) && void 0 !== yT ? yT : "",
          indirectHangs: String(tT.indirectHangs),
          samples: String(hT.samples),
          sunShadows: String(hT.sunShadows),
          renderDistance: String(hT.renderDistance),
          gpuFamily: null !== (CT = (0, MT.e)()) && void 0 !== CT ? CT : "",
          browser: (0, fT.k)(),
          siteUsed: AT.u,
          wasmBuild: lT.wasm,
          clientVersion: lT.client
        },
        ST = tc(TT, jT),
        DT = Qk({
          kind: "recovered",
          code: "CORE-renderLost",
          site: LT,
          fatal: !1,
          message: ST,
          details: QT,
          error: vT
        });
      return Dk("ga", (async () => {
        const {
          logError: kT
        } = await Promise.resolve().then((() => cT(2873))), lT = `${IT.e["webgpu"===TT?"WebGPU":"WebGL2"]}\n Error: ${NT}`;
        kT("warning", lT), kT("error", lT)
      })), DT
    }

    function Dc(TT, kT) {
      var cT, lT;
      const MT = null === TT.name ? "TEXTURE-sources" : null === TT.url ? "TEXTURE-nourl" : TT.error instanceof mT.c ? `TEXTURE-${TT.error.status}` : "TEXTURE-network",
        KT = null === TT.name ? "terrain textures could not load" : `terrain texture ${TT.name} could not load`,
        OT = {
          texture: null !== (cT = TT.name) && void 0 !== cT ? cT : "",
          url: null !== (lT = TT.url) && void 0 !== lT ? lT : "",
          wasmBuild: kT.wasm,
          clientVersion: kT.client
        };
      return Qk({
        kind: "terrainTexture",
        code: MT,
        site: NT.A,
        fatal: !1,
        message: KT,
        details: OT,
        error: TT.error
      })
    }
    const ac = {
      previewAnimations: {
        site: RT,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: UT,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function Fc(TT, kT, cT, lT) {
      const {
        site: MT,
        prefix: KT,
        name: OT
      } = ac[TT], {
        stage: yT,
        error: fT
      } = cT;
      return Qk({
        kind: TT,
        code: "decode" === yT ? null === fT ? `${KT}-decode` : `${KT}-trap` : fT instanceof rT.c ? `${KT}-${fT.status}` : `${KT}-network`,
        site: MT,
        fatal: !1,
        message: "decode" === yT ? `${OT} did not decode` : `${OT} could not load`,
        details: {
          url: kT,
          wasmBuild: lT.wasm,
          clientVersion: lT.client
        },
        error: fT
      })
    }
    const rc = "staleBuild";

    function Pc(TT, kT, cT) {
      const lT = {
          failedSite: TT.site,
          url: TT.url,
          from: TT.from,
          sameBuild: String(TT.from === kT),
          reloadMs: String(Math.max(0, Date.now() - TT.at)),
          wasmBuild: cT.wasm,
          clientVersion: cT.client
        },
        MT = `reloaded into a newer build after ${TT.site} failed to load: ${TT.error}`;
      return Qk({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: rc,
        fatal: !1,
        message: MT,
        details: lT
      })
    }
  },
  40599: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT,
      f: () => MT,
      i: () => OT
    });
    var lT = cT(4769);
    const MT = 3e4;
    class KT {
      constructor(TT) {
        this.Yj = TT, this.waitedMs = 0, this.lastMs = null
      }
      frame(TT, kT) {
        if (kT) return !0;
        const cT = null === this.lastMs ? 0 : TT - this.lastMs;
        return this.lastMs = TT, cT <= 900 && (this.waitedMs += cT), !(this.waitedMs < MT) && (this.Yj(), !0)
      }
    }

    function OT(TT, kT) {
      return 0 === (TT & lT.H.ChunkStored) ? "no chunk stored" : null === kT ? "no frame drawn" : 0 === kT.terrainParts ? "no terrain parts" : kT.terrainCompiling > 0 ? "terrain compiling" : "parts not drawn"
    }
  },
  4755: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => OT,
      g: () => KT,
      k: () => MT
    });
    var lT = cT(4761);

    function MT(TT) {
      return "none" !== TT
    }

    function KT(TT, kT) {
      if (!TT) return "none";
      switch (kT) {
        case lT.$.Drawn:
          return "drawn";
        case lT.$.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function OT(TT) {
      return "drawn" === TT
    }
  },
  40215: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT,
      f: () => NT,
      g: () => tT,
      j: () => hT,
      m: () => CT,
      p: () => jT,
      q: () => IT,
      u: () => AT,
      v: () => vT
    });
    class lT extends Error {
      constructor(TT) {
        super(`the join's code did not load: ${TT instanceof Error?TT.message:String(TT)}`, {
          cause: TT
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === TT || void 0 === TT ? void 0 : TT.request
      }
    }
    let MT = null,
      KT = null,
      OT = null;
    const yT = [];
    let fT = null;

    function xT(TT, kT) {
      try {
        TT(kT)
      } catch (cT) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", cT)
      }
    }

    function IT() {
      return fT
    }

    function AT(TT) {
      yT.push(TT), null !== fT && xT(TT, fT)
    }

    function CT(TT) {
      return MT ??= Promise.all([cT.e(70), cT.e(95), cT.e(215), cT.e(75), cT.e(216), cT.e(189), cT.e(94), cT.e(235), cT.e(261), cT.e(187), cT.e(263), cT.e(199), cT.e(186), cT.e(200), cT.e(136), cT.e(86), cT.e(114), cT.e(239), cT.e(54)]).then((() => cT(42124))).then((kT => {
        kT.loadAudio(TT), fT = kT;
        for (const TT of yT) xT(TT, kT);
        return kT
      })).catch((TT => {
        throw MT = null, TT
      })), MT
    }
    async function jT(TT, kT) {
      try {
        const cT = await CT(TT);
        await cT.loadClientGame(kT)
      } catch (cT) {
        throw new lT(cT)
      }
    }

    function vT(TT, kT) {
      KT = {
        running: TT,
        shell: kT
      }
    }

    function tT() {
      return OT
    }
    async function hT(TT) {
      const kT = KT;
      if ((null === kT || void 0 === kT ? void 0 : kT.running) !== TT) throw new Error("the core's session has ended");
      const cT = await CT(kT.shell.audio).catch((TT => {
        throw new lT(TT)
      }));
      if (null !== OT) return OT;
      if (KT !== kT || TT.isStopped) throw new Error("the core stopped while the game code loaded");
      if (OT = cT.startGameHost(TT, kT.shell), null === OT) throw new Error("the core's shared tables didn't read, so the game can't start");
      return OT
    }

    function NT() {
      null !== OT && (null !== fT ? fT.endGameHost(OT) : OT.closeGame()), OT = null, KT = null
    }
  },
  40497: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => xT,
      e: () => KT,
      h: () => OT,
      j: () => MT,
      l: () => jT,
      o: () => IT,
      r: () => fT,
      t: () => CT,
      w: () => AT,
      z: () => yT
    });
    var lT = cT(1799);
    const MT = new Uint8Array([12]),
      KT = 2e3,
      OT = 257;

    function yT(TT) {
      const kT = new Uint8Array(4);
      return new DataView(kT.buffer).setUint32(0, TT, !0), kT
    }
    class fT extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class xT extends Error {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(TT), this.stage = kT, this.code = cT, this.serverText = lT, this.name = "JoinError"
      }
    }
    class IT extends Error {
      constructor(TT) {
        super(TT), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class AT extends Error {
      constructor(TT) {
        super((0, lT.f)(TT), {
          cause: TT
        }), this.name = "TrafficCheckError"
      }
    }
    class CT extends Error {
      constructor(TT, kT, cT) {
        super(TT, {
          cause: cT
        }), this.networkLost = kT, this.name = "SeatRequestError"
      }
    }
    class jT extends Error {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(TT), this.code = kT, this.serverText = cT, this.name = "MatchmakeError"
      }
    }
  },
  40503: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => CT,
      f: () => AT
    });
    var lT = cT(2623),
      MT = cT(3407),
      KT = cT(38879),
      OT = cT(40494),
      yT = cT(40497),
      fT = cT(40505);
    const xT = "seat reservation expired.",
      IT = "early_leave";

    function AT(TT) {
      if (TT instanceof KT.f) return "expected";
      if (TT instanceof yT.t) return TT.networkLost ? "expected" : "unrecognised";
      if (TT instanceof yT.d) {
        if ("closed" === TT.stage && (0 === TT.code || (0, MT.g)(TT.code))) return "expected";
        if ("roomError" === TT.stage && (TT.serverText === xT || TT.serverText === IT)) return "expected"
      }
      return TT instanceof yT.d || TT instanceof yT.l ? null === (0, OT.n)(TT.code).name ? "unrecognised" : "known" : (0, lT.f)(TT) ? "expected" : TT instanceof yT.w || TT instanceof fT.e ? "known" : "unrecognised"
    }

    function CT(TT) {
      return TT instanceof KT.f ? "timedOut" : "expected" !== AT(TT) || (0, lT.f)(TT) || TT instanceof yT.d && 1001 === TT.code ? void 0 : "failed"
    }
  },
  38928: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => wT,
      d: () => mT,
      j: () => aT,
      m: () => AT,
      n: () => FT,
      q: () => NT,
      u: () => PT
    });
    var lT = cT(36085),
      MT = cT(36299);
    const KT = 64 * lT.d,
      OT = 40 * lT.g,
      yT = 36 * lT.g,
      fT = 20 * lT.g,
      xT = 2 * lT.g,
      IT = 5 * lT.g;

    function AT(TT) {
      return "footprint" !== TT
    }
    const CT = 2 * lT.g,
      jT = 4 * lT.g,
      vT = 35 * lT.g + CT + jT,
      tT = 6.5 * lT.g,
      hT = 132.5 * lT.d;

    function NT(TT) {
      const kT = tT + (0, MT.n)(TT) + TT * hT;
      return Math.ceil((2 * vT + kT) / KT) * KT
    }
    const QT = NT(MT.d),
      ST = (lT.g, lT.g, lT.g, {
        targetBytes: OT,
        leastBytes: fT
      }),
      DT = {
        targetBytes: yT,
        leastBytes: fT
      };

    function aT(TT) {
      return {
        targetBytes: TT,
        leastBytes: 0
      }
    }

    function FT(TT) {
      return TT >= MT.d ? ST : DT
    }
    const rT = 2 * KT;

    function PT(TT, kT, cT) {
      return TT + kT + rT > (null !== cT && void 0 !== cT ? cT : QT)
    }
    const wT = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? TT => {
        requestIdleCallback(TT)
      } : null
    };
    class mT {
      constructor(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wT;
        this.memory = TT, this.readPeakStoredChunks = kT, this.onError = cT, this.clock = lT, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(TT, kT, cT) {
        this.shedding = {
          shed: TT,
          Yj: kT,
          readDistanceInUse: cT
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
        return PT(this.memory.memoryBytes(), TT, this.ceilingBytes)
      }
      reserveAtJoin(TT) {
        let {
          targetBytes: kT,
          leastBytes: cT
        } = TT;
        const lT = this.memory.memoryBytes(),
          MT = lT + cT,
          KT = Math.max(kT + (this.ballastOn() ? IT : 0), MT),
          OT = this.call((() => this.memory.reserveUpFront(KT) ? "target" : KT > MT && this.memory.reserveUpFront(MT) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== OT) {
          const TT = "least" === OT ? `took ${MT} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${KT} bytes was refused at ${lT} bytes; ${TT}`)
        }
        return this.joinReserveTaken = OT, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== OT && this.shedFor("joinReserve"), "none" !== OT
      }
      afterFrame() {
        if (this.stopped) return;
        const TT = this.clock.now(),
          kT = null !== this.stepsHeldUntil && TT >= this.stepsHeldUntil;
        if (kT && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && TT >= this.ballastCheckAt && (this.takeBallast(TT), this.stopped)) return;
        const cT = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          lT = kT && "now" === cT ? "none" : cT,
          {
            requestIdle: MT
          } = this.clock;
        "now" === lT || null !== this.pendingSince && TT - this.pendingSince >= 500 ? this.step() : "idle" === lT && null === this.pendingSince && (null === MT ? this.step() : (this.pendingSince = TT, MT((() => {
          null !== this.pendingSince && this.step()
        })))), TT - this.statsAt >= 1e3 && (this.statsAt = TT, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var TT, kT;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (kT = this.shedding.readDistanceInUse()) && void 0 !== kT ? kT : this.distanceInUse);
          null === (TT = this.footprint) || void 0 === TT || TT.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(TT, kT) {
        this.noteWorker(`Mesh${TT}`, kT)
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
      noteWorker(TT, kT) {
        const cT = this.workers.get(TT);
        null !== cT && void 0 !== cT && cT.gone && (this.replacedRefusals.reserves += cT.stats.reservesRefused, this.replacedRefusals.allocations += cT.stats.allocationsRefused), this.workers.set(TT, {
          stats: kT,
          gone: !1
        })
      }
      workerGone(TT) {
        const kT = this.workers.get(TT);
        kT && (kT.gone = !0)
      }
      details() {
        var TT, kT;
        const cT = {
          wasmMemoryNow: `${(0,lT.m)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (cT.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (cT.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const MT = this.main;
        if (MT) {
          cT.wasmMemoryMain = bT(MT);
          const TT = Math.max(0, MT.peakLiveBytes - this.ballastPeakBytes),
            kT = 0 === this.peakStoredChunks ? "-" : (TT / this.peakStoredChunks / lT.d).toFixed(1);
          cT.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${kT} KiB`
        }
        for (const [lT, {
            stats: OT,
            gone: yT
          }] of this.workers) cT[`wasmMemory${lT}`] = bT(OT) + (yT ? " (gone)" : "");
        const KT = null !== (TT = null === (kT = this.footprint) || void 0 === kT ? void 0 : kT.describe()) && void 0 !== TT ? TT : null;
        return null !== KT && (cT.wasmMemoryFootprint = KT), cT
      }
      pageKillSnapshot() {
        var TT, kT, cT, MT, KT;
        let OT = (null !== (TT = null === (kT = this.main) || void 0 === kT ? void 0 : kT.reservesRefused) && void 0 !== TT ? TT : 0) + this.replacedRefusals.reserves,
          yT = (null !== (cT = null === (MT = this.main) || void 0 === MT ? void 0 : MT.allocationsRefused) && void 0 !== cT ? cT : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: lT
          }
          of this.workers.values()) OT += lT.reservesRefused, yT += lT.allocationsRefused;
        return {
          wasmMainMiB: Number((0, lT.m)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, lT.m)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: OT,
          refusedAllocations: yT,
          sheds: this.sheds,
          ...null === (KT = this.footprint) || void 0 === KT ? void 0 : KT.snapshot()
        }
      }
      workersMemoryBytes() {
        let TT = 0;
        for (const {
            stats: kT,
            gone: cT
          }
          of this.workers.values()) TT += cT ? 0 : kT.memoryBytes;
        return TT
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(xT)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(TT) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = TT + 1e3;
        const kT = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, kT)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(TT) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${TT}: frames grow on demand from here`)
      }
      shedFor(TT) {
        const {
          shedding: kT
        } = this;
        if (null === kT) return;
        this.pendingSince = null;
        const cT = this.call((() => kT.shed(TT)), null);
        this.stopped || (null !== cT ? (this.sheds++, this.shedCap = cT, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), kT.Yj(TT, this.sheds, this.details())) : AT(TT) && this.stopSteps("nothing is left to shed"))
      }
      call(TT, kT) {
        if (this.stopped) return kT;
        try {
          return TT()
        } catch (cT) {
          return this.stop(), this.onError(cT), kT
        }
      }
    }

    function bT(TT) {
      const kT = (TT, kT) => `${TT}/${(0,lT.m)(kT)}`;
      return `memory ${(0,lT.m)(TT.memoryBytes)} live ${(0,lT.m)(TT.liveBytes)} peak ${(0,lT.m)(TT.peakLiveBytes)} unused ${(0,lT.m)(TT.unusedBytes)} ceiling ${(0,lT.m)(TT.ceilingBytes)} MiB; grows upFront ${kT(TT.grows.upFront,TT.grownBytes.upFront)} ahead ${kT(TT.grows.ahead,TT.grownBytes.ahead)} inFrame ${kT(TT.grows.onDemandInFrame,TT.grownBytes.onDemandInFrame)} other ${kT(TT.grows.onDemand,TT.grownBytes.onDemand)}; refused reserves ${TT.reservesRefused} allocations ${TT.allocationsRefused}`
    }
  },
  40577: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => fT,
      h: () => xT,
      i: () => jT,
      k: () => AT
    });
    var lT = cT(3684),
      MT = cT(4761),
      KT = cT(40583),
      OT = cT(40590),
      yT = cT(36089);
    const fT = 395,
      xT = 2147483648,
      IT = new Uint8Array(0);
    class AT extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class CT extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class jT {
      constructor(TT, kT, cT) {
        var lT, MT, OT, yT;
        let fT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = TT, this.build = kT, this.onFailure = cT, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.wj = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (lT = fT.fetchFile) && void 0 !== lT ? lT : TT => (0, KT.h)(TT), this.onWritten = null !== (MT = fT.onWritten) && void 0 !== MT ? MT : null, this.onTaken = null !== (OT = fT.onTaken) && void 0 !== OT ? OT : null, this.onPackFileFailed = null !== (yT = fT.onPackFileFailed) && void 0 !== yT ? yT : null, this.startupLeft = new Set(TT.startup);
        for (const KT of TT.startup) this.request(KT)
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
        const kT = this.pending.get(TT);
        if (!0 === (null === kT || void 0 === kT ? void 0 : kT.ask)) return;
        const cT = this.Ij(TT, !0);
        cT.recheck = void 0 !== kT;
        const lT = this.drawn.get(TT);
        if (void 0 !== lT) return cT.ty = !0, cT.recheck = !0, void this.fetch(TT, cT, lT);
        this.fetchWanted(TT, cT)
      }
      async refresh() {
        const TT = ++this.refreshes,
          kT = new Set;
        for (const OT of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const TT of OT) 0 === (TT & KT.e) && kT.add(TT);
        const cT = [...kT];
        let lT;
        try {
          lT = await Promise.all(cT.map((TT => this.wanted(TT))))
        } catch {
          return null
        }
        if (TT !== this.refreshes) return null;
        const MT = {
          resent: 0,
          refetched: 0,
          delivered: cT.filter((TT => this.drawn.has(TT))).length
        };
        return cT.forEach(((TT, kT) => {
          const {
            url: cT,
            inPlaceOf: KT
          } = lT[kT], OT = this.pending.get(TT);
          if (void 0 !== OT) {
            if (OT.ty || void 0 === OT.url) return void(OT.recheck = !0);
            if (OT.url === cT) return;
            MT.refetched++;
            const kT = this.Ij(TT, OT.ask);
            return kT.recheck = OT.recheck, void this.fetch(TT, kT, cT, KT)
          }
          const yT = this.written.get(TT);
          void 0 === yT ? this.drawn.get(TT) !== (null !== cT && void 0 !== cT ? cT : void 0) && (MT.resent++, this.fetch(TT, this.Ij(TT, !1), cT, KT)) : yT.url !== (null !== cT && void 0 !== cT ? cT : "") && (yT.attempt.recheck = !0)
        })), MT
      }
      taken(TT, kT) {
        const cT = new Set,
          lT = new Set;
        for (const MT of Array.from(kT)) 0 === (MT & xT) ? cT.add(MT) : lT.add((MT & ~xT) >>> 0);
        for (const [MT, KT] of this.written) KT.seq > TT || (this.written.delete(MT), cT.has(KT.seq) ? this.refusedFile(MT, KT) : this.takenFile(MT, KT, !KT.empty && !lT.has(KT.seq)))
      }
      takenFile(TT, kT, cT) {
        const {
          attempt: lT
        } = kT;
        if (cT) {
          var MT;
          this.drawn.set(TT, kT.url), this.undrawn.delete(TT), void 0 !== lT.inPlaceOf ? this.refusedPack.set(TT, lT.inPlaceOf) : lT.ty || this.refusedPack.delete(TT), null === (MT = this.onTaken) || void 0 === MT || MT.call(this, TT, !0);
          const cT = this.pending.get(TT);
          if (!0 === (null === cT || void 0 === cT ? void 0 : cT.ty) && cT.url !== kT.url) {
            const cT = this.Ij(TT, !0);
            cT.ty = !0, cT.recheck = !0, this.fetch(TT, cT, kT.url)
          }
        } else {
          var KT;
          this.drawn.has(TT) || this.undrawn.add(TT), null === (KT = this.onTaken) || void 0 === KT || KT.call(this, TT, !1)
        }
        lT.recheck && this.resendIfChanged(TT)
      }
      refusedFile(TT, kT) {
        var cT, lT;
        if (null === (cT = this.onTaken) || void 0 === cT || cT.call(this, TT, !1), this.refusedPack.set(TT, kT.url), this.pending.has(TT)) return void(null === (lT = this.onPackFileFailed) || void 0 === lT || lT.call(this, TT, vT(kT.url)));
        const MT = this.Ij(TT, kT.attempt.ask);
        MT.recheck = kT.attempt.recheck, this.afterRefusal(TT, MT, kT.url)
      }
      async afterRefusal(TT, kT, cT) {
        var lT;
        let MT;
        try {
          MT = await this.wanted(TT)
        } catch (KT) {
          return void(this.pending.get(TT) === kT && this.giveUp(TT, kT, cT, KT))
        }
        this.pending.get(TT) === kT && (MT.inPlaceOf !== cT ? kT.ask || (null !== (lT = MT.url) && void 0 !== lT ? lT : void 0) !== this.drawn.get(TT) ? this.fetch(TT, kT, MT.url, MT.inPlaceOf) : this.pending.delete(TT) : this.fallBack(TT, kT, cT, vT(cT)))
      }
      Ij(TT, kT) {
        const cT = {
          url: void 0,
          ask: kT,
          ty: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(TT, cT);
        for (let lT = this.ready.length - 1; lT >= 0; lT--) this.ready[lT].file === TT && this.ready.splice(lT, 1);
        return cT
      }
      async wanted(TT) {
        const kT = await this.files.url(TT);
        return null !== kT && this.refusedPack.get(TT) === kT ? {
          url: await this.files.shippedUrl(TT),
          inPlaceOf: kT
        } : {
          url: kT,
          inPlaceOf: void 0
        }
      }
      fetchWanted(TT, kT) {
        const cT = this.files.url(TT);
        cT instanceof Promise ? cT.then((cT => {
          this.fetchFound(TT, kT, cT)
        }), (cT => {
          this.pending.get(TT) === kT && this.giveUp(TT, kT, "", cT)
        })) : this.fetchFound(TT, kT, cT)
      }
      fetchFound(TT, kT, cT) {
        null !== cT && this.refusedPack.get(TT) === cT ? Promise.resolve(this.files.shippedUrl(TT)).then((lT => {
          this.fetch(TT, kT, lT, cT)
        }), (lT => {
          this.pending.get(TT) === kT && this.giveUp(TT, kT, cT, lT)
        })) : this.fetch(TT, kT, cT)
      }
      fetch(TT, kT, cT, lT) {
        this.pending.get(TT) === kT && (kT.url = cT, kT.inPlaceOf = lT, null !== cT ? this.load(TT, kT, cT) : this.buildFile(TT, kT, "", IT))
      }
      load(TT, kT, cT) {
        const lT = this.wj.get(TT);
        (null === lT || void 0 === lT ? void 0 : lT.url) !== cT ? this.fetchFile(cT).then((lT => {
          var MT, KT;
          this.pending.get(TT) === kT && (this.keptTotal += lT.byteLength - (null !== (MT = null === (KT = this.wj.get(TT)) || void 0 === KT ? void 0 : KT.glb.byteLength) && void 0 !== MT ? MT : 0), this.wj.set(TT, {
            url: cT,
            glb: lT
          }), this.buildFile(TT, kT, cT, lT))
        }), (lT => {
          this.pending.get(TT) === kT && this.fallBack(TT, kT, cT, lT)
        })) : this.buildFile(TT, kT, cT, lT.glb)
      }
      buildFile(TT, kT, cT, lT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const OT = lT.byteLength > 0 && (0, KT.l)(cT) ? (TT | KT.c) >>> 0 : TT;
        this.queueRecord(TT, kT, cT, lT, this.build(OT, lT), MT)
      }
      queueRecord(TT, kT, cT, lT, KT, yT) {
        KT.then((KT => {
          if (this.pending.get(TT) !== kT) return;
          if (MT.p + (0, MT.ke)(KT.byteLength) > MT.zc) return void this.ringRefused(TT, kT, cT, new AT(`${tT(cT)}'s record is ${KT.byteLength-OT.e} bytes, past the cmd ring's ${MT.zc}`), yT);
          const fT = {
            file: TT,
            url: cT,
            payload: KT,
            glb: lT,
            attempt: kT
          };
          yT ? this.ready.unshift(fT) : this.ready.push(fT)
        }))
      }
      async fallBack(TT, kT, cT, lT) {
        var MT;
        let KT = null,
          OT = lT;
        try {
          KT = await this.files.shippedUrl(TT)
        } catch (yT) {
          OT = yT
        }
        this.pending.get(TT) === kT && (null !== KT && KT !== cT ? (null === (MT = this.onPackFileFailed) || void 0 === MT || MT.call(this, TT, lT), kT.ask || this.drawn.get(TT) !== KT ? (kT.url = KT, kT.inPlaceOf = cT, this.load(TT, kT, KT)) : this.pending.delete(TT)) : this.giveUp(TT, kT, cT, OT))
      }
      ringRefused(TT, kT, cT, lT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, KT.l)(cT) ? this.fallBack(TT, kT, cT, lT): this.giveUp(TT, kT, cT, lT, MT)
      }
      giveUp(TT, kT, cT, MT) {
        let KT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: TT,
          url: tT(cT),
          error: MT,
          startup: this.startupLeft.has(TT)
        }), kT.ask || !this.drawn.has(TT) ? (0, lT.Z)(MT) ? this.queueRecord(TT, kT, cT, IT, Promise.resolve((0, OT.l)(TT, (0, yT.k)(MT))), KT) : this.buildFile(TT, kT, cT, IT, KT) : this.pending.delete(TT)
      }
      async resendIfChanged(TT) {
        var kT;
        if (0 !== (TT & KT.e)) return;
        let cT;
        try {
          cT = await this.wanted(TT)
        } catch {
          return
        }(null !== (kT = cT.url) && void 0 !== kT ? kT : void 0) === this.drawn.get(TT) || this.pending.has(TT) || this.written.has(TT) || this.fetch(TT, this.Ij(TT, !1), cT.url, cT.inPlaceOf)
      }
      drain(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === TT) return;
        let cT = 0,
          lT = 0;
        for (; lT < this.ready.length && cT < 262144;) {
          const yT = this.ready[lT];
          if (this.written.has(yT.file)) {
            lT++;
            continue
          }
          const IT = this.nextSeq;
          new DataView(yT.payload.buffer, yT.payload.byteOffset, yT.payload.byteLength).setUint32(OT.h, IT, !0);
          const CT = yT.attempt.ty && yT.glb.byteLength > 0 && this.drawn.get(yT.file) === yT.url;
          if (TT(fT, CT ? 1 : 0, yT.payload)) {
            if (this.nextSeq = IT >= xT - 1 ? 1 : IT + 1, this.ready.splice(lT, 1), cT += yT.payload.byteLength, this.pending.delete(yT.file), this.startupLeft.delete(yT.file), this.written.set(yT.file, {
                seq: IT,
                url: yT.url,
                empty: 0 === yT.glb.byteLength,
                attempt: yT.attempt
              }), yT.glb.byteLength > 0) try {
              var MT;
              null === (MT = this.onWritten) || void 0 === MT || MT.call(this, yT.file, yT.glb)
            } catch (KT) {
              console.warn("ModelFeed: reading the file's images failed", KT)
            }
          } else {
            if (null === kT || 0 === yT.glb.byteLength || kT(yT.payload.byteLength)) return;
            this.ready.splice(lT, 1);
            const TT = new AT(`${tT(yT.url)}'s record is ${yT.payload.byteLength-OT.e} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(yT.file, yT.attempt, yT.url, TT, !0)
          }
        }
      }
    }

    function vT(TT) {
      return new CT(`presentation refused ${tT(TT)}`)
    }

    function tT(TT) {
      return TT.startsWith("data:") ? `${TT.slice(0,Math.min(Math.max(TT.indexOf(","),5),64))},...` : TT
    }
  },
  40583: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => OT,
      e: () => KT,
      h: () => IT,
      l: () => yT,
      p: () => xT,
      q: () => fT
    });
    var lT = cT(3684),
      MT = cT(3146);
    const KT = 2147483648,
      OT = 1073741824;

    function yT(TT) {
      return TT.startsWith("data:")
    }

    function fT(TT) {
      let {
        onTableFailed: kT,
        packUrl: cT
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const lT = xT();
      lT.catch((TT => {
        null === kT || void 0 === kT || kT(TT)
      }));
      const MT = async kT => (await lT).fileUrl((kT & ~KT) >>> 0, TT);
      return {
        startup: [],
        url: async TT => {
          if (cT && 0 === (TT & KT)) {
            const kT = await lT,
              MT = kT.filePackName(TT),
              KT = null === MT || "lifeform" === kT.fileSource(TT) ? null : cT(MT);
            if (null !== KT) return KT
          }
          return MT(TT)
        },
        shippedUrl: MT
      }
    }

    function xT() {
      return cT.e(41).then((() => cT(42873)))
    }
    async function IT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return TT.startsWith("data:") ? (0, MT.d)(TT.slice(TT.indexOf(",") + 1), kT) : (0, lT.N)(TT, {
        spare: kT
      })
    }
  },
  40590: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => xT,
      h: () => IT,
      j: () => jT,
      k: () => hT,
      l: () => vT,
      m: () => CT,
      o: () => tT
    });
    const lT = 826427981,
      MT = 1,
      KT = 2,
      OT = 44,
      yT = 46,
      fT = 58,
      xT = 8,
      IT = 4;

    function AT(TT, kT, cT) {
      const MT = (new TextEncoder).encode(cT),
        KT = xT + 4 * (kT.length + 2),
        OT = new Uint8Array(KT + (MT.byteLength + 3 & -4)),
        yT = new DataView(OT.buffer);
      return yT.setUint32(0, TT, !0), yT.setUint32(xT, lT, !0), kT.forEach(((TT, kT) => {
        yT.setUint32(xT + 4 * (kT + 1), TT, !0)
      })), yT.setUint32(KT - 4, MT.byteLength, !0), OT.set(MT, KT), OT
    }

    function CT(TT, kT) {
      return AT(TT, [KT], kT)
    }

    function jT(TT, kT) {
      return AT(TT, [MT, yT], kT)
    }

    function vT(TT, kT) {
      return AT(TT, [MT, fT], kT)
    }

    function tT(TT, kT) {
      return AT(TT, [MT, OT], kT)
    }

    function hT(TT) {
      const kT = xT;
      if (TT.byteLength < kT + 12) return !1;
      const cT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength);
      return cT.getUint32(kT, !0) === lT && cT.getUint32(kT + 4, !0) === MT && cT.getUint32(kT + 8, !0) === OT
    }
  },
  40569: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => aT,
      g: () => hT,
      k: () => DT,
      n: () => wT,
      q: () => PT,
      r: () => mT,
      u: () => QT
    });
    var lT = cT(4769),
      MT = cT(40473);
    const KT = 1,
      OT = 18,
      yT = 19,
      fT = 20,
      xT = {
        [KT]: "link",
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
        [OT]: "retry linked",
        [yT]: "fallback linked",
        [fT]: "fallback failed",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function IT(TT, kT, cT) {
      return TT === OT ? "program retry" : TT === KT ? "program link" : TT === yT || TT === fT ? `program ${kT} ${cT}` : "program"
    }
    const AT = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      CT = {
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
      jT = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      vT = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld"
      },
      tT = {
        8: "view",
        9: "minute",
        10: "loss"
      };

    function hT(TT, kT) {
      return TT === lT.e.RenderSerialLinks && void 0 !== tT[15 & kT]
    }
    const NT = {
      1280: "invalid enum",
      1281: "invalid value",
      1282: "invalid operation",
      1285: "out of memory",
      1286: "invalid framebuffer operation",
      37442: "context lost"
    };

    function QT(TT) {
      return String(TT).replace(/\d/g, (TT => String.fromCharCode(97 + Number(TT))))
    }

    function ST(TT, kT) {
      var cT;
      return null !== (cT = TT[kT]) && void 0 !== cT ? cT : QT(kT)
    }

    function DT() {
      return QT((0, MT.e)())
    }

    function aT(TT, kT) {
      switch (TT) {
        case lT.e.RenderSceneRowNotDrawn:
          return {
            words: ` ${ST(CT,kT)}`, instance: String(kT), group: String(TT)
          };
        case lT.e.RenderChunkMeshNotDrawn: {
          const cT = 0 === (128 & kT) ? "" : " shortage",
            lT = kT >>> 8;
          return {
            words: ` ${ST(jT,127&kT)}${cT}${0===lT?"":` kind ${QT(lT)}`}`,
            instance: String(kT),
            group: String(TT)
          }
        }
        case lT.e.RenderInternal: {
          const cT = ST(AT, 255 & kT),
            lT = kT >>> 8 & 255;
          if (0 === lT) return {
            words: ` ${cT}`,
            instance: String(kT),
            group: String(TT)
          };
          const MT = ST(xT, lT),
            KT = kT >>> 16;
          return {
            words: ` ${cT} ${MT} program ${QT(KT)}`,
            instance: `${cT} ${MT} ${KT}`,
            group: IT(lT, MT, cT),
            gpuDetails: {
              programFailure: MT,
              program: String(KT)
            }
          }
        }
        case lT.e.RenderSerialLinks: {
          if (hT(TT, kT)) {
            const TT = function(TT) {
              const kT = (kT, cT) => QT(TT >>> kT & (1 << cT) - 1),
                cT = TT >>> 30 & 1 ? " restored" : "";
              return `link census ${tT[15&TT]} linked ${kT(22,8)} failed ${kT(4,6)} retried ${kT(10,6)} fallback ${kT(16,6)}${cT}`
            }(kT);
            return {
              words: ` ${TT}`,
              instance: String(15 & kT),
              group: "link census",
              gpuDetails: {
                linkCensus: TT
              }
            }
          }
          const cT = ST(vT, kT);
          return {
            words: ` ${cT}`,
            instance: String(kT),
            group: String(TT),
            gpuDetails: {
              serialLinks: cT
            }
          }
        }
        case lT.e.RenderGlErrorAfterRestore: {
          const cT = ST(NT, 65535 & kT),
            lT = kT >>> 16,
            MT = 65535 !== lT;
          return {
            words: ` ${cT}${MT?` program ${QT(lT)}`:""}`,
            instance: String(kT),
            group: String(TT),
            gpuDetails: MT ? {
              glError: cT,
              program: String(lT)
            } : {
              glError: cT
            }
          }
        }
        default:
          return null
      }
    }
    const FT = 2,
      rT = new Map;

    function PT(TT) {
      let {
        group: kT,
        instance: cT
      } = TT, lT = rT.get(kT);
      return void 0 === lT && (lT = [], rT.set(kT, lT)), !lT.includes(cT) && (lT.length >= FT || (lT.push(cT), !1))
    }

    function wT() {
      return rT.size > 0
    }

    function mT() {
      rT.clear()
    }
  },
  40505: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => NT,
      e: () => QT,
      f: () => hT,
      i: () => FT
    });
    var lT = cT(6633),
      MT = cT(36),
      KT = cT(4302),
      OT = cT(4769),
      yT = cT(6628),
      fT = cT(40512);

    function xT(TT, kT) {
      const cT = (0, yT.e)(kT.variants);
      return TT.setShaderPack(cT.variantFlags, cT.hooks, cT.moduleCodes, (0, fT.G)(kT.layers), fT.r[kT.dO], kT.keepCircleShadows)
    }
    const IT = 0,
      AT = 1,
      CT = 2,
      jT = "shaderPack:failedToCompile",
      vT = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      tT = new Set(["not_requested", "off_after_loss", "gpu_class_webgl"]);

    function hT(TT, kT) {
      var cT;
      const lT = null !== (cT = null === TT || void 0 === TT ? void 0 : TT.reason) && void 0 !== cT ? cT : "none";
      return vT.has(lT) ? {
        messageKey: kT ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === lT && "override" === (null === TT || void 0 === TT ? void 0 : TT.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: tT.has(lT) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    const NT = {
      messageKey: "shaderPack:failedDeviceGraphics",
      noAdapter: !1
    };
    class QT extends Error {
      constructor(TT) {
        super(`the shader pack can't run in this game: ${TT}`), this.messageKey = TT, this.name = "ShaderPackJoinError"
      }
    }
    const ST = "strict";
    class DT {
      constructor(TT) {
        this.deps = TT, this.pagePack = void 0, this.loaded = null, this.dO = ST, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = TT.load().catch((kT => (TT.warn("the shader pack could not load: the game draws without it", kT), {
          status: "none"
        }))).then((TT => (this.loaded = TT, "active" === TT.status && (this.handOverToPreviews(TT), null !== TT.harnessPolicy && (this.dO = TT.harnessPolicy, this.handOver())), TT)))
      }
      async join(TT) {
        this.leave();
        const kT = this.game,
          [cT, MT] = await Promise.all([this.pagePack, this.policyOf(TT)]);
        if (kT !== this.game || "none" === cT.status) return null;
        const KT = "active" === cT.status ? cT.pack.variants : cT.variants,
          OT = (0, lT.j)(KT, MT);
        if (OT && "active" === cT.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (OT) {
          const TT = this.cantRun(cT, MT);
          if (null !== TT) return TT
        } else if ("blocked" === cT.status || null === this.deps.core) return null;
        return this.dO = MT, this.handOver(), OT && this.refused ? jT : (this.joined = !0, this.offInThisGame = !OT, null)
      }
      async replay(TT) {
        const kT = await this.join(TT);
        null === kT ? this.playable() : this.deps.failInGame(kT)
      }
      cantRun(TT, kT) {
        const {
          core: cT,
          noWebGpu: lT
        } = this.deps;
        if ("blocked" === TT.status) {
          return "shaderPack:failedUnchecked" === TT.messageKey && null === cT && lT.noAdapter ? lT.messageKey : TT.messageKey
        }
        return this.refused || this.failedPolicies.has(kT) ? jT : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var TT;
        return this.runsInJoinedGame() && "active" === (null === (TT = this.loaded) || void 0 === TT ? void 0 : TT.status) ? function(TT, kT) {
          const cT = TT.filter((TT => (0, lT.j)([TT], kT))),
            MT = TT => cT.some((kT => kT[TT]));
          return {
            sceneDepth: MT("sceneDepth"),
            sunShadow: MT("sunShadow"),
            airShadow: MT("airShadow")
          }
        }(this.loaded.pack.variants, this.dO) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(jT) : (null !== this.couldntRun ? this.notify(KT.e, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.dO) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(TT) {
        for (const {
            code: kT,
            detail: cT
          }
          of TT)
          if (kT === OT.e.RenderShaderPackNotRun) switch (255 & cT) {
            case IT:
              this.refused = !0, this.failed();
              break;
            case AT:
              this.failedPolicies.add(this.dO), this.failed();
              break;
            case CT:
              this.failedModelPolicies.add(this.dO), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(jT) : this.failedWhileJoining = !0)
      }
      fail(TT) {
        this.leave(), this.deps.failInGame(TT)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(TT, kT) {
        const cT = this.game;
        this.deps.notify(TT, (() => cT === this.game && this.joined), kT)
      }
      handOver() {
        var TT;
        const {
          core: kT
        } = this.deps;
        null !== kT && "active" === (null === (TT = this.loaded) || void 0 === TT ? void 0 : TT.status) && (xT(kT, {
          ...this.loaded.pack,
          dO: this.dO
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(TT) {
        let {
          pack: kT,
          harnessPolicy: cT
        } = TT;
        const {
          previews: lT
        } = this.deps;
        null !== lT && xT(lT, {
          ...kT,
          dO: null !== cT && void 0 !== cT ? cT : ST
        })
      }
      policyOf(TT) {
        return this.deps.policyOf(TT).catch((TT => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", TT), ST)))
      }
    }
    const aT = "wasmShaderPackNotice";

    function FT(TT, kT, cT, lT) {
      return MT.k.subscribe(aT, (TT => {
        let {
          translationKey: kT,
          stillCurrent: cT,
          reasonKey: lT
        } = TT;
        cT() && MT.k.nt("chat", (0, KT.h)(kT, lT))
      })), new DT({
        load: rT,
        policyOf: PT,
        core: TT,
        previews: kT,
        noWebGpu: cT,
        notify: (TT, kT, cT) => {
          const lT = {
            translationKey: TT,
            stillCurrent: kT,
            reasonKey: cT
          };
          MT.k.nt(aT, lT, !0)
        },
        failInGame: TT => {
          MT.k.nt(KT.g, TT)
        },
        warn: lT
      })
    }
    async function rT() {
      const [{
        shaderPackPage: TT,
        harnessShaderPackMode: kT
      }, {
        shaderPackTextures: lT
      }] = await Promise.all([cT.e(129).then((() => cT(39e3))), cT.e(130).then((() => cT(6623)))]), MT = await TT.load();
      return "active" !== MT.status ? MT : {
        status: "active",
        pack: {
          variants: MT.pack.variants,
          layers: lT().layers,
          keepCircleShadows: MT.pack.keepCircleShadows
        },
        harnessPolicy: kT()
      }
    }
    async function PT(TT) {
      var kT;
      const [{
        harnessShaderPackMode: lT
      }, {
        getShaderPackPolicy: MT
      }] = await Promise.all([cT.e(129).then((() => cT(39e3))), cT.e(90).then((() => cT(40906)))]);
      return null !== (kT = lT()) && void 0 !== kT ? kT : MT(TT)
    }
  },
  40603: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => yT,
      f: () => hT,
      g: () => fT,
      j: () => xT,
      m: () => IT,
      o: () => CT
    });
    var lT = cT(40610),
      MT = cT(40615);
    const KT = "atlas:",
      OT = 3e4;
    class yT extends Error {
      constructor(TT, kT) {
        super(`fetching ${TT} answered HTTP ${kT}`), this.url = TT, this.status = kT, this.name = "TerrainTextureFetchError"
      }
    }

    function fT(TT) {
      if (!TT.startsWith(KT)) return null;
      const kT = Number(TT.slice(KT.length));
      return Number.isInteger(kT) && kT >= 0 ? kT : null
    }
    async function xT() {
      const TT = await cT.e(201).then((() => cT(34029)));
      return {
        atlasSheets: TT.blockAtlasUrls,
        texture: kT => {
          var cT, lT, KT;
          return null !== (cT = null !== (lT = null !== (KT = TT.animatedBlockTextures[kT]) && void 0 !== KT ? KT : TT.rotatedBlockTextures[kT]) && void 0 !== lT ? lT : MT.c[kT]) && void 0 !== cT ? cT : null
        }
      }
    }
    async function IT(TT) {
      const kT = new AbortController,
        cT = setTimeout((() => {
          kT.abort(new DOMException(`${TT} took over ${OT} ms`, "TimeoutError"))
        }), OT);
      let lT;
      try {
        const cT = await fetch(TT, {
          signal: kT.signal
        });
        if (!cT.ok) throw new yT(TT, cT.status);
        lT = await cT.blob()
      } finally {
        clearTimeout(cT)
      }
      const MT = await createImageBitmap(lT, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return CT(MT)
      } finally {
        MT.close()
      }
    }
    const AT = 8192;

    function CT(TT) {
      const {
        width: kT,
        height: cT
      } = TT, MT = Math.max(1, Math.min(cT, AT)), KT = (0, lT.d)(kT, MT, {
        willReadFrequently: !0
      });
      if (!KT) throw new Error("no 2D context to read the texture back");
      KT.globalCompositeOperation = "copy";
      const OT = new Uint8Array(kT * cT * 4);
      for (let lT = 0; lT < cT; lT += MT) {
        const yT = Math.min(MT, cT - lT);
        KT.drawImage(TT, 0, lT, kT, yT, 0, 0, kT, yT), OT.set(KT.getImageData(0, 0, kT, yT).data, lT * kT * 4)
      }
      return {
        width: kT,
        height: cT,
        pixels: OT
      }
    }
    async function jT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : IT;
      const lT = [],
        MT = await Promise.all(TT.map((async TT => {
          var MT, OT;
          const yT = null !== (MT = null === (OT = kT.decoded) || void 0 === OT ? void 0 : OT.call(kT, TT)) && void 0 !== MT ? MT : null,
            xT = null === yT ? function(TT, kT) {
              if (TT.startsWith(KT)) {
                var cT;
                const lT = fT(TT);
                return null === lT ? null : null !== (cT = kT.atlasSheets[lT]) && void 0 !== cT ? cT : null
              }
              return kT.texture(TT)
            }(TT, kT) : null,
            IT = null !== yT && void 0 !== yT ? yT : null === xT ? null : cT(xT);
          if (null === IT) return lT.push({
            name: TT,
            url: xT,
            error: new Error(`no URL for terrain texture ${TT}`)
          }), null;
          try {
            const kT = await IT;
            if (kT.pixels.byteLength !== kT.width * kT.height * 4) throw new Error(`decoded ${kT.pixels.byteLength} bytes for ${kT.width}x${kT.height} texels`);
            return {
              name: TT,
              texture: kT
            }
          } catch (AT) {
            return lT.push({
              name: TT,
              url: xT,
              error: AT
            }), null
          }
        }))),
        OT = MT.filter((TT => null !== TT)),
        yT = new Uint32Array(2 * OT.length);
      OT.forEach(((TT, kT) => {
        let {
          texture: cT
        } = TT;
        yT[2 * kT] = cT.width, yT[2 * kT + 1] = cT.height
      }));
      return {
        handOver: {
          names: OT.map((TT => {
            let {
              name: kT
            } = TT;
            return kT
          })),
          textures: OT.map((TT => {
            let {
              texture: kT
            } = TT;
            return kT.pixels
          })),
          sizes: yT
        },
        failures: lT
      }
    }
    const vT = [2e3, 1e4, 3e4, 6e4, 12e4];

    function tT() {}
    class hT {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vT,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = TT, this.retryMs = kT, this.keepBelow = cT, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xT,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const lT = ++this.started,
          MT = {
            decode: cT.decode,
            wholeAtlas: cT.wholeAtlas
          };
        return this.loadAndHandOver(kT, MT, TT, (() => {
          var TT;
          return lT < this.landed || !1 === (null === (TT = cT.wanted) || void 0 === TT ? void 0 : TT.call(cT))
        }), {
          onTaken: (TT, cT) => {
            this.landed = lT, this.current = {
              mine: lT,
              sources: kT,
              load: MT,
              wj: TT,
              failed: cT
            }
          }
        })
      }
      restore(TT) {
        var kT;
        const cT = this.current;
        if (null === cT) return Promise.resolve(null);
        if ((null === (kT = this.restoring) || void 0 === kT ? void 0 : kT.mine) === cT.mine) return this.restoring.done;
        const lT = {
          mine: cT.mine,
          done: this.restoreLanded(cT, TT).finally((() => {
            this.restoring === lT && (this.restoring = null)
          }))
        };
        return this.restoring = lT, lT.done
      }
      async restoreLanded(TT, kT) {
        const cT = () => this.landed !== TT.mine,
          {
            wj: lT
          } = TT;
        if (null !== lT) return this.stopped() ? null : this.core.setTerrainTextures(lT.names, lT.textures, lT.sizes);
        let MT = kT;
        for (let KT = 0;; KT++) {
          const kT = this.retryMs.at(KT),
            lT = {
              allOrNothingExcept: void 0 === kT ? void 0 : TT.failed
            },
            OT = await this.loadAndHandOver(TT.sources, TT.load, MT, cT, lT);
          if (!1 !== OT || void 0 === kT || this.stopped()) return OT;
          if (MT = tT, await new Promise((TT => {
              setTimeout(TT, kT)
            })), cT()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(TT, kT, cT, lT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const KT = this.core.terrainTextureNames();
        var OT;
        if (0 === KT.length) return null === (OT = MT.onTaken) || void 0 === OT || OT.call(MT, null, new Set), !0;
        let yT, xT;
        try {
          yT = await TT(), xT = await jT(KT, yT, kT.decode)
        } catch (hT) {
          return lT() ? null : (cT({
            name: null,
            url: null,
            error: hT
          }), !1)
        }
        if (lT() || this.stopped()) return null;
        for (const fT of xT.failures) cT(fT);
        const IT = MT.allOrNothingExcept;
        if (void 0 !== IT && xT.failures.some((TT => {
            let {
              name: kT
            } = TT;
            return null === kT || !IT.has(kT)
          })) || !0 === kT.wholeAtlas && xT.failures.some((TT => {
            let {
              name: kT
            } = TT;
            return null === kT || null !== fT(kT)
          }))) return !1;
        const {
          handOver: AT
        } = xT, CT = function(TT) {
          return TT.textures.reduce(((TT, kT) => TT + kT.byteLength), 0)
        }(AT) < this.keepBelow, vT = this.core.setTerrainTextures(AT.names, AT.textures, AT.sizes, CT ? void 0 : () => {
          !async function(TT, kT) {
            await kT;
            for (const {
                buffer: lT
              }
              of TT) {
              const TT = lT;
              var cT;
              if (!TT.detached) null === (cT = TT.transfer) || void 0 === cT || cT.call(TT, 0)
            }
          }(AT.textures, yT.heldUntil)
        });
        if (vT) {
          var tT;
          const TT = new Set(xT.failures.flatMap((TT => {
            let {
              name: kT
            } = TT;
            return null === kT ? [] : [kT]
          })));
          null === (tT = MT.onTaken) || void 0 === tT || tT.call(MT, CT ? AT : null, TT)
        }
        return vT
      }
    }
  },
  36674: (TT, kT, cT) => {
    function lT(TT) {
      return "fetch" === TT || "timeout" === TT || "integrity" === TT ? "download" : "browser"
    }
    cT.d(kT, {
      e: () => MT,
      f: () => OT,
      g: () => fT,
      k: () => yT,
      n: () => lT,
      o: () => KT
    });
    const MT = "https://discord.gg/playbloxd";

    function KT(TT) {
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

    function OT(TT, kT) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: kT ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: TT.code
        },
        discordLink: kT,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function yT() {
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

    function fT(TT, kT, cT) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: cT ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: TT.reason
        },
        discordLink: null === TT.name,
        confirm: kT ? "general:reconnect" : TT.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  6628: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => DT,
      i: () => aT,
      k: () => QT,
      o: () => NT
    });
    var lT = cT(6633);
    const MT = 6,
      KT = 3,
      OT = 1,
      yT = 2,
      fT = 4,
      xT = 8,
      IT = 16,
      AT = 32,
      CT = 64,
      jT = 128,
      vT = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function tT(TT) {
      if (!TT) return 0;
      const kT = vT.indexOf(TT);
      if (kT <= 0) throw new Error(`"${TT}" is not a shader pack hook function`);
      return kT
    }

    function hT(TT) {
      if (0 === TT) return null;
      const kT = vT[TT];
      if (void 0 === kT) throw new Error(`${TT} is not a shader pack hook function id`);
      return kT
    }

    function NT(TT) {
      const kT = lT.e.length;
      return {
        strict: TT >= kT,
        program: lT.e[TT % kT]
      }
    }

    function QT(TT) {
      return Number(TT.strict) * lT.e.length + lT.e.indexOf(TT.program)
    }

    function ST(TT) {
      return "" === TT ? [] : TT.split(" ")
    }

    function DT(TT) {
      const kT = {
        variantFlags: new Uint8Array(MT),
        hooks: new Uint8Array(MT * KT),
        moduleCodes: Array(MT).fill(""),
        reads: Array(2 * MT).fill("")
      };
      for (const cT of TT) {
        const TT = QT(cT.key),
          lT = (TT, kT) => null === cT.hooks.surface || cT.reads.fragment.includes(TT) ? 0 : kT;
        kT.variantFlags[TT] = (cT.sceneDepth ? OT : 0) | (cT.movesVertices ? yT : 0) | (cT.sunShadow ? fT : 0) | (cT.airShadow ? xT : 0) | (cT.discards ? IT : 0) | lT("localPosition", AT) | lT("enchantSpeed", CT) | lT("enchantTier", jT), kT.hooks[TT * KT] = tT(cT.hooks.vertex), kT.hooks[TT * KT + 1] = tT(cT.hooks.surface), kT.hooks[TT * KT + 2] = tT(cT.hooks.light), kT.moduleCodes[TT] = cT.moduleCode, kT.reads[2 * TT] = cT.reads.vertex.join(" "), kT.reads[2 * TT + 1] = cT.reads.fragment.join(" ")
      }
      return kT
    }

    function aT(TT) {
      const {
        hooks: kT,
        moduleCodes: cT,
        reads: lT
      } = TT;
      return Array.from(TT.variantFlags, ((TT, MT) => {
        const AT = MT * KT;
        return {
          key: NT(MT),
          hooks: {
            vertex: hT(kT[AT]),
            surface: hT(kT[AT + 1]),
            light: hT(kT[AT + 2])
          },
          moduleCode: cT[MT],
          sceneDepth: 0 !== (TT & OT),
          sunShadow: 0 !== (TT & fT),
          airShadow: 0 !== (TT & xT),
          movesVertices: 0 !== (TT & yT),
          discards: 0 !== (TT & IT),
          reads: {
            vertex: ST(lT[2 * MT]),
            fragment: ST(lT[2 * MT + 1])
          }
        }
      }))
    }
  },
  40512: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => fT,
      D: () => OT,
      G: () => tT,
      K: () => jT,
      L: () => vT,
      e: () => MT,
      h: () => lT,
      l: () => CT,
      p: () => IT,
      r: () => hT,
      u: () => KT,
      x: () => yT
    });
    const lT = 3,
      MT = 0,
      KT = 1,
      OT = 2,
      yT = {
        uniform: 3,
        rC: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      fT = 10,
      xT = "BloxdPackInputs",
      IT = "bloxdPackInputs",
      AT = [{
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
      CT = 80;

    function jT() {
      const TT = AT.map((TT => {
        let {
          name: kT,
          type: cT
        } = TT;
        return `    ${kT}: ${cT},\n`
      })).join("");
      return `struct ${xT} {\n${TT}}\n@group(${lT}) @binding(${MT}) var<uniform> ${IT}: ${xT};\n`
    }

    function vT(TT, kT) {
      const cT = new DataView(TT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, CT),
        [lT, MT, KT, OT, yT, fT] = AT;
      cT.setFloat32(lT.offset, kT.seconds, !0), cT.setUint32(MT.offset, kT.lit ? 1 : 0, !0);
      for (let xT = 0; xT < 3; xT++) cT.setInt32(KT.offset + 4 * xT, kT.renderOffset[xT], !0), cT.setFloat32(OT.offset + 4 * xT, kT.M_[xT], !0), cT.setFloat32(yT.offset + 4 * xT, kT.eyePosition[xT], !0), cT.setFloat32(fT.offset + 4 * xT, kT.shadowDirection[xT], !0)
    }

    function tT(TT) {
      const kT = new Uint32Array(Math.max(1, TT.length));
      return TT.forEach(((TT, cT) => {
        let {
          id: lT,
          rotation: MT
        } = TT;
        kT[cT] = 65535 & lT | (3 & MT) << 16
      })), kT
    }
    const hT = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6633: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT,
      f: () => OT,
      j: () => yT,
      k: () => MT,
      o: () => KT
    });
    const lT = ["terrain", "liquid", "model"];

    function MT() {
      const TT = [];
      for (const kT of [!1, !0])
        for (const cT of lT) TT.push({
          strict: kT,
          program: cT
        });
      return TT
    }

    function KT(TT) {
      return `${TT.strict?"strict":"allow"}.${TT.program}`
    }

    function OT(TT) {
      return !TT.hooks.vertex && !TT.hooks.surface && !TT.hooks.light
    }

    function yT(TT, kT) {
      return "off" !== kT && (null === TT || TT.some((TT => TT.key.strict === ("strict" === kT) && !OT(TT))))
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);