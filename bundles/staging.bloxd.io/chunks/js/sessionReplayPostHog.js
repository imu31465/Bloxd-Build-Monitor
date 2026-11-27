export const id = 62;
export const ids = [62];
export const modules = {
  41104: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      ReplayPostHog: () => OO
    });
    var mW = OW(4605),
      EW = OW(41109),
      NW = OW(41091);
    const PW = new Set(["partycode", "lobby", "vm", "invite", "invitecode", "code", "token", "access_token", "id_token", "refresh_token", "auth", "key", "state", "ticket", "jointicket", "secret", "password", "sig", "signature"]),
      LW = new Set(["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "bfcid", "irclid", "_kx", "_gl", "yclid", "srsltid", "mc_eid", "s_kwcid", "ef_id", "_hsenc", "mkt_tok"]),
      cW = "redacted",
      wW = /([?&#])([^=&#?\s"']+)=([^&#?\s"'<>\\]*)/g,
      tW = /(\/play\/[^/?#\s"'<>\\]+\/)[^/?#\s"'<>\\]+/gi,
      ZW = /\/play\//i,
      xW = /lobby|party/i;

    function lW(WW) {
      try {
        return decodeURIComponent(WW)
      } catch {
        return null
      }
    }

    function AW(WW) {
      const iW = WW.includes("%") ? lW(WW) : null;
      if (null === iW || iW === WW) return WW;
      let OW = bW(`?${iW}`).slice(1);
      return OW === iW && (OW = AW(iW)), OW === iW ? WW : encodeURIComponent(OW)
    }

    function bW(WW) {
      return WW.includes("=") || ZW.test(WW) ? WW.replace(wW, ((WW, iW, OW, mW) => {
        var EW;
        const NW = (null !== (EW = lW(OW)) && void 0 !== EW ? EW : OW).toLowerCase();
        if (PW.has(NW)) return `${iW}${OW}=${cW}`;
        if (LW.has(NW) && "" !== mW) return `${iW}${OW}=<masked>`;
        const wW = AW(mW);
        return wW === mW ? WW : `${iW}${OW}=${wW}`
      })).replace(tW, `$1${cW}`) : WW
    }
    const jW = new Set(["href", "src", "srcset", "action", "formaction", "poster", "xlink:href"]);

    function UW(WW, iW) {
      return jW.has(WW.toLowerCase()) ? bW(iW) : iW
    }

    function kW(WW) {
      return xW.test(WW) ? cW : bW(WW)
    }

    function sW(WW) {
      if (WW)
        for (const [iW, OW] of Object.entries(WW)) "string" === typeof OW && (WW[iW] = bW(OW))
    }

    function MW(WW) {
      var iW;
      Array.isArray(WW.payload) && (WW.payload = (iW = WW.payload).some((WW => "string" === typeof WW && xW.test(WW))) ? [JSON.stringify(cW)] : iW.map((WW => "string" === typeof WW ? bW(WW) : WW))), Array.isArray(WW.trace) && (WW.trace = WW.trace.map((WW => "string" === typeof WW ? bW(WW) : WW)))
    }

    function KW(WW) {
      if (null === WW) return null;
      const iW = WW.properties.$snapshot_data;
      return sW(WW.properties), sW(WW.properties.$set), sW(WW.properties.$set_once), sW(WW.$set), sW(WW.$set_once),
        function(WW) {
          if (Array.isArray(WW))
            for (const iW of WW) {
              const WW = null === iW || void 0 === iW ? void 0 : iW.data;
              if (!WW || "object" !== typeof WW) continue;
              "string" === typeof WW.href && (WW.href = bW(WW.href));
              const OW = WW.payload;
              OW && "object" === typeof OW && (iW.type === mW.c.Plugin && "string" === typeof WW.plugin && WW.plugin.includes("console") ? MW(OW) : sW(OW))
            }
        }(iW), WW
    }
    const SW = new Set(["class", "id", "rel", "type", "role", "tabindex", "width", "height", "dir", "lang", "disabled", "hidden", "checked", "selected", "readonly", "draggable", "media", "charset", "crossorigin", "aria-hidden", "aria-expanded", "aria-selected", "aria-pressed", "aria-checked", "aria-disabled", "xmlns", "viewbox", "d", "fill", "stroke", "stroke-width", "transform", "x", "y", "cx", "cy", "r", "points", "x1", "y1", "x2", "y2", "rx", "ry", "opacity", "fill-rule", "clip-rule", "stroke-linecap", "stroke-linejoin", "preserveaspectratio", "xmlns:xlink", "colspan", "rowspan"]),
      YW = new Set(["_csstext", "rr_width", "rr_height", "rr_left", "rr_top", "rr_position", "rr_transform", "rr_display", "rr_scrollleft", "rr_scrolltop", "rr_mediastate", "rr_open_mode"]),
      yW = new Set(["data-pad-key", "data-pad-repeat"]),
      TW = new Set(["href", "src", "srcset", "xlink:href"]),
      JW = new Set(["title", "$title", "message", "detail", "game_display_name"]),
      hW = "img, picture, video";

    function HW(WW, iW, OW) {
      const mW = WW.toLowerCase();
      return "style" === mW ? iW.replace(/url\((?:"[^"]*"|'[^']*'|[^)]*)\)/gi, "none") : TW.has(mW) && "A" !== OW.tagName ? UW(WW, iW) : SW.has(mW) || YW.has(mW) || mW.startsWith("data-pad-") && !yW.has(mW) ? iW : iW.replace(/\S/g, "*")
    }

    function nW(WW) {
      if (!/^(https?:\/\/|\/)/i.test(WW)) return WW;
      let iW;
      try {
        iW = new URL(WW, "https://bloxd.invalid")
      } catch {
        return WW
      }
      const [OW = "", ...mW] = iW.pathname.split("/").slice(1), EW = `/${OW}${mW.some((WW=>""!==WW))?"/*":""}`;
      return WW.startsWith("/") ? EW : `${iW.origin}${EW}`
    }

    function uW(WW) {
      if (WW)
        for (const [iW, OW] of Object.entries(WW)) JW.has(iW) ? delete WW[iW] : "string" === typeof OW && (WW[iW] = nW(OW))
    }

    function oW(WW) {
      ! function(WW) {
        if (Array.isArray(WW))
          for (const iW of WW) {
            const WW = null === iW || void 0 === iW ? void 0 : iW.data;
            WW && "object" === typeof WW && ("string" === typeof WW.href && (WW.href = nW(WW.href)), WW.payload && "object" === typeof WW.payload && uW(WW.payload))
          }
      }(WW.properties.$snapshot_data), uW(WW.properties), "$screen" === WW.event && String(WW.properties.$screen_name).startsWith("custom: ") && (WW.properties.$screen_name = `custom: ${String(WW.properties.game_analytics_id)}`), uW(WW.properties.$set), uW(WW.properties.$set_once), uW(WW.$set), uW(WW.$set_once)
    }
    const dW = mW.i.map((WW => `.${WW}`)).join(", "),
      eW = ["iframe", "script", 'link:not([rel~="stylesheet"])', ".AdBannerContainer > [id]", "#GenericVideoInner", "ins.adsbygoogle", '[id^="google_ads_"]'],
      vW = [".PadKeyboardPreviewText", ".PadKeyboardPhraseRow"].join(", ");

    function gW(WW, iW) {
      return null !== iW && void 0 !== iW && iW.closest(dW) ? WW : WW.replace(/\S/g, "*")
    }

    function DW(WW) {
      const iW = function(WW) {
        return WW.anonymised ? {
          enable_recording_console_log: !1,
          session_recording: {
            blockSelector: [...eW, hW].join(", "),
            maskTextSelector: "*",
            maskTextFn: WW.showsChat ? gW : null,
            maskAttributeFn: HW
          }
        } : {
          enable_recording_console_log: !0,
          session_recording: {
            blockSelector: [...eW, (iW = WW.ownOrigins, `img[src^="http"]${iW.map((WW=>`:not([src^="${WW}/"])`)).join("")}`)].join(", "),
            maskTextSelector: WW.showsChat ? vW : `${vW}, ${dW}`,
            maskAttributeFn: UW
          }
        };
        var iW
      }(WW);
      return {
        api_host: WW.apiHost,
        persistence: "memory",
        bootstrap: {
          distinctID: WW.recordingId,
          isIdentifiedID: !1,
          sessionID: WW.recordingId
        },
        person_profiles: "always",
        mask_personal_data_properties: !0,
        custom_personal_data_properties: [...LW],
        session_idle_timeout_seconds: 36e3,
        disable_external_dependency_loading: !0,
        opt_out_useragent_filter: WW.allowAutomatedBrowsers,
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
        enable_recording_console_log: iW.enable_recording_console_log,
        before_send: iW => {
          const OW = KW(iW);
          return null === OW || (WW.anonymised && oW(OW), "$snapshot" === OW.event ? function(WW, iW) {
            const {
              $snapshot_data: OW,
              $window_id: mW
            } = WW.properties;
            try {
              iW({
                windowId: mW,
                events: OW
              })
            } catch (EW) {
              console.error("Session replay couldn't take a page recording batch.", EW)
            }
          }(OW, WW.onDomBatch) : WW.onTimelineEvent(OW)), null
        },
        disable_session_recording: !WW.recordDom,
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
          ...iW.session_recording
        }
      }
    }

    function VW() {
      return window.__PosthogExtensions__
    }
    var pW = OW(649),
      fW = OW(136);

    function CW() {
      var WW;
      const iW = navigator,
        OW = new Date;
      return {
        local_hour: OW.getHours(),
        local_weekday: OW.getDay(),
        ...iW.hardwareConcurrency ? {
          cpu_cores: iW.hardwareConcurrency
        } : {},
        ...iW.deviceMemory ? {
          device_memory_gb: iW.deviceMemory
        } : {},
        ...null !== (WW = iW.connection) && void 0 !== WW && WW.effectiveType ? {
          network_type: iW.connection.effectiveType
        } : {}
      }
    }

    function XW(WW) {
      var iW;
      const OW = WW.tags;
      return {
        panel_entry_reason: null !== (iW = OW.recording_reason) && void 0 !== iW ? iW : "unknown",
        panel_entry_date: (new Date).toISOString().slice(0, 10),
        ...void 0 === OW.sample_rate ? {} : {
          panel_entry_sample_rate: OW.sample_rate
        }
      }
    }

    function BW(WW, iW) {
      return {
        recording_id: WW.recordingId,
        recording_scopes: WW.scopes.join(","),
        dom_recorded: iW
      }
    }

    function qW(WW, iW) {
      const OW = {};
      for (const [mW, EW] of Object.entries(iW)) OW[`${WW}${mW}`] = EW;
      return OW
    }
    class RW {
      constructor(WW) {
        this.options = WW, this.buckets = new Map, this.lastEvictionMs = -1 / 0
      }
      allow(WW, iW) {
        this.evictExpired(WW, iW);
        let OW = this.buckets.get(WW);
        var mW, EW;
        (void 0 === OW || iW - OW.startMs >= this.options.windowMs) && (OW = {
          startMs: iW,
          count: 0,
          suppressed: null !== (mW = null === (EW = OW) || void 0 === EW ? void 0 : EW.suppressed) && void 0 !== mW ? mW : 0
        }, this.buckets.set(WW, OW));
        if (OW.count >= this.options.maxPerWindow) return OW.suppressed++, null;
        OW.count++;
        const NW = OW.suppressed;
        return OW.suppressed = 0, NW
      }
      evictExpired(WW, iW) {
        if (!(iW - this.lastEvictionMs < this.options.windowMs)) {
          this.lastEvictionMs = iW;
          for (const [OW, mW] of this.buckets) {
            const EW = (iW - mW.startMs) / this.options.windowMs;
            OW !== WW && EW >= (0 === mW.suppressed ? 1 : 10) && this.buckets.delete(OW)
          }
        }
      }
    }

    function GW(WW, iW, OW) {
      const mW = new URL(WW);
      return mW.pathname = `${mW.pathname.replace(/\/+$/,"")}/replay/${encodeURIComponent(iW)}`, mW.searchParams.set("timestamp", String(Math.round(OW - 5e3))), mW.toString()
    }
    class IW {
      constructor(WW) {
        this.options = WW, this.throttle = new RW({
          maxPerWindow: 3,
          windowMs: 6e4
        })
      }
      annotate(WW, iW) {
        const OW = Date.now(),
          mW = this.throttle.allow("logged", OW);
        var EW;
        null !== mW && this.options.captureError(WW.message || WW.name, {
          error_name: WW.name || null,
          error_fingerprint: null !== (EW = iW.fingerprint) && void 0 !== EW ? EW : null,
          suppressed_since_last: mW
        });
        return {
          replay_recording_id: this.options.recordingId,
          ...this.options.domRecorded ? {
            replay_url: GW(this.options.dashboardHost, this.options.getSessionId(), OW)
          } : {}
        }
      }
    }

    function aW(WW) {
      return WW < 50 ? "<50" : WW < 100 ? "50-100" : WW < 200 ? "100-200" : WW < 400 ? "200-400" : "400+"
    }
    class rW {
      constructor() {
        this.gamesJoined = [], this.flags = new Set, this.firstGame = null, this.fpsTags = null, this.maxHitchMs = 0, this.pingSumMs = 0, this.pingSamples = 0, this.maxPingMs = 0, this.unboundKeyPresses = new Map
      }
      gameJoined(WW, iW) {
        this.gamesJoined.includes(WW) || this.gamesJoined.push(WW), null === this.firstGame && (this.firstGame = {
          joinedAtMs: iW,
          leftAtMs: null
        })
      }
      gameLeft(WW) {
        null !== this.firstGame && null === this.firstGame.leftAtMs && (this.firstGame.leftAtMs = WW)
      }
      setFlag(WW) {
        return !this.flags.has(WW) && (this.flags.add(WW), !0)
      }
      setFpsTags(WW) {
        this.fpsTags = WW
      }
      addHitch(WW) {
        return !(WW <= this.maxHitchMs) && (this.maxHitchMs = WW, !0)
      }
      addPingSample(WW) {
        const iW = this.pingTags();
        this.pingSumMs += WW, this.pingSamples++, this.maxPingMs = Math.max(this.maxPingMs, WW);
        const OW = this.pingTags();
        return (null === iW || void 0 === iW ? void 0 : iW.ping_avg_bucket) !== (null === OW || void 0 === OW ? void 0 : OW.ping_avg_bucket) || (null === iW || void 0 === iW ? void 0 : iW.ping_max_bucket) !== (null === OW || void 0 === OW ? void 0 : OW.ping_max_bucket)
      }
      addUnboundKeyPresses(WW) {
        for (const [OW, mW] of WW) {
          var iW;
          this.unboundKeyPresses.set(OW, (null !== (iW = this.unboundKeyPresses.get(OW)) && void 0 !== iW ? iW : 0) + mW)
        }
      }
      toProperties() {
        var WW;
        let iW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return {
          ...{
            first_game: null !== (WW = this.gamesJoined[0]) && void 0 !== WW ? WW : "",
            games_joined: this.gamesJoined.join(","),
            games_joined_count: this.gamesJoined.length,
            quick_quit: this.isQuickQuit(iW),
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
        let WW = 0,
          iW = "",
          OW = 0;
        for (const [mW, EW] of this.unboundKeyPresses) WW += EW, (EW > OW || EW === OW && mW < iW) && (iW = mW, OW = EW);
        return {
          unbound_key_presses: WW,
          top_unbound_key: iW
        }
      }
      pingTags() {
        return 0 === this.pingSamples ? null : {
          ping_avg_bucket: aW(this.pingSumMs / this.pingSamples),
          ping_max_bucket: aW(this.maxPingMs)
        }
      }
      isQuickQuit(WW) {
        var iW;
        if (null === this.firstGame) return !1;
        const OW = null !== (iW = this.firstGame.leftAtMs) && void 0 !== iW ? iW : WW;
        return null !== OW && OW - this.firstGame.joinedAtMs < mW.n
      }
    }
    var zW = OW(1217),
      FW = OW(1061),
      QW = OW(344),
      Wi = OW(1065),
      ii = OW(1052),
      Oi = OW(3822),
      mi = OW(25),
      Ei = OW(2037),
      Ni = OW(27),
      Pi = OW(1351),
      Li = OW(1301),
      ci = OW(1593),
      wi = OW(2306),
      ti = OW(1729),
      Zi = OW(41082),
      xi = OW(100),
      li = OW(41073),
      Ai = OW(1319);
    class bi {
      constructor(WW, iW, OW) {
        this.replay = WW, this.quitContext = iW, this.flows = OW, this.errorThrottle = new RW({
          maxPerWindow: 3,
          windowMs: 6e4
        }), this.hitchThrottle = new RW({
          maxPerWindow: 5,
          windowMs: 6e4
        }), this.attachedToRender = !1
      }
      start() {
        window.addEventListener("error", (WW => {
            const iW = WW.error;
            this.captureError("error", WW.message, WW.filename ? `${WW.filename}:${WW.lineno}:${WW.colno}` : null, iW instanceof Error ? iW.name : null, (0, li.c)(WW))
          })), window.addEventListener("unhandledrejection", (WW => {
            const iW = WW.reason;
            this.captureError("unhandled_rejection", iW instanceof Error ? iW.message : String(iW), null, iW instanceof Error ? iW.name : null, (0, li.c)(WW))
          })), Ni.l.subscribe("unrecoverableError", (WW => {
            this.captureError("unrecoverable", WW, null, null, !0)
          })),
          function(WW) {
            var iW, OW;
            if ("undefined" === typeof PerformanceObserver || null === (iW = null === (OW = PerformanceObserver.supportedEntryTypes) || void 0 === OW ? void 0 : OW.includes("long-animation-frame")) || void 0 === iW || !iW) return;
            let mW = null;
            new PerformanceObserver((iW => {
              for (const NW of iW.getEntries()) {
                var OW, EW;
                const iW = NW,
                  PW = !(null !== mW && iW.startTime - mW.endMs < 50) || iW.duration >= 3 * (null !== (OW = null === (EW = mW) || void 0 === EW ? void 0 : EW.durationMs) && void 0 !== OW ? OW : 0);
                mW = {
                  endMs: iW.startTime + iW.duration,
                  durationMs: iW.duration
                }, !document.hidden && iW.duration >= 100 && PW && WW({
                  frameMs: iW.duration,
                  mainThreadMs: (0, Ai.l)(iW)
                })
              }
            })).observe({
              type: "long-animation-frame"
            })
          }((WW => {
            this.onFrameHitch(WW)
          }))
      }
      attachToRender() {
        if (this.attachedToRender) return;
        const WW = (0, Li.y)().gameRender();
        null !== WW && (this.attachedToRender = !0, this.replay.setSessionProperties(Object.fromEntries([
          ["renderer", WW.renderer],
          ["gpu_vendor", (0, xi.getGpuVendor)()]
        ])), WW.canvas.addEventListener("webglcontextlost", (() => {
          this.replay.setFlag("had_error"), this.replay.capture("webgl_context_lost")
        })), WW.canvas.addEventListener("webglcontextrestored", (() => {
          this.replay.capture("webgl_context_restored")
        })))
      }
      captureError(WW, iW, OW, EW, NW) {
        const PW = kW(iW).slice(0, 300);
        NW && null !== this.flows.stay && this.quitContext.noteError(performance.now());
        const LW = this.errorThrottle.allow(`${WW}:${PW}`, Date.now());
        null !== LW && (this.replay.captureClientError(WW, PW, {
          source: OW,
          error_name: EW,
          suppressed_since_last: LW
        }), this.replay.addReplayMarker(mW.l.error, {
          kind: WW,
          message: PW
        }))
      }
      onFrameHitch(WW) {
        let {
          frameMs: iW,
          mainThreadMs: OW
        } = WW;
        const mW = this.flows.stay;
        if (null === mW || null === mW.playableAtMs || performance.now() - mW.playableAtMs < 2e3) return;
        (0, ti.l)() || this.quitContext.noteHitch(performance.now()), this.replay.addHitch(Math.round(iW));
        const EW = this.hitchThrottle.allow("frame_hitch", Date.now());
        null !== EW && this.replay.capture("frame_hitch", {
          Mc: Math.round(iW),
          main_thread_ms: Math.round(OW),
          game_name_with_variation: mW.name,
          suppressed_since_last: EW
        })
      }
    }
    var ji = OW(7493),
      Ui = OW(327);
    class ki {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.steps = WW, this.furthestIndex = -1, this.heldIndex = -1, this.gateIndex = void 0, this.gateIndex = null === iW ? 1 / 0 : WW.indexOf(iW)
      }
      reach(WW) {
        const iW = this.steps.indexOf(WW);
        if (iW > this.gateIndex && this.furthestIndex < this.gateIndex) return this.heldIndex = Math.max(this.heldIndex, iW), null;
        const OW = iW === this.gateIndex ? Math.max(iW, this.heldIndex) : iW;
        return OW <= this.furthestIndex ? null : (this.furthestIndex = OW, OW)
      }
      get furthest() {
        return -1 === this.furthestIndex ? null : this.steps[this.furthestIndex]
      }
      get furthestStepIndex() {
        return this.furthestIndex
      }
    }
    const si = {
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
    class Mi {
      constructor(WW) {
        this.threshold = WW, this.times = [], this.armed = !0, this.lastAtMs = -1 / 0
      }
      note(WW) {
        const {
          count: iW,
          windowMs: OW
        } = this.threshold;
        if (!this.armed && WW - this.lastAtMs >= OW && (this.armed = !0), this.lastAtMs = WW, !this.armed) return !1;
        for (this.times.push(WW); this.times.length > 0 && WW - this.times[0] >= OW;) this.times.shift();
        return !(this.times.length < iW) && (this.times.length = 0, this.armed = !1, !0)
      }
    }
    class Ki {
      constructor(WW) {
        this.onSignal = WW, this.bursts = new Map, this.seen = [], this.signalCount = 0, this.idleCounted = !1;
        for (const [iW, OW] of Object.entries(si)) this.bursts.set(iW, new Mi(OW))
      }
      note(WW, iW) {
        if (this.bursts.get(WW).note(iW)) {
          const {
            count: iW,
            windowMs: OW
          } = si[WW];
          this.signal(WW, iW, OW)
        }
      }
      checkIdle(WW) {
        let {
          nowMs: iW,
          lastInputAtMs: OW,
          pointerLocked: mW,
          playable: EW,
          visible: NW
        } = WW;
        iW - (null !== OW && void 0 !== OW ? OW : 0) < 3e4 ? this.idleCounted = !1 : !this.idleCounted && mW && EW && NW && (this.idleCounted = !0, this.signal("idle_pointer_locked", 1, 3e4))
      }
      tags() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const iW = WW && !this.seen.includes("rage_quit") ? [...this.seen, "rage_quit"] : this.seen;
        return {
          frustration_score: this.signalCount + (WW ? 1 : 0),
          frustration_signals: iW.join(",")
        }
      }
      signal(WW, iW, OW) {
        this.signalCount++, this.seen.includes(WW) || this.seen.push(WW), this.onSignal(WW, iW, OW)
      }
    }
    const Si = ji.j.indexOf("first_input"),
      Yi = ji.j.indexOf("first_move"),
      yi = {
        keyboardMouse: "keyboard",
        touch: "touch",
        gamepad: "pad"
      };
    class Ti {
      constructor(WW, iW, OW) {
        this.replay = WW, this.quitContext = iW, this.deps = OW, this.ladder = new ki(ji.e, "first_move"), this.frustration = void 0, this.frustrationThrottle = new RW({
          maxPerWindow: 5,
          windowMs: 6e4
        }), this.activations = new Set, this.currentStay = null, this.moveSubscriptions = [], this.everPlayable = !1, this.everPointerLocked = !1, this.pointerUnlockedAtMs = -1 / 0, this.everythingMenu = null, this.lastGameName = null, this.unsentStepMarkers = [], this.frustration = new Ki(((WW, iW, OW) => {
          this.onFrustration(WW, iW, OW)
        })), iW.setFlowProperties((WW => this.quitProperties(WW)))
      }
      get stay() {
        return this.currentStay
      }
      start() {
        var WW;
        this.reachStep("page_loaded"), Ni.l.subscribe("sessionReplayStayOpened", (WW => {
          this.resendStay(WW)
        })), Ni.l.subscribe("pointerLockUpdate", (WW => {
          this.pointerLockChanged(WW)
        })), Ni.l.subscribe("localBlockMined", (() => {
          this.blockBroken()
        })), Ni.l.subscribe("blockChangeRefused", (() => {
          this.noteFrustration("block_change_refused")
        })), Ni.l.subscribe("controlsTutorialShown", (WW => {
          this.controlsTutorialShown(WW)
        })), Ni.l.subscribe("showShopTouchTutorial", (WW => {
          !1 !== WW && this.controlsTutorialShown("shop")
        })), Ni.l.subscribe("appManagerUpdated|openInGameMenuName", (WW => {
          this.inGameMenuChanged(WW)
        })), Ni.l.subscribe("appManagerUpdated|openEverythingMenuName", (WW => {
          this.everythingMenuChanged(WW)
        })), document.addEventListener("pointerlockerror", (() => {
          this.pointerLockFailed()
        })), null === (WW = (0, Zi.e)()) || void 0 === WW || WW.onUnboundKey((() => {
          this.unboundKeyPressed()
        }))
      }
      gameLoading() {
        this.reachStep("game_loading")
      }
      gameJoined(WW, iW, OW) {
        const mW = OW && iW === this.lastGameName;
        this.lastGameName = iW, this.stopWatchingMoves();
        const EW = {
          name: iW,
          joinedAtMs: Date.now(),
          playableAtMs: null,
          visiblePlayedMs: 0,
          deaths: 0,
          ladder: new ki(ji.j, "first_move"),
          unboundKeyPresses: 0
        };
        return this.currentStay = EW, this.reachStayStep("joined"), WW >= 2 && !mW && this.reachStep("second_game"), EW
      }
      gamePlayable() {
        const WW = this.currentStay;
        null !== WW && (WW.playableAtMs = this.deps.now(), this.everPlayable = !0, this.reachStep("game_playable"), this.reachStayStep("game_playable"), this.deps.isPointerLocked() && this.pointerLocked(), this.watchMoves())
      }
      input() {
        const WW = this.currentStay;
        null === WW || null === WW.playableAtMs || WW.ladder.furthestStepIndex >= Si || (this.reachStep("first_input"), this.reachStayStep("first_input"))
      }
      played60s() {
        this.reachStep("played_60s"), this.reachStayStep("played_60s")
      }
      gameLeft() {
        this.stopWatchingMoves(), this.currentStay = null
      }
      hZ() {
        var WW, iW, OW;
        this.sendStepMarkers(), this.frustration.checkIdle({
          nowMs: this.deps.now(),
          lastInputAtMs: Math.max(null !== (WW = this.quitContext.getLastInputAtMs()) && void 0 !== WW ? WW : 0, null !== (iW = null === (OW = this.currentStay) || void 0 === OW ? void 0 : OW.playableAtMs) && void 0 !== iW ? iW : 0),
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
          input: yi[this.deps.getInputDevice()]
        }), this.reachStep("first_move"), this.reachStayStep("first_move")
      }
      blockBroken() {
        this.isPlayable() && (this.activate("first_block_broken"), this.reachStep("first_block"), this.reachStayStep("first_block"))
      }
      inGameMenuChanged(WW) {
        null !== WW && this.menuOpened(WW, "inventory" === WW ? "first_inventory_open" : null)
      }
      everythingMenuChanged(WW) {
        const iW = null === this.everythingMenu;
        this.everythingMenu = WW, null !== WW && (this.menuOpened(WW, WW === Ui.m.SETTINGS ? "first_settings_open" : null), WW === Ui.m.SETTINGS && iW && null !== this.currentStay && this.noteFrustration("menu_toggling"))
      }
      pointerLockChanged(WW) {
        WW ? this.pointerLocked() : this.pointerUnlockedAtMs = this.deps.now()
      }
      controlsTutorialShown(WW) {
        const iW = `controls_tutorial_${WW}`;
        this.activations.has(iW) || (this.activations.add(iW), this.replay.capture("controls_tutorial_shown", {
          tutorial: WW,
          ...this.timing()
        }))
      }
      unboundKeyPressed() {
        this.noteFrustration("unbound_key_burst");
        const WW = this.currentStay;
        null !== WW && WW.unboundKeyPresses < ji.n && (WW.unboundKeyPresses++, this.deps.publishStayProgress({
          unboundKeyPresses: WW.unboundKeyPresses
        }))
      }
      noteFrustration(WW) {
        this.frustration.note(WW, this.deps.now())
      }
      quitProperties(WW) {
        return {
          ...this.ladderTags(),
          ...this.frustration.tags(WW),
          never_pointer_locked: this.everPlayable && !this.everPointerLocked && !this.deps.isTouchScreen() && "gamepad" !== this.deps.getInputDevice()
        }
      }
      isPlayable() {
        return null !== this.currentStay && null !== this.currentStay.playableAtMs
      }
      ladderTags() {
        var WW;
        return {
          furthest_step: null !== (WW = this.ladder.furthest) && void 0 !== WW ? WW : "",
          furthest_step_index: this.ladder.furthestStepIndex
        }
      }
      reachStep(WW) {
        null !== this.ladder.reach(WW) && (this.replay.setSessionProperties(this.ladderTags(), !1), this.unsentStepMarkers.push(ji.e.indexOf(WW)), this.sendStepMarkers())
      }
      sendStepMarkers() {
        for (; this.unsentStepMarkers.length > 0 && this.replay.addReplayMarker(mW.l.step, {
            step: this.unsentStepMarkers[0]
          }, !0);) this.unsentStepMarkers.shift()
      }
      resendStay(WW) {
        const iW = this.currentStay;
        var OW;
        null !== iW && iW.name === WW && this.deps.publishStayProgress({
          furthestStep: null !== (OW = iW.ladder.furthest) && void 0 !== OW ? OW : void 0,
          unboundKeyPresses: iW.unboundKeyPresses
        })
      }
      reachStayStep(WW) {
        var iW;
        const OW = null === (iW = this.currentStay) || void 0 === iW ? void 0 : iW.ladder;
        void 0 !== OW && null !== OW.reach(WW) && this.deps.publishStayProgress({
          furthestStep: OW.furthest
        })
      }
      menuOpened(WW, iW) {
        this.replay.capture("menu_opened", {
          menu: WW
        }), null !== iW && this.activate(iW)
      }
      activate(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.activations.has(WW) || (this.activations.add(WW), this.replay.capture(WW, {
          ...iW,
          ...this.timing()
        }))
      }
      timing() {
        var WW, iW;
        const OW = this.deps.now(),
          mW = null !== (WW = null === (iW = this.currentStay) || void 0 === iW ? void 0 : iW.playableAtMs) && void 0 !== WW ? WW : null;
        return {
          ms_since_page_load: Math.round(OW),
          ms_since_playable: null === mW ? null : Math.round(OW - mW)
        }
      }
      onFrustration(WW, iW, OW) {
        this.replay.setSessionProperties(this.frustration.tags(), !1), this.replay.addReplayMarker(mW.l.frustration, {
          signal: ji.h.indexOf(WW)
        });
        const EW = this.frustrationThrottle.allow(WW, Date.now());
        null !== EW && this.replay.capture("frustration_signal", {
          signal: WW,
          count: iW,
          window_ms: OW,
          suppressed_since_last: EW
        })
      }
      watchMoves() {
        var WW, iW;
        if (0 === this.moveSubscriptions.length && (null !== (WW = null === (iW = this.currentStay) || void 0 === iW ? void 0 : iW.ladder.furthestStepIndex) && void 0 !== WW ? WW : 1 / 0) < Yi) {
          const WW = () => {
            this.moved()
          };
          this.moveSubscriptions = [Ni.l.subscribe("usedKeyboard", WW), Ni.l.subscribe("stickMoved", WW)]
        }
      }
      stopWatchingMoves() {
        for (const WW of this.moveSubscriptions) Ni.l.unsubscribe(WW);
        this.moveSubscriptions = []
      }
    }
    const Ji = ["quit_after_hitch", "quit_after_death", "quit_during_load", "quit_in_menu", "quit_idle", "quit_after_ad"],
      Hi = ["quit_during_load", "quit_after_ad", "quit_after_death", "quit_after_hitch", "quit_idle", "quit_in_menu"];

    function ni(WW) {
      var iW;
      return null !== (iW = Hi.find((iW => WW.includes(iW)))) && void 0 !== iW ? iW : "none"
    }

    function ui(WW, iW, OW) {
      return null !== WW && iW - WW < OW
    }
    class oi {
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
      setFlowProperties(WW) {
        this.flowProperties = WW
      }
      noteInput(WW) {
        this.history.lastInputAtMs = WW
      }
      noteHitch(WW) {
        this.history.lastHitchAtMs = WW
      }
      noteDeath(WW) {
        this.history.lastDeathAtMs = WW
      }
      noteError(WW) {
        this.history.lastErrorAtMs = WW
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
      noteAdFinished(WW) {
        this.history.adPlaying = !1, this.history.lastAdFinishedAtMs = WW
      }
      noteLoadStep(WW) {
        this.lastLoadStep = WW
      }
      getLastLoadStep() {
        return this.lastLoadStep
      }
      quit(WW) {
        const iW = function(WW, iW) {
            var OW, mW;
            const EW = [];
            return ui(iW.lastHitchAtMs, WW.nowMs, 15e3) && EW.push("quit_after_hitch"), ui(iW.lastDeathAtMs, WW.nowMs, 15e3) && EW.push("quit_after_death"), WW.loading ? EW.push("quit_during_load") : "page" !== WW.quitFrom || WW.inGame && !WW.menuOpen || EW.push("quit_in_menu"), ui(null !== (OW = iW.lastInputAtMs) && void 0 !== OW ? OW : 0, WW.nowMs, 6e4) || EW.push("quit_idle"), (!0 === iW.adPlaying || ui(null !== (mW = iW.lastAdFinishedAtMs) && void 0 !== mW ? mW : null, WW.nowMs, 3e4)) && EW.push("quit_after_ad"), EW
          }(WW, this.history),
          OW = function(WW, iW) {
            var OW;
            return ui(iW.lastDeathAtMs, WW, 1e4) || ui(null !== (OW = iW.lastErrorAtMs) && void 0 !== OW ? OW : null, WW, 1e4)
          }(WW.nowMs, this.history),
          mW = {
            quit_from: WW.quitFrom,
            in_game: WW.inGame,
            quit_reasons: iW.join(","),
            quit_reason: ni(iW),
            rage_quit: OW,
            ...this.flowProperties(OW)
          };
        var EW;
        iW.includes("quit_during_load") && (mW.last_load_step = null !== (EW = this.lastLoadStep) && void 0 !== EW ? EW : "none");
        null !== WW.gameName && (mW.game_name_with_variation = WW.gameName, mW.game_name = (0, QW.Tb)(WW.gameName));
        for (const NW of Ji) mW[NW] = iW.includes(NW);
        return {
          reasons: iW,
          properties: mW
        }
      }
    }
    class di {
      constructor(WW) {
        this.deps = WW, this.quitContext = new oi, this.loading = !1, this.inGame = !1, this.switching = !1, this.nextLeaveIsNotAQuit = !1, this.pendingQuit = null, this.exited = !1
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
      joinFailed(WW) {
        this.loading = !1, this.nextLeaveIsNotAQuit = this.inGame, this.deps.capture("join_failed", WW)
      }
      disconnected() {
        this.nextLeaveIsNotAQuit = !0
      }
      kickedForAfk(WW) {
        this.nextLeaveIsNotAQuit = !0, this.deps.capture("kicked_afk", {
          game_name_with_variation: WW
        })
      }
      gameLeft(WW) {
        const iW = this.nextLeaveIsNotAQuit || this.deps.isJoinAbandoned(),
          OW = this.switching,
          mW = this.loading;
        if (this.nextLeaveIsNotAQuit = !1, this.switching = !1, this.inGame = !1, null === WW) return;
        if (OW || (this.loading = !1), iW) return void this.quitContext.forgetGame();
        const EW = this.quitContext.quit({
          quitFrom: "game",
          gameName: WW,
          nowMs: this.deps.now(),
          inGame: !0,
          loading: mW,
          menuOpen: !1
        });
        this.quitContext.forgetGame(), OW ? this.captureSwitch(EW) : this.startPendingQuit(EW)
      }
      gameReplayOpened(WW) {
        this.nextLeaveIsNotAQuit = !0, this.gameLeft(WW), this.deps.capture("game_replay_opened", {
          from_game_name_with_variation: WW
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
      pageHidden(WW) {
        if (this.exited) return;
        this.exited = !0;
        const iW = this.pendingQuit;
        null !== iW && (clearTimeout(iW.timer), this.pendingQuit = null, this.deps.onGameQuit(iW.quit), this.deps.captureOnExit("quit_context", iW.quit.properties, iW.atEpochMs));
        const OW = {
            quitFrom: "page",
            gameName: null,
            nowMs: this.deps.now(),
            inGame: this.inGame,
            loading: this.loading,
            menuOpen: this.deps.isMenuOpen()
          },
          mW = this.quitContext.quit(OW);
        this.inGame && this.deps.onGameQuit(mW), this.deps.captureOnExit("quit_context", {
          ...WW,
          ...mW.properties
        })
      }
      pageRestored() {
        this.exited = !1, this.deps.capture("page_restored", {})
      }
      startPendingQuit(WW) {
        this.resolvePendingQuitAsSwitch();
        const iW = {
          quit: WW,
          atEpochMs: Date.now(),
          timer: setTimeout((() => {
            this.pendingQuit === iW && (this.pendingQuit = null, this.deps.onGameQuit(WW), this.deps.capture("quit_context", WW.properties, iW.atEpochMs))
          }), 1e4)
        };
        this.pendingQuit = iW
      }
      resolvePendingQuitAsSwitch() {
        const WW = this.pendingQuit;
        null !== WW && (clearTimeout(WW.timer), this.pendingQuit = null, "string" === typeof WW.quit.properties.game_name_with_variation && this.captureSwitch(WW.quit))
      }
      captureSwitch(WW) {
        this.deps.capture("game_switched", {
          from_game_name_with_variation: WW.properties.game_name_with_variation,
          from_game_name: WW.properties.game_name,
          after_death: WW.reasons.includes("quit_after_death"),
          after_hitch: WW.reasons.includes("quit_after_hitch")
        })
      }
    }
    var ei = OW(7502);
    class vi {
      constructor(WW) {
        this.replay = WW, this.pointerLockThrottle = new RW({
          maxPerWindow: 10,
          windowMs: 6e4
        }), this.counts = new Map, this.game = null, this.timer = null
      }
      start(WW) {
        WW.onUnboundKey((WW => {
          this.onUnboundKey(WW)
        })), WW.onPointerLock((WW => {
          const iW = this.pointerLockThrottle.allow("pointer_lock_changed", Date.now());
          null !== iW && this.replay.capture("pointer_lock_changed", {
            locked: WW,
            in_game: "inGame" === mi.d.get("gameState"),
            menu_open: (0, ti.l)(),
            suppressed_since_last: iW
          })
        })), Ni.l.subscribe("leaveGame", (() => {
          this.flush(!1)
        })), document.addEventListener("visibilitychange", (() => {
          document.hidden && this.flush(!0)
        }))
      }
      onUnboundKey(WW) {
        var iW, OW;
        const mW = (0, Pi.d)().gameNameWithVariation;
        mW !== this.game && (this.flush(!1), this.game = mW);
        const EW = null !== (iW = (0, ei.g)(WW)) && void 0 !== iW ? iW : WW;
        this.counts.set(EW, (null !== (OW = this.counts.get(EW)) && void 0 !== OW ? OW : 0) + 1), this.timer ??= setTimeout((() => {
          this.flush(!1)
        }), 1e4 - Date.now() % 1e4)
      }
      flush(WW) {
        if (null !== this.timer && (clearTimeout(this.timer), this.timer = null), 0 === this.counts.size) return;
        const iW = (OW = this.counts, [...OW].sort(((WW, iW) => iW[1] - WW[1] || (WW[0] < iW[0] ? -1 : 1))));
        var OW;
        let mW = 0;
        for (const [, NW] of iW) mW += NW;
        const EW = {
          key_counts: Object.fromEntries(iW),
          keys: iW.map((WW => {
            let [iW] = WW;
            return iW
          })).join(","),
          top_key: iW[0][0],
          presses: mW,
          game_name: null === this.game ? null : (0, QW.Tb)(this.game),
          game_name_with_variation: this.game
        };
        this.replay.addUnboundKeyPresses(this.counts), this.counts.clear(), WW ? this.replay.captureOnExit("unbound_keys", EW) : this.replay.capture("unbound_keys", EW)
      }
    }
    var gi = OW(154);

    function Di(WW) {
      var iW, OW;
      return null !== (iW = null === (OW = gi.k[WW]) || void 0 === OW ? void 0 : OW.toLowerCase()) && void 0 !== iW ? iW : String(WW)
    }
    class Vi {
      constructor(WW, iW) {
        this.replay = WW, this.quitContext = iW, this.startedAtMs = null, this.steps = new Map, this.firstGamePlayable = !1
      }
      started() {
        this.startedAtMs = Date.now()
      }
      stepCompleted(WW) {
        if (this.steps.has(WW)) return;
        const iW = performance.now();
        this.steps.set(WW, iW);
        const OW = Di(WW);
        this.quitContext.noteLoadStep(OW), this.firstGamePlayable || this.replay.capture("game_load_step", {
          load_step: OW,
          step_number: WW,
          ms_since_page_load: Math.round(iW),
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
        let WW = null,
          iW = null;
        for (const [mW, EW] of [...this.steps].sort(((WW, iW) => WW[1] - iW[1]))) null !== iW && (null === WW || EW - iW > WW.ms) && (WW = {
          step: mW,
          ms: EW - iW
        }), iW = EW;
        const OW = null === this.startedAtMs ? null : Date.now() - this.startedAtMs;
        return this.firstGamePlayable = !0, this.ended(), {
          load_ms: OW,
          slowest_load_step: null === WW ? null : Di(WW.step),
          slowest_load_step_ms: null === WW ? null : Math.round(WW.ms)
        }
      }
      resetSteps() {
        this.steps.clear(), this.quitContext.noteLoadStep(null)
      }
    }
    const fi = ["keydown", "pointerdown", "touchstart"];
    class Ci {
      constructor(WW) {
        this.replay = WW, this.firstInGameInputSent = !1
      }
      startFirstInputWatch() {
        setTimeout((() => {
          ! function(WW) {
            var iW;
            let OW = !1;
            const mW = (iW, mW, EW) => {
              OW || (OW = !0, WW(iW, mW, EW))
            };
            if ("undefined" !== typeof PerformanceObserver && null !== (iW = PerformanceObserver.supportedEntryTypes) && void 0 !== iW && iW.includes("first-input")) {
              const WW = new PerformanceObserver((iW => {
                const [OW] = iW.getEntries();
                WW.disconnect(), mW(OW.name, OW.startTime, !0)
              }));
              return void WW.observe({
                type: "first-input",
                buffered: !0
              })
            }
            const EW = new AbortController,
              NW = WW => {
                EW.abort(), mW(WW.type, WW.timeStamp, !1)
              };
            for (const PW of fi) window.addEventListener(PW, NW, {
              capture: !0,
              passive: !0,
              signal: EW.signal
            })
          }(((WW, iW, OW) => {
            this.replay.capture("first_input", Object.fromEntries([
              ["input_type", WW],
              ["ms_since_page_load", Math.round(iW)],
              ["buffered", OW]
            ]))
          }))
        }), 100)
      }
      onFirstInGameInput(WW, iW) {
        this.firstInGameInputSent = !0, this.replay.capture("first_ingame_input", Object.fromEntries([
          ["input_type", WW],
          ["ms_since_playable", Math.round(performance.now() - iW)],
          ["ms_since_page_load", Math.round(performance.now())]
        ]))
      }
      capturePageLoadTiming() {
        const WW = performance.getEntriesByType("navigation")[0],
          iW = performance.getEntriesByName("first-contentful-paint")[0];
        this.replay.capture("page_load_timing", {
          ttfb_ms: WW ? Math.round(WW.responseStart) : null,
          first_contentful_paint_ms: iW ? Math.round(iW.startTime) : null,
          dom_content_loaded_ms: WW ? Math.round(WW.domContentLoadedEventEnd) : null,
          load_ms: WW ? Math.round(WW.loadEventEnd) : null,
          transfer_kb: WW ? Math.round(WW.transferSize / 1024) : null,
          recording_started_ms: Math.round(performance.now())
        })
      }
    }
    class Xi {
      constructor(WW, iW) {
        this.replay = WW, this.quitContext = iW, this.settings = mi.d.get("clientEscMenuOptions"), this.pendingSettings = {}, this.settingsTimer = null, this.adRequest = null, this.playingAd = null
      }
      start() {
        Ni.l.subscribe("purchaseStarted", (WW => {
          let {
            product: iW
          } = WW;
          this.replay.setFlag("purchase_intent"), this.replay.capture("purchase_started", {
            product: iW
          })
        })), Ni.l.subscribe("purchaseEnded", (WW => {
          let {
            outcome: iW
          } = WW;
          this.replay.capture("purchase_ended", {
            outcome: iW
          })
        })), Ni.l.subscribe("adRequested", (WW => {
          let {
            adKind: iW,
            provider: OW
          } = WW;
          this.adRequest = {
            adKind: iW,
            provider: OW,
            atMs: performance.now()
          }
        })), Ni.l.subscribe("appManagerUpdated|soundOnFromAd", (WW => {
          WW && null !== this.playingAd ? this.onAdFinished() : WW || null !== this.playingAd || this.onAdStarted()
        })), Ni.l.subscribe("appManagerUpdated|clientEscMenuOptions", (WW => {
          mi.d.isApplyingDefaults ? this.settings = WW : this.onSettingsChanged(WW)
        }))
      }
      onAdStarted() {
        var WW, iW;
        const OW = performance.now(),
          mW = null !== this.adRequest && OW - this.adRequest.atMs < 6e4 ? this.adRequest : null;
        this.adRequest = null, this.playingAd = {
          ad_kind: null !== (WW = null === mW || void 0 === mW ? void 0 : mW.adKind) && void 0 !== WW ? WW : "unknown",
          provider: null !== (iW = null === mW || void 0 === mW ? void 0 : mW.provider) && void 0 !== iW ? iW : null,
          startedAtMs: OW
        }, this.replay.setFlag("ad_shown"), this.quitContext.noteAdStarted(), this.replay.capture("ad_started", this.adProperties(this.playingAd, OW))
      }
      onAdFinished() {
        const WW = performance.now(),
          iW = this.playingAd;
        this.playingAd = null, this.quitContext.noteAdFinished(WW), this.replay.capture("ad_finished", {
          ...this.adProperties(iW, WW),
          ad_ms: Math.round(WW - iW.startedAtMs)
        })
      }
      adProperties(WW, iW) {
        return {
          ad_kind: WW.ad_kind,
          provider: WW.provider,
          minutes_since_page_load: Math.floor(iW / 6e4),
          in_game: "inGame" === mi.d.get("gameState")
        }
      }
      onSettingsChanged(WW) {
        Object.assign(this.pendingSettings, function(WW, iW) {
          const OW = {};
          for (const mW of Object.keys(iW)) WW[mW] !== iW[mW] && (OW[mW] = iW[mW]);
          return OW
        }(this.settings, WW)), this.settings = WW, null !== this.settingsTimer && clearTimeout(this.settingsTimer), this.settingsTimer = setTimeout((() => {
          this.settingsTimer = null, Object.keys(this.pendingSettings).length > 0 && (this.replay.capture("settings_changed", {
            changed_settings: Object.keys(this.pendingSettings),
            values: this.pendingSettings
          }), this.pendingSettings = {})
        }), 2e3)
      }
    }

    function Bi(WW) {
      switch ((0, zW.A)(WW)) {
        case FW.b.DISCORD_GUILD:
          return "discord_guild";
        case FW.b.DISCORD_DM:
          return "discord_dm";
        default:
          return (0, zW.R)(WW) ? "public" : "private"
      }
    }
    class qi {
      constructor(WW) {
        this.replay = WW, this.framesThisTick = 0, this.lastTickMs = performance.now(), this.ticks = 0, this.gamesJoined = 0, this.pageEvents = void 0, this.flows = void 0, this.health = void 0, this.leaves = void 0, this.joinLoad = void 0, this.unsubscribeDeaths = () => {}, this.inputSinceActiveMarker = !1, this.firstMinutePlayedSent = !1, this.pageEvents = new Ci(WW), this.leaves = new di({
          capture: (iW, OW, mW) => {
            void 0 === mW ? WW.capture(iW, OW) : WW.captureAt(iW, OW, mW)
          },
          captureOnExit: (iW, OW, mW) => {
            WW.captureOnExit(iW, OW, mW)
          },
          onGameQuit: WW => {
            let {
              reasons: iW,
              properties: OW
            } = WW;
            const mW = OW.game_name_with_variation;
            Ni.l.iZ("sessionReplayGameQuit", {
              reasons: iW,
              gameName: "string" === typeof mW ? mW : null
            })
          },
          isMenuOpen: ti.l,
          isJoinAbandoned: wi.f,
          now: () => performance.now()
        }), this.joinLoad = new Vi(WW, this.leaves.quitContext), this.flows = function(WW, iW) {
          return new Ti(WW, iW, {
            now: () => performance.now(),
            isTouchScreen: () => mi.d.get("isTouchScreen"),
            getInputDevice: () => mi.d.get("activeInputDevice"),
            isPointerLocked: () => null !== document.pointerLockElement,
            isPageVisible: () => !document.hidden,
            publishStayProgress: WW => {
              Ni.l.iZ("sessionReplayStayProgress", WW)
            }
          })
        }(WW, this.leaves.quitContext), this.health = new bi(WW, this.leaves.quitContext, this.flows)
      }
      start() {
        const WW = (0, Zi.e)(),
          iW = new vi(this.replay);
        null !== WW && iW.start(WW), this.pageEvents.capturePageLoadTiming(), this.flows.start();
        const OW = mi.d.get("gameState");
        "inGame" === OW ? this.joinConnectedGame() : "loadingScreen" !== OW && "findingLobby" !== OW || this.leaves.joinStarted(), this.subscribeToGameFlow(), new Xi(this.replay, this.leaves.quitContext).start(), this.health.start(), this.trackInput(), this.pageEvents.startFirstInputWatch(), (0, Li.r)((() => {
          this.framesThisTick++
        })), setInterval((() => {
          this.Hk()
        }), 1e3), window.addEventListener("pagehide", (() => {
          iW.flush(!0), this.leaves.pageHidden(this.replay.finalTags())
        })), window.addEventListener("pageshow", (WW => {
          WW.persisted && this.leaves.pageRestored()
        }))
      }
      trackInput() {
        const WW = WW => {
          var iW, OW;
          this.inputSinceActiveMarker = !0, this.leaves.quitContext.noteInput(WW.timeStamp), this.flows.input();
          const mW = null !== (iW = null === (OW = this.flows.stay) || void 0 === OW ? void 0 : OW.playableAtMs) && void 0 !== iW ? iW : null;
          this.pageEvents.firstInGameInputSent || null === mW || this.pageEvents.onFirstInGameInput(WW.type, mW)
        };
        for (const iW of ["keydown", "pointerdown", "pointermove", "wheel"]) window.addEventListener(iW, WW, {
          capture: !0,
          passive: !0
        })
      }
      subscribeToGameFlow() {
        Ni.l.subscribe("joinedGame", (WW => {
          let {
            gameNameWithVariation: iW,
            lobbyName: OW
          } = WW;
          (0, wi.f)() || this.onJoinedGame(iW, OW)
        })), Ni.l.subscribe("leaveGame", (() => {
          var WW, iW;
          const OW = null !== (WW = null === (iW = this.flows.stay) || void 0 === iW ? void 0 : iW.name) && void 0 !== WW ? WW : null;
          this.onLeftGame(), this.leaves.gameLeft(OW)
        })), Ni.l.subscribe("replayViewer|replayLoaded", (() => {
          const WW = this.flows.stay;
          null !== WW && (this.onLeftGame(), this.leaves.gameReplayOpened(WW.name))
        })), Ni.l.subscribe("matchmakeAndPlayStepCompleted", (WW => {
          let {
            step: iW
          } = WW;
          this.joinLoad.stepCompleted(iW)
        })), Ni.l.subscribe("leftPlayPage", (() => {
          this.leaves.playPageLeft(), this.joinLoad.ended()
        })), Ni.l.subscribe("joinFailed", (WW => {
          let {
            step: iW,
            severity: OW
          } = WW;
          this.leaves.joinFailed({
            step: iW,
            severity: OW,
            game_name_with_variation: (0, Pi.d)().requestedGameNameWithVariation,
            last_load_step: this.leaves.quitContext.getLastLoadStep()
          }), this.joinLoad.ended()
        })), Ni.l.subscribe("kickedForAfk", (() => {
          var WW, iW;
          this.leaves.kickedForAfk(null !== (WW = null === (iW = this.flows.stay) || void 0 === iW ? void 0 : iW.name) && void 0 !== WW ? WW : null)
        })), Ni.l.subscribe("unwantedLeftGame", (WW => {
          this.leaves.disconnected(), this.replay.setFlag("disconnected"), this.replay.capture("disconnected", {
            reason: WW.reason,
            can_reconnect: WW.canReconnect,
            automatically_reconnect: WW.automaticallyReconnect,
            requires_refresh: WW.requiresRefresh
          })
        })), Ni.l.subscribe("appManagerUpdated|gameState", (WW => {
          "loadingScreen" === WW ? this.leaves.joinStarted() : "findingLobby" === WW ? (this.leaves.joinStarted(), this.joinLoad.started(), this.replay.capture("game_loading_started", {
            entry_source: mi.d.get("gameEntrySource")
          }), this.flows.gameLoading()) : "inGame" === WW ? this.onPlayable() : "landingPage" === WW && (this.replay.capture("homepage_viewed"), this.replay.capture("$screen", {
            $screen_name: "homepage"
          }))
        })), Ni.l.subscribe("appManagerUpdated|gameEntrySource", (WW => {
          "autoReconnect" !== WW && "manualReconnect" !== WW || this.replay.capture("reconnect_attempted", {
            automatic: "autoReconnect" === WW
          })
        })), Ni.l.subscribe("sessionReplayPlayerKill", (WW => {
          let {
            killstreak: iW
          } = WW;
          this.replay.capture("player_kill", {
            killstreak: iW
          })
        }))
      }
      onPlayable() {
        (0, wi.f)() || (0, Pi.f)() || (null === this.flows.stay && this.joinConnectedGame(), this.replay.capture("game_playable", {
          ms_since_page_load: Math.round(performance.now()),
          ...this.joinLoad.playable()
        }), this.leaves.gamePlayable(), this.flows.gamePlayable())
      }
      joinConnectedGame() {
        if ((0, Pi.f)()) return;
        const {
          gameNameWithVariation: WW,
          lobbyName: iW
        } = (0, Pi.d)();
        null !== WW && null !== iW ? this.onJoinedGame(WW, iW) : console.warn("Session replay found a game playable with no game joined; not labelling it")
      }
      onJoinedGame(WW, iW) {
        this.replay.takeFullSnapshot();
        const OW = (0, zW.R)(iW),
          mW = mi.d.get("gameEntrySource");
        this.gamesJoined++, this.leaves.gameJoined(), this.flows.gameJoined(this.gamesJoined, WW, "autoReconnect" === mW || "manualReconnect" === mW), "inGame" === mi.d.get("gameState") && this.flows.gamePlayable();
        const EW = ci.clientSidePartyStateManager.getPartyInformation(),
          NW = {
            game_name: (0, QW.Tb)(WW),
            game_name_with_variation: WW,
            game_number: this.gamesJoined,
            game_analytics_id: (0, Wi.e)(WW, OW),
            is_custom_game: (0, ii.i)(WW),
            lobby_type: Bi(iW),
            in_party: null !== EW,
            party_size: null === EW ? 0 : EW.memberSocialPreviews.length + 1
          };
        this.replay.gameJoined(WW, NW), this.replay.capture("game_joined", {
          ...NW,
          entry_source: mW
        }), this.replay.capture("$screen", {
          $screen_name: NW.is_custom_game ? `custom: ${NW.game_analytics_id}` : NW.game_name
        }), this.subscribeToDeaths(WW)
      }
      onLeftGame() {
        this.joinLoad.forgetStart();
        const WW = this.flows.stay;
        null !== WW && (this.replay.capture("game_left", {
          game_name_with_variation: WW.name,
          duration_ms: Date.now() - WW.joinedAtMs
        }), this.flows.gameLeft(), this.replay.gameLeft(), this.unsubscribeDeaths(), this.unsubscribeDeaths = () => {})
      }
      subscribeToDeaths(WW) {
        this.unsubscribeDeaths();
        let iW = !0;
        this.unsubscribeDeaths = Ei.gameBridge.subscribe("localPlayerAliveSet", (OW => {
          const EW = iW && !OW;
          if (iW = OW, EW) {
            this.leaves.quitContext.noteDeath(performance.now());
            const [iW, OW, EW] = Ei.gameBridge.lookup("localPos", null), NW = {
              x: Math.round(iW),
              y: Math.round(OW),
              z: Math.round(EW)
            }, PW = this.flows.stay, LW = null === PW ? {} : {
              death_number: ++PW.deaths,
              seconds_since_join: Math.round((Date.now() - PW.joinedAtMs) / 1e3)
            };
            this.replay.capture("player_died", {
              ...NW,
              game_name_with_variation: WW,
              ...LW
            }), this.replay.addReplayMarker(mW.l.death, NW)
          }
        }))
      }
      Hk() {
        this.health.attachToRender();
        const WW = performance.now(),
          iW = WW - this.lastTickMs,
          OW = iW <= 5e3,
          EW = this.flows.stay;
        if (null !== EW && null !== EW.playableAtMs && !document.hidden && OW && EW.visiblePlayedMs < 6e4 && (EW.visiblePlayedMs += iW, EW.visiblePlayedMs >= 6e4)) {
          const iW = Math.round(WW);
          this.replay.capture("game_played_60s", {
            game_name_with_variation: EW.name,
            ms_since_page_load: iW,
            ...this.firstMinutePlayedSent ? {} : {
              ttff_ms: iW
            }
          }), this.firstMinutePlayedSent = !0, this.flows.played60s()
        }
        this.flows.hZ();
        const NW = null !== this.flows.stay && !document.hidden;
        this.replay.addFpsSample(NW && OW && this.framesThisTick > 0 ? 1e3 * this.framesThisTick / iW : null);
        const PW = NW ? Oi.b.getLastColyseusPingMs() : null;
        null !== PW && this.replay.addPingSample(PW), this.framesThisTick = 0, this.lastTickMs = WW, this.ticks++, this.ticks % 2 === 0 && (NW && this.inputSinceActiveMarker && this.replay.addReplayMarker(mW.l.active), this.inputSinceActiveMarker = !1), this.replay.markClockIfDue(this.ticks, 30)
      }
    }
    var Ri = OW(1194),
      Gi = OW(1185),
      Ii = OW(41035);

    function ai(WW) {
      return WW.length + 64
    }
    async function ri() {
      return new Response("{}")
    }

    function zi(WW, iW, OW) {
      return Ii.f.fetch(WW, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain"
        },
        body: iW,
        signal: (0, Ri.t)(3e4)
      }, OW)
    }
    class Fi {
      constructor(WW) {
        var iW, OW, mW;
        let EW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.uploadToken = WW, this.url = void 0, this.post = void 0, this.isHidden = void 0, this.queue = [], this.retries = [], this.refusedTokens = new Set, this.overflowWarned = !1, this.unloading = !1, this.sendScheduled = !1, this.url = null !== (iW = EW.url) && void 0 !== iW ? iW : `${Gi.clientSideServerUrls.indexUrl}/index/replay/timeline`, this.post = null !== (OW = EW.post) && void 0 !== OW ? OW : zi, this.isHidden = null !== (mW = EW.isHidden) && void 0 !== mW ? mW : () => "hidden" === document.visibilityState
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
      add(WW) {
        if (this.refusedTokens.has(this.uploadToken)) return;
        const iW = function(WW) {
            const iW = {
              ...WW.properties
            };
            return void 0 !== WW.$set && (iW.$set = {
              ...WW.properties.$set,
              ...WW.$set
            }), void 0 !== WW.$set_once && (iW.$set_once = {
              ...WW.$set_once,
              ...WW.properties.$set_once
            }), void 0 !== WW.$unset && (iW.$unset = WW.$unset), {
              uuid: WW.uuid,
              event: WW.event,
              timestampMs: WW.timestamp.getTime(),
              properties: JSON.stringify(iW)
            }
          }(WW),
          OW = (0, Ii.i)(JSON.stringify(iW));
        iW.properties.length > 32768 || iW.event.length > 64 || ai(this.uploadToken) + OW > 102400 ? console.warn(`Session replay timeline event ${iW.event.slice(0,64)} is too large for index-server; dropped.`) : (this.queue.push({
          uploadToken: this.uploadToken,
          event: iW,
          bytes: OW,
          attempts: 0
        }), this.trimToCap(), this.queue.length >= 50 ? this.sendQueued() : (this.unloading || this.isHidden()) && this.sendSoon())
      }
      sendSoon() {
        this.sendScheduled || (this.sendScheduled = !0, queueMicrotask((() => {
          this.sendScheduled = !1, this.sendQueued()
        })))
      }
      flush() {
        this.retries.length > 0 && (this.queue = [...this.retries, ...this.queue].sort(((WW, iW) => WW.event.timestampMs - iW.event.timestampMs)), this.retries = []), this.sendQueued()
      }
      sendQueued() {
        for (; this.queue.length > 0;) {
          const WW = this.takeBatch();
          this.refusedTokens.has(WW.uploadToken) || this.send(WW)
        }
      }
      trimToCap() {
        let WW = this.retries.length + this.queue.length - 1e3;
        if (WW <= 0) return void(this.overflowWarned = !1);
        const iW = Math.min(WW, this.retries.length);
        this.retries.splice(0, iW), WW -= iW, this.queue.splice(0, WW), this.overflowWarned || (this.overflowWarned = !0, console.warn("Session replay timeline queue is full; dropping its oldest events until it drains."))
      }
      takeBatch() {
        const WW = this.queue.shift(),
          iW = [WW];
        let OW = ai(WW.uploadToken) + WW.bytes;
        for (; this.queue.length > 0 && iW.length < 100 && this.queue[0].uploadToken === WW.uploadToken && OW + this.queue[0].bytes <= 32768;) {
          const WW = this.queue.shift();
          iW.push(WW), OW += WW.bytes
        }
        return {
          uploadToken: WW.uploadToken,
          events: iW
        }
      }
      async send(WW) {
        const iW = await this.sendOnce(WW);
        if ("refused" === iW && this.refusedTokens.add(WW.uploadToken), "retryLater" !== iW) return;
        const OW = WW.events.filter((WW => ++WW.attempts < 3));
        OW.length < WW.events.length && console.error(`Session replay timeline: dropped ${WW.events.length-OW.length} events after 3 attempts.`), this.retries.push(...OW), this.trimToCap()
      }
      async sendOnce(WW) {
        const iW = {
            uploadToken: WW.uploadToken,
            sentAtMs: Date.now(),
            events: WW.events.map((WW => WW.event))
          },
          OW = JSON.stringify(iW);
        let mW, EW = null;
        try {
          mW = await this.post(this.url, OW, (0, Ii.i)(OW)), mW.ok && (EW = await mW.json())
        } catch (NW) {
          return console.warn("Session replay timeline upload failed.", NW), "retryLater"
        }
        return null === EW ? 408 === mW.status || 429 === mW.status || mW.status >= 500 ? "retryLater" : (console.error(`Session replay timeline upload failed with ${mW.status}; dropped ${WW.events.length} events.`), "dropped") : "rejected" in EW ? EW.retryable ? "retryLater" : (console.warn(`Session replay timeline refused: ${EW.reason}; dropping this recording's events.`), "refused") : "sent"
      }
    }
    var Qi = OW(41052),
      WO = OW(5386),
      iO = OW(1303);
    class OO {
      constructor(WW) {
        var iW;
        this.tags = new rW, this.fpsMonitor = void 0, this.errorLogLink = void 0, this.lastTagsJson = "", this.clockMarked = !1, this.personUpdateTimer = null, this.expectedSessionId = "", this.recorderPatched = !1, this.gameContextKeys = [], this.firstGameJoined = !1, this.timeline = void 0, this.onDomBatch = void 0;
        const {
          recording: OW
        } = WW;
        this.onDomBatch = WW.onDomBatch;
        const PW = null !== WW.onDomBatch;
        PW && this.patchRecorder(), this.timeline = new Fi(OW.uploadToken, WW.dryRun ? {
            post: ri
          } : {}), this.timeline.start(),
          function(WW) {
            const iW = {
                supportedCompression: [EW.c.GZipJS],
                hasFeatureFlags: !1,
                sessionRecording: {
                  endpoint: "/s/"
                },
                siteApps: [],
                toolbarParams: {},
                toolbarVersion: "toolbar",
                isAuthenticated: !1
              },
              OW = window;
            OW._POSTHOG_REMOTE_CONFIG = {
              ...OW._POSTHOG_REMOTE_CONFIG,
              [WW]: {
                config: iW
              }
            }
          }(WW.posthog.projectApiKey), EW.g.init(WW.posthog.projectApiKey, DW({
            apiHost: WW.posthog.apiHost,
            recordingId: OW.recordingId,
            recordDom: PW,
            ownOrigins: [window.location.origin, new URL(Gi.clientSideServerUrls.s3Url, window.location.href).origin],
            anonymised: OW.anonymised,
            showsChat: (0, mW.s)(OW),
            allowAutomatedBrowsers: (0, WO.d)((0, WO.g)(), !1),
            onTimelineEvent: WW => {
              this.timeline.add(WW), "$pageview" === WW.event && WW.properties.$current_url && this.addReplayMarker("$pageview", {
                href: WW.properties.$current_url
              })
            },
            onDomBatch: WW => {
              this.takeDomBatch(WW)
            }
          })), PW && EW.g.startSessionRecording({
            sampling: !0
          }), this.expectedSessionId = OW.recordingId, EW.g.onSessionId((WW => {
            WW !== this.expectedSessionId && console.warn(`Session replay: PostHog session ${WW} differs from recording ${this.expectedSessionId}; events carry recording_id.`)
          })),
          function(WW, iW) {
            const {
              recording: OW
            } = WW, mW = {
              ...OW.tags,
              site_used: fW.siteUsed,
              subsite_used: null !== fW.subsiteUsed && void 0 !== fW.subsiteUsed ? fW.subsiteUsed : "",
              is_iframed: fW.isIframed,
              entry_path: location.pathname,
              ...CW(),
              ...BW(OW, iW),
              client_build: pW.d
            };
            EW.g.register(mW), null !== WW.videoStatus && EW.g.register({
              replay_video_status: WW.videoStatus
            }), EW.g.setPersonProperties(mW, {
              ...qW("initial_", mW),
              ...XW(OW)
            })
          }(WW, PW), this.fpsMonitor = new NW.b({
            onEpisodeStarted: WW => {
              this.capture("low_fps_started", {
                avg_fps: Math.round(WW)
              }), Ni.l.iZ("sessionReplayLowFps", {
                low: !0
              })
            },
            onEpisodeEnded: WW => {
              this.capture("low_fps_episode", {
                duration_ms: WW.durationMs,
                min_fps: WW.minFps,
                avg_fps: WW.avgFps
              }), Ni.l.iZ("sessionReplayLowFps", {
                low: !1
              })
            }
          }), this.errorLogLink = new IW({
            dashboardHost: null !== (iW = WW.posthog.dashboardHost) && void 0 !== iW ? iW : WW.posthog.apiHost,
            recordingId: OW.recordingId,
            getSessionId: () => EW.g.get_session_id(),
            domRecorded: PW,
            captureError: (WW, iW) => {
              this.captureClientError("logged", WW, iW)
            }
          }), (0, iO.annotateLoggedErrors)(((WW, iW) => this.errorLogLink.annotate(WW, iW))), new qi(this).start()
      }
      capture(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        EW.g.capture(WW, iW)
      }
      captureAt(WW, iW, OW) {
        EW.g.capture(WW, iW, {
          timestamp: new Date(OW)
        })
      }
      captureOnExit(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        EW.g.capture(WW, iW, {
          timestamp: new Date(OW)
        })
      }
      captureClientError(WW, iW, OW) {
        this.setFlag("had_error"), this.capture("client_error", {
          kind: WW,
          message: kW(iW).slice(0, 300),
          source: null,
          error_name: null,
          ...OW
        })
      }
      takeFullSnapshot() {
        if (this.tryFullSnapshot()) return;
        const WW = performance.now() + 1500,
          iW = setInterval((() => {
            (this.tryFullSnapshot() || performance.now() >= WW) && clearInterval(iW)
          }), 100)
      }
      setVideoStatus(WW, iW) {
        EW.g.register({
          replay_video_status: WW
        });
        const OW = "stopped_cellular" === WW ? "cellular" : "stopped_error" === WW ? "error" : null;
        null !== OW && (this.capture("replay_video_stopped", {
          reason: OW,
          detail: null === iW ? null : kW(iW).slice(0, 300)
        }), this.addReplayMarker("replay_video_stopped", {
          reason: OW
        }))
      }
      stopDomRecording() {
        EW.g.stopSessionRecording(), EW.g.register({
          dom_recorded: !1
        })
      }
      optOut() {
        this.stopDomRecording(), EW.g.set_config({
          before_send: () => null
        })
      }
      takeDomBatch(WW) {
        null !== this.onDomBatch ? this.onDomBatch(WW) : console.warn("Session replay: posthog-js recorded the page of an events-only recording; dropped it")
      }
      tryFullSnapshot() {
        var WW;
        return !(null === (WW = EW.g.sessionRecording) || void 0 === WW || !WW.started) && (VW().rrweb.record.takeFullSnapshot(), !0)
      }
      patchRecorder() {
        this.recorderPatched || (this.recorderPatched = !0, function() {
          const WW = VW().rrwebPlugins,
            iW = WW.getRecordConsolePlugin;
          WW.getRecordConsolePlugin = () => iW({
            level: ["warn", "error", "assert"]
          })
        }(), this.markClockOnFullSnapshots())
      }
      markClockOnFullSnapshots() {
        const WW = VW().rrweb.record,
          iW = WW.takeFullSnapshot;
        WW.takeFullSnapshot = WW => {
          iW(WW), this.markClock()
        }
      }
      markClock() {
        this.clockMarked = this.addReplayMarker(mW.l.clock, {
          epochMs: (0, Qi.e)(),
          perfNowMs: performance.now()
        }) || this.clockMarked
      }
      markClockIfDue(WW, iW) {
        this.clockMarked && WW % iW !== 0 || this.markClock()
      }
      addReplayMarker(WW) {
        var iW, OW;
        let mW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (!(arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) || EW.g.sessionRecordingStarted()) && null !== (iW = null === (OW = EW.g.sessionRecording) || void 0 === OW ? void 0 : OW.tryAddCustomEvent(WW, mW)) && void 0 !== iW && iW
      }
      gameJoined(WW, iW) {
        this.unregisterGameContext(), this.gameContextKeys = Object.keys(iW), EW.g.register(iW), this.firstGameJoined || (this.firstGameJoined = !0, EW.g.setPersonProperties(void 0, {
          first_game_ever: iW.game_name,
          first_game_ever_with_variation: iW.game_name_with_variation,
          first_game_ever_analytics_id: iW.game_analytics_id
        })), this.tags.gameJoined(WW, Date.now()), this.updateTags()
      }
      gameLeft() {
        this.unregisterGameContext(), this.tags.gameLeft(Date.now()), this.fpsMonitor.endEpisode(Date.now()), this.updateTags()
      }
      setFlag(WW) {
        this.tags.setFlag(WW) && this.updateTags()
      }
      addHitch(WW) {
        this.tags.addHitch(WW) && this.updateTags()
      }
      setSessionProperties(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        EW.g.register(WW), iW && EW.g.setPersonProperties(WW)
      }
      addPingSample(WW) {
        this.tags.addPingSample(WW) && this.updateTags()
      }
      addFpsSample(WW) {
        this.fpsMonitor.addSample(WW, Date.now());
        const iW = this.fpsMonitor.getTags();
        null !== iW && (this.tags.setFpsTags(iW), this.updateTags())
      }
      addUnboundKeyPresses(WW) {
        this.tags.addUnboundKeyPresses(WW), this.updateTags()
      }
      finalTags() {
        return this.fpsMonitor.endEpisode(Date.now()), this.tags.toProperties(Date.now())
      }
      updateTags() {
        const WW = this.tags.toProperties(),
          iW = JSON.stringify(WW);
        iW !== this.lastTagsJson && (this.lastTagsJson = iW, EW.g.register(WW), null === this.personUpdateTimer && (this.personUpdateTimer = setTimeout((() => {
          this.personUpdateTimer = null, EW.g.setPersonProperties(this.tags.toProperties())
        }), 0)))
      }
      unregisterGameContext() {
        for (const WW of this.gameContextKeys) EW.g.unregister(WW);
        this.gameContextKeys = []
      }
    }
  },
  41052: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => NW
    });
    const mW = 20;
    let EW = Date.now() - performance.now();

    function NW() {
      const WW = performance.now(),
        iW = Date.now();
      return Math.abs(iW - (WW + EW)) > mW && (EW = iW - WW), WW + EW
    }
  },
  41035: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW,
      f: () => NW,
      i: () => EW
    });
    const mW = 32768;

    function EW(WW) {
      return (new TextEncoder).encode(WW).byteLength
    }
    const NW = new class {
      constructor() {
        this.inFlightBytes = 0, this.inFlightLabels = new Map
      }
      async fetch(WW, iW, OW, mW) {
        if (this.inFlightBytes + OW > 49152) return await fetch(WW, iW);
        this.inFlightBytes += OW, this.countLabel(mW, 1);
        const EW = () => {
          this.inFlightBytes -= OW, this.countLabel(mW, -1)
        };
        let NW;
        try {
          NW = await fetch(WW, {
            ...iW,
            keepalive: !0
          })
        } catch (LW) {
          var PW;
          if (EW(), null !== (PW = iW.signal) && void 0 !== PW && PW.aborted) throw LW;
          return console.info("Session replay keepalive request failed; retrying without keepalive.", LW), await fetch(WW, iW)
        }
        return EW(), NW
      }
      isInFlight(WW) {
        var iW;
        return (null !== (iW = this.inFlightLabels.get(WW)) && void 0 !== iW ? iW : 0) > 0
      }
      sendBeacon(WW, iW) {
        const OW = EW(iW);
        return !(this.inFlightBytes + OW > 57344) && this.beaconSent(navigator.sendBeacon(WW, new Blob([iW], {
          type: "text/plain"
        })), OW)
      }
      sendUploadBeacon(WW, iW, OW) {
        return !(this.inFlightBytes + OW > 40960) && this.beaconSent(navigator.sendBeacon(WW, iW), OW)
      }
      countLabel(WW, iW) {
        var OW;
        void 0 !== WW && this.inFlightLabels.set(WW, (null !== (OW = this.inFlightLabels.get(WW)) && void 0 !== OW ? OW : 0) + iW)
      }
      beaconSent(WW, iW) {
        return WW && (this.inFlightBytes += iW, setTimeout((() => {
          this.inFlightBytes -= iW
        }), 1e4)), WW
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);