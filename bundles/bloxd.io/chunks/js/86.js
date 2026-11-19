export const id = 86;
export const ids = [86];
export const modules = {
  38118: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY,
      g: () => gY,
      k: () => aY,
      n: () => OY,
      o: () => RY
    });
    const FY = "A valid external Instance reference no longer exists.",
      AY = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ];
    const IY = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function RY(YY, rY) {
      return YY ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(YY) {
        var rY;
        const DY = null !== (rY = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(YY)) && void 0 !== rY ? rY : /failed with ([A-Z][A-Z0-9_]+)/.exec(YY);
        return DY ? DY[1] : YY.includes(FY) ? "gpu_process_lost" : "other"
      }(rY)
    }

    function OY(YY) {
      return `${(null===YY||void 0===YY?void 0:YY.vendor)||"unknown vendor"} ${(null===YY||void 0===YY?void 0:YY.architecture)||"unknown architecture"}`
    }

    function gY(YY) {
      return vY(YY)[1]
    }

    function aY(YY) {
      return vY(YY)[2]
    }

    function vY(YY) {
      var rY;
      return null !== (rY = AY.find((rY => {
        let [DY] = rY;
        return YY < DY
      }))) && void 0 !== rY ? rY : AY[AY.length - 1]
    }
  },
  38427: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY,
      e: () => AY
    });
    const FY = 45e3;
    class AY extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  35916: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => FY,
      f: () => AY,
      g: () => IY
    });
    const FY = 1024,
      AY = 1024 * FY;

    function IY(YY) {
      return (YY / AY).toFixed(1)
    }
  },
  35913: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => IY,
      f: () => OY,
      h: () => RY,
      l: () => gY,
      n: () => aY
    });
    var FY = DY(213);
    const AY = 32 * DY(35916).f,
      IY = 6144,
      RY = 4608,
      OY = 512;

    function gY(YY) {
      return Math.floor(AY * YY / IY)
    }

    function aY(YY) {
      const rY = YY - Math.floor(YY / 6);
      let DY = FY.d.maxChunkHorizAddDistance,
        AY = FY.d.maxChunkVertAddDistance;
      if (vY(DY + 1, AY + 1) <= rY) return null;
      for (; vY(DY + 1, AY + 1) > rY && (DY > 0 || AY > 0);) DY > AY ? DY-- : AY--;
      return {
        horizontal: DY,
        vertical: AY
      }
    }

    function vY(YY, rY) {
      const DY = Math.max(YY, rY);
      let FY = 0;
      for (let AY = -DY; AY <= DY; AY++)
        for (let IY = -DY; IY <= DY; IY++)
          for (let RY = -DY; RY <= DY; RY++) uY(YY, rY, AY, IY, RY) && FY++;
      return FY
    }

    function uY(YY, rY, DY, FY, AY) {
      const IY = DY * DY + AY * AY;
      return YY === rY ? IY + FY * FY <= YY * YY : YY > rY ? Math.abs(FY) <= rY && IY + FY * FY <= YY * YY : IY <= YY * YY && IY + FY * FY <= rY * rY
    }
  },
  39966: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY,
      g: () => IY,
      i: () => OY,
      j: () => vY,
      k: () => gY,
      m: () => RY
    });
    var FY = DY(213);
    const AY = 3e3,
      IY = 15e3;

    function RY(YY) {
      const rY = YY.endsWith(FY.h);
      return {
        text: (rY ? YY.slice(0, -FY.h.length) : YY) || null,
        dropsCache: rY
      }
    }
    const OY = "Either your internet isn't working or this is a bug.";

    function gY(YY, rY) {
      const DY = vY(YY);
      return null !== DY.name && "" === FY.c[DY.name].text && null !== rY ? rY : DY.reason
    }
    const aY = "You were removed from the game.";

    function vY(YY) {
      var rY;
      let DY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const AY = null !== (rY = Object.keys(FY.c).find((rY => FY.c[rY].code === YY))) && void 0 !== rY ? rY : null;
      if (null === AY) return {
        code: YY,
        name: AY,
        reason: null !== DY && void 0 !== DY ? DY : `${OY}\nCode: ${YY}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: IY,
        canReconnect: RY = !1
      } = FY.c[AY], gY = YY === FY.c.outdatedVersion.code || YY === FY.c.loadRecaptchaError.code;
      return {
        code: YY,
        name: AY,
        reason: "" !== IY ? IY : null !== DY && void 0 !== DY ? DY : YY === FY.c.gameOrPluginKick.code ? aY : `Code: ${YY}`,
        canReconnect: RY,
        automaticallyReconnect: YY === FY.c.customGameUpdated.code || YY === FY.c.duplicateLobbyNameError.code,
        requiresRefresh: gY
      }
    }
  },
  4376: (YY, rY, DY) => {
    DY.d(rY, {
      $d: () => CY,
      A: () => ZY,
      Ab: () => PY,
      Ad: () => bY,
      Bb: () => tY,
      Bc: () => ir,
      Bd: () => JY,
      C: () => sr,
      Cd: () => pY,
      D: () => UY,
      Eb: () => rr,
      Ec: () => ar,
      G: () => FY.f,
      H: () => aY,
      I: () => FY.j,
      Ib: () => AY.g,
      Ic: () => Fr,
      Kb: () => eY,
      Kc: () => FY.nb,
      Kd: () => XY,
      L: () => FY.l,
      Ld: () => GY,
      Mb: () => dY,
      Nc: () => FY.pb,
      O: () => nY,
      Od: () => kY,
      Pd: () => Rr,
      Qb: () => HY,
      Qc: () => FY.rb,
      Qd: () => yr,
      R: () => FY.s,
      Rb: () => cY,
      S: () => FY.u,
      Sb: () => FY.L,
      Sd: () => VY,
      Tc: () => LY,
      Td: () => xY,
      W: () => FY.y,
      Wb: () => zY,
      Wd: () => jY,
      Xb: () => SY,
      Xc: () => FY.yb,
      Zb: () => Ir,
      Zc: () => FY.Ab,
      Zd: () => fY,
      _: () => uY,
      _c: () => FY.Cb,
      ac: () => mY,
      ad: () => FY.Jb,
      ae: () => gY,
      c: () => Yr,
      cb: () => EY,
      cd: () => FY.Mb,
      dc: () => vr,
      ed: () => FY.Ob,
      ee: () => hY,
      f: () => QY,
      fb: () => FY.z,
      hb: () => FY.B,
      hc: () => AY.k,
      i: () => yY,
      id: () => BY,
      ie: () => Qr,
      je: () => iY,
      kb: () => wY,
      kc: () => WY,
      l: () => gr,
      lc: () => Dr,
      ld: () => FY.Qb,
      m: () => NY,
      nb: () => Ar,
      nc: () => FY.U,
      nd: () => FY.Sb,
      pd: () => FY.Wb,
      q: () => TY,
      qb: () => vY,
      r: () => FY.d,
      rc: () => FY.Y,
      rd: () => IY,
      s: () => ur,
      tc: () => FY._,
      u: () => KY,
      ub: () => FY.C,
      ud: () => oY,
      wb: () => qY,
      x: () => RY,
      xc: () => FY.ab,
      xd: () => Or,
      yc: () => FY.db,
      zc: () => FY.lb,
      zd: () => MY
    });
    var FY = DY(4382),
      AY = DY(2251);
    const IY = Math.round(1e3 / FY.Wb),
      RY = 4,
      OY = 2;

    function gY() {
      return crypto.getRandomValues(new Uint32Array(OY))
    }
    const aY = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      vY = 16,
      uY = {
        Draws: 1,
        NetAll: 2
      },
      sY = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function iY(YY) {
      return (YY.nametagsHidden ? lY.NametagsHidden : 0) | (YY.crouchToggle ? lY.CrouchToggle : 0) | (YY.bhopDisabled ? lY.BhopDisabled : 0) | (YY.disableBobbing ? lY.DisableBobbing : 0) | (YY.ezTowering ? lY.EzTowering : 0) | (YY.ezBridging ? lY.EzBridging : 0) | (YY.showChunkBorders ? lY.ShowChunkBorders : 0)
    }
    const yY = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      QY = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      oY = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      WY = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      EY = 5,
      mY = 4294967295;

    function VY(YY) {
      return (YY.showFog ? sY.ShowFog : 0) | (YY.lighting ? sY.Lighting : 0) | (YY.chunkFade ? sY.ChunkFade : 0)
    }
    const SY = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      lY = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      TY = {
        Release: 1,
        KeepTouches: 2
      },
      eY = {
        Point: 1,
        Stamped: 2
      },
      NY = {
        Add: 1,
        Clear: 2
      },
      BY = 1,
      cY = 8,
      KY = 16777215,
      HY = 4,
      zY = {
        Resume: 1
      },
      ZY = {
        Held: 1
      };

    function CY(YY, rY) {
      return (YY | rY << 8) >>> 0
    }

    function fY(YY) {
      return 255 & YY
    }

    function jY(YY) {
      return YY >>> 8
    }

    function hY(YY) {
      return YY + 3 & -4
    }
    const dY = 16777216,
      JY = 20;
    const MY = 8,
      wY = 8,
      bY = 16777216,
      XY = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      qY = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      pY = 16,
      kY = {
        Lost: 0,
        Gone: 1
      },
      GY = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function xY(YY) {
      return YY === GY.WorldgenSeed || YY === GY.Generate
    }
    const nY = 4,
      PY = 99,
      UY = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      LY = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      tY = 12,
      Yr = 16,
      rr = 4,
      Dr = 12,
      Fr = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      Ar = 4,
      Ir = 8,
      Rr = 8,
      Or = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      gr = {
        Crit: 1,
        HitSelf: 2
      },
      ar = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      vr = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      ur = 12,
      sr = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      ir = 67108864;

    function yr(YY) {
      for (const [rY, DY] of Object.entries(FY.f))
        if (DY === YY) return rY;
      return `Unknown${YY}`
    }

    function Qr(YY) {
      return {
        status: YY[FY.B.Status],
        lastError: YY[FY.B.LastError],
        lastErrorDetail: YY[FY.B.LastErrorDetail],
        errorCount: YY[FY.B.ErrorCount],
        frameIndex: YY[FY.B.FrameIndex],
        tickIndex: YY[FY.B.TickIndex],
        renderPending: YY[FY.B.RenderPending],
        firstView: YY[FY.B.FirstView],
        chunksCancelled: YY[FY.B.ChunksCancelled]
      }
    }
  },
  39744: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => FY,
      e: () => uY,
      f: () => OY,
      g: () => IY,
      i: () => AY,
      m: () => gY,
      o: () => vY
    });
    class FY extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function AY(YY) {
      return YY instanceof RangeError && /call stack/i.test(YY.message) || YY instanceof Error && "InternalError" === YY.name && /recursion/i.test(YY.message)
    }

    function IY(YY) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(YY))
    }
    const RY = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function OY(YY) {
      var rY;
      return YY instanceof WebAssembly.RuntimeError || YY instanceof FY || AY(YY) && RY.test(null !== (rY = YY.stack) && void 0 !== rY ? rY : "")
    }

    function gY(YY, rY) {
      if (OY(YY)) throw YY;
      console.error(rY, YY)
    }

    function aY(YY, rY, DY, AY, IY) {
      if (rY % AY !== 0 || rY + DY > YY.byteLength) throw new FY(`${IY}: ${DY} bytes at ${rY}, ${AY}-aligned, outside ${YY.byteLength} bytes of memory`)
    }

    function vY(YY, rY, DY, FY, AY) {
      return 0 === DY ? null : (aY(rY, DY, FY * YY.BYTES_PER_ELEMENT, YY.BYTES_PER_ELEMENT, AY), new YY(rY, DY, FY))
    }

    function uY(YY, rY, DY, FY, AY) {
      return 0 === rY ? null : (aY(YY, rY, DY, FY, AY), new DataView(YY, rY, DY))
    }
  },
  40109: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => FY
    });
    const FY = {
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
  40054: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => yY,
      g: () => QY,
      i: () => sY,
      k: () => uY
    });
    const FY = 2e3,
      AY = "unavailable";
    let IY = () => Promise.resolve().then((() => DY(2823))),
      RY = null,
      OY = null,
      gY = aY();

    function aY() {
      let YY = () => {};
      return {
        promise: new Promise((rY => {
          YY = () => {
            rY(null)
          }
        })),
        resolve: YY
      }
    }

    function vY() {
      if (null === RY) {
        const YY = IY();
        RY = YY, YY.then((rY => {
          RY === YY && (OY = rY)
        }), (() => {
          RY === YY && (RY = null)
        }))
      }
      return RY
    }

    function uY() {
      vY().catch((() => {}))
    }

    function sY() {
      gY.resolve()
    }

    function iY(YY, rY, DY, FY) {
      if (null === YY) return {
        errorKind: rY,
        fingerprint: AY,
        dedupe: `${rY}|${FY}`
      };
      const {
        fingerprint: IY
      } = YY.clientErrorKey(rY, DY, FY);
      return {
        errorKind: rY,
        fingerprint: IY,
        dedupe: IY
      }
    }

    function yY(YY, rY, DY, FY) {
      return null === OY ? FY ? (uY(), iY(null, YY, rY, DY)) : null : iY(OY, YY, rY, DY)
    }
    async function QY(YY, rY, DY) {
      let AY;
      const IY = new Promise((YY => {
        AY = setTimeout((() => {
          YY(null)
        }), FY)
      }));
      try {
        return iY(await Promise.race([vY(), IY, gY.promise]), YY, rY, DY)
      } catch {
        return iY(null, YY, rY, DY)
      } finally {
        clearTimeout(AY)
      }
    }
  },
  40046: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      BUILT_IN_ANIMATIONS_SITE: () => pY,
      CORE_ERRORS_SITE: () => fY,
      EVENT_OVERFLOW_SITE: () => qY,
      FIRST_VIEW_SITE: () => GY,
      JOIN_SITE: () => hY,
      LEAVE_SITE: () => dY,
      MODEL_FEED_SITE: () => JY,
      MODEL_POOL_SITE: () => MY,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => nY,
      NON_FATAL_REPORTS_PER_SESSION: () => vr,
      PREVIEW_ANIMATIONS_SITE: () => XY,
      RENDER_RELOAD_SITE: () => bY,
      TEXTURE_NAMES_SITE: () => wY,
      TEXTURE_PACK_FEED_SITE: () => kY,
      TurnstilePageError: () => Jr,
      WASM_LOAD_SITE: () => jY,
      crashError: () => Qr,
      crashReportsSettled: () => Sr,
      flushCrashReports: () => mr,
      joinFailureCode: () => Mr,
      lokiTransport: () => LY,
      modelFailureCode: () => Gr,
      readTrap: () => er,
      renderLossDetail: () => uD,
      renderReloadMessage: () => aD,
      reportCoreErrors: () => Tr,
      reportCountedLoadFallback: () => hr,
      reportCrash: () => or,
      reportDataLoadFailure: () => oD,
      reportDisconnect: () => pr,
      reportDracoDecoderFailure: () => Ur,
      reportEventOverflow: () => YD,
      reportFirstViewNoTerrain: () => ID,
      reportGpuFallback: () => fr,
      reportGpuWasmPopulation: () => jr,
      reportLightFault: () => DD,
      reportMemoryShed: () => AD,
      reportModelFailure: () => xr,
      reportModelPoolFailure: () => nr,
      reportModelsModuleRetry: () => Pr,
      reportPageJoinFailure: () => br,
      reportReconnectGaveUp: () => kr,
      reportRenderReload: () => iD,
      reportReplayFault: () => OD,
      reportStaleBuildReload: () => ED,
      reportStoppedCore: () => Kr,
      reportTerrainTextureFailure: () => yD,
      reportTexturePackFeedLoadFailure: () => tr,
      reportUnstreamedCoreLoad: () => dr,
      reportUnsupportedFallback: () => Zr,
      reportUnusedSeat: () => qr,
      reportWorkerLost: () => rD,
      reportWorkerStartTimeout: () => RD,
      reportWorldgenGaveUp: () => FD,
      reportWorldgenLoadFailure: () => Lr,
      resetCrashReports: () => lr,
      setCrashBackend: () => Ir,
      setCrashScreen: () => Fr,
      setCrashTransport: () => rr,
      showCrash: () => cr,
      showJoinFailure: () => wr,
      showUnsupported: () => zr
    });
    var FY = DY(1113),
      AY = DY(293),
      IY = DY(2829),
      RY = DY(40054),
      OY = DY(4376),
      gY = DY(40063),
      aY = DY(3036),
      vY = DY(38118),
      uY = DY(144),
      sY = DY(704),
      iY = DY(138),
      yY = DY(3045),
      QY = DY(38427),
      oY = DY(1744),
      WY = DY(40019),
      EY = DY(39693),
      mY = DY(39969),
      VY = DY(39976),
      SY = DY(40067),
      lY = DY(3312),
      TY = DY(3316),
      eY = DY(40074),
      NY = DY(40096),
      BY = DY(40098),
      cY = DY(40118),
      KY = DY(2834),
      HY = DY(40015),
      zY = DY(39900),
      ZY = DY(39904);
    const CY = "[bloxd-wasm-client]",
      fY = "coreErrors",
      jY = "wasmLoad",
      hY = "join",
      dY = "leave",
      JY = "modelFeed",
      MY = "modelWorkerPool",
      wY = "textureNames",
      bY = "renderReload",
      XY = "previewAnimations",
      qY = "eventOverflow",
      pY = "builtInAnimations",
      kY = "texturePackFeed",
      GY = "firstView",
      xY = 300,
      nY = 8;
    let PY = 0;
    const UY = new Set,
      LY = (YY, rY) => {
        const DY = Rr[YY.kind];
        if (null === DY) return void tY(YY, rY, Ar, null);
        const FY = (0, RY.c)(DY, YY.message, YY.code, YY.fatal);
        if (null !== FY) return void tY(YY, rY, Ar, FY);
        const AY = Ar;
        Er("Loki", (async () => {
          tY(YY, rY, AY, await (0, RY.g)(DY, YY.message, YY.code))
        }))
      };

    function tY(YY, rY, DY, AY) {
      const {
        kind: RY,
        code: OY,
        site: gY,
        fatal: aY,
        details: vY
      } = YY;
      if (!aY)
        if (null === AY || (0, IY.b)(AY.errorKind) || UY.has(AY.dedupe)) {
          if (PY >= nY) return;
          PY++
        } else UY.add(AY.dedupe);
      const uY = {
        ...vY,
        kind: RY,
        code: OY,
        site: gY,
        fatal: String(aY),
        backend: DY
      };
      null !== AY && (uY.errorKind = AY.errorKind, uY.fingerprint = AY.fingerprint), rY instanceof Error && "string" === typeof rY.stack && (uY.causeStack = rY.stack.slice(0, 2e3)), (0, FY.jQ)(Qr(YY, rY), uY)
    }
    let Yr = LY;

    function rr(YY) {
      const rY = Yr;
      return Yr = YY, rY
    }
    let Dr = () => {};

    function Fr(YY) {
      const rY = Dr;
      return Dr = YY, rY
    }
    let Ar = "unpicked";

    function Ir(YY) {
      Ar = YY
    }
    const Rr = {
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
      Or = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        gpuFallback: "wasm_load"
      },
      gr = new Set(["unstreamedLoad"]);
    let ar = !1;
    const vr = 20,
      ur = new Map;
    let sr = 0,
      ir = 0;
    const yr = new Set;

    function Qr(YY, rY) {
      const DY = Object.assign(new Error(`${YY.code}: ${YY.message}`), {
        name: "WasmClientCrash",
        cause: null !== rY && void 0 !== rY ? rY : void 0
      });
      return rY instanceof Error && rY.stack && (DY.stack = rY.stack), DY
    }

    function or(YY) {
      var rY, FY;
      const {
        kind: AY,
        code: IY,
        site: RY,
        fatal: OY,
        message: gY,
        error: aY
      } = YY, vY = !1 !== YY.toTransport && !gr.has(AY), uY = !OY && vY, sY = {
        kind: AY,
        code: IY,
        site: RY,
        fatal: OY,
        message: gY,
        details: null !== (rY = YY.details) && void 0 !== rY ? rY : {}
      }, iY = `${IY}@${RY}${void 0===YY.instance?"":`#${YY.instance}`}${OY?"!":""}`, yY = (null !== (FY = ur.get(iY)) && void 0 !== FY ? FY : 0) + 1;
      if (ur.set(iY, yY), yY > 1 ? 0 === (yY & yY - 1) && Wr((() => {
          console.warn(`${CY} ${IY} at ${RY} reported ${yY} times`)
        })) : uY && sr >= vr ? Wr((() => {
          console.warn(`${CY} ${AY} ${IY} at ${RY}: ${gY} (not sent: the session's ${vr} went)`, sY.details, null !== aY && void 0 !== aY ? aY : "")
        })) : (uY && sr++, function(YY, rY, FY) {
          var AY, IY;
          const {
            kind: RY,
            code: OY,
            site: gY,
            fatal: aY,
            message: vY,
            details: uY
          } = YY;
          Wr((() => {
            (aY ? console.error : console.warn)(`${CY} ${RY} ${OY} at ${gY}: ${vY}`, uY, null !== rY && void 0 !== rY ? rY : "")
          }));
          const sY = Or[RY],
            iY = null !== (AY = null !== (IY = Rr[RY]) && void 0 !== IY ? IY : sY) && void 0 !== AY ? AY : null;
          null !== iY && Er("counts", (async () => {
            const {
              peekVisitSessionId: YY
            } = await Promise.resolve().then((() => DY(668)));
            if (null !== YY()) {
              const {
                reportCappedWasmFailure: YY,
                reportWasmFailure: rY
              } = await DY.e(202).then((() => DY(35731)));
              (void 0 === sY ? rY : YY)(iY, vY, OY), ar = !0
            }
          }));
          FY && Wr((() => {
            Yr(YY, rY)
          }))
        }(sY, aY, vY)), OY) {
        var QY;
        const rY = null !== (QY = YY.screen) && void 0 !== QY ? QY : {
          text: (0, cY.i)(sY, !0),
          reload: !0
        };
        Wr((() => {
          Dr(rY)
        }))
      }
      return sY
    }

    function Wr(YY) {
      try {
        YY()
      } catch (rY) {
        try {
          console.warn(`${CY} could not send a report`, rY)
        } catch {}
      }
    }

    function Er(YY, rY) {
      try {
        const DY = rY().catch((rY => {
          console.warn(`${CY} could not send the report to ${YY}`, rY)
        })).finally((() => {
          yr.delete(DY)
        }));
        yr.add(DY)
      } catch (DY) {
        console.warn(`${CY} could not send the report to ${YY}`, DY)
      }
    }
    async function mr(YY) {
      let rY;
      (0, RY.i)();
      const DY = new Promise((DY => {
        rY = setTimeout(DY, YY)
      }));
      await Promise.race([Vr(), DY]), clearTimeout(rY)
    }
    async function Vr() {
      if (await Promise.allSettled([...yr]), ar) try {
        const {
          flushClientAnalyticsEvents: YY
        } = await Promise.resolve().then((() => DY(1469)));
        await YY()
      } catch (YY) {
        console.warn(`${CY} could not send the counts`, YY)
      }
    }
    async function Sr() {
      for (; yr.size > 0;) await Promise.allSettled([...yr])
    }

    function lr() {
      ur.clear(), sr = 0, ar = !1, PY = 0, UY.clear(), ir = 0, (0, gY.n)()
    }

    function Tr(YY, rY, DY, FY) {
      ir += rY;
      for (const {
          code: RY,
          detail: aY
        }
        of YY) {
        var AY, IY;
        const YY = (0, OY.Qd)(RY),
          rY = (0, gY.c)(RY, aY),
          vY = null === FY || void 0 === FY ? void 0 : FY(RY, aY),
          uY = void 0 !== (null === rY || void 0 === rY ? void 0 : rY.gpuDetails),
          sY = uY ? null === (AY = (0, iY.q)()) || void 0 === AY ? void 0 : AY.renderer : void 0,
          yY = uY ? ` ${(0,gY.g)()}` : "",
          QY = Array.from([sY && `gpu ${(0,gY.r)(sY)}`, vY].filter(Boolean).join("; ")).slice(0, xY).join(""),
          oY = `core error ${YY}${null!==(IY=null===rY||void 0===rY?void 0:rY.words)&&void 0!==IY?IY:""}${yY}${QY?`: ${QY}`:""}`,
          WY = {
            errorCode: String(RY),
            detail: String(aY),
            droppedBefore: String(ir),
            wasmBuild: DY.wasm,
            clientVersion: DY.client,
            ...null === rY || void 0 === rY ? void 0 : rY.gpuDetails
          };
        null !== rY && (0, gY.l)(rY) ? Wr((() => {
          console.warn(`${CY} coreError CORE-${YY}: ${oY} (not sent: the session's render warnings of its kind went)`, WY)
        })) : or({
          kind: RY === OY.G.JobsHeapGaveUp ? "meshHeap" : "coreError",
          code: `CORE-${YY}`,
          site: fY,
          fatal: !1,
          message: oY,
          details: WY,
          instance: null === rY || void 0 === rY ? void 0 : rY.instance
        })
      }
    }

    function er(YY) {
      return (0, HY.m)(YY instanceof zY.e ? YY.trap : YY, lY.H, lY._)
    }
    const Nr = "declined=js";

    function Br(YY) {
      return YY ? {
        labels: [Nr],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function cr(YY, rY, DY) {
      return Hr(YY, rY, DY, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function Kr(YY, rY, DY) {
      return Hr(YY, rY, DY, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function Hr(YY, rY, DY, FY, AY) {
      let {
        memoryDetails: IY = {},
        declined: RY = !1
      } = FY;
      const {
        code: OY,
        details: gY,
        message: aY
      } = (0, WY.H)(YY, rY), vY = [];
      null !== DY && (gY.trapKind = DY.kind, null !== DY.panic && (gY.panic = (0, HY.i)(DY.panic)), DY.refusedBytes > 0 && (gY.refusedAllocation = String(DY.refusedBytes)), vY.push((0, HY.p)(DY.kind, DY.refusedBytes)));
      const uY = Br(RY);
      return or({
        kind: "crash",
        code: OY,
        site: YY.site,
        fatal: AY,
        message: [...vY, ...uY.labels, aY].join("; "),
        details: {
          ...gY,
          ...uY.details,
          ...IY
        },
        error: YY.error
      })
    }

    function zr(YY, rY, DY) {
      return or({
        kind: "unsupported",
        code: rY,
        site: jY,
        fatal: !0,
        message: DY,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: YY,
          status: rY
        },
        screen: {
          text: (0, cY.r)(YY),
          reload: "download" === YY
        }
      })
    }

    function Zr(YY, rY, DY) {
      return or({
        kind: "unsupportedFallback",
        code: "blockedAfterLoss" === rY ? "blocked_after_loss" : "unsupported_js_fallback",
        site: jY,
        fatal: !1,
        message: DY,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: YY,
          status: "unsupported",
          decline: rY,
          fallback: "js"
        }
      })
    }
    const Cr = "misdrawn_gpu_js_fallback";

    function fr(YY, rY) {
      return or({
        kind: "gpuFallback",
        code: Cr,
        site: jY,
        fatal: !1,
        message: `the renderer plays ${YY} on ${rY} worse than the JS client`,
        details: {
          gpuFamily: YY,
          backend: rY,
          fallback: "js"
        }
      })
    }

    function jr(YY) {
      Er("counts", (async () => {
        await (0, sY.c)(YY), ar = !0
      }))
    }

    function hr(YY, rY, DY, FY) {
      const AY = Br(FY);
      return or({
        kind: "unsupported",
        code: rY,
        site: jY,
        fatal: !1,
        message: [...AY.labels, DY].join("; "),
        details: {
          cause: YY,
          status: rY,
          fallback: "js",
          ...AY.details
        }
      })
    }

    function dr() {
      const {
        code: YY,
        message: rY
      } = KY.b;
      return or({
        kind: "unstreamedLoad",
        code: YY,
        site: jY,
        fatal: !1,
        message: rY
      })
    }
    class Jr extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function Mr(YY) {
      return YY instanceof mY.m ? 0 === YY.code ? "JOIN-matchmake" : `JOIN-${YY.code}` : YY instanceof mY.c ? 0 === YY.code ? `JOIN-${YY.stage}` : `JOIN-${YY.stage}-${YY.code}` : YY instanceof EY.e ? "JOIN-gameCode" : YY instanceof Jr ? "JOIN-turnstilePage" : YY instanceof mY.A ? "JOIN-trafficCheck" : YY instanceof QY.e ? "JOIN-timeout" : "JOIN-network"
    }

    function wr(YY, rY) {
      const DY = (0, ZY.f)(YY),
        FY = {
          wasmBuild: rY.wasm,
          clientVersion: rY.client
        },
        AY = YY instanceof Jr ? {
          text: (0, cY.l)(),
          reload: !1
        } : void 0,
        IY = (0, VY.g)(YY),
        RY = "expected" !== IY;
      return or({
        kind: "join",
        code: Mr(YY),
        site: hY,
        fatal: !0,
        message: DY,
        details: FY,
        error: YY,
        screen: AY,
        toTransport: RY,
        instance: IY
      })
    }

    function br(YY, rY, DY) {
      var FY;
      const AY = (0, VY.g)(YY),
        IY = {
          cause: (YY instanceof mY.c || YY instanceof mY.m) && null !== (FY = YY.serverText) && void 0 !== FY ? FY : "",
          sinceJoinStart: (0, yY.d)(DY.sinceJoinStartMs),
          game: DY.game,
          ...(0, yY.m)(),
          wasmBuild: rY.wasm,
          clientVersion: rY.client
        };
      return or({
        kind: "pageJoin",
        code: Mr(YY),
        site: hY,
        fatal: !1,
        message: (0, ZY.f)(YY),
        details: IY,
        error: YY,
        toTransport: "unrecognised" === AY,
        instance: AY
      })
    }
    const Xr = {
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

    function qr(YY, rY) {
      let {
        unused: DY,
        answered: FY,
        heldMs: AY
      } = YY;
      const {
        code: IY,
        message: RY
      } = Xr[DY], OY = {
        unused: DY,
        answered: String(FY),
        heldMs: String(AY),
        wasmBuild: rY.wasm,
        clientVersion: rY.client
      };
      return or({
        kind: "seat",
        code: IY,
        site: hY,
        fatal: !1,
        message: RY,
        details: OY
      })
    }

    function pr(YY, rY, DY) {
      var FY;
      let AY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (FY = YY.name) && void 0 !== FY ? FY : String(YY.code);
      const IY = {
          closeCode: String(YY.code),
          recognised: String(null !== YY.name),
          closeReason: DY.closeReason,
          sinceJoined: (0, yY.d)(DY.sinceJoinedMs),
          game: DY.game,
          ...(0, yY.m)(),
          wasmBuild: rY.wasm,
          clientVersion: rY.client
        },
        RY = null === YY.name && !(0, yY.h)(YY.code);
      return or({
        kind: "disconnect",
        code: AY,
        site: dY,
        fatal: !1,
        message: "Left room",
        details: IY,
        toTransport: RY
      })
    }

    function kr(YY, rY) {
      const DY = {
        ...(0, aY.k)(YY),
        wasmBuild: rY.wasm,
        clientVersion: rY.client
      };
      return or({
        kind: "disconnect",
        code: `reconnect-${YY.reason}`,
        site: hY,
        fatal: !1,
        message: "Reconnect failed",
        details: DY
      })
    }

    function Gr(YY) {
      return YY.error instanceof TY.e ? `MODEL-${YY.error.status}` : YY.error instanceof eY.i ? "MODEL-ring" : "MODEL-network"
    }

    function xr(YY, rY) {
      const DY = Gr(YY),
        FY = `model file ${YY.file} ${YY.startup?"(startup) ":""}could not load`,
        AY = {
          file: String(YY.file),
          url: YY.url,
          wasmBuild: rY.wasm,
          clientVersion: rY.client
        };
      return or({
        kind: YY.startup ? "model" : "modelLate",
        code: DY,
        site: JY,
        fatal: YY.startup,
        message: FY,
        details: AY,
        error: YY.error
      })
    }

    function nr(YY, rY) {
      const DY = {
        wasmBuild: rY.wasm,
        clientVersion: rY.client
      };
      return or({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: MY,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: DY,
        error: YY
      })
    }

    function Pr(YY, rY, DY) {
      const FY = {
        delayMs: String(rY),
        wasmBuild: DY.wasm,
        clientVersion: DY.client
      };
      YY instanceof TY.e && (FY.status = String(YY.status));
      return or({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: MY,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: FY,
        error: YY
      })
    }

    function Ur(YY, rY) {
      const DY = {
        wasmBuild: rY.wasm,
        clientVersion: rY.client
      };
      return or({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: MY,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: DY,
        error: YY
      })
    }

    function Lr(YY, rY) {
      const DY = {
        wasmBuild: rY.wasm,
        clientVersion: rY.client
      };
      return or({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: WY.C,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: DY,
        error: YY
      })
    }

    function tr(YY, rY) {
      const DY = {
        wasmBuild: rY.wasm,
        clientVersion: rY.client
      };
      return or({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: kY,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: DY,
        error: YY
      })
    }

    function YD(YY, rY) {
      const {
        frames: DY,
        acks: FY,
        mask: AY,
        outcome: IY
      } = YY, RY = {
        frames: String(DY),
        acks: String(FY),
        mask: String(AY),
        outcome: null !== IY && void 0 !== IY ? IY : "resynced",
        wasmBuild: rY.wasm,
        clientVersion: rY.client
      };
      return or({
        kind: "recovered",
        code: "rejoined" === IY ? "CORE-eventOverflowRejoin" : "failed" === IY ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: qY,
        fatal: !1,
        message: `the event buffer refused records in ${DY} frames`,
        details: RY
      })
    }

    function rD(YY, rY, DY) {
      return or({
        kind: "recovered",
        code: "CORE-workerLost",
        site: YY,
        fatal: !1,
        message: `a ${YY} worker was lost`,
        details: {
          reason: rY,
          wasmBuild: DY.wasm,
          clientVersion: DY.client
        }
      })
    }

    function DD(YY, rY, DY) {
      const FY = {
        wasmBuild: DY.wasm,
        clientVersion: DY.client
      };
      return or({
        kind: "recovered",
        code: YY,
        site: WY.o,
        fatal: !1,
        message: rY,
        details: FY
      })
    }

    function FD(YY, rY) {
      const DY = {
        lastReason: YY,
        wasmBuild: rY.wasm,
        clientVersion: rY.client
      };
      return or({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: WY.C,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: DY
      })
    }

    function AD(YY, rY, DY) {
      return or({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: WY.l,
        fatal: !1,
        message: (0, SY.i)(YY) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: YY,
          ...rY,
          wasmBuild: DY.wasm,
          clientVersion: DY.client
        }
      })
    }

    function ID(YY, rY) {
      const DY = (0, gY.k)(),
        FY = {
          game: YY,
          renderWarned: String(DY),
          browser: (0, gY.g)(),
          wasmBuild: rY.wasm,
          clientVersion: rY.client
        },
        AY = `first view drew no whole terrain in ${NY.c/1e3} s${DY?", render warned":""}`;
      return or({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: GY,
        fatal: !1,
        message: AY,
        details: FY
      })
    }

    function RD(YY, rY, DY) {
      return or({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: YY,
        fatal: !1,
        message: `a ${YY} worker did not start`,
        details: {
          waitedMs: String(Math.round(rY)),
          wasmBuild: DY.wasm,
          clientVersion: DY.client
        }
      })
    }

    function OD(YY, rY, DY) {
      return or({
        kind: "recovered",
        code: "CORE-replayFault",
        site: YY,
        fatal: !1,
        message: `the replay's ${YY} failed`,
        details: {
          wasmBuild: DY.wasm,
          clientVersion: DY.client
        },
        error: rY
      })
    }
    const gD = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function aD(YY, rY, DY) {
      const FY = "lost" === rY && void 0 !== DY ? ` (${DY})` : "";
      return `the ${YY} ${gD[rY]}${FY}`
    }
    const vD = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };

    function uD(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now();
      const AY = null === DY.boundAtMs ? "unbound" : `up${(0,vY.g)(FY-DY.boundAtMs)}`,
        IY = null === DY.adapter ? "no adapter" : (0, vY.n)(DY.adapter),
        RY = `${(0,oY.g)()?"hidden":"visible"} ${AY} ${IY}${!0===DY.indirectHangs?" ih":""}`;
      if ("pipeline_failed" === YY) return `${YY} ${RY}`;
      const OY = null === rY || void 0 === rY ? void 0 : rY.message;
      return `${rY instanceof oY.f?"timeout":(0,vY.o)("frames_refused"===YY,"string"===typeof OY?OY:"")} ${RY}`
    }
    const sD = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function iD(YY, rY, FY) {
      var IY, RY, OY, aY, sY;
      let {
        cause: iY = "lost",
        error: yY,
        context: QY = vD,
        session: oY = sD
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const WY = uD(iY, yY, QY),
        EY = {
          losses: String(rY),
          cause: iY,
          detail: WY,
          vendor: null !== (IY = null === (RY = QY.adapter) || void 0 === RY ? void 0 : RY.vendor) && void 0 !== IY ? IY : "",
          architecture: null !== (OY = null === (aY = QY.adapter) || void 0 === aY ? void 0 : aY.architecture) && void 0 !== OY ? OY : "",
          indirectHangs: String(QY.indirectHangs),
          samples: String(oY.samples),
          sunShadows: String(oY.sunShadows),
          renderDistance: String(oY.renderDistance),
          gpuFamily: null !== (sY = (0, AY.b)()) && void 0 !== sY ? sY : "",
          browser: (0, gY.g)(),
          siteUsed: uY.s,
          wasmBuild: FY.wasm,
          clientVersion: FY.client
        },
        mY = aD(YY, iY),
        VY = or({
          kind: "recovered",
          code: "CORE-renderLost",
          site: bY,
          fatal: !1,
          message: mY,
          details: EY,
          error: yY
        });
      return Er("ga", (async () => {
        const {
          logError: rY
        } = await Promise.resolve().then((() => DY(2579))), FY = `${vY.c["webgpu"===YY?"WebGPU":"WebGL2"]}\n Error: ${WY}`;
        rY("warning", FY), rY("error", FY)
      })), VY
    }

    function yD(YY, rY) {
      var DY, FY;
      const AY = null === YY.name ? "TEXTURE-sources" : null === YY.url ? "TEXTURE-nourl" : YY.error instanceof BY.d ? `TEXTURE-${YY.error.status}` : "TEXTURE-network",
        IY = null === YY.name ? "terrain textures could not load" : `terrain texture ${YY.name} could not load`,
        RY = {
          texture: null !== (DY = YY.name) && void 0 !== DY ? DY : "",
          url: null !== (FY = YY.url) && void 0 !== FY ? FY : "",
          wasmBuild: rY.wasm,
          clientVersion: rY.client
        };
      return or({
        kind: "terrainTexture",
        code: AY,
        site: WY.z,
        fatal: !1,
        message: IY,
        details: RY,
        error: YY.error
      })
    }
    const QD = {
      previewAnimations: {
        site: XY,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: pY,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function oD(YY, rY, DY, FY) {
      const {
        site: AY,
        prefix: IY,
        name: RY
      } = QD[YY], {
        stage: OY,
        error: gY
      } = DY;
      return or({
        kind: YY,
        code: "decode" === OY ? null === gY ? `${IY}-decode` : `${IY}-trap` : gY instanceof TY.e ? `${IY}-${gY.status}` : `${IY}-network`,
        site: AY,
        fatal: !1,
        message: "decode" === OY ? `${RY} did not decode` : `${RY} could not load`,
        details: {
          url: rY,
          wasmBuild: FY.wasm,
          clientVersion: FY.client
        },
        error: gY
      })
    }
    const WD = "staleBuild";

    function ED(YY, rY, DY) {
      const FY = {
          failedSite: YY.site,
          url: YY.url,
          from: YY.from,
          sameBuild: String(YY.from === rY),
          reloadMs: String(Math.max(0, Date.now() - YY.at)),
          wasmBuild: DY.wasm,
          clientVersion: DY.client
        },
        AY = `reloaded into a newer build after ${YY.site} failed to load: ${YY.error}`;
      return or({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: WD,
        fatal: !1,
        message: AY,
        details: FY
      })
    }
  },
  40096: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => AY,
      c: () => FY
    });
    const FY = 3e4;
    class AY {
      constructor(YY) {
        this.gy = YY, this.waitedMs = 0, this.lastMs = null
      }
      frame(YY, rY) {
        if (rY) return !0;
        const DY = null === this.lastMs ? 0 : YY - this.lastMs;
        return this.lastMs = YY, DY <= 900 && (this.waitedMs += DY), !(this.waitedMs < FY) && (this.gy(), !0)
      }
    }
  },
  4371: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => RY,
      h: () => IY,
      j: () => AY
    });
    var FY = DY(4376);

    function AY(YY) {
      return "none" !== YY
    }

    function IY(YY, rY) {
      if (!YY) return "none";
      switch (rY) {
        case FY.W.Drawn:
          return "drawn";
        case FY.W.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function RY(YY) {
      return "drawn" === YY
    }
  },
  39693: (YY, rY, DY) => {
    DY.d(rY, {
      A: () => yY,
      e: () => FY,
      f: () => WY,
      g: () => QY,
      k: () => oY,
      n: () => sY,
      r: () => iY,
      v: () => vY,
      z: () => uY
    });
    class FY extends Error {
      constructor(YY) {
        super(`the join's code did not load: ${YY instanceof Error?YY.message:String(YY)}`, {
          cause: YY
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === YY || void 0 === YY ? void 0 : YY.request
      }
    }
    let AY = null,
      IY = null,
      RY = null;
    const OY = [];
    let gY = null;

    function aY(YY, rY) {
      try {
        YY(rY)
      } catch (DY) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", DY)
      }
    }

    function vY() {
      return gY
    }

    function uY(YY) {
      OY.push(YY), null !== gY && aY(YY, gY)
    }

    function sY(YY) {
      return AY ??= Promise.all([DY.e(69), DY.e(95), DY.e(209), DY.e(74), DY.e(186), DY.e(230), DY.e(210), DY.e(258), DY.e(92), DY.e(261), DY.e(237), DY.e(185), DY.e(195), DY.e(137), DY.e(85), DY.e(115), DY.e(235), DY.e(53)]).then((() => DY(41621))).then((rY => {
        rY.loadAudio(YY), gY = rY;
        for (const YY of OY) aY(YY, rY);
        return rY
      })).catch((YY => {
        throw AY = null, YY
      })), AY
    }
    async function iY(YY, rY) {
      try {
        const DY = await sY(YY);
        await DY.loadClientGame(rY)
      } catch (DY) {
        throw new FY(DY)
      }
    }

    function yY(YY, rY) {
      IY = {
        running: YY,
        shell: rY
      }
    }

    function QY() {
      return RY
    }
    async function oY(YY) {
      const rY = IY;
      if ((null === rY || void 0 === rY ? void 0 : rY.running) !== YY) throw new Error("the core's session has ended");
      const DY = await sY(rY.shell.audio).catch((YY => {
        throw new FY(YY)
      }));
      if (null !== RY) return RY;
      if (IY !== rY || YY.isStopped) throw new Error("the core stopped while the game code loaded");
      if (RY = DY.startGameHost(YY, rY.shell), null === RY) throw new Error("the core's shared tables didn't read, so the game can't start");
      return RY
    }

    function WY() {
      null !== RY && (null !== gY ? gY.endGameHost(RY) : RY.closeGame()), RY = null, IY = null
    }
  },
  39969: (YY, rY, DY) => {
    DY.d(rY, {
      A: () => uY,
      D: () => OY,
      c: () => aY,
      d: () => IY,
      f: () => RY,
      j: () => AY,
      m: () => iY,
      o: () => vY,
      s: () => gY,
      w: () => sY
    });
    var FY = DY(1753);
    const AY = new Uint8Array([12]),
      IY = 2e3,
      RY = 257;

    function OY(YY) {
      const rY = new Uint8Array(4);
      return new DataView(rY.buffer).setUint32(0, YY, !0), rY
    }
    class gY extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class aY extends Error {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(YY), this.stage = rY, this.code = DY, this.serverText = FY, this.name = "JoinError"
      }
    }
    class vY extends Error {
      constructor(YY) {
        super(YY), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class uY extends Error {
      constructor(YY) {
        super((0, FY.f)(YY), {
          cause: YY
        }), this.name = "TrafficCheckError"
      }
    }
    class sY extends Error {
      constructor(YY, rY, DY) {
        super(YY, {
          cause: DY
        }), this.networkLost = rY, this.name = "SeatRequestError"
      }
    }
    class iY extends Error {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(YY), this.code = rY, this.serverText = DY, this.name = "MatchmakeError"
      }
    }
  },
  39976: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => sY,
      g: () => uY
    });
    var FY = DY(2368),
      AY = DY(3045),
      IY = DY(38427),
      RY = DY(39966),
      OY = DY(39969),
      gY = DY(39982);
    const aY = "seat reservation expired.",
      vY = "early_leave";

    function uY(YY) {
      if (YY instanceof IY.e) return "expected";
      if (YY instanceof OY.w) return YY.networkLost ? "expected" : "unrecognised";
      if (YY instanceof OY.c) {
        if ("closed" === YY.stage && (0 === YY.code || (0, AY.h)(YY.code))) return "expected";
        if ("roomError" === YY.stage && (YY.serverText === aY || YY.serverText === vY)) return "expected"
      }
      return YY instanceof OY.c || YY instanceof OY.m ? null === (0, RY.j)(YY.code).name ? "unrecognised" : "known" : (0, FY.e)(YY) ? "expected" : YY instanceof OY.A || YY instanceof gY.g ? "known" : "unrecognised"
    }

    function sY(YY) {
      return YY instanceof IY.e ? "timedOut" : "expected" !== uY(YY) || (0, FY.e)(YY) || YY instanceof OY.c && 1001 === YY.code ? void 0 : "failed"
    }
  },
  40067: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => NY,
      i: () => uY,
      k: () => SY,
      o: () => WY,
      r: () => TY
    });
    var FY = DY(35916),
      AY = DY(35913);
    const IY = 64 * FY.e,
      RY = 40 * FY.f,
      OY = 36 * FY.f,
      gY = 20 * FY.f,
      aY = 2 * FY.f,
      vY = 5 * FY.f;

    function uY(YY) {
      return "footprint" !== YY
    }
    const sY = 2 * FY.f,
      iY = 4 * FY.f,
      yY = 35 * FY.f + sY + iY,
      QY = 6.5 * FY.f,
      oY = 132.5 * FY.e;

    function WY(YY) {
      const rY = QY + (0, AY.l)(YY) + YY * oY;
      return Math.ceil((2 * yY + rY) / IY) * IY
    }
    const EY = WY(AY.b),
      mY = (FY.f, FY.f, FY.f, {
        targetBytes: RY,
        leastBytes: gY
      }),
      VY = {
        targetBytes: OY,
        leastBytes: gY
      };

    function SY(YY) {
      return YY >= AY.b ? mY : VY
    }
    const lY = 2 * IY;

    function TY(YY, rY, DY) {
      return YY + rY + lY > (null !== DY && void 0 !== DY ? DY : EY)
    }
    const eY = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? YY => {
        requestIdleCallback(YY)
      } : null
    };
    class NY {
      constructor(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eY;
        this.memory = YY, this.readPeakStoredChunks = rY, this.onError = DY, this.clock = FY, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(YY, rY, DY) {
        this.shedding = {
          shed: YY,
          gy: rY,
          readDistanceInUse: DY
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(YY) {
        this.footprint = YY
      }
      setCeiling(YY) {
        this.ceilingBytes = YY, this.call((() => {
          this.memory.setCeiling(YY)
        }), void 0)
      }
      ceilingMayRefuse(YY) {
        return TY(this.memory.memoryBytes(), YY, this.ceilingBytes)
      }
      reserveAtJoin(YY) {
        let {
          targetBytes: rY,
          leastBytes: DY
        } = YY;
        const FY = this.memory.memoryBytes(),
          AY = FY + DY,
          IY = Math.max(rY + (this.ballastOn() ? vY : 0), AY),
          RY = this.call((() => this.memory.reserveUpFront(IY) ? "target" : IY > AY && this.memory.reserveUpFront(AY) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== RY) {
          const YY = "least" === RY ? `took ${AY} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${IY} bytes was refused at ${FY} bytes; ${YY}`)
        }
        return this.joinReserveTaken = RY, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== RY && this.shedFor("joinReserve"), "none" !== RY
      }
      afterFrame() {
        if (this.stopped) return;
        const YY = this.clock.now(),
          rY = null !== this.stepsHeldUntil && YY >= this.stepsHeldUntil;
        if (rY && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && YY >= this.ballastCheckAt && (this.takeBallast(YY), this.stopped)) return;
        const DY = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          FY = rY && "now" === DY ? "none" : DY,
          {
            requestIdle: AY
          } = this.clock;
        "now" === FY || null !== this.pendingSince && YY - this.pendingSince >= 500 ? this.step() : "idle" === FY && null === this.pendingSince && (null === AY ? this.step() : (this.pendingSince = YY, AY((() => {
          null !== this.pendingSince && this.step()
        })))), YY - this.statsAt >= 1e3 && (this.statsAt = YY, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var YY, rY;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (rY = this.shedding.readDistanceInUse()) && void 0 !== rY ? rY : this.distanceInUse);
          null === (YY = this.footprint) || void 0 === YY || YY.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(YY, rY) {
        this.noteWorker(`Mesh${YY}`, rY)
      }
      meshWorkerGone(YY) {
        this.workerGone(`Mesh${YY}`)
      }
      noteWorldgen(YY) {
        this.noteWorker("Worldgen", YY)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(YY, rY) {
        const DY = this.workers.get(YY);
        null !== DY && void 0 !== DY && DY.gone && (this.replacedRefusals.reserves += DY.stats.reservesRefused, this.replacedRefusals.allocations += DY.stats.allocationsRefused), this.workers.set(YY, {
          stats: rY,
          gone: !1
        })
      }
      workerGone(YY) {
        const rY = this.workers.get(YY);
        rY && (rY.gone = !0)
      }
      details() {
        var YY, rY;
        const DY = {
          wasmMemoryNow: `${(0,FY.g)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (DY.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (DY.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const AY = this.main;
        if (AY) {
          DY.wasmMemoryMain = BY(AY);
          const YY = Math.max(0, AY.peakLiveBytes - this.ballastPeakBytes),
            rY = 0 === this.peakStoredChunks ? "-" : (YY / this.peakStoredChunks / FY.e).toFixed(1);
          DY.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${rY} KiB`
        }
        for (const [FY, {
            stats: RY,
            gone: OY
          }] of this.workers) DY[`wasmMemory${FY}`] = BY(RY) + (OY ? " (gone)" : "");
        const IY = null !== (YY = null === (rY = this.footprint) || void 0 === rY ? void 0 : rY.describe()) && void 0 !== YY ? YY : null;
        return null !== IY && (DY.wasmMemoryFootprint = IY), DY
      }
      pageKillSnapshot() {
        var YY, rY, DY, AY, IY;
        let RY = (null !== (YY = null === (rY = this.main) || void 0 === rY ? void 0 : rY.reservesRefused) && void 0 !== YY ? YY : 0) + this.replacedRefusals.reserves,
          OY = (null !== (DY = null === (AY = this.main) || void 0 === AY ? void 0 : AY.allocationsRefused) && void 0 !== DY ? DY : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: FY
          }
          of this.workers.values()) RY += FY.reservesRefused, OY += FY.allocationsRefused;
        return {
          wasmMainMiB: Number((0, FY.g)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, FY.g)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: RY,
          refusedAllocations: OY,
          sheds: this.sheds,
          ...null === (IY = this.footprint) || void 0 === IY ? void 0 : IY.snapshot()
        }
      }
      workersMemoryBytes() {
        let YY = 0;
        for (const {
            stats: rY,
            gone: DY
          }
          of this.workers.values()) YY += DY ? 0 : rY.memoryBytes;
        return YY
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(aY)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(YY) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = YY + 1e3;
        const rY = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, rY)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(YY) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${YY}: frames grow on demand from here`)
      }
      shedFor(YY) {
        const {
          shedding: rY
        } = this;
        if (null === rY) return;
        this.pendingSince = null;
        const DY = this.call((() => rY.shed(YY)), null);
        this.stopped || (null !== DY ? (this.sheds++, this.shedCap = DY, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), rY.gy(YY, this.sheds, this.details())) : uY(YY) && this.stopSteps("nothing is left to shed"))
      }
      call(YY, rY) {
        if (this.stopped) return rY;
        try {
          return YY()
        } catch (DY) {
          return this.stop(), this.onError(DY), rY
        }
      }
    }

    function BY(YY) {
      const rY = (YY, rY) => `${YY}/${(0,FY.g)(rY)}`;
      return `memory ${(0,FY.g)(YY.memoryBytes)} live ${(0,FY.g)(YY.liveBytes)} peak ${(0,FY.g)(YY.peakLiveBytes)} unused ${(0,FY.g)(YY.unusedBytes)} ceiling ${(0,FY.g)(YY.ceilingBytes)} MiB; grows upFront ${rY(YY.grows.upFront,YY.grownBytes.upFront)} ahead ${rY(YY.grows.ahead,YY.grownBytes.ahead)} inFrame ${rY(YY.grows.onDemandInFrame,YY.grownBytes.onDemandInFrame)} other ${rY(YY.grows.onDemand,YY.grownBytes.onDemand)}; refused reserves ${YY.reservesRefused} allocations ${YY.allocationsRefused}`
    }
  },
  40074: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => gY,
      f: () => aY,
      h: () => iY,
      i: () => uY
    });
    var FY = DY(3316),
      AY = DY(4376),
      IY = DY(40082),
      RY = DY(40090),
      OY = DY(39904);
    const gY = 395,
      aY = 2147483648,
      vY = new Uint8Array(0);
    class uY extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class sY extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class iY {
      constructor(YY, rY, DY) {
        var FY, AY, RY, OY;
        let gY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = YY, this.build = rY, this.onFailure = DY, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.Mi = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (FY = gY.fetchFile) && void 0 !== FY ? FY : YY => (0, IY.j)(YY), this.onWritten = null !== (AY = gY.onWritten) && void 0 !== AY ? AY : null, this.onTaken = null !== (RY = gY.onTaken) && void 0 !== RY ? RY : null, this.onPackFileFailed = null !== (OY = gY.onPackFileFailed) && void 0 !== OY ? OY : null, this.startupLeft = new Set(YY.startup);
        for (const IY of YY.startup) this.request(IY)
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
      drawnUrl(YY) {
        return this.drawn.get(YY)
      }
      request(YY) {
        const rY = this.pending.get(YY);
        if (!0 === (null === rY || void 0 === rY ? void 0 : rY.ask)) return;
        const DY = this.Ei(YY, !0);
        DY.recheck = void 0 !== rY;
        const FY = this.drawn.get(YY);
        if (void 0 !== FY) return DY.ja = !0, DY.recheck = !0, void this.fetch(YY, DY, FY);
        this.fetchWanted(YY, DY)
      }
      async refresh() {
        const YY = ++this.refreshes,
          rY = new Set;
        for (const RY of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const YY of RY) 0 === (YY & IY.g) && rY.add(YY);
        const DY = [...rY];
        let FY;
        try {
          FY = await Promise.all(DY.map((YY => this.wanted(YY))))
        } catch {
          return null
        }
        if (YY !== this.refreshes) return null;
        const AY = {
          resent: 0,
          refetched: 0,
          delivered: DY.filter((YY => this.drawn.has(YY))).length
        };
        return DY.forEach(((YY, rY) => {
          const {
            url: DY,
            inPlaceOf: IY
          } = FY[rY], RY = this.pending.get(YY);
          if (void 0 !== RY) {
            if (RY.ja || void 0 === RY.url) return void(RY.recheck = !0);
            if (RY.url === DY) return;
            AY.refetched++;
            const rY = this.Ei(YY, RY.ask);
            return rY.recheck = RY.recheck, void this.fetch(YY, rY, DY, IY)
          }
          const OY = this.written.get(YY);
          void 0 === OY ? this.drawn.get(YY) !== (null !== DY && void 0 !== DY ? DY : void 0) && (AY.resent++, this.fetch(YY, this.Ei(YY, !1), DY, IY)) : OY.url !== (null !== DY && void 0 !== DY ? DY : "") && (OY.attempt.recheck = !0)
        })), AY
      }
      taken(YY, rY) {
        const DY = new Set,
          FY = new Set;
        for (const AY of Array.from(rY)) 0 === (AY & aY) ? DY.add(AY) : FY.add((AY & ~aY) >>> 0);
        for (const [AY, IY] of this.written) IY.seq > YY || (this.written.delete(AY), DY.has(IY.seq) ? this.refusedFile(AY, IY) : this.takenFile(AY, IY, !IY.empty && !FY.has(IY.seq)))
      }
      takenFile(YY, rY, DY) {
        const {
          attempt: FY
        } = rY;
        if (DY) {
          var AY;
          this.drawn.set(YY, rY.url), this.undrawn.delete(YY), void 0 !== FY.inPlaceOf ? this.refusedPack.set(YY, FY.inPlaceOf) : FY.ja || this.refusedPack.delete(YY), null === (AY = this.onTaken) || void 0 === AY || AY.call(this, YY, !0);
          const DY = this.pending.get(YY);
          if (!0 === (null === DY || void 0 === DY ? void 0 : DY.ja) && DY.url !== rY.url) {
            const DY = this.Ei(YY, !0);
            DY.ja = !0, DY.recheck = !0, this.fetch(YY, DY, rY.url)
          }
        } else {
          var IY;
          this.drawn.has(YY) || this.undrawn.add(YY), null === (IY = this.onTaken) || void 0 === IY || IY.call(this, YY, !1)
        }
        FY.recheck && this.resendIfChanged(YY)
      }
      refusedFile(YY, rY) {
        var DY, FY;
        if (null === (DY = this.onTaken) || void 0 === DY || DY.call(this, YY, !1), this.refusedPack.set(YY, rY.url), this.pending.has(YY)) return void(null === (FY = this.onPackFileFailed) || void 0 === FY || FY.call(this, YY, yY(rY.url)));
        const AY = this.Ei(YY, rY.attempt.ask);
        AY.recheck = rY.attempt.recheck, this.afterRefusal(YY, AY, rY.url)
      }
      async afterRefusal(YY, rY, DY) {
        var FY;
        let AY;
        try {
          AY = await this.wanted(YY)
        } catch (IY) {
          return void(this.pending.get(YY) === rY && this.giveUp(YY, rY, DY, IY))
        }
        this.pending.get(YY) === rY && (AY.inPlaceOf !== DY ? rY.ask || (null !== (FY = AY.url) && void 0 !== FY ? FY : void 0) !== this.drawn.get(YY) ? this.fetch(YY, rY, AY.url, AY.inPlaceOf) : this.pending.delete(YY) : this.fallBack(YY, rY, DY, yY(DY)))
      }
      Ei(YY, rY) {
        const DY = {
          url: void 0,
          ask: rY,
          ja: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(YY, DY);
        for (let FY = this.ready.length - 1; FY >= 0; FY--) this.ready[FY].file === YY && this.ready.splice(FY, 1);
        return DY
      }
      async wanted(YY) {
        const rY = await this.files.url(YY);
        return null !== rY && this.refusedPack.get(YY) === rY ? {
          url: await this.files.shippedUrl(YY),
          inPlaceOf: rY
        } : {
          url: rY,
          inPlaceOf: void 0
        }
      }
      fetchWanted(YY, rY) {
        const DY = this.files.url(YY);
        DY instanceof Promise ? DY.then((DY => {
          this.fetchFound(YY, rY, DY)
        }), (DY => {
          this.pending.get(YY) === rY && this.giveUp(YY, rY, "", DY)
        })) : this.fetchFound(YY, rY, DY)
      }
      fetchFound(YY, rY, DY) {
        null !== DY && this.refusedPack.get(YY) === DY ? Promise.resolve(this.files.shippedUrl(YY)).then((FY => {
          this.fetch(YY, rY, FY, DY)
        }), (FY => {
          this.pending.get(YY) === rY && this.giveUp(YY, rY, DY, FY)
        })) : this.fetch(YY, rY, DY)
      }
      fetch(YY, rY, DY, FY) {
        this.pending.get(YY) === rY && (rY.url = DY, rY.inPlaceOf = FY, null !== DY ? this.load(YY, rY, DY) : this.buildFile(YY, rY, "", vY))
      }
      load(YY, rY, DY) {
        const FY = this.Mi.get(YY);
        (null === FY || void 0 === FY ? void 0 : FY.url) !== DY ? this.fetchFile(DY).then((FY => {
          var AY, IY;
          this.pending.get(YY) === rY && (this.keptTotal += FY.byteLength - (null !== (AY = null === (IY = this.Mi.get(YY)) || void 0 === IY ? void 0 : IY.glb.byteLength) && void 0 !== AY ? AY : 0), this.Mi.set(YY, {
            url: DY,
            glb: FY
          }), this.buildFile(YY, rY, DY, FY))
        }), (FY => {
          this.pending.get(YY) === rY && this.fallBack(YY, rY, DY, FY)
        })) : this.buildFile(YY, rY, DY, FY.glb)
      }
      buildFile(YY, rY, DY, FY) {
        let AY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const RY = FY.byteLength > 0 && (0, IY.l)(DY) ? (YY | IY.e) >>> 0 : YY;
        this.queueRecord(YY, rY, DY, FY, this.build(RY, FY), AY)
      }
      queueRecord(YY, rY, DY, FY, IY, OY) {
        IY.then((IY => {
          if (this.pending.get(YY) !== rY) return;
          if (AY.r + (0, AY.ee)(IY.byteLength) > AY.Bc) return void this.ringRefused(YY, rY, DY, new uY(`${QY(DY)}'s record is ${IY.byteLength-RY.e} bytes, past the cmd ring's ${AY.Bc}`), OY);
          const gY = {
            file: YY,
            url: DY,
            payload: IY,
            glb: FY,
            attempt: rY
          };
          OY ? this.ready.unshift(gY) : this.ready.push(gY)
        }))
      }
      async fallBack(YY, rY, DY, FY) {
        var AY;
        let IY = null,
          RY = FY;
        try {
          IY = await this.files.shippedUrl(YY)
        } catch (OY) {
          RY = OY
        }
        this.pending.get(YY) === rY && (null !== IY && IY !== DY ? (null === (AY = this.onPackFileFailed) || void 0 === AY || AY.call(this, YY, FY), rY.ask || this.drawn.get(YY) !== IY ? (rY.url = IY, rY.inPlaceOf = DY, this.load(YY, rY, IY)) : this.pending.delete(YY)) : this.giveUp(YY, rY, DY, RY))
      }
      ringRefused(YY, rY, DY, FY) {
        let AY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, IY.l)(DY) ? this.fallBack(YY, rY, DY, FY): this.giveUp(YY, rY, DY, FY, AY)
      }
      giveUp(YY, rY, DY, AY) {
        let IY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: YY,
          url: QY(DY),
          error: AY,
          startup: this.startupLeft.has(YY)
        }), rY.ask || !this.drawn.has(YY) ? (0, FY.O)(AY) ? this.queueRecord(YY, rY, DY, vY, Promise.resolve((0, RY.n)(YY, (0, OY.f)(AY))), IY) : this.buildFile(YY, rY, DY, vY, IY) : this.pending.delete(YY)
      }
      async resendIfChanged(YY) {
        var rY;
        if (0 !== (YY & IY.g)) return;
        let DY;
        try {
          DY = await this.wanted(YY)
        } catch {
          return
        }(null !== (rY = DY.url) && void 0 !== rY ? rY : void 0) === this.drawn.get(YY) || this.pending.has(YY) || this.written.has(YY) || this.fetch(YY, this.Ei(YY, !1), DY.url, DY.inPlaceOf)
      }
      drain(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === YY) return;
        let DY = 0,
          FY = 0;
        for (; FY < this.ready.length && DY < 262144;) {
          const OY = this.ready[FY];
          if (this.written.has(OY.file)) {
            FY++;
            continue
          }
          const vY = this.nextSeq;
          new DataView(OY.payload.buffer, OY.payload.byteOffset, OY.payload.byteLength).setUint32(RY.h, vY, !0);
          const sY = OY.attempt.ja && OY.glb.byteLength > 0 && this.drawn.get(OY.file) === OY.url;
          if (YY(gY, sY ? 1 : 0, OY.payload)) {
            if (this.nextSeq = vY >= aY - 1 ? 1 : vY + 1, this.ready.splice(FY, 1), DY += OY.payload.byteLength, this.pending.delete(OY.file), this.startupLeft.delete(OY.file), this.written.set(OY.file, {
                seq: vY,
                url: OY.url,
                empty: 0 === OY.glb.byteLength,
                attempt: OY.attempt
              }), OY.glb.byteLength > 0) try {
              var AY;
              null === (AY = this.onWritten) || void 0 === AY || AY.call(this, OY.file, OY.glb)
            } catch (IY) {
              console.warn("ModelFeed: reading the file's images failed", IY)
            }
          } else {
            if (null === rY || 0 === OY.glb.byteLength || rY(OY.payload.byteLength)) return;
            this.ready.splice(FY, 1);
            const YY = new uY(`${QY(OY.url)}'s record is ${OY.payload.byteLength-RY.e} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(OY.file, OY.attempt, OY.url, YY, !0)
          }
        }
      }
    }

    function yY(YY) {
      return new sY(`presentation refused ${QY(YY)}`)
    }

    function QY(YY) {
      return YY.startsWith("data:") ? `${YY.slice(0,Math.min(Math.max(YY.indexOf(","),5),64))},...` : YY
    }
  },
  40082: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => RY,
      g: () => IY,
      j: () => vY,
      l: () => OY,
      n: () => aY,
      r: () => gY
    });
    var FY = DY(3316),
      AY = DY(2795);
    const IY = 2147483648,
      RY = 1073741824;

    function OY(YY) {
      return YY.startsWith("data:")
    }

    function gY(YY) {
      let {
        onTableFailed: rY,
        packUrl: DY
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const FY = aY();
      FY.catch((YY => {
        null === rY || void 0 === rY || rY(YY)
      }));
      const AY = async rY => (await FY).fileUrl((rY & ~IY) >>> 0, YY);
      return {
        startup: [],
        url: async YY => {
          if (DY && 0 === (YY & IY)) {
            const rY = await FY,
              AY = rY.filePackName(YY),
              IY = null === AY || "lifeform" === rY.fileSource(YY) ? null : DY(AY);
            if (null !== IY) return IY
          }
          return AY(YY)
        },
        shippedUrl: AY
      }
    }

    function aY() {
      return DY.e(41).then((() => DY(42424)))
    }
    async function vY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return YY.startsWith("data:") ? (0, AY.e)(YY.slice(YY.indexOf(",") + 1), rY) : (0, FY.D)(YY, {
        spare: rY
      })
    }
  },
  40090: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => aY,
      h: () => vY,
      k: () => iY,
      l: () => oY,
      n: () => yY,
      q: () => sY,
      t: () => QY
    });
    const FY = 826427981,
      AY = 1,
      IY = 2,
      RY = 44,
      OY = 46,
      gY = 58,
      aY = 8,
      vY = 4;

    function uY(YY, rY, DY) {
      const AY = (new TextEncoder).encode(DY),
        IY = aY + 4 * (rY.length + 2),
        RY = new Uint8Array(IY + (AY.byteLength + 3 & -4)),
        OY = new DataView(RY.buffer);
      return OY.setUint32(0, YY, !0), OY.setUint32(aY, FY, !0), rY.forEach(((YY, rY) => {
        OY.setUint32(aY + 4 * (rY + 1), YY, !0)
      })), OY.setUint32(IY - 4, AY.byteLength, !0), RY.set(AY, IY), RY
    }

    function sY(YY, rY) {
      return uY(YY, [IY], rY)
    }

    function iY(YY, rY) {
      return uY(YY, [AY, OY], rY)
    }

    function yY(YY, rY) {
      return uY(YY, [AY, gY], rY)
    }

    function QY(YY, rY) {
      return uY(YY, [AY, RY], rY)
    }

    function oY(YY) {
      const rY = aY;
      if (YY.byteLength < rY + 12) return !1;
      const DY = new DataView(YY.buffer, YY.byteOffset, YY.byteLength);
      return DY.getUint32(rY, !0) === FY && DY.getUint32(rY + 4, !0) === AY && DY.getUint32(rY + 8, !0) === RY
    }
  },
  40063: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => EY,
      g: () => WY,
      k: () => lY,
      l: () => SY,
      n: () => TY,
      r: () => QY
    });
    var FY = DY(4382),
      AY = DY(39945);
    const IY = 18,
      RY = 19,
      OY = 20,
      gY = {
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
        [IY]: "retry linked",
        [RY]: "fallback linked",
        [OY]: "fallback failed",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function aY(YY, rY) {
      return YY === IY ? "program retry" : YY === RY || YY === OY ? `program fallback ${rY}` : "program"
    }
    const vY = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      uY = {
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
      sY = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      iY = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld"
      },
      yY = {
        1280: "invalid enum",
        1281: "invalid value",
        1282: "invalid operation",
        1285: "out of memory",
        1286: "invalid framebuffer operation",
        37442: "context lost"
      };

    function QY(YY) {
      return String(YY).replace(/\d/g, (YY => String.fromCharCode(97 + Number(YY))))
    }

    function oY(YY, rY) {
      var DY;
      return null !== (DY = YY[rY]) && void 0 !== DY ? DY : QY(rY)
    }

    function WY() {
      return QY((0, AY.e)())
    }

    function EY(YY, rY) {
      switch (YY) {
        case FY.f.RenderSceneRowNotDrawn:
          return {
            words: ` ${oY(uY,rY)}`, instance: String(rY), group: String(YY)
          };
        case FY.f.RenderChunkMeshNotDrawn: {
          const DY = 0 === (128 & rY) ? "" : " shortage",
            FY = rY >>> 8;
          return {
            words: ` ${oY(sY,127&rY)}${DY}${0===FY?"":` kind ${QY(FY)}`}`,
            instance: String(rY),
            group: String(YY)
          }
        }
        case FY.f.RenderInternal: {
          const DY = oY(vY, 255 & rY),
            FY = rY >>> 8 & 255;
          if (0 === FY) return {
            words: ` ${DY}`,
            instance: String(rY),
            group: String(YY)
          };
          const AY = oY(gY, FY),
            IY = rY >>> 16;
          return {
            words: ` ${DY} ${AY} program ${QY(IY)}`,
            instance: `${DY} ${AY}`,
            group: aY(FY, DY),
            gpuDetails: {
              programFailure: AY,
              program: String(IY)
            }
          }
        }
        case FY.f.RenderSerialLinks: {
          const DY = oY(iY, rY);
          return {
            words: ` ${DY}`,
            instance: String(rY),
            group: String(YY),
            gpuDetails: {
              serialLinks: DY
            }
          }
        }
        case FY.f.RenderGlErrorAfterRestore: {
          const DY = oY(yY, 65535 & rY),
            FY = rY >>> 16,
            AY = 65535 !== FY;
          return {
            words: ` ${DY}${AY?` program ${QY(FY)}`:""}`,
            instance: String(rY),
            group: String(YY),
            gpuDetails: AY ? {
              glError: DY,
              program: String(FY)
            } : {
              glError: DY
            }
          }
        }
        default:
          return null
      }
    }
    const mY = 2,
      VY = new Map;

    function SY(YY) {
      let {
        group: rY,
        instance: DY
      } = YY, FY = VY.get(rY);
      return void 0 === FY && (FY = [], VY.set(rY, FY)), !FY.includes(DY) && (FY.length >= mY || (FY.push(DY), !1))
    }

    function lY() {
      return VY.size > 0
    }

    function TY() {
      VY.clear()
    }
  },
  39982: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => WY,
      g: () => EY,
      h: () => oY,
      j: () => lY
    });
    var FY = DY(6208),
      AY = DY(25),
      IY = DY(3873),
      RY = DY(4382),
      OY = DY(6200),
      gY = DY(39986);

    function aY(YY, rY) {
      const DY = (0, OY.e)(rY.variants);
      return YY.setShaderPack(DY.variantFlags, DY.hooks, DY.moduleCodes, (0, gY.t)(rY.layers), gY.m[rY.Qa], rY.keepCircleShadows)
    }
    const vY = 0,
      uY = 1,
      sY = 2,
      iY = "shaderPack:failedToCompile",
      yY = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      QY = new Set(["not_requested", "off_after_loss", "gpu_class_webgl"]);

    function oY(YY, rY) {
      var DY;
      const FY = null !== (DY = null === YY || void 0 === YY ? void 0 : YY.reason) && void 0 !== DY ? DY : "none";
      return yY.has(FY) ? {
        messageKey: rY ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === FY && "override" === (null === YY || void 0 === YY ? void 0 : YY.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: QY.has(FY) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    const WY = {
      messageKey: "shaderPack:failedDeviceGraphics",
      noAdapter: !1
    };
    class EY extends Error {
      constructor(YY) {
        super(`the shader pack can't run in this game: ${YY}`), this.messageKey = YY, this.name = "ShaderPackJoinError"
      }
    }
    const mY = "strict";
    class VY {
      constructor(YY) {
        this.deps = YY, this.pagePack = void 0, this.loaded = null, this.Qa = mY, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = YY.load().catch((rY => (YY.warn("the shader pack could not load: the game draws without it", rY), {
          status: "none"
        }))).then((YY => (this.loaded = YY, "active" === YY.status && (this.handOverToPreviews(YY), null !== YY.harnessPolicy && (this.Qa = YY.harnessPolicy, this.handOver())), YY)))
      }
      async join(YY) {
        this.leave();
        const rY = this.game,
          [DY, AY] = await Promise.all([this.pagePack, this.policyOf(YY)]);
        if (rY !== this.game || "none" === DY.status) return null;
        const IY = "active" === DY.status ? DY.pack.variants : DY.variants,
          RY = (0, FY.h)(IY, AY);
        if (RY && "active" === DY.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (RY) {
          const YY = this.cantRun(DY, AY);
          if (null !== YY) return YY
        } else if ("blocked" === DY.status || null === this.deps.core) return null;
        return this.Qa = AY, this.handOver(), RY && this.refused ? iY : (this.joined = !0, this.offInThisGame = !RY, null)
      }
      async replay(YY) {
        const rY = await this.join(YY);
        null === rY ? this.playable() : this.deps.failInGame(rY)
      }
      cantRun(YY, rY) {
        const {
          core: DY,
          noWebGpu: FY
        } = this.deps;
        if ("blocked" === YY.status) {
          return "shaderPack:failedUnchecked" === YY.messageKey && null === DY && FY.noAdapter ? FY.messageKey : YY.messageKey
        }
        return this.refused || this.failedPolicies.has(rY) ? iY : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(iY) : (null !== this.couldntRun ? this.notify(IY.c, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.Qa) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(YY) {
        for (const {
            code: rY,
            detail: DY
          }
          of YY)
          if (rY === RY.f.RenderShaderPackNotRun) switch (255 & DY) {
            case vY:
              this.refused = !0, this.failed();
              break;
            case uY:
              this.failedPolicies.add(this.Qa), this.failed();
              break;
            case sY:
              this.failedModelPolicies.add(this.Qa), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(iY) : this.failedWhileJoining = !0)
      }
      fail(YY) {
        this.leave(), this.deps.failInGame(YY)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(YY, rY) {
        const DY = this.game;
        this.deps.notify(YY, (() => DY === this.game && this.joined), rY)
      }
      handOver() {
        var YY;
        const {
          core: rY
        } = this.deps;
        null !== rY && "active" === (null === (YY = this.loaded) || void 0 === YY ? void 0 : YY.status) && (aY(rY, {
          ...this.loaded.pack,
          Qa: this.Qa
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(YY) {
        let {
          pack: rY,
          harnessPolicy: DY
        } = YY;
        const {
          previews: FY
        } = this.deps;
        null !== FY && aY(FY, {
          ...rY,
          Qa: null !== DY && void 0 !== DY ? DY : mY
        })
      }
      policyOf(YY) {
        return this.deps.policyOf(YY).catch((YY => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", YY), mY)))
      }
    }
    const SY = "wasmShaderPackNotice";

    function lY(YY, rY, DY, FY) {
      return AY.g.subscribe(SY, (YY => {
        let {
          translationKey: rY,
          stillCurrent: DY,
          reasonKey: FY
        } = YY;
        DY() && AY.g.vo("chat", (0, IY.f)(rY, FY))
      })), new VY({
        load: TY,
        policyOf: eY,
        core: YY,
        previews: rY,
        noWebGpu: DY,
        notify: (YY, rY, DY) => {
          const FY = {
            translationKey: YY,
            stillCurrent: rY,
            reasonKey: DY
          };
          AY.g.vo(SY, FY, !0)
        },
        failInGame: YY => {
          AY.g.vo(IY.d, YY)
        },
        warn: FY
      })
    }
    async function TY() {
      const [{
        shaderPackPage: YY,
        harnessShaderPackMode: rY
      }, {
        shaderPackTextures: FY
      }] = await Promise.all([DY.e(130).then((() => DY(38553))), DY.e(131).then((() => DY(6194)))]), AY = await YY.load();
      return "active" !== AY.status ? AY : {
        status: "active",
        pack: {
          variants: AY.pack.variants,
          layers: FY().layers,
          keepCircleShadows: AY.pack.keepCircleShadows
        },
        harnessPolicy: rY()
      }
    }
    async function eY(YY) {
      var rY;
      const [{
        harnessShaderPackMode: FY
      }, {
        getShaderPackPolicy: AY
      }] = await Promise.all([DY.e(130).then((() => DY(38553))), DY.e(89).then((() => DY(40254)))]);
      return null !== (rY = FY()) && void 0 !== rY ? rY : AY(YY)
    }
  },
  40098: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => OY,
      h: () => oY,
      i: () => gY,
      j: () => aY,
      m: () => vY,
      p: () => sY
    });
    var FY = DY(40104),
      AY = DY(40109);
    const IY = "atlas:",
      RY = 3e4;
    class OY extends Error {
      constructor(YY, rY) {
        super(`fetching ${YY} answered HTTP ${rY}`), this.url = YY, this.status = rY, this.name = "TerrainTextureFetchError"
      }
    }

    function gY(YY) {
      if (!YY.startsWith(IY)) return null;
      const rY = Number(YY.slice(IY.length));
      return Number.isInteger(rY) && rY >= 0 ? rY : null
    }
    async function aY() {
      const YY = await DY.e(196).then((() => DY(33702)));
      return {
        atlasSheets: YY.blockAtlasUrls,
        texture: rY => {
          var DY, FY, IY;
          return null !== (DY = null !== (FY = null !== (IY = YY.animatedBlockTextures[rY]) && void 0 !== IY ? IY : YY.rotatedBlockTextures[rY]) && void 0 !== FY ? FY : AY.e[rY]) && void 0 !== DY ? DY : null
        }
      }
    }
    async function vY(YY) {
      const rY = new AbortController,
        DY = setTimeout((() => {
          rY.abort(new DOMException(`${YY} took over ${RY} ms`, "TimeoutError"))
        }), RY);
      let FY;
      try {
        const DY = await fetch(YY, {
          signal: rY.signal
        });
        if (!DY.ok) throw new OY(YY, DY.status);
        FY = await DY.blob()
      } finally {
        clearTimeout(DY)
      }
      const AY = await createImageBitmap(FY, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return sY(AY)
      } finally {
        AY.close()
      }
    }
    const uY = 8192;

    function sY(YY) {
      const {
        width: rY,
        height: DY
      } = YY, AY = Math.max(1, Math.min(DY, uY)), IY = (0, FY.d)(rY, AY, {
        willReadFrequently: !0
      });
      if (!IY) throw new Error("no 2D context to read the texture back");
      IY.globalCompositeOperation = "copy";
      const RY = new Uint8Array(rY * DY * 4);
      for (let FY = 0; FY < DY; FY += AY) {
        const OY = Math.min(AY, DY - FY);
        IY.drawImage(YY, 0, FY, rY, OY, 0, 0, rY, OY), RY.set(IY.getImageData(0, 0, rY, OY).data, FY * rY * 4)
      }
      return {
        width: rY,
        height: DY,
        pixels: RY
      }
    }
    async function iY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : vY;
      const FY = [],
        AY = await Promise.all(YY.map((async YY => {
          var AY, RY;
          const OY = null !== (AY = null === (RY = rY.decoded) || void 0 === RY ? void 0 : RY.call(rY, YY)) && void 0 !== AY ? AY : null,
            aY = null === OY ? function(YY, rY) {
              if (YY.startsWith(IY)) {
                var DY;
                const FY = gY(YY);
                return null === FY ? null : null !== (DY = rY.atlasSheets[FY]) && void 0 !== DY ? DY : null
              }
              return rY.texture(YY)
            }(YY, rY) : null,
            vY = null !== OY && void 0 !== OY ? OY : null === aY ? null : DY(aY);
          if (null === vY) return FY.push({
            name: YY,
            url: aY,
            error: new Error(`no URL for terrain texture ${YY}`)
          }), null;
          try {
            const rY = await vY;
            if (rY.pixels.byteLength !== rY.width * rY.height * 4) throw new Error(`decoded ${rY.pixels.byteLength} bytes for ${rY.width}x${rY.height} texels`);
            return {
              name: YY,
              texture: rY
            }
          } catch (uY) {
            return FY.push({
              name: YY,
              url: aY,
              error: uY
            }), null
          }
        }))),
        RY = AY.filter((YY => null !== YY)),
        OY = new Uint32Array(2 * RY.length);
      RY.forEach(((YY, rY) => {
        let {
          texture: DY
        } = YY;
        OY[2 * rY] = DY.width, OY[2 * rY + 1] = DY.height
      }));
      return {
        handOver: {
          names: RY.map((YY => {
            let {
              name: rY
            } = YY;
            return rY
          })),
          textures: RY.map((YY => {
            let {
              texture: rY
            } = YY;
            return rY.pixels
          })),
          sizes: OY
        },
        failures: FY
      }
    }
    const yY = [2e3, 1e4, 3e4, 6e4, 12e4];

    function QY() {}
    class oY {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yY,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = YY, this.retryMs = rY, this.keepBelow = DY, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aY,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const FY = ++this.started,
          AY = {
            decode: DY.decode,
            wholeAtlas: DY.wholeAtlas
          };
        return this.loadAndHandOver(rY, AY, YY, (() => {
          var YY;
          return FY < this.landed || !1 === (null === (YY = DY.wanted) || void 0 === YY ? void 0 : YY.call(DY))
        }), {
          onTaken: (YY, DY) => {
            this.landed = FY, this.current = {
              mine: FY,
              sources: rY,
              load: AY,
              Mi: YY,
              failed: DY
            }
          }
        })
      }
      restore(YY) {
        var rY;
        const DY = this.current;
        if (null === DY) return Promise.resolve(null);
        if ((null === (rY = this.restoring) || void 0 === rY ? void 0 : rY.mine) === DY.mine) return this.restoring.done;
        const FY = {
          mine: DY.mine,
          done: this.restoreLanded(DY, YY).finally((() => {
            this.restoring === FY && (this.restoring = null)
          }))
        };
        return this.restoring = FY, FY.done
      }
      async restoreLanded(YY, rY) {
        const DY = () => this.landed !== YY.mine,
          {
            Mi: FY
          } = YY;
        if (null !== FY) return this.stopped() ? null : this.core.setTerrainTextures(FY.names, FY.textures, FY.sizes);
        let AY = rY;
        for (let IY = 0;; IY++) {
          const rY = this.retryMs.at(IY),
            FY = {
              allOrNothingExcept: void 0 === rY ? void 0 : YY.failed
            },
            RY = await this.loadAndHandOver(YY.sources, YY.load, AY, DY, FY);
          if (!1 !== RY || void 0 === rY || this.stopped()) return RY;
          if (AY = QY, await new Promise((YY => {
              setTimeout(YY, rY)
            })), DY()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(YY, rY, DY, FY) {
        let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const IY = this.core.terrainTextureNames();
        var RY;
        if (0 === IY.length) return null === (RY = AY.onTaken) || void 0 === RY || RY.call(AY, null, new Set), !0;
        let OY, aY;
        try {
          OY = await YY(), aY = await iY(IY, OY, rY.decode)
        } catch (oY) {
          return FY() ? null : (DY({
            name: null,
            url: null,
            error: oY
          }), !1)
        }
        if (FY() || this.stopped()) return null;
        for (const gY of aY.failures) DY(gY);
        const vY = AY.allOrNothingExcept;
        if (void 0 !== vY && aY.failures.some((YY => {
            let {
              name: rY
            } = YY;
            return null === rY || !vY.has(rY)
          })) || !0 === rY.wholeAtlas && aY.failures.some((YY => {
            let {
              name: rY
            } = YY;
            return null === rY || null !== gY(rY)
          }))) return !1;
        const {
          handOver: uY
        } = aY, sY = function(YY) {
          return YY.textures.reduce(((YY, rY) => YY + rY.byteLength), 0)
        }(uY) < this.keepBelow, yY = this.core.setTerrainTextures(uY.names, uY.textures, uY.sizes, sY ? void 0 : () => {
          !async function(YY, rY) {
            await rY;
            for (const {
                buffer: FY
              }
              of YY) {
              const YY = FY;
              var DY;
              if (!YY.detached) null === (DY = YY.transfer) || void 0 === DY || DY.call(YY, 0)
            }
          }(uY.textures, OY.heldUntil)
        });
        if (yY) {
          var QY;
          const YY = new Set(aY.failures.flatMap((YY => {
            let {
              name: rY
            } = YY;
            return null === rY ? [] : [rY]
          })));
          null === (QY = AY.onTaken) || void 0 === QY || QY.call(AY, sY ? uY : null, YY)
        }
        return yY
      }
    }
  },
  40118: (YY, rY, DY) => {
    function FY(YY) {
      return "fetch" === YY || "timeout" === YY || "integrity" === YY ? "download" : "browser"
    }
    DY.d(rY, {
      e: () => AY,
      i: () => RY,
      j: () => gY,
      l: () => OY,
      n: () => FY,
      r: () => IY
    });
    const AY = "https://discord.gg/playbloxd";

    function IY(YY) {
      return "download" === YY ? {
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

    function RY(YY, rY) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: rY ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: YY.code
        },
        discordLink: rY,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function OY() {
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

    function gY(YY, rY, DY) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: DY ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: YY.reason
        },
        discordLink: null === YY.name,
        confirm: rY ? "general:reconnect" : YY.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  6200: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => VY,
      f: () => SY,
      i: () => EY,
      m: () => WY
    });
    var FY = DY(6208);
    const AY = 6,
      IY = 3,
      RY = 1,
      OY = 2,
      gY = 4,
      aY = 8,
      vY = 16,
      uY = 32,
      sY = 64,
      iY = 128,
      yY = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function QY(YY) {
      if (!YY) return 0;
      const rY = yY.indexOf(YY);
      if (rY <= 0) throw new Error(`"${YY}" is not a shader pack hook function`);
      return rY
    }

    function oY(YY) {
      if (0 === YY) return null;
      const rY = yY[YY];
      if (void 0 === rY) throw new Error(`${YY} is not a shader pack hook function id`);
      return rY
    }

    function WY(YY) {
      const rY = FY.c.length;
      return {
        strict: YY >= rY,
        program: FY.c[YY % rY]
      }
    }

    function EY(YY) {
      return Number(YY.strict) * FY.c.length + FY.c.indexOf(YY.program)
    }

    function mY(YY) {
      return "" === YY ? [] : YY.split(" ")
    }

    function VY(YY) {
      const rY = {
        variantFlags: new Uint8Array(AY),
        hooks: new Uint8Array(AY * IY),
        moduleCodes: Array(AY).fill(""),
        reads: Array(2 * AY).fill("")
      };
      for (const DY of YY) {
        const YY = EY(DY.key),
          FY = (YY, rY) => null === DY.hooks.surface || DY.reads.fragment.includes(YY) ? 0 : rY;
        rY.variantFlags[YY] = (DY.sceneDepth ? RY : 0) | (DY.movesVertices ? OY : 0) | (DY.sunShadow ? gY : 0) | (DY.airShadow ? aY : 0) | (DY.discards ? vY : 0) | FY("localPosition", uY) | FY("enchantSpeed", sY) | FY("enchantTier", iY), rY.hooks[YY * IY] = QY(DY.hooks.vertex), rY.hooks[YY * IY + 1] = QY(DY.hooks.surface), rY.hooks[YY * IY + 2] = QY(DY.hooks.light), rY.moduleCodes[YY] = DY.moduleCode, rY.reads[2 * YY] = DY.reads.vertex.join(" "), rY.reads[2 * YY + 1] = DY.reads.fragment.join(" ")
      }
      return rY
    }

    function SY(YY) {
      const {
        hooks: rY,
        moduleCodes: DY,
        reads: FY
      } = YY;
      return Array.from(YY.variantFlags, ((YY, AY) => {
        const uY = AY * IY;
        return {
          key: WY(AY),
          hooks: {
            vertex: oY(rY[uY]),
            surface: oY(rY[uY + 1]),
            light: oY(rY[uY + 2])
          },
          moduleCode: DY[AY],
          sceneDepth: 0 !== (YY & RY),
          sunShadow: 0 !== (YY & gY),
          airShadow: 0 !== (YY & aY),
          movesVertices: 0 !== (YY & OY),
          discards: 0 !== (YY & vY),
          reads: {
            vertex: mY(FY[2 * AY]),
            fragment: mY(FY[2 * AY + 1])
          }
        }
      }))
    }
  },
  39986: (YY, rY, DY) => {
    DY.d(rY, {
      A: () => yY,
      c: () => AY,
      e: () => FY,
      f: () => sY,
      i: () => vY,
      m: () => oY,
      o: () => IY,
      p: () => OY,
      q: () => gY,
      r: () => RY,
      t: () => QY,
      x: () => iY
    });
    const FY = 3,
      AY = 0,
      IY = 1,
      RY = 2,
      OY = {
        uniform: 3,
        ls: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      gY = 10,
      aY = "BloxdPackInputs",
      vY = "bloxdPackInputs",
      uY = [{
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
      sY = 80;

    function iY() {
      const YY = uY.map((YY => {
        let {
          name: rY,
          type: DY
        } = YY;
        return `    ${rY}: ${DY},\n`
      })).join("");
      return `struct ${aY} {\n${YY}}\n@group(${FY}) @binding(${AY}) var<uniform> ${vY}: ${aY};\n`
    }

    function yY(YY, rY) {
      const DY = new DataView(YY, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, sY),
        [FY, AY, IY, RY, OY, gY] = uY;
      DY.setFloat32(FY.offset, rY.seconds, !0), DY.setUint32(AY.offset, rY.lit ? 1 : 0, !0);
      for (let aY = 0; aY < 3; aY++) DY.setInt32(IY.offset + 4 * aY, rY.renderOffset[aY], !0), DY.setFloat32(RY.offset + 4 * aY, rY.i6[aY], !0), DY.setFloat32(OY.offset + 4 * aY, rY.eyePosition[aY], !0), DY.setFloat32(gY.offset + 4 * aY, rY.shadowDirection[aY], !0)
    }

    function QY(YY) {
      const rY = new Uint32Array(Math.max(1, YY.length));
      return YY.forEach(((YY, DY) => {
        let {
          id: FY,
          rotation: AY
        } = YY;
        rY[DY] = 65535 & FY | (3 & AY) << 16
      })), rY
    }
    const oY = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6208: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY,
      e: () => RY,
      h: () => OY,
      l: () => AY,
      o: () => IY
    });
    const FY = ["terrain", "liquid", "model"];

    function AY() {
      const YY = [];
      for (const rY of [!1, !0])
        for (const DY of FY) YY.push({
          strict: rY,
          program: DY
        });
      return YY
    }

    function IY(YY) {
      return `${YY.strict?"strict":"allow"}.${YY.program}`
    }

    function RY(YY) {
      return !YY.hooks.vertex && !YY.hooks.surface && !YY.hooks.light
    }

    function OY(YY, rY) {
      return "off" !== rY && (null === YY || YY.some((YY => YY.key.strict === ("strict" === rY) && !RY(YY))))
    }
  },
  40015: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => FY,
      h: () => IY,
      i: () => gY,
      m: () => RY,
      p: () => AY
    });
    const FY = /^alloc_failed (\d+) bytes$/;

    function AY(YY, rY) {
      return IY(YY, rY) ? `trap=alloc_failed ${rY} bytes` : `trap=${YY}`
    }

    function IY(YY, rY) {
      return "unreachable" === YY && rY > 0
    }

    function RY(YY, rY, DY) {
      const FY = function(YY) {
        return YY instanceof WebAssembly.RuntimeError ? /unreachable/i.test(YY.message) ? "unreachable" : /out of bounds/i.test(YY.message) ? "out_of_bounds" : "runtime_error" : (YY instanceof RangeError || YY instanceof Error && "InternalError" === YY.name) && /call stack|recursion/i.test(YY.message) ? "stack_overflow" : "js_error"
      }(YY);
      if ("unreachable" !== FY) return {
        kind: FY,
        panic: null,
        refusedBytes: 0
      };
      const AY = rY(),
        IY = DY();
      return {
        kind: FY,
        panic: IY > 0 ? null : AY,
        refusedBytes: IY
      }
    }
    const OY = 300;

    function gY(YY) {
      return YY.replace(/\s*\n\s*/g, " / ").slice(0, OY)
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);