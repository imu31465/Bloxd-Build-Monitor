export const id = 86;
export const ids = [86];
export const modules = {
  38136: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD,
      g: () => QD,
      k: () => wD,
      o: () => bD,
      s: () => fD
    });
    const ID = "A valid external Instance reference no longer exists.",
      pD = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ];
    const iD = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function fD(DD, CD) {
      return DD ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(DD) {
        var CD;
        const cD = null !== (CD = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(DD)) && void 0 !== CD ? CD : /failed with ([A-Z][A-Z0-9_]+)/.exec(DD);
        return cD ? cD[1] : DD.includes(ID) ? "gpu_process_lost" : "other"
      }(CD)
    }

    function bD(DD) {
      return `${(null===DD||void 0===DD?void 0:DD.vendor)||"unknown vendor"} ${(null===DD||void 0===DD?void 0:DD.architecture)||"unknown architecture"}`
    }

    function QD(DD) {
      return SD(DD)[1]
    }

    function wD(DD) {
      return SD(DD)[2]
    }

    function SD(DD) {
      var CD;
      return null !== (CD = pD.find((CD => {
        let [cD] = CD;
        return DD < cD
      }))) && void 0 !== CD ? CD : pD[pD.length - 1]
    }
  },
  38423: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ID,
      g: () => pD
    });
    const ID = 45e3;
    class pD extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  35903: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ID,
      g: () => pD,
      k: () => iD
    });
    const ID = 1024,
      pD = 1024 * ID;

    function iD(DD) {
      return (DD / pD).toFixed(1)
    }
  },
  35895: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD,
      g: () => bD,
      k: () => fD,
      m: () => QD,
      p: () => wD
    });
    var ID = cD(194);
    const pD = 32 * cD(35903).g,
      iD = 6144,
      fD = 4608,
      bD = 512;

    function QD(DD) {
      return Math.floor(pD * DD / iD)
    }

    function wD(DD) {
      const CD = DD - Math.floor(DD / 6);
      let cD = ID.h.maxChunkHorizAddDistance,
        pD = ID.h.maxChunkVertAddDistance;
      if (SD(cD + 1, pD + 1) <= CD) return null;
      for (; SD(cD + 1, pD + 1) > CD && (cD > 0 || pD > 0);) cD > pD ? cD-- : pD--;
      return {
        horizontal: cD,
        vertical: pD
      }
    }

    function SD(DD, CD) {
      const cD = Math.max(DD, CD);
      let ID = 0;
      for (let pD = -cD; pD <= cD; pD++)
        for (let iD = -cD; iD <= cD; iD++)
          for (let fD = -cD; fD <= cD; fD++) BD(DD, CD, pD, iD, fD) && ID++;
      return ID
    }

    function BD(DD, CD, cD, ID, pD) {
      const iD = cD * cD + pD * pD;
      return DD === CD ? iD + ID * ID <= DD * DD : DD > CD ? Math.abs(ID) <= CD && iD + ID * ID <= DD * DD : iD <= DD * DD && iD + ID * ID <= CD * CD
    }
  },
  39942: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => pD,
      c: () => iD,
      g: () => bD,
      h: () => SD,
      i: () => QD,
      k: () => fD
    });
    var ID = cD(194);
    const pD = 3e3,
      iD = 15e3;

    function fD(DD) {
      const CD = DD.endsWith(ID.o);
      return {
        text: (CD ? DD.slice(0, -ID.o.length) : DD) || null,
        dropsCache: CD
      }
    }
    const bD = "Either your internet isn't working or this is a bug.";

    function QD(DD, CD) {
      const cD = SD(DD);
      return null !== cD.name && "" === ID.e[cD.name].text && null !== CD ? CD : cD.reason
    }
    const wD = "You were removed from the game.";

    function SD(DD) {
      var CD;
      let cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const pD = null !== (CD = Object.keys(ID.e).find((CD => ID.e[CD].code === DD))) && void 0 !== CD ? CD : null;
      if (null === pD) return {
        code: DD,
        name: pD,
        reason: null !== cD && void 0 !== cD ? cD : `${bD}\nCode: ${DD}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: iD,
        canReconnect: fD = !1
      } = ID.e[pD], QD = DD === ID.e.outdatedVersion.code || DD === ID.e.loadRecaptchaError.code;
      return {
        code: DD,
        name: pD,
        reason: "" !== iD ? iD : null !== cD && void 0 !== cD ? cD : DD === ID.e.gameOrPluginKick.code ? wD : `Code: ${DD}`,
        canReconnect: fD,
        automaticallyReconnect: DD === ID.e.customGameUpdated.code || DD === ID.e.duplicateLobbyNameError.code,
        requiresRefresh: QD
      }
    }
  },
  4581: (DD, CD, cD) => {
    cD.d(CD, {
      $d: () => jD,
      A: () => qD,
      Ac: () => ID.pb,
      B: () => fD,
      Bd: () => TD,
      Cb: () => CC,
      D: () => aD,
      Dc: () => MC,
      Dd: () => WD,
      E: () => yC,
      Fb: () => pD.g,
      Fc: () => wC,
      Gc: () => IC,
      Gd: () => dD,
      H: () => rD,
      Hc: () => ID.qb,
      Ib: () => PD,
      Kc: () => ID.rb,
      Kd: () => ED,
      L: () => ID.g,
      Lb: () => LD,
      M: () => wD,
      Nb: () => JD,
      Nc: () => ID.tb,
      Nd: () => sD,
      O: () => ID.j,
      Pc: () => AD,
      Q: () => ID.k,
      Qc: () => ID.Bb,
      R: () => uD,
      Rb: () => xD,
      Rd: () => fC,
      Sd: () => tC,
      Tc: () => ID.Eb,
      U: () => ID.r,
      Ub: () => ID.M,
      Uc: () => ID.Hb,
      Wd: () => XD,
      X: () => ID.s,
      Xb: () => KD,
      Xc: () => ID.Ob,
      Y: () => ID.v,
      Yc: () => ID.Sb,
      Yd: () => eD,
      Zb: () => mD,
      ab: () => BD,
      ad: () => ID.Wb,
      bb: () => ND,
      bc: () => iC,
      db: () => ID.y,
      de: () => zD,
      e: () => DC,
      ed: () => UD,
      fc: () => gD,
      h: () => ZD,
      hb: () => ID.A,
      hd: () => ID.Xb,
      he: () => VD,
      ic: () => SC,
      id: () => ID.Zb,
      ie: () => QD,
      jc: () => pD.o,
      je: () => lD,
      k: () => tD,
      kb: () => RD,
      kc: () => vD,
      kd: () => ID.cc,
      lb: () => pC,
      le: () => ZC,
      n: () => QC,
      nc: () => cC,
      nd: () => iD,
      oe: () => MD,
      pb: () => SD,
      pd: () => oD,
      q: () => HD,
      qc: () => ID.Y,
      s: () => OD,
      sc: () => ID.$,
      tb: () => ID.E,
      td: () => bC,
      vb: () => YD,
      vc: () => ID.db,
      w: () => ID.e,
      wc: () => ID.eb,
      x: () => BC,
      xb: () => hD,
      xd: () => GD,
      yc: () => ID.hb,
      yd: () => kD,
      zb: () => FD
    });
    var ID = cD(4585),
      pD = cD(2338);
    const iD = Math.round(1e3 / ID.cc),
      fD = 4,
      bD = 2;

    function QD() {
      return crypto.getRandomValues(new Uint32Array(bD))
    }
    const wD = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      SD = 16,
      BD = {
        Draws: 1,
        NetAll: 2
      },
      yD = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function MD(DD) {
      return (DD.nametagsHidden ? nD.NametagsHidden : 0) | (DD.crouchToggle ? nD.CrouchToggle : 0) | (DD.bhopDisabled ? nD.BhopDisabled : 0) | (DD.disableBobbing ? nD.DisableBobbing : 0) | (DD.ezTowering ? nD.EzTowering : 0) | (DD.ezBridging ? nD.EzBridging : 0) | (DD.showChunkBorders ? nD.ShowChunkBorders : 0)
    }
    const tD = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      ZD = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      oD = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      vD = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      ND = 5,
      gD = 4294967295;

    function XD(DD) {
      return (DD.showFog ? yD.ShowFog : 0) | (DD.lighting ? yD.Lighting : 0) | (DD.chunkFade ? yD.ChunkFade : 0)
    }
    const mD = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      nD = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      OD = {
        Release: 1,
        KeepTouches: 2
      },
      PD = {
        Point: 1,
        Stamped: 2
      },
      HD = {
        Add: 1,
        Clear: 2
      },
      UD = 1,
      xD = 8,
      qD = 16777215,
      JD = 4,
      KD = {
        Resume: 1
      },
      aD = {
        Held: 1
      };

    function VD(DD, CD) {
      return (DD | CD << 8) >>> 0
    }

    function zD(DD) {
      return 255 & DD
    }

    function jD(DD) {
      return DD >>> 8
    }

    function lD(DD) {
      return DD + 3 & -4
    }
    const LD = 16777216,
      TD = 20;
    const GD = 8,
      RD = 8,
      kD = 16777216,
      dD = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      YD = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      WD = 16,
      sD = {
        Lost: 0,
        Gone: 1
      },
      ED = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function eD(DD) {
      return DD === ED.WorldgenSeed || DD === ED.Generate
    }
    const uD = 4,
      hD = 99,
      rD = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      AD = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      FD = 12,
      DC = 16,
      CC = 4,
      cC = 12,
      IC = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      pC = 4,
      iC = 8,
      fC = 8,
      bC = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      QC = {
        Crit: 1,
        HitSelf: 2
      },
      wC = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      SC = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      BC = 12,
      yC = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      MC = 67108864;

    function tC(DD) {
      for (const [CD, cD] of Object.entries(ID.g))
        if (cD === DD) return CD;
      return `Unknown${DD}`
    }

    function ZC(DD) {
      return {
        status: DD[ID.A.Status],
        lastError: DD[ID.A.LastError],
        lastErrorDetail: DD[ID.A.LastErrorDetail],
        errorCount: DD[ID.A.ErrorCount],
        frameIndex: DD[ID.A.FrameIndex],
        tickIndex: DD[ID.A.TickIndex],
        renderPending: DD[ID.A.RenderPending],
        firstView: DD[ID.A.FirstView],
        chunksCancelled: DD[ID.A.ChunksCancelled]
      }
    }
  },
  39730: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID,
      h: () => BD,
      j: () => bD,
      k: () => iD,
      n: () => pD,
      o: () => QD,
      r: () => SD
    });
    class ID extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function pD(DD) {
      return DD instanceof RangeError && /call stack/i.test(DD.message) || DD instanceof Error && "InternalError" === DD.name && /recursion/i.test(DD.message)
    }

    function iD(DD) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(DD))
    }
    const fD = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function bD(DD) {
      var CD;
      return DD instanceof WebAssembly.RuntimeError || DD instanceof ID || pD(DD) && fD.test(null !== (CD = DD.stack) && void 0 !== CD ? CD : "")
    }

    function QD(DD, CD) {
      if (bD(DD)) throw DD;
      console.error(CD, DD)
    }

    function wD(DD, CD, cD, pD, iD) {
      if (CD % pD !== 0 || CD + cD > DD.byteLength) throw new ID(`${iD}: ${cD} bytes at ${CD}, ${pD}-aligned, outside ${DD.byteLength} bytes of memory`)
    }

    function SD(DD, CD, cD, ID, pD) {
      return 0 === cD ? null : (wD(CD, cD, ID * DD.BYTES_PER_ELEMENT, DD.BYTES_PER_ELEMENT, pD), new DD(CD, cD, ID))
    }

    function BD(DD, CD, cD, ID, pD) {
      return 0 === CD ? null : (wD(DD, CD, cD, ID, pD), new DataView(DD, CD, cD))
    }
  },
  40088: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ID
    });
    const ID = {
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
  40041: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => tD,
      d: () => ZD,
      f: () => yD,
      j: () => BD
    });
    const ID = 2e3,
      pD = "unavailable";
    let iD = () => Promise.resolve().then((() => cD(3035))),
      fD = null,
      bD = null,
      QD = wD();

    function wD() {
      let DD = () => {};
      return {
        promise: new Promise((CD => {
          DD = () => {
            CD(null)
          }
        })),
        resolve: DD
      }
    }

    function SD() {
      if (null === fD) {
        const DD = iD();
        fD = DD, DD.then((CD => {
          fD === DD && (bD = CD)
        }), (() => {
          fD === DD && (fD = null)
        }))
      }
      return fD
    }

    function BD() {
      SD().catch((() => {}))
    }

    function yD() {
      QD.resolve()
    }

    function MD(DD, CD, cD, ID) {
      if (null === DD) return {
        errorKind: CD,
        fingerprint: pD,
        dedupe: `${CD}|${ID}`
      };
      const {
        fingerprint: iD
      } = DD.clientErrorKey(CD, cD, ID);
      return {
        errorKind: CD,
        fingerprint: iD,
        dedupe: iD
      }
    }

    function tD(DD, CD, cD, ID) {
      return null === bD ? ID ? (BD(), MD(null, DD, CD, cD)) : null : MD(bD, DD, CD, cD)
    }
    async function ZD(DD, CD, cD) {
      let pD;
      const iD = new Promise((DD => {
        pD = setTimeout((() => {
          DD(null)
        }), ID)
      }));
      try {
        return MD(await Promise.race([SD(), iD, QD.promise]), DD, CD, cD)
      } catch {
        return MD(null, DD, CD, cD)
      } finally {
        clearTimeout(pD)
      }
    }
  },
  40032: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      BUILT_IN_ANIMATIONS_SITE: () => WD,
      CORE_ERRORS_SITE: () => zD,
      EVENT_OVERFLOW_SITE: () => YD,
      FIRST_VIEW_SITE: () => ED,
      JOIN_SITE: () => lD,
      LEAVE_SITE: () => LD,
      MODEL_FEED_SITE: () => TD,
      MODEL_POOL_SITE: () => GD,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => uD,
      NON_FATAL_REPORTS_PER_SESSION: () => SC,
      PREVIEW_ANIMATIONS_SITE: () => dD,
      RENDER_RELOAD_SITE: () => kD,
      TEXTURE_NAMES_SITE: () => RD,
      TEXTURE_PACK_FEED_SITE: () => sD,
      TurnstilePageError: () => TC,
      WASM_LOAD_SITE: () => jD,
      crashError: () => ZC,
      crashReportsSettled: () => mC,
      flushCrashReports: () => gC,
      joinFailureCode: () => GC,
      lokiTransport: () => AD,
      modelFailureCode: () => EC,
      readTrap: () => PC,
      renderLossDetail: () => Bc,
      renderReloadMessage: () => wc,
      reportCoreErrors: () => OC,
      reportCountedLoadFallback: () => lC,
      reportCrash: () => oC,
      reportDataLoadFailure: () => oc,
      reportDisconnect: () => WC,
      reportDracoDecoderFailure: () => rC,
      reportEventOverflow: () => Dc,
      reportFirstViewNoTerrain: () => ic,
      reportGpuFallback: () => zC,
      reportGpuWasmPopulation: () => jC,
      reportLightFault: () => cc,
      reportMemoryShed: () => pc,
      reportModelFailure: () => eC,
      reportModelPoolFailure: () => uC,
      reportModelsModuleRetry: () => hC,
      reportPageJoinFailure: () => kC,
      reportReconnectGaveUp: () => sC,
      reportRenderReload: () => Mc,
      reportReplayFault: () => bc,
      reportStaleBuildReload: () => Nc,
      reportStoppedCore: () => qC,
      reportTerrainTextureFailure: () => tc,
      reportTexturePackFeedLoadFailure: () => FC,
      reportUnstreamedCoreLoad: () => LC,
      reportUnsupportedFallback: () => aC,
      reportUnusedSeat: () => YC,
      reportWorkerLost: () => Cc,
      reportWorkerStartTimeout: () => fc,
      reportWorldgenGaveUp: () => Ic,
      reportWorldgenLoadFailure: () => AC,
      resetCrashReports: () => nC,
      setCrashBackend: () => iC,
      setCrashScreen: () => IC,
      setCrashTransport: () => CC,
      showCrash: () => xC,
      showJoinFailure: () => RC,
      showUnsupported: () => KC
    });
    var ID = cD(1077),
      pD = cD(288),
      iD = cD(3039),
      fD = cD(40041),
      bD = cD(4581),
      QD = cD(40048),
      wD = cD(3275),
      SD = cD(38136),
      BD = cD(120),
      yD = cD(710),
      MD = cD(116),
      tD = cD(3280),
      ZD = cD(38423),
      oD = cD(1763),
      vD = cD(40003),
      ND = cD(39692),
      gD = cD(39951),
      XD = cD(39953),
      mD = cD(40052),
      nD = cD(3525),
      OD = cD(3529),
      PD = cD(40056),
      HD = cD(40073),
      UD = cD(40079),
      xD = cD(36202),
      qD = cD(3041),
      JD = cD(39995),
      KD = cD(39866),
      aD = cD(39872);
    const VD = "[bloxd-wasm-client]",
      zD = "coreErrors",
      jD = "wasmLoad",
      lD = "join",
      LD = "leave",
      TD = "modelFeed",
      GD = "modelWorkerPool",
      RD = "textureNames",
      kD = "renderReload",
      dD = "previewAnimations",
      YD = "eventOverflow",
      WD = "builtInAnimations",
      sD = "texturePackFeed",
      ED = "firstView",
      eD = 300,
      uD = 8;
    let hD = 0;
    const rD = new Set,
      AD = (DD, CD) => {
        const cD = fC[DD.kind];
        if (null === cD) return void FD(DD, CD, pC, null);
        const ID = (0, fD.c)(cD, DD.message, DD.code, DD.fatal);
        if (null !== ID) return void FD(DD, CD, pC, ID);
        const pD = pC;
        NC("Loki", (async () => {
          FD(DD, CD, pD, await (0, fD.d)(cD, DD.message, DD.code))
        }))
      };

    function FD(DD, CD, cD, pD) {
      const {
        kind: fD,
        code: bD,
        site: QD,
        fatal: wD,
        details: SD
      } = DD;
      if (!wD)
        if (null === pD || (0, iD.e)(pD.errorKind) || rD.has(pD.dedupe)) {
          if (hD >= uD) return;
          hD++
        } else rD.add(pD.dedupe);
      const BD = {
        ...SD,
        kind: fD,
        code: bD,
        site: QD,
        fatal: String(wD),
        backend: cD
      };
      null !== pD && (BD.errorKind = pD.errorKind, BD.fingerprint = pD.fingerprint), CD instanceof Error && "string" === typeof CD.stack && (BD.causeStack = CD.stack.slice(0, 2e3)), (0, ID.WZ)(ZC(DD, CD), BD)
    }
    let DC = AD;

    function CC(DD) {
      const CD = DC;
      return DC = DD, CD
    }
    let cC = () => {};

    function IC(DD) {
      const CD = cC;
      return cC = DD, CD
    }
    let pC = "unpicked";

    function iC(DD) {
      pC = DD
    }
    const fC = {
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
      bC = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        gpuFallback: "wasm_load"
      },
      QC = new Set(["unstreamedLoad"]);
    let wC = !1;
    const SC = 20,
      BC = new Map;
    let yC = 0,
      MC = 0;
    const tC = new Set;

    function ZC(DD, CD) {
      const cD = Object.assign(new Error(`${DD.code}: ${DD.message}`), {
        name: "WasmClientCrash",
        cause: null !== CD && void 0 !== CD ? CD : void 0
      });
      return CD instanceof Error && CD.stack && (cD.stack = CD.stack), cD
    }

    function oC(DD) {
      var CD, ID;
      const {
        kind: pD,
        code: iD,
        site: fD,
        fatal: bD,
        message: QD,
        error: wD
      } = DD, SD = !1 !== DD.toTransport && !QC.has(pD), BD = !bD && SD, yD = {
        kind: pD,
        code: iD,
        site: fD,
        fatal: bD,
        message: QD,
        details: null !== (CD = DD.details) && void 0 !== CD ? CD : {}
      }, MD = `${iD}@${fD}${void 0===DD.instance?"":`#${DD.instance}`}${bD?"!":""}`, tD = (null !== (ID = BC.get(MD)) && void 0 !== ID ? ID : 0) + 1;
      if (BC.set(MD, tD), tD > 1 ? 0 === (tD & tD - 1) && vC((() => {
          console.warn(`${VD} ${iD} at ${fD} reported ${tD} times`)
        })) : BD && yC >= SC ? vC((() => {
          console.warn(`${VD} ${pD} ${iD} at ${fD}: ${QD} (not sent: the session's ${SC} went)`, yD.details, null !== wD && void 0 !== wD ? wD : "")
        })) : (BD && yC++, function(DD, CD, ID) {
          var pD, iD;
          const {
            kind: fD,
            code: bD,
            site: QD,
            fatal: wD,
            message: SD,
            details: BD
          } = DD;
          vC((() => {
            (wD ? console.error : console.warn)(`${VD} ${fD} ${bD} at ${QD}: ${SD}`, BD, null !== CD && void 0 !== CD ? CD : "")
          }));
          const yD = bC[fD],
            MD = null !== (pD = null !== (iD = fC[fD]) && void 0 !== iD ? iD : yD) && void 0 !== pD ? pD : null;
          null !== MD && NC("counts", (async () => {
            const {
              peekVisitSessionId: DD
            } = await Promise.resolve().then((() => cD(659)));
            if (null !== DD()) {
              const {
                reportCappedWasmFailure: DD,
                reportWasmFailure: CD
              } = await cD.e(207).then((() => cD(35712)));
              (void 0 === yD ? CD : DD)(MD, SD, bD), wC = !0
            }
          }));
          ID && vC((() => {
            DC(DD, CD)
          }))
        }(yD, wD, SD)), bD) {
        var ZD;
        const CD = null !== (ZD = DD.screen) && void 0 !== ZD ? ZD : {
          text: (0, xD.d)(yD, !0),
          reload: !0
        };
        vC((() => {
          cC(CD)
        }))
      }
      return yD
    }

    function vC(DD) {
      try {
        DD()
      } catch (CD) {
        try {
          console.warn(`${VD} could not send a report`, CD)
        } catch {}
      }
    }

    function NC(DD, CD) {
      try {
        const cD = CD().catch((CD => {
          console.warn(`${VD} could not send the report to ${DD}`, CD)
        })).finally((() => {
          tC.delete(cD)
        }));
        tC.add(cD)
      } catch (cD) {
        console.warn(`${VD} could not send the report to ${DD}`, cD)
      }
    }
    async function gC(DD) {
      let CD;
      (0, fD.f)();
      const cD = new Promise((cD => {
        CD = setTimeout(cD, DD)
      }));
      await Promise.race([XC(), cD]), clearTimeout(CD)
    }
    async function XC() {
      if (await Promise.allSettled([...tC]), wC) try {
        const {
          flushClientAnalyticsEvents: DD
        } = await Promise.resolve().then((() => cD(1488)));
        await DD()
      } catch (DD) {
        console.warn(`${VD} could not send the counts`, DD)
      }
    }
    async function mC() {
      for (; tC.size > 0;) await Promise.allSettled([...tC])
    }

    function nC() {
      BC.clear(), yC = 0, wC = !1, hD = 0, rD.clear(), MC = 0, (0, QD.p)()
    }

    function OC(DD, CD, cD, ID) {
      MC += CD;
      for (const {
          code: fD,
          detail: wD
        }
        of DD) {
        var pD, iD;
        const DD = (0, bD.Sd)(fD),
          CD = (0, QD.e)(fD, wD),
          SD = null === ID || void 0 === ID ? void 0 : ID(fD, wD),
          BD = void 0 !== (null === CD || void 0 === CD ? void 0 : CD.gpuDetails),
          yD = BD ? null === (pD = (0, MD.l)()) || void 0 === pD ? void 0 : pD.renderer : void 0,
          tD = BD ? ` ${(0,QD.i)()}` : "",
          ZD = Array.from([yD && `gpu ${(0,QD.t)(yD)}`, SD].filter(Boolean).join("; ")).slice(0, eD).join(""),
          oD = `core error ${DD}${null!==(iD=null===CD||void 0===CD?void 0:CD.words)&&void 0!==iD?iD:""}${tD}${ZD?`: ${ZD}`:""}`,
          vD = {
            errorCode: String(fD),
            detail: String(wD),
            droppedBefore: String(MC),
            wasmBuild: cD.wasm,
            clientVersion: cD.client,
            ...null === CD || void 0 === CD ? void 0 : CD.gpuDetails
          };
        null !== CD && (0, QD.n)(CD) ? vC((() => {
          console.warn(`${VD} coreError CORE-${DD}: ${oD} (not sent: the session's render warnings of its kind went)`, vD)
        })) : oC({
          kind: fD === bD.L.JobsHeapGaveUp ? "meshHeap" : "coreError",
          code: `CORE-${DD}`,
          site: zD,
          fatal: !1,
          message: oD,
          details: vD,
          instance: null === CD || void 0 === CD ? void 0 : CD.instance
        })
      }
    }

    function PC(DD) {
      return (0, JD.m)(DD instanceof KD.d ? DD.trap : DD, nD.A, nD.P)
    }
    const HC = "declined=js";

    function UC(DD) {
      return DD ? {
        labels: [HC],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function xC(DD, CD, cD) {
      return JC(DD, CD, cD, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function qC(DD, CD, cD) {
      return JC(DD, CD, cD, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function JC(DD, CD, cD, ID, pD) {
      let {
        memoryDetails: iD = {},
        declined: fD = !1
      } = ID;
      const {
        code: bD,
        details: QD,
        message: wD
      } = (0, vD.H)(DD, CD), SD = [];
      null !== cD && (QD.trapKind = cD.kind, null !== cD.panic && (QD.panic = (0, JD.i)(cD.panic)), cD.refusedBytes > 0 && (QD.refusedAllocation = String(cD.refusedBytes)), SD.push((0, JD.n)(cD.kind, cD.refusedBytes)));
      const BD = UC(fD);
      return oC({
        kind: "crash",
        code: bD,
        site: DD.site,
        fatal: pD,
        message: [...SD, ...BD.labels, wD].join("; "),
        details: {
          ...QD,
          ...BD.details,
          ...iD
        },
        error: DD.error
      })
    }

    function KC(DD, CD, cD) {
      return oC({
        kind: "unsupported",
        code: CD,
        site: jD,
        fatal: !0,
        message: cD,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: DD,
          status: CD
        },
        screen: {
          text: (0, xD.r)(DD),
          reload: "download" === DD
        }
      })
    }

    function aC(DD, CD, cD) {
      return oC({
        kind: "unsupportedFallback",
        code: "blockedAfterLoss" === CD ? "blocked_after_loss" : "unsupported_js_fallback",
        site: jD,
        fatal: !1,
        message: cD,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: DD,
          status: "unsupported",
          decline: CD,
          fallback: "js"
        }
      })
    }
    const VC = "misdrawn_gpu_js_fallback";

    function zC(DD, CD) {
      return oC({
        kind: "gpuFallback",
        code: VC,
        site: jD,
        fatal: !1,
        message: `the renderer plays ${DD} on ${CD} worse than the JS client`,
        details: {
          gpuFamily: DD,
          backend: CD,
          fallback: "js"
        }
      })
    }

    function jC(DD) {
      NC("counts", (async () => {
        await (0, yD.b)(DD), wC = !0
      }))
    }

    function lC(DD, CD, cD, ID) {
      const pD = UC(ID);
      return oC({
        kind: "unsupported",
        code: CD,
        site: jD,
        fatal: !1,
        message: [...pD.labels, cD].join("; "),
        details: {
          cause: DD,
          status: CD,
          fallback: "js",
          ...pD.details
        }
      })
    }

    function LC() {
      const {
        code: DD,
        message: CD
      } = qD.d;
      return oC({
        kind: "unstreamedLoad",
        code: DD,
        site: jD,
        fatal: !1,
        message: CD
      })
    }
    class TC extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function GC(DD) {
      return DD instanceof gD.m ? 0 === DD.code ? "JOIN-matchmake" : `JOIN-${DD.code}` : DD instanceof gD.d ? 0 === DD.code ? `JOIN-${DD.stage}` : `JOIN-${DD.stage}-${DD.code}` : DD instanceof ND.c ? "JOIN-gameCode" : DD instanceof TC ? "JOIN-turnstilePage" : DD instanceof gD.x ? "JOIN-trafficCheck" : DD instanceof ZD.g ? "JOIN-timeout" : "JOIN-network"
    }

    function RC(DD, CD) {
      const cD = (0, aD.h)(DD),
        ID = {
          wasmBuild: CD.wasm,
          clientVersion: CD.client
        },
        pD = DD instanceof TC ? {
          text: (0, xD.l)(),
          reload: !1
        } : void 0,
        iD = (0, XD.g)(DD),
        fD = "expected" !== iD;
      return oC({
        kind: "join",
        code: GC(DD),
        site: lD,
        fatal: !0,
        message: cD,
        details: ID,
        error: DD,
        screen: pD,
        toTransport: fD,
        instance: iD
      })
    }

    function kC(DD, CD, cD) {
      var ID;
      const pD = (0, XD.g)(DD),
        iD = {
          cause: (DD instanceof gD.d || DD instanceof gD.m) && null !== (ID = DD.serverText) && void 0 !== ID ? ID : "",
          sinceJoinStart: (0, tD.d)(cD.sinceJoinStartMs),
          game: cD.game,
          ...(0, tD.j)(),
          wasmBuild: CD.wasm,
          clientVersion: CD.client
        };
      return oC({
        kind: "pageJoin",
        code: GC(DD),
        site: lD,
        fatal: !1,
        message: (0, aD.h)(DD),
        details: iD,
        error: DD,
        toTransport: "unrecognised" === pD,
        instance: pD
      })
    }
    const dC = {
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

    function YC(DD, CD) {
      let {
        unused: cD,
        answered: ID,
        heldMs: pD
      } = DD;
      const {
        code: iD,
        message: fD
      } = dC[cD], bD = {
        unused: cD,
        answered: String(ID),
        heldMs: String(pD),
        wasmBuild: CD.wasm,
        clientVersion: CD.client
      };
      return oC({
        kind: "seat",
        code: iD,
        site: lD,
        fatal: !1,
        message: fD,
        details: bD
      })
    }

    function WC(DD, CD, cD) {
      var ID;
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (ID = DD.name) && void 0 !== ID ? ID : String(DD.code);
      const iD = {
          closeCode: String(DD.code),
          recognised: String(null !== DD.name),
          closeReason: cD.closeReason,
          sinceJoined: (0, tD.d)(cD.sinceJoinedMs),
          game: cD.game,
          ...(0, tD.j)(),
          wasmBuild: CD.wasm,
          clientVersion: CD.client
        },
        fD = null === DD.name && !(0, tD.e)(DD.code);
      return oC({
        kind: "disconnect",
        code: pD,
        site: LD,
        fatal: !1,
        message: "Left room",
        details: iD,
        toTransport: fD
      })
    }

    function sC(DD, CD) {
      const cD = {
        ...(0, wD.j)(DD),
        wasmBuild: CD.wasm,
        clientVersion: CD.client
      };
      return oC({
        kind: "disconnect",
        code: `reconnect-${DD.reason}`,
        site: lD,
        fatal: !1,
        message: "Reconnect failed",
        details: cD
      })
    }

    function EC(DD) {
      return DD.error instanceof OD.g ? `MODEL-${DD.error.status}` : DD.error instanceof PD.l ? "MODEL-ring" : "MODEL-network"
    }

    function eC(DD, CD) {
      const cD = EC(DD),
        ID = `model file ${DD.file} ${DD.startup?"(startup) ":""}could not load`,
        pD = {
          file: String(DD.file),
          url: DD.url,
          wasmBuild: CD.wasm,
          clientVersion: CD.client
        };
      return oC({
        kind: DD.startup ? "model" : "modelLate",
        code: cD,
        site: TD,
        fatal: DD.startup,
        message: ID,
        details: pD,
        error: DD.error
      })
    }

    function uC(DD, CD) {
      const cD = {
        wasmBuild: CD.wasm,
        clientVersion: CD.client
      };
      return oC({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: GD,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: cD,
        error: DD
      })
    }

    function hC(DD, CD, cD) {
      const ID = {
        delayMs: String(CD),
        wasmBuild: cD.wasm,
        clientVersion: cD.client
      };
      DD instanceof OD.g && (ID.status = String(DD.status));
      return oC({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: GD,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: ID,
        error: DD
      })
    }

    function rC(DD, CD) {
      const cD = {
        wasmBuild: CD.wasm,
        clientVersion: CD.client
      };
      return oC({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: GD,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: cD,
        error: DD
      })
    }

    function AC(DD, CD) {
      const cD = {
        wasmBuild: CD.wasm,
        clientVersion: CD.client
      };
      return oC({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: vD.C,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: cD,
        error: DD
      })
    }

    function FC(DD, CD) {
      const cD = {
        wasmBuild: CD.wasm,
        clientVersion: CD.client
      };
      return oC({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: sD,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: cD,
        error: DD
      })
    }

    function Dc(DD, CD) {
      const {
        frames: cD,
        acks: ID,
        mask: pD,
        outcome: iD
      } = DD, fD = {
        frames: String(cD),
        acks: String(ID),
        mask: String(pD),
        outcome: null !== iD && void 0 !== iD ? iD : "resynced",
        wasmBuild: CD.wasm,
        clientVersion: CD.client
      };
      return oC({
        kind: "recovered",
        code: "rejoined" === iD ? "CORE-eventOverflowRejoin" : "failed" === iD ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: YD,
        fatal: !1,
        message: `the event buffer refused records in ${cD} frames`,
        details: fD
      })
    }

    function Cc(DD, CD, cD) {
      return oC({
        kind: "recovered",
        code: "CORE-workerLost",
        site: DD,
        fatal: !1,
        message: `a ${DD} worker was lost`,
        details: {
          reason: CD,
          wasmBuild: cD.wasm,
          clientVersion: cD.client
        }
      })
    }

    function cc(DD, CD, cD) {
      const ID = {
        wasmBuild: cD.wasm,
        clientVersion: cD.client
      };
      return oC({
        kind: "recovered",
        code: DD,
        site: vD.p,
        fatal: !1,
        message: CD,
        details: ID
      })
    }

    function Ic(DD, CD) {
      const cD = {
        lastReason: DD,
        wasmBuild: CD.wasm,
        clientVersion: CD.client
      };
      return oC({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: vD.C,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: cD
      })
    }

    function pc(DD, CD, cD) {
      return oC({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: vD.o,
        fatal: !1,
        message: (0, mD.g)(DD) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: DD,
          ...CD,
          wasmBuild: cD.wasm,
          clientVersion: cD.client
        }
      })
    }

    function ic(DD, CD) {
      const cD = (0, QD.l)(),
        ID = {
          game: DD,
          renderWarned: String(cD),
          browser: (0, QD.i)(),
          wasmBuild: CD.wasm,
          clientVersion: CD.client
        },
        pD = `first view drew no whole terrain in ${HD.d/1e3} s${cD?", render warned":""}`;
      return oC({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: ED,
        fatal: !1,
        message: pD,
        details: ID
      })
    }

    function fc(DD, CD, cD) {
      return oC({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: DD,
        fatal: !1,
        message: `a ${DD} worker did not start`,
        details: {
          waitedMs: String(Math.round(CD)),
          wasmBuild: cD.wasm,
          clientVersion: cD.client
        }
      })
    }

    function bc(DD, CD, cD) {
      return oC({
        kind: "recovered",
        code: "CORE-replayFault",
        site: DD,
        fatal: !1,
        message: `the replay's ${DD} failed`,
        details: {
          wasmBuild: cD.wasm,
          clientVersion: cD.client
        },
        error: CD
      })
    }
    const Qc = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function wc(DD, CD, cD) {
      const ID = "lost" === CD && void 0 !== cD ? ` (${cD})` : "";
      return `the ${DD} ${Qc[CD]}${ID}`
    }
    const Sc = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };

    function Bc(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now();
      const pD = null === cD.boundAtMs ? "unbound" : `up${(0,SD.g)(ID-cD.boundAtMs)}`,
        iD = null === cD.adapter ? "no adapter" : (0, SD.o)(cD.adapter),
        fD = `${(0,oD.h)()?"hidden":"visible"} ${pD} ${iD}${!0===cD.indirectHangs?" ih":""}`;
      if ("pipeline_failed" === DD) return `${DD} ${fD}`;
      const bD = null === CD || void 0 === CD ? void 0 : CD.message;
      return `${CD instanceof oD.e?"timeout":(0,SD.s)("frames_refused"===DD,"string"===typeof bD?bD:"")} ${fD}`
    }
    const yc = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function Mc(DD, CD, ID) {
      var iD, fD, bD, wD, yD;
      let {
        cause: MD = "lost",
        error: tD,
        context: ZD = Sc,
        session: oD = yc
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const vD = Bc(MD, tD, ZD),
        ND = {
          losses: String(CD),
          cause: MD,
          detail: vD,
          vendor: null !== (iD = null === (fD = ZD.adapter) || void 0 === fD ? void 0 : fD.vendor) && void 0 !== iD ? iD : "",
          architecture: null !== (bD = null === (wD = ZD.adapter) || void 0 === wD ? void 0 : wD.architecture) && void 0 !== bD ? bD : "",
          indirectHangs: String(ZD.indirectHangs),
          samples: String(oD.samples),
          sunShadows: String(oD.sunShadows),
          renderDistance: String(oD.renderDistance),
          gpuFamily: null !== (yD = (0, pD.e)()) && void 0 !== yD ? yD : "",
          browser: (0, QD.i)(),
          siteUsed: BD.p,
          wasmBuild: ID.wasm,
          clientVersion: ID.client
        },
        gD = wc(DD, MD),
        XD = oC({
          kind: "recovered",
          code: "CORE-renderLost",
          site: kD,
          fatal: !1,
          message: gD,
          details: ND,
          error: tD
        });
      return NC("ga", (async () => {
        const {
          logError: CD
        } = await Promise.resolve().then((() => cD(2737))), ID = `${SD.e["webgpu"===DD?"WebGPU":"WebGL2"]}\n Error: ${vD}`;
        CD("warning", ID), CD("error", ID)
      })), XD
    }

    function tc(DD, CD) {
      var cD, ID;
      const pD = null === DD.name ? "TEXTURE-sources" : null === DD.url ? "TEXTURE-nourl" : DD.error instanceof UD.b ? `TEXTURE-${DD.error.status}` : "TEXTURE-network",
        iD = null === DD.name ? "terrain textures could not load" : `terrain texture ${DD.name} could not load`,
        fD = {
          texture: null !== (cD = DD.name) && void 0 !== cD ? cD : "",
          url: null !== (ID = DD.url) && void 0 !== ID ? ID : "",
          wasmBuild: CD.wasm,
          clientVersion: CD.client
        };
      return oC({
        kind: "terrainTexture",
        code: pD,
        site: vD.B,
        fatal: !1,
        message: iD,
        details: fD,
        error: DD.error
      })
    }
    const Zc = {
      previewAnimations: {
        site: dD,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: WD,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function oc(DD, CD, cD, ID) {
      const {
        site: pD,
        prefix: iD,
        name: fD
      } = Zc[DD], {
        stage: bD,
        error: QD
      } = cD;
      return oC({
        kind: DD,
        code: "decode" === bD ? null === QD ? `${iD}-decode` : `${iD}-trap` : QD instanceof OD.g ? `${iD}-${QD.status}` : `${iD}-network`,
        site: pD,
        fatal: !1,
        message: "decode" === bD ? `${fD} did not decode` : `${fD} could not load`,
        details: {
          url: CD,
          wasmBuild: ID.wasm,
          clientVersion: ID.client
        },
        error: QD
      })
    }
    const vc = "staleBuild";

    function Nc(DD, CD, cD) {
      const ID = {
          failedSite: DD.site,
          url: DD.url,
          from: DD.from,
          sameBuild: String(DD.from === CD),
          reloadMs: String(Math.max(0, Date.now() - DD.at)),
          wasmBuild: cD.wasm,
          clientVersion: cD.client
        },
        pD = `reloaded into a newer build after ${DD.site} failed to load: ${DD.error}`;
      return oC({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: vc,
        fatal: !1,
        message: pD,
        details: ID
      })
    }
  },
  40073: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD,
      d: () => ID
    });
    const ID = 3e4;
    class pD {
      constructor(DD) {
        this.Nt = DD, this.waitedMs = 0, this.lastMs = null
      }
      frame(DD, CD) {
        if (CD) return !0;
        const cD = null === this.lastMs ? 0 : DD - this.lastMs;
        return this.lastMs = DD, cD <= 900 && (this.waitedMs += cD), !(this.waitedMs < ID) && (this.Nt(), !0)
      }
    }
  },
  4575: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD,
      c: () => iD,
      e: () => pD
    });
    var ID = cD(4581);

    function pD(DD) {
      return "none" !== DD
    }

    function iD(DD, CD) {
      if (!DD) return "none";
      switch (CD) {
        case ID.Y.Drawn:
          return "drawn";
        case ID.Y.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function fD(DD) {
      return "drawn" === DD
    }
  },
  39692: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID,
      d: () => vD,
      g: () => ZD,
      j: () => oD,
      l: () => yD,
      p: () => MD,
      q: () => SD,
      r: () => BD,
      t: () => tD
    });
    class ID extends Error {
      constructor(DD) {
        super(`the join's code did not load: ${DD instanceof Error?DD.message:String(DD)}`, {
          cause: DD
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === DD || void 0 === DD ? void 0 : DD.request
      }
    }
    let pD = null,
      iD = null,
      fD = null;
    const bD = [];
    let QD = null;

    function wD(DD, CD) {
      try {
        DD(CD)
      } catch (cD) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", cD)
      }
    }

    function SD() {
      return QD
    }

    function BD(DD) {
      bD.push(DD), null !== QD && wD(DD, QD)
    }

    function yD(DD) {
      return pD ??= Promise.all([cD.e(69), cD.e(94), cD.e(214), cD.e(74), cD.e(215), cD.e(189), cD.e(93), cD.e(259), cD.e(187), cD.e(262), cD.e(199), cD.e(186), cD.e(200), cD.e(136), cD.e(85), cD.e(114), cD.e(237), cD.e(53)]).then((() => cD(41730))).then((CD => {
        CD.loadAudio(DD), QD = CD;
        for (const DD of bD) wD(DD, CD);
        return CD
      })).catch((DD => {
        throw pD = null, DD
      })), pD
    }
    async function MD(DD, CD) {
      try {
        const cD = await yD(DD);
        await cD.loadClientGame(CD)
      } catch (cD) {
        throw new ID(cD)
      }
    }

    function tD(DD, CD) {
      iD = {
        running: DD,
        shell: CD
      }
    }

    function ZD() {
      return fD
    }
    async function oD(DD) {
      const CD = iD;
      if ((null === CD || void 0 === CD ? void 0 : CD.running) !== DD) throw new Error("the core's session has ended");
      const cD = await yD(CD.shell.audio).catch((DD => {
        throw new ID(DD)
      }));
      if (null !== fD) return fD;
      if (iD !== CD || DD.isStopped) throw new Error("the core stopped while the game code loaded");
      if (fD = cD.startGameHost(DD, CD.shell), null === fD) throw new Error("the core's shared tables didn't read, so the game can't start");
      return fD
    }

    function vD() {
      null !== fD && (null !== QD ? QD.endGameHost(fD) : fD.closeGame()), fD = null, iD = null
    }
  },
  39951: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => wD,
      h: () => iD,
      j: () => fD,
      l: () => pD,
      m: () => MD,
      o: () => SD,
      s: () => QD,
      u: () => yD,
      x: () => BD,
      y: () => bD
    });
    var ID = cD(1771);
    const pD = new Uint8Array([12]),
      iD = 2e3,
      fD = 257;

    function bD(DD) {
      const CD = new Uint8Array(4);
      return new DataView(CD.buffer).setUint32(0, DD, !0), CD
    }
    class QD extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class wD extends Error {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(DD), this.stage = CD, this.code = cD, this.serverText = ID, this.name = "JoinError"
      }
    }
    class SD extends Error {
      constructor(DD) {
        super(DD), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class BD extends Error {
      constructor(DD) {
        super((0, ID.g)(DD), {
          cause: DD
        }), this.name = "TrafficCheckError"
      }
    }
    class yD extends Error {
      constructor(DD, CD, cD) {
        super(DD, {
          cause: cD
        }), this.networkLost = CD, this.name = "SeatRequestError"
      }
    }
    class MD extends Error {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(DD), this.code = CD, this.serverText = cD, this.name = "MatchmakeError"
      }
    }
  },
  39953: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => yD,
      g: () => BD
    });
    var ID = cD(2482),
      pD = cD(3280),
      iD = cD(38423),
      fD = cD(39942),
      bD = cD(39951),
      QD = cD(39957);
    const wD = "seat reservation expired.",
      SD = "early_leave";

    function BD(DD) {
      if (DD instanceof iD.g) return "expected";
      if (DD instanceof bD.u) return DD.networkLost ? "expected" : "unrecognised";
      if (DD instanceof bD.d) {
        if ("closed" === DD.stage && (0 === DD.code || (0, pD.e)(DD.code))) return "expected";
        if ("roomError" === DD.stage && (DD.serverText === wD || DD.serverText === SD)) return "expected"
      }
      return DD instanceof bD.d || DD instanceof bD.m ? null === (0, fD.h)(DD.code).name ? "unrecognised" : "known" : (0, ID.f)(DD) ? "expected" : DD instanceof bD.x || DD instanceof QD.g ? "known" : "unrecognised"
    }

    function yD(DD) {
      return DD instanceof iD.g ? "timedOut" : "expected" !== BD(DD) || (0, ID.f)(DD) || DD instanceof bD.d && 1001 === DD.code ? void 0 : "failed"
    }
  },
  40052: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => HD,
      g: () => BD,
      i: () => mD,
      k: () => vD,
      n: () => OD
    });
    var ID = cD(35903),
      pD = cD(35895);
    const iD = 64 * ID.d,
      fD = 40 * ID.g,
      bD = 36 * ID.g,
      QD = 20 * ID.g,
      wD = 2 * ID.g,
      SD = 5 * ID.g;

    function BD(DD) {
      return "footprint" !== DD
    }
    const yD = 2 * ID.g,
      MD = 4 * ID.g,
      tD = 35 * ID.g + yD + MD,
      ZD = 6.5 * ID.g,
      oD = 132.5 * ID.d;

    function vD(DD) {
      const CD = ZD + (0, pD.m)(DD) + DD * oD;
      return Math.ceil((2 * tD + CD) / iD) * iD
    }
    const ND = vD(pD.e),
      gD = (ID.g, ID.g, ID.g, {
        targetBytes: fD,
        leastBytes: QD
      }),
      XD = {
        targetBytes: bD,
        leastBytes: QD
      };

    function mD(DD) {
      return DD >= pD.e ? gD : XD
    }
    const nD = 2 * iD;

    function OD(DD, CD, cD) {
      return DD + CD + nD > (null !== cD && void 0 !== cD ? cD : ND)
    }
    const PD = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? DD => {
        requestIdleCallback(DD)
      } : null
    };
    class HD {
      constructor(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : PD;
        this.memory = DD, this.readPeakStoredChunks = CD, this.onError = cD, this.clock = ID, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(DD, CD, cD) {
        this.shedding = {
          shed: DD,
          Nt: CD,
          readDistanceInUse: cD
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(DD) {
        this.footprint = DD
      }
      setCeiling(DD) {
        this.ceilingBytes = DD, this.call((() => {
          this.memory.setCeiling(DD)
        }), void 0)
      }
      ceilingMayRefuse(DD) {
        return OD(this.memory.memoryBytes(), DD, this.ceilingBytes)
      }
      reserveAtJoin(DD) {
        let {
          targetBytes: CD,
          leastBytes: cD
        } = DD;
        const ID = this.memory.memoryBytes(),
          pD = ID + cD,
          iD = Math.max(CD + (this.ballastOn() ? SD : 0), pD),
          fD = this.call((() => this.memory.reserveUpFront(iD) ? "target" : iD > pD && this.memory.reserveUpFront(pD) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== fD) {
          const DD = "least" === fD ? `took ${pD} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${iD} bytes was refused at ${ID} bytes; ${DD}`)
        }
        return this.joinReserveTaken = fD, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== fD && this.shedFor("joinReserve"), "none" !== fD
      }
      afterFrame() {
        if (this.stopped) return;
        const DD = this.clock.now(),
          CD = null !== this.stepsHeldUntil && DD >= this.stepsHeldUntil;
        if (CD && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && DD >= this.ballastCheckAt && (this.takeBallast(DD), this.stopped)) return;
        const cD = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          ID = CD && "now" === cD ? "none" : cD,
          {
            requestIdle: pD
          } = this.clock;
        "now" === ID || null !== this.pendingSince && DD - this.pendingSince >= 500 ? this.step() : "idle" === ID && null === this.pendingSince && (null === pD ? this.step() : (this.pendingSince = DD, pD((() => {
          null !== this.pendingSince && this.step()
        })))), DD - this.statsAt >= 1e3 && (this.statsAt = DD, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var DD, CD;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (CD = this.shedding.readDistanceInUse()) && void 0 !== CD ? CD : this.distanceInUse);
          null === (DD = this.footprint) || void 0 === DD || DD.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(DD, CD) {
        this.noteWorker(`Mesh${DD}`, CD)
      }
      meshWorkerGone(DD) {
        this.workerGone(`Mesh${DD}`)
      }
      noteWorldgen(DD) {
        this.noteWorker("Worldgen", DD)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(DD, CD) {
        const cD = this.workers.get(DD);
        null !== cD && void 0 !== cD && cD.gone && (this.replacedRefusals.reserves += cD.stats.reservesRefused, this.replacedRefusals.allocations += cD.stats.allocationsRefused), this.workers.set(DD, {
          stats: CD,
          gone: !1
        })
      }
      workerGone(DD) {
        const CD = this.workers.get(DD);
        CD && (CD.gone = !0)
      }
      details() {
        var DD, CD;
        const cD = {
          wasmMemoryNow: `${(0,ID.k)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (cD.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (cD.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const pD = this.main;
        if (pD) {
          cD.wasmMemoryMain = UD(pD);
          const DD = Math.max(0, pD.peakLiveBytes - this.ballastPeakBytes),
            CD = 0 === this.peakStoredChunks ? "-" : (DD / this.peakStoredChunks / ID.d).toFixed(1);
          cD.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${CD} KiB`
        }
        for (const [ID, {
            stats: fD,
            gone: bD
          }] of this.workers) cD[`wasmMemory${ID}`] = UD(fD) + (bD ? " (gone)" : "");
        const iD = null !== (DD = null === (CD = this.footprint) || void 0 === CD ? void 0 : CD.describe()) && void 0 !== DD ? DD : null;
        return null !== iD && (cD.wasmMemoryFootprint = iD), cD
      }
      pageKillSnapshot() {
        var DD, CD, cD, pD, iD;
        let fD = (null !== (DD = null === (CD = this.main) || void 0 === CD ? void 0 : CD.reservesRefused) && void 0 !== DD ? DD : 0) + this.replacedRefusals.reserves,
          bD = (null !== (cD = null === (pD = this.main) || void 0 === pD ? void 0 : pD.allocationsRefused) && void 0 !== cD ? cD : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: ID
          }
          of this.workers.values()) fD += ID.reservesRefused, bD += ID.allocationsRefused;
        return {
          wasmMainMiB: Number((0, ID.k)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, ID.k)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: fD,
          refusedAllocations: bD,
          sheds: this.sheds,
          ...null === (iD = this.footprint) || void 0 === iD ? void 0 : iD.snapshot()
        }
      }
      workersMemoryBytes() {
        let DD = 0;
        for (const {
            stats: CD,
            gone: cD
          }
          of this.workers.values()) DD += cD ? 0 : CD.memoryBytes;
        return DD
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(wD)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(DD) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = DD + 1e3;
        const CD = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, CD)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(DD) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${DD}: frames grow on demand from here`)
      }
      shedFor(DD) {
        const {
          shedding: CD
        } = this;
        if (null === CD) return;
        this.pendingSince = null;
        const cD = this.call((() => CD.shed(DD)), null);
        this.stopped || (null !== cD ? (this.sheds++, this.shedCap = cD, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), CD.Nt(DD, this.sheds, this.details())) : BD(DD) && this.stopSteps("nothing is left to shed"))
      }
      call(DD, CD) {
        if (this.stopped) return CD;
        try {
          return DD()
        } catch (cD) {
          return this.stop(), this.onError(cD), CD
        }
      }
    }

    function UD(DD) {
      const CD = (DD, CD) => `${DD}/${(0,ID.k)(CD)}`;
      return `memory ${(0,ID.k)(DD.memoryBytes)} live ${(0,ID.k)(DD.liveBytes)} peak ${(0,ID.k)(DD.peakLiveBytes)} unused ${(0,ID.k)(DD.unusedBytes)} ceiling ${(0,ID.k)(DD.ceilingBytes)} MiB; grows upFront ${CD(DD.grows.upFront,DD.grownBytes.upFront)} ahead ${CD(DD.grows.ahead,DD.grownBytes.ahead)} inFrame ${CD(DD.grows.onDemandInFrame,DD.grownBytes.onDemandInFrame)} other ${CD(DD.grows.onDemand,DD.grownBytes.onDemand)}; refused reserves ${DD.reservesRefused} allocations ${DD.allocationsRefused}`
    }
  },
  40056: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => QD,
      g: () => wD,
      i: () => MD,
      l: () => BD
    });
    var ID = cD(3529),
      pD = cD(4581),
      iD = cD(40065),
      fD = cD(40071),
      bD = cD(39872);
    const QD = 395,
      wD = 2147483648,
      SD = new Uint8Array(0);
    class BD extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class yD extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class MD {
      constructor(DD, CD, cD) {
        var ID, pD, fD, bD;
        let QD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = DD, this.build = CD, this.onFailure = cD, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.uM = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (ID = QD.fetchFile) && void 0 !== ID ? ID : DD => (0, iD.i)(DD), this.onWritten = null !== (pD = QD.onWritten) && void 0 !== pD ? pD : null, this.onTaken = null !== (fD = QD.onTaken) && void 0 !== fD ? fD : null, this.onPackFileFailed = null !== (bD = QD.onPackFileFailed) && void 0 !== bD ? bD : null, this.startupLeft = new Set(DD.startup);
        for (const iD of DD.startup) this.request(iD)
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
      drawnUrl(DD) {
        return this.drawn.get(DD)
      }
      request(DD) {
        const CD = this.pending.get(DD);
        if (!0 === (null === CD || void 0 === CD ? void 0 : CD.ask)) return;
        const cD = this.VM(DD, !0);
        cD.recheck = void 0 !== CD;
        const ID = this.drawn.get(DD);
        if (void 0 !== ID) return cD.Lb = !0, cD.recheck = !0, void this.fetch(DD, cD, ID);
        this.fetchWanted(DD, cD)
      }
      async refresh() {
        const DD = ++this.refreshes,
          CD = new Set;
        for (const fD of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const DD of fD) 0 === (DD & iD.g) && CD.add(DD);
        const cD = [...CD];
        let ID;
        try {
          ID = await Promise.all(cD.map((DD => this.wanted(DD))))
        } catch {
          return null
        }
        if (DD !== this.refreshes) return null;
        const pD = {
          resent: 0,
          refetched: 0,
          delivered: cD.filter((DD => this.drawn.has(DD))).length
        };
        return cD.forEach(((DD, CD) => {
          const {
            url: cD,
            inPlaceOf: iD
          } = ID[CD], fD = this.pending.get(DD);
          if (void 0 !== fD) {
            if (fD.Lb || void 0 === fD.url) return void(fD.recheck = !0);
            if (fD.url === cD) return;
            pD.refetched++;
            const CD = this.VM(DD, fD.ask);
            return CD.recheck = fD.recheck, void this.fetch(DD, CD, cD, iD)
          }
          const bD = this.written.get(DD);
          void 0 === bD ? this.drawn.get(DD) !== (null !== cD && void 0 !== cD ? cD : void 0) && (pD.resent++, this.fetch(DD, this.VM(DD, !1), cD, iD)) : bD.url !== (null !== cD && void 0 !== cD ? cD : "") && (bD.attempt.recheck = !0)
        })), pD
      }
      taken(DD, CD) {
        const cD = new Set,
          ID = new Set;
        for (const pD of Array.from(CD)) 0 === (pD & wD) ? cD.add(pD) : ID.add((pD & ~wD) >>> 0);
        for (const [pD, iD] of this.written) iD.seq > DD || (this.written.delete(pD), cD.has(iD.seq) ? this.refusedFile(pD, iD) : this.takenFile(pD, iD, !iD.empty && !ID.has(iD.seq)))
      }
      takenFile(DD, CD, cD) {
        const {
          attempt: ID
        } = CD;
        if (cD) {
          var pD;
          this.drawn.set(DD, CD.url), this.undrawn.delete(DD), void 0 !== ID.inPlaceOf ? this.refusedPack.set(DD, ID.inPlaceOf) : ID.Lb || this.refusedPack.delete(DD), null === (pD = this.onTaken) || void 0 === pD || pD.call(this, DD, !0);
          const cD = this.pending.get(DD);
          if (!0 === (null === cD || void 0 === cD ? void 0 : cD.Lb) && cD.url !== CD.url) {
            const cD = this.VM(DD, !0);
            cD.Lb = !0, cD.recheck = !0, this.fetch(DD, cD, CD.url)
          }
        } else {
          var iD;
          this.drawn.has(DD) || this.undrawn.add(DD), null === (iD = this.onTaken) || void 0 === iD || iD.call(this, DD, !1)
        }
        ID.recheck && this.resendIfChanged(DD)
      }
      refusedFile(DD, CD) {
        var cD, ID;
        if (null === (cD = this.onTaken) || void 0 === cD || cD.call(this, DD, !1), this.refusedPack.set(DD, CD.url), this.pending.has(DD)) return void(null === (ID = this.onPackFileFailed) || void 0 === ID || ID.call(this, DD, tD(CD.url)));
        const pD = this.VM(DD, CD.attempt.ask);
        pD.recheck = CD.attempt.recheck, this.afterRefusal(DD, pD, CD.url)
      }
      async afterRefusal(DD, CD, cD) {
        var ID;
        let pD;
        try {
          pD = await this.wanted(DD)
        } catch (iD) {
          return void(this.pending.get(DD) === CD && this.giveUp(DD, CD, cD, iD))
        }
        this.pending.get(DD) === CD && (pD.inPlaceOf !== cD ? CD.ask || (null !== (ID = pD.url) && void 0 !== ID ? ID : void 0) !== this.drawn.get(DD) ? this.fetch(DD, CD, pD.url, pD.inPlaceOf) : this.pending.delete(DD) : this.fallBack(DD, CD, cD, tD(cD)))
      }
      VM(DD, CD) {
        const cD = {
          url: void 0,
          ask: CD,
          Lb: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(DD, cD);
        for (let ID = this.ready.length - 1; ID >= 0; ID--) this.ready[ID].file === DD && this.ready.splice(ID, 1);
        return cD
      }
      async wanted(DD) {
        const CD = await this.files.url(DD);
        return null !== CD && this.refusedPack.get(DD) === CD ? {
          url: await this.files.shippedUrl(DD),
          inPlaceOf: CD
        } : {
          url: CD,
          inPlaceOf: void 0
        }
      }
      fetchWanted(DD, CD) {
        const cD = this.files.url(DD);
        cD instanceof Promise ? cD.then((cD => {
          this.fetchFound(DD, CD, cD)
        }), (cD => {
          this.pending.get(DD) === CD && this.giveUp(DD, CD, "", cD)
        })) : this.fetchFound(DD, CD, cD)
      }
      fetchFound(DD, CD, cD) {
        null !== cD && this.refusedPack.get(DD) === cD ? Promise.resolve(this.files.shippedUrl(DD)).then((ID => {
          this.fetch(DD, CD, ID, cD)
        }), (ID => {
          this.pending.get(DD) === CD && this.giveUp(DD, CD, cD, ID)
        })) : this.fetch(DD, CD, cD)
      }
      fetch(DD, CD, cD, ID) {
        this.pending.get(DD) === CD && (CD.url = cD, CD.inPlaceOf = ID, null !== cD ? this.load(DD, CD, cD) : this.buildFile(DD, CD, "", SD))
      }
      load(DD, CD, cD) {
        const ID = this.uM.get(DD);
        (null === ID || void 0 === ID ? void 0 : ID.url) !== cD ? this.fetchFile(cD).then((ID => {
          var pD, iD;
          this.pending.get(DD) === CD && (this.keptTotal += ID.byteLength - (null !== (pD = null === (iD = this.uM.get(DD)) || void 0 === iD ? void 0 : iD.glb.byteLength) && void 0 !== pD ? pD : 0), this.uM.set(DD, {
            url: cD,
            glb: ID
          }), this.buildFile(DD, CD, cD, ID))
        }), (ID => {
          this.pending.get(DD) === CD && this.fallBack(DD, CD, cD, ID)
        })) : this.buildFile(DD, CD, cD, ID.glb)
      }
      buildFile(DD, CD, cD, ID) {
        let pD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const fD = ID.byteLength > 0 && (0, iD.l)(cD) ? (DD | iD.c) >>> 0 : DD;
        this.queueRecord(DD, CD, cD, ID, this.build(fD, ID), pD)
      }
      queueRecord(DD, CD, cD, ID, iD, bD) {
        iD.then((iD => {
          if (this.pending.get(DD) !== CD) return;
          if (pD.w + (0, pD.je)(iD.byteLength) > pD.Dc) return void this.ringRefused(DD, CD, cD, new BD(`${ZD(cD)}'s record is ${iD.byteLength-fD.e} bytes, past the cmd ring's ${pD.Dc}`), bD);
          const QD = {
            file: DD,
            url: cD,
            payload: iD,
            glb: ID,
            attempt: CD
          };
          bD ? this.ready.unshift(QD) : this.ready.push(QD)
        }))
      }
      async fallBack(DD, CD, cD, ID) {
        var pD;
        let iD = null,
          fD = ID;
        try {
          iD = await this.files.shippedUrl(DD)
        } catch (bD) {
          fD = bD
        }
        this.pending.get(DD) === CD && (null !== iD && iD !== cD ? (null === (pD = this.onPackFileFailed) || void 0 === pD || pD.call(this, DD, ID), CD.ask || this.drawn.get(DD) !== iD ? (CD.url = iD, CD.inPlaceOf = cD, this.load(DD, CD, iD)) : this.pending.delete(DD)) : this.giveUp(DD, CD, cD, fD))
      }
      ringRefused(DD, CD, cD, ID) {
        let pD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, iD.l)(cD) ? this.fallBack(DD, CD, cD, ID): this.giveUp(DD, CD, cD, ID, pD)
      }
      giveUp(DD, CD, cD, pD) {
        let iD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: DD,
          url: ZD(cD),
          error: pD,
          startup: this.startupLeft.has(DD)
        }), CD.ask || !this.drawn.has(DD) ? (0, ID.T)(pD) ? this.queueRecord(DD, CD, cD, SD, Promise.resolve((0, fD.q)(DD, (0, bD.h)(pD))), iD) : this.buildFile(DD, CD, cD, SD, iD) : this.pending.delete(DD)
      }
      async resendIfChanged(DD) {
        var CD;
        if (0 !== (DD & iD.g)) return;
        let cD;
        try {
          cD = await this.wanted(DD)
        } catch {
          return
        }(null !== (CD = cD.url) && void 0 !== CD ? CD : void 0) === this.drawn.get(DD) || this.pending.has(DD) || this.written.has(DD) || this.fetch(DD, this.VM(DD, !1), cD.url, cD.inPlaceOf)
      }
      drain(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === DD) return;
        let cD = 0,
          ID = 0;
        for (; ID < this.ready.length && cD < 262144;) {
          const bD = this.ready[ID];
          if (this.written.has(bD.file)) {
            ID++;
            continue
          }
          const SD = this.nextSeq;
          new DataView(bD.payload.buffer, bD.payload.byteOffset, bD.payload.byteLength).setUint32(fD.i, SD, !0);
          const yD = bD.attempt.Lb && bD.glb.byteLength > 0 && this.drawn.get(bD.file) === bD.url;
          if (DD(QD, yD ? 1 : 0, bD.payload)) {
            if (this.nextSeq = SD >= wD - 1 ? 1 : SD + 1, this.ready.splice(ID, 1), cD += bD.payload.byteLength, this.pending.delete(bD.file), this.startupLeft.delete(bD.file), this.written.set(bD.file, {
                seq: SD,
                url: bD.url,
                empty: 0 === bD.glb.byteLength,
                attempt: bD.attempt
              }), bD.glb.byteLength > 0) try {
              var pD;
              null === (pD = this.onWritten) || void 0 === pD || pD.call(this, bD.file, bD.glb)
            } catch (iD) {
              console.warn("ModelFeed: reading the file's images failed", iD)
            }
          } else {
            if (null === CD || 0 === bD.glb.byteLength || CD(bD.payload.byteLength)) return;
            this.ready.splice(ID, 1);
            const DD = new BD(`${ZD(bD.url)}'s record is ${bD.payload.byteLength-fD.e} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(bD.file, bD.attempt, bD.url, DD, !0)
          }
        }
      }
    }

    function tD(DD) {
      return new yD(`presentation refused ${ZD(DD)}`)
    }

    function ZD(DD) {
      return DD.startsWith("data:") ? `${DD.slice(0,Math.min(Math.max(DD.indexOf(","),5),64))},...` : DD
    }
  },
  40065: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD,
      g: () => iD,
      i: () => SD,
      l: () => bD,
      o: () => wD,
      p: () => QD
    });
    var ID = cD(3529),
      pD = cD(3007);
    const iD = 2147483648,
      fD = 1073741824;

    function bD(DD) {
      return DD.startsWith("data:")
    }

    function QD(DD) {
      let {
        onTableFailed: CD,
        packUrl: cD
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const ID = wD();
      ID.catch((DD => {
        null === CD || void 0 === CD || CD(DD)
      }));
      const pD = async CD => (await ID).fileUrl((CD & ~iD) >>> 0, DD);
      return {
        startup: [],
        url: async DD => {
          if (cD && 0 === (DD & iD)) {
            const CD = await ID,
              pD = CD.filePackName(DD),
              iD = null === pD || "lifeform" === CD.fileSource(DD) ? null : cD(pD);
            if (null !== iD) return iD
          }
          return pD(DD)
        },
        shippedUrl: pD
      }
    }

    function wD() {
      return cD.e(41).then((() => cD(42531)))
    }
    async function SD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return DD.startsWith("data:") ? (0, pD.b)(DD.slice(DD.indexOf(",") + 1), CD) : (0, ID.I)(DD, {
        spare: CD
      })
    }
  },
  40071: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => wD,
      i: () => SD,
      l: () => MD,
      o: () => oD,
      q: () => tD,
      t: () => yD,
      x: () => ZD
    });
    const ID = 826427981,
      pD = 1,
      iD = 2,
      fD = 44,
      bD = 46,
      QD = 58,
      wD = 8,
      SD = 4;

    function BD(DD, CD, cD) {
      const pD = (new TextEncoder).encode(cD),
        iD = wD + 4 * (CD.length + 2),
        fD = new Uint8Array(iD + (pD.byteLength + 3 & -4)),
        bD = new DataView(fD.buffer);
      return bD.setUint32(0, DD, !0), bD.setUint32(wD, ID, !0), CD.forEach(((DD, CD) => {
        bD.setUint32(wD + 4 * (CD + 1), DD, !0)
      })), bD.setUint32(iD - 4, pD.byteLength, !0), fD.set(pD, iD), fD
    }

    function yD(DD, CD) {
      return BD(DD, [iD], CD)
    }

    function MD(DD, CD) {
      return BD(DD, [pD, bD], CD)
    }

    function tD(DD, CD) {
      return BD(DD, [pD, QD], CD)
    }

    function ZD(DD, CD) {
      return BD(DD, [pD, fD], CD)
    }

    function oD(DD) {
      const CD = wD;
      if (DD.byteLength < CD + 12) return !1;
      const cD = new DataView(DD.buffer, DD.byteOffset, DD.byteLength);
      return cD.getUint32(CD, !0) === ID && cD.getUint32(CD + 4, !0) === pD && cD.getUint32(CD + 8, !0) === fD
    }
  },
  40048: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ND,
      i: () => vD,
      l: () => nD,
      n: () => mD,
      p: () => OD,
      t: () => ZD
    });
    var ID = cD(4585),
      pD = cD(39908);
    const iD = 18,
      fD = 19,
      bD = 20,
      QD = {
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
        [iD]: "retry linked",
        [fD]: "fallback linked",
        [bD]: "fallback failed",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function wD(DD, CD) {
      return DD === iD ? "program retry" : DD === fD || DD === bD ? `program fallback ${CD}` : "program"
    }
    const SD = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      BD = {
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
      yD = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      MD = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld"
      },
      tD = {
        1280: "invalid enum",
        1281: "invalid value",
        1282: "invalid operation",
        1285: "out of memory",
        1286: "invalid framebuffer operation",
        37442: "context lost"
      };

    function ZD(DD) {
      return String(DD).replace(/\d/g, (DD => String.fromCharCode(97 + Number(DD))))
    }

    function oD(DD, CD) {
      var cD;
      return null !== (cD = DD[CD]) && void 0 !== cD ? cD : ZD(CD)
    }

    function vD() {
      return ZD((0, pD.d)())
    }

    function ND(DD, CD) {
      switch (DD) {
        case ID.g.RenderSceneRowNotDrawn:
          return {
            words: ` ${oD(BD,CD)}`, instance: String(CD), group: String(DD)
          };
        case ID.g.RenderChunkMeshNotDrawn: {
          const cD = 0 === (128 & CD) ? "" : " shortage",
            ID = CD >>> 8;
          return {
            words: ` ${oD(yD,127&CD)}${cD}${0===ID?"":` kind ${ZD(ID)}`}`,
            instance: String(CD),
            group: String(DD)
          }
        }
        case ID.g.RenderInternal: {
          const cD = oD(SD, 255 & CD),
            ID = CD >>> 8 & 255;
          if (0 === ID) return {
            words: ` ${cD}`,
            instance: String(CD),
            group: String(DD)
          };
          const pD = oD(QD, ID),
            iD = CD >>> 16;
          return {
            words: ` ${cD} ${pD} program ${ZD(iD)}`,
            instance: `${cD} ${pD}`,
            group: wD(ID, cD),
            gpuDetails: {
              programFailure: pD,
              program: String(iD)
            }
          }
        }
        case ID.g.RenderSerialLinks: {
          const cD = oD(MD, CD);
          return {
            words: ` ${cD}`,
            instance: String(CD),
            group: String(DD),
            gpuDetails: {
              serialLinks: cD
            }
          }
        }
        case ID.g.RenderGlErrorAfterRestore: {
          const cD = oD(tD, 65535 & CD),
            ID = CD >>> 16,
            pD = 65535 !== ID;
          return {
            words: ` ${cD}${pD?` program ${ZD(ID)}`:""}`,
            instance: String(CD),
            group: String(DD),
            gpuDetails: pD ? {
              glError: cD,
              program: String(ID)
            } : {
              glError: cD
            }
          }
        }
        default:
          return null
      }
    }
    const gD = 2,
      XD = new Map;

    function mD(DD) {
      let {
        group: CD,
        instance: cD
      } = DD, ID = XD.get(CD);
      return void 0 === ID && (ID = [], XD.set(CD, ID)), !ID.includes(cD) && (ID.length >= gD || (ID.push(cD), !1))
    }

    function nD() {
      return XD.size > 0
    }

    function OD() {
      XD.clear()
    }
  },
  39957: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => vD,
      g: () => ND,
      j: () => oD,
      m: () => nD
    });
    var ID = cD(6393),
      pD = cD(20),
      iD = cD(4142),
      fD = cD(4585),
      bD = cD(6384),
      QD = cD(39961);

    function wD(DD, CD) {
      const cD = (0, bD.d)(CD.variants);
      return DD.setShaderPack(cD.variantFlags, cD.hooks, cD.moduleCodes, (0, QD.F)(CD.layers), QD.r[CD.wf], CD.keepCircleShadows)
    }
    const SD = 0,
      BD = 1,
      yD = 2,
      MD = "shaderPack:failedToCompile",
      tD = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      ZD = new Set(["not_requested", "off_after_loss", "gpu_class_webgl"]);

    function oD(DD, CD) {
      var cD;
      const ID = null !== (cD = null === DD || void 0 === DD ? void 0 : DD.reason) && void 0 !== cD ? cD : "none";
      return tD.has(ID) ? {
        messageKey: CD ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === ID && "override" === (null === DD || void 0 === DD ? void 0 : DD.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: ZD.has(ID) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    const vD = {
      messageKey: "shaderPack:failedDeviceGraphics",
      noAdapter: !1
    };
    class ND extends Error {
      constructor(DD) {
        super(`the shader pack can't run in this game: ${DD}`), this.messageKey = DD, this.name = "ShaderPackJoinError"
      }
    }
    const gD = "strict";
    class XD {
      constructor(DD) {
        this.deps = DD, this.pagePack = void 0, this.loaded = null, this.wf = gD, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = DD.load().catch((CD => (DD.warn("the shader pack could not load: the game draws without it", CD), {
          status: "none"
        }))).then((DD => (this.loaded = DD, "active" === DD.status && (this.handOverToPreviews(DD), null !== DD.harnessPolicy && (this.wf = DD.harnessPolicy, this.handOver())), DD)))
      }
      async join(DD) {
        this.leave();
        const CD = this.game,
          [cD, pD] = await Promise.all([this.pagePack, this.policyOf(DD)]);
        if (CD !== this.game || "none" === cD.status) return null;
        const iD = "active" === cD.status ? cD.pack.variants : cD.variants,
          fD = (0, ID.h)(iD, pD);
        if (fD && "active" === cD.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (fD) {
          const DD = this.cantRun(cD, pD);
          if (null !== DD) return DD
        } else if ("blocked" === cD.status || null === this.deps.core) return null;
        return this.wf = pD, this.handOver(), fD && this.refused ? MD : (this.joined = !0, this.offInThisGame = !fD, null)
      }
      async replay(DD) {
        const CD = await this.join(DD);
        null === CD ? this.playable() : this.deps.failInGame(CD)
      }
      cantRun(DD, CD) {
        const {
          core: cD,
          noWebGpu: ID
        } = this.deps;
        if ("blocked" === DD.status) {
          return "shaderPack:failedUnchecked" === DD.messageKey && null === cD && ID.noAdapter ? ID.messageKey : DD.messageKey
        }
        return this.refused || this.failedPolicies.has(CD) ? MD : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var DD;
        return this.runsInJoinedGame() && "active" === (null === (DD = this.loaded) || void 0 === DD ? void 0 : DD.status) ? function(DD, CD) {
          const cD = DD.filter((DD => (0, ID.h)([DD], CD))),
            pD = DD => cD.some((CD => CD[DD]));
          return {
            sceneDepth: pD("sceneDepth"),
            sunShadow: pD("sunShadow"),
            airShadow: pD("airShadow")
          }
        }(this.loaded.pack.variants, this.wf) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(MD) : (null !== this.couldntRun ? this.notify(iD.e, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.wf) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(DD) {
        for (const {
            code: CD,
            detail: cD
          }
          of DD)
          if (CD === fD.g.RenderShaderPackNotRun) switch (255 & cD) {
            case SD:
              this.refused = !0, this.failed();
              break;
            case BD:
              this.failedPolicies.add(this.wf), this.failed();
              break;
            case yD:
              this.failedModelPolicies.add(this.wf), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(MD) : this.failedWhileJoining = !0)
      }
      fail(DD) {
        this.leave(), this.deps.failInGame(DD)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(DD, CD) {
        const cD = this.game;
        this.deps.notify(DD, (() => cD === this.game && this.joined), CD)
      }
      handOver() {
        var DD;
        const {
          core: CD
        } = this.deps;
        null !== CD && "active" === (null === (DD = this.loaded) || void 0 === DD ? void 0 : DD.status) && (wD(CD, {
          ...this.loaded.pack,
          wf: this.wf
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(DD) {
        let {
          pack: CD,
          harnessPolicy: cD
        } = DD;
        const {
          previews: ID
        } = this.deps;
        null !== ID && wD(ID, {
          ...CD,
          wf: null !== cD && void 0 !== cD ? cD : gD
        })
      }
      policyOf(DD) {
        return this.deps.policyOf(DD).catch((DD => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", DD), gD)))
      }
    }
    const mD = "wasmShaderPackNotice";

    function nD(DD, CD, cD, ID) {
      return pD.i.subscribe(mD, (DD => {
        let {
          translationKey: CD,
          stillCurrent: cD,
          reasonKey: ID
        } = DD;
        cD() && pD.i.Uo("chat", (0, iD.l)(CD, ID))
      })), new XD({
        load: OD,
        policyOf: PD,
        core: DD,
        previews: CD,
        noWebGpu: cD,
        notify: (DD, CD, cD) => {
          const ID = {
            translationKey: DD,
            stillCurrent: CD,
            reasonKey: cD
          };
          pD.i.Uo(mD, ID, !0)
        },
        failInGame: DD => {
          pD.i.Uo(iD.i, DD)
        },
        warn: ID
      })
    }
    async function OD() {
      const [{
        shaderPackPage: DD,
        harnessShaderPackMode: CD
      }, {
        shaderPackTextures: ID
      }] = await Promise.all([cD.e(129).then((() => cD(38527))), cD.e(130).then((() => cD(6379)))]), pD = await DD.load();
      return "active" !== pD.status ? pD : {
        status: "active",
        pack: {
          variants: pD.pack.variants,
          layers: ID().layers,
          keepCircleShadows: pD.pack.keepCircleShadows
        },
        harnessPolicy: CD()
      }
    }
    async function PD(DD) {
      var CD;
      const [{
        harnessShaderPackMode: ID
      }, {
        getShaderPackPolicy: pD
      }] = await Promise.all([cD.e(129).then((() => cD(38527))), cD.e(89).then((() => cD(40329)))]);
      return null !== (CD = ID()) && void 0 !== CD ? CD : pD(DD)
    }
  },
  40079: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => bD,
      f: () => oD,
      g: () => QD,
      h: () => wD,
      l: () => SD,
      n: () => yD
    });
    var ID = cD(40083),
      pD = cD(40088);
    const iD = "atlas:",
      fD = 3e4;
    class bD extends Error {
      constructor(DD, CD) {
        super(`fetching ${DD} answered HTTP ${CD}`), this.url = DD, this.status = CD, this.name = "TerrainTextureFetchError"
      }
    }

    function QD(DD) {
      if (!DD.startsWith(iD)) return null;
      const CD = Number(DD.slice(iD.length));
      return Number.isInteger(CD) && CD >= 0 ? CD : null
    }
    async function wD() {
      const DD = await cD.e(201).then((() => cD(33733)));
      return {
        atlasSheets: DD.blockAtlasUrls,
        texture: CD => {
          var cD, ID, iD;
          return null !== (cD = null !== (ID = null !== (iD = DD.animatedBlockTextures[CD]) && void 0 !== iD ? iD : DD.rotatedBlockTextures[CD]) && void 0 !== ID ? ID : pD.d[CD]) && void 0 !== cD ? cD : null
        }
      }
    }
    async function SD(DD) {
      const CD = new AbortController,
        cD = setTimeout((() => {
          CD.abort(new DOMException(`${DD} took over ${fD} ms`, "TimeoutError"))
        }), fD);
      let ID;
      try {
        const cD = await fetch(DD, {
          signal: CD.signal
        });
        if (!cD.ok) throw new bD(DD, cD.status);
        ID = await cD.blob()
      } finally {
        clearTimeout(cD)
      }
      const pD = await createImageBitmap(ID, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return yD(pD)
      } finally {
        pD.close()
      }
    }
    const BD = 8192;

    function yD(DD) {
      const {
        width: CD,
        height: cD
      } = DD, pD = Math.max(1, Math.min(cD, BD)), iD = (0, ID.h)(CD, pD, {
        willReadFrequently: !0
      });
      if (!iD) throw new Error("no 2D context to read the texture back");
      iD.globalCompositeOperation = "copy";
      const fD = new Uint8Array(CD * cD * 4);
      for (let ID = 0; ID < cD; ID += pD) {
        const bD = Math.min(pD, cD - ID);
        iD.drawImage(DD, 0, ID, CD, bD, 0, 0, CD, bD), fD.set(iD.getImageData(0, 0, CD, bD).data, ID * CD * 4)
      }
      return {
        width: CD,
        height: cD,
        pixels: fD
      }
    }
    async function MD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SD;
      const ID = [],
        pD = await Promise.all(DD.map((async DD => {
          var pD, fD;
          const bD = null !== (pD = null === (fD = CD.decoded) || void 0 === fD ? void 0 : fD.call(CD, DD)) && void 0 !== pD ? pD : null,
            wD = null === bD ? function(DD, CD) {
              if (DD.startsWith(iD)) {
                var cD;
                const ID = QD(DD);
                return null === ID ? null : null !== (cD = CD.atlasSheets[ID]) && void 0 !== cD ? cD : null
              }
              return CD.texture(DD)
            }(DD, CD) : null,
            SD = null !== bD && void 0 !== bD ? bD : null === wD ? null : cD(wD);
          if (null === SD) return ID.push({
            name: DD,
            url: wD,
            error: new Error(`no URL for terrain texture ${DD}`)
          }), null;
          try {
            const CD = await SD;
            if (CD.pixels.byteLength !== CD.width * CD.height * 4) throw new Error(`decoded ${CD.pixels.byteLength} bytes for ${CD.width}x${CD.height} texels`);
            return {
              name: DD,
              texture: CD
            }
          } catch (BD) {
            return ID.push({
              name: DD,
              url: wD,
              error: BD
            }), null
          }
        }))),
        fD = pD.filter((DD => null !== DD)),
        bD = new Uint32Array(2 * fD.length);
      fD.forEach(((DD, CD) => {
        let {
          texture: cD
        } = DD;
        bD[2 * CD] = cD.width, bD[2 * CD + 1] = cD.height
      }));
      return {
        handOver: {
          names: fD.map((DD => {
            let {
              name: CD
            } = DD;
            return CD
          })),
          textures: fD.map((DD => {
            let {
              texture: CD
            } = DD;
            return CD.pixels
          })),
          sizes: bD
        },
        failures: ID
      }
    }
    const tD = [2e3, 1e4, 3e4, 6e4, 12e4];

    function ZD() {}
    class oD {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tD,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = DD, this.retryMs = CD, this.keepBelow = cD, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wD,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const ID = ++this.started,
          pD = {
            decode: cD.decode,
            wholeAtlas: cD.wholeAtlas
          };
        return this.loadAndHandOver(CD, pD, DD, (() => {
          var DD;
          return ID < this.landed || !1 === (null === (DD = cD.wanted) || void 0 === DD ? void 0 : DD.call(cD))
        }), {
          onTaken: (DD, cD) => {
            this.landed = ID, this.current = {
              mine: ID,
              sources: CD,
              load: pD,
              uM: DD,
              failed: cD
            }
          }
        })
      }
      restore(DD) {
        var CD;
        const cD = this.current;
        if (null === cD) return Promise.resolve(null);
        if ((null === (CD = this.restoring) || void 0 === CD ? void 0 : CD.mine) === cD.mine) return this.restoring.done;
        const ID = {
          mine: cD.mine,
          done: this.restoreLanded(cD, DD).finally((() => {
            this.restoring === ID && (this.restoring = null)
          }))
        };
        return this.restoring = ID, ID.done
      }
      async restoreLanded(DD, CD) {
        const cD = () => this.landed !== DD.mine,
          {
            uM: ID
          } = DD;
        if (null !== ID) return this.stopped() ? null : this.core.setTerrainTextures(ID.names, ID.textures, ID.sizes);
        let pD = CD;
        for (let iD = 0;; iD++) {
          const CD = this.retryMs.at(iD),
            ID = {
              allOrNothingExcept: void 0 === CD ? void 0 : DD.failed
            },
            fD = await this.loadAndHandOver(DD.sources, DD.load, pD, cD, ID);
          if (!1 !== fD || void 0 === CD || this.stopped()) return fD;
          if (pD = ZD, await new Promise((DD => {
              setTimeout(DD, CD)
            })), cD()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(DD, CD, cD, ID) {
        let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const iD = this.core.terrainTextureNames();
        var fD;
        if (0 === iD.length) return null === (fD = pD.onTaken) || void 0 === fD || fD.call(pD, null, new Set), !0;
        let bD, wD;
        try {
          bD = await DD(), wD = await MD(iD, bD, CD.decode)
        } catch (oD) {
          return ID() ? null : (cD({
            name: null,
            url: null,
            error: oD
          }), !1)
        }
        if (ID() || this.stopped()) return null;
        for (const QD of wD.failures) cD(QD);
        const SD = pD.allOrNothingExcept;
        if (void 0 !== SD && wD.failures.some((DD => {
            let {
              name: CD
            } = DD;
            return null === CD || !SD.has(CD)
          })) || !0 === CD.wholeAtlas && wD.failures.some((DD => {
            let {
              name: CD
            } = DD;
            return null === CD || null !== QD(CD)
          }))) return !1;
        const {
          handOver: BD
        } = wD, yD = function(DD) {
          return DD.textures.reduce(((DD, CD) => DD + CD.byteLength), 0)
        }(BD) < this.keepBelow, tD = this.core.setTerrainTextures(BD.names, BD.textures, BD.sizes, yD ? void 0 : () => {
          !async function(DD, CD) {
            await CD;
            for (const {
                buffer: ID
              }
              of DD) {
              const DD = ID;
              var cD;
              if (!DD.detached) null === (cD = DD.transfer) || void 0 === cD || cD.call(DD, 0)
            }
          }(BD.textures, bD.heldUntil)
        });
        if (tD) {
          var ZD;
          const DD = new Set(wD.failures.flatMap((DD => {
            let {
              name: CD
            } = DD;
            return null === CD ? [] : [CD]
          })));
          null === (ZD = pD.onTaken) || void 0 === ZD || ZD.call(pD, yD ? BD : null, DD)
        }
        return tD
      }
    }
  },
  36202: (DD, CD, cD) => {
    function ID(DD) {
      return "fetch" === DD || "timeout" === DD || "integrity" === DD ? "download" : "browser"
    }
    cD.d(CD, {
      c: () => pD,
      d: () => fD,
      h: () => QD,
      l: () => bD,
      o: () => ID,
      r: () => iD
    });
    const pD = "https://discord.gg/playbloxd";

    function iD(DD) {
      return "download" === DD ? {
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

    function fD(DD, CD) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: CD ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: DD.code
        },
        discordLink: CD,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function bD() {
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

    function QD(DD, CD, cD) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: cD ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: DD.reason
        },
        discordLink: null === DD.name,
        confirm: CD ? "general:reconnect" : DD.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  6384: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => XD,
      g: () => mD,
      i: () => ND,
      k: () => vD
    });
    var ID = cD(6393);
    const pD = 6,
      iD = 3,
      fD = 1,
      bD = 2,
      QD = 4,
      wD = 8,
      SD = 16,
      BD = 32,
      yD = 64,
      MD = 128,
      tD = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function ZD(DD) {
      if (!DD) return 0;
      const CD = tD.indexOf(DD);
      if (CD <= 0) throw new Error(`"${DD}" is not a shader pack hook function`);
      return CD
    }

    function oD(DD) {
      if (0 === DD) return null;
      const CD = tD[DD];
      if (void 0 === CD) throw new Error(`${DD} is not a shader pack hook function id`);
      return CD
    }

    function vD(DD) {
      const CD = ID.c.length;
      return {
        strict: DD >= CD,
        program: ID.c[DD % CD]
      }
    }

    function ND(DD) {
      return Number(DD.strict) * ID.c.length + ID.c.indexOf(DD.program)
    }

    function gD(DD) {
      return "" === DD ? [] : DD.split(" ")
    }

    function XD(DD) {
      const CD = {
        variantFlags: new Uint8Array(pD),
        hooks: new Uint8Array(pD * iD),
        moduleCodes: Array(pD).fill(""),
        reads: Array(2 * pD).fill("")
      };
      for (const cD of DD) {
        const DD = ND(cD.key),
          ID = (DD, CD) => null === cD.hooks.surface || cD.reads.fragment.includes(DD) ? 0 : CD;
        CD.variantFlags[DD] = (cD.sceneDepth ? fD : 0) | (cD.movesVertices ? bD : 0) | (cD.sunShadow ? QD : 0) | (cD.airShadow ? wD : 0) | (cD.discards ? SD : 0) | ID("localPosition", BD) | ID("enchantSpeed", yD) | ID("enchantTier", MD), CD.hooks[DD * iD] = ZD(cD.hooks.vertex), CD.hooks[DD * iD + 1] = ZD(cD.hooks.surface), CD.hooks[DD * iD + 2] = ZD(cD.hooks.light), CD.moduleCodes[DD] = cD.moduleCode, CD.reads[2 * DD] = cD.reads.vertex.join(" "), CD.reads[2 * DD + 1] = cD.reads.fragment.join(" ")
      }
      return CD
    }

    function mD(DD) {
      const {
        hooks: CD,
        moduleCodes: cD,
        reads: ID
      } = DD;
      return Array.from(DD.variantFlags, ((DD, pD) => {
        const BD = pD * iD;
        return {
          key: vD(pD),
          hooks: {
            vertex: oD(CD[BD]),
            surface: oD(CD[BD + 1]),
            light: oD(CD[BD + 2])
          },
          moduleCode: cD[pD],
          sceneDepth: 0 !== (DD & fD),
          sunShadow: 0 !== (DD & QD),
          airShadow: 0 !== (DD & wD),
          movesVertices: 0 !== (DD & bD),
          discards: 0 !== (DD & SD),
          reads: {
            vertex: gD(ID[2 * pD]),
            fragment: gD(ID[2 * pD + 1])
          }
        }
      }))
    }
  },
  39961: (DD, CD, cD) => {
    cD.d(CD, {
      C: () => fD,
      F: () => ZD,
      G: () => MD,
      J: () => tD,
      e: () => pD,
      h: () => ID,
      l: () => yD,
      p: () => SD,
      r: () => oD,
      u: () => iD,
      v: () => bD,
      z: () => QD
    });
    const ID = 3,
      pD = 0,
      iD = 1,
      fD = 2,
      bD = {
        uniform: 3,
        Ey: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      QD = 10,
      wD = "BloxdPackInputs",
      SD = "bloxdPackInputs",
      BD = [{
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
      yD = 80;

    function MD() {
      const DD = BD.map((DD => {
        let {
          name: CD,
          type: cD
        } = DD;
        return `    ${CD}: ${cD},\n`
      })).join("");
      return `struct ${wD} {\n${DD}}\n@group(${ID}) @binding(${pD}) var<uniform> ${SD}: ${wD};\n`
    }

    function tD(DD, CD) {
      const cD = new DataView(DD, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, yD),
        [ID, pD, iD, fD, bD, QD] = BD;
      cD.setFloat32(ID.offset, CD.seconds, !0), cD.setUint32(pD.offset, CD.lit ? 1 : 0, !0);
      for (let wD = 0; wD < 3; wD++) cD.setInt32(iD.offset + 4 * wD, CD.renderOffset[wD], !0), cD.setFloat32(fD.offset + 4 * wD, CD.i_[wD], !0), cD.setFloat32(bD.offset + 4 * wD, CD.eyePosition[wD], !0), cD.setFloat32(QD.offset + 4 * wD, CD.shadowDirection[wD], !0)
    }

    function ZD(DD) {
      const CD = new Uint32Array(Math.max(1, DD.length));
      return DD.forEach(((DD, cD) => {
        let {
          id: ID,
          rotation: pD
        } = DD;
        CD[cD] = 65535 & ID | (3 & pD) << 16
      })), CD
    }
    const oD = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6393: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID,
      f: () => fD,
      h: () => bD,
      i: () => pD,
      k: () => iD
    });
    const ID = ["terrain", "liquid", "model"];

    function pD() {
      const DD = [];
      for (const CD of [!1, !0])
        for (const cD of ID) DD.push({
          strict: CD,
          program: cD
        });
      return DD
    }

    function iD(DD) {
      return `${DD.strict?"strict":"allow"}.${DD.program}`
    }

    function fD(DD) {
      return !DD.hooks.vertex && !DD.hooks.surface && !DD.hooks.light
    }

    function bD(DD, CD) {
      return "off" !== CD && (null === DD || DD.some((DD => DD.key.strict === ("strict" === CD) && !fD(DD))))
    }
  },
  39995: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID,
      e: () => iD,
      i: () => QD,
      m: () => fD,
      n: () => pD
    });
    const ID = /^alloc_failed (\d+) bytes$/;

    function pD(DD, CD) {
      return iD(DD, CD) ? `trap=alloc_failed ${CD} bytes` : `trap=${DD}`
    }

    function iD(DD, CD) {
      return "unreachable" === DD && CD > 0
    }

    function fD(DD, CD, cD) {
      const ID = function(DD) {
        return DD instanceof WebAssembly.RuntimeError ? /unreachable/i.test(DD.message) ? "unreachable" : /out of bounds/i.test(DD.message) ? "out_of_bounds" : "runtime_error" : (DD instanceof RangeError || DD instanceof Error && "InternalError" === DD.name) && /call stack|recursion/i.test(DD.message) ? "stack_overflow" : "js_error"
      }(DD);
      if ("unreachable" !== ID) return {
        kind: ID,
        panic: null,
        refusedBytes: 0
      };
      const pD = CD(),
        iD = cD();
      return {
        kind: ID,
        panic: iD > 0 ? null : pD,
        refusedBytes: iD
      }
    }
    const bD = 300;

    function QD(DD) {
      return DD.replace(/\s*\n\s*/g, " / ").slice(0, bD)
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);