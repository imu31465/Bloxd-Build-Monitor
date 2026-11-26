export const id = 61;
export const ids = [61];
export const modules = {
  40805: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      ReplayPostHog: () => HL
    });
    var AH = LH(3761),
      rH = LH(40809),
      SH = LH(40792);
    const hH = new Set(["partycode", "lobby", "vm", "invite", "invitecode", "code", "token", "access_token", "id_token", "refresh_token", "auth", "key", "state", "ticket", "jointicket", "secret", "password", "sig", "signature"]),
      tH = new Set(["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "bfcid", "irclid", "_kx", "_gl", "yclid", "srsltid", "mc_eid", "s_kwcid", "ef_id", "_hsenc", "mkt_tok"]),
      zH = "redacted",
      CH = /([?&#])([^=&#?\s"']+)=([^&#?\s"'<>\\]*)/g,
      EH = /(\/play\/[^/?#\s"'<>\\]+\/)[^/?#\s"'<>\\]+/gi,
      XH = /\/play\//i,
      GH = /lobby|party/i;

    function YH(HH) {
      try {
        return decodeURIComponent(HH)
      } catch {
        return null
      }
    }

    function uH(HH) {
      const BH = HH.includes("%") ? YH(HH) : null;
      if (null === BH || BH === HH) return HH;
      let LH = QH(`?${BH}`).slice(1);
      return LH === BH && (LH = uH(BH)), LH === BH ? HH : encodeURIComponent(LH)
    }

    function QH(HH) {
      return HH.includes("=") || XH.test(HH) ? HH.replace(CH, ((HH, BH, LH, AH) => {
        var rH;
        const SH = (null !== (rH = YH(LH)) && void 0 !== rH ? rH : LH).toLowerCase();
        if (hH.has(SH)) return `${BH}${LH}=${zH}`;
        if (tH.has(SH) && "" !== AH) return `${BH}${LH}=<masked>`;
        const CH = uH(AH);
        return CH === AH ? HH : `${BH}${LH}=${CH}`
      })).replace(EH, `$1${zH}`) : HH
    }
    const WH = new Set(["href", "src", "srcset", "action", "formaction", "poster", "xlink:href"]);

    function MH(HH, BH) {
      return WH.has(HH.toLowerCase()) ? QH(BH) : BH
    }

    function xH(HH) {
      return GH.test(HH) ? zH : QH(HH)
    }

    function vH(HH) {
      if (HH)
        for (const [BH, LH] of Object.entries(HH)) "string" === typeof LH && (HH[BH] = QH(LH))
    }

    function PH(HH) {
      var BH;
      Array.isArray(HH.payload) && (HH.payload = (BH = HH.payload).some((HH => "string" === typeof HH && GH.test(HH))) ? [JSON.stringify(zH)] : BH.map((HH => "string" === typeof HH ? QH(HH) : HH))), Array.isArray(HH.trace) && (HH.trace = HH.trace.map((HH => "string" === typeof HH ? QH(HH) : HH)))
    }

    function TH(HH) {
      if (null === HH) return null;
      const BH = HH.properties.$snapshot_data;
      return vH(HH.properties), vH(HH.properties.$set), vH(HH.properties.$set_once), vH(HH.$set), vH(HH.$set_once),
        function(HH) {
          if (Array.isArray(HH))
            for (const BH of HH) {
              const HH = null === BH || void 0 === BH ? void 0 : BH.data;
              if (!HH || "object" !== typeof HH) continue;
              "string" === typeof HH.href && (HH.href = QH(HH.href));
              const LH = HH.payload;
              LH && "object" === typeof LH && (BH.type === AH.c.Plugin && "string" === typeof HH.plugin && HH.plugin.includes("console") ? PH(LH) : vH(LH))
            }
        }(BH), HH
    }
    const UH = new Set(["class", "id", "rel", "type", "role", "tabindex", "width", "height", "dir", "lang", "disabled", "hidden", "checked", "selected", "readonly", "draggable", "media", "charset", "crossorigin", "aria-hidden", "aria-expanded", "aria-selected", "aria-pressed", "aria-checked", "aria-disabled", "xmlns", "viewbox", "d", "fill", "stroke", "stroke-width", "transform", "x", "y", "cx", "cy", "r", "points", "x1", "y1", "x2", "y2", "rx", "ry", "opacity", "fill-rule", "clip-rule", "stroke-linecap", "stroke-linejoin", "preserveaspectratio", "xmlns:xlink", "colspan", "rowspan"]),
      VH = new Set(["_csstext", "rr_width", "rr_height", "rr_left", "rr_top", "rr_position", "rr_transform", "rr_display", "rr_scrollleft", "rr_scrolltop", "rr_mediastate", "rr_open_mode"]),
      OH = new Set(["data-pad-key", "data-pad-repeat"]),
      bH = new Set(["href", "src", "srcset", "xlink:href"]),
      kH = new Set(["title", "$title", "message", "detail", "game_display_name"]),
      mH = "img, picture, video";

    function oH(HH, BH, LH) {
      const AH = HH.toLowerCase();
      return "style" === AH ? BH.replace(/url\((?:"[^"]*"|'[^']*'|[^)]*)\)/gi, "none") : bH.has(AH) && "A" !== LH.tagName ? MH(HH, BH) : UH.has(AH) || VH.has(AH) || AH.startsWith("data-pad-") && !OH.has(AH) ? BH : BH.replace(/\S/g, "*")
    }

    function IH(HH) {
      if (!/^(https?:\/\/|\/)/i.test(HH)) return HH;
      let BH;
      try {
        BH = new URL(HH, "https://bloxd.invalid")
      } catch {
        return HH
      }
      const [LH = "", ...AH] = BH.pathname.split("/").slice(1), rH = `/${LH}${AH.some((HH=>""!==HH))?"/*":""}`;
      return HH.startsWith("/") ? rH : `${BH.origin}${rH}`
    }

    function fH(HH) {
      if (HH)
        for (const [BH, LH] of Object.entries(HH)) kH.has(BH) ? delete HH[BH] : "string" === typeof LH && (HH[BH] = IH(LH))
    }

    function lH(HH) {
      ! function(HH) {
        if (Array.isArray(HH))
          for (const BH of HH) {
            const HH = null === BH || void 0 === BH ? void 0 : BH.data;
            HH && "object" === typeof HH && ("string" === typeof HH.href && (HH.href = IH(HH.href)), HH.payload && "object" === typeof HH.payload && fH(HH.payload))
          }
      }(HH.properties.$snapshot_data), fH(HH.properties), "$screen" === HH.event && String(HH.properties.$screen_name).startsWith("custom: ") && (HH.properties.$screen_name = `custom: ${String(HH.properties.game_analytics_id)}`), fH(HH.properties.$set), fH(HH.properties.$set_once), fH(HH.$set), fH(HH.$set_once)
    }
    const KH = AH.i.map((HH => `.${HH}`)).join(", "),
      cH = ["iframe", "script", 'link:not([rel~="stylesheet"])', ".AdBannerContainer > [id]", "#GenericVideoInner", "ins.adsbygoogle", '[id^="google_ads_"]'],
      eH = [".PadKeyboardPreviewText", ".PadKeyboardPhraseRow"].join(", ");

    function qH(HH, BH) {
      return null !== BH && void 0 !== BH && BH.closest(KH) ? HH : HH.replace(/\S/g, "*")
    }

    function gH(HH) {
      const BH = function(HH) {
        return HH.anonymised ? {
          enable_recording_console_log: !1,
          session_recording: {
            blockSelector: [...cH, mH].join(", "),
            maskTextSelector: "*",
            maskTextFn: HH.showsChat ? qH : null,
            maskAttributeFn: oH
          }
        } : {
          enable_recording_console_log: !0,
          session_recording: {
            blockSelector: [...cH, (BH = HH.ownOrigins, `img[src^="http"]${BH.map((HH=>`:not([src^="${HH}/"])`)).join("")}`)].join(", "),
            maskTextSelector: HH.showsChat ? eH : `${eH}, ${KH}`,
            maskAttributeFn: MH
          }
        };
        var BH
      }(HH);
      return {
        api_host: HH.apiHost,
        persistence: "memory",
        bootstrap: {
          distinctID: HH.recordingId,
          isIdentifiedID: !1,
          sessionID: HH.recordingId
        },
        person_profiles: "always",
        mask_personal_data_properties: !0,
        custom_personal_data_properties: [...tH],
        session_idle_timeout_seconds: 36e3,
        disable_external_dependency_loading: !0,
        opt_out_useragent_filter: HH.allowAutomatedBrowsers,
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
        enable_recording_console_log: BH.enable_recording_console_log,
        before_send: BH => {
          const LH = TH(BH);
          return null === LH || (HH.anonymised && lH(LH), "$snapshot" === LH.event ? function(HH, BH) {
            const {
              $snapshot_data: LH,
              $window_id: AH
            } = HH.properties;
            try {
              BH({
                windowId: AH,
                events: LH
              })
            } catch (rH) {
              console.error("Session replay couldn't take a page recording batch.", rH)
            }
          }(LH, HH.onDomBatch) : HH.onTimelineEvent(LH)), null
        },
        disable_session_recording: !HH.recordDom,
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
          ...BH.session_recording
        }
      }
    }

    function NH() {
      return window.__PosthogExtensions__
    }
    var RH = LH(625),
      jH = LH(120);

    function nH() {
      var HH;
      const BH = navigator,
        LH = new Date;
      return {
        local_hour: LH.getHours(),
        local_weekday: LH.getDay(),
        ...BH.hardwareConcurrency ? {
          cpu_cores: BH.hardwareConcurrency
        } : {},
        ...BH.deviceMemory ? {
          device_memory_gb: BH.deviceMemory
        } : {},
        ...null !== (HH = BH.connection) && void 0 !== HH && HH.effectiveType ? {
          network_type: BH.connection.effectiveType
        } : {}
      }
    }

    function FH(HH) {
      var BH;
      const LH = HH.tags;
      return {
        panel_entry_reason: null !== (BH = LH.recording_reason) && void 0 !== BH ? BH : "unknown",
        panel_entry_date: (new Date).toISOString().slice(0, 10),
        ...void 0 === LH.sample_rate ? {} : {
          panel_entry_sample_rate: LH.sample_rate
        }
      }
    }

    function DH(HH, BH) {
      return {
        recording_id: HH.recordingId,
        recording_scopes: HH.scopes.join(","),
        dom_recorded: BH
      }
    }

    function wH(HH, BH) {
      const LH = {};
      for (const [AH, rH] of Object.entries(BH)) LH[`${HH}${AH}`] = rH;
      return LH
    }
    class ZH {
      constructor(HH) {
        this.options = HH, this.buckets = new Map, this.lastEvictionMs = -1 / 0
      }
      allow(HH, BH) {
        this.evictExpired(HH, BH);
        let LH = this.buckets.get(HH);
        var AH, rH;
        (void 0 === LH || BH - LH.startMs >= this.options.windowMs) && (LH = {
          startMs: BH,
          count: 0,
          suppressed: null !== (AH = null === (rH = LH) || void 0 === rH ? void 0 : rH.suppressed) && void 0 !== AH ? AH : 0
        }, this.buckets.set(HH, LH));
        if (LH.count >= this.options.maxPerWindow) return LH.suppressed++, null;
        LH.count++;
        const SH = LH.suppressed;
        return LH.suppressed = 0, SH
      }
      evictExpired(HH, BH) {
        if (!(BH - this.lastEvictionMs < this.options.windowMs)) {
          this.lastEvictionMs = BH;
          for (const [LH, AH] of this.buckets) {
            const rH = (BH - AH.startMs) / this.options.windowMs;
            LH !== HH && rH >= (0 === AH.suppressed ? 1 : 10) && this.buckets.delete(LH)
          }
        }
      }
    }

    function dH(HH, BH, LH) {
      const AH = new URL(HH);
      return AH.pathname = `${AH.pathname.replace(/\/+$/,"")}/replay/${encodeURIComponent(BH)}`, AH.searchParams.set("timestamp", String(Math.round(LH - 5e3))), AH.toString()
    }
    class aH {
      constructor(HH) {
        this.options = HH, this.throttle = new ZH({
          maxPerWindow: 3,
          windowMs: 6e4
        })
      }
      annotate(HH, BH) {
        const LH = Date.now(),
          AH = this.throttle.allow("logged", LH);
        var rH;
        null !== AH && this.options.captureError(HH.message || HH.name, {
          error_name: HH.name || null,
          error_fingerprint: null !== (rH = BH.fingerprint) && void 0 !== rH ? rH : null,
          suppressed_since_last: AH
        });
        return {
          replay_recording_id: this.options.recordingId,
          ...this.options.domRecorded ? {
            replay_url: dH(this.options.dashboardHost, this.options.getSessionId(), LH)
          } : {}
        }
      }
    }

    function sH(HH) {
      return HH < 50 ? "<50" : HH < 100 ? "50-100" : HH < 200 ? "100-200" : HH < 400 ? "200-400" : "400+"
    }
    class JH {
      constructor() {
        this.gamesJoined = [], this.flags = new Set, this.firstGame = null, this.fpsTags = null, this.maxHitchMs = 0, this.pingSumMs = 0, this.pingSamples = 0, this.maxPingMs = 0, this.unboundKeyPresses = new Map
      }
      gameJoined(HH, BH) {
        this.gamesJoined.includes(HH) || this.gamesJoined.push(HH), null === this.firstGame && (this.firstGame = {
          joinedAtMs: BH,
          leftAtMs: null
        })
      }
      gameLeft(HH) {
        null !== this.firstGame && null === this.firstGame.leftAtMs && (this.firstGame.leftAtMs = HH)
      }
      setFlag(HH) {
        return !this.flags.has(HH) && (this.flags.add(HH), !0)
      }
      setFpsTags(HH) {
        this.fpsTags = HH
      }
      addHitch(HH) {
        return !(HH <= this.maxHitchMs) && (this.maxHitchMs = HH, !0)
      }
      addPingSample(HH) {
        const BH = this.pingTags();
        this.pingSumMs += HH, this.pingSamples++, this.maxPingMs = Math.max(this.maxPingMs, HH);
        const LH = this.pingTags();
        return (null === BH || void 0 === BH ? void 0 : BH.ping_avg_bucket) !== (null === LH || void 0 === LH ? void 0 : LH.ping_avg_bucket) || (null === BH || void 0 === BH ? void 0 : BH.ping_max_bucket) !== (null === LH || void 0 === LH ? void 0 : LH.ping_max_bucket)
      }
      addUnboundKeyPresses(HH) {
        for (const [LH, AH] of HH) {
          var BH;
          this.unboundKeyPresses.set(LH, (null !== (BH = this.unboundKeyPresses.get(LH)) && void 0 !== BH ? BH : 0) + AH)
        }
      }
      toProperties() {
        var HH;
        let BH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return {
          ...{
            first_game: null !== (HH = this.gamesJoined[0]) && void 0 !== HH ? HH : "",
            games_joined: this.gamesJoined.join(","),
            games_joined_count: this.gamesJoined.length,
            quick_quit: this.isQuickQuit(BH),
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
        let HH = 0,
          BH = "",
          LH = 0;
        for (const [AH, rH] of this.unboundKeyPresses) HH += rH, (rH > LH || rH === LH && AH < BH) && (BH = AH, LH = rH);
        return {
          unbound_key_presses: HH,
          top_unbound_key: BH
        }
      }
      pingTags() {
        return 0 === this.pingSamples ? null : {
          ping_avg_bucket: sH(this.pingSumMs / this.pingSamples),
          ping_max_bucket: sH(this.maxPingMs)
        }
      }
      isQuickQuit(HH) {
        var BH;
        if (null === this.firstGame) return !1;
        const LH = null !== (BH = this.firstGame.leftAtMs) && void 0 !== BH ? BH : HH;
        return null !== LH && LH - this.firstGame.joinedAtMs < AH.n
      }
    }
    var iH = LH(1168),
      pH = LH(1011),
      yH = LH(317),
      HB = LH(1016),
      BB = LH(1005),
      LB = LH(3030),
      AB = LH(15),
      rB = LH(1998),
      SB = LH(18),
      hB = LH(1297),
      tB = LH(1253),
      zB = LH(1504),
      CB = LH(2236),
      EB = LH(1659),
      XB = LH(40779),
      GB = LH(81),
      YB = LH(40772),
      uB = LH(1270);
    class QB {
      constructor(HH, BH, LH) {
        this.replay = HH, this.quitContext = BH, this.flows = LH, this.errorThrottle = new ZH({
          maxPerWindow: 3,
          windowMs: 6e4
        }), this.hitchThrottle = new ZH({
          maxPerWindow: 5,
          windowMs: 6e4
        }), this.attachedToRender = !1
      }
      start() {
        window.addEventListener("error", (HH => {
            const BH = HH.error;
            this.captureError("error", HH.message, HH.filename ? `${HH.filename}:${HH.lineno}:${HH.colno}` : null, BH instanceof Error ? BH.name : null, (0, YB.c)(HH))
          })), window.addEventListener("unhandledrejection", (HH => {
            const BH = HH.reason;
            this.captureError("unhandled_rejection", BH instanceof Error ? BH.message : String(BH), null, BH instanceof Error ? BH.name : null, (0, YB.c)(HH))
          })), SB.k.subscribe("unrecoverableError", (HH => {
            this.captureError("unrecoverable", HH, null, null, !0)
          })),
          function(HH) {
            var BH, LH;
            if ("undefined" === typeof PerformanceObserver || null === (BH = null === (LH = PerformanceObserver.supportedEntryTypes) || void 0 === LH ? void 0 : LH.includes("long-animation-frame")) || void 0 === BH || !BH) return;
            let AH = null;
            new PerformanceObserver((BH => {
              for (const SH of BH.getEntries()) {
                var LH, rH;
                const BH = SH,
                  hH = !(null !== AH && BH.startTime - AH.endMs < 50) || BH.duration >= 3 * (null !== (LH = null === (rH = AH) || void 0 === rH ? void 0 : rH.durationMs) && void 0 !== LH ? LH : 0);
                AH = {
                  endMs: BH.startTime + BH.duration,
                  durationMs: BH.duration
                }, !document.hidden && BH.duration >= 100 && hH && HH({
                  frameMs: BH.duration,
                  mainThreadMs: (0, uB.m)(BH)
                })
              }
            })).observe({
              type: "long-animation-frame"
            })
          }((HH => {
            this.onFrameHitch(HH)
          }))
      }
      attachToRender() {
        if (this.attachedToRender) return;
        const HH = (0, tB.K)().gameRender();
        null !== HH && (this.attachedToRender = !0, this.replay.setSessionProperties(Object.fromEntries([
          ["renderer", HH.renderer],
          ["gpu_vendor", (0, GB.getGpuVendor)()]
        ])), HH.canvas.addEventListener("webglcontextlost", (() => {
          this.replay.setFlag("had_error"), this.replay.capture("webgl_context_lost")
        })), HH.canvas.addEventListener("webglcontextrestored", (() => {
          this.replay.capture("webgl_context_restored")
        })))
      }
      captureError(HH, BH, LH, rH, SH) {
        const hH = xH(BH).slice(0, 300);
        SH && null !== this.flows.stay && this.quitContext.noteError(performance.now());
        const tH = this.errorThrottle.allow(`${HH}:${hH}`, Date.now());
        null !== tH && (this.replay.captureClientError(HH, hH, {
          source: LH,
          error_name: rH,
          suppressed_since_last: tH
        }), this.replay.addReplayMarker(AH.j.error, {
          kind: HH,
          message: hH
        }))
      }
      onFrameHitch(HH) {
        let {
          frameMs: BH,
          mainThreadMs: LH
        } = HH;
        const AH = this.flows.stay;
        if (null === AH || null === AH.playableAtMs || performance.now() - AH.playableAtMs < 2e3) return;
        (0, EB.t)() || this.quitContext.noteHitch(performance.now()), this.replay.addHitch(Math.round(BH));
        const rH = this.hitchThrottle.allow("frame_hitch", Date.now());
        null !== rH && this.replay.capture("frame_hitch", {
          Qz: Math.round(BH),
          main_thread_ms: Math.round(LH),
          game_name_with_variation: AH.name,
          suppressed_since_last: rH
        })
      }
    }
    var WB = LH(7057),
      MB = LH(304);
    class xB {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.steps = HH, this.furthestIndex = -1, this.heldIndex = -1, this.gateIndex = void 0, this.gateIndex = null === BH ? 1 / 0 : HH.indexOf(BH)
      }
      reach(HH) {
        const BH = this.steps.indexOf(HH);
        if (BH > this.gateIndex && this.furthestIndex < this.gateIndex) return this.heldIndex = Math.max(this.heldIndex, BH), null;
        const LH = BH === this.gateIndex ? Math.max(BH, this.heldIndex) : BH;
        return LH <= this.furthestIndex ? null : (this.furthestIndex = LH, LH)
      }
      get furthest() {
        return -1 === this.furthestIndex ? null : this.steps[this.furthestIndex]
      }
      get furthestStepIndex() {
        return this.furthestIndex
      }
    }
    const vB = {
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
    class PB {
      constructor(HH) {
        this.threshold = HH, this.times = [], this.armed = !0, this.lastAtMs = -1 / 0
      }
      note(HH) {
        const {
          count: BH,
          windowMs: LH
        } = this.threshold;
        if (!this.armed && HH - this.lastAtMs >= LH && (this.armed = !0), this.lastAtMs = HH, !this.armed) return !1;
        for (this.times.push(HH); this.times.length > 0 && HH - this.times[0] >= LH;) this.times.shift();
        return !(this.times.length < BH) && (this.times.length = 0, this.armed = !1, !0)
      }
    }
    class TB {
      constructor(HH) {
        this.onSignal = HH, this.bursts = new Map, this.seen = [], this.signalCount = 0, this.idleCounted = !1;
        for (const [BH, LH] of Object.entries(vB)) this.bursts.set(BH, new PB(LH))
      }
      note(HH, BH) {
        if (this.bursts.get(HH).note(BH)) {
          const {
            count: BH,
            windowMs: LH
          } = vB[HH];
          this.signal(HH, BH, LH)
        }
      }
      checkIdle(HH) {
        let {
          nowMs: BH,
          lastInputAtMs: LH,
          pointerLocked: AH,
          playable: rH,
          visible: SH
        } = HH;
        BH - (null !== LH && void 0 !== LH ? LH : 0) < 3e4 ? this.idleCounted = !1 : !this.idleCounted && AH && rH && SH && (this.idleCounted = !0, this.signal("idle_pointer_locked", 1, 3e4))
      }
      tags() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const BH = HH && !this.seen.includes("rage_quit") ? [...this.seen, "rage_quit"] : this.seen;
        return {
          frustration_score: this.signalCount + (HH ? 1 : 0),
          frustration_signals: BH.join(",")
        }
      }
      signal(HH, BH, LH) {
        this.signalCount++, this.seen.includes(HH) || this.seen.push(HH), this.onSignal(HH, BH, LH)
      }
    }
    const UB = WB.i.indexOf("first_input"),
      VB = WB.i.indexOf("first_move"),
      OB = {
        keyboardMouse: "keyboard",
        touch: "touch",
        gamepad: "pad"
      };
    class bB {
      constructor(HH, BH, LH) {
        this.replay = HH, this.quitContext = BH, this.deps = LH, this.ladder = new xB(WB.c, "first_move"), this.frustration = void 0, this.frustrationThrottle = new ZH({
          maxPerWindow: 5,
          windowMs: 6e4
        }), this.activations = new Set, this.currentStay = null, this.moveSubscriptions = [], this.everPlayable = !1, this.everPointerLocked = !1, this.pointerUnlockedAtMs = -1 / 0, this.everythingMenu = null, this.lastGameName = null, this.unsentStepMarkers = [], this.frustration = new TB(((HH, BH, LH) => {
          this.onFrustration(HH, BH, LH)
        })), BH.setFlowProperties((HH => this.quitProperties(HH)))
      }
      get stay() {
        return this.currentStay
      }
      start() {
        var HH;
        this.reachStep("page_loaded"), SB.k.subscribe("sessionReplayStayOpened", (HH => {
          this.resendStay(HH)
        })), SB.k.subscribe("pointerLockUpdate", (HH => {
          this.pointerLockChanged(HH)
        })), SB.k.subscribe("localBlockMined", (() => {
          this.blockBroken()
        })), SB.k.subscribe("blockChangeRefused", (() => {
          this.noteFrustration("block_change_refused")
        })), SB.k.subscribe("controlsTutorialShown", (HH => {
          this.controlsTutorialShown(HH)
        })), SB.k.subscribe("showShopTouchTutorial", (HH => {
          !1 !== HH && this.controlsTutorialShown("shop")
        })), SB.k.subscribe("appManagerUpdated|openInGameMenuName", (HH => {
          this.inGameMenuChanged(HH)
        })), SB.k.subscribe("appManagerUpdated|openEverythingMenuName", (HH => {
          this.everythingMenuChanged(HH)
        })), document.addEventListener("pointerlockerror", (() => {
          this.pointerLockFailed()
        })), null === (HH = (0, XB.c)()) || void 0 === HH || HH.onUnboundKey((() => {
          this.unboundKeyPressed()
        }))
      }
      gameLoading() {
        this.reachStep("game_loading")
      }
      gameJoined(HH, BH, LH) {
        const AH = LH && BH === this.lastGameName;
        this.lastGameName = BH, this.stopWatchingMoves();
        const rH = {
          name: BH,
          joinedAtMs: Date.now(),
          playableAtMs: null,
          visiblePlayedMs: 0,
          deaths: 0,
          ladder: new xB(WB.i, "first_move"),
          unboundKeyPresses: 0
        };
        return this.currentStay = rH, this.reachStayStep("joined"), HH >= 2 && !AH && this.reachStep("second_game"), rH
      }
      gamePlayable() {
        const HH = this.currentStay;
        null !== HH && (HH.playableAtMs = this.deps.now(), this.everPlayable = !0, this.reachStep("game_playable"), this.reachStayStep("game_playable"), this.deps.isPointerLocked() && this.pointerLocked(), this.watchMoves())
      }
      input() {
        const HH = this.currentStay;
        null === HH || null === HH.playableAtMs || HH.ladder.furthestStepIndex >= UB || (this.reachStep("first_input"), this.reachStayStep("first_input"))
      }
      played60s() {
        this.reachStep("played_60s"), this.reachStayStep("played_60s")
      }
      gameLeft() {
        this.stopWatchingMoves(), this.currentStay = null
      }
      IX() {
        var HH, BH, LH;
        this.sendStepMarkers(), this.frustration.checkIdle({
          nowMs: this.deps.now(),
          lastInputAtMs: Math.max(null !== (HH = this.quitContext.getLastInputAtMs()) && void 0 !== HH ? HH : 0, null !== (BH = null === (LH = this.currentStay) || void 0 === LH ? void 0 : LH.playableAtMs) && void 0 !== BH ? BH : 0),
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
          input: OB[this.deps.getInputDevice()]
        }), this.reachStep("first_move"), this.reachStayStep("first_move")
      }
      blockBroken() {
        this.isPlayable() && (this.activate("first_block_broken"), this.reachStep("first_block"), this.reachStayStep("first_block"))
      }
      inGameMenuChanged(HH) {
        null !== HH && this.menuOpened(HH, "inventory" === HH ? "first_inventory_open" : null)
      }
      everythingMenuChanged(HH) {
        const BH = null === this.everythingMenu;
        this.everythingMenu = HH, null !== HH && (this.menuOpened(HH, HH === MB.o.SETTINGS ? "first_settings_open" : null), HH === MB.o.SETTINGS && BH && null !== this.currentStay && this.noteFrustration("menu_toggling"))
      }
      pointerLockChanged(HH) {
        HH ? this.pointerLocked() : this.pointerUnlockedAtMs = this.deps.now()
      }
      controlsTutorialShown(HH) {
        const BH = `controls_tutorial_${HH}`;
        this.activations.has(BH) || (this.activations.add(BH), this.replay.capture("controls_tutorial_shown", {
          tutorial: HH,
          ...this.timing()
        }))
      }
      unboundKeyPressed() {
        this.noteFrustration("unbound_key_burst");
        const HH = this.currentStay;
        null !== HH && HH.unboundKeyPresses < WB.k && (HH.unboundKeyPresses++, this.deps.publishStayProgress({
          unboundKeyPresses: HH.unboundKeyPresses
        }))
      }
      noteFrustration(HH) {
        this.frustration.note(HH, this.deps.now())
      }
      quitProperties(HH) {
        return {
          ...this.ladderTags(),
          ...this.frustration.tags(HH),
          never_pointer_locked: this.everPlayable && !this.everPointerLocked && !this.deps.isTouchScreen() && "gamepad" !== this.deps.getInputDevice()
        }
      }
      isPlayable() {
        return null !== this.currentStay && null !== this.currentStay.playableAtMs
      }
      ladderTags() {
        var HH;
        return {
          furthest_step: null !== (HH = this.ladder.furthest) && void 0 !== HH ? HH : "",
          furthest_step_index: this.ladder.furthestStepIndex
        }
      }
      reachStep(HH) {
        null !== this.ladder.reach(HH) && (this.replay.setSessionProperties(this.ladderTags(), !1), this.unsentStepMarkers.push(WB.c.indexOf(HH)), this.sendStepMarkers())
      }
      sendStepMarkers() {
        for (; this.unsentStepMarkers.length > 0 && this.replay.addReplayMarker(AH.j.step, {
            step: this.unsentStepMarkers[0]
          }, !0);) this.unsentStepMarkers.shift()
      }
      resendStay(HH) {
        const BH = this.currentStay;
        var LH;
        null !== BH && BH.name === HH && this.deps.publishStayProgress({
          furthestStep: null !== (LH = BH.ladder.furthest) && void 0 !== LH ? LH : void 0,
          unboundKeyPresses: BH.unboundKeyPresses
        })
      }
      reachStayStep(HH) {
        var BH;
        const LH = null === (BH = this.currentStay) || void 0 === BH ? void 0 : BH.ladder;
        void 0 !== LH && null !== LH.reach(HH) && this.deps.publishStayProgress({
          furthestStep: LH.furthest
        })
      }
      menuOpened(HH, BH) {
        this.replay.capture("menu_opened", {
          menu: HH
        }), null !== BH && this.activate(BH)
      }
      activate(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.activations.has(HH) || (this.activations.add(HH), this.replay.capture(HH, {
          ...BH,
          ...this.timing()
        }))
      }
      timing() {
        var HH, BH;
        const LH = this.deps.now(),
          AH = null !== (HH = null === (BH = this.currentStay) || void 0 === BH ? void 0 : BH.playableAtMs) && void 0 !== HH ? HH : null;
        return {
          ms_since_page_load: Math.round(LH),
          ms_since_playable: null === AH ? null : Math.round(LH - AH)
        }
      }
      onFrustration(HH, BH, LH) {
        this.replay.setSessionProperties(this.frustration.tags(), !1), this.replay.addReplayMarker(AH.j.frustration, {
          signal: WB.f.indexOf(HH)
        });
        const rH = this.frustrationThrottle.allow(HH, Date.now());
        null !== rH && this.replay.capture("frustration_signal", {
          signal: HH,
          count: BH,
          window_ms: LH,
          suppressed_since_last: rH
        })
      }
      watchMoves() {
        var HH, BH;
        if (0 === this.moveSubscriptions.length && (null !== (HH = null === (BH = this.currentStay) || void 0 === BH ? void 0 : BH.ladder.furthestStepIndex) && void 0 !== HH ? HH : 1 / 0) < VB) {
          const HH = () => {
            this.moved()
          };
          this.moveSubscriptions = [SB.k.subscribe("usedKeyboard", HH), SB.k.subscribe("stickMoved", HH)]
        }
      }
      stopWatchingMoves() {
        for (const HH of this.moveSubscriptions) SB.k.unsubscribe(HH);
        this.moveSubscriptions = []
      }
    }
    const kB = ["quit_after_hitch", "quit_after_death", "quit_during_load", "quit_in_menu", "quit_idle", "quit_after_ad"],
      mB = ["quit_during_load", "quit_after_ad", "quit_after_death", "quit_after_hitch", "quit_idle", "quit_in_menu"];

    function oB(HH) {
      var BH;
      return null !== (BH = mB.find((BH => HH.includes(BH)))) && void 0 !== BH ? BH : "none"
    }

    function IB(HH, BH, LH) {
      return null !== HH && BH - HH < LH
    }
    class fB {
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
      setFlowProperties(HH) {
        this.flowProperties = HH
      }
      noteInput(HH) {
        this.history.lastInputAtMs = HH
      }
      noteHitch(HH) {
        this.history.lastHitchAtMs = HH
      }
      noteDeath(HH) {
        this.history.lastDeathAtMs = HH
      }
      noteError(HH) {
        this.history.lastErrorAtMs = HH
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
      noteAdFinished(HH) {
        this.history.adPlaying = !1, this.history.lastAdFinishedAtMs = HH
      }
      noteLoadStep(HH) {
        this.lastLoadStep = HH
      }
      getLastLoadStep() {
        return this.lastLoadStep
      }
      quit(HH) {
        const BH = function(HH, BH) {
            var LH, AH;
            const rH = [];
            return IB(BH.lastHitchAtMs, HH.nowMs, 15e3) && rH.push("quit_after_hitch"), IB(BH.lastDeathAtMs, HH.nowMs, 15e3) && rH.push("quit_after_death"), HH.loading ? rH.push("quit_during_load") : "page" !== HH.quitFrom || HH.inGame && !HH.menuOpen || rH.push("quit_in_menu"), IB(null !== (LH = BH.lastInputAtMs) && void 0 !== LH ? LH : 0, HH.nowMs, 6e4) || rH.push("quit_idle"), (!0 === BH.adPlaying || IB(null !== (AH = BH.lastAdFinishedAtMs) && void 0 !== AH ? AH : null, HH.nowMs, 3e4)) && rH.push("quit_after_ad"), rH
          }(HH, this.history),
          LH = function(HH, BH) {
            var LH;
            return IB(BH.lastDeathAtMs, HH, 1e4) || IB(null !== (LH = BH.lastErrorAtMs) && void 0 !== LH ? LH : null, HH, 1e4)
          }(HH.nowMs, this.history),
          AH = {
            quit_from: HH.quitFrom,
            in_game: HH.inGame,
            quit_reasons: BH.join(","),
            quit_reason: oB(BH),
            rage_quit: LH,
            ...this.flowProperties(LH)
          };
        var rH;
        BH.includes("quit_during_load") && (AH.last_load_step = null !== (rH = this.lastLoadStep) && void 0 !== rH ? rH : "none");
        null !== HH.gameName && (AH.game_name_with_variation = HH.gameName, AH.game_name = (0, yH.Wb)(HH.gameName));
        for (const SH of kB) AH[SH] = BH.includes(SH);
        return {
          reasons: BH,
          properties: AH
        }
      }
    }
    class lB {
      constructor(HH) {
        this.deps = HH, this.quitContext = new fB, this.loading = !1, this.inGame = !1, this.switching = !1, this.nextLeaveIsNotAQuit = !1, this.pendingQuit = null, this.exited = !1
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
      joinFailed(HH) {
        this.loading = !1, this.nextLeaveIsNotAQuit = this.inGame, this.deps.capture("join_failed", HH)
      }
      disconnected() {
        this.nextLeaveIsNotAQuit = !0
      }
      kickedForAfk(HH) {
        this.nextLeaveIsNotAQuit = !0, this.deps.capture("kicked_afk", {
          game_name_with_variation: HH
        })
      }
      gameLeft(HH) {
        const BH = this.nextLeaveIsNotAQuit || this.deps.isJoinAbandoned(),
          LH = this.switching,
          AH = this.loading;
        if (this.nextLeaveIsNotAQuit = !1, this.switching = !1, this.inGame = !1, null === HH) return;
        if (LH || (this.loading = !1), BH) return void this.quitContext.forgetGame();
        const rH = this.quitContext.quit({
          quitFrom: "game",
          gameName: HH,
          nowMs: this.deps.now(),
          inGame: !0,
          loading: AH,
          menuOpen: !1
        });
        this.quitContext.forgetGame(), LH ? this.captureSwitch(rH) : this.startPendingQuit(rH)
      }
      gameReplayOpened(HH) {
        this.nextLeaveIsNotAQuit = !0, this.gameLeft(HH), this.deps.capture("game_replay_opened", {
          from_game_name_with_variation: HH
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
      pageHidden(HH) {
        if (this.exited) return;
        this.exited = !0;
        const BH = this.pendingQuit;
        null !== BH && (clearTimeout(BH.timer), this.pendingQuit = null, this.deps.onGameQuit(BH.quit), this.deps.captureOnExit("quit_context", BH.quit.properties, BH.atEpochMs));
        const LH = {
            quitFrom: "page",
            gameName: null,
            nowMs: this.deps.now(),
            inGame: this.inGame,
            loading: this.loading,
            menuOpen: this.deps.isMenuOpen()
          },
          AH = this.quitContext.quit(LH);
        this.inGame && this.deps.onGameQuit(AH), this.deps.captureOnExit("quit_context", {
          ...HH,
          ...AH.properties
        })
      }
      pageRestored() {
        this.exited = !1, this.deps.capture("page_restored", {})
      }
      startPendingQuit(HH) {
        this.resolvePendingQuitAsSwitch();
        const BH = {
          quit: HH,
          atEpochMs: Date.now(),
          timer: setTimeout((() => {
            this.pendingQuit === BH && (this.pendingQuit = null, this.deps.onGameQuit(HH), this.deps.capture("quit_context", HH.properties, BH.atEpochMs))
          }), 1e4)
        };
        this.pendingQuit = BH
      }
      resolvePendingQuitAsSwitch() {
        const HH = this.pendingQuit;
        null !== HH && (clearTimeout(HH.timer), this.pendingQuit = null, "string" === typeof HH.quit.properties.game_name_with_variation && this.captureSwitch(HH.quit))
      }
      captureSwitch(HH) {
        this.deps.capture("game_switched", {
          from_game_name_with_variation: HH.properties.game_name_with_variation,
          from_game_name: HH.properties.game_name,
          after_death: HH.reasons.includes("quit_after_death"),
          after_hitch: HH.reasons.includes("quit_after_hitch")
        })
      }
    }
    var KB = LH(7065);
    class cB {
      constructor(HH) {
        this.replay = HH, this.pointerLockThrottle = new ZH({
          maxPerWindow: 10,
          windowMs: 6e4
        }), this.counts = new Map, this.game = null, this.timer = null
      }
      start(HH) {
        HH.onUnboundKey((HH => {
          this.onUnboundKey(HH)
        })), HH.onPointerLock((HH => {
          const BH = this.pointerLockThrottle.allow("pointer_lock_changed", Date.now());
          null !== BH && this.replay.capture("pointer_lock_changed", {
            locked: HH,
            in_game: "inGame" === AB.c.get("gameState"),
            menu_open: (0, EB.t)(),
            suppressed_since_last: BH
          })
        })), SB.k.subscribe("leaveGame", (() => {
          this.flush(!1)
        })), document.addEventListener("visibilitychange", (() => {
          document.hidden && this.flush(!0)
        }))
      }
      onUnboundKey(HH) {
        var BH, LH;
        const AH = (0, hB.c)().gameNameWithVariation;
        AH !== this.game && (this.flush(!1), this.game = AH);
        const rH = null !== (BH = (0, KB.i)(HH)) && void 0 !== BH ? BH : HH;
        this.counts.set(rH, (null !== (LH = this.counts.get(rH)) && void 0 !== LH ? LH : 0) + 1), this.timer ??= setTimeout((() => {
          this.flush(!1)
        }), 1e4 - Date.now() % 1e4)
      }
      flush(HH) {
        if (null !== this.timer && (clearTimeout(this.timer), this.timer = null), 0 === this.counts.size) return;
        const BH = (LH = this.counts, [...LH].sort(((HH, BH) => BH[1] - HH[1] || (HH[0] < BH[0] ? -1 : 1))));
        var LH;
        let AH = 0;
        for (const [, SH] of BH) AH += SH;
        const rH = {
          key_counts: Object.fromEntries(BH),
          keys: BH.map((HH => {
            let [BH] = HH;
            return BH
          })).join(","),
          top_key: BH[0][0],
          presses: AH,
          game_name: null === this.game ? null : (0, yH.Wb)(this.game),
          game_name_with_variation: this.game
        };
        this.replay.addUnboundKeyPresses(this.counts), this.counts.clear(), HH ? this.replay.captureOnExit("unbound_keys", rH) : this.replay.capture("unbound_keys", rH)
      }
    }
    var eB = LH(152);

    function qB(HH) {
      var BH, LH;
      return null !== (BH = null === (LH = eB.h[HH]) || void 0 === LH ? void 0 : LH.toLowerCase()) && void 0 !== BH ? BH : String(HH)
    }
    class gB {
      constructor(HH, BH) {
        this.replay = HH, this.quitContext = BH, this.startedAtMs = null, this.steps = new Map, this.firstGamePlayable = !1
      }
      started() {
        this.startedAtMs = Date.now()
      }
      stepCompleted(HH) {
        if (this.steps.has(HH)) return;
        const BH = performance.now();
        this.steps.set(HH, BH);
        const LH = qB(HH);
        this.quitContext.noteLoadStep(LH), this.firstGamePlayable || this.replay.capture("game_load_step", {
          load_step: LH,
          step_number: HH,
          ms_since_page_load: Math.round(BH),
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
        let HH = null,
          BH = null;
        for (const [AH, rH] of [...this.steps].sort(((HH, BH) => HH[1] - BH[1]))) null !== BH && (null === HH || rH - BH > HH.ms) && (HH = {
          step: AH,
          ms: rH - BH
        }), BH = rH;
        const LH = null === this.startedAtMs ? null : Date.now() - this.startedAtMs;
        return this.firstGamePlayable = !0, this.ended(), {
          load_ms: LH,
          slowest_load_step: null === HH ? null : qB(HH.step),
          slowest_load_step_ms: null === HH ? null : Math.round(HH.ms)
        }
      }
      resetSteps() {
        this.steps.clear(), this.quitContext.noteLoadStep(null)
      }
    }
    const NB = ["keydown", "pointerdown", "touchstart"];
    class RB {
      constructor(HH) {
        this.replay = HH, this.firstInGameInputSent = !1
      }
      startFirstInputWatch() {
        setTimeout((() => {
          ! function(HH) {
            var BH;
            let LH = !1;
            const AH = (BH, AH, rH) => {
              LH || (LH = !0, HH(BH, AH, rH))
            };
            if ("undefined" !== typeof PerformanceObserver && null !== (BH = PerformanceObserver.supportedEntryTypes) && void 0 !== BH && BH.includes("first-input")) {
              const HH = new PerformanceObserver((BH => {
                const [LH] = BH.getEntries();
                HH.disconnect(), AH(LH.name, LH.startTime, !0)
              }));
              return void HH.observe({
                type: "first-input",
                buffered: !0
              })
            }
            const rH = new AbortController,
              SH = HH => {
                rH.abort(), AH(HH.type, HH.timeStamp, !1)
              };
            for (const hH of NB) window.addEventListener(hH, SH, {
              capture: !0,
              passive: !0,
              signal: rH.signal
            })
          }(((HH, BH, LH) => {
            this.replay.capture("first_input", Object.fromEntries([
              ["input_type", HH],
              ["ms_since_page_load", Math.round(BH)],
              ["buffered", LH]
            ]))
          }))
        }), 100)
      }
      onFirstInGameInput(HH, BH) {
        this.firstInGameInputSent = !0, this.replay.capture("first_ingame_input", Object.fromEntries([
          ["input_type", HH],
          ["ms_since_playable", Math.round(performance.now() - BH)],
          ["ms_since_page_load", Math.round(performance.now())]
        ]))
      }
      capturePageLoadTiming() {
        const HH = performance.getEntriesByType("navigation")[0],
          BH = performance.getEntriesByName("first-contentful-paint")[0];
        this.replay.capture("page_load_timing", {
          ttfb_ms: HH ? Math.round(HH.responseStart) : null,
          first_contentful_paint_ms: BH ? Math.round(BH.startTime) : null,
          dom_content_loaded_ms: HH ? Math.round(HH.domContentLoadedEventEnd) : null,
          load_ms: HH ? Math.round(HH.loadEventEnd) : null,
          transfer_kb: HH ? Math.round(HH.transferSize / 1024) : null,
          recording_started_ms: Math.round(performance.now())
        })
      }
    }
    class jB {
      constructor(HH, BH) {
        this.replay = HH, this.quitContext = BH, this.settings = AB.c.get("clientEscMenuOptions"), this.pendingSettings = {}, this.settingsTimer = null, this.adRequest = null, this.playingAd = null
      }
      start() {
        SB.k.subscribe("purchaseStarted", (HH => {
          let {
            product: BH
          } = HH;
          this.replay.setFlag("purchase_intent"), this.replay.capture("purchase_started", {
            product: BH
          })
        })), SB.k.subscribe("purchaseEnded", (HH => {
          let {
            outcome: BH
          } = HH;
          this.replay.capture("purchase_ended", {
            outcome: BH
          })
        })), SB.k.subscribe("adRequested", (HH => {
          let {
            adKind: BH,
            provider: LH
          } = HH;
          this.adRequest = {
            adKind: BH,
            provider: LH,
            atMs: performance.now()
          }
        })), SB.k.subscribe("appManagerUpdated|soundOnFromAd", (HH => {
          HH && null !== this.playingAd ? this.onAdFinished() : HH || null !== this.playingAd || this.onAdStarted()
        })), SB.k.subscribe("appManagerUpdated|clientEscMenuOptions", (HH => {
          AB.c.isApplyingDefaults ? this.settings = HH : this.onSettingsChanged(HH)
        }))
      }
      onAdStarted() {
        var HH, BH;
        const LH = performance.now(),
          AH = null !== this.adRequest && LH - this.adRequest.atMs < 6e4 ? this.adRequest : null;
        this.adRequest = null, this.playingAd = {
          ad_kind: null !== (HH = null === AH || void 0 === AH ? void 0 : AH.adKind) && void 0 !== HH ? HH : "unknown",
          provider: null !== (BH = null === AH || void 0 === AH ? void 0 : AH.provider) && void 0 !== BH ? BH : null,
          startedAtMs: LH
        }, this.replay.setFlag("ad_shown"), this.quitContext.noteAdStarted(), this.replay.capture("ad_started", this.adProperties(this.playingAd, LH))
      }
      onAdFinished() {
        const HH = performance.now(),
          BH = this.playingAd;
        this.playingAd = null, this.quitContext.noteAdFinished(HH), this.replay.capture("ad_finished", {
          ...this.adProperties(BH, HH),
          ad_ms: Math.round(HH - BH.startedAtMs)
        })
      }
      adProperties(HH, BH) {
        return {
          ad_kind: HH.ad_kind,
          provider: HH.provider,
          minutes_since_page_load: Math.floor(BH / 6e4),
          in_game: "inGame" === AB.c.get("gameState")
        }
      }
      onSettingsChanged(HH) {
        Object.assign(this.pendingSettings, function(HH, BH) {
          const LH = {};
          for (const AH of Object.keys(BH)) HH[AH] !== BH[AH] && (LH[AH] = BH[AH]);
          return LH
        }(this.settings, HH)), this.settings = HH, null !== this.settingsTimer && clearTimeout(this.settingsTimer), this.settingsTimer = setTimeout((() => {
          this.settingsTimer = null, Object.keys(this.pendingSettings).length > 0 && (this.replay.capture("settings_changed", {
            changed_settings: Object.keys(this.pendingSettings),
            values: this.pendingSettings
          }), this.pendingSettings = {})
        }), 2e3)
      }
    }

    function nB(HH) {
      switch ((0, iH.v)(HH)) {
        case pH.e.DISCORD_GUILD:
          return "discord_guild";
        case pH.e.DISCORD_DM:
          return "discord_dm";
        default:
          return (0, iH.N)(HH) ? "public" : "private"
      }
    }
    class FB {
      constructor(HH) {
        this.replay = HH, this.framesThisTick = 0, this.lastTickMs = performance.now(), this.ticks = 0, this.gamesJoined = 0, this.pageEvents = void 0, this.flows = void 0, this.health = void 0, this.leaves = void 0, this.joinLoad = void 0, this.unsubscribeDeaths = () => {}, this.inputSinceActiveMarker = !1, this.firstMinutePlayedSent = !1, this.pageEvents = new RB(HH), this.leaves = new lB({
          capture: (BH, LH, AH) => {
            void 0 === AH ? HH.capture(BH, LH) : HH.captureAt(BH, LH, AH)
          },
          captureOnExit: (BH, LH, AH) => {
            HH.captureOnExit(BH, LH, AH)
          },
          onGameQuit: HH => {
            let {
              reasons: BH,
              properties: LH
            } = HH;
            const AH = LH.game_name_with_variation;
            SB.k.AX("sessionReplayGameQuit", {
              reasons: BH,
              gameName: "string" === typeof AH ? AH : null
            })
          },
          isMenuOpen: EB.t,
          isJoinAbandoned: CB.e,
          now: () => performance.now()
        }), this.joinLoad = new gB(HH, this.leaves.quitContext), this.flows = function(HH, BH) {
          return new bB(HH, BH, {
            now: () => performance.now(),
            isTouchScreen: () => AB.c.get("isTouchScreen"),
            getInputDevice: () => AB.c.get("activeInputDevice"),
            isPointerLocked: () => null !== document.pointerLockElement,
            isPageVisible: () => !document.hidden,
            publishStayProgress: HH => {
              SB.k.AX("sessionReplayStayProgress", HH)
            }
          })
        }(HH, this.leaves.quitContext), this.health = new QB(HH, this.leaves.quitContext, this.flows)
      }
      start() {
        const HH = (0, XB.c)(),
          BH = new cB(this.replay);
        null !== HH && BH.start(HH), this.pageEvents.capturePageLoadTiming(), this.flows.start();
        const LH = AB.c.get("gameState");
        "inGame" === LH ? this.joinConnectedGame() : "loadingScreen" !== LH && "findingLobby" !== LH || this.leaves.joinStarted(), this.subscribeToGameFlow(), new jB(this.replay, this.leaves.quitContext).start(), this.health.start(), this.trackInput(), this.pageEvents.startFirstInputWatch(), (0, tB.B)((() => {
          this.framesThisTick++
        })), setInterval((() => {
          this.Dv()
        }), 1e3), window.addEventListener("pagehide", (() => {
          BH.flush(!0), this.leaves.pageHidden(this.replay.finalTags())
        })), window.addEventListener("pageshow", (HH => {
          HH.persisted && this.leaves.pageRestored()
        }))
      }
      trackInput() {
        const HH = HH => {
          var BH, LH;
          this.inputSinceActiveMarker = !0, this.leaves.quitContext.noteInput(HH.timeStamp), this.flows.input();
          const AH = null !== (BH = null === (LH = this.flows.stay) || void 0 === LH ? void 0 : LH.playableAtMs) && void 0 !== BH ? BH : null;
          this.pageEvents.firstInGameInputSent || null === AH || this.pageEvents.onFirstInGameInput(HH.type, AH)
        };
        for (const BH of ["keydown", "pointerdown", "pointermove", "wheel"]) window.addEventListener(BH, HH, {
          capture: !0,
          passive: !0
        })
      }
      subscribeToGameFlow() {
        SB.k.subscribe("joinedGame", (HH => {
          let {
            gameNameWithVariation: BH,
            lobbyName: LH
          } = HH;
          (0, CB.e)() || this.onJoinedGame(BH, LH)
        })), SB.k.subscribe("leaveGame", (() => {
          var HH, BH;
          const LH = null !== (HH = null === (BH = this.flows.stay) || void 0 === BH ? void 0 : BH.name) && void 0 !== HH ? HH : null;
          this.onLeftGame(), this.leaves.gameLeft(LH)
        })), SB.k.subscribe("replayViewer|replayLoaded", (() => {
          const HH = this.flows.stay;
          null !== HH && (this.onLeftGame(), this.leaves.gameReplayOpened(HH.name))
        })), SB.k.subscribe("matchmakeAndPlayStepCompleted", (HH => {
          let {
            step: BH
          } = HH;
          this.joinLoad.stepCompleted(BH)
        })), SB.k.subscribe("leftPlayPage", (() => {
          this.leaves.playPageLeft(), this.joinLoad.ended()
        })), SB.k.subscribe("joinFailed", (HH => {
          let {
            step: BH,
            severity: LH
          } = HH;
          this.leaves.joinFailed({
            step: BH,
            severity: LH,
            game_name_with_variation: (0, hB.c)().requestedGameNameWithVariation,
            last_load_step: this.leaves.quitContext.getLastLoadStep()
          }), this.joinLoad.ended()
        })), SB.k.subscribe("kickedForAfk", (() => {
          var HH, BH;
          this.leaves.kickedForAfk(null !== (HH = null === (BH = this.flows.stay) || void 0 === BH ? void 0 : BH.name) && void 0 !== HH ? HH : null)
        })), SB.k.subscribe("unwantedLeftGame", (HH => {
          this.leaves.disconnected(), this.replay.setFlag("disconnected"), this.replay.capture("disconnected", {
            reason: HH.reason,
            can_reconnect: HH.canReconnect,
            automatically_reconnect: HH.automaticallyReconnect,
            requires_refresh: HH.requiresRefresh
          })
        })), SB.k.subscribe("appManagerUpdated|gameState", (HH => {
          "loadingScreen" === HH ? this.leaves.joinStarted() : "findingLobby" === HH ? (this.leaves.joinStarted(), this.joinLoad.started(), this.replay.capture("game_loading_started", {
            entry_source: AB.c.get("gameEntrySource")
          }), this.flows.gameLoading()) : "inGame" === HH ? this.onPlayable() : "landingPage" === HH && (this.replay.capture("homepage_viewed"), this.replay.capture("$screen", {
            $screen_name: "homepage"
          }))
        })), SB.k.subscribe("appManagerUpdated|gameEntrySource", (HH => {
          "autoReconnect" !== HH && "manualReconnect" !== HH || this.replay.capture("reconnect_attempted", {
            automatic: "autoReconnect" === HH
          })
        })), SB.k.subscribe("sessionReplayPlayerKill", (HH => {
          let {
            killstreak: BH
          } = HH;
          this.replay.capture("player_kill", {
            killstreak: BH
          })
        }))
      }
      onPlayable() {
        (0, CB.e)() || (0, hB.d)() || (null === this.flows.stay && this.joinConnectedGame(), this.replay.capture("game_playable", {
          ms_since_page_load: Math.round(performance.now()),
          ...this.joinLoad.playable()
        }), this.leaves.gamePlayable(), this.flows.gamePlayable())
      }
      joinConnectedGame() {
        if ((0, hB.d)()) return;
        const {
          gameNameWithVariation: HH,
          lobbyName: BH
        } = (0, hB.c)();
        null !== HH && null !== BH ? this.onJoinedGame(HH, BH) : console.warn("Session replay found a game playable with no game joined; not labelling it")
      }
      onJoinedGame(HH, BH) {
        this.replay.takeFullSnapshot();
        const LH = (0, iH.N)(BH),
          AH = AB.c.get("gameEntrySource");
        this.gamesJoined++, this.leaves.gameJoined(), this.flows.gameJoined(this.gamesJoined, HH, "autoReconnect" === AH || "manualReconnect" === AH), "inGame" === AB.c.get("gameState") && this.flows.gamePlayable();
        const rH = zB.clientSidePartyStateManager.getPartyInformation(),
          SH = {
            game_name: (0, yH.Wb)(HH),
            game_name_with_variation: HH,
            game_number: this.gamesJoined,
            game_analytics_id: (0, HB.g)(HH, LH),
            is_custom_game: (0, BB.l)(HH),
            lobby_type: nB(BH),
            in_party: null !== rH,
            party_size: null === rH ? 0 : rH.memberSocialPreviews.length + 1
          };
        this.replay.gameJoined(HH, SH), this.replay.capture("game_joined", {
          ...SH,
          entry_source: AH
        }), this.replay.capture("$screen", {
          $screen_name: SH.is_custom_game ? `custom: ${SH.game_analytics_id}` : SH.game_name
        }), this.subscribeToDeaths(HH)
      }
      onLeftGame() {
        this.joinLoad.forgetStart();
        const HH = this.flows.stay;
        null !== HH && (this.replay.capture("game_left", {
          game_name_with_variation: HH.name,
          duration_ms: Date.now() - HH.joinedAtMs
        }), this.flows.gameLeft(), this.replay.gameLeft(), this.unsubscribeDeaths(), this.unsubscribeDeaths = () => {})
      }
      subscribeToDeaths(HH) {
        this.unsubscribeDeaths();
        let BH = !0;
        this.unsubscribeDeaths = rB.gameBridge.subscribe("localPlayerAliveSet", (LH => {
          const rH = BH && !LH;
          if (BH = LH, rH) {
            this.leaves.quitContext.noteDeath(performance.now());
            const [BH, LH, rH] = rB.gameBridge.lookup("localPos", null), SH = {
              x: Math.round(BH),
              y: Math.round(LH),
              z: Math.round(rH)
            }, hH = this.flows.stay, tH = null === hH ? {} : {
              death_number: ++hH.deaths,
              seconds_since_join: Math.round((Date.now() - hH.joinedAtMs) / 1e3)
            };
            this.replay.capture("player_died", {
              ...SH,
              game_name_with_variation: HH,
              ...tH
            }), this.replay.addReplayMarker(AH.j.death, SH)
          }
        }))
      }
      Dv() {
        this.health.attachToRender();
        const HH = performance.now(),
          BH = HH - this.lastTickMs,
          LH = BH <= 5e3,
          rH = this.flows.stay;
        if (null !== rH && null !== rH.playableAtMs && !document.hidden && LH && rH.visiblePlayedMs < 6e4 && (rH.visiblePlayedMs += BH, rH.visiblePlayedMs >= 6e4)) {
          const BH = Math.round(HH);
          this.replay.capture("game_played_60s", {
            game_name_with_variation: rH.name,
            ms_since_page_load: BH,
            ...this.firstMinutePlayedSent ? {} : {
              ttff_ms: BH
            }
          }), this.firstMinutePlayedSent = !0, this.flows.played60s()
        }
        this.flows.IX();
        const SH = null !== this.flows.stay && !document.hidden;
        this.replay.addFpsSample(SH && LH && this.framesThisTick > 0 ? 1e3 * this.framesThisTick / BH : null);
        const hH = SH ? LB.c.getLastColyseusPingMs() : null;
        null !== hH && this.replay.addPingSample(hH), this.framesThisTick = 0, this.lastTickMs = HH, this.ticks++, this.ticks % 2 === 0 && (SH && this.inputSinceActiveMarker && this.replay.addReplayMarker(AH.j.active), this.inputSinceActiveMarker = !1), this.replay.markClockIfDue(this.ticks, 30)
      }
    }
    var DB = LH(1148),
      wB = LH(1131),
      ZB = LH(40738);

    function dB(HH) {
      return HH.length + 64
    }
    async function aB() {
      return new Response("{}")
    }

    function sB(HH, BH, LH) {
      return ZB.g.fetch(HH, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain"
        },
        body: BH,
        signal: (0, DB.u)(3e4)
      }, LH)
    }
    class JB {
      constructor(HH) {
        var BH, LH, AH;
        let rH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.uploadToken = HH, this.url = void 0, this.post = void 0, this.isHidden = void 0, this.queue = [], this.retries = [], this.refusedTokens = new Set, this.overflowWarned = !1, this.unloading = !1, this.sendScheduled = !1, this.url = null !== (BH = rH.url) && void 0 !== BH ? BH : `${wB.clientSideServerUrls.indexUrl}/index/replay/timeline`, this.post = null !== (LH = rH.post) && void 0 !== LH ? LH : sB, this.isHidden = null !== (AH = rH.isHidden) && void 0 !== AH ? AH : () => "hidden" === document.visibilityState
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
      add(HH) {
        if (this.refusedTokens.has(this.uploadToken)) return;
        const BH = function(HH) {
            const BH = {
              ...HH.properties
            };
            return void 0 !== HH.$set && (BH.$set = {
              ...HH.properties.$set,
              ...HH.$set
            }), void 0 !== HH.$set_once && (BH.$set_once = {
              ...HH.$set_once,
              ...HH.properties.$set_once
            }), void 0 !== HH.$unset && (BH.$unset = HH.$unset), {
              uuid: HH.uuid,
              event: HH.event,
              timestampMs: HH.timestamp.getTime(),
              properties: JSON.stringify(BH)
            }
          }(HH),
          LH = (0, ZB.h)(JSON.stringify(BH));
        BH.properties.length > 32768 || BH.event.length > 64 || dB(this.uploadToken) + LH > 102400 ? console.warn(`Session replay timeline event ${BH.event.slice(0,64)} is too large for index-server; dropped.`) : (this.queue.push({
          uploadToken: this.uploadToken,
          event: BH,
          bytes: LH,
          attempts: 0
        }), this.trimToCap(), this.queue.length >= 50 ? this.sendQueued() : (this.unloading || this.isHidden()) && this.sendSoon())
      }
      sendSoon() {
        this.sendScheduled || (this.sendScheduled = !0, queueMicrotask((() => {
          this.sendScheduled = !1, this.sendQueued()
        })))
      }
      flush() {
        this.retries.length > 0 && (this.queue = [...this.retries, ...this.queue].sort(((HH, BH) => HH.event.timestampMs - BH.event.timestampMs)), this.retries = []), this.sendQueued()
      }
      sendQueued() {
        for (; this.queue.length > 0;) {
          const HH = this.takeBatch();
          this.refusedTokens.has(HH.uploadToken) || this.send(HH)
        }
      }
      trimToCap() {
        let HH = this.retries.length + this.queue.length - 1e3;
        if (HH <= 0) return void(this.overflowWarned = !1);
        const BH = Math.min(HH, this.retries.length);
        this.retries.splice(0, BH), HH -= BH, this.queue.splice(0, HH), this.overflowWarned || (this.overflowWarned = !0, console.warn("Session replay timeline queue is full; dropping its oldest events until it drains."))
      }
      takeBatch() {
        const HH = this.queue.shift(),
          BH = [HH];
        let LH = dB(HH.uploadToken) + HH.bytes;
        for (; this.queue.length > 0 && BH.length < 100 && this.queue[0].uploadToken === HH.uploadToken && LH + this.queue[0].bytes <= 32768;) {
          const HH = this.queue.shift();
          BH.push(HH), LH += HH.bytes
        }
        return {
          uploadToken: HH.uploadToken,
          events: BH
        }
      }
      async send(HH) {
        const BH = await this.sendOnce(HH);
        if ("refused" === BH && this.refusedTokens.add(HH.uploadToken), "retryLater" !== BH) return;
        const LH = HH.events.filter((HH => ++HH.attempts < 3));
        LH.length < HH.events.length && console.error(`Session replay timeline: dropped ${HH.events.length-LH.length} events after 3 attempts.`), this.retries.push(...LH), this.trimToCap()
      }
      async sendOnce(HH) {
        const BH = {
            uploadToken: HH.uploadToken,
            sentAtMs: Date.now(),
            events: HH.events.map((HH => HH.event))
          },
          LH = JSON.stringify(BH);
        let AH, rH = null;
        try {
          AH = await this.post(this.url, LH, (0, ZB.h)(LH)), AH.ok && (rH = await AH.json())
        } catch (SH) {
          return console.warn("Session replay timeline upload failed.", SH), "retryLater"
        }
        return null === rH ? 408 === AH.status || 429 === AH.status || AH.status >= 500 ? "retryLater" : (console.error(`Session replay timeline upload failed with ${AH.status}; dropped ${HH.events.length} events.`), "dropped") : "rejected" in rH ? rH.retryable ? "retryLater" : (console.warn(`Session replay timeline refused: ${rH.reason}; dropping this recording's events.`), "refused") : "sent"
      }
    }
    var iB = LH(40751),
      pB = LH(5096),
      yB = LH(1260);
    class HL {
      constructor(HH) {
        var BH;
        this.tags = new JH, this.fpsMonitor = void 0, this.errorLogLink = void 0, this.lastTagsJson = "", this.clockMarked = !1, this.personUpdateTimer = null, this.expectedSessionId = "", this.recorderPatched = !1, this.gameContextKeys = [], this.firstGameJoined = !1, this.timeline = void 0, this.onDomBatch = void 0;
        const {
          recording: LH
        } = HH;
        this.onDomBatch = HH.onDomBatch;
        const hH = null !== HH.onDomBatch;
        hH && this.patchRecorder(), this.timeline = new JB(LH.uploadToken, HH.dryRun ? {
            post: aB
          } : {}), this.timeline.start(),
          function(HH) {
            const BH = {
                supportedCompression: [rH.b.GZipJS],
                hasFeatureFlags: !1,
                sessionRecording: {
                  endpoint: "/s/"
                },
                siteApps: [],
                toolbarParams: {},
                toolbarVersion: "toolbar",
                isAuthenticated: !1
              },
              LH = window;
            LH._POSTHOG_REMOTE_CONFIG = {
              ...LH._POSTHOG_REMOTE_CONFIG,
              [HH]: {
                config: BH
              }
            }
          }(HH.posthog.projectApiKey), rH.c.init(HH.posthog.projectApiKey, gH({
            apiHost: HH.posthog.apiHost,
            recordingId: LH.recordingId,
            recordDom: hH,
            ownOrigins: [window.location.origin, new URL(wB.clientSideServerUrls.s3Url, window.location.href).origin],
            anonymised: LH.anonymised,
            showsChat: (0, AH.t)(LH),
            allowAutomatedBrowsers: (0, pB.c)((0, pB.k)(), !1),
            onTimelineEvent: HH => {
              this.timeline.add(HH), "$pageview" === HH.event && HH.properties.$current_url && this.addReplayMarker("$pageview", {
                href: HH.properties.$current_url
              })
            },
            onDomBatch: HH => {
              this.takeDomBatch(HH)
            }
          })), hH && rH.c.startSessionRecording({
            sampling: !0
          }), this.expectedSessionId = LH.recordingId, rH.c.onSessionId((HH => {
            HH !== this.expectedSessionId && console.warn(`Session replay: PostHog session ${HH} differs from recording ${this.expectedSessionId}; events carry recording_id.`)
          })),
          function(HH, BH) {
            const {
              recording: LH
            } = HH, AH = {
              ...LH.tags,
              site_used: jH.siteUsed,
              subsite_used: null !== jH.subsiteUsed && void 0 !== jH.subsiteUsed ? jH.subsiteUsed : "",
              is_iframed: jH.isIframed,
              entry_path: location.pathname,
              ...nH(),
              ...DH(LH, BH),
              client_build: RH.d
            };
            rH.c.register(AH), null !== HH.videoStatus && rH.c.register({
              replay_video_status: HH.videoStatus
            }), rH.c.setPersonProperties(AH, {
              ...wH("initial_", AH),
              ...FH(LH)
            })
          }(HH, hH), this.fpsMonitor = new SH.d({
            onEpisodeStarted: HH => {
              this.capture("low_fps_started", {
                avg_fps: Math.round(HH)
              }), SB.k.AX("sessionReplayLowFps", {
                low: !0
              })
            },
            onEpisodeEnded: HH => {
              this.capture("low_fps_episode", {
                duration_ms: HH.durationMs,
                min_fps: HH.minFps,
                avg_fps: HH.avgFps
              }), SB.k.AX("sessionReplayLowFps", {
                low: !1
              })
            }
          }), this.errorLogLink = new aH({
            dashboardHost: null !== (BH = HH.posthog.dashboardHost) && void 0 !== BH ? BH : HH.posthog.apiHost,
            recordingId: LH.recordingId,
            getSessionId: () => rH.c.get_session_id(),
            domRecorded: hH,
            captureError: (HH, BH) => {
              this.captureClientError("logged", HH, BH)
            }
          }), (0, yB.annotateLoggedErrors)(((HH, BH) => this.errorLogLink.annotate(HH, BH))), new FB(this).start()
      }
      capture(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        rH.c.capture(HH, BH)
      }
      captureAt(HH, BH, LH) {
        rH.c.capture(HH, BH, {
          timestamp: new Date(LH)
        })
      }
      captureOnExit(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        rH.c.capture(HH, BH, {
          timestamp: new Date(LH)
        })
      }
      captureClientError(HH, BH, LH) {
        this.setFlag("had_error"), this.capture("client_error", {
          kind: HH,
          message: xH(BH).slice(0, 300),
          source: null,
          error_name: null,
          ...LH
        })
      }
      takeFullSnapshot() {
        if (this.tryFullSnapshot()) return;
        const HH = performance.now() + 1500,
          BH = setInterval((() => {
            (this.tryFullSnapshot() || performance.now() >= HH) && clearInterval(BH)
          }), 100)
      }
      setVideoStatus(HH, BH) {
        rH.c.register({
          replay_video_status: HH
        });
        const LH = "stopped_cellular" === HH ? "cellular" : "stopped_error" === HH ? "error" : null;
        null !== LH && (this.capture("replay_video_stopped", {
          reason: LH,
          detail: null === BH ? null : xH(BH).slice(0, 300)
        }), this.addReplayMarker("replay_video_stopped", {
          reason: LH
        }))
      }
      stopDomRecording() {
        rH.c.stopSessionRecording(), rH.c.register({
          dom_recorded: !1
        })
      }
      optOut() {
        this.stopDomRecording(), rH.c.set_config({
          before_send: () => null
        })
      }
      takeDomBatch(HH) {
        null !== this.onDomBatch ? this.onDomBatch(HH) : console.warn("Session replay: posthog-js recorded the page of an events-only recording; dropped it")
      }
      tryFullSnapshot() {
        var HH;
        return !(null === (HH = rH.c.sessionRecording) || void 0 === HH || !HH.started) && (NH().rrweb.record.takeFullSnapshot(), !0)
      }
      patchRecorder() {
        this.recorderPatched || (this.recorderPatched = !0, function() {
          const HH = NH().rrwebPlugins,
            BH = HH.getRecordConsolePlugin;
          HH.getRecordConsolePlugin = () => BH({
            level: ["warn", "error", "assert"]
          })
        }(), this.markClockOnFullSnapshots())
      }
      markClockOnFullSnapshots() {
        const HH = NH().rrweb.record,
          BH = HH.takeFullSnapshot;
        HH.takeFullSnapshot = HH => {
          BH(HH), this.markClock()
        }
      }
      markClock() {
        this.clockMarked = this.addReplayMarker(AH.j.clock, {
          epochMs: (0, iB.d)(),
          perfNowMs: performance.now()
        }) || this.clockMarked
      }
      markClockIfDue(HH, BH) {
        this.clockMarked && HH % BH !== 0 || this.markClock()
      }
      addReplayMarker(HH) {
        var BH, LH;
        let AH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (!(arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) || rH.c.sessionRecordingStarted()) && null !== (BH = null === (LH = rH.c.sessionRecording) || void 0 === LH ? void 0 : LH.tryAddCustomEvent(HH, AH)) && void 0 !== BH && BH
      }
      gameJoined(HH, BH) {
        this.unregisterGameContext(), this.gameContextKeys = Object.keys(BH), rH.c.register(BH), this.firstGameJoined || (this.firstGameJoined = !0, rH.c.setPersonProperties(void 0, {
          first_game_ever: BH.game_name,
          first_game_ever_with_variation: BH.game_name_with_variation,
          first_game_ever_analytics_id: BH.game_analytics_id
        })), this.tags.gameJoined(HH, Date.now()), this.updateTags()
      }
      gameLeft() {
        this.unregisterGameContext(), this.tags.gameLeft(Date.now()), this.fpsMonitor.endEpisode(Date.now()), this.updateTags()
      }
      setFlag(HH) {
        this.tags.setFlag(HH) && this.updateTags()
      }
      addHitch(HH) {
        this.tags.addHitch(HH) && this.updateTags()
      }
      setSessionProperties(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        rH.c.register(HH), BH && rH.c.setPersonProperties(HH)
      }
      addPingSample(HH) {
        this.tags.addPingSample(HH) && this.updateTags()
      }
      addFpsSample(HH) {
        this.fpsMonitor.addSample(HH, Date.now());
        const BH = this.fpsMonitor.getTags();
        null !== BH && (this.tags.setFpsTags(BH), this.updateTags())
      }
      addUnboundKeyPresses(HH) {
        this.tags.addUnboundKeyPresses(HH), this.updateTags()
      }
      finalTags() {
        return this.fpsMonitor.endEpisode(Date.now()), this.tags.toProperties(Date.now())
      }
      updateTags() {
        const HH = this.tags.toProperties(),
          BH = JSON.stringify(HH);
        BH !== this.lastTagsJson && (this.lastTagsJson = BH, rH.c.register(HH), null === this.personUpdateTimer && (this.personUpdateTimer = setTimeout((() => {
          this.personUpdateTimer = null, rH.c.setPersonProperties(this.tags.toProperties())
        }), 0)))
      }
      unregisterGameContext() {
        for (const HH of this.gameContextKeys) rH.c.unregister(HH);
        this.gameContextKeys = []
      }
    }
  },
  40751: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH
    });
    const AH = 20;
    let rH = Date.now() - performance.now();

    function SH() {
      const HH = performance.now(),
        BH = Date.now();
      return Math.abs(BH - (HH + rH)) > AH && (rH = BH - HH), HH + rH
    }
  },
  40738: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH,
      g: () => SH,
      h: () => rH
    });
    const AH = 32768;

    function rH(HH) {
      return (new TextEncoder).encode(HH).byteLength
    }
    const SH = new class {
      constructor() {
        this.inFlightBytes = 0, this.inFlightLabels = new Map
      }
      async fetch(HH, BH, LH, AH) {
        if (this.inFlightBytes + LH > 49152) return await fetch(HH, BH);
        this.inFlightBytes += LH, this.countLabel(AH, 1);
        const rH = () => {
          this.inFlightBytes -= LH, this.countLabel(AH, -1)
        };
        let SH;
        try {
          SH = await fetch(HH, {
            ...BH,
            keepalive: !0
          })
        } catch (tH) {
          var hH;
          if (rH(), null !== (hH = BH.signal) && void 0 !== hH && hH.aborted) throw tH;
          return console.info("Session replay keepalive request failed; retrying without keepalive.", tH), await fetch(HH, BH)
        }
        return rH(), SH
      }
      isInFlight(HH) {
        var BH;
        return (null !== (BH = this.inFlightLabels.get(HH)) && void 0 !== BH ? BH : 0) > 0
      }
      sendBeacon(HH, BH) {
        const LH = rH(BH);
        return !(this.inFlightBytes + LH > 57344) && this.beaconSent(navigator.sendBeacon(HH, new Blob([BH], {
          type: "text/plain"
        })), LH)
      }
      sendUploadBeacon(HH, BH, LH) {
        return !(this.inFlightBytes + LH > 40960) && this.beaconSent(navigator.sendBeacon(HH, BH), LH)
      }
      countLabel(HH, BH) {
        var LH;
        void 0 !== HH && this.inFlightLabels.set(HH, (null !== (LH = this.inFlightLabels.get(HH)) && void 0 !== LH ? LH : 0) + BH)
      }
      beaconSent(HH, BH) {
        return HH && (this.inFlightBytes += BH, setTimeout((() => {
          this.inFlightBytes -= BH
        }), 1e4)), HH
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);