export const id = 61;
export const ids = [61];
export const modules = {
  35120: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      ReplayPostHog: () => ie
    });
    var JV = xV(660),
      YV = xV(5589),
      UV = xV(35129),
      yV = xV(35103);
    const pV = new Set(["partycode", "lobby", "vm", "invite", "invitecode", "code", "token", "access_token", "id_token", "refresh_token", "auth", "key", "state", "ticket", "jointicket", "secret", "password", "sig", "signature"]),
      QV = new Set(["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "bfcid", "irclid", "_kx"]),
      nV = "redacted",
      wV = /([?&#])([^=&#?\s"']+)=([^&#?\s"'<>\\]*)/g,
      ZV = /(\/play\/[^/?#\s"'<>\\]+\/)[^/?#\s"'<>\\]+/gi,
      vV = /\/play\//i,
      rV = /lobby|party/i;

    function kV(VV) {
      try {
        return decodeURIComponent(VV)
      } catch {
        return null
      }
    }

    function bV(VV) {
      const eV = VV.includes("%") ? kV(VV) : null;
      if (null === eV || eV === VV) return VV;
      let xV = EV(`?${eV}`).slice(1);
      return xV === eV && (xV = bV(eV)), xV === eV ? VV : encodeURIComponent(xV)
    }

    function EV(VV) {
      return VV.includes("=") || vV.test(VV) ? VV.replace(wV, ((VV, eV, xV, JV) => {
        var YV;
        const UV = (null !== (YV = kV(xV)) && void 0 !== YV ? YV : xV).toLowerCase();
        if (pV.has(UV) || QV.has(UV) && "" !== JV) return `${eV}${xV}=${nV}`;
        const yV = bV(JV);
        return yV === JV ? VV : `${eV}${xV}=${yV}`
      })).replace(ZV, `$1${nV}`) : VV
    }
    const BV = new Set(["href", "src", "srcset", "action", "formaction", "poster", "xlink:href"]);

    function jV(VV, eV) {
      return BV.has(VV.toLowerCase()) ? EV(eV) : eV
    }

    function qV(VV) {
      return rV.test(VV) ? nV : EV(VV)
    }

    function tV(VV) {
      if (VV)
        for (const [eV, xV] of Object.entries(VV)) "string" === typeof xV && (VV[eV] = EV(xV))
    }

    function FV(VV) {
      var eV;
      Array.isArray(VV.payload) && (VV.payload = (eV = VV.payload).some((VV => "string" === typeof VV && rV.test(VV))) ? [JSON.stringify(nV)] : eV.map((VV => "string" === typeof VV ? EV(VV) : VV))), Array.isArray(VV.trace) && (VV.trace = VV.trace.map((VV => "string" === typeof VV ? EV(VV) : VV)))
    }

    function TV(VV) {
      if (null === VV) return null;
      const eV = VV.properties.$snapshot_data;
      return tV(VV.properties), tV(VV.properties.$set), tV(VV.properties.$set_once), tV(VV.$set), tV(VV.$set_once),
        function(VV) {
          if (Array.isArray(VV))
            for (const eV of VV) {
              const VV = null === eV || void 0 === eV ? void 0 : eV.data;
              if (!VV || "object" !== typeof VV) continue;
              "string" === typeof VV.href && (VV.href = EV(VV.href));
              const xV = VV.payload;
              xV && "object" === typeof xV && (eV.type === YV.d.Plugin && "string" === typeof VV.plugin && VV.plugin.includes("console") ? FV(xV) : tV(xV))
            }
        }(eV), VV
    }
    const PV = `.${YV.i}`,
      AV = ["iframe", "script", 'link:not([rel~="stylesheet"])', ".AdBannerContainer > [id]", "#GenericVideoInner", "ins.adsbygoogle", '[id^="google_ads_"]', "[data-replay-hidden]"],
      NV = [".PartyCode", ".InviteLinkInner", ".InviteLinkBoxDescription", ".InGameHeaderLobbyName", ".RecentlyPlayedLobby", ".ProfilePreviewStatus", ".PartyJoinLocationText", ".PadKeyboardPreviewText", ".PadKeyboardPhraseRow"].join(", ");

    function XV(VV, eV) {
      return null !== eV && void 0 !== eV && eV.closest(PV) ? VV : "*".repeat(VV.length)
    }

    function MV(VV) {
      return {
        api_host: VV.apiHost,
        persistence: "memory",
        bootstrap: {
          distinctID: VV.deviceId,
          isIdentifiedID: !1,
          sessionID: VV.recordingId
        },
        person_profiles: "always",
        mask_personal_data_properties: !0,
        session_idle_timeout_seconds: 36e3,
        disable_external_dependency_loading: !0,
        opt_out_useragent_filter: VV.allowAutomatedBrowsers,
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
        before_send: eV => {
          const xV = TV(eV);
          return null === xV || ("$snapshot" === xV.event ? function(VV, eV) {
            const {
              $snapshot_data: xV,
              $window_id: JV,
              distinct_id: YV
            } = VV.properties;
            try {
              eV({
                distinctId: String(YV),
                windowId: JV,
                events: xV
              })
            } catch (UV) {
              console.error("Session replay couldn't take a page recording batch.", UV)
            }
          }(xV, VV.onDomBatch) : VV.onTimelineEvent(xV)), null
        },
        disable_session_recording: !VV.recordDom,
        session_recording: {
          captureCanvas: {
            recordCanvas: !1
          },
          blockSelector: [...AV, (eV = VV.ownOrigins, `img[src^="http"]${eV.map((VV=>`:not([src^="${VV}/"])`)).join("")}`)].join(", "),
          inlineStylesheetBudgetRules: 200,
          maskAllInputs: !0,
          maskInputFn: XV,
          maskTextSelector: NV,
          maskAttributeFn: jV,
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
      var eV
    }
    class zV {
      constructor(VV) {
        this.options = VV, this.buckets = new Map, this.lastEvictionMs = -1 / 0
      }
      allow(VV, eV) {
        this.evictExpired(VV, eV);
        let xV = this.buckets.get(VV);
        var JV, YV;
        (void 0 === xV || eV - xV.startMs >= this.options.windowMs) && (xV = {
          startMs: eV,
          count: 0,
          suppressed: null !== (JV = null === (YV = xV) || void 0 === YV ? void 0 : YV.suppressed) && void 0 !== JV ? JV : 0
        }, this.buckets.set(VV, xV));
        if (xV.count >= this.options.maxPerWindow) return xV.suppressed++, null;
        xV.count++;
        const UV = xV.suppressed;
        return xV.suppressed = 0, UV
      }
      evictExpired(VV, eV) {
        if (!(eV - this.lastEvictionMs < this.options.windowMs)) {
          this.lastEvictionMs = eV;
          for (const [xV, JV] of this.buckets) {
            const YV = (eV - JV.startMs) / this.options.windowMs;
            xV !== VV && YV >= (0 === JV.suppressed ? 1 : 10) && this.buckets.delete(xV)
          }
        }
      }
    }

    function GV(VV, eV, xV) {
      const JV = new URL(VV);
      return JV.pathname = `${JV.pathname.replace(/\/+$/,"")}/replay/${encodeURIComponent(eV)}`, JV.searchParams.set("timestamp", String(Math.round(xV - 5e3))), JV.toString()
    }
    class WV {
      constructor(VV) {
        this.options = VV, this.throttle = new zV({
          maxPerWindow: 3,
          windowMs: 6e4
        }), this.recordingId = void 0, this.domRecorded = void 0, this.recordingId = VV.recordingId, this.domRecorded = VV.domRecorded
      }
      setRecording(VV) {
        this.recordingId = VV, this.domRecorded = !0
      }
      annotate(VV, eV) {
        const xV = Date.now(),
          JV = this.throttle.allow("logged", xV);
        var YV;
        null !== JV && this.options.captureError(VV.message || VV.name, {
          error_name: VV.name || null,
          error_fingerprint: null !== (YV = eV.fingerprint) && void 0 !== YV ? YV : null,
          suppressed_since_last: JV
        });
        return {
          replay_recording_id: this.recordingId,
          ...this.domRecorded ? {
            replay_url: GV(this.options.dashboardHost, this.options.getSessionId(), xV)
          } : {}
        }
      }
    }

    function RV(VV) {
      return VV < 50 ? "<50" : VV < 100 ? "50-100" : VV < 200 ? "100-200" : VV < 400 ? "200-400" : "400+"
    }
    class gV {
      constructor() {
        this.gamesJoined = [], this.flags = new Set, this.firstGame = null, this.fpsTags = null, this.maxHitchMs = 0, this.pingSumMs = 0, this.pingSamples = 0, this.maxPingMs = 0, this.unboundKeyPresses = new Map
      }
      gameJoined(VV, eV) {
        this.gamesJoined.includes(VV) || this.gamesJoined.push(VV), null === this.firstGame && (this.firstGame = {
          joinedAtMs: eV,
          leftAtMs: null
        })
      }
      gameLeft(VV) {
        null !== this.firstGame && null === this.firstGame.leftAtMs && (this.firstGame.leftAtMs = VV)
      }
      setFlag(VV) {
        return !this.flags.has(VV) && (this.flags.add(VV), !0)
      }
      setFpsTags(VV) {
        this.fpsTags = VV
      }
      addHitch(VV) {
        return !(VV <= this.maxHitchMs) && (this.maxHitchMs = VV, !0)
      }
      addPingSample(VV) {
        const eV = this.pingTags();
        this.pingSumMs += VV, this.pingSamples++, this.maxPingMs = Math.max(this.maxPingMs, VV);
        const xV = this.pingTags();
        return (null === eV || void 0 === eV ? void 0 : eV.ping_avg_bucket) !== (null === xV || void 0 === xV ? void 0 : xV.ping_avg_bucket) || (null === eV || void 0 === eV ? void 0 : eV.ping_max_bucket) !== (null === xV || void 0 === xV ? void 0 : xV.ping_max_bucket)
      }
      addUnboundKeyPresses(VV) {
        for (const [xV, JV] of VV) {
          var eV;
          this.unboundKeyPresses.set(xV, (null !== (eV = this.unboundKeyPresses.get(xV)) && void 0 !== eV ? eV : 0) + JV)
        }
      }
      toProperties() {
        var VV;
        let eV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return {
          ...{
            first_game: null !== (VV = this.gamesJoined[0]) && void 0 !== VV ? VV : "",
            games_joined: this.gamesJoined.join(","),
            games_joined_count: this.gamesJoined.length,
            quick_quit: this.isQuickQuit(eV),
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
        let VV = 0,
          eV = "",
          xV = 0;
        for (const [JV, YV] of this.unboundKeyPresses) VV += YV, (YV > xV || YV === xV && JV < eV) && (eV = JV, xV = YV);
        return {
          unbound_key_presses: VV,
          top_unbound_key: eV
        }
      }
      pingTags() {
        return 0 === this.pingSamples ? null : {
          ping_avg_bucket: RV(this.pingSumMs / this.pingSamples),
          ping_max_bucket: RV(this.maxPingMs)
        }
      }
      isQuickQuit(VV) {
        var eV;
        if (null === this.firstGame) return !1;
        const xV = null !== (eV = this.firstGame.leftAtMs) && void 0 !== eV ? eV : VV;
        return null !== xV && xV - this.firstGame.joinedAtMs < YV.y
      }
    }
    var DV = xV(1252),
      iV = xV(1108),
      CV = xV(375),
      aV = xV(1117),
      oV = xV(1099),
      cV = xV(3091),
      hV = xV(27),
      lV = xV(32),
      LV = xV(3093),
      fV = xV(1391),
      mV = xV(1348),
      KV = xV(99),
      HV = xV(1605),
      uV = xV(2279),
      sV = xV(1725),
      SV = xV(35090);
    const IV = ["keydown", "pointerdown", "touchstart"];
    var dV = xV(1364);
    var OV = xV(35111);
    const Ve = ["quit_after_hitch", "quit_after_death", "quit_during_load", "quit_in_menu", "quit_idle", "quit_after_ad"],
      ee = ["quit_during_load", "quit_after_ad", "quit_after_death", "quit_after_hitch", "quit_idle", "quit_in_menu"];

    function xe(VV) {
      var eV;
      return null !== (eV = ee.find((eV => VV.includes(eV)))) && void 0 !== eV ? eV : "none"
    }

    function Je(VV, eV, xV) {
      return null !== VV && eV - VV < xV
    }
    class Ye {
      constructor() {
        this.history = {
          lastHitchAtMs: null,
          lastDeathAtMs: null,
          lastInputAtMs: null,
          lastAdFinishedAtMs: null,
          adPlaying: !1
        }, this.lastLoadStep = null
      }
      noteInput(VV) {
        this.history.lastInputAtMs = VV
      }
      noteHitch(VV) {
        this.history.lastHitchAtMs = VV
      }
      noteDeath(VV) {
        this.history.lastDeathAtMs = VV
      }
      forgetGame() {
        this.history.lastDeathAtMs = null, this.history.lastHitchAtMs = null
      }
      noteAdStarted() {
        this.history.adPlaying = !0
      }
      noteAdFinished(VV) {
        this.history.adPlaying = !1, this.history.lastAdFinishedAtMs = VV
      }
      noteLoadStep(VV) {
        this.lastLoadStep = VV
      }
      getLastLoadStep() {
        return this.lastLoadStep
      }
      quit(VV) {
        const eV = function(VV, eV) {
            var xV, JV;
            const YV = [];
            return Je(eV.lastHitchAtMs, VV.nowMs, 15e3) && YV.push("quit_after_hitch"), Je(eV.lastDeathAtMs, VV.nowMs, 15e3) && YV.push("quit_after_death"), VV.loading ? YV.push("quit_during_load") : "page" !== VV.quitFrom || VV.inGame && !VV.menuOpen || YV.push("quit_in_menu"), Je(null !== (xV = eV.lastInputAtMs) && void 0 !== xV ? xV : 0, VV.nowMs, 6e4) || YV.push("quit_idle"), (!0 === eV.adPlaying || Je(null !== (JV = eV.lastAdFinishedAtMs) && void 0 !== JV ? JV : null, VV.nowMs, 3e4)) && YV.push("quit_after_ad"), YV
          }(VV, this.history),
          xV = {
            quit_from: VV.quitFrom,
            in_game: VV.inGame,
            quit_reasons: eV.join(","),
            quit_reason: xe(eV)
          };
        var JV;
        eV.includes("quit_during_load") && (xV.last_load_step = null !== (JV = this.lastLoadStep) && void 0 !== JV ? JV : "none");
        null !== VV.gameName && (xV.game_name_with_variation = VV.gameName, xV.game_name = (0, CV.Pb)(VV.gameName));
        for (const YV of Ve) xV[YV] = eV.includes(YV);
        return {
          reasons: eV,
          properties: xV
        }
      }
    }
    class Ue {
      constructor(VV) {
        this.deps = VV, this.quitContext = new Ye, this.loading = !1, this.inGame = !1, this.switching = !1, this.nextLeaveIsNotAQuit = !1, this.pendingQuit = null, this.exited = !1
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
      joinFailed(VV) {
        this.loading = !1, this.nextLeaveIsNotAQuit = this.inGame, this.deps.capture("join_failed", VV)
      }
      disconnected() {
        this.nextLeaveIsNotAQuit = !0
      }
      kickedForAfk(VV) {
        this.nextLeaveIsNotAQuit = !0, this.deps.capture("kicked_afk", {
          game_name_with_variation: VV
        })
      }
      gameLeft(VV) {
        const eV = this.nextLeaveIsNotAQuit || this.deps.isJoinAbandoned(),
          xV = this.switching,
          JV = this.loading;
        if (this.nextLeaveIsNotAQuit = !1, this.switching = !1, this.inGame = !1, null === VV) return;
        if (xV || (this.loading = !1), eV) return void this.quitContext.forgetGame();
        const YV = this.quitContext.quit({
          quitFrom: "game",
          gameName: VV,
          nowMs: this.deps.now(),
          inGame: !0,
          loading: JV,
          menuOpen: !1
        });
        this.quitContext.forgetGame(), xV ? this.captureSwitch(YV) : this.startPendingQuit(YV)
      }
      gameReplayOpened(VV) {
        this.nextLeaveIsNotAQuit = !0, this.gameLeft(VV), this.deps.capture("game_replay_opened", {
          from_game_name_with_variation: VV
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
      pageHidden(VV) {
        if (this.exited) return;
        this.exited = !0;
        const eV = this.pendingQuit;
        null !== eV && (clearTimeout(eV.timer), this.pendingQuit = null, this.deps.onGameQuit(eV.quit), this.deps.captureOnExit("quit_context", eV.quit.properties, eV.atEpochMs));
        const xV = {
            quitFrom: "page",
            gameName: null,
            nowMs: this.deps.now(),
            inGame: this.inGame,
            loading: this.loading,
            menuOpen: this.deps.isMenuOpen()
          },
          JV = this.quitContext.quit(xV);
        this.inGame && this.deps.onGameQuit(JV), this.deps.captureOnExit("quit_context", {
          ...VV,
          ...JV.properties
        })
      }
      pageRestored() {
        this.exited = !1, this.deps.capture("page_restored", {})
      }
      startPendingQuit(VV) {
        this.resolvePendingQuitAsSwitch();
        const eV = {
          quit: VV,
          atEpochMs: Date.now(),
          timer: setTimeout((() => {
            this.pendingQuit === eV && (this.pendingQuit = null, this.deps.onGameQuit(VV), this.deps.capture("quit_context", VV.properties, eV.atEpochMs))
          }), 1e4)
        };
        this.pendingQuit = eV
      }
      resolvePendingQuitAsSwitch() {
        const VV = this.pendingQuit;
        null !== VV && (clearTimeout(VV.timer), this.pendingQuit = null, "string" === typeof VV.quit.properties.game_name_with_variation && this.captureSwitch(VV.quit))
      }
      captureSwitch(VV) {
        this.deps.capture("game_switched", {
          from_game_name_with_variation: VV.properties.game_name_with_variation,
          from_game_name: VV.properties.game_name,
          after_death: VV.reasons.includes("quit_after_death"),
          after_hitch: VV.reasons.includes("quit_after_hitch")
        })
      }
    }
    class ye {
      constructor(VV) {
        this.replay = VV, this.pointerLockThrottle = new zV({
          maxPerWindow: 10,
          windowMs: 6e4
        }), this.counts = new Map, this.game = null, this.timer = null
      }
      start(VV) {
        VV.onUnboundKey((VV => {
          this.onUnboundKey(VV)
        })), VV.onPointerLock((VV => {
          const eV = this.pointerLockThrottle.allow("pointer_lock_changed", Date.now());
          null !== eV && this.replay.capture("pointer_lock_changed", {
            locked: VV,
            in_game: "inGame" === hV.b.get("gameState"),
            menu_open: (0, sV.n)(),
            suppressed_since_last: eV
          })
        })), lV.h.subscribe("leaveGame", (() => {
          this.flush(!1)
        })), document.addEventListener("visibilitychange", (() => {
          document.hidden && this.flush(!0)
        }))
      }
      onUnboundKey(VV) {
        var eV;
        const xV = (0, fV.e)().gameNameWithVariation;
        xV !== this.game && (this.flush(!1), this.game = xV), this.counts.set(VV, (null !== (eV = this.counts.get(VV)) && void 0 !== eV ? eV : 0) + 1), this.timer ??= setTimeout((() => {
          this.flush(!1)
        }), 1e4)
      }
      flush(VV) {
        if (null !== this.timer && (clearTimeout(this.timer), this.timer = null), 0 === this.counts.size) return;
        const eV = (xV = this.counts, [...xV].sort(((VV, eV) => eV[1] - VV[1] || (VV[0] < eV[0] ? -1 : 1))));
        var xV;
        let JV = 0;
        for (const [, UV] of eV) JV += UV;
        const YV = {
          key_counts: Object.fromEntries(eV),
          keys: eV.map((VV => {
            let [eV] = VV;
            return eV
          })).join(","),
          top_key: eV[0][0],
          presses: JV,
          game_name: null === this.game ? null : (0, CV.Pb)(this.game),
          game_name_with_variation: this.game
        };
        this.replay.addUnboundKeyPresses(this.counts), this.counts.clear(), VV ? this.replay.captureOnExit("unbound_keys", YV) : this.replay.capture("unbound_keys", YV)
      }
    }
    var pe = xV(165);

    function Qe(VV) {
      var eV, xV;
      return null !== (eV = null === (xV = pe.i[VV]) || void 0 === xV ? void 0 : xV.toLowerCase()) && void 0 !== eV ? eV : String(VV)
    }
    class ne {
      constructor(VV, eV) {
        this.replay = VV, this.quitContext = eV, this.startedAtMs = null, this.steps = new Map, this.firstGamePlayable = !1
      }
      started() {
        this.startedAtMs = Date.now()
      }
      stepCompleted(VV) {
        if (this.steps.has(VV)) return;
        const eV = performance.now();
        this.steps.set(VV, eV);
        const xV = Qe(VV);
        this.quitContext.noteLoadStep(xV), this.firstGamePlayable || this.replay.capture("game_load_step", {
          load_step: xV,
          step_number: VV,
          ms_since_page_load: Math.round(eV),
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
        let VV = null,
          eV = null;
        for (const [JV, YV] of [...this.steps].sort(((VV, eV) => VV[1] - eV[1]))) null !== eV && (null === VV || YV - eV > VV.ms) && (VV = {
          step: JV,
          ms: YV - eV
        }), eV = YV;
        const xV = null === this.startedAtMs ? null : Date.now() - this.startedAtMs;
        return this.firstGamePlayable = !0, this.ended(), {
          load_ms: xV,
          slowest_load_step: null === VV ? null : Qe(VV.step),
          slowest_load_step_ms: null === VV ? null : Math.round(VV.ms)
        }
      }
      resetSteps() {
        this.steps.clear(), this.quitContext.noteLoadStep(null)
      }
    }
    class we {
      constructor(VV, eV) {
        this.replay = VV, this.quitContext = eV, this.chatThrottle = new zV({
          maxPerWindow: 10,
          windowMs: 6e4
        }), this.settings = hV.b.get("clientEscMenuOptions"), this.pendingSettings = {}, this.settingsTimer = null, this.adRequest = null, this.playingAd = null
      }
      start() {
        lV.h.subscribe("chatSent", (VV => {
          let {
            length: eV
          } = VV;
          null !== this.chatThrottle.allow("chat", Date.now()) && this.replay.capture("chat_sent", {
            length: eV
          })
        })), lV.h.subscribe("purchaseStarted", (VV => {
          let {
            product: eV
          } = VV;
          this.replay.setFlag("purchase_intent"), this.replay.capture("purchase_started", {
            product: eV
          })
        })), lV.h.subscribe("purchaseEnded", (VV => {
          let {
            outcome: eV
          } = VV;
          this.replay.capture("purchase_ended", {
            outcome: eV
          })
        })), lV.h.subscribe("adRequested", (VV => {
          let {
            adKind: eV,
            provider: xV
          } = VV;
          this.adRequest = {
            adKind: eV,
            provider: xV,
            atMs: performance.now()
          }
        })), lV.h.subscribe("appManagerUpdated|soundOnFromAd", (VV => {
          VV && null !== this.playingAd ? this.onAdFinished() : VV || null !== this.playingAd || this.onAdStarted()
        }));
        for (const VV of ["openEverythingMenuName", "openInGameMenuName"]) lV.h.subscribe(`appManagerUpdated|${VV}`, (VV => {
          null !== VV && this.replay.capture("menu_opened", {
            menu: VV
          })
        }));
        lV.h.subscribe("appManagerUpdated|clientEscMenuOptions", (VV => {
          hV.b.isApplyingDefaults ? this.settings = VV : this.onSettingsChanged(VV)
        }))
      }
      onAdStarted() {
        var VV, eV;
        const xV = performance.now(),
          JV = null !== this.adRequest && xV - this.adRequest.atMs < 6e4 ? this.adRequest : null;
        this.adRequest = null, this.playingAd = {
          ad_kind: null !== (VV = null === JV || void 0 === JV ? void 0 : JV.adKind) && void 0 !== VV ? VV : "unknown",
          provider: null !== (eV = null === JV || void 0 === JV ? void 0 : JV.provider) && void 0 !== eV ? eV : null,
          startedAtMs: xV
        }, this.replay.setFlag("ad_shown"), this.quitContext.noteAdStarted(), this.replay.capture("ad_started", this.adProperties(this.playingAd, xV))
      }
      onAdFinished() {
        const VV = performance.now(),
          eV = this.playingAd;
        this.playingAd = null, this.quitContext.noteAdFinished(VV), this.replay.capture("ad_finished", {
          ...this.adProperties(eV, VV),
          ad_ms: Math.round(VV - eV.startedAtMs)
        })
      }
      adProperties(VV, eV) {
        return {
          ad_kind: VV.ad_kind,
          provider: VV.provider,
          minutes_since_page_load: Math.floor(eV / 6e4),
          in_game: "inGame" === hV.b.get("gameState")
        }
      }
      onSettingsChanged(VV) {
        Object.assign(this.pendingSettings, function(VV, eV) {
          const xV = {};
          for (const JV of Object.keys(eV)) VV[JV] !== eV[JV] && (xV[JV] = eV[JV]);
          return xV
        }(this.settings, VV)), this.settings = VV, null !== this.settingsTimer && clearTimeout(this.settingsTimer), this.settingsTimer = setTimeout((() => {
          this.settingsTimer = null, Object.keys(this.pendingSettings).length > 0 && (this.replay.capture("settings_changed", {
            changed_settings: Object.keys(this.pendingSettings),
            values: this.pendingSettings
          }), this.pendingSettings = {})
        }), 2e3)
      }
    }

    function Ze(VV) {
      switch ((0, DV.r)(VV)) {
        case iV.e.DISCORD_GUILD:
          return "discord_guild";
        case iV.e.DISCORD_DM:
          return "discord_dm";
        default:
          return (0, DV.I)(VV) ? "public" : "private"
      }
    }
    class ve {
      constructor(VV) {
        this.replay = VV, this.errorThrottle = new zV({
          maxPerWindow: 3,
          windowMs: 6e4
        }), this.hitchThrottle = new zV({
          maxPerWindow: 5,
          windowMs: 6e4
        }), this.attachedToRender = !1, this.framesThisTick = 0, this.lastTickMs = performance.now(), this.ticks = 0, this.gamesJoined = 0, this.game = null, this.gameJoinedEvent = void 0, this.leaves = void 0, this.joinLoad = void 0, this.deathSubscription = null, this.inputSinceActiveMarker = !1, this.firstInGameInputSent = !1, this.firstMinutePlayedSent = !1, this.gameJoinedEvent = new OV.c(VV), this.leaves = new Ue({
          capture: (eV, xV, JV) => {
            void 0 === JV ? VV.capture(eV, xV) : VV.captureAt(eV, xV, JV)
          },
          captureOnExit: (eV, xV, JV) => {
            VV.captureOnExit(eV, xV, JV)
          },
          onGameQuit: VV => {
            let {
              reasons: eV,
              properties: xV
            } = VV;
            const JV = xV.game_name_with_variation;
            lV.h.QZ("sessionReplayGameQuit", {
              reasons: eV,
              gameName: "string" === typeof JV ? JV : null
            })
          },
          isMenuOpen: sV.n,
          isJoinAbandoned: uV.h,
          now: () => performance.now()
        }), this.joinLoad = new ne(VV, this.leaves.quitContext)
      }
      start() {
        const VV = (0, SV.e)(),
          eV = new ye(this.replay);
        null !== VV && eV.start(VV), this.capturePageLoadTiming();
        const xV = hV.b.get("gameState");
        "inGame" === xV ? this.joinConnectedGame() : "loadingScreen" !== xV && "findingLobby" !== xV || this.leaves.joinStarted(), this.subscribeToGameFlow(), new we(this.replay, this.leaves.quitContext).start(), this.subscribeToErrors(), this.trackInput(), setTimeout((() => {
          ! function(VV) {
            var eV;
            let xV = !1;
            const JV = (eV, JV, YV) => {
              xV || (xV = !0, VV(eV, JV, YV))
            };
            if ("undefined" !== typeof PerformanceObserver && null !== (eV = PerformanceObserver.supportedEntryTypes) && void 0 !== eV && eV.includes("first-input")) {
              const VV = new PerformanceObserver((eV => {
                const [xV] = eV.getEntries();
                VV.disconnect(), JV(xV.name, xV.startTime, !0)
              }));
              return void VV.observe({
                type: "first-input",
                buffered: !0
              })
            }
            const YV = new AbortController,
              UV = VV => {
                YV.abort(), JV(VV.type, VV.timeStamp, !1)
              };
            for (const yV of IV) window.addEventListener(yV, UV, {
              capture: !0,
              passive: !0,
              signal: YV.signal
            })
          }(((VV, eV, xV) => {
            this.replay.capture("first_input", Object.fromEntries([
              ["input_type", VV],
              ["ms_since_page_load", Math.round(eV)],
              ["buffered", xV]
            ]))
          }))
        }), 100), (0, mV.y)((() => {
          this.framesThisTick++
        })), setInterval((() => {
          this.Iq()
        }), 1e3), window.addEventListener("pagehide", (() => {
          this.gameJoinedEvent.flush(!0), eV.flush(!0), this.leaves.pageHidden(this.replay.finalTags())
        })), window.addEventListener("pageshow", (VV => {
          VV.persisted && this.leaves.pageRestored()
        }))
      }
      trackInput() {
        const VV = VV => {
          var eV, xV;
          this.inputSinceActiveMarker = !0, this.leaves.quitContext.noteInput(VV.timeStamp);
          const JV = null !== (eV = null === (xV = this.game) || void 0 === xV ? void 0 : xV.playableAtMs) && void 0 !== eV ? eV : null;
          this.firstInGameInputSent || null === JV || this.onFirstInGameInput(VV.type, JV)
        };
        for (const eV of ["keydown", "pointerdown", "pointermove", "wheel"]) window.addEventListener(eV, VV, {
          capture: !0,
          passive: !0
        })
      }
      onFirstInGameInput(VV, eV) {
        this.firstInGameInputSent = !0, this.replay.capture("first_ingame_input", Object.fromEntries([
          ["input_type", VV],
          ["ms_since_playable", Date.now() - eV],
          ["ms_since_page_load", Math.round(performance.now())]
        ]))
      }
      capturePageLoadTiming() {
        const VV = performance.getEntriesByType("navigation")[0],
          eV = performance.getEntriesByName("first-contentful-paint")[0];
        this.replay.capture("page_load_timing", {
          ttfb_ms: VV ? Math.round(VV.responseStart) : null,
          first_contentful_paint_ms: eV ? Math.round(eV.startTime) : null,
          dom_content_loaded_ms: VV ? Math.round(VV.domContentLoadedEventEnd) : null,
          load_ms: VV ? Math.round(VV.loadEventEnd) : null,
          transfer_kb: VV ? Math.round(VV.transferSize / 1024) : null,
          recording_started_ms: Math.round(performance.now())
        })
      }
      subscribeToGameFlow() {
        lV.h.subscribe("joinedGame", (VV => {
            let {
              gameNameWithVariation: eV,
              lobbyName: xV
            } = VV;
            (0, uV.h)() || this.onJoinedGame(eV, xV)
          })), lV.h.subscribe("leaveGame", (() => {
            var VV, eV;
            const xV = null !== (VV = null === (eV = this.game) || void 0 === eV ? void 0 : eV.name) && void 0 !== VV ? VV : null;
            this.onLeftGame(), this.leaves.gameLeft(xV)
          })), lV.h.subscribe("replayViewer|replayLoaded", (() => {
            if (null === this.game) return;
            const VV = this.game.name;
            this.onLeftGame(), this.leaves.gameReplayOpened(VV)
          })), lV.h.subscribe("matchmakeAndPlayStepCompleted", (VV => {
            let {
              step: eV
            } = VV;
            this.joinLoad.stepCompleted(eV)
          })), lV.h.subscribe("leftPlayPage", (() => {
            this.leaves.playPageLeft(), this.joinLoad.ended()
          })), lV.h.subscribe("joinFailed", (VV => {
            let {
              step: eV,
              severity: xV
            } = VV;
            this.leaves.joinFailed({
              step: eV,
              severity: xV,
              game_name_with_variation: (0, fV.e)().requestedGameNameWithVariation,
              last_load_step: this.leaves.quitContext.getLastLoadStep()
            }), this.joinLoad.ended()
          })), lV.h.subscribe("kickedForAfk", (() => {
            var VV, eV;
            this.leaves.kickedForAfk(null !== (VV = null === (eV = this.game) || void 0 === eV ? void 0 : eV.name) && void 0 !== VV ? VV : null)
          })), lV.h.subscribe("unwantedLeftGame", (VV => {
            this.leaves.disconnected(), this.replay.setFlag("disconnected"), this.replay.capture("disconnected", {
              reason: VV.reason,
              can_reconnect: VV.canReconnect,
              automatically_reconnect: VV.automaticallyReconnect,
              requires_refresh: VV.requiresRefresh
            })
          })), lV.h.subscribe("appManagerUpdated|gameState", (VV => {
            "loadingScreen" === VV ? this.leaves.joinStarted() : "findingLobby" === VV ? (this.leaves.joinStarted(), this.joinLoad.started(), this.replay.capture("game_loading_started", {
              entry_source: hV.b.get("gameEntrySource")
            })) : "inGame" === VV ? this.onPlayable() : "landingPage" === VV && (this.replay.capture("homepage_viewed"), this.replay.capture("$screen", {
              $screen_name: "homepage"
            }))
          })), lV.h.subscribe("appManagerUpdated|gameEntrySource", (VV => {
            "autoReconnect" !== VV && "manualReconnect" !== VV || this.replay.capture("reconnect_attempted", {
              automatic: "autoReconnect" === VV
            })
          })),
          function(VV) {
            var eV, xV;
            if ("undefined" === typeof PerformanceObserver || null === (eV = null === (xV = PerformanceObserver.supportedEntryTypes) || void 0 === xV ? void 0 : xV.includes("long-animation-frame")) || void 0 === eV || !eV) return;
            let JV = null;
            new PerformanceObserver((eV => {
              for (const UV of eV.getEntries()) {
                var xV, YV;
                const eV = UV,
                  yV = !(null !== JV && eV.startTime - JV.endMs < 50) || eV.duration >= 3 * (null !== (xV = null === (YV = JV) || void 0 === YV ? void 0 : YV.durationMs) && void 0 !== xV ? xV : 0);
                JV = {
                  endMs: eV.startTime + eV.duration,
                  durationMs: eV.duration
                }, !document.hidden && eV.duration >= 100 && yV && VV({
                  frameMs: eV.duration,
                  mainThreadMs: (0, dV.q)(eV)
                })
              }
            })).observe({
              type: "long-animation-frame"
            })
          }((VV => {
            this.onFrameHitch(VV)
          })), lV.h.subscribe("sessionReplayPlayerKill", (VV => {
            let {
              killstreak: eV
            } = VV;
            this.replay.capture("player_kill", {
              killstreak: eV
            })
          }))
      }
      subscribeToErrors() {
        window.addEventListener("error", (VV => {
          const eV = VV.error;
          this.captureError("error", VV.message, VV.filename ? `${VV.filename}:${VV.lineno}:${VV.colno}` : null, eV instanceof Error ? eV.name : null)
        })), window.addEventListener("unhandledrejection", (VV => {
          const eV = VV.reason;
          this.captureError("unhandled_rejection", eV instanceof Error ? eV.message : String(eV), null, eV instanceof Error ? eV.name : null)
        })), lV.h.subscribe("unrecoverableError", (VV => {
          this.captureError("unrecoverable", VV, null, null)
        }))
      }
      captureError(VV, eV, xV, JV) {
        const UV = qV(eV).slice(0, 300),
          yV = this.errorThrottle.allow(`${VV}:${UV}`, Date.now());
        null !== yV && (this.replay.captureClientError(VV, UV, {
          source: xV,
          error_name: JV,
          suppressed_since_last: yV
        }), this.replay.addReplayMarker(YV.t.error, {
          kind: VV,
          message: UV
        }))
      }
      onPlayable() {
        (0, uV.h)() || (0, fV.f)() || (null === this.game && this.joinConnectedGame(), this.replay.capture("game_playable", {
          ms_since_page_load: Math.round(performance.now()),
          ...this.joinLoad.playable()
        }), this.leaves.gamePlayable(), null !== this.game && (this.game.playableAtMs = Date.now()))
      }
      joinConnectedGame() {
        if ((0, fV.f)()) return;
        const {
          gameNameWithVariation: VV,
          lobbyName: eV
        } = (0, fV.e)();
        null !== VV && null !== eV ? this.onJoinedGame(VV, eV) : console.warn("Session replay found a game playable with no game joined; not labelling it")
      }
      onJoinedGame(VV, eV) {
        this.replay.takeFullSnapshot();
        const xV = (0, DV.I)(eV),
          JV = Date.now(),
          YV = "inGame" === hV.b.get("gameState") ? JV : null;
        this.game = {
          joinedAtMs: JV,
          name: VV,
          playableAtMs: YV,
          visiblePlayedMs: 0,
          deaths: 0
        }, this.gamesJoined++, this.leaves.gameJoined();
        const UV = HV.clientSidePartyStateManager.getPartyInformation(),
          yV = {
            game_name: (0, CV.Pb)(VV),
            game_name_with_variation: VV,
            game_number: this.gamesJoined,
            game_analytics_id: (0, aV.i)(VV, xV),
            is_custom_game: (0, oV.l)(VV),
            lobby_type: Ze(eV),
            in_party: null !== UV,
            party_size: null === UV ? 0 : UV.memberSocialPreviews.length + 1
          };
        this.replay.gameJoined(VV, yV), this.gameJoinedEvent.send(VV, {
          ...yV,
          entry_source: hV.b.get("gameEntrySource")
        }, JV), this.subscribeToDeaths(VV)
      }
      onLeftGame() {
        this.joinLoad.forgetStart(), null !== this.game && (this.gameJoinedEvent.flush(), this.replay.capture("game_left", {
          game_name_with_variation: this.game.name,
          duration_ms: Date.now() - this.game.joinedAtMs
        }), this.game = null, this.replay.gameLeft(), lV.h.unsubscribe(this.deathSubscription), this.deathSubscription = null)
      }
      subscribeToDeaths(VV) {
        const eV = (0, LV.d)();
        if (lV.h.unsubscribe(this.deathSubscription), this.deathSubscription = null, !eV) return;
        let xV = !0;
        this.deathSubscription = lV.h.subscribe(`otherEntitySettingsClientifiedEId|${eV.bD}|_isAlive`, (JV => {
          const UV = xV && !JV;
          if (xV = JV, UV) {
            this.leaves.quitContext.noteDeath(performance.now());
            const [xV, JV, UV] = eV.sF.YF(eV.bD), yV = {
              x: Math.round(xV),
              y: Math.round(JV),
              z: Math.round(UV)
            }, pV = this.game, QV = null === pV ? {} : {
              death_number: ++pV.deaths,
              seconds_since_join: Math.round((Date.now() - pV.joinedAtMs) / 1e3)
            };
            this.replay.capture("player_died", {
              ...yV,
              game_name_with_variation: VV,
              ...QV
            }), this.replay.addReplayMarker(YV.t.death, yV)
          }
        }))
      }
      onFrameHitch(VV) {
        let {
          frameMs: eV,
          mainThreadMs: xV
        } = VV;
        const JV = this.game;
        if (null === JV || null === JV.playableAtMs || Date.now() - JV.playableAtMs < 2e3) return;
        (0, sV.n)() || this.leaves.quitContext.noteHitch(performance.now()), this.replay.addHitch(Math.round(eV));
        const YV = this.hitchThrottle.allow("frame_hitch", Date.now());
        null !== YV && this.replay.capture("frame_hitch", {
          zp: Math.round(eV),
          main_thread_ms: Math.round(xV),
          game_name_with_variation: JV.name,
          suppressed_since_last: YV
        })
      }
      Iq() {
        this.attachToRender();
        const VV = performance.now(),
          eV = VV - this.lastTickMs,
          xV = eV <= 5e3,
          JV = this.game;
        if (null !== JV && null !== JV.playableAtMs && !document.hidden && xV && JV.visiblePlayedMs < 6e4 && (JV.visiblePlayedMs += eV, JV.visiblePlayedMs >= 6e4)) {
          const eV = Math.round(VV);
          this.replay.capture("game_played_60s", {
            game_name_with_variation: JV.name,
            ms_since_page_load: eV,
            ...this.firstMinutePlayedSent ? {} : {
              ttff_ms: eV
            }
          }), this.firstMinutePlayedSent = !0
        }
        const UV = null !== this.game && !document.hidden;
        this.replay.addFpsSample(UV && xV && this.framesThisTick > 0 ? 1e3 * this.framesThisTick / eV : null);
        const yV = UV ? cV.e.getLastColyseusPingMs() : null;
        null !== yV && this.replay.addPingSample(yV), this.framesThisTick = 0, this.lastTickMs = VV, this.ticks++, this.ticks % 2 === 0 && (UV && this.inputSinceActiveMarker && this.replay.addReplayMarker(YV.t.active), this.inputSinceActiveMarker = !1), this.replay.markClockIfDue(this.ticks, 30)
      }
      attachToRender() {
        if (this.attachedToRender) return;
        const VV = (0, mV.K)().gameRender();
        null !== VV && (this.attachedToRender = !0, this.replay.setSessionProperties(Object.fromEntries([
          ["renderer", VV.renderer],
          ["gpu_vendor", (0, KV.getGpuVendor)()]
        ])), VV.canvas.addEventListener("webglcontextlost", (() => {
          this.replay.setFlag("had_error"), this.replay.capture("webgl_context_lost")
        })), VV.canvas.addEventListener("webglcontextrestored", (() => {
          this.replay.capture("webgl_context_restored")
        })))
      }
    }
    var re = xV(1241),
      ke = xV(1230),
      be = xV(34892);

    function Ee(VV) {
      return VV.length + 64
    }
    async function Be() {
      return new Response("{}")
    }

    function je(VV, eV, xV) {
      return be.e.fetch(VV, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain"
        },
        body: eV,
        signal: (0, re.u)(3e4)
      }, xV)
    }
    class qe {
      constructor(VV) {
        var eV, xV, JV;
        let YV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.uploadToken = VV, this.url = void 0, this.post = void 0, this.isHidden = void 0, this.queue = [], this.retries = [], this.refusedTokens = new Set, this.overflowWarned = !1, this.unloading = !1, this.sendScheduled = !1, this.url = null !== (eV = YV.url) && void 0 !== eV ? eV : `${ke.clientSideServerUrls.indexUrl}/index/replay/timeline`, this.post = null !== (xV = YV.post) && void 0 !== xV ? xV : je, this.isHidden = null !== (JV = YV.isHidden) && void 0 !== JV ? JV : () => "hidden" === document.visibilityState
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
      setUploadToken(VV) {
        this.uploadToken = VV
      }
      add(VV) {
        if (this.refusedTokens.has(this.uploadToken)) return;
        const eV = function(VV) {
            const eV = {
              ...VV.properties
            };
            return void 0 !== VV.$set && (eV.$set = {
              ...VV.properties.$set,
              ...VV.$set
            }), void 0 !== VV.$set_once && (eV.$set_once = {
              ...VV.$set_once,
              ...VV.properties.$set_once
            }), void 0 !== VV.$unset && (eV.$unset = VV.$unset), {
              uuid: VV.uuid,
              event: VV.event,
              timestampMs: VV.timestamp.getTime(),
              distinctId: String(VV.properties.distinct_id),
              properties: JSON.stringify(eV)
            }
          }(VV),
          xV = (0, be.f)(JSON.stringify(eV));
        eV.properties.length > 32768 || eV.event.length > 64 || eV.distinctId.length > 200 || Ee(this.uploadToken) + xV > 102400 ? console.warn(`Session replay timeline event ${eV.event.slice(0,64)} is too large for index-server; dropped.`) : (this.queue.push({
          uploadToken: this.uploadToken,
          event: eV,
          bytes: xV,
          attempts: 0
        }), this.trimToCap(), this.queue.length >= 50 ? this.sendQueued() : (this.unloading || this.isHidden()) && this.sendSoon())
      }
      sendSoon() {
        this.sendScheduled || (this.sendScheduled = !0, queueMicrotask((() => {
          this.sendScheduled = !1, this.sendQueued()
        })))
      }
      flush() {
        this.retries.length > 0 && (this.queue = [...this.retries, ...this.queue].sort(((VV, eV) => VV.event.timestampMs - eV.event.timestampMs)), this.retries = []), this.sendQueued()
      }
      sendQueued() {
        for (; this.queue.length > 0;) {
          const VV = this.takeBatch();
          this.refusedTokens.has(VV.uploadToken) || this.send(VV)
        }
      }
      trimToCap() {
        let VV = this.retries.length + this.queue.length - 1e3;
        if (VV <= 0) return void(this.overflowWarned = !1);
        const eV = Math.min(VV, this.retries.length);
        this.retries.splice(0, eV), VV -= eV, this.queue.splice(0, VV), this.overflowWarned || (this.overflowWarned = !0, console.warn("Session replay timeline queue is full; dropping its oldest events until it drains."))
      }
      takeBatch() {
        const VV = this.queue.shift(),
          eV = [VV];
        let xV = Ee(VV.uploadToken) + VV.bytes;
        for (; this.queue.length > 0 && eV.length < 100 && this.queue[0].uploadToken === VV.uploadToken && xV + this.queue[0].bytes <= 32768;) {
          const VV = this.queue.shift();
          eV.push(VV), xV += VV.bytes
        }
        return {
          uploadToken: VV.uploadToken,
          events: eV
        }
      }
      async send(VV) {
        const eV = await this.sendOnce(VV);
        if ("refused" === eV && this.refusedTokens.add(VV.uploadToken), "retryLater" !== eV) return;
        const xV = VV.events.filter((VV => ++VV.attempts < 3));
        xV.length < VV.events.length && console.error(`Session replay timeline: dropped ${VV.events.length-xV.length} events after 3 attempts.`), this.retries.push(...xV), this.trimToCap()
      }
      async sendOnce(VV) {
        const eV = {
            uploadToken: VV.uploadToken,
            sentAtMs: Date.now(),
            events: VV.events.map((VV => VV.event))
          },
          xV = JSON.stringify(eV);
        let JV, YV = null;
        try {
          JV = await this.post(this.url, xV, (0, be.f)(xV)), JV.ok && (YV = await JV.json())
        } catch (UV) {
          return console.warn("Session replay timeline upload failed.", UV), "retryLater"
        }
        return null === YV ? 408 === JV.status || 429 === JV.status || JV.status >= 500 ? "retryLater" : (console.error(`Session replay timeline upload failed with ${JV.status}; dropped ${VV.events.length} events.`), "dropped") : "rejected" in YV ? YV.retryable ? "retryLater" : (console.warn(`Session replay timeline refused: ${YV.reason}; dropping this recording's events.`), "refused") : "sent"
      }
    }
    var te = xV(138),
      Fe = xV(35045),
      Te = xV(2635),
      Pe = xV(1353),
      Ae = xV(313),
      Ne = xV(4809),
      Xe = xV(701);

    function Me() {
      return window.__PosthogExtensions__
    }

    function ze() {
      var VV;
      const eV = navigator,
        xV = new Date;
      return {
        local_hour: xV.getHours(),
        local_weekday: xV.getDay(),
        ...eV.hardwareConcurrency ? {
          cpu_cores: eV.hardwareConcurrency
        } : {},
        ...eV.deviceMemory ? {
          device_memory_gb: eV.deviceMemory
        } : {},
        ...null !== (VV = eV.connection) && void 0 !== VV && VV.effectiveType ? {
          network_type: eV.connection.effectiveType
        } : {}
      }
    }

    function Ge() {
      const VV = {};
      for (const [eV, xV] of Object.entries(Ae.b)) VV[`ab_${eV}`] = String(xV);
      return VV
    }

    function We(VV) {
      var eV;
      const xV = VV.tags,
        JV = (0, Ne.b)();
      return {
        panel_entry_reason: null !== (eV = xV.recording_reason) && void 0 !== eV ? eV : "unknown",
        panel_entry_date: (new Date).toISOString().slice(0, 10),
        ...null === JV ? {} : {
          panel_entry_visit_number: JV
        },
        ...void 0 === xV.sample_rate ? {} : {
          panel_entry_sample_rate: xV.sample_rate
        }
      }
    }

    function Re() {
      const VV = (0, Ne.b)();
      return null === VV ? {} : {
        visit_number: VV
      }
    }

    function ge(VV, eV) {
      return {
        recording_id: VV.recordingId,
        recording_mode: VV.mode,
        recording_scopes: VV.scopes.join(","),
        dom_recorded: eV
      }
    }

    function De(VV, eV) {
      const xV = {};
      for (const [JV, YV] of Object.entries(eV)) xV[`${VV}${JV}`] = YV;
      return xV
    }
    class ie {
      constructor(VV) {
        var eV;
        this.tags = new gV, this.fpsMonitor = void 0, this.errorLogLink = void 0, this.lastTagsJson = "", this.clockMarked = !1, this.personUpdateTimer = null, this.expectedSessionId = "", this.recorderPatched = !1, this.gameContextKeys = [], this.firstGameJoined = !1, this.timeline = void 0, this.onDomBatch = void 0;
        const {
          recording: xV
        } = VV;
        this.onDomBatch = VV.onDomBatch;
        const YV = null !== VV.onDomBatch;
        YV && this.patchRecorder(), this.timeline = new qe(xV.uploadToken, VV.dryRun ? {
            post: Be
          } : {}), this.timeline.start(),
          function(VV) {
            const eV = {
                supportedCompression: [UV.c.GZipJS],
                hasFeatureFlags: !1,
                sessionRecording: {
                  endpoint: "/s/"
                },
                siteApps: [],
                toolbarParams: {},
                toolbarVersion: "toolbar",
                isAuthenticated: !1
              },
              xV = window;
            xV._POSTHOG_REMOTE_CONFIG = {
              ...xV._POSTHOG_REMOTE_CONFIG,
              [VV]: {
                config: eV
              }
            }
          }(VV.posthog.projectApiKey), UV.g.init(VV.posthog.projectApiKey, MV({
            apiHost: VV.posthog.apiHost,
            recordingId: xV.recordingId,
            deviceId: VV.deviceId,
            recordDom: YV,
            ownOrigins: [window.location.origin, new URL(ke.clientSideServerUrls.s3Url, window.location.href).origin],
            allowAutomatedBrowsers: (0, Te.d)((0, Te.k)(), !1),
            onTimelineEvent: VV => {
              this.timeline.add(VV), "$pageview" === VV.event && VV.properties.$current_url && this.addReplayMarker("$pageview", {
                href: VV.properties.$current_url
              })
            },
            onDomBatch: VV => {
              this.takeDomBatch(VV)
            }
          })), YV && UV.g.startSessionRecording({
            sampling: !0
          }), this.expectedSessionId = xV.recordingId, UV.g.onSessionId((VV => {
            VV !== this.expectedSessionId && console.warn(`Session replay: PostHog session ${VV} differs from recording ${this.expectedSessionId}; events carry recording_id.`)
          }));
        const pV = {
          ...xV.tags,
          site_used: te.siteUsed,
          subsite_used: null !== te.subsiteUsed && void 0 !== te.subsiteUsed ? te.subsiteUsed : "",
          is_iframed: te.isIframed,
          entry_path: location.pathname,
          ...ze(),
          ...Ge(),
          ...ge(xV, YV),
          client_build: JV.e,
          device_id: VV.deviceId,
          ip_group_id: xV.ipGroupId,
          logged_in: xV.loggedIn,
          ...Re(),
          ...null === xV.ipVisitNumber ? {} : {
            ip_visit_number: xV.ipVisitNumber
          }
        };
        UV.g.register(pV), null !== VV.videoStatus && UV.g.register({
          replay_video_status: VV.videoStatus
        }), (0, Xe.n)((() => {
          UV.g.register(Re())
        })), null !== xV.personId && UV.g.identify(xV.personId);
        const {
          logged_in: QV,
          ...nV
        } = pV;
        UV.g.setPersonProperties(nV, {
          ...De("initial_", nV),
          ...We(xV)
        }), this.fpsMonitor = new yV.e({
          onEpisodeStarted: VV => {
            this.capture("low_fps_started", {
              avg_fps: Math.round(VV)
            }), lV.h.QZ("sessionReplayLowFps", {
              low: !0
            })
          },
          onEpisodeEnded: VV => {
            this.capture("low_fps_episode", {
              duration_ms: VV.durationMs,
              min_fps: VV.minFps,
              avg_fps: VV.avgFps
            }), lV.h.QZ("sessionReplayLowFps", {
              low: !1
            })
          }
        }), this.errorLogLink = new WV({
          dashboardHost: null !== (eV = VV.posthog.dashboardHost) && void 0 !== eV ? eV : VV.posthog.apiHost,
          recordingId: xV.recordingId,
          getSessionId: () => UV.g.get_session_id(),
          domRecorded: YV,
          captureError: (VV, eV) => {
            this.captureClientError("logged", VV, eV)
          }
        }), (0, Pe.annotateLoggedErrors)(((VV, eV) => this.errorLogLink.annotate(VV, eV))), new ve(this).start()
      }
      capture(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        UV.g.capture(VV, eV)
      }
      captureAt(VV, eV, xV) {
        UV.g.capture(VV, eV, {
          timestamp: new Date(xV)
        })
      }
      captureOnExit(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        UV.g.capture(VV, eV, {
          timestamp: new Date(xV)
        })
      }
      captureClientError(VV, eV, xV) {
        this.setFlag("had_error"), this.capture("client_error", {
          kind: VV,
          message: qV(eV).slice(0, 300),
          source: null,
          error_name: null,
          ...xV
        })
      }
      takeFullSnapshot() {
        if (this.tryFullSnapshot()) return;
        const VV = performance.now() + 1500,
          eV = setInterval((() => {
            (this.tryFullSnapshot() || performance.now() >= VV) && clearInterval(eV)
          }), 100)
      }
      upgradeToFullRecording(VV, eV) {
        var xV;
        this.onDomBatch = eV, this.patchRecorder(), this.expectedSessionId = VV.recordingId, this.timeline.setUploadToken(VV.uploadToken), this.errorLogLink.setRecording(VV.recordingId), null !== (xV = UV.g.sessionManager) && void 0 !== xV && xV.setBootstrapSessionId(VV.recordingId) || console.warn(`Session replay: PostHog rejected session id ${VV.recordingId}; events carry recording_id.`), UV.g.register({
          ...VV.tags,
          ...ge(VV, !0)
        }), UV.g.startSessionRecording({
          sampling: !0
        }), this.takeFullSnapshot()
      }
      setVideoStatus(VV, eV) {
        UV.g.register({
          replay_video_status: VV
        });
        const xV = "stopped_cellular" === VV ? "cellular" : "stopped_error" === VV ? "error" : null;
        null !== xV && (this.capture("replay_video_stopped", {
          reason: xV,
          detail: null === eV ? null : qV(eV).slice(0, 300)
        }), this.addReplayMarker("replay_video_stopped", {
          reason: xV
        }))
      }
      stopDomRecording() {
        UV.g.stopSessionRecording(), UV.g.register({
          dom_recorded: !1
        })
      }
      optOut() {
        UV.g.stopSessionRecording(), UV.g.set_config({
          before_send: () => null
        })
      }
      takeDomBatch(VV) {
        null !== this.onDomBatch ? this.onDomBatch(VV) : console.warn("Session replay: posthog-js recorded the page of an events-only recording; dropped it")
      }
      tryFullSnapshot() {
        var VV;
        return !(null === (VV = UV.g.sessionRecording) || void 0 === VV || !VV.started) && (Me().rrweb.record.takeFullSnapshot(), !0)
      }
      patchRecorder() {
        this.recorderPatched || (this.recorderPatched = !0, function() {
          const VV = Me().rrwebPlugins,
            eV = VV.getRecordConsolePlugin;
          VV.getRecordConsolePlugin = () => eV({
            level: ["warn", "error", "assert"]
          })
        }(), this.markClockOnFullSnapshots())
      }
      markClockOnFullSnapshots() {
        const VV = Me().rrweb.record,
          eV = VV.takeFullSnapshot;
        VV.takeFullSnapshot = VV => {
          eV(VV), this.markClock()
        }
      }
      markClock() {
        this.clockMarked = this.addReplayMarker(YV.t.clock, {
          epochMs: (0, Fe.c)(),
          perfNowMs: performance.now()
        }) || this.clockMarked
      }
      markClockIfDue(VV, eV) {
        this.clockMarked && VV % eV !== 0 || this.markClock()
      }
      addReplayMarker(VV) {
        var eV, xV;
        let JV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return null !== (eV = null === (xV = UV.g.sessionRecording) || void 0 === xV ? void 0 : xV.tryAddCustomEvent(VV, JV)) && void 0 !== eV && eV
      }
      gameJoined(VV, eV) {
        this.unregisterGameContext(), this.gameContextKeys = Object.keys(eV), UV.g.register(eV), this.firstGameJoined || (this.firstGameJoined = !0, UV.g.setPersonProperties(void 0, {
          first_game_ever: eV.game_name,
          first_game_ever_with_variation: eV.game_name_with_variation,
          first_game_ever_analytics_id: eV.game_analytics_id
        })), this.tags.gameJoined(VV, Date.now()), this.updateTags()
      }
      addGameContext(VV) {
        for (const eV of Object.keys(VV)) this.gameContextKeys.includes(eV) || this.gameContextKeys.push(eV);
        UV.g.register(VV)
      }
      gameLeft() {
        this.unregisterGameContext(), this.tags.gameLeft(Date.now()), this.fpsMonitor.endEpisode(Date.now()), this.updateTags()
      }
      setFlag(VV) {
        this.tags.setFlag(VV) && this.updateTags()
      }
      addHitch(VV) {
        this.tags.addHitch(VV) && this.updateTags()
      }
      setSessionProperties(VV) {
        UV.g.register(VV), UV.g.setPersonProperties(VV)
      }
      addPingSample(VV) {
        this.tags.addPingSample(VV) && this.updateTags()
      }
      addFpsSample(VV) {
        this.fpsMonitor.addSample(VV, Date.now());
        const eV = this.fpsMonitor.getTags();
        null !== eV && (this.tags.setFpsTags(eV), this.updateTags())
      }
      addUnboundKeyPresses(VV) {
        this.tags.addUnboundKeyPresses(VV), this.updateTags()
      }
      finalTags() {
        return this.fpsMonitor.endEpisode(Date.now()), this.tags.toProperties(Date.now())
      }
      updateTags() {
        const VV = this.tags.toProperties(),
          eV = JSON.stringify(VV);
        eV !== this.lastTagsJson && (this.lastTagsJson = eV, UV.g.register(VV), null === this.personUpdateTimer && (this.personUpdateTimer = setTimeout((() => {
          this.personUpdateTimer = null, UV.g.setPersonProperties(this.tags.toProperties())
        }), 0)))
      }
      unregisterGameContext() {
        for (const VV of this.gameContextKeys) UV.g.unregister(VV);
        this.gameContextKeys = []
      }
    }
  },
  35045: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV
    });
    const JV = 20;
    let YV = Date.now() - performance.now();

    function UV() {
      const VV = performance.now(),
        eV = Date.now();
      return Math.abs(eV - (VV + YV)) > JV && (YV = eV - VV), VV + YV
    }
  },
  34892: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV,
      e: () => UV,
      f: () => YV
    });
    const JV = 32768;

    function YV(VV) {
      return (new TextEncoder).encode(VV).byteLength
    }
    const UV = new class {
      constructor() {
        this.inFlightBytes = 0, this.inFlightLabels = new Map
      }
      async fetch(VV, eV, xV, JV) {
        if (this.inFlightBytes + xV > 49152) return await fetch(VV, eV);
        this.inFlightBytes += xV, this.countLabel(JV, 1);
        const YV = () => {
          this.inFlightBytes -= xV, this.countLabel(JV, -1)
        };
        let UV;
        try {
          UV = await fetch(VV, {
            ...eV,
            keepalive: !0
          })
        } catch (pV) {
          var yV;
          if (YV(), null !== (yV = eV.signal) && void 0 !== yV && yV.aborted) throw pV;
          return console.info("Session replay keepalive request failed; retrying without keepalive.", pV), await fetch(VV, eV)
        }
        return YV(), UV
      }
      isInFlight(VV) {
        var eV;
        return (null !== (eV = this.inFlightLabels.get(VV)) && void 0 !== eV ? eV : 0) > 0
      }
      sendBeacon(VV, eV) {
        const xV = YV(eV);
        return !(this.inFlightBytes + xV > 57344) && this.beaconSent(navigator.sendBeacon(VV, new Blob([eV], {
          type: "text/plain"
        })), xV)
      }
      sendUploadBeacon(VV, eV, xV) {
        return !(this.inFlightBytes + xV > 40960) && this.beaconSent(navigator.sendBeacon(VV, eV), xV)
      }
      countLabel(VV, eV) {
        var xV;
        void 0 !== VV && this.inFlightLabels.set(VV, (null !== (xV = this.inFlightLabels.get(VV)) && void 0 !== xV ? xV : 0) + eV)
      }
      beaconSent(VV, eV) {
        return VV && (this.inFlightBytes += eV, setTimeout((() => {
          this.inFlightBytes -= eV
        }), 1e4)), VV
      }
    }
  },
  5589: (VV, eV, xV) => {
    xV.d(eV, {
      B: () => pV,
      D: () => vV,
      H: () => ZV,
      I: () => rV,
      K: () => wV,
      N: () => yV,
      b: () => UV,
      d: () => jV,
      h: () => qV,
      i: () => EV,
      l: () => bV,
      p: () => QV,
      t: () => BV,
      x: () => nV,
      y: () => kV
    });
    const JV = {
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
      YV = {
        ...JV,
        maxFps: 15,
        bitrate: 5e5,
        maxMacroblocks: 2040,
        softwareEncoderOnWindows: !1
      },
      UV = {
        desktop: JV,
        mobile: YV,
        tablet: YV
      };

    function yV(VV, eV) {
      return {
        ...UV[eV],
        ...VV
      }
    }
    const pV = "/index/replay/segment-upload-url",
      QV = "/index/replay/manifest",
      nV = 65536;

    function wV(VV) {
      return {
        count: Math.ceil(VV.segmentDurationMs / VV.partDurationMs) + 1,
        maxBytes: Math.ceil(1.5 * VV.bitrate / 8 * (VV.partDurationMs / 1e3)) + 32768
      }
    }
    const ZV = "/index/studio/replay-segment-urls",
      vV = 20,
      rV = 50,
      kV = 6e4,
      bV = 432e5,
      EV = "Chat",
      BV = {
        clock: "bloxd-clock",
        active: "bloxd-active",
        death: "player_death",
        error: "error"
      },
      jV = {
        FullSnapshot: 2,
        IncrementalSnapshot: 3,
        Meta: 4,
        Custom: 5,
        Plugin: 6
      },
      qV = {
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
for (const VV in modules) Object.freeze(modules[VV]);