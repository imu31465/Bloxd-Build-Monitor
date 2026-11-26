export const id = 61;
export const ids = [61];
export const modules = {
  40664: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      ReplayPostHog: () => Uz
    });
    var cU = zU(3788),
      yU = zU(40667),
      QU = zU(40647);
    const AU = new Set(["partycode", "lobby", "vm", "invite", "invitecode", "code", "token", "access_token", "id_token", "refresh_token", "auth", "key", "state", "ticket", "jointicket", "secret", "password", "sig", "signature"]),
      FU = new Set(["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "bfcid", "irclid", "_kx", "_gl", "yclid", "srsltid", "mc_eid", "s_kwcid", "ef_id", "_hsenc", "mkt_tok"]),
      oU = "redacted",
      DU = /([?&#])([^=&#?\s"']+)=([^&#?\s"'<>\\]*)/g,
      EU = /(\/play\/[^/?#\s"'<>\\]+\/)[^/?#\s"'<>\\]+/gi,
      YU = /\/play\//i,
      NU = /lobby|party/i;

    function IU(UU) {
      try {
        return decodeURIComponent(UU)
      } catch {
        return null
      }
    }

    function pU(UU) {
      const XU = UU.includes("%") ? IU(UU) : null;
      if (null === XU || XU === UU) return UU;
      let zU = aU(`?${XU}`).slice(1);
      return zU === XU && (zU = pU(XU)), zU === XU ? UU : encodeURIComponent(zU)
    }

    function aU(UU) {
      return UU.includes("=") || YU.test(UU) ? UU.replace(DU, ((UU, XU, zU, cU) => {
        var yU;
        const QU = (null !== (yU = IU(zU)) && void 0 !== yU ? yU : zU).toLowerCase();
        if (AU.has(QU)) return `${XU}${zU}=${oU}`;
        if (FU.has(QU) && "" !== cU) return `${XU}${zU}=<masked>`;
        const DU = pU(cU);
        return DU === cU ? UU : `${XU}${zU}=${DU}`
      })).replace(EU, `$1${oU}`) : UU
    }
    const tU = new Set(["href", "src", "srcset", "action", "formaction", "poster", "xlink:href"]);

    function gU(UU, XU) {
      return tU.has(UU.toLowerCase()) ? aU(XU) : XU
    }

    function kU(UU) {
      return NU.test(UU) ? oU : aU(UU)
    }

    function GU(UU) {
      if (UU)
        for (const [XU, zU] of Object.entries(UU)) "string" === typeof zU && (UU[XU] = aU(zU))
    }

    function BU(UU) {
      var XU;
      Array.isArray(UU.payload) && (UU.payload = (XU = UU.payload).some((UU => "string" === typeof UU && NU.test(UU))) ? [JSON.stringify(oU)] : XU.map((UU => "string" === typeof UU ? aU(UU) : UU))), Array.isArray(UU.trace) && (UU.trace = UU.trace.map((UU => "string" === typeof UU ? aU(UU) : UU)))
    }

    function ZU(UU) {
      if (null === UU) return null;
      const XU = UU.properties.$snapshot_data;
      return GU(UU.properties), GU(UU.properties.$set), GU(UU.properties.$set_once), GU(UU.$set), GU(UU.$set_once),
        function(UU) {
          if (Array.isArray(UU))
            for (const XU of UU) {
              const UU = null === XU || void 0 === XU ? void 0 : XU.data;
              if (!UU || "object" !== typeof UU) continue;
              "string" === typeof UU.href && (UU.href = aU(UU.href));
              const zU = UU.payload;
              zU && "object" === typeof zU && (XU.type === cU.e.Plugin && "string" === typeof UU.plugin && UU.plugin.includes("console") ? BU(zU) : GU(zU))
            }
        }(XU), UU
    }
    const RU = new Set(["class", "id", "rel", "type", "role", "tabindex", "width", "height", "dir", "lang", "disabled", "hidden", "checked", "selected", "readonly", "draggable", "media", "charset", "crossorigin", "aria-hidden", "aria-expanded", "aria-selected", "aria-pressed", "aria-checked", "aria-disabled", "xmlns", "viewbox", "d", "fill", "stroke", "stroke-width", "transform", "x", "y", "cx", "cy", "r", "points", "x1", "y1", "x2", "y2", "rx", "ry", "opacity", "fill-rule", "clip-rule", "stroke-linecap", "stroke-linejoin", "preserveaspectratio", "xmlns:xlink", "colspan", "rowspan"]),
      PU = new Set(["_csstext", "rr_width", "rr_height", "rr_left", "rr_top", "rr_position", "rr_transform", "rr_display", "rr_scrollleft", "rr_scrolltop", "rr_mediastate", "rr_open_mode"]),
      WU = new Set(["data-pad-key", "data-pad-repeat"]),
      dU = new Set(["href", "src", "srcset", "xlink:href"]),
      LU = new Set(["title", "$title", "message", "detail", "game_display_name"]),
      eU = "img, picture, video";

    function CU(UU, XU, zU) {
      const cU = UU.toLowerCase();
      return "style" === cU ? XU.replace(/url\((?:"[^"]*"|'[^']*'|[^)]*)\)/gi, "none") : dU.has(cU) && "A" !== zU.tagName ? gU(UU, XU) : RU.has(cU) || PU.has(cU) || cU.startsWith("data-pad-") && !WU.has(cU) ? XU : XU.replace(/\S/g, "*")
    }

    function wU(UU) {
      if (!/^(https?:\/\/|\/)/i.test(UU)) return UU;
      let XU;
      try {
        XU = new URL(UU, "https://bloxd.invalid")
      } catch {
        return UU
      }
      const [zU = "", ...cU] = XU.pathname.split("/").slice(1), yU = `/${zU}${cU.some((UU=>""!==UU))?"/*":""}`;
      return UU.startsWith("/") ? yU : `${XU.origin}${yU}`
    }

    function qU(UU) {
      if (UU)
        for (const [XU, zU] of Object.entries(UU)) LU.has(XU) ? delete UU[XU] : "string" === typeof zU && (UU[XU] = wU(zU))
    }

    function OU(UU) {
      ! function(UU) {
        if (Array.isArray(UU))
          for (const XU of UU) {
            const UU = null === XU || void 0 === XU ? void 0 : XU.data;
            UU && "object" === typeof UU && ("string" === typeof UU.href && (UU.href = wU(UU.href)), UU.payload && "object" === typeof UU.payload && qU(UU.payload))
          }
      }(UU.properties.$snapshot_data), qU(UU.properties), "$screen" === UU.event && String(UU.properties.$screen_name).startsWith("custom: ") && (UU.properties.$screen_name = `custom: ${String(UU.properties.game_analytics_id)}`), qU(UU.properties.$set), qU(UU.properties.$set_once), qU(UU.$set), qU(UU.$set_once)
    }
    const SU = cU.l.map((UU => `.${UU}`)).join(", "),
      rU = ["iframe", "script", 'link:not([rel~="stylesheet"])', ".AdBannerContainer > [id]", "#GenericVideoInner", "ins.adsbygoogle", '[id^="google_ads_"]'],
      uU = [".PadKeyboardPreviewText", ".PadKeyboardPhraseRow"].join(", ");

    function fU(UU, XU) {
      return null !== XU && void 0 !== XU && XU.closest(SU) ? UU : UU.replace(/\S/g, "*")
    }

    function iU(UU) {
      const XU = function(UU) {
        return UU.anonymised ? {
          enable_recording_console_log: !1,
          session_recording: {
            blockSelector: [...rU, eU].join(", "),
            maskTextSelector: "*",
            maskTextFn: UU.showsChat ? fU : null,
            maskAttributeFn: CU
          }
        } : {
          enable_recording_console_log: !0,
          session_recording: {
            blockSelector: [...rU, (XU = UU.ownOrigins, `img[src^="http"]${XU.map((UU=>`:not([src^="${UU}/"])`)).join("")}`)].join(", "),
            maskTextSelector: UU.showsChat ? uU : `${uU}, ${SU}`,
            maskAttributeFn: gU
          }
        };
        var XU
      }(UU);
      return {
        api_host: UU.apiHost,
        persistence: "memory",
        bootstrap: {
          distinctID: UU.recordingId,
          isIdentifiedID: !1,
          sessionID: UU.recordingId
        },
        person_profiles: "always",
        mask_personal_data_properties: !0,
        custom_personal_data_properties: [...FU],
        session_idle_timeout_seconds: 36e3,
        disable_external_dependency_loading: !0,
        opt_out_useragent_filter: UU.allowAutomatedBrowsers,
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
        enable_recording_console_log: XU.enable_recording_console_log,
        before_send: XU => {
          const zU = ZU(XU);
          return null === zU || (UU.anonymised && OU(zU), "$snapshot" === zU.event ? function(UU, XU) {
            const {
              $snapshot_data: zU,
              $window_id: cU
            } = UU.properties;
            try {
              XU({
                windowId: cU,
                events: zU
              })
            } catch (yU) {
              console.error("Session replay couldn't take a page recording batch.", yU)
            }
          }(zU, UU.onDomBatch) : UU.onTimelineEvent(zU)), null
        },
        disable_session_recording: !UU.recordDom,
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
          ...XU.session_recording
        }
      }
    }

    function HU() {
      return window.__PosthogExtensions__
    }
    var MU = zU(654),
      vU = zU(142);

    function VU() {
      var UU;
      const XU = navigator,
        zU = new Date;
      return {
        local_hour: zU.getHours(),
        local_weekday: zU.getDay(),
        ...XU.hardwareConcurrency ? {
          cpu_cores: XU.hardwareConcurrency
        } : {},
        ...XU.deviceMemory ? {
          device_memory_gb: XU.deviceMemory
        } : {},
        ...null !== (UU = XU.connection) && void 0 !== UU && UU.effectiveType ? {
          network_type: XU.connection.effectiveType
        } : {}
      }
    }

    function sU(UU) {
      var XU;
      const zU = UU.tags;
      return {
        panel_entry_reason: null !== (XU = zU.recording_reason) && void 0 !== XU ? XU : "unknown",
        panel_entry_date: (new Date).toISOString().slice(0, 10),
        ...void 0 === zU.sample_rate ? {} : {
          panel_entry_sample_rate: zU.sample_rate
        }
      }
    }

    function nU(UU, XU) {
      return {
        recording_id: UU.recordingId,
        recording_scopes: UU.scopes.join(","),
        dom_recorded: XU
      }
    }

    function mU(UU, XU) {
      const zU = {};
      for (const [cU, yU] of Object.entries(XU)) zU[`${UU}${cU}`] = yU;
      return zU
    }
    class lU {
      constructor(UU) {
        this.options = UU, this.buckets = new Map, this.lastEvictionMs = -1 / 0
      }
      allow(UU, XU) {
        this.evictExpired(UU, XU);
        let zU = this.buckets.get(UU);
        var cU, yU;
        (void 0 === zU || XU - zU.startMs >= this.options.windowMs) && (zU = {
          startMs: XU,
          count: 0,
          suppressed: null !== (cU = null === (yU = zU) || void 0 === yU ? void 0 : yU.suppressed) && void 0 !== cU ? cU : 0
        }, this.buckets.set(UU, zU));
        if (zU.count >= this.options.maxPerWindow) return zU.suppressed++, null;
        zU.count++;
        const QU = zU.suppressed;
        return zU.suppressed = 0, QU
      }
      evictExpired(UU, XU) {
        if (!(XU - this.lastEvictionMs < this.options.windowMs)) {
          this.lastEvictionMs = XU;
          for (const [zU, cU] of this.buckets) {
            const yU = (XU - cU.startMs) / this.options.windowMs;
            zU !== UU && yU >= (0 === cU.suppressed ? 1 : 10) && this.buckets.delete(zU)
          }
        }
      }
    }

    function xU(UU, XU, zU) {
      const cU = new URL(UU);
      return cU.pathname = `${cU.pathname.replace(/\/+$/,"")}/replay/${encodeURIComponent(XU)}`, cU.searchParams.set("timestamp", String(Math.round(zU - 5e3))), cU.toString()
    }
    class JU {
      constructor(UU) {
        this.options = UU, this.throttle = new lU({
          maxPerWindow: 3,
          windowMs: 6e4
        })
      }
      annotate(UU, XU) {
        const zU = Date.now(),
          cU = this.throttle.allow("logged", zU);
        var yU;
        null !== cU && this.options.captureError(UU.message || UU.name, {
          error_name: UU.name || null,
          error_fingerprint: null !== (yU = XU.fingerprint) && void 0 !== yU ? yU : null,
          suppressed_since_last: cU
        });
        return {
          replay_recording_id: this.options.recordingId,
          ...this.options.domRecorded ? {
            replay_url: xU(this.options.dashboardHost, this.options.getSessionId(), zU)
          } : {}
        }
      }
    }

    function jU(UU) {
      return UU < 50 ? "<50" : UU < 100 ? "50-100" : UU < 200 ? "100-200" : UU < 400 ? "200-400" : "400+"
    }
    class KU {
      constructor() {
        this.gamesJoined = [], this.flags = new Set, this.firstGame = null, this.fpsTags = null, this.maxHitchMs = 0, this.pingSumMs = 0, this.pingSamples = 0, this.maxPingMs = 0, this.unboundKeyPresses = new Map
      }
      gameJoined(UU, XU) {
        this.gamesJoined.includes(UU) || this.gamesJoined.push(UU), null === this.firstGame && (this.firstGame = {
          joinedAtMs: XU,
          leftAtMs: null
        })
      }
      gameLeft(UU) {
        null !== this.firstGame && null === this.firstGame.leftAtMs && (this.firstGame.leftAtMs = UU)
      }
      setFlag(UU) {
        return !this.flags.has(UU) && (this.flags.add(UU), !0)
      }
      setFpsTags(UU) {
        this.fpsTags = UU
      }
      addHitch(UU) {
        return !(UU <= this.maxHitchMs) && (this.maxHitchMs = UU, !0)
      }
      addPingSample(UU) {
        const XU = this.pingTags();
        this.pingSumMs += UU, this.pingSamples++, this.maxPingMs = Math.max(this.maxPingMs, UU);
        const zU = this.pingTags();
        return (null === XU || void 0 === XU ? void 0 : XU.ping_avg_bucket) !== (null === zU || void 0 === zU ? void 0 : zU.ping_avg_bucket) || (null === XU || void 0 === XU ? void 0 : XU.ping_max_bucket) !== (null === zU || void 0 === zU ? void 0 : zU.ping_max_bucket)
      }
      addUnboundKeyPresses(UU) {
        for (const [zU, cU] of UU) {
          var XU;
          this.unboundKeyPresses.set(zU, (null !== (XU = this.unboundKeyPresses.get(zU)) && void 0 !== XU ? XU : 0) + cU)
        }
      }
      toProperties() {
        var UU;
        let XU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return {
          ...{
            first_game: null !== (UU = this.gamesJoined[0]) && void 0 !== UU ? UU : "",
            games_joined: this.gamesJoined.join(","),
            games_joined_count: this.gamesJoined.length,
            quick_quit: this.isQuickQuit(XU),
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
        let UU = 0,
          XU = "",
          zU = 0;
        for (const [cU, yU] of this.unboundKeyPresses) UU += yU, (yU > zU || yU === zU && cU < XU) && (XU = cU, zU = yU);
        return {
          unbound_key_presses: UU,
          top_unbound_key: XU
        }
      }
      pingTags() {
        return 0 === this.pingSamples ? null : {
          ping_avg_bucket: jU(this.pingSumMs / this.pingSamples),
          ping_max_bucket: jU(this.maxPingMs)
        }
      }
      isQuickQuit(UU) {
        var XU;
        if (null === this.firstGame) return !1;
        const zU = null !== (XU = this.firstGame.leftAtMs) && void 0 !== XU ? XU : UU;
        return null !== zU && zU - this.firstGame.joinedAtMs < cU.s
      }
    }
    var bU = zU(1236),
      TU = zU(1083),
      hU = zU(344),
      UX = zU(1086),
      XX = zU(1079),
      zX = zU(3036),
      cX = zU(27),
      yX = zU(2005),
      QX = zU(31),
      AX = zU(1360),
      FX = zU(1322),
      oX = zU(1550),
      DX = zU(2224),
      EX = zU(1680),
      YX = zU(40635),
      NX = zU(97),
      IX = zU(40626),
      pX = zU(1330);
    class aX {
      constructor(UU, XU, zU) {
        this.replay = UU, this.quitContext = XU, this.flows = zU, this.errorThrottle = new lU({
          maxPerWindow: 3,
          windowMs: 6e4
        }), this.hitchThrottle = new lU({
          maxPerWindow: 5,
          windowMs: 6e4
        }), this.attachedToRender = !1
      }
      start() {
        window.addEventListener("error", (UU => {
            const XU = UU.error;
            this.captureError("error", UU.message, UU.filename ? `${UU.filename}:${UU.lineno}:${UU.colno}` : null, XU instanceof Error ? XU.name : null, (0, IX.e)(UU))
          })), window.addEventListener("unhandledrejection", (UU => {
            const XU = UU.reason;
            this.captureError("unhandled_rejection", XU instanceof Error ? XU.message : String(XU), null, XU instanceof Error ? XU.name : null, (0, IX.e)(UU))
          })), QX.k.subscribe("unrecoverableError", (UU => {
            this.captureError("unrecoverable", UU, null, null, !0)
          })),
          function(UU) {
            var XU, zU;
            if ("undefined" === typeof PerformanceObserver || null === (XU = null === (zU = PerformanceObserver.supportedEntryTypes) || void 0 === zU ? void 0 : zU.includes("long-animation-frame")) || void 0 === XU || !XU) return;
            let cU = null;
            new PerformanceObserver((XU => {
              for (const QU of XU.getEntries()) {
                var zU, yU;
                const XU = QU,
                  AU = !(null !== cU && XU.startTime - cU.endMs < 50) || XU.duration >= 3 * (null !== (zU = null === (yU = cU) || void 0 === yU ? void 0 : yU.durationMs) && void 0 !== zU ? zU : 0);
                cU = {
                  endMs: XU.startTime + XU.duration,
                  durationMs: XU.duration
                }, !document.hidden && XU.duration >= 100 && AU && UU({
                  frameMs: XU.duration,
                  mainThreadMs: (0, pX.q)(XU)
                })
              }
            })).observe({
              type: "long-animation-frame"
            })
          }((UU => {
            this.onFrameHitch(UU)
          }))
      }
      attachToRender() {
        if (this.attachedToRender) return;
        const UU = (0, FX.B)().gameRender();
        null !== UU && (this.attachedToRender = !0, this.replay.setSessionProperties(Object.fromEntries([
          ["renderer", UU.renderer],
          ["gpu_vendor", (0, NX.getGpuVendor)()]
        ])), UU.canvas.addEventListener("webglcontextlost", (() => {
          this.replay.setFlag("had_error"), this.replay.capture("webgl_context_lost")
        })), UU.canvas.addEventListener("webglcontextrestored", (() => {
          this.replay.capture("webgl_context_restored")
        })))
      }
      captureError(UU, XU, zU, yU, QU) {
        const AU = kU(XU).slice(0, 300);
        QU && null !== this.flows.stay && this.quitContext.noteError(performance.now());
        const FU = this.errorThrottle.allow(`${UU}:${AU}`, Date.now());
        null !== FU && (this.replay.captureClientError(UU, AU, {
          source: zU,
          error_name: yU,
          suppressed_since_last: FU
        }), this.replay.addReplayMarker(cU.o.error, {
          kind: UU,
          message: AU
        }))
      }
      onFrameHitch(UU) {
        let {
          frameMs: XU,
          mainThreadMs: zU
        } = UU;
        const cU = this.flows.stay;
        if (null === cU || null === cU.playableAtMs || performance.now() - cU.playableAtMs < 2e3) return;
        (0, EX.p)() || this.quitContext.noteHitch(performance.now()), this.replay.addHitch(Math.round(XU));
        const yU = this.hitchThrottle.allow("frame_hitch", Date.now());
        null !== yU && this.replay.capture("frame_hitch", {
          BF: Math.round(XU),
          main_thread_ms: Math.round(zU),
          game_name_with_variation: cU.name,
          suppressed_since_last: yU
        })
      }
    }
    var tX = zU(7103),
      gX = zU(320);
    class kX {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.steps = UU, this.furthestIndex = -1, this.heldIndex = -1, this.gateIndex = void 0, this.gateIndex = null === XU ? 1 / 0 : UU.indexOf(XU)
      }
      reach(UU) {
        const XU = this.steps.indexOf(UU);
        if (XU > this.gateIndex && this.furthestIndex < this.gateIndex) return this.heldIndex = Math.max(this.heldIndex, XU), null;
        const zU = XU === this.gateIndex ? Math.max(XU, this.heldIndex) : XU;
        return zU <= this.furthestIndex ? null : (this.furthestIndex = zU, zU)
      }
      get furthest() {
        return -1 === this.furthestIndex ? null : this.steps[this.furthestIndex]
      }
      get furthestStepIndex() {
        return this.furthestIndex
      }
    }
    const GX = {
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
    class BX {
      constructor(UU) {
        this.threshold = UU, this.times = [], this.armed = !0, this.lastAtMs = -1 / 0
      }
      note(UU) {
        const {
          count: XU,
          windowMs: zU
        } = this.threshold;
        if (!this.armed && UU - this.lastAtMs >= zU && (this.armed = !0), this.lastAtMs = UU, !this.armed) return !1;
        for (this.times.push(UU); this.times.length > 0 && UU - this.times[0] >= zU;) this.times.shift();
        return !(this.times.length < XU) && (this.times.length = 0, this.armed = !1, !0)
      }
    }
    class ZX {
      constructor(UU) {
        this.onSignal = UU, this.bursts = new Map, this.seen = [], this.signalCount = 0, this.idleCounted = !1;
        for (const [XU, zU] of Object.entries(GX)) this.bursts.set(XU, new BX(zU))
      }
      note(UU, XU) {
        if (this.bursts.get(UU).note(XU)) {
          const {
            count: XU,
            windowMs: zU
          } = GX[UU];
          this.signal(UU, XU, zU)
        }
      }
      checkIdle(UU) {
        let {
          nowMs: XU,
          lastInputAtMs: zU,
          pointerLocked: cU,
          playable: yU,
          visible: QU
        } = UU;
        XU - (null !== zU && void 0 !== zU ? zU : 0) < 3e4 ? this.idleCounted = !1 : !this.idleCounted && cU && yU && QU && (this.idleCounted = !0, this.signal("idle_pointer_locked", 1, 3e4))
      }
      tags() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const XU = UU && !this.seen.includes("rage_quit") ? [...this.seen, "rage_quit"] : this.seen;
        return {
          frustration_score: this.signalCount + (UU ? 1 : 0),
          frustration_signals: XU.join(",")
        }
      }
      signal(UU, XU, zU) {
        this.signalCount++, this.seen.includes(UU) || this.seen.push(UU), this.onSignal(UU, XU, zU)
      }
    }
    const RX = tX.f.indexOf("first_input"),
      PX = tX.f.indexOf("first_move"),
      WX = {
        keyboardMouse: "keyboard",
        touch: "touch",
        gamepad: "pad"
      };
    class dX {
      constructor(UU, XU, zU) {
        this.replay = UU, this.quitContext = XU, this.deps = zU, this.ladder = new kX(tX.b, "first_move"), this.frustration = void 0, this.frustrationThrottle = new lU({
          maxPerWindow: 5,
          windowMs: 6e4
        }), this.activations = new Set, this.currentStay = null, this.moveSubscriptions = [], this.everPlayable = !1, this.everPointerLocked = !1, this.pointerUnlockedAtMs = -1 / 0, this.everythingMenu = null, this.lastGameName = null, this.unsentStepMarkers = [], this.frustration = new ZX(((UU, XU, zU) => {
          this.onFrustration(UU, XU, zU)
        })), XU.setFlowProperties((UU => this.quitProperties(UU)))
      }
      get stay() {
        return this.currentStay
      }
      start() {
        var UU;
        this.reachStep("page_loaded"), QX.k.subscribe("sessionReplayStayOpened", (UU => {
          this.resendStay(UU)
        })), QX.k.subscribe("pointerLockUpdate", (UU => {
          this.pointerLockChanged(UU)
        })), QX.k.subscribe("localBlockMined", (() => {
          this.blockBroken()
        })), QX.k.subscribe("blockChangeRefused", (() => {
          this.noteFrustration("block_change_refused")
        })), QX.k.subscribe("controlsTutorialShown", (UU => {
          this.controlsTutorialShown(UU)
        })), QX.k.subscribe("showShopTouchTutorial", (UU => {
          !1 !== UU && this.controlsTutorialShown("shop")
        })), QX.k.subscribe("appManagerUpdated|openInGameMenuName", (UU => {
          this.inGameMenuChanged(UU)
        })), QX.k.subscribe("appManagerUpdated|openEverythingMenuName", (UU => {
          this.everythingMenuChanged(UU)
        })), document.addEventListener("pointerlockerror", (() => {
          this.pointerLockFailed()
        })), null === (UU = (0, YX.c)()) || void 0 === UU || UU.onUnboundKey((() => {
          this.unboundKeyPressed()
        }))
      }
      gameLoading() {
        this.reachStep("game_loading")
      }
      gameJoined(UU, XU, zU) {
        const cU = zU && XU === this.lastGameName;
        this.lastGameName = XU, this.stopWatchingMoves();
        const yU = {
          name: XU,
          joinedAtMs: Date.now(),
          playableAtMs: null,
          visiblePlayedMs: 0,
          deaths: 0,
          ladder: new kX(tX.f, "first_move"),
          unboundKeyPresses: 0
        };
        return this.currentStay = yU, this.reachStayStep("joined"), UU >= 2 && !cU && this.reachStep("second_game"), yU
      }
      gamePlayable() {
        const UU = this.currentStay;
        null !== UU && (UU.playableAtMs = this.deps.now(), this.everPlayable = !0, this.reachStep("game_playable"), this.reachStayStep("game_playable"), this.deps.isPointerLocked() && this.pointerLocked(), this.watchMoves())
      }
      input() {
        const UU = this.currentStay;
        null === UU || null === UU.playableAtMs || UU.ladder.furthestStepIndex >= RX || (this.reachStep("first_input"), this.reachStayStep("first_input"))
      }
      played60s() {
        this.reachStep("played_60s"), this.reachStayStep("played_60s")
      }
      gameLeft() {
        this.stopWatchingMoves(), this.currentStay = null
      }
      LY() {
        var UU, XU, zU;
        this.sendStepMarkers(), this.frustration.checkIdle({
          nowMs: this.deps.now(),
          lastInputAtMs: Math.max(null !== (UU = this.quitContext.getLastInputAtMs()) && void 0 !== UU ? UU : 0, null !== (XU = null === (zU = this.currentStay) || void 0 === zU ? void 0 : zU.playableAtMs) && void 0 !== XU ? XU : 0),
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
          input: WX[this.deps.getInputDevice()]
        }), this.reachStep("first_move"), this.reachStayStep("first_move")
      }
      blockBroken() {
        this.isPlayable() && (this.activate("first_block_broken"), this.reachStep("first_block"), this.reachStayStep("first_block"))
      }
      inGameMenuChanged(UU) {
        null !== UU && this.menuOpened(UU, "inventory" === UU ? "first_inventory_open" : null)
      }
      everythingMenuChanged(UU) {
        const XU = null === this.everythingMenu;
        this.everythingMenu = UU, null !== UU && (this.menuOpened(UU, UU === gX.s.SETTINGS ? "first_settings_open" : null), UU === gX.s.SETTINGS && XU && null !== this.currentStay && this.noteFrustration("menu_toggling"))
      }
      pointerLockChanged(UU) {
        UU ? this.pointerLocked() : this.pointerUnlockedAtMs = this.deps.now()
      }
      controlsTutorialShown(UU) {
        const XU = `controls_tutorial_${UU}`;
        this.activations.has(XU) || (this.activations.add(XU), this.replay.capture("controls_tutorial_shown", {
          tutorial: UU,
          ...this.timing()
        }))
      }
      unboundKeyPressed() {
        this.noteFrustration("unbound_key_burst");
        const UU = this.currentStay;
        null !== UU && UU.unboundKeyPresses < tX.h && (UU.unboundKeyPresses++, this.deps.publishStayProgress({
          unboundKeyPresses: UU.unboundKeyPresses
        }))
      }
      noteFrustration(UU) {
        this.frustration.note(UU, this.deps.now())
      }
      quitProperties(UU) {
        return {
          ...this.ladderTags(),
          ...this.frustration.tags(UU),
          never_pointer_locked: this.everPlayable && !this.everPointerLocked && !this.deps.isTouchScreen() && "gamepad" !== this.deps.getInputDevice()
        }
      }
      isPlayable() {
        return null !== this.currentStay && null !== this.currentStay.playableAtMs
      }
      ladderTags() {
        var UU;
        return {
          furthest_step: null !== (UU = this.ladder.furthest) && void 0 !== UU ? UU : "",
          furthest_step_index: this.ladder.furthestStepIndex
        }
      }
      reachStep(UU) {
        null !== this.ladder.reach(UU) && (this.replay.setSessionProperties(this.ladderTags(), !1), this.unsentStepMarkers.push(tX.b.indexOf(UU)), this.sendStepMarkers())
      }
      sendStepMarkers() {
        for (; this.unsentStepMarkers.length > 0 && this.replay.addReplayMarker(cU.o.step, {
            step: this.unsentStepMarkers[0]
          }, !0);) this.unsentStepMarkers.shift()
      }
      resendStay(UU) {
        const XU = this.currentStay;
        var zU;
        null !== XU && XU.name === UU && this.deps.publishStayProgress({
          furthestStep: null !== (zU = XU.ladder.furthest) && void 0 !== zU ? zU : void 0,
          unboundKeyPresses: XU.unboundKeyPresses
        })
      }
      reachStayStep(UU) {
        var XU;
        const zU = null === (XU = this.currentStay) || void 0 === XU ? void 0 : XU.ladder;
        void 0 !== zU && null !== zU.reach(UU) && this.deps.publishStayProgress({
          furthestStep: zU.furthest
        })
      }
      menuOpened(UU, XU) {
        this.replay.capture("menu_opened", {
          menu: UU
        }), null !== XU && this.activate(XU)
      }
      activate(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.activations.has(UU) || (this.activations.add(UU), this.replay.capture(UU, {
          ...XU,
          ...this.timing()
        }))
      }
      timing() {
        var UU, XU;
        const zU = this.deps.now(),
          cU = null !== (UU = null === (XU = this.currentStay) || void 0 === XU ? void 0 : XU.playableAtMs) && void 0 !== UU ? UU : null;
        return {
          ms_since_page_load: Math.round(zU),
          ms_since_playable: null === cU ? null : Math.round(zU - cU)
        }
      }
      onFrustration(UU, XU, zU) {
        this.replay.setSessionProperties(this.frustration.tags(), !1), this.replay.addReplayMarker(cU.o.frustration, {
          signal: tX.d.indexOf(UU)
        });
        const yU = this.frustrationThrottle.allow(UU, Date.now());
        null !== yU && this.replay.capture("frustration_signal", {
          signal: UU,
          count: XU,
          window_ms: zU,
          suppressed_since_last: yU
        })
      }
      watchMoves() {
        var UU, XU;
        if (0 === this.moveSubscriptions.length && (null !== (UU = null === (XU = this.currentStay) || void 0 === XU ? void 0 : XU.ladder.furthestStepIndex) && void 0 !== UU ? UU : 1 / 0) < PX) {
          const UU = () => {
            this.moved()
          };
          this.moveSubscriptions = [QX.k.subscribe("usedKeyboard", UU), QX.k.subscribe("stickMoved", UU)]
        }
      }
      stopWatchingMoves() {
        for (const UU of this.moveSubscriptions) QX.k.unsubscribe(UU);
        this.moveSubscriptions = []
      }
    }
    const LX = ["quit_after_hitch", "quit_after_death", "quit_during_load", "quit_in_menu", "quit_idle", "quit_after_ad"],
      eX = ["quit_during_load", "quit_after_ad", "quit_after_death", "quit_after_hitch", "quit_idle", "quit_in_menu"];

    function CX(UU) {
      var XU;
      return null !== (XU = eX.find((XU => UU.includes(XU)))) && void 0 !== XU ? XU : "none"
    }

    function wX(UU, XU, zU) {
      return null !== UU && XU - UU < zU
    }
    class qX {
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
      setFlowProperties(UU) {
        this.flowProperties = UU
      }
      noteInput(UU) {
        this.history.lastInputAtMs = UU
      }
      noteHitch(UU) {
        this.history.lastHitchAtMs = UU
      }
      noteDeath(UU) {
        this.history.lastDeathAtMs = UU
      }
      noteError(UU) {
        this.history.lastErrorAtMs = UU
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
      noteAdFinished(UU) {
        this.history.adPlaying = !1, this.history.lastAdFinishedAtMs = UU
      }
      noteLoadStep(UU) {
        this.lastLoadStep = UU
      }
      getLastLoadStep() {
        return this.lastLoadStep
      }
      quit(UU) {
        const XU = function(UU, XU) {
            var zU, cU;
            const yU = [];
            return wX(XU.lastHitchAtMs, UU.nowMs, 15e3) && yU.push("quit_after_hitch"), wX(XU.lastDeathAtMs, UU.nowMs, 15e3) && yU.push("quit_after_death"), UU.loading ? yU.push("quit_during_load") : "page" !== UU.quitFrom || UU.inGame && !UU.menuOpen || yU.push("quit_in_menu"), wX(null !== (zU = XU.lastInputAtMs) && void 0 !== zU ? zU : 0, UU.nowMs, 6e4) || yU.push("quit_idle"), (!0 === XU.adPlaying || wX(null !== (cU = XU.lastAdFinishedAtMs) && void 0 !== cU ? cU : null, UU.nowMs, 3e4)) && yU.push("quit_after_ad"), yU
          }(UU, this.history),
          zU = function(UU, XU) {
            var zU;
            return wX(XU.lastDeathAtMs, UU, 1e4) || wX(null !== (zU = XU.lastErrorAtMs) && void 0 !== zU ? zU : null, UU, 1e4)
          }(UU.nowMs, this.history),
          cU = {
            quit_from: UU.quitFrom,
            in_game: UU.inGame,
            quit_reasons: XU.join(","),
            quit_reason: CX(XU),
            rage_quit: zU,
            ...this.flowProperties(zU)
          };
        var yU;
        XU.includes("quit_during_load") && (cU.last_load_step = null !== (yU = this.lastLoadStep) && void 0 !== yU ? yU : "none");
        null !== UU.gameName && (cU.game_name_with_variation = UU.gameName, cU.game_name = (0, hU.Tb)(UU.gameName));
        for (const QU of LX) cU[QU] = XU.includes(QU);
        return {
          reasons: XU,
          properties: cU
        }
      }
    }
    class OX {
      constructor(UU) {
        this.deps = UU, this.quitContext = new qX, this.loading = !1, this.inGame = !1, this.switching = !1, this.nextLeaveIsNotAQuit = !1, this.pendingQuit = null, this.exited = !1
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
      joinFailed(UU) {
        this.loading = !1, this.nextLeaveIsNotAQuit = this.inGame, this.deps.capture("join_failed", UU)
      }
      disconnected() {
        this.nextLeaveIsNotAQuit = !0
      }
      kickedForAfk(UU) {
        this.nextLeaveIsNotAQuit = !0, this.deps.capture("kicked_afk", {
          game_name_with_variation: UU
        })
      }
      gameLeft(UU) {
        const XU = this.nextLeaveIsNotAQuit || this.deps.isJoinAbandoned(),
          zU = this.switching,
          cU = this.loading;
        if (this.nextLeaveIsNotAQuit = !1, this.switching = !1, this.inGame = !1, null === UU) return;
        if (zU || (this.loading = !1), XU) return void this.quitContext.forgetGame();
        const yU = this.quitContext.quit({
          quitFrom: "game",
          gameName: UU,
          nowMs: this.deps.now(),
          inGame: !0,
          loading: cU,
          menuOpen: !1
        });
        this.quitContext.forgetGame(), zU ? this.captureSwitch(yU) : this.startPendingQuit(yU)
      }
      gameReplayOpened(UU) {
        this.nextLeaveIsNotAQuit = !0, this.gameLeft(UU), this.deps.capture("game_replay_opened", {
          from_game_name_with_variation: UU
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
      pageHidden(UU) {
        if (this.exited) return;
        this.exited = !0;
        const XU = this.pendingQuit;
        null !== XU && (clearTimeout(XU.timer), this.pendingQuit = null, this.deps.onGameQuit(XU.quit), this.deps.captureOnExit("quit_context", XU.quit.properties, XU.atEpochMs));
        const zU = {
            quitFrom: "page",
            gameName: null,
            nowMs: this.deps.now(),
            inGame: this.inGame,
            loading: this.loading,
            menuOpen: this.deps.isMenuOpen()
          },
          cU = this.quitContext.quit(zU);
        this.inGame && this.deps.onGameQuit(cU), this.deps.captureOnExit("quit_context", {
          ...UU,
          ...cU.properties
        })
      }
      pageRestored() {
        this.exited = !1, this.deps.capture("page_restored", {})
      }
      startPendingQuit(UU) {
        this.resolvePendingQuitAsSwitch();
        const XU = {
          quit: UU,
          atEpochMs: Date.now(),
          timer: setTimeout((() => {
            this.pendingQuit === XU && (this.pendingQuit = null, this.deps.onGameQuit(UU), this.deps.capture("quit_context", UU.properties, XU.atEpochMs))
          }), 1e4)
        };
        this.pendingQuit = XU
      }
      resolvePendingQuitAsSwitch() {
        const UU = this.pendingQuit;
        null !== UU && (clearTimeout(UU.timer), this.pendingQuit = null, "string" === typeof UU.quit.properties.game_name_with_variation && this.captureSwitch(UU.quit))
      }
      captureSwitch(UU) {
        this.deps.capture("game_switched", {
          from_game_name_with_variation: UU.properties.game_name_with_variation,
          from_game_name: UU.properties.game_name,
          after_death: UU.reasons.includes("quit_after_death"),
          after_hitch: UU.reasons.includes("quit_after_hitch")
        })
      }
    }
    var SX = zU(7108);
    class rX {
      constructor(UU) {
        this.replay = UU, this.pointerLockThrottle = new lU({
          maxPerWindow: 10,
          windowMs: 6e4
        }), this.counts = new Map, this.game = null, this.timer = null
      }
      start(UU) {
        UU.onUnboundKey((UU => {
          this.onUnboundKey(UU)
        })), UU.onPointerLock((UU => {
          const XU = this.pointerLockThrottle.allow("pointer_lock_changed", Date.now());
          null !== XU && this.replay.capture("pointer_lock_changed", {
            locked: UU,
            in_game: "inGame" === cX.e.get("gameState"),
            menu_open: (0, EX.p)(),
            suppressed_since_last: XU
          })
        })), QX.k.subscribe("leaveGame", (() => {
          this.flush(!1)
        })), document.addEventListener("visibilitychange", (() => {
          document.hidden && this.flush(!0)
        }))
      }
      onUnboundKey(UU) {
        var XU, zU;
        const cU = (0, AX.b)().gameNameWithVariation;
        cU !== this.game && (this.flush(!1), this.game = cU);
        const yU = null !== (XU = (0, SX.i)(UU)) && void 0 !== XU ? XU : UU;
        this.counts.set(yU, (null !== (zU = this.counts.get(yU)) && void 0 !== zU ? zU : 0) + 1), this.timer ??= setTimeout((() => {
          this.flush(!1)
        }), 1e4 - Date.now() % 1e4)
      }
      flush(UU) {
        if (null !== this.timer && (clearTimeout(this.timer), this.timer = null), 0 === this.counts.size) return;
        const XU = (zU = this.counts, [...zU].sort(((UU, XU) => XU[1] - UU[1] || (UU[0] < XU[0] ? -1 : 1))));
        var zU;
        let cU = 0;
        for (const [, QU] of XU) cU += QU;
        const yU = {
          key_counts: Object.fromEntries(XU),
          keys: XU.map((UU => {
            let [XU] = UU;
            return XU
          })).join(","),
          top_key: XU[0][0],
          presses: cU,
          game_name: null === this.game ? null : (0, hU.Tb)(this.game),
          game_name_with_variation: this.game
        };
        this.replay.addUnboundKeyPresses(this.counts), this.counts.clear(), UU ? this.replay.captureOnExit("unbound_keys", yU) : this.replay.capture("unbound_keys", yU)
      }
    }
    var uX = zU(173);

    function fX(UU) {
      var XU, zU;
      return null !== (XU = null === (zU = uX.m[UU]) || void 0 === zU ? void 0 : zU.toLowerCase()) && void 0 !== XU ? XU : String(UU)
    }
    class iX {
      constructor(UU, XU) {
        this.replay = UU, this.quitContext = XU, this.startedAtMs = null, this.steps = new Map, this.firstGamePlayable = !1
      }
      started() {
        this.startedAtMs = Date.now()
      }
      stepCompleted(UU) {
        if (this.steps.has(UU)) return;
        const XU = performance.now();
        this.steps.set(UU, XU);
        const zU = fX(UU);
        this.quitContext.noteLoadStep(zU), this.firstGamePlayable || this.replay.capture("game_load_step", {
          load_step: zU,
          step_number: UU,
          ms_since_page_load: Math.round(XU),
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
        let UU = null,
          XU = null;
        for (const [cU, yU] of [...this.steps].sort(((UU, XU) => UU[1] - XU[1]))) null !== XU && (null === UU || yU - XU > UU.ms) && (UU = {
          step: cU,
          ms: yU - XU
        }), XU = yU;
        const zU = null === this.startedAtMs ? null : Date.now() - this.startedAtMs;
        return this.firstGamePlayable = !0, this.ended(), {
          load_ms: zU,
          slowest_load_step: null === UU ? null : fX(UU.step),
          slowest_load_step_ms: null === UU ? null : Math.round(UU.ms)
        }
      }
      resetSteps() {
        this.steps.clear(), this.quitContext.noteLoadStep(null)
      }
    }
    const HX = ["keydown", "pointerdown", "touchstart"];
    class MX {
      constructor(UU) {
        this.replay = UU, this.firstInGameInputSent = !1
      }
      startFirstInputWatch() {
        setTimeout((() => {
          ! function(UU) {
            var XU;
            let zU = !1;
            const cU = (XU, cU, yU) => {
              zU || (zU = !0, UU(XU, cU, yU))
            };
            if ("undefined" !== typeof PerformanceObserver && null !== (XU = PerformanceObserver.supportedEntryTypes) && void 0 !== XU && XU.includes("first-input")) {
              const UU = new PerformanceObserver((XU => {
                const [zU] = XU.getEntries();
                UU.disconnect(), cU(zU.name, zU.startTime, !0)
              }));
              return void UU.observe({
                type: "first-input",
                buffered: !0
              })
            }
            const yU = new AbortController,
              QU = UU => {
                yU.abort(), cU(UU.type, UU.timeStamp, !1)
              };
            for (const AU of HX) window.addEventListener(AU, QU, {
              capture: !0,
              passive: !0,
              signal: yU.signal
            })
          }(((UU, XU, zU) => {
            this.replay.capture("first_input", Object.fromEntries([
              ["input_type", UU],
              ["ms_since_page_load", Math.round(XU)],
              ["buffered", zU]
            ]))
          }))
        }), 100)
      }
      onFirstInGameInput(UU, XU) {
        this.firstInGameInputSent = !0, this.replay.capture("first_ingame_input", Object.fromEntries([
          ["input_type", UU],
          ["ms_since_playable", Math.round(performance.now() - XU)],
          ["ms_since_page_load", Math.round(performance.now())]
        ]))
      }
      capturePageLoadTiming() {
        const UU = performance.getEntriesByType("navigation")[0],
          XU = performance.getEntriesByName("first-contentful-paint")[0];
        this.replay.capture("page_load_timing", {
          ttfb_ms: UU ? Math.round(UU.responseStart) : null,
          first_contentful_paint_ms: XU ? Math.round(XU.startTime) : null,
          dom_content_loaded_ms: UU ? Math.round(UU.domContentLoadedEventEnd) : null,
          load_ms: UU ? Math.round(UU.loadEventEnd) : null,
          transfer_kb: UU ? Math.round(UU.transferSize / 1024) : null,
          recording_started_ms: Math.round(performance.now())
        })
      }
    }
    class vX {
      constructor(UU, XU) {
        this.replay = UU, this.quitContext = XU, this.settings = cX.e.get("clientEscMenuOptions"), this.pendingSettings = {}, this.settingsTimer = null, this.adRequest = null, this.playingAd = null
      }
      start() {
        QX.k.subscribe("purchaseStarted", (UU => {
          let {
            product: XU
          } = UU;
          this.replay.setFlag("purchase_intent"), this.replay.capture("purchase_started", {
            product: XU
          })
        })), QX.k.subscribe("purchaseEnded", (UU => {
          let {
            outcome: XU
          } = UU;
          this.replay.capture("purchase_ended", {
            outcome: XU
          })
        })), QX.k.subscribe("adRequested", (UU => {
          let {
            adKind: XU,
            provider: zU
          } = UU;
          this.adRequest = {
            adKind: XU,
            provider: zU,
            atMs: performance.now()
          }
        })), QX.k.subscribe("appManagerUpdated|soundOnFromAd", (UU => {
          UU && null !== this.playingAd ? this.onAdFinished() : UU || null !== this.playingAd || this.onAdStarted()
        })), QX.k.subscribe("appManagerUpdated|clientEscMenuOptions", (UU => {
          cX.e.isApplyingDefaults ? this.settings = UU : this.onSettingsChanged(UU)
        }))
      }
      onAdStarted() {
        var UU, XU;
        const zU = performance.now(),
          cU = null !== this.adRequest && zU - this.adRequest.atMs < 6e4 ? this.adRequest : null;
        this.adRequest = null, this.playingAd = {
          ad_kind: null !== (UU = null === cU || void 0 === cU ? void 0 : cU.adKind) && void 0 !== UU ? UU : "unknown",
          provider: null !== (XU = null === cU || void 0 === cU ? void 0 : cU.provider) && void 0 !== XU ? XU : null,
          startedAtMs: zU
        }, this.replay.setFlag("ad_shown"), this.quitContext.noteAdStarted(), this.replay.capture("ad_started", this.adProperties(this.playingAd, zU))
      }
      onAdFinished() {
        const UU = performance.now(),
          XU = this.playingAd;
        this.playingAd = null, this.quitContext.noteAdFinished(UU), this.replay.capture("ad_finished", {
          ...this.adProperties(XU, UU),
          ad_ms: Math.round(UU - XU.startedAtMs)
        })
      }
      adProperties(UU, XU) {
        return {
          ad_kind: UU.ad_kind,
          provider: UU.provider,
          minutes_since_page_load: Math.floor(XU / 6e4),
          in_game: "inGame" === cX.e.get("gameState")
        }
      }
      onSettingsChanged(UU) {
        Object.assign(this.pendingSettings, function(UU, XU) {
          const zU = {};
          for (const cU of Object.keys(XU)) UU[cU] !== XU[cU] && (zU[cU] = XU[cU]);
          return zU
        }(this.settings, UU)), this.settings = UU, null !== this.settingsTimer && clearTimeout(this.settingsTimer), this.settingsTimer = setTimeout((() => {
          this.settingsTimer = null, Object.keys(this.pendingSettings).length > 0 && (this.replay.capture("settings_changed", {
            changed_settings: Object.keys(this.pendingSettings),
            values: this.pendingSettings
          }), this.pendingSettings = {})
        }), 2e3)
      }
    }

    function VX(UU) {
      switch ((0, bU.s)(UU)) {
        case TU.c.DISCORD_GUILD:
          return "discord_guild";
        case TU.c.DISCORD_DM:
          return "discord_dm";
        default:
          return (0, bU.G)(UU) ? "public" : "private"
      }
    }
    class sX {
      constructor(UU) {
        this.replay = UU, this.framesThisTick = 0, this.lastTickMs = performance.now(), this.ticks = 0, this.gamesJoined = 0, this.pageEvents = void 0, this.flows = void 0, this.health = void 0, this.leaves = void 0, this.joinLoad = void 0, this.unsubscribeDeaths = () => {}, this.inputSinceActiveMarker = !1, this.firstMinutePlayedSent = !1, this.pageEvents = new MX(UU), this.leaves = new OX({
          capture: (XU, zU, cU) => {
            void 0 === cU ? UU.capture(XU, zU) : UU.captureAt(XU, zU, cU)
          },
          captureOnExit: (XU, zU, cU) => {
            UU.captureOnExit(XU, zU, cU)
          },
          onGameQuit: UU => {
            let {
              reasons: XU,
              properties: zU
            } = UU;
            const cU = zU.game_name_with_variation;
            QX.k.UY("sessionReplayGameQuit", {
              reasons: XU,
              gameName: "string" === typeof cU ? cU : null
            })
          },
          isMenuOpen: EX.p,
          isJoinAbandoned: DX.g,
          now: () => performance.now()
        }), this.joinLoad = new iX(UU, this.leaves.quitContext), this.flows = function(UU, XU) {
          return new dX(UU, XU, {
            now: () => performance.now(),
            isTouchScreen: () => cX.e.get("isTouchScreen"),
            getInputDevice: () => cX.e.get("activeInputDevice"),
            isPointerLocked: () => null !== document.pointerLockElement,
            isPageVisible: () => !document.hidden,
            publishStayProgress: UU => {
              QX.k.UY("sessionReplayStayProgress", UU)
            }
          })
        }(UU, this.leaves.quitContext), this.health = new aX(UU, this.leaves.quitContext, this.flows)
      }
      start() {
        const UU = (0, YX.c)(),
          XU = new rX(this.replay);
        null !== UU && XU.start(UU), this.pageEvents.capturePageLoadTiming(), this.flows.start();
        const zU = cX.e.get("gameState");
        "inGame" === zU ? this.joinConnectedGame() : "loadingScreen" !== zU && "findingLobby" !== zU || this.leaves.joinStarted(), this.subscribeToGameFlow(), new vX(this.replay, this.leaves.quitContext).start(), this.health.start(), this.trackInput(), this.pageEvents.startFirstInputWatch(), (0, FX.t)((() => {
          this.framesThisTick++
        })), setInterval((() => {
          this.aG()
        }), 1e3), window.addEventListener("pagehide", (() => {
          XU.flush(!0), this.leaves.pageHidden(this.replay.finalTags())
        })), window.addEventListener("pageshow", (UU => {
          UU.persisted && this.leaves.pageRestored()
        }))
      }
      trackInput() {
        const UU = UU => {
          var XU, zU;
          this.inputSinceActiveMarker = !0, this.leaves.quitContext.noteInput(UU.timeStamp), this.flows.input();
          const cU = null !== (XU = null === (zU = this.flows.stay) || void 0 === zU ? void 0 : zU.playableAtMs) && void 0 !== XU ? XU : null;
          this.pageEvents.firstInGameInputSent || null === cU || this.pageEvents.onFirstInGameInput(UU.type, cU)
        };
        for (const XU of ["keydown", "pointerdown", "pointermove", "wheel"]) window.addEventListener(XU, UU, {
          capture: !0,
          passive: !0
        })
      }
      subscribeToGameFlow() {
        QX.k.subscribe("joinedGame", (UU => {
          let {
            gameNameWithVariation: XU,
            lobbyName: zU
          } = UU;
          (0, DX.g)() || this.onJoinedGame(XU, zU)
        })), QX.k.subscribe("leaveGame", (() => {
          var UU, XU;
          const zU = null !== (UU = null === (XU = this.flows.stay) || void 0 === XU ? void 0 : XU.name) && void 0 !== UU ? UU : null;
          this.onLeftGame(), this.leaves.gameLeft(zU)
        })), QX.k.subscribe("replayViewer|replayLoaded", (() => {
          const UU = this.flows.stay;
          null !== UU && (this.onLeftGame(), this.leaves.gameReplayOpened(UU.name))
        })), QX.k.subscribe("matchmakeAndPlayStepCompleted", (UU => {
          let {
            step: XU
          } = UU;
          this.joinLoad.stepCompleted(XU)
        })), QX.k.subscribe("leftPlayPage", (() => {
          this.leaves.playPageLeft(), this.joinLoad.ended()
        })), QX.k.subscribe("joinFailed", (UU => {
          let {
            step: XU,
            severity: zU
          } = UU;
          this.leaves.joinFailed({
            step: XU,
            severity: zU,
            game_name_with_variation: (0, AX.b)().requestedGameNameWithVariation,
            last_load_step: this.leaves.quitContext.getLastLoadStep()
          }), this.joinLoad.ended()
        })), QX.k.subscribe("kickedForAfk", (() => {
          var UU, XU;
          this.leaves.kickedForAfk(null !== (UU = null === (XU = this.flows.stay) || void 0 === XU ? void 0 : XU.name) && void 0 !== UU ? UU : null)
        })), QX.k.subscribe("unwantedLeftGame", (UU => {
          this.leaves.disconnected(), this.replay.setFlag("disconnected"), this.replay.capture("disconnected", {
            reason: UU.reason,
            can_reconnect: UU.canReconnect,
            automatically_reconnect: UU.automaticallyReconnect,
            requires_refresh: UU.requiresRefresh
          })
        })), QX.k.subscribe("appManagerUpdated|gameState", (UU => {
          "loadingScreen" === UU ? this.leaves.joinStarted() : "findingLobby" === UU ? (this.leaves.joinStarted(), this.joinLoad.started(), this.replay.capture("game_loading_started", {
            entry_source: cX.e.get("gameEntrySource")
          }), this.flows.gameLoading()) : "inGame" === UU ? this.onPlayable() : "landingPage" === UU && (this.replay.capture("homepage_viewed"), this.replay.capture("$screen", {
            $screen_name: "homepage"
          }))
        })), QX.k.subscribe("appManagerUpdated|gameEntrySource", (UU => {
          "autoReconnect" !== UU && "manualReconnect" !== UU || this.replay.capture("reconnect_attempted", {
            automatic: "autoReconnect" === UU
          })
        })), QX.k.subscribe("sessionReplayPlayerKill", (UU => {
          let {
            killstreak: XU
          } = UU;
          this.replay.capture("player_kill", {
            killstreak: XU
          })
        }))
      }
      onPlayable() {
        (0, DX.g)() || (0, AX.c)() || (null === this.flows.stay && this.joinConnectedGame(), this.replay.capture("game_playable", {
          ms_since_page_load: Math.round(performance.now()),
          ...this.joinLoad.playable()
        }), this.leaves.gamePlayable(), this.flows.gamePlayable())
      }
      joinConnectedGame() {
        if ((0, AX.c)()) return;
        const {
          gameNameWithVariation: UU,
          lobbyName: XU
        } = (0, AX.b)();
        null !== UU && null !== XU ? this.onJoinedGame(UU, XU) : console.warn("Session replay found a game playable with no game joined; not labelling it")
      }
      onJoinedGame(UU, XU) {
        this.replay.takeFullSnapshot();
        const zU = (0, bU.G)(XU),
          cU = cX.e.get("gameEntrySource");
        this.gamesJoined++, this.leaves.gameJoined(), this.flows.gameJoined(this.gamesJoined, UU, "autoReconnect" === cU || "manualReconnect" === cU), "inGame" === cX.e.get("gameState") && this.flows.gamePlayable();
        const yU = oX.clientSidePartyStateManager.getPartyInformation(),
          QU = {
            game_name: (0, hU.Tb)(UU),
            game_name_with_variation: UU,
            game_number: this.gamesJoined,
            game_analytics_id: (0, UX.f)(UU, zU),
            is_custom_game: (0, XX.l)(UU),
            lobby_type: VX(XU),
            in_party: null !== yU,
            party_size: null === yU ? 0 : yU.memberSocialPreviews.length + 1
          };
        this.replay.gameJoined(UU, QU), this.replay.capture("game_joined", {
          ...QU,
          entry_source: cU
        }), this.replay.capture("$screen", {
          $screen_name: QU.is_custom_game ? `custom: ${QU.game_analytics_id}` : QU.game_name
        }), this.subscribeToDeaths(UU)
      }
      onLeftGame() {
        this.joinLoad.forgetStart();
        const UU = this.flows.stay;
        null !== UU && (this.replay.capture("game_left", {
          game_name_with_variation: UU.name,
          duration_ms: Date.now() - UU.joinedAtMs
        }), this.flows.gameLeft(), this.replay.gameLeft(), this.unsubscribeDeaths(), this.unsubscribeDeaths = () => {})
      }
      subscribeToDeaths(UU) {
        this.unsubscribeDeaths();
        let XU = !0;
        this.unsubscribeDeaths = yX.gameBridge.subscribe("localPlayerAliveSet", (zU => {
          const yU = XU && !zU;
          if (XU = zU, yU) {
            this.leaves.quitContext.noteDeath(performance.now());
            const [XU, zU, yU] = yX.gameBridge.lookup("localPos", null), QU = {
              x: Math.round(XU),
              y: Math.round(zU),
              z: Math.round(yU)
            }, AU = this.flows.stay, FU = null === AU ? {} : {
              death_number: ++AU.deaths,
              seconds_since_join: Math.round((Date.now() - AU.joinedAtMs) / 1e3)
            };
            this.replay.capture("player_died", {
              ...QU,
              game_name_with_variation: UU,
              ...FU
            }), this.replay.addReplayMarker(cU.o.death, QU)
          }
        }))
      }
      aG() {
        this.health.attachToRender();
        const UU = performance.now(),
          XU = UU - this.lastTickMs,
          zU = XU <= 5e3,
          yU = this.flows.stay;
        if (null !== yU && null !== yU.playableAtMs && !document.hidden && zU && yU.visiblePlayedMs < 6e4 && (yU.visiblePlayedMs += XU, yU.visiblePlayedMs >= 6e4)) {
          const XU = Math.round(UU);
          this.replay.capture("game_played_60s", {
            game_name_with_variation: yU.name,
            ms_since_page_load: XU,
            ...this.firstMinutePlayedSent ? {} : {
              ttff_ms: XU
            }
          }), this.firstMinutePlayedSent = !0, this.flows.played60s()
        }
        this.flows.LY();
        const QU = null !== this.flows.stay && !document.hidden;
        this.replay.addFpsSample(QU && zU && this.framesThisTick > 0 ? 1e3 * this.framesThisTick / XU : null);
        const AU = QU ? zX.d.getLastColyseusPingMs() : null;
        null !== AU && this.replay.addPingSample(AU), this.framesThisTick = 0, this.lastTickMs = UU, this.ticks++, this.ticks % 2 === 0 && (QU && this.inputSinceActiveMarker && this.replay.addReplayMarker(cU.o.active), this.inputSinceActiveMarker = !1), this.replay.markClockIfDue(this.ticks, 30)
      }
    }
    var nX = zU(1220),
      mX = zU(1203),
      lX = zU(40578);

    function xX(UU) {
      return UU.length + 64
    }
    async function JX() {
      return new Response("{}")
    }

    function jX(UU, XU, zU) {
      return lX.d.fetch(UU, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain"
        },
        body: XU,
        signal: (0, nX.n)(3e4)
      }, zU)
    }
    class KX {
      constructor(UU) {
        var XU, zU, cU;
        let yU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.uploadToken = UU, this.url = void 0, this.post = void 0, this.isHidden = void 0, this.queue = [], this.retries = [], this.refusedTokens = new Set, this.overflowWarned = !1, this.unloading = !1, this.sendScheduled = !1, this.url = null !== (XU = yU.url) && void 0 !== XU ? XU : `${mX.clientSideServerUrls.indexUrl}/index/replay/timeline`, this.post = null !== (zU = yU.post) && void 0 !== zU ? zU : jX, this.isHidden = null !== (cU = yU.isHidden) && void 0 !== cU ? cU : () => "hidden" === document.visibilityState
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
      add(UU) {
        if (this.refusedTokens.has(this.uploadToken)) return;
        const XU = function(UU) {
            const XU = {
              ...UU.properties
            };
            return void 0 !== UU.$set && (XU.$set = {
              ...UU.properties.$set,
              ...UU.$set
            }), void 0 !== UU.$set_once && (XU.$set_once = {
              ...UU.$set_once,
              ...UU.properties.$set_once
            }), void 0 !== UU.$unset && (XU.$unset = UU.$unset), {
              uuid: UU.uuid,
              event: UU.event,
              timestampMs: UU.timestamp.getTime(),
              properties: JSON.stringify(XU)
            }
          }(UU),
          zU = (0, lX.e)(JSON.stringify(XU));
        XU.properties.length > 32768 || XU.event.length > 64 || xX(this.uploadToken) + zU > 102400 ? console.warn(`Session replay timeline event ${XU.event.slice(0,64)} is too large for index-server; dropped.`) : (this.queue.push({
          uploadToken: this.uploadToken,
          event: XU,
          bytes: zU,
          attempts: 0
        }), this.trimToCap(), this.queue.length >= 50 ? this.sendQueued() : (this.unloading || this.isHidden()) && this.sendSoon())
      }
      sendSoon() {
        this.sendScheduled || (this.sendScheduled = !0, queueMicrotask((() => {
          this.sendScheduled = !1, this.sendQueued()
        })))
      }
      flush() {
        this.retries.length > 0 && (this.queue = [...this.retries, ...this.queue].sort(((UU, XU) => UU.event.timestampMs - XU.event.timestampMs)), this.retries = []), this.sendQueued()
      }
      sendQueued() {
        for (; this.queue.length > 0;) {
          const UU = this.takeBatch();
          this.refusedTokens.has(UU.uploadToken) || this.send(UU)
        }
      }
      trimToCap() {
        let UU = this.retries.length + this.queue.length - 1e3;
        if (UU <= 0) return void(this.overflowWarned = !1);
        const XU = Math.min(UU, this.retries.length);
        this.retries.splice(0, XU), UU -= XU, this.queue.splice(0, UU), this.overflowWarned || (this.overflowWarned = !0, console.warn("Session replay timeline queue is full; dropping its oldest events until it drains."))
      }
      takeBatch() {
        const UU = this.queue.shift(),
          XU = [UU];
        let zU = xX(UU.uploadToken) + UU.bytes;
        for (; this.queue.length > 0 && XU.length < 100 && this.queue[0].uploadToken === UU.uploadToken && zU + this.queue[0].bytes <= 32768;) {
          const UU = this.queue.shift();
          XU.push(UU), zU += UU.bytes
        }
        return {
          uploadToken: UU.uploadToken,
          events: XU
        }
      }
      async send(UU) {
        const XU = await this.sendOnce(UU);
        if ("refused" === XU && this.refusedTokens.add(UU.uploadToken), "retryLater" !== XU) return;
        const zU = UU.events.filter((UU => ++UU.attempts < 3));
        zU.length < UU.events.length && console.error(`Session replay timeline: dropped ${UU.events.length-zU.length} events after 3 attempts.`), this.retries.push(...zU), this.trimToCap()
      }
      async sendOnce(UU) {
        const XU = {
            uploadToken: UU.uploadToken,
            sentAtMs: Date.now(),
            events: UU.events.map((UU => UU.event))
          },
          zU = JSON.stringify(XU);
        let cU, yU = null;
        try {
          cU = await this.post(this.url, zU, (0, lX.e)(zU)), cU.ok && (yU = await cU.json())
        } catch (QU) {
          return console.warn("Session replay timeline upload failed.", QU), "retryLater"
        }
        return null === yU ? 408 === cU.status || 429 === cU.status || cU.status >= 500 ? "retryLater" : (console.error(`Session replay timeline upload failed with ${cU.status}; dropped ${UU.events.length} events.`), "dropped") : "rejected" in yU ? yU.retryable ? "retryLater" : (console.warn(`Session replay timeline refused: ${yU.reason}; dropping this recording's events.`), "refused") : "sent"
      }
    }
    var bX = zU(40603),
      TX = zU(5123),
      hX = zU(1325);
    class Uz {
      constructor(UU) {
        var XU;
        this.tags = new KU, this.fpsMonitor = void 0, this.errorLogLink = void 0, this.lastTagsJson = "", this.clockMarked = !1, this.personUpdateTimer = null, this.expectedSessionId = "", this.recorderPatched = !1, this.gameContextKeys = [], this.firstGameJoined = !1, this.timeline = void 0, this.onDomBatch = void 0;
        const {
          recording: zU
        } = UU;
        this.onDomBatch = UU.onDomBatch;
        const AU = null !== UU.onDomBatch;
        AU && this.patchRecorder(), this.timeline = new KX(zU.uploadToken, UU.dryRun ? {
            post: JX
          } : {}), this.timeline.start(),
          function(UU) {
            const XU = {
                supportedCompression: [yU.b.GZipJS],
                hasFeatureFlags: !1,
                sessionRecording: {
                  endpoint: "/s/"
                },
                siteApps: [],
                toolbarParams: {},
                toolbarVersion: "toolbar",
                isAuthenticated: !1
              },
              zU = window;
            zU._POSTHOG_REMOTE_CONFIG = {
              ...zU._POSTHOG_REMOTE_CONFIG,
              [UU]: {
                config: XU
              }
            }
          }(UU.posthog.projectApiKey), yU.e.init(UU.posthog.projectApiKey, iU({
            apiHost: UU.posthog.apiHost,
            recordingId: zU.recordingId,
            recordDom: AU,
            ownOrigins: [window.location.origin, new URL(mX.clientSideServerUrls.s3Url, window.location.href).origin],
            anonymised: zU.anonymised,
            showsChat: (0, cU.B)(zU),
            allowAutomatedBrowsers: (0, TX.d)((0, TX.g)(), !1),
            onTimelineEvent: UU => {
              this.timeline.add(UU), "$pageview" === UU.event && UU.properties.$current_url && this.addReplayMarker("$pageview", {
                href: UU.properties.$current_url
              })
            },
            onDomBatch: UU => {
              this.takeDomBatch(UU)
            }
          })), AU && yU.e.startSessionRecording({
            sampling: !0
          }), this.expectedSessionId = zU.recordingId, yU.e.onSessionId((UU => {
            UU !== this.expectedSessionId && console.warn(`Session replay: PostHog session ${UU} differs from recording ${this.expectedSessionId}; events carry recording_id.`)
          })),
          function(UU, XU) {
            const {
              recording: zU
            } = UU, cU = {
              ...zU.tags,
              site_used: vU.siteUsed,
              subsite_used: null !== vU.subsiteUsed && void 0 !== vU.subsiteUsed ? vU.subsiteUsed : "",
              is_iframed: vU.isIframed,
              entry_path: location.pathname,
              ...VU(),
              ...nU(zU, XU),
              client_build: MU.d
            };
            yU.e.register(cU), null !== UU.videoStatus && yU.e.register({
              replay_video_status: UU.videoStatus
            }), yU.e.setPersonProperties(cU, {
              ...mU("initial_", cU),
              ...sU(zU)
            })
          }(UU, AU), this.fpsMonitor = new QU.c({
            onEpisodeStarted: UU => {
              this.capture("low_fps_started", {
                avg_fps: Math.round(UU)
              }), QX.k.UY("sessionReplayLowFps", {
                low: !0
              })
            },
            onEpisodeEnded: UU => {
              this.capture("low_fps_episode", {
                duration_ms: UU.durationMs,
                min_fps: UU.minFps,
                avg_fps: UU.avgFps
              }), QX.k.UY("sessionReplayLowFps", {
                low: !1
              })
            }
          }), this.errorLogLink = new JU({
            dashboardHost: null !== (XU = UU.posthog.dashboardHost) && void 0 !== XU ? XU : UU.posthog.apiHost,
            recordingId: zU.recordingId,
            getSessionId: () => yU.e.get_session_id(),
            domRecorded: AU,
            captureError: (UU, XU) => {
              this.captureClientError("logged", UU, XU)
            }
          }), (0, hX.annotateLoggedErrors)(((UU, XU) => this.errorLogLink.annotate(UU, XU))), new sX(this).start()
      }
      capture(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        yU.e.capture(UU, XU)
      }
      captureAt(UU, XU, zU) {
        yU.e.capture(UU, XU, {
          timestamp: new Date(zU)
        })
      }
      captureOnExit(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        yU.e.capture(UU, XU, {
          timestamp: new Date(zU)
        })
      }
      captureClientError(UU, XU, zU) {
        this.setFlag("had_error"), this.capture("client_error", {
          kind: UU,
          message: kU(XU).slice(0, 300),
          source: null,
          error_name: null,
          ...zU
        })
      }
      takeFullSnapshot() {
        if (this.tryFullSnapshot()) return;
        const UU = performance.now() + 1500,
          XU = setInterval((() => {
            (this.tryFullSnapshot() || performance.now() >= UU) && clearInterval(XU)
          }), 100)
      }
      setVideoStatus(UU, XU) {
        yU.e.register({
          replay_video_status: UU
        });
        const zU = "stopped_cellular" === UU ? "cellular" : "stopped_error" === UU ? "error" : null;
        null !== zU && (this.capture("replay_video_stopped", {
          reason: zU,
          detail: null === XU ? null : kU(XU).slice(0, 300)
        }), this.addReplayMarker("replay_video_stopped", {
          reason: zU
        }))
      }
      stopDomRecording() {
        yU.e.stopSessionRecording(), yU.e.register({
          dom_recorded: !1
        })
      }
      optOut() {
        this.stopDomRecording(), yU.e.set_config({
          before_send: () => null
        })
      }
      takeDomBatch(UU) {
        null !== this.onDomBatch ? this.onDomBatch(UU) : console.warn("Session replay: posthog-js recorded the page of an events-only recording; dropped it")
      }
      tryFullSnapshot() {
        var UU;
        return !(null === (UU = yU.e.sessionRecording) || void 0 === UU || !UU.started) && (HU().rrweb.record.takeFullSnapshot(), !0)
      }
      patchRecorder() {
        this.recorderPatched || (this.recorderPatched = !0, function() {
          const UU = HU().rrwebPlugins,
            XU = UU.getRecordConsolePlugin;
          UU.getRecordConsolePlugin = () => XU({
            level: ["warn", "error", "assert"]
          })
        }(), this.markClockOnFullSnapshots())
      }
      markClockOnFullSnapshots() {
        const UU = HU().rrweb.record,
          XU = UU.takeFullSnapshot;
        UU.takeFullSnapshot = UU => {
          XU(UU), this.markClock()
        }
      }
      markClock() {
        this.clockMarked = this.addReplayMarker(cU.o.clock, {
          epochMs: (0, bX.d)(),
          perfNowMs: performance.now()
        }) || this.clockMarked
      }
      markClockIfDue(UU, XU) {
        this.clockMarked && UU % XU !== 0 || this.markClock()
      }
      addReplayMarker(UU) {
        var XU, zU;
        let cU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (!(arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) || yU.e.sessionRecordingStarted()) && null !== (XU = null === (zU = yU.e.sessionRecording) || void 0 === zU ? void 0 : zU.tryAddCustomEvent(UU, cU)) && void 0 !== XU && XU
      }
      gameJoined(UU, XU) {
        this.unregisterGameContext(), this.gameContextKeys = Object.keys(XU), yU.e.register(XU), this.firstGameJoined || (this.firstGameJoined = !0, yU.e.setPersonProperties(void 0, {
          first_game_ever: XU.game_name,
          first_game_ever_with_variation: XU.game_name_with_variation,
          first_game_ever_analytics_id: XU.game_analytics_id
        })), this.tags.gameJoined(UU, Date.now()), this.updateTags()
      }
      gameLeft() {
        this.unregisterGameContext(), this.tags.gameLeft(Date.now()), this.fpsMonitor.endEpisode(Date.now()), this.updateTags()
      }
      setFlag(UU) {
        this.tags.setFlag(UU) && this.updateTags()
      }
      addHitch(UU) {
        this.tags.addHitch(UU) && this.updateTags()
      }
      setSessionProperties(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        yU.e.register(UU), XU && yU.e.setPersonProperties(UU)
      }
      addPingSample(UU) {
        this.tags.addPingSample(UU) && this.updateTags()
      }
      addFpsSample(UU) {
        this.fpsMonitor.addSample(UU, Date.now());
        const XU = this.fpsMonitor.getTags();
        null !== XU && (this.tags.setFpsTags(XU), this.updateTags())
      }
      addUnboundKeyPresses(UU) {
        this.tags.addUnboundKeyPresses(UU), this.updateTags()
      }
      finalTags() {
        return this.fpsMonitor.endEpisode(Date.now()), this.tags.toProperties(Date.now())
      }
      updateTags() {
        const UU = this.tags.toProperties(),
          XU = JSON.stringify(UU);
        XU !== this.lastTagsJson && (this.lastTagsJson = XU, yU.e.register(UU), null === this.personUpdateTimer && (this.personUpdateTimer = setTimeout((() => {
          this.personUpdateTimer = null, yU.e.setPersonProperties(this.tags.toProperties())
        }), 0)))
      }
      unregisterGameContext() {
        for (const UU of this.gameContextKeys) yU.e.unregister(UU);
        this.gameContextKeys = []
      }
    }
  },
  40603: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => QU
    });
    const cU = 20;
    let yU = Date.now() - performance.now();

    function QU() {
      const UU = performance.now(),
        XU = Date.now();
      return Math.abs(XU - (UU + yU)) > cU && (yU = XU - UU), UU + yU
    }
  },
  40578: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU,
      d: () => QU,
      e: () => yU
    });
    const cU = 32768;

    function yU(UU) {
      return (new TextEncoder).encode(UU).byteLength
    }
    const QU = new class {
      constructor() {
        this.inFlightBytes = 0, this.inFlightLabels = new Map
      }
      async fetch(UU, XU, zU, cU) {
        if (this.inFlightBytes + zU > 49152) return await fetch(UU, XU);
        this.inFlightBytes += zU, this.countLabel(cU, 1);
        const yU = () => {
          this.inFlightBytes -= zU, this.countLabel(cU, -1)
        };
        let QU;
        try {
          QU = await fetch(UU, {
            ...XU,
            keepalive: !0
          })
        } catch (FU) {
          var AU;
          if (yU(), null !== (AU = XU.signal) && void 0 !== AU && AU.aborted) throw FU;
          return console.info("Session replay keepalive request failed; retrying without keepalive.", FU), await fetch(UU, XU)
        }
        return yU(), QU
      }
      isInFlight(UU) {
        var XU;
        return (null !== (XU = this.inFlightLabels.get(UU)) && void 0 !== XU ? XU : 0) > 0
      }
      sendBeacon(UU, XU) {
        const zU = yU(XU);
        return !(this.inFlightBytes + zU > 57344) && this.beaconSent(navigator.sendBeacon(UU, new Blob([XU], {
          type: "text/plain"
        })), zU)
      }
      sendUploadBeacon(UU, XU, zU) {
        return !(this.inFlightBytes + zU > 40960) && this.beaconSent(navigator.sendBeacon(UU, XU), zU)
      }
      countLabel(UU, XU) {
        var zU;
        void 0 !== UU && this.inFlightLabels.set(UU, (null !== (zU = this.inFlightLabels.get(UU)) && void 0 !== zU ? zU : 0) + XU)
      }
      beaconSent(UU, XU) {
        return UU && (this.inFlightBytes += XU, setTimeout((() => {
          this.inFlightBytes -= XU
        }), 1e4)), UU
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);