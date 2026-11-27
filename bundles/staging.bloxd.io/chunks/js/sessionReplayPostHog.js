export const id = 62;
export const ids = [62];
export const modules = {
  41455: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      ReplayPostHog: () => rQ
    });
    var Zr = Qr(4635),
      Wr = Qr(41464),
      ar = Qr(41444);
    const jr = new Set(["partycode", "lobby", "vm", "invite", "invitecode", "code", "token", "access_token", "id_token", "refresh_token", "auth", "key", "state", "ticket", "jointicket", "secret", "password", "sig", "signature"]),
      Ir = new Set(["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "bfcid", "irclid", "_kx", "_gl", "yclid", "srsltid", "mc_eid", "s_kwcid", "ef_id", "_hsenc", "mkt_tok"]),
      fr = "redacted",
      Er = /([?&#])([^=&#?\s"']+)=([^&#?\s"'<>\\]*)/g,
      pr = /(\/play\/[^/?#\s"'<>\\]+\/)[^/?#\s"'<>\\]+/gi,
      xr = /\/play\//i,
      mr = /lobby|party/i;

    function Nr(rr) {
      try {
        return decodeURIComponent(rr)
      } catch {
        return null
      }
    }

    function Ur(rr) {
      const Sr = rr.includes("%") ? Nr(rr) : null;
      if (null === Sr || Sr === rr) return rr;
      let Qr = tr(`?${Sr}`).slice(1);
      return Qr === Sr && (Qr = Ur(Sr)), Qr === Sr ? rr : encodeURIComponent(Qr)
    }

    function tr(rr) {
      return rr.includes("=") || xr.test(rr) ? rr.replace(Er, ((rr, Sr, Qr, Zr) => {
        var Wr;
        const ar = (null !== (Wr = Nr(Qr)) && void 0 !== Wr ? Wr : Qr).toLowerCase();
        if (jr.has(ar)) return `${Sr}${Qr}=${fr}`;
        if (Ir.has(ar) && "" !== Zr) return `${Sr}${Qr}=<masked>`;
        const Er = Ur(Zr);
        return Er === Zr ? rr : `${Sr}${Qr}=${Er}`
      })).replace(pr, `$1${fr}`) : rr
    }
    const hr = new Set(["href", "src", "srcset", "action", "formaction", "poster", "xlink:href"]);

    function zr(rr, Sr) {
      return hr.has(rr.toLowerCase()) ? tr(Sr) : Sr
    }

    function Yr(rr) {
      return mr.test(rr) ? fr : tr(rr)
    }

    function nr(rr) {
      if (rr)
        for (const [Sr, Qr] of Object.entries(rr)) "string" === typeof Qr && (rr[Sr] = tr(Qr))
    }

    function er(rr) {
      var Sr;
      Array.isArray(rr.payload) && (rr.payload = (Sr = rr.payload).some((rr => "string" === typeof rr && mr.test(rr))) ? [JSON.stringify(fr)] : Sr.map((rr => "string" === typeof rr ? tr(rr) : rr))), Array.isArray(rr.trace) && (rr.trace = rr.trace.map((rr => "string" === typeof rr ? tr(rr) : rr)))
    }

    function Kr(rr) {
      if (null === rr) return null;
      const Sr = rr.properties.$snapshot_data;
      return nr(rr.properties), nr(rr.properties.$set), nr(rr.properties.$set_once), nr(rr.$set), nr(rr.$set_once),
        function(rr) {
          if (Array.isArray(rr))
            for (const Sr of rr) {
              const rr = null === Sr || void 0 === Sr ? void 0 : Sr.data;
              if (!rr || "object" !== typeof rr) continue;
              "string" === typeof rr.href && (rr.href = tr(rr.href));
              const Qr = rr.payload;
              Qr && "object" === typeof Qr && (Sr.type === Zr.d.Plugin && "string" === typeof rr.plugin && rr.plugin.includes("console") ? er(Qr) : nr(Qr))
            }
        }(Sr), rr
    }
    const yr = new Set(["class", "id", "rel", "type", "role", "tabindex", "width", "height", "dir", "lang", "disabled", "hidden", "checked", "selected", "readonly", "draggable", "media", "charset", "crossorigin", "aria-hidden", "aria-expanded", "aria-selected", "aria-pressed", "aria-checked", "aria-disabled", "xmlns", "viewbox", "d", "fill", "stroke", "stroke-width", "transform", "x", "y", "cx", "cy", "r", "points", "x1", "y1", "x2", "y2", "rx", "ry", "opacity", "fill-rule", "clip-rule", "stroke-linecap", "stroke-linejoin", "preserveaspectratio", "xmlns:xlink", "colspan", "rowspan"]),
      Br = new Set(["_csstext", "rr_width", "rr_height", "rr_left", "rr_top", "rr_position", "rr_transform", "rr_display", "rr_scrollleft", "rr_scrolltop", "rr_mediastate", "rr_open_mode"]),
      Tr = new Set(["data-pad-key", "data-pad-repeat"]),
      vr = new Set(["href", "src", "srcset", "xlink:href"]),
      Or = new Set(["title", "$title", "message", "detail", "game_display_name"]),
      Lr = "img, picture, video";

    function lr(rr, Sr, Qr) {
      const Zr = rr.toLowerCase();
      return "style" === Zr ? Sr.replace(/url\((?:"[^"]*"|'[^']*'|[^)]*)\)/gi, "none") : vr.has(Zr) && "A" !== Qr.tagName ? zr(rr, Sr) : yr.has(Zr) || Br.has(Zr) || Zr.startsWith("data-pad-") && !Tr.has(Zr) ? Sr : Sr.replace(/\S/g, "*")
    }

    function Xr(rr) {
      if (!/^(https?:\/\/|\/)/i.test(rr)) return rr;
      let Sr;
      try {
        Sr = new URL(rr, "https://bloxd.invalid")
      } catch {
        return rr
      }
      const [Qr = "", ...Zr] = Sr.pathname.split("/").slice(1), Wr = `/${Qr}${Zr.some((rr=>""!==rr))?"/*":""}`;
      return rr.startsWith("/") ? Wr : `${Sr.origin}${Wr}`
    }

    function Pr(rr) {
      if (rr)
        for (const [Sr, Qr] of Object.entries(rr)) Or.has(Sr) ? delete rr[Sr] : "string" === typeof Qr && (rr[Sr] = Xr(Qr))
    }

    function Hr(rr) {
      ! function(rr) {
        if (Array.isArray(rr))
          for (const Sr of rr) {
            const rr = null === Sr || void 0 === Sr ? void 0 : Sr.data;
            rr && "object" === typeof rr && ("string" === typeof rr.href && (rr.href = Xr(rr.href)), rr.payload && "object" === typeof rr.payload && Pr(rr.payload))
          }
      }(rr.properties.$snapshot_data), Pr(rr.properties), "$screen" === rr.event && String(rr.properties.$screen_name).startsWith("custom: ") && (rr.properties.$screen_name = `custom: ${String(rr.properties.game_analytics_id)}`), Pr(rr.properties.$set), Pr(rr.properties.$set_once), Pr(rr.$set), Pr(rr.$set_once)
    }
    const qr = Zr.i.map((rr => `.${rr}`)).join(", "),
      Rr = ["iframe", "script", 'link:not([rel~="stylesheet"])', ".AdBannerContainer > [id]", "#GenericVideoInner", "ins.adsbygoogle", '[id^="google_ads_"]'],
      gr = [".PadKeyboardPreviewText", ".PadKeyboardPhraseRow"].join(", ");

    function Cr(rr, Sr) {
      return null !== Sr && void 0 !== Sr && Sr.closest(qr) ? rr : rr.replace(/\S/g, "*")
    }

    function Mr(rr) {
      const Sr = function(rr) {
        return rr.anonymised ? {
          enable_recording_console_log: !1,
          session_recording: {
            blockSelector: [...Rr, Lr].join(", "),
            maskTextSelector: "*",
            maskTextFn: rr.showsChat ? Cr : null,
            maskAttributeFn: lr
          }
        } : {
          enable_recording_console_log: !0,
          session_recording: {
            blockSelector: [...Rr, (Sr = rr.ownOrigins, `img[src^="http"]${Sr.map((rr=>`:not([src^="${rr}/"])`)).join("")}`)].join(", "),
            maskTextSelector: rr.showsChat ? gr : `${gr}, ${qr}`,
            maskAttributeFn: zr
          }
        };
        var Sr
      }(rr);
      return {
        api_host: rr.apiHost,
        persistence: "memory",
        bootstrap: {
          distinctID: rr.recordingId,
          isIdentifiedID: !1,
          sessionID: rr.recordingId
        },
        person_profiles: "always",
        mask_personal_data_properties: !0,
        custom_personal_data_properties: [...Ir],
        session_idle_timeout_seconds: 36e3,
        disable_external_dependency_loading: !0,
        opt_out_useragent_filter: rr.allowAutomatedBrowsers,
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
        enable_recording_console_log: Sr.enable_recording_console_log,
        before_send: Sr => {
          const Qr = Kr(Sr);
          return null === Qr || (rr.anonymised && Hr(Qr), "$snapshot" === Qr.event ? function(rr, Sr) {
            const {
              $snapshot_data: Qr,
              $window_id: Zr
            } = rr.properties;
            try {
              Sr({
                windowId: Zr,
                events: Qr
              })
            } catch (Wr) {
              console.error("Session replay couldn't take a page recording batch.", Wr)
            }
          }(Qr, rr.onDomBatch) : rr.onTimelineEvent(Qr)), null
        },
        disable_session_recording: !rr.recordDom,
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
          ...Sr.session_recording
        }
      }
    }

    function Gr() {
      return window.__PosthogExtensions__
    }
    var kr = Qr(692),
      Ar = Qr(139);

    function Vr() {
      var rr;
      const Sr = navigator,
        Qr = new Date;
      return {
        local_hour: Qr.getHours(),
        local_weekday: Qr.getDay(),
        ...Sr.hardwareConcurrency ? {
          cpu_cores: Sr.hardwareConcurrency
        } : {},
        ...Sr.deviceMemory ? {
          device_memory_gb: Sr.deviceMemory
        } : {},
        ...null !== (rr = Sr.connection) && void 0 !== rr && rr.effectiveType ? {
          network_type: Sr.connection.effectiveType
        } : {}
      }
    }

    function ir(rr) {
      var Sr;
      const Qr = rr.tags;
      return {
        panel_entry_reason: null !== (Sr = Qr.recording_reason) && void 0 !== Sr ? Sr : "unknown",
        panel_entry_date: (new Date).toISOString().slice(0, 10),
        ...void 0 === Qr.sample_rate ? {} : {
          panel_entry_sample_rate: Qr.sample_rate
        }
      }
    }

    function wr(rr, Sr) {
      return {
        recording_id: rr.recordingId,
        recording_scopes: rr.scopes.join(","),
        dom_recorded: Sr
      }
    }

    function cr(rr, Sr) {
      const Qr = {};
      for (const [Zr, Wr] of Object.entries(Sr)) Qr[`${rr}${Zr}`] = Wr;
      return Qr
    }
    class Fr {
      constructor(rr) {
        this.options = rr, this.buckets = new Map, this.lastEvictionMs = -1 / 0
      }
      allow(rr, Sr) {
        this.evictExpired(rr, Sr);
        let Qr = this.buckets.get(rr);
        var Zr, Wr;
        (void 0 === Qr || Sr - Qr.startMs >= this.options.windowMs) && (Qr = {
          startMs: Sr,
          count: 0,
          suppressed: null !== (Zr = null === (Wr = Qr) || void 0 === Wr ? void 0 : Wr.suppressed) && void 0 !== Zr ? Zr : 0
        }, this.buckets.set(rr, Qr));
        if (Qr.count >= this.options.maxPerWindow) return Qr.suppressed++, null;
        Qr.count++;
        const ar = Qr.suppressed;
        return Qr.suppressed = 0, ar
      }
      evictExpired(rr, Sr) {
        if (!(Sr - this.lastEvictionMs < this.options.windowMs)) {
          this.lastEvictionMs = Sr;
          for (const [Qr, Zr] of this.buckets) {
            const Wr = (Sr - Zr.startMs) / this.options.windowMs;
            Qr !== rr && Wr >= (0 === Zr.suppressed ? 1 : 10) && this.buckets.delete(Qr)
          }
        }
      }
    }

    function or(rr, Sr, Qr) {
      const Zr = new URL(rr);
      return Zr.pathname = `${Zr.pathname.replace(/\/+$/,"")}/replay/${encodeURIComponent(Sr)}`, Zr.searchParams.set("timestamp", String(Math.round(Qr - 5e3))), Zr.toString()
    }
    class br {
      constructor(rr) {
        this.options = rr, this.throttle = new Fr({
          maxPerWindow: 3,
          windowMs: 6e4
        })
      }
      annotate(rr, Sr) {
        const Qr = Date.now(),
          Zr = this.throttle.allow("logged", Qr);
        var Wr;
        null !== Zr && this.options.captureError(rr.message || rr.name, {
          error_name: rr.name || null,
          error_fingerprint: null !== (Wr = Sr.fingerprint) && void 0 !== Wr ? Wr : null,
          suppressed_since_last: Zr
        });
        return {
          replay_recording_id: this.options.recordingId,
          ...this.options.domRecorded ? {
            replay_url: or(this.options.dashboardHost, this.options.getSessionId(), Qr)
          } : {}
        }
      }
    }

    function Jr(rr) {
      return rr < 50 ? "<50" : rr < 100 ? "50-100" : rr < 200 ? "100-200" : rr < 400 ? "200-400" : "400+"
    }
    class Dr {
      constructor() {
        this.gamesJoined = [], this.flags = new Set, this.firstGame = null, this.fpsTags = null, this.maxHitchMs = 0, this.pingSumMs = 0, this.pingSamples = 0, this.maxPingMs = 0, this.unboundKeyPresses = new Map
      }
      gameJoined(rr, Sr) {
        this.gamesJoined.includes(rr) || this.gamesJoined.push(rr), null === this.firstGame && (this.firstGame = {
          joinedAtMs: Sr,
          leftAtMs: null
        })
      }
      gameLeft(rr) {
        null !== this.firstGame && null === this.firstGame.leftAtMs && (this.firstGame.leftAtMs = rr)
      }
      setFlag(rr) {
        return !this.flags.has(rr) && (this.flags.add(rr), !0)
      }
      setFpsTags(rr) {
        this.fpsTags = rr
      }
      addHitch(rr) {
        return !(rr <= this.maxHitchMs) && (this.maxHitchMs = rr, !0)
      }
      addPingSample(rr) {
        const Sr = this.pingTags();
        this.pingSumMs += rr, this.pingSamples++, this.maxPingMs = Math.max(this.maxPingMs, rr);
        const Qr = this.pingTags();
        return (null === Sr || void 0 === Sr ? void 0 : Sr.ping_avg_bucket) !== (null === Qr || void 0 === Qr ? void 0 : Qr.ping_avg_bucket) || (null === Sr || void 0 === Sr ? void 0 : Sr.ping_max_bucket) !== (null === Qr || void 0 === Qr ? void 0 : Qr.ping_max_bucket)
      }
      addUnboundKeyPresses(rr) {
        for (const [Qr, Zr] of rr) {
          var Sr;
          this.unboundKeyPresses.set(Qr, (null !== (Sr = this.unboundKeyPresses.get(Qr)) && void 0 !== Sr ? Sr : 0) + Zr)
        }
      }
      toProperties() {
        var rr;
        let Sr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return {
          ...{
            first_game: null !== (rr = this.gamesJoined[0]) && void 0 !== rr ? rr : "",
            games_joined: this.gamesJoined.join(","),
            games_joined_count: this.gamesJoined.length,
            quick_quit: this.isQuickQuit(Sr),
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
        let rr = 0,
          Sr = "",
          Qr = 0;
        for (const [Zr, Wr] of this.unboundKeyPresses) rr += Wr, (Wr > Qr || Wr === Qr && Zr < Sr) && (Sr = Zr, Qr = Wr);
        return {
          unbound_key_presses: rr,
          top_unbound_key: Sr
        }
      }
      pingTags() {
        return 0 === this.pingSamples ? null : {
          ping_avg_bucket: Jr(this.pingSumMs / this.pingSamples),
          ping_max_bucket: Jr(this.maxPingMs)
        }
      }
      isQuickQuit(rr) {
        var Sr;
        if (null === this.firstGame) return !1;
        const Qr = null !== (Sr = this.firstGame.leftAtMs) && void 0 !== Sr ? Sr : rr;
        return null !== Qr && Qr - this.firstGame.joinedAtMs < Zr.m
      }
    }
    var dr = Qr(1279),
      sr = Qr(1131),
      ur = Qr(379),
      rS = Qr(1133),
      SS = Qr(1127),
      QS = Qr(3868),
      ZS = Qr(26),
      WS = Qr(2089),
      aS = Qr(34),
      jS = Qr(1422),
      IS = Qr(1364),
      fS = Qr(1635),
      ES = Qr(2329),
      pS = Qr(1758),
      xS = Qr(41430),
      mS = Qr(109),
      NS = Qr(41427),
      US = Qr(1385);
    class tS {
      constructor(rr, Sr, Qr) {
        this.replay = rr, this.quitContext = Sr, this.flows = Qr, this.errorThrottle = new Fr({
          maxPerWindow: 3,
          windowMs: 6e4
        }), this.hitchThrottle = new Fr({
          maxPerWindow: 5,
          windowMs: 6e4
        }), this.attachedToRender = !1
      }
      start() {
        window.addEventListener("error", (rr => {
            const Sr = rr.error;
            this.captureError("error", rr.message, rr.filename ? `${rr.filename}:${rr.lineno}:${rr.colno}` : null, Sr instanceof Error ? Sr.name : null, (0, NS.d)(rr))
          })), window.addEventListener("unhandledrejection", (rr => {
            const Sr = rr.reason;
            this.captureError("unhandled_rejection", Sr instanceof Error ? Sr.message : String(Sr), null, Sr instanceof Error ? Sr.name : null, (0, NS.d)(rr))
          })), aS.i.subscribe("unrecoverableError", (rr => {
            this.captureError("unrecoverable", rr, null, null, !0)
          })),
          function(rr) {
            var Sr, Qr;
            if ("undefined" === typeof PerformanceObserver || null === (Sr = null === (Qr = PerformanceObserver.supportedEntryTypes) || void 0 === Qr ? void 0 : Qr.includes("long-animation-frame")) || void 0 === Sr || !Sr) return;
            let Zr = null;
            new PerformanceObserver((Sr => {
              for (const ar of Sr.getEntries()) {
                var Qr, Wr;
                const Sr = ar,
                  jr = !(null !== Zr && Sr.startTime - Zr.endMs < 50) || Sr.duration >= 3 * (null !== (Qr = null === (Wr = Zr) || void 0 === Wr ? void 0 : Wr.durationMs) && void 0 !== Qr ? Qr : 0);
                Zr = {
                  endMs: Sr.startTime + Sr.duration,
                  durationMs: Sr.duration
                }, !document.hidden && Sr.duration >= 100 && jr && rr({
                  frameMs: Sr.duration,
                  mainThreadMs: (0, US.o)(Sr)
                })
              }
            })).observe({
              type: "long-animation-frame"
            })
          }((rr => {
            this.onFrameHitch(rr)
          }))
      }
      attachToRender() {
        if (this.attachedToRender) return;
        const rr = (0, IS.U)().gameRender();
        null !== rr && (this.attachedToRender = !0, this.replay.setSessionProperties(Object.fromEntries([
          ["renderer", rr.renderer],
          ["gpu_vendor", (0, mS.getGpuVendor)()]
        ])), rr.canvas.addEventListener("webglcontextlost", (() => {
          this.replay.setFlag("had_error"), this.replay.capture("webgl_context_lost")
        })), rr.canvas.addEventListener("webglcontextrestored", (() => {
          this.replay.capture("webgl_context_restored")
        })))
      }
      captureError(rr, Sr, Qr, Wr, ar) {
        const jr = Yr(Sr).slice(0, 300);
        ar && null !== this.flows.stay && this.quitContext.noteError(performance.now());
        const Ir = this.errorThrottle.allow(`${rr}:${jr}`, Date.now());
        null !== Ir && (this.replay.captureClientError(rr, jr, {
          source: Qr,
          error_name: Wr,
          suppressed_since_last: Ir
        }), this.replay.addReplayMarker(Zr.l.error, {
          kind: rr,
          message: jr
        }))
      }
      onFrameHitch(rr) {
        let {
          frameMs: Sr,
          mainThreadMs: Qr
        } = rr;
        const Zr = this.flows.stay;
        if (null === Zr || null === Zr.playableAtMs || performance.now() - Zr.playableAtMs < 2e3) return;
        (0, pS.l)() || this.quitContext.noteHitch(performance.now()), this.replay.addHitch(Math.round(Sr));
        const Wr = this.hitchThrottle.allow("frame_hitch", Date.now());
        null !== Wr && this.replay.capture("frame_hitch", {
          ef: Math.round(Sr),
          main_thread_ms: Math.round(Qr),
          game_name_with_variation: Zr.name,
          suppressed_since_last: Wr
        })
      }
    }
    var hS = Qr(7464),
      zS = Qr(360);
    class YS {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.steps = rr, this.furthestIndex = -1, this.heldIndex = -1, this.gateIndex = void 0, this.gateIndex = null === Sr ? 1 / 0 : rr.indexOf(Sr)
      }
      reach(rr) {
        const Sr = this.steps.indexOf(rr);
        if (Sr > this.gateIndex && this.furthestIndex < this.gateIndex) return this.heldIndex = Math.max(this.heldIndex, Sr), null;
        const Qr = Sr === this.gateIndex ? Math.max(Sr, this.heldIndex) : Sr;
        return Qr <= this.furthestIndex ? null : (this.furthestIndex = Qr, Qr)
      }
      get furthest() {
        return -1 === this.furthestIndex ? null : this.steps[this.furthestIndex]
      }
      get furthestStepIndex() {
        return this.furthestIndex
      }
    }
    const nS = {
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
    class eS {
      constructor(rr) {
        this.threshold = rr, this.times = [], this.armed = !0, this.lastAtMs = -1 / 0
      }
      note(rr) {
        const {
          count: Sr,
          windowMs: Qr
        } = this.threshold;
        if (!this.armed && rr - this.lastAtMs >= Qr && (this.armed = !0), this.lastAtMs = rr, !this.armed) return !1;
        for (this.times.push(rr); this.times.length > 0 && rr - this.times[0] >= Qr;) this.times.shift();
        return !(this.times.length < Sr) && (this.times.length = 0, this.armed = !1, !0)
      }
    }
    class KS {
      constructor(rr) {
        this.onSignal = rr, this.bursts = new Map, this.seen = [], this.signalCount = 0, this.idleCounted = !1;
        for (const [Sr, Qr] of Object.entries(nS)) this.bursts.set(Sr, new eS(Qr))
      }
      note(rr, Sr) {
        if (this.bursts.get(rr).note(Sr)) {
          const {
            count: Sr,
            windowMs: Qr
          } = nS[rr];
          this.signal(rr, Sr, Qr)
        }
      }
      checkIdle(rr) {
        let {
          nowMs: Sr,
          lastInputAtMs: Qr,
          pointerLocked: Zr,
          playable: Wr,
          visible: ar
        } = rr;
        Sr - (null !== Qr && void 0 !== Qr ? Qr : 0) < 3e4 ? this.idleCounted = !1 : !this.idleCounted && Zr && Wr && ar && (this.idleCounted = !0, this.signal("idle_pointer_locked", 1, 3e4))
      }
      tags() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Sr = rr && !this.seen.includes("rage_quit") ? [...this.seen, "rage_quit"] : this.seen;
        return {
          frustration_score: this.signalCount + (rr ? 1 : 0),
          frustration_signals: Sr.join(",")
        }
      }
      signal(rr, Sr, Qr) {
        this.signalCount++, this.seen.includes(rr) || this.seen.push(rr), this.onSignal(rr, Sr, Qr)
      }
    }
    const yS = hS.e.indexOf("first_input"),
      BS = hS.e.indexOf("first_move"),
      TS = {
        keyboardMouse: "keyboard",
        touch: "touch",
        gamepad: "pad"
      };
    class vS {
      constructor(rr, Sr, Qr) {
        this.replay = rr, this.quitContext = Sr, this.deps = Qr, this.ladder = new YS(hS.b, "first_move"), this.frustration = void 0, this.frustrationThrottle = new Fr({
          maxPerWindow: 5,
          windowMs: 6e4
        }), this.activations = new Set, this.currentStay = null, this.moveSubscriptions = [], this.everPlayable = !1, this.everPointerLocked = !1, this.pointerUnlockedAtMs = -1 / 0, this.everythingMenu = null, this.lastGameName = null, this.unsentStepMarkers = [], this.frustration = new KS(((rr, Sr, Qr) => {
          this.onFrustration(rr, Sr, Qr)
        })), Sr.setFlowProperties((rr => this.quitProperties(rr)))
      }
      get stay() {
        return this.currentStay
      }
      start() {
        var rr;
        this.reachStep("page_loaded"), aS.i.subscribe("sessionReplayStayOpened", (rr => {
          this.resendStay(rr)
        })), aS.i.subscribe("pointerLockUpdate", (rr => {
          this.pointerLockChanged(rr)
        })), aS.i.subscribe("localBlockMined", (() => {
          this.blockBroken()
        })), aS.i.subscribe("blockChangeRefused", (() => {
          this.noteFrustration("block_change_refused")
        })), aS.i.subscribe("controlsTutorialShown", (rr => {
          this.controlsTutorialShown(rr)
        })), aS.i.subscribe("showShopTouchTutorial", (rr => {
          !1 !== rr && this.controlsTutorialShown("shop")
        })), aS.i.subscribe("appManagerUpdated|openInGameMenuName", (rr => {
          this.inGameMenuChanged(rr)
        })), aS.i.subscribe("appManagerUpdated|openEverythingMenuName", (rr => {
          this.everythingMenuChanged(rr)
        })), document.addEventListener("pointerlockerror", (() => {
          this.pointerLockFailed()
        })), null === (rr = (0, xS.e)()) || void 0 === rr || rr.onUnboundKey((() => {
          this.unboundKeyPressed()
        }))
      }
      gameLoading() {
        this.reachStep("game_loading")
      }
      gameJoined(rr, Sr, Qr) {
        const Zr = Qr && Sr === this.lastGameName;
        this.lastGameName = Sr, this.stopWatchingMoves();
        const Wr = {
          name: Sr,
          joinedAtMs: Date.now(),
          playableAtMs: null,
          visiblePlayedMs: 0,
          deaths: 0,
          ladder: new YS(hS.e, "first_move"),
          unboundKeyPresses: 0
        };
        return this.currentStay = Wr, this.reachStayStep("joined"), rr >= 2 && !Zr && this.reachStep("second_game"), Wr
      }
      gamePlayable() {
        const rr = this.currentStay;
        null !== rr && (rr.playableAtMs = this.deps.now(), this.everPlayable = !0, this.reachStep("game_playable"), this.reachStayStep("game_playable"), this.deps.isPointerLocked() && this.pointerLocked(), this.watchMoves())
      }
      input() {
        const rr = this.currentStay;
        null === rr || null === rr.playableAtMs || rr.ladder.furthestStepIndex >= yS || (this.reachStep("first_input"), this.reachStayStep("first_input"))
      }
      played60s() {
        this.reachStep("played_60s"), this.reachStayStep("played_60s")
      }
      gameLeft() {
        this.stopWatchingMoves(), this.currentStay = null
      }
      lx() {
        var rr, Sr, Qr;
        this.sendStepMarkers(), this.frustration.checkIdle({
          nowMs: this.deps.now(),
          lastInputAtMs: Math.max(null !== (rr = this.quitContext.getLastInputAtMs()) && void 0 !== rr ? rr : 0, null !== (Sr = null === (Qr = this.currentStay) || void 0 === Qr ? void 0 : Qr.playableAtMs) && void 0 !== Sr ? Sr : 0),
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
          input: TS[this.deps.getInputDevice()]
        }), this.reachStep("first_move"), this.reachStayStep("first_move")
      }
      blockBroken() {
        this.isPlayable() && (this.activate("first_block_broken"), this.reachStep("first_block"), this.reachStayStep("first_block"))
      }
      inGameMenuChanged(rr) {
        null !== rr && this.menuOpened(rr, "inventory" === rr ? "first_inventory_open" : null)
      }
      everythingMenuChanged(rr) {
        const Sr = null === this.everythingMenu;
        this.everythingMenu = rr, null !== rr && (this.menuOpened(rr, rr === zS.q.SETTINGS ? "first_settings_open" : null), rr === zS.q.SETTINGS && Sr && null !== this.currentStay && this.noteFrustration("menu_toggling"))
      }
      pointerLockChanged(rr) {
        rr ? this.pointerLocked() : this.pointerUnlockedAtMs = this.deps.now()
      }
      controlsTutorialShown(rr) {
        const Sr = `controls_tutorial_${rr}`;
        this.activations.has(Sr) || (this.activations.add(Sr), this.replay.capture("controls_tutorial_shown", {
          tutorial: rr,
          ...this.timing()
        }))
      }
      unboundKeyPressed() {
        this.noteFrustration("unbound_key_burst");
        const rr = this.currentStay;
        null !== rr && rr.unboundKeyPresses < hS.g && (rr.unboundKeyPresses++, this.deps.publishStayProgress({
          unboundKeyPresses: rr.unboundKeyPresses
        }))
      }
      noteFrustration(rr) {
        this.frustration.note(rr, this.deps.now())
      }
      quitProperties(rr) {
        return {
          ...this.ladderTags(),
          ...this.frustration.tags(rr),
          never_pointer_locked: this.everPlayable && !this.everPointerLocked && !this.deps.isTouchScreen() && "gamepad" !== this.deps.getInputDevice()
        }
      }
      isPlayable() {
        return null !== this.currentStay && null !== this.currentStay.playableAtMs
      }
      ladderTags() {
        var rr;
        return {
          furthest_step: null !== (rr = this.ladder.furthest) && void 0 !== rr ? rr : "",
          furthest_step_index: this.ladder.furthestStepIndex
        }
      }
      reachStep(rr) {
        null !== this.ladder.reach(rr) && (this.replay.setSessionProperties(this.ladderTags(), !1), this.unsentStepMarkers.push(hS.b.indexOf(rr)), this.sendStepMarkers())
      }
      sendStepMarkers() {
        for (; this.unsentStepMarkers.length > 0 && this.replay.addReplayMarker(Zr.l.step, {
            step: this.unsentStepMarkers[0]
          }, !0);) this.unsentStepMarkers.shift()
      }
      resendStay(rr) {
        const Sr = this.currentStay;
        var Qr;
        null !== Sr && Sr.name === rr && this.deps.publishStayProgress({
          furthestStep: null !== (Qr = Sr.ladder.furthest) && void 0 !== Qr ? Qr : void 0,
          unboundKeyPresses: Sr.unboundKeyPresses
        })
      }
      reachStayStep(rr) {
        var Sr;
        const Qr = null === (Sr = this.currentStay) || void 0 === Sr ? void 0 : Sr.ladder;
        void 0 !== Qr && null !== Qr.reach(rr) && this.deps.publishStayProgress({
          furthestStep: Qr.furthest
        })
      }
      menuOpened(rr, Sr) {
        this.replay.capture("menu_opened", {
          menu: rr
        }), null !== Sr && this.activate(Sr)
      }
      activate(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.activations.has(rr) || (this.activations.add(rr), this.replay.capture(rr, {
          ...Sr,
          ...this.timing()
        }))
      }
      timing() {
        var rr, Sr;
        const Qr = this.deps.now(),
          Zr = null !== (rr = null === (Sr = this.currentStay) || void 0 === Sr ? void 0 : Sr.playableAtMs) && void 0 !== rr ? rr : null;
        return {
          ms_since_page_load: Math.round(Qr),
          ms_since_playable: null === Zr ? null : Math.round(Qr - Zr)
        }
      }
      onFrustration(rr, Sr, Qr) {
        this.replay.setSessionProperties(this.frustration.tags(), !1), this.replay.addReplayMarker(Zr.l.frustration, {
          signal: hS.c.indexOf(rr)
        });
        const Wr = this.frustrationThrottle.allow(rr, Date.now());
        null !== Wr && this.replay.capture("frustration_signal", {
          signal: rr,
          count: Sr,
          window_ms: Qr,
          suppressed_since_last: Wr
        })
      }
      watchMoves() {
        var rr, Sr;
        if (0 === this.moveSubscriptions.length && (null !== (rr = null === (Sr = this.currentStay) || void 0 === Sr ? void 0 : Sr.ladder.furthestStepIndex) && void 0 !== rr ? rr : 1 / 0) < BS) {
          const rr = () => {
            this.moved()
          };
          this.moveSubscriptions = [aS.i.subscribe("usedKeyboard", rr), aS.i.subscribe("stickMoved", rr)]
        }
      }
      stopWatchingMoves() {
        for (const rr of this.moveSubscriptions) aS.i.unsubscribe(rr);
        this.moveSubscriptions = []
      }
    }
    const OS = ["quit_after_hitch", "quit_after_death", "quit_during_load", "quit_in_menu", "quit_idle", "quit_after_ad"],
      LS = ["quit_during_load", "quit_after_ad", "quit_after_death", "quit_after_hitch", "quit_idle", "quit_in_menu"];

    function lS(rr) {
      var Sr;
      return null !== (Sr = LS.find((Sr => rr.includes(Sr)))) && void 0 !== Sr ? Sr : "none"
    }

    function XS(rr, Sr, Qr) {
      return null !== rr && Sr - rr < Qr
    }
    class PS {
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
      setFlowProperties(rr) {
        this.flowProperties = rr
      }
      noteInput(rr) {
        this.history.lastInputAtMs = rr
      }
      noteHitch(rr) {
        this.history.lastHitchAtMs = rr
      }
      noteDeath(rr) {
        this.history.lastDeathAtMs = rr
      }
      noteError(rr) {
        this.history.lastErrorAtMs = rr
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
      noteAdFinished(rr) {
        this.history.adPlaying = !1, this.history.lastAdFinishedAtMs = rr
      }
      noteLoadStep(rr) {
        this.lastLoadStep = rr
      }
      getLastLoadStep() {
        return this.lastLoadStep
      }
      quit(rr) {
        const Sr = function(rr, Sr) {
            var Qr, Zr;
            const Wr = [];
            return XS(Sr.lastHitchAtMs, rr.nowMs, 15e3) && Wr.push("quit_after_hitch"), XS(Sr.lastDeathAtMs, rr.nowMs, 15e3) && Wr.push("quit_after_death"), rr.loading ? Wr.push("quit_during_load") : "page" !== rr.quitFrom || rr.inGame && !rr.menuOpen || Wr.push("quit_in_menu"), XS(null !== (Qr = Sr.lastInputAtMs) && void 0 !== Qr ? Qr : 0, rr.nowMs, 6e4) || Wr.push("quit_idle"), (!0 === Sr.adPlaying || XS(null !== (Zr = Sr.lastAdFinishedAtMs) && void 0 !== Zr ? Zr : null, rr.nowMs, 3e4)) && Wr.push("quit_after_ad"), Wr
          }(rr, this.history),
          Qr = function(rr, Sr) {
            var Qr;
            return XS(Sr.lastDeathAtMs, rr, 1e4) || XS(null !== (Qr = Sr.lastErrorAtMs) && void 0 !== Qr ? Qr : null, rr, 1e4)
          }(rr.nowMs, this.history),
          Zr = {
            quit_from: rr.quitFrom,
            in_game: rr.inGame,
            quit_reasons: Sr.join(","),
            quit_reason: lS(Sr),
            rage_quit: Qr,
            ...this.flowProperties(Qr)
          };
        var Wr;
        Sr.includes("quit_during_load") && (Zr.last_load_step = null !== (Wr = this.lastLoadStep) && void 0 !== Wr ? Wr : "none");
        null !== rr.gameName && (Zr.game_name_with_variation = rr.gameName, Zr.game_name = (0, ur.Mb)(rr.gameName));
        for (const ar of OS) Zr[ar] = Sr.includes(ar);
        return {
          reasons: Sr,
          properties: Zr
        }
      }
    }
    class HS {
      constructor(rr) {
        this.deps = rr, this.quitContext = new PS, this.loading = !1, this.inGame = !1, this.switching = !1, this.nextLeaveIsNotAQuit = !1, this.pendingQuit = null, this.exited = !1
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
      joinFailed(rr) {
        this.loading = !1, this.nextLeaveIsNotAQuit = this.inGame, this.deps.capture("join_failed", rr)
      }
      disconnected() {
        this.nextLeaveIsNotAQuit = !0
      }
      kickedForAfk(rr) {
        this.nextLeaveIsNotAQuit = !0, this.deps.capture("kicked_afk", {
          game_name_with_variation: rr
        })
      }
      gameLeft(rr) {
        const Sr = this.nextLeaveIsNotAQuit || this.deps.isJoinAbandoned(),
          Qr = this.switching,
          Zr = this.loading;
        if (this.nextLeaveIsNotAQuit = !1, this.switching = !1, this.inGame = !1, null === rr) return;
        if (Qr || (this.loading = !1), Sr) return void this.quitContext.forgetGame();
        const Wr = this.quitContext.quit({
          quitFrom: "game",
          gameName: rr,
          nowMs: this.deps.now(),
          inGame: !0,
          loading: Zr,
          menuOpen: !1
        });
        this.quitContext.forgetGame(), Qr ? this.captureSwitch(Wr) : this.startPendingQuit(Wr)
      }
      gameReplayOpened(rr) {
        this.nextLeaveIsNotAQuit = !0, this.gameLeft(rr), this.deps.capture("game_replay_opened", {
          from_game_name_with_variation: rr
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
      pageHidden(rr) {
        if (this.exited) return;
        this.exited = !0;
        const Sr = this.pendingQuit;
        null !== Sr && (clearTimeout(Sr.timer), this.pendingQuit = null, this.deps.onGameQuit(Sr.quit), this.deps.captureOnExit("quit_context", Sr.quit.properties, Sr.atEpochMs));
        const Qr = {
            quitFrom: "page",
            gameName: null,
            nowMs: this.deps.now(),
            inGame: this.inGame,
            loading: this.loading,
            menuOpen: this.deps.isMenuOpen()
          },
          Zr = this.quitContext.quit(Qr);
        this.inGame && this.deps.onGameQuit(Zr), this.deps.captureOnExit("quit_context", {
          ...rr,
          ...Zr.properties
        })
      }
      pageRestored() {
        this.exited = !1, this.deps.capture("page_restored", {})
      }
      startPendingQuit(rr) {
        this.resolvePendingQuitAsSwitch();
        const Sr = {
          quit: rr,
          atEpochMs: Date.now(),
          timer: setTimeout((() => {
            this.pendingQuit === Sr && (this.pendingQuit = null, this.deps.onGameQuit(rr), this.deps.capture("quit_context", rr.properties, Sr.atEpochMs))
          }), 1e4)
        };
        this.pendingQuit = Sr
      }
      resolvePendingQuitAsSwitch() {
        const rr = this.pendingQuit;
        null !== rr && (clearTimeout(rr.timer), this.pendingQuit = null, "string" === typeof rr.quit.properties.game_name_with_variation && this.captureSwitch(rr.quit))
      }
      captureSwitch(rr) {
        this.deps.capture("game_switched", {
          from_game_name_with_variation: rr.properties.game_name_with_variation,
          from_game_name: rr.properties.game_name,
          after_death: rr.reasons.includes("quit_after_death"),
          after_hitch: rr.reasons.includes("quit_after_hitch")
        })
      }
    }
    var qS = Qr(7469);
    class RS {
      constructor(rr) {
        this.replay = rr, this.pointerLockThrottle = new Fr({
          maxPerWindow: 10,
          windowMs: 6e4
        }), this.counts = new Map, this.game = null, this.timer = null
      }
      start(rr) {
        rr.onUnboundKey((rr => {
          this.onUnboundKey(rr)
        })), rr.onPointerLock((rr => {
          const Sr = this.pointerLockThrottle.allow("pointer_lock_changed", Date.now());
          null !== Sr && this.replay.capture("pointer_lock_changed", {
            locked: rr,
            in_game: "inGame" === ZS.c.get("gameState"),
            menu_open: (0, pS.l)(),
            suppressed_since_last: Sr
          })
        })), aS.i.subscribe("leaveGame", (() => {
          this.flush(!1)
        })), document.addEventListener("visibilitychange", (() => {
          document.hidden && this.flush(!0)
        }))
      }
      onUnboundKey(rr) {
        var Sr, Qr;
        const Zr = (0, jS.b)().gameNameWithVariation;
        Zr !== this.game && (this.flush(!1), this.game = Zr);
        const Wr = null !== (Sr = (0, qS.f)(rr)) && void 0 !== Sr ? Sr : rr;
        this.counts.set(Wr, (null !== (Qr = this.counts.get(Wr)) && void 0 !== Qr ? Qr : 0) + 1), this.timer ??= setTimeout((() => {
          this.flush(!1)
        }), 1e4 - Date.now() % 1e4)
      }
      flush(rr) {
        if (null !== this.timer && (clearTimeout(this.timer), this.timer = null), 0 === this.counts.size) return;
        const Sr = (Qr = this.counts, [...Qr].sort(((rr, Sr) => Sr[1] - rr[1] || (rr[0] < Sr[0] ? -1 : 1))));
        var Qr;
        let Zr = 0;
        for (const [, ar] of Sr) Zr += ar;
        const Wr = {
          key_counts: Object.fromEntries(Sr),
          keys: Sr.map((rr => {
            let [Sr] = rr;
            return Sr
          })).join(","),
          top_key: Sr[0][0],
          presses: Zr,
          game_name: null === this.game ? null : (0, ur.Mb)(this.game),
          game_name_with_variation: this.game
        };
        this.replay.addUnboundKeyPresses(this.counts), this.counts.clear(), rr ? this.replay.captureOnExit("unbound_keys", Wr) : this.replay.capture("unbound_keys", Wr)
      }
    }
    var gS = Qr(161);

    function CS(rr) {
      var Sr, Qr;
      return null !== (Sr = null === (Qr = gS.i[rr]) || void 0 === Qr ? void 0 : Qr.toLowerCase()) && void 0 !== Sr ? Sr : String(rr)
    }
    class MS {
      constructor(rr, Sr) {
        this.replay = rr, this.quitContext = Sr, this.startedAtMs = null, this.steps = new Map, this.firstGamePlayable = !1
      }
      started() {
        this.startedAtMs = Date.now()
      }
      stepCompleted(rr) {
        if (this.steps.has(rr)) return;
        const Sr = performance.now();
        this.steps.set(rr, Sr);
        const Qr = CS(rr);
        this.quitContext.noteLoadStep(Qr), this.firstGamePlayable || this.replay.capture("game_load_step", {
          load_step: Qr,
          step_number: rr,
          ms_since_page_load: Math.round(Sr),
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
        let rr = null,
          Sr = null;
        for (const [Zr, Wr] of [...this.steps].sort(((rr, Sr) => rr[1] - Sr[1]))) null !== Sr && (null === rr || Wr - Sr > rr.ms) && (rr = {
          step: Zr,
          ms: Wr - Sr
        }), Sr = Wr;
        const Qr = null === this.startedAtMs ? null : Date.now() - this.startedAtMs;
        return this.firstGamePlayable = !0, this.ended(), {
          load_ms: Qr,
          slowest_load_step: null === rr ? null : CS(rr.step),
          slowest_load_step_ms: null === rr ? null : Math.round(rr.ms)
        }
      }
      resetSteps() {
        this.steps.clear(), this.quitContext.noteLoadStep(null)
      }
    }
    const GS = ["keydown", "pointerdown", "touchstart"];
    class kS {
      constructor(rr) {
        this.replay = rr, this.firstInGameInputSent = !1
      }
      startFirstInputWatch() {
        setTimeout((() => {
          ! function(rr) {
            var Sr;
            let Qr = !1;
            const Zr = (Sr, Zr, Wr) => {
              Qr || (Qr = !0, rr(Sr, Zr, Wr))
            };
            if ("undefined" !== typeof PerformanceObserver && null !== (Sr = PerformanceObserver.supportedEntryTypes) && void 0 !== Sr && Sr.includes("first-input")) {
              const rr = new PerformanceObserver((Sr => {
                const [Qr] = Sr.getEntries();
                rr.disconnect(), Zr(Qr.name, Qr.startTime, !0)
              }));
              return void rr.observe({
                type: "first-input",
                buffered: !0
              })
            }
            const Wr = new AbortController,
              ar = rr => {
                Wr.abort(), Zr(rr.type, rr.timeStamp, !1)
              };
            for (const jr of GS) window.addEventListener(jr, ar, {
              capture: !0,
              passive: !0,
              signal: Wr.signal
            })
          }(((rr, Sr, Qr) => {
            this.replay.capture("first_input", Object.fromEntries([
              ["input_type", rr],
              ["ms_since_page_load", Math.round(Sr)],
              ["buffered", Qr]
            ]))
          }))
        }), 100)
      }
      onFirstInGameInput(rr, Sr) {
        this.firstInGameInputSent = !0, this.replay.capture("first_ingame_input", Object.fromEntries([
          ["input_type", rr],
          ["ms_since_playable", Math.round(performance.now() - Sr)],
          ["ms_since_page_load", Math.round(performance.now())]
        ]))
      }
      capturePageLoadTiming() {
        const rr = performance.getEntriesByType("navigation")[0],
          Sr = performance.getEntriesByName("first-contentful-paint")[0];
        this.replay.capture("page_load_timing", {
          ttfb_ms: rr ? Math.round(rr.responseStart) : null,
          first_contentful_paint_ms: Sr ? Math.round(Sr.startTime) : null,
          dom_content_loaded_ms: rr ? Math.round(rr.domContentLoadedEventEnd) : null,
          load_ms: rr ? Math.round(rr.loadEventEnd) : null,
          transfer_kb: rr ? Math.round(rr.transferSize / 1024) : null,
          recording_started_ms: Math.round(performance.now())
        })
      }
    }
    class AS {
      constructor(rr, Sr) {
        this.replay = rr, this.quitContext = Sr, this.settings = ZS.c.get("clientEscMenuOptions"), this.pendingSettings = {}, this.settingsTimer = null, this.adRequest = null, this.playingAd = null
      }
      start() {
        aS.i.subscribe("purchaseStarted", (rr => {
          let {
            product: Sr
          } = rr;
          this.replay.setFlag("purchase_intent"), this.replay.capture("purchase_started", {
            product: Sr
          })
        })), aS.i.subscribe("purchaseEnded", (rr => {
          let {
            outcome: Sr
          } = rr;
          this.replay.capture("purchase_ended", {
            outcome: Sr
          })
        })), aS.i.subscribe("adRequested", (rr => {
          let {
            adKind: Sr,
            provider: Qr
          } = rr;
          this.adRequest = {
            adKind: Sr,
            provider: Qr,
            atMs: performance.now()
          }
        })), aS.i.subscribe("appManagerUpdated|soundOnFromAd", (rr => {
          rr && null !== this.playingAd ? this.onAdFinished() : rr || null !== this.playingAd || this.onAdStarted()
        })), aS.i.subscribe("appManagerUpdated|clientEscMenuOptions", (rr => {
          ZS.c.isApplyingDefaults ? this.settings = rr : this.onSettingsChanged(rr)
        }))
      }
      onAdStarted() {
        var rr, Sr;
        const Qr = performance.now(),
          Zr = null !== this.adRequest && Qr - this.adRequest.atMs < 6e4 ? this.adRequest : null;
        this.adRequest = null, this.playingAd = {
          ad_kind: null !== (rr = null === Zr || void 0 === Zr ? void 0 : Zr.adKind) && void 0 !== rr ? rr : "unknown",
          provider: null !== (Sr = null === Zr || void 0 === Zr ? void 0 : Zr.provider) && void 0 !== Sr ? Sr : null,
          startedAtMs: Qr
        }, this.replay.setFlag("ad_shown"), this.quitContext.noteAdStarted(), this.replay.capture("ad_started", this.adProperties(this.playingAd, Qr))
      }
      onAdFinished() {
        const rr = performance.now(),
          Sr = this.playingAd;
        this.playingAd = null, this.quitContext.noteAdFinished(rr), this.replay.capture("ad_finished", {
          ...this.adProperties(Sr, rr),
          ad_ms: Math.round(rr - Sr.startedAtMs)
        })
      }
      adProperties(rr, Sr) {
        return {
          ad_kind: rr.ad_kind,
          provider: rr.provider,
          minutes_since_page_load: Math.floor(Sr / 6e4),
          in_game: "inGame" === ZS.c.get("gameState")
        }
      }
      onSettingsChanged(rr) {
        Object.assign(this.pendingSettings, function(rr, Sr) {
          const Qr = {};
          for (const Zr of Object.keys(Sr)) rr[Zr] !== Sr[Zr] && (Qr[Zr] = Sr[Zr]);
          return Qr
        }(this.settings, rr)), this.settings = rr, null !== this.settingsTimer && clearTimeout(this.settingsTimer), this.settingsTimer = setTimeout((() => {
          this.settingsTimer = null, Object.keys(this.pendingSettings).length > 0 && (this.replay.capture("settings_changed", {
            changed_settings: Object.keys(this.pendingSettings),
            values: this.pendingSettings
          }), this.pendingSettings = {})
        }), 2e3)
      }
    }

    function VS(rr) {
      switch ((0, dr.w)(rr)) {
        case sr.e.DISCORD_GUILD:
          return "discord_guild";
        case sr.e.DISCORD_DM:
          return "discord_dm";
        default:
          return (0, dr.M)(rr) ? "public" : "private"
      }
    }
    class iS {
      constructor(rr) {
        this.replay = rr, this.framesThisTick = 0, this.lastTickMs = performance.now(), this.ticks = 0, this.gamesJoined = 0, this.pageEvents = void 0, this.flows = void 0, this.health = void 0, this.leaves = void 0, this.joinLoad = void 0, this.unsubscribeDeaths = () => {}, this.inputSinceActiveMarker = !1, this.firstMinutePlayedSent = !1, this.pageEvents = new kS(rr), this.leaves = new HS({
          capture: (Sr, Qr, Zr) => {
            void 0 === Zr ? rr.capture(Sr, Qr) : rr.captureAt(Sr, Qr, Zr)
          },
          captureOnExit: (Sr, Qr, Zr) => {
            rr.captureOnExit(Sr, Qr, Zr)
          },
          onGameQuit: rr => {
            let {
              reasons: Sr,
              properties: Qr
            } = rr;
            const Zr = Qr.game_name_with_variation;
            aS.i.Jp("sessionReplayGameQuit", {
              reasons: Sr,
              gameName: "string" === typeof Zr ? Zr : null
            })
          },
          isMenuOpen: pS.l,
          isJoinAbandoned: ES.d,
          now: () => performance.now()
        }), this.joinLoad = new MS(rr, this.leaves.quitContext), this.flows = function(rr, Sr) {
          return new vS(rr, Sr, {
            now: () => performance.now(),
            isTouchScreen: () => ZS.c.get("isTouchScreen"),
            getInputDevice: () => ZS.c.get("activeInputDevice"),
            isPointerLocked: () => null !== document.pointerLockElement,
            isPageVisible: () => !document.hidden,
            publishStayProgress: rr => {
              aS.i.Jp("sessionReplayStayProgress", rr)
            }
          })
        }(rr, this.leaves.quitContext), this.health = new tS(rr, this.leaves.quitContext, this.flows)
      }
      start() {
        const rr = (0, xS.e)(),
          Sr = new RS(this.replay);
        null !== rr && Sr.start(rr), this.pageEvents.capturePageLoadTiming(), this.flows.start();
        const Qr = ZS.c.get("gameState");
        "inGame" === Qr ? this.joinConnectedGame() : "loadingScreen" !== Qr && "findingLobby" !== Qr || this.leaves.joinStarted(), this.subscribeToGameFlow(), new AS(this.replay, this.leaves.quitContext).start(), this.health.start(), this.trackInput(), this.pageEvents.startFirstInputWatch(), (0, IS.I)((() => {
          this.framesThisTick++
        })), setInterval((() => {
          this.FY()
        }), 1e3), window.addEventListener("pagehide", (() => {
          Sr.flush(!0), this.leaves.pageHidden(this.replay.finalTags())
        })), window.addEventListener("pageshow", (rr => {
          rr.persisted && this.leaves.pageRestored()
        }))
      }
      trackInput() {
        const rr = rr => {
          var Sr, Qr;
          this.inputSinceActiveMarker = !0, this.leaves.quitContext.noteInput(rr.timeStamp), this.flows.input();
          const Zr = null !== (Sr = null === (Qr = this.flows.stay) || void 0 === Qr ? void 0 : Qr.playableAtMs) && void 0 !== Sr ? Sr : null;
          this.pageEvents.firstInGameInputSent || null === Zr || this.pageEvents.onFirstInGameInput(rr.type, Zr)
        };
        for (const Sr of ["keydown", "pointerdown", "pointermove", "wheel"]) window.addEventListener(Sr, rr, {
          capture: !0,
          passive: !0
        })
      }
      subscribeToGameFlow() {
        aS.i.subscribe("joinedGame", (rr => {
          let {
            gameNameWithVariation: Sr,
            lobbyName: Qr
          } = rr;
          (0, ES.d)() || this.onJoinedGame(Sr, Qr)
        })), aS.i.subscribe("leaveGame", (() => {
          var rr, Sr;
          const Qr = null !== (rr = null === (Sr = this.flows.stay) || void 0 === Sr ? void 0 : Sr.name) && void 0 !== rr ? rr : null;
          this.onLeftGame(), this.leaves.gameLeft(Qr)
        })), aS.i.subscribe("replayViewer|replayLoaded", (() => {
          const rr = this.flows.stay;
          null !== rr && (this.onLeftGame(), this.leaves.gameReplayOpened(rr.name))
        })), aS.i.subscribe("matchmakeAndPlayStepCompleted", (rr => {
          let {
            step: Sr
          } = rr;
          this.joinLoad.stepCompleted(Sr)
        })), aS.i.subscribe("leftPlayPage", (() => {
          this.leaves.playPageLeft(), this.joinLoad.ended()
        })), aS.i.subscribe("joinFailed", (rr => {
          let {
            step: Sr,
            severity: Qr
          } = rr;
          this.leaves.joinFailed({
            step: Sr,
            severity: Qr,
            game_name_with_variation: (0, jS.b)().requestedGameNameWithVariation,
            last_load_step: this.leaves.quitContext.getLastLoadStep()
          }), this.joinLoad.ended()
        })), aS.i.subscribe("kickedForAfk", (() => {
          var rr, Sr;
          this.leaves.kickedForAfk(null !== (rr = null === (Sr = this.flows.stay) || void 0 === Sr ? void 0 : Sr.name) && void 0 !== rr ? rr : null)
        })), aS.i.subscribe("unwantedLeftGame", (rr => {
          this.leaves.disconnected(), this.replay.setFlag("disconnected"), this.replay.capture("disconnected", {
            reason: rr.reason,
            can_reconnect: rr.canReconnect,
            automatically_reconnect: rr.automaticallyReconnect,
            requires_refresh: rr.requiresRefresh
          })
        })), aS.i.subscribe("appManagerUpdated|gameState", (rr => {
          "loadingScreen" === rr ? this.leaves.joinStarted() : "findingLobby" === rr ? (this.leaves.joinStarted(), this.joinLoad.started(), this.replay.capture("game_loading_started", {
            entry_source: ZS.c.get("gameEntrySource")
          }), this.flows.gameLoading()) : "inGame" === rr ? this.onPlayable() : "landingPage" === rr && (this.replay.capture("homepage_viewed"), this.replay.capture("$screen", {
            $screen_name: "homepage"
          }))
        })), aS.i.subscribe("appManagerUpdated|gameEntrySource", (rr => {
          "autoReconnect" !== rr && "manualReconnect" !== rr || this.replay.capture("reconnect_attempted", {
            automatic: "autoReconnect" === rr
          })
        })), aS.i.subscribe("sessionReplayPlayerKill", (rr => {
          let {
            killstreak: Sr
          } = rr;
          this.replay.capture("player_kill", {
            killstreak: Sr
          })
        }))
      }
      onPlayable() {
        (0, ES.d)() || (0, jS.e)() || (null === this.flows.stay && this.joinConnectedGame(), this.replay.capture("game_playable", {
          ms_since_page_load: Math.round(performance.now()),
          ...this.joinLoad.playable()
        }), this.leaves.gamePlayable(), this.flows.gamePlayable())
      }
      joinConnectedGame() {
        if ((0, jS.e)()) return;
        const {
          gameNameWithVariation: rr,
          lobbyName: Sr
        } = (0, jS.b)();
        null !== rr && null !== Sr ? this.onJoinedGame(rr, Sr) : console.warn("Session replay found a game playable with no game joined; not labelling it")
      }
      onJoinedGame(rr, Sr) {
        this.replay.takeFullSnapshot();
        const Qr = (0, dr.M)(Sr),
          Zr = ZS.c.get("gameEntrySource");
        this.gamesJoined++, this.leaves.gameJoined(), this.flows.gameJoined(this.gamesJoined, rr, "autoReconnect" === Zr || "manualReconnect" === Zr), "inGame" === ZS.c.get("gameState") && this.flows.gamePlayable();
        const Wr = fS.clientSidePartyStateManager.getPartyInformation(),
          ar = {
            game_name: (0, ur.Mb)(rr),
            game_name_with_variation: rr,
            game_number: this.gamesJoined,
            game_analytics_id: (0, rS.d)(rr, Qr),
            is_custom_game: (0, SS.l)(rr),
            lobby_type: VS(Sr),
            in_party: null !== Wr,
            party_size: null === Wr ? 0 : Wr.memberSocialPreviews.length + 1
          };
        this.replay.gameJoined(rr, ar), this.replay.capture("game_joined", {
          ...ar,
          entry_source: Zr
        }), this.replay.capture("$screen", {
          $screen_name: ar.is_custom_game ? `custom: ${ar.game_analytics_id}` : ar.game_name
        }), this.subscribeToDeaths(rr)
      }
      onLeftGame() {
        this.joinLoad.forgetStart();
        const rr = this.flows.stay;
        null !== rr && (this.replay.capture("game_left", {
          game_name_with_variation: rr.name,
          duration_ms: Date.now() - rr.joinedAtMs
        }), this.flows.gameLeft(), this.replay.gameLeft(), this.unsubscribeDeaths(), this.unsubscribeDeaths = () => {})
      }
      subscribeToDeaths(rr) {
        this.unsubscribeDeaths();
        let Sr = !0;
        this.unsubscribeDeaths = WS.gameBridge.subscribe("localPlayerAliveSet", (Qr => {
          const Wr = Sr && !Qr;
          if (Sr = Qr, Wr) {
            this.leaves.quitContext.noteDeath(performance.now());
            const [Sr, Qr, Wr] = WS.gameBridge.lookup("localPos", null), ar = {
              x: Math.round(Sr),
              y: Math.round(Qr),
              z: Math.round(Wr)
            }, jr = this.flows.stay, Ir = null === jr ? {} : {
              death_number: ++jr.deaths,
              seconds_since_join: Math.round((Date.now() - jr.joinedAtMs) / 1e3)
            };
            this.replay.capture("player_died", {
              ...ar,
              game_name_with_variation: rr,
              ...Ir
            }), this.replay.addReplayMarker(Zr.l.death, ar)
          }
        }))
      }
      FY() {
        this.health.attachToRender();
        const rr = performance.now(),
          Sr = rr - this.lastTickMs,
          Qr = Sr <= 5e3,
          Wr = this.flows.stay;
        if (null !== Wr && null !== Wr.playableAtMs && !document.hidden && Qr && Wr.visiblePlayedMs < 6e4 && (Wr.visiblePlayedMs += Sr, Wr.visiblePlayedMs >= 6e4)) {
          const Sr = Math.round(rr);
          this.replay.capture("game_played_60s", {
            game_name_with_variation: Wr.name,
            ms_since_page_load: Sr,
            ...this.firstMinutePlayedSent ? {} : {
              ttff_ms: Sr
            }
          }), this.firstMinutePlayedSent = !0, this.flows.played60s()
        }
        this.flows.lx();
        const ar = null !== this.flows.stay && !document.hidden;
        this.replay.addFpsSample(ar && Qr && this.framesThisTick > 0 ? 1e3 * this.framesThisTick / Sr : null);
        const jr = ar ? QS.e.getLastColyseusPingMs() : null;
        null !== jr && this.replay.addPingSample(jr), this.framesThisTick = 0, this.lastTickMs = rr, this.ticks++, this.ticks % 2 === 0 && (ar && this.inputSinceActiveMarker && this.replay.addReplayMarker(Zr.l.active), this.inputSinceActiveMarker = !1), this.replay.markClockIfDue(this.ticks, 30)
      }
    }
    var wS = Qr(1267),
      cS = Qr(1262),
      FS = Qr(41387);

    function oS(rr) {
      return rr.length + 64
    }
    async function bS() {
      return new Response("{}")
    }

    function JS(rr, Sr, Qr) {
      return FS.g.fetch(rr, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain"
        },
        body: Sr,
        signal: (0, wS.o)(3e4)
      }, Qr)
    }
    class DS {
      constructor(rr) {
        var Sr, Qr, Zr;
        let Wr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.uploadToken = rr, this.url = void 0, this.post = void 0, this.isHidden = void 0, this.queue = [], this.retries = [], this.refusedTokens = new Set, this.overflowWarned = !1, this.unloading = !1, this.sendScheduled = !1, this.url = null !== (Sr = Wr.url) && void 0 !== Sr ? Sr : `${cS.clientSideServerUrls.indexUrl}/index/replay/timeline`, this.post = null !== (Qr = Wr.post) && void 0 !== Qr ? Qr : JS, this.isHidden = null !== (Zr = Wr.isHidden) && void 0 !== Zr ? Zr : () => "hidden" === document.visibilityState
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
      add(rr) {
        if (this.refusedTokens.has(this.uploadToken)) return;
        const Sr = function(rr) {
            const Sr = {
              ...rr.properties
            };
            return void 0 !== rr.$set && (Sr.$set = {
              ...rr.properties.$set,
              ...rr.$set
            }), void 0 !== rr.$set_once && (Sr.$set_once = {
              ...rr.$set_once,
              ...rr.properties.$set_once
            }), void 0 !== rr.$unset && (Sr.$unset = rr.$unset), {
              uuid: rr.uuid,
              event: rr.event,
              timestampMs: rr.timestamp.getTime(),
              properties: JSON.stringify(Sr)
            }
          }(rr),
          Qr = (0, FS.i)(JSON.stringify(Sr));
        Sr.properties.length > 32768 || Sr.event.length > 64 || oS(this.uploadToken) + Qr > 102400 ? console.warn(`Session replay timeline event ${Sr.event.slice(0,64)} is too large for index-server; dropped.`) : (this.queue.push({
          uploadToken: this.uploadToken,
          event: Sr,
          bytes: Qr,
          attempts: 0
        }), this.trimToCap(), this.queue.length >= 50 ? this.sendQueued() : (this.unloading || this.isHidden()) && this.sendSoon())
      }
      sendSoon() {
        this.sendScheduled || (this.sendScheduled = !0, queueMicrotask((() => {
          this.sendScheduled = !1, this.sendQueued()
        })))
      }
      flush() {
        this.retries.length > 0 && (this.queue = [...this.retries, ...this.queue].sort(((rr, Sr) => rr.event.timestampMs - Sr.event.timestampMs)), this.retries = []), this.sendQueued()
      }
      sendQueued() {
        for (; this.queue.length > 0;) {
          const rr = this.takeBatch();
          this.refusedTokens.has(rr.uploadToken) || this.send(rr)
        }
      }
      trimToCap() {
        let rr = this.retries.length + this.queue.length - 1e3;
        if (rr <= 0) return void(this.overflowWarned = !1);
        const Sr = Math.min(rr, this.retries.length);
        this.retries.splice(0, Sr), rr -= Sr, this.queue.splice(0, rr), this.overflowWarned || (this.overflowWarned = !0, console.warn("Session replay timeline queue is full; dropping its oldest events until it drains."))
      }
      takeBatch() {
        const rr = this.queue.shift(),
          Sr = [rr];
        let Qr = oS(rr.uploadToken) + rr.bytes;
        for (; this.queue.length > 0 && Sr.length < 100 && this.queue[0].uploadToken === rr.uploadToken && Qr + this.queue[0].bytes <= 32768;) {
          const rr = this.queue.shift();
          Sr.push(rr), Qr += rr.bytes
        }
        return {
          uploadToken: rr.uploadToken,
          events: Sr
        }
      }
      async send(rr) {
        const Sr = await this.sendOnce(rr);
        if ("refused" === Sr && this.refusedTokens.add(rr.uploadToken), "retryLater" !== Sr) return;
        const Qr = rr.events.filter((rr => ++rr.attempts < 3));
        Qr.length < rr.events.length && console.error(`Session replay timeline: dropped ${rr.events.length-Qr.length} events after 3 attempts.`), this.retries.push(...Qr), this.trimToCap()
      }
      async sendOnce(rr) {
        const Sr = {
            uploadToken: rr.uploadToken,
            sentAtMs: Date.now(),
            events: rr.events.map((rr => rr.event))
          },
          Qr = JSON.stringify(Sr);
        let Zr, Wr = null;
        try {
          Zr = await this.post(this.url, Qr, (0, FS.i)(Qr)), Zr.ok && (Wr = await Zr.json())
        } catch (ar) {
          return console.warn("Session replay timeline upload failed.", ar), "retryLater"
        }
        return null === Wr ? 408 === Zr.status || 429 === Zr.status || Zr.status >= 500 ? "retryLater" : (console.error(`Session replay timeline upload failed with ${Zr.status}; dropped ${rr.events.length} events.`), "dropped") : "rejected" in Wr ? Wr.retryable ? "retryLater" : (console.warn(`Session replay timeline refused: ${Wr.reason}; dropping this recording's events.`), "refused") : "sent"
      }
    }
    var dS = Qr(41403),
      sS = Qr(5448),
      uS = Qr(1371);
    class rQ {
      constructor(rr) {
        var Sr;
        this.tags = new Dr, this.fpsMonitor = void 0, this.errorLogLink = void 0, this.lastTagsJson = "", this.clockMarked = !1, this.personUpdateTimer = null, this.expectedSessionId = "", this.recorderPatched = !1, this.gameContextKeys = [], this.firstGameJoined = !1, this.timeline = void 0, this.onDomBatch = void 0;
        const {
          recording: Qr
        } = rr;
        this.onDomBatch = rr.onDomBatch;
        const jr = null !== rr.onDomBatch;
        jr && this.patchRecorder(), this.timeline = new DS(Qr.uploadToken, rr.dryRun ? {
            post: bS
          } : {}), this.timeline.start(),
          function(rr) {
            const Sr = {
                supportedCompression: [Wr.c.GZipJS],
                hasFeatureFlags: !1,
                sessionRecording: {
                  endpoint: "/s/"
                },
                siteApps: [],
                toolbarParams: {},
                toolbarVersion: "toolbar",
                isAuthenticated: !1
              },
              Qr = window;
            Qr._POSTHOG_REMOTE_CONFIG = {
              ...Qr._POSTHOG_REMOTE_CONFIG,
              [rr]: {
                config: Sr
              }
            }
          }(rr.posthog.projectApiKey), Wr.f.init(rr.posthog.projectApiKey, Mr({
            apiHost: rr.posthog.apiHost,
            recordingId: Qr.recordingId,
            recordDom: jr,
            ownOrigins: [window.location.origin, new URL(cS.clientSideServerUrls.s3Url, window.location.href).origin],
            anonymised: Qr.anonymised,
            showsChat: (0, Zr.u)(Qr),
            allowAutomatedBrowsers: (0, sS.e)((0, sS.j)(), !1),
            onTimelineEvent: rr => {
              this.timeline.add(rr), "$pageview" === rr.event && rr.properties.$current_url && this.addReplayMarker("$pageview", {
                href: rr.properties.$current_url
              })
            },
            onDomBatch: rr => {
              this.takeDomBatch(rr)
            }
          })), jr && Wr.f.startSessionRecording({
            sampling: !0
          }), this.expectedSessionId = Qr.recordingId, Wr.f.onSessionId((rr => {
            rr !== this.expectedSessionId && console.warn(`Session replay: PostHog session ${rr} differs from recording ${this.expectedSessionId}; events carry recording_id.`)
          })),
          function(rr, Sr) {
            const {
              recording: Qr
            } = rr, Zr = {
              ...Qr.tags,
              site_used: Ar.siteUsed,
              subsite_used: null !== Ar.subsiteUsed && void 0 !== Ar.subsiteUsed ? Ar.subsiteUsed : "",
              is_iframed: Ar.isIframed,
              entry_path: location.pathname,
              ...Vr(),
              ...wr(Qr, Sr),
              client_build: kr.e
            };
            Wr.f.register(Zr), null !== rr.videoStatus && Wr.f.register({
              replay_video_status: rr.videoStatus
            }), Wr.f.setPersonProperties(Zr, {
              ...cr("initial_", Zr),
              ...ir(Qr)
            })
          }(rr, jr), this.fpsMonitor = new ar.b({
            onEpisodeStarted: rr => {
              this.capture("low_fps_started", {
                avg_fps: Math.round(rr)
              }), aS.i.Jp("sessionReplayLowFps", {
                low: !0
              })
            },
            onEpisodeEnded: rr => {
              this.capture("low_fps_episode", {
                duration_ms: rr.durationMs,
                min_fps: rr.minFps,
                avg_fps: rr.avgFps
              }), aS.i.Jp("sessionReplayLowFps", {
                low: !1
              })
            }
          }), this.errorLogLink = new br({
            dashboardHost: null !== (Sr = rr.posthog.dashboardHost) && void 0 !== Sr ? Sr : rr.posthog.apiHost,
            recordingId: Qr.recordingId,
            getSessionId: () => Wr.f.get_session_id(),
            domRecorded: jr,
            captureError: (rr, Sr) => {
              this.captureClientError("logged", rr, Sr)
            }
          }), (0, uS.annotateLoggedErrors)(((rr, Sr) => this.errorLogLink.annotate(rr, Sr))), new iS(this).start()
      }
      capture(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        Wr.f.capture(rr, Sr)
      }
      captureAt(rr, Sr, Qr) {
        Wr.f.capture(rr, Sr, {
          timestamp: new Date(Qr)
        })
      }
      captureOnExit(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        Wr.f.capture(rr, Sr, {
          timestamp: new Date(Qr)
        })
      }
      captureClientError(rr, Sr, Qr) {
        this.setFlag("had_error"), this.capture("client_error", {
          kind: rr,
          message: Yr(Sr).slice(0, 300),
          source: null,
          error_name: null,
          ...Qr
        })
      }
      takeFullSnapshot() {
        if (this.tryFullSnapshot()) return;
        const rr = performance.now() + 1500,
          Sr = setInterval((() => {
            (this.tryFullSnapshot() || performance.now() >= rr) && clearInterval(Sr)
          }), 100)
      }
      setVideoStatus(rr, Sr) {
        Wr.f.register({
          replay_video_status: rr
        });
        const Qr = "stopped_cellular" === rr ? "cellular" : "stopped_error" === rr ? "error" : null;
        null !== Qr && (this.capture("replay_video_stopped", {
          reason: Qr,
          detail: null === Sr ? null : Yr(Sr).slice(0, 300)
        }), this.addReplayMarker("replay_video_stopped", {
          reason: Qr
        }))
      }
      stopDomRecording() {
        Wr.f.stopSessionRecording(), Wr.f.register({
          dom_recorded: !1
        })
      }
      optOut() {
        this.stopDomRecording(), Wr.f.set_config({
          before_send: () => null
        })
      }
      takeDomBatch(rr) {
        null !== this.onDomBatch ? this.onDomBatch(rr) : console.warn("Session replay: posthog-js recorded the page of an events-only recording; dropped it")
      }
      tryFullSnapshot() {
        var rr;
        return !(null === (rr = Wr.f.sessionRecording) || void 0 === rr || !rr.started) && (Gr().rrweb.record.takeFullSnapshot(), !0)
      }
      patchRecorder() {
        this.recorderPatched || (this.recorderPatched = !0, function() {
          const rr = Gr().rrwebPlugins,
            Sr = rr.getRecordConsolePlugin;
          rr.getRecordConsolePlugin = () => Sr({
            level: ["warn", "error", "assert"]
          })
        }(), this.markClockOnFullSnapshots())
      }
      markClockOnFullSnapshots() {
        const rr = Gr().rrweb.record,
          Sr = rr.takeFullSnapshot;
        rr.takeFullSnapshot = rr => {
          Sr(rr), this.markClock()
        }
      }
      markClock() {
        this.clockMarked = this.addReplayMarker(Zr.l.clock, {
          epochMs: (0, dS.e)(),
          perfNowMs: performance.now()
        }) || this.clockMarked
      }
      markClockIfDue(rr, Sr) {
        this.clockMarked && rr % Sr !== 0 || this.markClock()
      }
      addReplayMarker(rr) {
        var Sr, Qr;
        let Zr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (!(arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) || Wr.f.sessionRecordingStarted()) && null !== (Sr = null === (Qr = Wr.f.sessionRecording) || void 0 === Qr ? void 0 : Qr.tryAddCustomEvent(rr, Zr)) && void 0 !== Sr && Sr
      }
      gameJoined(rr, Sr) {
        this.unregisterGameContext(), this.gameContextKeys = Object.keys(Sr), Wr.f.register(Sr), this.firstGameJoined || (this.firstGameJoined = !0, Wr.f.setPersonProperties(void 0, {
          first_game_ever: Sr.game_name,
          first_game_ever_with_variation: Sr.game_name_with_variation,
          first_game_ever_analytics_id: Sr.game_analytics_id
        })), this.tags.gameJoined(rr, Date.now()), this.updateTags()
      }
      gameLeft() {
        this.unregisterGameContext(), this.tags.gameLeft(Date.now()), this.fpsMonitor.endEpisode(Date.now()), this.updateTags()
      }
      setFlag(rr) {
        this.tags.setFlag(rr) && this.updateTags()
      }
      addHitch(rr) {
        this.tags.addHitch(rr) && this.updateTags()
      }
      setSessionProperties(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        Wr.f.register(rr), Sr && Wr.f.setPersonProperties(rr)
      }
      addPingSample(rr) {
        this.tags.addPingSample(rr) && this.updateTags()
      }
      addFpsSample(rr) {
        this.fpsMonitor.addSample(rr, Date.now());
        const Sr = this.fpsMonitor.getTags();
        null !== Sr && (this.tags.setFpsTags(Sr), this.updateTags())
      }
      addUnboundKeyPresses(rr) {
        this.tags.addUnboundKeyPresses(rr), this.updateTags()
      }
      finalTags() {
        return this.fpsMonitor.endEpisode(Date.now()), this.tags.toProperties(Date.now())
      }
      updateTags() {
        const rr = this.tags.toProperties(),
          Sr = JSON.stringify(rr);
        Sr !== this.lastTagsJson && (this.lastTagsJson = Sr, Wr.f.register(rr), null === this.personUpdateTimer && (this.personUpdateTimer = setTimeout((() => {
          this.personUpdateTimer = null, Wr.f.setPersonProperties(this.tags.toProperties())
        }), 0)))
      }
      unregisterGameContext() {
        for (const rr of this.gameContextKeys) Wr.f.unregister(rr);
        this.gameContextKeys = []
      }
    }
  },
  41403: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar
    });
    const Zr = 20;
    let Wr = Date.now() - performance.now();

    function ar() {
      const rr = performance.now(),
        Sr = Date.now();
      return Math.abs(Sr - (rr + Wr)) > Zr && (Wr = Sr - rr), rr + Wr
    }
  },
  41387: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr,
      g: () => ar,
      i: () => Wr
    });
    const Zr = 32768;

    function Wr(rr) {
      return (new TextEncoder).encode(rr).byteLength
    }
    const ar = new class {
      constructor() {
        this.inFlightBytes = 0, this.inFlightLabels = new Map
      }
      async fetch(rr, Sr, Qr, Zr) {
        if (this.inFlightBytes + Qr > 49152) return await fetch(rr, Sr);
        this.inFlightBytes += Qr, this.countLabel(Zr, 1);
        const Wr = () => {
          this.inFlightBytes -= Qr, this.countLabel(Zr, -1)
        };
        let ar;
        try {
          ar = await fetch(rr, {
            ...Sr,
            keepalive: !0
          })
        } catch (Ir) {
          var jr;
          if (Wr(), null !== (jr = Sr.signal) && void 0 !== jr && jr.aborted) throw Ir;
          return console.info("Session replay keepalive request failed; retrying without keepalive.", Ir), await fetch(rr, Sr)
        }
        return Wr(), ar
      }
      isInFlight(rr) {
        var Sr;
        return (null !== (Sr = this.inFlightLabels.get(rr)) && void 0 !== Sr ? Sr : 0) > 0
      }
      sendBeacon(rr, Sr) {
        const Qr = Wr(Sr);
        return !(this.inFlightBytes + Qr > 57344) && this.beaconSent(navigator.sendBeacon(rr, new Blob([Sr], {
          type: "text/plain"
        })), Qr)
      }
      sendUploadBeacon(rr, Sr, Qr) {
        return !(this.inFlightBytes + Qr > 40960) && this.beaconSent(navigator.sendBeacon(rr, Sr), Qr)
      }
      countLabel(rr, Sr) {
        var Qr;
        void 0 !== rr && this.inFlightLabels.set(rr, (null !== (Qr = this.inFlightLabels.get(rr)) && void 0 !== Qr ? Qr : 0) + Sr)
      }
      beaconSent(rr, Sr) {
        return rr && (this.inFlightBytes += Sr, setTimeout((() => {
          this.inFlightBytes -= Sr
        }), 1e4)), rr
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);