export const id = 62;
export const ids = [62];
export const modules = {
  41459: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      ReplayPostHog: () => mm
    });
    var Wd = md(4615),
      Fd = md(41466),
      Rd = md(41450);
    const Xd = new Set(["partycode", "lobby", "vm", "invite", "invitecode", "code", "token", "access_token", "id_token", "refresh_token", "auth", "key", "state", "ticket", "jointicket", "secret", "password", "sig", "signature"]),
      Kd = new Set(["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "bfcid", "irclid", "_kx", "_gl", "yclid", "srsltid", "mc_eid", "s_kwcid", "ef_id", "_hsenc", "mkt_tok"]),
      hd = "redacted",
      vd = /([?&#])([^=&#?\s"']+)=([^&#?\s"'<>\\]*)/g,
      Qd = /(\/play\/[^/?#\s"'<>\\]+\/)[^/?#\s"'<>\\]+/gi,
      td = /\/play\//i,
      od = /lobby|party/i;

    function Nd(dd) {
      try {
        return decodeURIComponent(dd)
      } catch {
        return null
      }
    }

    function qd(dd) {
      const Od = dd.includes("%") ? Nd(dd) : null;
      if (null === Od || Od === dd) return dd;
      let md = Hd(`?${Od}`).slice(1);
      return md === Od && (md = qd(Od)), md === Od ? dd : encodeURIComponent(md)
    }

    function Hd(dd) {
      return dd.includes("=") || td.test(dd) ? dd.replace(vd, ((dd, Od, md, Wd) => {
        var Fd;
        const Rd = (null !== (Fd = Nd(md)) && void 0 !== Fd ? Fd : md).toLowerCase();
        if (Xd.has(Rd)) return `${Od}${md}=${hd}`;
        if (Kd.has(Rd) && "" !== Wd) return `${Od}${md}=<masked>`;
        const vd = qd(Wd);
        return vd === Wd ? dd : `${Od}${md}=${vd}`
      })).replace(Qd, `$1${hd}`) : dd
    }
    const yd = new Set(["href", "src", "srcset", "action", "formaction", "poster", "xlink:href"]);

    function bd(dd, Od) {
      return yd.has(dd.toLowerCase()) ? Hd(Od) : Od
    }

    function Td(dd) {
      return od.test(dd) ? hd : Hd(dd)
    }

    function pd(dd) {
      if (dd)
        for (const [Od, md] of Object.entries(dd)) "string" === typeof md && (dd[Od] = Hd(md))
    }

    function Yd(dd) {
      var Od;
      Array.isArray(dd.payload) && (dd.payload = (Od = dd.payload).some((dd => "string" === typeof dd && od.test(dd))) ? [JSON.stringify(hd)] : Od.map((dd => "string" === typeof dd ? Hd(dd) : dd))), Array.isArray(dd.trace) && (dd.trace = dd.trace.map((dd => "string" === typeof dd ? Hd(dd) : dd)))
    }

    function gd(dd) {
      if (null === dd) return null;
      const Od = dd.properties.$snapshot_data;
      return pd(dd.properties), pd(dd.properties.$set), pd(dd.properties.$set_once), pd(dd.$set), pd(dd.$set_once),
        function(dd) {
          if (Array.isArray(dd))
            for (const Od of dd) {
              const dd = null === Od || void 0 === Od ? void 0 : Od.data;
              if (!dd || "object" !== typeof dd) continue;
              "string" === typeof dd.href && (dd.href = Hd(dd.href));
              const md = dd.payload;
              md && "object" === typeof md && (Od.type === Wd.b.Plugin && "string" === typeof dd.plugin && dd.plugin.includes("console") ? Yd(md) : pd(md))
            }
        }(Od), dd
    }
    const wd = new Set(["class", "id", "rel", "type", "role", "tabindex", "width", "height", "dir", "lang", "disabled", "hidden", "checked", "selected", "readonly", "draggable", "media", "charset", "crossorigin", "aria-hidden", "aria-expanded", "aria-selected", "aria-pressed", "aria-checked", "aria-disabled", "xmlns", "viewbox", "d", "fill", "stroke", "stroke-width", "transform", "x", "y", "cx", "cy", "r", "points", "x1", "y1", "x2", "y2", "rx", "ry", "opacity", "fill-rule", "clip-rule", "stroke-linecap", "stroke-linejoin", "preserveaspectratio", "xmlns:xlink", "colspan", "rowspan"]),
      Ed = new Set(["_csstext", "rr_width", "rr_height", "rr_left", "rr_top", "rr_position", "rr_transform", "rr_display", "rr_scrollleft", "rr_scrolltop", "rr_mediastate", "rr_open_mode"]),
      Jd = new Set(["data-pad-key", "data-pad-repeat"]),
      Ud = new Set(["href", "src", "srcset", "xlink:href"]),
      xd = new Set(["title", "$title", "message", "detail", "game_display_name"]),
      Bd = "img, picture, video";

    function Sd(dd, Od, md) {
      const Wd = dd.toLowerCase();
      return "style" === Wd ? Od.replace(/url\((?:"[^"]*"|'[^']*'|[^)]*)\)/gi, "none") : Ud.has(Wd) && "A" !== md.tagName ? bd(dd, Od) : wd.has(Wd) || Ed.has(Wd) || Wd.startsWith("data-pad-") && !Jd.has(Wd) ? Od : Od.replace(/\S/g, "*")
    }

    function sd(dd) {
      if (!/^(https?:\/\/|\/)/i.test(dd)) return dd;
      let Od;
      try {
        Od = new URL(dd, "https://bloxd.invalid")
      } catch {
        return dd
      }
      const [md = "", ...Wd] = Od.pathname.split("/").slice(1), Fd = `/${md}${Wd.some((dd=>""!==dd))?"/*":""}`;
      return dd.startsWith("/") ? Fd : `${Od.origin}${Fd}`
    }

    function ud(dd) {
      if (dd)
        for (const [Od, md] of Object.entries(dd)) xd.has(Od) ? delete dd[Od] : "string" === typeof md && (dd[Od] = sd(md))
    }

    function Vd(dd) {
      ! function(dd) {
        if (Array.isArray(dd))
          for (const Od of dd) {
            const dd = null === Od || void 0 === Od ? void 0 : Od.data;
            dd && "object" === typeof dd && ("string" === typeof dd.href && (dd.href = sd(dd.href)), dd.payload && "object" === typeof dd.payload && ud(dd.payload))
          }
      }(dd.properties.$snapshot_data), ud(dd.properties), "$screen" === dd.event && String(dd.properties.$screen_name).startsWith("custom: ") && (dd.properties.$screen_name = `custom: ${String(dd.properties.game_analytics_id)}`), ud(dd.properties.$set), ud(dd.properties.$set_once), ud(dd.$set), ud(dd.$set_once)
    }
    const Ad = Wd.h.map((dd => `.${dd}`)).join(", "),
      rd = ["iframe", "script", 'link:not([rel~="stylesheet"])', ".AdBannerContainer > [id]", "#GenericVideoInner", "ins.adsbygoogle", '[id^="google_ads_"]'],
      Gd = [".PadKeyboardPreviewText", ".PadKeyboardPhraseRow"].join(", ");

    function nd(dd, Od) {
      return null !== Od && void 0 !== Od && Od.closest(Ad) ? dd : dd.replace(/\S/g, "*")
    }

    function Ld(dd) {
      const Od = function(dd) {
        return dd.anonymised ? {
          enable_recording_console_log: !1,
          session_recording: {
            blockSelector: [...rd, Bd].join(", "),
            maskTextSelector: "*",
            maskTextFn: dd.showsChat ? nd : null,
            maskAttributeFn: Sd
          }
        } : {
          enable_recording_console_log: !0,
          session_recording: {
            blockSelector: [...rd, (Od = dd.ownOrigins, `img[src^="http"]${Od.map((dd=>`:not([src^="${dd}/"])`)).join("")}`)].join(", "),
            maskTextSelector: dd.showsChat ? Gd : `${Gd}, ${Ad}`,
            maskAttributeFn: bd
          }
        };
        var Od
      }(dd);
      return {
        api_host: dd.apiHost,
        persistence: "memory",
        bootstrap: {
          distinctID: dd.recordingId,
          isIdentifiedID: !1,
          sessionID: dd.recordingId
        },
        person_profiles: "always",
        mask_personal_data_properties: !0,
        custom_personal_data_properties: [...Kd],
        session_idle_timeout_seconds: 36e3,
        disable_external_dependency_loading: !0,
        opt_out_useragent_filter: dd.allowAutomatedBrowsers,
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
        enable_recording_console_log: Od.enable_recording_console_log,
        before_send: Od => {
          const md = gd(Od);
          return null === md || (dd.anonymised && Vd(md), "$snapshot" === md.event ? function(dd, Od) {
            const {
              $snapshot_data: md,
              $window_id: Wd
            } = dd.properties;
            try {
              Od({
                windowId: Wd,
                events: md
              })
            } catch (Fd) {
              console.error("Session replay couldn't take a page recording batch.", Fd)
            }
          }(md, dd.onDomBatch) : dd.onTimelineEvent(md)), null
        },
        disable_session_recording: !dd.recordDom,
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
          ...Od.session_recording
        }
      }
    }

    function Pd() {
      return window.__PosthogExtensions__
    }
    var zd = md(708),
      cd = md(151);

    function jd() {
      var dd;
      const Od = navigator,
        md = new Date;
      return {
        local_hour: md.getHours(),
        local_weekday: md.getDay(),
        ...Od.hardwareConcurrency ? {
          cpu_cores: Od.hardwareConcurrency
        } : {},
        ...Od.deviceMemory ? {
          device_memory_gb: Od.deviceMemory
        } : {},
        ...null !== (dd = Od.connection) && void 0 !== dd && dd.effectiveType ? {
          network_type: Od.connection.effectiveType
        } : {}
      }
    }

    function Dd(dd) {
      var Od;
      const md = dd.tags;
      return {
        panel_entry_reason: null !== (Od = md.recording_reason) && void 0 !== Od ? Od : "unknown",
        panel_entry_date: (new Date).toISOString().slice(0, 10),
        ...void 0 === md.sample_rate ? {} : {
          panel_entry_sample_rate: md.sample_rate
        }
      }
    }

    function ed(dd, Od) {
      return {
        recording_id: dd.recordingId,
        recording_scopes: dd.scopes.join(","),
        dom_recorded: Od
      }
    }

    function Id(dd, Od) {
      const md = {};
      for (const [Wd, Fd] of Object.entries(Od)) md[`${dd}${Wd}`] = Fd;
      return md
    }
    class ld {
      constructor(dd) {
        this.options = dd, this.buckets = new Map, this.lastEvictionMs = -1 / 0
      }
      allow(dd, Od) {
        this.evictExpired(dd, Od);
        let md = this.buckets.get(dd);
        var Wd, Fd;
        (void 0 === md || Od - md.startMs >= this.options.windowMs) && (md = {
          startMs: Od,
          count: 0,
          suppressed: null !== (Wd = null === (Fd = md) || void 0 === Fd ? void 0 : Fd.suppressed) && void 0 !== Wd ? Wd : 0
        }, this.buckets.set(dd, md));
        if (md.count >= this.options.maxPerWindow) return md.suppressed++, null;
        md.count++;
        const Rd = md.suppressed;
        return md.suppressed = 0, Rd
      }
      evictExpired(dd, Od) {
        if (!(Od - this.lastEvictionMs < this.options.windowMs)) {
          this.lastEvictionMs = Od;
          for (const [md, Wd] of this.buckets) {
            const Fd = (Od - Wd.startMs) / this.options.windowMs;
            md !== dd && Fd >= (0 === Wd.suppressed ? 1 : 10) && this.buckets.delete(md)
          }
        }
      }
    }

    function Cd(dd, Od, md) {
      const Wd = new URL(dd);
      return Wd.pathname = `${Wd.pathname.replace(/\/+$/,"")}/replay/${encodeURIComponent(Od)}`, Wd.searchParams.set("timestamp", String(Math.round(md - 5e3))), Wd.toString()
    }
    class Zd {
      constructor(dd) {
        this.options = dd, this.throttle = new ld({
          maxPerWindow: 3,
          windowMs: 6e4
        })
      }
      annotate(dd, Od) {
        const md = Date.now(),
          Wd = this.throttle.allow("logged", md);
        var Fd;
        null !== Wd && this.options.captureError(dd.message || dd.name, {
          error_name: dd.name || null,
          error_fingerprint: null !== (Fd = Od.fingerprint) && void 0 !== Fd ? Fd : null,
          suppressed_since_last: Wd
        });
        return {
          replay_recording_id: this.options.recordingId,
          ...this.options.domRecorded ? {
            replay_url: Cd(this.options.dashboardHost, this.options.getSessionId(), md)
          } : {}
        }
      }
    }

    function kd(dd) {
      return dd < 50 ? "<50" : dd < 100 ? "50-100" : dd < 200 ? "100-200" : dd < 400 ? "200-400" : "400+"
    }
    class fd {
      constructor() {
        this.gamesJoined = [], this.flags = new Set, this.firstGame = null, this.fpsTags = null, this.maxHitchMs = 0, this.pingSumMs = 0, this.pingSamples = 0, this.maxPingMs = 0, this.unboundKeyPresses = new Map
      }
      gameJoined(dd, Od) {
        this.gamesJoined.includes(dd) || this.gamesJoined.push(dd), null === this.firstGame && (this.firstGame = {
          joinedAtMs: Od,
          leftAtMs: null
        })
      }
      gameLeft(dd) {
        null !== this.firstGame && null === this.firstGame.leftAtMs && (this.firstGame.leftAtMs = dd)
      }
      setFlag(dd) {
        return !this.flags.has(dd) && (this.flags.add(dd), !0)
      }
      setFpsTags(dd) {
        this.fpsTags = dd
      }
      addHitch(dd) {
        return !(dd <= this.maxHitchMs) && (this.maxHitchMs = dd, !0)
      }
      addPingSample(dd) {
        const Od = this.pingTags();
        this.pingSumMs += dd, this.pingSamples++, this.maxPingMs = Math.max(this.maxPingMs, dd);
        const md = this.pingTags();
        return (null === Od || void 0 === Od ? void 0 : Od.ping_avg_bucket) !== (null === md || void 0 === md ? void 0 : md.ping_avg_bucket) || (null === Od || void 0 === Od ? void 0 : Od.ping_max_bucket) !== (null === md || void 0 === md ? void 0 : md.ping_max_bucket)
      }
      addUnboundKeyPresses(dd) {
        for (const [md, Wd] of dd) {
          var Od;
          this.unboundKeyPresses.set(md, (null !== (Od = this.unboundKeyPresses.get(md)) && void 0 !== Od ? Od : 0) + Wd)
        }
      }
      toProperties() {
        var dd;
        let Od = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return {
          ...{
            first_game: null !== (dd = this.gamesJoined[0]) && void 0 !== dd ? dd : "",
            games_joined: this.gamesJoined.join(","),
            games_joined_count: this.gamesJoined.length,
            quick_quit: this.isQuickQuit(Od),
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
        let dd = 0,
          Od = "",
          md = 0;
        for (const [Wd, Fd] of this.unboundKeyPresses) dd += Fd, (Fd > md || Fd === md && Wd < Od) && (Od = Wd, md = Fd);
        return {
          unbound_key_presses: dd,
          top_unbound_key: Od
        }
      }
      pingTags() {
        return 0 === this.pingSamples ? null : {
          ping_avg_bucket: kd(this.pingSumMs / this.pingSamples),
          ping_max_bucket: kd(this.maxPingMs)
        }
      }
      isQuickQuit(dd) {
        var Od;
        if (null === this.firstGame) return !1;
        const md = null !== (Od = this.firstGame.leftAtMs) && void 0 !== Od ? Od : dd;
        return null !== md && md - this.firstGame.joinedAtMs < Wd.k
      }
    }
    var Md = md(1286),
      dO = md(1128),
      OO = md(405),
      mO = md(1135),
      WO = md(1122),
      FO = md(3860),
      RO = md(29),
      XO = md(2092),
      KO = md(32),
      hO = md(1415),
      vO = md(1361),
      QO = md(1632),
      tO = md(2343),
      oO = md(1765),
      NO = md(41432),
      qO = md(107),
      HO = md(41428),
      yO = md(1382);
    class bO {
      constructor(dd, Od, md) {
        this.replay = dd, this.quitContext = Od, this.flows = md, this.errorThrottle = new ld({
          maxPerWindow: 3,
          windowMs: 6e4
        }), this.hitchThrottle = new ld({
          maxPerWindow: 5,
          windowMs: 6e4
        }), this.attachedToRender = !1
      }
      start() {
        window.addEventListener("error", (dd => {
            const Od = dd.error;
            this.captureError("error", dd.message, dd.filename ? `${dd.filename}:${dd.lineno}:${dd.colno}` : null, Od instanceof Error ? Od.name : null, (0, HO.e)(dd))
          })), window.addEventListener("unhandledrejection", (dd => {
            const Od = dd.reason;
            this.captureError("unhandled_rejection", Od instanceof Error ? Od.message : String(Od), null, Od instanceof Error ? Od.name : null, (0, HO.e)(dd))
          })), KO.j.subscribe("unrecoverableError", (dd => {
            this.captureError("unrecoverable", dd, null, null, !0)
          })),
          function(dd) {
            var Od, md;
            if ("undefined" === typeof PerformanceObserver || null === (Od = null === (md = PerformanceObserver.supportedEntryTypes) || void 0 === md ? void 0 : md.includes("long-animation-frame")) || void 0 === Od || !Od) return;
            let Wd = null;
            new PerformanceObserver((Od => {
              for (const Rd of Od.getEntries()) {
                var md, Fd;
                const Od = Rd,
                  Xd = !(null !== Wd && Od.startTime - Wd.endMs < 50) || Od.duration >= 3 * (null !== (md = null === (Fd = Wd) || void 0 === Fd ? void 0 : Fd.durationMs) && void 0 !== md ? md : 0);
                Wd = {
                  endMs: Od.startTime + Od.duration,
                  durationMs: Od.duration
                }, !document.hidden && Od.duration >= 100 && Xd && dd({
                  frameMs: Od.duration,
                  mainThreadMs: (0, yO.o)(Od)
                })
              }
            })).observe({
              type: "long-animation-frame"
            })
          }((dd => {
            this.onFrameHitch(dd)
          }))
      }
      attachToRender() {
        if (this.attachedToRender) return;
        const dd = (0, vO.V)().gameRender();
        null !== dd && (this.attachedToRender = !0, this.replay.setSessionProperties(Object.fromEntries([
          ["renderer", dd.renderer],
          ["gpu_vendor", (0, qO.getGpuVendor)()]
        ])), dd.canvas.addEventListener("webglcontextlost", (() => {
          this.replay.setFlag("had_error"), this.replay.capture("webgl_context_lost")
        })), dd.canvas.addEventListener("webglcontextrestored", (() => {
          this.replay.capture("webgl_context_restored")
        })))
      }
      captureError(dd, Od, md, Fd, Rd) {
        const Xd = Td(Od).slice(0, 300);
        Rd && null !== this.flows.stay && this.quitContext.noteError(performance.now());
        const Kd = this.errorThrottle.allow(`${dd}:${Xd}`, Date.now());
        null !== Kd && (this.replay.captureClientError(dd, Xd, {
          source: md,
          error_name: Fd,
          suppressed_since_last: Kd
        }), this.replay.addReplayMarker(Wd.j.error, {
          kind: dd,
          message: Xd
        }))
      }
      onFrameHitch(dd) {
        let {
          frameMs: Od,
          mainThreadMs: md
        } = dd;
        const Wd = this.flows.stay;
        if (null === Wd || null === Wd.playableAtMs || performance.now() - Wd.playableAtMs < 2e3) return;
        (0, oO.m)() || this.quitContext.noteHitch(performance.now()), this.replay.addHitch(Math.round(Od));
        const Fd = this.hitchThrottle.allow("frame_hitch", Date.now());
        null !== Fd && this.replay.capture("frame_hitch", {
          gh: Math.round(Od),
          main_thread_ms: Math.round(md),
          game_name_with_variation: Wd.name,
          suppressed_since_last: Fd
        })
      }
    }
    var TO = md(7458),
      pO = md(387);
    class YO {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.steps = dd, this.furthestIndex = -1, this.heldIndex = -1, this.gateIndex = void 0, this.gateIndex = null === Od ? 1 / 0 : dd.indexOf(Od)
      }
      reach(dd) {
        const Od = this.steps.indexOf(dd);
        if (Od > this.gateIndex && this.furthestIndex < this.gateIndex) return this.heldIndex = Math.max(this.heldIndex, Od), null;
        const md = Od === this.gateIndex ? Math.max(Od, this.heldIndex) : Od;
        return md <= this.furthestIndex ? null : (this.furthestIndex = md, md)
      }
      get furthest() {
        return -1 === this.furthestIndex ? null : this.steps[this.furthestIndex]
      }
      get furthestStepIndex() {
        return this.furthestIndex
      }
    }
    const gO = {
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
    class wO {
      constructor(dd) {
        this.threshold = dd, this.times = [], this.armed = !0, this.lastAtMs = -1 / 0
      }
      note(dd) {
        const {
          count: Od,
          windowMs: md
        } = this.threshold;
        if (!this.armed && dd - this.lastAtMs >= md && (this.armed = !0), this.lastAtMs = dd, !this.armed) return !1;
        for (this.times.push(dd); this.times.length > 0 && dd - this.times[0] >= md;) this.times.shift();
        return !(this.times.length < Od) && (this.times.length = 0, this.armed = !1, !0)
      }
    }
    class aO {
      constructor(dd) {
        this.onSignal = dd, this.bursts = new Map, this.seen = [], this.signalCount = 0, this.idleCounted = !1;
        for (const [Od, md] of Object.entries(gO)) this.bursts.set(Od, new wO(md))
      }
      note(dd, Od) {
        if (this.bursts.get(dd).note(Od)) {
          const {
            count: Od,
            windowMs: md
          } = gO[dd];
          this.signal(dd, Od, md)
        }
      }
      checkIdle(dd) {
        let {
          nowMs: Od,
          lastInputAtMs: md,
          pointerLocked: Wd,
          playable: Fd,
          visible: Rd
        } = dd;
        Od - (null !== md && void 0 !== md ? md : 0) < 3e4 ? this.idleCounted = !1 : !this.idleCounted && Wd && Fd && Rd && (this.idleCounted = !0, this.signal("idle_pointer_locked", 1, 3e4))
      }
      tags() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Od = dd && !this.seen.includes("rage_quit") ? [...this.seen, "rage_quit"] : this.seen;
        return {
          frustration_score: this.signalCount + (dd ? 1 : 0),
          frustration_signals: Od.join(",")
        }
      }
      signal(dd, Od, md) {
        this.signalCount++, this.seen.includes(dd) || this.seen.push(dd), this.onSignal(dd, Od, md)
      }
    }
    const EO = TO.h.indexOf("first_input"),
      JO = TO.h.indexOf("first_move"),
      UO = {
        keyboardMouse: "keyboard",
        touch: "touch",
        gamepad: "pad"
      };
    class xO {
      constructor(dd, Od, md) {
        this.replay = dd, this.quitContext = Od, this.deps = md, this.ladder = new YO(TO.d, "first_move"), this.frustration = void 0, this.frustrationThrottle = new ld({
          maxPerWindow: 5,
          windowMs: 6e4
        }), this.activations = new Set, this.currentStay = null, this.moveSubscriptions = [], this.everPlayable = !1, this.everPointerLocked = !1, this.pointerUnlockedAtMs = -1 / 0, this.everythingMenu = null, this.lastGameName = null, this.unsentStepMarkers = [], this.frustration = new aO(((dd, Od, md) => {
          this.onFrustration(dd, Od, md)
        })), Od.setFlowProperties((dd => this.quitProperties(dd)))
      }
      get stay() {
        return this.currentStay
      }
      start() {
        var dd;
        this.reachStep("page_loaded"), KO.j.subscribe("sessionReplayStayOpened", (dd => {
          this.resendStay(dd)
        })), KO.j.subscribe("pointerLockUpdate", (dd => {
          this.pointerLockChanged(dd)
        })), KO.j.subscribe("localBlockMined", (() => {
          this.blockBroken()
        })), KO.j.subscribe("blockChangeRefused", (() => {
          this.noteFrustration("block_change_refused")
        })), KO.j.subscribe("controlsTutorialShown", (dd => {
          this.controlsTutorialShown(dd)
        })), KO.j.subscribe("showShopTouchTutorial", (dd => {
          !1 !== dd && this.controlsTutorialShown("shop")
        })), KO.j.subscribe("appManagerUpdated|openInGameMenuName", (dd => {
          this.inGameMenuChanged(dd)
        })), KO.j.subscribe("appManagerUpdated|openEverythingMenuName", (dd => {
          this.everythingMenuChanged(dd)
        })), document.addEventListener("pointerlockerror", (() => {
          this.pointerLockFailed()
        })), null === (dd = (0, NO.b)()) || void 0 === dd || dd.onUnboundKey((() => {
          this.unboundKeyPressed()
        }))
      }
      gameLoading() {
        this.reachStep("game_loading")
      }
      gameJoined(dd, Od, md) {
        const Wd = md && Od === this.lastGameName;
        this.lastGameName = Od, this.stopWatchingMoves();
        const Fd = {
          name: Od,
          joinedAtMs: Date.now(),
          playableAtMs: null,
          visiblePlayedMs: 0,
          deaths: 0,
          ladder: new YO(TO.h, "first_move"),
          unboundKeyPresses: 0
        };
        return this.currentStay = Fd, this.reachStayStep("joined"), dd >= 2 && !Wd && this.reachStep("second_game"), Fd
      }
      gamePlayable() {
        const dd = this.currentStay;
        null !== dd && (dd.playableAtMs = this.deps.now(), this.everPlayable = !0, this.reachStep("game_playable"), this.reachStayStep("game_playable"), this.deps.isPointerLocked() && this.pointerLocked(), this.watchMoves())
      }
      input() {
        const dd = this.currentStay;
        null === dd || null === dd.playableAtMs || dd.ladder.furthestStepIndex >= EO || (this.reachStep("first_input"), this.reachStayStep("first_input"))
      }
      played60s() {
        this.reachStep("played_60s"), this.reachStayStep("played_60s")
      }
      gameLeft() {
        this.stopWatchingMoves(), this.currentStay = null
      }
      Et() {
        var dd, Od, md;
        this.sendStepMarkers(), this.frustration.checkIdle({
          nowMs: this.deps.now(),
          lastInputAtMs: Math.max(null !== (dd = this.quitContext.getLastInputAtMs()) && void 0 !== dd ? dd : 0, null !== (Od = null === (md = this.currentStay) || void 0 === md ? void 0 : md.playableAtMs) && void 0 !== Od ? Od : 0),
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
      inGameMenuChanged(dd) {
        null !== dd && this.menuOpened(dd, "inventory" === dd ? "first_inventory_open" : null)
      }
      everythingMenuChanged(dd) {
        const Od = null === this.everythingMenu;
        this.everythingMenu = dd, null !== dd && (this.menuOpened(dd, dd === pO.m.SETTINGS ? "first_settings_open" : null), dd === pO.m.SETTINGS && Od && null !== this.currentStay && this.noteFrustration("menu_toggling"))
      }
      pointerLockChanged(dd) {
        dd ? this.pointerLocked() : this.pointerUnlockedAtMs = this.deps.now()
      }
      controlsTutorialShown(dd) {
        const Od = `controls_tutorial_${dd}`;
        this.activations.has(Od) || (this.activations.add(Od), this.replay.capture("controls_tutorial_shown", {
          tutorial: dd,
          ...this.timing()
        }))
      }
      unboundKeyPressed() {
        this.noteFrustration("unbound_key_burst");
        const dd = this.currentStay;
        null !== dd && dd.unboundKeyPresses < TO.i && (dd.unboundKeyPresses++, this.deps.publishStayProgress({
          unboundKeyPresses: dd.unboundKeyPresses
        }))
      }
      noteFrustration(dd) {
        this.frustration.note(dd, this.deps.now())
      }
      quitProperties(dd) {
        return {
          ...this.ladderTags(),
          ...this.frustration.tags(dd),
          never_pointer_locked: this.everPlayable && !this.everPointerLocked && !this.deps.isTouchScreen() && "gamepad" !== this.deps.getInputDevice()
        }
      }
      isPlayable() {
        return null !== this.currentStay && null !== this.currentStay.playableAtMs
      }
      ladderTags() {
        var dd;
        return {
          furthest_step: null !== (dd = this.ladder.furthest) && void 0 !== dd ? dd : "",
          furthest_step_index: this.ladder.furthestStepIndex
        }
      }
      reachStep(dd) {
        null !== this.ladder.reach(dd) && (this.replay.setSessionProperties(this.ladderTags(), !1), this.unsentStepMarkers.push(TO.d.indexOf(dd)), this.sendStepMarkers())
      }
      sendStepMarkers() {
        for (; this.unsentStepMarkers.length > 0 && this.replay.addReplayMarker(Wd.j.step, {
            step: this.unsentStepMarkers[0]
          }, !0);) this.unsentStepMarkers.shift()
      }
      resendStay(dd) {
        const Od = this.currentStay;
        var md;
        null !== Od && Od.name === dd && this.deps.publishStayProgress({
          furthestStep: null !== (md = Od.ladder.furthest) && void 0 !== md ? md : void 0,
          unboundKeyPresses: Od.unboundKeyPresses
        })
      }
      reachStayStep(dd) {
        var Od;
        const md = null === (Od = this.currentStay) || void 0 === Od ? void 0 : Od.ladder;
        void 0 !== md && null !== md.reach(dd) && this.deps.publishStayProgress({
          furthestStep: md.furthest
        })
      }
      menuOpened(dd, Od) {
        this.replay.capture("menu_opened", {
          menu: dd
        }), null !== Od && this.activate(Od)
      }
      activate(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.activations.has(dd) || (this.activations.add(dd), this.replay.capture(dd, {
          ...Od,
          ...this.timing()
        }))
      }
      timing() {
        var dd, Od;
        const md = this.deps.now(),
          Wd = null !== (dd = null === (Od = this.currentStay) || void 0 === Od ? void 0 : Od.playableAtMs) && void 0 !== dd ? dd : null;
        return {
          ms_since_page_load: Math.round(md),
          ms_since_playable: null === Wd ? null : Math.round(md - Wd)
        }
      }
      onFrustration(dd, Od, md) {
        this.replay.setSessionProperties(this.frustration.tags(), !1), this.replay.addReplayMarker(Wd.j.frustration, {
          signal: TO.g.indexOf(dd)
        });
        const Fd = this.frustrationThrottle.allow(dd, Date.now());
        null !== Fd && this.replay.capture("frustration_signal", {
          signal: dd,
          count: Od,
          window_ms: md,
          suppressed_since_last: Fd
        })
      }
      watchMoves() {
        var dd, Od;
        if (0 === this.moveSubscriptions.length && (null !== (dd = null === (Od = this.currentStay) || void 0 === Od ? void 0 : Od.ladder.furthestStepIndex) && void 0 !== dd ? dd : 1 / 0) < JO) {
          const dd = () => {
            this.moved()
          };
          this.moveSubscriptions = [KO.j.subscribe("usedKeyboard", dd), KO.j.subscribe("stickMoved", dd)]
        }
      }
      stopWatchingMoves() {
        for (const dd of this.moveSubscriptions) KO.j.unsubscribe(dd);
        this.moveSubscriptions = []
      }
    }
    const BO = ["quit_after_hitch", "quit_after_death", "quit_during_load", "quit_in_menu", "quit_idle", "quit_after_ad"],
      SO = ["quit_during_load", "quit_after_ad", "quit_after_death", "quit_after_hitch", "quit_idle", "quit_in_menu"];

    function sO(dd) {
      var Od;
      return null !== (Od = SO.find((Od => dd.includes(Od)))) && void 0 !== Od ? Od : "none"
    }

    function uO(dd, Od, md) {
      return null !== dd && Od - dd < md
    }
    class VO {
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
      setFlowProperties(dd) {
        this.flowProperties = dd
      }
      noteInput(dd) {
        this.history.lastInputAtMs = dd
      }
      noteHitch(dd) {
        this.history.lastHitchAtMs = dd
      }
      noteDeath(dd) {
        this.history.lastDeathAtMs = dd
      }
      noteError(dd) {
        this.history.lastErrorAtMs = dd
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
      noteAdFinished(dd) {
        this.history.adPlaying = !1, this.history.lastAdFinishedAtMs = dd
      }
      noteLoadStep(dd) {
        this.lastLoadStep = dd
      }
      getLastLoadStep() {
        return this.lastLoadStep
      }
      quit(dd) {
        const Od = function(dd, Od) {
            var md, Wd;
            const Fd = [];
            return uO(Od.lastHitchAtMs, dd.nowMs, 15e3) && Fd.push("quit_after_hitch"), uO(Od.lastDeathAtMs, dd.nowMs, 15e3) && Fd.push("quit_after_death"), dd.loading ? Fd.push("quit_during_load") : "page" !== dd.quitFrom || dd.inGame && !dd.menuOpen || Fd.push("quit_in_menu"), uO(null !== (md = Od.lastInputAtMs) && void 0 !== md ? md : 0, dd.nowMs, 6e4) || Fd.push("quit_idle"), (!0 === Od.adPlaying || uO(null !== (Wd = Od.lastAdFinishedAtMs) && void 0 !== Wd ? Wd : null, dd.nowMs, 3e4)) && Fd.push("quit_after_ad"), Fd
          }(dd, this.history),
          md = function(dd, Od) {
            var md;
            return uO(Od.lastDeathAtMs, dd, 1e4) || uO(null !== (md = Od.lastErrorAtMs) && void 0 !== md ? md : null, dd, 1e4)
          }(dd.nowMs, this.history),
          Wd = {
            quit_from: dd.quitFrom,
            in_game: dd.inGame,
            quit_reasons: Od.join(","),
            quit_reason: sO(Od),
            rage_quit: md,
            ...this.flowProperties(md)
          };
        var Fd;
        Od.includes("quit_during_load") && (Wd.last_load_step = null !== (Fd = this.lastLoadStep) && void 0 !== Fd ? Fd : "none");
        null !== dd.gameName && (Wd.game_name_with_variation = dd.gameName, Wd.game_name = (0, OO.Gb)(dd.gameName));
        for (const Rd of BO) Wd[Rd] = Od.includes(Rd);
        return {
          reasons: Od,
          properties: Wd
        }
      }
    }
    class iO {
      constructor(dd) {
        this.deps = dd, this.quitContext = new VO, this.loading = !1, this.inGame = !1, this.switching = !1, this.nextLeaveIsNotAQuit = !1, this.pendingQuit = null, this.exited = !1
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
      joinFailed(dd) {
        this.loading = !1, this.nextLeaveIsNotAQuit = this.inGame, this.deps.capture("join_failed", dd)
      }
      disconnected() {
        this.nextLeaveIsNotAQuit = !0
      }
      kickedForAfk(dd) {
        this.nextLeaveIsNotAQuit = !0, this.deps.capture("kicked_afk", {
          game_name_with_variation: dd
        })
      }
      gameLeft(dd) {
        const Od = this.nextLeaveIsNotAQuit || this.deps.isJoinAbandoned(),
          md = this.switching,
          Wd = this.loading;
        if (this.nextLeaveIsNotAQuit = !1, this.switching = !1, this.inGame = !1, null === dd) return;
        if (md || (this.loading = !1), Od) return void this.quitContext.forgetGame();
        const Fd = this.quitContext.quit({
          quitFrom: "game",
          gameName: dd,
          nowMs: this.deps.now(),
          inGame: !0,
          loading: Wd,
          menuOpen: !1
        });
        this.quitContext.forgetGame(), md ? this.captureSwitch(Fd) : this.startPendingQuit(Fd)
      }
      gameReplayOpened(dd) {
        this.nextLeaveIsNotAQuit = !0, this.gameLeft(dd), this.deps.capture("game_replay_opened", {
          from_game_name_with_variation: dd
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
      pageHidden(dd) {
        if (this.exited) return;
        this.exited = !0;
        const Od = this.pendingQuit;
        null !== Od && (clearTimeout(Od.timer), this.pendingQuit = null, this.deps.onGameQuit(Od.quit), this.deps.captureOnExit("quit_context", Od.quit.properties, Od.atEpochMs));
        const md = {
            quitFrom: "page",
            gameName: null,
            nowMs: this.deps.now(),
            inGame: this.inGame,
            loading: this.loading,
            menuOpen: this.deps.isMenuOpen()
          },
          Wd = this.quitContext.quit(md);
        this.inGame && this.deps.onGameQuit(Wd), this.deps.captureOnExit("quit_context", {
          ...dd,
          ...Wd.properties
        })
      }
      pageRestored() {
        this.exited = !1, this.deps.capture("page_restored", {})
      }
      startPendingQuit(dd) {
        this.resolvePendingQuitAsSwitch();
        const Od = {
          quit: dd,
          atEpochMs: Date.now(),
          timer: setTimeout((() => {
            this.pendingQuit === Od && (this.pendingQuit = null, this.deps.onGameQuit(dd), this.deps.capture("quit_context", dd.properties, Od.atEpochMs))
          }), 1e4)
        };
        this.pendingQuit = Od
      }
      resolvePendingQuitAsSwitch() {
        const dd = this.pendingQuit;
        null !== dd && (clearTimeout(dd.timer), this.pendingQuit = null, "string" === typeof dd.quit.properties.game_name_with_variation && this.captureSwitch(dd.quit))
      }
      captureSwitch(dd) {
        this.deps.capture("game_switched", {
          from_game_name_with_variation: dd.properties.game_name_with_variation,
          from_game_name: dd.properties.game_name,
          after_death: dd.reasons.includes("quit_after_death"),
          after_hitch: dd.reasons.includes("quit_after_hitch")
        })
      }
    }
    var AO = md(7465);
    class rO {
      constructor(dd) {
        this.replay = dd, this.pointerLockThrottle = new ld({
          maxPerWindow: 10,
          windowMs: 6e4
        }), this.counts = new Map, this.game = null, this.timer = null
      }
      start(dd) {
        dd.onUnboundKey((dd => {
          this.onUnboundKey(dd)
        })), dd.onPointerLock((dd => {
          const Od = this.pointerLockThrottle.allow("pointer_lock_changed", Date.now());
          null !== Od && this.replay.capture("pointer_lock_changed", {
            locked: dd,
            in_game: "inGame" === RO.e.get("gameState"),
            menu_open: (0, oO.m)(),
            suppressed_since_last: Od
          })
        })), KO.j.subscribe("leaveGame", (() => {
          this.flush(!1)
        })), document.addEventListener("visibilitychange", (() => {
          document.hidden && this.flush(!0)
        }))
      }
      onUnboundKey(dd) {
        var Od, md;
        const Wd = (0, hO.b)().gameNameWithVariation;
        Wd !== this.game && (this.flush(!1), this.game = Wd);
        const Fd = null !== (Od = (0, AO.i)(dd)) && void 0 !== Od ? Od : dd;
        this.counts.set(Fd, (null !== (md = this.counts.get(Fd)) && void 0 !== md ? md : 0) + 1), this.timer ??= setTimeout((() => {
          this.flush(!1)
        }), 1e4 - Date.now() % 1e4)
      }
      flush(dd) {
        if (null !== this.timer && (clearTimeout(this.timer), this.timer = null), 0 === this.counts.size) return;
        const Od = (md = this.counts, [...md].sort(((dd, Od) => Od[1] - dd[1] || (dd[0] < Od[0] ? -1 : 1))));
        var md;
        let Wd = 0;
        for (const [, Rd] of Od) Wd += Rd;
        const Fd = {
          key_counts: Object.fromEntries(Od),
          keys: Od.map((dd => {
            let [Od] = dd;
            return Od
          })).join(","),
          top_key: Od[0][0],
          presses: Wd,
          game_name: null === this.game ? null : (0, OO.Gb)(this.game),
          game_name_with_variation: this.game
        };
        this.replay.addUnboundKeyPresses(this.counts), this.counts.clear(), dd ? this.replay.captureOnExit("unbound_keys", Fd) : this.replay.capture("unbound_keys", Fd)
      }
    }
    var GO = md(180);

    function nO(dd) {
      var Od, md;
      return null !== (Od = null === (md = GO.l[dd]) || void 0 === md ? void 0 : md.toLowerCase()) && void 0 !== Od ? Od : String(dd)
    }
    class LO {
      constructor(dd, Od) {
        this.replay = dd, this.quitContext = Od, this.startedAtMs = null, this.steps = new Map, this.firstGamePlayable = !1
      }
      started() {
        this.startedAtMs = Date.now()
      }
      stepCompleted(dd) {
        if (this.steps.has(dd)) return;
        const Od = performance.now();
        this.steps.set(dd, Od);
        const md = nO(dd);
        this.quitContext.noteLoadStep(md), this.firstGamePlayable || this.replay.capture("game_load_step", {
          load_step: md,
          step_number: dd,
          ms_since_page_load: Math.round(Od),
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
        let dd = null,
          Od = null;
        for (const [Wd, Fd] of [...this.steps].sort(((dd, Od) => dd[1] - Od[1]))) null !== Od && (null === dd || Fd - Od > dd.ms) && (dd = {
          step: Wd,
          ms: Fd - Od
        }), Od = Fd;
        const md = null === this.startedAtMs ? null : Date.now() - this.startedAtMs;
        return this.firstGamePlayable = !0, this.ended(), {
          load_ms: md,
          slowest_load_step: null === dd ? null : nO(dd.step),
          slowest_load_step_ms: null === dd ? null : Math.round(dd.ms)
        }
      }
      resetSteps() {
        this.steps.clear(), this.quitContext.noteLoadStep(null)
      }
    }
    const PO = ["keydown", "pointerdown", "touchstart"];
    class zO {
      constructor(dd) {
        this.replay = dd, this.firstInGameInputSent = !1
      }
      startFirstInputWatch() {
        setTimeout((() => {
          ! function(dd) {
            var Od;
            let md = !1;
            const Wd = (Od, Wd, Fd) => {
              md || (md = !0, dd(Od, Wd, Fd))
            };
            if ("undefined" !== typeof PerformanceObserver && null !== (Od = PerformanceObserver.supportedEntryTypes) && void 0 !== Od && Od.includes("first-input")) {
              const dd = new PerformanceObserver((Od => {
                const [md] = Od.getEntries();
                dd.disconnect(), Wd(md.name, md.startTime, !0)
              }));
              return void dd.observe({
                type: "first-input",
                buffered: !0
              })
            }
            const Fd = new AbortController,
              Rd = dd => {
                Fd.abort(), Wd(dd.type, dd.timeStamp, !1)
              };
            for (const Xd of PO) window.addEventListener(Xd, Rd, {
              capture: !0,
              passive: !0,
              signal: Fd.signal
            })
          }(((dd, Od, md) => {
            this.replay.capture("first_input", Object.fromEntries([
              ["input_type", dd],
              ["ms_since_page_load", Math.round(Od)],
              ["buffered", md]
            ]))
          }))
        }), 100)
      }
      onFirstInGameInput(dd, Od) {
        this.firstInGameInputSent = !0, this.replay.capture("first_ingame_input", Object.fromEntries([
          ["input_type", dd],
          ["ms_since_playable", Math.round(performance.now() - Od)],
          ["ms_since_page_load", Math.round(performance.now())]
        ]))
      }
      capturePageLoadTiming() {
        const dd = performance.getEntriesByType("navigation")[0],
          Od = performance.getEntriesByName("first-contentful-paint")[0];
        this.replay.capture("page_load_timing", {
          ttfb_ms: dd ? Math.round(dd.responseStart) : null,
          first_contentful_paint_ms: Od ? Math.round(Od.startTime) : null,
          dom_content_loaded_ms: dd ? Math.round(dd.domContentLoadedEventEnd) : null,
          load_ms: dd ? Math.round(dd.loadEventEnd) : null,
          transfer_kb: dd ? Math.round(dd.transferSize / 1024) : null,
          recording_started_ms: Math.round(performance.now())
        })
      }
    }
    class cO {
      constructor(dd, Od) {
        this.replay = dd, this.quitContext = Od, this.settings = RO.e.get("clientEscMenuOptions"), this.pendingSettings = {}, this.settingsTimer = null, this.adRequest = null, this.playingAd = null
      }
      start() {
        KO.j.subscribe("purchaseStarted", (dd => {
          let {
            product: Od
          } = dd;
          this.replay.setFlag("purchase_intent"), this.replay.capture("purchase_started", {
            product: Od
          })
        })), KO.j.subscribe("purchaseEnded", (dd => {
          let {
            outcome: Od
          } = dd;
          this.replay.capture("purchase_ended", {
            outcome: Od
          })
        })), KO.j.subscribe("adRequested", (dd => {
          let {
            adKind: Od,
            provider: md
          } = dd;
          this.adRequest = {
            adKind: Od,
            provider: md,
            atMs: performance.now()
          }
        })), KO.j.subscribe("appManagerUpdated|soundOnFromAd", (dd => {
          dd && null !== this.playingAd ? this.onAdFinished() : dd || null !== this.playingAd || this.onAdStarted()
        })), KO.j.subscribe("appManagerUpdated|clientEscMenuOptions", (dd => {
          RO.e.isApplyingDefaults ? this.settings = dd : this.onSettingsChanged(dd)
        }))
      }
      onAdStarted() {
        var dd, Od;
        const md = performance.now(),
          Wd = null !== this.adRequest && md - this.adRequest.atMs < 6e4 ? this.adRequest : null;
        this.adRequest = null, this.playingAd = {
          ad_kind: null !== (dd = null === Wd || void 0 === Wd ? void 0 : Wd.adKind) && void 0 !== dd ? dd : "unknown",
          provider: null !== (Od = null === Wd || void 0 === Wd ? void 0 : Wd.provider) && void 0 !== Od ? Od : null,
          startedAtMs: md
        }, this.replay.setFlag("ad_shown"), this.quitContext.noteAdStarted(), this.replay.capture("ad_started", this.adProperties(this.playingAd, md))
      }
      onAdFinished() {
        const dd = performance.now(),
          Od = this.playingAd;
        this.playingAd = null, this.quitContext.noteAdFinished(dd), this.replay.capture("ad_finished", {
          ...this.adProperties(Od, dd),
          ad_ms: Math.round(dd - Od.startedAtMs)
        })
      }
      adProperties(dd, Od) {
        return {
          ad_kind: dd.ad_kind,
          provider: dd.provider,
          minutes_since_page_load: Math.floor(Od / 6e4),
          in_game: "inGame" === RO.e.get("gameState")
        }
      }
      onSettingsChanged(dd) {
        Object.assign(this.pendingSettings, function(dd, Od) {
          const md = {};
          for (const Wd of Object.keys(Od)) dd[Wd] !== Od[Wd] && (md[Wd] = Od[Wd]);
          return md
        }(this.settings, dd)), this.settings = dd, null !== this.settingsTimer && clearTimeout(this.settingsTimer), this.settingsTimer = setTimeout((() => {
          this.settingsTimer = null, Object.keys(this.pendingSettings).length > 0 && (this.replay.capture("settings_changed", {
            changed_settings: Object.keys(this.pendingSettings),
            values: this.pendingSettings
          }), this.pendingSettings = {})
        }), 2e3)
      }
    }

    function jO(dd) {
      switch ((0, Md.w)(dd)) {
        case dO.b.DISCORD_GUILD:
          return "discord_guild";
        case dO.b.DISCORD_DM:
          return "discord_dm";
        default:
          return (0, Md.K)(dd) ? "public" : "private"
      }
    }
    class DO {
      constructor(dd) {
        this.replay = dd, this.framesThisTick = 0, this.lastTickMs = performance.now(), this.ticks = 0, this.gamesJoined = 0, this.pageEvents = void 0, this.flows = void 0, this.health = void 0, this.leaves = void 0, this.joinLoad = void 0, this.unsubscribeDeaths = () => {}, this.inputSinceActiveMarker = !1, this.firstMinutePlayedSent = !1, this.pageEvents = new zO(dd), this.leaves = new iO({
          capture: (Od, md, Wd) => {
            void 0 === Wd ? dd.capture(Od, md) : dd.captureAt(Od, md, Wd)
          },
          captureOnExit: (Od, md, Wd) => {
            dd.captureOnExit(Od, md, Wd)
          },
          onGameQuit: dd => {
            let {
              reasons: Od,
              properties: md
            } = dd;
            const Wd = md.game_name_with_variation;
            KO.j.lQ("sessionReplayGameQuit", {
              reasons: Od,
              gameName: "string" === typeof Wd ? Wd : null
            })
          },
          isMenuOpen: oO.m,
          isJoinAbandoned: tO.g,
          now: () => performance.now()
        }), this.joinLoad = new LO(dd, this.leaves.quitContext), this.flows = function(dd, Od) {
          return new xO(dd, Od, {
            now: () => performance.now(),
            isTouchScreen: () => RO.e.get("isTouchScreen"),
            getInputDevice: () => RO.e.get("activeInputDevice"),
            isPointerLocked: () => null !== document.pointerLockElement,
            isPageVisible: () => !document.hidden,
            publishStayProgress: dd => {
              KO.j.lQ("sessionReplayStayProgress", dd)
            }
          })
        }(dd, this.leaves.quitContext), this.health = new bO(dd, this.leaves.quitContext, this.flows)
      }
      start() {
        const dd = (0, NO.b)(),
          Od = new rO(this.replay);
        null !== dd && Od.start(dd), this.pageEvents.capturePageLoadTiming(), this.flows.start();
        const md = RO.e.get("gameState");
        "inGame" === md ? this.joinConnectedGame() : "loadingScreen" !== md && "findingLobby" !== md || this.leaves.joinStarted(), this.subscribeToGameFlow(), new cO(this.replay, this.leaves.quitContext).start(), this.health.start(), this.trackInput(), this.pageEvents.startFirstInputWatch(), (0, vO.H)((() => {
          this.framesThisTick++
        })), setInterval((() => {
          this.FY()
        }), 1e3), window.addEventListener("pagehide", (() => {
          Od.flush(!0), this.leaves.pageHidden(this.replay.finalTags())
        })), window.addEventListener("pageshow", (dd => {
          dd.persisted && this.leaves.pageRestored()
        }))
      }
      trackInput() {
        const dd = dd => {
          var Od, md;
          this.inputSinceActiveMarker = !0, this.leaves.quitContext.noteInput(dd.timeStamp), this.flows.input();
          const Wd = null !== (Od = null === (md = this.flows.stay) || void 0 === md ? void 0 : md.playableAtMs) && void 0 !== Od ? Od : null;
          this.pageEvents.firstInGameInputSent || null === Wd || this.pageEvents.onFirstInGameInput(dd.type, Wd)
        };
        for (const Od of ["keydown", "pointerdown", "pointermove", "wheel"]) window.addEventListener(Od, dd, {
          capture: !0,
          passive: !0
        })
      }
      subscribeToGameFlow() {
        KO.j.subscribe("joinedGame", (dd => {
          let {
            gameNameWithVariation: Od,
            lobbyName: md
          } = dd;
          (0, tO.g)() || this.onJoinedGame(Od, md)
        })), KO.j.subscribe("leaveGame", (() => {
          var dd, Od;
          const md = null !== (dd = null === (Od = this.flows.stay) || void 0 === Od ? void 0 : Od.name) && void 0 !== dd ? dd : null;
          this.onLeftGame(), this.leaves.gameLeft(md)
        })), KO.j.subscribe("replayViewer|replayLoaded", (() => {
          const dd = this.flows.stay;
          null !== dd && (this.onLeftGame(), this.leaves.gameReplayOpened(dd.name))
        })), KO.j.subscribe("matchmakeAndPlayStepCompleted", (dd => {
          let {
            step: Od
          } = dd;
          this.joinLoad.stepCompleted(Od)
        })), KO.j.subscribe("leftPlayPage", (() => {
          this.leaves.playPageLeft(), this.joinLoad.ended()
        })), KO.j.subscribe("joinFailed", (dd => {
          let {
            step: Od,
            severity: md
          } = dd;
          this.leaves.joinFailed({
            step: Od,
            severity: md,
            game_name_with_variation: (0, hO.b)().requestedGameNameWithVariation,
            last_load_step: this.leaves.quitContext.getLastLoadStep()
          }), this.joinLoad.ended()
        })), KO.j.subscribe("kickedForAfk", (() => {
          var dd, Od;
          this.leaves.kickedForAfk(null !== (dd = null === (Od = this.flows.stay) || void 0 === Od ? void 0 : Od.name) && void 0 !== dd ? dd : null)
        })), KO.j.subscribe("unwantedLeftGame", (dd => {
          this.leaves.disconnected(), this.replay.setFlag("disconnected"), this.replay.capture("disconnected", {
            reason: dd.reason,
            can_reconnect: dd.canReconnect,
            automatically_reconnect: dd.automaticallyReconnect,
            requires_refresh: dd.requiresRefresh
          })
        })), KO.j.subscribe("appManagerUpdated|gameState", (dd => {
          "loadingScreen" === dd ? this.leaves.joinStarted() : "findingLobby" === dd ? (this.leaves.joinStarted(), this.joinLoad.started(), this.replay.capture("game_loading_started", {
            entry_source: RO.e.get("gameEntrySource")
          }), this.flows.gameLoading()) : "inGame" === dd ? this.onPlayable() : "landingPage" === dd && (this.replay.capture("homepage_viewed"), this.replay.capture("$screen", {
            $screen_name: "homepage"
          }))
        })), KO.j.subscribe("appManagerUpdated|gameEntrySource", (dd => {
          "autoReconnect" !== dd && "manualReconnect" !== dd || this.replay.capture("reconnect_attempted", {
            automatic: "autoReconnect" === dd
          })
        })), KO.j.subscribe("sessionReplayPlayerKill", (dd => {
          let {
            killstreak: Od
          } = dd;
          this.replay.capture("player_kill", {
            killstreak: Od
          })
        }))
      }
      onPlayable() {
        (0, tO.g)() || (0, hO.c)() || (null === this.flows.stay && this.joinConnectedGame(), this.replay.capture("game_playable", {
          ms_since_page_load: Math.round(performance.now()),
          ...this.joinLoad.playable()
        }), this.leaves.gamePlayable(), this.flows.gamePlayable())
      }
      joinConnectedGame() {
        if ((0, hO.c)()) return;
        const {
          gameNameWithVariation: dd,
          lobbyName: Od
        } = (0, hO.b)();
        null !== dd && null !== Od ? this.onJoinedGame(dd, Od) : console.warn("Session replay found a game playable with no game joined; not labelling it")
      }
      onJoinedGame(dd, Od) {
        this.replay.takeFullSnapshot();
        const md = (0, Md.K)(Od),
          Wd = RO.e.get("gameEntrySource");
        this.gamesJoined++, this.leaves.gameJoined(), this.flows.gameJoined(this.gamesJoined, dd, "autoReconnect" === Wd || "manualReconnect" === Wd), "inGame" === RO.e.get("gameState") && this.flows.gamePlayable();
        const Fd = QO.clientSidePartyStateManager.getPartyInformation(),
          Rd = {
            game_name: (0, OO.Gb)(dd),
            game_name_with_variation: dd,
            game_number: this.gamesJoined,
            game_analytics_id: (0, mO.h)(dd, md),
            is_custom_game: (0, WO.k)(dd),
            lobby_type: jO(Od),
            in_party: null !== Fd,
            party_size: null === Fd ? 0 : Fd.memberSocialPreviews.length + 1
          };
        this.replay.gameJoined(dd, Rd), this.replay.capture("game_joined", {
          ...Rd,
          entry_source: Wd
        }), this.replay.capture("$screen", {
          $screen_name: Rd.is_custom_game ? `custom: ${Rd.game_analytics_id}` : Rd.game_name
        }), this.subscribeToDeaths(dd)
      }
      onLeftGame() {
        this.joinLoad.forgetStart();
        const dd = this.flows.stay;
        null !== dd && (this.replay.capture("game_left", {
          game_name_with_variation: dd.name,
          duration_ms: Date.now() - dd.joinedAtMs
        }), this.flows.gameLeft(), this.replay.gameLeft(), this.unsubscribeDeaths(), this.unsubscribeDeaths = () => {})
      }
      subscribeToDeaths(dd) {
        this.unsubscribeDeaths();
        let Od = !0;
        this.unsubscribeDeaths = XO.gameBridge.subscribe("localPlayerAliveSet", (md => {
          const Fd = Od && !md;
          if (Od = md, Fd) {
            this.leaves.quitContext.noteDeath(performance.now());
            const [Od, md, Fd] = XO.gameBridge.lookup("localPos", null), Rd = {
              x: Math.round(Od),
              y: Math.round(md),
              z: Math.round(Fd)
            }, Xd = this.flows.stay, Kd = null === Xd ? {} : {
              death_number: ++Xd.deaths,
              seconds_since_join: Math.round((Date.now() - Xd.joinedAtMs) / 1e3)
            };
            this.replay.capture("player_died", {
              ...Rd,
              game_name_with_variation: dd,
              ...Kd
            }), this.replay.addReplayMarker(Wd.j.death, Rd)
          }
        }))
      }
      FY() {
        this.health.attachToRender();
        const dd = performance.now(),
          Od = dd - this.lastTickMs,
          md = Od <= 5e3,
          Fd = this.flows.stay;
        if (null !== Fd && null !== Fd.playableAtMs && !document.hidden && md && Fd.visiblePlayedMs < 6e4 && (Fd.visiblePlayedMs += Od, Fd.visiblePlayedMs >= 6e4)) {
          const Od = Math.round(dd);
          this.replay.capture("game_played_60s", {
            game_name_with_variation: Fd.name,
            ms_since_page_load: Od,
            ...this.firstMinutePlayedSent ? {} : {
              ttff_ms: Od
            }
          }), this.firstMinutePlayedSent = !0, this.flows.played60s()
        }
        this.flows.Et();
        const Rd = null !== this.flows.stay && !document.hidden;
        this.replay.addFpsSample(Rd && md && this.framesThisTick > 0 ? 1e3 * this.framesThisTick / Od : null);
        const Xd = Rd ? FO.c.getLastColyseusPingMs() : null;
        null !== Xd && this.replay.addPingSample(Xd), this.framesThisTick = 0, this.lastTickMs = dd, this.ticks++, this.ticks % 2 === 0 && (Rd && this.inputSinceActiveMarker && this.replay.addReplayMarker(Wd.j.active), this.inputSinceActiveMarker = !1), this.replay.markClockIfDue(this.ticks, 30)
      }
    }
    var eO = md(1268),
      IO = md(1253),
      lO = md(41387);

    function CO(dd) {
      return dd.length + 64
    }
    async function ZO() {
      return new Response("{}")
    }

    function kO(dd, Od, md) {
      return lO.c.fetch(dd, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain"
        },
        body: Od,
        signal: (0, eO.s)(3e4)
      }, md)
    }
    class fO {
      constructor(dd) {
        var Od, md, Wd;
        let Fd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.uploadToken = dd, this.url = void 0, this.post = void 0, this.isHidden = void 0, this.queue = [], this.retries = [], this.refusedTokens = new Set, this.overflowWarned = !1, this.unloading = !1, this.sendScheduled = !1, this.url = null !== (Od = Fd.url) && void 0 !== Od ? Od : `${IO.clientSideServerUrls.indexUrl}/index/replay/timeline`, this.post = null !== (md = Fd.post) && void 0 !== md ? md : kO, this.isHidden = null !== (Wd = Fd.isHidden) && void 0 !== Wd ? Wd : () => "hidden" === document.visibilityState
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
      add(dd) {
        if (this.refusedTokens.has(this.uploadToken)) return;
        const Od = function(dd) {
            const Od = {
              ...dd.properties
            };
            return void 0 !== dd.$set && (Od.$set = {
              ...dd.properties.$set,
              ...dd.$set
            }), void 0 !== dd.$set_once && (Od.$set_once = {
              ...dd.$set_once,
              ...dd.properties.$set_once
            }), void 0 !== dd.$unset && (Od.$unset = dd.$unset), {
              uuid: dd.uuid,
              event: dd.event,
              timestampMs: dd.timestamp.getTime(),
              properties: JSON.stringify(Od)
            }
          }(dd),
          md = (0, lO.e)(JSON.stringify(Od));
        Od.properties.length > 32768 || Od.event.length > 64 || CO(this.uploadToken) + md > 102400 ? console.warn(`Session replay timeline event ${Od.event.slice(0,64)} is too large for index-server; dropped.`) : (this.queue.push({
          uploadToken: this.uploadToken,
          event: Od,
          bytes: md,
          attempts: 0
        }), this.trimToCap(), this.queue.length >= 50 ? this.sendQueued() : (this.unloading || this.isHidden()) && this.sendSoon())
      }
      sendSoon() {
        this.sendScheduled || (this.sendScheduled = !0, queueMicrotask((() => {
          this.sendScheduled = !1, this.sendQueued()
        })))
      }
      flush() {
        this.retries.length > 0 && (this.queue = [...this.retries, ...this.queue].sort(((dd, Od) => dd.event.timestampMs - Od.event.timestampMs)), this.retries = []), this.sendQueued()
      }
      sendQueued() {
        for (; this.queue.length > 0;) {
          const dd = this.takeBatch();
          this.refusedTokens.has(dd.uploadToken) || this.send(dd)
        }
      }
      trimToCap() {
        let dd = this.retries.length + this.queue.length - 1e3;
        if (dd <= 0) return void(this.overflowWarned = !1);
        const Od = Math.min(dd, this.retries.length);
        this.retries.splice(0, Od), dd -= Od, this.queue.splice(0, dd), this.overflowWarned || (this.overflowWarned = !0, console.warn("Session replay timeline queue is full; dropping its oldest events until it drains."))
      }
      takeBatch() {
        const dd = this.queue.shift(),
          Od = [dd];
        let md = CO(dd.uploadToken) + dd.bytes;
        for (; this.queue.length > 0 && Od.length < 100 && this.queue[0].uploadToken === dd.uploadToken && md + this.queue[0].bytes <= 32768;) {
          const dd = this.queue.shift();
          Od.push(dd), md += dd.bytes
        }
        return {
          uploadToken: dd.uploadToken,
          events: Od
        }
      }
      async send(dd) {
        const Od = await this.sendOnce(dd);
        if ("refused" === Od && this.refusedTokens.add(dd.uploadToken), "retryLater" !== Od) return;
        const md = dd.events.filter((dd => ++dd.attempts < 3));
        md.length < dd.events.length && console.error(`Session replay timeline: dropped ${dd.events.length-md.length} events after 3 attempts.`), this.retries.push(...md), this.trimToCap()
      }
      async sendOnce(dd) {
        const Od = {
            uploadToken: dd.uploadToken,
            sentAtMs: Date.now(),
            events: dd.events.map((dd => dd.event))
          },
          md = JSON.stringify(Od);
        let Wd, Fd = null;
        try {
          Wd = await this.post(this.url, md, (0, lO.e)(md)), Wd.ok && (Fd = await Wd.json())
        } catch (Rd) {
          return console.warn("Session replay timeline upload failed.", Rd), "retryLater"
        }
        return null === Fd ? 408 === Wd.status || 429 === Wd.status || Wd.status >= 500 ? "retryLater" : (console.error(`Session replay timeline upload failed with ${Wd.status}; dropped ${dd.events.length} events.`), "dropped") : "rejected" in Fd ? Fd.retryable ? "retryLater" : (console.warn(`Session replay timeline refused: ${Fd.reason}; dropping this recording's events.`), "refused") : "sent"
      }
    }
    var MO = md(41405),
      dm = md(5359),
      Om = md(1368);
    class mm {
      constructor(dd) {
        var Od;
        this.tags = new fd, this.fpsMonitor = void 0, this.errorLogLink = void 0, this.lastTagsJson = "", this.clockMarked = !1, this.personUpdateTimer = null, this.expectedSessionId = "", this.recorderPatched = !1, this.gameContextKeys = [], this.firstGameJoined = !1, this.timeline = void 0, this.onDomBatch = void 0;
        const {
          recording: md
        } = dd;
        this.onDomBatch = dd.onDomBatch;
        const Xd = null !== dd.onDomBatch;
        Xd && this.patchRecorder(), this.timeline = new fO(md.uploadToken, dd.dryRun ? {
            post: ZO
          } : {}), this.timeline.start(),
          function(dd) {
            const Od = {
                supportedCompression: [Fd.b.GZipJS],
                hasFeatureFlags: !1,
                sessionRecording: {
                  endpoint: "/s/"
                },
                siteApps: [],
                toolbarParams: {},
                toolbarVersion: "toolbar",
                isAuthenticated: !1
              },
              md = window;
            md._POSTHOG_REMOTE_CONFIG = {
              ...md._POSTHOG_REMOTE_CONFIG,
              [dd]: {
                config: Od
              }
            }
          }(dd.posthog.projectApiKey), Fd.c.init(dd.posthog.projectApiKey, Ld({
            apiHost: dd.posthog.apiHost,
            recordingId: md.recordingId,
            recordDom: Xd,
            ownOrigins: [window.location.origin, new URL(IO.clientSideServerUrls.s3Url, window.location.href).origin],
            anonymised: md.anonymised,
            showsChat: (0, Wd.s)(md),
            allowAutomatedBrowsers: (0, dm.d)((0, dm.g)(), !1),
            onTimelineEvent: dd => {
              this.timeline.add(dd), "$pageview" === dd.event && dd.properties.$current_url && this.addReplayMarker("$pageview", {
                href: dd.properties.$current_url
              })
            },
            onDomBatch: dd => {
              this.takeDomBatch(dd)
            }
          })), Xd && Fd.c.startSessionRecording({
            sampling: !0
          }), this.expectedSessionId = md.recordingId, Fd.c.onSessionId((dd => {
            dd !== this.expectedSessionId && console.warn(`Session replay: PostHog session ${dd} differs from recording ${this.expectedSessionId}; events carry recording_id.`)
          })),
          function(dd, Od) {
            const {
              recording: md
            } = dd, Wd = {
              ...md.tags,
              site_used: cd.siteUsed,
              subsite_used: null !== cd.subsiteUsed && void 0 !== cd.subsiteUsed ? cd.subsiteUsed : "",
              is_iframed: cd.isIframed,
              entry_path: location.pathname,
              ...jd(),
              ...ed(md, Od),
              client_build: zd.c
            };
            Fd.c.register(Wd), null !== dd.videoStatus && Fd.c.register({
              replay_video_status: dd.videoStatus
            }), Fd.c.setPersonProperties(Wd, {
              ...Id("initial_", Wd),
              ...Dd(md)
            })
          }(dd, Xd), this.fpsMonitor = new Rd.d({
            onEpisodeStarted: dd => {
              this.capture("low_fps_started", {
                avg_fps: Math.round(dd)
              }), KO.j.lQ("sessionReplayLowFps", {
                low: !0
              })
            },
            onEpisodeEnded: dd => {
              this.capture("low_fps_episode", {
                duration_ms: dd.durationMs,
                min_fps: dd.minFps,
                avg_fps: dd.avgFps
              }), KO.j.lQ("sessionReplayLowFps", {
                low: !1
              })
            }
          }), this.errorLogLink = new Zd({
            dashboardHost: null !== (Od = dd.posthog.dashboardHost) && void 0 !== Od ? Od : dd.posthog.apiHost,
            recordingId: md.recordingId,
            getSessionId: () => Fd.c.get_session_id(),
            domRecorded: Xd,
            captureError: (dd, Od) => {
              this.captureClientError("logged", dd, Od)
            }
          }), (0, Om.annotateLoggedErrors)(((dd, Od) => this.errorLogLink.annotate(dd, Od))), new DO(this).start()
      }
      capture(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        Fd.c.capture(dd, Od)
      }
      captureAt(dd, Od, md) {
        Fd.c.capture(dd, Od, {
          timestamp: new Date(md)
        })
      }
      captureOnExit(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        Fd.c.capture(dd, Od, {
          timestamp: new Date(md)
        })
      }
      captureClientError(dd, Od, md) {
        this.setFlag("had_error"), this.capture("client_error", {
          kind: dd,
          message: Td(Od).slice(0, 300),
          source: null,
          error_name: null,
          ...md
        })
      }
      takeFullSnapshot() {
        if (this.tryFullSnapshot()) return;
        const dd = performance.now() + 1500,
          Od = setInterval((() => {
            (this.tryFullSnapshot() || performance.now() >= dd) && clearInterval(Od)
          }), 100)
      }
      setVideoStatus(dd, Od) {
        Fd.c.register({
          replay_video_status: dd
        });
        const md = "stopped_cellular" === dd ? "cellular" : "stopped_error" === dd ? "error" : null;
        null !== md && (this.capture("replay_video_stopped", {
          reason: md,
          detail: null === Od ? null : Td(Od).slice(0, 300)
        }), this.addReplayMarker("replay_video_stopped", {
          reason: md
        }))
      }
      stopDomRecording() {
        Fd.c.stopSessionRecording(), Fd.c.register({
          dom_recorded: !1
        })
      }
      optOut() {
        this.stopDomRecording(), Fd.c.set_config({
          before_send: () => null
        })
      }
      takeDomBatch(dd) {
        null !== this.onDomBatch ? this.onDomBatch(dd) : console.warn("Session replay: posthog-js recorded the page of an events-only recording; dropped it")
      }
      tryFullSnapshot() {
        var dd;
        return !(null === (dd = Fd.c.sessionRecording) || void 0 === dd || !dd.started) && (Pd().rrweb.record.takeFullSnapshot(), !0)
      }
      patchRecorder() {
        this.recorderPatched || (this.recorderPatched = !0, function() {
          const dd = Pd().rrwebPlugins,
            Od = dd.getRecordConsolePlugin;
          dd.getRecordConsolePlugin = () => Od({
            level: ["warn", "error", "assert"]
          })
        }(), this.markClockOnFullSnapshots())
      }
      markClockOnFullSnapshots() {
        const dd = Pd().rrweb.record,
          Od = dd.takeFullSnapshot;
        dd.takeFullSnapshot = dd => {
          Od(dd), this.markClock()
        }
      }
      markClock() {
        this.clockMarked = this.addReplayMarker(Wd.j.clock, {
          epochMs: (0, MO.b)(),
          perfNowMs: performance.now()
        }) || this.clockMarked
      }
      markClockIfDue(dd, Od) {
        this.clockMarked && dd % Od !== 0 || this.markClock()
      }
      addReplayMarker(dd) {
        var Od, md;
        let Wd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (!(arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) || Fd.c.sessionRecordingStarted()) && null !== (Od = null === (md = Fd.c.sessionRecording) || void 0 === md ? void 0 : md.tryAddCustomEvent(dd, Wd)) && void 0 !== Od && Od
      }
      gameJoined(dd, Od) {
        this.unregisterGameContext(), this.gameContextKeys = Object.keys(Od), Fd.c.register(Od), this.firstGameJoined || (this.firstGameJoined = !0, Fd.c.setPersonProperties(void 0, {
          first_game_ever: Od.game_name,
          first_game_ever_with_variation: Od.game_name_with_variation,
          first_game_ever_analytics_id: Od.game_analytics_id
        })), this.tags.gameJoined(dd, Date.now()), this.updateTags()
      }
      gameLeft() {
        this.unregisterGameContext(), this.tags.gameLeft(Date.now()), this.fpsMonitor.endEpisode(Date.now()), this.updateTags()
      }
      setFlag(dd) {
        this.tags.setFlag(dd) && this.updateTags()
      }
      addHitch(dd) {
        this.tags.addHitch(dd) && this.updateTags()
      }
      setSessionProperties(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        Fd.c.register(dd), Od && Fd.c.setPersonProperties(dd)
      }
      addPingSample(dd) {
        this.tags.addPingSample(dd) && this.updateTags()
      }
      addFpsSample(dd) {
        this.fpsMonitor.addSample(dd, Date.now());
        const Od = this.fpsMonitor.getTags();
        null !== Od && (this.tags.setFpsTags(Od), this.updateTags())
      }
      addUnboundKeyPresses(dd) {
        this.tags.addUnboundKeyPresses(dd), this.updateTags()
      }
      finalTags() {
        return this.fpsMonitor.endEpisode(Date.now()), this.tags.toProperties(Date.now())
      }
      updateTags() {
        const dd = this.tags.toProperties(),
          Od = JSON.stringify(dd);
        Od !== this.lastTagsJson && (this.lastTagsJson = Od, Fd.c.register(dd), null === this.personUpdateTimer && (this.personUpdateTimer = setTimeout((() => {
          this.personUpdateTimer = null, Fd.c.setPersonProperties(this.tags.toProperties())
        }), 0)))
      }
      unregisterGameContext() {
        for (const dd of this.gameContextKeys) Fd.c.unregister(dd);
        this.gameContextKeys = []
      }
    }
  },
  41405: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd
    });
    const Wd = 20;
    let Fd = Date.now() - performance.now();

    function Rd() {
      const dd = performance.now(),
        Od = Date.now();
      return Math.abs(Od - (dd + Fd)) > Wd && (Fd = Od - dd), dd + Fd
    }
  },
  41387: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd,
      c: () => Rd,
      e: () => Fd
    });
    const Wd = 32768;

    function Fd(dd) {
      return (new TextEncoder).encode(dd).byteLength
    }
    const Rd = new class {
      constructor() {
        this.inFlightBytes = 0, this.inFlightLabels = new Map
      }
      async fetch(dd, Od, md, Wd) {
        if (this.inFlightBytes + md > 49152) return await fetch(dd, Od);
        this.inFlightBytes += md, this.countLabel(Wd, 1);
        const Fd = () => {
          this.inFlightBytes -= md, this.countLabel(Wd, -1)
        };
        let Rd;
        try {
          Rd = await fetch(dd, {
            ...Od,
            keepalive: !0
          })
        } catch (Kd) {
          var Xd;
          if (Fd(), null !== (Xd = Od.signal) && void 0 !== Xd && Xd.aborted) throw Kd;
          return console.info("Session replay keepalive request failed; retrying without keepalive.", Kd), await fetch(dd, Od)
        }
        return Fd(), Rd
      }
      isInFlight(dd) {
        var Od;
        return (null !== (Od = this.inFlightLabels.get(dd)) && void 0 !== Od ? Od : 0) > 0
      }
      sendBeacon(dd, Od) {
        const md = Fd(Od);
        return !(this.inFlightBytes + md > 57344) && this.beaconSent(navigator.sendBeacon(dd, new Blob([Od], {
          type: "text/plain"
        })), md)
      }
      sendUploadBeacon(dd, Od, md) {
        return !(this.inFlightBytes + md > 40960) && this.beaconSent(navigator.sendBeacon(dd, Od), md)
      }
      countLabel(dd, Od) {
        var md;
        void 0 !== dd && this.inFlightLabels.set(dd, (null !== (md = this.inFlightLabels.get(dd)) && void 0 !== md ? md : 0) + Od)
      }
      beaconSent(dd, Od) {
        return dd && (this.inFlightBytes += Od, setTimeout((() => {
          this.inFlightBytes -= Od
        }), 1e4)), dd
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);