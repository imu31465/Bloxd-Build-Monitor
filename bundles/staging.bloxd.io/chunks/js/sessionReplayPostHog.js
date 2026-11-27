export const id = 61;
export const ids = [61];
export const modules = {
  40649: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      ReplayPostHog: () => HH
    });
    var ye = He(3748),
      be = He(40653),
      Me = He(40638);
    const Ke = new Set(["partycode", "lobby", "vm", "invite", "invitecode", "code", "token", "access_token", "id_token", "refresh_token", "auth", "key", "state", "ticket", "jointicket", "secret", "password", "sig", "signature"]),
      Ue = new Set(["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "bfcid", "irclid", "_kx", "_gl", "yclid", "srsltid", "mc_eid", "s_kwcid", "ef_id", "_hsenc", "mkt_tok"]),
      Fe = "redacted",
      Je = /([?&#])([^=&#?\s"']+)=([^&#?\s"'<>\\]*)/g,
      oe = /(\/play\/[^/?#\s"'<>\\]+\/)[^/?#\s"'<>\\]+/gi,
      Re = /\/play\//i,
      ke = /lobby|party/i;

    function qe(ee) {
      try {
        return decodeURIComponent(ee)
      } catch {
        return null
      }
    }

    function fe(ee) {
      const ie = ee.includes("%") ? qe(ee) : null;
      if (null === ie || ie === ee) return ee;
      let He = Te(`?${ie}`).slice(1);
      return He === ie && (He = fe(ie)), He === ie ? ee : encodeURIComponent(He)
    }

    function Te(ee) {
      return ee.includes("=") || Re.test(ee) ? ee.replace(Je, ((ee, ie, He, ye) => {
        var be;
        const Me = (null !== (be = qe(He)) && void 0 !== be ? be : He).toLowerCase();
        if (Ke.has(Me)) return `${ie}${He}=${Fe}`;
        if (Ue.has(Me) && "" !== ye) return `${ie}${He}=<masked>`;
        const Je = fe(ye);
        return Je === ye ? ee : `${ie}${He}=${Je}`
      })).replace(oe, `$1${Fe}`) : ee
    }
    const pe = new Set(["href", "src", "srcset", "action", "formaction", "poster", "xlink:href"]);

    function Xe(ee, ie) {
      return pe.has(ee.toLowerCase()) ? Te(ie) : ie
    }

    function ze(ee) {
      return ke.test(ee) ? Fe : Te(ee)
    }

    function Be(ee) {
      if (ee)
        for (const [ie, He] of Object.entries(ee)) "string" === typeof He && (ee[ie] = Te(He))
    }

    function Ee(ee) {
      var ie;
      Array.isArray(ee.payload) && (ee.payload = (ie = ee.payload).some((ee => "string" === typeof ee && ke.test(ee))) ? [JSON.stringify(Fe)] : ie.map((ee => "string" === typeof ee ? Te(ee) : ee))), Array.isArray(ee.trace) && (ee.trace = ee.trace.map((ee => "string" === typeof ee ? Te(ee) : ee)))
    }

    function ge(ee) {
      if (null === ee) return null;
      const ie = ee.properties.$snapshot_data;
      return Be(ee.properties), Be(ee.properties.$set), Be(ee.properties.$set_once), Be(ee.$set), Be(ee.$set_once),
        function(ee) {
          if (Array.isArray(ee))
            for (const ie of ee) {
              const ee = null === ie || void 0 === ie ? void 0 : ie.data;
              if (!ee || "object" !== typeof ee) continue;
              "string" === typeof ee.href && (ee.href = Te(ee.href));
              const He = ee.payload;
              He && "object" === typeof He && (ie.type === ye.b.Plugin && "string" === typeof ee.plugin && ee.plugin.includes("console") ? Ee(He) : Be(He))
            }
        }(ie), ee
    }
    const Oe = new Set(["class", "id", "rel", "type", "role", "tabindex", "width", "height", "dir", "lang", "disabled", "hidden", "checked", "selected", "readonly", "draggable", "media", "charset", "crossorigin", "aria-hidden", "aria-expanded", "aria-selected", "aria-pressed", "aria-checked", "aria-disabled", "xmlns", "viewbox", "d", "fill", "stroke", "stroke-width", "transform", "x", "y", "cx", "cy", "r", "points", "x1", "y1", "x2", "y2", "rx", "ry", "opacity", "fill-rule", "clip-rule", "stroke-linecap", "stroke-linejoin", "preserveaspectratio", "xmlns:xlink", "colspan", "rowspan"]),
      de = new Set(["_csstext", "rr_width", "rr_height", "rr_left", "rr_top", "rr_position", "rr_transform", "rr_display", "rr_scrollleft", "rr_scrolltop", "rr_mediastate", "rr_open_mode"]),
      We = new Set(["data-pad-key", "data-pad-repeat"]),
      te = new Set(["href", "src", "srcset", "xlink:href"]),
      Ze = new Set(["title", "$title", "message", "detail", "game_display_name"]),
      we = "img, picture, video";

    function De(ee, ie, He) {
      const ye = ee.toLowerCase();
      return "style" === ye ? ie.replace(/url\((?:"[^"]*"|'[^']*'|[^)]*)\)/gi, "none") : te.has(ye) && "A" !== He.tagName ? Xe(ee, ie) : Oe.has(ye) || de.has(ye) || ye.startsWith("data-pad-") && !We.has(ye) ? ie : ie.replace(/\S/g, "*")
    }

    function Pe(ee) {
      if (!/^(https?:\/\/|\/)/i.test(ee)) return ee;
      let ie;
      try {
        ie = new URL(ee, "https://bloxd.invalid")
      } catch {
        return ee
      }
      const [He = "", ...ye] = ie.pathname.split("/").slice(1), be = `/${He}${ye.some((ee=>""!==ee))?"/*":""}`;
      return ee.startsWith("/") ? be : `${ie.origin}${be}`
    }

    function Ae(ee) {
      if (ee)
        for (const [ie, He] of Object.entries(ee)) Ze.has(ie) ? delete ee[ie] : "string" === typeof He && (ee[ie] = Pe(He))
    }

    function Ye(ee) {
      ! function(ee) {
        if (Array.isArray(ee))
          for (const ie of ee) {
            const ee = null === ie || void 0 === ie ? void 0 : ie.data;
            ee && "object" === typeof ee && ("string" === typeof ee.href && (ee.href = Pe(ee.href)), ee.payload && "object" === typeof ee.payload && Ae(ee.payload))
          }
      }(ee.properties.$snapshot_data), Ae(ee.properties), "$screen" === ee.event && String(ee.properties.$screen_name).startsWith("custom: ") && (ee.properties.$screen_name = `custom: ${String(ee.properties.game_analytics_id)}`), Ae(ee.properties.$set), Ae(ee.properties.$set_once), Ae(ee.$set), Ae(ee.$set_once)
    }
    const Ve = ye.d.map((ee => `.${ee}`)).join(", "),
      ae = ["iframe", "script", 'link:not([rel~="stylesheet"])', ".AdBannerContainer > [id]", "#GenericVideoInner", "ins.adsbygoogle", '[id^="google_ads_"]'],
      ce = [".PadKeyboardPreviewText", ".PadKeyboardPhraseRow"].join(", ");

    function xe(ee, ie) {
      return null !== ie && void 0 !== ie && ie.closest(Ve) ? ee : ee.replace(/\S/g, "*")
    }

    function Le(ee) {
      const ie = function(ee) {
        return ee.anonymised ? {
          enable_recording_console_log: !1,
          session_recording: {
            blockSelector: [...ae, we].join(", "),
            maskTextSelector: "*",
            maskTextFn: ee.showsChat ? xe : null,
            maskAttributeFn: De
          }
        } : {
          enable_recording_console_log: !0,
          session_recording: {
            blockSelector: [...ae, (ie = ee.ownOrigins, `img[src^="http"]${ie.map((ee=>`:not([src^="${ee}/"])`)).join("")}`)].join(", "),
            maskTextSelector: ee.showsChat ? ce : `${ce}, ${Ve}`,
            maskAttributeFn: Xe
          }
        };
        var ie
      }(ee);
      return {
        api_host: ee.apiHost,
        persistence: "memory",
        bootstrap: {
          distinctID: ee.recordingId,
          isIdentifiedID: !1,
          sessionID: ee.recordingId
        },
        person_profiles: "always",
        mask_personal_data_properties: !0,
        custom_personal_data_properties: [...Ue],
        session_idle_timeout_seconds: 36e3,
        disable_external_dependency_loading: !0,
        opt_out_useragent_filter: ee.allowAutomatedBrowsers,
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
        enable_recording_console_log: ie.enable_recording_console_log,
        before_send: ie => {
          const He = ge(ie);
          return null === He || (ee.anonymised && Ye(He), "$snapshot" === He.event ? function(ee, ie) {
            const {
              $snapshot_data: He,
              $window_id: ye
            } = ee.properties;
            try {
              ie({
                windowId: ye,
                events: He
              })
            } catch (be) {
              console.error("Session replay couldn't take a page recording batch.", be)
            }
          }(He, ee.onDomBatch) : ee.onTimelineEvent(He)), null
        },
        disable_session_recording: !ee.recordDom,
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
          ...ie.session_recording
        }
      }
    }

    function Ce() {
      return window.__PosthogExtensions__
    }
    var ve = He(618),
      ue = He(125);

    function me() {
      var ee;
      const ie = navigator,
        He = new Date;
      return {
        local_hour: He.getHours(),
        local_weekday: He.getDay(),
        ...ie.hardwareConcurrency ? {
          cpu_cores: ie.hardwareConcurrency
        } : {},
        ...ie.deviceMemory ? {
          device_memory_gb: ie.deviceMemory
        } : {},
        ...null !== (ee = ie.connection) && void 0 !== ee && ee.effectiveType ? {
          network_type: ie.connection.effectiveType
        } : {}
      }
    }

    function le(ee) {
      var ie;
      const He = ee.tags;
      return {
        panel_entry_reason: null !== (ie = He.recording_reason) && void 0 !== ie ? ie : "unknown",
        panel_entry_date: (new Date).toISOString().slice(0, 10),
        ...void 0 === He.sample_rate ? {} : {
          panel_entry_sample_rate: He.sample_rate
        }
      }
    }

    function Se(ee, ie) {
      return {
        recording_id: ee.recordingId,
        recording_scopes: ee.scopes.join(","),
        dom_recorded: ie
      }
    }

    function ne(ee, ie) {
      const He = {};
      for (const [ye, be] of Object.entries(ie)) He[`${ee}${ye}`] = be;
      return He
    }
    class je {
      constructor(ee) {
        this.options = ee, this.buckets = new Map, this.lastEvictionMs = -1 / 0
      }
      allow(ee, ie) {
        this.evictExpired(ee, ie);
        let He = this.buckets.get(ee);
        var ye, be;
        (void 0 === He || ie - He.startMs >= this.options.windowMs) && (He = {
          startMs: ie,
          count: 0,
          suppressed: null !== (ye = null === (be = He) || void 0 === be ? void 0 : be.suppressed) && void 0 !== ye ? ye : 0
        }, this.buckets.set(ee, He));
        if (He.count >= this.options.maxPerWindow) return He.suppressed++, null;
        He.count++;
        const Me = He.suppressed;
        return He.suppressed = 0, Me
      }
      evictExpired(ee, ie) {
        if (!(ie - this.lastEvictionMs < this.options.windowMs)) {
          this.lastEvictionMs = ie;
          for (const [He, ye] of this.buckets) {
            const be = (ie - ye.startMs) / this.options.windowMs;
            He !== ee && be >= (0 === ye.suppressed ? 1 : 10) && this.buckets.delete(He)
          }
        }
      }
    }

    function se(ee, ie, He) {
      const ye = new URL(ee);
      return ye.pathname = `${ye.pathname.replace(/\/+$/,"")}/replay/${encodeURIComponent(ie)}`, ye.searchParams.set("timestamp", String(Math.round(He - 5e3))), ye.toString()
    }
    class Ie {
      constructor(ee) {
        this.options = ee, this.throttle = new je({
          maxPerWindow: 3,
          windowMs: 6e4
        })
      }
      annotate(ee, ie) {
        const He = Date.now(),
          ye = this.throttle.allow("logged", He);
        var be;
        null !== ye && this.options.captureError(ee.message || ee.name, {
          error_name: ee.name || null,
          error_fingerprint: null !== (be = ie.fingerprint) && void 0 !== be ? be : null,
          suppressed_since_last: ye
        });
        return {
          replay_recording_id: this.options.recordingId,
          ...this.options.domRecorded ? {
            replay_url: se(this.options.dashboardHost, this.options.getSessionId(), He)
          } : {}
        }
      }
    }

    function he(ee) {
      return ee < 50 ? "<50" : ee < 100 ? "50-100" : ee < 200 ? "100-200" : ee < 400 ? "200-400" : "400+"
    }
    class Ne {
      constructor() {
        this.gamesJoined = [], this.flags = new Set, this.firstGame = null, this.fpsTags = null, this.maxHitchMs = 0, this.pingSumMs = 0, this.pingSamples = 0, this.maxPingMs = 0, this.unboundKeyPresses = new Map
      }
      gameJoined(ee, ie) {
        this.gamesJoined.includes(ee) || this.gamesJoined.push(ee), null === this.firstGame && (this.firstGame = {
          joinedAtMs: ie,
          leftAtMs: null
        })
      }
      gameLeft(ee) {
        null !== this.firstGame && null === this.firstGame.leftAtMs && (this.firstGame.leftAtMs = ee)
      }
      setFlag(ee) {
        return !this.flags.has(ee) && (this.flags.add(ee), !0)
      }
      setFpsTags(ee) {
        this.fpsTags = ee
      }
      addHitch(ee) {
        return !(ee <= this.maxHitchMs) && (this.maxHitchMs = ee, !0)
      }
      addPingSample(ee) {
        const ie = this.pingTags();
        this.pingSumMs += ee, this.pingSamples++, this.maxPingMs = Math.max(this.maxPingMs, ee);
        const He = this.pingTags();
        return (null === ie || void 0 === ie ? void 0 : ie.ping_avg_bucket) !== (null === He || void 0 === He ? void 0 : He.ping_avg_bucket) || (null === ie || void 0 === ie ? void 0 : ie.ping_max_bucket) !== (null === He || void 0 === He ? void 0 : He.ping_max_bucket)
      }
      addUnboundKeyPresses(ee) {
        for (const [He, ye] of ee) {
          var ie;
          this.unboundKeyPresses.set(He, (null !== (ie = this.unboundKeyPresses.get(He)) && void 0 !== ie ? ie : 0) + ye)
        }
      }
      toProperties() {
        var ee;
        let ie = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return {
          ...{
            first_game: null !== (ee = this.gamesJoined[0]) && void 0 !== ee ? ee : "",
            games_joined: this.gamesJoined.join(","),
            games_joined_count: this.gamesJoined.length,
            quick_quit: this.isQuickQuit(ie),
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
        let ee = 0,
          ie = "",
          He = 0;
        for (const [ye, be] of this.unboundKeyPresses) ee += be, (be > He || be === He && ye < ie) && (ie = ye, He = be);
        return {
          unbound_key_presses: ee,
          top_unbound_key: ie
        }
      }
      pingTags() {
        return 0 === this.pingSamples ? null : {
          ping_avg_bucket: he(this.pingSumMs / this.pingSamples),
          ping_max_bucket: he(this.maxPingMs)
        }
      }
      isQuickQuit(ee) {
        var ie;
        if (null === this.firstGame) return !1;
        const He = null !== (ie = this.firstGame.leftAtMs) && void 0 !== ie ? ie : ee;
        return null !== He && He - this.firstGame.joinedAtMs < ye.j
      }
    }
    var Ge = He(1169),
      re = He(1036),
      Qe = He(347),
      ei = He(1040),
      ii = He(1033),
      Hi = He(2966),
      yi = He(18),
      bi = He(1983),
      Mi = He(27),
      Ki = He(1305),
      Ui = He(1260),
      Fi = He(1493),
      Ji = He(2189),
      oi = He(1620),
      Ri = He(40627),
      ki = He(97),
      qi = He(40619),
      fi = He(1281);
    class Ti {
      constructor(ee, ie, He) {
        this.replay = ee, this.quitContext = ie, this.flows = He, this.errorThrottle = new je({
          maxPerWindow: 3,
          windowMs: 6e4
        }), this.hitchThrottle = new je({
          maxPerWindow: 5,
          windowMs: 6e4
        }), this.attachedToRender = !1
      }
      start() {
        window.addEventListener("error", (ee => {
            const ie = ee.error;
            this.captureError("error", ee.message, ee.filename ? `${ee.filename}:${ee.lineno}:${ee.colno}` : null, ie instanceof Error ? ie.name : null, (0, qi.c)(ee))
          })), window.addEventListener("unhandledrejection", (ee => {
            const ie = ee.reason;
            this.captureError("unhandled_rejection", ie instanceof Error ? ie.message : String(ie), null, ie instanceof Error ? ie.name : null, (0, qi.c)(ee))
          })), Mi.h.subscribe("unrecoverableError", (ee => {
            this.captureError("unrecoverable", ee, null, null, !0)
          })),
          function(ee) {
            var ie, He;
            if ("undefined" === typeof PerformanceObserver || null === (ie = null === (He = PerformanceObserver.supportedEntryTypes) || void 0 === He ? void 0 : He.includes("long-animation-frame")) || void 0 === ie || !ie) return;
            let ye = null;
            new PerformanceObserver((ie => {
              for (const Me of ie.getEntries()) {
                var He, be;
                const ie = Me,
                  Ke = !(null !== ye && ie.startTime - ye.endMs < 50) || ie.duration >= 3 * (null !== (He = null === (be = ye) || void 0 === be ? void 0 : be.durationMs) && void 0 !== He ? He : 0);
                ye = {
                  endMs: ie.startTime + ie.duration,
                  durationMs: ie.duration
                }, !document.hidden && ie.duration >= 100 && Ke && ee({
                  frameMs: ie.duration,
                  mainThreadMs: (0, fi.o)(ie)
                })
              }
            })).observe({
              type: "long-animation-frame"
            })
          }((ee => {
            this.onFrameHitch(ee)
          }))
      }
      attachToRender() {
        if (this.attachedToRender) return;
        const ee = (0, Ui.A)().gameRender();
        null !== ee && (this.attachedToRender = !0, this.replay.setSessionProperties(Object.fromEntries([
          ["renderer", ee.renderer],
          ["gpu_vendor", (0, ki.getGpuVendor)()]
        ])), ee.canvas.addEventListener("webglcontextlost", (() => {
          this.replay.setFlag("had_error"), this.replay.capture("webgl_context_lost")
        })), ee.canvas.addEventListener("webglcontextrestored", (() => {
          this.replay.capture("webgl_context_restored")
        })))
      }
      captureError(ee, ie, He, be, Me) {
        const Ke = ze(ie).slice(0, 300);
        Me && null !== this.flows.stay && this.quitContext.noteError(performance.now());
        const Ue = this.errorThrottle.allow(`${ee}:${Ke}`, Date.now());
        null !== Ue && (this.replay.captureClientError(ee, Ke, {
          source: He,
          error_name: be,
          suppressed_since_last: Ue
        }), this.replay.addReplayMarker(ye.h.error, {
          kind: ee,
          message: Ke
        }))
      }
      onFrameHitch(ee) {
        let {
          frameMs: ie,
          mainThreadMs: He
        } = ee;
        const ye = this.flows.stay;
        if (null === ye || null === ye.playableAtMs || performance.now() - ye.playableAtMs < 2e3) return;
        (0, oi.o)() || this.quitContext.noteHitch(performance.now()), this.replay.addHitch(Math.round(ie));
        const be = this.hitchThrottle.allow("frame_hitch", Date.now());
        null !== be && this.replay.capture("frame_hitch", {
          YK: Math.round(ie),
          main_thread_ms: Math.round(He),
          game_name_with_variation: ye.name,
          suppressed_since_last: be
        })
      }
    }
    var Xi = He(7132),
      zi = He(335);
    class Bi {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.steps = ee, this.furthestIndex = -1, this.heldIndex = -1, this.gateIndex = void 0, this.gateIndex = null === ie ? 1 / 0 : ee.indexOf(ie)
      }
      reach(ee) {
        const ie = this.steps.indexOf(ee);
        if (ie > this.gateIndex && this.furthestIndex < this.gateIndex) return this.heldIndex = Math.max(this.heldIndex, ie), null;
        const He = ie === this.gateIndex ? Math.max(ie, this.heldIndex) : ie;
        return He <= this.furthestIndex ? null : (this.furthestIndex = He, He)
      }
      get furthest() {
        return -1 === this.furthestIndex ? null : this.steps[this.furthestIndex]
      }
      get furthestStepIndex() {
        return this.furthestIndex
      }
    }
    const Ei = {
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
    class gi {
      constructor(ee) {
        this.threshold = ee, this.times = [], this.armed = !0, this.lastAtMs = -1 / 0
      }
      note(ee) {
        const {
          count: ie,
          windowMs: He
        } = this.threshold;
        if (!this.armed && ee - this.lastAtMs >= He && (this.armed = !0), this.lastAtMs = ee, !this.armed) return !1;
        for (this.times.push(ee); this.times.length > 0 && ee - this.times[0] >= He;) this.times.shift();
        return !(this.times.length < ie) && (this.times.length = 0, this.armed = !1, !0)
      }
    }
    class Oi {
      constructor(ee) {
        this.onSignal = ee, this.bursts = new Map, this.seen = [], this.signalCount = 0, this.idleCounted = !1;
        for (const [ie, He] of Object.entries(Ei)) this.bursts.set(ie, new gi(He))
      }
      note(ee, ie) {
        if (this.bursts.get(ee).note(ie)) {
          const {
            count: ie,
            windowMs: He
          } = Ei[ee];
          this.signal(ee, ie, He)
        }
      }
      checkIdle(ee) {
        let {
          nowMs: ie,
          lastInputAtMs: He,
          pointerLocked: ye,
          playable: be,
          visible: Me
        } = ee;
        ie - (null !== He && void 0 !== He ? He : 0) < 3e4 ? this.idleCounted = !1 : !this.idleCounted && ye && be && Me && (this.idleCounted = !0, this.signal("idle_pointer_locked", 1, 3e4))
      }
      tags() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ie = ee && !this.seen.includes("rage_quit") ? [...this.seen, "rage_quit"] : this.seen;
        return {
          frustration_score: this.signalCount + (ee ? 1 : 0),
          frustration_signals: ie.join(",")
        }
      }
      signal(ee, ie, He) {
        this.signalCount++, this.seen.includes(ee) || this.seen.push(ee), this.onSignal(ee, ie, He)
      }
    }
    const di = Xi.f.indexOf("first_input"),
      Wi = Xi.f.indexOf("first_move"),
      ti = {
        keyboardMouse: "keyboard",
        touch: "touch",
        gamepad: "pad"
      };
    class Zi {
      constructor(ee, ie, He) {
        this.replay = ee, this.quitContext = ie, this.deps = He, this.ladder = new Bi(Xi.c, "first_move"), this.frustration = void 0, this.frustrationThrottle = new je({
          maxPerWindow: 5,
          windowMs: 6e4
        }), this.activations = new Set, this.currentStay = null, this.moveSubscriptions = [], this.everPlayable = !1, this.everPointerLocked = !1, this.pointerUnlockedAtMs = -1 / 0, this.everythingMenu = null, this.lastGameName = null, this.unsentStepMarkers = [], this.frustration = new Oi(((ee, ie, He) => {
          this.onFrustration(ee, ie, He)
        })), ie.setFlowProperties((ee => this.quitProperties(ee)))
      }
      get stay() {
        return this.currentStay
      }
      start() {
        var ee;
        this.reachStep("page_loaded"), Mi.h.subscribe("sessionReplayStayOpened", (ee => {
          this.resendStay(ee)
        })), Mi.h.subscribe("pointerLockUpdate", (ee => {
          this.pointerLockChanged(ee)
        })), Mi.h.subscribe("localBlockMined", (() => {
          this.blockBroken()
        })), Mi.h.subscribe("blockChangeRefused", (() => {
          this.noteFrustration("block_change_refused")
        })), Mi.h.subscribe("controlsTutorialShown", (ee => {
          this.controlsTutorialShown(ee)
        })), Mi.h.subscribe("showShopTouchTutorial", (ee => {
          !1 !== ee && this.controlsTutorialShown("shop")
        })), Mi.h.subscribe("appManagerUpdated|openInGameMenuName", (ee => {
          this.inGameMenuChanged(ee)
        })), Mi.h.subscribe("appManagerUpdated|openEverythingMenuName", (ee => {
          this.everythingMenuChanged(ee)
        })), document.addEventListener("pointerlockerror", (() => {
          this.pointerLockFailed()
        })), null === (ee = (0, Ri.c)()) || void 0 === ee || ee.onUnboundKey((() => {
          this.unboundKeyPressed()
        }))
      }
      gameLoading() {
        this.reachStep("game_loading")
      }
      gameJoined(ee, ie, He) {
        const ye = He && ie === this.lastGameName;
        this.lastGameName = ie, this.stopWatchingMoves();
        const be = {
          name: ie,
          joinedAtMs: Date.now(),
          playableAtMs: null,
          visiblePlayedMs: 0,
          deaths: 0,
          ladder: new Bi(Xi.f, "first_move"),
          unboundKeyPresses: 0
        };
        return this.currentStay = be, this.reachStayStep("joined"), ee >= 2 && !ye && this.reachStep("second_game"), be
      }
      gamePlayable() {
        const ee = this.currentStay;
        null !== ee && (ee.playableAtMs = this.deps.now(), this.everPlayable = !0, this.reachStep("game_playable"), this.reachStayStep("game_playable"), this.deps.isPointerLocked() && this.pointerLocked(), this.watchMoves())
      }
      input() {
        const ee = this.currentStay;
        null === ee || null === ee.playableAtMs || ee.ladder.furthestStepIndex >= di || (this.reachStep("first_input"), this.reachStayStep("first_input"))
      }
      played60s() {
        this.reachStep("played_60s"), this.reachStayStep("played_60s")
      }
      gameLeft() {
        this.stopWatchingMoves(), this.currentStay = null
      }
      YR() {
        var ee, ie, He;
        this.sendStepMarkers(), this.frustration.checkIdle({
          nowMs: this.deps.now(),
          lastInputAtMs: Math.max(null !== (ee = this.quitContext.getLastInputAtMs()) && void 0 !== ee ? ee : 0, null !== (ie = null === (He = this.currentStay) || void 0 === He ? void 0 : He.playableAtMs) && void 0 !== ie ? ie : 0),
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
          input: ti[this.deps.getInputDevice()]
        }), this.reachStep("first_move"), this.reachStayStep("first_move")
      }
      blockBroken() {
        this.isPlayable() && (this.activate("first_block_broken"), this.reachStep("first_block"), this.reachStayStep("first_block"))
      }
      inGameMenuChanged(ee) {
        null !== ee && this.menuOpened(ee, "inventory" === ee ? "first_inventory_open" : null)
      }
      everythingMenuChanged(ee) {
        const ie = null === this.everythingMenu;
        this.everythingMenu = ee, null !== ee && (this.menuOpened(ee, ee === zi.r.SETTINGS ? "first_settings_open" : null), ee === zi.r.SETTINGS && ie && null !== this.currentStay && this.noteFrustration("menu_toggling"))
      }
      pointerLockChanged(ee) {
        ee ? this.pointerLocked() : this.pointerUnlockedAtMs = this.deps.now()
      }
      controlsTutorialShown(ee) {
        const ie = `controls_tutorial_${ee}`;
        this.activations.has(ie) || (this.activations.add(ie), this.replay.capture("controls_tutorial_shown", {
          tutorial: ee,
          ...this.timing()
        }))
      }
      unboundKeyPressed() {
        this.noteFrustration("unbound_key_burst");
        const ee = this.currentStay;
        null !== ee && ee.unboundKeyPresses < Xi.g && (ee.unboundKeyPresses++, this.deps.publishStayProgress({
          unboundKeyPresses: ee.unboundKeyPresses
        }))
      }
      noteFrustration(ee) {
        this.frustration.note(ee, this.deps.now())
      }
      quitProperties(ee) {
        return {
          ...this.ladderTags(),
          ...this.frustration.tags(ee),
          never_pointer_locked: this.everPlayable && !this.everPointerLocked && !this.deps.isTouchScreen() && "gamepad" !== this.deps.getInputDevice()
        }
      }
      isPlayable() {
        return null !== this.currentStay && null !== this.currentStay.playableAtMs
      }
      ladderTags() {
        var ee;
        return {
          furthest_step: null !== (ee = this.ladder.furthest) && void 0 !== ee ? ee : "",
          furthest_step_index: this.ladder.furthestStepIndex
        }
      }
      reachStep(ee) {
        null !== this.ladder.reach(ee) && (this.replay.setSessionProperties(this.ladderTags(), !1), this.unsentStepMarkers.push(Xi.c.indexOf(ee)), this.sendStepMarkers())
      }
      sendStepMarkers() {
        for (; this.unsentStepMarkers.length > 0 && this.replay.addReplayMarker(ye.h.step, {
            step: this.unsentStepMarkers[0]
          }, !0);) this.unsentStepMarkers.shift()
      }
      resendStay(ee) {
        const ie = this.currentStay;
        var He;
        null !== ie && ie.name === ee && this.deps.publishStayProgress({
          furthestStep: null !== (He = ie.ladder.furthest) && void 0 !== He ? He : void 0,
          unboundKeyPresses: ie.unboundKeyPresses
        })
      }
      reachStayStep(ee) {
        var ie;
        const He = null === (ie = this.currentStay) || void 0 === ie ? void 0 : ie.ladder;
        void 0 !== He && null !== He.reach(ee) && this.deps.publishStayProgress({
          furthestStep: He.furthest
        })
      }
      menuOpened(ee, ie) {
        this.replay.capture("menu_opened", {
          menu: ee
        }), null !== ie && this.activate(ie)
      }
      activate(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.activations.has(ee) || (this.activations.add(ee), this.replay.capture(ee, {
          ...ie,
          ...this.timing()
        }))
      }
      timing() {
        var ee, ie;
        const He = this.deps.now(),
          ye = null !== (ee = null === (ie = this.currentStay) || void 0 === ie ? void 0 : ie.playableAtMs) && void 0 !== ee ? ee : null;
        return {
          ms_since_page_load: Math.round(He),
          ms_since_playable: null === ye ? null : Math.round(He - ye)
        }
      }
      onFrustration(ee, ie, He) {
        this.replay.setSessionProperties(this.frustration.tags(), !1), this.replay.addReplayMarker(ye.h.frustration, {
          signal: Xi.e.indexOf(ee)
        });
        const be = this.frustrationThrottle.allow(ee, Date.now());
        null !== be && this.replay.capture("frustration_signal", {
          signal: ee,
          count: ie,
          window_ms: He,
          suppressed_since_last: be
        })
      }
      watchMoves() {
        var ee, ie;
        if (0 === this.moveSubscriptions.length && (null !== (ee = null === (ie = this.currentStay) || void 0 === ie ? void 0 : ie.ladder.furthestStepIndex) && void 0 !== ee ? ee : 1 / 0) < Wi) {
          const ee = () => {
            this.moved()
          };
          this.moveSubscriptions = [Mi.h.subscribe("usedKeyboard", ee), Mi.h.subscribe("stickMoved", ee)]
        }
      }
      stopWatchingMoves() {
        for (const ee of this.moveSubscriptions) Mi.h.unsubscribe(ee);
        this.moveSubscriptions = []
      }
    }
    const wi = ["quit_after_hitch", "quit_after_death", "quit_during_load", "quit_in_menu", "quit_idle", "quit_after_ad"],
      Di = ["quit_during_load", "quit_after_ad", "quit_after_death", "quit_after_hitch", "quit_idle", "quit_in_menu"];

    function Pi(ee) {
      var ie;
      return null !== (ie = Di.find((ie => ee.includes(ie)))) && void 0 !== ie ? ie : "none"
    }

    function Ai(ee, ie, He) {
      return null !== ee && ie - ee < He
    }
    class Yi {
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
      setFlowProperties(ee) {
        this.flowProperties = ee
      }
      noteInput(ee) {
        this.history.lastInputAtMs = ee
      }
      noteHitch(ee) {
        this.history.lastHitchAtMs = ee
      }
      noteDeath(ee) {
        this.history.lastDeathAtMs = ee
      }
      noteError(ee) {
        this.history.lastErrorAtMs = ee
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
      noteAdFinished(ee) {
        this.history.adPlaying = !1, this.history.lastAdFinishedAtMs = ee
      }
      noteLoadStep(ee) {
        this.lastLoadStep = ee
      }
      getLastLoadStep() {
        return this.lastLoadStep
      }
      quit(ee) {
        const ie = function(ee, ie) {
            var He, ye;
            const be = [];
            return Ai(ie.lastHitchAtMs, ee.nowMs, 15e3) && be.push("quit_after_hitch"), Ai(ie.lastDeathAtMs, ee.nowMs, 15e3) && be.push("quit_after_death"), ee.loading ? be.push("quit_during_load") : "page" !== ee.quitFrom || ee.inGame && !ee.menuOpen || be.push("quit_in_menu"), Ai(null !== (He = ie.lastInputAtMs) && void 0 !== He ? He : 0, ee.nowMs, 6e4) || be.push("quit_idle"), (!0 === ie.adPlaying || Ai(null !== (ye = ie.lastAdFinishedAtMs) && void 0 !== ye ? ye : null, ee.nowMs, 3e4)) && be.push("quit_after_ad"), be
          }(ee, this.history),
          He = function(ee, ie) {
            var He;
            return Ai(ie.lastDeathAtMs, ee, 1e4) || Ai(null !== (He = ie.lastErrorAtMs) && void 0 !== He ? He : null, ee, 1e4)
          }(ee.nowMs, this.history),
          ye = {
            quit_from: ee.quitFrom,
            in_game: ee.inGame,
            quit_reasons: ie.join(","),
            quit_reason: Pi(ie),
            rage_quit: He,
            ...this.flowProperties(He)
          };
        var be;
        ie.includes("quit_during_load") && (ye.last_load_step = null !== (be = this.lastLoadStep) && void 0 !== be ? be : "none");
        null !== ee.gameName && (ye.game_name_with_variation = ee.gameName, ye.game_name = (0, Qe.Xb)(ee.gameName));
        for (const Me of wi) ye[Me] = ie.includes(Me);
        return {
          reasons: ie,
          properties: ye
        }
      }
    }
    class Vi {
      constructor(ee) {
        this.deps = ee, this.quitContext = new Yi, this.loading = !1, this.inGame = !1, this.switching = !1, this.nextLeaveIsNotAQuit = !1, this.pendingQuit = null, this.exited = !1
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
      joinFailed(ee) {
        this.loading = !1, this.nextLeaveIsNotAQuit = this.inGame, this.deps.capture("join_failed", ee)
      }
      disconnected() {
        this.nextLeaveIsNotAQuit = !0
      }
      kickedForAfk(ee) {
        this.nextLeaveIsNotAQuit = !0, this.deps.capture("kicked_afk", {
          game_name_with_variation: ee
        })
      }
      gameLeft(ee) {
        const ie = this.nextLeaveIsNotAQuit || this.deps.isJoinAbandoned(),
          He = this.switching,
          ye = this.loading;
        if (this.nextLeaveIsNotAQuit = !1, this.switching = !1, this.inGame = !1, null === ee) return;
        if (He || (this.loading = !1), ie) return void this.quitContext.forgetGame();
        const be = this.quitContext.quit({
          quitFrom: "game",
          gameName: ee,
          nowMs: this.deps.now(),
          inGame: !0,
          loading: ye,
          menuOpen: !1
        });
        this.quitContext.forgetGame(), He ? this.captureSwitch(be) : this.startPendingQuit(be)
      }
      gameReplayOpened(ee) {
        this.nextLeaveIsNotAQuit = !0, this.gameLeft(ee), this.deps.capture("game_replay_opened", {
          from_game_name_with_variation: ee
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
      pageHidden(ee) {
        if (this.exited) return;
        this.exited = !0;
        const ie = this.pendingQuit;
        null !== ie && (clearTimeout(ie.timer), this.pendingQuit = null, this.deps.onGameQuit(ie.quit), this.deps.captureOnExit("quit_context", ie.quit.properties, ie.atEpochMs));
        const He = {
            quitFrom: "page",
            gameName: null,
            nowMs: this.deps.now(),
            inGame: this.inGame,
            loading: this.loading,
            menuOpen: this.deps.isMenuOpen()
          },
          ye = this.quitContext.quit(He);
        this.inGame && this.deps.onGameQuit(ye), this.deps.captureOnExit("quit_context", {
          ...ee,
          ...ye.properties
        })
      }
      pageRestored() {
        this.exited = !1, this.deps.capture("page_restored", {})
      }
      startPendingQuit(ee) {
        this.resolvePendingQuitAsSwitch();
        const ie = {
          quit: ee,
          atEpochMs: Date.now(),
          timer: setTimeout((() => {
            this.pendingQuit === ie && (this.pendingQuit = null, this.deps.onGameQuit(ee), this.deps.capture("quit_context", ee.properties, ie.atEpochMs))
          }), 1e4)
        };
        this.pendingQuit = ie
      }
      resolvePendingQuitAsSwitch() {
        const ee = this.pendingQuit;
        null !== ee && (clearTimeout(ee.timer), this.pendingQuit = null, "string" === typeof ee.quit.properties.game_name_with_variation && this.captureSwitch(ee.quit))
      }
      captureSwitch(ee) {
        this.deps.capture("game_switched", {
          from_game_name_with_variation: ee.properties.game_name_with_variation,
          from_game_name: ee.properties.game_name,
          after_death: ee.reasons.includes("quit_after_death"),
          after_hitch: ee.reasons.includes("quit_after_hitch")
        })
      }
    }
    var ai = He(7142);
    class ci {
      constructor(ee) {
        this.replay = ee, this.pointerLockThrottle = new je({
          maxPerWindow: 10,
          windowMs: 6e4
        }), this.counts = new Map, this.game = null, this.timer = null
      }
      start(ee) {
        ee.onUnboundKey((ee => {
          this.onUnboundKey(ee)
        })), ee.onPointerLock((ee => {
          const ie = this.pointerLockThrottle.allow("pointer_lock_changed", Date.now());
          null !== ie && this.replay.capture("pointer_lock_changed", {
            locked: ee,
            in_game: "inGame" === yi.e.get("gameState"),
            menu_open: (0, oi.o)(),
            suppressed_since_last: ie
          })
        })), Mi.h.subscribe("leaveGame", (() => {
          this.flush(!1)
        })), document.addEventListener("visibilitychange", (() => {
          document.hidden && this.flush(!0)
        }))
      }
      onUnboundKey(ee) {
        var ie, He;
        const ye = (0, Ki.e)().gameNameWithVariation;
        ye !== this.game && (this.flush(!1), this.game = ye);
        const be = null !== (ie = (0, ai.g)(ee)) && void 0 !== ie ? ie : ee;
        this.counts.set(be, (null !== (He = this.counts.get(be)) && void 0 !== He ? He : 0) + 1), this.timer ??= setTimeout((() => {
          this.flush(!1)
        }), 1e4 - Date.now() % 1e4)
      }
      flush(ee) {
        if (null !== this.timer && (clearTimeout(this.timer), this.timer = null), 0 === this.counts.size) return;
        const ie = (He = this.counts, [...He].sort(((ee, ie) => ie[1] - ee[1] || (ee[0] < ie[0] ? -1 : 1))));
        var He;
        let ye = 0;
        for (const [, Me] of ie) ye += Me;
        const be = {
          key_counts: Object.fromEntries(ie),
          keys: ie.map((ee => {
            let [ie] = ee;
            return ie
          })).join(","),
          top_key: ie[0][0],
          presses: ye,
          game_name: null === this.game ? null : (0, Qe.Xb)(this.game),
          game_name_with_variation: this.game
        };
        this.replay.addUnboundKeyPresses(this.counts), this.counts.clear(), ee ? this.replay.captureOnExit("unbound_keys", be) : this.replay.capture("unbound_keys", be)
      }
    }
    var xi = He(153);

    function Li(ee) {
      var ie, He;
      return null !== (ie = null === (He = xi.k[ee]) || void 0 === He ? void 0 : He.toLowerCase()) && void 0 !== ie ? ie : String(ee)
    }
    class Ci {
      constructor(ee, ie) {
        this.replay = ee, this.quitContext = ie, this.startedAtMs = null, this.steps = new Map, this.firstGamePlayable = !1
      }
      started() {
        this.startedAtMs = Date.now()
      }
      stepCompleted(ee) {
        if (this.steps.has(ee)) return;
        const ie = performance.now();
        this.steps.set(ee, ie);
        const He = Li(ee);
        this.quitContext.noteLoadStep(He), this.firstGamePlayable || this.replay.capture("game_load_step", {
          load_step: He,
          step_number: ee,
          ms_since_page_load: Math.round(ie),
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
        let ee = null,
          ie = null;
        for (const [ye, be] of [...this.steps].sort(((ee, ie) => ee[1] - ie[1]))) null !== ie && (null === ee || be - ie > ee.ms) && (ee = {
          step: ye,
          ms: be - ie
        }), ie = be;
        const He = null === this.startedAtMs ? null : Date.now() - this.startedAtMs;
        return this.firstGamePlayable = !0, this.ended(), {
          load_ms: He,
          slowest_load_step: null === ee ? null : Li(ee.step),
          slowest_load_step_ms: null === ee ? null : Math.round(ee.ms)
        }
      }
      resetSteps() {
        this.steps.clear(), this.quitContext.noteLoadStep(null)
      }
    }
    const vi = ["keydown", "pointerdown", "touchstart"];
    class ui {
      constructor(ee) {
        this.replay = ee, this.firstInGameInputSent = !1
      }
      startFirstInputWatch() {
        setTimeout((() => {
          ! function(ee) {
            var ie;
            let He = !1;
            const ye = (ie, ye, be) => {
              He || (He = !0, ee(ie, ye, be))
            };
            if ("undefined" !== typeof PerformanceObserver && null !== (ie = PerformanceObserver.supportedEntryTypes) && void 0 !== ie && ie.includes("first-input")) {
              const ee = new PerformanceObserver((ie => {
                const [He] = ie.getEntries();
                ee.disconnect(), ye(He.name, He.startTime, !0)
              }));
              return void ee.observe({
                type: "first-input",
                buffered: !0
              })
            }
            const be = new AbortController,
              Me = ee => {
                be.abort(), ye(ee.type, ee.timeStamp, !1)
              };
            for (const Ke of vi) window.addEventListener(Ke, Me, {
              capture: !0,
              passive: !0,
              signal: be.signal
            })
          }(((ee, ie, He) => {
            this.replay.capture("first_input", Object.fromEntries([
              ["input_type", ee],
              ["ms_since_page_load", Math.round(ie)],
              ["buffered", He]
            ]))
          }))
        }), 100)
      }
      onFirstInGameInput(ee, ie) {
        this.firstInGameInputSent = !0, this.replay.capture("first_ingame_input", Object.fromEntries([
          ["input_type", ee],
          ["ms_since_playable", Math.round(performance.now() - ie)],
          ["ms_since_page_load", Math.round(performance.now())]
        ]))
      }
      capturePageLoadTiming() {
        const ee = performance.getEntriesByType("navigation")[0],
          ie = performance.getEntriesByName("first-contentful-paint")[0];
        this.replay.capture("page_load_timing", {
          ttfb_ms: ee ? Math.round(ee.responseStart) : null,
          first_contentful_paint_ms: ie ? Math.round(ie.startTime) : null,
          dom_content_loaded_ms: ee ? Math.round(ee.domContentLoadedEventEnd) : null,
          load_ms: ee ? Math.round(ee.loadEventEnd) : null,
          transfer_kb: ee ? Math.round(ee.transferSize / 1024) : null,
          recording_started_ms: Math.round(performance.now())
        })
      }
    }
    class mi {
      constructor(ee, ie) {
        this.replay = ee, this.quitContext = ie, this.settings = yi.e.get("clientEscMenuOptions"), this.pendingSettings = {}, this.settingsTimer = null, this.adRequest = null, this.playingAd = null
      }
      start() {
        Mi.h.subscribe("purchaseStarted", (ee => {
          let {
            product: ie
          } = ee;
          this.replay.setFlag("purchase_intent"), this.replay.capture("purchase_started", {
            product: ie
          })
        })), Mi.h.subscribe("purchaseEnded", (ee => {
          let {
            outcome: ie
          } = ee;
          this.replay.capture("purchase_ended", {
            outcome: ie
          })
        })), Mi.h.subscribe("adRequested", (ee => {
          let {
            adKind: ie,
            provider: He
          } = ee;
          this.adRequest = {
            adKind: ie,
            provider: He,
            atMs: performance.now()
          }
        })), Mi.h.subscribe("appManagerUpdated|soundOnFromAd", (ee => {
          ee && null !== this.playingAd ? this.onAdFinished() : ee || null !== this.playingAd || this.onAdStarted()
        })), Mi.h.subscribe("appManagerUpdated|clientEscMenuOptions", (ee => {
          yi.e.isApplyingDefaults ? this.settings = ee : this.onSettingsChanged(ee)
        }))
      }
      onAdStarted() {
        var ee, ie;
        const He = performance.now(),
          ye = null !== this.adRequest && He - this.adRequest.atMs < 6e4 ? this.adRequest : null;
        this.adRequest = null, this.playingAd = {
          ad_kind: null !== (ee = null === ye || void 0 === ye ? void 0 : ye.adKind) && void 0 !== ee ? ee : "unknown",
          provider: null !== (ie = null === ye || void 0 === ye ? void 0 : ye.provider) && void 0 !== ie ? ie : null,
          startedAtMs: He
        }, this.replay.setFlag("ad_shown"), this.quitContext.noteAdStarted(), this.replay.capture("ad_started", this.adProperties(this.playingAd, He))
      }
      onAdFinished() {
        const ee = performance.now(),
          ie = this.playingAd;
        this.playingAd = null, this.quitContext.noteAdFinished(ee), this.replay.capture("ad_finished", {
          ...this.adProperties(ie, ee),
          ad_ms: Math.round(ee - ie.startedAtMs)
        })
      }
      adProperties(ee, ie) {
        return {
          ad_kind: ee.ad_kind,
          provider: ee.provider,
          minutes_since_page_load: Math.floor(ie / 6e4),
          in_game: "inGame" === yi.e.get("gameState")
        }
      }
      onSettingsChanged(ee) {
        Object.assign(this.pendingSettings, function(ee, ie) {
          const He = {};
          for (const ye of Object.keys(ie)) ee[ye] !== ie[ye] && (He[ye] = ie[ye]);
          return He
        }(this.settings, ee)), this.settings = ee, null !== this.settingsTimer && clearTimeout(this.settingsTimer), this.settingsTimer = setTimeout((() => {
          this.settingsTimer = null, Object.keys(this.pendingSettings).length > 0 && (this.replay.capture("settings_changed", {
            changed_settings: Object.keys(this.pendingSettings),
            values: this.pendingSettings
          }), this.pendingSettings = {})
        }), 2e3)
      }
    }

    function li(ee) {
      switch ((0, Ge.z)(ee)) {
        case re.e.DISCORD_GUILD:
          return "discord_guild";
        case re.e.DISCORD_DM:
          return "discord_dm";
        default:
          return (0, Ge.K)(ee) ? "public" : "private"
      }
    }
    class Si {
      constructor(ee) {
        this.replay = ee, this.framesThisTick = 0, this.lastTickMs = performance.now(), this.ticks = 0, this.gamesJoined = 0, this.pageEvents = void 0, this.flows = void 0, this.health = void 0, this.leaves = void 0, this.joinLoad = void 0, this.unsubscribeDeaths = () => {}, this.inputSinceActiveMarker = !1, this.firstMinutePlayedSent = !1, this.pageEvents = new ui(ee), this.leaves = new Vi({
          capture: (ie, He, ye) => {
            void 0 === ye ? ee.capture(ie, He) : ee.captureAt(ie, He, ye)
          },
          captureOnExit: (ie, He, ye) => {
            ee.captureOnExit(ie, He, ye)
          },
          onGameQuit: ee => {
            let {
              reasons: ie,
              properties: He
            } = ee;
            const ye = He.game_name_with_variation;
            Mi.h.yR("sessionReplayGameQuit", {
              reasons: ie,
              gameName: "string" === typeof ye ? ye : null
            })
          },
          isMenuOpen: oi.o,
          isJoinAbandoned: Ji.i,
          now: () => performance.now()
        }), this.joinLoad = new Ci(ee, this.leaves.quitContext), this.flows = function(ee, ie) {
          return new Zi(ee, ie, {
            now: () => performance.now(),
            isTouchScreen: () => yi.e.get("isTouchScreen"),
            getInputDevice: () => yi.e.get("activeInputDevice"),
            isPointerLocked: () => null !== document.pointerLockElement,
            isPageVisible: () => !document.hidden,
            publishStayProgress: ee => {
              Mi.h.yR("sessionReplayStayProgress", ee)
            }
          })
        }(ee, this.leaves.quitContext), this.health = new Ti(ee, this.leaves.quitContext, this.flows)
      }
      start() {
        const ee = (0, Ri.c)(),
          ie = new ci(this.replay);
        null !== ee && ie.start(ee), this.pageEvents.capturePageLoadTiming(), this.flows.start();
        const He = yi.e.get("gameState");
        "inGame" === He ? this.joinConnectedGame() : "loadingScreen" !== He && "findingLobby" !== He || this.leaves.joinStarted(), this.subscribeToGameFlow(), new mi(this.replay, this.leaves.quitContext).start(), this.health.start(), this.trackInput(), this.pageEvents.startFirstInputWatch(), (0, Ui.r)((() => {
          this.framesThisTick++
        })), setInterval((() => {
          this.qE()
        }), 1e3), window.addEventListener("pagehide", (() => {
          ie.flush(!0), this.leaves.pageHidden(this.replay.finalTags())
        })), window.addEventListener("pageshow", (ee => {
          ee.persisted && this.leaves.pageRestored()
        }))
      }
      trackInput() {
        const ee = ee => {
          var ie, He;
          this.inputSinceActiveMarker = !0, this.leaves.quitContext.noteInput(ee.timeStamp), this.flows.input();
          const ye = null !== (ie = null === (He = this.flows.stay) || void 0 === He ? void 0 : He.playableAtMs) && void 0 !== ie ? ie : null;
          this.pageEvents.firstInGameInputSent || null === ye || this.pageEvents.onFirstInGameInput(ee.type, ye)
        };
        for (const ie of ["keydown", "pointerdown", "pointermove", "wheel"]) window.addEventListener(ie, ee, {
          capture: !0,
          passive: !0
        })
      }
      subscribeToGameFlow() {
        Mi.h.subscribe("joinedGame", (ee => {
          let {
            gameNameWithVariation: ie,
            lobbyName: He
          } = ee;
          (0, Ji.i)() || this.onJoinedGame(ie, He)
        })), Mi.h.subscribe("leaveGame", (() => {
          var ee, ie;
          const He = null !== (ee = null === (ie = this.flows.stay) || void 0 === ie ? void 0 : ie.name) && void 0 !== ee ? ee : null;
          this.onLeftGame(), this.leaves.gameLeft(He)
        })), Mi.h.subscribe("replayViewer|replayLoaded", (() => {
          const ee = this.flows.stay;
          null !== ee && (this.onLeftGame(), this.leaves.gameReplayOpened(ee.name))
        })), Mi.h.subscribe("matchmakeAndPlayStepCompleted", (ee => {
          let {
            step: ie
          } = ee;
          this.joinLoad.stepCompleted(ie)
        })), Mi.h.subscribe("leftPlayPage", (() => {
          this.leaves.playPageLeft(), this.joinLoad.ended()
        })), Mi.h.subscribe("joinFailed", (ee => {
          let {
            step: ie,
            severity: He
          } = ee;
          this.leaves.joinFailed({
            step: ie,
            severity: He,
            game_name_with_variation: (0, Ki.e)().requestedGameNameWithVariation,
            last_load_step: this.leaves.quitContext.getLastLoadStep()
          }), this.joinLoad.ended()
        })), Mi.h.subscribe("kickedForAfk", (() => {
          var ee, ie;
          this.leaves.kickedForAfk(null !== (ee = null === (ie = this.flows.stay) || void 0 === ie ? void 0 : ie.name) && void 0 !== ee ? ee : null)
        })), Mi.h.subscribe("unwantedLeftGame", (ee => {
          this.leaves.disconnected(), this.replay.setFlag("disconnected"), this.replay.capture("disconnected", {
            reason: ee.reason,
            can_reconnect: ee.canReconnect,
            automatically_reconnect: ee.automaticallyReconnect,
            requires_refresh: ee.requiresRefresh
          })
        })), Mi.h.subscribe("appManagerUpdated|gameState", (ee => {
          "loadingScreen" === ee ? this.leaves.joinStarted() : "findingLobby" === ee ? (this.leaves.joinStarted(), this.joinLoad.started(), this.replay.capture("game_loading_started", {
            entry_source: yi.e.get("gameEntrySource")
          }), this.flows.gameLoading()) : "inGame" === ee ? this.onPlayable() : "landingPage" === ee && (this.replay.capture("homepage_viewed"), this.replay.capture("$screen", {
            $screen_name: "homepage"
          }))
        })), Mi.h.subscribe("appManagerUpdated|gameEntrySource", (ee => {
          "autoReconnect" !== ee && "manualReconnect" !== ee || this.replay.capture("reconnect_attempted", {
            automatic: "autoReconnect" === ee
          })
        })), Mi.h.subscribe("sessionReplayPlayerKill", (ee => {
          let {
            killstreak: ie
          } = ee;
          this.replay.capture("player_kill", {
            killstreak: ie
          })
        }))
      }
      onPlayable() {
        (0, Ji.i)() || (0, Ki.g)() || (null === this.flows.stay && this.joinConnectedGame(), this.replay.capture("game_playable", {
          ms_since_page_load: Math.round(performance.now()),
          ...this.joinLoad.playable()
        }), this.leaves.gamePlayable(), this.flows.gamePlayable())
      }
      joinConnectedGame() {
        if ((0, Ki.g)()) return;
        const {
          gameNameWithVariation: ee,
          lobbyName: ie
        } = (0, Ki.e)();
        null !== ee && null !== ie ? this.onJoinedGame(ee, ie) : console.warn("Session replay found a game playable with no game joined; not labelling it")
      }
      onJoinedGame(ee, ie) {
        this.replay.takeFullSnapshot();
        const He = (0, Ge.K)(ie),
          ye = yi.e.get("gameEntrySource");
        this.gamesJoined++, this.leaves.gameJoined(), this.flows.gameJoined(this.gamesJoined, ee, "autoReconnect" === ye || "manualReconnect" === ye), "inGame" === yi.e.get("gameState") && this.flows.gamePlayable();
        const be = Fi.clientSidePartyStateManager.getPartyInformation(),
          Me = {
            game_name: (0, Qe.Xb)(ee),
            game_name_with_variation: ee,
            game_number: this.gamesJoined,
            game_analytics_id: (0, ei.c)(ee, He),
            is_custom_game: (0, ii.k)(ee),
            lobby_type: li(ie),
            in_party: null !== be,
            party_size: null === be ? 0 : be.memberSocialPreviews.length + 1
          };
        this.replay.gameJoined(ee, Me), this.replay.capture("game_joined", {
          ...Me,
          entry_source: ye
        }), this.replay.capture("$screen", {
          $screen_name: Me.is_custom_game ? `custom: ${Me.game_analytics_id}` : Me.game_name
        }), this.subscribeToDeaths(ee)
      }
      onLeftGame() {
        this.joinLoad.forgetStart();
        const ee = this.flows.stay;
        null !== ee && (this.replay.capture("game_left", {
          game_name_with_variation: ee.name,
          duration_ms: Date.now() - ee.joinedAtMs
        }), this.flows.gameLeft(), this.replay.gameLeft(), this.unsubscribeDeaths(), this.unsubscribeDeaths = () => {})
      }
      subscribeToDeaths(ee) {
        this.unsubscribeDeaths();
        let ie = !0;
        this.unsubscribeDeaths = bi.gameBridge.subscribe("localPlayerAliveSet", (He => {
          const be = ie && !He;
          if (ie = He, be) {
            this.leaves.quitContext.noteDeath(performance.now());
            const [ie, He, be] = bi.gameBridge.lookup("localPos", null), Me = {
              x: Math.round(ie),
              y: Math.round(He),
              z: Math.round(be)
            }, Ke = this.flows.stay, Ue = null === Ke ? {} : {
              death_number: ++Ke.deaths,
              seconds_since_join: Math.round((Date.now() - Ke.joinedAtMs) / 1e3)
            };
            this.replay.capture("player_died", {
              ...Me,
              game_name_with_variation: ee,
              ...Ue
            }), this.replay.addReplayMarker(ye.h.death, Me)
          }
        }))
      }
      qE() {
        this.health.attachToRender();
        const ee = performance.now(),
          ie = ee - this.lastTickMs,
          He = ie <= 5e3,
          be = this.flows.stay;
        if (null !== be && null !== be.playableAtMs && !document.hidden && He && be.visiblePlayedMs < 6e4 && (be.visiblePlayedMs += ie, be.visiblePlayedMs >= 6e4)) {
          const ie = Math.round(ee);
          this.replay.capture("game_played_60s", {
            game_name_with_variation: be.name,
            ms_since_page_load: ie,
            ...this.firstMinutePlayedSent ? {} : {
              ttff_ms: ie
            }
          }), this.firstMinutePlayedSent = !0, this.flows.played60s()
        }
        this.flows.YR();
        const Me = null !== this.flows.stay && !document.hidden;
        this.replay.addFpsSample(Me && He && this.framesThisTick > 0 ? 1e3 * this.framesThisTick / ie : null);
        const Ke = Me ? Hi.c.getLastColyseusPingMs() : null;
        null !== Ke && this.replay.addPingSample(Ke), this.framesThisTick = 0, this.lastTickMs = ee, this.ticks++, this.ticks % 2 === 0 && (Me && this.inputSinceActiveMarker && this.replay.addReplayMarker(ye.h.active), this.inputSinceActiveMarker = !1), this.replay.markClockIfDue(this.ticks, 30)
      }
    }
    var ni = He(1155),
      ji = He(1141),
      si = He(40584);

    function Ii(ee) {
      return ee.length + 64
    }
    async function Ni() {
      return new Response("{}")
    }

    function Gi(ee, ie, He) {
      return si.g.fetch(ee, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain"
        },
        body: ie,
        signal: (0, ni.v)(3e4)
      }, He)
    }
    class ri {
      constructor(ee) {
        var ie, He, ye;
        let be = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.uploadToken = ee, this.url = void 0, this.post = void 0, this.isHidden = void 0, this.queue = [], this.retries = [], this.refusedTokens = new Set, this.overflowWarned = !1, this.unloading = !1, this.sendScheduled = !1, this.url = null !== (ie = be.url) && void 0 !== ie ? ie : `${ji.clientSideServerUrls.indexUrl}/index/replay/timeline`, this.post = null !== (He = be.post) && void 0 !== He ? He : Gi, this.isHidden = null !== (ye = be.isHidden) && void 0 !== ye ? ye : () => "hidden" === document.visibilityState
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
      add(ee) {
        if (this.refusedTokens.has(this.uploadToken)) return;
        const ie = function(ee) {
            const ie = {
              ...ee.properties
            };
            return void 0 !== ee.$set && (ie.$set = {
              ...ee.properties.$set,
              ...ee.$set
            }), void 0 !== ee.$set_once && (ie.$set_once = {
              ...ee.$set_once,
              ...ee.properties.$set_once
            }), void 0 !== ee.$unset && (ie.$unset = ee.$unset), {
              uuid: ee.uuid,
              event: ee.event,
              timestampMs: ee.timestamp.getTime(),
              properties: JSON.stringify(ie)
            }
          }(ee),
          He = (0, si.i)(JSON.stringify(ie));
        ie.properties.length > 32768 || ie.event.length > 64 || Ii(this.uploadToken) + He > 102400 ? console.warn(`Session replay timeline event ${ie.event.slice(0,64)} is too large for index-server; dropped.`) : (this.queue.push({
          uploadToken: this.uploadToken,
          event: ie,
          bytes: He,
          attempts: 0
        }), this.trimToCap(), this.queue.length >= 50 ? this.sendQueued() : (this.unloading || this.isHidden()) && this.sendSoon())
      }
      sendSoon() {
        this.sendScheduled || (this.sendScheduled = !0, queueMicrotask((() => {
          this.sendScheduled = !1, this.sendQueued()
        })))
      }
      flush() {
        this.retries.length > 0 && (this.queue = [...this.retries, ...this.queue].sort(((ee, ie) => ee.event.timestampMs - ie.event.timestampMs)), this.retries = []), this.sendQueued()
      }
      sendQueued() {
        for (; this.queue.length > 0;) {
          const ee = this.takeBatch();
          this.refusedTokens.has(ee.uploadToken) || this.send(ee)
        }
      }
      trimToCap() {
        let ee = this.retries.length + this.queue.length - 1e3;
        if (ee <= 0) return void(this.overflowWarned = !1);
        const ie = Math.min(ee, this.retries.length);
        this.retries.splice(0, ie), ee -= ie, this.queue.splice(0, ee), this.overflowWarned || (this.overflowWarned = !0, console.warn("Session replay timeline queue is full; dropping its oldest events until it drains."))
      }
      takeBatch() {
        const ee = this.queue.shift(),
          ie = [ee];
        let He = Ii(ee.uploadToken) + ee.bytes;
        for (; this.queue.length > 0 && ie.length < 100 && this.queue[0].uploadToken === ee.uploadToken && He + this.queue[0].bytes <= 32768;) {
          const ee = this.queue.shift();
          ie.push(ee), He += ee.bytes
        }
        return {
          uploadToken: ee.uploadToken,
          events: ie
        }
      }
      async send(ee) {
        const ie = await this.sendOnce(ee);
        if ("refused" === ie && this.refusedTokens.add(ee.uploadToken), "retryLater" !== ie) return;
        const He = ee.events.filter((ee => ++ee.attempts < 3));
        He.length < ee.events.length && console.error(`Session replay timeline: dropped ${ee.events.length-He.length} events after 3 attempts.`), this.retries.push(...He), this.trimToCap()
      }
      async sendOnce(ee) {
        const ie = {
            uploadToken: ee.uploadToken,
            sentAtMs: Date.now(),
            events: ee.events.map((ee => ee.event))
          },
          He = JSON.stringify(ie);
        let ye, be = null;
        try {
          ye = await this.post(this.url, He, (0, si.i)(He)), ye.ok && (be = await ye.json())
        } catch (Me) {
          return console.warn("Session replay timeline upload failed.", Me), "retryLater"
        }
        return null === be ? 408 === ye.status || 429 === ye.status || ye.status >= 500 ? "retryLater" : (console.error(`Session replay timeline upload failed with ${ye.status}; dropped ${ee.events.length} events.`), "dropped") : "rejected" in be ? be.retryable ? "retryLater" : (console.warn(`Session replay timeline refused: ${be.reason}; dropping this recording's events.`), "refused") : "sent"
      }
    }
    var Qi = He(40602),
      eH = He(5086),
      iH = He(1268);
    class HH {
      constructor(ee) {
        var ie;
        this.tags = new Ne, this.fpsMonitor = void 0, this.errorLogLink = void 0, this.lastTagsJson = "", this.clockMarked = !1, this.personUpdateTimer = null, this.expectedSessionId = "", this.recorderPatched = !1, this.gameContextKeys = [], this.firstGameJoined = !1, this.timeline = void 0, this.onDomBatch = void 0;
        const {
          recording: He
        } = ee;
        this.onDomBatch = ee.onDomBatch;
        const Ke = null !== ee.onDomBatch;
        Ke && this.patchRecorder(), this.timeline = new ri(He.uploadToken, ee.dryRun ? {
            post: Ni
          } : {}), this.timeline.start(),
          function(ee) {
            const ie = {
                supportedCompression: [be.c.GZipJS],
                hasFeatureFlags: !1,
                sessionRecording: {
                  endpoint: "/s/"
                },
                siteApps: [],
                toolbarParams: {},
                toolbarVersion: "toolbar",
                isAuthenticated: !1
              },
              He = window;
            He._POSTHOG_REMOTE_CONFIG = {
              ...He._POSTHOG_REMOTE_CONFIG,
              [ee]: {
                config: ie
              }
            }
          }(ee.posthog.projectApiKey), be.e.init(ee.posthog.projectApiKey, Le({
            apiHost: ee.posthog.apiHost,
            recordingId: He.recordingId,
            recordDom: Ke,
            ownOrigins: [window.location.origin, new URL(ji.clientSideServerUrls.s3Url, window.location.href).origin],
            anonymised: He.anonymised,
            showsChat: (0, ye.q)(He),
            allowAutomatedBrowsers: (0, eH.d)((0, eH.i)(), !1),
            onTimelineEvent: ee => {
              this.timeline.add(ee), "$pageview" === ee.event && ee.properties.$current_url && this.addReplayMarker("$pageview", {
                href: ee.properties.$current_url
              })
            },
            onDomBatch: ee => {
              this.takeDomBatch(ee)
            }
          })), Ke && be.e.startSessionRecording({
            sampling: !0
          }), this.expectedSessionId = He.recordingId, be.e.onSessionId((ee => {
            ee !== this.expectedSessionId && console.warn(`Session replay: PostHog session ${ee} differs from recording ${this.expectedSessionId}; events carry recording_id.`)
          })),
          function(ee, ie) {
            const {
              recording: He
            } = ee, ye = {
              ...He.tags,
              site_used: ue.siteUsed,
              subsite_used: null !== ue.subsiteUsed && void 0 !== ue.subsiteUsed ? ue.subsiteUsed : "",
              is_iframed: ue.isIframed,
              entry_path: location.pathname,
              ...me(),
              ...Se(He, ie),
              client_build: ve.b
            };
            be.e.register(ye), null !== ee.videoStatus && be.e.register({
              replay_video_status: ee.videoStatus
            }), be.e.setPersonProperties(ye, {
              ...ne("initial_", ye),
              ...le(He)
            })
          }(ee, Ke), this.fpsMonitor = new Me.c({
            onEpisodeStarted: ee => {
              this.capture("low_fps_started", {
                avg_fps: Math.round(ee)
              }), Mi.h.yR("sessionReplayLowFps", {
                low: !0
              })
            },
            onEpisodeEnded: ee => {
              this.capture("low_fps_episode", {
                duration_ms: ee.durationMs,
                min_fps: ee.minFps,
                avg_fps: ee.avgFps
              }), Mi.h.yR("sessionReplayLowFps", {
                low: !1
              })
            }
          }), this.errorLogLink = new Ie({
            dashboardHost: null !== (ie = ee.posthog.dashboardHost) && void 0 !== ie ? ie : ee.posthog.apiHost,
            recordingId: He.recordingId,
            getSessionId: () => be.e.get_session_id(),
            domRecorded: Ke,
            captureError: (ee, ie) => {
              this.captureClientError("logged", ee, ie)
            }
          }), (0, iH.annotateLoggedErrors)(((ee, ie) => this.errorLogLink.annotate(ee, ie))), new Si(this).start()
      }
      capture(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        be.e.capture(ee, ie)
      }
      captureAt(ee, ie, He) {
        be.e.capture(ee, ie, {
          timestamp: new Date(He)
        })
      }
      captureOnExit(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        be.e.capture(ee, ie, {
          timestamp: new Date(He)
        })
      }
      captureClientError(ee, ie, He) {
        this.setFlag("had_error"), this.capture("client_error", {
          kind: ee,
          message: ze(ie).slice(0, 300),
          source: null,
          error_name: null,
          ...He
        })
      }
      takeFullSnapshot() {
        if (this.tryFullSnapshot()) return;
        const ee = performance.now() + 1500,
          ie = setInterval((() => {
            (this.tryFullSnapshot() || performance.now() >= ee) && clearInterval(ie)
          }), 100)
      }
      setVideoStatus(ee, ie) {
        be.e.register({
          replay_video_status: ee
        });
        const He = "stopped_cellular" === ee ? "cellular" : "stopped_error" === ee ? "error" : null;
        null !== He && (this.capture("replay_video_stopped", {
          reason: He,
          detail: null === ie ? null : ze(ie).slice(0, 300)
        }), this.addReplayMarker("replay_video_stopped", {
          reason: He
        }))
      }
      stopDomRecording() {
        be.e.stopSessionRecording(), be.e.register({
          dom_recorded: !1
        })
      }
      optOut() {
        this.stopDomRecording(), be.e.set_config({
          before_send: () => null
        })
      }
      takeDomBatch(ee) {
        null !== this.onDomBatch ? this.onDomBatch(ee) : console.warn("Session replay: posthog-js recorded the page of an events-only recording; dropped it")
      }
      tryFullSnapshot() {
        var ee;
        return !(null === (ee = be.e.sessionRecording) || void 0 === ee || !ee.started) && (Ce().rrweb.record.takeFullSnapshot(), !0)
      }
      patchRecorder() {
        this.recorderPatched || (this.recorderPatched = !0, function() {
          const ee = Ce().rrwebPlugins,
            ie = ee.getRecordConsolePlugin;
          ee.getRecordConsolePlugin = () => ie({
            level: ["warn", "error", "assert"]
          })
        }(), this.markClockOnFullSnapshots())
      }
      markClockOnFullSnapshots() {
        const ee = Ce().rrweb.record,
          ie = ee.takeFullSnapshot;
        ee.takeFullSnapshot = ee => {
          ie(ee), this.markClock()
        }
      }
      markClock() {
        this.clockMarked = this.addReplayMarker(ye.h.clock, {
          epochMs: (0, Qi.e)(),
          perfNowMs: performance.now()
        }) || this.clockMarked
      }
      markClockIfDue(ee, ie) {
        this.clockMarked && ee % ie !== 0 || this.markClock()
      }
      addReplayMarker(ee) {
        var ie, He;
        let ye = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (!(arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) || be.e.sessionRecordingStarted()) && null !== (ie = null === (He = be.e.sessionRecording) || void 0 === He ? void 0 : He.tryAddCustomEvent(ee, ye)) && void 0 !== ie && ie
      }
      gameJoined(ee, ie) {
        this.unregisterGameContext(), this.gameContextKeys = Object.keys(ie), be.e.register(ie), this.firstGameJoined || (this.firstGameJoined = !0, be.e.setPersonProperties(void 0, {
          first_game_ever: ie.game_name,
          first_game_ever_with_variation: ie.game_name_with_variation,
          first_game_ever_analytics_id: ie.game_analytics_id
        })), this.tags.gameJoined(ee, Date.now()), this.updateTags()
      }
      gameLeft() {
        this.unregisterGameContext(), this.tags.gameLeft(Date.now()), this.fpsMonitor.endEpisode(Date.now()), this.updateTags()
      }
      setFlag(ee) {
        this.tags.setFlag(ee) && this.updateTags()
      }
      addHitch(ee) {
        this.tags.addHitch(ee) && this.updateTags()
      }
      setSessionProperties(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        be.e.register(ee), ie && be.e.setPersonProperties(ee)
      }
      addPingSample(ee) {
        this.tags.addPingSample(ee) && this.updateTags()
      }
      addFpsSample(ee) {
        this.fpsMonitor.addSample(ee, Date.now());
        const ie = this.fpsMonitor.getTags();
        null !== ie && (this.tags.setFpsTags(ie), this.updateTags())
      }
      addUnboundKeyPresses(ee) {
        this.tags.addUnboundKeyPresses(ee), this.updateTags()
      }
      finalTags() {
        return this.fpsMonitor.endEpisode(Date.now()), this.tags.toProperties(Date.now())
      }
      updateTags() {
        const ee = this.tags.toProperties(),
          ie = JSON.stringify(ee);
        ie !== this.lastTagsJson && (this.lastTagsJson = ie, be.e.register(ee), null === this.personUpdateTimer && (this.personUpdateTimer = setTimeout((() => {
          this.personUpdateTimer = null, be.e.setPersonProperties(this.tags.toProperties())
        }), 0)))
      }
      unregisterGameContext() {
        for (const ee of this.gameContextKeys) be.e.unregister(ee);
        this.gameContextKeys = []
      }
    }
  },
  40602: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me
    });
    const ye = 20;
    let be = Date.now() - performance.now();

    function Me() {
      const ee = performance.now(),
        ie = Date.now();
      return Math.abs(ie - (ee + be)) > ye && (be = ie - ee), ee + be
    }
  },
  40584: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye,
      g: () => Me,
      i: () => be
    });
    const ye = 32768;

    function be(ee) {
      return (new TextEncoder).encode(ee).byteLength
    }
    const Me = new class {
      constructor() {
        this.inFlightBytes = 0, this.inFlightLabels = new Map
      }
      async fetch(ee, ie, He, ye) {
        if (this.inFlightBytes + He > 49152) return await fetch(ee, ie);
        this.inFlightBytes += He, this.countLabel(ye, 1);
        const be = () => {
          this.inFlightBytes -= He, this.countLabel(ye, -1)
        };
        let Me;
        try {
          Me = await fetch(ee, {
            ...ie,
            keepalive: !0
          })
        } catch (Ue) {
          var Ke;
          if (be(), null !== (Ke = ie.signal) && void 0 !== Ke && Ke.aborted) throw Ue;
          return console.info("Session replay keepalive request failed; retrying without keepalive.", Ue), await fetch(ee, ie)
        }
        return be(), Me
      }
      isInFlight(ee) {
        var ie;
        return (null !== (ie = this.inFlightLabels.get(ee)) && void 0 !== ie ? ie : 0) > 0
      }
      sendBeacon(ee, ie) {
        const He = be(ie);
        return !(this.inFlightBytes + He > 57344) && this.beaconSent(navigator.sendBeacon(ee, new Blob([ie], {
          type: "text/plain"
        })), He)
      }
      sendUploadBeacon(ee, ie, He) {
        return !(this.inFlightBytes + He > 40960) && this.beaconSent(navigator.sendBeacon(ee, ie), He)
      }
      countLabel(ee, ie) {
        var He;
        void 0 !== ee && this.inFlightLabels.set(ee, (null !== (He = this.inFlightLabels.get(ee)) && void 0 !== He ? He : 0) + ie)
      }
      beaconSent(ee, ie) {
        return ee && (this.inFlightBytes += ie, setTimeout((() => {
          this.inFlightBytes -= ie
        }), 1e4)), ee
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);