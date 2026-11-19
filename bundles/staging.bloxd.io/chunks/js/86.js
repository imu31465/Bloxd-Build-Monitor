export const id = 86;
export const ids = [86];
export const modules = {
  38136: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz,
      d: () => tz,
      e: () => Hz,
      g: () => Mz,
      j: () => lz
    });
    const Ez = "A valid external Instance reference no longer exists.",
      nz = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ];
    const iz = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function lz(zz, uz) {
      return zz ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(zz) {
        var uz;
        const bz = null !== (uz = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(zz)) && void 0 !== uz ? uz : /failed with ([A-Z][A-Z0-9_]+)/.exec(zz);
        return bz ? bz[1] : zz.includes(Ez) ? "gpu_process_lost" : "other"
      }(uz)
    }

    function Mz(zz) {
      return `${(null===zz||void 0===zz?void 0:zz.vendor)||"unknown vendor"} ${(null===zz||void 0===zz?void 0:zz.architecture)||"unknown architecture"}`
    }

    function tz(zz) {
      return Oz(zz)[1]
    }

    function Hz(zz) {
      return Oz(zz)[2]
    }

    function Oz(zz) {
      var uz;
      return null !== (uz = nz.find((uz => {
        let [bz] = uz;
        return zz < bz
      }))) && void 0 !== uz ? uz : nz[nz.length - 1]
    }
  },
  38429: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez,
      d: () => nz
    });
    const Ez = 45e3;
    class nz extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  35959: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez,
      i: () => nz,
      j: () => iz
    });
    const Ez = 1024,
      nz = 1024 * Ez;

    function iz(zz) {
      return (zz / nz).toFixed(1)
    }
  },
  35956: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz,
      g: () => Mz,
      j: () => lz,
      l: () => tz,
      p: () => Hz
    });
    var Ez = bz(195);
    const nz = 32 * bz(35959).i,
      iz = 6144,
      lz = 4608,
      Mz = 512;

    function tz(zz) {
      return Math.floor(nz * zz / iz)
    }

    function Hz(zz) {
      const uz = zz - Math.floor(zz / 6);
      let bz = Ez.e.maxChunkHorizAddDistance,
        nz = Ez.e.maxChunkVertAddDistance;
      if (Oz(bz + 1, nz + 1) <= uz) return null;
      for (; Oz(bz + 1, nz + 1) > uz && (bz > 0 || nz > 0);) bz > nz ? bz-- : nz--;
      return {
        horizontal: bz,
        vertical: nz
      }
    }

    function Oz(zz, uz) {
      const bz = Math.max(zz, uz);
      let Ez = 0;
      for (let nz = -bz; nz <= bz; nz++)
        for (let iz = -bz; iz <= bz; iz++)
          for (let lz = -bz; lz <= bz; lz++) pz(zz, uz, nz, iz, lz) && Ez++;
      return Ez
    }

    function pz(zz, uz, bz, Ez, nz) {
      const iz = bz * bz + nz * nz;
      return zz === uz ? iz + Ez * Ez <= zz * zz : zz > uz ? Math.abs(Ez) <= uz && iz + Ez * Ez <= zz * zz : iz <= zz * zz && iz + Ez * Ez <= uz * uz
    }
  },
  40049: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => nz,
      h: () => iz,
      k: () => Mz,
      m: () => Oz,
      q: () => tz,
      r: () => lz
    });
    var Ez = bz(195);
    const nz = 3e3,
      iz = 15e3;

    function lz(zz) {
      const uz = zz.endsWith(Ez.k);
      return {
        text: (uz ? zz.slice(0, -Ez.k.length) : zz) || null,
        dropsCache: uz
      }
    }
    const Mz = "Either your internet isn't working or this is a bug.";

    function tz(zz, uz) {
      const bz = Oz(zz);
      return null !== bz.name && "" === Ez.b[bz.name].text && null !== uz ? uz : bz.reason
    }
    const Hz = "You were removed from the game.";

    function Oz(zz) {
      var uz;
      let bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const nz = null !== (uz = Object.keys(Ez.b).find((uz => Ez.b[uz].code === zz))) && void 0 !== uz ? uz : null;
      if (null === nz) return {
        code: zz,
        name: nz,
        reason: null !== bz && void 0 !== bz ? bz : `${Mz}\nCode: ${zz}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: iz,
        canReconnect: lz = !1
      } = Ez.b[nz], tz = zz === Ez.b.outdatedVersion.code || zz === Ez.b.loadRecaptchaError.code;
      return {
        code: zz,
        name: nz,
        reason: "" !== iz ? iz : null !== bz && void 0 !== bz ? bz : zz === Ez.b.gameOrPluginKick.code ? Hz : `Code: ${zz}`,
        canReconnect: lz,
        automaticallyReconnect: zz === Ez.b.customGameUpdated.code || zz === Ez.b.duplicateLobbyNameError.code,
        requiresRefresh: tz
      }
    }
  },
  4560: (zz, uz, bz) => {
    bz.d(uz, {
      $c: () => Ez.Gb,
      Ab: () => uu,
      B: () => du,
      Bc: () => Fu,
      Bd: () => Uz,
      C: () => Cz,
      Dd: () => Qz,
      Eb: () => nz.e,
      Fb: () => vz,
      Fc: () => Hu,
      G: () => Ez.g,
      H: () => Hz,
      Ic: () => Eu,
      Id: () => yz,
      Jb: () => hz,
      L: () => Ez.j,
      Lc: () => Ez.mb,
      Ld: () => ez,
      Mc: () => Ez.pb,
      Nb: () => Lz,
      Nd: () => Wz,
      P: () => Ez.m,
      Pb: () => Az,
      Pc: () => Ez.qb,
      Qb: () => Ez.N,
      Qc: () => Yz,
      Qd: () => lu,
      S: () => Iz,
      Tb: () => Pz,
      Tc: () => Ez.vb,
      Td: () => Zu,
      V: () => Ez.s,
      Vb: () => rz,
      Vc: () => Ez.wb,
      W: () => Ez.u,
      Wd: () => sz,
      Y: () => Ez.x,
      Yb: () => iu,
      Yc: () => Ez.Ab,
      Z: () => pz,
      Zc: () => Ez.Eb,
      _b: () => fz,
      _d: () => jz,
      ab: () => Xz,
      bc: () => Ou,
      be: () => mz,
      c: () => zu,
      cb: () => Ez.y,
      ce: () => Vz,
      db: () => Ez.A,
      dd: () => Ez.Jb,
      de: () => az,
      f: () => Rz,
      fc: () => nz.i,
      fd: () => Jz,
      ge: () => tz,
      h: () => Zz,
      hb: () => gz,
      i: () => tu,
      ic: () => wz,
      ie: () => qz,
      jc: () => bu,
      jd: () => Ez.Mb,
      kb: () => nu,
      l: () => xz,
      mb: () => Oz,
      me: () => Ru,
      n: () => Nz,
      nc: () => Ez.W,
      nd: () => Ez.Ob,
      od: () => Ez.Tb,
      p: () => Ez.c,
      pb: () => Ez.E,
      pe: () => Fz,
      qc: () => Ez.Z,
      qd: () => iz,
      rc: () => Ez.$,
      s: () => pu,
      sb: () => Dz,
      sd: () => Kz,
      tc: () => Ez.ab,
      td: () => Mu,
      u: () => Tz,
      ub: () => Bz,
      vd: () => cz,
      w: () => lz,
      wc: () => Ez.bb,
      xd: () => Sz,
      yb: () => kz,
      yc: () => Ez.jb,
      z: () => Gz
    });
    var Ez = bz(4564),
      nz = bz(2289);
    const iz = Math.round(1e3 / Ez.Tb),
      lz = 4,
      Mz = 2;

    function tz() {
      return crypto.getRandomValues(new Uint32Array(Mz))
    }
    const Hz = {
        Ok: 0,
        Errors: 1,
        Fatal: 2
      },
      Oz = 16,
      pz = {
        Draws: 1,
        NetAll: 2
      },
      dz = {
        ShowFog: 1,
        Lighting: 2,
        ChunkFade: 4
      };

    function Fz(zz) {
      return (zz.nametagsHidden ? oz.NametagsHidden : 0) | (zz.crouchToggle ? oz.CrouchToggle : 0) | (zz.bhopDisabled ? oz.BhopDisabled : 0) | (zz.disableBobbing ? oz.DisableBobbing : 0) | (zz.ezTowering ? oz.EzTowering : 0) | (zz.ezBridging ? oz.EzBridging : 0) | (zz.showChunkBorders ? oz.ShowChunkBorders : 0)
    }
    const Zz = {
        Flags: 0,
        PhysicsVersion: 1,
        InbuiltOverwritten: 2,
        AltComplete: 3,
        ProbeUsedProp: 4
      },
      Rz = {
        Ready: 1,
        SendFnReplaced: 2,
        Butto: 4,
        IdentityChanged: 32,
        CheckFuncHit: 128,
        OriginStackHit: 256
      },
      Kz = {
        None: 0,
        Untrusted: 2,
        FewProperties: 3,
        CheckFunc: 4,
        NotEvent: 5,
        En: 6,
        Fr: 7
      },
      wz = {
        StackCheck: 0,
        ConfirmMesh: 1,
        IndexPassReplaced: 2,
        ProductSubChanged: 3,
        RenderStatus: 4,
        Held: 6,
        PlayerKilledSubs: 7
      },
      Xz = 5,
      fz = 4294967295;

    function sz(zz) {
      return (zz.showFog ? dz.ShowFog : 0) | (zz.lighting ? dz.Lighting : 0) | (zz.chunkFade ? dz.ChunkFade : 0)
    }
    const rz = {
        ResetFirst: 1,
        AdStart: 2,
        PreventMovement: 4,
        AdEnd: 8,
        PayloadMaxBytes: 1 << 20
      },
      oz = {
        NametagsHidden: 1,
        CrouchToggle: 2,
        BhopDisabled: 4,
        DisableBobbing: 8,
        EzTowering: 16,
        EzBridging: 32,
        ShowChunkBorders: 64,
        All: 127
      },
      Nz = {
        Release: 1,
        KeepTouches: 2
      },
      vz = {
        Point: 1,
        Stamped: 2
      },
      xz = {
        Add: 1,
        Clear: 2
      },
      Jz = 1,
      Az = 8,
      Tz = 16777215,
      Lz = 4,
      Pz = {
        Resume: 1
      },
      Gz = {
        Held: 1
      };

    function az(zz, uz) {
      return (zz | uz << 8) >>> 0
    }

    function Vz(zz) {
      return 255 & zz
    }

    function mz(zz) {
      return zz >>> 8
    }

    function qz(zz) {
      return zz + 3 & -4
    }
    const hz = 16777216,
      Uz = 20;
    const cz = 8,
      gz = 8,
      Sz = 16777216,
      yz = {
        JobResult: 1,
        WorkerStarted: 2,
        WorkerLost: 3,
        WorldgenResult: 4,
        WorldgenStarted: 5,
        WorldgenLost: 6
      },
      Dz = {
        Ok: 0,
        Refused: 1,
        Trapped: 2,
        NotHeld: 3,
        HeapRefused: 4
      },
      Qz = 16,
      Wz = {
        Lost: 0,
        Gone: 1
      },
      ez = {
        Init: 1,
        Mesh: 2,
        WorldgenSeed: 3,
        Generate: 4,
        Retire: 5
      };

    function jz(zz) {
      return zz === ez.WorldgenSeed || zz === ez.Generate
    }
    const Iz = 4,
      Bz = 99,
      Cz = {
        PAIRS_MAX: 16,
        FIXED_WORDS: 2,
        PAIR_WORDS: 2,
        WORDS_MAX: 34
      },
      Yz = {
        BYTES: 12,
        WEBGPU: 1,
        GL: 2,
        WEBGPU_LOSSES_MAX: 1,
        LOST: 0,
        PIPELINE_FAILED: 1
      },
      kz = 12,
      zu = 16,
      uu = 4,
      bu = 12,
      Eu = {
        SessionBased: 1,
        ReplayOffer: 2
      },
      nu = 4,
      iu = 8,
      lu = 8,
      Mu = {
        HEAD_BYTES: 28,
        UPDATE: 1,
        REMOVE: 2
      },
      tu = {
        Crit: 1,
        HitSelf: 2
      },
      Hu = {
        BYTES: 16,
        STRING_TYPE_BYTES: 24,
        STRING_TYPE: 65535,
        ERROR: 65534
      },
      Ou = {
        None: 0,
        Bytes: 1,
        Msgpack: 2,
        MsgpackBin: 3
      },
      pu = 12,
      du = {
        Activated: 1,
        Error: 2,
        Left: 3,
        Closed: 4,
        Held: 5,
        Resumed: 6,
        ResumeRefused: 7
      },
      Fu = 67108864;

    function Zu(zz) {
      for (const [uz, bz] of Object.entries(Ez.g))
        if (bz === zz) return uz;
      return `Unknown${zz}`
    }

    function Ru(zz) {
      return {
        status: zz[Ez.A.Status],
        lastError: zz[Ez.A.LastError],
        lastErrorDetail: zz[Ez.A.LastErrorDetail],
        errorCount: zz[Ez.A.ErrorCount],
        frameIndex: zz[Ez.A.FrameIndex],
        tickIndex: zz[Ez.A.TickIndex],
        renderPending: zz[Ez.A.RenderPending],
        firstView: zz[Ez.A.FirstView],
        chunksCancelled: zz[Ez.A.ChunksCancelled]
      }
    }
  },
  39800: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Ez,
      f: () => pz,
      h: () => Mz,
      j: () => iz,
      l: () => nz,
      p: () => tz,
      q: () => Oz
    });
    class Ez extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function nz(zz) {
      return zz instanceof RangeError && /call stack/i.test(zz.message) || zz instanceof Error && "InternalError" === zz.name && /recursion/i.test(zz.message)
    }

    function iz(zz) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(zz))
    }
    const lz = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function Mz(zz) {
      var uz;
      return zz instanceof WebAssembly.RuntimeError || zz instanceof Ez || nz(zz) && lz.test(null !== (uz = zz.stack) && void 0 !== uz ? uz : "")
    }

    function tz(zz, uz) {
      if (Mz(zz)) throw zz;
      console.error(uz, zz)
    }

    function Hz(zz, uz, bz, nz, iz) {
      if (uz % nz !== 0 || uz + bz > zz.byteLength) throw new Ez(`${iz}: ${bz} bytes at ${uz}, ${nz}-aligned, outside ${zz.byteLength} bytes of memory`)
    }

    function Oz(zz, uz, bz, Ez, nz) {
      return 0 === bz ? null : (Hz(uz, bz, Ez * zz.BYTES_PER_ELEMENT, zz.BYTES_PER_ELEMENT, nz), new zz(uz, bz, Ez))
    }

    function pz(zz, uz, bz, Ez, nz) {
      return 0 === uz ? null : (Hz(zz, uz, bz, Ez, nz), new DataView(zz, uz, bz))
    }
  },
  40189: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez
    });
    const Ez = {
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
  40147: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Zz,
      f: () => Rz,
      g: () => dz,
      j: () => pz
    });
    const Ez = 2e3,
      nz = "unavailable";
    let iz = () => Promise.resolve().then((() => bz(2990))),
      lz = null,
      Mz = null,
      tz = Hz();

    function Hz() {
      let zz = () => {};
      return {
        promise: new Promise((uz => {
          zz = () => {
            uz(null)
          }
        })),
        resolve: zz
      }
    }

    function Oz() {
      if (null === lz) {
        const zz = iz();
        lz = zz, zz.then((uz => {
          lz === zz && (Mz = uz)
        }), (() => {
          lz === zz && (lz = null)
        }))
      }
      return lz
    }

    function pz() {
      Oz().catch((() => {}))
    }

    function dz() {
      tz.resolve()
    }

    function Fz(zz, uz, bz, Ez) {
      if (null === zz) return {
        errorKind: uz,
        fingerprint: nz,
        dedupe: `${uz}|${Ez}`
      };
      const {
        fingerprint: iz
      } = zz.clientErrorKey(uz, bz, Ez);
      return {
        errorKind: uz,
        fingerprint: iz,
        dedupe: iz
      }
    }

    function Zz(zz, uz, bz, Ez) {
      return null === Mz ? Ez ? (pz(), Fz(null, zz, uz, bz)) : null : Fz(Mz, zz, uz, bz)
    }
    async function Rz(zz, uz, bz) {
      let nz;
      const iz = new Promise((zz => {
        nz = setTimeout((() => {
          zz(null)
        }), Ez)
      }));
      try {
        return Fz(await Promise.race([Oz(), iz, tz.promise]), zz, uz, bz)
      } catch {
        return Fz(null, zz, uz, bz)
      } finally {
        clearTimeout(nz)
      }
    }
  },
  40140: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      BUILT_IN_ANIMATIONS_SITE: () => Qz,
      CORE_ERRORS_SITE: () => Vz,
      EVENT_OVERFLOW_SITE: () => Dz,
      FIRST_VIEW_SITE: () => ez,
      JOIN_SITE: () => qz,
      LEAVE_SITE: () => hz,
      MODEL_FEED_SITE: () => Uz,
      MODEL_POOL_SITE: () => cz,
      NON_FATAL_LOKI_REPORTS_PER_PAGE: () => Iz,
      NON_FATAL_REPORTS_PER_SESSION: () => Ou,
      PREVIEW_ANIMATIONS_SITE: () => yz,
      RENDER_RELOAD_SITE: () => Sz,
      TEXTURE_NAMES_SITE: () => gz,
      TEXTURE_PACK_FEED_SITE: () => Wz,
      TurnstilePageError: () => Uu,
      WASM_LOAD_SITE: () => mz,
      crashError: () => Ru,
      crashReportsSettled: () => ru,
      flushCrashReports: () => fu,
      joinFailureCode: () => cu,
      lokiTransport: () => Yz,
      modelFailureCode: () => eu,
      readTrap: () => vu,
      renderLossDetail: () => pb,
      renderReloadMessage: () => Hb,
      reportCoreErrors: () => Nu,
      reportCountedLoadFallback: () => qu,
      reportCrash: () => Ku,
      reportDataLoadFailure: () => Kb,
      reportDisconnect: () => Qu,
      reportDracoDecoderFailure: () => Cu,
      reportEventOverflow: () => zb,
      reportFirstViewNoTerrain: () => ib,
      reportGpuFallback: () => Vu,
      reportGpuWasmPopulation: () => mu,
      reportLightFault: () => bb,
      reportMemoryShed: () => nb,
      reportModelFailure: () => ju,
      reportModelPoolFailure: () => Iu,
      reportModelsModuleRetry: () => Bu,
      reportPageJoinFailure: () => Su,
      reportReconnectGaveUp: () => Wu,
      reportRenderReload: () => Fb,
      reportReplayFault: () => Mb,
      reportStaleBuildReload: () => Xb,
      reportStoppedCore: () => Tu,
      reportTerrainTextureFailure: () => Zb,
      reportTexturePackFeedLoadFailure: () => ku,
      reportUnstreamedCoreLoad: () => hu,
      reportUnsupportedFallback: () => Gu,
      reportUnusedSeat: () => Du,
      reportWorkerLost: () => ub,
      reportWorkerStartTimeout: () => lb,
      reportWorldgenGaveUp: () => Eb,
      reportWorldgenLoadFailure: () => Yu,
      resetCrashReports: () => ou,
      setCrashBackend: () => iu,
      setCrashScreen: () => Eu,
      setCrashTransport: () => uu,
      showCrash: () => Au,
      showJoinFailure: () => gu,
      showUnsupported: () => Pu
    });
    var Ez = bz(1068),
      nz = bz(284),
      iz = bz(2995),
      lz = bz(40147),
      Mz = bz(4560),
      tz = bz(40153),
      Hz = bz(3216),
      Oz = bz(38136),
      pz = bz(128),
      dz = bz(668),
      Fz = bz(125),
      Zz = bz(3218),
      Rz = bz(38429),
      Kz = bz(1732),
      wz = bz(40116),
      Xz = bz(39750),
      fz = bz(40052),
      sz = bz(40059),
      rz = bz(40155),
      oz = bz(3468),
      Nz = bz(3475),
      vz = bz(40163),
      xz = bz(40177),
      Jz = bz(40181),
      Az = bz(36282),
      Tz = bz(3004),
      Lz = bz(40111),
      Pz = bz(39976),
      Gz = bz(39979);
    const az = "[bloxd-wasm-client]",
      Vz = "coreErrors",
      mz = "wasmLoad",
      qz = "join",
      hz = "leave",
      Uz = "modelFeed",
      cz = "modelWorkerPool",
      gz = "textureNames",
      Sz = "renderReload",
      yz = "previewAnimations",
      Dz = "eventOverflow",
      Qz = "builtInAnimations",
      Wz = "texturePackFeed",
      ez = "firstView",
      jz = 300,
      Iz = 8;
    let Bz = 0;
    const Cz = new Set,
      Yz = (zz, uz) => {
        const bz = lu[zz.kind];
        if (null === bz) return void kz(zz, uz, nu, null);
        const Ez = (0, lz.c)(bz, zz.message, zz.code, zz.fatal);
        if (null !== Ez) return void kz(zz, uz, nu, Ez);
        const nz = nu;
        Xu("Loki", (async () => {
          kz(zz, uz, nz, await (0, lz.f)(bz, zz.message, zz.code))
        }))
      };

    function kz(zz, uz, bz, nz) {
      const {
        kind: lz,
        code: Mz,
        site: tz,
        fatal: Hz,
        details: Oz
      } = zz;
      if (!Hz)
        if (null === nz || (0, iz.c)(nz.errorKind) || Cz.has(nz.dedupe)) {
          if (Bz >= Iz) return;
          Bz++
        } else Cz.add(nz.dedupe);
      const pz = {
        ...Oz,
        kind: lz,
        code: Mz,
        site: tz,
        fatal: String(Hz),
        backend: bz
      };
      null !== nz && (pz.errorKind = nz.errorKind, pz.fingerprint = nz.fingerprint), uz instanceof Error && "string" === typeof uz.stack && (pz.causeStack = uz.stack.slice(0, 2e3)), (0, Ez.WR)(Ru(zz, uz), pz)
    }
    let zu = Yz;

    function uu(zz) {
      const uz = zu;
      return zu = zz, uz
    }
    let bu = () => {};

    function Eu(zz) {
      const uz = bu;
      return bu = zz, uz
    }
    let nu = "unpicked";

    function iu(zz) {
      nu = zz
    }
    const lu = {
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
      Mu = {
        coreError: "wasm_load",
        recovered: "wasm_load",
        unstreamedLoad: "wasm_load",
        noTerrain: "wasm_load",
        gpuFallback: "wasm_load"
      },
      tu = new Set(["unstreamedLoad"]);
    let Hu = !1;
    const Ou = 20,
      pu = new Map;
    let du = 0,
      Fu = 0;
    const Zu = new Set;

    function Ru(zz, uz) {
      const bz = Object.assign(new Error(`${zz.code}: ${zz.message}`), {
        name: "WasmClientCrash",
        cause: null !== uz && void 0 !== uz ? uz : void 0
      });
      return uz instanceof Error && uz.stack && (bz.stack = uz.stack), bz
    }

    function Ku(zz) {
      var uz, Ez;
      const {
        kind: nz,
        code: iz,
        site: lz,
        fatal: Mz,
        message: tz,
        error: Hz
      } = zz, Oz = !1 !== zz.toTransport && !tu.has(nz), pz = !Mz && Oz, dz = {
        kind: nz,
        code: iz,
        site: lz,
        fatal: Mz,
        message: tz,
        details: null !== (uz = zz.details) && void 0 !== uz ? uz : {}
      }, Fz = `${iz}@${lz}${void 0===zz.instance?"":`#${zz.instance}`}${Mz?"!":""}`, Zz = (null !== (Ez = pu.get(Fz)) && void 0 !== Ez ? Ez : 0) + 1;
      if (pu.set(Fz, Zz), Zz > 1 ? 0 === (Zz & Zz - 1) && wu((() => {
          console.warn(`${az} ${iz} at ${lz} reported ${Zz} times`)
        })) : pz && du >= Ou ? wu((() => {
          console.warn(`${az} ${nz} ${iz} at ${lz}: ${tz} (not sent: the session's ${Ou} went)`, dz.details, null !== Hz && void 0 !== Hz ? Hz : "")
        })) : (pz && du++, function(zz, uz, Ez) {
          var nz, iz;
          const {
            kind: lz,
            code: Mz,
            site: tz,
            fatal: Hz,
            message: Oz,
            details: pz
          } = zz;
          wu((() => {
            (Hz ? console.error : console.warn)(`${az} ${lz} ${Mz} at ${tz}: ${Oz}`, pz, null !== uz && void 0 !== uz ? uz : "")
          }));
          const dz = Mu[lz],
            Fz = null !== (nz = null !== (iz = lu[lz]) && void 0 !== iz ? iz : dz) && void 0 !== nz ? nz : null;
          null !== Fz && Xu("counts", (async () => {
            const {
              peekVisitSessionId: zz
            } = await Promise.resolve().then((() => bz(627)));
            if (null !== zz()) {
              const {
                reportCappedWasmFailure: zz,
                reportWasmFailure: uz
              } = await bz.e(207).then((() => bz(35777)));
              (void 0 === dz ? uz : zz)(Fz, Oz, Mz), Hu = !0
            }
          }));
          Ez && wu((() => {
            zu(zz, uz)
          }))
        }(dz, Hz, Oz)), Mz) {
        var Rz;
        const uz = null !== (Rz = zz.screen) && void 0 !== Rz ? Rz : {
          text: (0, Az.i)(dz, !0),
          reload: !0
        };
        wu((() => {
          bu(uz)
        }))
      }
      return dz
    }

    function wu(zz) {
      try {
        zz()
      } catch (uz) {
        try {
          console.warn(`${az} could not send a report`, uz)
        } catch {}
      }
    }

    function Xu(zz, uz) {
      try {
        const bz = uz().catch((uz => {
          console.warn(`${az} could not send the report to ${zz}`, uz)
        })).finally((() => {
          Zu.delete(bz)
        }));
        Zu.add(bz)
      } catch (bz) {
        console.warn(`${az} could not send the report to ${zz}`, bz)
      }
    }
    async function fu(zz) {
      let uz;
      (0, lz.g)();
      const bz = new Promise((bz => {
        uz = setTimeout(bz, zz)
      }));
      await Promise.race([su(), bz]), clearTimeout(uz)
    }
    async function su() {
      if (await Promise.allSettled([...Zu]), Hu) try {
        const {
          flushClientAnalyticsEvents: zz
        } = await Promise.resolve().then((() => bz(1468)));
        await zz()
      } catch (zz) {
        console.warn(`${az} could not send the counts`, zz)
      }
    }
    async function ru() {
      for (; Zu.size > 0;) await Promise.allSettled([...Zu])
    }

    function ou() {
      pu.clear(), du = 0, Hu = !1, Bz = 0, Cz.clear(), Fu = 0, (0, tz.j)()
    }

    function Nu(zz, uz, bz, Ez) {
      Fu += uz;
      for (const {
          code: lz,
          detail: Hz
        }
        of zz) {
        var nz, iz;
        const zz = (0, Mz.Td)(lz),
          uz = (0, tz.b)(lz, Hz),
          Oz = null === Ez || void 0 === Ez ? void 0 : Ez(lz, Hz),
          pz = void 0 !== (null === uz || void 0 === uz ? void 0 : uz.gpuDetails),
          dz = pz ? null === (nz = (0, Fz.m)()) || void 0 === nz ? void 0 : nz.renderer : void 0,
          Zz = pz ? ` ${(0,tz.e)()}` : "",
          Rz = Array.from([dz && `gpu ${(0,tz.m)(dz)}`, Oz].filter(Boolean).join("; ")).slice(0, jz).join(""),
          Kz = `core error ${zz}${null!==(iz=null===uz||void 0===uz?void 0:uz.words)&&void 0!==iz?iz:""}${Zz}${Rz?`: ${Rz}`:""}`,
          wz = {
            errorCode: String(lz),
            detail: String(Hz),
            droppedBefore: String(Fu),
            wasmBuild: bz.wasm,
            clientVersion: bz.client,
            ...null === uz || void 0 === uz ? void 0 : uz.gpuDetails
          };
        null !== uz && (0, tz.g)(uz) ? wu((() => {
          console.warn(`${az} coreError CORE-${zz}: ${Kz} (not sent: the session's render warnings of its kind went)`, wz)
        })) : Ku({
          kind: lz === Mz.G.JobsHeapGaveUp ? "meshHeap" : "coreError",
          code: `CORE-${zz}`,
          site: Vz,
          fatal: !1,
          message: Kz,
          details: wz,
          instance: null === uz || void 0 === uz ? void 0 : uz.instance
        })
      }
    }

    function vu(zz) {
      return (0, Lz.l)(zz instanceof Pz.e ? zz.trap : zz, oz.I, oz.bb)
    }
    const xu = "declined=js";

    function Ju(zz) {
      return zz ? {
        labels: [xu],
        details: {
          declined: "js"
        }
      } : {
        labels: [],
        details: {}
      }
    }

    function Au(zz, uz, bz) {
      return Lu(zz, uz, bz, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
    }

    function Tu(zz, uz, bz) {
      return Lu(zz, uz, bz, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
    }

    function Lu(zz, uz, bz, Ez, nz) {
      let {
        memoryDetails: iz = {},
        declined: lz = !1
      } = Ez;
      const {
        code: Mz,
        details: tz,
        message: Hz
      } = (0, wz.J)(zz, uz), Oz = [];
      null !== bz && (tz.trapKind = bz.kind, null !== bz.panic && (tz.panic = (0, Lz.i)(bz.panic)), bz.refusedBytes > 0 && (tz.refusedAllocation = String(bz.refusedBytes)), Oz.push((0, Lz.o)(bz.kind, bz.refusedBytes)));
      const pz = Ju(lz);
      return Ku({
        kind: "crash",
        code: Mz,
        site: zz.site,
        fatal: nz,
        message: [...Oz, ...pz.labels, Hz].join("; "),
        details: {
          ...tz,
          ...pz.details,
          ...iz
        },
        error: zz.error
      })
    }

    function Pu(zz, uz, bz) {
      return Ku({
        kind: "unsupported",
        code: uz,
        site: mz,
        fatal: !0,
        message: bz,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: zz,
          status: uz
        },
        screen: {
          text: (0, Az.s)(zz),
          reload: "download" === zz
        }
      })
    }

    function Gu(zz, uz, bz) {
      return Ku({
        kind: "unsupportedFallback",
        code: "blockedAfterLoss" === uz ? "blocked_after_loss" : "unsupported_js_fallback",
        site: mz,
        fatal: !1,
        message: bz,
        details: {
          ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          cause: zz,
          status: "unsupported",
          decline: uz,
          fallback: "js"
        }
      })
    }
    const au = "misdrawn_gpu_js_fallback";

    function Vu(zz, uz) {
      return Ku({
        kind: "gpuFallback",
        code: au,
        site: mz,
        fatal: !1,
        message: `the renderer plays ${zz} on ${uz} worse than the JS client`,
        details: {
          gpuFamily: zz,
          backend: uz,
          fallback: "js"
        }
      })
    }

    function mu(zz) {
      Xu("counts", (async () => {
        await (0, dz.b)(zz), Hu = !0
      }))
    }

    function qu(zz, uz, bz, Ez) {
      const nz = Ju(Ez);
      return Ku({
        kind: "unsupported",
        code: uz,
        site: mz,
        fatal: !1,
        message: [...nz.labels, bz].join("; "),
        details: {
          cause: zz,
          status: uz,
          fallback: "js",
          ...nz.details
        }
      })
    }

    function hu() {
      const {
        code: zz,
        message: uz
      } = Tz.b;
      return Ku({
        kind: "unstreamedLoad",
        code: zz,
        site: mz,
        fatal: !1,
        message: uz
      })
    }
    class Uu extends Error {
      constructor() {
        super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
      }
    }

    function cu(zz) {
      return zz instanceof fz.p ? 0 === zz.code ? "JOIN-matchmake" : `JOIN-${zz.code}` : zz instanceof fz.d ? 0 === zz.code ? `JOIN-${zz.stage}` : `JOIN-${zz.stage}-${zz.code}` : zz instanceof Xz.b ? "JOIN-gameCode" : zz instanceof Uu ? "JOIN-turnstilePage" : zz instanceof fz.C ? "JOIN-trafficCheck" : zz instanceof Rz.d ? "JOIN-timeout" : "JOIN-network"
    }

    function gu(zz, uz) {
      const bz = (0, Gz.e)(zz),
        Ez = {
          wasmBuild: uz.wasm,
          clientVersion: uz.client
        },
        nz = zz instanceof Uu ? {
          text: (0, Az.m)(),
          reload: !1
        } : void 0,
        iz = (0, sz.g)(zz),
        lz = "expected" !== iz;
      return Ku({
        kind: "join",
        code: cu(zz),
        site: qz,
        fatal: !0,
        message: bz,
        details: Ez,
        error: zz,
        screen: nz,
        toTransport: lz,
        instance: iz
      })
    }

    function Su(zz, uz, bz) {
      var Ez;
      const nz = (0, sz.g)(zz),
        iz = {
          cause: (zz instanceof fz.d || zz instanceof fz.p) && null !== (Ez = zz.serverText) && void 0 !== Ez ? Ez : "",
          sinceJoinStart: (0, Zz.b)(bz.sinceJoinStartMs),
          game: bz.game,
          ...(0, Zz.k)(),
          wasmBuild: uz.wasm,
          clientVersion: uz.client
        };
      return Ku({
        kind: "pageJoin",
        code: cu(zz),
        site: qz,
        fatal: !1,
        message: (0, Gz.e)(zz),
        details: iz,
        error: zz,
        toTransport: "unrecognised" === nz,
        instance: nz
      })
    }
    const yu = {
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

    function Du(zz, uz) {
      let {
        unused: bz,
        answered: Ez,
        heldMs: nz
      } = zz;
      const {
        code: iz,
        message: lz
      } = yu[bz], Mz = {
        unused: bz,
        answered: String(Ez),
        heldMs: String(nz),
        wasmBuild: uz.wasm,
        clientVersion: uz.client
      };
      return Ku({
        kind: "seat",
        code: iz,
        site: qz,
        fatal: !1,
        message: lz,
        details: Mz
      })
    }

    function Qu(zz, uz, bz) {
      var Ez;
      let nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (Ez = zz.name) && void 0 !== Ez ? Ez : String(zz.code);
      const iz = {
          closeCode: String(zz.code),
          recognised: String(null !== zz.name),
          closeReason: bz.closeReason,
          sinceJoined: (0, Zz.b)(bz.sinceJoinedMs),
          game: bz.game,
          ...(0, Zz.k)(),
          wasmBuild: uz.wasm,
          clientVersion: uz.client
        },
        lz = null === zz.name && !(0, Zz.d)(zz.code);
      return Ku({
        kind: "disconnect",
        code: nz,
        site: hz,
        fatal: !1,
        message: "Left room",
        details: iz,
        toTransport: lz
      })
    }

    function Wu(zz, uz) {
      const bz = {
        ...(0, Hz.k)(zz),
        wasmBuild: uz.wasm,
        clientVersion: uz.client
      };
      return Ku({
        kind: "disconnect",
        code: `reconnect-${zz.reason}`,
        site: qz,
        fatal: !1,
        message: "Reconnect failed",
        details: bz
      })
    }

    function eu(zz) {
      return zz.error instanceof Nz.e ? `MODEL-${zz.error.status}` : zz.error instanceof vz.p ? "MODEL-ring" : "MODEL-network"
    }

    function ju(zz, uz) {
      const bz = eu(zz),
        Ez = `model file ${zz.file} ${zz.startup?"(startup) ":""}could not load`,
        nz = {
          file: String(zz.file),
          url: zz.url,
          wasmBuild: uz.wasm,
          clientVersion: uz.client
        };
      return Ku({
        kind: zz.startup ? "model" : "modelLate",
        code: bz,
        site: Uz,
        fatal: zz.startup,
        message: Ez,
        details: nz,
        error: zz.error
      })
    }

    function Iu(zz, uz) {
      const bz = {
        wasmBuild: uz.wasm,
        clientVersion: uz.client
      };
      return Ku({
        kind: "model",
        code: "CORE-modelWorkerPool",
        site: cz,
        fatal: !1,
        message: "the model workers could not start: no model can build",
        details: bz,
        error: zz
      })
    }

    function Bu(zz, uz, bz) {
      const Ez = {
        delayMs: String(uz),
        wasmBuild: bz.wasm,
        clientVersion: bz.client
      };
      zz instanceof Nz.e && (Ez.status = String(zz.status));
      return Ku({
        kind: "recovered",
        code: "CORE-modelsModuleRetry",
        site: cz,
        fatal: !1,
        message: "the models module didn't download: fetching it again",
        details: Ez,
        error: zz
      })
    }

    function Cu(zz, uz) {
      const bz = {
        wasmBuild: uz.wasm,
        clientVersion: uz.client
      };
      return Ku({
        kind: "recovered",
        code: "CORE-dracoDecoder",
        site: cz,
        fatal: !1,
        message: "the Draco decoder did not load: the Draco files waiting on it failed",
        details: bz,
        error: zz
      })
    }

    function Yu(zz, uz) {
      const bz = {
        wasmBuild: uz.wasm,
        clientVersion: uz.client
      };
      return Ku({
        kind: "worldgenLoad",
        code: "CORE-worldgenLoad",
        site: wz.E,
        fatal: !1,
        message: "world-gen worker code could not load",
        details: bz,
        error: zz
      })
    }

    function ku(zz, uz) {
      const bz = {
        wasmBuild: uz.wasm,
        clientVersion: uz.client
      };
      return Ku({
        kind: "texturePackLoad",
        code: "CORE-texturePackLoad",
        site: Wz,
        fatal: !1,
        message: "texture pack feed code could not load",
        details: bz,
        error: zz
      })
    }

    function zb(zz, uz) {
      const {
        frames: bz,
        acks: Ez,
        mask: nz,
        outcome: iz
      } = zz, lz = {
        frames: String(bz),
        acks: String(Ez),
        mask: String(nz),
        outcome: null !== iz && void 0 !== iz ? iz : "resynced",
        wasmBuild: uz.wasm,
        clientVersion: uz.client
      };
      return Ku({
        kind: "recovered",
        code: "rejoined" === iz ? "CORE-eventOverflowRejoin" : "failed" === iz ? "CORE-eventOverflowFailed" : "CORE-eventOverflow",
        site: Dz,
        fatal: !1,
        message: `the event buffer refused records in ${bz} frames`,
        details: lz
      })
    }

    function ub(zz, uz, bz) {
      return Ku({
        kind: "recovered",
        code: "CORE-workerLost",
        site: zz,
        fatal: !1,
        message: `a ${zz} worker was lost`,
        details: {
          reason: uz,
          wasmBuild: bz.wasm,
          clientVersion: bz.client
        }
      })
    }

    function bb(zz, uz, bz) {
      const Ez = {
        wasmBuild: bz.wasm,
        clientVersion: bz.client
      };
      return Ku({
        kind: "recovered",
        code: zz,
        site: wz.o,
        fatal: !1,
        message: uz,
        details: Ez
      })
    }

    function Eb(zz, uz) {
      const bz = {
        lastReason: zz,
        wasmBuild: uz.wasm,
        clientVersion: uz.client
      };
      return Ku({
        kind: "recovered",
        code: "CORE-worldgenGaveUp",
        site: wz.E,
        fatal: !1,
        message: "no world-gen worker generated: chunks come whole",
        details: bz
      })
    }

    function nb(zz, uz, bz) {
      return Ku({
        kind: "recovered",
        code: "CORE-memoryShed",
        site: wz.n,
        fatal: !1,
        message: (0, rz.j)(zz) ? "wasm memory was refused: the session shed load" : "the tab's footprint reached its budget: the session shed load",
        details: {
          cause: zz,
          ...uz,
          wasmBuild: bz.wasm,
          clientVersion: bz.client
        }
      })
    }

    function ib(zz, uz) {
      const bz = (0, tz.f)(),
        Ez = {
          game: zz,
          renderWarned: String(bz),
          browser: (0, tz.e)(),
          wasmBuild: uz.wasm,
          clientVersion: uz.client
        },
        nz = `first view drew no whole terrain in ${xz.h/1e3} s${bz?", render warned":""}`;
      return Ku({
        kind: "noTerrain",
        code: "CORE-firstViewNoTerrain",
        site: ez,
        fatal: !1,
        message: nz,
        details: Ez
      })
    }

    function lb(zz, uz, bz) {
      return Ku({
        kind: "recovered",
        code: "CORE-workerStartTimeout",
        site: zz,
        fatal: !1,
        message: `a ${zz} worker did not start`,
        details: {
          waitedMs: String(Math.round(uz)),
          wasmBuild: bz.wasm,
          clientVersion: bz.client
        }
      })
    }

    function Mb(zz, uz, bz) {
      return Ku({
        kind: "recovered",
        code: "CORE-replayFault",
        site: zz,
        fatal: !1,
        message: `the replay's ${zz} failed`,
        details: {
          wasmBuild: bz.wasm,
          clientVersion: bz.client
        },
        error: uz
      })
    }
    const tb = {
      lost: "render device was lost",
      frames_refused: "render device refused a frame",
      start_failed: "renderer couldn't start",
      pipeline_failed: "renderer's pipeline failed"
    };

    function Hb(zz, uz, bz) {
      const Ez = "lost" === uz && void 0 !== bz ? ` (${bz})` : "";
      return `the ${zz} ${tb[uz]}${Ez}`
    }
    const Ob = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };

    function pb(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now();
      const nz = null === bz.boundAtMs ? "unbound" : `up${(0,Oz.d)(Ez-bz.boundAtMs)}`,
        iz = null === bz.adapter ? "no adapter" : (0, Oz.g)(bz.adapter),
        lz = `${(0,Kz.h)()?"hidden":"visible"} ${nz} ${iz}${!0===bz.indirectHangs?" ih":""}`;
      if ("pipeline_failed" === zz) return `${zz} ${lz}`;
      const Mz = null === uz || void 0 === uz ? void 0 : uz.message;
      return `${uz instanceof Kz.e?"timeout":(0,Oz.j)("frames_refused"===zz,"string"===typeof Mz?Mz:"")} ${lz}`
    }
    const db = {
      samples: null,
      sunShadows: null,
      renderDistance: null
    };

    function Fb(zz, uz, Ez) {
      var iz, lz, Mz, Hz, dz;
      let {
        cause: Fz = "lost",
        error: Zz,
        context: Rz = Ob,
        session: Kz = db
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const wz = pb(Fz, Zz, Rz),
        Xz = {
          losses: String(uz),
          cause: Fz,
          detail: wz,
          vendor: null !== (iz = null === (lz = Rz.adapter) || void 0 === lz ? void 0 : lz.vendor) && void 0 !== iz ? iz : "",
          architecture: null !== (Mz = null === (Hz = Rz.adapter) || void 0 === Hz ? void 0 : Hz.architecture) && void 0 !== Mz ? Mz : "",
          indirectHangs: String(Rz.indirectHangs),
          samples: String(Kz.samples),
          sunShadows: String(Kz.sunShadows),
          renderDistance: String(Kz.renderDistance),
          gpuFamily: null !== (dz = (0, nz.c)()) && void 0 !== dz ? dz : "",
          browser: (0, tz.e)(),
          siteUsed: pz.x,
          wasmBuild: Ez.wasm,
          clientVersion: Ez.client
        },
        fz = Hb(zz, Fz),
        sz = Ku({
          kind: "recovered",
          code: "CORE-renderLost",
          site: Sz,
          fatal: !1,
          message: fz,
          details: Xz,
          error: Zz
        });
      return Xu("ga", (async () => {
        const {
          logError: uz
        } = await Promise.resolve().then((() => bz(2709))), Ez = `${Oz.c["webgpu"===zz?"WebGPU":"WebGL2"]}\n Error: ${wz}`;
        uz("warning", Ez), uz("error", Ez)
      })), sz
    }

    function Zb(zz, uz) {
      var bz, Ez;
      const nz = null === zz.name ? "TEXTURE-sources" : null === zz.url ? "TEXTURE-nourl" : zz.error instanceof Jz.b ? `TEXTURE-${zz.error.status}` : "TEXTURE-network",
        iz = null === zz.name ? "terrain textures could not load" : `terrain texture ${zz.name} could not load`,
        lz = {
          texture: null !== (bz = zz.name) && void 0 !== bz ? bz : "",
          url: null !== (Ez = zz.url) && void 0 !== Ez ? Ez : "",
          wasmBuild: uz.wasm,
          clientVersion: uz.client
        };
      return Ku({
        kind: "terrainTexture",
        code: nz,
        site: wz.C,
        fatal: !1,
        message: iz,
        details: lz,
        error: zz.error
      })
    }
    const Rb = {
      previewAnimations: {
        site: yz,
        prefix: "ANIMS",
        name: "the previews' animations"
      },
      builtInAnimations: {
        site: Qz,
        prefix: "BUILTIN",
        name: "the built-in animations"
      }
    };

    function Kb(zz, uz, bz, Ez) {
      const {
        site: nz,
        prefix: iz,
        name: lz
      } = Rb[zz], {
        stage: Mz,
        error: tz
      } = bz;
      return Ku({
        kind: zz,
        code: "decode" === Mz ? null === tz ? `${iz}-decode` : `${iz}-trap` : tz instanceof Nz.e ? `${iz}-${tz.status}` : `${iz}-network`,
        site: nz,
        fatal: !1,
        message: "decode" === Mz ? `${lz} did not decode` : `${lz} could not load`,
        details: {
          url: uz,
          wasmBuild: Ez.wasm,
          clientVersion: Ez.client
        },
        error: tz
      })
    }
    const wb = "staleBuild";

    function Xb(zz, uz, bz) {
      const Ez = {
          failedSite: zz.site,
          url: zz.url,
          from: zz.from,
          sameBuild: String(zz.from === uz),
          reloadMs: String(Math.max(0, Date.now() - zz.at)),
          wasmBuild: bz.wasm,
          clientVersion: bz.client
        },
        nz = `reloaded into a newer build after ${zz.site} failed to load: ${zz.error}`;
      return Ku({
        kind: "staleBuild",
        code: "CORE-staleBuild",
        site: wb,
        fatal: !1,
        message: nz,
        details: Ez
      })
    }
  },
  40177: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => nz,
      h: () => Ez
    });
    const Ez = 3e4;
    class nz {
      constructor(zz) {
        this.xZ = zz, this.waitedMs = 0, this.lastMs = null
      }
      frame(zz, uz) {
        if (uz) return !0;
        const bz = null === this.lastMs ? 0 : zz - this.lastMs;
        return this.lastMs = zz, bz <= 900 && (this.waitedMs += bz), !(this.waitedMs < Ez) && (this.xZ(), !0)
      }
    }
  },
  4552: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => lz,
      h: () => iz,
      l: () => nz
    });
    var Ez = bz(4560);

    function nz(zz) {
      return "none" !== zz
    }

    function iz(zz, uz) {
      if (!zz) return "none";
      switch (uz) {
        case Ez.Y.Drawn:
          return "drawn";
        case Ez.Y.Paced:
          return "paced";
        default:
          return "skipped"
      }
    }

    function lz(zz) {
      return "drawn" === zz
    }
  },
  39750: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Ez,
      f: () => wz,
      j: () => Rz,
      l: () => Kz,
      m: () => dz,
      o: () => Fz,
      q: () => Oz,
      s: () => pz,
      v: () => Zz
    });
    class Ez extends Error {
      constructor(zz) {
        super(`the join's code did not load: ${zz instanceof Error?zz.message:String(zz)}`, {
          cause: zz
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === zz || void 0 === zz ? void 0 : zz.request
      }
    }
    let nz = null,
      iz = null,
      lz = null;
    const Mz = [];
    let tz = null;

    function Hz(zz, uz) {
      try {
        zz(uz)
      } catch (bz) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", bz)
      }
    }

    function Oz() {
      return tz
    }

    function pz(zz) {
      Mz.push(zz), null !== tz && Hz(zz, tz)
    }

    function dz(zz) {
      return nz ??= Promise.all([bz.e(69), bz.e(94), bz.e(214), bz.e(74), bz.e(215), bz.e(189), bz.e(93), bz.e(259), bz.e(187), bz.e(262), bz.e(199), bz.e(186), bz.e(200), bz.e(136), bz.e(85), bz.e(114), bz.e(237), bz.e(53)]).then((() => bz(41801))).then((uz => {
        uz.loadAudio(zz), tz = uz;
        for (const zz of Mz) Hz(zz, uz);
        return uz
      })).catch((zz => {
        throw nz = null, zz
      })), nz
    }
    async function Fz(zz, uz) {
      try {
        const bz = await dz(zz);
        await bz.loadClientGame(uz)
      } catch (bz) {
        throw new Ez(bz)
      }
    }

    function Zz(zz, uz) {
      iz = {
        running: zz,
        shell: uz
      }
    }

    function Rz() {
      return lz
    }
    async function Kz(zz) {
      const uz = iz;
      if ((null === uz || void 0 === uz ? void 0 : uz.running) !== zz) throw new Error("the core's session has ended");
      const bz = await dz(uz.shell.audio).catch((zz => {
        throw new Ez(zz)
      }));
      if (null !== lz) return lz;
      if (iz !== uz || zz.isStopped) throw new Error("the core stopped while the game code loaded");
      if (lz = bz.startGameHost(zz, uz.shell), null === lz) throw new Error("the core's shared tables didn't read, so the game can't start");
      return lz
    }

    function wz() {
      null !== lz && (null !== tz ? tz.endGameHost(lz) : lz.closeGame()), lz = null, iz = null
    }
  },
  40052: (zz, uz, bz) => {
    bz.d(uz, {
      C: () => pz,
      E: () => Mz,
      d: () => Hz,
      h: () => iz,
      k: () => lz,
      o: () => nz,
      p: () => Fz,
      s: () => Oz,
      u: () => tz,
      y: () => dz
    });
    var Ez = bz(1739);
    const nz = new Uint8Array([12]),
      iz = 2e3,
      lz = 257;

    function Mz(zz) {
      const uz = new Uint8Array(4);
      return new DataView(uz.buffer).setUint32(0, zz, !0), uz
    }
    class tz extends Error {
      constructor() {
        super("the game was left while it reconnected"), this.name = "AbortError"
      }
    }
    class Hz extends Error {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(zz), this.stage = uz, this.code = bz, this.serverText = Ez, this.name = "JoinError"
      }
    }
    class Oz extends Error {
      constructor(zz) {
        super(zz), this.final = !0, this.name = "ResumeRefusedError"
      }
    }
    class pz extends Error {
      constructor(zz) {
        super((0, Ez.d)(zz), {
          cause: zz
        }), this.name = "TrafficCheckError"
      }
    }
    class dz extends Error {
      constructor(zz, uz, bz) {
        super(zz, {
          cause: bz
        }), this.networkLost = uz, this.name = "SeatRequestError"
      }
    }
    class Fz extends Error {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        super(zz), this.code = uz, this.serverText = bz, this.name = "MatchmakeError"
      }
    }
  },
  40059: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => dz,
      g: () => pz
    });
    var Ez = bz(2471),
      nz = bz(3218),
      iz = bz(38429),
      lz = bz(40049),
      Mz = bz(40052),
      tz = bz(40063);
    const Hz = "seat reservation expired.",
      Oz = "early_leave";

    function pz(zz) {
      if (zz instanceof iz.d) return "expected";
      if (zz instanceof Mz.y) return zz.networkLost ? "expected" : "unrecognised";
      if (zz instanceof Mz.d) {
        if ("closed" === zz.stage && (0 === zz.code || (0, nz.d)(zz.code))) return "expected";
        if ("roomError" === zz.stage && (zz.serverText === Hz || zz.serverText === Oz)) return "expected"
      }
      return zz instanceof Mz.d || zz instanceof Mz.p ? null === (0, lz.m)(zz.code).name ? "unrecognised" : "known" : (0, Ez.g)(zz) ? "expected" : zz instanceof Mz.C || zz instanceof tz.f ? "known" : "unrecognised"
    }

    function dz(zz) {
      return zz instanceof iz.d ? "timedOut" : "expected" !== pz(zz) || (0, Ez.g)(zz) || zz instanceof Mz.d && 1001 === zz.code ? void 0 : "failed"
    }
  },
  40155: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => xz,
      j: () => pz,
      n: () => rz,
      q: () => wz,
      r: () => Nz
    });
    var Ez = bz(35959),
      nz = bz(35956);
    const iz = 64 * Ez.e,
      lz = 40 * Ez.i,
      Mz = 36 * Ez.i,
      tz = 20 * Ez.i,
      Hz = 2 * Ez.i,
      Oz = 5 * Ez.i;

    function pz(zz) {
      return "footprint" !== zz
    }
    const dz = 2 * Ez.i,
      Fz = 4 * Ez.i,
      Zz = 35 * Ez.i + dz + Fz,
      Rz = 6.5 * Ez.i,
      Kz = 132.5 * Ez.e;

    function wz(zz) {
      const uz = Rz + (0, nz.l)(zz) + zz * Kz;
      return Math.ceil((2 * Zz + uz) / iz) * iz
    }
    const Xz = wz(nz.c),
      fz = (Ez.i, Ez.i, Ez.i, {
        targetBytes: lz,
        leastBytes: tz
      }),
      sz = {
        targetBytes: Mz,
        leastBytes: tz
      };

    function rz(zz) {
      return zz >= nz.c ? fz : sz
    }
    const oz = 2 * iz;

    function Nz(zz, uz, bz) {
      return zz + uz + oz > (null !== bz && void 0 !== bz ? bz : Xz)
    }
    const vz = {
      now: () => performance.now(),
      requestIdle: "function" === typeof requestIdleCallback ? zz => {
        requestIdleCallback(zz)
      } : null
    };
    class xz {
      constructor(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : vz;
        this.memory = zz, this.readPeakStoredChunks = uz, this.onError = bz, this.clock = Ez, this.pendingSince = null, this.stepsRefused = !1, this.stepsHeldUntil = null, this.shedding = null, this.sheds = 0, this.shedCap = null, this.stopped = !1, this.statsAt = -1 / 0, this.main = null, this.peakStoredChunks = 0, this.workers = new Map, this.replacedRefusals = {
          reserves: 0,
          allocations: 0
        }, this.joinReserveTaken = null, this.ceilingBytes = null, this.ballastCheckAt = -1 / 0, this.ballastPeakBytes = 0, this.distanceInUse = null, this.footprint = null
      }
      setShed(zz, uz, bz) {
        this.shedding = {
          shed: zz,
          xZ: uz,
          readDistanceInUse: bz
        }
      }
      shedDistanceInUse() {
        return this.distanceInUse
      }
      setFootprint(zz) {
        this.footprint = zz
      }
      setCeiling(zz) {
        this.ceilingBytes = zz, this.call((() => {
          this.memory.setCeiling(zz)
        }), void 0)
      }
      ceilingMayRefuse(zz) {
        return Nz(this.memory.memoryBytes(), zz, this.ceilingBytes)
      }
      reserveAtJoin(zz) {
        let {
          targetBytes: uz,
          leastBytes: bz
        } = zz;
        const Ez = this.memory.memoryBytes(),
          nz = Ez + bz,
          iz = Math.max(uz + (this.ballastOn() ? Oz : 0), nz),
          lz = this.call((() => this.memory.reserveUpFront(iz) ? "target" : iz > nz && this.memory.reserveUpFront(nz) ? "least" : "none"), "none");
        if (this.stopped) return !1;
        if ("target" !== lz) {
          const zz = "least" === lz ? `took ${nz} bytes instead` : "frames grow it in steps";
          console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${iz} bytes was refused at ${Ez} bytes; ${zz}`)
        }
        return this.joinReserveTaken = lz, this.takePressure(), this.takeBallast(this.clock.now()), this.refreshStats(), "target" !== lz && this.shedFor("joinReserve"), "none" !== lz
      }
      afterFrame() {
        if (this.stopped) return;
        const zz = this.clock.now(),
          uz = null !== this.stepsHeldUntil && zz >= this.stepsHeldUntil;
        if (uz && (this.stepsHeldUntil = null), this.takePressure() && null === this.stepsHeldUntil && !this.stepsRefused && this.shedFor("allocation"), this.stopped) return;
        if (null === this.stepsHeldUntil && zz >= this.ballastCheckAt && (this.takeBallast(zz), this.stopped)) return;
        const bz = this.stepsRefused || null !== this.stepsHeldUntil ? "none" : this.call((() => this.memory.lowWater()), "none"),
          Ez = uz && "now" === bz ? "none" : bz,
          {
            requestIdle: nz
          } = this.clock;
        "now" === Ez || null !== this.pendingSince && zz - this.pendingSince >= 500 ? this.step() : "idle" === Ez && null === this.pendingSince && (null === nz ? this.step() : (this.pendingSince = zz, nz((() => {
          null !== this.pendingSince && this.step()
        })))), zz - this.statsAt >= 1e3 && (this.statsAt = zz, this.refreshStats(), this.checkFootprint())
      }
      refreshStats() {
        this.call((() => {
          var zz, uz;
          (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (uz = this.shedding.readDistanceInUse()) && void 0 !== uz ? uz : this.distanceInUse);
          null === (zz = this.footprint) || void 0 === zz || zz.read(this.memory.memoryBytes() + this.workersMemoryBytes())
        }), void 0)
      }
      stop() {
        this.stopped = !0, this.pendingSince = null
      }
      noteMeshWorker(zz, uz) {
        this.noteWorker(`Mesh${zz}`, uz)
      }
      meshWorkerGone(zz) {
        this.workerGone(`Mesh${zz}`)
      }
      noteWorldgen(zz) {
        this.noteWorker("Worldgen", zz)
      }
      worldgenGone() {
        this.workerGone("Worldgen")
      }
      noteWorker(zz, uz) {
        const bz = this.workers.get(zz);
        null !== bz && void 0 !== bz && bz.gone && (this.replacedRefusals.reserves += bz.stats.reservesRefused, this.replacedRefusals.allocations += bz.stats.allocationsRefused), this.workers.set(zz, {
          stats: uz,
          gone: !1
        })
      }
      workerGone(zz) {
        const uz = this.workers.get(zz);
        uz && (uz.gone = !0)
      }
      details() {
        var zz, uz;
        const bz = {
          wasmMemoryNow: `${(0,Ez.j)(this.memory.memoryBytes())} MiB`
        };
        null !== this.joinReserveTaken && (bz.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (bz.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
        const nz = this.main;
        if (nz) {
          bz.wasmMemoryMain = Jz(nz);
          const zz = Math.max(0, nz.peakLiveBytes - this.ballastPeakBytes),
            uz = 0 === this.peakStoredChunks ? "-" : (zz / this.peakStoredChunks / Ez.e).toFixed(1);
          bz.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${uz} KiB`
        }
        for (const [Ez, {
            stats: lz,
            gone: Mz
          }] of this.workers) bz[`wasmMemory${Ez}`] = Jz(lz) + (Mz ? " (gone)" : "");
        const iz = null !== (zz = null === (uz = this.footprint) || void 0 === uz ? void 0 : uz.describe()) && void 0 !== zz ? zz : null;
        return null !== iz && (bz.wasmMemoryFootprint = iz), bz
      }
      pageKillSnapshot() {
        var zz, uz, bz, nz, iz;
        let lz = (null !== (zz = null === (uz = this.main) || void 0 === uz ? void 0 : uz.reservesRefused) && void 0 !== zz ? zz : 0) + this.replacedRefusals.reserves,
          Mz = (null !== (bz = null === (nz = this.main) || void 0 === nz ? void 0 : nz.allocationsRefused) && void 0 !== bz ? bz : 0) + this.replacedRefusals.allocations;
        for (const {
            stats: Ez
          }
          of this.workers.values()) lz += Ez.reservesRefused, Mz += Ez.allocationsRefused;
        return {
          wasmMainMiB: Number((0, Ez.j)(this.memory.memoryBytes())),
          wasmWorkersMiB: Number((0, Ez.j)(this.workersMemoryBytes())),
          peakStoredChunks: this.peakStoredChunks,
          refusedReserves: lz,
          refusedAllocations: Mz,
          sheds: this.sheds,
          ...null === (iz = this.footprint) || void 0 === iz ? void 0 : iz.snapshot()
        }
      }
      workersMemoryBytes() {
        let zz = 0;
        for (const {
            stats: uz,
            gone: bz
          }
          of this.workers.values()) zz += bz ? 0 : uz.memoryBytes;
        return zz
      }
      checkFootprint() {
        null === this.footprint || null === this.shedding || this.stepsRefused || null !== this.stepsHeldUntil || this.footprint.takeShed() && this.shedFor("footprint")
      }
      step() {
        this.pendingSince = null, this.call((() => this.memory.reserveAhead(Hz)), !0) || (null === this.shedding ? this.stopSteps("a step ahead was refused (the ceiling, or the browser)") : this.shedFor("step"))
      }
      ballastOn() {
        return null !== this.shedding
      }
      takeBallast(zz) {
        if (!this.ballastOn() || null === this.joinReserveTaken) return;
        this.ballastCheckAt = zz + 1e3;
        const uz = this.call((() => this.memory.takeBallast()), 0);
        this.ballastPeakBytes = Math.max(this.ballastPeakBytes, uz)
      }
      takePressure() {
        return this.ballastOn() && this.call((() => this.memory.takePressure()), !1)
      }
      stopSteps(zz) {
        this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${zz}: frames grow on demand from here`)
      }
      shedFor(zz) {
        const {
          shedding: uz
        } = this;
        if (null === uz) return;
        this.pendingSince = null;
        const bz = this.call((() => uz.shed(zz)), null);
        this.stopped || (null !== bz ? (this.sheds++, this.shedCap = bz, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), uz.xZ(zz, this.sheds, this.details())) : pz(zz) && this.stopSteps("nothing is left to shed"))
      }
      call(zz, uz) {
        if (this.stopped) return uz;
        try {
          return zz()
        } catch (bz) {
          return this.stop(), this.onError(bz), uz
        }
      }
    }

    function Jz(zz) {
      const uz = (zz, uz) => `${zz}/${(0,Ez.j)(uz)}`;
      return `memory ${(0,Ez.j)(zz.memoryBytes)} live ${(0,Ez.j)(zz.liveBytes)} peak ${(0,Ez.j)(zz.peakLiveBytes)} unused ${(0,Ez.j)(zz.unusedBytes)} ceiling ${(0,Ez.j)(zz.ceilingBytes)} MiB; grows upFront ${uz(zz.grows.upFront,zz.grownBytes.upFront)} ahead ${uz(zz.grows.ahead,zz.grownBytes.ahead)} inFrame ${uz(zz.grows.onDemandInFrame,zz.grownBytes.onDemandInFrame)} other ${uz(zz.grows.onDemand,zz.grownBytes.onDemand)}; refused reserves ${zz.reservesRefused} allocations ${zz.allocationsRefused}`
    }
  },
  40163: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => tz,
      i: () => Hz,
      l: () => Fz,
      p: () => pz
    });
    var Ez = bz(3475),
      nz = bz(4560),
      iz = bz(40165),
      lz = bz(40169),
      Mz = bz(39979);
    const tz = 395,
      Hz = 2147483648,
      Oz = new Uint8Array(0);
    class pz extends Error {
      constructor() {
        super(...arguments), this.name = "ModelRingError"
      }
    }
    class dz extends Error {
      constructor() {
        super(...arguments), this.name = "ModelPackRefusedError"
      }
    }
    class Fz {
      constructor(zz, uz, bz) {
        var Ez, nz, lz, Mz;
        let tz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        this.files = zz, this.build = uz, this.onFailure = bz, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.MZ = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFile = void 0, this.onWritten = void 0, this.onTaken = void 0, this.onPackFileFailed = void 0, this.refreshes = 0, this.nextSeq = 1, this.fetchFile = null !== (Ez = tz.fetchFile) && void 0 !== Ez ? Ez : zz => (0, iz.h)(zz), this.onWritten = null !== (nz = tz.onWritten) && void 0 !== nz ? nz : null, this.onTaken = null !== (lz = tz.onTaken) && void 0 !== lz ? lz : null, this.onPackFileFailed = null !== (Mz = tz.onPackFileFailed) && void 0 !== Mz ? Mz : null, this.startupLeft = new Set(zz.startup);
        for (const iz of zz.startup) this.request(iz)
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
      drawnUrl(zz) {
        return this.drawn.get(zz)
      }
      request(zz) {
        const uz = this.pending.get(zz);
        if (!0 === (null === uz || void 0 === uz ? void 0 : uz.ask)) return;
        const bz = this.QF(zz, !0);
        bz.recheck = void 0 !== uz;
        const Ez = this.drawn.get(zz);
        if (void 0 !== Ez) return bz.yM = !0, bz.recheck = !0, void this.fetch(zz, bz, Ez);
        this.fetchWanted(zz, bz)
      }
      async refresh() {
        const zz = ++this.refreshes,
          uz = new Set;
        for (const lz of [this.drawn.keys(), this.written.keys(), this.pending.keys(), this.undrawn.values()])
          for (const zz of lz) 0 === (zz & iz.e) && uz.add(zz);
        const bz = [...uz];
        let Ez;
        try {
          Ez = await Promise.all(bz.map((zz => this.wanted(zz))))
        } catch {
          return null
        }
        if (zz !== this.refreshes) return null;
        const nz = {
          resent: 0,
          refetched: 0,
          delivered: bz.filter((zz => this.drawn.has(zz))).length
        };
        return bz.forEach(((zz, uz) => {
          const {
            url: bz,
            inPlaceOf: iz
          } = Ez[uz], lz = this.pending.get(zz);
          if (void 0 !== lz) {
            if (lz.yM || void 0 === lz.url) return void(lz.recheck = !0);
            if (lz.url === bz) return;
            nz.refetched++;
            const uz = this.QF(zz, lz.ask);
            return uz.recheck = lz.recheck, void this.fetch(zz, uz, bz, iz)
          }
          const Mz = this.written.get(zz);
          void 0 === Mz ? this.drawn.get(zz) !== (null !== bz && void 0 !== bz ? bz : void 0) && (nz.resent++, this.fetch(zz, this.QF(zz, !1), bz, iz)) : Mz.url !== (null !== bz && void 0 !== bz ? bz : "") && (Mz.attempt.recheck = !0)
        })), nz
      }
      taken(zz, uz) {
        const bz = new Set,
          Ez = new Set;
        for (const nz of Array.from(uz)) 0 === (nz & Hz) ? bz.add(nz) : Ez.add((nz & ~Hz) >>> 0);
        for (const [nz, iz] of this.written) iz.seq > zz || (this.written.delete(nz), bz.has(iz.seq) ? this.refusedFile(nz, iz) : this.takenFile(nz, iz, !iz.empty && !Ez.has(iz.seq)))
      }
      takenFile(zz, uz, bz) {
        const {
          attempt: Ez
        } = uz;
        if (bz) {
          var nz;
          this.drawn.set(zz, uz.url), this.undrawn.delete(zz), void 0 !== Ez.inPlaceOf ? this.refusedPack.set(zz, Ez.inPlaceOf) : Ez.yM || this.refusedPack.delete(zz), null === (nz = this.onTaken) || void 0 === nz || nz.call(this, zz, !0);
          const bz = this.pending.get(zz);
          if (!0 === (null === bz || void 0 === bz ? void 0 : bz.yM) && bz.url !== uz.url) {
            const bz = this.QF(zz, !0);
            bz.yM = !0, bz.recheck = !0, this.fetch(zz, bz, uz.url)
          }
        } else {
          var iz;
          this.drawn.has(zz) || this.undrawn.add(zz), null === (iz = this.onTaken) || void 0 === iz || iz.call(this, zz, !1)
        }
        Ez.recheck && this.resendIfChanged(zz)
      }
      refusedFile(zz, uz) {
        var bz, Ez;
        if (null === (bz = this.onTaken) || void 0 === bz || bz.call(this, zz, !1), this.refusedPack.set(zz, uz.url), this.pending.has(zz)) return void(null === (Ez = this.onPackFileFailed) || void 0 === Ez || Ez.call(this, zz, Zz(uz.url)));
        const nz = this.QF(zz, uz.attempt.ask);
        nz.recheck = uz.attempt.recheck, this.afterRefusal(zz, nz, uz.url)
      }
      async afterRefusal(zz, uz, bz) {
        var Ez;
        let nz;
        try {
          nz = await this.wanted(zz)
        } catch (iz) {
          return void(this.pending.get(zz) === uz && this.giveUp(zz, uz, bz, iz))
        }
        this.pending.get(zz) === uz && (nz.inPlaceOf !== bz ? uz.ask || (null !== (Ez = nz.url) && void 0 !== Ez ? Ez : void 0) !== this.drawn.get(zz) ? this.fetch(zz, uz, nz.url, nz.inPlaceOf) : this.pending.delete(zz) : this.fallBack(zz, uz, bz, Zz(bz)))
      }
      QF(zz, uz) {
        const bz = {
          url: void 0,
          ask: uz,
          yM: !1,
          recheck: !1,
          inPlaceOf: void 0
        };
        this.pending.set(zz, bz);
        for (let Ez = this.ready.length - 1; Ez >= 0; Ez--) this.ready[Ez].file === zz && this.ready.splice(Ez, 1);
        return bz
      }
      async wanted(zz) {
        const uz = await this.files.url(zz);
        return null !== uz && this.refusedPack.get(zz) === uz ? {
          url: await this.files.shippedUrl(zz),
          inPlaceOf: uz
        } : {
          url: uz,
          inPlaceOf: void 0
        }
      }
      fetchWanted(zz, uz) {
        const bz = this.files.url(zz);
        bz instanceof Promise ? bz.then((bz => {
          this.fetchFound(zz, uz, bz)
        }), (bz => {
          this.pending.get(zz) === uz && this.giveUp(zz, uz, "", bz)
        })) : this.fetchFound(zz, uz, bz)
      }
      fetchFound(zz, uz, bz) {
        null !== bz && this.refusedPack.get(zz) === bz ? Promise.resolve(this.files.shippedUrl(zz)).then((Ez => {
          this.fetch(zz, uz, Ez, bz)
        }), (Ez => {
          this.pending.get(zz) === uz && this.giveUp(zz, uz, bz, Ez)
        })) : this.fetch(zz, uz, bz)
      }
      fetch(zz, uz, bz, Ez) {
        this.pending.get(zz) === uz && (uz.url = bz, uz.inPlaceOf = Ez, null !== bz ? this.load(zz, uz, bz) : this.buildFile(zz, uz, "", Oz))
      }
      load(zz, uz, bz) {
        const Ez = this.MZ.get(zz);
        (null === Ez || void 0 === Ez ? void 0 : Ez.url) !== bz ? this.fetchFile(bz).then((Ez => {
          var nz, iz;
          this.pending.get(zz) === uz && (this.keptTotal += Ez.byteLength - (null !== (nz = null === (iz = this.MZ.get(zz)) || void 0 === iz ? void 0 : iz.glb.byteLength) && void 0 !== nz ? nz : 0), this.MZ.set(zz, {
            url: bz,
            glb: Ez
          }), this.buildFile(zz, uz, bz, Ez))
        }), (Ez => {
          this.pending.get(zz) === uz && this.fallBack(zz, uz, bz, Ez)
        })) : this.buildFile(zz, uz, bz, Ez.glb)
      }
      buildFile(zz, uz, bz, Ez) {
        let nz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const lz = Ez.byteLength > 0 && (0, iz.l)(bz) ? (zz | iz.d) >>> 0 : zz;
        this.queueRecord(zz, uz, bz, Ez, this.build(lz, Ez), nz)
      }
      queueRecord(zz, uz, bz, Ez, iz, Mz) {
        iz.then((iz => {
          if (this.pending.get(zz) !== uz) return;
          if (nz.p + (0, nz.ie)(iz.byteLength) > nz.Bc) return void this.ringRefused(zz, uz, bz, new pz(`${Rz(bz)}'s record is ${iz.byteLength-lz.b} bytes, past the cmd ring's ${nz.Bc}`), Mz);
          const tz = {
            file: zz,
            url: bz,
            payload: iz,
            glb: Ez,
            attempt: uz
          };
          Mz ? this.ready.unshift(tz) : this.ready.push(tz)
        }))
      }
      async fallBack(zz, uz, bz, Ez) {
        var nz;
        let iz = null,
          lz = Ez;
        try {
          iz = await this.files.shippedUrl(zz)
        } catch (Mz) {
          lz = Mz
        }
        this.pending.get(zz) === uz && (null !== iz && iz !== bz ? (null === (nz = this.onPackFileFailed) || void 0 === nz || nz.call(this, zz, Ez), uz.ask || this.drawn.get(zz) !== iz ? (uz.url = iz, uz.inPlaceOf = bz, this.load(zz, uz, iz)) : this.pending.delete(zz)) : this.giveUp(zz, uz, bz, lz))
      }
      ringRefused(zz, uz, bz, Ez) {
        let nz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        (0, iz.l)(bz) ? this.fallBack(zz, uz, bz, Ez): this.giveUp(zz, uz, bz, Ez, nz)
      }
      giveUp(zz, uz, bz, nz) {
        let iz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        this.onFailure({
          file: zz,
          url: Rz(bz),
          error: nz,
          startup: this.startupLeft.has(zz)
        }), uz.ask || !this.drawn.has(zz) ? (0, Ez.J)(nz) ? this.queueRecord(zz, uz, bz, Oz, Promise.resolve((0, lz.k)(zz, (0, Mz.e)(nz))), iz) : this.buildFile(zz, uz, bz, Oz, iz) : this.pending.delete(zz)
      }
      async resendIfChanged(zz) {
        var uz;
        if (0 !== (zz & iz.e)) return;
        let bz;
        try {
          bz = await this.wanted(zz)
        } catch {
          return
        }(null !== (uz = bz.url) && void 0 !== uz ? uz : void 0) === this.drawn.get(zz) || this.pending.has(zz) || this.written.has(zz) || this.fetch(zz, this.QF(zz, !1), bz.url, bz.inPlaceOf)
      }
      drain(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null === zz) return;
        let bz = 0,
          Ez = 0;
        for (; Ez < this.ready.length && bz < 262144;) {
          const Mz = this.ready[Ez];
          if (this.written.has(Mz.file)) {
            Ez++;
            continue
          }
          const Oz = this.nextSeq;
          new DataView(Mz.payload.buffer, Mz.payload.byteOffset, Mz.payload.byteLength).setUint32(lz.c, Oz, !0);
          const dz = Mz.attempt.yM && Mz.glb.byteLength > 0 && this.drawn.get(Mz.file) === Mz.url;
          if (zz(tz, dz ? 1 : 0, Mz.payload)) {
            if (this.nextSeq = Oz >= Hz - 1 ? 1 : Oz + 1, this.ready.splice(Ez, 1), bz += Mz.payload.byteLength, this.pending.delete(Mz.file), this.startupLeft.delete(Mz.file), this.written.set(Mz.file, {
                seq: Oz,
                url: Mz.url,
                empty: 0 === Mz.glb.byteLength,
                attempt: Mz.attempt
              }), Mz.glb.byteLength > 0) try {
              var nz;
              null === (nz = this.onWritten) || void 0 === nz || nz.call(this, Mz.file, Mz.glb)
            } catch (iz) {
              console.warn("ModelFeed: reading the file's images failed", iz)
            }
          } else {
            if (null === uz || 0 === Mz.glb.byteLength || uz(Mz.payload.byteLength)) return;
            this.ready.splice(Ez, 1);
            const zz = new pz(`${Rz(Mz.url)}'s record is ${Mz.payload.byteLength-lz.b} bytes, more than the cmd ring can grow to take`);
            this.ringRefused(Mz.file, Mz.attempt, Mz.url, zz, !0)
          }
        }
      }
    }

    function Zz(zz) {
      return new dz(`presentation refused ${Rz(zz)}`)
    }

    function Rz(zz) {
      return zz.startsWith("data:") ? `${zz.slice(0,Math.min(Math.max(zz.indexOf(","),5),64))},...` : zz
    }
  },
  40165: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => lz,
      e: () => iz,
      h: () => Oz,
      l: () => Mz,
      m: () => Hz,
      q: () => tz
    });
    var Ez = bz(3475),
      nz = bz(2966);
    const iz = 2147483648,
      lz = 1073741824;

    function Mz(zz) {
      return zz.startsWith("data:")
    }

    function tz(zz) {
      let {
        onTableFailed: uz,
        packUrl: bz
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Ez = Hz();
      Ez.catch((zz => {
        null === uz || void 0 === uz || uz(zz)
      }));
      const nz = async uz => (await Ez).fileUrl((uz & ~iz) >>> 0, zz);
      return {
        startup: [],
        url: async zz => {
          if (bz && 0 === (zz & iz)) {
            const uz = await Ez,
              nz = uz.filePackName(zz),
              iz = null === nz || "lifeform" === uz.fileSource(zz) ? null : bz(nz);
            if (null !== iz) return iz
          }
          return nz(zz)
        },
        shippedUrl: nz
      }
    }

    function Hz() {
      return bz.e(41).then((() => bz(42659)))
    }
    async function Oz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return zz.startsWith("data:") ? (0, nz.d)(zz.slice(zz.indexOf(",") + 1), uz) : (0, Ez.z)(zz, {
        spare: uz
      })
    }
  },
  40169: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Hz,
      c: () => Oz,
      g: () => Fz,
      h: () => Kz,
      k: () => Zz,
      l: () => dz,
      p: () => Rz
    });
    const Ez = 826427981,
      nz = 1,
      iz = 2,
      lz = 44,
      Mz = 46,
      tz = 58,
      Hz = 8,
      Oz = 4;

    function pz(zz, uz, bz) {
      const nz = (new TextEncoder).encode(bz),
        iz = Hz + 4 * (uz.length + 2),
        lz = new Uint8Array(iz + (nz.byteLength + 3 & -4)),
        Mz = new DataView(lz.buffer);
      return Mz.setUint32(0, zz, !0), Mz.setUint32(Hz, Ez, !0), uz.forEach(((zz, uz) => {
        Mz.setUint32(Hz + 4 * (uz + 1), zz, !0)
      })), Mz.setUint32(iz - 4, nz.byteLength, !0), lz.set(nz, iz), lz
    }

    function dz(zz, uz) {
      return pz(zz, [iz], uz)
    }

    function Fz(zz, uz) {
      return pz(zz, [nz, Mz], uz)
    }

    function Zz(zz, uz) {
      return pz(zz, [nz, tz], uz)
    }

    function Rz(zz, uz) {
      return pz(zz, [nz, lz], uz)
    }

    function Kz(zz) {
      const uz = Hz;
      if (zz.byteLength < uz + 12) return !1;
      const bz = new DataView(zz.buffer, zz.byteOffset, zz.byteLength);
      return bz.getUint32(uz, !0) === Ez && bz.getUint32(uz + 4, !0) === nz && bz.getUint32(uz + 8, !0) === lz
    }
  },
  40153: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Xz,
      e: () => wz,
      f: () => oz,
      g: () => rz,
      j: () => Nz,
      m: () => Rz
    });
    var Ez = bz(4564),
      nz = bz(40017);
    const iz = 18,
      lz = 19,
      Mz = 20,
      tz = {
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
        [iz]: "retry linked",
        [lz]: "fallback linked",
        [Mz]: "fallback failed",
        32: "compile validation",
        33: "compile internal",
        34: "compile timeout"
      };

    function Hz(zz, uz) {
      return zz === iz ? "program retry" : zz === lz || zz === Mz ? `program fallback ${uz}` : "program"
    }
    const Oz = {
        1: "renderer",
        2: "sky",
        3: "meshes",
        4: "terrain"
      },
      pz = {
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
      dz = {
        1: "mesh undecodable",
        2: "part refused",
        3: "terrain ids full",
        4: "unknown terrain id",
        5: "buffer failed"
      },
      Fz = {
        1: "view waited drained",
        2: "view waited capped",
        3: "none after view",
        4: "some after view",
        5: "no wait no clock",
        6: "no wait parallel links",
        7: "view shown unheld"
      },
      Zz = {
        1280: "invalid enum",
        1281: "invalid value",
        1282: "invalid operation",
        1285: "out of memory",
        1286: "invalid framebuffer operation",
        37442: "context lost"
      };

    function Rz(zz) {
      return String(zz).replace(/\d/g, (zz => String.fromCharCode(97 + Number(zz))))
    }

    function Kz(zz, uz) {
      var bz;
      return null !== (bz = zz[uz]) && void 0 !== bz ? bz : Rz(uz)
    }

    function wz() {
      return Rz((0, nz.e)())
    }

    function Xz(zz, uz) {
      switch (zz) {
        case Ez.g.RenderSceneRowNotDrawn:
          return {
            words: ` ${Kz(pz,uz)}`, instance: String(uz), group: String(zz)
          };
        case Ez.g.RenderChunkMeshNotDrawn: {
          const bz = 0 === (128 & uz) ? "" : " shortage",
            Ez = uz >>> 8;
          return {
            words: ` ${Kz(dz,127&uz)}${bz}${0===Ez?"":` kind ${Rz(Ez)}`}`,
            instance: String(uz),
            group: String(zz)
          }
        }
        case Ez.g.RenderInternal: {
          const bz = Kz(Oz, 255 & uz),
            Ez = uz >>> 8 & 255;
          if (0 === Ez) return {
            words: ` ${bz}`,
            instance: String(uz),
            group: String(zz)
          };
          const nz = Kz(tz, Ez),
            iz = uz >>> 16;
          return {
            words: ` ${bz} ${nz} program ${Rz(iz)}`,
            instance: `${bz} ${nz}`,
            group: Hz(Ez, bz),
            gpuDetails: {
              programFailure: nz,
              program: String(iz)
            }
          }
        }
        case Ez.g.RenderSerialLinks: {
          const bz = Kz(Fz, uz);
          return {
            words: ` ${bz}`,
            instance: String(uz),
            group: String(zz),
            gpuDetails: {
              serialLinks: bz
            }
          }
        }
        case Ez.g.RenderGlErrorAfterRestore: {
          const bz = Kz(Zz, 65535 & uz),
            Ez = uz >>> 16,
            nz = 65535 !== Ez;
          return {
            words: ` ${bz}${nz?` program ${Rz(Ez)}`:""}`,
            instance: String(uz),
            group: String(zz),
            gpuDetails: nz ? {
              glError: bz,
              program: String(Ez)
            } : {
              glError: bz
            }
          }
        }
        default:
          return null
      }
    }
    const fz = 2,
      sz = new Map;

    function rz(zz) {
      let {
        group: uz,
        instance: bz
      } = zz, Ez = sz.get(uz);
      return void 0 === Ez && (Ez = [], sz.set(uz, Ez)), !Ez.includes(bz) && (Ez.length >= fz || (Ez.push(bz), !1))
    }

    function oz() {
      return sz.size > 0
    }

    function Nz() {
      sz.clear()
    }
  },
  40063: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => wz,
      f: () => Xz,
      g: () => Kz,
      j: () => oz
    });
    var Ez = bz(6362),
      nz = bz(22),
      iz = bz(4097),
      lz = bz(4564),
      Mz = bz(6359),
      tz = bz(40071);

    function Hz(zz, uz) {
      const bz = (0, Mz.c)(uz.variants);
      return zz.setShaderPack(bz.variantFlags, bz.hooks, bz.moduleCodes, (0, tz.y)(uz.layers), tz.m[uz.Nl], uz.keepCircleShadows)
    }
    const Oz = 0,
      pz = 1,
      dz = 2,
      Fz = "shaderPack:failedToCompile",
      Zz = new Set(["no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "start_no_adapter"]),
      Rz = new Set(["not_requested", "off_after_loss", "gpu_class_webgl"]);

    function Kz(zz, uz) {
      var bz;
      const Ez = null !== (bz = null === zz || void 0 === zz ? void 0 : zz.reason) && void 0 !== bz ? bz : "none";
      return Zz.has(Ez) ? {
        messageKey: uz ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
        noAdapter: !0
      } : "not_requested" === Ez && "override" === (null === zz || void 0 === zz ? void 0 : zz.source) ? {
        messageKey: "shaderPack:failedRendererOverride",
        noAdapter: !1
      } : {
        messageKey: Rz.has(Ez) ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
        noAdapter: !1
      }
    }
    const wz = {
      messageKey: "shaderPack:failedDeviceGraphics",
      noAdapter: !1
    };
    class Xz extends Error {
      constructor(zz) {
        super(`the shader pack can't run in this game: ${zz}`), this.messageKey = zz, this.name = "ShaderPackJoinError"
      }
    }
    const fz = "strict";
    class sz {
      constructor(zz) {
        this.deps = zz, this.pagePack = void 0, this.loaded = null, this.Nl = fz, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1, this.pagePack = zz.load().catch((uz => (zz.warn("the shader pack could not load: the game draws without it", uz), {
          status: "none"
        }))).then((zz => (this.loaded = zz, "active" === zz.status && (this.handOverToPreviews(zz), null !== zz.harnessPolicy && (this.Nl = zz.harnessPolicy, this.handOver())), zz)))
      }
      async join(zz) {
        this.leave();
        const uz = this.game,
          [bz, nz] = await Promise.all([this.pagePack, this.policyOf(zz)]);
        if (uz !== this.game || "none" === bz.status) return null;
        const iz = "active" === bz.status ? bz.pack.variants : bz.variants,
          lz = (0, Ez.j)(iz, nz);
        if (lz && "active" === bz.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
        if (lz) {
          const zz = this.cantRun(bz, nz);
          if (null !== zz) return zz
        } else if ("blocked" === bz.status || null === this.deps.core) return null;
        return this.Nl = nz, this.handOver(), lz && this.refused ? Fz : (this.joined = !0, this.offInThisGame = !lz, null)
      }
      async replay(zz) {
        const uz = await this.join(zz);
        null === uz ? this.playable() : this.deps.failInGame(uz)
      }
      cantRun(zz, uz) {
        const {
          core: bz,
          noWebGpu: Ez
        } = this.deps;
        if ("blocked" === zz.status) {
          return "shaderPack:failedUnchecked" === zz.messageKey && null === bz && Ez.noAdapter ? Ez.messageKey : zz.messageKey
        }
        return this.refused || this.failedPolicies.has(uz) ? Fz : null
      }
      runsInJoinedGame() {
        return this.joined && !this.offInThisGame
      }
      reachInJoinedGame() {
        var zz;
        return this.runsInJoinedGame() && "active" === (null === (zz = this.loaded) || void 0 === zz ? void 0 : zz.status) ? function(zz, uz) {
          const bz = zz.filter((zz => (0, Ez.j)([zz], uz))),
            nz = zz => bz.some((uz => uz[zz]));
          return {
            sceneDepth: nz("sceneDepth"),
            sunShadow: nz("sunShadow"),
            airShadow: nz("airShadow")
          }
        }(this.loaded.pack.variants, this.Nl) : null
      }
      couldntRunInJoinedGame() {
        return this.couldntRun
      }
      playable() {
        this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(Fz) : (null !== this.couldntRun ? this.notify(iz.b, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.Nl) && this.notifyModelFallback()))
      }
      leave() {
        this.game++, this.joined = !1, this.playing = !1, this.failedWhileJoining = !1, this.offInThisGame = !1, this.couldntRun = null, this.modelsNotified = !1
      }
      coreErrors(zz) {
        for (const {
            code: uz,
            detail: bz
          }
          of zz)
          if (uz === lz.g.RenderShaderPackNotRun) switch (255 & bz) {
            case Oz:
              this.refused = !0, this.failed();
              break;
            case pz:
              this.failedPolicies.add(this.Nl), this.failed();
              break;
            case dz:
              this.failedModelPolicies.add(this.Nl), this.playing && this.notifyModelFallback()
          }
      }
      failed() {
        this.joined && !this.offInThisGame && (this.playing ? this.fail(Fz) : this.failedWhileJoining = !0)
      }
      fail(zz) {
        this.leave(), this.deps.failInGame(zz)
      }
      notifyModelFallback() {
        this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
      }
      notify(zz, uz) {
        const bz = this.game;
        this.deps.notify(zz, (() => bz === this.game && this.joined), uz)
      }
      handOver() {
        var zz;
        const {
          core: uz
        } = this.deps;
        null !== uz && "active" === (null === (zz = this.loaded) || void 0 === zz ? void 0 : zz.status) && (Hz(uz, {
          ...this.loaded.pack,
          Nl: this.Nl
        }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
      }
      handOverToPreviews(zz) {
        let {
          pack: uz,
          harnessPolicy: bz
        } = zz;
        const {
          previews: Ez
        } = this.deps;
        null !== Ez && Hz(Ez, {
          ...uz,
          Nl: null !== bz && void 0 !== bz ? bz : fz
        })
      }
      policyOf(zz) {
        return this.deps.policyOf(zz).catch((zz => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", zz), fz)))
      }
    }
    const rz = "wasmShaderPackNotice";

    function oz(zz, uz, bz, Ez) {
      return nz.k.subscribe(rz, (zz => {
        let {
          translationKey: uz,
          stillCurrent: bz,
          reasonKey: Ez
        } = zz;
        bz() && nz.k.sK("chat", (0, iz.h)(uz, Ez))
      })), new sz({
        load: Nz,
        policyOf: vz,
        core: zz,
        previews: uz,
        noWebGpu: bz,
        notify: (zz, uz, bz) => {
          const Ez = {
            translationKey: zz,
            stillCurrent: uz,
            reasonKey: bz
          };
          nz.k.sK(rz, Ez, !0)
        },
        failInGame: zz => {
          nz.k.sK(iz.e, zz)
        },
        warn: Ez
      })
    }
    async function Nz() {
      const [{
        shaderPackPage: zz,
        harnessShaderPackMode: uz
      }, {
        shaderPackTextures: Ez
      }] = await Promise.all([bz.e(129).then((() => bz(38566))), bz.e(130).then((() => bz(6352)))]), nz = await zz.load();
      return "active" !== nz.status ? nz : {
        status: "active",
        pack: {
          variants: nz.pack.variants,
          layers: Ez().layers,
          keepCircleShadows: nz.pack.keepCircleShadows
        },
        harnessPolicy: uz()
      }
    }
    async function vz(zz) {
      var uz;
      const [{
        harnessShaderPackMode: Ez
      }, {
        getShaderPackPolicy: nz
      }] = await Promise.all([bz.e(129).then((() => bz(38566))), bz.e(89).then((() => bz(40479)))]);
      return null !== (uz = Ez()) && void 0 !== uz ? uz : nz(zz)
    }
  },
  40181: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Mz,
      e: () => Kz,
      g: () => tz,
      j: () => Hz,
      n: () => Oz,
      r: () => dz
    });
    var Ez = bz(40187),
      nz = bz(40189);
    const iz = "atlas:",
      lz = 3e4;
    class Mz extends Error {
      constructor(zz, uz) {
        super(`fetching ${zz} answered HTTP ${uz}`), this.url = zz, this.status = uz, this.name = "TerrainTextureFetchError"
      }
    }

    function tz(zz) {
      if (!zz.startsWith(iz)) return null;
      const uz = Number(zz.slice(iz.length));
      return Number.isInteger(uz) && uz >= 0 ? uz : null
    }
    async function Hz() {
      const zz = await bz.e(201).then((() => bz(33750)));
      return {
        atlasSheets: zz.blockAtlasUrls,
        texture: uz => {
          var bz, Ez, iz;
          return null !== (bz = null !== (Ez = null !== (iz = zz.animatedBlockTextures[uz]) && void 0 !== iz ? iz : zz.rotatedBlockTextures[uz]) && void 0 !== Ez ? Ez : nz.c[uz]) && void 0 !== bz ? bz : null
        }
      }
    }
    async function Oz(zz) {
      const uz = new AbortController,
        bz = setTimeout((() => {
          uz.abort(new DOMException(`${zz} took over ${lz} ms`, "TimeoutError"))
        }), lz);
      let Ez;
      try {
        const bz = await fetch(zz, {
          signal: uz.signal
        });
        if (!bz.ok) throw new Mz(zz, bz.status);
        Ez = await bz.blob()
      } finally {
        clearTimeout(bz)
      }
      const nz = await createImageBitmap(Ez, {
        premultiplyAlpha: "none",
        colorSpaceConversion: "none"
      });
      try {
        return dz(nz)
      } finally {
        nz.close()
      }
    }
    const pz = 8192;

    function dz(zz) {
      const {
        width: uz,
        height: bz
      } = zz, nz = Math.max(1, Math.min(bz, pz)), iz = (0, Ez.e)(uz, nz, {
        willReadFrequently: !0
      });
      if (!iz) throw new Error("no 2D context to read the texture back");
      iz.globalCompositeOperation = "copy";
      const lz = new Uint8Array(uz * bz * 4);
      for (let Ez = 0; Ez < bz; Ez += nz) {
        const Mz = Math.min(nz, bz - Ez);
        iz.drawImage(zz, 0, Ez, uz, Mz, 0, 0, uz, Mz), lz.set(iz.getImageData(0, 0, uz, Mz).data, Ez * uz * 4)
      }
      return {
        width: uz,
        height: bz,
        pixels: lz
      }
    }
    async function Fz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Oz;
      const Ez = [],
        nz = await Promise.all(zz.map((async zz => {
          var nz, lz;
          const Mz = null !== (nz = null === (lz = uz.decoded) || void 0 === lz ? void 0 : lz.call(uz, zz)) && void 0 !== nz ? nz : null,
            Hz = null === Mz ? function(zz, uz) {
              if (zz.startsWith(iz)) {
                var bz;
                const Ez = tz(zz);
                return null === Ez ? null : null !== (bz = uz.atlasSheets[Ez]) && void 0 !== bz ? bz : null
              }
              return uz.texture(zz)
            }(zz, uz) : null,
            Oz = null !== Mz && void 0 !== Mz ? Mz : null === Hz ? null : bz(Hz);
          if (null === Oz) return Ez.push({
            name: zz,
            url: Hz,
            error: new Error(`no URL for terrain texture ${zz}`)
          }), null;
          try {
            const uz = await Oz;
            if (uz.pixels.byteLength !== uz.width * uz.height * 4) throw new Error(`decoded ${uz.pixels.byteLength} bytes for ${uz.width}x${uz.height} texels`);
            return {
              name: zz,
              texture: uz
            }
          } catch (pz) {
            return Ez.push({
              name: zz,
              url: Hz,
              error: pz
            }), null
          }
        }))),
        lz = nz.filter((zz => null !== zz)),
        Mz = new Uint32Array(2 * lz.length);
      lz.forEach(((zz, uz) => {
        let {
          texture: bz
        } = zz;
        Mz[2 * uz] = bz.width, Mz[2 * uz + 1] = bz.height
      }));
      return {
        handOver: {
          names: lz.map((zz => {
            let {
              name: uz
            } = zz;
            return uz
          })),
          textures: lz.map((zz => {
            let {
              texture: uz
            } = zz;
            return uz.pixels
          })),
          sizes: Mz
        },
        failures: Ez
      }
    }
    const Zz = [2e3, 1e4, 3e4, 6e4, 12e4];

    function Rz() {}
    class Kz {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zz,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1048576;
        this.core = zz, this.retryMs = uz, this.keepBelow = bz, this.started = 0, this.landed = 0, this.current = null, this.restoring = null
      }
      async swap(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Hz,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Ez = ++this.started,
          nz = {
            decode: bz.decode,
            wholeAtlas: bz.wholeAtlas
          };
        return this.loadAndHandOver(uz, nz, zz, (() => {
          var zz;
          return Ez < this.landed || !1 === (null === (zz = bz.wanted) || void 0 === zz ? void 0 : zz.call(bz))
        }), {
          onTaken: (zz, bz) => {
            this.landed = Ez, this.current = {
              mine: Ez,
              sources: uz,
              load: nz,
              MZ: zz,
              failed: bz
            }
          }
        })
      }
      restore(zz) {
        var uz;
        const bz = this.current;
        if (null === bz) return Promise.resolve(null);
        if ((null === (uz = this.restoring) || void 0 === uz ? void 0 : uz.mine) === bz.mine) return this.restoring.done;
        const Ez = {
          mine: bz.mine,
          done: this.restoreLanded(bz, zz).finally((() => {
            this.restoring === Ez && (this.restoring = null)
          }))
        };
        return this.restoring = Ez, Ez.done
      }
      async restoreLanded(zz, uz) {
        const bz = () => this.landed !== zz.mine,
          {
            MZ: Ez
          } = zz;
        if (null !== Ez) return this.stopped() ? null : this.core.setTerrainTextures(Ez.names, Ez.textures, Ez.sizes);
        let nz = uz;
        for (let iz = 0;; iz++) {
          const uz = this.retryMs.at(iz),
            Ez = {
              allOrNothingExcept: void 0 === uz ? void 0 : zz.failed
            },
            lz = await this.loadAndHandOver(zz.sources, zz.load, nz, bz, Ez);
          if (!1 !== lz || void 0 === uz || this.stopped()) return lz;
          if (nz = Rz, await new Promise((zz => {
              setTimeout(zz, uz)
            })), bz()) return null
        }
      }
      stopped() {
        return !0 === this.core.isStopped
      }
      async loadAndHandOver(zz, uz, bz, Ez) {
        let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.stopped()) return null;
        const iz = this.core.terrainTextureNames();
        var lz;
        if (0 === iz.length) return null === (lz = nz.onTaken) || void 0 === lz || lz.call(nz, null, new Set), !0;
        let Mz, Hz;
        try {
          Mz = await zz(), Hz = await Fz(iz, Mz, uz.decode)
        } catch (Kz) {
          return Ez() ? null : (bz({
            name: null,
            url: null,
            error: Kz
          }), !1)
        }
        if (Ez() || this.stopped()) return null;
        for (const tz of Hz.failures) bz(tz);
        const Oz = nz.allOrNothingExcept;
        if (void 0 !== Oz && Hz.failures.some((zz => {
            let {
              name: uz
            } = zz;
            return null === uz || !Oz.has(uz)
          })) || !0 === uz.wholeAtlas && Hz.failures.some((zz => {
            let {
              name: uz
            } = zz;
            return null === uz || null !== tz(uz)
          }))) return !1;
        const {
          handOver: pz
        } = Hz, dz = function(zz) {
          return zz.textures.reduce(((zz, uz) => zz + uz.byteLength), 0)
        }(pz) < this.keepBelow, Zz = this.core.setTerrainTextures(pz.names, pz.textures, pz.sizes, dz ? void 0 : () => {
          !async function(zz, uz) {
            await uz;
            for (const {
                buffer: Ez
              }
              of zz) {
              const zz = Ez;
              var bz;
              if (!zz.detached) null === (bz = zz.transfer) || void 0 === bz || bz.call(zz, 0)
            }
          }(pz.textures, Mz.heldUntil)
        });
        if (Zz) {
          var Rz;
          const zz = new Set(Hz.failures.flatMap((zz => {
            let {
              name: uz
            } = zz;
            return null === uz ? [] : [uz]
          })));
          null === (Rz = nz.onTaken) || void 0 === Rz || Rz.call(nz, dz ? pz : null, zz)
        }
        return Zz
      }
    }
  },
  36282: (zz, uz, bz) => {
    function Ez(zz) {
      return "fetch" === zz || "timeout" === zz || "integrity" === zz ? "download" : "browser"
    }
    bz.d(uz, {
      e: () => nz,
      i: () => lz,
      l: () => tz,
      m: () => Mz,
      q: () => Ez,
      s: () => iz
    });
    const nz = "https://discord.gg/playbloxd";

    function iz(zz) {
      return "download" === zz ? {
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

    function lz(zz, uz) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: uz ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: zz.code
        },
        discordLink: uz,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function Mz() {
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

    function tz(zz, uz, bz) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: bz ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: zz.reason
        },
        discordLink: null === zz.name,
        confirm: uz ? "general:reconnect" : zz.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  6359: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => sz,
      e: () => rz,
      i: () => Xz,
      m: () => wz
    });
    var Ez = bz(6362);
    const nz = 6,
      iz = 3,
      lz = 1,
      Mz = 2,
      tz = 4,
      Hz = 8,
      Oz = 16,
      pz = 32,
      dz = 64,
      Fz = 128,
      Zz = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Rz(zz) {
      if (!zz) return 0;
      const uz = Zz.indexOf(zz);
      if (uz <= 0) throw new Error(`"${zz}" is not a shader pack hook function`);
      return uz
    }

    function Kz(zz) {
      if (0 === zz) return null;
      const uz = Zz[zz];
      if (void 0 === uz) throw new Error(`${zz} is not a shader pack hook function id`);
      return uz
    }

    function wz(zz) {
      const uz = Ez.e.length;
      return {
        strict: zz >= uz,
        program: Ez.e[zz % uz]
      }
    }

    function Xz(zz) {
      return Number(zz.strict) * Ez.e.length + Ez.e.indexOf(zz.program)
    }

    function fz(zz) {
      return "" === zz ? [] : zz.split(" ")
    }

    function sz(zz) {
      const uz = {
        variantFlags: new Uint8Array(nz),
        hooks: new Uint8Array(nz * iz),
        moduleCodes: Array(nz).fill(""),
        reads: Array(2 * nz).fill("")
      };
      for (const bz of zz) {
        const zz = Xz(bz.key),
          Ez = (zz, uz) => null === bz.hooks.surface || bz.reads.fragment.includes(zz) ? 0 : uz;
        uz.variantFlags[zz] = (bz.sceneDepth ? lz : 0) | (bz.movesVertices ? Mz : 0) | (bz.sunShadow ? tz : 0) | (bz.airShadow ? Hz : 0) | (bz.discards ? Oz : 0) | Ez("localPosition", pz) | Ez("enchantSpeed", dz) | Ez("enchantTier", Fz), uz.hooks[zz * iz] = Rz(bz.hooks.vertex), uz.hooks[zz * iz + 1] = Rz(bz.hooks.surface), uz.hooks[zz * iz + 2] = Rz(bz.hooks.light), uz.moduleCodes[zz] = bz.moduleCode, uz.reads[2 * zz] = bz.reads.vertex.join(" "), uz.reads[2 * zz + 1] = bz.reads.fragment.join(" ")
      }
      return uz
    }

    function rz(zz) {
      const {
        hooks: uz,
        moduleCodes: bz,
        reads: Ez
      } = zz;
      return Array.from(zz.variantFlags, ((zz, nz) => {
        const pz = nz * iz;
        return {
          key: wz(nz),
          hooks: {
            vertex: Kz(uz[pz]),
            surface: Kz(uz[pz + 1]),
            light: Kz(uz[pz + 2])
          },
          moduleCode: bz[nz],
          sceneDepth: 0 !== (zz & lz),
          sunShadow: 0 !== (zz & tz),
          airShadow: 0 !== (zz & Hz),
          movesVertices: 0 !== (zz & Mz),
          discards: 0 !== (zz & Oz),
          reads: {
            vertex: fz(Ez[2 * nz]),
            fragment: fz(Ez[2 * nz + 1])
          }
        }
      }))
    }
  },
  40071: (zz, uz, bz) => {
    bz.d(uz, {
      A: () => Fz,
      B: () => Zz,
      c: () => nz,
      g: () => Ez,
      h: () => dz,
      j: () => Oz,
      m: () => Kz,
      o: () => iz,
      q: () => Mz,
      t: () => tz,
      w: () => lz,
      y: () => Rz
    });
    const Ez = 3,
      nz = 0,
      iz = 1,
      lz = 2,
      Mz = {
        uniform: 3,
        nF: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      tz = 10,
      Hz = "BloxdPackInputs",
      Oz = "bloxdPackInputs",
      pz = [{
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
      dz = 80;

    function Fz() {
      const zz = pz.map((zz => {
        let {
          name: uz,
          type: bz
        } = zz;
        return `    ${uz}: ${bz},\n`
      })).join("");
      return `struct ${Hz} {\n${zz}}\n@group(${Ez}) @binding(${nz}) var<uniform> ${Oz}: ${Hz};\n`
    }

    function Zz(zz, uz) {
      const bz = new DataView(zz, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, dz),
        [Ez, nz, iz, lz, Mz, tz] = pz;
      bz.setFloat32(Ez.offset, uz.seconds, !0), bz.setUint32(nz.offset, uz.lit ? 1 : 0, !0);
      for (let Hz = 0; Hz < 3; Hz++) bz.setInt32(iz.offset + 4 * Hz, uz.renderOffset[Hz], !0), bz.setFloat32(lz.offset + 4 * Hz, uz.k_[Hz], !0), bz.setFloat32(Mz.offset + 4 * Hz, uz.eyePosition[Hz], !0), bz.setFloat32(tz.offset + 4 * Hz, uz.shadowDirection[Hz], !0)
    }

    function Rz(zz) {
      const uz = new Uint32Array(Math.max(1, zz.length));
      return zz.forEach(((zz, bz) => {
        let {
          id: Ez,
          rotation: nz
        } = zz;
        uz[bz] = 65535 & Ez | (3 & nz) << 16
      })), uz
    }
    const Kz = {
      off: 0,
      strict: 1,
      allow: 2
    }
  },
  6362: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez,
      i: () => lz,
      j: () => Mz,
      m: () => nz,
      p: () => iz
    });
    const Ez = ["terrain", "liquid", "model"];

    function nz() {
      const zz = [];
      for (const uz of [!1, !0])
        for (const bz of Ez) zz.push({
          strict: uz,
          program: bz
        });
      return zz
    }

    function iz(zz) {
      return `${zz.strict?"strict":"allow"}.${zz.program}`
    }

    function lz(zz) {
      return !zz.hooks.vertex && !zz.hooks.surface && !zz.hooks.light
    }

    function Mz(zz, uz) {
      return "off" !== uz && (null === zz || zz.some((zz => zz.key.strict === ("strict" === uz) && !lz(zz))))
    }
  },
  40111: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez,
      e: () => iz,
      i: () => tz,
      l: () => lz,
      o: () => nz
    });
    const Ez = /^alloc_failed (\d+) bytes$/;

    function nz(zz, uz) {
      return iz(zz, uz) ? `trap=alloc_failed ${uz} bytes` : `trap=${zz}`
    }

    function iz(zz, uz) {
      return "unreachable" === zz && uz > 0
    }

    function lz(zz, uz, bz) {
      const Ez = function(zz) {
        return zz instanceof WebAssembly.RuntimeError ? /unreachable/i.test(zz.message) ? "unreachable" : /out of bounds/i.test(zz.message) ? "out_of_bounds" : "runtime_error" : (zz instanceof RangeError || zz instanceof Error && "InternalError" === zz.name) && /call stack|recursion/i.test(zz.message) ? "stack_overflow" : "js_error"
      }(zz);
      if ("unreachable" !== Ez) return {
        kind: Ez,
        panic: null,
        refusedBytes: 0
      };
      const nz = uz(),
        iz = bz();
      return {
        kind: Ez,
        panic: iz > 0 ? null : nz,
        refusedBytes: iz
      }
    }
    const Mz = 300;

    function tz(zz) {
      return zz.replace(/\s*\n\s*/g, " / ").slice(0, Mz)
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);