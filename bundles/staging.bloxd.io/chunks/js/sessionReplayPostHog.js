export const id = 62;
export const ids = [62];
export const modules = {
  41226: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      ReplayPostHog: () => wM
    });
    var eb = Mb(4781),
      Hb = Mb(41231),
      pb = Mb(41220);
    const Vb = new Set(["partycode", "lobby", "vm", "invite", "invitecode", "code", "token", "access_token", "id_token", "refresh_token", "auth", "key", "state", "ticket", "jointicket", "secret", "password", "sig", "signature"]),
      gb = new Set(["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "bfcid", "irclid", "_kx", "_gl", "yclid", "srsltid", "mc_eid", "s_kwcid", "ef_id", "_hsenc", "mkt_tok"]),
      lb = "redacted",
      Lb = /([?&#])([^=&#?\s"']+)=([^&#?\s"'<>\\]*)/g,
      Ib = /(\/play\/[^/?#\s"'<>\\]+\/)[^/?#\s"'<>\\]+/gi,
      Ob = /\/play\//i,
      Ub = /lobby|party/i;

    function tb(bb) {
      try {
        return decodeURIComponent(bb)
      } catch {
        return null
      }
    }

    function Cb(bb) {
      const wb = bb.includes("%") ? tb(bb) : null;
      if (null === wb || wb === bb) return bb;
      let Mb = Eb(`?${wb}`).slice(1);
      return Mb === wb && (Mb = Cb(wb)), Mb === wb ? bb : encodeURIComponent(Mb)
    }

    function Eb(bb) {
      return bb.includes("=") || Ob.test(bb) ? bb.replace(Lb, ((bb, wb, Mb, eb) => {
        var Hb;
        const pb = (null !== (Hb = tb(Mb)) && void 0 !== Hb ? Hb : Mb).toLowerCase();
        if (Vb.has(pb)) return `${wb}${Mb}=${lb}`;
        if (gb.has(pb) && "" !== eb) return `${wb}${Mb}=<masked>`;
        const Lb = Cb(eb);
        return Lb === eb ? bb : `${wb}${Mb}=${Lb}`
      })).replace(Ib, `$1${lb}`) : bb
    }
    const Fb = new Set(["href", "src", "srcset", "action", "formaction", "poster", "xlink:href"]);

    function Bb(bb, wb) {
      return Fb.has(bb.toLowerCase()) ? Eb(wb) : wb
    }

    function sb(bb) {
      return Ub.test(bb) ? lb : Eb(bb)
    }

    function mb(bb) {
      if (bb)
        for (const [wb, Mb] of Object.entries(bb)) "string" === typeof Mb && (bb[wb] = Eb(Mb))
    }

    function hb(bb) {
      var wb;
      Array.isArray(bb.payload) && (bb.payload = (wb = bb.payload).some((bb => "string" === typeof bb && Ub.test(bb))) ? [JSON.stringify(lb)] : wb.map((bb => "string" === typeof bb ? Eb(bb) : bb))), Array.isArray(bb.trace) && (bb.trace = bb.trace.map((bb => "string" === typeof bb ? Eb(bb) : bb)))
    }

    function zb(bb) {
      if (null === bb) return null;
      const wb = bb.properties.$snapshot_data;
      return mb(bb.properties), mb(bb.properties.$set), mb(bb.properties.$set_once), mb(bb.$set), mb(bb.$set_once),
        function(bb) {
          if (Array.isArray(bb))
            for (const wb of bb) {
              const bb = null === wb || void 0 === wb ? void 0 : wb.data;
              if (!bb || "object" !== typeof bb) continue;
              "string" === typeof bb.href && (bb.href = Eb(bb.href));
              const Mb = bb.payload;
              Mb && "object" === typeof Mb && (wb.type === eb.c.Plugin && "string" === typeof bb.plugin && bb.plugin.includes("console") ? hb(Mb) : mb(Mb))
            }
        }(wb), bb
    }
    const Xb = new Set(["class", "id", "rel", "type", "role", "tabindex", "width", "height", "dir", "lang", "disabled", "hidden", "checked", "selected", "readonly", "draggable", "media", "charset", "crossorigin", "aria-hidden", "aria-expanded", "aria-selected", "aria-pressed", "aria-checked", "aria-disabled", "xmlns", "viewbox", "d", "fill", "stroke", "stroke-width", "transform", "x", "y", "cx", "cy", "r", "points", "x1", "y1", "x2", "y2", "rx", "ry", "opacity", "fill-rule", "clip-rule", "stroke-linecap", "stroke-linejoin", "preserveaspectratio", "xmlns:xlink", "colspan", "rowspan"]),
      xb = new Set(["_csstext", "rr_width", "rr_height", "rr_left", "rr_top", "rr_position", "rr_transform", "rr_display", "rr_scrollleft", "rr_scrolltop", "rr_mediastate", "rr_open_mode"]),
      jb = new Set(["data-pad-key", "data-pad-repeat"]),
      Kb = new Set(["href", "src", "srcset", "xlink:href"]),
      rb = new Set(["title", "$title", "message", "detail", "game_display_name"]),
      Rb = "img, picture, video";

    function Db(bb, wb, Mb) {
      const eb = bb.toLowerCase();
      return "style" === eb ? wb.replace(/url\((?:"[^"]*"|'[^']*'|[^)]*)\)/gi, "none") : Kb.has(eb) && "A" !== Mb.tagName ? Bb(bb, wb) : Xb.has(eb) || xb.has(eb) || eb.startsWith("data-pad-") && !jb.has(eb) ? wb : wb.replace(/\S/g, "*")
    }

    function cb(bb) {
      if (!/^(https?:\/\/|\/)/i.test(bb)) return bb;
      let wb;
      try {
        wb = new URL(bb, "https://bloxd.invalid")
      } catch {
        return bb
      }
      const [Mb = "", ...eb] = wb.pathname.split("/").slice(1), Hb = `/${Mb}${eb.some((bb=>""!==bb))?"/*":""}`;
      return bb.startsWith("/") ? Hb : `${wb.origin}${Hb}`
    }

    function Yb(bb) {
      if (bb)
        for (const [wb, Mb] of Object.entries(bb)) rb.has(wb) ? delete bb[wb] : "string" === typeof Mb && (bb[wb] = cb(Mb))
    }

    function Zb(bb) {
      ! function(bb) {
        if (Array.isArray(bb))
          for (const wb of bb) {
            const bb = null === wb || void 0 === wb ? void 0 : wb.data;
            bb && "object" === typeof bb && ("string" === typeof bb.href && (bb.href = cb(bb.href)), bb.payload && "object" === typeof bb.payload && Yb(bb.payload))
          }
      }(bb.properties.$snapshot_data), Yb(bb.properties), "$screen" === bb.event && String(bb.properties.$screen_name).startsWith("custom: ") && (bb.properties.$screen_name = `custom: ${String(bb.properties.game_analytics_id)}`), Yb(bb.properties.$set), Yb(bb.properties.$set_once), Yb(bb.$set), Yb(bb.$set_once)
    }
    const fb = eb.g.map((bb => `.${bb}`)).join(", "),
      Ab = ["iframe", "script", 'link:not([rel~="stylesheet"])', ".AdBannerContainer > [id]", "#GenericVideoInner", "ins.adsbygoogle", '[id^="google_ads_"]'],
      Wb = [".PadKeyboardPreviewText", ".PadKeyboardPhraseRow"].join(", ");

    function Jb(bb, wb) {
      return null !== wb && void 0 !== wb && wb.closest(fb) ? bb : bb.replace(/\S/g, "*")
    }

    function Sb(bb) {
      const wb = function(bb) {
        return bb.anonymised ? {
          enable_recording_console_log: !1,
          session_recording: {
            blockSelector: [...Ab, Rb].join(", "),
            maskTextSelector: "*",
            maskTextFn: bb.showsChat ? Jb : null,
            maskAttributeFn: Db
          }
        } : {
          enable_recording_console_log: !0,
          session_recording: {
            blockSelector: [...Ab, (wb = bb.ownOrigins, `img[src^="http"]${wb.map((bb=>`:not([src^="${bb}/"])`)).join("")}`)].join(", "),
            maskTextSelector: bb.showsChat ? Wb : `${Wb}, ${fb}`,
            maskAttributeFn: Bb
          }
        };
        var wb
      }(bb);
      return {
        api_host: bb.apiHost,
        persistence: "memory",
        bootstrap: {
          distinctID: bb.recordingId,
          isIdentifiedID: !1,
          sessionID: bb.recordingId
        },
        person_profiles: "always",
        mask_personal_data_properties: !0,
        custom_personal_data_properties: [...gb],
        session_idle_timeout_seconds: 36e3,
        disable_external_dependency_loading: !0,
        opt_out_useragent_filter: bb.allowAutomatedBrowsers,
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
        enable_recording_console_log: wb.enable_recording_console_log,
        before_send: wb => {
          const Mb = zb(wb);
          return null === Mb || (bb.anonymised && Zb(Mb), "$snapshot" === Mb.event ? function(bb, wb) {
            const {
              $snapshot_data: Mb,
              $window_id: eb
            } = bb.properties;
            try {
              wb({
                windowId: eb,
                events: Mb
              })
            } catch (Hb) {
              console.error("Session replay couldn't take a page recording batch.", Hb)
            }
          }(Mb, bb.onDomBatch) : bb.onTimelineEvent(Mb)), null
        },
        disable_session_recording: !bb.recordDom,
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
          ...wb.session_recording
        }
      }
    }

    function Nb() {
      return window.__PosthogExtensions__
    }
    var vb = Mb(667),
      Qb = Mb(160);

    function Gb() {
      var bb;
      const wb = navigator,
        Mb = new Date;
      return {
        local_hour: Mb.getHours(),
        local_weekday: Mb.getDay(),
        ...wb.hardwareConcurrency ? {
          cpu_cores: wb.hardwareConcurrency
        } : {},
        ...wb.deviceMemory ? {
          device_memory_gb: wb.deviceMemory
        } : {},
        ...null !== (bb = wb.connection) && void 0 !== bb && bb.effectiveType ? {
          network_type: wb.connection.effectiveType
        } : {}
      }
    }

    function qb(bb) {
      var wb;
      const Mb = bb.tags;
      return {
        panel_entry_reason: null !== (wb = Mb.recording_reason) && void 0 !== wb ? wb : "unknown",
        panel_entry_date: (new Date).toISOString().slice(0, 10),
        ...void 0 === Mb.sample_rate ? {} : {
          panel_entry_sample_rate: Mb.sample_rate
        }
      }
    }

    function ab(bb, wb) {
      return {
        recording_id: bb.recordingId,
        recording_scopes: bb.scopes.join(","),
        dom_recorded: wb
      }
    }

    function ib(bb, wb) {
      const Mb = {};
      for (const [eb, Hb] of Object.entries(wb)) Mb[`${bb}${eb}`] = Hb;
      return Mb
    }
    class ub {
      constructor(bb) {
        this.options = bb, this.buckets = new Map, this.lastEvictionMs = -1 / 0
      }
      allow(bb, wb) {
        this.evictExpired(bb, wb);
        let Mb = this.buckets.get(bb);
        var eb, Hb;
        (void 0 === Mb || wb - Mb.startMs >= this.options.windowMs) && (Mb = {
          startMs: wb,
          count: 0,
          suppressed: null !== (eb = null === (Hb = Mb) || void 0 === Hb ? void 0 : Hb.suppressed) && void 0 !== eb ? eb : 0
        }, this.buckets.set(bb, Mb));
        if (Mb.count >= this.options.maxPerWindow) return Mb.suppressed++, null;
        Mb.count++;
        const pb = Mb.suppressed;
        return Mb.suppressed = 0, pb
      }
      evictExpired(bb, wb) {
        if (!(wb - this.lastEvictionMs < this.options.windowMs)) {
          this.lastEvictionMs = wb;
          for (const [Mb, eb] of this.buckets) {
            const Hb = (wb - eb.startMs) / this.options.windowMs;
            Mb !== bb && Hb >= (0 === eb.suppressed ? 1 : 10) && this.buckets.delete(Mb)
          }
        }
      }
    }

    function db(bb, wb, Mb) {
      const eb = new URL(bb);
      return eb.pathname = `${eb.pathname.replace(/\/+$/,"")}/replay/${encodeURIComponent(wb)}`, eb.searchParams.set("timestamp", String(Math.round(Mb - 5e3))), eb.toString()
    }
    class Pb {
      constructor(bb) {
        this.options = bb, this.throttle = new ub({
          maxPerWindow: 3,
          windowMs: 6e4
        })
      }
      annotate(bb, wb) {
        const Mb = Date.now(),
          eb = this.throttle.allow("logged", Mb);
        var Hb;
        null !== eb && this.options.captureError(bb.message || bb.name, {
          error_name: bb.name || null,
          error_fingerprint: null !== (Hb = wb.fingerprint) && void 0 !== Hb ? Hb : null,
          suppressed_since_last: eb
        });
        return {
          replay_recording_id: this.options.recordingId,
          ...this.options.domRecorded ? {
            replay_url: db(this.options.dashboardHost, this.options.getSessionId(), Mb)
          } : {}
        }
      }
    }

    function nb(bb) {
      return bb < 50 ? "<50" : bb < 100 ? "50-100" : bb < 200 ? "100-200" : bb < 400 ? "200-400" : "400+"
    }
    class yb {
      constructor() {
        this.gamesJoined = [], this.flags = new Set, this.firstGame = null, this.fpsTags = null, this.maxHitchMs = 0, this.pingSumMs = 0, this.pingSamples = 0, this.maxPingMs = 0, this.unboundKeyPresses = new Map
      }
      gameJoined(bb, wb) {
        this.gamesJoined.includes(bb) || this.gamesJoined.push(bb), null === this.firstGame && (this.firstGame = {
          joinedAtMs: wb,
          leftAtMs: null
        })
      }
      gameLeft(bb) {
        null !== this.firstGame && null === this.firstGame.leftAtMs && (this.firstGame.leftAtMs = bb)
      }
      setFlag(bb) {
        return !this.flags.has(bb) && (this.flags.add(bb), !0)
      }
      setFpsTags(bb) {
        this.fpsTags = bb
      }
      addHitch(bb) {
        return !(bb <= this.maxHitchMs) && (this.maxHitchMs = bb, !0)
      }
      addPingSample(bb) {
        const wb = this.pingTags();
        this.pingSumMs += bb, this.pingSamples++, this.maxPingMs = Math.max(this.maxPingMs, bb);
        const Mb = this.pingTags();
        return (null === wb || void 0 === wb ? void 0 : wb.ping_avg_bucket) !== (null === Mb || void 0 === Mb ? void 0 : Mb.ping_avg_bucket) || (null === wb || void 0 === wb ? void 0 : wb.ping_max_bucket) !== (null === Mb || void 0 === Mb ? void 0 : Mb.ping_max_bucket)
      }
      addUnboundKeyPresses(bb) {
        for (const [Mb, eb] of bb) {
          var wb;
          this.unboundKeyPresses.set(Mb, (null !== (wb = this.unboundKeyPresses.get(Mb)) && void 0 !== wb ? wb : 0) + eb)
        }
      }
      toProperties() {
        var bb;
        let wb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return {
          ...{
            first_game: null !== (bb = this.gamesJoined[0]) && void 0 !== bb ? bb : "",
            games_joined: this.gamesJoined.join(","),
            games_joined_count: this.gamesJoined.length,
            quick_quit: this.isQuickQuit(wb),
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
        let bb = 0,
          wb = "",
          Mb = 0;
        for (const [eb, Hb] of this.unboundKeyPresses) bb += Hb, (Hb > Mb || Hb === Mb && eb < wb) && (wb = eb, Mb = Hb);
        return {
          unbound_key_presses: bb,
          top_unbound_key: wb
        }
      }
      pingTags() {
        return 0 === this.pingSamples ? null : {
          ping_avg_bucket: nb(this.pingSumMs / this.pingSamples),
          ping_max_bucket: nb(this.maxPingMs)
        }
      }
      isQuickQuit(bb) {
        var wb;
        if (null === this.firstGame) return !1;
        const Mb = null !== (wb = this.firstGame.leftAtMs) && void 0 !== wb ? wb : bb;
        return null !== Mb && Mb - this.firstGame.joinedAtMs < eb.k
      }
    }
    var ob = Mb(1301),
      Tb = Mb(1129),
      kb = Mb(382),
      bw = Mb(1136),
      ww = Mb(1126),
      Mw = Mb(4015),
      ew = Mb(26),
      Hw = Mb(2142),
      pw = Mb(29),
      Vw = Mb(1447),
      gw = Mb(1391),
      lw = Mb(1680),
      Lw = Mb(2389),
      Iw = Mb(1821),
      Ow = Mb(41210),
      Uw = Mb(110),
      tw = Mb(41204),
      Cw = Mb(1415);
    class Ew {
      constructor(bb, wb, Mb) {
        this.replay = bb, this.quitContext = wb, this.flows = Mb, this.errorThrottle = new ub({
          maxPerWindow: 3,
          windowMs: 6e4
        }), this.hitchThrottle = new ub({
          maxPerWindow: 5,
          windowMs: 6e4
        }), this.attachedToRender = !1
      }
      start() {
        window.addEventListener("error", (bb => {
            const wb = bb.error;
            this.captureError("error", bb.message, bb.filename ? `${bb.filename}:${bb.lineno}:${bb.colno}` : null, wb instanceof Error ? wb.name : null, (0, tw.c)(bb))
          })), window.addEventListener("unhandledrejection", (bb => {
            const wb = bb.reason;
            this.captureError("unhandled_rejection", wb instanceof Error ? wb.message : String(wb), null, wb instanceof Error ? wb.name : null, (0, tw.c)(bb))
          })), pw.k.subscribe("unrecoverableError", (bb => {
            this.captureError("unrecoverable", bb, null, null, !0)
          })),
          function(bb) {
            var wb, Mb;
            if ("undefined" === typeof PerformanceObserver || null === (wb = null === (Mb = PerformanceObserver.supportedEntryTypes) || void 0 === Mb ? void 0 : Mb.includes("long-animation-frame")) || void 0 === wb || !wb) return;
            let eb = null;
            new PerformanceObserver((wb => {
              for (const pb of wb.getEntries()) {
                var Mb, Hb;
                const wb = pb,
                  Vb = !(null !== eb && wb.startTime - eb.endMs < 50) || wb.duration >= 3 * (null !== (Mb = null === (Hb = eb) || void 0 === Hb ? void 0 : Hb.durationMs) && void 0 !== Mb ? Mb : 0);
                eb = {
                  endMs: wb.startTime + wb.duration,
                  durationMs: wb.duration
                }, !document.hidden && wb.duration >= 100 && Vb && bb({
                  frameMs: wb.duration,
                  mainThreadMs: (0, Cw.n)(wb)
                })
              }
            })).observe({
              type: "long-animation-frame"
            })
          }((bb => {
            this.onFrameHitch(bb)
          }))
      }
      attachToRender() {
        if (this.attachedToRender) return;
        const bb = (0, gw.K)().gameRender();
        null !== bb && (this.attachedToRender = !0, this.replay.setSessionProperties(Object.fromEntries([
          ["renderer", bb.renderer],
          ["gpu_vendor", (0, Uw.getGpuVendor)()]
        ])), bb.canvas.addEventListener("webglcontextlost", (() => {
          this.replay.setFlag("had_error"), this.replay.capture("webgl_context_lost")
        })), bb.canvas.addEventListener("webglcontextrestored", (() => {
          this.replay.capture("webgl_context_restored")
        })))
      }
      captureError(bb, wb, Mb, Hb, pb) {
        const Vb = sb(wb).slice(0, 300);
        pb && null !== this.flows.stay && this.quitContext.noteError(performance.now());
        const gb = this.errorThrottle.allow(`${bb}:${Vb}`, Date.now());
        null !== gb && (this.replay.captureClientError(bb, Vb, {
          source: Mb,
          error_name: Hb,
          suppressed_since_last: gb
        }), this.replay.addReplayMarker(eb.j.error, {
          kind: bb,
          message: Vb
        }))
      }
      onFrameHitch(bb) {
        let {
          frameMs: wb,
          mainThreadMs: Mb
        } = bb;
        const eb = this.flows.stay;
        if (null === eb || null === eb.playableAtMs || performance.now() - eb.playableAtMs < 2e3) return;
        (0, Iw.q)() || this.quitContext.noteHitch(performance.now()), this.replay.addHitch(Math.round(wb));
        const Hb = this.hitchThrottle.allow("frame_hitch", Date.now());
        null !== Hb && this.replay.capture("frame_hitch", {
          Xl: Math.round(wb),
          main_thread_ms: Math.round(Mb),
          game_name_with_variation: eb.name,
          suppressed_since_last: Hb
        })
      }
    }
    var Fw = Mb(7682),
      Bw = Mb(366);
    class sw {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.steps = bb, this.furthestIndex = -1, this.heldIndex = -1, this.gateIndex = void 0, this.gateIndex = null === wb ? 1 / 0 : bb.indexOf(wb)
      }
      reach(bb) {
        const wb = this.steps.indexOf(bb);
        if (wb > this.gateIndex && this.furthestIndex < this.gateIndex) return this.heldIndex = Math.max(this.heldIndex, wb), null;
        const Mb = wb === this.gateIndex ? Math.max(wb, this.heldIndex) : wb;
        return Mb <= this.furthestIndex ? null : (this.furthestIndex = Mb, Mb)
      }
      get furthest() {
        return -1 === this.furthestIndex ? null : this.steps[this.furthestIndex]
      }
      get furthestStepIndex() {
        return this.furthestIndex
      }
    }
    const mw = {
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
    class hw {
      constructor(bb) {
        this.threshold = bb, this.times = [], this.armed = !0, this.lastAtMs = -1 / 0
      }
      note(bb) {
        const {
          count: wb,
          windowMs: Mb
        } = this.threshold;
        if (!this.armed && bb - this.lastAtMs >= Mb && (this.armed = !0), this.lastAtMs = bb, !this.armed) return !1;
        for (this.times.push(bb); this.times.length > 0 && bb - this.times[0] >= Mb;) this.times.shift();
        return !(this.times.length < wb) && (this.times.length = 0, this.armed = !1, !0)
      }
    }
    class zw {
      constructor(bb) {
        this.onSignal = bb, this.bursts = new Map, this.seen = [], this.signalCount = 0, this.idleCounted = !1;
        for (const [wb, Mb] of Object.entries(mw)) this.bursts.set(wb, new hw(Mb))
      }
      note(bb, wb) {
        if (this.bursts.get(bb).note(wb)) {
          const {
            count: wb,
            windowMs: Mb
          } = mw[bb];
          this.signal(bb, wb, Mb)
        }
      }
      checkIdle(bb) {
        let {
          nowMs: wb,
          lastInputAtMs: Mb,
          pointerLocked: eb,
          playable: Hb,
          visible: pb
        } = bb;
        wb - (null !== Mb && void 0 !== Mb ? Mb : 0) < 3e4 ? this.idleCounted = !1 : !this.idleCounted && eb && Hb && pb && (this.idleCounted = !0, this.signal("idle_pointer_locked", 1, 3e4))
      }
      tags() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const wb = bb && !this.seen.includes("rage_quit") ? [...this.seen, "rage_quit"] : this.seen;
        return {
          frustration_score: this.signalCount + (bb ? 1 : 0),
          frustration_signals: wb.join(",")
        }
      }
      signal(bb, wb, Mb) {
        this.signalCount++, this.seen.includes(bb) || this.seen.push(bb), this.onSignal(bb, wb, Mb)
      }
    }
    const Xw = Fw.e.indexOf("first_input"),
      xw = Fw.e.indexOf("first_move"),
      jw = {
        keyboardMouse: "keyboard",
        touch: "touch",
        gamepad: "pad"
      };
    class Kw {
      constructor(bb, wb, Mb) {
        this.replay = bb, this.quitContext = wb, this.deps = Mb, this.ladder = new sw(Fw.b, "first_move"), this.frustration = void 0, this.frustrationThrottle = new ub({
          maxPerWindow: 5,
          windowMs: 6e4
        }), this.activations = new Set, this.currentStay = null, this.moveSubscriptions = [], this.everPlayable = !1, this.everPointerLocked = !1, this.pointerUnlockedAtMs = -1 / 0, this.everythingMenu = null, this.lastGameName = null, this.unsentStepMarkers = [], this.frustration = new zw(((bb, wb, Mb) => {
          this.onFrustration(bb, wb, Mb)
        })), wb.setFlowProperties((bb => this.quitProperties(bb)))
      }
      get stay() {
        return this.currentStay
      }
      start() {
        var bb;
        this.reachStep("page_loaded"), pw.k.subscribe("sessionReplayStayOpened", (bb => {
          this.resendStay(bb)
        })), pw.k.subscribe("pointerLockUpdate", (bb => {
          this.pointerLockChanged(bb)
        })), pw.k.subscribe("localBlockMined", (() => {
          this.blockBroken()
        })), pw.k.subscribe("blockChangeRefused", (() => {
          this.noteFrustration("block_change_refused")
        })), pw.k.subscribe("controlsTutorialShown", (bb => {
          this.controlsTutorialShown(bb)
        })), pw.k.subscribe("showShopTouchTutorial", (bb => {
          !1 !== bb && this.controlsTutorialShown("shop")
        })), pw.k.subscribe("appManagerUpdated|openInGameMenuName", (bb => {
          this.inGameMenuChanged(bb)
        })), pw.k.subscribe("appManagerUpdated|openEverythingMenuName", (bb => {
          this.everythingMenuChanged(bb)
        })), document.addEventListener("pointerlockerror", (() => {
          this.pointerLockFailed()
        })), null === (bb = (0, Ow.e)()) || void 0 === bb || bb.onUnboundKey((() => {
          this.unboundKeyPressed()
        }))
      }
      gameLoading() {
        this.reachStep("game_loading")
      }
      gameJoined(bb, wb, Mb) {
        const eb = Mb && wb === this.lastGameName;
        this.lastGameName = wb, this.stopWatchingMoves();
        const Hb = {
          name: wb,
          joinedAtMs: Date.now(),
          playableAtMs: null,
          visiblePlayedMs: 0,
          deaths: 0,
          ladder: new sw(Fw.e, "first_move"),
          unboundKeyPresses: 0
        };
        return this.currentStay = Hb, this.reachStayStep("joined"), bb >= 2 && !eb && this.reachStep("second_game"), Hb
      }
      gamePlayable() {
        const bb = this.currentStay;
        null !== bb && (bb.playableAtMs = this.deps.now(), this.everPlayable = !0, this.reachStep("game_playable"), this.reachStayStep("game_playable"), this.deps.isPointerLocked() && this.pointerLocked(), this.watchMoves())
      }
      input() {
        const bb = this.currentStay;
        null === bb || null === bb.playableAtMs || bb.ladder.furthestStepIndex >= Xw || (this.reachStep("first_input"), this.reachStayStep("first_input"))
      }
      played60s() {
        this.reachStep("played_60s"), this.reachStayStep("played_60s")
      }
      gameLeft() {
        this.stopWatchingMoves(), this.currentStay = null
      }
      sO() {
        var bb, wb, Mb;
        this.sendStepMarkers(), this.frustration.checkIdle({
          nowMs: this.deps.now(),
          lastInputAtMs: Math.max(null !== (bb = this.quitContext.getLastInputAtMs()) && void 0 !== bb ? bb : 0, null !== (wb = null === (Mb = this.currentStay) || void 0 === Mb ? void 0 : Mb.playableAtMs) && void 0 !== wb ? wb : 0),
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
          input: jw[this.deps.getInputDevice()]
        }), this.reachStep("first_move"), this.reachStayStep("first_move")
      }
      blockBroken() {
        this.isPlayable() && (this.activate("first_block_broken"), this.reachStep("first_block"), this.reachStayStep("first_block"))
      }
      inGameMenuChanged(bb) {
        null !== bb && this.menuOpened(bb, "inventory" === bb ? "first_inventory_open" : null)
      }
      everythingMenuChanged(bb) {
        const wb = null === this.everythingMenu;
        this.everythingMenu = bb, null !== bb && (this.menuOpened(bb, bb === Bw.l.SETTINGS ? "first_settings_open" : null), bb === Bw.l.SETTINGS && wb && null !== this.currentStay && this.noteFrustration("menu_toggling"))
      }
      pointerLockChanged(bb) {
        bb ? this.pointerLocked() : this.pointerUnlockedAtMs = this.deps.now()
      }
      controlsTutorialShown(bb) {
        const wb = `controls_tutorial_${bb}`;
        this.activations.has(wb) || (this.activations.add(wb), this.replay.capture("controls_tutorial_shown", {
          tutorial: bb,
          ...this.timing()
        }))
      }
      unboundKeyPressed() {
        this.noteFrustration("unbound_key_burst");
        const bb = this.currentStay;
        null !== bb && bb.unboundKeyPresses < Fw.i && (bb.unboundKeyPresses++, this.deps.publishStayProgress({
          unboundKeyPresses: bb.unboundKeyPresses
        }))
      }
      noteFrustration(bb) {
        this.frustration.note(bb, this.deps.now())
      }
      quitProperties(bb) {
        return {
          ...this.ladderTags(),
          ...this.frustration.tags(bb),
          never_pointer_locked: this.everPlayable && !this.everPointerLocked && !this.deps.isTouchScreen() && "gamepad" !== this.deps.getInputDevice()
        }
      }
      isPlayable() {
        return null !== this.currentStay && null !== this.currentStay.playableAtMs
      }
      ladderTags() {
        var bb;
        return {
          furthest_step: null !== (bb = this.ladder.furthest) && void 0 !== bb ? bb : "",
          furthest_step_index: this.ladder.furthestStepIndex
        }
      }
      reachStep(bb) {
        null !== this.ladder.reach(bb) && (this.replay.setSessionProperties(this.ladderTags(), !1), this.unsentStepMarkers.push(Fw.b.indexOf(bb)), this.sendStepMarkers())
      }
      sendStepMarkers() {
        for (; this.unsentStepMarkers.length > 0 && this.replay.addReplayMarker(eb.j.step, {
            step: this.unsentStepMarkers[0]
          }, !0);) this.unsentStepMarkers.shift()
      }
      resendStay(bb) {
        const wb = this.currentStay;
        var Mb;
        null !== wb && wb.name === bb && this.deps.publishStayProgress({
          furthestStep: null !== (Mb = wb.ladder.furthest) && void 0 !== Mb ? Mb : void 0,
          unboundKeyPresses: wb.unboundKeyPresses
        })
      }
      reachStayStep(bb) {
        var wb;
        const Mb = null === (wb = this.currentStay) || void 0 === wb ? void 0 : wb.ladder;
        void 0 !== Mb && null !== Mb.reach(bb) && this.deps.publishStayProgress({
          furthestStep: Mb.furthest
        })
      }
      menuOpened(bb, wb) {
        this.replay.capture("menu_opened", {
          menu: bb
        }), null !== wb && this.activate(wb)
      }
      activate(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.activations.has(bb) || (this.activations.add(bb), this.replay.capture(bb, {
          ...wb,
          ...this.timing()
        }))
      }
      timing() {
        var bb, wb;
        const Mb = this.deps.now(),
          eb = null !== (bb = null === (wb = this.currentStay) || void 0 === wb ? void 0 : wb.playableAtMs) && void 0 !== bb ? bb : null;
        return {
          ms_since_page_load: Math.round(Mb),
          ms_since_playable: null === eb ? null : Math.round(Mb - eb)
        }
      }
      onFrustration(bb, wb, Mb) {
        this.replay.setSessionProperties(this.frustration.tags(), !1), this.replay.addReplayMarker(eb.j.frustration, {
          signal: Fw.c.indexOf(bb)
        });
        const Hb = this.frustrationThrottle.allow(bb, Date.now());
        null !== Hb && this.replay.capture("frustration_signal", {
          signal: bb,
          count: wb,
          window_ms: Mb,
          suppressed_since_last: Hb
        })
      }
      watchMoves() {
        var bb, wb;
        if (0 === this.moveSubscriptions.length && (null !== (bb = null === (wb = this.currentStay) || void 0 === wb ? void 0 : wb.ladder.furthestStepIndex) && void 0 !== bb ? bb : 1 / 0) < xw) {
          const bb = () => {
            this.moved()
          };
          this.moveSubscriptions = [pw.k.subscribe("usedKeyboard", bb), pw.k.subscribe("stickMoved", bb)]
        }
      }
      stopWatchingMoves() {
        for (const bb of this.moveSubscriptions) pw.k.unsubscribe(bb);
        this.moveSubscriptions = []
      }
    }
    const rw = ["quit_after_hitch", "quit_after_death", "quit_during_load", "quit_in_menu", "quit_idle", "quit_after_ad"],
      Rw = ["quit_during_load", "quit_after_ad", "quit_after_death", "quit_after_hitch", "quit_idle", "quit_in_menu"];

    function Dw(bb) {
      var wb;
      return null !== (wb = Rw.find((wb => bb.includes(wb)))) && void 0 !== wb ? wb : "none"
    }

    function Yw(bb, wb, Mb) {
      return null !== bb && wb - bb < Mb
    }
    class Zw {
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
      setFlowProperties(bb) {
        this.flowProperties = bb
      }
      noteInput(bb) {
        this.history.lastInputAtMs = bb
      }
      noteHitch(bb) {
        this.history.lastHitchAtMs = bb
      }
      noteDeath(bb) {
        this.history.lastDeathAtMs = bb
      }
      noteError(bb) {
        this.history.lastErrorAtMs = bb
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
      noteAdFinished(bb) {
        this.history.adPlaying = !1, this.history.lastAdFinishedAtMs = bb
      }
      noteLoadStep(bb) {
        this.lastLoadStep = bb
      }
      getLastLoadStep() {
        return this.lastLoadStep
      }
      quit(bb) {
        const wb = function(bb, wb) {
            var Mb, eb;
            const Hb = [];
            return Yw(wb.lastHitchAtMs, bb.nowMs, 15e3) && Hb.push("quit_after_hitch"), Yw(wb.lastDeathAtMs, bb.nowMs, 15e3) && Hb.push("quit_after_death"), bb.loading ? Hb.push("quit_during_load") : "page" !== bb.quitFrom || bb.inGame && !bb.menuOpen || Hb.push("quit_in_menu"), Yw(null !== (Mb = wb.lastInputAtMs) && void 0 !== Mb ? Mb : 0, bb.nowMs, 6e4) || Hb.push("quit_idle"), (!0 === wb.adPlaying || Yw(null !== (eb = wb.lastAdFinishedAtMs) && void 0 !== eb ? eb : null, bb.nowMs, 3e4)) && Hb.push("quit_after_ad"), Hb
          }(bb, this.history),
          Mb = function(bb, wb) {
            var Mb;
            return Yw(wb.lastDeathAtMs, bb, 1e4) || Yw(null !== (Mb = wb.lastErrorAtMs) && void 0 !== Mb ? Mb : null, bb, 1e4)
          }(bb.nowMs, this.history),
          eb = {
            quit_from: bb.quitFrom,
            in_game: bb.inGame,
            quit_reasons: wb.join(","),
            quit_reason: Dw(wb),
            rage_quit: Mb,
            ...this.flowProperties(Mb)
          };
        var Hb;
        wb.includes("quit_during_load") && (eb.last_load_step = null !== (Hb = this.lastLoadStep) && void 0 !== Hb ? Hb : "none");
        null !== bb.gameName && (eb.game_name_with_variation = bb.gameName, eb.game_name = (0, kb.Zb)(bb.gameName));
        for (const pb of rw) eb[pb] = wb.includes(pb);
        return {
          reasons: wb,
          properties: eb
        }
      }
    }
    class fw {
      constructor(bb) {
        this.deps = bb, this.quitContext = new Zw, this.loading = !1, this.inGame = !1, this.switching = !1, this.nextLeaveIsNotAQuit = !1, this.pendingQuit = null, this.exited = !1
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
      joinFailed(bb) {
        this.loading = !1, this.nextLeaveIsNotAQuit = this.inGame, this.deps.capture("join_failed", bb)
      }
      disconnected() {
        this.nextLeaveIsNotAQuit = !0
      }
      kickedForAfk(bb) {
        this.nextLeaveIsNotAQuit = !0, this.deps.capture("kicked_afk", {
          game_name_with_variation: bb
        })
      }
      gameLeft(bb) {
        const wb = this.nextLeaveIsNotAQuit || this.deps.isJoinAbandoned(),
          Mb = this.switching,
          eb = this.loading;
        if (this.nextLeaveIsNotAQuit = !1, this.switching = !1, this.inGame = !1, null === bb) return;
        if (Mb || (this.loading = !1), wb) return void this.quitContext.forgetGame();
        const Hb = this.quitContext.quit({
          quitFrom: "game",
          gameName: bb,
          nowMs: this.deps.now(),
          inGame: !0,
          loading: eb,
          menuOpen: !1
        });
        this.quitContext.forgetGame(), Mb ? this.captureSwitch(Hb) : this.startPendingQuit(Hb)
      }
      gameReplayOpened(bb) {
        this.nextLeaveIsNotAQuit = !0, this.gameLeft(bb), this.deps.capture("game_replay_opened", {
          from_game_name_with_variation: bb
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
      pageHidden(bb) {
        if (this.exited) return;
        this.exited = !0;
        const wb = this.pendingQuit;
        null !== wb && (clearTimeout(wb.timer), this.pendingQuit = null, this.deps.onGameQuit(wb.quit), this.deps.captureOnExit("quit_context", wb.quit.properties, wb.atEpochMs));
        const Mb = {
            quitFrom: "page",
            gameName: null,
            nowMs: this.deps.now(),
            inGame: this.inGame,
            loading: this.loading,
            menuOpen: this.deps.isMenuOpen()
          },
          eb = this.quitContext.quit(Mb);
        this.inGame && this.deps.onGameQuit(eb), this.deps.captureOnExit("quit_context", {
          ...bb,
          ...eb.properties
        })
      }
      pageRestored() {
        this.exited = !1, this.deps.capture("page_restored", {})
      }
      startPendingQuit(bb) {
        this.resolvePendingQuitAsSwitch();
        const wb = {
          quit: bb,
          atEpochMs: Date.now(),
          timer: setTimeout((() => {
            this.pendingQuit === wb && (this.pendingQuit = null, this.deps.onGameQuit(bb), this.deps.capture("quit_context", bb.properties, wb.atEpochMs))
          }), 1e4)
        };
        this.pendingQuit = wb
      }
      resolvePendingQuitAsSwitch() {
        const bb = this.pendingQuit;
        null !== bb && (clearTimeout(bb.timer), this.pendingQuit = null, "string" === typeof bb.quit.properties.game_name_with_variation && this.captureSwitch(bb.quit))
      }
      captureSwitch(bb) {
        this.deps.capture("game_switched", {
          from_game_name_with_variation: bb.properties.game_name_with_variation,
          from_game_name: bb.properties.game_name,
          after_death: bb.reasons.includes("quit_after_death"),
          after_hitch: bb.reasons.includes("quit_after_hitch")
        })
      }
    }
    var Aw = Mb(7695);
    class Ww {
      constructor(bb) {
        this.replay = bb, this.pointerLockThrottle = new ub({
          maxPerWindow: 10,
          windowMs: 6e4
        }), this.counts = new Map, this.game = null, this.timer = null
      }
      start(bb) {
        bb.onUnboundKey((bb => {
          this.onUnboundKey(bb)
        })), bb.onPointerLock((bb => {
          const wb = this.pointerLockThrottle.allow("pointer_lock_changed", Date.now());
          null !== wb && this.replay.capture("pointer_lock_changed", {
            locked: bb,
            in_game: "inGame" === ew.c.get("gameState"),
            menu_open: (0, Iw.q)(),
            suppressed_since_last: wb
          })
        })), pw.k.subscribe("leaveGame", (() => {
          this.flush(!1)
        })), document.addEventListener("visibilitychange", (() => {
          document.hidden && this.flush(!0)
        }))
      }
      onUnboundKey(bb) {
        var wb, Mb;
        const eb = (0, Vw.e)().gameNameWithVariation;
        eb !== this.game && (this.flush(!1), this.game = eb);
        const Hb = null !== (wb = (0, Aw.g)(bb)) && void 0 !== wb ? wb : bb;
        this.counts.set(Hb, (null !== (Mb = this.counts.get(Hb)) && void 0 !== Mb ? Mb : 0) + 1), this.timer ??= setTimeout((() => {
          this.flush(!1)
        }), 1e4 - Date.now() % 1e4)
      }
      flush(bb) {
        if (null !== this.timer && (clearTimeout(this.timer), this.timer = null), 0 === this.counts.size) return;
        const wb = (Mb = this.counts, [...Mb].sort(((bb, wb) => wb[1] - bb[1] || (bb[0] < wb[0] ? -1 : 1))));
        var Mb;
        let eb = 0;
        for (const [, pb] of wb) eb += pb;
        const Hb = {
          key_counts: Object.fromEntries(wb),
          keys: wb.map((bb => {
            let [wb] = bb;
            return wb
          })).join(","),
          top_key: wb[0][0],
          presses: eb,
          game_name: null === this.game ? null : (0, kb.Zb)(this.game),
          game_name_with_variation: this.game
        };
        this.replay.addUnboundKeyPresses(this.counts), this.counts.clear(), bb ? this.replay.captureOnExit("unbound_keys", Hb) : this.replay.capture("unbound_keys", Hb)
      }
    }
    var Jw = Mb(192);

    function Sw(bb) {
      var wb, Mb;
      return null !== (wb = null === (Mb = Jw.i[bb]) || void 0 === Mb ? void 0 : Mb.toLowerCase()) && void 0 !== wb ? wb : String(bb)
    }
    class Nw {
      constructor(bb, wb) {
        this.replay = bb, this.quitContext = wb, this.startedAtMs = null, this.steps = new Map, this.firstGamePlayable = !1
      }
      started() {
        this.startedAtMs = Date.now()
      }
      stepCompleted(bb) {
        if (this.steps.has(bb)) return;
        const wb = performance.now();
        this.steps.set(bb, wb);
        const Mb = Sw(bb);
        this.quitContext.noteLoadStep(Mb), this.firstGamePlayable || this.replay.capture("game_load_step", {
          load_step: Mb,
          step_number: bb,
          ms_since_page_load: Math.round(wb),
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
        let bb = null,
          wb = null;
        for (const [eb, Hb] of [...this.steps].sort(((bb, wb) => bb[1] - wb[1]))) null !== wb && (null === bb || Hb - wb > bb.ms) && (bb = {
          step: eb,
          ms: Hb - wb
        }), wb = Hb;
        const Mb = null === this.startedAtMs ? null : Date.now() - this.startedAtMs;
        return this.firstGamePlayable = !0, this.ended(), {
          load_ms: Mb,
          slowest_load_step: null === bb ? null : Sw(bb.step),
          slowest_load_step_ms: null === bb ? null : Math.round(bb.ms)
        }
      }
      resetSteps() {
        this.steps.clear(), this.quitContext.noteLoadStep(null)
      }
    }
    const vw = ["keydown", "pointerdown", "touchstart"];
    class Qw {
      constructor(bb) {
        this.replay = bb, this.firstInGameInputSent = !1
      }
      startFirstInputWatch() {
        setTimeout((() => {
          ! function(bb) {
            var wb;
            let Mb = !1;
            const eb = (wb, eb, Hb) => {
              Mb || (Mb = !0, bb(wb, eb, Hb))
            };
            if ("undefined" !== typeof PerformanceObserver && null !== (wb = PerformanceObserver.supportedEntryTypes) && void 0 !== wb && wb.includes("first-input")) {
              const bb = new PerformanceObserver((wb => {
                const [Mb] = wb.getEntries();
                bb.disconnect(), eb(Mb.name, Mb.startTime, !0)
              }));
              return void bb.observe({
                type: "first-input",
                buffered: !0
              })
            }
            const Hb = new AbortController,
              pb = bb => {
                Hb.abort(), eb(bb.type, bb.timeStamp, !1)
              };
            for (const Vb of vw) window.addEventListener(Vb, pb, {
              capture: !0,
              passive: !0,
              signal: Hb.signal
            })
          }(((bb, wb, Mb) => {
            this.replay.capture("first_input", Object.fromEntries([
              ["input_type", bb],
              ["ms_since_page_load", Math.round(wb)],
              ["buffered", Mb]
            ]))
          }))
        }), 100)
      }
      onFirstInGameInput(bb, wb) {
        this.firstInGameInputSent = !0, this.replay.capture("first_ingame_input", Object.fromEntries([
          ["input_type", bb],
          ["ms_since_playable", Math.round(performance.now() - wb)],
          ["ms_since_page_load", Math.round(performance.now())]
        ]))
      }
      capturePageLoadTiming() {
        const bb = performance.getEntriesByType("navigation")[0],
          wb = performance.getEntriesByName("first-contentful-paint")[0];
        this.replay.capture("page_load_timing", {
          ttfb_ms: bb ? Math.round(bb.responseStart) : null,
          first_contentful_paint_ms: wb ? Math.round(wb.startTime) : null,
          dom_content_loaded_ms: bb ? Math.round(bb.domContentLoadedEventEnd) : null,
          load_ms: bb ? Math.round(bb.loadEventEnd) : null,
          transfer_kb: bb ? Math.round(bb.transferSize / 1024) : null,
          recording_started_ms: Math.round(performance.now())
        })
      }
    }
    class Gw {
      constructor(bb, wb) {
        this.replay = bb, this.quitContext = wb, this.settings = ew.c.get("clientEscMenuOptions"), this.pendingSettings = {}, this.settingsTimer = null, this.adRequest = null, this.playingAd = null
      }
      start() {
        pw.k.subscribe("purchaseStarted", (bb => {
          let {
            product: wb
          } = bb;
          this.replay.setFlag("purchase_intent"), this.replay.capture("purchase_started", {
            product: wb
          })
        })), pw.k.subscribe("purchaseEnded", (bb => {
          let {
            outcome: wb
          } = bb;
          this.replay.capture("purchase_ended", {
            outcome: wb
          })
        })), pw.k.subscribe("adRequested", (bb => {
          let {
            adKind: wb,
            provider: Mb
          } = bb;
          this.adRequest = {
            adKind: wb,
            provider: Mb,
            atMs: performance.now()
          }
        })), pw.k.subscribe("appManagerUpdated|soundOnFromAd", (bb => {
          bb && null !== this.playingAd ? this.onAdFinished() : bb || null !== this.playingAd || this.onAdStarted()
        })), pw.k.subscribe("appManagerUpdated|clientEscMenuOptions", (bb => {
          ew.c.isApplyingDefaults ? this.settings = bb : this.onSettingsChanged(bb)
        }))
      }
      onAdStarted() {
        var bb, wb;
        const Mb = performance.now(),
          eb = null !== this.adRequest && Mb - this.adRequest.atMs < 6e4 ? this.adRequest : null;
        this.adRequest = null, this.playingAd = {
          ad_kind: null !== (bb = null === eb || void 0 === eb ? void 0 : eb.adKind) && void 0 !== bb ? bb : "unknown",
          provider: null !== (wb = null === eb || void 0 === eb ? void 0 : eb.provider) && void 0 !== wb ? wb : null,
          startedAtMs: Mb
        }, this.replay.setFlag("ad_shown"), this.quitContext.noteAdStarted(), this.replay.capture("ad_started", this.adProperties(this.playingAd, Mb))
      }
      onAdFinished() {
        const bb = performance.now(),
          wb = this.playingAd;
        this.playingAd = null, this.quitContext.noteAdFinished(bb), this.replay.capture("ad_finished", {
          ...this.adProperties(wb, bb),
          ad_ms: Math.round(bb - wb.startedAtMs)
        })
      }
      adProperties(bb, wb) {
        return {
          ad_kind: bb.ad_kind,
          provider: bb.provider,
          minutes_since_page_load: Math.floor(wb / 6e4),
          in_game: "inGame" === ew.c.get("gameState")
        }
      }
      onSettingsChanged(bb) {
        Object.assign(this.pendingSettings, function(bb, wb) {
          const Mb = {};
          for (const eb of Object.keys(wb)) bb[eb] !== wb[eb] && (Mb[eb] = wb[eb]);
          return Mb
        }(this.settings, bb)), this.settings = bb, null !== this.settingsTimer && clearTimeout(this.settingsTimer), this.settingsTimer = setTimeout((() => {
          this.settingsTimer = null, Object.keys(this.pendingSettings).length > 0 && (this.replay.capture("settings_changed", {
            changed_settings: Object.keys(this.pendingSettings),
            values: this.pendingSettings
          }), this.pendingSettings = {})
        }), 2e3)
      }
    }

    function qw(bb) {
      switch ((0, ob.o)(bb)) {
        case Tb.d.DISCORD_GUILD:
          return "discord_guild";
        case Tb.d.DISCORD_DM:
          return "discord_dm";
        default:
          return (0, ob.E)(bb) ? "public" : "private"
      }
    }
    class aw {
      constructor(bb) {
        this.replay = bb, this.framesThisTick = 0, this.lastTickMs = performance.now(), this.ticks = 0, this.gamesJoined = 0, this.pageEvents = void 0, this.flows = void 0, this.health = void 0, this.leaves = void 0, this.joinLoad = void 0, this.unsubscribeDeaths = () => {}, this.inputSinceActiveMarker = !1, this.firstMinutePlayedSent = !1, this.pageEvents = new Qw(bb), this.leaves = new fw({
          capture: (wb, Mb, eb) => {
            void 0 === eb ? bb.capture(wb, Mb) : bb.captureAt(wb, Mb, eb)
          },
          captureOnExit: (wb, Mb, eb) => {
            bb.captureOnExit(wb, Mb, eb)
          },
          onGameQuit: bb => {
            let {
              reasons: wb,
              properties: Mb
            } = bb;
            const eb = Mb.game_name_with_variation;
            pw.k.iI("sessionReplayGameQuit", {
              reasons: wb,
              gameName: "string" === typeof eb ? eb : null
            })
          },
          isMenuOpen: Iw.q,
          isJoinAbandoned: Lw.d,
          now: () => performance.now()
        }), this.joinLoad = new Nw(bb, this.leaves.quitContext), this.flows = function(bb, wb) {
          return new Kw(bb, wb, {
            now: () => performance.now(),
            isTouchScreen: () => ew.c.get("isTouchScreen"),
            getInputDevice: () => ew.c.get("activeInputDevice"),
            isPointerLocked: () => null !== document.pointerLockElement,
            isPageVisible: () => !document.hidden,
            publishStayProgress: bb => {
              pw.k.iI("sessionReplayStayProgress", bb)
            }
          })
        }(bb, this.leaves.quitContext), this.health = new Ew(bb, this.leaves.quitContext, this.flows)
      }
      start() {
        const bb = (0, Ow.e)(),
          wb = new Ww(this.replay);
        null !== bb && wb.start(bb), this.pageEvents.capturePageLoadTiming(), this.flows.start();
        const Mb = ew.c.get("gameState");
        "inGame" === Mb ? this.joinConnectedGame() : "loadingScreen" !== Mb && "findingLobby" !== Mb || this.leaves.joinStarted(), this.subscribeToGameFlow(), new Gw(this.replay, this.leaves.quitContext).start(), this.health.start(), this.trackInput(), this.pageEvents.startFirstInputWatch(), (0, gw.C)((() => {
          this.framesThisTick++
        })), setInterval((() => {
          this.Wm()
        }), 1e3), window.addEventListener("pagehide", (() => {
          wb.flush(!0), this.leaves.pageHidden(this.replay.finalTags())
        })), window.addEventListener("pageshow", (bb => {
          bb.persisted && this.leaves.pageRestored()
        }))
      }
      trackInput() {
        const bb = bb => {
          var wb, Mb;
          this.inputSinceActiveMarker = !0, this.leaves.quitContext.noteInput(bb.timeStamp), this.flows.input();
          const eb = null !== (wb = null === (Mb = this.flows.stay) || void 0 === Mb ? void 0 : Mb.playableAtMs) && void 0 !== wb ? wb : null;
          this.pageEvents.firstInGameInputSent || null === eb || this.pageEvents.onFirstInGameInput(bb.type, eb)
        };
        for (const wb of ["keydown", "pointerdown", "pointermove", "wheel"]) window.addEventListener(wb, bb, {
          capture: !0,
          passive: !0
        })
      }
      subscribeToGameFlow() {
        pw.k.subscribe("joinedGame", (bb => {
          let {
            gameNameWithVariation: wb,
            lobbyName: Mb
          } = bb;
          (0, Lw.d)() || this.onJoinedGame(wb, Mb)
        })), pw.k.subscribe("leaveGame", (() => {
          var bb, wb;
          const Mb = null !== (bb = null === (wb = this.flows.stay) || void 0 === wb ? void 0 : wb.name) && void 0 !== bb ? bb : null;
          this.onLeftGame(), this.leaves.gameLeft(Mb)
        })), pw.k.subscribe("replayViewer|replayLoaded", (() => {
          const bb = this.flows.stay;
          null !== bb && (this.onLeftGame(), this.leaves.gameReplayOpened(bb.name))
        })), pw.k.subscribe("matchmakeAndPlayStepCompleted", (bb => {
          let {
            step: wb
          } = bb;
          this.joinLoad.stepCompleted(wb)
        })), pw.k.subscribe("leftPlayPage", (() => {
          this.leaves.playPageLeft(), this.joinLoad.ended()
        })), pw.k.subscribe("joinFailed", (bb => {
          let {
            step: wb,
            severity: Mb
          } = bb;
          this.leaves.joinFailed({
            step: wb,
            severity: Mb,
            game_name_with_variation: (0, Vw.e)().requestedGameNameWithVariation,
            last_load_step: this.leaves.quitContext.getLastLoadStep()
          }), this.joinLoad.ended()
        })), pw.k.subscribe("kickedForAfk", (() => {
          var bb, wb;
          this.leaves.kickedForAfk(null !== (bb = null === (wb = this.flows.stay) || void 0 === wb ? void 0 : wb.name) && void 0 !== bb ? bb : null)
        })), pw.k.subscribe("unwantedLeftGame", (bb => {
          this.leaves.disconnected(), this.replay.setFlag("disconnected"), this.replay.capture("disconnected", {
            reason: bb.reason,
            can_reconnect: bb.canReconnect,
            automatically_reconnect: bb.automaticallyReconnect,
            requires_refresh: bb.requiresRefresh
          })
        })), pw.k.subscribe("appManagerUpdated|gameState", (bb => {
          "loadingScreen" === bb ? this.leaves.joinStarted() : "findingLobby" === bb ? (this.leaves.joinStarted(), this.joinLoad.started(), this.replay.capture("game_loading_started", {
            entry_source: ew.c.get("gameEntrySource")
          }), this.flows.gameLoading()) : "inGame" === bb ? this.onPlayable() : "landingPage" === bb && (this.replay.capture("homepage_viewed"), this.replay.capture("$screen", {
            $screen_name: "homepage"
          }))
        })), pw.k.subscribe("appManagerUpdated|gameEntrySource", (bb => {
          "autoReconnect" !== bb && "manualReconnect" !== bb || this.replay.capture("reconnect_attempted", {
            automatic: "autoReconnect" === bb
          })
        })), pw.k.subscribe("sessionReplayPlayerKill", (bb => {
          let {
            killstreak: wb
          } = bb;
          this.replay.capture("player_kill", {
            killstreak: wb
          })
        }))
      }
      onPlayable() {
        (0, Lw.d)() || (0, Vw.f)() || (null === this.flows.stay && this.joinConnectedGame(), this.replay.capture("game_playable", {
          ms_since_page_load: Math.round(performance.now()),
          ...this.joinLoad.playable()
        }), this.leaves.gamePlayable(), this.flows.gamePlayable())
      }
      joinConnectedGame() {
        if ((0, Vw.f)()) return;
        const {
          gameNameWithVariation: bb,
          lobbyName: wb
        } = (0, Vw.e)();
        null !== bb && null !== wb ? this.onJoinedGame(bb, wb) : console.warn("Session replay found a game playable with no game joined; not labelling it")
      }
      onJoinedGame(bb, wb) {
        this.replay.takeFullSnapshot();
        const Mb = (0, ob.E)(wb),
          eb = ew.c.get("gameEntrySource");
        this.gamesJoined++, this.leaves.gameJoined(), this.flows.gameJoined(this.gamesJoined, bb, "autoReconnect" === eb || "manualReconnect" === eb), "inGame" === ew.c.get("gameState") && this.flows.gamePlayable();
        const Hb = lw.clientSidePartyStateManager.getPartyInformation(),
          pb = {
            game_name: (0, kb.Zb)(bb),
            game_name_with_variation: bb,
            game_number: this.gamesJoined,
            game_analytics_id: (0, bw.f)(bb, Mb),
            is_custom_game: (0, ww.j)(bb),
            lobby_type: qw(wb),
            in_party: null !== Hb,
            party_size: null === Hb ? 0 : Hb.memberSocialPreviews.length + 1
          };
        this.replay.gameJoined(bb, pb), this.replay.capture("game_joined", {
          ...pb,
          entry_source: eb
        }), this.replay.capture("$screen", {
          $screen_name: pb.is_custom_game ? `custom: ${pb.game_analytics_id}` : pb.game_name
        }), this.subscribeToDeaths(bb)
      }
      onLeftGame() {
        this.joinLoad.forgetStart();
        const bb = this.flows.stay;
        null !== bb && (this.replay.capture("game_left", {
          game_name_with_variation: bb.name,
          duration_ms: Date.now() - bb.joinedAtMs
        }), this.flows.gameLeft(), this.replay.gameLeft(), this.unsubscribeDeaths(), this.unsubscribeDeaths = () => {})
      }
      subscribeToDeaths(bb) {
        this.unsubscribeDeaths();
        let wb = !0;
        this.unsubscribeDeaths = Hw.gameBridge.subscribe("localPlayerAliveSet", (Mb => {
          const Hb = wb && !Mb;
          if (wb = Mb, Hb) {
            this.leaves.quitContext.noteDeath(performance.now());
            const [wb, Mb, Hb] = Hw.gameBridge.lookup("localPos", null), pb = {
              x: Math.round(wb),
              y: Math.round(Mb),
              z: Math.round(Hb)
            }, Vb = this.flows.stay, gb = null === Vb ? {} : {
              death_number: ++Vb.deaths,
              seconds_since_join: Math.round((Date.now() - Vb.joinedAtMs) / 1e3)
            };
            this.replay.capture("player_died", {
              ...pb,
              game_name_with_variation: bb,
              ...gb
            }), this.replay.addReplayMarker(eb.j.death, pb)
          }
        }))
      }
      Wm() {
        this.health.attachToRender();
        const bb = performance.now(),
          wb = bb - this.lastTickMs,
          Mb = wb <= 5e3,
          Hb = this.flows.stay;
        if (null !== Hb && null !== Hb.playableAtMs && !document.hidden && Mb && Hb.visiblePlayedMs < 6e4 && (Hb.visiblePlayedMs += wb, Hb.visiblePlayedMs >= 6e4)) {
          const wb = Math.round(bb);
          this.replay.capture("game_played_60s", {
            game_name_with_variation: Hb.name,
            ms_since_page_load: wb,
            ...this.firstMinutePlayedSent ? {} : {
              ttff_ms: wb
            }
          }), this.firstMinutePlayedSent = !0, this.flows.played60s()
        }
        this.flows.sO();
        const pb = null !== this.flows.stay && !document.hidden;
        this.replay.addFpsSample(pb && Mb && this.framesThisTick > 0 ? 1e3 * this.framesThisTick / wb : null);
        const Vb = pb ? Mw.c.getLastColyseusPingMs() : null;
        null !== Vb && this.replay.addPingSample(Vb), this.framesThisTick = 0, this.lastTickMs = bb, this.ticks++, this.ticks % 2 === 0 && (pb && this.inputSinceActiveMarker && this.replay.addReplayMarker(eb.j.active), this.inputSinceActiveMarker = !1), this.replay.markClockIfDue(this.ticks, 30)
      }
    }
    var iw = Mb(1280),
      uw = Mb(1271),
      dw = Mb(41161);

    function Pw(bb) {
      return bb.length + 64
    }
    async function nw() {
      return new Response("{}")
    }

    function yw(bb, wb, Mb) {
      return dw.c.fetch(bb, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain"
        },
        body: wb,
        signal: (0, iw.t)(3e4)
      }, Mb)
    }
    class ow {
      constructor(bb) {
        var wb, Mb, eb;
        let Hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.uploadToken = bb, this.url = void 0, this.post = void 0, this.isHidden = void 0, this.queue = [], this.retries = [], this.refusedTokens = new Set, this.overflowWarned = !1, this.unloading = !1, this.sendScheduled = !1, this.url = null !== (wb = Hb.url) && void 0 !== wb ? wb : `${uw.clientSideServerUrls.indexUrl}/index/replay/timeline`, this.post = null !== (Mb = Hb.post) && void 0 !== Mb ? Mb : yw, this.isHidden = null !== (eb = Hb.isHidden) && void 0 !== eb ? eb : () => "hidden" === document.visibilityState
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
      add(bb) {
        if (this.refusedTokens.has(this.uploadToken)) return;
        const wb = function(bb) {
            const wb = {
              ...bb.properties
            };
            return void 0 !== bb.$set && (wb.$set = {
              ...bb.properties.$set,
              ...bb.$set
            }), void 0 !== bb.$set_once && (wb.$set_once = {
              ...bb.$set_once,
              ...bb.properties.$set_once
            }), void 0 !== bb.$unset && (wb.$unset = bb.$unset), {
              uuid: bb.uuid,
              event: bb.event,
              timestampMs: bb.timestamp.getTime(),
              properties: JSON.stringify(wb)
            }
          }(bb),
          Mb = (0, dw.g)(JSON.stringify(wb));
        wb.properties.length > 32768 || wb.event.length > 64 || Pw(this.uploadToken) + Mb > 102400 ? console.warn(`Session replay timeline event ${wb.event.slice(0,64)} is too large for index-server; dropped.`) : (this.queue.push({
          uploadToken: this.uploadToken,
          event: wb,
          bytes: Mb,
          attempts: 0
        }), this.trimToCap(), this.queue.length >= 50 ? this.sendQueued() : (this.unloading || this.isHidden()) && this.sendSoon())
      }
      sendSoon() {
        this.sendScheduled || (this.sendScheduled = !0, queueMicrotask((() => {
          this.sendScheduled = !1, this.sendQueued()
        })))
      }
      flush() {
        this.retries.length > 0 && (this.queue = [...this.retries, ...this.queue].sort(((bb, wb) => bb.event.timestampMs - wb.event.timestampMs)), this.retries = []), this.sendQueued()
      }
      sendQueued() {
        for (; this.queue.length > 0;) {
          const bb = this.takeBatch();
          this.refusedTokens.has(bb.uploadToken) || this.send(bb)
        }
      }
      trimToCap() {
        let bb = this.retries.length + this.queue.length - 1e3;
        if (bb <= 0) return void(this.overflowWarned = !1);
        const wb = Math.min(bb, this.retries.length);
        this.retries.splice(0, wb), bb -= wb, this.queue.splice(0, bb), this.overflowWarned || (this.overflowWarned = !0, console.warn("Session replay timeline queue is full; dropping its oldest events until it drains."))
      }
      takeBatch() {
        const bb = this.queue.shift(),
          wb = [bb];
        let Mb = Pw(bb.uploadToken) + bb.bytes;
        for (; this.queue.length > 0 && wb.length < 100 && this.queue[0].uploadToken === bb.uploadToken && Mb + this.queue[0].bytes <= 32768;) {
          const bb = this.queue.shift();
          wb.push(bb), Mb += bb.bytes
        }
        return {
          uploadToken: bb.uploadToken,
          events: wb
        }
      }
      async send(bb) {
        const wb = await this.sendOnce(bb);
        if ("refused" === wb && this.refusedTokens.add(bb.uploadToken), "retryLater" !== wb) return;
        const Mb = bb.events.filter((bb => ++bb.attempts < 3));
        Mb.length < bb.events.length && console.error(`Session replay timeline: dropped ${bb.events.length-Mb.length} events after 3 attempts.`), this.retries.push(...Mb), this.trimToCap()
      }
      async sendOnce(bb) {
        const wb = {
            uploadToken: bb.uploadToken,
            sentAtMs: Date.now(),
            events: bb.events.map((bb => bb.event))
          },
          Mb = JSON.stringify(wb);
        let eb, Hb = null;
        try {
          eb = await this.post(this.url, Mb, (0, dw.g)(Mb)), eb.ok && (Hb = await eb.json())
        } catch (pb) {
          return console.warn("Session replay timeline upload failed.", pb), "retryLater"
        }
        return null === Hb ? 408 === eb.status || 429 === eb.status || eb.status >= 500 ? "retryLater" : (console.error(`Session replay timeline upload failed with ${eb.status}; dropped ${bb.events.length} events.`), "dropped") : "rejected" in Hb ? Hb.retryable ? "retryLater" : (console.warn(`Session replay timeline refused: ${Hb.reason}; dropping this recording's events.`), "refused") : "sent"
      }
    }
    var Tw = Mb(41179),
      kw = Mb(5524),
      bM = Mb(1400);
    class wM {
      constructor(bb) {
        var wb;
        this.tags = new yb, this.fpsMonitor = void 0, this.errorLogLink = void 0, this.lastTagsJson = "", this.clockMarked = !1, this.personUpdateTimer = null, this.expectedSessionId = "", this.recorderPatched = !1, this.gameContextKeys = [], this.firstGameJoined = !1, this.timeline = void 0, this.onDomBatch = void 0;
        const {
          recording: Mb
        } = bb;
        this.onDomBatch = bb.onDomBatch;
        const Vb = null !== bb.onDomBatch;
        Vb && this.patchRecorder(), this.timeline = new ow(Mb.uploadToken, bb.dryRun ? {
            post: nw
          } : {}), this.timeline.start(),
          function(bb) {
            const wb = {
                supportedCompression: [Hb.b.GZipJS],
                hasFeatureFlags: !1,
                sessionRecording: {
                  endpoint: "/s/"
                },
                siteApps: [],
                toolbarParams: {},
                toolbarVersion: "toolbar",
                isAuthenticated: !1
              },
              Mb = window;
            Mb._POSTHOG_REMOTE_CONFIG = {
              ...Mb._POSTHOG_REMOTE_CONFIG,
              [bb]: {
                config: wb
              }
            }
          }(bb.posthog.projectApiKey), Hb.f.init(bb.posthog.projectApiKey, Sb({
            apiHost: bb.posthog.apiHost,
            recordingId: Mb.recordingId,
            recordDom: Vb,
            ownOrigins: [window.location.origin, new URL(uw.clientSideServerUrls.s3Url, window.location.href).origin],
            anonymised: Mb.anonymised,
            showsChat: (0, eb.s)(Mb),
            allowAutomatedBrowsers: (0, kw.e)((0, kw.h)(), !1),
            onTimelineEvent: bb => {
              this.timeline.add(bb), "$pageview" === bb.event && bb.properties.$current_url && this.addReplayMarker("$pageview", {
                href: bb.properties.$current_url
              })
            },
            onDomBatch: bb => {
              this.takeDomBatch(bb)
            }
          })), Vb && Hb.f.startSessionRecording({
            sampling: !0
          }), this.expectedSessionId = Mb.recordingId, Hb.f.onSessionId((bb => {
            bb !== this.expectedSessionId && console.warn(`Session replay: PostHog session ${bb} differs from recording ${this.expectedSessionId}; events carry recording_id.`)
          })),
          function(bb, wb) {
            const {
              recording: Mb
            } = bb, eb = {
              ...Mb.tags,
              site_used: Qb.siteUsed,
              subsite_used: null !== Qb.subsiteUsed && void 0 !== Qb.subsiteUsed ? Qb.subsiteUsed : "",
              is_iframed: Qb.isIframed,
              entry_path: location.pathname,
              ...Gb(),
              ...ab(Mb, wb),
              client_build: vb.e
            };
            Hb.f.register(eb), null !== bb.videoStatus && Hb.f.register({
              replay_video_status: bb.videoStatus
            }), Hb.f.setPersonProperties(eb, {
              ...ib("initial_", eb),
              ...qb(Mb)
            })
          }(bb, Vb), this.fpsMonitor = new pb.c({
            onEpisodeStarted: bb => {
              this.capture("low_fps_started", {
                avg_fps: Math.round(bb)
              }), pw.k.iI("sessionReplayLowFps", {
                low: !0
              })
            },
            onEpisodeEnded: bb => {
              this.capture("low_fps_episode", {
                duration_ms: bb.durationMs,
                min_fps: bb.minFps,
                avg_fps: bb.avgFps
              }), pw.k.iI("sessionReplayLowFps", {
                low: !1
              })
            }
          }), this.errorLogLink = new Pb({
            dashboardHost: null !== (wb = bb.posthog.dashboardHost) && void 0 !== wb ? wb : bb.posthog.apiHost,
            recordingId: Mb.recordingId,
            getSessionId: () => Hb.f.get_session_id(),
            domRecorded: Vb,
            captureError: (bb, wb) => {
              this.captureClientError("logged", bb, wb)
            }
          }), (0, bM.annotateLoggedErrors)(((bb, wb) => this.errorLogLink.annotate(bb, wb))), new aw(this).start()
      }
      capture(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        Hb.f.capture(bb, wb)
      }
      captureAt(bb, wb, Mb) {
        Hb.f.capture(bb, wb, {
          timestamp: new Date(Mb)
        })
      }
      captureOnExit(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        Hb.f.capture(bb, wb, {
          timestamp: new Date(Mb)
        })
      }
      captureClientError(bb, wb, Mb) {
        this.setFlag("had_error"), this.capture("client_error", {
          kind: bb,
          message: sb(wb).slice(0, 300),
          source: null,
          error_name: null,
          ...Mb
        })
      }
      takeFullSnapshot() {
        if (this.tryFullSnapshot()) return;
        const bb = performance.now() + 1500,
          wb = setInterval((() => {
            (this.tryFullSnapshot() || performance.now() >= bb) && clearInterval(wb)
          }), 100)
      }
      setVideoStatus(bb, wb) {
        Hb.f.register({
          replay_video_status: bb
        });
        const Mb = "stopped_cellular" === bb ? "cellular" : "stopped_error" === bb ? "error" : null;
        null !== Mb && (this.capture("replay_video_stopped", {
          reason: Mb,
          detail: null === wb ? null : sb(wb).slice(0, 300)
        }), this.addReplayMarker("replay_video_stopped", {
          reason: Mb
        }))
      }
      stopDomRecording() {
        Hb.f.stopSessionRecording(), Hb.f.register({
          dom_recorded: !1
        })
      }
      optOut() {
        this.stopDomRecording(), Hb.f.set_config({
          before_send: () => null
        })
      }
      takeDomBatch(bb) {
        null !== this.onDomBatch ? this.onDomBatch(bb) : console.warn("Session replay: posthog-js recorded the page of an events-only recording; dropped it")
      }
      tryFullSnapshot() {
        var bb;
        return !(null === (bb = Hb.f.sessionRecording) || void 0 === bb || !bb.started) && (Nb().rrweb.record.takeFullSnapshot(), !0)
      }
      patchRecorder() {
        this.recorderPatched || (this.recorderPatched = !0, function() {
          const bb = Nb().rrwebPlugins,
            wb = bb.getRecordConsolePlugin;
          bb.getRecordConsolePlugin = () => wb({
            level: ["warn", "error", "assert"]
          })
        }(), this.markClockOnFullSnapshots())
      }
      markClockOnFullSnapshots() {
        const bb = Nb().rrweb.record,
          wb = bb.takeFullSnapshot;
        bb.takeFullSnapshot = bb => {
          wb(bb), this.markClock()
        }
      }
      markClock() {
        this.clockMarked = this.addReplayMarker(eb.j.clock, {
          epochMs: (0, Tw.e)(),
          perfNowMs: performance.now()
        }) || this.clockMarked
      }
      markClockIfDue(bb, wb) {
        this.clockMarked && bb % wb !== 0 || this.markClock()
      }
      addReplayMarker(bb) {
        var wb, Mb;
        let eb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (!(arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) || Hb.f.sessionRecordingStarted()) && null !== (wb = null === (Mb = Hb.f.sessionRecording) || void 0 === Mb ? void 0 : Mb.tryAddCustomEvent(bb, eb)) && void 0 !== wb && wb
      }
      gameJoined(bb, wb) {
        this.unregisterGameContext(), this.gameContextKeys = Object.keys(wb), Hb.f.register(wb), this.firstGameJoined || (this.firstGameJoined = !0, Hb.f.setPersonProperties(void 0, {
          first_game_ever: wb.game_name,
          first_game_ever_with_variation: wb.game_name_with_variation,
          first_game_ever_analytics_id: wb.game_analytics_id
        })), this.tags.gameJoined(bb, Date.now()), this.updateTags()
      }
      gameLeft() {
        this.unregisterGameContext(), this.tags.gameLeft(Date.now()), this.fpsMonitor.endEpisode(Date.now()), this.updateTags()
      }
      setFlag(bb) {
        this.tags.setFlag(bb) && this.updateTags()
      }
      addHitch(bb) {
        this.tags.addHitch(bb) && this.updateTags()
      }
      setSessionProperties(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        Hb.f.register(bb), wb && Hb.f.setPersonProperties(bb)
      }
      addPingSample(bb) {
        this.tags.addPingSample(bb) && this.updateTags()
      }
      addFpsSample(bb) {
        this.fpsMonitor.addSample(bb, Date.now());
        const wb = this.fpsMonitor.getTags();
        null !== wb && (this.tags.setFpsTags(wb), this.updateTags())
      }
      addUnboundKeyPresses(bb) {
        this.tags.addUnboundKeyPresses(bb), this.updateTags()
      }
      finalTags() {
        return this.fpsMonitor.endEpisode(Date.now()), this.tags.toProperties(Date.now())
      }
      updateTags() {
        const bb = this.tags.toProperties(),
          wb = JSON.stringify(bb);
        wb !== this.lastTagsJson && (this.lastTagsJson = wb, Hb.f.register(bb), null === this.personUpdateTimer && (this.personUpdateTimer = setTimeout((() => {
          this.personUpdateTimer = null, Hb.f.setPersonProperties(this.tags.toProperties())
        }), 0)))
      }
      unregisterGameContext() {
        for (const bb of this.gameContextKeys) Hb.f.unregister(bb);
        this.gameContextKeys = []
      }
    }
  },
  41179: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb
    });
    const eb = 20;
    let Hb = Date.now() - performance.now();

    function pb() {
      const bb = performance.now(),
        wb = Date.now();
      return Math.abs(wb - (bb + Hb)) > eb && (Hb = wb - bb), bb + Hb
    }
  },
  41161: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb,
      c: () => pb,
      g: () => Hb
    });
    const eb = 32768;

    function Hb(bb) {
      return (new TextEncoder).encode(bb).byteLength
    }
    const pb = new class {
      constructor() {
        this.inFlightBytes = 0, this.inFlightLabels = new Map
      }
      async fetch(bb, wb, Mb, eb) {
        if (this.inFlightBytes + Mb > 49152) return await fetch(bb, wb);
        this.inFlightBytes += Mb, this.countLabel(eb, 1);
        const Hb = () => {
          this.inFlightBytes -= Mb, this.countLabel(eb, -1)
        };
        let pb;
        try {
          pb = await fetch(bb, {
            ...wb,
            keepalive: !0
          })
        } catch (gb) {
          var Vb;
          if (Hb(), null !== (Vb = wb.signal) && void 0 !== Vb && Vb.aborted) throw gb;
          return console.info("Session replay keepalive request failed; retrying without keepalive.", gb), await fetch(bb, wb)
        }
        return Hb(), pb
      }
      isInFlight(bb) {
        var wb;
        return (null !== (wb = this.inFlightLabels.get(bb)) && void 0 !== wb ? wb : 0) > 0
      }
      sendBeacon(bb, wb) {
        const Mb = Hb(wb);
        return !(this.inFlightBytes + Mb > 57344) && this.beaconSent(navigator.sendBeacon(bb, new Blob([wb], {
          type: "text/plain"
        })), Mb)
      }
      sendUploadBeacon(bb, wb, Mb) {
        return !(this.inFlightBytes + Mb > 40960) && this.beaconSent(navigator.sendBeacon(bb, wb), Mb)
      }
      countLabel(bb, wb) {
        var Mb;
        void 0 !== bb && this.inFlightLabels.set(bb, (null !== (Mb = this.inFlightLabels.get(bb)) && void 0 !== Mb ? Mb : 0) + wb)
      }
      beaconSent(bb, wb) {
        return bb && (this.inFlightBytes += wb, setTimeout((() => {
          this.inFlightBytes -= wb
        }), 1e4)), bb
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);