export const id = 61;
export const ids = [61];
export const modules = {
  34848: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      ReplayPostHog: () => kr
    });
    var OM = iM(632),
      SM = iM(5479),
      jM = iM(34852),
      aM = iM(34833);
    const PM = new Set(["partycode", "lobby", "vm", "invite", "invitecode", "code", "token", "access_token", "id_token", "refresh_token", "auth", "key", "state", "ticket", "jointicket", "secret", "password", "sig", "signature"]),
      nM = new Set(["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "bfcid", "irclid", "_kx"]),
      QM = "redacted",
      zM = /([?&#])([^=&#?\s"']+)=([^&#?\s"'<>\\]*)/g,
      LM = /(\/play\/[^/?#\s"'<>\\]+\/)[^/?#\s"'<>\\]+/gi,
      mM = /\/play\//i,
      HM = /lobby|party/i;

    function hM(MM) {
      try {
        return decodeURIComponent(MM)
      } catch {
        return null
      }
    }

    function JM(MM) {
      const rM = MM.includes("%") ? hM(MM) : null;
      if (null === rM || rM === MM) return MM;
      let iM = dM(`?${rM}`).slice(1);
      return iM === rM && (iM = JM(rM)), iM === rM ? MM : encodeURIComponent(iM)
    }

    function dM(MM) {
      return MM.includes("=") || mM.test(MM) ? MM.replace(zM, ((MM, rM, iM, OM) => {
        var SM;
        const jM = (null !== (SM = hM(iM)) && void 0 !== SM ? SM : iM).toLowerCase();
        if (PM.has(jM) || nM.has(jM) && "" !== OM) return `${rM}${iM}=${QM}`;
        const aM = JM(OM);
        return aM === OM ? MM : `${rM}${iM}=${aM}`
      })).replace(LM, `$1${QM}`) : MM
    }
    const yM = new Set(["href", "src", "srcset", "action", "formaction", "poster", "xlink:href"]);

    function lM(MM, rM) {
      return yM.has(MM.toLowerCase()) ? dM(rM) : rM
    }

    function EM(MM) {
      return HM.test(MM) ? QM : dM(MM)
    }

    function UM(MM) {
      if (MM)
        for (const [rM, iM] of Object.entries(MM)) "string" === typeof iM && (MM[rM] = dM(iM))
    }

    function GM(MM) {
      var rM;
      Array.isArray(MM.payload) && (MM.payload = (rM = MM.payload).some((MM => "string" === typeof MM && HM.test(MM))) ? [JSON.stringify(QM)] : rM.map((MM => "string" === typeof MM ? dM(MM) : MM))), Array.isArray(MM.trace) && (MM.trace = MM.trace.map((MM => "string" === typeof MM ? dM(MM) : MM)))
    }

    function CM(MM) {
      if (null === MM) return null;
      const rM = MM.properties.$snapshot_data;
      return UM(MM.properties), UM(MM.properties.$set), UM(MM.properties.$set_once), UM(MM.$set), UM(MM.$set_once),
        function(MM) {
          if (Array.isArray(MM))
            for (const rM of MM) {
              const MM = null === rM || void 0 === rM ? void 0 : rM.data;
              if (!MM || "object" !== typeof MM) continue;
              "string" === typeof MM.href && (MM.href = dM(MM.href));
              const iM = MM.payload;
              iM && "object" === typeof iM && (rM.type === SM.g.Plugin && "string" === typeof MM.plugin && MM.plugin.includes("console") ? GM(iM) : UM(iM))
            }
        }(rM), MM
    }
    const eM = `.${SM.j}`,
      bM = ["iframe", "script", 'link:not([rel~="stylesheet"])', ".AdBannerContainer > [id]", "#GenericVideoInner", "ins.adsbygoogle", '[id^="google_ads_"]', "[data-replay-hidden]"],
      wM = [".PartyCode", ".InviteLinkInner", ".InviteLinkBoxDescription", ".InGameHeaderLobbyName", ".RecentlyPlayedLobby", ".ProfilePreviewStatus", ".PartyJoinLocationText", ".PadKeyboardPreviewText", ".PadKeyboardPhraseRow"].join(", ");

    function tM(MM, rM) {
      return null !== rM && void 0 !== rM && rM.closest(eM) ? MM : "*".repeat(MM.length)
    }

    function gM(MM) {
      return {
        api_host: MM.apiHost,
        persistence: "memory",
        bootstrap: {
          distinctID: MM.deviceId,
          isIdentifiedID: !1,
          sessionID: MM.recordingId
        },
        person_profiles: "always",
        mask_personal_data_properties: !0,
        session_idle_timeout_seconds: 36e3,
        disable_external_dependency_loading: !0,
        opt_out_useragent_filter: MM.allowAutomatedBrowsers,
        capture_pageview: !0,
        capture_pageleave: !0,
        autocapture: !1,
        rageclick: !1,
        capture_dead_clicks: !1,
        capture_heatmaps: !1,
        capture_exceptions: !1,
        capture_performance: !1,
        disable_surveys: !0,
        disable_product_tours: !0,
        disable_conversations: !0,
        disable_web_experiments: !0,
        advanced_disable_feature_flags: !0,
        advanced_disable_flags: !0,
        enable_recording_console_log: !0,
        before_send: rM => {
          const iM = CM(rM);
          return null === iM || ("$snapshot" === iM.event ? function(MM, rM) {
            const {
              $snapshot_data: iM,
              $window_id: OM,
              distinct_id: SM
            } = MM.properties;
            try {
              rM({
                distinctId: String(SM),
                windowId: OM,
                events: iM
              })
            } catch (jM) {
              console.error("Session replay couldn't take a page recording batch.", jM)
            }
          }(iM, MM.onDomBatch) : MM.onTimelineEvent(iM)), null
        },
        disable_session_recording: !MM.recordDom,
        session_recording: {
          captureCanvas: {
            recordCanvas: !1
          },
          blockSelector: [...bM, (rM = MM.ownOrigins, `img[src^="http"]${rM.map((MM=>`:not([src^="${MM}/"])`)).join("")}`)].join(", "),
          inlineStylesheetBudgetRules: 200,
          maskAllInputs: !0,
          maskInputFn: tM,
          maskTextSelector: wM,
          maskAttributeFn: lM,
          recordCrossOriginIframes: !1,
          recordHeaders: !1,
          recordBody: !1,
          sampling: {
            mousemove: 100
          },
          full_snapshot_interval_millis: 9e5,
          session_idle_threshold_ms: 18e5,
          sampleRate: 1
        }
      };
      var rM
    }
    class uM {
      constructor(MM) {
        this.options = MM, this.buckets = new Map, this.lastEvictionMs = -1 / 0
      }
      allow(MM, rM) {
        this.evictExpired(MM, rM);
        let iM = this.buckets.get(MM);
        var OM, SM;
        (void 0 === iM || rM - iM.startMs >= this.options.windowMs) && (iM = {
          startMs: rM,
          count: 0,
          suppressed: null !== (OM = null === (SM = iM) || void 0 === SM ? void 0 : SM.suppressed) && void 0 !== OM ? OM : 0
        }, this.buckets.set(MM, iM));
        if (iM.count >= this.options.maxPerWindow) return iM.suppressed++, null;
        iM.count++;
        const jM = iM.suppressed;
        return iM.suppressed = 0, jM
      }
      evictExpired(MM, rM) {
        if (!(rM - this.lastEvictionMs < this.options.windowMs)) {
          this.lastEvictionMs = rM;
          for (const [iM, OM] of this.buckets) {
            const SM = (rM - OM.startMs) / this.options.windowMs;
            iM !== MM && SM >= (0 === OM.suppressed ? 1 : 10) && this.buckets.delete(iM)
          }
        }
      }
    }

    function RM(MM, rM, iM) {
      const OM = new URL(MM);
      return OM.pathname = `${OM.pathname.replace(/\/+$/,"")}/replay/${encodeURIComponent(rM)}`, OM.searchParams.set("timestamp", String(Math.round(iM - 5e3))), OM.toString()
    }
    class pM {
      constructor(MM) {
        this.options = MM, this.throttle = new uM({
          maxPerWindow: 3,
          windowMs: 6e4
        }), this.recordingId = void 0, this.domRecorded = void 0, this.recordingId = MM.recordingId, this.domRecorded = MM.domRecorded
      }
      setRecording(MM) {
        this.recordingId = MM, this.domRecorded = !0
      }
      annotate(MM, rM) {
        const iM = Date.now(),
          OM = this.throttle.allow("logged", iM);
        var SM;
        null !== OM && this.options.captureError(MM.message || MM.name, {
          error_name: MM.name || null,
          error_fingerprint: null !== (SM = rM.fingerprint) && void 0 !== SM ? SM : null,
          suppressed_since_last: OM
        });
        return {
          replay_recording_id: this.recordingId,
          ...this.domRecorded ? {
            replay_url: RM(this.options.dashboardHost, this.options.getSessionId(), iM)
          } : {}
        }
      }
    }

    function WM(MM) {
      return MM < 50 ? "<50" : MM < 100 ? "50-100" : MM < 200 ? "100-200" : MM < 400 ? "200-400" : "400+"
    }
    class sM {
      constructor() {
        this.gamesJoined = [], this.flags = new Set, this.firstGame = null, this.fpsTags = null, this.maxHitchMs = 0, this.pingSumMs = 0, this.pingSamples = 0, this.maxPingMs = 0, this.unboundKeyPresses = new Map
      }
      gameJoined(MM, rM) {
        this.gamesJoined.includes(MM) || this.gamesJoined.push(MM), null === this.firstGame && (this.firstGame = {
          joinedAtMs: rM,
          leftAtMs: null
        })
      }
      gameLeft(MM) {
        null !== this.firstGame && null === this.firstGame.leftAtMs && (this.firstGame.leftAtMs = MM)
      }
      setFlag(MM) {
        return !this.flags.has(MM) && (this.flags.add(MM), !0)
      }
      setFpsTags(MM) {
        this.fpsTags = MM
      }
      addHitch(MM) {
        return !(MM <= this.maxHitchMs) && (this.maxHitchMs = MM, !0)
      }
      addPingSample(MM) {
        const rM = this.pingTags();
        this.pingSumMs += MM, this.pingSamples++, this.maxPingMs = Math.max(this.maxPingMs, MM);
        const iM = this.pingTags();
        return (null === rM || void 0 === rM ? void 0 : rM.ping_avg_bucket) !== (null === iM || void 0 === iM ? void 0 : iM.ping_avg_bucket) || (null === rM || void 0 === rM ? void 0 : rM.ping_max_bucket) !== (null === iM || void 0 === iM ? void 0 : iM.ping_max_bucket)
      }
      addUnboundKeyPresses(MM) {
        for (const [iM, OM] of MM) {
          var rM;
          this.unboundKeyPresses.set(iM, (null !== (rM = this.unboundKeyPresses.get(iM)) && void 0 !== rM ? rM : 0) + OM)
        }
      }
      toProperties() {
        var MM;
        let rM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return {
          ...{
            first_game: null !== (MM = this.gamesJoined[0]) && void 0 !== MM ? MM : "",
            games_joined: this.gamesJoined.join(","),
            games_joined_count: this.gamesJoined.length,
            quick_quit: this.isQuickQuit(rM),
            had_error: this.flags.has("had_error"),
            disconnected: this.flags.has("disconnected"),
            purchase_intent: this.flags.has("purchase_intent"),
            ad_shown: this.flags.has("ad_shown"),
            max_hitch_ms: this.maxHitchMs,
            ...this.unboundKeyTags()
          },
          ...this.fpsTags,
          ...this.pingTags()
        }
      }
      unboundKeyTags() {
        let MM = 0,
          rM = "",
          iM = 0;
        for (const [OM, SM] of this.unboundKeyPresses) MM += SM, (SM > iM || SM === iM && OM < rM) && (rM = OM, iM = SM);
        return {
          unbound_key_presses: MM,
          top_unbound_key: rM
        }
      }
      pingTags() {
        return 0 === this.pingSamples ? null : {
          ping_avg_bucket: WM(this.pingSumMs / this.pingSamples),
          ping_max_bucket: WM(this.maxPingMs)
        }
      }
      isQuickQuit(MM) {
        var rM;
        if (null === this.firstGame) return !1;
        const iM = null !== (rM = this.firstGame.leftAtMs) && void 0 !== rM ? rM : MM;
        return null !== iM && iM - this.firstGame.joinedAtMs < SM.v
      }
    }
    var DM = iM(1229),
      kM = iM(1081),
      ZM = iM(332),
      oM = iM(1088),
      fM = iM(1073),
      YM = iM(3057),
      NM = iM(19),
      AM = iM(22),
      xM = iM(3063),
      vM = iM(1373),
      FM = iM(1327),
      BM = iM(83),
      XM = iM(1581),
      IM = iM(2266),
      KM = iM(1717),
      qM = iM(34820);
    const TM = ["keydown", "pointerdown", "touchstart"];
    var VM = iM(1341);
    var cM = iM(34841);
    const Mr = ["quit_after_hitch", "quit_after_death", "quit_during_load", "quit_in_menu", "quit_idle", "quit_after_ad"],
      rr = ["quit_during_load", "quit_after_ad", "quit_after_death", "quit_after_hitch", "quit_idle", "quit_in_menu"];

    function ir(MM) {
      var rM;
      return null !== (rM = rr.find((rM => MM.includes(rM)))) && void 0 !== rM ? rM : "none"
    }

    function Or(MM, rM, iM) {
      return null !== MM && rM - MM < iM
    }
    class Sr {
      constructor() {
        this.history = {
          lastHitchAtMs: null,
          lastDeathAtMs: null,
          lastInputAtMs: null,
          lastAdFinishedAtMs: null,
          adPlaying: !1
        }, this.lastLoadStep = null
      }
      noteInput(MM) {
        this.history.lastInputAtMs = MM
      }
      noteHitch(MM) {
        this.history.lastHitchAtMs = MM
      }
      noteDeath(MM) {
        this.history.lastDeathAtMs = MM
      }
      forgetGame() {
        this.history.lastDeathAtMs = null, this.history.lastHitchAtMs = null
      }
      noteAdStarted() {
        this.history.adPlaying = !0
      }
      noteAdFinished(MM) {
        this.history.adPlaying = !1, this.history.lastAdFinishedAtMs = MM
      }
      noteLoadStep(MM) {
        this.lastLoadStep = MM
      }
      getLastLoadStep() {
        return this.lastLoadStep
      }
      quit(MM) {
        const rM = function(MM, rM) {
            var iM, OM;
            const SM = [];
            return Or(rM.lastHitchAtMs, MM.nowMs, 15e3) && SM.push("quit_after_hitch"), Or(rM.lastDeathAtMs, MM.nowMs, 15e3) && SM.push("quit_after_death"), MM.loading ? SM.push("quit_during_load") : "page" !== MM.quitFrom || MM.inGame && !MM.menuOpen || SM.push("quit_in_menu"), Or(null !== (iM = rM.lastInputAtMs) && void 0 !== iM ? iM : 0, MM.nowMs, 6e4) || SM.push("quit_idle"), (!0 === rM.adPlaying || Or(null !== (OM = rM.lastAdFinishedAtMs) && void 0 !== OM ? OM : null, MM.nowMs, 3e4)) && SM.push("quit_after_ad"), SM
          }(MM, this.history),
          iM = {
            quit_from: MM.quitFrom,
            in_game: MM.inGame,
            quit_reasons: rM.join(","),
            quit_reason: ir(rM)
          };
        var OM;
        rM.includes("quit_during_load") && (iM.last_load_step = null !== (OM = this.lastLoadStep) && void 0 !== OM ? OM : "none");
        null !== MM.gameName && (iM.game_name_with_variation = MM.gameName, iM.game_name = (0, ZM.Mb)(MM.gameName));
        for (const SM of Mr) iM[SM] = rM.includes(SM);
        return {
          reasons: rM,
          properties: iM
        }
      }
    }
    class jr {
      constructor(MM) {
        this.deps = MM, this.quitContext = new Sr, this.loading = !1, this.inGame = !1, this.switching = !1, this.nextLeaveIsNotAQuit = !1, this.pendingQuit = null, this.exited = !1
      }
      joinStarted() {
        this.loading = !0, this.nextLeaveIsNotAQuit = !1, this.inGame && (this.switching = !0), this.resolvePendingQuitAsSwitch()
      }
      gameJoined() {
        this.inGame = !0, this.switching = !1
      }
      gamePlayable() {
        this.loading = !1
      }
      joinFailed(MM) {
        this.loading = !1, this.nextLeaveIsNotAQuit = this.inGame, this.deps.capture("join_failed", MM)
      }
      disconnected() {
        this.nextLeaveIsNotAQuit = !0
      }
      kickedForAfk(MM) {
        this.nextLeaveIsNotAQuit = !0, this.deps.capture("kicked_afk", {
          game_name_with_variation: MM
        })
      }
      gameLeft(MM) {
        const rM = this.nextLeaveIsNotAQuit || this.deps.isJoinAbandoned(),
          iM = this.switching,
          OM = this.loading;
        if (this.nextLeaveIsNotAQuit = !1, this.switching = !1, this.inGame = !1, null === MM) return;
        if (iM || (this.loading = !1), rM) return void this.quitContext.forgetGame();
        const SM = this.quitContext.quit({
          quitFrom: "game",
          gameName: MM,
          nowMs: this.deps.now(),
          inGame: !0,
          loading: OM,
          menuOpen: !1
        });
        this.quitContext.forgetGame(), iM ? this.captureSwitch(SM) : this.startPendingQuit(SM)
      }
      gameReplayOpened(MM) {
        this.nextLeaveIsNotAQuit = !0, this.gameLeft(MM), this.deps.capture("game_replay_opened", {
          from_game_name_with_variation: MM
        })
      }
      playPageLeft() {
        this.loading && !this.inGame && (this.loading = !1, this.startPendingQuit(this.quitContext.quit({
          quitFrom: "game",
          gameName: null,
          nowMs: this.deps.now(),
          inGame: !1,
          loading: !0,
          menuOpen: !1
        })))
      }
      pageHidden(MM) {
        if (this.exited) return;
        this.exited = !0;
        const rM = this.pendingQuit;
        null !== rM && (clearTimeout(rM.timer), this.pendingQuit = null, this.deps.onGameQuit(rM.quit), this.deps.captureOnExit("quit_context", rM.quit.properties, rM.atEpochMs));
        const iM = {
            quitFrom: "page",
            gameName: null,
            nowMs: this.deps.now(),
            inGame: this.inGame,
            loading: this.loading,
            menuOpen: this.deps.isMenuOpen()
          },
          OM = this.quitContext.quit(iM);
        this.inGame && this.deps.onGameQuit(OM), this.deps.captureOnExit("quit_context", {
          ...MM,
          ...OM.properties
        })
      }
      pageRestored() {
        this.exited = !1, this.deps.capture("page_restored", {})
      }
      startPendingQuit(MM) {
        this.resolvePendingQuitAsSwitch();
        const rM = {
          quit: MM,
          atEpochMs: Date.now(),
          timer: setTimeout((() => {
            this.pendingQuit === rM && (this.pendingQuit = null, this.deps.onGameQuit(MM), this.deps.capture("quit_context", MM.properties, rM.atEpochMs))
          }), 1e4)
        };
        this.pendingQuit = rM
      }
      resolvePendingQuitAsSwitch() {
        const MM = this.pendingQuit;
        null !== MM && (clearTimeout(MM.timer), this.pendingQuit = null, "string" === typeof MM.quit.properties.game_name_with_variation && this.captureSwitch(MM.quit))
      }
      captureSwitch(MM) {
        this.deps.capture("game_switched", {
          from_game_name_with_variation: MM.properties.game_name_with_variation,
          from_game_name: MM.properties.game_name,
          after_death: MM.reasons.includes("quit_after_death"),
          after_hitch: MM.reasons.includes("quit_after_hitch")
        })
      }
    }
    class ar {
      constructor(MM) {
        this.replay = MM, this.pointerLockThrottle = new uM({
          maxPerWindow: 10,
          windowMs: 6e4
        }), this.counts = new Map, this.game = null, this.timer = null
      }
      start(MM) {
        MM.onUnboundKey((MM => {
          this.onUnboundKey(MM)
        })), MM.onPointerLock((MM => {
          const rM = this.pointerLockThrottle.allow("pointer_lock_changed", Date.now());
          null !== rM && this.replay.capture("pointer_lock_changed", {
            locked: MM,
            in_game: "inGame" === NM.d.get("gameState"),
            menu_open: (0, KM.r)(),
            suppressed_since_last: rM
          })
        })), AM.i.subscribe("leaveGame", (() => {
          this.flush(!1)
        })), document.addEventListener("visibilitychange", (() => {
          document.hidden && this.flush(!0)
        }))
      }
      onUnboundKey(MM) {
        var rM;
        const iM = (0, vM.e)().gameNameWithVariation;
        iM !== this.game && (this.flush(!1), this.game = iM), this.counts.set(MM, (null !== (rM = this.counts.get(MM)) && void 0 !== rM ? rM : 0) + 1), this.timer ??= setTimeout((() => {
          this.flush(!1)
        }), 1e4)
      }
      flush(MM) {
        if (null !== this.timer && (clearTimeout(this.timer), this.timer = null), 0 === this.counts.size) return;
        const rM = (iM = this.counts, [...iM].sort(((MM, rM) => rM[1] - MM[1] || (MM[0] < rM[0] ? -1 : 1))));
        var iM;
        let OM = 0;
        for (const [, jM] of rM) OM += jM;
        const SM = {
          key_counts: Object.fromEntries(rM),
          keys: rM.map((MM => {
            let [rM] = MM;
            return rM
          })).join(","),
          top_key: rM[0][0],
          presses: OM,
          game_name: null === this.game ? null : (0, ZM.Mb)(this.game),
          game_name_with_variation: this.game
        };
        this.replay.addUnboundKeyPresses(this.counts), this.counts.clear(), MM ? this.replay.captureOnExit("unbound_keys", SM) : this.replay.capture("unbound_keys", SM)
      }
    }
    var Pr = iM(143);

    function nr(MM) {
      var rM, iM;
      return null !== (rM = null === (iM = Pr.n[MM]) || void 0 === iM ? void 0 : iM.toLowerCase()) && void 0 !== rM ? rM : String(MM)
    }
    class Qr {
      constructor(MM, rM) {
        this.replay = MM, this.quitContext = rM, this.startedAtMs = null, this.steps = new Map, this.firstGamePlayable = !1
      }
      started() {
        this.startedAtMs = Date.now()
      }
      stepCompleted(MM) {
        if (this.steps.has(MM)) return;
        const rM = performance.now();
        this.steps.set(MM, rM);
        const iM = nr(MM);
        this.quitContext.noteLoadStep(iM), this.firstGamePlayable || this.replay.capture("game_load_step", {
          load_step: iM,
          step_number: MM,
          ms_since_page_load: Math.round(rM),
          ms_since_load_start: null === this.startedAtMs ? null : Date.now() - this.startedAtMs
        })
      }
      ended() {
        this.startedAtMs = null, this.resetSteps()
      }
      forgetStart() {
        this.startedAtMs = null
      }
      playable() {
        let MM = null,
          rM = null;
        for (const [OM, SM] of [...this.steps].sort(((MM, rM) => MM[1] - rM[1]))) null !== rM && (null === MM || SM - rM > MM.ms) && (MM = {
          step: OM,
          ms: SM - rM
        }), rM = SM;
        const iM = null === this.startedAtMs ? null : Date.now() - this.startedAtMs;
        return this.firstGamePlayable = !0, this.ended(), {
          load_ms: iM,
          slowest_load_step: null === MM ? null : nr(MM.step),
          slowest_load_step_ms: null === MM ? null : Math.round(MM.ms)
        }
      }
      resetSteps() {
        this.steps.clear(), this.quitContext.noteLoadStep(null)
      }
    }
    class zr {
      constructor(MM, rM) {
        this.replay = MM, this.quitContext = rM, this.chatThrottle = new uM({
          maxPerWindow: 10,
          windowMs: 6e4
        }), this.settings = NM.d.get("clientEscMenuOptions"), this.pendingSettings = {}, this.settingsTimer = null, this.adRequest = null, this.playingAd = null
      }
      start() {
        AM.i.subscribe("chatSent", (MM => {
          let {
            length: rM
          } = MM;
          null !== this.chatThrottle.allow("chat", Date.now()) && this.replay.capture("chat_sent", {
            length: rM
          })
        })), AM.i.subscribe("purchaseStarted", (MM => {
          let {
            product: rM
          } = MM;
          this.replay.setFlag("purchase_intent"), this.replay.capture("purchase_started", {
            product: rM
          })
        })), AM.i.subscribe("purchaseEnded", (MM => {
          let {
            outcome: rM
          } = MM;
          this.replay.capture("purchase_ended", {
            outcome: rM
          })
        })), AM.i.subscribe("adRequested", (MM => {
          let {
            adKind: rM,
            provider: iM
          } = MM;
          this.adRequest = {
            adKind: rM,
            provider: iM,
            atMs: performance.now()
          }
        })), AM.i.subscribe("appManagerUpdated|soundOnFromAd", (MM => {
          MM && null !== this.playingAd ? this.onAdFinished() : MM || null !== this.playingAd || this.onAdStarted()
        }));
        for (const MM of ["openEverythingMenuName", "openInGameMenuName"]) AM.i.subscribe(`appManagerUpdated|${MM}`, (MM => {
          null !== MM && this.replay.capture("menu_opened", {
            menu: MM
          })
        }));
        AM.i.subscribe("appManagerUpdated|clientEscMenuOptions", (MM => {
          NM.d.isApplyingDefaults ? this.settings = MM : this.onSettingsChanged(MM)
        }))
      }
      onAdStarted() {
        var MM, rM;
        const iM = performance.now(),
          OM = null !== this.adRequest && iM - this.adRequest.atMs < 6e4 ? this.adRequest : null;
        this.adRequest = null, this.playingAd = {
          ad_kind: null !== (MM = null === OM || void 0 === OM ? void 0 : OM.adKind) && void 0 !== MM ? MM : "unknown",
          provider: null !== (rM = null === OM || void 0 === OM ? void 0 : OM.provider) && void 0 !== rM ? rM : null,
          startedAtMs: iM
        }, this.replay.setFlag("ad_shown"), this.quitContext.noteAdStarted(), this.replay.capture("ad_started", this.adProperties(this.playingAd, iM))
      }
      onAdFinished() {
        const MM = performance.now(),
          rM = this.playingAd;
        this.playingAd = null, this.quitContext.noteAdFinished(MM), this.replay.capture("ad_finished", {
          ...this.adProperties(rM, MM),
          ad_ms: Math.round(MM - rM.startedAtMs)
        })
      }
      adProperties(MM, rM) {
        return {
          ad_kind: MM.ad_kind,
          provider: MM.provider,
          minutes_since_page_load: Math.floor(rM / 6e4),
          in_game: "inGame" === NM.d.get("gameState")
        }
      }
      onSettingsChanged(MM) {
        Object.assign(this.pendingSettings, function(MM, rM) {
          const iM = {};
          for (const OM of Object.keys(rM)) MM[OM] !== rM[OM] && (iM[OM] = rM[OM]);
          return iM
        }(this.settings, MM)), this.settings = MM, null !== this.settingsTimer && clearTimeout(this.settingsTimer), this.settingsTimer = setTimeout((() => {
          this.settingsTimer = null, Object.keys(this.pendingSettings).length > 0 && (this.replay.capture("settings_changed", {
            changed_settings: Object.keys(this.pendingSettings),
            values: this.pendingSettings
          }), this.pendingSettings = {})
        }), 2e3)
      }
    }

    function Lr(MM) {
      switch ((0, DM.w)(MM)) {
        case kM.d.DISCORD_GUILD:
          return "discord_guild";
        case kM.d.DISCORD_DM:
          return "discord_dm";
        default:
          return (0, DM.P)(MM) ? "public" : "private"
      }
    }
    class mr {
      constructor(MM) {
        this.replay = MM, this.errorThrottle = new uM({
          maxPerWindow: 3,
          windowMs: 6e4
        }), this.hitchThrottle = new uM({
          maxPerWindow: 5,
          windowMs: 6e4
        }), this.attachedToRender = !1, this.framesThisTick = 0, this.lastTickMs = performance.now(), this.ticks = 0, this.gamesJoined = 0, this.game = null, this.gameJoinedEvent = void 0, this.leaves = void 0, this.joinLoad = void 0, this.deathSubscription = null, this.inputSinceActiveMarker = !1, this.firstInGameInputSent = !1, this.firstMinutePlayedSent = !1, this.gameJoinedEvent = new cM.e(MM), this.leaves = new jr({
          capture: (rM, iM, OM) => {
            void 0 === OM ? MM.capture(rM, iM) : MM.captureAt(rM, iM, OM)
          },
          captureOnExit: (rM, iM, OM) => {
            MM.captureOnExit(rM, iM, OM)
          },
          onGameQuit: MM => {
            let {
              reasons: rM,
              properties: iM
            } = MM;
            const OM = iM.game_name_with_variation;
            AM.i.Tz("sessionReplayGameQuit", {
              reasons: rM,
              gameName: "string" === typeof OM ? OM : null
            })
          },
          isMenuOpen: KM.r,
          isJoinAbandoned: IM.g,
          now: () => performance.now()
        }), this.joinLoad = new Qr(MM, this.leaves.quitContext)
      }
      start() {
        const MM = (0, qM.e)(),
          rM = new ar(this.replay);
        null !== MM && rM.start(MM), this.capturePageLoadTiming();
        const iM = NM.d.get("gameState");
        "inGame" === iM ? this.joinConnectedGame() : "loadingScreen" !== iM && "findingLobby" !== iM || this.leaves.joinStarted(), this.subscribeToGameFlow(), new zr(this.replay, this.leaves.quitContext).start(), this.subscribeToErrors(), this.trackInput(), setTimeout((() => {
          ! function(MM) {
            var rM;
            let iM = !1;
            const OM = (rM, OM, SM) => {
              iM || (iM = !0, MM(rM, OM, SM))
            };
            if ("undefined" !== typeof PerformanceObserver && null !== (rM = PerformanceObserver.supportedEntryTypes) && void 0 !== rM && rM.includes("first-input")) {
              const MM = new PerformanceObserver((rM => {
                const [iM] = rM.getEntries();
                MM.disconnect(), OM(iM.name, iM.startTime, !0)
              }));
              return void MM.observe({
                type: "first-input",
                buffered: !0
              })
            }
            const SM = new AbortController,
              jM = MM => {
                SM.abort(), OM(MM.type, MM.timeStamp, !1)
              };
            for (const aM of TM) window.addEventListener(aM, jM, {
              capture: !0,
              passive: !0,
              signal: SM.signal
            })
          }(((MM, rM, iM) => {
            this.replay.capture("first_input", Object.fromEntries([
              ["input_type", MM],
              ["ms_since_page_load", Math.round(rM)],
              ["buffered", iM]
            ]))
          }))
        }), 100), (0, FM.x)((() => {
          this.framesThisTick++
        })), setInterval((() => {
          this.kE()
        }), 1e3), window.addEventListener("pagehide", (() => {
          this.gameJoinedEvent.flush(!0), rM.flush(!0), this.leaves.pageHidden(this.replay.finalTags())
        })), window.addEventListener("pageshow", (MM => {
          MM.persisted && this.leaves.pageRestored()
        }))
      }
      trackInput() {
        const MM = MM => {
          var rM, iM;
          this.inputSinceActiveMarker = !0, this.leaves.quitContext.noteInput(MM.timeStamp);
          const OM = null !== (rM = null === (iM = this.game) || void 0 === iM ? void 0 : iM.playableAtMs) && void 0 !== rM ? rM : null;
          this.firstInGameInputSent || null === OM || this.onFirstInGameInput(MM.type, OM)
        };
        for (const rM of ["keydown", "pointerdown", "pointermove", "wheel"]) window.addEventListener(rM, MM, {
          capture: !0,
          passive: !0
        })
      }
      onFirstInGameInput(MM, rM) {
        this.firstInGameInputSent = !0, this.replay.capture("first_ingame_input", Object.fromEntries([
          ["input_type", MM],
          ["ms_since_playable", Date.now() - rM],
          ["ms_since_page_load", Math.round(performance.now())]
        ]))
      }
      capturePageLoadTiming() {
        const MM = performance.getEntriesByType("navigation")[0],
          rM = performance.getEntriesByName("first-contentful-paint")[0];
        this.replay.capture("page_load_timing", {
          ttfb_ms: MM ? Math.round(MM.responseStart) : null,
          first_contentful_paint_ms: rM ? Math.round(rM.startTime) : null,
          dom_content_loaded_ms: MM ? Math.round(MM.domContentLoadedEventEnd) : null,
          load_ms: MM ? Math.round(MM.loadEventEnd) : null,
          transfer_kb: MM ? Math.round(MM.transferSize / 1024) : null,
          recording_started_ms: Math.round(performance.now())
        })
      }
      subscribeToGameFlow() {
        AM.i.subscribe("joinedGame", (MM => {
            let {
              gameNameWithVariation: rM,
              lobbyName: iM
            } = MM;
            (0, IM.g)() || this.onJoinedGame(rM, iM)
          })), AM.i.subscribe("leaveGame", (() => {
            var MM, rM;
            const iM = null !== (MM = null === (rM = this.game) || void 0 === rM ? void 0 : rM.name) && void 0 !== MM ? MM : null;
            this.onLeftGame(), this.leaves.gameLeft(iM)
          })), AM.i.subscribe("replayViewer|replayLoaded", (() => {
            if (null === this.game) return;
            const MM = this.game.name;
            this.onLeftGame(), this.leaves.gameReplayOpened(MM)
          })), AM.i.subscribe("matchmakeAndPlayStepCompleted", (MM => {
            let {
              step: rM
            } = MM;
            this.joinLoad.stepCompleted(rM)
          })), AM.i.subscribe("leftPlayPage", (() => {
            this.leaves.playPageLeft(), this.joinLoad.ended()
          })), AM.i.subscribe("joinFailed", (MM => {
            let {
              step: rM,
              severity: iM
            } = MM;
            this.leaves.joinFailed({
              step: rM,
              severity: iM,
              game_name_with_variation: (0, vM.e)().requestedGameNameWithVariation,
              last_load_step: this.leaves.quitContext.getLastLoadStep()
            }), this.joinLoad.ended()
          })), AM.i.subscribe("kickedForAfk", (() => {
            var MM, rM;
            this.leaves.kickedForAfk(null !== (MM = null === (rM = this.game) || void 0 === rM ? void 0 : rM.name) && void 0 !== MM ? MM : null)
          })), AM.i.subscribe("unwantedLeftGame", (MM => {
            this.leaves.disconnected(), this.replay.setFlag("disconnected"), this.replay.capture("disconnected", {
              reason: MM.reason,
              can_reconnect: MM.canReconnect,
              automatically_reconnect: MM.automaticallyReconnect,
              requires_refresh: MM.requiresRefresh
            })
          })), AM.i.subscribe("appManagerUpdated|gameState", (MM => {
            "loadingScreen" === MM ? this.leaves.joinStarted() : "findingLobby" === MM ? (this.leaves.joinStarted(), this.joinLoad.started(), this.replay.capture("game_loading_started", {
              entry_source: NM.d.get("gameEntrySource")
            })) : "inGame" === MM ? this.onPlayable() : "landingPage" === MM && (this.replay.capture("homepage_viewed"), this.replay.capture("$screen", {
              $screen_name: "homepage"
            }))
          })), AM.i.subscribe("appManagerUpdated|gameEntrySource", (MM => {
            "autoReconnect" !== MM && "manualReconnect" !== MM || this.replay.capture("reconnect_attempted", {
              automatic: "autoReconnect" === MM
            })
          })),
          function(MM) {
            var rM, iM;
            if ("undefined" === typeof PerformanceObserver || null === (rM = null === (iM = PerformanceObserver.supportedEntryTypes) || void 0 === iM ? void 0 : iM.includes("long-animation-frame")) || void 0 === rM || !rM) return;
            let OM = null;
            new PerformanceObserver((rM => {
              for (const jM of rM.getEntries()) {
                var iM, SM;
                const rM = jM,
                  aM = !(null !== OM && rM.startTime - OM.endMs < 50) || rM.duration >= 3 * (null !== (iM = null === (SM = OM) || void 0 === SM ? void 0 : SM.durationMs) && void 0 !== iM ? iM : 0);
                OM = {
                  endMs: rM.startTime + rM.duration,
                  durationMs: rM.duration
                }, !document.hidden && rM.duration >= 100 && aM && MM({
                  frameMs: rM.duration,
                  mainThreadMs: (0, VM.p)(rM)
                })
              }
            })).observe({
              type: "long-animation-frame"
            })
          }((MM => {
            this.onFrameHitch(MM)
          })), AM.i.subscribe("sessionReplayPlayerKill", (MM => {
            let {
              killstreak: rM
            } = MM;
            this.replay.capture("player_kill", {
              killstreak: rM
            })
          }))
      }
      subscribeToErrors() {
        window.addEventListener("error", (MM => {
          const rM = MM.error;
          this.captureError("error", MM.message, MM.filename ? `${MM.filename}:${MM.lineno}:${MM.colno}` : null, rM instanceof Error ? rM.name : null)
        })), window.addEventListener("unhandledrejection", (MM => {
          const rM = MM.reason;
          this.captureError("unhandled_rejection", rM instanceof Error ? rM.message : String(rM), null, rM instanceof Error ? rM.name : null)
        })), AM.i.subscribe("unrecoverableError", (MM => {
          this.captureError("unrecoverable", MM, null, null)
        }))
      }
      captureError(MM, rM, iM, OM) {
        const jM = EM(rM).slice(0, 300),
          aM = this.errorThrottle.allow(`${MM}:${jM}`, Date.now());
        null !== aM && (this.replay.captureClientError(MM, jM, {
          source: iM,
          error_name: OM,
          suppressed_since_last: aM
        }), this.replay.addReplayMarker(SM.r.error, {
          kind: MM,
          message: jM
        }))
      }
      onPlayable() {
        (0, IM.g)() || (0, vM.i)() || (null === this.game && this.joinConnectedGame(), this.replay.capture("game_playable", {
          ms_since_page_load: Math.round(performance.now()),
          ...this.joinLoad.playable()
        }), this.leaves.gamePlayable(), null !== this.game && (this.game.playableAtMs = Date.now()))
      }
      joinConnectedGame() {
        if ((0, vM.i)()) return;
        const {
          gameNameWithVariation: MM,
          lobbyName: rM
        } = (0, vM.e)();
        null !== MM && null !== rM ? this.onJoinedGame(MM, rM) : console.warn("Session replay found a game playable with no game joined; not labelling it")
      }
      onJoinedGame(MM, rM) {
        this.replay.takeFullSnapshot();
        const iM = (0, DM.P)(rM),
          OM = Date.now(),
          SM = "inGame" === NM.d.get("gameState") ? OM : null;
        this.game = {
          joinedAtMs: OM,
          name: MM,
          playableAtMs: SM,
          visiblePlayedMs: 0,
          deaths: 0
        }, this.gamesJoined++, this.leaves.gameJoined();
        const jM = XM.clientSidePartyStateManager.getPartyInformation(),
          aM = {
            game_name: (0, ZM.Mb)(MM),
            game_name_with_variation: MM,
            game_number: this.gamesJoined,
            game_analytics_id: (0, oM.e)(MM, iM),
            is_custom_game: (0, fM.m)(MM),
            lobby_type: Lr(rM),
            in_party: null !== jM,
            party_size: null === jM ? 0 : jM.memberSocialPreviews.length + 1
          };
        this.replay.gameJoined(MM, aM), this.gameJoinedEvent.send(MM, {
          ...aM,
          entry_source: NM.d.get("gameEntrySource")
        }, OM), this.subscribeToDeaths(MM)
      }
      onLeftGame() {
        this.joinLoad.forgetStart(), null !== this.game && (this.gameJoinedEvent.flush(), this.replay.capture("game_left", {
          game_name_with_variation: this.game.name,
          duration_ms: Date.now() - this.game.joinedAtMs
        }), this.game = null, this.replay.gameLeft(), AM.i.unsubscribe(this.deathSubscription), this.deathSubscription = null)
      }
      subscribeToDeaths(MM) {
        const rM = (0, xM.f)();
        if (AM.i.unsubscribe(this.deathSubscription), this.deathSubscription = null, !rM) return;
        let iM = !0;
        this.deathSubscription = AM.i.subscribe(`otherEntitySettingsClientifiedEId|${rM.eD}|_isAlive`, (OM => {
          const jM = iM && !OM;
          if (iM = OM, jM) {
            this.leaves.quitContext.noteDeath(performance.now());
            const [iM, OM, jM] = rM.hU.XE(rM.eD), aM = {
              x: Math.round(iM),
              y: Math.round(OM),
              z: Math.round(jM)
            }, PM = this.game, nM = null === PM ? {} : {
              death_number: ++PM.deaths,
              seconds_since_join: Math.round((Date.now() - PM.joinedAtMs) / 1e3)
            };
            this.replay.capture("player_died", {
              ...aM,
              game_name_with_variation: MM,
              ...nM
            }), this.replay.addReplayMarker(SM.r.death, aM)
          }
        }))
      }
      onFrameHitch(MM) {
        let {
          frameMs: rM,
          mainThreadMs: iM
        } = MM;
        const OM = this.game;
        if (null === OM || null === OM.playableAtMs || Date.now() - OM.playableAtMs < 2e3) return;
        (0, KM.r)() || this.leaves.quitContext.noteHitch(performance.now()), this.replay.addHitch(Math.round(rM));
        const SM = this.hitchThrottle.allow("frame_hitch", Date.now());
        null !== SM && this.replay.capture("frame_hitch", {
          GP: Math.round(rM),
          main_thread_ms: Math.round(iM),
          game_name_with_variation: OM.name,
          suppressed_since_last: SM
        })
      }
      kE() {
        this.attachToRender();
        const MM = performance.now(),
          rM = MM - this.lastTickMs,
          iM = rM <= 5e3,
          OM = this.game;
        if (null !== OM && null !== OM.playableAtMs && !document.hidden && iM && OM.visiblePlayedMs < 6e4 && (OM.visiblePlayedMs += rM, OM.visiblePlayedMs >= 6e4)) {
          const rM = Math.round(MM);
          this.replay.capture("game_played_60s", {
            game_name_with_variation: OM.name,
            ms_since_page_load: rM,
            ...this.firstMinutePlayedSent ? {} : {
              ttff_ms: rM
            }
          }), this.firstMinutePlayedSent = !0
        }
        const jM = null !== this.game && !document.hidden;
        this.replay.addFpsSample(jM && iM && this.framesThisTick > 0 ? 1e3 * this.framesThisTick / rM : null);
        const aM = jM ? YM.b.getLastColyseusPingMs() : null;
        null !== aM && this.replay.addPingSample(aM), this.framesThisTick = 0, this.lastTickMs = MM, this.ticks++, this.ticks % 2 === 0 && (jM && this.inputSinceActiveMarker && this.replay.addReplayMarker(SM.r.active), this.inputSinceActiveMarker = !1), this.replay.markClockIfDue(this.ticks, 30)
      }
      attachToRender() {
        if (this.attachedToRender) return;
        const MM = (0, FM.M)().gameRender();
        null !== MM && (this.attachedToRender = !0, this.replay.setSessionProperties(Object.fromEntries([
          ["renderer", MM.renderer],
          ["gpu_vendor", (0, BM.getGpuVendor)()]
        ])), MM.canvas.addEventListener("webglcontextlost", (() => {
          this.replay.setFlag("had_error"), this.replay.capture("webgl_context_lost")
        })), MM.canvas.addEventListener("webglcontextrestored", (() => {
          this.replay.capture("webgl_context_restored")
        })))
      }
    }
    var Hr = iM(1215),
      hr = iM(1202),
      Jr = iM(34639);

    function dr(MM) {
      return MM.length + 64
    }
    async function yr() {
      return new Response("{}")
    }

    function lr(MM, rM, iM) {
      return Jr.h.fetch(MM, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain"
        },
        body: rM,
        signal: (0, Hr.q)(3e4)
      }, iM)
    }
    class Er {
      constructor(MM) {
        var rM, iM, OM;
        let SM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.uploadToken = MM, this.url = void 0, this.post = void 0, this.isHidden = void 0, this.queue = [], this.retries = [], this.refusedTokens = new Set, this.overflowWarned = !1, this.unloading = !1, this.sendScheduled = !1, this.url = null !== (rM = SM.url) && void 0 !== rM ? rM : `${hr.clientSideServerUrls.indexUrl}/index/replay/timeline`, this.post = null !== (iM = SM.post) && void 0 !== iM ? iM : lr, this.isHidden = null !== (OM = SM.isHidden) && void 0 !== OM ? OM : () => "hidden" === document.visibilityState
      }
      start() {
        setInterval((() => {
          this.flush()
        }), 1e4), document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        })), window.addEventListener("pagehide", (() => {
          this.unloading = !0, this.flush()
        })), window.addEventListener("pageshow", (() => {
          this.unloading = !1
        }))
      }
      setUploadToken(MM) {
        this.uploadToken = MM
      }
      add(MM) {
        if (this.refusedTokens.has(this.uploadToken)) return;
        const rM = function(MM) {
            const rM = {
              ...MM.properties
            };
            return void 0 !== MM.$set && (rM.$set = {
              ...MM.properties.$set,
              ...MM.$set
            }), void 0 !== MM.$set_once && (rM.$set_once = {
              ...MM.$set_once,
              ...MM.properties.$set_once
            }), void 0 !== MM.$unset && (rM.$unset = MM.$unset), {
              uuid: MM.uuid,
              event: MM.event,
              timestampMs: MM.timestamp.getTime(),
              distinctId: String(MM.properties.distinct_id),
              properties: JSON.stringify(rM)
            }
          }(MM),
          iM = (0, Jr.k)(JSON.stringify(rM));
        rM.properties.length > 32768 || rM.event.length > 64 || rM.distinctId.length > 200 || dr(this.uploadToken) + iM > 102400 ? console.warn(`Session replay timeline event ${rM.event.slice(0,64)} is too large for index-server; dropped.`) : (this.queue.push({
          uploadToken: this.uploadToken,
          event: rM,
          bytes: iM,
          attempts: 0
        }), this.trimToCap(), this.queue.length >= 50 ? this.sendQueued() : (this.unloading || this.isHidden()) && this.sendSoon())
      }
      sendSoon() {
        this.sendScheduled || (this.sendScheduled = !0, queueMicrotask((() => {
          this.sendScheduled = !1, this.sendQueued()
        })))
      }
      flush() {
        this.retries.length > 0 && (this.queue = [...this.retries, ...this.queue].sort(((MM, rM) => MM.event.timestampMs - rM.event.timestampMs)), this.retries = []), this.sendQueued()
      }
      sendQueued() {
        for (; this.queue.length > 0;) {
          const MM = this.takeBatch();
          this.refusedTokens.has(MM.uploadToken) || this.send(MM)
        }
      }
      trimToCap() {
        let MM = this.retries.length + this.queue.length - 1e3;
        if (MM <= 0) return void(this.overflowWarned = !1);
        const rM = Math.min(MM, this.retries.length);
        this.retries.splice(0, rM), MM -= rM, this.queue.splice(0, MM), this.overflowWarned || (this.overflowWarned = !0, console.warn("Session replay timeline queue is full; dropping its oldest events until it drains."))
      }
      takeBatch() {
        const MM = this.queue.shift(),
          rM = [MM];
        let iM = dr(MM.uploadToken) + MM.bytes;
        for (; this.queue.length > 0 && rM.length < 100 && this.queue[0].uploadToken === MM.uploadToken && iM + this.queue[0].bytes <= 32768;) {
          const MM = this.queue.shift();
          rM.push(MM), iM += MM.bytes
        }
        return {
          uploadToken: MM.uploadToken,
          events: rM
        }
      }
      async send(MM) {
        const rM = await this.sendOnce(MM);
        if ("refused" === rM && this.refusedTokens.add(MM.uploadToken), "retryLater" !== rM) return;
        const iM = MM.events.filter((MM => ++MM.attempts < 3));
        iM.length < MM.events.length && console.error(`Session replay timeline: dropped ${MM.events.length-iM.length} events after 3 attempts.`), this.retries.push(...iM), this.trimToCap()
      }
      async sendOnce(MM) {
        const rM = {
            uploadToken: MM.uploadToken,
            sentAtMs: Date.now(),
            events: MM.events.map((MM => MM.event))
          },
          iM = JSON.stringify(rM);
        let OM, SM = null;
        try {
          OM = await this.post(this.url, iM, (0, Jr.k)(iM)), OM.ok && (SM = await OM.json())
        } catch (jM) {
          return console.warn("Session replay timeline upload failed.", jM), "retryLater"
        }
        return null === SM ? 408 === OM.status || 429 === OM.status || OM.status >= 500 ? "retryLater" : (console.error(`Session replay timeline upload failed with ${OM.status}; dropped ${MM.events.length} events.`), "dropped") : "rejected" in SM ? SM.retryable ? "retryLater" : (console.warn(`Session replay timeline refused: ${SM.reason}; dropping this recording's events.`), "refused") : "sent"
      }
    }
    var Ur = iM(119),
      Gr = iM(34785),
      Cr = iM(2579),
      er = iM(1329),
      br = iM(255),
      wr = iM(4742),
      tr = iM(673);

    function gr() {
      return window.__PosthogExtensions__
    }

    function ur() {
      var MM;
      const rM = navigator,
        iM = new Date;
      return {
        local_hour: iM.getHours(),
        local_weekday: iM.getDay(),
        ...rM.hardwareConcurrency ? {
          cpu_cores: rM.hardwareConcurrency
        } : {},
        ...rM.deviceMemory ? {
          device_memory_gb: rM.deviceMemory
        } : {},
        ...null !== (MM = rM.connection) && void 0 !== MM && MM.effectiveType ? {
          network_type: rM.connection.effectiveType
        } : {}
      }
    }

    function Rr() {
      const MM = {};
      for (const [rM, iM] of Object.entries(br.e)) MM[`ab_${rM}`] = String(iM);
      return MM
    }

    function pr(MM) {
      var rM;
      const iM = MM.tags,
        OM = (0, wr.b)();
      return {
        panel_entry_reason: null !== (rM = iM.recording_reason) && void 0 !== rM ? rM : "unknown",
        panel_entry_date: (new Date).toISOString().slice(0, 10),
        ...null === OM ? {} : {
          panel_entry_visit_number: OM
        },
        ...void 0 === iM.sample_rate ? {} : {
          panel_entry_sample_rate: iM.sample_rate
        }
      }
    }

    function Wr() {
      const MM = (0, wr.b)();
      return null === MM ? {} : {
        visit_number: MM
      }
    }

    function sr(MM, rM) {
      return {
        recording_id: MM.recordingId,
        recording_mode: MM.mode,
        recording_scopes: MM.scopes.join(","),
        dom_recorded: rM
      }
    }

    function Dr(MM, rM) {
      const iM = {};
      for (const [OM, SM] of Object.entries(rM)) iM[`${MM}${OM}`] = SM;
      return iM
    }
    class kr {
      constructor(MM) {
        var rM;
        this.tags = new sM, this.fpsMonitor = void 0, this.errorLogLink = void 0, this.lastTagsJson = "", this.clockMarked = !1, this.personUpdateTimer = null, this.expectedSessionId = "", this.recorderPatched = !1, this.gameContextKeys = [], this.firstGameJoined = !1, this.timeline = void 0, this.onDomBatch = void 0;
        const {
          recording: iM
        } = MM;
        this.onDomBatch = MM.onDomBatch;
        const SM = null !== MM.onDomBatch;
        SM && this.patchRecorder(), this.timeline = new Er(iM.uploadToken, MM.dryRun ? {
            post: yr
          } : {}), this.timeline.start(),
          function(MM) {
            const rM = {
                supportedCompression: [jM.e.GZipJS],
                hasFeatureFlags: !1,
                sessionRecording: {
                  endpoint: "/s/"
                },
                siteApps: [],
                toolbarParams: {},
                toolbarVersion: "toolbar",
                isAuthenticated: !1
              },
              iM = window;
            iM._POSTHOG_REMOTE_CONFIG = {
              ...iM._POSTHOG_REMOTE_CONFIG,
              [MM]: {
                config: rM
              }
            }
          }(MM.posthog.projectApiKey), jM.i.init(MM.posthog.projectApiKey, gM({
            apiHost: MM.posthog.apiHost,
            recordingId: iM.recordingId,
            deviceId: MM.deviceId,
            recordDom: SM,
            ownOrigins: [window.location.origin, new URL(hr.clientSideServerUrls.s3Url, window.location.href).origin],
            allowAutomatedBrowsers: (0, Cr.c)((0, Cr.e)(), !1),
            onTimelineEvent: MM => {
              this.timeline.add(MM), "$pageview" === MM.event && MM.properties.$current_url && this.addReplayMarker("$pageview", {
                href: MM.properties.$current_url
              })
            },
            onDomBatch: MM => {
              this.takeDomBatch(MM)
            }
          })), SM && jM.i.startSessionRecording({
            sampling: !0
          }), this.expectedSessionId = iM.recordingId, jM.i.onSessionId((MM => {
            MM !== this.expectedSessionId && console.warn(`Session replay: PostHog session ${MM} differs from recording ${this.expectedSessionId}; events carry recording_id.`)
          }));
        const PM = {
          ...iM.tags,
          site_used: Ur.siteUsed,
          subsite_used: null !== Ur.subsiteUsed && void 0 !== Ur.subsiteUsed ? Ur.subsiteUsed : "",
          is_iframed: Ur.isIframed,
          entry_path: location.pathname,
          ...ur(),
          ...Rr(),
          ...sr(iM, SM),
          client_build: OM.c,
          device_id: MM.deviceId,
          ip_group_id: iM.ipGroupId,
          logged_in: iM.loggedIn,
          ...Wr(),
          ...null === iM.ipVisitNumber ? {} : {
            ip_visit_number: iM.ipVisitNumber
          }
        };
        jM.i.register(PM), null !== MM.videoStatus && jM.i.register({
          replay_video_status: MM.videoStatus
        }), (0, tr.i)((() => {
          jM.i.register(Wr())
        })), null !== iM.personId && jM.i.identify(iM.personId);
        const {
          logged_in: nM,
          ...QM
        } = PM;
        jM.i.setPersonProperties(QM, {
          ...Dr("initial_", QM),
          ...pr(iM)
        }), this.fpsMonitor = new aM.e({
          onEpisodeStarted: MM => {
            this.capture("low_fps_started", {
              avg_fps: Math.round(MM)
            }), AM.i.Tz("sessionReplayLowFps", {
              low: !0
            })
          },
          onEpisodeEnded: MM => {
            this.capture("low_fps_episode", {
              duration_ms: MM.durationMs,
              min_fps: MM.minFps,
              avg_fps: MM.avgFps
            }), AM.i.Tz("sessionReplayLowFps", {
              low: !1
            })
          }
        }), this.errorLogLink = new pM({
          dashboardHost: null !== (rM = MM.posthog.dashboardHost) && void 0 !== rM ? rM : MM.posthog.apiHost,
          recordingId: iM.recordingId,
          getSessionId: () => jM.i.get_session_id(),
          domRecorded: SM,
          captureError: (MM, rM) => {
            this.captureClientError("logged", MM, rM)
          }
        }), (0, er.annotateLoggedErrors)(((MM, rM) => this.errorLogLink.annotate(MM, rM))), new mr(this).start()
      }
      capture(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        jM.i.capture(MM, rM)
      }
      captureAt(MM, rM, iM) {
        jM.i.capture(MM, rM, {
          timestamp: new Date(iM)
        })
      }
      captureOnExit(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        jM.i.capture(MM, rM, {
          timestamp: new Date(iM)
        })
      }
      captureClientError(MM, rM, iM) {
        this.setFlag("had_error"), this.capture("client_error", {
          kind: MM,
          message: EM(rM).slice(0, 300),
          source: null,
          error_name: null,
          ...iM
        })
      }
      takeFullSnapshot() {
        if (this.tryFullSnapshot()) return;
        const MM = performance.now() + 1500,
          rM = setInterval((() => {
            (this.tryFullSnapshot() || performance.now() >= MM) && clearInterval(rM)
          }), 100)
      }
      upgradeToFullRecording(MM, rM) {
        var iM;
        this.onDomBatch = rM, this.patchRecorder(), this.expectedSessionId = MM.recordingId, this.timeline.setUploadToken(MM.uploadToken), this.errorLogLink.setRecording(MM.recordingId), null !== (iM = jM.i.sessionManager) && void 0 !== iM && iM.setBootstrapSessionId(MM.recordingId) || console.warn(`Session replay: PostHog rejected session id ${MM.recordingId}; events carry recording_id.`), jM.i.register({
          ...MM.tags,
          ...sr(MM, !0)
        }), jM.i.startSessionRecording({
          sampling: !0
        }), this.takeFullSnapshot()
      }
      setVideoStatus(MM, rM) {
        jM.i.register({
          replay_video_status: MM
        });
        const iM = "stopped_cellular" === MM ? "cellular" : "stopped_error" === MM ? "error" : null;
        null !== iM && (this.capture("replay_video_stopped", {
          reason: iM,
          detail: null === rM ? null : EM(rM).slice(0, 300)
        }), this.addReplayMarker("replay_video_stopped", {
          reason: iM
        }))
      }
      stopDomRecording() {
        jM.i.stopSessionRecording(), jM.i.register({
          dom_recorded: !1
        })
      }
      optOut() {
        jM.i.stopSessionRecording(), jM.i.set_config({
          before_send: () => null
        })
      }
      takeDomBatch(MM) {
        null !== this.onDomBatch ? this.onDomBatch(MM) : console.warn("Session replay: posthog-js recorded the page of an events-only recording; dropped it")
      }
      tryFullSnapshot() {
        var MM;
        return !(null === (MM = jM.i.sessionRecording) || void 0 === MM || !MM.started) && (gr().rrweb.record.takeFullSnapshot(), !0)
      }
      patchRecorder() {
        this.recorderPatched || (this.recorderPatched = !0, function() {
          const MM = gr().rrwebPlugins,
            rM = MM.getRecordConsolePlugin;
          MM.getRecordConsolePlugin = () => rM({
            level: ["warn", "error", "assert"]
          })
        }(), this.markClockOnFullSnapshots())
      }
      markClockOnFullSnapshots() {
        const MM = gr().rrweb.record,
          rM = MM.takeFullSnapshot;
        MM.takeFullSnapshot = MM => {
          rM(MM), this.markClock()
        }
      }
      markClock() {
        this.clockMarked = this.addReplayMarker(SM.r.clock, {
          epochMs: (0, Gr.e)(),
          perfNowMs: performance.now()
        }) || this.clockMarked
      }
      markClockIfDue(MM, rM) {
        this.clockMarked && MM % rM !== 0 || this.markClock()
      }
      addReplayMarker(MM) {
        var rM, iM;
        let OM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return null !== (rM = null === (iM = jM.i.sessionRecording) || void 0 === iM ? void 0 : iM.tryAddCustomEvent(MM, OM)) && void 0 !== rM && rM
      }
      gameJoined(MM, rM) {
        this.unregisterGameContext(), this.gameContextKeys = Object.keys(rM), jM.i.register(rM), this.firstGameJoined || (this.firstGameJoined = !0, jM.i.setPersonProperties(void 0, {
          first_game_ever: rM.game_name,
          first_game_ever_with_variation: rM.game_name_with_variation,
          first_game_ever_analytics_id: rM.game_analytics_id
        })), this.tags.gameJoined(MM, Date.now()), this.updateTags()
      }
      addGameContext(MM) {
        for (const rM of Object.keys(MM)) this.gameContextKeys.includes(rM) || this.gameContextKeys.push(rM);
        jM.i.register(MM)
      }
      gameLeft() {
        this.unregisterGameContext(), this.tags.gameLeft(Date.now()), this.fpsMonitor.endEpisode(Date.now()), this.updateTags()
      }
      setFlag(MM) {
        this.tags.setFlag(MM) && this.updateTags()
      }
      addHitch(MM) {
        this.tags.addHitch(MM) && this.updateTags()
      }
      setSessionProperties(MM) {
        jM.i.register(MM), jM.i.setPersonProperties(MM)
      }
      addPingSample(MM) {
        this.tags.addPingSample(MM) && this.updateTags()
      }
      addFpsSample(MM) {
        this.fpsMonitor.addSample(MM, Date.now());
        const rM = this.fpsMonitor.getTags();
        null !== rM && (this.tags.setFpsTags(rM), this.updateTags())
      }
      addUnboundKeyPresses(MM) {
        this.tags.addUnboundKeyPresses(MM), this.updateTags()
      }
      finalTags() {
        return this.fpsMonitor.endEpisode(Date.now()), this.tags.toProperties(Date.now())
      }
      updateTags() {
        const MM = this.tags.toProperties(),
          rM = JSON.stringify(MM);
        rM !== this.lastTagsJson && (this.lastTagsJson = rM, jM.i.register(MM), null === this.personUpdateTimer && (this.personUpdateTimer = setTimeout((() => {
          this.personUpdateTimer = null, jM.i.setPersonProperties(this.tags.toProperties())
        }), 0)))
      }
      unregisterGameContext() {
        for (const MM of this.gameContextKeys) jM.i.unregister(MM);
        this.gameContextKeys = []
      }
    }
  },
  34785: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM
    });
    const OM = 20;
    let SM = Date.now() - performance.now();

    function jM() {
      const MM = performance.now(),
        rM = Date.now();
      return Math.abs(rM - (MM + SM)) > OM && (SM = rM - MM), MM + SM
    }
  },
  34639: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM,
      h: () => jM,
      k: () => SM
    });
    const OM = 32768;

    function SM(MM) {
      return (new TextEncoder).encode(MM).byteLength
    }
    const jM = new class {
      constructor() {
        this.inFlightBytes = 0, this.inFlightLabels = new Map
      }
      async fetch(MM, rM, iM, OM) {
        if (this.inFlightBytes + iM > 49152) return await fetch(MM, rM);
        this.inFlightBytes += iM, this.countLabel(OM, 1);
        const SM = () => {
          this.inFlightBytes -= iM, this.countLabel(OM, -1)
        };
        let jM;
        try {
          jM = await fetch(MM, {
            ...rM,
            keepalive: !0
          })
        } catch (PM) {
          var aM;
          if (SM(), null !== (aM = rM.signal) && void 0 !== aM && aM.aborted) throw PM;
          return console.info("Session replay keepalive request failed; retrying without keepalive.", PM), await fetch(MM, rM)
        }
        return SM(), jM
      }
      isInFlight(MM) {
        var rM;
        return (null !== (rM = this.inFlightLabels.get(MM)) && void 0 !== rM ? rM : 0) > 0
      }
      sendBeacon(MM, rM) {
        const iM = SM(rM);
        return !(this.inFlightBytes + iM > 57344) && this.beaconSent(navigator.sendBeacon(MM, new Blob([rM], {
          type: "text/plain"
        })), iM)
      }
      sendUploadBeacon(MM, rM, iM) {
        return !(this.inFlightBytes + iM > 40960) && this.beaconSent(navigator.sendBeacon(MM, rM), iM)
      }
      countLabel(MM, rM) {
        var iM;
        void 0 !== MM && this.inFlightLabels.set(MM, (null !== (iM = this.inFlightLabels.get(MM)) && void 0 !== iM ? iM : 0) + rM)
      }
      beaconSent(MM, rM) {
        return MM && (this.inFlightBytes += rM, setTimeout((() => {
          this.inFlightBytes -= rM
        }), 1e4)), MM
      }
    }
  },
  5479: (MM, rM, iM) => {
    iM.d(rM, {
      A: () => LM,
      E: () => HM,
      G: () => zM,
      J: () => aM,
      c: () => jM,
      g: () => lM,
      h: () => EM,
      j: () => dM,
      l: () => JM,
      o: () => nM,
      r: () => yM,
      s: () => QM,
      v: () => hM,
      w: () => PM,
      x: () => mM
    });
    const OM = {
        maxFps: 30,
        bitrate: 178e4,
        minBitrate: 5e5,
        maxMacroblocks: 3600,
        keyframeIntervalMs: 2e3,
        segmentDurationMs: 3e4,
        manifestIntervalMs: 3e4,
        partDurationMs: 4e3,
        captureBudgetMsPerSecond: 20,
        captureFrameCostFloorMs: .6,
        softwareEncoderOnWindows: !0
      },
      SM = {
        ...OM,
        maxFps: 15,
        bitrate: 5e5,
        maxMacroblocks: 2040,
        softwareEncoderOnWindows: !1
      },
      jM = {
        desktop: OM,
        mobile: SM,
        tablet: SM
      };

    function aM(MM, rM) {
      return {
        ...jM[rM],
        ...MM
      }
    }
    const PM = "/index/replay/segment-upload-url",
      nM = "/index/replay/manifest",
      QM = 65536;

    function zM(MM) {
      return {
        count: Math.ceil(MM.segmentDurationMs / MM.partDurationMs) + 1,
        maxBytes: Math.ceil(1.5 * MM.bitrate / 8 * (MM.partDurationMs / 1e3)) + 32768
      }
    }
    const LM = "/index/studio/replay-segment-urls",
      mM = 20,
      HM = 50,
      hM = 6e4,
      JM = 432e5,
      dM = "Chat",
      yM = {
        clock: "bloxd-clock",
        active: "bloxd-active",
        death: "player_death",
        error: "error"
      },
      lM = {
        FullSnapshot: 2,
        IncrementalSnapshot: 3,
        Meta: 4,
        Custom: 5,
        Plugin: 6
      },
      EM = {
        Mutation: 0,
        MouseMove: 1,
        MouseInteraction: 2,
        Scroll: 3,
        ViewportResize: 4,
        Input: 5,
        TouchMove: 6,
        MediaInteraction: 7,
        StyleSheetRule: 8,
        Drag: 12
      }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);