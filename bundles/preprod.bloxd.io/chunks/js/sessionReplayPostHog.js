export const id = 61;
export const ids = [61];
export const modules = {
  40561: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      ReplayPostHog: () => BG
    });
    var YB = GB(3816),
      DB = GB(40563),
      QB = GB(40546);
    const oB = new Set(["partycode", "lobby", "vm", "invite", "invitecode", "code", "token", "access_token", "id_token", "refresh_token", "auth", "key", "state", "ticket", "jointicket", "secret", "password", "sig", "signature"]),
      jB = new Set(["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "bfcid", "irclid", "_kx", "_gl", "yclid", "srsltid", "mc_eid", "s_kwcid", "ef_id", "_hsenc", "mkt_tok"]),
      yB = "redacted",
      JB = /([?&#])([^=&#?\s"']+)=([^&#?\s"'<>\\]*)/g,
      MB = /(\/play\/[^/?#\s"'<>\\]+\/)[^/?#\s"'<>\\]+/gi,
      PB = /\/play\//i,
      zB = /lobby|party/i;

    function lB(BB) {
      try {
        return decodeURIComponent(BB)
      } catch {
        return null
      }
    }

    function pB(BB) {
      const OB = BB.includes("%") ? lB(BB) : null;
      if (null === OB || OB === BB) return BB;
      let GB = qB(`?${OB}`).slice(1);
      return GB === OB && (GB = pB(OB)), GB === OB ? BB : encodeURIComponent(GB)
    }

    function qB(BB) {
      return BB.includes("=") || PB.test(BB) ? BB.replace(JB, ((BB, OB, GB, YB) => {
        var DB;
        const QB = (null !== (DB = lB(GB)) && void 0 !== DB ? DB : GB).toLowerCase();
        if (oB.has(QB)) return `${OB}${GB}=${yB}`;
        if (jB.has(QB) && "" !== YB) return `${OB}${GB}=<masked>`;
        const JB = pB(YB);
        return JB === YB ? BB : `${OB}${GB}=${JB}`
      })).replace(MB, `$1${yB}`) : BB
    }
    const ZB = new Set(["href", "src", "srcset", "action", "formaction", "poster", "xlink:href"]);

    function NB(BB, OB) {
      return ZB.has(BB.toLowerCase()) ? qB(OB) : OB
    }

    function RB(BB) {
      return zB.test(BB) ? yB : qB(BB)
    }

    function WB(BB) {
      if (BB)
        for (const [OB, GB] of Object.entries(BB)) "string" === typeof GB && (BB[OB] = qB(GB))
    }

    function AB(BB) {
      var OB;
      Array.isArray(BB.payload) && (BB.payload = (OB = BB.payload).some((BB => "string" === typeof BB && zB.test(BB))) ? [JSON.stringify(yB)] : OB.map((BB => "string" === typeof BB ? qB(BB) : BB))), Array.isArray(BB.trace) && (BB.trace = BB.trace.map((BB => "string" === typeof BB ? qB(BB) : BB)))
    }

    function VB(BB) {
      if (null === BB) return null;
      const OB = BB.properties.$snapshot_data;
      return WB(BB.properties), WB(BB.properties.$set), WB(BB.properties.$set_once), WB(BB.$set), WB(BB.$set_once),
        function(BB) {
          if (Array.isArray(BB))
            for (const OB of BB) {
              const BB = null === OB || void 0 === OB ? void 0 : OB.data;
              if (!BB || "object" !== typeof BB) continue;
              "string" === typeof BB.href && (BB.href = qB(BB.href));
              const GB = BB.payload;
              GB && "object" === typeof GB && (OB.type === YB.c.Plugin && "string" === typeof BB.plugin && BB.plugin.includes("console") ? AB(GB) : WB(GB))
            }
        }(OB), BB
    }
    const SB = new Set(["class", "id", "rel", "type", "role", "tabindex", "width", "height", "dir", "lang", "disabled", "hidden", "checked", "selected", "readonly", "draggable", "media", "charset", "crossorigin", "aria-hidden", "aria-expanded", "aria-selected", "aria-pressed", "aria-checked", "aria-disabled", "xmlns", "viewbox", "d", "fill", "stroke", "stroke-width", "transform", "x", "y", "cx", "cy", "r", "points", "x1", "y1", "x2", "y2", "rx", "ry", "opacity", "fill-rule", "clip-rule", "stroke-linecap", "stroke-linejoin", "preserveaspectratio", "xmlns:xlink", "colspan", "rowspan"]),
      nB = new Set(["_csstext", "rr_width", "rr_height", "rr_left", "rr_top", "rr_position", "rr_transform", "rr_display", "rr_scrollleft", "rr_scrolltop", "rr_mediastate", "rr_open_mode"]),
      UB = new Set(["data-pad-key", "data-pad-repeat"]),
      fB = new Set(["href", "src", "srcset", "xlink:href"]),
      kB = new Set(["title", "$title", "message", "detail", "game_display_name"]),
      dB = "img, picture, video";

    function KB(BB, OB, GB) {
      const YB = BB.toLowerCase();
      return "style" === YB ? OB.replace(/url\((?:"[^"]*"|'[^']*'|[^)]*)\)/gi, "none") : fB.has(YB) && "A" !== GB.tagName ? NB(BB, OB) : SB.has(YB) || nB.has(YB) || YB.startsWith("data-pad-") && !UB.has(YB) ? OB : OB.replace(/\S/g, "*")
    }

    function uB(BB) {
      if (!/^(https?:\/\/|\/)/i.test(BB)) return BB;
      let OB;
      try {
        OB = new URL(BB, "https://bloxd.invalid")
      } catch {
        return BB
      }
      const [GB = "", ...YB] = OB.pathname.split("/").slice(1), DB = `/${GB}${YB.some((BB=>""!==BB))?"/*":""}`;
      return BB.startsWith("/") ? DB : `${OB.origin}${DB}`
    }

    function mB(BB) {
      if (BB)
        for (const [OB, GB] of Object.entries(BB)) kB.has(OB) ? delete BB[OB] : "string" === typeof GB && (BB[OB] = uB(GB))
    }

    function IB(BB) {
      ! function(BB) {
        if (Array.isArray(BB))
          for (const OB of BB) {
            const BB = null === OB || void 0 === OB ? void 0 : OB.data;
            BB && "object" === typeof BB && ("string" === typeof BB.href && (BB.href = uB(BB.href)), BB.payload && "object" === typeof BB.payload && mB(BB.payload))
          }
      }(BB.properties.$snapshot_data), mB(BB.properties), "$screen" === BB.event && String(BB.properties.$screen_name).startsWith("custom: ") && (BB.properties.$screen_name = `custom: ${String(BB.properties.game_analytics_id)}`), mB(BB.properties.$set), mB(BB.properties.$set_once), mB(BB.$set), mB(BB.$set_once)
    }
    const FB = YB.h.map((BB => `.${BB}`)).join(", "),
      iB = ["iframe", "script", 'link:not([rel~="stylesheet"])', ".AdBannerContainer > [id]", "#GenericVideoInner", "ins.adsbygoogle", '[id^="google_ads_"]'],
      LB = [".PadKeyboardPreviewText", ".PadKeyboardPhraseRow"].join(", ");

    function gB(BB, OB) {
      return null !== OB && void 0 !== OB && OB.closest(FB) ? BB : BB.replace(/\S/g, "*")
    }

    function rB(BB) {
      const OB = function(BB) {
        return BB.anonymised ? {
          enable_recording_console_log: !1,
          session_recording: {
            blockSelector: [...iB, dB].join(", "),
            maskTextSelector: "*",
            maskTextFn: BB.showsChat ? gB : null,
            maskAttributeFn: KB
          }
        } : {
          enable_recording_console_log: !0,
          session_recording: {
            blockSelector: [...iB, (OB = BB.ownOrigins, `img[src^="http"]${OB.map((BB=>`:not([src^="${BB}/"])`)).join("")}`)].join(", "),
            maskTextSelector: BB.showsChat ? LB : `${LB}, ${FB}`,
            maskAttributeFn: NB
          }
        };
        var OB
      }(BB);
      return {
        api_host: BB.apiHost,
        persistence: "memory",
        bootstrap: {
          distinctID: BB.recordingId,
          isIdentifiedID: !1,
          sessionID: BB.recordingId
        },
        person_profiles: "always",
        mask_personal_data_properties: !0,
        custom_personal_data_properties: [...jB],
        session_idle_timeout_seconds: 36e3,
        disable_external_dependency_loading: !0,
        opt_out_useragent_filter: BB.allowAutomatedBrowsers,
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
        enable_recording_console_log: OB.enable_recording_console_log,
        before_send: OB => {
          const GB = VB(OB);
          return null === GB || (BB.anonymised && IB(GB), "$snapshot" === GB.event ? function(BB, OB) {
            const {
              $snapshot_data: GB,
              $window_id: YB
            } = BB.properties;
            try {
              OB({
                windowId: YB,
                events: GB
              })
            } catch (DB) {
              console.error("Session replay couldn't take a page recording batch.", DB)
            }
          }(GB, BB.onDomBatch) : BB.onTimelineEvent(GB)), null
        },
        disable_session_recording: !BB.recordDom,
        session_recording: {
          captureCanvas: {
            recordCanvas: !1
          },
          inlineStylesheetBudgetRules: 200,
          maskAllInputs: !0,
          recordCrossOriginIframes: !1,
          recordHeaders: !1,
          recordBody: !1,
          sampling: {
            mousemove: 100
          },
          full_snapshot_interval_millis: 9e5,
          session_idle_threshold_ms: 18e5,
          sampleRate: 1,
          ...OB.session_recording
        }
      }
    }

    function XB() {
      return window.__PosthogExtensions__
    }
    var wB = GB(645),
      EB = GB(120);

    function cB() {
      var BB;
      const OB = navigator,
        GB = new Date;
      return {
        local_hour: GB.getHours(),
        local_weekday: GB.getDay(),
        ...OB.hardwareConcurrency ? {
          cpu_cores: OB.hardwareConcurrency
        } : {},
        ...OB.deviceMemory ? {
          device_memory_gb: OB.deviceMemory
        } : {},
        ...null !== (BB = OB.connection) && void 0 !== BB && BB.effectiveType ? {
          network_type: OB.connection.effectiveType
        } : {}
      }
    }

    function hB(BB) {
      var OB;
      const GB = BB.tags;
      return {
        panel_entry_reason: null !== (OB = GB.recording_reason) && void 0 !== OB ? OB : "unknown",
        panel_entry_date: (new Date).toISOString().slice(0, 10),
        ...void 0 === GB.sample_rate ? {} : {
          panel_entry_sample_rate: GB.sample_rate
        }
      }
    }

    function aB(BB, OB) {
      return {
        recording_id: BB.recordingId,
        recording_scopes: BB.scopes.join(","),
        dom_recorded: OB
      }
    }

    function eB(BB, OB) {
      const GB = {};
      for (const [YB, DB] of Object.entries(OB)) GB[`${BB}${YB}`] = DB;
      return GB
    }
    class TB {
      constructor(BB) {
        this.options = BB, this.buckets = new Map, this.lastEvictionMs = -1 / 0
      }
      allow(BB, OB) {
        this.evictExpired(BB, OB);
        let GB = this.buckets.get(BB);
        var YB, DB;
        (void 0 === GB || OB - GB.startMs >= this.options.windowMs) && (GB = {
          startMs: OB,
          count: 0,
          suppressed: null !== (YB = null === (DB = GB) || void 0 === DB ? void 0 : DB.suppressed) && void 0 !== YB ? YB : 0
        }, this.buckets.set(BB, GB));
        if (GB.count >= this.options.maxPerWindow) return GB.suppressed++, null;
        GB.count++;
        const QB = GB.suppressed;
        return GB.suppressed = 0, QB
      }
      evictExpired(BB, OB) {
        if (!(OB - this.lastEvictionMs < this.options.windowMs)) {
          this.lastEvictionMs = OB;
          for (const [GB, YB] of this.buckets) {
            const DB = (OB - YB.startMs) / this.options.windowMs;
            GB !== BB && DB >= (0 === YB.suppressed ? 1 : 10) && this.buckets.delete(GB)
          }
        }
      }
    }

    function bB(BB, OB, GB) {
      const YB = new URL(BB);
      return YB.pathname = `${YB.pathname.replace(/\/+$/,"")}/replay/${encodeURIComponent(OB)}`, YB.searchParams.set("timestamp", String(Math.round(GB - 5e3))), YB.toString()
    }
    class CB {
      constructor(BB) {
        this.options = BB, this.throttle = new TB({
          maxPerWindow: 3,
          windowMs: 6e4
        })
      }
      annotate(BB, OB) {
        const GB = Date.now(),
          YB = this.throttle.allow("logged", GB);
        var DB;
        null !== YB && this.options.captureError(BB.message || BB.name, {
          error_name: BB.name || null,
          error_fingerprint: null !== (DB = OB.fingerprint) && void 0 !== DB ? DB : null,
          suppressed_since_last: YB
        });
        return {
          replay_recording_id: this.options.recordingId,
          ...this.options.domRecorded ? {
            replay_url: bB(this.options.dashboardHost, this.options.getSessionId(), GB)
          } : {}
        }
      }
    }

    function HB(BB) {
      return BB < 50 ? "<50" : BB < 100 ? "50-100" : BB < 200 ? "100-200" : BB < 400 ? "200-400" : "400+"
    }
    class vB {
      constructor() {
        this.gamesJoined = [], this.flags = new Set, this.firstGame = null, this.fpsTags = null, this.maxHitchMs = 0, this.pingSumMs = 0, this.pingSamples = 0, this.maxPingMs = 0, this.unboundKeyPresses = new Map
      }
      gameJoined(BB, OB) {
        this.gamesJoined.includes(BB) || this.gamesJoined.push(BB), null === this.firstGame && (this.firstGame = {
          joinedAtMs: OB,
          leftAtMs: null
        })
      }
      gameLeft(BB) {
        null !== this.firstGame && null === this.firstGame.leftAtMs && (this.firstGame.leftAtMs = BB)
      }
      setFlag(BB) {
        return !this.flags.has(BB) && (this.flags.add(BB), !0)
      }
      setFpsTags(BB) {
        this.fpsTags = BB
      }
      addHitch(BB) {
        return !(BB <= this.maxHitchMs) && (this.maxHitchMs = BB, !0)
      }
      addPingSample(BB) {
        const OB = this.pingTags();
        this.pingSumMs += BB, this.pingSamples++, this.maxPingMs = Math.max(this.maxPingMs, BB);
        const GB = this.pingTags();
        return (null === OB || void 0 === OB ? void 0 : OB.ping_avg_bucket) !== (null === GB || void 0 === GB ? void 0 : GB.ping_avg_bucket) || (null === OB || void 0 === OB ? void 0 : OB.ping_max_bucket) !== (null === GB || void 0 === GB ? void 0 : GB.ping_max_bucket)
      }
      addUnboundKeyPresses(BB) {
        for (const [GB, YB] of BB) {
          var OB;
          this.unboundKeyPresses.set(GB, (null !== (OB = this.unboundKeyPresses.get(GB)) && void 0 !== OB ? OB : 0) + YB)
        }
      }
      toProperties() {
        var BB;
        let OB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return {
          ...{
            first_game: null !== (BB = this.gamesJoined[0]) && void 0 !== BB ? BB : "",
            games_joined: this.gamesJoined.join(","),
            games_joined_count: this.gamesJoined.length,
            quick_quit: this.isQuickQuit(OB),
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
        let BB = 0,
          OB = "",
          GB = 0;
        for (const [YB, DB] of this.unboundKeyPresses) BB += DB, (DB > GB || DB === GB && YB < OB) && (OB = YB, GB = DB);
        return {
          unbound_key_presses: BB,
          top_unbound_key: OB
        }
      }
      pingTags() {
        return 0 === this.pingSamples ? null : {
          ping_avg_bucket: HB(this.pingSumMs / this.pingSamples),
          ping_max_bucket: HB(this.maxPingMs)
        }
      }
      isQuickQuit(BB) {
        var OB;
        if (null === this.firstGame) return !1;
        const GB = null !== (OB = this.firstGame.leftAtMs) && void 0 !== OB ? OB : BB;
        return null !== GB && GB - this.firstGame.joinedAtMs < YB.l
      }
    }
    var sB = GB(1217),
      xB = GB(1053),
      tB = GB(353),
      BO = GB(1061),
      OO = GB(1049),
      GO = GB(3085),
      YO = GB(16),
      DO = GB(2023),
      QO = GB(25),
      oO = GB(1350),
      jO = GB(1299),
      yO = GB(1547),
      JO = GB(2275),
      MO = GB(1699),
      PO = GB(40529),
      zO = GB(92),
      lO = GB(40523),
      pO = GB(1316);
    class qO {
      constructor(BB, OB, GB) {
        this.replay = BB, this.quitContext = OB, this.flows = GB, this.errorThrottle = new TB({
          maxPerWindow: 3,
          windowMs: 6e4
        }), this.hitchThrottle = new TB({
          maxPerWindow: 5,
          windowMs: 6e4
        }), this.attachedToRender = !1
      }
      start() {
        window.addEventListener("error", (BB => {
            const OB = BB.error;
            this.captureError("error", BB.message, BB.filename ? `${BB.filename}:${BB.lineno}:${BB.colno}` : null, OB instanceof Error ? OB.name : null, (0, lO.d)(BB))
          })), window.addEventListener("unhandledrejection", (BB => {
            const OB = BB.reason;
            this.captureError("unhandled_rejection", OB instanceof Error ? OB.message : String(OB), null, OB instanceof Error ? OB.name : null, (0, lO.d)(BB))
          })), QO.o.subscribe("unrecoverableError", (BB => {
            this.captureError("unrecoverable", BB, null, null, !0)
          })),
          function(BB) {
            var OB, GB;
            if ("undefined" === typeof PerformanceObserver || null === (OB = null === (GB = PerformanceObserver.supportedEntryTypes) || void 0 === GB ? void 0 : GB.includes("long-animation-frame")) || void 0 === OB || !OB) return;
            let YB = null;
            new PerformanceObserver((OB => {
              for (const QB of OB.getEntries()) {
                var GB, DB;
                const OB = QB,
                  oB = !(null !== YB && OB.startTime - YB.endMs < 50) || OB.duration >= 3 * (null !== (GB = null === (DB = YB) || void 0 === DB ? void 0 : DB.durationMs) && void 0 !== GB ? GB : 0);
                YB = {
                  endMs: OB.startTime + OB.duration,
                  durationMs: OB.duration
                }, !document.hidden && OB.duration >= 100 && oB && BB({
                  frameMs: OB.duration,
                  mainThreadMs: (0, pO.m)(OB)
                })
              }
            })).observe({
              type: "long-animation-frame"
            })
          }((BB => {
            this.onFrameHitch(BB)
          }))
      }
      attachToRender() {
        if (this.attachedToRender) return;
        const BB = (0, jO.D)().gameRender();
        null !== BB && (this.attachedToRender = !0, this.replay.setSessionProperties(Object.fromEntries([
          ["renderer", BB.renderer],
          ["gpu_vendor", (0, zO.getGpuVendor)()]
        ])), BB.canvas.addEventListener("webglcontextlost", (() => {
          this.replay.setFlag("had_error"), this.replay.capture("webgl_context_lost")
        })), BB.canvas.addEventListener("webglcontextrestored", (() => {
          this.replay.capture("webgl_context_restored")
        })))
      }
      captureError(BB, OB, GB, DB, QB) {
        const oB = RB(OB).slice(0, 300);
        QB && null !== this.flows.stay && this.quitContext.noteError(performance.now());
        const jB = this.errorThrottle.allow(`${BB}:${oB}`, Date.now());
        null !== jB && (this.replay.captureClientError(BB, oB, {
          source: GB,
          error_name: DB,
          suppressed_since_last: jB
        }), this.replay.addReplayMarker(YB.i.error, {
          kind: BB,
          message: oB
        }))
      }
      onFrameHitch(BB) {
        let {
          frameMs: OB,
          mainThreadMs: GB
        } = BB;
        const YB = this.flows.stay;
        if (null === YB || null === YB.playableAtMs || performance.now() - YB.playableAtMs < 2e3) return;
        (0, MO.r)() || this.quitContext.noteHitch(performance.now()), this.replay.addHitch(Math.round(OB));
        const DB = this.hitchThrottle.allow("frame_hitch", Date.now());
        null !== DB && this.replay.capture("frame_hitch", {
          ko: Math.round(OB),
          main_thread_ms: Math.round(GB),
          game_name_with_variation: YB.name,
          suppressed_since_last: DB
        })
      }
    }
    var ZO = GB(7028),
      NO = GB(331);
    class RO {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.steps = BB, this.furthestIndex = -1, this.heldIndex = -1, this.gateIndex = void 0, this.gateIndex = null === OB ? 1 / 0 : BB.indexOf(OB)
      }
      reach(BB) {
        const OB = this.steps.indexOf(BB);
        if (OB > this.gateIndex && this.furthestIndex < this.gateIndex) return this.heldIndex = Math.max(this.heldIndex, OB), null;
        const GB = OB === this.gateIndex ? Math.max(OB, this.heldIndex) : OB;
        return GB <= this.furthestIndex ? null : (this.furthestIndex = GB, GB)
      }
      get furthest() {
        return -1 === this.furthestIndex ? null : this.steps[this.furthestIndex]
      }
      get furthestStepIndex() {
        return this.furthestIndex
      }
    }
    const WO = {
      unbound_key_burst: {
        count: 4,
        windowMs: 5e3
      },
      menu_toggling: {
        count: 4,
        windowMs: 1e4
      },
      block_change_refused: {
        count: 3,
        windowMs: 1e4
      },
      pointer_lock_failed: {
        count: 2,
        windowMs: 1e4
      }
    };
    class AO {
      constructor(BB) {
        this.threshold = BB, this.times = [], this.armed = !0, this.lastAtMs = -1 / 0
      }
      note(BB) {
        const {
          count: OB,
          windowMs: GB
        } = this.threshold;
        if (!this.armed && BB - this.lastAtMs >= GB && (this.armed = !0), this.lastAtMs = BB, !this.armed) return !1;
        for (this.times.push(BB); this.times.length > 0 && BB - this.times[0] >= GB;) this.times.shift();
        return !(this.times.length < OB) && (this.times.length = 0, this.armed = !1, !0)
      }
    }
    class VO {
      constructor(BB) {
        this.onSignal = BB, this.bursts = new Map, this.seen = [], this.signalCount = 0, this.idleCounted = !1;
        for (const [OB, GB] of Object.entries(WO)) this.bursts.set(OB, new AO(GB))
      }
      note(BB, OB) {
        if (this.bursts.get(BB).note(OB)) {
          const {
            count: OB,
            windowMs: GB
          } = WO[BB];
          this.signal(BB, OB, GB)
        }
      }
      checkIdle(BB) {
        let {
          nowMs: OB,
          lastInputAtMs: GB,
          pointerLocked: YB,
          playable: DB,
          visible: QB
        } = BB;
        OB - (null !== GB && void 0 !== GB ? GB : 0) < 3e4 ? this.idleCounted = !1 : !this.idleCounted && YB && DB && QB && (this.idleCounted = !0, this.signal("idle_pointer_locked", 1, 3e4))
      }
      tags() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const OB = BB && !this.seen.includes("rage_quit") ? [...this.seen, "rage_quit"] : this.seen;
        return {
          frustration_score: this.signalCount + (BB ? 1 : 0),
          frustration_signals: OB.join(",")
        }
      }
      signal(BB, OB, GB) {
        this.signalCount++, this.seen.includes(BB) || this.seen.push(BB), this.onSignal(BB, OB, GB)
      }
    }
    const SO = ZO.j.indexOf("first_input"),
      nO = ZO.j.indexOf("first_move"),
      UO = {
        keyboardMouse: "keyboard",
        touch: "touch",
        gamepad: "pad"
      };
    class fO {
      constructor(BB, OB, GB) {
        this.replay = BB, this.quitContext = OB, this.deps = GB, this.ladder = new RO(ZO.d, "first_move"), this.frustration = void 0, this.frustrationThrottle = new TB({
          maxPerWindow: 5,
          windowMs: 6e4
        }), this.activations = new Set, this.currentStay = null, this.moveSubscriptions = [], this.everPlayable = !1, this.everPointerLocked = !1, this.pointerUnlockedAtMs = -1 / 0, this.everythingMenu = null, this.lastGameName = null, this.unsentStepMarkers = [], this.frustration = new VO(((BB, OB, GB) => {
          this.onFrustration(BB, OB, GB)
        })), OB.setFlowProperties((BB => this.quitProperties(BB)))
      }
      get stay() {
        return this.currentStay
      }
      start() {
        var BB;
        this.reachStep("page_loaded"), QO.o.subscribe("sessionReplayStayOpened", (BB => {
          this.resendStay(BB)
        })), QO.o.subscribe("pointerLockUpdate", (BB => {
          this.pointerLockChanged(BB)
        })), QO.o.subscribe("localBlockMined", (() => {
          this.blockBroken()
        })), QO.o.subscribe("blockChangeRefused", (() => {
          this.noteFrustration("block_change_refused")
        })), QO.o.subscribe("controlsTutorialShown", (BB => {
          this.controlsTutorialShown(BB)
        })), QO.o.subscribe("showShopTouchTutorial", (BB => {
          !1 !== BB && this.controlsTutorialShown("shop")
        })), QO.o.subscribe("appManagerUpdated|openInGameMenuName", (BB => {
          this.inGameMenuChanged(BB)
        })), QO.o.subscribe("appManagerUpdated|openEverythingMenuName", (BB => {
          this.everythingMenuChanged(BB)
        })), document.addEventListener("pointerlockerror", (() => {
          this.pointerLockFailed()
        })), null === (BB = (0, PO.b)()) || void 0 === BB || BB.onUnboundKey((() => {
          this.unboundKeyPressed()
        }))
      }
      gameLoading() {
        this.reachStep("game_loading")
      }
      gameJoined(BB, OB, GB) {
        const YB = GB && OB === this.lastGameName;
        this.lastGameName = OB, this.stopWatchingMoves();
        const DB = {
          name: OB,
          joinedAtMs: Date.now(),
          playableAtMs: null,
          visiblePlayedMs: 0,
          deaths: 0,
          ladder: new RO(ZO.j, "first_move"),
          unboundKeyPresses: 0
        };
        return this.currentStay = DB, this.reachStayStep("joined"), BB >= 2 && !YB && this.reachStep("second_game"), DB
      }
      gamePlayable() {
        const BB = this.currentStay;
        null !== BB && (BB.playableAtMs = this.deps.now(), this.everPlayable = !0, this.reachStep("game_playable"), this.reachStayStep("game_playable"), this.deps.isPointerLocked() && this.pointerLocked(), this.watchMoves())
      }
      input() {
        const BB = this.currentStay;
        null === BB || null === BB.playableAtMs || BB.ladder.furthestStepIndex >= SO || (this.reachStep("first_input"), this.reachStayStep("first_input"))
      }
      played60s() {
        this.reachStep("played_60s"), this.reachStayStep("played_60s")
      }
      gameLeft() {
        this.stopWatchingMoves(), this.currentStay = null
      }
      kP() {
        var BB, OB, GB;
        this.sendStepMarkers(), this.frustration.checkIdle({
          nowMs: this.deps.now(),
          lastInputAtMs: Math.max(null !== (BB = this.quitContext.getLastInputAtMs()) && void 0 !== BB ? BB : 0, null !== (OB = null === (GB = this.currentStay) || void 0 === GB ? void 0 : GB.playableAtMs) && void 0 !== OB ? OB : 0),
          pointerLocked: this.deps.isPointerLocked() && "gamepad" !== this.deps.getInputDevice(),
          playable: this.isPlayable(),
          visible: this.deps.isPageVisible()
        })
      }
      pointerLocked() {
        this.isPlayable() && (this.everPointerLocked = !0, this.activate("first_pointer_lock"), this.reachStep("pointer_locked"), this.reachStayStep("pointer_locked"))
      }
      pointerLockFailed() {
        this.isPlayable() && this.deps.now() - this.pointerUnlockedAtMs >= 1500 && this.noteFrustration("pointer_lock_failed")
      }
      moved() {
        this.stopWatchingMoves(), this.activate("first_move", {
          input: UO[this.deps.getInputDevice()]
        }), this.reachStep("first_move"), this.reachStayStep("first_move")
      }
      blockBroken() {
        this.isPlayable() && (this.activate("first_block_broken"), this.reachStep("first_block"), this.reachStayStep("first_block"))
      }
      inGameMenuChanged(BB) {
        null !== BB && this.menuOpened(BB, "inventory" === BB ? "first_inventory_open" : null)
      }
      everythingMenuChanged(BB) {
        const OB = null === this.everythingMenu;
        this.everythingMenu = BB, null !== BB && (this.menuOpened(BB, BB === NO.p.SETTINGS ? "first_settings_open" : null), BB === NO.p.SETTINGS && OB && null !== this.currentStay && this.noteFrustration("menu_toggling"))
      }
      pointerLockChanged(BB) {
        BB ? this.pointerLocked() : this.pointerUnlockedAtMs = this.deps.now()
      }
      controlsTutorialShown(BB) {
        const OB = `controls_tutorial_${BB}`;
        this.activations.has(OB) || (this.activations.add(OB), this.replay.capture("controls_tutorial_shown", {
          tutorial: BB,
          ...this.timing()
        }))
      }
      unboundKeyPressed() {
        this.noteFrustration("unbound_key_burst");
        const BB = this.currentStay;
        null !== BB && BB.unboundKeyPresses < ZO.k && (BB.unboundKeyPresses++, this.deps.publishStayProgress({
          unboundKeyPresses: BB.unboundKeyPresses
        }))
      }
      noteFrustration(BB) {
        this.frustration.note(BB, this.deps.now())
      }
      quitProperties(BB) {
        return {
          ...this.ladderTags(),
          ...this.frustration.tags(BB),
          never_pointer_locked: this.everPlayable && !this.everPointerLocked && !this.deps.isTouchScreen() && "gamepad" !== this.deps.getInputDevice()
        }
      }
      isPlayable() {
        return null !== this.currentStay && null !== this.currentStay.playableAtMs
      }
      ladderTags() {
        var BB;
        return {
          furthest_step: null !== (BB = this.ladder.furthest) && void 0 !== BB ? BB : "",
          furthest_step_index: this.ladder.furthestStepIndex
        }
      }
      reachStep(BB) {
        null !== this.ladder.reach(BB) && (this.replay.setSessionProperties(this.ladderTags(), !1), this.unsentStepMarkers.push(ZO.d.indexOf(BB)), this.sendStepMarkers())
      }
      sendStepMarkers() {
        for (; this.unsentStepMarkers.length > 0 && this.replay.addReplayMarker(YB.i.step, {
            step: this.unsentStepMarkers[0]
          }, !0);) this.unsentStepMarkers.shift()
      }
      resendStay(BB) {
        const OB = this.currentStay;
        var GB;
        null !== OB && OB.name === BB && this.deps.publishStayProgress({
          furthestStep: null !== (GB = OB.ladder.furthest) && void 0 !== GB ? GB : void 0,
          unboundKeyPresses: OB.unboundKeyPresses
        })
      }
      reachStayStep(BB) {
        var OB;
        const GB = null === (OB = this.currentStay) || void 0 === OB ? void 0 : OB.ladder;
        void 0 !== GB && null !== GB.reach(BB) && this.deps.publishStayProgress({
          furthestStep: GB.furthest
        })
      }
      menuOpened(BB, OB) {
        this.replay.capture("menu_opened", {
          menu: BB
        }), null !== OB && this.activate(OB)
      }
      activate(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.activations.has(BB) || (this.activations.add(BB), this.replay.capture(BB, {
          ...OB,
          ...this.timing()
        }))
      }
      timing() {
        var BB, OB;
        const GB = this.deps.now(),
          YB = null !== (BB = null === (OB = this.currentStay) || void 0 === OB ? void 0 : OB.playableAtMs) && void 0 !== BB ? BB : null;
        return {
          ms_since_page_load: Math.round(GB),
          ms_since_playable: null === YB ? null : Math.round(GB - YB)
        }
      }
      onFrustration(BB, OB, GB) {
        this.replay.setSessionProperties(this.frustration.tags(), !1), this.replay.addReplayMarker(YB.i.frustration, {
          signal: ZO.h.indexOf(BB)
        });
        const DB = this.frustrationThrottle.allow(BB, Date.now());
        null !== DB && this.replay.capture("frustration_signal", {
          signal: BB,
          count: OB,
          window_ms: GB,
          suppressed_since_last: DB
        })
      }
      watchMoves() {
        var BB, OB;
        if (0 === this.moveSubscriptions.length && (null !== (BB = null === (OB = this.currentStay) || void 0 === OB ? void 0 : OB.ladder.furthestStepIndex) && void 0 !== BB ? BB : 1 / 0) < nO) {
          const BB = () => {
            this.moved()
          };
          this.moveSubscriptions = [QO.o.subscribe("usedKeyboard", BB), QO.o.subscribe("stickMoved", BB)]
        }
      }
      stopWatchingMoves() {
        for (const BB of this.moveSubscriptions) QO.o.unsubscribe(BB);
        this.moveSubscriptions = []
      }
    }
    const kO = ["quit_after_hitch", "quit_after_death", "quit_during_load", "quit_in_menu", "quit_idle", "quit_after_ad"],
      dO = ["quit_during_load", "quit_after_ad", "quit_after_death", "quit_after_hitch", "quit_idle", "quit_in_menu"];

    function KO(BB) {
      var OB;
      return null !== (OB = dO.find((OB => BB.includes(OB)))) && void 0 !== OB ? OB : "none"
    }

    function uO(BB, OB, GB) {
      return null !== BB && OB - BB < GB
    }
    class mO {
      constructor() {
        this.history = {
          lastHitchAtMs: null,
          lastDeathAtMs: null,
          lastInputAtMs: null,
          lastErrorAtMs: null,
          lastAdFinishedAtMs: null,
          adPlaying: !1
        }, this.lastLoadStep = null, this.flowProperties = () => ({})
      }
      setFlowProperties(BB) {
        this.flowProperties = BB
      }
      noteInput(BB) {
        this.history.lastInputAtMs = BB
      }
      noteHitch(BB) {
        this.history.lastHitchAtMs = BB
      }
      noteDeath(BB) {
        this.history.lastDeathAtMs = BB
      }
      noteError(BB) {
        this.history.lastErrorAtMs = BB
      }
      getLastInputAtMs() {
        return this.history.lastInputAtMs
      }
      forgetGame() {
        this.history.lastDeathAtMs = null, this.history.lastHitchAtMs = null, this.history.lastErrorAtMs = null
      }
      noteAdStarted() {
        this.history.adPlaying = !0
      }
      noteAdFinished(BB) {
        this.history.adPlaying = !1, this.history.lastAdFinishedAtMs = BB
      }
      noteLoadStep(BB) {
        this.lastLoadStep = BB
      }
      getLastLoadStep() {
        return this.lastLoadStep
      }
      quit(BB) {
        const OB = function(BB, OB) {
            var GB, YB;
            const DB = [];
            return uO(OB.lastHitchAtMs, BB.nowMs, 15e3) && DB.push("quit_after_hitch"), uO(OB.lastDeathAtMs, BB.nowMs, 15e3) && DB.push("quit_after_death"), BB.loading ? DB.push("quit_during_load") : "page" !== BB.quitFrom || BB.inGame && !BB.menuOpen || DB.push("quit_in_menu"), uO(null !== (GB = OB.lastInputAtMs) && void 0 !== GB ? GB : 0, BB.nowMs, 6e4) || DB.push("quit_idle"), (!0 === OB.adPlaying || uO(null !== (YB = OB.lastAdFinishedAtMs) && void 0 !== YB ? YB : null, BB.nowMs, 3e4)) && DB.push("quit_after_ad"), DB
          }(BB, this.history),
          GB = function(BB, OB) {
            var GB;
            return uO(OB.lastDeathAtMs, BB, 1e4) || uO(null !== (GB = OB.lastErrorAtMs) && void 0 !== GB ? GB : null, BB, 1e4)
          }(BB.nowMs, this.history),
          YB = {
            quit_from: BB.quitFrom,
            in_game: BB.inGame,
            quit_reasons: OB.join(","),
            quit_reason: KO(OB),
            rage_quit: GB,
            ...this.flowProperties(GB)
          };
        var DB;
        OB.includes("quit_during_load") && (YB.last_load_step = null !== (DB = this.lastLoadStep) && void 0 !== DB ? DB : "none");
        null !== BB.gameName && (YB.game_name_with_variation = BB.gameName, YB.game_name = (0, tB.ac)(BB.gameName));
        for (const QB of kO) YB[QB] = OB.includes(QB);
        return {
          reasons: OB,
          properties: YB
        }
      }
    }
    class IO {
      constructor(BB) {
        this.deps = BB, this.quitContext = new mO, this.loading = !1, this.inGame = !1, this.switching = !1, this.nextLeaveIsNotAQuit = !1, this.pendingQuit = null, this.exited = !1
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
      joinFailed(BB) {
        this.loading = !1, this.nextLeaveIsNotAQuit = this.inGame, this.deps.capture("join_failed", BB)
      }
      disconnected() {
        this.nextLeaveIsNotAQuit = !0
      }
      kickedForAfk(BB) {
        this.nextLeaveIsNotAQuit = !0, this.deps.capture("kicked_afk", {
          game_name_with_variation: BB
        })
      }
      gameLeft(BB) {
        const OB = this.nextLeaveIsNotAQuit || this.deps.isJoinAbandoned(),
          GB = this.switching,
          YB = this.loading;
        if (this.nextLeaveIsNotAQuit = !1, this.switching = !1, this.inGame = !1, null === BB) return;
        if (GB || (this.loading = !1), OB) return void this.quitContext.forgetGame();
        const DB = this.quitContext.quit({
          quitFrom: "game",
          gameName: BB,
          nowMs: this.deps.now(),
          inGame: !0,
          loading: YB,
          menuOpen: !1
        });
        this.quitContext.forgetGame(), GB ? this.captureSwitch(DB) : this.startPendingQuit(DB)
      }
      gameReplayOpened(BB) {
        this.nextLeaveIsNotAQuit = !0, this.gameLeft(BB), this.deps.capture("game_replay_opened", {
          from_game_name_with_variation: BB
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
      pageHidden(BB) {
        if (this.exited) return;
        this.exited = !0;
        const OB = this.pendingQuit;
        null !== OB && (clearTimeout(OB.timer), this.pendingQuit = null, this.deps.onGameQuit(OB.quit), this.deps.captureOnExit("quit_context", OB.quit.properties, OB.atEpochMs));
        const GB = {
            quitFrom: "page",
            gameName: null,
            nowMs: this.deps.now(),
            inGame: this.inGame,
            loading: this.loading,
            menuOpen: this.deps.isMenuOpen()
          },
          YB = this.quitContext.quit(GB);
        this.inGame && this.deps.onGameQuit(YB), this.deps.captureOnExit("quit_context", {
          ...BB,
          ...YB.properties
        })
      }
      pageRestored() {
        this.exited = !1, this.deps.capture("page_restored", {})
      }
      startPendingQuit(BB) {
        this.resolvePendingQuitAsSwitch();
        const OB = {
          quit: BB,
          atEpochMs: Date.now(),
          timer: setTimeout((() => {
            this.pendingQuit === OB && (this.pendingQuit = null, this.deps.onGameQuit(BB), this.deps.capture("quit_context", BB.properties, OB.atEpochMs))
          }), 1e4)
        };
        this.pendingQuit = OB
      }
      resolvePendingQuitAsSwitch() {
        const BB = this.pendingQuit;
        null !== BB && (clearTimeout(BB.timer), this.pendingQuit = null, "string" === typeof BB.quit.properties.game_name_with_variation && this.captureSwitch(BB.quit))
      }
      captureSwitch(BB) {
        this.deps.capture("game_switched", {
          from_game_name_with_variation: BB.properties.game_name_with_variation,
          from_game_name: BB.properties.game_name,
          after_death: BB.reasons.includes("quit_after_death"),
          after_hitch: BB.reasons.includes("quit_after_hitch")
        })
      }
    }
    var FO = GB(7043);
    class iO {
      constructor(BB) {
        this.replay = BB, this.pointerLockThrottle = new TB({
          maxPerWindow: 10,
          windowMs: 6e4
        }), this.counts = new Map, this.game = null, this.timer = null
      }
      start(BB) {
        BB.onUnboundKey((BB => {
          this.onUnboundKey(BB)
        })), BB.onPointerLock((BB => {
          const OB = this.pointerLockThrottle.allow("pointer_lock_changed", Date.now());
          null !== OB && this.replay.capture("pointer_lock_changed", {
            locked: BB,
            in_game: "inGame" === YO.c.get("gameState"),
            menu_open: (0, MO.r)(),
            suppressed_since_last: OB
          })
        })), QO.o.subscribe("leaveGame", (() => {
          this.flush(!1)
        })), document.addEventListener("visibilitychange", (() => {
          document.hidden && this.flush(!0)
        }))
      }
      onUnboundKey(BB) {
        var OB, GB;
        const YB = (0, oO.c)().gameNameWithVariation;
        YB !== this.game && (this.flush(!1), this.game = YB);
        const DB = null !== (OB = (0, FO.e)(BB)) && void 0 !== OB ? OB : BB;
        this.counts.set(DB, (null !== (GB = this.counts.get(DB)) && void 0 !== GB ? GB : 0) + 1), this.timer ??= setTimeout((() => {
          this.flush(!1)
        }), 1e4 - Date.now() % 1e4)
      }
      flush(BB) {
        if (null !== this.timer && (clearTimeout(this.timer), this.timer = null), 0 === this.counts.size) return;
        const OB = (GB = this.counts, [...GB].sort(((BB, OB) => OB[1] - BB[1] || (BB[0] < OB[0] ? -1 : 1))));
        var GB;
        let YB = 0;
        for (const [, QB] of OB) YB += QB;
        const DB = {
          key_counts: Object.fromEntries(OB),
          keys: OB.map((BB => {
            let [OB] = BB;
            return OB
          })).join(","),
          top_key: OB[0][0],
          presses: YB,
          game_name: null === this.game ? null : (0, tB.ac)(this.game),
          game_name_with_variation: this.game
        };
        this.replay.addUnboundKeyPresses(this.counts), this.counts.clear(), BB ? this.replay.captureOnExit("unbound_keys", DB) : this.replay.capture("unbound_keys", DB)
      }
    }
    var LO = GB(162);

    function gO(BB) {
      var OB, GB;
      return null !== (OB = null === (GB = LO.l[BB]) || void 0 === GB ? void 0 : GB.toLowerCase()) && void 0 !== OB ? OB : String(BB)
    }
    class rO {
      constructor(BB, OB) {
        this.replay = BB, this.quitContext = OB, this.startedAtMs = null, this.steps = new Map, this.firstGamePlayable = !1
      }
      started() {
        this.startedAtMs = Date.now()
      }
      stepCompleted(BB) {
        if (this.steps.has(BB)) return;
        const OB = performance.now();
        this.steps.set(BB, OB);
        const GB = gO(BB);
        this.quitContext.noteLoadStep(GB), this.firstGamePlayable || this.replay.capture("game_load_step", {
          load_step: GB,
          step_number: BB,
          ms_since_page_load: Math.round(OB),
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
        let BB = null,
          OB = null;
        for (const [YB, DB] of [...this.steps].sort(((BB, OB) => BB[1] - OB[1]))) null !== OB && (null === BB || DB - OB > BB.ms) && (BB = {
          step: YB,
          ms: DB - OB
        }), OB = DB;
        const GB = null === this.startedAtMs ? null : Date.now() - this.startedAtMs;
        return this.firstGamePlayable = !0, this.ended(), {
          load_ms: GB,
          slowest_load_step: null === BB ? null : gO(BB.step),
          slowest_load_step_ms: null === BB ? null : Math.round(BB.ms)
        }
      }
      resetSteps() {
        this.steps.clear(), this.quitContext.noteLoadStep(null)
      }
    }
    const XO = ["keydown", "pointerdown", "touchstart"];
    class wO {
      constructor(BB) {
        this.replay = BB, this.firstInGameInputSent = !1
      }
      startFirstInputWatch() {
        setTimeout((() => {
          ! function(BB) {
            var OB;
            let GB = !1;
            const YB = (OB, YB, DB) => {
              GB || (GB = !0, BB(OB, YB, DB))
            };
            if ("undefined" !== typeof PerformanceObserver && null !== (OB = PerformanceObserver.supportedEntryTypes) && void 0 !== OB && OB.includes("first-input")) {
              const BB = new PerformanceObserver((OB => {
                const [GB] = OB.getEntries();
                BB.disconnect(), YB(GB.name, GB.startTime, !0)
              }));
              return void BB.observe({
                type: "first-input",
                buffered: !0
              })
            }
            const DB = new AbortController,
              QB = BB => {
                DB.abort(), YB(BB.type, BB.timeStamp, !1)
              };
            for (const oB of XO) window.addEventListener(oB, QB, {
              capture: !0,
              passive: !0,
              signal: DB.signal
            })
          }(((BB, OB, GB) => {
            this.replay.capture("first_input", Object.fromEntries([
              ["input_type", BB],
              ["ms_since_page_load", Math.round(OB)],
              ["buffered", GB]
            ]))
          }))
        }), 100)
      }
      onFirstInGameInput(BB, OB) {
        this.firstInGameInputSent = !0, this.replay.capture("first_ingame_input", Object.fromEntries([
          ["input_type", BB],
          ["ms_since_playable", Math.round(performance.now() - OB)],
          ["ms_since_page_load", Math.round(performance.now())]
        ]))
      }
      capturePageLoadTiming() {
        const BB = performance.getEntriesByType("navigation")[0],
          OB = performance.getEntriesByName("first-contentful-paint")[0];
        this.replay.capture("page_load_timing", {
          ttfb_ms: BB ? Math.round(BB.responseStart) : null,
          first_contentful_paint_ms: OB ? Math.round(OB.startTime) : null,
          dom_content_loaded_ms: BB ? Math.round(BB.domContentLoadedEventEnd) : null,
          load_ms: BB ? Math.round(BB.loadEventEnd) : null,
          transfer_kb: BB ? Math.round(BB.transferSize / 1024) : null,
          recording_started_ms: Math.round(performance.now())
        })
      }
    }
    class EO {
      constructor(BB, OB) {
        this.replay = BB, this.quitContext = OB, this.settings = YO.c.get("clientEscMenuOptions"), this.pendingSettings = {}, this.settingsTimer = null, this.adRequest = null, this.playingAd = null
      }
      start() {
        QO.o.subscribe("purchaseStarted", (BB => {
          let {
            product: OB
          } = BB;
          this.replay.setFlag("purchase_intent"), this.replay.capture("purchase_started", {
            product: OB
          })
        })), QO.o.subscribe("purchaseEnded", (BB => {
          let {
            outcome: OB
          } = BB;
          this.replay.capture("purchase_ended", {
            outcome: OB
          })
        })), QO.o.subscribe("adRequested", (BB => {
          let {
            adKind: OB,
            provider: GB
          } = BB;
          this.adRequest = {
            adKind: OB,
            provider: GB,
            atMs: performance.now()
          }
        })), QO.o.subscribe("appManagerUpdated|soundOnFromAd", (BB => {
          BB && null !== this.playingAd ? this.onAdFinished() : BB || null !== this.playingAd || this.onAdStarted()
        })), QO.o.subscribe("appManagerUpdated|clientEscMenuOptions", (BB => {
          YO.c.isApplyingDefaults ? this.settings = BB : this.onSettingsChanged(BB)
        }))
      }
      onAdStarted() {
        var BB, OB;
        const GB = performance.now(),
          YB = null !== this.adRequest && GB - this.adRequest.atMs < 6e4 ? this.adRequest : null;
        this.adRequest = null, this.playingAd = {
          ad_kind: null !== (BB = null === YB || void 0 === YB ? void 0 : YB.adKind) && void 0 !== BB ? BB : "unknown",
          provider: null !== (OB = null === YB || void 0 === YB ? void 0 : YB.provider) && void 0 !== OB ? OB : null,
          startedAtMs: GB
        }, this.replay.setFlag("ad_shown"), this.quitContext.noteAdStarted(), this.replay.capture("ad_started", this.adProperties(this.playingAd, GB))
      }
      onAdFinished() {
        const BB = performance.now(),
          OB = this.playingAd;
        this.playingAd = null, this.quitContext.noteAdFinished(BB), this.replay.capture("ad_finished", {
          ...this.adProperties(OB, BB),
          ad_ms: Math.round(BB - OB.startedAtMs)
        })
      }
      adProperties(BB, OB) {
        return {
          ad_kind: BB.ad_kind,
          provider: BB.provider,
          minutes_since_page_load: Math.floor(OB / 6e4),
          in_game: "inGame" === YO.c.get("gameState")
        }
      }
      onSettingsChanged(BB) {
        Object.assign(this.pendingSettings, function(BB, OB) {
          const GB = {};
          for (const YB of Object.keys(OB)) BB[YB] !== OB[YB] && (GB[YB] = OB[YB]);
          return GB
        }(this.settings, BB)), this.settings = BB, null !== this.settingsTimer && clearTimeout(this.settingsTimer), this.settingsTimer = setTimeout((() => {
          this.settingsTimer = null, Object.keys(this.pendingSettings).length > 0 && (this.replay.capture("settings_changed", {
            changed_settings: Object.keys(this.pendingSettings),
            values: this.pendingSettings
          }), this.pendingSettings = {})
        }), 2e3)
      }
    }

    function cO(BB) {
      switch ((0, sB.B)(BB)) {
        case xB.e.DISCORD_GUILD:
          return "discord_guild";
        case xB.e.DISCORD_DM:
          return "discord_dm";
        default:
          return (0, sB.Q)(BB) ? "public" : "private"
      }
    }
    class hO {
      constructor(BB) {
        this.replay = BB, this.framesThisTick = 0, this.lastTickMs = performance.now(), this.ticks = 0, this.gamesJoined = 0, this.pageEvents = void 0, this.flows = void 0, this.health = void 0, this.leaves = void 0, this.joinLoad = void 0, this.unsubscribeDeaths = () => {}, this.inputSinceActiveMarker = !1, this.firstMinutePlayedSent = !1, this.pageEvents = new wO(BB), this.leaves = new IO({
          capture: (OB, GB, YB) => {
            void 0 === YB ? BB.capture(OB, GB) : BB.captureAt(OB, GB, YB)
          },
          captureOnExit: (OB, GB, YB) => {
            BB.captureOnExit(OB, GB, YB)
          },
          onGameQuit: BB => {
            let {
              reasons: OB,
              properties: GB
            } = BB;
            const YB = GB.game_name_with_variation;
            QO.o.tM("sessionReplayGameQuit", {
              reasons: OB,
              gameName: "string" === typeof YB ? YB : null
            })
          },
          isMenuOpen: MO.r,
          isJoinAbandoned: JO.f,
          now: () => performance.now()
        }), this.joinLoad = new rO(BB, this.leaves.quitContext), this.flows = function(BB, OB) {
          return new fO(BB, OB, {
            now: () => performance.now(),
            isTouchScreen: () => YO.c.get("isTouchScreen"),
            getInputDevice: () => YO.c.get("activeInputDevice"),
            isPointerLocked: () => null !== document.pointerLockElement,
            isPageVisible: () => !document.hidden,
            publishStayProgress: BB => {
              QO.o.tM("sessionReplayStayProgress", BB)
            }
          })
        }(BB, this.leaves.quitContext), this.health = new qO(BB, this.leaves.quitContext, this.flows)
      }
      start() {
        const BB = (0, PO.b)(),
          OB = new iO(this.replay);
        null !== BB && OB.start(BB), this.pageEvents.capturePageLoadTiming(), this.flows.start();
        const GB = YO.c.get("gameState");
        "inGame" === GB ? this.joinConnectedGame() : "loadingScreen" !== GB && "findingLobby" !== GB || this.leaves.joinStarted(), this.subscribeToGameFlow(), new EO(this.replay, this.leaves.quitContext).start(), this.health.start(), this.trackInput(), this.pageEvents.startFirstInputWatch(), (0, jO.u)((() => {
          this.framesThisTick++
        })), setInterval((() => {
          this.yR()
        }), 1e3), window.addEventListener("pagehide", (() => {
          OB.flush(!0), this.leaves.pageHidden(this.replay.finalTags())
        })), window.addEventListener("pageshow", (BB => {
          BB.persisted && this.leaves.pageRestored()
        }))
      }
      trackInput() {
        const BB = BB => {
          var OB, GB;
          this.inputSinceActiveMarker = !0, this.leaves.quitContext.noteInput(BB.timeStamp), this.flows.input();
          const YB = null !== (OB = null === (GB = this.flows.stay) || void 0 === GB ? void 0 : GB.playableAtMs) && void 0 !== OB ? OB : null;
          this.pageEvents.firstInGameInputSent || null === YB || this.pageEvents.onFirstInGameInput(BB.type, YB)
        };
        for (const OB of ["keydown", "pointerdown", "pointermove", "wheel"]) window.addEventListener(OB, BB, {
          capture: !0,
          passive: !0
        })
      }
      subscribeToGameFlow() {
        QO.o.subscribe("joinedGame", (BB => {
          let {
            gameNameWithVariation: OB,
            lobbyName: GB
          } = BB;
          (0, JO.f)() || this.onJoinedGame(OB, GB)
        })), QO.o.subscribe("leaveGame", (() => {
          var BB, OB;
          const GB = null !== (BB = null === (OB = this.flows.stay) || void 0 === OB ? void 0 : OB.name) && void 0 !== BB ? BB : null;
          this.onLeftGame(), this.leaves.gameLeft(GB)
        })), QO.o.subscribe("replayViewer|replayLoaded", (() => {
          const BB = this.flows.stay;
          null !== BB && (this.onLeftGame(), this.leaves.gameReplayOpened(BB.name))
        })), QO.o.subscribe("matchmakeAndPlayStepCompleted", (BB => {
          let {
            step: OB
          } = BB;
          this.joinLoad.stepCompleted(OB)
        })), QO.o.subscribe("leftPlayPage", (() => {
          this.leaves.playPageLeft(), this.joinLoad.ended()
        })), QO.o.subscribe("joinFailed", (BB => {
          let {
            step: OB,
            severity: GB
          } = BB;
          this.leaves.joinFailed({
            step: OB,
            severity: GB,
            game_name_with_variation: (0, oO.c)().requestedGameNameWithVariation,
            last_load_step: this.leaves.quitContext.getLastLoadStep()
          }), this.joinLoad.ended()
        })), QO.o.subscribe("kickedForAfk", (() => {
          var BB, OB;
          this.leaves.kickedForAfk(null !== (BB = null === (OB = this.flows.stay) || void 0 === OB ? void 0 : OB.name) && void 0 !== BB ? BB : null)
        })), QO.o.subscribe("unwantedLeftGame", (BB => {
          this.leaves.disconnected(), this.replay.setFlag("disconnected"), this.replay.capture("disconnected", {
            reason: BB.reason,
            can_reconnect: BB.canReconnect,
            automatically_reconnect: BB.automaticallyReconnect,
            requires_refresh: BB.requiresRefresh
          })
        })), QO.o.subscribe("appManagerUpdated|gameState", (BB => {
          "loadingScreen" === BB ? this.leaves.joinStarted() : "findingLobby" === BB ? (this.leaves.joinStarted(), this.joinLoad.started(), this.replay.capture("game_loading_started", {
            entry_source: YO.c.get("gameEntrySource")
          }), this.flows.gameLoading()) : "inGame" === BB ? this.onPlayable() : "landingPage" === BB && (this.replay.capture("homepage_viewed"), this.replay.capture("$screen", {
            $screen_name: "homepage"
          }))
        })), QO.o.subscribe("appManagerUpdated|gameEntrySource", (BB => {
          "autoReconnect" !== BB && "manualReconnect" !== BB || this.replay.capture("reconnect_attempted", {
            automatic: "autoReconnect" === BB
          })
        })), QO.o.subscribe("sessionReplayPlayerKill", (BB => {
          let {
            killstreak: OB
          } = BB;
          this.replay.capture("player_kill", {
            killstreak: OB
          })
        }))
      }
      onPlayable() {
        (0, JO.f)() || (0, oO.f)() || (null === this.flows.stay && this.joinConnectedGame(), this.replay.capture("game_playable", {
          ms_since_page_load: Math.round(performance.now()),
          ...this.joinLoad.playable()
        }), this.leaves.gamePlayable(), this.flows.gamePlayable())
      }
      joinConnectedGame() {
        if ((0, oO.f)()) return;
        const {
          gameNameWithVariation: BB,
          lobbyName: OB
        } = (0, oO.c)();
        null !== BB && null !== OB ? this.onJoinedGame(BB, OB) : console.warn("Session replay found a game playable with no game joined; not labelling it")
      }
      onJoinedGame(BB, OB) {
        this.replay.takeFullSnapshot();
        const GB = (0, sB.Q)(OB),
          YB = YO.c.get("gameEntrySource");
        this.gamesJoined++, this.leaves.gameJoined(), this.flows.gameJoined(this.gamesJoined, BB, "autoReconnect" === YB || "manualReconnect" === YB), "inGame" === YO.c.get("gameState") && this.flows.gamePlayable();
        const DB = yO.clientSidePartyStateManager.getPartyInformation(),
          QB = {
            game_name: (0, tB.ac)(BB),
            game_name_with_variation: BB,
            game_number: this.gamesJoined,
            game_analytics_id: (0, BO.g)(BB, GB),
            is_custom_game: (0, OO.l)(BB),
            lobby_type: cO(OB),
            in_party: null !== DB,
            party_size: null === DB ? 0 : DB.memberSocialPreviews.length + 1
          };
        this.replay.gameJoined(BB, QB), this.replay.capture("game_joined", {
          ...QB,
          entry_source: YB
        }), this.replay.capture("$screen", {
          $screen_name: QB.is_custom_game ? `custom: ${QB.game_analytics_id}` : QB.game_name
        }), this.subscribeToDeaths(BB)
      }
      onLeftGame() {
        this.joinLoad.forgetStart();
        const BB = this.flows.stay;
        null !== BB && (this.replay.capture("game_left", {
          game_name_with_variation: BB.name,
          duration_ms: Date.now() - BB.joinedAtMs
        }), this.flows.gameLeft(), this.replay.gameLeft(), this.unsubscribeDeaths(), this.unsubscribeDeaths = () => {})
      }
      subscribeToDeaths(BB) {
        this.unsubscribeDeaths();
        let OB = !0;
        this.unsubscribeDeaths = DO.gameBridge.subscribe("localPlayerAliveSet", (GB => {
          const DB = OB && !GB;
          if (OB = GB, DB) {
            this.leaves.quitContext.noteDeath(performance.now());
            const [OB, GB, DB] = DO.gameBridge.lookup("localPos", null), QB = {
              x: Math.round(OB),
              y: Math.round(GB),
              z: Math.round(DB)
            }, oB = this.flows.stay, jB = null === oB ? {} : {
              death_number: ++oB.deaths,
              seconds_since_join: Math.round((Date.now() - oB.joinedAtMs) / 1e3)
            };
            this.replay.capture("player_died", {
              ...QB,
              game_name_with_variation: BB,
              ...jB
            }), this.replay.addReplayMarker(YB.i.death, QB)
          }
        }))
      }
      yR() {
        this.health.attachToRender();
        const BB = performance.now(),
          OB = BB - this.lastTickMs,
          GB = OB <= 5e3,
          DB = this.flows.stay;
        if (null !== DB && null !== DB.playableAtMs && !document.hidden && GB && DB.visiblePlayedMs < 6e4 && (DB.visiblePlayedMs += OB, DB.visiblePlayedMs >= 6e4)) {
          const OB = Math.round(BB);
          this.replay.capture("game_played_60s", {
            game_name_with_variation: DB.name,
            ms_since_page_load: OB,
            ...this.firstMinutePlayedSent ? {} : {
              ttff_ms: OB
            }
          }), this.firstMinutePlayedSent = !0, this.flows.played60s()
        }
        this.flows.kP();
        const QB = null !== this.flows.stay && !document.hidden;
        this.replay.addFpsSample(QB && GB && this.framesThisTick > 0 ? 1e3 * this.framesThisTick / OB : null);
        const oB = QB ? GO.b.getLastColyseusPingMs() : null;
        null !== oB && this.replay.addPingSample(oB), this.framesThisTick = 0, this.lastTickMs = BB, this.ticks++, this.ticks % 2 === 0 && (QB && this.inputSinceActiveMarker && this.replay.addReplayMarker(YB.i.active), this.inputSinceActiveMarker = !1), this.replay.markClockIfDue(this.ticks, 30)
      }
    }
    var aO = GB(1200),
      eO = GB(1186),
      TO = GB(40477);

    function bO(BB) {
      return BB.length + 64
    }
    async function CO() {
      return new Response("{}")
    }

    function HO(BB, OB, GB) {
      return TO.i.fetch(BB, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain"
        },
        body: OB,
        signal: (0, aO.t)(3e4)
      }, GB)
    }
    class vO {
      constructor(BB) {
        var OB, GB, YB;
        let DB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.uploadToken = BB, this.url = void 0, this.post = void 0, this.isHidden = void 0, this.queue = [], this.retries = [], this.refusedTokens = new Set, this.overflowWarned = !1, this.unloading = !1, this.sendScheduled = !1, this.url = null !== (OB = DB.url) && void 0 !== OB ? OB : `${eO.clientSideServerUrls.indexUrl}/index/replay/timeline`, this.post = null !== (GB = DB.post) && void 0 !== GB ? GB : HO, this.isHidden = null !== (YB = DB.isHidden) && void 0 !== YB ? YB : () => "hidden" === document.visibilityState
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
      add(BB) {
        if (this.refusedTokens.has(this.uploadToken)) return;
        const OB = function(BB) {
            const OB = {
              ...BB.properties
            };
            return void 0 !== BB.$set && (OB.$set = {
              ...BB.properties.$set,
              ...BB.$set
            }), void 0 !== BB.$set_once && (OB.$set_once = {
              ...BB.$set_once,
              ...BB.properties.$set_once
            }), void 0 !== BB.$unset && (OB.$unset = BB.$unset), {
              uuid: BB.uuid,
              event: BB.event,
              timestampMs: BB.timestamp.getTime(),
              properties: JSON.stringify(OB)
            }
          }(BB),
          GB = (0, TO.m)(JSON.stringify(OB));
        OB.properties.length > 32768 || OB.event.length > 64 || bO(this.uploadToken) + GB > 102400 ? console.warn(`Session replay timeline event ${OB.event.slice(0,64)} is too large for index-server; dropped.`) : (this.queue.push({
          uploadToken: this.uploadToken,
          event: OB,
          bytes: GB,
          attempts: 0
        }), this.trimToCap(), this.queue.length >= 50 ? this.sendQueued() : (this.unloading || this.isHidden()) && this.sendSoon())
      }
      sendSoon() {
        this.sendScheduled || (this.sendScheduled = !0, queueMicrotask((() => {
          this.sendScheduled = !1, this.sendQueued()
        })))
      }
      flush() {
        this.retries.length > 0 && (this.queue = [...this.retries, ...this.queue].sort(((BB, OB) => BB.event.timestampMs - OB.event.timestampMs)), this.retries = []), this.sendQueued()
      }
      sendQueued() {
        for (; this.queue.length > 0;) {
          const BB = this.takeBatch();
          this.refusedTokens.has(BB.uploadToken) || this.send(BB)
        }
      }
      trimToCap() {
        let BB = this.retries.length + this.queue.length - 1e3;
        if (BB <= 0) return void(this.overflowWarned = !1);
        const OB = Math.min(BB, this.retries.length);
        this.retries.splice(0, OB), BB -= OB, this.queue.splice(0, BB), this.overflowWarned || (this.overflowWarned = !0, console.warn("Session replay timeline queue is full; dropping its oldest events until it drains."))
      }
      takeBatch() {
        const BB = this.queue.shift(),
          OB = [BB];
        let GB = bO(BB.uploadToken) + BB.bytes;
        for (; this.queue.length > 0 && OB.length < 100 && this.queue[0].uploadToken === BB.uploadToken && GB + this.queue[0].bytes <= 32768;) {
          const BB = this.queue.shift();
          OB.push(BB), GB += BB.bytes
        }
        return {
          uploadToken: BB.uploadToken,
          events: OB
        }
      }
      async send(BB) {
        const OB = await this.sendOnce(BB);
        if ("refused" === OB && this.refusedTokens.add(BB.uploadToken), "retryLater" !== OB) return;
        const GB = BB.events.filter((BB => ++BB.attempts < 3));
        GB.length < BB.events.length && console.error(`Session replay timeline: dropped ${BB.events.length-GB.length} events after 3 attempts.`), this.retries.push(...GB), this.trimToCap()
      }
      async sendOnce(BB) {
        const OB = {
            uploadToken: BB.uploadToken,
            sentAtMs: Date.now(),
            events: BB.events.map((BB => BB.event))
          },
          GB = JSON.stringify(OB);
        let YB, DB = null;
        try {
          YB = await this.post(this.url, GB, (0, TO.m)(GB)), YB.ok && (DB = await YB.json())
        } catch (QB) {
          return console.warn("Session replay timeline upload failed.", QB), "retryLater"
        }
        return null === DB ? 408 === YB.status || 429 === YB.status || YB.status >= 500 ? "retryLater" : (console.error(`Session replay timeline upload failed with ${YB.status}; dropped ${BB.events.length} events.`), "dropped") : "rejected" in DB ? DB.retryable ? "retryLater" : (console.warn(`Session replay timeline refused: ${DB.reason}; dropping this recording's events.`), "refused") : "sent"
      }
    }
    var sO = GB(40497),
      xO = GB(5102),
      tO = GB(1308);
    class BG {
      constructor(BB) {
        var OB;
        this.tags = new vB, this.fpsMonitor = void 0, this.errorLogLink = void 0, this.lastTagsJson = "", this.clockMarked = !1, this.personUpdateTimer = null, this.expectedSessionId = "", this.recorderPatched = !1, this.gameContextKeys = [], this.firstGameJoined = !1, this.timeline = void 0, this.onDomBatch = void 0;
        const {
          recording: GB
        } = BB;
        this.onDomBatch = BB.onDomBatch;
        const oB = null !== BB.onDomBatch;
        oB && this.patchRecorder(), this.timeline = new vO(GB.uploadToken, BB.dryRun ? {
            post: CO
          } : {}), this.timeline.start(),
          function(BB) {
            const OB = {
                supportedCompression: [DB.d.GZipJS],
                hasFeatureFlags: !1,
                sessionRecording: {
                  endpoint: "/s/"
                },
                siteApps: [],
                toolbarParams: {},
                toolbarVersion: "toolbar",
                isAuthenticated: !1
              },
              GB = window;
            GB._POSTHOG_REMOTE_CONFIG = {
              ...GB._POSTHOG_REMOTE_CONFIG,
              [BB]: {
                config: OB
              }
            }
          }(BB.posthog.projectApiKey), DB.f.init(BB.posthog.projectApiKey, rB({
            apiHost: BB.posthog.apiHost,
            recordingId: GB.recordingId,
            recordDom: oB,
            ownOrigins: [window.location.origin, new URL(eO.clientSideServerUrls.s3Url, window.location.href).origin],
            anonymised: GB.anonymised,
            showsChat: (0, YB.q)(GB),
            allowAutomatedBrowsers: (0, xO.c)((0, xO.j)(), !1),
            onTimelineEvent: BB => {
              this.timeline.add(BB), "$pageview" === BB.event && BB.properties.$current_url && this.addReplayMarker("$pageview", {
                href: BB.properties.$current_url
              })
            },
            onDomBatch: BB => {
              this.takeDomBatch(BB)
            }
          })), oB && DB.f.startSessionRecording({
            sampling: !0
          }), this.expectedSessionId = GB.recordingId, DB.f.onSessionId((BB => {
            BB !== this.expectedSessionId && console.warn(`Session replay: PostHog session ${BB} differs from recording ${this.expectedSessionId}; events carry recording_id.`)
          })),
          function(BB, OB) {
            const {
              recording: GB
            } = BB, YB = {
              ...GB.tags,
              site_used: EB.siteUsed,
              subsite_used: null !== EB.subsiteUsed && void 0 !== EB.subsiteUsed ? EB.subsiteUsed : "",
              is_iframed: EB.isIframed,
              entry_path: location.pathname,
              ...cB(),
              ...aB(GB, OB),
              client_build: wB.b
            };
            DB.f.register(YB), null !== BB.videoStatus && DB.f.register({
              replay_video_status: BB.videoStatus
            }), DB.f.setPersonProperties(YB, {
              ...eB("initial_", YB),
              ...hB(GB)
            })
          }(BB, oB), this.fpsMonitor = new QB.c({
            onEpisodeStarted: BB => {
              this.capture("low_fps_started", {
                avg_fps: Math.round(BB)
              }), QO.o.tM("sessionReplayLowFps", {
                low: !0
              })
            },
            onEpisodeEnded: BB => {
              this.capture("low_fps_episode", {
                duration_ms: BB.durationMs,
                min_fps: BB.minFps,
                avg_fps: BB.avgFps
              }), QO.o.tM("sessionReplayLowFps", {
                low: !1
              })
            }
          }), this.errorLogLink = new CB({
            dashboardHost: null !== (OB = BB.posthog.dashboardHost) && void 0 !== OB ? OB : BB.posthog.apiHost,
            recordingId: GB.recordingId,
            getSessionId: () => DB.f.get_session_id(),
            domRecorded: oB,
            captureError: (BB, OB) => {
              this.captureClientError("logged", BB, OB)
            }
          }), (0, tO.annotateLoggedErrors)(((BB, OB) => this.errorLogLink.annotate(BB, OB))), new hO(this).start()
      }
      capture(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        DB.f.capture(BB, OB)
      }
      captureAt(BB, OB, GB) {
        DB.f.capture(BB, OB, {
          timestamp: new Date(GB)
        })
      }
      captureOnExit(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        DB.f.capture(BB, OB, {
          timestamp: new Date(GB)
        })
      }
      captureClientError(BB, OB, GB) {
        this.setFlag("had_error"), this.capture("client_error", {
          kind: BB,
          message: RB(OB).slice(0, 300),
          source: null,
          error_name: null,
          ...GB
        })
      }
      takeFullSnapshot() {
        if (this.tryFullSnapshot()) return;
        const BB = performance.now() + 1500,
          OB = setInterval((() => {
            (this.tryFullSnapshot() || performance.now() >= BB) && clearInterval(OB)
          }), 100)
      }
      setVideoStatus(BB, OB) {
        DB.f.register({
          replay_video_status: BB
        });
        const GB = "stopped_cellular" === BB ? "cellular" : "stopped_error" === BB ? "error" : null;
        null !== GB && (this.capture("replay_video_stopped", {
          reason: GB,
          detail: null === OB ? null : RB(OB).slice(0, 300)
        }), this.addReplayMarker("replay_video_stopped", {
          reason: GB
        }))
      }
      stopDomRecording() {
        DB.f.stopSessionRecording(), DB.f.register({
          dom_recorded: !1
        })
      }
      optOut() {
        this.stopDomRecording(), DB.f.set_config({
          before_send: () => null
        })
      }
      takeDomBatch(BB) {
        null !== this.onDomBatch ? this.onDomBatch(BB) : console.warn("Session replay: posthog-js recorded the page of an events-only recording; dropped it")
      }
      tryFullSnapshot() {
        var BB;
        return !(null === (BB = DB.f.sessionRecording) || void 0 === BB || !BB.started) && (XB().rrweb.record.takeFullSnapshot(), !0)
      }
      patchRecorder() {
        this.recorderPatched || (this.recorderPatched = !0, function() {
          const BB = XB().rrwebPlugins,
            OB = BB.getRecordConsolePlugin;
          BB.getRecordConsolePlugin = () => OB({
            level: ["warn", "error", "assert"]
          })
        }(), this.markClockOnFullSnapshots())
      }
      markClockOnFullSnapshots() {
        const BB = XB().rrweb.record,
          OB = BB.takeFullSnapshot;
        BB.takeFullSnapshot = BB => {
          OB(BB), this.markClock()
        }
      }
      markClock() {
        this.clockMarked = this.addReplayMarker(YB.i.clock, {
          epochMs: (0, sO.e)(),
          perfNowMs: performance.now()
        }) || this.clockMarked
      }
      markClockIfDue(BB, OB) {
        this.clockMarked && BB % OB !== 0 || this.markClock()
      }
      addReplayMarker(BB) {
        var OB, GB;
        let YB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (!(arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) || DB.f.sessionRecordingStarted()) && null !== (OB = null === (GB = DB.f.sessionRecording) || void 0 === GB ? void 0 : GB.tryAddCustomEvent(BB, YB)) && void 0 !== OB && OB
      }
      gameJoined(BB, OB) {
        this.unregisterGameContext(), this.gameContextKeys = Object.keys(OB), DB.f.register(OB), this.firstGameJoined || (this.firstGameJoined = !0, DB.f.setPersonProperties(void 0, {
          first_game_ever: OB.game_name,
          first_game_ever_with_variation: OB.game_name_with_variation,
          first_game_ever_analytics_id: OB.game_analytics_id
        })), this.tags.gameJoined(BB, Date.now()), this.updateTags()
      }
      gameLeft() {
        this.unregisterGameContext(), this.tags.gameLeft(Date.now()), this.fpsMonitor.endEpisode(Date.now()), this.updateTags()
      }
      setFlag(BB) {
        this.tags.setFlag(BB) && this.updateTags()
      }
      addHitch(BB) {
        this.tags.addHitch(BB) && this.updateTags()
      }
      setSessionProperties(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        DB.f.register(BB), OB && DB.f.setPersonProperties(BB)
      }
      addPingSample(BB) {
        this.tags.addPingSample(BB) && this.updateTags()
      }
      addFpsSample(BB) {
        this.fpsMonitor.addSample(BB, Date.now());
        const OB = this.fpsMonitor.getTags();
        null !== OB && (this.tags.setFpsTags(OB), this.updateTags())
      }
      addUnboundKeyPresses(BB) {
        this.tags.addUnboundKeyPresses(BB), this.updateTags()
      }
      finalTags() {
        return this.fpsMonitor.endEpisode(Date.now()), this.tags.toProperties(Date.now())
      }
      updateTags() {
        const BB = this.tags.toProperties(),
          OB = JSON.stringify(BB);
        OB !== this.lastTagsJson && (this.lastTagsJson = OB, DB.f.register(BB), null === this.personUpdateTimer && (this.personUpdateTimer = setTimeout((() => {
          this.personUpdateTimer = null, DB.f.setPersonProperties(this.tags.toProperties())
        }), 0)))
      }
      unregisterGameContext() {
        for (const BB of this.gameContextKeys) DB.f.unregister(BB);
        this.gameContextKeys = []
      }
    }
  },
  40497: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => QB
    });
    const YB = 20;
    let DB = Date.now() - performance.now();

    function QB() {
      const BB = performance.now(),
        OB = Date.now();
      return Math.abs(OB - (BB + DB)) > YB && (DB = OB - BB), BB + DB
    }
  },
  40477: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB,
      i: () => QB,
      m: () => DB
    });
    const YB = 32768;

    function DB(BB) {
      return (new TextEncoder).encode(BB).byteLength
    }
    const QB = new class {
      constructor() {
        this.inFlightBytes = 0, this.inFlightLabels = new Map
      }
      async fetch(BB, OB, GB, YB) {
        if (this.inFlightBytes + GB > 49152) return await fetch(BB, OB);
        this.inFlightBytes += GB, this.countLabel(YB, 1);
        const DB = () => {
          this.inFlightBytes -= GB, this.countLabel(YB, -1)
        };
        let QB;
        try {
          QB = await fetch(BB, {
            ...OB,
            keepalive: !0
          })
        } catch (jB) {
          var oB;
          if (DB(), null !== (oB = OB.signal) && void 0 !== oB && oB.aborted) throw jB;
          return console.info("Session replay keepalive request failed; retrying without keepalive.", jB), await fetch(BB, OB)
        }
        return DB(), QB
      }
      isInFlight(BB) {
        var OB;
        return (null !== (OB = this.inFlightLabels.get(BB)) && void 0 !== OB ? OB : 0) > 0
      }
      sendBeacon(BB, OB) {
        const GB = DB(OB);
        return !(this.inFlightBytes + GB > 57344) && this.beaconSent(navigator.sendBeacon(BB, new Blob([OB], {
          type: "text/plain"
        })), GB)
      }
      sendUploadBeacon(BB, OB, GB) {
        return !(this.inFlightBytes + GB > 40960) && this.beaconSent(navigator.sendBeacon(BB, OB), GB)
      }
      countLabel(BB, OB) {
        var GB;
        void 0 !== BB && this.inFlightLabels.set(BB, (null !== (GB = this.inFlightLabels.get(BB)) && void 0 !== GB ? GB : 0) + OB)
      }
      beaconSent(BB, OB) {
        return BB && (this.inFlightBytes += OB, setTimeout((() => {
          this.inFlightBytes -= OB
        }), 1e4)), BB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);