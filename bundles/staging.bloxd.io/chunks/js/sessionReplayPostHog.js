export const id = 62;
export const ids = [62];
export const modules = {
  41091: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      ReplayPostHog: () => RG
    });
    var yR = GR(4700),
      tR = GR(41097),
      uR = GR(41079);
    const ZR = new Set(["partycode", "lobby", "vm", "invite", "invitecode", "code", "token", "access_token", "id_token", "refresh_token", "auth", "key", "state", "ticket", "jointicket", "secret", "password", "sig", "signature"]),
      qR = new Set(["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "bfcid", "irclid", "_kx", "_gl", "yclid", "srsltid", "mc_eid", "s_kwcid", "ef_id", "_hsenc", "mkt_tok"]),
      iR = "redacted",
      fR = /([?&#])([^=&#?\s"']+)=([^&#?\s"'<>\\]*)/g,
      VR = /(\/play\/[^/?#\s"'<>\\]+\/)[^/?#\s"'<>\\]+/gi,
      KR = /\/play\//i,
      wR = /lobby|party/i;

    function rR(RR) {
      try {
        return decodeURIComponent(RR)
      } catch {
        return null
      }
    }

    function eR(RR) {
      const JR = RR.includes("%") ? rR(RR) : null;
      if (null === JR || JR === RR) return RR;
      let GR = aR(`?${JR}`).slice(1);
      return GR === JR && (GR = eR(JR)), GR === JR ? RR : encodeURIComponent(GR)
    }

    function aR(RR) {
      return RR.includes("=") || KR.test(RR) ? RR.replace(fR, ((RR, JR, GR, yR) => {
        var tR;
        const uR = (null !== (tR = rR(GR)) && void 0 !== tR ? tR : GR).toLowerCase();
        if (ZR.has(uR)) return `${JR}${GR}=${iR}`;
        if (qR.has(uR) && "" !== yR) return `${JR}${GR}=<masked>`;
        const fR = eR(yR);
        return fR === yR ? RR : `${JR}${GR}=${fR}`
      })).replace(VR, `$1${iR}`) : RR
    }
    const LR = new Set(["href", "src", "srcset", "action", "formaction", "poster", "xlink:href"]);

    function nR(RR, JR) {
      return LR.has(RR.toLowerCase()) ? aR(JR) : JR
    }

    function UR(RR) {
      return wR.test(RR) ? iR : aR(RR)
    }

    function WR(RR) {
      if (RR)
        for (const [JR, GR] of Object.entries(RR)) "string" === typeof GR && (RR[JR] = aR(GR))
    }

    function AR(RR) {
      var JR;
      Array.isArray(RR.payload) && (RR.payload = (JR = RR.payload).some((RR => "string" === typeof RR && wR.test(RR))) ? [JSON.stringify(iR)] : JR.map((RR => "string" === typeof RR ? aR(RR) : RR))), Array.isArray(RR.trace) && (RR.trace = RR.trace.map((RR => "string" === typeof RR ? aR(RR) : RR)))
    }

    function CR(RR) {
      if (null === RR) return null;
      const JR = RR.properties.$snapshot_data;
      return WR(RR.properties), WR(RR.properties.$set), WR(RR.properties.$set_once), WR(RR.$set), WR(RR.$set_once),
        function(RR) {
          if (Array.isArray(RR))
            for (const JR of RR) {
              const RR = null === JR || void 0 === JR ? void 0 : JR.data;
              if (!RR || "object" !== typeof RR) continue;
              "string" === typeof RR.href && (RR.href = aR(RR.href));
              const GR = RR.payload;
              GR && "object" === typeof GR && (JR.type === yR.d.Plugin && "string" === typeof RR.plugin && RR.plugin.includes("console") ? AR(GR) : WR(GR))
            }
        }(JR), RR
    }
    const XR = new Set(["class", "id", "rel", "type", "role", "tabindex", "width", "height", "dir", "lang", "disabled", "hidden", "checked", "selected", "readonly", "draggable", "media", "charset", "crossorigin", "aria-hidden", "aria-expanded", "aria-selected", "aria-pressed", "aria-checked", "aria-disabled", "xmlns", "viewbox", "d", "fill", "stroke", "stroke-width", "transform", "x", "y", "cx", "cy", "r", "points", "x1", "y1", "x2", "y2", "rx", "ry", "opacity", "fill-rule", "clip-rule", "stroke-linecap", "stroke-linejoin", "preserveaspectratio", "xmlns:xlink", "colspan", "rowspan"]),
      MR = new Set(["_csstext", "rr_width", "rr_height", "rr_left", "rr_top", "rr_position", "rr_transform", "rr_display", "rr_scrollleft", "rr_scrolltop", "rr_mediastate", "rr_open_mode"]),
      BR = new Set(["data-pad-key", "data-pad-repeat"]),
      lR = new Set(["href", "src", "srcset", "xlink:href"]),
      pR = new Set(["title", "$title", "message", "detail", "game_display_name"]),
      gR = "img, picture, video";

    function bR(RR, JR, GR) {
      const yR = RR.toLowerCase();
      return "style" === yR ? JR.replace(/url\((?:"[^"]*"|'[^']*'|[^)]*)\)/gi, "none") : lR.has(yR) && "A" !== GR.tagName ? nR(RR, JR) : XR.has(yR) || MR.has(yR) || yR.startsWith("data-pad-") && !BR.has(yR) ? JR : JR.replace(/\S/g, "*")
    }

    function vR(RR) {
      if (!/^(https?:\/\/|\/)/i.test(RR)) return RR;
      let JR;
      try {
        JR = new URL(RR, "https://bloxd.invalid")
      } catch {
        return RR
      }
      const [GR = "", ...yR] = JR.pathname.split("/").slice(1), tR = `/${GR}${yR.some((RR=>""!==RR))?"/*":""}`;
      return RR.startsWith("/") ? tR : `${JR.origin}${tR}`
    }

    function OR(RR) {
      if (RR)
        for (const [JR, GR] of Object.entries(RR)) pR.has(JR) ? delete RR[JR] : "string" === typeof GR && (RR[JR] = vR(GR))
    }

    function xR(RR) {
      ! function(RR) {
        if (Array.isArray(RR))
          for (const JR of RR) {
            const RR = null === JR || void 0 === JR ? void 0 : JR.data;
            RR && "object" === typeof RR && ("string" === typeof RR.href && (RR.href = vR(RR.href)), RR.payload && "object" === typeof RR.payload && OR(RR.payload))
          }
      }(RR.properties.$snapshot_data), OR(RR.properties), "$screen" === RR.event && String(RR.properties.$screen_name).startsWith("custom: ") && (RR.properties.$screen_name = `custom: ${String(RR.properties.game_analytics_id)}`), OR(RR.properties.$set), OR(RR.properties.$set_once), OR(RR.$set), OR(RR.$set_once)
    }
    const NR = yR.i.map((RR => `.${RR}`)).join(", "),
      DR = ["iframe", "script", 'link:not([rel~="stylesheet"])', ".AdBannerContainer > [id]", "#GenericVideoInner", "ins.adsbygoogle", '[id^="google_ads_"]'],
      HR = [".PadKeyboardPreviewText", ".PadKeyboardPhraseRow"].join(", ");

    function oR(RR, JR) {
      return null !== JR && void 0 !== JR && JR.closest(NR) ? RR : RR.replace(/\S/g, "*")
    }

    function cR(RR) {
      const JR = function(RR) {
        return RR.anonymised ? {
          enable_recording_console_log: !1,
          session_recording: {
            blockSelector: [...DR, gR].join(", "),
            maskTextSelector: "*",
            maskTextFn: RR.showsChat ? oR : null,
            maskAttributeFn: bR
          }
        } : {
          enable_recording_console_log: !0,
          session_recording: {
            blockSelector: [...DR, (JR = RR.ownOrigins, `img[src^="http"]${JR.map((RR=>`:not([src^="${RR}/"])`)).join("")}`)].join(", "),
            maskTextSelector: RR.showsChat ? HR : `${HR}, ${NR}`,
            maskAttributeFn: nR
          }
        };
        var JR
      }(RR);
      return {
        api_host: RR.apiHost,
        persistence: "memory",
        bootstrap: {
          distinctID: RR.recordingId,
          isIdentifiedID: !1,
          sessionID: RR.recordingId
        },
        person_profiles: "always",
        mask_personal_data_properties: !0,
        custom_personal_data_properties: [...qR],
        session_idle_timeout_seconds: 36e3,
        disable_external_dependency_loading: !0,
        opt_out_useragent_filter: RR.allowAutomatedBrowsers,
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
        enable_recording_console_log: JR.enable_recording_console_log,
        before_send: JR => {
          const GR = CR(JR);
          return null === GR || (RR.anonymised && xR(GR), "$snapshot" === GR.event ? function(RR, JR) {
            const {
              $snapshot_data: GR,
              $window_id: yR
            } = RR.properties;
            try {
              JR({
                windowId: yR,
                events: GR
              })
            } catch (tR) {
              console.error("Session replay couldn't take a page recording batch.", tR)
            }
          }(GR, RR.onDomBatch) : RR.onTimelineEvent(GR)), null
        },
        disable_session_recording: !RR.recordDom,
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
          ...JR.session_recording
        }
      }
    }

    function PR() {
      return window.__PosthogExtensions__
    }
    var IR = GR(688),
      mR = GR(134);

    function zR() {
      var RR;
      const JR = navigator,
        GR = new Date;
      return {
        local_hour: GR.getHours(),
        local_weekday: GR.getDay(),
        ...JR.hardwareConcurrency ? {
          cpu_cores: JR.hardwareConcurrency
        } : {},
        ...JR.deviceMemory ? {
          device_memory_gb: JR.deviceMemory
        } : {},
        ...null !== (RR = JR.connection) && void 0 !== RR && RR.effectiveType ? {
          network_type: JR.connection.effectiveType
        } : {}
      }
    }

    function SR(RR) {
      var JR;
      const GR = RR.tags;
      return {
        panel_entry_reason: null !== (JR = GR.recording_reason) && void 0 !== JR ? JR : "unknown",
        panel_entry_date: (new Date).toISOString().slice(0, 10),
        ...void 0 === GR.sample_rate ? {} : {
          panel_entry_sample_rate: GR.sample_rate
        }
      }
    }

    function jR(RR, JR) {
      return {
        recording_id: RR.recordingId,
        recording_scopes: RR.scopes.join(","),
        dom_recorded: JR
      }
    }

    function dR(RR, JR) {
      const GR = {};
      for (const [yR, tR] of Object.entries(JR)) GR[`${RR}${yR}`] = tR;
      return GR
    }
    class ER {
      constructor(RR) {
        this.options = RR, this.buckets = new Map, this.lastEvictionMs = -1 / 0
      }
      allow(RR, JR) {
        this.evictExpired(RR, JR);
        let GR = this.buckets.get(RR);
        var yR, tR;
        (void 0 === GR || JR - GR.startMs >= this.options.windowMs) && (GR = {
          startMs: JR,
          count: 0,
          suppressed: null !== (yR = null === (tR = GR) || void 0 === tR ? void 0 : tR.suppressed) && void 0 !== yR ? yR : 0
        }, this.buckets.set(RR, GR));
        if (GR.count >= this.options.maxPerWindow) return GR.suppressed++, null;
        GR.count++;
        const uR = GR.suppressed;
        return GR.suppressed = 0, uR
      }
      evictExpired(RR, JR) {
        if (!(JR - this.lastEvictionMs < this.options.windowMs)) {
          this.lastEvictionMs = JR;
          for (const [GR, yR] of this.buckets) {
            const tR = (JR - yR.startMs) / this.options.windowMs;
            GR !== RR && tR >= (0 === yR.suppressed ? 1 : 10) && this.buckets.delete(GR)
          }
        }
      }
    }

    function YR(RR, JR, GR) {
      const yR = new URL(RR);
      return yR.pathname = `${yR.pathname.replace(/\/+$/,"")}/replay/${encodeURIComponent(JR)}`, yR.searchParams.set("timestamp", String(Math.round(GR - 5e3))), yR.toString()
    }
    class kR {
      constructor(RR) {
        this.options = RR, this.throttle = new ER({
          maxPerWindow: 3,
          windowMs: 6e4
        })
      }
      annotate(RR, JR) {
        const GR = Date.now(),
          yR = this.throttle.allow("logged", GR);
        var tR;
        null !== yR && this.options.captureError(RR.message || RR.name, {
          error_name: RR.name || null,
          error_fingerprint: null !== (tR = JR.fingerprint) && void 0 !== tR ? tR : null,
          suppressed_since_last: yR
        });
        return {
          replay_recording_id: this.options.recordingId,
          ...this.options.domRecorded ? {
            replay_url: YR(this.options.dashboardHost, this.options.getSessionId(), GR)
          } : {}
        }
      }
    }

    function QR(RR) {
      return RR < 50 ? "<50" : RR < 100 ? "50-100" : RR < 200 ? "100-200" : RR < 400 ? "200-400" : "400+"
    }
    class FR {
      constructor() {
        this.gamesJoined = [], this.flags = new Set, this.firstGame = null, this.fpsTags = null, this.maxHitchMs = 0, this.pingSumMs = 0, this.pingSamples = 0, this.maxPingMs = 0, this.unboundKeyPresses = new Map
      }
      gameJoined(RR, JR) {
        this.gamesJoined.includes(RR) || this.gamesJoined.push(RR), null === this.firstGame && (this.firstGame = {
          joinedAtMs: JR,
          leftAtMs: null
        })
      }
      gameLeft(RR) {
        null !== this.firstGame && null === this.firstGame.leftAtMs && (this.firstGame.leftAtMs = RR)
      }
      setFlag(RR) {
        return !this.flags.has(RR) && (this.flags.add(RR), !0)
      }
      setFpsTags(RR) {
        this.fpsTags = RR
      }
      addHitch(RR) {
        return !(RR <= this.maxHitchMs) && (this.maxHitchMs = RR, !0)
      }
      addPingSample(RR) {
        const JR = this.pingTags();
        this.pingSumMs += RR, this.pingSamples++, this.maxPingMs = Math.max(this.maxPingMs, RR);
        const GR = this.pingTags();
        return (null === JR || void 0 === JR ? void 0 : JR.ping_avg_bucket) !== (null === GR || void 0 === GR ? void 0 : GR.ping_avg_bucket) || (null === JR || void 0 === JR ? void 0 : JR.ping_max_bucket) !== (null === GR || void 0 === GR ? void 0 : GR.ping_max_bucket)
      }
      addUnboundKeyPresses(RR) {
        for (const [GR, yR] of RR) {
          var JR;
          this.unboundKeyPresses.set(GR, (null !== (JR = this.unboundKeyPresses.get(GR)) && void 0 !== JR ? JR : 0) + yR)
        }
      }
      toProperties() {
        var RR;
        let JR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return {
          ...{
            first_game: null !== (RR = this.gamesJoined[0]) && void 0 !== RR ? RR : "",
            games_joined: this.gamesJoined.join(","),
            games_joined_count: this.gamesJoined.length,
            quick_quit: this.isQuickQuit(JR),
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
        let RR = 0,
          JR = "",
          GR = 0;
        for (const [yR, tR] of this.unboundKeyPresses) RR += tR, (tR > GR || tR === GR && yR < JR) && (JR = yR, GR = tR);
        return {
          unbound_key_presses: RR,
          top_unbound_key: JR
        }
      }
      pingTags() {
        return 0 === this.pingSamples ? null : {
          ping_avg_bucket: QR(this.pingSumMs / this.pingSamples),
          ping_max_bucket: QR(this.maxPingMs)
        }
      }
      isQuickQuit(RR) {
        var JR;
        if (null === this.firstGame) return !1;
        const GR = null !== (JR = this.firstGame.leftAtMs) && void 0 !== JR ? JR : RR;
        return null !== GR && GR - this.firstGame.joinedAtMs < yR.p
      }
    }
    var TR = GR(1317),
      sR = GR(1136),
      hR = GR(377),
      RJ = GR(1141),
      JJ = GR(1127),
      GJ = GR(3918),
      yJ = GR(25),
      tJ = GR(2134),
      uJ = GR(32),
      ZJ = GR(1449),
      qJ = GR(1397),
      iJ = GR(1655),
      fJ = GR(2380),
      VJ = GR(1800),
      KJ = GR(41066),
      wJ = GR(103),
      rJ = GR(41062),
      eJ = GR(1419);
    class aJ {
      constructor(RR, JR, GR) {
        this.replay = RR, this.quitContext = JR, this.flows = GR, this.errorThrottle = new ER({
          maxPerWindow: 3,
          windowMs: 6e4
        }), this.hitchThrottle = new ER({
          maxPerWindow: 5,
          windowMs: 6e4
        }), this.attachedToRender = !1
      }
      start() {
        window.addEventListener("error", (RR => {
            const JR = RR.error;
            this.captureError("error", RR.message, RR.filename ? `${RR.filename}:${RR.lineno}:${RR.colno}` : null, JR instanceof Error ? JR.name : null, (0, rJ.c)(RR))
          })), window.addEventListener("unhandledrejection", (RR => {
            const JR = RR.reason;
            this.captureError("unhandled_rejection", JR instanceof Error ? JR.message : String(JR), null, JR instanceof Error ? JR.name : null, (0, rJ.c)(RR))
          })), uJ.n.subscribe("unrecoverableError", (RR => {
            this.captureError("unrecoverable", RR, null, null, !0)
          })),
          function(RR) {
            var JR, GR;
            if ("undefined" === typeof PerformanceObserver || null === (JR = null === (GR = PerformanceObserver.supportedEntryTypes) || void 0 === GR ? void 0 : GR.includes("long-animation-frame")) || void 0 === JR || !JR) return;
            let yR = null;
            new PerformanceObserver((JR => {
              for (const uR of JR.getEntries()) {
                var GR, tR;
                const JR = uR,
                  ZR = !(null !== yR && JR.startTime - yR.endMs < 50) || JR.duration >= 3 * (null !== (GR = null === (tR = yR) || void 0 === tR ? void 0 : tR.durationMs) && void 0 !== GR ? GR : 0);
                yR = {
                  endMs: JR.startTime + JR.duration,
                  durationMs: JR.duration
                }, !document.hidden && JR.duration >= 100 && ZR && RR({
                  frameMs: JR.duration,
                  mainThreadMs: (0, eJ.j)(JR)
                })
              }
            })).observe({
              type: "long-animation-frame"
            })
          }((RR => {
            this.onFrameHitch(RR)
          }))
      }
      attachToRender() {
        if (this.attachedToRender) return;
        const RR = (0, qJ.J)().gameRender();
        null !== RR && (this.attachedToRender = !0, this.replay.setSessionProperties(Object.fromEntries([
          ["renderer", RR.renderer],
          ["gpu_vendor", (0, wJ.getGpuVendor)()]
        ])), RR.canvas.addEventListener("webglcontextlost", (() => {
          this.replay.setFlag("had_error"), this.replay.capture("webgl_context_lost")
        })), RR.canvas.addEventListener("webglcontextrestored", (() => {
          this.replay.capture("webgl_context_restored")
        })))
      }
      captureError(RR, JR, GR, tR, uR) {
        const ZR = UR(JR).slice(0, 300);
        uR && null !== this.flows.stay && this.quitContext.noteError(performance.now());
        const qR = this.errorThrottle.allow(`${RR}:${ZR}`, Date.now());
        null !== qR && (this.replay.captureClientError(RR, ZR, {
          source: GR,
          error_name: tR,
          suppressed_since_last: qR
        }), this.replay.addReplayMarker(yR.l.error, {
          kind: RR,
          message: ZR
        }))
      }
      onFrameHitch(RR) {
        let {
          frameMs: JR,
          mainThreadMs: GR
        } = RR;
        const yR = this.flows.stay;
        if (null === yR || null === yR.playableAtMs || performance.now() - yR.playableAtMs < 2e3) return;
        (0, VJ.o)() || this.quitContext.noteHitch(performance.now()), this.replay.addHitch(Math.round(JR));
        const tR = this.hitchThrottle.allow("frame_hitch", Date.now());
        null !== tR && this.replay.capture("frame_hitch", {
          Bi: Math.round(JR),
          main_thread_ms: Math.round(GR),
          game_name_with_variation: yR.name,
          suppressed_since_last: tR
        })
      }
    }
    var LJ = GR(7630),
      nJ = GR(359);
    class UJ {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.steps = RR, this.furthestIndex = -1, this.heldIndex = -1, this.gateIndex = void 0, this.gateIndex = null === JR ? 1 / 0 : RR.indexOf(JR)
      }
      reach(RR) {
        const JR = this.steps.indexOf(RR);
        if (JR > this.gateIndex && this.furthestIndex < this.gateIndex) return this.heldIndex = Math.max(this.heldIndex, JR), null;
        const GR = JR === this.gateIndex ? Math.max(JR, this.heldIndex) : JR;
        return GR <= this.furthestIndex ? null : (this.furthestIndex = GR, GR)
      }
      get furthest() {
        return -1 === this.furthestIndex ? null : this.steps[this.furthestIndex]
      }
      get furthestStepIndex() {
        return this.furthestIndex
      }
    }
    const WJ = {
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
    class AJ {
      constructor(RR) {
        this.threshold = RR, this.times = [], this.armed = !0, this.lastAtMs = -1 / 0
      }
      note(RR) {
        const {
          count: JR,
          windowMs: GR
        } = this.threshold;
        if (!this.armed && RR - this.lastAtMs >= GR && (this.armed = !0), this.lastAtMs = RR, !this.armed) return !1;
        for (this.times.push(RR); this.times.length > 0 && RR - this.times[0] >= GR;) this.times.shift();
        return !(this.times.length < JR) && (this.times.length = 0, this.armed = !1, !0)
      }
    }
    class CJ {
      constructor(RR) {
        this.onSignal = RR, this.bursts = new Map, this.seen = [], this.signalCount = 0, this.idleCounted = !1;
        for (const [JR, GR] of Object.entries(WJ)) this.bursts.set(JR, new AJ(GR))
      }
      note(RR, JR) {
        if (this.bursts.get(RR).note(JR)) {
          const {
            count: JR,
            windowMs: GR
          } = WJ[RR];
          this.signal(RR, JR, GR)
        }
      }
      checkIdle(RR) {
        let {
          nowMs: JR,
          lastInputAtMs: GR,
          pointerLocked: yR,
          playable: tR,
          visible: uR
        } = RR;
        JR - (null !== GR && void 0 !== GR ? GR : 0) < 3e4 ? this.idleCounted = !1 : !this.idleCounted && yR && tR && uR && (this.idleCounted = !0, this.signal("idle_pointer_locked", 1, 3e4))
      }
      tags() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const JR = RR && !this.seen.includes("rage_quit") ? [...this.seen, "rage_quit"] : this.seen;
        return {
          frustration_score: this.signalCount + (RR ? 1 : 0),
          frustration_signals: JR.join(",")
        }
      }
      signal(RR, JR, GR) {
        this.signalCount++, this.seen.includes(RR) || this.seen.push(RR), this.onSignal(RR, JR, GR)
      }
    }
    const XJ = LJ.g.indexOf("first_input"),
      MJ = LJ.g.indexOf("first_move"),
      BJ = {
        keyboardMouse: "keyboard",
        touch: "touch",
        gamepad: "pad"
      };
    class lJ {
      constructor(RR, JR, GR) {
        this.replay = RR, this.quitContext = JR, this.deps = GR, this.ladder = new UJ(LJ.b, "first_move"), this.frustration = void 0, this.frustrationThrottle = new ER({
          maxPerWindow: 5,
          windowMs: 6e4
        }), this.activations = new Set, this.currentStay = null, this.moveSubscriptions = [], this.everPlayable = !1, this.everPointerLocked = !1, this.pointerUnlockedAtMs = -1 / 0, this.everythingMenu = null, this.lastGameName = null, this.unsentStepMarkers = [], this.frustration = new CJ(((RR, JR, GR) => {
          this.onFrustration(RR, JR, GR)
        })), JR.setFlowProperties((RR => this.quitProperties(RR)))
      }
      get stay() {
        return this.currentStay
      }
      start() {
        var RR;
        this.reachStep("page_loaded"), uJ.n.subscribe("sessionReplayStayOpened", (RR => {
          this.resendStay(RR)
        })), uJ.n.subscribe("pointerLockUpdate", (RR => {
          this.pointerLockChanged(RR)
        })), uJ.n.subscribe("localBlockMined", (() => {
          this.blockBroken()
        })), uJ.n.subscribe("blockChangeRefused", (() => {
          this.noteFrustration("block_change_refused")
        })), uJ.n.subscribe("controlsTutorialShown", (RR => {
          this.controlsTutorialShown(RR)
        })), uJ.n.subscribe("showShopTouchTutorial", (RR => {
          !1 !== RR && this.controlsTutorialShown("shop")
        })), uJ.n.subscribe("appManagerUpdated|openInGameMenuName", (RR => {
          this.inGameMenuChanged(RR)
        })), uJ.n.subscribe("appManagerUpdated|openEverythingMenuName", (RR => {
          this.everythingMenuChanged(RR)
        })), document.addEventListener("pointerlockerror", (() => {
          this.pointerLockFailed()
        })), null === (RR = (0, KJ.e)()) || void 0 === RR || RR.onUnboundKey((() => {
          this.unboundKeyPressed()
        }))
      }
      gameLoading() {
        this.reachStep("game_loading")
      }
      gameJoined(RR, JR, GR) {
        const yR = GR && JR === this.lastGameName;
        this.lastGameName = JR, this.stopWatchingMoves();
        const tR = {
          name: JR,
          joinedAtMs: Date.now(),
          playableAtMs: null,
          visiblePlayedMs: 0,
          deaths: 0,
          ladder: new UJ(LJ.g, "first_move"),
          unboundKeyPresses: 0
        };
        return this.currentStay = tR, this.reachStayStep("joined"), RR >= 2 && !yR && this.reachStep("second_game"), tR
      }
      gamePlayable() {
        const RR = this.currentStay;
        null !== RR && (RR.playableAtMs = this.deps.now(), this.everPlayable = !0, this.reachStep("game_playable"), this.reachStayStep("game_playable"), this.deps.isPointerLocked() && this.pointerLocked(), this.watchMoves())
      }
      input() {
        const RR = this.currentStay;
        null === RR || null === RR.playableAtMs || RR.ladder.furthestStepIndex >= XJ || (this.reachStep("first_input"), this.reachStayStep("first_input"))
      }
      played60s() {
        this.reachStep("played_60s"), this.reachStayStep("played_60s")
      }
      gameLeft() {
        this.stopWatchingMoves(), this.currentStay = null
      }
      gK() {
        var RR, JR, GR;
        this.sendStepMarkers(), this.frustration.checkIdle({
          nowMs: this.deps.now(),
          lastInputAtMs: Math.max(null !== (RR = this.quitContext.getLastInputAtMs()) && void 0 !== RR ? RR : 0, null !== (JR = null === (GR = this.currentStay) || void 0 === GR ? void 0 : GR.playableAtMs) && void 0 !== JR ? JR : 0),
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
          input: BJ[this.deps.getInputDevice()]
        }), this.reachStep("first_move"), this.reachStayStep("first_move")
      }
      blockBroken() {
        this.isPlayable() && (this.activate("first_block_broken"), this.reachStep("first_block"), this.reachStayStep("first_block"))
      }
      inGameMenuChanged(RR) {
        null !== RR && this.menuOpened(RR, "inventory" === RR ? "first_inventory_open" : null)
      }
      everythingMenuChanged(RR) {
        const JR = null === this.everythingMenu;
        this.everythingMenu = RR, null !== RR && (this.menuOpened(RR, RR === nJ.o.SETTINGS ? "first_settings_open" : null), RR === nJ.o.SETTINGS && JR && null !== this.currentStay && this.noteFrustration("menu_toggling"))
      }
      pointerLockChanged(RR) {
        RR ? this.pointerLocked() : this.pointerUnlockedAtMs = this.deps.now()
      }
      controlsTutorialShown(RR) {
        const JR = `controls_tutorial_${RR}`;
        this.activations.has(JR) || (this.activations.add(JR), this.replay.capture("controls_tutorial_shown", {
          tutorial: RR,
          ...this.timing()
        }))
      }
      unboundKeyPressed() {
        this.noteFrustration("unbound_key_burst");
        const RR = this.currentStay;
        null !== RR && RR.unboundKeyPresses < LJ.i && (RR.unboundKeyPresses++, this.deps.publishStayProgress({
          unboundKeyPresses: RR.unboundKeyPresses
        }))
      }
      noteFrustration(RR) {
        this.frustration.note(RR, this.deps.now())
      }
      quitProperties(RR) {
        return {
          ...this.ladderTags(),
          ...this.frustration.tags(RR),
          never_pointer_locked: this.everPlayable && !this.everPointerLocked && !this.deps.isTouchScreen() && "gamepad" !== this.deps.getInputDevice()
        }
      }
      isPlayable() {
        return null !== this.currentStay && null !== this.currentStay.playableAtMs
      }
      ladderTags() {
        var RR;
        return {
          furthest_step: null !== (RR = this.ladder.furthest) && void 0 !== RR ? RR : "",
          furthest_step_index: this.ladder.furthestStepIndex
        }
      }
      reachStep(RR) {
        null !== this.ladder.reach(RR) && (this.replay.setSessionProperties(this.ladderTags(), !1), this.unsentStepMarkers.push(LJ.b.indexOf(RR)), this.sendStepMarkers())
      }
      sendStepMarkers() {
        for (; this.unsentStepMarkers.length > 0 && this.replay.addReplayMarker(yR.l.step, {
            step: this.unsentStepMarkers[0]
          }, !0);) this.unsentStepMarkers.shift()
      }
      resendStay(RR) {
        const JR = this.currentStay;
        var GR;
        null !== JR && JR.name === RR && this.deps.publishStayProgress({
          furthestStep: null !== (GR = JR.ladder.furthest) && void 0 !== GR ? GR : void 0,
          unboundKeyPresses: JR.unboundKeyPresses
        })
      }
      reachStayStep(RR) {
        var JR;
        const GR = null === (JR = this.currentStay) || void 0 === JR ? void 0 : JR.ladder;
        void 0 !== GR && null !== GR.reach(RR) && this.deps.publishStayProgress({
          furthestStep: GR.furthest
        })
      }
      menuOpened(RR, JR) {
        this.replay.capture("menu_opened", {
          menu: RR
        }), null !== JR && this.activate(JR)
      }
      activate(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.activations.has(RR) || (this.activations.add(RR), this.replay.capture(RR, {
          ...JR,
          ...this.timing()
        }))
      }
      timing() {
        var RR, JR;
        const GR = this.deps.now(),
          yR = null !== (RR = null === (JR = this.currentStay) || void 0 === JR ? void 0 : JR.playableAtMs) && void 0 !== RR ? RR : null;
        return {
          ms_since_page_load: Math.round(GR),
          ms_since_playable: null === yR ? null : Math.round(GR - yR)
        }
      }
      onFrustration(RR, JR, GR) {
        this.replay.setSessionProperties(this.frustration.tags(), !1), this.replay.addReplayMarker(yR.l.frustration, {
          signal: LJ.d.indexOf(RR)
        });
        const tR = this.frustrationThrottle.allow(RR, Date.now());
        null !== tR && this.replay.capture("frustration_signal", {
          signal: RR,
          count: JR,
          window_ms: GR,
          suppressed_since_last: tR
        })
      }
      watchMoves() {
        var RR, JR;
        if (0 === this.moveSubscriptions.length && (null !== (RR = null === (JR = this.currentStay) || void 0 === JR ? void 0 : JR.ladder.furthestStepIndex) && void 0 !== RR ? RR : 1 / 0) < MJ) {
          const RR = () => {
            this.moved()
          };
          this.moveSubscriptions = [uJ.n.subscribe("usedKeyboard", RR), uJ.n.subscribe("stickMoved", RR)]
        }
      }
      stopWatchingMoves() {
        for (const RR of this.moveSubscriptions) uJ.n.unsubscribe(RR);
        this.moveSubscriptions = []
      }
    }
    const pJ = ["quit_after_hitch", "quit_after_death", "quit_during_load", "quit_in_menu", "quit_idle", "quit_after_ad"],
      gJ = ["quit_during_load", "quit_after_ad", "quit_after_death", "quit_after_hitch", "quit_idle", "quit_in_menu"];

    function bJ(RR) {
      var JR;
      return null !== (JR = gJ.find((JR => RR.includes(JR)))) && void 0 !== JR ? JR : "none"
    }

    function vJ(RR, JR, GR) {
      return null !== RR && JR - RR < GR
    }
    class OJ {
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
      setFlowProperties(RR) {
        this.flowProperties = RR
      }
      noteInput(RR) {
        this.history.lastInputAtMs = RR
      }
      noteHitch(RR) {
        this.history.lastHitchAtMs = RR
      }
      noteDeath(RR) {
        this.history.lastDeathAtMs = RR
      }
      noteError(RR) {
        this.history.lastErrorAtMs = RR
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
      noteAdFinished(RR) {
        this.history.adPlaying = !1, this.history.lastAdFinishedAtMs = RR
      }
      noteLoadStep(RR) {
        this.lastLoadStep = RR
      }
      getLastLoadStep() {
        return this.lastLoadStep
      }
      quit(RR) {
        const JR = function(RR, JR) {
            var GR, yR;
            const tR = [];
            return vJ(JR.lastHitchAtMs, RR.nowMs, 15e3) && tR.push("quit_after_hitch"), vJ(JR.lastDeathAtMs, RR.nowMs, 15e3) && tR.push("quit_after_death"), RR.loading ? tR.push("quit_during_load") : "page" !== RR.quitFrom || RR.inGame && !RR.menuOpen || tR.push("quit_in_menu"), vJ(null !== (GR = JR.lastInputAtMs) && void 0 !== GR ? GR : 0, RR.nowMs, 6e4) || tR.push("quit_idle"), (!0 === JR.adPlaying || vJ(null !== (yR = JR.lastAdFinishedAtMs) && void 0 !== yR ? yR : null, RR.nowMs, 3e4)) && tR.push("quit_after_ad"), tR
          }(RR, this.history),
          GR = function(RR, JR) {
            var GR;
            return vJ(JR.lastDeathAtMs, RR, 1e4) || vJ(null !== (GR = JR.lastErrorAtMs) && void 0 !== GR ? GR : null, RR, 1e4)
          }(RR.nowMs, this.history),
          yR = {
            quit_from: RR.quitFrom,
            in_game: RR.inGame,
            quit_reasons: JR.join(","),
            quit_reason: bJ(JR),
            rage_quit: GR,
            ...this.flowProperties(GR)
          };
        var tR;
        JR.includes("quit_during_load") && (yR.last_load_step = null !== (tR = this.lastLoadStep) && void 0 !== tR ? tR : "none");
        null !== RR.gameName && (yR.game_name_with_variation = RR.gameName, yR.game_name = (0, hR.Sb)(RR.gameName));
        for (const uR of pJ) yR[uR] = JR.includes(uR);
        return {
          reasons: JR,
          properties: yR
        }
      }
    }
    class xJ {
      constructor(RR) {
        this.deps = RR, this.quitContext = new OJ, this.loading = !1, this.inGame = !1, this.switching = !1, this.nextLeaveIsNotAQuit = !1, this.pendingQuit = null, this.exited = !1
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
      joinFailed(RR) {
        this.loading = !1, this.nextLeaveIsNotAQuit = this.inGame, this.deps.capture("join_failed", RR)
      }
      disconnected() {
        this.nextLeaveIsNotAQuit = !0
      }
      kickedForAfk(RR) {
        this.nextLeaveIsNotAQuit = !0, this.deps.capture("kicked_afk", {
          game_name_with_variation: RR
        })
      }
      gameLeft(RR) {
        const JR = this.nextLeaveIsNotAQuit || this.deps.isJoinAbandoned(),
          GR = this.switching,
          yR = this.loading;
        if (this.nextLeaveIsNotAQuit = !1, this.switching = !1, this.inGame = !1, null === RR) return;
        if (GR || (this.loading = !1), JR) return void this.quitContext.forgetGame();
        const tR = this.quitContext.quit({
          quitFrom: "game",
          gameName: RR,
          nowMs: this.deps.now(),
          inGame: !0,
          loading: yR,
          menuOpen: !1
        });
        this.quitContext.forgetGame(), GR ? this.captureSwitch(tR) : this.startPendingQuit(tR)
      }
      gameReplayOpened(RR) {
        this.nextLeaveIsNotAQuit = !0, this.gameLeft(RR), this.deps.capture("game_replay_opened", {
          from_game_name_with_variation: RR
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
      pageHidden(RR) {
        if (this.exited) return;
        this.exited = !0;
        const JR = this.pendingQuit;
        null !== JR && (clearTimeout(JR.timer), this.pendingQuit = null, this.deps.onGameQuit(JR.quit), this.deps.captureOnExit("quit_context", JR.quit.properties, JR.atEpochMs));
        const GR = {
            quitFrom: "page",
            gameName: null,
            nowMs: this.deps.now(),
            inGame: this.inGame,
            loading: this.loading,
            menuOpen: this.deps.isMenuOpen()
          },
          yR = this.quitContext.quit(GR);
        this.inGame && this.deps.onGameQuit(yR), this.deps.captureOnExit("quit_context", {
          ...RR,
          ...yR.properties
        })
      }
      pageRestored() {
        this.exited = !1, this.deps.capture("page_restored", {})
      }
      startPendingQuit(RR) {
        this.resolvePendingQuitAsSwitch();
        const JR = {
          quit: RR,
          atEpochMs: Date.now(),
          timer: setTimeout((() => {
            this.pendingQuit === JR && (this.pendingQuit = null, this.deps.onGameQuit(RR), this.deps.capture("quit_context", RR.properties, JR.atEpochMs))
          }), 1e4)
        };
        this.pendingQuit = JR
      }
      resolvePendingQuitAsSwitch() {
        const RR = this.pendingQuit;
        null !== RR && (clearTimeout(RR.timer), this.pendingQuit = null, "string" === typeof RR.quit.properties.game_name_with_variation && this.captureSwitch(RR.quit))
      }
      captureSwitch(RR) {
        this.deps.capture("game_switched", {
          from_game_name_with_variation: RR.properties.game_name_with_variation,
          from_game_name: RR.properties.game_name,
          after_death: RR.reasons.includes("quit_after_death"),
          after_hitch: RR.reasons.includes("quit_after_hitch")
        })
      }
    }
    var NJ = GR(7640);
    class DJ {
      constructor(RR) {
        this.replay = RR, this.pointerLockThrottle = new ER({
          maxPerWindow: 10,
          windowMs: 6e4
        }), this.counts = new Map, this.game = null, this.timer = null
      }
      start(RR) {
        RR.onUnboundKey((RR => {
          this.onUnboundKey(RR)
        })), RR.onPointerLock((RR => {
          const JR = this.pointerLockThrottle.allow("pointer_lock_changed", Date.now());
          null !== JR && this.replay.capture("pointer_lock_changed", {
            locked: RR,
            in_game: "inGame" === yJ.d.get("gameState"),
            menu_open: (0, VJ.o)(),
            suppressed_since_last: JR
          })
        })), uJ.n.subscribe("leaveGame", (() => {
          this.flush(!1)
        })), document.addEventListener("visibilitychange", (() => {
          document.hidden && this.flush(!0)
        }))
      }
      onUnboundKey(RR) {
        var JR, GR;
        const yR = (0, ZJ.d)().gameNameWithVariation;
        yR !== this.game && (this.flush(!1), this.game = yR);
        const tR = null !== (JR = (0, NJ.i)(RR)) && void 0 !== JR ? JR : RR;
        this.counts.set(tR, (null !== (GR = this.counts.get(tR)) && void 0 !== GR ? GR : 0) + 1), this.timer ??= setTimeout((() => {
          this.flush(!1)
        }), 1e4 - Date.now() % 1e4)
      }
      flush(RR) {
        if (null !== this.timer && (clearTimeout(this.timer), this.timer = null), 0 === this.counts.size) return;
        const JR = (GR = this.counts, [...GR].sort(((RR, JR) => JR[1] - RR[1] || (RR[0] < JR[0] ? -1 : 1))));
        var GR;
        let yR = 0;
        for (const [, uR] of JR) yR += uR;
        const tR = {
          key_counts: Object.fromEntries(JR),
          keys: JR.map((RR => {
            let [JR] = RR;
            return JR
          })).join(","),
          top_key: JR[0][0],
          presses: yR,
          game_name: null === this.game ? null : (0, hR.Sb)(this.game),
          game_name_with_variation: this.game
        };
        this.replay.addUnboundKeyPresses(this.counts), this.counts.clear(), RR ? this.replay.captureOnExit("unbound_keys", tR) : this.replay.capture("unbound_keys", tR)
      }
    }
    var HJ = GR(163);

    function oJ(RR) {
      var JR, GR;
      return null !== (JR = null === (GR = HJ.j[RR]) || void 0 === GR ? void 0 : GR.toLowerCase()) && void 0 !== JR ? JR : String(RR)
    }
    class cJ {
      constructor(RR, JR) {
        this.replay = RR, this.quitContext = JR, this.startedAtMs = null, this.steps = new Map, this.firstGamePlayable = !1
      }
      started() {
        this.startedAtMs = Date.now()
      }
      stepCompleted(RR) {
        if (this.steps.has(RR)) return;
        const JR = performance.now();
        this.steps.set(RR, JR);
        const GR = oJ(RR);
        this.quitContext.noteLoadStep(GR), this.firstGamePlayable || this.replay.capture("game_load_step", {
          load_step: GR,
          step_number: RR,
          ms_since_page_load: Math.round(JR),
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
        let RR = null,
          JR = null;
        for (const [yR, tR] of [...this.steps].sort(((RR, JR) => RR[1] - JR[1]))) null !== JR && (null === RR || tR - JR > RR.ms) && (RR = {
          step: yR,
          ms: tR - JR
        }), JR = tR;
        const GR = null === this.startedAtMs ? null : Date.now() - this.startedAtMs;
        return this.firstGamePlayable = !0, this.ended(), {
          load_ms: GR,
          slowest_load_step: null === RR ? null : oJ(RR.step),
          slowest_load_step_ms: null === RR ? null : Math.round(RR.ms)
        }
      }
      resetSteps() {
        this.steps.clear(), this.quitContext.noteLoadStep(null)
      }
    }
    const PJ = ["keydown", "pointerdown", "touchstart"];
    class IJ {
      constructor(RR) {
        this.replay = RR, this.firstInGameInputSent = !1
      }
      startFirstInputWatch() {
        setTimeout((() => {
          ! function(RR) {
            var JR;
            let GR = !1;
            const yR = (JR, yR, tR) => {
              GR || (GR = !0, RR(JR, yR, tR))
            };
            if ("undefined" !== typeof PerformanceObserver && null !== (JR = PerformanceObserver.supportedEntryTypes) && void 0 !== JR && JR.includes("first-input")) {
              const RR = new PerformanceObserver((JR => {
                const [GR] = JR.getEntries();
                RR.disconnect(), yR(GR.name, GR.startTime, !0)
              }));
              return void RR.observe({
                type: "first-input",
                buffered: !0
              })
            }
            const tR = new AbortController,
              uR = RR => {
                tR.abort(), yR(RR.type, RR.timeStamp, !1)
              };
            for (const ZR of PJ) window.addEventListener(ZR, uR, {
              capture: !0,
              passive: !0,
              signal: tR.signal
            })
          }(((RR, JR, GR) => {
            this.replay.capture("first_input", Object.fromEntries([
              ["input_type", RR],
              ["ms_since_page_load", Math.round(JR)],
              ["buffered", GR]
            ]))
          }))
        }), 100)
      }
      onFirstInGameInput(RR, JR) {
        this.firstInGameInputSent = !0, this.replay.capture("first_ingame_input", Object.fromEntries([
          ["input_type", RR],
          ["ms_since_playable", Math.round(performance.now() - JR)],
          ["ms_since_page_load", Math.round(performance.now())]
        ]))
      }
      capturePageLoadTiming() {
        const RR = performance.getEntriesByType("navigation")[0],
          JR = performance.getEntriesByName("first-contentful-paint")[0];
        this.replay.capture("page_load_timing", {
          ttfb_ms: RR ? Math.round(RR.responseStart) : null,
          first_contentful_paint_ms: JR ? Math.round(JR.startTime) : null,
          dom_content_loaded_ms: RR ? Math.round(RR.domContentLoadedEventEnd) : null,
          load_ms: RR ? Math.round(RR.loadEventEnd) : null,
          transfer_kb: RR ? Math.round(RR.transferSize / 1024) : null,
          recording_started_ms: Math.round(performance.now())
        })
      }
    }
    class mJ {
      constructor(RR, JR) {
        this.replay = RR, this.quitContext = JR, this.settings = yJ.d.get("clientEscMenuOptions"), this.pendingSettings = {}, this.settingsTimer = null, this.adRequest = null, this.playingAd = null
      }
      start() {
        uJ.n.subscribe("purchaseStarted", (RR => {
          let {
            product: JR
          } = RR;
          this.replay.setFlag("purchase_intent"), this.replay.capture("purchase_started", {
            product: JR
          })
        })), uJ.n.subscribe("purchaseEnded", (RR => {
          let {
            outcome: JR
          } = RR;
          this.replay.capture("purchase_ended", {
            outcome: JR
          })
        })), uJ.n.subscribe("adRequested", (RR => {
          let {
            adKind: JR,
            provider: GR
          } = RR;
          this.adRequest = {
            adKind: JR,
            provider: GR,
            atMs: performance.now()
          }
        })), uJ.n.subscribe("appManagerUpdated|soundOnFromAd", (RR => {
          RR && null !== this.playingAd ? this.onAdFinished() : RR || null !== this.playingAd || this.onAdStarted()
        })), uJ.n.subscribe("appManagerUpdated|clientEscMenuOptions", (RR => {
          yJ.d.isApplyingDefaults ? this.settings = RR : this.onSettingsChanged(RR)
        }))
      }
      onAdStarted() {
        var RR, JR;
        const GR = performance.now(),
          yR = null !== this.adRequest && GR - this.adRequest.atMs < 6e4 ? this.adRequest : null;
        this.adRequest = null, this.playingAd = {
          ad_kind: null !== (RR = null === yR || void 0 === yR ? void 0 : yR.adKind) && void 0 !== RR ? RR : "unknown",
          provider: null !== (JR = null === yR || void 0 === yR ? void 0 : yR.provider) && void 0 !== JR ? JR : null,
          startedAtMs: GR
        }, this.replay.setFlag("ad_shown"), this.quitContext.noteAdStarted(), this.replay.capture("ad_started", this.adProperties(this.playingAd, GR))
      }
      onAdFinished() {
        const RR = performance.now(),
          JR = this.playingAd;
        this.playingAd = null, this.quitContext.noteAdFinished(RR), this.replay.capture("ad_finished", {
          ...this.adProperties(JR, RR),
          ad_ms: Math.round(RR - JR.startedAtMs)
        })
      }
      adProperties(RR, JR) {
        return {
          ad_kind: RR.ad_kind,
          provider: RR.provider,
          minutes_since_page_load: Math.floor(JR / 6e4),
          in_game: "inGame" === yJ.d.get("gameState")
        }
      }
      onSettingsChanged(RR) {
        Object.assign(this.pendingSettings, function(RR, JR) {
          const GR = {};
          for (const yR of Object.keys(JR)) RR[yR] !== JR[yR] && (GR[yR] = JR[yR]);
          return GR
        }(this.settings, RR)), this.settings = RR, null !== this.settingsTimer && clearTimeout(this.settingsTimer), this.settingsTimer = setTimeout((() => {
          this.settingsTimer = null, Object.keys(this.pendingSettings).length > 0 && (this.replay.capture("settings_changed", {
            changed_settings: Object.keys(this.pendingSettings),
            values: this.pendingSettings
          }), this.pendingSettings = {})
        }), 2e3)
      }
    }

    function zJ(RR) {
      switch ((0, TR.q)(RR)) {
        case sR.e.DISCORD_GUILD:
          return "discord_guild";
        case sR.e.DISCORD_DM:
          return "discord_dm";
        default:
          return (0, TR.E)(RR) ? "public" : "private"
      }
    }
    class SJ {
      constructor(RR) {
        this.replay = RR, this.framesThisTick = 0, this.lastTickMs = performance.now(), this.ticks = 0, this.gamesJoined = 0, this.pageEvents = void 0, this.flows = void 0, this.health = void 0, this.leaves = void 0, this.joinLoad = void 0, this.unsubscribeDeaths = () => {}, this.inputSinceActiveMarker = !1, this.firstMinutePlayedSent = !1, this.pageEvents = new IJ(RR), this.leaves = new xJ({
          capture: (JR, GR, yR) => {
            void 0 === yR ? RR.capture(JR, GR) : RR.captureAt(JR, GR, yR)
          },
          captureOnExit: (JR, GR, yR) => {
            RR.captureOnExit(JR, GR, yR)
          },
          onGameQuit: RR => {
            let {
              reasons: JR,
              properties: GR
            } = RR;
            const yR = GR.game_name_with_variation;
            uJ.n.JK("sessionReplayGameQuit", {
              reasons: JR,
              gameName: "string" === typeof yR ? yR : null
            })
          },
          isMenuOpen: VJ.o,
          isJoinAbandoned: fJ.f,
          now: () => performance.now()
        }), this.joinLoad = new cJ(RR, this.leaves.quitContext), this.flows = function(RR, JR) {
          return new lJ(RR, JR, {
            now: () => performance.now(),
            isTouchScreen: () => yJ.d.get("isTouchScreen"),
            getInputDevice: () => yJ.d.get("activeInputDevice"),
            isPointerLocked: () => null !== document.pointerLockElement,
            isPageVisible: () => !document.hidden,
            publishStayProgress: RR => {
              uJ.n.JK("sessionReplayStayProgress", RR)
            }
          })
        }(RR, this.leaves.quitContext), this.health = new aJ(RR, this.leaves.quitContext, this.flows)
      }
      start() {
        const RR = (0, KJ.e)(),
          JR = new DJ(this.replay);
        null !== RR && JR.start(RR), this.pageEvents.capturePageLoadTiming(), this.flows.start();
        const GR = yJ.d.get("gameState");
        "inGame" === GR ? this.joinConnectedGame() : "loadingScreen" !== GR && "findingLobby" !== GR || this.leaves.joinStarted(), this.subscribeToGameFlow(), new mJ(this.replay, this.leaves.quitContext).start(), this.health.start(), this.trackInput(), this.pageEvents.startFirstInputWatch(), (0, qJ.D)((() => {
          this.framesThisTick++
        })), setInterval((() => {
          this.UW()
        }), 1e3), window.addEventListener("pagehide", (() => {
          JR.flush(!0), this.leaves.pageHidden(this.replay.finalTags())
        })), window.addEventListener("pageshow", (RR => {
          RR.persisted && this.leaves.pageRestored()
        }))
      }
      trackInput() {
        const RR = RR => {
          var JR, GR;
          this.inputSinceActiveMarker = !0, this.leaves.quitContext.noteInput(RR.timeStamp), this.flows.input();
          const yR = null !== (JR = null === (GR = this.flows.stay) || void 0 === GR ? void 0 : GR.playableAtMs) && void 0 !== JR ? JR : null;
          this.pageEvents.firstInGameInputSent || null === yR || this.pageEvents.onFirstInGameInput(RR.type, yR)
        };
        for (const JR of ["keydown", "pointerdown", "pointermove", "wheel"]) window.addEventListener(JR, RR, {
          capture: !0,
          passive: !0
        })
      }
      subscribeToGameFlow() {
        uJ.n.subscribe("joinedGame", (RR => {
          let {
            gameNameWithVariation: JR,
            lobbyName: GR
          } = RR;
          (0, fJ.f)() || this.onJoinedGame(JR, GR)
        })), uJ.n.subscribe("leaveGame", (() => {
          var RR, JR;
          const GR = null !== (RR = null === (JR = this.flows.stay) || void 0 === JR ? void 0 : JR.name) && void 0 !== RR ? RR : null;
          this.onLeftGame(), this.leaves.gameLeft(GR)
        })), uJ.n.subscribe("replayViewer|replayLoaded", (() => {
          const RR = this.flows.stay;
          null !== RR && (this.onLeftGame(), this.leaves.gameReplayOpened(RR.name))
        })), uJ.n.subscribe("matchmakeAndPlayStepCompleted", (RR => {
          let {
            step: JR
          } = RR;
          this.joinLoad.stepCompleted(JR)
        })), uJ.n.subscribe("leftPlayPage", (() => {
          this.leaves.playPageLeft(), this.joinLoad.ended()
        })), uJ.n.subscribe("joinFailed", (RR => {
          let {
            step: JR,
            severity: GR
          } = RR;
          this.leaves.joinFailed({
            step: JR,
            severity: GR,
            game_name_with_variation: (0, ZJ.d)().requestedGameNameWithVariation,
            last_load_step: this.leaves.quitContext.getLastLoadStep()
          }), this.joinLoad.ended()
        })), uJ.n.subscribe("kickedForAfk", (() => {
          var RR, JR;
          this.leaves.kickedForAfk(null !== (RR = null === (JR = this.flows.stay) || void 0 === JR ? void 0 : JR.name) && void 0 !== RR ? RR : null)
        })), uJ.n.subscribe("unwantedLeftGame", (RR => {
          this.leaves.disconnected(), this.replay.setFlag("disconnected"), this.replay.capture("disconnected", {
            reason: RR.reason,
            can_reconnect: RR.canReconnect,
            automatically_reconnect: RR.automaticallyReconnect,
            requires_refresh: RR.requiresRefresh
          })
        })), uJ.n.subscribe("appManagerUpdated|gameState", (RR => {
          "loadingScreen" === RR ? this.leaves.joinStarted() : "findingLobby" === RR ? (this.leaves.joinStarted(), this.joinLoad.started(), this.replay.capture("game_loading_started", {
            entry_source: yJ.d.get("gameEntrySource")
          }), this.flows.gameLoading()) : "inGame" === RR ? this.onPlayable() : "landingPage" === RR && (this.replay.capture("homepage_viewed"), this.replay.capture("$screen", {
            $screen_name: "homepage"
          }))
        })), uJ.n.subscribe("appManagerUpdated|gameEntrySource", (RR => {
          "autoReconnect" !== RR && "manualReconnect" !== RR || this.replay.capture("reconnect_attempted", {
            automatic: "autoReconnect" === RR
          })
        })), uJ.n.subscribe("sessionReplayPlayerKill", (RR => {
          let {
            killstreak: JR
          } = RR;
          this.replay.capture("player_kill", {
            killstreak: JR
          })
        }))
      }
      onPlayable() {
        (0, fJ.f)() || (0, ZJ.g)() || (null === this.flows.stay && this.joinConnectedGame(), this.replay.capture("game_playable", {
          ms_since_page_load: Math.round(performance.now()),
          ...this.joinLoad.playable()
        }), this.leaves.gamePlayable(), this.flows.gamePlayable())
      }
      joinConnectedGame() {
        if ((0, ZJ.g)()) return;
        const {
          gameNameWithVariation: RR,
          lobbyName: JR
        } = (0, ZJ.d)();
        null !== RR && null !== JR ? this.onJoinedGame(RR, JR) : console.warn("Session replay found a game playable with no game joined; not labelling it")
      }
      onJoinedGame(RR, JR) {
        this.replay.takeFullSnapshot();
        const GR = (0, TR.E)(JR),
          yR = yJ.d.get("gameEntrySource");
        this.gamesJoined++, this.leaves.gameJoined(), this.flows.gameJoined(this.gamesJoined, RR, "autoReconnect" === yR || "manualReconnect" === yR), "inGame" === yJ.d.get("gameState") && this.flows.gamePlayable();
        const tR = iJ.clientSidePartyStateManager.getPartyInformation(),
          uR = {
            game_name: (0, hR.Sb)(RR),
            game_name_with_variation: RR,
            game_number: this.gamesJoined,
            game_analytics_id: (0, RJ.e)(RR, GR),
            is_custom_game: (0, JJ.n)(RR),
            lobby_type: zJ(JR),
            in_party: null !== tR,
            party_size: null === tR ? 0 : tR.memberSocialPreviews.length + 1
          };
        this.replay.gameJoined(RR, uR), this.replay.capture("game_joined", {
          ...uR,
          entry_source: yR
        }), this.replay.capture("$screen", {
          $screen_name: uR.is_custom_game ? `custom: ${uR.game_analytics_id}` : uR.game_name
        }), this.subscribeToDeaths(RR)
      }
      onLeftGame() {
        this.joinLoad.forgetStart();
        const RR = this.flows.stay;
        null !== RR && (this.replay.capture("game_left", {
          game_name_with_variation: RR.name,
          duration_ms: Date.now() - RR.joinedAtMs
        }), this.flows.gameLeft(), this.replay.gameLeft(), this.unsubscribeDeaths(), this.unsubscribeDeaths = () => {})
      }
      subscribeToDeaths(RR) {
        this.unsubscribeDeaths();
        let JR = !0;
        this.unsubscribeDeaths = tJ.gameBridge.subscribe("localPlayerAliveSet", (GR => {
          const tR = JR && !GR;
          if (JR = GR, tR) {
            this.leaves.quitContext.noteDeath(performance.now());
            const [JR, GR, tR] = tJ.gameBridge.lookup("localPos", null), uR = {
              x: Math.round(JR),
              y: Math.round(GR),
              z: Math.round(tR)
            }, ZR = this.flows.stay, qR = null === ZR ? {} : {
              death_number: ++ZR.deaths,
              seconds_since_join: Math.round((Date.now() - ZR.joinedAtMs) / 1e3)
            };
            this.replay.capture("player_died", {
              ...uR,
              game_name_with_variation: RR,
              ...qR
            }), this.replay.addReplayMarker(yR.l.death, uR)
          }
        }))
      }
      UW() {
        this.health.attachToRender();
        const RR = performance.now(),
          JR = RR - this.lastTickMs,
          GR = JR <= 5e3,
          tR = this.flows.stay;
        if (null !== tR && null !== tR.playableAtMs && !document.hidden && GR && tR.visiblePlayedMs < 6e4 && (tR.visiblePlayedMs += JR, tR.visiblePlayedMs >= 6e4)) {
          const JR = Math.round(RR);
          this.replay.capture("game_played_60s", {
            game_name_with_variation: tR.name,
            ms_since_page_load: JR,
            ...this.firstMinutePlayedSent ? {} : {
              ttff_ms: JR
            }
          }), this.firstMinutePlayedSent = !0, this.flows.played60s()
        }
        this.flows.gK();
        const uR = null !== this.flows.stay && !document.hidden;
        this.replay.addFpsSample(uR && GR && this.framesThisTick > 0 ? 1e3 * this.framesThisTick / JR : null);
        const ZR = uR ? GJ.c.getLastColyseusPingMs() : null;
        null !== ZR && this.replay.addPingSample(ZR), this.framesThisTick = 0, this.lastTickMs = RR, this.ticks++, this.ticks % 2 === 0 && (uR && this.inputSinceActiveMarker && this.replay.addReplayMarker(yR.l.active), this.inputSinceActiveMarker = !1), this.replay.markClockIfDue(this.ticks, 30)
      }
    }
    var jJ = GR(1295),
      dJ = GR(1282),
      EJ = GR(41038);

    function YJ(RR) {
      return RR.length + 64
    }
    async function kJ() {
      return new Response("{}")
    }

    function QJ(RR, JR, GR) {
      return EJ.i.fetch(RR, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain"
        },
        body: JR,
        signal: (0, jJ.t)(3e4)
      }, GR)
    }
    class FJ {
      constructor(RR) {
        var JR, GR, yR;
        let tR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.uploadToken = RR, this.url = void 0, this.post = void 0, this.isHidden = void 0, this.queue = [], this.retries = [], this.refusedTokens = new Set, this.overflowWarned = !1, this.unloading = !1, this.sendScheduled = !1, this.url = null !== (JR = tR.url) && void 0 !== JR ? JR : `${dJ.clientSideServerUrls.indexUrl}/index/replay/timeline`, this.post = null !== (GR = tR.post) && void 0 !== GR ? GR : QJ, this.isHidden = null !== (yR = tR.isHidden) && void 0 !== yR ? yR : () => "hidden" === document.visibilityState
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
      add(RR) {
        if (this.refusedTokens.has(this.uploadToken)) return;
        const JR = function(RR) {
            const JR = {
              ...RR.properties
            };
            return void 0 !== RR.$set && (JR.$set = {
              ...RR.properties.$set,
              ...RR.$set
            }), void 0 !== RR.$set_once && (JR.$set_once = {
              ...RR.$set_once,
              ...RR.properties.$set_once
            }), void 0 !== RR.$unset && (JR.$unset = RR.$unset), {
              uuid: RR.uuid,
              event: RR.event,
              timestampMs: RR.timestamp.getTime(),
              properties: JSON.stringify(JR)
            }
          }(RR),
          GR = (0, EJ.j)(JSON.stringify(JR));
        JR.properties.length > 32768 || JR.event.length > 64 || YJ(this.uploadToken) + GR > 102400 ? console.warn(`Session replay timeline event ${JR.event.slice(0,64)} is too large for index-server; dropped.`) : (this.queue.push({
          uploadToken: this.uploadToken,
          event: JR,
          bytes: GR,
          attempts: 0
        }), this.trimToCap(), this.queue.length >= 50 ? this.sendQueued() : (this.unloading || this.isHidden()) && this.sendSoon())
      }
      sendSoon() {
        this.sendScheduled || (this.sendScheduled = !0, queueMicrotask((() => {
          this.sendScheduled = !1, this.sendQueued()
        })))
      }
      flush() {
        this.retries.length > 0 && (this.queue = [...this.retries, ...this.queue].sort(((RR, JR) => RR.event.timestampMs - JR.event.timestampMs)), this.retries = []), this.sendQueued()
      }
      sendQueued() {
        for (; this.queue.length > 0;) {
          const RR = this.takeBatch();
          this.refusedTokens.has(RR.uploadToken) || this.send(RR)
        }
      }
      trimToCap() {
        let RR = this.retries.length + this.queue.length - 1e3;
        if (RR <= 0) return void(this.overflowWarned = !1);
        const JR = Math.min(RR, this.retries.length);
        this.retries.splice(0, JR), RR -= JR, this.queue.splice(0, RR), this.overflowWarned || (this.overflowWarned = !0, console.warn("Session replay timeline queue is full; dropping its oldest events until it drains."))
      }
      takeBatch() {
        const RR = this.queue.shift(),
          JR = [RR];
        let GR = YJ(RR.uploadToken) + RR.bytes;
        for (; this.queue.length > 0 && JR.length < 100 && this.queue[0].uploadToken === RR.uploadToken && GR + this.queue[0].bytes <= 32768;) {
          const RR = this.queue.shift();
          JR.push(RR), GR += RR.bytes
        }
        return {
          uploadToken: RR.uploadToken,
          events: JR
        }
      }
      async send(RR) {
        const JR = await this.sendOnce(RR);
        if ("refused" === JR && this.refusedTokens.add(RR.uploadToken), "retryLater" !== JR) return;
        const GR = RR.events.filter((RR => ++RR.attempts < 3));
        GR.length < RR.events.length && console.error(`Session replay timeline: dropped ${RR.events.length-GR.length} events after 3 attempts.`), this.retries.push(...GR), this.trimToCap()
      }
      async sendOnce(RR) {
        const JR = {
            uploadToken: RR.uploadToken,
            sentAtMs: Date.now(),
            events: RR.events.map((RR => RR.event))
          },
          GR = JSON.stringify(JR);
        let yR, tR = null;
        try {
          yR = await this.post(this.url, GR, (0, EJ.j)(GR)), yR.ok && (tR = await yR.json())
        } catch (uR) {
          return console.warn("Session replay timeline upload failed.", uR), "retryLater"
        }
        return null === tR ? 408 === yR.status || 429 === yR.status || yR.status >= 500 ? "retryLater" : (console.error(`Session replay timeline upload failed with ${yR.status}; dropped ${RR.events.length} events.`), "dropped") : "rejected" in tR ? tR.retryable ? "retryLater" : (console.warn(`Session replay timeline refused: ${tR.reason}; dropping this recording's events.`), "refused") : "sent"
      }
    }
    var TJ = GR(41049),
      sJ = GR(5492),
      hJ = GR(1406);
    class RG {
      constructor(RR) {
        var JR;
        this.tags = new FR, this.fpsMonitor = void 0, this.errorLogLink = void 0, this.lastTagsJson = "", this.clockMarked = !1, this.personUpdateTimer = null, this.expectedSessionId = "", this.recorderPatched = !1, this.gameContextKeys = [], this.firstGameJoined = !1, this.timeline = void 0, this.onDomBatch = void 0;
        const {
          recording: GR
        } = RR;
        this.onDomBatch = RR.onDomBatch;
        const ZR = null !== RR.onDomBatch;
        ZR && this.patchRecorder(), this.timeline = new FJ(GR.uploadToken, RR.dryRun ? {
            post: kJ
          } : {}), this.timeline.start(),
          function(RR) {
            const JR = {
                supportedCompression: [tR.c.GZipJS],
                hasFeatureFlags: !1,
                sessionRecording: {
                  endpoint: "/s/"
                },
                siteApps: [],
                toolbarParams: {},
                toolbarVersion: "toolbar",
                isAuthenticated: !1
              },
              GR = window;
            GR._POSTHOG_REMOTE_CONFIG = {
              ...GR._POSTHOG_REMOTE_CONFIG,
              [RR]: {
                config: JR
              }
            }
          }(RR.posthog.projectApiKey), tR.f.init(RR.posthog.projectApiKey, cR({
            apiHost: RR.posthog.apiHost,
            recordingId: GR.recordingId,
            recordDom: ZR,
            ownOrigins: [window.location.origin, new URL(dJ.clientSideServerUrls.s3Url, window.location.href).origin],
            anonymised: GR.anonymised,
            showsChat: (0, yR.y)(GR),
            allowAutomatedBrowsers: (0, sJ.c)((0, sJ.i)(), !1),
            onTimelineEvent: RR => {
              this.timeline.add(RR), "$pageview" === RR.event && RR.properties.$current_url && this.addReplayMarker("$pageview", {
                href: RR.properties.$current_url
              })
            },
            onDomBatch: RR => {
              this.takeDomBatch(RR)
            }
          })), ZR && tR.f.startSessionRecording({
            sampling: !0
          }), this.expectedSessionId = GR.recordingId, tR.f.onSessionId((RR => {
            RR !== this.expectedSessionId && console.warn(`Session replay: PostHog session ${RR} differs from recording ${this.expectedSessionId}; events carry recording_id.`)
          })),
          function(RR, JR) {
            const {
              recording: GR
            } = RR, yR = {
              ...GR.tags,
              site_used: mR.siteUsed,
              subsite_used: null !== mR.subsiteUsed && void 0 !== mR.subsiteUsed ? mR.subsiteUsed : "",
              is_iframed: mR.isIframed,
              entry_path: location.pathname,
              ...zR(),
              ...jR(GR, JR),
              client_build: IR.d
            };
            tR.f.register(yR), null !== RR.videoStatus && tR.f.register({
              replay_video_status: RR.videoStatus
            }), tR.f.setPersonProperties(yR, {
              ...dR("initial_", yR),
              ...SR(GR)
            })
          }(RR, ZR), this.fpsMonitor = new uR.b({
            onEpisodeStarted: RR => {
              this.capture("low_fps_started", {
                avg_fps: Math.round(RR)
              }), uJ.n.JK("sessionReplayLowFps", {
                low: !0
              })
            },
            onEpisodeEnded: RR => {
              this.capture("low_fps_episode", {
                duration_ms: RR.durationMs,
                min_fps: RR.minFps,
                avg_fps: RR.avgFps
              }), uJ.n.JK("sessionReplayLowFps", {
                low: !1
              })
            }
          }), this.errorLogLink = new kR({
            dashboardHost: null !== (JR = RR.posthog.dashboardHost) && void 0 !== JR ? JR : RR.posthog.apiHost,
            recordingId: GR.recordingId,
            getSessionId: () => tR.f.get_session_id(),
            domRecorded: ZR,
            captureError: (RR, JR) => {
              this.captureClientError("logged", RR, JR)
            }
          }), (0, hJ.annotateLoggedErrors)(((RR, JR) => this.errorLogLink.annotate(RR, JR))), new SJ(this).start()
      }
      capture(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        tR.f.capture(RR, JR)
      }
      captureAt(RR, JR, GR) {
        tR.f.capture(RR, JR, {
          timestamp: new Date(GR)
        })
      }
      captureOnExit(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        tR.f.capture(RR, JR, {
          timestamp: new Date(GR)
        })
      }
      captureClientError(RR, JR, GR) {
        this.setFlag("had_error"), this.capture("client_error", {
          kind: RR,
          message: UR(JR).slice(0, 300),
          source: null,
          error_name: null,
          ...GR
        })
      }
      takeFullSnapshot() {
        if (this.tryFullSnapshot()) return;
        const RR = performance.now() + 1500,
          JR = setInterval((() => {
            (this.tryFullSnapshot() || performance.now() >= RR) && clearInterval(JR)
          }), 100)
      }
      setVideoStatus(RR, JR) {
        tR.f.register({
          replay_video_status: RR
        });
        const GR = "stopped_cellular" === RR ? "cellular" : "stopped_error" === RR ? "error" : null;
        null !== GR && (this.capture("replay_video_stopped", {
          reason: GR,
          detail: null === JR ? null : UR(JR).slice(0, 300)
        }), this.addReplayMarker("replay_video_stopped", {
          reason: GR
        }))
      }
      stopDomRecording() {
        tR.f.stopSessionRecording(), tR.f.register({
          dom_recorded: !1
        })
      }
      optOut() {
        this.stopDomRecording(), tR.f.set_config({
          before_send: () => null
        })
      }
      takeDomBatch(RR) {
        null !== this.onDomBatch ? this.onDomBatch(RR) : console.warn("Session replay: posthog-js recorded the page of an events-only recording; dropped it")
      }
      tryFullSnapshot() {
        var RR;
        return !(null === (RR = tR.f.sessionRecording) || void 0 === RR || !RR.started) && (PR().rrweb.record.takeFullSnapshot(), !0)
      }
      patchRecorder() {
        this.recorderPatched || (this.recorderPatched = !0, function() {
          const RR = PR().rrwebPlugins,
            JR = RR.getRecordConsolePlugin;
          RR.getRecordConsolePlugin = () => JR({
            level: ["warn", "error", "assert"]
          })
        }(), this.markClockOnFullSnapshots())
      }
      markClockOnFullSnapshots() {
        const RR = PR().rrweb.record,
          JR = RR.takeFullSnapshot;
        RR.takeFullSnapshot = RR => {
          JR(RR), this.markClock()
        }
      }
      markClock() {
        this.clockMarked = this.addReplayMarker(yR.l.clock, {
          epochMs: (0, TJ.c)(),
          perfNowMs: performance.now()
        }) || this.clockMarked
      }
      markClockIfDue(RR, JR) {
        this.clockMarked && RR % JR !== 0 || this.markClock()
      }
      addReplayMarker(RR) {
        var JR, GR;
        let yR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (!(arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) || tR.f.sessionRecordingStarted()) && null !== (JR = null === (GR = tR.f.sessionRecording) || void 0 === GR ? void 0 : GR.tryAddCustomEvent(RR, yR)) && void 0 !== JR && JR
      }
      gameJoined(RR, JR) {
        this.unregisterGameContext(), this.gameContextKeys = Object.keys(JR), tR.f.register(JR), this.firstGameJoined || (this.firstGameJoined = !0, tR.f.setPersonProperties(void 0, {
          first_game_ever: JR.game_name,
          first_game_ever_with_variation: JR.game_name_with_variation,
          first_game_ever_analytics_id: JR.game_analytics_id
        })), this.tags.gameJoined(RR, Date.now()), this.updateTags()
      }
      gameLeft() {
        this.unregisterGameContext(), this.tags.gameLeft(Date.now()), this.fpsMonitor.endEpisode(Date.now()), this.updateTags()
      }
      setFlag(RR) {
        this.tags.setFlag(RR) && this.updateTags()
      }
      addHitch(RR) {
        this.tags.addHitch(RR) && this.updateTags()
      }
      setSessionProperties(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        tR.f.register(RR), JR && tR.f.setPersonProperties(RR)
      }
      addPingSample(RR) {
        this.tags.addPingSample(RR) && this.updateTags()
      }
      addFpsSample(RR) {
        this.fpsMonitor.addSample(RR, Date.now());
        const JR = this.fpsMonitor.getTags();
        null !== JR && (this.tags.setFpsTags(JR), this.updateTags())
      }
      addUnboundKeyPresses(RR) {
        this.tags.addUnboundKeyPresses(RR), this.updateTags()
      }
      finalTags() {
        return this.fpsMonitor.endEpisode(Date.now()), this.tags.toProperties(Date.now())
      }
      updateTags() {
        const RR = this.tags.toProperties(),
          JR = JSON.stringify(RR);
        JR !== this.lastTagsJson && (this.lastTagsJson = JR, tR.f.register(RR), null === this.personUpdateTimer && (this.personUpdateTimer = setTimeout((() => {
          this.personUpdateTimer = null, tR.f.setPersonProperties(this.tags.toProperties())
        }), 0)))
      }
      unregisterGameContext() {
        for (const RR of this.gameContextKeys) tR.f.unregister(RR);
        this.gameContextKeys = []
      }
    }
  },
  41049: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR
    });
    const yR = 20;
    let tR = Date.now() - performance.now();

    function uR() {
      const RR = performance.now(),
        JR = Date.now();
      return Math.abs(JR - (RR + tR)) > yR && (tR = JR - RR), RR + tR
    }
  },
  41038: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => yR,
      i: () => uR,
      j: () => tR
    });
    const yR = 32768;

    function tR(RR) {
      return (new TextEncoder).encode(RR).byteLength
    }
    const uR = new class {
      constructor() {
        this.inFlightBytes = 0, this.inFlightLabels = new Map
      }
      async fetch(RR, JR, GR, yR) {
        if (this.inFlightBytes + GR > 49152) return await fetch(RR, JR);
        this.inFlightBytes += GR, this.countLabel(yR, 1);
        const tR = () => {
          this.inFlightBytes -= GR, this.countLabel(yR, -1)
        };
        let uR;
        try {
          uR = await fetch(RR, {
            ...JR,
            keepalive: !0
          })
        } catch (qR) {
          var ZR;
          if (tR(), null !== (ZR = JR.signal) && void 0 !== ZR && ZR.aborted) throw qR;
          return console.info("Session replay keepalive request failed; retrying without keepalive.", qR), await fetch(RR, JR)
        }
        return tR(), uR
      }
      isInFlight(RR) {
        var JR;
        return (null !== (JR = this.inFlightLabels.get(RR)) && void 0 !== JR ? JR : 0) > 0
      }
      sendBeacon(RR, JR) {
        const GR = tR(JR);
        return !(this.inFlightBytes + GR > 57344) && this.beaconSent(navigator.sendBeacon(RR, new Blob([JR], {
          type: "text/plain"
        })), GR)
      }
      sendUploadBeacon(RR, JR, GR) {
        return !(this.inFlightBytes + GR > 40960) && this.beaconSent(navigator.sendBeacon(RR, JR), GR)
      }
      countLabel(RR, JR) {
        var GR;
        void 0 !== RR && this.inFlightLabels.set(RR, (null !== (GR = this.inFlightLabels.get(RR)) && void 0 !== GR ? GR : 0) + JR)
      }
      beaconSent(RR, JR) {
        return RR && (this.inFlightBytes += JR, setTimeout((() => {
          this.inFlightBytes -= JR
        }), 1e4)), RR
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);